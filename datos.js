function captura(){
    var nombres=document.getElementById("nombres").value;
    var apellidos=document.getElementById("apellidos").value;
    var rut=document.getElementById("rut").value;
    var fecha=document.getElementById("fecha").value;
    var fecha=document.getElementById("fecha").value;
    var direccion=document.getElementById("direccion").value;
    var ciudad=document.getElementById("ciudad").value;
    var email=document.getElementById("email").value;
    var telefono=document.getElementById("telefono").value;
    var comentario=document.getElementById("comentario").value;
    if(nombres,apellidos,rut==""){
        alert("Los campos nombres apellidos y rut son obligatorios");
        ducument.getElementById("nombres","apellidos","rut").focus();
    }
 
    console.log(nombres+" "+apellidos+" "+rut+" "+fecha+""+direccion+" "+ciudad+" "
    +email+" "+telefono+" "+comentario)
}