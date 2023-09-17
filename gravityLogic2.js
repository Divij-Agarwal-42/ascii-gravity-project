//This is the gravity logic for the website
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let backgroundColor = "white";
let textColor = "black";
let userInput = "";
var x = 0;
let gravitySpeed;

var array = [];
x_limit = 250;
y_limit = 24;
var char = ".";

start_x = 1;
gap = 50;

const sleep = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time))
}

document.getElementById("InitializeButton").addEventListener("click", function() {
    gravitySpeed = document.getElementById("GravityInput").value;
    userInput = document.getElementById("TextInput").value;
    if(containsOnlyLetters(userInput)){
        modifyUserString(userInput);
        ctx.font = "bold 8px Arial";
        printTotalArray(array);
    } else{
        alert("Enter only letters to the text input.");
        clearInput("TextInput");
    }
});
document.getElementById("AnimateButton").addEventListener("click", function() {
    let userInput = document.getElementById("TextInput").value;
    ctx.font = "bold 8px Arial";
    window.requestAnimationFrame(draw);
});
document.getElementById("StopButton").addEventListener("click", function() {
    location.reload();
    colorScheme(backgroundColor, textColor);
});
document.getElementById("DarkButton").addEventListener("click", function() {
    backgroundColor = document.getElementById("ColorInput").value;
    textColor = document.getElementById("Color2Input").value;
    colorScheme(backgroundColor, textColor);
    clearInput("ColorInput");
    clearInput("Color2Input");
});

function containsOnlyLetters(str) {
    return /^[a-z]+$/i.test(str);
}

function clearInput(element){
    var getValue= document.getElementById(element);
    if (getValue.value !="") {
        getValue.value = "";
    }
}

function printArray(array){
    let string = "";
    let stringArray = Array(array.length);
    for (var i = 0; i < array.length; i++){
        var tempString = "";
        for (var j = 0; j < array[0].length; j++){
            string += array[i][j] + " ";
            tempString += array[i][j] + " ";
        }
        stringArray[i] = tempString;
        string += "\n";
    }
    //console.log(string);
    return stringArray;
}

function constantIterateArrayDown(array){

    for (var i = array.length - 1; i > 0; i--){
        for (var j = 0; j < array[0].length; j++){
            if ((array[i-1][j]) !== (" ") && array[i][j] === (" ")){
                array[i][j] = array[i-1][j];
                array[i-1][j] = " ";
            }
        }
    }

    return array;
}

function constantIterateArrayRight(array){

    for (var j = array[0].length - 1; j > 0; j--){
        for (var i = 0; i < array.length; i++){
            if ((array[i][j-1]) !== (" ") && array[i][j] === (" ")){
                array[i][j] = array[i][j-1];
                array[i][j-1] = " ";
            }
        }
    }

    return array;
}

function constantIterateArrayUp(array){

    for (var i = 0; i < array.length - 1; i++){
        for (var j = 0; j < array[0].length; j++){
            if ((array[i+1][j]) !== (" ") && array[i][j] === (" ")){
                array[i][j] = array[i+1][j];
                array[i+1][j] = " ";
            }
        }
    }

    return array;
}

function constantIterateArrayLeft(array){

    for (var j = 0; j < array[0].length - 1; j++){
        for (var i = 0; i < array.length; i++){
            if ((array[i][j+1]) !== (" ") && array[i][j] === (" ")){
                array[i][j] = array[i][j+1];
                array[i][j+1] = " ";
            }
        }
    }

    return array;
}

function printTotalArray(array){
    for (var i = 0; i < array.length; i++){
        ctx.fillText(printArray(array)[i], 20, 20 * (i+1));
    }
}

function colorScheme(background, text){
    ctx.fillStyle = background;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = text;
}

function colorScheme(background, text){
    ctx.fillStyle = background;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = text;
}

async function draw(){
    var ele = document.getElementsByName('gravity');
    var multiplier = 150;
    gravitySpeed = document.getElementById("GravityInput").value;
    colorScheme(backgroundColor, textColor);
    ctx.save();
    if(ele[0].checked){
        array = constantIterateArrayDown(array);
        multiplier = 150;
    } else if (ele[1].checked){
        array = constantIterateArrayUp(array);
        multiplier = 15;
    } else if (ele[2].checked){
        array = constantIterateArrayLeft(array);
        multiplier = 0.01;
    } else if (ele[3].checked){
        array = constantIterateArrayRight(array);
        multiplier = 0.01;
    }
    printTotalArray(array);
    await sleep((1/gravitySpeed) * multiplier);
    window.requestAnimationFrame(draw);
}

