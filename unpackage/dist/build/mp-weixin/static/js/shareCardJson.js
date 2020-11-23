export default class LastMayday {
	constructor(cardInfo) {
	    this.cardInfo = cardInfo;
	}
	palette() {
		return ({
			"width": "375px",
			"height": "300px",
			"background": "#f5f5f5",
			"views": [{
					"type": "rect",
					"css": {
						"background": "linear-gradient(32deg, #0056A7 8%, #2C964A 50%, #B5C700 100%);",
						"width": "345px",
						"height": "207px",
						"top": "10px",
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
						"top": "28.000000000000004px",
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
						"top": "55px",
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
				{
					"type": "image",
					"url": "https://agent-centre.attachment.mgtx.cn/vcard/wwc215659e1b108482/upload/20200926/836a48d638569247768c70095419dd34.jpg",
					"css": {
						"width": "119.16px",
						"height": "49.18px",
						"top": "22.000000000000004px",
						"left": "223px",
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
					"text": this.cardInfo.company_name,
					"css": {
						"color": "#fff",
						"background": "rgba(0,0,0,0)",
						"width": "200px",
						"height": "20.02px",
						"top": "108px",
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
						"top": "136px",
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
					"text": "电话："+this.cardInfo.telephone,
					"css": {
						"color": "#fff",
						"background": "rgba(0,0,0,0)",
						"width": "95px",
						"height": "12.870000000000001px",
						"top": "152px",
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
					"text": "传真："+this.cardInfo.fax,
					"css": {
						"color": "#fff",
						"background": "rgba(0,0,0,0)",
						"width": "97px",
						"height": "12.870000000000001px",
						"top": "152px",
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
					"text": "手机："+this.cardInfo.mobile,
					"css": {
						"color": "#fff",
						"background": "rgba(0,0,0,0)",
						"width": "97px",
						"height": "12.870000000000001px",
						"top": "168px",
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
					"text": "邮编："+this.cardInfo.zip_code,
					"css": {
						"color": "#fff",
						"background": "rgba(0,0,0,0)",
						"width": "97px",
						"height": "12.870000000000001px",
						"top": "168px",
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
					"text": "邮箱："+this.cardInfo.email,
					"css": {
						"color": "#fff",
						"background": "rgba(0,0,0,0)",
						"width": "184px",
						"height": "12.870000000000001px",
						"top": "184px",
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
						"top": "134px",
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
					"type": "rect",
					"css": {
						"background": "#0082EF",
						"width": "120px",
						"height": "50px",
						"top": "230px",
						"left": "124px",
						"rotate": "0",
						"borderRadius": "25px",
						"shadow": "",
						"color": "#0082EF"
					}
				},
				{
					"type": "text",
					"text": "查看名片",
					"css": {
						"color": "#fff",
						"background": "rgba(0,0,0,0)",
						"width": "120px",
						"height": "30px",
						"top": "242px",
						"left": "125px",
						"rotate": "0",
						"borderRadius": "",
						"borderWidth": "",
						"borderColor": "#000000",
						"shadow": "",
						"padding": "0px",
						"fontSize": "20px",
						"fontWeight": "normal",
						"maxLines": "4",
						"lineHeight": "25.974000000000004px",
						"textStyle": "fill",
						"textDecoration": "none",
						"fontFamily": "",
						"textAlign": "center"
					}
				}
			]
		});
	}
}
