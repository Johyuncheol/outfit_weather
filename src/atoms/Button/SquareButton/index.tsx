interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const SquareButton: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-white w-[40vw] rounded-l-2xl max-w-[300px] cursor-pointer py-8 bg-slate-600 hover:bg-gray-800 focus:ring-blue-200"
    >
      {children}
    </button>
  );
};

export default SquareButton;
