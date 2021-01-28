class Ball{
    constructor(x,y,radius){
        var options={
            density: 1.0,
            frictionAir: 0.005
        }
        this.body=Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
        this.radius=radius;
       
    }

    display(){
        var pos=this.body.position;
        push();
        rotate(this.body.angle);
        translate(pos.x,pos.y);
ellipseMode(RADIUS);
fill("brown");
circle(0,0,this.radius);
pop();
    }
}