import {createUseStyles} from 'react-jss'

export const useStyles = createUseStyles({
  card: {
    borderRadius: '1.5rem', // rounded-2xl
    backgroundColor: 'var(--color-card)', // bg-card
    color: 'var(--color-card-foreground)', // text-card-foreground
  },
  cardHeader: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.375rem', // space-y-1.5 ~ 6px если базовый размер шрифта 16px
    padding: '1.5rem', // p-6
    paddingBottom: '1rem', // pb-4
  },
  cardTitle: {
    fontFamily: 'NTSomic, sans-serif', // font-NTSomic
    fontSize: '1.125rem', // text-lg ~ 18px если базовый размер шрифта 16px
    fontWeight: '500', // font-medium
    lineHeight: 'normal', // leading-normal
    color: 'var(--color-primary)', // text-primary
  },
  cardDescription: {
    fontSize: '1rem', // text-base если базовый размер шрифта 16px
    lineHeight: 'normal', // leading-normal
  },
  cardContent: {
    padding: '1.5rem 1.5rem 1rem', // px-6, pb-4, pt-0
  },
  cardFooter: {
    display: 'flex',
    alignItems: 'center',
    padding: '1.5rem', // p-6
    paddingTop: '0', // pt-0
  },
})
