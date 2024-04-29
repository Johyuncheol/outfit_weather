interface Option {
  value: string;
  label: string;
}

export const tempOptions: Option[] = [
  { value: "", label: "미선택시 자동 설정됩니다" },
  { value: "28", label: "28ºc ~" },
  { value: "23-27", label: "23ºc ~ 27ºc" },
  { value: "20-22", label: "20ºc ~ 22ºc" },
  { value: "17-19", label: "17ºc ~ 19ºc" },
  { value: "12-16", label: "12ºc ~ 16ºc" },
  { value: "9-11", label: "9ºc ~ 11ºc" },
  { value: "5-8", label: "5ºc ~ 8ºc" },
  { value: "4", label: "~ 4ºc" },
];
