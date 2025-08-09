import { _horizontalPadding, SCREEN_WIDTH } from "./constant";
import { RFValue } from "react-native-responsive-fontsize";

export const getMemoirCardGap = () => {
  return RFValue(10);
};
export const getMemoirCardBorderRadius = () => {
  return RFValue(14);
};

export const getCardWidth = () => {
  "worklet";
  return (SCREEN_WIDTH - _horizontalPadding * 2 - getMemoirCardGap()) / 2;
};

export const getCardHeight = () => {
  "worklet";
  return SCREEN_WIDTH * 0.65;
};
