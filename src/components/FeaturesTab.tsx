import {Link} from "react-router-dom";

function FeaturesTab() {
    return (
        <nav>
            <ul>
                <li><Link to="/study">Réviser</Link></li>
                <li><Link to="/quiz">Quiz</Link></li>
            </ul>
        </nav>
    )
}

export default FeaturesTab