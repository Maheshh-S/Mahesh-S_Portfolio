export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  
  {
    id: 3,
    name: 'Contact',
    href: '#contact',
  },
];



export const myProjects = [
  {
    title: 'Task Mate - Ai Study planner and Material Organizer',
    desc: 'Task Mate is a Web Application that helps users manage their daily tasks and study materials efficiently. It leverages the power of OpenAI to generate personalized study plans and materials based on user inputs and Users can store and access their study materials in a user-friendly interface.',
    subdesc:
      'Built as a unique Software-as-a-Service app with Next.js 14, Tailwind CSS, TypeScript, Firebase , Task Mate is designed for optimal performance and scalability.',
    href: 'https://mytaskmate.vercel.app/',
    texture: '/textures/project/Project_1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Pinterest Clone',
    desc: 'pinterest clone is a clone of the popular social media platform. Built with React.js, TypeScript, and Tailwind CSS. It features a user-friendly interface and a responsive design, making it easy to navigate and explore a vast collection of images and videos.',
    subdesc:
      'The Pinterest Clone is a sleek and modern replica of the popular visual discovery platform, built with React.js, TypeScript, and Tailwind CSS. It boasts a clean, responsive UI that ensures a seamless browsing experience. With an intuitive design, users can effortlessly explore, save, and organize a diverse collection of images, making inspiration just a click away. 🚀 ',
    href: 'https://Mahesh-PinterestClone.vercel.app/',
    texture: '/textures/project/Project_2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      
    ],
  },
];
  

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};



