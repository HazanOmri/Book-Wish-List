import { BookIndex } from "./book-index";
import { WishList } from "./wish-list";

export function Home(){
    return (
        <main className="home">
            <BookIndex />
            <WishList />
        </main>
    )
}