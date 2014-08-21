(function() {
  (function($) {
    return $.fn.setAdjustedImage = function(id, image, width, height) {
      $(id).attr('src', image);
      return console.log(image.size.width);
    };
  })(jQuery);

}).call(this);
