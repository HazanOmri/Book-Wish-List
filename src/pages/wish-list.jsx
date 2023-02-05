import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { LikedBookPreview } from '../cmps/liked-book-preview'
import { bookService } from '../services/book.service'
import { loadBooks } from '../store/book.actions'

export function WishList() {
    const wishList = useSelector((storeState => storeState.bookModule.wishList))
    const [filter, setFilter] = useState(bookService.getEmptyFilter())

    useEffect(() => {
        loadBooks(filter)
    }, [filter])

    function onSetFilter(val) {
        setFilter({[val] : val})
    }

    return <div className="wish-list">
        <div>
            <button onClick={() => onSetFilter('title')}>Title</button>
        </div>
        {wishList?.map(book => <LikedBookPreview book={book} />)}
    </div>
}