import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export default function DetailsCard({ detailsID }) {
  return (
    <>
      <MapLink href="/"> Back to HomePage</MapLink>
      <Card>
        <StyledImage
          src={detailsID.image}
          width={500}
          height={500}
          alt={detailsID.name}
        />
        <CardBody>
          <CardTitle>{detailsID.name}</CardTitle>
          <CardText>{detailsID.location}</CardText>
          <CardText>{detailsID.description}</CardText>
          <MapLink href={detailsID.mapURL} target="_blank">
            View on Google Maps
          </MapLink>
        </CardBody>
      </Card>
    </>
  );
}

const Card = styled.div`
  background-color: #e7e7e7;
  margin: 1em;
  border: 1px solid grey;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
`;

const CardBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 0.1em;
  align-items: center;
  justify-content: space-between;
  @media only screen and (min-width: 600px) {
    flex-direction: row;
  }
`;
export const MapLink = styled(Link)`
  padding: 1em;
  text-decoration: none;
`;

const CardTitle = styled.h2`
  padding: 0 0.5em;
`;

const CardText = styled.p`
  padding: 0 1em;
`;
