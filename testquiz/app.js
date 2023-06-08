const numbers = [65, 44, 12, 4];
// C1:
const newArr = numbers.map(myFunction);

function myFunction(num) {
  return num * 10;
}
console.log(newArr);

// C2
// let newArr2 = [];
// for (let i = 0; i < numbers.length; i++) {
//   newArr2.push((numbers[i] *= 10));
// }

// console.log(newArr2);

//C3
let newArr3 = numbers.map((element) => {
  return element * 10;
});
console.log(newArr3);
