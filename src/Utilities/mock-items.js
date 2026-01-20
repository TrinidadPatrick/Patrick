  const IMAGE_BASE_URL = import.meta.env.VITE_CLOUDFRONT_IMAGE_URL
  
  export const mockItems = [
    {
      id: 'item-11',
      title: 'AniHive',
      s3FolderName: 'ani-hive',
      subtitle: 'Anime Discovery Platform',
      description: "A modern anime browsing platform integrated with Jikan API, featuring advanced search, filtering, and discovery capabilities.",
      techStack: ['React.js', 'Tailwind', 'Jikan API'],
      img: Array.from({length : 7}, (_, index) => `${IMAGE_BASE_URL}/portfolio-images/project-images/ani-hive/image-${index + 1}.png`),
      projectLink: 'https://ani-hive-ilrc.vercel.app/',
      category: 'Frontend',
      color: 'from-pink-500 to-rose-400'
    },
    {
      id: 'item-345',
      title: 'Crave Canva',
      s3FolderName: 'crave-canva',
      subtitle: 'Food Blog & Recipe Platform',
      description: "A food blog platform featuring curated recipes, categorized collections, and step-by-step cooking guides. Users can explore and search their favorite dishes with an intuitive, mobile-friendly interface.",
      techStack: ['WordPress', 'Elementor', 'PHP'],
      img: Array.from({length : 10}, (_, index) => `${IMAGE_BASE_URL}/portfolio-images/project-images/crave-canva/image-${index + 1}.png`),
      category: 'Full Stack',
      color: 'from-pink-500 to-rose-400'
    },
    {
      id: 'item-385',
      title: 'Auto Verse',
      s3FolderName: 'auto-verse',
      subtitle: 'Car Dealership Website',
      description: "A wordpress based car dealership system featuring dynamic vehicle listings, advanced filtering, and admin management. Customers can easily explore vehicles, book test drives, and submit price offers seamlessly.",
      techStack: ['WordPress', 'Elementor', 'PHP'],
      img: Array.from({length : 13}, (_, index) => `${IMAGE_BASE_URL}/portfolio-images/project-images/auto-verse/image-${index + 1}.png`),
      category: 'Full Stack',
      color: 'from-blue-500 to-rose-400'
    },
    {
      id: 'item-1',
      title: 'Kanoah',
      s3FolderName: 'kanoah',
      subtitle: 'Web-Based Service Finder',
      description: "A comprehensive web application for searching and booking services based on the user's location, featuring real-time chat integration and intelligent service matching algorithms.",
      techStack: ['React', 'Tailwind', 'Node.js', 'Express.js', 'MongoDB'],
      img: Array.from({length : 10}, (_, index) => `${IMAGE_BASE_URL}/portfolio-images/project-images/kanoah/image-${index + 1}.png`),
      video: `https://res.cloudinary.com/dnbgrdgpn/video/upload/v1719447721/KanoahVideoDemo_fibs2p.mp4`,
      projectLink: 'https://kanoah-web.vercel.app/',
      category: 'Full Stack',
      color: 'from-blue-500 to-cyan-400'
    },
    {
      id: 'item-2',
      title: 'Trip Nest (In Progress)',
      subtitle: 'Travel Planning Platform',
      description: "A web application for finding travel locations based on user preferences, featuring a user-friendly interface and advanced search capabilities.",
      techStack: ['React', 'Tailwind', 'LocationIQ'],
      img: [
        'https://res.cloudinary.com/dnbgrdgpn/image/upload/v1749113417/Screenshot_2025-06-05_165003_lq11e1.png'
      ],
      category: 'Frontend',
      color: 'from-blue-500 to-gray-400'
    },
    {
      id: 'item-3',
      title: 'Music Go',
      s3FolderName: 'music-go',
      subtitle: 'Music Platform',
      description: "A web application for exploring and vibing with musics, with different features such as playlist, library and more.",
      techStack: ['React', 'Tailwind', 'Python', 'Shadcn', 'MySQL'],
      img: Array.from({length : 7}, (_, index) => `${IMAGE_BASE_URL}/portfolio-images/project-images/music-go/image-${index + 1}.png`),
      projectLink: 'https://music-go.vercel.app/',
      category: 'Full Stack',
      color: 'from-blue-500 to-pink-400'
    },
    {
      id: 'item-35',
      title: 'Ocean Trip',
      subtitle: 'Booking Platform',
      description: "The System to Book Wildlife Trips is a digital platform designed to make planning and reserving wildlife adventures easier and more accessible. It allows users to browse through various destinations, view available tour packages, check pricing, and book trips directly through the system.",
      techStack: ['WordPress', 'Elementor'],
      img: Array.from({length : 6}, (_, index) => `${IMAGE_BASE_URL}/portfolio-images/project-images/MAR/image-${index + 1}.png`),
      category: 'Full Stack',
      color: 'from-blue-500 to-pink-400'
    },
    {
      id: 'item-4',
      title: 'Chat Wave',
      subtitle: 'Real-time Communication Platform',
      description: "A sophisticated chat system with real-time messaging, friendship features, and seamless user experience built for modern communication needs.",
      techStack: ['React', 'Tailwind', 'Node.js', 'MongoDB', 'Socket.io'],
      img: [
        'https://res.cloudinary.com/dnbgrdgpn/image/upload/v1745302069/Screenshot_2025-04-22_133759_edj8pl.png',
        'https://res.cloudinary.com/dnbgrdgpn/image/upload/v1745318088/Screenshot_2025-04-22_183330_ekd0kz.png',
        'https://res.cloudinary.com/dnbgrdgpn/image/upload/v1748659868/Screenshot_2025-05-31_105027_xmmyk8.png',
        'https://res.cloudinary.com/dnbgrdgpn/image/upload/v1748660022/Screenshot_2025-05-31_105326_buouxs.png'
      ],
      video: ``,
      projectLink: 'https://convo-wave.vercel.app/',
      category: 'Full Stack',
      color: 'from-purple-500 to-pink-400'
    },
    {
      id: 'item-5',
      title: 'Swift POS',
      subtitle: 'Point of Sale System',
      description: "A comprehensive Point of Sale system with intuitive UI, featuring daily, monthly, and annual reports with advanced expense tracking capabilities.",
      techStack: ['React', 'Tailwind', 'MySQL', 'Laravel'],
      img: [
        'https://res.cloudinary.com/dnbgrdgpn/image/upload/v1727501033/Modern_Neutral_Web_Design_Digital_Product_Promotion_Instagram_Post_1_y86lt8.png',
        'https://res.cloudinary.com/dnbgrdgpn/image/upload/v1719396655/Screenshot_2024-06-26_180810_uusdv7.png',
        'https://res.cloudinary.com/dnbgrdgpn/image/upload/v1719396655/Screenshot_2024-06-26_180902_kwlr93.png',
        'https://res.cloudinary.com/dnbgrdgpn/image/upload/v1719396655/Screenshot_2024-06-26_180913_jopmhs.png',
        'https://res.cloudinary.com/dnbgrdgpn/image/upload/v1719396655/Screenshot_2024-06-26_180927_fvxp8q.png'
      ],
      video: `https://res.cloudinary.com/dnbgrdgpn/video/upload/v1719447816/SwiftPOSVideoDemo_xukej0.mp4`,
      category: 'Full Stack',
      color: 'from-green-500 to-emerald-400'
    },
    {
      id: 'item-6',
      title: 'Kanoah Mobile',
      subtitle: 'Mobile Service Platform',
      description: "A mobile-first application for searching and booking services with location-based features and integrated chat functionality for seamless user experience.",
      techStack: ['React Native', 'Tailwind', 'Node.js', 'Express.js', 'MongoDB'],
      img: [
        `https://res.cloudinary.com/dnbgrdgpn/image/upload/v1719495802/KanoahMobileMockup_hy5r1k.png`,
        'https://res.cloudinary.com/dnbgrdgpn/image/upload/v1719469730/Soft_Minimalist_Download_Phone_Mockup_zrcskk.png',
        'https://res.cloudinary.com/dnbgrdgpn/image/upload/v1719469729/Soft_Minimalist_Download_Phone_Mockup_1_e7gg7f.png'
      ],
      projectLink: 'https://drive.google.com/file/d/15DMU35mSjC7nmW6iJwFebrdgyO_zHbwe/view?usp=drive_link',
      category: 'Mobile',
      color: 'from-orange-500 to-red-400'
    },
    {
      id: 'item-7',
      title: 'Advanced Calculator',
      subtitle: 'Scientific Computing Tool',
      description: "A sophisticated calculator supporting continuous equations and advanced mathematical operations with an intuitive user interface.",
      techStack: ['HTML', 'Tailwind', 'JavaScript'],
      img: ['https://res.cloudinary.com/dnbgrdgpn/image/upload/v1719471940/Screenshot_2024-06-27_150511_gjoggk.png'],
      projectLink: 'https://advance-calculator-rose.vercel.app/',
      category: 'Frontend',
      color: 'from-indigo-500 to-purple-400'
    },
    {
      id: 'item-8',
      title: 'Crown Funding',
      subtitle: 'Crowdfunding Platform',
      description: "A modern crowdfunding platform based on Frontend Mentor challenge, featuring responsive design and interactive user elements.",
      techStack: ['HTML', 'Tailwind', 'JavaScript'],
      img: [
        'https://res.cloudinary.com/dnbgrdgpn/image/upload/v1719472924/Screenshot_2024-06-27_152134_r93oei.png',
        'https://res.cloudinary.com/dnbgrdgpn/image/upload/v1719473351/Screenshot_2024-06-27_152821_rmjwkw.png',
        'https://res.cloudinary.com/dnbgrdgpn/image/upload/v1719473352/Screenshot_2024-06-27_152845_t5qs6h.png'
      ],
      projectLink: 'https://crowd-funding-page-opal.vercel.app/',
      category: 'Frontend',
      color: 'from-teal-500 to-green-400'
    },
    {
      id: 'item-9',
      title: 'Multi Step Form',
      subtitle: 'Interactive Form Builder',
      description: "A sophisticated multi-step form with plan selection and addon features, showcasing advanced form handling and state management.",
      techStack: ['React', 'Tailwind', 'Redux'],
      img: [
        'https://res.cloudinary.com/dnbgrdgpn/image/upload/v1719473610/Screenshot_2024-06-27_153147_qiq63c.png',
        'https://res.cloudinary.com/dnbgrdgpn/image/upload/v1719473610/Screenshot_2024-06-27_153223_ccawl9.png',
        'https://res.cloudinary.com/dnbgrdgpn/image/upload/v1719473613/Screenshot_2024-06-27_153233_ifvjsm.png',
        'https://res.cloudinary.com/dnbgrdgpn/image/upload/v1719473614/Screenshot_2024-06-27_153245_pck4tn.png',
        'https://res.cloudinary.com/dnbgrdgpn/image/upload/v1719473615/Screenshot_2024-06-27_153301_do9c1c.png'
      ],
      projectLink: 'https://multi-step-form-sooty-seven.vercel.app/',
      category: 'Frontend',
      color: 'from-rose-500 to-orange-400'
    },
    {
      id: 'item-10',
      title: 'Password Generator',
      subtitle: 'Security Tool',
      description: "A robust password generator with customizable options and security features, built as a Frontend Mentor challenge solution.",
      techStack: ['React', 'Bootstrap'],
      img: ['https://res.cloudinary.com/dnbgrdgpn/image/upload/v1719473980/Screenshot_2024-06-27_153923_sjxgit.png'],
      projectLink: 'https://password-generator-plum-three.vercel.app/',
      category: 'Frontend',
      color: 'from-yellow-500 to-orange-400'
    },
    {
      id: 'item-11',
      title: 'Authify',
      subtitle: 'Authentication System',
      description: "A comprehensive authentication system featuring OAuth integration, password recovery, and advanced security measures for modern applications.",
      techStack: ['Next.js', 'Tailwind', 'MongoDB', 'Shadcn', 'Nodemailer'],
      img: ['https://res.cloudinary.com/dnbgrdgpn/image/upload/v1724578606/Screenshot_2024-08-25_173128_zydmtx.png'],
      projectLink: 'https://authify-three.vercel.app/',
      category: 'Full Stack',
      color: 'from-violet-500 to-purple-400'
    }
  ]