const setAccessToken = (user: any) => {
  localStorage.setItem("accessToken", JSON.stringify(user));
};
const setRefreshToken = (user: any) => {
  localStorage.setItem("RefreshToken", JSON.stringify(user));
};

const getAccessToken = () => {
  return JSON.parse(localStorage.getItem("accessToken") || "{}");
};
const getRefreshToken = () => {
  return JSON.parse(localStorage.getItem("RefreshToken") || "{}");
};

const Token = {
  setAccessToken,
  setRefreshToken,
  getAccessToken,
  getRefreshToken,
};
export default Token;
