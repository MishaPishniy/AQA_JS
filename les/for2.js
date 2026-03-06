for ( let i = 1 ; i <= 10 ; i ++){
    
    if ( i === 3) {
        continue;
    }

    if ( i === 8) {
        break;
    }
    console.log(i)
} 


let j =0
while ( j < 5) {
    j++;
    if( j%2 === 0) continue;
    console.log("не парне " + j)
}