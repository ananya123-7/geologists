class Stone {
    constructor(x, y) {
      var options ={
        'density':12,
        'friction': 0.8,
        'restitution':0.9
      }
      this.x=x;
		this.y=y;
        this.body=Bodies.rectangle(this.x, this.y,50,50, options);
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("grey");
        rect(pos.x, pos.y, this.width, this.height);
      }
};