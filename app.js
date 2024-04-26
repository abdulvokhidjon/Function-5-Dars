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