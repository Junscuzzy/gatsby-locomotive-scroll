import React, { FC } from 'react'
import Link, { LinkProps } from '@material-ui/core/Link'

export interface ScrollLinkProps extends LinkProps {
  to: string
  offset?: number
}

const ScrollLink: FC<ScrollLinkProps> = ({ to, offset = 0, ...props }) => {
  const handleClick = () => {
    if (typeof window === 'undefined') return

    if (typeof window?.locomotive?.scrollTo === 'function') {
      window.locomotive.scrollTo(`#${to}`, offset)
    }
  }

  return <Link {...props} onClick={handleClick} />
}

export default ScrollLink
