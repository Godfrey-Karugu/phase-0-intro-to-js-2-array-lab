// Write your solution here!

// declare array cats and initialize it
let cats = ["Milo", "Otis", "Garfield"]
console.log(cats)


//prepend a cat to the beginning of the cats array

function destructivelyAppendCat(name){
  cats.push(name)
  

}

destructivelyAppendCat("Ralph")


//reset the array to its original contents

function beforeEach() {
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
};

beforeEach()
//prepend a cat to the beginning of the cats array

function destructivelyprependCat(name){
  cats.unshift(name)
  console.log(cats)

}
destructivelyprependCat("Bob")




//reset the array to its original contents

function beforeEach() {
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
};

beforeEach()

//destructivelyPrependCat(name) - prepends a cat to the beginning of the cats array

function destructivelyPrependCat(name){
  cats.unshift(name)
}

destructivelyPrependCat("Bob")


beforeEach()
//remove the last cat from the cats array

function  destructivelyRemoveLastCat(){
  cats.pop();
  console.log(cats)
}

destructivelyRemoveLastCat()

function beforeEach() {
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
};

beforeEach()



//remove the first cat from the cats array

function destructivelyRemoveFirstCat(){
  cats.shift();
  console.log(cats)
}
destructivelyRemoveFirstCat()

//appends a cat to the cats array and returns a new array, leaving the cats array unchanged

function beforeEach() {
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
};

beforeEach()


// removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
function removeLastCat(){
  cats.slice(0,3)



}



// reset 

function beforeEach() {
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
};

beforeEach()

//removeLastCat() ---remove the last cat in the cats array and returns a new array, leaving the cats array unchanged
function removeLastCat(){
  cats.slice(0,3)
}

function removeFirstCat(){
 cats.slice(1)
  

}

removeFirstCat()

//----------------------------------------------------------------
//   appendCat(name) - appends a cat to the cats array and returns a new array, leaving the cats array unchanged

function  appendCat() {
  const newlist = [ ...cats, "Broom"]

}



//--------------------- prependCat(name)= prepends a cat to the cats array and returns a new array, leaving the cats array unchanged-----------------------------------------


function  prependCat() {
  const anotherlist = [ "Arnold",...cats]
 
}



