import { type NextPage } from "next";
import Login from "../components/Login";
import NavBar from "../components/NavBar";

const LoginPage: NextPage = () => {
  return (
    <>
      <NavBar />
      <main className="container flex min-h-screen flex-col items-center">
        <Login />
      </main>
    </>
  );
};

export default LoginPage;
