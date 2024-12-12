var students=['shiva','Ram','shitaraman','radhe']
let houses=[]
for(let student of students){
    
    if(student.length<4){
        houses.push("houseno.1")
    }
    else if(student.length<6){
        houses.push("houseno.2")
    }
    else{
        houses.push("houseno.3")
    }
}
console.log(houses)