import { ContainerForm,  Title } from "./style";

export default function Forms() {
  return (
    <>
      <ContainerForm>
        <Title>Create new <br/> Event</Title>
        <label for="name">Name</label>
        <input id="name" type="text" placeholder="Type the event name"/>
        <label for="description">Description</label>
        <input id="description" type="text" placeholder="Describe the event"/>
        <button>create</button>
      </ContainerForm>
    </>
  );
}
