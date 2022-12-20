// == 1 калькулятор
let firstNumber = parseFloat(prompt('Type number', 0));
let SecondNumber = parseFloat(prompt('Type number', 0));
let operationNumber = prompt('Operation');
let result = 0;
if(operationNumber == '+'){
    result = firstNumber + SecondNumber;
    console.log('Plus value:', result);
}
else if(operationNumber == '*'){
    result = firstNumber * SecondNumber;
    console.log('Multiplie value:', result);
}
else if(operationNumber == '/'){
    result = firstNumber / SecondNumber;
    console.log('Divide value:', result);
    if(SecondNumber == 0);
    alert('Calculation not possible');
}
else if(operationNumber == '-'){
    result = firstNumber - SecondNumber;
    console.log('Divide value:', result);
}
else{
    console.log('Operation not found');
}

// == 2 за допомогою циклу вивести в консоль всі парні значення числа 20
for (c = 0; c <= 20; c++){
    if (c % 2 == 0) {
        console.log(c);
    }
}

// == 3 використовуючи цикл виведіть суму чисел між  А і В з умовою що A<B 
let A = 2;
let B = 8;
let res = 0;
while (A + B) {
    res = A++;
    console.log(res);
    if (A == B) {
        console.log('finish');
        break;
    }
}

// == 4 зробити цикл який виводить дані навпаки від більшого до меншог. Наприклад від 10 до 0 (10, 9, 8, 7, 6 ...)
for (let x = 10; x >= 0; x--) {
  console.log(x);
}

// == 5 отримайте 2 значення і виведіть за допомогою * в консоль фігуру в якій довжина і ширина це отримані значення. 
let width = prompt('Введіть значення ширини:');
let height = prompt('Введіть значення висорти:');
let widthR = ' ';
let heightR = ' ';
for (i = 0; i <= width; i++) {
    widthR = widthR + '*';
    if (i == width) {
        for (y = 0; y < height; y++) {
            console.log(widthR);1
            console.log(heightR);
        }
    }
}

// == 6 напишіть змінні які питають логін та пароль з prompt якщо логін admin і пароль 12345
let login = prompt('Login', 'admin');
let pasword = prompt('Pasword', 12345);
if (login == 'admin' && pasword == 12345) {
    alert('Вітаємо в системі');
}
else{
    alert('Пароль логін не вірні');
}

// == 7 отримати 3 значення від користувача і порахувати середнє значення цих значень
let A = parseFloat(prompt("Введіть значення", "1"));
let B = parseFloat(prompt("Введіть значення", "2"));
let C = parseFloat(prompt("Введіть значення", "3"));
let result = (A + B + C) / 3;
console.log(result)

// == 8 Спитати в користувача вік, далі використовуючи тернарний оператор ( це скорочений запис іf ) 
// створити змінну яка отримує true якщо вік більше 18  i false якщо менше
let youAge = prompt('Скільки вам років ?');
let ageResult = (youAge > 18) ? true : false;
console.log(ageResult);

// == 9 створити switch  в якому є назви планет сонячної системи. Якщо користувач вводить назву планети сонячної системи то виводити ця планета в сонячній системі. 
// Якщо такої планети нема то виводити: такої планети нема в сонячній системі
let planet = prompt('Введіть назву планети (мова: українска)');
switch (planet) {
    case 'Марс':
        console.log('Ця планета в сонячній системі');
        break;
    case 'Юпітер':
        console.log('Ця планета в сонячній системі');
        break;
    case 'Земля':
        console.log('Ця планета в сонячній системі');
        break;
    case 'Венера':
        console.log('Ця планета в сонячній системі');
        break;
    case 'Сатурн':
        console.log('Ця планета в сонячній системі');
        break;
    case 'Уран':
        console.log('Ця планета в сонячній системі');
        break;
    case 'Плутон':
        console.log('Ця планета в сонячній системі');
        break;

    default:
        console.log('Такої планети нема в сонячній системі');
        break;
}

// == 10 Отримати від користувача число яке більше 0 і якщо воно більше 100 то порахувати знижку 3% і вивести значення якщо більше 3000 то порахувати знижку 5% 
// і якщо більше 10000 то порахувати знижку 7% в усіх інших випадках вивести: "У вас нема знижки до сплати число яке було введене"
let cena = prompt('Вкажіть ціну товару:');
let cenaRes;
let discount;
if (cena > 0 && cena <= 100) {
    console.log('До сплати:', cena);
}
else if (cena > 100 && cena <= 3000) {
    discount = cena / 100 * 3;
    cenaRes = cena - discount;
    console.log('Ваша знижка становить:', discount.toFixed(2), 'До сплати:', cenaRes.toFixed(2));
}
else if (cena > 3000 && cena <= 10000) {
    discount = cena / 100 * 5;
    cenaRes = cena - discount;
    console.log('Ваша знижка становить:', discount.toFixed(2), 'До сплати:', cenaRes.toFixed(2));
}
else if (cena > 10000) {
    discount = cena / 100 * 7;
    cenaRes = cena - discount;
    console.log('Ваша знижка становить:', discount.toFixed(2), 'До сплати:', cenaRes.toFixed(2));
}
else {
    console.log('У вас нема знижки до сплати:', cena);
}

// == 11 отримати від користувача назву трарини і за допогомою світч вивести звук який вона видає . Наприклад корова: му-му  і т.д
let animal = prompt('Введіть назву тварини: (наприклад: кіт, пес ...)');
switch (animal) {
    case 'свиня':
        console.log('хрю-хрю');
        break;
    case 'кіт':
        console.log('мяу-мяу');
        break;
    case 'пес':
        console.log('гав-гав');
        break;
    case 'качка':
        console.log('кря-кря');
        break;
    case 'зозуля':
        console.log('ку-ку');
        break;

    default:
        console.log('Не вірна назва');
        break;
}

