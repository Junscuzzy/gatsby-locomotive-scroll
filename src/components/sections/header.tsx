import React, { FC } from 'react'
import { Theme, Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import Container from '../container'
import Navbar from '../Navbar'

const Logo = () => (
  <svg id="logo" viewBox="0 0 64 140">
    <title>locomotive</title>
    <desc>Created with Sketch.</desc>

    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="laptop" transform="translate(-1336.000000, -714.000000)">
        <g id="00.-Top" transform="translate(31.000000, 38.000000)">
          <g id="locomotive" transform="translate(1305.000000, 676.000000)">
            <g id="Clip-2"></g>
            <path
              d="M56.3517545,15.6880902 L56.235428,15.6818915 L7.42092046,13.1758351 L7.42092046,7.39242364 L56.3517545,7.39242364 L56.3517545,15.6880902 Z M7.53635897,16.0750678 L43.6215504,17.5264553 L43.6224384,17.7478384 L7.42092046,19.2700684 L7.42092046,16.0706402 L7.53635897,16.0750678 Z M56.3517545,28.4946583 L7.42092046,28.4946583 L7.42092046,22.1701867 L7.5265911,22.1639879 L56.3517545,19.602143 L56.3517545,28.4946583 Z M7.42092046,38.9333131 L56.3517545,38.9333131 L56.3517545,31.3177353 L7.42092046,31.3177353 L7.42092046,38.9333131 Z M7.42092046,49.5278215 L56.3517545,49.5278215 L56.3517545,41.7608177 L7.42092046,41.7608177 L7.42092046,49.5278215 Z M5.08906248,52.3508985 L5.08906248,55.6185127 L3.7206721,55.6185127 C3.34505293,55.6185127 3.01560917,55.4511471 2.74122071,55.1208435 C2.47038419,54.7993953 2.33274597,54.4159598 2.33274597,53.9838201 C2.33274597,53.5552224 2.47038419,53.173558 2.74122071,52.8485677 C3.01827314,52.5182641 3.3477169,52.3508985 3.7206721,52.3508985 L5.08906248,52.3508985 Z M7.42092046,55.6185127 L56.3517545,55.6185127 L56.3517545,52.3508985 L7.42092046,52.3508985 L7.42092046,55.6185127 Z M60.2828799,52.3508985 C60.6540591,52.3508985 60.9826148,52.5182641 61.2587793,52.8485677 C61.5305038,53.1700159 61.668142,53.5516803 61.668142,53.9838201 C61.668142,54.419502 61.5305038,54.8020519 61.2578913,55.1217291 C60.9852788,55.4511471 60.656723,55.6185127 60.2828799,55.6185127 L58.6845004,55.6185127 L58.6845004,52.3508985 L60.2828799,52.3508985 Z M56.3517545,58.4451318 L56.3517545,65.1556956 L7.42092046,65.7419179 L7.42092046,58.4451318 L56.3517545,58.4451318 Z M56.3517545,67.8300031 L56.3517545,70.8638368 L56.229212,70.8505538 L29.6161947,67.8087503 L29.6286265,67.5882528 L56.3517545,67.8300031 Z M50.0141801,72.4604515 L50.0141801,72.680949 L7.42092046,76.5817188 L7.42092046,68.5632238 L7.5416869,68.5747358 L50.0141801,72.4604515 Z M56.3517545,77.3636438 L56.2425319,77.3654149 L27.8535374,77.7860427 L27.8402176,77.5655452 L56.3517545,74.3900264 L56.3517545,77.3636438 Z M7.53280702,79.4074524 L56.3517545,79.9892471 L56.3517545,86.8574356 L7.42092046,86.8574356 L7.42092046,79.4056813 L7.53280702,79.4074524 Z M5.08906248,89.6805126 L5.08906248,92.9454702 L3.7206721,92.9454702 C3.34416494,92.9454702 3.01472119,92.7789901 2.74122071,92.4504576 C2.47038419,92.1307805 2.33274597,91.749116 2.33274597,91.3152052 C2.33274597,90.8830655 2.47038419,90.49963 2.7421087,90.1772962 C3.02093711,89.8478782 3.35038086,89.6805126 3.7206721,89.6805126 L5.08906248,89.6805126 Z M7.42092046,92.9454702 L56.3517545,92.9454702 L56.3517545,89.6796271 L7.42092046,89.6796271 L7.42092046,92.9454702 Z M60.2828799,89.6805126 C60.6513951,89.6805126 60.9790629,89.8478782 61.2587793,90.1772962 C61.5305038,90.4969734 61.668142,90.8804089 61.668142,91.3152052 C61.668142,91.7517726 61.5305038,92.1343226 61.2578913,92.4522287 C60.9861668,92.7789901 60.658499,92.9454702 60.2828799,92.9454702 L58.6845004,92.9454702 L58.6845004,89.6805126 L60.2828799,89.6805126 Z M7.42092046,107.881743 L56.3517545,107.881743 L56.3517545,95.7729748 L7.42092046,95.7729748 L7.42092046,107.881743 Z M3.7206721,107.881743 C3.34594092,107.881743 3.01649716,107.714378 2.74122071,107.384074 C2.47038419,107.05997 2.33274597,106.676534 2.33274597,106.247051 C2.33274597,105.815797 2.47038419,105.434132 2.7421087,105.110913 C3.0138332,104.781495 3.34327696,104.613244 3.7206721,104.613244 L5.08906248,104.613244 L5.08906248,107.881743 L3.7206721,107.881743 Z M7.42092046,117.711152 L56.3517545,117.711152 L56.3517545,110.707477 L7.42092046,110.707477 L7.42092046,117.711152 Z M5.08906248,120.538657 L5.08906248,123.807156 L3.7206721,123.807156 C3.3477169,123.807156 3.01827314,123.639791 2.7421087,123.310373 C2.47038419,122.984497 2.33274597,122.601061 2.33274597,122.169807 C2.33274597,121.738553 2.47038419,121.356888 2.7421087,121.033669 C3.01738515,120.705137 3.34682891,120.538657 3.7206721,120.538657 L5.08906248,120.538657 Z M7.42092046,123.807156 L56.3517545,123.807156 L56.3517545,120.538657 L7.42092046,120.538657 L7.42092046,123.807156 Z M60.2828799,120.538657 C60.6549471,120.538657 60.9835028,120.705137 61.2587793,121.033669 C61.5305038,121.353346 61.668142,121.735896 61.668142,122.169807 C61.668142,122.609917 61.5340557,122.983611 61.2587793,123.310373 C60.9826148,123.639791 60.6540591,123.807156 60.2828799,123.807156 L58.6845004,123.807156 L58.6845004,120.538657 L60.2828799,120.538657 Z M7.42092046,135.006483 L56.3517545,135.006483 L56.3517545,126.631119 L7.42092046,126.631119 L7.42092046,135.006483 Z M63.8090825,0 L61.4763365,0 L61.4763365,4.57200326 L58.6845004,4.57200326 L58.6845004,1.5461394 L56.3517545,1.5461394 L56.3517545,4.57200326 L33.167261,4.57200326 L33.167261,1.52134449 L30.832739,1.52134449 L30.832739,4.57200326 L7.42092046,4.57200326 L7.42092046,1.5461394 L5.08906248,1.5461394 L5.08906248,4.57200326 L2.52366351,4.57200326 L2.52366351,0 L0.194469496,0 L0.194469496,7.39242364 L5.08906248,7.39242364 L5.08906248,13.0536316 L4.97184799,13.0483184 L0.194469496,12.803026 L0.194469496,15.7810711 L5.08906248,15.9803159 L5.08906248,19.3674769 L0.194469496,19.5746915 L0.194469496,22.5509655 L5.08906248,22.2932756 L5.08906248,28.4946583 L0.194469496,28.4946583 L0.194469496,31.3186208 L5.08906248,31.3186208 L5.08906248,38.9333131 L2.52366351,38.9333131 L2.52366351,35.8879675 L0.194469496,35.8879675 L0.194469496,44.8043922 L2.52366351,44.8043922 L2.52366351,41.7599322 L5.08906248,41.7599322 L5.08906248,49.5278215 L3.7206721,49.5278215 C2.69859726,49.5765258 1.81238467,50.0352315 1.09133795,50.8924268 C0.367627267,51.7620195 0,52.80252 0,53.9838201 C0.0399594855,55.216481 0.428898478,56.2835474 1.15438514,57.1513691 C1.87454387,58.0094499 2.73855674,58.4451318 3.7206721,58.4451318 L5.08906248,58.4451318 L5.08906248,65.7711405 L0.194469496,65.8287001 L0.194469496,67.9008457 L5.08906248,68.3506961 L5.08906248,76.7942466 L0.194469496,77.2414404 L0.194469496,79.3162426 L5.08906248,79.3729166 L5.08906248,86.8574356 L3.7206721,86.8574356 C2.70037323,86.9043688 1.81416064,87.3657312 1.09133795,88.2282396 C0.367627267,89.0916336 0,90.130363 0,91.3152052 C0.0399594855,92.5469807 0.428898478,93.6131615 1.15438514,94.4800977 C1.87631984,95.3381785 2.74033272,95.7738604 3.7206721,95.7738604 L5.08906248,95.7738604 L5.08906248,101.788396 L3.7206721,101.788396 C2.69859726,101.838871 1.81149668,102.300233 1.09133795,103.158314 C0.367627267,104.022594 0,105.062209 0,106.247051 C0.0399594855,107.479712 0.428898478,108.546778 1.15438514,109.4146 C1.87276789,110.272681 2.73678076,110.707477 3.7206721,110.707477 L5.08906248,110.707477 L5.08906248,117.711152 L3.7206721,117.711152 C2.69770927,117.764284 1.81060869,118.225646 1.09133795,119.08107 C0.367627267,119.948007 0,120.987622 0,122.169807 C0.0399594855,123.403354 0.428898478,124.469535 1.15438514,125.336471 C1.87276789,126.195437 2.73678076,126.631119 3.7206721,126.631119 L5.08906248,126.631119 L5.08906248,135.006483 L0.194469496,135.006483 L0.194469496,137.834874 L5.08906248,137.834874 L5.08906248,140 L7.42092046,140 L7.42092046,137.834874 L56.3517545,137.834874 L56.3517545,140 L58.6845004,140 L58.6845004,137.834874 L63.8090825,137.834874 L63.8090825,130.437137 L61.4763365,130.437137 L61.4763365,135.006483 L58.6845004,135.006483 L58.6845004,126.631119 L60.2828799,126.631119 C61.3040667,126.582415 62.1893913,126.121052 62.9086621,125.260315 C63.6323727,124.398692 64,123.359077 64,122.169807 C63.9591525,120.937146 63.5711015,119.87008 62.8456149,119.004915 C62.1245681,118.146834 61.2623312,117.711152 60.2828799,117.711152 L58.6845004,117.711152 L58.6845004,110.707477 L60.2828799,110.707477 C61.3067307,110.657887 62.1911673,110.196525 62.9086621,109.337559 C63.6323727,108.474165 64,107.433664 64,106.247051 C63.9591525,105.017046 63.5711015,103.950866 62.8447269,103.079502 C62.1236802,102.223192 61.2614433,101.788396 60.2828799,101.788396 L58.9233694,101.788396 L58.9233694,104.613244 L60.2828799,104.613244 C60.658499,104.613244 60.9870548,104.781495 61.2596673,105.111798 C61.5305038,105.43059 61.668142,105.81314 61.668142,106.247051 C61.668142,106.679191 61.5305038,107.062626 61.2587793,107.38496 C60.9843908,107.714378 60.656723,107.881743 60.2828799,107.881743 L58.6845004,107.881743 L58.6845004,95.7738604 L60.2828799,95.7738604 C61.3067307,95.723385 62.1920553,95.2629082 62.9086621,94.4048274 C63.6323727,93.542319 64,92.5035896 64,91.3152052 C63.9591525,90.0781166 63.5711015,89.0119357 62.8456149,88.1485417 C62.1254561,87.2913465 61.2641072,86.8574356 60.2828799,86.8574356 L58.6845004,86.8574356 L58.6845004,80.0149275 L63.8090825,80.0769148 L63.8090825,77.2520668 L58.6845004,77.3308791 L58.6845004,74.1296799 L64,73.5381443 L64,71.6847252 L58.6845004,71.1144424 L58.6845004,67.8477137 L63.8090825,67.8911048 L63.8090825,65.0671423 L58.6845004,65.1300151 L58.6845004,58.4451318 L60.2828799,58.4451318 C61.3049547,58.3964275 62.1902793,57.9350652 62.9086621,57.0743278 C63.6323727,56.2127049 64,55.1730899 64,53.9838201 C63.9591525,52.7511591 63.5711015,51.6849782 62.8456149,50.8198132 C62.1183522,49.9502204 61.280091,49.5278215 60.2828799,49.5278215 L58.6845004,49.5278215 L58.6845004,41.7599322 L63.8090825,41.7599322 L63.8090825,38.9333131 L58.6845004,38.9333131 L58.6845004,31.3186208 L63.8090825,31.3186208 L63.8090825,28.4946583 L58.6845004,28.4946583 L58.6845004,19.4817106 L63.8090825,19.2116232 L63.8090825,16.0715257 L58.6845004,15.8076371 L58.6845004,7.39242364 L63.8090825,7.39242364 L63.8090825,0 Z"
              id="Fill-1"
              fill="#272727"
              mask="url(#mask-2)"
            ></path>
          </g>
        </g>
      </g>
    </g>
  </svg>
)

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    height: `100vh`,
    minHeight: `50vh`,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    position: 'relative',
  },
  h1: {
    fontSize: '12vw',
    fontWeight: 400,
    textTransform: 'uppercase',
    lineHeight: 0.9,
    marginBottom: theme.spacing(6),
    marginTop: 'auto',

    '& span': {
      display: 'inline-block',
    },
    '& .version span': {
      color: theme.palette.common.white,
    },
  },
  logo: {
    width: '4rem',
    height: 'auto',
    position: 'absolute',
    bottom: theme.spacing(6),
    right: 0,
  },
}))

const Header: FC = () => {
  const classes = useStyles()

  return (
    <Container data-scroll-section>
      <Box className={classes.header}>
        <Navbar />

        <Typography variant="h1" color="textPrimary" className={classes.h1}>
          <span data-scroll data-scroll-speed="3" data-scroll-position="top">
            Locomotive
          </span>
          <br />
          <span data-scroll data-scroll-speed="2" data-scroll-position="top">
            Scroll
          </span>
          <br />
          <span className="version">
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
          </span>
        </Typography>

        <a href="https://locomotive.ca/" className={classes.logo}>
          <Logo />
        </a>
      </Box>
    </Container>
  )
}

export default Header
