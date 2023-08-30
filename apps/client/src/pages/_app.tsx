import type { AppProps } from "next/app";
import { Theme } from "ui/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Theme colorScheme="dark">
      <Component {...pageProps} />
    </Theme>
  );
}
