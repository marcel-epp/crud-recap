import Image from "next/image";
import styled from "styled-components";

export default function PlaceCard({ image, name, location }) {
  return (
    <Card>
      <StyledImage src={image} width={500} height={500} alt={name} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardText>{location}</CardText>
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
