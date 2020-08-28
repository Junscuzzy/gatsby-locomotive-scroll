import React, { FC, ReactNode } from 'react'

import Box, { BoxProps } from '@material-ui/core/Box'

const Grid: FC<{ left: ReactNode; right: ReactNode; gridProps?: BoxProps }> = ({
  left,
  right,
  gridProps,
}) => (
  <Box display="flex" justifyContent="space-between" {...gridProps}>
    <Box width="40%">{left}</Box>
    <Box width="60%" pl={6}>
      {right}
    </Box>
  </Box>
)

export default Grid
