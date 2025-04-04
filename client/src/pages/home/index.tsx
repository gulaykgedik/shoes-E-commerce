import { FC } from "react";
import Hero from "./hero";
import List from "./list";
import Heading from "./heading";

const Home: FC = () => {
  return (
    <div>
      <Hero />

      <Heading />

      <List />
    </div>
  );
};

export default Home;
