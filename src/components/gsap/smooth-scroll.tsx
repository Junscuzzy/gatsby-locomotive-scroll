import React, { FC, useState, useRef, useEffect } from 'react'
import { TweenLite, Power4 } from 'gsap'

import { Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme: Theme) => ({
  viewport: {
    margin: 0,
    width: '100vw',
    overflowX: 'hidden',
    position: 'fixed',
  },
}))

const SmoothScroll: FC = ({ children }) => {
  const classes = useStyles()
  const [height, setHeight] = useState(window?.innerHeight || 0)
  const viewportRef = useRef<HTMLDivElement | null>(null)
  const fakeRef = useRef<HTMLDivElement | null>(null)

  const ro = new ResizeObserver(elements => {
    for (const elem of elements) {
      const crx = elem.contentRect
      console.log(crx)
      setHeight(crx.height)
    }
  })

  const onScroll = () => {
    TweenLite.to(viewportRef.current, 1, {
      duration: 2,
      y: -window.pageYOffset,
      ease: Power4.easeOut,
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)

    if (viewportRef.current) {
      ro.observe(viewportRef.current)
    }

    return () => {
      ro.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <>
      <div className={classes.viewport} ref={viewportRef}>
        {children}
      </div>
      <div
        ref={fakeRef}
        style={{
          height,
        }}
      />
    </>
  )
}

export default SmoothScroll
