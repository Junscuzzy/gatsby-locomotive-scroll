import React, { FC, ReactNode } from 'react'

import Box, { BoxProps } from '@material-ui/core/Box'

const Grid: FC<{ left: ReactNode; right: ReactNode; gridProps?: BoxProps }> = ({
  left,
  right,
  gridProps,
}) => {
  const common = { position: 'relative' }
  return (
    <Box
      {...common}
      display="flex"
      justifyContent="space-between"
      {...gridProps}
    >
      <Box {...common} width="40%">
        {left}
      </Box>
      <Box {...common} width="60%" pl={6}>
        {right}
      </Box>
    </Box>
  )
}

export default Grid
