import React, { useEffect, useRef, useState } from 'react'
import WindowSizeProvider from './WindowSizeProvider';
import { useSpringCarousel } from 'react-spring-carousel';
import { Box, Modal } from '@mui/material';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Projects = () => {
  const [openVideoPlayer, setOpenVideoPlayer] = useState(false)
  const [videoDirectory, setVideoDirectory] = useState('')
  const [hoveredProject, setHoveredProject] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  const { size } = WindowSizeProvider()
  
  const mockItems = [
    {
      id: 'item-1',
      title: 'Kanoah',
      subtitle: 'Web-Based Service Finder',
      description: "A comprehensive web application for searching and booking services based on the user's location, featuring real-time chat integration and intelligent service matching algorithms.",
      techStack: ['React', 'Tailwind', 'Node.js', 'Express.js', 'MongoDB'],
      img: [
        'https://res.cloudinary.com/dnbgrdgpn/image/upload/v1727500875/Minimalist_Website_Launch_Computer_Mockup_Instagram_Post_1000_x_750_px_1_lg1ngl.png',
        'https://res.cloudinary.com/dnbgrdgpn/image/upload/v1719328953/SS1_hym6xj.png',
        'https://res.cloudinary.com/dnbgrdgpn/image/upload/v1719328952/SS2_fs1dhc.png',
        'https://res.cloudinary.com/dnbgrdgpn/image/upload/v1719328953/SS3_qjdw0m.png',
        'https://res.cloudinary.com/dnbgrdgpn/image/upload/v1719328952/SS4_oztgjh.png',
        'https://res.cloudinary.com/dnbgrdgpn/image/upload/v1719328953/SS5_ww7jb8.png',
        'https://res.cloudinary.com/dnbgrdgpn/image/upload/v1719328954/SS9_mm9bmr.png',
        'https://res.cloudinary.com/dnbgrdgpn/image/upload/v1719328953/SS8_t484fy.png'
      ],
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
        'https://res.cloudinary.com/dnbgrdgpn/image/upload/v1749113164/Screenshot_2025-06-05_164502_eq88k4.png'
      ],
      video: `https://res.cloudinary.com/dnbgrdgpn/image/upload/v1749113417/Screenshot_2025-06-05_165003_lq11e1.png`,
      projectLink: 'https://kanoah-web.vercel.app/',
      category: 'Frontend',
      color: 'from-blue-500 to-cyan-400'
    },
    {
      id: 'item-3',
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
      id: 'item-4',
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
      id: 'item-5',
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
      id: 'item-6',
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
      id: 'item-7',
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
      id: 'item-8',
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
      id: 'item-9',
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
      id: 'item-10',
      title: 'Authify',
      subtitle: 'Authentication System',
      description: "A comprehensive authentication system featuring OAuth integration, password recovery, and advanced security measures for modern applications.",
      techStack: ['Next.js', 'Tailwind', 'MongoDB', 'Shadcn', 'Nodemailer'],
      img: ['https://res.cloudinary.com/dnbgrdgpn/image/upload/v1724578606/Screenshot_2024-08-25_173128_zydmtx.png'],
      projectLink: 'https://authify-three.vercel.app/',
      category: 'Full Stack',
      color: 'from-violet-500 to-purple-400'
    },
    {
      id: 'item-11',
      title: 'AniHive',
      subtitle: 'Anime Discovery Platform',
      description: "A modern anime browsing platform integrated with Jikan API, featuring advanced search, filtering, and discovery capabilities.",
      techStack: ['React.js', 'Tailwind', 'Jikan API'],
      img: [
        'https://res.cloudinary.com/dnbgrdgpn/image/upload/v1747472979/Beige_Soft_Mockup_Launching_New_Website_Facebook_Post_2_gkhqsi.png',
        'https://res.cloudinary.com/dnbgrdgpn/image/upload/v1747473224/Screenshot_2025-05-17_171331_strmju.png',
        'https://res.cloudinary.com/dnbgrdgpn/image/upload/v1747473564/Screenshot_2025-05-17_171910_mkw50n.png',
        'https://res.cloudinary.com/dnbgrdgpn/image/upload/v1747473736/Screenshot_2025-05-17_172038_avgqur.png',
        'https://res.cloudinary.com/dnbgrdgpn/image/upload/v1747473737/Screenshot_2025-05-17_172047_pdjiqc.png',
        'https://res.cloudinary.com/dnbgrdgpn/image/upload/v1747473738/Screenshot_2025-05-17_172156_cmjnlb.png'
      ],
      projectLink: 'https://ani-hive-ilrc.vercel.app/',
      category: 'Frontend',
      color: 'from-pink-500 to-rose-400'
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

  const {
    carouselFragment,
    useListenToCustomEvent,
    slideToPrevItem,
    slideToNextItem,
  } = useSpringCarousel({
    itemsPerSlide: size.width <= 960 ? 1 : size.width <= 1200 ? 2 : 3,
    withLoop: true,
    initialStartingPosition: size.width >= 1200 && 'center',
    gutter: 22,
    items: mockItems.map((item) => {
      return {
        ...item,
        renderItem: (
          <div 
            className={`relative group transition-all h-full  duration-700 ease-out transform 
            ${
              currentSlide === item.id && size.width >= 1200
                ? 'z-20 scale-100 lg:scale-110' 
                : 'scale-90 opacity-60'
            }
            `}
            onMouseEnter={() => setHoveredProject(item.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {/* Background Glow */}
            <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-20 rounded-3xl blur-sm transform transition-all duration-500 ${
              hoveredProject === item.id ? 'scale-105 opacity-30' : 'scale-100'
            }`} />
            
            {/* Card */}
            <div className="relative h-full bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
              {/* Top Accent Line */}
              <div className={`${hoveredProject === item.id ? 'h-1' : 'h-0'} bg-gradient-to-r ${item.color} transform transition-all duration-500 ${
                hoveredProject === item.id ? 'scale-x-100' : 'scale-x-0'
              }`} />
              
              {/* Image Container */}
              <div className="relative w-full overflow-hidden ">
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
                    <div key={index} className="relative group/image flex ">
                      <div className='h-full w-full '>
                      <img 
                        className="w-full h-[25rem] semiMd:h-[220px] object-fit transition-transform duration-700 " 
                        src={imgsrc} 
                        alt={`${item.title} screenshot ${index + 1}`}
                        loading="lazy"
                      />
                      </div>
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Action Buttons */}
                      <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                        {item.video && (
                          <button 
                            onClick={() => viewVideo(item.video)}
                            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                          >
                            ▶ Demo
                          </button>
                        )}
                        {item.projectLink && (
                          <button 
                            onClick={() => window.open(item.projectLink, '_blank')}
                            className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-sm font-semibold rounded-lg hover:from-emerald-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
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
              <div className="p-6 space-y-4">
                {/* Category Badge */}
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${item.color} text-white`}>
                    {item.category}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-2xl lg:text-xl font-bold text-white mb-1">{item.title}</h3>
                  <p className={`text-base lg:text-sm font-medium bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                    {item.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-lg lg:text-sm leading-relaxed line-clamp-3">
                  {item.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {item.techStack.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 text-xs font-medium bg-gray-800/60 text-gray-300 border border-gray-600/50 rounded-full hover:bg-gray-700/60 hover:border-gray-500/50 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )
      }
    }),
  })

  useListenToCustomEvent((event) => {
    if (event.eventName === 'onSlideStartChange') {
      setCurrentSlide(event?.nextItem?.id)
    }
  })

  const MobileCarousel = () => {
    return (
      <div className="flex md:hidden mx-auto w-full max-w-sm mt-10">
        <Carousel 
          infiniteLoop 
          showArrows={false} 
          swipeable={true}
          showIndicators={true} 
          showStatus={false} 
          showThumbs={false} 
          className="w-full"
        >
          {mockItems?.map((item, index) => (
            <div key={index} className="pb-16">
              <div className="relative mx-4 bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl border border-gray-700/50 rounded-2xl overflow-hidden shadow-xl">
                {/* Top Accent */}
                <div className={`h-1 bg-gradient-to-r ${item.color}`} />
                
                {/* Image */}
                <div className="relative  aspect-video overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                  <Carousel 
                    showIndicators={false} 
                    showArrows={true}  
                    swipeable={false} 
                    showThumbs={false} 
                    showStatus={false} 
                    autoPlay={false}  
                    infiniteLoop 
                    interval={5000}
                  >
                    {item.img.map((imgsrc, imgIndex) => (
                      <div key={imgIndex} className="relative group">
                        <img 
                          className="w-full h-[200px] object-fit" 
                          src={imgsrc} 
                          alt={`${item.title} screenshot`}
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        
                        {/* Action Buttons */}
                        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {item.video && (
                            <button 
                              onClick={() => viewVideo(item.video)}
                              className="px-3 py-2 bg-blue-600 text-white text-xs font-semibold rounded-lg"
                            >
                              ▶ Demo
                            </button>
                          )}
                          {item.projectLink && (
                            <button 
                              onClick={() => window.open(item.projectLink, '_blank')}
                              className="px-3 py-2 bg-emerald-600 text-white text-xs font-semibold rounded-lg"
                            >
                              View ↗
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </Carousel>
                </div>

                {/* Content */}
                <div className="p-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${item.color} text-white`}>
                      {item.category}
                    </span>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-white text-left">{item.title}</h3>
                    <p className={`text-sm font-medium bg-gradient-to-r ${item.color} bg-clip-text text-transparent text-left`}>
                      {item.subtitle}
                    </p>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed text-left">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.techStack.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 text-xs font-medium bg-gray-800/60 text-gray-300 border border-gray-600/50 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    )
  }

  return (
    <div 
      id='projects' 
      ref={sectionRef}
      className="relative text-white px-4 pt-20 mt-10 overflow-y-hidden"
    >

      
      {/* Header */}
      <div className={`text-center mb-16 transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        <div className="inline-block relative">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-50 via-emerald-100 to-teal-200 bg-clip-text text-transparent">
            My Projects
          </h1>
          <div className="h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full transform scale-x-0 animate-[scaleX_1s_ease-out_0.5s_forwards]" />
        </div>
        <div className="w-24 mt-5 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto rounded-full"></div>
        {/* <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
          Crafting digital experiences with passion, precision, and cutting-edge technology
        </p> */}
      </div>

      {/* Desktop Carousel */}
      <div className="hidden mx-auto py-0 md:block">
        <div className={`flex items-center justify-center gap-8 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          {/* Navigation Buttons */}
          <button 
            onClick={slideToPrevItem}
            className="group p-4 bg-gradient-to-r from-gray-800/80 to-gray-700/80 backdrop-blur-xl border border-gray-600/50 rounded-full hover:from-blue-600/20 hover:to-purple-600/20 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-110"
          >
            <svg 
              className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Carousel Container */}
          <div 
            style={{ width: `${Math.min(size.width - 0, 1300)}px` }} 
            className="overflow-hidden pb-20 pt-14"
          >
            {carouselFragment}
          </div>

          <button 
            onClick={slideToNextItem}
            className="group p-4 bg-gradient-to-r from-gray-800/80 to-gray-700/80 backdrop-blur-xl border border-gray-600/50 rounded-full hover:from-blue-600/20 hover:to-purple-600/20 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-110"
          >
            <svg 
              className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Carousel */}
      <MobileCarousel />

      {/* Video Modal */}
      <Modal 
        open={openVideoPlayer}
        onClose={() => setOpenVideoPlayer(false)}
        className="flex items-center justify-center p-4"
      >
        <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl">
          <button 
            onClick={() => setOpenVideoPlayer(false)}
            className="absolute top-4 right-4 z-50 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors duration-200"
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