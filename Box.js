class Box
{
    constructor(xpos,ypos,width,height)
    {
        var box_options =
        {
            restitution: 0.3,
            friction: 1
        }
        this.body = Bodies.rectangle(xpos,ypos,width,height,box_options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }

    display()
    {
        var position = this.body.position
        
        rectMode(CENTER);
        //fill("red");
        rect(position.x,position.y,this.width,this.height);
    }
}