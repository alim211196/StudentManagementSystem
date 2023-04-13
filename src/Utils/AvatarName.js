export const avatarName = (str) => {
  let words = str.split(" ");
  let nametitle = "";
  if (words.length >= 2) {
    let firstletter = words[0][0];
    let secandletter = words[1][0];
    nametitle = firstletter + secandletter;
  } else {
    let firstletter = words[0][0];
    nametitle = firstletter;
  }
  return nametitle.toUpperCase();
};
