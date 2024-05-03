interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const SubmitButton: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-white rounded-2xl cursor-pointer px-3 py-2 bg-blue-500 hover:bg-blue-600 focus:ring-blue-200"
    >
      {children}
    </button>
  );
};

export default SubmitButton;
