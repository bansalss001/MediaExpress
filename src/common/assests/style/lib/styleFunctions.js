import { Platform, Dimensions, PixelRatio } from 'react-native';
import { FontFamily, AdditionalFontStyle } from '../../constants/index';
const DPI = PixelRatio.get();

export function FontForWeight(fontFamily, weight) {
  if (weight == undefined ) {
    weight = 'regular';
  }
  if (AdditionalFontStyle[weight] == undefined ) {
    weight = 'regular';
  }
  if (fontFamily == undefined ) {
    fontFamily = 'proximaNova';
  }
  if (FontFamily[fontFamily] == undefined ) {
    fontFamily = 'proximaNova';
  }
  return FontFamily[fontFamily] + AdditionalFontStyle[weight];

}

export function CalculateFontSize(sz) {
  if (DPI === 3) {
    return sz + 1;
  } else if (DPI === 3.5) {
    return sz + 2;
  } else {
    return sz;
  }
  return sz;
}

export function CalculateLineHeight(height) {
  if (DPI === 3.5) {
    return height + 2;
  } else if (DPI === 3) {
    return height;
  } else {
    return height + 1;
  }
}
export const AddCommasToNumber = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
