//using extra space
function removeDuplicates(arr){
  const seen={};
  
  for(let i=0;i<arr.length;i++){
    seen[arr[i]]=true
  }

  arr.length=0;
  for(let key in seen){
    arr[arr.length]=+key;

  }

  return arr

}

console.log(removeDuplicates([1,1,2,3,4,2,71,5,30,172]))