import React, { FC } from 'react'
import gsap from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import Link, { LinkProps } from '@material-ui/core/Link'

export interface ScrollLinkProps extends Omit<LinkProps, 'onClick'> {
  to: string
}

gsap.registerPlugin(ScrollToPlugin)

const ScrollLink: FC<ScrollLinkProps> = ({ to, ...props }) => {
  const handleClick = () => {
    if (typeof window === 'undefined') return

    gsap.to(window, {
      duration: 2,
      scrollTo: `#${to}`,
      ease: 'power4',
    })
  }

  return <Link {...props} onClick={handleClick} />
}

export default ScrollLink
