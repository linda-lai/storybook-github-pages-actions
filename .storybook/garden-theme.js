import { DEFAULT_THEME, getColor } from "@zendeskgarden/react-theming";
import { create } from "@storybook/theming";

export default create({
  base: "light",

  colorPrimary: getColor("kale"),
  colorSecondary: getColor("kale", 600),

  // UI
  appBg: getColor("grey", 100),
  appContentBg: getColor("white"),
  appBorderColor: getColor("grey", 300),
  appBorderRadius: 0,

  // Typography
  fontBase: DEFAULT_THEME.fonts.system,
  fontCode: DEFAULT_THEME.fonts.mono,

  // Text colors
  textColor: getColor("grey", 600),
  textInverseColor: getColor("grey", 800),
  textMutedColor: getColor("grey", 400),

  // Toolbar default and active colors
  barTextColor: getColor("grey", 600),
  barSelectedColor: getColor("grey", 800),
  barBg: getColor("white"),

  // Form colors
  inputBg: "white",
  inputBorder: getColor("grey", 200),
  inputTextColor: getColor("grey", 800),
  inputBorderRadius: 2,

  brandTitle: "Web Widget Messenger - Conversation Components",
  brandUrl: "https://github.com/zendeskgarden/react-components",
  brandImage:
    "https://seeklogo.com/images/Z/zendesk-logo-235EFDE864-seeklogo.com.png",
});
