import React, { useState } from "react";
import SubmitButton from "@/atoms/Button/SubmitButton";
import ValidateInput from "@/molecules/ValidateInput";
import { InputValidate } from "@/util/InputValidate";
import { RegisterAPI } from "@/api/AuthApi";

const RegisterForm: React.FC = () => {
  const [registerInput, setRegisterInput] = useState({
    id: "",
    password: "",
    username: "",
    passwordCheck: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({
    id: "id 입력하세요. (최소 5자)",
    password: "password 입력하세요. (최소 5자)",
    username: "nickname 입력하세요. (최소 5자)",
    passwordCheck: "",
  });

  // input의 value를 변경하는 함수
  const handleInputChange = ({
    event,
  }: {
    event: React.ChangeEvent<HTMLInputElement>;
  }) => {
    setRegisterInput((prev) => {
      return { ...prev, [event.target.id]: event.target.value };
    });
  };

  // 유효성 검사 함수
  const handleValidate = ({
    event,
  }: {
    event: React.ChangeEvent<HTMLInputElement>;
  }) => {
    // 비밀번호 확인 유효성검사 예외처리
    if (event.target.id === "passwordCheck") {
      if (event.target.value !== registerInput.password) {
        const errorMessage = "비밀번호가 일치하지 않습니다";
        setErrors((prev) => ({ ...prev, [event.target.id]: errorMessage }));
      } else {
        setErrors((prev) => {
          const { [event.target.id]: _, ...rest } = prev;
          return { ...rest };
        });
      }
    } else {
      setErrors((prev) => ({ ...InputValidate(prev, event.target.id, event.target.value) }));
    }
  };

  const handleChangeAndValidate = ({
    event,
  }: {
    event: React.ChangeEvent<HTMLInputElement>;
  }) => {
    handleInputChange({ event });
    handleValidate({ event });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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
        errorMessage={errors.username}
        value={registerInput.username}
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
