import { Logic } from "model/Logic";

let l;

class Controller{

    l = new Logic;


next(c){

    l.makeArray(c);
}

circle(){
l.makeCircle();
}

add(){
l.addElement();
}

remove(){
l.removeElemet();
}

sorce(){
    l.sorceList();
}

expand(){

    l.grow();
}
grafics(pag){
    l.grafics(pag);
}
}