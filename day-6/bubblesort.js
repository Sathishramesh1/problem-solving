const arr=[1,4,1,4,6,87,0,3,2,5,2];


function bubbleSort(arr){
for(let i=0;i<arr.length;i++){
  for(let j=0;j<arr.length;j++){
  if(arr[j]<arr[j-1]){
    const temp = arr[j];
    arr[j] = arr[j - 1];
    arr[j - 1] = temp;
  }
  }

}}

bubbleSort(arr);
console.log(arr);