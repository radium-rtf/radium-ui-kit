import {createUseStyles} from 'react-jss'

export const useStyles = createUseStyles({
  root: {
    minHeight: '16rem',
    borderRadius: '0.5rem !important',
    fontFamily: 'JetBrains Mono, monospace',
    '& > .lineNumbers': {
      backgroundColor: 'white',
    },
  },
})
