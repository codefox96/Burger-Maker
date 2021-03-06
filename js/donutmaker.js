//query selectors for HTML elements
const dCount = document.querySelector(".donut-num");
const dMultip = document.querySelector(".multip-num");
const dAuto = document.querySelector(".auto-num");

//donut maker class
class BurgerMaker{

    constructor(){
        this._donutCount = 0;
        this._donutMultiplier = 0;
        this._donutMultipPrice = 10;
        this._donutAutoClick = 0;
        this._donutAutoPrice = 100;
        this._activateAuto = false;
        this._themeToggle = true;
    }

    

    playSound(){
        const testAudio = new Audio();
        testAudio.volume = .2;

        const random = Math.floor(Math.random() * (1000 - 1) + 1);
        const randomSound = Math.floor(Math.random() * (8-0) + 0);

        const sndArray = ["snipers.mp3","fine.mp3","kidding.mp3","love.mp3","wife.mp3","done.mp3","obvi.mp3","fire.mp3","wrong.mp3"];
        
        if(random % 100 === 0){
            testAudio.src = `./sounds/${sndArray[randomSound]}`;
            testAudio.play();
        }

    }

    clickDonut(){

        if(this._donutMultiplier===0){
            this._donutCount++;
            dCount.innerHTML = Math.round(this._donutCount);
        }else{
            this._donutCount += Math.pow(1.2,this._donutMultiplier);
            dCount.innerHTML = Math.round(this._donutCount);
        }

        this.powerups();
        this.playSound();
  
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

        this.playSound();
        this.powerups();
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
    

        if(!this._activateAuto && this._donutAutoClick>0){
            this._activateAuto === true;

            setInterval((()=>{
                this._donutCount += this._donutAutoClick*Math.pow(1.2,this._donutMultiplier);
                dCount.innerHTML = Math.round(this._donutCount);
                this.playSound();
                this.powerups();
            }),1000);
        }

        this.powerups();
    }

    powerups() {

        (this._donutCount < this._donutMultipPrice)? document.getElementById("mPic5").style.opacity = "0.3":
        document.getElementById("mPic5").style.opacity = "1";

        (this._donutCount < this._donutAutoPrice)? document.getElementById("mPic6").style.opacity = "0.3":
        document.getElementById("mPic6").style.opacity = "1";

        document.querySelector(".price5").innerText = `${Math.round(this._donutMultipPrice)}`;
        document.querySelector(".price6").innerText = `${Math.round(this._donutAutoPrice)}`;
    }

    


}


export default BurgerMaker;
