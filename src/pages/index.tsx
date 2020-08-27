import React, { FC } from 'react'

import SEO from '../components/seo'
import Scroll from '../components/locomotive-scroll'

import Header from '../components/sections/header'
import Summary from '../components/sections/summary'
import SpeedControl from '../components/sections/speedControl'

const IndexPage: FC = () => {
  return (
    <>
      <SEO title="Home" />

      <Scroll>
        <Header />
        <Summary />
        <SpeedControl />
      </Scroll>
    </>
  )
}

export default IndexPage
