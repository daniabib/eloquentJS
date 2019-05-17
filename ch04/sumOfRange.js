function range(start, end, step = start < end ? 1 : -1){
    array =[]

    if (step > 0) {
        for (let i = start; i <= end; i += step) array.push(i);
    } else {
        for (let i = start; i >= end; i =+ step) array.push(i);
    }
    return array;
}

function sum(array){
    let sum = 0;
    for (let index of array){
        sum += index;
    }
    return sum;
}

console.log(sum(range(1, 10)));