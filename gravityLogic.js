//This is the gravity logic for the website
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.font = "30px Arial";
let userInput = "";
var x = 0;
let testArray = [["*", "*", "*"], 
                ["*", " ", "*"], 
                ["*", "*", "*"], 
                ["*", " ", "*"], 
                ["*", "*", "*"], 
                ["*", " ", "*"]];

const sleep = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time))
}

document.getElementById("DrawButton").addEventListener("click", function() {
    userInput = document.getElementById("TextInput").value;
    ctx.fillText(userInput, 10, 50);
});
document.getElementById("ClearButton").addEventListener("click", function() {
    printTotalArray(testArray);
});
document.getElementById("AnimateButton").addEventListener("click", function() {
    let userInput = document.getElementById("TextInput").value;
    ctx.font = "30px Arial";
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
    console.log(string);
    return stringArray;
}

function constantIterateArray(array){
    
    for (var i = array.length - 1; i > 0; i--){
        for (var j = 0; j < array[0].length; j++){
            if ((array[i-1][j]) === ("*") && array[i][j] === (" ")){
                array[i][j] = "*";
                array[i-1][j] = " ";
            }
        }
    }

    return array;
}

function printTotalArray(array){
    for (var i = 0; i < array.length; i++){
        ctx.fillText(printArray(array)[i], 100, 50 * (i + 1));
    }
}

async function draw(){
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    testArray = constantIterateArray(testArray);
    printTotalArray(testArray);
    await sleep(1000);

    window.requestAnimationFrame(draw);

    console.log("Running...");
}