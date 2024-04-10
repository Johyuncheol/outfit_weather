import Button from "@/atoms/Button";
import React from "react";
import Image from "next/image";
import MapModal from "@/organism/Modal/MapModal";
import useModal from "@/hook/useModal";
const HeaderOptions = () => {
  const { open, ChangeModalState } = useModal();

  return (
    <>
      {open && <MapModal closeModal={ChangeModalState} />}
      <Button type={"linkText"} onClick={ChangeModalState}>
        <Image
          src="/assets/icon/earth.svg"
          alt="지역 변경"
          width={35}
          height={35}
        />
      </Button>
    </>
  );
};

export default HeaderOptions;
