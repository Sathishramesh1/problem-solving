

function isAnagram(str1,str2){

    if(str1.length!==str2.length){
        return false
    }
    
    const count={};

    for(let i=0;i<str1.length;i++){
    
       if(count[str1[i]]){
        count[str1[i]]=count[str1[i]]+1;
       }else{
        count[str1[i]]=1;
       }
    }
    
    
    for(let i=0;i<str2.length;i++){
           if(count.hasOwnProperty(str2[i])&& count[str2[i]]>0){
            count[str2[i]]=count[str2[i]]-1;
           }else{
            return false
           }


    }
 return true
    
    }
    
    console.log(isAnagram("silent","listen"));