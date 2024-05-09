//without using extra space

function removeDuplicates(arr){
for(let i=0;i<arr.length;i++){
if(arr[i]!==null){
   for(let j=i+1;j<arr.length;j++){
    if(arr[i]==arr[j]){
        arr[j]=null;
    }
   }
}
}

let slowIdx=0;
for(let fastIdx=0;fastIdx<arr.length;fastIdx++){

if(arr[fastIdx]){
    arr[slowIdx++]=arr[fastIdx]
}

}

  arr.length=slowIdx;

  return arr
  }
  
  console.log(removeDuplicates([1,1,2,3,4,2,71,5,30,172]));