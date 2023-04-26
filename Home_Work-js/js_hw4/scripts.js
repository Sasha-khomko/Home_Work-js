// 1 задание:
 let mas = [1, 2, 3, 4, 5];
 for (let i = 0; i < mas.length; i++) {
     document.write(mas[i] + ', ');
 }

// 2 задание: 
let arr = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < -3 && arr[i] > -10) {
      console.log(arr[i]);
    }
}
// 3 задание:
let a = [];
for(let i = 23; i <= 57; i++) {
    a.push(i);
}
console.log(a);


let i = 23;
let b = [];
while(i <= 57){
    b.push(i);
    i++;
}
console.log(b)

let result = 0;
for (let i = 0; i < b.length; i++) {
  result += b[i];
}
console.log(result)

// 4 задание:
let f = ['10', '20', '30', '50', '235', '3000'];

for (let i = 0; i < f.length; i++) {
    if (String(f[i]).startsWith("1") || String(f[i]).startsWith("2") || String(f[i]).startsWith("5")) {
        console.log(f[i])
    }
  }

// 5 задание:
let h = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
 
        for (let i = 0; i < h.length; i++) {
            if (i > 4) {
                document.body.insertAdjacentHTML('beforeend', '<b>' + h[i] + '</b>' + ' ');
            } else {
                document.body.insertAdjacentHTML('beforeend', h[i] + ' ');
            }
        }

// 6 задание:
let j = [12, 223, 43, 56, 68];
for (let i = 0; i<j.length; i++);
console.log(j.pop())

// 7 задание:
let w = [];

while (1){
    let num = prompt('Введите число');
   if (isNaN(num)){
        alert('Вели не число');
        continue;
    }
    if (num === ''){
        break;
    }
    w.push(+num);
}

w.sort(function(a, b) {
    return a - b;
});

console.log(w);

// 8 задание:
function reverseString([]) {

    const arr = [12, false, 'Текст', 4, 2, -5, 0];
    let reverse= "";
  
    while(arr.length){
       reverse = reverse + arr.pop()
    }
  
    return reverse;
  }
  
  console.log(reverseString('reverse'));

// 9 задание: 
var n, arrayLength=15, y = [5, 9, 21, , , 9, 78, , , , 6];
        for(i=0; i<y.Length; i++) {
            y[i]=Math.round(Math.random()*10);
        }
        n=0;
        for(i=0; i<y.length; i++) {
            if(y[i]==0) n++;
        }
console.log('массив: ['+y.join(', ')+']' );
console.log('количество нулевых элементов равно '+ n);
// 10 задание:
let arrs = [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2];
 let firsIndex = arrs.indexOf(0),
     lastIndex = arrs.lastIndexOf(0),
     summ = 0;

 if (firsIndex === lastIndex) {
     console.log(summ);
 } else {
     for (let i = firsIndex; i < lastIndex; i++){
         summ +=arrs [i];
     }
     console.log(summ)
 }

 // 11 задание:
 let g = +prompt('Высота пирамидки');

for (let i = 1; i <= g; i++) {
     let str = '';
     let p = '';
    for (let j = 0; j < g - i; j++) {
        str += ' ';
     }
    for (let a = 0; a < i * 2 - 1; a++){
         p += '^';
     }

     document.write(`<pre>${str + p}</pre>`);
 }
