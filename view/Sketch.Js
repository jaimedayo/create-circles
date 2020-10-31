let c;
let con;
let pag;
function setup() {
    c = 0;
    pag = 0

    createCanvas(600, 600);

}
function draw() {


    switch (pag) {
        case 0:
            rectMode(CENTER);
            background(0);
            textSize(40);
            textAlign(CENTER, CENTER);

            //cuadrados para lso botones
            rect(100, 200, 100, 100);
            rect(500, 200, 100, 100);
            rect(300, 450, 400, 100);
            rect(300, 200, 100, 100);

            //texto para los botones
            fill(0);
            text(c, 300, 200);
            text('+', 100, 200);
            text('-', 500, 200);
            text('Next', 300, 450);
            fill(225);
            text("select a value bethen 0 and 10", 300, 100);

            break;
        case 1:
            background(0);
            fill(225);
            rect(100, 500, 120, 100);
            rect(225, 500, 120, 100);
            rect(350, 500, 120, 100);
            rect(475, 500, 120, 100);

            fill(0);
            textSize(30);
            text("Add", 100, 500);
            text("Remove", 225, 500);
            text("Grow", 350, 500);
            text("Ellipses", 475, 500);

            break;
    }
}
function mouseClicked() {
    //zona sensible de aumentar el valor 
    if (mouseX >= 50 && mouseX <= 150 && mouseY >= 150 && mouseY <= 250 && c < 10) {
        c++;
    }
    //zona sensible de disminuir el valor 
    if (mouseX >= 450 && mouseX <= 550 && mouseY >= 150 && mouseY <= 250 && c > 0) {
        c--;
    }
    //zona sensible cambio de pantalla 
    if (mouseX >= 100 && mouseX <= 500 && mouseY >= 400 && mouseY <= 500 && pag == 0) {
        pag = 1;
     
        con.next(c);
    }


///////////////////////////////////////////////////////////////////////////////////////

//add
    if (mouseX >= 40 && mouseX <= 160 && mouseY >= 450 && mouseY <= 550 && pag == 1) {

    }

//remove
    if (mouseX >= 165 && mouseX <= 285 && mouseY >= 450 && mouseY <= 550 && pag == 1) {

    }

//expand
    if (mouseX >= 290 && mouseX <= 410 && mouseY >= 450 && mouseY <= 550 && pag == 1) {

    }

//circles
    if (mouseX >= 415 && mouseX <= 575 && mouseY >= 450 && mouseY <= 550 && pag == 1) {

    }
}

function keyTiped() {
    if(keyCode===78){
        
    }
}