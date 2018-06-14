//Easy Going
for (let i = 1; i <= 20; ++i) {
	console.log(i)
};

//Get Even
for (let i = 2; i <= 200; i+=2) {
	console.log(i)
};

//Excited Kitten
const cat = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]

for (let i = 0; i <20; i++) {
	console.log("Love me, pet me! HSSSSSS!")
	if (i % 2 === 0) {
		console.log(cat[i])
	}
};

//Fizz Buzz
for (let i = 1; i <= 100; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log("FizzBuzz")
	}
	else if (i % 3 === 0) {
		console.log("Fizz")
	}
	else if (i % 5 === 0) {
		console.log("Buzz")
	}
	else {
		console.log(i)
	}
};

//Getting to Know You
const thom = ["Thom", 1000, "Christchurch"]
const karolin = ["Karolin", 16, "New York"]
const kristyn = ["Kristyn", 5, "Pittsburgh"]
const matt = ["Matt H", 186, "Philadelphia"]

thom[0] = "Gameboy"
karolin[1] = 17
matt[2]  = "Gotham City"
kristyn[2]  = "Brooklyn"

console.log(thom)
console.log(karolin)
console.log(matt)
console.log(kristyn)

//Yell at the Ninja Turtles
const tmnt = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']
for (let i = 0; i < tmnt.length; i++) {
	tmnt[i].toUpperCase();
	console.log(tmnt[i].toUpperCase())
};

//Return of the Closets
const kristynsCloset = [
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

  let kristynsShoe = "left shoe"
thomsCloset[2].push(kristynsShoe)

//Dress Us Up

//Dirty Laundry
for (var i =0; i <= kristynsCloset.length; i++) {
	console.log("HWHIRR: Now washing " + kristynsCloset[i])
};
	
	for (var i =0; i <= thomsCloset.length; i++) {
	console.log("HWHIRR: Now washing " + thomsCloset[i])
};

// Multiples of 3 and 5
let answer = 0;

for (let i = 1; i <= 1000; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log(answer += i)
	}
	else if (i % 3 === 0) {
		console.log(answer += i)
	}
	else if (i % 5 === 0) {
		console.log(answer += i)
	}
	else {
		console.log(answer)
	}
};

//Hungry for more?
let argument = 7

for (i = 0; i <= argument.length; i++) {
	console.log("#" * [i])
}

// Find the Median
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

// Expected output:
// => 15

for (i = 0; i <= nums.length; i++) {
	median = num[i]
	console.log(i)
}
