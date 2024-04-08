

function isAnagram(str1,str2){

    if(str1.length!==str2.length){
        return false
    }

   const CountMap=new Map();
   
   for(let ele of str1){

    if(CountMap.has(ele)){
        CountMap.set(ele,CountMap.get(ele)+1);
    }else{
        CountMap.set(ele,1);
    }
   }

   for(let ele of str2){
    if(CountMap.has(ele) && CountMap.get(ele)>0){
        CountMap.set(ele,CountMap.get(ele)-1);
    }else{
        return false
    }

   }
   return true
    
    }
    
    console.log(isAnagram("silent","listen"));