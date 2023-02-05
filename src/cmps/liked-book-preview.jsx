import { useState } from 'react'
import { bookService } from '../services/book.service'


export function LikedBookPreview() {
    const [books, setBooks] = useState(bookService.query())
    return <p>{JSON.stringify(books)}</p>
}