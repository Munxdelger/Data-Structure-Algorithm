/**
 * @param {number[]} prices
 * @return {number}
 */  
/*

121. Best Time to Buy and Sell Stock

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104
*/

const maxProfit = prices => {
    let max = 0;    
    let min = prices[0];
    
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i];
        } else {
            max = Math.max (max, prices[i]-min);
        }
    }
    return max;
}

/*
var maxProfit = function(prices) {
    let globalMax = 0;
    let remain = 0;
    
    for (let i=1; i < prices.length; i++) {
        let subt = prices[i]-prices[i-1];
        
        remain = Math.max(subt, subt + remain);     
        globalMax = Math.max(globalMax, remain);
    }
    return globalMax;
};


*/