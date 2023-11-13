import { ChangeEvent, useContext } from "react";
import IVideoGameContext from "../../interfaces/IVideoGameContext";
import { VideoGameContext } from "../../contexts/VideoGameContext";
import "./GameStyle.css";

const SortAndFilterGames = () => {

    const {setInput, sortByTitleDescending, sortByTitleAscending, sortByReleaseYear, sortByReviewScore} = useContext(VideoGameContext) as IVideoGameContext;

    const sortGamesDescending = () => {
        sortByTitleDescending();
    }

    const sortGamesAscending = () => {
        sortByTitleAscending();
    }

    const sortReleaseYear = () => {
        sortByReleaseYear();
    }

    const sortReviewScore = () => {
        sortByReviewScore();
    }

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    }

    return(
        <section className="sorting-section">
            <input className="sorting-section__search-bar" onChange={changeHandler} type="search" placeholder="Search..."/>
            <div className="sorting-section__flexbox">
                <button className="sorting-section__sort-btn" onClick={sortGamesDescending}>A-Z</button>
                <button className="sorting-section__sort-btn" onClick={sortGamesAscending}>Z-A</button>
                <button className="sorting-section__sort-btn" onClick={sortReleaseYear}>Release Year</button>
                <button className="sorting-section__sort-btn" onClick={sortReviewScore}>Review Score</button>
            </div>
        </section>
    )
}

export default SortAndFilterGames;