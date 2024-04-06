import {Icon} from '../Icon'
import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext'
import {$getSelection, $isRangeSelection, DEPRECATED_$isGridSelection} from 'lexical' //RADIUMFRONT-5 FIX?
import {$setBlocksType} from '@lexical/selection'
import {$createCodeNode} from '@lexical/code'
import {useStyles} from './styles'
import React from 'react'

export const EditorCodeControl = () => {
  const [editor] = useLexicalComposerContext()
  const c = useStyles()

  const clickHandler = () => {
    editor.update(() => {
      let selection = $getSelection()
      if ($isRangeSelection(selection) || DEPRECATED_$isGridSelection(selection)) {
        if (selection?.isCollapsed()) {
          $setBlocksType(selection, () => $createCodeNode('javascript'))
        } else {
          const textContent = selection?.getTextContent()
          const codeNode = $createCodeNode('javascript')
          selection?.insertNodes([codeNode])
          selection = $getSelection()
          if ($isRangeSelection(selection)) {
            selection.insertRawText(textContent ?? '')
          }
        }
      }
    })
  }

  return (
    <button type='button' className={c.customButton} onClick={clickHandler}>
      <Icon type='code' />
    </button>
  )
}
