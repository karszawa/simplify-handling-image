###
adjustImage JavaScript Library v1.00
Copyright 2014 Hiroaki KARASAWA
###


do ($=jQuery) ->
	$.fn.adjustImage = (binaryImage, options) ->
		$(this).attr 'src', binaryImage

		image = new Image
		self = this

		image.onload = ->
			_adjustImage.call(self, this, options)

		image.src = binaryImage


	_adjustImage = (image, options) ->
		if image.width / image.height > options.width / options.height
			$(this).css {
				'width': options.width + options.unit
				'height': 'auto'
				'margin-top': if !options.centeringVertical then Math.floor((options.height - options.height * image.height / image.width) / 2) + options.unit else 0
				'margin-left': 0
			}
		else
			$(this).css {
				'width': 'auto'
				'height': options.height + options.unit
				'margin-top': 0
				'margin-left': if !options.centeringHorizontal then Math.floor((options.width - options.width * image.width / image.height) / 2) + options.unit else 0
			}
