import { Link } from 'react-router-dom';

import AsArLogoSmWt from '../../all-reusable-components/asar-logo-sm-wt/asar-logo-sm-wt.component';

import './g5-navbar.styles.scss';

const Navbar = () => {
    return ( 
        <div className='g5-navbar'>
            <Link to="/g5/home"><i className="bi bi-house-door"></i> G5 Home</Link>
            <Link to="/g5/box-one"><i className="bi bi-calendar-week"></i> Box One</Link>
            <Link to="/g5/box-two"><i className="bi bi-calendar-week"></i> Box Two</Link>
            <Link to="/g5/box-three"><i className="bi bi-calendar-week"></i> Box Three</Link>
            <Link to="/g5/box-four"><i className="bi bi-calendar-week"></i> Box Four</Link>
            <Link to="/g5/box-five"><i className="bi bi-calendar-week"></i> Box Five</Link>
            <Link to="/g5/archive"><i className="bi bi-archive"></i> Archive</Link>
            <div className='back-to-homepage-logo'>
                <AsArLogoSmWt />
            </div>
        </div>
     );
}
 
export default Navbar;