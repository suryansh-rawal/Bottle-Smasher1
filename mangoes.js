
class mangoes extends BaseClass {
  constructor(x, y){
    super(x,y,30,60)
    this.image = loadImage("bottle.png");
    this.Visiblity = 255;
  }

 display(){
   console.log(this.body.speed);
   if(this.body.speed < 5){
    super.display();
    
   }
   else{
     World.remove(world, this.body);

     
     push();
     
     this.Visiblity = this.Visiblity - 10;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     
     pop();
   } 
  console.log(this.Visiblity)
 }

 
 score(){
  if (this.Visiblity < 0 && this.Visiblity > -1005){
    score++;
  }
}

};
