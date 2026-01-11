function repeatCount(array, number){
    let count = 0;
for(const note of array){
    if(note === number){
        count++;
    }
}
    return count;
}

const numbers = [5,6,11,12,98, 5, 12, 62];
const find = 98;
console.log(repeatCount(numbers, find));