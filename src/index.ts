
const themeSearchMendable = () => ({
  name: "docusaurus-plugin-mendable",
  // getClientModules() {
  //   const cssPath = path.resolve(__dirname, "./src/css/custom.css");
  //   if (!fs.existsSync(cssPath)) {
  //     throw new Error("Mendable custom CSS file not found.");
  //   }
  //   return [cssPath];
  // },
  getThemePath: () => "../dist/theme",
  getTypeScriptThemePath: () => "../src/theme",
  // getClientModules: () => ["./src/css/custom.css"],
  getSwizzleComponentList: () => ["SearchBar"],
  // contentLoaded({actions: {addRoute}}) {
  //     addRoute({
  //       path: '/search',
  //       component: '@theme/SearchPage',
  //       exact: true,
  //     });
  // },
});

themeSearchMendable.validateThemeConfig = (data) => {
  return data.themeConfig;
};

export default themeSearchMendable;
