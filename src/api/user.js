import $api from ".";

// 登录接口
export const login = (loginInfo) => {
  return $api.post("/authentication", {
    ...loginInfo,
    strategy: "local",
  });
};
