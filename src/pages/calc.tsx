import { type NextPage } from "next";
import Calc from "../components/Calc";
import NavBar from "../components/NavBar";

const CalcPage: NextPage = () => {
  return (
    <>
      <NavBar />
      <main className="container flex min-h-screen flex-col items-center">
        <Calc />
      </main>
    </>
  );
};

export default CalcPage;
