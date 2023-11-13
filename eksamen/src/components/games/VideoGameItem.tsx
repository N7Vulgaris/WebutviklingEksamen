import IVideoGame from "../../interfaces/IVideoGame";
import "./GameStyle.css";

const VideoGameItem = ({id, title, platform, releaseYear, image, developer, publisher, genre, reviewScore} : IVideoGame) => {
    return (
        <article className="videoGame-box col-sm-6 col-md-6 col-lg-4">
            <div className="videoGame-box__border">
                <img className="videoGame-box__image" src={`https://localhost:7022/uploadedimages/${image}`} alt="image of game cover"/>
                <h3>{title}</h3>
                <p>Platform: {platform}</p>
                <p>Release year: {releaseYear}</p>
                <p>Genre: {genre}</p>
                <p>Developer: {developer}</p>
                <p>Publisher: {publisher}</p>
                <p>Review Score: {reviewScore}</p>
            </div>
        </article>
    )
}

export default VideoGameItem;