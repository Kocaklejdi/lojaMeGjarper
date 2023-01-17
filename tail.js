class tail{
    constructor(x,y,ctx){
        this.x = x;
        this.y = y;
        this.ctx = ctx;
        this.drawTail();
    }
    drawTail(){
        ctx.beginPath();    
        ctx.fillStyle = "red";
        ctx.fillRect(this.x*20,this.y*20,20,20);
    }
}