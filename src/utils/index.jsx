/* eslint-disable no-fallthrough */
/* eslint-disable no-useless-concat */
export const renderGradient = (colorId) => {
  let gradient = "";

  switch (colorId) {
    case 1:
      gradient = `${"to right" + "," + "#42275a" + "," + "#734b6d"}`;
      return gradient;
    case 2:
      gradient = `${"to right" + "," + "#BDC1CB" + "," + "#62676B"}`;
      return gradient;
    case 3:
      gradient = `${"to right" + "," + "#007fba" + "," + "#BDC1CB"}`;
      return gradient;
    default:
      return gradient;
  }
};
