"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isloginAPI } from "@/api/AuthApi";

const PrivateRouter = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [auth, setAuth] = useState(false);
  
  useEffect(() => {
    const checkAuthentication = async () => {
      // 클라이언트 측에서 사용자의 인증 상태 확인
      const isAuthenticated = await isloginAPI();

      // 로그인 안되어있으면 /로 보냄
      if (isAuthenticated === 401) {
        alert("로그인이 필요합니다");
        router.push("/");
      } else {
        setAuth(true); // 인증 상태가 확인된 경우에만 상태 업데이트
      }
    };

    checkAuthentication();
  });

  return <div>{auth && children}</div>;
};

export default PrivateRouter;
