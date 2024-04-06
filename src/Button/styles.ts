import {createUseStyles} from 'react-jss'

export const useStyles = createUseStyles({
  buttonBase: {
    fontFamily: 'NTSomic, sans-serif',
    flexShrink: 0,
    fontSize: '16px',
    lineHeight: '1.25',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    whiteSpace: 'nowrap',
    borderRadius: '0.5rem',
    border: '1px solid',
    borderColor: '#a0aec0',
    fontWeight: 'normal',
    transition: 'colors 0.2s ease-in-out',
    cursor: 'pointer',
    '&:focus-visible': {
      outline: 'none',
      boxShadow: '0 0 0 2px rgba(66, 153, 225, 0.6)',
    },
    '&:disabled': {
      pointerEvents: 'none',
      opacity: 0.5,
    },
  },
  variantDefault: {
    backgroundColor: '#4299e1',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#63b3ed',
    },
    '&:active': {
      backgroundColor: '#3182ce',
    },
  },
  variantDestructive: {
    backgroundColor: '#e53e3e',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#f56565',
    },
    '&:active': {
      backgroundColor: '#c53030',
    },
  },
  variantOutline: {
    backgroundColor: '#ffffff',
    borderColor: '#4a5568',
    '&:hover': {
      backgroundColor: '#edf2f7',
    },
    '&:active': {
      backgroundColor: '#e2e8f0',
    },
  },
  sizeDefault: {
    height: '36px',
    padding: '8px 16px',
  },
  sizeWide: {
    width: '256px',
    height: '36px',
    padding: '8px 16px',
    justifyContent: 'space-between',
  },
})
