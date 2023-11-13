import { useContext } from "react";
import AdminGameItem from "./AdminGameItem";
import IVideoGameContext from "../../interfaces/IVideoGameContext";
import { VideoGameContext } from "../../contexts/VideoGameContext";

const AdminGameList = () => {

    const {videoGames} = useContext(VideoGameContext) as IVideoGameContext;

    const getVideoGameList = () => {
        return videoGames.map((videoGame, i) => (
            <AdminGameItem
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

export default AdminGameList;