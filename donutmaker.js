const dCount = document.querySelector(".donut-num");
const dMultip = document.querySelector(".multip-num");
const dAuto = document.querySelector(".auto-num");

class DonutMaker{

    

    constructor(){
        this._donutCount = 0;
        this._donutMultiplier = 0;
        this._donutMultipPrice = 10;
        this._donutAutoClick = 0;
        this._donutAutoPrice = 10;
        this._activateAuto = false;
    }

    clickDonut(){
        // console.log(this._donutCount);

        if(this._donutMultiplier===0){
            this._donutCount++;
            dCount.innerHTML = Math.round(this._donutCount);
            // console.log(Math.round(this._donutCount));
        }else{
            this._donutCount += Math.pow(1.2,this._donutMultiplier);
            dCount.innerHTML = Math.round(this._donutCount);
        }
    }

    clickMultip(){
        if(this._donutCount>=this._donutMultipPrice){
            dCount.innerHTML = Math.round(this._donutCount-=this._donutMultipPrice);
            this._donutMultiplier++;
            dMultip.innerHTML = Math.round(this._donutMultiplier);
            this._donutMultipPrice*=1.1;
        }else{
            alert("NOT ENOUGH bURGErs!")
        }
    }

    clickAuto(){
        if(this._donutCount>=this._donutAutoPrice){
            this._donutAutoClick++;
            dCount.innerHTML = Math.round(this._donutCount-=this._donutAutoPrice);
            dAuto.innerHTML = Math.round(this._donutAutoClick);
            this._donutAutoPrice*=1.1;
        }else{
            alert("NOT ENOUGH bURGErs!")
        }
    

        if(this._activateAuto === false && this._donutAutoClick>0){
            this._activateAuto === true;

            setInterval((()=>{
                this._donutCount += this._donutAutoClick*Math.pow(1.2,this._donutMultiplier);
                dCount.innerHTML = Math.round(this._donutCount);
            }),1000);
        }
    }


}

export default DonutMaker;

// apptest
// let dm = new DonutMaker();

// donut.addEventListener('click',()=>{
//     dm.clickDonut();
//     console.log("Donut Click");
// })

// dMultipButton.addEventListener('click',()=>{
//     dm.clickMultip();
//     console.log("Multip Click");
// })

// dAutoButton.addEventListener('click',()=>{
//     dm.clickAuto();
//     console.log("Auto Click");
// })