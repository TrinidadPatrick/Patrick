import React, { useEffect, useRef, useState } from 'react'
import WindowSizeProvider from './WindowSizeProvider';
import { useSpringCarousel } from 'react-spring-carousel';
import kanoahImg from '../Utilities/Images/ProjectsThumb/KanoahThumbnail.png'
import swiftPOSImg from '../Utilities/Images/ProjectsThumb/SwiftPOSMockup2.png'
import { Box, Modal } from '@mui/material';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Projects = () => {
  const [openVideoPlayer, setOpenVideoPlayer] = useState(false)
  const [videoDirectory, setVideoDirectory] = useState('')
  const baseLoc = `/src/Utilities/Images/CarouselImages`
  const {size} = WindowSizeProvider()
  const mockItems = [
    {
        id: 'item-1',
        title: 'Kanoah: Web-Based Service Finder',
        description : "A web-based application for searching and booking services based on the user's location, with chat integration.",
        techStack : ['React', 'Tailwind', 'NodeJS', 'ExpressJS', 'MongoDB'],
        img : [
          'https://res.cloudinary.com/dnbgrdgpn/image/upload/v1727500875/Minimalist_Website_Launch_Computer_Mockup_Instagram_Post_1000_x_750_px_1_lg1ngl.png',
          'https://res.cloudinary.com/dnbgrdgpn/image/upload/v1719328953/SS1_hym6xj.png', 'https://res.cloudinary.com/dnbgrdgpn/image/upload/v1719328952/SS2_fs1dhc.png',
          'https://res.cloudinary.com/dnbgrdgpn/image/upload/v1719328953/SS3_qjdw0m.png', 'https://res.cloudinary.com/dnbgrdgpn/image/upload/v1719328952/SS4_oztgjh.png',
          'https://res.cloudinary.com/dnbgrdgpn/image/upload/v1719328953/SS5_ww7jb8.png', 'https://res.cloudinary.com/dnbgrdgpn/image/upload/v1719328954/SS9_mm9bmr.png', 
          'https://res.cloudinary.com/dnbgrdgpn/image/upload/v1719328953/SS8_t484fy.png'
        ],
        video : `https://res.cloudinary.com/dnbgrdgpn/video/upload/v1719447721/KanoahVideoDemo_fibs2p.mp4`,
        projectLink : 'https://kanoah-web.vercel.app/'
    },
    {
        id: 'item-2',
        title: 'Swift POS',
        description : "A Point of Sale system with user-friendly UI. It also comes with daily, monthly, and annualy reports and expenses.",
        techStack : ['React', 'Tailwind', 'MySQL', 'Laravel'],
        img : ['https://res.cloudinary.com/dnbgrdgpn/image/upload/v1727501033/Modern_Neutral_Web_Design_Digital_Product_Promotion_Instagram_Post_1_y86lt8.png', 'https://res.cloudinary.com/dnbgrdgpn/image/upload/v1719396655/Screenshot_2024-06-26_180810_uusdv7.png', 'https://res.cloudinary.com/dnbgrdgpn/image/upload/v1719396655/Screenshot_2024-06-26_180902_kwlr93.png',
              'https://res.cloudinary.com/dnbgrdgpn/image/upload/v1719396655/Screenshot_2024-06-26_180913_jopmhs.png', 'https://res.cloudinary.com/dnbgrdgpn/image/upload/v1719396655/Screenshot_2024-06-26_180927_fvxp8q.png'],
        video : `https://res.cloudinary.com/dnbgrdgpn/video/upload/v1719447816/SwiftPOSVideoDemo_xukej0.mp4`,
    },
    {
        id: 'item-3',
        title: 'Kanoah Mobile',
        description : "A mobile-based application for searching and booking services based on the user's location, with chat integration.",
        techStack : ['React native', 'Tailwind', 'NodeJS', 'ExpressJS', 'MongoDB'],
        img : [`https://res.cloudinary.com/dnbgrdgpn/image/upload/v1719495802/KanoahMobileMockup_hy5r1k.png`, 'https://res.cloudinary.com/dnbgrdgpn/image/upload/v1719469730/Soft_Minimalist_Download_Phone_Mockup_zrcskk.png', 'https://res.cloudinary.com/dnbgrdgpn/image/upload/v1719469729/Soft_Minimalist_Download_Phone_Mockup_1_e7gg7f.png'],
        projectLink : 'https://drive.google.com/file/d/15DMU35mSjC7nmW6iJwFebrdgyO_zHbwe/view?usp=drive_link'
    },
    {
        id: 'item-4',
        title: 'Advance Calculator',
        description : "A semi-advanced calculator that supports continuous equations.",
        techStack : ['HTML', 'Tailwind', 'Javascript'],
        img : ['https://res.cloudinary.com/dnbgrdgpn/image/upload/v1719471940/Screenshot_2024-06-27_150511_gjoggk.png'],
        projectLink : 'https://advance-calculator-rose.vercel.app/'
    },
    {
        id: 'item-5',
        title: 'Crown Funding Page',
        description : "A crown funding page challenge from Frontend-Mentor",
        techStack : ['HTML', 'Tailwind', 'Javascript'],
        img : ['https://res.cloudinary.com/dnbgrdgpn/image/upload/v1719472924/Screenshot_2024-06-27_152134_r93oei.png', 'https://res.cloudinary.com/dnbgrdgpn/image/upload/v1719473351/Screenshot_2024-06-27_152821_rmjwkw.png', 'https://res.cloudinary.com/dnbgrdgpn/image/upload/v1719473352/Screenshot_2024-06-27_152845_t5qs6h.png'],
        projectLink : 'https://crowd-funding-page-opal.vercel.app/'
    },
    {
        id: 'item-6',
        title: 'Multi Step Form',
        description : "A Multi Step Form challenge from Frontend-Mentor where use can select plans and addons",
        techStack : ['React', 'Tailwind', 'Redux'],
        img : ['https://res.cloudinary.com/dnbgrdgpn/image/upload/v1719473610/Screenshot_2024-06-27_153147_qiq63c.png', 'https://res.cloudinary.com/dnbgrdgpn/image/upload/v1719473610/Screenshot_2024-06-27_153223_ccawl9.png', 'https://res.cloudinary.com/dnbgrdgpn/image/upload/v1719473613/Screenshot_2024-06-27_153233_ifvjsm.png',
        'https://res.cloudinary.com/dnbgrdgpn/image/upload/v1719473614/Screenshot_2024-06-27_153245_pck4tn.png', 'https://res.cloudinary.com/dnbgrdgpn/image/upload/v1719473615/Screenshot_2024-06-27_153301_do9c1c.png'],
        projectLink : 'https://multi-step-form-sooty-seven.vercel.app/'
    },
    {
        id: 'item-7',
        title: 'Password Generator',
        description : "A password generator system with various options, based on a Frontend Mentor challenge.",
        techStack : ['React', 'Bootstrap'],
        img : ['https://res.cloudinary.com/dnbgrdgpn/image/upload/v1719473980/Screenshot_2024-06-27_153923_sjxgit.png'],
        projectLink : 'https://password-generator-plum-three.vercel.app/'
    },
    {
        id: 'item-8',
        title: 'Authify',
        description : "An authentication system with different features such as oath, forgot password, and more.",
        techStack : ['Nextjs', 'Tailwind', 'MongoDB', 'Shadcn', 'Nodemailer'],
        img : ['https://res.cloudinary.com/dnbgrdgpn/image/upload/v1724578606/Screenshot_2024-08-25_173128_zydmtx.png'],
        projectLink : 'https://authify-three.vercel.app/'
    },
  
  ]
  const [currentSlide, setCurrentSlide] = useState(mockItems[0].id)

  const viewVideo = (dir) => {
    setOpenVideoPlayer(true)
    setVideoDirectory(dir)
  }

  const {
    carouselFragment,
    useListenToCustomEvent,
    slideToPrevItem, // go back to previous slide
    slideToNextItem, // move to next slide
  } = useSpringCarousel({
      itemsPerSlide: size.width <= 1000 ? 1 : 3, // number of slides per view
      withLoop: true, // will loop
      initialStartingPosition: 'center', // the active slide will be at the center
      gutter: 24, // to add the space between slides
      items: mockItems.map((item) => {
        return {
            ...item,
            renderItem: (
                <div className={`mx-auto p-2 bg-themeBlueOpac projectBox rounded-md flex flex-col gap-2 aspect-[2] lg:mx-5 w-full  text-2xl text-white transition-all duration-700 ${currentSlide === item.id ? 'z-10 lg:scale-[1.4] xl:scale-[1.2] ': ' scale-[0.9] backdrop-blur-sm opacity-25 '}`}>
                  {/* Image */}
                  <div className='w-full flex overflow-hidden aspect-video'>
                    <Carousel showIndicators={false} 
                    showThumbs={false} stopOnHover showStatus={false} autoPlay={currentSlide === item.id ? true : false}  infiniteLoop interval={5000} >
                      {
                        item.img.map((imgsrc, index)=>(
                          <div key={index} className='w-full h-full p-[1px] '>
                            <div className='w-full  rounded group relative aspect-video origin-center '>
                              <div className='cursor-pointer rounded h-full w-full '>
                                <div className='top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] absolute z-40 hidden group-hover:flex space-x-2'>
                                  {
                                    item.video && <button onClick={()=>viewVideo(item.video)} className=' text-xs px-2 pt-1.5 rounded-sm pb-1 bg-themeGreen '>Video demo</button>
                                  }
                                  {
                                    item.projectLink && <button onClick={()=> window.open(item.projectLink, '_blank')} className=' text-xs px-2 pt-1.5 rounded-sm pb-1 bg-themeGreen '>View Project</button>
                                  }
                                </div>
                                <div className=' h-full overflow-hidden rounded-md bg-blue-500 w-full '>
                                  <img  className=' origin-center h-full cursor-pointer group-hover:brightness-50 object-cover ' src={imgsrc} alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      }
                    </Carousel>
                  </div>
                  <h3 className='text-base'>{item.title}</h3>
                  <p className='text-xs font-normal text-gray-400'>{item.description}</p>
                      
                  {/* Tech Stack */}
                  <div className='w-full flex gap-2 flex-wrap  pb-2 mt-5'>
                    {
                      item.techStack.map((stack, index)=>(
                        <div key={index} className='text-extraXs leading-6 px-2 xl:px-3 flex items-center font-light border border-themeGreen rounded-full'>
                          <p className='mt-0.5 '>{stack}</p>
                        </div>
                      ))
                    }
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
      <div style={{width : `${size.width - 20}px`}} className='flex  md:hidden mx-auto h-fit mt-10 '>
          <Carousel infiniteLoop showArrows={false} swipeable={true}
          showIndicators={true} showStatus={false} showThumbs={false} className=' w-full  h-full  flex'>
              {
                mockItems?.map((item, index) => {
                  return (
                <div key={index} className={`w-[90%]  p-2 flex flex-col gap-2 projectBox mb-14 h-[90%] rounded-lg mx-auto bg-themeBlueOpac`}>
                  {/* Image */}
                  <div className='w-full flex overflow-hidden aspect-video'>
                    <Carousel showIndicators={false} showArrows={true}  swipeable={false} 
                    showThumbs={false} stopOnHover showStatus={false} autoPlay={currentSlide === item.id ? true : false}  infiniteLoop interval={5000} >
                      {
                        item.img.map((imgsrc, index)=>(
                          <div key={index} className='w-full h-full p-[1px] '>
                            <div className='w-full  rounded group relative aspect-video origin-center '>
                              <div className='cursor-pointer rounded h-full w-full '>
                                <div className='top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] absolute z-40 hidden group-hover:flex space-x-2'>
                                  {
                                    item.video && <button onClick={()=>viewVideo(item.video)} className=' text-xs px-2 pt-1.5 rounded-sm pb-1 bg-themeGreen '>Video demo</button>
                                  }
                                  {
                                    item.projectLink && <button onClick={()=> window.open(item.projectLink, '_blank')} className=' text-xs px-2 pt-1.5 rounded-sm pb-1 bg-themeGreen '>View Project</button>
                                  }
                                </div>
                                <div className=' h-full overflow-hidden rounded-md bg-blue-500 w-full '>
                                  <img  className=' origin-center h-full cursor-pointer group-hover:brightness-50 object-cover ' src={imgsrc} alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      }
                    </Carousel>
                  </div>
                  <h3 className='text-xl text-start'>{item.title}</h3>
                  <p className='text-xs text-start font-normal text-gray-400'>{item.description}</p>
                      
                  {/* Tech Stack */}
                  <div className='w-full flex gap-2 flex-wrap  pb-2 mt-5'>
                    {
                      item.techStack.map((stack, index)=>(
                        <div key={index} className='text-extraXs leading-6 px-3 flex items-center font-light border border-themeGreen rounded-full'>
                          <p className='mt-0.5 text-start'>{stack}</p>
                        </div>
                      ))
                    }
                  </div>
                </div>
                  )
                })
              }
          </Carousel>
      </div>
    )
  }


  return (
    <div id='projects' className='w-full h-full flex flex-col bg-themeBlue text-white px-2 py-16'>
      <h1 style={{textDecorationColor : '#2FD1A9'}} className='text-2xl xl:text-4xl text-center  font-bold underline underline-offset-[9px]'>My Projects</h1>

      {/* Carousel */}
      <div className='w-full overflow-hidden relative h-full justify-center flex flex-col items-center gap-10'>
        <div className="py-20 hidden relative md:flex gap-5">
              <button onClick={slideToPrevItem} className=" z-30 top-1/2 flex-none ">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
              </button>
              <div style={{width : `${size.width-200}px`}} className="mx-auto overflow-x-clip py-[4%] relative">
                  {carouselFragment}
              </div>
              <button onClick={slideToNextItem} className=" ">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
              </button>
        </div>
        <MobileCarousel />
      </div>

      {/* Video Modal */}
      <Modal onClose={()=>setOpenVideoPlayer(false)} style={{display : 'flex', justifyContent : 'center', alignItems : 'center'}} open={openVideoPlayer}>
      <div className=' w-[70vw] h-fit bg-white z-20'>
      <video width="100%" controls>
        <source src={videoDirectory} type="video/mp4" />
        Your browser does not support the video tag.
        </video>
      </div>
      </Modal>
    </div>
  )
}

export default Projects
