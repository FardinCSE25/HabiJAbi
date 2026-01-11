function lowestNumber(arr) {
    const lowest = Math.min(...arr);
    return lowest
}

const heights2 = [167, 190, 120, 165, 137, 80, 210];
const lowest = lowestNumber(heights2);
console.log(lowest);
