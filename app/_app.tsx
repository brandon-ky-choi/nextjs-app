import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { appStore } from "./store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={appStore}>
      <Component {...pageProps} />
    </Provider>
  );
}
