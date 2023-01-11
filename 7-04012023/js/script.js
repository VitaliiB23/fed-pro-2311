window.onload = () => {
// 1)Створити html документ, в якому є теги header, footer, nav, ul список на 5 елементів li , отримати доступ до ціх елементів і змінити там текст за допомогою innerHtml
    const [...headerList] = document.querySelectorAll("header li");
    const [...footerList] = document.querySelectorAll("footer li");

    headerList.forEach((item) => item.innerHTML += 1);
    footerList.forEach((item) => item.innerHTML += 20);

// 2) Знайти батьківський елемент li елемента через методи пошуку батьківського елементу вивести в консоль отримане значення
    const headerSecondLi = document.querySelector("header li:nth-child(2)");
    console.log(headerSecondLi.parentNode, "I'm your daddy");
}

// 3) Створіть класс по додаваню фільма який має такі значення(рік випуску, жанр, назву, кількість переглядів)
class Movie {
    constructor(name, year, genre, views) {
        this.name = name;
        this.year = year;
        this.genre = genre;
        this.views = views;
    }

// 4) В классі створити метод який визначає рейтинг в залежності від року випуску і кількості переглядів  ( кількість переглядів поділена на різницю між сьогоднішнім роком і роком випуску ) 
    getRating() {return `${(this.views / (new Date().getFullYear() - this.year)).toFixed(2)}`}
}

const homeAlone = new Movie("Один вдома", 1990, "Комедія", 476700000);
console.log(`${homeAlone.name} rating is - ${homeAlone.getRating()}`);

// 5) Створіть массив і розмістіть в ньому створені обєкти фільмів, далі за допомогою синтаксису деструктирізації  переберіть масив  і виведіть значення по року випуску.
const homeAlone2 = new Movie("Один вдома 2", 1992, "Комедія", 359000000);
const pursuitOfHappyness = new Movie("В гонитві за щастям", 2006, "Биографическая драма", 307100000);
const avatar = new Movie("Аватар", 2009, "Наукова фантастика", 55200000);
const avatar2 = new Movie("Аватар 2", 2022, "Наукова фантастика", 22200000);

const moviesList = [homeAlone, homeAlone2, pursuitOfHappyness, avatar, avatar2];

for (movie of moviesList) {
    const {year} = movie;
    console.log(year);
}