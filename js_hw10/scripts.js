console.log('Home Work 7 js');

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



console.log('Home Work 10 js');


let Clon = function () {
    Calc.apply(this);

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
        this.oper = prompt('Введите операцию: +, -, *, /, %;');

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
            case '%':
                this.result = (this.a + this.b) / 100;    
            break;
            default: this.result = 0;
        }
        this.show();
    }

    this.show = function() {
        alert(this.a + ' ' + this.oper + ' ' + this.b + '=' + this.result);
    }
}
   



let clon = new Clon();
clon.constructor();
console.log(calc);
console.log(clon);

function DOM() {
    
    this.create = function(tagName) {
      return document.createElement(tagName);
    }
    
    
    this.attr = function(element, name, value) {
      if(value !== undefined) {
        element.setAttribute(name, value);
      } else {
        return element.getAttribute(name);
      }
    }
    
    
    this.html = function(element, value) {
      if(value !== undefined) {
        element.innerHTML = value;
      } else {
        return element.innerHTML;
      }
    }
    
    
    this.search = function(element, selector) {
      return element.querySelectorAll(selector);
    }
    
    
    this.addClass = function(element, className) {
      element.classList.add(className);
    }
    
    
    this.removeClass = function(element, className) {
      element.classList.remove(className);
    }
    
    
    this.toggleClass = function(element, className) {
      element.classList.toggle(className);
    }
    
    
    this.hasClass = function(element, className) {
      return element.classList.contains(className);
    }
    
    
    this.append = function(element, newElement, beforeElement) {
      if(beforeElement !== undefined) {
        element.insertBefore(newElement, beforeElement);
      } else {
        element.appendChild(newElement);
      }
    }
    
    
    this.on = function(element, eventName, funcName) {
      element.addEventListener(eventName, funcName);
    }
  }
  
  
  let myDOM = new DOM();