const numbers = [1,15,522,38,54,46,97,12,58];

function sortNumber(numbersArray){
    const sortedNumbers = numbersArray.sort((a,b) => a-b);
    return sortedNumbers;
}

console.log(sortNumber(numbers));
