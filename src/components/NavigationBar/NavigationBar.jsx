import '../styles/NavigationBar.css';
import {Link} from "react-router-dom";

function NavigationBar(props) {
    const { profile } = props;
    const handleLogout = () => {
        // Send request to backend requesting cookies and session data be deleted
    }

    return (
        <div className="navigationbar">
            <Link to={'/'} className={"nb-link"}>Home</Link> |
            {!profile ?
                <Link to={'/login'} className={"nb-link"}>Login</Link> :
                <Link to={'/logout'} className={'nb-link'}>Logout</Link> }
            {/*<Link to={'/id'} className={"nb-link"}>My ID Card</Link> |*/}
            {/*<Link to={'/settings'} className={"nb-link"}>Settings</Link>*/}
        </div>
    );
}

export default NavigationBar;