function horizontal_slab(startX, startY, height = 3, width = 40){
    for (i = 0; i < height; i++) {
        for (j = 0; j < width; j++) {
            array[startY + i][startX + j] = char;
        }
    }
}

function vertical_slab_H(startX, startY, height = 4, width = 10, space = 20){
    for (i = 0; i < height; i++) {
        for (j = 0; j < ((2*width) + space); j++) {
            if (j >= width && j < width + space) {
                array[startY + i][startX + j] = " ";
            } else {
                array[startY + i][startX + j] = char;
            }
        }
    }
}

function vertical_slab_C(startX, startY, height = 8, width = 12) {
    for (i = 0; i < width; i++) {
        for (j = 0; j < height; j++) {
            if (i < width) {
                array[startY + j][startX + i] = char;
            }
        }
    }
}

function vertical_slab_mid(startX, startY, height = 8, width = 12) {
    for (i = 0; i < 40; i++) {
        for (j = 0; j < height; j++) {
            if (i < (40 - width) && (i > width)) {
                array[startY + j][startX + i] = char;
            }
        }
    }
}

function positive_slope(startX, startY, height = 10, width = 5, m = 1) {
    for (i = 0; i < height; i++) {
        for (j = 0; j < width; j++) {
            if (i == j) {
                for (n = 0; n < width; n++){
                    array[startY + i][startX + j + n] = char;
                }
            }
        }
    }
}

function negative_slope(startX, startY, height = 10, width = 5, m = 0) {
    for (i = height; i > 0; i--) {
        for (j = width; j > 0; j--) {
            if (i == j) {
                for (n = 0; n < width; n++){
                    array[startY + height - i][startX + width + j - n] = char;
                }
            }
        }
    }
}

function A(start_index) {
    horizontal_slab(start_index, 1);
    vertical_slab_H(start_index, 4);
    horizontal_slab(start_index, 8);
    vertical_slab_H(start_index, 11);
}

function B(start_index) {
    horizontal_slab(start_index, 1, 3, 37);
    vertical_slab_H(start_index, 4, 3);
    horizontal_slab(start_index, 7, 3, 37);
    vertical_slab_H(start_index, 10, 2);
    horizontal_slab(start_index, 12, 3, 37);
}

function C(start_index) {
    horizontal_slab(start_index, 1);
    vertical_slab_C(start_index, 4);
    horizontal_slab(start_index, 12);
}

function D(start_index) {
    horizontal_slab(start_index, 1, 3, 37);
    vertical_slab_H(start_index, 4, 8);
    horizontal_slab(start_index, 12, 3, 37);
}

function E(start_index) {
    horizontal_slab(start_index, 1);
    vertical_slab_C(start_index, 4, 2);
    horizontal_slab(start_index, 6);
    vertical_slab_C(start_index, 9, 3);
    horizontal_slab(start_index, 12,);
}

function F(start_index) {
    horizontal_slab(start_index, 1);
    vertical_slab_C(start_index, 4, 2);
    horizontal_slab(start_index, 6, 3, 30);
    vertical_slab_C(start_index, 9, 6);
}

function G(start_index) {
    horizontal_slab(start_index, 1);
    vertical_slab_C(start_index, 4);
}

function H(start_index) {
    vertical_slab_H(start_index, 1, 5);
    horizontal_slab(start_index, 6);
    vertical_slab_H(start_index, 9, 6);
}

function L(start_index) {
    vertical_slab_C(start_index, 1, 11);
    horizontal_slab(start_index, 12)
}

function O(start_index) {
    horizontal_slab(start_index, 1);
    vertical_slab_H(start_index, 4, 8);
    horizontal_slab(start_index, 12);
}

function P(start_index) {
    horizontal_slab(start_index, 1);
    vertical_slab_H(start_index, 4, 3);
    horizontal_slab(start_index, 7);
    vertical_slab_C(start_index, 10, 5);
}

