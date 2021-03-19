/**
 * @param {number[][]} intervals
 * @return {number[][]}
 
56. Merge Intervals
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

Constraints:
1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

 */


var merge = function(intervals) {
    
    intervals.sort((a,b) => a[0]-b[0]);
    let len = intervals.length;
    let p=0;
    
    for (let i=1; i< len; i++) {
        let prev = intervals[p];
        let cur = intervals[i];
        if (prev[1] >= cur[0]){
            prev[0] = Math.min(prev[0], cur[0]);
            prev[1] = Math.max(prev[1],cur[1]);   
        } else {
            p++;
            intervals[p] = cur;     
        }
    }
    intervals.length = p+1;
    return intervals;
};



var merge1 = function(intervals) {
    
    intervals.sort((a,b) => a[0]-b[0]);
    let len = intervals.length;
    
    let result = [intervals[0]];
    
    for (let i=1; i< len; i++) {
        let prev = result[result.length-1];
        let cur = intervals[i];
        if (prev[1] >= cur[0]){
            prev[0] = Math.min(prev[0], cur[0]);
            prev[1] = Math.max(prev[1],cur[1]);
        } else {
            result.push(cur);
        }
    }
    return result;
};