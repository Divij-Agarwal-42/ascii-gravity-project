/*

function horizontal_slab(height, width){
    for (i = 1; i <= height; i++){

        for (j = 1; j <= width; j++) {
            document.write(char_);
        }

        document.write("<br>");
    }
}

function vertical_slab_H(height, width, space){
    for (i = 1; i <= height; i++){

        for (j = 1; j <= width; j++) {
            document.write(char_);
        }

        for (z = 1; z <= space; z++) {
            document.write("&nbsp;");
        }

        for (j = 1; j <= width; j++) {
            document.write(char_);
        }

        document.write("<br>");
    }
}


function A() {
    horizontal_slab(3, 20);
    vertical_slab_H(3, 5, 20);
    horizontal_slab(3, 20);
    vertical_slab_H(5, 5, 20);
}

function B(){
    horizontal_slab(2, 17);
    vertical_slab_H(3, 5, 20);
    horizontal_slab(2, 17);
    vertical_slab_H(3, 5, 20);
    horizontal_slab(2, 17);
}

function C(){

}

A();
document.write("<br>");
B();
document.write("HELLOO");
document.getElementById("").write()
*/

//START 2

var array = [];
var x_limit = 200;
var y_limit = 150;
var char_ = ".";
var input_str = "abcde";


// Makes an array that has spaces
// x starts from 0, y from 1
for (m = 0; m < y_limit; m++) {
    mini_array = []
    for (i = 0; i < x_limit; i++) {
        mini_array[i] = "&nbsp";
    }
    array[m] = mini_array;
}
function horizontal_slab(startX, startY, height = 3, width = 40){
    for (i = 0; i < height; i++) {
        for (j = 0; j < width; j++) {
            array[startY + i][startX + j] = char_;
        }
    }
}

//2, 2, 4, 3, 5


function vertical_slab_H(startX, startY, height = 4, width = 10, space = 20){
    for (i = 0; i < height; i++) {
        for (j = 0; j < ((2*width) + space); j++) {
            if (j >= width && j < width + space) {
                array[startY + i][startX + j] = "&nbsp;";
            } else {
                array[startY + i][startX + j] = char_;
            }
        }
    }
}

function vertical_slab_C(startX, startY, height = 8, width = 12) {
    for (i = 0; i < width; i++) {
        for (j = 0; j < height; j++) {
            if (i < width) {
                array[startY + j][startX + i] = char_;
            }
        }
    }
}

function printArray() {
    for (k = 0; k < y_limit; k++) {
        for (q = 0; q < x_limit; q++) {
            document.write(array[k][q]);
        }
        document.write("<br>");
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
    
    horizontal_slab(start_index, 12);
}

var start_x = 1;
var gap = 50;

var index = 0;

while(index < input_str.length) {
    inp = input_str.toLowerCase()[index];
    window[inp.toUpperCase()](start_x);
    start_x += gap;
    index++;
}

// Why does this not work ?? 
// for (p = 0; p < input_str.length; p++) {
//     inp = input_str.toLowerCase()[p];
//     if (inp == "a") {
//         A(start_x);
//     } else if (inp == "b") {
//         B(start_x);
//     }
//     start_x += gap;
// }

printArray();


// END 2

/*

// Figure out how to move stuff around

// Add acceleration

// Fix slabs
// Fix coordinate system

// Stuff to do

// Fix slabs, coordinate system = 1 hr
// Make alphabets = 2 hrs
// Animation = 3 hrs
// Integrate everything 3 hrs


*/