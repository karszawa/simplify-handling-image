(function() {
  (function($) {
    return $.fn.getLocalImage = function(id, callback) {
      return $(id).change(function() {
        var file, fileReader;
        if (!this.files.length) {
          return;
        }
        fileReader = new FileReader;
        file = this.files[0];
        fileReader.onload = function(event) {
          return callback(event.target.result);
        };
        return fileReader.readAsDataURL(file);
      });
    };
  })(jQuery);

}).call(this);
