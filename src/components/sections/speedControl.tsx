import React from 'react'
import { Theme, Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import { ScrollSection } from '../locomotive-scroll'
import Container from '../container'
import Locomotive01 from '../../images/locomotive01.jpg'

const useStyles = makeStyles((theme: Theme) => ({
  flex: { display: 'flex' },
  left: { width: `40%` },
  right: { width: `60%`, paddingLeft: theme.spacing(6) },
  text: { fontWeight: 700, maxWidth: 320 },
  bubble: {
    borderRadius: `50%`,
    background: theme.palette.background.default,
    padding: theme.spacing(3, 4),
    zIndex: 1,
    position: 'absolute',
    top: 96,
    right: 96,
    transform: `translate3d(-50%, -200%, 0)`,
  },
}))

const SpeedControl = () => {
  const classes = useStyles()

  return (
    <ScrollSection>
      <Container>
        <Box my={20} className={classes.flex}>
          <div
            className={classes.left}
            data-scroll
            data-scroll-position="top"
            data-scroll-speed="-2"
          >
            <Typography variant="h4" color="textPrimary" gutterBottom>
              01.
              <br />
              Speed control
            </Typography>
            <Typography variant="body1" color="textPrimary" gutterBottom>
              Each element can be animated at a different speed. You get to
              choo-choo-choose!
            </Typography>
          </div>
          <div className={classes.right}>
            <Box
              style={{
                opacity: '0.75',
                mixBlendMode: 'multiply',
                position: 'relative',
              }}
              data-scroll
              data-scroll-speed="2"
            >
              <img
                style={{ maxWidth: '100%' }}
                src={Locomotive01}
                alt="Locomotive 01"
              />
              <Typography
                data-scroll
                color="textPrimary"
                variant="h4"
                style={{
                  position: 'absolute',
                  left: '50%',
                  transform: `translate3d(-50%, -200%, 0)`,
                }}
              >
                SPEED X2
              </Typography>
              <Typography
                data-scroll
                data-scroll-speed="4"
                color="textPrimary"
                variant="h4"
                className={classes.bubble}
              >
                4x
              </Typography>
            </Box>
          </div>
        </Box>
      </Container>
    </ScrollSection>
  )
}

export default SpeedControl
