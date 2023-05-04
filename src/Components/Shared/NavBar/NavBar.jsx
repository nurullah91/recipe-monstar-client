import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider/AuthProvider';

const NavBar = () => {

    const {user, photo, name} = useContext(AuthContext)
    console.log(user);
    return (

        <div className="navbar bg-gradient-to-r from-purple-500 to-pink-500">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink className={({ isActive }) =>
                            isActive ? "active" : ""
                        } to='/'>Home</NavLink></li>
                        <li><NavLink className={({ isActive }) =>
                            isActive ? "active" : ""
                        } to='/about'>About us</NavLink></li>
                        <li><NavLink className={({ isActive }) =>
                            isActive ? "active" : ""
                        } to='/blog'>Blog</NavLink></li>
                    </ul>
                </div>
                <a className="btn btn-ghost  normal-case text-3xl nav-logo shadow-xl">Recipe Monstar</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink className={({ isActive }) =>
                        isActive ? "active" : ""
                    } to='/'>Home</NavLink></li>
                    <li><NavLink className={({ isActive }) =>
                        isActive ? "active" : ""
                    } to='/about'>About us</NavLink></li>
                    <li><NavLink className={({ isActive }) =>
                        isActive ? "active" : ""
                    } to='/blog'>Blog</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end ">

                {
                    user? <img src={user.photoURL || photo} className='w-12 h-12 rounded-full' alt='user' title={user.displayName || name} />: <Link to='/login' className="btn btn-secondary shadow-xl text-black font-bold">Login</Link>
                }

               
            </div>
        </div>

    );
};

export default NavBar;