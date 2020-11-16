class box1{
    constructor(x,y,height,width){
        this.body = Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;
        World.add(world,this.body);

    }
    display(){
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
       rect(0,0,this.width,this.height);
       



        
    }
}