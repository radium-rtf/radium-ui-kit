import {createUseStyles} from 'react-jss'

export const useStyles = createUseStyles({
  root: {
    position: 'relative',
    display: 'flex',
    height: '1.125rem',
    width: '2rem', // 'w-8' в Tailwind означает 2rem, если базовый размер равен 0.25rem
    cursor: 'pointer',
    alignItems: 'center',
    borderRadius: '9999px', // 'rounded-full'
    border: '1px solid #D1D5DB', // 'border-grey-100'
    padding: '0.1875rem', // 'p-[0.1875rem]'
    fontSize: '0.875rem', // 'text-sm'
    outline: '2px solid white', // 'outline-white'
    transition: 'all',
    boxSizing: 'border-box',
    '&:hover': {
      backgroundColor: '#6B7280', // 'hover:bg-grey-500'
      padding: '0.5rem', // 'hover:p-0.5'
    },
  },

  // Стили для toggle-label, в соответствии с состояниями uikit-toggle-input-checkbox
  'uikit-toggle-input-checkbox': {
    '&:checked + $toggle-label': {
      borderColor: '#2563EB', // 'border-accent-primary-200'
    },
    '&:disabled + $toggle-label': {
      borderColor: '#D1D7DC', // 'border-grey-300'
      cursor: 'not-allowed',
    },
    '&:checked:disabled + $toggle-label': {
      borderColor: '#1D4ED8', // 'border-accent-primary-400'
    },
  },

  // Стиль для toggle-slider, который находится внутри toggle-label
  toggleSlider: {
    backgroundColor: '#F3F4F6', // 'bg-grey-100'
    aspectRatio: '1 / 1',
    height: '100%',
    borderRadius: '9999px', // 'rounded-full'
    transition: 'all',
    '&$uikit-toggle-input-checkbox:checked ~ &': {
      backgroundColor: '#2563EB', // 'bg-accent-primary-200'
      marginLeft: '0.875rem', // 'ml-[0.875rem]'
    },
    '&$uikit-toggle-input-checkbox:disabled ~ &': {
      backgroundColor: '#D1D7DC', // 'bg-grey-300'
    },
    '&$uikit-toggle-input-checkbox:checked:disabled ~ &': {
      backgroundColor: '#1D4ED8', // 'bg-accent-primary-400'
    },
  },
})
