// Напишите скрипт, который считает количество секунд в часе.


// let minutesInHour = 60;
// let secondsInMinute = 60;

// let secondsInHour = minutesInHour * secondsInMinute;
// console.log(secondsInHour);


// Создайте три переменные - час, минута, секунда. С их помощью выведите текущее время в формате 'час:минута:секунда'.

// let hour = 1;
// let minute = 2;
// let second = 3;


// console.log(hour + ":" + minute + ":" + second);


// В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

// let day = 15;
// let decade = Math.floor((day - 1) / 10) + 1;

// if (decade === 1) {
//   console.log("Число " + day + " попадает в первую декаду месяца.");
// } else if (decade === 2) {
//   console.log("Число " + day + " попадает во вторую декаду месяца.");
// } else if (decade === 3) {
//   console.log("Число " + day + " попадает в третью декаду месяца.");
// } else {
//   console.log("Неверное значение дня.");
// }

// В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

let month = 6;

if (month === 12 || month === 1 || month === 2) {
  console.log("Зима");
} else if (month >= 3 && month <= 5) {
  console.log("Весна");
} else if (month >= 6 && month <= 8) {
  console.log("Лето");
} else if (month >= 9 && month <= 11) {
  console.log("Осень");
} else {
  console.log("Неверное значение месяца");
}