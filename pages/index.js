import styled from "styled-components";
import PlaceCard from "@/components/PlaceCard";
import Link from "next/link";
import { MapLink } from "@/components/DetailsCard";

export default function HomePage({ initialPlaces }) {
  return (
    <div>
      <MapLink href="/create"> Add a new Place</MapLink>
      <StyledUl>
        {initialPlaces.map(({ id, name, location, image }) => (
          <PlaceCard key={id} name={name} location={location} image={image} />
        ))}
      </StyledUl>
    </div>
  );
}

const StyledUl = styled.ul`
  padding-left: 0;
`;
