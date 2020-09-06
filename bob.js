class Bob{
    constructor(x,y){
        var option = {
            isStatic:false
        }
        this.body = Bodies.circle(x,y,60,option);
        this.radius = 60;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill("red");
        ellipseMode(RADIUS);
       ellipse(pos.x,pos.y,this.radius,this.radius);
    }

}