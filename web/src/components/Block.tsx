import cx from 'classnames';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '../store';
import { setBlock, toInsertMode, toNormalMode } from '../store/editor';
import { appendCaret, prependCaret } from '../utils/caret';
import { useEventCallback } from '../utils/useEventCallback';
import style from './Block.module.css';

interface Props {
  index: number;
}

export const Block = ({ index }: Props) => {
  const selected = useAppSelector(s => s.selected);
  const mode = useAppSelector(s => s.mode);
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);
  const isSelected = selected === index;

  useEffect(() => {
    if (isSelected) ref.current?.focus();
  }, [selected, isSelected]);

  const handleKeyboardShortcuts = useEventCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      e.preventDefault();

      if (e.key === 'Escape') dispatch(toNormalMode());
      if (mode === 'normal' && e.key === 'a') {
        dispatch(toInsertMode());
        appendCaret(ref.current!);
      }

      if (mode === 'normal' && e.key === 'i') {
        dispatch(toInsertMode());
        prependCaret(ref.current!);
      }
    },
  );

  return (
    <div
      role="button"
      tabIndex={0}
      ref={ref}
      onKeyUp={handleKeyboardShortcuts}
      className={cx(style.block, {
        [style['edit-mode']!]: isSelected && mode === 'insert',
        [style['selected']!]: isSelected && mode !== 'insert',
      })}
      onClick={() => setBlock(index)}
      contentEditable={mode === 'insert' && isSelected}
      dangerouslySetInnerHTML={{ __html: ':' }}
    />
  );
};
