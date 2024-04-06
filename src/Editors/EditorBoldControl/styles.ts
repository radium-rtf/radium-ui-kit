import {createUseStyles} from 'react-jss'

export const useStyles = createUseStyles({
  button: {
    borderRadius: '0.5rem',
    border: '1px solid transparent',
    padding: '0.5rem',
    transition: 'color 0.2s ease-in-out, border-color 0.2s ease-in-out, background-color 0.2s ease-in-out',
    '&:hover': {
      borderColor: 'rgba(255, 255, 255, 0.1)',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
    },
  },
  bold: {
    borderColor: 'rgba(255, 255, 255, 0.1)',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
})
