// FUNCTION|5-dars.

// N {1}

// const a = +prompt("Marhamat qilib (a) qiymatni kiriting:");
// const b = +prompt("Marhamat qilib (b) qiymatni kiriting:");

// function sum(a, b) {
//   return a + b;
// }
// let total = sum(a, b);
// console.log("Yig'indi:", total,"ga teng.");

// N{2}

// function toSeconds(minutes) {
//   return minutes * 60;
// }

// let minutesInput = +prompt("Marhamat qilib daqiqa (minut) qiymatni kiriting:");

// let minutes = Number(minutesInput);

// if (!isNaN(minutes)) {
//   let seconds = toSeconds(minutes);
//   console.log(minutes, "daqiqamiz : ", seconds, "soniyaga teng.");
// } else {
//   console.log(
//     "Oshqovoqona mulohaza qilingan.Iltimos to'g'ri raqam kiriting. :)"
//   );
// }

// N{3}

// function nextNumber(num) {
//   return num + 1;
// }

// let numInput = +prompt("Marhamat qilib son kiriting:");

// let num = Number(numInput);

// if (!isNaN(num) && Number.isInteger(num)) {
//   let nextNum = nextNumber(num);
//   console.log("Ushbu", num, "raqamidan keyingi raqam :", nextNum);
// } else {
//   console.log("Oshqovoqona mulohaza qilingan yoki ratsional son kiritilgan.Iltimos to'g'ri butun raqam kiriting.");
// }

// N{4}

// function uchburchakYuzi() {
//     let asos = +prompt("Marhamat qilib uchburchakning asosini kiriting:");
//     let balandlik = +prompt("Marhamat qilib uchburchakning balandligini kiriting:");

//     if (!isNaN(asos) && !isNaN(balandlik)) {
//       let yuzi = (asos * balandlik) / 2;
//       console.log("Uchburchakning yuzi:", yuzi, "ga teng.");
//     } else {
//       console.log("Noto'g'ri ma'lumot kiritilgan. Iltimos, son kiriting.");
//     }
//   }

//   uchburchakYuzi();

// N{5}

// function ageToDays() {
//   let ageInYearsInput = prompt("Marhamat qilib yoshingizni kiriting:");
//   let ageInYears = Number(ageInYearsInput);

//   if (!isNaN(ageInYears)) {
//     let ageInDays = ageInYears * 365;
//     console.log(
//       "Sizga shuni ma'lum qilamanki,siz :",
//       ageInYears,
//       "yoshdasiz, aniqroq qilib aysam :",
//       ageInDays,
//       " kunga teng."
//     );
//   } else {
//     console.log("Noto'g'ri ma'lumot kiritilgan. Iltimos, son kiriting.");
//   }
// }

// ageToDays();

// N{6}

// function cube(x) {
//   if (isNaN(x)) {
//     return "Noto'g'ri ma'lumot kiritilgan. Iltimos, son kiriting.";
//   } else {
//     return x * x * x;
//   }
// }

// let userInput = +prompt("Marhamat qilib son kiriting:");

// let result = cube(userInput);

// console.log(userInput , "ning kubi", result, "ga teng.");


// N{7}

// function firstElement() {
//   let input = prompt("Array elementlarini vergul bilan ajratib kiriting (masalan, 1,2,3):");
//   let arr = input.split(",").map(Number); 

//   if (arr.length > 0) {
//     let firstElement = arr[0];
//     console.log("Birinchi element:", firstElement);
//   } else {
//     console.log("Array bo'sh.");
//   }
// }

// firstElement();

// N{8}

// function multiply() {
//   let firstNumberInput = prompt("Birinchi sonni kiriting:");
//   let secondNumberInput = prompt("Ikkinchi sonni kiriting:");

//   let firstNumber = Number(firstNumberInput);
//   let secondNumber = Number(secondNumberInput);

//   if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
//     let product = firstNumber * secondNumber;
//     console.log(firstNumber, " va ", secondNumber, " ko'paytmasi ", product);
//   } else {
//     console.log("Noto'g'ri kiritilgan ma'lumot. Iltimos, son kiriting.");
//   }
// }

// multiply();

