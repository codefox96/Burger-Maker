import DonutMaker from "./donutmaker.js";

const dMultipButton = document.querySelector(".multip");
const dAutoButton = document.querySelector(".auto");
const donut = document.querySelector(".donut");
const rules = document.querySelector(".rules");
const reset = document.querySelector(".resetbtn");
const music = document.querySelector(".musicbtn");
const themeAudio = new Audio();
let themeToggle = false;

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
        
        let x = document.createElement("p").innerText = ` \n This is a test!`;
        rules.append(x);

    })

    reset.addEventListener('click',()=>{
        location.reload();
    })


    //Not working
    music.addEventListener('click',()=>{
        
            //try while even continue
            if(themeToggle === false){
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




