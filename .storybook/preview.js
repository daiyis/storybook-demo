import { setCompodocJson } from "@storybook/addon-docs/angular";
import { themes } from "@storybook/theming";
import docJson from "../documentation.json";
import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  previewTabs: { "storybook/docs/panel": { index: -1 } },
  // viewport: {
  //   viewports: MINIMAL_VIEWPORTS,
  //   defaultViewport: "someDefault",
  // },
  // docs: {
  //   theme: themes.dark,
  // },
};
