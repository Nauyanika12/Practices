const student={
    fname:"John",
    lname:"Doe",
    age:20,
    grade:90,
    getfullname()
{
    return this.fname+"  "+this.lname
}

}
 
console.log(student.getfullname())

function countDown(callback){
    setTimeout(() => {
        callback("countdown finished")
    },3000)
}
    countDown((val)=>console.log(val))