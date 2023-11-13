import "./HomePageStyle.css";
import {gameBanner} from "../assets/images";

const HomePage = () => {
    return(
        <section className="welcome-section">
            <h1>The Game Shelf</h1>
            <img className="welcome-section__banner" src={gameBanner} alt="Game banner"/>
        </section>
    )
}

export default HomePage;