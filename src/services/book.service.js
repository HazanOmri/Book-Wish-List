
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

const STORAGE_KEY = 'book'
let books
_createBooks()

export const bookService = {
    query,
    getById,
    save,
    remove
}
window.cs = bookService


async function query(filterBy) {
    return books
}

function getById(bookId) {
    return storageService.get(STORAGE_KEY, bookId)
}

async function remove(bookId) {
    await storageService.remove(STORAGE_KEY, bookId)
}

async function save(book) {
    var savedBook
    if (book._id) {
        savedBook = await storageService.put(STORAGE_KEY, book)
    } else {
        savedBook = await storageService.post(STORAGE_KEY, book)
    }
    return savedBook
}

function _createBooks() {
    books = utilService.loadFromStorage(STORAGE_KEY)
    if (!books) {
        books = []
        utilService.saveToStorage(STORAGE_KEY, books)
    }
}
