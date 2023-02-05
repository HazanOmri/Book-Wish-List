export const SET_BOOKS = 'SET_BOOKS'

const initialState = {
    books: null
}

export function bookReducer(state = initialState, action) {
    switch (action.type) {
        case SET_BOOKS:
            return { ...state, books: action.books }
        default:
            return state
    }
}