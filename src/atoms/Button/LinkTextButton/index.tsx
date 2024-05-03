interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const LinkTextButton: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="border-none p-0 bg-transparent cursor-pointer"
    >
      {children}
    </button>
  );
};

export default LinkTextButton;
