$(function(){
	
	$('.current').click(function(e){
		$('#content .mid').show();
        $('#content .mid02').hide();
		$('#content .registered .clearfix .current').css({"color":"#5d891f","font-weight":"bold"});
		$('#content .registered .clearfix .current02').css({"color":"#666","font-weight":"normal"});

		
	});
	$('#content .registered .clearfix .current02').click(function(e){
		$('#content .mid02').show();
        $('#content .mid').hide();
        $('#content .registered .clearfix .current').css({"color":"#666","font-weight":"normal"});
        $('#content .registered .clearfix .current02').css({"color":"#5d891f","font-weight":"bold"});

	});
	
	

    
    $('#phoneNum').blur(function() {

        var phonelengh = $('#phoneNum').val();

       

        if (phonelengh == "") {
            /*alert("电话号码不能为空！");*/

        }

        else if (phonelengh.length != 11) {
            /*alert("请输入11位的电话号码！");*/

        }
       
        else {
            // 清空

            $('#phonelengh').val("");
        

        }

    });


		
})
