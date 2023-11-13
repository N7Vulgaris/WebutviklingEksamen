import { useEffect, useState, createContext, ReactNode } from "react";
import IVideoGameContext from "../interfaces/IVideoGameContext";
import IVideoGame from "../interfaces/IVideoGame";
import VideoGameService from "../services/VideoGameService";
import ImageUploadService from "../services/ImageUploadService";

export const VideoGameContext = createContext<IVideoGameContext | null>(null);

type Props = {
    children: ReactNode
}

const VideoGameProvider = ({children} : Props) => {

    const [videoGames, setVideoGames] = useState<IVideoGame[]>([]);
    const [userInput, setUserInput] = useState<string>("");

    useEffect(()=>{
        getVideoGamesFromService();
    }, []);

    const setInput = (input: string) => {
        setUserInput(input);
    }

    const getVideoGamesFromService = async () => {
        const videoGamesFromService = await VideoGameService.getAllVideoGames();
        setVideoGames(videoGamesFromService);
    }

    const sortByTitleDescending = () => {
        const sortedVideoGames = videoGames.sort((videoGame1, videoGame2) => videoGame1.title > videoGame2.title ? 1:-1);
        setVideoGames([...sortedVideoGames]);
    }

    const sortByTitleAscending = () => {
        const sortedVideoGames = videoGames.sort((videoGame1, videoGame2) => videoGame1.title < videoGame2.title ? 1:-1);
        setVideoGames([...sortedVideoGames]);
    }

    const sortByReleaseYear = () => {
        const sortedVideoGames = videoGames.sort((videoGame1, videoGame2) => videoGame1.releaseYear < videoGame2.releaseYear ? 1:-1);
        setVideoGames([...sortedVideoGames]);
    }

    const sortByReviewScore = () => {
        const sortedVideoGames = videoGames.sort((videoGame1, videoGame2) => videoGame1.reviewScore < videoGame2.reviewScore ? 1:-1);
        setVideoGames([...sortedVideoGames]);
    }

    const deleteVideoGameById = async (id: number) => {
        await VideoGameService.deleteVideoGame(id);
        const newArray = videoGames.filter(videoGame => videoGame.id != id);
        setVideoGames(newArray);
    }

    const postNewVideoGame = async (newVideoGame: IVideoGame) => {
        await VideoGameService.postNewVideoGame(newVideoGame);
        getVideoGamesFromService()
    }

    const updateVideoGame = async (editedVideoGame: IVideoGame) => {
        await VideoGameService.putVideoGame(editedVideoGame);
        getVideoGamesFromService()
    }

    const uploadImage = async (image: File) => {
        await ImageUploadService.uploadImage(image);
    }

    return (
        <VideoGameContext.Provider value={{videoGames, userInput, uploadImage, updateVideoGame, postNewVideoGame, deleteVideoGameById, setInput, sortByReviewScore, sortByReleaseYear, sortByTitleAscending, sortByTitleDescending}}>
            {children}
        </VideoGameContext.Provider>
    )
}

export default VideoGameProvider;