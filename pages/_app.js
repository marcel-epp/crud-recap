import { uid } from "uid";
import GlobalStyle from "../styles";
import { useState } from "react";
import { initialPlaces } from "@/lib/db.js";

const initialPlace = initialPlaces;

export default function App({ Component, pageProps }) {
  const [initialPlaces, setInitialPlaces] = useState(initialPlace);

  function handleAddPlace(newData) {
    console.log("Ich bin handleAddPlace...");
    console.log(newData);
    setInitialPlaces([...initialPlaces, { id: uid(), ...newData }]);
  }

  return (
    <>
      <GlobalStyle />
      <Component
        initialPlaces={initialPlaces}
        handleAddPlace={handleAddPlace}
        {...pageProps}
      />
    </>
  );
}
