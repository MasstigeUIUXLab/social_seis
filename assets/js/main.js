"use strict";
$(document).ready(function() {
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});
	
	var visualSwiper = new Swiper(".swiper-visual", {
		loop: true,
		effect: "fade",
		slidesPerView: 1,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".ms1 .swiper-pagination",
		},
		navigation: {
			nextEl: ".ms1 .swiper-button-next",
			prevEl: ".ms1 .swiper-button-prev",
		},
	});

	$(".swiper-visual .btn-swiper-play").on("click", function (e) {
		var $t = $(this);
	
		$t.toggleClass("on");
		if ($(this).hasClass("on")) {
			visualSwiper.autoplay.stop();
		} else {
			visualSwiper.autoplay.start();
		}
	});
	
	
	$(".swiper-banner .btn-swiper-play").on("click", function (e) {
		var $t = $(this);
	
		$t.toggleClass("on");
		if ($(this).hasClass("on")) {
			bannerSwiper.autoplay.stop();
		} else {
			bannerSwiper.autoplay.start();
		}
	});

	let cloneSlide = $('.swiper-board .swiper-wrapper').html();
	let arraySlide = [];
	let boardSwiper; 
   
	$('.swiper-board .swiper-slide').each(function(i, e) {
		arraySlide.push(e);
	});

	$('.category-list a').on('click', function(e) {
		e.preventDefault();
		boardSwiper.destroy();

		const type = $(this).text();
		
		$(this).addClass('on').parent().siblings().find('.on').removeClass('on');
		toggleBtnMore();
		$('.swiper-board .swiper-wrapper').empty();
		
		if (type === '전체') {
			$('.swiper-board .swiper-wrapper').append(cloneSlide);
		} else {
			$(arraySlide).each(function(i, e) {
				const exist = $(e).attr('data-type').indexOf(type);
			
				if (exist >= 0) {
					$('.swiper-board .swiper-wrapper').append(e);
				}
			});
		}
		boardSwiperInit();
	});

	function boardSwiperInit() {
		boardSwiper = new Swiper(".swiper-board", {
			// autoplay: {
			// 	delay: 5000,
			// 	disableOnInteraction: false,
			// },
			slideToClickedSlide : true,
			slidesPerView: 1,
			spaceBetween: 16,
			navigation: {
				nextEl: ".swiper-board .swiper-button-next",
				prevEl: ".swiper-board .swiper-button-prev",
			}, 	
			breakpoints: {
				769: {
					spaceBetween: 24,
				},
			},
			on: {
				init: function(){
				},
				slideChange: function(instance){
					swiperPaginationLoop(instance);
				},
				update: function() {
					this.slideTo(0);
				}
			},
	   });
	}
	
	boardSwiperInit();
	toggleBtnMore();

	function toggleBtnMore() {
		var $activeBtn = $('.category-list a.on');

		if($activeBtn.length && $activeBtn.text().trim() === "전체") {
			$("#btnMore").css('display', 'none');
		} else {
			$("#btnMore").css('display', 'inline-flex');
		}
	}
   
	function swiperPaginationLoop(instance){
		var currentIndex = instance.realIndex; 
		var loopedSlides = instance.slides.length / 2; 
	  
		if (currentIndex >= loopedSlides) {
		  currentIndex -= loopedSlides; 
		}
	}

	var bannerSwiper = new Swiper(".swiper-banner", {
		speed: 300,
		loop: true,
		loopFillGroupWithBlank: true,
		slidesPerView: 1,
		spaceBetween: 16,
		autoplay: {
			delay: 4000,
			disableOnInteraction: true,	
		},
		breakpoints: {
			769: {
				slidesPerView: 2,
				spaceBetween: 24,
			},
		},
		a11y: { 
			enabled: true,
			prevSlideMessage: '이전 슬라이드',
			nextSlideMessage: '다음 슬라이드',   
			slideLabelMessage: '총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드 입니다.',
		},
		navigation: {
			nextEl: ".swiper-banner .swiper-button-next",
			prevEl: ".swiper-banner .swiper-button-prev",
		}, 	
		pagination: {
			el: ".swiper-banner .swiper-pagination",
			clickable: false,
			type: "custom",
			renderCustom: function(swiper, current, total) {
				return (
					'<span class="current">' + 0 + (current) + '</span>' + '<span class="total">' + 0 + (total) + '</span>'
				);
			}
		},
		on: {
			autoplayTimeLeft(s, time, progress) {
				document.querySelector('.swiper-banner .banner-progress svg').style.setProperty("--progress", 1 - progress)
			}
		}
	})

	
	var menu1Swiper = new Swiper(".swiper-menu1", {
		slidesPerView: 'auto',
		spaceBetween: 24,
		autoplay: {
		  delay: 5000,
		  disableOnInteraction: false,	
		},
		navigation: {
			nextEl: ".swiper-menu1 .swiper-button-next",
			prevEl: ".swiper-menu1 .swiper-button-prev",
		}, 	
		breakpoints: {
			768: {
				slidesPerView: 'auto',
				spaceBetween: 40,
			},
			1200: {
				slidesPerView: 7,
				spaceBetween: 38,
			},
			1440: {
				slidesPerView: 7,
				spaceBetween: 76,
			},
		},
	})

	var menu2Swiper = new Swiper(".swiper-menu2", {
		slidesPerView: 'auto',
		spaceBetween: 24,
		autoplay: {
		  delay: 5000,
		  disableOnInteraction: false,	
		},
		navigation: {
			nextEl: ".swiper-menu2 .swiper-button-next",
			prevEl: ".swiper-menu2 .swiper-button-prev",
		}, 	
		breakpoints: {
			768: {
				slidesPerView: 5,
				spaceBetween: 12,
			},
			1200: {
				slidesPerView: 5,
				spaceBetween: 0,
			},
		},
	})

	var commSwiper = new Swiper(".swiper-comm", {
		slidesPerView: 1,
		spaceBetween: 16,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		breakpoints: {
			576: {
				slidesPerView: 2,
			},
			1440: {
				slidesPerView: 3,
			},
		},
		pagination: {
			el: ".swiper-comm .swiper-pagination",
		},
	});

	var pubCategory = ['보도자료', '발간자료', '교육정보'];
	var pubSwiper = new Swiper('.swiper-pub', {
		slidesPerView: 1,
		spaceBetween: 0,
		observer: true,
		observerParents: true,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".swiper-pub .pagination-custom",
			clickable: true,
			renderBullet: function (index, className) {
				return '<div class="' + className + '"><span>' + (pubCategory[index]) + '</span></div>';
			}
		},
	});
	
	var pubPagingSwiper = new Swiper(".swiper-pub", {
		pagination: {
			el: ".swiper-pub .pagination-bullet",
			type: "bullets",
		},
	});

	pubSwiper.controller.control = pubPagingSwiper;
});