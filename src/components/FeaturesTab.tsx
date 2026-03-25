import {Link} from "react-router-dom";

function FeaturesTab() {
    return (
        <nav className="app-navbar">
            <div className="app-navbar-inner">
                <ul className="app-navbar-links">
                    <li><Link to="/study" className="app-navbar-link">Réviser</Link></li>
                    <li><Link to="/quiz" className="app-navbar-link">Quiz</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default FeaturesTab