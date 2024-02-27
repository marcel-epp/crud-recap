import styled from "styled-components";

export default function Form({ handleAddPlace }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    handleAddPlace(data);
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="locationName">Name:</label>
      <input type="text" name="locationName" id="locationName" />

      <label htmlFor="location">Location:</label>
      <input type="text" name="location" id="location" />

      <label htmlFor="mapURL">Map URL:</label>
      <input type="text" name="mapURL" id="mapURL" />

      <label htmlFor="locationImageUrl">Image:</label>
      <input type="text" name="locationImageUrl" id="locationImageUrl" />

      <label htmlFor="locationDescription">Description:</label>
      <textarea
        name="locationDescription"
        id="locationDescription"
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
