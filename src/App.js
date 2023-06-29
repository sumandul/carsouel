import React from "react";
import Carousel from "./components/carousel";
import { imagelist } from "./components/carousel/imagelist";

const App = () => {
  return (
    <div>
      <Carousel image={imagelist} />
    </div>
  );
};

export default App;
