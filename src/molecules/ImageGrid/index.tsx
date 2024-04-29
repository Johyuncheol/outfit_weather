import Image from "next/image";

interface Item {
  outer: {
    imgSrc: string;
    name: string;
  };
  top: {
    imgSrc: string;
    name: string;
  };
  inner: {
    imgSrc: string;
    name: string;
  };
  bottom: {
    imgSrc: string;
    name: string;
  };
}

interface ImageGridProps {
  data: Item;
}

const ImageGrid: React.FC<ImageGridProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-3 gap-[1px] min-w-[350px] p-4 cursor-pointer">
      <div className="bg-gray-200 h-[125px] relative"></div>
      <div className="bg-gray-200 h-[125px] relative">모자</div>
      <div className="bg-gray-200 h-[125px] relative">목도리</div>

      <div className="bg-gray-200 h-[125px] relative">
        {data.outer ? <Image src={data.outer.imgSrc} alt="" fill /> : "아우터"}
      </div>
      <div className="bg-gray-200 h-[125px] relative">
        {data.top ? <Image src={data.top.imgSrc} alt="" fill /> : "상의"}
      </div>
      <div className="bg-gray-200 h-[125px] relative">장갑</div>

      <div className="bg-gray-200 h-[125px] relative"></div>
      <div className="bg-gray-200 h-[125px] relative">
        {data.inner ? <Image src={data.inner.imgSrc} alt="" fill /> : "이너"}
      </div>
      <div className="bg-gray-200 h-[125px] relative">가방</div>

      <div className="bg-gray-200 h-[125px] relative"></div>
      <div className="bg-gray-200 h-[125px] relative">
        {data.bottom ? <Image src={data.bottom.imgSrc} alt="" fill /> : "하의"}
      </div>
      <div className="bg-gray-200 h-[125px] relative">신발</div>
    </div>
  );
};
export default ImageGrid;
