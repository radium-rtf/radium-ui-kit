import {createUseStyles} from 'react-jss'

export const useTableStyles = createUseStyles({
  tableContainer: {
    position: 'relative',
    width: '100%',
    overflow: 'auto',
  },
  table: {
    width: '100%',
    captionSide: 'bottom',
    fontSize: '0.875rem',
  },
  tableHeader: {
    '& tr': {
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    },
  },
  tableBody: {
    '& tr:last-child': {
      borderBottom: 0,
    },
  },
  tableFooter: {
    borderTop: '1px solid',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontWeight: '500',
    '& tr:last-child': {
      borderBottom: 0,
    },
  },
  tableRow: {
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'background-color 0.3s ease',
    '& td:not(:last-child)': {
      borderRight: '1px solid rgba(255, 255, 255, 0.1)',
    },
    '& th:not(:last-child)': {
      borderRight: '1px solid rgba(255, 255, 255, 0.1)',
    },
    '&[data-state="selected"]': {
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
  },
  tableHead: {
    width: '8rem',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    padding: '1rem',
    textAlign: 'left',
    verticalAlign: 'middle',
    fontWeight: '500',
    '&[role="checkbox"]': {
      paddingRight: 0,
    },
  },
  tableCell: {
    padding: '1rem',
    verticalAlign: 'middle',
    '&[role="checkbox"]': {
      paddingRight: 0,
    },
  },
  tableCaption: {
    marginTop: '1rem',
    fontSize: '0.875rem',
    color: '#6c757d',
  },
})
