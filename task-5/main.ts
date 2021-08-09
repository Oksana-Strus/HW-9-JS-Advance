//Завдання 5
// Необхідно відтворити функціонал як на відео Cenzor, а саме:
// При кліку на ADD добавляти заборонене слово, яке відображатиметься в списку “Bad words”
// Якщо поле для добавлення слова не заповнене виводити відповідне повідомлення
// При кліку на Cenzor перевіряється чи є в textarea заборонене слово, якщо так його заміняє на *, 
// причому на ту кількість яка довжина слова
// Якщо textarea порожня виводити повыдолення про заповнення поля
const INPUT_FIELD = document.getElementById('#inputField');
const ADD_BTN = document.getElementById('#addBtn');
const RESET_BTN = document.getElementById('#resetBtn');
let arr = [];



ADD_BTN.addEventListener('click', function(){
   let a = INPUT_FIELD.innerHTML;
   console.log(a);
})


