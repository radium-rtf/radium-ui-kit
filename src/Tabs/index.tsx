import React, {FC, ReactNode} from 'react'
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  tabs: {
    display: 'flex',
    alignItems: 'flex-end',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    padding: '0 1.5rem',
  },
})

interface IProps {
  children?: ReactNode
}

export const Tabs: FC<IProps> = ({children}) => {
  const classes = useStyles()

  return <ul className={classes.tabs}>{children}</ul>
}
