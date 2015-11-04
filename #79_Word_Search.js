var exist = function(board, word) {
  var map = {}
    for(var i =0 ; i<board.length ; i++) {
      for(var j = 0 ; j < board[i].length ; j++) {
        if(helper(board, i, j, 0 ,word,map)) return true;
      }
    }
    return false;
};

var helper = function(board, row , col , current, word, map) {
  if(word.length === current ) return true
  if(!board[row]) return false;
  if(board[row][col] !== word[current] || map[row + ":" + col]) return false;
  map[row + ":" + col] = 1;
  var result =  helper(board, row +1 , col , current + 1, word, map) ||
            helper(board, row - 1, col , current + 1, word, map) ||
            helper(board, row , col + 1, current + 1, word, map) ||
            helper(board, row , col - 1, current + 1, word, map) 
  map[row + ":" + col] = 0;
  return result;
}
