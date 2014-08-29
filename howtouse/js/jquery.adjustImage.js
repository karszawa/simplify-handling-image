
/*
adjustImage JavaScript Library v1.00
Copyright 2014 Hiroaki KARASAWA
 */
(function($) {
  var _adjustImage;
  $.fn.adjustImage = function(binaryImage, options) {
    var image, self;
    $(this).attr('src', binaryImage);
    image = new Image;
    self = this;
    image.onload = function() {
      return _adjustImage.call(self, this, options);
    };
    return image.src = binaryImage;
  };
  return _adjustImage = function(image, options) {
    if (image.width / image.height > options.width / options.height) {
      return $(this).css({
        'width': options.width + options.unit,
        'height': 'auto',
        'margin-top': !options.centeringVertical ? Math.floor((options.height - options.height * image.height / image.width) / 2) + options.unit : 0,
        'margin-left': 0
      });
    } else {
      return $(this).css({
        'width': 'auto',
        'height': options.height + options.unit,
        'margin-top': 0,
        'margin-left': !options.centeringHorizontal ? Math.floor((options.width - options.width * image.width / image.height) / 2) + options.unit : 0
      });
    }
  };
})(jQuery);
