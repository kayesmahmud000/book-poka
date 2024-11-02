import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import ListedBook from './Components/ListedBook/ListedBook.jsx';
import BookDetails from './Components/bookDetails/BookDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:()=>fetch("/booksData.json")
      },
      {
        path:"/listedBook",
        element:<ListedBook></ListedBook>
      },
      {
        path:"/book/:bookId",
        element:<BookDetails></BookDetails>,
        loader:()=>fetch("/booksData.json")
      }
    ]
  },
  
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
