import { addBook, removeBook } from "../store/book.actions";

export function BookPreview({ book }) {

    function onToggleCheck(isChecked, bookId) {
        if (isChecked) addBook(bookId)
        else removeBook(bookId)
    }
    return (
        <main className="book-preview">
            {/* <input type='checkbox' onChange={() => addBook(book._id)} /> */}
            <input type='checkbox' onChange={(ev) => onToggleCheck(ev.target.checked, book._id)} />
            <h1>{book.title}</h1>
            <hr></hr>
            <h2>{book.author}</h2>
            <p>{book.description}</p>
            <p>{book.rating}</p>
            <p>{book.price}$</p>
        </main>
    )
}