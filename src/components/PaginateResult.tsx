import { useEffect, useState } from "react";
import { SearchResult } from "../types/SearchResult";
import ReactPaginate from 'react-paginate';
const PaginateResult = (props: {
  SearchResult: SearchResult;
  setPageNum: React.Dispatch<React.SetStateAction<number>>;
  pageNum: number;
}): JSX.Element => {
  const { SearchResult, setPageNum, pageNum } = props;
  const [pageCount, setPageCount] = useState(0);
  const [totalResult, setTotalResult] = useState(+SearchResult.totalResults);

 
  useEffect(() => {
   setTotalResult(+SearchResult.totalResults);
  
  }, [SearchResult]);
  useEffect(() => {
    
     setPageCount(Math.ceil(totalResult / 10));
   
   }, [totalResult]);
 

  return (
    <>
      <div className="flex items-center justify-between border-t border-gray-200 bg-gray-100 px-4 py-5 sm:px-6">
        <div className="flex flex-1 justify-between sm:hidden">
          <button className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Previous 
          </button>
          <button className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Next
          </button>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing{" "}
              <span className="font-medium">{(pageNum*10)+1}</span> to{" "}
              <span className="font-medium">{(pageNum+1)*10}</span> of{" "}
              <span className="font-medium">{SearchResult.totalResults}</span>{" "}
              results
            </p>
          </div>
          
          <ReactPaginate
        breakLabel="..."
        breakClassName="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700"
        nextLabel=">"
        onPageChange={(e)=>setPageNum(e.selected)}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        pageClassName="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
        activeClassName="relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20"
        
        previousLabel="<"
        previousClassName="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        nextClassName="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
      />
     
        </div>
      </div>
    </>
  );
};
export default PaginateResult;

