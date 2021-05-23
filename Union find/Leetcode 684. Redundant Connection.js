// 684. Redundant Connection


class DSU {
    constructor (n){
        this.arr = new Array(n).fill(0);
        for (let i=0; i < this.arr.length; i++){
            this.arr[i] = i;
        }    
    }
    
    findRoot(v) {
        if (this.arr[v] === v) {
            return v;
        } 
        this.arr[v] = this.findRoot(this.arr[v]);
        return this.arr[v];
    }
    
    mergeRoot(v,u) {
        let firstParent = this.findRoot(v);
        let secondParent = this.findRoot(u);
        this.arr[secondParent] = firstParent;
    } 
}

var findRedundantConnection = function(edges) {
    let dsu = new DSU(edges.length);
    
    for (let el of edges) {
        let parent1 = dsu.findRoot(el[0]-1);
        let parent2 = dsu.findRoot(el[1]-1);
        if ( parent1 === parent2){
            return el;
        }
        dsu.mergeRoot(el[0]-1, el[1]-1);
    }
    return [-1,-1];
};