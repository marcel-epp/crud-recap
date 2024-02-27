import { initialPlaces } from "@/lib/db.js";
import styled from "styled-components";
import PlaceCard from "@/components/PlaceCard";

const initialPlace = initialPlaces;

export default function HomePage() {
  return (
    <div>
      <StyledUl>
        {initialPlace.map(({ id, name, location, image }) => (
          <PlaceCard key={id} name={name} location={location} image={image} />
        ))}
      </StyledUl>
    </div>
  );
}

const StyledUl = styled.ul`
  padding-left: 0;
`;
