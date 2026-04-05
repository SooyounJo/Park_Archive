import "@/styles/globals.css";
import { CursorDot } from "@/components/common/CursorDot";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <CursorDot />
    </>
  );
}

