var arr=[1,2,3,4,5,6,7]
let sum=arr.reduce((acc,cur)=>{
    return acc+cur
})
console.log(sum)
var str= "apple"
var obj={}
for(let i of str){
 if(obj[i]){
    obj[i]+=1
 }
 else{
    obj[i]=1
 }
}
console.log(obj)




function occ(str){
    var name={}
str.split("").forEach(element => {
    if(name.hasOwnProperty(element)=== false){
        name[element]=1
    }
    else{
        name[element]+=1
    }
});
return name
}
console.log(occ("sitaramji"))