import React from "react";
import Span from "@/atoms/Span";
const Frame = ({
  children,
  title,
  type,
}: {
  children: React.ReactNode;
  title: string;
  type?: "normal" | "bold";
}) => {
  let className;
  switch (type) {
    case "normal":
      className = "border-b-2 w-full";
      break;
    case "bold":
      className = "border-b-4 border-black w-full";
      break;
    default:
      className = "border-b-2 w-full";
      break;
  }

  return (
    <article className="flex flex-col gap-[2rem] p-5">
      <div className={className}>
        <Span type={"subTitle2"}>{title}</Span>
      </div>
      <div>{children}</div>
    </article>
  );
};

export default Frame;
