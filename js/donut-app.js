//import for BurgerMaker class
import BurgerMaker from "./donutmaker.js";

//query selectors for HTML elements
const dMultipButton = document.querySelector(".multip");
const dAutoButton = document.querySelector(".auto");
const donut = document.querySelector(".donut");
const rules = document.querySelector(".rules");
const reset = document.querySelector(".resetbtn");
const music = document.querySelector(".musicbtn");
const themeAudio = new Audio();
let themeToggle = false;

//BurgerMaker object
let burgerMaker = new BurgerMaker();

function buttons() {
    donut.addEventListener('click',()=>{
        burgerMaker.clickDonut();
    })
    
    dMultipButton.addEventListener('click',()=>{
        burgerMaker.clickMultip();
    })
    
    dAutoButton.addEventListener('click',()=>{
        burgerMaker.clickAuto();
    })

    rules.addEventListener('click',()=>{
        alert("1.Click the burger to force Bob to make a burger!\n2.Click Louise to increase the amount of burgers Bob can make per click!\n3.Click Kuchi Kopi to increase the amount of burgers automatically generated every second!");
    })

    reset.addEventListener('click',()=>{
        location.reload();
    })

    music.addEventListener('click',()=>{
        (!themeToggle)?  themeToggle = true: themeToggle = false;

        if(themeToggle){
            themeAudio.src = "./sounds/theme.mp3";
            themeAudio.volume = .5;
            themeAudio.play();
        }else{
            themeAudio.pause();
        }
    })
}

function start(){
    burgerMaker.powerups();
    buttons();
}

start();




