(function() {
  $.fn.getLocalImage = function(id, callback) {
    return $(id).change(function() {
      var file, fileReader;
      if (!this.files.length) {
        console.log('no images were selected');
        return;
      }
      file = this.files[0];
      if (file.type.slice(0, 5) !== 'image') {
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

}).call(this);
