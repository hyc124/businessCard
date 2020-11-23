export default class LastMayday {
	constructor(cardInfo) {
		this.cardInfo = cardInfo;
	}
	palette() {
		return ({
			"width": "323px",
			"height": "424px",
			"background": "#fff",
			"views": [{
					"type": "rect",
					"css": {
						"background": "#0082EF",
						"width": "323px",
						"height": "424px",
						"top": "0px",
						"left": "0px",
						"rotate": "0",
						"borderRadius": "16px",
						"shadow": "",
						"color": "#0082EF"
					}
				},
				{
					"type": "text",
					"text": "请加我的企业微信",
					"css": {
						"color": "#fff",
						"background": "rgba(0,0,0,0)",
						"width": "244px",
						"height": "42.89999999999999px",
						"top": "34px",
						"left": "40px",
						"rotate": "0",
						"borderRadius": "",
						"borderWidth": "",
						"borderColor": "#000000",
						"shadow": "",
						"padding": "0px",
						"fontSize": "30px",
						"fontWeight": "normal",
						"maxLines": "2",
						"lineHeight": "43.290000000000006px",
						"textStyle": "fill",
						"textDecoration": "none",
						"fontFamily": "",
						"textAlign": "left"
					}
				},
				{
					"type": "image",
					"url": uni.host+'/static/common/images/1.png',
					"css": {
						"width": "258px",
						"height": "244.88px",
						"top": "132px",
						"left": "33px",
						"rotate": "0",
						"borderRadius": "",
						"borderWidth": "",
						"borderColor": "#000000",
						"shadow": "",
						"mode": "scaleToFill"
					}
				},
				{
					"type": "rect",
					"css": {
						"background": "#fff",
						"width": "178px",
						"height": "178px",
						"top": "126px",
						"left": "73px",
						"rotate": "0",
						"borderRadius": "4px",
						"shadow": "",
						"color": "#fff"
					}
				},
				{
					"type": "image",
					"url": this.cardInfo.qr_code,
					"css": {
						"width": "168px",
						"height": "168px",
						"top": "131px",
						"left": "78px",
						"rotate": "0",
						"borderRadius": "",
						"borderWidth": "",
						"borderColor": "#000000",
						"shadow": "",
						"mode": "scaleToFill"
					}
				},
				{
					"type": "text",
					"text": this.cardInfo.username,
					"css": {
						"color": "#fff",
						"background": "rgba(0,0,0,0)",
						"width": "251px",
						"height": "22.88px",
						"top": "369px",
						"left": "0px",
						"rotate": "0",
						"borderRadius": "",
						"borderWidth": "",
						"borderColor": "#000000",
						"shadow": "",
						"padding": "0px",
						"fontSize": "16px",
						"fontWeight": "normal",
						"maxLines": "2",
						"lineHeight": "23.088000000000005px",
						"textStyle": "fill",
						"textDecoration": "none",
						"fontFamily": "",
						"textAlign": "right"
					}
				},
				{
					"type": "text",
					"text": this.cardInfo.positionInfo,
					"css": {
						"color": "#fff",
						"background": "rgba(0,0,0,0)",
						"width": "251px",
						"height": "17.16px",
						"top": "392px",
						"left": "0px",
						"rotate": "0",
						"borderRadius": "",
						"borderWidth": "",
						"borderColor": "#000000",
						"shadow": "",
						"padding": "0px",
						"fontSize": "12px",
						"fontWeight": "normal",
						"maxLines": "2",
						"lineHeight": "17.316000000000003px",
						"textStyle": "fill",
						"textDecoration": "none",
						"fontFamily": "",
						"textAlign": "right"
					}
				}
			]
		});
	}
}
