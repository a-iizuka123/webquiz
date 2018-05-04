// Whole-script strict mode syntax
"use strict";

function getUrlParams() {
  // URLパラメータの配列を返す
  let arg = new Object;
  console.log(location.search);
  let pair=location.search.substring(1).split('&');
  for(let i=0;pair[i];i++) {
      let kv = pair[i].split('=');
      arg[kv[0]]=kv[1];
  }

  return arg;
}

function sleepByPromise(sec) {
   // Promiseを使って遅延する
   return new Promise(resolve => setTimeout(resolve, sec*1000));

}

// async修飾子を使って非同期関数を宣言します。
async function wait(sec) {

   console.log('wait ' + sec.toString() + ' sec right now!');

   // await句を使って、Promiseの非同期処理が完了するまで待機します。
   await sleepByPromise(sec);

   console.log('wait ' + sec.toString() + ' sec done!');
}

function countUp() {
  // 数字をドラムロールで表示する
  $('.counter').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');

  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {
    duration: 500,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum.toFixed(2));
      //alert('finished');
    }
  });
});
}
