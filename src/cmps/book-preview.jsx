export function BookPreview({ book }) {

    function setWishList(bookId) {
        console.log('bookId ', bookId)
    }
    return (
        <main className="book-preview">
            <input type='checkbox' onChange={() => setWishList(book._id)} />
            <h1>{book.title}</h1>
            <hr></hr>
            <h2>{book.author}</h2>
            <p>{book.description}</p>
            <p>{book.rating}</p>
            <p>{book.price}$</p>
        </main>
    )
}