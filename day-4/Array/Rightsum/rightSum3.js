

function rightSum(arr){

    let sum=0;
    
    for(let end=arr.length-1;end>=0;end--){

     
     sum+=arr[end];
     arr[end]=sum-arr[end];

    }

    

return arr
}

console.log(rightSum([5,6,7,8,9,10]))