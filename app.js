const createButton = () => {
  const button = document.createElement('button');
  button.className = 'keyboard__button';
  button.innerText = null;
  return button;
};
const body = document.querySelector('.body');
const section = document.createElement('section');
const textArea = document.createElement('textarea');
const wrapper = document.createElement('div');

section.className = 'keyboard';
body.appendChild(section);

textArea.className = 'keyboard__text';
section.appendChild(textArea);

wrapper.className = 'wrapper';
section.appendChild(wrapper);

for (let index = 0; index < 65; index += 1) {
  const button = createButton();
  wrapper.appendChild(button);
  if (index === 0 || index === 13 || index === 14 || index === 28 || index === 29 || index === 41
    || index === 42 || (index >= 54 && index <= 58) || (index >= 60 && index <= 64)) {
    button.className = 'keyboard__button button-dark';
  }
  if (index === 13 || index === 29 || index === 42) {
    button.style = 'width: 133px;';
  } else if (index === 14) {
    button.style = 'width: 66px;';
  } else if (index === 41) {
    button.style = 'width: 124px;';
  } else if (index === 56 || index === 61) {
    button.style = 'width: 80px;';
  } else if (index === 59) {
    button.style = 'width: 422px;';
  }
}

class BaseData {
  constructor() {
    this.allCode = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'IntlBackslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Period', 'Comma', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];
  }

  addThis(name, value) {
    this[name] = value;
  }
}

const data = new BaseData();

