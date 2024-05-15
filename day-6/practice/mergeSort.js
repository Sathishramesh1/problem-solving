
function mergeSort(arr){
if(arr.length<2){
    return arr;
}


let mid=Math.floor((arr.length)/2);

const leftSorted=mergeSort(arr.slice(0,mid));
const rightSorted=mergeSort(arr.slice(mid));


return merge(leftSorted,rightSorted);


}


function merge(leftArr,rightArr){
const result=[];

let left=0;
let right=0;

while(left<leftArr.length&& right<rightArr.length){
    if(leftArr[left]<rightArr[right]){
        result.push(leftArr[left]);
        left++;
    }else{
        result.push(rightArr[right]);
        right++;
    }
}

while(left<leftArr.length){
    result.push(leftArr[left]);
    left++
}

while(right<rightArr.length){
    result.push(rightArr[right]);
    right++
}



return result
}


console.log(mergeSort([-1,4,7,1,0,-2,4,9,5,2,1]));




