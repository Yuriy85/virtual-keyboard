const createButton = (value) => {
  const button = document.createElement('button');
  button.className = 'keyboard__button';
  button.innerText = value || null;
  return button;
};
const lang = localStorage.getItem('language') || 'en';
const body = document.querySelector('.body');
const section = document.createElement('section');
const textArea = document.createElement('textarea');
const wrapper = document.createElement('div');

section.className = 'keyboard';
body.appendChild(section);

textArea.className = 'keyboard__text';
textArea.placeholder = lang === 'en'
  ? 'English language. Press SHIFT + CTRL to change language. Keyboard was created by Windows.'
  : 'Русский язык. Нажмите SHIFT + CTRL для смены языка. Клавиатура создана в Windows.';
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
    this.ruMain = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', '\\', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/'];
    this.enMain = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '.', ',', '/'];
    this.enExtra = ['~', '!', '@', '#', '$', '%', ':', '?', '*', '(', ')', '_', '+', '/'];
    this.ruExtra = ['', '!', '"', '№', ';', '%', '^', '&', '*', '(', ')', '_', '+', '|'];
    this.option = ['Backspace', 'Tab', 'DEL', 'Caps Lock', 'ENTER', 'Shift', '^', 'Shift', 'Ctrl', 'Win', 'Alt', '', 'Alt', 'Ctrl', '<', 'v', '>'];
  }
}

const data = new BaseData();

const mainButton = Array.from(document.querySelectorAll('.keyboard__button')).filter((v, i) => i < 13 || (i > 14 && i < 28) || (i > 29 && i < 41) || (i > 42 && i < 54));
const extraButton = Array.from(document.querySelectorAll('.keyboard__button')).filter((v, i) => i < 13 || i === 27);
const optionButton = Array.from(document.querySelectorAll('.keyboard__button')).filter((v, i) => i === 13 || i === 14 || i === 28 || i === 29 || i === 41 || i === 42 || i >= 54);

function inputValue() {
  mainButton.forEach((v, i) => {
    const button = v;
    button.innerText = lang === 'en' ? data.enMain[i].toUpperCase() : data.ruMain[i].toUpperCase();
  });
  extraButton.forEach((v, i) => {
    const button = v;
    const extraArea = document.createElement('span');
    extraArea.className = 'button__extra';
    button.appendChild(extraArea);
    extraArea.innerText = lang === 'en' ? data.enExtra[i].toUpperCase() : data.ruExtra[i].toUpperCase();
  });
  optionButton.forEach((v, i) => {
    const button = v;
    button.innerText = data.option[i];
  });
}
inputValue();

console.log(optionButton);
