import { useState } from "react";
import useLocalStorage, { USER_STORAGE_KEY } from "../hooks/useLocalStorage";
import { useRouter } from "next/router";
import { useContextSelector } from "use-context-selector";
import RootContext from "../../context/rootContext";
import { updateIsLogin } from "../../context/auth/action";

const Login = () => {
  const router = useRouter();
  const rootDispatch = useContextSelector(RootContext, (v) => v[1]);

  const { authUser } = useLocalStorage({ key: USER_STORAGE_KEY });
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hint, setHint] = useState("");
  const handleSubmit = () => {
    // 建立新使用者
    const newUser = {
      username,
      password,
    };
    if (authUser(newUser)) {
      router.push("/");
      rootDispatch(updateIsLogin(true));
    } else {
      setHint("使用者不存在！");
      setUsername("");
      setPassword("");
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
        <p className="text-red-700">{hint}</p>
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
