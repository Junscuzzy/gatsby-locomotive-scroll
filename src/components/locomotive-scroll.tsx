import React, { useEffect, useRef, FC } from 'react'

import LocomotiveScroll from 'locomotive-scroll'

import './locomotive-scroll.css'

const Scroll: FC = ({ children }) => {
  const scrollRef = useRef(null)

  useEffect(() => {
    const scroll: any = new LocomotiveScroll({
      // https://github.com/locomotivemtl/locomotive-scroll#instance-options
      el: scrollRef.current,
      smooth: true,
      smoothMobile: false,
    })

    return () => {
      if (scroll) scroll.destroy()
    }
  }, [])

  return (
    <div
      style={{
        padding: '0 0 200vh',
        minHeight: `100vh`,
      }}
      ref={scrollRef}
    >
      {children}
    </div>
  )
}

// Note: scroll-sections are optional
// but recommended to improve performance,
// particularly in long pages.
export const ScrollSection: FC = ({ children }) => (
  <section data-scroll-section>{children}</section>
)

export default Scroll

// scroll.update()

// // Exposing to the global scope for ease of use.
// window.scroll = locomotiveScroll

// locomotiveScroll.on('scroll', func => {
//   // Update `data-direction` with scroll direction.
//   document.documentElement.setAttribute('data-direction', func.direction)
// })

// return () => {
//   if (locomotiveScroll) locomotiveScroll.destroy()
// }
