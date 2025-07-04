/* ---------------------------------------
asis 경로 및 파일명 : /base/js/ecms.custom.js
Description : 프로젝트 커스텀 스크립트
modify  : 2023.02.16 Updates
--------------------------------------- */
$(document).ready(function() {
	$(".accordion_ol1>ol>li .head").click(function(){
        var accordionCtsShow = $(this).parent().hasClass("on");
        if(accordionCtsShow == true){
			$(this).parent().removeClass("on");
        }else{
			$(this).parent().addClass("on");
        }
    });

	$('.procedure_tabs>ol>li>a').click(function(e){
		e.preventDefault();
		var tabId = $(this).attr('href');
		$('.procedure_tabs>ol>li>a').removeClass('on').removeAttr('title');
		$(this).addClass('on');
		$(this).attr('title','선택됨');
		$('.procedure_tab_conts>div').hide();
		$('.procedure_tab_conts ' + tabId).fadeIn();
	});

	$('.menu_tabs>.menu_tab4>ul>li>a').click(function(e){
		e.preventDefault();
		var tabId = $(this).attr('href');
		$('.menu_tabs>.menu_tab4>ul>li').removeClass('on');
		$('.menu_tabs>.menu_tab4>ul>li>a').removeAttr('title');
		$(this).parent().addClass('on');
		$(this).attr('title','선택됨');
		$('.menu_tab_conts>div').hide();
		$('.menu_tab_conts ' + tabId).fadeIn();
	});

	$('.category_tabs>.category_tab>ul>li>a').click(function(e){
		e.preventDefault();
		var tabId = $(this).attr('href');
		$('.category_tabs>.category_tab>ul>li>a').removeClass('on').removeAttr('title');
		$(this).addClass('on');
		$(this).attr('title','선택됨');
		$('.category_tab_conts>div').hide();
		$('.category_tab_conts ' + tabId).fadeIn();
	});

	$('.facilities_tabs>.facilities_tab>ul>li>a').click(function(e){
		e.preventDefault();
		var tabId = $(this).attr('href');
		$('.facilities_tabs>.facilities_tab>ul>li>a').removeClass('on').removeAttr('title');
		$(this).addClass('on');
		$(this).attr('title','선택됨');
		$('.facilities_tab_conts>div').hide();
		$('.facilities_tab_conts ' + tabId).fadeIn();
	});

	$(".scrollto").click(function(e) {
		e.preventDefault();
		$('html,body').animate( { scrollTop:$(this.hash).offset().top - $('#header').outerHeight() - 40 } , 1000);
	});
});

function formatLabel(label) {
	var originalOption = label.element;
	var originalOptionText = $(originalOption).data('label');
	//var originalOptionValue = $(originalOption).data('val');
	//return 	originalOptionText + originalOptionValue
	//return $('<span class="check"><input type="checkbox" id="'+ originalOptionValue +'" /><label for="'+ originalOptionValue +'">'+ originalOptionText +'</label></span>');
	return $('<span class="check">'+originalOptionText+'</span>');
}

// 탭메뉴 셀렉트박스 전환(반응형)
$(document).ready(function(){
  $(".category_tab button").click(function(){
    $(".category_tab ul li").toggle();
  });
});


$(function() {
	$(".category_tab ul li a.on").css({
		"display": "block"
	});
}); 

/* ---------------------------------------
asis 경로 및 파일명 : /base/js/ecms.custom.js
Description : 공통스크립트
modify  : 2023.01.02 Updates
--------------------------------------- */
$(document).ready(function() {
	if($('.snsBox').length > 0) {
		$('a.sns_open').click(function(){
			$(this).parent().toggleClass('on');
		});
	}
})