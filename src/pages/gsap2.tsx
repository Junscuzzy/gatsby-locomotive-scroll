import React, { FC } from 'react'

import { makeStyles } from '@material-ui/core/styles'

import SmoothScroll from '../components/gsap2/smooth-scroll'
import Header from '../components/locomotive/sections/header'
import Summary from '../components/gsap2/sections/summary'
import ScrollDirection from '../components/locomotive/sections/scrollDirection'
import SpeedControl from '../components/locomotive/sections/speedControl'

const useStyles = makeStyles({})

const GsapPage: FC = () => {
  return (
    <SmoothScroll>
      <Header />
      <Summary />
      <SpeedControl />
      <ScrollDirection />
    </SmoothScroll>
  )
}

export default GsapPage
