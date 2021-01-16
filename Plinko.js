class Plinko{
	constructor(x,y)
	{
		var options={
			isStatic:true

			
			}
		this.x=x;
		this.y=y;
		
		this.body=Bodies.circle(x,y,15, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var plinkopos=this.body.position;		

			push()
			translate(plinkopos.x, plinkopos.y);
			ellipseMode(CENTER)
			//strokeWeight(4);
			fill("lightgreen")
			ellipse(0,0,15,15);
			pop()
			
	}

}