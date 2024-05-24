
function sort(arr,low,high){
    if(low >= high){
        return;
    }
    let start=low;
    let end=high;
    let pivot=arr[Math.floor((start+end)/2)];
    
    while(start<=end){
        
        while(arr[start]<pivot){
            start++;
        }
        
        while(arr[end]>pivot){
            end--;
        }
        
        if(start<=end){
            [arr[start],arr[end]]=[arr[end],arr[start]];
            start++;
            end--
        }
        
    }
    
    sort(arr,low,end);
    sort(arr,start,high);
    
}

const arr=[2,3,5,7,3,-1,3,-5];
sort(arr,0,arr.length-1);
console.log(arr)