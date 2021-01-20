class object2 {
    constructor(x,y,width,height){
        this.body = Bodies.rectangle(x,y,width,height);
                this.width = width;
        this.height = height;
        this.fade = 255
        World.add(world,this.body);
    }
    display(){
      if(this.body.speed<3){
         rectMode(CENTER);
         rect(this.body.position.x,this.body.position.y,this.width,this.height)

      }
    else {
        World.remove(world,this.body)
        push()
        this.fade = this.fade-5
        tint(255,this.fade)
        pop()      
         score = score+1
}
    }
     //score2() {
     //if(this.fade<0&&this.fade>-150){
     //}   
    //}
}