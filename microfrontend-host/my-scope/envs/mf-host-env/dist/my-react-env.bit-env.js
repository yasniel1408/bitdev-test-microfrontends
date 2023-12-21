"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MyReactEnv = void 0;
function _react() {
  const data = require("@teambit/react.react-env");
  _react = function () {
    return data;
  };
  return data;
}
function _preview() {
  const data = require("@teambit/preview.react-preview");
  _preview = function () {
    return data;
  };
  return data;
}
function _application() {
  const data = require("@teambit/application");
  _application = function () {
    return data;
  };
  return data;
}
function _reactApps() {
  const data = require("@teambit/react.apps.react-app-types");
  _reactApps = function () {
    return data;
  };
  return data;
}
function _moduleFederationWebpackTransformers() {
  const data = require("@learnbit-react/module-federation.webpack-transformers.mf-host-transformer");
  _moduleFederationWebpackTransformers = function () {
    return data;
  };
  return data;
}
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * this webpack transformer changes the output bundle to a module federation host app.
 * it is used here for the app’s component preview
 */
class MyReactEnv extends _react().ReactEnv {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "name", 'mf-host-env');
  }
  preview() {
    return _preview().ReactPreview.from({
      /* modify the component’s preview to simulate a module federation host app */
      transformers: [_moduleFederationWebpackTransformers().moduleFederationHostTransformer]
    });
  }
  apps() {
    return _application().AppTypeList.from([_reactApps().ReactAppType.from()]);
  }
}
exports.MyReactEnv = MyReactEnv;
var _default = exports.default = new MyReactEnv();

//# sourceMappingURL=my-react-env.bit-env.js.map