function ON(){
    document.getElementById("lampada").src = "ligada.png";
    document.body.style.backgroundColor = '#000';
}
function OFF(){
    document.getElementById("lampada").src = "desligada.png";
    document.body.style.backgroundColor = '#fff';

}
function QUEBRA(){
    document.getElementById("lampada") .src = "quebrada.png";
    document.body.style.backgroundColor = '#aeaeae';

}
function PISCA(){
    let intervalo = 0;
    let contador = 0;
    while (contador <10){
        intervalo +=300;
        setTimeout(function() {
            document.getElementById('lampada').src = 'ligada.png'
            document.body.style.backgroundColor = '#a233ff'
        }, intervalo);        

        intervalo += 300;
        setTimeout(function() {
            document.getElementById('lampada').src = 'desligada.png'
            document.body.style.backgroundColor = '#228904';
        }, intervalo);
        contador++;
    }
}
let lampada = document.getElementById('lampada');

lampada.addEventListener('mouseover', ON);
lampada.addEventListener('mouseleave', OFF);
lampada.addEventListener('dbclick', QUEBRA);