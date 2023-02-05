import { removeBook } from "../store/book.actions";

export function LikedBookPreview({ book }) {
    return <div className="liked-book">
        <div className="label-color"></div>
        <p>{book.title}</p>
        <button onClick={() => removeBook(book._id)}>X</button>
    </div>
}