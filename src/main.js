document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const board = document.querySelector('#board');

  //Creates a new instance of a our board
  const apple = new Apple(board);
  const head = new Head(board, apple);

  head.setApple(apple);
  // eat sounds
});
