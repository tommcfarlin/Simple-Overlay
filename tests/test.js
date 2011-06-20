/*
 * Simple Overlay Test Suite
 * Unit Tests for Simple Overlay
 * A jQuery Plugin for creating a simple, customizable overlay. Supports multiple instances,
 * custom callbacks, hide on click, glossy effect, and more.
 *
 * Copyright 2011 Tom McFarlin, http://tommcfarlin.com
 * Released under the MIT License
 * More information: http://moreco.de/simple-overlay
*/

/*-------------------------------------------------------*
 * Default Value Tests
 *-------------------------------------------------------*/

module("Default Option Values");
test("color", function() {
	function defaultColorValue() {
		return $.fn.overlay.defaults.color;
	}
	equal(defaultColorValue(), '#000', 'The default color for the overlay.');
});

test("opacity", function() {
	function defaultOpacityValue() {
		return $.fn.overlay.defaults.opacity;
	}
	equal(defaultOpacityValue(), 0.5, 'The level of opacity for the overlay.');
});

test("effect", function() {
	function defaultDisplayEffect() {
		return $.fn.overlay.defaults.effect;
	}
	equal(defaultDisplayEffect(), 'none', 'Verifies that no effect is applied for the default overlay.');
});

test("onShow", function() {
	function defaultOnShowValue() {
		return $.fn.overlay.defaults.onShow;
	}
	equal(defaultOnShowValue(), null, 'Verifies there is no default callback when the overlay is shown.');
});

test("onHide", function() {
	function defaultOnHideValue() {
		return $.fn.overlay.defaults.onHide;
	}
	equal(defaultOnHideValue(), null, 'Verifies there is no default callback when the overlay is hidden.');
});
 
test("closeOnClick", function() {
	function defaultCloseOnClickValue() {
		return $.fn.overlay.defaults.closeOnClick;
	}
	equal(defaultCloseOnClickValue(), false, 'Verifies the modal is not closed by clicking by default.');
});

test("glossy", function() {
	function defaultGlossyValue() {
		return $.fn.overlay.defaults.glossy;
	}
	equal(defaultGlossyValue(), false, 'Verifies there is no gloss effect applied to the default overlay.');
});

test("container", function() {
	function defaultContainer() {
		return $.fn.overlay.defaults.container;
	}
	equal(defaultContainer(), 'body', 'Verifies the body element is the default container.');
});

/*-------------------------------------------------------*
 * Specific Value Tests
 *-------------------------------------------------------*/

module("Specific Option Values");
test("color", function() {
	function colorValue() {
    $('#overlay-trigger').click(function() {
      $(this).overlay({
        color: '#fff',
        closeOnClick: true
      });
    });
    $('#overlay-trigger').trigger('click');
    return $('.overlay:first').css('display', 'none').css('background-color');
	}
	equal(colorValue(), 'rgb(255, 255, 255)', 'The specified color for the overlay.');
});

test("opacity", function() {
	function opacityValue() {
    $('.overlay:first').trigger('click');     // clears the last overlay
		$('#overlay-trigger').click(function() {
      $(this).overlay({
        opacity: 1
      });
    });
    $('#overlay-trigger').trigger('click');
    return $('.overlay:first').css('display', 'none')
      .css('opacity');
  }
	equal(opacityValue(), 1, 'The level of opacity for the overlay.');
});

/*-------------------------------------------------------*
 * Event Tests
 *-------------------------------------------------------*/

asyncTest('onShow', function() {
  
  $('.overlay').trigger('click');
  
  $('#overlay-trigger').click(function() {
    $(this).overlay({
      onShow: function() {
        $('body').addClass('added-by-overlay');
      },
      closeOnClick: true
    });
  });
  
  $('#overlay-trigger').trigger('click');
  
  setTimeout(function() {
    equal($('body').hasClass('added-by-overlay'), true, 'Verifies the onShow callback is properly called');
    start();
  }, 1000);
  
  $('.overlay').trigger('click');
  
});

asyncTest('onHide', function() {

  $('#overlay-trigger').click(function() {
    $(this).overlay({
      onHide: function() {
        $('body').addClass('added-by-overlay');
      },
      closeOnClick: true
    });
  });
  
  $('#overlay-trigger').trigger('click');
  
  setTimeout(function() {
    equal($('body').hasClass('added-by-overlay'), true, 'Verifies the onHide callback is properly called');
    start();
  }, 1000);
  
  $('.overlay').trigger('click');
  
});

asyncTest('closeOnClick', function() {

  $('.overlay').trigger('click').remove();

  $('#overlay-trigger').click(function() {
    $(this).overlay({
      closeOnClick: true
    });
  });

  setTimeout(function() {
  
    $('#overlay-trigger').trigger('click');
    $('.overlay').click();
    
    equal($('.overlay').length === 0, true, 'Verifies the overlay is closed when clicked.');
    start();
  }, 1000);
  
});

asyncTest("glossy", function() {

  $('.overlay').trigger('click');

	$('#overlay-trigger').click(function() {
    $(this).overlay({
      glossy: true,
      closeOnClick: true
    });
  });
  
  setTimeout(function() {
    
    $('#overlay-trigger').click();  
    
    equal($('.overlay').children().length > 0, true, 'Verifies the glossy element is added to the overlay.');
    
    start();
    
    $('.overlay').click();
  
  }, 1000);
  
});

asyncTest("container", function() {

  $('.overlay').trigger('click');

	$('#overlay-trigger').click(function() {
    $(this).overlay({
      glossy: true,
      closeOnClick: true,
      container: '#overlay-container'
    });
  });
  
  setTimeout(function() {
    
    $('#overlay-trigger').click();  
    
    equal($('#overlay-container').children().length > 0, true, 'Verifies the overlay is added to another element rather than the body.');
    
    start();
    
    $('.overlay').click();
  
  }, 1000);
  
});
