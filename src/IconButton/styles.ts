import {createUseStyles} from 'react-jss'

export const useStyles = createUseStyles({
  button: {
    display: 'inline-flex',
    height: '2.25rem', // h-9
    width: '2.25rem', // w-9
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0.5rem', // rounded-[0.5rem]
    border: '1px solid transparent',
    padding: '0.5625rem', // p-[0.5625rem]
    transition: 'colors 0.2s ease-in-out',
    '&:hover': {
      borderColor: 'var(--border-outlineGeneral)', // Replace with your actual color variable for 'hover:border-outlineGeneral'
      backgroundColor: 'var(--whiteLight)', // Replace with your actual color variable for 'hover:bg-whiteLight'
    },
    '&:active': {
      backgroundColor: 'var(--blackLight)', // Replace with your actual color variable for 'active:bg-blackLight'
    },
    '&:disabled': {
      pointerEvents: 'none',
      opacity: '0.5',
    },
  },
  active: {
    backgroundColor: 'var(--whiteLight)', // Replace with your actual color variable for 'bg-whiteLight' and 'hover:bg-whiteMedium'
    color: 'var(--primary)', // Replace with your actual color variable for 'text-primary'
    '&:hover': {
      backgroundColor: 'var(--whiteMedium)', // Replace with your actual color variable for 'hover:bg-whiteMedium'
    },
  },
})
