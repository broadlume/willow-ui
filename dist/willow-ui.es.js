import * as X from "react";
import $, { createContext as We, useMemo as Xe, createElement as h, useContext as Le, useCallback as ee, forwardRef as T, Children as St, isValidElement as qn, cloneElement as yo, Fragment as Nt, useRef as R, useEffect as K, useState as z, useLayoutEffect as un, useReducer as rd } from "react";
import * as od from "react-dom";
import ad, { flushSync as gi, createPortal as wo } from "react-dom";
var $i = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, ga = $.createContext && $.createContext($i), mt = globalThis && globalThis.__assign || function() {
  return mt = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, mt.apply(this, arguments);
}, id = globalThis && globalThis.__rest || function(e, n) {
  var t = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
};
function yi(e) {
  return e && e.map(function(n, t) {
    return $.createElement(n.tag, mt({
      key: t
    }, n.attr), yi(n.child));
  });
}
function gt(e) {
  return function(n) {
    return $.createElement(sd, mt({
      attr: mt({}, e.attr)
    }, n), yi(e.child));
  };
}
function sd(e) {
  var n = function(t) {
    var r = e.attr, o = e.size, a = e.title, i = id(e, ["attr", "size", "title"]), s = o || t.size || "1em", c;
    return t.className && (c = t.className), e.className && (c = (c ? c + " " : "") + e.className), $.createElement("svg", mt({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, t.attr, r, i, {
      className: c,
      style: mt(mt({
        color: e.color || t.color
      }, t.style), e.style),
      height: s,
      width: s,
      xmlns: "http://www.w3.org/2000/svg"
    }), a && $.createElement("title", null, a), e.children);
  };
  return ga !== void 0 ? $.createElement(ga.Consumer, null, function(t) {
    return n(t);
  }) : n($i);
}
function cd(e) {
  return gt({ tag: "svg", attr: { viewBox: "0 0 192 512" }, child: [{ tag: "path", attr: { d: "M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z" } }] })(e);
}
function $a(e) {
  return gt({ tag: "svg", attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" } }] })(e);
}
function mw(e) {
  return gt({ tag: "svg", attr: { viewBox: "0 0 320 512" }, child: [{ tag: "path", attr: { d: "M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" } }] })(e);
}
function bw(e) {
  return gt({ tag: "svg", attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z" } }] })(e);
}
function hw(e) {
  return gt({ tag: "svg", attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z" } }] })(e);
}
function gw(e) {
  return gt({ tag: "svg", attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z" } }] })(e);
}
function $w(e) {
  return gt({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" } }] })(e);
}
function yw(e) {
  return gt({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" } }] })(e);
}
var Xr = { exports: {} }, jt = {};
/** @license React v16.14.0
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ya;
function ld() {
  if (ya)
    return jt;
  ya = 1;
  var e = $, n = 60103;
  if (jt.Fragment = 60107, typeof Symbol == "function" && Symbol.for) {
    var t = Symbol.for;
    n = t("react.element"), jt.Fragment = t("react.fragment");
  }
  var r = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = Object.prototype.hasOwnProperty, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(s, c, l) {
    var u, d = {}, f = null, p = null;
    l !== void 0 && (f = "" + l), c.key !== void 0 && (f = "" + c.key), c.ref !== void 0 && (p = c.ref);
    for (u in c)
      o.call(c, u) && !a.hasOwnProperty(u) && (d[u] = c[u]);
    if (s && s.defaultProps)
      for (u in c = s.defaultProps, c)
        d[u] === void 0 && (d[u] = c[u]);
    return { $$typeof: n, type: s, key: f, ref: p, props: d, _owner: r.current };
  }
  return jt.jsx = i, jt.jsxs = i, jt;
}
var Nr = {};
/** @license React v16.14.0
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wa;
function dd() {
  return wa || (wa = 1, function(e) {
    process.env.NODE_ENV !== "production" && function() {
      var n = $, t = 60103, r = 60106;
      e.Fragment = 60107;
      var o = 60108, a = 60114, i = 60109, s = 60110, c = 60112, l = 60113, u = 60120, d = 60115, f = 60116, p = 60121, v = 60122, m = 60117, b = 60129, y = 60131;
      if (typeof Symbol == "function" && Symbol.for) {
        var g = Symbol.for;
        t = g("react.element"), r = g("react.portal"), e.Fragment = g("react.fragment"), o = g("react.strict_mode"), a = g("react.profiler"), i = g("react.provider"), s = g("react.context"), c = g("react.forward_ref"), l = g("react.suspense"), u = g("react.suspense_list"), d = g("react.memo"), f = g("react.lazy"), p = g("react.block"), v = g("react.server.block"), m = g("react.fundamental"), g("react.scope"), g("react.opaque.id"), b = g("react.debug_trace_mode"), g("react.offscreen"), y = g("react.legacy_hidden");
      }
      var w = typeof Symbol == "function" && Symbol.iterator, _ = "@@iterator";
      function S(C) {
        if (C === null || typeof C != "object")
          return null;
        var W = w && C[w] || C[_];
        return typeof W == "function" ? W : null;
      }
      var N = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function P(C) {
        {
          for (var W = arguments.length, U = new Array(W > 1 ? W - 1 : 0), ie = 1; ie < W; ie++)
            U[ie - 1] = arguments[ie];
          F("error", C, U);
        }
      }
      function F(C, W, U) {
        {
          var ie = N.ReactDebugCurrentFrame, $e = "";
          if (O) {
            var ye = L(O.type), ve = O._owner;
            $e += j(ye, O._source, ve && L(ve.type));
          }
          $e += ie.getStackAddendum(), $e !== "" && (W += "%s", U = U.concat([$e]));
          var se = U.map(function(Re) {
            return "" + Re;
          });
          se.unshift("Warning: " + W), Function.prototype.apply.call(console[C], console, se);
        }
      }
      var H = !1;
      function q(C) {
        return !!(typeof C == "string" || typeof C == "function" || C === e.Fragment || C === a || C === b || C === o || C === l || C === u || C === y || H || typeof C == "object" && C !== null && (C.$$typeof === f || C.$$typeof === d || C.$$typeof === i || C.$$typeof === s || C.$$typeof === c || C.$$typeof === m || C.$$typeof === p || C[0] === v));
      }
      var B = /^(.*)[\\\/]/;
      function j(C, W, U) {
        var ie = "";
        if (W) {
          var $e = W.fileName, ye = $e.replace(B, "");
          if (/^index\./.test(ye)) {
            var ve = $e.match(B);
            if (ve) {
              var se = ve[1];
              if (se) {
                var Re = se.replace(B, "");
                ye = Re + "/" + ye;
              }
            }
          }
          ie = " (at " + ye + ":" + W.lineNumber + ")";
        } else
          U && (ie = " (created by " + U + ")");
        return `
    in ` + (C || "Unknown") + ie;
      }
      var G = 1;
      function D(C) {
        return C._status === G ? C._result : null;
      }
      function A(C, W, U) {
        var ie = W.displayName || W.name || "";
        return C.displayName || (ie !== "" ? U + "(" + ie + ")" : U);
      }
      function L(C) {
        if (C == null)
          return null;
        if (typeof C.tag == "number" && P("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof C == "function")
          return C.displayName || C.name || null;
        if (typeof C == "string")
          return C;
        switch (C) {
          case e.Fragment:
            return "Fragment";
          case r:
            return "Portal";
          case a:
            return "Profiler";
          case o:
            return "StrictMode";
          case l:
            return "Suspense";
          case u:
            return "SuspenseList";
        }
        if (typeof C == "object")
          switch (C.$$typeof) {
            case s:
              return "Context.Consumer";
            case i:
              return "Context.Provider";
            case c:
              return A(C, C.render, "ForwardRef");
            case d:
              return L(C.type);
            case p:
              return L(C.render);
            case f: {
              var W = C, U = D(W);
              if (U)
                return L(U);
              break;
            }
          }
        return null;
      }
      var k = {};
      N.ReactDebugCurrentFrame;
      var O = null;
      function V(C) {
        O = C;
      }
      function te(C, W, U, ie, $e) {
        {
          var ye = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var ve in C)
            if (ye(C, ve)) {
              var se = void 0;
              try {
                if (typeof C[ve] != "function") {
                  var Re = Error((ie || "React class") + ": " + U + " type `" + ve + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof C[ve] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Re.name = "Invariant Violation", Re;
                }
                se = C[ve](W, ve, ie, U, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Ge) {
                se = Ge;
              }
              se && !(se instanceof Error) && (V($e), P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ie || "React class", U, ve, typeof se), V(null)), se instanceof Error && !(se.message in k) && (k[se.message] = !0, V($e), P("Failed %s type: %s", U, se.message), V(null));
            }
        }
      }
      var ne = N.ReactCurrentOwner, de = Object.prototype.hasOwnProperty, ce = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, we, Pe, Se;
      Se = {};
      function Z(C) {
        if (de.call(C, "ref")) {
          var W = Object.getOwnPropertyDescriptor(C, "ref").get;
          if (W && W.isReactWarning)
            return !1;
        }
        return C.ref !== void 0;
      }
      function le(C) {
        if (de.call(C, "key")) {
          var W = Object.getOwnPropertyDescriptor(C, "key").get;
          if (W && W.isReactWarning)
            return !1;
        }
        return C.key !== void 0;
      }
      function be(C, W) {
        if (typeof C.ref == "string" && ne.current && W && ne.current.stateNode !== W) {
          var U = L(ne.current.type);
          Se[U] || (P('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', L(ne.current.type), C.ref), Se[U] = !0);
        }
      }
      function ue(C, W) {
        {
          var U = function() {
            we || (we = !0, P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", W));
          };
          U.isReactWarning = !0, Object.defineProperty(C, "key", {
            get: U,
            configurable: !0
          });
        }
      }
      function fe(C, W) {
        {
          var U = function() {
            Pe || (Pe = !0, P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", W));
          };
          U.isReactWarning = !0, Object.defineProperty(C, "ref", {
            get: U,
            configurable: !0
          });
        }
      }
      var pe = function(C, W, U, ie, $e, ye, ve) {
        var se = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: t,
          // Built-in properties that belong on the element
          type: C,
          key: W,
          ref: U,
          props: ve,
          // Record the component responsible for creating this element.
          _owner: ye
        };
        return se._store = {}, Object.defineProperty(se._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(se, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: ie
        }), Object.defineProperty(se, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: $e
        }), Object.freeze && (Object.freeze(se.props), Object.freeze(se)), se;
      };
      function Oe(C, W, U, ie, $e) {
        {
          var ye, ve = {}, se = null, Re = null;
          U !== void 0 && (se = "" + U), le(W) && (se = "" + W.key), Z(W) && (Re = W.ref, be(W, $e));
          for (ye in W)
            de.call(W, ye) && !ce.hasOwnProperty(ye) && (ve[ye] = W[ye]);
          if (C && C.defaultProps) {
            var Ge = C.defaultProps;
            for (ye in Ge)
              ve[ye] === void 0 && (ve[ye] = Ge[ye]);
          }
          if (se || Re) {
            var ut = typeof C == "function" ? C.displayName || C.name || "Unknown" : C;
            se && ue(ve, ut), Re && fe(ve, ut);
          }
          return pe(C, se, Re, $e, ie, ne.current, ve);
        }
      }
      var Ce = N.ReactCurrentOwner;
      N.ReactDebugCurrentFrame;
      function je(C) {
        O = C;
      }
      var et;
      et = !1;
      function tt(C) {
        return typeof C == "object" && C !== null && C.$$typeof === t;
      }
      function Nn() {
        {
          if (Ce.current) {
            var C = L(Ce.current.type);
            if (C)
              return `

Check the render method of \`` + C + "`.";
          }
          return "";
        }
      }
      function Mr(C) {
        {
          if (C !== void 0) {
            var W = C.fileName.replace(/^.*[\\\/]/, ""), U = C.lineNumber;
            return `

Check your code at ` + W + ":" + U + ".";
          }
          return "";
        }
      }
      var _t = {};
      function Xl(C) {
        {
          var W = Nn();
          if (!W) {
            var U = typeof C == "string" ? C : C.displayName || C.name;
            U && (W = `

Check the top-level render call using <` + U + ">.");
          }
          return W;
        }
      }
      function ma(C, W) {
        {
          if (!C._store || C._store.validated || C.key != null)
            return;
          C._store.validated = !0;
          var U = Xl(W);
          if (_t[U])
            return;
          _t[U] = !0;
          var ie = "";
          C && C._owner && C._owner !== Ce.current && (ie = " It was passed a child from " + L(C._owner.type) + "."), je(C), P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', U, ie), je(null);
        }
      }
      function ba(C, W) {
        {
          if (typeof C != "object")
            return;
          if (Array.isArray(C))
            for (var U = 0; U < C.length; U++) {
              var ie = C[U];
              tt(ie) && ma(ie, W);
            }
          else if (tt(C))
            C._store && (C._store.validated = !0);
          else if (C) {
            var $e = S(C);
            if (typeof $e == "function" && $e !== C.entries)
              for (var ye = $e.call(C), ve; !(ve = ye.next()).done; )
                tt(ve.value) && ma(ve.value, W);
          }
        }
      }
      function Zl(C) {
        {
          var W = C.type;
          if (W == null || typeof W == "string")
            return;
          var U;
          if (typeof W == "function")
            U = W.propTypes;
          else if (typeof W == "object" && (W.$$typeof === c || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          W.$$typeof === d))
            U = W.propTypes;
          else
            return;
          if (U) {
            var ie = L(W);
            te(U, C.props, "prop", ie, C);
          } else if (W.PropTypes !== void 0 && !et) {
            et = !0;
            var $e = L(W);
            P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", $e || "Unknown");
          }
          typeof W.getDefaultProps == "function" && !W.getDefaultProps.isReactClassApproved && P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Ql(C) {
        {
          for (var W = Object.keys(C.props), U = 0; U < W.length; U++) {
            var ie = W[U];
            if (ie !== "children" && ie !== "key") {
              je(C), P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ie), je(null);
              break;
            }
          }
          C.ref !== null && (je(C), P("Invalid attribute `ref` supplied to `React.Fragment`."), je(null));
        }
      }
      function ha(C, W, U, ie, $e, ye) {
        {
          var ve = q(C);
          if (!ve) {
            var se = "";
            (C === void 0 || typeof C == "object" && C !== null && Object.keys(C).length === 0) && (se += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var Re = Mr($e);
            Re ? se += Re : se += Nn();
            var Ge;
            C === null ? Ge = "null" : Array.isArray(C) ? Ge = "array" : C !== void 0 && C.$$typeof === t ? (Ge = "<" + (L(C.type) || "Unknown") + " />", se = " Did you accidentally export a JSX literal instead of a component?") : Ge = typeof C, P("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ge, se);
          }
          var ut = Oe(C, W, U, $e, ye);
          if (ut == null)
            return ut;
          if (ve) {
            var Wt = W.children;
            if (Wt !== void 0)
              if (ie)
                if (Array.isArray(Wt)) {
                  for (var Or = 0; Or < Wt.length; Or++)
                    ba(Wt[Or], C);
                  Object.freeze && Object.freeze(Wt);
                } else
                  P("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
              else
                ba(Wt, C);
          }
          return C === e.Fragment ? Ql(ut) : Zl(ut), ut;
        }
      }
      function Jl(C, W, U) {
        return ha(C, W, U, !0);
      }
      function ed(C, W, U) {
        return ha(C, W, U, !1);
      }
      var td = ed, nd = Jl;
      e.jsx = td, e.jsxs = nd;
    }();
  }(Nr)), Nr;
}
process.env.NODE_ENV === "production" ? Xr.exports = ld() : Xr.exports = dd();
var E = Xr.exports;
function x() {
  return x = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, x.apply(this, arguments);
}
function ud(e, n) {
  const t = /* @__PURE__ */ We(n);
  function r(a) {
    const { children: i, ...s } = a, c = Xe(
      () => s,
      Object.values(s)
    );
    return /* @__PURE__ */ h(t.Provider, {
      value: c
    }, i);
  }
  function o(a) {
    const i = Le(t);
    if (i)
      return i;
    if (n !== void 0)
      return n;
    throw new Error(`\`${a}\` must be used within \`${e}\``);
  }
  return r.displayName = e + "Provider", [
    r,
    o
  ];
}
function xe(e, n = []) {
  let t = [];
  function r(a, i) {
    const s = /* @__PURE__ */ We(i), c = t.length;
    t = [
      ...t,
      i
    ];
    function l(d) {
      const { scope: f, children: p, ...v } = d, m = (f == null ? void 0 : f[e][c]) || s, b = Xe(
        () => v,
        Object.values(v)
      );
      return /* @__PURE__ */ h(m.Provider, {
        value: b
      }, p);
    }
    function u(d, f) {
      const p = (f == null ? void 0 : f[e][c]) || s, v = Le(p);
      if (v)
        return v;
      if (i !== void 0)
        return i;
      throw new Error(`\`${d}\` must be used within \`${a}\``);
    }
    return l.displayName = a + "Provider", [
      l,
      u
    ];
  }
  const o = () => {
    const a = t.map((i) => /* @__PURE__ */ We(i));
    return function(s) {
      const c = (s == null ? void 0 : s[e]) || a;
      return Xe(
        () => ({
          [`__scope${e}`]: {
            ...s,
            [e]: c
          }
        }),
        [
          s,
          c
        ]
      );
    };
  };
  return o.scopeName = e, [
    r,
    fd(o, ...n)
  ];
}
function fd(...e) {
  const n = e[0];
  if (e.length === 1)
    return n;
  const t = () => {
    const r = e.map(
      (o) => ({
        useScope: o(),
        scopeName: o.scopeName
      })
    );
    return function(a) {
      const i = r.reduce((s, { useScope: c, scopeName: l }) => {
        const d = c(a)[`__scope${l}`];
        return {
          ...s,
          ...d
        };
      }, {});
      return Xe(
        () => ({
          [`__scope${n.scopeName}`]: i
        }),
        [
          i
        ]
      );
    };
  };
  return t.scopeName = n.scopeName, t;
}
function pd(e, n) {
  typeof e == "function" ? e(n) : e != null && (e.current = n);
}
function ir(...e) {
  return (n) => e.forEach(
    (t) => pd(t, n)
  );
}
function re(...e) {
  return ee(ir(...e), e);
}
const ct = /* @__PURE__ */ T((e, n) => {
  const { children: t, ...r } = e, o = St.toArray(t), a = o.find(vd);
  if (a) {
    const i = a.props.children, s = o.map((c) => c === a ? St.count(i) > 1 ? St.only(null) : /* @__PURE__ */ qn(i) ? i.props.children : null : c);
    return /* @__PURE__ */ h(Zr, x({}, r, {
      ref: n
    }), /* @__PURE__ */ qn(i) ? /* @__PURE__ */ yo(i, void 0, s) : null);
  }
  return /* @__PURE__ */ h(Zr, x({}, r, {
    ref: n
  }), t);
});
ct.displayName = "Slot";
const Zr = /* @__PURE__ */ T((e, n) => {
  const { children: t, ...r } = e;
  return /* @__PURE__ */ qn(t) ? /* @__PURE__ */ yo(t, {
    ...md(r, t.props),
    ref: n ? ir(n, t.ref) : t.ref
  }) : St.count(t) > 1 ? St.only(null) : null;
});
Zr.displayName = "SlotClone";
const xo = ({ children: e }) => /* @__PURE__ */ h(Nt, null, e);
function vd(e) {
  return /* @__PURE__ */ qn(e) && e.type === xo;
}
function md(e, n) {
  const t = {
    ...n
  };
  for (const r in n) {
    const o = e[r], a = n[r];
    /^on[A-Z]/.test(r) ? o && a ? t[r] = (...s) => {
      a(...s), o(...s);
    } : o && (t[r] = o) : r === "style" ? t[r] = {
      ...o,
      ...a
    } : r === "className" && (t[r] = [
      o,
      a
    ].filter(Boolean).join(" "));
  }
  return {
    ...e,
    ...t
  };
}
function Qt(e) {
  const n = e + "CollectionProvider", [t, r] = xe(n), [o, a] = t(n, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  }), i = (p) => {
    const { scope: v, children: m } = p, b = $.useRef(null), y = $.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ $.createElement(o, {
      scope: v,
      itemMap: y,
      collectionRef: b
    }, m);
  }, s = e + "CollectionSlot", c = /* @__PURE__ */ $.forwardRef((p, v) => {
    const { scope: m, children: b } = p, y = a(s, m), g = re(v, y.collectionRef);
    return /* @__PURE__ */ $.createElement(ct, {
      ref: g
    }, b);
  }), l = e + "CollectionItemSlot", u = "data-radix-collection-item", d = /* @__PURE__ */ $.forwardRef((p, v) => {
    const { scope: m, children: b, ...y } = p, g = $.useRef(null), w = re(v, g), _ = a(l, m);
    return $.useEffect(() => (_.itemMap.set(g, {
      ref: g,
      ...y
    }), () => void _.itemMap.delete(g))), /* @__PURE__ */ $.createElement(ct, {
      [u]: "",
      ref: w
    }, b);
  });
  function f(p) {
    const v = a(e + "CollectionConsumer", p);
    return $.useCallback(() => {
      const b = v.collectionRef.current;
      if (!b)
        return [];
      const y = Array.from(b.querySelectorAll(`[${u}]`));
      return Array.from(v.itemMap.values()).sort(
        (_, S) => y.indexOf(_.ref.current) - y.indexOf(S.ref.current)
      );
    }, [
      v.collectionRef,
      v.itemMap
    ]);
  }
  return [
    {
      Provider: i,
      Slot: c,
      ItemSlot: d
    },
    f,
    r
  ];
}
function I(e, n, { checkForDefaultPrevented: t = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), t === !1 || !o.defaultPrevented)
      return n == null ? void 0 : n(o);
  };
}
function _e(e) {
  const n = R(e);
  return K(() => {
    n.current = e;
  }), Xe(
    () => (...t) => {
      var r;
      return (r = n.current) === null || r === void 0 ? void 0 : r.call(n, ...t);
    },
    []
  );
}
function Ee({ prop: e, defaultProp: n, onChange: t = () => {
} }) {
  const [r, o] = bd({
    defaultProp: n,
    onChange: t
  }), a = e !== void 0, i = a ? e : r, s = _e(t), c = ee((l) => {
    if (a) {
      const d = typeof l == "function" ? l(e) : l;
      d !== e && s(d);
    } else
      o(l);
  }, [
    a,
    e,
    o,
    s
  ]);
  return [
    i,
    c
  ];
}
function bd({ defaultProp: e, onChange: n }) {
  const t = z(e), [r] = t, o = R(r), a = _e(n);
  return K(() => {
    o.current !== r && (a(r), o.current = r);
  }, [
    r,
    o,
    a
  ]), t;
}
const hd = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], Y = hd.reduce((e, n) => {
  const t = /* @__PURE__ */ T((r, o) => {
    const { asChild: a, ...i } = r, s = a ? ct : n;
    return K(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ h(s, x({}, i, {
      ref: o
    }));
  });
  return t.displayName = `Primitive.${n}`, {
    ...e,
    [n]: t
  };
}, {});
function Co(e, n) {
  e && gi(
    () => e.dispatchEvent(n)
  );
}
const Ie = globalThis != null && globalThis.document ? un : () => {
};
function gd(e, n) {
  return rd((t, r) => {
    const o = n[t][r];
    return o ?? t;
  }, e);
}
const Me = (e) => {
  const { present: n, children: t } = e, r = $d(n), o = typeof t == "function" ? t({
    present: r.isPresent
  }) : St.only(t), a = re(r.ref, o.ref);
  return typeof t == "function" || r.isPresent ? /* @__PURE__ */ yo(o, {
    ref: a
  }) : null;
};
Me.displayName = "Presence";
function $d(e) {
  const [n, t] = z(), r = R({}), o = R(e), a = R("none"), i = e ? "mounted" : "unmounted", [s, c] = gd(i, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return K(() => {
    const l = Rn(r.current);
    a.current = s === "mounted" ? l : "none";
  }, [
    s
  ]), Ie(() => {
    const l = r.current, u = o.current;
    if (u !== e) {
      const f = a.current, p = Rn(l);
      e ? c("MOUNT") : p === "none" || (l == null ? void 0 : l.display) === "none" ? c("UNMOUNT") : c(u && f !== p ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    c
  ]), Ie(() => {
    if (n) {
      const l = (d) => {
        const p = Rn(r.current).includes(d.animationName);
        d.target === n && p && gi(
          () => c("ANIMATION_END")
        );
      }, u = (d) => {
        d.target === n && (a.current = Rn(r.current));
      };
      return n.addEventListener("animationstart", u), n.addEventListener("animationcancel", l), n.addEventListener("animationend", l), () => {
        n.removeEventListener("animationstart", u), n.removeEventListener("animationcancel", l), n.removeEventListener("animationend", l);
      };
    } else
      c("ANIMATION_END");
  }, [
    n,
    c
  ]), {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(s),
    ref: ee((l) => {
      l && (r.current = getComputedStyle(l)), t(l);
    }, [])
  };
}
function Rn(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
const yd = X["useId".toString()] || (() => {
});
let wd = 0;
function De(e) {
  const [n, t] = X.useState(yd());
  return Ie(() => {
    e || t(
      (r) => r ?? String(wd++)
    );
  }, [
    e
  ]), e || (n ? `radix-${n}` : "");
}
const wi = "Collapsible", [xd, xi] = xe(wi), [Cd, _o] = xd(wi), _d = /* @__PURE__ */ T((e, n) => {
  const { __scopeCollapsible: t, open: r, defaultOpen: o, disabled: a, onOpenChange: i, ...s } = e, [c = !1, l] = Ee({
    prop: r,
    defaultProp: o,
    onChange: i
  });
  return /* @__PURE__ */ h(Cd, {
    scope: t,
    disabled: a,
    contentId: De(),
    open: c,
    onOpenToggle: ee(
      () => l(
        (u) => !u
      ),
      [
        l
      ]
    )
  }, /* @__PURE__ */ h(Y.div, x({
    "data-state": Eo(c),
    "data-disabled": a ? "" : void 0
  }, s, {
    ref: n
  })));
}), Ed = "CollapsibleTrigger", Td = /* @__PURE__ */ T((e, n) => {
  const { __scopeCollapsible: t, ...r } = e, o = _o(Ed, t);
  return /* @__PURE__ */ h(Y.button, x({
    type: "button",
    "aria-controls": o.contentId,
    "aria-expanded": o.open || !1,
    "data-state": Eo(o.open),
    "data-disabled": o.disabled ? "" : void 0,
    disabled: o.disabled
  }, r, {
    ref: n,
    onClick: I(e.onClick, o.onOpenToggle)
  }));
}), Ci = "CollapsibleContent", Pd = /* @__PURE__ */ T((e, n) => {
  const { forceMount: t, ...r } = e, o = _o(Ci, e.__scopeCollapsible);
  return /* @__PURE__ */ h(
    Me,
    {
      present: t || o.open
    },
    ({ present: a }) => /* @__PURE__ */ h(Sd, x({}, r, {
      ref: n,
      present: a
    }))
  );
}), Sd = /* @__PURE__ */ T((e, n) => {
  const { __scopeCollapsible: t, present: r, children: o, ...a } = e, i = _o(Ci, t), [s, c] = z(r), l = R(null), u = re(n, l), d = R(0), f = d.current, p = R(0), v = p.current, m = i.open || s, b = R(m), y = R();
  return K(() => {
    const g = requestAnimationFrame(
      () => b.current = !1
    );
    return () => cancelAnimationFrame(g);
  }, []), Ie(() => {
    const g = l.current;
    if (g) {
      y.current = y.current || {
        transitionDuration: g.style.transitionDuration,
        animationName: g.style.animationName
      }, g.style.transitionDuration = "0s", g.style.animationName = "none";
      const w = g.getBoundingClientRect();
      d.current = w.height, p.current = w.width, b.current || (g.style.transitionDuration = y.current.transitionDuration, g.style.animationName = y.current.animationName), c(r);
    }
  }, [
    i.open,
    r
  ]), /* @__PURE__ */ h(Y.div, x({
    "data-state": Eo(i.open),
    "data-disabled": i.disabled ? "" : void 0,
    id: i.contentId,
    hidden: !m
  }, a, {
    ref: u,
    style: {
      "--radix-collapsible-content-height": f ? `${f}px` : void 0,
      "--radix-collapsible-content-width": v ? `${v}px` : void 0,
      ...e.style
    }
  }), m && o);
});
function Eo(e) {
  return e ? "open" : "closed";
}
const Dd = _d, Md = Td, Od = Pd, Nd = /* @__PURE__ */ We(void 0);
function Rt(e) {
  const n = Le(Nd);
  return e || n || "ltr";
}
const $t = "Accordion", Rd = [
  "Home",
  "End",
  "ArrowDown",
  "ArrowUp",
  "ArrowLeft",
  "ArrowRight"
], [To, kd, Ad] = Qt($t), [sr, ww] = xe($t, [
  Ad,
  xi
]), Po = xi(), _i = /* @__PURE__ */ $.forwardRef((e, n) => {
  const { type: t, ...r } = e, o = r, a = r;
  return /* @__PURE__ */ $.createElement(To.Provider, {
    scope: e.__scopeAccordion
  }, t === "multiple" ? /* @__PURE__ */ $.createElement(Wd, x({}, a, {
    ref: n
  })) : /* @__PURE__ */ $.createElement(Fd, x({}, o, {
    ref: n
  })));
});
_i.propTypes = {
  type(e) {
    const n = e.value || e.defaultValue;
    return e.type && ![
      "single",
      "multiple"
    ].includes(e.type) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`.") : e.type === "multiple" && typeof n == "string" ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`.") : e.type === "single" && Array.isArray(n) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`.") : null;
  }
};
const [Ei, Id] = sr($t), [Ti, Ld] = sr($t, {
  collapsible: !1
}), Fd = /* @__PURE__ */ $.forwardRef((e, n) => {
  const { value: t, defaultValue: r, onValueChange: o = () => {
  }, collapsible: a = !1, ...i } = e, [s, c] = Ee({
    prop: t,
    defaultProp: r,
    onChange: o
  });
  return /* @__PURE__ */ $.createElement(Ei, {
    scope: e.__scopeAccordion,
    value: s ? [
      s
    ] : [],
    onItemOpen: c,
    onItemClose: $.useCallback(
      () => a && c(""),
      [
        a,
        c
      ]
    )
  }, /* @__PURE__ */ $.createElement(Ti, {
    scope: e.__scopeAccordion,
    collapsible: a
  }, /* @__PURE__ */ $.createElement(Pi, x({}, i, {
    ref: n
  }))));
}), Wd = /* @__PURE__ */ $.forwardRef((e, n) => {
  const { value: t, defaultValue: r, onValueChange: o = () => {
  }, ...a } = e, [i = [], s] = Ee({
    prop: t,
    defaultProp: r,
    onChange: o
  }), c = $.useCallback(
    (u) => s(
      (d = []) => [
        ...d,
        u
      ]
    ),
    [
      s
    ]
  ), l = $.useCallback(
    (u) => s(
      (d = []) => d.filter(
        (f) => f !== u
      )
    ),
    [
      s
    ]
  );
  return /* @__PURE__ */ $.createElement(Ei, {
    scope: e.__scopeAccordion,
    value: i,
    onItemOpen: c,
    onItemClose: l
  }, /* @__PURE__ */ $.createElement(Ti, {
    scope: e.__scopeAccordion,
    collapsible: !0
  }, /* @__PURE__ */ $.createElement(Pi, x({}, a, {
    ref: n
  }))));
}), [jd, cr] = sr($t), Pi = /* @__PURE__ */ $.forwardRef((e, n) => {
  const { __scopeAccordion: t, disabled: r, dir: o, orientation: a = "vertical", ...i } = e, s = $.useRef(null), c = re(s, n), l = kd(t), d = Rt(o) === "ltr", f = I(e.onKeyDown, (p) => {
    var v;
    if (!Rd.includes(p.key))
      return;
    const m = p.target, b = l().filter((H) => {
      var q;
      return !((q = H.ref.current) !== null && q !== void 0 && q.disabled);
    }), y = b.findIndex(
      (H) => H.ref.current === m
    ), g = b.length;
    if (y === -1)
      return;
    p.preventDefault();
    let w = y;
    const _ = 0, S = g - 1, N = () => {
      w = y + 1, w > S && (w = _);
    }, P = () => {
      w = y - 1, w < _ && (w = S);
    };
    switch (p.key) {
      case "Home":
        w = _;
        break;
      case "End":
        w = S;
        break;
      case "ArrowRight":
        a === "horizontal" && (d ? N() : P());
        break;
      case "ArrowDown":
        a === "vertical" && N();
        break;
      case "ArrowLeft":
        a === "horizontal" && (d ? P() : N());
        break;
      case "ArrowUp":
        a === "vertical" && P();
        break;
    }
    const F = w % g;
    (v = b[F].ref.current) === null || v === void 0 || v.focus();
  });
  return /* @__PURE__ */ $.createElement(jd, {
    scope: t,
    disabled: r,
    direction: o,
    orientation: a
  }, /* @__PURE__ */ $.createElement(To.Slot, {
    scope: t
  }, /* @__PURE__ */ $.createElement(Y.div, x({}, i, {
    "data-orientation": a,
    ref: c,
    onKeyDown: r ? void 0 : f
  }))));
}), Qr = "AccordionItem", [Vd, So] = sr(Qr), Hd = /* @__PURE__ */ $.forwardRef((e, n) => {
  const { __scopeAccordion: t, value: r, ...o } = e, a = cr(Qr, t), i = Id(Qr, t), s = Po(t), c = De(), l = r && i.value.includes(r) || !1, u = a.disabled || e.disabled;
  return /* @__PURE__ */ $.createElement(Vd, {
    scope: t,
    open: l,
    disabled: u,
    triggerId: c
  }, /* @__PURE__ */ $.createElement(Dd, x({
    "data-orientation": a.orientation,
    "data-state": Si(l)
  }, s, o, {
    ref: n,
    disabled: u,
    open: l,
    onOpenChange: (d) => {
      d ? i.onItemOpen(r) : i.onItemClose(r);
    }
  })));
}), Bd = "AccordionHeader", Yd = /* @__PURE__ */ $.forwardRef((e, n) => {
  const { __scopeAccordion: t, ...r } = e, o = cr($t, t), a = So(Bd, t);
  return /* @__PURE__ */ $.createElement(Y.h3, x({
    "data-orientation": o.orientation,
    "data-state": Si(a.open),
    "data-disabled": a.disabled ? "" : void 0
  }, r, {
    ref: n
  }));
}), xa = "AccordionTrigger", Ud = /* @__PURE__ */ $.forwardRef((e, n) => {
  const { __scopeAccordion: t, ...r } = e, o = cr($t, t), a = So(xa, t), i = Ld(xa, t), s = Po(t);
  return /* @__PURE__ */ $.createElement(To.ItemSlot, {
    scope: t
  }, /* @__PURE__ */ $.createElement(Md, x({
    "aria-disabled": a.open && !i.collapsible || void 0,
    "data-orientation": o.orientation,
    id: a.triggerId
  }, s, r, {
    ref: n
  })));
}), zd = "AccordionContent", Kd = /* @__PURE__ */ $.forwardRef((e, n) => {
  const { __scopeAccordion: t, ...r } = e, o = cr($t, t), a = So(zd, t), i = Po(t);
  return /* @__PURE__ */ $.createElement(Od, x({
    role: "region",
    "aria-labelledby": a.triggerId,
    "data-orientation": o.orientation
  }, i, r, {
    ref: n,
    style: {
      "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
      "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
      ...e.style
    }
  }));
});
function Si(e) {
  return e ? "open" : "closed";
}
const Gd = _i, qd = Hd, Xd = Yd, Jr = Ud, Di = Kd;
function Mi(e) {
  var n, t, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (n = 0; n < e.length; n++)
        e[n] && (t = Mi(e[n])) && (r && (r += " "), r += t);
    else
      for (n in e)
        e[n] && (r && (r += " "), r += n);
  return r;
}
function Oi() {
  for (var e, n, t = 0, r = ""; t < arguments.length; )
    (e = arguments[t++]) && (n = Mi(e)) && (r && (r += " "), r += n);
  return r;
}
function Zd() {
  for (var e = 0, n, t, r = ""; e < arguments.length; )
    (n = arguments[e++]) && (t = Ni(n)) && (r && (r += " "), r += t);
  return r;
}
function Ni(e) {
  if (typeof e == "string")
    return e;
  for (var n, t = "", r = 0; r < e.length; r++)
    e[r] && (n = Ni(e[r])) && (t && (t += " "), t += n);
  return t;
}
var Do = "-";
function Qd(e) {
  var n = eu(e), t = e.conflictingClassGroups, r = e.conflictingClassGroupModifiers, o = r === void 0 ? {} : r;
  function a(s) {
    var c = s.split(Do);
    return c[0] === "" && c.length !== 1 && c.shift(), Ri(c, n) || Jd(s);
  }
  function i(s, c) {
    var l = t[s] || [];
    return c && o[s] ? [].concat(l, o[s]) : l;
  }
  return {
    getClassGroupId: a,
    getConflictingClassGroupIds: i
  };
}
function Ri(e, n) {
  var i;
  if (e.length === 0)
    return n.classGroupId;
  var t = e[0], r = n.nextPart.get(t), o = r ? Ri(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (n.validators.length !== 0) {
    var a = e.join(Do);
    return (i = n.validators.find(function(s) {
      var c = s.validator;
      return c(a);
    })) == null ? void 0 : i.classGroupId;
  }
}
var Ca = /^\[(.+)\]$/;
function Jd(e) {
  if (Ca.test(e)) {
    var n = Ca.exec(e)[1], t = n == null ? void 0 : n.substring(0, n.indexOf(":"));
    if (t)
      return "arbitrary.." + t;
  }
}
function eu(e) {
  var n = e.theme, t = e.prefix, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, o = nu(Object.entries(e.classGroups), t);
  return o.forEach(function(a) {
    var i = a[0], s = a[1];
    eo(s, r, i, n);
  }), r;
}
function eo(e, n, t, r) {
  e.forEach(function(o) {
    if (typeof o == "string") {
      var a = o === "" ? n : _a(n, o);
      a.classGroupId = t;
      return;
    }
    if (typeof o == "function") {
      if (tu(o)) {
        eo(o(r), n, t, r);
        return;
      }
      n.validators.push({
        validator: o,
        classGroupId: t
      });
      return;
    }
    Object.entries(o).forEach(function(i) {
      var s = i[0], c = i[1];
      eo(c, _a(n, s), t, r);
    });
  });
}
function _a(e, n) {
  var t = e;
  return n.split(Do).forEach(function(r) {
    t.nextPart.has(r) || t.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), t = t.nextPart.get(r);
  }), t;
}
function tu(e) {
  return e.isThemeGetter;
}
function nu(e, n) {
  return n ? e.map(function(t) {
    var r = t[0], o = t[1], a = o.map(function(i) {
      return typeof i == "string" ? n + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(function(s) {
        var c = s[0], l = s[1];
        return [n + c, l];
      })) : i;
    });
    return [r, a];
  }) : e;
}
function ru(e) {
  if (e < 1)
    return {
      get: function() {
      },
      set: function() {
      }
    };
  var n = 0, t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  function o(a, i) {
    t.set(a, i), n++, n > e && (n = 0, r = t, t = /* @__PURE__ */ new Map());
  }
  return {
    get: function(i) {
      var s = t.get(i);
      if (s !== void 0)
        return s;
      if ((s = r.get(i)) !== void 0)
        return o(i, s), s;
    },
    set: function(i, s) {
      t.has(i) ? t.set(i, s) : o(i, s);
    }
  };
}
var ki = "!";
function ou(e) {
  var n = e.separator || ":", t = n.length === 1, r = n[0], o = n.length;
  return function(i) {
    for (var s = [], c = 0, l = 0, u, d = 0; d < i.length; d++) {
      var f = i[d];
      if (c === 0) {
        if (f === r && (t || i.slice(d, d + o) === n)) {
          s.push(i.slice(l, d)), l = d + o;
          continue;
        }
        if (f === "/") {
          u = d;
          continue;
        }
      }
      f === "[" ? c++ : f === "]" && c--;
    }
    var p = s.length === 0 ? i : i.substring(l), v = p.startsWith(ki), m = v ? p.substring(1) : p, b = u && u > l ? u - l : void 0;
    return {
      modifiers: s,
      hasImportantModifier: v,
      baseClassName: m,
      maybePostfixModifierPosition: b
    };
  };
}
function au(e) {
  if (e.length <= 1)
    return e;
  var n = [], t = [];
  return e.forEach(function(r) {
    var o = r[0] === "[";
    o ? (n.push.apply(n, t.sort().concat([r])), t = []) : t.push(r);
  }), n.push.apply(n, t.sort()), n;
}
function iu(e) {
  return {
    cache: ru(e.cacheSize),
    splitModifiers: ou(e),
    ...Qd(e)
  };
}
var su = /\s+/;
function cu(e, n) {
  var t = n.splitModifiers, r = n.getClassGroupId, o = n.getConflictingClassGroupIds, a = /* @__PURE__ */ new Set();
  return e.trim().split(su).map(function(i) {
    var s = t(i), c = s.modifiers, l = s.hasImportantModifier, u = s.baseClassName, d = s.maybePostfixModifierPosition, f = r(d ? u.substring(0, d) : u), p = !!d;
    if (!f) {
      if (!d)
        return {
          isTailwindClass: !1,
          originalClassName: i
        };
      if (f = r(u), !f)
        return {
          isTailwindClass: !1,
          originalClassName: i
        };
      p = !1;
    }
    var v = au(c).join(":"), m = l ? v + ki : v;
    return {
      isTailwindClass: !0,
      modifierId: m,
      classGroupId: f,
      originalClassName: i,
      hasPostfixModifier: p
    };
  }).reverse().filter(function(i) {
    if (!i.isTailwindClass)
      return !0;
    var s = i.modifierId, c = i.classGroupId, l = i.hasPostfixModifier, u = s + c;
    return a.has(u) ? !1 : (a.add(u), o(c, l).forEach(function(d) {
      return a.add(s + d);
    }), !0);
  }).reverse().map(function(i) {
    return i.originalClassName;
  }).join(" ");
}
function Ea() {
  for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
    n[t] = arguments[t];
  var r, o, a, i = s;
  function s(l) {
    var u = n[0], d = n.slice(1), f = d.reduce(function(p, v) {
      return v(p);
    }, u());
    return r = iu(f), o = r.cache.get, a = r.cache.set, i = c, c(l);
  }
  function c(l) {
    var u = o(l);
    if (u)
      return u;
    var d = cu(l, r);
    return a(l, d), d;
  }
  return function() {
    return i(Zd.apply(null, arguments));
  };
}
function he(e) {
  var n = function(r) {
    return r[e] || [];
  };
  return n.isThemeGetter = !0, n;
}
var Ai = /^\[(?:([a-z-]+):)?(.+)\]$/i, lu = /^\d+\/\d+$/, du = /* @__PURE__ */ new Set(["px", "full", "screen"]), uu = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, fu = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, pu = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function He(e) {
  return Pt(e) || du.has(e) || lu.test(e) || to(e);
}
function to(e) {
  return kt(e, "length", $u);
}
function vu(e) {
  return kt(e, "size", Ii);
}
function mu(e) {
  return kt(e, "position", Ii);
}
function bu(e) {
  return kt(e, "url", yu);
}
function kn(e) {
  return kt(e, "number", Pt);
}
function Pt(e) {
  return !Number.isNaN(Number(e));
}
function hu(e) {
  return e.endsWith("%") && Pt(e.slice(0, -1));
}
function an(e) {
  return Ta(e) || kt(e, "number", Ta);
}
function ae(e) {
  return Ai.test(e);
}
function sn() {
  return !0;
}
function ft(e) {
  return uu.test(e);
}
function gu(e) {
  return kt(e, "", wu);
}
function kt(e, n, t) {
  var r = Ai.exec(e);
  return r ? r[1] ? r[1] === n : t(r[2]) : !1;
}
function $u(e) {
  return fu.test(e);
}
function Ii() {
  return !1;
}
function yu(e) {
  return e.startsWith("url(");
}
function Ta(e) {
  return Number.isInteger(Number(e));
}
function wu(e) {
  return pu.test(e);
}
function Pa() {
  var e = he("colors"), n = he("spacing"), t = he("blur"), r = he("brightness"), o = he("borderColor"), a = he("borderRadius"), i = he("borderSpacing"), s = he("borderWidth"), c = he("contrast"), l = he("grayscale"), u = he("hueRotate"), d = he("invert"), f = he("gap"), p = he("gradientColorStops"), v = he("gradientColorStopPositions"), m = he("inset"), b = he("margin"), y = he("opacity"), g = he("padding"), w = he("saturate"), _ = he("scale"), S = he("sepia"), N = he("skew"), P = he("space"), F = he("translate"), H = function() {
    return ["auto", "contain", "none"];
  }, q = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, B = function() {
    return ["auto", ae, n];
  }, j = function() {
    return [ae, n];
  }, G = function() {
    return ["", He];
  }, D = function() {
    return ["auto", Pt, ae];
  }, A = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, L = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, k = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, O = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, V = function() {
    return ["", "0", ae];
  }, te = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, ne = function() {
    return [Pt, kn];
  }, de = function() {
    return [Pt, ae];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [sn],
      spacing: [He],
      blur: ["none", "", ft, ae],
      brightness: ne(),
      borderColor: [e],
      borderRadius: ["none", "", "full", ft, ae],
      borderSpacing: j(),
      borderWidth: G(),
      contrast: ne(),
      grayscale: V(),
      hueRotate: de(),
      invert: V(),
      gap: j(),
      gradientColorStops: [e],
      gradientColorStopPositions: [hu, to],
      inset: B(),
      margin: B(),
      opacity: ne(),
      padding: j(),
      saturate: ne(),
      scale: ne(),
      sepia: V(),
      skew: de(),
      space: j(),
      translate: j()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", ae]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [ft]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": te()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": te()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [].concat(A(), [ae])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: q()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": q()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": q()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: H()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": H()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": H()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [m]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [m]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [m]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [m]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [m]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [m]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [m]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [m]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [m]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", an]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: B()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", ae]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: V()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: V()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", an]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [sn]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", an]
        }, ae]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": D()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": D()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [sn]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [an]
        }, ae]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": D()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": D()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", ae]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", ae]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [f]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [f]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [f]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal"].concat(O())
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal"].concat(O(), ["baseline"])
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [].concat(O(), ["baseline"])
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [g]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [g]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [g]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [g]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [g]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [g]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [g]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [g]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [g]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [b]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [b]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [b]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [b]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [b]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [b]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [b]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [b]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [b]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [P]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [P]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", ae, n]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", ae, He]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [ft]
        }, ft, ae]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [ae, n, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", ae, He]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [ae, n, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", ft, to]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", kn]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [sn]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ae]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Pt, kn]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", ae, He]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ae]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", ae]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [y]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [y]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [].concat(L(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", He]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", ae, He]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: j()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ae]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", ae]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [y]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [].concat(A(), [mu])
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", vu]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, bu]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [v]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [v]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [v]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [p]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [p]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [p]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [a]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [a]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [a]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [a]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [a]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [a]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [a]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [a]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [a]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [a]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [a]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [a]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [a]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [a]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [a]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [s]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [s]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [s]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [s]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [s]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [s]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [s]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [s]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [s]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [y]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [].concat(L(), ["hidden"])
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [s]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [s]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [y]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: L()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [o]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [o]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [o]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [o]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [o]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [o]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [o]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [o]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [""].concat(L())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ae, He]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [He]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: G()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [y]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [He]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", ft, gu]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [sn]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [y]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": k()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": k()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [t]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [r]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [c]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", ft, ae]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [l]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [u]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [d]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [w]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [S]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [t]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [r]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [c]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [l]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [u]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [d]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [y]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [w]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [S]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [i]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [i]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [i]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ae]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: de()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", ae]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: de()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", ae]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [_]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [_]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [_]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [an, ae]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [F]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [F]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [N]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [N]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ae]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: ["appearance-none"],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ae]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": j()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": j()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": j()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": j()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": j()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": j()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": j()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": j()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": j()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": j()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": j()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": j()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": j()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": j()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": j()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": j()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": j()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": j()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "pinch-zoom", "manipulation", {
          pan: ["x", "left", "right", "y", "up", "down"]
        }]
      }],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", ae]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [He, kn]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
function xu(e, n) {
  for (var t in n)
    Li(e, t, n[t]);
  return e;
}
var Cu = Object.prototype.hasOwnProperty, _u = /* @__PURE__ */ new Set(["string", "number", "boolean"]);
function Li(e, n, t) {
  if (!Cu.call(e, n) || _u.has(typeof t) || t === null) {
    e[n] = t;
    return;
  }
  if (Array.isArray(t) && Array.isArray(e[n])) {
    e[n] = e[n].concat(t);
    return;
  }
  if (typeof t == "object" && typeof e[n] == "object") {
    if (e[n] === null) {
      e[n] = t;
      return;
    }
    for (var r in t)
      Li(e[n], r, t[r]);
  }
}
function Eu(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  return typeof e == "function" ? Ea.apply(void 0, [Pa, e].concat(t)) : Ea.apply(void 0, [function() {
    return xu(Pa(), e);
  }].concat(t));
}
const Tu = Eu({ prefix: "~" });
function M(...e) {
  return Tu(Oi(e));
}
const xw = $.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ E.jsx(
  Gd,
  {
    ref: t,
    className: M("tw-reset", e),
    ...n
  }
)), Pu = $.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ E.jsx(
  qd,
  {
    ref: t,
    className: M("~border-b", e),
    ...n
  }
));
Pu.displayName = "AccordionItem";
const Su = $.forwardRef(
  ({
    className: e,
    children: n,
    caretOnly: t,
    caretAlign: r = "right",
    caretClasses: o,
    noCaret: a = !1,
    ...i
  }, s) => /* @__PURE__ */ E.jsx(Xd, { className: "~flex", children: t ? /* @__PURE__ */ E.jsxs(
    "div",
    {
      className: M(
        "body-medium ~flex ~flex-1 ~items-center ~justify-between ~py-4 ~font-normal ~leading-none",
        r === "left" ? "~justify-normal ~gap-3" : "",
        e
      ),
      children: [
        r === "right" && n,
        /* @__PURE__ */ E.jsx(
          Jr,
          {
            ref: s,
            className: M(
              "[&[data-state=open]>svg]:~rotate-180",
              r === "left" && "~-rotate-90 [&[data-state=open]>svg]:~rotate-90",
              e
            ),
            children: /* @__PURE__ */ E.jsx(
              $a,
              {
                className: M(
                  "~h-4 ~w-4 ~shrink-0 ~text-primary ~transition-transform ~duration-200",
                  o
                )
              }
            )
          }
        ),
        r === "left" && n
      ]
    }
  ) : /* @__PURE__ */ E.jsxs(
    Jr,
    {
      ref: s,
      className: M(
        "body-medium ~flex ~flex-1 ~items-center ~justify-between ~py-4 ~font-normal ~leading-none ~transition-all hover:~underline [&[data-state=open]>svg]:~rotate-180",
        r === "left" ? "~flex-row-reverse ~justify-normal ~gap-3 [&[data-state=open]>svg]:~rotate-90" : "",
        e
      ),
      ...i,
      children: [
        n,
        !a && /* @__PURE__ */ E.jsx(
          $a,
          {
            className: M(
              "~h-4 ~w-4 ~shrink-0 ~text-primary ~transition-transform ~duration-200",
              o
            )
          }
        )
      ]
    }
  ) })
);
Su.displayName = Jr.displayName;
const Du = $.forwardRef(({ className: e, children: n, ...t }, r) => /* @__PURE__ */ E.jsx(
  Di,
  {
    ref: r,
    className: M(
      "~overflow-hidden data-[state=closed]:~animate-accordion-up data-[state=open]:~animate-accordion-down"
    ),
    ...t,
    children: /* @__PURE__ */ E.jsx("div", { className: M("~pb-4 ~pt-0", e), children: n })
  }
));
Du.displayName = Di.displayName;
function Mu(e, n = globalThis == null ? void 0 : globalThis.document) {
  const t = _e(e);
  K(() => {
    const r = (o) => {
      o.key === "Escape" && t(o);
    };
    return n.addEventListener("keydown", r), () => n.removeEventListener("keydown", r);
  }, [
    t,
    n
  ]);
}
const no = "dismissableLayer.update", Ou = "dismissableLayer.pointerDownOutside", Nu = "dismissableLayer.focusOutside";
let Sa;
const Fi = /* @__PURE__ */ We({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Jt = /* @__PURE__ */ T((e, n) => {
  var t;
  const { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: o, onPointerDownOutside: a, onFocusOutside: i, onInteractOutside: s, onDismiss: c, ...l } = e, u = Le(Fi), [d, f] = z(null), p = (t = d == null ? void 0 : d.ownerDocument) !== null && t !== void 0 ? t : globalThis == null ? void 0 : globalThis.document, [, v] = z({}), m = re(
    n,
    (F) => f(F)
  ), b = Array.from(u.layers), [y] = [
    ...u.layersWithOutsidePointerEventsDisabled
  ].slice(-1), g = b.indexOf(y), w = d ? b.indexOf(d) : -1, _ = u.layersWithOutsidePointerEventsDisabled.size > 0, S = w >= g, N = ku((F) => {
    const H = F.target, q = [
      ...u.branches
    ].some(
      (B) => B.contains(H)
    );
    !S || q || (a == null || a(F), s == null || s(F), F.defaultPrevented || c == null || c());
  }, p), P = Au((F) => {
    const H = F.target;
    [
      ...u.branches
    ].some(
      (B) => B.contains(H)
    ) || (i == null || i(F), s == null || s(F), F.defaultPrevented || c == null || c());
  }, p);
  return Mu((F) => {
    w === u.layers.size - 1 && (o == null || o(F), !F.defaultPrevented && c && (F.preventDefault(), c()));
  }, p), K(() => {
    if (d)
      return r && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Sa = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), Da(), () => {
        r && u.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = Sa);
      };
  }, [
    d,
    p,
    r,
    u
  ]), K(() => () => {
    d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), Da());
  }, [
    d,
    u
  ]), K(() => {
    const F = () => v({});
    return document.addEventListener(no, F), () => document.removeEventListener(no, F);
  }, []), /* @__PURE__ */ h(Y.div, x({}, l, {
    ref: m,
    style: {
      pointerEvents: _ ? S ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: I(e.onFocusCapture, P.onFocusCapture),
    onBlurCapture: I(e.onBlurCapture, P.onBlurCapture),
    onPointerDownCapture: I(e.onPointerDownCapture, N.onPointerDownCapture)
  }));
}), Ru = /* @__PURE__ */ T((e, n) => {
  const t = Le(Fi), r = R(null), o = re(n, r);
  return K(() => {
    const a = r.current;
    if (a)
      return t.branches.add(a), () => {
        t.branches.delete(a);
      };
  }, [
    t.branches
  ]), /* @__PURE__ */ h(Y.div, x({}, e, {
    ref: o
  }));
});
function ku(e, n = globalThis == null ? void 0 : globalThis.document) {
  const t = _e(e), r = R(!1), o = R(() => {
  });
  return K(() => {
    const a = (s) => {
      if (s.target && !r.current) {
        let l = function() {
          Wi(Ou, t, c, {
            discrete: !0
          });
        };
        const c = {
          originalEvent: s
        };
        s.pointerType === "touch" ? (n.removeEventListener("click", o.current), o.current = l, n.addEventListener("click", o.current, {
          once: !0
        })) : l();
      }
      r.current = !1;
    }, i = window.setTimeout(() => {
      n.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(i), n.removeEventListener("pointerdown", a), n.removeEventListener("click", o.current);
    };
  }, [
    n,
    t
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function Au(e, n = globalThis == null ? void 0 : globalThis.document) {
  const t = _e(e), r = R(!1);
  return K(() => {
    const o = (a) => {
      a.target && !r.current && Wi(Nu, t, {
        originalEvent: a
      }, {
        discrete: !1
      });
    };
    return n.addEventListener("focusin", o), () => n.removeEventListener("focusin", o);
  }, [
    n,
    t
  ]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Da() {
  const e = new CustomEvent(no);
  document.dispatchEvent(e);
}
function Wi(e, n, t, { discrete: r }) {
  const o = t.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: t
  });
  n && o.addEventListener(e, n, {
    once: !0
  }), r ? Co(o, a) : o.dispatchEvent(a);
}
const Iu = Jt, Lu = Ru, Rr = "focusScope.autoFocusOnMount", kr = "focusScope.autoFocusOnUnmount", Ma = {
  bubbles: !1,
  cancelable: !0
}, lr = /* @__PURE__ */ T((e, n) => {
  const { loop: t = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: a, ...i } = e, [s, c] = z(null), l = _e(o), u = _e(a), d = R(null), f = re(
    n,
    (m) => c(m)
  ), p = R({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  K(() => {
    if (r) {
      let m = function(w) {
        if (p.paused || !s)
          return;
        const _ = w.target;
        s.contains(_) ? d.current = _ : vt(d.current, {
          select: !0
        });
      }, b = function(w) {
        if (p.paused || !s)
          return;
        const _ = w.relatedTarget;
        _ !== null && (s.contains(_) || vt(d.current, {
          select: !0
        }));
      }, y = function(w) {
        const _ = document.activeElement;
        for (const S of w)
          S.removedNodes.length > 0 && (s != null && s.contains(_) || vt(s));
      };
      document.addEventListener("focusin", m), document.addEventListener("focusout", b);
      const g = new MutationObserver(y);
      return s && g.observe(s, {
        childList: !0,
        subtree: !0
      }), () => {
        document.removeEventListener("focusin", m), document.removeEventListener("focusout", b), g.disconnect();
      };
    }
  }, [
    r,
    s,
    p.paused
  ]), K(() => {
    if (s) {
      Na.add(p);
      const m = document.activeElement;
      if (!s.contains(m)) {
        const y = new CustomEvent(Rr, Ma);
        s.addEventListener(Rr, l), s.dispatchEvent(y), y.defaultPrevented || (Fu(Bu(ji(s)), {
          select: !0
        }), document.activeElement === m && vt(s));
      }
      return () => {
        s.removeEventListener(Rr, l), setTimeout(() => {
          const y = new CustomEvent(kr, Ma);
          s.addEventListener(kr, u), s.dispatchEvent(y), y.defaultPrevented || vt(m ?? document.body, {
            select: !0
          }), s.removeEventListener(kr, u), Na.remove(p);
        }, 0);
      };
    }
  }, [
    s,
    l,
    u,
    p
  ]);
  const v = ee((m) => {
    if (!t && !r || p.paused)
      return;
    const b = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey, y = document.activeElement;
    if (b && y) {
      const g = m.currentTarget, [w, _] = Wu(g);
      w && _ ? !m.shiftKey && y === _ ? (m.preventDefault(), t && vt(w, {
        select: !0
      })) : m.shiftKey && y === w && (m.preventDefault(), t && vt(_, {
        select: !0
      })) : y === g && m.preventDefault();
    }
  }, [
    t,
    r,
    p.paused
  ]);
  return /* @__PURE__ */ h(Y.div, x({
    tabIndex: -1
  }, i, {
    ref: f,
    onKeyDown: v
  }));
});
function Fu(e, { select: n = !1 } = {}) {
  const t = document.activeElement;
  for (const r of e)
    if (vt(r, {
      select: n
    }), document.activeElement !== t)
      return;
}
function Wu(e) {
  const n = ji(e), t = Oa(n, e), r = Oa(n.reverse(), e);
  return [
    t,
    r
  ];
}
function ji(e) {
  const n = [], t = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; t.nextNode(); )
    n.push(t.currentNode);
  return n;
}
function Oa(e, n) {
  for (const t of e)
    if (!ju(t, {
      upTo: n
    }))
      return t;
}
function ju(e, { upTo: n }) {
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (n !== void 0 && e === n)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}
function Vu(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function vt(e, { select: n = !1 } = {}) {
  if (e && e.focus) {
    const t = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== t && Vu(e) && n && e.select();
  }
}
const Na = Hu();
function Hu() {
  let e = [];
  return {
    add(n) {
      const t = e[0];
      n !== t && (t == null || t.pause()), e = Ra(e, n), e.unshift(n);
    },
    remove(n) {
      var t;
      e = Ra(e, n), (t = e[0]) === null || t === void 0 || t.resume();
    }
  };
}
function Ra(e, n) {
  const t = [
    ...e
  ], r = t.indexOf(n);
  return r !== -1 && t.splice(r, 1), t;
}
function Bu(e) {
  return e.filter(
    (n) => n.tagName !== "A"
  );
}
const xn = /* @__PURE__ */ T((e, n) => {
  var t;
  const { container: r = globalThis == null || (t = globalThis.document) === null || t === void 0 ? void 0 : t.body, ...o } = e;
  return r ? /* @__PURE__ */ ad.createPortal(/* @__PURE__ */ h(Y.div, x({}, o, {
    ref: n
  })), r) : null;
});
let Ar = 0;
function dr() {
  K(() => {
    var e, n;
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = t[0]) !== null && e !== void 0 ? e : ka()), document.body.insertAdjacentElement("beforeend", (n = t[1]) !== null && n !== void 0 ? n : ka()), Ar++, () => {
      Ar === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), Ar--;
    };
  }, []);
}
function ka() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
var qe = function() {
  return qe = Object.assign || function(n) {
    for (var t, r = 1, o = arguments.length; r < o; r++) {
      t = arguments[r];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (n[a] = t[a]);
    }
    return n;
  }, qe.apply(this, arguments);
};
function Vi(e, n) {
  var t = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
}
function Yu(e, n, t) {
  if (t || arguments.length === 2)
    for (var r = 0, o = n.length, a; r < o; r++)
      (a || !(r in n)) && (a || (a = Array.prototype.slice.call(n, 0, r)), a[r] = n[r]);
  return e.concat(a || Array.prototype.slice.call(n));
}
var Bn = "right-scroll-bar-position", Yn = "width-before-scroll-bar", Uu = "with-scroll-bars-hidden", zu = "--removed-body-scroll-bar-size";
function Ku(e, n) {
  return typeof e == "function" ? e(n) : e && (e.current = n), e;
}
function Gu(e, n) {
  var t = z(function() {
    return {
      // value
      value: e,
      // last callback
      callback: n,
      // "memoized" public interface
      facade: {
        get current() {
          return t.value;
        },
        set current(r) {
          var o = t.value;
          o !== r && (t.value = r, t.callback(r, o));
        }
      }
    };
  })[0];
  return t.callback = n, t.facade;
}
function qu(e, n) {
  return Gu(n || null, function(t) {
    return e.forEach(function(r) {
      return Ku(r, t);
    });
  });
}
function Xu(e) {
  return e;
}
function Zu(e, n) {
  n === void 0 && (n = Xu);
  var t = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return t.length ? t[t.length - 1] : e;
    },
    useMedium: function(a) {
      var i = n(a, r);
      return t.push(i), function() {
        t = t.filter(function(s) {
          return s !== i;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (r = !0; t.length; ) {
        var i = t;
        t = [], i.forEach(a);
      }
      t = {
        push: function(s) {
          return a(s);
        },
        filter: function() {
          return t;
        }
      };
    },
    assignMedium: function(a) {
      r = !0;
      var i = [];
      if (t.length) {
        var s = t;
        t = [], s.forEach(a), i = t;
      }
      var c = function() {
        var u = i;
        i = [], u.forEach(a);
      }, l = function() {
        return Promise.resolve().then(c);
      };
      l(), t = {
        push: function(u) {
          i.push(u), l();
        },
        filter: function(u) {
          return i = i.filter(u), t;
        }
      };
    }
  };
  return o;
}
function Qu(e) {
  e === void 0 && (e = {});
  var n = Zu(null);
  return n.options = qe({ async: !0, ssr: !1 }, e), n;
}
var Hi = function(e) {
  var n = e.sideCar, t = Vi(e, ["sideCar"]);
  if (!n)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = n.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return X.createElement(r, qe({}, t));
};
Hi.isSideCarExport = !0;
function Ju(e, n) {
  return e.useMedium(n), Hi;
}
var Bi = Qu(), Ir = function() {
}, ur = X.forwardRef(function(e, n) {
  var t = X.useRef(null), r = X.useState({
    onScrollCapture: Ir,
    onWheelCapture: Ir,
    onTouchMoveCapture: Ir
  }), o = r[0], a = r[1], i = e.forwardProps, s = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, f = e.sideCar, p = e.noIsolation, v = e.inert, m = e.allowPinchZoom, b = e.as, y = b === void 0 ? "div" : b, g = Vi(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), w = f, _ = qu([t, n]), S = qe(qe({}, g), o);
  return X.createElement(
    X.Fragment,
    null,
    u && X.createElement(w, { sideCar: Bi, removeScrollBar: l, shards: d, noIsolation: p, inert: v, setCallbacks: a, allowPinchZoom: !!m, lockRef: t }),
    i ? X.cloneElement(X.Children.only(s), qe(qe({}, S), { ref: _ })) : X.createElement(y, qe({}, S, { className: c, ref: _ }), s)
  );
});
ur.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
ur.classNames = {
  fullWidth: Yn,
  zeroRight: Bn
};
var Aa, ef = function() {
  if (Aa)
    return Aa;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function tf() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var n = ef();
  return n && e.setAttribute("nonce", n), e;
}
function nf(e, n) {
  e.styleSheet ? e.styleSheet.cssText = n : e.appendChild(document.createTextNode(n));
}
function rf(e) {
  var n = document.head || document.getElementsByTagName("head")[0];
  n.appendChild(e);
}
var of = function() {
  var e = 0, n = null;
  return {
    add: function(t) {
      e == 0 && (n = tf()) && (nf(n, t), rf(n)), e++;
    },
    remove: function() {
      e--, !e && n && (n.parentNode && n.parentNode.removeChild(n), n = null);
    }
  };
}, af = function() {
  var e = of();
  return function(n, t) {
    X.useEffect(function() {
      return e.add(n), function() {
        e.remove();
      };
    }, [n && t]);
  };
}, Yi = function() {
  var e = af(), n = function(t) {
    var r = t.styles, o = t.dynamic;
    return e(r, o), null;
  };
  return n;
}, sf = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Lr = function(e) {
  return parseInt(e || "", 10) || 0;
}, cf = function(e) {
  var n = window.getComputedStyle(document.body), t = n[e === "padding" ? "paddingLeft" : "marginLeft"], r = n[e === "padding" ? "paddingTop" : "marginTop"], o = n[e === "padding" ? "paddingRight" : "marginRight"];
  return [Lr(t), Lr(r), Lr(o)];
}, lf = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return sf;
  var n = cf(e), t = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: n[0],
    top: n[1],
    right: n[2],
    gap: Math.max(0, r - t + n[2] - n[0])
  };
}, df = Yi(), uf = function(e, n, t, r) {
  var o = e.left, a = e.top, i = e.right, s = e.gap;
  return t === void 0 && (t = "margin"), `
  .`.concat(Uu, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(s, "px ").concat(r, `;
  }
  body {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    n && "position: relative ".concat(r, ";"),
    t === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(r, `;
    `),
    t === "padding" && "padding-right: ".concat(s, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Bn, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Yn, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Bn, " .").concat(Bn, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Yn, " .").concat(Yn, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body {
    `).concat(zu, ": ").concat(s, `px;
  }
`);
}, ff = function(e) {
  var n = e.noRelative, t = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r, a = X.useMemo(function() {
    return lf(o);
  }, [o]);
  return X.createElement(df, { styles: uf(a, !n, o, t ? "" : "!important") });
}, ro = !1;
if (typeof window < "u")
  try {
    var An = Object.defineProperty({}, "passive", {
      get: function() {
        return ro = !0, !0;
      }
    });
    window.addEventListener("test", An, An), window.removeEventListener("test", An, An);
  } catch {
    ro = !1;
  }
var Vt = ro ? { passive: !1 } : !1, pf = function(e) {
  return e.tagName === "TEXTAREA";
}, Ui = function(e, n) {
  var t = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    t[n] !== "hidden" && // contains scroll inside self
    !(t.overflowY === t.overflowX && !pf(e) && t[n] === "visible")
  );
}, vf = function(e) {
  return Ui(e, "overflowY");
}, mf = function(e) {
  return Ui(e, "overflowX");
}, Ia = function(e, n) {
  var t = n;
  do {
    typeof ShadowRoot < "u" && t instanceof ShadowRoot && (t = t.host);
    var r = zi(e, t);
    if (r) {
      var o = Ki(e, t), a = o[1], i = o[2];
      if (a > i)
        return !0;
    }
    t = t.parentNode;
  } while (t && t !== document.body);
  return !1;
}, bf = function(e) {
  var n = e.scrollTop, t = e.scrollHeight, r = e.clientHeight;
  return [
    n,
    t,
    r
  ];
}, hf = function(e) {
  var n = e.scrollLeft, t = e.scrollWidth, r = e.clientWidth;
  return [
    n,
    t,
    r
  ];
}, zi = function(e, n) {
  return e === "v" ? vf(n) : mf(n);
}, Ki = function(e, n) {
  return e === "v" ? bf(n) : hf(n);
}, gf = function(e, n) {
  return e === "h" && n === "rtl" ? -1 : 1;
}, $f = function(e, n, t, r, o) {
  var a = gf(e, window.getComputedStyle(n).direction), i = a * r, s = t.target, c = n.contains(s), l = !1, u = i > 0, d = 0, f = 0;
  do {
    var p = Ki(e, s), v = p[0], m = p[1], b = p[2], y = m - b - a * v;
    (v || y) && zi(e, s) && (d += y, f += v), s = s.parentNode;
  } while (
    // portaled content
    !c && s !== document.body || // self content
    c && (n.contains(s) || n === s)
  );
  return (u && (o && d === 0 || !o && i > d) || !u && (o && f === 0 || !o && -i > f)) && (l = !0), l;
}, In = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, La = function(e) {
  return [e.deltaX, e.deltaY];
}, Fa = function(e) {
  return e && "current" in e ? e.current : e;
}, yf = function(e, n) {
  return e[0] === n[0] && e[1] === n[1];
}, wf = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, xf = 0, Ht = [];
function Cf(e) {
  var n = X.useRef([]), t = X.useRef([0, 0]), r = X.useRef(), o = X.useState(xf++)[0], a = X.useState(function() {
    return Yi();
  })[0], i = X.useRef(e);
  X.useEffect(function() {
    i.current = e;
  }, [e]), X.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var m = Yu([e.lockRef.current], (e.shards || []).map(Fa), !0).filter(Boolean);
      return m.forEach(function(b) {
        return b.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), m.forEach(function(b) {
          return b.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = X.useCallback(function(m, b) {
    if ("touches" in m && m.touches.length === 2)
      return !i.current.allowPinchZoom;
    var y = In(m), g = t.current, w = "deltaX" in m ? m.deltaX : g[0] - y[0], _ = "deltaY" in m ? m.deltaY : g[1] - y[1], S, N = m.target, P = Math.abs(w) > Math.abs(_) ? "h" : "v";
    if ("touches" in m && P === "h" && N.type === "range")
      return !1;
    var F = Ia(P, N);
    if (!F)
      return !0;
    if (F ? S = P : (S = P === "v" ? "h" : "v", F = Ia(P, N)), !F)
      return !1;
    if (!r.current && "changedTouches" in m && (w || _) && (r.current = S), !S)
      return !0;
    var H = r.current || S;
    return $f(H, b, m, H === "h" ? w : _, !0);
  }, []), c = X.useCallback(function(m) {
    var b = m;
    if (!(!Ht.length || Ht[Ht.length - 1] !== a)) {
      var y = "deltaY" in b ? La(b) : In(b), g = n.current.filter(function(S) {
        return S.name === b.type && S.target === b.target && yf(S.delta, y);
      })[0];
      if (g && g.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!g) {
        var w = (i.current.shards || []).map(Fa).filter(Boolean).filter(function(S) {
          return S.contains(b.target);
        }), _ = w.length > 0 ? s(b, w[0]) : !i.current.noIsolation;
        _ && b.cancelable && b.preventDefault();
      }
    }
  }, []), l = X.useCallback(function(m, b, y, g) {
    var w = { name: m, delta: b, target: y, should: g };
    n.current.push(w), setTimeout(function() {
      n.current = n.current.filter(function(_) {
        return _ !== w;
      });
    }, 1);
  }, []), u = X.useCallback(function(m) {
    t.current = In(m), r.current = void 0;
  }, []), d = X.useCallback(function(m) {
    l(m.type, La(m), m.target, s(m, e.lockRef.current));
  }, []), f = X.useCallback(function(m) {
    l(m.type, In(m), m.target, s(m, e.lockRef.current));
  }, []);
  X.useEffect(function() {
    return Ht.push(a), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", c, Vt), document.addEventListener("touchmove", c, Vt), document.addEventListener("touchstart", u, Vt), function() {
      Ht = Ht.filter(function(m) {
        return m !== a;
      }), document.removeEventListener("wheel", c, Vt), document.removeEventListener("touchmove", c, Vt), document.removeEventListener("touchstart", u, Vt);
    };
  }, []);
  var p = e.removeScrollBar, v = e.inert;
  return X.createElement(
    X.Fragment,
    null,
    v ? X.createElement(a, { styles: wf(o) }) : null,
    p ? X.createElement(ff, { gapMode: "margin" }) : null
  );
}
const _f = Ju(Bi, Cf);
var Gi = X.forwardRef(function(e, n) {
  return X.createElement(ur, qe({}, e, { ref: n, sideCar: _f }));
});
Gi.classNames = ur.classNames;
const fr = Gi;
var Ef = function(e) {
  if (typeof document > "u")
    return null;
  var n = Array.isArray(e) ? e[0] : e;
  return n.ownerDocument.body;
}, Bt = /* @__PURE__ */ new WeakMap(), Ln = /* @__PURE__ */ new WeakMap(), Fn = {}, Fr = 0, qi = function(e) {
  return e && (e.host || qi(e.parentNode));
}, Tf = function(e, n) {
  return n.map(function(t) {
    if (e.contains(t))
      return t;
    var r = qi(t);
    return r && e.contains(r) ? r : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(t) {
    return !!t;
  });
}, Pf = function(e, n, t, r) {
  var o = Tf(n, Array.isArray(e) ? e : [e]);
  Fn[t] || (Fn[t] = /* @__PURE__ */ new WeakMap());
  var a = Fn[t], i = [], s = /* @__PURE__ */ new Set(), c = new Set(o), l = function(d) {
    !d || s.has(d) || (s.add(d), l(d.parentNode));
  };
  o.forEach(l);
  var u = function(d) {
    !d || c.has(d) || Array.prototype.forEach.call(d.children, function(f) {
      if (s.has(f))
        u(f);
      else {
        var p = f.getAttribute(r), v = p !== null && p !== "false", m = (Bt.get(f) || 0) + 1, b = (a.get(f) || 0) + 1;
        Bt.set(f, m), a.set(f, b), i.push(f), m === 1 && v && Ln.set(f, !0), b === 1 && f.setAttribute(t, "true"), v || f.setAttribute(r, "true");
      }
    });
  };
  return u(n), s.clear(), Fr++, function() {
    i.forEach(function(d) {
      var f = Bt.get(d) - 1, p = a.get(d) - 1;
      Bt.set(d, f), a.set(d, p), f || (Ln.has(d) || d.removeAttribute(r), Ln.delete(d)), p || d.removeAttribute(t);
    }), Fr--, Fr || (Bt = /* @__PURE__ */ new WeakMap(), Bt = /* @__PURE__ */ new WeakMap(), Ln = /* @__PURE__ */ new WeakMap(), Fn = {});
  };
}, pr = function(e, n, t) {
  t === void 0 && (t = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = n || Ef(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), Pf(r, o, t, "aria-hidden")) : function() {
    return null;
  };
};
const Xi = "Dialog", [Zi, Qi] = xe(Xi), [Sf, Ke] = Zi(Xi), Df = (e) => {
  const { __scopeDialog: n, children: t, open: r, defaultOpen: o, onOpenChange: a, modal: i = !0 } = e, s = R(null), c = R(null), [l = !1, u] = Ee({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ h(Sf, {
    scope: n,
    triggerRef: s,
    contentRef: c,
    contentId: De(),
    titleId: De(),
    descriptionId: De(),
    open: l,
    onOpenChange: u,
    onOpenToggle: ee(
      () => u(
        (d) => !d
      ),
      [
        u
      ]
    ),
    modal: i
  }, t);
}, Mf = "DialogTrigger", Of = /* @__PURE__ */ T((e, n) => {
  const { __scopeDialog: t, ...r } = e, o = Ke(Mf, t), a = re(n, o.triggerRef);
  return /* @__PURE__ */ h(Y.button, x({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": Mo(o.open)
  }, r, {
    ref: a,
    onClick: I(e.onClick, o.onOpenToggle)
  }));
}), Ji = "DialogPortal", [Nf, es] = Zi(Ji, {
  forceMount: void 0
}), Rf = (e) => {
  const { __scopeDialog: n, forceMount: t, children: r, container: o } = e, a = Ke(Ji, n);
  return /* @__PURE__ */ h(Nf, {
    scope: n,
    forceMount: t
  }, St.map(
    r,
    (i) => /* @__PURE__ */ h(Me, {
      present: t || a.open
    }, /* @__PURE__ */ h(xn, {
      asChild: !0,
      container: o
    }, i))
  ));
}, oo = "DialogOverlay", kf = /* @__PURE__ */ T((e, n) => {
  const t = es(oo, e.__scopeDialog), { forceMount: r = t.forceMount, ...o } = e, a = Ke(oo, e.__scopeDialog);
  return a.modal ? /* @__PURE__ */ h(Me, {
    present: r || a.open
  }, /* @__PURE__ */ h(Af, x({}, o, {
    ref: n
  }))) : null;
}), Af = /* @__PURE__ */ T((e, n) => {
  const { __scopeDialog: t, ...r } = e, o = Ke(oo, t);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ h(fr, {
      as: ct,
      allowPinchZoom: !0,
      shards: [
        o.contentRef
      ]
    }, /* @__PURE__ */ h(Y.div, x({
      "data-state": Mo(o.open)
    }, r, {
      ref: n,
      style: {
        pointerEvents: "auto",
        ...r.style
      }
    })))
  );
}), Kt = "DialogContent", If = /* @__PURE__ */ T((e, n) => {
  const t = es(Kt, e.__scopeDialog), { forceMount: r = t.forceMount, ...o } = e, a = Ke(Kt, e.__scopeDialog);
  return /* @__PURE__ */ h(Me, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ h(Lf, x({}, o, {
    ref: n
  })) : /* @__PURE__ */ h(Ff, x({}, o, {
    ref: n
  })));
}), Lf = /* @__PURE__ */ T((e, n) => {
  const t = Ke(Kt, e.__scopeDialog), r = R(null), o = re(n, t.contentRef, r);
  return K(() => {
    const a = r.current;
    if (a)
      return pr(a);
  }, []), /* @__PURE__ */ h(ts, x({}, e, {
    ref: o,
    trapFocus: t.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: I(e.onCloseAutoFocus, (a) => {
      var i;
      a.preventDefault(), (i = t.triggerRef.current) === null || i === void 0 || i.focus();
    }),
    onPointerDownOutside: I(e.onPointerDownOutside, (a) => {
      const i = a.detail.originalEvent, s = i.button === 0 && i.ctrlKey === !0;
      (i.button === 2 || s) && a.preventDefault();
    }),
    onFocusOutside: I(
      e.onFocusOutside,
      (a) => a.preventDefault()
    )
  }));
}), Ff = /* @__PURE__ */ T((e, n) => {
  const t = Ke(Kt, e.__scopeDialog), r = R(!1), o = R(!1);
  return /* @__PURE__ */ h(ts, x({}, e, {
    ref: n,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: (a) => {
      var i;
      if ((i = e.onCloseAutoFocus) === null || i === void 0 || i.call(e, a), !a.defaultPrevented) {
        var s;
        r.current || (s = t.triggerRef.current) === null || s === void 0 || s.focus(), a.preventDefault();
      }
      r.current = !1, o.current = !1;
    },
    onInteractOutside: (a) => {
      var i, s;
      (i = e.onInteractOutside) === null || i === void 0 || i.call(e, a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
      const c = a.target;
      ((s = t.triggerRef.current) === null || s === void 0 ? void 0 : s.contains(c)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
    }
  }));
}), ts = /* @__PURE__ */ T((e, n) => {
  const { __scopeDialog: t, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...i } = e, s = Ke(Kt, t), c = R(null), l = re(n, c);
  return dr(), /* @__PURE__ */ h(Nt, null, /* @__PURE__ */ h(lr, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ h(Jt, x({
    role: "dialog",
    id: s.contentId,
    "aria-describedby": s.descriptionId,
    "aria-labelledby": s.titleId,
    "data-state": Mo(s.open)
  }, i, {
    ref: l,
    onDismiss: () => s.onOpenChange(!1)
  }))), !1);
}), ns = "DialogTitle", Wf = /* @__PURE__ */ T((e, n) => {
  const { __scopeDialog: t, ...r } = e, o = Ke(ns, t);
  return /* @__PURE__ */ h(Y.h2, x({
    id: o.titleId
  }, r, {
    ref: n
  }));
}), jf = "DialogDescription", Vf = /* @__PURE__ */ T((e, n) => {
  const { __scopeDialog: t, ...r } = e, o = Ke(jf, t);
  return /* @__PURE__ */ h(Y.p, x({
    id: o.descriptionId
  }, r, {
    ref: n
  }));
}), Hf = "DialogClose", Bf = /* @__PURE__ */ T((e, n) => {
  const { __scopeDialog: t, ...r } = e, o = Ke(Hf, t);
  return /* @__PURE__ */ h(Y.button, x({
    type: "button"
  }, r, {
    ref: n,
    onClick: I(
      e.onClick,
      () => o.onOpenChange(!1)
    )
  }));
});
function Mo(e) {
  return e ? "open" : "closed";
}
const Yf = "DialogTitleWarning", [Uf, Cw] = ud(Yf, {
  contentName: Kt,
  titleName: ns,
  docsSlug: "dialog"
}), rs = Df, os = Of, Oo = Rf, No = kf, Ro = If, ko = Wf, Ao = Vf, Io = Bf, zf = "AlertDialog", [Kf, _w] = xe(zf, [
  Qi
]), dt = Qi(), Gf = (e) => {
  const { __scopeAlertDialog: n, ...t } = e, r = dt(n);
  return /* @__PURE__ */ h(rs, x({}, r, t, {
    modal: !0
  }));
}, qf = /* @__PURE__ */ T((e, n) => {
  const { __scopeAlertDialog: t, ...r } = e, o = dt(t);
  return /* @__PURE__ */ h(os, x({}, o, r, {
    ref: n
  }));
}), Xf = (e) => {
  const { __scopeAlertDialog: n, ...t } = e, r = dt(n);
  return /* @__PURE__ */ h(Oo, x({}, r, t));
}, Zf = /* @__PURE__ */ T((e, n) => {
  const { __scopeAlertDialog: t, ...r } = e, o = dt(t);
  return /* @__PURE__ */ h(No, x({}, o, r, {
    ref: n
  }));
}), as = "AlertDialogContent", [Qf, Jf] = Kf(as), ep = /* @__PURE__ */ T((e, n) => {
  const { __scopeAlertDialog: t, children: r, ...o } = e, a = dt(t), i = R(null), s = re(n, i), c = R(null);
  return /* @__PURE__ */ h(Uf, {
    contentName: as,
    titleName: tp,
    docsSlug: "alert-dialog"
  }, /* @__PURE__ */ h(Qf, {
    scope: t,
    cancelRef: c
  }, /* @__PURE__ */ h(Ro, x({
    role: "alertdialog"
  }, a, o, {
    ref: s,
    onOpenAutoFocus: I(o.onOpenAutoFocus, (l) => {
      var u;
      l.preventDefault(), (u = c.current) === null || u === void 0 || u.focus({
        preventScroll: !0
      });
    }),
    onPointerDownOutside: (l) => l.preventDefault(),
    onInteractOutside: (l) => l.preventDefault()
  }), /* @__PURE__ */ h(xo, null, r), !1)));
}), tp = "AlertDialogTitle", np = /* @__PURE__ */ T((e, n) => {
  const { __scopeAlertDialog: t, ...r } = e, o = dt(t);
  return /* @__PURE__ */ h(ko, x({}, o, r, {
    ref: n
  }));
}), rp = /* @__PURE__ */ T((e, n) => {
  const { __scopeAlertDialog: t, ...r } = e, o = dt(t);
  return /* @__PURE__ */ h(Ao, x({}, o, r, {
    ref: n
  }));
}), op = /* @__PURE__ */ T((e, n) => {
  const { __scopeAlertDialog: t, ...r } = e, o = dt(t);
  return /* @__PURE__ */ h(Io, x({}, o, r, {
    ref: n
  }));
}), ap = "AlertDialogCancel", ip = /* @__PURE__ */ T((e, n) => {
  const { __scopeAlertDialog: t, ...r } = e, { cancelRef: o } = Jf(ap, t), a = dt(t), i = re(n, o);
  return /* @__PURE__ */ h(Io, x({}, a, r, {
    ref: i
  }));
}), sp = Gf, cp = qf, is = Xf, ss = Zf, cs = ep, ls = op, ds = ip, us = np, fs = rp, Ew = sp, Tw = $.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ E.jsx(
  cp,
  {
    ref: t,
    className: M("tw-reset", e),
    ...n
  }
)), ps = ({
  className: e,
  ...n
}) => /* @__PURE__ */ E.jsx(
  is,
  {
    className: M("tw-reset", e),
    ...n
  }
);
ps.displayName = is.displayName;
const vs = $.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ E.jsx(
  ss,
  {
    className: M(
      "~fixed ~inset-0 ~z-50 ~bg-background/80 ~backdrop-blur-sm",
      "data-[state=open]:~animate-in data-[state=open]:~fade-in-0",
      "data-[state=closed]:~animate-out data-[state=closed]:~fade-out-0",
      e
    ),
    ...n,
    ref: t
  }
));
vs.displayName = ss.displayName;
const lp = $.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ E.jsxs(ps, { children: [
  /* @__PURE__ */ E.jsx(vs, {}),
  /* @__PURE__ */ E.jsx(
    cs,
    {
      ref: t,
      className: M(
        "tw-reset ~fixed ~left-[50%] ~top-[50%] ~z-50 ~grid ~w-full ~max-w-lg ~translate-x-[-50%] ~translate-y-[-50%] ~gap-4 ~border ~bg-background ~p-6 ~shadow-lg ~duration-200 sm:~rounded-lg md:~w-full",
        "data-[state=open]:~animate-in data-[state=open]:~fade-in-0 data-[state=open]:~zoom-in-95 data-[state=open]:~slide-in-from-left-1/2 data-[state=open]:~slide-in-from-top-[48%]",
        "data-[state=closed]:~animate-out data-[state=closed]:~fade-out-0 data-[state=closed]:~zoom-out-95 data-[state=closed]:~slide-out-to-left-1/2 data-[state=closed]:~slide-out-to-top-[48%]",
        e
      ),
      ...n
    }
  )
] }));
lp.displayName = cs.displayName;
const dp = ({
  className: e,
  ...n
}) => /* @__PURE__ */ E.jsx(
  "div",
  {
    className: M(
      "~flex ~flex-col ~space-y-2 ~text-center sm:~text-left",
      e
    ),
    ...n
  }
);
dp.displayName = "AlertDialogHeader";
const up = ({
  className: e,
  ...n
}) => /* @__PURE__ */ E.jsx(
  "div",
  {
    className: M(
      "~mt-2 ~flex ~flex-col-reverse sm:~flex-row sm:~justify-end sm:~space-x-2",
      e
    ),
    ...n
  }
);
up.displayName = "AlertDialogFooter";
const fp = $.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ E.jsx(
  us,
  {
    ref: t,
    className: M("body-large ~font-semibold", e),
    ...n
  }
));
fp.displayName = us.displayName;
const pp = $.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ E.jsx(
  fs,
  {
    ref: t,
    className: M("~leading-6 ~text-muted-foreground", e),
    ...n
  }
));
pp.displayName = fs.displayName;
const vp = $.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ E.jsx(
  ls,
  {
    ref: t,
    className: M(fn(), e),
    ...n
  }
));
vp.displayName = ls.displayName;
const mp = $.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ E.jsx(
  ds,
  {
    ref: t,
    className: M(
      fn({ variant: "outline" }),
      "~mt-2 sm:~mt-0",
      e
    ),
    ...n
  }
));
mp.displayName = ds.displayName;
const ms = "Avatar", [bp, Pw] = xe(ms), [hp, bs] = bp(ms), gp = /* @__PURE__ */ T((e, n) => {
  const { __scopeAvatar: t, ...r } = e, [o, a] = z("idle");
  return /* @__PURE__ */ h(hp, {
    scope: t,
    imageLoadingStatus: o,
    onImageLoadingStatusChange: a
  }, /* @__PURE__ */ h(Y.span, x({}, r, {
    ref: n
  })));
}), $p = "AvatarImage", yp = /* @__PURE__ */ T((e, n) => {
  const { __scopeAvatar: t, src: r, onLoadingStatusChange: o = () => {
  }, ...a } = e, i = bs($p, t), s = Cp(r), c = _e((l) => {
    o(l), i.onImageLoadingStatusChange(l);
  });
  return Ie(() => {
    s !== "idle" && c(s);
  }, [
    s,
    c
  ]), s === "loaded" ? /* @__PURE__ */ h(Y.img, x({}, a, {
    ref: n,
    src: r
  })) : null;
}), wp = "AvatarFallback", xp = /* @__PURE__ */ T((e, n) => {
  const { __scopeAvatar: t, delayMs: r, ...o } = e, a = bs(wp, t), [i, s] = z(r === void 0);
  return K(() => {
    if (r !== void 0) {
      const c = window.setTimeout(
        () => s(!0),
        r
      );
      return () => window.clearTimeout(c);
    }
  }, [
    r
  ]), i && a.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ h(Y.span, x({}, o, {
    ref: n
  })) : null;
});
function Cp(e) {
  const [n, t] = z("idle");
  return K(() => {
    if (!e) {
      t("error");
      return;
    }
    let r = !0;
    const o = new window.Image(), a = (i) => () => {
      r && t(i);
    };
    return t("loading"), o.onload = a("loaded"), o.onerror = a("error"), o.src = e, () => {
      r = !1;
    };
  }, [
    e
  ]), n;
}
const hs = gp, gs = yp, $s = xp, _p = $.forwardRef(({ className: e, size: n, style: t, ...r }, o) => /* @__PURE__ */ E.jsx(
  hs,
  {
    ref: o,
    className: M(
      "tw-reset ~relative ~flex ~h-[40px] ~w-[40px] ~shrink-0 ~overflow-hidden ~rounded-full",
      e
    ),
    style: {
      ...n && { width: `${n}px`, height: `${n}px` },
      ...t
    },
    ...r
  }
));
_p.displayName = hs.displayName;
const Ep = $.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ E.jsx(
  gs,
  {
    ref: t,
    className: M("~aspect-square ~h-full ~w-full", e),
    ...n
  }
));
Ep.displayName = gs.displayName;
const Tp = $.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ E.jsx(
  $s,
  {
    ref: t,
    className: M(
      "~flex ~h-full ~w-full ~items-center ~justify-center ~rounded-full ~bg-muted",
      e
    ),
    ...n
  }
));
Tp.displayName = $s.displayName;
const Wa = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, ja = Oi, yt = (e, n) => (t) => {
  var r;
  if ((n == null ? void 0 : n.variants) == null)
    return ja(e, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
  const { variants: o, defaultVariants: a } = n, i = Object.keys(o).map((l) => {
    const u = t == null ? void 0 : t[l], d = a == null ? void 0 : a[l];
    if (u === null)
      return null;
    const f = Wa(u) || Wa(d);
    return o[l][f];
  }), s = t && Object.entries(t).reduce((l, u) => {
    let [d, f] = u;
    return f === void 0 || (l[d] = f), l;
  }, {}), c = n == null || (r = n.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((l, u) => {
    let { class: d, className: f, ...p } = u;
    return Object.entries(p).every((v) => {
      let [m, b] = v;
      return Array.isArray(b) ? b.includes({
        ...a,
        ...s
      }[m]) : {
        ...a,
        ...s
      }[m] === b;
    }) ? [
      ...l,
      d,
      f
    ] : l;
  }, []);
  return ja(e, i, c, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
}, Pp = yt(
  [
    "tw-reset body-x-small ~inline-flex ~cursor-default ~items-center ~rounded-full ~border ~px-3 ~py-0.5 ~transition-colors",
    "focus:~outline-none focus:~ring-2 focus:~ring-ring focus:~ring-offset-2"
  ],
  {
    variants: {
      /** Variant color of the badge. */
      variant: {
        default: "~border-transparent ~bg-primary ~text-primary-foreground ~shadow",
        secondary: "~border-transparent ~bg-secondary ~text-secondary-foreground",
        success: "~border-transparent ~bg-success ~text-success-foreground",
        destructive: "~border-transparent ~bg-destructive ~text-destructive-foreground ~shadow",
        outline: "~text-foreground"
      },
      /** Relative size of the badge. */
      size: {
        default: "",
        small: "~text-[10px]",
        xs: "~py-0 ~text-[10px]"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Sw({
  className: e,
  variant: n,
  size: t,
  background: r,
  color: o,
  style: a,
  ...i
}) {
  return /* @__PURE__ */ E.jsx(
    "div",
    {
      className: M(Pp({ variant: n, size: t }), e),
      style: { background: r, color: o, ...a },
      ...i
    }
  );
}
const fn = yt(
  [
    "tw-reset caption-1 ~inline-flex ~h-12 ~items-center ~justify-center ~rounded-full ~px-6 ~transition-colors",
    "focus-visible:~outline-none focus-visible:~ring-1 focus-visible:~ring-ring focus-visible:~ring-offset-2",
    "disabled:~pointer-events-none disabled:~opacity-50"
  ],
  {
    variants: {
      variant: {
        default: "~bg-primary ~text-primary-foreground ~shadow hover:~bg-primary/90",
        destructive: "~bg-destructive ~text-destructive-foreground ~shadow-sm hover:~bg-destructive/90",
        outline: "~border ~border-border ~bg-transparent ~shadow-sm hover:~bg-accent hover:~text-accent-foreground",
        secondary: "~bg-secondary ~text-secondary-foreground ~shadow-sm hover:~bg-secondary/80",
        ghost: "hover:~bg-accent hover:~text-accent-foreground",
        link: "~text-primary ~underline-offset-4 hover:~underline"
      },
      size: {
        default: "",
        sm: "~text-[10px]",
        lg: "~text-base",
        icon: "~h-12 ~w-12 ~p-0"
      }
    },
    compoundVariants: [
      {
        variant: "link",
        size: ["default", "sm", "lg", "icon"],
        className: "~h-auto ~w-auto ~px-0 ~py-0"
      }
    ],
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), ys = $.forwardRef(
  ({ className: e, variant: n, size: t, asChild: r = !1, ...o }, a) => {
    const i = r ? ct : "button";
    return /* @__PURE__ */ E.jsx(
      i,
      {
        className: M(fn({ variant: n, size: t, className: e })),
        ref: a,
        ...o
      }
    );
  }
);
ys.displayName = "Button";
function At(e, n) {
  if (e == null)
    return {};
  var t = {}, r = Object.keys(e), o, a;
  for (a = 0; a < r.length; a++)
    o = r[a], !(n.indexOf(o) >= 0) && (t[o] = e[o]);
  return t;
}
var Sp = ["color"], Dp = /* @__PURE__ */ T(function(e, n) {
  var t = e.color, r = t === void 0 ? "currentColor" : t, o = At(e, Sp);
  return h("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, o, {
    ref: n
  }), h("path", {
    d: "M4.5 1C4.77614 1 5 1.22386 5 1.5V2H10V1.5C10 1.22386 10.2239 1 10.5 1C10.7761 1 11 1.22386 11 1.5V2H12.5C13.3284 2 14 2.67157 14 3.5V12.5C14 13.3284 13.3284 14 12.5 14H2.5C1.67157 14 1 13.3284 1 12.5V3.5C1 2.67157 1.67157 2 2.5 2H4V1.5C4 1.22386 4.22386 1 4.5 1ZM10 3V3.5C10 3.77614 10.2239 4 10.5 4C10.7761 4 11 3.77614 11 3.5V3H12.5C12.7761 3 13 3.22386 13 3.5V5H2V3.5C2 3.22386 2.22386 3 2.5 3H4V3.5C4 3.77614 4.22386 4 4.5 4C4.77614 4 5 3.77614 5 3.5V3H10ZM2 6V12.5C2 12.7761 2.22386 13 2.5 13H12.5C12.7761 13 13 12.7761 13 12.5V6H2ZM7 7.5C7 7.22386 7.22386 7 7.5 7C7.77614 7 8 7.22386 8 7.5C8 7.77614 7.77614 8 7.5 8C7.22386 8 7 7.77614 7 7.5ZM9.5 7C9.22386 7 9 7.22386 9 7.5C9 7.77614 9.22386 8 9.5 8C9.77614 8 10 7.77614 10 7.5C10 7.22386 9.77614 7 9.5 7ZM11 7.5C11 7.22386 11.2239 7 11.5 7C11.7761 7 12 7.22386 12 7.5C12 7.77614 11.7761 8 11.5 8C11.2239 8 11 7.77614 11 7.5ZM11.5 9C11.2239 9 11 9.22386 11 9.5C11 9.77614 11.2239 10 11.5 10C11.7761 10 12 9.77614 12 9.5C12 9.22386 11.7761 9 11.5 9ZM9 9.5C9 9.22386 9.22386 9 9.5 9C9.77614 9 10 9.22386 10 9.5C10 9.77614 9.77614 10 9.5 10C9.22386 10 9 9.77614 9 9.5ZM7.5 9C7.22386 9 7 9.22386 7 9.5C7 9.77614 7.22386 10 7.5 10C7.77614 10 8 9.77614 8 9.5C8 9.22386 7.77614 9 7.5 9ZM5 9.5C5 9.22386 5.22386 9 5.5 9C5.77614 9 6 9.22386 6 9.5C6 9.77614 5.77614 10 5.5 10C5.22386 10 5 9.77614 5 9.5ZM3.5 9C3.22386 9 3 9.22386 3 9.5C3 9.77614 3.22386 10 3.5 10C3.77614 10 4 9.77614 4 9.5C4 9.22386 3.77614 9 3.5 9ZM3 11.5C3 11.2239 3.22386 11 3.5 11C3.77614 11 4 11.2239 4 11.5C4 11.7761 3.77614 12 3.5 12C3.22386 12 3 11.7761 3 11.5ZM5.5 11C5.22386 11 5 11.2239 5 11.5C5 11.7761 5.22386 12 5.5 12C5.77614 12 6 11.7761 6 11.5C6 11.2239 5.77614 11 5.5 11ZM7 11.5C7 11.2239 7.22386 11 7.5 11C7.77614 11 8 11.2239 8 11.5C8 11.7761 7.77614 12 7.5 12C7.22386 12 7 11.7761 7 11.5ZM9.5 11C9.22386 11 9 11.2239 9 11.5C9 11.7761 9.22386 12 9.5 12C9.77614 12 10 11.7761 10 11.5C10 11.2239 9.77614 11 9.5 11Z",
    fill: r,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), Mp = ["color"], Op = /* @__PURE__ */ T(function(e, n) {
  var t = e.color, r = t === void 0 ? "currentColor" : t, o = At(e, Mp);
  return h("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, o, {
    ref: n
  }), h("path", {
    d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z",
    fill: r,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), Np = ["color"], Lo = /* @__PURE__ */ T(function(e, n) {
  var t = e.color, r = t === void 0 ? "currentColor" : t, o = At(e, Np);
  return h("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, o, {
    ref: n
  }), h("path", {
    d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",
    fill: r,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), Rp = ["color"], kp = /* @__PURE__ */ T(function(e, n) {
  var t = e.color, r = t === void 0 ? "currentColor" : t, o = At(e, Rp);
  return h("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, o, {
    ref: n
  }), h("path", {
    d: "M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z",
    fill: r,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), Ap = ["color"], ws = /* @__PURE__ */ T(function(e, n) {
  var t = e.color, r = t === void 0 ? "currentColor" : t, o = At(e, Ap);
  return h("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, o, {
    ref: n
  }), h("path", {
    d: "M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z",
    fill: r,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), Ip = ["color"], xs = /* @__PURE__ */ T(function(e, n) {
  var t = e.color, r = t === void 0 ? "currentColor" : t, o = At(e, Ip);
  return h("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, o, {
    ref: n
  }), h("path", {
    d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
    fill: r,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), Lp = ["color"], Fp = /* @__PURE__ */ T(function(e, n) {
  var t = e.color, r = t === void 0 ? "currentColor" : t, o = At(e, Lp);
  return h("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, o, {
    ref: n
  }), h("path", {
    d: "M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z",
    fill: r
  }));
});
function Wr(e) {
  return function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = n.width ? String(n.width) : e.defaultWidth, r = e.formats[t] || e.formats[e.defaultWidth];
    return r;
  };
}
function cn(e) {
  return function(n, t) {
    var r = t != null && t.context ? String(t.context) : "standalone", o;
    if (r === "formatting" && e.formattingValues) {
      var a = e.defaultFormattingWidth || e.defaultWidth, i = t != null && t.width ? String(t.width) : a;
      o = e.formattingValues[i] || e.formattingValues[a];
    } else {
      var s = e.defaultWidth, c = t != null && t.width ? String(t.width) : e.defaultWidth;
      o = e.values[c] || e.values[s];
    }
    var l = e.argumentCallback ? e.argumentCallback(n) : n;
    return o[l];
  };
}
function ln(e) {
  return function(n) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = n.match(o);
    if (!a)
      return null;
    var i = a[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? jp(s, function(d) {
      return d.test(i);
    }) : Wp(s, function(d) {
      return d.test(i);
    }), l;
    l = e.valueCallback ? e.valueCallback(c) : c, l = t.valueCallback ? t.valueCallback(l) : l;
    var u = n.slice(i.length);
    return {
      value: l,
      rest: u
    };
  };
}
function Wp(e, n) {
  for (var t in e)
    if (e.hasOwnProperty(t) && n(e[t]))
      return t;
}
function jp(e, n) {
  for (var t = 0; t < e.length; t++)
    if (n(e[t]))
      return t;
}
function Vp(e) {
  return function(n) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.match(e.matchPattern);
    if (!r)
      return null;
    var o = r[0], a = n.match(e.parsePattern);
    if (!a)
      return null;
    var i = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    i = t.valueCallback ? t.valueCallback(i) : i;
    var s = n.slice(o.length);
    return {
      value: i,
      rest: s
    };
  };
}
function Gt(e) {
  "@babel/helpers - typeof";
  return Gt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Gt(e);
}
function Te(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var n = Number(e);
  return isNaN(n) ? n : n < 0 ? Math.ceil(n) : Math.floor(n);
}
function Q(e, n) {
  if (n.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + n.length + " present");
}
function oe(e) {
  Q(1, arguments);
  var n = Object.prototype.toString.call(e);
  return e instanceof Date || Gt(e) === "object" && n === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || n === "[object Number]" ? new Date(e) : ((typeof e == "string" || n === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
}
function Ve(e, n) {
  Q(2, arguments);
  var t = oe(e), r = Te(n);
  return isNaN(r) ? /* @__PURE__ */ new Date(NaN) : (r && t.setDate(t.getDate() + r), t);
}
function Ze(e, n) {
  Q(2, arguments);
  var t = oe(e), r = Te(n);
  if (isNaN(r))
    return /* @__PURE__ */ new Date(NaN);
  if (!r)
    return t;
  var o = t.getDate(), a = new Date(t.getTime());
  a.setMonth(t.getMonth() + r + 1, 0);
  var i = a.getDate();
  return o >= i ? a : (t.setFullYear(a.getFullYear(), a.getMonth(), o), t);
}
function Hp(e, n) {
  Q(2, arguments);
  var t = oe(e).getTime(), r = Te(n);
  return new Date(t + r);
}
var Bp = {};
function wt() {
  return Bp;
}
function Qe(e, n) {
  var t, r, o, a, i, s, c, l;
  Q(1, arguments);
  var u = wt(), d = Te((t = (r = (o = (a = n == null ? void 0 : n.weekStartsOn) !== null && a !== void 0 ? a : n == null || (i = n.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.weekStartsOn) !== null && o !== void 0 ? o : u.weekStartsOn) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && t !== void 0 ? t : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var f = oe(e), p = f.getDay(), v = (p < d ? 7 : 0) + p - d;
  return f.setDate(f.getDate() - v), f.setHours(0, 0, 0, 0), f;
}
function Mt(e) {
  return Q(1, arguments), Qe(e, {
    weekStartsOn: 1
  });
}
function Yp(e) {
  Q(1, arguments);
  var n = oe(e), t = n.getFullYear(), r = /* @__PURE__ */ new Date(0);
  r.setFullYear(t + 1, 0, 4), r.setHours(0, 0, 0, 0);
  var o = Mt(r), a = /* @__PURE__ */ new Date(0);
  a.setFullYear(t, 0, 4), a.setHours(0, 0, 0, 0);
  var i = Mt(a);
  return n.getTime() >= o.getTime() ? t + 1 : n.getTime() >= i.getTime() ? t : t - 1;
}
function Up(e) {
  Q(1, arguments);
  var n = Yp(e), t = /* @__PURE__ */ new Date(0);
  t.setFullYear(n, 0, 4), t.setHours(0, 0, 0, 0);
  var r = Mt(t);
  return r;
}
function pn(e) {
  var n = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return n.setUTCFullYear(e.getFullYear()), e.getTime() - n.getTime();
}
function qt(e) {
  Q(1, arguments);
  var n = oe(e);
  return n.setHours(0, 0, 0, 0), n;
}
var zp = 864e5;
function ot(e, n) {
  Q(2, arguments);
  var t = qt(e), r = qt(n), o = t.getTime() - pn(t), a = r.getTime() - pn(r);
  return Math.round((o - a) / zp);
}
function ao(e, n) {
  Q(2, arguments);
  var t = Te(n), r = t * 7;
  return Ve(e, r);
}
function Kp(e, n) {
  Q(2, arguments);
  var t = Te(n);
  return Ze(e, t * 12);
}
function Gp(e) {
  Q(1, arguments);
  var n;
  if (e && typeof e.forEach == "function")
    n = e;
  else if (Gt(e) === "object" && e !== null)
    n = Array.prototype.slice.call(e);
  else
    return /* @__PURE__ */ new Date(NaN);
  var t;
  return n.forEach(function(r) {
    var o = oe(r);
    (t === void 0 || t < o || isNaN(Number(o))) && (t = o);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function qp(e) {
  Q(1, arguments);
  var n;
  if (e && typeof e.forEach == "function")
    n = e;
  else if (Gt(e) === "object" && e !== null)
    n = Array.prototype.slice.call(e);
  else
    return /* @__PURE__ */ new Date(NaN);
  var t;
  return n.forEach(function(r) {
    var o = oe(r);
    (t === void 0 || t > o || isNaN(o.getDate())) && (t = o);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function ke(e, n) {
  Q(2, arguments);
  var t = qt(e), r = qt(n);
  return t.getTime() === r.getTime();
}
function Fo(e) {
  return Q(1, arguments), e instanceof Date || Gt(e) === "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Xp(e) {
  if (Q(1, arguments), !Fo(e) && typeof e != "number")
    return !1;
  var n = oe(e);
  return !isNaN(Number(n));
}
function vn(e, n) {
  Q(2, arguments);
  var t = oe(e), r = oe(n), o = t.getFullYear() - r.getFullYear(), a = t.getMonth() - r.getMonth();
  return o * 12 + a;
}
var Zp = 6048e5;
function Qp(e, n, t) {
  Q(2, arguments);
  var r = Qe(e, t), o = Qe(n, t), a = r.getTime() - pn(r), i = o.getTime() - pn(o);
  return Math.round((a - i) / Zp);
}
function Wo(e) {
  Q(1, arguments);
  var n = oe(e), t = n.getMonth();
  return n.setFullYear(n.getFullYear(), t + 1, 0), n.setHours(23, 59, 59, 999), n;
}
function Ae(e) {
  Q(1, arguments);
  var n = oe(e);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function Jp(e) {
  Q(1, arguments);
  var n = oe(e), t = /* @__PURE__ */ new Date(0);
  return t.setFullYear(n.getFullYear(), 0, 1), t.setHours(0, 0, 0, 0), t;
}
function jo(e, n) {
  var t, r, o, a, i, s, c, l;
  Q(1, arguments);
  var u = wt(), d = Te((t = (r = (o = (a = n == null ? void 0 : n.weekStartsOn) !== null && a !== void 0 ? a : n == null || (i = n.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.weekStartsOn) !== null && o !== void 0 ? o : u.weekStartsOn) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && t !== void 0 ? t : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var f = oe(e), p = f.getDay(), v = (p < d ? -7 : 0) + 6 - (p - d);
  return f.setDate(f.getDate() + v), f.setHours(23, 59, 59, 999), f;
}
function Cs(e) {
  return Q(1, arguments), jo(e, {
    weekStartsOn: 1
  });
}
function ev(e, n) {
  Q(2, arguments);
  var t = Te(n);
  return Hp(e, -t);
}
var tv = 864e5;
function nv(e) {
  Q(1, arguments);
  var n = oe(e), t = n.getTime();
  n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0);
  var r = n.getTime(), o = t - r;
  return Math.floor(o / tv) + 1;
}
function Xn(e) {
  Q(1, arguments);
  var n = 1, t = oe(e), r = t.getUTCDay(), o = (r < n ? 7 : 0) + r - n;
  return t.setUTCDate(t.getUTCDate() - o), t.setUTCHours(0, 0, 0, 0), t;
}
function _s(e) {
  Q(1, arguments);
  var n = oe(e), t = n.getUTCFullYear(), r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(t + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var o = Xn(r), a = /* @__PURE__ */ new Date(0);
  a.setUTCFullYear(t, 0, 4), a.setUTCHours(0, 0, 0, 0);
  var i = Xn(a);
  return n.getTime() >= o.getTime() ? t + 1 : n.getTime() >= i.getTime() ? t : t - 1;
}
function rv(e) {
  Q(1, arguments);
  var n = _s(e), t = /* @__PURE__ */ new Date(0);
  t.setUTCFullYear(n, 0, 4), t.setUTCHours(0, 0, 0, 0);
  var r = Xn(t);
  return r;
}
var ov = 6048e5;
function av(e) {
  Q(1, arguments);
  var n = oe(e), t = Xn(n).getTime() - rv(n).getTime();
  return Math.round(t / ov) + 1;
}
function Zn(e, n) {
  var t, r, o, a, i, s, c, l;
  Q(1, arguments);
  var u = wt(), d = Te((t = (r = (o = (a = n == null ? void 0 : n.weekStartsOn) !== null && a !== void 0 ? a : n == null || (i = n.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.weekStartsOn) !== null && o !== void 0 ? o : u.weekStartsOn) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && t !== void 0 ? t : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var f = oe(e), p = f.getUTCDay(), v = (p < d ? 7 : 0) + p - d;
  return f.setUTCDate(f.getUTCDate() - v), f.setUTCHours(0, 0, 0, 0), f;
}
function Es(e, n) {
  var t, r, o, a, i, s, c, l;
  Q(1, arguments);
  var u = oe(e), d = u.getUTCFullYear(), f = wt(), p = Te((t = (r = (o = (a = n == null ? void 0 : n.firstWeekContainsDate) !== null && a !== void 0 ? a : n == null || (i = n.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && o !== void 0 ? o : f.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = f.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && t !== void 0 ? t : 1);
  if (!(p >= 1 && p <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var v = /* @__PURE__ */ new Date(0);
  v.setUTCFullYear(d + 1, 0, p), v.setUTCHours(0, 0, 0, 0);
  var m = Zn(v, n), b = /* @__PURE__ */ new Date(0);
  b.setUTCFullYear(d, 0, p), b.setUTCHours(0, 0, 0, 0);
  var y = Zn(b, n);
  return u.getTime() >= m.getTime() ? d + 1 : u.getTime() >= y.getTime() ? d : d - 1;
}
function iv(e, n) {
  var t, r, o, a, i, s, c, l;
  Q(1, arguments);
  var u = wt(), d = Te((t = (r = (o = (a = n == null ? void 0 : n.firstWeekContainsDate) !== null && a !== void 0 ? a : n == null || (i = n.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && o !== void 0 ? o : u.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && t !== void 0 ? t : 1), f = Es(e, n), p = /* @__PURE__ */ new Date(0);
  p.setUTCFullYear(f, 0, d), p.setUTCHours(0, 0, 0, 0);
  var v = Zn(p, n);
  return v;
}
var sv = 6048e5;
function cv(e, n) {
  Q(1, arguments);
  var t = oe(e), r = Zn(t, n).getTime() - iv(t, n).getTime();
  return Math.round(r / sv) + 1;
}
function me(e, n) {
  for (var t = e < 0 ? "-" : "", r = Math.abs(e).toString(); r.length < n; )
    r = "0" + r;
  return t + r;
}
var lv = {
  // Year
  y: function(n, t) {
    var r = n.getUTCFullYear(), o = r > 0 ? r : 1 - r;
    return me(t === "yy" ? o % 100 : o, t.length);
  },
  // Month
  M: function(n, t) {
    var r = n.getUTCMonth();
    return t === "M" ? String(r + 1) : me(r + 1, 2);
  },
  // Day of the month
  d: function(n, t) {
    return me(n.getUTCDate(), t.length);
  },
  // AM or PM
  a: function(n, t) {
    var r = n.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return r.toUpperCase();
      case "aaa":
        return r;
      case "aaaaa":
        return r[0];
      case "aaaa":
      default:
        return r === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h: function(n, t) {
    return me(n.getUTCHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H: function(n, t) {
    return me(n.getUTCHours(), t.length);
  },
  // Minute
  m: function(n, t) {
    return me(n.getUTCMinutes(), t.length);
  },
  // Second
  s: function(n, t) {
    return me(n.getUTCSeconds(), t.length);
  },
  // Fraction of second
  S: function(n, t) {
    var r = t.length, o = n.getUTCMilliseconds(), a = Math.floor(o * Math.pow(10, r - 3));
    return me(a, t.length);
  }
};
const pt = lv;
var Yt = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, dv = {
  // Era
  G: function(n, t, r) {
    var o = n.getUTCFullYear() > 0 ? 1 : 0;
    switch (t) {
      case "G":
      case "GG":
      case "GGG":
        return r.era(o, {
          width: "abbreviated"
        });
      case "GGGGG":
        return r.era(o, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return r.era(o, {
          width: "wide"
        });
    }
  },
  // Year
  y: function(n, t, r) {
    if (t === "yo") {
      var o = n.getUTCFullYear(), a = o > 0 ? o : 1 - o;
      return r.ordinalNumber(a, {
        unit: "year"
      });
    }
    return pt.y(n, t);
  },
  // Local week-numbering year
  Y: function(n, t, r, o) {
    var a = Es(n, o), i = a > 0 ? a : 1 - a;
    if (t === "YY") {
      var s = i % 100;
      return me(s, 2);
    }
    return t === "Yo" ? r.ordinalNumber(i, {
      unit: "year"
    }) : me(i, t.length);
  },
  // ISO week-numbering year
  R: function(n, t) {
    var r = _s(n);
    return me(r, t.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(n, t) {
    var r = n.getUTCFullYear();
    return me(r, t.length);
  },
  // Quarter
  Q: function(n, t, r) {
    var o = Math.ceil((n.getUTCMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(o);
      case "QQ":
        return me(o, 2);
      case "Qo":
        return r.ordinalNumber(o, {
          unit: "quarter"
        });
      case "QQQ":
        return r.quarter(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return r.quarter(o, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return r.quarter(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(n, t, r) {
    var o = Math.ceil((n.getUTCMonth() + 1) / 3);
    switch (t) {
      case "q":
        return String(o);
      case "qq":
        return me(o, 2);
      case "qo":
        return r.ordinalNumber(o, {
          unit: "quarter"
        });
      case "qqq":
        return r.quarter(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return r.quarter(o, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return r.quarter(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(n, t, r) {
    var o = n.getUTCMonth();
    switch (t) {
      case "M":
      case "MM":
        return pt.M(n, t);
      case "Mo":
        return r.ordinalNumber(o + 1, {
          unit: "month"
        });
      case "MMM":
        return r.month(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return r.month(o, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return r.month(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone month
  L: function(n, t, r) {
    var o = n.getUTCMonth();
    switch (t) {
      case "L":
        return String(o + 1);
      case "LL":
        return me(o + 1, 2);
      case "Lo":
        return r.ordinalNumber(o + 1, {
          unit: "month"
        });
      case "LLL":
        return r.month(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return r.month(o, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return r.month(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Local week of year
  w: function(n, t, r, o) {
    var a = cv(n, o);
    return t === "wo" ? r.ordinalNumber(a, {
      unit: "week"
    }) : me(a, t.length);
  },
  // ISO week of year
  I: function(n, t, r) {
    var o = av(n);
    return t === "Io" ? r.ordinalNumber(o, {
      unit: "week"
    }) : me(o, t.length);
  },
  // Day of the month
  d: function(n, t, r) {
    return t === "do" ? r.ordinalNumber(n.getUTCDate(), {
      unit: "date"
    }) : pt.d(n, t);
  },
  // Day of year
  D: function(n, t, r) {
    var o = nv(n);
    return t === "Do" ? r.ordinalNumber(o, {
      unit: "dayOfYear"
    }) : me(o, t.length);
  },
  // Day of week
  E: function(n, t, r) {
    var o = n.getUTCDay();
    switch (t) {
      case "E":
      case "EE":
      case "EEE":
        return r.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return r.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return r.day(o, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return r.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(n, t, r, o) {
    var a = n.getUTCDay(), i = (a - o.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "e":
        return String(i);
      case "ee":
        return me(i, 2);
      case "eo":
        return r.ordinalNumber(i, {
          unit: "day"
        });
      case "eee":
        return r.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return r.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return r.day(a, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return r.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(n, t, r, o) {
    var a = n.getUTCDay(), i = (a - o.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "c":
        return String(i);
      case "cc":
        return me(i, t.length);
      case "co":
        return r.ordinalNumber(i, {
          unit: "day"
        });
      case "ccc":
        return r.day(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return r.day(a, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return r.day(a, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return r.day(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(n, t, r) {
    var o = n.getUTCDay(), a = o === 0 ? 7 : o;
    switch (t) {
      case "i":
        return String(a);
      case "ii":
        return me(a, t.length);
      case "io":
        return r.ordinalNumber(a, {
          unit: "day"
        });
      case "iii":
        return r.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return r.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return r.day(o, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return r.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(n, t, r) {
    var o = n.getUTCHours(), a = o / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return r.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(n, t, r) {
    var o = n.getUTCHours(), a;
    switch (o === 12 ? a = Yt.noon : o === 0 ? a = Yt.midnight : a = o / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return r.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(n, t, r) {
    var o = n.getUTCHours(), a;
    switch (o >= 17 ? a = Yt.evening : o >= 12 ? a = Yt.afternoon : o >= 4 ? a = Yt.morning : a = Yt.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return r.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(n, t, r) {
    if (t === "ho") {
      var o = n.getUTCHours() % 12;
      return o === 0 && (o = 12), r.ordinalNumber(o, {
        unit: "hour"
      });
    }
    return pt.h(n, t);
  },
  // Hour [0-23]
  H: function(n, t, r) {
    return t === "Ho" ? r.ordinalNumber(n.getUTCHours(), {
      unit: "hour"
    }) : pt.H(n, t);
  },
  // Hour [0-11]
  K: function(n, t, r) {
    var o = n.getUTCHours() % 12;
    return t === "Ko" ? r.ordinalNumber(o, {
      unit: "hour"
    }) : me(o, t.length);
  },
  // Hour [1-24]
  k: function(n, t, r) {
    var o = n.getUTCHours();
    return o === 0 && (o = 24), t === "ko" ? r.ordinalNumber(o, {
      unit: "hour"
    }) : me(o, t.length);
  },
  // Minute
  m: function(n, t, r) {
    return t === "mo" ? r.ordinalNumber(n.getUTCMinutes(), {
      unit: "minute"
    }) : pt.m(n, t);
  },
  // Second
  s: function(n, t, r) {
    return t === "so" ? r.ordinalNumber(n.getUTCSeconds(), {
      unit: "second"
    }) : pt.s(n, t);
  },
  // Fraction of second
  S: function(n, t) {
    return pt.S(n, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(n, t, r, o) {
    var a = o._originalDate || n, i = a.getTimezoneOffset();
    if (i === 0)
      return "Z";
    switch (t) {
      case "X":
        return Ha(i);
      case "XXXX":
      case "XX":
        return Et(i);
      case "XXXXX":
      case "XXX":
      default:
        return Et(i, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(n, t, r, o) {
    var a = o._originalDate || n, i = a.getTimezoneOffset();
    switch (t) {
      case "x":
        return Ha(i);
      case "xxxx":
      case "xx":
        return Et(i);
      case "xxxxx":
      case "xxx":
      default:
        return Et(i, ":");
    }
  },
  // Timezone (GMT)
  O: function(n, t, r, o) {
    var a = o._originalDate || n, i = a.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Va(i, ":");
      case "OOOO":
      default:
        return "GMT" + Et(i, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(n, t, r, o) {
    var a = o._originalDate || n, i = a.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Va(i, ":");
      case "zzzz":
      default:
        return "GMT" + Et(i, ":");
    }
  },
  // Seconds timestamp
  t: function(n, t, r, o) {
    var a = o._originalDate || n, i = Math.floor(a.getTime() / 1e3);
    return me(i, t.length);
  },
  // Milliseconds timestamp
  T: function(n, t, r, o) {
    var a = o._originalDate || n, i = a.getTime();
    return me(i, t.length);
  }
};
function Va(e, n) {
  var t = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.floor(r / 60), a = r % 60;
  if (a === 0)
    return t + String(o);
  var i = n || "";
  return t + String(o) + i + me(a, 2);
}
function Ha(e, n) {
  if (e % 60 === 0) {
    var t = e > 0 ? "-" : "+";
    return t + me(Math.abs(e) / 60, 2);
  }
  return Et(e, n);
}
function Et(e, n) {
  var t = n || "", r = e > 0 ? "-" : "+", o = Math.abs(e), a = me(Math.floor(o / 60), 2), i = me(o % 60, 2);
  return r + a + t + i;
}
const uv = dv;
var Ba = function(n, t) {
  switch (n) {
    case "P":
      return t.date({
        width: "short"
      });
    case "PP":
      return t.date({
        width: "medium"
      });
    case "PPP":
      return t.date({
        width: "long"
      });
    case "PPPP":
    default:
      return t.date({
        width: "full"
      });
  }
}, Ts = function(n, t) {
  switch (n) {
    case "p":
      return t.time({
        width: "short"
      });
    case "pp":
      return t.time({
        width: "medium"
      });
    case "ppp":
      return t.time({
        width: "long"
      });
    case "pppp":
    default:
      return t.time({
        width: "full"
      });
  }
}, fv = function(n, t) {
  var r = n.match(/(P+)(p+)?/) || [], o = r[1], a = r[2];
  if (!a)
    return Ba(n, t);
  var i;
  switch (o) {
    case "P":
      i = t.dateTime({
        width: "short"
      });
      break;
    case "PP":
      i = t.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      i = t.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      i = t.dateTime({
        width: "full"
      });
      break;
  }
  return i.replace("{{date}}", Ba(o, t)).replace("{{time}}", Ts(a, t));
}, pv = {
  p: Ts,
  P: fv
};
const vv = pv;
var mv = ["D", "DD"], bv = ["YY", "YYYY"];
function hv(e) {
  return mv.indexOf(e) !== -1;
}
function gv(e) {
  return bv.indexOf(e) !== -1;
}
function Ya(e, n, t) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(n, "`) for formatting years to the input `").concat(t, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(n, "`) for formatting years to the input `").concat(t, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(n, "`) for formatting days of the month to the input `").concat(t, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(n, "`) for formatting days of the month to the input `").concat(t, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var $v = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, yv = function(n, t, r) {
  var o, a = $v[n];
  return typeof a == "string" ? o = a : t === 1 ? o = a.one : o = a.other.replace("{{count}}", t.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + o : o + " ago" : o;
};
const wv = yv;
var xv = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Cv = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, _v = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Ev = {
  date: Wr({
    formats: xv,
    defaultWidth: "full"
  }),
  time: Wr({
    formats: Cv,
    defaultWidth: "full"
  }),
  dateTime: Wr({
    formats: _v,
    defaultWidth: "full"
  })
};
const Tv = Ev;
var Pv = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Sv = function(n, t, r, o) {
  return Pv[n];
};
const Dv = Sv;
var Mv = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Ov = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Nv = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, Rv = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, kv = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, Av = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, Iv = function(n, t) {
  var r = Number(n), o = r % 100;
  if (o > 20 || o < 10)
    switch (o % 10) {
      case 1:
        return r + "st";
      case 2:
        return r + "nd";
      case 3:
        return r + "rd";
    }
  return r + "th";
}, Lv = {
  ordinalNumber: Iv,
  era: cn({
    values: Mv,
    defaultWidth: "wide"
  }),
  quarter: cn({
    values: Ov,
    defaultWidth: "wide",
    argumentCallback: function(n) {
      return n - 1;
    }
  }),
  month: cn({
    values: Nv,
    defaultWidth: "wide"
  }),
  day: cn({
    values: Rv,
    defaultWidth: "wide"
  }),
  dayPeriod: cn({
    values: kv,
    defaultWidth: "wide",
    formattingValues: Av,
    defaultFormattingWidth: "wide"
  })
};
const Fv = Lv;
var Wv = /^(\d+)(th|st|nd|rd)?/i, jv = /\d+/i, Vv = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Hv = {
  any: [/^b/i, /^(a|c)/i]
}, Bv = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Yv = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Uv = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, zv = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, Kv = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Gv = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, qv = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Xv = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, Zv = {
  ordinalNumber: Vp({
    matchPattern: Wv,
    parsePattern: jv,
    valueCallback: function(n) {
      return parseInt(n, 10);
    }
  }),
  era: ln({
    matchPatterns: Vv,
    defaultMatchWidth: "wide",
    parsePatterns: Hv,
    defaultParseWidth: "any"
  }),
  quarter: ln({
    matchPatterns: Bv,
    defaultMatchWidth: "wide",
    parsePatterns: Yv,
    defaultParseWidth: "any",
    valueCallback: function(n) {
      return n + 1;
    }
  }),
  month: ln({
    matchPatterns: Uv,
    defaultMatchWidth: "wide",
    parsePatterns: zv,
    defaultParseWidth: "any"
  }),
  day: ln({
    matchPatterns: Kv,
    defaultMatchWidth: "wide",
    parsePatterns: Gv,
    defaultParseWidth: "any"
  }),
  dayPeriod: ln({
    matchPatterns: qv,
    defaultMatchWidth: "any",
    parsePatterns: Xv,
    defaultParseWidth: "any"
  })
};
const Qv = Zv;
var Jv = {
  code: "en-US",
  formatDistance: wv,
  formatLong: Tv,
  formatRelative: Dv,
  localize: Fv,
  match: Qv,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const Ps = Jv;
var em = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, tm = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, nm = /^'([^]*?)'?$/, rm = /''/g, om = /[a-zA-Z]/;
function Be(e, n, t) {
  var r, o, a, i, s, c, l, u, d, f, p, v, m, b, y, g, w, _;
  Q(2, arguments);
  var S = String(n), N = wt(), P = (r = (o = t == null ? void 0 : t.locale) !== null && o !== void 0 ? o : N.locale) !== null && r !== void 0 ? r : Ps, F = Te((a = (i = (s = (c = t == null ? void 0 : t.firstWeekContainsDate) !== null && c !== void 0 ? c : t == null || (l = t.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && s !== void 0 ? s : N.firstWeekContainsDate) !== null && i !== void 0 ? i : (d = N.locale) === null || d === void 0 || (f = d.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && a !== void 0 ? a : 1);
  if (!(F >= 1 && F <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var H = Te((p = (v = (m = (b = t == null ? void 0 : t.weekStartsOn) !== null && b !== void 0 ? b : t == null || (y = t.locale) === null || y === void 0 || (g = y.options) === null || g === void 0 ? void 0 : g.weekStartsOn) !== null && m !== void 0 ? m : N.weekStartsOn) !== null && v !== void 0 ? v : (w = N.locale) === null || w === void 0 || (_ = w.options) === null || _ === void 0 ? void 0 : _.weekStartsOn) !== null && p !== void 0 ? p : 0);
  if (!(H >= 0 && H <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!P.localize)
    throw new RangeError("locale must contain localize property");
  if (!P.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var q = oe(e);
  if (!Xp(q))
    throw new RangeError("Invalid time value");
  var B = pn(q), j = ev(q, B), G = {
    firstWeekContainsDate: F,
    weekStartsOn: H,
    locale: P,
    _originalDate: q
  }, D = S.match(tm).map(function(A) {
    var L = A[0];
    if (L === "p" || L === "P") {
      var k = vv[L];
      return k(A, P.formatLong);
    }
    return A;
  }).join("").match(em).map(function(A) {
    if (A === "''")
      return "'";
    var L = A[0];
    if (L === "'")
      return am(A);
    var k = uv[L];
    if (k)
      return !(t != null && t.useAdditionalWeekYearTokens) && gv(A) && Ya(A, n, String(e)), !(t != null && t.useAdditionalDayOfYearTokens) && hv(A) && Ya(A, n, String(e)), k(j, A, P.localize, G);
    if (L.match(om))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + L + "`");
    return A;
  }).join("");
  return D;
}
function am(e) {
  var n = e.match(nm);
  return n ? n[1].replace(rm, "'") : e;
}
function im(e) {
  Q(1, arguments);
  var n = oe(e), t = n.getFullYear(), r = n.getMonth(), o = /* @__PURE__ */ new Date(0);
  return o.setFullYear(t, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
var sm = 6048e5;
function cm(e) {
  Q(1, arguments);
  var n = oe(e), t = Mt(n).getTime() - Up(n).getTime();
  return Math.round(t / sm) + 1;
}
function lm(e) {
  Q(1, arguments);
  var n = oe(e), t = n.getTime();
  return t;
}
function dm(e) {
  return Q(1, arguments), Math.floor(lm(e) / 1e3);
}
function um(e, n) {
  var t, r, o, a, i, s, c, l;
  Q(1, arguments);
  var u = oe(e), d = u.getFullYear(), f = wt(), p = Te((t = (r = (o = (a = n == null ? void 0 : n.firstWeekContainsDate) !== null && a !== void 0 ? a : n == null || (i = n.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && o !== void 0 ? o : f.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = f.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && t !== void 0 ? t : 1);
  if (!(p >= 1 && p <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var v = /* @__PURE__ */ new Date(0);
  v.setFullYear(d + 1, 0, p), v.setHours(0, 0, 0, 0);
  var m = Qe(v, n), b = /* @__PURE__ */ new Date(0);
  b.setFullYear(d, 0, p), b.setHours(0, 0, 0, 0);
  var y = Qe(b, n);
  return u.getTime() >= m.getTime() ? d + 1 : u.getTime() >= y.getTime() ? d : d - 1;
}
function fm(e, n) {
  var t, r, o, a, i, s, c, l;
  Q(1, arguments);
  var u = wt(), d = Te((t = (r = (o = (a = n == null ? void 0 : n.firstWeekContainsDate) !== null && a !== void 0 ? a : n == null || (i = n.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && o !== void 0 ? o : u.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && t !== void 0 ? t : 1), f = um(e, n), p = /* @__PURE__ */ new Date(0);
  p.setFullYear(f, 0, d), p.setHours(0, 0, 0, 0);
  var v = Qe(p, n);
  return v;
}
var pm = 6048e5;
function vm(e, n) {
  Q(1, arguments);
  var t = oe(e), r = Qe(t, n).getTime() - fm(t, n).getTime();
  return Math.round(r / pm) + 1;
}
function mm(e) {
  Q(1, arguments);
  var n = oe(e), t = n.getMonth();
  return n.setFullYear(n.getFullYear(), t + 1, 0), n.setHours(0, 0, 0, 0), n;
}
function bm(e, n) {
  return Q(1, arguments), Qp(mm(e), Ae(e), n) + 1;
}
function Ss(e, n) {
  Q(2, arguments);
  var t = oe(e), r = oe(n);
  return t.getTime() > r.getTime();
}
function Ds(e, n) {
  Q(2, arguments);
  var t = oe(e), r = oe(n);
  return t.getTime() < r.getTime();
}
function Vo(e, n) {
  Q(2, arguments);
  var t = oe(e), r = oe(n);
  return t.getFullYear() === r.getFullYear() && t.getMonth() === r.getMonth();
}
function hm(e, n) {
  Q(2, arguments);
  var t = oe(e), r = oe(n);
  return t.getFullYear() === r.getFullYear();
}
function Ua(e, n) {
  Q(2, arguments);
  var t = Te(n);
  return Ve(e, -t);
}
function jr(e, n) {
  Q(2, arguments);
  var t = oe(e), r = Te(n), o = t.getFullYear(), a = t.getDate(), i = /* @__PURE__ */ new Date(0);
  i.setFullYear(o, r, 15), i.setHours(0, 0, 0, 0);
  var s = im(i);
  return t.setMonth(r, Math.min(a, s)), t;
}
function za(e, n) {
  Q(2, arguments);
  var t = oe(e), r = Te(n);
  return isNaN(t.getTime()) ? /* @__PURE__ */ new Date(NaN) : (t.setFullYear(r), t);
}
var J = function() {
  return J = Object.assign || function(n) {
    for (var t, r = 1, o = arguments.length; r < o; r++) {
      t = arguments[r];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (n[a] = t[a]);
    }
    return n;
  }, J.apply(this, arguments);
};
function gm(e, n) {
  var t = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
}
function Ms(e, n, t) {
  if (t || arguments.length === 2)
    for (var r = 0, o = n.length, a; r < o; r++)
      (a || !(r in n)) && (a || (a = Array.prototype.slice.call(n, 0, r)), a[r] = n[r]);
  return e.concat(a || Array.prototype.slice.call(n));
}
function Cn(e) {
  return e.mode === "multiple";
}
function _n(e) {
  return e.mode === "range";
}
function vr(e) {
  return e.mode === "single";
}
var $m = {
  root: "rdp",
  multiple_months: "rdp-multiple_months",
  with_weeknumber: "rdp-with_weeknumber",
  vhidden: "rdp-vhidden",
  button_reset: "rdp-button_reset",
  button: "rdp-button",
  caption: "rdp-caption",
  caption_start: "rdp-caption_start",
  caption_end: "rdp-caption_end",
  caption_between: "rdp-caption_between",
  caption_label: "rdp-caption_label",
  caption_dropdowns: "rdp-caption_dropdowns",
  dropdown: "rdp-dropdown",
  dropdown_month: "rdp-dropdown_month",
  dropdown_year: "rdp-dropdown_year",
  dropdown_icon: "rdp-dropdown_icon",
  months: "rdp-months",
  month: "rdp-month",
  table: "rdp-table",
  tbody: "rdp-tbody",
  tfoot: "rdp-tfoot",
  head: "rdp-head",
  head_row: "rdp-head_row",
  head_cell: "rdp-head_cell",
  nav: "rdp-nav",
  nav_button: "rdp-nav_button",
  nav_button_previous: "rdp-nav_button_previous",
  nav_button_next: "rdp-nav_button_next",
  nav_icon: "rdp-nav_icon",
  row: "rdp-row",
  weeknumber: "rdp-weeknumber",
  cell: "rdp-cell",
  day: "rdp-day",
  day_today: "rdp-day_today",
  day_outside: "rdp-day_outside",
  day_selected: "rdp-day_selected",
  day_disabled: "rdp-day_disabled",
  day_hidden: "rdp-day_hidden",
  day_range_start: "rdp-day_range_start",
  day_range_end: "rdp-day_range_end",
  day_range_middle: "rdp-day_range_middle"
};
function ym(e, n) {
  return Be(e, "LLLL y", n);
}
function wm(e, n) {
  return Be(e, "d", n);
}
function xm(e, n) {
  return Be(e, "LLLL", n);
}
function Cm(e) {
  return "".concat(e);
}
function _m(e, n) {
  return Be(e, "cccccc", n);
}
function Em(e, n) {
  return Be(e, "yyyy", n);
}
var Tm = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption: ym,
  formatDay: wm,
  formatMonthCaption: xm,
  formatWeekNumber: Cm,
  formatWeekdayName: _m,
  formatYearCaption: Em
}), Pm = function(e, n, t) {
  return Be(e, "do MMMM (EEEE)", t);
}, Sm = function() {
  return "Month: ";
}, Dm = function() {
  return "Go to next month";
}, Mm = function() {
  return "Go to previous month";
}, Om = function(e, n) {
  return Be(e, "cccc", n);
}, Nm = function(e) {
  return "Week n. ".concat(e);
}, Rm = function() {
  return "Year: ";
}, km = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay: Pm,
  labelMonthDropdown: Sm,
  labelNext: Dm,
  labelPrevious: Mm,
  labelWeekNumber: Nm,
  labelWeekday: Om,
  labelYearDropdown: Rm
});
function Am() {
  var e = "buttons", n = $m, t = Ps, r = {}, o = {}, a = 1, i = {}, s = /* @__PURE__ */ new Date();
  return {
    captionLayout: e,
    classNames: n,
    formatters: Tm,
    labels: km,
    locale: t,
    modifiersClassNames: r,
    modifiers: o,
    numberOfMonths: a,
    styles: i,
    today: s,
    mode: "default"
  };
}
function Im(e) {
  var n = e.fromYear, t = e.toYear, r = e.fromMonth, o = e.toMonth, a = e.fromDate, i = e.toDate;
  return r ? a = Ae(r) : n && (a = new Date(n, 0, 1)), o ? i = Wo(o) : t && (i = new Date(t, 11, 31)), {
    fromDate: a ? qt(a) : void 0,
    toDate: i ? qt(i) : void 0
  };
}
var Os = We(void 0);
function Lm(e) {
  var n, t = e.initialProps, r = Am(), o = Im(t), a = o.fromDate, i = o.toDate, s = (n = t.captionLayout) !== null && n !== void 0 ? n : r.captionLayout;
  s !== "buttons" && (!a || !i) && (s = "buttons");
  var c;
  (vr(t) || Cn(t) || _n(t)) && (c = t.onSelect);
  var l = J(J(J({}, r), t), { captionLayout: s, classNames: J(J({}, r.classNames), t.classNames), components: J({}, t.components), formatters: J(J({}, r.formatters), t.formatters), fromDate: a, labels: J(J({}, r.labels), t.labels), mode: t.mode || r.mode, modifiers: J(J({}, r.modifiers), t.modifiers), modifiersClassNames: J(J({}, r.modifiersClassNames), t.modifiersClassNames), onSelect: c, styles: J(J({}, r.styles), t.styles), toDate: i });
  return $.createElement(Os.Provider, { value: l }, e.children);
}
function ge() {
  var e = Le(Os);
  if (!e)
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return e;
}
function Ns(e) {
  var n = ge(), t = n.locale, r = n.classNames, o = n.styles, a = n.formatters.formatCaption;
  return $.createElement("div", { className: r.caption_label, style: o.caption_label, "aria-live": "polite", role: "presentation", id: e.id }, a(e.displayMonth, { locale: t }));
}
function Fm(e) {
  return $.createElement(
    "svg",
    J({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, e),
    $.createElement("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" })
  );
}
function Rs(e) {
  var n, t, r = e.onChange, o = e.value, a = e.children, i = e.caption, s = e.className, c = e.style, l = ge(), u = (t = (n = l.components) === null || n === void 0 ? void 0 : n.IconDropdown) !== null && t !== void 0 ? t : Fm;
  return $.createElement(
    "div",
    { className: s, style: c },
    $.createElement("span", { className: l.classNames.vhidden }, e["aria-label"]),
    $.createElement("select", { name: e.name, "aria-label": e["aria-label"], className: l.classNames.dropdown, style: l.styles.dropdown, value: o, onChange: r }, a),
    $.createElement(
      "div",
      { className: l.classNames.caption_label, style: l.styles.caption_label, "aria-hidden": "true" },
      i,
      $.createElement(u, { className: l.classNames.dropdown_icon, style: l.styles.dropdown_icon })
    )
  );
}
function Wm(e) {
  var n, t = ge(), r = t.fromDate, o = t.toDate, a = t.styles, i = t.locale, s = t.formatters.formatMonthCaption, c = t.classNames, l = t.components, u = t.labels.labelMonthDropdown;
  if (!r)
    return $.createElement($.Fragment, null);
  if (!o)
    return $.createElement($.Fragment, null);
  var d = [];
  if (hm(r, o))
    for (var f = Ae(r), p = r.getMonth(); p <= o.getMonth(); p++)
      d.push(jr(f, p));
  else
    for (var f = Ae(/* @__PURE__ */ new Date()), p = 0; p <= 11; p++)
      d.push(jr(f, p));
  var v = function(b) {
    var y = Number(b.target.value), g = jr(Ae(e.displayMonth), y);
    e.onChange(g);
  }, m = (n = l == null ? void 0 : l.Dropdown) !== null && n !== void 0 ? n : Rs;
  return $.createElement(m, { name: "months", "aria-label": u(), className: c.dropdown_month, style: a.dropdown_month, onChange: v, value: e.displayMonth.getMonth(), caption: s(e.displayMonth, { locale: i }) }, d.map(function(b) {
    return $.createElement("option", { key: b.getMonth(), value: b.getMonth() }, s(b, { locale: i }));
  }));
}
function jm(e) {
  var n, t = e.displayMonth, r = ge(), o = r.fromDate, a = r.toDate, i = r.locale, s = r.styles, c = r.classNames, l = r.components, u = r.formatters.formatYearCaption, d = r.labels.labelYearDropdown, f = [];
  if (!o)
    return $.createElement($.Fragment, null);
  if (!a)
    return $.createElement($.Fragment, null);
  for (var p = o.getFullYear(), v = a.getFullYear(), m = p; m <= v; m++)
    f.push(za(Jp(/* @__PURE__ */ new Date()), m));
  var b = function(g) {
    var w = za(Ae(t), Number(g.target.value));
    e.onChange(w);
  }, y = (n = l == null ? void 0 : l.Dropdown) !== null && n !== void 0 ? n : Rs;
  return $.createElement(y, { name: "years", "aria-label": d(), className: c.dropdown_year, style: s.dropdown_year, onChange: b, value: t.getFullYear(), caption: u(t, { locale: i }) }, f.map(function(g) {
    return $.createElement("option", { key: g.getFullYear(), value: g.getFullYear() }, u(g, { locale: i }));
  }));
}
function Vm(e, n) {
  var t = z(e), r = t[0], o = t[1], a = n === void 0 ? r : n;
  return [a, o];
}
function Hm(e) {
  var n = e.month, t = e.defaultMonth, r = e.today, o = n || t || r || /* @__PURE__ */ new Date(), a = e.toDate, i = e.fromDate, s = e.numberOfMonths, c = s === void 0 ? 1 : s;
  if (a && vn(a, o) < 0) {
    var l = -1 * (c - 1);
    o = Ze(a, l);
  }
  return i && vn(o, i) < 0 && (o = i), Ae(o);
}
function Bm() {
  var e = ge(), n = Hm(e), t = Vm(n, e.month), r = t[0], o = t[1], a = function(i) {
    var s;
    if (!e.disableNavigation) {
      var c = Ae(i);
      o(c), (s = e.onMonthChange) === null || s === void 0 || s.call(e, c);
    }
  };
  return [r, a];
}
function Ym(e, n) {
  for (var t = n.reverseMonths, r = n.numberOfMonths, o = Ae(e), a = Ae(Ze(o, r)), i = vn(a, o), s = [], c = 0; c < i; c++) {
    var l = Ze(o, c);
    s.push(l);
  }
  return t && (s = s.reverse()), s;
}
function Um(e, n) {
  if (!n.disableNavigation) {
    var t = n.toDate, r = n.pagedNavigation, o = n.numberOfMonths, a = o === void 0 ? 1 : o, i = r ? a : 1, s = Ae(e);
    if (!t)
      return Ze(s, i);
    var c = vn(t, e);
    if (!(c < a))
      return Ze(s, i);
  }
}
function zm(e, n) {
  if (!n.disableNavigation) {
    var t = n.fromDate, r = n.pagedNavigation, o = n.numberOfMonths, a = o === void 0 ? 1 : o, i = r ? a : 1, s = Ae(e);
    if (!t)
      return Ze(s, -i);
    var c = vn(s, t);
    if (!(c <= 0))
      return Ze(s, -i);
  }
}
var ks = We(void 0);
function Km(e) {
  var n = ge(), t = Bm(), r = t[0], o = t[1], a = Ym(r, n), i = Um(r, n), s = zm(r, n), c = function(d) {
    return a.some(function(f) {
      return Vo(d, f);
    });
  }, l = function(d, f) {
    c(d) || (f && Ds(d, f) ? o(Ze(d, 1 + n.numberOfMonths * -1)) : o(d));
  }, u = {
    currentMonth: r,
    displayMonths: a,
    goToMonth: o,
    goToDate: l,
    previousMonth: s,
    nextMonth: i,
    isDateDisplayed: c
  };
  return $.createElement(ks.Provider, { value: u }, e.children);
}
function En() {
  var e = Le(ks);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function Ka(e) {
  var n, t = ge(), r = t.classNames, o = t.styles, a = t.components, i = En().goToMonth, s = function(u) {
    i(u);
  }, c = (n = a == null ? void 0 : a.CaptionLabel) !== null && n !== void 0 ? n : Ns, l = $.createElement(c, { id: e.id, displayMonth: e.displayMonth });
  return $.createElement(
    "div",
    { className: r.caption_dropdowns, style: o.caption_dropdowns },
    $.createElement("div", { className: r.vhidden }, l),
    $.createElement(Wm, { onChange: s, displayMonth: e.displayMonth }),
    $.createElement(jm, { onChange: s, displayMonth: e.displayMonth })
  );
}
function Gm(e) {
  return $.createElement(
    "svg",
    J({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e),
    $.createElement("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" })
  );
}
function qm(e) {
  return $.createElement(
    "svg",
    J({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e),
    $.createElement("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" })
  );
}
var Qn = T(function(e, n) {
  var t = ge(), r = t.classNames, o = t.styles, a = [r.button_reset, r.button];
  e.className && a.push(e.className);
  var i = a.join(" "), s = J(J({}, o.button_reset), o.button);
  return e.style && Object.assign(s, e.style), $.createElement("button", J({}, e, { ref: n, type: "button", className: i, style: s }));
});
function Xm(e) {
  var n, t, r = ge(), o = r.dir, a = r.locale, i = r.classNames, s = r.styles, c = r.labels, l = c.labelPrevious, u = c.labelNext, d = r.components;
  if (!e.nextMonth && !e.previousMonth)
    return $.createElement($.Fragment, null);
  var f = l(e.previousMonth, { locale: a }), p = [
    i.nav_button,
    i.nav_button_previous
  ].join(" "), v = u(e.nextMonth, { locale: a }), m = [
    i.nav_button,
    i.nav_button_next
  ].join(" "), b = (n = d == null ? void 0 : d.IconRight) !== null && n !== void 0 ? n : qm, y = (t = d == null ? void 0 : d.IconLeft) !== null && t !== void 0 ? t : Gm;
  return $.createElement(
    "div",
    { className: i.nav, style: s.nav },
    !e.hidePrevious && $.createElement(Qn, { name: "previous-month", "aria-label": f, className: p, style: s.nav_button_previous, disabled: !e.previousMonth, onClick: e.onPreviousClick }, o === "rtl" ? $.createElement(b, { className: i.nav_icon, style: s.nav_icon }) : $.createElement(y, { className: i.nav_icon, style: s.nav_icon })),
    !e.hideNext && $.createElement(Qn, { name: "next-month", "aria-label": v, className: m, style: s.nav_button_next, disabled: !e.nextMonth, onClick: e.onNextClick }, o === "rtl" ? $.createElement(y, { className: i.nav_icon, style: s.nav_icon }) : $.createElement(b, { className: i.nav_icon, style: s.nav_icon }))
  );
}
function Ga(e) {
  var n = ge().numberOfMonths, t = En(), r = t.previousMonth, o = t.nextMonth, a = t.goToMonth, i = t.displayMonths, s = i.findIndex(function(v) {
    return Vo(e.displayMonth, v);
  }), c = s === 0, l = s === i.length - 1, u = n > 1 && (c || !l), d = n > 1 && (l || !c), f = function() {
    r && a(r);
  }, p = function() {
    o && a(o);
  };
  return $.createElement(Xm, { displayMonth: e.displayMonth, hideNext: u, hidePrevious: d, nextMonth: o, previousMonth: r, onPreviousClick: f, onNextClick: p });
}
function Zm(e) {
  var n, t = ge(), r = t.classNames, o = t.disableNavigation, a = t.styles, i = t.captionLayout, s = t.components, c = (n = s == null ? void 0 : s.CaptionLabel) !== null && n !== void 0 ? n : Ns, l;
  return o ? l = $.createElement(c, { id: e.id, displayMonth: e.displayMonth }) : i === "dropdown" ? l = $.createElement(Ka, { displayMonth: e.displayMonth, id: e.id }) : i === "dropdown-buttons" ? l = $.createElement(
    $.Fragment,
    null,
    $.createElement(Ka, { displayMonth: e.displayMonth, id: e.id }),
    $.createElement(Ga, { displayMonth: e.displayMonth, id: e.id })
  ) : l = $.createElement(
    $.Fragment,
    null,
    $.createElement(c, { id: e.id, displayMonth: e.displayMonth }),
    $.createElement(Ga, { displayMonth: e.displayMonth, id: e.id })
  ), $.createElement("div", { className: r.caption, style: a.caption }, l);
}
function Qm(e) {
  var n = ge(), t = n.footer, r = n.styles, o = n.classNames.tfoot;
  return t ? $.createElement(
    "tfoot",
    { className: o, style: r.tfoot },
    $.createElement(
      "tr",
      null,
      $.createElement("td", { colSpan: 8 }, t)
    )
  ) : $.createElement($.Fragment, null);
}
function Jm(e, n, t) {
  for (var r = t ? Mt(/* @__PURE__ */ new Date()) : Qe(/* @__PURE__ */ new Date(), { locale: e, weekStartsOn: n }), o = [], a = 0; a < 7; a++) {
    var i = Ve(r, a);
    o.push(i);
  }
  return o;
}
function e0() {
  var e = ge(), n = e.classNames, t = e.styles, r = e.showWeekNumber, o = e.locale, a = e.weekStartsOn, i = e.ISOWeek, s = e.formatters.formatWeekdayName, c = e.labels.labelWeekday, l = Jm(o, a, i);
  return $.createElement(
    "tr",
    { style: t.head_row, className: n.head_row },
    r && $.createElement("td", { style: t.head_cell, className: n.head_cell }),
    l.map(function(u, d) {
      return $.createElement("th", { key: d, scope: "col", className: n.head_cell, style: t.head_cell, "aria-label": c(u, { locale: o }) }, s(u, { locale: o }));
    })
  );
}
function t0() {
  var e, n = ge(), t = n.classNames, r = n.styles, o = n.components, a = (e = o == null ? void 0 : o.HeadRow) !== null && e !== void 0 ? e : e0;
  return $.createElement(
    "thead",
    { style: r.head, className: t.head },
    $.createElement(a, null)
  );
}
function n0(e) {
  var n = ge(), t = n.locale, r = n.formatters.formatDay;
  return $.createElement($.Fragment, null, r(e.date, { locale: t }));
}
var Ho = We(void 0);
function r0(e) {
  if (!Cn(e.initialProps)) {
    var n = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return $.createElement(Ho.Provider, { value: n }, e.children);
  }
  return $.createElement(o0, { initialProps: e.initialProps, children: e.children });
}
function o0(e) {
  var n = e.initialProps, t = e.children, r = n.selected, o = n.min, a = n.max, i = function(l, u, d) {
    var f, p;
    (f = n.onDayClick) === null || f === void 0 || f.call(n, l, u, d);
    var v = !!(u.selected && o && (r == null ? void 0 : r.length) === o);
    if (!v) {
      var m = !!(!u.selected && a && (r == null ? void 0 : r.length) === a);
      if (!m) {
        var b = r ? Ms([], r, !0) : [];
        if (u.selected) {
          var y = b.findIndex(function(g) {
            return ke(l, g);
          });
          b.splice(y, 1);
        } else
          b.push(l);
        (p = n.onSelect) === null || p === void 0 || p.call(n, b, l, u, d);
      }
    }
  }, s = {
    disabled: []
  };
  r && s.disabled.push(function(l) {
    var u = a && r.length > a - 1, d = r.some(function(f) {
      return ke(f, l);
    });
    return !!(u && !d);
  });
  var c = {
    selected: r,
    onDayClick: i,
    modifiers: s
  };
  return $.createElement(Ho.Provider, { value: c }, t);
}
function Bo() {
  var e = Le(Ho);
  if (!e)
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  return e;
}
function a0(e, n) {
  var t = n || {}, r = t.from, o = t.to;
  if (!r)
    return { from: e, to: void 0 };
  if (!o && ke(r, e))
    return { from: r, to: e };
  if (!o && Ds(e, r))
    return { from: e, to: r };
  if (!o)
    return { from: r, to: e };
  if (!(ke(o, e) && ke(r, e))) {
    if (ke(o, e))
      return { from: o, to: void 0 };
    if (!ke(r, e))
      return Ss(r, e) ? { from: e, to: o } : { from: r, to: e };
  }
}
var Yo = We(void 0);
function i0(e) {
  if (!_n(e.initialProps)) {
    var n = {
      selected: void 0,
      modifiers: {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: []
      }
    };
    return $.createElement(Yo.Provider, { value: n }, e.children);
  }
  return $.createElement(s0, { initialProps: e.initialProps, children: e.children });
}
function s0(e) {
  var n = e.initialProps, t = e.children, r = n.selected, o = r || {}, a = o.from, i = o.to, s = n.min, c = n.max, l = function(p, v, m) {
    var b, y;
    (b = n.onDayClick) === null || b === void 0 || b.call(n, p, v, m);
    var g = a0(p, r);
    (y = n.onSelect) === null || y === void 0 || y.call(n, g, p, v, m);
  }, u = {
    range_start: [],
    range_end: [],
    range_middle: [],
    disabled: []
  };
  if (a && (u.range_start = [a], i ? (u.range_end = [i], ke(a, i) || (u.range_middle = [
    {
      after: a,
      before: i
    }
  ])) : u.range_end = [a]), s && (a && !i && u.disabled.push({
    after: Ua(a, s - 1),
    before: Ve(a, s - 1)
  }), a && i && u.disabled.push({
    after: a,
    before: Ve(a, s - 1)
  })), c && (a && !i && (u.disabled.push({
    before: Ve(a, -c + 1)
  }), u.disabled.push({
    after: Ve(a, c - 1)
  })), a && i)) {
    var d = ot(i, a) + 1, f = c - d;
    u.disabled.push({
      before: Ua(a, f)
    }), u.disabled.push({
      after: Ve(i, f)
    });
  }
  return $.createElement(Yo.Provider, { value: { selected: r, onDayClick: l, modifiers: u } }, t);
}
function Uo() {
  var e = Le(Yo);
  if (!e)
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return e;
}
function Un(e) {
  return Array.isArray(e) ? Ms([], e, !0) : e !== void 0 ? [e] : [];
}
function c0(e) {
  var n = {};
  return Object.entries(e).forEach(function(t) {
    var r = t[0], o = t[1];
    n[r] = Un(o);
  }), n;
}
var Ue;
(function(e) {
  e.Outside = "outside", e.Disabled = "disabled", e.Selected = "selected", e.Hidden = "hidden", e.Today = "today", e.RangeStart = "range_start", e.RangeEnd = "range_end", e.RangeMiddle = "range_middle";
})(Ue || (Ue = {}));
var l0 = Ue.Selected, nt = Ue.Disabled, d0 = Ue.Hidden, u0 = Ue.Today, Vr = Ue.RangeEnd, Hr = Ue.RangeMiddle, Br = Ue.RangeStart, f0 = Ue.Outside;
function p0(e, n, t) {
  var r, o = (r = {}, r[l0] = Un(e.selected), r[nt] = Un(e.disabled), r[d0] = Un(e.hidden), r[u0] = [e.today], r[Vr] = [], r[Hr] = [], r[Br] = [], r[f0] = [], r);
  return e.fromDate && o[nt].push({ before: e.fromDate }), e.toDate && o[nt].push({ after: e.toDate }), Cn(e) ? o[nt] = o[nt].concat(n.modifiers[nt]) : _n(e) && (o[nt] = o[nt].concat(t.modifiers[nt]), o[Br] = t.modifiers[Br], o[Hr] = t.modifiers[Hr], o[Vr] = t.modifiers[Vr]), o;
}
var As = We(void 0);
function v0(e) {
  var n = ge(), t = Bo(), r = Uo(), o = p0(n, t, r), a = c0(n.modifiers), i = J(J({}, o), a);
  return $.createElement(As.Provider, { value: i }, e.children);
}
function Is() {
  var e = Le(As);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function m0(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function b0(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function h0(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function g0(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function $0(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function y0(e, n) {
  var t, r = n.from, o = n.to;
  if (!r)
    return !1;
  if (!o && ke(r, e))
    return !0;
  if (!o)
    return !1;
  var a = ot(o, r) < 0;
  a && (t = [o, r], r = t[0], o = t[1]);
  var i = ot(e, r) >= 0 && ot(o, e) >= 0;
  return i;
}
function w0(e) {
  return Fo(e);
}
function x0(e) {
  return Array.isArray(e) && e.every(Fo);
}
function C0(e, n) {
  return n.some(function(t) {
    if (typeof t == "boolean")
      return t;
    if (w0(t))
      return ke(e, t);
    if (x0(t))
      return t.includes(e);
    if (b0(t))
      return y0(e, t);
    if ($0(t))
      return t.dayOfWeek.includes(e.getDay());
    if (m0(t)) {
      var r = ot(t.before, e), o = ot(t.after, e), a = r > 0, i = o < 0, s = Ss(t.before, t.after);
      return s ? i && a : a || i;
    }
    return h0(t) ? ot(e, t.after) > 0 : g0(t) ? ot(t.before, e) > 0 : typeof t == "function" ? t(e) : !1;
  });
}
function zo(e, n, t) {
  var r = Object.keys(n).reduce(function(a, i) {
    var s = n[i];
    return C0(e, s) && a.push(i), a;
  }, []), o = {};
  return r.forEach(function(a) {
    return o[a] = !0;
  }), t && !Vo(e, t) && (o.outside = !0), o;
}
function _0(e, n) {
  for (var t = Ae(e[0]), r = Wo(e[e.length - 1]), o, a, i = t; i <= r; ) {
    var s = zo(i, n), c = !s.disabled && !s.hidden;
    if (!c) {
      i = Ve(i, 1);
      continue;
    }
    if (s.selected)
      return i;
    s.today && !a && (a = i), o || (o = i), i = Ve(i, 1);
  }
  return a || o;
}
var E0 = 365;
function Ls(e, n) {
  var t = n.moveBy, r = n.direction, o = n.context, a = n.modifiers, i = n.retry, s = i === void 0 ? { count: 0, lastFocused: e } : i, c = o.weekStartsOn, l = o.fromDate, u = o.toDate, d = o.locale, f = {
    day: Ve,
    week: ao,
    month: Ze,
    year: Kp,
    startOfWeek: function(b) {
      return o.ISOWeek ? Mt(b) : Qe(b, { locale: d, weekStartsOn: c });
    },
    endOfWeek: function(b) {
      return o.ISOWeek ? Cs(b) : jo(b, { locale: d, weekStartsOn: c });
    }
  }, p = f[t](e, r === "after" ? 1 : -1);
  r === "before" && l ? p = Gp([l, p]) : r === "after" && u && (p = qp([u, p]));
  var v = !0;
  if (a) {
    var m = zo(p, a);
    v = !m.disabled && !m.hidden;
  }
  return v ? p : s.count > E0 ? s.lastFocused : Ls(p, {
    moveBy: t,
    direction: r,
    context: o,
    modifiers: a,
    retry: J(J({}, s), { count: s.count + 1 })
  });
}
var Fs = We(void 0);
function T0(e) {
  var n = En(), t = Is(), r = z(), o = r[0], a = r[1], i = z(), s = i[0], c = i[1], l = _0(n.displayMonths, t), u = o ?? (s && n.isDateDisplayed(s)) ? s : l, d = function() {
    c(o), a(void 0);
  }, f = function(b) {
    a(b);
  }, p = ge(), v = function(b, y) {
    if (o) {
      var g = Ls(o, {
        moveBy: b,
        direction: y,
        context: p,
        modifiers: t
      });
      ke(o, g) || (n.goToDate(g, o), f(g));
    }
  }, m = {
    focusedDay: o,
    focusTarget: u,
    blur: d,
    focus: f,
    focusDayAfter: function() {
      return v("day", "after");
    },
    focusDayBefore: function() {
      return v("day", "before");
    },
    focusWeekAfter: function() {
      return v("week", "after");
    },
    focusWeekBefore: function() {
      return v("week", "before");
    },
    focusMonthBefore: function() {
      return v("month", "before");
    },
    focusMonthAfter: function() {
      return v("month", "after");
    },
    focusYearBefore: function() {
      return v("year", "before");
    },
    focusYearAfter: function() {
      return v("year", "after");
    },
    focusStartOfWeek: function() {
      return v("startOfWeek", "before");
    },
    focusEndOfWeek: function() {
      return v("endOfWeek", "after");
    }
  };
  return $.createElement(Fs.Provider, { value: m }, e.children);
}
function Ko() {
  var e = Le(Fs);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function P0(e, n) {
  var t = Is(), r = zo(e, t, n);
  return r;
}
var Go = We(void 0);
function S0(e) {
  if (!vr(e.initialProps)) {
    var n = {
      selected: void 0
    };
    return $.createElement(Go.Provider, { value: n }, e.children);
  }
  return $.createElement(D0, { initialProps: e.initialProps, children: e.children });
}
function D0(e) {
  var n = e.initialProps, t = e.children, r = function(a, i, s) {
    var c, l, u;
    if ((c = n.onDayClick) === null || c === void 0 || c.call(n, a, i, s), i.selected && !n.required) {
      (l = n.onSelect) === null || l === void 0 || l.call(n, void 0, a, i, s);
      return;
    }
    (u = n.onSelect) === null || u === void 0 || u.call(n, a, a, i, s);
  }, o = {
    selected: n.selected,
    onDayClick: r
  };
  return $.createElement(Go.Provider, { value: o }, t);
}
function Ws() {
  var e = Le(Go);
  if (!e)
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  return e;
}
function M0(e, n) {
  var t = ge(), r = Ws(), o = Bo(), a = Uo(), i = Ko(), s = i.focusDayAfter, c = i.focusDayBefore, l = i.focusWeekAfter, u = i.focusWeekBefore, d = i.blur, f = i.focus, p = i.focusMonthBefore, v = i.focusMonthAfter, m = i.focusYearBefore, b = i.focusYearAfter, y = i.focusStartOfWeek, g = i.focusEndOfWeek, w = function(k) {
    var O, V, te, ne;
    vr(t) ? (O = r.onDayClick) === null || O === void 0 || O.call(r, e, n, k) : Cn(t) ? (V = o.onDayClick) === null || V === void 0 || V.call(o, e, n, k) : _n(t) ? (te = a.onDayClick) === null || te === void 0 || te.call(a, e, n, k) : (ne = t.onDayClick) === null || ne === void 0 || ne.call(t, e, n, k);
  }, _ = function(k) {
    var O;
    f(e), (O = t.onDayFocus) === null || O === void 0 || O.call(t, e, n, k);
  }, S = function(k) {
    var O;
    d(), (O = t.onDayBlur) === null || O === void 0 || O.call(t, e, n, k);
  }, N = function(k) {
    var O;
    (O = t.onDayMouseEnter) === null || O === void 0 || O.call(t, e, n, k);
  }, P = function(k) {
    var O;
    (O = t.onDayMouseLeave) === null || O === void 0 || O.call(t, e, n, k);
  }, F = function(k) {
    var O;
    (O = t.onDayPointerEnter) === null || O === void 0 || O.call(t, e, n, k);
  }, H = function(k) {
    var O;
    (O = t.onDayPointerLeave) === null || O === void 0 || O.call(t, e, n, k);
  }, q = function(k) {
    var O;
    (O = t.onDayTouchCancel) === null || O === void 0 || O.call(t, e, n, k);
  }, B = function(k) {
    var O;
    (O = t.onDayTouchEnd) === null || O === void 0 || O.call(t, e, n, k);
  }, j = function(k) {
    var O;
    (O = t.onDayTouchMove) === null || O === void 0 || O.call(t, e, n, k);
  }, G = function(k) {
    var O;
    (O = t.onDayTouchStart) === null || O === void 0 || O.call(t, e, n, k);
  }, D = function(k) {
    var O;
    (O = t.onDayKeyUp) === null || O === void 0 || O.call(t, e, n, k);
  }, A = function(k) {
    var O;
    switch (k.key) {
      case "ArrowLeft":
        k.preventDefault(), k.stopPropagation(), t.dir === "rtl" ? s() : c();
        break;
      case "ArrowRight":
        k.preventDefault(), k.stopPropagation(), t.dir === "rtl" ? c() : s();
        break;
      case "ArrowDown":
        k.preventDefault(), k.stopPropagation(), l();
        break;
      case "ArrowUp":
        k.preventDefault(), k.stopPropagation(), u();
        break;
      case "PageUp":
        k.preventDefault(), k.stopPropagation(), k.shiftKey ? m() : p();
        break;
      case "PageDown":
        k.preventDefault(), k.stopPropagation(), k.shiftKey ? b() : v();
        break;
      case "Home":
        k.preventDefault(), k.stopPropagation(), y();
        break;
      case "End":
        k.preventDefault(), k.stopPropagation(), g();
        break;
    }
    (O = t.onDayKeyDown) === null || O === void 0 || O.call(t, e, n, k);
  }, L = {
    onClick: w,
    onFocus: _,
    onBlur: S,
    onKeyDown: A,
    onKeyUp: D,
    onMouseEnter: N,
    onMouseLeave: P,
    onPointerEnter: F,
    onPointerLeave: H,
    onTouchCancel: q,
    onTouchEnd: B,
    onTouchMove: j,
    onTouchStart: G
  };
  return L;
}
function O0() {
  var e = ge(), n = Ws(), t = Bo(), r = Uo(), o = vr(e) ? n.selected : Cn(e) ? t.selected : _n(e) ? r.selected : void 0;
  return o;
}
function N0(e) {
  return Object.values(Ue).includes(e);
}
function R0(e, n) {
  var t = [e.classNames.day];
  return Object.keys(n).forEach(function(r) {
    var o = e.modifiersClassNames[r];
    if (o)
      t.push(o);
    else if (N0(r)) {
      var a = e.classNames["day_".concat(r)];
      a && t.push(a);
    }
  }), t;
}
function k0(e, n) {
  var t = J({}, e.styles.day);
  return Object.keys(n).forEach(function(r) {
    var o;
    t = J(J({}, t), (o = e.modifiersStyles) === null || o === void 0 ? void 0 : o[r]);
  }), t;
}
function A0(e, n, t) {
  var r, o, a, i = ge(), s = Ko(), c = P0(e, n), l = M0(e, c), u = O0(), d = !!(i.onDayClick || i.mode !== "default");
  K(function() {
    var N;
    c.outside || s.focusedDay && d && ke(s.focusedDay, e) && ((N = t.current) === null || N === void 0 || N.focus());
  }, [
    s.focusedDay,
    e,
    t,
    d,
    c.outside
  ]);
  var f = R0(i, c).join(" "), p = k0(i, c), v = !!(c.outside && !i.showOutsideDays || c.hidden), m = (a = (o = i.components) === null || o === void 0 ? void 0 : o.DayContent) !== null && a !== void 0 ? a : n0, b = $.createElement(m, { date: e, displayMonth: n, activeModifiers: c }), y = {
    style: p,
    className: f,
    children: b,
    role: "gridcell"
  }, g = s.focusTarget && ke(s.focusTarget, e) && !c.outside, w = s.focusedDay && ke(s.focusedDay, e), _ = J(J(J({}, y), (r = { disabled: c.disabled, role: "gridcell" }, r["aria-selected"] = c.selected, r.tabIndex = w || g ? 0 : -1, r)), l), S = {
    isButton: d,
    isHidden: v,
    activeModifiers: c,
    selectedDays: u,
    buttonProps: _,
    divProps: y
  };
  return S;
}
function I0(e) {
  var n = R(null), t = A0(e.date, e.displayMonth, n);
  return t.isHidden ? $.createElement("div", { role: "gridcell" }) : t.isButton ? $.createElement(Qn, J({ name: "day", ref: n }, t.buttonProps)) : $.createElement("div", J({}, t.divProps));
}
function L0(e) {
  var n = e.number, t = e.dates, r = ge(), o = r.onWeekNumberClick, a = r.styles, i = r.classNames, s = r.locale, c = r.labels.labelWeekNumber, l = r.formatters.formatWeekNumber, u = l(Number(n), { locale: s });
  if (!o)
    return $.createElement("span", { className: i.weeknumber, style: a.weeknumber }, u);
  var d = c(Number(n), { locale: s }), f = function(p) {
    o(n, t, p);
  };
  return $.createElement(Qn, { name: "week-number", "aria-label": d, className: i.weeknumber, style: a.weeknumber, onClick: f }, u);
}
function F0(e) {
  var n, t, r = ge(), o = r.styles, a = r.classNames, i = r.showWeekNumber, s = r.components, c = (n = s == null ? void 0 : s.Day) !== null && n !== void 0 ? n : I0, l = (t = s == null ? void 0 : s.WeekNumber) !== null && t !== void 0 ? t : L0, u;
  return i && (u = $.createElement(
    "td",
    { className: a.cell, style: o.cell },
    $.createElement(l, { number: e.weekNumber, dates: e.dates })
  )), $.createElement(
    "tr",
    { className: a.row, style: o.row },
    u,
    e.dates.map(function(d) {
      return $.createElement(
        "td",
        { className: a.cell, style: o.cell, key: dm(d), role: "presentation" },
        $.createElement(c, { displayMonth: e.displayMonth, date: d })
      );
    })
  );
}
function qa(e, n, t) {
  for (var r = t != null && t.ISOWeek ? Cs(n) : jo(n, t), o = t != null && t.ISOWeek ? Mt(e) : Qe(e, t), a = ot(r, o), i = [], s = 0; s <= a; s++)
    i.push(Ve(o, s));
  var c = i.reduce(function(l, u) {
    var d = t != null && t.ISOWeek ? cm(u) : vm(u, t), f = l.find(function(p) {
      return p.weekNumber === d;
    });
    return f ? (f.dates.push(u), l) : (l.push({
      weekNumber: d,
      dates: [u]
    }), l);
  }, []);
  return c;
}
function W0(e, n) {
  var t = qa(Ae(e), Wo(e), n);
  if (n != null && n.useFixedWeeks) {
    var r = bm(e, n);
    if (r < 6) {
      var o = t[t.length - 1], a = o.dates[o.dates.length - 1], i = ao(a, 6 - r), s = qa(ao(a, 1), i, n);
      t.push.apply(t, s);
    }
  }
  return t;
}
function j0(e) {
  var n, t, r, o = ge(), a = o.locale, i = o.classNames, s = o.styles, c = o.hideHead, l = o.fixedWeeks, u = o.components, d = o.weekStartsOn, f = o.firstWeekContainsDate, p = o.ISOWeek, v = W0(e.displayMonth, {
    useFixedWeeks: !!l,
    ISOWeek: p,
    locale: a,
    weekStartsOn: d,
    firstWeekContainsDate: f
  }), m = (n = u == null ? void 0 : u.Head) !== null && n !== void 0 ? n : t0, b = (t = u == null ? void 0 : u.Row) !== null && t !== void 0 ? t : F0, y = (r = u == null ? void 0 : u.Footer) !== null && r !== void 0 ? r : Qm;
  return $.createElement(
    "table",
    { id: e.id, className: i.table, style: s.table, role: "grid", "aria-labelledby": e["aria-labelledby"] },
    !c && $.createElement(m, null),
    $.createElement("tbody", { className: i.tbody, style: s.tbody, role: "rowgroup" }, v.map(function(g) {
      return $.createElement(b, { displayMonth: e.displayMonth, key: g.weekNumber, dates: g.dates, weekNumber: g.weekNumber });
    })),
    $.createElement(y, { displayMonth: e.displayMonth })
  );
}
function V0() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var H0 = V0() ? X.useLayoutEffect : X.useEffect, Yr = !1, B0 = 0;
function Xa() {
  return "react-day-picker-".concat(++B0);
}
function Y0(e) {
  var n, t = e ?? (Yr ? Xa() : null), r = X.useState(t), o = r[0], a = r[1];
  return H0(function() {
    o === null && a(Xa());
  }, []), X.useEffect(function() {
    Yr === !1 && (Yr = !0);
  }, []), (n = e ?? o) !== null && n !== void 0 ? n : void 0;
}
function U0(e) {
  var n, t, r = ge(), o = r.dir, a = r.classNames, i = r.styles, s = r.components, c = En().displayMonths, l = Y0(r.id ? "".concat(r.id, "-").concat(e.displayIndex) : void 0), u = r.id ? "".concat(r.id, "-grid-").concat(e.displayIndex) : void 0, d = [a.month], f = i.month, p = e.displayIndex === 0, v = e.displayIndex === c.length - 1, m = !p && !v;
  o === "rtl" && (n = [p, v], v = n[0], p = n[1]), p && (d.push(a.caption_start), f = J(J({}, f), i.caption_start)), v && (d.push(a.caption_end), f = J(J({}, f), i.caption_end)), m && (d.push(a.caption_between), f = J(J({}, f), i.caption_between));
  var b = (t = s == null ? void 0 : s.Caption) !== null && t !== void 0 ? t : Zm;
  return $.createElement(
    "div",
    { key: e.displayIndex, className: d.join(" "), style: f },
    $.createElement(b, { id: l, displayMonth: e.displayMonth }),
    $.createElement(j0, { id: u, "aria-labelledby": l, displayMonth: e.displayMonth })
  );
}
function z0(e) {
  var n = e.initialProps, t = ge(), r = Ko(), o = En(), a = z(!1), i = a[0], s = a[1];
  K(function() {
    t.initialFocus && r.focusTarget && (i || (r.focus(r.focusTarget), s(!0)));
  }, [
    t.initialFocus,
    i,
    r.focus,
    r.focusTarget,
    r
  ]);
  var c = [t.classNames.root, t.className];
  t.numberOfMonths > 1 && c.push(t.classNames.multiple_months), t.showWeekNumber && c.push(t.classNames.with_weeknumber);
  var l = J(J({}, t.styles.root), t.style), u = Object.keys(n).filter(function(d) {
    return d.startsWith("data-");
  }).reduce(function(d, f) {
    var p;
    return J(J({}, d), (p = {}, p[f] = n[f], p));
  }, {});
  return $.createElement(
    "div",
    J({ className: c.join(" "), style: l, dir: t.dir, id: t.id }, u),
    $.createElement("div", { className: t.classNames.months, style: t.styles.months }, o.displayMonths.map(function(d, f) {
      return $.createElement(U0, { key: f, displayIndex: f, displayMonth: d });
    }))
  );
}
function K0(e) {
  var n = e.children, t = gm(e, ["children"]);
  return $.createElement(
    Lm,
    { initialProps: t },
    $.createElement(
      Km,
      null,
      $.createElement(
        S0,
        { initialProps: t },
        $.createElement(
          r0,
          { initialProps: t },
          $.createElement(
            i0,
            { initialProps: t },
            $.createElement(
              v0,
              null,
              $.createElement(T0, null, n)
            )
          )
        )
      )
    )
  );
}
function G0(e) {
  return $.createElement(
    K0,
    J({}, e),
    $.createElement(z0, { initialProps: e })
  );
}
function io({
  className: e,
  classNames: n,
  showOutsideDays: t = !0,
  ...r
}) {
  return /* @__PURE__ */ E.jsx(
    G0,
    {
      showOutsideDays: t,
      className: M("tw-reset ~p-3", e),
      classNames: {
        months: "~flex ~flex-col sm:~flex-row ~space-y-4 sm:~space-x-4 sm:~space-y-0",
        month: M("~space-y-4"),
        caption: "~flex ~justify-center ~pt-1 ~relative ~items-center",
        caption_label: "~text-sm ~font-medium",
        nav: "~space-x-1 ~flex ~items-center",
        nav_button: M(fn({ variant: "ghost" }), "~h-9 ~w-9 ~p-0"),
        nav_button_previous: "~absolute ~left-1",
        nav_button_next: "~absolute ~right-1",
        table: "~w-full ~border-collapse ~space-y-1",
        head_row: "~flex",
        head_cell: M(
          "caption-1 ~w-10 ~text-center ~font-normal ~text-muted-foreground"
        ),
        row: "~flex ~w-full ~mt-2",
        cell: M(
          "~relative ~p-0 ~text-center focus-within:~relative focus-within:~z-20 [&:has([aria-selected])]:~bg-accent",
          r.mode === "range" ? "[&:has(>.day-range-end)]:~rounded-r-full [&:has(>.day-range-start)]:~rounded-l-full first:[&:has([aria-selected])]:~rounded-l-full last:[&:has([aria-selected])]:~rounded-r-full" : "[&:has([aria-selected])]:~rounded-full"
        ),
        day: M(
          fn({ variant: "ghost" }),
          "~h-10 ~w-10 ~p-0 ~font-normal aria-selected:~opacity-100"
        ),
        day_selected: M(
          "~bg-primary ~text-primary-foreground",
          "hover:~bg-primary hover:~text-primary-foreground",
          "focus:~bg-primary focus:~text-primary-foreground"
        ),
        day_today: M("today ~bg-accent ~text-accent-foreground"),
        day_outside: "~text-muted-foreground ~opacity-50",
        day_disabled: "~text-muted-foreground ~opacity-50",
        day_range_middle: M(
          "aria-selected:~bg-transparent aria-selected:~text-accent-foreground",
          "[&.today]:~bg-accent"
        ),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_hidden: "~invisible",
        ...n
      },
      components: {
        IconLeft: () => /* @__PURE__ */ E.jsx(kp, { className: "~h-5 ~w-5" }),
        IconRight: () => /* @__PURE__ */ E.jsx(ws, { className: "~h-5 ~w-5" })
      },
      ...r
    }
  );
}
io.displayName = "Calendar";
const q0 = $.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ E.jsx(
  "div",
  {
    ref: t,
    className: M(
      "tw-reset ~rounded-xl ~border ~bg-card ~text-card-foreground ~shadow",
      e
    ),
    ...n
  }
));
q0.displayName = "Card";
const X0 = $.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ E.jsx(
  "div",
  {
    ref: t,
    className: M("~flex ~flex-col ~space-y-1.5 ~p-6", e),
    ...n
  }
));
X0.displayName = "CardHeader";
const Z0 = $.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ E.jsx(
  "h3",
  {
    ref: t,
    className: M("~font-semibold ~leading-none ~tracking-tight", e),
    ...n
  }
));
Z0.displayName = "CardTitle";
const Q0 = $.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ E.jsx("p", { ref: t, className: M("~text-muted-foreground", e), ...n }));
Q0.displayName = "CardDescription";
const J0 = $.forwardRef(({ className: e, noHeader: n, ...t }, r) => /* @__PURE__ */ E.jsx(
  "div",
  {
    ref: r,
    className: M("~p-6", !n && "~pt-0", e),
    ...t
  }
));
J0.displayName = "CardContent";
const eb = $.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ E.jsx(
  "div",
  {
    ref: t,
    className: M("~flex ~items-center ~p-6 ~pt-0", e),
    ...n
  }
));
eb.displayName = "CardFooter";
function Tn(e) {
  const n = R({
    value: e,
    previous: e
  });
  return Xe(() => (n.current.value !== e && (n.current.previous = n.current.value, n.current.value = e), n.current.previous), [
    e
  ]);
}
function Pn(e) {
  const [n, t] = z(void 0);
  return Ie(() => {
    if (e) {
      t({
        width: e.offsetWidth,
        height: e.offsetHeight
      });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const a = o[0];
        let i, s;
        if ("borderBoxSize" in a) {
          const c = a.borderBoxSize, l = Array.isArray(c) ? c[0] : c;
          i = l.inlineSize, s = l.blockSize;
        } else
          i = e.offsetWidth, s = e.offsetHeight;
        t({
          width: i,
          height: s
        });
      });
      return r.observe(e, {
        box: "border-box"
      }), () => r.unobserve(e);
    } else
      t(void 0);
  }, [
    e
  ]), n;
}
const js = "Checkbox", [tb, Dw] = xe(js), [nb, rb] = tb(js), ob = /* @__PURE__ */ T((e, n) => {
  const { __scopeCheckbox: t, name: r, checked: o, defaultChecked: a, required: i, disabled: s, value: c = "on", onCheckedChange: l, ...u } = e, [d, f] = z(null), p = re(
    n,
    (w) => f(w)
  ), v = R(!1), m = d ? !!d.closest("form") : !0, [b = !1, y] = Ee({
    prop: o,
    defaultProp: a,
    onChange: l
  }), g = R(b);
  return K(() => {
    const w = d == null ? void 0 : d.form;
    if (w) {
      const _ = () => y(g.current);
      return w.addEventListener("reset", _), () => w.removeEventListener("reset", _);
    }
  }, [
    d,
    y
  ]), /* @__PURE__ */ h(nb, {
    scope: t,
    state: b,
    disabled: s
  }, /* @__PURE__ */ h(Y.button, x({
    type: "button",
    role: "checkbox",
    "aria-checked": Dt(b) ? "mixed" : b,
    "aria-required": i,
    "data-state": Vs(b),
    "data-disabled": s ? "" : void 0,
    disabled: s,
    value: c
  }, u, {
    ref: p,
    onKeyDown: I(e.onKeyDown, (w) => {
      w.key === "Enter" && w.preventDefault();
    }),
    onClick: I(e.onClick, (w) => {
      y(
        (_) => Dt(_) ? !0 : !_
      ), m && (v.current = w.isPropagationStopped(), v.current || w.stopPropagation());
    })
  })), m && /* @__PURE__ */ h(sb, {
    control: d,
    bubbles: !v.current,
    name: r,
    value: c,
    checked: b,
    required: i,
    disabled: s,
    style: {
      transform: "translateX(-100%)"
    }
  }));
}), ab = "CheckboxIndicator", ib = /* @__PURE__ */ T((e, n) => {
  const { __scopeCheckbox: t, forceMount: r, ...o } = e, a = rb(ab, t);
  return /* @__PURE__ */ h(Me, {
    present: r || Dt(a.state) || a.state === !0
  }, /* @__PURE__ */ h(Y.span, x({
    "data-state": Vs(a.state),
    "data-disabled": a.disabled ? "" : void 0
  }, o, {
    ref: n,
    style: {
      pointerEvents: "none",
      ...e.style
    }
  })));
}), sb = (e) => {
  const { control: n, checked: t, bubbles: r = !0, ...o } = e, a = R(null), i = Tn(t), s = Pn(n);
  return K(() => {
    const c = a.current, l = window.HTMLInputElement.prototype, d = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (i !== t && d) {
      const f = new Event("click", {
        bubbles: r
      });
      c.indeterminate = Dt(t), d.call(c, Dt(t) ? !1 : t), c.dispatchEvent(f);
    }
  }, [
    i,
    t,
    r
  ]), /* @__PURE__ */ h("input", x({
    type: "checkbox",
    "aria-hidden": !0,
    defaultChecked: Dt(t) ? !1 : t
  }, o, {
    tabIndex: -1,
    ref: a,
    style: {
      ...e.style,
      ...s,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0
    }
  }));
};
function Dt(e) {
  return e === "indeterminate";
}
function Vs(e) {
  return Dt(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const Hs = ob, cb = ib, lb = $.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ E.jsx(
  Hs,
  {
    ref: t,
    className: M(
      "tw-reset ~peer ~h-4 ~w-4 ~shrink-0 ~rounded-sm ~border ~border-primary ~shadow",
      "focus-visible:~outline-none focus-visible:~ring-1 focus-visible:~ring-ring",
      "disabled:~cursor-not-allowed disabled:~opacity-50",
      "data-[state=checked]:~bg-primary data-[state=checked]:~text-primary-foreground",
      e
    ),
    ...n,
    children: /* @__PURE__ */ E.jsx(
      cb,
      {
        className: M(
          "~flex ~h-full ~w-full ~items-center ~justify-center ~text-current"
        ),
        children: /* @__PURE__ */ E.jsx(Lo, { className: "~h-4 ~w-4" })
      }
    )
  }
));
lb.displayName = Hs.displayName;
const Za = (e) => !!e && typeof e == "object" && ("from" in e || "to" in e), Mw = ({
  mode: e = "single",
  disabled: n,
  disabledDates: t,
  className: r,
  selected: o,
  onSelect: a,
  ...i
}) => {
  const [s, c] = z(o), [l, u] = z("");
  function d(v, m, b, y) {
    a ? a(v, m, b, y) : c(v);
  }
  function f(v) {
    a ? a(
      v,
      v,
      {},
      {}
    ) : c(v);
  }
  un(() => {
    e === "single" && Za(s) && s.from instanceof Date ? f(s.from) : e === "range" && s instanceof Date ? f({ from: s }) : f(void 0);
  }, [e]), un(() => {
    u((() => {
      if (e === "single" && s instanceof Date)
        return Be(s, "PPP");
      if (e === "range" && Za(s)) {
        if (s.from && s.to)
          return `${Be(s.from, "LLL dd, y")} - ${Be(
            s.to,
            "LLL dd, y"
          )}`;
        if (s.from)
          return `${Be(s.from, "LLL dd, y")} - ?`;
      }
      return e === "single" ? "Pick a date" : "Pick a date range";
    })());
  }, [s, e]), K(() => {
    c(o);
  }, [o]);
  const p = {
    ...i,
    mode: e,
    disabled: t,
    defaultMonth: e === "range" ? s == null ? void 0 : s.from : s,
    initialFocus: !0,
    numberOfMonths: e === "range" ? 2 : 1,
    selected: s,
    onSelect: d
  };
  return /* @__PURE__ */ E.jsxs(zg, { children: [
    /* @__PURE__ */ E.jsx(Kg, { asChild: !0, disabled: n, children: /* @__PURE__ */ E.jsxs(
      ys,
      {
        variant: "outline",
        id: "date",
        className: M(
          "~w-[250px] ~items-center ~justify-start ~text-left ~font-normal",
          !o && "~text-muted-foreground",
          r
        ),
        children: [
          /* @__PURE__ */ E.jsx(Dp, { className: "~mr-3 ~h-5 ~w-5" }),
          l
        ]
      }
    ) }),
    /* @__PURE__ */ E.jsx(Vc, { className: "~w-auto ~p-0", align: "start", children: e === "single" ? /* @__PURE__ */ E.jsx(io, { ...p }) : /* @__PURE__ */ E.jsx(io, { ...p }) })
  ] });
}, Ow = rs, Nw = $.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ E.jsx(
  os,
  {
    ref: t,
    className: M("tw-reset", e),
    ...n
  }
)), Bs = ({
  className: e,
  ...n
}) => /* @__PURE__ */ E.jsx(Oo, { className: M(e), ...n });
Bs.displayName = Oo.displayName;
const Ys = $.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ E.jsx(
  No,
  {
    ref: t,
    className: M(
      "~fixed ~inset-0 ~z-50 ~bg-background/80 ~backdrop-blur-sm",
      "data-[state=open]:~animate-in data-[state=open]:~fade-in-0",
      "data-[state=closed]:~animate-out data-[state=closed]:~fade-out-0",
      e
    ),
    ...n
  }
));
Ys.displayName = No.displayName;
const db = $.forwardRef(({ className: e, children: n, ...t }, r) => /* @__PURE__ */ E.jsxs(Bs, { children: [
  /* @__PURE__ */ E.jsx(Ys, {}),
  /* @__PURE__ */ E.jsxs(
    Ro,
    {
      ref: r,
      className: M(
        "tw-reset ~fixed ~left-[50%] ~top-[50%] ~z-50 ~grid ~w-full ~max-w-lg ~translate-x-[-50%] ~translate-y-[-50%] ~gap-4 ~border ~bg-background ~p-6 ~shadow-lg ~duration-200 sm:~rounded-lg md:~w-full",
        "data-[state=open]:~animate-in data-[state=open]:~fade-in-0 data-[state=open]:~zoom-in-95 data-[state=open]:~slide-in-from-left-1/2 data-[state=open]:~slide-in-from-top-[48%]",
        "data-[state=closed]:~animate-out data-[state=closed]:~fade-out-0 data-[state=closed]:~zoom-out-95 data-[state=closed]:~slide-out-to-left-1/2 data-[state=closed]:~slide-out-to-top-[48%]",
        e
      ),
      ...t,
      children: [
        n,
        /* @__PURE__ */ E.jsxs(
          Io,
          {
            className: M(
              "~absolute ~right-4 ~top-4 ~rounded-sm ~opacity-70 ~transition-opacity hover:~opacity-100 disabled:~pointer-events-none",
              "~ring-offset-background focus:~outline-none focus:~ring-2 focus:~ring-ring focus:~ring-offset-2",
              "data-[state=open]:~bg-accent data-[state=open]:~text-muted-foreground"
            ),
            children: [
              /* @__PURE__ */ E.jsx(xs, { className: "~h-4 ~w-4" }),
              /* @__PURE__ */ E.jsx("span", { className: "~sr-only", children: "Close" })
            ]
          }
        )
      ]
    }
  )
] }));
db.displayName = Ro.displayName;
const ub = ({
  className: e,
  ...n
}) => /* @__PURE__ */ E.jsx(
  "div",
  {
    className: M(
      "~flex ~flex-col ~space-y-1.5 ~text-center sm:~text-left",
      e
    ),
    ...n
  }
);
ub.displayName = "DialogHeader";
const fb = ({
  className: e,
  ...n
}) => /* @__PURE__ */ E.jsx(
  "div",
  {
    className: M(
      "~flex ~flex-col-reverse sm:~flex-row sm:~justify-end sm:~space-x-2",
      e
    ),
    ...n
  }
);
fb.displayName = "DialogFooter";
const pb = ko;
pb.displayName = ko.displayName;
const vb = $.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ E.jsx(
  Ao,
  {
    ref: t,
    className: M("~text-muted-foreground", e),
    ...n
  }
));
vb.displayName = Ao.displayName;
function en(e) {
  return e.split("-")[1];
}
function qo(e) {
  return e === "y" ? "height" : "width";
}
function at(e) {
  return e.split("-")[0];
}
function It(e) {
  return ["top", "bottom"].includes(at(e)) ? "x" : "y";
}
function Qa(e, n, t) {
  let { reference: r, floating: o } = e;
  const a = r.x + r.width / 2 - o.width / 2, i = r.y + r.height / 2 - o.height / 2, s = It(n), c = qo(s), l = r[c] / 2 - o[c] / 2, u = s === "x";
  let d;
  switch (at(n)) {
    case "top":
      d = { x: a, y: r.y - o.height };
      break;
    case "bottom":
      d = { x: a, y: r.y + r.height };
      break;
    case "right":
      d = { x: r.x + r.width, y: i };
      break;
    case "left":
      d = { x: r.x - o.width, y: i };
      break;
    default:
      d = { x: r.x, y: r.y };
  }
  switch (en(n)) {
    case "start":
      d[s] -= l * (t && u ? -1 : 1);
      break;
    case "end":
      d[s] += l * (t && u ? -1 : 1);
  }
  return d;
}
const mb = async (e, n, t) => {
  const { placement: r = "bottom", strategy: o = "absolute", middleware: a = [], platform: i } = t, s = a.filter(Boolean), c = await (i.isRTL == null ? void 0 : i.isRTL(n));
  let l = await i.getElementRects({ reference: e, floating: n, strategy: o }), { x: u, y: d } = Qa(l, r, c), f = r, p = {}, v = 0;
  for (let m = 0; m < s.length; m++) {
    const { name: b, fn: y } = s[m], { x: g, y: w, data: _, reset: S } = await y({ x: u, y: d, initialPlacement: r, placement: f, strategy: o, middlewareData: p, rects: l, platform: i, elements: { reference: e, floating: n } });
    u = g ?? u, d = w ?? d, p = { ...p, [b]: { ...p[b], ..._ } }, S && v <= 50 && (v++, typeof S == "object" && (S.placement && (f = S.placement), S.rects && (l = S.rects === !0 ? await i.getElementRects({ reference: e, floating: n, strategy: o }) : S.rects), { x: u, y: d } = Qa(l, f, c)), m = -1);
  }
  return { x: u, y: d, placement: f, strategy: o, middlewareData: p };
};
function lt(e, n) {
  return typeof e == "function" ? e(n) : e;
}
function Us(e) {
  return typeof e != "number" ? function(n) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...n };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function Jn(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function mn(e, n) {
  var t;
  n === void 0 && (n = {});
  const { x: r, y: o, platform: a, rects: i, elements: s, strategy: c } = e, { boundary: l = "clippingAncestors", rootBoundary: u = "viewport", elementContext: d = "floating", altBoundary: f = !1, padding: p = 0 } = lt(n, e), v = Us(p), m = s[f ? d === "floating" ? "reference" : "floating" : d], b = Jn(await a.getClippingRect({ element: (t = await (a.isElement == null ? void 0 : a.isElement(m))) == null || t ? m : m.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)), boundary: l, rootBoundary: u, strategy: c })), y = d === "floating" ? { ...i.floating, x: r, y: o } : i.reference, g = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating)), w = await (a.isElement == null ? void 0 : a.isElement(g)) && await (a.getScale == null ? void 0 : a.getScale(g)) || { x: 1, y: 1 }, _ = Jn(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: y, offsetParent: g, strategy: c }) : y);
  return { top: (b.top - _.top + v.top) / w.y, bottom: (_.bottom - b.bottom + v.bottom) / w.y, left: (b.left - _.left + v.left) / w.x, right: (_.right - b.right + v.right) / w.x };
}
const bn = Math.min, Tt = Math.max;
function so(e, n, t) {
  return Tt(e, bn(n, t));
}
const Ja = (e) => ({ name: "arrow", options: e, async fn(n) {
  const { x: t, y: r, placement: o, rects: a, platform: i, elements: s } = n, { element: c, padding: l = 0 } = lt(e, n) || {};
  if (c == null)
    return {};
  const u = Us(l), d = { x: t, y: r }, f = It(o), p = qo(f), v = await i.getDimensions(c), m = f === "y", b = m ? "top" : "left", y = m ? "bottom" : "right", g = m ? "clientHeight" : "clientWidth", w = a.reference[p] + a.reference[f] - d[f] - a.floating[p], _ = d[f] - a.reference[f], S = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c));
  let N = S ? S[g] : 0;
  N && await (i.isElement == null ? void 0 : i.isElement(S)) || (N = s.floating[g] || a.floating[p]);
  const P = w / 2 - _ / 2, F = N / 2 - v[p] / 2 - 1, H = bn(u[b], F), q = bn(u[y], F), B = H, j = N - v[p] - q, G = N / 2 - v[p] / 2 + P, D = so(B, G, j), A = en(o) != null && G != D && a.reference[p] / 2 - (G < B ? H : q) - v[p] / 2 < 0 ? G < B ? B - G : j - G : 0;
  return { [f]: d[f] - A, data: { [f]: D, centerOffset: G - D + A } };
} }), zs = ["top", "right", "bottom", "left"];
zs.reduce((e, n) => e.concat(n, n + "-start", n + "-end"), []);
const bb = { left: "right", right: "left", bottom: "top", top: "bottom" };
function er(e) {
  return e.replace(/left|right|bottom|top/g, (n) => bb[n]);
}
function hb(e, n, t) {
  t === void 0 && (t = !1);
  const r = en(e), o = It(e), a = qo(o);
  let i = o === "x" ? r === (t ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return n.reference[a] > n.floating[a] && (i = er(i)), { main: i, cross: er(i) };
}
const gb = { start: "end", end: "start" };
function Ur(e) {
  return e.replace(/start|end/g, (n) => gb[n]);
}
const $b = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(n) {
    var t;
    const { placement: r, middlewareData: o, rects: a, initialPlacement: i, platform: s, elements: c } = n, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: v = !0, ...m } = lt(e, n), b = at(r), y = at(i) === i, g = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), w = d || (y || !v ? [er(i)] : function(B) {
      const j = er(B);
      return [Ur(B), j, Ur(j)];
    }(i));
    d || p === "none" || w.push(...function(B, j, G, D) {
      const A = en(B);
      let L = function(k, O, V) {
        const te = ["left", "right"], ne = ["right", "left"], de = ["top", "bottom"], ce = ["bottom", "top"];
        switch (k) {
          case "top":
          case "bottom":
            return V ? O ? ne : te : O ? te : ne;
          case "left":
          case "right":
            return O ? de : ce;
          default:
            return [];
        }
      }(at(B), G === "start", D);
      return A && (L = L.map((k) => k + "-" + A), j && (L = L.concat(L.map(Ur)))), L;
    }(i, v, p, g));
    const _ = [i, ...w], S = await mn(n, m), N = [];
    let P = ((t = o.flip) == null ? void 0 : t.overflows) || [];
    if (l && N.push(S[b]), u) {
      const { main: B, cross: j } = hb(r, a, g);
      N.push(S[B], S[j]);
    }
    if (P = [...P, { placement: r, overflows: N }], !N.every((B) => B <= 0)) {
      var F, H;
      const B = (((F = o.flip) == null ? void 0 : F.index) || 0) + 1, j = _[B];
      if (j)
        return { data: { index: B, overflows: P }, reset: { placement: j } };
      let G = (H = P.filter((D) => D.overflows[0] <= 0).sort((D, A) => D.overflows[1] - A.overflows[1])[0]) == null ? void 0 : H.placement;
      if (!G)
        switch (f) {
          case "bestFit": {
            var q;
            const D = (q = P.map((A) => [A.placement, A.overflows.filter((L) => L > 0).reduce((L, k) => L + k, 0)]).sort((A, L) => A[1] - L[1])[0]) == null ? void 0 : q[0];
            D && (G = D);
            break;
          }
          case "initialPlacement":
            G = i;
        }
      if (r !== G)
        return { reset: { placement: G } };
    }
    return {};
  } };
};
function ei(e, n) {
  return { top: e.top - n.height, right: e.right - n.width, bottom: e.bottom - n.height, left: e.left - n.width };
}
function ti(e) {
  return zs.some((n) => e[n] >= 0);
}
const yb = function(e) {
  return e === void 0 && (e = {}), { name: "hide", options: e, async fn(n) {
    const { rects: t } = n, { strategy: r = "referenceHidden", ...o } = lt(e, n);
    switch (r) {
      case "referenceHidden": {
        const a = ei(await mn(n, { ...o, elementContext: "reference" }), t.reference);
        return { data: { referenceHiddenOffsets: a, referenceHidden: ti(a) } };
      }
      case "escaped": {
        const a = ei(await mn(n, { ...o, altBoundary: !0 }), t.floating);
        return { data: { escapedOffsets: a, escaped: ti(a) } };
      }
      default:
        return {};
    }
  } };
}, wb = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(n) {
    const { x: t, y: r } = n, o = await async function(a, i) {
      const { placement: s, platform: c, elements: l } = a, u = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), d = at(s), f = en(s), p = It(s) === "x", v = ["left", "top"].includes(d) ? -1 : 1, m = u && p ? -1 : 1, b = lt(i, a);
      let { mainAxis: y, crossAxis: g, alignmentAxis: w } = typeof b == "number" ? { mainAxis: b, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...b };
      return f && typeof w == "number" && (g = f === "end" ? -1 * w : w), p ? { x: g * m, y: y * v } : { x: y * v, y: g * m };
    }(n, e);
    return { x: t + o.x, y: r + o.y, data: o };
  } };
};
function Ks(e) {
  return e === "x" ? "y" : "x";
}
const xb = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(n) {
    const { x: t, y: r, placement: o } = n, { mainAxis: a = !0, crossAxis: i = !1, limiter: s = { fn: (b) => {
      let { x: y, y: g } = b;
      return { x: y, y: g };
    } }, ...c } = lt(e, n), l = { x: t, y: r }, u = await mn(n, c), d = It(at(o)), f = Ks(d);
    let p = l[d], v = l[f];
    if (a) {
      const b = d === "y" ? "bottom" : "right";
      p = so(p + u[d === "y" ? "top" : "left"], p, p - u[b]);
    }
    if (i) {
      const b = f === "y" ? "bottom" : "right";
      v = so(v + u[f === "y" ? "top" : "left"], v, v - u[b]);
    }
    const m = s.fn({ ...n, [d]: p, [f]: v });
    return { ...m, data: { x: m.x - t, y: m.y - r } };
  } };
}, Cb = function(e) {
  return e === void 0 && (e = {}), { options: e, fn(n) {
    const { x: t, y: r, placement: o, rects: a, middlewareData: i } = n, { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = lt(e, n), u = { x: t, y: r }, d = It(o), f = Ks(d);
    let p = u[d], v = u[f];
    const m = lt(s, n), b = typeof m == "number" ? { mainAxis: m, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...m };
    if (c) {
      const w = d === "y" ? "height" : "width", _ = a.reference[d] - a.floating[w] + b.mainAxis, S = a.reference[d] + a.reference[w] - b.mainAxis;
      p < _ ? p = _ : p > S && (p = S);
    }
    if (l) {
      var y, g;
      const w = d === "y" ? "width" : "height", _ = ["top", "left"].includes(at(o)), S = a.reference[f] - a.floating[w] + (_ && ((y = i.offset) == null ? void 0 : y[f]) || 0) + (_ ? 0 : b.crossAxis), N = a.reference[f] + a.reference[w] + (_ ? 0 : ((g = i.offset) == null ? void 0 : g[f]) || 0) - (_ ? b.crossAxis : 0);
      v < S ? v = S : v > N && (v = N);
    }
    return { [d]: p, [f]: v };
  } };
}, _b = function(e) {
  return e === void 0 && (e = {}), { name: "size", options: e, async fn(n) {
    const { placement: t, rects: r, platform: o, elements: a } = n, { apply: i = () => {
    }, ...s } = lt(e, n), c = await mn(n, s), l = at(t), u = en(t), d = It(t) === "x", { width: f, height: p } = r.floating;
    let v, m;
    l === "top" || l === "bottom" ? (v = l, m = u === (await (o.isRTL == null ? void 0 : o.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (m = l, v = u === "end" ? "top" : "bottom");
    const b = p - c[v], y = f - c[m], g = !n.middlewareData.shift;
    let w = b, _ = y;
    if (d) {
      const N = f - c.left - c.right;
      _ = u || g ? bn(y, N) : N;
    } else {
      const N = p - c.top - c.bottom;
      w = u || g ? bn(b, N) : N;
    }
    if (g && !u) {
      const N = Tt(c.left, 0), P = Tt(c.right, 0), F = Tt(c.top, 0), H = Tt(c.bottom, 0);
      d ? _ = f - 2 * (N !== 0 || P !== 0 ? N + P : Tt(c.left, c.right)) : w = p - 2 * (F !== 0 || H !== 0 ? F + H : Tt(c.top, c.bottom));
    }
    await i({ ...n, availableWidth: _, availableHeight: w });
    const S = await o.getDimensions(a.floating);
    return f !== S.width || p !== S.height ? { reset: { rects: !0 } } : {};
  } };
};
function Fe(e) {
  var n;
  return (e == null || (n = e.ownerDocument) == null ? void 0 : n.defaultView) || window;
}
function Je(e) {
  return Fe(e).getComputedStyle(e);
}
function Gs(e) {
  return e instanceof Fe(e).Node;
}
function bt(e) {
  return Gs(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ze(e) {
  return e instanceof HTMLElement || e instanceof Fe(e).HTMLElement;
}
function ni(e) {
  return typeof ShadowRoot < "u" && (e instanceof Fe(e).ShadowRoot || e instanceof ShadowRoot);
}
function hn(e) {
  const { overflow: n, overflowX: t, overflowY: r, display: o } = Je(e);
  return /auto|scroll|overlay|hidden|clip/.test(n + r + t) && !["inline", "contents"].includes(o);
}
function Eb(e) {
  return ["table", "td", "th"].includes(bt(e));
}
function co(e) {
  const n = Xo(), t = Je(e);
  return t.transform !== "none" || t.perspective !== "none" || !!t.containerType && t.containerType !== "normal" || !n && !!t.backdropFilter && t.backdropFilter !== "none" || !n && !!t.filter && t.filter !== "none" || ["transform", "perspective", "filter"].some((r) => (t.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (t.contain || "").includes(r));
}
function Xo() {
  return !(typeof CSS > "u" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
}
function mr(e) {
  return ["html", "body", "#document"].includes(bt(e));
}
const lo = Math.min, Ut = Math.max, tr = Math.round, Wn = Math.floor, ht = (e) => ({ x: e, y: e });
function qs(e) {
  const n = Je(e);
  let t = parseFloat(n.width) || 0, r = parseFloat(n.height) || 0;
  const o = ze(e), a = o ? e.offsetWidth : t, i = o ? e.offsetHeight : r, s = tr(t) !== a || tr(r) !== i;
  return s && (t = a, r = i), { width: t, height: r, $: s };
}
function it(e) {
  return e instanceof Element || e instanceof Fe(e).Element;
}
function Zo(e) {
  return it(e) ? e : e.contextElement;
}
function zt(e) {
  const n = Zo(e);
  if (!ze(n))
    return ht(1);
  const t = n.getBoundingClientRect(), { width: r, height: o, $: a } = qs(n);
  let i = (a ? tr(t.width) : t.width) / r, s = (a ? tr(t.height) : t.height) / o;
  return i && Number.isFinite(i) || (i = 1), s && Number.isFinite(s) || (s = 1), { x: i, y: s };
}
const Tb = ht(0);
function Xs(e) {
  const n = Fe(e);
  return Xo() && n.visualViewport ? { x: n.visualViewport.offsetLeft, y: n.visualViewport.offsetTop } : Tb;
}
function Ot(e, n, t, r) {
  n === void 0 && (n = !1), t === void 0 && (t = !1);
  const o = e.getBoundingClientRect(), a = Zo(e);
  let i = ht(1);
  n && (r ? it(r) && (i = zt(r)) : i = zt(e));
  const s = function(f, p, v) {
    return p === void 0 && (p = !1), !(!v || p && v !== Fe(f)) && p;
  }(a, t, r) ? Xs(a) : ht(0);
  let c = (o.left + s.x) / i.x, l = (o.top + s.y) / i.y, u = o.width / i.x, d = o.height / i.y;
  if (a) {
    const f = Fe(a), p = r && it(r) ? Fe(r) : r;
    let v = f.frameElement;
    for (; v && r && p !== f; ) {
      const m = zt(v), b = v.getBoundingClientRect(), y = getComputedStyle(v), g = b.left + (v.clientLeft + parseFloat(y.paddingLeft)) * m.x, w = b.top + (v.clientTop + parseFloat(y.paddingTop)) * m.y;
      c *= m.x, l *= m.y, u *= m.x, d *= m.y, c += g, l += w, v = Fe(v).frameElement;
    }
  }
  return Jn({ width: u, height: d, x: c, y: l });
}
function br(e) {
  return it(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function st(e) {
  var n;
  return (n = (Gs(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : n.documentElement;
}
function Zs(e) {
  return Ot(st(e)).left + br(e).scrollLeft;
}
function Xt(e) {
  if (bt(e) === "html")
    return e;
  const n = e.assignedSlot || e.parentNode || ni(e) && e.host || st(e);
  return ni(n) ? n.host : n;
}
function Qs(e) {
  const n = Xt(e);
  return mr(n) ? e.ownerDocument ? e.ownerDocument.body : e.body : ze(n) && hn(n) ? n : Qs(n);
}
function nr(e, n) {
  var t;
  n === void 0 && (n = []);
  const r = Qs(e), o = r === ((t = e.ownerDocument) == null ? void 0 : t.body), a = Fe(r);
  return o ? n.concat(a, a.visualViewport || [], hn(r) ? r : []) : n.concat(r, nr(r));
}
function ri(e, n, t) {
  let r;
  if (n === "viewport")
    r = function(o, a) {
      const i = Fe(o), s = st(o), c = i.visualViewport;
      let l = s.clientWidth, u = s.clientHeight, d = 0, f = 0;
      if (c) {
        l = c.width, u = c.height;
        const p = Xo();
        (!p || p && a === "fixed") && (d = c.offsetLeft, f = c.offsetTop);
      }
      return { width: l, height: u, x: d, y: f };
    }(e, t);
  else if (n === "document")
    r = function(o) {
      const a = st(o), i = br(o), s = o.ownerDocument.body, c = Ut(a.scrollWidth, a.clientWidth, s.scrollWidth, s.clientWidth), l = Ut(a.scrollHeight, a.clientHeight, s.scrollHeight, s.clientHeight);
      let u = -i.scrollLeft + Zs(o);
      const d = -i.scrollTop;
      return Je(s).direction === "rtl" && (u += Ut(a.clientWidth, s.clientWidth) - c), { width: c, height: l, x: u, y: d };
    }(st(e));
  else if (it(n))
    r = function(o, a) {
      const i = Ot(o, !0, a === "fixed"), s = i.top + o.clientTop, c = i.left + o.clientLeft, l = ze(o) ? zt(o) : ht(1);
      return { width: o.clientWidth * l.x, height: o.clientHeight * l.y, x: c * l.x, y: s * l.y };
    }(n, t);
  else {
    const o = Xs(e);
    r = { ...n, x: n.x - o.x, y: n.y - o.y };
  }
  return Jn(r);
}
function Js(e, n) {
  const t = Xt(e);
  return !(t === n || !it(t) || mr(t)) && (Je(t).position === "fixed" || Js(t, n));
}
function Pb(e, n, t) {
  const r = ze(n), o = st(n), a = t === "fixed", i = Ot(e, !0, a, n);
  let s = { scrollLeft: 0, scrollTop: 0 };
  const c = ht(0);
  if (r || !r && !a)
    if ((bt(n) !== "body" || hn(o)) && (s = br(n)), ze(n)) {
      const l = Ot(n, !0, a, n);
      c.x = l.x + n.clientLeft, c.y = l.y + n.clientTop;
    } else
      o && (c.x = Zs(o));
  return { x: i.left + s.scrollLeft - c.x, y: i.top + s.scrollTop - c.y, width: i.width, height: i.height };
}
function oi(e, n) {
  return ze(e) && Je(e).position !== "fixed" ? n ? n(e) : e.offsetParent : null;
}
function ai(e, n) {
  const t = Fe(e);
  if (!ze(e))
    return t;
  let r = oi(e, n);
  for (; r && Eb(r) && Je(r).position === "static"; )
    r = oi(r, n);
  return r && (bt(r) === "html" || bt(r) === "body" && Je(r).position === "static" && !co(r)) ? t : r || function(o) {
    let a = Xt(o);
    for (; ze(a) && !mr(a); ) {
      if (co(a))
        return a;
      a = Xt(a);
    }
    return null;
  }(e) || t;
}
const Sb = { convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: n, offsetParent: t, strategy: r } = e;
  const o = ze(t), a = st(t);
  if (t === a)
    return n;
  let i = { scrollLeft: 0, scrollTop: 0 }, s = ht(1);
  const c = ht(0);
  if ((o || !o && r !== "fixed") && ((bt(t) !== "body" || hn(a)) && (i = br(t)), ze(t))) {
    const l = Ot(t);
    s = zt(t), c.x = l.x + t.clientLeft, c.y = l.y + t.clientTop;
  }
  return { width: n.width * s.x, height: n.height * s.y, x: n.x * s.x - i.scrollLeft * s.x + c.x, y: n.y * s.y - i.scrollTop * s.y + c.y };
}, getDocumentElement: st, getClippingRect: function(e) {
  let { element: n, boundary: t, rootBoundary: r, strategy: o } = e;
  const a = [...t === "clippingAncestors" ? function(c, l) {
    const u = l.get(c);
    if (u)
      return u;
    let d = nr(c).filter((m) => it(m) && bt(m) !== "body"), f = null;
    const p = Je(c).position === "fixed";
    let v = p ? Xt(c) : c;
    for (; it(v) && !mr(v); ) {
      const m = Je(v), b = co(v);
      b || m.position !== "fixed" || (f = null), (p ? !b && !f : !b && m.position === "static" && f && ["absolute", "fixed"].includes(f.position) || hn(v) && !b && Js(c, v)) ? d = d.filter((y) => y !== v) : f = m, v = Xt(v);
    }
    return l.set(c, d), d;
  }(n, this._c) : [].concat(t), r], i = a[0], s = a.reduce((c, l) => {
    const u = ri(n, l, o);
    return c.top = Ut(u.top, c.top), c.right = lo(u.right, c.right), c.bottom = lo(u.bottom, c.bottom), c.left = Ut(u.left, c.left), c;
  }, ri(n, i, o));
  return { width: s.right - s.left, height: s.bottom - s.top, x: s.left, y: s.top };
}, getOffsetParent: ai, getElementRects: async function(e) {
  let { reference: n, floating: t, strategy: r } = e;
  const o = this.getOffsetParent || ai, a = this.getDimensions;
  return { reference: Pb(n, await o(t), r), floating: { x: 0, y: 0, ...await a(t) } };
}, getClientRects: function(e) {
  return Array.from(e.getClientRects());
}, getDimensions: function(e) {
  return qs(e);
}, getScale: zt, isElement: it, isRTL: function(e) {
  return getComputedStyle(e).direction === "rtl";
} };
function Db(e, n, t, r) {
  r === void 0 && (r = {});
  const { ancestorScroll: o = !0, ancestorResize: a = !0, elementResize: i = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = Zo(e), u = o || a ? [...l ? nr(l) : [], ...nr(n)] : [];
  u.forEach((b) => {
    o && b.addEventListener("scroll", t, { passive: !0 }), a && b.addEventListener("resize", t);
  });
  const d = l && s ? function(b, y) {
    let g, w = null;
    const _ = st(b);
    function S() {
      clearTimeout(g), w && w.disconnect(), w = null;
    }
    return function N(P, F) {
      P === void 0 && (P = !1), F === void 0 && (F = 1), S();
      const { left: H, top: q, width: B, height: j } = b.getBoundingClientRect();
      if (P || y(), !B || !j)
        return;
      const G = { rootMargin: -Wn(q) + "px " + -Wn(_.clientWidth - (H + B)) + "px " + -Wn(_.clientHeight - (q + j)) + "px " + -Wn(H) + "px", threshold: Ut(0, lo(1, F)) || 1 };
      let D = !0;
      function A(L) {
        const k = L[0].intersectionRatio;
        if (k !== F) {
          if (!D)
            return N();
          k ? N(!1, k) : g = setTimeout(() => {
            N(!1, 1e-7);
          }, 100);
        }
        D = !1;
      }
      try {
        w = new IntersectionObserver(A, { ...G, root: _.ownerDocument });
      } catch {
        w = new IntersectionObserver(A, G);
      }
      w.observe(b);
    }(!0), S;
  }(l, t) : null;
  let f, p = -1, v = null;
  i && (v = new ResizeObserver((b) => {
    let [y] = b;
    y && y.target === l && v && (v.unobserve(n), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      v && v.observe(n);
    })), t();
  }), l && !c && v.observe(l), v.observe(n));
  let m = c ? Ot(e) : null;
  return c && function b() {
    const y = Ot(e);
    !m || y.x === m.x && y.y === m.y && y.width === m.width && y.height === m.height || t(), m = y, f = requestAnimationFrame(b);
  }(), t(), () => {
    u.forEach((b) => {
      o && b.removeEventListener("scroll", t), a && b.removeEventListener("resize", t);
    }), d && d(), v && v.disconnect(), v = null, c && cancelAnimationFrame(f);
  };
}
const Mb = (e, n, t) => {
  const r = /* @__PURE__ */ new Map(), o = { platform: Sb, ...t }, a = { ...o.platform, _c: r };
  return mb(e, n, { ...o, platform: a });
}, Ob = (e) => {
  function n(t) {
    return {}.hasOwnProperty.call(t, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(t) : e;
      return r && n(r) ? r.current != null ? Ja({
        element: r.current,
        padding: o
      }).fn(t) : {} : r ? Ja({
        element: r,
        padding: o
      }).fn(t) : {};
    }
  };
};
var zn = typeof document < "u" ? un : K;
function rr(e, n) {
  if (e === n)
    return !0;
  if (typeof e != typeof n)
    return !1;
  if (typeof e == "function" && e.toString() === n.toString())
    return !0;
  let t, r, o;
  if (e && n && typeof e == "object") {
    if (Array.isArray(e)) {
      if (t = e.length, t != n.length)
        return !1;
      for (r = t; r-- !== 0; )
        if (!rr(e[r], n[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), t = o.length, t !== Object.keys(n).length)
      return !1;
    for (r = t; r-- !== 0; )
      if (!{}.hasOwnProperty.call(n, o[r]))
        return !1;
    for (r = t; r-- !== 0; ) {
      const a = o[r];
      if (!(a === "_owner" && e.$$typeof) && !rr(e[a], n[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && n !== n;
}
function ec(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ii(e, n) {
  const t = ec(e);
  return Math.round(n * t) / t;
}
function si(e) {
  const n = X.useRef(e);
  return zn(() => {
    n.current = e;
  }), n;
}
function Nb(e) {
  e === void 0 && (e = {});
  const {
    placement: n = "bottom",
    strategy: t = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: a,
      floating: i
    } = {},
    transform: s = !0,
    whileElementsMounted: c,
    open: l
  } = e, [u, d] = X.useState({
    x: 0,
    y: 0,
    strategy: t,
    placement: n,
    middlewareData: {},
    isPositioned: !1
  }), [f, p] = X.useState(r);
  rr(f, r) || p(r);
  const [v, m] = X.useState(null), [b, y] = X.useState(null), g = X.useCallback((L) => {
    L != N.current && (N.current = L, m(L));
  }, [m]), w = X.useCallback((L) => {
    L !== P.current && (P.current = L, y(L));
  }, [y]), _ = a || v, S = i || b, N = X.useRef(null), P = X.useRef(null), F = X.useRef(u), H = si(c), q = si(o), B = X.useCallback(() => {
    if (!N.current || !P.current)
      return;
    const L = {
      placement: n,
      strategy: t,
      middleware: f
    };
    q.current && (L.platform = q.current), Mb(N.current, P.current, L).then((k) => {
      const O = {
        ...k,
        isPositioned: !0
      };
      j.current && !rr(F.current, O) && (F.current = O, od.flushSync(() => {
        d(O);
      }));
    });
  }, [f, n, t, q]);
  zn(() => {
    l === !1 && F.current.isPositioned && (F.current.isPositioned = !1, d((L) => ({
      ...L,
      isPositioned: !1
    })));
  }, [l]);
  const j = X.useRef(!1);
  zn(() => (j.current = !0, () => {
    j.current = !1;
  }), []), zn(() => {
    if (_ && (N.current = _), S && (P.current = S), _ && S) {
      if (H.current)
        return H.current(_, S, B);
      B();
    }
  }, [_, S, B, H]);
  const G = X.useMemo(() => ({
    reference: N,
    floating: P,
    setReference: g,
    setFloating: w
  }), [g, w]), D = X.useMemo(() => ({
    reference: _,
    floating: S
  }), [_, S]), A = X.useMemo(() => {
    const L = {
      position: t,
      left: 0,
      top: 0
    };
    if (!D.floating)
      return L;
    const k = ii(D.floating, u.x), O = ii(D.floating, u.y);
    return s ? {
      ...L,
      transform: "translate(" + k + "px, " + O + "px)",
      ...ec(D.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: t,
      left: k,
      top: O
    };
  }, [t, s, D.floating, u.x, u.y]);
  return X.useMemo(() => ({
    ...u,
    update: B,
    refs: G,
    elements: D,
    floatingStyles: A
  }), [u, B, G, D, A]);
}
const tc = "Popper", [nc, xt] = xe(tc), [Rb, rc] = nc(tc), kb = (e) => {
  const { __scopePopper: n, children: t } = e, [r, o] = z(null);
  return /* @__PURE__ */ h(Rb, {
    scope: n,
    anchor: r,
    onAnchorChange: o
  }, t);
}, Ab = "PopperAnchor", Ib = /* @__PURE__ */ T((e, n) => {
  const { __scopePopper: t, virtualRef: r, ...o } = e, a = rc(Ab, t), i = R(null), s = re(n, i);
  return K(() => {
    a.onAnchorChange((r == null ? void 0 : r.current) || i.current);
  }), r ? null : /* @__PURE__ */ h(Y.div, x({}, o, {
    ref: s
  }));
}), oc = "PopperContent", [Lb, Rw] = nc(oc), Fb = /* @__PURE__ */ T((e, n) => {
  var t, r, o, a, i, s, c, l;
  const { __scopePopper: u, side: d = "bottom", sideOffset: f = 0, align: p = "center", alignOffset: v = 0, arrowPadding: m = 0, collisionBoundary: b = [], collisionPadding: y = 0, sticky: g = "partial", hideWhenDetached: w = !1, avoidCollisions: _ = !0, onPlaced: S, ...N } = e, P = rc(oc, u), [F, H] = z(null), q = re(
    n,
    (Ce) => H(Ce)
  ), [B, j] = z(null), G = Pn(B), D = (t = G == null ? void 0 : G.width) !== null && t !== void 0 ? t : 0, A = (r = G == null ? void 0 : G.height) !== null && r !== void 0 ? r : 0, L = d + (p !== "center" ? "-" + p : ""), k = typeof y == "number" ? y : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...y
  }, O = Array.isArray(b) ? b : [
    b
  ], V = O.length > 0, te = {
    padding: k,
    boundary: O.filter(Wb),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: V
  }, { refs: ne, floatingStyles: de, placement: ce, isPositioned: we, middlewareData: Pe } = Nb({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: L,
    whileElementsMounted: Db,
    elements: {
      reference: P.anchor
    },
    middleware: [
      wb({
        mainAxis: f + A,
        alignmentAxis: v
      }),
      _ && xb({
        mainAxis: !0,
        crossAxis: !1,
        limiter: g === "partial" ? Cb() : void 0,
        ...te
      }),
      _ && $b({
        ...te
      }),
      _b({
        ...te,
        apply: ({ elements: Ce, rects: je, availableWidth: et, availableHeight: tt }) => {
          const { width: Nn, height: Mr } = je.reference, _t = Ce.floating.style;
          _t.setProperty("--radix-popper-available-width", `${et}px`), _t.setProperty("--radix-popper-available-height", `${tt}px`), _t.setProperty("--radix-popper-anchor-width", `${Nn}px`), _t.setProperty("--radix-popper-anchor-height", `${Mr}px`);
        }
      }),
      B && Ob({
        element: B,
        padding: m
      }),
      jb({
        arrowWidth: D,
        arrowHeight: A
      }),
      w && yb({
        strategy: "referenceHidden"
      })
    ]
  }), [Se, Z] = ac(ce), le = _e(S);
  Ie(() => {
    we && (le == null || le());
  }, [
    we,
    le
  ]);
  const be = (o = Pe.arrow) === null || o === void 0 ? void 0 : o.x, ue = (a = Pe.arrow) === null || a === void 0 ? void 0 : a.y, fe = ((i = Pe.arrow) === null || i === void 0 ? void 0 : i.centerOffset) !== 0, [pe, Oe] = z();
  return Ie(() => {
    F && Oe(window.getComputedStyle(F).zIndex);
  }, [
    F
  ]), /* @__PURE__ */ h("div", {
    ref: ne.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: {
      ...de,
      transform: we ? de.transform : "translate(0, -200%)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: pe,
      "--radix-popper-transform-origin": [
        (s = Pe.transformOrigin) === null || s === void 0 ? void 0 : s.x,
        (c = Pe.transformOrigin) === null || c === void 0 ? void 0 : c.y
      ].join(" ")
    },
    dir: e.dir
  }, /* @__PURE__ */ h(Lb, {
    scope: u,
    placedSide: Se,
    onArrowChange: j,
    arrowX: be,
    arrowY: ue,
    shouldHideArrow: fe
  }, /* @__PURE__ */ h(Y.div, x({
    "data-side": Se,
    "data-align": Z
  }, N, {
    ref: q,
    style: {
      ...N.style,
      // if the PopperContent hasn't been placed yet (not all measurements done)
      // we prevent animations so that users's animation don't kick in too early referring wrong sides
      animation: we ? void 0 : "none",
      // hide the content if using the hide middleware and should be hidden
      opacity: (l = Pe.hide) !== null && l !== void 0 && l.referenceHidden ? 0 : void 0
    }
  }))));
});
function Wb(e) {
  return e !== null;
}
const jb = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(n) {
    var t, r, o, a, i;
    const { placement: s, rects: c, middlewareData: l } = n, d = ((t = l.arrow) === null || t === void 0 ? void 0 : t.centerOffset) !== 0, f = d ? 0 : e.arrowWidth, p = d ? 0 : e.arrowHeight, [v, m] = ac(s), b = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[m], y = ((r = (o = l.arrow) === null || o === void 0 ? void 0 : o.x) !== null && r !== void 0 ? r : 0) + f / 2, g = ((a = (i = l.arrow) === null || i === void 0 ? void 0 : i.y) !== null && a !== void 0 ? a : 0) + p / 2;
    let w = "", _ = "";
    return v === "bottom" ? (w = d ? b : `${y}px`, _ = `${-p}px`) : v === "top" ? (w = d ? b : `${y}px`, _ = `${c.floating.height + p}px`) : v === "right" ? (w = `${-p}px`, _ = d ? b : `${g}px`) : v === "left" && (w = `${c.floating.width + p}px`, _ = d ? b : `${g}px`), {
      data: {
        x: w,
        y: _
      }
    };
  }
});
function ac(e) {
  const [n, t = "center"] = e.split("-");
  return [
    n,
    t
  ];
}
const Sn = kb, hr = Ib, gr = Fb, zr = "rovingFocusGroup.onEntryFocus", Vb = {
  bubbles: !1,
  cancelable: !0
}, Qo = "RovingFocusGroup", [uo, ic, Hb] = Qt(Qo), [Bb, tn] = xe(Qo, [
  Hb
]), [Yb, Ub] = Bb(Qo), zb = /* @__PURE__ */ T((e, n) => /* @__PURE__ */ h(uo.Provider, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ h(uo.Slot, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ h(Kb, x({}, e, {
  ref: n
}))))), Kb = /* @__PURE__ */ T((e, n) => {
  const { __scopeRovingFocusGroup: t, orientation: r, loop: o = !1, dir: a, currentTabStopId: i, defaultCurrentTabStopId: s, onCurrentTabStopIdChange: c, onEntryFocus: l, ...u } = e, d = R(null), f = re(n, d), p = Rt(a), [v = null, m] = Ee({
    prop: i,
    defaultProp: s,
    onChange: c
  }), [b, y] = z(!1), g = _e(l), w = ic(t), _ = R(!1), [S, N] = z(0);
  return K(() => {
    const P = d.current;
    if (P)
      return P.addEventListener(zr, g), () => P.removeEventListener(zr, g);
  }, [
    g
  ]), /* @__PURE__ */ h(Yb, {
    scope: t,
    orientation: r,
    dir: p,
    loop: o,
    currentTabStopId: v,
    onItemFocus: ee(
      (P) => m(P),
      [
        m
      ]
    ),
    onItemShiftTab: ee(
      () => y(!0),
      []
    ),
    onFocusableItemAdd: ee(
      () => N(
        (P) => P + 1
      ),
      []
    ),
    onFocusableItemRemove: ee(
      () => N(
        (P) => P - 1
      ),
      []
    )
  }, /* @__PURE__ */ h(Y.div, x({
    tabIndex: b || S === 0 ? -1 : 0,
    "data-orientation": r
  }, u, {
    ref: f,
    style: {
      outline: "none",
      ...e.style
    },
    onMouseDown: I(e.onMouseDown, () => {
      _.current = !0;
    }),
    onFocus: I(e.onFocus, (P) => {
      const F = !_.current;
      if (P.target === P.currentTarget && F && !b) {
        const H = new CustomEvent(zr, Vb);
        if (P.currentTarget.dispatchEvent(H), !H.defaultPrevented) {
          const q = w().filter(
            (A) => A.focusable
          ), B = q.find(
            (A) => A.active
          ), j = q.find(
            (A) => A.id === v
          ), D = [
            B,
            j,
            ...q
          ].filter(Boolean).map(
            (A) => A.ref.current
          );
          sc(D);
        }
      }
      _.current = !1;
    }),
    onBlur: I(
      e.onBlur,
      () => y(!1)
    )
  })));
}), Gb = "RovingFocusGroupItem", qb = /* @__PURE__ */ T((e, n) => {
  const { __scopeRovingFocusGroup: t, focusable: r = !0, active: o = !1, tabStopId: a, ...i } = e, s = De(), c = a || s, l = Ub(Gb, t), u = l.currentTabStopId === c, d = ic(t), { onFocusableItemAdd: f, onFocusableItemRemove: p } = l;
  return K(() => {
    if (r)
      return f(), () => p();
  }, [
    r,
    f,
    p
  ]), /* @__PURE__ */ h(uo.ItemSlot, {
    scope: t,
    id: c,
    focusable: r,
    active: o
  }, /* @__PURE__ */ h(Y.span, x({
    tabIndex: u ? 0 : -1,
    "data-orientation": l.orientation
  }, i, {
    ref: n,
    onMouseDown: I(e.onMouseDown, (v) => {
      r ? l.onItemFocus(c) : v.preventDefault();
    }),
    onFocus: I(
      e.onFocus,
      () => l.onItemFocus(c)
    ),
    onKeyDown: I(e.onKeyDown, (v) => {
      if (v.key === "Tab" && v.shiftKey) {
        l.onItemShiftTab();
        return;
      }
      if (v.target !== v.currentTarget)
        return;
      const m = Qb(v, l.orientation, l.dir);
      if (m !== void 0) {
        v.preventDefault();
        let y = d().filter(
          (g) => g.focusable
        ).map(
          (g) => g.ref.current
        );
        if (m === "last")
          y.reverse();
        else if (m === "prev" || m === "next") {
          m === "prev" && y.reverse();
          const g = y.indexOf(v.currentTarget);
          y = l.loop ? Jb(y, g + 1) : y.slice(g + 1);
        }
        setTimeout(
          () => sc(y)
        );
      }
    })
  })));
}), Xb = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Zb(e, n) {
  return n !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Qb(e, n, t) {
  const r = Zb(e.key, t);
  if (!(n === "vertical" && [
    "ArrowLeft",
    "ArrowRight"
  ].includes(r)) && !(n === "horizontal" && [
    "ArrowUp",
    "ArrowDown"
  ].includes(r)))
    return Xb[r];
}
function sc(e) {
  const n = document.activeElement;
  for (const t of e)
    if (t === n || (t.focus(), document.activeElement !== n))
      return;
}
function Jb(e, n) {
  return e.map(
    (t, r) => e[(n + r) % e.length]
  );
}
const Jo = zb, ea = qb, fo = [
  "Enter",
  " "
], eh = [
  "ArrowDown",
  "PageUp",
  "Home"
], cc = [
  "ArrowUp",
  "PageDown",
  "End"
], th = [
  ...eh,
  ...cc
], nh = {
  ltr: [
    ...fo,
    "ArrowRight"
  ],
  rtl: [
    ...fo,
    "ArrowLeft"
  ]
}, rh = {
  ltr: [
    "ArrowLeft"
  ],
  rtl: [
    "ArrowRight"
  ]
}, $r = "Menu", [gn, oh, ah] = Qt($r), [Lt, lc] = xe($r, [
  ah,
  xt,
  tn
]), yr = xt(), dc = tn(), [uc, Ct] = Lt($r), [ih, Dn] = Lt($r), sh = (e) => {
  const { __scopeMenu: n, open: t = !1, children: r, dir: o, onOpenChange: a, modal: i = !0 } = e, s = yr(n), [c, l] = z(null), u = R(!1), d = _e(a), f = Rt(o);
  return K(() => {
    const p = () => {
      u.current = !0, document.addEventListener("pointerdown", v, {
        capture: !0,
        once: !0
      }), document.addEventListener("pointermove", v, {
        capture: !0,
        once: !0
      });
    }, v = () => u.current = !1;
    return document.addEventListener("keydown", p, {
      capture: !0
    }), () => {
      document.removeEventListener("keydown", p, {
        capture: !0
      }), document.removeEventListener("pointerdown", v, {
        capture: !0
      }), document.removeEventListener("pointermove", v, {
        capture: !0
      });
    };
  }, []), /* @__PURE__ */ h(Sn, s, /* @__PURE__ */ h(uc, {
    scope: n,
    open: t,
    onOpenChange: d,
    content: c,
    onContentChange: l
  }, /* @__PURE__ */ h(ih, {
    scope: n,
    onClose: ee(
      () => d(!1),
      [
        d
      ]
    ),
    isUsingKeyboardRef: u,
    dir: f,
    modal: i
  }, r)));
}, fc = /* @__PURE__ */ T((e, n) => {
  const { __scopeMenu: t, ...r } = e, o = yr(t);
  return /* @__PURE__ */ h(hr, x({}, o, r, {
    ref: n
  }));
}), pc = "MenuPortal", [ch, vc] = Lt(pc, {
  forceMount: void 0
}), lh = (e) => {
  const { __scopeMenu: n, forceMount: t, children: r, container: o } = e, a = Ct(pc, n);
  return /* @__PURE__ */ h(ch, {
    scope: n,
    forceMount: t
  }, /* @__PURE__ */ h(Me, {
    present: t || a.open
  }, /* @__PURE__ */ h(xn, {
    asChild: !0,
    container: o
  }, r)));
}, Ye = "MenuContent", [dh, ta] = Lt(Ye), uh = /* @__PURE__ */ T((e, n) => {
  const t = vc(Ye, e.__scopeMenu), { forceMount: r = t.forceMount, ...o } = e, a = Ct(Ye, e.__scopeMenu), i = Dn(Ye, e.__scopeMenu);
  return /* @__PURE__ */ h(gn.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ h(Me, {
    present: r || a.open
  }, /* @__PURE__ */ h(gn.Slot, {
    scope: e.__scopeMenu
  }, i.modal ? /* @__PURE__ */ h(fh, x({}, o, {
    ref: n
  })) : /* @__PURE__ */ h(ph, x({}, o, {
    ref: n
  })))));
}), fh = /* @__PURE__ */ T((e, n) => {
  const t = Ct(Ye, e.__scopeMenu), r = R(null), o = re(n, r);
  return K(() => {
    const a = r.current;
    if (a)
      return pr(a);
  }, []), /* @__PURE__ */ h(na, x({}, e, {
    ref: o,
    trapFocus: t.open,
    disableOutsidePointerEvents: t.open,
    disableOutsideScroll: !0,
    onFocusOutside: I(
      e.onFocusOutside,
      (a) => a.preventDefault(),
      {
        checkForDefaultPrevented: !1
      }
    ),
    onDismiss: () => t.onOpenChange(!1)
  }));
}), ph = /* @__PURE__ */ T((e, n) => {
  const t = Ct(Ye, e.__scopeMenu);
  return /* @__PURE__ */ h(na, x({}, e, {
    ref: n,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    disableOutsideScroll: !1,
    onDismiss: () => t.onOpenChange(!1)
  }));
}), na = /* @__PURE__ */ T((e, n) => {
  const { __scopeMenu: t, loop: r = !1, trapFocus: o, onOpenAutoFocus: a, onCloseAutoFocus: i, disableOutsidePointerEvents: s, onEntryFocus: c, onEscapeKeyDown: l, onPointerDownOutside: u, onFocusOutside: d, onInteractOutside: f, onDismiss: p, disableOutsideScroll: v, ...m } = e, b = Ct(Ye, t), y = Dn(Ye, t), g = yr(t), w = dc(t), _ = oh(t), [S, N] = z(null), P = R(null), F = re(n, P, b.onContentChange), H = R(0), q = R(""), B = R(0), j = R(null), G = R("right"), D = R(0), A = v ? fr : Nt, L = v ? {
    as: ct,
    allowPinchZoom: !0
  } : void 0, k = (V) => {
    var te, ne;
    const de = q.current + V, ce = _().filter(
      (be) => !be.disabled
    ), we = document.activeElement, Pe = (te = ce.find(
      (be) => be.ref.current === we
    )) === null || te === void 0 ? void 0 : te.textValue, Se = ce.map(
      (be) => be.textValue
    ), Z = Nh(Se, de, Pe), le = (ne = ce.find(
      (be) => be.textValue === Z
    )) === null || ne === void 0 ? void 0 : ne.ref.current;
    (function be(ue) {
      q.current = ue, window.clearTimeout(H.current), ue !== "" && (H.current = window.setTimeout(
        () => be(""),
        1e3
      ));
    })(de), le && setTimeout(
      () => le.focus()
    );
  };
  K(() => () => window.clearTimeout(H.current), []), dr();
  const O = ee((V) => {
    var te, ne;
    return G.current === ((te = j.current) === null || te === void 0 ? void 0 : te.side) && kh(V, (ne = j.current) === null || ne === void 0 ? void 0 : ne.area);
  }, []);
  return /* @__PURE__ */ h(dh, {
    scope: t,
    searchRef: q,
    onItemEnter: ee((V) => {
      O(V) && V.preventDefault();
    }, [
      O
    ]),
    onItemLeave: ee((V) => {
      var te;
      O(V) || ((te = P.current) === null || te === void 0 || te.focus(), N(null));
    }, [
      O
    ]),
    onTriggerLeave: ee((V) => {
      O(V) && V.preventDefault();
    }, [
      O
    ]),
    pointerGraceTimerRef: B,
    onPointerGraceIntentChange: ee((V) => {
      j.current = V;
    }, [])
  }, /* @__PURE__ */ h(A, L, /* @__PURE__ */ h(lr, {
    asChild: !0,
    trapped: o,
    onMountAutoFocus: I(a, (V) => {
      var te;
      V.preventDefault(), (te = P.current) === null || te === void 0 || te.focus();
    }),
    onUnmountAutoFocus: i
  }, /* @__PURE__ */ h(Jt, {
    asChild: !0,
    disableOutsidePointerEvents: s,
    onEscapeKeyDown: l,
    onPointerDownOutside: u,
    onFocusOutside: d,
    onInteractOutside: f,
    onDismiss: p
  }, /* @__PURE__ */ h(Jo, x({
    asChild: !0
  }, w, {
    dir: y.dir,
    orientation: "vertical",
    loop: r,
    currentTabStopId: S,
    onCurrentTabStopIdChange: N,
    onEntryFocus: I(c, (V) => {
      y.isUsingKeyboardRef.current || V.preventDefault();
    })
  }), /* @__PURE__ */ h(gr, x({
    role: "menu",
    "aria-orientation": "vertical",
    "data-state": wc(b.open),
    "data-radix-menu-content": "",
    dir: y.dir
  }, g, m, {
    ref: F,
    style: {
      outline: "none",
      ...m.style
    },
    onKeyDown: I(m.onKeyDown, (V) => {
      const ne = V.target.closest("[data-radix-menu-content]") === V.currentTarget, de = V.ctrlKey || V.altKey || V.metaKey, ce = V.key.length === 1;
      ne && (V.key === "Tab" && V.preventDefault(), !de && ce && k(V.key));
      const we = P.current;
      if (V.target !== we || !th.includes(V.key))
        return;
      V.preventDefault();
      const Se = _().filter(
        (Z) => !Z.disabled
      ).map(
        (Z) => Z.ref.current
      );
      cc.includes(V.key) && Se.reverse(), Mh(Se);
    }),
    onBlur: I(e.onBlur, (V) => {
      V.currentTarget.contains(V.target) || (window.clearTimeout(H.current), q.current = "");
    }),
    onPointerMove: I(e.onPointerMove, $n((V) => {
      const te = V.target, ne = D.current !== V.clientX;
      if (V.currentTarget.contains(te) && ne) {
        const de = V.clientX > D.current ? "right" : "left";
        G.current = de, D.current = V.clientX;
      }
    }))
  })))))));
}), mc = /* @__PURE__ */ T((e, n) => {
  const { __scopeMenu: t, ...r } = e;
  return /* @__PURE__ */ h(Y.div, x({
    role: "group"
  }, r, {
    ref: n
  }));
}), vh = /* @__PURE__ */ T((e, n) => {
  const { __scopeMenu: t, ...r } = e;
  return /* @__PURE__ */ h(Y.div, x({}, r, {
    ref: n
  }));
}), po = "MenuItem", ci = "menu.itemSelect", ra = /* @__PURE__ */ T((e, n) => {
  const { disabled: t = !1, onSelect: r, ...o } = e, a = R(null), i = Dn(po, e.__scopeMenu), s = ta(po, e.__scopeMenu), c = re(n, a), l = R(!1), u = () => {
    const d = a.current;
    if (!t && d) {
      const f = new CustomEvent(ci, {
        bubbles: !0,
        cancelable: !0
      });
      d.addEventListener(
        ci,
        (p) => r == null ? void 0 : r(p),
        {
          once: !0
        }
      ), Co(d, f), f.defaultPrevented ? l.current = !1 : i.onClose();
    }
  };
  return /* @__PURE__ */ h(bc, x({}, o, {
    ref: c,
    disabled: t,
    onClick: I(e.onClick, u),
    onPointerDown: (d) => {
      var f;
      (f = e.onPointerDown) === null || f === void 0 || f.call(e, d), l.current = !0;
    },
    onPointerUp: I(e.onPointerUp, (d) => {
      var f;
      l.current || (f = d.currentTarget) === null || f === void 0 || f.click();
    }),
    onKeyDown: I(e.onKeyDown, (d) => {
      const f = s.searchRef.current !== "";
      t || f && d.key === " " || fo.includes(d.key) && (d.currentTarget.click(), d.preventDefault());
    })
  }));
}), bc = /* @__PURE__ */ T((e, n) => {
  const { __scopeMenu: t, disabled: r = !1, textValue: o, ...a } = e, i = ta(po, t), s = dc(t), c = R(null), l = re(n, c), [u, d] = z(!1), [f, p] = z("");
  return K(() => {
    const v = c.current;
    if (v) {
      var m;
      p(((m = v.textContent) !== null && m !== void 0 ? m : "").trim());
    }
  }, [
    a.children
  ]), /* @__PURE__ */ h(gn.ItemSlot, {
    scope: t,
    disabled: r,
    textValue: o ?? f
  }, /* @__PURE__ */ h(ea, x({
    asChild: !0
  }, s, {
    focusable: !r
  }), /* @__PURE__ */ h(Y.div, x({
    role: "menuitem",
    "data-highlighted": u ? "" : void 0,
    "aria-disabled": r || void 0,
    "data-disabled": r ? "" : void 0
  }, a, {
    ref: l,
    onPointerMove: I(e.onPointerMove, $n((v) => {
      r ? i.onItemLeave(v) : (i.onItemEnter(v), v.defaultPrevented || v.currentTarget.focus());
    })),
    onPointerLeave: I(e.onPointerLeave, $n(
      (v) => i.onItemLeave(v)
    )),
    onFocus: I(
      e.onFocus,
      () => d(!0)
    ),
    onBlur: I(
      e.onBlur,
      () => d(!1)
    )
  }))));
}), mh = /* @__PURE__ */ T((e, n) => {
  const { checked: t = !1, onCheckedChange: r, ...o } = e;
  return /* @__PURE__ */ h(gc, {
    scope: e.__scopeMenu,
    checked: t
  }, /* @__PURE__ */ h(ra, x({
    role: "menuitemcheckbox",
    "aria-checked": or(t) ? "mixed" : t
  }, o, {
    ref: n,
    "data-state": oa(t),
    onSelect: I(
      o.onSelect,
      () => r == null ? void 0 : r(or(t) ? !0 : !t),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), bh = "MenuRadioGroup", [hh, gh] = Lt(bh, {
  value: void 0,
  onValueChange: () => {
  }
}), $h = /* @__PURE__ */ T((e, n) => {
  const { value: t, onValueChange: r, ...o } = e, a = _e(r);
  return /* @__PURE__ */ h(hh, {
    scope: e.__scopeMenu,
    value: t,
    onValueChange: a
  }, /* @__PURE__ */ h(mc, x({}, o, {
    ref: n
  })));
}), yh = "MenuRadioItem", wh = /* @__PURE__ */ T((e, n) => {
  const { value: t, ...r } = e, o = gh(yh, e.__scopeMenu), a = t === o.value;
  return /* @__PURE__ */ h(gc, {
    scope: e.__scopeMenu,
    checked: a
  }, /* @__PURE__ */ h(ra, x({
    role: "menuitemradio",
    "aria-checked": a
  }, r, {
    ref: n,
    "data-state": oa(a),
    onSelect: I(r.onSelect, () => {
      var i;
      return (i = o.onValueChange) === null || i === void 0 ? void 0 : i.call(o, t);
    }, {
      checkForDefaultPrevented: !1
    })
  })));
}), hc = "MenuItemIndicator", [gc, xh] = Lt(hc, {
  checked: !1
}), Ch = /* @__PURE__ */ T((e, n) => {
  const { __scopeMenu: t, forceMount: r, ...o } = e, a = xh(hc, t);
  return /* @__PURE__ */ h(Me, {
    present: r || or(a.checked) || a.checked === !0
  }, /* @__PURE__ */ h(Y.span, x({}, o, {
    ref: n,
    "data-state": oa(a.checked)
  })));
}), _h = /* @__PURE__ */ T((e, n) => {
  const { __scopeMenu: t, ...r } = e;
  return /* @__PURE__ */ h(Y.div, x({
    role: "separator",
    "aria-orientation": "horizontal"
  }, r, {
    ref: n
  }));
}), $c = "MenuSub", [Eh, yc] = Lt($c), Th = (e) => {
  const { __scopeMenu: n, children: t, open: r = !1, onOpenChange: o } = e, a = Ct($c, n), i = yr(n), [s, c] = z(null), [l, u] = z(null), d = _e(o);
  return K(() => (a.open === !1 && d(!1), () => d(!1)), [
    a.open,
    d
  ]), /* @__PURE__ */ h(Sn, i, /* @__PURE__ */ h(uc, {
    scope: n,
    open: r,
    onOpenChange: d,
    content: l,
    onContentChange: u
  }, /* @__PURE__ */ h(Eh, {
    scope: n,
    contentId: De(),
    triggerId: De(),
    trigger: s,
    onTriggerChange: c
  }, t)));
}, jn = "MenuSubTrigger", Ph = /* @__PURE__ */ T((e, n) => {
  const t = Ct(jn, e.__scopeMenu), r = Dn(jn, e.__scopeMenu), o = yc(jn, e.__scopeMenu), a = ta(jn, e.__scopeMenu), i = R(null), { pointerGraceTimerRef: s, onPointerGraceIntentChange: c } = a, l = {
    __scopeMenu: e.__scopeMenu
  }, u = ee(() => {
    i.current && window.clearTimeout(i.current), i.current = null;
  }, []);
  return K(
    () => u,
    [
      u
    ]
  ), K(() => {
    const d = s.current;
    return () => {
      window.clearTimeout(d), c(null);
    };
  }, [
    s,
    c
  ]), /* @__PURE__ */ h(fc, x({
    asChild: !0
  }, l), /* @__PURE__ */ h(bc, x({
    id: o.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": t.open,
    "aria-controls": o.contentId,
    "data-state": wc(t.open)
  }, e, {
    ref: ir(n, o.onTriggerChange),
    onClick: (d) => {
      var f;
      (f = e.onClick) === null || f === void 0 || f.call(e, d), !(e.disabled || d.defaultPrevented) && (d.currentTarget.focus(), t.open || t.onOpenChange(!0));
    },
    onPointerMove: I(e.onPointerMove, $n((d) => {
      a.onItemEnter(d), !d.defaultPrevented && !e.disabled && !t.open && !i.current && (a.onPointerGraceIntentChange(null), i.current = window.setTimeout(() => {
        t.onOpenChange(!0), u();
      }, 100));
    })),
    onPointerLeave: I(e.onPointerLeave, $n((d) => {
      var f;
      u();
      const p = (f = t.content) === null || f === void 0 ? void 0 : f.getBoundingClientRect();
      if (p) {
        var v;
        const m = (v = t.content) === null || v === void 0 ? void 0 : v.dataset.side, b = m === "right", y = b ? -5 : 5, g = p[b ? "left" : "right"], w = p[b ? "right" : "left"];
        a.onPointerGraceIntentChange({
          area: [
            // consistently within polygon bounds
            {
              x: d.clientX + y,
              y: d.clientY
            },
            {
              x: g,
              y: p.top
            },
            {
              x: w,
              y: p.top
            },
            {
              x: w,
              y: p.bottom
            },
            {
              x: g,
              y: p.bottom
            }
          ],
          side: m
        }), window.clearTimeout(s.current), s.current = window.setTimeout(
          () => a.onPointerGraceIntentChange(null),
          300
        );
      } else {
        if (a.onTriggerLeave(d), d.defaultPrevented)
          return;
        a.onPointerGraceIntentChange(null);
      }
    })),
    onKeyDown: I(e.onKeyDown, (d) => {
      const f = a.searchRef.current !== "";
      if (!(e.disabled || f && d.key === " ") && nh[r.dir].includes(d.key)) {
        var p;
        t.onOpenChange(!0), (p = t.content) === null || p === void 0 || p.focus(), d.preventDefault();
      }
    })
  })));
}), Sh = "MenuSubContent", Dh = /* @__PURE__ */ T((e, n) => {
  const t = vc(Ye, e.__scopeMenu), { forceMount: r = t.forceMount, ...o } = e, a = Ct(Ye, e.__scopeMenu), i = Dn(Ye, e.__scopeMenu), s = yc(Sh, e.__scopeMenu), c = R(null), l = re(n, c);
  return /* @__PURE__ */ h(gn.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ h(Me, {
    present: r || a.open
  }, /* @__PURE__ */ h(gn.Slot, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ h(na, x({
    id: s.contentId,
    "aria-labelledby": s.triggerId
  }, o, {
    ref: l,
    align: "start",
    side: i.dir === "rtl" ? "left" : "right",
    disableOutsidePointerEvents: !1,
    disableOutsideScroll: !1,
    trapFocus: !1,
    onOpenAutoFocus: (u) => {
      var d;
      i.isUsingKeyboardRef.current && ((d = c.current) === null || d === void 0 || d.focus()), u.preventDefault();
    },
    onCloseAutoFocus: (u) => u.preventDefault(),
    onFocusOutside: I(e.onFocusOutside, (u) => {
      u.target !== s.trigger && a.onOpenChange(!1);
    }),
    onEscapeKeyDown: I(e.onEscapeKeyDown, (u) => {
      i.onClose(), u.preventDefault();
    }),
    onKeyDown: I(e.onKeyDown, (u) => {
      const d = u.currentTarget.contains(u.target), f = rh[i.dir].includes(u.key);
      if (d && f) {
        var p;
        a.onOpenChange(!1), (p = s.trigger) === null || p === void 0 || p.focus(), u.preventDefault();
      }
    })
  })))));
});
function wc(e) {
  return e ? "open" : "closed";
}
function or(e) {
  return e === "indeterminate";
}
function oa(e) {
  return or(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Mh(e) {
  const n = document.activeElement;
  for (const t of e)
    if (t === n || (t.focus(), document.activeElement !== n))
      return;
}
function Oh(e, n) {
  return e.map(
    (t, r) => e[(n + r) % e.length]
  );
}
function Nh(e, n, t) {
  const o = n.length > 1 && Array.from(n).every(
    (l) => l === n[0]
  ) ? n[0] : n, a = t ? e.indexOf(t) : -1;
  let i = Oh(e, Math.max(a, 0));
  o.length === 1 && (i = i.filter(
    (l) => l !== t
  ));
  const c = i.find(
    (l) => l.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== t ? c : void 0;
}
function Rh(e, n) {
  const { x: t, y: r } = e;
  let o = !1;
  for (let a = 0, i = n.length - 1; a < n.length; i = a++) {
    const s = n[a].x, c = n[a].y, l = n[i].x, u = n[i].y;
    c > r != u > r && t < (l - s) * (r - c) / (u - c) + s && (o = !o);
  }
  return o;
}
function kh(e, n) {
  if (!n)
    return !1;
  const t = {
    x: e.clientX,
    y: e.clientY
  };
  return Rh(t, n);
}
function $n(e) {
  return (n) => n.pointerType === "mouse" ? e(n) : void 0;
}
const Ah = sh, Ih = fc, Lh = lh, Fh = uh, Wh = mc, jh = vh, Vh = ra, Hh = mh, Bh = $h, Yh = wh, Uh = Ch, zh = _h, Kh = Th, Gh = Ph, qh = Dh, xc = "DropdownMenu", [Xh, kw] = xe(xc, [
  lc
]), Ne = lc(), [Zh, Cc] = Xh(xc), Qh = (e) => {
  const { __scopeDropdownMenu: n, children: t, dir: r, open: o, defaultOpen: a, onOpenChange: i, modal: s = !0 } = e, c = Ne(n), l = R(null), [u = !1, d] = Ee({
    prop: o,
    defaultProp: a,
    onChange: i
  });
  return /* @__PURE__ */ h(Zh, {
    scope: n,
    triggerId: De(),
    triggerRef: l,
    contentId: De(),
    open: u,
    onOpenChange: d,
    onOpenToggle: ee(
      () => d(
        (f) => !f
      ),
      [
        d
      ]
    ),
    modal: s
  }, /* @__PURE__ */ h(Ah, x({}, c, {
    open: u,
    onOpenChange: d,
    dir: r,
    modal: s
  }), t));
}, Jh = "DropdownMenuTrigger", eg = /* @__PURE__ */ T((e, n) => {
  const { __scopeDropdownMenu: t, disabled: r = !1, ...o } = e, a = Cc(Jh, t), i = Ne(t);
  return /* @__PURE__ */ h(Ih, x({
    asChild: !0
  }, i), /* @__PURE__ */ h(Y.button, x({
    type: "button",
    id: a.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": a.open,
    "aria-controls": a.open ? a.contentId : void 0,
    "data-state": a.open ? "open" : "closed",
    "data-disabled": r ? "" : void 0,
    disabled: r
  }, o, {
    ref: ir(n, a.triggerRef),
    onPointerDown: I(e.onPointerDown, (s) => {
      !r && s.button === 0 && s.ctrlKey === !1 && (a.onOpenToggle(), a.open || s.preventDefault());
    }),
    onKeyDown: I(e.onKeyDown, (s) => {
      r || ([
        "Enter",
        " "
      ].includes(s.key) && a.onOpenToggle(), s.key === "ArrowDown" && a.onOpenChange(!0), [
        "Enter",
        " ",
        "ArrowDown"
      ].includes(s.key) && s.preventDefault());
    })
  })));
}), tg = (e) => {
  const { __scopeDropdownMenu: n, ...t } = e, r = Ne(n);
  return /* @__PURE__ */ h(Lh, x({}, r, t));
}, ng = "DropdownMenuContent", rg = /* @__PURE__ */ T((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = Cc(ng, t), a = Ne(t), i = R(!1);
  return /* @__PURE__ */ h(Fh, x({
    id: o.contentId,
    "aria-labelledby": o.triggerId
  }, a, r, {
    ref: n,
    onCloseAutoFocus: I(e.onCloseAutoFocus, (s) => {
      var c;
      i.current || (c = o.triggerRef.current) === null || c === void 0 || c.focus(), i.current = !1, s.preventDefault();
    }),
    onInteractOutside: I(e.onInteractOutside, (s) => {
      const c = s.detail.originalEvent, l = c.button === 0 && c.ctrlKey === !0, u = c.button === 2 || l;
      (!o.modal || u) && (i.current = !0);
    }),
    style: {
      ...e.style,
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
}), og = /* @__PURE__ */ T((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = Ne(t);
  return /* @__PURE__ */ h(Wh, x({}, o, r, {
    ref: n
  }));
}), ag = /* @__PURE__ */ T((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = Ne(t);
  return /* @__PURE__ */ h(jh, x({}, o, r, {
    ref: n
  }));
}), ig = /* @__PURE__ */ T((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = Ne(t);
  return /* @__PURE__ */ h(Vh, x({}, o, r, {
    ref: n
  }));
}), sg = /* @__PURE__ */ T((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = Ne(t);
  return /* @__PURE__ */ h(Hh, x({}, o, r, {
    ref: n
  }));
}), cg = /* @__PURE__ */ T((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = Ne(t);
  return /* @__PURE__ */ h(Bh, x({}, o, r, {
    ref: n
  }));
}), lg = /* @__PURE__ */ T((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = Ne(t);
  return /* @__PURE__ */ h(Yh, x({}, o, r, {
    ref: n
  }));
}), dg = /* @__PURE__ */ T((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = Ne(t);
  return /* @__PURE__ */ h(Uh, x({}, o, r, {
    ref: n
  }));
}), ug = /* @__PURE__ */ T((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = Ne(t);
  return /* @__PURE__ */ h(zh, x({}, o, r, {
    ref: n
  }));
}), fg = (e) => {
  const { __scopeDropdownMenu: n, children: t, open: r, onOpenChange: o, defaultOpen: a } = e, i = Ne(n), [s = !1, c] = Ee({
    prop: r,
    defaultProp: a,
    onChange: o
  });
  return /* @__PURE__ */ h(Kh, x({}, i, {
    open: s,
    onOpenChange: c
  }), t);
}, pg = /* @__PURE__ */ T((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = Ne(t);
  return /* @__PURE__ */ h(Gh, x({}, o, r, {
    ref: n
  }));
}), vg = /* @__PURE__ */ T((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = Ne(t);
  return /* @__PURE__ */ h(qh, x({}, o, r, {
    ref: n,
    style: {
      ...e.style,
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
}), mg = Qh, bg = eg, _c = tg, Ec = rg, hg = og, Tc = ag, Pc = ig, Sc = sg, gg = cg, Dc = lg, Mc = dg, Oc = ug, $g = fg, Nc = pg, Rc = vg, Aw = mg, Iw = hg, Lw = _c, Fw = $g, Ww = gg, Mn = "~pl-6", nn = "~leading-6", jw = $.forwardRef(({ className: e, asChild: n, caret: t, children: r, ...o }, a) => /* @__PURE__ */ E.jsx(
  bg,
  {
    ref: a,
    className: M(
      "tw-reset ~cursor-pointer ~select-none data-[disabled]:~cursor-not-allowed data-[disabled]:~opacity-50",
      nn,
      e
    ),
    ...o,
    asChild: t || n,
    children: t ? /* @__PURE__ */ E.jsxs("button", { className: "~group ~flex ~items-center ~gap-1", children: [
      r,
      /* @__PURE__ */ E.jsx(cd, { className: "~text-base ~text-primary ~transition-transform group-data-[state=open]:~rotate-90" })
    ] }) : r
  }
)), yg = $.forwardRef(({ className: e, inset: n, children: t, ...r }, o) => /* @__PURE__ */ E.jsxs(
  Nc,
  {
    ref: o,
    className: M(
      "~flex ~cursor-default ~select-none ~items-center ~rounded-sm ~px-2 ~py-1.5 ~outline-none focus:~bg-accent data-[state=open]:~bg-accent",
      nn,
      n && Mn,
      e
    ),
    ...r,
    children: [
      t,
      /* @__PURE__ */ E.jsx(ws, { className: "~ml-auto ~h-4 ~w-4" })
    ]
  }
));
yg.displayName = Nc.displayName;
const wg = $.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ E.jsx(
  Rc,
  {
    ref: t,
    className: M(
      "~z-50 ~min-w-[8em] ~overflow-hidden ~rounded-md ~border ~bg-popover ~p-1 ~text-popover-foreground ~shadow-lg",
      "data-[state=open]:~animate-in data-[state=open]:~fade-in-0 data-[state=open]:~zoom-in-95",
      "data-[state=closed]:~animate-out data-[state=closed]:~fade-out-0 data-[state=closed]:~zoom-out-95",
      "data-[side=bottom]:~slide-in-from-top-2 data-[side=left]:~slide-in-from-right-2 data-[side=right]:~slide-in-from-left-2 data-[side=top]:~slide-in-from-bottom-2",
      e
    ),
    ...n
  }
));
wg.displayName = Rc.displayName;
const xg = $.forwardRef(
  ({
    className: e,
    sideOffset: n = 4,
    align: t = "start",
    collisionPadding: r = 10,
    ...o
  }, a) => /* @__PURE__ */ E.jsx(_c, { children: /* @__PURE__ */ E.jsx(
    Ec,
    {
      ref: a,
      sideOffset: n,
      collisionPadding: r,
      align: t,
      className: M(
        "tw-reset ~z-50 ~min-w-[8em] ~overflow-hidden ~rounded-md ~border ~bg-popover ~p-1 ~text-popover-foreground ~shadow-md",
        "data-[state=open]:~animate-in data-[state=open]:~fade-in-0 data-[state=open]:~zoom-in-95",
        "data-[state=closed]:~animate-out data-[state=closed]:~fade-out-0 data-[state=closed]:~zoom-out-95",
        "data-[side=bottom]:~slide-in-from-top-2 data-[side=left]:~slide-in-from-right-2 data-[side=right]:~slide-in-from-left-2 data-[side=top]:~slide-in-from-bottom-2",
        e
      ),
      ...o
    }
  ) })
);
xg.displayName = Ec.displayName;
const Cg = $.forwardRef(({ className: e, inset: n, ...t }, r) => /* @__PURE__ */ E.jsx(
  Pc,
  {
    ref: r,
    className: M(
      "~relative ~flex ~cursor-pointer ~select-none ~items-center ~rounded-sm ~px-2 ~py-1.5 ~outline-none ~transition-colors",
      "focus:~bg-accent focus:~text-accent-foreground",
      "data-[disabled]:~pointer-events-none data-[disabled]:~opacity-50",
      nn,
      n && Mn,
      e
    ),
    ...t
  }
));
Cg.displayName = Pc.displayName;
const _g = $.forwardRef(({ className: e, children: n, checked: t, ...r }, o) => /* @__PURE__ */ E.jsxs(
  Sc,
  {
    ref: o,
    className: M(
      "~relative ~flex ~cursor-pointer ~select-none ~items-center ~rounded-sm ~py-1.5 ~pr-2 ~outline-none ~transition-colors",
      "focus:~bg-accent focus:~text-accent-foreground",
      "data-[disabled]:~pointer-events-none data-[disabled]:~opacity-50",
      nn,
      Mn,
      e
    ),
    checked: t,
    ...r,
    children: [
      /* @__PURE__ */ E.jsx("span", { className: "~absolute ~left-1 ~flex ~h-3.5 ~w-3.5 ~items-center ~justify-center", children: /* @__PURE__ */ E.jsx(Mc, { children: /* @__PURE__ */ E.jsx(Lo, { className: "~h-4 ~w-4" }) }) }),
      n
    ]
  }
));
_g.displayName = Sc.displayName;
const Eg = $.forwardRef(({ className: e, children: n, ...t }, r) => /* @__PURE__ */ E.jsxs(
  Dc,
  {
    ref: r,
    className: M(
      "~relative ~flex ~cursor-pointer ~select-none ~items-center ~rounded-sm ~py-1.5 ~pr-2 ~outline-none ~transition-colors",
      "focus:~bg-accent focus:~text-accent-foreground",
      "data-[disabled]:~pointer-events-none data-[disabled]:~opacity-50",
      nn,
      Mn,
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ E.jsx("span", { className: "~absolute ~left-1 ~flex ~h-3.5 ~w-3.5 ~items-center ~justify-center", children: /* @__PURE__ */ E.jsx(Mc, { children: /* @__PURE__ */ E.jsx(Fp, { className: "~h-4 ~w-4 ~fill-current" }) }) }),
      n
    ]
  }
));
Eg.displayName = Dc.displayName;
const Tg = $.forwardRef(({ className: e, inset: n, ...t }, r) => /* @__PURE__ */ E.jsx(
  Tc,
  {
    ref: r,
    className: M(
      "~px-2 ~py-1.5 ~font-medium",
      nn,
      n && Mn,
      e
    ),
    ...t
  }
));
Tg.displayName = Tc.displayName;
const Pg = $.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ E.jsx(
  Oc,
  {
    ref: t,
    className: M("~-mx-1 ~my-1 ~h-px ~bg-border", e),
    ...n
  }
));
Pg.displayName = Oc.displayName;
const Sg = ({
  className: e,
  ...n
}) => /* @__PURE__ */ E.jsx(
  "span",
  {
    className: M(
      "~ml-auto ~text-xs ~tracking-widest ~opacity-60",
      e
    ),
    ...n
  }
);
Sg.displayName = "DropdownMenuShortcut";
const Dg = $.forwardRef(
  ({ className: e, type: n, ...t }, r) => /* @__PURE__ */ E.jsx(
    "input",
    {
      type: n,
      className: M(
        "tw-reset ~flex ~h-9 ~w-full ~rounded-md ~border ~border-border ~bg-background ~px-3 ~py-1 ~shadow-sm ~transition-colors",
        "placeholder:~text-input",
        "focus-visible:~outline-none focus-visible:~ring-1 focus-visible:~ring-ring",
        "disabled:~cursor-not-allowed disabled:~bg-muted",
        e
      ),
      ref: r,
      ...t
    }
  )
);
Dg.displayName = "Input";
const Mg = /* @__PURE__ */ T((e, n) => /* @__PURE__ */ h(Y.label, x({}, e, {
  ref: n,
  onMouseDown: (t) => {
    var r;
    (r = e.onMouseDown) === null || r === void 0 || r.call(e, t), !t.defaultPrevented && t.detail > 1 && t.preventDefault();
  }
}))), kc = Mg, Og = yt(
  "tw-reset ~leading-none peer-disabled:~cursor-not-allowed peer-disabled:~opacity-50"
), Ng = $.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ E.jsx(
  kc,
  {
    ref: t,
    className: M(Og(), e),
    ...n
  }
));
Ng.displayName = kc.displayName;
const Ac = "Popover", [Ic, Vw] = xe(Ac, [
  xt
]), aa = xt(), [Rg, rn] = Ic(Ac), kg = (e) => {
  const { __scopePopover: n, children: t, open: r, defaultOpen: o, onOpenChange: a, modal: i = !1 } = e, s = aa(n), c = R(null), [l, u] = z(!1), [d = !1, f] = Ee({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ h(Sn, s, /* @__PURE__ */ h(Rg, {
    scope: n,
    contentId: De(),
    triggerRef: c,
    open: d,
    onOpenChange: f,
    onOpenToggle: ee(
      () => f(
        (p) => !p
      ),
      [
        f
      ]
    ),
    hasCustomAnchor: l,
    onCustomAnchorAdd: ee(
      () => u(!0),
      []
    ),
    onCustomAnchorRemove: ee(
      () => u(!1),
      []
    ),
    modal: i
  }, t));
}, Ag = "PopoverTrigger", Ig = /* @__PURE__ */ T((e, n) => {
  const { __scopePopover: t, ...r } = e, o = rn(Ag, t), a = aa(t), i = re(n, o.triggerRef), s = /* @__PURE__ */ h(Y.button, x({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": Wc(o.open)
  }, r, {
    ref: i,
    onClick: I(e.onClick, o.onOpenToggle)
  }));
  return o.hasCustomAnchor ? s : /* @__PURE__ */ h(hr, x({
    asChild: !0
  }, a), s);
}), Lc = "PopoverPortal", [Lg, Fg] = Ic(Lc, {
  forceMount: void 0
}), Wg = (e) => {
  const { __scopePopover: n, forceMount: t, children: r, container: o } = e, a = rn(Lc, n);
  return /* @__PURE__ */ h(Lg, {
    scope: n,
    forceMount: t
  }, /* @__PURE__ */ h(Me, {
    present: t || a.open
  }, /* @__PURE__ */ h(xn, {
    asChild: !0,
    container: o
  }, r)));
}, yn = "PopoverContent", jg = /* @__PURE__ */ T((e, n) => {
  const t = Fg(yn, e.__scopePopover), { forceMount: r = t.forceMount, ...o } = e, a = rn(yn, e.__scopePopover);
  return /* @__PURE__ */ h(Me, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ h(Vg, x({}, o, {
    ref: n
  })) : /* @__PURE__ */ h(Hg, x({}, o, {
    ref: n
  })));
}), Vg = /* @__PURE__ */ T((e, n) => {
  const t = rn(yn, e.__scopePopover), r = R(null), o = re(n, r), a = R(!1);
  return K(() => {
    const i = r.current;
    if (i)
      return pr(i);
  }, []), /* @__PURE__ */ h(fr, {
    as: ct,
    allowPinchZoom: !0
  }, /* @__PURE__ */ h(Fc, x({}, e, {
    ref: o,
    trapFocus: t.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: I(e.onCloseAutoFocus, (i) => {
      var s;
      i.preventDefault(), a.current || (s = t.triggerRef.current) === null || s === void 0 || s.focus();
    }),
    onPointerDownOutside: I(e.onPointerDownOutside, (i) => {
      const s = i.detail.originalEvent, c = s.button === 0 && s.ctrlKey === !0, l = s.button === 2 || c;
      a.current = l;
    }, {
      checkForDefaultPrevented: !1
    }),
    onFocusOutside: I(
      e.onFocusOutside,
      (i) => i.preventDefault(),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), Hg = /* @__PURE__ */ T((e, n) => {
  const t = rn(yn, e.__scopePopover), r = R(!1), o = R(!1);
  return /* @__PURE__ */ h(Fc, x({}, e, {
    ref: n,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: (a) => {
      var i;
      if ((i = e.onCloseAutoFocus) === null || i === void 0 || i.call(e, a), !a.defaultPrevented) {
        var s;
        r.current || (s = t.triggerRef.current) === null || s === void 0 || s.focus(), a.preventDefault();
      }
      r.current = !1, o.current = !1;
    },
    onInteractOutside: (a) => {
      var i, s;
      (i = e.onInteractOutside) === null || i === void 0 || i.call(e, a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
      const c = a.target;
      ((s = t.triggerRef.current) === null || s === void 0 ? void 0 : s.contains(c)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
    }
  }));
}), Fc = /* @__PURE__ */ T((e, n) => {
  const { __scopePopover: t, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, disableOutsidePointerEvents: i, onEscapeKeyDown: s, onPointerDownOutside: c, onFocusOutside: l, onInteractOutside: u, ...d } = e, f = rn(yn, t), p = aa(t);
  return dr(), /* @__PURE__ */ h(lr, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ h(Jt, {
    asChild: !0,
    disableOutsidePointerEvents: i,
    onInteractOutside: u,
    onEscapeKeyDown: s,
    onPointerDownOutside: c,
    onFocusOutside: l,
    onDismiss: () => f.onOpenChange(!1)
  }, /* @__PURE__ */ h(gr, x({
    "data-state": Wc(f.open),
    role: "dialog",
    id: f.contentId
  }, p, d, {
    ref: n,
    style: {
      ...d.style,
      "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
      "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
      "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }))));
});
function Wc(e) {
  return e ? "open" : "closed";
}
const Bg = kg, Yg = Ig, Ug = Wg, jc = jg, zg = Bg, Kg = $.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ E.jsx(
  Yg,
  {
    ref: t,
    className: M("tw-reset", e),
    ...n
  }
)), Vc = $.forwardRef(
  ({
    className: e,
    align: n = "start",
    sideOffset: t = 4,
    collisionPadding: r = 10,
    ...o
  }, a) => /* @__PURE__ */ E.jsx(Ug, { children: /* @__PURE__ */ E.jsx(
    jc,
    {
      ref: a,
      align: n,
      sideOffset: t,
      collisionPadding: r,
      className: M(
        "tw-reset ~z-50 ~w-72 ~rounded-md ~border ~bg-popover ~p-4 ~text-popover-foreground ~shadow-md ~outline-none",
        "data-[side=bottom]:~slide-in-from-top-2 data-[side=left]:~slide-in-from-right-2 data-[side=right]:~slide-in-from-left-2 data-[side=top]:~slide-in-from-bottom-2",
        "data-[state=open]:~animate-in data-[state=open]:~fade-in-0 data-[state=open]:~zoom-in-95",
        "data-[state=closed]:~animate-out data-[state=closed]:~fade-out-0 data-[state=closed]:~zoom-out-95",
        e
      ),
      ...o
    }
  ) })
);
Vc.displayName = jc.displayName;
const Hc = "Radio", [Gg, Bc] = xe(Hc), [qg, Xg] = Gg(Hc), Zg = /* @__PURE__ */ T((e, n) => {
  const { __scopeRadio: t, name: r, checked: o = !1, required: a, disabled: i, value: s = "on", onCheck: c, ...l } = e, [u, d] = z(null), f = re(
    n,
    (m) => d(m)
  ), p = R(!1), v = u ? !!u.closest("form") : !0;
  return /* @__PURE__ */ h(qg, {
    scope: t,
    checked: o,
    disabled: i
  }, /* @__PURE__ */ h(Y.button, x({
    type: "button",
    role: "radio",
    "aria-checked": o,
    "data-state": Yc(o),
    "data-disabled": i ? "" : void 0,
    disabled: i,
    value: s
  }, l, {
    ref: f,
    onClick: I(e.onClick, (m) => {
      o || c == null || c(), v && (p.current = m.isPropagationStopped(), p.current || m.stopPropagation());
    })
  })), v && /* @__PURE__ */ h(e1, {
    control: u,
    bubbles: !p.current,
    name: r,
    value: s,
    checked: o,
    required: a,
    disabled: i,
    style: {
      transform: "translateX(-100%)"
    }
  }));
}), Qg = "RadioIndicator", Jg = /* @__PURE__ */ T((e, n) => {
  const { __scopeRadio: t, forceMount: r, ...o } = e, a = Xg(Qg, t);
  return /* @__PURE__ */ h(Me, {
    present: r || a.checked
  }, /* @__PURE__ */ h(Y.span, x({
    "data-state": Yc(a.checked),
    "data-disabled": a.disabled ? "" : void 0
  }, o, {
    ref: n
  })));
}), e1 = (e) => {
  const { control: n, checked: t, bubbles: r = !0, ...o } = e, a = R(null), i = Tn(t), s = Pn(n);
  return K(() => {
    const c = a.current, l = window.HTMLInputElement.prototype, d = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (i !== t && d) {
      const f = new Event("click", {
        bubbles: r
      });
      d.call(c, t), c.dispatchEvent(f);
    }
  }, [
    i,
    t,
    r
  ]), /* @__PURE__ */ h("input", x({
    type: "radio",
    "aria-hidden": !0,
    defaultChecked: t
  }, o, {
    tabIndex: -1,
    ref: a,
    style: {
      ...e.style,
      ...s,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0
    }
  }));
};
function Yc(e) {
  return e ? "checked" : "unchecked";
}
const t1 = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
], Uc = "RadioGroup", [n1, Hw] = xe(Uc, [
  tn,
  Bc
]), zc = tn(), Kc = Bc(), [r1, o1] = n1(Uc), a1 = /* @__PURE__ */ T((e, n) => {
  const { __scopeRadioGroup: t, name: r, defaultValue: o, value: a, required: i = !1, disabled: s = !1, orientation: c, dir: l, loop: u = !0, onValueChange: d, ...f } = e, p = zc(t), v = Rt(l), [m, b] = Ee({
    prop: a,
    defaultProp: o,
    onChange: d
  });
  return /* @__PURE__ */ h(r1, {
    scope: t,
    name: r,
    required: i,
    disabled: s,
    value: m,
    onValueChange: b
  }, /* @__PURE__ */ h(Jo, x({
    asChild: !0
  }, p, {
    orientation: c,
    dir: v,
    loop: u
  }), /* @__PURE__ */ h(Y.div, x({
    role: "radiogroup",
    "aria-required": i,
    "aria-orientation": c,
    "data-disabled": s ? "" : void 0,
    dir: v
  }, f, {
    ref: n
  }))));
}), i1 = "RadioGroupItem", s1 = /* @__PURE__ */ T((e, n) => {
  const { __scopeRadioGroup: t, disabled: r, ...o } = e, a = o1(i1, t), i = a.disabled || r, s = zc(t), c = Kc(t), l = R(null), u = re(n, l), d = a.value === o.value, f = R(!1);
  return K(() => {
    const p = (m) => {
      t1.includes(m.key) && (f.current = !0);
    }, v = () => f.current = !1;
    return document.addEventListener("keydown", p), document.addEventListener("keyup", v), () => {
      document.removeEventListener("keydown", p), document.removeEventListener("keyup", v);
    };
  }, []), /* @__PURE__ */ h(ea, x({
    asChild: !0
  }, s, {
    focusable: !i,
    active: d
  }), /* @__PURE__ */ h(Zg, x({
    disabled: i,
    required: a.required,
    checked: d
  }, c, o, {
    name: a.name,
    ref: u,
    onCheck: () => a.onValueChange(o.value),
    onKeyDown: I((p) => {
      p.key === "Enter" && p.preventDefault();
    }),
    onFocus: I(o.onFocus, () => {
      var p;
      f.current && ((p = l.current) === null || p === void 0 || p.click());
    })
  })));
}), c1 = /* @__PURE__ */ T((e, n) => {
  const { __scopeRadioGroup: t, ...r } = e, o = Kc(t);
  return /* @__PURE__ */ h(Jg, x({}, o, r, {
    ref: n
  }));
}), Gc = a1, qc = s1, l1 = c1, d1 = $.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ E.jsx(
  Gc,
  {
    className: M("tw-reset ~grid ~gap-2", e),
    ...n,
    ref: t
  }
));
d1.displayName = Gc.displayName;
const u1 = $.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ E.jsx(
  qc,
  {
    ref: t,
    className: M(
      "~group ~peer ~aspect-square ~h-5 ~w-5 ~rounded-full ~border-2 ~border-input ~text-primary ~shadow",
      "focus:~outline-none focus-visible:~ring-1 focus-visible:~ring-ring",
      "disabled:~cursor-not-allowed disabled:~opacity-50",
      'data-[state="checked"]:~border-primary',
      e
    ),
    ...n,
    children: /* @__PURE__ */ E.jsx(l1, { className: "~flex ~items-center ~justify-center", children: /* @__PURE__ */ E.jsx(
      "div",
      {
        className: M(
          "~aspect-square ~h-3 ~w-3 ~rounded-full ~bg-primary",
          'group-data-[state="checked"]:~animate-in group-data-[state="checked"]:~zoom-in-75'
        )
      }
    ) })
  }
));
u1.displayName = qc.displayName;
function ar(e, [n, t]) {
  return Math.min(t, Math.max(n, e));
}
const wr = /* @__PURE__ */ T((e, n) => /* @__PURE__ */ h(Y.span, x({}, e, {
  ref: n,
  style: {
    // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
    ...e.style
  }
}))), f1 = wr, p1 = [
  " ",
  "Enter",
  "ArrowUp",
  "ArrowDown"
], v1 = [
  " ",
  "Enter"
], xr = "Select", [Cr, ia, m1] = Qt(xr), [on, Bw] = xe(xr, [
  m1,
  xt
]), sa = xt(), [b1, Ft] = on(xr), [h1, g1] = on(xr), $1 = (e) => {
  const { __scopeSelect: n, children: t, open: r, defaultOpen: o, onOpenChange: a, value: i, defaultValue: s, onValueChange: c, dir: l, name: u, autoComplete: d, disabled: f, required: p } = e, v = sa(n), [m, b] = z(null), [y, g] = z(null), [w, _] = z(!1), S = Rt(l), [N = !1, P] = Ee({
    prop: r,
    defaultProp: o,
    onChange: a
  }), [F, H] = Ee({
    prop: i,
    defaultProp: s,
    onChange: c
  }), q = R(null), B = m ? !!m.closest("form") : !0, [j, G] = z(/* @__PURE__ */ new Set()), D = Array.from(j).map(
    (A) => A.props.value
  ).join(";");
  return /* @__PURE__ */ h(Sn, v, /* @__PURE__ */ h(b1, {
    required: p,
    scope: n,
    trigger: m,
    onTriggerChange: b,
    valueNode: y,
    onValueNodeChange: g,
    valueNodeHasChildren: w,
    onValueNodeHasChildrenChange: _,
    contentId: De(),
    value: F,
    onValueChange: H,
    open: N,
    onOpenChange: P,
    dir: S,
    triggerPointerDownPosRef: q,
    disabled: f
  }, /* @__PURE__ */ h(Cr.Provider, {
    scope: n
  }, /* @__PURE__ */ h(h1, {
    scope: e.__scopeSelect,
    onNativeOptionAdd: ee((A) => {
      G(
        (L) => new Set(L).add(A)
      );
    }, []),
    onNativeOptionRemove: ee((A) => {
      G((L) => {
        const k = new Set(L);
        return k.delete(A), k;
      });
    }, [])
  }, t)), B ? /* @__PURE__ */ h(Qc, {
    key: D,
    "aria-hidden": !0,
    required: p,
    tabIndex: -1,
    name: u,
    autoComplete: d,
    value: F,
    onChange: (A) => H(A.target.value),
    disabled: f
  }, F === void 0 ? /* @__PURE__ */ h("option", {
    value: ""
  }) : null, Array.from(j)) : null));
}, y1 = "SelectTrigger", w1 = /* @__PURE__ */ T((e, n) => {
  const { __scopeSelect: t, disabled: r = !1, ...o } = e, a = sa(t), i = Ft(y1, t), s = i.disabled || r, c = re(n, i.onTriggerChange), l = ia(t), [u, d, f] = Jc((v) => {
    const m = l().filter(
      (g) => !g.disabled
    ), b = m.find(
      (g) => g.value === i.value
    ), y = el(m, v, b);
    y !== void 0 && i.onValueChange(y.value);
  }), p = () => {
    s || (i.onOpenChange(!0), f());
  };
  return /* @__PURE__ */ h(hr, x({
    asChild: !0
  }, a), /* @__PURE__ */ h(Y.button, x({
    type: "button",
    role: "combobox",
    "aria-controls": i.contentId,
    "aria-expanded": i.open,
    "aria-required": i.required,
    "aria-autocomplete": "none",
    dir: i.dir,
    "data-state": i.open ? "open" : "closed",
    disabled: s,
    "data-disabled": s ? "" : void 0,
    "data-placeholder": i.value === void 0 ? "" : void 0
  }, o, {
    ref: c,
    onClick: I(o.onClick, (v) => {
      v.currentTarget.focus();
    }),
    onPointerDown: I(o.onPointerDown, (v) => {
      const m = v.target;
      m.hasPointerCapture(v.pointerId) && m.releasePointerCapture(v.pointerId), v.button === 0 && v.ctrlKey === !1 && (p(), i.triggerPointerDownPosRef.current = {
        x: Math.round(v.pageX),
        y: Math.round(v.pageY)
      }, v.preventDefault());
    }),
    onKeyDown: I(o.onKeyDown, (v) => {
      const m = u.current !== "";
      !(v.ctrlKey || v.altKey || v.metaKey) && v.key.length === 1 && d(v.key), !(m && v.key === " ") && p1.includes(v.key) && (p(), v.preventDefault());
    })
  })));
}), x1 = "SelectValue", C1 = /* @__PURE__ */ T((e, n) => {
  const { __scopeSelect: t, className: r, style: o, children: a, placeholder: i, ...s } = e, c = Ft(x1, t), { onValueNodeHasChildrenChange: l } = c, u = a !== void 0, d = re(n, c.onValueNodeChange);
  return Ie(() => {
    l(u);
  }, [
    l,
    u
  ]), /* @__PURE__ */ h(Y.span, x({}, s, {
    ref: d,
    style: {
      pointerEvents: "none"
    }
  }), c.value === void 0 && i !== void 0 ? i : a);
}), _1 = /* @__PURE__ */ T((e, n) => {
  const { __scopeSelect: t, children: r, ...o } = e;
  return /* @__PURE__ */ h(Y.span, x({
    "aria-hidden": !0
  }, o, {
    ref: n
  }), r || "▼");
}), E1 = (e) => /* @__PURE__ */ h(xn, x({
  asChild: !0
}, e)), Zt = "SelectContent", T1 = /* @__PURE__ */ T((e, n) => {
  const t = Ft(Zt, e.__scopeSelect), [r, o] = z();
  if (Ie(() => {
    o(new DocumentFragment());
  }, []), !t.open) {
    const a = r;
    return a ? /* @__PURE__ */ wo(/* @__PURE__ */ h(Xc, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ h(Cr.Slot, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ h("div", null, e.children))), a) : null;
  }
  return /* @__PURE__ */ h(P1, x({}, e, {
    ref: n
  }));
}), rt = 10, [Xc, _r] = on(Zt), P1 = /* @__PURE__ */ T((e, n) => {
  const {
    __scopeSelect: t,
    position: r = "item-aligned",
    onCloseAutoFocus: o,
    onEscapeKeyDown: a,
    onPointerDownOutside: i,
    side: s,
    sideOffset: c,
    align: l,
    alignOffset: u,
    arrowPadding: d,
    collisionBoundary: f,
    collisionPadding: p,
    sticky: v,
    hideWhenDetached: m,
    avoidCollisions: b,
    //
    ...y
  } = e, g = Ft(Zt, t), [w, _] = z(null), [S, N] = z(null), P = re(
    n,
    (Z) => _(Z)
  ), [F, H] = z(null), [q, B] = z(null), j = ia(t), [G, D] = z(!1), A = R(!1);
  K(() => {
    if (w)
      return pr(w);
  }, [
    w
  ]), dr();
  const L = ee((Z) => {
    const [le, ...be] = j().map(
      (pe) => pe.ref.current
    ), [ue] = be.slice(-1), fe = document.activeElement;
    for (const pe of Z)
      if (pe === fe || (pe == null || pe.scrollIntoView({
        block: "nearest"
      }), pe === le && S && (S.scrollTop = 0), pe === ue && S && (S.scrollTop = S.scrollHeight), pe == null || pe.focus(), document.activeElement !== fe))
        return;
  }, [
    j,
    S
  ]), k = ee(
    () => L([
      F,
      w
    ]),
    [
      L,
      F,
      w
    ]
  );
  K(() => {
    G && k();
  }, [
    G,
    k
  ]);
  const { onOpenChange: O, triggerPointerDownPosRef: V } = g;
  K(() => {
    if (w) {
      let Z = {
        x: 0,
        y: 0
      };
      const le = (ue) => {
        var fe, pe, Oe, Ce;
        Z = {
          x: Math.abs(Math.round(ue.pageX) - ((fe = (pe = V.current) === null || pe === void 0 ? void 0 : pe.x) !== null && fe !== void 0 ? fe : 0)),
          y: Math.abs(Math.round(ue.pageY) - ((Oe = (Ce = V.current) === null || Ce === void 0 ? void 0 : Ce.y) !== null && Oe !== void 0 ? Oe : 0))
        };
      }, be = (ue) => {
        Z.x <= 10 && Z.y <= 10 ? ue.preventDefault() : w.contains(ue.target) || O(!1), document.removeEventListener("pointermove", le), V.current = null;
      };
      return V.current !== null && (document.addEventListener("pointermove", le), document.addEventListener("pointerup", be, {
        capture: !0,
        once: !0
      })), () => {
        document.removeEventListener("pointermove", le), document.removeEventListener("pointerup", be, {
          capture: !0
        });
      };
    }
  }, [
    w,
    O,
    V
  ]), K(() => {
    const Z = () => O(!1);
    return window.addEventListener("blur", Z), window.addEventListener("resize", Z), () => {
      window.removeEventListener("blur", Z), window.removeEventListener("resize", Z);
    };
  }, [
    O
  ]);
  const [te, ne] = Jc((Z) => {
    const le = j().filter(
      (fe) => !fe.disabled
    ), be = le.find(
      (fe) => fe.ref.current === document.activeElement
    ), ue = el(le, Z, be);
    ue && setTimeout(
      () => ue.ref.current.focus()
    );
  }), de = ee((Z, le, be) => {
    const ue = !A.current && !be;
    (g.value !== void 0 && g.value === le || ue) && (H(Z), ue && (A.current = !0));
  }, [
    g.value
  ]), ce = ee(
    () => w == null ? void 0 : w.focus(),
    [
      w
    ]
  ), we = ee((Z, le, be) => {
    const ue = !A.current && !be;
    (g.value !== void 0 && g.value === le || ue) && B(Z);
  }, [
    g.value
  ]), Pe = r === "popper" ? li : S1, Se = Pe === li ? {
    side: s,
    sideOffset: c,
    align: l,
    alignOffset: u,
    arrowPadding: d,
    collisionBoundary: f,
    collisionPadding: p,
    sticky: v,
    hideWhenDetached: m,
    avoidCollisions: b
  } : {};
  return /* @__PURE__ */ h(Xc, {
    scope: t,
    content: w,
    viewport: S,
    onViewportChange: N,
    itemRefCallback: de,
    selectedItem: F,
    onItemLeave: ce,
    itemTextRefCallback: we,
    focusSelectedItem: k,
    selectedItemText: q,
    position: r,
    isPositioned: G,
    searchRef: te
  }, /* @__PURE__ */ h(fr, {
    as: ct,
    allowPinchZoom: !0
  }, /* @__PURE__ */ h(lr, {
    asChild: !0,
    trapped: g.open,
    onMountAutoFocus: (Z) => {
      Z.preventDefault();
    },
    onUnmountAutoFocus: I(o, (Z) => {
      var le;
      (le = g.trigger) === null || le === void 0 || le.focus({
        preventScroll: !0
      }), Z.preventDefault();
    })
  }, /* @__PURE__ */ h(Jt, {
    asChild: !0,
    disableOutsidePointerEvents: !0,
    onEscapeKeyDown: a,
    onPointerDownOutside: i,
    onFocusOutside: (Z) => Z.preventDefault(),
    onDismiss: () => g.onOpenChange(!1)
  }, /* @__PURE__ */ h(Pe, x({
    role: "listbox",
    id: g.contentId,
    "data-state": g.open ? "open" : "closed",
    dir: g.dir,
    onContextMenu: (Z) => Z.preventDefault()
  }, y, Se, {
    onPlaced: () => D(!0),
    ref: P,
    style: {
      // flex layout so we can place the scroll buttons properly
      display: "flex",
      flexDirection: "column",
      // reset the outline by default as the content MAY get focused
      outline: "none",
      ...y.style
    },
    onKeyDown: I(y.onKeyDown, (Z) => {
      const le = Z.ctrlKey || Z.altKey || Z.metaKey;
      if (Z.key === "Tab" && Z.preventDefault(), !le && Z.key.length === 1 && ne(Z.key), [
        "ArrowUp",
        "ArrowDown",
        "Home",
        "End"
      ].includes(Z.key)) {
        let ue = j().filter(
          (fe) => !fe.disabled
        ).map(
          (fe) => fe.ref.current
        );
        if ([
          "ArrowUp",
          "End"
        ].includes(Z.key) && (ue = ue.slice().reverse()), [
          "ArrowUp",
          "ArrowDown"
        ].includes(Z.key)) {
          const fe = Z.target, pe = ue.indexOf(fe);
          ue = ue.slice(pe + 1);
        }
        setTimeout(
          () => L(ue)
        ), Z.preventDefault();
      }
    })
  }))))));
}), S1 = /* @__PURE__ */ T((e, n) => {
  const { __scopeSelect: t, onPlaced: r, ...o } = e, a = Ft(Zt, t), i = _r(Zt, t), [s, c] = z(null), [l, u] = z(null), d = re(
    n,
    (P) => u(P)
  ), f = ia(t), p = R(!1), v = R(!0), { viewport: m, selectedItem: b, selectedItemText: y, focusSelectedItem: g } = i, w = ee(() => {
    if (a.trigger && a.valueNode && s && l && m && b && y) {
      const P = a.trigger.getBoundingClientRect(), F = l.getBoundingClientRect(), H = a.valueNode.getBoundingClientRect(), q = y.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const fe = q.left - F.left, pe = H.left - fe, Oe = P.left - pe, Ce = P.width + Oe, je = Math.max(Ce, F.width), et = window.innerWidth - rt, tt = ar(pe, [
          rt,
          et - je
        ]);
        s.style.minWidth = Ce + "px", s.style.left = tt + "px";
      } else {
        const fe = F.right - q.right, pe = window.innerWidth - H.right - fe, Oe = window.innerWidth - P.right - pe, Ce = P.width + Oe, je = Math.max(Ce, F.width), et = window.innerWidth - rt, tt = ar(pe, [
          rt,
          et - je
        ]);
        s.style.minWidth = Ce + "px", s.style.right = tt + "px";
      }
      const B = f(), j = window.innerHeight - rt * 2, G = m.scrollHeight, D = window.getComputedStyle(l), A = parseInt(D.borderTopWidth, 10), L = parseInt(D.paddingTop, 10), k = parseInt(D.borderBottomWidth, 10), O = parseInt(D.paddingBottom, 10), V = A + L + G + O + k, te = Math.min(b.offsetHeight * 5, V), ne = window.getComputedStyle(m), de = parseInt(ne.paddingTop, 10), ce = parseInt(ne.paddingBottom, 10), we = P.top + P.height / 2 - rt, Pe = j - we, Se = b.offsetHeight / 2, Z = b.offsetTop + Se, le = A + L + Z, be = V - le;
      if (le <= we) {
        const fe = b === B[B.length - 1].ref.current;
        s.style.bottom = "0px";
        const pe = l.clientHeight - m.offsetTop - m.offsetHeight, Oe = Math.max(Pe, Se + (fe ? ce : 0) + pe + k), Ce = le + Oe;
        s.style.height = Ce + "px";
      } else {
        const fe = b === B[0].ref.current;
        s.style.top = "0px";
        const Oe = Math.max(we, A + m.offsetTop + (fe ? de : 0) + Se) + be;
        s.style.height = Oe + "px", m.scrollTop = le - we + m.offsetTop;
      }
      s.style.margin = `${rt}px 0`, s.style.minHeight = te + "px", s.style.maxHeight = j + "px", r == null || r(), requestAnimationFrame(
        () => p.current = !0
      );
    }
  }, [
    f,
    a.trigger,
    a.valueNode,
    s,
    l,
    m,
    b,
    y,
    a.dir,
    r
  ]);
  Ie(
    () => w(),
    [
      w
    ]
  );
  const [_, S] = z();
  Ie(() => {
    l && S(window.getComputedStyle(l).zIndex);
  }, [
    l
  ]);
  const N = ee((P) => {
    P && v.current === !0 && (w(), g == null || g(), v.current = !1);
  }, [
    w,
    g
  ]);
  return /* @__PURE__ */ h(D1, {
    scope: t,
    contentWrapper: s,
    shouldExpandOnScrollRef: p,
    onScrollButtonChange: N
  }, /* @__PURE__ */ h("div", {
    ref: c,
    style: {
      display: "flex",
      flexDirection: "column",
      position: "fixed",
      zIndex: _
    }
  }, /* @__PURE__ */ h(Y.div, x({}, o, {
    ref: d,
    style: {
      // When we get the height of the content, it includes borders. If we were to set
      // the height without having `boxSizing: 'border-box'` it would be too big.
      boxSizing: "border-box",
      // We need to ensure the content doesn't get taller than the wrapper
      maxHeight: "100%",
      ...o.style
    }
  }))));
}), li = /* @__PURE__ */ T((e, n) => {
  const { __scopeSelect: t, align: r = "start", collisionPadding: o = rt, ...a } = e, i = sa(t);
  return /* @__PURE__ */ h(gr, x({}, i, a, {
    ref: n,
    align: r,
    collisionPadding: o,
    style: {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      ...a.style,
      "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-select-content-available-width": "var(--radix-popper-available-width)",
      "--radix-select-content-available-height": "var(--radix-popper-available-height)",
      "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
}), [D1, M1] = on(Zt, {}), di = "SelectViewport", O1 = /* @__PURE__ */ T((e, n) => {
  const { __scopeSelect: t, ...r } = e, o = _r(di, t), a = M1(di, t), i = re(n, o.onViewportChange), s = R(0);
  return /* @__PURE__ */ h(Nt, null, /* @__PURE__ */ h("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ h(Cr.Slot, {
    scope: t
  }, /* @__PURE__ */ h(Y.div, x({
    "data-radix-select-viewport": "",
    role: "presentation"
  }, r, {
    ref: i,
    style: {
      // we use position: 'relative' here on the `viewport` so that when we call
      // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
      // (independent of the scrollUpButton).
      position: "relative",
      flex: 1,
      overflow: "auto",
      ...r.style
    },
    onScroll: I(r.onScroll, (c) => {
      const l = c.currentTarget, { contentWrapper: u, shouldExpandOnScrollRef: d } = a;
      if (d != null && d.current && u) {
        const f = Math.abs(s.current - l.scrollTop);
        if (f > 0) {
          const p = window.innerHeight - rt * 2, v = parseFloat(u.style.minHeight), m = parseFloat(u.style.height), b = Math.max(v, m);
          if (b < p) {
            const y = b + f, g = Math.min(p, y), w = y - g;
            u.style.height = g + "px", u.style.bottom === "0px" && (l.scrollTop = w > 0 ? w : 0, u.style.justifyContent = "flex-end");
          }
        }
      }
      s.current = l.scrollTop;
    })
  }))));
}), N1 = "SelectGroup", [R1, k1] = on(N1), A1 = /* @__PURE__ */ T((e, n) => {
  const { __scopeSelect: t, ...r } = e, o = De();
  return /* @__PURE__ */ h(R1, {
    scope: t,
    id: o
  }, /* @__PURE__ */ h(Y.div, x({
    role: "group",
    "aria-labelledby": o
  }, r, {
    ref: n
  })));
}), I1 = "SelectLabel", L1 = /* @__PURE__ */ T((e, n) => {
  const { __scopeSelect: t, ...r } = e, o = k1(I1, t);
  return /* @__PURE__ */ h(Y.div, x({
    id: o.id
  }, r, {
    ref: n
  }));
}), vo = "SelectItem", [F1, Zc] = on(vo), W1 = /* @__PURE__ */ T((e, n) => {
  const { __scopeSelect: t, value: r, disabled: o = !1, textValue: a, ...i } = e, s = Ft(vo, t), c = _r(vo, t), l = s.value === r, [u, d] = z(a ?? ""), [f, p] = z(!1), v = re(n, (y) => {
    var g;
    return (g = c.itemRefCallback) === null || g === void 0 ? void 0 : g.call(c, y, r, o);
  }), m = De(), b = () => {
    o || (s.onValueChange(r), s.onOpenChange(!1));
  };
  return /* @__PURE__ */ h(F1, {
    scope: t,
    value: r,
    disabled: o,
    textId: m,
    isSelected: l,
    onItemTextChange: ee((y) => {
      d((g) => {
        var w;
        return g || ((w = y == null ? void 0 : y.textContent) !== null && w !== void 0 ? w : "").trim();
      });
    }, [])
  }, /* @__PURE__ */ h(Cr.ItemSlot, {
    scope: t,
    value: r,
    disabled: o,
    textValue: u
  }, /* @__PURE__ */ h(Y.div, x({
    role: "option",
    "aria-labelledby": m,
    "data-highlighted": f ? "" : void 0,
    "aria-selected": l && f,
    "data-state": l ? "checked" : "unchecked",
    "aria-disabled": o || void 0,
    "data-disabled": o ? "" : void 0,
    tabIndex: o ? void 0 : -1
  }, i, {
    ref: v,
    onFocus: I(
      i.onFocus,
      () => p(!0)
    ),
    onBlur: I(
      i.onBlur,
      () => p(!1)
    ),
    onPointerUp: I(i.onPointerUp, b),
    onPointerMove: I(i.onPointerMove, (y) => {
      if (o) {
        var g;
        (g = c.onItemLeave) === null || g === void 0 || g.call(c);
      } else
        y.currentTarget.focus({
          preventScroll: !0
        });
    }),
    onPointerLeave: I(i.onPointerLeave, (y) => {
      if (y.currentTarget === document.activeElement) {
        var g;
        (g = c.onItemLeave) === null || g === void 0 || g.call(c);
      }
    }),
    onKeyDown: I(i.onKeyDown, (y) => {
      var g;
      ((g = c.searchRef) === null || g === void 0 ? void 0 : g.current) !== "" && y.key === " " || (v1.includes(y.key) && b(), y.key === " " && y.preventDefault());
    })
  }))));
}), Vn = "SelectItemText", j1 = /* @__PURE__ */ T((e, n) => {
  const { __scopeSelect: t, className: r, style: o, ...a } = e, i = Ft(Vn, t), s = _r(Vn, t), c = Zc(Vn, t), l = g1(Vn, t), [u, d] = z(null), f = re(
    n,
    (y) => d(y),
    c.onItemTextChange,
    (y) => {
      var g;
      return (g = s.itemTextRefCallback) === null || g === void 0 ? void 0 : g.call(s, y, c.value, c.disabled);
    }
  ), p = u == null ? void 0 : u.textContent, v = Xe(
    () => /* @__PURE__ */ h("option", {
      key: c.value,
      value: c.value,
      disabled: c.disabled
    }, p),
    [
      c.disabled,
      c.value,
      p
    ]
  ), { onNativeOptionAdd: m, onNativeOptionRemove: b } = l;
  return Ie(() => (m(v), () => b(v)), [
    m,
    b,
    v
  ]), /* @__PURE__ */ h(Nt, null, /* @__PURE__ */ h(Y.span, x({
    id: c.textId
  }, a, {
    ref: f
  })), c.isSelected && i.valueNode && !i.valueNodeHasChildren ? /* @__PURE__ */ wo(a.children, i.valueNode) : null);
}), V1 = "SelectItemIndicator", H1 = /* @__PURE__ */ T((e, n) => {
  const { __scopeSelect: t, ...r } = e;
  return Zc(V1, t).isSelected ? /* @__PURE__ */ h(Y.span, x({
    "aria-hidden": !0
  }, r, {
    ref: n
  })) : null;
}), B1 = /* @__PURE__ */ T((e, n) => {
  const { __scopeSelect: t, ...r } = e;
  return /* @__PURE__ */ h(Y.div, x({
    "aria-hidden": !0
  }, r, {
    ref: n
  }));
}), Qc = /* @__PURE__ */ T((e, n) => {
  const { value: t, ...r } = e, o = R(null), a = re(n, o), i = Tn(t);
  return K(() => {
    const s = o.current, c = window.HTMLSelectElement.prototype, u = Object.getOwnPropertyDescriptor(c, "value").set;
    if (i !== t && u) {
      const d = new Event("change", {
        bubbles: !0
      });
      u.call(s, t), s.dispatchEvent(d);
    }
  }, [
    i,
    t
  ]), /* @__PURE__ */ h(wr, {
    asChild: !0
  }, /* @__PURE__ */ h("select", x({}, r, {
    ref: a,
    defaultValue: t
  })));
});
Qc.displayName = "BubbleSelect";
function Jc(e) {
  const n = _e(e), t = R(""), r = R(0), o = ee((i) => {
    const s = t.current + i;
    n(s), function c(l) {
      t.current = l, window.clearTimeout(r.current), l !== "" && (r.current = window.setTimeout(
        () => c(""),
        1e3
      ));
    }(s);
  }, [
    n
  ]), a = ee(() => {
    t.current = "", window.clearTimeout(r.current);
  }, []);
  return K(() => () => window.clearTimeout(r.current), []), [
    t,
    o,
    a
  ];
}
function el(e, n, t) {
  const o = n.length > 1 && Array.from(n).every(
    (l) => l === n[0]
  ) ? n[0] : n, a = t ? e.indexOf(t) : -1;
  let i = Y1(e, Math.max(a, 0));
  o.length === 1 && (i = i.filter(
    (l) => l !== t
  ));
  const c = i.find(
    (l) => l.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== t ? c : void 0;
}
function Y1(e, n) {
  return e.map(
    (t, r) => e[(n + r) % e.length]
  );
}
const U1 = $1, tl = w1, z1 = C1, K1 = _1, G1 = E1, nl = T1, q1 = O1, X1 = A1, rl = L1, ol = W1, Z1 = j1, Q1 = H1, al = B1, Yw = U1, Uw = X1, zw = z1, J1 = $.forwardRef(({ className: e, children: n, ...t }, r) => /* @__PURE__ */ E.jsxs(
  tl,
  {
    ref: r,
    className: M(
      "tw-reset ~flex ~h-9 ~w-full ~items-center ~justify-between ~rounded-md ~border ~border-border ~bg-transparent ~px-3 ~py-2 ~shadow-sm",
      "~ring-offset-background",
      "data-[placeholder]:~text-input",
      "focus:~outline-none focus:~ring-1 focus:~ring-ring",
      "disabled:~cursor-not-allowed disabled:~opacity-50",
      e
    ),
    ...t,
    children: [
      n,
      /* @__PURE__ */ E.jsx(K1, { asChild: !0, children: /* @__PURE__ */ E.jsx(Op, { className: "~h-4 ~w-4 ~opacity-50" }) })
    ]
  }
));
J1.displayName = tl.displayName;
const e$ = $.forwardRef(({ className: e, children: n, position: t = "item-aligned", ...r }, o) => /* @__PURE__ */ E.jsx(G1, { children: /* @__PURE__ */ E.jsx(
  nl,
  {
    ref: o,
    className: M(
      "tw-reset ~relative ~z-50 ~min-w-[8em] ~overflow-hidden ~rounded-md ~border ~bg-popover ~font-normal ~leading-6 ~text-popover-foreground ~shadow-md",
      "data-[state=open]:~animate-in data-[state=open]:~fade-in-0 data-[state=open]:~zoom-in-95",
      "data-[state=closed]:~animate-out data-[state=closed]:~fade-out-0 data-[state=closed]:~zoom-out-95",
      "data-[side=bottom]:~slide-in-from-top-2 data-[side=left]:~slide-in-from-right-2 data-[side=right]:~slide-in-from-left-2 data-[side=top]:~slide-in-from-bottom-2",
      t === "popper" && "data-[side=bottom]:~translate-y-1 data-[side=left]:~-translate-x-1 data-[side=right]:~translate-x-1 data-[side=top]:~-translate-y-1",
      e
    ),
    position: t,
    ...r,
    children: /* @__PURE__ */ E.jsx(
      q1,
      {
        className: M(
          "~p-0",
          // dropdown padding
          t === "popper" && "~h-[var(--radix-select-trigger-height)] ~w-full ~min-w-[var(--radix-select-trigger-width)]"
        ),
        children: n
      }
    )
  }
) }));
e$.displayName = nl.displayName;
const t$ = $.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ E.jsx(
  rl,
  {
    ref: t,
    className: M("~px-2 ~py-1.5 ~font-bold", e),
    ...n
  }
));
t$.displayName = rl.displayName;
const n$ = $.forwardRef(({ className: e, children: n, ...t }, r) => /* @__PURE__ */ E.jsxs(
  ol,
  {
    ref: r,
    className: M(
      "~relative ~flex ~w-full ~cursor-pointer ~select-none ~items-center ~rounded-sm ~py-1.5 ~pl-2 ~pr-8 ~outline-none",
      "focus:~bg-accent focus:~text-accent-foreground",
      "data-[disabled]:~pointer-events-none data-[disabled]:~opacity-50",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ E.jsx("span", { className: "~absolute ~right-2 ~flex ~h-3.5 ~w-3.5 ~items-center ~justify-center", children: /* @__PURE__ */ E.jsx(Q1, { children: /* @__PURE__ */ E.jsx(Lo, { className: "~h-4 ~w-4" }) }) }),
      /* @__PURE__ */ E.jsx(Z1, { children: n })
    ]
  }
));
n$.displayName = ol.displayName;
const r$ = $.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ E.jsx(
  al,
  {
    ref: t,
    className: M("~-mx-1 ~my-1 ~h-px ~bg-muted", e),
    ...n
  }
));
r$.displayName = al.displayName;
const mo = "horizontal", o$ = [
  "horizontal",
  "vertical"
], il = /* @__PURE__ */ T((e, n) => {
  const { decorative: t, orientation: r = mo, ...o } = e, a = sl(r) ? r : mo, s = t ? {
    role: "none"
  } : {
    "aria-orientation": a === "vertical" ? a : void 0,
    role: "separator"
  };
  return /* @__PURE__ */ h(Y.div, x({
    "data-orientation": a
  }, s, o, {
    ref: n
  }));
});
il.propTypes = {
  orientation(e, n, t) {
    const r = e[n], o = String(r);
    return r && !sl(r) ? new Error(a$(o, t)) : null;
  }
};
function a$(e, n) {
  return `Invalid prop \`orientation\` of value \`${e}\` supplied to \`${n}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${mo}\`.`;
}
function sl(e) {
  return o$.includes(e);
}
const cl = il, i$ = $.forwardRef(
  ({ className: e, orientation: n = "horizontal", decorative: t = !0, ...r }, o) => /* @__PURE__ */ E.jsx(
    cl,
    {
      ref: o,
      decorative: t,
      orientation: n,
      className: M(
        "tw-reset ~shrink-0 ~bg-border",
        n === "horizontal" ? "~h-[1px] ~w-full" : "~h-full ~w-[1px]",
        e
      ),
      ...r
    }
  )
);
i$.displayName = cl.displayName;
const ll = [
  "PageUp",
  "PageDown"
], dl = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
], ul = {
  "from-left": [
    "Home",
    "PageDown",
    "ArrowDown",
    "ArrowLeft"
  ],
  "from-right": [
    "Home",
    "PageDown",
    "ArrowDown",
    "ArrowRight"
  ],
  "from-bottom": [
    "Home",
    "PageDown",
    "ArrowDown",
    "ArrowLeft"
  ],
  "from-top": [
    "Home",
    "PageDown",
    "ArrowUp",
    "ArrowLeft"
  ]
}, On = "Slider", [bo, s$, c$] = Qt(On), [fl, Kw] = xe(On, [
  c$
]), [l$, Er] = fl(On), d$ = /* @__PURE__ */ T((e, n) => {
  const { name: t, min: r = 0, max: o = 100, step: a = 1, orientation: i = "horizontal", disabled: s = !1, minStepsBetweenThumbs: c = 0, defaultValue: l = [
    r
  ], value: u, onValueChange: d = () => {
  }, onValueCommit: f = () => {
  }, inverted: p = !1, ...v } = e, [m, b] = z(null), y = re(
    n,
    (D) => b(D)
  ), g = R(/* @__PURE__ */ new Set()), w = R(0), _ = i === "horizontal", S = m ? !!m.closest("form") : !0, N = _ ? u$ : f$, [P = [], F] = Ee({
    prop: u,
    defaultProp: l,
    onChange: (D) => {
      var A;
      (A = [
        ...g.current
      ][w.current]) === null || A === void 0 || A.focus(), d(D);
    }
  }), H = R(P);
  function q(D) {
    const A = w$(P, D);
    G(D, A);
  }
  function B(D) {
    G(D, w.current);
  }
  function j() {
    const D = H.current[w.current];
    P[w.current] !== D && f(P);
  }
  function G(D, A, { commit: L } = {
    commit: !1
  }) {
    const k = E$(a), O = T$(Math.round((D - r) / a) * a + r, k), V = ar(O, [
      r,
      o
    ]);
    F((te = []) => {
      const ne = $$(te, V, A);
      if (_$(ne, c * a)) {
        w.current = ne.indexOf(V);
        const de = String(ne) !== String(te);
        return de && L && f(ne), de ? ne : te;
      } else
        return te;
    });
  }
  return /* @__PURE__ */ h(l$, {
    scope: e.__scopeSlider,
    disabled: s,
    min: r,
    max: o,
    valueIndexToChangeRef: w,
    thumbs: g.current,
    values: P,
    orientation: i
  }, /* @__PURE__ */ h(bo.Provider, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ h(bo.Slot, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ h(N, x({
    "aria-disabled": s,
    "data-disabled": s ? "" : void 0
  }, v, {
    ref: y,
    onPointerDown: I(v.onPointerDown, () => {
      s || (H.current = P);
    }),
    min: r,
    max: o,
    inverted: p,
    onSlideStart: s ? void 0 : q,
    onSlideMove: s ? void 0 : B,
    onSlideEnd: s ? void 0 : j,
    onHomeKeyDown: () => !s && G(r, 0, {
      commit: !0
    }),
    onEndKeyDown: () => !s && G(o, P.length - 1, {
      commit: !0
    }),
    onStepKeyDown: ({ event: D, direction: A }) => {
      if (!s) {
        const O = ll.includes(D.key) || D.shiftKey && dl.includes(D.key) ? 10 : 1, V = w.current, te = P[V], ne = a * O * A;
        G(te + ne, V, {
          commit: !0
        });
      }
    }
  })))), S && P.map(
    (D, A) => /* @__PURE__ */ h(g$, {
      key: A,
      name: t ? t + (P.length > 1 ? "[]" : "") : void 0,
      value: D
    })
  ));
}), [pl, vl] = fl(On, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), u$ = /* @__PURE__ */ T((e, n) => {
  const { min: t, max: r, dir: o, inverted: a, onSlideStart: i, onSlideMove: s, onSlideEnd: c, onStepKeyDown: l, ...u } = e, [d, f] = z(null), p = re(
    n,
    (w) => f(w)
  ), v = R(), m = Rt(o), b = m === "ltr", y = b && !a || !b && a;
  function g(w) {
    const _ = v.current || d.getBoundingClientRect(), S = [
      0,
      _.width
    ], P = ca(S, y ? [
      t,
      r
    ] : [
      r,
      t
    ]);
    return v.current = _, P(w - _.left);
  }
  return /* @__PURE__ */ h(pl, {
    scope: e.__scopeSlider,
    startEdge: y ? "left" : "right",
    endEdge: y ? "right" : "left",
    direction: y ? 1 : -1,
    size: "width"
  }, /* @__PURE__ */ h(ml, x({
    dir: m,
    "data-orientation": "horizontal"
  }, u, {
    ref: p,
    style: {
      ...u.style,
      "--radix-slider-thumb-transform": "translateX(-50%)"
    },
    onSlideStart: (w) => {
      const _ = g(w.clientX);
      i == null || i(_);
    },
    onSlideMove: (w) => {
      const _ = g(w.clientX);
      s == null || s(_);
    },
    onSlideEnd: () => {
      v.current = void 0, c == null || c();
    },
    onStepKeyDown: (w) => {
      const S = ul[y ? "from-left" : "from-right"].includes(w.key);
      l == null || l({
        event: w,
        direction: S ? -1 : 1
      });
    }
  })));
}), f$ = /* @__PURE__ */ T((e, n) => {
  const { min: t, max: r, inverted: o, onSlideStart: a, onSlideMove: i, onSlideEnd: s, onStepKeyDown: c, ...l } = e, u = R(null), d = re(n, u), f = R(), p = !o;
  function v(m) {
    const b = f.current || u.current.getBoundingClientRect(), y = [
      0,
      b.height
    ], w = ca(y, p ? [
      r,
      t
    ] : [
      t,
      r
    ]);
    return f.current = b, w(m - b.top);
  }
  return /* @__PURE__ */ h(pl, {
    scope: e.__scopeSlider,
    startEdge: p ? "bottom" : "top",
    endEdge: p ? "top" : "bottom",
    size: "height",
    direction: p ? 1 : -1
  }, /* @__PURE__ */ h(ml, x({
    "data-orientation": "vertical"
  }, l, {
    ref: d,
    style: {
      ...l.style,
      "--radix-slider-thumb-transform": "translateY(50%)"
    },
    onSlideStart: (m) => {
      const b = v(m.clientY);
      a == null || a(b);
    },
    onSlideMove: (m) => {
      const b = v(m.clientY);
      i == null || i(b);
    },
    onSlideEnd: () => {
      f.current = void 0, s == null || s();
    },
    onStepKeyDown: (m) => {
      const y = ul[p ? "from-bottom" : "from-top"].includes(m.key);
      c == null || c({
        event: m,
        direction: y ? -1 : 1
      });
    }
  })));
}), ml = /* @__PURE__ */ T((e, n) => {
  const { __scopeSlider: t, onSlideStart: r, onSlideMove: o, onSlideEnd: a, onHomeKeyDown: i, onEndKeyDown: s, onStepKeyDown: c, ...l } = e, u = Er(On, t);
  return /* @__PURE__ */ h(Y.span, x({}, l, {
    ref: n,
    onKeyDown: I(e.onKeyDown, (d) => {
      d.key === "Home" ? (i(d), d.preventDefault()) : d.key === "End" ? (s(d), d.preventDefault()) : ll.concat(dl).includes(d.key) && (c(d), d.preventDefault());
    }),
    onPointerDown: I(e.onPointerDown, (d) => {
      const f = d.target;
      f.setPointerCapture(d.pointerId), d.preventDefault(), u.thumbs.has(f) ? f.focus() : r(d);
    }),
    onPointerMove: I(e.onPointerMove, (d) => {
      d.target.hasPointerCapture(d.pointerId) && o(d);
    }),
    onPointerUp: I(e.onPointerUp, (d) => {
      const f = d.target;
      f.hasPointerCapture(d.pointerId) && (f.releasePointerCapture(d.pointerId), a(d));
    })
  }));
}), p$ = "SliderTrack", v$ = /* @__PURE__ */ T((e, n) => {
  const { __scopeSlider: t, ...r } = e, o = Er(p$, t);
  return /* @__PURE__ */ h(Y.span, x({
    "data-disabled": o.disabled ? "" : void 0,
    "data-orientation": o.orientation
  }, r, {
    ref: n
  }));
}), ui = "SliderRange", m$ = /* @__PURE__ */ T((e, n) => {
  const { __scopeSlider: t, ...r } = e, o = Er(ui, t), a = vl(ui, t), i = R(null), s = re(n, i), c = o.values.length, l = o.values.map(
    (f) => bl(f, o.min, o.max)
  ), u = c > 1 ? Math.min(...l) : 0, d = 100 - Math.max(...l);
  return /* @__PURE__ */ h(Y.span, x({
    "data-orientation": o.orientation,
    "data-disabled": o.disabled ? "" : void 0
  }, r, {
    ref: s,
    style: {
      ...e.style,
      [a.startEdge]: u + "%",
      [a.endEdge]: d + "%"
    }
  }));
}), fi = "SliderThumb", b$ = /* @__PURE__ */ T((e, n) => {
  const t = s$(e.__scopeSlider), [r, o] = z(null), a = re(
    n,
    (s) => o(s)
  ), i = Xe(
    () => r ? t().findIndex(
      (s) => s.ref.current === r
    ) : -1,
    [
      t,
      r
    ]
  );
  return /* @__PURE__ */ h(h$, x({}, e, {
    ref: a,
    index: i
  }));
}), h$ = /* @__PURE__ */ T((e, n) => {
  const { __scopeSlider: t, index: r, ...o } = e, a = Er(fi, t), i = vl(fi, t), [s, c] = z(null), l = re(
    n,
    (b) => c(b)
  ), u = Pn(s), d = a.values[r], f = d === void 0 ? 0 : bl(d, a.min, a.max), p = y$(r, a.values.length), v = u == null ? void 0 : u[i.size], m = v ? x$(v, f, i.direction) : 0;
  return K(() => {
    if (s)
      return a.thumbs.add(s), () => {
        a.thumbs.delete(s);
      };
  }, [
    s,
    a.thumbs
  ]), /* @__PURE__ */ h("span", {
    style: {
      transform: "var(--radix-slider-thumb-transform)",
      position: "absolute",
      [i.startEdge]: `calc(${f}% + ${m}px)`
    }
  }, /* @__PURE__ */ h(bo.ItemSlot, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ h(Y.span, x({
    role: "slider",
    "aria-label": e["aria-label"] || p,
    "aria-valuemin": a.min,
    "aria-valuenow": d,
    "aria-valuemax": a.max,
    "aria-orientation": a.orientation,
    "data-orientation": a.orientation,
    "data-disabled": a.disabled ? "" : void 0,
    tabIndex: a.disabled ? void 0 : 0
  }, o, {
    ref: l,
    style: d === void 0 ? {
      display: "none"
    } : e.style,
    onFocus: I(e.onFocus, () => {
      a.valueIndexToChangeRef.current = r;
    })
  }))));
}), g$ = (e) => {
  const { value: n, ...t } = e, r = R(null), o = Tn(n);
  return K(() => {
    const a = r.current, i = window.HTMLInputElement.prototype, c = Object.getOwnPropertyDescriptor(i, "value").set;
    if (o !== n && c) {
      const l = new Event("input", {
        bubbles: !0
      });
      c.call(a, n), a.dispatchEvent(l);
    }
  }, [
    o,
    n
  ]), /* @__PURE__ */ h("input", x({
    style: {
      display: "none"
    }
  }, t, {
    ref: r,
    defaultValue: n
  }));
};
function $$(e = [], n, t) {
  const r = [
    ...e
  ];
  return r[t] = n, r.sort(
    (o, a) => o - a
  );
}
function bl(e, n, t) {
  const a = 100 / (t - n) * (e - n);
  return ar(a, [
    0,
    100
  ]);
}
function y$(e, n) {
  return n > 2 ? `Value ${e + 1} of ${n}` : n === 2 ? [
    "Minimum",
    "Maximum"
  ][e] : void 0;
}
function w$(e, n) {
  if (e.length === 1)
    return 0;
  const t = e.map(
    (o) => Math.abs(o - n)
  ), r = Math.min(...t);
  return t.indexOf(r);
}
function x$(e, n, t) {
  const r = e / 2, a = ca([
    0,
    50
  ], [
    0,
    r
  ]);
  return (r - a(n) * t) * t;
}
function C$(e) {
  return e.slice(0, -1).map(
    (n, t) => e[t + 1] - n
  );
}
function _$(e, n) {
  if (n > 0) {
    const t = C$(e);
    return Math.min(...t) >= n;
  }
  return !0;
}
function ca(e, n) {
  return (t) => {
    if (e[0] === e[1] || n[0] === n[1])
      return n[0];
    const r = (n[1] - n[0]) / (e[1] - e[0]);
    return n[0] + r * (t - e[0]);
  };
}
function E$(e) {
  return (String(e).split(".")[1] || "").length;
}
function T$(e, n) {
  const t = Math.pow(10, n);
  return Math.round(e * t) / t;
}
const hl = d$, P$ = v$, S$ = m$, pi = b$, D$ = $.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ E.jsxs(
  hl,
  {
    ref: t,
    className: M(
      "tw-reset ~group ~peer ~relative ~flex ~w-full ~cursor-pointer ~touch-none ~select-none ~items-center",
      "data-[disabled]:~cursor-not-allowed data-[disabled]:~opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ E.jsx(P$, { className: "~relative ~h-1.5 ~w-full ~grow ~overflow-hidden ~rounded-full ~bg-primary/20", children: /* @__PURE__ */ E.jsx(S$, { className: "~absolute ~h-full ~bg-primary" }) }),
      /* @__PURE__ */ E.jsx(
        pi,
        {
          className: M(
            "~block ~h-4 ~w-4 ~rounded-full ~border ~border-primary/50 ~bg-background ~shadow ~transition-colors",
            "focus-visible:~outline-none focus-visible:~ring-1 focus-visible:~ring-ring"
          )
        }
      ),
      /* @__PURE__ */ E.jsx(
        pi,
        {
          className: M(
            "~block ~h-4 ~w-4 ~rounded-full ~border ~border-primary/50 ~bg-background ~shadow ~transition-colors",
            "focus-visible:~outline-none focus-visible:~ring-1 focus-visible:~ring-ring"
          )
        }
      )
    ]
  }
));
D$.displayName = hl.displayName;
const gl = "Switch", [M$, Gw] = xe(gl), [O$, N$] = M$(gl), R$ = /* @__PURE__ */ T((e, n) => {
  const { __scopeSwitch: t, name: r, checked: o, defaultChecked: a, required: i, disabled: s, value: c = "on", onCheckedChange: l, ...u } = e, [d, f] = z(null), p = re(
    n,
    (g) => f(g)
  ), v = R(!1), m = d ? !!d.closest("form") : !0, [b = !1, y] = Ee({
    prop: o,
    defaultProp: a,
    onChange: l
  });
  return /* @__PURE__ */ h(O$, {
    scope: t,
    checked: b,
    disabled: s
  }, /* @__PURE__ */ h(Y.button, x({
    type: "button",
    role: "switch",
    "aria-checked": b,
    "aria-required": i,
    "data-state": $l(b),
    "data-disabled": s ? "" : void 0,
    disabled: s,
    value: c
  }, u, {
    ref: p,
    onClick: I(e.onClick, (g) => {
      y(
        (w) => !w
      ), m && (v.current = g.isPropagationStopped(), v.current || g.stopPropagation());
    })
  })), m && /* @__PURE__ */ h(I$, {
    control: d,
    bubbles: !v.current,
    name: r,
    value: c,
    checked: b,
    required: i,
    disabled: s,
    style: {
      transform: "translateX(-100%)"
    }
  }));
}), k$ = "SwitchThumb", A$ = /* @__PURE__ */ T((e, n) => {
  const { __scopeSwitch: t, ...r } = e, o = N$(k$, t);
  return /* @__PURE__ */ h(Y.span, x({
    "data-state": $l(o.checked),
    "data-disabled": o.disabled ? "" : void 0
  }, r, {
    ref: n
  }));
}), I$ = (e) => {
  const { control: n, checked: t, bubbles: r = !0, ...o } = e, a = R(null), i = Tn(t), s = Pn(n);
  return K(() => {
    const c = a.current, l = window.HTMLInputElement.prototype, d = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (i !== t && d) {
      const f = new Event("click", {
        bubbles: r
      });
      d.call(c, t), c.dispatchEvent(f);
    }
  }, [
    i,
    t,
    r
  ]), /* @__PURE__ */ h("input", x({
    type: "checkbox",
    "aria-hidden": !0,
    defaultChecked: t
  }, o, {
    tabIndex: -1,
    ref: a,
    style: {
      ...e.style,
      ...s,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0
    }
  }));
};
function $l(e) {
  return e ? "checked" : "unchecked";
}
const yl = R$, L$ = A$, F$ = $.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ E.jsx(
  yl,
  {
    className: M(
      "tw-reset ~peer ~inline-flex ~h-4 ~w-8 ~shrink-0 ~cursor-pointer ~items-center ~rounded-full ~border-2 ~border-transparent ~shadow-sm ~transition-colors",
      "focus-visible:~outline-none focus-visible:~ring-2 focus-visible:~ring-ring focus-visible:~ring-offset-2 focus-visible:~ring-offset-background",
      "disabled:~cursor-not-allowed disabled:~opacity-50",
      "data-[state=checked]:~bg-primary data-[state=unchecked]:~bg-input",
      e
    ),
    ...n,
    ref: t,
    children: /* @__PURE__ */ E.jsx(
      L$,
      {
        className: M(
          "~pointer-events-none ~block ~h-3 ~w-3 ~rounded-full ~bg-background ~shadow-lg ~ring-0 ~transition-transform",
          "data-[state=checked]:~translate-x-4 data-[state=unchecked]:~translate-x-0"
        )
      }
    )
  }
));
F$.displayName = yl.displayName;
const W$ = $.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ E.jsx("div", { className: "tw-reset ~w-full ~overflow-auto", children: /* @__PURE__ */ E.jsx(
  "table",
  {
    ref: t,
    className: M("~w-full ~caption-bottom", e),
    ...n
  }
) }));
W$.displayName = "Table";
const j$ = $.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ E.jsx("thead", { ref: t, className: M("[&_tr]:~border-b", e), ...n }));
j$.displayName = "TableHeader";
const V$ = $.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ E.jsx(
  "tbody",
  {
    ref: t,
    className: M("[&_tr:last-child]:~border-0", e),
    ...n
  }
));
V$.displayName = "TableBody";
const H$ = $.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ E.jsx(
  "tfoot",
  {
    ref: t,
    className: M(
      "~bg-primary ~font-medium ~text-primary-foreground",
      e
    ),
    ...n
  }
));
H$.displayName = "TableFooter";
const B$ = $.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ E.jsx(
  "tr",
  {
    ref: t,
    className: M(
      "~border-b ~transition-colors hover:~bg-muted/50 data-[state=selected]:~bg-muted",
      e
    ),
    ...n
  }
));
B$.displayName = "TableRow";
const Y$ = $.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ E.jsx(
  "th",
  {
    ref: t,
    className: M(
      "~h-9 ~px-2 ~text-left ~align-middle ~font-semibold ~text-muted-foreground",
      "[&:has([role=checkbox])]:~pr-0 [&>[role=checkbox]]:~translate-y-[2px]",
      e
    ),
    ...n
  }
));
Y$.displayName = "TableHead";
const U$ = $.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ E.jsx(
  "td",
  {
    ref: t,
    className: M(
      "~p-2 ~align-middle [&:has([role=checkbox])]:~pr-0 [&>[role=checkbox]]:~translate-y-[2px]",
      e
    ),
    ...n
  }
));
U$.displayName = "TableCell";
const z$ = $.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ E.jsx(
  "caption",
  {
    ref: t,
    className: M("~mt-4 ~text-muted-foreground", e),
    ...n
  }
));
z$.displayName = "TableCaption";
const wl = "Tabs", [K$, qw] = xe(wl, [
  tn
]), xl = tn(), [G$, la] = K$(wl), q$ = /* @__PURE__ */ T((e, n) => {
  const { __scopeTabs: t, value: r, onValueChange: o, defaultValue: a, orientation: i = "horizontal", dir: s, activationMode: c = "automatic", ...l } = e, u = Rt(s), [d, f] = Ee({
    prop: r,
    onChange: o,
    defaultProp: a
  });
  return /* @__PURE__ */ h(G$, {
    scope: t,
    baseId: De(),
    value: d,
    onValueChange: f,
    orientation: i,
    dir: u,
    activationMode: c
  }, /* @__PURE__ */ h(Y.div, x({
    dir: u,
    "data-orientation": i
  }, l, {
    ref: n
  })));
}), X$ = "TabsList", Z$ = /* @__PURE__ */ T((e, n) => {
  const { __scopeTabs: t, loop: r = !0, ...o } = e, a = la(X$, t), i = xl(t);
  return /* @__PURE__ */ h(Jo, x({
    asChild: !0
  }, i, {
    orientation: a.orientation,
    dir: a.dir,
    loop: r
  }), /* @__PURE__ */ h(Y.div, x({
    role: "tablist",
    "aria-orientation": a.orientation
  }, o, {
    ref: n
  })));
}), Q$ = "TabsTrigger", J$ = /* @__PURE__ */ T((e, n) => {
  const { __scopeTabs: t, value: r, disabled: o = !1, ...a } = e, i = la(Q$, t), s = xl(t), c = Cl(i.baseId, r), l = _l(i.baseId, r), u = r === i.value;
  return /* @__PURE__ */ h(ea, x({
    asChild: !0
  }, s, {
    focusable: !o,
    active: u
  }), /* @__PURE__ */ h(Y.button, x({
    type: "button",
    role: "tab",
    "aria-selected": u,
    "aria-controls": l,
    "data-state": u ? "active" : "inactive",
    "data-disabled": o ? "" : void 0,
    disabled: o,
    id: c
  }, a, {
    ref: n,
    onMouseDown: I(e.onMouseDown, (d) => {
      !o && d.button === 0 && d.ctrlKey === !1 ? i.onValueChange(r) : d.preventDefault();
    }),
    onKeyDown: I(e.onKeyDown, (d) => {
      [
        " ",
        "Enter"
      ].includes(d.key) && i.onValueChange(r);
    }),
    onFocus: I(e.onFocus, () => {
      const d = i.activationMode !== "manual";
      !u && !o && d && i.onValueChange(r);
    })
  })));
}), ey = "TabsContent", ty = /* @__PURE__ */ T((e, n) => {
  const { __scopeTabs: t, value: r, forceMount: o, children: a, ...i } = e, s = la(ey, t), c = Cl(s.baseId, r), l = _l(s.baseId, r), u = r === s.value, d = R(u);
  return K(() => {
    const f = requestAnimationFrame(
      () => d.current = !1
    );
    return () => cancelAnimationFrame(f);
  }, []), /* @__PURE__ */ h(
    Me,
    {
      present: o || u
    },
    ({ present: f }) => /* @__PURE__ */ h(Y.div, x({
      "data-state": u ? "active" : "inactive",
      "data-orientation": s.orientation,
      role: "tabpanel",
      "aria-labelledby": c,
      hidden: !f,
      id: l,
      tabIndex: 0
    }, i, {
      ref: n,
      style: {
        ...e.style,
        animationDuration: d.current ? "0s" : void 0
      }
    }), f && a)
  );
});
function Cl(e, n) {
  return `${e}-trigger-${n}`;
}
function _l(e, n) {
  return `${e}-content-${n}`;
}
const ny = q$, El = Z$, Tl = J$, Pl = ty, ry = yt(
  "~relative ~inline-flex ~h-9 ~items-center ~justify-center ~bg-background ~text-muted-foreground",
  {
    variants: {
      variant: {
        default: "",
        pills: "~rounded-full ~border ~border-black ~p-1"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), oy = yt(
  "~pointer-events-none ~absolute ~transition-all ~duration-300 ~ease-in-out",
  {
    variants: {
      variant: {
        default: "~z-10 ~border-primary",
        pills: "~bottom-1 ~top-1 ~rounded-full ~bg-black"
      },
      orientation: {
        horizontal: "~left-0 ~h-full ~border-b-2",
        vertical: "~top-0 ~w-full ~border-r-2"
      }
    },
    // TODO: compound variant may make default pill variant effectively redundant
    compoundVariants: [
      {
        variant: "pills",
        orientation: "horizontal",
        className: "~bottom-1 ~top-1 ~h-auto ~rounded-full ~border-none ~bg-black"
      }
    ],
    defaultVariants: {
      variant: "default"
    }
  }
), ay = yt(
  [
    "caption-1 ~inline-flex ~min-h-0 ~items-center ~justify-center ~whitespace-nowrap ~px-3 ~py-1 ~ring-offset-background ~transition-all",
    "focus-visible:~outline-none focus-visible:~ring-2 focus-visible:~ring-ring focus-visible:~ring-offset-2",
    "disabled:~pointer-events-none disabled:~opacity-50"
  ],
  {
    variants: {
      variant: {
        default: M(
          "~h-full ~border-b ~border-border",
          "data-[state=inactive]:~font-normal data-[state=active]:~text-foreground"
        ),
        pills: "~z-10 ~rounded-full ~text-foreground data-[state=active]:~text-white"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), da = We({
  variant: "default",
  orientation: "horizontal"
}), Xw = ({
  variant: e = "default",
  orientation: n = "horizontal",
  className: t,
  ...r
}) => /* @__PURE__ */ E.jsx(da.Provider, { value: { variant: e, orientation: n }, children: /* @__PURE__ */ E.jsx(
  ny,
  {
    className: M("tw-reset", t),
    ...r,
    orientation: n
  }
) }), iy = $.forwardRef(({ className: e, children: n, ...t }, r) => {
  const o = R(null), a = R(null), i = r || a, { variant: s, orientation: c } = Le(da), [l, u] = z(!0);
  return un(() => {
    function d() {
      const p = i.current, v = p == null ? void 0 : p.querySelector('[data-state="active"]');
      if (v && o.current) {
        const m = v;
        c === "horizontal" ? (o.current.style.transform = `translateX(${m.offsetLeft}px)`, o.current.style.width = `${m.offsetWidth}px`) : (o.current.style.transform = `translateY(${m.offsetTop}px)`, o.current.style.height = `${m.offsetHeight}px`), u(!1);
      }
    }
    d();
    const f = new MutationObserver(d);
    return f.observe(i.current, {
      attributes: !0,
      subtree: !0
    }), () => f.disconnect();
  }, [i]), /* @__PURE__ */ E.jsxs(
    El,
    {
      ref: i,
      className: M(ry({ variant: s }), e),
      ...t,
      children: [
        /* @__PURE__ */ E.jsx(
          "div",
          {
            ref: o,
            className: M(
              oy({ variant: s, orientation: c }),
              l ? "~transition-none" : ""
            )
          }
        ),
        n
      ]
    }
  );
});
iy.displayName = El.displayName;
const sy = $.forwardRef(({ className: e, ...n }, t) => {
  const { variant: r } = Le(da);
  return /* @__PURE__ */ E.jsx(
    Tl,
    {
      ref: t,
      className: M(ay({ variant: r }), e),
      ...n
    }
  );
});
sy.displayName = Tl.displayName;
const cy = $.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ E.jsx(
  Pl,
  {
    ref: t,
    className: M(
      "~mt-2 ~ring-offset-background",
      "focus-visible:~outline-none focus-visible:~ring-2 focus-visible:~ring-ring focus-visible:~ring-offset-2",
      e
    ),
    ...n
  }
));
cy.displayName = Pl.displayName;
const ly = $.forwardRef(
  ({ className: e, ...n }, t) => /* @__PURE__ */ E.jsx(
    "textarea",
    {
      className: M(
        "tw-reset ~peer ~flex ~min-h-[60px] ~w-full ~rounded-md ~border ~border-border ~bg-transparent ~px-3 ~py-2 ~shadow-sm",
        "placeholder:~text-input",
        "focus-visible:~outline-none focus-visible:~ring-1 focus-visible:~ring-ring",
        "disabled:~cursor-not-allowed disabled:~opacity-50",
        e
      ),
      ref: t,
      ...n
    }
  )
);
ly.displayName = "Textarea";
const Sl = "ToastProvider", [ua, dy, uy] = Qt("Toast"), [Dl, Zw] = xe("Toast", [
  uy
]), [fy, Tr] = Dl(Sl), Ml = (e) => {
  const { __scopeToast: n, label: t = "Notification", duration: r = 5e3, swipeDirection: o = "right", swipeThreshold: a = 50, children: i } = e, [s, c] = z(null), [l, u] = z(0), d = R(!1), f = R(!1);
  return /* @__PURE__ */ h(ua.Provider, {
    scope: n
  }, /* @__PURE__ */ h(fy, {
    scope: n,
    label: t,
    duration: r,
    swipeDirection: o,
    swipeThreshold: a,
    toastCount: l,
    viewport: s,
    onViewportChange: c,
    onToastAdd: ee(
      () => u(
        (p) => p + 1
      ),
      []
    ),
    onToastRemove: ee(
      () => u(
        (p) => p - 1
      ),
      []
    ),
    isFocusedToastEscapeKeyDownRef: d,
    isClosePausedRef: f
  }, i));
};
Ml.propTypes = {
  label(e) {
    if (e.label && typeof e.label == "string" && !e.label.trim()) {
      const n = `Invalid prop \`label\` supplied to \`${Sl}\`. Expected non-empty \`string\`.`;
      return new Error(n);
    }
    return null;
  }
};
const py = "ToastViewport", vy = [
  "F8"
], ho = "toast.viewportPause", go = "toast.viewportResume", my = /* @__PURE__ */ T((e, n) => {
  const { __scopeToast: t, hotkey: r = vy, label: o = "Notifications ({hotkey})", ...a } = e, i = Tr(py, t), s = dy(t), c = R(null), l = R(null), u = R(null), d = R(null), f = re(n, d, i.onViewportChange), p = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), v = i.toastCount > 0;
  K(() => {
    const b = (y) => {
      var g;
      r.every(
        (_) => y[_] || y.code === _
      ) && ((g = d.current) === null || g === void 0 || g.focus());
    };
    return document.addEventListener("keydown", b), () => document.removeEventListener("keydown", b);
  }, [
    r
  ]), K(() => {
    const b = c.current, y = d.current;
    if (v && b && y) {
      const g = () => {
        if (!i.isClosePausedRef.current) {
          const N = new CustomEvent(ho);
          y.dispatchEvent(N), i.isClosePausedRef.current = !0;
        }
      }, w = () => {
        if (i.isClosePausedRef.current) {
          const N = new CustomEvent(go);
          y.dispatchEvent(N), i.isClosePausedRef.current = !1;
        }
      }, _ = (N) => {
        !b.contains(N.relatedTarget) && w();
      }, S = () => {
        b.contains(document.activeElement) || w();
      };
      return b.addEventListener("focusin", g), b.addEventListener("focusout", _), b.addEventListener("pointermove", g), b.addEventListener("pointerleave", S), window.addEventListener("blur", g), window.addEventListener("focus", w), () => {
        b.removeEventListener("focusin", g), b.removeEventListener("focusout", _), b.removeEventListener("pointermove", g), b.removeEventListener("pointerleave", S), window.removeEventListener("blur", g), window.removeEventListener("focus", w);
      };
    }
  }, [
    v,
    i.isClosePausedRef
  ]);
  const m = ee(({ tabbingDirection: b }) => {
    const g = s().map((w) => {
      const _ = w.ref.current, S = [
        _,
        ...Oy(_)
      ];
      return b === "forwards" ? S : S.reverse();
    });
    return (b === "forwards" ? g.reverse() : g).flat();
  }, [
    s
  ]);
  return K(() => {
    const b = d.current;
    if (b) {
      const y = (g) => {
        const w = g.altKey || g.ctrlKey || g.metaKey;
        if (g.key === "Tab" && !w) {
          const F = document.activeElement, H = g.shiftKey;
          if (g.target === b && H) {
            var S;
            (S = l.current) === null || S === void 0 || S.focus();
            return;
          }
          const j = m({
            tabbingDirection: H ? "backwards" : "forwards"
          }), G = j.findIndex(
            (D) => D === F
          );
          if (Kr(j.slice(G + 1)))
            g.preventDefault();
          else {
            var N, P;
            H ? (N = l.current) === null || N === void 0 || N.focus() : (P = u.current) === null || P === void 0 || P.focus();
          }
        }
      };
      return b.addEventListener("keydown", y), () => b.removeEventListener("keydown", y);
    }
  }, [
    s,
    m
  ]), /* @__PURE__ */ h(Lu, {
    ref: c,
    role: "region",
    "aria-label": o.replace("{hotkey}", p),
    tabIndex: -1,
    style: {
      pointerEvents: v ? void 0 : "none"
    }
  }, v && /* @__PURE__ */ h(vi, {
    ref: l,
    onFocusFromOutsideViewport: () => {
      const b = m({
        tabbingDirection: "forwards"
      });
      Kr(b);
    }
  }), /* @__PURE__ */ h(ua.Slot, {
    scope: t
  }, /* @__PURE__ */ h(Y.ol, x({
    tabIndex: -1
  }, a, {
    ref: f
  }))), v && /* @__PURE__ */ h(vi, {
    ref: u,
    onFocusFromOutsideViewport: () => {
      const b = m({
        tabbingDirection: "backwards"
      });
      Kr(b);
    }
  }));
}), by = "ToastFocusProxy", vi = /* @__PURE__ */ T((e, n) => {
  const { __scopeToast: t, onFocusFromOutsideViewport: r, ...o } = e, a = Tr(by, t);
  return /* @__PURE__ */ h(wr, x({
    "aria-hidden": !0,
    tabIndex: 0
  }, o, {
    ref: n,
    style: {
      position: "fixed"
    },
    onFocus: (i) => {
      var s;
      const c = i.relatedTarget;
      !((s = a.viewport) !== null && s !== void 0 && s.contains(c)) && r();
    }
  }));
}), Pr = "Toast", hy = "toast.swipeStart", gy = "toast.swipeMove", $y = "toast.swipeCancel", yy = "toast.swipeEnd", wy = /* @__PURE__ */ T((e, n) => {
  const { forceMount: t, open: r, defaultOpen: o, onOpenChange: a, ...i } = e, [s = !0, c] = Ee({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ h(Me, {
    present: t || s
  }, /* @__PURE__ */ h(Ol, x({
    open: s
  }, i, {
    ref: n,
    onClose: () => c(!1),
    onPause: _e(e.onPause),
    onResume: _e(e.onResume),
    onSwipeStart: I(e.onSwipeStart, (l) => {
      l.currentTarget.setAttribute("data-swipe", "start");
    }),
    onSwipeMove: I(e.onSwipeMove, (l) => {
      const { x: u, y: d } = l.detail.delta;
      l.currentTarget.setAttribute("data-swipe", "move"), l.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${u}px`), l.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${d}px`);
    }),
    onSwipeCancel: I(e.onSwipeCancel, (l) => {
      l.currentTarget.setAttribute("data-swipe", "cancel"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), l.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), l.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
    }),
    onSwipeEnd: I(e.onSwipeEnd, (l) => {
      const { x: u, y: d } = l.detail.delta;
      l.currentTarget.setAttribute("data-swipe", "end"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), l.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${u}px`), l.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${d}px`), c(!1);
    })
  })));
}), [xy, Cy] = Dl(Pr, {
  onClose() {
  }
}), Ol = /* @__PURE__ */ T((e, n) => {
  const { __scopeToast: t, type: r = "foreground", duration: o, open: a, onClose: i, onEscapeKeyDown: s, onPause: c, onResume: l, onSwipeStart: u, onSwipeMove: d, onSwipeCancel: f, onSwipeEnd: p, ...v } = e, m = Tr(Pr, t), [b, y] = z(null), g = re(
    n,
    (D) => y(D)
  ), w = R(null), _ = R(null), S = o || m.duration, N = R(0), P = R(S), F = R(0), { onToastAdd: H, onToastRemove: q } = m, B = _e(() => {
    var D;
    (b == null ? void 0 : b.contains(document.activeElement)) && ((D = m.viewport) === null || D === void 0 || D.focus()), i();
  }), j = ee((D) => {
    !D || D === 1 / 0 || (window.clearTimeout(F.current), N.current = (/* @__PURE__ */ new Date()).getTime(), F.current = window.setTimeout(B, D));
  }, [
    B
  ]);
  K(() => {
    const D = m.viewport;
    if (D) {
      const A = () => {
        j(P.current), l == null || l();
      }, L = () => {
        const k = (/* @__PURE__ */ new Date()).getTime() - N.current;
        P.current = P.current - k, window.clearTimeout(F.current), c == null || c();
      };
      return D.addEventListener(ho, L), D.addEventListener(go, A), () => {
        D.removeEventListener(ho, L), D.removeEventListener(go, A);
      };
    }
  }, [
    m.viewport,
    S,
    c,
    l,
    j
  ]), K(() => {
    a && !m.isClosePausedRef.current && j(S);
  }, [
    a,
    S,
    m.isClosePausedRef,
    j
  ]), K(() => (H(), () => q()), [
    H,
    q
  ]);
  const G = Xe(() => b ? Al(b) : null, [
    b
  ]);
  return m.viewport ? /* @__PURE__ */ h(Nt, null, G && /* @__PURE__ */ h(_y, {
    __scopeToast: t,
    role: "status",
    "aria-live": r === "foreground" ? "assertive" : "polite",
    "aria-atomic": !0
  }, G), /* @__PURE__ */ h(xy, {
    scope: t,
    onClose: B
  }, /* @__PURE__ */ wo(/* @__PURE__ */ h(ua.ItemSlot, {
    scope: t
  }, /* @__PURE__ */ h(Iu, {
    asChild: !0,
    onEscapeKeyDown: I(s, () => {
      m.isFocusedToastEscapeKeyDownRef.current || B(), m.isFocusedToastEscapeKeyDownRef.current = !1;
    })
  }, /* @__PURE__ */ h(Y.li, x({
    // Ensure toasts are announced as status list or status when focused
    role: "status",
    "aria-live": "off",
    "aria-atomic": !0,
    tabIndex: 0,
    "data-state": a ? "open" : "closed",
    "data-swipe-direction": m.swipeDirection
  }, v, {
    ref: g,
    style: {
      userSelect: "none",
      touchAction: "none",
      ...e.style
    },
    onKeyDown: I(e.onKeyDown, (D) => {
      D.key === "Escape" && (s == null || s(D.nativeEvent), D.nativeEvent.defaultPrevented || (m.isFocusedToastEscapeKeyDownRef.current = !0, B()));
    }),
    onPointerDown: I(e.onPointerDown, (D) => {
      D.button === 0 && (w.current = {
        x: D.clientX,
        y: D.clientY
      });
    }),
    onPointerMove: I(e.onPointerMove, (D) => {
      if (!w.current)
        return;
      const A = D.clientX - w.current.x, L = D.clientY - w.current.y, k = !!_.current, O = [
        "left",
        "right"
      ].includes(m.swipeDirection), V = [
        "left",
        "up"
      ].includes(m.swipeDirection) ? Math.min : Math.max, te = O ? V(0, A) : 0, ne = O ? 0 : V(0, L), de = D.pointerType === "touch" ? 10 : 2, ce = {
        x: te,
        y: ne
      }, we = {
        originalEvent: D,
        delta: ce
      };
      k ? (_.current = ce, Hn(gy, d, we, {
        discrete: !1
      })) : mi(ce, m.swipeDirection, de) ? (_.current = ce, Hn(hy, u, we, {
        discrete: !1
      }), D.target.setPointerCapture(D.pointerId)) : (Math.abs(A) > de || Math.abs(L) > de) && (w.current = null);
    }),
    onPointerUp: I(e.onPointerUp, (D) => {
      const A = _.current, L = D.target;
      if (L.hasPointerCapture(D.pointerId) && L.releasePointerCapture(D.pointerId), _.current = null, w.current = null, A) {
        const k = D.currentTarget, O = {
          originalEvent: D,
          delta: A
        };
        mi(A, m.swipeDirection, m.swipeThreshold) ? Hn(yy, p, O, {
          discrete: !0
        }) : Hn($y, f, O, {
          discrete: !0
        }), k.addEventListener(
          "click",
          (V) => V.preventDefault(),
          {
            once: !0
          }
        );
      }
    })
  })))), m.viewport))) : null;
});
Ol.propTypes = {
  type(e) {
    if (e.type && ![
      "foreground",
      "background"
    ].includes(e.type)) {
      const n = `Invalid prop \`type\` supplied to \`${Pr}\`. Expected \`foreground | background\`.`;
      return new Error(n);
    }
    return null;
  }
};
const _y = (e) => {
  const { __scopeToast: n, children: t, ...r } = e, o = Tr(Pr, n), [a, i] = z(!1), [s, c] = z(!1);
  return Dy(
    () => i(!0)
  ), K(() => {
    const l = window.setTimeout(
      () => c(!0),
      1e3
    );
    return () => window.clearTimeout(l);
  }, []), s ? null : /* @__PURE__ */ h(xn, {
    asChild: !0
  }, /* @__PURE__ */ h(wr, r, a && /* @__PURE__ */ h(Nt, null, o.label, " ", t)));
}, Ey = /* @__PURE__ */ T((e, n) => {
  const { __scopeToast: t, ...r } = e;
  return /* @__PURE__ */ h(Y.div, x({}, r, {
    ref: n
  }));
}), Ty = /* @__PURE__ */ T((e, n) => {
  const { __scopeToast: t, ...r } = e;
  return /* @__PURE__ */ h(Y.div, x({}, r, {
    ref: n
  }));
}), Py = "ToastAction", Nl = /* @__PURE__ */ T((e, n) => {
  const { altText: t, ...r } = e;
  return t ? /* @__PURE__ */ h(kl, {
    altText: t,
    asChild: !0
  }, /* @__PURE__ */ h(Rl, x({}, r, {
    ref: n
  }))) : null;
});
Nl.propTypes = {
  altText(e) {
    return e.altText ? null : new Error(`Missing prop \`altText\` expected on \`${Py}\``);
  }
};
const Sy = "ToastClose", Rl = /* @__PURE__ */ T((e, n) => {
  const { __scopeToast: t, ...r } = e, o = Cy(Sy, t);
  return /* @__PURE__ */ h(kl, {
    asChild: !0
  }, /* @__PURE__ */ h(Y.button, x({
    type: "button"
  }, r, {
    ref: n,
    onClick: I(e.onClick, o.onClose)
  })));
}), kl = /* @__PURE__ */ T((e, n) => {
  const { __scopeToast: t, altText: r, ...o } = e;
  return /* @__PURE__ */ h(Y.div, x({
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": r || void 0
  }, o, {
    ref: n
  }));
});
function Al(e) {
  const n = [];
  return Array.from(e.childNodes).forEach((r) => {
    if (r.nodeType === r.TEXT_NODE && r.textContent && n.push(r.textContent), My(r)) {
      const o = r.ariaHidden || r.hidden || r.style.display === "none", a = r.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (a) {
          const i = r.dataset.radixToastAnnounceAlt;
          i && n.push(i);
        } else
          n.push(...Al(r));
    }
  }), n;
}
function Hn(e, n, t, { discrete: r }) {
  const o = t.originalEvent.currentTarget, a = new CustomEvent(e, {
    bubbles: !0,
    cancelable: !0,
    detail: t
  });
  n && o.addEventListener(e, n, {
    once: !0
  }), r ? Co(o, a) : o.dispatchEvent(a);
}
const mi = (e, n, t = 0) => {
  const r = Math.abs(e.x), o = Math.abs(e.y), a = r > o;
  return n === "left" || n === "right" ? a && r > t : !a && o > t;
};
function Dy(e = () => {
}) {
  const n = _e(e);
  Ie(() => {
    let t = 0, r = 0;
    return t = window.requestAnimationFrame(
      () => r = window.requestAnimationFrame(n)
    ), () => {
      window.cancelAnimationFrame(t), window.cancelAnimationFrame(r);
    };
  }, [
    n
  ]);
}
function My(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function Oy(e) {
  const n = [], t = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; t.nextNode(); )
    n.push(t.currentNode);
  return n;
}
function Kr(e) {
  const n = document.activeElement;
  return e.some((t) => t === n ? !0 : (t.focus(), document.activeElement !== n));
}
const Ny = Ml, Il = my, Ll = wy, Fl = Ey, Wl = Ty, jl = Nl, Vl = Rl, Ry = Ny, Hl = $.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ E.jsx(
  Il,
  {
    ref: t,
    className: M(
      "tw-reset ~fixed ~top-0 ~z-[100] ~flex ~max-h-screen ~w-full ~flex-col-reverse ~p-4 sm:~bottom-0 sm:~right-0 sm:~top-auto sm:~flex-col md:~max-w-[420px]",
      e
    ),
    ...n
  }
));
Hl.displayName = Il.displayName;
const ky = yt(
  [
    "~group ~pointer-events-auto ~relative ~flex ~w-full ~items-center ~justify-between ~space-x-2 ~overflow-hidden ~rounded-md ~border ~p-4 ~pr-6 ~shadow-lg ~transition-all",
    "data-[state=open]:~animate-in data-[state=open]:~slide-in-from-top-full data-[state=open]:sm:~slide-in-from-bottom-full",
    "data-[state=closed]:~animate-out data-[state=closed]:~fade-out-80 data-[state=closed]:~slide-out-to-right-full",
    "data-[swipe=move]:~translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:~transition-none",
    "data-[swipe=cancel]:~translate-x-0",
    "data-[swipe=end]:~translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=end]:~animate-out"
  ],
  {
    variants: {
      variant: {
        default: "~border ~bg-background",
        destructive: "destructive ~group ~border-destructive ~bg-destructive ~text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), Bl = $.forwardRef(({ className: e, variant: n, ...t }, r) => /* @__PURE__ */ E.jsx(
  Ll,
  {
    ref: r,
    className: M(ky({ variant: n }), e),
    ...t
  }
));
Bl.displayName = Ll.displayName;
const Ay = $.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ E.jsx(
  jl,
  {
    ref: t,
    className: M(
      "body-small ~inline-flex ~h-8 ~shrink-0 ~items-center ~justify-center ~rounded-md ~border ~bg-transparent ~px-3 ~transition-colors",
      "hover:~bg-secondary",
      "focus:~outline-none focus:~ring-1 focus:~ring-ring",
      "disabled:~pointer-events-none disabled:~opacity-50",
      "group-[.destructive]:~border-muted/40",
      "group-[.destructive]:hover:~border-destructive/30 group-[.destructive]:hover:~bg-destructive group-[.destructive]:hover:~text-destructive-foreground",
      "group-[.destructive]:focus:~ring-destructive",
      e
    ),
    ...n
  }
));
Ay.displayName = jl.displayName;
const Yl = $.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ E.jsx(
  Vl,
  {
    ref: t,
    className: M(
      "~absolute ~right-1 ~top-1 ~rounded-md ~p-1 ~text-foreground/50 ~opacity-0 ~transition-opacity",
      "hover:~text-foreground group-hover:~opacity-100",
      "focus:~opacity-100 focus:~outline-none focus:~ring-1",
      "group-[.destructive]:~text-red-300 group-[.destructive]:hover:~text-red-50",
      "group-[.destructive]:focus:~ring-red-400 group-[.destructive]:focus:~ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...n,
    children: /* @__PURE__ */ E.jsx(xs, { className: "~h-4 ~w-4" })
  }
));
Yl.displayName = Vl.displayName;
const Ul = $.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ E.jsx(
  Fl,
  {
    ref: t,
    className: M("body-large [&+div]:~text-xs", e),
    ...n
  }
));
Ul.displayName = Fl.displayName;
const zl = $.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ E.jsx(
  Wl,
  {
    ref: t,
    className: M("~opacity-90", e),
    ...n
  }
));
zl.displayName = Wl.displayName;
const Iy = 1, Ly = 1e6;
let Gr = 0;
function Fy() {
  return Gr = (Gr + 1) % Number.MAX_VALUE, Gr.toString();
}
const qr = /* @__PURE__ */ new Map(), bi = (e) => {
  if (qr.has(e))
    return;
  const n = setTimeout(() => {
    qr.delete(e), dn({
      type: "REMOVE_TOAST",
      toastId: e
    });
  }, Ly);
  qr.set(e, n);
}, Wy = (e, n) => {
  switch (n.type) {
    case "ADD_TOAST":
      return {
        ...e,
        toasts: [n.toast, ...e.toasts].slice(0, Iy)
      };
    case "UPDATE_TOAST":
      return {
        ...e,
        toasts: e.toasts.map(
          (t) => t.id === n.toast.id ? { ...t, ...n.toast } : t
        )
      };
    case "DISMISS_TOAST": {
      const { toastId: t } = n;
      return t ? bi(t) : e.toasts.forEach((r) => {
        bi(r.id);
      }), {
        ...e,
        toasts: e.toasts.map(
          (r) => r.id === t || t === void 0 ? {
            ...r,
            open: !1
          } : r
        )
      };
    }
    case "REMOVE_TOAST":
      return n.toastId === void 0 ? {
        ...e,
        toasts: []
      } : {
        ...e,
        toasts: e.toasts.filter((t) => t.id !== n.toastId)
      };
  }
}, Kn = [];
let Gn = { toasts: [] };
function dn(e) {
  Gn = Wy(Gn, e), Kn.forEach((n) => {
    n(Gn);
  });
}
function jy({ ...e }) {
  const n = Fy(), t = (o) => dn({
    type: "UPDATE_TOAST",
    toast: { ...o, id: n }
  }), r = () => dn({ type: "DISMISS_TOAST", toastId: n });
  return dn({
    type: "ADD_TOAST",
    toast: {
      ...e,
      id: n,
      open: !0,
      onOpenChange: (o) => {
        o || r();
      }
    }
  }), {
    id: n,
    dismiss: r,
    update: t
  };
}
function Vy() {
  const [e, n] = $.useState(Gn);
  return $.useEffect(() => (Kn.push(n), () => {
    const t = Kn.indexOf(n);
    t > -1 && Kn.splice(t, 1);
  }), [e]), {
    ...e,
    toast: jy,
    dismiss: (t) => dn({ type: "DISMISS_TOAST", toastId: t })
  };
}
function Qw() {
  const { toasts: e } = Vy();
  return /* @__PURE__ */ E.jsxs(Ry, { children: [
    e.map(function({ id: n, title: t, description: r, action: o, ...a }) {
      return /* @__PURE__ */ E.jsxs(Bl, { ...a, children: [
        /* @__PURE__ */ E.jsxs("div", { className: "~grid ~gap-1", children: [
          t && /* @__PURE__ */ E.jsx(Ul, { children: t }),
          r && /* @__PURE__ */ E.jsx(zl, { children: r })
        ] }),
        o,
        /* @__PURE__ */ E.jsx(Yl, {})
      ] }, n);
    }),
    /* @__PURE__ */ E.jsx(Hl, {})
  ] });
}
const Hy = /* @__PURE__ */ T((e, n) => {
  const { pressed: t, defaultPressed: r = !1, onPressedChange: o, ...a } = e, [i = !1, s] = Ee({
    prop: t,
    onChange: o,
    defaultProp: r
  });
  return /* @__PURE__ */ h(Y.button, x({
    type: "button",
    "aria-pressed": i,
    "data-state": i ? "on" : "off",
    "data-disabled": e.disabled ? "" : void 0
  }, a, {
    ref: n,
    onClick: I(e.onClick, () => {
      e.disabled || s(!i);
    })
  }));
}), Kl = Hy, By = yt(
  [
    "tw-reset ~inline-flex ~h-9 ~items-center ~justify-center ~rounded-md ~bg-transparent ~px-3 ~transition-none",
    "hover:~bg-accent hover:~text-muted-foreground",
    "focus-visible:~outline-none focus-visible:~ring-1 focus-visible:~ring-ring",
    "disabled:~pointer-events-none disabled:~opacity-50",
    "data-[state=on]:~bg-secondary data-[state=on]:~text-accent-foreground"
  ],
  {
    variants: {
      style: {
        default: "",
        outline: "~border ~border-input ~shadow-sm"
      },
      shape: {
        default: "",
        pill: "~rounded-full"
      },
      size: {
        default: "",
        xs: "~text-xs",
        sm: "~text-sm",
        lg: "~text-lg"
      }
    },
    defaultVariants: {
      style: "default",
      size: "default"
    }
  }
), Yy = $.forwardRef(({ className: e, style: n, size: t, shape: r, ...o }, a) => /* @__PURE__ */ E.jsx(
  Kl,
  {
    ref: a,
    className: M(By({ style: n, size: t, shape: r, className: e })),
    ...o
  }
));
Yy.displayName = Kl.displayName;
const [Sr, Jw] = xe("Tooltip", [
  xt
]), fa = xt(), Uy = "TooltipProvider", zy = 700, $o = "tooltip.open", [Ky, pa] = Sr(Uy), Gy = (e) => {
  const { __scopeTooltip: n, delayDuration: t = zy, skipDelayDuration: r = 300, disableHoverableContent: o = !1, children: a } = e, [i, s] = z(!0), c = R(!1), l = R(0);
  return K(() => {
    const u = l.current;
    return () => window.clearTimeout(u);
  }, []), /* @__PURE__ */ h(Ky, {
    scope: n,
    isOpenDelayed: i,
    delayDuration: t,
    onOpen: ee(() => {
      window.clearTimeout(l.current), s(!1);
    }, []),
    onClose: ee(() => {
      window.clearTimeout(l.current), l.current = window.setTimeout(
        () => s(!0),
        r
      );
    }, [
      r
    ]),
    isPointerInTransitRef: c,
    onPointerInTransitChange: ee((u) => {
      c.current = u;
    }, []),
    disableHoverableContent: o
  }, a);
}, va = "Tooltip", [qy, Dr] = Sr(va), Xy = (e) => {
  const { __scopeTooltip: n, children: t, open: r, defaultOpen: o = !1, onOpenChange: a, disableHoverableContent: i, delayDuration: s } = e, c = pa(va, e.__scopeTooltip), l = fa(n), [u, d] = z(null), f = De(), p = R(0), v = i ?? c.disableHoverableContent, m = s ?? c.delayDuration, b = R(!1), [y = !1, g] = Ee({
    prop: r,
    defaultProp: o,
    onChange: (P) => {
      P ? (c.onOpen(), document.dispatchEvent(new CustomEvent($o))) : c.onClose(), a == null || a(P);
    }
  }), w = Xe(() => y ? b.current ? "delayed-open" : "instant-open" : "closed", [
    y
  ]), _ = ee(() => {
    window.clearTimeout(p.current), b.current = !1, g(!0);
  }, [
    g
  ]), S = ee(() => {
    window.clearTimeout(p.current), g(!1);
  }, [
    g
  ]), N = ee(() => {
    window.clearTimeout(p.current), p.current = window.setTimeout(() => {
      b.current = !0, g(!0);
    }, m);
  }, [
    m,
    g
  ]);
  return K(() => () => window.clearTimeout(p.current), []), /* @__PURE__ */ h(Sn, l, /* @__PURE__ */ h(qy, {
    scope: n,
    contentId: f,
    open: y,
    stateAttribute: w,
    trigger: u,
    onTriggerChange: d,
    onTriggerEnter: ee(() => {
      c.isOpenDelayed ? N() : _();
    }, [
      c.isOpenDelayed,
      N,
      _
    ]),
    onTriggerLeave: ee(() => {
      v ? S() : window.clearTimeout(p.current);
    }, [
      S,
      v
    ]),
    onOpen: _,
    onClose: S,
    disableHoverableContent: v
  }, t));
}, hi = "TooltipTrigger", Zy = /* @__PURE__ */ T((e, n) => {
  const { __scopeTooltip: t, ...r } = e, o = Dr(hi, t), a = pa(hi, t), i = fa(t), s = R(null), c = re(n, s, o.onTriggerChange), l = R(!1), u = R(!1), d = ee(
    () => l.current = !1,
    []
  );
  return K(() => () => document.removeEventListener("pointerup", d), [
    d
  ]), /* @__PURE__ */ h(hr, x({
    asChild: !0
  }, i), /* @__PURE__ */ h(Y.button, x({
    // We purposefully avoid adding `type=button` here because tooltip triggers are also
    // commonly anchors and the anchor `type` attribute signifies MIME type.
    "aria-describedby": o.open ? o.contentId : void 0,
    "data-state": o.stateAttribute
  }, r, {
    ref: c,
    onPointerMove: I(e.onPointerMove, (f) => {
      f.pointerType !== "touch" && !u.current && !a.isPointerInTransitRef.current && (o.onTriggerEnter(), u.current = !0);
    }),
    onPointerLeave: I(e.onPointerLeave, () => {
      o.onTriggerLeave(), u.current = !1;
    }),
    onPointerDown: I(e.onPointerDown, () => {
      l.current = !0, document.addEventListener("pointerup", d, {
        once: !0
      });
    }),
    onFocus: I(e.onFocus, () => {
      l.current || o.onOpen();
    }),
    onBlur: I(e.onBlur, o.onClose),
    onClick: I(e.onClick, o.onClose)
  })));
}), Qy = "TooltipPortal", [ex, Jy] = Sr(Qy, {
  forceMount: void 0
}), wn = "TooltipContent", ew = /* @__PURE__ */ T((e, n) => {
  const t = Jy(wn, e.__scopeTooltip), { forceMount: r = t.forceMount, side: o = "top", ...a } = e, i = Dr(wn, e.__scopeTooltip);
  return /* @__PURE__ */ h(Me, {
    present: r || i.open
  }, i.disableHoverableContent ? /* @__PURE__ */ h(Gl, x({
    side: o
  }, a, {
    ref: n
  })) : /* @__PURE__ */ h(tw, x({
    side: o
  }, a, {
    ref: n
  })));
}), tw = /* @__PURE__ */ T((e, n) => {
  const t = Dr(wn, e.__scopeTooltip), r = pa(wn, e.__scopeTooltip), o = R(null), a = re(n, o), [i, s] = z(null), { trigger: c, onClose: l } = t, u = o.current, { onPointerInTransitChange: d } = r, f = ee(() => {
    s(null), d(!1);
  }, [
    d
  ]), p = ee((v, m) => {
    const b = v.currentTarget, y = {
      x: v.clientX,
      y: v.clientY
    }, g = rw(y, b.getBoundingClientRect()), w = ow(y, g), _ = aw(m.getBoundingClientRect()), S = sw([
      ...w,
      ..._
    ]);
    s(S), d(!0);
  }, [
    d
  ]);
  return K(() => () => f(), [
    f
  ]), K(() => {
    if (c && u) {
      const v = (b) => p(b, u), m = (b) => p(b, c);
      return c.addEventListener("pointerleave", v), u.addEventListener("pointerleave", m), () => {
        c.removeEventListener("pointerleave", v), u.removeEventListener("pointerleave", m);
      };
    }
  }, [
    c,
    u,
    p,
    f
  ]), K(() => {
    if (i) {
      const v = (m) => {
        const b = m.target, y = {
          x: m.clientX,
          y: m.clientY
        }, g = (c == null ? void 0 : c.contains(b)) || (u == null ? void 0 : u.contains(b)), w = !iw(y, i);
        g ? f() : w && (f(), l());
      };
      return document.addEventListener("pointermove", v), () => document.removeEventListener("pointermove", v);
    }
  }, [
    c,
    u,
    i,
    l,
    f
  ]), /* @__PURE__ */ h(Gl, x({}, e, {
    ref: a
  }));
}), [nw, tx] = Sr(va, {
  isInside: !1
}), Gl = /* @__PURE__ */ T((e, n) => {
  const { __scopeTooltip: t, children: r, "aria-label": o, onEscapeKeyDown: a, onPointerDownOutside: i, ...s } = e, c = Dr(wn, t), l = fa(t), { onClose: u } = c;
  return K(() => (document.addEventListener($o, u), () => document.removeEventListener($o, u)), [
    u
  ]), K(() => {
    if (c.trigger) {
      const d = (f) => {
        const p = f.target;
        p != null && p.contains(c.trigger) && u();
      };
      return window.addEventListener("scroll", d, {
        capture: !0
      }), () => window.removeEventListener("scroll", d, {
        capture: !0
      });
    }
  }, [
    c.trigger,
    u
  ]), /* @__PURE__ */ h(Jt, {
    asChild: !0,
    disableOutsidePointerEvents: !1,
    onEscapeKeyDown: a,
    onPointerDownOutside: i,
    onFocusOutside: (d) => d.preventDefault(),
    onDismiss: u
  }, /* @__PURE__ */ h(gr, x({
    "data-state": c.stateAttribute
  }, l, s, {
    ref: n,
    style: {
      ...s.style,
      "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
      "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
      "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }), /* @__PURE__ */ h(xo, null, r), /* @__PURE__ */ h(nw, {
    scope: t,
    isInside: !0
  }, /* @__PURE__ */ h(f1, {
    id: c.contentId,
    role: "tooltip"
  }, o || r))));
});
function rw(e, n) {
  const t = Math.abs(n.top - e.y), r = Math.abs(n.bottom - e.y), o = Math.abs(n.right - e.x), a = Math.abs(n.left - e.x);
  switch (Math.min(t, r, o, a)) {
    case a:
      return "left";
    case o:
      return "right";
    case t:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function ow(e, n, t = 5) {
  const r = [];
  switch (n) {
    case "top":
      r.push({
        x: e.x - t,
        y: e.y + t
      }, {
        x: e.x + t,
        y: e.y + t
      });
      break;
    case "bottom":
      r.push({
        x: e.x - t,
        y: e.y - t
      }, {
        x: e.x + t,
        y: e.y - t
      });
      break;
    case "left":
      r.push({
        x: e.x + t,
        y: e.y - t
      }, {
        x: e.x + t,
        y: e.y + t
      });
      break;
    case "right":
      r.push({
        x: e.x - t,
        y: e.y - t
      }, {
        x: e.x - t,
        y: e.y + t
      });
      break;
  }
  return r;
}
function aw(e) {
  const { top: n, right: t, bottom: r, left: o } = e;
  return [
    {
      x: o,
      y: n
    },
    {
      x: t,
      y: n
    },
    {
      x: t,
      y: r
    },
    {
      x: o,
      y: r
    }
  ];
}
function iw(e, n) {
  const { x: t, y: r } = e;
  let o = !1;
  for (let a = 0, i = n.length - 1; a < n.length; i = a++) {
    const s = n[a].x, c = n[a].y, l = n[i].x, u = n[i].y;
    c > r != u > r && t < (l - s) * (r - c) / (u - c) + s && (o = !o);
  }
  return o;
}
function sw(e) {
  const n = e.slice();
  return n.sort((t, r) => t.x < r.x ? -1 : t.x > r.x ? 1 : t.y < r.y ? -1 : t.y > r.y ? 1 : 0), cw(n);
}
function cw(e) {
  if (e.length <= 1)
    return e.slice();
  const n = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const a = n[n.length - 1], i = n[n.length - 2];
      if ((a.x - i.x) * (o.y - i.y) >= (a.y - i.y) * (o.x - i.x))
        n.pop();
      else
        break;
    }
    n.push(o);
  }
  n.pop();
  const t = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const a = t[t.length - 1], i = t[t.length - 2];
      if ((a.x - i.x) * (o.y - i.y) >= (a.y - i.y) * (o.x - i.x))
        t.pop();
      else
        break;
    }
    t.push(o);
  }
  return t.pop(), n.length === 1 && t.length === 1 && n[0].x === t[0].x && n[0].y === t[0].y ? n : n.concat(t);
}
const lw = Gy, dw = Xy, uw = Zy, ql = ew, nx = lw, rx = dw, ox = $.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ E.jsx(
  uw,
  {
    ref: t,
    className: M(
      "tw-reset disabled:~cursor-not-allowed disabled:~opacity-50",
      e
    ),
    ...n
  }
)), fw = $.forwardRef(({ className: e, sideOffset: n = 4, ...t }, r) => /* @__PURE__ */ E.jsx(
  ql,
  {
    ref: r,
    sideOffset: n,
    className: M(
      "tw-reset body-x-small ~z-50 ~overflow-hidden ~rounded-md ~bg-accent ~px-3 ~py-1.5 ~text-accent-foreground ~animate-in ~fade-in-0 ~zoom-in-95",
      "data-[state=closed]:~animate-out data-[state=closed]:~fade-out-0 data-[state=closed]:~zoom-out-95",
      "data-[side=bottom]:~slide-in-from-top-2 data-[side=left]:~slide-in-from-right-2 data-[side=right]:~slide-in-from-left-2 data-[side=top]:~slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
fw.displayName = ql.displayName;
export {
  xw as Accordion,
  Du as AccordionContent,
  Yd as AccordionHeader,
  Pu as AccordionItem,
  Su as AccordionTrigger,
  Ew as AlertDialog,
  vp as AlertDialogAction,
  mp as AlertDialogCancel,
  lp as AlertDialogContent,
  pp as AlertDialogDescription,
  up as AlertDialogFooter,
  dp as AlertDialogHeader,
  fp as AlertDialogTitle,
  Tw as AlertDialogTrigger,
  _p as Avatar,
  Tp as AvatarFallback,
  Ep as AvatarImage,
  Sw as Badge,
  ys as Button,
  io as Calendar,
  q0 as Card,
  J0 as CardContent,
  Q0 as CardDescription,
  eb as CardFooter,
  X0 as CardHeader,
  Z0 as CardTitle,
  cd as Caret,
  lb as Checkbox,
  $a as ChevronDown,
  mw as ChevronRight,
  bw as Copy,
  Mw as DatePicker,
  Ow as Dialog,
  db as DialogContent,
  vb as DialogDescription,
  fb as DialogFooter,
  ub as DialogHeader,
  pb as DialogTitle,
  Nw as DialogTrigger,
  yw as DotsMenuVertical,
  Aw as DropdownMenu,
  _g as DropdownMenuCheckboxItem,
  xg as DropdownMenuContent,
  Iw as DropdownMenuGroup,
  Cg as DropdownMenuItem,
  Tg as DropdownMenuLabel,
  Lw as DropdownMenuPortal,
  Ww as DropdownMenuRadioGroup,
  Eg as DropdownMenuRadioItem,
  Pg as DropdownMenuSeparator,
  Sg as DropdownMenuShortcut,
  Fw as DropdownMenuSub,
  wg as DropdownMenuSubContent,
  yg as DropdownMenuSubTrigger,
  jw as DropdownMenuTrigger,
  hw as Edit,
  $w as Globe,
  Dg as Input,
  Ng as Label,
  zg as Popover,
  Vc as PopoverContent,
  Kg as PopoverTrigger,
  d1 as RadioGroup,
  u1 as RadioGroupItem,
  Yw as Select,
  e$ as SelectContent,
  Uw as SelectGroup,
  n$ as SelectItem,
  t$ as SelectLabel,
  r$ as SelectSeparator,
  J1 as SelectTrigger,
  zw as SelectValue,
  i$ as Separator,
  D$ as Slider,
  F$ as Switch,
  W$ as Table,
  V$ as TableBody,
  z$ as TableCaption,
  U$ as TableCell,
  H$ as TableFooter,
  Y$ as TableHead,
  j$ as TableHeader,
  B$ as TableRow,
  Xw as Tabs,
  cy as TabsContent,
  iy as TabsList,
  sy as TabsTrigger,
  ly as Textarea,
  Bl as Toast,
  Ay as ToastAction,
  Yl as ToastClose,
  zl as ToastDescription,
  Ry as ToastProvider,
  Ul as ToastTitle,
  Hl as ToastViewport,
  Qw as Toaster,
  Yy as Toggle,
  rx as Tooltip,
  fw as TooltipContent,
  nx as TooltipProvider,
  ox as TooltipTrigger,
  gw as TrashCan,
  fn as buttonVariants,
  Wy as reducer,
  jy as toast,
  Vy as useToast
};
