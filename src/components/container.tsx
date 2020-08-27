import React, { FC } from 'react'

import { Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
    margin: 'auto',
    maxWidth: `100rem`,
  },
}))

const Container: FC = ({ children }) => {
  const classes = useStyles()
  return <div className={classes.container}>{children}</div>
}

export default Container
