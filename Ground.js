class Ground{
    constructor(x,y,w,h){
        var option = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,w,h,option)
        this.width = w
        this.height = h
        World.add(world,this.body)
    }  
    display(){
        push()
        rectMode(CENTER)
        stroke("skyblue")
        fill("skyblue")
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
        pop()
    }
    
}