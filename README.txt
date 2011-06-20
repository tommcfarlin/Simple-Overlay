============================================================================
jQuery Simple Overlay
Tom McFarlin, http://tommcfarlin.com, @moretom
============================================================================

ABOUT

Simple Overlay is a jQuery plugin for easily including full screen overlays
in your projects. 

It features a variety of configuration options for incorporating multiple
overlays, custom styles, glossy effect, callbacks, and more.

You can apply styles to the element that triggers the overlay using the
'overlay-trigger' class name. The overlay itself given a class name of
'overlay.'

-------------------------------------------

PARAMETERS

color         string
Specifies the hexidecimal or literal value for the color of the overlay.
Defaults to black.

opacity       number
The level of transparency for the overlay. Ranges from 0 to 1.0.
Defaults to 0.5.

effect        string
Dictates how the overlay is displayed and hidden. Can be either none,
fade, or slide.
Defaults to none.

onShow        function
The function called once the overlay is displayed.
Defaults to null.

onHide        function
The function called once the overlay is hidden.
Defaults to null.

closeOnClick  boolean
Dictates whether or not the overlay is closed when it's clicked.
Defaults to false.

glossy        boolean
Specifies whether or not a glossy effect is applied to the overy.
Defaults to false

container     string
The element to which the overlay is applied. Should be an ID.
Defaults to body.

-------------------------------------------

EXAMPLES

Display a semi-transparent red overlay when the first anchor on the
page has been clicked. Display an alert dialog and close the overlay
when it has been clicked.

  $('a:first').overlay(function(evt) {
    $(this).overlay({
      color: 'red',
      closeOnClick: true,
      onShow: function() {
        alert('Hello world!');
      }
    });
  });

Fade a semi-transparent black, glossy overlay into view once the element
having the ID of #trigger has been clicked.

  $('#trigger').click(function() {
    $(this).overlay({
      effect: 'fade',
      glossy: true
    });
  });

Append a new element to the DOM once the default overlay has been
displayed:

  $('#trigger').click(function() {
    $(this).overlay({
      onShow: function() {
        $('body').append(
          $('<div id="new-element">This is my new element!</div>');
        );
      });
    });
  });

-------------------------------------------

CONTACT

Web:      http://tommcfarlin.com
Twitter:  @moretom
Email:    tom@tommcfarlin.com

============================================================================

MIT license:
http://www.opensource.org/licenses/mit-license.php