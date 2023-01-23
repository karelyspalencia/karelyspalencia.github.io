let d = new Date();
document.body.innerHTML = "Hora Actual:  " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();


// Evento para cambiar una imagen por otra
/*window.addEventListener('load', iniciar, false);

function iniciar() {      
  var imagen = document.getElementById('imagen'), original = imagen.src;
  
  imagen.addEventListener('mouseover', function(){
      this.src = "imagenes/perfil.png";
  }, false);
  imagen.addEventListener('mouseout', function(){
      this.src = original;
  }, false);
}*/

function cambiartexto(obj, text){
   obj.innerText = text;
}