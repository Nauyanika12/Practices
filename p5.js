 //sort array of object------------


 const arr=[{
    "name": "John",
    "age": 30
    },
    {
        "name": "Alice",
        "age": 25
 },
 {
    "name": "Bob",
    "age": 35
 },
 {
    "name": "Charlie",
    "age": 20}
]
var output=arr.map((e)=>{
    return e.age

})
.sort((a,b)=>{
    return a-b
    })
    console.log(output)
