//Write a function that checks if a given string is a palindrome.

function isPalindrome(str){

    const result=str.split("").reverse().join("");

    return str===result


}

console.log(isPalindrome("madam"));