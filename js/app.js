console.log("clicked")


class Player1 {

  constructor() {
    this.name = ""
    this.scoreValue = 0;
    this.accountBalance = 200;
    // this.player1Left = 0;
    this.playDice1 = 0;
    this.Player2 = 0;
    this.coupon = [""]
    this.countClicks = 0
  }

  getcountClicks() {
    return this.countClicks
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

  displayalert(result) {
    const resultDiv = document.querySelector(".displayAlert")
    resultDiv.innerHTML = result;
  }

  accountBalancePlayer1 = () => {
    const balDiv = document.querySelector('.balance')
    balDiv.innerHTML = this.accountBalance
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

      this.earnAndLoseMoney()
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

  earnAndLoseMoney() {
    if(this.scoreValue === 2) {
      this.accountBalance = this.accountBalance - 20 //minus
      this.displayalert("“Drunk in charge” fine $20")
      this.accountBalancePlayer1()
    } else if (this.scoreValue === 3){
      this.accountBalance = this.accountBalance + 100 //+100
      this.displayalert("Life Insurance matues. Collect $100")
      this.accountBalancePlayer1()
    } else if (this.scoreValue === 4){
      this.accountBalance = this.accountBalance + 100  // +100
      this.displayalert("Bank pays you dividend of $100")
      this.accountBalancePlayer1()
    } else if (this.scoreValue === 5){
      this.accountBalance = this.accountBalance  //nothing
      this.displayalert("Go directly to Jail")
      this.accountBalancePlayer1()
      let userInput = prompt("Do you have out of Jail coupn: Yes/No")
      if(userInput === "yes" || userInput === "Yes" || userInput === "y"){
        if(this.coupon[0] === "Get out of Jail free"){
          this.accountBalance = this.accountBalance + 50
          this.displayalert("Since you have coupon. You are free to go.")
          }else {
            this.displayalert("Sorry! it looks like you don't have the coupon.")
          }
        }
    } else if (this.scoreValue === 6){
      this.accountBalance = this.accountBalance - 50 //minus
      this.displayalert("You have been elected Chairman of the Board. Pay other player $50")
      this.accountBalancePlayer1()
    } else if (this.scoreValue === 7){
      this.accountBalance = this.accountBalance + 350
      this.displayalert("Your building loan matures. Receive $350")
      this.accountBalancePlayer1()
    } else if (this.scoreValue === 8){
      this.accountBalance = this.accountBalance + 250
      this.displayalert("You have won a crossword competition. Collect $250.")
      this.accountBalancePlayer1()
    } else if (this.scoreValue === 9){
      this.accountBalance = this.accountBalance + 0
      let theCard = 50
      this.coupon.push("Get out of Jail free")
      this.displayalert("you recieved Get out of Jail free. The card may be needed, or sold")
      this.accountBalancePlayer1()
      let userIn = prompt("Do you want to sell your coupon? Yes/No")
      if(userIn === "yes" || userIn === "Yes" || userIn === "y")
      {
        this.accountBalance = this.accountBalance + theCard
        this.displayalert("You have sold your jail free card")
        this.accountBalancePlayer1()
      }else {
        this.displayalert("You have recieved a out of jail in free card. Use your jail free card when needed")
      }
    } else if (this.scoreValue === 10){
      if(this.accountBalance > 300){
        let userInput = prompt("Do you want to purchase land in $300")
        if(userInput === "yes" || userInput === "Yes" || userInput === "y"){
          this.accountBalance = this.accountBalance - 300
          this.displayalert("You have bought a land.")
          this.accountBalancePlayer1()
        }

      }
    }else if (this.scoreValue === 11){
      this.accountBalance = this.accountBalance + 100
      this.displayalert("Your Xmas fund matures. Collect $100")
      this.accountBalancePlayer1()
    }else if (this.scoreValue === 12){
      this.accountBalance = this.accountBalance - 150
      this.displayalert("Pay school tax of $150")
      this.accountBalancePlayer1()
    }

}

}


class Player2 {
  constructor() {
    this.name = "";
    this.scoreValue = 0;
    this.accountBalance = 200;
    this.coupon = [""]
    this.countClicks = 0
  }

  getcountClicks() {
    return this.countClicks
  }

  getScore() {
    return this.scoreValue
  }

  displayResult(result) {
    const resultDiv = document.querySelector(".resultDiv")
    resultDiv.innerHTML = result;
  }

  displayalert(result) {
    const resultDiv = document.querySelector(".displayAlert-2")
    resultDiv.innerHTML = result;
  }

  accountBalancePlayer2 = () => {
    const balDiv = document.querySelector('.balance-2')
    balDiv.innerHTML = this.accountBalance
  }

  player2RollDice = (firstPlayer) => {

    const secondPlayerbtn = document.getElementById("secondPlayerbtn")
    secondPlayerbtn.addEventListener("click", ()=>{
      console.log(firstPlayer.accountBalance)
      this.countClicks +=1

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
        this.earnAndLoseMoney()

        if(this.countClicks === 6){
          if(firstPlayer.accountBalance > this.accountBalance){
            this.displayResult("First round winner is Player 1")
          } else if(firstPlayer.accountBalance < this.accountBalance){
            this.displayResult("First round winner is Player 2")
          } else if(firstPlayer.accountBalance === this.accountBalance){
            this.displayResult("It's a tie")
          }
        }
        return this.scoreValue 

    })

  }

  earnAndLoseMoney() {
    if(this.scoreValue === 2) {
      this.accountBalance = this.accountBalance - 20 //minus
      this.displayalert("“Drunk in charge” fine $20")
      this.accountBalancePlayer2()
    } else if (this.scoreValue === 3){
      this.accountBalance = this.accountBalance + 100 //+100
      this.displayalert("Life Insurance matues. Collect $100")
      this.accountBalancePlayer2()
    } else if (this.scoreValue === 4){
      this.accountBalance = this.accountBalance + 100  // +100
      this.displayalert("Bank pays you dividend of $100")
      this.accountBalancePlayer2()
    } else if (this.scoreValue === 5){
      this.accountBalance = this.accountBalance  //nothing
      this.displayalert("Go directly to Jail")
      this.accountBalancePlayer2()
      let userInput = prompt("Do you have out of Jail coupn: Yes/No")
      if(userInput === "yes" || userInput === "Yes" || userInput === "y"){
        if(this.coupon[0] === "Get out of Jail free"){
          this.accountBalance = this.accountBalance + 50
          this.displayalert("Since you have coupon. You are free to go.")
          }else {
            this.displayalert("Sorry! it looks like you don't have the coupon.")
          }
        }
    } else if (this.scoreValue === 6){
      this.accountBalance = this.accountBalance - 50 //minus
      this.displayalert("You have been elected Chairman of the Board. Pay other player $50")
      this.accountBalancePlayer2()
    } else if (this.scoreValue === 7){
      this.accountBalance = this.accountBalance + 350
      this.displayalert("Your building loan matures. Receive $350")
      this.accountBalancePlayer2()
    } else if (this.scoreValue === 8){
      this.accountBalance = this.accountBalance + 250
      this.displayalert("You have won a crossword competition. Collect $250.")
      this.accountBalancePlayer2()
    } else if (this.scoreValue === 9){
      this.displayalert("You recived Get out of Jail free card. The card may be needed, or sold")
      this.accountBalance = this.accountBalance + 0
      let theCard = 50
      this.coupon.push("Get out of Jail free")
      this.accountBalancePlayer2()
      let userIn = prompt("Do you want to sell your coupon? Yes/No")
      if(userIn === "yes" || userIn === "Yes" || userIn === "y")
      {
        this.accountBalance = this.accountBalance + theCard
        this.displayalert("You have sold your jail free card")
        this.accountBalancePlayer2()
      }else {
        this.displayalert("You have recieved a out of jail in free card. Use your jail free card when needed")
      }
    } else if (this.scoreValue === 10){
      if(this.accountBalance > 300){
        let userInput = prompt("Do you want to purchase land in $300")
        if(userInput === "yes" || userInput === "Yes" || userInput === "y"){
          this.accountBalance = this.accountBalance - 300
          this.displayalert("You have bought a land.")
          this.accountBalancePlayer2()
        }

      }
    }else if (this.scoreValue === 11){
      this.accountBalance = this.accountBalance + 100
      this.displayalert("Your Xmas fund matures. Collect $100")
      this.accountBalancePlayer2()
    }else if (this.scoreValue === 12){
      this.accountBalance = this.accountBalance - 150
      this.displayalert("Pay school tax of $150")
      this.accountBalancePlayer2()
    }

}

// getWinnerof1stRound(firstPlayer) {
//   const player = []
//   player.push(firstPlayer.accountBalancePlayer1())
//   console.log(player)
//   if(this.countClicks === 6) {
    

//   }else {console.log(`error`)}



// }

}


const firstPlayer = new Player1()
const secondPlayer = new Player2()



firstPlayer.getScore()
firstPlayer.player1RollDice()
firstPlayer.accountBalancePlayer1()



secondPlayer.player2RollDice(firstPlayer)
secondPlayer.accountBalancePlayer2()
// secondPlayer.getWinnerof1stRound(firstPlayer)
secondPlayer.getcountClicks()

// firstPlayer.anim()


