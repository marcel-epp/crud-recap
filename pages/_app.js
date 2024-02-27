import GlobalStyle from "../styles";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [initialPlaces, setInitialPlaces] = useState();

  function handleAddPlace(NewData) {
    console.log("Ich bin handleAppPlace...");
    console.log(NewData);
  }

  return (
    <>
      <GlobalStyle />
      <Component handleAddPlace={handleAddPlace} {...pageProps} />
    </>
  );
}