// N{9}

// function hourToSeconds() {
//   let hoursInput = prompt("Soatni kiriting:");
//   let hours = Number(hoursInput);

//   if (!isNaN(hours)) {
//     let seconds = hours * 60 * 60;
//     console.log(hours, " soat ", seconds, " sekundga teng.");
//   } else {
//     console.log("Noto'g'ri kiritilgan ma'lumot. Iltimos, soatni son sifatida kiriting.");
//   }
// }

// hourToSeconds();

// N{10}

// function thirdSide(side1, side2) {
//   let side1Input = prompt("Birinchi tomon uzunligini kiriting:");
//   let side2Input = prompt("Ikkinchi tomon uzunligini kiriting:");

//   let side1Number = Number(side1Input);
//   let side2Number = Number(side2Input);

//   if (!isNaN(side1Number) && !isNaN(side2Number)) {
//     let longestThirdSide = (side1Number + side2Number) - 1;
//     console.log("Uchburchakning uchinchi tomonining maksimal uzunligi:", longestThirdSide);
//   } else {
//     console.log("Noto'g'ri kiritilgan ma'lumot. Iltimos, tomon uzunliklarini son sifatida kiriting.");
//   }
// }

// thirdSide();

// N{11}



// function calculate(a, b) {
//   return a % b;
// }
// console.log(calculate(1, 3));
// console.log(calculate(-9, 45));
// console.log(calculate(3, 4));

// N{12}

// const areaOfRectangle = (a, b) => {
//   return a * b;
// };
// console.log(areaOfRectangle(3, 4));

// N{13}

// const addString = (a) => {
//   return `Someting ${a}`;
// };

// console.log(addString("Teacher"));

// N{14}

// const sqr = (n) => {
//   return n ** 2;
// };
// console.log(sqr(5));

// N{15}

// function zero(n) {
//   if (n <= 0) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// zero(-8);

// N{16}

// function calculate(n) {
//   return (n - 2) * 180;
// }
// console.log(calculate(4));

// N{17}

// function calculate(x, y) {
//   return x * 2 + y * 3;
// }
// console.log(calculate(4, 2));

// N{18}

// const addString = (a) => {
//   return `${a}Edabit`;
// };
// console.log(addString("Teacher"));

// N{19}

// const biggerThanHundred = function (a, b) {
//   if (a + b < 100) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// };
// biggerThanHundred(34, 45);
// biggerThanHundred(34, 75);

// N{20}

// let newArray = [];
// function array(n) {
//   for (i = 1; i <= n; i++) {
//     newArray.push(i);
//   }
// }
// array(20);
// console.log(newArray);

// N{21}

// function countLegs(tovuq, qoy, mol) {
//   return tovuq * 2 + qoy * 4 + mol * 4;
// }
// console.log(countLegs(2, 3, 5));

// N{22}

// function bool(a, b) {
//   if (a == true && b == false) {
//     console.log(false);
//   } else if (a == true && b == true) {
//     console.log(true);
//   } else if (a == false && b == true) {
//     console.log(false);
//   } else if (a == false && b == false) {
//     console.log(false);
//   }
// }
// bool(true, false);
// bool(true, true);

// N{23}

// function isEqual(a, b) {
//   if (a === b) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// isEqual(4, 4);
// isEqual(4, 8);

// N{24}

// function points(win, draw, lost) {
//   return win * 3 + draw * 1;
// }

// console.log(points(6, 2, 3));

// N{25}

// function secunds(h, m) {
//   return h * 3600 + m * 60;
// }

// console.log(secunds(1, 2));

// N{26}

// function fun(n) {
//   if (n === 7) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// fun(4);
// fun(7);
// fun(9);

// N{27}

// function isEqual(a, b) {
//   if (a === b) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// isEqual(1, 1);
// isEqual(1, "1");

// N{28}

// function funToString(bool) {
//   return String(bool);
// }
// console.log(funToString(true));
// console.log(typeof funToString(true));

// N{29}

// const arrowFunction = (v) => {
//   return v;
// };
// console.log(arrowFunction(3));
// console.log(arrowFunction("3"));
// console.log(arrowFunction(true));