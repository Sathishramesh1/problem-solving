

function commonElement(arr1,arr2){
   const count={};
 const result=[];

   for(let ele of arr1){
     count[ele]=true
   }

   for(let ele of arr2){
    if(count[ele]){
        result.push(ele);
        delete count[ele]
    }

   }


return result

}

const arr1=[1,2,3,4,2,5,6];
const arr2=[2,3,5,7,9,2,10];
console.log(commonElement(arr1,arr2));