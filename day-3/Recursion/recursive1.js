
function recursive(num){
   if(num<10){
    console.log(num);
    recursive(num+1);
   }

}

recursive(1);