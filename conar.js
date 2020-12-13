class Conar{
    constructor(x,y){
        this.body=createSprite(x,y,50,50)
        this.body.shapeColor-'black';
        this.body.visible=0;
    }
    
     direction(){
        if(keyDown(LEFT_ARROW)){
            this.body.x=this.body.x-1;
        }
        else if(keyDown(RIGHT_ARROW)){
            this.body.x=this.body.x+1;
        }
        else if(keyDown(UP_ARROW)){
            this.body.y=this.body.y-1;
        }
        else if(keyDown(DOWN_ARROW)){
            this.body.y=this.body.y+1;
    }
    }
}

