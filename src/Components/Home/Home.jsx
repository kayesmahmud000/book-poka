
import Bnner from "../Banner/Bnner";
import Book from "../Book/Book"
import { useLoaderData } from "react-router-dom";

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
const Home = () => {
    const booksData=useLoaderData();
    console.log(booksData)
    return (
        <div>
           <Bnner></Bnner>
           <h2 className="text-4xl my-10 font-bold text-center">Books</h2>
           <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {
                booksData.map(book=><Book key={book.bookId} book={book}></Book>)
            }
           </div>
           
        </div>
    );
};

export default Home;