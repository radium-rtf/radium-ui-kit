import {createUseStyles} from 'react-jss'

export const useStyles = createUseStyles({
  root: {
    borderRadius: '0.5rem',
    border: '1px solid transparent',
    padding: '0.5rem',
    transition: 'color 0.2s ease, border-color 0.2s ease, background-color 0.2s ease',
    '&:hover': {
      borderColor: 'rgba(255, 255, 255, 0.1)',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
    },
  },
})
