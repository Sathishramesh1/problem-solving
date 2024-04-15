

function rightSum(arr){

    let sum=arr.reduce((acc,curr)=>acc+curr,0);
    
    for(let i=0;i<arr.length;i++){
       arr[i]=sum-arr[i];
       sum=arr[i]

    }

    

return arr
}

console.log(rightSum([5,6,7,8,9,10]))