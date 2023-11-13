import axios, {AxiosError} from "axios";
import IVideoGame from "../interfaces/IVideoGame";

const VideoGameService = (
    () => {

        const eksamenEndpoints = {
            videoGames: "https://localhost:7022/api/videogame"
        }

        const getAllVideoGames = async () => {
            try{
                const result = await axios.get(eksamenEndpoints.videoGames);
                return result.data;
            }catch(error: AxiosError | any){
                return error;
            }
        }

        const getVideoGameById = async (id: number) => {
            const result = await axios.get(`${eksamenEndpoints.videoGames}/${id}`);
            return result.data;
        }

        const getVideoGameByTitle = async (title: string) => {
            const result = await axios.get(`${eksamenEndpoints.videoGames}/GetByTitle/${title}`);
            return result.data;
        }

        const getVideoGameByPlatform = async (platform: string) => {
            const result = await axios.get(`${eksamenEndpoints.videoGames}/GetByPlatform/${platform}`);
            return result.data;
        }

        const getVideoGameByDeveloper = async (developer: string) => {
            const result = await axios.get(`${eksamenEndpoints.videoGames}/GetByDeveloper/${developer}`);
            return result.data;
        }
        
        const postNewVideoGame = async (newVideoGame: IVideoGame) => {
            try{
                const result = await axios.post(eksamenEndpoints.videoGames, newVideoGame);
                return result.data;
            }catch(error: AxiosError | any){
                return alert(error);
            }
        }

        const deleteVideoGame = async (id: number) => {
            try{
                const result = await axios.delete(`${eksamenEndpoints.videoGames}/${id}`);
                return result;
            }catch(error: AxiosError | any){
                return alert(error);
            }
        }

        const putVideoGame = async (editedVideoGame: IVideoGame) => {
            try{
                const result = await axios.put(eksamenEndpoints.videoGames, editedVideoGame);
                return result.data;
            }catch(error: AxiosError | any){
                return alert(error);
            }
        }

        return {
            getAllVideoGames,
            getVideoGameById,
            getVideoGameByTitle,
            getVideoGameByPlatform,
            getVideoGameByDeveloper,
            postNewVideoGame,
            deleteVideoGame,
            putVideoGame
        }

    }
)();

export default VideoGameService;