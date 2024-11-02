import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetails = () => {
    const { bookId } = useParams()
    const id = parseInt(bookId);
    const data = useLoaderData();
    const book = data.find(book => book.bookId === id)
    const {bookName, image, author,category, rating, tags,review,totalPages,publisher,yearOfPublishing } = book
    return (
        <div className=" text-white bg-base-200 ">
            <div className="flex gap-5 p-5 flex-col text- lg:flex-row">
                <img
                    src={image}
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl my-6 font-bold">{bookName}</h1>
                    <p><small className='text-xl font-semibold'>By: {author}</small></p>
                    <div className='divider'></div>
                    <div className="badge badge-outline text-xl p-4">{category}</div>
                    <div className='divider'></div>
                    <p className="py-6">
                     <span className='text-xl font-bold'>Review:</span> {review}
                    </p>
                    <p className='flex gap-10 items-center'><span className='text-xl font-bold'>Tags:</span>{
                   tags.map((tag ,idx)=><p key={idx} className="badge badge-outline">{tag}</p>)
            }</p>
             <div className='divider'></div>
             <p>Number of Pages: <span className='font-bold mx-4'>{totalPages}</span></p>
             <p>Publisher:<span className='font-bold mx-4'> {publisher}</span></p>
             <p>Year of Publishing: <span className='font-bold mx-4'>{yearOfPublishing}</span></p>
             <p>Rating:<span className='font-bold mx-4'>{rating}</span> </p>
            <button className="btn mr-5 mt-5  btn-success text-white">Read</button>
            <button className="btn btn-info text-white">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;