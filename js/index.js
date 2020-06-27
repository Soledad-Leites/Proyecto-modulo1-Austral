$(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
  
  //NO PUSE UN SCRIPT PORQUE UTILICÉ EL ATRIBUTO DATA-INTERVAL EN EL SLIDE//

  //sumando JQUERY al botón de contacto, deshabilitando el boton cuando activa el modal, cambia de color y rehabilitandolo cuando se cierra. Solo Hotel Colonia
    $('#contacto').on('show.bs.modal', function(e){
      $('#contactoBtn').removeClass('btn-outline-success');
      $('#contactoBtn').addClass('btn-primary');
      $('#contactoBtn').prop('disabled', true);
      
    });
    
    $('#contacto').on('hidden.bs.modal', function(e){
      $('#contactoBtn').prop('disabled', false);
      $('#contactoBtn').removeClass('btn-primary');
      $('#contactoBtn').addClass('btn-outline-success');
      
    });

  

  });