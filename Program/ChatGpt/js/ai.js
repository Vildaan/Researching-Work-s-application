//-----------------------------------------------Ai.js---------------------------------------------
/*
 _    __ _______             _      ___      __    __
|:|  /:/|__   __| |:|       |:|    /:_:\    |::| /:::|
|:| /:/    |:|    |:|      _|:|   /:/_\:\   |::|/_ ::|
|:|/:/  ___|:|__  |:|___  / ::|  /:/___\:\  |:::/ |::|
|:_:/  |________| |_____| \___| /:/     \:\ |__/  |__| 

dicsord: vildan8487
*/
//-----------------------------------------------Some Variables------------------------------------
var minNIAUnSorted = [];
var minNIA = [];
//-----------------------------------------------Some Variables------------------------------------

//-----------------------------------------------Height count--------------------------------------
function OutputCountHeight(playfield) {
  var count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  for (var col = 0; col <= 9; col++) {
    for (var row = 0; row <= 19; row++) {
      if (playfield[row][col] !== 0) {
        count[col] = 19 - row + 1;
        break;
      }
    }
  }

  return count;
}
//-----------------------------------------------Height count--------------------------------------

//-----------------------------------------------Divede by weight----------------------------------
function ChangeCont(button) {
  button.click();
}
//-----------------------------------------------Divede by weight----------------------------------

//-----------------------------------------------Moving single tetromino---------------------------
function MoveTetrominoAi(isValidMove, tetromino, nums) {
  const col = nums;

  if (isValidMove(tetromino.matrix, tetromino.row, col)) {
    tetromino.col = col;
  }
}

//-----------------------------------------------Ai brain------------------------------------------

//-----------------------------------------------Min for 1 x 1-------------------------------------
function TakeMinValueForOnexOne(pFPositions) {
  var result = [0, 0];

  for (var i = 0; i < 10; i++) {
    if (pFPositions[i] <= minNIA[0]) {
      result[1] = i;
      return result;
    }
  }

  return result;
}
//-----------------------------------------------Min for 1 x 1-------------------------------------

//-----------------------------------------------Min for 2 x 2-------------------------------------
function TakeMinValueForTwoxTwo(pFPositions) {
  var result = [0, 0];

  for (var f = 9; f !== 0; f--) {
    for (var i = 1; i < 19; i++) {
      if (
        pFPositions[i] <= minNIA[f] &&
        i - 1 <= 8 &&
        pFPositions[i - 1] === pFPositions[i]
      ) {
        if (pFPositions[result[1]] > pFPositions[i - 1]) {
          result[1] = i - 1;
        }
      } else if (
        pFPositions[i] <= minNIA[f] &&
        pFPositions[i - 1] <= pFPositions[i]
      ) {
        if (pFPositions[result[1]] > pFPositions[i]) {
          result[1] = i - 1;
        }
      } else if (
        pFPositions[i] <= minNIA[f] &&
        pFPositions[i - 1] >= pFPositions[i]
      ) {
        if (pFPositions[result[1]] > pFPositions[i - 1]) {
          result[1] = i - 1;
        }
      }
    }
  }

  return result;
}
//-----------------------------------------------Min for 2 x 2-------------------------------------

//-----------------------------------------------Min for 3 x 3-------------------------------------
function TakeMinValueForThreexThree(pFPositions) {
  var result = [0, 0];

  for (var f = 9; f !== 0; f--) {
    for (var i = 2; i < 19; i++) {
      if (
        pFPositions[i] <= minNIA[f] &&
        i - 2 <= 7 &&
        pFPositions[i] <= minNIA[f] &&
        pFPositions[i - 1] === pFPositions[i] &&
        pFPositions[i - 2] === pFPositions[i]
      ) {
        if (pFPositions[result[1]] > pFPositions[i - 2]) {
          result[1] = i - 2;
        }
      } else if (
        pFPositions[i] <= minNIA[f] &&
        pFPositions[i - 1] <= pFPositions[i] &&
        pFPositions[i - 2] <= pFPositions[i]
      ) {
        if (pFPositions[result[1]] > pFPositions[i]) {
          result[1] = i - 2;
        }
      } else if (
        pFPositions[i] <= minNIA[f] &&
        pFPositions[i - 1] >= pFPositions[i] &&
        pFPositions[i - 2] <= pFPositions[i]
      ) {
        if (pFPositions[result[1]] > pFPositions[i - 1]) {
          result[1] = i - 2;
        }
      } else if (
        pFPositions[i] <= minNIA[f] &&
        pFPositions[i - 1] <= pFPositions[i] &&
        pFPositions[i - 2] >= pFPositions[i]
      ) {
        if (pFPositions[result[1]] > pFPositions[i - 2]) {
          result[1] = i - 2;
        }
      } else if (
        pFPositions[i] <= minNIA[f] &&
        pFPositions[i - 1] >= pFPositions[i] &&
        pFPositions[i - 2] >= pFPositions[i]
      ) {
        if (
          pFPositions[result[1]] > pFPositions[i - 2] &&
          pFPositions[result[1]] > pFPositions[i - 1]
        ) {
          result[1] = i - 2;
        }
      }
    }
  }

  return result;
}
//-----------------------------------------------Min for 3 x 3-------------------------------------

