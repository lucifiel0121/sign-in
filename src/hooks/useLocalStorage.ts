export const STORAGE_KEY = "USER_STORAGE_KEY";

interface IUser {
  username: string;
  password: string;
}

export default function useLocalStorage({
  key = STORAGE_KEY,
  initialValue = null,
}: {
  key?: string;
  initialValue?: string | null;
}) {
  const getLocalStorageValue = () => {
    try {
      // Get from local storage by key
      const item = localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue, when non-initialValue return false
      console.error("Some things wrong when get local storage value.");
      return initialValue || false;
    }
  };

  const setLocalStorageValue = (valueToStore: string) => {
    try {
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error("Some things wrong when set local storage value.");
      // A more advanced implementation would handle the error case
    }
  };

  const findUser = (username: string) => {
    const storage = JSON.parse(getLocalStorageValue()) || [];
    return storage.some((user: IUser) => user.username === username);
  };

  const authUser = (user: IUser) => {
    const storage = JSON.parse(getLocalStorageValue()) || [];
    return storage.some(
      (i: IUser) => user.username === i.username && user.password === i.username
    );
  };

  const insertUser = (user: IUser) => {
    const value = JSON.parse(getLocalStorageValue()) || [];
    const storage = [...value, user];
    setLocalStorageValue(JSON.stringify(storage));
    console.log("註冊成功！");
  };

  return { findUser, insertUser, authUser };
}
