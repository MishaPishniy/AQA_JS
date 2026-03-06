function sum(a, b) {
  return a + b;
}


let total = 0;

function add(x) {
  total += x;
}


//рекурсія
function sum(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sum(arr.slice(1));
}
sum([1, 2, 3]);


for( i = 0 ; i <= 5 ; i++) {
 console.log(i)
}

function print(i) {
    if (i > 5 ) return ;
    console.log(i)
    print(i+1)
}
print(0)


