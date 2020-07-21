class Drops{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, 4 ,4, options);
        this.width = 4;
        this.height = 4;
        World.add(world, this.body);
      }
      display(){
        push();
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(x, y, this.width, this.height);
        pop();
      }
}