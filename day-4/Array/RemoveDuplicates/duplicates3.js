function removeDuplicates(arr) {

    const seen={};
    const unique = [];

    for (let i = 0; i < arr.length; i++) {
       if(!seen[arr[i]]){
        unique.push(arr[i])
       }


    }

    return unique;
}

console.log(removeDuplicates([1, 2, 3])); 
console.log(removeDuplicates([1, 2, 3, 1, 2, 0, 4, 5, 7, 3, 2, 6, 7]));
