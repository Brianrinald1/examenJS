let respuesta = prompt("estas listo para el examen de JavaScript? reponder por ( si/no )").toLowerCase();
let puntos = 0;
let n = 0;
if(respuesta =="si"){


while(n <1 ){
    n++;
alert("perfecto comencemos");

let pregunaUno = prompt("las Variables las colocamos como : A:let  B:var C:if   [Puntos:"+puntos+"]" )
if(pregunaUno == "a"){
    puntos = +1 ;
    alert("correcto");
}else{
    alert("incorrecto")
    puntos= puntos - 1;
}
if(puntos < 0 ){
    puntos = 0;}
let pregunDos = prompt("como se conoce la sentencia SI en JS: A:While  B:var C:If   [Puntos:"+puntos+"]").toLowerCase();
if(pregunDos == "c"){
    puntos = puntos + 1 ;
    alert("correcto");
}else{
    alert("incorrecto")
    puntos = puntos -1;
}
if(puntos < 0 ){
    puntos = 0;}
let pregunTres = prompt("cual opcion esta mal tipeada : A:.tulowerCase()  B:var C:switch   [Puntos:"+puntos+"]").toLowerCase();
if(pregunTres == "a"){
    puntos = puntos + 1 ;
    alert("correcto");
}else{
    alert("incorrecto")
    puntos = puntos -1;
}
if(puntos < 0 ){
    puntos = 0;}
let pregunCuatro = prompt("cual seria un boocle de 5 lineas? : A:For( i=0 ; i==5 ; i++)  B( i=0 ; i==3 ; i+) C:switch( i=0 ; i==5 ; i++)   [Puntos:"+puntos+"]").toLowerCase();
if(pregunCuatro == "a"){
    puntos = puntos + 1 ;
    for(i=1 ; i < 6 ; i++){
    alert("---CORRECTO--- "+ i);
    }
}else{
    alert("incorrecto")
    puntos = puntos -1;


}
if(puntos < 0 ){
    puntos = 0;}


let valoracion = prompt(
    "podrias darnos una valoracion? responder por ( si/no )").toLowerCase();
if (valoracion == "si") {
    let estrellas = prompt("Perfecto , valoranos del 1 al 5");
    switch (estrellas) {
        case "1":
            alert("1 sola ? ok , intentaremos me jorar                     ಥ_ಥ");
            break;
        case "2":
            alert("solo 2 ? voy a intendar mejorar un poco mas              ಠ_ಠ");
            break;
        case "3":
            alert("gracias por tu valoracion             ʘ‿ʘ");
            break;
        case "4":
            alert("gracias                  ( ˇ෴ˇ )");
            break;
        case "5":
            alert("Muchas Gracias Por Tu Valoracion           ( ˘ ³˘)♥");
            break;
        default:
            alert("apretaste cualquier cosa           (╬ ಠ益ಠ) ");
    }
} else if (valoracion !== "si" && valoracion !== "no") {
    alert("respuesta no esperada                (⊙_◎)");
} else {
    alert("ojala tengas un mal dia             (╬ ಠ益ಠ) ");
}
}
}
if (respuesta !== "si" && respuesta !== "no") {
    alert("Respuesta Incorrecta                       (⊙_◎) ");

} if(respuesta == "no") {
    alert("Vuelve cuando te sientas capas                 ಥ﹏ಥ ");

}


/*renegue un poco con el tema de que se ejecute una sola vez pero creo que quedo. trate de sacar la mayor cantidad de errorer
como la falla de tipeo y las respuestas incorrectas y trate de utilizar todo lo que vimos hasta ahora , se que en algunas ocaciones 
podria haber utilizado otras formas pero lo pense asi y depaso renegue un poco mas que creo que de eso se trata . */