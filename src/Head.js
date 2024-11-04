class Head {
  constructor(el) {
    this.node = document.createElement('div'); //represents head
    this.node.setAttribute('id', 'head'); //set to represent head
    el.appendChild(this.node); //connects the el to the DOM so that it can appear on the browser and also be updated by CSS

    this.currentDirection = 'right';
    this.nextDirection = 'right'; //allows for the snake to only move after the previous key is pressed //creates a delay
    this.SPEED = 250;

    this.node.style.top = 0; //this specifies where the node(head) is positioned in our board from the top
    this.node.style.left = 0; //specifies where the node(head) is positioned from the left

    //size of snake
    this.size = 0;
    this.bodies = [];

    this.headPositions = [];

    this.leftPosition;
    this.topPosition;
    //initialize score to 0 so we can update later
    this.score = 0;
    this.scoreElement = document.getElementById('score');

    // Refactor the below line to create a bound version of `this.Move`.
    // We must do this in order to retain the context of `this` in an asynchronous setTimeout call
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind

    //starts Snake's Movements
    this.boundMove = this.move.bind(this);

    this.listenForKeyPress();

    setTimeout(this.boundMove, this.SPEED);
  }
  listenForKeyPress() {
    window.addEventListener('keydown', (e) => {
      const oppositeDirection = {
        up: 'down',
        down: 'up',
        left: 'right',
        right: 'left',
      };
      switch (e.key) {
        case 'ArrowUp':
          if (this.currentDirection !== oppositeDirection['up'])
            //check to see that the snake is not currently moving down.
            this.nextDirection = 'up'; //This tells the game that after the snake completes its current move, it should start moving up in the next step.

          break;
        case 'ArrowDown':
          if (this.currentDirection !== oppositeDirection['down'])
            this.nextDirection = 'down';
          break;
        case 'ArrowLeft':
          if (this.currentDirection !== oppositeDirection['left'])
            this.nextDirection = 'left';
          break;
        case 'ArrowRight':
          if (this.currentDirection !== oppositeDirection['right'])
            this.nextDirection = 'right';
          break;
      }
    });
  }

  move() {
    const head = this.node;
    // const direction = this.currentDirection;
    this.currentDirection = this.nextDirection;

    // type coercion forces string to become number

    let topPosition = Number(head.style.top.replace('px', ''));
    let leftPosition = Number(head.style.left.replace('px', ''));
    // Board boundaries

    // const boardWidth = 700px;
    // const boardHeight = 700px;
    // const stepSize = 50px;

    //Updating position based on Direction
    switch (this.currentDirection) {
      case 'right':
        leftPosition += 50;
        break;
      case 'left':
        leftPosition -= 50;
        break;
      case 'up':
        topPosition -= 50;
        break;
      case 'down':
        topPosition += 50;
        break;
    }
    //Update the snakes position

    head.style.top = `${topPosition}px`;
    head.style.left = `${leftPosition}px`;

    if (
      topPosition < 0 ||
      topPosition >= 700 ||
      leftPosition < 0 ||
      leftPosition >= 700
    ) {
      alert('Game over!');
      return;
    }
    function playSound() {
      let audio = document.getElementById('eat');
      audio.play();
    }

    // Check for collision with apple
    const apple = document.getElementById('apple');
    const appleTopPosition = Number(apple.style.top.replace('px', ''));
    const appleLeftPosition = Number(apple.style.left.replace('px', ''));

    if (
      topPosition === appleTopPosition &&
      leftPosition === appleLeftPosition
    ) {
      this.score++;
      this.updateScore();
      playSound();
      this.apple.placeRandomApple(); // Place the apple at a new random location
    }

  
    setTimeout(this.boundMove, this.SPEED);
  }
  updateScore() {
    this.scoreElement.textContent = `Score: ${this.score}`;
  }

  // Setter to assign the apple object
  setApple(apple) {
    this.apple = apple;
  }













  
}

//restart the game
//fix movement issue, currently allowing 180 degree turns
//move onto next step which is body


//const body = new Body(this.board);
// this.bodies.push(body);
// this.size += 1;
