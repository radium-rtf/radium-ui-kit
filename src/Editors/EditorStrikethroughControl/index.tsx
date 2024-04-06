import {useEffect, useState} from 'react'
import cn from 'classnames'
import {Icon} from '../../Icon'
import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext'
import {$getSelection, $isRangeSelection, FORMAT_TEXT_COMMAND} from 'lexical'
import {useStyles} from './styles'
import React from 'react'

export const EditorStrikethroughControl = () => {
  const [editor] = useLexicalComposerContext()
  const [isBold, setIsBold] = useState(false)
  const c = useStyles()

  const updateControl = () => {
    const selection = $getSelection()
    if ($isRangeSelection(selection)) {
      setIsBold(selection.hasFormat('strikethrough'))
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
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'strikethrough')
  }

  return (
    <button type='button' className={cn(c.button, isBold && c.bold)} onClick={clickHandler}>
      <Icon type='strikethrough' />
    </button>
  )
}
