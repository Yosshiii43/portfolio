////ハンバーガーメニュー////
document.querySelector( '.js-hamburger' ).addEventListener(
	'click',
	() => {
		document.querySelector( '.js-hamburger' ).classList.toggle( 'is-open' );
		document.querySelector( '.p-header__menu' ).classList.toggle( 'is-open' );
		document.querySelector( 'body' ).classList.toggle( 'is-open' );
	}
);


////テキストのランダムアニメーション////
var Obj = {
	loop: false,
	minDisplayTime: 2000,// アニメーションの間隔時間
	initialDelay: 500, // アニメーション開始までの遅延時間
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


//要素の下からのフェードイン
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