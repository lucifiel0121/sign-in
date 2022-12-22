import { type NextPage } from "next";
import Head from "next/head";
import InfoCard from "../components/InfoCard";
import NavBar from "../components/NavBar";
import SignIn from "../components/SignIn";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>sign in</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className="flex min-h-screen flex-col items-center ">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <SignIn />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link href="/register" className="flex">
              <InfoCard
                title="註冊成為使用者"
                content="需要先註冊才可以登入，需要登入後才可以打卡。"
              />
            </Link>
            <InfoCard
              title="時間顯示說明"
              content={
                <div className="text-lg">
                  <p>08:00 ~ 10:59 顯示為上午</p>
                  <p>11:00 ~ 18:59 顯示為上午</p>
                  <p>19:00 ~ 22:59 顯示為晚上</p>
                  <p className="text-red-700">* 其餘時間皆為無效打卡</p>
                </div>
              }
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
