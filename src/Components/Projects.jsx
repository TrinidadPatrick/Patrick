import React, { useState } from 'react'
import WindowSizeProvider from './WindowSizeProvider';
import { useSpringCarousel } from 'react-spring-carousel';
import kanoahImg from '../Utilities/Images/ProjectsThumb/KanoahThumbnail.png'
import swiftPOSImg from '../Utilities/Images/ProjectsThumb/SwiftPOSThumbnail.png'


const Projects = () => {
  const {size} = WindowSizeProvider()
  const mockItems = [
    {
        id: 'item-1',
        title: 'Kanoah: Web & Mobile-Based Service Finder',
        description : "A web and mobile-based application for searching and booking services based on the user's location, with chat integration.",
        techStack : ['React', 'React native', 'Tailwind', 'NodeJS', 'ExpressJS', 'MongoDB'],
        img : kanoahImg
    },
    {
        id: 'item-2',
        title: 'Swift POS',
        description : "A web and mobile-based application for searching and booking services based on the user's location, with chat integration.",
        techStack : ['React', 'React native', 'Tailwind', 'NodeJS', 'ExpressJS', 'MongoDB'],
        img : swiftPOSImg
    },
    {
        id: 'item-3',
        title: 'slide 3',
        techStack : ['React', 'React native', 'Tailwind', 'NodeJS', 'ExpressJS', 'MongoDB'],
    }
  
  ]
  const [currentSlide, setCurrentSlide] = useState(mockItems[0].id)

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
                 <div className='w-full rounded-md overflow-hidden aspect-video'>
                  <img className=' w-full h-full' src={item.img} alt="" />
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


    <div className='w-full overflow-hidden h-full justify-center flex items-center gap-10 mt-16'>
    <div className="py-20 relative flex gap-5">
            <button onClick={slideToPrevItem} className=" z-30 top-1/2 flex-none ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>
            <div style={{width : `${size.width-200}px`}} className="  mx-auto overflow-x-clip py-[4%] relative">
                {carouselFragment}
            </div>
            <button onClick={slideToNextItem} className=" ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
        </div>
    </div>
    </div>
  )
}

export default Projects

{/* <Slider {...settings}>
<div className=' w-full text-black p-5'>
  <div className='w-full aspect-video bg-white'></div>
</div>
<div className=' w-full text-black p-5'>
  <div className='w-full aspect-video bg-white'></div>
</div>
<div className=' w-full text-black p-5'>
  <div className='w-full aspect-video bg-white'></div>
</div>

</Slider> */}