import { SearchResult } from "./SearchResult";

export interface ResultContextType {
    pageNum: number,
    setPageNum: React.Dispatch<React.SetStateAction<number>>,
    searchResult?:SearchResult
}


