import React from "react";
import PaginationControls from "@/molecules/PageNationIndicator";
import Image from "next/image";

const AtomicPagination: React.FC<{
  data: any;
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}> = ({ data, currentPage, totalPages, onPageChange }) => {
  console.log(data);
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {data &&
          data.map((item: any, index: number) => (
            <div key={index} className="border border-gray-300 p-4 rounded ">
              <div className="relative w-full h-[15rem]">
                <Image src={item.imgSrc} alt={item.name} fill />
              </div>

              <p className="mt-2">Name: {item.name}</p>
              <p>Category: {item.category}</p>
            </div>
          ))}
      </div>
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default AtomicPagination;
