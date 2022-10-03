/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-redundant-roles */
import { SearchResult } from "../types/SearchResult";

const ResultTable=(props:{SearchResult:SearchResult}): JSX.Element =>{
    const { SearchResult } = props;
return(
    <>
 
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 bg-gray-100 py-8 px-4">
      {SearchResult.Search?.map((movie) => (
        <li
          key={movie.imdbID}
          className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
        >
          <div className="flex flex-1 flex-col p-8">
            <img className="mx-auto h-52 w-auto flex-shrink-0 rounded-md" src={movie.Poster !=="N/A"?movie.Poster:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'} alt={movie.Title} />
           
            <dl className="mt-1 flex flex-grow flex-col justify-between">
              <dt className="sr-only">Title</dt>
              <h3 className="mt-6 text-sm font-medium text-gray-900">{movie.Title}</h3>
              <dt className="sr-only">Role</dt>
              <dd className="mt-3">
                <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                  {movie.Year}
                </span>
              </dd>
            </dl>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200 bg-gray-200 hover:bg-gray-800">
              <div className="flex w-0 flex-1">
                <a
                  href="#"
                  className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-100"
                >
                
                  <span className="ml-3">Button with Label</span>
                </a>
              </div>
           
            </div>
          </div>
        </li>
      ))}
    </ul>
    </>
)
}
export default ResultTable;