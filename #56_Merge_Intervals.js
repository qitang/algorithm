/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
	if(intervals === null || intervals.length === 0) return []
    intervals.sort(function(a , b) {
    	return a.start - b.start;
    })
    var result = [intervals[0]]
    for(var i =1 ; i < intervals.length ; i++) {
    	var top = result.slice(-1)[0]
    	var current = intervals[i];
    	if(current.start > top.end) {
    		result.push(current)
    		continue
    	} else if(top.end <= current.end) {
    		top.end = current.end
    		continue
    	}
    }
    return result;
};