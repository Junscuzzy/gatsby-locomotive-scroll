import React, { FC } from 'react'
import { makeStyles, ThemeProvider } from '@material-ui/styles'
import { Theme } from '@material-ui/core'
import { useSelector } from 'react-redux'
import loadable from '@loadable/component'

import themes from '../theme'
import { RootState } from '../redux/store'

const Scroll = loadable(() => import('./locomotive-scroll'))

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
}))

const LayoutComponent: FC<{ location: Location }> = props => {
  const classes = useStyles()

  return (
    <>
      {typeof window !== 'undefined' && <Scroll callbacks={props.location} />}

      <main className={classes.root}>{props.children}</main>
    </>
  )
}

const Layout: FC<{ location: Location }> = props => {
  const { theme } = useSelector((state: RootState) => state.app)

  return (
    <ThemeProvider theme={themes[theme]}>
      <LayoutComponent {...props} />
    </ThemeProvider>
  )
}

export default Layout
