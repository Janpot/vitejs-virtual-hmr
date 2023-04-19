import foo from "virtual:my-plugin:foo";

console.log("loading foo ", foo);

if (import.meta.hot) {
  import.meta.hot.accept("virtual:my-plugin:foo", (newFoo) => {
    console.log(`hmr accepting ${newFoo} "virtual:my-plugin:foo"`);
  });

  import.meta.hot.accept("/@id/__x00__virtual:my-plugin:foo", (newFoo) => {
    console.log(`hmr accepting ${newFoo} "/@id/__x00__virtual:my-plugin:foo"`);
  });
}
