import React, {useCallback} from 'react'
import {Icon} from '../Icon'
import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext'
import {$createTextNode, $getRoot} from 'lexical'
import {$isCodeNode, $createCodeNode} from '@lexical/code'
import {$convertFromMarkdownString, $convertToMarkdownString} from '@lexical/markdown'
import {TRANSFORMERS} from './TRANSFORMERS'
import {useStyles} from './styles'

export const EditorMarkdownToggle = () => {
  const [editor] = useLexicalComposerContext()
  const c = useStyles()

  const clickHandler = useCallback(() => {
    editor.update(() => {
      const root = $getRoot()
      const firstChild = root.getFirstChild()
      if ($isCodeNode(firstChild) && firstChild.getLanguage() === 'markdown') {
        $convertFromMarkdownString(firstChild.getTextContent(), TRANSFORMERS)
      } else {
        const markdown = $convertToMarkdownString(TRANSFORMERS)
        root.clear().append($createCodeNode('markdown').append($createTextNode(markdown)))
      }
      root.selectEnd()
    })
  }, [editor])

  return (
    <button type='button' className={c.root} onClick={clickHandler}>
      <Icon type='visible' />
    </button>
  )
}
