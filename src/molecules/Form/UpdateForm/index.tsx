import React, { useRef, useState } from "react";
import SelectBox from "@/atoms/SelectBox";
import SubmitButton from "@/atoms/Button/SubmitButton";
import ValidateInput from "@/molecules/ValidateInput";
import InputFrame from "@/molecules/Frame/InputFrame";
import { updateAPI } from "@/api/ClothesAPI";
import { subOptions } from "./static/subOptions";
import { options } from "./static/options";
import { tempOptions } from "./static/tempOption";
import { useDispatch } from "react-redux";
import { setRerender } from "@/redux/modules/reRender";

interface UpdateFormProps {
  Itemdata: Record<string, any>;
}

const UpdateForm: React.FC<UpdateFormProps> = ({ Itemdata }) => {
  const dispatch = useDispatch();

  const [ItemData, setItemData] = useState<Record<string, any>>({
    name: "",
    category: "",
    subcategory: "",
    temp: "",
  });

  const [category, seCategory] = useState("");
  const formRef = useRef<HTMLFormElement | null>(null);

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

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return console.log("form 태그 Ref 에러");

    const formData = new FormData(formRef.current);
    const name = formData.get("name") as string;
    const category = formData.get("category") as string;
    const subcategory = formData.get("subcategory") as string;
    const temp = formData.get("temp") as string;

    const newItemData = {
      _id: Itemdata._id,
      name,
      category,
      subcategory,
      temp,
    };
    await updateAPI(newItemData);
    dispatch(setRerender());
  };

  return (
    <form onSubmit={(e) => handleFormSubmit(e)} ref={formRef}>
      <div className="flex flex-col gap-[3rem]">
        <ValidateInput
          id={"name"}
          label={"이름"}
          type={"text"}
          onChange={handleInputChange}
          value={Itemdata.name}
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

export default UpdateForm;
