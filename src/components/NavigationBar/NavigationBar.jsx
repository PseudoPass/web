import '../styles/NavigationBar.css';
import {Link} from "react-router-dom";

function NavigationBar() {
    return (
        <div className="navigationbar">
            <Link to={'/'} className={"nb-link"}>Home</Link> |
            <Link to={'/login'} className={"nb-link"}>Login</Link>
            {/*<Link to={'/id'} className={"nb-link"}>My ID Card</Link> |*/}
            {/*<Link to={'/settings'} className={"nb-link"}>Settings</Link>*/}
        </div>
    );
}

export default NavigationBar;