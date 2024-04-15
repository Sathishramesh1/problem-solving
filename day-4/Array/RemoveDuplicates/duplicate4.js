function removeDuplicates(arr) {

    arr = arr.sort((a, b) => a - b)

    let ind = 0;
    for (let ind1 = 0; ind1 < arr.length; ind1++) {
        if (arr[ind1] != arr[ind1-1]) {
            arr[ind++] = arr[ind1]
        }
    }
    arr.length = ind;

    return arr

}

console.log(removeDuplicates([1, 2, 3])); 
console.log(removeDuplicates([1, 2, 3, 1, 2, 0, 4, 5, 7, 3, 2, 6, 7]));
