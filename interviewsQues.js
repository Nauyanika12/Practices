//find the missing number from gvien array input

let arr=[1,2,3,5]
count=10
output=[]
for(let i=1;i<count;i++){
!arr.includes(i)?output.push(i):""
}
console.log(output)

//replace with spaces and capitalize words

// replace=(str)=>{
// const fragment=str.split("_")
// console.log(fragment)

// for(let i=0;i<fragment.length;i++){
//     fragment[i]=fragment[i].charAt(0).toUpperCase(),
//     fragment[i].slice(1)
// }
// console.log(fragment.join(" "))
// }
// replace("ui_dev_guide")



//count cpunt occurrences of no in given array input


const arr1=[5,5,5,2,2,2,2,9,4]
const res={}
for (let i of arr1){
    if(res[i]){
        res[i]++
    }
    else{
        res[i]=1
    }
}
console.log(res)







//count count occurrence of no, in given object



let people=[
    {name: "Joessi",gender: "girl"},
    {name: "Alice",gender: "boy"},
    {name: "Bobina",gender: "girl"},
    {name: "John",gender: "boy"},
    {name: "Alice",gender: "boy"},

]

const countboy=people.reduce((count,i)=>{
 return count+(i.gender=="boy")
},0)
console.log("boy no:",countboy)

const countgirl=people.reduce((count,i)=>{
    return count+(i.gender=="girl")
   },0)
   console.log("girl no:",countgirl)
   