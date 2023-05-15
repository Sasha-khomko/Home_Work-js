console.log('1 задание:');

let str = 'aaa@bbb@ccc';

console.log(str.replace(/@/g, '!'));

console.log('2 задание:');

let date = '2025-12-31';

let newDate = date.split('-').reverse().join('/');

console.log(newDate);

console.log('3 задание:');

let stri = 'Я учу javascript!';

console.log(stri.substring(0, 1));
console.log(stri.substr(0, 1));
console.log(stri.slice(0, 1));

console.log('4 задание:');

let arr = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;

for(let i = 0; i < arr.length; i++) {
    sum += Math.pow(arr[i], 3);
}

let result = Math.sqrt(sum);
console.log(result);

console.log('5 задание:');

let a = 3;
let b = 5;
let c = Math.abs(a - b);
console.log(c);

a = 6;
b = 1;
c = Math.abs(a - b);
console.log(c);

console.log('6 задание:');

function addZero(num) {
    return num < 10 ? '0' + num : num;
}

let dateNow = new Date();
let hours = addZero(dateNow.getHours());
let minutes = addZero(dateNow.getMinutes());
let seconds = addZero(dateNow.getSeconds());
let day = addZero(dateNow.getDate());
let month = addZero(dateNow.getMonth() + 1);
let year = dateNow.getFullYear();

console.log(`${hours}:${minutes}:${seconds}${' '}${day}.${month}.${year}`);

console.log('7 задание:');

let string = 'aa aba abba abbba abca abea';
let regexp = /ab+a/g;
let res = string.match(regexp);
console.log(res);

console.log('8 задание:');

function isValidPhoneNumber(phoneNumber) {
    const pattern = /^\+\d{1,3}\s\d{1,5}\s\d{3,}$/;
    return pattern.test(phoneNumber);
}

let resu = isValidPhoneNumber(prompt('Введите номер телефона: +375 XX XXXXXXX'));
console.log(resu);

console.log('9 задание:');

function CheckingTheEmailPost(email) {
    const pattern = /^[a-zA-Z0-9][a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,11}/;
    return pattern.test(email)
}

let resul = CheckingTheEmailPost(prompt('e-mail:'))

console.log(resul);

console.log('10 задание:');

function parseURL(url) {
    let a = document.createElement('a');
    a.href = url;
    let domain = a.protocol + '//' + a.hostname;
    let path = a.pathname;
    let params = a.search.substring(1);
    let hash = a.hash;
    return [domain, path, params, hash];
}
parseURL;

