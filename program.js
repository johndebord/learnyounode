// javascripting

/* Exercise 1
console.log("hello");
*/

/* Exercise 2
var example = "some string";
console.log(example);
*/

/* Exercise 3
var somestring = "this is a string";
console.log(somestring);
*/

/* Exercise 4
var example = "example string";
console.log(example.length);
*/

/* Exercise 5
var pizza = "pizza is alright";
pizza = pizza.replace("alright", "wonderful");
console.log(pizza);
*/

/* Exercise 6
var example = 123456789;
console.log(example);
*/

/* Exercise 7
var roundUp = 1.5;
var rounded = Math.round(roundUp);
console.log(rounded);
*/

/* Exercise 8
var n = 128;
n = n.toString();
console.log(n);
*/

/* Exercise 9
var fruit = "orange";
if(fruit.length > 5)
    console.log("The fruit name has more than five characters.");
else
    console.log("The fruit name has five characters or less.");
*/

/* Exercise 10
var total = 0;
var limit = 10;
for(var i = 0; i != limit; ++i)
    total += i;
console.log(total);
*/

/* Exercise 11
var pizzaToppings = ["tomato sauce", "cheese", "pepperoni"];
console.log(pizzaToppings);
*/

/* Exercise 12
var numbers = [1,2,3,4,5,6,7,8,9,10];
var filtered = numbers.filter(function (num) {
    return num % 2 === 0;
})
console.log(filtered)
*/

/* Exercise 13
var food = ["apple", "pizza", "pear"];
console.log(food[1]);
*/

/* Exercise 14
var pets = ["cat", "dog", "rat"];
for(var i = 0; i != pets.length; ++i)
    pets[i] = pets[i] + 's';
console.log(pets);
*/

/* Exercise 15
var pizza = {
    toppings: ["cheese", "sauce", "pepperoni"],
    crust: "deep dish",
    serves: 2
};
console.log(pizza);
*/

/* Exercise 16
var food = {
    types: "only pizza"
};
console.log(food.types);
*/

/* Exercise 17
function eat(food) {
    return food + " tasted really good.";
}
console.log(eat("bananas"));
*/

/* Exercise 18
function math(num1, num2, num3) {
    return num1 + (num2 * num3);
}
console.log(math(53, 61, 67));
*/

/* Exercise 19
var a = 1, b = 2, c = 3;  
     (function firstFunction(){  
         var b = 5, c = 6;  
         (function secondFunction(){  
             var b = 8;  
             console.log("a: "+a+", b: "+b+", c: "+c);
             (function thirdFunction(){  
                 var a = 7, c = 9;  
                 (function fourthFunction(){  
                     var a = 1, c = 8;  
                 })(); 
             })();
         })();
     })();
*/

// learnyounode

/* Exercise 1
console.log("HELLO WORLD");
*/

/* Exercise 2
var sum = 0;
for(var i = 2; i != process.argv.length; ++ i)
    sum += Number(process.argv[i]);
console.log(sum);
*/

/* Exercise 3
var fs = require("fs");

var strbuf = fs.readFileSync(process.argv[2]).toString();
var count = strbuf.split('\n').length - 1;
console.log(count);
*/

/* Exercise 4
var fs = require("fs");

var file = process.argv[2];

fs.readFile(file, function (error, data) {
    if(error) console.log(error);
    var count = data.toString().split('\n').length - 1;
    console.log(count);
})
*/

/* Exercise 5
var fs = require("fs");

var dir = process.argv[2];
var ext = process.argv[3];

fs.readdir(dir, function(error, files) {
    if(error) return console.log(error);
    for(var i = 0; i != files.length; ++i) {
        if(files[i].split('.').pop() == ext && files[i] != ext)
            console.log(files[i]);
    }
})
*/

/* Exercise 6
// program.js
var module = require("./mymodule.js");

var dir = process.argv[2];
var ext = process.argv[3];

module(dir, ext, function(err, data) {
    if(err) console.log(err);
    else {
        for(var i = 0; i != data.length; ++i)
            console.log(data[i]);
    }
});

// mymodule.js
var fs = require("fs");

module.exports = function(dir, ext, callback) {
    fs.readdir(dir, function(err, files) {
        if(err) return callback(err);
        var fextarray = [];
        for(var i = 0; i != files.length; ++i) {
            if(files[i].split('.').pop() == ext && files[i] != ext)
                fextarray.push(files[i]);
        }
        callback(null, fextarray);
    })
};
*/

/* Exercise 7
var http = require("http");

var url = process.argv[2];

http.get(url, function callback(response) {
    response.setEncoding("utf8").on("data", function(data) {
        console.log(data);
    })
})
*/
