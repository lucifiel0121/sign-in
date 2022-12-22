import { type AppType } from "next/dist/shared/lib/utils";
import { RootProvider } from "../../context/rootContext";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <RootProvider>
      <Component {...pageProps} />;
    </RootProvider>
  );
};

export default MyApp;
