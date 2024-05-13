function missing(arr){
   
    let n=arr.length 
    let sumOfNatural=(n*(n+1))/2;
//   console.log(sumOfNatural)
    let sum=0;

    for(let i=0;i<n;i++){
    sum+=arr[i];

    }


return Math.abs(sum-sumOfNatural);

}

console.log(missing([1,2,3,5,5]));
