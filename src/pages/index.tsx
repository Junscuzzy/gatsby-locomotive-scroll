import React, { FC, useRef, useEffect } from 'react'

import LocomotiveScroll from 'locomotive-scroll'

import SEO from '../components/seo'
import Header from '../components/locomotive/sections/header'
import Summary from '../components/locomotive/sections/summary'
import SpeedControl from '../components/locomotive/sections/speedControl'
import ScrollDirection from '../components/locomotive/sections/scrollDirection'
import { LocomotiveScrollInterface } from '../interfaces'

const IndexPage: FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const locomotiveScroll: LocomotiveScrollInterface = new LocomotiveScroll({
      // el: document.querySelector('#___gatsby'),
      el: scrollRef.current,
      smooth: true,
    })

    locomotiveScroll.update()

    // Exposing to the global scope for ease of use.
    window.locomotive = locomotiveScroll

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy()
    }
  }, [location])

  return (
    <>
      <SEO title="Home" />

      <div ref={scrollRef} style={{ padding: '0 0 200vh' }}>
        <Header />
        <Summary />
        <SpeedControl />
        <ScrollDirection />
      </div>
    </>
  )
}

export default IndexPage
