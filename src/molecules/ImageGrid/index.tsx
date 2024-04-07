import Image from "next/image";

interface Item {
  [key: string]: {
    imgSrc: string;
    alt: string;
  };
}

interface ImageGridProps {
  data: Item;
}

const ImageGrid: React.FC<ImageGridProps> = ({ data }) => {
  let row =
    Object.keys(data).length < 4
      ? `grid grid-cols-${Object.keys(data).length}`
      : `grid grid-cols-3`;

  return (
    <div
      className={`grid ${row} w-full h-full flex justify-center items-center border border-1`}
    >
      {Object.keys(data).map((key, innerIndex) => (
        <Image
          key={innerIndex}
          src={data[key].imgSrc}
          alt={data[key].alt}
          width={100}
          height={100}
        />
      ))}
    </div>
  );
};
export default ImageGrid;
