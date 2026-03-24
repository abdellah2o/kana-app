import {Link} from "react-router-dom";

function FeaturesTab() {
    return (
        <nav className="app-navbar">
            <ul className="app-navbar-links">
                <li><Link to="/study" className="app-navbar-link">Réviser</Link></li>
                <li><Link to="/quiz" className="app-navbar-link">Quiz</Link></li>
            </ul>
        </nav>
    )
}

export default FeaturesTab