import { createSlice } from '@reduxjs/toolkit';

enum Mode {
  Insert = 'insert',
  Normal = 'normal',
}

interface EditorState {
  count: number;
  selected: number;
  mode: Mode;
}

const initialState: EditorState = {
  selected: 0,
  count: 0,
  mode: Mode.Normal,
};

const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    toNormalMode: state => {
      state.mode = Mode.Normal;
    },
    toInsertMode: state => {
      state.mode = Mode.Insert;
    },
    selectNextLine: state => {
      state.selected = Math.min(state.selected + 1, 2);
    },
    selectPrevLine: state => {
      state.selected = Math.max(state.selected - 1, 0);
    },
    setBlock: (state, action: { payload: number }) => {
      state.selected = action.payload;
    },
  },
});

export default editorSlice.reducer;

export const {
  toNormalMode,
  setBlock,
  toInsertMode,
  selectNextLine,
  selectPrevLine,
} = editorSlice.actions;
