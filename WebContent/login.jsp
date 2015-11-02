<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8">
		<title>登录注册页面</title>
		<link rel="stylesheet" href="css/login.css" type="text/css" />
		<link rel="stylesheet" href="css/style.css" type="text/css" />
		<script type="text/javascript" src="js/jquery-1.7.2.min.js"></script>
		<script type="text/javascript" src="js/login.js"></script>
	</head>

	<body>
		<!--头部区域 -->
		<div id="header">
			<div class="main">
				<h1><img src="img/logo.png"></h1>
				<h2><span>您好，欢迎光临Shinchan Shop！<a href="login.jsp">请登录</a></span></h2>
			</div>
		</div>

		<!--登录部分 -->
		<div id="content">
			<div class="login">
				<h2>用户登录<a href="registered.jsp">注册新账号</a></h2>
				<form id="login_form" action="" method="post">
					<div class="loginForm">
						<div class="formItemWrap">
							<i class="icon-notification" style="display:none"></i>
							<p id="error_tips" class="error_tips" style="display:none">您填写的账户名不存在请核对后重新填写</p>
						</div>						
						<div class="formItemWrap">
							<div class="form_item cur">
								<label class="icon-user"> </label>
								<input id="un" class="ipt ipt_username gay_text" type="text" style="outline: none;" tabindex="1" spellcheck="false" name="user_email" placeholder="邮箱/手机号">
								<span class="error error_user"></span>
							</div>
							<div class="form_item">
								<label class="icon-lock"> </label>
								<input id="pwd" class="ipt ipt_password gay_text" type="password" style="outline: none;" tabindex="2" name="user_password" placeholder="密码">
								<span class="error error_password"></span>	
								<div>
									<input class="autoLogin" type="checkbox" name="rember" checked="checked" />
									<a class="uncheck_agreement">自动登录</a>
								</div>
								<a class="forget_pswd" tabindex="-1" href="#">忘记密码？</a>
							</div>
							<button class="login_btn">登录</button>
						</div>
					</div>
				</form>
			</div>
		</div>

		<!--
        	footer部分
        -->
		<div id="footer">
			<p>京ICP备13044278号|合字B1.B2-20130004|营业执照</p>
			<p>Copyright © Shinchan Shop 2015-2016，All Rights Reserved</p>
		</div>
	</body>

</html>