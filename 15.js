// STRING PARATICE SET(CHAPTER-4)
// P-1
// let L = "har\""
// console.log(L.length)

// P-2
// include
// const sentence = "The quick brown fox jumps over the lazy dog.";
// const word = "fox";
// console.log(sentence.includes(word))// [ye batata h ki condition trueh ya false]
// console.log(
//   `The word "${word}" ${
//     sentence.includes(word) ? "is" : "is not"
//   } in the sentence`
// );// [ye batata h ki condition true hone pr or false hone pr kya print hoga]


// Startwith
// const str1 = 'Saturday night plans';
// console.log(str1.startsWith('Sat'));
// // Expected output: true
// console.log(str1.startsWith('Sat', 3));
// // Expected output: false


// Endswith
const str1 = 'Cats are the best!';
console.log(str1.endsWith('best!'));
// Expected output: true
console.log(str1.endsWith('best', 17));// [isme second prameter character ko count kar rha h]
// Expected output: true
const str2 = 'Is this a question?';
console.log(str2.endsWith('question'));
// Expected output: false


// P-3
let p = "Ram"
console.log(p.toLowerCase())

// P-4
let ap = "please give Rs 1000"
let amount = Number.parseInt(ap.slice(15))
console.log(amount)
console.log(typeof amount)

// P-5
let i = "Lucky"
i[0] = "P"
console.log(i)//i is not change because string is immutable.
// console.log(i.replace("L","R"))