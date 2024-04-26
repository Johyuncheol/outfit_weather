import React from "react";
import Image from "next/image";

const ImageModal = ({ randomImage }: { randomImage: string }) => {

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-900 ">
      <div className=" flex justify-between items-center">
        {randomImage && (
          <Image src={randomImage} alt={""} width={375} height={667} />
        )}
      </div>
    </div>
  );
};

export default ImageModal;
