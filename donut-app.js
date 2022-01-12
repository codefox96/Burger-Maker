import DonutMaker from "./donutmaker.js";

const dCount = document.querySelector(".donut-num");
const dMultip = document.querySelector(".multip-amount");
const dAuto = document.querySelector(".auto-count");
const dMultipButton = document.querySelector(".multip");
const dAutoButton = document.querySelector(".auto");
const donut = document.querySelector(".donut");

let dm = new DonutMaker();



donut.addEventListener('click',()=>{
    dm.clickDonut();
    console.log("Donut Click");
})

dMultipButton.addEventListener('click',()=>{
    dm.clickMultip();
    console.log("Multip Click");
})

dAutoButton.addEventListener('click',()=>{
    dm.clickAuto();
    console.log("Auto Click");
})

