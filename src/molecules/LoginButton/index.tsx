import Button from "@/atoms/Button";
import React from "react";
import Image from "next/image";
import useModal from "@/hook/useModal";
import MapModal from "@/organism/Modal/MapModal";

const HeaderOptions = () => {
  const { open, ChangeModalState } = useModal();

  return (
    <>
      {open && <MapModal closeModal={ChangeModalState} />}
      <Button type={"linkText"} onClick={ChangeModalState}>
        <Image
          src="/assets/icon/login.svg"
          alt="로그인 버튼"
          width={35}
          height={35}
        />
      </Button>
    </>
  );
};

export default HeaderOptions;
