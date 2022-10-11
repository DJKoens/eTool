import {Link} from 'react-router-dom';
import './Navbar.css';
import logo from '../media/FIND_Logo_small.png';
import searchIcon from '../media/search_icon.png';

const Navbar = () => {

    const handleSearch = (e) => {
        if (e.type == 'click' || (e.type == 'keydown' && e.key == 'Enter')){
            if (document.getElementById('resourceSearch').value != ''){
                window.location.href="/resources/" + document.getElementById('resourceSearch').value;
                document.getElementById('resourceSearch').value = '';
            }
        }
    }

    return ( 
        <nav className="navbar">
            <img src={logo} alt="FIND Logo" />
            <h1>Guidance for establishing a National Essential Diagnostics List</h1>
            <div className="contentSearch">
                <input type="text" id="resourceSearch" placeholder='Search for resources' onKeyDown={handleSearch}/>
                <input type="image" src={searchIcon} onClick={handleSearch}/>
            </div>
            <div className="links">
                <Link to="/tool">Home</Link>
                <Link to="/instructions">Instructions</Link>
                <Link to="/glossary">Glossary</Link>
                <Link to="/acknowledgements">Acknowledgements</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;