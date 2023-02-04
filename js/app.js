//Player 1 class

class Player1 {
  constructor() {
    this.name = "";
    this.scoreValue = 0;
    this.accountBalance = 100;
    this.playDice1 = 0;
    this.coupon = [""];
    this.countClicks = 0;
    this.countOfAssets = 0;
    this.chances = [
      "“Drunk in charge” fine $20",
      "Life Insurance matues. Collect $100",
      "Bank pays you dividend of $100",
      "You have been elected Chairman of the Board. Pay other player $50",
      "Your building loan matures. Receive $350",
      "You have won a crossword competition. Collect $250",
      "you recieved Get out of Jail free Card",
      "Your Xmas fund matures. Collect $100",
      "Pay school tax of $150",
    ];
  }

  getcountClicks() {
    return this.countClicks;
  }

  getAccountBalance() {
    return this.accountBalance;
  }

  getScore() {
    return this.scoreValue;
  }
// Functions to display various result
  displayResult(result) {
    const resultDiv = document.querySelector(".resultDiv");
    resultDiv.innerHTML = result;
  }

  displayalert(result) {
    const resultDiv = document.querySelector(".displayAlert");
    resultDiv.innerHTML = result;
  }

  chanceDisplay(result) {
    const chanceDiv = document.querySelector(".chanceDisplay");
    chanceDiv.innerHTML = result;
  }
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function to update account balance
  accountBalancePlayer1 = () => {
    const balDiv = document.querySelector(".balance");
    balDiv.innerHTML = this.accountBalance;
  };
  //asset balance
  assetBalancePlayer1() {
    const assetDiv = document.querySelector(".assetBalance");
    assetDiv.innerHTML = this.countOfAssets;
  }

//Function for Player one to roll the dice
  player1RollDice = () => {
    const firstPlayerbtn = document.getElementById("firstPlayerbtn");
    document.getElementById("secondPlayerbtn").disabled = true;

    firstPlayerbtn.addEventListener("click", () => {
      document.getElementById("firstPlayerbtn").disabled = true; // make the button disbale after the click
      document.getElementById("secondPlayerbtn").disabled = false;// make 2nd player button enable

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

      this.scoreValue = playDice1;
      this.displayResult(`Total role is: ${this.getScore()}`);

      // this.earnAndLoseMoney();

      return this.scoreValue;
    });
  };

// function to pick a chance
  takeChance(secondPlayer) {
    const chancebtn = document.querySelector(".chanceBtn");

    chancebtn.addEventListener("click", () => {
      const randomChoice = Math.floor(Math.random() * this.chances.length);

      if (this.chances[randomChoice] === this.chances[0]) {
        this.accountBalance = this.accountBalance - 20;
        this.chanceDisplay("“Drunk in charge” fine $20");
        this.accountBalancePlayer1();
      } else if (this.chances[randomChoice] === this.chances[1]) {
        this.accountBalance = this.accountBalance + 100;
        this.chanceDisplay("Life Insurance matues. Collect $100");
        this.accountBalancePlayer1();
      } else if (this.chances[randomChoice] === this.chances[2]) {
        this.accountBalance = this.accountBalance + 100;
        this.chanceDisplay("Bank pays you dividend of $100");
        this.accountBalancePlayer1();
      } else if (this.chances[randomChoice] === this.chances[3]) {
        this.accountBalance = this.accountBalance - 50;
        this.chanceDisplay(
          "You have been elected Chairman of the Board. Pay other player $50"
        );
        this.accountBalancePlayer1();
        secondPlayer.accountBalance = secondPlayer.accountBalance + 50;
        secondPlayer.accountBalancePlayer2();
      } else if (this.chances[randomChoice] === this.chances[4]) {
        this.accountBalance = this.accountBalance + 350;
        this.chanceDisplay("Your building loan matures. Receive $350");
        this.accountBalancePlayer1();
      } else if (this.chances[randomChoice] === this.chances[5]) {
        this.accountBalance = this.accountBalance + 250;
        this.chanceDisplay(
          "You have won a crossword competition. Collect $250"
        );
        this.accountBalancePlayer1();
      } else if (this.chances[randomChoice] === this.chances[6]) {
        this.accountBalance = this.accountBalance;
        this.chanceDisplay("you recieved Get out of Jail free Card");
        this.coupon.push("Jail free Card");
        this.accountBalancePlayer1();
      } else if (this.chances[randomChoice] === this.chances[7]) {
        this.accountBalance = this.accountBalance + 100;
        this.chanceDisplay("Your Xmas fund matures. Collect $100");
        this.accountBalancePlayer1();
      } else if (this.chances[randomChoice] === this.chances[8]) {
        this.accountBalance = this.accountBalance - 150;
        this.chanceDisplay("Pay school tax of $150");
        this.accountBalancePlayer1();
      }

      if (this.coupon[0] === "Jail free Card") {
        let userInput = propmt("Do you want to sell your coupon?");
        if (userInput === "yes" || userInput === "y" || userInput === "Yes") {
          this.accountBalance = this.accountBalance + 50;
          this.coupon.splice(this.coupon.length - 1, 1);
          this.chanceDisplay("You have sold your jail free card for $50");
        } else {
          this.chanceDisplay("The card may be needed later, or sold");
        }
      }
    });
  }

