const { atom } = require("recoil");

export const foodAtom = atom({
  key: "foodAtom",
  default: [],
});

export const foodLoadingAtom = atom({ key: "foodLoadingAtom", default: true });
