import React, { FormEvent, useState } from "react";
import Image from "next/image";
import SelectBox from "@/atoms/SelectBox";
import SubmitButton from "@/atoms/Button/SubmitButton";
import ValidateInput from "@/molecules/ValidateInput";
import InputFrame from "@/molecules/Frame/InputFrame";
import { AddClothesAPI } from "@/api/ClothesAPI";
import { subOptions } from "./static/subOptions";
import { options } from "./static/options";
import { tempOptions } from "./static/tempOption";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setRerender } from "@/redux/modules/reRender";

interface ItemData {
  image: File | null;
  name: string;
  category: string;
  subcategory: string;
  temp: string;
}

const AddItemForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [ItemData, setItemData] = useState<ItemData>({
    image: null,
    name: "",
    category: "",
    subcategory: "",
    temp: "",
  });
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const [category, seCategory] = useState("");

  const handleInputChange = ({
    event,
  }: {
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>;
  }) => {
    event.preventDefault();
    const { name, value } = event.target;
    setItemData({
      ...ItemData,
      [name]: value,
    });

    if (name === "category") {
      seCategory(value);
    }
  };

  const handleFileChange = ({
    event,
  }: {
    event: React.ChangeEvent<HTMLInputElement>;
  }) => {
    event.preventDefault();
    if (event.target.files && event.target.files.length > 0) {
      const selectedImage = event.target.files[0];
      setItemData({
        ...ItemData,
        image: selectedImage,
      });

      // 이미지 미리보기 생성
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // FormData 객체 생성
    const data = new FormData();
    data.append("image", ItemData.image as File);
    data.append("name", ItemData.name);
    data.append("category", ItemData.category);
    data.append("subcategory", ItemData.subcategory);
    data.append("temp", ItemData.temp);

    const res = await AddClothesAPI({ data });
    if (res === 401) {
      alert("로그인이 필요합니다");
      router.push("/");
    }

    dispatch(setRerender());
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      {previewImage && (
        <Image src={previewImage} alt="미리보기" width={150} height={150} />
      )}
      <div className="flex flex-col gap-[3rem]">
        <ValidateInput
          id={"image"}
          label={"이미지"}
          type={"file"}
          onChange={handleFileChange}
          required
        />

        <ValidateInput
          id={"name"}
          label={"이름"}
          type={"text"}
          onChange={handleInputChange}
          required
        />

        <InputFrame id={"category"} label={"카테고리"} required>
          <>
            <SelectBox
              id="category"
              options={options}
              onChange={handleInputChange}
              required
            />

            <SelectBox
              id="subcategory"
              options={subOptions[category].option}
              onChange={handleInputChange}
              required
            />
          </>
        </InputFrame>

        <InputFrame id={"temp"} label={"기온"} required>
          <SelectBox
            id="temp"
            options={tempOptions}
            onChange={handleInputChange}
            required
          />
        </InputFrame>

        <SubmitButton>제출</SubmitButton>
      </div>
    </form>
  );
};

export default AddItemForm;
