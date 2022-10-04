import {Link} from 'react-router-dom';
import './Navbar.css';
import logo from '../media/FIND_Logo_small.png';
import searchIcon from '../media/search_icon.png';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <img src={logo} alt="FIND Logo" />
            <h1>Guidance for establishing a National Essential Diagnostics List</h1>
            <div className="contentSearch">
                <input type="text" placeholder='Search for resources' />
                <input type="image" src={searchIcon}/>
            </div>
            <div className="links">
                <Link to="/tool">Home</Link>
                <Link to="/instructions">Instructions</Link>
                <Link to="/glossary">Glossary</Link>
                {/* <Link to="/tool/phase/1/activity/0">Tool</Link> */}
                {/* <Link to="/tool">Tool</Link> */}
                <Link to="/acknowledgements">Acknowledgements</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;