class Roof {
    constructor(){
        var options={
            isStatic: true,
            
            

        }
        this.body = Matter.Bodies.rectangle(380, 50, 300, 25,options);

        World.add(world,this.body);
        
    }
    display(){
        var pos = this.body.position;
      push();
      translate(pos.x, pos.y); 
        rectMode(CENTER);
        rect(0,0,300,25);
        pop();
    }
}