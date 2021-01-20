class circles{
    constructor(x,y,radius){
     this.body = Bodies.circle(x,y,radius,{density:0.0001,restitution:0.2});
     this.radius = radius;
     this.box = 255
     World.add(world,this.body)
    }
    display(){
       if(this.body.speed<3){
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.radius)
       }
   else {
    World.remove(world,this.body)
    push()
    this.fade = this.fade-5
    tint(255,this.fade)
    pop()      
     score = score+0.6
}
    }
    //score1(){
      //  if(this.box<0 && this.box >-105){
        
    //}
    //}
}