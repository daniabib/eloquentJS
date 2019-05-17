function countB(string) {
    count = 0;
    for (let i = 0; i < string.length; i++){
        if (string[i] === "b" || string[i] === "B"){
            count++;
        }
    }
    // return integer
    return count;
}

function countChar(string, char) {
    count = 0;
    for (let i = 0; i < string.length; i++){
        if (string[i] == char){
            count++;
        }
    }
    // return integer
    return count;
}