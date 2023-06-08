const tabs = document.querySelectorAll('.tab');
const tabContent = document.querySelectorAll('.tab__content');


tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabs.forEach(tab => tab.classList.remove('active'));
        tabContent.forEach(content => content.classList.remove('active'));
        tabContent[index].classList.add('active');
    })
})

const photos1 = document.querySelector('.photo_1');
const photos2 = document.querySelector('.photo_2');
const photos3 = document.querySelector('.photo_3');
const photos4 = document.querySelector('.photo_4');

const open1 = document.querySelector('.open_1 img');
const open2 = document.querySelector('.open_2 img');
const open3 = document.querySelector('.open_3 img');
const open4 = document.querySelector('.open_4 img');

const button = document.querySelector('.button');


photos1.addEventListener('click', () => {
    open1.style.display = 'block';
    open2.style.display = 'none';
    open3.style.display = 'none';
    open4.style.display = 'none';
});

photos2.addEventListener('click', () => {
    open1.style.display = 'none';
    open2.style.display = 'block';
    open3.style.display = 'none';
    open4.style.display = 'none';
});

photos3.addEventListener('click', () => {
    open1.style.display = 'none';
    open2.style.display = 'none';
    open3.style.display = 'block';
    open4.style.display = 'none';
});

photos4.addEventListener('click', () => {
    open1.style.display = 'none';
    open2.style.display = 'none';
    open3.style.display = 'none';
    open4.style.display = 'block';
});

button.addEventListener('click', () => {
    open1.style.display = 'none';
    open2.style.display = 'none';
    open3.style.display = 'none';
    open4.style.display = 'none';
});

const buttons = document.querySelectorAll('.buttons p');
const input = document.querySelector('.input');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log('Button clicked:');
         if (button.textContent === 'AC') {
             input.value = '';
         } else if (button.textContent === '=') {
             input.value = eval(input.value);
         } else if (button.textContent === '+/-') {
             input.value = -input.value;
         } else if (button.textContent === '%') {
             input.value = input.value / 100;
         } else if (button.textContent === '÷') {
            input.value += '/';
         } else if(button.textContent === '×') {
            input.value += '*';
         } else {
             input.value += button.textContent;
         }
    });
});

const text1 = document.querySelector('.text1');
const prompting = document.querySelector('.prompting');

text1.addEventListener ('mouseover', () => {
    prompting.style.display = 'block';
});

text1.addEventListener('mouseout', () => {
    prompting.style.display = 'none';
});

