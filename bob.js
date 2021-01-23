class Bob{
    constructor(x,y){
    var options={
        restitution:1.0,
        friction:0,
        density:7.0,
      //isStatic:true
    }
    this.body = Bodies.circle(x,y,25,options);
    World.add(world,this.body);
    }

    display(){
        push();
        ellipseMode(RADIUS);
        fill(255,10,255);
        ellipse(this.body.position.x,this.body.position.y,25,25);
        pop();
    }
}