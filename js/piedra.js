//Genera un número aleatorio entre un rango de enteros
function patito(minimo, maximo)
{
  var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
  return numero;
}

var opciones = ["Piedra", "Papel", "Tijera","Lagarto", "Spock"];

var opcionUsuario;
var opcionMaquina = patito(0,4);

var resultados =  [ ["Empate!",  "Perdise :(", "Ganaste!", "Ganaste!", "Perdiste :("],
                    ["Ganaste!", "Empate ",    "Perdise!", "Perdise",  "Ganaste!"],
                    ["Perdise!", "Ganaste :)", "Empate!",  "Ganaste!", "Perdise :("],
                    ["Perdise",  "Ganaste",    "Perdise",  "Empate",   "Ganaste"],
                    ["Ganaste",  "Perdise",    "Ganaste",  "Perdise",  "Empate"]];

opcionUsuario = prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2\nLagarto: 3\nSpock: 4", 0);

window.alert("My name is George. Welcome!")

alert("Elegiste " + opciones[opcionUsuario]);
alert("Javascript eligió " + opciones[opcionMaquina]);
alert(resultados[opcionUsuario][opcionMaquina]);