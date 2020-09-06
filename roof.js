class Roof{
    constructor(){
        var option = {
            isStatic:true
        }
       this.body = Bodies.rectangle(400,100,800,30,option);
       this.body.width = 400;
       this.body.height = 50;
       World.add(world,this.body); 
    }
    display(){
        var pos = this.body.position;
        rect(pos.x,pos.y,this.body.width,this.body.height);
    }
}