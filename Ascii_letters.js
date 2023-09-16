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
x_limit = 200;
y_limit = 50;
var char_ = ".";
var input_str = "aaA";

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
}

start_x = 1;
gap = 50;

for (var i = 0; i < input_str.length; i++) {
    f = input_str[i].toUpperCase();
    console.log(f);
    if (f === "A"){
        console.log("AAA");
        A(start_x + gap * i);
    } else if (f === "B") {
        B(start_x + gap * i);
        console.log("NNN");
    }
}

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