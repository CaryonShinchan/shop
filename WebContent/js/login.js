$(function() {

	/***********************  登录验证START  ***********************/

	var login_user = false;
	var login_password = false;

	//用户名键盘操作
	$("#un").keyup(function() { //键盘监听keyup,keydown,keypress
		var userVal = $("#un").val();
		userValN = userVal.replace(/\s/g, ''); //去空
		userValN = userVal.replace(/[\u4e00-\u9fa5]/g, ''); //屏蔽中文
		if (userValN != userVal) {
			$("#un").val(userValN);
		}

	});

	$(".login_btn").click(function(callback) {
		if ($("#un").val() == "") {
			$(".error_tips").html("用户名不能为空！");
			$(".error_tips").css("display", "block");
			$(".icon-notification").css("display", "block");
			return false;
		}
		else
		{
			login_user = true;
		}
		var Pval = $("#pwd")[0].value;
		if (Pval == "") {
			$(".error_tips").html("请填写密码！");
			$(".error_tips").css("display", "block");
			$(".icon-notification").css("display", "block");
			return false;
		}
		else
		{
			login_password = true;
		}
		
		//提交登录信息
		if (login_user == true && login_password == true) {
			$("#login_form").attr("action", "http://localhost:8080/shop/user/login.html");
			$("#login_form").Submit();
			alert("123");
			alert(error);
		} else {
			return false;
		}
	})

	/***********************  登录验证END  ***********************/

})