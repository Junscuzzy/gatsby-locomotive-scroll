import { useEffect, FC } from 'react'

import { LocomotiveScrollInterface } from '../interfaces'

import './locomotive-scroll.css'

import LocomotiveScroll from 'locomotive-scroll'

const Scroll: FC<any> = callbacks => {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const locomotiveScroll: LocomotiveScrollInterface = new LocomotiveScroll({
      el: document.querySelector('#___gatsby'),
      smooth: true,
      smoothMobile: false,
      getDirection: true,
    })

    locomotiveScroll.update()

    // Exposing to the global scope for ease of use.
    window.locomotive = locomotiveScroll

    locomotiveScroll.on('scroll', func => {
      // Update `data-direction` with scroll direction.
      document.documentElement.setAttribute('data-direction', func.direction)
    })

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy()
    }
  }, [callbacks])

  return null
}

export default Scroll
