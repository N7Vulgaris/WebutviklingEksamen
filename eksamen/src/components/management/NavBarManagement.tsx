import { useContext } from "react";
import { Link} from "react-router-dom";
import { VideoGameContext } from "../../contexts/VideoGameContext";
import IVideoGameContext from "../../interfaces/IVideoGameContext";
import "./NavBarStyle.css";

const NavBarManagement = () => {

    const {videoGames} = useContext(VideoGameContext) as IVideoGameContext;

    return (
        <section>
            <nav className="nav-menu">
                <Link className="nav-menu__link" to="add-new-game"><div>Add New</div></Link>

                <Link className="nav-menu__link" to="update-game"><div>Update</div></Link>
                
                <Link className="nav-menu__link" to="delete-game"><div>Delete</div></Link>
                
            </nav>
            <div className="nav-menu__total-games">Total videogames: {videoGames.length}</div>
            
        </section>
    )
}

export default NavBarManagement;