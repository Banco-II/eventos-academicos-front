import Forms from "../../components/Forms";
import CreateMap from "../../components/Maps";
import { Container } from "./style";

export default function HomePage() {
  return (
    <>
      <Container>
        <Forms />
        <CreateMap/>
      </Container>
    </>
  );
}
