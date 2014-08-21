(function() {
  (function($) {
    var getWidthAndHeightFromBinaryImage;
    getWidthAndHeightFromBinaryImage = function(binaryImage) {
      var image;
      image = new Image;
      image.src = binaryImage;
      return [image.width, image.height];
    };
    return $.fn.setAdjustedImage = function(id, image, width, height) {
      var bHeight, bWidth, _ref;
      $(id).attr('src', image);
      _ref = getWidthAndHeightFromBinaryImage(image), bWidth = _ref[0], bHeight = _ref[1];
      if (bWidth / bHeight > width / height) {
        $(id).css('width', width + "px");
        return $(id).css('height', 'auto');
      } else {
        $(id).css('width', 'auto');
        return $(id).css('height', height + "px");
      }
    };
  })(jQuery);

}).call(this);
