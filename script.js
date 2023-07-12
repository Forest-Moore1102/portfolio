let house = document.querySelector(".house");
let mainPage = document.querySelector(".mainpage");
let aboutMePage = document.querySelector(".abt-me-page");

house.onclick = function () {
   location.href = "about-me.html";
}
let trophycaseButton = document.querySelector(".trophycase");
trophycaseButton.onclick = function () {
   location.href = "achievements.html";
}
let pinboardButton = document.querySelector(".pinboard");
pinboardButtonButton.onclick = function () {
   location.href = "hobbies.html";
}
let deskButton = document.querySelector(".desk");
deskButton.onclick = function () {
   location.href = "projects.html.html";
}
let nextButton1= document.querySelector(".nxt-button-1");
let nextButton2= document.querySelector(".nxt-button-2");
let nextButton3= document.querySelector(".nxt-button-3");
let nextButton4= document.querySelector(".nxt-button-4");
let nextButton5= document.querySelector(".nxt-button-5");

let abtMe1= document.querySelector(".abt-me-1");
let abtMe2= document.querySelector(".abt-me-2");
let abtMe3= document.querySelector(".abt-me-3");
let abtMe4= document.querySelector(".abt-me-4");
let abtMe5= document.querySelector(".abt-me-5");

nextButton1.onclick= function(){
   abtMe2.style.display= "flex";
   abtMe1.style.display= "none";
}
nextButton2.onclick= function(){
   abtMe3.style.display= "flex";
   abtMe2.style.display= "none";
}
nextButton3.onclick= function(){
   abtMe4.style.display= "flex";
   abtMe3.style.display= "none";
}
nextButton4.onclick= function(){
   abtMe4.style.display= "flex";
   abtMe3.style.display= "none";
}
nextButton5.onclick= function(){
   location.href = "index.html";
}