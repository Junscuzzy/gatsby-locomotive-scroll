import React, { FC } from 'react'

import { Theme, BoxProps, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
    marginLeft: 'auto',
    marginRight: 'auto',
    width: `100%`,
    maxWidth: `100rem`,
  },
}))

export type ContainerProps = BoxProps

const Container: FC<ContainerProps> = props => {
  const classes = useStyles()
  return <Box className={classes.container} {...props} />
}

export default Container
