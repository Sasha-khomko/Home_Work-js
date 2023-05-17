function ToDoList() {
    // создание элементов
    const container = document.createElement('div');
    const title = document.createElement('h2');
    const input = document.createElement('input');
    const list = document.createElement('ul');
    const clearButton = document.createElement('button');
    
    container.style.width = '500px';
    container.style.border = '1px solid #000';
    container.style.margin = '0 auto';
    

    title.style.textAlign = 'center';
    title.style.backgroundColor = 'green';
    title.style.fontSize = '40px';
    title.style.marginTop = '0';
    title.style.marginBottom = 'auto';

    input.style.width = '450px';
    input.style.height = '40px';
    input.style.textAlign = 'center';
    input.style.fontSize = '20px';
    input.style.margin = '20px';

    clearButton.style.width = '500px';
    clearButton.style.height = '40px';
    clearButton.style.backgroundColor = 'red';
    clearButton.style.border = 'none';
    clearButton.style.fontSize = '20px';

    // установка атрибутов и текста элементов
    title.innerText = 'Список задач';
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'Введите новую задачу');
    clearButton.innerText = 'Очистить список';
  
    // добавление элементов в контейнер
    container.appendChild(title);
    container.appendChild(input);
    container.appendChild(list);
    container.appendChild(clearButton);
  
    // добавление обработчика событий для добавления новых задач
    input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        const taskText = event.target.value;
        if (taskText) {
          const taskItem = document.createElement('p');
          const checkbox = document.createElement('input');
          checkbox.setAttribute('type', 'checkbox');
          checkbox.addEventListener('change', () => {
            taskItem.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
          });
          taskItem.appendChild(checkbox);
          taskItem.appendChild(document.createTextNode(taskText));
          list.appendChild(taskItem);
          event.target.value = '';
        }
      }
    });
  
    // добавление обработчика событий для очистки списка
    clearButton.addEventListener('click', () => {
      list.innerHTML = '';
    });
  
    // добавление контейнера в body
    document.body.appendChild(container);
  }