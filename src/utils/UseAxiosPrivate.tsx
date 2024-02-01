import { axiosPrivateInstance } from "@/utils/axios";
import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";
import { useRefreshToken } from "./useRefreshToken";

export const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const [accessToken, setAccessToken] = useLocalStorage("accessToken", "");

  //   const { user } = useUser();

  useEffect(() => {
    const requestInterceptor = axiosPrivateInstance.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
            config.headers["Authorization"] = `Bearer ${accessToken}`;
        }
        return config;
      },
      (err) => Promise.reject(err)
    );

    const responseInterceptor = axiosPrivateInstance.interceptors.response.use(
      (res) => res,
      async (err) => {
        try {
          const originalRequest = err?.config;
          if (err?.response?.status === 403 || err?.response?.status === 401  && !originalRequest.sent) {
            originalRequest.sent = true;
            const accessToken = await refresh();
            setAccessToken(accessToken);
            originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
            return axiosPrivateInstance(originalRequest);
          }
          return Promise.reject(err);
        } catch (error) {
          console.log(error);
          return Promise.reject(error);
        }
      }
    );

    return () => {
      axiosPrivateInstance.interceptors.request.eject(requestInterceptor);
      axiosPrivateInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [accessToken, refresh]);

  return axiosPrivateInstance;
};

export default useAxiosPrivate;
