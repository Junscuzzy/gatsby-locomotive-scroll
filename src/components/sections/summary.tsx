import React from 'react'
import { Theme, Box, Typography, Link, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import { ScrollSection } from '../locomotive-scroll'
import Container from '../container'

const useStyles = makeStyles((theme: Theme) => ({
  flex: { display: 'flex' },
  left: { width: `40%` },
  right: { width: `60%`, paddingLeft: theme.spacing(6) },
  text: { fontWeight: 700, maxWidth: 320 },
}))

const Summary = () => {
  const classes = useStyles()

  return (
    <ScrollSection>
      <Container>
        <Box mb={24}>
          <Divider />
          <Box pt={8} />
          <Box className={classes.flex}>
            <Box className={classes.left}>
              <Typography color="textPrimary" className={classes.text}>
                A simple scroll library used by developers at Locomotive. Built
                as a layer on top of ayamflow's virtual-scroll, it provides
                smooth scrolling with support for parallax effects, toggling
                classes, and triggering event listeners when elements are in the
                viewport.
              </Typography>
            </Box>
            <Box className={classes.right}>
              <Typography variant="h4" color="textPrimary" gutterBottom>
                <Link color="inherit">01. SPEED CONTROL</Link>
                <Divider />
              </Typography>
              <Typography variant="h4" color="textPrimary" gutterBottom>
                <Link color="inherit">02. SCROLL DIRECTION</Link>
                <Divider />
              </Typography>
              <Typography variant="h4" color="textPrimary" gutterBottom>
                <Link color="inherit">03. LERP EFFECT</Link>
                <Divider />
              </Typography>
              <Typography variant="h4" color="textPrimary" gutterBottom>
                <Link color="inherit">04. FIXED ELEMENTS</Link>
                <Divider />
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </ScrollSection>
  )
}

export default Summary
