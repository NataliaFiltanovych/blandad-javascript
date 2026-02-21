// 1 - отримай body елемент і виведи його в консоль;
// 2 - отримай елемент id="title" і виведи його в консоль;
// 3 - отримай елемент class="list" і виведи його в консоль;
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;

// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// 20 - очисти список

const body = document.querySelector("body");
console.log(body);

const elemById = document.querySelector("#title");
console.log(elemById);

const list = document.querySelector(".list");
console.log(list);

const elemByAtrybut = document.querySelectorAll("[data-topic]");
console.log(elemByAtrybut);

const firstElem = document.querySelector("[data-topic]");
console.log(firstElem);

// const lastElem = elemByAtrybut[elemByAtrybut.length - 1];
// console.log(lastElem);

const lastElem = list.lastElementChild;
console.log(lastElem); //другий спосіб

const neighbor = elemById.nextElementSibling;
console.log(neighbor);

const allTiteles = document.querySelectorAll("h3");
console.log(allTiteles);

allTiteles.forEach((el) => el.classList.add("active"));

const navigation = document.querySelector("[data-topic = navigation]");
console.log(navigation);

// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
navigation.style.backgroundColor = "yellow";

// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".

navigation.querySelector("p").textContent = "Я змінив тут текст!";

// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;

const currentTopic = "manipulation";
const elem = document.querySelector(`[data-topic = ${currentTopic}]`);
console.log(elem);

// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;

elem.style.backgroundColor = "blue";
