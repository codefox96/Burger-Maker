const dCount = document.querySelector(".donut-count");
const dMultip = document.querySelector(".multip-amount");
const dAuto = document.querySelector(".auto-count");
const dMultipButton = document.querySelector(".multip");
const dAutoButton = document.querySelector(".auto");
const donut = document.querySelector(".donut");

class DonutMaker{

    constructor(){
        this._donutCount = 1;
        this._donutMultiplier = 1;
        this._donutMultipPrice = 10;
        this._donutAutoClick = 1;
        this._donutAutoPrice = 100;
        this._activateAuto = false;
    }

    clickDonut(){
        // console.log(this._donutCount);

        if(this._donutMultiplier===0){
            this._donutCount++;
            console.log(this._donutCount);
        }else{
            this._donutCount += Math.pow(1.2,this._donutMultiplier);
            console.log(this._donutCount);
        }
    }

    clickMultip(){
        if(this._donutCount>=this._donutMultipPrice){
            this._donutMultiplier++;
            this._donutMultipPrice*=1.1;
            console.log(this._donutMultipPrice);
        }
    }

    clickAuto(){
        if(this._donutCount>=this._donutAutoPrice){
            this._donutAutoClick++;
            this._donutAutoPrice*=1.1;


            // console.log(this._donutAutoPrice);
        }

        if(this._activateAuto === false && this._donutAutoClick>0){
            this._activateAuto === true;

            setInterval((()=>{
                this._donutCount += this._donutAutoClick*Math.pow(1.2,this._donutMultiplier);
                console.log(this._donutCount);
            }),1000);
        }
    }


}

// apptest
let dm = new DonutMaker();

donut.addEventListener('click',()=>{
    dm.clickAuto();
})

