// == 1
function UserConstructor(name,surname,age){
    this.name=name;
    this.surname=surname;
    this.age=age;
    this.UserId = Math.round(Math.random()*10);
    
}
UserConstructor.prototype.info=function(){
return`User name:${this.name};User surname:${this.surname}User age:${this.age};User ID:${this.UserId}`;
}
const newUser= new UserConstructor('Ivan','Ivanov',20);
const newUser1= new UserConstructor('Petro','Petrov',25);
console.log(newUser);
console.log(newUser1);
console.log(newUser.info());
console.log(newUser1.info());
console.log('Finish')

// == 2
UserConstructor.prototype.ChangeAge=function(name,surname,age){
    this.name=name;
    this.surname=surname;
    this.age=age;
    return
   }
   console.log(newUser);
   console.log(newUser.info())
   newUser.ChangeAge('Aleks','Aleksandrov',30);
   console.log(newUser);
   console.log(newUser.info());
   console.log('Finish')

// == 3
function Figure(height, width) {
    this.height = height;
    this.width = width;
}
Figure.prototype.square = function () {
    return `Площа : ${this.height * this.width}`
};
Figure.prototype.perimeter = function () {
    return ` Периметр : ${2 * this.height + 2 * this.width}`
};
Figure.prototype.diagonals = function () {
    return ` Діагональ : ${Math.sqrt(Math.pow(this.height, 2) + Math.pow(this.width, 2))}`
};

let newFigure = new Figure(2, 4);
console.log(newFigure. square());
console.log(newFigure.perimeter());
console.log(newFigure.diagonals());
console.log('Finish')

// == 4
let userWords = prompt('Вкажить слово');

function cuttingWords(variable) {
    let upCase = variable.toUpperCase()
    console.log(`${upCase.slice(0, 1)}....${upCase.slice(-1,)}`);
}
cuttingWords(userWords);
console.log('Finish')

// == 5
let textTest = '   Як подолати js   '

function stringValidation(str) {
    let text = str.trim();
    if (text.length > 10) {
        console.log(`${text.slice(0, 10)} ...`);
    }
}
stringValidation(textTest);
console.log('Finish')
