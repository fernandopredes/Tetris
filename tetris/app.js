document.addEventListener('DOMContentLoaded', () => {

  const grid = document.querySelector('.grid');
  let squares = Array.from(document.querySelectorAll('.grid div'));
  const SquareDisplay = document.querySelector('#score');
  const StartBtn = document.querySelector('#start-button');
  const width = 10;

  //Definindo os Tetrominoes e suas rotações
  const lTetrominoe =[  [1, width+1, width*2+1, 2],
                        [width, width+1, width+2, width*2+2],
                        [1, width+1, width*2+1, width*2],
                        [width,width*2,width*2+1,width*2+2]
                      ];

 const zTetromino = [
                          [0,width,width+1,width*2+1],
                          [width+1, width+2,width*2,width*2+1],
                          [0,width,width+1,width*2+1],
                          [width+1, width+2,width*2,width*2+1]
                      ];

 const tTetromino = [
                          [1,width,width+1,width+2],
                          [1,width+1,width+2,width*2+1],
                          [width,width+1,width+2,width*2+1],
                          [1,width,width+1,width*2+1]
                      ];

const oTetromino = [
                          [0,1,width,width+1],
                          [0,1,width,width+1],
                          [0,1,width,width+1],
                          [0,1,width,width+1]
                      ];

const iTetromino = [
                          [1,width+1,width*2+1,width*3+1],
                          [width,width+1,width+2,width+3],
                          [1,width+1,width*2+1,width*3+1],
                          [width,width+1,width+2,width+3]
                      ];

const theTretrominoes =[lTetrominoe, zTetromino, tTetromino, oTetromino, iTetromino ];
let currentPosition = 4;
let currentRotation = 0;

let random = Math.floor(Math.random()*theTretrominoes.length);
let current = theTretrominoes[random][0];

//Desenhar rotação .
function draw() {
  current.forEach(index => {
    squares[currentPosition + index].classList.add('tetromino');
  })
}

//
function undraw() {
  current.forEach(index => {
    squares[currentPosition + index].classList.remove('tetromino');
  })
}



//Fazer o tetromino descer cada segundo

  timerId = setInterval(moveDown, 1000)

  //Movimento das teclas
  function control(e) {
    if(e.keyCode === 37) {
      moveLeft()
    } else if (e.keyCode === 38) {
      //rotate()
    } else if (e.keyCode === 39) {
      moveRight()
    } else if (e.keyCode === 40) {
      moveDown()
    }
  }
  document.addEventListener('keyup', control)

  //descida dos blocos
  function moveDown() {
    undraw();
    currentPosition += width ;
    draw();
    freeze();
  }


  // Freeze
function freeze() {
  if(current.some(index => squares[currentPosition + index + width].classList.contains('taken'))) {
    current.forEach(index => squares[currentPosition + index].classList.add('taken'))
    //Começar nova peça
    random = Math.floor(Math.random() * theTretrominoes.length);
    current = theTretrominoes[random][currentRotation];
    currentPosition = 4;
    draw();
  }
}

//Movendo a peça pra esquerda.

function moveLeft() {
  undraw()
  const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0)
  if(!isAtLeftEdge) currentPosition -=1
  if(current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
    currentPosition +=1
  }
  draw()
}

//movendo pra direita
function moveRight() {
  undraw()
  const isAtRightEdge = current.some(index => (currentPosition + index) % width === width -1)
  if(!isAtRightEdge) currentPosition +=1
  if(current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
    currentPosition -=1
  }
  draw()
}


});
