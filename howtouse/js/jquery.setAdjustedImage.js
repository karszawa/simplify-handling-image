(function($) {
  var adjustImage;
  $.fn.setAdjustedImage = function(id, binaryImage, width, height, centeringHorizontal, centeringVertical) {
    var image, oHeight, oWidth, _ref;
    if (centeringHorizontal == null) {
      centeringHorizontal = true;
    }
    if (centeringVertical == null) {
      centeringVertical = true;
    }
    $(id).attr('src', binaryImage);
    _ref = [width.slice(0, width.length - 2), height.slice(0, height.length - 2)], oWidth = _ref[0], oHeight = _ref[1];
    image = new Image;
    image.src = binaryImage;
    return image.onload = function() {
      return adjustImage(id, oWidth, oHeight, this.width, this.height, centeringHorizontal, centeringVertical);
    };
  };
  return adjustImage = function(id, oWidth, oHeight, bWidth, bHeight, centeringHorizontal, centeringVertical) {
    if (bWidth / bHeight > oWidth / oHeight) {
      $(id).css('width', oWidth + "px");
      $(id).css('height', 'auto');
      if (centeringVertical) {
        $(id).css('margin-top', Math.floor((oHeight - oHeight * bHeight / bWidth) / 2) + "px");
      }
      if (centeringHorizontal) {
        return $(id).css('margin-left', 0);
      }
    } else {
      $(id).css('width', 'auto');
      $(id).css('height', oHeight + "px");
      if (centeringVertical) {
        $(id).css('margin-top', 0);
      }
      if (centeringHorizontal) {
        return $(id).css('margin-left', Math.floor((oWidth - oWidth * bWidth / bHeight) / 2) + "px");
      }
    }
  };
})(jQuery);
