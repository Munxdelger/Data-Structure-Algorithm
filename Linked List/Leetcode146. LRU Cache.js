/*
146. LRU Cache
Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:

LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
int get(int key) Return the value of the key if the key exists, otherwise return -1.
void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
Follow up:
Could you do get and put in O(1) time complexity?
Constraints:

1 <= capacity <= 3000
0 <= key <= 3000
0 <= value <= 104
At most 3 * 104 calls will be made to get and put.
*/

/**
 * @param {number} capacity
 */
const Node = function(key,val){
    this.key = key;
    this.val = val;
    this.next = null;
    this.prev = null
};

var LRUCache = function(capacity) {
    this.bigSize = capacity;
    this.head = new Node();
    this.tail = new Node();
    this.head.next = this.tail;
    this.tail.prev = this.head;
    
    this.map = new Map(); 

};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.map.has(key)){
        let curNode = this.map.get(key);
        this.delete(curNode);      
        this.addHead(curNode);
        
        return curNode.val;
    } else {
        return -1;
    }
};

LRUCache.prototype.delete = function(node) {   
    node.next.prev = node.prev;
    node.prev.next = node.next; 
}

LRUCache.prototype.addHead = function(node) {   
    let temp = this.head.next;
    this.head.next = node;
    temp.prev = node;
    node.prev = this.head;
    node.next = temp;
}

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
// {key : node}
 

LRUCache.prototype.put = function(key, value) {
    
    if (this.map.has(key)){
        let curNode = this.map.get(key);
        curNode.val = value;
        this.delete(curNode);      
        this.addHead(curNode); 
        
    } else {
        let cur = new Node(key, value);
        if (this.map.size === this.bigSize){  
            
            let remove = this.tail.prev.key;       
            this.delete(this.tail.prev);      
            this.map.delete(remove);   
        } 
            this.map.set(key, cur);  
            this.addHead(cur);    
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */