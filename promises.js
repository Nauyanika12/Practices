var dataset=newpromises((resolve,reject)=>{

setTimeout(()=>{
    console.log("loaded")
},1000)



})

dataset.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
}) 