function drawGameBoard(){
    for(let i = 0; i<41;i++){
    ctx.beginPath();
    ctx.moveTo(20*i,0);
    ctx.lineTo(20*i,canvas.height);
    ctx.stroke();
    }
    for(let i = 0; i<31;i++){
        ctx.beginPath();
        ctx.moveTo(0,20*i);
        ctx.lineTo(canvas.width,20*i);
        ctx.stroke();
    }
}
function generateFood(width){
    let num1 = Math.floor(Math.random()*width);
    num1 = num1 - num1%20;
    return num1
}