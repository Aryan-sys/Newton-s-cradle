class Bob{
    constructor(x,y){
        var options={
         isStatic: false,
            restitution : 1,
            friction : 1.5,
            density: 1.2,
        
    

        }
        this.body = Matter.Bodies.circle(x,y, 25, options );
this.radius = 25;
        World.add(world,this.body)
    }
    display(){
     
      push();
      
       translate(this.body.position.x,this.body.position.y);
       console.log(bobObject1.x) 
        fill("pink");
      ellipse(0,0,this.radius);
        pop();
      }
    };