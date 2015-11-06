/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
	var max = 0;
	if(matrix === null || matrix.length === 0) return 0;  
	var map = [[]];
    var row = matrix.length;
    var col = matrix[0].length
    matrix.slice(-1)[0].forEach(function(n){
    	map[0].push(n)
    	if(n > 0) max = 1;
    })
	map.push(matrix.slice(-1)[0].slice());
	for(var i = matrix.length -2 ; i >=0 ;i --) {
		if(matrix[i].slice(-1)[0] > 0) max = Math.max(1,max);
		var temp = [[matrix[i].slice(-1)[0]]];
		for(var j = col-2 ; j>=0 ; j--) {
			var current = 0;
			if(matrix[i][j] > 0) {
				current = 1 + Math.min(temp[0], map[0][j+1], map[0][j])
				if(current > max) max = current
			}
			temp.unshift(current)
		}

		map.unshift(temp)
	}
	return max*max
};

var test = [
	["1"],["0"],["1"],["1"],["1"],["1"],["0"]
]

console.log(maximalSquare(test))