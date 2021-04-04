class monster{
    constructor(x, y){
        var option = {
          restitution:0.01,
          density:1.2
        }
        this.body = Bodies.rectangle(x,y,100,100,option)
      this.image = loadImage("monster1.png");
      this.Visiblity = 255 
      World.add(world,this.body)
    }
    display(){
      if(this.body.speed<3){
          push()
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y-30,150,200)
        pop()
        console.log(this.body.speed)
      }
      else{
        World.remove(world,this.body)
        push();
        this.Visiblity = this.Visiblity-5
        tint(255,this.Visiblity)
        image(this.image,this.body.position.x,this.body.position.y-30,150,200)
        pop();
      }
     
    }
  
  };w