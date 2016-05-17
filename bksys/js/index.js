
$(function(){
	var unm = $('#userName');
	var pwd = $('#password');
	var sbt = $('.c_index .btn-block');
	var errorMsg = $('#error_msg');
	
	sbt.click(function(){
		unm.siblings('.glyphicon').removeClass('hidden')
			.parent().addClass('has-success');
		pwd.siblings('.glyphicon').removeClass('hidden')
			.parent().addClass('has-error');
		errorMsg.removeClass('hidden');
	});
	
});