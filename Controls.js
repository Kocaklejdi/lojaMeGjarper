class Controls{
    constructor(){
        this.left = false;
        this.right = false;
        this.up = false;
        this.down = false;

        this.#addKeyboardListeners();
    }
    #addKeyboardListeners(){
        document.onkeydown=(event)=>{
            switch(event.key){
                case "ArrowLeft":
                    this.left = true;
                    this.right = false;
                    this.down = false;
                    this.up = false;
                    break;
                case "ArrowRight":
                    this.left = false;
                    this.right = true;
                    this.down = false;
                    this.up = false;
                    break;
                case "ArrowUp":
                    this.left = false;
                    this.right = false;
                    this.down = false;
                    this.up = true;
                    break;
                case "ArrowDown":
                    this.left = false;
                    this.right = false;
                    this.down = true;
                    this.up = false;
                    break;
            }
        }/*
        document.onkeyup=(event)=>{
            switch(event.key){
                case "ArrowLeft":
                    this.left = false;
                    break;
                case "ArrowRight":
                    this.right = false;
                    break;
                case "ArrowUp":
                    this.up = false;
                    break;
                case "ArrowDown":
                    this.down = false;
                    break;
            }
        }
        */
    }    
}