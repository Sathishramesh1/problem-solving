
function reverse(arr){

    
    for(let start=0,end=arr.length-1;start<end;start++,end--){
      arr[start]=arr[start]+arr[end];
      arr[end]=arr[start]-arr[end];
      arr[start]=arr[start]-arr[end];

    }

return arr
}

console.log(reverse([1,2,3,4,5,6,7]));