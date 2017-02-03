/**
 * Created by Power on 17/1/19.
 */

// 自己的js脚本文件

window.onload = function () {
	search();
	times();
	banner();
};

//滚动事件  头部搜索栏背景透明变换
var search = function () {
	var searchs = document.getElementsByClassName("jd-header-box")[0];
	var banner = document.getElementsByClassName("jd-banner")[0];
	var top = banner.offsetHeight;
	window.onscroll = function () {
		var heights = document.body.scrollTop;
		if(heights > top)
		{
		    searchs.style.background = "rgba(201,21,35,0.8)";
		}else
		{
			var op = heights/top * 0.8;
			searchs.style.background = "rgba(201,21,35,"+op+")"
		};
	};
};

//秒杀器事件
var times = function () {
	var product = document.getElementsByClassName("product-timer")[0];
	var downs = product.getElementsByTagName("span");
	// console.log(downs.length);
	var timer = 5*60*60;  //5分钟秒杀   可以随意更改
	setInterval(function () {
		timer--;
		var h = Math.floor(timer/(60*60));
		var m = Math.floor(timer/60%60);
		var s = timer%60;
		// console.log(h+"-"+m+"-"+s);
		downs[0].innerHTML = h>10?Math.floor(h/10):0;
		downs[1].innerHTML = Math.floor(h%10);
		downs[3].innerHTML = m>10?Math.floor(m/10):0;
		downs[4].innerHTML = Math.floor(m%10);
		downs[6].innerHTML = s>10?Math.floor(s/10):0;
		downs[7].innerHTML = Math.floor(s%10);
	},1000);
};

//轮播图
var banner = function () {
	function $(id) {
		return document.getElementById(id);
	}

	var ul_imgs = $("jd-imgs").getElementsByTagName("img");
	var ul_btns = $("jd-btns").getElementsByTagName("li");

	var timer = null;
	var iNow = 0;

	timer = setInterval(tofun,3000);

	$("jd-banner").onmouseover = function () {

		clearInterval(timer);
	};
	$("jd-banner").onmouseout = function () {

		timer = setInterval(tofun,3000);
	};

	function tofun() {

		if(iNow == ul_imgs.length - 1)
		{
		    iNow = 0;
		}else
		{
			iNow++;
		}
		for (var i=0;i<ul_btns.length;i++)
		{
			ul_btns[i].className = "";
			ul_imgs[i].style.display = "none";
			startMove(ul_imgs[i],{opacity: 0});
		}

		ul_btns[iNow].className = "active";
		ul_imgs[iNow].style.display = "block";
		startMove(ul_imgs[iNow],{opacity: 100});

		startX > moveX ? (iNow+1) : (iNow -1);
	}

	var $carousels = $("jd-banner");
	var startX,moveX;
	var offsetX = 50;

	$carousels.addEventListener("touchstart",function (e) {
		// 手指触摸开始时记录一下坐标
		startX = e.touches[0].clientX;
		console.log(startX);
	});

	$carousels.addEventListener("touchmove",function (e) {
		// 手指触摸开始时记录一下坐标
		moveX = e.touches[0].clientX;
	});

	$carousels.addEventListener("touchend",function (e) {
		// 手指触摸开始时记录一下坐标
		// moveX = e.touches[0].clientX;
		console.log(moveX);
		// var distance = Math.abs(startX - moveX);
		// if(distance > offsetX)
		// {
			// $carousels.carousel(startX > moveX ? iNow+1 : iNow -1);
			// startX > moveX ? iNow+1 : iNow -1;
		// }
	});

	// for (var i = 0; i < ul_btns.length; i++) {
	//
	// 		ul_btns[i].index = i;
	//
	// 		ul_btns[i].touchstart = function() {
	// 			for (var i = 0; i < ul_imgs.length; i++) {
	// 				ul_btns[i].className = "";
	// 				ul_imgs[i].style.display = "none";
	// 				startMove(ul_imgs[i], {opacity: 0});
	// 			}
	// 			this.className = "active";
	// 			startMove(ul_imgs[this.index],{opacity: 100});
	// 			ul_imgs[this.index].style.display = "block";
	// 		};
	//
	// }

};