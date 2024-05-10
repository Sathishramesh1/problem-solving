
let arr=[1,2,3,4,5,6,7,8];

function reverse(arr){

let left=0;
let right=arr.length-1;

while(left<right){
    arr[left]=arr[left]+arr[right];
    arr[right]=arr[left]-arr[right];
    arr[left]=arr[left]-arr[right];
left++;
right--

}

return arr

}


console.log(reverse(arr));