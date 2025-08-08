import { GAP } from "@/app/(deleteAnimation)/Components/AllMemoirs";
import { _horizontalPadding, SCREEN_WIDTH } from "./constant";

export const getCardWidth = () => {
  "worklet";
  return (SCREEN_WIDTH - _horizontalPadding * 2 - GAP) / 2;
};

export const getCardHeight = () => {
  "worklet";
  return SCREEN_WIDTH * 0.65;
};
