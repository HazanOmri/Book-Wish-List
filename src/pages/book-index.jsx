import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { BookPreview } from "../cmps/book-preview"
import { loadBooks } from "../store/book.actions"

export function BookIndex() {
    const books = useSelector((storeState => storeState.bookModule.books))
    const bookIdx = useRef(0)
    const [book, setBook] = useState(null)

    useEffect(() => {
        onLoadBooks()
    }, [])

    async function onLoadBooks() {
        const books = await loadBooks()
        setBook(books[bookIdx.current])
    }

    function onNextPrevBook(val) {
        bookIdx.current = bookIdx.current + val
        setBook(books[bookIdx.current])
    }

    console.log('books', books)
    console.log('book', book)
    if (books && book) return (
        <main>
            <h1>books</h1>
            <BookPreview book={book} />
            <button onClick={() => onNextPrevBook(-1)}><svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon"><path d="M11.03.47a.75.75 0 010 1.06L4.56 8l6.47 6.47a.75.75 0 11-1.06 1.06L2.44 8 9.97.47a.75.75 0 011.06 0z"></path></svg></button>
            <button onClick={() => onNextPrevBook(1)}><svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon"><path d="M4.97.47a.75.75 0 000 1.06L11.44 8l-6.47 6.47a.75.75 0 101.06 1.06L13.56 8 6.03.47a.75.75 0 00-1.06 0z"></path></svg></button>
        </main>
    )
    else return <h1>Loading...</h1>
}