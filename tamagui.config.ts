import { defaultConfig } from "@tamagui/config/v4";
import { createTamagui, createTokens } from "tamagui";

// Custom Styles
const customTokens = createTokens({
  color: {
    // Red scale centered on brand primary #ef5d5a
    red1: "#fff5f5",
    red2: "#ffebeb",
    red3: "#ffdede",
    red4: "#ffcaca",
    red5: "#ffb2b1",
    red6: "#ff9b9a",
    red7: "#ff8382",
    red8: "#ff6e6b",
    red9: "#ef5d5a", // primary
    red10: "#d85451",
    red11: "#b64642",
    red12: "#3f1c1c",
  },
  radius: defaultConfig.tokens.radius,
  zIndex: defaultConfig.tokens.zIndex,
  space: defaultConfig.tokens.space,
  size: defaultConfig.tokens.size,
});

const baseTheme = defaultConfig.themes.light_blue;

const config = {
  ...defaultConfig,
  tokens: customTokens,
  themes: {
    ...defaultConfig.themes,
    red: {
      ...baseTheme,
      background: "$red1",
      backgroundHover: "$red2",
      backgroundPress: "$red3",
      backgroundFocus: "$red2",
      color: "$red12",
      colorHover: "$red12",
      colorPress: "$red12",
      colorFocus: "$red12",
      borderColor: "$red6",
      borderColorHover: "$red7",
      borderColorPress: "$red8",
      borderColorFocus: "$red7",
    },
  },
};

export const tamaguiConfig = createTamagui(config);

export default tamaguiConfig;

export type Conf = typeof tamaguiConfig;

declare module "tamagui" {
  interface TamaguiCustomConfig extends Conf {}
}
