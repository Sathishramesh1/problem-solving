function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left >= right) {
        return;
    }

    const pivot = arr[Math.floor((left + right) / 2)];
    let i = left;
    let j = right;

    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (i <= j) {
            [arr[i], arr[j]] = [arr[j], arr[i]]; 
            i++;
            j--;
        }
    }


    quickSort(arr, left, j); 
    quickSort(arr, i, right); 
}

const arr = [-3, -5, -1, 1, 3, 2, 1, 8, 9, 2];
quickSort(arr);
console.log(arr);