data.addThis('ruMain', ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', '\\', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', ' ']);
data.addThis('enMain', ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '.', ',', '/', ' ']);
data.addThis('mainCode', ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'IntlBackslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Period', 'Comma', 'Slash', 'Space']);
data.addThis('mainCodeRu', ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'IntlBackslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'Space']);
data.addThis('enExtra', ['~', '!', '@', '#', '$', '%', ':', '?', '*', '(', ')', '_', '+', '/']);
data.addThis('extraCode', ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backslash']);
data.addThis('ruExtra', ['Ё', '!', '"', '№', ';', '%', '^', '&', '*', '(', ')', '_', '+', '|']);
data.addThis('option', ['Backspace', 'Tab', 'DEL', 'Caps Lock', 'ENTER', 'Shift', '^', 'Shift', 'Ctrl', 'Win', 'Alt', 'Alt', 'Ctrl', '<', 'v', '>']);
data.addThis('allButtons', Array.from(document.querySelectorAll('.keyboard__button')));
data.addThis('mainButtons', Array.from(document.querySelectorAll('.keyboard__button')).filter((v, i) => i < 13 || (i > 14 && i < 28) || (i > 29 && i < 41) || (i > 42 && i < 54) || i === 59));
data.addThis('extraButtons', Array.from(document.querySelectorAll('.keyboard__button')).filter((v, i) => i < 13 || i === 27));
data.addThis('optionButtons', Array.from(document.querySelectorAll('.keyboard__button')).filter((v, i) => i === 13 || i === 14 || i === 28 || i === 29 || i === 41 || i === 42 || (i >= 54 && i !== 59)));
data.addThis('backSpace', data.optionButtons[0]);
data.addThis('tab', data.optionButtons[1]);
data.addThis('del', data.optionButtons[2]);
data.addThis('capsLock', data.optionButtons[3]);
data.addThis('enter', data.optionButtons[4]);
data.addThis('shiftLeft', data.optionButtons[5]);
data.addThis('cursorTop', data.optionButtons[6]);
data.addThis('shiftRight', data.optionButtons[7]);
data.addThis('ctrlLeft', data.optionButtons[8]);
data.addThis('cursorLeft', data.optionButtons[13]);
data.addThis('cursorBottom', data.optionButtons[14]);
data.addThis('cursorRight', data.optionButtons[15]);

function insertText(textarea, text) {
  const txt = textarea;
  const start = txt.selectionStart;
  const end = txt.selectionEnd;
  const finText = txt.value.substring(0, start) + text + txt.value.substring(end);
  txt.value = finText;
  txt.focus();
  txt.selectionEnd = start === end ? end + text.length : end;
}

function delText(textarea) {
  const txt = textarea;
  const start = txt.selectionStart;
  const end = txt.selectionEnd;
  const finText = txt.value.substring(0, start) + txt.value.substring(end + 1);
  txt.value = finText;
  txt.focus();
  txt.selectionEnd = start === end ? start : end;
}

function backText(textarea) {
  const txt = textarea;
  const start = txt.selectionStart;
  const end = txt.selectionEnd;
  const finText = txt.value.substring(0, start - 1) + txt.value.substring(end);
  txt.value = finText;
  txt.focus();
  txt.selectionEnd = start !== 0 ? end - 1 : start;
}

function inputValue() {
  textArea.focus();
  const lang = localStorage.getItem('language') || 'en';
  textArea.placeholder = lang === 'en'
    ? 'English language. Press SHIFT + CTRL to change language. Keyboard was created by Windows.'
    : 'Русский язык. Нажмите SHIFT + CTRL для смены языка. Клавиатура создана в Windows.';
  data.mainButtons.forEach((v, i) => {
    const button = v;
    button.innerText = lang === 'en' ? data.enMain[i].toUpperCase() : data.ruMain[i].toUpperCase();
  });
  data.extraButtons.forEach((v, i) => {
    const button = v;
    const extraArea = document.createElement('span');
    extraArea.className = 'button__extra';
    button.appendChild(extraArea);
    extraArea.innerText = lang === 'en' ? data.enExtra[i].toUpperCase() : data.ruExtra[i].toUpperCase();
  });
  data.optionButtons.forEach((v, i) => {
    const button = v;
    button.innerText = data.option[i];
  });
  if (lang === 'ru') {
    document.querySelectorAll('.button__extra')[0].innerText = '';
  }
}

window.addEventListener('load', inputValue);

document.addEventListener('keydown', (v) => {
  const lang = localStorage.getItem('language') || 'en';
  textArea.focus();
  if (data.mainCode.indexOf(v.code) !== -1) {
    v.preventDefault();
    if (lang === 'en') {
      if (data.capsLock.classList.contains('button-active') && (data.shiftLeft.classList.contains('button-active') || data.shiftRight.classList.contains('button-active'))) {
        insertText(textArea, data.enMain[data.mainCode.indexOf(v.code)]);
      } else if (data.extraCode.indexOf(v.code) !== -1 && ((data.shiftLeft.classList.contains('button-active') || data.shiftRight.classList.contains('button-active')))) {
        insertText(textArea, data.enExtra[data.extraCode.indexOf(v.code)]);
      } else if ((data.capsLock.classList.contains('button-active') || data.shiftLeft.classList.contains('button-active') || data.shiftRight.classList.contains('button-active')) && data.extraCode.indexOf(v.code) === -1) {
        insertText(textArea, data.enMain[data.mainCode.indexOf(v.code)].toUpperCase());
      } else (insertText(textArea, data.enMain[data.mainCode.indexOf(v.code)]));
    } else if (lang === 'ru') {
      if (data.capsLock.classList.contains('button-active') && (data.shiftLeft.classList.contains('button-active') || data.shiftRight.classList.contains('button-active'))) {
        insertText(textArea, data.ruMain[data.mainCodeRu.indexOf(v.code)]);
      } else if (data.extraCode.indexOf(v.code) !== -1 && ((data.shiftLeft.classList.contains('button-active') || data.shiftRight.classList.contains('button-active')))) {
        insertText(textArea, data.ruExtra[data.extraCode.indexOf(v.code)]);
      } else if ((data.capsLock.classList.contains('button-active') || data.shiftLeft.classList.contains('button-active') || data.shiftRight.classList.contains('button-active')) && data.extraCode.indexOf(v.code) === -1) {
        insertText(textArea, data.ruMain[data.mainCodeRu.indexOf(v.code)].toUpperCase());
      } else (insertText(textArea, data.ruMain[data.mainCodeRu.indexOf(v.code)]));
    }
  } else if (v.code === 'Tab') {
    v.preventDefault();
    insertText(textArea, '    ');
  } else if (v.code === 'AltLeft' || v.code === 'AltRight') {
    v.preventDefault();
  }
  data.allCode.forEach((code, i) => {
    if (code === v.code && code !== 'CapsLock') {
      if (v.code === 'Period' && lang === 'ru') {
        data.allButtons[i + 1].classList.add('button-active');
      } else if (v.code === 'Comma' && lang === 'ru') {
        data.allButtons[i - 1].classList.add('button-active');
      } else {
        data.allButtons[i].classList.add('button-active');
      }
    }
    if (code === v.code && code === 'CapsLock') {
      data.allButtons[i].classList.toggle('button-active');
    }
    if (data.allButtons[42].classList.contains('button-active') && v.code === 'ControlLeft') {
      if (localStorage.getItem('language') === 'ru') {
        localStorage.setItem('language', 'en');
        inputValue();
      } else {
        localStorage.setItem('language', 'ru');
        inputValue();
      }
    }
  });
});

document.addEventListener('keyup', (v) => {
  const lang = localStorage.getItem('language') || 'en';
  data.allCode.forEach((code, i) => {
    if (code === v.code && code !== 'CapsLock') {
      if (v.code === 'Period' && lang === 'ru') {
        data.allButtons[i + 1].classList.remove('button-active');
      } else if (v.code === 'Comma' && lang === 'ru') {
        data.allButtons[i - 1].classList.remove('button-active');
      } else {
        data.allButtons[i].classList.remove('button-active');
      }
    }
  });
});

data.optionButtons.forEach((v) => v.addEventListener('click', (key) => {
  if (key.target === data.del) {
    delText(textArea);
  }
  if (key.target === data.backSpace) {
    backText(textArea);
  }
  if (key.target === data.tab) {
    insertText(textArea, '    ');
  }
  if (key.target === data.cursorLeft) {
    insertText(textArea, String.fromCharCode(8592));
  }
  if (key.target === data.cursorTop) {
    insertText(textArea, String.fromCharCode(8593));
  }
  if (key.target === data.cursorRight) {
    insertText(textArea, String.fromCharCode(8594));
  }
  if (key.target === data.cursorBottom) {
    insertText(textArea, String.fromCharCode(8595));
  }
  if (key.target === data.enter) {
    insertText(textArea, '\n');
  }
  if (key.target === data.capsLock
    || key.target === data.shiftLeft || key.target === data.shiftRight) {
    key.target.classList.toggle('button-active');
  }
  if (key.target === data.ctrlLeft && data.shiftLeft.classList.contains('button-active')) {
    if (localStorage.getItem('language') === 'ru') {
      localStorage.setItem('language', 'en');
      inputValue();
      data.shiftLeft.classList.remove('button-active');
    } else {
      localStorage.setItem('language', 'ru');
      inputValue();
      data.shiftLeft.classList.remove('button-active');
    }
  }
}));

data.mainButtons.forEach((v, i) => v.addEventListener('click', () => {
  const lang = localStorage.getItem('language') || 'en';

  if (lang === 'en') {
    if (data.capsLock.classList.contains('button-active') && (data.shiftLeft.classList.contains('button-active') || data.shiftRight.classList.contains('button-active'))) {
      if (data.extraButtons.indexOf(v) === -1) {
        insertText(textArea, data.enMain[i]);
      }
    } else if (data.capsLock.classList.contains('button-active')) {
      insertText(textArea, data.enMain[i].toLocaleUpperCase());
    } else if (data.shiftLeft.classList.contains('button-active') || data.shiftRight.classList.contains('button-active')) {
      if (data.extraButtons.indexOf(v) === -1) {
        insertText(textArea, data.enMain[i].toLocaleUpperCase());
      }
    } else (insertText(textArea, data.enMain[i]));
  } else if (lang === 'ru') {
    if (data.capsLock.classList.contains('button-active') && (data.shiftLeft.classList.contains('button-active') || data.shiftRight.classList.contains('button-active'))) {
      if (data.extraButtons.indexOf(v) === -1) {
        insertText(textArea, data.ruMain[i]);
      }
    } else if (data.capsLock.classList.contains('button-active')) {
      insertText(textArea, data.ruMain[i].toLocaleUpperCase());
    } else if (data.shiftLeft.classList.contains('button-active') || data.shiftRight.classList.contains('button-active')) {
      if (data.extraButtons.indexOf(v) === -1) {
        insertText(textArea, data.ruMain[i].toLocaleUpperCase());
      }
    } else (insertText(textArea, data.ruMain[i]));
  }
}));

data.extraButtons.forEach((v, i) => v.addEventListener('click', () => {
  const lang = localStorage.getItem('language') || 'en';

  if (lang === 'en') {
    if (data.shiftLeft.classList.contains('button-active') || data.shiftRight.classList.contains('button-active')) {
      insertText(textArea, data.enExtra[i]);
    }
  } else if (lang === 'ru') {
    if (data.shiftLeft.classList.contains('button-active') || data.shiftRight.classList.contains('button-active')) {
      insertText(textArea, data.ruExtra[i]);
    }
  }
}));
