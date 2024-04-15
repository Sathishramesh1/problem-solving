

function rightSum(arr){


    for(let i=0;i<arr.length;i++){
     let sum=0;
     for(let j=i+1;j<arr.length;j++){
        sum+=arr[j];
     }
    
arr[i]=sum;

    }
    console.log(arr);

return arr
}

console.log(rightSum([5,6,7,8,9,10]))