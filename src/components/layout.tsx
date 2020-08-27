import React, { FC } from 'react'
import { makeStyles, ThemeProvider } from '@material-ui/styles'
import { Theme } from '@material-ui/core'
import { useSelector } from 'react-redux'

import themes from '../theme'
import { RootState } from '../redux/store'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
}))

const LayoutComponent: FC = ({ children }) => {
  const classes = useStyles()
  return <main className={classes.root}>{children}</main>
}

const Layout: FC = ({ children }) => {
  const { theme } = useSelector((state: RootState) => state.app)

  return (
    <ThemeProvider theme={themes[theme]}>
      <LayoutComponent>{children}</LayoutComponent>
    </ThemeProvider>
  )
}

export default Layout
