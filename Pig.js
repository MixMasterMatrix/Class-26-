class Pig extends BaseClass {
  constructor(x, y){
    var options = {
      'restitution': 1
    }
    super(x,y,50,50,options);
    this.image = loadImage("sprites/enemy.png");
  }

};