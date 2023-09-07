function captura(){
    var nombres=document.getElementById("nombres").value;
    var apellidos=document.getElementById("apellidos").value;
    var rut=document.getElementById("rut").value;
    if(nombres,apellidos,rut==""){
        alert("Los campos nombres apellidos y rut son obligatorios");
        ducument.getElementById("nombres","apellidos","rut").focus();
    }
 
    console.log(nombres+" "+apellidos+" "+rut)

}

var fecha=document.getElementById("fecha").value;
var dirección=document.getElementById("dirección").value;
var ciudad=document.getElementById("ciudad").value;
var email=document.getElementById("email").value;
var estadoCivil=document.getElementById("estadoCivil").value;
var telefono=document.getElementById("telefono").value;
var comentario=document.getElementById("comentario").value;