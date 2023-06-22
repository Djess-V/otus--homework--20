import React, { FC } from "react";
import { Button } from "./components/Button";

export const App: FC = () => {
  const handleClick = () => {
    console.log("click");
  };

  return <Button label="Send" click={handleClick} />;
};
