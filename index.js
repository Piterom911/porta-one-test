let textArea = document.querySelector('#text');
let checkBtn = document.querySelector('.check-text');
let resultDrawing = document.querySelector('.result');
let error = document.querySelector('.error');
let clear = document.querySelector('.clear');
let wordsArrays = [];



// Main Function
function findUniqueLetter(arr) {
    let index = 0;

    if (arr.length === 1) return arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (i === index || arr[i] === -1) {
            continue;
        } else if (arr[index] === arr[i]) {
            index++;
            i = -1;
            continue;
        } else if (i === arr.length - 1) {
            return arr[index];
        } else if (index === arr.length) {
            return -1;
        }
    }
}



// UI Handlers
function onInputHandler() {
    textArea.value.length ? checkBtn.disabled = false : checkBtn.disabled = true;
}

function onCheckHandler() {
    wordsArrays = textArea.value.match(/[a-zа-яё]+/gi);
    if (wordsArrays === null) {
        error.hidden = false;
        error.textContent = `There's nothing to show because the text doesn't contain any words.`;
    } else {
        let allLetters = wordsArrays.map(word => findUniqueLetter(word));
        let theOne = findUniqueLetter(allLetters)
        resultDrawing.hidden = false;
        resultDrawing.textContent = theOne;
        error.hidden = true;
    }
}

function onClearHandler() {
  textArea.value = '';
  console.dir(textArea)
  textArea.focus();
  checkBtn.disabled = true;
}



// UI Event Listeners
textArea.addEventListener('input', onInputHandler);
checkBtn.addEventListener('click', onCheckHandler);
clear.addEventListener('click', onClearHandler);