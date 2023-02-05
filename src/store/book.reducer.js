import { bookService } from "../services/book.service"

export const SET_BOOKS = 'SET_BOOKS'
export const ADD_BOOK = 'ADD_BOOK'
export const REMOVE_BOOK = 'REMOVE_BOOK'

const initialState = {
    books: null,
    wishList: []
}

export function bookReducer(state = initialState, action) {
    let books
    switch (action.type) {
        case SET_BOOKS:
            return { ...state, books: action.books }
        case ADD_BOOK:
            console.log(state.wishList);
            return { ...state, wishList: [...state.wishList, action.book] }
        case REMOVE_BOOK:
            const wishList = state.wishList.filter(book => book._id !== action.bookId)
            return { ...state, wishList }
        default:
            return state
    }
}