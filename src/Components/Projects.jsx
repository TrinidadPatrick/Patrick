import React, { useEffect, useRef, useState } from 'react'
import { Box, Modal } from '@mui/material';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ProjectOverview from './Reusable/ProjectOverview';
import { motion, AnimatePresence } from "framer-motion";
import { listAllFiles } from '../service/SupabaseService';
import axios from 'axios';

const Projects = () => {
  const [openVideoPlayer, setOpenVideoPlayer] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [videoDirectory, setVideoDirectory] = useState('')
  const [hoveredProject, setHoveredProject] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const [projects, setProjects] = useState(null)
  const sectionRef = useRef(null)

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

  const fetchProjects = async () => {
    try {
      const {data} = await axios.get('https://zzmrjhftlghyxczgaqri.supabase.co/storage/v1/object/public/project_lists/projects.json')
      if(data){
        setProjects(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if(!projects) return

    const fetchImages = async () => {
      const baseUrl = 'https://zzmrjhftlghyxczgaqri.supabase.co/storage/v1/object/public/portfolio_images/'
      const files = await listAllFiles("portfolio_images");

      const urls = files.map((file) => {
        return {
          project: file.name.split('/')[0], url: baseUrl + file.name
        }
      });
      const newProjects = projects.map((project) => {
        const images = urls.filter((url) => url.project == project.bucketname).map((img) => img.url)
        return ({
          ...project, images: images.length > 0 ? images : (project.images || [])
        })
      })

      setProjects(newProjects)

    };
    fetchImages();
  },[projects])

  useEffect(() => {
    fetchProjects()
  },[])

  const viewVideo = (dir) => {
    setOpenVideoPlayer(true)
    setVideoDirectory(dir)
  }

  const handleCloseProjectOverview = () => {
    setSelectedProject(null)
  }


  const RenderProjectImages = React.memo(({ item, imgsrc }) => {
    return (
      <div className="relative flex-1 flex overflow-hidden group/image rounded-2xl aspect-[1920/1080] border-2 border-gray-800">
        {/* Image Background */}
        <div
          className="w-full bg-center bg-inherit bg-no-repeat h-full"
        >
          <img 
              src={imgsrc}
              className="w-full h-full object-fit" 
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:opacity-100" />

        {/* Action Buttons */}
        <div className={`absolute bg-black/70 w-full h-full ${hoveredProject === item.id ? 'flex' : 'hidden'} flex-col items-center justify-center gap-3 transition-all duration-300 
        transform`}>
          {item.video && (
            <button
              onClick={(e) => {e.preventDefault();viewVideo(item.video)}}
              className="px-4 py-2 text-sm font-semibold text-white transition-all duration-200 transform rounded-lg shadow-lg bg-themeDark hover:scale-105"
            >
              Demo
            </button>
          )}

          {item.projectLink && (
            <button
              onClick={(e) => {e.preventDefault();window.open(item.projectLink, "_blank")}}
              className="px-4 py-2 text-sm font-semibold text-white transition-all duration-200 transform rounded-lg shadow-lg bg-themeDark hover:scale-105"
            >
              View Project
            </button>
          )}

          <button
            onClick={(e) => {e.preventDefault();setSelectedProject(item)}}
            className="px-4 py-2 text-sm font-semibold text-white transition-all duration-200 transform rounded-lg shadow-lg bg-themeDark hover:scale-105"
          >
            Project Overview
          </button>
        </div>
      </div>
    );
  });

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
          <h1 className="text-4xl font-bold text-transparent text-white md:text-6xl">
            My Projects
          </h1>
          <div className="h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full transform scale-x-0 animate-[scaleX_1s_ease-out_0.5s_forwards]" />
        </div>
        <div className="w-24 h-1 mx-auto mt-5 bg-white rounded-full"></div>
      </div>

      {/* Project List */}  
      <div className='semiSm:w-[75%] sm:w-[70%] md:w-[90%] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
        {
          projects && projects.map((item, index) => {
              return (
                <div key={index}
            className={`relative group transition-all h-full  duration-700 ease-out transform 
            `}
            onMouseEnter={() => setHoveredProject(item.id)}
            onMouseLeave={() => setHoveredProject(null)}
            onClick={() => setHoveredProject(hoveredProject === item.id ? null : item.id)}
          >
            
            {/* Card */}
            <div className="relative h-full overflow-hidden transition-all duration-500 border shadow-2xl bg-themeDark backdrop-blur-xl border-gray-700/50 rounded-3xl hover:shadow-3xl">
              {/* Top Accent Line */}
              <div className={`${hoveredProject === item.id ? 'h-1 w-full' : 'h-0 w-0'} bg-gradient-to-r ${item.color} transform transition-all duration-500 `} />
              
              {/* Image Container */}
              <div className="relative w-full p-2 overflow-hidden  ">
                {
                  item?.images && (
                    <Carousel 
                      showIndicators={false} 
                      showThumbs={false} 
                      showStatus={false} 
                      autoPlay={false} 
                      infiniteLoop 
                      interval={5000}
                      swipeable={false}
                      className="w-full h-full flex"
                    >
                {
                  item?.images?.map((imgsrc, index) => 
                  {
                  return (
                    <RenderProjectImages key={imgsrc} item={item} imgsrc={imgsrc} />
                  )})
                
                }
                </Carousel>
                  )
                }
              </div>

              {/* Content */}
              <div className="px-6 py-3 flex flex-col justify-between h-[250px] md:h-[220px] xl:h-[230px]">

                {/* Title & Subtitle */}
                <>
                <div>
                  <div className='flex items-center justify-between'>
                  <h3 className="mb-1 text-lg font-bold text-white lg:text-xl">{item.title}</h3>
                  <span className={` text-xs font-semiboldtext-white`}>
                    {item.category}
                  </span>
                  </div>
                  <p className={`text-sm font-medium text-themeSecondary`}>
                    {item.subtitle}
                  </p>
                  
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed text-gray-300 xl:text-base line-clamp-3">
                  {item.description}
                </p>
                </>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-5 border-t border-gray-700">
                  {item.techStack.map((tech, index) => (
                    <span 
                      key={index}
                      className="py-1 text-xs font-medium text-gray-400 transition-colors duration-200 rounded-full "
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

      {/* Project Overview Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute w-full h-full bg-black cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal */}
            <motion.div
              className="p-3 md:p-0 z-20 "
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <ProjectOverview
                handleCloseProjectOverview={handleCloseProjectOverview}
                project={selectedProject}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Projects