//-----------------------------------------------Min for 4 x 4-------------------------------------
function TakeMinValueForFourxFour(pFPositions) {
  var result = [0, 0];

  for (var f = 9; f !== 0; f--) {
    for (var i = 2; i < 19; i++) {
      if (
        pFPositions[i] <= minNIA[f] &&
        i - 3 <= 6 &&
        pFPositions[i] <= minNIA[f] &&
        pFPositions[i - 1] === pFPositions[i] &&
        pFPositions[i - 2] === pFPositions[i] &&
        pFPositions[i - 3] === pFPositions[i]
      ) {
        if (pFPositions[result[1]] > pFPositions[i - 3]) {
          result[1] = i - 3;
        }
      } else if (
        pFPositions[i] <= minNIA[f] &&
        pFPositions[i - 1] <= pFPositions[i] &&
        pFPositions[i - 2] <= pFPositions[i] &&
        pFPositions[i - 3] <= pFPositions[i]
      ) {
        if (pFPositions[result[1]] >= pFPositions[i]) {
          result[1] = i - 3;
        }
      } else if (
        pFPositions[i] <= minNIA[f] &&
        pFPositions[i - 1] >= pFPositions[i] &&
        pFPositions[i - 2] <= pFPositions[i] &&
        pFPositions[i - 3] <= pFPositions[i]
      ) {
        if (pFPositions[result[1]] >= pFPositions[i - 1]) {
          result[1] = i - 3;
        }
      } else if (
        pFPositions[i] <= minNIA[f] &&
        pFPositions[i - 1] >= pFPositions[i] &&
        pFPositions[i - 2] >= pFPositions[i] &&
        pFPositions[i - 3] <= pFPositions[i]
      ) {
        if (
          pFPositions[result[1]] >= pFPositions[i - 1] &&
          pFPositions[result[1]] > pFPositions[i - 2]
        ) {
          result[1] = i - 3;
        }
      } else if (
        pFPositions[i] <= minNIA[f] &&
        pFPositions[i - 1] >= pFPositions[i] &&
        pFPositions[i - 2] >= pFPositions[i] &&
        pFPositions[i - 3] >= pFPositions[i]
      ) {
        if (
          pFPositions[result[1]] >= pFPositions[i - 3] &&
          pFPositions[result[1]] >= pFPositions[i - 1] &&
          pFPositions[result[1]] >= pFPositions[i - 2]
        ) {
          result[1] = i - 3;
        }
      } else if (
        pFPositions[i] <= minNIA[f] &&
        pFPositions[i - 1] <= pFPositions[i] &&
        pFPositions[i - 2] >= pFPositions[i] &&
        pFPositions[i - 3] >= pFPositions[i]
      ) {
        if (
          pFPositions[result[1]] >= pFPositions[i - 3] &&
          pFPositions[result[1]] >= pFPositions[i - 2]
        ) {
          result[1] = i - 3;
        }
      } else if (
        pFPositions[i] <= minNIA[f] &&
        pFPositions[i - 1] <= pFPositions[i] &&
        pFPositions[i - 2] <= pFPositions[i] &&
        pFPositions[i - 3] >= pFPositions[i]
      ) {
        if (pFPositions[result[1]] >= pFPositions[i - 3]) {
          result[1] = i - 3;
        }
      } else if (
        pFPositions[i] <= minNIA[f] &&
        pFPositions[i - 1] >= pFPositions[i] &&
        pFPositions[i - 2] <= pFPositions[i] &&
        pFPositions[i - 3] >= pFPositions[i]
      ) {
        if (
          pFPositions[result[1]] >= pFPositions[i - 3] &&
          pFPositions[result[1]] >= pFPositions[i - 1]
        ) {
          result[1] = i - 3;
        }
      } else if (
        pFPositions[i] <= minNIA[f] &&
        pFPositions[i - 1] <= pFPositions[i] &&
        pFPositions[i - 2] >= pFPositions[i] &&
        pFPositions[i - 3] <= pFPositions[i]
      ) {
        if (pFPositions[result[1]] >= pFPositions[i - 2]) {
          result[1] = i - 3;
        }
      }
    }
  }

  return result;
}
//-----------------------------------------------Min for 4 x 4-------------------------------------

