

function rotate(arr,k){
       
    for(let i=0;i<arr.length;i++){
     arr[i]=arr[[i+k]%arr.length]

    }

    
    return arr;
    }
    
    console.log(rotate([1,2,3,4,5],13));
    