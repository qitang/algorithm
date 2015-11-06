/**
 * @param {number[]} height
 * @return {number}
 */
var largestRectangleArea = function(height) {
	if(height === null || height.length === 0) return 0;
    height.push(0);
    var stack = [0];
    var result = 0;
    for(var i =1; i<height.length ; i++) {

    	var current = height[i];
    	var top = height[stack.slice(-1)[0]]
    	if(top <= current ) {
    		stack.push(i)
    	} else {
    		while(stack.length > 0 && height[stack.slice(-1)[0]] > current) {
    			//use the positon after pop, that is how far the rectangle extend with current popped value as the min height
    		    var temp = stack.pop();
    		    if(stack.length === 0) {
    		    	result = Math.max(result, i * height[temp]);
    		    }
    			else {
    				result = Math.max(result, (i- stack.slice(-1)[0] -1) * height[temp]);
    			}
    			
    		}
    	    stack.push(i)
    	}
    }	
    return result
};
console.log(largestRectangleArea([0,0]))
console.log(largestRectangleArea([4,2,0, 3,2,5]))
console.log(largestRectangleArea([4,3,2,1]))