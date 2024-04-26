import React from "react";
import Image from "next/image";
import AuthModal from "../Modal/AuthModal";
import { SquareButton } from "@/atoms/Button";
import Span from "@/atoms/Span";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const WeatherNavSection = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div>
      {pathname === "/" ? (
        <div className="absolute bottom-[10%] right-5">
          <AuthModal>
            <SquareButton>
              <Span type={"subTitle"}>시작하기</Span>
            </SquareButton>
          </AuthModal>
        </div>
      ) : (
        <>
          <div className="absolute bottom-[15%] right-5">
            <SquareButton onClick={() => router.push("/closet")}>
              <Span type={"subTitle"}>내 옷장으로</Span>
            </SquareButton>
          </div>

          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
            <Image
              src={"/assets/icon/arrow.svg"}
              alt={"아래쪽 화살표"}
              width={60}
              height={35}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default WeatherNavSection;
