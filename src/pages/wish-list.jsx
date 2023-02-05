import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { LikedBookPreview } from '../cmps/liked-book-preview'
import { loadBooks } from '../store/book.actions'

export function WishList() {
    const wishList = useSelector((storeState => storeState.bookModule.wishList))

    useEffect(() => {
        loadBooks()
    }, [])

    return <div className="wish-list">
        {wishList?.map(book => <LikedBookPreview book={book} />)}
    </div>
}