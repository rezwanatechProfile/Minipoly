console.log("clicked")


class Player1 {

  constructor() {
    this.name = ""
    this.scoreValue = 0;
    this.accountBalance = 100;
    // this.player1Left = 0;
    this.playDice1 = 0;
    this.Player2 = 0;

  }


  getplayDice1() {
    return this.playDice1
  }


  getAccountBalance() {
    return this.accountBalance
  }

  getScore() {
    return this.scoreValue
  }

  displayResult(result) {
    const resultDiv = document.querySelector(".resultDiv")
    resultDiv.innerHTML = result;
  }

  player1RollDice = () => {

    const firstPlayerbtn = document.getElementById("firstPlayerbtn")

    firstPlayerbtn.addEventListener("click", ()=>{

      let dice = document.querySelectorAll("img");
      dice.forEach(function(die) {
        die.classList.add("roll")
      })

      setTimeout(function(){
        dice.forEach(function(die){
          die.classList.remove("roll");
        })
      }, 1000)

      this.playDice1 = Math.floor(Math.random() * 6) + 1;
      const play1Dice = `./img/Dice-${this.playDice1}.svg`;
      document.getElementById("img1").setAttribute("src", play1Dice);

      this.playDice2 = Math.floor(Math.random() * 6) + 1
      const play2Dice = `./img/Dice-${this.playDice2}.svg`;
      document.getElementById("img2").setAttribute("src", play2Dice);

      this.scoreValue = (this.playDice1 + this.playDice2)
      this.displayResult(`Total role is: ${this.getScore()}`)

      this.earnMoney()
      return this.scoreValue

    } )


  }

  // anim() {
  //   document.addEventListener('keydown', handleKeys)
  //   let player1Left = 0;
  //   let charDiv = document.getElementById("character")
  //   function handleKeys(e){
  //     let keyPress = e.code
  //     console.log(this.scoreValue)
  //     if(keyPress === "ArrowRight"){
  //       console.log("right arrow pressed")
  //         player1Left += 1
  //         console.log(player1Left)
  //         charDiv.style.left = player1Left +'px'
  //     }
  //   }
  // }

  earnMoney() {

    // if(this.scoreValue <= 10) {
    //   this.displayResult("you own $100")
    // }

  }

}

class Player2 {
  constructor() {
    this.name = "";
    this.scoreValue = 0;
    this.accountBalance = 0;
  }

  displayResult(result) {
    const resultDiv = document.querySelector(".resultDiv");
    resultDiv.innerHTML = result;
  }

  getScore() {
    return this.scoreValue;
  }

  player2RollDice = () => {

    const secondPlayerbtn = document.getElementById("secondPlayerbtn")

    secondPlayerbtn.addEventListener("click", ()=>{

      let dice = document.querySelectorAll("img");
      dice.forEach(function (die) {
        die.classList.add("roll");
      });

      setTimeout(function () {
        dice.forEach(function (die) {
          die.classList.remove("roll");
        });

      }, 1000);

        const playDice1 = Math.floor(Math.random() * 6) + 1;
        const play1Dice = `./img/Dice-${playDice1}.svg`;
        document.getElementById("img1").setAttribute("src", play1Dice);
        const playDice2 = Math.floor(Math.random() * 6) + 1;
        const play2Dice = `./img/Dice-${playDice2}.svg`;
        document.getElementById("img2").setAttribute("src", play2Dice);

        this.scoreValue = playDice1 + playDice2;
        this.displayResult(`Total role is: ${this.scoreValue}`)


    })

  };



}


const firstPlayer = new Player1()
const secondPlayer = new Player2()



firstPlayer.getScore()
firstPlayer.player1RollDice()


secondPlayer.player2RollDice()

// firstPlayer.anim()


