

function rotate(arr,k){
       
const rem=k%arr.length

    for(let i=0;i<rem;i++){
     
    
       arr.unshift(arr.pop());

    }

return arr;
}

console.log(rotate([1,2,3,4,5],13));
