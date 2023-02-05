export const SET_BOOK = 'SET_BOOK'

const initialState = {
    book: null
}

export function bookReducer(state = initialState, action) {
    switch (action.type) {
        case SET_BOOK:
            return { ...state, book: action.book }
        default:
            return state
    }
}