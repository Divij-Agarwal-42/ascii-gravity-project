//This is the gravity logic for the website
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

document.getElementById("LoginButton").addEventListener("click", function() {
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0, 0, 150, 75);
});
document.getElementById("ClearButton").addEventListener("click", function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});