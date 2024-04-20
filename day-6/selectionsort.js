
const arr=[1,4,1,4,6,87,0,3,2,5,2];

function selectionSort(arr){

for(let ind=0;ind<arr.length;ind++){
    let minIndex = ind;
   for(let secondInd=ind+1;secondInd<arr.length;secondInd++){
    if (arr[secondInd] < arr[minIndex]) {
        minIndex = secondInd;
    }    
   }

   if (minIndex !== ind) {
    let temp = arr[ind];
    arr[ind] = arr[minIndex];
    arr[minIndex] = temp;
}
}
return arr

}

console.log(selectionSort(arr));