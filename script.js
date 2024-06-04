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
        this.x += this.dx;
        this.y += this.dy;
        if(this.x + this.radius > canvas.width || this.x - this.radius <= 0){
            this.dx = -this.dx;
        }
        if(this.y + this.radius > canvas.height || this.y - this.radius <= 0){
            this.dy = -this.dy;
        }
    }
}
