import React from 'react'
import { Theme, Box, Typography, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import Container from '../container'
import ScrollLink from '../ScrollLink'

const useStyles = makeStyles((theme: Theme) => ({
  flex: { display: 'flex' },
  left: { width: `40%` },
  right: { width: `60%`, paddingLeft: theme.spacing(6) },
  text: { fontWeight: 700, maxWidth: 320 },
}))

const Summary = () => {
  const classes = useStyles()

  return (
    <Container data-scroll-section>
      <Box mb={24}>
        <Divider />
        <Box pt={8} />
        <Box className={classes.flex}>
          <Box className={classes.left}>
            <Typography color="textPrimary" className={classes.text}>
              A simple scroll library used by developers at Locomotive. Built as
              a layer on top of ayamflow's virtual-scroll, it provides smooth
              scrolling with support for parallax effects, toggling classes, and
              triggering event listeners when elements are in the viewport.
            </Typography>
          </Box>
          <Box className={classes.right}>
            <Typography variant="h4" color="textPrimary" gutterBottom>
              <ScrollLink to="speed-control" color="inherit" offset={-100}>
                01. SPEED CONTROL
              </ScrollLink>
              <Divider />
            </Typography>
            <Typography variant="h4" color="textPrimary" gutterBottom>
              <ScrollLink to="scroll-direction" color="inherit">
                02. SCROLL DIRECTION
              </ScrollLink>
              <Divider />
            </Typography>
            <Typography variant="h4" color="textPrimary" gutterBottom>
              <ScrollLink to="lerp-effect" color="inherit">
                03. LERP EFFECT
              </ScrollLink>
              <Divider />
            </Typography>
            <Typography variant="h4" color="textPrimary" gutterBottom>
              <ScrollLink to="fixed-elements" color="inherit">
                04. FIXED ELEMENTS
              </ScrollLink>
              <Divider />
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default Summary
