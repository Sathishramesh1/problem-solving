


function quickSort(arr){

    const left=[];
    const right=[];

   const pivot=arr[0];



   for(let i=0;i<arr.length;i++){
     if(arr[i]<pivot){
        left.push(arr[i]);
     }else{
        right.push(arr[i]);
     }
   }



return [...left,pivot,...right];

}

console.log(quickSort([-3,-5,-1,1,3,2,1,8,9,2]));