  showCoupon() {
    let userIn = prompt(
      "You can recieve $20 if you have Jail free card. Do you have Jail free card? Y/N");
    if (userIn === "yes" || userIn === "Yes" || userIn === "y") {
      if (this.coupon[0] === "Get out of Jail free") {
        this.accountBalance = this.accountBalance + 20;
        this.coupon.splice(this.coupon.length - 1, 1);
        this.displayalert("You are free to go");
        this.accountBalancePlayer1();
      }
    } else {
      this.displayalert("You do not have Jail free card.");
    }
  }

  // getInitialDollar(){
  //   const dollarBtn = document.querySelector('.dollarBtn')
  //   dollarBtn.addEventListener("click", () => {
  //     this.countClicks += 1;
  //     if (this.countClicks % 2 === 0) {
  //       this.accountBalance = this.accountBalance + 200;
  //       this.accountBalancePlayer1();
  //     }

  //   })

  // }

  // div1(){
  //   const div1Button = document.getElementById("square1");

  //   div1Button.addEventListener("click", () => {
  //     this.countClicks += 1;
  //     console.log(this.countClicks);

  //     if (this.countClicks % 2 !== 0) {
  //       const circle1 = document.querySelector(".circle1");
  //       document.getElementById("square1").append(circle1);

  //       if (div1Button.hasAttribute("id", "square1")) {
  //         alert("Please click the Initial cash to collect $200");
  //         this.getInitialDollar()
  //       }
  //     }
  //   });
  // }

  div2() {
    const div2Button = document.getElementById("square2");
    div2Button.addEventListener("click", () => {
      this.countClicks += 1;
      console.log(this.countClicks);

      if (this.countClicks % 2 !== 0) {
        const circle1 = document.querySelector(".circle1");
        document.getElementById("square2").appendChild(circle1);

        if (div2Button.hasAttribute("id", "square2")) {
          let userInput = prompt("Do you want to purchase Baltic Avenue");
          if (userInput === "yes" || userInput === "y" || userInput === "Yes") {
            this.accountBalance = this.accountBalance - 60;
            this.displayalert("You have bought a land");
            this.accountBalancePlayer1();
            this.assetBalancePlayer1();
          } else {
            this.displayalert("You have chose the option not to buy");
          }
        }
      }
    });
  }

  div3() {
    const div3Button = document.getElementById("square3");

    div3Button.addEventListener("click", () => {
      this.countClicks += 1;
      console.log(this.countClicks);

      if (this.countClicks % 2 !== 0) {
        const circle1 = document.querySelector(".circle1");
        document.getElementById("square3").append(circle1);

        if (div3Button.hasAttribute("id", "square3")) {
          alert("Please select one card from Chance");
          this.takeChance(secondPlayer);
        }
      }
    });
  }

  div4() {
    const div4Button = document.getElementById("square4");

    div4Button.addEventListener("click", () => {
      this.countClicks += 1;
      console.log(this.countClicks);

      if (this.countClicks % 2 !== 0) {
        const circle1 = document.querySelector(".circle1");
        document.getElementById("square4").append(circle1);

        if (div4Button.hasAttribute("id", "square4")) {
          let userInput = prompt("Do you want to purchase Vermont Avenue? Y/N");
          if (userInput === "yes" || userInput === "y" || userInput === "Yes") {
            this.accountBalance = this.accountBalance - 80;
            this.countOfAssets = this.countOfAssets + 1;
            this.displayalert("You have bought a land");
            this.accountBalancePlayer1();
            this.assetBalancePlayer1();
          } else {
            this.displayalert("You have chose the option not to buy");
          }
        }
      }
    });
  }

  div5() {
    const div5Button = document.getElementById("square5");
    div5Button.addEventListener("click", () => {
      this.countClicks += 1;
      console.log(this.countClicks);

      if (this.countClicks % 2 !== 0) {
        const circle1 = document.querySelector(".circle1");
        document.getElementById("square5").append(circle1);

        if (div5Button.hasAttribute("id", "square5")) {
          alert("Please select one card from Chance");
          this.takeChance(secondPlayer);
        }
      }
    });
  }

