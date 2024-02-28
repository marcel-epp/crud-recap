import styled from "styled-components";
import { useRouter } from "next/router";

export default function Form({ handleAddPlace }) {
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    handleAddPlace(data);
    router.push("/");
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" id="name" />

      <label htmlFor="location">Location:</label>
      <input type="text" name="location" id="location" />

      <label htmlFor="mapURL">Map URL:</label>
      <input type="text" name="mapURL" id="mapURL" />

      <label htmlFor="image">Image:</label>
      <input type="text" name="image" id="image" />

      <label htmlFor="description">Description:</label>
      <textarea
        name="description"
        id="description"
        cols="30"
        rows="10"
      ></textarea>

      <Styledbutton type="submit">Submit</Styledbutton>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.8em;
  background-color: #e7e7e7;
  margin: 1em;
  padding: 1em;
`;

const Styledbutton = styled.button`
  width: 50%;
  align-self: center;
`;
