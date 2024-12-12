
for(let i=1;i<=5;i++){

setTimeout(()=>{
    console.log(i)
},1000)

}

//map use-----

const nums=[1,2,3,4]
const multithree=nums.map((num)=>{
    return num*3
})
console.log(multithree)


//filter use----------
const num=[1,2,3,4]
const multithrees=num.filter((i)=>{
    return i<3
})
console.log(multithrees)


//reduce use-----
const n=[1,2,3,4]
const mul=n.reduce((acc,i)=>{
    return acc+i
    },0)
    console.log(mul)

let student=[
    {name:"john",age:20,marks:55},
    {name:"jane",age:21,marks:65},
    {name:"jim",age:22,marks:75},
    {name:"jimi",age:20,marks:70},
]

const filmarks=student.filter((s)=>{
    return s.marks>60 && s.age>20
})
console.log(filmarks)

const summarks=student.reduce((acc,curr)=>acc+curr.marks,0)
console.log(summarks)
































