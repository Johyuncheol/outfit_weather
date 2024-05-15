import React from "react";
import Frame from "@/molecules/Frame/ArticleFrame";
import ItemInfo from "@/molecules/ItemInfo";
import ImageGrid from "@/molecules/ImageGrid";
import Carousel from "@/molecules/Carousel";

interface ItemType {
  outer: {
    _id: string;
    name: string;
    category: string;
    imgSrc: string;
  };
  top: {
    _id: string;
    name: string;
    category: string;
    imgSrc: string;
  };
  bottom: {
    _id: string;
    name: string;
    category: string;
    imgSrc: string;
  };
  inner: {
    _id: string;
    name: string;
    category: string;
    imgSrc: string;
  };
}

interface RecommendItemProps {
  data: {
    mainItem: {
      _id: string;
      name: string;
      category: string;
      imgSrc: string;
      detail: string;
    };
    styles: ItemType[];
  };
  HandleModal: (item: any) => void;
}

const ContentsCard: React.FC<RecommendItemProps> = ({ data, HandleModal }) => {
  return (
    <div id={`recommend${data.mainItem._id}`}>
      <Frame title={`${data.mainItem.name} 코디`}>
        <ItemInfo
          imgSrc={data.mainItem.imgSrc}
          alt={data.mainItem.name}
          detail={data.mainItem.detail}
        />
      </Frame>
      <Carousel<ItemType>
        title={"코디 정보"}
        onItemClick={HandleModal}
        data={data.styles}
        renderFigure={(item) => <ImageGrid data={item} />}
      />
    </div>
  );
};

export default React.memo(ContentsCard);
