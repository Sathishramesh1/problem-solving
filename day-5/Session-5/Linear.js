function linerSearch(arr,ele){

for(let i=0;i<arr.length;i++){
  if(arr[i]===ele){
    return i;
  }
  }

return -1;

}


console.log(linerSearch([10,4,6,-1,5],6));