function all()
{
    var a=b=3
    console.log(typeof a)
console.log(typeof b)
}
all()
var arr=[1,2,4,6,77,55,44]
var sortarr=arr.sort((a,b)=>{
    return a-b

})
console.log(sortarr)


//Important-------- count the string

const str="har har mahadev ji"
const obj={}
for(let x of str){
    if(obj[x]){
        obj[x]+=1
    }
    else{
        obj[x]=1
    }
}
console.log(obj)