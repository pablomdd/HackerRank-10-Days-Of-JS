let getMaxLessThanK = function (n , k) {
    // Complexity around n log n
    let value = 0;

    // this will execute for all the pairs a < b in the numeric set {1,2,...,n}
    for(let i = 1 ; i <= n; i++){
        for(let j = i; j <= (n - 1); j++){
            let bitwise = i & (j+1);
            value = ((bitwise) < k) && ((bitwise) > value) ? bitwise : value;            
            // console.log(`${i} ${j+1}`)
        }
    }   
    return value
}


// Evalulation
let n = 8;
let k = 3;

console.log(getMaxLessThanK(n, k));