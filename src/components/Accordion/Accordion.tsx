import React, { FC, useState } from "react";
import { Header } from "../Header/Header";
import { Hr } from "../Hr/Hr";
import { Paragraph } from "../Paragraph/Paragraph";

interface IAccordionProps {
  size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  header: string;
  text: string;
  countP?: number;
}

export const Accordion: FC<IAccordionProps> = ({
  size = "h1",
  header,
  text,
  countP = 1,
}) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div data-testid="accordion-test">
      <Header click={handleClick} size={size} text={header} />
      <Hr />
      {show &&
        [...Array(countP)].map((_, i) => <Paragraph key={i} text={text} />)}
    </div>
  );
};
