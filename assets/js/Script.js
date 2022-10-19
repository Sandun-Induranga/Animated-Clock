const deg = 6;

const hour = $(".hour");
const minute = $(".min");
const sec = $(".sec");

let date = new Date();
let hh = date.getHours() * 30;
let mm = date.getMinutes() * deg;
let ss = date.getSeconds() * deg;
