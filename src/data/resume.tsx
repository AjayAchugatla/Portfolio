import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

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
    "React",
    "Next.js",
    "Typescript",
    "Postgres",
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
        url: "https://www.linkedin.com/in/achugatla-ajay-kumar-71b4ba292/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
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
  projects: [
    {
      title: "Note Vault",
      href: "https://note-vault-sand.vercel.app/",
      dates: "July 2024 - Oct 2024",
      active: true,
      description:
        "NoteVault is a dynamic and user-friendly notes application designed to streamline personal organization. It features secure user authentication, allowing individuals to sign up and log in effortlessly. With intuitive functionality, users can create, edit, delete, and manage their notes seamlessly, all within a responsive and visually appealing interface.",
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
          href: "https://note-vault-sand.vercel.app/",
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
      title: "Payments App",
      href: "https://payments-app-frontend.onrender.com/",
      dates: "Aug 2024",
      active: true,
      description:
        "Payments App is a secure and intuitive platform for managing digital transactions. It offers seamless user authentication, profile management, and the ability to send money to registered users. Built with reliability in mind, it leverages MongoDB transactions to ensure secure and atomic transfers, all within a responsive and user-centric interface.",
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
      dates: "Jul 2024",
      active: true,
      description:
        "Currency Converter is a React-based application designed to provide real-time currency exchange rate conversions. By leveraging an API, it ensures accurate and up-to-date information, enabling users to seamlessly convert between multiple currencies through an intuitive and responsive interface.",
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
      dates: "Feb 2024 - June 2024",
      active: true,
      description:
        "BMI Wizard is a web application designed to help users calculate their Body Mass Index (BMI) and receive personalized diet and exercise recommendations based on their BMI category. The application is intuitive and user-friendly, catering to users of all backgrounds to improve their health through informed decisions.",
      technologies: [
        "HTML",
        "CSS",
        "Javascript",
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
    },
  ],
} as const;
