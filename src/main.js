import foo from "virtual:my-plugin:foo";
import bar from "./bar";

console.log("loading foo ", foo);
console.log("loading bar ", bar);

if (import.meta.hot) {
  import.meta.hot.accept("virtual:my-plugin:foo", (newFoo) => {
    console.log(`hmr accepting ${newFoo.default} from "virtual:my-plugin:foo"`);
  });

  import.meta.hot.accept("./bar", (newBar) => {
    console.log(`hmr accepting ${newBar.default} from "./bar"`);
  });
}
