var person = ['hashmat', 25];
var personTwo = ['johnny', 28];


function greet(name, age){
    console.log('hi ' + name + ' you are ' + age);
}

greet(...person);
greet(...personTwo);


var names = ['hashmat', 'yusuf', 'johnny'];
var final = ['haroon', ...names];

final.forEach(function(name){

console.log('hi ' + name);

});