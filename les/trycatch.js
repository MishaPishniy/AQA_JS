try { 

    let a = 10
    let b = 0
    if ( b === 0 ) {
        throw new Error("Ділення на нуль")
    }
    let result = a / b 
    console.log(result)
}
catch(error){
    console.log("Помилка" + error.message)
}
finally {
    console.log("код який завжди працює")
}



try {
    let age = -5;
    if (age < 0) {
          throw new Error("age не може бути < 0")
    }
    console.log("age нормальний")
}
catch(error) {
    console.log("Є помилка")
    console.log(" помилка" , error.message)
    console.log(" помилка" , error.stack)
}
