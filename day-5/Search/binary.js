

// time complexity-O(logn);
function binarySearch(arr,ele){
let start=0;
let end=arr.length-1;

while(start<=end){
    let mid=Math.floor((start+end)/2);

if(arr[mid]==ele){
      return mid;
} else if(arr[mid]<ele){
     start=mid+1;
} else if(arr[mid]>ele){
    end=mid-1;
}

}

return -1;
}
let num=0
const arr=Array.from({length:100},()=>num++);
// console.log(arr)
console.log(binarySearch(arr,100));