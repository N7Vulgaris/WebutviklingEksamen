import { useContext, useState, ChangeEvent } from "react";
import { VideoGameContext } from "../../contexts/VideoGameContext";
import IVideoGame from "../../interfaces/IVideoGame";
import IVideoGameContext from "../../interfaces/IVideoGameContext";
import "./ManagementStyle.css";

const AddNewGame = () => {

    const {postNewVideoGame, uploadImage} = useContext(VideoGameContext) as IVideoGameContext;

    const [image, setImage] = useState<File | null>(null);
    const [title, setTitle] = useState<string>("Not set");
    const [platform, setPlatform] = useState<string>("Not set");
    const [releaseYear, setReleaseYear] = useState<number>(0);
    const [genre, setGenre] = useState<string>("Not set");
    const [developer, setDeveloper] = useState<string>("Not set");
    const [publisher, setPublisher] = useState<string>("Not set");
    const [reviewScore, setReviewScore] = useState<number>(0);

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.currentTarget;
        switch(name){
            case "title":
                setTitle(value);
            break;
            case "platform":
                setPlatform(value);
            break;
            case "releaseYear":
                setReleaseYear(parseInt(value));
            break;
            case "genre":
                setGenre(value);
            break;
            case "developer":
                setDeveloper(value);
            break;
            case "publisher":
                setPublisher(value);
            break;
            case "reviewScore":
                setReviewScore(parseInt(value));
            break;
        }
    }

    const imageHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const {files} = e.target;

        if(files != null){
            const file = files[0];
            setImage(file);
        }
    }

    const gameImageUpload = (image: File) => {
        uploadImage(image);
    }

    const addNewVideoGame = () => {
        const newVideoGame: IVideoGame = {
            image: image?.name,
            title: title,
            platform: platform,
            releaseYear: releaseYear,
            genre: genre,
            developer: developer,
            publisher: publisher,
            reviewScore: reviewScore

        }
        if(image != null){
            gameImageUpload(image);
        }
        postNewVideoGame(newVideoGame);
    }


    return(
        <section>
            
            <form className="new-game-form">
                <h2 className="new-game-form__title">Add a new game to the database: </h2>
                <div className="new-game-form__image-input">
                    <label>Image: </label>
                    <input name="image" onChange={imageHandler} type="file"/>
                </div>

                <input name="title" className="new-game-form__input" placeholder="Title:" onChange={changeHandler} type="text"/>
                <input name="platform" className="new-game-form__input" placeholder="Platform:" onChange={changeHandler} type="text"/>
                <input name="releaseYear" className="new-game-form__input" placeholder="Release year:" onChange={changeHandler} type="number"/>
                <input name="genre" className="new-game-form__input" placeholder="Genre:" onChange={changeHandler} type="text"/>
                <input name="developer" className="new-game-form__input" placeholder="Developer:" onChange={changeHandler} type="text"/>
                <input name="publisher" className="new-game-form__input" placeholder="Publisher:" onChange={changeHandler} type="text"/>
                <input name="reviewScore" className="new-game-form__input" placeholder="Review Score" onChange={changeHandler} type="number"/>

                <button className="new-game-form__add-new-btn" onClick={addNewVideoGame}>Add new game</button>
            </form>
            
        </section>
    )
}

export default AddNewGame;