  div6 = () => {
    const div6Button = document.getElementById("square6");
    div6Button.addEventListener("click", () => {
      this.countClicks += 1;
      console.log(this.countClicks);

      if (this.countClicks % 2 !== 0) {
        const circle1 = document.querySelector(".circle1");
        document.getElementById("square6").append(circle1);

        if (div6Button.hasAttribute("id", "square6")) {
          let userInput = prompt("Do you want to purchase Oriental Avenue? Y/N");
          if (userInput === "yes" || userInput === "y" || userInput === "Yes") {
            this.accountBalance = this.accountBalance - 80;
            this.countOfAssets = this.countOfAssets + 1;
            this.displayalert("You have bought a land");
            this.accountBalancePlayer1();
            this.assetBalancePlayer1();
          } else {
            this.displayalert("You have chose the option not to buy");
          }
        }
      }
    });
  };

  div7 = () => {
    const div7Button = document.getElementById("square7");
    div7Button.addEventListener("click", () => {
      this.countClicks += 1;
      console.log(this.countClicks);

      if (this.countClicks % 2 !== 0) {
        const circle1 = document.querySelector(".circle1");
        document.getElementById("square7").append(circle1);

        if (div7Button.hasAttribute("id", "square7")) {
          let userInput = prompt("Do you want to purchase Virginia Avenue? Y/N");
          if (userInput === "yes" || userInput === "y" || userInput === "Yes") {
            this.accountBalance = this.accountBalance - 100;
            this.countOfAssets = this.countOfAssets + 1;
            this.displayalert("You have bought a land");
            this.accountBalancePlayer1();
            this.assetBalancePlayer1();
          } else {
            this.displayalert("You have chose the option not to buy");
          }
        }
      }
    });
  };

  div8() {
    const div8Button = document.getElementById("square8");
    div8Button.addEventListener("click", () => {
      this.countClicks += 1;
      console.log(this.countClicks);

      if (this.countClicks % 2 !== 0) {
        const circle1 = document.querySelector(".circle1");
        document.getElementById("square8").append(circle1);

        if (div8Button.hasAttribute("id", "square8")) {
          alert("Please select one card from Chance");
          this.takeChance(secondPlayer);
        }
      }
    });
  }

  div9() {
    const div9Button = document.getElementById("square9");
    div9Button.addEventListener("click", () => {
      this.countClicks += 1;
      console.log(this.countClicks);

      if (this.countClicks % 2 !== 0) {
        const circle1 = document.querySelector(".circle1");
        document.getElementById("square9").append(circle1);

        if (div9Button.hasAttribute("id", "square9")) {
          let userInput = prompt("Do you want to purchase Indiana Avenue? Y/N");
          if (userInput === "yes" || userInput === "y" || userInput === "Yes") {
            this.accountBalance = this.accountBalance - 100;
            this.countOfAssets = this.countOfAssets + 1;
            this.displayalert("You have bought a land");
            this.accountBalancePlayer1();
            this.assetBalancePlayer1();
          } else {
            this.displayalert("You have chose the option not to buy");
          }
        }
      }
    });
  }

  div10() {
    const div10Button = document.getElementById("square10");
    div10Button.addEventListener("click", () => {
      this.countClicks += 1;
      console.log(this.countClicks);

      if (this.countClicks % 2 !== 0) {
        const circle1 = document.querySelector(".circle1");
        document.getElementById("square10").append(circle1);

        if (div10Button.hasAttribute("id", "square10")) {
          alert("Please select one card from Chance");
          this.takeChance(secondPlayer);
        }
      }
    });
  }

  div11() {
    const div11Button = document.getElementById("square11");
    div11Button.addEventListener("click", () => {
      this.countClicks += 1;
      console.log(this.countClicks);

      if (this.countClicks % 2 !== 0) {
        const circle1 = document.querySelector(".circle1");
        document.getElementById("square11").append(circle1);

        if (div11Button.hasAttribute("id", "square11")) {
          let userInput = prompt("Do you want to purchase New York Avenue? Y/N");
          if (userInput === "yes" || userInput === "y" || userInput === "Yes") {
            this.accountBalance = this.accountBalance - 150;
            this.countOfAssets = this.countOfAssets + 1;
            this.displayalert("You have bought a land");
            this.accountBalancePlayer1();
            this.assetBalancePlayer1();
          } else {
            this.displayalert("You have chose the option not to buy");
          }
        }
      }
    });
  }

  div12() {
    const div12Button = document.getElementById("square12");
    div12Button.addEventListener("click", () => {
      this.countClicks += 1;
      console.log(this.countClicks);

      if (this.countClicks % 2 !== 0) {
        const circle1 = document.querySelector(".circle1");
        document.getElementById("square12").append(circle1);

        if (div12Button.hasAttribute("id", "square12")) {
          alert("Please select one card from Chance");
          this.takeChance(secondPlayer);
        }
      }
    });
  }

