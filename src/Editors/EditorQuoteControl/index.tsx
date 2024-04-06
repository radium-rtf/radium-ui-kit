import {Icon} from '../../Icon'
import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext'
import {$getSelection, $isRangeSelection} from 'lexical'
import {$setBlocksType} from '@lexical/selection'
import {$createQuoteNode} from '@lexical/rich-text'
import {useStyles} from './styles'
import React from 'react'

export const EditorQuoteControl = () => {
  const [editor] = useLexicalComposerContext()
  const c = useStyles()

  const clickHandler = () => {
    editor.update(() => {
      const selection = $getSelection()
      if ($isRangeSelection(selection)) {
        $setBlocksType(selection, () => $createQuoteNode())
      }
    })
  }

  return (
    <button type='button' className={c.root} onClick={clickHandler}>
      <Icon type='quote' />
    </button>
  )
}
