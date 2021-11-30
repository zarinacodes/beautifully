/* eslint-disable import/no-anonymous-default-export */
import Filter from "./Filter";
import Filters from "../ui/filters";
import Container from "../ui/container";
import useWindowSize from "../hooks/useWindowSize";

export default () => {
  const { width } = useWindowSize();

  const filters =
    width > 822 ? (
      <>
        <Filter name="Categories" />
        <Filter name="Collection" />
        <Filter name="Sizes" />
      </>
    ) : (
      <Filter name="Categories" />
    );

  return (
    <Filters>
      <Container>{filters}</Container>
      <Container>
        <Filter name="Most Recent" modifiers={["recent", "left"]} />
      </Container>
    </Filters>
  );
};
