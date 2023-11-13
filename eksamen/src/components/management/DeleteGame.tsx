import { useContext, ChangeEvent} from "react";
import IVideoGameContext from "../../interfaces/IVideoGameContext";
import { VideoGameContext } from "../../contexts/VideoGameContext";
import AdminGameList from "./AdminGameList";

const DeleteGame = () => {

    const {deleteVideoGameById} = useContext(VideoGameContext) as IVideoGameContext;
    let userInput: number;

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        userInput = parseInt(e.currentTarget.value);
    }

    const deleteVideoGame = () => {
        deleteVideoGameById(userInput);
    }

    return (
        <section>
            <section className="delete-game-field">
                <input className="delete-game-field__input" placeholder="Game Id:" onChange={changeHandler} type="number"/>
                <button className="delete-game-field__delete-btn" onClick={deleteVideoGame}>Delete</button>
            </section>
            <section className="container">
                <AdminGameList />
            </section>
        </section>
    )
}

export default DeleteGame;