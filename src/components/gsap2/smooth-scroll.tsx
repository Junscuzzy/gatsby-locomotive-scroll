import React, { FC, useState, useRef, useEffect } from 'react'
import gsap from 'gsap'

import { Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const useStyles = makeStyles((theme: Theme) => ({
  viewport: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  scrollContainer: {
    position: 'absolute',
    overflow: 'hidden',
    width: `100%`,
  },
}))

const SmoothScroll: FC = ({ children }) => {
  const classes = useStyles()
  const [height, setHeight] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement | null>(null)

  // Update height state.
  const updateHeight = () => {
    const newHeight = scrollContainerRef?.current?.offsetHeight
    if (!newHeight || newHeight === height) return
    setHeight(newHeight)
  }

  useEffect(() => {
    // Update document height.
    document.body.style.height = height.toString() + 'px'

    // Start gsap smooth scrolling.
    if (scrollContainerRef?.current && height) {
      gsap.to(scrollContainerRef.current, {
        y: () => -(height - document.documentElement.clientHeight),
        ease: 'none',
        scrollTrigger: {
          trigger: scrollContainerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
          invalidateOnRefresh: true,

          onRefreshInit: () => {
            updateHeight()
          },
        },
      })
    }
  }, [height])

  return (
    <div className={classes.viewport}>
      <div
        className={classes.scrollContainer}
        ref={scrollContainerRef}
        onLoad={updateHeight}
      >
        {children}
      </div>
    </div>
  )
}

export default SmoothScroll
