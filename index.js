//Object
const myLibrary = []

//constructor
function Book(bookName, author, pages, read) {
  this.bookName = bookName
  this.author = author
  this.pages = pages
  this.read = read

  this.isRead = function () {
    return this.read ? 'read' : 'not read'
  }
  this.info = function () {
    return `The book name is ${this.bookName} by ${this.author}, it has ${
      this.pages
    } pages and you have ${this.isRead()} it. `
  }
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
  const isRead = document.querySelectorAll('.readCheckbox')
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
    book.textContent = `Title: ${newBook.bookName}, Author: ${newBook.author}, Pages: ${newBook.pages}, Read: ${
      newBook.isRead() ? 'Yes' : 'No'
    }`
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
      readSwitch(parseInt(index))
    }) // NEED TO ADD HERE WHAT TO SEND TO 'read' FUNCTION FOR SWITCHING
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
function readSwitch(index) {
  displayBooks()
}
