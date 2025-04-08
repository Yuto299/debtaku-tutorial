const display = document.getElementById('display');
const buttons = Array.from(document.querySelectorAll('.buttons button')); //.必要です、class名で取得するため

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      display.value = ''; //クリアボタンをしたら全て消す
    } else if (value === '%') {
      display.value = parseFloat(display.value) / 100; //パーセント計算
    } else if (value === '=') {
      display.value = eval(display.value); //=ボタンを押したら計算する
    } else {
      display.value += value; //その他のボタンはそのまま表示、押したボタンをくっつけるイメージ
    }
  });
});
