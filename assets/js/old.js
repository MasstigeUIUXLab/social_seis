
$(document).ready(function() {
	if($('.snsBox').length > 0) {
		$('a.sns_open').click(function(){
			$(this).parent().toggleClass('on');
		});
	}
})