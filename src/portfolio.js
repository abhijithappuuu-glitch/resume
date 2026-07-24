/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Abhijith B Portfolio",
  description:
    "Computer Science Engineering student passionate about AI, Full Stack Development, Cybersecurity, Cloud Computing and Building Real World Applications.",
  og: {
    title: "Abhijith B Portfolio",
    type: "website",
    url: "http://localhost:3000/", // Replace with actual URL
  },
};

//Home Page
const greeting = {
  title: "Hi, I'm Abhijith 👋",
  logo_name: "Abhijith",
  nickname: "",
  subTitle:
    "Computer Science Engineering Student | Full Stack Developer | AI/ML Enthusiast | Cybersecurity Researcher",
  resumeLink: "/Abhijith_B_Resume.pdf",
  portfolio_repository: "https://github.com/abhijithappuuu-glitch/resume", // Adjust if needed
  githubProfile: "https://github.com/abhijithappuuu-glitch", // Add your Github Link
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com", // Add your Github Link
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com", // Add your LinkedIn Link
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:abhijithappuuu@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React",
        "⚡ Developing full stack web applications using Node.js and MongoDB",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
      ],
    },
    {
      title: "AI & Machine Learning",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Developing applications with OCR and Deep Learning capabilities",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "NLP",
          fontAwesomeClassname: "simple-icons:nlp",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Computer Vision",
          fontAwesomeClassname: "simple-icons:opencv",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Deep Learning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Cyber Security",
      fileName: "DesignImg",
      skills: [
        "⚡ Experience in conducting Vulnerability Assessment and Penetration Testing (VAPT)",
        "⚡ Proficient in using industry-standard tools like Burp Suite and Wireshark",
      ],
      softwareSkills: [
        {
          skillName: "Kali Linux",
          fontAwesomeClassname: "simple-icons:kalilinux",
          style: {
            color: "#557C94",
          },
        },
        {
          skillName: "Wireshark",
          fontAwesomeClassname: "simple-icons:wireshark",
          style: {
            color: "#1679A7",
          },
        },
        {
          skillName: "Nmap",
          fontAwesomeClassname: "simple-icons:nmap",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "OWASP",
          fontAwesomeClassname: "simple-icons:owasp",
          style: {
            color: "#000000",
          },
        },
      ],
    },
    {
      title: "Programming & Cloud",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Proficient in various programming languages like Java, Python, and C",
        "⚡ Experience with Cloud & DevOps tools including Docker and Firebase",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#007396",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#A8B9CC",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#FCC624",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "GitHub",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "#181717",
      },
      profileLink: "#",
    },
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "#",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "#",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "#",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "SDM College of Engineering and Technology",
      subtitle: "Bachelor of Engineering in Computer Science Engineering",
      logo_path: "iiitk_logo.png", // Replace with appropriate logo if available
      alt_name: "SDMCET",
      duration: "2022 - Present",
      descriptions: [
        "⚡ Currently pursuing undergraduate degree in Computer Science Engineering.",
      ],
      website_link: "#",
    },
    {
      title: "Vishwajyothi PU College",
      subtitle: "PCMB",
      logo_path: "iiitk_logo.png",
      alt_name: "Vishwajyothi PU College",
      duration: "2020 - 2022",
      descriptions: ["⚡ Completed Pre-University education."],
      website_link: "#",
    },
    {
      title: "Vishwajyothi International Public School",
      subtitle: "ICSE",
      logo_path: "iiitk_logo.png",
      alt_name: "Vishwajyothi International Public School",
      duration: "2008 - 2020",
      descriptions: ["⚡ Completed schooling."],
      website_link: "#",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Infosys Springboard OOAD",
      subtitle: "",
      logo_path: "coursera_logo.png",
      certificate_link: "#",
      alt_name: "Infosys",
      color_code: "#2A73CC",
    },
    {
      title: "MongoDB",
      subtitle: "",
      logo_path: "coursera_logo.png",
      certificate_link: "#",
      alt_name: "MongoDB",
      color_code: "#47A248",
    },
    {
      title: "HTML",
      subtitle: "",
      logo_path: "coursera_logo.png",
      certificate_link: "#",
      alt_name: "HTML",
      color_code: "#E34F26",
    },
    {
      title: "Agamya Cyber Tech Summit (2nd Prize)",
      subtitle: "",
      logo_path: "coursera_logo.png",
      certificate_link: "#",
      alt_name: "Hackathon",
      color_code: "#000000",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internships",
  description:
    "I have gained valuable experience working on real-world projects, including enterprise-scale web applications, AI tools, and full-stack development, while also engaging in freelance work and cybersecurity research.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Development Intern",
          company: "Algoarn Technologies",
          company_url: "#",
          logo_path: "google_logo.png", // Replace
          duration: "Current",
          location: "India",
          description:
            "Worked on enterprise-scale web applications involving frontend development, UI/UX design, API integration, requirement analysis, and software architecture. Contributed to confidential production projects under a Non-Disclosure Agreement (NDA).",
          color: "#0879bf",
        },
        {
          title: "Freelance",
          company: "Self-Employed",
          company_url: "#",
          logo_path: "google_logo.png", // Replace
          duration: "Past",
          location: "Remote",
          description:
            "Full Stack Developer, OCR Research, AI Development, Website Development, ML Research.",
          color: "#9b1578",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My featured projects span across AI, Blockchain, AR/VR, and Mobile Development.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Achievements",
  description: "Some of my notable achievements and community involvement.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "achieve-1",
      name: "2nd Prize — Agamya Cyber Tech Summit Hackathon",
      createdAt: "",
      description: "Hackathon achievement.",
      url: "#",
    },
    {
      id: "achieve-2",
      name: "Founder & Coordinator — Anonymous Cybersecurity Club",
      createdAt: "",
      description: "Community leadership.",
      url: "#",
    },
    {
      id: "achieve-3",
      name: "Volunteer — Insignia",
      createdAt: "",
      description: "Event volunteering.",
      url: "#",
    },
    {
      id: "achieve-4",
      name: "National Level Women's Badminton Tournament Volunteer",
      createdAt: "",
      description: "Event volunteering.",
      url: "#",
    },
    {
      id: "achieve-5",
      name: "Tree Plantation Initiative",
      createdAt: "",
      description: "Social cause.",
      url: "#",
    },
    {
      id: "achieve-6",
      name: "NMMS Student Mentor",
      createdAt: "",
      description: "Mentoring students.",
      url: "#",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "abhijith_profile.jpg",
    description:
      "I am available on social media. You can message me, I will reply within 24 hours. I can help you with Full Stack Development, Cybersecurity, AI/ML, and more.",
  },
  blogSection: {
    title: "Blogs",
    subtitle: "Coming Soon",
    link: "#",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Dharwad, Karnataka, India",
    locality: "Dharwad",
    country: "India",
    region: "Karnataka",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "#",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
