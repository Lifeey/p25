class paper {
    constructor (x,y, radius)
    {

        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:2.1
        
            
        }
        this.body = Bodies.circle(x, y, radius, options,);
        this.radius = radius
        this.image = loadImage("paper.png");
        World.add(world, this.body);
  
    }
display(){
    var paperPos=this.body.position;
    
    push()
			translate(paperPos.x, paperPos.y+10);

            
            imageMode(CENTER)

    image(this.image, 0,0,this.radius, this.radius)
    pop()
}
}