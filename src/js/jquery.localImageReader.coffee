###
localImageReader JavaScript Library v1.00
Copyright 2014 Hiroaki KARASAWA
###


do ($=jQuery) ->
	$.fn.localImageReader = (callback) ->
		$(this).change () ->
			unless this.files.length
				console.log 'no images were selected'
				return

			file = this.files[0]

			if file.type.length < 5 or file.type.indexOf('image') isnt 0
				console.log 'not image file was selected'
				return

			fileReader = new FileReader

			fileReader.onload = (event) ->
				callback event.target.result

			fileReader.readAsDataURL file
