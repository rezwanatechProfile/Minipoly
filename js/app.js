console.log("clicked")


class Player1 {

  constructor() {

  }

  firstButton = () => {
    const player1 = Math.floor(Math.random() * 6) + 1;
    const player1Dice = `./img/dice${player1}.jpg`;
    document.getElementById("img1").setAttribute("src", player1Dice);
  };


}

class Player2 {

  constructor() {

  }

  secondButton = () => {
    const player2 = Math.floor(Math.random() * 6) + 1
    const player2Dice = `./img/dice${player2}.jpg`;
    document.getElementById("img2").setAttribute("src", player2Dice);
  }

}


const firstPlayer = new Player1()
const secondPlayer = new Player2()




