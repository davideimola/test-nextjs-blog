import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import "~/styles/tokens.css"; // Includes CSS variables
import "~/styles/prism.css"; // Syntax highlight

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default api.withTRPC(MyApp);
