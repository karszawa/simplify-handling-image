# simplify handling image

## Description

This project contains two jquery plugins.
jquery.localImageReader.js simplifies getting local image by dialog.
jquery.adjustImage.js simplifies setting image adjusted to img box.


## Usage

First, you have to put `input` tag and `img` tag in html with `id`.
```html
<input type="file" id="input" name="file" />`
<img src="" id="output" alt=""/>
```

Next, call localImageReader with the `id` of `input` and `callback_function`.
```javascript
$('input#input').localImageReader(function(image) {
	return $('img#output').adjustImage(image, "500px", "500px");
});
```

Then, all works you should do was finished!
The callback_function will be called automatically if an user select an image by file dialog.

The function adjustImage which is set as callback_function will arange the size of the image keeping aspect ratio.
adjustImage should be called with `img` tag `id`, binary image file, width(represented by pixel) and height(it too).

More example is shown in howtouse/howtouse.html.
