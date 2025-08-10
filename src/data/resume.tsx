import { Icons } from "@/components/icons";
import { HomeIcon, FileText } from "lucide-react";

export const DATA = {
  name: "Ajay Achugatla",
  initials: "AA",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Passionate developer crafting seamless web solutions. Turning ideas into intuitive, user-friendly experiences.",
  summary:
    "I’m Achugatla Ajay Kumar, a dedicated and enthusiastic B.Tech student specializing in Computer Science Engineering at CVR College of Engineering, Hyderabad. With a strong foundation in full-stack development, I excel in crafting innovative solutions that prioritize functionality and user experience. I am driven by a passion for learning, constantly seeking opportunities to apply my expertise, contribute to meaningful projects, and evolve as a dynamic and skilled developer.",
  avatarUrl: "/me.png",
  skills: [
    "Java",
    "HTML",
    "CSS",
    "Javascript",
    "Node.js",
    "Express.js",
    "React.js",
    "Next.js",
    "Typescript",
    "Postgres",
    "MongoDB",
    "TailwindCSS",
    "Git",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "ajayachugatla17@gmail.com",
    tel: "8074471789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/AjayAchugatla/",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ajayachugatla/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
      Resume: {
        name: "Resume",
        url: "https://drive.google.com/file/d/1649i6VfLwGZhSe1xYcsJptHtePJNwYOQ/view?usp=drive_link",
        icon: FileText,
        navbar: true
      }
    },
  },

  // work: [
  //   {
  //     company: "",
  //     href: "",
  //     badges: [],
  //     location: "",
  //     title: "",
  //     logoUrl: "",
  //     start: "",
  //     end: "",
  //     description:
  //       "",
  //   },
  // ],
  education: [
    {
      school: "CVR College of Engineering",
      degree: "B.Tech",
      logoUrl: "/cvr.webp",
      start: "2022",
      end: "2026",
    },
    {
      school: "Sri Gayatri Jr College",
      degree: "Intermediate Education",
      logoUrl: "/sg.jpg",
      start: "2020",
      end: "2022",
    },
  ],
  codingProfiles: {
    username: "ajayachugatla",
    platforms: [
      {
        name: "LeetCode",
        username: "ajayachugatla",
        url: "https://leetcode.com/ajayachugatla",
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
      },
      {
        name: "CodeForces",
        username: "ajayachugatla",
        url: "https://codeforces.com/profile/ajayachugatla",
        logoUrl: "https://cdn.iconscout.com/icon/free/png-256/free-code-forces-3628695-3029920.png",
      },
    ],
  },
  projects: [
    {
      title: "Convivialix",
      href: "https://convivialix.vercel.app/",
      active: true,
      description:
        "Convivialix is a full-stack social media platform that enables users to post content, upload images, interact through likes and comments, and follow others. The platform includes editable profiles, real-time follower stats, and secure authentication with modern UI components.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Prisma",
        "NeonDB",
        "Clerk",
        "UploadThing",
      ],
      links: [
        {
          type: "Website",
          href: "https://convivialix.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/AjayAchugatla/convivialix",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Tunifyx",
      href: "https://tunifyx.vercel.app/",
      active: true,
      description:
        "Tunifyx is a full-featured music streaming platform with admin-managed media, playlists, user analytics, and secure access. It offers a responsive design, seamless playback experience, and dashboard insights for both users and administrators.",
      technologies: [
        "React.js",
        "MongoDB",
        "TailwindCSS",
        "Express.js",
        "Node.js",
        "Zustand",
        "Clerk",
        "Cloudinary",
      ],
      links: [
        {
          type: "Website",
          href: "https://tunifyx.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/AjayAchugatla/Tunifyx",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "NoteVault",
      href: "https://mynotevault.vercel.app/",
      active: true,
      description:
        "NoteVault is a secure and efficient note-taking application offering email-based OTP verification, user-level isolation, folder management, and pinning. It features a clean UI with responsive design and robust session handling.",
      technologies: [
        "React.js",
        "MongoDB",
        "TailwindCSS",
        "Express.js",
        "Node.js",
      ],
      links: [
        {
          type: "Website",
          href: "https://mynotevault.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/AjayAchugatla/NoteVault",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Snip",
      href: "https://snipapp.vercel.app/",
      active: true,
      description:
        "Snip is a modern URL shortening application with user authentication, custom slug creation, and real-time click analytics. It includes a personalized dashboard and mobile-friendly interface for link management.",
      technologies: [
        "React.js",
        "Supabase",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://snipapp.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/AjayAchugatla/snip",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Payments App",
      href: "https://payments-app-frontend.onrender.com/",
      active: true,
      description:
        "Payments App is a digital transaction platform that enables users to send money securely to others. It leverages MongoDB transactions for atomic transfers and includes login, transfer history, and user profile management.",
      technologies: [
        "React.js",
        "MongoDB",
        "TailwindCSS",
        "Express.js",
        "Node.js",
      ],
      links: [
        {
          type: "Website",
          href: "https://payments-app-frontend.onrender.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/AjayAchugatla/Money-Transer-App",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Currency Converter",
      href: "https://currencyconverter0018.netlify.app/",
      active: true,
      description:
        "Currency Converter is a lightweight tool that provides accurate and real-time currency exchange conversions using a public API. It features a minimalistic and responsive UI for quick and easy conversions.",
      technologies: [
        "React.js",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://currencyconverter0018.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/AjayAchugatla/Currency-Converter",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "BMI Wizard",
      href: "https://bmi-wizard.netlify.app/",
      active: true,
      description:
        "BMI Wizard is a health-focused tool that calculates Body Mass Index and provides custom diet and workout suggestions based on user input. It features an intuitive interface for quick access to fitness recommendations.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Uiverse Components",
      ],
      links: [
        {
          type: "Website",
          href: "https://bmi-wizard.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/AjayAchugatla/BMI-WIZARD",
          icon: <Icons.github className="size-3" />,
        },
      ],
    }
  ]
  ,
} as const;
