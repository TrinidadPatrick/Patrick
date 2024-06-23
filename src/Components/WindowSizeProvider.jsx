import React, { useEffect, useState } from 'react'

const WindowSizeProvider = () => {
    const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });


    useEffect(()=>{
        const getWindowSize = () => {
            const {innerWidth, innerHeight} = window
            setSize({width : innerWidth, height : innerHeight})
        }
        getWindowSize()

        window.addEventListener('resize', getWindowSize)

        return () => {
            window.removeEventListener('resize', getWindowSize)
        }
    },[])

  return {size}
}

export default WindowSizeProvider