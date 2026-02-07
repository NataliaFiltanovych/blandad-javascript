// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5];
// // const newNumbers = numbers.map((number) => number ** 2);

// // console.log(newNumbers);

// const powNumbers = (array, pow) => array.map((el) => Math.pow(el, pow));
// console.log(powNumbers(numbers, 2)); // інший метод, більш універсальний

// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];

// // const allValues = data.flatMap((object) => object.values);
// // console.log(allValues);

// const allValues = (array) => array.flatMap((el) => el.values);
// console.log(allValues(data));

// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

// const people = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// // const isYoung = people.some((person) => person.age < 20);
// // console.log(isYoung);

// const chackAge = (array, age) => array.some((el) => el.age < age);
// console.log(chackAge(people, 20));

// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

// // const allEven = numbers.every((number) => number % 2 === 0);
// // console.log(allEven);

// const checkIsEven = (array, value) =>
//   array.every((el) => {
//     console.log(el);
//     return el % value === 0;
//   });
// console.log(checkIsEven(numbers, 2));

// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];

// // const findFirstOdd = numbers.find((num) => num % 2 !== 0);
// // console.log(findFirstOdd);

// const findFirstOdd = (array, value) => array.find((num) => num % value !== 0);
// console.log(findFirstOdd(numbers, 2));

// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];

// // const sortedNum = numbersArray.toSorted((a, b) => a - b);
// // console.log(sortedNum);

// const sortedNum = (array) => array.toSorted((a, b) => a - b);
// console.log(sortedNum(numbersArray));

// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ["banana", "orange", "apple", "pear"];

// // const sortedStr = stringArray.toSorted((a, b) => a.localeCompare(b));
// // console.log(sortedStr);

// const sortedStr = (array) => array.toSorted((a, b) => a.localeCompare(b));
// console.log(sortedStr(stringArray));

//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// // const sortedAgeAsd = users.toSorted((a, b) => a.age - b.age);
// // console.log(sortedAgeAsd);

// const sortedAgeAsd = (array) => array.toSorted((a, b) => a.age - b.age);
// console.log(sortedAgeAsd(users));

// _____________________________________________________________________________________

// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const users = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// // const allOlder = users.filter((user) => user.age > 20);
// // console.log(allOlder);

// const checkAllOlder = (array, age) => array.filter((obj) => obj.age > age);
// console.log(checkAllOlder(users, 20));

// __________________________________________________

// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];

// // const sumArr = numbers.reduce((sum, el) => sum + el, 0);
// // console.log(sumArr);

// const sumArr = (array) => array.reduce((sum, el) => sum + el, 0);
// console.log(sumArr(numbers));

// --------------------------------------------------------------

// Розроби клас Calculator, який дозволяє виконувати арифметичні
//  операції над числом за допомогою методів класу, підтримуючи
// ланцюжковий виклик (method chaining).
//
// Вимоги до класу Calculator
// - Метод number(value)
// Встановлює початкове значення для наступних обчислень.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
// - метод getResult, Повертає поточний результат усіх операцій.
// Не змінює значення, просто повертає його.
// - метод add - Додає value до поточного значення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
// - метод subtract - Віднімає value від поточного значення. Повертає this.
// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
// - метод multiply -Множить поточне значення на value. Повертає this.
// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка
// Приклад використання:
// class Calculator {
//   constructor() {
//     this.result;
//   }
//   number(value) {
//     this.result = value;
//     return this;
//   }
//   getResult() {
//     return this.result;
//   }
//   add(value) {
//     this.result += value;
//     return this;
//   }
//   subtract(value) {
//     this.result -= value;
//     return this;
//   }
//   divide(value) {
//     if (value !== 0) {
//       this.result /= value;
//     } else {
//       console.log("Ділити на 0 не можна");
//     }

//     return this;
//   }
//   multiply(value) {
//     this.result *= value;
//     return this;
//   }
// }
// const calc = new Calculator();

// const result = calc
//   .number(10) // Встановлюємо початкове значення 10
//   .add(5) // Додаємо 5 (10 + 5 = 15)
//   .subtract(3) // Віднімаємо 3 (15 - 3 = 12)
//   .multiply(4) // Множимо на 4 (12 * 4 = 48)
//   .divide(2) // Ділимо на 2 (48 / 2 = 24)
//   .getResult(); // Отримуємо результат: 24

// console.log(result); // 24

// ----------------------------------------------------------------------------
// Завдання 12:
// Напиши клас Client який створює об'єкт з властивостями login email.
// Оголоси приватні властивості #login #email, доступ до яких зроби
// через геттер та сеттер login email

// class Client {
//   #login;
//   #email;

//   set login(log) {
//     if (log.trim() !== "") {
//       this.#login = log;
//     }
//   }

//   get login() {
//     return this.#login;
//   }

//   set email(em) {
//     if (em.trim() !== "" && em.includes("@")) {
//       this.#email = em;
//     }
//   }

//   get email() {
//     return this.#email;
//   }
// }

// const user = new Client();
// user.login = "nata";
// console.log(user.login);
// user.login = "";
// console.log(user.login);
// user.email = "nata@mail.com";
// console.log(user.email);
// user.email = "";
// console.log(user.email);
// user.email = "natamail.com";
// console.log(user.email);

// ------------------------------------------------------------
//  Наслідування у класах!
// Cтворіть клас `Person`, який містить наступні властивості:
//  - `name` - ім'я людини;
//  - `age`- вік людини;
//  - `gender` - стать людини;
//  - `email`- електронна пошта людини.

// Крім того, клас `Person` має мати метод `getDetails()`,
// який повертає об'єкт з ім'ям, віком, статтю
//та електронною поштою людини.

//
// Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
//  - salary - зарплата співробітника;
//  - department - відділ, в якому працює співробітник.
// Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.

// class Person {
//   name;
//   age;
//   gender;
//   email;

//   constructor(params) {
//     this.name = params.name;
//     this.age = params.age;
//     this.gender = params.gender;
//     this.email = params.email;
//   }
//   getDetails() {
//     return {
//       name: this.name,
//       age: this.age,
//       gender: this.gender,
//       email: this.email,
//     };
//   }
// }

// const data = {
//   name: "Nata",
//   age: 34,
//   gender: "female",
//   email: "nata@gmail.com",
// };
// const pers = new Person(data);
// console.log(pers);

// class Employee extends Person {
//   salary;
//   department;

//   constructor(params) {
//     super(params);
//     this.salary = params.salary;
//     this.department = params.department;
//   }

//   getEmployeeDetails() {
//     return { salary: this.salary, department: this.department };
//   }
// }
// data.salary = 20000;
// data.department = "GOIT";
// const empl = new Employee(data);
// console.log(empl);
// console.log(empl.getEmployeeDetails());
// console.log(empl.getDetails());

// ---------------------------------------------------
//Підрахунок кількості повторень
//Дано масив:
// const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
// // //Завдання: За допомогою reduce підрахуйте, скільки разів кожен фрукт зустрічається в масиві.
// // //Очікуваний результат:
// // //{
// //  // apple: 3,
// //  // banana: 2,
// //  // orange: 1
// // //}

// const countFruits = fruits.reduce((acc, fruit) => {
//   acc[fruit] === undefined ? (acc[fruit] = 1) : (acc[fruit] += 1);
//   return acc;
// }, {});
// console.log(countFruits);
