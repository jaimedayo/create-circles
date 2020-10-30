let listS;
let listc;
let c;
let s;

class Logic{
    c= new Circle;
    s=new Square;

    lists = [];
    listc = [];

makeArray(c){
    for (let i = 0; index < c; i++) {
        s=new Square;(40*i,random(110, 150),15,random(0, 11));
        lists.push(s);
    }
   

}
grow(){
listS.forEach(s => {
    s.grow();
});
listc.forEach(c => {
    c.grow();
});
}


sorceList(){
    this.lists.sort(function(a,b){
        if(a.getOder() > b.getOder()){
          return 1;
        }
        if(a.getOder() < b.getOder()){
           return -1
        }
        return 0;
      });
   

}
addElement(){
    s=new Square;(0, 400,random(110, 150),15,random(0, 11));
    lists.push(s);

}
removeElemet(){
    
    lists.splice(0,1)
}
makeCircle(){
   
}
}