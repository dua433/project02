$(function () {
	//---------------------------- 전체카테고리 ----------------------------//
	var count = 0;
	$(".cateHam").click(function () {
		count++;
		if (count % 2 == 1) {
			$("#cateNav").stop().fadeIn(500);
			$(this).find("img").attr({
				"src": "images/icon_close02.png",
				"alt": "close"
			});
		} else {
			$("#cateNav").stop().fadeOut(500);
			$(this).find("img").attr({
				"src": "images/icon_all03.png",
				"alt": "전체카테고리"
			});
		}
	});

	//전체카테고리 sub
	$("#cateNav>li").mouseover(function () {
		$(this).children(".sub").css("display", "block");
		$(this).siblings().children(".sub").css("display", "none");
	});
	$("#cateNav>li").mouseout(function () {
		$(this).children(".sub").css("display", "none");
	});


	//---------------------------- 메인메뉴 ----------------------------//
	$("#nav>li").mouseover(function () {
		$(".subBg").stop().slideDown(300);
		$(this).children(".sub").stop().slideDown(300);
		$(this).siblings().children(".sub").stop().slideDown(300);
		$(this).addClass("active").siblings().removeClass("active");
	});
	$("#nav>li").mouseout(function () {
		$(".subBg").stop().slideUp(400);
		$(this).children(".sub").stop().slideUp(300);
		$(this).siblings().children(".sub").stop().slideUp(300);
		$(this).removeClass("active");
	});


	//---------------------------- 모바일 전체카테고리 ----------------------------//
	$(".hamBtn").click(function () {
		$(".mCateWrapW").stop().animate({
			"left": 0
		}, 1000);
	});
	$(".closeBtn").click(function () {
		$(".mCateWrapW").stop().animate({
			"left": "-100%"
		}, 1000);
	});
	var cCount = 0;
	$(".mCategory>li").click(function () {
		$(this).siblings().children(".sub").stop().slideUp(500);
		$(this).children(".sub").stop().slideToggle(500);
		$(this).siblings().removeClass("active");
		cCount++;
		if (cCount % 2 == 1) {
			$(this).addClass("active");
		} else {
			$(this).removeClass("active");
		}
	});

	//---------------------------- NENE BEST ----------------------------//
	var sNum = 0;
	var listBtn = $(".listBtn>li");
	var obj = $(".chicken>li").clone();
	$(".chicken").append(obj);
	//li의 너비
	var chickenW = $(".chicken>li").outerWidth();
	//console.log(chickenW);
	//listBtn 클릭
	listBtn.click(function (e) {
		e.preventDefault();
		sNum = $(this).index();
		bestMove();
	});
	//window resize
	$(window).resize(function () {
		chickenW = $(".chicken>li").outerWidth();
		$(".chicken").css("margin-left", -sNum * chickenW + "px");
	});
	//움직이는 함수
	function bestMove() {
		$(".chicken").stop().animate({
			"margin-left": -sNum * chickenW + "px"
		}, 1000);
		if (sNum == 6) {
			listBtn.eq(0).addClass("active").siblings().removeClass("active");
		}
		listBtn.eq(sNum).addClass("active").siblings().removeClass("active");
	}
	//rightBtn 클릭
	$(".rightBtn1").click(function (e) {
		e.preventDefault();
		//console.log(sNum);
		if (sNum == 6) {
			sNum = 0;
			$(".chicken").css("margin-left", 0);
		}
		sNum++;

		bestMove();
	});
	//leftBtn 클릭
	$(".leftBtn1").click(function (e) {
		e.preventDefault();
		if (sNum == 0) {
			sNum = 6;
			$(".chicken").css("margin-left", -sNum * chickenW + "px");
		}
		sNum--;

		bestMove();
	});
	//자동 움직임
	var bestTime = setInterval(function () {
		$(".rightBtn1").trigger("click");
	}, 3000);
	//mouse over
	$(".best").mouseover(function () {
		clearInterval(bestTime);
	});
	//mouse out
	$(".best").mouseout(function () {
		bestTime = setInterval(function () {
			$(".rightBtn1").trigger("click");
		}, 3000);
	});


	//---------------------------- 공지사항 ----------------------------//
	var current = 0;
	var noticeText = $(".rightText>li");

	setInterval(function () {
		//console.log(current);
		noticeText.eq(current).animate({
			"top": "-56px"
		}, 2000);
		current++;
		if (current == 3) {
			current = 0;
		}
		noticeText.eq(current).css("top", "56px");
		noticeText.eq(current).animate({
			"top": 0
		}, 2000);
	}, 3000);


	//---------------------------- video button ----------------------------//
    

	//---------------------------- NENE GALLERY ----------------------------//
	var $left = new Array();
	var $gallery = new Array();
	$(".galleryImg>li").each(function (i) {
		$left[i] = $(this).css("left");
		$gallery[i] = "." + $(this).attr("class");
	});
	$(".rightBtn2").click(function (e) {
		e.preventDefault();
		var obj = $gallery.shift();
		$gallery.push(obj);
		$($gallery[7]).css("left", $left[7]);
		for (i = 0; i < 8; i++) {
			$($gallery[i]).stop().animate({
				"left": $left[i]
			}, 500);
		}
	});
	$(".leftBtn2").click(function (e) {
		e.preventDefault();
		var obj = $gallery.pop();
		$gallery.unshift(obj);
		$($gallery[0]).css("left", $left[0]);
		for (i = 0; i < 7; i++) {
			$($gallery[i]).stop().animate({
				"left": $left[i]
			}, 500);
		}
	});
	var galleryTime = setInterval(function () {
		$(".rightBtn2").trigger("click");
	}, 4000);
	$(".gallery").mouseover(function () {
		clearInterval(galleryTime);
	});
	$(".gallery").mouseout(function () {
		galleryTime = setInterval(function () {
			$(".rightBtn2").trigger("click");
		}, 4000);
	});


	//---------------------------- TOP 퀵메뉴 ----------------------------//
	var qTop = $(".quick").offset().top;
	$(window).scroll(function () {
		var sTop = $(this).scrollTop();
		$(".quick").stop().animate({
			"top": qTop + sTop + "px"
		}, 200);
	});
});
