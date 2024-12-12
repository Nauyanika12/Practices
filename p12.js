const square=function(num){
    return num*num;
}
console.log(square(5))


function clock(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    console.log(hours,":",minutes,":",seconds)

}

setInterval(clock,1000)