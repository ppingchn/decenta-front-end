const ACCESS_TOKEN = 'accessToken';
export const getAccessToken = () => {
  return localStorage.getItem(ACCESS_TOKEN);
};
export const setAccessToken = (payload) => {
  return localStorage.setItem(ACCESS_TOKEN, payload);
};
export const removeAccessToken = () => {
  return localStorage.removeItem(ACCESS_TOKEN);
};
