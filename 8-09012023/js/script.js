window.onload = () => {
    // ==1 
    let createInput = function () {
      let container = document.querySelector(".container");
      let ul = document.createElement("ul");
      let count = 0;
      while (true) {
        let inputData = prompt("Введіть свої дані або натисніть enter для завершення");
        if (inputData === "") {
          return;
        }
        count++;
        if (count > 5) {
          ul.removeChild(ul.firstElementChild);
        }
  
        let li = document.createElement("li");
        li.innerHTML = `${inputData}  ${formatTime()}`;
        ul.appendChild(li);
        container.appendChild(ul);
      }
    };
  
    let formatTime = function () {
      let myDate = new Date();
      return (
        "  " +
        myDate.getDate() +
        "." +
        (myDate.getMonth() + 1) +
        "." +
        myDate.getFullYear() +
        "  " +
        myDate.getHours() +
        ":" +
        myDate.getMinutes()
      );
    };
  
    createInput();

    // == 2 
  
    class CustomImage {
      constructor(imgPath, alt, href) {
        this.imgPath = imgPath;
        this.alt = alt;
        this.href = href;
      }
    }
  
    let arrayOfImages = [
      new CustomImage(
        "img/Dog.png",
        "DOG",
        "https://www.proplan.ru/sites/owners.proplan.ru/files/styles/article720x340/public/2020-03/shutterstock_231364474_2.jpg?itok=H2N2vP-Q"
      ),
      new CustomImage(
        "img/bird.png",
        "BIRD",
        "https://i.pinimg.com/736x/ce/e2/db/cee2db841fc72321476b6d3bf4cd80b6.jpg"
      ),
      new CustomImage(
        "img/cat.png",
        "CAT",
        "https://2day.kh.ua/sites/default/files/styles/glavnoe/public/2021-11/260896824_5192508757443676_1337575292305633641_n.jpg?h=f5306674&itok=0dILiwaS"
      ),
      new CustomImage(
        "img/turtle.png",
        "TURTLE",
        "https://blog.tetra.net/ru/ru/wp-content/uploads/2020/08/cherepahi-samye-rasprostranennye-v-akvariumistike-vodnye-reptilii.jpg"
      ),
    ];
  
    let outputImages = function (arrayOfImages) {
      let picture = document.querySelector(".picture");
      let fragmentOfImages = new DocumentFragment();
      arrayOfImages.forEach((images) => {
        let impLink = document.createElement("a");
        impLink.setAttribute("href", images.href);
        let img = document.createElement("img");
        img.src = images.imgPath;
        img.alt = images.alt;
        img.width = 200;
        impLink.appendChild(img);
        fragmentOfImages.appendChild(impLink);
      });
      picture.appendChild(fragmentOfImages);
    };
  
    outputImages(arrayOfImages);
  
    // == 3
    let students = document.querySelector(".students");
    let createStudentTable = function () {
      table = document.createElement("table");
      table.setAttribute("border", 1);
      table.setAttribute("align", "left");
      table.setAttribute("width", "50%");
      table.setAttribute("height", "30");
  
      let tableHead = document.createElement("tr");
      let nameStudent = document.createElement("th");
      nameStudent.innerText = "Ім'я студента";
      let city = document.createElement("th");
      city.innerText = "Місто";
      let course = document.createElement("th");
      course.innerText = "Поточний курс";
      tableHead.appendChild(nameStudent);
      tableHead.appendChild(city);
      tableHead.appendChild(course);
      table.appendChild(tableHead);
      students.appendChild(table);
  
      // ==
      let nameStudentOne = document.createElement("td");
      nameStudentOne.innerText = "Бєгун Віталій";
      let cityOne = document.createElement("td");
      cityOne.innerText = "Харків";
      let courseOne = document.createElement("td");
      courseOne.innerText = "1";
      let rowTableOne = document.createElement("tr");
      rowTableOne.appendChild(nameStudentOne);
      rowTableOne.appendChild(cityOne);
      rowTableOne.appendChild(courseOne);
      table.appendChild(rowTableOne);
  
      let nameStudentTwo = document.createElement("td");
      nameStudentTwo.innerText = "Іванов Іван";
      let cityTwo = document.createElement("td");
      cityTwo.innerText = "Одеса";
      let courseTwo = document.createElement("td");
      courseTwo.innerText = "2";
      let rowTableTwo = document.createElement("tr");
      rowTableTwo.appendChild(nameStudentTwo);
      rowTableTwo.appendChild(cityTwo);
      rowTableTwo.appendChild(courseTwo);
      table.appendChild(rowTableTwo);

      let nameStudentThree = document.createElement("td");
      nameStudentThree.innerText = "Петров Петр";
      let cityThree = document.createElement("td");
      cityThree.innerText = "Київ";
      let courseThree = document.createElement("td");
      courseThree.innerText = "1";
      let rowTableThree = document.createElement("tr");
      rowTableThree.appendChild(nameStudentThree);
      rowTableThree.appendChild(cityThree);
      rowTableThree.appendChild(courseThree);
      table.appendChild(rowTableThree);
    };
  
    createStudentTable();

  };