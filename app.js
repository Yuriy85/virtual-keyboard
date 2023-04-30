const createButton = (value) => {
  const button = document.createElement('button');
  button.className = 'keyboard__button';
  button.innerText = value || null;
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
    this.ruMain = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', '\\', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', ' '];
    this.enMain = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '.', ',', '/', ' '];
    this.mainCode = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'IntlBackslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Period', 'Comma', 'Slash', 'Space'];
    this.mainCodeRu = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'IntlBackslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'Space'];
    this.enExtra = ['~', '!', '@', '#', '$', '%', ':', '?', '*', '(', ')', '_', '+', '/'];
    this.extraCode = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backslash'];
    this.ruExtra = ['Ё', '!', '"', '№', ';', '%', '^', '&', '*', '(', ')', '_', '+', '|'];
    this.option = ['Backspace', 'Tab', 'DEL', 'Caps Lock', 'ENTER', 'Shift', '^', 'Shift', 'Ctrl', 'Win', 'Alt', 'Alt', 'Ctrl', '<', 'v', '>'];
  }
}

const data = new BaseData();

const allButtons = Array.from(document.querySelectorAll('.keyboard__button'));
const mainButtons = Array.from(document.querySelectorAll('.keyboard__button')).filter((v, i) => i < 13 || (i > 14 && i < 28) || (i > 29 && i < 41) || (i > 42 && i < 54) || i === 59);
const extraButtons = Array.from(document.querySelectorAll('.keyboard__button')).filter((v, i) => i < 13 || i === 27);
const optionButtons = Array.from(document.querySelectorAll('.keyboard__button')).filter((v, i) => i === 13 || i === 14 || i === 28 || i === 29 || i === 41 || i === 42 || (i >= 54 && i !== 59));

const backSpace = optionButtons[0];
const tab = optionButtons[1];
const del = optionButtons[2];
const capsLock = optionButtons[3];
const enter = optionButtons[4];
const shiftLeft = optionButtons[5];
const cursorTop = optionButtons[6];
const shiftRight = optionButtons[7];
const ctrlLeft = optionButtons[8];
const cursorLeft = optionButtons[13];
const cursorBottom = optionButtons[14];
const cursorRight = optionButtons[15];

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
  mainButtons.forEach((v, i) => {
    const button = v;
    button.innerText = lang === 'en' ? data.enMain[i].toUpperCase() : data.ruMain[i].toUpperCase();
  });
  extraButtons.forEach((v, i) => {
    const button = v;
    const extraArea = document.createElement('span');
    extraArea.className = 'button__extra';
    button.appendChild(extraArea);
    extraArea.innerText = lang === 'en' ? data.enExtra[i].toUpperCase() : data.ruExtra[i].toUpperCase();
  });
  optionButtons.forEach((v, i) => {
    const button = v;
    button.innerText = data.option[i];
  });
  if (lang === 'ru') {
    document.querySelectorAll('.button__extra')[0].innerText = '';
  }
}
inputValue();

