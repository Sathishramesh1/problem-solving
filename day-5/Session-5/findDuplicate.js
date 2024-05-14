
/*
Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space.
*/

function findDuplicate(nums){


    for(let i=0;i<nums.length;i++){
   
        let index=Math.abs(nums[i])-1;

     if(nums[index]<0){
        return Math.abs(nums[i]);
     }

     nums[index]=-nums[index];

    }


}
const nums = [1,3,4,2,2];

console.log(findDuplicate(nums));