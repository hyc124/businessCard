const url = {
	login: "/login/login",
	userInfo: "/user/get_user",
	creadCard: "/vcard/update",
	cardInfo: "/vcard/detail",
	qiniuToken: "/upload/getQiniuToken_out",
	photo: "/user_altas/add",
	delPhoto: "/user_altas/delete",
	lookCard: "/login/visit",
	lookRecord: "/visit_times/list",
	lookRecordInfo: "/visit_logs/list",
	changeTel: "/customer/save_mobile",
	count: "/vcard/log_count",
	avatar: "/user/avatar",
	auth: "/login/auth",
	cardCustomer: '/vcard/customer_vcard_list',
	deleteCard: '/vcard/delete',
	userVcard:'/user_group/list',
	companylist:'/vcard/company_vcard_list',
	userUpdate:'/user_group/update',
	vcardGroup:'/vcard/update_group',
	userEdit:'/user_group/edit',
	vcardCustomer:'/vcard/user_to_customer',
	vcardStyle:'/vcard/update_style',
	friends:'/friends/index',
    vcardPic:'/vcard/read_pic',
    groupcard:'/user_group/is_exists_card'
}

// 此处第二个参数vm，就是我们在页面使用的this，你可以通过vm获取vuex等操作，更多内容详见uView对拦截器的介绍部分：
const install = (Vue, vm) => {

	// 登录
	const login = (params = {}) => vm.$u.post(url.login, params)
	//授权
	const auth = (params = {}) => vm.$u.post(url.auth, params)

	// 用户详情
	const userInfo = (params = {}) => vm.$u.get(url.userInfo, params);

	// 创建更新名片
	const creadCard = (params = {}) => vm.$u.post(url.creadCard, params);

	// 名片详情
	const cardInfo = (params = {}) => vm.$u.get(url.cardInfo, params);

	// 七牛云token
	const qiniuToken = () => vm.$u.get(url.qiniuToken);

	// 上传图片
	const photo = (params = {}) => vm.$u.post(url.photo, params);

	// 修改头像
	const avatar = (params = {}) => vm.$u.post(url.avatar, params);

	// 删除图片
	const delPhoto = (params = {}) => vm.$u.get(url.delPhoto, params);

	//浏览名片
	const lookCard = (params = {}) => vm.$u.post(url.lookCard, params);

	//浏览名片
	const lookRecord = (params = {}) => vm.$u.post(url.lookRecord, params);

	//浏览详情
	const lookRecordInfo = (params = {}) => vm.$u.post(url.lookRecordInfo, params);

	//交换电话
	const changeTel = (params = {}) => vm.$u.post(url.changeTel, params);

	// 统计
	const count = (params = {}) => vm.$u.get(url.count, params);

	// 获取客户名片列表
	const cardCustomer = (params = {}) => vm.$u.post(url.cardCustomer, params);

	// 删除用户名片
	const deleteCard = (params = {}) => vm.$u.get(url.deleteCard, params);

    // 获取名片夹分组列表
    const userVcard = (params = {}) =>  vm.$u.post(url.userVcard, params);

    // 获取企业名片列表
	const companylist = (params = {}) =>  vm.$u.post(url.companylist, params);
	
	// 修改分组
	const userUpdate = (params = {}) =>  vm.$u.post(url.userUpdate, params);
	
	// 修改用户名片夹的分组
	const vcardGroup = (params = {}) =>  vm.$u.post(url.vcardGroup, params);
	
	// 修改名片夹分组信息
	const userEdit = (params = {}) =>  vm.$u.post(url.userEdit, params);
	
	// 把名片加入到我的名片夹
	const vcardCustomer = (params = {}) => vm.$u.get(url.vcardCustomer, params);
	
	// 设置名片的背景图片
	const vcardStyle = (params = {}) => vm.$u.post(url.vcardStyle, params);
	
	// 获取朋友圈列表数据
	const friends = (params = {}) => vm.$u.get(url.friends, params);
	
	// 上传名片接口
	const vcardPic = (params = {}) => vm.$u.post(url.vcardPic, params);
	
	//删除分组前查询是否可以删除
	const groupcard = (params = {}) => vm.$u.get(url.groupcard, params);
	
	const api = {
		login,
		auth,
		userInfo,
		creadCard,
		cardInfo,
		qiniuToken,
		photo,
		delPhoto,
		lookCard,
		lookRecord,
		lookRecordInfo,
		changeTel,
		count,
		avatar,
		cardCustomer,
		deleteCard,
		userVcard,
		companylist,
		userUpdate,
		vcardGroup,
		userEdit,
		vcardCustomer,
		vcardStyle,
		friends,
		vcardPic,
		groupcard
	}
	vm.$u.api = api;
}

export default {
	install
}
