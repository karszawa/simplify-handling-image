do ($=jQuery) ->
	$.fn.getLocalImage = (id, callback) ->
		$(id).change () ->
			# no images was selected
			return unless this.files.length

			# not image files was seelected
			# return if TODO

			fileReader = new FileReader
			file = this.files[0]

			fileReader.onload = (event) ->
				callback event.target.result

			fileReader.readAsDataURL file
