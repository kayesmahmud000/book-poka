import React from 'react';
import BannerImg from '../../assets/books.jpg'

const Bnner = () => {
    return (
        <div className=" hero  text-white bg-base-200 ">
        <div className="hero-content  py-32 flex-col lg:flex-row-reverse">
          <img
            src={BannerImg}
            className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-6xl mb-6 w-5/6 font-bold">Books to freshen up your bookshelf</h1>
            
            <button className="btn bg-green-500 mt-5 text-white">View The List</button>
          </div>
        </div>
      </div>
    );
};

export default Bnner;