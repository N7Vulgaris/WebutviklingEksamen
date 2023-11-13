interface IVideoGame{
    id?: number;
    title: string;
    platform: string;
    releaseYear: number;
    image?: string;
    developer: string;
    publisher: string;
    genre: string;
    reviewScore: number;
}

export default IVideoGame;