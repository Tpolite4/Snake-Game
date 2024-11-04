class Apple {
  constructor(el) {
    this.node = document.createElement('img');
    this.node.setAttribute('id', 'apple');
    this.node.setAttribute('src', 'src/assets/apple.jpg');

    el.appendChild(this.node);

    // let leftPosition = 300;
    // let topPosition = 300;

    // this.node.style.left = `${leftPosition}px`;
    // this.node.style.top = `${topPosition}px`;
    this.board = el;
    this.placeRandomApple();
  }

  placeRandomApple(gridSize = 50) {
    // get the width and height of the board using the client property in the DOM
    const boardWidth = this.board.clientWidth;
    const boardHeight = this.board.clientHeight;

    // calculate the furthest horizontal position (from the left) that the apple can be placed within the grid
    const maxLeft = Math.floor(boardWidth / gridSize) * gridSize;
    // calculate the furthest vertical position (from the top) that the apple can be placed within the grid
    const maxTop = Math.floor(boardHeight / gridSize) * gridSize;
    // calculate the random position for the horizontal placement of the apple
    const leftPosition =
      Math.floor(Math.random() * (maxLeft / gridSize)) * gridSize;
    const topPosition =
      Math.floor(Math.random() * (maxTop / gridSize)) * gridSize;

    // update the apple's position on the board
    this.node.style.left = `${leftPosition}px`;
    this.node.style.top = `${topPosition}px`;
  }

  // randomIntFromInterval(min, max) {
  //   // min and max included
  //   return Math.floor(Math.random() * (max - min + 1));
  // }

  // randomLeftPosition() {
  //   const randomLeft = this.randomIntFromInterval(0, 13) * 50; // rndInt contains random num from 0 -> 13
  //   return randomLeft;
  // }

  // randomTopPosition() {
  //   const randomTop = this.randomIntFromInterval(0, 13) * 50; // rndInt contains random num from 0 -> 13
  //   return randomTop;
  // }
}

