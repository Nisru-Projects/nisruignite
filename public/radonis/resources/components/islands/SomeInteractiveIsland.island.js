import {
  require_jsx_runtime
} from "../../../chunk-LOHBYU5H.js";
import {
  __toESM,
  hydrateIsland,
  require_react
} from "../../../chunk-6SVZNOZI.js";

// radonis-island-script:D:\GitHub\nisru\nisruignite\resources\components\islands\SomeInteractiveIsland.island.tsx
var import_react = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
function SomeInteractiveIsland() {
  const [count, setCount] = (0, import_react.useState)(0);
  function handleClick() {
    setCount(count + 1);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", { type: "button", onClick: handleClick, children: [
    "Click me ",
    count
  ] });
}
var SomeInteractiveIsland_island_default = hydrateIsland("SomeInteractiveIsland", SomeInteractiveIsland);
export {
  SomeInteractiveIsland_island_default as default
};
