function movingNegative(arr) {
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            if (i !== j) {
            
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
            j++;
        }
    }
    return arr;
}

console.log(movingNegative([-1, -2, -3, 4, 5, 6]));
