import { bookService } from "../services/book.service"

export const SET_BOOKS = 'SET_BOOKS'
export const ADD_BOOK = 'ADD_BOOK'
export const REMOVE_BOOK = 'REMOVE_BOOK'

const initialState = {
    books: null,
    wishList: null
}

export function bookReducer(state = initialState, action) {
    let books
    switch (action.type) {
        case SET_BOOKS:
            return { ...state, books: action.books }
        case ADD_BOOK:
            console.log('action.bookId', action.bookId)
            const book = state.books.find(book => book._id === action.bookId)
            console.log('ADDDDDD')
            return { ...state, wishList: [...state.wishList, book] }
        case REMOVE_BOOK:
            const idx = state.wishList.findIndex(book => book._id === action.bookId)
            const wishList = state.wishList
            wishList.slice(idx)
            return { ...state, wishList }
        default:
            return state
    }
}