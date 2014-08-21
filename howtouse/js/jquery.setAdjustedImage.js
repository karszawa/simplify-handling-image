(function() {
  var getWidthAndHeightFromBinaryImage;

  getWidthAndHeightFromBinaryImage = function(binaryImage) {
    var image;
    image = new Image;
    image.src = binaryImage;
    return [image.width, image.height];
  };

  $.fn.setAdjustedImage = function(id, image, width, height) {
    var bHeight, bWidth, _ref;
    $(id).attr('src', image);
    _ref = getWidthAndHeightFromBinaryImage(image), bWidth = _ref[0], bHeight = _ref[1];
    if (bWidth / bHeight > width / height) {
      $(id).css('width', width + "px");
      $(id).css('height', 'auto');
      $(id).css('margin-top', Math.floor((height - height * bHeight / bWidth) / 2) + "px");
      return $(id).css('margin-left', 0);
    } else {
      $(id).css('width', 'auto');
      $(id).css('height', height + "px");
      $(id).css('margin-top', 0);
      return $(id).css('margin-left', Math.floor((width - width * bWidth / bHeight) / 2) + "px");
    }
  };

}).call(this);
