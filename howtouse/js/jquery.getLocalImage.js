
/*
localImageReader JavaScript Library v1.00
Copyright 2014 Hiroaki KARASAWA
 */
(function($) {
  return $.fn.localImageReader = function(callback) {
    return $(this).change(function() {
      var file, fileReader;
      if (!this.files.length) {
        console.log('no images were selected');
        return;
      }
      file = this.files[0];
      if (file.type.length < 5 || file.type.indexOf('image') !== 0) {
        console.log('not image file was selected');
        return;
      }
      fileReader = new FileReader;
      fileReader.onload = function(event) {
        return callback(event.target.result);
      };
      return fileReader.readAsDataURL(file);
    });
  };
})(jQuery);
