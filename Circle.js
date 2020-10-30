class Circle extends Element {
    constructor(x,y,tam,order){
        super(x,y,tam,order);
    }
    drawCircle(){
        ellipse(x,y,tam,tam);
    }
}