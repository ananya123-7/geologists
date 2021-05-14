class Iron {
    constructor(x, y) {
      var options = {
        'density':30,
        'friction': 1.0,
        'restitution':0.5
      }
      this.x=x;
      this.y=y;
      this.body=Bodies.rectangle(this.x, this.y,70,70, options);
      World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("silver");
        rect(pos.x, pos.y, this.width, this.height);
      }
};
