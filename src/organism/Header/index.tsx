"use client";
import React, { useEffect } from "react";
import Span from "@/atoms/Span";
import MapModal from "../Modal/MapModal";
import AuthModal from "../Modal/AuthModal";
import { useSelector,useDispatch } from "react-redux";
import { RootState } from "@/redux/const";
import { IconButton, LinkTextButton } from "@/atoms/Button";
import { GetSessionStorage } from "@/util/HandleSessionStorage";
import { setUser } from "@/redux/modules/user";
const Header = () => {
  const dispatch=useDispatch();
  const { nickname } = useSelector((state: RootState) => state.userReducer);

  useEffect(() => {
    const user = GetSessionStorage("nickname");
    if (user) {
      dispatch(setUser(user));
    }
  }, [dispatch]);
  
  return (
    <header className="fixed top-0 w-full z-[50] bg-slate-100 flex p-5 items-center justify-between min-w-[375px]">
      <Span type={"title"}>OutfitWeather</Span>
      <div className="flex gap-4">
        {nickname ? (
          <LinkTextButton
            onClick={() => {
              alert("마이페이지 준비 중 입니다");
            }}
          >
            <Span type={"subTitle3"}>{`${nickname} 님`}</Span>
          </LinkTextButton>
        ) : (
          <AuthModal>
            <IconButton
              iconSrc={"/assets/icon/login.svg"}
              altText={"로그인 버튼"}
            />
          </AuthModal>
        )}
        <MapModal>
          <IconButton
            iconSrc={"/assets/icon/earth.svg"}
            altText={"지역 변경 버튼"}
          />
        </MapModal>
      </div>
    </header>
  );
};

export default Header;
