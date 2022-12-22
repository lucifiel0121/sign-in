import { type NextPage } from "next";
import NavBar from "../components/NavBar";

import Register from "../components/Register";

const RegisterPage: NextPage = () => {
  return (
    <>
      <NavBar />
      <main className="container flex min-h-screen flex-col items-center">
        <Register />
      </main>
    </>
  );
};

export default RegisterPage;
