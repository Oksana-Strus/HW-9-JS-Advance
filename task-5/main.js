//Завдання 5
// Необхідно відтворити функціонал як на відео Cenzor, а саме:
// При кліку на ADD добавляти заборонене слово, яке відображатиметься в списку “Bad words”
// Якщо поле для добавлення слова не заповнене виводити відповідне повідомлення
// При кліку на Cenzor перевіряється чи є в textarea заборонене слово, якщо так його заміняє на *, 
// причому на ту кількість яка довжина слова
// Якщо textarea порожня виводити повыдолення про заповнення поля
const INPUT_FIELD = document.getElementById('inputField');
const TEXT_AREA = document.getElementById('text-area');
const ADD_BTN = document.getElementById('addBtn');
const RESET_BTN = document.getElementById('resetBtn');
const CENZOR_BTN = document.getElementById('cenzorBtn');
const TEXT_MSG_BAD_WORDS = document.getElementById('text-msg-bad-words');
const BAD_WORDS_BLACK = document.getElementById('bad-words-black');
const BAD_WORDS_RED = document.getElementById('bad-words-red');


let arr = [];

function checkInputField() {
    let newWord = INPUT_FIELD.value;

    function theSameWord(word) {
        return word === newWord;
    }

    if (newWord === '') {
        INPUT_FIELD.placeholder = 'Please write the word!';
        INPUT_FIELD.style.border = '2px solid red';
    } else if (!arr.some(theSameWord)) {
        arr.push(newWord);
        INPUT_FIELD.value = '';
        INPUT_FIELD.style.border = '';
        INPUT_FIELD.placeholder = 'word here...'
        displayWords();
    }
}

function displayWords() {
    BAD_WORDS_RED.innerHTML = `${arr.join(', ')}`;
}

ADD_BTN.addEventListener('click', function () {
    checkInputField();
});

RESET_BTN.addEventListener('click', function () {
    BAD_WORDS_RED.innerHTML = '';
    arr = [];
    TEXT_AREA.value = '';
    TEXT_AREA.style.border = ''

})

CENZOR_BTN.addEventListener('click', function () {
    if (TEXT_AREA.value === '') {
        TEXT_AREA.style.border = '2px solid red';
        TEXT_AREA.placeholder = 'Please, write the text!'
    } else {
        let newSentence = TEXT_AREA.value.split(' ');
        newSentence.forEach((element, index, array) => {
            arr.forEach(bad => {
                if (element === bad) {
                    array[index] = '*'.repeat(element.length)
                }
            })
        });
        TEXT_AREA.value = newSentence.join(' ');
        TEXT_AREA.style.border = '2px solid green';
        TEXT_AREA.placeholder = 'text here...'
    }

})