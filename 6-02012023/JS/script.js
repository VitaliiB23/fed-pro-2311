// == 1
function allInfo(...a) {
    let b = 0;
    for (let i = 0; i < arguments.length; i++){
        b += arguments[i];
    };
    return` Сума масиву : ${b}`
};
console.log(allInfo(3, 2, 7));
console.log('Finish 1');

// ==2 and 3
function greeting() {
    console.log('Вітаємо з днем народження');
}

const month = parseInt(prompt('Вкажіть місяць числом :'));
const day = parseInt(prompt('Вкажіть день :'));
const year = parseInt(prompt('Вкажіть рік :'));
const date = new Date;1
const dataInfo = new Date(year, month -1, day);
function data(info, fn) {
    if (info.getMonth() === date.getMonth() && info.getDate() === date.getDate()) {
        fn();
    };
    console.log(`Вам : ${date.getFullYear() - info.getFullYear()} років`);
    return `Вам: ${date.getFullYear() - info.getFullYear() } років`;
};

data(dataInfo, greeting);
console.log('Finish 2 and 3');

// == 4
const years = parseInt(prompt ('Введіть рік :'));

function century(year) {
    let a = 0;
    let b = 0;
    if (year % 100 == 0) {
        a = year / 100 ;
    }
    else {
        b = Math.floor(year / 100) + 1;
    }
    return `${year} Це ${a > 0 ? a : b} сторіччя`;
};
century(years)
console.log(century(years));
console.log('Finish 4');

// == 5
let monthA = parseInt(prompt("Введіть місяць числом :"));
let yearA = parseInt(prompt("Введіть рік :"));

function daysInMonth(month, year) {
    return `В цьому місяці : ${new Date(year, month, 0).getDate()} днів, а в наступному ${new Date(year, month + 1, 0).getDate()}`;
}
console.log(daysInMonth(monthA, yearA));
console.log('Finish 5');