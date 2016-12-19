var y = 10; // altura inicial y0=10%, debe leerse al iniciar si queremos que tenga alturas diferentes dependiendo del dispositivo
var v = 0;
var g = 1.622;
var a = g;
var dt = 0.016683;
var timer=null;
var timerFuel=null;
var fuel=100;

//al cargar por completo la página...
window.onload = function(){
	//definición de eventos
	
	
	//mostrar menú móvil
    	document.getElementById("showm").onclick = function () {
		document.getElementsByClassName("c")[0].style.display = "block";
		stop();
	}
	//ocultar menú móvil
	document.getElementById("hidem").onclick = function () {
		document.getElementsByClassName("c")[0].style.display = "none";
		start();
	}
	//encender/apagar el motor al hacer click en la pantalla
	document.getElementById("nave").onclick = function () {
	if (a==g){
	motorOn();
	
	} else {
	motorOff();
	}

	
	}
	
	
	//encender/apagar al apretar/soltar una tecla
	
	
	document.onkeydown = motorOn;
	document.onkeyup = motorOff;
	
	//Empezar a mover nave
	start();
}

//Definición de funciones
function start(){
	timer=setInterval(function(){ moverNave(); }, dt*1000);
}
/*No necesita explicación*/
function stop(){
	clearInterval(timer);
}
/*No necesita explicación*/
function moverNave(){
	v +=a*dt;
	document.getElementById("velocidad").innerHTML=v;
	y +=v*dt;
	document.getElementById("altura").innerHTML=y;
	
	//mover hasta que top sea un 70% de la pantalla
	if (y<75){ 
		document.getElementById("nave").style.top = y+"%"; 
	} else { 
		stop();
		endGame();
	}
}
/*No necesita explicación*/
function motorOn(){
	a=-g;
	document.getElementById("imgNaveOff").src="img/naveOn.png";
	
	if (timerFuel==null)
	timerFuel=setInterval(function(){ actualizarAltura(); }, 100);	
	
	
}
/*No necesita explicación*/
function motorOff(){
	a=g;
	document.getElementById("imgNaveOff").src="img/naveOff.png";
	clearInterval(timerFuel);
	timerFuel=null;
}
/*No necesita explicación*/
function actualizarAltura(){
	//Aquí hay que cambiar el valor del marcador de Fuel...
	fuel-=1;
	document.getElementById("fuel").innerHTML=fuel;	
}
/*Determina el resultado de los dos resultados posibles*/
function endGame(){
	if(v>5){
		document.getElementById("imgNaveOff").src="img/naveDown.png";
		document.getElementById("gameOver").style.display="block";
	} 
	else{
		
		document.getElementById("youWin").style.display="block";
	} 
	
}
/*Reinicia el juego*/
function retryGame() {
	
	location.reload();
	
	}
function pararRetomar(){
	start();
	document.getElementById("pausa").style.display="none";
}
/*Lo que sigue hasta el final es para el menu desplegable. 
	Ver también la parte de HTML y de CSS*/
	
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
	stop();
	document.getElementById("pausa").style.display="block";
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
function comoJugar(){
	var myWindow = window.open("how2.html", "_self");
}
function acercaDe(){
	var myWindow = window.open("about.html", "_self");
}
function aprendeLink(){
	var myWindow = window.open("aprender.html", "_self");
}
function volverBtn(){
	var myWindow = window.open("index.html", "_self");
}

