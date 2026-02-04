  const IMAGE_BASE_URL = import.meta.env.VITE_CLOUDFRONT_IMAGE_URL
  
  export const mockItems = [
    {
      id: 'item-11',
      title: 'AniHive',
      bucketname: 'anihive',
      subtitle: 'Anime Discovery Platform',
      description: "A modern anime browsing platform integrated with Jikan, MAL, and Anilist API, " + 
      "featuring advanced search, filtering, Tracking with MAL integration, and discovery capabilities.",
      techStack: ['React.js', 'Tailwind',, 'NodeJS', 'Jikan API', 'Mal API', 'Anilist API'],
      projectLink: 'https://ani-hive-ilrc.vercel.app/',
      category: 'Frontend',
      color: 'from-pink-500 to-rose-400'
    },
    {
      id: 'item-345',
      title: 'Crave Canva',
      bucketname: 'cravecanva',
      subtitle: 'Food Blog & Recipe Platform',
      description: "A food blog platform featuring curated recipes, categorized collections, and step-by-step cooking guides. Users can explore and search their favorite dishes with an intuitive, mobile-friendly interface.",
      techStack: ['WordPress', 'Elementor', 'PHP'],
      category: 'Full Stack',
      color: 'from-pink-500 to-rose-400'
    },
    {
      id: 'item-3',
      title: 'Music Go',
      bucketname: 'musicgo',
      subtitle: 'Music Platform',
      description: "A web application for exploring and vibing with musics, with different features such as playlist, library and more.",
      techStack: ['React', 'Tailwind', 'Python', 'Shadcn'],
      projectLink: 'https://music-go.vercel.app/',
      category: 'Full Stack',
      color: 'from-blue-500 to-pink-400'
    },
    {
      id: 'item-385',
      title: 'Auto Verse',
      bucketname: 'autoverse',
      subtitle: 'Car Dealership Website',
      description: "A wordpress based car dealership system featuring dynamic vehicle listings, advanced filtering, and admin management. Customers can easily explore vehicles, book test drives, and submit price offers seamlessly.",
      techStack: ['WordPress', 'Elementor', 'PHP'],
      category: 'Full Stack',
      color: 'from-blue-500 to-rose-400'
    },
    {
      id: 'item-1',
      title: 'Kanoah',
      bucketname: 'kanoah',
      subtitle: 'Web-Based Service Finder',
      description: "A comprehensive web application for searching and booking services based on the user's location, featuring real-time chat integration and intelligent service matching algorithms.",
      techStack: ['React', 'Tailwind', 'Node.js', 'Express.js', 'MongoDB'],
      video: `https://res.cloudinary.com/dnbgrdgpn/video/upload/v1719447721/KanoahVideoDemo_fibs2p.mp4`,
      projectLink: 'https://kanoah-web.vercel.app/',
      category: 'Full Stack',
      color: 'from-blue-500 to-cyan-400'
    },
    {
      id: 'item-2',
      title: 'Trip Nest (In Progress)',
      bucketname: 'tripnest',
      subtitle: 'Travel Planning Platform',
      description: "A web application for finding travel locations based on user preferences, featuring a user-friendly interface and advanced search capabilities.",
      techStack: ['React', 'Tailwind', 'LocationIQ'],
      category: 'Frontend',
      color: 'from-blue-500 to-gray-400'
    },
    {
      id: 'item-35',
      title: 'Ocean Trip',
      bucketname: 'mar',
      subtitle: 'Booking Platform',
      description: "The System to Book Wildlife Trips is a digital platform designed to make planning and reserving wildlife adventures easier and more accessible. It allows users to browse through various destinations, view available tour packages, check pricing, and book trips directly through the system.",
      techStack: ['WordPress', 'Elementor'],
      category: 'Full Stack',
      color: 'from-blue-500 to-pink-400'
    },
    {
      id: 'item-4',
      title: 'Chat Wave',
      bucketname: 'chatwave',
      subtitle: 'Real-time Communication Platform',
      description: "A sophisticated chat system with real-time messaging, friendship features, and seamless user experience built for modern communication needs.",
      techStack: ['React', 'Tailwind', 'Node.js', 'MongoDB', 'Socket.io'],
      video: ``,
      projectLink: 'https://convo-wave.vercel.app/',
      category: 'Full Stack',
      color: 'from-purple-500 to-pink-400'
    },
    {
      id: 'item-5',
      title: 'Swift POS',
      bucketname: 'swiftpos',
      subtitle: 'Point of Sale System',
      description: "A comprehensive Point of Sale system with intuitive UI, featuring daily, monthly, and annual reports with advanced expense tracking capabilities.",
      techStack: ['React', 'Tailwind', 'MySQL', 'Laravel'],
      video: `https://res.cloudinary.com/dnbgrdgpn/video/upload/v1719447816/SwiftPOSVideoDemo_xukej0.mp4`,
      category: 'Full Stack',
      color: 'from-green-500 to-emerald-400'
    },
    {
      id: 'item-6',
      title: 'Kanoah Mobile',
      bucketname: 'kanoahmobile',
      subtitle: 'Mobile Service Platform',
      description: "A mobile-first application for searching and booking services with location-based features and integrated chat functionality for seamless user experience.",
      techStack: ['React Native', 'Tailwind', 'Node.js', 'Express.js', 'MongoDB'],
      category: 'Mobile',
      color: 'from-orange-500 to-red-400'
    },
    {
      id: 'item-7',
      title: 'Advanced Calculator',
      bucketname: 'advancecalculator',
      subtitle: 'Scientific Computing Tool',
      description: "A sophisticated calculator supporting continuous equations and advanced mathematical operations with an intuitive user interface.",
      techStack: ['HTML', 'Tailwind', 'JavaScript'],
      projectLink: 'https://advance-calculator-rose.vercel.app/',
      category: 'Frontend',
      color: 'from-indigo-500 to-purple-400'
    },
    {
      id: 'item-8',
      title: 'Crown Funding',
      bucketname: 'crownfunding',
      subtitle: 'Crowdfunding Platform',
      description: "A modern crowdfunding platform based on Frontend Mentor challenge, featuring responsive design and interactive user elements.",
      techStack: ['HTML', 'Tailwind', 'JavaScript'],
      projectLink: 'https://crowd-funding-page-opal.vercel.app/',
      category: 'Frontend',
      color: 'from-teal-500 to-green-400'
    },
    {
      id: 'item-9',
      title: 'Multi Step Form',
      bucketname: 'multistepform',
      subtitle: 'Interactive Form Builder',
      description: "A multi-step form with plan selection and addon features, showcasing advanced form handling and state management.",
      techStack: ['React', 'Tailwind', 'Redux'],
      projectLink: 'https://multi-step-form-sooty-seven.vercel.app/',
      category: 'Frontend',
      color: 'from-rose-500 to-orange-400'
    },
    {
      id: 'item-10',
      title: 'Password Generator',
      bucketname: 'passwordgenerator',
      subtitle: 'Security Tool',
      description: "A robust password generator with customizable options and security features, built as a Frontend Mentor challenge solution.",
      techStack: ['React', 'Bootstrap'],
      projectLink: 'https://password-generator-plum-three.vercel.app/',
      category: 'Frontend',
      color: 'from-yellow-500 to-orange-400'
    },
    {
      id: 'item-11',
      title: 'Authify',
      bucketname: 'authify',
      subtitle: 'Authentication System',
      description: "A comprehensive authentication system featuring OAuth integration, password recovery, and advanced security measures for modern applications.",
      techStack: ['Next.js', 'Tailwind', 'MongoDB', 'Shadcn', 'Nodemailer'],
      projectLink: 'https://authify-three.vercel.app/',
      category: 'Full Stack',
      color: 'from-violet-500 to-purple-400'
    }
  ]