  div13() {
    const div13Button = document.getElementById("square13");
    div13Button.addEventListener("click", () => {
      this.countClicks += 1;
      console.log(this.countClicks);

      if (this.countClicks % 2 !== 0) {
        const circle1 = document.querySelector(".circle1");
        document.getElementById("square13").append(circle1);

        if (div13Button.hasAttribute("id", "square13")) {
          let userInput = prompt("Do you want to purchase Atlantic Avenue? Y/N");
          if (userInput === "yes" || userInput === "y" || userInput === "Yes") {
            this.accountBalance = this.accountBalance - 150;
            this.countOfAssets = this.countOfAssets + 1;
            this.displayalert("You have bought a land");
            this.accountBalancePlayer1();
            this.assetBalancePlayer1();
          } else {
            this.displayalert("You have chose the option not to buy");
          }
        }
      }
    });
  }

  div14() {
    const div14Button = document.getElementById("square14");
    div14Button.addEventListener("click", () => {
      this.countClicks += 1;
      console.log(this.countClicks);

      if (this.countClicks % 2 !== 0) {
        const circle1 = document.querySelector(".circle1");
        document.getElementById("square14").append(circle1);

        if (div14Button.hasAttribute("id", "square14")) {
          alert("Please select one card from Chance");
          this.takeChance(secondPlayer);
        }
      }
    });
  }

  div15() {
    const div15Button = document.getElementById("square15");
    div15Button.addEventListener("click", () => {
      this.countClicks += 1;
      console.log(this.countClicks);

      if (this.countClicks % 2 !== 0) {
        const circle1 = document.querySelector(".circle1");
        document.getElementById("square15").append(circle1);

        if (div15Button.hasAttribute("id", "square15")) {
          alert("You are in jail");
          showCoupon();
        }
      }
    });
  }

  div16() {
    const div16Button = document.getElementById("square16");
    div16Button.addEventListener("click", () => {
      this.countClicks += 1;
      console.log(this.countClicks);

      if (this.countClicks % 2 !== 0) {
        const circle1 = document.querySelector(".circle1");
        document.getElementById("square16").append(circle1);

        if (div16Button.hasAttribute("id", "square16")) {
          let userInput = prompt("Do you want to purchase California Avenue? Y/N");
          if (userInput === "yes" || userInput === "y" || userInput === "Yes") {
            this.accountBalance = this.accountBalance - 200;
            this.countOfAssets = this.countOfAssets + 1;
            this.displayalert("You have bought a land");
            this.accountBalancePlayer1();
            this.assetBalancePlayer1();
          } else {
            this.displayalert("You have chose the option not to buy");
          }
        }
      }
    });
  }

  div17() {
    const div17Button = document.getElementById("square17");
    div17Button.addEventListener("click", () => {
      this.countClicks += 1;
      console.log(this.countClicks);

      if (this.countClicks % 2 !== 0) {
        const circle1 = document.querySelector(".circle1");
        document.getElementById("square17").append(circle1);

        if (div17Button.hasAttribute("id", "square17")) {
          alert("Please select one card from Chance");
          this.takeChance(secondPlayer);
        }
      }
    });
  }

  div18() {
    const div18Button = document.getElementById("square18");
    div18Button.addEventListener("click", () => {
      this.countClicks += 1;
      console.log(this.countClicks);

      if (this.countClicks % 2 !== 0) {
        const circle1 = document.querySelector(".circle1");
        document.getElementById("square18").append(circle1);

        if (div18Button.hasAttribute("id", "square18")) {
          let userInput = prompt("Do you want to purchase Park Place? Y/N");
          if (userInput === "yes" || userInput === "y" || userInput === "Yes") {
            this.accountBalance = this.accountBalance - 200;
            this.countOfAssets = this.countOfAssets + 1;
            this.displayalert("You have bought a land");
            this.accountBalancePlayer1();
            this.assetBalancePlayer1();
          } else {
            this.displayalert("You have chose the option not to buy");
          }
        }
      }
    });
  }


}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//

//Player 2 class

class Player2 {
  constructor() {
    this.name = "";
    this.scoreValue = 0;
    this.accountBalance = 100;
    this.coupon = [""];
    this.countClicks = 0;
    this.countOfAssets = 0;
    this.chances = [
      "“Drunk in charge” fine $20",
      "Life Insurance matues. Collect $100",
      "Bank pays you dividend of $100",
      "You have been elected Chairman of the Board. Pay other player $50",
      "Your building loan matures. Receive $350",
      "You have won a crossword competition. Collect $250",
      "you recieved Get out of Jail free Card",
      "Your Xmas fund matures. Collect $100",
      "Pay school tax of $150",
    ];
  }

  getcountClicks() {
    return this.countClicks;
  }

  getAccountBalance() {
    return this.accountBalance;
  }


  getScore() {
    return this.scoreValue;
  }

  // Functions to display various result
  displayResult(result) {
    const resultDiv = document.querySelector(".resultDiv");
    resultDiv.innerHTML = result;
  }

  displayalert(result) {
    const resultDiv = document.querySelector(".displayAlert");
    resultDiv.innerHTML = result;
  }

