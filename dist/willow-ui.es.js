import * as P from "react";
import x, { createContext as Ve, useMemo as Qe, createElement as h, useContext as We, useCallback as te, useLayoutEffect as ur, useRef as A, useEffect as z, useState as G, forwardRef as T, Children as Dt, isValidElement as Jn, cloneElement as Eo, Fragment as Rt, useReducer as Sd } from "react";
import * as Pd from "react-dom";
import Dd, { flushSync as Oi, createPortal as To } from "react-dom";
var oo = { exports: {} }, ln = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ka;
function Md() {
  if (ka)
    return ln;
  ka = 1;
  var e = x, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(s, c, l) {
    var u, d = {}, f = null, p = null;
    l !== void 0 && (f = "" + l), c.key !== void 0 && (f = "" + c.key), c.ref !== void 0 && (p = c.ref);
    for (u in c)
      r.call(c, u) && !a.hasOwnProperty(u) && (d[u] = c[u]);
    if (s && s.defaultProps)
      for (u in c = s.defaultProps, c)
        d[u] === void 0 && (d[u] = c[u]);
    return { $$typeof: t, type: s, key: f, ref: p, props: d, _owner: o.current };
  }
  return ln.Fragment = n, ln.jsx = i, ln.jsxs = i, ln;
}
var dn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Aa;
function Od() {
  return Aa || (Aa = 1, process.env.NODE_ENV !== "production" && function() {
    var e = x, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), v = Symbol.iterator, m = "@@iterator";
    function b(y) {
      if (y === null || typeof y != "object")
        return null;
      var I = v && y[v] || y[m];
      return typeof I == "function" ? I : null;
    }
    var $ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(y) {
      {
        for (var I = arguments.length, B = new Array(I > 1 ? I - 1 : 0), ne = 1; ne < I; ne++)
          B[ne - 1] = arguments[ne];
        w("error", y, B);
      }
    }
    function w(y, I, B) {
      {
        var ne = $.ReactDebugCurrentFrame, fe = ne.getStackAddendum();
        fe !== "" && (I += "%s", B = B.concat([fe]));
        var be = B.map(function(le) {
          return String(le);
        });
        be.unshift("Warning: " + I), Function.prototype.apply.call(console[y], console, be);
      }
    }
    var E = !1, S = !1, L = !1, M = !1, W = !1, H;
    H = Symbol.for("react.module.reference");
    function X(y) {
      return !!(typeof y == "string" || typeof y == "function" || y === r || y === a || W || y === o || y === l || y === u || M || y === p || E || S || L || typeof y == "object" && y !== null && (y.$$typeof === f || y.$$typeof === d || y.$$typeof === i || y.$$typeof === s || y.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      y.$$typeof === H || y.getModuleId !== void 0));
    }
    function U(y, I, B) {
      var ne = y.displayName;
      if (ne)
        return ne;
      var fe = I.displayName || I.name || "";
      return fe !== "" ? B + "(" + fe + ")" : B;
    }
    function q(y) {
      return y.displayName || "Context";
    }
    function Y(y) {
      if (y == null)
        return null;
      if (typeof y.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof y == "function")
        return y.displayName || y.name || null;
      if (typeof y == "string")
        return y;
      switch (y) {
        case r:
          return "Fragment";
        case n:
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
      if (typeof y == "object")
        switch (y.$$typeof) {
          case s:
            var I = y;
            return q(I) + ".Consumer";
          case i:
            var B = y;
            return q(B._context) + ".Provider";
          case c:
            return U(y, y.render, "ForwardRef");
          case d:
            var ne = y.displayName || null;
            return ne !== null ? ne : Y(y.type) || "Memo";
          case f: {
            var fe = y, be = fe._payload, le = fe._init;
            try {
              return Y(le(be));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, O = 0, j, R, N, V, Q, oe, ae;
    function $e() {
    }
    $e.__reactDisabledLog = !0;
    function xe() {
      {
        if (O === 0) {
          j = console.log, R = console.info, N = console.warn, V = console.error, Q = console.group, oe = console.groupCollapsed, ae = console.groupEnd;
          var y = {
            configurable: !0,
            enumerable: !0,
            value: $e,
            writable: !0
          };
          Object.defineProperties(console, {
            info: y,
            log: y,
            warn: y,
            error: y,
            group: y,
            groupCollapsed: y,
            groupEnd: y
          });
        }
        O++;
      }
    }
    function Me() {
      {
        if (O--, O === 0) {
          var y = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, y, {
              value: j
            }),
            info: D({}, y, {
              value: R
            }),
            warn: D({}, y, {
              value: N
            }),
            error: D({}, y, {
              value: V
            }),
            group: D({}, y, {
              value: Q
            }),
            groupCollapsed: D({}, y, {
              value: oe
            }),
            groupEnd: D({}, y, {
              value: ae
            })
          });
        }
        O < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Pe = $.ReactCurrentDispatcher, Z;
    function se(y, I, B) {
      {
        if (Z === void 0)
          try {
            throw Error();
          } catch (fe) {
            var ne = fe.stack.trim().match(/\n( *(at )?)/);
            Z = ne && ne[1] || "";
          }
        return `
` + Z + y;
      }
    }
    var ve = !1, de;
    {
      var pe = typeof WeakMap == "function" ? WeakMap : Map;
      de = new pe();
    }
    function ue(y, I) {
      if (!y || ve)
        return "";
      {
        var B = de.get(y);
        if (B !== void 0)
          return B;
      }
      var ne;
      ve = !0;
      var fe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var be;
      be = Pe.current, Pe.current = null, xe();
      try {
        if (I) {
          var le = function() {
            throw Error();
          };
          if (Object.defineProperty(le.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(le, []);
            } catch (nt) {
              ne = nt;
            }
            Reflect.construct(y, [], le);
          } else {
            try {
              le.call();
            } catch (nt) {
              ne = nt;
            }
            y.call(le.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (nt) {
            ne = nt;
          }
          y();
        }
      } catch (nt) {
        if (nt && ne && typeof nt.stack == "string") {
          for (var ce = nt.stack.split(`
`), ke = ne.stack.split(`
`), ye = ce.length - 1, Ce = ke.length - 1; ye >= 1 && Ce >= 0 && ce[ye] !== ke[Ce]; )
            Ce--;
          for (; ye >= 1 && Ce >= 0; ye--, Ce--)
            if (ce[ye] !== ke[Ce]) {
              if (ye !== 1 || Ce !== 1)
                do
                  if (ye--, Ce--, Ce < 0 || ce[ye] !== ke[Ce]) {
                    var Be = `
` + ce[ye].replace(" at new ", " at ");
                    return y.displayName && Be.includes("<anonymous>") && (Be = Be.replace("<anonymous>", y.displayName)), typeof y == "function" && de.set(y, Be), Be;
                  }
                while (ye >= 1 && Ce >= 0);
              break;
            }
        }
      } finally {
        ve = !1, Pe.current = be, Me(), Error.prepareStackTrace = fe;
      }
      var Bt = y ? y.displayName || y.name : "", Ra = Bt ? se(Bt) : "";
      return typeof y == "function" && de.set(y, Ra), Ra;
    }
    function Re(y, I, B) {
      return ue(y, !1);
    }
    function De(y) {
      var I = y.prototype;
      return !!(I && I.isReactComponent);
    }
    function Xe(y, I, B) {
      if (y == null)
        return "";
      if (typeof y == "function")
        return ue(y, De(y));
      if (typeof y == "string")
        return se(y);
      switch (y) {
        case l:
          return se("Suspense");
        case u:
          return se("SuspenseList");
      }
      if (typeof y == "object")
        switch (y.$$typeof) {
          case c:
            return Re(y.render);
          case d:
            return Xe(y.type, I, B);
          case f: {
            var ne = y, fe = ne._payload, be = ne._init;
            try {
              return Xe(be(fe), I, B);
            } catch {
            }
          }
        }
      return "";
    }
    var Ze = Object.prototype.hasOwnProperty, ft = {}, In = $.ReactDebugCurrentFrame;
    function Wt(y) {
      if (y) {
        var I = y._owner, B = Xe(y.type, y._source, I ? I.type : null);
        In.setExtraStackFrame(B);
      } else
        In.setExtraStackFrame(null);
    }
    function jt(y, I, B, ne, fe) {
      {
        var be = Function.call.bind(Ze);
        for (var le in y)
          if (be(y, le)) {
            var ce = void 0;
            try {
              if (typeof y[le] != "function") {
                var ke = Error((ne || "React class") + ": " + B + " type `" + le + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof y[le] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ke.name = "Invariant Violation", ke;
              }
              ce = y[le](I, le, ne, B, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ye) {
              ce = ye;
            }
            ce && !(ce instanceof Error) && (Wt(fe), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ne || "React class", B, le, typeof ce), Wt(null)), ce instanceof Error && !(ce.message in ft) && (ft[ce.message] = !0, Wt(fe), g("Failed %s type: %s", B, ce.message), Wt(null));
          }
      }
    }
    var cd = Array.isArray;
    function Ir(y) {
      return cd(y);
    }
    function ld(y) {
      {
        var I = typeof Symbol == "function" && Symbol.toStringTag, B = I && y[Symbol.toStringTag] || y.constructor.name || "Object";
        return B;
      }
    }
    function dd(y) {
      try {
        return Ca(y), !1;
      } catch {
        return !0;
      }
    }
    function Ca(y) {
      return "" + y;
    }
    function _a(y) {
      if (dd(y))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ld(y)), Ca(y);
    }
    var cn = $.ReactCurrentOwner, ud = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ea, Ta, Lr;
    Lr = {};
    function fd(y) {
      if (Ze.call(y, "ref")) {
        var I = Object.getOwnPropertyDescriptor(y, "ref").get;
        if (I && I.isReactWarning)
          return !1;
      }
      return y.ref !== void 0;
    }
    function pd(y) {
      if (Ze.call(y, "key")) {
        var I = Object.getOwnPropertyDescriptor(y, "key").get;
        if (I && I.isReactWarning)
          return !1;
      }
      return y.key !== void 0;
    }
    function vd(y, I) {
      if (typeof y.ref == "string" && cn.current && I && cn.current.stateNode !== I) {
        var B = Y(cn.current.type);
        Lr[B] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Y(cn.current.type), y.ref), Lr[B] = !0);
      }
    }
    function md(y, I) {
      {
        var B = function() {
          Ea || (Ea = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", I));
        };
        B.isReactWarning = !0, Object.defineProperty(y, "key", {
          get: B,
          configurable: !0
        });
      }
    }
    function bd(y, I) {
      {
        var B = function() {
          Ta || (Ta = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", I));
        };
        B.isReactWarning = !0, Object.defineProperty(y, "ref", {
          get: B,
          configurable: !0
        });
      }
    }
    var hd = function(y, I, B, ne, fe, be, le) {
      var ce = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: y,
        key: I,
        ref: B,
        props: le,
        // Record the component responsible for creating this element.
        _owner: be
      };
      return ce._store = {}, Object.defineProperty(ce._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ce, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ne
      }), Object.defineProperty(ce, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: fe
      }), Object.freeze && (Object.freeze(ce.props), Object.freeze(ce)), ce;
    };
    function gd(y, I, B, ne, fe) {
      {
        var be, le = {}, ce = null, ke = null;
        B !== void 0 && (_a(B), ce = "" + B), pd(I) && (_a(I.key), ce = "" + I.key), fd(I) && (ke = I.ref, vd(I, fe));
        for (be in I)
          Ze.call(I, be) && !ud.hasOwnProperty(be) && (le[be] = I[be]);
        if (y && y.defaultProps) {
          var ye = y.defaultProps;
          for (be in ye)
            le[be] === void 0 && (le[be] = ye[be]);
        }
        if (ce || ke) {
          var Ce = typeof y == "function" ? y.displayName || y.name || "Unknown" : y;
          ce && md(le, Ce), ke && bd(le, Ce);
        }
        return hd(y, ce, ke, fe, ne, cn.current, le);
      }
    }
    var Fr = $.ReactCurrentOwner, Sa = $.ReactDebugCurrentFrame;
    function Vt(y) {
      if (y) {
        var I = y._owner, B = Xe(y.type, y._source, I ? I.type : null);
        Sa.setExtraStackFrame(B);
      } else
        Sa.setExtraStackFrame(null);
    }
    var Wr;
    Wr = !1;
    function jr(y) {
      return typeof y == "object" && y !== null && y.$$typeof === t;
    }
    function Pa() {
      {
        if (Fr.current) {
          var y = Y(Fr.current.type);
          if (y)
            return `

Check the render method of \`` + y + "`.";
        }
        return "";
      }
    }
    function $d(y) {
      {
        if (y !== void 0) {
          var I = y.fileName.replace(/^.*[\\\/]/, ""), B = y.lineNumber;
          return `

Check your code at ` + I + ":" + B + ".";
        }
        return "";
      }
    }
    var Da = {};
    function yd(y) {
      {
        var I = Pa();
        if (!I) {
          var B = typeof y == "string" ? y : y.displayName || y.name;
          B && (I = `

Check the top-level render call using <` + B + ">.");
        }
        return I;
      }
    }
    function Ma(y, I) {
      {
        if (!y._store || y._store.validated || y.key != null)
          return;
        y._store.validated = !0;
        var B = yd(I);
        if (Da[B])
          return;
        Da[B] = !0;
        var ne = "";
        y && y._owner && y._owner !== Fr.current && (ne = " It was passed a child from " + Y(y._owner.type) + "."), Vt(y), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', B, ne), Vt(null);
      }
    }
    function Oa(y, I) {
      {
        if (typeof y != "object")
          return;
        if (Ir(y))
          for (var B = 0; B < y.length; B++) {
            var ne = y[B];
            jr(ne) && Ma(ne, I);
          }
        else if (jr(y))
          y._store && (y._store.validated = !0);
        else if (y) {
          var fe = b(y);
          if (typeof fe == "function" && fe !== y.entries)
            for (var be = fe.call(y), le; !(le = be.next()).done; )
              jr(le.value) && Ma(le.value, I);
        }
      }
    }
    function wd(y) {
      {
        var I = y.type;
        if (I == null || typeof I == "string")
          return;
        var B;
        if (typeof I == "function")
          B = I.propTypes;
        else if (typeof I == "object" && (I.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        I.$$typeof === d))
          B = I.propTypes;
        else
          return;
        if (B) {
          var ne = Y(I);
          jt(B, y.props, "prop", ne, y);
        } else if (I.PropTypes !== void 0 && !Wr) {
          Wr = !0;
          var fe = Y(I);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", fe || "Unknown");
        }
        typeof I.getDefaultProps == "function" && !I.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function xd(y) {
      {
        for (var I = Object.keys(y.props), B = 0; B < I.length; B++) {
          var ne = I[B];
          if (ne !== "children" && ne !== "key") {
            Vt(y), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ne), Vt(null);
            break;
          }
        }
        y.ref !== null && (Vt(y), g("Invalid attribute `ref` supplied to `React.Fragment`."), Vt(null));
      }
    }
    function Na(y, I, B, ne, fe, be) {
      {
        var le = X(y);
        if (!le) {
          var ce = "";
          (y === void 0 || typeof y == "object" && y !== null && Object.keys(y).length === 0) && (ce += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ke = $d(fe);
          ke ? ce += ke : ce += Pa();
          var ye;
          y === null ? ye = "null" : Ir(y) ? ye = "array" : y !== void 0 && y.$$typeof === t ? (ye = "<" + (Y(y.type) || "Unknown") + " />", ce = " Did you accidentally export a JSX literal instead of a component?") : ye = typeof y, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ye, ce);
        }
        var Ce = gd(y, I, B, fe, be);
        if (Ce == null)
          return Ce;
        if (le) {
          var Be = I.children;
          if (Be !== void 0)
            if (ne)
              if (Ir(Be)) {
                for (var Bt = 0; Bt < Be.length; Bt++)
                  Oa(Be[Bt], y);
                Object.freeze && Object.freeze(Be);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Oa(Be, y);
        }
        return y === r ? xd(Ce) : wd(Ce), Ce;
      }
    }
    function Cd(y, I, B) {
      return Na(y, I, B, !0);
    }
    function _d(y, I, B) {
      return Na(y, I, B, !1);
    }
    var Ed = _d, Td = Cd;
    dn.Fragment = r, dn.jsx = Ed, dn.jsxs = Td;
  }()), dn;
}
process.env.NODE_ENV === "production" ? oo.exports = Md() : oo.exports = Od();
var _ = oo.exports;
function C() {
  return C = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, C.apply(this, arguments);
}
function Nd(e, t) {
  const n = /* @__PURE__ */ Ve(t);
  function r(a) {
    const { children: i, ...s } = a, c = Qe(
      () => s,
      Object.values(s)
    );
    return /* @__PURE__ */ h(n.Provider, {
      value: c
    }, i);
  }
  function o(a) {
    const i = We(n);
    if (i)
      return i;
    if (t !== void 0)
      return t;
    throw new Error(`\`${a}\` must be used within \`${e}\``);
  }
  return r.displayName = e + "Provider", [
    r,
    o
  ];
}
function _e(e, t = []) {
  let n = [];
  function r(a, i) {
    const s = /* @__PURE__ */ Ve(i), c = n.length;
    n = [
      ...n,
      i
    ];
    function l(d) {
      const { scope: f, children: p, ...v } = d, m = (f == null ? void 0 : f[e][c]) || s, b = Qe(
        () => v,
        Object.values(v)
      );
      return /* @__PURE__ */ h(m.Provider, {
        value: b
      }, p);
    }
    function u(d, f) {
      const p = (f == null ? void 0 : f[e][c]) || s, v = We(p);
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
    const a = n.map((i) => /* @__PURE__ */ Ve(i));
    return function(s) {
      const c = (s == null ? void 0 : s[e]) || a;
      return Qe(
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
    Rd(o, ...t)
  ];
}
function Rd(...e) {
  const t = e[0];
  if (e.length === 1)
    return t;
  const n = () => {
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
      return Qe(
        () => ({
          [`__scope${t.scopeName}`]: i
        }),
        [
          i
        ]
      );
    };
  };
  return n.scopeName = t.scopeName, n;
}
function kd(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function fr(...e) {
  return (t) => e.forEach(
    (n) => kd(n, t)
  );
}
function re(...e) {
  return te(fr(...e), e);
}
function F(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
const Fe = globalThis != null && globalThis.document ? ur : () => {
}, Ad = P["useId".toString()] || (() => {
});
let Id = 0;
function Oe(e) {
  const [t, n] = P.useState(Ad());
  return Fe(() => {
    e || n(
      (r) => r ?? String(Id++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
function Ee(e) {
  const t = A(e);
  return z(() => {
    t.current = e;
  }), Qe(
    () => (...n) => {
      var r;
      return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
    },
    []
  );
}
function Te({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = Ld({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, i = a ? e : r, s = Ee(n), c = te((l) => {
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
function Ld({ defaultProp: e, onChange: t }) {
  const n = G(e), [r] = n, o = A(r), a = Ee(t);
  return z(() => {
    o.current !== r && (a(r), o.current = r);
  }, [
    r,
    o,
    a
  ]), n;
}
const lt = /* @__PURE__ */ T((e, t) => {
  const { children: n, ...r } = e, o = Dt.toArray(n), a = o.find(Fd);
  if (a) {
    const i = a.props.children, s = o.map((c) => c === a ? Dt.count(i) > 1 ? Dt.only(null) : /* @__PURE__ */ Jn(i) ? i.props.children : null : c);
    return /* @__PURE__ */ h(ao, C({}, r, {
      ref: t
    }), /* @__PURE__ */ Jn(i) ? /* @__PURE__ */ Eo(i, void 0, s) : null);
  }
  return /* @__PURE__ */ h(ao, C({}, r, {
    ref: t
  }), n);
});
lt.displayName = "Slot";
const ao = /* @__PURE__ */ T((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ Jn(n) ? /* @__PURE__ */ Eo(n, {
    ...Wd(r, n.props),
    ref: t ? fr(t, n.ref) : n.ref
  }) : Dt.count(n) > 1 ? Dt.only(null) : null;
});
ao.displayName = "SlotClone";
const So = ({ children: e }) => /* @__PURE__ */ h(Rt, null, e);
function Fd(e) {
  return /* @__PURE__ */ Jn(e) && e.type === So;
}
function Wd(e, t) {
  const n = {
    ...t
  };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...s) => {
      a(...s), o(...s);
    } : o && (n[r] = o) : r === "style" ? n[r] = {
      ...o,
      ...a
    } : r === "className" && (n[r] = [
      o,
      a
    ].filter(Boolean).join(" "));
  }
  return {
    ...e,
    ...n
  };
}
const jd = [
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
], K = jd.reduce((e, t) => {
  const n = /* @__PURE__ */ T((r, o) => {
    const { asChild: a, ...i } = r, s = a ? lt : t;
    return z(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ h(s, C({}, i, {
      ref: o
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function Po(e, t) {
  e && Oi(
    () => e.dispatchEvent(t)
  );
}
function Vd(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ee(e);
  z(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r), () => t.removeEventListener("keydown", r);
  }, [
    n,
    t
  ]);
}
const io = "dismissableLayer.update", Bd = "dismissableLayer.pointerDownOutside", Yd = "dismissableLayer.focusOutside";
let Ia;
const Ni = /* @__PURE__ */ Ve({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), en = /* @__PURE__ */ T((e, t) => {
  var n;
  const { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: o, onPointerDownOutside: a, onFocusOutside: i, onInteractOutside: s, onDismiss: c, ...l } = e, u = We(Ni), [d, f] = G(null), p = (n = d == null ? void 0 : d.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, v] = G({}), m = re(
    t,
    (W) => f(W)
  ), b = Array.from(u.layers), [$] = [
    ...u.layersWithOutsidePointerEventsDisabled
  ].slice(-1), g = b.indexOf($), w = d ? b.indexOf(d) : -1, E = u.layersWithOutsidePointerEventsDisabled.size > 0, S = w >= g, L = Ud((W) => {
    const H = W.target, X = [
      ...u.branches
    ].some(
      (U) => U.contains(H)
    );
    !S || X || (a == null || a(W), s == null || s(W), W.defaultPrevented || c == null || c());
  }, p), M = Kd((W) => {
    const H = W.target;
    [
      ...u.branches
    ].some(
      (U) => U.contains(H)
    ) || (i == null || i(W), s == null || s(W), W.defaultPrevented || c == null || c());
  }, p);
  return Vd((W) => {
    w === u.layers.size - 1 && (o == null || o(W), !W.defaultPrevented && c && (W.preventDefault(), c()));
  }, p), z(() => {
    if (d)
      return r && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Ia = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), La(), () => {
        r && u.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = Ia);
      };
  }, [
    d,
    p,
    r,
    u
  ]), z(() => () => {
    d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), La());
  }, [
    d,
    u
  ]), z(() => {
    const W = () => v({});
    return document.addEventListener(io, W), () => document.removeEventListener(io, W);
  }, []), /* @__PURE__ */ h(K.div, C({}, l, {
    ref: m,
    style: {
      pointerEvents: E ? S ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: F(e.onFocusCapture, M.onFocusCapture),
    onBlurCapture: F(e.onBlurCapture, M.onBlurCapture),
    onPointerDownCapture: F(e.onPointerDownCapture, L.onPointerDownCapture)
  }));
}), Hd = /* @__PURE__ */ T((e, t) => {
  const n = We(Ni), r = A(null), o = re(t, r);
  return z(() => {
    const a = r.current;
    if (a)
      return n.branches.add(a), () => {
        n.branches.delete(a);
      };
  }, [
    n.branches
  ]), /* @__PURE__ */ h(K.div, C({}, e, {
    ref: o
  }));
});
function Ud(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ee(e), r = A(!1), o = A(() => {
  });
  return z(() => {
    const a = (s) => {
      if (s.target && !r.current) {
        let l = function() {
          Ri(Bd, n, c, {
            discrete: !0
          });
        };
        const c = {
          originalEvent: s
        };
        s.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, {
          once: !0
        })) : l();
      }
      r.current = !1;
    }, i = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(i), t.removeEventListener("pointerdown", a), t.removeEventListener("click", o.current);
    };
  }, [
    t,
    n
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function Kd(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ee(e), r = A(!1);
  return z(() => {
    const o = (a) => {
      a.target && !r.current && Ri(Yd, n, {
        originalEvent: a
      }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [
    t,
    n
  ]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function La() {
  const e = new CustomEvent(io);
  document.dispatchEvent(e);
}
function Ri(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? Po(o, a) : o.dispatchEvent(a);
}
const Gd = en, zd = Hd, Vr = "focusScope.autoFocusOnMount", Br = "focusScope.autoFocusOnUnmount", Fa = {
  bubbles: !1,
  cancelable: !0
}, pr = /* @__PURE__ */ T((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: a, ...i } = e, [s, c] = G(null), l = Ee(o), u = Ee(a), d = A(null), f = re(
    t,
    (m) => c(m)
  ), p = A({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  z(() => {
    if (r) {
      let m = function(w) {
        if (p.paused || !s)
          return;
        const E = w.target;
        s.contains(E) ? d.current = E : mt(d.current, {
          select: !0
        });
      }, b = function(w) {
        if (p.paused || !s)
          return;
        const E = w.relatedTarget;
        E !== null && (s.contains(E) || mt(d.current, {
          select: !0
        }));
      }, $ = function(w) {
        const E = document.activeElement;
        for (const S of w)
          S.removedNodes.length > 0 && (s != null && s.contains(E) || mt(s));
      };
      document.addEventListener("focusin", m), document.addEventListener("focusout", b);
      const g = new MutationObserver($);
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
  ]), z(() => {
    if (s) {
      ja.add(p);
      const m = document.activeElement;
      if (!s.contains(m)) {
        const $ = new CustomEvent(Vr, Fa);
        s.addEventListener(Vr, l), s.dispatchEvent($), $.defaultPrevented || (qd(eu(ki(s)), {
          select: !0
        }), document.activeElement === m && mt(s));
      }
      return () => {
        s.removeEventListener(Vr, l), setTimeout(() => {
          const $ = new CustomEvent(Br, Fa);
          s.addEventListener(Br, u), s.dispatchEvent($), $.defaultPrevented || mt(m ?? document.body, {
            select: !0
          }), s.removeEventListener(Br, u), ja.remove(p);
        }, 0);
      };
    }
  }, [
    s,
    l,
    u,
    p
  ]);
  const v = te((m) => {
    if (!n && !r || p.paused)
      return;
    const b = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey, $ = document.activeElement;
    if (b && $) {
      const g = m.currentTarget, [w, E] = Xd(g);
      w && E ? !m.shiftKey && $ === E ? (m.preventDefault(), n && mt(w, {
        select: !0
      })) : m.shiftKey && $ === w && (m.preventDefault(), n && mt(E, {
        select: !0
      })) : $ === g && m.preventDefault();
    }
  }, [
    n,
    r,
    p.paused
  ]);
  return /* @__PURE__ */ h(K.div, C({
    tabIndex: -1
  }, i, {
    ref: f,
    onKeyDown: v
  }));
});
function qd(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (mt(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function Xd(e) {
  const t = ki(e), n = Wa(t, e), r = Wa(t.reverse(), e);
  return [
    n,
    r
  ];
}
function ki(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
function Wa(e, t) {
  for (const n of e)
    if (!Zd(n, {
      upTo: t
    }))
      return n;
}
function Zd(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t !== void 0 && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}
function Qd(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function mt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && Qd(e) && t && e.select();
  }
}
const ja = Jd();
function Jd() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Va(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Va(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function Va(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function eu(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const Tn = /* @__PURE__ */ T((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ Dd.createPortal(/* @__PURE__ */ h(K.div, C({}, o, {
    ref: t
  })), r) : null;
});
function tu(e, t) {
  return Sd((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const Ne = (e) => {
  const { present: t, children: n } = e, r = nu(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : Dt.only(n), a = re(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ Eo(o, {
    ref: a
  }) : null;
};
Ne.displayName = "Presence";
function nu(e) {
  const [t, n] = G(), r = A({}), o = A(e), a = A("none"), i = e ? "mounted" : "unmounted", [s, c] = tu(i, {
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
  return z(() => {
    const l = Ln(r.current);
    a.current = s === "mounted" ? l : "none";
  }, [
    s
  ]), Fe(() => {
    const l = r.current, u = o.current;
    if (u !== e) {
      const f = a.current, p = Ln(l);
      e ? c("MOUNT") : p === "none" || (l == null ? void 0 : l.display) === "none" ? c("UNMOUNT") : c(u && f !== p ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    c
  ]), Fe(() => {
    if (t) {
      const l = (d) => {
        const p = Ln(r.current).includes(d.animationName);
        d.target === t && p && Oi(
          () => c("ANIMATION_END")
        );
      }, u = (d) => {
        d.target === t && (a.current = Ln(r.current));
      };
      return t.addEventListener("animationstart", u), t.addEventListener("animationcancel", l), t.addEventListener("animationend", l), () => {
        t.removeEventListener("animationstart", u), t.removeEventListener("animationcancel", l), t.removeEventListener("animationend", l);
      };
    } else
      c("ANIMATION_END");
  }, [
    t,
    c
  ]), {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(s),
    ref: te((l) => {
      l && (r.current = getComputedStyle(l)), n(l);
    }, [])
  };
}
function Ln(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
let Yr = 0;
function vr() {
  z(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : Ba()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : Ba()), Yr++, () => {
      Yr === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), Yr--;
    };
  }, []);
}
function Ba() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
var ht = function() {
  return ht = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, ht.apply(this, arguments);
};
function ru(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function ou(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, a; r < o; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var Gn = "right-scroll-bar-position", zn = "width-before-scroll-bar", au = "with-scroll-bars-hidden", iu = "--removed-body-scroll-bar-size";
function su(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function cu(e, t) {
  var n = G(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
function lu(e, t) {
  return cu(t || null, function(n) {
    return e.forEach(function(r) {
      return su(r, n);
    });
  });
}
var er = function() {
  return er = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, er.apply(this, arguments);
};
function du(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function uu(e) {
  return e;
}
function fu(e, t) {
  t === void 0 && (t = uu);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(a) {
      var i = t(a, r);
      return n.push(i), function() {
        n = n.filter(function(s) {
          return s !== i;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (r = !0; n.length; ) {
        var i = n;
        n = [], i.forEach(a);
      }
      n = {
        push: function(s) {
          return a(s);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(a) {
      r = !0;
      var i = [];
      if (n.length) {
        var s = n;
        n = [], s.forEach(a), i = n;
      }
      var c = function() {
        var u = i;
        i = [], u.forEach(a);
      }, l = function() {
        return Promise.resolve().then(c);
      };
      l(), n = {
        push: function(u) {
          i.push(u), l();
        },
        filter: function(u) {
          return i = i.filter(u), n;
        }
      };
    }
  };
  return o;
}
function pu(e) {
  e === void 0 && (e = {});
  var t = fu(null);
  return t.options = er({ async: !0, ssr: !1 }, e), t;
}
var Ai = function(e) {
  var t = e.sideCar, n = du(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return P.createElement(r, er({}, n));
};
Ai.isSideCarExport = !0;
function vu(e, t) {
  return e.useMedium(t), Ai;
}
var Ii = pu(), Hr = function() {
}, mr = P.forwardRef(function(e, t) {
  var n = P.useRef(null), r = P.useState({
    onScrollCapture: Hr,
    onWheelCapture: Hr,
    onTouchMoveCapture: Hr
  }), o = r[0], a = r[1], i = e.forwardProps, s = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, f = e.sideCar, p = e.noIsolation, v = e.inert, m = e.allowPinchZoom, b = e.as, $ = b === void 0 ? "div" : b, g = ru(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), w = f, E = lu([n, t]), S = ht(ht({}, g), o);
  return P.createElement(
    P.Fragment,
    null,
    u && P.createElement(w, { sideCar: Ii, removeScrollBar: l, shards: d, noIsolation: p, inert: v, setCallbacks: a, allowPinchZoom: !!m, lockRef: n }),
    i ? P.cloneElement(P.Children.only(s), ht(ht({}, S), { ref: E })) : P.createElement($, ht({}, S, { className: c, ref: E }), s)
  );
});
mr.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
mr.classNames = {
  fullWidth: zn,
  zeroRight: Gn
};
var Ya, mu = function() {
  if (Ya)
    return Ya;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function bu() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = mu();
  return t && e.setAttribute("nonce", t), e;
}
function hu(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function gu(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var $u = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = bu()) && (hu(t, n), gu(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, yu = function() {
  var e = $u();
  return function(t, n) {
    P.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Li = function() {
  var e = yu(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, wu = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Ur = function(e) {
  return parseInt(e || "", 10) || 0;
}, xu = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Ur(n), Ur(r), Ur(o)];
}, Cu = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return wu;
  var t = xu(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, _u = Li(), Eu = function(e, t, n, r) {
  var o = e.left, a = e.top, i = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(au, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(s, "px ").concat(r, `;
  }
  body {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(s, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Gn, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(zn, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Gn, " .").concat(Gn, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(zn, " .").concat(zn, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body {
    `).concat(iu, ": ").concat(s, `px;
  }
`);
}, Tu = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r, a = P.useMemo(function() {
    return Cu(o);
  }, [o]);
  return P.createElement(_u, { styles: Eu(a, !t, o, n ? "" : "!important") });
}, so = !1;
if (typeof window < "u")
  try {
    var Fn = Object.defineProperty({}, "passive", {
      get: function() {
        return so = !0, !0;
      }
    });
    window.addEventListener("test", Fn, Fn), window.removeEventListener("test", Fn, Fn);
  } catch {
    so = !1;
  }
var Yt = so ? { passive: !1 } : !1, Su = function(e) {
  return e.tagName === "TEXTAREA";
}, Fi = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Su(e) && n[t] === "visible")
  );
}, Pu = function(e) {
  return Fi(e, "overflowY");
}, Du = function(e) {
  return Fi(e, "overflowX");
}, Ha = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = Wi(e, n);
    if (r) {
      var o = ji(e, n), a = o[1], i = o[2];
      if (a > i)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, Mu = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, Ou = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Wi = function(e, t) {
  return e === "v" ? Pu(t) : Du(t);
}, ji = function(e, t) {
  return e === "v" ? Mu(t) : Ou(t);
}, Nu = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Ru = function(e, t, n, r, o) {
  var a = Nu(e, window.getComputedStyle(t).direction), i = a * r, s = n.target, c = t.contains(s), l = !1, u = i > 0, d = 0, f = 0;
  do {
    var p = ji(e, s), v = p[0], m = p[1], b = p[2], $ = m - b - a * v;
    (v || $) && Wi(e, s) && (d += $, f += v), s = s.parentNode;
  } while (
    // portaled content
    !c && s !== document.body || // self content
    c && (t.contains(s) || t === s)
  );
  return (u && (o && d === 0 || !o && i > d) || !u && (o && f === 0 || !o && -i > f)) && (l = !0), l;
}, Wn = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Ua = function(e) {
  return [e.deltaX, e.deltaY];
}, Ka = function(e) {
  return e && "current" in e ? e.current : e;
}, ku = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Au = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Iu = 0, Ht = [];
function Lu(e) {
  var t = P.useRef([]), n = P.useRef([0, 0]), r = P.useRef(), o = P.useState(Iu++)[0], a = P.useState(function() {
    return Li();
  })[0], i = P.useRef(e);
  P.useEffect(function() {
    i.current = e;
  }, [e]), P.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var m = ou([e.lockRef.current], (e.shards || []).map(Ka), !0).filter(Boolean);
      return m.forEach(function(b) {
        return b.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), m.forEach(function(b) {
          return b.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = P.useCallback(function(m, b) {
    if ("touches" in m && m.touches.length === 2)
      return !i.current.allowPinchZoom;
    var $ = Wn(m), g = n.current, w = "deltaX" in m ? m.deltaX : g[0] - $[0], E = "deltaY" in m ? m.deltaY : g[1] - $[1], S, L = m.target, M = Math.abs(w) > Math.abs(E) ? "h" : "v";
    if ("touches" in m && M === "h" && L.type === "range")
      return !1;
    var W = Ha(M, L);
    if (!W)
      return !0;
    if (W ? S = M : (S = M === "v" ? "h" : "v", W = Ha(M, L)), !W)
      return !1;
    if (!r.current && "changedTouches" in m && (w || E) && (r.current = S), !S)
      return !0;
    var H = r.current || S;
    return Ru(H, b, m, H === "h" ? w : E, !0);
  }, []), c = P.useCallback(function(m) {
    var b = m;
    if (!(!Ht.length || Ht[Ht.length - 1] !== a)) {
      var $ = "deltaY" in b ? Ua(b) : Wn(b), g = t.current.filter(function(S) {
        return S.name === b.type && S.target === b.target && ku(S.delta, $);
      })[0];
      if (g && g.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!g) {
        var w = (i.current.shards || []).map(Ka).filter(Boolean).filter(function(S) {
          return S.contains(b.target);
        }), E = w.length > 0 ? s(b, w[0]) : !i.current.noIsolation;
        E && b.cancelable && b.preventDefault();
      }
    }
  }, []), l = P.useCallback(function(m, b, $, g) {
    var w = { name: m, delta: b, target: $, should: g };
    t.current.push(w), setTimeout(function() {
      t.current = t.current.filter(function(E) {
        return E !== w;
      });
    }, 1);
  }, []), u = P.useCallback(function(m) {
    n.current = Wn(m), r.current = void 0;
  }, []), d = P.useCallback(function(m) {
    l(m.type, Ua(m), m.target, s(m, e.lockRef.current));
  }, []), f = P.useCallback(function(m) {
    l(m.type, Wn(m), m.target, s(m, e.lockRef.current));
  }, []);
  P.useEffect(function() {
    return Ht.push(a), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", c, Yt), document.addEventListener("touchmove", c, Yt), document.addEventListener("touchstart", u, Yt), function() {
      Ht = Ht.filter(function(m) {
        return m !== a;
      }), document.removeEventListener("wheel", c, Yt), document.removeEventListener("touchmove", c, Yt), document.removeEventListener("touchstart", u, Yt);
    };
  }, []);
  var p = e.removeScrollBar, v = e.inert;
  return P.createElement(
    P.Fragment,
    null,
    v ? P.createElement(a, { styles: Au(o) }) : null,
    p ? P.createElement(Tu, { gapMode: "margin" }) : null
  );
}
const Fu = vu(Ii, Lu);
var Vi = P.forwardRef(function(e, t) {
  return P.createElement(mr, ht({}, e, { ref: t, sideCar: Fu }));
});
Vi.classNames = mr.classNames;
const br = Vi;
var Wu = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Ut = /* @__PURE__ */ new WeakMap(), jn = /* @__PURE__ */ new WeakMap(), Vn = {}, Kr = 0, Bi = function(e) {
  return e && (e.host || Bi(e.parentNode));
}, ju = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Bi(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Vu = function(e, t, n, r) {
  var o = ju(t, Array.isArray(e) ? e : [e]);
  Vn[n] || (Vn[n] = /* @__PURE__ */ new WeakMap());
  var a = Vn[n], i = [], s = /* @__PURE__ */ new Set(), c = new Set(o), l = function(d) {
    !d || s.has(d) || (s.add(d), l(d.parentNode));
  };
  o.forEach(l);
  var u = function(d) {
    !d || c.has(d) || Array.prototype.forEach.call(d.children, function(f) {
      if (s.has(f))
        u(f);
      else {
        var p = f.getAttribute(r), v = p !== null && p !== "false", m = (Ut.get(f) || 0) + 1, b = (a.get(f) || 0) + 1;
        Ut.set(f, m), a.set(f, b), i.push(f), m === 1 && v && jn.set(f, !0), b === 1 && f.setAttribute(n, "true"), v || f.setAttribute(r, "true");
      }
    });
  };
  return u(t), s.clear(), Kr++, function() {
    i.forEach(function(d) {
      var f = Ut.get(d) - 1, p = a.get(d) - 1;
      Ut.set(d, f), a.set(d, p), f || (jn.has(d) || d.removeAttribute(r), jn.delete(d)), p || d.removeAttribute(n);
    }), Kr--, Kr || (Ut = /* @__PURE__ */ new WeakMap(), Ut = /* @__PURE__ */ new WeakMap(), jn = /* @__PURE__ */ new WeakMap(), Vn = {});
  };
}, hr = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = t || Wu(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), Vu(r, o, n, "aria-hidden")) : function() {
    return null;
  };
};
const Yi = "Dialog", [Hi, Ui] = _e(Yi), [Bu, qe] = Hi(Yi), Yu = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: i = !0 } = e, s = A(null), c = A(null), [l = !1, u] = Te({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ h(Bu, {
    scope: t,
    triggerRef: s,
    contentRef: c,
    contentId: Oe(),
    titleId: Oe(),
    descriptionId: Oe(),
    open: l,
    onOpenChange: u,
    onOpenToggle: te(
      () => u(
        (d) => !d
      ),
      [
        u
      ]
    ),
    modal: i
  }, n);
}, Hu = "DialogTrigger", Uu = /* @__PURE__ */ T((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = qe(Hu, n), a = re(t, o.triggerRef);
  return /* @__PURE__ */ h(K.button, C({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": Do(o.open)
  }, r, {
    ref: a,
    onClick: F(e.onClick, o.onOpenToggle)
  }));
}), Ki = "DialogPortal", [Ku, Gi] = Hi(Ki, {
  forceMount: void 0
}), Gu = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = qe(Ki, t);
  return /* @__PURE__ */ h(Ku, {
    scope: t,
    forceMount: n
  }, Dt.map(
    r,
    (i) => /* @__PURE__ */ h(Ne, {
      present: n || a.open
    }, /* @__PURE__ */ h(Tn, {
      asChild: !0,
      container: o
    }, i))
  ));
}, co = "DialogOverlay", zu = /* @__PURE__ */ T((e, t) => {
  const n = Gi(co, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = qe(co, e.__scopeDialog);
  return a.modal ? /* @__PURE__ */ h(Ne, {
    present: r || a.open
  }, /* @__PURE__ */ h(qu, C({}, o, {
    ref: t
  }))) : null;
}), qu = /* @__PURE__ */ T((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = qe(co, n);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ h(br, {
      as: lt,
      allowPinchZoom: !0,
      shards: [
        o.contentRef
      ]
    }, /* @__PURE__ */ h(K.div, C({
      "data-state": Do(o.open)
    }, r, {
      ref: t,
      style: {
        pointerEvents: "auto",
        ...r.style
      }
    })))
  );
}), qt = "DialogContent", Xu = /* @__PURE__ */ T((e, t) => {
  const n = Gi(qt, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = qe(qt, e.__scopeDialog);
  return /* @__PURE__ */ h(Ne, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ h(Zu, C({}, o, {
    ref: t
  })) : /* @__PURE__ */ h(Qu, C({}, o, {
    ref: t
  })));
}), Zu = /* @__PURE__ */ T((e, t) => {
  const n = qe(qt, e.__scopeDialog), r = A(null), o = re(t, n.contentRef, r);
  return z(() => {
    const a = r.current;
    if (a)
      return hr(a);
  }, []), /* @__PURE__ */ h(zi, C({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: F(e.onCloseAutoFocus, (a) => {
      var i;
      a.preventDefault(), (i = n.triggerRef.current) === null || i === void 0 || i.focus();
    }),
    onPointerDownOutside: F(e.onPointerDownOutside, (a) => {
      const i = a.detail.originalEvent, s = i.button === 0 && i.ctrlKey === !0;
      (i.button === 2 || s) && a.preventDefault();
    }),
    onFocusOutside: F(
      e.onFocusOutside,
      (a) => a.preventDefault()
    )
  }));
}), Qu = /* @__PURE__ */ T((e, t) => {
  const n = qe(qt, e.__scopeDialog), r = A(!1), o = A(!1);
  return /* @__PURE__ */ h(zi, C({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: (a) => {
      var i;
      if ((i = e.onCloseAutoFocus) === null || i === void 0 || i.call(e, a), !a.defaultPrevented) {
        var s;
        r.current || (s = n.triggerRef.current) === null || s === void 0 || s.focus(), a.preventDefault();
      }
      r.current = !1, o.current = !1;
    },
    onInteractOutside: (a) => {
      var i, s;
      (i = e.onInteractOutside) === null || i === void 0 || i.call(e, a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
      const c = a.target;
      ((s = n.triggerRef.current) === null || s === void 0 ? void 0 : s.contains(c)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
    }
  }));
}), zi = /* @__PURE__ */ T((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...i } = e, s = qe(qt, n), c = A(null), l = re(t, c);
  return vr(), /* @__PURE__ */ h(Rt, null, /* @__PURE__ */ h(pr, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ h(en, C({
    role: "dialog",
    id: s.contentId,
    "aria-describedby": s.descriptionId,
    "aria-labelledby": s.titleId,
    "data-state": Do(s.open)
  }, i, {
    ref: l,
    onDismiss: () => s.onOpenChange(!1)
  }))), !1);
}), qi = "DialogTitle", Ju = /* @__PURE__ */ T((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = qe(qi, n);
  return /* @__PURE__ */ h(K.h2, C({
    id: o.titleId
  }, r, {
    ref: t
  }));
}), ef = "DialogDescription", tf = /* @__PURE__ */ T((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = qe(ef, n);
  return /* @__PURE__ */ h(K.p, C({
    id: o.descriptionId
  }, r, {
    ref: t
  }));
}), nf = "DialogClose", rf = /* @__PURE__ */ T((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = qe(nf, n);
  return /* @__PURE__ */ h(K.button, C({
    type: "button"
  }, r, {
    ref: t,
    onClick: F(
      e.onClick,
      () => o.onOpenChange(!1)
    )
  }));
});
function Do(e) {
  return e ? "open" : "closed";
}
const of = "DialogTitleWarning", [af, jw] = Nd(of, {
  contentName: qt,
  titleName: qi,
  docsSlug: "dialog"
}), Xi = Yu, Zi = Uu, Mo = Gu, Oo = zu, No = Xu, Ro = Ju, ko = tf, Ao = rf, sf = "AlertDialog", [cf, Vw] = _e(sf, [
  Ui
]), ut = Ui(), lf = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = ut(t);
  return /* @__PURE__ */ h(Xi, C({}, r, n, {
    modal: !0
  }));
}, df = /* @__PURE__ */ T((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = ut(n);
  return /* @__PURE__ */ h(Zi, C({}, o, r, {
    ref: t
  }));
}), uf = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = ut(t);
  return /* @__PURE__ */ h(Mo, C({}, r, n));
}, ff = /* @__PURE__ */ T((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = ut(n);
  return /* @__PURE__ */ h(Oo, C({}, o, r, {
    ref: t
  }));
}), Qi = "AlertDialogContent", [pf, vf] = cf(Qi), mf = /* @__PURE__ */ T((e, t) => {
  const { __scopeAlertDialog: n, children: r, ...o } = e, a = ut(n), i = A(null), s = re(t, i), c = A(null);
  return /* @__PURE__ */ h(af, {
    contentName: Qi,
    titleName: bf,
    docsSlug: "alert-dialog"
  }, /* @__PURE__ */ h(pf, {
    scope: n,
    cancelRef: c
  }, /* @__PURE__ */ h(No, C({
    role: "alertdialog"
  }, a, o, {
    ref: s,
    onOpenAutoFocus: F(o.onOpenAutoFocus, (l) => {
      var u;
      l.preventDefault(), (u = c.current) === null || u === void 0 || u.focus({
        preventScroll: !0
      });
    }),
    onPointerDownOutside: (l) => l.preventDefault(),
    onInteractOutside: (l) => l.preventDefault()
  }), /* @__PURE__ */ h(So, null, r), !1)));
}), bf = "AlertDialogTitle", hf = /* @__PURE__ */ T((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = ut(n);
  return /* @__PURE__ */ h(Ro, C({}, o, r, {
    ref: t
  }));
}), gf = /* @__PURE__ */ T((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = ut(n);
  return /* @__PURE__ */ h(ko, C({}, o, r, {
    ref: t
  }));
}), $f = /* @__PURE__ */ T((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = ut(n);
  return /* @__PURE__ */ h(Ao, C({}, o, r, {
    ref: t
  }));
}), yf = "AlertDialogCancel", wf = /* @__PURE__ */ T((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, { cancelRef: o } = vf(yf, n), a = ut(n), i = re(t, o);
  return /* @__PURE__ */ h(Ao, C({}, a, r, {
    ref: i
  }));
}), xf = lf, Cf = df, Ji = uf, es = ff, ts = mf, ns = $f, rs = wf, os = hf, as = gf;
function is(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = is(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function ss() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = is(e)) && (r && (r += " "), r += t);
  return r;
}
function _f() {
  for (var e = 0, t, n, r = ""; e < arguments.length; )
    (t = arguments[e++]) && (n = cs(t)) && (r && (r += " "), r += n);
  return r;
}
function cs(e) {
  if (typeof e == "string")
    return e;
  for (var t, n = "", r = 0; r < e.length; r++)
    e[r] && (t = cs(e[r])) && (n && (n += " "), n += t);
  return n;
}
var Io = "-";
function Ef(e) {
  var t = Sf(e), n = e.conflictingClassGroups, r = e.conflictingClassGroupModifiers, o = r === void 0 ? {} : r;
  function a(s) {
    var c = s.split(Io);
    return c[0] === "" && c.length !== 1 && c.shift(), ls(c, t) || Tf(s);
  }
  function i(s, c) {
    var l = n[s] || [];
    return c && o[s] ? [].concat(l, o[s]) : l;
  }
  return {
    getClassGroupId: a,
    getConflictingClassGroupIds: i
  };
}
function ls(e, t) {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  var n = e[0], r = t.nextPart.get(n), o = r ? ls(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length !== 0) {
    var a = e.join(Io);
    return (i = t.validators.find(function(s) {
      var c = s.validator;
      return c(a);
    })) == null ? void 0 : i.classGroupId;
  }
}
var Ga = /^\[(.+)\]$/;
function Tf(e) {
  if (Ga.test(e)) {
    var t = Ga.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function Sf(e) {
  var t = e.theme, n = e.prefix, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, o = Df(Object.entries(e.classGroups), n);
  return o.forEach(function(a) {
    var i = a[0], s = a[1];
    lo(s, r, i, t);
  }), r;
}
function lo(e, t, n, r) {
  e.forEach(function(o) {
    if (typeof o == "string") {
      var a = o === "" ? t : za(t, o);
      a.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (Pf(o)) {
        lo(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(function(i) {
      var s = i[0], c = i[1];
      lo(c, za(t, s), n, r);
    });
  });
}
function za(e, t) {
  var n = e;
  return t.split(Io).forEach(function(r) {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}
function Pf(e) {
  return e.isThemeGetter;
}
function Df(e, t) {
  return t ? e.map(function(n) {
    var r = n[0], o = n[1], a = o.map(function(i) {
      return typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(function(s) {
        var c = s[0], l = s[1];
        return [t + c, l];
      })) : i;
    });
    return [r, a];
  }) : e;
}
function Mf(e) {
  if (e < 1)
    return {
      get: function() {
      },
      set: function() {
      }
    };
  var t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  function o(a, i) {
    n.set(a, i), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  }
  return {
    get: function(i) {
      var s = n.get(i);
      if (s !== void 0)
        return s;
      if ((s = r.get(i)) !== void 0)
        return o(i, s), s;
    },
    set: function(i, s) {
      n.has(i) ? n.set(i, s) : o(i, s);
    }
  };
}
var ds = "!";
function Of(e) {
  var t = e.separator || ":", n = t.length === 1, r = t[0], o = t.length;
  return function(i) {
    for (var s = [], c = 0, l = 0, u, d = 0; d < i.length; d++) {
      var f = i[d];
      if (c === 0) {
        if (f === r && (n || i.slice(d, d + o) === t)) {
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
    var p = s.length === 0 ? i : i.substring(l), v = p.startsWith(ds), m = v ? p.substring(1) : p, b = u && u > l ? u - l : void 0;
    return {
      modifiers: s,
      hasImportantModifier: v,
      baseClassName: m,
      maybePostfixModifierPosition: b
    };
  };
}
function Nf(e) {
  if (e.length <= 1)
    return e;
  var t = [], n = [];
  return e.forEach(function(r) {
    var o = r[0] === "[";
    o ? (t.push.apply(t, n.sort().concat([r])), n = []) : n.push(r);
  }), t.push.apply(t, n.sort()), t;
}
function Rf(e) {
  return {
    cache: Mf(e.cacheSize),
    splitModifiers: Of(e),
    ...Ef(e)
  };
}
var kf = /\s+/;
function Af(e, t) {
  var n = t.splitModifiers, r = t.getClassGroupId, o = t.getConflictingClassGroupIds, a = /* @__PURE__ */ new Set();
  return e.trim().split(kf).map(function(i) {
    var s = n(i), c = s.modifiers, l = s.hasImportantModifier, u = s.baseClassName, d = s.maybePostfixModifierPosition, f = r(d ? u.substring(0, d) : u), p = !!d;
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
    var v = Nf(c).join(":"), m = l ? v + ds : v;
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
function qa() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r, o, a, i = s;
  function s(l) {
    var u = t[0], d = t.slice(1), f = d.reduce(function(p, v) {
      return v(p);
    }, u());
    return r = Rf(f), o = r.cache.get, a = r.cache.set, i = c, c(l);
  }
  function c(l) {
    var u = o(l);
    if (u)
      return u;
    var d = Af(l, r);
    return a(l, d), d;
  }
  return function() {
    return i(_f.apply(null, arguments));
  };
}
function he(e) {
  var t = function(r) {
    return r[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var us = /^\[(?:([a-z-]+):)?(.+)\]$/i, If = /^\d+\/\d+$/, Lf = /* @__PURE__ */ new Set(["px", "full", "screen"]), Ff = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Wf = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|^0$/, jf = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function He(e) {
  return Pt(e) || Lf.has(e) || If.test(e) || bt(e);
}
function bt(e) {
  return kt(e, "length", Kf);
}
function Vf(e) {
  return kt(e, "size", fs);
}
function Bf(e) {
  return kt(e, "position", fs);
}
function Yf(e) {
  return kt(e, "url", Gf);
}
function Bn(e) {
  return kt(e, "number", Pt);
}
function Pt(e) {
  return !Number.isNaN(Number(e));
}
function Hf(e) {
  return e.endsWith("%") && Pt(e.slice(0, -1));
}
function un(e) {
  return Xa(e) || kt(e, "number", Xa);
}
function we(e) {
  return us.test(e);
}
function fn() {
  return !0;
}
function pt(e) {
  return Ff.test(e);
}
function Uf(e) {
  return kt(e, "", zf);
}
function kt(e, t, n) {
  var r = us.exec(e);
  return r ? r[1] ? r[1] === t : n(r[2]) : !1;
}
function Kf(e) {
  return Wf.test(e);
}
function fs() {
  return !1;
}
function Gf(e) {
  return e.startsWith("url(");
}
function Xa(e) {
  return Number.isInteger(Number(e));
}
function zf(e) {
  return jf.test(e);
}
function Za() {
  var e = he("colors"), t = he("spacing"), n = he("blur"), r = he("brightness"), o = he("borderColor"), a = he("borderRadius"), i = he("borderSpacing"), s = he("borderWidth"), c = he("contrast"), l = he("grayscale"), u = he("hueRotate"), d = he("invert"), f = he("gap"), p = he("gradientColorStops"), v = he("gradientColorStopPositions"), m = he("inset"), b = he("margin"), $ = he("opacity"), g = he("padding"), w = he("saturate"), E = he("scale"), S = he("sepia"), L = he("skew"), M = he("space"), W = he("translate"), H = function() {
    return ["auto", "contain", "none"];
  }, X = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, U = function() {
    return ["auto", t];
  }, q = function() {
    return ["", He];
  }, Y = function() {
    return ["auto", Pt, we];
  }, D = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, O = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, j = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, R = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, N = function() {
    return ["", "0", we];
  }, V = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, Q = function() {
    return [Pt, Bn];
  }, oe = function() {
    return [Pt, we];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [fn],
      spacing: [He],
      blur: ["none", "", pt, bt],
      brightness: Q(),
      borderColor: [e],
      borderRadius: ["none", "", "full", pt, bt],
      borderSpacing: [t],
      borderWidth: q(),
      contrast: Q(),
      grayscale: N(),
      hueRotate: oe(),
      invert: N(),
      gap: [t],
      gradientColorStops: [e],
      gradientColorStopPositions: [Hf, bt],
      inset: U(),
      margin: U(),
      opacity: Q(),
      padding: [t],
      saturate: Q(),
      scale: Q(),
      sepia: N(),
      skew: oe(),
      space: [t],
      translate: [t]
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", we]
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
        columns: [pt]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": V()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": V()
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
        object: [].concat(D(), [we])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: X()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": X()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": X()
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
        z: ["auto", un]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: U()
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
        flex: ["1", "auto", "initial", "none", we]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: N()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: N()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", un]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [fn]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: [un]
        }, we]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": Y()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": Y()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [fn]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [un]
        }, we]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": Y()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": Y()
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
        "auto-cols": ["auto", "min", "max", "fr", we]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", we]
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
        justify: ["normal"].concat(R())
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
        content: ["normal"].concat(R(), ["baseline"])
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
        "place-content": [].concat(R(), ["baseline"])
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
        "space-x": [M]
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
        "space-y": [M]
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
        w: ["auto", "min", "max", "fit", t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", He]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [pt]
        }, pt, bt]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [t, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", He]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [t, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", pt, bt]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Bn]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [fn]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", bt]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Pt, Bn]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", He]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", we]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", we]
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
        "placeholder-opacity": [$]
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
        "text-opacity": [$]
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
        decoration: [].concat(O(), ["wavy"])
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
        "underline-offset": ["auto", He]
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
        indent: [t]
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", bt]
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
        content: ["none", we]
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
        "bg-opacity": [$]
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
        bg: [].concat(D(), [Bf])
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
        bg: ["auto", "cover", "contain", Vf]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Yf]
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
        "border-opacity": [$]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [].concat(O(), ["hidden"])
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
        "divide-opacity": [$]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: O()
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
        outline: [""].concat(O())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [He]
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
        ring: q()
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
        "ring-opacity": [$]
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
        shadow: ["", "inner", "none", pt, Uf]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [fn]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [$]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": j()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": j()
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
        blur: [n]
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
        "drop-shadow": ["", "none", pt, we]
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
        "backdrop-blur": [n]
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
        "backdrop-opacity": [$]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", we]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: oe()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", we]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: oe()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", we]
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
        scale: [E]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [E]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [E]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [un, we]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [W]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [W]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [L]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [L]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", we]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", we]
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
        "scroll-m": [t]
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": [t]
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": [t]
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": [t]
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": [t]
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": [t]
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": [t]
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": [t]
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": [t]
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": [t]
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": [t]
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": [t]
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": [t]
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": [t]
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": [t]
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": [t]
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": [t]
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": [t]
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
        "will-change": ["auto", "scroll", "contents", "transform", we]
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
        stroke: [He, Bn]
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
function qf(e, t) {
  for (var n in t)
    ps(e, n, t[n]);
  return e;
}
var Xf = Object.prototype.hasOwnProperty, Zf = /* @__PURE__ */ new Set(["string", "number", "boolean"]);
function ps(e, t, n) {
  if (!Xf.call(e, t) || Zf.has(typeof n) || n === null) {
    e[t] = n;
    return;
  }
  if (Array.isArray(n) && Array.isArray(e[t])) {
    e[t] = e[t].concat(n);
    return;
  }
  if (typeof n == "object" && typeof e[t] == "object") {
    if (e[t] === null) {
      e[t] = n;
      return;
    }
    for (var r in n)
      ps(e[t], r, n[r]);
  }
}
function Qf(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  return typeof e == "function" ? qa.apply(void 0, [Za, e].concat(n)) : qa.apply(void 0, [function() {
    return qf(Za(), e);
  }].concat(n));
}
const Jf = Qf({ prefix: "~" });
function k(...e) {
  return Jf(ss(e));
}
const Bw = xf, Yw = P.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _.jsx(
  Cf,
  {
    ref: n,
    className: k("tw-reset", e),
    ...t
  }
)), vs = ({
  className: e,
  ...t
}) => /* @__PURE__ */ _.jsx(
  Ji,
  {
    className: k("tw-reset", e),
    ...t
  }
);
vs.displayName = Ji.displayName;
const ms = P.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _.jsx(
  es,
  {
    className: k(
      "~fixed ~inset-0 ~z-50 ~bg-background/80 ~backdrop-blur-sm",
      "data-[state=open]:~animate-in data-[state=open]:~fade-in-0",
      "data-[state=closed]:~animate-out data-[state=closed]:~fade-out-0",
      e
    ),
    ...t,
    ref: n
  }
));
ms.displayName = es.displayName;
const ep = P.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _.jsxs(vs, { children: [
  /* @__PURE__ */ _.jsx(ms, {}),
  /* @__PURE__ */ _.jsx(
    ts,
    {
      ref: n,
      className: k(
        "tw-reset ~fixed ~left-[50%] ~top-[50%] ~z-50 ~grid ~w-full ~max-w-lg ~translate-x-[-50%] ~translate-y-[-50%] ~gap-4 ~border ~bg-background ~p-6 ~shadow-lg ~duration-200 sm:~rounded-lg md:~w-full",
        "data-[state=open]:~animate-in data-[state=open]:~fade-in-0 data-[state=open]:~zoom-in-95 data-[state=open]:~slide-in-from-left-1/2 data-[state=open]:~slide-in-from-top-[48%]",
        "data-[state=closed]:~animate-out data-[state=closed]:~fade-out-0 data-[state=closed]:~zoom-out-95 data-[state=closed]:~slide-out-to-left-1/2 data-[state=closed]:~slide-out-to-top-[48%]",
        e
      ),
      ...t
    }
  )
] }));
ep.displayName = ts.displayName;
const tp = ({
  className: e,
  ...t
}) => /* @__PURE__ */ _.jsx(
  "div",
  {
    className: k(
      "~flex ~flex-col ~space-y-2 ~text-center sm:~text-left",
      e
    ),
    ...t
  }
);
tp.displayName = "AlertDialogHeader";
const np = ({
  className: e,
  ...t
}) => /* @__PURE__ */ _.jsx(
  "div",
  {
    className: k(
      "~mt-2 ~flex ~flex-col-reverse sm:~flex-row sm:~justify-end sm:~space-x-2",
      e
    ),
    ...t
  }
);
np.displayName = "AlertDialogFooter";
const rp = P.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _.jsx(
  os,
  {
    ref: n,
    className: k("body-large ~font-semibold", e),
    ...t
  }
));
rp.displayName = os.displayName;
const op = P.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _.jsx(
  as,
  {
    ref: n,
    className: k("~leading-6 ~text-muted-foreground", e),
    ...t
  }
));
op.displayName = as.displayName;
const ap = P.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _.jsx(
  ns,
  {
    ref: n,
    className: k(Cn(), e),
    ...t
  }
));
ap.displayName = ns.displayName;
const ip = P.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _.jsx(
  rs,
  {
    ref: n,
    className: k(
      Cn({ variant: "outline" }),
      "~mt-2 sm:~mt-0",
      e
    ),
    ...t
  }
));
ip.displayName = rs.displayName;
function yt(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, a;
  for (a = 0; a < r.length; a++)
    o = r[a], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var sp = ["color"], bs = /* @__PURE__ */ T(function(e, t) {
  var n = e.color, r = n === void 0 ? "currentColor" : n, o = yt(e, sp);
  return h("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, o, {
    ref: t
  }), h("path", {
    d: "M4.5 1C4.77614 1 5 1.22386 5 1.5V2H10V1.5C10 1.22386 10.2239 1 10.5 1C10.7761 1 11 1.22386 11 1.5V2H12.5C13.3284 2 14 2.67157 14 3.5V12.5C14 13.3284 13.3284 14 12.5 14H2.5C1.67157 14 1 13.3284 1 12.5V3.5C1 2.67157 1.67157 2 2.5 2H4V1.5C4 1.22386 4.22386 1 4.5 1ZM10 3V3.5C10 3.77614 10.2239 4 10.5 4C10.7761 4 11 3.77614 11 3.5V3H12.5C12.7761 3 13 3.22386 13 3.5V5H2V3.5C2 3.22386 2.22386 3 2.5 3H4V3.5C4 3.77614 4.22386 4 4.5 4C4.77614 4 5 3.77614 5 3.5V3H10ZM2 6V12.5C2 12.7761 2.22386 13 2.5 13H12.5C12.7761 13 13 12.7761 13 12.5V6H2ZM7 7.5C7 7.22386 7.22386 7 7.5 7C7.77614 7 8 7.22386 8 7.5C8 7.77614 7.77614 8 7.5 8C7.22386 8 7 7.77614 7 7.5ZM9.5 7C9.22386 7 9 7.22386 9 7.5C9 7.77614 9.22386 8 9.5 8C9.77614 8 10 7.77614 10 7.5C10 7.22386 9.77614 7 9.5 7ZM11 7.5C11 7.22386 11.2239 7 11.5 7C11.7761 7 12 7.22386 12 7.5C12 7.77614 11.7761 8 11.5 8C11.2239 8 11 7.77614 11 7.5ZM11.5 9C11.2239 9 11 9.22386 11 9.5C11 9.77614 11.2239 10 11.5 10C11.7761 10 12 9.77614 12 9.5C12 9.22386 11.7761 9 11.5 9ZM9 9.5C9 9.22386 9.22386 9 9.5 9C9.77614 9 10 9.22386 10 9.5C10 9.77614 9.77614 10 9.5 10C9.22386 10 9 9.77614 9 9.5ZM7.5 9C7.22386 9 7 9.22386 7 9.5C7 9.77614 7.22386 10 7.5 10C7.77614 10 8 9.77614 8 9.5C8 9.22386 7.77614 9 7.5 9ZM5 9.5C5 9.22386 5.22386 9 5.5 9C5.77614 9 6 9.22386 6 9.5C6 9.77614 5.77614 10 5.5 10C5.22386 10 5 9.77614 5 9.5ZM3.5 9C3.22386 9 3 9.22386 3 9.5C3 9.77614 3.22386 10 3.5 10C3.77614 10 4 9.77614 4 9.5C4 9.22386 3.77614 9 3.5 9ZM3 11.5C3 11.2239 3.22386 11 3.5 11C3.77614 11 4 11.2239 4 11.5C4 11.7761 3.77614 12 3.5 12C3.22386 12 3 11.7761 3 11.5ZM5.5 11C5.22386 11 5 11.2239 5 11.5C5 11.7761 5.22386 12 5.5 12C5.77614 12 6 11.7761 6 11.5C6 11.2239 5.77614 11 5.5 11ZM7 11.5C7 11.2239 7.22386 11 7.5 11C7.77614 11 8 11.2239 8 11.5C8 11.7761 7.77614 12 7.5 12C7.22386 12 7 11.7761 7 11.5ZM9.5 11C9.22386 11 9 11.2239 9 11.5C9 11.7761 9.22386 12 9.5 12C9.77614 12 10 11.7761 10 11.5C10 11.2239 9.77614 11 9.5 11Z",
    fill: r,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), cp = ["color"], lp = /* @__PURE__ */ T(function(e, t) {
  var n = e.color, r = n === void 0 ? "currentColor" : n, o = yt(e, cp);
  return h("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, o, {
    ref: t
  }), h("path", {
    d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z",
    fill: r,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), dp = ["color"], Lo = /* @__PURE__ */ T(function(e, t) {
  var n = e.color, r = n === void 0 ? "currentColor" : n, o = yt(e, dp);
  return h("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, o, {
    ref: t
  }), h("path", {
    d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",
    fill: r,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), up = ["color"], fp = /* @__PURE__ */ T(function(e, t) {
  var n = e.color, r = n === void 0 ? "currentColor" : n, o = yt(e, up);
  return h("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, o, {
    ref: t
  }), h("path", {
    d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
    fill: r,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), pp = ["color"], vp = /* @__PURE__ */ T(function(e, t) {
  var n = e.color, r = n === void 0 ? "currentColor" : n, o = yt(e, pp);
  return h("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, o, {
    ref: t
  }), h("path", {
    d: "M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z",
    fill: r,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), mp = ["color"], hs = /* @__PURE__ */ T(function(e, t) {
  var n = e.color, r = n === void 0 ? "currentColor" : n, o = yt(e, mp);
  return h("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, o, {
    ref: t
  }), h("path", {
    d: "M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z",
    fill: r,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), bp = ["color"], gs = /* @__PURE__ */ T(function(e, t) {
  var n = e.color, r = n === void 0 ? "currentColor" : n, o = yt(e, bp);
  return h("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, o, {
    ref: t
  }), h("path", {
    d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
    fill: r,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), hp = ["color"], gp = /* @__PURE__ */ T(function(e, t) {
  var n = e.color, r = n === void 0 ? "currentColor" : n, o = yt(e, hp);
  return h("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, o, {
    ref: t
  }), h("path", {
    d: "M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z",
    fill: r
  }));
});
function Xt(e) {
  "@babel/helpers - typeof";
  return Xt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Xt(e);
}
function Se(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
function J(e, t) {
  if (t.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function ie(e) {
  J(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || Xt(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
}
function Ye(e, t) {
  J(2, arguments);
  var n = ie(e), r = Se(t);
  return isNaN(r) ? /* @__PURE__ */ new Date(NaN) : (r && n.setDate(n.getDate() + r), n);
}
function Je(e, t) {
  J(2, arguments);
  var n = ie(e), r = Se(t);
  if (isNaN(r))
    return /* @__PURE__ */ new Date(NaN);
  if (!r)
    return n;
  var o = n.getDate(), a = new Date(n.getTime());
  a.setMonth(n.getMonth() + r + 1, 0);
  var i = a.getDate();
  return o >= i ? a : (n.setFullYear(a.getFullYear(), a.getMonth(), o), n);
}
function $p(e, t) {
  J(2, arguments);
  var n = ie(e).getTime(), r = Se(t);
  return new Date(n + r);
}
var yp = {};
function wt() {
  return yp;
}
function et(e, t) {
  var n, r, o, a, i, s, c, l;
  J(1, arguments);
  var u = wt(), d = Se((n = (r = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (i = t.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.weekStartsOn) !== null && o !== void 0 ? o : u.weekStartsOn) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var f = ie(e), p = f.getDay(), v = (p < d ? 7 : 0) + p - d;
  return f.setDate(f.getDate() - v), f.setHours(0, 0, 0, 0), f;
}
function Ot(e) {
  return J(1, arguments), et(e, {
    weekStartsOn: 1
  });
}
function wp(e) {
  J(1, arguments);
  var t = ie(e), n = t.getFullYear(), r = /* @__PURE__ */ new Date(0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  var o = Ot(r), a = /* @__PURE__ */ new Date(0);
  a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0);
  var i = Ot(a);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= i.getTime() ? n : n - 1;
}
function xp(e) {
  J(1, arguments);
  var t = wp(e), n = /* @__PURE__ */ new Date(0);
  n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0);
  var r = Ot(n);
  return r;
}
function bn(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
function Zt(e) {
  J(1, arguments);
  var t = ie(e);
  return t.setHours(0, 0, 0, 0), t;
}
var Cp = 864e5;
function at(e, t) {
  J(2, arguments);
  var n = Zt(e), r = Zt(t), o = n.getTime() - bn(n), a = r.getTime() - bn(r);
  return Math.round((o - a) / Cp);
}
function uo(e, t) {
  J(2, arguments);
  var n = Se(t), r = n * 7;
  return Ye(e, r);
}
function _p(e, t) {
  J(2, arguments);
  var n = Se(t);
  return Je(e, n * 12);
}
function Ep(e) {
  J(1, arguments);
  var t;
  if (e && typeof e.forEach == "function")
    t = e;
  else if (Xt(e) === "object" && e !== null)
    t = Array.prototype.slice.call(e);
  else
    return /* @__PURE__ */ new Date(NaN);
  var n;
  return t.forEach(function(r) {
    var o = ie(r);
    (n === void 0 || n < o || isNaN(Number(o))) && (n = o);
  }), n || /* @__PURE__ */ new Date(NaN);
}
function Tp(e) {
  J(1, arguments);
  var t;
  if (e && typeof e.forEach == "function")
    t = e;
  else if (Xt(e) === "object" && e !== null)
    t = Array.prototype.slice.call(e);
  else
    return /* @__PURE__ */ new Date(NaN);
  var n;
  return t.forEach(function(r) {
    var o = ie(r);
    (n === void 0 || n > o || isNaN(o.getDate())) && (n = o);
  }), n || /* @__PURE__ */ new Date(NaN);
}
function Ie(e, t) {
  J(2, arguments);
  var n = Zt(e), r = Zt(t);
  return n.getTime() === r.getTime();
}
function Fo(e) {
  return J(1, arguments), e instanceof Date || Xt(e) === "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Sp(e) {
  if (J(1, arguments), !Fo(e) && typeof e != "number")
    return !1;
  var t = ie(e);
  return !isNaN(Number(t));
}
function hn(e, t) {
  J(2, arguments);
  var n = ie(e), r = ie(t), o = n.getFullYear() - r.getFullYear(), a = n.getMonth() - r.getMonth();
  return o * 12 + a;
}
var Pp = 6048e5;
function Dp(e, t, n) {
  J(2, arguments);
  var r = et(e, n), o = et(t, n), a = r.getTime() - bn(r), i = o.getTime() - bn(o);
  return Math.round((a - i) / Pp);
}
function Wo(e) {
  J(1, arguments);
  var t = ie(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function Le(e) {
  J(1, arguments);
  var t = ie(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function Mp(e) {
  J(1, arguments);
  var t = ie(e), n = /* @__PURE__ */ new Date(0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function jo(e, t) {
  var n, r, o, a, i, s, c, l;
  J(1, arguments);
  var u = wt(), d = Se((n = (r = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (i = t.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.weekStartsOn) !== null && o !== void 0 ? o : u.weekStartsOn) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var f = ie(e), p = f.getDay(), v = (p < d ? -7 : 0) + 6 - (p - d);
  return f.setDate(f.getDate() + v), f.setHours(23, 59, 59, 999), f;
}
function $s(e) {
  return J(1, arguments), jo(e, {
    weekStartsOn: 1
  });
}
function Op(e, t) {
  J(2, arguments);
  var n = Se(t);
  return $p(e, -n);
}
var Np = 864e5;
function Rp(e) {
  J(1, arguments);
  var t = ie(e), n = t.getTime();
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  var r = t.getTime(), o = n - r;
  return Math.floor(o / Np) + 1;
}
function tr(e) {
  J(1, arguments);
  var t = 1, n = ie(e), r = n.getUTCDay(), o = (r < t ? 7 : 0) + r - t;
  return n.setUTCDate(n.getUTCDate() - o), n.setUTCHours(0, 0, 0, 0), n;
}
function ys(e) {
  J(1, arguments);
  var t = ie(e), n = t.getUTCFullYear(), r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var o = tr(r), a = /* @__PURE__ */ new Date(0);
  a.setUTCFullYear(n, 0, 4), a.setUTCHours(0, 0, 0, 0);
  var i = tr(a);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= i.getTime() ? n : n - 1;
}
function kp(e) {
  J(1, arguments);
  var t = ys(e), n = /* @__PURE__ */ new Date(0);
  n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0);
  var r = tr(n);
  return r;
}
var Ap = 6048e5;
function Ip(e) {
  J(1, arguments);
  var t = ie(e), n = tr(t).getTime() - kp(t).getTime();
  return Math.round(n / Ap) + 1;
}
function nr(e, t) {
  var n, r, o, a, i, s, c, l;
  J(1, arguments);
  var u = wt(), d = Se((n = (r = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (i = t.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.weekStartsOn) !== null && o !== void 0 ? o : u.weekStartsOn) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var f = ie(e), p = f.getUTCDay(), v = (p < d ? 7 : 0) + p - d;
  return f.setUTCDate(f.getUTCDate() - v), f.setUTCHours(0, 0, 0, 0), f;
}
function ws(e, t) {
  var n, r, o, a, i, s, c, l;
  J(1, arguments);
  var u = ie(e), d = u.getUTCFullYear(), f = wt(), p = Se((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (i = t.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && o !== void 0 ? o : f.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = f.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(p >= 1 && p <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var v = /* @__PURE__ */ new Date(0);
  v.setUTCFullYear(d + 1, 0, p), v.setUTCHours(0, 0, 0, 0);
  var m = nr(v, t), b = /* @__PURE__ */ new Date(0);
  b.setUTCFullYear(d, 0, p), b.setUTCHours(0, 0, 0, 0);
  var $ = nr(b, t);
  return u.getTime() >= m.getTime() ? d + 1 : u.getTime() >= $.getTime() ? d : d - 1;
}
function Lp(e, t) {
  var n, r, o, a, i, s, c, l;
  J(1, arguments);
  var u = wt(), d = Se((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (i = t.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && o !== void 0 ? o : u.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), f = ws(e, t), p = /* @__PURE__ */ new Date(0);
  p.setUTCFullYear(f, 0, d), p.setUTCHours(0, 0, 0, 0);
  var v = nr(p, t);
  return v;
}
var Fp = 6048e5;
function Wp(e, t) {
  J(1, arguments);
  var n = ie(e), r = nr(n, t).getTime() - Lp(n, t).getTime();
  return Math.round(r / Fp) + 1;
}
function me(e, t) {
  for (var n = e < 0 ? "-" : "", r = Math.abs(e).toString(); r.length < t; )
    r = "0" + r;
  return n + r;
}
var jp = {
  // Year
  y: function(t, n) {
    var r = t.getUTCFullYear(), o = r > 0 ? r : 1 - r;
    return me(n === "yy" ? o % 100 : o, n.length);
  },
  // Month
  M: function(t, n) {
    var r = t.getUTCMonth();
    return n === "M" ? String(r + 1) : me(r + 1, 2);
  },
  // Day of the month
  d: function(t, n) {
    return me(t.getUTCDate(), n.length);
  },
  // AM or PM
  a: function(t, n) {
    var r = t.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (n) {
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
  h: function(t, n) {
    return me(t.getUTCHours() % 12 || 12, n.length);
  },
  // Hour [0-23]
  H: function(t, n) {
    return me(t.getUTCHours(), n.length);
  },
  // Minute
  m: function(t, n) {
    return me(t.getUTCMinutes(), n.length);
  },
  // Second
  s: function(t, n) {
    return me(t.getUTCSeconds(), n.length);
  },
  // Fraction of second
  S: function(t, n) {
    var r = n.length, o = t.getUTCMilliseconds(), a = Math.floor(o * Math.pow(10, r - 3));
    return me(a, n.length);
  }
};
const vt = jp;
var Kt = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Vp = {
  // Era
  G: function(t, n, r) {
    var o = t.getUTCFullYear() > 0 ? 1 : 0;
    switch (n) {
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
  y: function(t, n, r) {
    if (n === "yo") {
      var o = t.getUTCFullYear(), a = o > 0 ? o : 1 - o;
      return r.ordinalNumber(a, {
        unit: "year"
      });
    }
    return vt.y(t, n);
  },
  // Local week-numbering year
  Y: function(t, n, r, o) {
    var a = ws(t, o), i = a > 0 ? a : 1 - a;
    if (n === "YY") {
      var s = i % 100;
      return me(s, 2);
    }
    return n === "Yo" ? r.ordinalNumber(i, {
      unit: "year"
    }) : me(i, n.length);
  },
  // ISO week-numbering year
  R: function(t, n) {
    var r = ys(t);
    return me(r, n.length);
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
  u: function(t, n) {
    var r = t.getUTCFullYear();
    return me(r, n.length);
  },
  // Quarter
  Q: function(t, n, r) {
    var o = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (n) {
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
  q: function(t, n, r) {
    var o = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (n) {
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
  M: function(t, n, r) {
    var o = t.getUTCMonth();
    switch (n) {
      case "M":
      case "MM":
        return vt.M(t, n);
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
  L: function(t, n, r) {
    var o = t.getUTCMonth();
    switch (n) {
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
  w: function(t, n, r, o) {
    var a = Wp(t, o);
    return n === "wo" ? r.ordinalNumber(a, {
      unit: "week"
    }) : me(a, n.length);
  },
  // ISO week of year
  I: function(t, n, r) {
    var o = Ip(t);
    return n === "Io" ? r.ordinalNumber(o, {
      unit: "week"
    }) : me(o, n.length);
  },
  // Day of the month
  d: function(t, n, r) {
    return n === "do" ? r.ordinalNumber(t.getUTCDate(), {
      unit: "date"
    }) : vt.d(t, n);
  },
  // Day of year
  D: function(t, n, r) {
    var o = Rp(t);
    return n === "Do" ? r.ordinalNumber(o, {
      unit: "dayOfYear"
    }) : me(o, n.length);
  },
  // Day of week
  E: function(t, n, r) {
    var o = t.getUTCDay();
    switch (n) {
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
  e: function(t, n, r, o) {
    var a = t.getUTCDay(), i = (a - o.weekStartsOn + 8) % 7 || 7;
    switch (n) {
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
  c: function(t, n, r, o) {
    var a = t.getUTCDay(), i = (a - o.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "c":
        return String(i);
      case "cc":
        return me(i, n.length);
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
  i: function(t, n, r) {
    var o = t.getUTCDay(), a = o === 0 ? 7 : o;
    switch (n) {
      case "i":
        return String(a);
      case "ii":
        return me(a, n.length);
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
  a: function(t, n, r) {
    var o = t.getUTCHours(), a = o / 12 >= 1 ? "pm" : "am";
    switch (n) {
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
  b: function(t, n, r) {
    var o = t.getUTCHours(), a;
    switch (o === 12 ? a = Kt.noon : o === 0 ? a = Kt.midnight : a = o / 12 >= 1 ? "pm" : "am", n) {
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
  B: function(t, n, r) {
    var o = t.getUTCHours(), a;
    switch (o >= 17 ? a = Kt.evening : o >= 12 ? a = Kt.afternoon : o >= 4 ? a = Kt.morning : a = Kt.night, n) {
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
  h: function(t, n, r) {
    if (n === "ho") {
      var o = t.getUTCHours() % 12;
      return o === 0 && (o = 12), r.ordinalNumber(o, {
        unit: "hour"
      });
    }
    return vt.h(t, n);
  },
  // Hour [0-23]
  H: function(t, n, r) {
    return n === "Ho" ? r.ordinalNumber(t.getUTCHours(), {
      unit: "hour"
    }) : vt.H(t, n);
  },
  // Hour [0-11]
  K: function(t, n, r) {
    var o = t.getUTCHours() % 12;
    return n === "Ko" ? r.ordinalNumber(o, {
      unit: "hour"
    }) : me(o, n.length);
  },
  // Hour [1-24]
  k: function(t, n, r) {
    var o = t.getUTCHours();
    return o === 0 && (o = 24), n === "ko" ? r.ordinalNumber(o, {
      unit: "hour"
    }) : me(o, n.length);
  },
  // Minute
  m: function(t, n, r) {
    return n === "mo" ? r.ordinalNumber(t.getUTCMinutes(), {
      unit: "minute"
    }) : vt.m(t, n);
  },
  // Second
  s: function(t, n, r) {
    return n === "so" ? r.ordinalNumber(t.getUTCSeconds(), {
      unit: "second"
    }) : vt.s(t, n);
  },
  // Fraction of second
  S: function(t, n) {
    return vt.S(t, n);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(t, n, r, o) {
    var a = o._originalDate || t, i = a.getTimezoneOffset();
    if (i === 0)
      return "Z";
    switch (n) {
      case "X":
        return Ja(i);
      case "XXXX":
      case "XX":
        return Tt(i);
      case "XXXXX":
      case "XXX":
      default:
        return Tt(i, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(t, n, r, o) {
    var a = o._originalDate || t, i = a.getTimezoneOffset();
    switch (n) {
      case "x":
        return Ja(i);
      case "xxxx":
      case "xx":
        return Tt(i);
      case "xxxxx":
      case "xxx":
      default:
        return Tt(i, ":");
    }
  },
  // Timezone (GMT)
  O: function(t, n, r, o) {
    var a = o._originalDate || t, i = a.getTimezoneOffset();
    switch (n) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Qa(i, ":");
      case "OOOO":
      default:
        return "GMT" + Tt(i, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(t, n, r, o) {
    var a = o._originalDate || t, i = a.getTimezoneOffset();
    switch (n) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Qa(i, ":");
      case "zzzz":
      default:
        return "GMT" + Tt(i, ":");
    }
  },
  // Seconds timestamp
  t: function(t, n, r, o) {
    var a = o._originalDate || t, i = Math.floor(a.getTime() / 1e3);
    return me(i, n.length);
  },
  // Milliseconds timestamp
  T: function(t, n, r, o) {
    var a = o._originalDate || t, i = a.getTime();
    return me(i, n.length);
  }
};
function Qa(e, t) {
  var n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.floor(r / 60), a = r % 60;
  if (a === 0)
    return n + String(o);
  var i = t || "";
  return n + String(o) + i + me(a, 2);
}
function Ja(e, t) {
  if (e % 60 === 0) {
    var n = e > 0 ? "-" : "+";
    return n + me(Math.abs(e) / 60, 2);
  }
  return Tt(e, t);
}
function Tt(e, t) {
  var n = t || "", r = e > 0 ? "-" : "+", o = Math.abs(e), a = me(Math.floor(o / 60), 2), i = me(o % 60, 2);
  return r + a + n + i;
}
const Bp = Vp;
var ei = function(t, n) {
  switch (t) {
    case "P":
      return n.date({
        width: "short"
      });
    case "PP":
      return n.date({
        width: "medium"
      });
    case "PPP":
      return n.date({
        width: "long"
      });
    case "PPPP":
    default:
      return n.date({
        width: "full"
      });
  }
}, xs = function(t, n) {
  switch (t) {
    case "p":
      return n.time({
        width: "short"
      });
    case "pp":
      return n.time({
        width: "medium"
      });
    case "ppp":
      return n.time({
        width: "long"
      });
    case "pppp":
    default:
      return n.time({
        width: "full"
      });
  }
}, Yp = function(t, n) {
  var r = t.match(/(P+)(p+)?/) || [], o = r[1], a = r[2];
  if (!a)
    return ei(t, n);
  var i;
  switch (o) {
    case "P":
      i = n.dateTime({
        width: "short"
      });
      break;
    case "PP":
      i = n.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      i = n.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      i = n.dateTime({
        width: "full"
      });
      break;
  }
  return i.replace("{{date}}", ei(o, n)).replace("{{time}}", xs(a, n));
}, Hp = {
  p: xs,
  P: Yp
};
const Up = Hp;
var Kp = ["D", "DD"], Gp = ["YY", "YYYY"];
function zp(e) {
  return Kp.indexOf(e) !== -1;
}
function qp(e) {
  return Gp.indexOf(e) !== -1;
}
function ti(e, t, n) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var Xp = {
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
}, Zp = function(t, n, r) {
  var o, a = Xp[t];
  return typeof a == "string" ? o = a : n === 1 ? o = a.one : o = a.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + o : o + " ago" : o;
};
const Qp = Zp;
function Gr(e) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.width ? String(t.width) : e.defaultWidth, r = e.formats[n] || e.formats[e.defaultWidth];
    return r;
  };
}
var Jp = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, ev = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, tv = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, nv = {
  date: Gr({
    formats: Jp,
    defaultWidth: "full"
  }),
  time: Gr({
    formats: ev,
    defaultWidth: "full"
  }),
  dateTime: Gr({
    formats: tv,
    defaultWidth: "full"
  })
};
const rv = nv;
var ov = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, av = function(t, n, r, o) {
  return ov[t];
};
const iv = av;
function pn(e) {
  return function(t, n) {
    var r = n != null && n.context ? String(n.context) : "standalone", o;
    if (r === "formatting" && e.formattingValues) {
      var a = e.defaultFormattingWidth || e.defaultWidth, i = n != null && n.width ? String(n.width) : a;
      o = e.formattingValues[i] || e.formattingValues[a];
    } else {
      var s = e.defaultWidth, c = n != null && n.width ? String(n.width) : e.defaultWidth;
      o = e.values[c] || e.values[s];
    }
    var l = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[l];
  };
}
var sv = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, cv = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, lv = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, dv = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, uv = {
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
}, fv = {
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
}, pv = function(t, n) {
  var r = Number(t), o = r % 100;
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
}, vv = {
  ordinalNumber: pv,
  era: pn({
    values: sv,
    defaultWidth: "wide"
  }),
  quarter: pn({
    values: cv,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: pn({
    values: lv,
    defaultWidth: "wide"
  }),
  day: pn({
    values: dv,
    defaultWidth: "wide"
  }),
  dayPeriod: pn({
    values: uv,
    defaultWidth: "wide",
    formattingValues: fv,
    defaultFormattingWidth: "wide"
  })
};
const mv = vv;
function vn(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    var i = a[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? hv(s, function(d) {
      return d.test(i);
    }) : bv(s, function(d) {
      return d.test(i);
    }), l;
    l = e.valueCallback ? e.valueCallback(c) : c, l = n.valueCallback ? n.valueCallback(l) : l;
    var u = t.slice(i.length);
    return {
      value: l,
      rest: u
    };
  };
}
function bv(e, t) {
  for (var n in e)
    if (e.hasOwnProperty(n) && t(e[n]))
      return n;
}
function hv(e, t) {
  for (var n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function gv(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.match(e.matchPattern);
    if (!r)
      return null;
    var o = r[0], a = t.match(e.parsePattern);
    if (!a)
      return null;
    var i = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    i = n.valueCallback ? n.valueCallback(i) : i;
    var s = t.slice(o.length);
    return {
      value: i,
      rest: s
    };
  };
}
var $v = /^(\d+)(th|st|nd|rd)?/i, yv = /\d+/i, wv = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, xv = {
  any: [/^b/i, /^(a|c)/i]
}, Cv = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, _v = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Ev = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Tv = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, Sv = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Pv = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Dv = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Mv = {
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
}, Ov = {
  ordinalNumber: gv({
    matchPattern: $v,
    parsePattern: yv,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: vn({
    matchPatterns: wv,
    defaultMatchWidth: "wide",
    parsePatterns: xv,
    defaultParseWidth: "any"
  }),
  quarter: vn({
    matchPatterns: Cv,
    defaultMatchWidth: "wide",
    parsePatterns: _v,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: vn({
    matchPatterns: Ev,
    defaultMatchWidth: "wide",
    parsePatterns: Tv,
    defaultParseWidth: "any"
  }),
  day: vn({
    matchPatterns: Sv,
    defaultMatchWidth: "wide",
    parsePatterns: Pv,
    defaultParseWidth: "any"
  }),
  dayPeriod: vn({
    matchPatterns: Dv,
    defaultMatchWidth: "any",
    parsePatterns: Mv,
    defaultParseWidth: "any"
  })
};
const Nv = Ov;
var Rv = {
  code: "en-US",
  formatDistance: Qp,
  formatLong: rv,
  formatRelative: iv,
  localize: mv,
  match: Nv,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const Cs = Rv;
var kv = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Av = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Iv = /^'([^]*?)'?$/, Lv = /''/g, Fv = /[a-zA-Z]/;
function Ue(e, t, n) {
  var r, o, a, i, s, c, l, u, d, f, p, v, m, b, $, g, w, E;
  J(2, arguments);
  var S = String(t), L = wt(), M = (r = (o = n == null ? void 0 : n.locale) !== null && o !== void 0 ? o : L.locale) !== null && r !== void 0 ? r : Cs, W = Se((a = (i = (s = (c = n == null ? void 0 : n.firstWeekContainsDate) !== null && c !== void 0 ? c : n == null || (l = n.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && s !== void 0 ? s : L.firstWeekContainsDate) !== null && i !== void 0 ? i : (d = L.locale) === null || d === void 0 || (f = d.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && a !== void 0 ? a : 1);
  if (!(W >= 1 && W <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var H = Se((p = (v = (m = (b = n == null ? void 0 : n.weekStartsOn) !== null && b !== void 0 ? b : n == null || ($ = n.locale) === null || $ === void 0 || (g = $.options) === null || g === void 0 ? void 0 : g.weekStartsOn) !== null && m !== void 0 ? m : L.weekStartsOn) !== null && v !== void 0 ? v : (w = L.locale) === null || w === void 0 || (E = w.options) === null || E === void 0 ? void 0 : E.weekStartsOn) !== null && p !== void 0 ? p : 0);
  if (!(H >= 0 && H <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!M.localize)
    throw new RangeError("locale must contain localize property");
  if (!M.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var X = ie(e);
  if (!Sp(X))
    throw new RangeError("Invalid time value");
  var U = bn(X), q = Op(X, U), Y = {
    firstWeekContainsDate: W,
    weekStartsOn: H,
    locale: M,
    _originalDate: X
  }, D = S.match(Av).map(function(O) {
    var j = O[0];
    if (j === "p" || j === "P") {
      var R = Up[j];
      return R(O, M.formatLong);
    }
    return O;
  }).join("").match(kv).map(function(O) {
    if (O === "''")
      return "'";
    var j = O[0];
    if (j === "'")
      return Wv(O);
    var R = Bp[j];
    if (R)
      return !(n != null && n.useAdditionalWeekYearTokens) && qp(O) && ti(O, t, String(e)), !(n != null && n.useAdditionalDayOfYearTokens) && zp(O) && ti(O, t, String(e)), R(q, O, M.localize, Y);
    if (j.match(Fv))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + j + "`");
    return O;
  }).join("");
  return D;
}
function Wv(e) {
  var t = e.match(Iv);
  return t ? t[1].replace(Lv, "'") : e;
}
function jv(e) {
  J(1, arguments);
  var t = ie(e), n = t.getFullYear(), r = t.getMonth(), o = /* @__PURE__ */ new Date(0);
  return o.setFullYear(n, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
var Vv = 6048e5;
function Bv(e) {
  J(1, arguments);
  var t = ie(e), n = Ot(t).getTime() - xp(t).getTime();
  return Math.round(n / Vv) + 1;
}
function Yv(e) {
  J(1, arguments);
  var t = ie(e), n = t.getTime();
  return n;
}
function Hv(e) {
  return J(1, arguments), Math.floor(Yv(e) / 1e3);
}
function Uv(e, t) {
  var n, r, o, a, i, s, c, l;
  J(1, arguments);
  var u = ie(e), d = u.getFullYear(), f = wt(), p = Se((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (i = t.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && o !== void 0 ? o : f.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = f.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(p >= 1 && p <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var v = /* @__PURE__ */ new Date(0);
  v.setFullYear(d + 1, 0, p), v.setHours(0, 0, 0, 0);
  var m = et(v, t), b = /* @__PURE__ */ new Date(0);
  b.setFullYear(d, 0, p), b.setHours(0, 0, 0, 0);
  var $ = et(b, t);
  return u.getTime() >= m.getTime() ? d + 1 : u.getTime() >= $.getTime() ? d : d - 1;
}
function Kv(e, t) {
  var n, r, o, a, i, s, c, l;
  J(1, arguments);
  var u = wt(), d = Se((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (i = t.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && o !== void 0 ? o : u.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), f = Uv(e, t), p = /* @__PURE__ */ new Date(0);
  p.setFullYear(f, 0, d), p.setHours(0, 0, 0, 0);
  var v = et(p, t);
  return v;
}
var Gv = 6048e5;
function zv(e, t) {
  J(1, arguments);
  var n = ie(e), r = et(n, t).getTime() - Kv(n, t).getTime();
  return Math.round(r / Gv) + 1;
}
function qv(e) {
  J(1, arguments);
  var t = ie(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function Xv(e, t) {
  return J(1, arguments), Dp(qv(e), Le(e), t) + 1;
}
function _s(e, t) {
  J(2, arguments);
  var n = ie(e), r = ie(t);
  return n.getTime() > r.getTime();
}
function Es(e, t) {
  J(2, arguments);
  var n = ie(e), r = ie(t);
  return n.getTime() < r.getTime();
}
function Vo(e, t) {
  J(2, arguments);
  var n = ie(e), r = ie(t);
  return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth();
}
function Zv(e, t) {
  J(2, arguments);
  var n = ie(e), r = ie(t);
  return n.getFullYear() === r.getFullYear();
}
function ni(e, t) {
  J(2, arguments);
  var n = Se(t);
  return Ye(e, -n);
}
function zr(e, t) {
  J(2, arguments);
  var n = ie(e), r = Se(t), o = n.getFullYear(), a = n.getDate(), i = /* @__PURE__ */ new Date(0);
  i.setFullYear(o, r, 15), i.setHours(0, 0, 0, 0);
  var s = jv(i);
  return n.setMonth(r, Math.min(a, s)), n;
}
function ri(e, t) {
  J(2, arguments);
  var n = ie(e), r = Se(t);
  return isNaN(n.getTime()) ? /* @__PURE__ */ new Date(NaN) : (n.setFullYear(r), n);
}
const Qv = ({
  selected: e,
  onSelect: t,
  disabled: n,
  disabledDates: r,
  ...o
}) => /* @__PURE__ */ _.jsxs(il, { children: [
  /* @__PURE__ */ _.jsx(sl, { asChild: !0, disabled: n, children: /* @__PURE__ */ _.jsxs(
    ra,
    {
      variant: "outline",
      className: k(
        "~w-[240px] ~justify-start ~text-left ~font-normal",
        !e && "~text-muted-foreground"
      ),
      children: [
        /* @__PURE__ */ _.jsx(bs, { className: "~mr-2 ~h-4 ~w-4" }),
        e && e instanceof Date ? Ue(e, "PPP") : /* @__PURE__ */ _.jsx("span", { children: "Pick a date" })
      ]
    }
  ) }),
  /* @__PURE__ */ _.jsx(pa, { className: "~w-auto ~p-0", align: "start", children: /* @__PURE__ */ _.jsx(
    ua,
    {
      mode: "single",
      selected: e,
      onSelect: t,
      initialFocus: !0,
      disabled: r,
      ...o
    }
  ) })
] }), Jv = ({
  selected: e,
  onSelect: t,
  disabled: n,
  ...r
}) => /* @__PURE__ */ _.jsxs(il, { children: [
  /* @__PURE__ */ _.jsx(sl, { asChild: !0, disabled: n, children: /* @__PURE__ */ _.jsxs(
    ra,
    {
      variant: "outline",
      className: k(
        "~w-[240px] ~justify-start ~text-left ~font-normal",
        !e && "~text-muted-foreground"
      ),
      children: [
        /* @__PURE__ */ _.jsx(bs, { className: "~mr-2 ~h-4 ~w-4" }),
        e != null && e.from ? e.to ? /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
          Ue(e.from, "LLL dd, y"),
          " -",
          " ",
          Ue(e.to, "LLL dd, y")
        ] }) : `${Ue(e.from, "LLL dd, y")} - ?` : /* @__PURE__ */ _.jsx("span", { children: "Pick a date range" })
      ]
    }
  ) }),
  /* @__PURE__ */ _.jsx(pa, { className: "~w-auto ~p-0", align: "start", children: /* @__PURE__ */ _.jsx(
    ua,
    {
      initialFocus: !0,
      mode: "range",
      defaultMonth: e == null ? void 0 : e.from,
      selected: e,
      onSelect: t,
      numberOfMonths: 2,
      ...r
    }
  ) })
] }), em = (e) => e !== void 0 && !("getDate" in e), Hw = ({ mode: e = "single", ...t }) => {
  const [n, r] = G(
    t.selected
  );
  ur(() => {
    e === "single" && em(n) && n.from instanceof Date ? r(n.from) : e === "range" && n instanceof Date ? r({ from: n, to: n }) : r(void 0);
  }, [e]);
  const o = { ...t, selected: n, onSelect: r };
  if (e === "single")
    return /* @__PURE__ */ _.jsx(Qv, { ...o });
  if (e === "range")
    return /* @__PURE__ */ _.jsx(Jv, { ...o });
  throw new Error(`Invalid mode: ${e}`);
};
function tn(e) {
  const t = e + "CollectionProvider", [n, r] = _e(t), [o, a] = n(t, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  }), i = (p) => {
    const { scope: v, children: m } = p, b = x.useRef(null), $ = x.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ x.createElement(o, {
      scope: v,
      itemMap: $,
      collectionRef: b
    }, m);
  }, s = e + "CollectionSlot", c = /* @__PURE__ */ x.forwardRef((p, v) => {
    const { scope: m, children: b } = p, $ = a(s, m), g = re(v, $.collectionRef);
    return /* @__PURE__ */ x.createElement(lt, {
      ref: g
    }, b);
  }), l = e + "CollectionItemSlot", u = "data-radix-collection-item", d = /* @__PURE__ */ x.forwardRef((p, v) => {
    const { scope: m, children: b, ...$ } = p, g = x.useRef(null), w = re(v, g), E = a(l, m);
    return x.useEffect(() => (E.itemMap.set(g, {
      ref: g,
      ...$
    }), () => void E.itemMap.delete(g))), /* @__PURE__ */ x.createElement(lt, {
      [u]: "",
      ref: w
    }, b);
  });
  function f(p) {
    const v = a(e + "CollectionConsumer", p);
    return x.useCallback(() => {
      const b = v.collectionRef.current;
      if (!b)
        return [];
      const $ = Array.from(b.querySelectorAll(`[${u}]`));
      return Array.from(v.itemMap.values()).sort(
        (E, S) => $.indexOf(E.ref.current) - $.indexOf(S.ref.current)
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
const tm = /* @__PURE__ */ Ve(void 0);
function At(e) {
  const t = We(tm);
  return e || t || "ltr";
}
function nn(e) {
  return e.split("-")[1];
}
function Bo(e) {
  return e === "y" ? "height" : "width";
}
function it(e) {
  return e.split("-")[0];
}
function It(e) {
  return ["top", "bottom"].includes(it(e)) ? "x" : "y";
}
function oi(e, t, n) {
  let { reference: r, floating: o } = e;
  const a = r.x + r.width / 2 - o.width / 2, i = r.y + r.height / 2 - o.height / 2, s = It(t), c = Bo(s), l = r[c] / 2 - o[c] / 2, u = s === "x";
  let d;
  switch (it(t)) {
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
  switch (nn(t)) {
    case "start":
      d[s] -= l * (n && u ? -1 : 1);
      break;
    case "end":
      d[s] += l * (n && u ? -1 : 1);
  }
  return d;
}
const nm = async (e, t, n) => {
  const { placement: r = "bottom", strategy: o = "absolute", middleware: a = [], platform: i } = n, s = a.filter(Boolean), c = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let l = await i.getElementRects({ reference: e, floating: t, strategy: o }), { x: u, y: d } = oi(l, r, c), f = r, p = {}, v = 0;
  for (let m = 0; m < s.length; m++) {
    const { name: b, fn: $ } = s[m], { x: g, y: w, data: E, reset: S } = await $({ x: u, y: d, initialPlacement: r, placement: f, strategy: o, middlewareData: p, rects: l, platform: i, elements: { reference: e, floating: t } });
    u = g ?? u, d = w ?? d, p = { ...p, [b]: { ...p[b], ...E } }, S && v <= 50 && (v++, typeof S == "object" && (S.placement && (f = S.placement), S.rects && (l = S.rects === !0 ? await i.getElementRects({ reference: e, floating: t, strategy: o }) : S.rects), { x: u, y: d } = oi(l, f, c)), m = -1);
  }
  return { x: u, y: d, placement: f, strategy: o, middlewareData: p };
};
function dt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ts(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function rr(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function gn(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: a, rects: i, elements: s, strategy: c } = e, { boundary: l = "clippingAncestors", rootBoundary: u = "viewport", elementContext: d = "floating", altBoundary: f = !1, padding: p = 0 } = dt(t, e), v = Ts(p), m = s[f ? d === "floating" ? "reference" : "floating" : d], b = rr(await a.getClippingRect({ element: (n = await (a.isElement == null ? void 0 : a.isElement(m))) == null || n ? m : m.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)), boundary: l, rootBoundary: u, strategy: c })), $ = d === "floating" ? { ...i.floating, x: r, y: o } : i.reference, g = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating)), w = await (a.isElement == null ? void 0 : a.isElement(g)) && await (a.getScale == null ? void 0 : a.getScale(g)) || { x: 1, y: 1 }, E = rr(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: $, offsetParent: g, strategy: c }) : $);
  return { top: (b.top - E.top + v.top) / w.y, bottom: (E.bottom - b.bottom + v.bottom) / w.y, left: (b.left - E.left + v.left) / w.x, right: (E.right - b.right + v.right) / w.x };
}
const $n = Math.min, St = Math.max;
function fo(e, t, n) {
  return St(e, $n(t, n));
}
const ai = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { x: n, y: r, placement: o, rects: a, platform: i, elements: s } = t, { element: c, padding: l = 0 } = dt(e, t) || {};
  if (c == null)
    return {};
  const u = Ts(l), d = { x: n, y: r }, f = It(o), p = Bo(f), v = await i.getDimensions(c), m = f === "y", b = m ? "top" : "left", $ = m ? "bottom" : "right", g = m ? "clientHeight" : "clientWidth", w = a.reference[p] + a.reference[f] - d[f] - a.floating[p], E = d[f] - a.reference[f], S = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c));
  let L = S ? S[g] : 0;
  L && await (i.isElement == null ? void 0 : i.isElement(S)) || (L = s.floating[g] || a.floating[p]);
  const M = w / 2 - E / 2, W = L / 2 - v[p] / 2 - 1, H = $n(u[b], W), X = $n(u[$], W), U = H, q = L - v[p] - X, Y = L / 2 - v[p] / 2 + M, D = fo(U, Y, q), O = nn(o) != null && Y != D && a.reference[p] / 2 - (Y < U ? H : X) - v[p] / 2 < 0 ? Y < U ? U - Y : q - Y : 0;
  return { [f]: d[f] - O, data: { [f]: D, centerOffset: Y - D + O } };
} }), Ss = ["top", "right", "bottom", "left"];
Ss.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const rm = { left: "right", right: "left", bottom: "top", top: "bottom" };
function or(e) {
  return e.replace(/left|right|bottom|top/g, (t) => rm[t]);
}
function om(e, t, n) {
  n === void 0 && (n = !1);
  const r = nn(e), o = It(e), a = Bo(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (i = or(i)), { main: i, cross: or(i) };
}
const am = { start: "end", end: "start" };
function qr(e) {
  return e.replace(/start|end/g, (t) => am[t]);
}
const im = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: r, middlewareData: o, rects: a, initialPlacement: i, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: v = !0, ...m } = dt(e, t), b = it(r), $ = it(i) === i, g = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), w = d || ($ || !v ? [or(i)] : function(U) {
      const q = or(U);
      return [qr(U), q, qr(q)];
    }(i));
    d || p === "none" || w.push(...function(U, q, Y, D) {
      const O = nn(U);
      let j = function(R, N, V) {
        const Q = ["left", "right"], oe = ["right", "left"], ae = ["top", "bottom"], $e = ["bottom", "top"];
        switch (R) {
          case "top":
          case "bottom":
            return V ? N ? oe : Q : N ? Q : oe;
          case "left":
          case "right":
            return N ? ae : $e;
          default:
            return [];
        }
      }(it(U), Y === "start", D);
      return O && (j = j.map((R) => R + "-" + O), q && (j = j.concat(j.map(qr)))), j;
    }(i, v, p, g));
    const E = [i, ...w], S = await gn(t, m), L = [];
    let M = ((n = o.flip) == null ? void 0 : n.overflows) || [];
    if (l && L.push(S[b]), u) {
      const { main: U, cross: q } = om(r, a, g);
      L.push(S[U], S[q]);
    }
    if (M = [...M, { placement: r, overflows: L }], !L.every((U) => U <= 0)) {
      var W, H;
      const U = (((W = o.flip) == null ? void 0 : W.index) || 0) + 1, q = E[U];
      if (q)
        return { data: { index: U, overflows: M }, reset: { placement: q } };
      let Y = (H = M.filter((D) => D.overflows[0] <= 0).sort((D, O) => D.overflows[1] - O.overflows[1])[0]) == null ? void 0 : H.placement;
      if (!Y)
        switch (f) {
          case "bestFit": {
            var X;
            const D = (X = M.map((O) => [O.placement, O.overflows.filter((j) => j > 0).reduce((j, R) => j + R, 0)]).sort((O, j) => O[1] - j[1])[0]) == null ? void 0 : X[0];
            D && (Y = D);
            break;
          }
          case "initialPlacement":
            Y = i;
        }
      if (r !== Y)
        return { reset: { placement: Y } };
    }
    return {};
  } };
};
function ii(e, t) {
  return { top: e.top - t.height, right: e.right - t.width, bottom: e.bottom - t.height, left: e.left - t.width };
}
function si(e) {
  return Ss.some((t) => e[t] >= 0);
}
const sm = function(e) {
  return e === void 0 && (e = {}), { name: "hide", options: e, async fn(t) {
    const { rects: n } = t, { strategy: r = "referenceHidden", ...o } = dt(e, t);
    switch (r) {
      case "referenceHidden": {
        const a = ii(await gn(t, { ...o, elementContext: "reference" }), n.reference);
        return { data: { referenceHiddenOffsets: a, referenceHidden: si(a) } };
      }
      case "escaped": {
        const a = ii(await gn(t, { ...o, altBoundary: !0 }), n.floating);
        return { data: { escapedOffsets: a, escaped: si(a) } };
      }
      default:
        return {};
    }
  } };
}, cm = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: r } = t, o = await async function(a, i) {
      const { placement: s, platform: c, elements: l } = a, u = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), d = it(s), f = nn(s), p = It(s) === "x", v = ["left", "top"].includes(d) ? -1 : 1, m = u && p ? -1 : 1, b = dt(i, a);
      let { mainAxis: $, crossAxis: g, alignmentAxis: w } = typeof b == "number" ? { mainAxis: b, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...b };
      return f && typeof w == "number" && (g = f === "end" ? -1 * w : w), p ? { x: g * m, y: $ * v } : { x: $ * v, y: g * m };
    }(t, e);
    return { x: n + o.x, y: r + o.y, data: o };
  } };
};
function Ps(e) {
  return e === "x" ? "y" : "x";
}
const lm = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: n, y: r, placement: o } = t, { mainAxis: a = !0, crossAxis: i = !1, limiter: s = { fn: (b) => {
      let { x: $, y: g } = b;
      return { x: $, y: g };
    } }, ...c } = dt(e, t), l = { x: n, y: r }, u = await gn(t, c), d = It(it(o)), f = Ps(d);
    let p = l[d], v = l[f];
    if (a) {
      const b = d === "y" ? "bottom" : "right";
      p = fo(p + u[d === "y" ? "top" : "left"], p, p - u[b]);
    }
    if (i) {
      const b = f === "y" ? "bottom" : "right";
      v = fo(v + u[f === "y" ? "top" : "left"], v, v - u[b]);
    }
    const m = s.fn({ ...t, [d]: p, [f]: v });
    return { ...m, data: { x: m.x - n, y: m.y - r } };
  } };
}, dm = function(e) {
  return e === void 0 && (e = {}), { options: e, fn(t) {
    const { x: n, y: r, placement: o, rects: a, middlewareData: i } = t, { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = dt(e, t), u = { x: n, y: r }, d = It(o), f = Ps(d);
    let p = u[d], v = u[f];
    const m = dt(s, t), b = typeof m == "number" ? { mainAxis: m, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...m };
    if (c) {
      const w = d === "y" ? "height" : "width", E = a.reference[d] - a.floating[w] + b.mainAxis, S = a.reference[d] + a.reference[w] - b.mainAxis;
      p < E ? p = E : p > S && (p = S);
    }
    if (l) {
      var $, g;
      const w = d === "y" ? "width" : "height", E = ["top", "left"].includes(it(o)), S = a.reference[f] - a.floating[w] + (E && (($ = i.offset) == null ? void 0 : $[f]) || 0) + (E ? 0 : b.crossAxis), L = a.reference[f] + a.reference[w] + (E ? 0 : ((g = i.offset) == null ? void 0 : g[f]) || 0) - (E ? b.crossAxis : 0);
      v < S ? v = S : v > L && (v = L);
    }
    return { [d]: p, [f]: v };
  } };
}, um = function(e) {
  return e === void 0 && (e = {}), { name: "size", options: e, async fn(t) {
    const { placement: n, rects: r, platform: o, elements: a } = t, { apply: i = () => {
    }, ...s } = dt(e, t), c = await gn(t, s), l = it(n), u = nn(n), d = It(n) === "x", { width: f, height: p } = r.floating;
    let v, m;
    l === "top" || l === "bottom" ? (v = l, m = u === (await (o.isRTL == null ? void 0 : o.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (m = l, v = u === "end" ? "top" : "bottom");
    const b = p - c[v], $ = f - c[m], g = !t.middlewareData.shift;
    let w = b, E = $;
    if (d) {
      const L = f - c.left - c.right;
      E = u || g ? $n($, L) : L;
    } else {
      const L = p - c.top - c.bottom;
      w = u || g ? $n(b, L) : L;
    }
    if (g && !u) {
      const L = St(c.left, 0), M = St(c.right, 0), W = St(c.top, 0), H = St(c.bottom, 0);
      d ? E = f - 2 * (L !== 0 || M !== 0 ? L + M : St(c.left, c.right)) : w = p - 2 * (W !== 0 || H !== 0 ? W + H : St(c.top, c.bottom));
    }
    await i({ ...t, availableWidth: E, availableHeight: w });
    const S = await o.getDimensions(a.floating);
    return f !== S.width || p !== S.height ? { reset: { rects: !0 } } : {};
  } };
};
function je(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function tt(e) {
  return je(e).getComputedStyle(e);
}
function Ds(e) {
  return e instanceof je(e).Node;
}
function gt(e) {
  return Ds(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ge(e) {
  return e instanceof je(e).HTMLElement;
}
function ci(e) {
  return typeof ShadowRoot < "u" && (e instanceof je(e).ShadowRoot || e instanceof ShadowRoot);
}
function yn(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = tt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function fm(e) {
  return ["table", "td", "th"].includes(gt(e));
}
function po(e) {
  const t = Yo(), n = tt(e);
  return n.transform !== "none" || n.perspective !== "none" || !!n.containerType && n.containerType !== "normal" || !t && !!n.backdropFilter && n.backdropFilter !== "none" || !t && !!n.filter && n.filter !== "none" || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function Yo() {
  return !(typeof CSS > "u" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
}
function gr(e) {
  return ["html", "body", "#document"].includes(gt(e));
}
const vo = Math.min, Gt = Math.max, ar = Math.round, Yn = Math.floor, $t = (e) => ({ x: e, y: e });
function Ms(e) {
  const t = tt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Ge(e), a = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, s = ar(n) !== a || ar(r) !== i;
  return s && (n = a, r = i), { width: n, height: r, $: s };
}
function st(e) {
  return e instanceof je(e).Element;
}
function Ho(e) {
  return st(e) ? e : e.contextElement;
}
function zt(e) {
  const t = Ho(e);
  if (!Ge(t))
    return $t(1);
  const n = t.getBoundingClientRect(), { width: r, height: o, $: a } = Ms(t);
  let i = (a ? ar(n.width) : n.width) / r, s = (a ? ar(n.height) : n.height) / o;
  return i && Number.isFinite(i) || (i = 1), s && Number.isFinite(s) || (s = 1), { x: i, y: s };
}
const pm = $t(0);
function Os(e) {
  const t = je(e);
  return Yo() && t.visualViewport ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop } : pm;
}
function Nt(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = Ho(e);
  let i = $t(1);
  t && (r ? st(r) && (i = zt(r)) : i = zt(e));
  const s = function(f, p, v) {
    return p === void 0 && (p = !1), !(!v || p && v !== je(f)) && p;
  }(a, n, r) ? Os(a) : $t(0);
  let c = (o.left + s.x) / i.x, l = (o.top + s.y) / i.y, u = o.width / i.x, d = o.height / i.y;
  if (a) {
    const f = je(a), p = r && st(r) ? je(r) : r;
    let v = f.frameElement;
    for (; v && r && p !== f; ) {
      const m = zt(v), b = v.getBoundingClientRect(), $ = getComputedStyle(v), g = b.left + (v.clientLeft + parseFloat($.paddingLeft)) * m.x, w = b.top + (v.clientTop + parseFloat($.paddingTop)) * m.y;
      c *= m.x, l *= m.y, u *= m.x, d *= m.y, c += g, l += w, v = je(v).frameElement;
    }
  }
  return rr({ width: u, height: d, x: c, y: l });
}
function $r(e) {
  return st(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function ct(e) {
  return ((Ds(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Ns(e) {
  return Nt(ct(e)).left + $r(e).scrollLeft;
}
function Qt(e) {
  if (gt(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || ci(e) && e.host || ct(e);
  return ci(t) ? t.host : t;
}
function Rs(e) {
  const t = Qt(e);
  return gr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ge(t) && yn(t) ? t : Rs(t);
}
function ir(e, t) {
  var n;
  t === void 0 && (t = []);
  const r = Rs(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = je(r);
  return o ? t.concat(a, a.visualViewport || [], yn(r) ? r : []) : t.concat(r, ir(r));
}
function li(e, t, n) {
  let r;
  if (t === "viewport")
    r = function(o, a) {
      const i = je(o), s = ct(o), c = i.visualViewport;
      let l = s.clientWidth, u = s.clientHeight, d = 0, f = 0;
      if (c) {
        l = c.width, u = c.height;
        const p = Yo();
        (!p || p && a === "fixed") && (d = c.offsetLeft, f = c.offsetTop);
      }
      return { width: l, height: u, x: d, y: f };
    }(e, n);
  else if (t === "document")
    r = function(o) {
      const a = ct(o), i = $r(o), s = o.ownerDocument.body, c = Gt(a.scrollWidth, a.clientWidth, s.scrollWidth, s.clientWidth), l = Gt(a.scrollHeight, a.clientHeight, s.scrollHeight, s.clientHeight);
      let u = -i.scrollLeft + Ns(o);
      const d = -i.scrollTop;
      return tt(s).direction === "rtl" && (u += Gt(a.clientWidth, s.clientWidth) - c), { width: c, height: l, x: u, y: d };
    }(ct(e));
  else if (st(t))
    r = function(o, a) {
      const i = Nt(o, !0, a === "fixed"), s = i.top + o.clientTop, c = i.left + o.clientLeft, l = Ge(o) ? zt(o) : $t(1);
      return { width: o.clientWidth * l.x, height: o.clientHeight * l.y, x: c * l.x, y: s * l.y };
    }(t, n);
  else {
    const o = Os(e);
    r = { ...t, x: t.x - o.x, y: t.y - o.y };
  }
  return rr(r);
}
function ks(e, t) {
  const n = Qt(e);
  return !(n === t || !st(n) || gr(n)) && (tt(n).position === "fixed" || ks(n, t));
}
function vm(e, t, n) {
  const r = Ge(t), o = ct(t), a = n === "fixed", i = Nt(e, !0, a, t);
  let s = { scrollLeft: 0, scrollTop: 0 };
  const c = $t(0);
  if (r || !r && !a)
    if ((gt(t) !== "body" || yn(o)) && (s = $r(t)), Ge(t)) {
      const l = Nt(t, !0, a, t);
      c.x = l.x + t.clientLeft, c.y = l.y + t.clientTop;
    } else
      o && (c.x = Ns(o));
  return { x: i.left + s.scrollLeft - c.x, y: i.top + s.scrollTop - c.y, width: i.width, height: i.height };
}
function di(e, t) {
  return Ge(e) && tt(e).position !== "fixed" ? t ? t(e) : e.offsetParent : null;
}
function ui(e, t) {
  const n = je(e);
  if (!Ge(e))
    return n;
  let r = di(e, t);
  for (; r && fm(r) && tt(r).position === "static"; )
    r = di(r, t);
  return r && (gt(r) === "html" || gt(r) === "body" && tt(r).position === "static" && !po(r)) ? n : r || function(o) {
    let a = Qt(o);
    for (; Ge(a) && !gr(a); ) {
      if (po(a))
        return a;
      a = Qt(a);
    }
    return null;
  }(e) || n;
}
const mm = { convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: r } = e;
  const o = Ge(n), a = ct(n);
  if (n === a)
    return t;
  let i = { scrollLeft: 0, scrollTop: 0 }, s = $t(1);
  const c = $t(0);
  if ((o || !o && r !== "fixed") && ((gt(n) !== "body" || yn(a)) && (i = $r(n)), Ge(n))) {
    const l = Nt(n);
    s = zt(n), c.x = l.x + n.clientLeft, c.y = l.y + n.clientTop;
  }
  return { width: t.width * s.x, height: t.height * s.y, x: t.x * s.x - i.scrollLeft * s.x + c.x, y: t.y * s.y - i.scrollTop * s.y + c.y };
}, getDocumentElement: ct, getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const a = [...n === "clippingAncestors" ? function(c, l) {
    const u = l.get(c);
    if (u)
      return u;
    let d = ir(c).filter((m) => st(m) && gt(m) !== "body"), f = null;
    const p = tt(c).position === "fixed";
    let v = p ? Qt(c) : c;
    for (; st(v) && !gr(v); ) {
      const m = tt(v), b = po(v);
      b || m.position !== "fixed" || (f = null), (p ? !b && !f : !b && m.position === "static" && f && ["absolute", "fixed"].includes(f.position) || yn(v) && !b && ks(c, v)) ? d = d.filter(($) => $ !== v) : f = m, v = Qt(v);
    }
    return l.set(c, d), d;
  }(t, this._c) : [].concat(n), r], i = a[0], s = a.reduce((c, l) => {
    const u = li(t, l, o);
    return c.top = Gt(u.top, c.top), c.right = vo(u.right, c.right), c.bottom = vo(u.bottom, c.bottom), c.left = Gt(u.left, c.left), c;
  }, li(t, i, o));
  return { width: s.right - s.left, height: s.bottom - s.top, x: s.left, y: s.top };
}, getOffsetParent: ui, getElementRects: async function(e) {
  let { reference: t, floating: n, strategy: r } = e;
  const o = this.getOffsetParent || ui, a = this.getDimensions;
  return { reference: vm(t, await o(n), r), floating: { x: 0, y: 0, ...await a(n) } };
}, getClientRects: function(e) {
  return Array.from(e.getClientRects());
}, getDimensions: function(e) {
  return Ms(e);
}, getScale: zt, isElement: st, isRTL: function(e) {
  return getComputedStyle(e).direction === "rtl";
} };
function bm(e, t, n, r) {
  r === void 0 && (r = {});
  const { ancestorScroll: o = !0, ancestorResize: a = !0, elementResize: i = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = Ho(e), u = o || a ? [...l ? ir(l) : [], ...ir(t)] : [];
  u.forEach((b) => {
    o && b.addEventListener("scroll", n, { passive: !0 }), a && b.addEventListener("resize", n);
  });
  const d = l && s ? function(b, $) {
    let g, w = null;
    const E = ct(b);
    function S() {
      clearTimeout(g), w && w.disconnect(), w = null;
    }
    return function L(M, W) {
      M === void 0 && (M = !1), W === void 0 && (W = 1), S();
      const { left: H, top: X, width: U, height: q } = b.getBoundingClientRect();
      if (M || $(), !U || !q)
        return;
      const Y = { rootMargin: -Yn(X) + "px " + -Yn(E.clientWidth - (H + U)) + "px " + -Yn(E.clientHeight - (X + q)) + "px " + -Yn(H) + "px", threshold: Gt(0, vo(1, W)) || 1 };
      let D = !0;
      function O(j) {
        const R = j[0].intersectionRatio;
        if (R !== W) {
          if (!D)
            return L();
          R ? L(!1, R) : g = setTimeout(() => {
            L(!1, 1e-7);
          }, 100);
        }
        D = !1;
      }
      try {
        w = new IntersectionObserver(O, { ...Y, root: E.ownerDocument });
      } catch {
        w = new IntersectionObserver(O, Y);
      }
      w.observe(b);
    }(!0), S;
  }(l, n) : null;
  let f, p = -1, v = null;
  i && (v = new ResizeObserver((b) => {
    let [$] = b;
    $ && $.target === l && v && (v.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      v && v.observe(t);
    })), n();
  }), l && !c && v.observe(l), v.observe(t));
  let m = c ? Nt(e) : null;
  return c && function b() {
    const $ = Nt(e);
    !m || $.x === m.x && $.y === m.y && $.width === m.width && $.height === m.height || n(), m = $, f = requestAnimationFrame(b);
  }(), n(), () => {
    u.forEach((b) => {
      o && b.removeEventListener("scroll", n), a && b.removeEventListener("resize", n);
    }), d && d(), v && v.disconnect(), v = null, c && cancelAnimationFrame(f);
  };
}
const hm = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = { platform: mm, ...n }, a = { ...o.platform, _c: r };
  return nm(e, t, { ...o, platform: a });
}, gm = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? ai({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? ai({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
};
var qn = typeof document < "u" ? ur : z;
function sr(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n != t.length)
        return !1;
      for (r = n; r-- !== 0; )
        if (!sr(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const a = o[r];
      if (!(a === "_owner" && e.$$typeof) && !sr(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function As(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function fi(e, t) {
  const n = As(e);
  return Math.round(t * n) / n;
}
function pi(e) {
  const t = P.useRef(e);
  return qn(() => {
    t.current = e;
  }), t;
}
function $m(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: a,
      floating: i
    } = {},
    transform: s = !0,
    whileElementsMounted: c,
    open: l
  } = e, [u, d] = P.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [f, p] = P.useState(r);
  sr(f, r) || p(r);
  const [v, m] = P.useState(null), [b, $] = P.useState(null), g = P.useCallback((j) => {
    j != L.current && (L.current = j, m(j));
  }, [m]), w = P.useCallback((j) => {
    j !== M.current && (M.current = j, $(j));
  }, [$]), E = a || v, S = i || b, L = P.useRef(null), M = P.useRef(null), W = P.useRef(u), H = pi(c), X = pi(o), U = P.useCallback(() => {
    if (!L.current || !M.current)
      return;
    const j = {
      placement: t,
      strategy: n,
      middleware: f
    };
    X.current && (j.platform = X.current), hm(L.current, M.current, j).then((R) => {
      const N = {
        ...R,
        isPositioned: !0
      };
      q.current && !sr(W.current, N) && (W.current = N, Pd.flushSync(() => {
        d(N);
      }));
    });
  }, [f, t, n, X]);
  qn(() => {
    l === !1 && W.current.isPositioned && (W.current.isPositioned = !1, d((j) => ({
      ...j,
      isPositioned: !1
    })));
  }, [l]);
  const q = P.useRef(!1);
  qn(() => (q.current = !0, () => {
    q.current = !1;
  }), []), qn(() => {
    if (E && (L.current = E), S && (M.current = S), E && S) {
      if (H.current)
        return H.current(E, S, U);
      U();
    }
  }, [E, S, U, H]);
  const Y = P.useMemo(() => ({
    reference: L,
    floating: M,
    setReference: g,
    setFloating: w
  }), [g, w]), D = P.useMemo(() => ({
    reference: E,
    floating: S
  }), [E, S]), O = P.useMemo(() => {
    const j = {
      position: n,
      left: 0,
      top: 0
    };
    if (!D.floating)
      return j;
    const R = fi(D.floating, u.x), N = fi(D.floating, u.y);
    return s ? {
      ...j,
      transform: "translate(" + R + "px, " + N + "px)",
      ...As(D.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: R,
      top: N
    };
  }, [n, s, D.floating, u.x, u.y]);
  return P.useMemo(() => ({
    ...u,
    update: U,
    refs: Y,
    elements: D,
    floatingStyles: O
  }), [u, U, Y, D, O]);
}
function Sn(e) {
  const [t, n] = G(void 0);
  return Fe(() => {
    if (e) {
      n({
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
        n({
          width: i,
          height: s
        });
      });
      return r.observe(e, {
        box: "border-box"
      }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [
    e
  ]), t;
}
const Is = "Popper", [Ls, xt] = _e(Is), [ym, Fs] = Ls(Is), wm = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = G(null);
  return /* @__PURE__ */ h(ym, {
    scope: t,
    anchor: r,
    onAnchorChange: o
  }, n);
}, xm = "PopperAnchor", Cm = /* @__PURE__ */ T((e, t) => {
  const { __scopePopper: n, virtualRef: r, ...o } = e, a = Fs(xm, n), i = A(null), s = re(t, i);
  return z(() => {
    a.onAnchorChange((r == null ? void 0 : r.current) || i.current);
  }), r ? null : /* @__PURE__ */ h(K.div, C({}, o, {
    ref: s
  }));
}), Ws = "PopperContent", [_m, Uw] = Ls(Ws), Em = /* @__PURE__ */ T((e, t) => {
  var n, r, o, a, i, s, c, l;
  const { __scopePopper: u, side: d = "bottom", sideOffset: f = 0, align: p = "center", alignOffset: v = 0, arrowPadding: m = 0, collisionBoundary: b = [], collisionPadding: $ = 0, sticky: g = "partial", hideWhenDetached: w = !1, avoidCollisions: E = !0, onPlaced: S, ...L } = e, M = Fs(Ws, u), [W, H] = G(null), X = re(
    t,
    (De) => H(De)
  ), [U, q] = G(null), Y = Sn(U), D = (n = Y == null ? void 0 : Y.width) !== null && n !== void 0 ? n : 0, O = (r = Y == null ? void 0 : Y.height) !== null && r !== void 0 ? r : 0, j = d + (p !== "center" ? "-" + p : ""), R = typeof $ == "number" ? $ : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...$
  }, N = Array.isArray(b) ? b : [
    b
  ], V = N.length > 0, Q = {
    padding: R,
    boundary: N.filter(Tm),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: V
  }, { refs: oe, floatingStyles: ae, placement: $e, isPositioned: xe, middlewareData: Me } = $m({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: j,
    whileElementsMounted: bm,
    elements: {
      reference: M.anchor
    },
    middleware: [
      cm({
        mainAxis: f + O,
        alignmentAxis: v
      }),
      E && lm({
        mainAxis: !0,
        crossAxis: !1,
        limiter: g === "partial" ? dm() : void 0,
        ...Q
      }),
      E && im({
        ...Q
      }),
      um({
        ...Q,
        apply: ({ elements: De, rects: Xe, availableWidth: Ze, availableHeight: ft }) => {
          const { width: In, height: Wt } = Xe.reference, jt = De.floating.style;
          jt.setProperty("--radix-popper-available-width", `${Ze}px`), jt.setProperty("--radix-popper-available-height", `${ft}px`), jt.setProperty("--radix-popper-anchor-width", `${In}px`), jt.setProperty("--radix-popper-anchor-height", `${Wt}px`);
        }
      }),
      U && gm({
        element: U,
        padding: m
      }),
      Sm({
        arrowWidth: D,
        arrowHeight: O
      }),
      w && sm({
        strategy: "referenceHidden"
      })
    ]
  }), [Pe, Z] = js($e), se = Ee(S);
  Fe(() => {
    xe && (se == null || se());
  }, [
    xe,
    se
  ]);
  const ve = (o = Me.arrow) === null || o === void 0 ? void 0 : o.x, de = (a = Me.arrow) === null || a === void 0 ? void 0 : a.y, pe = ((i = Me.arrow) === null || i === void 0 ? void 0 : i.centerOffset) !== 0, [ue, Re] = G();
  return Fe(() => {
    W && Re(window.getComputedStyle(W).zIndex);
  }, [
    W
  ]), /* @__PURE__ */ h("div", {
    ref: oe.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: {
      ...ae,
      transform: xe ? ae.transform : "translate(0, -200%)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: ue,
      ["--radix-popper-transform-origin"]: [
        (s = Me.transformOrigin) === null || s === void 0 ? void 0 : s.x,
        (c = Me.transformOrigin) === null || c === void 0 ? void 0 : c.y
      ].join(" ")
    },
    dir: e.dir
  }, /* @__PURE__ */ h(_m, {
    scope: u,
    placedSide: Pe,
    onArrowChange: q,
    arrowX: ve,
    arrowY: de,
    shouldHideArrow: pe
  }, /* @__PURE__ */ h(K.div, C({
    "data-side": Pe,
    "data-align": Z
  }, L, {
    ref: X,
    style: {
      ...L.style,
      // if the PopperContent hasn't been placed yet (not all measurements done)
      // we prevent animations so that users's animation don't kick in too early referring wrong sides
      animation: xe ? void 0 : "none",
      // hide the content if using the hide middleware and should be hidden
      opacity: (l = Me.hide) !== null && l !== void 0 && l.referenceHidden ? 0 : void 0
    }
  }))));
});
function Tm(e) {
  return e !== null;
}
const Sm = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, r, o, a, i;
    const { placement: s, rects: c, middlewareData: l } = t, d = ((n = l.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0, f = d ? 0 : e.arrowWidth, p = d ? 0 : e.arrowHeight, [v, m] = js(s), b = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[m], $ = ((r = (o = l.arrow) === null || o === void 0 ? void 0 : o.x) !== null && r !== void 0 ? r : 0) + f / 2, g = ((a = (i = l.arrow) === null || i === void 0 ? void 0 : i.y) !== null && a !== void 0 ? a : 0) + p / 2;
    let w = "", E = "";
    return v === "bottom" ? (w = d ? b : `${$}px`, E = `${-p}px`) : v === "top" ? (w = d ? b : `${$}px`, E = `${c.floating.height + p}px`) : v === "right" ? (w = `${-p}px`, E = d ? b : `${g}px`) : v === "left" && (w = `${c.floating.width + p}px`, E = d ? b : `${g}px`), {
      data: {
        x: w,
        y: E
      }
    };
  }
});
function js(e) {
  const [t, n = "center"] = e.split("-");
  return [
    t,
    n
  ];
}
const Pn = wm, yr = Cm, wr = Em, Xr = "rovingFocusGroup.onEntryFocus", Pm = {
  bubbles: !1,
  cancelable: !0
}, Uo = "RovingFocusGroup", [mo, Vs, Dm] = tn(Uo), [Mm, rn] = _e(Uo, [
  Dm
]), [Om, Nm] = Mm(Uo), Rm = /* @__PURE__ */ T((e, t) => /* @__PURE__ */ h(mo.Provider, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ h(mo.Slot, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ h(km, C({}, e, {
  ref: t
}))))), km = /* @__PURE__ */ T((e, t) => {
  const { __scopeRovingFocusGroup: n, orientation: r, loop: o = !1, dir: a, currentTabStopId: i, defaultCurrentTabStopId: s, onCurrentTabStopIdChange: c, onEntryFocus: l, ...u } = e, d = A(null), f = re(t, d), p = At(a), [v = null, m] = Te({
    prop: i,
    defaultProp: s,
    onChange: c
  }), [b, $] = G(!1), g = Ee(l), w = Vs(n), E = A(!1), [S, L] = G(0);
  return z(() => {
    const M = d.current;
    if (M)
      return M.addEventListener(Xr, g), () => M.removeEventListener(Xr, g);
  }, [
    g
  ]), /* @__PURE__ */ h(Om, {
    scope: n,
    orientation: r,
    dir: p,
    loop: o,
    currentTabStopId: v,
    onItemFocus: te(
      (M) => m(M),
      [
        m
      ]
    ),
    onItemShiftTab: te(
      () => $(!0),
      []
    ),
    onFocusableItemAdd: te(
      () => L(
        (M) => M + 1
      ),
      []
    ),
    onFocusableItemRemove: te(
      () => L(
        (M) => M - 1
      ),
      []
    )
  }, /* @__PURE__ */ h(K.div, C({
    tabIndex: b || S === 0 ? -1 : 0,
    "data-orientation": r
  }, u, {
    ref: f,
    style: {
      outline: "none",
      ...e.style
    },
    onMouseDown: F(e.onMouseDown, () => {
      E.current = !0;
    }),
    onFocus: F(e.onFocus, (M) => {
      const W = !E.current;
      if (M.target === M.currentTarget && W && !b) {
        const H = new CustomEvent(Xr, Pm);
        if (M.currentTarget.dispatchEvent(H), !H.defaultPrevented) {
          const X = w().filter(
            (O) => O.focusable
          ), U = X.find(
            (O) => O.active
          ), q = X.find(
            (O) => O.id === v
          ), D = [
            U,
            q,
            ...X
          ].filter(Boolean).map(
            (O) => O.ref.current
          );
          Bs(D);
        }
      }
      E.current = !1;
    }),
    onBlur: F(
      e.onBlur,
      () => $(!1)
    )
  })));
}), Am = "RovingFocusGroupItem", Im = /* @__PURE__ */ T((e, t) => {
  const { __scopeRovingFocusGroup: n, focusable: r = !0, active: o = !1, tabStopId: a, ...i } = e, s = Oe(), c = a || s, l = Nm(Am, n), u = l.currentTabStopId === c, d = Vs(n), { onFocusableItemAdd: f, onFocusableItemRemove: p } = l;
  return z(() => {
    if (r)
      return f(), () => p();
  }, [
    r,
    f,
    p
  ]), /* @__PURE__ */ h(mo.ItemSlot, {
    scope: n,
    id: c,
    focusable: r,
    active: o
  }, /* @__PURE__ */ h(K.span, C({
    tabIndex: u ? 0 : -1,
    "data-orientation": l.orientation
  }, i, {
    ref: t,
    onMouseDown: F(e.onMouseDown, (v) => {
      r ? l.onItemFocus(c) : v.preventDefault();
    }),
    onFocus: F(
      e.onFocus,
      () => l.onItemFocus(c)
    ),
    onKeyDown: F(e.onKeyDown, (v) => {
      if (v.key === "Tab" && v.shiftKey) {
        l.onItemShiftTab();
        return;
      }
      if (v.target !== v.currentTarget)
        return;
      const m = Wm(v, l.orientation, l.dir);
      if (m !== void 0) {
        v.preventDefault();
        let $ = d().filter(
          (g) => g.focusable
        ).map(
          (g) => g.ref.current
        );
        if (m === "last")
          $.reverse();
        else if (m === "prev" || m === "next") {
          m === "prev" && $.reverse();
          const g = $.indexOf(v.currentTarget);
          $ = l.loop ? jm($, g + 1) : $.slice(g + 1);
        }
        setTimeout(
          () => Bs($)
        );
      }
    })
  })));
}), Lm = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Fm(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Wm(e, t, n) {
  const r = Fm(e.key, n);
  if (!(t === "vertical" && [
    "ArrowLeft",
    "ArrowRight"
  ].includes(r)) && !(t === "horizontal" && [
    "ArrowUp",
    "ArrowDown"
  ].includes(r)))
    return Lm[r];
}
function Bs(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function jm(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const Ko = Rm, Go = Im, bo = [
  "Enter",
  " "
], Vm = [
  "ArrowDown",
  "PageUp",
  "Home"
], Ys = [
  "ArrowUp",
  "PageDown",
  "End"
], Bm = [
  ...Vm,
  ...Ys
], Ym = {
  ltr: [
    ...bo,
    "ArrowRight"
  ],
  rtl: [
    ...bo,
    "ArrowLeft"
  ]
}, Hm = {
  ltr: [
    "ArrowLeft"
  ],
  rtl: [
    "ArrowRight"
  ]
}, xr = "Menu", [wn, Um, Km] = tn(xr), [Lt, Hs] = _e(xr, [
  Km,
  xt,
  rn
]), Cr = xt(), Us = rn(), [Ks, Ct] = Lt(xr), [Gm, Dn] = Lt(xr), zm = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: a, modal: i = !0 } = e, s = Cr(t), [c, l] = G(null), u = A(!1), d = Ee(a), f = At(o);
  return z(() => {
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
  }, []), /* @__PURE__ */ h(Pn, s, /* @__PURE__ */ h(Ks, {
    scope: t,
    open: n,
    onOpenChange: d,
    content: c,
    onContentChange: l
  }, /* @__PURE__ */ h(Gm, {
    scope: t,
    onClose: te(
      () => d(!1),
      [
        d
      ]
    ),
    isUsingKeyboardRef: u,
    dir: f,
    modal: i
  }, r)));
}, Gs = /* @__PURE__ */ T((e, t) => {
  const { __scopeMenu: n, ...r } = e, o = Cr(n);
  return /* @__PURE__ */ h(yr, C({}, o, r, {
    ref: t
  }));
}), zs = "MenuPortal", [qm, qs] = Lt(zs, {
  forceMount: void 0
}), Xm = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, a = Ct(zs, t);
  return /* @__PURE__ */ h(qm, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ h(Ne, {
    present: n || a.open
  }, /* @__PURE__ */ h(Tn, {
    asChild: !0,
    container: o
  }, r)));
}, Ke = "MenuContent", [Zm, zo] = Lt(Ke), Qm = /* @__PURE__ */ T((e, t) => {
  const n = qs(Ke, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Ct(Ke, e.__scopeMenu), i = Dn(Ke, e.__scopeMenu);
  return /* @__PURE__ */ h(wn.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ h(Ne, {
    present: r || a.open
  }, /* @__PURE__ */ h(wn.Slot, {
    scope: e.__scopeMenu
  }, i.modal ? /* @__PURE__ */ h(Jm, C({}, o, {
    ref: t
  })) : /* @__PURE__ */ h(eb, C({}, o, {
    ref: t
  })))));
}), Jm = /* @__PURE__ */ T((e, t) => {
  const n = Ct(Ke, e.__scopeMenu), r = A(null), o = re(t, r);
  return z(() => {
    const a = r.current;
    if (a)
      return hr(a);
  }, []), /* @__PURE__ */ h(qo, C({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: n.open,
    disableOutsideScroll: !0,
    onFocusOutside: F(
      e.onFocusOutside,
      (a) => a.preventDefault(),
      {
        checkForDefaultPrevented: !1
      }
    ),
    onDismiss: () => n.onOpenChange(!1)
  }));
}), eb = /* @__PURE__ */ T((e, t) => {
  const n = Ct(Ke, e.__scopeMenu);
  return /* @__PURE__ */ h(qo, C({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    disableOutsideScroll: !1,
    onDismiss: () => n.onOpenChange(!1)
  }));
}), qo = /* @__PURE__ */ T((e, t) => {
  const { __scopeMenu: n, loop: r = !1, trapFocus: o, onOpenAutoFocus: a, onCloseAutoFocus: i, disableOutsidePointerEvents: s, onEntryFocus: c, onEscapeKeyDown: l, onPointerDownOutside: u, onFocusOutside: d, onInteractOutside: f, onDismiss: p, disableOutsideScroll: v, ...m } = e, b = Ct(Ke, n), $ = Dn(Ke, n), g = Cr(n), w = Us(n), E = Um(n), [S, L] = G(null), M = A(null), W = re(t, M, b.onContentChange), H = A(0), X = A(""), U = A(0), q = A(null), Y = A("right"), D = A(0), O = v ? br : Rt, j = v ? {
    as: lt,
    allowPinchZoom: !0
  } : void 0, R = (V) => {
    var Q, oe;
    const ae = X.current + V, $e = E().filter(
      (ve) => !ve.disabled
    ), xe = document.activeElement, Me = (Q = $e.find(
      (ve) => ve.ref.current === xe
    )) === null || Q === void 0 ? void 0 : Q.textValue, Pe = $e.map(
      (ve) => ve.textValue
    ), Z = $b(Pe, ae, Me), se = (oe = $e.find(
      (ve) => ve.textValue === Z
    )) === null || oe === void 0 ? void 0 : oe.ref.current;
    (function ve(de) {
      X.current = de, window.clearTimeout(H.current), de !== "" && (H.current = window.setTimeout(
        () => ve(""),
        1e3
      ));
    })(ae), se && setTimeout(
      () => se.focus()
    );
  };
  z(() => () => window.clearTimeout(H.current), []), vr();
  const N = te((V) => {
    var Q, oe;
    return Y.current === ((Q = q.current) === null || Q === void 0 ? void 0 : Q.side) && wb(V, (oe = q.current) === null || oe === void 0 ? void 0 : oe.area);
  }, []);
  return /* @__PURE__ */ h(Zm, {
    scope: n,
    searchRef: X,
    onItemEnter: te((V) => {
      N(V) && V.preventDefault();
    }, [
      N
    ]),
    onItemLeave: te((V) => {
      var Q;
      N(V) || ((Q = M.current) === null || Q === void 0 || Q.focus(), L(null));
    }, [
      N
    ]),
    onTriggerLeave: te((V) => {
      N(V) && V.preventDefault();
    }, [
      N
    ]),
    pointerGraceTimerRef: U,
    onPointerGraceIntentChange: te((V) => {
      q.current = V;
    }, [])
  }, /* @__PURE__ */ h(O, j, /* @__PURE__ */ h(pr, {
    asChild: !0,
    trapped: o,
    onMountAutoFocus: F(a, (V) => {
      var Q;
      V.preventDefault(), (Q = M.current) === null || Q === void 0 || Q.focus();
    }),
    onUnmountAutoFocus: i
  }, /* @__PURE__ */ h(en, {
    asChild: !0,
    disableOutsidePointerEvents: s,
    onEscapeKeyDown: l,
    onPointerDownOutside: u,
    onFocusOutside: d,
    onInteractOutside: f,
    onDismiss: p
  }, /* @__PURE__ */ h(Ko, C({
    asChild: !0
  }, w, {
    dir: $.dir,
    orientation: "vertical",
    loop: r,
    currentTabStopId: S,
    onCurrentTabStopIdChange: L,
    onEntryFocus: F(c, (V) => {
      $.isUsingKeyboardRef.current || V.preventDefault();
    })
  }), /* @__PURE__ */ h(wr, C({
    role: "menu",
    "aria-orientation": "vertical",
    "data-state": nc(b.open),
    "data-radix-menu-content": "",
    dir: $.dir
  }, g, m, {
    ref: W,
    style: {
      outline: "none",
      ...m.style
    },
    onKeyDown: F(m.onKeyDown, (V) => {
      const oe = V.target.closest("[data-radix-menu-content]") === V.currentTarget, ae = V.ctrlKey || V.altKey || V.metaKey, $e = V.key.length === 1;
      oe && (V.key === "Tab" && V.preventDefault(), !ae && $e && R(V.key));
      const xe = M.current;
      if (V.target !== xe || !Bm.includes(V.key))
        return;
      V.preventDefault();
      const Pe = E().filter(
        (Z) => !Z.disabled
      ).map(
        (Z) => Z.ref.current
      );
      Ys.includes(V.key) && Pe.reverse(), hb(Pe);
    }),
    onBlur: F(e.onBlur, (V) => {
      V.currentTarget.contains(V.target) || (window.clearTimeout(H.current), X.current = "");
    }),
    onPointerMove: F(e.onPointerMove, xn((V) => {
      const Q = V.target, oe = D.current !== V.clientX;
      if (V.currentTarget.contains(Q) && oe) {
        const ae = V.clientX > D.current ? "right" : "left";
        Y.current = ae, D.current = V.clientX;
      }
    }))
  })))))));
}), Xs = /* @__PURE__ */ T((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ h(K.div, C({
    role: "group"
  }, r, {
    ref: t
  }));
}), tb = /* @__PURE__ */ T((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ h(K.div, C({}, r, {
    ref: t
  }));
}), ho = "MenuItem", vi = "menu.itemSelect", Xo = /* @__PURE__ */ T((e, t) => {
  const { disabled: n = !1, onSelect: r, ...o } = e, a = A(null), i = Dn(ho, e.__scopeMenu), s = zo(ho, e.__scopeMenu), c = re(t, a), l = A(!1), u = () => {
    const d = a.current;
    if (!n && d) {
      const f = new CustomEvent(vi, {
        bubbles: !0,
        cancelable: !0
      });
      d.addEventListener(
        vi,
        (p) => r == null ? void 0 : r(p),
        {
          once: !0
        }
      ), Po(d, f), f.defaultPrevented ? l.current = !1 : i.onClose();
    }
  };
  return /* @__PURE__ */ h(Zs, C({}, o, {
    ref: c,
    disabled: n,
    onClick: F(e.onClick, u),
    onPointerDown: (d) => {
      var f;
      (f = e.onPointerDown) === null || f === void 0 || f.call(e, d), l.current = !0;
    },
    onPointerUp: F(e.onPointerUp, (d) => {
      var f;
      l.current || (f = d.currentTarget) === null || f === void 0 || f.click();
    }),
    onKeyDown: F(e.onKeyDown, (d) => {
      const f = s.searchRef.current !== "";
      n || f && d.key === " " || bo.includes(d.key) && (d.currentTarget.click(), d.preventDefault());
    })
  }));
}), Zs = /* @__PURE__ */ T((e, t) => {
  const { __scopeMenu: n, disabled: r = !1, textValue: o, ...a } = e, i = zo(ho, n), s = Us(n), c = A(null), l = re(t, c), [u, d] = G(!1), [f, p] = G("");
  return z(() => {
    const v = c.current;
    if (v) {
      var m;
      p(((m = v.textContent) !== null && m !== void 0 ? m : "").trim());
    }
  }, [
    a.children
  ]), /* @__PURE__ */ h(wn.ItemSlot, {
    scope: n,
    disabled: r,
    textValue: o ?? f
  }, /* @__PURE__ */ h(Go, C({
    asChild: !0
  }, s, {
    focusable: !r
  }), /* @__PURE__ */ h(K.div, C({
    role: "menuitem",
    "data-highlighted": u ? "" : void 0,
    "aria-disabled": r || void 0,
    "data-disabled": r ? "" : void 0
  }, a, {
    ref: l,
    onPointerMove: F(e.onPointerMove, xn((v) => {
      r ? i.onItemLeave(v) : (i.onItemEnter(v), v.defaultPrevented || v.currentTarget.focus());
    })),
    onPointerLeave: F(e.onPointerLeave, xn(
      (v) => i.onItemLeave(v)
    )),
    onFocus: F(
      e.onFocus,
      () => d(!0)
    ),
    onBlur: F(
      e.onBlur,
      () => d(!1)
    )
  }))));
}), nb = /* @__PURE__ */ T((e, t) => {
  const { checked: n = !1, onCheckedChange: r, ...o } = e;
  return /* @__PURE__ */ h(Js, {
    scope: e.__scopeMenu,
    checked: n
  }, /* @__PURE__ */ h(Xo, C({
    role: "menuitemcheckbox",
    "aria-checked": cr(n) ? "mixed" : n
  }, o, {
    ref: t,
    "data-state": Zo(n),
    onSelect: F(
      o.onSelect,
      () => r == null ? void 0 : r(cr(n) ? !0 : !n),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), rb = "MenuRadioGroup", [ob, ab] = Lt(rb, {
  value: void 0,
  onValueChange: () => {
  }
}), ib = /* @__PURE__ */ T((e, t) => {
  const { value: n, onValueChange: r, ...o } = e, a = Ee(r);
  return /* @__PURE__ */ h(ob, {
    scope: e.__scopeMenu,
    value: n,
    onValueChange: a
  }, /* @__PURE__ */ h(Xs, C({}, o, {
    ref: t
  })));
}), sb = "MenuRadioItem", cb = /* @__PURE__ */ T((e, t) => {
  const { value: n, ...r } = e, o = ab(sb, e.__scopeMenu), a = n === o.value;
  return /* @__PURE__ */ h(Js, {
    scope: e.__scopeMenu,
    checked: a
  }, /* @__PURE__ */ h(Xo, C({
    role: "menuitemradio",
    "aria-checked": a
  }, r, {
    ref: t,
    "data-state": Zo(a),
    onSelect: F(r.onSelect, () => {
      var i;
      return (i = o.onValueChange) === null || i === void 0 ? void 0 : i.call(o, n);
    }, {
      checkForDefaultPrevented: !1
    })
  })));
}), Qs = "MenuItemIndicator", [Js, lb] = Lt(Qs, {
  checked: !1
}), db = /* @__PURE__ */ T((e, t) => {
  const { __scopeMenu: n, forceMount: r, ...o } = e, a = lb(Qs, n);
  return /* @__PURE__ */ h(Ne, {
    present: r || cr(a.checked) || a.checked === !0
  }, /* @__PURE__ */ h(K.span, C({}, o, {
    ref: t,
    "data-state": Zo(a.checked)
  })));
}), ub = /* @__PURE__ */ T((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ h(K.div, C({
    role: "separator",
    "aria-orientation": "horizontal"
  }, r, {
    ref: t
  }));
}), ec = "MenuSub", [fb, tc] = Lt(ec), pb = (e) => {
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: o } = e, a = Ct(ec, t), i = Cr(t), [s, c] = G(null), [l, u] = G(null), d = Ee(o);
  return z(() => (a.open === !1 && d(!1), () => d(!1)), [
    a.open,
    d
  ]), /* @__PURE__ */ h(Pn, i, /* @__PURE__ */ h(Ks, {
    scope: t,
    open: r,
    onOpenChange: d,
    content: l,
    onContentChange: u
  }, /* @__PURE__ */ h(fb, {
    scope: t,
    contentId: Oe(),
    triggerId: Oe(),
    trigger: s,
    onTriggerChange: c
  }, n)));
}, Hn = "MenuSubTrigger", vb = /* @__PURE__ */ T((e, t) => {
  const n = Ct(Hn, e.__scopeMenu), r = Dn(Hn, e.__scopeMenu), o = tc(Hn, e.__scopeMenu), a = zo(Hn, e.__scopeMenu), i = A(null), { pointerGraceTimerRef: s, onPointerGraceIntentChange: c } = a, l = {
    __scopeMenu: e.__scopeMenu
  }, u = te(() => {
    i.current && window.clearTimeout(i.current), i.current = null;
  }, []);
  return z(
    () => u,
    [
      u
    ]
  ), z(() => {
    const d = s.current;
    return () => {
      window.clearTimeout(d), c(null);
    };
  }, [
    s,
    c
  ]), /* @__PURE__ */ h(Gs, C({
    asChild: !0
  }, l), /* @__PURE__ */ h(Zs, C({
    id: o.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": n.open,
    "aria-controls": o.contentId,
    "data-state": nc(n.open)
  }, e, {
    ref: fr(t, o.onTriggerChange),
    onClick: (d) => {
      var f;
      (f = e.onClick) === null || f === void 0 || f.call(e, d), !(e.disabled || d.defaultPrevented) && (d.currentTarget.focus(), n.open || n.onOpenChange(!0));
    },
    onPointerMove: F(e.onPointerMove, xn((d) => {
      a.onItemEnter(d), !d.defaultPrevented && !e.disabled && !n.open && !i.current && (a.onPointerGraceIntentChange(null), i.current = window.setTimeout(() => {
        n.onOpenChange(!0), u();
      }, 100));
    })),
    onPointerLeave: F(e.onPointerLeave, xn((d) => {
      var f;
      u();
      const p = (f = n.content) === null || f === void 0 ? void 0 : f.getBoundingClientRect();
      if (p) {
        var v;
        const m = (v = n.content) === null || v === void 0 ? void 0 : v.dataset.side, b = m === "right", $ = b ? -5 : 5, g = p[b ? "left" : "right"], w = p[b ? "right" : "left"];
        a.onPointerGraceIntentChange({
          area: [
            // consistently within polygon bounds
            {
              x: d.clientX + $,
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
    onKeyDown: F(e.onKeyDown, (d) => {
      const f = a.searchRef.current !== "";
      if (!(e.disabled || f && d.key === " ") && Ym[r.dir].includes(d.key)) {
        var p;
        n.onOpenChange(!0), (p = n.content) === null || p === void 0 || p.focus(), d.preventDefault();
      }
    })
  })));
}), mb = "MenuSubContent", bb = /* @__PURE__ */ T((e, t) => {
  const n = qs(Ke, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Ct(Ke, e.__scopeMenu), i = Dn(Ke, e.__scopeMenu), s = tc(mb, e.__scopeMenu), c = A(null), l = re(t, c);
  return /* @__PURE__ */ h(wn.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ h(Ne, {
    present: r || a.open
  }, /* @__PURE__ */ h(wn.Slot, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ h(qo, C({
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
    onFocusOutside: F(e.onFocusOutside, (u) => {
      u.target !== s.trigger && a.onOpenChange(!1);
    }),
    onEscapeKeyDown: F(e.onEscapeKeyDown, (u) => {
      i.onClose(), u.preventDefault();
    }),
    onKeyDown: F(e.onKeyDown, (u) => {
      const d = u.currentTarget.contains(u.target), f = Hm[i.dir].includes(u.key);
      if (d && f) {
        var p;
        a.onOpenChange(!1), (p = s.trigger) === null || p === void 0 || p.focus(), u.preventDefault();
      }
    })
  })))));
});
function nc(e) {
  return e ? "open" : "closed";
}
function cr(e) {
  return e === "indeterminate";
}
function Zo(e) {
  return cr(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function hb(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function gb(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
function $b(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(
    (l) => l === t[0]
  ) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let i = gb(e, Math.max(a, 0));
  o.length === 1 && (i = i.filter(
    (l) => l !== n
  ));
  const c = i.find(
    (l) => l.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function yb(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, i = t.length - 1; a < t.length; i = a++) {
    const s = t[a].x, c = t[a].y, l = t[i].x, u = t[i].y;
    c > r != u > r && n < (l - s) * (r - c) / (u - c) + s && (o = !o);
  }
  return o;
}
function wb(e, t) {
  if (!t)
    return !1;
  const n = {
    x: e.clientX,
    y: e.clientY
  };
  return yb(n, t);
}
function xn(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const xb = zm, Cb = Gs, _b = Xm, Eb = Qm, Tb = Xs, Sb = tb, Pb = Xo, Db = nb, Mb = ib, Ob = cb, Nb = db, Rb = ub, kb = pb, Ab = vb, Ib = bb, rc = "DropdownMenu", [Lb, Kw] = _e(rc, [
  Hs
]), Ae = Hs(), [Fb, oc] = Lb(rc), Wb = (e) => {
  const { __scopeDropdownMenu: t, children: n, dir: r, open: o, defaultOpen: a, onOpenChange: i, modal: s = !0 } = e, c = Ae(t), l = A(null), [u = !1, d] = Te({
    prop: o,
    defaultProp: a,
    onChange: i
  });
  return /* @__PURE__ */ h(Fb, {
    scope: t,
    triggerId: Oe(),
    triggerRef: l,
    contentId: Oe(),
    open: u,
    onOpenChange: d,
    onOpenToggle: te(
      () => d(
        (f) => !f
      ),
      [
        d
      ]
    ),
    modal: s
  }, /* @__PURE__ */ h(xb, C({}, c, {
    open: u,
    onOpenChange: d,
    dir: r,
    modal: s
  }), n));
}, jb = "DropdownMenuTrigger", Vb = /* @__PURE__ */ T((e, t) => {
  const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, a = oc(jb, n), i = Ae(n);
  return /* @__PURE__ */ h(Cb, C({
    asChild: !0
  }, i), /* @__PURE__ */ h(K.button, C({
    type: "button",
    id: a.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": a.open,
    "aria-controls": a.open ? a.contentId : void 0,
    "data-state": a.open ? "open" : "closed",
    "data-disabled": r ? "" : void 0,
    disabled: r
  }, o, {
    ref: fr(t, a.triggerRef),
    onPointerDown: F(e.onPointerDown, (s) => {
      !r && s.button === 0 && s.ctrlKey === !1 && (a.onOpenToggle(), a.open || s.preventDefault());
    }),
    onKeyDown: F(e.onKeyDown, (s) => {
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
}), Bb = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = Ae(t);
  return /* @__PURE__ */ h(_b, C({}, r, n));
}, Yb = "DropdownMenuContent", Hb = /* @__PURE__ */ T((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = oc(Yb, n), a = Ae(n), i = A(!1);
  return /* @__PURE__ */ h(Eb, C({
    id: o.contentId,
    "aria-labelledby": o.triggerId
  }, a, r, {
    ref: t,
    onCloseAutoFocus: F(e.onCloseAutoFocus, (s) => {
      var c;
      i.current || (c = o.triggerRef.current) === null || c === void 0 || c.focus(), i.current = !1, s.preventDefault();
    }),
    onInteractOutside: F(e.onInteractOutside, (s) => {
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
}), Ub = /* @__PURE__ */ T((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ae(n);
  return /* @__PURE__ */ h(Tb, C({}, o, r, {
    ref: t
  }));
}), Kb = /* @__PURE__ */ T((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ae(n);
  return /* @__PURE__ */ h(Sb, C({}, o, r, {
    ref: t
  }));
}), Gb = /* @__PURE__ */ T((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ae(n);
  return /* @__PURE__ */ h(Pb, C({}, o, r, {
    ref: t
  }));
}), zb = /* @__PURE__ */ T((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ae(n);
  return /* @__PURE__ */ h(Db, C({}, o, r, {
    ref: t
  }));
}), qb = /* @__PURE__ */ T((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ae(n);
  return /* @__PURE__ */ h(Mb, C({}, o, r, {
    ref: t
  }));
}), Xb = /* @__PURE__ */ T((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ae(n);
  return /* @__PURE__ */ h(Ob, C({}, o, r, {
    ref: t
  }));
}), Zb = /* @__PURE__ */ T((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ae(n);
  return /* @__PURE__ */ h(Nb, C({}, o, r, {
    ref: t
  }));
}), Qb = /* @__PURE__ */ T((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ae(n);
  return /* @__PURE__ */ h(Rb, C({}, o, r, {
    ref: t
  }));
}), Jb = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, i = Ae(t), [s = !1, c] = Te({
    prop: r,
    defaultProp: a,
    onChange: o
  });
  return /* @__PURE__ */ h(kb, C({}, i, {
    open: s,
    onOpenChange: c
  }), n);
}, e0 = /* @__PURE__ */ T((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ae(n);
  return /* @__PURE__ */ h(Ab, C({}, o, r, {
    ref: t
  }));
}), t0 = /* @__PURE__ */ T((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ae(n);
  return /* @__PURE__ */ h(Ib, C({}, o, r, {
    ref: t,
    style: {
      ...e.style,
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
}), n0 = Wb, r0 = Vb, ac = Bb, ic = Hb, o0 = Ub, sc = Kb, cc = Gb, lc = zb, a0 = qb, dc = Xb, uc = Zb, fc = Qb, i0 = Jb, pc = e0, vc = t0, Gw = n0, zw = o0, qw = ac, Xw = i0, Zw = a0, Mn = "~pl-6", on = "~leading-6", Qw = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _.jsx(
  r0,
  {
    ref: n,
    className: k(
      "tw-reset data-[disabled]:~opacity-50",
      on,
      e
    ),
    ...t
  }
)), s0 = x.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ _.jsxs(
  pc,
  {
    ref: o,
    className: k(
      "~flex ~cursor-default ~select-none ~items-center ~rounded-sm ~px-2 ~py-1.5 ~outline-none focus:~bg-accent data-[state=open]:~bg-accent",
      on,
      t && Mn,
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ _.jsx(hs, { className: "~ml-auto ~h-4 ~w-4" })
    ]
  }
));
s0.displayName = pc.displayName;
const c0 = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _.jsx(
  vc,
  {
    ref: n,
    className: k(
      "~z-50 ~min-w-[8rem] ~overflow-hidden ~rounded-md ~border ~bg-popover ~p-1 ~text-popover-foreground ~shadow-lg",
      "data-[state=open]:~animate-in data-[state=open]:~fade-in-0 data-[state=open]:~zoom-in-95",
      "data-[state=closed]:~animate-out data-[state=closed]:~fade-out-0 data-[state=closed]:~zoom-out-95",
      "data-[side=bottom]:~slide-in-from-top-2 data-[side=left]:~slide-in-from-right-2 data-[side=right]:~slide-in-from-left-2 data-[side=top]:~slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
c0.displayName = vc.displayName;
const l0 = x.forwardRef(
  ({
    className: e,
    sideOffset: t = 4,
    align: n = "start",
    collisionPadding: r = 10,
    ...o
  }, a) => /* @__PURE__ */ _.jsx(ac, { children: /* @__PURE__ */ _.jsx(
    ic,
    {
      ref: a,
      sideOffset: t,
      collisionPadding: r,
      align: n,
      className: k(
        "tw-reset ~z-50 ~min-w-[8rem] ~overflow-hidden ~rounded-md ~border ~bg-popover ~p-1 ~text-popover-foreground ~shadow-md",
        "data-[state=open]:~animate-in data-[state=open]:~fade-in-0 data-[state=open]:~zoom-in-95",
        "data-[state=closed]:~animate-out data-[state=closed]:~fade-out-0 data-[state=closed]:~zoom-out-95",
        "data-[side=bottom]:~slide-in-from-top-2 data-[side=left]:~slide-in-from-right-2 data-[side=right]:~slide-in-from-left-2 data-[side=top]:~slide-in-from-bottom-2",
        e
      ),
      ...o
    }
  ) })
);
l0.displayName = ic.displayName;
const d0 = x.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ _.jsx(
  cc,
  {
    ref: r,
    className: k(
      "~relative ~flex ~cursor-pointer ~select-none ~items-center ~rounded-sm ~px-2 ~py-1.5 ~outline-none ~transition-colors",
      "focus:~bg-accent focus:~text-accent-foreground",
      "data-[disabled]:~pointer-events-none data-[disabled]:~opacity-50",
      on,
      t && Mn,
      e
    ),
    ...n
  }
));
d0.displayName = cc.displayName;
const u0 = x.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ _.jsxs(
  lc,
  {
    ref: o,
    className: k(
      "~relative ~flex ~cursor-pointer ~select-none ~items-center ~rounded-sm ~py-1.5 ~pr-2 ~outline-none ~transition-colors",
      "focus:~bg-accent focus:~text-accent-foreground",
      "data-[disabled]:~pointer-events-none data-[disabled]:~opacity-50",
      on,
      Mn,
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ _.jsx("span", { className: "~absolute ~left-1 ~flex ~h-3.5 ~w-3.5 ~items-center ~justify-center", children: /* @__PURE__ */ _.jsx(uc, { children: /* @__PURE__ */ _.jsx(Lo, { className: "~h-4 ~w-4" }) }) }),
      t
    ]
  }
));
u0.displayName = lc.displayName;
const f0 = x.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ _.jsxs(
  dc,
  {
    ref: r,
    className: k(
      "~relative ~flex ~cursor-pointer ~select-none ~items-center ~rounded-sm ~py-1.5 ~pr-2 ~outline-none ~transition-colors",
      "focus:~bg-accent focus:~text-accent-foreground",
      "data-[disabled]:~pointer-events-none data-[disabled]:~opacity-50",
      on,
      Mn,
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ _.jsx("span", { className: "~absolute ~left-1 ~flex ~h-3.5 ~w-3.5 ~items-center ~justify-center", children: /* @__PURE__ */ _.jsx(uc, { children: /* @__PURE__ */ _.jsx(gp, { className: "~h-4 ~w-4 ~fill-current" }) }) }),
      t
    ]
  }
));
f0.displayName = dc.displayName;
const p0 = x.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ _.jsx(
  sc,
  {
    ref: r,
    className: k(
      "~px-2 ~py-1.5 ~font-medium",
      on,
      t && Mn,
      e
    ),
    ...n
  }
));
p0.displayName = sc.displayName;
const v0 = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _.jsx(
  fc,
  {
    ref: n,
    className: k("~-mx-1 ~my-1 ~h-px ~bg-border", e),
    ...t
  }
));
v0.displayName = fc.displayName;
const m0 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ _.jsx(
  "span",
  {
    className: k(
      "~ml-auto ~text-xs ~tracking-widest ~opacity-60",
      e
    ),
    ...t
  }
);
m0.displayName = "DropdownMenuShortcut";
function On(e) {
  const t = A({
    value: e,
    previous: e
  });
  return Qe(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [
    e
  ]);
}
const mc = "Radio", [b0, bc] = _e(mc), [h0, g0] = b0(mc), $0 = /* @__PURE__ */ T((e, t) => {
  const { __scopeRadio: n, name: r, checked: o = !1, required: a, disabled: i, value: s = "on", onCheck: c, ...l } = e, [u, d] = G(null), f = re(
    t,
    (m) => d(m)
  ), p = A(!1), v = u ? !!u.closest("form") : !0;
  return /* @__PURE__ */ h(h0, {
    scope: n,
    checked: o,
    disabled: i
  }, /* @__PURE__ */ h(K.button, C({
    type: "button",
    role: "radio",
    "aria-checked": o,
    "data-state": hc(o),
    "data-disabled": i ? "" : void 0,
    disabled: i,
    value: s
  }, l, {
    ref: f,
    onClick: F(e.onClick, (m) => {
      o || c == null || c(), v && (p.current = m.isPropagationStopped(), p.current || m.stopPropagation());
    })
  })), v && /* @__PURE__ */ h(x0, {
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
}), y0 = "RadioIndicator", w0 = /* @__PURE__ */ T((e, t) => {
  const { __scopeRadio: n, forceMount: r, ...o } = e, a = g0(y0, n);
  return /* @__PURE__ */ h(Ne, {
    present: r || a.checked
  }, /* @__PURE__ */ h(K.span, C({
    "data-state": hc(a.checked),
    "data-disabled": a.disabled ? "" : void 0
  }, o, {
    ref: t
  })));
}), x0 = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = A(null), i = On(n), s = Sn(t);
  return z(() => {
    const c = a.current, l = window.HTMLInputElement.prototype, d = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (i !== n && d) {
      const f = new Event("click", {
        bubbles: r
      });
      d.call(c, n), c.dispatchEvent(f);
    }
  }, [
    i,
    n,
    r
  ]), /* @__PURE__ */ h("input", C({
    type: "radio",
    "aria-hidden": !0,
    defaultChecked: n
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
function hc(e) {
  return e ? "checked" : "unchecked";
}
const C0 = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
], gc = "RadioGroup", [_0, Jw] = _e(gc, [
  rn,
  bc
]), $c = rn(), yc = bc(), [E0, T0] = _0(gc), S0 = /* @__PURE__ */ T((e, t) => {
  const { __scopeRadioGroup: n, name: r, defaultValue: o, value: a, required: i = !1, disabled: s = !1, orientation: c, dir: l, loop: u = !0, onValueChange: d, ...f } = e, p = $c(n), v = At(l), [m, b] = Te({
    prop: a,
    defaultProp: o,
    onChange: d
  });
  return /* @__PURE__ */ h(E0, {
    scope: n,
    name: r,
    required: i,
    disabled: s,
    value: m,
    onValueChange: b
  }, /* @__PURE__ */ h(Ko, C({
    asChild: !0
  }, p, {
    orientation: c,
    dir: v,
    loop: u
  }), /* @__PURE__ */ h(K.div, C({
    role: "radiogroup",
    "aria-required": i,
    "aria-orientation": c,
    "data-disabled": s ? "" : void 0,
    dir: v
  }, f, {
    ref: t
  }))));
}), P0 = "RadioGroupItem", D0 = /* @__PURE__ */ T((e, t) => {
  const { __scopeRadioGroup: n, disabled: r, ...o } = e, a = T0(P0, n), i = a.disabled || r, s = $c(n), c = yc(n), l = A(null), u = re(t, l), d = a.value === o.value, f = A(!1);
  return z(() => {
    const p = (m) => {
      C0.includes(m.key) && (f.current = !0);
    }, v = () => f.current = !1;
    return document.addEventListener("keydown", p), document.addEventListener("keyup", v), () => {
      document.removeEventListener("keydown", p), document.removeEventListener("keyup", v);
    };
  }, []), /* @__PURE__ */ h(Go, C({
    asChild: !0
  }, s, {
    focusable: !i,
    active: d
  }), /* @__PURE__ */ h($0, C({
    disabled: i,
    required: a.required,
    checked: d
  }, c, o, {
    name: a.name,
    ref: u,
    onCheck: () => a.onValueChange(o.value),
    onKeyDown: F((p) => {
      p.key === "Enter" && p.preventDefault();
    }),
    onFocus: F(o.onFocus, () => {
      var p;
      f.current && ((p = l.current) === null || p === void 0 || p.click());
    })
  })));
}), M0 = /* @__PURE__ */ T((e, t) => {
  const { __scopeRadioGroup: n, ...r } = e, o = yc(n);
  return /* @__PURE__ */ h(w0, C({}, o, r, {
    ref: t
  }));
}), wc = S0, xc = D0, O0 = M0, N0 = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _.jsx(
  wc,
  {
    className: k("tw-reset ~grid ~gap-2", e),
    ...t,
    ref: n
  }
));
N0.displayName = wc.displayName;
const R0 = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _.jsx(
  xc,
  {
    ref: n,
    className: k(
      "~group ~aspect-square ~h-5 ~w-5 ~rounded-full ~border-2 ~border-input ~text-primary ~shadow",
      "focus:~outline-none focus-visible:~ring-1 focus-visible:~ring-ring",
      "disabled:~cursor-not-allowed disabled:~opacity-50",
      'data-[state="checked"]:~border-primary',
      e
    ),
    ...t,
    children: /* @__PURE__ */ _.jsx(O0, { className: "~flex ~items-center ~justify-center", children: /* @__PURE__ */ _.jsx(
      "div",
      {
        className: k(
          "~aspect-square ~h-3 ~w-3 ~rounded-full ~bg-primary",
          'group-data-[state="checked"]:~animate-in group-data-[state="checked"]:~zoom-in-75'
        )
      }
    ) })
  }
));
R0.displayName = xc.displayName;
const Cc = "Checkbox", [k0, ex] = _e(Cc), [A0, I0] = k0(Cc), L0 = /* @__PURE__ */ T((e, t) => {
  const { __scopeCheckbox: n, name: r, checked: o, defaultChecked: a, required: i, disabled: s, value: c = "on", onCheckedChange: l, ...u } = e, [d, f] = G(null), p = re(
    t,
    (w) => f(w)
  ), v = A(!1), m = d ? !!d.closest("form") : !0, [b = !1, $] = Te({
    prop: o,
    defaultProp: a,
    onChange: l
  }), g = A(b);
  return z(() => {
    const w = d == null ? void 0 : d.form;
    if (w) {
      const E = () => $(g.current);
      return w.addEventListener("reset", E), () => w.removeEventListener("reset", E);
    }
  }, [
    d,
    $
  ]), /* @__PURE__ */ h(A0, {
    scope: n,
    state: b,
    disabled: s
  }, /* @__PURE__ */ h(K.button, C({
    type: "button",
    role: "checkbox",
    "aria-checked": Mt(b) ? "mixed" : b,
    "aria-required": i,
    "data-state": _c(b),
    "data-disabled": s ? "" : void 0,
    disabled: s,
    value: c
  }, u, {
    ref: p,
    onKeyDown: F(e.onKeyDown, (w) => {
      w.key === "Enter" && w.preventDefault();
    }),
    onClick: F(e.onClick, (w) => {
      $(
        (E) => Mt(E) ? !0 : !E
      ), m && (v.current = w.isPropagationStopped(), v.current || w.stopPropagation());
    })
  })), m && /* @__PURE__ */ h(j0, {
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
}), F0 = "CheckboxIndicator", W0 = /* @__PURE__ */ T((e, t) => {
  const { __scopeCheckbox: n, forceMount: r, ...o } = e, a = I0(F0, n);
  return /* @__PURE__ */ h(Ne, {
    present: r || Mt(a.state) || a.state === !0
  }, /* @__PURE__ */ h(K.span, C({
    "data-state": _c(a.state),
    "data-disabled": a.disabled ? "" : void 0
  }, o, {
    ref: t,
    style: {
      pointerEvents: "none",
      ...e.style
    }
  })));
}), j0 = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = A(null), i = On(n), s = Sn(t);
  return z(() => {
    const c = a.current, l = window.HTMLInputElement.prototype, d = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (i !== n && d) {
      const f = new Event("click", {
        bubbles: r
      });
      c.indeterminate = Mt(n), d.call(c, Mt(n) ? !1 : n), c.dispatchEvent(f);
    }
  }, [
    i,
    n,
    r
  ]), /* @__PURE__ */ h("input", C({
    type: "checkbox",
    "aria-hidden": !0,
    defaultChecked: Mt(n) ? !1 : n
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
function Mt(e) {
  return e === "indeterminate";
}
function _c(e) {
  return Mt(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const Ec = L0, V0 = W0, B0 = P.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _.jsx(
  Ec,
  {
    ref: n,
    className: k(
      "tw-reset ~peer ~h-4 ~w-4 ~shrink-0 ~rounded-sm ~border ~border-primary ~text-2xl ~shadow",
      "focus-visible:~outline-none focus-visible:~ring-1 focus-visible:~ring-ring",
      "disabled:~cursor-not-allowed disabled:~opacity-50",
      "data-[state=checked]:~bg-primary data-[state=checked]:~text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ _.jsx(
      V0,
      {
        className: k(
          "~flex ~h-full ~w-full ~items-center ~justify-center ~text-current"
        ),
        children: /* @__PURE__ */ _.jsx(Lo, { className: "~h-4 ~w-4" })
      }
    )
  }
));
B0.displayName = Ec.displayName;
const Tc = "Collapsible", [Y0, Sc] = _e(Tc), [H0, Qo] = Y0(Tc), U0 = /* @__PURE__ */ T((e, t) => {
  const { __scopeCollapsible: n, open: r, defaultOpen: o, disabled: a, onOpenChange: i, ...s } = e, [c = !1, l] = Te({
    prop: r,
    defaultProp: o,
    onChange: i
  });
  return /* @__PURE__ */ h(H0, {
    scope: n,
    disabled: a,
    contentId: Oe(),
    open: c,
    onOpenToggle: te(
      () => l(
        (u) => !u
      ),
      [
        l
      ]
    )
  }, /* @__PURE__ */ h(K.div, C({
    "data-state": Jo(c),
    "data-disabled": a ? "" : void 0
  }, s, {
    ref: t
  })));
}), K0 = "CollapsibleTrigger", G0 = /* @__PURE__ */ T((e, t) => {
  const { __scopeCollapsible: n, ...r } = e, o = Qo(K0, n);
  return /* @__PURE__ */ h(K.button, C({
    type: "button",
    "aria-controls": o.contentId,
    "aria-expanded": o.open || !1,
    "data-state": Jo(o.open),
    "data-disabled": o.disabled ? "" : void 0,
    disabled: o.disabled
  }, r, {
    ref: t,
    onClick: F(e.onClick, o.onOpenToggle)
  }));
}), Pc = "CollapsibleContent", z0 = /* @__PURE__ */ T((e, t) => {
  const { forceMount: n, ...r } = e, o = Qo(Pc, e.__scopeCollapsible);
  return /* @__PURE__ */ h(
    Ne,
    {
      present: n || o.open
    },
    ({ present: a }) => /* @__PURE__ */ h(q0, C({}, r, {
      ref: t,
      present: a
    }))
  );
}), q0 = /* @__PURE__ */ T((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...a } = e, i = Qo(Pc, n), [s, c] = G(r), l = A(null), u = re(t, l), d = A(0), f = d.current, p = A(0), v = p.current, m = i.open || s, b = A(m), $ = A();
  return z(() => {
    const g = requestAnimationFrame(
      () => b.current = !1
    );
    return () => cancelAnimationFrame(g);
  }, []), Fe(() => {
    const g = l.current;
    if (g) {
      $.current = $.current || {
        transitionDuration: g.style.transitionDuration,
        animationName: g.style.animationName
      }, g.style.transitionDuration = "0s", g.style.animationName = "none";
      const w = g.getBoundingClientRect();
      d.current = w.height, p.current = w.width, b.current || (g.style.transitionDuration = $.current.transitionDuration, g.style.animationName = $.current.animationName), c(r);
    }
  }, [
    i.open,
    r
  ]), /* @__PURE__ */ h(K.div, C({
    "data-state": Jo(i.open),
    "data-disabled": i.disabled ? "" : void 0,
    id: i.contentId,
    hidden: !m
  }, a, {
    ref: u,
    style: {
      ["--radix-collapsible-content-height"]: f ? `${f}px` : void 0,
      ["--radix-collapsible-content-width"]: v ? `${v}px` : void 0,
      ...e.style
    }
  }), m && o);
});
function Jo(e) {
  return e ? "open" : "closed";
}
const X0 = U0, Z0 = G0, Q0 = z0, _t = "Accordion", J0 = [
  "Home",
  "End",
  "ArrowDown",
  "ArrowUp",
  "ArrowLeft",
  "ArrowRight"
], [ea, eh, th] = tn(_t), [_r, tx] = _e(_t, [
  th,
  Sc
]), ta = Sc(), Dc = /* @__PURE__ */ x.forwardRef((e, t) => {
  const { type: n, ...r } = e, o = r, a = r;
  return /* @__PURE__ */ x.createElement(ea.Provider, {
    scope: e.__scopeAccordion
  }, n === "multiple" ? /* @__PURE__ */ x.createElement(ah, C({}, a, {
    ref: t
  })) : /* @__PURE__ */ x.createElement(oh, C({}, o, {
    ref: t
  })));
});
Dc.propTypes = {
  type(e) {
    const t = e.value || e.defaultValue;
    return e.type && ![
      "single",
      "multiple"
    ].includes(e.type) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`.") : e.type === "multiple" && typeof t == "string" ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`.") : e.type === "single" && Array.isArray(t) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`.") : null;
  }
};
const [Mc, nh] = _r(_t), [Oc, rh] = _r(_t, {
  collapsible: !1
}), oh = /* @__PURE__ */ x.forwardRef((e, t) => {
  const { value: n, defaultValue: r, onValueChange: o = () => {
  }, collapsible: a = !1, ...i } = e, [s, c] = Te({
    prop: n,
    defaultProp: r,
    onChange: o
  });
  return /* @__PURE__ */ x.createElement(Mc, {
    scope: e.__scopeAccordion,
    value: s ? [
      s
    ] : [],
    onItemOpen: c,
    onItemClose: x.useCallback(
      () => a && c(""),
      [
        a,
        c
      ]
    )
  }, /* @__PURE__ */ x.createElement(Oc, {
    scope: e.__scopeAccordion,
    collapsible: a
  }, /* @__PURE__ */ x.createElement(Nc, C({}, i, {
    ref: t
  }))));
}), ah = /* @__PURE__ */ x.forwardRef((e, t) => {
  const { value: n, defaultValue: r, onValueChange: o = () => {
  }, ...a } = e, [i = [], s] = Te({
    prop: n,
    defaultProp: r,
    onChange: o
  }), c = x.useCallback(
    (u) => s(
      (d = []) => [
        ...d,
        u
      ]
    ),
    [
      s
    ]
  ), l = x.useCallback(
    (u) => s(
      (d = []) => d.filter(
        (f) => f !== u
      )
    ),
    [
      s
    ]
  );
  return /* @__PURE__ */ x.createElement(Mc, {
    scope: e.__scopeAccordion,
    value: i,
    onItemOpen: c,
    onItemClose: l
  }, /* @__PURE__ */ x.createElement(Oc, {
    scope: e.__scopeAccordion,
    collapsible: !0
  }, /* @__PURE__ */ x.createElement(Nc, C({}, a, {
    ref: t
  }))));
}), [ih, Er] = _r(_t), Nc = /* @__PURE__ */ x.forwardRef((e, t) => {
  const { __scopeAccordion: n, disabled: r, dir: o, orientation: a = "vertical", ...i } = e, s = x.useRef(null), c = re(s, t), l = eh(n), d = At(o) === "ltr", f = F(e.onKeyDown, (p) => {
    var v;
    if (!J0.includes(p.key))
      return;
    const m = p.target, b = l().filter((H) => {
      var X;
      return !((X = H.ref.current) !== null && X !== void 0 && X.disabled);
    }), $ = b.findIndex(
      (H) => H.ref.current === m
    ), g = b.length;
    if ($ === -1)
      return;
    p.preventDefault();
    let w = $;
    const E = 0, S = g - 1, L = () => {
      w = $ + 1, w > S && (w = E);
    }, M = () => {
      w = $ - 1, w < E && (w = S);
    };
    switch (p.key) {
      case "Home":
        w = E;
        break;
      case "End":
        w = S;
        break;
      case "ArrowRight":
        a === "horizontal" && (d ? L() : M());
        break;
      case "ArrowDown":
        a === "vertical" && L();
        break;
      case "ArrowLeft":
        a === "horizontal" && (d ? M() : L());
        break;
      case "ArrowUp":
        a === "vertical" && M();
        break;
    }
    const W = w % g;
    (v = b[W].ref.current) === null || v === void 0 || v.focus();
  });
  return /* @__PURE__ */ x.createElement(ih, {
    scope: n,
    disabled: r,
    direction: o,
    orientation: a
  }, /* @__PURE__ */ x.createElement(ea.Slot, {
    scope: n
  }, /* @__PURE__ */ x.createElement(K.div, C({}, i, {
    "data-orientation": a,
    ref: c,
    onKeyDown: r ? void 0 : f
  }))));
}), go = "AccordionItem", [sh, na] = _r(go), ch = /* @__PURE__ */ x.forwardRef((e, t) => {
  const { __scopeAccordion: n, value: r, ...o } = e, a = Er(go, n), i = nh(go, n), s = ta(n), c = Oe(), l = r && i.value.includes(r) || !1, u = a.disabled || e.disabled;
  return /* @__PURE__ */ x.createElement(sh, {
    scope: n,
    open: l,
    disabled: u,
    triggerId: c
  }, /* @__PURE__ */ x.createElement(X0, C({
    "data-orientation": a.orientation,
    "data-state": Rc(l)
  }, s, o, {
    ref: t,
    disabled: u,
    open: l,
    onOpenChange: (d) => {
      d ? i.onItemOpen(r) : i.onItemClose(r);
    }
  })));
}), lh = "AccordionHeader", dh = /* @__PURE__ */ x.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = Er(_t, n), a = na(lh, n);
  return /* @__PURE__ */ x.createElement(K.h3, C({
    "data-orientation": o.orientation,
    "data-state": Rc(a.open),
    "data-disabled": a.disabled ? "" : void 0
  }, r, {
    ref: t
  }));
}), mi = "AccordionTrigger", uh = /* @__PURE__ */ x.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = Er(_t, n), a = na(mi, n), i = rh(mi, n), s = ta(n);
  return /* @__PURE__ */ x.createElement(ea.ItemSlot, {
    scope: n
  }, /* @__PURE__ */ x.createElement(Z0, C({
    "aria-disabled": a.open && !i.collapsible || void 0,
    "data-orientation": o.orientation,
    id: a.triggerId
  }, s, r, {
    ref: t
  })));
}), fh = "AccordionContent", ph = /* @__PURE__ */ x.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = Er(_t, n), a = na(fh, n), i = ta(n);
  return /* @__PURE__ */ x.createElement(Q0, C({
    role: "region",
    "aria-labelledby": a.triggerId,
    "data-orientation": o.orientation
  }, i, r, {
    ref: t,
    style: {
      ["--radix-accordion-content-height"]: "var(--radix-collapsible-content-height)",
      ["--radix-accordion-content-width"]: "var(--radix-collapsible-content-width)",
      ...e.style
    }
  }));
});
function Rc(e) {
  return e ? "open" : "closed";
}
const vh = Dc, mh = ch, bh = dh, kc = uh, Ac = ph, nx = P.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _.jsx(
  vh,
  {
    ref: n,
    className: k("tw-reset", e),
    ...t
  }
)), hh = P.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _.jsx(
  mh,
  {
    ref: n,
    className: k("~border-b", e),
    ...t
  }
));
hh.displayName = "AccordionItem";
const gh = P.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ _.jsx(bh, { className: "~flex", children: /* @__PURE__ */ _.jsxs(
  kc,
  {
    ref: r,
    className: k(
      "body-medium ~flex ~flex-1 ~items-center ~justify-between ~py-4 ~font-normal ~leading-none ~transition-all hover:~underline [&[data-state=open]>svg]:~rotate-180",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ _.jsx(fp, { className: "~h-4 ~w-4 ~shrink-0 ~text-muted-foreground ~transition-transform ~duration-200" })
    ]
  }
) }));
gh.displayName = kc.displayName;
const $h = P.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ _.jsx(
  Ac,
  {
    ref: r,
    className: k(
      "~overflow-hidden data-[state=closed]:~animate-accordion-up data-[state=open]:~animate-accordion-down",
      e
    ),
    ...n,
    children: /* @__PURE__ */ _.jsx("div", { className: "~pb-4 ~pt-0", children: t })
  }
));
$h.displayName = Ac.displayName;
const Ic = "Avatar", [yh, rx] = _e(Ic), [wh, Lc] = yh(Ic), xh = /* @__PURE__ */ T((e, t) => {
  const { __scopeAvatar: n, ...r } = e, [o, a] = G("idle");
  return /* @__PURE__ */ h(wh, {
    scope: n,
    imageLoadingStatus: o,
    onImageLoadingStatusChange: a
  }, /* @__PURE__ */ h(K.span, C({}, r, {
    ref: t
  })));
}), Ch = "AvatarImage", _h = /* @__PURE__ */ T((e, t) => {
  const { __scopeAvatar: n, src: r, onLoadingStatusChange: o = () => {
  }, ...a } = e, i = Lc(Ch, n), s = Sh(r), c = Ee((l) => {
    o(l), i.onImageLoadingStatusChange(l);
  });
  return Fe(() => {
    s !== "idle" && c(s);
  }, [
    s,
    c
  ]), s === "loaded" ? /* @__PURE__ */ h(K.img, C({}, a, {
    ref: t,
    src: r
  })) : null;
}), Eh = "AvatarFallback", Th = /* @__PURE__ */ T((e, t) => {
  const { __scopeAvatar: n, delayMs: r, ...o } = e, a = Lc(Eh, n), [i, s] = G(r === void 0);
  return z(() => {
    if (r !== void 0) {
      const c = window.setTimeout(
        () => s(!0),
        r
      );
      return () => window.clearTimeout(c);
    }
  }, [
    r
  ]), i && a.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ h(K.span, C({}, o, {
    ref: t
  })) : null;
});
function Sh(e) {
  const [t, n] = G("idle");
  return z(() => {
    if (!e) {
      n("error");
      return;
    }
    let r = !0;
    const o = new window.Image(), a = (i) => () => {
      r && n(i);
    };
    return n("loading"), o.onload = a("loaded"), o.onerror = a("error"), o.src = e, () => {
      r = !1;
    };
  }, [
    e
  ]), t;
}
const Fc = xh, Wc = _h, jc = Th, Ph = P.forwardRef(({ className: e, size: t = 40, style: n, ...r }, o) => /* @__PURE__ */ _.jsx(
  Fc,
  {
    ref: o,
    className: k(
      "tw-reset ~relative ~flex ~shrink-0 ~overflow-hidden ~rounded-full",
      e
    ),
    style: { width: `${t}px`, height: `${t}px`, ...n },
    ...r
  }
));
Ph.displayName = Fc.displayName;
const Dh = P.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _.jsx(
  Wc,
  {
    ref: n,
    className: k("~aspect-square ~h-full ~w-full", e),
    ...t
  }
));
Dh.displayName = Wc.displayName;
const Mh = P.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _.jsx(
  jc,
  {
    ref: n,
    className: k(
      "~flex ~h-full ~w-full ~items-center ~justify-center ~rounded-full ~bg-muted",
      e
    ),
    ...t
  }
));
Mh.displayName = jc.displayName;
const bi = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, hi = ss, Et = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null)
    return hi(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: a } = t, i = Object.keys(o).map((l) => {
    const u = n == null ? void 0 : n[l], d = a == null ? void 0 : a[l];
    if (u === null)
      return null;
    const f = bi(u) || bi(d);
    return o[l][f];
  }), s = n && Object.entries(n).reduce((l, u) => {
    let [d, f] = u;
    return f === void 0 || (l[d] = f), l;
  }, {}), c = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((l, u) => {
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
  return hi(e, i, c, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, Oh = Et(
  [
    "tw-reset body-x-small ~inline-flex ~cursor-default ~items-center ~rounded-full ~border ~px-2.5 ~py-0.5 ~transition-colors",
    "focus:~outline-none focus:~ring-2 focus:~ring-ring focus:~ring-offset-2"
  ],
  {
    variants: {
      /** Variant color of the badge */
      variant: {
        default: "~border-transparent ~bg-primary ~text-primary-foreground ~shadow",
        secondary: "~border-transparent ~bg-secondary ~text-secondary-foreground",
        success: "~border-transparent ~bg-success ~text-success-foreground",
        destructive: "~border-transparent ~bg-destructive ~text-destructive-foreground ~shadow",
        outline: "~text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function ox({
  className: e,
  variant: t,
  background: n,
  color: r,
  style: o,
  ...a
}) {
  return /* @__PURE__ */ _.jsx(
    "div",
    {
      className: k(Oh({ variant: t }), e),
      style: { background: n, color: r, ...o },
      ...a
    }
  );
}
const Cn = Et(
  [
    "tw-reset caption-1 ~inline-flex ~items-center ~justify-center ~rounded-full ~transition-colors",
    "focus-visible:~outline-none focus-visible:~ring-1 focus-visible:~ring-ring focus-visible:~ring-offset-2",
    "disabled:~pointer-events-none disabled:~opacity-50"
  ],
  {
    variants: {
      variant: {
        default: "~bg-primary ~text-primary-foreground ~shadow hover:~bg-primary/90",
        destructive: "~bg-destructive ~text-destructive-foreground ~shadow-sm hover:~bg-destructive/90",
        outline: "~border ~border-border ~bg-background ~shadow-sm hover:~bg-accent hover:~text-accent-foreground",
        secondary: "~bg-secondary ~text-secondary-foreground ~shadow-sm hover:~bg-secondary/80",
        ghost: "hover:~bg-accent hover:~text-accent-foreground",
        link: "~text-primary ~underline-offset-4 hover:~underline"
      },
      size: {
        default: "~h-9 ~px-4 ~py-2",
        sm: "~h-8 ~px-3",
        lg: "~h-10 ~px-8",
        icon: "~h-9 ~w-9"
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
), ra = P.forwardRef(
  ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, a) => {
    const i = r ? lt : "button";
    return /* @__PURE__ */ _.jsx(
      i,
      {
        className: k(Cn({ variant: t, size: n, className: e })),
        ref: a,
        ...o
      }
    );
  }
);
ra.displayName = "Button";
var ee = function() {
  return ee = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, ee.apply(this, arguments);
};
function Nh(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Vc(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, a; r < o; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function Nn(e) {
  return e.mode === "multiple";
}
function Rn(e) {
  return e.mode === "range";
}
function Tr(e) {
  return e.mode === "single";
}
var Rh = {
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
function kh(e, t) {
  return Ue(e, "LLLL y", t);
}
function Ah(e, t) {
  return Ue(e, "d", t);
}
function Ih(e, t) {
  return Ue(e, "LLLL", t);
}
function Lh(e) {
  return "".concat(e);
}
function Fh(e, t) {
  return Ue(e, "cccccc", t);
}
function Wh(e, t) {
  return Ue(e, "yyyy", t);
}
var jh = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption: kh,
  formatDay: Ah,
  formatMonthCaption: Ih,
  formatWeekNumber: Lh,
  formatWeekdayName: Fh,
  formatYearCaption: Wh
}), Vh = function(e, t, n) {
  return Ue(e, "do MMMM (EEEE)", n);
}, Bh = function() {
  return "Month: ";
}, Yh = function() {
  return "Go to next month";
}, Hh = function() {
  return "Go to previous month";
}, Uh = function(e, t) {
  return Ue(e, "cccc", t);
}, Kh = function(e) {
  return "Week n. ".concat(e);
}, Gh = function() {
  return "Year: ";
}, zh = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay: Vh,
  labelMonthDropdown: Bh,
  labelNext: Yh,
  labelPrevious: Hh,
  labelWeekNumber: Kh,
  labelWeekday: Uh,
  labelYearDropdown: Gh
});
function qh() {
  var e = "buttons", t = Rh, n = Cs, r = {}, o = {}, a = 1, i = {}, s = /* @__PURE__ */ new Date();
  return {
    captionLayout: e,
    classNames: t,
    formatters: jh,
    labels: zh,
    locale: n,
    modifiersClassNames: r,
    modifiers: o,
    numberOfMonths: a,
    styles: i,
    today: s,
    mode: "default"
  };
}
function Xh(e) {
  var t = e.fromYear, n = e.toYear, r = e.fromMonth, o = e.toMonth, a = e.fromDate, i = e.toDate;
  return r ? a = Le(r) : t && (a = new Date(t, 0, 1)), o ? i = Wo(o) : n && (i = new Date(n, 11, 31)), {
    fromDate: a ? Zt(a) : void 0,
    toDate: i ? Zt(i) : void 0
  };
}
var Bc = Ve(void 0);
function Zh(e) {
  var t, n = e.initialProps, r = qh(), o = Xh(n), a = o.fromDate, i = o.toDate, s = (t = n.captionLayout) !== null && t !== void 0 ? t : r.captionLayout;
  s !== "buttons" && (!a || !i) && (s = "buttons");
  var c;
  (Tr(n) || Nn(n) || Rn(n)) && (c = n.onSelect);
  var l = ee(ee(ee({}, r), n), { captionLayout: s, classNames: ee(ee({}, r.classNames), n.classNames), components: ee({}, n.components), formatters: ee(ee({}, r.formatters), n.formatters), fromDate: a, labels: ee(ee({}, r.labels), n.labels), mode: n.mode || r.mode, modifiers: ee(ee({}, r.modifiers), n.modifiers), modifiersClassNames: ee(ee({}, r.modifiersClassNames), n.modifiersClassNames), onSelect: c, styles: ee(ee({}, r.styles), n.styles), toDate: i });
  return x.createElement(Bc.Provider, { value: l }, e.children);
}
function ge() {
  var e = We(Bc);
  if (!e)
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return e;
}
function Yc(e) {
  var t = ge(), n = t.locale, r = t.classNames, o = t.styles, a = t.formatters.formatCaption;
  return x.createElement("div", { className: r.caption_label, style: o.caption_label, "aria-live": "polite", role: "presentation", id: e.id }, a(e.displayMonth, { locale: n }));
}
function Qh(e) {
  return x.createElement(
    "svg",
    ee({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, e),
    x.createElement("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" })
  );
}
function Hc(e) {
  var t, n, r = e.onChange, o = e.value, a = e.children, i = e.caption, s = e.className, c = e.style, l = ge(), u = (n = (t = l.components) === null || t === void 0 ? void 0 : t.IconDropdown) !== null && n !== void 0 ? n : Qh;
  return x.createElement(
    "div",
    { className: s, style: c },
    x.createElement("span", { className: l.classNames.vhidden }, e["aria-label"]),
    x.createElement("select", { name: e.name, "aria-label": e["aria-label"], className: l.classNames.dropdown, style: l.styles.dropdown, value: o, onChange: r }, a),
    x.createElement(
      "div",
      { className: l.classNames.caption_label, style: l.styles.caption_label, "aria-hidden": "true" },
      i,
      x.createElement(u, { className: l.classNames.dropdown_icon, style: l.styles.dropdown_icon })
    )
  );
}
function Jh(e) {
  var t, n = ge(), r = n.fromDate, o = n.toDate, a = n.styles, i = n.locale, s = n.formatters.formatMonthCaption, c = n.classNames, l = n.components, u = n.labels.labelMonthDropdown;
  if (!r)
    return x.createElement(x.Fragment, null);
  if (!o)
    return x.createElement(x.Fragment, null);
  var d = [];
  if (Zv(r, o))
    for (var f = Le(r), p = r.getMonth(); p <= o.getMonth(); p++)
      d.push(zr(f, p));
  else
    for (var f = Le(/* @__PURE__ */ new Date()), p = 0; p <= 11; p++)
      d.push(zr(f, p));
  var v = function(b) {
    var $ = Number(b.target.value), g = zr(Le(e.displayMonth), $);
    e.onChange(g);
  }, m = (t = l == null ? void 0 : l.Dropdown) !== null && t !== void 0 ? t : Hc;
  return x.createElement(m, { name: "months", "aria-label": u(), className: c.dropdown_month, style: a.dropdown_month, onChange: v, value: e.displayMonth.getMonth(), caption: s(e.displayMonth, { locale: i }) }, d.map(function(b) {
    return x.createElement("option", { key: b.getMonth(), value: b.getMonth() }, s(b, { locale: i }));
  }));
}
function eg(e) {
  var t, n = e.displayMonth, r = ge(), o = r.fromDate, a = r.toDate, i = r.locale, s = r.styles, c = r.classNames, l = r.components, u = r.formatters.formatYearCaption, d = r.labels.labelYearDropdown, f = [];
  if (!o)
    return x.createElement(x.Fragment, null);
  if (!a)
    return x.createElement(x.Fragment, null);
  for (var p = o.getFullYear(), v = a.getFullYear(), m = p; m <= v; m++)
    f.push(ri(Mp(/* @__PURE__ */ new Date()), m));
  var b = function(g) {
    var w = ri(Le(n), Number(g.target.value));
    e.onChange(w);
  }, $ = (t = l == null ? void 0 : l.Dropdown) !== null && t !== void 0 ? t : Hc;
  return x.createElement($, { name: "years", "aria-label": d(), className: c.dropdown_year, style: s.dropdown_year, onChange: b, value: n.getFullYear(), caption: u(n, { locale: i }) }, f.map(function(g) {
    return x.createElement("option", { key: g.getFullYear(), value: g.getFullYear() }, u(g, { locale: i }));
  }));
}
function tg(e, t) {
  var n = G(e), r = n[0], o = n[1], a = t === void 0 ? r : t;
  return [a, o];
}
function ng(e) {
  var t = e.month, n = e.defaultMonth, r = e.today, o = t || n || r || /* @__PURE__ */ new Date(), a = e.toDate, i = e.fromDate, s = e.numberOfMonths, c = s === void 0 ? 1 : s;
  if (a && hn(a, o) < 0) {
    var l = -1 * (c - 1);
    o = Je(a, l);
  }
  return i && hn(o, i) < 0 && (o = i), Le(o);
}
function rg() {
  var e = ge(), t = ng(e), n = tg(t, e.month), r = n[0], o = n[1], a = function(i) {
    var s;
    if (!e.disableNavigation) {
      var c = Le(i);
      o(c), (s = e.onMonthChange) === null || s === void 0 || s.call(e, c);
    }
  };
  return [r, a];
}
function og(e, t) {
  for (var n = t.reverseMonths, r = t.numberOfMonths, o = Le(e), a = Le(Je(o, r)), i = hn(a, o), s = [], c = 0; c < i; c++) {
    var l = Je(o, c);
    s.push(l);
  }
  return n && (s = s.reverse()), s;
}
function ag(e, t) {
  if (!t.disableNavigation) {
    var n = t.toDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, i = r ? a : 1, s = Le(e);
    if (!n)
      return Je(s, i);
    var c = hn(n, e);
    if (!(c < a))
      return Je(s, i);
  }
}
function ig(e, t) {
  if (!t.disableNavigation) {
    var n = t.fromDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, i = r ? a : 1, s = Le(e);
    if (!n)
      return Je(s, -i);
    var c = hn(s, n);
    if (!(c <= 0))
      return Je(s, -i);
  }
}
var Uc = Ve(void 0);
function sg(e) {
  var t = ge(), n = rg(), r = n[0], o = n[1], a = og(r, t), i = ag(r, t), s = ig(r, t), c = function(d) {
    return a.some(function(f) {
      return Vo(d, f);
    });
  }, l = function(d, f) {
    c(d) || (f && Es(d, f) ? o(Je(d, 1 + t.numberOfMonths * -1)) : o(d));
  }, u = {
    currentMonth: r,
    displayMonths: a,
    goToMonth: o,
    goToDate: l,
    previousMonth: s,
    nextMonth: i,
    isDateDisplayed: c
  };
  return x.createElement(Uc.Provider, { value: u }, e.children);
}
function kn() {
  var e = We(Uc);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function gi(e) {
  var t, n = ge(), r = n.classNames, o = n.styles, a = n.components, i = kn().goToMonth, s = function(u) {
    i(u);
  }, c = (t = a == null ? void 0 : a.CaptionLabel) !== null && t !== void 0 ? t : Yc, l = x.createElement(c, { id: e.id, displayMonth: e.displayMonth });
  return x.createElement(
    "div",
    { className: r.caption_dropdowns, style: o.caption_dropdowns },
    x.createElement("div", { className: r.vhidden }, l),
    x.createElement(Jh, { onChange: s, displayMonth: e.displayMonth }),
    x.createElement(eg, { onChange: s, displayMonth: e.displayMonth })
  );
}
function cg(e) {
  return x.createElement(
    "svg",
    ee({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e),
    x.createElement("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" })
  );
}
function lg(e) {
  return x.createElement(
    "svg",
    ee({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e),
    x.createElement("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" })
  );
}
var lr = T(function(e, t) {
  var n = ge(), r = n.classNames, o = n.styles, a = [r.button_reset, r.button];
  e.className && a.push(e.className);
  var i = a.join(" "), s = ee(ee({}, o.button_reset), o.button);
  return e.style && Object.assign(s, e.style), x.createElement("button", ee({}, e, { ref: t, type: "button", className: i, style: s }));
});
function dg(e) {
  var t, n, r = ge(), o = r.dir, a = r.locale, i = r.classNames, s = r.styles, c = r.labels, l = c.labelPrevious, u = c.labelNext, d = r.components;
  if (!e.nextMonth && !e.previousMonth)
    return x.createElement(x.Fragment, null);
  var f = l(e.previousMonth, { locale: a }), p = [
    i.nav_button,
    i.nav_button_previous
  ].join(" "), v = u(e.nextMonth, { locale: a }), m = [
    i.nav_button,
    i.nav_button_next
  ].join(" "), b = (t = d == null ? void 0 : d.IconRight) !== null && t !== void 0 ? t : lg, $ = (n = d == null ? void 0 : d.IconLeft) !== null && n !== void 0 ? n : cg;
  return x.createElement(
    "div",
    { className: i.nav, style: s.nav },
    !e.hidePrevious && x.createElement(lr, { name: "previous-month", "aria-label": f, className: p, style: s.nav_button_previous, disabled: !e.previousMonth, onClick: e.onPreviousClick }, o === "rtl" ? x.createElement(b, { className: i.nav_icon, style: s.nav_icon }) : x.createElement($, { className: i.nav_icon, style: s.nav_icon })),
    !e.hideNext && x.createElement(lr, { name: "next-month", "aria-label": v, className: m, style: s.nav_button_next, disabled: !e.nextMonth, onClick: e.onNextClick }, o === "rtl" ? x.createElement($, { className: i.nav_icon, style: s.nav_icon }) : x.createElement(b, { className: i.nav_icon, style: s.nav_icon }))
  );
}
function $i(e) {
  var t = ge().numberOfMonths, n = kn(), r = n.previousMonth, o = n.nextMonth, a = n.goToMonth, i = n.displayMonths, s = i.findIndex(function(v) {
    return Vo(e.displayMonth, v);
  }), c = s === 0, l = s === i.length - 1, u = t > 1 && (c || !l), d = t > 1 && (l || !c), f = function() {
    r && a(r);
  }, p = function() {
    o && a(o);
  };
  return x.createElement(dg, { displayMonth: e.displayMonth, hideNext: u, hidePrevious: d, nextMonth: o, previousMonth: r, onPreviousClick: f, onNextClick: p });
}
function ug(e) {
  var t, n = ge(), r = n.classNames, o = n.disableNavigation, a = n.styles, i = n.captionLayout, s = n.components, c = (t = s == null ? void 0 : s.CaptionLabel) !== null && t !== void 0 ? t : Yc, l;
  return o ? l = x.createElement(c, { id: e.id, displayMonth: e.displayMonth }) : i === "dropdown" ? l = x.createElement(gi, { displayMonth: e.displayMonth, id: e.id }) : i === "dropdown-buttons" ? l = x.createElement(
    x.Fragment,
    null,
    x.createElement(gi, { displayMonth: e.displayMonth, id: e.id }),
    x.createElement($i, { displayMonth: e.displayMonth, id: e.id })
  ) : l = x.createElement(
    x.Fragment,
    null,
    x.createElement(c, { id: e.id, displayMonth: e.displayMonth }),
    x.createElement($i, { displayMonth: e.displayMonth, id: e.id })
  ), x.createElement("div", { className: r.caption, style: a.caption }, l);
}
function fg(e) {
  var t = ge(), n = t.footer, r = t.styles, o = t.classNames.tfoot;
  return n ? x.createElement(
    "tfoot",
    { className: o, style: r.tfoot },
    x.createElement(
      "tr",
      null,
      x.createElement("td", { colSpan: 8 }, n)
    )
  ) : x.createElement(x.Fragment, null);
}
function pg(e, t, n) {
  for (var r = n ? Ot(/* @__PURE__ */ new Date()) : et(/* @__PURE__ */ new Date(), { locale: e, weekStartsOn: t }), o = [], a = 0; a < 7; a++) {
    var i = Ye(r, a);
    o.push(i);
  }
  return o;
}
function vg() {
  var e = ge(), t = e.classNames, n = e.styles, r = e.showWeekNumber, o = e.locale, a = e.weekStartsOn, i = e.ISOWeek, s = e.formatters.formatWeekdayName, c = e.labels.labelWeekday, l = pg(o, a, i);
  return x.createElement(
    "tr",
    { style: n.head_row, className: t.head_row },
    r && x.createElement("td", { style: n.head_cell, className: t.head_cell }),
    l.map(function(u, d) {
      return x.createElement("th", { key: d, scope: "col", className: t.head_cell, style: n.head_cell, "aria-label": c(u, { locale: o }) }, s(u, { locale: o }));
    })
  );
}
function mg() {
  var e, t = ge(), n = t.classNames, r = t.styles, o = t.components, a = (e = o == null ? void 0 : o.HeadRow) !== null && e !== void 0 ? e : vg;
  return x.createElement(
    "thead",
    { style: r.head, className: n.head },
    x.createElement(a, null)
  );
}
function bg(e) {
  var t = ge(), n = t.locale, r = t.formatters.formatDay;
  return x.createElement(x.Fragment, null, r(e.date, { locale: n }));
}
var oa = Ve(void 0);
function hg(e) {
  if (!Nn(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return x.createElement(oa.Provider, { value: t }, e.children);
  }
  return x.createElement(gg, { initialProps: e.initialProps, children: e.children });
}
function gg(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = t.min, a = t.max, i = function(l, u, d) {
    var f, p;
    (f = t.onDayClick) === null || f === void 0 || f.call(t, l, u, d);
    var v = !!(u.selected && o && (r == null ? void 0 : r.length) === o);
    if (!v) {
      var m = !!(!u.selected && a && (r == null ? void 0 : r.length) === a);
      if (!m) {
        var b = r ? Vc([], r, !0) : [];
        if (u.selected) {
          var $ = b.findIndex(function(g) {
            return Ie(l, g);
          });
          b.splice($, 1);
        } else
          b.push(l);
        (p = t.onSelect) === null || p === void 0 || p.call(t, b, l, u, d);
      }
    }
  }, s = {
    disabled: []
  };
  r && s.disabled.push(function(l) {
    var u = a && r.length > a - 1, d = r.some(function(f) {
      return Ie(f, l);
    });
    return !!(u && !d);
  });
  var c = {
    selected: r,
    onDayClick: i,
    modifiers: s
  };
  return x.createElement(oa.Provider, { value: c }, n);
}
function aa() {
  var e = We(oa);
  if (!e)
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  return e;
}
function $g(e, t) {
  var n = t || {}, r = n.from, o = n.to;
  if (!r)
    return { from: e, to: void 0 };
  if (!o && Ie(r, e))
    return { from: r, to: e };
  if (!o && Es(e, r))
    return { from: e, to: r };
  if (!o)
    return { from: r, to: e };
  if (!(Ie(o, e) && Ie(r, e))) {
    if (Ie(o, e))
      return { from: o, to: void 0 };
    if (!Ie(r, e))
      return _s(r, e) ? { from: e, to: o } : { from: r, to: e };
  }
}
var ia = Ve(void 0);
function yg(e) {
  if (!Rn(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: []
      }
    };
    return x.createElement(ia.Provider, { value: t }, e.children);
  }
  return x.createElement(wg, { initialProps: e.initialProps, children: e.children });
}
function wg(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = r || {}, a = o.from, i = o.to, s = t.min, c = t.max, l = function(p, v, m) {
    var b, $;
    (b = t.onDayClick) === null || b === void 0 || b.call(t, p, v, m);
    var g = $g(p, r);
    ($ = t.onSelect) === null || $ === void 0 || $.call(t, g, p, v, m);
  }, u = {
    range_start: [],
    range_end: [],
    range_middle: [],
    disabled: []
  };
  if (a && (u.range_start = [a], i ? (u.range_end = [i], Ie(a, i) || (u.range_middle = [
    {
      after: a,
      before: i
    }
  ])) : u.range_end = [a]), s && (a && !i && u.disabled.push({
    after: ni(a, s - 1),
    before: Ye(a, s - 1)
  }), a && i && u.disabled.push({
    after: a,
    before: Ye(a, s - 1)
  })), c && (a && !i && (u.disabled.push({
    before: Ye(a, -c + 1)
  }), u.disabled.push({
    after: Ye(a, c - 1)
  })), a && i)) {
    var d = at(i, a) + 1, f = c - d;
    u.disabled.push({
      before: ni(a, f)
    }), u.disabled.push({
      after: Ye(i, f)
    });
  }
  return x.createElement(ia.Provider, { value: { selected: r, onDayClick: l, modifiers: u } }, n);
}
function sa() {
  var e = We(ia);
  if (!e)
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return e;
}
function Xn(e) {
  return Array.isArray(e) ? Vc([], e, !0) : e !== void 0 ? [e] : [];
}
function xg(e) {
  var t = {};
  return Object.entries(e).forEach(function(n) {
    var r = n[0], o = n[1];
    t[r] = Xn(o);
  }), t;
}
var ze;
(function(e) {
  e.Outside = "outside", e.Disabled = "disabled", e.Selected = "selected", e.Hidden = "hidden", e.Today = "today", e.RangeStart = "range_start", e.RangeEnd = "range_end", e.RangeMiddle = "range_middle";
})(ze || (ze = {}));
var Cg = ze.Selected, rt = ze.Disabled, _g = ze.Hidden, Eg = ze.Today, Zr = ze.RangeEnd, Qr = ze.RangeMiddle, Jr = ze.RangeStart, Tg = ze.Outside;
function Sg(e, t, n) {
  var r, o = (r = {}, r[Cg] = Xn(e.selected), r[rt] = Xn(e.disabled), r[_g] = Xn(e.hidden), r[Eg] = [e.today], r[Zr] = [], r[Qr] = [], r[Jr] = [], r[Tg] = [], r);
  return e.fromDate && o[rt].push({ before: e.fromDate }), e.toDate && o[rt].push({ after: e.toDate }), Nn(e) ? o[rt] = o[rt].concat(t.modifiers[rt]) : Rn(e) && (o[rt] = o[rt].concat(n.modifiers[rt]), o[Jr] = n.modifiers[Jr], o[Qr] = n.modifiers[Qr], o[Zr] = n.modifiers[Zr]), o;
}
var Kc = Ve(void 0);
function Pg(e) {
  var t = ge(), n = aa(), r = sa(), o = Sg(t, n, r), a = xg(t.modifiers), i = ee(ee({}, o), a);
  return x.createElement(Kc.Provider, { value: i }, e.children);
}
function Gc() {
  var e = We(Kc);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function Dg(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function Mg(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function Og(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function Ng(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function Rg(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function kg(e, t) {
  var n, r = t.from, o = t.to;
  if (!r)
    return !1;
  if (!o && Ie(r, e))
    return !0;
  if (!o)
    return !1;
  var a = at(o, r) < 0;
  a && (n = [o, r], r = n[0], o = n[1]);
  var i = at(e, r) >= 0 && at(o, e) >= 0;
  return i;
}
function Ag(e) {
  return Fo(e);
}
function Ig(e) {
  return Array.isArray(e) && e.every(Fo);
}
function Lg(e, t) {
  return t.some(function(n) {
    if (typeof n == "boolean")
      return n;
    if (Ag(n))
      return Ie(e, n);
    if (Ig(n))
      return n.includes(e);
    if (Mg(n))
      return kg(e, n);
    if (Rg(n))
      return n.dayOfWeek.includes(e.getDay());
    if (Dg(n)) {
      var r = at(n.before, e), o = at(n.after, e), a = r > 0, i = o < 0, s = _s(n.before, n.after);
      return s ? i && a : a || i;
    }
    return Og(n) ? at(e, n.after) > 0 : Ng(n) ? at(n.before, e) > 0 : typeof n == "function" ? n(e) : !1;
  });
}
function ca(e, t, n) {
  var r = Object.keys(t).reduce(function(a, i) {
    var s = t[i];
    return Lg(e, s) && a.push(i), a;
  }, []), o = {};
  return r.forEach(function(a) {
    return o[a] = !0;
  }), n && !Vo(e, n) && (o.outside = !0), o;
}
function Fg(e, t) {
  for (var n = Le(e[0]), r = Wo(e[e.length - 1]), o, a, i = n; i <= r; ) {
    var s = ca(i, t), c = !s.disabled && !s.hidden;
    if (!c) {
      i = Ye(i, 1);
      continue;
    }
    if (s.selected)
      return i;
    s.today && !a && (a = i), o || (o = i), i = Ye(i, 1);
  }
  return a || o;
}
var Wg = 365;
function zc(e, t) {
  var n = t.moveBy, r = t.direction, o = t.context, a = t.modifiers, i = t.retry, s = i === void 0 ? { count: 0, lastFocused: e } : i, c = o.weekStartsOn, l = o.fromDate, u = o.toDate, d = o.locale, f = {
    day: Ye,
    week: uo,
    month: Je,
    year: _p,
    startOfWeek: function(b) {
      return o.ISOWeek ? Ot(b) : et(b, { locale: d, weekStartsOn: c });
    },
    endOfWeek: function(b) {
      return o.ISOWeek ? $s(b) : jo(b, { locale: d, weekStartsOn: c });
    }
  }, p = f[n](e, r === "after" ? 1 : -1);
  r === "before" && l ? p = Ep([l, p]) : r === "after" && u && (p = Tp([u, p]));
  var v = !0;
  if (a) {
    var m = ca(p, a);
    v = !m.disabled && !m.hidden;
  }
  return v ? p : s.count > Wg ? s.lastFocused : zc(p, {
    moveBy: n,
    direction: r,
    context: o,
    modifiers: a,
    retry: ee(ee({}, s), { count: s.count + 1 })
  });
}
var qc = Ve(void 0);
function jg(e) {
  var t = kn(), n = Gc(), r = G(), o = r[0], a = r[1], i = G(), s = i[0], c = i[1], l = Fg(t.displayMonths, n), u = o ?? (s && t.isDateDisplayed(s)) ? s : l, d = function() {
    c(o), a(void 0);
  }, f = function(b) {
    a(b);
  }, p = ge(), v = function(b, $) {
    if (o) {
      var g = zc(o, {
        moveBy: b,
        direction: $,
        context: p,
        modifiers: n
      });
      Ie(o, g) || (t.goToDate(g, o), f(g));
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
  return x.createElement(qc.Provider, { value: m }, e.children);
}
function la() {
  var e = We(qc);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function Vg(e, t) {
  var n = Gc(), r = ca(e, n, t);
  return r;
}
var da = Ve(void 0);
function Bg(e) {
  if (!Tr(e.initialProps)) {
    var t = {
      selected: void 0
    };
    return x.createElement(da.Provider, { value: t }, e.children);
  }
  return x.createElement(Yg, { initialProps: e.initialProps, children: e.children });
}
function Yg(e) {
  var t = e.initialProps, n = e.children, r = function(a, i, s) {
    var c, l, u;
    if ((c = t.onDayClick) === null || c === void 0 || c.call(t, a, i, s), i.selected && !t.required) {
      (l = t.onSelect) === null || l === void 0 || l.call(t, void 0, a, i, s);
      return;
    }
    (u = t.onSelect) === null || u === void 0 || u.call(t, a, a, i, s);
  }, o = {
    selected: t.selected,
    onDayClick: r
  };
  return x.createElement(da.Provider, { value: o }, n);
}
function Xc() {
  var e = We(da);
  if (!e)
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  return e;
}
function Hg(e, t) {
  var n = ge(), r = Xc(), o = aa(), a = sa(), i = la(), s = i.focusDayAfter, c = i.focusDayBefore, l = i.focusWeekAfter, u = i.focusWeekBefore, d = i.blur, f = i.focus, p = i.focusMonthBefore, v = i.focusMonthAfter, m = i.focusYearBefore, b = i.focusYearAfter, $ = i.focusStartOfWeek, g = i.focusEndOfWeek, w = function(R) {
    var N, V, Q, oe;
    Tr(n) ? (N = r.onDayClick) === null || N === void 0 || N.call(r, e, t, R) : Nn(n) ? (V = o.onDayClick) === null || V === void 0 || V.call(o, e, t, R) : Rn(n) ? (Q = a.onDayClick) === null || Q === void 0 || Q.call(a, e, t, R) : (oe = n.onDayClick) === null || oe === void 0 || oe.call(n, e, t, R);
  }, E = function(R) {
    var N;
    f(e), (N = n.onDayFocus) === null || N === void 0 || N.call(n, e, t, R);
  }, S = function(R) {
    var N;
    d(), (N = n.onDayBlur) === null || N === void 0 || N.call(n, e, t, R);
  }, L = function(R) {
    var N;
    (N = n.onDayMouseEnter) === null || N === void 0 || N.call(n, e, t, R);
  }, M = function(R) {
    var N;
    (N = n.onDayMouseLeave) === null || N === void 0 || N.call(n, e, t, R);
  }, W = function(R) {
    var N;
    (N = n.onDayPointerEnter) === null || N === void 0 || N.call(n, e, t, R);
  }, H = function(R) {
    var N;
    (N = n.onDayPointerLeave) === null || N === void 0 || N.call(n, e, t, R);
  }, X = function(R) {
    var N;
    (N = n.onDayTouchCancel) === null || N === void 0 || N.call(n, e, t, R);
  }, U = function(R) {
    var N;
    (N = n.onDayTouchEnd) === null || N === void 0 || N.call(n, e, t, R);
  }, q = function(R) {
    var N;
    (N = n.onDayTouchMove) === null || N === void 0 || N.call(n, e, t, R);
  }, Y = function(R) {
    var N;
    (N = n.onDayTouchStart) === null || N === void 0 || N.call(n, e, t, R);
  }, D = function(R) {
    var N;
    (N = n.onDayKeyUp) === null || N === void 0 || N.call(n, e, t, R);
  }, O = function(R) {
    var N;
    switch (R.key) {
      case "ArrowLeft":
        R.preventDefault(), R.stopPropagation(), n.dir === "rtl" ? s() : c();
        break;
      case "ArrowRight":
        R.preventDefault(), R.stopPropagation(), n.dir === "rtl" ? c() : s();
        break;
      case "ArrowDown":
        R.preventDefault(), R.stopPropagation(), l();
        break;
      case "ArrowUp":
        R.preventDefault(), R.stopPropagation(), u();
        break;
      case "PageUp":
        R.preventDefault(), R.stopPropagation(), R.shiftKey ? m() : p();
        break;
      case "PageDown":
        R.preventDefault(), R.stopPropagation(), R.shiftKey ? b() : v();
        break;
      case "Home":
        R.preventDefault(), R.stopPropagation(), $();
        break;
      case "End":
        R.preventDefault(), R.stopPropagation(), g();
        break;
    }
    (N = n.onDayKeyDown) === null || N === void 0 || N.call(n, e, t, R);
  }, j = {
    onClick: w,
    onFocus: E,
    onBlur: S,
    onKeyDown: O,
    onKeyUp: D,
    onMouseEnter: L,
    onMouseLeave: M,
    onPointerEnter: W,
    onPointerLeave: H,
    onTouchCancel: X,
    onTouchEnd: U,
    onTouchMove: q,
    onTouchStart: Y
  };
  return j;
}
function Ug() {
  var e = ge(), t = Xc(), n = aa(), r = sa(), o = Tr(e) ? t.selected : Nn(e) ? n.selected : Rn(e) ? r.selected : void 0;
  return o;
}
function Kg(e) {
  return Object.values(ze).includes(e);
}
function Gg(e, t) {
  var n = [e.classNames.day];
  return Object.keys(t).forEach(function(r) {
    var o = e.modifiersClassNames[r];
    if (o)
      n.push(o);
    else if (Kg(r)) {
      var a = e.classNames["day_".concat(r)];
      a && n.push(a);
    }
  }), n;
}
function zg(e, t) {
  var n = ee({}, e.styles.day);
  return Object.keys(t).forEach(function(r) {
    var o;
    n = ee(ee({}, n), (o = e.modifiersStyles) === null || o === void 0 ? void 0 : o[r]);
  }), n;
}
function qg(e, t, n) {
  var r, o, a, i = ge(), s = la(), c = Vg(e, t), l = Hg(e, c), u = Ug(), d = !!(i.onDayClick || i.mode !== "default");
  z(function() {
    var L;
    c.outside || s.focusedDay && d && Ie(s.focusedDay, e) && ((L = n.current) === null || L === void 0 || L.focus());
  }, [
    s.focusedDay,
    e,
    n,
    d,
    c.outside
  ]);
  var f = Gg(i, c).join(" "), p = zg(i, c), v = !!(c.outside && !i.showOutsideDays || c.hidden), m = (a = (o = i.components) === null || o === void 0 ? void 0 : o.DayContent) !== null && a !== void 0 ? a : bg, b = x.createElement(m, { date: e, displayMonth: t, activeModifiers: c }), $ = {
    style: p,
    className: f,
    children: b,
    role: "gridcell"
  }, g = s.focusTarget && Ie(s.focusTarget, e) && !c.outside, w = s.focusedDay && Ie(s.focusedDay, e), E = ee(ee(ee({}, $), (r = { disabled: c.disabled, role: "gridcell" }, r["aria-selected"] = c.selected, r.tabIndex = w || g ? 0 : -1, r)), l), S = {
    isButton: d,
    isHidden: v,
    activeModifiers: c,
    selectedDays: u,
    buttonProps: E,
    divProps: $
  };
  return S;
}
function Xg(e) {
  var t = A(null), n = qg(e.date, e.displayMonth, t);
  return n.isHidden ? x.createElement("div", { role: "gridcell" }) : n.isButton ? x.createElement(lr, ee({ name: "day", ref: t }, n.buttonProps)) : x.createElement("div", ee({}, n.divProps));
}
function Zg(e) {
  var t = e.number, n = e.dates, r = ge(), o = r.onWeekNumberClick, a = r.styles, i = r.classNames, s = r.locale, c = r.labels.labelWeekNumber, l = r.formatters.formatWeekNumber, u = l(Number(t), { locale: s });
  if (!o)
    return x.createElement("span", { className: i.weeknumber, style: a.weeknumber }, u);
  var d = c(Number(t), { locale: s }), f = function(p) {
    o(t, n, p);
  };
  return x.createElement(lr, { name: "week-number", "aria-label": d, className: i.weeknumber, style: a.weeknumber, onClick: f }, u);
}
function Qg(e) {
  var t, n, r = ge(), o = r.styles, a = r.classNames, i = r.showWeekNumber, s = r.components, c = (t = s == null ? void 0 : s.Day) !== null && t !== void 0 ? t : Xg, l = (n = s == null ? void 0 : s.WeekNumber) !== null && n !== void 0 ? n : Zg, u;
  return i && (u = x.createElement(
    "td",
    { className: a.cell, style: o.cell },
    x.createElement(l, { number: e.weekNumber, dates: e.dates })
  )), x.createElement(
    "tr",
    { className: a.row, style: o.row },
    u,
    e.dates.map(function(d) {
      return x.createElement(
        "td",
        { className: a.cell, style: o.cell, key: Hv(d), role: "presentation" },
        x.createElement(c, { displayMonth: e.displayMonth, date: d })
      );
    })
  );
}
function yi(e, t, n) {
  for (var r = n != null && n.ISOWeek ? $s(t) : jo(t, n), o = n != null && n.ISOWeek ? Ot(e) : et(e, n), a = at(r, o), i = [], s = 0; s <= a; s++)
    i.push(Ye(o, s));
  var c = i.reduce(function(l, u) {
    var d = n != null && n.ISOWeek ? Bv(u) : zv(u, n), f = l.find(function(p) {
      return p.weekNumber === d;
    });
    return f ? (f.dates.push(u), l) : (l.push({
      weekNumber: d,
      dates: [u]
    }), l);
  }, []);
  return c;
}
function Jg(e, t) {
  var n = yi(Le(e), Wo(e), t);
  if (t != null && t.useFixedWeeks) {
    var r = Xv(e, t);
    if (r < 6) {
      var o = n[n.length - 1], a = o.dates[o.dates.length - 1], i = uo(a, 6 - r), s = yi(uo(a, 1), i, t);
      n.push.apply(n, s);
    }
  }
  return n;
}
function e1(e) {
  var t, n, r, o = ge(), a = o.locale, i = o.classNames, s = o.styles, c = o.hideHead, l = o.fixedWeeks, u = o.components, d = o.weekStartsOn, f = o.firstWeekContainsDate, p = o.ISOWeek, v = Jg(e.displayMonth, {
    useFixedWeeks: !!l,
    ISOWeek: p,
    locale: a,
    weekStartsOn: d,
    firstWeekContainsDate: f
  }), m = (t = u == null ? void 0 : u.Head) !== null && t !== void 0 ? t : mg, b = (n = u == null ? void 0 : u.Row) !== null && n !== void 0 ? n : Qg, $ = (r = u == null ? void 0 : u.Footer) !== null && r !== void 0 ? r : fg;
  return x.createElement(
    "table",
    { id: e.id, className: i.table, style: s.table, role: "grid", "aria-labelledby": e["aria-labelledby"] },
    !c && x.createElement(m, null),
    x.createElement("tbody", { className: i.tbody, style: s.tbody, role: "rowgroup" }, v.map(function(g) {
      return x.createElement(b, { displayMonth: e.displayMonth, key: g.weekNumber, dates: g.dates, weekNumber: g.weekNumber });
    })),
    x.createElement($, { displayMonth: e.displayMonth })
  );
}
function t1() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var n1 = t1() ? P.useLayoutEffect : P.useEffect, eo = !1, r1 = 0;
function wi() {
  return "react-day-picker-".concat(++r1);
}
function o1(e) {
  var t, n = e ?? (eo ? wi() : null), r = P.useState(n), o = r[0], a = r[1];
  return n1(function() {
    o === null && a(wi());
  }, []), P.useEffect(function() {
    eo === !1 && (eo = !0);
  }, []), (t = e ?? o) !== null && t !== void 0 ? t : void 0;
}
function a1(e) {
  var t, n, r = ge(), o = r.dir, a = r.classNames, i = r.styles, s = r.components, c = kn().displayMonths, l = o1(r.id ? "".concat(r.id, "-").concat(e.displayIndex) : void 0), u = r.id ? "".concat(r.id, "-grid-").concat(e.displayIndex) : void 0, d = [a.month], f = i.month, p = e.displayIndex === 0, v = e.displayIndex === c.length - 1, m = !p && !v;
  o === "rtl" && (t = [p, v], v = t[0], p = t[1]), p && (d.push(a.caption_start), f = ee(ee({}, f), i.caption_start)), v && (d.push(a.caption_end), f = ee(ee({}, f), i.caption_end)), m && (d.push(a.caption_between), f = ee(ee({}, f), i.caption_between));
  var b = (n = s == null ? void 0 : s.Caption) !== null && n !== void 0 ? n : ug;
  return x.createElement(
    "div",
    { key: e.displayIndex, className: d.join(" "), style: f },
    x.createElement(b, { id: l, displayMonth: e.displayMonth }),
    x.createElement(e1, { id: u, "aria-labelledby": l, displayMonth: e.displayMonth })
  );
}
function i1(e) {
  var t = e.initialProps, n = ge(), r = la(), o = kn(), a = G(!1), i = a[0], s = a[1];
  z(function() {
    n.initialFocus && r.focusTarget && (i || (r.focus(r.focusTarget), s(!0)));
  }, [
    n.initialFocus,
    i,
    r.focus,
    r.focusTarget,
    r
  ]);
  var c = [n.classNames.root, n.className];
  n.numberOfMonths > 1 && c.push(n.classNames.multiple_months), n.showWeekNumber && c.push(n.classNames.with_weeknumber);
  var l = ee(ee({}, n.styles.root), n.style), u = Object.keys(t).filter(function(d) {
    return d.startsWith("data-");
  }).reduce(function(d, f) {
    var p;
    return ee(ee({}, d), (p = {}, p[f] = t[f], p));
  }, {});
  return x.createElement(
    "div",
    ee({ className: c.join(" "), style: l, dir: n.dir, id: n.id }, u),
    x.createElement("div", { className: n.classNames.months, style: n.styles.months }, o.displayMonths.map(function(d, f) {
      return x.createElement(a1, { key: f, displayIndex: f, displayMonth: d });
    }))
  );
}
function s1(e) {
  var t = e.children, n = Nh(e, ["children"]);
  return x.createElement(
    Zh,
    { initialProps: n },
    x.createElement(
      sg,
      null,
      x.createElement(
        Bg,
        { initialProps: n },
        x.createElement(
          hg,
          { initialProps: n },
          x.createElement(
            yg,
            { initialProps: n },
            x.createElement(
              Pg,
              null,
              x.createElement(jg, null, t)
            )
          )
        )
      )
    )
  );
}
function c1(e) {
  return x.createElement(
    s1,
    ee({}, e),
    x.createElement(i1, { initialProps: e })
  );
}
function ua({
  className: e,
  classNames: t,
  showOutsideDays: n = !0,
  ...r
}) {
  return /* @__PURE__ */ _.jsx(
    c1,
    {
      showOutsideDays: n,
      className: k("tw-reset ~p-3", e),
      classNames: {
        months: "~flex ~flex-col sm:~flex-row ~space-y-4 sm:~space-x-4 sm:~space-y-0",
        month: k("~space-y-4"),
        caption: "~flex ~justify-center ~pt-1 ~relative ~items-center",
        caption_label: "~text-sm ~font-medium",
        nav: "~space-x-1 ~flex ~items-center",
        nav_button: k(Cn({ variant: "ghost" }), "~h-7 ~w-7 ~p-0"),
        nav_button_previous: "~absolute ~left-1",
        nav_button_next: "~absolute ~right-1",
        table: "~w-full ~border-collapse ~space-y-1",
        head_row: "~flex",
        head_cell: k(
          "caption-1 ~w-8 ~text-center ~font-normal ~text-muted-foreground"
        ),
        row: "~flex ~w-full ~mt-2",
        cell: k(
          "~relative ~p-0 ~text-center focus-within:~relative focus-within:~z-20",
          "[&:has([aria-selected])]:~rounded-full [&:has([aria-selected])]:~bg-accent",
          "first:[&:has([aria-selected])]:~rounded-l-full last:[&:has([aria-selected])]:~rounded-r-full",
          "[&:has([aria-selected]):has(.range-middle)]:~rounded-none",
          "[&:has([aria-selected]):has(.range-start)]:~rounded-r-none",
          "[&:has([aria-selected]):has(.range-end)]:~rounded-l-none",
          "[&:has([aria-selected]):has(.range-start):has(.range-end)]:~rounded-full"
        ),
        day: k(
          Cn({ variant: "ghost" }),
          "~h-8 ~w-8 ~p-0 ~font-normal aria-selected:~opacity-100"
        ),
        day_selected: k(
          "~bg-primary ~text-primary-foreground",
          "hover:~bg-primary hover:~text-primary-foreground",
          "focus:~bg-primary focus:~text-primary-foreground"
        ),
        day_today: k("today ~bg-accent ~text-accent-foreground"),
        day_outside: "~text-muted-foreground ~opacity-50",
        day_disabled: "~text-muted-foreground ~opacity-50",
        day_range_middle: k(
          "range-middle aria-selected:~bg-transparent aria-selected:~text-accent-foreground",
          "[&.today]:~bg-accent"
        ),
        day_range_start: "range-start",
        day_range_end: "range-end",
        day_hidden: "~invisible",
        ...t
      },
      components: {
        IconLeft: ({ ...o }) => /* @__PURE__ */ _.jsx(vp, { className: "~h-4 ~w-4" }),
        IconRight: ({ ...o }) => /* @__PURE__ */ _.jsx(hs, { className: "~h-4 ~w-4" })
      },
      ...r
    }
  );
}
ua.displayName = "Calendar";
const l1 = P.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _.jsx(
  "div",
  {
    ref: n,
    className: k(
      "tw-reset ~rounded-xl ~border ~bg-card ~text-card-foreground ~shadow",
      e
    ),
    ...t
  }
));
l1.displayName = "Card";
const d1 = P.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _.jsx(
  "div",
  {
    ref: n,
    className: k("~flex ~flex-col ~space-y-1.5 ~p-6", e),
    ...t
  }
));
d1.displayName = "CardHeader";
const u1 = P.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _.jsx(
  "h3",
  {
    ref: n,
    className: k("~font-semibold ~leading-none ~tracking-tight", e),
    ...t
  }
));
u1.displayName = "CardTitle";
const f1 = P.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _.jsx("p", { ref: n, className: k("~text-muted-foreground", e), ...t }));
f1.displayName = "CardDescription";
const p1 = P.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _.jsx("div", { ref: n, className: k("~p-6 ~pt-0", e), ...t }));
p1.displayName = "CardContent";
const v1 = P.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _.jsx(
  "div",
  {
    ref: n,
    className: k("~flex ~items-center ~p-6 ~pt-0", e),
    ...t
  }
));
v1.displayName = "CardFooter";
const ax = Xi, ix = P.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _.jsx(
  Zi,
  {
    ref: n,
    className: k("tw-reset", e),
    ...t
  }
)), Zc = ({
  className: e,
  ...t
}) => /* @__PURE__ */ _.jsx(Mo, { className: k(e), ...t });
Zc.displayName = Mo.displayName;
const Qc = P.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _.jsx(
  Oo,
  {
    ref: n,
    className: k(
      "~fixed ~inset-0 ~z-50 ~bg-background/80 ~backdrop-blur-sm",
      "data-[state=open]:~animate-in data-[state=open]:~fade-in-0",
      "data-[state=closed]:~animate-out data-[state=closed]:~fade-out-0",
      e
    ),
    ...t
  }
));
Qc.displayName = Oo.displayName;
const m1 = P.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ _.jsxs(Zc, { children: [
  /* @__PURE__ */ _.jsx(Qc, {}),
  /* @__PURE__ */ _.jsxs(
    No,
    {
      ref: r,
      className: k(
        "tw-reset ~fixed ~left-[50%] ~top-[50%] ~z-50 ~grid ~w-full ~max-w-lg ~translate-x-[-50%] ~translate-y-[-50%] ~gap-4 ~border ~bg-background ~p-6 ~shadow-lg ~duration-200 sm:~rounded-lg md:~w-full",
        "data-[state=open]:~animate-in data-[state=open]:~fade-in-0 data-[state=open]:~zoom-in-95 data-[state=open]:~slide-in-from-left-1/2 data-[state=open]:~slide-in-from-top-[48%]",
        "data-[state=closed]:~animate-out data-[state=closed]:~fade-out-0 data-[state=closed]:~zoom-out-95 data-[state=closed]:~slide-out-to-left-1/2 data-[state=closed]:~slide-out-to-top-[48%]",
        e
      ),
      ...n,
      children: [
        t,
        /* @__PURE__ */ _.jsxs(
          Ao,
          {
            className: k(
              "~absolute ~right-4 ~top-4 ~rounded-sm ~opacity-70 ~transition-opacity hover:~opacity-100 disabled:~pointer-events-none",
              "~ring-offset-background focus:~outline-none focus:~ring-2 focus:~ring-ring focus:~ring-offset-2",
              "data-[state=open]:~bg-accent data-[state=open]:~text-muted-foreground"
            ),
            children: [
              /* @__PURE__ */ _.jsx(gs, { className: "~h-4 ~w-4" }),
              /* @__PURE__ */ _.jsx("span", { className: "~sr-only", children: "Close" })
            ]
          }
        )
      ]
    }
  )
] }));
m1.displayName = No.displayName;
const b1 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ _.jsx(
  "div",
  {
    className: k(
      "~flex ~flex-col ~space-y-1.5 ~text-center sm:~text-left",
      e
    ),
    ...t
  }
);
b1.displayName = "DialogHeader";
const h1 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ _.jsx(
  "div",
  {
    className: k(
      "~flex ~flex-col-reverse sm:~flex-row sm:~justify-end sm:~space-x-2",
      e
    ),
    ...t
  }
);
h1.displayName = "DialogFooter";
const g1 = P.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _.jsx(Ro, { ref: n, className: e, ...t }));
g1.displayName = Ro.displayName;
const $1 = P.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _.jsx(
  ko,
  {
    ref: n,
    className: k("~text-muted-foreground", e),
    ...t
  }
));
$1.displayName = ko.displayName;
const y1 = P.forwardRef(
  ({ className: e, type: t, ...n }, r) => /* @__PURE__ */ _.jsx(
    "input",
    {
      type: t,
      className: k(
        "tw-reset ~flex ~h-9 ~w-full ~rounded-md ~border ~border-border ~bg-background ~px-3 ~py-1 ~shadow-sm ~transition-colors",
        "placeholder:~text-input",
        "focus-visible:~outline-none focus-visible:~ring-1 focus-visible:~ring-ring",
        "disabled:~cursor-not-allowed disabled:~bg-muted",
        e
      ),
      ref: r,
      ...n
    }
  )
);
y1.displayName = "Input";
const w1 = /* @__PURE__ */ T((e, t) => /* @__PURE__ */ h(K.label, C({}, e, {
  ref: t,
  onMouseDown: (n) => {
    var r;
    (r = e.onMouseDown) === null || r === void 0 || r.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault();
  }
}))), Jc = w1, x1 = Et(
  "tw-reset ~leading-none peer-disabled:~cursor-not-allowed peer-disabled:~opacity-50"
), C1 = P.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _.jsx(
  Jc,
  {
    ref: n,
    className: k(x1(), e),
    ...t
  }
));
C1.displayName = Jc.displayName;
const el = "Popover", [tl, sx] = _e(el, [
  xt
]), fa = xt(), [_1, an] = tl(el), E1 = (e) => {
  const { __scopePopover: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: i = !1 } = e, s = fa(t), c = A(null), [l, u] = G(!1), [d = !1, f] = Te({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ h(Pn, s, /* @__PURE__ */ h(_1, {
    scope: t,
    contentId: Oe(),
    triggerRef: c,
    open: d,
    onOpenChange: f,
    onOpenToggle: te(
      () => f(
        (p) => !p
      ),
      [
        f
      ]
    ),
    hasCustomAnchor: l,
    onCustomAnchorAdd: te(
      () => u(!0),
      []
    ),
    onCustomAnchorRemove: te(
      () => u(!1),
      []
    ),
    modal: i
  }, n));
}, T1 = "PopoverTrigger", S1 = /* @__PURE__ */ T((e, t) => {
  const { __scopePopover: n, ...r } = e, o = an(T1, n), a = fa(n), i = re(t, o.triggerRef), s = /* @__PURE__ */ h(K.button, C({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": ol(o.open)
  }, r, {
    ref: i,
    onClick: F(e.onClick, o.onOpenToggle)
  }));
  return o.hasCustomAnchor ? s : /* @__PURE__ */ h(yr, C({
    asChild: !0
  }, a), s);
}), nl = "PopoverPortal", [P1, D1] = tl(nl, {
  forceMount: void 0
}), M1 = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, a = an(nl, t);
  return /* @__PURE__ */ h(P1, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ h(Ne, {
    present: n || a.open
  }, /* @__PURE__ */ h(Tn, {
    asChild: !0,
    container: o
  }, r)));
}, _n = "PopoverContent", O1 = /* @__PURE__ */ T((e, t) => {
  const n = D1(_n, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, a = an(_n, e.__scopePopover);
  return /* @__PURE__ */ h(Ne, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ h(N1, C({}, o, {
    ref: t
  })) : /* @__PURE__ */ h(R1, C({}, o, {
    ref: t
  })));
}), N1 = /* @__PURE__ */ T((e, t) => {
  const n = an(_n, e.__scopePopover), r = A(null), o = re(t, r), a = A(!1);
  return z(() => {
    const i = r.current;
    if (i)
      return hr(i);
  }, []), /* @__PURE__ */ h(br, {
    as: lt,
    allowPinchZoom: !0
  }, /* @__PURE__ */ h(rl, C({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: F(e.onCloseAutoFocus, (i) => {
      var s;
      i.preventDefault(), a.current || (s = n.triggerRef.current) === null || s === void 0 || s.focus();
    }),
    onPointerDownOutside: F(e.onPointerDownOutside, (i) => {
      const s = i.detail.originalEvent, c = s.button === 0 && s.ctrlKey === !0, l = s.button === 2 || c;
      a.current = l;
    }, {
      checkForDefaultPrevented: !1
    }),
    onFocusOutside: F(
      e.onFocusOutside,
      (i) => i.preventDefault(),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), R1 = /* @__PURE__ */ T((e, t) => {
  const n = an(_n, e.__scopePopover), r = A(!1), o = A(!1);
  return /* @__PURE__ */ h(rl, C({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: (a) => {
      var i;
      if ((i = e.onCloseAutoFocus) === null || i === void 0 || i.call(e, a), !a.defaultPrevented) {
        var s;
        r.current || (s = n.triggerRef.current) === null || s === void 0 || s.focus(), a.preventDefault();
      }
      r.current = !1, o.current = !1;
    },
    onInteractOutside: (a) => {
      var i, s;
      (i = e.onInteractOutside) === null || i === void 0 || i.call(e, a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
      const c = a.target;
      ((s = n.triggerRef.current) === null || s === void 0 ? void 0 : s.contains(c)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
    }
  }));
}), rl = /* @__PURE__ */ T((e, t) => {
  const { __scopePopover: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, disableOutsidePointerEvents: i, onEscapeKeyDown: s, onPointerDownOutside: c, onFocusOutside: l, onInteractOutside: u, ...d } = e, f = an(_n, n), p = fa(n);
  return vr(), /* @__PURE__ */ h(pr, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ h(en, {
    asChild: !0,
    disableOutsidePointerEvents: i,
    onInteractOutside: u,
    onEscapeKeyDown: s,
    onPointerDownOutside: c,
    onFocusOutside: l,
    onDismiss: () => f.onOpenChange(!1)
  }, /* @__PURE__ */ h(wr, C({
    "data-state": ol(f.open),
    role: "dialog",
    id: f.contentId
  }, p, d, {
    ref: t,
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
function ol(e) {
  return e ? "open" : "closed";
}
const k1 = E1, A1 = S1, I1 = M1, al = O1, il = k1, sl = P.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _.jsx(
  A1,
  {
    ref: n,
    className: k("tw-reset", e),
    ...t
  }
)), pa = P.forwardRef(
  ({
    className: e,
    align: t = "start",
    sideOffset: n = 4,
    collisionPadding: r = 10,
    ...o
  }, a) => /* @__PURE__ */ _.jsx(I1, { children: /* @__PURE__ */ _.jsx(
    al,
    {
      ref: a,
      align: t,
      sideOffset: n,
      collisionPadding: r,
      className: k(
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
pa.displayName = al.displayName;
function dr(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
const Sr = /* @__PURE__ */ T((e, t) => /* @__PURE__ */ h(K.span, C({}, e, {
  ref: t,
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
}))), L1 = Sr, F1 = [
  " ",
  "Enter",
  "ArrowUp",
  "ArrowDown"
], W1 = [
  " ",
  "Enter"
], Pr = "Select", [Dr, va, j1] = tn(Pr), [sn, cx] = _e(Pr, [
  j1,
  xt
]), ma = xt(), [V1, Ft] = sn(Pr), [B1, Y1] = sn(Pr), H1 = (e) => {
  const { __scopeSelect: t, children: n, open: r, defaultOpen: o, onOpenChange: a, value: i, defaultValue: s, onValueChange: c, dir: l, name: u, autoComplete: d, disabled: f, required: p } = e, v = ma(t), [m, b] = G(null), [$, g] = G(null), [w, E] = G(!1), S = At(l), [L = !1, M] = Te({
    prop: r,
    defaultProp: o,
    onChange: a
  }), [W, H] = Te({
    prop: i,
    defaultProp: s,
    onChange: c
  }), X = A(null), U = m ? !!m.closest("form") : !0, [q, Y] = G(/* @__PURE__ */ new Set()), D = Array.from(q).map(
    (O) => O.props.value
  ).join(";");
  return /* @__PURE__ */ h(Pn, v, /* @__PURE__ */ h(V1, {
    required: p,
    scope: t,
    trigger: m,
    onTriggerChange: b,
    valueNode: $,
    onValueNodeChange: g,
    valueNodeHasChildren: w,
    onValueNodeHasChildrenChange: E,
    contentId: Oe(),
    value: W,
    onValueChange: H,
    open: L,
    onOpenChange: M,
    dir: S,
    triggerPointerDownPosRef: X,
    disabled: f
  }, /* @__PURE__ */ h(Dr.Provider, {
    scope: t
  }, /* @__PURE__ */ h(B1, {
    scope: e.__scopeSelect,
    onNativeOptionAdd: te((O) => {
      Y(
        (j) => new Set(j).add(O)
      );
    }, []),
    onNativeOptionRemove: te((O) => {
      Y((j) => {
        const R = new Set(j);
        return R.delete(O), R;
      });
    }, [])
  }, n)), U ? /* @__PURE__ */ h(dl, {
    key: D,
    "aria-hidden": !0,
    required: p,
    tabIndex: -1,
    name: u,
    autoComplete: d,
    value: W,
    onChange: (O) => H(O.target.value),
    disabled: f
  }, W === void 0 ? /* @__PURE__ */ h("option", {
    value: ""
  }) : null, Array.from(q)) : null));
}, U1 = "SelectTrigger", K1 = /* @__PURE__ */ T((e, t) => {
  const { __scopeSelect: n, disabled: r = !1, ...o } = e, a = ma(n), i = Ft(U1, n), s = i.disabled || r, c = re(t, i.onTriggerChange), l = va(n), [u, d, f] = ul((v) => {
    const m = l().filter(
      (g) => !g.disabled
    ), b = m.find(
      (g) => g.value === i.value
    ), $ = fl(m, v, b);
    $ !== void 0 && i.onValueChange($.value);
  }), p = () => {
    s || (i.onOpenChange(!0), f());
  };
  return /* @__PURE__ */ h(yr, C({
    asChild: !0
  }, a), /* @__PURE__ */ h(K.button, C({
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
    onClick: F(o.onClick, (v) => {
      v.currentTarget.focus();
    }),
    onPointerDown: F(o.onPointerDown, (v) => {
      const m = v.target;
      m.hasPointerCapture(v.pointerId) && m.releasePointerCapture(v.pointerId), v.button === 0 && v.ctrlKey === !1 && (p(), i.triggerPointerDownPosRef.current = {
        x: Math.round(v.pageX),
        y: Math.round(v.pageY)
      }, v.preventDefault());
    }),
    onKeyDown: F(o.onKeyDown, (v) => {
      const m = u.current !== "";
      !(v.ctrlKey || v.altKey || v.metaKey) && v.key.length === 1 && d(v.key), !(m && v.key === " ") && F1.includes(v.key) && (p(), v.preventDefault());
    })
  })));
}), G1 = "SelectValue", z1 = /* @__PURE__ */ T((e, t) => {
  const { __scopeSelect: n, className: r, style: o, children: a, placeholder: i, ...s } = e, c = Ft(G1, n), { onValueNodeHasChildrenChange: l } = c, u = a !== void 0, d = re(t, c.onValueNodeChange);
  return Fe(() => {
    l(u);
  }, [
    l,
    u
  ]), /* @__PURE__ */ h(K.span, C({}, s, {
    ref: d,
    style: {
      pointerEvents: "none"
    }
  }), c.value === void 0 && i !== void 0 ? i : a);
}), q1 = /* @__PURE__ */ T((e, t) => {
  const { __scopeSelect: n, children: r, ...o } = e;
  return /* @__PURE__ */ h(K.span, C({
    "aria-hidden": !0
  }, o, {
    ref: t
  }), r || "▼");
}), X1 = (e) => /* @__PURE__ */ h(Tn, C({
  asChild: !0
}, e)), Jt = "SelectContent", Z1 = /* @__PURE__ */ T((e, t) => {
  const n = Ft(Jt, e.__scopeSelect), [r, o] = G();
  if (Fe(() => {
    o(new DocumentFragment());
  }, []), !n.open) {
    const a = r;
    return a ? /* @__PURE__ */ To(/* @__PURE__ */ h(cl, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ h(Dr.Slot, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ h("div", null, e.children))), a) : null;
  }
  return /* @__PURE__ */ h(Q1, C({}, e, {
    ref: t
  }));
}), ot = 10, [cl, Mr] = sn(Jt), Q1 = /* @__PURE__ */ T((e, t) => {
  const {
    __scopeSelect: n,
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
    ...$
  } = e, g = Ft(Jt, n), [w, E] = G(null), [S, L] = G(null), M = re(
    t,
    (Z) => E(Z)
  ), [W, H] = G(null), [X, U] = G(null), q = va(n), [Y, D] = G(!1), O = A(!1);
  z(() => {
    if (w)
      return hr(w);
  }, [
    w
  ]), vr();
  const j = te((Z) => {
    const [se, ...ve] = q().map(
      (ue) => ue.ref.current
    ), [de] = ve.slice(-1), pe = document.activeElement;
    for (const ue of Z)
      if (ue === pe || (ue == null || ue.scrollIntoView({
        block: "nearest"
      }), ue === se && S && (S.scrollTop = 0), ue === de && S && (S.scrollTop = S.scrollHeight), ue == null || ue.focus(), document.activeElement !== pe))
        return;
  }, [
    q,
    S
  ]), R = te(
    () => j([
      W,
      w
    ]),
    [
      j,
      W,
      w
    ]
  );
  z(() => {
    Y && R();
  }, [
    Y,
    R
  ]);
  const { onOpenChange: N, triggerPointerDownPosRef: V } = g;
  z(() => {
    if (w) {
      let Z = {
        x: 0,
        y: 0
      };
      const se = (de) => {
        var pe, ue, Re, De;
        Z = {
          x: Math.abs(Math.round(de.pageX) - ((pe = (ue = V.current) === null || ue === void 0 ? void 0 : ue.x) !== null && pe !== void 0 ? pe : 0)),
          y: Math.abs(Math.round(de.pageY) - ((Re = (De = V.current) === null || De === void 0 ? void 0 : De.y) !== null && Re !== void 0 ? Re : 0))
        };
      }, ve = (de) => {
        Z.x <= 10 && Z.y <= 10 ? de.preventDefault() : w.contains(de.target) || N(!1), document.removeEventListener("pointermove", se), V.current = null;
      };
      return V.current !== null && (document.addEventListener("pointermove", se), document.addEventListener("pointerup", ve, {
        capture: !0,
        once: !0
      })), () => {
        document.removeEventListener("pointermove", se), document.removeEventListener("pointerup", ve, {
          capture: !0
        });
      };
    }
  }, [
    w,
    N,
    V
  ]), z(() => {
    const Z = () => N(!1);
    return window.addEventListener("blur", Z), window.addEventListener("resize", Z), () => {
      window.removeEventListener("blur", Z), window.removeEventListener("resize", Z);
    };
  }, [
    N
  ]);
  const [Q, oe] = ul((Z) => {
    const se = q().filter(
      (pe) => !pe.disabled
    ), ve = se.find(
      (pe) => pe.ref.current === document.activeElement
    ), de = fl(se, Z, ve);
    de && setTimeout(
      () => de.ref.current.focus()
    );
  }), ae = te((Z, se, ve) => {
    const de = !O.current && !ve;
    (g.value !== void 0 && g.value === se || de) && (H(Z), de && (O.current = !0));
  }, [
    g.value
  ]), $e = te(
    () => w == null ? void 0 : w.focus(),
    [
      w
    ]
  ), xe = te((Z, se, ve) => {
    const de = !O.current && !ve;
    (g.value !== void 0 && g.value === se || de) && U(Z);
  }, [
    g.value
  ]), Me = r === "popper" ? xi : J1, Pe = Me === xi ? {
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
  return /* @__PURE__ */ h(cl, {
    scope: n,
    content: w,
    viewport: S,
    onViewportChange: L,
    itemRefCallback: ae,
    selectedItem: W,
    onItemLeave: $e,
    itemTextRefCallback: xe,
    focusSelectedItem: R,
    selectedItemText: X,
    position: r,
    isPositioned: Y,
    searchRef: Q
  }, /* @__PURE__ */ h(br, {
    as: lt,
    allowPinchZoom: !0
  }, /* @__PURE__ */ h(pr, {
    asChild: !0,
    trapped: g.open,
    onMountAutoFocus: (Z) => {
      Z.preventDefault();
    },
    onUnmountAutoFocus: F(o, (Z) => {
      var se;
      (se = g.trigger) === null || se === void 0 || se.focus({
        preventScroll: !0
      }), Z.preventDefault();
    })
  }, /* @__PURE__ */ h(en, {
    asChild: !0,
    disableOutsidePointerEvents: !0,
    onEscapeKeyDown: a,
    onPointerDownOutside: i,
    onFocusOutside: (Z) => Z.preventDefault(),
    onDismiss: () => g.onOpenChange(!1)
  }, /* @__PURE__ */ h(Me, C({
    role: "listbox",
    id: g.contentId,
    "data-state": g.open ? "open" : "closed",
    dir: g.dir,
    onContextMenu: (Z) => Z.preventDefault()
  }, $, Pe, {
    onPlaced: () => D(!0),
    ref: M,
    style: {
      // flex layout so we can place the scroll buttons properly
      display: "flex",
      flexDirection: "column",
      // reset the outline by default as the content MAY get focused
      outline: "none",
      ...$.style
    },
    onKeyDown: F($.onKeyDown, (Z) => {
      const se = Z.ctrlKey || Z.altKey || Z.metaKey;
      if (Z.key === "Tab" && Z.preventDefault(), !se && Z.key.length === 1 && oe(Z.key), [
        "ArrowUp",
        "ArrowDown",
        "Home",
        "End"
      ].includes(Z.key)) {
        let de = q().filter(
          (pe) => !pe.disabled
        ).map(
          (pe) => pe.ref.current
        );
        if ([
          "ArrowUp",
          "End"
        ].includes(Z.key) && (de = de.slice().reverse()), [
          "ArrowUp",
          "ArrowDown"
        ].includes(Z.key)) {
          const pe = Z.target, ue = de.indexOf(pe);
          de = de.slice(ue + 1);
        }
        setTimeout(
          () => j(de)
        ), Z.preventDefault();
      }
    })
  }))))));
}), J1 = /* @__PURE__ */ T((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, a = Ft(Jt, n), i = Mr(Jt, n), [s, c] = G(null), [l, u] = G(null), d = re(
    t,
    (M) => u(M)
  ), f = va(n), p = A(!1), v = A(!0), { viewport: m, selectedItem: b, selectedItemText: $, focusSelectedItem: g } = i, w = te(() => {
    if (a.trigger && a.valueNode && s && l && m && b && $) {
      const M = a.trigger.getBoundingClientRect(), W = l.getBoundingClientRect(), H = a.valueNode.getBoundingClientRect(), X = $.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const pe = X.left - W.left, ue = H.left - pe, Re = M.left - ue, De = M.width + Re, Xe = Math.max(De, W.width), Ze = window.innerWidth - ot, ft = dr(ue, [
          ot,
          Ze - Xe
        ]);
        s.style.minWidth = De + "px", s.style.left = ft + "px";
      } else {
        const pe = W.right - X.right, ue = window.innerWidth - H.right - pe, Re = window.innerWidth - M.right - ue, De = M.width + Re, Xe = Math.max(De, W.width), Ze = window.innerWidth - ot, ft = dr(ue, [
          ot,
          Ze - Xe
        ]);
        s.style.minWidth = De + "px", s.style.right = ft + "px";
      }
      const U = f(), q = window.innerHeight - ot * 2, Y = m.scrollHeight, D = window.getComputedStyle(l), O = parseInt(D.borderTopWidth, 10), j = parseInt(D.paddingTop, 10), R = parseInt(D.borderBottomWidth, 10), N = parseInt(D.paddingBottom, 10), V = O + j + Y + N + R, Q = Math.min(b.offsetHeight * 5, V), oe = window.getComputedStyle(m), ae = parseInt(oe.paddingTop, 10), $e = parseInt(oe.paddingBottom, 10), xe = M.top + M.height / 2 - ot, Me = q - xe, Pe = b.offsetHeight / 2, Z = b.offsetTop + Pe, se = O + j + Z, ve = V - se;
      if (se <= xe) {
        const pe = b === U[U.length - 1].ref.current;
        s.style.bottom = "0px";
        const ue = l.clientHeight - m.offsetTop - m.offsetHeight, Re = Math.max(Me, Pe + (pe ? $e : 0) + ue + R), De = se + Re;
        s.style.height = De + "px";
      } else {
        const pe = b === U[0].ref.current;
        s.style.top = "0px";
        const Re = Math.max(xe, O + m.offsetTop + (pe ? ae : 0) + Pe) + ve;
        s.style.height = Re + "px", m.scrollTop = se - xe + m.offsetTop;
      }
      s.style.margin = `${ot}px 0`, s.style.minHeight = Q + "px", s.style.maxHeight = q + "px", r == null || r(), requestAnimationFrame(
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
    $,
    a.dir,
    r
  ]);
  Fe(
    () => w(),
    [
      w
    ]
  );
  const [E, S] = G();
  Fe(() => {
    l && S(window.getComputedStyle(l).zIndex);
  }, [
    l
  ]);
  const L = te((M) => {
    M && v.current === !0 && (w(), g == null || g(), v.current = !1);
  }, [
    w,
    g
  ]);
  return /* @__PURE__ */ h(e$, {
    scope: n,
    contentWrapper: s,
    shouldExpandOnScrollRef: p,
    onScrollButtonChange: L
  }, /* @__PURE__ */ h("div", {
    ref: c,
    style: {
      display: "flex",
      flexDirection: "column",
      position: "fixed",
      zIndex: E
    }
  }, /* @__PURE__ */ h(K.div, C({}, o, {
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
}), xi = /* @__PURE__ */ T((e, t) => {
  const { __scopeSelect: n, align: r = "start", collisionPadding: o = ot, ...a } = e, i = ma(n);
  return /* @__PURE__ */ h(wr, C({}, i, a, {
    ref: t,
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
}), [e$, t$] = sn(Jt, {}), Ci = "SelectViewport", n$ = /* @__PURE__ */ T((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = Mr(Ci, n), a = t$(Ci, n), i = re(t, o.onViewportChange), s = A(0);
  return /* @__PURE__ */ h(Rt, null, /* @__PURE__ */ h("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ h(Dr.Slot, {
    scope: n
  }, /* @__PURE__ */ h(K.div, C({
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
    onScroll: F(r.onScroll, (c) => {
      const l = c.currentTarget, { contentWrapper: u, shouldExpandOnScrollRef: d } = a;
      if (d != null && d.current && u) {
        const f = Math.abs(s.current - l.scrollTop);
        if (f > 0) {
          const p = window.innerHeight - ot * 2, v = parseFloat(u.style.minHeight), m = parseFloat(u.style.height), b = Math.max(v, m);
          if (b < p) {
            const $ = b + f, g = Math.min(p, $), w = $ - g;
            u.style.height = g + "px", u.style.bottom === "0px" && (l.scrollTop = w > 0 ? w : 0, u.style.justifyContent = "flex-end");
          }
        }
      }
      s.current = l.scrollTop;
    })
  }))));
}), r$ = "SelectGroup", [o$, a$] = sn(r$), i$ = /* @__PURE__ */ T((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = Oe();
  return /* @__PURE__ */ h(o$, {
    scope: n,
    id: o
  }, /* @__PURE__ */ h(K.div, C({
    role: "group",
    "aria-labelledby": o
  }, r, {
    ref: t
  })));
}), s$ = "SelectLabel", c$ = /* @__PURE__ */ T((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = a$(s$, n);
  return /* @__PURE__ */ h(K.div, C({
    id: o.id
  }, r, {
    ref: t
  }));
}), $o = "SelectItem", [l$, ll] = sn($o), d$ = /* @__PURE__ */ T((e, t) => {
  const { __scopeSelect: n, value: r, disabled: o = !1, textValue: a, ...i } = e, s = Ft($o, n), c = Mr($o, n), l = s.value === r, [u, d] = G(a ?? ""), [f, p] = G(!1), v = re(t, ($) => {
    var g;
    return (g = c.itemRefCallback) === null || g === void 0 ? void 0 : g.call(c, $, r, o);
  }), m = Oe(), b = () => {
    o || (s.onValueChange(r), s.onOpenChange(!1));
  };
  return /* @__PURE__ */ h(l$, {
    scope: n,
    value: r,
    disabled: o,
    textId: m,
    isSelected: l,
    onItemTextChange: te(($) => {
      d((g) => {
        var w;
        return g || ((w = $ == null ? void 0 : $.textContent) !== null && w !== void 0 ? w : "").trim();
      });
    }, [])
  }, /* @__PURE__ */ h(Dr.ItemSlot, {
    scope: n,
    value: r,
    disabled: o,
    textValue: u
  }, /* @__PURE__ */ h(K.div, C({
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
    onFocus: F(
      i.onFocus,
      () => p(!0)
    ),
    onBlur: F(
      i.onBlur,
      () => p(!1)
    ),
    onPointerUp: F(i.onPointerUp, b),
    onPointerMove: F(i.onPointerMove, ($) => {
      if (o) {
        var g;
        (g = c.onItemLeave) === null || g === void 0 || g.call(c);
      } else
        $.currentTarget.focus({
          preventScroll: !0
        });
    }),
    onPointerLeave: F(i.onPointerLeave, ($) => {
      if ($.currentTarget === document.activeElement) {
        var g;
        (g = c.onItemLeave) === null || g === void 0 || g.call(c);
      }
    }),
    onKeyDown: F(i.onKeyDown, ($) => {
      var g;
      ((g = c.searchRef) === null || g === void 0 ? void 0 : g.current) !== "" && $.key === " " || (W1.includes($.key) && b(), $.key === " " && $.preventDefault());
    })
  }))));
}), Un = "SelectItemText", u$ = /* @__PURE__ */ T((e, t) => {
  const { __scopeSelect: n, className: r, style: o, ...a } = e, i = Ft(Un, n), s = Mr(Un, n), c = ll(Un, n), l = Y1(Un, n), [u, d] = G(null), f = re(
    t,
    ($) => d($),
    c.onItemTextChange,
    ($) => {
      var g;
      return (g = s.itemTextRefCallback) === null || g === void 0 ? void 0 : g.call(s, $, c.value, c.disabled);
    }
  ), p = u == null ? void 0 : u.textContent, v = Qe(
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
  return Fe(() => (m(v), () => b(v)), [
    m,
    b,
    v
  ]), /* @__PURE__ */ h(Rt, null, /* @__PURE__ */ h(K.span, C({
    id: c.textId
  }, a, {
    ref: f
  })), c.isSelected && i.valueNode && !i.valueNodeHasChildren ? /* @__PURE__ */ To(a.children, i.valueNode) : null);
}), f$ = "SelectItemIndicator", p$ = /* @__PURE__ */ T((e, t) => {
  const { __scopeSelect: n, ...r } = e;
  return ll(f$, n).isSelected ? /* @__PURE__ */ h(K.span, C({
    "aria-hidden": !0
  }, r, {
    ref: t
  })) : null;
}), v$ = /* @__PURE__ */ T((e, t) => {
  const { __scopeSelect: n, ...r } = e;
  return /* @__PURE__ */ h(K.div, C({
    "aria-hidden": !0
  }, r, {
    ref: t
  }));
}), dl = /* @__PURE__ */ T((e, t) => {
  const { value: n, ...r } = e, o = A(null), a = re(t, o), i = On(n);
  return z(() => {
    const s = o.current, c = window.HTMLSelectElement.prototype, u = Object.getOwnPropertyDescriptor(c, "value").set;
    if (i !== n && u) {
      const d = new Event("change", {
        bubbles: !0
      });
      u.call(s, n), s.dispatchEvent(d);
    }
  }, [
    i,
    n
  ]), /* @__PURE__ */ h(Sr, {
    asChild: !0
  }, /* @__PURE__ */ h("select", C({}, r, {
    ref: a,
    defaultValue: n
  })));
});
dl.displayName = "BubbleSelect";
function ul(e) {
  const t = Ee(e), n = A(""), r = A(0), o = te((i) => {
    const s = n.current + i;
    t(s), function c(l) {
      n.current = l, window.clearTimeout(r.current), l !== "" && (r.current = window.setTimeout(
        () => c(""),
        1e3
      ));
    }(s);
  }, [
    t
  ]), a = te(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return z(() => () => window.clearTimeout(r.current), []), [
    n,
    o,
    a
  ];
}
function fl(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(
    (l) => l === t[0]
  ) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let i = m$(e, Math.max(a, 0));
  o.length === 1 && (i = i.filter(
    (l) => l !== n
  ));
  const c = i.find(
    (l) => l.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function m$(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const b$ = H1, pl = K1, h$ = z1, g$ = q1, $$ = X1, vl = Z1, y$ = n$, w$ = i$, ml = c$, bl = d$, x$ = u$, C$ = p$, hl = v$, lx = b$, dx = w$, ux = h$, _$ = P.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ _.jsxs(
  pl,
  {
    ref: r,
    className: k(
      "tw-reset ~flex ~h-9 ~w-full ~items-center ~justify-between ~rounded-md ~border ~border-border ~bg-transparent ~px-3 ~py-2 ~shadow-sm",
      "~ring-offset-background",
      "data-[placeholder]:~text-input",
      "focus:~outline-none focus:~ring-1 focus:~ring-ring",
      "disabled:~cursor-not-allowed disabled:~opacity-50",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ _.jsx(g$, { asChild: !0, children: /* @__PURE__ */ _.jsx(lp, { className: "~h-4 ~w-4 ~opacity-50" }) })
    ]
  }
));
_$.displayName = pl.displayName;
const E$ = P.forwardRef(({ className: e, children: t, position: n = "item-aligned", ...r }, o) => /* @__PURE__ */ _.jsx($$, { children: /* @__PURE__ */ _.jsx(
  vl,
  {
    ref: o,
    className: k(
      "tw-reset ~relative ~z-50 ~min-w-[8rem] ~overflow-hidden ~rounded-md ~border ~bg-popover ~font-normal ~leading-6 ~text-popover-foreground ~shadow-md",
      "data-[state=open]:~animate-in data-[state=open]:~fade-in-0 data-[state=open]:~zoom-in-95",
      "data-[state=closed]:~animate-out data-[state=closed]:~fade-out-0 data-[state=closed]:~zoom-out-95",
      "data-[side=bottom]:~slide-in-from-top-2 data-[side=left]:~slide-in-from-right-2 data-[side=right]:~slide-in-from-left-2 data-[side=top]:~slide-in-from-bottom-2",
      n === "popper" && "data-[side=bottom]:~translate-y-1 data-[side=left]:~-translate-x-1 data-[side=right]:~translate-x-1 data-[side=top]:~-translate-y-1",
      e
    ),
    position: n,
    ...r,
    children: /* @__PURE__ */ _.jsx(
      y$,
      {
        className: k(
          "~p-0",
          // dropdown padding
          n === "popper" && "~h-[var(--radix-select-trigger-height)] ~w-full ~min-w-[var(--radix-select-trigger-width)]"
        ),
        children: t
      }
    )
  }
) }));
E$.displayName = vl.displayName;
const T$ = P.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _.jsx(
  ml,
  {
    ref: n,
    className: k("~px-2 ~py-1.5 ~font-bold", e),
    ...t
  }
));
T$.displayName = ml.displayName;
const S$ = P.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ _.jsxs(
  bl,
  {
    ref: r,
    className: k(
      "~relative ~flex ~w-full ~cursor-pointer ~select-none ~items-center ~rounded-sm ~py-1.5 ~pl-2 ~pr-8 ~outline-none",
      "focus:~bg-accent focus:~text-accent-foreground",
      "data-[disabled]:~pointer-events-none data-[disabled]:~opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ _.jsx("span", { className: "~absolute ~right-2 ~flex ~h-3.5 ~w-3.5 ~items-center ~justify-center", children: /* @__PURE__ */ _.jsx(C$, { children: /* @__PURE__ */ _.jsx(Lo, { className: "~h-4 ~w-4" }) }) }),
      /* @__PURE__ */ _.jsx(x$, { children: t })
    ]
  }
));
S$.displayName = bl.displayName;
const P$ = P.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _.jsx(
  hl,
  {
    ref: n,
    className: k("~-mx-1 ~my-1 ~h-px ~bg-muted", e),
    ...t
  }
));
P$.displayName = hl.displayName;
const yo = "horizontal", D$ = [
  "horizontal",
  "vertical"
], gl = /* @__PURE__ */ T((e, t) => {
  const { decorative: n, orientation: r = yo, ...o } = e, a = $l(r) ? r : yo, s = n ? {
    role: "none"
  } : {
    "aria-orientation": a === "vertical" ? a : void 0,
    role: "separator"
  };
  return /* @__PURE__ */ h(K.div, C({
    "data-orientation": a
  }, s, o, {
    ref: t
  }));
});
gl.propTypes = {
  orientation(e, t, n) {
    const r = e[t], o = String(r);
    return r && !$l(r) ? new Error(M$(o, n)) : null;
  }
};
function M$(e, t) {
  return `Invalid prop \`orientation\` of value \`${e}\` supplied to \`${t}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${yo}\`.`;
}
function $l(e) {
  return D$.includes(e);
}
const yl = gl, O$ = P.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: n = !0, ...r }, o) => /* @__PURE__ */ _.jsx(
    yl,
    {
      ref: o,
      decorative: n,
      orientation: t,
      className: k(
        "tw-reset ~shrink-0 ~bg-border",
        t === "horizontal" ? "~h-[1px] ~w-full" : "~h-full ~w-[1px]",
        e
      ),
      ...r
    }
  )
);
O$.displayName = yl.displayName;
const wl = [
  "PageUp",
  "PageDown"
], xl = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
], Cl = {
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
}, An = "Slider", [wo, N$, R$] = tn(An), [_l, fx] = _e(An, [
  R$
]), [k$, Or] = _l(An), A$ = /* @__PURE__ */ T((e, t) => {
  const { name: n, min: r = 0, max: o = 100, step: a = 1, orientation: i = "horizontal", disabled: s = !1, minStepsBetweenThumbs: c = 0, defaultValue: l = [
    r
  ], value: u, onValueChange: d = () => {
  }, onValueCommit: f = () => {
  }, inverted: p = !1, ...v } = e, [m, b] = G(null), $ = re(
    t,
    (D) => b(D)
  ), g = A(/* @__PURE__ */ new Set()), w = A(0), E = i === "horizontal", S = m ? !!m.closest("form") : !0, L = E ? I$ : L$, [M = [], W] = Te({
    prop: u,
    defaultProp: l,
    onChange: (D) => {
      var O;
      (O = [
        ...g.current
      ][w.current]) === null || O === void 0 || O.focus(), d(D);
    }
  }), H = A(M);
  function X(D) {
    const O = K$(M, D);
    Y(D, O);
  }
  function U(D) {
    Y(D, w.current);
  }
  function q() {
    const D = H.current[w.current];
    M[w.current] !== D && f(M);
  }
  function Y(D, O, { commit: j } = {
    commit: !1
  }) {
    const R = X$(a), N = Z$(Math.round((D - r) / a) * a + r, R), V = dr(N, [
      r,
      o
    ]);
    W((Q = []) => {
      const oe = H$(Q, V, O);
      if (q$(oe, c * a)) {
        w.current = oe.indexOf(V);
        const ae = String(oe) !== String(Q);
        return ae && j && f(oe), ae ? oe : Q;
      } else
        return Q;
    });
  }
  return /* @__PURE__ */ h(k$, {
    scope: e.__scopeSlider,
    disabled: s,
    min: r,
    max: o,
    valueIndexToChangeRef: w,
    thumbs: g.current,
    values: M,
    orientation: i
  }, /* @__PURE__ */ h(wo.Provider, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ h(wo.Slot, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ h(L, C({
    "aria-disabled": s,
    "data-disabled": s ? "" : void 0
  }, v, {
    ref: $,
    onPointerDown: F(v.onPointerDown, () => {
      s || (H.current = M);
    }),
    min: r,
    max: o,
    inverted: p,
    onSlideStart: s ? void 0 : X,
    onSlideMove: s ? void 0 : U,
    onSlideEnd: s ? void 0 : q,
    onHomeKeyDown: () => !s && Y(r, 0, {
      commit: !0
    }),
    onEndKeyDown: () => !s && Y(o, M.length - 1, {
      commit: !0
    }),
    onStepKeyDown: ({ event: D, direction: O }) => {
      if (!s) {
        const N = wl.includes(D.key) || D.shiftKey && xl.includes(D.key) ? 10 : 1, V = w.current, Q = M[V], oe = a * N * O;
        Y(Q + oe, V, {
          commit: !0
        });
      }
    }
  })))), S && M.map(
    (D, O) => /* @__PURE__ */ h(Y$, {
      key: O,
      name: n ? n + (M.length > 1 ? "[]" : "") : void 0,
      value: D
    })
  ));
}), [El, Tl] = _l(An, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), I$ = /* @__PURE__ */ T((e, t) => {
  const { min: n, max: r, dir: o, inverted: a, onSlideStart: i, onSlideMove: s, onSlideEnd: c, onStepKeyDown: l, ...u } = e, [d, f] = G(null), p = re(
    t,
    (w) => f(w)
  ), v = A(), m = At(o), b = m === "ltr", $ = b && !a || !b && a;
  function g(w) {
    const E = v.current || d.getBoundingClientRect(), S = [
      0,
      E.width
    ], M = ba(S, $ ? [
      n,
      r
    ] : [
      r,
      n
    ]);
    return v.current = E, M(w - E.left);
  }
  return /* @__PURE__ */ h(El, {
    scope: e.__scopeSlider,
    startEdge: $ ? "left" : "right",
    endEdge: $ ? "right" : "left",
    direction: $ ? 1 : -1,
    size: "width"
  }, /* @__PURE__ */ h(Sl, C({
    dir: m,
    "data-orientation": "horizontal"
  }, u, {
    ref: p,
    style: {
      ...u.style,
      ["--radix-slider-thumb-transform"]: "translateX(-50%)"
    },
    onSlideStart: (w) => {
      const E = g(w.clientX);
      i == null || i(E);
    },
    onSlideMove: (w) => {
      const E = g(w.clientX);
      s == null || s(E);
    },
    onSlideEnd: () => {
      v.current = void 0, c == null || c();
    },
    onStepKeyDown: (w) => {
      const S = Cl[$ ? "from-left" : "from-right"].includes(w.key);
      l == null || l({
        event: w,
        direction: S ? -1 : 1
      });
    }
  })));
}), L$ = /* @__PURE__ */ T((e, t) => {
  const { min: n, max: r, inverted: o, onSlideStart: a, onSlideMove: i, onSlideEnd: s, onStepKeyDown: c, ...l } = e, u = A(null), d = re(t, u), f = A(), p = !o;
  function v(m) {
    const b = f.current || u.current.getBoundingClientRect(), $ = [
      0,
      b.height
    ], w = ba($, p ? [
      r,
      n
    ] : [
      n,
      r
    ]);
    return f.current = b, w(m - b.top);
  }
  return /* @__PURE__ */ h(El, {
    scope: e.__scopeSlider,
    startEdge: p ? "bottom" : "top",
    endEdge: p ? "top" : "bottom",
    size: "height",
    direction: p ? 1 : -1
  }, /* @__PURE__ */ h(Sl, C({
    "data-orientation": "vertical"
  }, l, {
    ref: d,
    style: {
      ...l.style,
      ["--radix-slider-thumb-transform"]: "translateY(50%)"
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
      const $ = Cl[p ? "from-bottom" : "from-top"].includes(m.key);
      c == null || c({
        event: m,
        direction: $ ? -1 : 1
      });
    }
  })));
}), Sl = /* @__PURE__ */ T((e, t) => {
  const { __scopeSlider: n, onSlideStart: r, onSlideMove: o, onSlideEnd: a, onHomeKeyDown: i, onEndKeyDown: s, onStepKeyDown: c, ...l } = e, u = Or(An, n);
  return /* @__PURE__ */ h(K.span, C({}, l, {
    ref: t,
    onKeyDown: F(e.onKeyDown, (d) => {
      d.key === "Home" ? (i(d), d.preventDefault()) : d.key === "End" ? (s(d), d.preventDefault()) : wl.concat(xl).includes(d.key) && (c(d), d.preventDefault());
    }),
    onPointerDown: F(e.onPointerDown, (d) => {
      const f = d.target;
      f.setPointerCapture(d.pointerId), d.preventDefault(), u.thumbs.has(f) ? f.focus() : r(d);
    }),
    onPointerMove: F(e.onPointerMove, (d) => {
      d.target.hasPointerCapture(d.pointerId) && o(d);
    }),
    onPointerUp: F(e.onPointerUp, (d) => {
      const f = d.target;
      f.hasPointerCapture(d.pointerId) && (f.releasePointerCapture(d.pointerId), a(d));
    })
  }));
}), F$ = "SliderTrack", W$ = /* @__PURE__ */ T((e, t) => {
  const { __scopeSlider: n, ...r } = e, o = Or(F$, n);
  return /* @__PURE__ */ h(K.span, C({
    "data-disabled": o.disabled ? "" : void 0,
    "data-orientation": o.orientation
  }, r, {
    ref: t
  }));
}), _i = "SliderRange", j$ = /* @__PURE__ */ T((e, t) => {
  const { __scopeSlider: n, ...r } = e, o = Or(_i, n), a = Tl(_i, n), i = A(null), s = re(t, i), c = o.values.length, l = o.values.map(
    (f) => Pl(f, o.min, o.max)
  ), u = c > 1 ? Math.min(...l) : 0, d = 100 - Math.max(...l);
  return /* @__PURE__ */ h(K.span, C({
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
}), Ei = "SliderThumb", V$ = /* @__PURE__ */ T((e, t) => {
  const n = N$(e.__scopeSlider), [r, o] = G(null), a = re(
    t,
    (s) => o(s)
  ), i = Qe(
    () => r ? n().findIndex(
      (s) => s.ref.current === r
    ) : -1,
    [
      n,
      r
    ]
  );
  return /* @__PURE__ */ h(B$, C({}, e, {
    ref: a,
    index: i
  }));
}), B$ = /* @__PURE__ */ T((e, t) => {
  const { __scopeSlider: n, index: r, ...o } = e, a = Or(Ei, n), i = Tl(Ei, n), [s, c] = G(null), l = re(
    t,
    (b) => c(b)
  ), u = Sn(s), d = a.values[r], f = d === void 0 ? 0 : Pl(d, a.min, a.max), p = U$(r, a.values.length), v = u == null ? void 0 : u[i.size], m = v ? G$(v, f, i.direction) : 0;
  return z(() => {
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
  }, /* @__PURE__ */ h(wo.ItemSlot, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ h(K.span, C({
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
    onFocus: F(e.onFocus, () => {
      a.valueIndexToChangeRef.current = r;
    })
  }))));
}), Y$ = (e) => {
  const { value: t, ...n } = e, r = A(null), o = On(t);
  return z(() => {
    const a = r.current, i = window.HTMLInputElement.prototype, c = Object.getOwnPropertyDescriptor(i, "value").set;
    if (o !== t && c) {
      const l = new Event("input", {
        bubbles: !0
      });
      c.call(a, t), a.dispatchEvent(l);
    }
  }, [
    o,
    t
  ]), /* @__PURE__ */ h("input", C({
    style: {
      display: "none"
    }
  }, n, {
    ref: r,
    defaultValue: t
  }));
};
function H$(e = [], t, n) {
  const r = [
    ...e
  ];
  return r[n] = t, r.sort(
    (o, a) => o - a
  );
}
function Pl(e, t, n) {
  const a = 100 / (n - t) * (e - t);
  return dr(a, [
    0,
    100
  ]);
}
function U$(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? [
    "Minimum",
    "Maximum"
  ][e] : void 0;
}
function K$(e, t) {
  if (e.length === 1)
    return 0;
  const n = e.map(
    (o) => Math.abs(o - t)
  ), r = Math.min(...n);
  return n.indexOf(r);
}
function G$(e, t, n) {
  const r = e / 2, a = ba([
    0,
    50
  ], [
    0,
    r
  ]);
  return (r - a(t) * n) * n;
}
function z$(e) {
  return e.slice(0, -1).map(
    (t, n) => e[n + 1] - t
  );
}
function q$(e, t) {
  if (t > 0) {
    const n = z$(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function ba(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function X$(e) {
  return (String(e).split(".")[1] || "").length;
}
function Z$(e, t) {
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
const Dl = A$, Q$ = W$, J$ = j$, Ti = V$, ey = P.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _.jsxs(
  Dl,
  {
    ref: n,
    className: k(
      "tw-reset ~group ~relative ~flex ~w-full ~cursor-pointer ~touch-none ~select-none ~items-center",
      "data-[disabled]:~cursor-not-allowed data-[disabled]:~opacity-50",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ _.jsx(Q$, { className: "~relative ~h-1.5 ~w-full ~grow ~overflow-hidden ~rounded-full ~bg-primary/20", children: /* @__PURE__ */ _.jsx(J$, { className: "~absolute ~h-full ~bg-primary" }) }),
      /* @__PURE__ */ _.jsx(
        Ti,
        {
          className: k(
            "~block ~h-4 ~w-4 ~rounded-full ~border ~border-primary/50 ~bg-background ~shadow ~transition-colors",
            "focus-visible:~outline-none focus-visible:~ring-1 focus-visible:~ring-ring"
          )
        }
      ),
      /* @__PURE__ */ _.jsx(
        Ti,
        {
          className: k(
            "~block ~h-4 ~w-4 ~rounded-full ~border ~border-primary/50 ~bg-background ~shadow ~transition-colors",
            "focus-visible:~outline-none focus-visible:~ring-1 focus-visible:~ring-ring"
          )
        }
      )
    ]
  }
));
ey.displayName = Dl.displayName;
const Ml = "Switch", [ty, px] = _e(Ml), [ny, ry] = ty(Ml), oy = /* @__PURE__ */ T((e, t) => {
  const { __scopeSwitch: n, name: r, checked: o, defaultChecked: a, required: i, disabled: s, value: c = "on", onCheckedChange: l, ...u } = e, [d, f] = G(null), p = re(
    t,
    (g) => f(g)
  ), v = A(!1), m = d ? !!d.closest("form") : !0, [b = !1, $] = Te({
    prop: o,
    defaultProp: a,
    onChange: l
  });
  return /* @__PURE__ */ h(ny, {
    scope: n,
    checked: b,
    disabled: s
  }, /* @__PURE__ */ h(K.button, C({
    type: "button",
    role: "switch",
    "aria-checked": b,
    "aria-required": i,
    "data-state": Ol(b),
    "data-disabled": s ? "" : void 0,
    disabled: s,
    value: c
  }, u, {
    ref: p,
    onClick: F(e.onClick, (g) => {
      $(
        (w) => !w
      ), m && (v.current = g.isPropagationStopped(), v.current || g.stopPropagation());
    })
  })), m && /* @__PURE__ */ h(sy, {
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
}), ay = "SwitchThumb", iy = /* @__PURE__ */ T((e, t) => {
  const { __scopeSwitch: n, ...r } = e, o = ry(ay, n);
  return /* @__PURE__ */ h(K.span, C({
    "data-state": Ol(o.checked),
    "data-disabled": o.disabled ? "" : void 0
  }, r, {
    ref: t
  }));
}), sy = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = A(null), i = On(n), s = Sn(t);
  return z(() => {
    const c = a.current, l = window.HTMLInputElement.prototype, d = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (i !== n && d) {
      const f = new Event("click", {
        bubbles: r
      });
      d.call(c, n), c.dispatchEvent(f);
    }
  }, [
    i,
    n,
    r
  ]), /* @__PURE__ */ h("input", C({
    type: "checkbox",
    "aria-hidden": !0,
    defaultChecked: n
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
function Ol(e) {
  return e ? "checked" : "unchecked";
}
const Nl = oy, cy = iy, ly = P.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _.jsx(
  Nl,
  {
    className: k(
      "tw-reset ~peer ~inline-flex ~h-4 ~w-8 ~shrink-0 ~cursor-pointer ~items-center ~rounded-full ~border-2 ~border-transparent ~shadow-sm ~transition-colors",
      "focus-visible:~outline-none focus-visible:~ring-2 focus-visible:~ring-ring focus-visible:~ring-offset-2 focus-visible:~ring-offset-background",
      "disabled:~cursor-not-allowed disabled:~opacity-50",
      "data-[state=checked]:~bg-primary data-[state=unchecked]:~bg-input",
      e
    ),
    ...t,
    ref: n,
    children: /* @__PURE__ */ _.jsx(
      cy,
      {
        className: k(
          "~pointer-events-none ~block ~h-3 ~w-3 ~rounded-full ~bg-background ~shadow-lg ~ring-0 ~transition-transform",
          "data-[state=checked]:~translate-x-4 data-[state=unchecked]:~translate-x-0"
        )
      }
    )
  }
));
ly.displayName = Nl.displayName;
const dy = P.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _.jsx("div", { className: "tw-reset ~w-full ~overflow-auto", children: /* @__PURE__ */ _.jsx(
  "table",
  {
    ref: n,
    className: k("~w-full ~caption-bottom", e),
    ...t
  }
) }));
dy.displayName = "Table";
const uy = P.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _.jsx("thead", { ref: n, className: k("[&_tr]:~border-b", e), ...t }));
uy.displayName = "TableHeader";
const fy = P.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _.jsx(
  "tbody",
  {
    ref: n,
    className: k("[&_tr:last-child]:~border-0", e),
    ...t
  }
));
fy.displayName = "TableBody";
const py = P.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _.jsx(
  "tfoot",
  {
    ref: n,
    className: k(
      "~bg-primary ~font-medium ~text-primary-foreground",
      e
    ),
    ...t
  }
));
py.displayName = "TableFooter";
const vy = P.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _.jsx(
  "tr",
  {
    ref: n,
    className: k(
      "~border-b ~transition-colors hover:~bg-muted/50 data-[state=selected]:~bg-muted",
      e
    ),
    ...t
  }
));
vy.displayName = "TableRow";
const my = P.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _.jsx(
  "th",
  {
    ref: n,
    className: k(
      "~h-9 ~px-2 ~text-left ~align-middle ~font-semibold ~text-muted-foreground",
      "[&:has([role=checkbox])]:~pr-0 [&>[role=checkbox]]:~translate-y-[2px]",
      e
    ),
    ...t
  }
));
my.displayName = "TableHead";
const by = P.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _.jsx(
  "td",
  {
    ref: n,
    className: k(
      "~p-2 ~align-middle [&:has([role=checkbox])]:~pr-0 [&>[role=checkbox]]:~translate-y-[2px]",
      e
    ),
    ...t
  }
));
by.displayName = "TableCell";
const hy = P.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _.jsx(
  "caption",
  {
    ref: n,
    className: k("~mt-4 ~text-muted-foreground", e),
    ...t
  }
));
hy.displayName = "TableCaption";
const Rl = "Tabs", [gy, vx] = _e(Rl, [
  rn
]), kl = rn(), [$y, ha] = gy(Rl), yy = /* @__PURE__ */ T((e, t) => {
  const { __scopeTabs: n, value: r, onValueChange: o, defaultValue: a, orientation: i = "horizontal", dir: s, activationMode: c = "automatic", ...l } = e, u = At(s), [d, f] = Te({
    prop: r,
    onChange: o,
    defaultProp: a
  });
  return /* @__PURE__ */ h($y, {
    scope: n,
    baseId: Oe(),
    value: d,
    onValueChange: f,
    orientation: i,
    dir: u,
    activationMode: c
  }, /* @__PURE__ */ h(K.div, C({
    dir: u,
    "data-orientation": i
  }, l, {
    ref: t
  })));
}), wy = "TabsList", xy = /* @__PURE__ */ T((e, t) => {
  const { __scopeTabs: n, loop: r = !0, ...o } = e, a = ha(wy, n), i = kl(n);
  return /* @__PURE__ */ h(Ko, C({
    asChild: !0
  }, i, {
    orientation: a.orientation,
    dir: a.dir,
    loop: r
  }), /* @__PURE__ */ h(K.div, C({
    role: "tablist",
    "aria-orientation": a.orientation
  }, o, {
    ref: t
  })));
}), Cy = "TabsTrigger", _y = /* @__PURE__ */ T((e, t) => {
  const { __scopeTabs: n, value: r, disabled: o = !1, ...a } = e, i = ha(Cy, n), s = kl(n), c = Al(i.baseId, r), l = Il(i.baseId, r), u = r === i.value;
  return /* @__PURE__ */ h(Go, C({
    asChild: !0
  }, s, {
    focusable: !o,
    active: u
  }), /* @__PURE__ */ h(K.button, C({
    type: "button",
    role: "tab",
    "aria-selected": u,
    "aria-controls": l,
    "data-state": u ? "active" : "inactive",
    "data-disabled": o ? "" : void 0,
    disabled: o,
    id: c
  }, a, {
    ref: t,
    onMouseDown: F(e.onMouseDown, (d) => {
      !o && d.button === 0 && d.ctrlKey === !1 ? i.onValueChange(r) : d.preventDefault();
    }),
    onKeyDown: F(e.onKeyDown, (d) => {
      [
        " ",
        "Enter"
      ].includes(d.key) && i.onValueChange(r);
    }),
    onFocus: F(e.onFocus, () => {
      const d = i.activationMode !== "manual";
      !u && !o && d && i.onValueChange(r);
    })
  })));
}), Ey = "TabsContent", Ty = /* @__PURE__ */ T((e, t) => {
  const { __scopeTabs: n, value: r, forceMount: o, children: a, ...i } = e, s = ha(Ey, n), c = Al(s.baseId, r), l = Il(s.baseId, r), u = r === s.value, d = A(u);
  return z(() => {
    const f = requestAnimationFrame(
      () => d.current = !1
    );
    return () => cancelAnimationFrame(f);
  }, []), /* @__PURE__ */ h(
    Ne,
    {
      present: o || u
    },
    ({ present: f }) => /* @__PURE__ */ h(K.div, C({
      "data-state": u ? "active" : "inactive",
      "data-orientation": s.orientation,
      role: "tabpanel",
      "aria-labelledby": c,
      hidden: !f,
      id: l,
      tabIndex: 0
    }, i, {
      ref: t,
      style: {
        ...e.style,
        animationDuration: d.current ? "0s" : void 0
      }
    }), f && a)
  );
});
function Al(e, t) {
  return `${e}-trigger-${t}`;
}
function Il(e, t) {
  return `${e}-content-${t}`;
}
const Sy = yy, Ll = xy, Fl = _y, Wl = Ty, Py = Et(
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
), Dy = Et(
  "~pointer-events-none ~absolute ~transition-all ~duration-300 ~ease-in-out",
  {
    variants: {
      variant: {
        default: "~z-10 ~h-full ~border-b-2 ~border-primary",
        pills: "~bottom-1 ~top-1 ~rounded-full ~bg-black"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), My = Et(
  [
    "caption-1 ~inline-flex ~min-h-0 ~items-center ~justify-center ~whitespace-nowrap ~px-3 ~py-1 ~ring-offset-background ~transition-all",
    "focus-visible:~outline-none focus-visible:~ring-2 focus-visible:~ring-ring focus-visible:~ring-offset-2",
    "disabled:~pointer-events-none disabled:~opacity-50",
    "data-[state=inactive]:~font-normal data-[state=active]:~text-foreground"
  ],
  {
    variants: {
      variant: {
        default: "~h-full ~border-b ~border-border",
        pills: "~z-10 ~rounded-full data-[state=active]:~text-white"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), ga = Ve({
  variant: "default"
}), mx = ({ variant: e = "default", ...t }) => /* @__PURE__ */ _.jsx(ga.Provider, { value: { variant: e }, children: /* @__PURE__ */ _.jsx(Sy, { ...t, className: "tw-reset" }) }), Oy = x.forwardRef(({ className: e, children: t, ...n }, r) => {
  const o = A(null), a = A(null), i = r || a, { variant: s } = We(ga), [c, l] = G(!0);
  return ur(() => {
    function u() {
      const f = i.current, p = f == null ? void 0 : f.querySelector('[data-state="active"]');
      if (p && o.current) {
        const v = p;
        o.current.style.transform = `translateX(${v.offsetLeft}px)`, o.current.style.width = `${v.offsetWidth}px`, l(!1);
      }
    }
    u();
    const d = new MutationObserver(u);
    return d.observe(i.current, {
      attributes: !0,
      subtree: !0
    }), () => d.disconnect();
  }, [i]), /* @__PURE__ */ _.jsxs(
    Ll,
    {
      ref: i,
      className: k(Py({ variant: s }), e),
      ...n,
      children: [
        /* @__PURE__ */ _.jsx(
          "div",
          {
            ref: o,
            className: k(
              Dy({ variant: s }),
              c ? "~transition-none" : ""
            )
          }
        ),
        t
      ]
    }
  );
});
Oy.displayName = Ll.displayName;
const Ny = x.forwardRef(({ className: e, ...t }, n) => {
  const { variant: r } = We(ga);
  return /* @__PURE__ */ _.jsx(
    Fl,
    {
      ref: n,
      className: k(My({ variant: r }), e),
      ...t
    }
  );
});
Ny.displayName = Fl.displayName;
const Ry = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _.jsx(
  Wl,
  {
    ref: n,
    className: k(
      "~mt-2 ~ring-offset-background",
      "focus-visible:~outline-none focus-visible:~ring-2 focus-visible:~ring-ring focus-visible:~ring-offset-2",
      e
    ),
    ...t
  }
));
Ry.displayName = Wl.displayName;
const ky = P.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ _.jsx(
    "textarea",
    {
      className: k(
        "tw-reset ~flex ~min-h-[60px] ~w-full ~rounded-md ~border ~border-border ~bg-transparent ~px-3 ~py-2 ~shadow-sm",
        "placeholder:~text-input",
        "focus-visible:~outline-none focus-visible:~ring-1 focus-visible:~ring-ring",
        "disabled:~cursor-not-allowed disabled:~opacity-50",
        e
      ),
      ref: n,
      ...t
    }
  )
);
ky.displayName = "Textarea";
const Ay = /* @__PURE__ */ T((e, t) => {
  const { pressed: n, defaultPressed: r = !1, onPressedChange: o, ...a } = e, [i = !1, s] = Te({
    prop: n,
    onChange: o,
    defaultProp: r
  });
  return /* @__PURE__ */ h(K.button, C({
    type: "button",
    "aria-pressed": i,
    "data-state": i ? "on" : "off",
    "data-disabled": e.disabled ? "" : void 0
  }, a, {
    ref: t,
    onClick: F(e.onClick, () => {
      e.disabled || s(!i);
    })
  }));
}), jl = Ay, Iy = Et(
  [
    "tw-reset ~inline-flex ~items-center ~justify-center ~rounded-md ~bg-transparent ~transition-colors",
    "hover:~bg-accent hover:~text-muted-foreground",
    "focus-visible:~outline-none focus-visible:~ring-1 focus-visible:~ring-ring",
    "disabled:~pointer-events-none disabled:~opacity-50",
    "data-[state=on]:~bg-secondary data-[state=on]:~text-accent-foreground"
  ],
  {
    variants: {
      variant: {
        default: "",
        outline: "~border ~border-input ~shadow-sm"
      },
      shape: {
        default: "",
        pill: "~rounded-full"
      },
      size: {
        default: "~h-9 ~px-3",
        sm: "~h-8 ~px-2",
        lg: "~h-10 ~px-3"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Ly = P.forwardRef(({ className: e, variant: t, size: n, shape: r, ...o }, a) => /* @__PURE__ */ _.jsx(
  jl,
  {
    ref: a,
    className: k(Iy({ variant: t, size: n, shape: r, className: e })),
    ...o
  }
));
Ly.displayName = jl.displayName;
const [Nr, bx] = _e("Tooltip", [
  xt
]), $a = xt(), Fy = "TooltipProvider", Wy = 700, xo = "tooltip.open", [jy, ya] = Nr(Fy), Vy = (e) => {
  const { __scopeTooltip: t, delayDuration: n = Wy, skipDelayDuration: r = 300, disableHoverableContent: o = !1, children: a } = e, [i, s] = G(!0), c = A(!1), l = A(0);
  return z(() => {
    const u = l.current;
    return () => window.clearTimeout(u);
  }, []), /* @__PURE__ */ h(jy, {
    scope: t,
    isOpenDelayed: i,
    delayDuration: n,
    onOpen: te(() => {
      window.clearTimeout(l.current), s(!1);
    }, []),
    onClose: te(() => {
      window.clearTimeout(l.current), l.current = window.setTimeout(
        () => s(!0),
        r
      );
    }, [
      r
    ]),
    isPointerInTransitRef: c,
    onPointerInTransitChange: te((u) => {
      c.current = u;
    }, []),
    disableHoverableContent: o
  }, a);
}, wa = "Tooltip", [By, Rr] = Nr(wa), Yy = (e) => {
  const { __scopeTooltip: t, children: n, open: r, defaultOpen: o = !1, onOpenChange: a, disableHoverableContent: i, delayDuration: s } = e, c = ya(wa, e.__scopeTooltip), l = $a(t), [u, d] = G(null), f = Oe(), p = A(0), v = i ?? c.disableHoverableContent, m = s ?? c.delayDuration, b = A(!1), [$ = !1, g] = Te({
    prop: r,
    defaultProp: o,
    onChange: (M) => {
      M ? (c.onOpen(), document.dispatchEvent(new CustomEvent(xo))) : c.onClose(), a == null || a(M);
    }
  }), w = Qe(() => $ ? b.current ? "delayed-open" : "instant-open" : "closed", [
    $
  ]), E = te(() => {
    window.clearTimeout(p.current), b.current = !1, g(!0);
  }, [
    g
  ]), S = te(() => {
    window.clearTimeout(p.current), g(!1);
  }, [
    g
  ]), L = te(() => {
    window.clearTimeout(p.current), p.current = window.setTimeout(() => {
      b.current = !0, g(!0);
    }, m);
  }, [
    m,
    g
  ]);
  return z(() => () => window.clearTimeout(p.current), []), /* @__PURE__ */ h(Pn, l, /* @__PURE__ */ h(By, {
    scope: t,
    contentId: f,
    open: $,
    stateAttribute: w,
    trigger: u,
    onTriggerChange: d,
    onTriggerEnter: te(() => {
      c.isOpenDelayed ? L() : E();
    }, [
      c.isOpenDelayed,
      L,
      E
    ]),
    onTriggerLeave: te(() => {
      v ? S() : window.clearTimeout(p.current);
    }, [
      S,
      v
    ]),
    onOpen: E,
    onClose: S,
    disableHoverableContent: v
  }, n));
}, Si = "TooltipTrigger", Hy = /* @__PURE__ */ T((e, t) => {
  const { __scopeTooltip: n, ...r } = e, o = Rr(Si, n), a = ya(Si, n), i = $a(n), s = A(null), c = re(t, s, o.onTriggerChange), l = A(!1), u = A(!1), d = te(
    () => l.current = !1,
    []
  );
  return z(() => () => document.removeEventListener("pointerup", d), [
    d
  ]), /* @__PURE__ */ h(yr, C({
    asChild: !0
  }, i), /* @__PURE__ */ h(K.button, C({
    // We purposefully avoid adding `type=button` here because tooltip triggers are also
    // commonly anchors and the anchor `type` attribute signifies MIME type.
    "aria-describedby": o.open ? o.contentId : void 0,
    "data-state": o.stateAttribute
  }, r, {
    ref: c,
    onPointerMove: F(e.onPointerMove, (f) => {
      f.pointerType !== "touch" && !u.current && !a.isPointerInTransitRef.current && (o.onTriggerEnter(), u.current = !0);
    }),
    onPointerLeave: F(e.onPointerLeave, () => {
      o.onTriggerLeave(), u.current = !1;
    }),
    onPointerDown: F(e.onPointerDown, () => {
      l.current = !0, document.addEventListener("pointerup", d, {
        once: !0
      });
    }),
    onFocus: F(e.onFocus, () => {
      l.current || o.onOpen();
    }),
    onBlur: F(e.onBlur, o.onClose),
    onClick: F(e.onClick, o.onClose)
  })));
}), Uy = "TooltipPortal", [hx, Ky] = Nr(Uy, {
  forceMount: void 0
}), En = "TooltipContent", Gy = /* @__PURE__ */ T((e, t) => {
  const n = Ky(En, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...a } = e, i = Rr(En, e.__scopeTooltip);
  return /* @__PURE__ */ h(Ne, {
    present: r || i.open
  }, i.disableHoverableContent ? /* @__PURE__ */ h(Vl, C({
    side: o
  }, a, {
    ref: t
  })) : /* @__PURE__ */ h(zy, C({
    side: o
  }, a, {
    ref: t
  })));
}), zy = /* @__PURE__ */ T((e, t) => {
  const n = Rr(En, e.__scopeTooltip), r = ya(En, e.__scopeTooltip), o = A(null), a = re(t, o), [i, s] = G(null), { trigger: c, onClose: l } = n, u = o.current, { onPointerInTransitChange: d } = r, f = te(() => {
    s(null), d(!1);
  }, [
    d
  ]), p = te((v, m) => {
    const b = v.currentTarget, $ = {
      x: v.clientX,
      y: v.clientY
    }, g = Xy($, b.getBoundingClientRect()), w = Zy($, g), E = Qy(m.getBoundingClientRect()), S = ew([
      ...w,
      ...E
    ]);
    s(S), d(!0);
  }, [
    d
  ]);
  return z(() => () => f(), [
    f
  ]), z(() => {
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
  ]), z(() => {
    if (i) {
      const v = (m) => {
        const b = m.target, $ = {
          x: m.clientX,
          y: m.clientY
        }, g = (c == null ? void 0 : c.contains(b)) || (u == null ? void 0 : u.contains(b)), w = !Jy($, i);
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
  ]), /* @__PURE__ */ h(Vl, C({}, e, {
    ref: a
  }));
}), [qy, gx] = Nr(wa, {
  isInside: !1
}), Vl = /* @__PURE__ */ T((e, t) => {
  const { __scopeTooltip: n, children: r, "aria-label": o, onEscapeKeyDown: a, onPointerDownOutside: i, ...s } = e, c = Rr(En, n), l = $a(n), { onClose: u } = c;
  return z(() => (document.addEventListener(xo, u), () => document.removeEventListener(xo, u)), [
    u
  ]), z(() => {
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
  ]), /* @__PURE__ */ h(en, {
    asChild: !0,
    disableOutsidePointerEvents: !1,
    onEscapeKeyDown: a,
    onPointerDownOutside: i,
    onFocusOutside: (d) => d.preventDefault(),
    onDismiss: u
  }, /* @__PURE__ */ h(wr, C({
    "data-state": c.stateAttribute
  }, l, s, {
    ref: t,
    style: {
      ...s.style,
      "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
      "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
      "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }), /* @__PURE__ */ h(So, null, r), /* @__PURE__ */ h(qy, {
    scope: n,
    isInside: !0
  }, /* @__PURE__ */ h(L1, {
    id: c.contentId,
    role: "tooltip"
  }, o || r))));
});
function Xy(e, t) {
  const n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), o = Math.abs(t.right - e.x), a = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, a)) {
    case a:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function Zy(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push({
        x: e.x - n,
        y: e.y + n
      }, {
        x: e.x + n,
        y: e.y + n
      });
      break;
    case "bottom":
      r.push({
        x: e.x - n,
        y: e.y - n
      }, {
        x: e.x + n,
        y: e.y - n
      });
      break;
    case "left":
      r.push({
        x: e.x + n,
        y: e.y - n
      }, {
        x: e.x + n,
        y: e.y + n
      });
      break;
    case "right":
      r.push({
        x: e.x - n,
        y: e.y - n
      }, {
        x: e.x - n,
        y: e.y + n
      });
      break;
  }
  return r;
}
function Qy(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    {
      x: o,
      y: t
    },
    {
      x: n,
      y: t
    },
    {
      x: n,
      y: r
    },
    {
      x: o,
      y: r
    }
  ];
}
function Jy(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, i = t.length - 1; a < t.length; i = a++) {
    const s = t[a].x, c = t[a].y, l = t[i].x, u = t[i].y;
    c > r != u > r && n < (l - s) * (r - c) / (u - c) + s && (o = !o);
  }
  return o;
}
function ew(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), tw(t);
}
function tw(e) {
  if (e.length <= 1)
    return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
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
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
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
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
const nw = Vy, rw = Yy, ow = Hy, Bl = Gy, $x = nw, yx = rw, wx = P.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _.jsx(
  ow,
  {
    ref: n,
    className: k(
      "tw-reset disabled:~cursor-not-allowed disabled:~opacity-50",
      e
    ),
    ...t
  }
)), aw = P.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ _.jsx(
  Bl,
  {
    ref: r,
    sideOffset: t,
    className: k(
      "tw-reset body-x-small ~z-50 ~overflow-hidden ~rounded-md ~bg-accent ~px-3 ~py-1.5 ~text-accent-foreground ~animate-in ~fade-in-0 ~zoom-in-95",
      "data-[state=closed]:~animate-out data-[state=closed]:~fade-out-0 data-[state=closed]:~zoom-out-95",
      "data-[side=bottom]:~slide-in-from-top-2 data-[side=left]:~slide-in-from-right-2 data-[side=right]:~slide-in-from-left-2 data-[side=top]:~slide-in-from-bottom-2",
      e
    ),
    ...n
  }
));
aw.displayName = Bl.displayName;
const Yl = "ToastProvider", [xa, iw, sw] = tn("Toast"), [Hl, xx] = _e("Toast", [
  sw
]), [cw, kr] = Hl(Yl), Ul = (e) => {
  const { __scopeToast: t, label: n = "Notification", duration: r = 5e3, swipeDirection: o = "right", swipeThreshold: a = 50, children: i } = e, [s, c] = G(null), [l, u] = G(0), d = A(!1), f = A(!1);
  return /* @__PURE__ */ h(xa.Provider, {
    scope: t
  }, /* @__PURE__ */ h(cw, {
    scope: t,
    label: n,
    duration: r,
    swipeDirection: o,
    swipeThreshold: a,
    toastCount: l,
    viewport: s,
    onViewportChange: c,
    onToastAdd: te(
      () => u(
        (p) => p + 1
      ),
      []
    ),
    onToastRemove: te(
      () => u(
        (p) => p - 1
      ),
      []
    ),
    isFocusedToastEscapeKeyDownRef: d,
    isClosePausedRef: f
  }, i));
};
Ul.propTypes = {
  label(e) {
    if (e.label && typeof e.label == "string" && !e.label.trim()) {
      const t = `Invalid prop \`label\` supplied to \`${Yl}\`. Expected non-empty \`string\`.`;
      return new Error(t);
    }
    return null;
  }
};
const lw = "ToastViewport", dw = [
  "F8"
], Co = "toast.viewportPause", _o = "toast.viewportResume", uw = /* @__PURE__ */ T((e, t) => {
  const { __scopeToast: n, hotkey: r = dw, label: o = "Notifications ({hotkey})", ...a } = e, i = kr(lw, n), s = iw(n), c = A(null), l = A(null), u = A(null), d = A(null), f = re(t, d, i.onViewportChange), p = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), v = i.toastCount > 0;
  z(() => {
    const b = ($) => {
      var g;
      r.every(
        (E) => $[E] || $.code === E
      ) && ((g = d.current) === null || g === void 0 || g.focus());
    };
    return document.addEventListener("keydown", b), () => document.removeEventListener("keydown", b);
  }, [
    r
  ]), z(() => {
    const b = c.current, $ = d.current;
    if (v && b && $) {
      const g = () => {
        if (!i.isClosePausedRef.current) {
          const L = new CustomEvent(Co);
          $.dispatchEvent(L), i.isClosePausedRef.current = !0;
        }
      }, w = () => {
        if (i.isClosePausedRef.current) {
          const L = new CustomEvent(_o);
          $.dispatchEvent(L), i.isClosePausedRef.current = !1;
        }
      }, E = (L) => {
        !b.contains(L.relatedTarget) && w();
      }, S = () => {
        b.contains(document.activeElement) || w();
      };
      return b.addEventListener("focusin", g), b.addEventListener("focusout", E), b.addEventListener("pointermove", g), b.addEventListener("pointerleave", S), window.addEventListener("blur", g), window.addEventListener("focus", w), () => {
        b.removeEventListener("focusin", g), b.removeEventListener("focusout", E), b.removeEventListener("pointermove", g), b.removeEventListener("pointerleave", S), window.removeEventListener("blur", g), window.removeEventListener("focus", w);
      };
    }
  }, [
    v,
    i.isClosePausedRef
  ]);
  const m = te(({ tabbingDirection: b }) => {
    const g = s().map((w) => {
      const E = w.ref.current, S = [
        E,
        ...Sw(E)
      ];
      return b === "forwards" ? S : S.reverse();
    });
    return (b === "forwards" ? g.reverse() : g).flat();
  }, [
    s
  ]);
  return z(() => {
    const b = d.current;
    if (b) {
      const $ = (g) => {
        const w = g.altKey || g.ctrlKey || g.metaKey;
        if (g.key === "Tab" && !w) {
          const W = document.activeElement, H = g.shiftKey;
          if (g.target === b && H) {
            var S;
            (S = l.current) === null || S === void 0 || S.focus();
            return;
          }
          const q = m({
            tabbingDirection: H ? "backwards" : "forwards"
          }), Y = q.findIndex(
            (D) => D === W
          );
          if (to(q.slice(Y + 1)))
            g.preventDefault();
          else {
            var L, M;
            H ? (L = l.current) === null || L === void 0 || L.focus() : (M = u.current) === null || M === void 0 || M.focus();
          }
        }
      };
      return b.addEventListener("keydown", $), () => b.removeEventListener("keydown", $);
    }
  }, [
    s,
    m
  ]), /* @__PURE__ */ h(zd, {
    ref: c,
    role: "region",
    "aria-label": o.replace("{hotkey}", p),
    tabIndex: -1,
    style: {
      pointerEvents: v ? void 0 : "none"
    }
  }, v && /* @__PURE__ */ h(Pi, {
    ref: l,
    onFocusFromOutsideViewport: () => {
      const b = m({
        tabbingDirection: "forwards"
      });
      to(b);
    }
  }), /* @__PURE__ */ h(xa.Slot, {
    scope: n
  }, /* @__PURE__ */ h(K.ol, C({
    tabIndex: -1
  }, a, {
    ref: f
  }))), v && /* @__PURE__ */ h(Pi, {
    ref: u,
    onFocusFromOutsideViewport: () => {
      const b = m({
        tabbingDirection: "backwards"
      });
      to(b);
    }
  }));
}), fw = "ToastFocusProxy", Pi = /* @__PURE__ */ T((e, t) => {
  const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e, a = kr(fw, n);
  return /* @__PURE__ */ h(Sr, C({
    "aria-hidden": !0,
    tabIndex: 0
  }, o, {
    ref: t,
    style: {
      position: "fixed"
    },
    onFocus: (i) => {
      var s;
      const c = i.relatedTarget;
      !((s = a.viewport) !== null && s !== void 0 && s.contains(c)) && r();
    }
  }));
}), Ar = "Toast", pw = "toast.swipeStart", vw = "toast.swipeMove", mw = "toast.swipeCancel", bw = "toast.swipeEnd", hw = /* @__PURE__ */ T((e, t) => {
  const { forceMount: n, open: r, defaultOpen: o, onOpenChange: a, ...i } = e, [s = !0, c] = Te({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ h(Ne, {
    present: n || s
  }, /* @__PURE__ */ h(Kl, C({
    open: s
  }, i, {
    ref: t,
    onClose: () => c(!1),
    onPause: Ee(e.onPause),
    onResume: Ee(e.onResume),
    onSwipeStart: F(e.onSwipeStart, (l) => {
      l.currentTarget.setAttribute("data-swipe", "start");
    }),
    onSwipeMove: F(e.onSwipeMove, (l) => {
      const { x: u, y: d } = l.detail.delta;
      l.currentTarget.setAttribute("data-swipe", "move"), l.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${u}px`), l.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${d}px`);
    }),
    onSwipeCancel: F(e.onSwipeCancel, (l) => {
      l.currentTarget.setAttribute("data-swipe", "cancel"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), l.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), l.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
    }),
    onSwipeEnd: F(e.onSwipeEnd, (l) => {
      const { x: u, y: d } = l.detail.delta;
      l.currentTarget.setAttribute("data-swipe", "end"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), l.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${u}px`), l.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${d}px`), c(!1);
    })
  })));
}), [gw, $w] = Hl(Ar, {
  onClose() {
  }
}), Kl = /* @__PURE__ */ T((e, t) => {
  const { __scopeToast: n, type: r = "foreground", duration: o, open: a, onClose: i, onEscapeKeyDown: s, onPause: c, onResume: l, onSwipeStart: u, onSwipeMove: d, onSwipeCancel: f, onSwipeEnd: p, ...v } = e, m = kr(Ar, n), [b, $] = G(null), g = re(
    t,
    (D) => $(D)
  ), w = A(null), E = A(null), S = o || m.duration, L = A(0), M = A(S), W = A(0), { onToastAdd: H, onToastRemove: X } = m, U = Ee(() => {
    var D;
    (b == null ? void 0 : b.contains(document.activeElement)) && ((D = m.viewport) === null || D === void 0 || D.focus()), i();
  }), q = te((D) => {
    !D || D === 1 / 0 || (window.clearTimeout(W.current), L.current = (/* @__PURE__ */ new Date()).getTime(), W.current = window.setTimeout(U, D));
  }, [
    U
  ]);
  z(() => {
    const D = m.viewport;
    if (D) {
      const O = () => {
        q(M.current), l == null || l();
      }, j = () => {
        const R = (/* @__PURE__ */ new Date()).getTime() - L.current;
        M.current = M.current - R, window.clearTimeout(W.current), c == null || c();
      };
      return D.addEventListener(Co, j), D.addEventListener(_o, O), () => {
        D.removeEventListener(Co, j), D.removeEventListener(_o, O);
      };
    }
  }, [
    m.viewport,
    S,
    c,
    l,
    q
  ]), z(() => {
    a && !m.isClosePausedRef.current && q(S);
  }, [
    a,
    S,
    m.isClosePausedRef,
    q
  ]), z(() => (H(), () => X()), [
    H,
    X
  ]);
  const Y = Qe(() => b ? Xl(b) : null, [
    b
  ]);
  return m.viewport ? /* @__PURE__ */ h(Rt, null, Y && /* @__PURE__ */ h(yw, {
    __scopeToast: n,
    role: "status",
    "aria-live": r === "foreground" ? "assertive" : "polite",
    "aria-atomic": !0
  }, Y), /* @__PURE__ */ h(gw, {
    scope: n,
    onClose: U
  }, /* @__PURE__ */ To(/* @__PURE__ */ h(xa.ItemSlot, {
    scope: n
  }, /* @__PURE__ */ h(Gd, {
    asChild: !0,
    onEscapeKeyDown: F(s, () => {
      m.isFocusedToastEscapeKeyDownRef.current || U(), m.isFocusedToastEscapeKeyDownRef.current = !1;
    })
  }, /* @__PURE__ */ h(K.li, C({
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
    onKeyDown: F(e.onKeyDown, (D) => {
      D.key === "Escape" && (s == null || s(D.nativeEvent), D.nativeEvent.defaultPrevented || (m.isFocusedToastEscapeKeyDownRef.current = !0, U()));
    }),
    onPointerDown: F(e.onPointerDown, (D) => {
      D.button === 0 && (w.current = {
        x: D.clientX,
        y: D.clientY
      });
    }),
    onPointerMove: F(e.onPointerMove, (D) => {
      if (!w.current)
        return;
      const O = D.clientX - w.current.x, j = D.clientY - w.current.y, R = !!E.current, N = [
        "left",
        "right"
      ].includes(m.swipeDirection), V = [
        "left",
        "up"
      ].includes(m.swipeDirection) ? Math.min : Math.max, Q = N ? V(0, O) : 0, oe = N ? 0 : V(0, j), ae = D.pointerType === "touch" ? 10 : 2, $e = {
        x: Q,
        y: oe
      }, xe = {
        originalEvent: D,
        delta: $e
      };
      R ? (E.current = $e, Kn(vw, d, xe, {
        discrete: !1
      })) : Di($e, m.swipeDirection, ae) ? (E.current = $e, Kn(pw, u, xe, {
        discrete: !1
      }), D.target.setPointerCapture(D.pointerId)) : (Math.abs(O) > ae || Math.abs(j) > ae) && (w.current = null);
    }),
    onPointerUp: F(e.onPointerUp, (D) => {
      const O = E.current, j = D.target;
      if (j.hasPointerCapture(D.pointerId) && j.releasePointerCapture(D.pointerId), E.current = null, w.current = null, O) {
        const R = D.currentTarget, N = {
          originalEvent: D,
          delta: O
        };
        Di(O, m.swipeDirection, m.swipeThreshold) ? Kn(bw, p, N, {
          discrete: !0
        }) : Kn(mw, f, N, {
          discrete: !0
        }), R.addEventListener(
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
Kl.propTypes = {
  type(e) {
    if (e.type && ![
      "foreground",
      "background"
    ].includes(e.type)) {
      const t = `Invalid prop \`type\` supplied to \`${Ar}\`. Expected \`foreground | background\`.`;
      return new Error(t);
    }
    return null;
  }
};
const yw = (e) => {
  const { __scopeToast: t, children: n, ...r } = e, o = kr(Ar, t), [a, i] = G(!1), [s, c] = G(!1);
  return Ew(
    () => i(!0)
  ), z(() => {
    const l = window.setTimeout(
      () => c(!0),
      1e3
    );
    return () => window.clearTimeout(l);
  }, []), s ? null : /* @__PURE__ */ h(Tn, {
    asChild: !0
  }, /* @__PURE__ */ h(Sr, r, a && /* @__PURE__ */ h(Rt, null, o.label, " ", n)));
}, ww = /* @__PURE__ */ T((e, t) => {
  const { __scopeToast: n, ...r } = e;
  return /* @__PURE__ */ h(K.div, C({}, r, {
    ref: t
  }));
}), xw = /* @__PURE__ */ T((e, t) => {
  const { __scopeToast: n, ...r } = e;
  return /* @__PURE__ */ h(K.div, C({}, r, {
    ref: t
  }));
}), Cw = "ToastAction", Gl = /* @__PURE__ */ T((e, t) => {
  const { altText: n, ...r } = e;
  return n ? /* @__PURE__ */ h(ql, {
    altText: n,
    asChild: !0
  }, /* @__PURE__ */ h(zl, C({}, r, {
    ref: t
  }))) : null;
});
Gl.propTypes = {
  altText(e) {
    return e.altText ? null : new Error(`Missing prop \`altText\` expected on \`${Cw}\``);
  }
};
const _w = "ToastClose", zl = /* @__PURE__ */ T((e, t) => {
  const { __scopeToast: n, ...r } = e, o = $w(_w, n);
  return /* @__PURE__ */ h(ql, {
    asChild: !0
  }, /* @__PURE__ */ h(K.button, C({
    type: "button"
  }, r, {
    ref: t,
    onClick: F(e.onClick, o.onClose)
  })));
}), ql = /* @__PURE__ */ T((e, t) => {
  const { __scopeToast: n, altText: r, ...o } = e;
  return /* @__PURE__ */ h(K.div, C({
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": r || void 0
  }, o, {
    ref: t
  }));
});
function Xl(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((r) => {
    if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), Tw(r)) {
      const o = r.ariaHidden || r.hidden || r.style.display === "none", a = r.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (a) {
          const i = r.dataset.radixToastAnnounceAlt;
          i && t.push(i);
        } else
          t.push(...Xl(r));
    }
  }), t;
}
function Kn(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget, a = new CustomEvent(e, {
    bubbles: !0,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? Po(o, a) : o.dispatchEvent(a);
}
const Di = (e, t, n = 0) => {
  const r = Math.abs(e.x), o = Math.abs(e.y), a = r > o;
  return t === "left" || t === "right" ? a && r > n : !a && o > n;
};
function Ew(e = () => {
}) {
  const t = Ee(e);
  Fe(() => {
    let n = 0, r = 0;
    return n = window.requestAnimationFrame(
      () => r = window.requestAnimationFrame(t)
    ), () => {
      window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
    };
  }, [
    t
  ]);
}
function Tw(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function Sw(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
function to(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
const Pw = Ul, Zl = uw, Ql = hw, Jl = ww, ed = xw, td = Gl, nd = zl, Dw = Pw, rd = P.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _.jsx(
  Zl,
  {
    ref: n,
    className: k(
      "tw-reset ~fixed ~top-0 ~z-[100] ~flex ~max-h-screen ~w-full ~flex-col-reverse ~p-4 sm:~bottom-0 sm:~right-0 sm:~top-auto sm:~flex-col md:~max-w-[420px]",
      e
    ),
    ...t
  }
));
rd.displayName = Zl.displayName;
const Mw = Et(
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
), od = P.forwardRef(({ className: e, variant: t, ...n }, r) => /* @__PURE__ */ _.jsx(
  Ql,
  {
    ref: r,
    className: k(Mw({ variant: t }), e),
    ...n
  }
));
od.displayName = Ql.displayName;
const Ow = P.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _.jsx(
  td,
  {
    ref: n,
    className: k(
      "body-small ~inline-flex ~h-8 ~shrink-0 ~items-center ~justify-center ~rounded-md ~border ~bg-transparent ~px-3 ~transition-colors",
      "hover:~bg-secondary",
      "focus:~outline-none focus:~ring-1 focus:~ring-ring",
      "disabled:~pointer-events-none disabled:~opacity-50",
      "group-[.destructive]:~border-muted/40",
      "group-[.destructive]:hover:~border-destructive/30 group-[.destructive]:hover:~bg-destructive group-[.destructive]:hover:~text-destructive-foreground",
      "group-[.destructive]:focus:~ring-destructive",
      e
    ),
    ...t
  }
));
Ow.displayName = td.displayName;
const ad = P.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _.jsx(
  nd,
  {
    ref: n,
    className: k(
      "~absolute ~right-1 ~top-1 ~rounded-md ~p-1 ~text-foreground/50 ~opacity-0 ~transition-opacity",
      "hover:~text-foreground group-hover:~opacity-100",
      "focus:~opacity-100 focus:~outline-none focus:~ring-1",
      "group-[.destructive]:~text-red-300 group-[.destructive]:hover:~text-red-50",
      "group-[.destructive]:focus:~ring-red-400 group-[.destructive]:focus:~ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: /* @__PURE__ */ _.jsx(gs, { className: "~h-4 ~w-4" })
  }
));
ad.displayName = nd.displayName;
const id = P.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _.jsx(
  Jl,
  {
    ref: n,
    className: k("body-large [&+div]:~text-xs", e),
    ...t
  }
));
id.displayName = Jl.displayName;
const sd = P.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _.jsx(
  ed,
  {
    ref: n,
    className: k("~opacity-90", e),
    ...t
  }
));
sd.displayName = ed.displayName;
const Nw = 1, Rw = 1e6;
let no = 0;
function kw() {
  return no = (no + 1) % Number.MAX_VALUE, no.toString();
}
const ro = /* @__PURE__ */ new Map(), Mi = (e) => {
  if (ro.has(e))
    return;
  const t = setTimeout(() => {
    ro.delete(e), mn({
      type: "REMOVE_TOAST",
      toastId: e
    });
  }, Rw);
  ro.set(e, t);
}, Aw = (e, t) => {
  switch (t.type) {
    case "ADD_TOAST":
      return {
        ...e,
        toasts: [t.toast, ...e.toasts].slice(0, Nw)
      };
    case "UPDATE_TOAST":
      return {
        ...e,
        toasts: e.toasts.map(
          (n) => n.id === t.toast.id ? { ...n, ...t.toast } : n
        )
      };
    case "DISMISS_TOAST": {
      const { toastId: n } = t;
      return n ? Mi(n) : e.toasts.forEach((r) => {
        Mi(r.id);
      }), {
        ...e,
        toasts: e.toasts.map(
          (r) => r.id === n || n === void 0 ? {
            ...r,
            open: !1
          } : r
        )
      };
    }
    case "REMOVE_TOAST":
      return t.toastId === void 0 ? {
        ...e,
        toasts: []
      } : {
        ...e,
        toasts: e.toasts.filter((n) => n.id !== t.toastId)
      };
  }
}, Zn = [];
let Qn = { toasts: [] };
function mn(e) {
  Qn = Aw(Qn, e), Zn.forEach((t) => {
    t(Qn);
  });
}
function Iw({ ...e }) {
  const t = kw(), n = (o) => mn({
    type: "UPDATE_TOAST",
    toast: { ...o, id: t }
  }), r = () => mn({ type: "DISMISS_TOAST", toastId: t });
  return mn({
    type: "ADD_TOAST",
    toast: {
      ...e,
      id: t,
      open: !0,
      onOpenChange: (o) => {
        o || r();
      }
    }
  }), {
    id: t,
    dismiss: r,
    update: n
  };
}
function Lw() {
  const [e, t] = P.useState(Qn);
  return P.useEffect(() => (Zn.push(t), () => {
    const n = Zn.indexOf(t);
    n > -1 && Zn.splice(n, 1);
  }), [e]), {
    ...e,
    toast: Iw,
    dismiss: (n) => mn({ type: "DISMISS_TOAST", toastId: n })
  };
}
function Cx() {
  const { toasts: e } = Lw();
  return /* @__PURE__ */ _.jsxs(Dw, { children: [
    e.map(function({ id: t, title: n, description: r, action: o, ...a }) {
      return /* @__PURE__ */ _.jsxs(od, { ...a, children: [
        /* @__PURE__ */ _.jsxs("div", { className: "~grid ~gap-1", children: [
          n && /* @__PURE__ */ _.jsx(id, { children: n }),
          r && /* @__PURE__ */ _.jsx(sd, { children: r })
        ] }),
        o,
        /* @__PURE__ */ _.jsx(ad, {})
      ] }, t);
    }),
    /* @__PURE__ */ _.jsx(rd, {})
  ] });
}
export {
  nx as Accordion,
  $h as AccordionContent,
  hh as AccordionItem,
  gh as AccordionTrigger,
  Bw as AlertDialog,
  ap as AlertDialogAction,
  ip as AlertDialogCancel,
  ep as AlertDialogContent,
  op as AlertDialogDescription,
  np as AlertDialogFooter,
  tp as AlertDialogHeader,
  rp as AlertDialogTitle,
  Yw as AlertDialogTrigger,
  Ph as Avatar,
  Mh as AvatarFallback,
  Dh as AvatarImage,
  ox as Badge,
  ra as Button,
  ua as Calendar,
  l1 as Card,
  p1 as CardContent,
  f1 as CardDescription,
  v1 as CardFooter,
  d1 as CardHeader,
  u1 as CardTitle,
  B0 as Checkbox,
  Hw as DatePicker,
  ax as Dialog,
  m1 as DialogContent,
  $1 as DialogDescription,
  h1 as DialogFooter,
  b1 as DialogHeader,
  g1 as DialogTitle,
  ix as DialogTrigger,
  Gw as DropdownMenu,
  u0 as DropdownMenuCheckboxItem,
  l0 as DropdownMenuContent,
  zw as DropdownMenuGroup,
  d0 as DropdownMenuItem,
  p0 as DropdownMenuLabel,
  qw as DropdownMenuPortal,
  Zw as DropdownMenuRadioGroup,
  f0 as DropdownMenuRadioItem,
  v0 as DropdownMenuSeparator,
  m0 as DropdownMenuShortcut,
  Xw as DropdownMenuSub,
  c0 as DropdownMenuSubContent,
  s0 as DropdownMenuSubTrigger,
  Qw as DropdownMenuTrigger,
  y1 as Input,
  C1 as Label,
  il as Popover,
  pa as PopoverContent,
  sl as PopoverTrigger,
  N0 as RadioGroup,
  R0 as RadioGroupItem,
  lx as Select,
  E$ as SelectContent,
  dx as SelectGroup,
  S$ as SelectItem,
  T$ as SelectLabel,
  P$ as SelectSeparator,
  _$ as SelectTrigger,
  ux as SelectValue,
  O$ as Separator,
  ey as Slider,
  ly as Switch,
  dy as Table,
  fy as TableBody,
  hy as TableCaption,
  by as TableCell,
  py as TableFooter,
  my as TableHead,
  uy as TableHeader,
  vy as TableRow,
  mx as Tabs,
  Ry as TabsContent,
  Oy as TabsList,
  Ny as TabsTrigger,
  ky as Textarea,
  od as Toast,
  Ow as ToastAction,
  ad as ToastClose,
  sd as ToastDescription,
  Dw as ToastProvider,
  id as ToastTitle,
  rd as ToastViewport,
  Cx as Toaster,
  Ly as Toggle,
  yx as Tooltip,
  aw as TooltipContent,
  $x as TooltipProvider,
  wx as TooltipTrigger,
  Oh as badgeVariants,
  Cn as buttonVariants,
  Aw as reducer,
  Iw as toast,
  Iy as toggleVariants,
  Lw as useToast
};
