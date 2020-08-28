import React, { FC } from 'react'
import { Theme, Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import Container from '../../container'
import SectionTitle from '../../SectionTitle'

const useStyles = makeStyles((theme: Theme) => ({}))

const ScrollDirection: FC = () => {
  const classes = useStyles()

  return (
    <Box mt="-15vh">
      <Container id="scroll-direction" data-scroll-section>
        <SectionTitle
          number="02"
          title="Scroll direction"
          content="And if that wasn't enough, make 'em go backwards. Or upwards. Or downloads!"
        />
      </Container>
    </Box>
  )
}

export default ScrollDirection