//-----------------------------------------------Moving--------------------------------------------
function CheckTetrominoMoveAi(
  isValidMove,
  tetromino,
  firstplayfield,
  secondplayfield,
  button1,
  button2,
  first,
  GameOver
) {
  minNIA = [];
  var firstGood = OutputCountHeight(firstplayfield);
  var secondGood = OutputCountHeight(secondplayfield);
  var pFPositions = [];
  first ? (pFPositions = firstGood) : (pFPositions = secondGood);
  var minArray = [];
  minNIA = SortArray(pFPositions);

  // 1x1
  if (tetromino.name == '1') {
    minArray[5] = TakeMinValueForOnexOne(firstGood)[1];
    minArray[1] = TakeMinValueForOnexOne(secondGood)[1];
    if (firstGood[minArray[5]] <= 19) {
      if (!first) {
        ChangeCont(button1);
      }
      MoveTetrominoAi(isValidMove, tetromino, minArray[5]);
      return;
    } else if (secondGood[minArray[1]] <= 19) {
      if (first) {
        ChangeCont(button2);
      }
      MoveTetrominoAi(isValidMove, tetromino, minArray[1]);
      return;
    }
  }
  // 2x2
  else if (tetromino.name == '2') {
    minArray[2] = TakeMinValueForTwoxTwo(secondGood)[1];
    minArray[6] = TakeMinValueForTwoxTwo(firstGood)[1];
    if (firstGood[minArray[6]] <= 18 && firstGood[minArray[6] + 1] <= 18) {
      if (!first) {
        ChangeCont(button1);
      }
      MoveTetrominoAi(isValidMove, tetromino, minArray[6]);
      return;
    } else if (secondGood[minArray[2]] <= 18 && secondGood[minArray[2] + 1] <= 18) {
      if (first) {
        ChangeCont(button2);
      }
      MoveTetrominoAi(isValidMove, tetromino, minArray[2]);
      return;
    }
  }
  // 3x3
  else if (tetromino.name == '3') {
    minArray[7] = TakeMinValueForThreexThree(firstGood)[1];
    minArray[3] = TakeMinValueForThreexThree(secondGood)[1];
    if (firstGood[minArray[7]] <= 17 && firstGood[minArray[7] + 1] <= 17 && firstGood[minArray[7] + 2] <= 17) {
      if (!first) {
        ChangeCont(button1);
      }
      MoveTetrominoAi(isValidMove, tetromino, minArray[7]);
      return;
    } else if (
      secondGood[minArray[3]] <= 17 &&
      secondGood[minArray[3] + 1] <= 17 &&
      secondGood[minArray[3] + 2] <= 17
    ) {
      if (first) {
        ChangeCont(button2);
      }
      MoveTetrominoAi(isValidMove, tetromino, minArray[3]);
      return;
    }
  }
  // 4x4
  else if (tetromino.name == '4') {
    minArray[8] = TakeMinValueForFourxFour(firstGood)[1];
    minArray[4] = TakeMinValueForFourxFour(secondGood)[1];
    if (
      firstGood[minArray[8]] <= 16 &&
      firstGood[minArray[8] + 1] <= 16 &&
      firstGood[minArray[8] + 2] <= 16 &&
      firstGood[minArray[8] + 3] <= 16
    ) {
      if (!first) {
        ChangeCont(button1);
      }
      MoveTetrominoAi(isValidMove, tetromino, minArray[8]);
      return;
    } else if (
      secondGood[minArray[4]] <= 16 &&
      secondGood[minArray[4] + 1] <= 16 &&
      secondGood[minArray[4] + 2] <= 16 &&
      secondGood[minArray[4] + 3] <= 16
    ) {
      if (first) {
        ChangeCont(button2);
      }
      MoveTetrominoAi(isValidMove, tetromino, minArray[4]);
      return;
    }
  }

  // If tetromino does not fit in any container, end the game
  GameOver();
}
