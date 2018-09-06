// Add your functions and code here

// var kittens = ["Milo", "Otis", "Garfield"]


 // 1) Arrays destructivelyAppendKitten(name) appends a
 // kitten to the end of the kittens array:
function destructivelyAppendKitten(name) {
  kittens.push(name);
}
//
//  //   2) Arrays destructivelyPrependKitten(name) prepends
//  // a kitten to the beginning of the kittens array:
 function destructivelyPrependKitten(name) {
   kittens.unshift(name);
 }

//  3) Arrays destructivelyRemoveLastKitten() removes
// the last kitten from the kittens array:


 //  4) Arrays destructivelyRemoveFirstKitten() removes
 // the First kitten from the kittens array:


 //  5) Arrays appendKitten(name) appends a kitten to the kittens array
 //and returns a new array,
 //leaving the kittens array unchanged:
// function appendKitten(name){
//   var newKittens = kittens.concat(name);
//   return newKittens;
// }

 //  6) Arrays prependKitten(name) prepends a kitten
 //to the kittens array and returns a new array,
 // // // leaving the kittens array unchanged:
 function prependKitten(name){
   var newArray = [name, ...kittens];
   return newArray;
}
 //  7) Arrays removeLastKitten() removes the last kitten
 //in the kittens array and returns a new array,
 //leaving the kittens array unchanged


 // 8) Arrays removeFirstKitten() removes the first kitten
 // from the kittens array and returns a new array,
 // leaving the kittens array unchanged:
