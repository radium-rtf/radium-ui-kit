import { cn } from './tools/cn';
import { Icon } from './Icon';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $getSelection, $isRangeSelection } from 'lexical';
import { $setBlocksType } from '@lexical/selection';
import { $createCodeNode } from '@lexical/code';
import React from 'react';

export const EditorCodeControl = () => {
  const [editor] = useLexicalComposerContext();

  const clickHandler = () => {
    editor.update(() => {
      let selection = $getSelection();
      if ($isRangeSelection(selection)) {
        if (selection.isCollapsed()) {
          $setBlocksType(selection, () => $createCodeNode('javascript'));
        } else {
          const textContent = selection.getTextContent();
          const codeNode = $createCodeNode('javascript');
          selection.insertNodes([codeNode]);
          selection = $getSelection();
          if ($isRangeSelection(selection)) {
            selection.insertRawText(textContent);
          }
        }
      }
    });
  };

  return (
    <button
      type='button'
      className={cn(
        'rounded-lg border border-transparent p-2 transition-colors hover:border-white/10 hover:bg-white/5'
      )}
      onClick={clickHandler}
    >
      <Icon type='code' />
    </button>
  );
};
