// // 1 - отримай body елемент і виведи його в консоль;
// const body = document.querySelector("body");
// console.log(body);

// // 2 - отримай елемент id="title" і виведи його в консоль;
// const elemById = document.querySelector("#title");
// console.log(elemById);
// // 3 - отримай елемент class="list" і виведи його в консоль;
// const list = document.querySelector(".list");
// console.log(list);
// // 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// const elemByAtrybut = document.querySelectorAll("[data-topic]");
// console.log(elemByAtrybut);
// // 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// const firstElem = document.querySelector("[data-topic]");
// console.log(firstElem);
// // 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// // const lastElem = elemByAtrybut[elemByAtrybut.length - 1];
// // console.log(lastElem);

// const lastElem = list.lastElementChild;
// console.log(lastElem); //другий спосіб
// // 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// const neighbor = elemById.nextElementSibling;
// console.log(neighbor);

// // 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// const allTiteles = document.querySelectorAll("h3");
// console.log(allTiteles);
// // 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// allTiteles.forEach((el) => el.classList.add("active"));
// // 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// const navigation = document.querySelector("[data-topic = navigation]");
// console.log(navigation);

// // 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// navigation.style.backgroundColor = "yellow";

// // 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".

// navigation.querySelector("p").textContent = "Я змінив тут текст!";

// // 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;

// const currentTopic = "manipulation";
// const elem = document.querySelector(`[data-topic = ${currentTopic}]`);
// console.log(elem);

// // 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;

// elem.style.backgroundColor = "blue";

// // 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// const title = document.querySelector(".completed");
// console.log(title);
// // 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// title.parentNode.remove();
// // 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// const h1 = document.querySelector("h1");
// const text = document.createElement("p");
// text.textContent = "Об'єктна модель документа (Document Object Model)";
// h1.after(text);

// // 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// // const li = document.createElement("li");
// // const h3 = document.createElement("h3");
// // h3.textContent = "Властивість innerHTML";
// // const p = document.createElement("p");
// // p.textContent =
// //   "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";
// // li.append(h3, p);
// // list.append(li);

// // 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()

// // const markup = `
// // <li>
// //     <h3>Властивість innerHTML</h3>
// //     <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>
// // </li>`;
// // list.insertAdjacentHTML(`beforeend`, markup);
// // // 20 - очисти список
// // list.innerHTML = "";

// Створіть контейнер div (з класом number-container) в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

const div = document.querySelector(".number-container");
const randomNumber = () => Math.floor(Math.random() * 100) + 1;
let arrayElements = [];
for (let i = 0; i <= 100; i++) {
  const elem = document.createElement("div");
  elem.classList.add("number");
  const number = randomNumber();
  elem.textContent = number;
  if (number % 2 === 0) {
    elem.classList.add("even");
  } else {
    elem.classList.add("odd");
  }
  arrayElements.push(elem);
}
div.append(...arrayElements);
