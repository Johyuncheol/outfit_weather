import React, { FormEvent, useState } from "react";
import Image from "next/image";
import Input from "@/atoms/Input";

interface MyFormProps {
  onSubmit: (formData: FormData) => void;
}

interface FormData {
  image: File | null;
  name: string;
  category: string;
}

const AddItemForm: React.FC<MyFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    image: null,
    name: "",
    category: "",
  });
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleInputChange = ({
    event,
  }: {
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>;
  }) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = ({
    event,
  }: {
    event: React.ChangeEvent<HTMLInputElement>;
  }) => {
    if (event.target.files) {
      const selectedImage = event.target.files[0];
      setFormData({
        ...formData,
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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex">
        {previewImage && (
          <Image src={previewImage} alt="미리보기" width={200} height={200} />
        )}
        <div className="flex flex-col gap-[3rem]">
          <div>
            <label htmlFor="image">이미지: </label>
            <Input id={"image"} type={"file"} onChange={handleFileChange} />
          </div>

          <div>
            <label htmlFor="name">이름: </label>
            <Input id={"name"} type={"text"} onChange={handleInputChange} />
          </div>

          <div>
            <label htmlFor="category">카테고리: </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={(event) => handleInputChange}
            >
              <option value="">카테고리를 선택해주세요.</option>
              <option value="option1">옵션 1</option>
              <option value="option2">옵션 2</option>
              <option value="option3">옵션 3</option>
            </select>
          </div>
          <button type="submit">제출</button>
        </div>
      </div>
    </form>
  );
};

export default AddItemForm;
