import DonutMaker from "./donutmaker.js";

const dMultipButton = document.querySelector(".multip");
const dAutoButton = document.querySelector(".auto");
const donut = document.querySelector(".donut");
const rules = document.querySelector(".rules");
const reset = document.querySelector(".resetbtn");
const music = document.querySelector(".musicbtn");
const themeAudio = new Audio();
let themeToggle = false;
let rulesToggle = false;

let dm = new DonutMaker();

function wirebuttons() {
    donut.addEventListener('click',()=>{
        dm.clickDonut();
        console.log("Donut Click");
    })
    
    dMultipButton.addEventListener('click',()=>{
        dm.clickMultip();
        console.log("Multip Click");

        // const ranNum = document.createElement("p");
        // ranNum.innerText="90000000000000001";
        // dMultipButton.append(ranNum);
    })
    
    dAutoButton.addEventListener('click',()=>{
        dm.clickAuto();
        console.log("Auto Click");
    })

    rules.addEventListener('click',()=>{
        
        // if(!rulesToggle){
        //     rulesToggle = true;
        //     rules.innerHTML = `x<br>x`
        // }else{
        //     rulesToggle = false;
        //     rules.innerHTML = `<p>Rules<p>`
        // }
        
        alert("1.Click the burger to force Bob to make a burger!\n2.Click Louise to increase the amount of burgers Bob can make per click!\n3.Click Kuchi Kopi to increase the amount of burgers automatically generated every second!")

    })

    reset.addEventListener('click',()=>{
        location.reload();
    })


    //Not working
    music.addEventListener('click',()=>{
        
            //try while even continue
            if(!themeToggle){
                themeToggle = true;
            }else{
                themeToggle = false;
            }

            
            if(themeToggle){
                
                themeAudio.src = "./sounds/theme.mp3";
                themeAudio.volume = .5;

                themeAudio.play();
                
                
            }else{
                themeAudio.pause();
            }
                
        
        
    })

    console.log("wor");

}

dm.powerups();
wirebuttons();




