do ($=jQuery) ->
	$.fn.setAdjustedImage = (id, image, width, height) ->
		$(id).attr 'src', image

		# 途中
		console.log image.size.width
