//This is the gravity logic for the website
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.font = "30px Arial";
let userInput = "";
var x = 0;
let testArray = [[".", ".", "."], 
                [".", " ", "."], 
                [".", " ", "."],  
                [".", " ", "."],  
                [".", ".", "."],  
                [".", ".", "."],];

var array = [];
x_limit = 200;
y_limit = 25;
var char = ".";

start_x = 1;
gap = 50;

document.getElementById("canvas").style.lineHeight = "3px"; 

const sleep = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time))
}

document.getElementById("DrawButton").addEventListener("click", function() {
    userInput = document.getElementById("TextInput").value;
    modifyUserString(userInput);
});
document.getElementById("InitializeButton").addEventListener("click", function() {
    ctx.font = "bold 8px Arial";
    printTotalArray(array);
});
document.getElementById("AnimateButton").addEventListener("click", function() {
    let userInput = document.getElementById("TextInput").value;
    ctx.font = "bold 8px Arial";
    window.requestAnimationFrame(draw);
});
document.getElementById("StopButton").addEventListener("click", function() {
    location.reload();
});

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

function constantIterateArray(array){

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

function printTotalArray(array){
    for (var i = 0; i < array.length; i++){
        ctx.fillText(printArray(array)[i], 10, 20 * (i));
    }
}

async function draw(){
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    array = constantIterateArray(array);
    printTotalArray(array);
    await sleep(100);

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
}

function modifyUserString(input){

    // Makes an array that has spaces
    // x starts from 0, y from 1
    for (m = 0; m < y_limit; m++) {
        mini_array = [];
        for (i = 0; i < userInput.length * 50; i++) {
            mini_array[i] = " ";
        }
        array[m] = mini_array;
    }
    var i = 0;
    while (i < input.length) {
        f = input[i].toUpperCase();
        console.log(f);
        if (f === "A"){
            A(start_x + gap * i);
        } else if (f === "B") {
            B(start_x + gap * i);
        }
        i++;
    }
}