<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

	<head>
		<meta charset="UTF-8">
		<title>登录注册页面</title>
		<link rel="stylesheet" href="css/registered.css" type="text/css" />
		<link rel="stylesheet" href="css/style.css" type="text/css" />
		<script type="text/javascript" src="js/jquery-1.7.2.min.js"></script>
		<script type="text/javascript" src="js/register.js"></script>
	</head>

	<body>
		<!--头部区域 -->
		<div id="header">
			<div class="main">
				<h1><img src="img/logo.png"></h1>
				<h2><span>您好，欢迎光临Shinchan Shop！<a href="login.jsp">请登录</a></span></h2>
			</div>
		</div>

		<div id="content">
			<div class="registered">
				<!--注册部分 -->
				<form id="reg_form" action="" method="post">
					<ul class="clearfix">
						<li class="current">
							<label class="icon-mail"> </label>
							<span>邮箱帐号注册</span>
						</li>
						<li class="current02">
							<label class="icon-phone"> </label>
							<span>手机号码注册</span>
						</li>
					</ul>
					<div class="mid">
						<div>
							<input class="email_txt" type="text" name="user_email" value="" maxlength="32" placeholder="请输入邮箱地址">
							<span class="error error_email"></span>
						</div>
						<div class="eye">
							<input id="pwd_email_01" class="paswd_txt" name="user_password" type="text" autocomplete="off" value="" maxlength="16" placeholder="密码为6-20个大小写英文字母、符号或数字" style="display: none;">
							<input id="pwd_email_02" class="paswd_txt" name="user_password" type="password" autocomplete="off" value="" maxlength="16" placeholder="密码为6-20个大小写英文字母、符号或数字" style="display: block;">
							<label id="is_show_email" class="icon-eye"></label>
							<span class="error error_password"></span>
						</div>
						<!--<input class="paswd_txt2" type="password"  placeholder="再次确认密码" >-->
						<input class="phone_txt" type="text" name="user_phone" value="" placeholder="请输入手机号">
						<!-- 						<div class="code"> -->
						<!-- 							<input class="code_txt" type="text" placeholder="验证码"> -->
						<!-- 							<a href="#"><span>获取验证码</span></a> -->
						<!-- 						</div> -->
						<span class="error error_phone"></span>
						<div class="check">
							<input class="check_put" type="radio" checked="checked">
							<p>我已阅读并接受<a target="_blank" href="serviceAgreement.jsp">《服务条例》</a></p>
						</div>
						<button class="reg_btn">注册</button>
					</div>
				</form>
				<form id="reg_form" method="post">
					<div class="mid02">
						<input id="phoneNum" class="phone_txt" type="text" name="user_phone" maxlength="11" placeholder="请输入手机号">
						<span class="error error_phone"></span>
						<div class="code">
							<input class="code_txt" type="text" placeholder="验证码">
							<a href="#"><span>获取验证码</span></a>
						</div>
						<div class="eye">
							<input id="pwd_phone_01" class="paswd_txt" name="user_password" type="text" autocomplete="off" value="" maxlength="16" placeholder="密码为6-20个大小写英文字母、符号或数字" style="display: none;">
							<input id="pwd_phone_02" class="paswd_txt" name="user_password" type="password" autocomplete="off" value="" maxlength="16" placeholder="密码为6-20个大小写英文字母、符号或数字" style="display: block;">
							<label id="is_show_phone" class="icon-eye"> </label>
							<span class="error error_password"></span>
						</div>
						<!--<input class="paswd_txt2" type="password"  placeholder="再次确认密码" >-->
						<div class="check">
							<input class="check_put" type="radio" checked="checked">
							<p>我已阅读并接受<a target="_blank" href="serviceAgreement.jsp">《服务条例》</a></p>
						</div>
						<button class="reg_btn">注册</button>
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