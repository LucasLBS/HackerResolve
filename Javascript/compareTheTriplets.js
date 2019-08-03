/*
    For this resolution it is necessary to create a new array
    with the first two indexes equal to 0, 
    going to the next step which is to go through the arrays provided by the algorithm 
    checking if the results of their indexes are different 
    and incrementing a point for the person who has the result of the higher index.
*/
function compareTriplets(a, b) {
    let result = [0, 0];

    for (let i = 0; i < a.length; i++){
        if(a[i] != b[i]){
            a[i] > b[i] ? result[0] += 1 : result[1] += 1;
        }
    }

    return result;
}
let result = compareTriplets([17 ,28 ,30], [99 ,16 ,8]);
console.log(result);
  