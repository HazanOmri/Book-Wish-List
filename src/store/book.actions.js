import { bookService } from "../services/book.service";
import { SET_BOOKS } from "./book.reducer";
import { store } from "./store";

export async function loadBooks(){
    try{
        const books = await bookService.query()
        store.dispatch({ type: SET_BOOKS, books })
        return books
    }catch(err){
        throw err
    }
}