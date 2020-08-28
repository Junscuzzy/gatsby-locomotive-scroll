import React, { FC } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import Img from '../images/contemplative-reptile.jpg'
import { Container, Box } from '@material-ui/core'
import SmoothScroll from '../components/gsap/smooth-scroll'
import Header from '../components/locomotive/sections/header'
import Summary from '../components/locomotive/sections/summary'
import ScrollDirection from '../components/locomotive/sections/scrollDirection'
import SpeedControl from '../components/locomotive/sections/speedControl'

const useStyles = makeStyles({
  media: {
    height: 140,
  },
})

function MediaCard() {
  const classes = useStyles()

  return (
    <Grid item xs={12} sm={4}>
      <Card>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={Img}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

const GsapPage: FC = () => {
  return (
    <SmoothScroll>
      <Header />
      <Summary />
      <SpeedControl />
      <ScrollDirection />
      <Box pt={4} pb={4}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
          </Grid>
        </Container>
      </Box>
    </SmoothScroll>
  )
}

export default GsapPage
