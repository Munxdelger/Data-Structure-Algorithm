/**
 * @param {number[][]} image
 * @return {number[][]}
 
 832. Flipping an Image
 
 Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.

To flip an image horizontally means that each row of the image is reversed.

For example, flipping [1,1,0] horizontally results in [0,1,1].
To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.

For example, inverting [0,1,1] results in [1,0,0].

Constraints:
n == image.length
n == image[i].length
1 <= n <= 20
images[i][j] is either 0 or 1.
 
 */
var flipAndInvertImage = function(image) {
    
    for (let i=0; i < image.length; i++) {
        let len = image[i].length;
        for (let j=0; j < (len)/2; j++) {
            let temp = image[i][j] ^ 1;
            image[i][j] = image[i][len-1-j] ^ 1;
            image[i][len-1-j] = temp;
        }
    }
    // for (let i=0; i < image.length; i++) {
    //     let len = image[i].length;
    //     for (let j=0; j < len; j++) {
    //         image[i][j] = image[i][j] === 1 ? 0 : 1;
    //     }
    // }
    return image;
};