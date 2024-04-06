import {createUseStyles} from 'react-jss'

export const useCheckboxStyles = createUseStyles({
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '1.125rem',
    width: '1.125rem',
    flexShrink: 0,
    borderRadius: '0.25rem',
    border: '1px solid rgba(255, 255, 255, 0.4)',
    transition: 'color 0.15s ease-in-out, border-color 0.15s ease-in-out, background-color 0.15s ease-in-out',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    '&:focus-visible': {
      outline: 'none',
      ringWidth: '2px',
      ringColor: 'var(--ring)',
      ringOffset: '2',
      ringOffsetColor: 'var(--background)',
    },
    '&:disabled': {
      cursor: 'not-allowed',
      opacity: '0.5',
    },
    '&[data-state="checked"]': {
      borderColor: 'rgba(0, 0, 0, 0.1)',
      backgroundColor: 'var(--primary)',
      color: 'var(--primary-foreground)',
    },
  },
  indicator: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
    transition: 'opacity 0.15s ease-in-out',
    '& $root[data-state="checked"] &': {
      opacity: 1,
    },
  },
  checkIcon: {
    height: '0.875rem',
    width: '0.875rem',
    color: 'var(--primary-foreground)',
  },
})
