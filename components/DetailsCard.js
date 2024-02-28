import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export default function DetailsCard({ detailsID }) {
  return (
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
        <iframe
          src={detailsID.mapURL}
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </CardBody>
    </Card>
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

const CardTitle = styled.h2`
  padding: 0 0.5em;
`;

const CardText = styled.p`
  padding: 0 1em;
`;
