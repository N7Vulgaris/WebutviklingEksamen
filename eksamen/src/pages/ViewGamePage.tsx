import VideoGameList from "../components/games/VideoGameList";
import SortAndFilterGames from "../components/games/SortAndFilterGames";

const ViewGamePage = () => {
    return(
        <section>
            <section>
                <SortAndFilterGames/>
            </section>

            <section className="container">
                <VideoGameList/>
            </section>
        </section>
    )
}

export default ViewGamePage;