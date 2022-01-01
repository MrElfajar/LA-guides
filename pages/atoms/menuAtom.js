const { atom } = require("recoil");

export const menuListAtom = atom({
  key: "menuListAtom",
  default: [
    { name: "Home" },
    {
      name: "Food Recipes",
    },
    { name: "Special Items" },
    { name: "About" },
  ],
});

export const menuAtom = atom({
  key: "menuAtom",
  default: "Home",
});
