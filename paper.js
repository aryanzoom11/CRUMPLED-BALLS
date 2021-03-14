
class Paper{
constructor(x,y,radius){
var options = {
isStatic:false,
density:1.0,
friction:0.3,
restitution:0.2
}
this.img=loadImage("paper.png")
this.img.scale=0.2
this.radius=radius
this.body=Bodies.circle(x,y,radius,options)
World.add(world,this.body)
}
display(){
fill("yellow");
imageMode(CENTER);
image(this.img,this.body.position.x,this.body.position.y,this.radius)
}
}