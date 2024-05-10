

function commonElement(arr1,arr2){
   const count=new Set(arr1);
   const result=[];

   for(let ele of arr2){
    if(count.has(ele)){
        result[result.length]=ele;
        count.delete(ele);
    }
   }
 
    
 
 
 return result
 
 }
 
 const arr1=[1,2,3,4,2,5,6];
 const arr2=[2,3,5,7,9,2,10];
 console.log(commonElement(arr1,arr2));