import React, { useEffect, useState } from 'react';
import { cn } from './tools/cn';
import { Icon } from './Icon';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $getSelection, $isRangeSelection, FORMAT_TEXT_COMMAND } from 'lexical';

export const EditorBoldControl = () => {
  const [editor] = useLexicalComposerContext();
  const [isBold, setIsBold] = useState(false);

  const updateControl = () => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      setIsBold(selection.hasFormat('bold'));
    }
  };

  useEffect(
    () =>
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          updateControl();
        });
      }),
    [editor]
  );

  const clickHandler = () => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold');
  };

  return (
    <button
      type='button'
      className={cn(
        'rounded-lg border border-transparent p-2 transition-colors hover:border-white/10 hover:bg-white/5',
        isBold && 'border-white/10 bg-white/5'
      )}
      onClick={clickHandler}
    >
      <Icon type='bold' />
    </button>
  );
};
