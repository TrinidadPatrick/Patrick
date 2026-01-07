import { X } from 'lucide-react'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'

const ProjectOverview = (props) => {
    const {project, handleCloseProjectOverview} = props

    return (
        <main className='bg-themeDark rounded-xl max-w-5xl overflow-hidden'>
            {/* Image */}
            <div className="relative overflow-hidden ">
                <button
                    onClick={()=>handleCloseProjectOverview()}
                    className="bg-white text-black absolute top-4 right-4 z-20 p-2 rounded-full bg-background/80 text-foreground hover:bg-secondary transition-colors"
                    >
                    <X className="w-5 h-5" />
                </button>
                <Carousel 
                    showArrows={true}
                    showIndicators={false} 
                    showThumbs={false} 
                    showStatus={false} 
                    autoPlay={true} 
                    infiniteLoop 
                    interval={5000}
                    swipeable={true}
                    className="h-full"
                >
                    {project.img.map((imgsrc, index) => (
                        <div key={index} className="relative flex overflow-hidden group/image ">
                            <div style={{backgroundImage: `url(${imgsrc})`}} className='w-full bg-black bg-center bg-cover aspect-video' />
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
                  <h2 className="text-2xl font-bold text-foreground mb-1">{project.title}</h2>
                  <p className="category-tag text-base text-blue-500">{project.subtitle}</p>
                </div>
                <span className="type-badge px-3 py-1 bg-secondary rounded-full">
                  {project.category}
                </span>
              </div>

              <p className="text-gray-300 font-light leading-relaxed mb-6">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-5 border-t border-gray-700">
                  {project.techStack.map((tech, index) => (
                    <span 
                      key={index}
                      className="py-1 text-sm md:text-base font-medium text-gray-400 transition-colors duration-200 rounded-full "
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