import React, { useEffect, useRef, useState } from 'react'
import { Box, Modal } from '@mui/material';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Projects = () => {
  const [openVideoPlayer, setOpenVideoPlayer] = useState(false)
  const [videoDirectory, setVideoDirectory] = useState('')
  const [hoveredProject, setHoveredProject] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const IMAGE_BASE_URL = import.meta.env.VITE_CLOUDFRONT_IMAGE_URL
  
  const mockItems = [
    {
      id: 'item-11',
      title: 'AniHive',
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

  const [currentSlide, setCurrentSlide] = useState(mockItems[0].id)

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const viewVideo = (dir) => {
    setOpenVideoPlayer(true)
    setVideoDirectory(dir)
  }

  return (
    <div 
      id='projects' 
      ref={sectionRef}
      className="relative px-4 pt-20 mt-10 overflow-y-hidden text-white"
    >

      
      {/* Header */}
      <div className={`text-center mb-16 transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        <div className="relative inline-block">
          <h1 className="text-4xl font-bold text-transparent md:text-6xl bg-gradient-to-r from-emerald-50 via-emerald-100 to-teal-200 bg-clip-text">
            My Projects
          </h1>
          <div className="h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full transform scale-x-0 animate-[scaleX_1s_ease-out_0.5s_forwards]" />
        </div>
        <div className="w-24 h-1 mx-auto mt-5 rounded-full bg-gradient-to-r from-green-400 to-cyan-400"></div>
        {/* <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-400">
          Crafting digital experiences with passion, precision, and cutting-edge technology
        </p> */}
      </div>

      {/* Project List */}  
      <div className='semiSm:w-[75%] sm:w-[70%] md:w-[90%] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
        {
          mockItems.map((item, index) => {
              return (
                <div key={index}
            className={`relative group transition-all h-full  duration-700 ease-out transform 
            
            `}
            onMouseEnter={() => setHoveredProject(item.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            
            {/* Card */}
            <div className=" relative h-full overflow-hidden transition-all duration-500 border shadow-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border-gray-700/50 rounded-3xl hover:shadow-3xl">
              {/* Top Accent Line */}
              <div className={`${hoveredProject === item.id ? 'h-1 w-full' : 'h-0 w-0'} bg-gradient-to-r ${item.color} transform transition-all duration-500 `} />
              
              {/* Image Container */}
              <div className="relative w-full overflow-hidden p-2 ">
                <Carousel 
                  showIndicators={false} 
                  showThumbs={false} 
                  showStatus={false} 
                  autoPlay={false} 
                  infiniteLoop 
                  interval={5000}
                  swipeable={false}
                  className="h-full"
                >
                  {item.img.map((imgsrc, index) => (
                    <div key={index} className="relative flex  group/image rounded-2xl overflow-hidden ">
                      <div style={{backgroundImage: `url(${imgsrc})`}} className='w-full bg-black bg-center bg-cover aspect-video' />
                      {/* Overlay */}
                      <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:opacity-100" />
                      
                      {/* Action Buttons */}
                      <div className="absolute inset-0 flex items-center justify-center gap-3 transition-all duration-300 transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                        {item.video && (
                          <button 
                            onClick={() => viewVideo(item.video)}
                            className="px-4 py-2 text-sm font-semibold text-white transition-all duration-200 transform rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:scale-105"
                          >
                            ▶ Demo
                          </button>
                        )}
                        {item.projectLink && (
                          <button 
                            onClick={() => window.open(item.projectLink, '_blank')}
                            className="px-4 py-2 text-sm font-semibold text-white transition-all duration-200 transform rounded-lg shadow-lg bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 hover:scale-105"
                          >
                            View Project ↗
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>

              {/* Content */}
              <div className="px-6 py-3 flex flex-col justify-between h-[250px] md:h-[220px] xl:h-[230px]">

                {/* Title & Subtitle */}
                <>
                <div>
                  <div className='flex items-center justify-between'>
                  <h3 className="mb-1 text-2xl font-bold text-white lg:text-xl">{item.title}</h3>
                  <span className={` text-xs font-semiboldtext-white`}>
                    {item.category}
                  </span>
                  </div>
                  <p className={`text-base lg:text-sm font-medium bg-blue-500 bg-clip-text text-transparent`}>
                    {item.subtitle}
                  </p>
                  
                </div>

                {/* Description */}
                <p className="text-lg leading-relaxed text-gray-300 md:text-sm lg:text-base line-clamp-3">
                  {item.description}
                </p>
                </>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 border-t border-gray-700 pt-5">
                  {item.techStack.map((tech, index) => (
                    <span 
                      key={index}
                      className=" py-1 text-xs font-medium text-gray-400 transition-colors duration-200 rounded-full "
                    >
                      {tech}{index < item.techStack.length - 1 && ' • '}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
              )
          })
        }

      </div>

      {/* Video Modal */}
      <Modal 
        open={openVideoPlayer}
        onClose={() => setOpenVideoPlayer(false)}
        className="flex items-center justify-center p-4"
      >
        <div className="relative w-full max-w-4xl overflow-hidden bg-black shadow-2xl rounded-2xl">
          <button 
            onClick={() => setOpenVideoPlayer(false)}
            className="absolute z-50 p-2 text-white transition-colors duration-200 rounded-full top-4 right-4 bg-black/50 hover:bg-black/70"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <video 
            width="100%" 
            controls 
            autoPlay
            className="rounded-2xl"
          >
            <source src={videoDirectory} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </Modal>
    </div>
  )
}

export default Projects