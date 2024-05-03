import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isloginAPI } from "@/api/AuthApi";

const PrivateRouter = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [auth, setAuth] = useState(false);
  
  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        // Storage Access API를 사용하여 쿠키 액세스 권한 확인
        if ('hasStorageAccess' in document) {
          const hasAccess = await document.hasStorageAccess();
          if (!hasAccess) {
            await document.requestStorageAccess();
          }
        }

        // 사용자의 인증 상태 확인
        const isAuthenticated = await isloginAPI();
        
        if (isAuthenticated === 401) {
          alert("로그인이 필요합니다");
          router.push("/");
        } else {
          setAuth(true);
        }
      } catch (error) {
        console.error("서드파티쿠키 권한에러:", error);
      }
    };

    checkAuthentication();
  }, []);

  return <div>{auth && children}</div>;
};

export default PrivateRouter;
