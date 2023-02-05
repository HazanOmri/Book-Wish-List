import { bookService } from "../services/book.service";
import { SET_BOOKS, ADD_BOOK, REMOVE_BOOK } from "./book.reducer";
import { store } from "./store";

export async function loadBooks() {
    try {
        const books = await bookService.query()
        store.dispatch({ type: SET_BOOKS, books })
        return books
    } catch (err) {
        throw err
    }
}

export async function addBook(bookId) {
    try {
        const book = await bookService.getById(bookId)
        store.dispatch({ type: ADD_BOOK, book })
    } catch (err) {
        console.error('cannot add book', err)
    }
}

export async function removeBook(bookId) {
    try {
        store.dispatch({ type: REMOVE_BOOK, bookId })
    } catch (err) {
        console.error('cannot remove book', err)
    }
}