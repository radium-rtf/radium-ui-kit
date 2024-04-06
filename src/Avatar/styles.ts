import {createUseStyles} from 'react-jss'

export const useAvatarStyles = createUseStyles({
  root: {
    position: 'relative',
    display: 'flex',
    height: '2.5rem',
    width: '2.5rem',
    flexShrink: 0,
    overflow: 'hidden',
    borderRadius: '9999px',
  },
  image: {
    aspectRatio: '1 / 1',
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },
  fallback: {
    display: 'flex',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '9999px',
    backgroundColor: 'rgb(210, 40, 96)', // RADIUMFRONT-5 fix?
  },
})
