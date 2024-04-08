
function findMaxMin(arr){

    let max=arr[0];
    let min=arr[1];

    for(let i=0;i<arr.length;i++){

        if(arr[i]>max){
            max=arr[i];
        }
        if(arr[i]<min){
            min=arr[i]
        }
    }


return [max,min];


}

console.log(findMaxMin([1,3,5,8,0,-5]));