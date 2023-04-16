function GetSequence(low, high) {
    let numbers = [];
    for (var i = low; i <= high; i++) {
        numbers.push(i);
    }
    return numbers;
}
console.log(GetSequence(98,100));