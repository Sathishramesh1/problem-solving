

function sumOfDigits(num) {
    if (num < 10) return num;
    let temp = num%10
    return temp + sumOfDigits((num-temp) / 10);
}


console.log(sumOfDigits(123)); 
