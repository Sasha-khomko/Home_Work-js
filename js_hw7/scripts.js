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

//    console.log('Лампочка:');

//    let Lightbulb = function (name) {
 
//     this.get = function () {
//         this.name = name;
//         this.power = +prompt('Введите мощность лампочки, Вт');
//         this.costEnergy = +prompt('Введите стоимость электроэнергии за 1Квт' + '/' + 'ч');
//         if (confirm('Включить лампочку?')) {
//             this.workTime = +prompt('Сколько времени работает лампочка? , ч');
//         } else {
//             this.workTime = 0;
//         };
 
//         this.operation();
//     };
 
//     this.operation = function () {
//         this.result = (this.power / 1000) * this.costEnergy * this.workTime;
 
//         this.show();
//     };
 
//     this.show = function () {
 
//         if (this.workTime == 0 || this.workTime == undefined) {
//             console.log('Лампочка "' + this.name + '" не включена');
//         } else {
//             console.log('Лампочка "' + this.name + '" проработала - ' + this.workTime + 'ч, и стоимость потраченой электроэнергии составляет = ' + this.result + 'р.');
//         }
//     };
// };
 
// let lightBulb = new Lightbulb('Кухня');
// lightBulb.get();
 
// let lightBulb2 = new Lightbulb('Коридор');
// lightBulb2.get();
 
// let lightBulb3 = new Lightbulb('Ванная');
// lightBulb3.get();
 
// let totalCost = lightBulb.result + lightBulb2.result + lightBulb3.result;
 
// console.log('Всего стоимость потраченной электроэнергии составляет - ' + totalCost + 'р');



let Calc = function() {
    this.constructor = function() {
        this.on = true;
        if(confirm('Включить калькулятор?')) {
            this.on = true;
        } else {
            this.get = 0;
        }
        this.get();
    }
    this.get = function() {
        this.a = +prompt('Введите число: a');
        this.b = +prompt('Введите число: b');
        this.oper = prompt('Введите операцию: +, -, *, /;');

        this.operation();
    }
    this.operation = function() {
        switch (this.oper) {
            case '+':
                this.result = this.a + this.b;    
            break;
            case '-':
                this.result = this.a - this.b;    
            break;
            case '*':
                this.result = this.a * this.b;    
            break;
            case '/':
                this.result = this.a / this.b;    
            break;
            default: this.result = 0;
        }
        this.show();
    }
    this.show = function() {
        alert(this.a + ' ' + this.oper + ' ' + this.b + '=' + this.result);
    }
}

let calc = new Calc();
calc.constructor();