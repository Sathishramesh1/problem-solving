//Explain the concept of anagram and write a function to check if two strings are anagrams of each other.

function isAnagram(str1,str2){

if(str1.length!==str2.length){
    return false
}

const str1Sorted=str1.split("").sort();
const str2Sorted=str2.split("").sort();

for(let i=0;i<str1Sorted.length;i++){

    if(str1Sorted[i]!==str2Sorted[i]){
        return false
    }

}

return true

}

console.log(isAnagram("silent","listen"));