let op; 

   
   function func() {
    
     let result;
     
     let num1 = Number(document.getElementById("num1").value);
     let num2 = Number(document.getElementById("num2").value);
     
     switch (op) {
       case '+':
         result = num1 + num2;
         break;
       case '-':
         result = num1 - num2;
         break;
       case '*':
         result = num1 * num2;
         break;
       case '/':
         result = num1 / num2;
         break;
     }

     document.getElementById("result").innerHTML = result;
   }

   console.log('Лампочка:');

   let Lightbulb = function (name) {
 
    this.get = function () {
        this.name = name;
        this.power = +prompt('Введите мощность лампочки, Вт');
        this.costEnergy = +prompt('Введите стоимость электроэнергии за 1Квт' + '/' + 'ч');
        if (confirm('Включить лампочку?')) {
            this.workTime = +prompt('Сколько времени работает лампочка? , ч');
        } else {
            this.workTime = 0;
        };
 
        this.operation();
    };
 
    this.operation = function () {
        this.result = (this.power / 1000) * this.costEnergy * this.workTime;
 
        this.show();
    };
 
    this.show = function () {
 
        if (this.workTime == 0 || this.workTime == undefined) {
            console.log('Лампочка "' + this.name + '" не включена');
        } else {
            console.log('Лампочка "' + this.name + '" проработала - ' + this.workTime + 'ч, и стоимость потраченой электроэнергии составляет = ' + this.result + 'р.');
        }
    };
};
 
let lightBulb = new Lightbulb('Кухня');
lightBulb.get();
 
let lightBulb2 = new Lightbulb('Коридор');
lightBulb2.get();
 
let lightBulb3 = new Lightbulb('Ванная');
lightBulb3.get();
 
let totalCost = lightBulb.result + lightBulb2.result + lightBulb3.result;
 
console.log('Всего стоимость потраченной электроэнергии составляет - ' + totalCost + 'р');



let motorVehicle = function () {
    this.get = function () {
        this.name = stemp;
        this.volume = +prompt('Введите объем двигателя');
        if (confirm('Включить двигатель?')) {
            this.workTime = prompt('Включить двигатель');
        } else {
            this.workTime = '';
        };
    }

}