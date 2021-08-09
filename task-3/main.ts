// Завдання 3

// Написати розв’язок нижче описаного завдання за допомогою function declaration:
// Потрібно створити функцію, яка повертає максимальний переданий їй числовий параметр.
// Кількість параметрів у функції може бути від 2х і більше.
// Приклад роботи:
// max(5,-2) – має повернути 5.
// max(5,-2, 30, 6) – має повернути 30
// ---------------------------------------------------------------------------------------

function max(num1: number, num2: number, ...anothers: number[]) {
    let all = [num1, num2, ...anothers];
    let max = Math.max(...all);
}
max(5,-2);
max(5,-2, 30, 6);