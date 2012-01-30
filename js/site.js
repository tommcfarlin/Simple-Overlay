$(function() {
  
  SyntaxHighlighter.all();
  
  $('#paragraph-trigger').click(function() {
    $(this).overlay({
      closeOnClick: true
    });
  });
  
  var $modal = $('<div>This is my modal.</div>')
    .attr('id', 'modal')
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
  });
  
  $('#modal-trigger').click(function(evt) {
    evt.preventDefault();
    $(this).overlay({
      effect: 'fade',
      opacity: 0.8,
      closeOnClick: true,
      onShow: function() {
        $('body').append($modal);
      },
      onHide: function() {
        $modal.remove();
      },
    })
  });
  
  $('#anchor-trigger').click(function(evt) {
    evt.preventDefault();
    $(this).overlay({
      color: 'red',
      closeOnClick: true,
      glossy: true
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

  $('#photo-trigger-2').click(function() {
    $(this).overlay({
      overlayClass: 'ui-widget-overlay',
      effect: 'fade',
      container: '#photo-trigger-2'
    });
  });
});