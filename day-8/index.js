const obj={
    name:"sathish",
    age:25,
    job:"full Stack Developer",
    address:{
        house:29,
        street:"Muthu Nagar",
        area:"Kagithapattrai",
        city:"Vellore",
        state:"TamilNadu",
        country:"India",
        pincode:632012

    },

    getBirthYear(){
        let current=new Date().getFullYear();
        const birthYear=current-this.age;
        return birthYear;
    },

    getFullAddress(){
    let address=Object.values(this.address);
    return address.join(",");
    }

}

console.log(obj.getBirthYear());
console.log(obj.getFullAddress());




//flatten the obj

function flat(obj){
    const flattedObj={};

for(let key in obj){
if(typeof obj[key]=="object"){
    flat(obj[key]);
}else{
    
}


}

}