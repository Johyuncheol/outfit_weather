import PageButton from "@/atoms/Button/PageButton";

const PaginationControls: React.FC<{
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}> = ({ currentPage, totalPages, onPageChange }) => {
  const goToPage = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      onPageChange(pageNumber);
    }
  };

  return (
    <div className="flex items-center justify-center mt-4">
      <button
        onClick={() => goToPage(currentPage - 1)}
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
      >
        Previous
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <PageButton
          key={index}
          state={index + 1 === currentPage}
          pageNumber={index + 1}
          onClick={() => goToPage(index + 1)}
        />
      ))}
      <button
        onClick={() => goToPage(currentPage + 1)}
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
      >
        Next
      </button>
    </div>
  );
};

export default PaginationControls;