document.addEventListener('keydown', (v) => {
  const lang = localStorage.getItem('language') || 'en';
  textArea.focus();
  if (data.mainCode.indexOf(v.code) !== -1) {
    v.preventDefault();
    if (lang === 'en') {
      if (capsLock.classList.contains('button-active') && (shiftLeft.classList.contains('button-active') || shiftRight.classList.contains('button-active'))) {
        insertText(textArea, data.enMain[data.mainCode.indexOf(v.code)]);
      } else if (data.extraCode.indexOf(v.code) !== -1 && ((shiftLeft.classList.contains('button-active') || shiftRight.classList.contains('button-active')))) {
        insertText(textArea, data.enExtra[data.extraCode.indexOf(v.code)]);
      } else if ((capsLock.classList.contains('button-active') || shiftLeft.classList.contains('button-active') || shiftRight.classList.contains('button-active')) && data.extraCode.indexOf(v.code) === -1) {
        insertText(textArea, data.enMain[data.mainCode.indexOf(v.code)].toUpperCase());
      } else (insertText(textArea, data.enMain[data.mainCode.indexOf(v.code)]));
    } else if (lang === 'ru') {
      if (capsLock.classList.contains('button-active') && (shiftLeft.classList.contains('button-active') || shiftRight.classList.contains('button-active'))) {
        insertText(textArea, data.ruMain[data.mainCodeRu.indexOf(v.code)]);
      } else if (data.extraCode.indexOf(v.code) !== -1 && ((shiftLeft.classList.contains('button-active') || shiftRight.classList.contains('button-active')))) {
        insertText(textArea, data.enExtra[data.extraCode.indexOf(v.code)]);
      } else if ((capsLock.classList.contains('button-active') || shiftLeft.classList.contains('button-active') || shiftRight.classList.contains('button-active')) && data.extraCode.indexOf(v.code) === -1) {
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
        allButtons[i + 1].classList.add('button-active');
      } else if (v.code === 'Comma' && lang === 'ru') {
        allButtons[i - 1].classList.add('button-active');
      } else {
        allButtons[i].classList.add('button-active');
      }
    }
    if (code === v.code && code === 'CapsLock') {
      allButtons[i].classList.toggle('button-active');
    }
    if (allButtons[42].classList.contains('button-active') && v.code === 'ControlLeft') {
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
        allButtons[i + 1].classList.remove('button-active');
      } else if (v.code === 'Comma' && lang === 'ru') {
        allButtons[i - 1].classList.remove('button-active');
      } else {
        allButtons[i].classList.remove('button-active');
      }
    }
  });
});

optionButtons.forEach((v) => v.addEventListener('click', (key) => {
  if (key.target === del) {
    delText(textArea);
  }
  if (key.target === backSpace) {
    backText(textArea);
  }
  if (key.target === tab) {
    insertText(textArea, '    ');
  }
  if (key.target === cursorLeft) {
    insertText(textArea, String.fromCharCode(8592));
  }
  if (key.target === cursorTop) {
    insertText(textArea, String.fromCharCode(8593));
  }
  if (key.target === cursorRight) {
    insertText(textArea, String.fromCharCode(8594));
  }
  if (key.target === cursorBottom) {
    insertText(textArea, String.fromCharCode(8595));
  }
  if (key.target === enter) {
    insertText(textArea, '\n');
  }
  if (key.target === capsLock || key.target === shiftLeft || key.target === shiftRight) {
    key.target.classList.toggle('button-active');
  }
  if (key.target === ctrlLeft && shiftLeft.classList.contains('button-active')) {
    if (localStorage.getItem('language') === 'ru') {
      localStorage.setItem('language', 'en');
      inputValue();
      shiftLeft.classList.remove('button-active');
    } else {
      localStorage.setItem('language', 'ru');
      inputValue();
      shiftLeft.classList.remove('button-active');
    }
  }
}));

mainButtons.forEach((v, i) => v.addEventListener('click', () => {
  const lang = localStorage.getItem('language') || 'en';

  if (lang === 'en') {
    if (capsLock.classList.contains('button-active') && (shiftLeft.classList.contains('button-active') || shiftRight.classList.contains('button-active'))) {
      insertText(textArea, data.enMain[i]);
    } else if (data.extraCode.indexOf(v.code) !== -1 && ((shiftLeft.classList.contains('button-active') || shiftRight.classList.contains('button-active')))) {
      insertText(textArea, data.enMain[i]);
    } else if ((capsLock.classList.contains('button-active') || shiftLeft.classList.contains('button-active') || shiftRight.classList.contains('button-active'))) {
      insertText(textArea, data.enMain[i].toLocaleUpperCase());
    } else (insertText(textArea, data.enMain[i]));
  } else if (lang === 'ru') {
    if (capsLock.classList.contains('button-active') && (shiftLeft.classList.contains('button-active') || shiftRight.classList.contains('button-active'))) {
      insertText(textArea, data.ruMain[i]);
    } else if (data.extraCode.indexOf(v.code) !== -1 && ((shiftLeft.classList.contains('button-active') || shiftRight.classList.contains('button-active')))) {
      insertText(textArea, data.ruMain[i]);
    } else if ((capsLock.classList.contains('button-active') || shiftLeft.classList.contains('button-active') || shiftRight.classList.contains('button-active'))) {
      insertText(textArea, data.ruMain[i].toLocaleUpperCase());
    } else (insertText(textArea, data.ruMain[i]));
  }
}));
