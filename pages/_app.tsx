import { useEffect } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import AOS from "aos";
import { UserContext } from "../context/userContext";
// import { focusHandling } from "cruip-js-toolkit";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/style.css";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
    // focusHandling("outline");
  }, [router.pathname]);

  return (
    <UserContext>
      <Component {...pageProps} />
    </UserContext>
  );
}
export default MyApp;
