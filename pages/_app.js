import { uid } from "uid";
import GlobalStyle from "../styles";
import { useState } from "react";
import { initialPlaces } from "@/lib/db.js";
import { useRouter } from "next/router";

const initialPlace = initialPlaces;

export default function App({ Component, pageProps }) {
  const [initialPlaces, setInitialPlaces] = useState(initialPlace);
  const router = useRouter();
  function handleAddPlace(newData) {
    console.log(newData);
    setInitialPlaces([...initialPlaces, { id: uid(), ...newData }]);
  }

  function handleDeletePlace(detailsID) {
    console.log(detailsID);
    setInitialPlaces(
      initialPlaces.filter((initialPlace) => initialPlace.id !== detailsID)
    );
    router.push("/");
  }

  return (
    <>
      <GlobalStyle />
      <Component
        initialPlaces={initialPlaces}
        handleAddPlace={handleAddPlace}
        handleDeletePlace={handleDeletePlace}
        {...pageProps}
      />
    </>
  );
}
