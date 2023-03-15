const canvas = document.getElementById("myCanvas");
canvas.style = `
border: 2px solid black;
`
const ctx = canvas.getContext("2d");

class body{
    constructor(x,y,ctx){
        this.x = x;
        this.y = y;
        this.ctx = ctx;
        this.controls = new Controls;
        this.draw();
    };
    draw(){
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.fillRect(this.x*20,this.y*20,20,20);
    }
    movement(){
        if(this.controls.down){
            this.y += 1;
        }
        else if(this.controls.up){
            this.y -= 1;
        }
        else if(this.controls.left){
            this.x -= 1;
        }
        else if(this.controls.right){
            this.x += 1;
        }
    }
}
let time = 0;



const player =new body(20,15,canvas.getContext("2d"));
let food1 = new food(generateFood(canvas.width)/20,generateFood(canvas.height)/20,canvas.getContext("2d")) ;
setInterval(animate,80);
let tails=[];
let obj;
function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if(player.x == food1.x && player.y == food1.y){
       food1 = new food(generateFood(canvas.width)/20,generateFood(canvas.height)/20,canvas.getContext("2d"));
       const tail1 = {x:player.x,y:player.y}
       tails.unshift(tail1);
       for(let i = 0; i<tails.length;i++){
        ctx.beginPath();    
        ctx.fillStyle = "red";
        ctx.fillRect(tails[i].x*20,tails[i].y*20,20,20);
    }
       console.log(tails);
    } else {

    }
    if(player.x == 0){
        player.controls.left = false;
    }
    if(player.y == 0){
        player.controls.up = false;
    }
    if(player.x == (canvas.width-20)/20){
        player.controls.right = false;
    }
    if(player.y == (canvas.height-20)/20){
        player.controls.down = false;
    }

    const tail1 = {x:player.x,y:player.y}
    tails.unshift(tail1);
    for(let i = 0; i<tails.length;i++){
        ctx.beginPath();    
        ctx.fillStyle = "red";
        ctx.fillRect(tails[i].x*20,tails[i].y*20,20,20);
    }
    tails.pop();

    
    player.movement();
    player.draw();
    food1.drawFood();
   //food1.chasePlayer();
    //drawGameBoard();
    //console.log(obj)
    obj = {
        xcor: player.x,
        ycor: player.y
    };
time ++;
}

