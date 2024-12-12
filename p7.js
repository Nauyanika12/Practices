function counter(){
    for(var i=1;i<=3;i++){
        console.log(`i is ${i} outside of settimeout`);
            setTimeout(function(){
            console.log(i)
        },i*1000)
        }
    }
        counter()





        for (var a=1;a<=10;a++){
            console.log(a*2)
        }

        const greet="hello world"
        for(const i of greet){
            console.log(i)

        }