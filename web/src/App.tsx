import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import style from './App.module.css';
import { Block } from './components/Block';
import { useAppSelector } from './store';
import { selectNextLine, selectPrevLine } from './store/editor';

const App = () => {
  const selected = useAppSelector(s => s.selected);
  const mode = useAppSelector(s => s.mode);
  const dispatch = useDispatch();

  useEffect(() => {
    const fn = (e: KeyboardEvent): void => {
      if (mode === 'normal' && e.key === 'j') dispatch(selectNextLine());
      if (mode === 'normal' && e.key === 'k') dispatch(selectPrevLine());
    };

    document.addEventListener('keyup', fn);
    return () => document.removeEventListener('keyup', fn);
  }, [dispatch, mode, selected]);

  return (
    <div className={style.app}>
      {[0, 1, 2].map(i => (
        <Block index={i} key={i} />
      ))}
    </div>
  );
};

export default App;
