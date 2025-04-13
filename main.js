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
      try {
        const formula = display.value.replace(/÷/g, '/'); //÷を/に置き換える
        display.value = eval(formula);
      } catch (error) {
        display.value = 'Error'; //計算できなかったらエラー表示
      }
    } else {
      display.value += value; //それ以外は表示に追加する
    }
  });
});
