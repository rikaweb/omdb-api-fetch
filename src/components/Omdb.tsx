import { useEffect, useState } from "react";
import { SearchResult } from "../types/SearchResult";
import PaginateResult from "./PaginateResult";
import ResultTable from "./ResultTable";

const Omdb = () => {
  const [searchTerm, setSearchterm] = useState("");
  const [searchResult, setSearchResult] = useState<SearchResult>();
  const [pageNum, setPageNum] = useState(0);

  useEffect(() => {
    fetchOmdbAPi(searchTerm, pageNum);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNum, searchTerm]);

  function fetchOmdbAPi(term: String, pageNumber: number) {
    fetch(
      `https://www.omdbapi.com/?apikey=${
        process.env.REACT_APP_OMDB_API_KEY
      }&s=${term}&page=${pageNumber + 1}&type=movie`
    )
      .then((response) => response.json())
      .then((actualData) => setSearchResult(actualData))
      .catch((err) => {
        console.log("err" + err.message);
      });

  }

  return (
    <>
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8  ">
        <div className="mx-auto  ">
          <div className="bg-gray-100 shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900  py-3">
                OMDB Search App
              </h3>

              <div className="w-full sm:max-w-xs">
                <label htmlFor="search" className="sr-only">
                  Search by Movie title
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <input
                    type="text"
                    name="search"
                    id="search"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder=" Search by Movie title"
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchterm(e.target.value);
                      setPageNum(0);
                    }}
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className="w-6 h-6 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                    
                  </div>
                </div>
              </div>
            </div>
            <hr className="" />
            {searchResult?.Response === "True" ? (
              <>
                <ResultTable searchResult={searchResult} />
                <PaginateResult
                  searchResult={searchResult}
                  setPageNum={setPageNum}
                  pageNum={pageNum}
                />
              </>
            ) : (
                <div className="bg-gray-100">
                <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                  <div className="text-center">
                 
                    <p className={`mt-1 text-4xl font-bold tracking-tight ${searchTerm===''? 'text-gray-900':'text-red-600'} sm:text-5xl lg:text-6xl`}>
                   {searchTerm===''?'Please Search by Movie Title':searchResult?.Error}
                    </p>
                    
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Omdb;
