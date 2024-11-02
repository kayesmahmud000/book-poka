import React from 'react';
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router-dom';
const Book = ({ book }) => {
    const {bookId, bookName, image, author,category, rating, tags } = book;
    return (
       <Link to={`/book/${bookId}`}> 
       <div className="card h-[600px] bg-base-100 text-white border p-7 border-gray-400 shadow-xl">
       <figure className='p-7 bg-slate-300 rounded-lg' >
           <img className='w-32 h-44'
               src={image}
               alt={bookName} />
       </figure>
       <div className="card-body">
           <div className='flex justify-around'>
           {
                   tags.map((tag ,idx)=><div key={idx} className="badge badge-outline">{tag}</div>)
               }
           
               
           </div>
           <h2 className="text-4xl font-bold">
               {bookName}
               <div className="badge badge-secondary">NEW</div>
           </h2>
           <p className=' text-xl font-bold'>By: {author}</p>
           <div className='border-t-2 border-dashed my-5'></div>
           <div className="card-actions justify-between">
               <div className="badge badge-outline">{category}</div>
               <div className="flex items-center text-xl gap-3">{rating} <CiStar /></div>
           </div>
           
       </div>
   </div>
   </Link>
    );
};

export default Book;