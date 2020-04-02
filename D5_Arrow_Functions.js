/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */

//  The first one I came up with
function modifyArray(nums) {
    return nums.map( s => {
            if(s % 2 == 0) return s * 2
            else return s * 3
        })
}

// Other shorter and perhaps more elegant
function modifyArrayMod(nums) {
    return nums.map( 
            s => s = (s % 2 == 0) ? s * 2 :  s * 3
        )
}


nums = [1, 2, 3, 4, 5];

console.log(modifyArray(nums))
console.log(modifyArrayMod(nums))
