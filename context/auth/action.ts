export const UPDATE_IS_LOGIN = "UPDATE_IS_LOGIN";

export function updateIsLogin(payload: boolean) {
  return {
    type: UPDATE_IS_LOGIN,
    payload,
  };
}
