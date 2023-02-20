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

// radonis-island-script:D:\GitHub\nisru\nisruignite\resources\components\islands\Sidebar.island.tsx
var import_react = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var Sidebar = () => {
  const [isOpen, setIsOpen] = (0, import_react.useState)(true);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", { className: `mt-8 ${!isOpen ? "-translate-x-full" : ""} fixed inset-y-0 left-0 w-64 bg-gray-800 px-8 py-4 transform transition-transform duration-200 ease-in-out`, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "a",
        {
          className: "text-gray-400 hover:text-white font-medium block py-2",
          href: "#",
          children: "Home"
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "a",
        {
          className: "text-gray-400 hover:text-white font-medium block py-2",
          href: "#",
          children: "About"
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "a",
        {
          className: "text-gray-400 hover:text-white font-medium block py-2",
          href: "#",
          children: "Services"
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "a",
        {
          className: "text-gray-400 hover:text-white font-medium block py-2",
          href: "#",
          children: "Contact"
        }
      ) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "button",
      {
        className: "absolute left-0 bottom-0 p-4 text-white-400 hover:text-purple focus:outline-none transition-all duration-300",
        onClick: handleToggle,
        children: !isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaBars, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaTimes, {})
      }
    )
  ] });
};
var Sidebar_island_default = hydrateIsland("Sidebar", Sidebar);
export {
  Sidebar_island_default as default
};
