class User {
    constructor(obj){
        this.data = {
            id: obj.id,
            name: obj.name,
            email: obj.email,
            address: obj.address,
            phone: obj.phone
        };
    }

    edit(obj){
        this.data = {...this.data, ...obj};
    }

    get(){
        return this.data;
    }
}

class Contacts {
    constructor(){
        this.data = [];
        this.id = 0;
    }

    add(user){
        user = {...user, id: this.id++};
        this.data.push(new User(user));
    }

    edit(id, obj){
        let user = this.data.find(user => user.data.id === id);
        if (user) {
          user.edit(obj);
        }
    }

    remove(id){
        this.data = this.data.filter(user => user.data.id !== id);
    }

    get() {
        return this.data;
    }
}

class ContactsApp extends Contacts {
    constructor(selector){
        super()
        this.contact = document.querySelector(selector);
        this.noteContainer = document.createElement('div');
        this.init();
    }

    async init(){
            let title = document.createElement('h1');
            title.innerText = 'List of contacts';
            this.contact.append(title);
        this.inputContainer = document.createElement('form');
             let block = document.createElement('div');
             block.className = 'block';
             let name = document.createElement('input');
             name.setAttribute('type', 'text');
             name.placeholder = 'Enter your name';
             let email = document.createElement('input');
             email.setAttribute('type', 'text');
             email.placeholder = 'Enter your email';
             let address = document.createElement('input');
             address.setAttribute('type', 'text');
             address.placeholder = 'Enter your address';
             let phone = document.createElement('input');
             phone.setAttribute('type', 'text');
             phone.placeholder = 'Enter your phone number';
             let send = document.createElement('button');
             send.className = 'send';
             send.innerText = 'Adding contact';
             send.setAttribute('type', 'submit');
             block.append(name, email, address, phone, send);
             this.inputContainer.append(block);

             this.inputContainer.addEventListener('submit', e => {
                e.preventDefault();

                let data = {
                    name: name.value,
                    email: email.value,
                    address: address.value,
                    phone: phone.value,
                }

                this.add(data);
                name.value = '';
                email.value = '';
                address.value = '';
                phone.value = '';

                this.storage = this.data;
                this.cookie = 14400;
                this.render();
             });

             if(!this.cookie){
                localStorage.removeItem('data');
             }

             if (this.storage){
                this.storage.forEach(user => this.add(user.data));
                this.render();
             }

             if(!this.storage){
                let data = await this.getApiData();
                data.forEach(user => this.add(user));
                this.storage = this.data;
                this.render();
             }

             this.contact.append(this.inputContainer, this.noteContainer);
    }

    render(){
        this.noteContainer.innerHTML = '';
        this.data.forEach(user => {
            let flag = false;
            let item = document.createElement('div');
            item.className = 'item';
            let name = document.createElement('p');
            name.innerHTML = user.data.name;
            let email = document.createElement('p');
            email.innerHTML = user.data.email;
            let address = document.createElement('p');
            address.innerHTML = user.data.address;
            let phone = document.createElement('p');
            phone.innerHTML = user.data.phone;
            let buttons = document.createElement('div');
            buttons.className = 'buttons';
            let edit = document.createElement('button');
            edit.innerText = 'Edit';
            edit.className = 'edit';
            let remove = document.createElement('button');
            remove.innerText = 'Remove';
            remove.className = 'remove';
            buttons.append(edit, remove);
            item.append(name, email, address, phone, buttons);

            // this.data.forEach(user => {
            //     let userElement = document.createElement('div');
            //     userElement.innerText = `Address: ${user.data.address.street}, ${user.data.address.suite}, ${user.data.address.city}, ${user.data.address.zipcode}`;
            //     this.noteContainer.append(userElement);
            // });

            remove.addEventListener('click', () => {
                this.remove(user.data.id);
                this.storage = this.data;
                this.render();
            })

            edit.addEventListener('click', () => {
                if(flag){
                    name.contentEditable = false;
                    email.contentEditable = false;
                    address.contentEditable = false;
                    phone.contentEditable = false;
                    let data = {
                        name: name.innerText,
                        email: email.innerText,
                        address: address.innerText,
                        phone: phone.innerText
                    };
                    this.edit(user.data.id, data);
                    edit.innerText = 'Edit';
                    flag = !flag
                    this.storage = this.data;
                }else{
                    name.contentEditable = true;
                    email.contentEditable = true;
                    address.contentEditable = true;
                    phone.contentEditable = true;
                    edit.innerText = 'Save';
                    flag = !flag;
                }
            })

            this.noteContainer.append(item);
        });
    }

    
    get storage() {
        let data = localStorage.getItem('data');
        return JSON.parse(data);
    }

    set storage(data) {
        let json = JSON.stringify(data)
        localStorage.setItem('data', json);
    }

    get cookie(){
        let name = 'data';
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
          ));
          return matches ? true : false;
        
    }

    set cookie(v){
        const options = {
             path: '/',
             secure: true,
             'max-age': v
           };
         
           let name = 'data';
           let value = '';
 
           if (options.expires instanceof Date) {
             options.expires = options.expires.toUTCString();
           }
         
           let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
         
           for (let optionKey in options) {
             updatedCookie += "; " + optionKey;
             let optionValue = options[optionKey];
             if (optionValue !== true) {
               updatedCookie += "=" + optionValue;
             }
           }
         
           document.cookie = updatedCookie;
     }

     async getApiData() {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        let data = await response.json();
        return data;
    }
  

}

new ContactsApp('.contact');