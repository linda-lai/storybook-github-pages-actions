import { create } from "@storybook/theming/create";
import { addons } from "@storybook/addons";

const kale = "#05363D";
const forest = "#5FAE91"; // 218D66
const taupe = "#F6F4F4";
const black = "#2F3941";

addons.setConfig({
  panelPosition: "right",
  theme: create({
    brandTitle: "Zendesk Garden React Components",
    brandUrl: "https://github.com/zendeskgarden/react-components",
    brandImage:
      "https://seeklogo.com/images/Z/zendesk-logo-235EFDE864-seeklogo.com.png",

    base: "light",

    // colorPrimary: "pink",
    colorSecondary: kale,

    // UI
    appBg: "white",
    appContentBg: taupe,
    appBorderColor: "white",
    appBorderRadius: 4,

    // Typography
    fontBase:
      "system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji",
    fontCode: "monospace",

    // Text colors
    textColor: black,
    // textInverseColor: "blue",

    // Toolbar default and active colors
    barTextColor: "white",
    barSelectedColor: "white",
    barBg: forest,

    // Form colors
    inputBg: "white",
    inputBorder: kale,
    inputTextColor: black,
    inputBorderRadius: 4,
  }),
});
