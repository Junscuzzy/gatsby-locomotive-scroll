import React from 'react'
import { Theme, Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import { ScrollSection } from '../locomotive-scroll'
import Container from '../container'

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    height: `100vh`,
    minHeight: `50vh`,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  h1: {
    fontSize: 172,
    textTransform: 'uppercase',
    lineHeight: 0.9,
    marginBottom: theme.spacing(6),
    marginTop: 'auto',

    '& span': {
      display: 'inline-block',
    },
  },
}))

const Header = () => {
  const classes = useStyles()

  return (
    <ScrollSection>
      <Container>
        <Box className={classes.header}>
          <div>Navbar area</div>

          <Typography variant="h1" color="textPrimary" className={classes.h1}>
            <span data-scroll data-scroll-speed="3" data-scroll-position="top">
              Locomotive
            </span>
            <br />
            <span data-scroll data-scroll-speed="2" data-scroll-position="top">
              Scroll
            </span>
            <br />
            <span data-scroll data-scroll-speed="3" data-scroll-position="top">
              V
            </span>
            <span data-scroll data-scroll-speed="5" data-scroll-position="top">
              3
            </span>
            <span data-scroll data-scroll-speed="2" data-scroll-position="top">
              .
            </span>
            <span data-scroll data-scroll-speed="4" data-scroll-position="top">
              0
            </span>
          </Typography>
        </Box>
      </Container>
    </ScrollSection>
  )
}

export default Header