function R(start_index) {
    horizontal_slab(start_index, 1, 3, 37);
    vertical_slab_H(start_index, 4);
    horizontal_slab(start_index, 7, 3, 35);
    vertical_slab_H(start_index, 10, 5);
}

function U(start_index) {

    vertical_slab_H(start_index, 1, 11);
    horizontal_slab(start_index, 12);
}

function I(start_index) {
    horizontal_slab(start_index, 1);
    vertical_slab_mid(start_index, 4);
    horizontal_slab(start_index, 12);
}

function Y(start_index) {
    vertical_slab_H(start_index, 1, 5);
    horizontal_slab(start_index, 6, 2);
    vertical_slab_mid(start_index, 8, 7, 13);

}

function T(start_index) {
    horizontal_slab(start_index, 1);
    vertical_slab_mid(start_index, 4, 11, 13);
}

function J(start_index) {
    horizontal_slab(start_index, 1);
    vertical_slab_mid(start_index, 4, 8, 13);
    horizontal_slab(start_index, 12, 3, 27);
}
function X(start_index) {
    positive_slope(start_index, 1, 7, 10);
    negative_slope(start_index + 20, 1, 7, 10);
    positive_slope(start_index + 20, 8, 7, 10);
    negative_slope(start_index + 20, 1, 7, 10);
    negative_slope(start_index, 8, 7, 10);
    vertical_slab_mid(start_index, 7, 3, 13);
}
function V(start_index) {
    positive_slope(start_index, 5, 10, 10);
    negative_slope(start_index + 20, 5, 10, 10);
    vertical_slab_H(start_index, 1, 5);
    vertical_slab_mid(start_index, 13, 2, 15);
}
function N(start_index) {
    vertical_slab_H(start_index, 1, 14, 12);
    positive_slope(start_index + 11, 1, 25, 10);
    positive_slope(start_index + 16, 6, 9, 10);
}
function Z(start_index) {
    horizontal_slab(start_index, 1, 3, 35);
    negative_slope(start_index + 5, 4, 10, 17);
    horizontal_slab(start_index + 5, 12, 3, 35);
}
function K(start_index) {
    vertical_slab_C(start_index, 1, 14);
    positive_slope(start_index + 20, 8, 7, 14);
    negative_slope(start_index + 20, 1, 7, 14);
    vertical_slab_mid(start_index, 7, 3, 10);

}
function S(start_index) {
    horizontal_slab(start_index, 1);
    horizontal_slab(start_index, 12);
    horizontal_slab(start_index, 6);
    vertical_slab_C(start_index, 1, 5);
    vertical_slab_C(start_index + 29, 7, 5);
}
function Q(start_index) {
    horizontal_slab(start_index + 2, 1, 1, 30);
    horizontal_slab(start_index, 2, 1, 36);
    vertical_slab_C(start_index, 3, 10);
    vertical_slab_C(start_index + 25, 3, 7);
    horizontal_slab(start_index + 3, 12, 2, 18);
    positive_slope(start_index + 21, 10, 5, 13);
}
function M(start_index) {
    horizontal_slab(start_index, 1);
    vertical_slab_H(start_index, 4, 11);
    vertical_slab_C(start_index + 16, 4, 5, 7);
}
function G(start_index) {
    horizontal_slab(start_index, 1);
    vertical_slab_C(start_index, 4, 8);
    horizontal_slab(start_index, 12);
    vertical_slab_C(start_index + 28, 7, 5);
    vertical_slab_C(start_index + 20, 7, 3);
}

function W(start_index) {
    vertical_slab_H(start_index, 1, 14);
    horizontal_slab(start_index, 12);
    vertical_slab_C(start_index + 16, 6, 6, 7);
}

function modifyUserString(input){

    // Makes an array that has spaces
    // x starts from 0, y from 1
    for (m = 0; m < y_limit; m++) {
        mini_array = [];
        for (i = 0; i < 330; i++) {
            mini_array[i] = " ";
        }
        array[m] = mini_array;
    }
    var index = 0;
    while(index < userInput.length) {
        inp = userInput.toLowerCase()[index];
        window[inp.toUpperCase()](start_x);
        start_x += gap;
        index++;
    }
}