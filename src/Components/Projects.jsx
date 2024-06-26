import React, { useEffect, useState } from 'react'
import WindowSizeProvider from './WindowSizeProvider';
import { useSpringCarousel } from 'react-spring-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import kanoahImg from '../Utilities/Images/ProjectsThumb/KanoahThumbnail.png'
import swiftPOSImg from '../Utilities/Images/ProjectsThumb/SwiftPOSMockup2.png'
import { Box, Modal } from '@mui/material';


const Projects = () => {
  const [openVideoPlayer, setOpenVideoPlayer] = useState(false)
  const [videoDirectory, setVideoDirectory] = useState('')
  const baseLoc = `/src/Utilities/Images/CarouselImages`
  const {size} = WindowSizeProvider()
  const mockItems = [
    {
        id: 'item-1',
        title: 'Kanoah: Web-Based Service Finder',
        description : "A web and mobile-based application for searching and booking services based on the user's location, with chat integration.",
        techStack : ['React', 'Tailwind', 'NodeJS', 'ExpressJS', 'MongoDB'],
        img : [
          kanoahImg,
          'https://res.cloudinary.com/dnbgrdgpn/image/upload/v1719328953/SS1_hym6xj.png', 'https://res.cloudinary.com/dnbgrdgpn/image/upload/v1719328952/SS2_fs1dhc.png',
          'https://res.cloudinary.com/dnbgrdgpn/image/upload/v1719328953/SS3_qjdw0m.png', 'https://res.cloudinary.com/dnbgrdgpn/image/upload/v1719328952/SS4_oztgjh.png',
          'https://res.cloudinary.com/dnbgrdgpn/image/upload/v1719328953/SS5_ww7jb8.png', 'https://res.cloudinary.com/dnbgrdgpn/image/upload/v1719328954/SS9_mm9bmr.png', 
          'https://res.cloudinary.com/dnbgrdgpn/image/upload/v1719328953/SS8_t484fy.png'
        ],
        video : `${baseLoc}/Kanoah/KanoahVideoDemo.mp4`,
        projectLink : 'https://kanoah-web.vercel.app/'
    },
    {
        id: 'item-2',
        title: 'Swift POS',
        description : "A web-based Point of Sale system with user-friendly user interface. It also comes with daily, monthly, and annualy reports and expenses.",
        techStack : ['React', 'Tailwind', 'MySQL', 'Laravel'],
        img : [`${baseLoc}/Kanoah/SS1.png`]
    },
    {
        id: 'item-3',
        title: 'slide 3',
        techStack : ['React', 'React native', 'Tailwind', 'NodeJS', 'ExpressJS', 'MongoDB'],
        img : [`${baseLoc}/Kanoah/SS1.png`]
    }
  
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
      itemsPerSlide: 3, // number of slides per view
      withLoop: true, // will loop
      initialStartingPosition: 'center', // the active slide will be at the center
      gutter: 24, // to add the space between slides
      items: mockItems.map((item) => {
        return {
            ...item,
            renderItem: (
                <div className={`bg-transparent border border-themeGreen rounded-md flex flex-col gap-2 aspect-[2] mx-5 w-full max-w-full  text-2xl text-white transition-all duration-700 ${currentSlide === item.id ? 'z-10 scale-[1.3] ': ' scale-[0.9] backdrop-blur-sm opacity-25 '}`}>
                  {/* Image */}
                  <div className='w-full flex rounded-md overflow-hidden aspect-video'>
                    <Carousel showIndicators={false} 
                    showThumbs={false} stopOnHover showStatus={false} autoPlay={currentSlide === item.id ? true : false} infiniteLoop interval={5000}>
                      {
                        item.img.map((imgsrc)=>(
                        <div className='w-full group relative spect-video origin-center '>
                          <div className='cursor-pointer  '>
                            <div className='top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] absolute z-40 hidden group-hover:flex space-x-2'>
                              {
                                item.video && <button onClick={()=>viewVideo(item.video)} className=' text-xs px-2 pt-1.5 rounded-sm pb-1 bg-themeGreen '>Video demo</button>
                              }
                              {
                                item.projectLink && <button onClick={()=> window.open(item.projectLink, '_blank')} className=' text-xs px-2 pt-1.5 rounded-sm pb-1 bg-themeGreen '>View Project</button>
                              }
                            </div>
                            <img className=' cursor-pointer group-hover:brightness-50 w-full h-full object-cover' src={imgsrc} alt="" />
                            
                          </div>
                          
                        </div>
                        ))
                      }
                    </Carousel>
                  </div>
                  <h3 className='text-base px-2'>{item.title}</h3>
                  <p className='text-xs px-2 font-normal text-gray-400'>{item.description}</p>

                  {/* Tech Stack */}
                  <div className='w-full flex gap-2 flex-wrap px-2 pb-2 mt-5'>
                    {
                      item.techStack.map((stack)=>(
                        <div className='text-extraXs leading-6 px-3 flex items-center font-light border border-themeGreen rounded-full'>
                          <p className='mt-0.5'>{stack}</p>
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




  return (
    <div className='w-full h-full flex flex-col bg-themeBlue text-white px-2 py-16'>
      <h1 style={{textDecorationColor : '#2FD1A9'}} className='text-2xl xl:text-4xl text-center  font-bold underline underline-offset-[9px]'>My Projects</h1>

      {/* Carousel */}
      <div className='w-full overflow-hidden relative h-full justify-center flex items-center gap-10 mt-16'>
      <div className="py-20 relative flex gap-5">
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
