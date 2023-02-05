import { useSelector } from "react-redux";
import { addBook, removeBook } from "../store/book.actions";

import { Box, Rating } from '@mui/material';


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
            <p className="author">{book.author}</p>
            <div className="book-description">
                <p >{book.description}</p>
            </div>
            <Box
                sx={{
                    '& > legend': { mt: 2 },
                }}
            >
                <Rating name="read-only" value={book.rating} readOnly />
            </Box>
            <p>{book.price}$</p>
        </div>
    )
}
