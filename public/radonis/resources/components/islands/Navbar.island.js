import {
  require_jsx_runtime
} from "../../../chunk-LOHBYU5H.js";
import {
  __toESM,
  hydrateIsland,
  require_react
} from "../../../chunk-6SVZNOZI.js";

// radonis-island-script:D:\GitHub\nisru\nisruignite\resources\components\islands\Navbar.island.tsx
var import_react3 = __toESM(require_react());

// node_modules/react-icons/lib/esm/iconBase.js
var import_react2 = __toESM(require_react());

// node_modules/react-icons/lib/esm/iconContext.js
var import_react = __toESM(require_react());
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = import_react.default.createContext && import_react.default.createContext(DefaultContext);

// node_modules/react-icons/lib/esm/iconBase.js
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function Tree2Element(tree) {
  return tree && tree.map(function(node, i) {
    return import_react2.default.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}
function GenIcon(data) {
  return function(props) {
    return import_react2.default.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function(conf) {
    var attr = props.attr, size = props.size, title = props.title, svgProps = __rest(props, ["attr", "size", "title"]);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className)
      className = conf.className;
    if (props.className)
      className = (className ? className + " " : "") + props.className;
    return import_react2.default.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && import_react2.default.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? import_react2.default.createElement(IconContext.Consumer, null, function(conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// node_modules/react-icons/fa/index.esm.js
function FaBars(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 448 512" }, "child": [{ "tag": "path", "attr": { "d": "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" } }] })(props);
}
function FaTimes(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 352 512" }, "child": [{ "tag": "path", "attr": { "d": "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" } }] })(props);
}

// radonis-island-script:D:\GitHub\nisru\nisruignite\resources\components\islands\Navbar.island.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime());
var Navbar = () => {
  const [isOpen, setIsOpen] = import_react3.default.useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", { className: "flex justify-between items-center py-4 px-8 bg-white", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { className: "text-2xl font-bold text-gray-800", children: "Logo" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden md:block", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { className: "flex space-x-8", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "a",
        {
          className: "text-gray-800 hover:text-gray-500",
          href: "#",
          children: "Home"
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "a",
        {
          className: "text-gray-800 hover:text-gray-500",
          href: "#",
          children: "About"
        }
      ) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "md:hidden flex items-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "button",
      {
        type: "button",
        className: "text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600",
        onClick: handleToggle,
        children: isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaTimes, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaBars, {})
      }
    ) }),
    isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "md:hidden bg-white w-full", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "a",
        {
          className: "block py-2 px-4 text-gray-800 hover:bg-gray-100",
          href: "#",
          children: "Home"
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "a",
        {
          className: "block py-2 px-4 text-gray-800 hover:bg-gray-100",
          href: "#",
          children: "About"
        }
      ) })
    ] }) })
  ] });
};
var Navbar_island_default = hydrateIsland("Navbar", Navbar);
export {
  Navbar_island_default as default
};
