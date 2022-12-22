import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const Login = () => {
  const { authUser } = useLocalStorage({});
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    // 建立新使用者
    const newUser = {
      username,
      password,
    };
    console.log("f", authUser(newUser));
    if (authUser(newUser)) {
      console.log("使用者存在");
    } else {
      console.error("使用者不存在！");
    }
  };

  return (
    <>
      <p className="p-4 text-2xl">登入</p>
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
            登入
          </button>
        </div>
      </div>
    </>
  );
};
export default Login;
