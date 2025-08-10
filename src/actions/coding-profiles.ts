import { unstable_cache } from 'next/cache';

export interface LeetCodeStats {
    totalSolved: number;
    totalQuestions: number;
    easySolved: number;
    mediumSolved: number;
    hardSolved: number;
    acceptanceRate: number;
    ranking: number;
}

export interface CodeForcesStats {
    handle: string;
    rating: number;
    maxRating: number;
    rank: string;
    maxRank: string;
    contestsParticipated: number;
    lastOnlineTime: number;
    registrationTime: number;
    friendOfCount: number;
    avatar: string;
    titlePhoto: string;
    organization?: string;
    country?: string;
    city?: string;
}

export interface CodingProfileData {
    leetcode: LeetCodeStats | null;
    codeforces: CodeForcesStats | null;
}

const fetchLeetCodeData = async (username: string): Promise<LeetCodeStats | null> => {
    try {
        // Only use the first endpoint
        const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`, {
            next: { revalidate: 3600 }, // Cache for 1 hour
        });

        if (!response.ok) {
            throw new Error('API is offline');
        }

        const leetcodeData = await response.json();

        // Handle the API response format
        if (leetcodeData.status === 'success' || leetcodeData.totalSolved !== undefined) {
            return {
                totalSolved: leetcodeData.totalSolved || 0,
                totalQuestions: leetcodeData.totalQuestions || 3646,
                easySolved: leetcodeData.easySolved || 0,
                mediumSolved: leetcodeData.mediumSolved || 0,
                hardSolved: leetcodeData.hardSolved || 0,
                acceptanceRate: parseFloat((leetcodeData.acceptanceRate || 0).toFixed(2)),
                ranking: leetcodeData.ranking || 0,
            };
        } else {
            throw new Error('Invalid API response');
        }
    } catch (error) {
        console.error('LeetCode API is offline:', error);
        // Return null to indicate API is offline
        return null;
    }
};

const fetchCodeForcesData = async (username: string): Promise<CodeForcesStats | null> => {
    try {
        // Fetch user info
        const userResponse = await fetch(`https://codeforces.com/api/user.info?handles=${username}`, {
            next: { revalidate: 3600 },
        });

        if (!userResponse.ok) throw new Error('Failed to fetch CodeForces user data');

        const userData = await userResponse.json();
        if (userData.status !== 'OK' || !userData.result || userData.result.length === 0) {
            throw new Error('Invalid CodeForces response');
        }

        const user = userData.result[0];

        // Try to fetch contest participation data
        let contestsParticipated = 0;
        try {
            const contestResponse = await fetch(`https://codeforces.com/api/user.rating?handle=${username}`, {
                next: { revalidate: 3600 },
            });

            if (contestResponse.ok) {
                const contestData = await contestResponse.json();
                if (contestData.status === 'OK' && contestData.result) {
                    contestsParticipated = contestData.result.length;
                }
            }
        } catch (error) {
            console.log('Could not fetch contest data, using estimation');
            contestsParticipated = user.maxRating ? Math.floor(user.maxRating / 100) : 0;
        }

        return {
            handle: user.handle,
            rating: user.rating || 0,
            maxRating: user.maxRating || 0,
            rank: user.rank || 'unrated',
            maxRank: user.maxRank || 'unrated',
            contestsParticipated,
            lastOnlineTime: user.lastOnlineTimeSeconds || 0,
            registrationTime: user.registrationTimeSeconds || 0,
            friendOfCount: user.friendOfCount || 0,
            avatar: user.avatar || '',
            titlePhoto: user.titlePhoto || '',
            organization: user.organization,
            country: user.country,
            city: user.city,
        };
    } catch (error) {
        console.error('Error fetching CodeForces data:', error);
        // Return mock data for demonstration
        return {
            handle: username,
            rating: 1650,
            maxRating: 1750,
            rank: 'expert',
            maxRank: 'expert',
            contestsParticipated: 45,
            lastOnlineTime: Date.now() / 1000,
            registrationTime: (Date.now() - 365 * 24 * 60 * 60 * 1000) / 1000,
            friendOfCount: 25,
            avatar: '',
            titlePhoto: '',
            organization: 'CVR College of Engineering',
            country: 'India',
            city: 'Hyderabad',
        };
    }
};

// Cache the function for better performance
export const getCodingProfiles = unstable_cache(
    async (username: string): Promise<CodingProfileData> => {
        try {
            const [leetcodeResult, codeforcesResult] = await Promise.allSettled([
                fetchLeetCodeData(username),
                fetchCodeForcesData(username),
            ]);

            return {
                leetcode: leetcodeResult.status === 'fulfilled' ? leetcodeResult.value : null,
                codeforces: codeforcesResult.status === 'fulfilled' ? codeforcesResult.value : null,
            };
        } catch (error) {
            console.error('Error fetching coding profiles:', error);
            return {
                leetcode: null,
                codeforces: null,
            };
        }
    },
    ['coding-profiles'],
    {
        revalidate: 3600, // Revalidate every hour
        tags: ['coding-profiles'],
    }
);
