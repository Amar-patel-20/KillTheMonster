class Chain{
    constructor(BodyA,pointB){
        var option = {
            bodyA:BodyA,
            pointB:pointB,
            stiffness:0.1,
            length:450,
            friction:1
        }
        this.pointB = pointB
        this.chain = Constraint.create(option)
        World.add(world,this.chain)
    }
    display(){
        
        var pointA = this.chain.bodyA.position
        var pointB = this.pointB
        
        strokeWeight(0)
        
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        
    }
}