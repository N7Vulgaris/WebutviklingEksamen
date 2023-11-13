import "./HeaderStyle.css";
import { Link } from "react-router-dom";
import { logo2, viewIcon, quizIcon, editIcon } from "../../assets/images";

const Header = () => {
    return(
        <header>
            <nav className="navigation-menu">
                <img className="navigation-menu__logo" src={logo2} alt="Logo"/>

                <Link className="navigation-menu__link" to="view-games">
                    <img className="navigation-menu__link-image" src={viewIcon} alt="ViewPage"/>
                    <p className="navigation-menu__link-text">View Page</p>
                </Link>
                <Link className="navigation-menu__link" to="fun-page">
                    <img className="navigation-menu__link-image" src={quizIcon} alt="QuizPage"/>
                    <p className="navigation-menu__link-text">Quiz Page</p>
                </Link>
                <Link className="navigation-menu__link" to="management">
                    <img className="navigation-menu__link-image" src={editIcon} alt="Management"/>
                    <p className="navigation-menu__link-text">Management</p>
                </Link>
            </nav>
        </header>  
    )
}

export default Header;