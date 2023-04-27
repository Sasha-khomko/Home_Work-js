console.log("1 задание:");

function equalization(a, b, s) {
  console.log((a - b) / s);
}
equalization(60, 10, 5);

console.log("2 задание:");
function elevation(num) {
  console.log(num ** 3, num ** 2);
}
elevation(5);

console.log("3 задание:");
function min(a, b) {
  return a < b ? a : b;
}
function max(a, b) {
  return a > b ? a : b;
}
console.log(min(8, 6), max(11, 9));

console.log("4 задание:");
function createArrey() {
   let x = +prompt();
   let y = +prompt();
   let arr = []; 
   for(let i = x; i <= y; i++) {
     arr.push(i)
   }

   console.log(arr);
}
createArrey();

console.log("5 задание:");
function isEven(number) {
  if (number % 2 === 0) {
		return true;
	} else {
		return false;
	}
}
console.log(isEven(4));
console.log(isEven(7));

console.log("6 задание:");
let arr = [1, 4, 5, 6, 2, 7];
var newArr = [];
for (var i = 0; i <= arr.length; i++) {
	if (isEven(arr[i])) {
		newArr.push(arr[i]);
	}
}

console.log(newArr)

console.log("7 задание:");
let symbol = prompt('символ');
function hefren(n){
  for(let i = 1; i <= n; i++){
    let m = '';
    for(let j = 0; j < i; j++){
      m+= symbol == undefined || symbol.length-1 || symbol == ' ' ? i : symbol;
    };
    document.write(`<pre>${m+'\n'}</pre>`);
  }
};
hefren(prompt('число'));

console.log("8 задание:");
function writeTriangle(rows, isReverse) {
  const indexes = new Array(rows).fill(0).map((_, i) => i);
  if (isReverse) indexes.reverse();
  for (let i of indexes) {
      const spaces = ' '.repeat(rows - 1 - i);
      console.log(spaces + '*'.repeat(1 + i*2) + spaces);
  }
}

const n = +prompt('Введите число строк:');
writeTriangle(n);
if (confirm('Вывести перевёрнутый?')) writeTriangle(n, true);

console.log("9 задание:");
function getFibArray(n) {
  const arr = [...Array(n).keys()];
  function f(el, i) {
    return i <= 1 ? 1 : f(arr[i - 2], i - 2) + f(arr[i - 1], i - 1);
  }
  return arr.map(f);
}
console.log(getFibArray(16));

console.log("10 задание:");
function isSumLess(num) {
  var sum = 0;
  var arr = String(num).split('');
  for (var i = 0; i < arr.length; i++) {
      sum += parseInt(arr[i]);
  }

  if (sum > 9) {
      return isSumLess(sum);
  } else {
      return sum;
  }
}


var num = 1591;
let final_num = isSumLess(num);
document.write('Конечное число = ' + final_num);
