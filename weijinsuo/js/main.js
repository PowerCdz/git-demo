/**
 * Created by Power on 17/1/14.
 */

// 我们自己的js脚本文件

$(function () {

	function resize() {

		var windoWidth = $(window).width();

		var sroll = windoWidth < 768;

		$("#md-main > .carousel-inner > .item").each(function (i,item) {
			var $item = $(item);
			var imgSrc = sroll ? $item.data('image-xs') : $item.data('image-lg');

			$item.css('backgroundImage','url("'+ imgSrc +'")');

			if(sroll){
				$item.html('<img src="'+ imgSrc +'" alt=" ">')
			}else {
				$item.empty();
			}

		});
	}

	$(window).on('resize',resize).trigger('resize');

	// 鼠标移入工具框
	$('[data-toggle="tooltip"]').tooltip();


	//手机端tab栏横向滚动事件
	var $tabsWidth = $(".nav-tabs");
	var Babwidth = 30;
	$tabsWidth.children().each(function (index,ele) {

		Babwidth += ele.clientWidth;

	})
	if(Babwidth > $(window).width()){

		$tabsWidth.css("width",Babwidth);
		$(".ul-main").css("overflow-x","scroll");
	}


	//获取title值
	var newLis = $("#news-main .nav-pills a");
		newLis.on('click',function () {
			var $this = $(this);
			var tabTitle = $this.data('title');
			$(".news-title").text(tabTitle);
		})

	//$("#header .navbar-brand").css("marginLeft",-200);
	//固定顶部导航栏
	// var affixeTop = $("#header .affix-top");
	// $(window).on('scroll',function () {
	// 	var scrollNav = $(document).scrollTop();
	// 	if(scrollNav > 100){
	// 		$("#header .navbar-brand").css("marginLeft",0);
	// 	}else {
	//
	// 	}
	// })

	//手势滑动轮播图
	//$('.carousel').carousel();   //初始化

	var $carousels = $(".carousel");
	var startX,moveX;
	var offsetX = 50;

	$carousels.on("touchstart",function (e) {
		// 手指触摸开始时记录一下坐标
		startX = e.originalEvent.touches[0].clientX;
		//console.log(startX);
		console.log(e);
	})

	$carousels.on("touchmove",function (e) {
		// 手指触摸开始时记录一下坐标
		moveX = e.originalEvent.touches[0].clientX;
	})

	$carousels.on("touchend",function (e) {
		// 手指触摸开始时记录一下坐标
		//console.log(moveX);
		var distance = Math.abs(startX - moveX);
		if(distance > offsetX)
		{
			$carousels.carousel(startX > moveX ? 'next' : 'prev');
		}
	})

});