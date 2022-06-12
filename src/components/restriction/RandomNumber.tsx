import { type } from "@testing-library/user-event/dist/type";
import React from "react";

type RandomNumberType = {
  value: number;
};

type PositiveNumberType = RandomNumberType & {
  isPositive: boolean;
  isNegative: never;
  isZero: never;
};

type NegativeNumberType = RandomNumberType & {
  isNegative: boolean;
  isPositive: never;
  isZero: never;
};

type Zero = RandomNumberType & {
  isZero: boolean;
  isNegative: never;
  isPositive: never;
};

type RandomNumberProps = PositiveNumberType | NegativeNumberType | Zero;

export const RandomNumber = ({
  isZero,
  isNegative,
  isPositive,
  value,
}: RandomNumberProps) => {
  return (
    <div>
      Value: {value}
      <br />
      <br />
      {isPositive && "positive"}
      {isNegative && "negative"}
      {isZero && "Zero"}
    </div>
  );
};
