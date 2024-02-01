import { useRouter } from "next/router";
import { axiosInstance } from "../utils/axios";
import useLocalStorage from "./useLocalStorage";

export const useRefreshToken = () => {
  // const [refreshToken] = useLocalStorage("refreshToken", "");
  const [refreshToken, setRefreshToken] = useLocalStorage("refreshToken", "");
  const [accessToken, setAccessToken] = useLocalStorage("accessToken", "");
  const router = useRouter();

  const logout = () => {
    setRefreshToken("");
    setAccessToken("");
    router.push("/login");
  };

  const refresh = async () => {
    try{
      const response = await axiosInstance.post(
        "/auth/admin/refresh-access-token",
        {
          refresh_token: refreshToken,
      }
      );
      setAccessToken(response.data.data.access_token);
      return response.data.data.access_token;
    }catch(e:any){
      if(e.response.status === 403){
        logout();
      }
    }
  };

  return refresh;
};
