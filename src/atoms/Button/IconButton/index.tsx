import Image from "next/image";

interface IconButtonProps {
  iconSrc: string;
  altText: string;
  onClick?: () => void;
  width?: number;
  height?: number;
}

const IconButton: React.FC<IconButtonProps> = ({
  iconSrc,
  altText,
  onClick,
  width = 35,
  height = 35,
}: IconButtonProps) => {
  return (
    <button onClick={onClick}>
      <Image src={iconSrc} alt={altText} width={width} height={height} />
    </button>
  );
};

export default IconButton;