  chanceDisplay(result) {
    const chanceDiv = document.querySelector(".chanceDisplay");
    chanceDiv.innerHTML = result;
  }
  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // function to update account balance
  accountBalancePlayer2 = () => {
    const balDiv = document.querySelector(".balance-2");
    balDiv.innerHTML = this.accountBalance;
  };
  //asset balance
  assetBalancePlayer2() {
    const assetDiv = document.querySelector(".assetBalance-2");
    assetDiv.innerHTML = this.countOfAssets;
  }

  //roll dice function
  player2RollDice = () => {
    const secondPlayerbtn = document.getElementById("secondPlayerbtn");
    secondPlayerbtn.addEventListener("click", () => {
      document.getElementById("secondPlayerbtn").disabled = true;
      document.getElementById("firstPlayerbtn").disabled = false;
      //counting the click
      // this.countClicks += 1;

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

      this.scoreValue = playDice1;
      this.displayResult(`Total role is: ${this.scoreValue}`);

      return this.scoreValue;
    });
  };

  // function to pick a chance
  takeChance(firstPlayer) {
    const chancebtn = document.querySelector(".chanceBtn");

    chancebtn.addEventListener("click", () => {
      const randomChoice = Math.floor(Math.random() * this.chances.length);

      if (this.chances[randomChoice] === this.chances[0]) {
        this.accountBalance = this.accountBalance - 20;
        this.chanceDisplay("“Drunk in charge” fine $20");
        this.accountBalancePlayer2();
      } else if (this.chances[randomChoice] === this.chances[1]) {
        this.accountBalance = this.accountBalance + 100;
        this.chanceDisplay("Life Insurance matues. Collect $100");
        this.accountBalancePlayer2();
      } else if (this.chances[randomChoice] === this.chances[2]) {
        this.accountBalance = this.accountBalance + 100;
        this.chanceDisplay("Bank pays you dividend of $100");
        this.accountBalancePlayer2();
      } else if (this.chances[randomChoice] === this.chances[3]) {
        this.accountBalance = this.accountBalance - 50;
        this.chanceDisplay(
          "You have been elected Chairman of the Board. Pay other player $50"
        );
        this.accountBalancePlayer2();
        firstPlayer.accountBalance = firstPlayer.accountBalance + 50;
        firstPlayer.accountBalancePlayer1();
      } else if (this.chances[randomChoice] === this.chances[4]) {
        this.accountBalance = this.accountBalance + 350;
        this.chanceDisplay("Your building loan matures. Receive $350");
        this.accountBalancePlayer2();
      } else if (this.chances[randomChoice] === this.chances[5]) {
        this.accountBalance = this.accountBalance + 250;
        this.chanceDisplay(
          "You have won a crossword competition. Collect $250"
        );
        this.accountBalancePlayer2();
      } else if (this.chances[randomChoice] === this.chances[6]) {
        this.accountBalance = this.accountBalance;
        this.chanceDisplay("you recieved Get out of Jail free Card");
        this.coupon.push("Jail free Card");
        this.accountBalancePlayer2();
      } else if (this.chances[randomChoice] === this.chances[7]) {
        this.accountBalance = this.accountBalance + 100;
        this.chanceDisplay("Your Xmas fund matures. Collect $100");
        this.accountBalancePlayer2();
      } else if (this.chances[randomChoice] === this.chances[8]) {
        this.accountBalance = this.accountBalance - 150;
        this.chanceDisplay("Pay school tax of $150");
        this.accountBalancePlayer2();
      }

      if (this.coupon[0] === "Jail free Card") {
        let userInput = propmt("Do you want to sell your coupon?");
        if (userInput === "yes" || userInput === "y" || userInput === "Yes") {
          this.accountBalance = this.accountBalance + 50;
          this.coupon.splice(this.coupon.length - 1, 1);
          this.chanceDisplay("You have sold your jail free card for $50");
        } else {
          this.chanceDisplay("The card may be needed later, or sold");
        }
      }
    });
  }

  showCoupon() {
    let userIn = prompt(
      "You can recieve $20 if you have Jail free card. Do you have Jail free card? Y/N"
    );
    if (userIn === "yes" || userIn === "Yes" || userIn === "y") {
      if (this.coupon[0] === "Get out of Jail free") {
        this.accountBalance = this.accountBalance + 20;
        this.coupon.splice(this.coupon.length - 1, 1);
        this.displayalert("You are free to go");
        this.accountBalancePlayer1();
      }
    } else {
      this.displayalert("You do not have Jail free card.");
    }
  }

  // getDollar() {
  //   const dollarBtn = document.querySelector(".dollarBtn");

  //   dollarBtn.addEventListener("click", () => {
  //     this.accountBalance = this.accountBalance + 200;
  //     this.accountBalancePlayer2();
  //   });
  // }

  // div1() {
  //   const div1Button = document.getElementById("square1");

