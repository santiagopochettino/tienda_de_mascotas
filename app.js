$(document).ready(function(){
   //ponemos nuestro codigo js que utiliza jquery
   configurarInicio();
   $('.myicono').click(function(e){
       $('#navbar ul').toggleClass('lista-sm');
   })

   function configurarInicio(){
       var urlPath = window.location.pathname;
     // console.log(urlPath);
       $('nav a').each(function(){
           var href = $(this).attr('href');
          // console.log(href);
           var indice = urlPath.length - href.length;
          // console.log(urlPath.substring(indice));
           if(urlPath.substring(indice) === href){
              //console.log('match');
              $(this).closest('li').addClass('active');
           }
       })
   }

})

/*function mostrar(caja) {
   var nombre = document.getElementById(caja);
   nombre.style.display ='block';

}
function juego(){
   var tiempo = ['1','3', '6','9','no hace falta'];

   var codigo = prompt('Cada  cuantos meses hay que desparasitar?: 9 meses,3 meses, 1 meses, no hace falta, 6 meses');
   var nro = prompt('Ingresá un numero entre 0 y 4');

   var ganador = document.querySelector('#ganador_juego');
   
 if(codigo==tiempo[nro]){
           alert('Ganaste!')
          ganador.style.display='block'
   }else{
          alert('Segui participando..')
           ganador.style.display='none'
     }
  }


  function disenio() {
   var colores = ['red', 'purple', 'black'];
   var elegido = prompt("Cambia el color eligiendo un nro entre 0 y 2");
   var caja = document.querySelector('body');
   caja.style.backgroundColor= colores[elegido];
}*/
