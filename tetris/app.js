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
let current = theTretrominoes[0][0];

//Desenhar a primeira rotação no primeiro Tetromino.
function draw() {
  current.forEach(index => {
    squares[currentPosition + index].classList.add('tetromino')
  })
}
draw();
});
