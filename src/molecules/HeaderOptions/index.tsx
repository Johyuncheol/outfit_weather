import Button from "@/atoms/Button";
import React from "react";
import Image from "next/image";

const HeaderOptions = () => {
  return (
    <div className="flex gap-4">
      <Button type={"linkText"}>
        <Image
          src="/assets/icon/login.svg"
          alt="로그인 버튼"
          width={35}
          height={35}
        />
      </Button>
      <Button type={"linkText"}>
        <Image
          src="/assets/icon/earth.svg"
          alt="지역 변경"
          width={35}
          height={35}
        />
      </Button>
    </div>
  );
};

export default HeaderOptions;
