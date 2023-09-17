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
var input_str = "gqzm";


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

function vertical_slab_mid(startX, startY, height = 8, width = 20) {
    for (i = 0; i < 40; i++) {
        for (j = 0; j < height; j++) {
            if (i < (40 - width) && (i > width)) {
                array[startY + j][startX + i] = char_;
            }
        }
    }
}

function positive_slope(startX, startY, height = 10, width = 5, m = 1) {
    for (i = 0; i < height; i++) {
        for (j = 0; j < width; j++) {
            if (i == j) {
                for (n = 0; n < width; n++){
                    array[startY + i][startX + j + n] = char_;
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
                    array[startY + height - i][startX + width + j - n] = char_;
                }
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