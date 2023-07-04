import React, { FC } from "react";

interface IImageProps {
  src: string;
  width?: number;
  height?: number;
}

export const Image: FC<IImageProps> = ({ src, width = 300, height = 300 }) => (
  <img
    src={src}
    data-testid="image-test"
    width={`${width}px`}
    height={`${height}px`}
    alt="Image"
  />
);
