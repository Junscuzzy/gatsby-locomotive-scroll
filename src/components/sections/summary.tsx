import React, { FC } from 'react'
import { Theme, Box, Typography, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import Container from '../container'
import ScrollLink from '../ScrollLink'

const useStyles = makeStyles((theme: Theme) => ({
  flex: { display: 'flex' },
  left: { width: `40%` },
  right: { width: `60%`, paddingLeft: theme.spacing(6), listStyle: 'none' },
  text: { fontWeight: 700, maxWidth: 320 },

  summaryLink: {
    fontWeight: 700,
    display: 'flex',
    justifyContent: 'space-between',
    transition: 'color .3s cubic-bezier(.215,.61,.355,1)',
    color: theme.palette.common.black,

    '&:hover': {
      textDecoration: 'none',
      cursor: 'pointer',
      color: theme.palette.common.white,
    },
  },
}))

const SummaryLink: FC<{ title: string; to: string }> = ({ title, to }) => {
  const classes = useStyles()
  return (
    <Box marginBottom={1}>
      <Typography variant="h5" gutterBottom>
        <ScrollLink
          to={to}
          className={classes.summaryLink}
          color="inherit"
          offset={-100}
        >
          <span>{title}</span>
          <span style={{ fontSize: 12, margin: 'auto 0 auto auto' }}>↓</span>
        </ScrollLink>
      </Typography>
      <Divider />
    </Box>
  )
}

const Summary = () => {
  const classes = useStyles()

  return (
    <Container data-scroll-section>
      <Box mb={12}>
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
          <div className={classes.right}>
            <SummaryLink title="01. SPEED CONTROL" to="speed-control" />
            <SummaryLink title="02. SCROLL DIRECTION" to="scroll-direction" />
            <SummaryLink title="03. LERP EFFECT" to="lerp-effect" />
            <SummaryLink title="04. FIXED ELEMENTS" to="fixed-elements" />
          </div>
        </Box>
      </Box>
    </Container>
  )
}

export default Summary
