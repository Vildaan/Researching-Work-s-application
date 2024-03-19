 //-----------------------------------------------Ai.js---------------------------------------------
/*
 _    __ _______             _      ___      __    __
|:|  /:/|__   __| |:|       |:|    /:_:\    |::| /:::|
|:| /:/    |:|    |:|      _|:|   /:/_\:\   |::|/_ ::|
|:|/:/  ___|:|__  |:|___  / ::|  /:/___\:\  |:::/ |::|
|:_:/  |________| |_____| \___| /:/     \:\ |__/  |__| 

dicsord: vildan8487
*/
//-----------------------------------------------Ai.js------------------------------------
 var minNIAUnSorted = [];
  var minNIA = [];
 
  function OutputCountHeight(playfield){

      var count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

      for(col = 0; col <= 9; col++){
        for(row = 0; row <= 19; row++){
          if(playfield[row][col] != 0){
            count[col] = 19 - row + 1;
            break;
          }
        }
      }

      return count

    }
 
  function ChangeCont(button){
    button.click();
  }

  function CheckTetrominoMoveAi(isValidMove, 
    tetromino, 
    firstplayfield, 
    secondplayfield, 
    button1, button2, 
    first, GameOver){
    minNIA = [];
    var firstGood = OutputCountHeight(firstplayfield);
    var secondGood = OutputCountHeight(secondplayfield);
    var pFPositions = [];
    first ? pFPositions = firstGood : pFPositions = secondGood;
    var minArray = [];
    minNIA = SortArray(pFPositions);

    //1x1
    if(tetromino.name == '1'){
      minArray[5] = TakeMinValueForOnexOne(firstGood)[1];
      minArray[1] = TakeMinValueForOnexOne(secondGood)[1];
      if(firstGood[minArray[5]] <= 19){
        if(!first){
          ChangeCont(button1);
        }
        MoveTetrominoAi(isValidMove, tetromino, minArray[5]);
        return;
      }
      else if(secondGood[minArray[1]] <= 19){
        if(first){
          ChangeCont(button2);
        }
        MoveTetrominoAi(isValidMove, tetromino, minArray[1]);
        return;
      }
      else{
        GameOver();
        return
      }
    }
    //2x2
    else if(tetromino.name == '2'){
      minArray[2] = TakeMinValueForTwoxTwo(secondGood)[1];
      minArray[6] = TakeMinValueForTwoxTwo(firstGood)[1];
      if(firstGood[minArray[6]] <= 18 &&
        firstGood[minArray[6] + 1] <= 18){
          if(!first){
            ChangeCont(button1);
          }
          MoveTetrominoAi(isValidMove, tetromino, minArray[6]);
          return;
      }
      else if(secondGood[minArray[2]] <= 18 &&
        secondGood[minArray[2] + 1] <= 18){
          if(first){
            ChangeCont(button2);
          }
          MoveTetrominoAi(isValidMove, tetromino, minArray[2]);
          return;
        }
      else{
        GameOver();
        return;
      }
    }
    //3x3
    else if(tetromino.name == '3'){
      minArray[7] = TakeMinValueForThreexThree(firstGood)[1];
      minArray[3] = TakeMinValueForThreexThree(secondGood)[1];
      if(firstGood[minArray[7]] <= 17 &&
        firstGood[minArray[7] + 1] <= 17 && 
        firstGood[minArray[7] + 2] <= 17){
          if(!first){
            ChangeCont(button1);
          }
          MoveTetrominoAi(isValidMove, tetromino, minArray[7]);
          return;
      }
      else if(secondGood[minArray[3]] <= 17 &&
        secondGood[minArray[3] + 1] <= 17 && 
        secondGood[minArray[3] + 2] <= 17){
          if(first){
            ChangeCont(button2);
          }
          MoveTetrominoAi(isValidMove, tetromino, minArray[3]);
          return;
        }
      else{
        GameOver();
        return;
      }
    }
    //4x4
    else if(tetromino.name == '4'){
      minArray[8] = TakeMinValueForFourxFour(firstGood)[1];
      minArray[4] = TakeMinValueForFourxFour(secondGood)[1];
      if(firstGood[minArray[8]] <= 16 &&
        firstGood[minArray[8] + 1] <= 16 &&
        firstGood[minArray[8] + 2] <= 16 && 
        firstGood[minArray[8] + 3] <= 16){
          if(!first){
            ChangeCont(button1);
          }
          MoveTetrominoAi(isValidMove, tetromino, minArray[8]);
          return;
      }
      else if(
        secondGood[minArray[4]] <= 16 &&
        secondGood[minArray[4] + 1] <= 16 &&
        secondGood[minArray[4] + 2] <= 16 && 
        secondGood[minArray[4] + 3] <= 16){
          if(first){
            ChangeCont(button2);
          }
          MoveTetrominoAi(isValidMove, tetromino, minArray[4]);
          return;
        }
      else{
        GameOver();
        return;
      }
    }
  }
 
  function MoveTetrominoAi(isValidMove, tetromino, nums){
    const col = nums;

    if (isValidMove(tetromino.matrix, tetromino.row, col)) {
      tetromino.col = col;
    }
    
  }

  function TakeMinValueForOnexOne(pFPositions){
    var minValue = Infinity;
    var minIndex = -1;
  
    for(var i = 0; i < pFPositions.length; i++){
      if(pFPositions[i] < minValue){
        minValue = pFPositions[i];
        minIndex = i;
      }
    }
  
    return [minValue, minIndex];
  }

  function TakeMinValueForTwoxTwo(pFPositions){
    var minValue = Infinity;
    var minIndex = -1;
  
    for(var i = 0; i < pFPositions.length - 1; i++){
      var maxInPair = Math.max(pFPositions[i], pFPositions[i + 1]);
      if(maxInPair < minValue){
        minValue = maxInPair;
        minIndex = i;
      }
    }
  
    if(minIndex == pFPositions.length - 1) {
      minIndex--;
    }
  
    return [minValue, minIndex];
  }
  
  function TakeMinValueForThreexThree(pFPositions){
    var minValue = Infinity;
    var minIndex = -1;
  
    for(var i = 0; i < pFPositions.length - 2; i++){
      var maxInTriple = Math.max(pFPositions[i], pFPositions[i + 1], pFPositions[i + 2]);
      if(maxInTriple < minValue){
        minValue = maxInTriple;
        minIndex = i;
      }
    }
  
    if(minIndex >= pFPositions.length - 2) {
      minIndex = pFPositions.length - 3;
    }
  
    return [minValue, minIndex];
  }
  
  function TakeMinValueForFourxFour(pFPositions){
    var minValue = Infinity;
    var minIndex = -1;
  
    for(var i = 0; i < pFPositions.length - 3; i++){
      var maxInQuadruple = Math.max(pFPositions[i], pFPositions[i + 1], pFPositions[i + 2], pFPositions[i + 3]);
      if(maxInQuadruple < minValue){
        minValue = maxInQuadruple;
        minIndex = i;
      }
    }
  
    if(minIndex >= pFPositions.length - 3) {
      minIndex = pFPositions.length - 4;
    }
  
    return [minValue, minIndex];
  }