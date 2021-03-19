/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 
57. Insert Interval
Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).
You may assume that the intervals were initially sorted according to their start times.

Constraints:
0 <= intervals.length <= 104
intervals[i].length == 2
0 <= intervals[i][0] <= intervals[i][1] <= 105
intervals is sorted by intervals[i][0] in ascending order.
newInterval.length == 2
0 <= newInterval[0] <= newInterval[1] <= 

Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
 
 */
var insert = function(intervals, newInterval) {   
    if (intervals.length === 0){
        return [newInterval];
    }    
    
    let len = intervals.length;
    let p = 0;
    let overLap = false;
    
    if(isOverLap(intervals[0],newInterval)) {
        overLap = true;
        intervals[0]= combine(intervals[0], newInterval);
    }
    
    
    for (let i=1; i < len; i++) {
        let prev = intervals[p];
        let cur = intervals[i];
                                          
        if (isOverLap(prev,cur)) {
            [prev[0],prev[1]] = combine(prev, cur);
            overLap = true;
        } else {
            p++;
            intervals[p] = cur;
        }
        if (isOverLap(cur, newInterval)) {  
            [cur[0],cur[1]] = combine(cur, newInterval);
            overLap = true;
        }
    }
    intervals.length = p+1;
    
    if (!overLap) {
        intervals.push(newInterval);
        intervals.sort((a,b) => a[0]-b[0]);
    }
    return intervals;
    
    
    function isOverLap(int1, int2) {
        return Math.max(int1[0],int2[0]) <= Math.min(int1[1], int2[1]);
    }
    
    function combine(int1, int2) {
        return [Math.min(int1[0],int2[0]), Math.max(int1[1], int2[1])];
    }
    
};