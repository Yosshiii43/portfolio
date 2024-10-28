////ローディングアニメーション////
//document.addEventListener("DOMContentLoaded", function() {
//	// 3秒後にローディング画面を非表示に
//	setTimeout(function() {
//	  document.querySelector(".p-loadingOverlay").style.display = "none";
//	}, 3000); // 3000ms（3秒）後に非表示にします
//  });

////ローディングアニメーション////
document.addEventListener("DOMContentLoaded", function () {
	// localStorageに"visited"フラグがあるかを確認
	const isVisited = localStorage.getItem("visited");
  
	if (isVisited) {
	  // 一度訪問済みの場合はローディングアニメーションを非表示
	  document.querySelector(".p-loadingOverlay").style.display = "none";
	} else {
	  // 初回訪問の場合はローディングアニメーションを表示し、フラグを設定
	  setTimeout(() => {
		document.querySelector(".p-loadingOverlay").style.display = "none";
		localStorage.setItem("visited", "true");
	  }, 3000); // アニメーションの表示時間を設定（例: 2秒）
	}
  });
////ハンバーガーメニュー////
document.querySelector( '.js-hamburger' ).addEventListener(
	'click',
	() => {
		document.querySelector( '.js-hamburger' ).classList.toggle( 'is-open' );
		document.querySelector( '.p-header__menu' ).classList.toggle( 'is-open' );
		document.querySelector( 'body' ).classList.toggle( 'is-open' );
	}
);

////スムーススクロール////
$(function(){
	var headerHeight = $('header').outerHeight(); // ヘッダーの高さ取得
	var urlHash = location.hash; // ハッシュ値があればページ内スクロール
	if(urlHash) { // 外部リンクからのクリック時
	  $('body,html').stop().scrollTop(0); // スクロールを0に戻す
	  setTimeout(function(){ // ロード時の処理を待ち、時間差でスクロール実行
		var target = $(urlHash);
		var position = target.offset().top - headerHeight;
		$('body,html').stop().animate({scrollTop:position}, 500); // スクロール速度ミリ秒
	  }, 100);
	}
	$('a[href^="#"]').click(function(){ // 通常のクリック時
	  var href= $(this).attr("href"); // ページ内リンク先を取得
	  var target = $(href);
	  var position = target.offset().top - headerHeight;
	  $('body,html').stop().animate({scrollTop:position}, 500); // スクロール速度ミリ秒

	// SP用のメニューを閉じる処理
	document.querySelector('.js-hamburger').classList.remove('is-open');
	document.querySelector('.p-header__menu').classList.remove('is-open');
	document.querySelector('body').classList.remove('is-open');

	  return false; // #付与なし、付与したい場合は、true
	});
  });


////テキストのランダムアニメーション////
var Obj = {
	loop: false,
	minDisplayTime: 2000,// アニメーションの間隔時間
	initialDelay: 900, // アニメーション開始までの遅延時間
	autoStart: true,
	in: {
		effect: 'fadeInUp',//animate.css の中にある採用したい動きのクラス名
		delayScale: 1,// 遅延時間の指数
		delay: 100,// 文字ごとの遅延時間
		sync: false,// アニメーションをすべての文字に同時適用するかどうか
		shuffle: true,// 文字表示がランダムな順に表示されるかどうか
	},
	out: {// 終了時のアニメーション設定をしたい場合はここに追記
	}
}
var element
//初期設定
function RandomInit() {
	element= $(".randomAnime");
	$(element[0]).textillate(Obj);
}

function RandomAnimeControl() {
		var elemPos = $(element[1]).offset().top - 50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();

		if (scroll >= elemPos - windowHeight) {
			$(element[1]).textillate(Obj);
		}
}

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	RandomInit(); /*初期設定を読み込み*/
	RandomAnimeControl();/*アニメーション用の関数を呼ぶ*/
});//ここまで画面が読み込まれたらすぐに動かしたい場合の記述


////要素の下からのフェードイン////
$(window).on('scroll load', function(){        /* ページロード時、またはスクロールされた時*/
	var scroll = $(this).scrollTop();            /* 現在のスクロール量を測定 */
	var windowHeight = $(window).height();       /* ウィンドウの高さを測定 */
	$('.js-fadeIn').each(function(){                /* 「fadeIn」のクラスがついているものを1つずつ確認し・・・ */
	  var cntPos = $(this).offset().top;         /* 対象の要素の上からの距離を測定 */
	  if(scroll > cntPos - windowHeight + windowHeight / 3){  /* 要素がある位置までスクロールされていたら */
		$(this).addClass('c-fadeIn--active');              /* 「active」のクラスを付与 */
	  }
	});
  });


////Worksページスライダー(slick)////
$('.js-slick01').slick({
	dots: true,
	infinite: true,
	speed: 500,
	fade: true,
	cssEase: 'linear'
});