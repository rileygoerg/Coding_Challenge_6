// U14123683
let canvas = document.querySelector("#canvas"); // Initialize canvas
let ctx = canvas.getContext("2d"); // Initialize 2d context
let width = canvas.width;
let height = canvas.height;

class Ball { // Creating Ball class
    constructor(x, y, radius, dx, dy, color){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;
        this.color = color;
    }
    drawBall(){ // Adding ball to canvas
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        ctx.fill();
    }
    updateBall(){ // Collision Logic
        this.x += this.dx; // Adds delta x to new x value
        this.y += this.dy; // Adds delta y to new y value
        if(this.x + this.radius > canvas.width || this.x - this.radius <= 0){
            this.dx = -this.dx; // Reverses delta x when x value reaches 0 or max canvas width
        }
        if(this.y + this.radius > canvas.height || this.y - this.radius <= 0){
            this.dy = -this.dy; // Reverses delta y when y value reaches 0 or max canvas height
        }
    }
}

let ball = new Ball(200, 160, 20, 2, 2, "red"); //  New test ball data
setInterval(() => { 
    ctx.clearRect(0,0,canvas.width,canvas.height); // Clears old ball draw
    ball.updateBall(); // Implements collision logic
    ball.drawBall(); // Re-draws ball
}, 10); // 