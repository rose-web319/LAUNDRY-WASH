import { ChevronsLeft, ChevronsRight } from "lucide-react";

export default function Paginate({
  currentPage,
  totalPages,
  hasMore,
  handlePageChange,
}) {
  return (
    <div className="flex justify-center md:justify-between items-center py-4">
      <p className="hidden md:block">
        page {currentPage} of {totalPages}
      </p>
      <div className="join border bordser-slate-200 rounded-lg">
        <button
          className={`join-item btn ${
            currentPage === 1
              ? "cursor-not-allowed opacity-50"
              : "cursor-pointer"
          }`}
          disabled={currentPage === 1}
          onClick={() => handlePageChange("first")}
        >
          <ChevronsLeft />
        </button>
        <button
          className={`join-item btn ${
            currentPage === 1
              ? "cursor-not-allowed opacity-50"
              : "cursor-pointer"
          }`}
          disabled={currentPage === 1}
          onClick={() => handlePageChange("prev")}
        >
          Prev
        </button>
        <button className="join-item btn bg-indigo-600 text-white">
          {currentPage}
        </button>
        <button
          className={`join-item btn ${
            !hasMore ? "cursor-not-allowed" : "cursor-pointer"
          }`}
          disabled={!hasMore}
          onClick={() => handlePageChange("next")}
        >
          next
        </button>
        <button
          className={`join-item btn ${
            !hasMore ? "cursor-not-allowed" : "cursor-pointer"
          }`}
          disabled={!hasMore}
          onClick={() => handlePageChange("last")}
        >
          <ChevronsRight />
        </button>
      </div>
    </div>
  );
}