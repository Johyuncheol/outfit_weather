"use client";
import React, { useRef, useState } from "react";
import SubmitButton from "@/atoms/Button/SubmitButton";
import ValidateInput from "@/molecules/ValidateInput";
import { InputValidate } from "@/util/InputValidate";
import { loginAPI } from "@/api/AuthApi";
import { setUser } from "@/redux/modules/user";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const formRef = useRef<HTMLFormElement | null>(null);

  // 유효성 검사 함수
  const handleValidate = ({
    event,
  }: {
    event: React.ChangeEvent<HTMLInputElement>;
  }) => {
    setErrors((prev) => ({
      ...InputValidate(prev, event.target.id, event.target.value),
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return console.log("form 태그 Ref 에러");

    const formData = new FormData(formRef.current);
    const id = formData.get("id") as string;
    const password = formData.get("password") as string;

    if (Object.keys(errors).length === 0) {
      // 유효성 검사 통과
      console.log("로그인 폼이 제출되었습니다.");
      const res = await loginAPI({ id, password });
      if (res) {
        await dispatch(setUser(res));
        router.push("/main");
      }
    } else {
      // 유효성 검사 실패
      console.log("로그인 폼 유효성 검사에 실패하였습니다.");
    }
  };

  return (
    <form onSubmit={(e) => handleFormSubmit(e)} ref={formRef}>
      <ValidateInput
        id={"id"}
        label={"아이디"}
        type={"text"}
        errorMessage={errors.id}
        required={true}
        onBlur={handleValidate}
      />
      <ValidateInput
        id={"password"}
        label={"비밀번호"}
        type={"password"}
        errorMessage={errors.password}
        required={true}
        onBlur={handleValidate}
      />

      <div className="flex justify-center">
        <SubmitButton>로그인</SubmitButton>
      </div>
    </form>
  );
};

export default LoginForm;
