const PageButton: React.FC<{
  pageNumber: number;
  onClick: () => void;
  state: boolean;
}> = ({ pageNumber, onClick, state }) => (
  <button
    onClick={onClick}
    className={` ${state ? "bg-blue-700" : "bg-blue-500"} hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
  >
    {pageNumber}
  </button>
);

export default PageButton;
