// Please note, if anyoe reading, this one is one the poorest problems written in HackerRank


/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
    let [area, perimeter] = expressions;

    let root = Math.sqrt(perimeter * perimeter - 16 * area);

    let s1 = (perimeter + root) / 4;
    let s2 = (perimeter - root) / 4;

    return [s1, s2].sort(function(a, b){return a-b})
}


// Main()
let s1 = 10;
let s2 = 14;
    
[s1, s2] = [s1, s2].sort();
    
const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;

console.log((s1 === x) ? s1 : -1);
console.log((s2 === y) ? s2 : -1);