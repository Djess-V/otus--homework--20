import React, { FC } from "react";
import "./header.css";

interface IHeaderProps {
  size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  text: string;
  click?: () => void;
}

export const Header: FC<IHeaderProps> = ({
  size,
  text,
  click = () => null,
}) => {
  const Heading = size || "h1";
  return (
    <Heading onClick={click} className="header" data-testid="header-test">
      {text}
    </Heading>
  );
};
