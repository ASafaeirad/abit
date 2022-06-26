import { isNull } from '@fullstacksjs/toolbox';

function focus(el: HTMLElement, target: Text) {
  const isTargetFocused = document.activeElement === el;
  if (!isNull(target.nodeValue) && isTargetFocused) {
    const sel = window.getSelection();
    if (!isNull(sel)) {
      const range = document.createRange();
      range.setStart(target, target.nodeValue.length);
      range.collapse(true);
      sel.removeAllRanges();
      sel.addRange(range);
    }
    el.focus();
  }
}

export function prependCaret(el: HTMLElement) {
  const target = document.createTextNode('');
  el.prepend(target);
  focus(el, target);
}

export function appendCaret(el: HTMLElement) {
  const target = document.createTextNode('');
  el.appendChild(target);
  focus(el, target);
}
