import {Icon} from '../Icon'
import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext'
import {INSERT_ORDERED_LIST_COMMAND, INSERT_UNORDERED_LIST_COMMAND} from '@lexical/list'
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from '../Dropdown'
import {useStyles} from './styles'
import React from 'react'

export const EditorListControl = () => {
  const [editor] = useLexicalComposerContext()
  const c = useStyles()

  const clickHandler = (listType: 'ol' | 'ul') => {
    switch (listType) {
      case 'ol':
        editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined)
        break
      case 'ul':
        editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined)
        break
      default:
        break
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button type='button' className={c.root}>
          <Icon type='list' />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => clickHandler('ol')}>Нумерованный список</DropdownMenuItem>
        <DropdownMenuItem onClick={() => clickHandler('ul')}>Ненумерованный список</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
