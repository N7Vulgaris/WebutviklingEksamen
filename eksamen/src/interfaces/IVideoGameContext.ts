import IVideoGame from "./IVideoGame";

interface IVideoGameContext{
    videoGames: IVideoGame[];
    userInput: string;
    sortByTitleDescending: () => void;
    sortByTitleAscending: () => void;
    deleteVideoGameById: (id: number) => void;
    postNewVideoGame: (newVideoGame: IVideoGame) => void;
    updateVideoGame: (editedVideoGame: IVideoGame) => void;
    uploadImage: (image: File) => void;
    sortByReleaseYear: () => void;
    sortByReviewScore: () => void;
    setInput: (input: string) => void;
}

export default IVideoGameContext;