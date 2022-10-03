import { Movie } from "./Movie";

export type SearchResult = {
    Response: string;
    Search: Movie[];
    totalResults: string;
    Error:string;
}