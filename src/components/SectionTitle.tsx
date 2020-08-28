import React, { FC } from 'react'

import { Box, Typography } from '@material-ui/core'

export interface SectionTitleProps {
  number: string
  title: string
  content: string
}

const SectionTitle: FC<SectionTitleProps> = ({ number, title, content }) => (
  <Box maxWidth="320px" pt="35vh">
    <Typography variant="h4" color="textPrimary" gutterBottom>
      {`${number}.`}
      <br />
      {title}
    </Typography>
    <Typography variant="body1" color="textPrimary" gutterBottom>
      {content}
    </Typography>
  </Box>
)

export default SectionTitle
