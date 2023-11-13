import { useContext } from "react";
import VideoGameItem from "./VideoGameItem";
import IVideoGameContext from "../../interfaces/IVideoGameContext";
import { VideoGameContext } from "../../contexts/VideoGameContext";
import "./GameStyle.css";

const VideoGameList = () => {

    const {videoGames, userInput} = useContext(VideoGameContext) as IVideoGameContext;
    const filteredVideoGames = videoGames.filter(videoGame => videoGame.title.toLowerCase().includes(userInput.toLowerCase()));

    const getVideoGameList = () => {
        return filteredVideoGames.map((videoGame, i) => (
            <VideoGameItem
                key={`game-${i}`}
                id={videoGame.id}
                title={videoGame.title}
                platform={videoGame.platform}
                releaseYear={videoGame.releaseYear}
                image={videoGame.image}
                developer={videoGame.developer}
                publisher={videoGame.publisher}
                genre={videoGame.genre}
                reviewScore={videoGame.reviewScore}
            />
        ))
    }

    return (
        <section className="videoGame-output row g-5">{getVideoGameList()}</section>
    )

}

export default VideoGameList;