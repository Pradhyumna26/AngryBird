class log {
    constructor(){
        this.body = Bodies.rectangle(500,150,70,70);
        this.width = 70;
        this.height = 70;
        this.image = loadImage("wood2.png");
        World.add(world,this.body);
    }
    display(){
        push()
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
pop()
    }
    
}