import { checkDuringTime } from "../../utils/times";

const SignIn = () => {
  return (
    <>
      <h1 className="text-5xl font-extrabold tracking-tight  sm:text-[5rem]">
        打卡 <span className="text-[#7a66ff]">{checkDuringTime()}</span>
      </h1>
      <button className="rounded-xl bg-slate-700 p-4 text-white	hover:bg-slate-700/90">
        簽到
      </button>
    </>
  );
};
export default SignIn;
