import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const Register = () => {
  const { findUser, insertUser } = useLocalStorage({});
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    // 建立新使用者
    const newUser = {
      username,
      password,
    };
    if (!findUser(username)) {
      insertUser(newUser);
    } else {
      console.error("使用者已經存在！！");
    }
  };

  return (
    <>
      <p className="p-4 text-2xl">註冊新使用者</p>
      <div className="container flex flex-col justify-center">
        <div className="flex p-4">
          <p className="mr-2 font-semibold">使用者名稱:</p>
          <input
            placeholder="使用者名稱"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex p-4">
          <p className="mr-2 font-semibold">密碼:</p>
          <input
            placeholder="密碼"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </div>
        <div className="flex justify-center">
          <button
            className="w-32 rounded-md bg-black py-1 font-semibold text-white"
            onClick={handleSubmit}
          >
            註冊
          </button>
        </div>
      </div>
    </>
  );
};
export default Register;
