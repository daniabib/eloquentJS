function arrayToList(array){
    list = null;
    for (let i = array.length - 1; i >= 0; i--){
        list = {value: array[i], rest: list};        
    }
    return list;
}

console.log(arrayToList([10, 20, 30]));