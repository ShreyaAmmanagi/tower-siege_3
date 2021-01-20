class constraint{
    constructor(bodyA,pointB){
     var chain1 = {
         bodyA:bodyA,
         pointB:pointB,
         length:30,
         stiffness:0.5
     }
     this.pointB = pointB
     this.chain2 = Matter.Constraint.create(chain1);
     World.add(world,this.chain2)
    }
    detach(){
        this.chain2.bodyA = null
    }
    attach(body){
        this.chain2.bodyA = body
    }
    display(){
         strokeWeight(3)
        if(this.chain2.bodyA){       
         var pointB = this.pointB
         strokeWeight(4);
         line(this.chain2.bodyA.position.x,this.chain2.bodyA.position.y,pointB.x,pointB.y);  
    }
    }
}