import { useState } from 'react';

import style from './App.module.css';

const App = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className={style.app}>
      <div
        role="button"
        tabIndex={0}
        onKeyDown={() => setSelected(0)}
        className={style.block}
        onClick={() => setSelected(0)}
        id="canvas"
        contentEditable={selected === 0}
      />
      <div
        role="button"
        tabIndex={0}
        onKeyDown={() => setSelected(1)}
        className={style.block}
        onClick={() => setSelected(1)}
        id="canvas"
        contentEditable={selected === 1}
      />
    </div>
  );
};

export default App;
