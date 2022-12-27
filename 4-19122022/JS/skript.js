// == 1 
let userWallet = {
    amountUsd: 0, 
    amountEuro: 0, 
    amountUah: 0 
  }
  
  bank = [
      {
          name: "usa",
          buy: 40.0,
          sell: 39.0
      },
      {
          name: "euro",
          buy: 42.0,
          sell: 41.5
      },
      {
          name: "uah",
          buy: 1.0,
          sell: 1.0
      }
  ];
  
  userWallet.amountUsd = parseFloat(prompt("Вкажіть скільки USD:"));
  userWallet.amountEuro = parseFloat(prompt("Вкажіть скільки EURO:"));
  userWallet.amountUah = parseFloat(prompt("Вкажіть скільки UAH:"));
  
  function converter(){
      if(userWallet.amountUah<=0){
          alert("Your balance is too low!");
      }
      return `За ${userWallet.amountUah} UAH ви можете купити ${(userWallet.amountUah / bank[0].buy).toFixed(2)} USD.\nЗа ${userWallet.amountUah} UAH ви можете купити ${(userWallet.amountUah / bank[1].buy).toFixed(2)} EU.`; 
  }
  converter(userWallet);
  console.log(converter());
  
  function sellAllAmount(){
      let getUAHfromUsd = parseFloat((userWallet.amountUsd * bank[0].sell).toFixed(2));
      let getUAHfromEuro = parseFloat((userWallet.amountEuro * bank[1].sell).toFixed(2));
      let sellAll = parseFloat((getUAHfromUsd + getUAHfromEuro).toFixed(2));
      return `Продаж збережень в долларах принесе Вам ${getUAHfromUsd} UAH.\nПродаж збережень в євро принесе Вам ${getUAHfromEuro} UAH.\nПродаж всіх збережень принесе Вам ${sellAll} UAH.` 
  
  }
  sellAllAmount();
  console.log(sellAllAmount());
console.log("Finish");

//   == 2 
let distace = prompt("Введіть кількість кроків");
let direction = prompt("Введіть напрямок руху", "Південь, Північ, Захід, Схід");

function move (a, b) {
    let primaryMove = `${a} кроків на ${b}`;
    return primaryMove;
}

function moveUser(a, b, callBack){
    let finalMove = `Користувач премістився: ${callBack(a,b)}`
    console.log(finalMove);
    return finalMove;
}
moveUser(distace, direction, move);
console.log("Finish");

// == 3 
let KeepRemove =["Keep", "Remove", "Keep", "Remove", "Keep", "Remove"];

if(KeepRemove.length > 0){
    for (let i = 0; i<KeepRemove.length; i++){
        KeepRemove.splice(i+1,1);

    }
} else {
    console.log("Массив пустий");
}
console.log(KeepRemove);
console.log("Finish");

// == 4 
let figurs = [
    {
      figure: "Squar",
      sizeA: 4,
      sizeB: 4,
    },
    {
      figure: "Rectangle",
      sizeA: 4,
      sizeB: 8,
    },
  ];
  
  function calculateArea(figure) {
    figure.forEach((element) => {
      console.log(`${element.figure} is ${element.sizeA * element.sizeB}`);
    });
  }
  calculateArea(figurs);
  console.log("Finish");

// == 5
let myArray = [2, 3, 5, 4, 8, 7, 9, 10];
let myModifArray = myArray.map((a) => {
  return a % 2 == 0 ? a * 4 : a;
});

console.log(myArray.toString());
console.log(myModifArray.toString());
console.log("Finish");