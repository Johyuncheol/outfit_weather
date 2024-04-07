import React from "react";

interface SpanProps {
  type: "title" | "subTitle" | "subTitle2" | "detail" | "large";
  children: React.ReactNode;
}

const Span: React.FC<SpanProps> = ({ children, type }) => {
  let className;

  switch (type) {
    case "large":
      className = " font-normal text-7xl";
      break;
    case "title":
      className = " font-bold text-4xl";
      break;
    case "subTitle":
      className = " font-semibold text-3xl";
      break;
    case "subTitle2":
      className = " font-semibold text-2xl";
      break;
    case "detail":
      className = " font-normal text-base";
      break;

    default:
      className = "font-bold text-2xl";
      break;
  }

  return <span className={className}>{children}</span>;
};

export default Span;
