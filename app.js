
const myFullName= "Ramanpreet Kaur";
const myStudentNumber = "1162997";
const myInfo = `${myFullName} - ${myStudentNumber}`;

let header = document.querySelector("h1");
header.innerHTML = `${myFullName} - ${myStudentNumber}`;
header.classList.add("headingPrimary");
console.log("myInfo");
console.log("header.classList");