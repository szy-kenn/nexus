export default interface IAnimeSchema {
    title: string;
    episodes: number;
    type: string;
    studio: string;
    clickedColor: string;
    airingDate: {
        startDate?: Date;
        endDate?: Date;
    };
    status?: string;
    imageUrl: string;
}
