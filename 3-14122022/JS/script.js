let arrRandomNumbers = [1, 3, 5, 4, 6, 9, 8, 20, 31, 33, 10];
let arr = [];
// == 1
function func() {
    for (i = 0; i < arrRandomNumbers.length; i++){
        let res = arrRandomNumbers[i];
        if (res % 2 == 0) {
            arr.push(res);
        }
    }
console.log(arr);
}
func();

// == 2 
let arrproduct = [];
for (i = 0; i < 5; i++){
    let product = prompt('Що бажаєте купити ? ');
    arrproduct.push(product);
}
console.log(arrproduct);

// == 3
let mid = arrRandomNumbers.length;
let c = 0;
function sum(b) {
    for (i = 0; i < mid; i++){
        let a = arrRandomNumbers[i]
        c = c + a;
    }
    b = c / mid;
    console.log(b);
}
sum(1);

// == 4
let smile = [':)', '=)', ':)', '=)', ':)', '=)'];
let h = 0;
function arrsmile(arr) {
    for (i = 0; i < smile.length; i++) {
        h = smile[i];
        if (h === '=)') {
            smile.splice(i, 1, ';)');
        }
    }
    console.log(smile)
}
arrsmile();

// == 5
let what = prompt('Введіть: last or first', 'first');
let animals = ['cat', 'cow', 'fish', 'chicken', 'dog', 'pig'];
let a = '';
function deletes() {
if (what == 'last') {
    a = animals.splice(5, 1);
    console.log(a);
    console.log(animals);
}
else if (what === 'first') {
    a = animals.splice(0, 1);
    console.log(a);
    console.log(animals);
    }
else {
    alert('Fail');
}
}
deletes();

// == 6
let b = 0;
function test() {
    for (i = 0; i < arrRandomNumbers.length; i++) {
        let a = arrRandomNumbers[i];
        b = a + b;
    }
    console.log(b);
}
test();

// == 7 
let start = prompt('Введіть число для старту: ') 
let finish = prompt('Введіть число для фінішу: ') 
function newArr(start, finish) {
    let a = arrRandomNumbers.slice([start], [finish]);
    a.length;
    console.log(a);
}
newArr(start, finish);