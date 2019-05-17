function reverseArray(array){
    let reversedArray = [];
    for (let i = 1; i <= array.length; i++){
        reversedArray.push(array[array.length - i]);
    }
    return reversedArray
}

console.log(reverseArray([1, 2, 3, 4, 5]))