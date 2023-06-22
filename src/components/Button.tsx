import React, { FC } from "react";

type Props = {
  label: string;
  disabled?: boolean;
  click: () => void;
};

export const Button: FC<Props> = ({
  label,
  disabled = false,
  click = () => null,
}) => {
  return (
    <button onClick={click} disabled={disabled}>
      {label}
    </button>
  );
};
