export default class LastMayday {
	constructor(cardInfo) {
		this.cardInfo = cardInfo;
	}
	palette() {
		let _this = this

		function logo() {
			if (_this.cardInfo.xzd && _this.cardInfo.type != 2) {
				return {
					"type": "image",
					"url": uni.host + '/static/common/images/2.png',
					"css": {
						"width": "119.16px",
						"height": "49.18px",
						"top": "39px",
						"left": "223px",
						"rotate": "0",
						"borderRadius": "",
						"borderWidth": "",
						"borderColor": "#000000",
						"shadow": "",
						"mode": "scaleToFill"
					}
				}
			} else {
				return {
					"type": "text",
					"text": _this.cardInfo.company_name_en,
					"css": {
						"width": "119.16px",
						'color': "#fff",
						"height": "14px",
						"top": "48px",
						"left": "223px",
						"rotate": "0",
						"borderRadius": "",
						"borderWidth": "",
						"borderColor": "#000000",
						"shadow": "",
						"mode": "scaleToFill",
						'textAlign': "center",
						'lineHeight': "14px",
						'fontSize': "10px",
					}
				}
			}
		}

		function chinese() {
			if (_this.cardInfo.xzd && _this.cardInfo.type != 2) {
				return {}
			} else {
				return {
					"type": "text",
					"text": _this.cardInfo.company_name,
					"css": {
						"width": "119.16px",
						'color': "#fff",
						"height": "14px",
						"top": "70px",
						"left": "223px",
						"rotate": "0",
						"borderColor": "#fff",
						"shadow": "",
						"mode": "scaleToFill",
						'lineHeight':'20px',
						'textAlign': 'center'
					}
				}
			}
		}
		return ({
			"width": "375px",
			"height": "502px",
			"background": "#fff",
			"views": [{
					"type": "rect",
					"css": {
						"background": "linear-gradient(32deg, #0056A7 8%, #2C964A 50%, #B5C700 100%);",
						"width": "345px",
						"height": "207px",
						"top": "27px",
						"left": "15px",
						"rotate": "0",
						"borderRadius": "8px",
						"shadow": "",
						"color": "linear-gradient(32deg, #0056A7 8%, #2C964A 50%, #B5C700 100%);"
					}
				},
				{
					"type": "text",
					"text": this.cardInfo.username,
					"css": {
						"color": "#fff",
						"background": "rgba(0,0,0,0)",
						"width": "200px",
						"height": "25.740000000000002px",
						"top": "45px",
						"left": "35px",
						"rotate": "0",
						"borderRadius": "",
						"borderWidth": "",
						"borderColor": "#000000",
						"shadow": "",
						"padding": "0px",
						"fontSize": "18px",
						"fontWeight": "normal",
						"maxLines": "2",
						"lineHeight": "25.974000000000004px",
						"textStyle": "fill",
						"textDecoration": "none",
						"fontFamily": "",
						"textAlign": "left"
					}
				},
				{
					"type": "text",
					"text": this.cardInfo.positionInfo,
					"css": {
						"color": "#fff",
						"background": "rgba(0,0,0,0)",
						"width": "200px",
						"height": "15.729999999999999px",
						"top": "72px",
						"left": "35px",
						"rotate": "0",
						"borderRadius": "",
						"borderWidth": "",
						"borderColor": "#000000",
						"shadow": "",
						"padding": "0px",
						"fontSize": "11px",
						"fontWeight": "normal",
						"maxLines": "2",
						"lineHeight": "15.873000000000003px",
						"textStyle": "fill",
						"textDecoration": "none",
						"fontFamily": "",
						"textAlign": "left"
					}
				},
				logo(),
				chinese(),
				{
					"type": "text",
					"text": this.cardInfo.company_name,
					"css": {
						"color": "#fff",
						"background": "rgba(0,0,0,0)",
						"width": "200px",
						"height": "20.02px",
						"top": "124.99999999999999px",
						"left": "35px",
						"rotate": "0",
						"borderRadius": "",
						"borderWidth": "",
						"borderColor": "#000000",
						"shadow": "",
						"padding": "0px",
						"fontSize": "14px",
						"fontWeight": "normal",
						"maxLines": "2",
						"lineHeight": "20.202000000000005px",
						"textStyle": "fill",
						"textDecoration": "none",
						"fontFamily": "",
						"textAlign": "left"
					}
				},
				{
					"type": "text",
					"text": "地址：" + this.cardInfo.company_address,
					"css": {
						"color": "#fff",
						"background": "rgba(0,0,0,0)",
						"width": "220px",
						"height": "12.870000000000001px",
						"top": "153px",
						"left": "35px",
						"rotate": "0",
						"borderRadius": "",
						"borderWidth": "",
						"borderColor": "#000000",
						"shadow": "",
						"padding": "0px",
						"fontSize": "9px",
						"fontWeight": "normal",
						"maxLines": "2",
						"lineHeight": "12.987000000000002px",
						"textStyle": "fill",
						"textDecoration": "none",
						"fontFamily": "",
						"textAlign": "left"
					}
				},
				{
					"type": "text",
					"text": "电话：" + this.cardInfo.telephone,
					"css": {
						"color": "#fff",
						"background": "rgba(0,0,0,0)",
						"width": "95px",
						"height": "12.870000000000001px",
						"top": "169px",
						"left": "35px",
						"rotate": "0",
						"borderRadius": "",
						"borderWidth": "",
						"borderColor": "#000000",
						"shadow": "",
						"padding": "0px",
						"fontSize": "9px",
						"fontWeight": "normal",
						"maxLines": "2",
						"lineHeight": "12.987000000000002px",
						"textStyle": "fill",
						"textDecoration": "none",
						"fontFamily": "",
						"textAlign": "left"
					}
				},
				{
					"type": "text",
					"text": "传真：" + this.cardInfo.fax,
					"css": {
						"color": "#fff",
						"background": "rgba(0,0,0,0)",
						"width": "97px",
						"height": "12.870000000000001px",
						"top": "169px",
						"left": "158px",
						"rotate": "0",
						"borderRadius": "",
						"borderWidth": "",
						"borderColor": "#000000",
						"shadow": "",
						"padding": "0px",
						"fontSize": "9px",
						"fontWeight": "normal",
						"maxLines": "2",
						"lineHeight": "12.987000000000002px",
						"textStyle": "fill",
						"textDecoration": "none",
						"fontFamily": "",
						"textAlign": "left"
					}
				},
				{
					"type": "text",
					"text": "手机：" + this.cardInfo.mobile,
					"css": {
						"color": "#fff",
						"background": "rgba(0,0,0,0)",
						"width": "97px",
						"height": "12.870000000000001px",
						"top": "185px",
						"left": "35px",
						"rotate": "0",
						"borderRadius": "",
						"borderWidth": "",
						"borderColor": "#000000",
						"shadow": "",
						"padding": "0px",
						"fontSize": "9px",
						"fontWeight": "normal",
						"maxLines": "2",
						"lineHeight": "12.987000000000002px",
						"textStyle": "fill",
						"textDecoration": "none",
						"fontFamily": "",
						"textAlign": "left"
					}
				},
				{
					"type": "text",
					"text": "邮编：" + this.cardInfo.zip_code,
					"css": {
						"color": "#fff",
						"background": "rgba(0,0,0,0)",
						"width": "97px",
						"height": "12.870000000000001px",
						"top": "185px",
						"left": "158px",
						"rotate": "0",
						"borderRadius": "",
						"borderWidth": "",
						"borderColor": "#000000",
						"shadow": "",
						"padding": "0px",
						"fontSize": "9px",
						"fontWeight": "normal",
						"maxLines": "2",
						"lineHeight": "12.987000000000002px",
						"textStyle": "fill",
						"textDecoration": "none",
						"fontFamily": "",
						"textAlign": "left"
					}
				},
				{
					"type": "text",
					"text": "邮箱：" + this.cardInfo.email,
					"css": {
						"color": "#fff",
						"background": "rgba(0,0,0,0)",
						"width": "184px",
						"height": "12.870000000000001px",
						"top": "201px",
						"left": "35px",
						"rotate": "0",
						"borderRadius": "",
						"borderWidth": "",
						"borderColor": "#000000",
						"shadow": "",
						"padding": "0px",
						"fontSize": "9px",
						"fontWeight": "normal",
						"maxLines": "2",
						"lineHeight": "12.987000000000002px",
						"textStyle": "fill",
						"textDecoration": "none",
						"fontFamily": "",
						"textAlign": "left"
					}
				},
				{
					"type": "image",
					"url": this.cardInfo.qr_code,
					"css": {
						"width": "65px",
						"height": "65px",
						"top": "151px",
						"left": "277px",
						"rotate": "0",
						"borderRadius": "4px",
						"borderWidth": "",
						"borderColor": "#000000",
						"shadow": "",
						"mode": "scaleToFill"
					}
				},
				{
					"type": "text",
					"text": "您好，",
					"css": {
						"color": "#303133",
						"background": "rgba(0,0,0,0)",
						"width": "330px",
						"height": "25.740000000000002px",
						"top": "259px",
						"left": "16px",
						"rotate": "0",
						"borderRadius": "",
						"borderWidth": "",
						"borderColor": "#000000",
						"shadow": "",
						"padding": "0px",
						"fontSize": "18px",
						"fontWeight": "600",
						"maxLines": "2",
						"lineHeight": "25.974000000000004px",
						"textStyle": "fill",
						"textDecoration": "none",
						"fontFamily": "",
						"textAlign": "left"
					}
				},
				{
					"type": "rect",
					"css": {
						"background": "#0082EF",
						"width": "24px",
						"height": "2px",
						"top": "437px",
						"left": "16px",
						"rotate": "0",
						"borderRadius": "",
						"shadow": "",
						"color": "#0082EF"
					}
				},
				{
					"type": "text",
					"text": "我是" + this.cardInfo.company_name + this.cardInfo.position + " " + this.cardInfo.username +
						" \n这是我的名片，望惠存。\n谢谢。",
					"css": {
						"color": "#303133",
						"background": "rgba(0,0,0,0)",
						"width": "330px",
						"height": "78.62400000000001px",
						"top": "285px",
						"left": "16px",
						"rotate": "0",
						"borderRadius": "",
						"borderWidth": "",
						"borderColor": "#000000",
						"shadow": "",
						"padding": "0px",
						"fontSize": "18px",
						"fontWeight": "600",
						"maxLines": "4",
						"lineHeight": "25.974000000000004px",
						"textStyle": "fill",
						"textDecoration": "none",
						"fontFamily": "",
						"textAlign": "left"
					}
				},
				{
					"type": "text",
					"text": "长按识别二维码，收下名片",
					"css": {
						"color": "#606266",
						"background": "rgba(0,0,0,0)",
						"width": "330px",
						"height": "21.449999999999996px",
						"top": "450px",
						"left": "16px",
						"rotate": "0",
						"borderRadius": "",
						"borderWidth": "",
						"borderColor": "#000000",
						"shadow": "",
						"padding": "0px",
						"fontSize": "15px",
						"fontWeight": "normal",
						"maxLines": "4",
						"lineHeight": "21.645000000000003px",
						"textStyle": "fill",
						"textDecoration": "none",
						"fontFamily": "",
						"textAlign": "left"
					}
				},
				{
					"type": "image",
					"url": this.cardInfo.small_program_code,
					"css": {
						"width": "109px",
						"height": "109px",
						"top": "376px",
						"left": "250px",
						"rotate": "0",
						"borderRadius": "109px",
						"borderWidth": "",
						"borderColor": "#000000",
						"shadow": "",
						"mode": "scaleToFill"
					}
				}
			]
		});
	}
}
