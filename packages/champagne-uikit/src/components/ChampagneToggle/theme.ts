import { darkColors, lightColors } from "../../theme/colors";
import { ChampagneToggleTheme } from "./types";

export const light: ChampagneToggleTheme = {
  handleBackground: lightColors.backgroundAlt,
  handleShadow: lightColors.textDisabled,
};

export const dark: ChampagneToggleTheme = {
  handleBackground: darkColors.backgroundAlt,
  handleShadow: darkColors.textDisabled,
};
