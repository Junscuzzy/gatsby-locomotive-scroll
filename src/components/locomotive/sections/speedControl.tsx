import React, { FC, CSSProperties } from 'react'
import { Theme, Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import Container from '../../container'
import Locomotive01 from '../../images/locomotive01.jpg'
import Locomotive02 from '../../images/locomotive02.jpg'
import Locomotive03 from '../../images/locomotive03.jpg'
import Grid from '../../Grid'
import SectionTitle from '../../SectionTitle'

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
    // zIndex: 1,
    // display: 'inline-block',
    // position: 'absolute',
  },
}))

const ImageWrap: FC<{ speed: number; css?: CSSProperties }> = ({
  children,
  speed,
  css,
}) => {
  const classes = useStyles()
  return (
    <Box
      data-scroll
      data-scroll-speed={speed}
      my={12}
      style={{
        display: 'block',
        opacity: '0.75',
        mixBlendMode: 'multiply',
        ...css,
      }}
    >
      {children}
      <Typography className={classes.imageText} variant="h5">
        {`SPEED X${speed}`}
      </Typography>
    </Box>
  )
}

const InfoBubble: FC<{
  speed: number
  top?: CSSProperties['top']
  left?: CSSProperties['left']
}> = ({ speed = 1, top = 0, left = 0 }) => {
  const classes = useStyles()
  return (
    <Box
      data-scroll
      data-scroll-speed={speed}
      position="absolute"
      display="inline-block"
      zIndex={1}
      top={top}
      left={left}
    >
      <Typography color="textPrimary" variant="h5" className={classes.bubble}>
        {`${speed}x`}
      </Typography>
    </Box>
  )
}

const SpeedControl = () => {
  const classes = useStyles()

  return (
    <Container id="speed-control">
      <Box my={8} data-scroll-section>
        <Grid
          left={
            <Box data-scroll data-scroll-speed="-2">
              <SectionTitle
                number="01"
                title="Speed control"
                content="Each element can be animated at a different speed. You get to
                choo-choo-choose!"
              />
            </Box>
          }
          right={
            <ImageWrap speed={2}>
              <img
                style={{ maxWidth: '100%' }}
                src={Locomotive01}
                alt="Locomotive 01"
              />
              <InfoBubble speed={4} top="20%" left="90%" />
            </ImageWrap>
          }
        />

        <Grid
          gridProps={{ alignItems: 'flex-end' }}
          left={
            <ImageWrap speed={4}>
              <img
                style={{ maxWidth: '100%' }}
                src={Locomotive02}
                alt="Locomotive 02"
              />
              <InfoBubble speed={1} top="30%" left="90%" />

              <InfoBubble speed={3} top="60%" left="-20px" />
            </ImageWrap>
          }
          right={
            <div data-scroll style={{ marginLeft: 'auto', width: `50%` }}>
              <ImageWrap speed={6}>
                <img
                  style={{ maxWidth: '100%' }}
                  src={Locomotive03}
                  alt="Locomotive 03"
                />

                <InfoBubble speed={2} top="0" left="-20px" />

                <InfoBubble speed={6} top="50%" left="80%" />

                <InfoBubble speed={9} top="120%" left="-20px" />
              </ImageWrap>
            </div>
          }
        />
      </Box>
    </Container>
  )
}

export default SpeedControl
