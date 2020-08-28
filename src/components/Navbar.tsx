import React, { FC } from 'react'
import { Theme, Box, Typography, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import Container from './container'
import ScrollLink from './ScrollLink'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    width: `100%`,
  },
  text: {
    fontWeight: 700,
    display: 'inline-block',
  },
}))

const Navbar: FC = () => {
  const classes = useStyles()

  return (
    <Container data-scroll-section>
      <Box
        paddingY={6}
        className={classes.root}
        data-scroll
        data-scroll-speed="-12"
        data-scroll-position="top"
      >
        <Typography
          variant="h6"
          className={classes.text}
          color="textPrimary"
          data-scroll
          data-scroll-speed="-2"
          data-scroll-position="top"
          data-scroll-direction="horizontal"
        >
          <ScrollLink color="inherit" to="___gatsby">
            LOCOMOTIVE.COPY
          </ScrollLink>
        </Typography>
        <Typography
          variant="h6"
          className={classes.text}
          color="textPrimary"
          data-scroll
          data-scroll-speed="2"
          data-scroll-position="top"
          data-scroll-direction="horizontal"
        >
          <Link
            color="inherit"
            href="https://github.com/Junscuzzy/gatsby-locomotive-scroll"
          >
            JUNSCUZZY
          </Link>
        </Typography>
      </Box>
    </Container>
  )
}

export default Navbar
