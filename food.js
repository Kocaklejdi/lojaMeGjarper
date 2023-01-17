class food{
    constructor(x,y,ctx){
        this.x = x;
        this.y = y;
        this.ctx = ctx;
        this.drawFood();
    }
    drawFood(x,y){
        ctx.beginPath();
        ctx.fillStyle = "green";
        ctx.fillRect(this.x*20,this.y*20,20,20);
    }
    chasePlayer(){
        if(time%2 == 0){
        if(this.x < player.x){
            this.x +=2;
        }
        else if(this.y < player.y){
            this.y +=2;
        }
        else if(this.x > player.x){
            this.x -=2;
        }
        else if(this.y > player.y){
            this.y -=2;
        }
    }
    }
}