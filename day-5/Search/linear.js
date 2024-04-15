

//time complexity-O(n);
function linearSearch(arr,ele){
 for(let i=0;i<arr.length;i++){
    if(arr[i]==ele){
        return i;
    }
 }  

 // if element not in given array
return -1

}

console.log(linearSearch([1,2,3,4,5,6,7,8,9],10));
console.log(linearSearch([1,2,3,4,5,6,7,8,9],5));