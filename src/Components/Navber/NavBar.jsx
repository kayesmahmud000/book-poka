import BookIco from '../../assets/book.ico';
import { Link } from 'react-router-dom';
const NavBar = () => {

    const list = <>
       <Link to="/"> <li className="text-xl mr-5">Home</li></Link>
       <Link to="/listedBook"> <li className="text-xl">Listed Book</li></Link>
        
    </>
    return (
        <div className="navbar text-white my-5 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {list}
                    </ul>
                </div>
                <img className='w-10 ' src={BookIco} alt="" />
                <a className="btn btn-ghost text-2xl">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {list}
                </ul>
            </div>
            <div className="navbar-end ">
                <a className="btn bg-green-500 text-white mr-4">Sign In</a>
                <a className="btn btn-info text-white">Sign Up</a>
            </div>
        </div>
    );
};

export default NavBar;