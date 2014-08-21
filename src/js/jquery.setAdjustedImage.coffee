do ($=jQuery) ->
	getWidthAndHeightFromBinaryImage = (binaryImage) ->
		image = new Image
		image.src = binaryImage
		[image.width, image.height]

	$.fn.setAdjustedImage = (id, image, width, height) ->
		$(id).attr 'src', image

		[bWidth, bHeight] = getWidthAndHeightFromBinaryImage image

		if bWidth / bHeight > width / height 	# 元画像より横長
			$(id).css 'width', width + "px"
			$(id).css 'height', 'auto'
		else																	# 元画像より縦長
			$(id).css 'width', 'auto'
			$(id).css 'height', height + "px"
