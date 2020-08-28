import React, { FC } from 'react'

import SEO from '../components/seo'
import Header from '../components/sections/header'
import Summary from '../components/sections/summary'
import SpeedControl from '../components/sections/speedControl'

const IndexPage: FC = () => {
  return (
    <>
      <SEO title="Home" />

      <div
        style={{
          padding: '0 0 200vh',
          minHeight: `100vh`,
        }}
      >
        <Header />
        <Summary />
        <SpeedControl />
      </div>
    </>
  )
}

export default IndexPage
