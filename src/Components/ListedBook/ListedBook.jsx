import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredWishList, getStoreReadList } from '../../utilitis/handleDb';
import Book from '../Book/Book';


const ListedBook = () => {
    const [wishList, setWishList]=useState([]);
    const [readList, setReadList]=useState([])
    const allBook=useLoaderData();
console.log(wishList)
    useEffect(()=>{
        const listedBook=getStoredWishList()
        console.log(allBook, listedBook) 
        const wishBookList= allBook.filter(book=> listedBook.includes(book.bookId))
        setWishList(wishBookList)
    },[])
    useEffect(()=>{
        const readList=getStoreReadList();
        const readListBook= allBook.filter(book=>readList.includes(book.bookId))
        setReadList(readListBook)
    },[])

    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                    
                </TabList>

                <TabPanel>
                <div className='grid gap-5 my-5 grid-cols-3'>
                        {
                            readList.map(book=><Book book={book}></Book>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='grid gap-5 my-5 grid-cols-3'>
                        {
                            wishList.map(book=><Book book={book}></Book>)
                        }
                    </div>
                </TabPanel>
               
            </Tabs>

        </div>
    );
};

export default ListedBook;