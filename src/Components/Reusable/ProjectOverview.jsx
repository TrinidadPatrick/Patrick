import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'

const ProjectOverview = (props) => {
  const { project, handleCloseProjectOverview } = props

  return (
    <main className='bg-themeDark rounded-xl max-w-3xl xl:max-w-3xl max-h-[80vh] overflow-x-auto'>
      {/* Image */}
      <div className="relative overflow-hidden bg-red-100 flex aspect-video group">
        <Carousel
          showArrows={true}
          showIndicators={false}
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          interval={5000}
          swipeable={true}
          renderArrowPrev={(clickHandler, hasPrev) => (
            <div
              onClick={clickHandler}
              className="absolute z-20 flex items-center justify-center p-3 text-white transition-opacity duration-300 opacity-100 cursor-pointer top-1/2 left-2 bg-black/30 rounded-full hover:bg-black/50"
            >
              <ChevronLeft className="w-6 h-6" />
            </div>
          )}
          renderArrowNext={(clickHandler, hasNext) => (
            <div
              onClick={clickHandler}
              className="absolute z-20 flex items-center justify-center p-3 text-white transition-opacity duration-300 opacity-100 cursor-pointer top-1/2 right-2 bg-black/30 rounded-full hover:bg-black/50"
            >
              <ChevronRight className="w-6 h-6" />
            </div>
          )}
          className="h-full w-full"
        >
          {project.images.map((imgsrc, index) => (
            <div key={index} className="w-full h-full relative flex overflow-hidden group/image ">
              <div className='w-full bg-black bg-center bg-cover aspect-[1920/1080]'>
                <img
                  src={imgsrc}
                  className="w-full h-full object-fit"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:opacity-100" />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Project info */}
      <div className="p-6 md:p-8 overflow-y-auto max-h-[40vh] text-white">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h2 className="text-lg md:text-2xl font-bold text-foreground mb-1">{project.title}</h2>
            <p className="text-sm md:text-base text-themeSecondary">{project.subtitle}</p>
          </div>
          <span className="px-3 py-1 bg-secondary rounded-full whitespace-nowrap text-sm md:text-base">
            {project.category}
          </span>
        </div>

        <p className="text-gray-300 font-light leading-relaxed mb-6">{project.description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 pt-5 border-t border-gray-700">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="py-1 text-sm font-medium text-gray-400 transition-colors duration-200 rounded-full "
            >
              {tech}{index < project.techStack.length - 1 && ' • '}
            </span>
          ))}
        </div>
      </div>
    </main>
  )
}

export default ProjectOverview