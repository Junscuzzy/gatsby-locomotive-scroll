import React, { FC, CSSProperties } from 'react'
import { Theme, Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import Container from '../container'
import Locomotive01 from '../../images/locomotive01.jpg'
import Locomotive02 from '../../images/locomotive02.jpg'
import Locomotive03 from '../../images/locomotive03.jpg'
import Grid from '../Grid'

const useStyles = makeStyles((theme: Theme) => ({
  flex: { display: 'flex' },
  left: { width: `40%`, position: 'relative' },
  right: { width: `60%`, paddingLeft: theme.spacing(6), position: 'relative' },
  text: { fontWeight: 700, maxWidth: 320 },
  imageText: {
    position: 'absolute',
    left: '50%',
    transform: `translate3d(-50%, -200%, 0)`,
    fontWeight: 700,
    textAlign: 'center',
    color: theme.palette.common.white,
  },
  bubble: {
    borderRadius: `50%`,
    background: theme.palette.common.black,
    color: theme.palette.common.white,
    padding: theme.spacing(3, 4),
    zIndex: 1,
    display: 'block',
    position: 'absolute',
  },
}))

const ImageWrap: FC<{ speed: number }> = ({ children, speed }) => (
  <Box
    data-scroll
    data-scroll-speed={speed}
    data-scroll-repeat
    my={12}
    style={{
      display: 'inline-block',
      opacity: '0.75',
      mixBlendMode: 'multiply',
      position: 'relative',
      border: '1px dashed black',
    }}
  >
    {children}
  </Box>
)

const InfoBubble: FC<{ speed: number; css?: CSSProperties }> = ({
  speed,
  css,
}) => {
  const classes = useStyles()
  return (
    <Typography
      data-scroll
      data-scroll-speed={speed}
      data-scroll-repeat
      color="textPrimary"
      variant="h5"
      className={classes.bubble}
      style={css}
    >
      {`${speed}x`}
    </Typography>
  )
}

const SpeedControl = () => {
  const classes = useStyles()

  return (
    <Container id="speed-control" data-scroll-section>
      <Box my={8}>
        <Grid
          left={
            <Box
              style={{ paddingTop: `35vh`, maxWidth: 320 }}
              data-scroll
              data-scroll-speed="-2"
              data-scroll-repeat
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
            </Box>
          }
          right={
            <ImageWrap speed={2}>
              <img
                style={{ maxWidth: '100%' }}
                src={Locomotive01}
                alt="Locomotive 01"
              />
              <Typography className={classes.imageText} variant="h5">
                SPEED X2
              </Typography>

              <InfoBubble
                speed={4}
                css={{
                  top: `20%`,
                  right: `10%`,
                }}
              />
            </ImageWrap>
          }
        />

        <Grid
          left={
            <ImageWrap speed={4}>
              <img
                style={{ maxWidth: '100%' }}
                src={Locomotive02}
                alt="Locomotive 02"
              />
              <Typography className={classes.imageText} variant="h5">
                SPEED X4
              </Typography>

              <InfoBubble
                speed={1}
                css={{
                  top: `30%`,
                  left: `90%`,
                }}
              />
              <InfoBubble
                speed={3}
                css={{
                  top: `90%`,
                  left: 0,
                }}
              />
            </ImageWrap>
          }
          right={
            <Box ml="auto" width={`50%`} marginTop="100%">
              <ImageWrap speed={6}>
                <img
                  style={{ maxWidth: '100%' }}
                  src={Locomotive03}
                  alt="Locomotive 03"
                />
                <Typography className={classes.imageText} variant="h5">
                  SPEED X6
                </Typography>
                <InfoBubble
                  speed={2}
                  css={{
                    top: `-20%`,
                    left: 0,
                  }}
                />
                <InfoBubble
                  speed={6}
                  css={{
                    top: `50%`,
                    right: 0,
                  }}
                />
                <InfoBubble
                  speed={9}
                  css={{
                    top: `100%`,
                    left: 0,
                  }}
                />
              </ImageWrap>
            </Box>
          }
        />
      </Box>
    </Container>
  )
}

export default SpeedControl
