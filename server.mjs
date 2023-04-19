import { createServer } from "vite";

async function main() {
  const devServer = await createServer({
    clearScreen: false,
    plugins: [
      {
        name: "my-plugin",
        async resolveId(id) {
          if (id === "virtual:my-plugin:foo") {
            return "\0virtual:my-plugin:foo";
          }
          return null;
        },
        async load(id) {
          if (id === "\0virtual:my-plugin:foo") {
            return `
            export default Math.random();
          `;
          }
          return null;
        },
      },
    ],
  });

  await devServer.listen(3000);
  devServer.printUrls();

  setInterval(() => {
    const mod = devServer.moduleGraph.getModuleById("\0virtual:my-plugin:foo");
    if (mod) {
      console.log("reloading virtual module");
      devServer.reloadModule(mod);
    }
  }, 2000);
}

main();
