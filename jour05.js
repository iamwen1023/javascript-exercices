//01 - Calculator
//const process = require('process');
console.log("ex01");
var args = process.argv.slice(2);

function calculate(num1, sign, num2) {

    if (num1 === undefined || sign === undefined || num2 == undefined) {
        console.log("Error");
        return;
    }
    if (isNaN(num1) == true || isNaN(num2) == true) {
        console.log("Error");
        return;
    }
    if (sign === '+') {
        console.log(parseInt(num1) + parseInt(num2));
    } else if (sign === '-') {
        console.log(parseInt(num1) - parseInt(num2));
    } else if (sign === 'x') {
        console.log(parseInt(num1) * parseInt(num2));
    } else if (sign === '/') {
        console.log(parseInt(num1) / parseInt(num2));
    } else if (sign === '%') {
        console.log(parseInt(num1) % parseInt(num2));
    } else {
        console.log("Error");
        return;
    }
}
//calculate(args[0], args[1], args[2]);
//02 - Table
console.log("ex02");

function multiply(num) {
    if (num == undefined || isNaN(num) == true) {
        console.log("Error");
        return;
    }
    for (let i = 1; i < 11; i++) {
        console.log(i + " x " + num + " = " + i * parseInt(num));
    }
}
//multiply(args[0]);
//03 - Separate Table
console.log("ex03");
let a = require('./table-utils');
var args = process.argv.slice(2);
//a.addition(args[0]);
//a.multiply_1(args[1]);
//console.log(a);

//04 - Guessls
console.log("ex04");
var prompt = require("prompt");
var properties = [{
    name: "number",
    type: 'number',
    description: "Quel est le nombre mystère ? (1 - 100)",
    warning: "error"
}];
prompt.start();

function onErr(err) { // permet de gérer les erreurs
    console.log(err);
    return 1;
}
let mysteryNum = Math.floor(Math.random() * (100 - 1 + 1) + 1);

function play() {
    prompt.get(properties, function(err, res) {
        if (err) {
            return onErr(err);
        }
        if (isNaN(res.number) === true || res.number < 1 || res.number > 100) {
            console.log("Error!");
            play();
        } else if (res.number < mysteryNum) {
            console.log("C'est plus !");
            play();
        } else if (res.number > mysteryNum) {
            console.log("C'est moins !");
            play();
        } else if (res.number === mysteryNum) {
            console.log("Bravo !!");
            console.log("Mystery number : " + mysteryNum);
        }

    });
}
//play();
// Bonus
console.log("Bonus");
var prompt = require("prompt");
var colors = require('colors/safe');


var properties = [{
    name: "motus",
    type: 'string',
    description: "Quel est le mot mystère ? (longueur : 5)",
    warning: "error"
}];
prompt.start();

function onErr(err) { // permet de gérer les erreurs
    console.log(err);
    return 1;
}
let wordSecret = "apple";
let arrayWord = wordSecret.split('');
let count = 6;

function playMotus() {
    prompt.get(properties, function(err, res) {
        if (err) {
            return onErr(err);
        }
        count--;
        let arrayResult = res.motus.split('');
        for (let i = 0; i < wordSecret.length; i++) {
            if (arrayResult[i] === arrayWord[i]) {
                console.log(colors.bgBrightRed(arrayResult[i]));
            } else if (arrayWord.includes(arrayResult[i]) === true) {
                console.log(colors.bgBrightYellow(arrayResult[i]))
            } else {
                if (arrayResult[i] == undefined || arrayResult[i] == null) {
                    console.log(colors.bgBrightBlue(' '));
                } else {
                    console.log(colors.bgBrightBlue(arrayResult[i]));
                }
            }
        }
        if (res.motus === wordSecret) {
            console.log("Brovo!");
        } else if (count > 0) {
            console.log("Vous avez encore " + count + " fois pour réessayer");
            playMotus();
        } else {
            console.log("Byebye");
        }
    });
}
playMotus();
//nombre premier
//console.log("nombre premier");

function test(num) {
    let i = 2;
    while (i < num) {
        if (num % i == 0) {
            return console.log("pas un nombre premier");
        }
        i++;
    }
    return console.log("un nombre premier");
}
//test(args[0]);