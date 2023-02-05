import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { LikedBookPreview } from '../cmps/liked-book-preview'
import { loadBooks } from '../store/book.actions'

export function WishList() {
    const books = useSelector((storeState => storeState.bookModule.books))

    useEffect(() => {
        loadBooks()
    }, [])

    return <div className="wish-list">
        {books?.map(book => <LikedBookPreview book={book} />)}
    </div>
}