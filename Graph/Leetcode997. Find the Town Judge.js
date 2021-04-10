/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 
 997. Find the Town Judge
In a town, there are N people labelled from 1 to N.  There is a rumor that one of these people is secretly the town judge.

If the town judge exists, then:

The town judge trusts nobody.
Everybody (except for the town judge) trusts the town judge.
There is exactly one person that satisfies properties 1 and 2.
You are given trust, an array of pairs trust[i] = [a, b] representing that the person labelled a trusts the person labelled b.

If the town judge exists and can be identified, return the label of the town judge.  Otherwise, return -1.
Constraints:
1 <= N <= 1000
0 <= trust.length <= 10^4
trust[i].length == 2
trust[i] are all different
trust[i][0] != trust[i][1]
1 <= trust[i][0], trust[i][1] <= N
 */


const findJudge = (N, trust) => {
    let checker = new Array(N+1).fill(0);
    
    for (let i=0; i < trust.length; i++) {
        checker[trust[i][1]]++;
        checker[trust[i][0]]--;
    }
    
    for (let j=1; j <= N; j++) {
        if (checker[j] === N-1) {
            return j;
        }
    }
    return -1;
}

const findJudge2 = (N, trust) => {
    let indegree = new Array(N+1).fill(0);
    let outdegree = new Array(N+1).fill(0);
    
    for (let i=0; i < trust.length; i++) {
        indegree[trust[i][1]]++;
        outdegree[trust[i][0]]++;
    }
    
    for (let i=1; i <= N; i++) {
        if (indegree[i] === N-1 && outdegree[i] === 0){
            return i;
        }
    }
    return -1;
}


var findJudge1 = function(N, trust) {
    if (N === 1) return 1;
    
    let hash = {};
    let judge;
    for(let i=0; i < trust.length; i++) {
        
        if (hash.hasOwnProperty(trust[i][1])){
            hash[trust[i][1]]++;
        } else {
            hash[trust[i][1]] = 1;
        }
        if (hash[trust[i][1]] === N-1){
            judge = trust[i][1];
        }
    }

    for (let i=0; i < trust.length; i++){
        if (trust[i][0] === judge){
            return -1;
        }
    }  
    return judge ? judge : -1;
};