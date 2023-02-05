import { Box, Rating } from '@mui/material';


export function BookPreview({ book }) {

    function setWishList(bookId) {
        console.log('bookId ', bookId)
    }
    return (
        <div className="book-preview">
            <input type='checkbox' onChange={() => setWishList(book._id)} />
            <p className="title">{book.title}</p>
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
