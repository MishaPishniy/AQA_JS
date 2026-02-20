//Global Scope

let sum = 5 

function sumAll () {
   /* const x = sum +2 
    console.log(x) */
    console.log(sum)

}
sumAll()

sum = 6 ;
console.log(sum)

//Function Scope
let x = 11
function test ( ){
    let x1 = 10 ;
    console.log(x1)
}
console.log(x)
test()

//Block Scope

if (true) {
    let a = 20
}
console.log(a)


function test ( ){
    let x1 = 10 ;
    console.log(x1)
        if(true) {
             let a = 21
                }
     console.log(a)
}   


//function - function 

function out () {

    let x = 2 

        function inner () {
            let x 
            console.log(x)
        }

inner()
}

out()