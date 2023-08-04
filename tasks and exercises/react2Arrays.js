function transformToObjects (numberArray){
    console.log(numberArray[1]);
    return numberArray.map(item => {
        return {val: item}
    });
}

const display = transformToObjects([1,2,3]);
console.log(display);
