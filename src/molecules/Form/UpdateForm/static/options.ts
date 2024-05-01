interface Option {
  value: string;
  label: string;
}

export const options: Option[] = [
  { value: "", label: "상위 카테고리" },
  { value: "outer", label: "아우터" },
  { value: "top", label: "상의" },
  { value: "inner", label: "이너" },
  { value: "bottom", label: "하의" },
];
