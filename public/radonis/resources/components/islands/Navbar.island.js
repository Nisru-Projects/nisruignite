import {
  FaBars,
  FaTimes
} from "../../../chunk-P5RLDI5R.js";
import {
  require_jsx_runtime
} from "../../../chunk-LOHBYU5H.js";
import {
  __toESM,
  hydrateIsland,
  require_react
} from "../../../chunk-6SVZNOZI.js";

// radonis-island-script:D:\GitHub\nisru\nisruignite\resources\components\islands\Navbar.island.tsx
var import_react = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var Navbar = () => {
  const [isOpen, setIsOpen] = (0, import_react.useState)(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", { className: "flex items-center justify-between flex-wrap bg-gray-800 p-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex items-center flex-shrink-0 text-white mr-6", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "font-semibold text-xl tracking-tight", children: "Logo" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "block md:hidden", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "button",
      {
        onClick: toggle,
        className: "flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white",
        children: isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaTimes, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaBars, {})
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `${isOpen ? "block" : "hidden"} w-full block flex-grow md:flex md:items-center md:w-auto`, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "text-sm md:flex-grow", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { href: "#responsive-header", className: "block mt-4 md:inline-block md:mt-0 text-gray-300 hover:text-white mr-4", children: "Home" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { href: "#responsive-header", className: "block mt-4 md:inline-block md:mt-0 text-gray-300 hover:text-white mr-4", children: "About" })
    ] }) })
  ] });
};
var Navbar_island_default = hydrateIsland("Navbar", Navbar);
export {
  Navbar_island_default as default
};
