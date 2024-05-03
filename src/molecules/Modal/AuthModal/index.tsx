import React, { useState } from "react";
import ModalFrame from "@/molecules/Frame/ModalFrame";
import LoginForm from "@/molecules/Form/LoginForm";
import RegisterForm from "@/molecules/Form/RegisterForm";
import SubmitButton from "@/atoms/Button/SubmitButton";
import useModal from "@/hook/useModal";

interface AuthModalProps {
  children: React.ReactNode;
}
const AuthModal: React.FC<AuthModalProps> = ({ children }) => {
  const [state, setState] = useState("로그인");
  const { ChangeModalState, open } = useModal();
  const ChangeState = () => {
    setState((prev) => {
      const state = prev === "로그인" ? "회원가입" : "로그인";
      return state;
    });
  };

  return (
    <>
      <div onClick={ChangeModalState}>{children}</div>

      {open && (
        <ModalFrame closeModal={ChangeModalState} title={state}>
          {state === "로그인" ? <LoginForm /> : <RegisterForm />}
          <div className="flex justify-center">
            <SubmitButton onClick={ChangeState}>
              {state === "로그인" ? "회원가입" : "로그인"}
            </SubmitButton>
          </div>
        </ModalFrame>
      )}
    </>
  );
};

export default AuthModal;
