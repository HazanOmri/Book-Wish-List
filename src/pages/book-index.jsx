import { useEffect } from "react"
import { useSelector } from "react-redux"
import { BookPreview } from "../cmps/book-preview"
import { loadBooks } from "../store/book.actions"

export function BookIndex() {
    const books = useSelector((storeState => storeState.bookModule.books))

    useEffect(() => {
        loadBooks()
    }, [])

    console.log('books', books)
    if (books) return (
        <main>
            <h1>books</h1>
            {books.map((book, idx) => <BookPreview book={book} key={idx} />)}
        </main>
    )
    else return <h1>Loading...</h1>
}