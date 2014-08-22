do ($=jQuery) ->
	$.fn.setAdjustedImage = (id, binaryImage, width, height, centeringHorizontal=true, centeringVertical=true) ->
		$(id).attr 'src', binaryImage

		[oWidth, oHeight] = [width[0...(width.length-2)], height[0...(height.length-2)]]

		image = new Image
		image.src = binaryImage
		image.onload = ->
			adjustImage id, oWidth, oHeight, this.width, this.height, centeringHorizontal, centeringVertical


	adjustImage = (id, oWidth, oHeight, bWidth, bHeight, centeringHorizontal, centeringVertical) ->

		if bWidth / bHeight > oWidth / oHeight # 枠より横長
			$(id).css 'width', oWidth + "px"
			$(id).css 'height', 'auto'
			$(id).css 'margin-top', Math.floor((oHeight - oHeight * bHeight / bWidth) / 2) + "px" if centeringVertical
			$(id).css 'margin-left', 0 if centeringHorizontal
		else																	 # 枠より縦長
			$(id).css 'width', 'auto'
			$(id).css 'height', oHeight + "px"
			$(id).css 'margin-top', 0 if centeringVertical
			$(id).css 'margin-left', Math.floor((oWidth - oWidth * bWidth / bHeight) / 2) + "px" if centeringHorizontal

