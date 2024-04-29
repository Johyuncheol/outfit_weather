interface Option {
  value: string;
  label: string;
}

interface CategoryOptions {
  option: Option[];
}

interface CategoryOptionsMap {
  [category: string]: CategoryOptions;
}

export const subOptions: CategoryOptionsMap = {
  "": {
    option: [{ value: "", label: "상위 카테고리를 선택해주세요" }],
  },
  bottom: {
    option: [
      { value: "", label: "카테고리를 선택하세요" },
      { value: "반바지", label: "반바지" },
      { value: "청바지", label: "청바지" },
      { value: "면바지", label: "면바지" },
      { value: "슬랙스", label: "슬랙스" },
      { value: "트레이닝바지", label: "트레이닝바지" },
      { value: "스웨트팬츠", label: "스웨트팬츠" },
      { value: "치마", label: "치마" },
    ],
  },
  inner: {
    option: [
      { value: "", label: "카테고리를 선택하세요" },
      { value: "반팔티셔츠", label: "반팔티셔츠" },
      { value: "긴팔티셔츠", label: "긴팔티셔츠" },
      { value: "민소매", label: "민소매" },
    ],
  },
  top: {
    option: [
      { value: "", label: "카테고리를 선택하세요" },
      { value: "니트", label: "니트" },
      { value: "스웨트셔츠", label: "스웨트셔츠" },
      { value: "후디", label: "후디" },
      { value: "셔츠", label: "셔츠" },
      { value: "블라우스", label: "블라우스" },
      { value: "가디건", label: "가디건" },
    ],
  },
  outer: {
    option: [
      { value: "", label: "카테고리를 선택하세요" },
      { value: "재킷", label: "재킷" },
      { value: "바람막이", label: "바람막이" },
      { value: "코트", label: "코트" },
      { value: "트렌치코트", label: "트렌치코트" },
      { value: "경량패딩", label: "경량패딩" },
      { value: "패딩", label: "패딩" },
      { value: "야상", label: "야상" },
    ],
  },
};