  //   div1Button.addEventListener("click", () => {
  //     this.countClicks += 1;
  //     console.log(this.countClicks);

  //     if (this.countClicks % 2 === 0) {
  //       const circle2 = document.querySelector(".circle2");
  //       document.getElementById("square1").append(circle2);

  //       if (div1Button.hasAttribute("id", "square1")) {
  //         alert("Please click the Initial cash to collect $200");
  //         this.getDollar();
  //       }
  //     }
  //   });
  // }

  div2() {
    const div2Button = document.getElementById("square2");
    div2Button.addEventListener("click", () => {
      this.countClicks += 1;
      console.log(this.countClicks);

      if (this.countClicks % 2 === 0) {
        const circle2 = document.querySelector(".circle2");
        document.getElementById("square2").appendChild(circle2);

        if (div2Button.hasAttribute("id", "square2")) {
          let userInput = prompt("Do you want to purchase Baltic Avenue");
          if (userInput === "yes" || userInput === "y" || userInput === "Yes") {
            this.accountBalance = this.accountBalance - 60;
            this.displayalert("You have bought a land");
            this.accountBalancePlayer2();
            this.assetBalancePlayer2();
          } else {
            this.displayalert("You have chose the option not to buy");
          }
        }
      }
    });
  }

  div3() {
    const div3Button = document.getElementById("square3");

    div3Button.addEventListener("click", () => {
      this.countClicks += 1;
      console.log(this.countClicks);

      if (this.countClicks % 2 === 0) {
        const circle2 = document.querySelector(".circle2");
        document.getElementById("square3").append(circle2);

        if (div3Button.hasAttribute("id", "square3")) {
          alert("Please select one card from Chance");
          this.takeChance(firstPlayer);
        }
      }
    });
  }

  div4() {
    const div4Button = document.getElementById("square4");

    div4Button.addEventListener("click", () => {
      this.countClicks += 1;
      console.log(this.countClicks);

      if (this.countClicks % 2 === 0) {
        const circle2 = document.querySelector(".circle2");
        document.getElementById("square4").append(circle2);

        if (div4Button.hasAttribute("id", "square4")) {
          let userInput = prompt("Do you want to purchase Vermont Avenue? Y/N");
          if (userInput === "yes" || userInput === "y" || userInput === "Yes") {
            this.accountBalance = this.accountBalance - 80;
            this.countOfAssets = this.countOfAssets + 1;
            this.displayalert("You have bought a land");
            this.accountBalancePlayer2();
            this.assetBalancePlayer2();
          } else {
            this.displayalert("You have chose the option not to buy");
          }
        }
      }
    });
  }

  div5() {
    const div5Button = document.getElementById("square5");
    div5Button.addEventListener("click", () => {
      this.countClicks += 1;
      console.log(this.countClicks);

      if (this.countClicks % 2 === 0) {
        const circle2 = document.querySelector(".circle2");
        document.getElementById("square5").append(circle2);

        if (div5Button.hasAttribute("id", "square5")) {
          alert("Please select one card from Chance");
          this.takeChance(firstPlayer);
        }
      }
    });
  }

  div6 = () => {
    const div6Button = document.getElementById("square6");
    div6Button.addEventListener("click", () => {
      this.countClicks += 1;
      console.log(this.countClicks);

      if (this.countClicks % 2 === 0) {
        const circle2 = document.querySelector(".circle2");
        document.getElementById("square6").append(circle2);

        if (div6Button.hasAttribute("id", "square6")) {
          let userInput = prompt(
            "Do you want to purchase Oriental Avenue? Y/N"
          );
          if (userInput === "yes" || userInput === "y" || userInput === "Yes") {
            this.accountBalance = this.accountBalance - 80;
            this.countOfAssets = this.countOfAssets + 1;
            this.displayalert("You have bought a land");
            this.accountBalancePlayer2();
            this.assetBalancePlayer2();
          } else {
            this.displayalert("You have chose the option not to buy");
          }
        }
      }
    });
  };

  div7 = () => {
    const div7Button = document.getElementById("square7");
    div7Button.addEventListener("click", () => {
      this.countClicks += 1;
      console.log(this.countClicks);

      if (this.countClicks % 2 === 0) {
        const circle2 = document.querySelector(".circle2");
        document.getElementById("square7").append(circle2);

        if (div7Button.hasAttribute("id", "square7")) {
          let userInput = prompt(
            "Do you want to purchase Virginia Avenue? Y/N"
          );
          if (userInput === "yes" || userInput === "y" || userInput === "Yes") {
            this.accountBalance = this.accountBalance - 100;
            this.countOfAssets = this.countOfAssets + 1;
            this.displayalert("You have bought a land");
            this.accountBalancePlayer2();
            this.assetBalancePlayer2();
          } else {
            this.displayalert("You have chose the option not to buy");
          }
        }
      }
    });
  };

