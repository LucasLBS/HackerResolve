/*
    To solve this problem just keep in mind that it is necessary to go through the array 
    by summing each index of the array with its predecessor 
    and to solve this task in an elegant way the redux method was used.
*/

// Complete the aVeryBigSum function below.
function aVeryBigSum(ar) {
    const sum = (result, currentValue) => result + currentValue;
    return ar.reduce(sum);
}

const ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
console.log(aVeryBigSum(ar));