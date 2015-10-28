$(function() {

	/**********************  切换注册方式START  ***********************/
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
	});

	/**********************  切换注册方式END  ***********************/

	/***********************  登录验证START  ***********************/

	var login_user = false;
	var login_password = false;

	//用户名获得焦点
	$("#un").focus(function() {
		$("#un").parent().removeClass("errorC");
		$(".error_user").hide();
	});

	//用户名键盘操作
	$("#un").keyup(function() { //键盘监听keyup,keydown,keypress
		var userVal = $("#un").val();
		userValN = userVal.replace(/\s/g, ''); //去空
		userValN = userVal.replace(/[\u4e00-\u9fa5]/g, ''); //屏蔽中文
		if (userValN != userVal) {
			$("#un").val(userValN);
		}

	});

	//用户名失去焦点
	$("#un").blur(function() {
		if ($("#un").val() == "") {
			$("#un").parent().addClass("errorC");
			$(".error_user").html("用户名不能为空!");
			$(".error_user").css("display", "block");
			login_user = false;
		} else {
			login_user = true;
		}
	});

	//密码栏获得焦点(mid01)
	$("#pwd").focus(function() {
		$("#pwd").parent().removeClass("errorC");
		$(".error_password").hide();
	});

	//密码栏失去焦点(mid01)
	$("#pwd").blur(function() {
		var Pval = $("#pwd")[0].value;
		if (Pval == "") {
			$("#pwd").parent().addClass("errorC");
			$(".error_password").html("请填写密码");
			$(".error_password").css("display", "block");
			login_password = false;
		} else {
			login_password = true;
		}
	});

	/***********************  登录验证END  ***********************/

	/***********************  提交登录END  ***********************/

	$("#login_btn").click(function(){
		if ($("#un").val() == "") {
			$("#un").parent().addClass("errorC");
			$(".error_user").html("用户名不能为空!");
			$(".error_user").css("display", "block");
			return false;
		}
		var Pval = $("#pwd")[0].value;
		if (Pval == "") {
			$("#pwd").parent().addClass("errorC");
			$(".error_password").html("请填写密码");
			$(".error_password").css("display", "block");
			return false;
		}
	})

	/***********************  提交登录END  ***********************/
})