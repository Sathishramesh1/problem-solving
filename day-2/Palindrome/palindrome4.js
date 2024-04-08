function isPalindrome(str){

    
    const length=str.length-1;

    for(let i=0;i<length/2;i++){
        
        if(str[i]!==str[length-i]){
            return false
        }
    }

    return true


}

console.log(isPalindrome("malayalam"));