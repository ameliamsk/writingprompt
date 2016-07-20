var canvas = document.getElementById('writing');
var ctx = writing.getContext('2d');
document.body.appendChild(writing);

canvas.width = 1500;
canvas.height = 922;

ctx.fillStyle = 'lavender';
ctx.fillRect(0,0, canvas.width, canvas.height);

ctx.fillStyle = 'gray';

var array1 =
[
"hiding",
"placing",
"saving",
"holding",
"painting",
"leaving",
"freeing",
"infiltrating",
"destroying",
"breaking"
];
var array2 =
[
"a book",
"a shark",
"a keyboard",
"a soccer ball",
"a mirror",
"a journal",
"a secret society",
"a top-secret government document",
"a charging cord",
"a fire extinguisher",
"a fire alarm",
"an ambulance",
"a unicorn",
"a unicycle",
"your neighbor's bike",
"Santa Claus",
"a clock",
"a computer",
"the janitor"
];
var array3 =
[
"the White House",
"a library",
"a chemical lab",
"a summer camp",
"your driveway",
"area 51",
"a bar",
"a club",
"Neverland",
"Hogwarts",
"the attic",
"a movie theater",
"Alaska",
"the North Pole",
"the janitor's closet",
"space"
];

var num1 = Math.random()* 9;
num1= Math.floor(num1);
var num2 = Math.random()* 19;
num2 = Math.floor(num2);
var num3 = Math.random()* 15;
num3 = Math.floor(num3);
ctx.fillText(array1[num1] + " " + array2[num2] + " in " + array3[num3], canvas.width/2, 80);