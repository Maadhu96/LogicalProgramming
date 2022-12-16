// let array = [12, 45, 76, 88, 12, 98, 78, 98, 34, 88];

// let duplicate = array.filter((ele, index, arr) => arr.indexOf(ele) !== index);
// console.log(duplicate);

// ================================================

let arr = ["apple", "mango", "apple",
"orange", "mango", "mango"];

function removeDuplicates(arr) {
  return arr.filter((item,
  index) => arr.indexOf(item) == index);
}
console.log(removeDuplicates(arr));


// =================================
let value = ["apple", "mango", "apple",
"orange", "mango", "mango","grapes","lemon","lemon"];

function duplicate(){
let array=[]
value.forEach(element=>{
  if(!array.includes(element)){
    array.push(element)
  }
})
console.log(array)
}
duplicate()