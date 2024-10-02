let myLibrary = [];

function book(title, author, _read, msg) {
    this.title = title;
    this.author = author;
    this._read = _read;
    this.msg = msg;
};


const form = document.querySelector("form");

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    let title= document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let read = document.querySelector("#read").value;
    let msg = document.querySelector('#comment').value;
        
    const book_object = new book(title, author, read, msg);
    myLibrary.push(book_object);
    document.querySelector('#title').value='';
    document.querySelector('#author').value='';
    document.querySelector("#read").value = 'default';
    document.querySelector('#comment').value= '';
    
    logLibrary();
});

const book_container = document.querySelector('.book-container');
const ul = document.createElement('ul');

function logLibrary() {
    ul.innerHTML = '';
    myLibrary.forEach((item, index) =>{
        const li = document.createElement('li');
        const span = document.createElement('span');
        const button = document.createElement('button')
        
        button.textContent ='Delete';
        span.textContent = item.title;

        // Add the eventListner for the delete button
        button.addEventListener('click', () =>{
            myLibrary.splice(index, 1);
            logLibrary()
        });

        span.appendChild(button);
        li.appendChild(span)
        ul.appendChild(li);
    });
    book_container.appendChild(ul);
};