  div8() {
    const div8Button = document.getElementById("square8");
    div8Button.addEventListener("click", () => {
      this.countClicks += 1;
      console.log(this.countClicks);

      if (this.countClicks % 2 === 0) {
        const circle2 = document.querySelector(".circle2");
        document.getElementById("square8").append(circle2);

        if (div8Button.hasAttribute("id", "square8")) {
          alert("Please select one card from Chance");
          this.takeChance(firstPlayer);
        }
      }
    });
  }

  div9() {
    const div9Button = document.getElementById("square9");
    div9Button.addEventListener("click", () => {
      this.countClicks += 1;
      console.log(this.countClicks);

      if (this.countClicks % 2 === 0) {
        const circle2 = document.querySelector(".circle2");
        document.getElementById("square9").append(circle2);

        if (div9Button.hasAttribute("id", "square9")) {
          let userInput = prompt("Do you want to purchase Indiana Avenue? Y/N");
          if (userInput === "yes" || userInput === "y" || userInput === "Yes") {
            this.accountBalance = this.accountBalance - 100;
            this.countOfAssets = this.countOfAssets + 1;
            this.displayalert("You have bought a land");
            this.accountBalancePlayer2();
            this.assetBalancePlayer2();
          } else {
            this.displayalert("You have chose the option not to buy");
          }
        }
      }
    });
  }

  div10() {
    const div10Button = document.getElementById("square10");
    div10Button.addEventListener("click", () => {
      this.countClicks += 1;
      console.log(this.countClicks);

      if (this.countClicks % 2 === 0) {
        const circle2 = document.querySelector(".circle2");
        document.getElementById("square10").append(circle2);

        if (div10Button.hasAttribute("id", "square10")) {
          alert("Please select one card from Chance");
          this.takeChance(firstPlayer);
        }
      }
    });
  }

  div11() {
    const div11Button = document.getElementById("square11");
    div11Button.addEventListener("click", () => {
      this.countClicks += 1;
      console.log(this.countClicks);

      if (this.countClicks % 2 === 0) {
        const circle2 = document.querySelector(".circle2");
        document.getElementById("square11").append(circle2);

        if (div11Button.hasAttribute("id", "square11")) {
          let userInput = prompt(
            "Do you want to purchase New York Avenue? Y/N"
          );
          if (userInput === "yes" || userInput === "y" || userInput === "Yes") {
            this.accountBalance = this.accountBalance - 150;
            this.countOfAssets = this.countOfAssets + 1;
            this.displayalert("You have bought a land");
            this.accountBalancePlayer2();
            this.assetBalancePlayer2();
          } else {
            this.displayalert("You have chose the option not to buy");
          }
        }
      }
    });
  }

  div12() {
    const div12Button = document.getElementById("square12");
    div12Button.addEventListener("click", () => {
      this.countClicks += 1;
      console.log(this.countClicks);

      if (this.countClicks % 2 === 0) {
        const circle2 = document.querySelector(".circle2");
        document.getElementById("square12").append(circle2);

        if (div12Button.hasAttribute("id", "square12")) {
          alert("Please select one card from Chance");
          this.takeChance(firstPlayer);
        }
      }
    });
  }

  div13() {
    const div13Button = document.getElementById("square13");
    div13Button.addEventListener("click", () => {
      this.countClicks += 1;
      console.log(this.countClicks);

      if (this.countClicks % 2 === 0) {
        const circle2 = document.querySelector(".circle2");
        document.getElementById("square13").append(circle2);

        if (div13Button.hasAttribute("id", "square13")) {
          let userInput = prompt(
            "Do you want to purchase Atlantic Avenue? Y/N"
          );
          if (userInput === "yes" || userInput === "y" || userInput === "Yes") {
            this.accountBalance = this.accountBalance - 150;
            this.countOfAssets = this.countOfAssets + 1;
            this.displayalert("You have bought a land");
            this.accountBalancePlayer2();
            this.assetBalancePlayer2();
          } else {
            this.displayalert("You have chose the option not to buy");
          }
        }
      }
    });
  }

  div14() {
    const div14Button = document.getElementById("square14");
    div14Button.addEventListener("click", () => {
      this.countClicks += 1;
      console.log(this.countClicks);

      if (this.countClicks % 2 === 0) {
        const circle2 = document.querySelector(".circle2");
        document.getElementById("square14").append(circle2);

        if (div14Button.hasAttribute("id", "square14")) {
          alert("Please select one card from Chance");
          this.takeChance(firstPlayer);
        }
      }
    });
  }

  div15() {
    const div15Button = document.getElementById("square15");
    div15Button.addEventListener("click", () => {
      this.countClicks += 1;
      console.log(this.countClicks);

      if (this.countClicks % 2 === 0) {
        const circle2 = document.querySelector(".circle2");
        document.getElementById("square15").append(circle2);

        if (div15Button.hasAttribute("id", "square15")) {
          alert("You are in jail");
          this.showCoupon();
        }
      }
    });
  }

