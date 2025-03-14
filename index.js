// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];
  function destructivelyAppendCat(name){
    cats.push(name);
  }

  function destructivelyPrependCat(name){
     cats.unshift(name);
  }


 function destructivelyPrependCat(name){
    cats.unshift(name);
 }
 
 function destructivelyRemoveFirstCat() {
    cats.shift();
  }

  function destructivelyRemoveLastCat() {
    cats.pop();
  }
 
  function appendCat(name) {
    return [...cats, name];
  }

  function prependCat(name) {
    return [name, ...cats];
  }

  function removeLastCat() {
    return cats.slice(0, -1);
  }

  function removeFirstCat() {
    return cats.slice(1);
  }
  module.exports = {
    cats,
    destructivelyAppendCat,
    destructivelyPrependCat,
    destructivelyRemoveLastCat,
    destructivelyRemoveFirstCat,
    appendCat,
    prependCat,
    removeLastCat,
    removeFirstCat
  }; 