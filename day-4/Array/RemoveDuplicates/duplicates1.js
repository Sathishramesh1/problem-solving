function removeDuplicates(arr) {
    const unique = [];

    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < i; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }
        
        if (count === 0) {
            unique.push(arr[i]);
        }
    }

    return unique;
}

console.log(removeDuplicates([1, 2, 3])); 
console.log(removeDuplicates([1, 2, 3, 1, 2, 0, 4, 5, 7, 3, 2, 6, 7]));
