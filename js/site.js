$(function() {
  
  $('#paragraph-trigger').click(function() {
    $(this).overlay({
      closeOnClick: true
    });
  });
  
  $('#anchor-trigger').click(function(evt) {
    evt.preventDefault();
    $(this).overlay({
      color: 'red',
      closeOnClick: true,
      glossy: true
    });
  });  
  
  $('#modal-trigger').click(function(evt) {
    evt.preventDefault();
    $(this).overlay({
      effect: 'fade',
      opacity: 0.8,
      onShow: function() {
        $('body').append(
          $('<div id="modal">This is my modal. Click to close it.</div>')
            .css({
              background: '#fff',
              zIndex: 3000,
              padding: '10px',
              width: '640px',
              height: '240px',
              margin: '0 auto',
              opacity: 1,
              position: 'absolute',
              top: '10%',
              left: '10%'
            }).click(function() {
              $(this).remove();
              $('.overlay:first').fadeOut('fast', function() {
                $(this).remove();
              });
            })
        );
      }
    });
  });
  $('#photo-trigger').click(function() {
    $(this).overlay({
      color: '#ccc',
      effect: 'fade',
      glossy: true,
      container: '#photo-trigger',
      onShow: function() {
        $(this).click(function(evt) {
          evt.preventDefault();
        }).bind('contextmenu', function(evt) {
          evt.preventDefault();
        });
      }
    });
  });
});