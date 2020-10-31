class Square  extends Element {
    constructor(x,y,tam,order){
        super(x,y,tam,order);
    }
    drawSquare(){
        rect(x,y,tam,tam);
    }
}