//Object
const myLibrary = []

//constructor
function Book(bookName, author, pages, read) {
  this.bookName = bookName
  this.author = author
  this.pages = pages
  this.read = read
}

Book.prototype.isRead = function () {
  return this.read ? 'read' : 'not read'
}

Book.prototype.info = function () {
  return `The book name is ${this.bookName} by ${this.author}, it has ${
    this.pages
  } pages and you have ${this.isRead()} it. `
}

Book.prototype.toggleRead = function () {
  this.read = !this.read
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 235, false)

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btn')
  btn.addEventListener('click', () => {
    event.preventDefault()
    addBook()
    displayBooks()
  })
})

//ADD BOOK TO MY LIBRARY
function addBook() {
  const bookName = document.getElementById('bookName').value
  const author = document.getElementById('author').value
  const pages = document.getElementById('pageNum').value
  const isReadCheckbox = document.getElementById('isRead')
  const isRead = isReadCheckbox.checked
  const newBook = new Book(bookName, author, pages, isRead)

  myLibrary.push(newBook)
}

//DISPLAY
function displayBooks() {
  let bookContainer = document.getElementById('bookContainer')

  bookContainer.innerHTML = ''

  myLibrary.forEach((newBook, index) => {
    let bookContainer = document.getElementById('bookContainer')
    let book = document.createElement('div')
    book.classList.add(`book`)
    book.innerHTML = `<p><b>Title: ${newBook.bookName}</b></p> 
    <p><b> Author: ${newBook.author}</b></p> 
   <p> Pages: ${newBook.pages}</p> 
    <p> Status: ${newBook.isRead()}</p> `
    book.setAttribute('data-index', index)

    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete'
    deleteButton.classList.add('deleteBtn')
    deleteButton.addEventListener('click', () => {
      deleteBook(parseInt(index))
    })

    const readBtn = document.createElement('button')
    readBtn.textContent = 'Read Check'
    readBtn.classList.add('readBtn')
    readBtn.addEventListener('click', () => {
      toggleRead(parseInt(index))
    })
    book.appendChild(readBtn)
    book.appendChild(deleteButton)
    bookContainer.appendChild(book)
  })
}

//DELETE
function deleteBook(index) {
  myLibrary.splice(index, 1)
  displayBooks()
}

//READ

function toggleRead(index) {
  myLibrary[index].toggleRead()
  displayBooks()
}
