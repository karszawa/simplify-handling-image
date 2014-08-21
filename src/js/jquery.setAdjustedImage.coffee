
getWidthAndHeightFromBinaryImage = (binaryImage) ->
	image = new Image
	image.src = binaryImage
	[image.width, image.height]

$.fn.setAdjustedImage = (id, image, width, height) ->
	$(id).attr 'src', image

	[bWidth, bHeight] = getWidthAndHeightFromBinaryImage image

	if bWidth / bHeight > width / height 	# 枠より横長
		$(id).css 'width', width + "px"
		$(id).css 'height', 'auto'
		$(id).css 'margin-top', Math.floor((height - height * bHeight / bWidth) / 2) + "px"
		$(id).css 'margin-left', 0
	else																	# 枠より縦長
		$(id).css 'width', 'auto'
		$(id).css 'height', height + "px"
		$(id).css 'margin-top', 0
		$(id).css 'margin-left', Math.floor((width - width * bWidth / bHeight) / 2) + "px"
