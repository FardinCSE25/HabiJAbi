function smallest(arr){
    let smallest = arr[0]
    for(const names of arr){
        if(names.length < smallest.length){
            smallest = names;
        }
    }
    return smallest;
}

const names = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
const smallestName = smallest(names)
console.log(smallestName)

