/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var board1 = new Board({n: n});
  for (var i = 0; i < n; i++) {
    board1.togglePiece(i,i);
  }
  var solution = board1.rows();
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  // base case: if (n === 0)
  if (n === 0) {
    var solutionCount;
    return solutionCount = 1;
  }
  // console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount = n * countNRooksSolutions(n - 1);
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  // // create board with n x n
  // var board1 = newBoard({n: n});

  // // set first queen at (0,0);
  // // var rowIndex = 0;
  // // var colIndex = 0;
  // //this.board1.rows()[0] ==> [0,0,0,0]

  // // recursive function
  // var counter = 0; //1
  // function inner (rowIndex) {
  //   // base case is when we run out of rows
  //   if (counter === n) {
  //     // pass or fail based on number of pieces placed
  //   }
  //   // place the queen

  //   // use hasAnyColConflicts and hasAnyMajorDiagonalConflicts and hasAnyMinorDiagonalConflicts to see if the spot is available to place a new queen
  //   for (var colIndex = 0; colIndex < n; colIndex++) {
  //     board1.togglePiece(rowIndex, colIndex));
  //     if (board1.hasAnyColConflicts && board1.hasAnyMajorDiagonalConflicts && board1.hasAnyMinorDiagonalConflicts) {
  //       board1.togglePiece(rowIndex, colIndex);  //untoggle
  //     }
  //   }
  //   inner(counter++);
  //   // if there is a conflict, unplace the queen
  //   // try the spot to the right

  //   // if none of the rows work, go back and change the position of the piece before it

  // };





  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  debugger;
  var board1 = new Board( {n: n} );
  var queenSolutions = [];
  var solutionCount;
  //create queen counter
  var queenCounter = n;
  var rowCounter = 0;
  // create helper function
  var findPossibilities = function(row, queenCounter) {
    // base case: when our queens counter is 0, we update the solution
    if (queenCounter === 0) {
      solutionCount++;
      return;
    }
    // recursive case:
    // for each position check if there is a conflict
    for (var i = 0; i < n; i++) {
      // place the queen
      board1.togglePiece(row, i);
      // if there's a conflict
      if (board1.hasAnyColConflicts && board1.hasAnyMajorDiagonalConflicts && board1.hasAnyMinorDiagonalConflicts) {
        // remove the queen
        board1.togglePiece(row, i);
      } else {
        // if there's not a conflict
        // increment row

        // decrement the queen counter

        // recurse (row)
        findPossibilities(row++, queenCounter--);
        // remove the queen and increment the queen counter
        board1.togglePiece(row, i);
        queenCounter++;
      }
    }
    return;
  };
  findPossibilities(rowCounter, n);
  solutionCount = queenSolutions.length;
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};