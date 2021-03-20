/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
/*
Keep track of the characters that we have encountered and its count
If the character is in the bottom of the stack, meaning we have a duplicate, increment its count by 1
If not a dup, append it to the stack with count of 1
If the character's count equals to k, removing it by pop this element off the stack
For everything that's remained in the stack, iterate over and repeat base on its count

1209. Remove All Adjacent Duplicates in String II

Constraints:

1 <= s.length <= 10^5
2 <= k <= 10^4
s only contains lower case English letters.

Input: s = "deeedbbcccbdaa", k = 3
Output: "aa"

*/
var removeDuplicates = function(s, k) {
    const stack = [];
    
    for(let char of s) {
        if(stack.length && stack[stack.length-1][0] === char) {
            stack[stack.length-1][1] += 1;
            if(stack[stack.length-1][1] === k) {
                stack.pop();
            }
        } else {
            stack.push([char, 1]);
        }
    }   
    
    let res = '';  
    for(let [char, count] of stack) {
        res += char.repeat(count);
    } 
    return res;
};


var removeDuplicates2 = function(s, k) {
    let stack = [["", 0]];
    
    for (let char of s) {
        let [prev, count] = stack[stack.length-1];
        if ( char === prev) {
            if (count === k-1){
                while(count > 0){
                    stack.pop();
                    count--;
                }
            }else{
                stack.push([char, count+1]);
            }
        } else {
            stack.push([char, 1]);
        }
    }
    return stack.map(x => x[0]).join("");
}

/*
var removeDuplicates = function(s, k) {
  let count = 0;
    
  for (let i = 0; i < s.length; i++) {
    if (i < 0) i = 0;
    count++;
      
    if (s[i] !== s[i+1] && count >= k) {
      s = s.slice(0, i - count + count % k + 1) + s.slice(i + 1);
      i = i - count-k;   
      count = 0;
    } 
    else if (s[i] !== s[i+1] && count < k) {
      count = 0;
    } 
  }
  return s;
};
*/

/*
var removeDuplicates = function(s, k) {
    const stack = [['', 0]];
    
    for(let char of s) {
        let [prev, count] = stack[stack.length-1];
        
        if(char == prev) {
            if(count == k-1) while(count--) stack.pop()
            else stack.push([char, count+1]);
        } else stack.push([char, 1]);
    }
    return stack.map(x => x[0]).join('');
};

*/
/*
var removeDuplicates = function (s, k) {
	// create an array with size n, the index maps with the count of that string index
	// eg: k = 3, 'aaabcv' => [1,2,3,0,0,0], 'bcv' => [1,1,1,0,0,0]
	// eg: k = 3, 'abcdd' => [1,1,1,1,2]
  let counts = Array(s.length).fill(0);
  s = s.split('');

  for (let i = 0; i < s.length; i++) {
      
    if (i == 0 || s[i] !== s[i - 1]) {
      counts[i] = 1;
    } else {
      counts[i] = counts[i - 1] + 1;
      if (counts[i] === k) {
        s.splice(i - k + 1, k);
		  // reset the index to i-k
        i = i - k;
      }
    }
  }
  return s.join('');
};

*/

var removeDuplicates8 = function (s, k) {
  s = s.split('');

  let length = -1;
	// when the length changes, iterate again
  while (length !== s.length) {
	  // remember the length of current string
    length = s.length;
	  // reset count for each new iteration
    for (let i = 0, count = 1; i < s.length; ++i) {
		// when first or current is not equal to previous
      if (i === 0 || s[i] !== s[i - 1]) {
		  // reset count to 1
        count = 1;
		// if the current is the same as previous one
      } else {
		  // increase the count
        count++;
		  // if the count equals to k
        if (count === k) {
			// delete the last k characters
          s.splice(i - k + 1, k);
			// leave the loop
          break;
        }
      }
    }
  }
  return s.join('');
};



// Brute Force very slowly
var removeDuplicates9 = function(s, k) {
    let stack = [];
    
    for (let i=0; i < s.length; i++){
        if (stack.length < k-1) {
            stack.push(s[i]);
        }else{
            let kk = 0;
            for (let j=stack.length-1; j >=0; j--){
                if (stack[j] === s[i]){
                    kk++;
                } else {
                    break;
                }
            }
            if (kk === k-1){
                while (kk > 0){
                    stack.pop();
                    kk--;
                }
            }else{
                stack.push(s[i]);                
            }
        }
    }
    return stack.join("");
};
