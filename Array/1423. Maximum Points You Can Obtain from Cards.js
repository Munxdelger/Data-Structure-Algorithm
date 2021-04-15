/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 
 1423. Maximum Points You Can Obtain from Cards
 
 There are several cards arranged in a row, and each card has an associated number of points The points are given in the integer array cardPoints.

In one step, you can take one card from the beginning or from the end of the row. You have to take exactly k cards.

Your score is the sum of the points of the cards you have taken.

Given the integer array cardPoints and the integer k, return the maximum score you can obtain.

 
 */
var maxScore = function(cardPoints, k) {
    let maxSum = 0;
    let curSum = 0;
    
    for (let i=0; i < k; i++){
        curSum += cardPoints[i];
        maxSum = curSum;
    }
    
    let j=1;
    while(k >= j){
        curSum -= cardPoints[k-j];
        curSum += cardPoints[cardPoints.length-j];
        maxSum = Math.max(maxSum, curSum);
        j++;
    }
    
    return maxSum;
};

// Time Complexity O(N); Space O(1);