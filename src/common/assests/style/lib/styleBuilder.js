import { Platform , StyleSheet } from 'react-native';
import { StyleClass } from '../';

/**

  -->  Always Import this function to create any style for your Component. <--

**/

export function StyleBuilder(classs) {
  let style = {};
  if (classs) {
    let classes = classs.split(' ');
    for (let clas of classes) {
      if (StyleClass['@' + Platform.OS + ':' + clas]) {
        Object.assign(style, StyleClass['@' + Platform.OS + ':' + clas]);
      }
      else if (StyleClass[clas]) {
        Object.assign(style, StyleClass[clas]);
      }
    }
  }

  return style;
}
