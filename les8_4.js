 const nums = [1, 2, 3];
 const doubled = nums.map(n => n * 2); 
 console.log(doubled)


 const nums2 = [1, 2, 3, 4, 5];
 const doubled2 = nums2.filter(n => n%2 === 0); 
 console.log(doubled2)



const sentence = "Це речення,має кілька слів";
const words = sentence.split(" ");
console.log(words);

const fruits = ["яблуко", "банан", "полуниця"];
const fruitString = fruits.join(", ");
console.log(fruitString); 



const arr1 = [1,2,3]
const arr2 = [...arr1];
const arr3 = arr1.slice();
arr3.push(4) 
arr2.push(4) 
console.log(arr1);
console.log(arr2);
console.log(arr3);


const arr4 = [[1],[2]]
const arr5 = [...arr4]
console.log(arr4);
arr5[0].push(99)
console.log(arr5);



const arr1 = [1,2,2,2,3,3,3,3,3,3,3]
const uniqeArr = [...new Set(arr1)]
console.log(uniqeArr)