import * as React from 'react'
import cn from 'classnames'
import {useTableStyles} from './styles'

const Table = React.forwardRef<HTMLTableElement, React.HTMLAttributes<HTMLTableElement>>(
  ({className, ...props}, ref) => {
    const c = useTableStyles()
    return (
      <div className={c.tableContainer}>
        <table ref={ref} className={cn(c.table, className)} {...props} />
      </div>
    )
  }
)
Table.displayName = 'Table'

const TableHeader = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({className, ...props}, ref) => {
    const c = useTableStyles()
    return <thead ref={ref} className={cn(c.tableHeader, className)} {...props} />
  }
)
TableHeader.displayName = 'TableHeader'

const TableBody = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({className, ...props}, ref) => {
    const c = useTableStyles()
    return <tbody ref={ref} className={cn(c.tableBody, className)} {...props} />
  }
)
TableBody.displayName = 'TableBody'

const TableFooter = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({className, ...props}, ref) => {
    const c = useTableStyles()
    return <tfoot ref={ref} className={cn(c.tableFooter, className)} {...props} />
  }
)
TableFooter.displayName = 'TableFooter'

const TableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(
  ({className, ...props}, ref) => {
    const c = useTableStyles()
    return <tr ref={ref} className={cn(c.tableRow, className)} {...props} />
  }
)
TableRow.displayName = 'TableRow'

const TableHead = React.forwardRef<HTMLTableCellElement, React.ThHTMLAttributes<HTMLTableCellElement>>(
  ({className, ...props}, ref) => {
    const c = useTableStyles()
    return <th ref={ref} className={cn(c.tableHead, className)} {...props} />
  }
)
TableHead.displayName = 'TableHead'

const TableCell = React.forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement>>(
  ({className, ...props}, ref) => {
    const c = useTableStyles()
    return <td ref={ref} className={cn(c.tableCell, className)} {...props} />
  }
)
TableCell.displayName = 'TableCell'

const TableCaption = React.forwardRef<HTMLTableCaptionElement, React.HTMLAttributes<HTMLTableCaptionElement>>(
  ({className, ...props}, ref) => {
    const c = useTableStyles()
    return <caption ref={ref} className={cn(c.tableCaption, className)} {...props} />
  }
)
TableCaption.displayName = 'TableCaption'

export {Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption}