  div16() {
    const div16Button = document.getElementById("square16");
    div16Button.addEventListener("click", () => {
      this.countClicks += 1;
      console.log(this.countClicks);

      if (this.countClicks % 2 === 0) {
        const circle2 = document.querySelector(".circle2");
        document.getElementById("square16").append(circle2);

        if (div16Button.hasAttribute("id", "square16")) {
          let userInput = prompt(
            "Do you want to purchase California Avenue? Y/N"
          );
          if (userInput === "yes" || userInput === "y" || userInput === "Yes") {
            this.accountBalance = this.accountBalance - 200;
            this.countOfAssets = this.countOfAssets + 1;
            this.displayalert("You have bought a land");
            this.accountBalancePlayer2();
            this.assetBalancePlayer2();
          } else {
            this.displayalert("You have chose the option not to buy");
          }
        }
      }
    });
  }

  div17() {
    const div17Button = document.getElementById("square17");
    div17Button.addEventListener("click", () => {
      this.countClicks += 1;
      console.log(this.countClicks);

      if (this.countClicks % 2 === 0) {
        const circle2 = document.querySelector(".circle2");
        document.getElementById("square17").append(circle2);

        if (div17Button.hasAttribute("id", "square17")) {
          alert("Please select one card from Chance");
          this.takeChance(secondPlayer);
        }
      }
    });
  }

  div18() {
    const div18Button = document.getElementById("square18");
    div18Button.addEventListener("click", () => {
      this.countClicks += 1;
      console.log(this.countClicks);

      if (this.countClicks % 2 === 0) {
        const circle2 = document.querySelector(".circle2");
        document.getElementById("square18").append(circle2);

        if (div18Button.hasAttribute("id", "square18")) {
          let userInput = prompt("Do you want to purchase Park Place? Y/N");
          if (userInput === "yes" || userInput === "y" || userInput === "Yes") {
            this.accountBalance = this.accountBalance - 200;
            this.countOfAssets = this.countOfAssets + 1;
            this.displayalert("You have bought a land");
            this.accountBalancePlayer2();
            this.assetBalancePlayer2();
          } else {
            this.displayalert("You have chose the option not to buy");
          }
        }
      }
    });
  }

  getWinner(firstPlayer) {
    // If the account balance reduced to 0, game over.

    if (firstPlayer.accountBalance <= 0) {
      this.displayResult(
        "Game Over! Account balanace of Player1 is 0. Player2 won the game"
      );
      document.getElementById("secondPlayerbtn").disabled = true;
      document.getElementById("firstPlayerbtn").disabled = true;
    }
    if (this.accountBalance <= 0) {
      this.displayResult(
        "Game Over! Account balanace of Player2 is 0. Player1 won the game"
      );
      document.getElementById("secondPlayerbtn").disabled = true;
      document.getElementById("firstPlayerbtn").disabled = true;
    }
    // If the account balance are equal, its a tie.
    if (firstPlayer.accountBalance >= 1000 && firstPlayer.countOfAssets >= 1) {
      this.displayResult("Player 1 is the winner");
      document.getElementById("secondPlayerbtn").disabled = true;
      document.getElementById("firstPlayerbtn").disabled = true;
    }

    if (this.accountBalance >= 1000 && this.countOfAssets >= 1) {
      this.displayResult("Player 2 is the winner");
      document.getElementById("secondPlayerbtn").disabled = true;
      document.getElementById("firstPlayerbtn").disabled = true;
    }
  }
}

const firstPlayer = new Player1();
const secondPlayer = new Player2();
firstPlayer.getScore();
firstPlayer.player1RollDice();
firstPlayer.accountBalancePlayer1();
// firstPlayer.div1()
firstPlayer.div2();
firstPlayer.div3();
firstPlayer.div4();
firstPlayer.div5();
firstPlayer.div6();
firstPlayer.div7();
firstPlayer.div8();
firstPlayer.div9();
firstPlayer.div10();
firstPlayer.div11();
firstPlayer.div12();
firstPlayer.div13();
firstPlayer.div14();
firstPlayer.div15();
firstPlayer.div16();
firstPlayer.div17();
firstPlayer.div18();



secondPlayer.player2RollDice();
secondPlayer.accountBalancePlayer2();
// secondPlayer.div1()
secondPlayer.div2();
secondPlayer.div3();
secondPlayer.div4();
secondPlayer.div5();
secondPlayer.div6();
secondPlayer.div7();
secondPlayer.div8();
secondPlayer.div9();
secondPlayer.div10();
secondPlayer.div11();
secondPlayer.div12();
secondPlayer.div13();
secondPlayer.div14();
secondPlayer.div15();
secondPlayer.div16();
secondPlayer.div17();
secondPlayer.div18();

// secondPlayer.getWinner(firstPlayer)
// secondPlayer.collectMoney()

