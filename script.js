////////////////////////////////////////!
const user = {
  id: 1,
  first_name: "Garrott",
  last_name: "Eberdt",
  email: "geberdt0@wp.com",
  gender: "Male",
  ip_address: "49.230.15.110",
  isAdmin: true,
};

let {
  id: num,
  first_name: first,
  last_name: last,
  email: zzzz,
  gender: male,
  ip_address: addres,
  isAdmin: animal,
} = user;
console.log(num, first, last, zzzz, male, addres, animal);

////////////////////////////////////////!
const animals = ["apple", "banana", "lemon", "kiwi", true];
let [a, s, d, f, g] = animals;
console.log(a, s, d, f, g);

////////////////////////////////////////!
const workers = [
  {
    id: 1,
    name: "Emile",
    lastname: "Van Weedenburg",
    email: "evanweedenburg0@technorati.com",
  },
  {
    id: 2,
    name: "Orv",
    lastname: "Gretton",
    email: "ogretton1@about.me",
  },
];

let [
  { id: one, name: emilia, lastname: van, email: eee },
  { id: two, name: orv, lastname: gretton, email: er },
] = workers;
let [awq, drw] = workers;
console.log(one, emilia, van, eee);
console.log(two, orv, gretton, er);
console.log(awq, drw);

//! Создайте переменную с именем 'add' и сохраните в ней функцию.
//! Эта функция будет выводить console.log(2+3) ; Запустите функцию дважды
let add = () => {
  console.log(2 + 3);
};
add();
add();

// Продолжая упражнение, создайте функцию runTwice(fun),
// которая принимает функцию (в качестве параметра) и запускает ее дважды.

function runTwice(fun) {
  fun();
  fun();
}
runTwice(function () {
  console.log("error");
});

//! Создайте кнопку ниже.
//! При нажатии на кнопку через 2 секунды текст внутри кнопки изменится на "Finished".
// Продолжая упражнение, измените кнопку так,
// чтобы при нажатии на нее текст сразу менялся на "Loading...", а через 2 секунды - на "Finished".
let nazhmi = () => {
  document.querySelector("#change").innerHTML = "loading";
  setTimeout(function () {
    document.querySelector("#change").innerHTML = "Finished";
  }, 2000);
};

//! Создайте кнопку "Add to cart" . При нажатии на эту кнопку отобразите
//! сообщение "Added" под кнопкой. Затем, через 2 секунды, уберите сообщение.
let display = () => {
  document.querySelector("#display").innerHTML = "Added";
  setTimeout(function () {
    document.querySelector("#display").innerHTML = "";
  }, 2000);
};

//! Представьте, что мы создаем приложение для обмена сообщениями. Используем setInterval() и
//! document.title для создания функции внизу (заголовок меняется каждые 5 секунд)
let nums = 1;
function aaaa() {
  setInterval(() => {
    document.title = `(${nums}) new messages`;
  }, 5000);
}
function interval() {
  setInterval(() => {
    nums++;
    aaaa();
  }, 5000);
}
aaaa();
interval();

//! for of loor'туколдонуп computers array'диничиндеги
//! элементерин prise свойствосунун суммасын табыныз
const computer = [
  {
    title: "Macbook Air M1",
    prise: 85000,
  },
  {
    title: "Dell",
    prise: 65000,
  },
  {
    title: "Asus ZenBook",
    prise: 40000,
  },
  {
    title: "Acer Aspire",
    prise: 45000,
  },
  {
    title: "Macbook Pro",
    prise: 100000,
  },
];
const [on, tw, th, fo, fi] = computer;
let e = 0;
for (const oneq of computer) {
  e = on.prise + tw.prise + th.prise + fo.prise + fi.prise;
}
console.log(e);
