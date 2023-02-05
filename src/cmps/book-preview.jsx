import { useSelector } from "react-redux";
import { addBook, removeBook } from "../store/book.actions";

export function BookPreview({ book }) {
    const wishList = useSelector((storeState => storeState.bookModule.wishList))

    function onToggleCheck(isChecked, bookId) {
        if (isChecked) addBook(bookId)
        else removeBook(bookId)
    }

    function isOnWishList(bookId) {
        const idx = wishList.findIndex(book => book._id === bookId)
        if (idx === -1) return false
        return true
    }

    return (
        <main className="book-preview">
            <input type='checkbox'
                checked={isOnWishList(book._id)}
                onChange={(ev) => onToggleCheck(ev.target.checked, book._id)}
            />
            <h1>{book.title}</h1>
            <hr></hr>
            <h2>{book.author}</h2>
            <p>{book.description}</p>
            <p>{book.rating}</p>
            <p>{book.price}$</p>
        </main>
    )
}