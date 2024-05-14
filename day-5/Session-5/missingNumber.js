//Given an array nums containing n distinct numbers in the range [0, n], 
// return the only number in the range that is missing from the array.

function missing(nums){

 const n=nums.length;

 const sumOfNatural=(n*(n+1)/2);

 let sum=0;
 for(let i=0;i<n;i++){
    sum+=nums[i];
 }
 
  return sumOfNatural-sum;  
   
}

const nums = [3,0,1];

console.log(missing(nums));