

function rotate(arr,k){
       

    for(let i=0;i<k;i++){
     
    
       arr.unshift(arr.pop());

    }

return arr;
}

console.log(rotate([1,2,3,4,5],13));
