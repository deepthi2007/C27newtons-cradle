class Rope{
    constructor(body1,pointB){
        var options={
            bodyA : body1,
             pointB:pointB
        }
        this.chain = Matter.Constraint.create(options);
        World.add(world,this.chain);

    }
    display(){
        var a = this.chain.bodyA.position;
        var b = this.chain.pointB;
        strokeWeight(2);

        push();
         line(a.x,a.y,b.x,b.y);
         pop();
    }
}