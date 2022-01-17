import DonutMaker from "./donutmaker.js";

const dMultipButton = document.querySelector(".multip");
const dAutoButton = document.querySelector(".auto");
const donut = document.querySelector(".donut");
const rules = document.querySelector(".rules");

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

}

dm.powerups();
wirebuttons();




