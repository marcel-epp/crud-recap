import DetailsCard from "@/components/DetailsCard";
import { useRouter } from "next/router";
import EditPlaces from "./edit";

export default function DetailsPage({ initialPlaces, handleDeletePlace }) {
  const router = useRouter();
  console.log(initialPlaces);

  const detailsID = initialPlaces.find(({ id }) => id === router.query.id);
  console.log(detailsID);

  if (!detailsID) {
    return <h1>"Sorry, no"</h1>;
  }

  return (
    <>
      <DetailsCard
        detailsID={detailsID}
        handleDeletePlace={handleDeletePlace}
      />
      <EditPlaces initialPlaces={initialPlaces} />
    </>
  );
}
