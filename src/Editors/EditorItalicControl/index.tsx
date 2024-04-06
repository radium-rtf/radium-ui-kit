import React, {useEffect, useState} from 'react'
import cn from 'classnames'
import {Icon} from '../../Icon'
import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext'
import {$getSelection, $isRangeSelection, FORMAT_TEXT_COMMAND} from 'lexical'
import {useStyles} from './styles'

export const EditorItalicControl = () => {
  const [editor] = useLexicalComposerContext()
  const [isBold, setIsBold] = useState(false)
  const c = useStyles()

  const updateControl = () => {
    const selection = $getSelection()
    if ($isRangeSelection(selection)) {
      setIsBold(selection.hasFormat('italic'))
    }
  }

  useEffect(
    () =>
      editor.registerUpdateListener(({editorState}) => {
        editorState.read(() => {
          updateControl()
        })
      }),
    [editor]
  )

  const clickHandler = () => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic')
  }

  return (
    <button type='button' className={cn(c.button, isBold && c.bold)} onClick={clickHandler}>
      <Icon type='italic' />
    </button>
  )
}
