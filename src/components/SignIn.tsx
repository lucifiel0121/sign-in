import Link from "next/link";
import { useEffect, useState } from "react";
import { useContextSelector } from "use-context-selector";
import RootContext from "../../context/rootContext";
import { TimeConfig } from "../../utils/times";
import useLocalStorage, { SIGNIN_STORAGE_KEY } from "../hooks/useLocalStorage";

import { useTime } from "../hooks/useTime";

const SignIn = () => {
  const { isLogin } = useContextSelector(RootContext, (v) => v[0]);
  const [state, dispatch] = useTime();
  const { sign, display } = state;
  //@ts-ignore
  const isSignIn = sign[display.key];
  const [signState, setSignState] = useState(isSignIn);
  const { saveSignInState } = useLocalStorage({ key: SIGNIN_STORAGE_KEY });

  const handleClick = () => {
    // check: has sign in
    console.log("test");
    if (isSignIn) {
      return;
    }
    saveSignInState(state);
    setSignState(true);
    checkTimeDisplay();
  };

  //new Date("2022-12-23T15:24:43.391Z");
  /**
   * time cofig:
   * value         |        08:00       11:00       19:00    23:00
   * key           |    dayBegin   afternoonBegin  afternoonEnd   dayEnd
   *               |-----------|-----------|------------|----------|-------->
   * range         |  無效打卡   |   上午    |    中午     |    晚上   |  無效打卡
   */
  const checkTimeDisplay = (time = new Date("2021-12-23T18:24:43.391Z")) => {
    const hours = time.getHours();
    if (hours < TimeConfig.dayBegin)
      dispatch({ type: "invalid", time: time, signState: signState });
    if (hours >= TimeConfig.dayBegin && hours < TimeConfig.afternoonBegin)
      dispatch({ type: "morning", time: time, signState: signState });
    if (hours >= TimeConfig.afternoonBegin && hours < TimeConfig.afternoonEnd)
      dispatch({ type: "afternoon", time: time, signState: signState });
    if (hours >= TimeConfig.afternoonEnd && hours < TimeConfig.dayEnd)
      dispatch({ type: "evening", time: time, signState: signState });
    if (hours >= TimeConfig.dayEnd)
      dispatch({ type: "invalid", time: time, signState: signState });
  };
  useEffect(() => {
    // checkTimeDisplay();
  }, []);

  return (
    <>
      <h1 className="text-5xl font-extrabold tracking-tight  sm:text-[5rem]">
        打卡狀態: <span className="text-[#7a66ff]">{state.display.value}</span>
      </h1>
      {isLogin ? (
        state.display.key === "invalid" || signState ? (
          <button className="rounded-xl bg-slate-700/80 p-4 text-white">
            不可簽到
          </button>
        ) : (
          <button
            onClick={handleClick}
            className="rounded-xl bg-slate-700 p-4 text-white	hover:bg-slate-700/90"
          >
            簽到
          </button>
        )
      ) : (
        <Link
          href="/login"
          className="rounded-xl bg-slate-700 p-4 text-white	hover:bg-slate-700/90"
        >
          登入
        </Link>
      )}
    </>
  );
};
export default SignIn;
