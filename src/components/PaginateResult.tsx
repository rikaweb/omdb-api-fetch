import { useContext, useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';
import { ResultContext } from "./Omdb";
const PaginateResult = (): JSX.Element => {
  const {pageNum,setPageNum,searchResult} = useContext(ResultContext)
  const [pageCount, setPageCount] = useState(0);
  const [totalResult, setTotalResult] = useState(+searchResult!.totalResults!);

 
  useEffect(() => {
   setTotalResult(+searchResult!.totalResults!);
  
  }, [searchResult]);
  useEffect(() => {
    
     setPageCount(Math.ceil(totalResult / 10));
   
   }, [totalResult]);
 

  return (
    <>
      <div className="flex items-center justify-between px-4 py-5 bg-gray-100 border-t border-gray-200 sm:px-6">
       
        <div className=" sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing{" "}
              <span className="font-medium">{(pageNum*10)+1}</span> to{" "}
              <span className="font-medium">{(pageNum+1)*10}</span> of{" "}
              <span className="font-medium">{searchResult?.totalResults}</span>{" "}
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

