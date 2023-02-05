import { bookService } from "../services/book.service";
import { SET_BOOKS } from "./book.reducer";
import { store } from "./store";

export async function loadBooks(filter){
    try{
        const books = await bookService.query(filter)
        console.log(books)
        store.dispatch({ type: SET_BOOKS, books })
        return books
    }catch(err){
        throw err
    }
}