"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DocsProvider = DocsProvider;
exports.default = void 0;
function _react() {
  const data = _interopRequireDefault(require("react"));
  _react = function () {
    return data;
  };
  return data;
}
function _docs() {
  const data = require("@teambit/docs.docs-template");
  _docs = function () {
    return data;
  };
  return data;
}
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * use the provider to inject and wrap your component overview
 * with common needs like [routing](), [theming]() and [data fetching]().
 */
// eslint-disable-next-line react/prop-types
function DocsProvider({
  children
}) {
  return /*#__PURE__*/_react().default.createElement("div", null, children);
}

/**
 * customize the bit documentation template or
 * replace this with one of your own.
 */
var _default = exports.default = (0, _docs().createDocsTemplate)(DocsProvider);

//# sourceMappingURL=docs.js.map