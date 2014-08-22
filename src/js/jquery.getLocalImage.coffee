
$.fn.getLocalImage = (id, callback) ->
	$(id).change () ->
		unless this.files.length
			console.log 'no images were selected'
			return

		file = this.files[0]

		unless file.type[0...5] == 'image'
			console.log 'not image file was selected'
			return

		fileReader = new FileReader

		fileReader.onload = (event) ->
			callback event.target.result

		fileReader.readAsDataURL file
