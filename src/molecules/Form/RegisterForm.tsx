import React, { useState } from "react";
import { SubmitButton } from "@/atoms/Button";
import ValidateInput from "@/molecules/ValidateInput";
import { InputValidate } from "@/util/InputValidate";
import { RegisterAPI } from "@/api/AuthApi";

const RegisterForm: React.FC = () => {
  const [registerInput, setRegisterInput] = useState({
    id: "",
    password: "",
    nickname: "",
    passwordCheck: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({
    id: "id 입력하세요. (최소 5자)",
    password: "password 입력하세요. (최소 5자)",
    nickname: "nickname 입력하세요. (최소 5자)",
    passwordCheck: "",
  });

  // input의 value를 변경하는 함수
  const handleInputChange = ({ value, id }: { value: string; id: string }) => {
    setRegisterInput((prev) => {
      return { ...prev, [id]: value };
    });
  };

  // 유효성 검사 함수
  const handleValidate = ({ value, id }: { value: string; id: string }) => {
    // 비밀번호 확인 유효성검사 예외처리
    if (id === "passwordCheck") {
      if (value !== registerInput.password) {
        const errorMessage = "비밀번호가 일치하지 않습니다";
        setErrors((prev) => ({ ...prev, [id]: errorMessage }));
      } else {
        setErrors((prev) => {
          const { [id]: _, ...rest } = prev;
          return { ...rest };
        });
      }
    } else {
      setErrors((prev) => ({ ...InputValidate(prev, id, value) }));
    }
  };

  const handleChangeAndValidate = ({
    value,
    id,
  }: {
    value: string;
    id: string;
  }) => {
    handleInputChange({ value, id });
    handleValidate({ value, id });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log(errors);
    console.log(registerInput);
    if (
      Object.keys(errors).length === 0 &&
      Object.values(registerInput).some((value) => value !== "")
    ) {
      // 유효성 검사 통과
      console.log("회원가입 폼이 제출되었습니다.");

      await RegisterAPI(registerInput);
    } else {
      // 유효성 검사 실패
      console.log("회원가입 폼 유효성 검사에 실패하였습니다.");
    }
  };

  return (
    <form onSubmit={(e) => handleFormSubmit(e)}>
      <ValidateInput
        id={"id"}
        label={"아이디"}
        type={"text"}
        errorMessage={errors.id}
        value={registerInput.id}
        required={true}
        onChange={handleChangeAndValidate}
      />
      <ValidateInput
        id={"password"}
        label={"비밀번호"}
        type={"password"}
        errorMessage={errors.password}
        value={registerInput.password}
        required={true}
        onChange={handleChangeAndValidate}
      />

      <ValidateInput
        id={"passwordCheck"}
        label={"비밀번호 확인"}
        type={"password"}
        errorMessage={errors.passwordCheck}
        value={registerInput.passwordCheck}
        required={true}
        onChange={handleChangeAndValidate}
      />

      <ValidateInput
        id={"nickname"}
        label={"닉네임"}
        type={"text"}
        errorMessage={errors.nickname}
        value={registerInput.nickname}
        required={true}
        onChange={handleChangeAndValidate}
      />

      <div className="flex justify-center">
        <SubmitButton>회원가입</SubmitButton>
      </div>
    </form>
  );
};

export default RegisterForm;
