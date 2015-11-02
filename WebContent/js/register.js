$(function() {

	/*********************  密码隐藏显示START  ***********************/
	$('#is_show_phone').click(function(e) {
		if (this.className == "icon-eye") {
			$(this).removeClass("icon-eye");
			$(this).addClass("icon-eye-blocked");
			/* 密码框显示 */
			$("#pwd_phone_01").css("display", "block");
			$("#pwd_phone_02").css("display", "none");
			/* 设置值 */
			$("#pwd_phone_01").val($("#pwd_phone_02")[0].value);
		} else {
			$(this).removeClass("icon-eye-blocked");
			$(this).addClass("icon-eye");
			/* 密码框隐藏 */
			$("#pwd_phone_01").css("display", "none");
			$("#pwd_phone_02").css("display", "block");
		}
	});

	$('#is_show_email').click(function(e) {
		if (this.className == "icon-eye") {
			$(this).removeClass("icon-eye");
			$(this).addClass("icon-eye-blocked");
			/* 密码框显示 */
			$("#pwd_email_01").css("display", "block");
			$("#pwd_email_02").css("display", "none");
			/* 设置值 */
			$("#pwd_email_01").val($("#pwd_email_02")[0].value);
		} else {
			$(this).removeClass("icon-eye-blocked");
			$(this).addClass("icon-eye");
			/* 密码框隐藏 */
			$("#pwd_email_01").css("display", "none");
			$("#pwd_email_02").css("display", "block");
		}
	});

	/*********************  密码隐藏显示END  ***********************/
	
	/**********************  切换注册方式START  ***********************/
	var code = 0;

	$('.current').click(function(e) {
		/* 移除错误提示 */
		$(".mid02 .phone_txt").parent().removeClass("errorC");
		$(".error_phone").hide();
		$(".mid02 .paswd_txt").parent().removeClass("errorC");
		$(".error_password").hide();

		/* 设置值为空 */
		$(".mid02 .phone_txt").val("");
		$(".mid02 .paswd_txt").val("");
		$(".mid02 .code_txt").val("");

		$('#content .mid').show();
		$('#content .mid02').hide();
		$('#content .registered .clearfix .current').css({
			"color": "#5d891f",
			"font-weight": "bold"
		});
		$('#content .registered .clearfix .current02').css({
			"color": "#666",
			"font-weight": "normal"
		});
		code = 0;
	});

	$('#content .registered .clearfix .current02').click(function(e) {
		/* 移除错误提示 */
		$(".mid .email_txt").parent().removeClass("errorC");
		$(".error_email").hide();
		$(".mid .phone_txt").parent().removeClass("errorC");
		$(".error_phone").hide();
		$(".mid .paswd_txt").parent().removeClass("errorC");
		$(".error_password").hide();

		/* 设置值为空 */
		$(".mid .email_txt").val("");
		$(".mid .phone_txt").val("");
		$(".mid .paswd_txt").val("");

		$('#content .mid02').show();
		$('#content .mid').hide();
		$('#content .registered .clearfix .current').css({
			"color": "#666",
			"font-weight": "normal"
		});
		$('#content .registered .clearfix .current02').css({
			"color": "#5d891f",
			"font-weight": "bold"
		});
		code = 1;
	});

	/**********************  切换注册方式END  ***********************/

	/*********************  注册验证START  ***********************/

	//验证是否正确
	var mid_email = false;
	var mid_password = false;
	var mid_phone = false;
	var mid02_phone = false;
	var mid02_password = false;

	//邮箱栏获得焦点(mid01)
	$(".mid .email_txt").focus(function() {
		$(".mid .email_txt").parent().removeClass("errorC");
		$(".error_email").hide();
	});

	//邮箱栏键盘操作(mid01)
	$(".mid .email_txt").keyup(function() { //键盘监听keyup,keydown,keypress
		var emailVal = $(".mid .email_txt").val();
		emailValN = emailVal.replace(/\s/g, ''); //去空
		emailValN = emailValN.replace(/[\u4e00-\u9fa5]/g, ''); //屏蔽中文
		if (emailValN != emailVal) {
			$(".mid .email_txt").val(emailValN);
		}

		var mailVal = emailValN.split("@");
		var mailHtml = mailVal[0];
		if (mailHtml.length > 15) {
			mailHtml = mailHtml.slice(0, 15) + "..."; //字数超加省略
		}
	});

	//邮箱栏失去焦点(mid01)
	$(".mid .email_txt").blur(function() {
		reg = /^\w+[@]\w+((.com)|(.net)|(.cn)|(.org)|(.gmail))$$/;
		if ($(".mid .email_txt").val() == "") {
			$(".mid .email_txt").parent().addClass("errorC");
			$(".error_email").html("邮箱不能为空!");
			$(".error_email").css("display", "block");
			mid_email = false;
		} else if (!reg.test($(".mid .email_txt").val())) {
			$(".mid .email_txt").parent().addClass("errorC");
			$(".error_email").html("邮箱格式错误！");
			$(".error_email").css("display", "block");
			mid_email = false;
		} else {
			mid_email = true;
		}
	});

	//密码栏获得焦点(mid01)
	$(".mid .paswd_txt").focus(function() {
		$(".mid .paswd_txt").parent().removeClass("errorC");
		$(".error_password").hide();
	});

	//密码栏失去焦点(mid01)
	$(".mid .paswd_txt").blur(function() {
		reg1 = /^.*[\d]+.*$/;
		reg2 = /^.*[A-Za-z]+.*$/;
		reg3 = /^.*[_@#%&^+-/*\/\\]+.*$/; //验证密码
		var Pval = $("#pwd_email_02")[0].value;
		if (Pval == "") {
			$(".mid .paswd_txt").parent().addClass("errorC");
			$(".error_password").html("请填写密码");
			$(".error_password").css("display", "block");
			mid_password = false;
		} else if (Pval.length > 16 || Pval.length < 8) {
			$(".mid .paswd_txt").parent().addClass("errorC");
			$(".error_password").html("密码应为8-16个字符，区分大小写");
			$(".error_password").css("display", "block");
			mid_password = false;
		} else if (!((reg1.test(Pval) && reg2.test(Pval)) || (reg1.test(Pval) && reg3.test(Pval)) || (reg2.test(Pval) && reg3.test(Pval)))) {
			$(".mid .paswd_txt").parent().addClass("errorC");
			$(".error_password").html("需至少包含数字、字母和符号中的两种类型");
			$(".error_password").css("display", "block");
			mid_password = false;
		} else {
			mid_password = true;
		}
	});

	//手机栏获得焦点(mid01)
	$(".phone_txt").focus(function() {
		$(".mid .phone_txt").parent().removeClass("errorC");
		$(".error_phone").hide();
	});

	//手机号栏失去焦点(mid01)
	$(".mid .phone_txt").blur(function() {
		reg = /^1[3|4|5|8][0-9]\d{4,8}$/i; //验证手机正则(输入前7位至11位)

		if ($(".mid .phone_txt").val() == "") {
			$(".mid .phone_txt").parent().addClass("errorC");
			$(".error_phone").html("请输入手机号");
			$(".error_phone").css("display", "block");
			mid_phone = false;
		} else if ($(".mid .phone_txt").val().length < 11) {
			$(".mid .phone_txt").parent().addClass("errorC");
			$(".error_phone").html("手机号长度有误！");
			$(".error_phone").css("display", "block");
			mid_phone = false;
		} else if (!reg.test($(".mid .phone_txt").val())) {
			$(".mid .phone_txt").parent().addClass("errorC");
			$(".error_phone").html("逗我呢吧，你确定这是你的手机号!!");
			$(".error_phone").css("display", "block");
			mid_phone = false;
		} else {
			mid_phone = true;
		}
	});

	/******************************************************************/

	//手机栏获得焦点(mid02)
	$(".mid02 .phone_txt").focus(function() {
		$(".mid02 .phone_txt").parent().removeClass("errorC");
		$(".error_phone").hide();
	});

	//手机号栏失去焦点(mid02)
	$(".mid02 .phone_txt").blur(function() {
		reg = /^1[3|5|7|8][0-9]\d{4,8}$/i; //验证手机正则(输入前7位至11位)

		if ($(".mid02 .phone_txt").val() == "") {
			$(".mid02 .phone_txt").parent().addClass("errorC");
			$(".error_phone").html("请输入手机号");
			$(".error_phone").css("display", "block");
			mid02_phone = false;
		} else if ($(".mid02 .phone_txt").val().length < 11) {
			$(".mid02 .phone_txt").parent().addClass("errorC");
			$(".error_phone").html("手机号长度有误！");
			$(".error_phone").css("display", "block");
			mid02_phone = false;
		} else if (!reg.test($(".mid02 .phone_txt").val())) {
			$(".mid02 .phone_txt").parent().addClass("errorC");
			$(".error_phone").html("逗我呢吧，你确定这是你的手机号!!");
			$(".error_phone").css("display", "block");
			mid02_phone = false;
		} else {
			mid02_phone = true;
		}
	});

	//密码栏获得焦点(mid02)
	$(".mid02 .paswd_txt").focus(function() {
		$(".mid02 .paswd_txt").parent().removeClass("errorC");
		$(".error_password").hide();
	});

	//密码栏失去焦点(mid02)
	$(".mid02 .paswd_txt").blur(function() {
		reg1 = /^.*[\d]+.*$/;
		reg2 = /^.*[A-Za-z]+.*$/;
		reg3 = /^.*[_@#%&^+-/*\/\\]+.*$/; //验证密码
		var Pval = $("#pwd_phone_02")[0].value;
		if (Pval == "") {
			$(".mid02 .paswd_txt").parent().addClass("errorC");
			$(".error_password").html("请填写密码");
			$(".error_password").css("display", "block");
			mid02_password = false;
		} else if (Pval.length > 16 || Pval.length < 8) {
			$(".mid02 .paswd_txt").parent().addClass("errorC");
			$(".error_password").html("密码应为8-16个字符，区分大小写");
			$(".error_password").css("display", "block");
			mid02_password = false;
		} else if (!((reg1.test(Pval) && reg2.test(Pval)) || (reg1.test(Pval) && reg3.test(Pval)) || (reg2.test(Pval) && reg3.test(Pval)))) {
			$(".mid02 .paswd_txt").parent().addClass("errorC");
			$(".error_password").html("需至少包含数字、字母和符号中的两种类型");
			$(".error_password").css("display", "block");
			mid02_password = false;
		} else {
			mid02_password = true;
		}
	});

	/*********************  注册验证END  ***********************/

	/*********************  验证登录START  ***********************/

	$(".mid .reg_btn").click(function() {
		reg = /^\w+[@]\w+((.com)|(.net)|(.cn)|(.org)|(.gmail))$$/;
		if ($(".mid .email_txt").val() == "") {
			$(".mid .email_txt").parent().addClass("errorC");
			$(".error_email").html("邮箱不能为空!");
			$(".error_email").css("display", "block");
			mid_email = false;
		} else if (!reg.test($(".mid .email_txt").val())) {
			$(".mid .email_txt").parent().addClass("errorC");
			$(".error_email").html("邮箱格式错误！");
			$(".error_email").css("display", "block");
			mid_email = false;
		} else {
			mid_email = true;
		}

		reg1 = /^.*[\d]+.*$/;
		reg2 = /^.*[A-Za-z]+.*$/;
		reg3 = /^.*[_@#%&^+-/*\/\\]+.*$/; //验证密码
		var Pval = $("#pwd_email_02")[0].value;
		if (Pval == "") {
			$(".mid .paswd_txt").parent().addClass("errorC");
			$(".error_password").html("请填写密码");
			$(".error_password").css("display", "block");
			mid_password = false;
		} else if (Pval.length > 16 || Pval.length < 8) {
			$(".mid .paswd_txt").parent().addClass("errorC");
			$(".error_password").html("密码应为8-16个字符，区分大小写");
			$(".error_password").css("display", "block");
			mid_password = false;
		} else if (!((reg1.test(Pval) && reg2.test(Pval)) || (reg1.test(Pval) && reg3.test(Pval)) || (reg2.test(Pval) && reg3.test(Pval)))) {
			$(".mid .paswd_txt").parent().addClass("errorC");
			$(".error_password").html("需至少包含数字、字母和符号中的两种类型");
			$(".error_password").css("display", "block");
			mid_password = false;
		} else {
			mid_password = true;
		}

		reg4 = /^1[3|4|5|8][0-9]\d{4,8}$/i; //验证手机正则(输入前7位至11位)

		if ($(".mid .phone_txt").val() == "") {
			$(".mid .phone_txt").parent().addClass("errorC");
			$(".error_phone").html("请输入手机号");
			$(".error_phone").css("display", "block");
			mid_phone = false;
		} else if ($(".mid .phone_txt").val().length < 11) {
			$(".mid .phone_txt").parent().addClass("errorC");
			$(".error_phone").html("手机号长度有误！");
			$(".error_phone").css("display", "block");
			mid_phone = false;
		} else if (!reg4.test($(".mid .phone_txt").val())) {
			$(".mid .phone_txt").parent().addClass("errorC");
			$(".error_phone").html("逗我呢吧，你确定这是你的手机号!!");
			$(".error_phone").css("display", "block");
			mid_phone = false;
		} else {
			mid_phone = true;
		}

		if (mid_email == true && mid_password == true && mid_phone == true) {
			$("#reg_form").attr("action", "http://127.0.0.1:8080/shop/user/reg.html");
			$("#reg_form").Submit();
		} else {
			return false;
		}
	})

	$(".mid02 .reg_btn").click(function() {
		reg = /^1[3|5|7|8][0-9]\d{4,8}$/i; //验证手机正则(输入前7位至11位)
		if ($(".mid02 .phone_txt").val() == "") {
			$(".mid02 .phone_txt").parent().addClass("errorC");
			$(".error_phone").html("请输入手机号");
			$(".error_phone").css("display", "block");
			mid02_phone = false;
		} else if ($(".mid02 .phone_txt").val().length < 11) {
			$(".mid02 .phone_txt").parent().addClass("errorC");
			$(".error_phone").html("手机号长度有误！");
			$(".error_phone").css("display", "block");
			mid02_phone = false;
		} else if (!reg.test($(".mid02 .phone_txt").val())) {
			$(".mid02 .phone_txt").parent().addClass("errorC");
			$(".error_phone").html("逗我呢吧，你确定这是你的手机号!!");
			$(".error_phone").css("display", "block");
			mid02_phone = false;
		} else {
			mid02_phone = true;
		}

		reg1 = /^.*[\d]+.*$/;
		reg2 = /^.*[A-Za-z]+.*$/;
		reg3 = /^.*[_@#%&^+-/*\/\\]+.*$/; //验证密码
		var Pval = $("#pwd_phone_02")[0].value;
		if (Pval == "") {
			$(".mid02 .paswd_txt").parent().addClass("errorC");
			$(".error_password").html("请填写密码");
			$(".error_password").css("display", "block");
			mid02_password = false;
		} else if (Pval.length > 16 || Pval.length < 8) {
			$(".mid02 .paswd_txt").parent().addClass("errorC");
			$(".error_password").html("密码应为8-16个字符，区分大小写");
			$(".error_password").css("display", "block");
			mid02_password = false;
		} else if (!((reg1.test(Pval) && reg2.test(Pval)) || (reg1.test(Pval) && reg3.test(Pval)) || (reg2.test(Pval) && reg3.test(Pval)))) {
			$(".mid02 .paswd_txt").parent().addClass("errorC");
			$(".error_password").html("需至少包含数字、字母和符号中的两种类型");
			$(".error_password").css("display", "block");
			mid02_password = false;
		} else {
			mid02_password = true;
		}

		//提交注册信息
		if (mid02_phone == true && mid02_password == true) {
			$("#reg_form").attr("action", "http://127.0.0.1:8080/shop/user/reg.html");
			$("#reg_form").Submit();
		} else {
			return false;
		}
	})

	/*********************  验证登录END  ***********************/

	/*********************  验证用户名START  ***********************/
	
	//邮箱的ajax拼接data的异步请求
	$(".mid .email_txt").blur(function() {
		if(mid_email != false){
			$.ajax({
				url: 'http://127.0.0.1:8080/shop/user/checkName.html',
				type: 'post',
				dataType:"text",
				data: {"email":$(".mid .email_txt").val(),"phone":$(".mid02 .phone_txt").val(),"code":code},
				async: true, //默认为true 异步
				success: function(data, stats) {
//					var str = encodeURI(encodeURI(data));
//					alert(data);
					$(".mid .email_txt").parent().addClass("errorC");
					$(".error_email").html(data);
					$(".error_email").css("display", "block");
					mid_email = false;
				},
				error : function(XMLHttpRequest, textStatus, errorThrown) {
	                alert('读取超时，请检查网络连接');
	            },
			});
		}
	});
	
	//手机的ajax拼接data的异步请求
	$(".mid02 .phone_txt").blur(function() {
		if(mid02_phone != false){
			$.ajax({
				url: 'http://127.0.0.1:8080/shop/user/checkName.html',
				type: 'post',
				dataType:"text",
				data: {"email":$(".mid .email_txt").val(),"phone":$(".mid02 .phone_txt").val(),"code":code},
				async: true, //默认为true 异步
				error: function() {
					alert('error');
				},
				success: function(data, stats) {
//					alert(data);
//					alert(stats);
					$(".mid .phone_txt").parent().addClass("errorC");
					$(".error_phone").html(data);
					$(".error_phone").css("display", "block");
					mid_email = false;
				}
			});
		}
	});

	/*********************  验证用户名END  ***********************/

})