export function LikedBookPreview({ book }) {
    return <div className="liked-book">
        <div className="label-color"></div>
        <p>{book.title}</p>
        <button>X</button>
    </div>
}