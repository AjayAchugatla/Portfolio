"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, Trophy, Target, TrendingUp, Calendar, Globe, User, WifiOff } from "lucide-react";
import React from "react";

interface CodingProfileCardProps {
    platform: string;
    username: string;
    profileUrl: string;
    logoUrl: string;
    stats: {
        // LeetCode specific
        totalSolved?: number;
        totalQuestions?: number;
        easySolved?: number;
        mediumSolved?: number;
        hardSolved?: number;
        acceptanceRate?: number;
        ranking?: number;

        // CodeForces specific
        rating?: number;
        maxRating?: number;
        rank?: string;
        maxRank?: string;
        contestsParticipated?: number;
        friendOfCount?: number;
        organization?: string;
        country?: string;
    } | null;
}

export const CodingProfileCard = ({
    platform,
    username,
    profileUrl,
    logoUrl,
    stats,
}: CodingProfileCardProps) => {
    // Check if API is offline
    const isOffline = stats === null;

    return (
        <Card className="h-full hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                    <Avatar className="w-12 h-12 border bg-white">
                        <AvatarImage
                            src={logoUrl}
                            alt={platform}
                            className="object-contain p-2"
                        />
                        <AvatarFallback className="bg-muted">{platform[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                        <CardTitle className="text-lg">{platform}</CardTitle>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span>@{username}</span>
                            <a
                                href={profileUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center hover:text-foreground transition-colors"
                            >
                                <ExternalLink className="w-3 h-3" />
                            </a>
                        </div>
                    </div>
                    {isOffline && (
                        <div className="flex items-center gap-1 text-red-500 text-sm">
                            <WifiOff className="w-4 h-4" />
                            <span>API Offline</span>
                        </div>
                    )}
                </div>
            </CardHeader>

            <CardContent className="space-y-4">
                {isOffline ? (
                    <div className="text-center py-8">
                        <WifiOff className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                        <p className="text-muted-foreground">API is currently offline</p>
                        <p className="text-sm text-muted-foreground mt-1">Please check back later</p>
                    </div>
                ) : (
                    <>
                        {/* Primary Stats */}
                        <div className="grid grid-cols-2 gap-4">
                            {stats?.totalSolved !== undefined && (
                                <div className="text-center p-3 bg-muted/50 rounded-lg">
                                    <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground mb-1">
                                        <Target className="w-3 h-3" />
                                        <span>Solved</span>
                                    </div>
                                    <div className="text-2xl font-bold text-primary">{stats.totalSolved}</div>
                                    {stats.totalQuestions && (
                                        <div className="text-xs text-muted-foreground">of {stats.totalQuestions}</div>
                                    )}
                                </div>
                            )}

                            {stats?.rating !== undefined && stats.rating > 0 && (
                                <div className="text-center p-3 bg-muted/50 rounded-lg">
                                    <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground mb-1">
                                        <TrendingUp className="w-3 h-3" />
                                        <span>Rating</span>
                                    </div>
                                    <div className="text-2xl font-bold text-green-600">{stats.rating}</div>
                                    {stats.maxRating && (
                                        <div className="text-xs text-muted-foreground">max: {stats.maxRating}</div>
                                    )}
                                </div>
                            )}

                            {stats?.ranking !== undefined && stats.ranking > 0 && (
                                <div className="text-center p-3 bg-muted/50 rounded-lg">
                                    <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground mb-1">
                                        <Trophy className="w-3 h-3" />
                                        <span>Rank</span>
                                    </div>
                                    <div className="text-2xl font-bold text-yellow-600">#{stats.ranking}</div>
                                </div>
                            )}

                            {stats?.rank && stats.rank !== 'unrated' && (
                                <div className="text-center p-3 bg-muted/50 rounded-lg">
                                    <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground mb-1">
                                        <Trophy className="w-3 h-3" />
                                        <span>Rank</span>
                                    </div>
                                    <div className="text-lg font-bold text-yellow-600 capitalize">{stats.rank}</div>
                                    {stats.maxRank && stats.maxRank !== stats.rank && (
                                        <div className="text-xs text-muted-foreground">max: {stats.maxRank}</div>
                                    )}
                                </div>
                            )}

                            {stats?.contestsParticipated !== undefined && stats.contestsParticipated > 0 && (
                                <div className="text-center p-3 bg-muted/50 rounded-lg">
                                    <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground mb-1">
                                        <Calendar className="w-3 h-3" />
                                        <span>Contests</span>
                                    </div>
                                    <div className="text-2xl font-bold text-blue-600">{stats.contestsParticipated}</div>
                                </div>
                            )}

                            {stats?.acceptanceRate !== undefined && stats.acceptanceRate > 0 && (
                                <div className="text-center p-3 bg-muted/50 rounded-lg">
                                    <div className="text-sm text-muted-foreground mb-1">Acceptance</div>
                                    <div className="text-2xl font-bold text-purple-600">{stats.acceptanceRate}%</div>
                                </div>
                            )}
                        </div>

                        {/* Problem Breakdown (for LeetCode) */}
                        {(stats?.easySolved !== undefined || stats?.mediumSolved !== undefined || stats?.hardSolved !== undefined) && (
                            <>
                                <Separator />
                                <div className="space-y-2">
                                    <h4 className="text-sm font-medium text-muted-foreground">Problem Breakdown</h4>
                                    <div className="grid grid-cols-3 gap-2 text-center">
                                        {stats.easySolved !== undefined && (
                                            <div className="p-2 bg-green-50 dark:bg-green-950/20 rounded">
                                                <div className="text-xs text-green-700 dark:text-green-300">Easy</div>
                                                <div className="font-semibold text-green-800 dark:text-green-200">{stats.easySolved}</div>
                                            </div>
                                        )}
                                        {stats.mediumSolved !== undefined && (
                                            <div className="p-2 bg-yellow-50 dark:bg-yellow-950/20 rounded">
                                                <div className="text-xs text-yellow-700 dark:text-yellow-300">Medium</div>
                                                <div className="font-semibold text-yellow-800 dark:text-yellow-200">{stats.mediumSolved}</div>
                                            </div>
                                        )}
                                        {stats.hardSolved !== undefined && (
                                            <div className="p-2 bg-red-50 dark:bg-red-950/20 rounded">
                                                <div className="text-xs text-red-700 dark:text-red-300">Hard</div>
                                                <div className="font-semibold text-red-800 dark:text-red-200">{stats.hardSolved}</div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </>
                        )}

                    </>
                )}
            </CardContent>
        </Card>
    );
};
