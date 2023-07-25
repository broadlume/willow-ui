import * as D from "react";
import w, { createContext as We, useMemo as Xe, createElement as h, useContext as Le, useCallback as ee, useLayoutEffect as oo, useRef as k, useEffect as q, useState as z, forwardRef as T, Children as Pt, isValidElement as Kn, cloneElement as br, Fragment as Ot, useReducer as Jl } from "react";
import * as ed from "react-dom";
import td, { flushSync as vi, createPortal as hr } from "react-dom";
var qo = { exports: {} }, Ft = {};
/** @license React v16.14.0
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ha;
function nd() {
  if (ha)
    return Ft;
  ha = 1;
  var e = w, n = 60103;
  if (Ft.Fragment = 60107, typeof Symbol == "function" && Symbol.for) {
    var t = Symbol.for;
    n = t("react.element"), Ft.Fragment = t("react.fragment");
  }
  var o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, r = Object.prototype.hasOwnProperty, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(s, c, l) {
    var u, d = {}, f = null, p = null;
    l !== void 0 && (f = "" + l), c.key !== void 0 && (f = "" + c.key), c.ref !== void 0 && (p = c.ref);
    for (u in c)
      r.call(c, u) && !a.hasOwnProperty(u) && (d[u] = c[u]);
    if (s && s.defaultProps)
      for (u in c = s.defaultProps, c)
        d[u] === void 0 && (d[u] = c[u]);
    return { $$typeof: n, type: s, key: f, ref: p, props: d, _owner: o.current };
  }
  return Ft.jsx = i, Ft.jsxs = i, Ft;
}
var Oo = {};
/** @license React v16.14.0
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ga;
function od() {
  return ga || (ga = 1, function(e) {
    process.env.NODE_ENV !== "production" && function() {
      var n = w, t = 60103, o = 60106;
      e.Fragment = 60107;
      var r = 60108, a = 60114, i = 60109, s = 60110, c = 60112, l = 60113, u = 60120, d = 60115, f = 60116, p = 60121, v = 60122, m = 60117, b = 60129, $ = 60131;
      if (typeof Symbol == "function" && Symbol.for) {
        var g = Symbol.for;
        t = g("react.element"), o = g("react.portal"), e.Fragment = g("react.fragment"), r = g("react.strict_mode"), a = g("react.profiler"), i = g("react.provider"), s = g("react.context"), c = g("react.forward_ref"), l = g("react.suspense"), u = g("react.suspense_list"), d = g("react.memo"), f = g("react.lazy"), p = g("react.block"), v = g("react.server.block"), m = g("react.fundamental"), g("react.scope"), g("react.opaque.id"), b = g("react.debug_trace_mode"), g("react.offscreen"), $ = g("react.legacy_hidden");
      }
      var y = typeof Symbol == "function" && Symbol.iterator, E = "@@iterator";
      function S(C) {
        if (C === null || typeof C != "object")
          return null;
        var j = y && C[y] || C[E];
        return typeof j == "function" ? j : null;
      }
      var N = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function P(C) {
        {
          for (var j = arguments.length, K = new Array(j > 1 ? j - 1 : 0), ie = 1; ie < j; ie++)
            K[ie - 1] = arguments[ie];
          W("error", C, K);
        }
      }
      function W(C, j, K) {
        {
          var ie = N.ReactDebugCurrentFrame, $e = "";
          if (O) {
            var ye = F(O.type), ve = O._owner;
            $e += V(ye, O._source, ve && F(ve.type));
          }
          $e += ie.getStackAddendum(), $e !== "" && (j += "%s", K = K.concat([$e]));
          var se = K.map(function(Re) {
            return "" + Re;
          });
          se.unshift("Warning: " + j), Function.prototype.apply.call(console[C], console, se);
        }
      }
      var Y = !1;
      function X(C) {
        return !!(typeof C == "string" || typeof C == "function" || C === e.Fragment || C === a || C === b || C === r || C === l || C === u || C === $ || Y || typeof C == "object" && C !== null && (C.$$typeof === f || C.$$typeof === d || C.$$typeof === i || C.$$typeof === s || C.$$typeof === c || C.$$typeof === m || C.$$typeof === p || C[0] === v));
      }
      var H = /^(.*)[\\\/]/;
      function V(C, j, K) {
        var ie = "";
        if (j) {
          var $e = j.fileName, ye = $e.replace(H, "");
          if (/^index\./.test(ye)) {
            var ve = $e.match(H);
            if (ve) {
              var se = ve[1];
              if (se) {
                var Re = se.replace(H, "");
                ye = Re + "/" + ye;
              }
            }
          }
          ie = " (at " + ye + ":" + j.lineNumber + ")";
        } else
          K && (ie = " (created by " + K + ")");
        return `
    in ` + (C || "Unknown") + ie;
      }
      var G = 1;
      function M(C) {
        return C._status === G ? C._result : null;
      }
      function I(C, j, K) {
        var ie = j.displayName || j.name || "";
        return C.displayName || (ie !== "" ? K + "(" + ie + ")" : K);
      }
      function F(C) {
        if (C == null)
          return null;
        if (typeof C.tag == "number" && P("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof C == "function")
          return C.displayName || C.name || null;
        if (typeof C == "string")
          return C;
        switch (C) {
          case e.Fragment:
            return "Fragment";
          case o:
            return "Portal";
          case a:
            return "Profiler";
          case r:
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
              return I(C, C.render, "ForwardRef");
            case d:
              return F(C.type);
            case p:
              return F(C.render);
            case f: {
              var j = C, K = M(j);
              if (K)
                return F(K);
              break;
            }
          }
        return null;
      }
      var A = {};
      N.ReactDebugCurrentFrame;
      var O = null;
      function B(C) {
        O = C;
      }
      function te(C, j, K, ie, $e) {
        {
          var ye = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var ve in C)
            if (ye(C, ve)) {
              var se = void 0;
              try {
                if (typeof C[ve] != "function") {
                  var Re = Error((ie || "React class") + ": " + K + " type `" + ve + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof C[ve] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Re.name = "Invariant Violation", Re;
                }
                se = C[ve](j, ve, ie, K, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (ze) {
                se = ze;
              }
              se && !(se instanceof Error) && (B($e), P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ie || "React class", K, ve, typeof se), B(null)), se instanceof Error && !(se.message in A) && (A[se.message] = !0, B($e), P("Failed %s type: %s", K, se.message), B(null));
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
          var j = Object.getOwnPropertyDescriptor(C, "ref").get;
          if (j && j.isReactWarning)
            return !1;
        }
        return C.ref !== void 0;
      }
      function le(C) {
        if (de.call(C, "key")) {
          var j = Object.getOwnPropertyDescriptor(C, "key").get;
          if (j && j.isReactWarning)
            return !1;
        }
        return C.key !== void 0;
      }
      function be(C, j) {
        if (typeof C.ref == "string" && ne.current && j && ne.current.stateNode !== j) {
          var K = F(ne.current.type);
          Se[K] || (P('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', F(ne.current.type), C.ref), Se[K] = !0);
        }
      }
      function ue(C, j) {
        {
          var K = function() {
            we || (we = !0, P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", j));
          };
          K.isReactWarning = !0, Object.defineProperty(C, "key", {
            get: K,
            configurable: !0
          });
        }
      }
      function fe(C, j) {
        {
          var K = function() {
            Pe || (Pe = !0, P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", j));
          };
          K.isReactWarning = !0, Object.defineProperty(C, "ref", {
            get: K,
            configurable: !0
          });
        }
      }
      var pe = function(C, j, K, ie, $e, ye, ve) {
        var se = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: t,
          // Built-in properties that belong on the element
          type: C,
          key: j,
          ref: K,
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
      function Oe(C, j, K, ie, $e) {
        {
          var ye, ve = {}, se = null, Re = null;
          K !== void 0 && (se = "" + K), le(j) && (se = "" + j.key), Z(j) && (Re = j.ref, be(j, $e));
          for (ye in j)
            de.call(j, ye) && !ce.hasOwnProperty(ye) && (ve[ye] = j[ye]);
          if (C && C.defaultProps) {
            var ze = C.defaultProps;
            for (ye in ze)
              ve[ye] === void 0 && (ve[ye] = ze[ye]);
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
      function Dn() {
        {
          if (Ce.current) {
            var C = F(Ce.current.type);
            if (C)
              return `

Check the render method of \`` + C + "`.";
          }
          return "";
        }
      }
      function Do(C) {
        {
          if (C !== void 0) {
            var j = C.fileName.replace(/^.*[\\\/]/, ""), K = C.lineNumber;
            return `

Check your code at ` + j + ":" + K + ".";
          }
          return "";
        }
      }
      var Ct = {};
      function Kl(C) {
        {
          var j = Dn();
          if (!j) {
            var K = typeof C == "string" ? C : C.displayName || C.name;
            K && (j = `

Check the top-level render call using <` + K + ">.");
          }
          return j;
        }
      }
      function va(C, j) {
        {
          if (!C._store || C._store.validated || C.key != null)
            return;
          C._store.validated = !0;
          var K = Kl(j);
          if (Ct[K])
            return;
          Ct[K] = !0;
          var ie = "";
          C && C._owner && C._owner !== Ce.current && (ie = " It was passed a child from " + F(C._owner.type) + "."), je(C), P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', K, ie), je(null);
        }
      }
      function ma(C, j) {
        {
          if (typeof C != "object")
            return;
          if (Array.isArray(C))
            for (var K = 0; K < C.length; K++) {
              var ie = C[K];
              tt(ie) && va(ie, j);
            }
          else if (tt(C))
            C._store && (C._store.validated = !0);
          else if (C) {
            var $e = S(C);
            if (typeof $e == "function" && $e !== C.entries)
              for (var ye = $e.call(C), ve; !(ve = ye.next()).done; )
                tt(ve.value) && va(ve.value, j);
          }
        }
      }
      function Gl(C) {
        {
          var j = C.type;
          if (j == null || typeof j == "string")
            return;
          var K;
          if (typeof j == "function")
            K = j.propTypes;
          else if (typeof j == "object" && (j.$$typeof === c || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          j.$$typeof === d))
            K = j.propTypes;
          else
            return;
          if (K) {
            var ie = F(j);
            te(K, C.props, "prop", ie, C);
          } else if (j.PropTypes !== void 0 && !et) {
            et = !0;
            var $e = F(j);
            P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", $e || "Unknown");
          }
          typeof j.getDefaultProps == "function" && !j.getDefaultProps.isReactClassApproved && P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function zl(C) {
        {
          for (var j = Object.keys(C.props), K = 0; K < j.length; K++) {
            var ie = j[K];
            if (ie !== "children" && ie !== "key") {
              je(C), P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ie), je(null);
              break;
            }
          }
          C.ref !== null && (je(C), P("Invalid attribute `ref` supplied to `React.Fragment`."), je(null));
        }
      }
      function ba(C, j, K, ie, $e, ye) {
        {
          var ve = X(C);
          if (!ve) {
            var se = "";
            (C === void 0 || typeof C == "object" && C !== null && Object.keys(C).length === 0) && (se += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var Re = Do($e);
            Re ? se += Re : se += Dn();
            var ze;
            C === null ? ze = "null" : Array.isArray(C) ? ze = "array" : C !== void 0 && C.$$typeof === t ? (ze = "<" + (F(C.type) || "Unknown") + " />", se = " Did you accidentally export a JSX literal instead of a component?") : ze = typeof C, P("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ze, se);
          }
          var ut = Oe(C, j, K, $e, ye);
          if (ut == null)
            return ut;
          if (ve) {
            var Lt = j.children;
            if (Lt !== void 0)
              if (ie)
                if (Array.isArray(Lt)) {
                  for (var Mo = 0; Mo < Lt.length; Mo++)
                    ma(Lt[Mo], C);
                  Object.freeze && Object.freeze(Lt);
                } else
                  P("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
              else
                ma(Lt, C);
          }
          return C === e.Fragment ? zl(ut) : Gl(ut), ut;
        }
      }
      function ql(C, j, K) {
        return ba(C, j, K, !0);
      }
      function Xl(C, j, K) {
        return ba(C, j, K, !1);
      }
      var Zl = Xl, Ql = ql;
      e.jsx = Zl, e.jsxs = Ql;
    }();
  }(Oo)), Oo;
}
process.env.NODE_ENV === "production" ? qo.exports = nd() : qo.exports = od();
var _ = qo.exports;
function x() {
  return x = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, x.apply(this, arguments);
}
function rd(e, n) {
  const t = /* @__PURE__ */ We(n);
  function o(a) {
    const { children: i, ...s } = a, c = Xe(
      () => s,
      Object.values(s)
    );
    return /* @__PURE__ */ h(t.Provider, {
      value: c
    }, i);
  }
  function r(a) {
    const i = Le(t);
    if (i)
      return i;
    if (n !== void 0)
      return n;
    throw new Error(`\`${a}\` must be used within \`${e}\``);
  }
  return o.displayName = e + "Provider", [
    o,
    r
  ];
}
function xe(e, n = []) {
  let t = [];
  function o(a, i) {
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
  const r = () => {
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
  return r.scopeName = e, [
    o,
    ad(r, ...n)
  ];
}
function ad(...e) {
  const n = e[0];
  if (e.length === 1)
    return n;
  const t = () => {
    const o = e.map(
      (r) => ({
        useScope: r(),
        scopeName: r.scopeName
      })
    );
    return function(a) {
      const i = o.reduce((s, { useScope: c, scopeName: l }) => {
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
function id(e, n) {
  typeof e == "function" ? e(n) : e != null && (e.current = n);
}
function ro(...e) {
  return (n) => e.forEach(
    (t) => id(t, n)
  );
}
function oe(...e) {
  return ee(ro(...e), e);
}
function L(e, n, { checkForDefaultPrevented: t = !0 } = {}) {
  return function(r) {
    if (e == null || e(r), t === !1 || !r.defaultPrevented)
      return n == null ? void 0 : n(r);
  };
}
const Ie = globalThis != null && globalThis.document ? oo : () => {
}, sd = D["useId".toString()] || (() => {
});
let cd = 0;
function De(e) {
  const [n, t] = D.useState(sd());
  return Ie(() => {
    e || t(
      (o) => o ?? String(cd++)
    );
  }, [
    e
  ]), e || (n ? `radix-${n}` : "");
}
function _e(e) {
  const n = k(e);
  return q(() => {
    n.current = e;
  }), Xe(
    () => (...t) => {
      var o;
      return (o = n.current) === null || o === void 0 ? void 0 : o.call(n, ...t);
    },
    []
  );
}
function Ee({ prop: e, defaultProp: n, onChange: t = () => {
} }) {
  const [o, r] = ld({
    defaultProp: n,
    onChange: t
  }), a = e !== void 0, i = a ? e : o, s = _e(t), c = ee((l) => {
    if (a) {
      const d = typeof l == "function" ? l(e) : l;
      d !== e && s(d);
    } else
      r(l);
  }, [
    a,
    e,
    r,
    s
  ]);
  return [
    i,
    c
  ];
}
function ld({ defaultProp: e, onChange: n }) {
  const t = z(e), [o] = t, r = k(o), a = _e(n);
  return q(() => {
    r.current !== o && (a(o), r.current = o);
  }, [
    o,
    r,
    a
  ]), t;
}
const ct = /* @__PURE__ */ T((e, n) => {
  const { children: t, ...o } = e, r = Pt.toArray(t), a = r.find(dd);
  if (a) {
    const i = a.props.children, s = r.map((c) => c === a ? Pt.count(i) > 1 ? Pt.only(null) : /* @__PURE__ */ Kn(i) ? i.props.children : null : c);
    return /* @__PURE__ */ h(Xo, x({}, o, {
      ref: n
    }), /* @__PURE__ */ Kn(i) ? /* @__PURE__ */ br(i, void 0, s) : null);
  }
  return /* @__PURE__ */ h(Xo, x({}, o, {
    ref: n
  }), t);
});
ct.displayName = "Slot";
const Xo = /* @__PURE__ */ T((e, n) => {
  const { children: t, ...o } = e;
  return /* @__PURE__ */ Kn(t) ? /* @__PURE__ */ br(t, {
    ...ud(o, t.props),
    ref: n ? ro(n, t.ref) : t.ref
  }) : Pt.count(t) > 1 ? Pt.only(null) : null;
});
Xo.displayName = "SlotClone";
const gr = ({ children: e }) => /* @__PURE__ */ h(Ot, null, e);
function dd(e) {
  return /* @__PURE__ */ Kn(e) && e.type === gr;
}
function ud(e, n) {
  const t = {
    ...n
  };
  for (const o in n) {
    const r = e[o], a = n[o];
    /^on[A-Z]/.test(o) ? r && a ? t[o] = (...s) => {
      a(...s), r(...s);
    } : r && (t[o] = r) : o === "style" ? t[o] = {
      ...r,
      ...a
    } : o === "className" && (t[o] = [
      r,
      a
    ].filter(Boolean).join(" "));
  }
  return {
    ...e,
    ...t
  };
}
const fd = [
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
], U = fd.reduce((e, n) => {
  const t = /* @__PURE__ */ T((o, r) => {
    const { asChild: a, ...i } = o, s = a ? ct : n;
    return q(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ h(s, x({}, i, {
      ref: r
    }));
  });
  return t.displayName = `Primitive.${n}`, {
    ...e,
    [n]: t
  };
}, {});
function $r(e, n) {
  e && vi(
    () => e.dispatchEvent(n)
  );
}
function pd(e, n = globalThis == null ? void 0 : globalThis.document) {
  const t = _e(e);
  q(() => {
    const o = (r) => {
      r.key === "Escape" && t(r);
    };
    return n.addEventListener("keydown", o), () => n.removeEventListener("keydown", o);
  }, [
    t,
    n
  ]);
}
const Zo = "dismissableLayer.update", vd = "dismissableLayer.pointerDownOutside", md = "dismissableLayer.focusOutside";
let $a;
const mi = /* @__PURE__ */ We({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Xt = /* @__PURE__ */ T((e, n) => {
  var t;
  const { disableOutsidePointerEvents: o = !1, onEscapeKeyDown: r, onPointerDownOutside: a, onFocusOutside: i, onInteractOutside: s, onDismiss: c, ...l } = e, u = Le(mi), [d, f] = z(null), p = (t = d == null ? void 0 : d.ownerDocument) !== null && t !== void 0 ? t : globalThis == null ? void 0 : globalThis.document, [, v] = z({}), m = oe(
    n,
    (W) => f(W)
  ), b = Array.from(u.layers), [$] = [
    ...u.layersWithOutsidePointerEventsDisabled
  ].slice(-1), g = b.indexOf($), y = d ? b.indexOf(d) : -1, E = u.layersWithOutsidePointerEventsDisabled.size > 0, S = y >= g, N = hd((W) => {
    const Y = W.target, X = [
      ...u.branches
    ].some(
      (H) => H.contains(Y)
    );
    !S || X || (a == null || a(W), s == null || s(W), W.defaultPrevented || c == null || c());
  }, p), P = gd((W) => {
    const Y = W.target;
    [
      ...u.branches
    ].some(
      (H) => H.contains(Y)
    ) || (i == null || i(W), s == null || s(W), W.defaultPrevented || c == null || c());
  }, p);
  return pd((W) => {
    y === u.layers.size - 1 && (r == null || r(W), !W.defaultPrevented && c && (W.preventDefault(), c()));
  }, p), q(() => {
    if (d)
      return o && (u.layersWithOutsidePointerEventsDisabled.size === 0 && ($a = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), ya(), () => {
        o && u.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = $a);
      };
  }, [
    d,
    p,
    o,
    u
  ]), q(() => () => {
    d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), ya());
  }, [
    d,
    u
  ]), q(() => {
    const W = () => v({});
    return document.addEventListener(Zo, W), () => document.removeEventListener(Zo, W);
  }, []), /* @__PURE__ */ h(U.div, x({}, l, {
    ref: m,
    style: {
      pointerEvents: E ? S ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: L(e.onFocusCapture, P.onFocusCapture),
    onBlurCapture: L(e.onBlurCapture, P.onBlurCapture),
    onPointerDownCapture: L(e.onPointerDownCapture, N.onPointerDownCapture)
  }));
}), bd = /* @__PURE__ */ T((e, n) => {
  const t = Le(mi), o = k(null), r = oe(n, o);
  return q(() => {
    const a = o.current;
    if (a)
      return t.branches.add(a), () => {
        t.branches.delete(a);
      };
  }, [
    t.branches
  ]), /* @__PURE__ */ h(U.div, x({}, e, {
    ref: r
  }));
});
function hd(e, n = globalThis == null ? void 0 : globalThis.document) {
  const t = _e(e), o = k(!1), r = k(() => {
  });
  return q(() => {
    const a = (s) => {
      if (s.target && !o.current) {
        let l = function() {
          bi(vd, t, c, {
            discrete: !0
          });
        };
        const c = {
          originalEvent: s
        };
        s.pointerType === "touch" ? (n.removeEventListener("click", r.current), r.current = l, n.addEventListener("click", r.current, {
          once: !0
        })) : l();
      }
      o.current = !1;
    }, i = window.setTimeout(() => {
      n.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(i), n.removeEventListener("pointerdown", a), n.removeEventListener("click", r.current);
    };
  }, [
    n,
    t
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => o.current = !0
  };
}
function gd(e, n = globalThis == null ? void 0 : globalThis.document) {
  const t = _e(e), o = k(!1);
  return q(() => {
    const r = (a) => {
      a.target && !o.current && bi(md, t, {
        originalEvent: a
      }, {
        discrete: !1
      });
    };
    return n.addEventListener("focusin", r), () => n.removeEventListener("focusin", r);
  }, [
    n,
    t
  ]), {
    onFocusCapture: () => o.current = !0,
    onBlurCapture: () => o.current = !1
  };
}
function ya() {
  const e = new CustomEvent(Zo);
  document.dispatchEvent(e);
}
function bi(e, n, t, { discrete: o }) {
  const r = t.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: t
  });
  n && r.addEventListener(e, n, {
    once: !0
  }), o ? $r(r, a) : r.dispatchEvent(a);
}
const $d = Xt, yd = bd, No = "focusScope.autoFocusOnMount", Ro = "focusScope.autoFocusOnUnmount", wa = {
  bubbles: !1,
  cancelable: !0
}, ao = /* @__PURE__ */ T((e, n) => {
  const { loop: t = !1, trapped: o = !1, onMountAutoFocus: r, onUnmountAutoFocus: a, ...i } = e, [s, c] = z(null), l = _e(r), u = _e(a), d = k(null), f = oe(
    n,
    (m) => c(m)
  ), p = k({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  q(() => {
    if (o) {
      let m = function(y) {
        if (p.paused || !s)
          return;
        const E = y.target;
        s.contains(E) ? d.current = E : vt(d.current, {
          select: !0
        });
      }, b = function(y) {
        if (p.paused || !s)
          return;
        const E = y.relatedTarget;
        E !== null && (s.contains(E) || vt(d.current, {
          select: !0
        }));
      }, $ = function(y) {
        const E = document.activeElement;
        for (const S of y)
          S.removedNodes.length > 0 && (s != null && s.contains(E) || vt(s));
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
    o,
    s,
    p.paused
  ]), q(() => {
    if (s) {
      Ca.add(p);
      const m = document.activeElement;
      if (!s.contains(m)) {
        const $ = new CustomEvent(No, wa);
        s.addEventListener(No, l), s.dispatchEvent($), $.defaultPrevented || (wd(Td(hi(s)), {
          select: !0
        }), document.activeElement === m && vt(s));
      }
      return () => {
        s.removeEventListener(No, l), setTimeout(() => {
          const $ = new CustomEvent(Ro, wa);
          s.addEventListener(Ro, u), s.dispatchEvent($), $.defaultPrevented || vt(m ?? document.body, {
            select: !0
          }), s.removeEventListener(Ro, u), Ca.remove(p);
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
    if (!t && !o || p.paused)
      return;
    const b = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey, $ = document.activeElement;
    if (b && $) {
      const g = m.currentTarget, [y, E] = xd(g);
      y && E ? !m.shiftKey && $ === E ? (m.preventDefault(), t && vt(y, {
        select: !0
      })) : m.shiftKey && $ === y && (m.preventDefault(), t && vt(E, {
        select: !0
      })) : $ === g && m.preventDefault();
    }
  }, [
    t,
    o,
    p.paused
  ]);
  return /* @__PURE__ */ h(U.div, x({
    tabIndex: -1
  }, i, {
    ref: f,
    onKeyDown: v
  }));
});
function wd(e, { select: n = !1 } = {}) {
  const t = document.activeElement;
  for (const o of e)
    if (vt(o, {
      select: n
    }), document.activeElement !== t)
      return;
}
function xd(e) {
  const n = hi(e), t = xa(n, e), o = xa(n.reverse(), e);
  return [
    t,
    o
  ];
}
function hi(e) {
  const n = [], t = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; t.nextNode(); )
    n.push(t.currentNode);
  return n;
}
function xa(e, n) {
  for (const t of e)
    if (!Cd(t, {
      upTo: n
    }))
      return t;
}
function Cd(e, { upTo: n }) {
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
function _d(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function vt(e, { select: n = !1 } = {}) {
  if (e && e.focus) {
    const t = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== t && _d(e) && n && e.select();
  }
}
const Ca = Ed();
function Ed() {
  let e = [];
  return {
    add(n) {
      const t = e[0];
      n !== t && (t == null || t.pause()), e = _a(e, n), e.unshift(n);
    },
    remove(n) {
      var t;
      e = _a(e, n), (t = e[0]) === null || t === void 0 || t.resume();
    }
  };
}
function _a(e, n) {
  const t = [
    ...e
  ], o = t.indexOf(n);
  return o !== -1 && t.splice(o, 1), t;
}
function Td(e) {
  return e.filter(
    (n) => n.tagName !== "A"
  );
}
const $n = /* @__PURE__ */ T((e, n) => {
  var t;
  const { container: o = globalThis == null || (t = globalThis.document) === null || t === void 0 ? void 0 : t.body, ...r } = e;
  return o ? /* @__PURE__ */ td.createPortal(/* @__PURE__ */ h(U.div, x({}, r, {
    ref: n
  })), o) : null;
});
function Pd(e, n) {
  return Jl((t, o) => {
    const r = n[t][o];
    return r ?? t;
  }, e);
}
const Me = (e) => {
  const { present: n, children: t } = e, o = Sd(n), r = typeof t == "function" ? t({
    present: o.isPresent
  }) : Pt.only(t), a = oe(o.ref, r.ref);
  return typeof t == "function" || o.isPresent ? /* @__PURE__ */ br(r, {
    ref: a
  }) : null;
};
Me.displayName = "Presence";
function Sd(e) {
  const [n, t] = z(), o = k({}), r = k(e), a = k("none"), i = e ? "mounted" : "unmounted", [s, c] = Pd(i, {
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
  return q(() => {
    const l = Mn(o.current);
    a.current = s === "mounted" ? l : "none";
  }, [
    s
  ]), Ie(() => {
    const l = o.current, u = r.current;
    if (u !== e) {
      const f = a.current, p = Mn(l);
      e ? c("MOUNT") : p === "none" || (l == null ? void 0 : l.display) === "none" ? c("UNMOUNT") : c(u && f !== p ? "ANIMATION_OUT" : "UNMOUNT"), r.current = e;
    }
  }, [
    e,
    c
  ]), Ie(() => {
    if (n) {
      const l = (d) => {
        const p = Mn(o.current).includes(d.animationName);
        d.target === n && p && vi(
          () => c("ANIMATION_END")
        );
      }, u = (d) => {
        d.target === n && (a.current = Mn(o.current));
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
      l && (o.current = getComputedStyle(l)), t(l);
    }, [])
  };
}
function Mn(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
let ko = 0;
function io() {
  q(() => {
    var e, n;
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = t[0]) !== null && e !== void 0 ? e : Ea()), document.body.insertAdjacentElement("beforeend", (n = t[1]) !== null && n !== void 0 ? n : Ea()), ko++, () => {
      ko === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (o) => o.remove()
      ), ko--;
    };
  }, []);
}
function Ea() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
var qe = function() {
  return qe = Object.assign || function(n) {
    for (var t, o = 1, r = arguments.length; o < r; o++) {
      t = arguments[o];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (n[a] = t[a]);
    }
    return n;
  }, qe.apply(this, arguments);
};
function gi(e, n) {
  var t = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && n.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      n.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (t[o[r]] = e[o[r]]);
  return t;
}
function Dd(e, n, t) {
  if (t || arguments.length === 2)
    for (var o = 0, r = n.length, a; o < r; o++)
      (a || !(o in n)) && (a || (a = Array.prototype.slice.call(n, 0, o)), a[o] = n[o]);
  return e.concat(a || Array.prototype.slice.call(n));
}
var jn = "right-scroll-bar-position", Vn = "width-before-scroll-bar", Md = "with-scroll-bars-hidden", Od = "--removed-body-scroll-bar-size";
function Nd(e, n) {
  return typeof e == "function" ? e(n) : e && (e.current = n), e;
}
function Rd(e, n) {
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
        set current(o) {
          var r = t.value;
          r !== o && (t.value = o, t.callback(o, r));
        }
      }
    };
  })[0];
  return t.callback = n, t.facade;
}
function kd(e, n) {
  return Rd(n || null, function(t) {
    return e.forEach(function(o) {
      return Nd(o, t);
    });
  });
}
function Ad(e) {
  return e;
}
function Id(e, n) {
  n === void 0 && (n = Ad);
  var t = [], o = !1, r = {
    read: function() {
      if (o)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return t.length ? t[t.length - 1] : e;
    },
    useMedium: function(a) {
      var i = n(a, o);
      return t.push(i), function() {
        t = t.filter(function(s) {
          return s !== i;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (o = !0; t.length; ) {
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
      o = !0;
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
  return r;
}
function Ld(e) {
  e === void 0 && (e = {});
  var n = Id(null);
  return n.options = qe({ async: !0, ssr: !1 }, e), n;
}
var $i = function(e) {
  var n = e.sideCar, t = gi(e, ["sideCar"]);
  if (!n)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var o = n.read();
  if (!o)
    throw new Error("Sidecar medium not found");
  return D.createElement(o, qe({}, t));
};
$i.isSideCarExport = !0;
function Fd(e, n) {
  return e.useMedium(n), $i;
}
var yi = Ld(), Ao = function() {
}, so = D.forwardRef(function(e, n) {
  var t = D.useRef(null), o = D.useState({
    onScrollCapture: Ao,
    onWheelCapture: Ao,
    onTouchMoveCapture: Ao
  }), r = o[0], a = o[1], i = e.forwardProps, s = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, f = e.sideCar, p = e.noIsolation, v = e.inert, m = e.allowPinchZoom, b = e.as, $ = b === void 0 ? "div" : b, g = gi(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), y = f, E = kd([t, n]), S = qe(qe({}, g), r);
  return D.createElement(
    D.Fragment,
    null,
    u && D.createElement(y, { sideCar: yi, removeScrollBar: l, shards: d, noIsolation: p, inert: v, setCallbacks: a, allowPinchZoom: !!m, lockRef: t }),
    i ? D.cloneElement(D.Children.only(s), qe(qe({}, S), { ref: E })) : D.createElement($, qe({}, S, { className: c, ref: E }), s)
  );
});
so.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
so.classNames = {
  fullWidth: Vn,
  zeroRight: jn
};
var Ta, Wd = function() {
  if (Ta)
    return Ta;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function jd() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var n = Wd();
  return n && e.setAttribute("nonce", n), e;
}
function Vd(e, n) {
  e.styleSheet ? e.styleSheet.cssText = n : e.appendChild(document.createTextNode(n));
}
function Bd(e) {
  var n = document.head || document.getElementsByTagName("head")[0];
  n.appendChild(e);
}
var Yd = function() {
  var e = 0, n = null;
  return {
    add: function(t) {
      e == 0 && (n = jd()) && (Vd(n, t), Bd(n)), e++;
    },
    remove: function() {
      e--, !e && n && (n.parentNode && n.parentNode.removeChild(n), n = null);
    }
  };
}, Hd = function() {
  var e = Yd();
  return function(n, t) {
    D.useEffect(function() {
      return e.add(n), function() {
        e.remove();
      };
    }, [n && t]);
  };
}, wi = function() {
  var e = Hd(), n = function(t) {
    var o = t.styles, r = t.dynamic;
    return e(o, r), null;
  };
  return n;
}, Ud = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Io = function(e) {
  return parseInt(e || "", 10) || 0;
}, Kd = function(e) {
  var n = window.getComputedStyle(document.body), t = n[e === "padding" ? "paddingLeft" : "marginLeft"], o = n[e === "padding" ? "paddingTop" : "marginTop"], r = n[e === "padding" ? "paddingRight" : "marginRight"];
  return [Io(t), Io(o), Io(r)];
}, Gd = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Ud;
  var n = Kd(e), t = document.documentElement.clientWidth, o = window.innerWidth;
  return {
    left: n[0],
    top: n[1],
    right: n[2],
    gap: Math.max(0, o - t + n[2] - n[0])
  };
}, zd = wi(), qd = function(e, n, t, o) {
  var r = e.left, a = e.top, i = e.right, s = e.gap;
  return t === void 0 && (t = "margin"), `
  .`.concat(Md, ` {
   overflow: hidden `).concat(o, `;
   padding-right: `).concat(s, "px ").concat(o, `;
  }
  body {
    overflow: hidden `).concat(o, `;
    overscroll-behavior: contain;
    `).concat([
    n && "position: relative ".concat(o, ";"),
    t === "margin" && `
    padding-left: `.concat(r, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(o, `;
    `),
    t === "padding" && "padding-right: ".concat(s, "px ").concat(o, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(jn, ` {
    right: `).concat(s, "px ").concat(o, `;
  }
  
  .`).concat(Vn, ` {
    margin-right: `).concat(s, "px ").concat(o, `;
  }
  
  .`).concat(jn, " .").concat(jn, ` {
    right: 0 `).concat(o, `;
  }
  
  .`).concat(Vn, " .").concat(Vn, ` {
    margin-right: 0 `).concat(o, `;
  }
  
  body {
    `).concat(Od, ": ").concat(s, `px;
  }
`);
}, Xd = function(e) {
  var n = e.noRelative, t = e.noImportant, o = e.gapMode, r = o === void 0 ? "margin" : o, a = D.useMemo(function() {
    return Gd(r);
  }, [r]);
  return D.createElement(zd, { styles: qd(a, !n, r, t ? "" : "!important") });
}, Qo = !1;
if (typeof window < "u")
  try {
    var On = Object.defineProperty({}, "passive", {
      get: function() {
        return Qo = !0, !0;
      }
    });
    window.addEventListener("test", On, On), window.removeEventListener("test", On, On);
  } catch {
    Qo = !1;
  }
var Wt = Qo ? { passive: !1 } : !1, Zd = function(e) {
  return e.tagName === "TEXTAREA";
}, xi = function(e, n) {
  var t = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    t[n] !== "hidden" && // contains scroll inside self
    !(t.overflowY === t.overflowX && !Zd(e) && t[n] === "visible")
  );
}, Qd = function(e) {
  return xi(e, "overflowY");
}, Jd = function(e) {
  return xi(e, "overflowX");
}, Pa = function(e, n) {
  var t = n;
  do {
    typeof ShadowRoot < "u" && t instanceof ShadowRoot && (t = t.host);
    var o = Ci(e, t);
    if (o) {
      var r = _i(e, t), a = r[1], i = r[2];
      if (a > i)
        return !0;
    }
    t = t.parentNode;
  } while (t && t !== document.body);
  return !1;
}, eu = function(e) {
  var n = e.scrollTop, t = e.scrollHeight, o = e.clientHeight;
  return [
    n,
    t,
    o
  ];
}, tu = function(e) {
  var n = e.scrollLeft, t = e.scrollWidth, o = e.clientWidth;
  return [
    n,
    t,
    o
  ];
}, Ci = function(e, n) {
  return e === "v" ? Qd(n) : Jd(n);
}, _i = function(e, n) {
  return e === "v" ? eu(n) : tu(n);
}, nu = function(e, n) {
  return e === "h" && n === "rtl" ? -1 : 1;
}, ou = function(e, n, t, o, r) {
  var a = nu(e, window.getComputedStyle(n).direction), i = a * o, s = t.target, c = n.contains(s), l = !1, u = i > 0, d = 0, f = 0;
  do {
    var p = _i(e, s), v = p[0], m = p[1], b = p[2], $ = m - b - a * v;
    (v || $) && Ci(e, s) && (d += $, f += v), s = s.parentNode;
  } while (
    // portaled content
    !c && s !== document.body || // self content
    c && (n.contains(s) || n === s)
  );
  return (u && (r && d === 0 || !r && i > d) || !u && (r && f === 0 || !r && -i > f)) && (l = !0), l;
}, Nn = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Sa = function(e) {
  return [e.deltaX, e.deltaY];
}, Da = function(e) {
  return e && "current" in e ? e.current : e;
}, ru = function(e, n) {
  return e[0] === n[0] && e[1] === n[1];
}, au = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, iu = 0, jt = [];
function su(e) {
  var n = D.useRef([]), t = D.useRef([0, 0]), o = D.useRef(), r = D.useState(iu++)[0], a = D.useState(function() {
    return wi();
  })[0], i = D.useRef(e);
  D.useEffect(function() {
    i.current = e;
  }, [e]), D.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(r));
      var m = Dd([e.lockRef.current], (e.shards || []).map(Da), !0).filter(Boolean);
      return m.forEach(function(b) {
        return b.classList.add("allow-interactivity-".concat(r));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(r)), m.forEach(function(b) {
          return b.classList.remove("allow-interactivity-".concat(r));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = D.useCallback(function(m, b) {
    if ("touches" in m && m.touches.length === 2)
      return !i.current.allowPinchZoom;
    var $ = Nn(m), g = t.current, y = "deltaX" in m ? m.deltaX : g[0] - $[0], E = "deltaY" in m ? m.deltaY : g[1] - $[1], S, N = m.target, P = Math.abs(y) > Math.abs(E) ? "h" : "v";
    if ("touches" in m && P === "h" && N.type === "range")
      return !1;
    var W = Pa(P, N);
    if (!W)
      return !0;
    if (W ? S = P : (S = P === "v" ? "h" : "v", W = Pa(P, N)), !W)
      return !1;
    if (!o.current && "changedTouches" in m && (y || E) && (o.current = S), !S)
      return !0;
    var Y = o.current || S;
    return ou(Y, b, m, Y === "h" ? y : E, !0);
  }, []), c = D.useCallback(function(m) {
    var b = m;
    if (!(!jt.length || jt[jt.length - 1] !== a)) {
      var $ = "deltaY" in b ? Sa(b) : Nn(b), g = n.current.filter(function(S) {
        return S.name === b.type && S.target === b.target && ru(S.delta, $);
      })[0];
      if (g && g.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!g) {
        var y = (i.current.shards || []).map(Da).filter(Boolean).filter(function(S) {
          return S.contains(b.target);
        }), E = y.length > 0 ? s(b, y[0]) : !i.current.noIsolation;
        E && b.cancelable && b.preventDefault();
      }
    }
  }, []), l = D.useCallback(function(m, b, $, g) {
    var y = { name: m, delta: b, target: $, should: g };
    n.current.push(y), setTimeout(function() {
      n.current = n.current.filter(function(E) {
        return E !== y;
      });
    }, 1);
  }, []), u = D.useCallback(function(m) {
    t.current = Nn(m), o.current = void 0;
  }, []), d = D.useCallback(function(m) {
    l(m.type, Sa(m), m.target, s(m, e.lockRef.current));
  }, []), f = D.useCallback(function(m) {
    l(m.type, Nn(m), m.target, s(m, e.lockRef.current));
  }, []);
  D.useEffect(function() {
    return jt.push(a), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", c, Wt), document.addEventListener("touchmove", c, Wt), document.addEventListener("touchstart", u, Wt), function() {
      jt = jt.filter(function(m) {
        return m !== a;
      }), document.removeEventListener("wheel", c, Wt), document.removeEventListener("touchmove", c, Wt), document.removeEventListener("touchstart", u, Wt);
    };
  }, []);
  var p = e.removeScrollBar, v = e.inert;
  return D.createElement(
    D.Fragment,
    null,
    v ? D.createElement(a, { styles: au(r) }) : null,
    p ? D.createElement(Xd, { gapMode: "margin" }) : null
  );
}
const cu = Fd(yi, su);
var Ei = D.forwardRef(function(e, n) {
  return D.createElement(so, qe({}, e, { ref: n, sideCar: cu }));
});
Ei.classNames = so.classNames;
const co = Ei;
var lu = function(e) {
  if (typeof document > "u")
    return null;
  var n = Array.isArray(e) ? e[0] : e;
  return n.ownerDocument.body;
}, Vt = /* @__PURE__ */ new WeakMap(), Rn = /* @__PURE__ */ new WeakMap(), kn = {}, Lo = 0, Ti = function(e) {
  return e && (e.host || Ti(e.parentNode));
}, du = function(e, n) {
  return n.map(function(t) {
    if (e.contains(t))
      return t;
    var o = Ti(t);
    return o && e.contains(o) ? o : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(t) {
    return !!t;
  });
}, uu = function(e, n, t, o) {
  var r = du(n, Array.isArray(e) ? e : [e]);
  kn[t] || (kn[t] = /* @__PURE__ */ new WeakMap());
  var a = kn[t], i = [], s = /* @__PURE__ */ new Set(), c = new Set(r), l = function(d) {
    !d || s.has(d) || (s.add(d), l(d.parentNode));
  };
  r.forEach(l);
  var u = function(d) {
    !d || c.has(d) || Array.prototype.forEach.call(d.children, function(f) {
      if (s.has(f))
        u(f);
      else {
        var p = f.getAttribute(o), v = p !== null && p !== "false", m = (Vt.get(f) || 0) + 1, b = (a.get(f) || 0) + 1;
        Vt.set(f, m), a.set(f, b), i.push(f), m === 1 && v && Rn.set(f, !0), b === 1 && f.setAttribute(t, "true"), v || f.setAttribute(o, "true");
      }
    });
  };
  return u(n), s.clear(), Lo++, function() {
    i.forEach(function(d) {
      var f = Vt.get(d) - 1, p = a.get(d) - 1;
      Vt.set(d, f), a.set(d, p), f || (Rn.has(d) || d.removeAttribute(o), Rn.delete(d)), p || d.removeAttribute(t);
    }), Lo--, Lo || (Vt = /* @__PURE__ */ new WeakMap(), Vt = /* @__PURE__ */ new WeakMap(), Rn = /* @__PURE__ */ new WeakMap(), kn = {});
  };
}, lo = function(e, n, t) {
  t === void 0 && (t = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), r = n || lu(e);
  return r ? (o.push.apply(o, Array.from(r.querySelectorAll("[aria-live]"))), uu(o, r, t, "aria-hidden")) : function() {
    return null;
  };
};
const Pi = "Dialog", [Si, Di] = xe(Pi), [fu, Ge] = Si(Pi), pu = (e) => {
  const { __scopeDialog: n, children: t, open: o, defaultOpen: r, onOpenChange: a, modal: i = !0 } = e, s = k(null), c = k(null), [l = !1, u] = Ee({
    prop: o,
    defaultProp: r,
    onChange: a
  });
  return /* @__PURE__ */ h(fu, {
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
}, vu = "DialogTrigger", mu = /* @__PURE__ */ T((e, n) => {
  const { __scopeDialog: t, ...o } = e, r = Ge(vu, t), a = oe(n, r.triggerRef);
  return /* @__PURE__ */ h(U.button, x({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": r.open,
    "aria-controls": r.contentId,
    "data-state": yr(r.open)
  }, o, {
    ref: a,
    onClick: L(e.onClick, r.onOpenToggle)
  }));
}), Mi = "DialogPortal", [bu, Oi] = Si(Mi, {
  forceMount: void 0
}), hu = (e) => {
  const { __scopeDialog: n, forceMount: t, children: o, container: r } = e, a = Ge(Mi, n);
  return /* @__PURE__ */ h(bu, {
    scope: n,
    forceMount: t
  }, Pt.map(
    o,
    (i) => /* @__PURE__ */ h(Me, {
      present: t || a.open
    }, /* @__PURE__ */ h($n, {
      asChild: !0,
      container: r
    }, i))
  ));
}, Jo = "DialogOverlay", gu = /* @__PURE__ */ T((e, n) => {
  const t = Oi(Jo, e.__scopeDialog), { forceMount: o = t.forceMount, ...r } = e, a = Ge(Jo, e.__scopeDialog);
  return a.modal ? /* @__PURE__ */ h(Me, {
    present: o || a.open
  }, /* @__PURE__ */ h($u, x({}, r, {
    ref: n
  }))) : null;
}), $u = /* @__PURE__ */ T((e, n) => {
  const { __scopeDialog: t, ...o } = e, r = Ge(Jo, t);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ h(co, {
      as: ct,
      allowPinchZoom: !0,
      shards: [
        r.contentRef
      ]
    }, /* @__PURE__ */ h(U.div, x({
      "data-state": yr(r.open)
    }, o, {
      ref: n,
      style: {
        pointerEvents: "auto",
        ...o.style
      }
    })))
  );
}), Ut = "DialogContent", yu = /* @__PURE__ */ T((e, n) => {
  const t = Oi(Ut, e.__scopeDialog), { forceMount: o = t.forceMount, ...r } = e, a = Ge(Ut, e.__scopeDialog);
  return /* @__PURE__ */ h(Me, {
    present: o || a.open
  }, a.modal ? /* @__PURE__ */ h(wu, x({}, r, {
    ref: n
  })) : /* @__PURE__ */ h(xu, x({}, r, {
    ref: n
  })));
}), wu = /* @__PURE__ */ T((e, n) => {
  const t = Ge(Ut, e.__scopeDialog), o = k(null), r = oe(n, t.contentRef, o);
  return q(() => {
    const a = o.current;
    if (a)
      return lo(a);
  }, []), /* @__PURE__ */ h(Ni, x({}, e, {
    ref: r,
    trapFocus: t.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: L(e.onCloseAutoFocus, (a) => {
      var i;
      a.preventDefault(), (i = t.triggerRef.current) === null || i === void 0 || i.focus();
    }),
    onPointerDownOutside: L(e.onPointerDownOutside, (a) => {
      const i = a.detail.originalEvent, s = i.button === 0 && i.ctrlKey === !0;
      (i.button === 2 || s) && a.preventDefault();
    }),
    onFocusOutside: L(
      e.onFocusOutside,
      (a) => a.preventDefault()
    )
  }));
}), xu = /* @__PURE__ */ T((e, n) => {
  const t = Ge(Ut, e.__scopeDialog), o = k(!1), r = k(!1);
  return /* @__PURE__ */ h(Ni, x({}, e, {
    ref: n,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: (a) => {
      var i;
      if ((i = e.onCloseAutoFocus) === null || i === void 0 || i.call(e, a), !a.defaultPrevented) {
        var s;
        o.current || (s = t.triggerRef.current) === null || s === void 0 || s.focus(), a.preventDefault();
      }
      o.current = !1, r.current = !1;
    },
    onInteractOutside: (a) => {
      var i, s;
      (i = e.onInteractOutside) === null || i === void 0 || i.call(e, a), a.defaultPrevented || (o.current = !0, a.detail.originalEvent.type === "pointerdown" && (r.current = !0));
      const c = a.target;
      ((s = t.triggerRef.current) === null || s === void 0 ? void 0 : s.contains(c)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && r.current && a.preventDefault();
    }
  }));
}), Ni = /* @__PURE__ */ T((e, n) => {
  const { __scopeDialog: t, trapFocus: o, onOpenAutoFocus: r, onCloseAutoFocus: a, ...i } = e, s = Ge(Ut, t), c = k(null), l = oe(n, c);
  return io(), /* @__PURE__ */ h(Ot, null, /* @__PURE__ */ h(ao, {
    asChild: !0,
    loop: !0,
    trapped: o,
    onMountAutoFocus: r,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ h(Xt, x({
    role: "dialog",
    id: s.contentId,
    "aria-describedby": s.descriptionId,
    "aria-labelledby": s.titleId,
    "data-state": yr(s.open)
  }, i, {
    ref: l,
    onDismiss: () => s.onOpenChange(!1)
  }))), !1);
}), Ri = "DialogTitle", Cu = /* @__PURE__ */ T((e, n) => {
  const { __scopeDialog: t, ...o } = e, r = Ge(Ri, t);
  return /* @__PURE__ */ h(U.h2, x({
    id: r.titleId
  }, o, {
    ref: n
  }));
}), _u = "DialogDescription", Eu = /* @__PURE__ */ T((e, n) => {
  const { __scopeDialog: t, ...o } = e, r = Ge(_u, t);
  return /* @__PURE__ */ h(U.p, x({
    id: r.descriptionId
  }, o, {
    ref: n
  }));
}), Tu = "DialogClose", Pu = /* @__PURE__ */ T((e, n) => {
  const { __scopeDialog: t, ...o } = e, r = Ge(Tu, t);
  return /* @__PURE__ */ h(U.button, x({
    type: "button"
  }, o, {
    ref: n,
    onClick: L(
      e.onClick,
      () => r.onOpenChange(!1)
    )
  }));
});
function yr(e) {
  return e ? "open" : "closed";
}
const Su = "DialogTitleWarning", [Du, dw] = rd(Su, {
  contentName: Ut,
  titleName: Ri,
  docsSlug: "dialog"
}), ki = pu, Ai = mu, wr = hu, xr = gu, Cr = yu, _r = Cu, Er = Eu, Tr = Pu, Mu = "AlertDialog", [Ou, uw] = xe(Mu, [
  Di
]), dt = Di(), Nu = (e) => {
  const { __scopeAlertDialog: n, ...t } = e, o = dt(n);
  return /* @__PURE__ */ h(ki, x({}, o, t, {
    modal: !0
  }));
}, Ru = /* @__PURE__ */ T((e, n) => {
  const { __scopeAlertDialog: t, ...o } = e, r = dt(t);
  return /* @__PURE__ */ h(Ai, x({}, r, o, {
    ref: n
  }));
}), ku = (e) => {
  const { __scopeAlertDialog: n, ...t } = e, o = dt(n);
  return /* @__PURE__ */ h(wr, x({}, o, t));
}, Au = /* @__PURE__ */ T((e, n) => {
  const { __scopeAlertDialog: t, ...o } = e, r = dt(t);
  return /* @__PURE__ */ h(xr, x({}, r, o, {
    ref: n
  }));
}), Ii = "AlertDialogContent", [Iu, Lu] = Ou(Ii), Fu = /* @__PURE__ */ T((e, n) => {
  const { __scopeAlertDialog: t, children: o, ...r } = e, a = dt(t), i = k(null), s = oe(n, i), c = k(null);
  return /* @__PURE__ */ h(Du, {
    contentName: Ii,
    titleName: Wu,
    docsSlug: "alert-dialog"
  }, /* @__PURE__ */ h(Iu, {
    scope: t,
    cancelRef: c
  }, /* @__PURE__ */ h(Cr, x({
    role: "alertdialog"
  }, a, r, {
    ref: s,
    onOpenAutoFocus: L(r.onOpenAutoFocus, (l) => {
      var u;
      l.preventDefault(), (u = c.current) === null || u === void 0 || u.focus({
        preventScroll: !0
      });
    }),
    onPointerDownOutside: (l) => l.preventDefault(),
    onInteractOutside: (l) => l.preventDefault()
  }), /* @__PURE__ */ h(gr, null, o), !1)));
}), Wu = "AlertDialogTitle", ju = /* @__PURE__ */ T((e, n) => {
  const { __scopeAlertDialog: t, ...o } = e, r = dt(t);
  return /* @__PURE__ */ h(_r, x({}, r, o, {
    ref: n
  }));
}), Vu = /* @__PURE__ */ T((e, n) => {
  const { __scopeAlertDialog: t, ...o } = e, r = dt(t);
  return /* @__PURE__ */ h(Er, x({}, r, o, {
    ref: n
  }));
}), Bu = /* @__PURE__ */ T((e, n) => {
  const { __scopeAlertDialog: t, ...o } = e, r = dt(t);
  return /* @__PURE__ */ h(Tr, x({}, r, o, {
    ref: n
  }));
}), Yu = "AlertDialogCancel", Hu = /* @__PURE__ */ T((e, n) => {
  const { __scopeAlertDialog: t, ...o } = e, { cancelRef: r } = Lu(Yu, t), a = dt(t), i = oe(n, r);
  return /* @__PURE__ */ h(Tr, x({}, a, o, {
    ref: i
  }));
}), Uu = Nu, Ku = Ru, Li = ku, Fi = Au, Wi = Fu, ji = Bu, Vi = Hu, Bi = ju, Yi = Vu;
function Hi(e) {
  var n, t, o = "";
  if (typeof e == "string" || typeof e == "number")
    o += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (n = 0; n < e.length; n++)
        e[n] && (t = Hi(e[n])) && (o && (o += " "), o += t);
    else
      for (n in e)
        e[n] && (o && (o += " "), o += n);
  return o;
}
function Ui() {
  for (var e, n, t = 0, o = ""; t < arguments.length; )
    (e = arguments[t++]) && (n = Hi(e)) && (o && (o += " "), o += n);
  return o;
}
function Gu() {
  for (var e = 0, n, t, o = ""; e < arguments.length; )
    (n = arguments[e++]) && (t = Ki(n)) && (o && (o += " "), o += t);
  return o;
}
function Ki(e) {
  if (typeof e == "string")
    return e;
  for (var n, t = "", o = 0; o < e.length; o++)
    e[o] && (n = Ki(e[o])) && (t && (t += " "), t += n);
  return t;
}
var Pr = "-";
function zu(e) {
  var n = Xu(e), t = e.conflictingClassGroups, o = e.conflictingClassGroupModifiers, r = o === void 0 ? {} : o;
  function a(s) {
    var c = s.split(Pr);
    return c[0] === "" && c.length !== 1 && c.shift(), Gi(c, n) || qu(s);
  }
  function i(s, c) {
    var l = t[s] || [];
    return c && r[s] ? [].concat(l, r[s]) : l;
  }
  return {
    getClassGroupId: a,
    getConflictingClassGroupIds: i
  };
}
function Gi(e, n) {
  var i;
  if (e.length === 0)
    return n.classGroupId;
  var t = e[0], o = n.nextPart.get(t), r = o ? Gi(e.slice(1), o) : void 0;
  if (r)
    return r;
  if (n.validators.length !== 0) {
    var a = e.join(Pr);
    return (i = n.validators.find(function(s) {
      var c = s.validator;
      return c(a);
    })) == null ? void 0 : i.classGroupId;
  }
}
var Ma = /^\[(.+)\]$/;
function qu(e) {
  if (Ma.test(e)) {
    var n = Ma.exec(e)[1], t = n == null ? void 0 : n.substring(0, n.indexOf(":"));
    if (t)
      return "arbitrary.." + t;
  }
}
function Xu(e) {
  var n = e.theme, t = e.prefix, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, r = Qu(Object.entries(e.classGroups), t);
  return r.forEach(function(a) {
    var i = a[0], s = a[1];
    er(s, o, i, n);
  }), o;
}
function er(e, n, t, o) {
  e.forEach(function(r) {
    if (typeof r == "string") {
      var a = r === "" ? n : Oa(n, r);
      a.classGroupId = t;
      return;
    }
    if (typeof r == "function") {
      if (Zu(r)) {
        er(r(o), n, t, o);
        return;
      }
      n.validators.push({
        validator: r,
        classGroupId: t
      });
      return;
    }
    Object.entries(r).forEach(function(i) {
      var s = i[0], c = i[1];
      er(c, Oa(n, s), t, o);
    });
  });
}
function Oa(e, n) {
  var t = e;
  return n.split(Pr).forEach(function(o) {
    t.nextPart.has(o) || t.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), t = t.nextPart.get(o);
  }), t;
}
function Zu(e) {
  return e.isThemeGetter;
}
function Qu(e, n) {
  return n ? e.map(function(t) {
    var o = t[0], r = t[1], a = r.map(function(i) {
      return typeof i == "string" ? n + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(function(s) {
        var c = s[0], l = s[1];
        return [n + c, l];
      })) : i;
    });
    return [o, a];
  }) : e;
}
function Ju(e) {
  if (e < 1)
    return {
      get: function() {
      },
      set: function() {
      }
    };
  var n = 0, t = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  function r(a, i) {
    t.set(a, i), n++, n > e && (n = 0, o = t, t = /* @__PURE__ */ new Map());
  }
  return {
    get: function(i) {
      var s = t.get(i);
      if (s !== void 0)
        return s;
      if ((s = o.get(i)) !== void 0)
        return r(i, s), s;
    },
    set: function(i, s) {
      t.has(i) ? t.set(i, s) : r(i, s);
    }
  };
}
var zi = "!";
function ef(e) {
  var n = e.separator || ":", t = n.length === 1, o = n[0], r = n.length;
  return function(i) {
    for (var s = [], c = 0, l = 0, u, d = 0; d < i.length; d++) {
      var f = i[d];
      if (c === 0) {
        if (f === o && (t || i.slice(d, d + r) === n)) {
          s.push(i.slice(l, d)), l = d + r;
          continue;
        }
        if (f === "/") {
          u = d;
          continue;
        }
      }
      f === "[" ? c++ : f === "]" && c--;
    }
    var p = s.length === 0 ? i : i.substring(l), v = p.startsWith(zi), m = v ? p.substring(1) : p, b = u && u > l ? u - l : void 0;
    return {
      modifiers: s,
      hasImportantModifier: v,
      baseClassName: m,
      maybePostfixModifierPosition: b
    };
  };
}
function tf(e) {
  if (e.length <= 1)
    return e;
  var n = [], t = [];
  return e.forEach(function(o) {
    var r = o[0] === "[";
    r ? (n.push.apply(n, t.sort().concat([o])), t = []) : t.push(o);
  }), n.push.apply(n, t.sort()), n;
}
function nf(e) {
  return {
    cache: Ju(e.cacheSize),
    splitModifiers: ef(e),
    ...zu(e)
  };
}
var of = /\s+/;
function rf(e, n) {
  var t = n.splitModifiers, o = n.getClassGroupId, r = n.getConflictingClassGroupIds, a = /* @__PURE__ */ new Set();
  return e.trim().split(of).map(function(i) {
    var s = t(i), c = s.modifiers, l = s.hasImportantModifier, u = s.baseClassName, d = s.maybePostfixModifierPosition, f = o(d ? u.substring(0, d) : u), p = !!d;
    if (!f) {
      if (!d)
        return {
          isTailwindClass: !1,
          originalClassName: i
        };
      if (f = o(u), !f)
        return {
          isTailwindClass: !1,
          originalClassName: i
        };
      p = !1;
    }
    var v = tf(c).join(":"), m = l ? v + zi : v;
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
    return a.has(u) ? !1 : (a.add(u), r(c, l).forEach(function(d) {
      return a.add(s + d);
    }), !0);
  }).reverse().map(function(i) {
    return i.originalClassName;
  }).join(" ");
}
function Na() {
  for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
    n[t] = arguments[t];
  var o, r, a, i = s;
  function s(l) {
    var u = n[0], d = n.slice(1), f = d.reduce(function(p, v) {
      return v(p);
    }, u());
    return o = nf(f), r = o.cache.get, a = o.cache.set, i = c, c(l);
  }
  function c(l) {
    var u = r(l);
    if (u)
      return u;
    var d = rf(l, o);
    return a(l, d), d;
  }
  return function() {
    return i(Gu.apply(null, arguments));
  };
}
function he(e) {
  var n = function(o) {
    return o[e] || [];
  };
  return n.isThemeGetter = !0, n;
}
var qi = /^\[(?:([a-z-]+):)?(.+)\]$/i, af = /^\d+\/\d+$/, sf = /* @__PURE__ */ new Set(["px", "full", "screen"]), cf = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, lf = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, df = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function Be(e) {
  return Tt(e) || sf.has(e) || af.test(e) || tr(e);
}
function tr(e) {
  return Nt(e, "length", bf);
}
function uf(e) {
  return Nt(e, "size", Xi);
}
function ff(e) {
  return Nt(e, "position", Xi);
}
function pf(e) {
  return Nt(e, "url", hf);
}
function An(e) {
  return Nt(e, "number", Tt);
}
function Tt(e) {
  return !Number.isNaN(Number(e));
}
function vf(e) {
  return e.endsWith("%") && Tt(e.slice(0, -1));
}
function on(e) {
  return Ra(e) || Nt(e, "number", Ra);
}
function ae(e) {
  return qi.test(e);
}
function rn() {
  return !0;
}
function ft(e) {
  return cf.test(e);
}
function mf(e) {
  return Nt(e, "", gf);
}
function Nt(e, n, t) {
  var o = qi.exec(e);
  return o ? o[1] ? o[1] === n : t(o[2]) : !1;
}
function bf(e) {
  return lf.test(e);
}
function Xi() {
  return !1;
}
function hf(e) {
  return e.startsWith("url(");
}
function Ra(e) {
  return Number.isInteger(Number(e));
}
function gf(e) {
  return df.test(e);
}
function ka() {
  var e = he("colors"), n = he("spacing"), t = he("blur"), o = he("brightness"), r = he("borderColor"), a = he("borderRadius"), i = he("borderSpacing"), s = he("borderWidth"), c = he("contrast"), l = he("grayscale"), u = he("hueRotate"), d = he("invert"), f = he("gap"), p = he("gradientColorStops"), v = he("gradientColorStopPositions"), m = he("inset"), b = he("margin"), $ = he("opacity"), g = he("padding"), y = he("saturate"), E = he("scale"), S = he("sepia"), N = he("skew"), P = he("space"), W = he("translate"), Y = function() {
    return ["auto", "contain", "none"];
  }, X = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, H = function() {
    return ["auto", ae, n];
  }, V = function() {
    return [ae, n];
  }, G = function() {
    return ["", Be];
  }, M = function() {
    return ["auto", Tt, ae];
  }, I = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, F = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, A = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, O = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, B = function() {
    return ["", "0", ae];
  }, te = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, ne = function() {
    return [Tt, An];
  }, de = function() {
    return [Tt, ae];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [rn],
      spacing: [Be],
      blur: ["none", "", ft, ae],
      brightness: ne(),
      borderColor: [e],
      borderRadius: ["none", "", "full", ft, ae],
      borderSpacing: V(),
      borderWidth: G(),
      contrast: ne(),
      grayscale: B(),
      hueRotate: de(),
      invert: B(),
      gap: V(),
      gradientColorStops: [e],
      gradientColorStopPositions: [vf, tr],
      inset: H(),
      margin: H(),
      opacity: ne(),
      padding: V(),
      saturate: ne(),
      scale: ne(),
      sepia: B(),
      skew: de(),
      space: V(),
      translate: V()
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
        object: [].concat(I(), [ae])
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
        overscroll: Y()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": Y()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": Y()
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
        z: ["auto", on]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: H()
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
        grow: B()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: B()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", on]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [rn]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", on]
        }, ae]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": M()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": M()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [rn]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [on]
        }, ae]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": M()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": M()
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
        "min-w": ["min", "max", "fit", ae, Be]
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
        "min-h": ["min", "max", "fit", ae, Be]
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
        text: ["base", ft, tr]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", An]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [rn]
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
        "line-clamp": ["none", Tt, An]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", ae, Be]
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
        decoration: [].concat(F(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Be]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", ae, Be]
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
        indent: V()
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
        bg: [].concat(I(), [ff])
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
        bg: ["auto", "cover", "contain", uf]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, pf]
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
        border: [].concat(F(), ["hidden"])
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
        divide: F()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [r]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [r]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [r]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [r]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [r]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [r]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [r]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [r]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [""].concat(F())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ae, Be]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Be]
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
        "ring-opacity": [$]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Be]
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
        shadow: ["", "inner", "none", ft, mf]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [rn]
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
        "mix-blend": A()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": A()
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
        brightness: [o]
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
        saturate: [y]
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
        "backdrop-brightness": [o]
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
        "backdrop-saturate": [y]
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
        rotate: [on, ae]
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
        "scroll-m": V()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": V()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": V()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": V()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": V()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": V()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": V()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": V()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": V()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": V()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": V()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": V()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": V()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": V()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": V()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": V()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": V()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": V()
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
        stroke: [Be, An]
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
function $f(e, n) {
  for (var t in n)
    Zi(e, t, n[t]);
  return e;
}
var yf = Object.prototype.hasOwnProperty, wf = /* @__PURE__ */ new Set(["string", "number", "boolean"]);
function Zi(e, n, t) {
  if (!yf.call(e, n) || wf.has(typeof t) || t === null) {
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
    for (var o in t)
      Zi(e[n], o, t[o]);
  }
}
function xf(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
    t[o - 1] = arguments[o];
  return typeof e == "function" ? Na.apply(void 0, [ka, e].concat(t)) : Na.apply(void 0, [function() {
    return $f(ka(), e);
  }].concat(t));
}
const Cf = xf({ prefix: "~" });
function R(...e) {
  return Cf(Ui(e));
}
const fw = Uu, pw = D.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ _.jsx(
  Ku,
  {
    ref: t,
    className: R("tw-reset", e),
    ...n
  }
)), Qi = ({
  className: e,
  ...n
}) => /* @__PURE__ */ _.jsx(
  Li,
  {
    className: R("tw-reset", e),
    ...n
  }
);
Qi.displayName = Li.displayName;
const Ji = D.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ _.jsx(
  Fi,
  {
    className: R(
      "~fixed ~inset-0 ~z-50 ~bg-background/80 ~backdrop-blur-sm",
      "data-[state=open]:~animate-in data-[state=open]:~fade-in-0",
      "data-[state=closed]:~animate-out data-[state=closed]:~fade-out-0",
      e
    ),
    ...n,
    ref: t
  }
));
Ji.displayName = Fi.displayName;
const _f = D.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ _.jsxs(Qi, { children: [
  /* @__PURE__ */ _.jsx(Ji, {}),
  /* @__PURE__ */ _.jsx(
    Wi,
    {
      ref: t,
      className: R(
        "tw-reset ~fixed ~left-[50%] ~top-[50%] ~z-50 ~grid ~w-full ~max-w-lg ~translate-x-[-50%] ~translate-y-[-50%] ~gap-4 ~border ~bg-background ~p-6 ~shadow-lg ~duration-200 sm:~rounded-lg md:~w-full",
        "data-[state=open]:~animate-in data-[state=open]:~fade-in-0 data-[state=open]:~zoom-in-95 data-[state=open]:~slide-in-from-left-1/2 data-[state=open]:~slide-in-from-top-[48%]",
        "data-[state=closed]:~animate-out data-[state=closed]:~fade-out-0 data-[state=closed]:~zoom-out-95 data-[state=closed]:~slide-out-to-left-1/2 data-[state=closed]:~slide-out-to-top-[48%]",
        e
      ),
      ...n
    }
  )
] }));
_f.displayName = Wi.displayName;
const Ef = ({
  className: e,
  ...n
}) => /* @__PURE__ */ _.jsx(
  "div",
  {
    className: R(
      "~flex ~flex-col ~space-y-2 ~text-center sm:~text-left",
      e
    ),
    ...n
  }
);
Ef.displayName = "AlertDialogHeader";
const Tf = ({
  className: e,
  ...n
}) => /* @__PURE__ */ _.jsx(
  "div",
  {
    className: R(
      "~mt-2 ~flex ~flex-col-reverse sm:~flex-row sm:~justify-end sm:~space-x-2",
      e
    ),
    ...n
  }
);
Tf.displayName = "AlertDialogFooter";
const Pf = D.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ _.jsx(
  Bi,
  {
    ref: t,
    className: R("body-large ~font-semibold", e),
    ...n
  }
));
Pf.displayName = Bi.displayName;
const Sf = D.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ _.jsx(
  Yi,
  {
    ref: t,
    className: R("~leading-6 ~text-muted-foreground", e),
    ...n
  }
));
Sf.displayName = Yi.displayName;
const Df = D.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ _.jsx(
  ji,
  {
    ref: t,
    className: R(bn(), e),
    ...n
  }
));
Df.displayName = ji.displayName;
const Mf = D.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ _.jsx(
  Vi,
  {
    ref: t,
    className: R(
      bn({ variant: "outline" }),
      "~mt-2 sm:~mt-0",
      e
    ),
    ...n
  }
));
Mf.displayName = Vi.displayName;
function ht(e, n) {
  if (e == null)
    return {};
  var t = {}, o = Object.keys(e), r, a;
  for (a = 0; a < o.length; a++)
    r = o[a], !(n.indexOf(r) >= 0) && (t[r] = e[r]);
  return t;
}
var Of = ["color"], es = /* @__PURE__ */ T(function(e, n) {
  var t = e.color, o = t === void 0 ? "currentColor" : t, r = ht(e, Of);
  return h("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, r, {
    ref: n
  }), h("path", {
    d: "M4.5 1C4.77614 1 5 1.22386 5 1.5V2H10V1.5C10 1.22386 10.2239 1 10.5 1C10.7761 1 11 1.22386 11 1.5V2H12.5C13.3284 2 14 2.67157 14 3.5V12.5C14 13.3284 13.3284 14 12.5 14H2.5C1.67157 14 1 13.3284 1 12.5V3.5C1 2.67157 1.67157 2 2.5 2H4V1.5C4 1.22386 4.22386 1 4.5 1ZM10 3V3.5C10 3.77614 10.2239 4 10.5 4C10.7761 4 11 3.77614 11 3.5V3H12.5C12.7761 3 13 3.22386 13 3.5V5H2V3.5C2 3.22386 2.22386 3 2.5 3H4V3.5C4 3.77614 4.22386 4 4.5 4C4.77614 4 5 3.77614 5 3.5V3H10ZM2 6V12.5C2 12.7761 2.22386 13 2.5 13H12.5C12.7761 13 13 12.7761 13 12.5V6H2ZM7 7.5C7 7.22386 7.22386 7 7.5 7C7.77614 7 8 7.22386 8 7.5C8 7.77614 7.77614 8 7.5 8C7.22386 8 7 7.77614 7 7.5ZM9.5 7C9.22386 7 9 7.22386 9 7.5C9 7.77614 9.22386 8 9.5 8C9.77614 8 10 7.77614 10 7.5C10 7.22386 9.77614 7 9.5 7ZM11 7.5C11 7.22386 11.2239 7 11.5 7C11.7761 7 12 7.22386 12 7.5C12 7.77614 11.7761 8 11.5 8C11.2239 8 11 7.77614 11 7.5ZM11.5 9C11.2239 9 11 9.22386 11 9.5C11 9.77614 11.2239 10 11.5 10C11.7761 10 12 9.77614 12 9.5C12 9.22386 11.7761 9 11.5 9ZM9 9.5C9 9.22386 9.22386 9 9.5 9C9.77614 9 10 9.22386 10 9.5C10 9.77614 9.77614 10 9.5 10C9.22386 10 9 9.77614 9 9.5ZM7.5 9C7.22386 9 7 9.22386 7 9.5C7 9.77614 7.22386 10 7.5 10C7.77614 10 8 9.77614 8 9.5C8 9.22386 7.77614 9 7.5 9ZM5 9.5C5 9.22386 5.22386 9 5.5 9C5.77614 9 6 9.22386 6 9.5C6 9.77614 5.77614 10 5.5 10C5.22386 10 5 9.77614 5 9.5ZM3.5 9C3.22386 9 3 9.22386 3 9.5C3 9.77614 3.22386 10 3.5 10C3.77614 10 4 9.77614 4 9.5C4 9.22386 3.77614 9 3.5 9ZM3 11.5C3 11.2239 3.22386 11 3.5 11C3.77614 11 4 11.2239 4 11.5C4 11.7761 3.77614 12 3.5 12C3.22386 12 3 11.7761 3 11.5ZM5.5 11C5.22386 11 5 11.2239 5 11.5C5 11.7761 5.22386 12 5.5 12C5.77614 12 6 11.7761 6 11.5C6 11.2239 5.77614 11 5.5 11ZM7 11.5C7 11.2239 7.22386 11 7.5 11C7.77614 11 8 11.2239 8 11.5C8 11.7761 7.77614 12 7.5 12C7.22386 12 7 11.7761 7 11.5ZM9.5 11C9.22386 11 9 11.2239 9 11.5C9 11.7761 9.22386 12 9.5 12C9.77614 12 10 11.7761 10 11.5C10 11.2239 9.77614 11 9.5 11Z",
    fill: o,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), Nf = ["color"], Rf = /* @__PURE__ */ T(function(e, n) {
  var t = e.color, o = t === void 0 ? "currentColor" : t, r = ht(e, Nf);
  return h("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, r, {
    ref: n
  }), h("path", {
    d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z",
    fill: o,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), kf = ["color"], Sr = /* @__PURE__ */ T(function(e, n) {
  var t = e.color, o = t === void 0 ? "currentColor" : t, r = ht(e, kf);
  return h("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, r, {
    ref: n
  }), h("path", {
    d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",
    fill: o,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), Af = ["color"], If = /* @__PURE__ */ T(function(e, n) {
  var t = e.color, o = t === void 0 ? "currentColor" : t, r = ht(e, Af);
  return h("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, r, {
    ref: n
  }), h("path", {
    d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
    fill: o,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), Lf = ["color"], Ff = /* @__PURE__ */ T(function(e, n) {
  var t = e.color, o = t === void 0 ? "currentColor" : t, r = ht(e, Lf);
  return h("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, r, {
    ref: n
  }), h("path", {
    d: "M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z",
    fill: o,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), Wf = ["color"], ts = /* @__PURE__ */ T(function(e, n) {
  var t = e.color, o = t === void 0 ? "currentColor" : t, r = ht(e, Wf);
  return h("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, r, {
    ref: n
  }), h("path", {
    d: "M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z",
    fill: o,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), jf = ["color"], ns = /* @__PURE__ */ T(function(e, n) {
  var t = e.color, o = t === void 0 ? "currentColor" : t, r = ht(e, jf);
  return h("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, r, {
    ref: n
  }), h("path", {
    d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
    fill: o,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), Vf = ["color"], Bf = /* @__PURE__ */ T(function(e, n) {
  var t = e.color, o = t === void 0 ? "currentColor" : t, r = ht(e, Vf);
  return h("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, r, {
    ref: n
  }), h("path", {
    d: "M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z",
    fill: o
  }));
});
function Kt(e) {
  "@babel/helpers - typeof";
  return Kt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Kt(e);
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
function re(e) {
  Q(1, arguments);
  var n = Object.prototype.toString.call(e);
  return e instanceof Date || Kt(e) === "object" && n === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || n === "[object Number]" ? new Date(e) : ((typeof e == "string" || n === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
}
function Ve(e, n) {
  Q(2, arguments);
  var t = re(e), o = Te(n);
  return isNaN(o) ? /* @__PURE__ */ new Date(NaN) : (o && t.setDate(t.getDate() + o), t);
}
function Ze(e, n) {
  Q(2, arguments);
  var t = re(e), o = Te(n);
  if (isNaN(o))
    return /* @__PURE__ */ new Date(NaN);
  if (!o)
    return t;
  var r = t.getDate(), a = new Date(t.getTime());
  a.setMonth(t.getMonth() + o + 1, 0);
  var i = a.getDate();
  return r >= i ? a : (t.setFullYear(a.getFullYear(), a.getMonth(), r), t);
}
function Yf(e, n) {
  Q(2, arguments);
  var t = re(e).getTime(), o = Te(n);
  return new Date(t + o);
}
var Hf = {};
function gt() {
  return Hf;
}
function Qe(e, n) {
  var t, o, r, a, i, s, c, l;
  Q(1, arguments);
  var u = gt(), d = Te((t = (o = (r = (a = n == null ? void 0 : n.weekStartsOn) !== null && a !== void 0 ? a : n == null || (i = n.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.weekStartsOn) !== null && r !== void 0 ? r : u.weekStartsOn) !== null && o !== void 0 ? o : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && t !== void 0 ? t : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var f = re(e), p = f.getDay(), v = (p < d ? 7 : 0) + p - d;
  return f.setDate(f.getDate() - v), f.setHours(0, 0, 0, 0), f;
}
function Dt(e) {
  return Q(1, arguments), Qe(e, {
    weekStartsOn: 1
  });
}
function Uf(e) {
  Q(1, arguments);
  var n = re(e), t = n.getFullYear(), o = /* @__PURE__ */ new Date(0);
  o.setFullYear(t + 1, 0, 4), o.setHours(0, 0, 0, 0);
  var r = Dt(o), a = /* @__PURE__ */ new Date(0);
  a.setFullYear(t, 0, 4), a.setHours(0, 0, 0, 0);
  var i = Dt(a);
  return n.getTime() >= r.getTime() ? t + 1 : n.getTime() >= i.getTime() ? t : t - 1;
}
function Kf(e) {
  Q(1, arguments);
  var n = Uf(e), t = /* @__PURE__ */ new Date(0);
  t.setFullYear(n, 0, 4), t.setHours(0, 0, 0, 0);
  var o = Dt(t);
  return o;
}
function ln(e) {
  var n = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return n.setUTCFullYear(e.getFullYear()), e.getTime() - n.getTime();
}
function Gt(e) {
  Q(1, arguments);
  var n = re(e);
  return n.setHours(0, 0, 0, 0), n;
}
var Gf = 864e5;
function rt(e, n) {
  Q(2, arguments);
  var t = Gt(e), o = Gt(n), r = t.getTime() - ln(t), a = o.getTime() - ln(o);
  return Math.round((r - a) / Gf);
}
function nr(e, n) {
  Q(2, arguments);
  var t = Te(n), o = t * 7;
  return Ve(e, o);
}
function zf(e, n) {
  Q(2, arguments);
  var t = Te(n);
  return Ze(e, t * 12);
}
function qf(e) {
  Q(1, arguments);
  var n;
  if (e && typeof e.forEach == "function")
    n = e;
  else if (Kt(e) === "object" && e !== null)
    n = Array.prototype.slice.call(e);
  else
    return /* @__PURE__ */ new Date(NaN);
  var t;
  return n.forEach(function(o) {
    var r = re(o);
    (t === void 0 || t < r || isNaN(Number(r))) && (t = r);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function Xf(e) {
  Q(1, arguments);
  var n;
  if (e && typeof e.forEach == "function")
    n = e;
  else if (Kt(e) === "object" && e !== null)
    n = Array.prototype.slice.call(e);
  else
    return /* @__PURE__ */ new Date(NaN);
  var t;
  return n.forEach(function(o) {
    var r = re(o);
    (t === void 0 || t > r || isNaN(r.getDate())) && (t = r);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function ke(e, n) {
  Q(2, arguments);
  var t = Gt(e), o = Gt(n);
  return t.getTime() === o.getTime();
}
function Dr(e) {
  return Q(1, arguments), e instanceof Date || Kt(e) === "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Zf(e) {
  if (Q(1, arguments), !Dr(e) && typeof e != "number")
    return !1;
  var n = re(e);
  return !isNaN(Number(n));
}
function dn(e, n) {
  Q(2, arguments);
  var t = re(e), o = re(n), r = t.getFullYear() - o.getFullYear(), a = t.getMonth() - o.getMonth();
  return r * 12 + a;
}
var Qf = 6048e5;
function Jf(e, n, t) {
  Q(2, arguments);
  var o = Qe(e, t), r = Qe(n, t), a = o.getTime() - ln(o), i = r.getTime() - ln(r);
  return Math.round((a - i) / Qf);
}
function Mr(e) {
  Q(1, arguments);
  var n = re(e), t = n.getMonth();
  return n.setFullYear(n.getFullYear(), t + 1, 0), n.setHours(23, 59, 59, 999), n;
}
function Ae(e) {
  Q(1, arguments);
  var n = re(e);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function ep(e) {
  Q(1, arguments);
  var n = re(e), t = /* @__PURE__ */ new Date(0);
  return t.setFullYear(n.getFullYear(), 0, 1), t.setHours(0, 0, 0, 0), t;
}
function Or(e, n) {
  var t, o, r, a, i, s, c, l;
  Q(1, arguments);
  var u = gt(), d = Te((t = (o = (r = (a = n == null ? void 0 : n.weekStartsOn) !== null && a !== void 0 ? a : n == null || (i = n.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.weekStartsOn) !== null && r !== void 0 ? r : u.weekStartsOn) !== null && o !== void 0 ? o : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && t !== void 0 ? t : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var f = re(e), p = f.getDay(), v = (p < d ? -7 : 0) + 6 - (p - d);
  return f.setDate(f.getDate() + v), f.setHours(23, 59, 59, 999), f;
}
function os(e) {
  return Q(1, arguments), Or(e, {
    weekStartsOn: 1
  });
}
function tp(e, n) {
  Q(2, arguments);
  var t = Te(n);
  return Yf(e, -t);
}
var np = 864e5;
function op(e) {
  Q(1, arguments);
  var n = re(e), t = n.getTime();
  n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0);
  var o = n.getTime(), r = t - o;
  return Math.floor(r / np) + 1;
}
function Gn(e) {
  Q(1, arguments);
  var n = 1, t = re(e), o = t.getUTCDay(), r = (o < n ? 7 : 0) + o - n;
  return t.setUTCDate(t.getUTCDate() - r), t.setUTCHours(0, 0, 0, 0), t;
}
function rs(e) {
  Q(1, arguments);
  var n = re(e), t = n.getUTCFullYear(), o = /* @__PURE__ */ new Date(0);
  o.setUTCFullYear(t + 1, 0, 4), o.setUTCHours(0, 0, 0, 0);
  var r = Gn(o), a = /* @__PURE__ */ new Date(0);
  a.setUTCFullYear(t, 0, 4), a.setUTCHours(0, 0, 0, 0);
  var i = Gn(a);
  return n.getTime() >= r.getTime() ? t + 1 : n.getTime() >= i.getTime() ? t : t - 1;
}
function rp(e) {
  Q(1, arguments);
  var n = rs(e), t = /* @__PURE__ */ new Date(0);
  t.setUTCFullYear(n, 0, 4), t.setUTCHours(0, 0, 0, 0);
  var o = Gn(t);
  return o;
}
var ap = 6048e5;
function ip(e) {
  Q(1, arguments);
  var n = re(e), t = Gn(n).getTime() - rp(n).getTime();
  return Math.round(t / ap) + 1;
}
function zn(e, n) {
  var t, o, r, a, i, s, c, l;
  Q(1, arguments);
  var u = gt(), d = Te((t = (o = (r = (a = n == null ? void 0 : n.weekStartsOn) !== null && a !== void 0 ? a : n == null || (i = n.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.weekStartsOn) !== null && r !== void 0 ? r : u.weekStartsOn) !== null && o !== void 0 ? o : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && t !== void 0 ? t : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var f = re(e), p = f.getUTCDay(), v = (p < d ? 7 : 0) + p - d;
  return f.setUTCDate(f.getUTCDate() - v), f.setUTCHours(0, 0, 0, 0), f;
}
function as(e, n) {
  var t, o, r, a, i, s, c, l;
  Q(1, arguments);
  var u = re(e), d = u.getUTCFullYear(), f = gt(), p = Te((t = (o = (r = (a = n == null ? void 0 : n.firstWeekContainsDate) !== null && a !== void 0 ? a : n == null || (i = n.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && r !== void 0 ? r : f.firstWeekContainsDate) !== null && o !== void 0 ? o : (c = f.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && t !== void 0 ? t : 1);
  if (!(p >= 1 && p <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var v = /* @__PURE__ */ new Date(0);
  v.setUTCFullYear(d + 1, 0, p), v.setUTCHours(0, 0, 0, 0);
  var m = zn(v, n), b = /* @__PURE__ */ new Date(0);
  b.setUTCFullYear(d, 0, p), b.setUTCHours(0, 0, 0, 0);
  var $ = zn(b, n);
  return u.getTime() >= m.getTime() ? d + 1 : u.getTime() >= $.getTime() ? d : d - 1;
}
function sp(e, n) {
  var t, o, r, a, i, s, c, l;
  Q(1, arguments);
  var u = gt(), d = Te((t = (o = (r = (a = n == null ? void 0 : n.firstWeekContainsDate) !== null && a !== void 0 ? a : n == null || (i = n.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && r !== void 0 ? r : u.firstWeekContainsDate) !== null && o !== void 0 ? o : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && t !== void 0 ? t : 1), f = as(e, n), p = /* @__PURE__ */ new Date(0);
  p.setUTCFullYear(f, 0, d), p.setUTCHours(0, 0, 0, 0);
  var v = zn(p, n);
  return v;
}
var cp = 6048e5;
function lp(e, n) {
  Q(1, arguments);
  var t = re(e), o = zn(t, n).getTime() - sp(t, n).getTime();
  return Math.round(o / cp) + 1;
}
function me(e, n) {
  for (var t = e < 0 ? "-" : "", o = Math.abs(e).toString(); o.length < n; )
    o = "0" + o;
  return t + o;
}
var dp = {
  // Year
  y: function(n, t) {
    var o = n.getUTCFullYear(), r = o > 0 ? o : 1 - o;
    return me(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M: function(n, t) {
    var o = n.getUTCMonth();
    return t === "M" ? String(o + 1) : me(o + 1, 2);
  },
  // Day of the month
  d: function(n, t) {
    return me(n.getUTCDate(), t.length);
  },
  // AM or PM
  a: function(n, t) {
    var o = n.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return o.toUpperCase();
      case "aaa":
        return o;
      case "aaaaa":
        return o[0];
      case "aaaa":
      default:
        return o === "am" ? "a.m." : "p.m.";
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
    var o = t.length, r = n.getUTCMilliseconds(), a = Math.floor(r * Math.pow(10, o - 3));
    return me(a, t.length);
  }
};
const pt = dp;
var Bt = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, up = {
  // Era
  G: function(n, t, o) {
    var r = n.getUTCFullYear() > 0 ? 1 : 0;
    switch (t) {
      case "G":
      case "GG":
      case "GGG":
        return o.era(r, {
          width: "abbreviated"
        });
      case "GGGGG":
        return o.era(r, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return o.era(r, {
          width: "wide"
        });
    }
  },
  // Year
  y: function(n, t, o) {
    if (t === "yo") {
      var r = n.getUTCFullYear(), a = r > 0 ? r : 1 - r;
      return o.ordinalNumber(a, {
        unit: "year"
      });
    }
    return pt.y(n, t);
  },
  // Local week-numbering year
  Y: function(n, t, o, r) {
    var a = as(n, r), i = a > 0 ? a : 1 - a;
    if (t === "YY") {
      var s = i % 100;
      return me(s, 2);
    }
    return t === "Yo" ? o.ordinalNumber(i, {
      unit: "year"
    }) : me(i, t.length);
  },
  // ISO week-numbering year
  R: function(n, t) {
    var o = rs(n);
    return me(o, t.length);
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
    var o = n.getUTCFullYear();
    return me(o, t.length);
  },
  // Quarter
  Q: function(n, t, o) {
    var r = Math.ceil((n.getUTCMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(r);
      case "QQ":
        return me(r, 2);
      case "Qo":
        return o.ordinalNumber(r, {
          unit: "quarter"
        });
      case "QQQ":
        return o.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return o.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return o.quarter(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(n, t, o) {
    var r = Math.ceil((n.getUTCMonth() + 1) / 3);
    switch (t) {
      case "q":
        return String(r);
      case "qq":
        return me(r, 2);
      case "qo":
        return o.ordinalNumber(r, {
          unit: "quarter"
        });
      case "qqq":
        return o.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return o.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return o.quarter(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(n, t, o) {
    var r = n.getUTCMonth();
    switch (t) {
      case "M":
      case "MM":
        return pt.M(n, t);
      case "Mo":
        return o.ordinalNumber(r + 1, {
          unit: "month"
        });
      case "MMM":
        return o.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return o.month(r, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return o.month(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone month
  L: function(n, t, o) {
    var r = n.getUTCMonth();
    switch (t) {
      case "L":
        return String(r + 1);
      case "LL":
        return me(r + 1, 2);
      case "Lo":
        return o.ordinalNumber(r + 1, {
          unit: "month"
        });
      case "LLL":
        return o.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return o.month(r, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return o.month(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Local week of year
  w: function(n, t, o, r) {
    var a = lp(n, r);
    return t === "wo" ? o.ordinalNumber(a, {
      unit: "week"
    }) : me(a, t.length);
  },
  // ISO week of year
  I: function(n, t, o) {
    var r = ip(n);
    return t === "Io" ? o.ordinalNumber(r, {
      unit: "week"
    }) : me(r, t.length);
  },
  // Day of the month
  d: function(n, t, o) {
    return t === "do" ? o.ordinalNumber(n.getUTCDate(), {
      unit: "date"
    }) : pt.d(n, t);
  },
  // Day of year
  D: function(n, t, o) {
    var r = op(n);
    return t === "Do" ? o.ordinalNumber(r, {
      unit: "dayOfYear"
    }) : me(r, t.length);
  },
  // Day of week
  E: function(n, t, o) {
    var r = n.getUTCDay();
    switch (t) {
      case "E":
      case "EE":
      case "EEE":
        return o.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return o.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return o.day(r, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return o.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(n, t, o, r) {
    var a = n.getUTCDay(), i = (a - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "e":
        return String(i);
      case "ee":
        return me(i, 2);
      case "eo":
        return o.ordinalNumber(i, {
          unit: "day"
        });
      case "eee":
        return o.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return o.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return o.day(a, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return o.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(n, t, o, r) {
    var a = n.getUTCDay(), i = (a - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "c":
        return String(i);
      case "cc":
        return me(i, t.length);
      case "co":
        return o.ordinalNumber(i, {
          unit: "day"
        });
      case "ccc":
        return o.day(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return o.day(a, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return o.day(a, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return o.day(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(n, t, o) {
    var r = n.getUTCDay(), a = r === 0 ? 7 : r;
    switch (t) {
      case "i":
        return String(a);
      case "ii":
        return me(a, t.length);
      case "io":
        return o.ordinalNumber(a, {
          unit: "day"
        });
      case "iii":
        return o.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return o.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return o.day(r, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return o.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(n, t, o) {
    var r = n.getUTCHours(), a = r / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return o.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return o.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return o.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return o.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(n, t, o) {
    var r = n.getUTCHours(), a;
    switch (r === 12 ? a = Bt.noon : r === 0 ? a = Bt.midnight : a = r / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return o.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return o.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return o.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return o.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(n, t, o) {
    var r = n.getUTCHours(), a;
    switch (r >= 17 ? a = Bt.evening : r >= 12 ? a = Bt.afternoon : r >= 4 ? a = Bt.morning : a = Bt.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return o.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return o.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return o.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(n, t, o) {
    if (t === "ho") {
      var r = n.getUTCHours() % 12;
      return r === 0 && (r = 12), o.ordinalNumber(r, {
        unit: "hour"
      });
    }
    return pt.h(n, t);
  },
  // Hour [0-23]
  H: function(n, t, o) {
    return t === "Ho" ? o.ordinalNumber(n.getUTCHours(), {
      unit: "hour"
    }) : pt.H(n, t);
  },
  // Hour [0-11]
  K: function(n, t, o) {
    var r = n.getUTCHours() % 12;
    return t === "Ko" ? o.ordinalNumber(r, {
      unit: "hour"
    }) : me(r, t.length);
  },
  // Hour [1-24]
  k: function(n, t, o) {
    var r = n.getUTCHours();
    return r === 0 && (r = 24), t === "ko" ? o.ordinalNumber(r, {
      unit: "hour"
    }) : me(r, t.length);
  },
  // Minute
  m: function(n, t, o) {
    return t === "mo" ? o.ordinalNumber(n.getUTCMinutes(), {
      unit: "minute"
    }) : pt.m(n, t);
  },
  // Second
  s: function(n, t, o) {
    return t === "so" ? o.ordinalNumber(n.getUTCSeconds(), {
      unit: "second"
    }) : pt.s(n, t);
  },
  // Fraction of second
  S: function(n, t) {
    return pt.S(n, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(n, t, o, r) {
    var a = r._originalDate || n, i = a.getTimezoneOffset();
    if (i === 0)
      return "Z";
    switch (t) {
      case "X":
        return Ia(i);
      case "XXXX":
      case "XX":
        return _t(i);
      case "XXXXX":
      case "XXX":
      default:
        return _t(i, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(n, t, o, r) {
    var a = r._originalDate || n, i = a.getTimezoneOffset();
    switch (t) {
      case "x":
        return Ia(i);
      case "xxxx":
      case "xx":
        return _t(i);
      case "xxxxx":
      case "xxx":
      default:
        return _t(i, ":");
    }
  },
  // Timezone (GMT)
  O: function(n, t, o, r) {
    var a = r._originalDate || n, i = a.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Aa(i, ":");
      case "OOOO":
      default:
        return "GMT" + _t(i, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(n, t, o, r) {
    var a = r._originalDate || n, i = a.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Aa(i, ":");
      case "zzzz":
      default:
        return "GMT" + _t(i, ":");
    }
  },
  // Seconds timestamp
  t: function(n, t, o, r) {
    var a = r._originalDate || n, i = Math.floor(a.getTime() / 1e3);
    return me(i, t.length);
  },
  // Milliseconds timestamp
  T: function(n, t, o, r) {
    var a = r._originalDate || n, i = a.getTime();
    return me(i, t.length);
  }
};
function Aa(e, n) {
  var t = e > 0 ? "-" : "+", o = Math.abs(e), r = Math.floor(o / 60), a = o % 60;
  if (a === 0)
    return t + String(r);
  var i = n || "";
  return t + String(r) + i + me(a, 2);
}
function Ia(e, n) {
  if (e % 60 === 0) {
    var t = e > 0 ? "-" : "+";
    return t + me(Math.abs(e) / 60, 2);
  }
  return _t(e, n);
}
function _t(e, n) {
  var t = n || "", o = e > 0 ? "-" : "+", r = Math.abs(e), a = me(Math.floor(r / 60), 2), i = me(r % 60, 2);
  return o + a + t + i;
}
const fp = up;
var La = function(n, t) {
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
}, is = function(n, t) {
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
}, pp = function(n, t) {
  var o = n.match(/(P+)(p+)?/) || [], r = o[1], a = o[2];
  if (!a)
    return La(n, t);
  var i;
  switch (r) {
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
  return i.replace("{{date}}", La(r, t)).replace("{{time}}", is(a, t));
}, vp = {
  p: is,
  P: pp
};
const mp = vp;
var bp = ["D", "DD"], hp = ["YY", "YYYY"];
function gp(e) {
  return bp.indexOf(e) !== -1;
}
function $p(e) {
  return hp.indexOf(e) !== -1;
}
function Fa(e, n, t) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(n, "`) for formatting years to the input `").concat(t, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(n, "`) for formatting years to the input `").concat(t, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(n, "`) for formatting days of the month to the input `").concat(t, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(n, "`) for formatting days of the month to the input `").concat(t, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var yp = {
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
}, wp = function(n, t, o) {
  var r, a = yp[n];
  return typeof a == "string" ? r = a : t === 1 ? r = a.one : r = a.other.replace("{{count}}", t.toString()), o != null && o.addSuffix ? o.comparison && o.comparison > 0 ? "in " + r : r + " ago" : r;
};
const xp = wp;
function Fo(e) {
  return function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = n.width ? String(n.width) : e.defaultWidth, o = e.formats[t] || e.formats[e.defaultWidth];
    return o;
  };
}
var Cp = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, _p = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Ep = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Tp = {
  date: Fo({
    formats: Cp,
    defaultWidth: "full"
  }),
  time: Fo({
    formats: _p,
    defaultWidth: "full"
  }),
  dateTime: Fo({
    formats: Ep,
    defaultWidth: "full"
  })
};
const Pp = Tp;
var Sp = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Dp = function(n, t, o, r) {
  return Sp[n];
};
const Mp = Dp;
function an(e) {
  return function(n, t) {
    var o = t != null && t.context ? String(t.context) : "standalone", r;
    if (o === "formatting" && e.formattingValues) {
      var a = e.defaultFormattingWidth || e.defaultWidth, i = t != null && t.width ? String(t.width) : a;
      r = e.formattingValues[i] || e.formattingValues[a];
    } else {
      var s = e.defaultWidth, c = t != null && t.width ? String(t.width) : e.defaultWidth;
      r = e.values[c] || e.values[s];
    }
    var l = e.argumentCallback ? e.argumentCallback(n) : n;
    return r[l];
  };
}
var Op = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Np = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Rp = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, kp = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, Ap = {
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
}, Ip = {
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
}, Lp = function(n, t) {
  var o = Number(n), r = o % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return o + "st";
      case 2:
        return o + "nd";
      case 3:
        return o + "rd";
    }
  return o + "th";
}, Fp = {
  ordinalNumber: Lp,
  era: an({
    values: Op,
    defaultWidth: "wide"
  }),
  quarter: an({
    values: Np,
    defaultWidth: "wide",
    argumentCallback: function(n) {
      return n - 1;
    }
  }),
  month: an({
    values: Rp,
    defaultWidth: "wide"
  }),
  day: an({
    values: kp,
    defaultWidth: "wide"
  }),
  dayPeriod: an({
    values: Ap,
    defaultWidth: "wide",
    formattingValues: Ip,
    defaultFormattingWidth: "wide"
  })
};
const Wp = Fp;
function sn(e) {
  return function(n) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = t.width, r = o && e.matchPatterns[o] || e.matchPatterns[e.defaultMatchWidth], a = n.match(r);
    if (!a)
      return null;
    var i = a[0], s = o && e.parsePatterns[o] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? Vp(s, function(d) {
      return d.test(i);
    }) : jp(s, function(d) {
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
function jp(e, n) {
  for (var t in e)
    if (e.hasOwnProperty(t) && n(e[t]))
      return t;
}
function Vp(e, n) {
  for (var t = 0; t < e.length; t++)
    if (n(e[t]))
      return t;
}
function Bp(e) {
  return function(n) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = n.match(e.matchPattern);
    if (!o)
      return null;
    var r = o[0], a = n.match(e.parsePattern);
    if (!a)
      return null;
    var i = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    i = t.valueCallback ? t.valueCallback(i) : i;
    var s = n.slice(r.length);
    return {
      value: i,
      rest: s
    };
  };
}
var Yp = /^(\d+)(th|st|nd|rd)?/i, Hp = /\d+/i, Up = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Kp = {
  any: [/^b/i, /^(a|c)/i]
}, Gp = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, zp = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, qp = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Xp = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, Zp = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Qp = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Jp = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, ev = {
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
}, tv = {
  ordinalNumber: Bp({
    matchPattern: Yp,
    parsePattern: Hp,
    valueCallback: function(n) {
      return parseInt(n, 10);
    }
  }),
  era: sn({
    matchPatterns: Up,
    defaultMatchWidth: "wide",
    parsePatterns: Kp,
    defaultParseWidth: "any"
  }),
  quarter: sn({
    matchPatterns: Gp,
    defaultMatchWidth: "wide",
    parsePatterns: zp,
    defaultParseWidth: "any",
    valueCallback: function(n) {
      return n + 1;
    }
  }),
  month: sn({
    matchPatterns: qp,
    defaultMatchWidth: "wide",
    parsePatterns: Xp,
    defaultParseWidth: "any"
  }),
  day: sn({
    matchPatterns: Zp,
    defaultMatchWidth: "wide",
    parsePatterns: Qp,
    defaultParseWidth: "any"
  }),
  dayPeriod: sn({
    matchPatterns: Jp,
    defaultMatchWidth: "any",
    parsePatterns: ev,
    defaultParseWidth: "any"
  })
};
const nv = tv;
var ov = {
  code: "en-US",
  formatDistance: xp,
  formatLong: Pp,
  formatRelative: Mp,
  localize: Wp,
  match: nv,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const ss = ov;
var rv = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, av = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, iv = /^'([^]*?)'?$/, sv = /''/g, cv = /[a-zA-Z]/;
function Ye(e, n, t) {
  var o, r, a, i, s, c, l, u, d, f, p, v, m, b, $, g, y, E;
  Q(2, arguments);
  var S = String(n), N = gt(), P = (o = (r = t == null ? void 0 : t.locale) !== null && r !== void 0 ? r : N.locale) !== null && o !== void 0 ? o : ss, W = Te((a = (i = (s = (c = t == null ? void 0 : t.firstWeekContainsDate) !== null && c !== void 0 ? c : t == null || (l = t.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && s !== void 0 ? s : N.firstWeekContainsDate) !== null && i !== void 0 ? i : (d = N.locale) === null || d === void 0 || (f = d.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && a !== void 0 ? a : 1);
  if (!(W >= 1 && W <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var Y = Te((p = (v = (m = (b = t == null ? void 0 : t.weekStartsOn) !== null && b !== void 0 ? b : t == null || ($ = t.locale) === null || $ === void 0 || (g = $.options) === null || g === void 0 ? void 0 : g.weekStartsOn) !== null && m !== void 0 ? m : N.weekStartsOn) !== null && v !== void 0 ? v : (y = N.locale) === null || y === void 0 || (E = y.options) === null || E === void 0 ? void 0 : E.weekStartsOn) !== null && p !== void 0 ? p : 0);
  if (!(Y >= 0 && Y <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!P.localize)
    throw new RangeError("locale must contain localize property");
  if (!P.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var X = re(e);
  if (!Zf(X))
    throw new RangeError("Invalid time value");
  var H = ln(X), V = tp(X, H), G = {
    firstWeekContainsDate: W,
    weekStartsOn: Y,
    locale: P,
    _originalDate: X
  }, M = S.match(av).map(function(I) {
    var F = I[0];
    if (F === "p" || F === "P") {
      var A = mp[F];
      return A(I, P.formatLong);
    }
    return I;
  }).join("").match(rv).map(function(I) {
    if (I === "''")
      return "'";
    var F = I[0];
    if (F === "'")
      return lv(I);
    var A = fp[F];
    if (A)
      return !(t != null && t.useAdditionalWeekYearTokens) && $p(I) && Fa(I, n, String(e)), !(t != null && t.useAdditionalDayOfYearTokens) && gp(I) && Fa(I, n, String(e)), A(V, I, P.localize, G);
    if (F.match(cv))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + F + "`");
    return I;
  }).join("");
  return M;
}
function lv(e) {
  var n = e.match(iv);
  return n ? n[1].replace(sv, "'") : e;
}
function dv(e) {
  Q(1, arguments);
  var n = re(e), t = n.getFullYear(), o = n.getMonth(), r = /* @__PURE__ */ new Date(0);
  return r.setFullYear(t, o + 1, 0), r.setHours(0, 0, 0, 0), r.getDate();
}
var uv = 6048e5;
function fv(e) {
  Q(1, arguments);
  var n = re(e), t = Dt(n).getTime() - Kf(n).getTime();
  return Math.round(t / uv) + 1;
}
function pv(e) {
  Q(1, arguments);
  var n = re(e), t = n.getTime();
  return t;
}
function vv(e) {
  return Q(1, arguments), Math.floor(pv(e) / 1e3);
}
function mv(e, n) {
  var t, o, r, a, i, s, c, l;
  Q(1, arguments);
  var u = re(e), d = u.getFullYear(), f = gt(), p = Te((t = (o = (r = (a = n == null ? void 0 : n.firstWeekContainsDate) !== null && a !== void 0 ? a : n == null || (i = n.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && r !== void 0 ? r : f.firstWeekContainsDate) !== null && o !== void 0 ? o : (c = f.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && t !== void 0 ? t : 1);
  if (!(p >= 1 && p <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var v = /* @__PURE__ */ new Date(0);
  v.setFullYear(d + 1, 0, p), v.setHours(0, 0, 0, 0);
  var m = Qe(v, n), b = /* @__PURE__ */ new Date(0);
  b.setFullYear(d, 0, p), b.setHours(0, 0, 0, 0);
  var $ = Qe(b, n);
  return u.getTime() >= m.getTime() ? d + 1 : u.getTime() >= $.getTime() ? d : d - 1;
}
function bv(e, n) {
  var t, o, r, a, i, s, c, l;
  Q(1, arguments);
  var u = gt(), d = Te((t = (o = (r = (a = n == null ? void 0 : n.firstWeekContainsDate) !== null && a !== void 0 ? a : n == null || (i = n.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && r !== void 0 ? r : u.firstWeekContainsDate) !== null && o !== void 0 ? o : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && t !== void 0 ? t : 1), f = mv(e, n), p = /* @__PURE__ */ new Date(0);
  p.setFullYear(f, 0, d), p.setHours(0, 0, 0, 0);
  var v = Qe(p, n);
  return v;
}
var hv = 6048e5;
function gv(e, n) {
  Q(1, arguments);
  var t = re(e), o = Qe(t, n).getTime() - bv(t, n).getTime();
  return Math.round(o / hv) + 1;
}
function $v(e) {
  Q(1, arguments);
  var n = re(e), t = n.getMonth();
  return n.setFullYear(n.getFullYear(), t + 1, 0), n.setHours(0, 0, 0, 0), n;
}
function yv(e, n) {
  return Q(1, arguments), Jf($v(e), Ae(e), n) + 1;
}
function cs(e, n) {
  Q(2, arguments);
  var t = re(e), o = re(n);
  return t.getTime() > o.getTime();
}
function ls(e, n) {
  Q(2, arguments);
  var t = re(e), o = re(n);
  return t.getTime() < o.getTime();
}
function Nr(e, n) {
  Q(2, arguments);
  var t = re(e), o = re(n);
  return t.getFullYear() === o.getFullYear() && t.getMonth() === o.getMonth();
}
function wv(e, n) {
  Q(2, arguments);
  var t = re(e), o = re(n);
  return t.getFullYear() === o.getFullYear();
}
function Wa(e, n) {
  Q(2, arguments);
  var t = Te(n);
  return Ve(e, -t);
}
function Wo(e, n) {
  Q(2, arguments);
  var t = re(e), o = Te(n), r = t.getFullYear(), a = t.getDate(), i = /* @__PURE__ */ new Date(0);
  i.setFullYear(r, o, 15), i.setHours(0, 0, 0, 0);
  var s = dv(i);
  return t.setMonth(o, Math.min(a, s)), t;
}
function ja(e, n) {
  Q(2, arguments);
  var t = re(e), o = Te(n);
  return isNaN(t.getTime()) ? /* @__PURE__ */ new Date(NaN) : (t.setFullYear(o), t);
}
const xv = ({
  selected: e,
  onSelect: n,
  disabled: t,
  disabledDates: o,
  ...r
}) => /* @__PURE__ */ _.jsxs(Hc, { children: [
  /* @__PURE__ */ _.jsx(Uc, { asChild: !0, disabled: t, children: /* @__PURE__ */ _.jsxs(
    zr,
    {
      variant: "outline",
      className: R(
        "~w-[240px] ~justify-start ~text-left ~font-normal",
        !e && "~text-muted-foreground"
      ),
      children: [
        /* @__PURE__ */ _.jsx(es, { className: "~mr-3 ~h-5 ~w-5" }),
        e && e instanceof Date ? Ye(e, "PPP") : /* @__PURE__ */ _.jsx("span", { children: "Pick a date" })
      ]
    }
  ) }),
  /* @__PURE__ */ _.jsx(ra, { className: "~w-auto ~p-0", align: "start", children: /* @__PURE__ */ _.jsx(
    na,
    {
      mode: "single",
      selected: e,
      onSelect: n,
      initialFocus: !0,
      disabled: o,
      ...r
    }
  ) })
] }), Cv = ({
  selected: e,
  onSelect: n,
  disabled: t,
  ...o
}) => /* @__PURE__ */ _.jsxs(Hc, { children: [
  /* @__PURE__ */ _.jsx(Uc, { asChild: !0, disabled: t, children: /* @__PURE__ */ _.jsxs(
    zr,
    {
      variant: "outline",
      className: R(
        "~w-[240px] ~justify-start ~text-left ~font-normal",
        !e && "~text-muted-foreground"
      ),
      children: [
        /* @__PURE__ */ _.jsx(es, { className: "~mr-3 ~h-5 ~w-5" }),
        e != null && e.from ? e.to ? /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
          Ye(e.from, "LLL dd, y"),
          " -",
          " ",
          Ye(e.to, "LLL dd, y")
        ] }) : `${Ye(e.from, "LLL dd, y")} - ?` : /* @__PURE__ */ _.jsx("span", { children: "Pick a date range" })
      ]
    }
  ) }),
  /* @__PURE__ */ _.jsx(ra, { className: "~w-auto ~p-0", align: "start", children: /* @__PURE__ */ _.jsx(
    na,
    {
      initialFocus: !0,
      mode: "range",
      defaultMonth: e == null ? void 0 : e.from,
      selected: e,
      onSelect: n,
      numberOfMonths: 2,
      ...o
    }
  ) })
] }), _v = (e) => e !== void 0 && !("getDate" in e), vw = ({ mode: e = "single", ...n }) => {
  const [t, o] = z(
    n.selected
  );
  oo(() => {
    e === "single" && _v(t) && t.from instanceof Date ? o(t.from) : e === "range" && t instanceof Date ? o({ from: t }) : o(void 0);
  }, [e]);
  const r = { ...n, selected: t, onSelect: o };
  if (e === "single")
    return /* @__PURE__ */ _.jsx(xv, { ...r });
  if (e === "range")
    return /* @__PURE__ */ _.jsx(Cv, { ...r });
  throw new Error(`Invalid mode: ${e}`);
};
function Zt(e) {
  const n = e + "CollectionProvider", [t, o] = xe(n), [r, a] = t(n, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  }), i = (p) => {
    const { scope: v, children: m } = p, b = w.useRef(null), $ = w.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ w.createElement(r, {
      scope: v,
      itemMap: $,
      collectionRef: b
    }, m);
  }, s = e + "CollectionSlot", c = /* @__PURE__ */ w.forwardRef((p, v) => {
    const { scope: m, children: b } = p, $ = a(s, m), g = oe(v, $.collectionRef);
    return /* @__PURE__ */ w.createElement(ct, {
      ref: g
    }, b);
  }), l = e + "CollectionItemSlot", u = "data-radix-collection-item", d = /* @__PURE__ */ w.forwardRef((p, v) => {
    const { scope: m, children: b, ...$ } = p, g = w.useRef(null), y = oe(v, g), E = a(l, m);
    return w.useEffect(() => (E.itemMap.set(g, {
      ref: g,
      ...$
    }), () => void E.itemMap.delete(g))), /* @__PURE__ */ w.createElement(ct, {
      [u]: "",
      ref: y
    }, b);
  });
  function f(p) {
    const v = a(e + "CollectionConsumer", p);
    return w.useCallback(() => {
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
    o
  ];
}
const Ev = /* @__PURE__ */ We(void 0);
function Rt(e) {
  const n = Le(Ev);
  return e || n || "ltr";
}
function Qt(e) {
  return e.split("-")[1];
}
function Rr(e) {
  return e === "y" ? "height" : "width";
}
function at(e) {
  return e.split("-")[0];
}
function kt(e) {
  return ["top", "bottom"].includes(at(e)) ? "x" : "y";
}
function Va(e, n, t) {
  let { reference: o, floating: r } = e;
  const a = o.x + o.width / 2 - r.width / 2, i = o.y + o.height / 2 - r.height / 2, s = kt(n), c = Rr(s), l = o[c] / 2 - r[c] / 2, u = s === "x";
  let d;
  switch (at(n)) {
    case "top":
      d = { x: a, y: o.y - r.height };
      break;
    case "bottom":
      d = { x: a, y: o.y + o.height };
      break;
    case "right":
      d = { x: o.x + o.width, y: i };
      break;
    case "left":
      d = { x: o.x - r.width, y: i };
      break;
    default:
      d = { x: o.x, y: o.y };
  }
  switch (Qt(n)) {
    case "start":
      d[s] -= l * (t && u ? -1 : 1);
      break;
    case "end":
      d[s] += l * (t && u ? -1 : 1);
  }
  return d;
}
const Tv = async (e, n, t) => {
  const { placement: o = "bottom", strategy: r = "absolute", middleware: a = [], platform: i } = t, s = a.filter(Boolean), c = await (i.isRTL == null ? void 0 : i.isRTL(n));
  let l = await i.getElementRects({ reference: e, floating: n, strategy: r }), { x: u, y: d } = Va(l, o, c), f = o, p = {}, v = 0;
  for (let m = 0; m < s.length; m++) {
    const { name: b, fn: $ } = s[m], { x: g, y, data: E, reset: S } = await $({ x: u, y: d, initialPlacement: o, placement: f, strategy: r, middlewareData: p, rects: l, platform: i, elements: { reference: e, floating: n } });
    u = g ?? u, d = y ?? d, p = { ...p, [b]: { ...p[b], ...E } }, S && v <= 50 && (v++, typeof S == "object" && (S.placement && (f = S.placement), S.rects && (l = S.rects === !0 ? await i.getElementRects({ reference: e, floating: n, strategy: r }) : S.rects), { x: u, y: d } = Va(l, f, c)), m = -1);
  }
  return { x: u, y: d, placement: f, strategy: r, middlewareData: p };
};
function lt(e, n) {
  return typeof e == "function" ? e(n) : e;
}
function ds(e) {
  return typeof e != "number" ? function(n) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...n };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function qn(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function un(e, n) {
  var t;
  n === void 0 && (n = {});
  const { x: o, y: r, platform: a, rects: i, elements: s, strategy: c } = e, { boundary: l = "clippingAncestors", rootBoundary: u = "viewport", elementContext: d = "floating", altBoundary: f = !1, padding: p = 0 } = lt(n, e), v = ds(p), m = s[f ? d === "floating" ? "reference" : "floating" : d], b = qn(await a.getClippingRect({ element: (t = await (a.isElement == null ? void 0 : a.isElement(m))) == null || t ? m : m.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)), boundary: l, rootBoundary: u, strategy: c })), $ = d === "floating" ? { ...i.floating, x: o, y: r } : i.reference, g = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating)), y = await (a.isElement == null ? void 0 : a.isElement(g)) && await (a.getScale == null ? void 0 : a.getScale(g)) || { x: 1, y: 1 }, E = qn(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: $, offsetParent: g, strategy: c }) : $);
  return { top: (b.top - E.top + v.top) / y.y, bottom: (E.bottom - b.bottom + v.bottom) / y.y, left: (b.left - E.left + v.left) / y.x, right: (E.right - b.right + v.right) / y.x };
}
const fn = Math.min, Et = Math.max;
function or(e, n, t) {
  return Et(e, fn(n, t));
}
const Ba = (e) => ({ name: "arrow", options: e, async fn(n) {
  const { x: t, y: o, placement: r, rects: a, platform: i, elements: s } = n, { element: c, padding: l = 0 } = lt(e, n) || {};
  if (c == null)
    return {};
  const u = ds(l), d = { x: t, y: o }, f = kt(r), p = Rr(f), v = await i.getDimensions(c), m = f === "y", b = m ? "top" : "left", $ = m ? "bottom" : "right", g = m ? "clientHeight" : "clientWidth", y = a.reference[p] + a.reference[f] - d[f] - a.floating[p], E = d[f] - a.reference[f], S = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c));
  let N = S ? S[g] : 0;
  N && await (i.isElement == null ? void 0 : i.isElement(S)) || (N = s.floating[g] || a.floating[p]);
  const P = y / 2 - E / 2, W = N / 2 - v[p] / 2 - 1, Y = fn(u[b], W), X = fn(u[$], W), H = Y, V = N - v[p] - X, G = N / 2 - v[p] / 2 + P, M = or(H, G, V), I = Qt(r) != null && G != M && a.reference[p] / 2 - (G < H ? Y : X) - v[p] / 2 < 0 ? G < H ? H - G : V - G : 0;
  return { [f]: d[f] - I, data: { [f]: M, centerOffset: G - M + I } };
} }), us = ["top", "right", "bottom", "left"];
us.reduce((e, n) => e.concat(n, n + "-start", n + "-end"), []);
const Pv = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Xn(e) {
  return e.replace(/left|right|bottom|top/g, (n) => Pv[n]);
}
function Sv(e, n, t) {
  t === void 0 && (t = !1);
  const o = Qt(e), r = kt(e), a = Rr(r);
  let i = r === "x" ? o === (t ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return n.reference[a] > n.floating[a] && (i = Xn(i)), { main: i, cross: Xn(i) };
}
const Dv = { start: "end", end: "start" };
function jo(e) {
  return e.replace(/start|end/g, (n) => Dv[n]);
}
const Mv = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(n) {
    var t;
    const { placement: o, middlewareData: r, rects: a, initialPlacement: i, platform: s, elements: c } = n, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: v = !0, ...m } = lt(e, n), b = at(o), $ = at(i) === i, g = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), y = d || ($ || !v ? [Xn(i)] : function(H) {
      const V = Xn(H);
      return [jo(H), V, jo(V)];
    }(i));
    d || p === "none" || y.push(...function(H, V, G, M) {
      const I = Qt(H);
      let F = function(A, O, B) {
        const te = ["left", "right"], ne = ["right", "left"], de = ["top", "bottom"], ce = ["bottom", "top"];
        switch (A) {
          case "top":
          case "bottom":
            return B ? O ? ne : te : O ? te : ne;
          case "left":
          case "right":
            return O ? de : ce;
          default:
            return [];
        }
      }(at(H), G === "start", M);
      return I && (F = F.map((A) => A + "-" + I), V && (F = F.concat(F.map(jo)))), F;
    }(i, v, p, g));
    const E = [i, ...y], S = await un(n, m), N = [];
    let P = ((t = r.flip) == null ? void 0 : t.overflows) || [];
    if (l && N.push(S[b]), u) {
      const { main: H, cross: V } = Sv(o, a, g);
      N.push(S[H], S[V]);
    }
    if (P = [...P, { placement: o, overflows: N }], !N.every((H) => H <= 0)) {
      var W, Y;
      const H = (((W = r.flip) == null ? void 0 : W.index) || 0) + 1, V = E[H];
      if (V)
        return { data: { index: H, overflows: P }, reset: { placement: V } };
      let G = (Y = P.filter((M) => M.overflows[0] <= 0).sort((M, I) => M.overflows[1] - I.overflows[1])[0]) == null ? void 0 : Y.placement;
      if (!G)
        switch (f) {
          case "bestFit": {
            var X;
            const M = (X = P.map((I) => [I.placement, I.overflows.filter((F) => F > 0).reduce((F, A) => F + A, 0)]).sort((I, F) => I[1] - F[1])[0]) == null ? void 0 : X[0];
            M && (G = M);
            break;
          }
          case "initialPlacement":
            G = i;
        }
      if (o !== G)
        return { reset: { placement: G } };
    }
    return {};
  } };
};
function Ya(e, n) {
  return { top: e.top - n.height, right: e.right - n.width, bottom: e.bottom - n.height, left: e.left - n.width };
}
function Ha(e) {
  return us.some((n) => e[n] >= 0);
}
const Ov = function(e) {
  return e === void 0 && (e = {}), { name: "hide", options: e, async fn(n) {
    const { rects: t } = n, { strategy: o = "referenceHidden", ...r } = lt(e, n);
    switch (o) {
      case "referenceHidden": {
        const a = Ya(await un(n, { ...r, elementContext: "reference" }), t.reference);
        return { data: { referenceHiddenOffsets: a, referenceHidden: Ha(a) } };
      }
      case "escaped": {
        const a = Ya(await un(n, { ...r, altBoundary: !0 }), t.floating);
        return { data: { escapedOffsets: a, escaped: Ha(a) } };
      }
      default:
        return {};
    }
  } };
}, Nv = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(n) {
    const { x: t, y: o } = n, r = await async function(a, i) {
      const { placement: s, platform: c, elements: l } = a, u = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), d = at(s), f = Qt(s), p = kt(s) === "x", v = ["left", "top"].includes(d) ? -1 : 1, m = u && p ? -1 : 1, b = lt(i, a);
      let { mainAxis: $, crossAxis: g, alignmentAxis: y } = typeof b == "number" ? { mainAxis: b, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...b };
      return f && typeof y == "number" && (g = f === "end" ? -1 * y : y), p ? { x: g * m, y: $ * v } : { x: $ * v, y: g * m };
    }(n, e);
    return { x: t + r.x, y: o + r.y, data: r };
  } };
};
function fs(e) {
  return e === "x" ? "y" : "x";
}
const Rv = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(n) {
    const { x: t, y: o, placement: r } = n, { mainAxis: a = !0, crossAxis: i = !1, limiter: s = { fn: (b) => {
      let { x: $, y: g } = b;
      return { x: $, y: g };
    } }, ...c } = lt(e, n), l = { x: t, y: o }, u = await un(n, c), d = kt(at(r)), f = fs(d);
    let p = l[d], v = l[f];
    if (a) {
      const b = d === "y" ? "bottom" : "right";
      p = or(p + u[d === "y" ? "top" : "left"], p, p - u[b]);
    }
    if (i) {
      const b = f === "y" ? "bottom" : "right";
      v = or(v + u[f === "y" ? "top" : "left"], v, v - u[b]);
    }
    const m = s.fn({ ...n, [d]: p, [f]: v });
    return { ...m, data: { x: m.x - t, y: m.y - o } };
  } };
}, kv = function(e) {
  return e === void 0 && (e = {}), { options: e, fn(n) {
    const { x: t, y: o, placement: r, rects: a, middlewareData: i } = n, { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = lt(e, n), u = { x: t, y: o }, d = kt(r), f = fs(d);
    let p = u[d], v = u[f];
    const m = lt(s, n), b = typeof m == "number" ? { mainAxis: m, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...m };
    if (c) {
      const y = d === "y" ? "height" : "width", E = a.reference[d] - a.floating[y] + b.mainAxis, S = a.reference[d] + a.reference[y] - b.mainAxis;
      p < E ? p = E : p > S && (p = S);
    }
    if (l) {
      var $, g;
      const y = d === "y" ? "width" : "height", E = ["top", "left"].includes(at(r)), S = a.reference[f] - a.floating[y] + (E && (($ = i.offset) == null ? void 0 : $[f]) || 0) + (E ? 0 : b.crossAxis), N = a.reference[f] + a.reference[y] + (E ? 0 : ((g = i.offset) == null ? void 0 : g[f]) || 0) - (E ? b.crossAxis : 0);
      v < S ? v = S : v > N && (v = N);
    }
    return { [d]: p, [f]: v };
  } };
}, Av = function(e) {
  return e === void 0 && (e = {}), { name: "size", options: e, async fn(n) {
    const { placement: t, rects: o, platform: r, elements: a } = n, { apply: i = () => {
    }, ...s } = lt(e, n), c = await un(n, s), l = at(t), u = Qt(t), d = kt(t) === "x", { width: f, height: p } = o.floating;
    let v, m;
    l === "top" || l === "bottom" ? (v = l, m = u === (await (r.isRTL == null ? void 0 : r.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (m = l, v = u === "end" ? "top" : "bottom");
    const b = p - c[v], $ = f - c[m], g = !n.middlewareData.shift;
    let y = b, E = $;
    if (d) {
      const N = f - c.left - c.right;
      E = u || g ? fn($, N) : N;
    } else {
      const N = p - c.top - c.bottom;
      y = u || g ? fn(b, N) : N;
    }
    if (g && !u) {
      const N = Et(c.left, 0), P = Et(c.right, 0), W = Et(c.top, 0), Y = Et(c.bottom, 0);
      d ? E = f - 2 * (N !== 0 || P !== 0 ? N + P : Et(c.left, c.right)) : y = p - 2 * (W !== 0 || Y !== 0 ? W + Y : Et(c.top, c.bottom));
    }
    await i({ ...n, availableWidth: E, availableHeight: y });
    const S = await r.getDimensions(a.floating);
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
function ps(e) {
  return e instanceof Fe(e).Node;
}
function mt(e) {
  return ps(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ue(e) {
  return e instanceof HTMLElement || e instanceof Fe(e).HTMLElement;
}
function Ua(e) {
  return typeof ShadowRoot < "u" && (e instanceof Fe(e).ShadowRoot || e instanceof ShadowRoot);
}
function pn(e) {
  const { overflow: n, overflowX: t, overflowY: o, display: r } = Je(e);
  return /auto|scroll|overlay|hidden|clip/.test(n + o + t) && !["inline", "contents"].includes(r);
}
function Iv(e) {
  return ["table", "td", "th"].includes(mt(e));
}
function rr(e) {
  const n = kr(), t = Je(e);
  return t.transform !== "none" || t.perspective !== "none" || !!t.containerType && t.containerType !== "normal" || !n && !!t.backdropFilter && t.backdropFilter !== "none" || !n && !!t.filter && t.filter !== "none" || ["transform", "perspective", "filter"].some((o) => (t.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (t.contain || "").includes(o));
}
function kr() {
  return !(typeof CSS > "u" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
}
function uo(e) {
  return ["html", "body", "#document"].includes(mt(e));
}
const ar = Math.min, Yt = Math.max, Zn = Math.round, In = Math.floor, bt = (e) => ({ x: e, y: e });
function vs(e) {
  const n = Je(e);
  let t = parseFloat(n.width) || 0, o = parseFloat(n.height) || 0;
  const r = Ue(e), a = r ? e.offsetWidth : t, i = r ? e.offsetHeight : o, s = Zn(t) !== a || Zn(o) !== i;
  return s && (t = a, o = i), { width: t, height: o, $: s };
}
function it(e) {
  return e instanceof Element || e instanceof Fe(e).Element;
}
function Ar(e) {
  return it(e) ? e : e.contextElement;
}
function Ht(e) {
  const n = Ar(e);
  if (!Ue(n))
    return bt(1);
  const t = n.getBoundingClientRect(), { width: o, height: r, $: a } = vs(n);
  let i = (a ? Zn(t.width) : t.width) / o, s = (a ? Zn(t.height) : t.height) / r;
  return i && Number.isFinite(i) || (i = 1), s && Number.isFinite(s) || (s = 1), { x: i, y: s };
}
const Lv = bt(0);
function ms(e) {
  const n = Fe(e);
  return kr() && n.visualViewport ? { x: n.visualViewport.offsetLeft, y: n.visualViewport.offsetTop } : Lv;
}
function Mt(e, n, t, o) {
  n === void 0 && (n = !1), t === void 0 && (t = !1);
  const r = e.getBoundingClientRect(), a = Ar(e);
  let i = bt(1);
  n && (o ? it(o) && (i = Ht(o)) : i = Ht(e));
  const s = function(f, p, v) {
    return p === void 0 && (p = !1), !(!v || p && v !== Fe(f)) && p;
  }(a, t, o) ? ms(a) : bt(0);
  let c = (r.left + s.x) / i.x, l = (r.top + s.y) / i.y, u = r.width / i.x, d = r.height / i.y;
  if (a) {
    const f = Fe(a), p = o && it(o) ? Fe(o) : o;
    let v = f.frameElement;
    for (; v && o && p !== f; ) {
      const m = Ht(v), b = v.getBoundingClientRect(), $ = getComputedStyle(v), g = b.left + (v.clientLeft + parseFloat($.paddingLeft)) * m.x, y = b.top + (v.clientTop + parseFloat($.paddingTop)) * m.y;
      c *= m.x, l *= m.y, u *= m.x, d *= m.y, c += g, l += y, v = Fe(v).frameElement;
    }
  }
  return qn({ width: u, height: d, x: c, y: l });
}
function fo(e) {
  return it(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function st(e) {
  var n;
  return (n = (ps(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : n.documentElement;
}
function bs(e) {
  return Mt(st(e)).left + fo(e).scrollLeft;
}
function zt(e) {
  if (mt(e) === "html")
    return e;
  const n = e.assignedSlot || e.parentNode || Ua(e) && e.host || st(e);
  return Ua(n) ? n.host : n;
}
function hs(e) {
  const n = zt(e);
  return uo(n) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ue(n) && pn(n) ? n : hs(n);
}
function Qn(e, n) {
  var t;
  n === void 0 && (n = []);
  const o = hs(e), r = o === ((t = e.ownerDocument) == null ? void 0 : t.body), a = Fe(o);
  return r ? n.concat(a, a.visualViewport || [], pn(o) ? o : []) : n.concat(o, Qn(o));
}
function Ka(e, n, t) {
  let o;
  if (n === "viewport")
    o = function(r, a) {
      const i = Fe(r), s = st(r), c = i.visualViewport;
      let l = s.clientWidth, u = s.clientHeight, d = 0, f = 0;
      if (c) {
        l = c.width, u = c.height;
        const p = kr();
        (!p || p && a === "fixed") && (d = c.offsetLeft, f = c.offsetTop);
      }
      return { width: l, height: u, x: d, y: f };
    }(e, t);
  else if (n === "document")
    o = function(r) {
      const a = st(r), i = fo(r), s = r.ownerDocument.body, c = Yt(a.scrollWidth, a.clientWidth, s.scrollWidth, s.clientWidth), l = Yt(a.scrollHeight, a.clientHeight, s.scrollHeight, s.clientHeight);
      let u = -i.scrollLeft + bs(r);
      const d = -i.scrollTop;
      return Je(s).direction === "rtl" && (u += Yt(a.clientWidth, s.clientWidth) - c), { width: c, height: l, x: u, y: d };
    }(st(e));
  else if (it(n))
    o = function(r, a) {
      const i = Mt(r, !0, a === "fixed"), s = i.top + r.clientTop, c = i.left + r.clientLeft, l = Ue(r) ? Ht(r) : bt(1);
      return { width: r.clientWidth * l.x, height: r.clientHeight * l.y, x: c * l.x, y: s * l.y };
    }(n, t);
  else {
    const r = ms(e);
    o = { ...n, x: n.x - r.x, y: n.y - r.y };
  }
  return qn(o);
}
function gs(e, n) {
  const t = zt(e);
  return !(t === n || !it(t) || uo(t)) && (Je(t).position === "fixed" || gs(t, n));
}
function Fv(e, n, t) {
  const o = Ue(n), r = st(n), a = t === "fixed", i = Mt(e, !0, a, n);
  let s = { scrollLeft: 0, scrollTop: 0 };
  const c = bt(0);
  if (o || !o && !a)
    if ((mt(n) !== "body" || pn(r)) && (s = fo(n)), Ue(n)) {
      const l = Mt(n, !0, a, n);
      c.x = l.x + n.clientLeft, c.y = l.y + n.clientTop;
    } else
      r && (c.x = bs(r));
  return { x: i.left + s.scrollLeft - c.x, y: i.top + s.scrollTop - c.y, width: i.width, height: i.height };
}
function Ga(e, n) {
  return Ue(e) && Je(e).position !== "fixed" ? n ? n(e) : e.offsetParent : null;
}
function za(e, n) {
  const t = Fe(e);
  if (!Ue(e))
    return t;
  let o = Ga(e, n);
  for (; o && Iv(o) && Je(o).position === "static"; )
    o = Ga(o, n);
  return o && (mt(o) === "html" || mt(o) === "body" && Je(o).position === "static" && !rr(o)) ? t : o || function(r) {
    let a = zt(r);
    for (; Ue(a) && !uo(a); ) {
      if (rr(a))
        return a;
      a = zt(a);
    }
    return null;
  }(e) || t;
}
const Wv = { convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: n, offsetParent: t, strategy: o } = e;
  const r = Ue(t), a = st(t);
  if (t === a)
    return n;
  let i = { scrollLeft: 0, scrollTop: 0 }, s = bt(1);
  const c = bt(0);
  if ((r || !r && o !== "fixed") && ((mt(t) !== "body" || pn(a)) && (i = fo(t)), Ue(t))) {
    const l = Mt(t);
    s = Ht(t), c.x = l.x + t.clientLeft, c.y = l.y + t.clientTop;
  }
  return { width: n.width * s.x, height: n.height * s.y, x: n.x * s.x - i.scrollLeft * s.x + c.x, y: n.y * s.y - i.scrollTop * s.y + c.y };
}, getDocumentElement: st, getClippingRect: function(e) {
  let { element: n, boundary: t, rootBoundary: o, strategy: r } = e;
  const a = [...t === "clippingAncestors" ? function(c, l) {
    const u = l.get(c);
    if (u)
      return u;
    let d = Qn(c).filter((m) => it(m) && mt(m) !== "body"), f = null;
    const p = Je(c).position === "fixed";
    let v = p ? zt(c) : c;
    for (; it(v) && !uo(v); ) {
      const m = Je(v), b = rr(v);
      b || m.position !== "fixed" || (f = null), (p ? !b && !f : !b && m.position === "static" && f && ["absolute", "fixed"].includes(f.position) || pn(v) && !b && gs(c, v)) ? d = d.filter(($) => $ !== v) : f = m, v = zt(v);
    }
    return l.set(c, d), d;
  }(n, this._c) : [].concat(t), o], i = a[0], s = a.reduce((c, l) => {
    const u = Ka(n, l, r);
    return c.top = Yt(u.top, c.top), c.right = ar(u.right, c.right), c.bottom = ar(u.bottom, c.bottom), c.left = Yt(u.left, c.left), c;
  }, Ka(n, i, r));
  return { width: s.right - s.left, height: s.bottom - s.top, x: s.left, y: s.top };
}, getOffsetParent: za, getElementRects: async function(e) {
  let { reference: n, floating: t, strategy: o } = e;
  const r = this.getOffsetParent || za, a = this.getDimensions;
  return { reference: Fv(n, await r(t), o), floating: { x: 0, y: 0, ...await a(t) } };
}, getClientRects: function(e) {
  return Array.from(e.getClientRects());
}, getDimensions: function(e) {
  return vs(e);
}, getScale: Ht, isElement: it, isRTL: function(e) {
  return getComputedStyle(e).direction === "rtl";
} };
function jv(e, n, t, o) {
  o === void 0 && (o = {});
  const { ancestorScroll: r = !0, ancestorResize: a = !0, elementResize: i = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = o, l = Ar(e), u = r || a ? [...l ? Qn(l) : [], ...Qn(n)] : [];
  u.forEach((b) => {
    r && b.addEventListener("scroll", t, { passive: !0 }), a && b.addEventListener("resize", t);
  });
  const d = l && s ? function(b, $) {
    let g, y = null;
    const E = st(b);
    function S() {
      clearTimeout(g), y && y.disconnect(), y = null;
    }
    return function N(P, W) {
      P === void 0 && (P = !1), W === void 0 && (W = 1), S();
      const { left: Y, top: X, width: H, height: V } = b.getBoundingClientRect();
      if (P || $(), !H || !V)
        return;
      const G = { rootMargin: -In(X) + "px " + -In(E.clientWidth - (Y + H)) + "px " + -In(E.clientHeight - (X + V)) + "px " + -In(Y) + "px", threshold: Yt(0, ar(1, W)) || 1 };
      let M = !0;
      function I(F) {
        const A = F[0].intersectionRatio;
        if (A !== W) {
          if (!M)
            return N();
          A ? N(!1, A) : g = setTimeout(() => {
            N(!1, 1e-7);
          }, 100);
        }
        M = !1;
      }
      try {
        y = new IntersectionObserver(I, { ...G, root: E.ownerDocument });
      } catch {
        y = new IntersectionObserver(I, G);
      }
      y.observe(b);
    }(!0), S;
  }(l, t) : null;
  let f, p = -1, v = null;
  i && (v = new ResizeObserver((b) => {
    let [$] = b;
    $ && $.target === l && v && (v.unobserve(n), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      v && v.observe(n);
    })), t();
  }), l && !c && v.observe(l), v.observe(n));
  let m = c ? Mt(e) : null;
  return c && function b() {
    const $ = Mt(e);
    !m || $.x === m.x && $.y === m.y && $.width === m.width && $.height === m.height || t(), m = $, f = requestAnimationFrame(b);
  }(), t(), () => {
    u.forEach((b) => {
      r && b.removeEventListener("scroll", t), a && b.removeEventListener("resize", t);
    }), d && d(), v && v.disconnect(), v = null, c && cancelAnimationFrame(f);
  };
}
const Vv = (e, n, t) => {
  const o = /* @__PURE__ */ new Map(), r = { platform: Wv, ...t }, a = { ...r.platform, _c: o };
  return Tv(e, n, { ...r, platform: a });
}, Bv = (e) => {
  function n(t) {
    return {}.hasOwnProperty.call(t, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const {
        element: o,
        padding: r
      } = typeof e == "function" ? e(t) : e;
      return o && n(o) ? o.current != null ? Ba({
        element: o.current,
        padding: r
      }).fn(t) : {} : o ? Ba({
        element: o,
        padding: r
      }).fn(t) : {};
    }
  };
};
var Bn = typeof document < "u" ? oo : q;
function Jn(e, n) {
  if (e === n)
    return !0;
  if (typeof e != typeof n)
    return !1;
  if (typeof e == "function" && e.toString() === n.toString())
    return !0;
  let t, o, r;
  if (e && n && typeof e == "object") {
    if (Array.isArray(e)) {
      if (t = e.length, t != n.length)
        return !1;
      for (o = t; o-- !== 0; )
        if (!Jn(e[o], n[o]))
          return !1;
      return !0;
    }
    if (r = Object.keys(e), t = r.length, t !== Object.keys(n).length)
      return !1;
    for (o = t; o-- !== 0; )
      if (!{}.hasOwnProperty.call(n, r[o]))
        return !1;
    for (o = t; o-- !== 0; ) {
      const a = r[o];
      if (!(a === "_owner" && e.$$typeof) && !Jn(e[a], n[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && n !== n;
}
function $s(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function qa(e, n) {
  const t = $s(e);
  return Math.round(n * t) / t;
}
function Xa(e) {
  const n = D.useRef(e);
  return Bn(() => {
    n.current = e;
  }), n;
}
function Yv(e) {
  e === void 0 && (e = {});
  const {
    placement: n = "bottom",
    strategy: t = "absolute",
    middleware: o = [],
    platform: r,
    elements: {
      reference: a,
      floating: i
    } = {},
    transform: s = !0,
    whileElementsMounted: c,
    open: l
  } = e, [u, d] = D.useState({
    x: 0,
    y: 0,
    strategy: t,
    placement: n,
    middlewareData: {},
    isPositioned: !1
  }), [f, p] = D.useState(o);
  Jn(f, o) || p(o);
  const [v, m] = D.useState(null), [b, $] = D.useState(null), g = D.useCallback((F) => {
    F != N.current && (N.current = F, m(F));
  }, [m]), y = D.useCallback((F) => {
    F !== P.current && (P.current = F, $(F));
  }, [$]), E = a || v, S = i || b, N = D.useRef(null), P = D.useRef(null), W = D.useRef(u), Y = Xa(c), X = Xa(r), H = D.useCallback(() => {
    if (!N.current || !P.current)
      return;
    const F = {
      placement: n,
      strategy: t,
      middleware: f
    };
    X.current && (F.platform = X.current), Vv(N.current, P.current, F).then((A) => {
      const O = {
        ...A,
        isPositioned: !0
      };
      V.current && !Jn(W.current, O) && (W.current = O, ed.flushSync(() => {
        d(O);
      }));
    });
  }, [f, n, t, X]);
  Bn(() => {
    l === !1 && W.current.isPositioned && (W.current.isPositioned = !1, d((F) => ({
      ...F,
      isPositioned: !1
    })));
  }, [l]);
  const V = D.useRef(!1);
  Bn(() => (V.current = !0, () => {
    V.current = !1;
  }), []), Bn(() => {
    if (E && (N.current = E), S && (P.current = S), E && S) {
      if (Y.current)
        return Y.current(E, S, H);
      H();
    }
  }, [E, S, H, Y]);
  const G = D.useMemo(() => ({
    reference: N,
    floating: P,
    setReference: g,
    setFloating: y
  }), [g, y]), M = D.useMemo(() => ({
    reference: E,
    floating: S
  }), [E, S]), I = D.useMemo(() => {
    const F = {
      position: t,
      left: 0,
      top: 0
    };
    if (!M.floating)
      return F;
    const A = qa(M.floating, u.x), O = qa(M.floating, u.y);
    return s ? {
      ...F,
      transform: "translate(" + A + "px, " + O + "px)",
      ...$s(M.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: t,
      left: A,
      top: O
    };
  }, [t, s, M.floating, u.x, u.y]);
  return D.useMemo(() => ({
    ...u,
    update: H,
    refs: G,
    elements: M,
    floatingStyles: I
  }), [u, H, G, M, I]);
}
function yn(e) {
  const [n, t] = z(void 0);
  return Ie(() => {
    if (e) {
      t({
        width: e.offsetWidth,
        height: e.offsetHeight
      });
      const o = new ResizeObserver((r) => {
        if (!Array.isArray(r) || !r.length)
          return;
        const a = r[0];
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
      return o.observe(e, {
        box: "border-box"
      }), () => o.unobserve(e);
    } else
      t(void 0);
  }, [
    e
  ]), n;
}
const ys = "Popper", [ws, $t] = xe(ys), [Hv, xs] = ws(ys), Uv = (e) => {
  const { __scopePopper: n, children: t } = e, [o, r] = z(null);
  return /* @__PURE__ */ h(Hv, {
    scope: n,
    anchor: o,
    onAnchorChange: r
  }, t);
}, Kv = "PopperAnchor", Gv = /* @__PURE__ */ T((e, n) => {
  const { __scopePopper: t, virtualRef: o, ...r } = e, a = xs(Kv, t), i = k(null), s = oe(n, i);
  return q(() => {
    a.onAnchorChange((o == null ? void 0 : o.current) || i.current);
  }), o ? null : /* @__PURE__ */ h(U.div, x({}, r, {
    ref: s
  }));
}), Cs = "PopperContent", [zv, mw] = ws(Cs), qv = /* @__PURE__ */ T((e, n) => {
  var t, o, r, a, i, s, c, l;
  const { __scopePopper: u, side: d = "bottom", sideOffset: f = 0, align: p = "center", alignOffset: v = 0, arrowPadding: m = 0, collisionBoundary: b = [], collisionPadding: $ = 0, sticky: g = "partial", hideWhenDetached: y = !1, avoidCollisions: E = !0, onPlaced: S, ...N } = e, P = xs(Cs, u), [W, Y] = z(null), X = oe(
    n,
    (Ce) => Y(Ce)
  ), [H, V] = z(null), G = yn(H), M = (t = G == null ? void 0 : G.width) !== null && t !== void 0 ? t : 0, I = (o = G == null ? void 0 : G.height) !== null && o !== void 0 ? o : 0, F = d + (p !== "center" ? "-" + p : ""), A = typeof $ == "number" ? $ : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...$
  }, O = Array.isArray(b) ? b : [
    b
  ], B = O.length > 0, te = {
    padding: A,
    boundary: O.filter(Xv),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: B
  }, { refs: ne, floatingStyles: de, placement: ce, isPositioned: we, middlewareData: Pe } = Yv({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: F,
    whileElementsMounted: jv,
    elements: {
      reference: P.anchor
    },
    middleware: [
      Nv({
        mainAxis: f + I,
        alignmentAxis: v
      }),
      E && Rv({
        mainAxis: !0,
        crossAxis: !1,
        limiter: g === "partial" ? kv() : void 0,
        ...te
      }),
      E && Mv({
        ...te
      }),
      Av({
        ...te,
        apply: ({ elements: Ce, rects: je, availableWidth: et, availableHeight: tt }) => {
          const { width: Dn, height: Do } = je.reference, Ct = Ce.floating.style;
          Ct.setProperty("--radix-popper-available-width", `${et}px`), Ct.setProperty("--radix-popper-available-height", `${tt}px`), Ct.setProperty("--radix-popper-anchor-width", `${Dn}px`), Ct.setProperty("--radix-popper-anchor-height", `${Do}px`);
        }
      }),
      H && Bv({
        element: H,
        padding: m
      }),
      Zv({
        arrowWidth: M,
        arrowHeight: I
      }),
      y && Ov({
        strategy: "referenceHidden"
      })
    ]
  }), [Se, Z] = _s(ce), le = _e(S);
  Ie(() => {
    we && (le == null || le());
  }, [
    we,
    le
  ]);
  const be = (r = Pe.arrow) === null || r === void 0 ? void 0 : r.x, ue = (a = Pe.arrow) === null || a === void 0 ? void 0 : a.y, fe = ((i = Pe.arrow) === null || i === void 0 ? void 0 : i.centerOffset) !== 0, [pe, Oe] = z();
  return Ie(() => {
    W && Oe(window.getComputedStyle(W).zIndex);
  }, [
    W
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
  }, /* @__PURE__ */ h(zv, {
    scope: u,
    placedSide: Se,
    onArrowChange: V,
    arrowX: be,
    arrowY: ue,
    shouldHideArrow: fe
  }, /* @__PURE__ */ h(U.div, x({
    "data-side": Se,
    "data-align": Z
  }, N, {
    ref: X,
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
function Xv(e) {
  return e !== null;
}
const Zv = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(n) {
    var t, o, r, a, i;
    const { placement: s, rects: c, middlewareData: l } = n, d = ((t = l.arrow) === null || t === void 0 ? void 0 : t.centerOffset) !== 0, f = d ? 0 : e.arrowWidth, p = d ? 0 : e.arrowHeight, [v, m] = _s(s), b = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[m], $ = ((o = (r = l.arrow) === null || r === void 0 ? void 0 : r.x) !== null && o !== void 0 ? o : 0) + f / 2, g = ((a = (i = l.arrow) === null || i === void 0 ? void 0 : i.y) !== null && a !== void 0 ? a : 0) + p / 2;
    let y = "", E = "";
    return v === "bottom" ? (y = d ? b : `${$}px`, E = `${-p}px`) : v === "top" ? (y = d ? b : `${$}px`, E = `${c.floating.height + p}px`) : v === "right" ? (y = `${-p}px`, E = d ? b : `${g}px`) : v === "left" && (y = `${c.floating.width + p}px`, E = d ? b : `${g}px`), {
      data: {
        x: y,
        y: E
      }
    };
  }
});
function _s(e) {
  const [n, t = "center"] = e.split("-");
  return [
    n,
    t
  ];
}
const wn = Uv, po = Gv, vo = qv, Vo = "rovingFocusGroup.onEntryFocus", Qv = {
  bubbles: !1,
  cancelable: !0
}, Ir = "RovingFocusGroup", [ir, Es, Jv] = Zt(Ir), [em, Jt] = xe(Ir, [
  Jv
]), [tm, nm] = em(Ir), om = /* @__PURE__ */ T((e, n) => /* @__PURE__ */ h(ir.Provider, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ h(ir.Slot, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ h(rm, x({}, e, {
  ref: n
}))))), rm = /* @__PURE__ */ T((e, n) => {
  const { __scopeRovingFocusGroup: t, orientation: o, loop: r = !1, dir: a, currentTabStopId: i, defaultCurrentTabStopId: s, onCurrentTabStopIdChange: c, onEntryFocus: l, ...u } = e, d = k(null), f = oe(n, d), p = Rt(a), [v = null, m] = Ee({
    prop: i,
    defaultProp: s,
    onChange: c
  }), [b, $] = z(!1), g = _e(l), y = Es(t), E = k(!1), [S, N] = z(0);
  return q(() => {
    const P = d.current;
    if (P)
      return P.addEventListener(Vo, g), () => P.removeEventListener(Vo, g);
  }, [
    g
  ]), /* @__PURE__ */ h(tm, {
    scope: t,
    orientation: o,
    dir: p,
    loop: r,
    currentTabStopId: v,
    onItemFocus: ee(
      (P) => m(P),
      [
        m
      ]
    ),
    onItemShiftTab: ee(
      () => $(!0),
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
  }, /* @__PURE__ */ h(U.div, x({
    tabIndex: b || S === 0 ? -1 : 0,
    "data-orientation": o
  }, u, {
    ref: f,
    style: {
      outline: "none",
      ...e.style
    },
    onMouseDown: L(e.onMouseDown, () => {
      E.current = !0;
    }),
    onFocus: L(e.onFocus, (P) => {
      const W = !E.current;
      if (P.target === P.currentTarget && W && !b) {
        const Y = new CustomEvent(Vo, Qv);
        if (P.currentTarget.dispatchEvent(Y), !Y.defaultPrevented) {
          const X = y().filter(
            (I) => I.focusable
          ), H = X.find(
            (I) => I.active
          ), V = X.find(
            (I) => I.id === v
          ), M = [
            H,
            V,
            ...X
          ].filter(Boolean).map(
            (I) => I.ref.current
          );
          Ts(M);
        }
      }
      E.current = !1;
    }),
    onBlur: L(
      e.onBlur,
      () => $(!1)
    )
  })));
}), am = "RovingFocusGroupItem", im = /* @__PURE__ */ T((e, n) => {
  const { __scopeRovingFocusGroup: t, focusable: o = !0, active: r = !1, tabStopId: a, ...i } = e, s = De(), c = a || s, l = nm(am, t), u = l.currentTabStopId === c, d = Es(t), { onFocusableItemAdd: f, onFocusableItemRemove: p } = l;
  return q(() => {
    if (o)
      return f(), () => p();
  }, [
    o,
    f,
    p
  ]), /* @__PURE__ */ h(ir.ItemSlot, {
    scope: t,
    id: c,
    focusable: o,
    active: r
  }, /* @__PURE__ */ h(U.span, x({
    tabIndex: u ? 0 : -1,
    "data-orientation": l.orientation
  }, i, {
    ref: n,
    onMouseDown: L(e.onMouseDown, (v) => {
      o ? l.onItemFocus(c) : v.preventDefault();
    }),
    onFocus: L(
      e.onFocus,
      () => l.onItemFocus(c)
    ),
    onKeyDown: L(e.onKeyDown, (v) => {
      if (v.key === "Tab" && v.shiftKey) {
        l.onItemShiftTab();
        return;
      }
      if (v.target !== v.currentTarget)
        return;
      const m = lm(v, l.orientation, l.dir);
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
          $ = l.loop ? dm($, g + 1) : $.slice(g + 1);
        }
        setTimeout(
          () => Ts($)
        );
      }
    })
  })));
}), sm = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function cm(e, n) {
  return n !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function lm(e, n, t) {
  const o = cm(e.key, t);
  if (!(n === "vertical" && [
    "ArrowLeft",
    "ArrowRight"
  ].includes(o)) && !(n === "horizontal" && [
    "ArrowUp",
    "ArrowDown"
  ].includes(o)))
    return sm[o];
}
function Ts(e) {
  const n = document.activeElement;
  for (const t of e)
    if (t === n || (t.focus(), document.activeElement !== n))
      return;
}
function dm(e, n) {
  return e.map(
    (t, o) => e[(n + o) % e.length]
  );
}
const Lr = om, Fr = im, sr = [
  "Enter",
  " "
], um = [
  "ArrowDown",
  "PageUp",
  "Home"
], Ps = [
  "ArrowUp",
  "PageDown",
  "End"
], fm = [
  ...um,
  ...Ps
], pm = {
  ltr: [
    ...sr,
    "ArrowRight"
  ],
  rtl: [
    ...sr,
    "ArrowLeft"
  ]
}, vm = {
  ltr: [
    "ArrowLeft"
  ],
  rtl: [
    "ArrowRight"
  ]
}, mo = "Menu", [vn, mm, bm] = Zt(mo), [At, Ss] = xe(mo, [
  bm,
  $t,
  Jt
]), bo = $t(), Ds = Jt(), [Ms, yt] = At(mo), [hm, xn] = At(mo), gm = (e) => {
  const { __scopeMenu: n, open: t = !1, children: o, dir: r, onOpenChange: a, modal: i = !0 } = e, s = bo(n), [c, l] = z(null), u = k(!1), d = _e(a), f = Rt(r);
  return q(() => {
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
  }, []), /* @__PURE__ */ h(wn, s, /* @__PURE__ */ h(Ms, {
    scope: n,
    open: t,
    onOpenChange: d,
    content: c,
    onContentChange: l
  }, /* @__PURE__ */ h(hm, {
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
  }, o)));
}, Os = /* @__PURE__ */ T((e, n) => {
  const { __scopeMenu: t, ...o } = e, r = bo(t);
  return /* @__PURE__ */ h(po, x({}, r, o, {
    ref: n
  }));
}), Ns = "MenuPortal", [$m, Rs] = At(Ns, {
  forceMount: void 0
}), ym = (e) => {
  const { __scopeMenu: n, forceMount: t, children: o, container: r } = e, a = yt(Ns, n);
  return /* @__PURE__ */ h($m, {
    scope: n,
    forceMount: t
  }, /* @__PURE__ */ h(Me, {
    present: t || a.open
  }, /* @__PURE__ */ h($n, {
    asChild: !0,
    container: r
  }, o)));
}, He = "MenuContent", [wm, Wr] = At(He), xm = /* @__PURE__ */ T((e, n) => {
  const t = Rs(He, e.__scopeMenu), { forceMount: o = t.forceMount, ...r } = e, a = yt(He, e.__scopeMenu), i = xn(He, e.__scopeMenu);
  return /* @__PURE__ */ h(vn.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ h(Me, {
    present: o || a.open
  }, /* @__PURE__ */ h(vn.Slot, {
    scope: e.__scopeMenu
  }, i.modal ? /* @__PURE__ */ h(Cm, x({}, r, {
    ref: n
  })) : /* @__PURE__ */ h(_m, x({}, r, {
    ref: n
  })))));
}), Cm = /* @__PURE__ */ T((e, n) => {
  const t = yt(He, e.__scopeMenu), o = k(null), r = oe(n, o);
  return q(() => {
    const a = o.current;
    if (a)
      return lo(a);
  }, []), /* @__PURE__ */ h(jr, x({}, e, {
    ref: r,
    trapFocus: t.open,
    disableOutsidePointerEvents: t.open,
    disableOutsideScroll: !0,
    onFocusOutside: L(
      e.onFocusOutside,
      (a) => a.preventDefault(),
      {
        checkForDefaultPrevented: !1
      }
    ),
    onDismiss: () => t.onOpenChange(!1)
  }));
}), _m = /* @__PURE__ */ T((e, n) => {
  const t = yt(He, e.__scopeMenu);
  return /* @__PURE__ */ h(jr, x({}, e, {
    ref: n,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    disableOutsideScroll: !1,
    onDismiss: () => t.onOpenChange(!1)
  }));
}), jr = /* @__PURE__ */ T((e, n) => {
  const { __scopeMenu: t, loop: o = !1, trapFocus: r, onOpenAutoFocus: a, onCloseAutoFocus: i, disableOutsidePointerEvents: s, onEntryFocus: c, onEscapeKeyDown: l, onPointerDownOutside: u, onFocusOutside: d, onInteractOutside: f, onDismiss: p, disableOutsideScroll: v, ...m } = e, b = yt(He, t), $ = xn(He, t), g = bo(t), y = Ds(t), E = mm(t), [S, N] = z(null), P = k(null), W = oe(n, P, b.onContentChange), Y = k(0), X = k(""), H = k(0), V = k(null), G = k("right"), M = k(0), I = v ? co : Ot, F = v ? {
    as: ct,
    allowPinchZoom: !0
  } : void 0, A = (B) => {
    var te, ne;
    const de = X.current + B, ce = E().filter(
      (be) => !be.disabled
    ), we = document.activeElement, Pe = (te = ce.find(
      (be) => be.ref.current === we
    )) === null || te === void 0 ? void 0 : te.textValue, Se = ce.map(
      (be) => be.textValue
    ), Z = Ym(Se, de, Pe), le = (ne = ce.find(
      (be) => be.textValue === Z
    )) === null || ne === void 0 ? void 0 : ne.ref.current;
    (function be(ue) {
      X.current = ue, window.clearTimeout(Y.current), ue !== "" && (Y.current = window.setTimeout(
        () => be(""),
        1e3
      ));
    })(de), le && setTimeout(
      () => le.focus()
    );
  };
  q(() => () => window.clearTimeout(Y.current), []), io();
  const O = ee((B) => {
    var te, ne;
    return G.current === ((te = V.current) === null || te === void 0 ? void 0 : te.side) && Um(B, (ne = V.current) === null || ne === void 0 ? void 0 : ne.area);
  }, []);
  return /* @__PURE__ */ h(wm, {
    scope: t,
    searchRef: X,
    onItemEnter: ee((B) => {
      O(B) && B.preventDefault();
    }, [
      O
    ]),
    onItemLeave: ee((B) => {
      var te;
      O(B) || ((te = P.current) === null || te === void 0 || te.focus(), N(null));
    }, [
      O
    ]),
    onTriggerLeave: ee((B) => {
      O(B) && B.preventDefault();
    }, [
      O
    ]),
    pointerGraceTimerRef: H,
    onPointerGraceIntentChange: ee((B) => {
      V.current = B;
    }, [])
  }, /* @__PURE__ */ h(I, F, /* @__PURE__ */ h(ao, {
    asChild: !0,
    trapped: r,
    onMountAutoFocus: L(a, (B) => {
      var te;
      B.preventDefault(), (te = P.current) === null || te === void 0 || te.focus();
    }),
    onUnmountAutoFocus: i
  }, /* @__PURE__ */ h(Xt, {
    asChild: !0,
    disableOutsidePointerEvents: s,
    onEscapeKeyDown: l,
    onPointerDownOutside: u,
    onFocusOutside: d,
    onInteractOutside: f,
    onDismiss: p
  }, /* @__PURE__ */ h(Lr, x({
    asChild: !0
  }, y, {
    dir: $.dir,
    orientation: "vertical",
    loop: o,
    currentTabStopId: S,
    onCurrentTabStopIdChange: N,
    onEntryFocus: L(c, (B) => {
      $.isUsingKeyboardRef.current || B.preventDefault();
    })
  }), /* @__PURE__ */ h(vo, x({
    role: "menu",
    "aria-orientation": "vertical",
    "data-state": js(b.open),
    "data-radix-menu-content": "",
    dir: $.dir
  }, g, m, {
    ref: W,
    style: {
      outline: "none",
      ...m.style
    },
    onKeyDown: L(m.onKeyDown, (B) => {
      const ne = B.target.closest("[data-radix-menu-content]") === B.currentTarget, de = B.ctrlKey || B.altKey || B.metaKey, ce = B.key.length === 1;
      ne && (B.key === "Tab" && B.preventDefault(), !de && ce && A(B.key));
      const we = P.current;
      if (B.target !== we || !fm.includes(B.key))
        return;
      B.preventDefault();
      const Se = E().filter(
        (Z) => !Z.disabled
      ).map(
        (Z) => Z.ref.current
      );
      Ps.includes(B.key) && Se.reverse(), Vm(Se);
    }),
    onBlur: L(e.onBlur, (B) => {
      B.currentTarget.contains(B.target) || (window.clearTimeout(Y.current), X.current = "");
    }),
    onPointerMove: L(e.onPointerMove, mn((B) => {
      const te = B.target, ne = M.current !== B.clientX;
      if (B.currentTarget.contains(te) && ne) {
        const de = B.clientX > M.current ? "right" : "left";
        G.current = de, M.current = B.clientX;
      }
    }))
  })))))));
}), ks = /* @__PURE__ */ T((e, n) => {
  const { __scopeMenu: t, ...o } = e;
  return /* @__PURE__ */ h(U.div, x({
    role: "group"
  }, o, {
    ref: n
  }));
}), Em = /* @__PURE__ */ T((e, n) => {
  const { __scopeMenu: t, ...o } = e;
  return /* @__PURE__ */ h(U.div, x({}, o, {
    ref: n
  }));
}), cr = "MenuItem", Za = "menu.itemSelect", Vr = /* @__PURE__ */ T((e, n) => {
  const { disabled: t = !1, onSelect: o, ...r } = e, a = k(null), i = xn(cr, e.__scopeMenu), s = Wr(cr, e.__scopeMenu), c = oe(n, a), l = k(!1), u = () => {
    const d = a.current;
    if (!t && d) {
      const f = new CustomEvent(Za, {
        bubbles: !0,
        cancelable: !0
      });
      d.addEventListener(
        Za,
        (p) => o == null ? void 0 : o(p),
        {
          once: !0
        }
      ), $r(d, f), f.defaultPrevented ? l.current = !1 : i.onClose();
    }
  };
  return /* @__PURE__ */ h(As, x({}, r, {
    ref: c,
    disabled: t,
    onClick: L(e.onClick, u),
    onPointerDown: (d) => {
      var f;
      (f = e.onPointerDown) === null || f === void 0 || f.call(e, d), l.current = !0;
    },
    onPointerUp: L(e.onPointerUp, (d) => {
      var f;
      l.current || (f = d.currentTarget) === null || f === void 0 || f.click();
    }),
    onKeyDown: L(e.onKeyDown, (d) => {
      const f = s.searchRef.current !== "";
      t || f && d.key === " " || sr.includes(d.key) && (d.currentTarget.click(), d.preventDefault());
    })
  }));
}), As = /* @__PURE__ */ T((e, n) => {
  const { __scopeMenu: t, disabled: o = !1, textValue: r, ...a } = e, i = Wr(cr, t), s = Ds(t), c = k(null), l = oe(n, c), [u, d] = z(!1), [f, p] = z("");
  return q(() => {
    const v = c.current;
    if (v) {
      var m;
      p(((m = v.textContent) !== null && m !== void 0 ? m : "").trim());
    }
  }, [
    a.children
  ]), /* @__PURE__ */ h(vn.ItemSlot, {
    scope: t,
    disabled: o,
    textValue: r ?? f
  }, /* @__PURE__ */ h(Fr, x({
    asChild: !0
  }, s, {
    focusable: !o
  }), /* @__PURE__ */ h(U.div, x({
    role: "menuitem",
    "data-highlighted": u ? "" : void 0,
    "aria-disabled": o || void 0,
    "data-disabled": o ? "" : void 0
  }, a, {
    ref: l,
    onPointerMove: L(e.onPointerMove, mn((v) => {
      o ? i.onItemLeave(v) : (i.onItemEnter(v), v.defaultPrevented || v.currentTarget.focus());
    })),
    onPointerLeave: L(e.onPointerLeave, mn(
      (v) => i.onItemLeave(v)
    )),
    onFocus: L(
      e.onFocus,
      () => d(!0)
    ),
    onBlur: L(
      e.onBlur,
      () => d(!1)
    )
  }))));
}), Tm = /* @__PURE__ */ T((e, n) => {
  const { checked: t = !1, onCheckedChange: o, ...r } = e;
  return /* @__PURE__ */ h(Ls, {
    scope: e.__scopeMenu,
    checked: t
  }, /* @__PURE__ */ h(Vr, x({
    role: "menuitemcheckbox",
    "aria-checked": eo(t) ? "mixed" : t
  }, r, {
    ref: n,
    "data-state": Br(t),
    onSelect: L(
      r.onSelect,
      () => o == null ? void 0 : o(eo(t) ? !0 : !t),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), Pm = "MenuRadioGroup", [Sm, Dm] = At(Pm, {
  value: void 0,
  onValueChange: () => {
  }
}), Mm = /* @__PURE__ */ T((e, n) => {
  const { value: t, onValueChange: o, ...r } = e, a = _e(o);
  return /* @__PURE__ */ h(Sm, {
    scope: e.__scopeMenu,
    value: t,
    onValueChange: a
  }, /* @__PURE__ */ h(ks, x({}, r, {
    ref: n
  })));
}), Om = "MenuRadioItem", Nm = /* @__PURE__ */ T((e, n) => {
  const { value: t, ...o } = e, r = Dm(Om, e.__scopeMenu), a = t === r.value;
  return /* @__PURE__ */ h(Ls, {
    scope: e.__scopeMenu,
    checked: a
  }, /* @__PURE__ */ h(Vr, x({
    role: "menuitemradio",
    "aria-checked": a
  }, o, {
    ref: n,
    "data-state": Br(a),
    onSelect: L(o.onSelect, () => {
      var i;
      return (i = r.onValueChange) === null || i === void 0 ? void 0 : i.call(r, t);
    }, {
      checkForDefaultPrevented: !1
    })
  })));
}), Is = "MenuItemIndicator", [Ls, Rm] = At(Is, {
  checked: !1
}), km = /* @__PURE__ */ T((e, n) => {
  const { __scopeMenu: t, forceMount: o, ...r } = e, a = Rm(Is, t);
  return /* @__PURE__ */ h(Me, {
    present: o || eo(a.checked) || a.checked === !0
  }, /* @__PURE__ */ h(U.span, x({}, r, {
    ref: n,
    "data-state": Br(a.checked)
  })));
}), Am = /* @__PURE__ */ T((e, n) => {
  const { __scopeMenu: t, ...o } = e;
  return /* @__PURE__ */ h(U.div, x({
    role: "separator",
    "aria-orientation": "horizontal"
  }, o, {
    ref: n
  }));
}), Fs = "MenuSub", [Im, Ws] = At(Fs), Lm = (e) => {
  const { __scopeMenu: n, children: t, open: o = !1, onOpenChange: r } = e, a = yt(Fs, n), i = bo(n), [s, c] = z(null), [l, u] = z(null), d = _e(r);
  return q(() => (a.open === !1 && d(!1), () => d(!1)), [
    a.open,
    d
  ]), /* @__PURE__ */ h(wn, i, /* @__PURE__ */ h(Ms, {
    scope: n,
    open: o,
    onOpenChange: d,
    content: l,
    onContentChange: u
  }, /* @__PURE__ */ h(Im, {
    scope: n,
    contentId: De(),
    triggerId: De(),
    trigger: s,
    onTriggerChange: c
  }, t)));
}, Ln = "MenuSubTrigger", Fm = /* @__PURE__ */ T((e, n) => {
  const t = yt(Ln, e.__scopeMenu), o = xn(Ln, e.__scopeMenu), r = Ws(Ln, e.__scopeMenu), a = Wr(Ln, e.__scopeMenu), i = k(null), { pointerGraceTimerRef: s, onPointerGraceIntentChange: c } = a, l = {
    __scopeMenu: e.__scopeMenu
  }, u = ee(() => {
    i.current && window.clearTimeout(i.current), i.current = null;
  }, []);
  return q(
    () => u,
    [
      u
    ]
  ), q(() => {
    const d = s.current;
    return () => {
      window.clearTimeout(d), c(null);
    };
  }, [
    s,
    c
  ]), /* @__PURE__ */ h(Os, x({
    asChild: !0
  }, l), /* @__PURE__ */ h(As, x({
    id: r.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": t.open,
    "aria-controls": r.contentId,
    "data-state": js(t.open)
  }, e, {
    ref: ro(n, r.onTriggerChange),
    onClick: (d) => {
      var f;
      (f = e.onClick) === null || f === void 0 || f.call(e, d), !(e.disabled || d.defaultPrevented) && (d.currentTarget.focus(), t.open || t.onOpenChange(!0));
    },
    onPointerMove: L(e.onPointerMove, mn((d) => {
      a.onItemEnter(d), !d.defaultPrevented && !e.disabled && !t.open && !i.current && (a.onPointerGraceIntentChange(null), i.current = window.setTimeout(() => {
        t.onOpenChange(!0), u();
      }, 100));
    })),
    onPointerLeave: L(e.onPointerLeave, mn((d) => {
      var f;
      u();
      const p = (f = t.content) === null || f === void 0 ? void 0 : f.getBoundingClientRect();
      if (p) {
        var v;
        const m = (v = t.content) === null || v === void 0 ? void 0 : v.dataset.side, b = m === "right", $ = b ? -5 : 5, g = p[b ? "left" : "right"], y = p[b ? "right" : "left"];
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
              x: y,
              y: p.top
            },
            {
              x: y,
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
    onKeyDown: L(e.onKeyDown, (d) => {
      const f = a.searchRef.current !== "";
      if (!(e.disabled || f && d.key === " ") && pm[o.dir].includes(d.key)) {
        var p;
        t.onOpenChange(!0), (p = t.content) === null || p === void 0 || p.focus(), d.preventDefault();
      }
    })
  })));
}), Wm = "MenuSubContent", jm = /* @__PURE__ */ T((e, n) => {
  const t = Rs(He, e.__scopeMenu), { forceMount: o = t.forceMount, ...r } = e, a = yt(He, e.__scopeMenu), i = xn(He, e.__scopeMenu), s = Ws(Wm, e.__scopeMenu), c = k(null), l = oe(n, c);
  return /* @__PURE__ */ h(vn.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ h(Me, {
    present: o || a.open
  }, /* @__PURE__ */ h(vn.Slot, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ h(jr, x({
    id: s.contentId,
    "aria-labelledby": s.triggerId
  }, r, {
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
    onFocusOutside: L(e.onFocusOutside, (u) => {
      u.target !== s.trigger && a.onOpenChange(!1);
    }),
    onEscapeKeyDown: L(e.onEscapeKeyDown, (u) => {
      i.onClose(), u.preventDefault();
    }),
    onKeyDown: L(e.onKeyDown, (u) => {
      const d = u.currentTarget.contains(u.target), f = vm[i.dir].includes(u.key);
      if (d && f) {
        var p;
        a.onOpenChange(!1), (p = s.trigger) === null || p === void 0 || p.focus(), u.preventDefault();
      }
    })
  })))));
});
function js(e) {
  return e ? "open" : "closed";
}
function eo(e) {
  return e === "indeterminate";
}
function Br(e) {
  return eo(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Vm(e) {
  const n = document.activeElement;
  for (const t of e)
    if (t === n || (t.focus(), document.activeElement !== n))
      return;
}
function Bm(e, n) {
  return e.map(
    (t, o) => e[(n + o) % e.length]
  );
}
function Ym(e, n, t) {
  const r = n.length > 1 && Array.from(n).every(
    (l) => l === n[0]
  ) ? n[0] : n, a = t ? e.indexOf(t) : -1;
  let i = Bm(e, Math.max(a, 0));
  r.length === 1 && (i = i.filter(
    (l) => l !== t
  ));
  const c = i.find(
    (l) => l.toLowerCase().startsWith(r.toLowerCase())
  );
  return c !== t ? c : void 0;
}
function Hm(e, n) {
  const { x: t, y: o } = e;
  let r = !1;
  for (let a = 0, i = n.length - 1; a < n.length; i = a++) {
    const s = n[a].x, c = n[a].y, l = n[i].x, u = n[i].y;
    c > o != u > o && t < (l - s) * (o - c) / (u - c) + s && (r = !r);
  }
  return r;
}
function Um(e, n) {
  if (!n)
    return !1;
  const t = {
    x: e.clientX,
    y: e.clientY
  };
  return Hm(t, n);
}
function mn(e) {
  return (n) => n.pointerType === "mouse" ? e(n) : void 0;
}
const Km = gm, Gm = Os, zm = ym, qm = xm, Xm = ks, Zm = Em, Qm = Vr, Jm = Tm, eb = Mm, tb = Nm, nb = km, ob = Am, rb = Lm, ab = Fm, ib = jm, Vs = "DropdownMenu", [sb, bw] = xe(Vs, [
  Ss
]), Ne = Ss(), [cb, Bs] = sb(Vs), lb = (e) => {
  const { __scopeDropdownMenu: n, children: t, dir: o, open: r, defaultOpen: a, onOpenChange: i, modal: s = !0 } = e, c = Ne(n), l = k(null), [u = !1, d] = Ee({
    prop: r,
    defaultProp: a,
    onChange: i
  });
  return /* @__PURE__ */ h(cb, {
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
  }, /* @__PURE__ */ h(Km, x({}, c, {
    open: u,
    onOpenChange: d,
    dir: o,
    modal: s
  }), t));
}, db = "DropdownMenuTrigger", ub = /* @__PURE__ */ T((e, n) => {
  const { __scopeDropdownMenu: t, disabled: o = !1, ...r } = e, a = Bs(db, t), i = Ne(t);
  return /* @__PURE__ */ h(Gm, x({
    asChild: !0
  }, i), /* @__PURE__ */ h(U.button, x({
    type: "button",
    id: a.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": a.open,
    "aria-controls": a.open ? a.contentId : void 0,
    "data-state": a.open ? "open" : "closed",
    "data-disabled": o ? "" : void 0,
    disabled: o
  }, r, {
    ref: ro(n, a.triggerRef),
    onPointerDown: L(e.onPointerDown, (s) => {
      !o && s.button === 0 && s.ctrlKey === !1 && (a.onOpenToggle(), a.open || s.preventDefault());
    }),
    onKeyDown: L(e.onKeyDown, (s) => {
      o || ([
        "Enter",
        " "
      ].includes(s.key) && a.onOpenToggle(), s.key === "ArrowDown" && a.onOpenChange(!0), [
        "Enter",
        " ",
        "ArrowDown"
      ].includes(s.key) && s.preventDefault());
    })
  })));
}), fb = (e) => {
  const { __scopeDropdownMenu: n, ...t } = e, o = Ne(n);
  return /* @__PURE__ */ h(zm, x({}, o, t));
}, pb = "DropdownMenuContent", vb = /* @__PURE__ */ T((e, n) => {
  const { __scopeDropdownMenu: t, ...o } = e, r = Bs(pb, t), a = Ne(t), i = k(!1);
  return /* @__PURE__ */ h(qm, x({
    id: r.contentId,
    "aria-labelledby": r.triggerId
  }, a, o, {
    ref: n,
    onCloseAutoFocus: L(e.onCloseAutoFocus, (s) => {
      var c;
      i.current || (c = r.triggerRef.current) === null || c === void 0 || c.focus(), i.current = !1, s.preventDefault();
    }),
    onInteractOutside: L(e.onInteractOutside, (s) => {
      const c = s.detail.originalEvent, l = c.button === 0 && c.ctrlKey === !0, u = c.button === 2 || l;
      (!r.modal || u) && (i.current = !0);
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
}), mb = /* @__PURE__ */ T((e, n) => {
  const { __scopeDropdownMenu: t, ...o } = e, r = Ne(t);
  return /* @__PURE__ */ h(Xm, x({}, r, o, {
    ref: n
  }));
}), bb = /* @__PURE__ */ T((e, n) => {
  const { __scopeDropdownMenu: t, ...o } = e, r = Ne(t);
  return /* @__PURE__ */ h(Zm, x({}, r, o, {
    ref: n
  }));
}), hb = /* @__PURE__ */ T((e, n) => {
  const { __scopeDropdownMenu: t, ...o } = e, r = Ne(t);
  return /* @__PURE__ */ h(Qm, x({}, r, o, {
    ref: n
  }));
}), gb = /* @__PURE__ */ T((e, n) => {
  const { __scopeDropdownMenu: t, ...o } = e, r = Ne(t);
  return /* @__PURE__ */ h(Jm, x({}, r, o, {
    ref: n
  }));
}), $b = /* @__PURE__ */ T((e, n) => {
  const { __scopeDropdownMenu: t, ...o } = e, r = Ne(t);
  return /* @__PURE__ */ h(eb, x({}, r, o, {
    ref: n
  }));
}), yb = /* @__PURE__ */ T((e, n) => {
  const { __scopeDropdownMenu: t, ...o } = e, r = Ne(t);
  return /* @__PURE__ */ h(tb, x({}, r, o, {
    ref: n
  }));
}), wb = /* @__PURE__ */ T((e, n) => {
  const { __scopeDropdownMenu: t, ...o } = e, r = Ne(t);
  return /* @__PURE__ */ h(nb, x({}, r, o, {
    ref: n
  }));
}), xb = /* @__PURE__ */ T((e, n) => {
  const { __scopeDropdownMenu: t, ...o } = e, r = Ne(t);
  return /* @__PURE__ */ h(ob, x({}, r, o, {
    ref: n
  }));
}), Cb = (e) => {
  const { __scopeDropdownMenu: n, children: t, open: o, onOpenChange: r, defaultOpen: a } = e, i = Ne(n), [s = !1, c] = Ee({
    prop: o,
    defaultProp: a,
    onChange: r
  });
  return /* @__PURE__ */ h(rb, x({}, i, {
    open: s,
    onOpenChange: c
  }), t);
}, _b = /* @__PURE__ */ T((e, n) => {
  const { __scopeDropdownMenu: t, ...o } = e, r = Ne(t);
  return /* @__PURE__ */ h(ab, x({}, r, o, {
    ref: n
  }));
}), Eb = /* @__PURE__ */ T((e, n) => {
  const { __scopeDropdownMenu: t, ...o } = e, r = Ne(t);
  return /* @__PURE__ */ h(ib, x({}, r, o, {
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
}), Tb = lb, Pb = ub, Ys = fb, Hs = vb, Sb = mb, Us = bb, Ks = hb, Gs = gb, Db = $b, zs = yb, qs = wb, Xs = xb, Mb = Cb, Zs = _b, Qs = Eb, hw = Tb, gw = Sb, $w = Ys, yw = Mb, ww = Db, Cn = "~pl-6", en = "~leading-6", xw = w.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ _.jsx(
  Pb,
  {
    ref: t,
    className: R(
      "tw-reset data-[disabled]:~opacity-50",
      en,
      e
    ),
    ...n
  }
)), Ob = w.forwardRef(({ className: e, inset: n, children: t, ...o }, r) => /* @__PURE__ */ _.jsxs(
  Zs,
  {
    ref: r,
    className: R(
      "~flex ~cursor-default ~select-none ~items-center ~rounded-sm ~px-2 ~py-1.5 ~outline-none focus:~bg-accent data-[state=open]:~bg-accent",
      en,
      n && Cn,
      e
    ),
    ...o,
    children: [
      t,
      /* @__PURE__ */ _.jsx(ts, { className: "~ml-auto ~h-4 ~w-4" })
    ]
  }
));
Ob.displayName = Zs.displayName;
const Nb = w.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ _.jsx(
  Qs,
  {
    ref: t,
    className: R(
      "~z-50 ~min-w-[8em] ~overflow-hidden ~rounded-md ~border ~bg-popover ~p-1 ~text-popover-foreground ~shadow-lg",
      "data-[state=open]:~animate-in data-[state=open]:~fade-in-0 data-[state=open]:~zoom-in-95",
      "data-[state=closed]:~animate-out data-[state=closed]:~fade-out-0 data-[state=closed]:~zoom-out-95",
      "data-[side=bottom]:~slide-in-from-top-2 data-[side=left]:~slide-in-from-right-2 data-[side=right]:~slide-in-from-left-2 data-[side=top]:~slide-in-from-bottom-2",
      e
    ),
    ...n
  }
));
Nb.displayName = Qs.displayName;
const Rb = w.forwardRef(
  ({
    className: e,
    sideOffset: n = 4,
    align: t = "start",
    collisionPadding: o = 10,
    ...r
  }, a) => /* @__PURE__ */ _.jsx(Ys, { children: /* @__PURE__ */ _.jsx(
    Hs,
    {
      ref: a,
      sideOffset: n,
      collisionPadding: o,
      align: t,
      className: R(
        "tw-reset ~z-50 ~min-w-[8em] ~overflow-hidden ~rounded-md ~border ~bg-popover ~p-1 ~text-popover-foreground ~shadow-md",
        "data-[state=open]:~animate-in data-[state=open]:~fade-in-0 data-[state=open]:~zoom-in-95",
        "data-[state=closed]:~animate-out data-[state=closed]:~fade-out-0 data-[state=closed]:~zoom-out-95",
        "data-[side=bottom]:~slide-in-from-top-2 data-[side=left]:~slide-in-from-right-2 data-[side=right]:~slide-in-from-left-2 data-[side=top]:~slide-in-from-bottom-2",
        e
      ),
      ...r
    }
  ) })
);
Rb.displayName = Hs.displayName;
const kb = w.forwardRef(({ className: e, inset: n, ...t }, o) => /* @__PURE__ */ _.jsx(
  Ks,
  {
    ref: o,
    className: R(
      "~relative ~flex ~cursor-pointer ~select-none ~items-center ~rounded-sm ~px-2 ~py-1.5 ~outline-none ~transition-colors",
      "focus:~bg-accent focus:~text-accent-foreground",
      "data-[disabled]:~pointer-events-none data-[disabled]:~opacity-50",
      en,
      n && Cn,
      e
    ),
    ...t
  }
));
kb.displayName = Ks.displayName;
const Ab = w.forwardRef(({ className: e, children: n, checked: t, ...o }, r) => /* @__PURE__ */ _.jsxs(
  Gs,
  {
    ref: r,
    className: R(
      "~relative ~flex ~cursor-pointer ~select-none ~items-center ~rounded-sm ~py-1.5 ~pr-2 ~outline-none ~transition-colors",
      "focus:~bg-accent focus:~text-accent-foreground",
      "data-[disabled]:~pointer-events-none data-[disabled]:~opacity-50",
      en,
      Cn,
      e
    ),
    checked: t,
    ...o,
    children: [
      /* @__PURE__ */ _.jsx("span", { className: "~absolute ~left-1 ~flex ~h-3.5 ~w-3.5 ~items-center ~justify-center", children: /* @__PURE__ */ _.jsx(qs, { children: /* @__PURE__ */ _.jsx(Sr, { className: "~h-4 ~w-4" }) }) }),
      n
    ]
  }
));
Ab.displayName = Gs.displayName;
const Ib = w.forwardRef(({ className: e, children: n, ...t }, o) => /* @__PURE__ */ _.jsxs(
  zs,
  {
    ref: o,
    className: R(
      "~relative ~flex ~cursor-pointer ~select-none ~items-center ~rounded-sm ~py-1.5 ~pr-2 ~outline-none ~transition-colors",
      "focus:~bg-accent focus:~text-accent-foreground",
      "data-[disabled]:~pointer-events-none data-[disabled]:~opacity-50",
      en,
      Cn,
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ _.jsx("span", { className: "~absolute ~left-1 ~flex ~h-3.5 ~w-3.5 ~items-center ~justify-center", children: /* @__PURE__ */ _.jsx(qs, { children: /* @__PURE__ */ _.jsx(Bf, { className: "~h-4 ~w-4 ~fill-current" }) }) }),
      n
    ]
  }
));
Ib.displayName = zs.displayName;
const Lb = w.forwardRef(({ className: e, inset: n, ...t }, o) => /* @__PURE__ */ _.jsx(
  Us,
  {
    ref: o,
    className: R(
      "~px-2 ~py-1.5 ~font-medium",
      en,
      n && Cn,
      e
    ),
    ...t
  }
));
Lb.displayName = Us.displayName;
const Fb = w.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ _.jsx(
  Xs,
  {
    ref: t,
    className: R("~-mx-1 ~my-1 ~h-px ~bg-border", e),
    ...n
  }
));
Fb.displayName = Xs.displayName;
const Wb = ({
  className: e,
  ...n
}) => /* @__PURE__ */ _.jsx(
  "span",
  {
    className: R(
      "~ml-auto ~text-xs ~tracking-widest ~opacity-60",
      e
    ),
    ...n
  }
);
Wb.displayName = "DropdownMenuShortcut";
function _n(e) {
  const n = k({
    value: e,
    previous: e
  });
  return Xe(() => (n.current.value !== e && (n.current.previous = n.current.value, n.current.value = e), n.current.previous), [
    e
  ]);
}
const Js = "Radio", [jb, ec] = xe(Js), [Vb, Bb] = jb(Js), Yb = /* @__PURE__ */ T((e, n) => {
  const { __scopeRadio: t, name: o, checked: r = !1, required: a, disabled: i, value: s = "on", onCheck: c, ...l } = e, [u, d] = z(null), f = oe(
    n,
    (m) => d(m)
  ), p = k(!1), v = u ? !!u.closest("form") : !0;
  return /* @__PURE__ */ h(Vb, {
    scope: t,
    checked: r,
    disabled: i
  }, /* @__PURE__ */ h(U.button, x({
    type: "button",
    role: "radio",
    "aria-checked": r,
    "data-state": tc(r),
    "data-disabled": i ? "" : void 0,
    disabled: i,
    value: s
  }, l, {
    ref: f,
    onClick: L(e.onClick, (m) => {
      r || c == null || c(), v && (p.current = m.isPropagationStopped(), p.current || m.stopPropagation());
    })
  })), v && /* @__PURE__ */ h(Kb, {
    control: u,
    bubbles: !p.current,
    name: o,
    value: s,
    checked: r,
    required: a,
    disabled: i,
    style: {
      transform: "translateX(-100%)"
    }
  }));
}), Hb = "RadioIndicator", Ub = /* @__PURE__ */ T((e, n) => {
  const { __scopeRadio: t, forceMount: o, ...r } = e, a = Bb(Hb, t);
  return /* @__PURE__ */ h(Me, {
    present: o || a.checked
  }, /* @__PURE__ */ h(U.span, x({
    "data-state": tc(a.checked),
    "data-disabled": a.disabled ? "" : void 0
  }, r, {
    ref: n
  })));
}), Kb = (e) => {
  const { control: n, checked: t, bubbles: o = !0, ...r } = e, a = k(null), i = _n(t), s = yn(n);
  return q(() => {
    const c = a.current, l = window.HTMLInputElement.prototype, d = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (i !== t && d) {
      const f = new Event("click", {
        bubbles: o
      });
      d.call(c, t), c.dispatchEvent(f);
    }
  }, [
    i,
    t,
    o
  ]), /* @__PURE__ */ h("input", x({
    type: "radio",
    "aria-hidden": !0,
    defaultChecked: t
  }, r, {
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
function tc(e) {
  return e ? "checked" : "unchecked";
}
const Gb = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
], nc = "RadioGroup", [zb, Cw] = xe(nc, [
  Jt,
  ec
]), oc = Jt(), rc = ec(), [qb, Xb] = zb(nc), Zb = /* @__PURE__ */ T((e, n) => {
  const { __scopeRadioGroup: t, name: o, defaultValue: r, value: a, required: i = !1, disabled: s = !1, orientation: c, dir: l, loop: u = !0, onValueChange: d, ...f } = e, p = oc(t), v = Rt(l), [m, b] = Ee({
    prop: a,
    defaultProp: r,
    onChange: d
  });
  return /* @__PURE__ */ h(qb, {
    scope: t,
    name: o,
    required: i,
    disabled: s,
    value: m,
    onValueChange: b
  }, /* @__PURE__ */ h(Lr, x({
    asChild: !0
  }, p, {
    orientation: c,
    dir: v,
    loop: u
  }), /* @__PURE__ */ h(U.div, x({
    role: "radiogroup",
    "aria-required": i,
    "aria-orientation": c,
    "data-disabled": s ? "" : void 0,
    dir: v
  }, f, {
    ref: n
  }))));
}), Qb = "RadioGroupItem", Jb = /* @__PURE__ */ T((e, n) => {
  const { __scopeRadioGroup: t, disabled: o, ...r } = e, a = Xb(Qb, t), i = a.disabled || o, s = oc(t), c = rc(t), l = k(null), u = oe(n, l), d = a.value === r.value, f = k(!1);
  return q(() => {
    const p = (m) => {
      Gb.includes(m.key) && (f.current = !0);
    }, v = () => f.current = !1;
    return document.addEventListener("keydown", p), document.addEventListener("keyup", v), () => {
      document.removeEventListener("keydown", p), document.removeEventListener("keyup", v);
    };
  }, []), /* @__PURE__ */ h(Fr, x({
    asChild: !0
  }, s, {
    focusable: !i,
    active: d
  }), /* @__PURE__ */ h(Yb, x({
    disabled: i,
    required: a.required,
    checked: d
  }, c, r, {
    name: a.name,
    ref: u,
    onCheck: () => a.onValueChange(r.value),
    onKeyDown: L((p) => {
      p.key === "Enter" && p.preventDefault();
    }),
    onFocus: L(r.onFocus, () => {
      var p;
      f.current && ((p = l.current) === null || p === void 0 || p.click());
    })
  })));
}), e0 = /* @__PURE__ */ T((e, n) => {
  const { __scopeRadioGroup: t, ...o } = e, r = rc(t);
  return /* @__PURE__ */ h(Ub, x({}, r, o, {
    ref: n
  }));
}), ac = Zb, ic = Jb, t0 = e0, n0 = w.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ _.jsx(
  ac,
  {
    className: R("tw-reset ~grid ~gap-2", e),
    ...n,
    ref: t
  }
));
n0.displayName = ac.displayName;
const o0 = w.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ _.jsx(
  ic,
  {
    ref: t,
    className: R(
      "~group ~aspect-square ~h-5 ~w-5 ~rounded-full ~border-2 ~border-input ~text-primary ~shadow",
      "focus:~outline-none focus-visible:~ring-1 focus-visible:~ring-ring",
      "disabled:~cursor-not-allowed disabled:~opacity-50",
      'data-[state="checked"]:~border-primary',
      e
    ),
    ...n,
    children: /* @__PURE__ */ _.jsx(t0, { className: "~flex ~items-center ~justify-center", children: /* @__PURE__ */ _.jsx(
      "div",
      {
        className: R(
          "~aspect-square ~h-3 ~w-3 ~rounded-full ~bg-primary",
          'group-data-[state="checked"]:~animate-in group-data-[state="checked"]:~zoom-in-75'
        )
      }
    ) })
  }
));
o0.displayName = ic.displayName;
const sc = "Checkbox", [r0, _w] = xe(sc), [a0, i0] = r0(sc), s0 = /* @__PURE__ */ T((e, n) => {
  const { __scopeCheckbox: t, name: o, checked: r, defaultChecked: a, required: i, disabled: s, value: c = "on", onCheckedChange: l, ...u } = e, [d, f] = z(null), p = oe(
    n,
    (y) => f(y)
  ), v = k(!1), m = d ? !!d.closest("form") : !0, [b = !1, $] = Ee({
    prop: r,
    defaultProp: a,
    onChange: l
  }), g = k(b);
  return q(() => {
    const y = d == null ? void 0 : d.form;
    if (y) {
      const E = () => $(g.current);
      return y.addEventListener("reset", E), () => y.removeEventListener("reset", E);
    }
  }, [
    d,
    $
  ]), /* @__PURE__ */ h(a0, {
    scope: t,
    state: b,
    disabled: s
  }, /* @__PURE__ */ h(U.button, x({
    type: "button",
    role: "checkbox",
    "aria-checked": St(b) ? "mixed" : b,
    "aria-required": i,
    "data-state": cc(b),
    "data-disabled": s ? "" : void 0,
    disabled: s,
    value: c
  }, u, {
    ref: p,
    onKeyDown: L(e.onKeyDown, (y) => {
      y.key === "Enter" && y.preventDefault();
    }),
    onClick: L(e.onClick, (y) => {
      $(
        (E) => St(E) ? !0 : !E
      ), m && (v.current = y.isPropagationStopped(), v.current || y.stopPropagation());
    })
  })), m && /* @__PURE__ */ h(d0, {
    control: d,
    bubbles: !v.current,
    name: o,
    value: c,
    checked: b,
    required: i,
    disabled: s,
    style: {
      transform: "translateX(-100%)"
    }
  }));
}), c0 = "CheckboxIndicator", l0 = /* @__PURE__ */ T((e, n) => {
  const { __scopeCheckbox: t, forceMount: o, ...r } = e, a = i0(c0, t);
  return /* @__PURE__ */ h(Me, {
    present: o || St(a.state) || a.state === !0
  }, /* @__PURE__ */ h(U.span, x({
    "data-state": cc(a.state),
    "data-disabled": a.disabled ? "" : void 0
  }, r, {
    ref: n,
    style: {
      pointerEvents: "none",
      ...e.style
    }
  })));
}), d0 = (e) => {
  const { control: n, checked: t, bubbles: o = !0, ...r } = e, a = k(null), i = _n(t), s = yn(n);
  return q(() => {
    const c = a.current, l = window.HTMLInputElement.prototype, d = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (i !== t && d) {
      const f = new Event("click", {
        bubbles: o
      });
      c.indeterminate = St(t), d.call(c, St(t) ? !1 : t), c.dispatchEvent(f);
    }
  }, [
    i,
    t,
    o
  ]), /* @__PURE__ */ h("input", x({
    type: "checkbox",
    "aria-hidden": !0,
    defaultChecked: St(t) ? !1 : t
  }, r, {
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
function St(e) {
  return e === "indeterminate";
}
function cc(e) {
  return St(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const lc = s0, u0 = l0, f0 = D.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ _.jsx(
  lc,
  {
    ref: t,
    className: R(
      "tw-reset ~peer ~h-4 ~w-4 ~shrink-0 ~rounded-sm ~border ~border-primary ~shadow",
      "focus-visible:~outline-none focus-visible:~ring-1 focus-visible:~ring-ring",
      "disabled:~cursor-not-allowed disabled:~opacity-50",
      "data-[state=checked]:~bg-primary data-[state=checked]:~text-primary-foreground",
      e
    ),
    ...n,
    children: /* @__PURE__ */ _.jsx(
      u0,
      {
        className: R(
          "~flex ~h-full ~w-full ~items-center ~justify-center ~text-current"
        ),
        children: /* @__PURE__ */ _.jsx(Sr, { className: "~h-4 ~w-4" })
      }
    )
  }
));
f0.displayName = lc.displayName;
const dc = "Collapsible", [p0, uc] = xe(dc), [v0, Yr] = p0(dc), m0 = /* @__PURE__ */ T((e, n) => {
  const { __scopeCollapsible: t, open: o, defaultOpen: r, disabled: a, onOpenChange: i, ...s } = e, [c = !1, l] = Ee({
    prop: o,
    defaultProp: r,
    onChange: i
  });
  return /* @__PURE__ */ h(v0, {
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
  }, /* @__PURE__ */ h(U.div, x({
    "data-state": Hr(c),
    "data-disabled": a ? "" : void 0
  }, s, {
    ref: n
  })));
}), b0 = "CollapsibleTrigger", h0 = /* @__PURE__ */ T((e, n) => {
  const { __scopeCollapsible: t, ...o } = e, r = Yr(b0, t);
  return /* @__PURE__ */ h(U.button, x({
    type: "button",
    "aria-controls": r.contentId,
    "aria-expanded": r.open || !1,
    "data-state": Hr(r.open),
    "data-disabled": r.disabled ? "" : void 0,
    disabled: r.disabled
  }, o, {
    ref: n,
    onClick: L(e.onClick, r.onOpenToggle)
  }));
}), fc = "CollapsibleContent", g0 = /* @__PURE__ */ T((e, n) => {
  const { forceMount: t, ...o } = e, r = Yr(fc, e.__scopeCollapsible);
  return /* @__PURE__ */ h(
    Me,
    {
      present: t || r.open
    },
    ({ present: a }) => /* @__PURE__ */ h($0, x({}, o, {
      ref: n,
      present: a
    }))
  );
}), $0 = /* @__PURE__ */ T((e, n) => {
  const { __scopeCollapsible: t, present: o, children: r, ...a } = e, i = Yr(fc, t), [s, c] = z(o), l = k(null), u = oe(n, l), d = k(0), f = d.current, p = k(0), v = p.current, m = i.open || s, b = k(m), $ = k();
  return q(() => {
    const g = requestAnimationFrame(
      () => b.current = !1
    );
    return () => cancelAnimationFrame(g);
  }, []), Ie(() => {
    const g = l.current;
    if (g) {
      $.current = $.current || {
        transitionDuration: g.style.transitionDuration,
        animationName: g.style.animationName
      }, g.style.transitionDuration = "0s", g.style.animationName = "none";
      const y = g.getBoundingClientRect();
      d.current = y.height, p.current = y.width, b.current || (g.style.transitionDuration = $.current.transitionDuration, g.style.animationName = $.current.animationName), c(o);
    }
  }, [
    i.open,
    o
  ]), /* @__PURE__ */ h(U.div, x({
    "data-state": Hr(i.open),
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
  }), m && r);
});
function Hr(e) {
  return e ? "open" : "closed";
}
const y0 = m0, w0 = h0, x0 = g0, wt = "Accordion", C0 = [
  "Home",
  "End",
  "ArrowDown",
  "ArrowUp",
  "ArrowLeft",
  "ArrowRight"
], [Ur, _0, E0] = Zt(wt), [ho, Ew] = xe(wt, [
  E0,
  uc
]), Kr = uc(), pc = /* @__PURE__ */ w.forwardRef((e, n) => {
  const { type: t, ...o } = e, r = o, a = o;
  return /* @__PURE__ */ w.createElement(Ur.Provider, {
    scope: e.__scopeAccordion
  }, t === "multiple" ? /* @__PURE__ */ w.createElement(D0, x({}, a, {
    ref: n
  })) : /* @__PURE__ */ w.createElement(S0, x({}, r, {
    ref: n
  })));
});
pc.propTypes = {
  type(e) {
    const n = e.value || e.defaultValue;
    return e.type && ![
      "single",
      "multiple"
    ].includes(e.type) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`.") : e.type === "multiple" && typeof n == "string" ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`.") : e.type === "single" && Array.isArray(n) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`.") : null;
  }
};
const [vc, T0] = ho(wt), [mc, P0] = ho(wt, {
  collapsible: !1
}), S0 = /* @__PURE__ */ w.forwardRef((e, n) => {
  const { value: t, defaultValue: o, onValueChange: r = () => {
  }, collapsible: a = !1, ...i } = e, [s, c] = Ee({
    prop: t,
    defaultProp: o,
    onChange: r
  });
  return /* @__PURE__ */ w.createElement(vc, {
    scope: e.__scopeAccordion,
    value: s ? [
      s
    ] : [],
    onItemOpen: c,
    onItemClose: w.useCallback(
      () => a && c(""),
      [
        a,
        c
      ]
    )
  }, /* @__PURE__ */ w.createElement(mc, {
    scope: e.__scopeAccordion,
    collapsible: a
  }, /* @__PURE__ */ w.createElement(bc, x({}, i, {
    ref: n
  }))));
}), D0 = /* @__PURE__ */ w.forwardRef((e, n) => {
  const { value: t, defaultValue: o, onValueChange: r = () => {
  }, ...a } = e, [i = [], s] = Ee({
    prop: t,
    defaultProp: o,
    onChange: r
  }), c = w.useCallback(
    (u) => s(
      (d = []) => [
        ...d,
        u
      ]
    ),
    [
      s
    ]
  ), l = w.useCallback(
    (u) => s(
      (d = []) => d.filter(
        (f) => f !== u
      )
    ),
    [
      s
    ]
  );
  return /* @__PURE__ */ w.createElement(vc, {
    scope: e.__scopeAccordion,
    value: i,
    onItemOpen: c,
    onItemClose: l
  }, /* @__PURE__ */ w.createElement(mc, {
    scope: e.__scopeAccordion,
    collapsible: !0
  }, /* @__PURE__ */ w.createElement(bc, x({}, a, {
    ref: n
  }))));
}), [M0, go] = ho(wt), bc = /* @__PURE__ */ w.forwardRef((e, n) => {
  const { __scopeAccordion: t, disabled: o, dir: r, orientation: a = "vertical", ...i } = e, s = w.useRef(null), c = oe(s, n), l = _0(t), d = Rt(r) === "ltr", f = L(e.onKeyDown, (p) => {
    var v;
    if (!C0.includes(p.key))
      return;
    const m = p.target, b = l().filter((Y) => {
      var X;
      return !((X = Y.ref.current) !== null && X !== void 0 && X.disabled);
    }), $ = b.findIndex(
      (Y) => Y.ref.current === m
    ), g = b.length;
    if ($ === -1)
      return;
    p.preventDefault();
    let y = $;
    const E = 0, S = g - 1, N = () => {
      y = $ + 1, y > S && (y = E);
    }, P = () => {
      y = $ - 1, y < E && (y = S);
    };
    switch (p.key) {
      case "Home":
        y = E;
        break;
      case "End":
        y = S;
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
    const W = y % g;
    (v = b[W].ref.current) === null || v === void 0 || v.focus();
  });
  return /* @__PURE__ */ w.createElement(M0, {
    scope: t,
    disabled: o,
    direction: r,
    orientation: a
  }, /* @__PURE__ */ w.createElement(Ur.Slot, {
    scope: t
  }, /* @__PURE__ */ w.createElement(U.div, x({}, i, {
    "data-orientation": a,
    ref: c,
    onKeyDown: o ? void 0 : f
  }))));
}), lr = "AccordionItem", [O0, Gr] = ho(lr), N0 = /* @__PURE__ */ w.forwardRef((e, n) => {
  const { __scopeAccordion: t, value: o, ...r } = e, a = go(lr, t), i = T0(lr, t), s = Kr(t), c = De(), l = o && i.value.includes(o) || !1, u = a.disabled || e.disabled;
  return /* @__PURE__ */ w.createElement(O0, {
    scope: t,
    open: l,
    disabled: u,
    triggerId: c
  }, /* @__PURE__ */ w.createElement(y0, x({
    "data-orientation": a.orientation,
    "data-state": hc(l)
  }, s, r, {
    ref: n,
    disabled: u,
    open: l,
    onOpenChange: (d) => {
      d ? i.onItemOpen(o) : i.onItemClose(o);
    }
  })));
}), R0 = "AccordionHeader", k0 = /* @__PURE__ */ w.forwardRef((e, n) => {
  const { __scopeAccordion: t, ...o } = e, r = go(wt, t), a = Gr(R0, t);
  return /* @__PURE__ */ w.createElement(U.h3, x({
    "data-orientation": r.orientation,
    "data-state": hc(a.open),
    "data-disabled": a.disabled ? "" : void 0
  }, o, {
    ref: n
  }));
}), Qa = "AccordionTrigger", A0 = /* @__PURE__ */ w.forwardRef((e, n) => {
  const { __scopeAccordion: t, ...o } = e, r = go(wt, t), a = Gr(Qa, t), i = P0(Qa, t), s = Kr(t);
  return /* @__PURE__ */ w.createElement(Ur.ItemSlot, {
    scope: t
  }, /* @__PURE__ */ w.createElement(w0, x({
    "aria-disabled": a.open && !i.collapsible || void 0,
    "data-orientation": r.orientation,
    id: a.triggerId
  }, s, o, {
    ref: n
  })));
}), I0 = "AccordionContent", L0 = /* @__PURE__ */ w.forwardRef((e, n) => {
  const { __scopeAccordion: t, ...o } = e, r = go(wt, t), a = Gr(I0, t), i = Kr(t);
  return /* @__PURE__ */ w.createElement(x0, x({
    role: "region",
    "aria-labelledby": a.triggerId,
    "data-orientation": r.orientation
  }, i, o, {
    ref: n,
    style: {
      "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
      "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
      ...e.style
    }
  }));
});
function hc(e) {
  return e ? "open" : "closed";
}
const F0 = pc, W0 = N0, j0 = k0, gc = A0, $c = L0, Tw = D.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ _.jsx(
  F0,
  {
    ref: t,
    className: R("tw-reset", e),
    ...n
  }
)), V0 = D.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ _.jsx(
  W0,
  {
    ref: t,
    className: R("~border-b", e),
    ...n
  }
));
V0.displayName = "AccordionItem";
const B0 = D.forwardRef(({ className: e, children: n, ...t }, o) => /* @__PURE__ */ _.jsx(j0, { className: "~flex", children: /* @__PURE__ */ _.jsxs(
  gc,
  {
    ref: o,
    className: R(
      "body-medium ~flex ~flex-1 ~items-center ~justify-between ~py-4 ~font-normal ~leading-none ~transition-all hover:~underline [&[data-state=open]>svg]:~rotate-180",
      e
    ),
    ...t,
    children: [
      n,
      /* @__PURE__ */ _.jsx(If, { className: "~h-4 ~w-4 ~shrink-0 ~text-muted-foreground ~transition-transform ~duration-200" })
    ]
  }
) }));
B0.displayName = gc.displayName;
const Y0 = D.forwardRef(({ className: e, children: n, ...t }, o) => /* @__PURE__ */ _.jsx(
  $c,
  {
    ref: o,
    className: R(
      "~overflow-hidden data-[state=closed]:~animate-accordion-up data-[state=open]:~animate-accordion-down",
      e
    ),
    ...t,
    children: /* @__PURE__ */ _.jsx("div", { className: "~pb-4 ~pt-0", children: n })
  }
));
Y0.displayName = $c.displayName;
const yc = "Avatar", [H0, Pw] = xe(yc), [U0, wc] = H0(yc), K0 = /* @__PURE__ */ T((e, n) => {
  const { __scopeAvatar: t, ...o } = e, [r, a] = z("idle");
  return /* @__PURE__ */ h(U0, {
    scope: t,
    imageLoadingStatus: r,
    onImageLoadingStatusChange: a
  }, /* @__PURE__ */ h(U.span, x({}, o, {
    ref: n
  })));
}), G0 = "AvatarImage", z0 = /* @__PURE__ */ T((e, n) => {
  const { __scopeAvatar: t, src: o, onLoadingStatusChange: r = () => {
  }, ...a } = e, i = wc(G0, t), s = Z0(o), c = _e((l) => {
    r(l), i.onImageLoadingStatusChange(l);
  });
  return Ie(() => {
    s !== "idle" && c(s);
  }, [
    s,
    c
  ]), s === "loaded" ? /* @__PURE__ */ h(U.img, x({}, a, {
    ref: n,
    src: o
  })) : null;
}), q0 = "AvatarFallback", X0 = /* @__PURE__ */ T((e, n) => {
  const { __scopeAvatar: t, delayMs: o, ...r } = e, a = wc(q0, t), [i, s] = z(o === void 0);
  return q(() => {
    if (o !== void 0) {
      const c = window.setTimeout(
        () => s(!0),
        o
      );
      return () => window.clearTimeout(c);
    }
  }, [
    o
  ]), i && a.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ h(U.span, x({}, r, {
    ref: n
  })) : null;
});
function Z0(e) {
  const [n, t] = z("idle");
  return q(() => {
    if (!e) {
      t("error");
      return;
    }
    let o = !0;
    const r = new window.Image(), a = (i) => () => {
      o && t(i);
    };
    return t("loading"), r.onload = a("loaded"), r.onerror = a("error"), r.src = e, () => {
      o = !1;
    };
  }, [
    e
  ]), n;
}
const xc = K0, Cc = z0, _c = X0, Q0 = D.forwardRef(({ className: e, size: n = 40, style: t, ...o }, r) => /* @__PURE__ */ _.jsx(
  xc,
  {
    ref: r,
    className: R(
      "tw-reset ~relative ~flex ~shrink-0 ~overflow-hidden ~rounded-full",
      e
    ),
    style: { width: `${n}px`, height: `${n}px`, ...t },
    ...o
  }
));
Q0.displayName = xc.displayName;
const J0 = D.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ _.jsx(
  Cc,
  {
    ref: t,
    className: R("~aspect-square ~h-full ~w-full", e),
    ...n
  }
));
J0.displayName = Cc.displayName;
const eh = D.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ _.jsx(
  _c,
  {
    ref: t,
    className: R(
      "~flex ~h-full ~w-full ~items-center ~justify-center ~rounded-full ~bg-muted",
      e
    ),
    ...n
  }
));
eh.displayName = _c.displayName;
const Ja = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, ei = Ui, xt = (e, n) => (t) => {
  var o;
  if ((n == null ? void 0 : n.variants) == null)
    return ei(e, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
  const { variants: r, defaultVariants: a } = n, i = Object.keys(r).map((l) => {
    const u = t == null ? void 0 : t[l], d = a == null ? void 0 : a[l];
    if (u === null)
      return null;
    const f = Ja(u) || Ja(d);
    return r[l][f];
  }), s = t && Object.entries(t).reduce((l, u) => {
    let [d, f] = u;
    return f === void 0 || (l[d] = f), l;
  }, {}), c = n == null || (o = n.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((l, u) => {
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
  return ei(e, i, c, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
}, th = xt(
  [
    "tw-reset body-x-small ~inline-flex ~cursor-default ~items-center ~rounded-full ~border ~px-3 ~py-0.5 ~transition-colors",
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
function Sw({
  className: e,
  variant: n,
  background: t,
  color: o,
  style: r,
  ...a
}) {
  return /* @__PURE__ */ _.jsx(
    "div",
    {
      className: R(th({ variant: n }), e),
      style: { background: t, color: o, ...r },
      ...a
    }
  );
}
const bn = xt(
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
), zr = D.forwardRef(
  ({ className: e, variant: n, size: t, asChild: o = !1, ...r }, a) => {
    const i = o ? ct : "button";
    return /* @__PURE__ */ _.jsx(
      i,
      {
        className: R(bn({ variant: n, size: t, className: e })),
        ref: a,
        ...r
      }
    );
  }
);
zr.displayName = "Button";
var J = function() {
  return J = Object.assign || function(n) {
    for (var t, o = 1, r = arguments.length; o < r; o++) {
      t = arguments[o];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (n[a] = t[a]);
    }
    return n;
  }, J.apply(this, arguments);
};
function nh(e, n) {
  var t = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && n.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      n.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (t[o[r]] = e[o[r]]);
  return t;
}
function Ec(e, n, t) {
  if (t || arguments.length === 2)
    for (var o = 0, r = n.length, a; o < r; o++)
      (a || !(o in n)) && (a || (a = Array.prototype.slice.call(n, 0, o)), a[o] = n[o]);
  return e.concat(a || Array.prototype.slice.call(n));
}
function En(e) {
  return e.mode === "multiple";
}
function Tn(e) {
  return e.mode === "range";
}
function $o(e) {
  return e.mode === "single";
}
var oh = {
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
function rh(e, n) {
  return Ye(e, "LLLL y", n);
}
function ah(e, n) {
  return Ye(e, "d", n);
}
function ih(e, n) {
  return Ye(e, "LLLL", n);
}
function sh(e) {
  return "".concat(e);
}
function ch(e, n) {
  return Ye(e, "cccccc", n);
}
function lh(e, n) {
  return Ye(e, "yyyy", n);
}
var dh = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption: rh,
  formatDay: ah,
  formatMonthCaption: ih,
  formatWeekNumber: sh,
  formatWeekdayName: ch,
  formatYearCaption: lh
}), uh = function(e, n, t) {
  return Ye(e, "do MMMM (EEEE)", t);
}, fh = function() {
  return "Month: ";
}, ph = function() {
  return "Go to next month";
}, vh = function() {
  return "Go to previous month";
}, mh = function(e, n) {
  return Ye(e, "cccc", n);
}, bh = function(e) {
  return "Week n. ".concat(e);
}, hh = function() {
  return "Year: ";
}, gh = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay: uh,
  labelMonthDropdown: fh,
  labelNext: ph,
  labelPrevious: vh,
  labelWeekNumber: bh,
  labelWeekday: mh,
  labelYearDropdown: hh
});
function $h() {
  var e = "buttons", n = oh, t = ss, o = {}, r = {}, a = 1, i = {}, s = /* @__PURE__ */ new Date();
  return {
    captionLayout: e,
    classNames: n,
    formatters: dh,
    labels: gh,
    locale: t,
    modifiersClassNames: o,
    modifiers: r,
    numberOfMonths: a,
    styles: i,
    today: s,
    mode: "default"
  };
}
function yh(e) {
  var n = e.fromYear, t = e.toYear, o = e.fromMonth, r = e.toMonth, a = e.fromDate, i = e.toDate;
  return o ? a = Ae(o) : n && (a = new Date(n, 0, 1)), r ? i = Mr(r) : t && (i = new Date(t, 11, 31)), {
    fromDate: a ? Gt(a) : void 0,
    toDate: i ? Gt(i) : void 0
  };
}
var Tc = We(void 0);
function wh(e) {
  var n, t = e.initialProps, o = $h(), r = yh(t), a = r.fromDate, i = r.toDate, s = (n = t.captionLayout) !== null && n !== void 0 ? n : o.captionLayout;
  s !== "buttons" && (!a || !i) && (s = "buttons");
  var c;
  ($o(t) || En(t) || Tn(t)) && (c = t.onSelect);
  var l = J(J(J({}, o), t), { captionLayout: s, classNames: J(J({}, o.classNames), t.classNames), components: J({}, t.components), formatters: J(J({}, o.formatters), t.formatters), fromDate: a, labels: J(J({}, o.labels), t.labels), mode: t.mode || o.mode, modifiers: J(J({}, o.modifiers), t.modifiers), modifiersClassNames: J(J({}, o.modifiersClassNames), t.modifiersClassNames), onSelect: c, styles: J(J({}, o.styles), t.styles), toDate: i });
  return w.createElement(Tc.Provider, { value: l }, e.children);
}
function ge() {
  var e = Le(Tc);
  if (!e)
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return e;
}
function Pc(e) {
  var n = ge(), t = n.locale, o = n.classNames, r = n.styles, a = n.formatters.formatCaption;
  return w.createElement("div", { className: o.caption_label, style: r.caption_label, "aria-live": "polite", role: "presentation", id: e.id }, a(e.displayMonth, { locale: t }));
}
function xh(e) {
  return w.createElement(
    "svg",
    J({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, e),
    w.createElement("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" })
  );
}
function Sc(e) {
  var n, t, o = e.onChange, r = e.value, a = e.children, i = e.caption, s = e.className, c = e.style, l = ge(), u = (t = (n = l.components) === null || n === void 0 ? void 0 : n.IconDropdown) !== null && t !== void 0 ? t : xh;
  return w.createElement(
    "div",
    { className: s, style: c },
    w.createElement("span", { className: l.classNames.vhidden }, e["aria-label"]),
    w.createElement("select", { name: e.name, "aria-label": e["aria-label"], className: l.classNames.dropdown, style: l.styles.dropdown, value: r, onChange: o }, a),
    w.createElement(
      "div",
      { className: l.classNames.caption_label, style: l.styles.caption_label, "aria-hidden": "true" },
      i,
      w.createElement(u, { className: l.classNames.dropdown_icon, style: l.styles.dropdown_icon })
    )
  );
}
function Ch(e) {
  var n, t = ge(), o = t.fromDate, r = t.toDate, a = t.styles, i = t.locale, s = t.formatters.formatMonthCaption, c = t.classNames, l = t.components, u = t.labels.labelMonthDropdown;
  if (!o)
    return w.createElement(w.Fragment, null);
  if (!r)
    return w.createElement(w.Fragment, null);
  var d = [];
  if (wv(o, r))
    for (var f = Ae(o), p = o.getMonth(); p <= r.getMonth(); p++)
      d.push(Wo(f, p));
  else
    for (var f = Ae(/* @__PURE__ */ new Date()), p = 0; p <= 11; p++)
      d.push(Wo(f, p));
  var v = function(b) {
    var $ = Number(b.target.value), g = Wo(Ae(e.displayMonth), $);
    e.onChange(g);
  }, m = (n = l == null ? void 0 : l.Dropdown) !== null && n !== void 0 ? n : Sc;
  return w.createElement(m, { name: "months", "aria-label": u(), className: c.dropdown_month, style: a.dropdown_month, onChange: v, value: e.displayMonth.getMonth(), caption: s(e.displayMonth, { locale: i }) }, d.map(function(b) {
    return w.createElement("option", { key: b.getMonth(), value: b.getMonth() }, s(b, { locale: i }));
  }));
}
function _h(e) {
  var n, t = e.displayMonth, o = ge(), r = o.fromDate, a = o.toDate, i = o.locale, s = o.styles, c = o.classNames, l = o.components, u = o.formatters.formatYearCaption, d = o.labels.labelYearDropdown, f = [];
  if (!r)
    return w.createElement(w.Fragment, null);
  if (!a)
    return w.createElement(w.Fragment, null);
  for (var p = r.getFullYear(), v = a.getFullYear(), m = p; m <= v; m++)
    f.push(ja(ep(/* @__PURE__ */ new Date()), m));
  var b = function(g) {
    var y = ja(Ae(t), Number(g.target.value));
    e.onChange(y);
  }, $ = (n = l == null ? void 0 : l.Dropdown) !== null && n !== void 0 ? n : Sc;
  return w.createElement($, { name: "years", "aria-label": d(), className: c.dropdown_year, style: s.dropdown_year, onChange: b, value: t.getFullYear(), caption: u(t, { locale: i }) }, f.map(function(g) {
    return w.createElement("option", { key: g.getFullYear(), value: g.getFullYear() }, u(g, { locale: i }));
  }));
}
function Eh(e, n) {
  var t = z(e), o = t[0], r = t[1], a = n === void 0 ? o : n;
  return [a, r];
}
function Th(e) {
  var n = e.month, t = e.defaultMonth, o = e.today, r = n || t || o || /* @__PURE__ */ new Date(), a = e.toDate, i = e.fromDate, s = e.numberOfMonths, c = s === void 0 ? 1 : s;
  if (a && dn(a, r) < 0) {
    var l = -1 * (c - 1);
    r = Ze(a, l);
  }
  return i && dn(r, i) < 0 && (r = i), Ae(r);
}
function Ph() {
  var e = ge(), n = Th(e), t = Eh(n, e.month), o = t[0], r = t[1], a = function(i) {
    var s;
    if (!e.disableNavigation) {
      var c = Ae(i);
      r(c), (s = e.onMonthChange) === null || s === void 0 || s.call(e, c);
    }
  };
  return [o, a];
}
function Sh(e, n) {
  for (var t = n.reverseMonths, o = n.numberOfMonths, r = Ae(e), a = Ae(Ze(r, o)), i = dn(a, r), s = [], c = 0; c < i; c++) {
    var l = Ze(r, c);
    s.push(l);
  }
  return t && (s = s.reverse()), s;
}
function Dh(e, n) {
  if (!n.disableNavigation) {
    var t = n.toDate, o = n.pagedNavigation, r = n.numberOfMonths, a = r === void 0 ? 1 : r, i = o ? a : 1, s = Ae(e);
    if (!t)
      return Ze(s, i);
    var c = dn(t, e);
    if (!(c < a))
      return Ze(s, i);
  }
}
function Mh(e, n) {
  if (!n.disableNavigation) {
    var t = n.fromDate, o = n.pagedNavigation, r = n.numberOfMonths, a = r === void 0 ? 1 : r, i = o ? a : 1, s = Ae(e);
    if (!t)
      return Ze(s, -i);
    var c = dn(s, t);
    if (!(c <= 0))
      return Ze(s, -i);
  }
}
var Dc = We(void 0);
function Oh(e) {
  var n = ge(), t = Ph(), o = t[0], r = t[1], a = Sh(o, n), i = Dh(o, n), s = Mh(o, n), c = function(d) {
    return a.some(function(f) {
      return Nr(d, f);
    });
  }, l = function(d, f) {
    c(d) || (f && ls(d, f) ? r(Ze(d, 1 + n.numberOfMonths * -1)) : r(d));
  }, u = {
    currentMonth: o,
    displayMonths: a,
    goToMonth: r,
    goToDate: l,
    previousMonth: s,
    nextMonth: i,
    isDateDisplayed: c
  };
  return w.createElement(Dc.Provider, { value: u }, e.children);
}
function Pn() {
  var e = Le(Dc);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function ti(e) {
  var n, t = ge(), o = t.classNames, r = t.styles, a = t.components, i = Pn().goToMonth, s = function(u) {
    i(u);
  }, c = (n = a == null ? void 0 : a.CaptionLabel) !== null && n !== void 0 ? n : Pc, l = w.createElement(c, { id: e.id, displayMonth: e.displayMonth });
  return w.createElement(
    "div",
    { className: o.caption_dropdowns, style: r.caption_dropdowns },
    w.createElement("div", { className: o.vhidden }, l),
    w.createElement(Ch, { onChange: s, displayMonth: e.displayMonth }),
    w.createElement(_h, { onChange: s, displayMonth: e.displayMonth })
  );
}
function Nh(e) {
  return w.createElement(
    "svg",
    J({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e),
    w.createElement("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" })
  );
}
function Rh(e) {
  return w.createElement(
    "svg",
    J({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e),
    w.createElement("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" })
  );
}
var to = T(function(e, n) {
  var t = ge(), o = t.classNames, r = t.styles, a = [o.button_reset, o.button];
  e.className && a.push(e.className);
  var i = a.join(" "), s = J(J({}, r.button_reset), r.button);
  return e.style && Object.assign(s, e.style), w.createElement("button", J({}, e, { ref: n, type: "button", className: i, style: s }));
});
function kh(e) {
  var n, t, o = ge(), r = o.dir, a = o.locale, i = o.classNames, s = o.styles, c = o.labels, l = c.labelPrevious, u = c.labelNext, d = o.components;
  if (!e.nextMonth && !e.previousMonth)
    return w.createElement(w.Fragment, null);
  var f = l(e.previousMonth, { locale: a }), p = [
    i.nav_button,
    i.nav_button_previous
  ].join(" "), v = u(e.nextMonth, { locale: a }), m = [
    i.nav_button,
    i.nav_button_next
  ].join(" "), b = (n = d == null ? void 0 : d.IconRight) !== null && n !== void 0 ? n : Rh, $ = (t = d == null ? void 0 : d.IconLeft) !== null && t !== void 0 ? t : Nh;
  return w.createElement(
    "div",
    { className: i.nav, style: s.nav },
    !e.hidePrevious && w.createElement(to, { name: "previous-month", "aria-label": f, className: p, style: s.nav_button_previous, disabled: !e.previousMonth, onClick: e.onPreviousClick }, r === "rtl" ? w.createElement(b, { className: i.nav_icon, style: s.nav_icon }) : w.createElement($, { className: i.nav_icon, style: s.nav_icon })),
    !e.hideNext && w.createElement(to, { name: "next-month", "aria-label": v, className: m, style: s.nav_button_next, disabled: !e.nextMonth, onClick: e.onNextClick }, r === "rtl" ? w.createElement($, { className: i.nav_icon, style: s.nav_icon }) : w.createElement(b, { className: i.nav_icon, style: s.nav_icon }))
  );
}
function ni(e) {
  var n = ge().numberOfMonths, t = Pn(), o = t.previousMonth, r = t.nextMonth, a = t.goToMonth, i = t.displayMonths, s = i.findIndex(function(v) {
    return Nr(e.displayMonth, v);
  }), c = s === 0, l = s === i.length - 1, u = n > 1 && (c || !l), d = n > 1 && (l || !c), f = function() {
    o && a(o);
  }, p = function() {
    r && a(r);
  };
  return w.createElement(kh, { displayMonth: e.displayMonth, hideNext: u, hidePrevious: d, nextMonth: r, previousMonth: o, onPreviousClick: f, onNextClick: p });
}
function Ah(e) {
  var n, t = ge(), o = t.classNames, r = t.disableNavigation, a = t.styles, i = t.captionLayout, s = t.components, c = (n = s == null ? void 0 : s.CaptionLabel) !== null && n !== void 0 ? n : Pc, l;
  return r ? l = w.createElement(c, { id: e.id, displayMonth: e.displayMonth }) : i === "dropdown" ? l = w.createElement(ti, { displayMonth: e.displayMonth, id: e.id }) : i === "dropdown-buttons" ? l = w.createElement(
    w.Fragment,
    null,
    w.createElement(ti, { displayMonth: e.displayMonth, id: e.id }),
    w.createElement(ni, { displayMonth: e.displayMonth, id: e.id })
  ) : l = w.createElement(
    w.Fragment,
    null,
    w.createElement(c, { id: e.id, displayMonth: e.displayMonth }),
    w.createElement(ni, { displayMonth: e.displayMonth, id: e.id })
  ), w.createElement("div", { className: o.caption, style: a.caption }, l);
}
function Ih(e) {
  var n = ge(), t = n.footer, o = n.styles, r = n.classNames.tfoot;
  return t ? w.createElement(
    "tfoot",
    { className: r, style: o.tfoot },
    w.createElement(
      "tr",
      null,
      w.createElement("td", { colSpan: 8 }, t)
    )
  ) : w.createElement(w.Fragment, null);
}
function Lh(e, n, t) {
  for (var o = t ? Dt(/* @__PURE__ */ new Date()) : Qe(/* @__PURE__ */ new Date(), { locale: e, weekStartsOn: n }), r = [], a = 0; a < 7; a++) {
    var i = Ve(o, a);
    r.push(i);
  }
  return r;
}
function Fh() {
  var e = ge(), n = e.classNames, t = e.styles, o = e.showWeekNumber, r = e.locale, a = e.weekStartsOn, i = e.ISOWeek, s = e.formatters.formatWeekdayName, c = e.labels.labelWeekday, l = Lh(r, a, i);
  return w.createElement(
    "tr",
    { style: t.head_row, className: n.head_row },
    o && w.createElement("td", { style: t.head_cell, className: n.head_cell }),
    l.map(function(u, d) {
      return w.createElement("th", { key: d, scope: "col", className: n.head_cell, style: t.head_cell, "aria-label": c(u, { locale: r }) }, s(u, { locale: r }));
    })
  );
}
function Wh() {
  var e, n = ge(), t = n.classNames, o = n.styles, r = n.components, a = (e = r == null ? void 0 : r.HeadRow) !== null && e !== void 0 ? e : Fh;
  return w.createElement(
    "thead",
    { style: o.head, className: t.head },
    w.createElement(a, null)
  );
}
function jh(e) {
  var n = ge(), t = n.locale, o = n.formatters.formatDay;
  return w.createElement(w.Fragment, null, o(e.date, { locale: t }));
}
var qr = We(void 0);
function Vh(e) {
  if (!En(e.initialProps)) {
    var n = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return w.createElement(qr.Provider, { value: n }, e.children);
  }
  return w.createElement(Bh, { initialProps: e.initialProps, children: e.children });
}
function Bh(e) {
  var n = e.initialProps, t = e.children, o = n.selected, r = n.min, a = n.max, i = function(l, u, d) {
    var f, p;
    (f = n.onDayClick) === null || f === void 0 || f.call(n, l, u, d);
    var v = !!(u.selected && r && (o == null ? void 0 : o.length) === r);
    if (!v) {
      var m = !!(!u.selected && a && (o == null ? void 0 : o.length) === a);
      if (!m) {
        var b = o ? Ec([], o, !0) : [];
        if (u.selected) {
          var $ = b.findIndex(function(g) {
            return ke(l, g);
          });
          b.splice($, 1);
        } else
          b.push(l);
        (p = n.onSelect) === null || p === void 0 || p.call(n, b, l, u, d);
      }
    }
  }, s = {
    disabled: []
  };
  o && s.disabled.push(function(l) {
    var u = a && o.length > a - 1, d = o.some(function(f) {
      return ke(f, l);
    });
    return !!(u && !d);
  });
  var c = {
    selected: o,
    onDayClick: i,
    modifiers: s
  };
  return w.createElement(qr.Provider, { value: c }, t);
}
function Xr() {
  var e = Le(qr);
  if (!e)
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  return e;
}
function Yh(e, n) {
  var t = n || {}, o = t.from, r = t.to;
  if (!o)
    return { from: e, to: void 0 };
  if (!r && ke(o, e))
    return { from: o, to: e };
  if (!r && ls(e, o))
    return { from: e, to: o };
  if (!r)
    return { from: o, to: e };
  if (!(ke(r, e) && ke(o, e))) {
    if (ke(r, e))
      return { from: r, to: void 0 };
    if (!ke(o, e))
      return cs(o, e) ? { from: e, to: r } : { from: o, to: e };
  }
}
var Zr = We(void 0);
function Hh(e) {
  if (!Tn(e.initialProps)) {
    var n = {
      selected: void 0,
      modifiers: {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: []
      }
    };
    return w.createElement(Zr.Provider, { value: n }, e.children);
  }
  return w.createElement(Uh, { initialProps: e.initialProps, children: e.children });
}
function Uh(e) {
  var n = e.initialProps, t = e.children, o = n.selected, r = o || {}, a = r.from, i = r.to, s = n.min, c = n.max, l = function(p, v, m) {
    var b, $;
    (b = n.onDayClick) === null || b === void 0 || b.call(n, p, v, m);
    var g = Yh(p, o);
    ($ = n.onSelect) === null || $ === void 0 || $.call(n, g, p, v, m);
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
    after: Wa(a, s - 1),
    before: Ve(a, s - 1)
  }), a && i && u.disabled.push({
    after: a,
    before: Ve(a, s - 1)
  })), c && (a && !i && (u.disabled.push({
    before: Ve(a, -c + 1)
  }), u.disabled.push({
    after: Ve(a, c - 1)
  })), a && i)) {
    var d = rt(i, a) + 1, f = c - d;
    u.disabled.push({
      before: Wa(a, f)
    }), u.disabled.push({
      after: Ve(i, f)
    });
  }
  return w.createElement(Zr.Provider, { value: { selected: o, onDayClick: l, modifiers: u } }, t);
}
function Qr() {
  var e = Le(Zr);
  if (!e)
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return e;
}
function Yn(e) {
  return Array.isArray(e) ? Ec([], e, !0) : e !== void 0 ? [e] : [];
}
function Kh(e) {
  var n = {};
  return Object.entries(e).forEach(function(t) {
    var o = t[0], r = t[1];
    n[o] = Yn(r);
  }), n;
}
var Ke;
(function(e) {
  e.Outside = "outside", e.Disabled = "disabled", e.Selected = "selected", e.Hidden = "hidden", e.Today = "today", e.RangeStart = "range_start", e.RangeEnd = "range_end", e.RangeMiddle = "range_middle";
})(Ke || (Ke = {}));
var Gh = Ke.Selected, nt = Ke.Disabled, zh = Ke.Hidden, qh = Ke.Today, Bo = Ke.RangeEnd, Yo = Ke.RangeMiddle, Ho = Ke.RangeStart, Xh = Ke.Outside;
function Zh(e, n, t) {
  var o, r = (o = {}, o[Gh] = Yn(e.selected), o[nt] = Yn(e.disabled), o[zh] = Yn(e.hidden), o[qh] = [e.today], o[Bo] = [], o[Yo] = [], o[Ho] = [], o[Xh] = [], o);
  return e.fromDate && r[nt].push({ before: e.fromDate }), e.toDate && r[nt].push({ after: e.toDate }), En(e) ? r[nt] = r[nt].concat(n.modifiers[nt]) : Tn(e) && (r[nt] = r[nt].concat(t.modifiers[nt]), r[Ho] = t.modifiers[Ho], r[Yo] = t.modifiers[Yo], r[Bo] = t.modifiers[Bo]), r;
}
var Mc = We(void 0);
function Qh(e) {
  var n = ge(), t = Xr(), o = Qr(), r = Zh(n, t, o), a = Kh(n.modifiers), i = J(J({}, r), a);
  return w.createElement(Mc.Provider, { value: i }, e.children);
}
function Oc() {
  var e = Le(Mc);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function Jh(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function eg(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function tg(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function ng(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function og(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function rg(e, n) {
  var t, o = n.from, r = n.to;
  if (!o)
    return !1;
  if (!r && ke(o, e))
    return !0;
  if (!r)
    return !1;
  var a = rt(r, o) < 0;
  a && (t = [r, o], o = t[0], r = t[1]);
  var i = rt(e, o) >= 0 && rt(r, e) >= 0;
  return i;
}
function ag(e) {
  return Dr(e);
}
function ig(e) {
  return Array.isArray(e) && e.every(Dr);
}
function sg(e, n) {
  return n.some(function(t) {
    if (typeof t == "boolean")
      return t;
    if (ag(t))
      return ke(e, t);
    if (ig(t))
      return t.includes(e);
    if (eg(t))
      return rg(e, t);
    if (og(t))
      return t.dayOfWeek.includes(e.getDay());
    if (Jh(t)) {
      var o = rt(t.before, e), r = rt(t.after, e), a = o > 0, i = r < 0, s = cs(t.before, t.after);
      return s ? i && a : a || i;
    }
    return tg(t) ? rt(e, t.after) > 0 : ng(t) ? rt(t.before, e) > 0 : typeof t == "function" ? t(e) : !1;
  });
}
function Jr(e, n, t) {
  var o = Object.keys(n).reduce(function(a, i) {
    var s = n[i];
    return sg(e, s) && a.push(i), a;
  }, []), r = {};
  return o.forEach(function(a) {
    return r[a] = !0;
  }), t && !Nr(e, t) && (r.outside = !0), r;
}
function cg(e, n) {
  for (var t = Ae(e[0]), o = Mr(e[e.length - 1]), r, a, i = t; i <= o; ) {
    var s = Jr(i, n), c = !s.disabled && !s.hidden;
    if (!c) {
      i = Ve(i, 1);
      continue;
    }
    if (s.selected)
      return i;
    s.today && !a && (a = i), r || (r = i), i = Ve(i, 1);
  }
  return a || r;
}
var lg = 365;
function Nc(e, n) {
  var t = n.moveBy, o = n.direction, r = n.context, a = n.modifiers, i = n.retry, s = i === void 0 ? { count: 0, lastFocused: e } : i, c = r.weekStartsOn, l = r.fromDate, u = r.toDate, d = r.locale, f = {
    day: Ve,
    week: nr,
    month: Ze,
    year: zf,
    startOfWeek: function(b) {
      return r.ISOWeek ? Dt(b) : Qe(b, { locale: d, weekStartsOn: c });
    },
    endOfWeek: function(b) {
      return r.ISOWeek ? os(b) : Or(b, { locale: d, weekStartsOn: c });
    }
  }, p = f[t](e, o === "after" ? 1 : -1);
  o === "before" && l ? p = qf([l, p]) : o === "after" && u && (p = Xf([u, p]));
  var v = !0;
  if (a) {
    var m = Jr(p, a);
    v = !m.disabled && !m.hidden;
  }
  return v ? p : s.count > lg ? s.lastFocused : Nc(p, {
    moveBy: t,
    direction: o,
    context: r,
    modifiers: a,
    retry: J(J({}, s), { count: s.count + 1 })
  });
}
var Rc = We(void 0);
function dg(e) {
  var n = Pn(), t = Oc(), o = z(), r = o[0], a = o[1], i = z(), s = i[0], c = i[1], l = cg(n.displayMonths, t), u = r ?? (s && n.isDateDisplayed(s)) ? s : l, d = function() {
    c(r), a(void 0);
  }, f = function(b) {
    a(b);
  }, p = ge(), v = function(b, $) {
    if (r) {
      var g = Nc(r, {
        moveBy: b,
        direction: $,
        context: p,
        modifiers: t
      });
      ke(r, g) || (n.goToDate(g, r), f(g));
    }
  }, m = {
    focusedDay: r,
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
  return w.createElement(Rc.Provider, { value: m }, e.children);
}
function ea() {
  var e = Le(Rc);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function ug(e, n) {
  var t = Oc(), o = Jr(e, t, n);
  return o;
}
var ta = We(void 0);
function fg(e) {
  if (!$o(e.initialProps)) {
    var n = {
      selected: void 0
    };
    return w.createElement(ta.Provider, { value: n }, e.children);
  }
  return w.createElement(pg, { initialProps: e.initialProps, children: e.children });
}
function pg(e) {
  var n = e.initialProps, t = e.children, o = function(a, i, s) {
    var c, l, u;
    if ((c = n.onDayClick) === null || c === void 0 || c.call(n, a, i, s), i.selected && !n.required) {
      (l = n.onSelect) === null || l === void 0 || l.call(n, void 0, a, i, s);
      return;
    }
    (u = n.onSelect) === null || u === void 0 || u.call(n, a, a, i, s);
  }, r = {
    selected: n.selected,
    onDayClick: o
  };
  return w.createElement(ta.Provider, { value: r }, t);
}
function kc() {
  var e = Le(ta);
  if (!e)
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  return e;
}
function vg(e, n) {
  var t = ge(), o = kc(), r = Xr(), a = Qr(), i = ea(), s = i.focusDayAfter, c = i.focusDayBefore, l = i.focusWeekAfter, u = i.focusWeekBefore, d = i.blur, f = i.focus, p = i.focusMonthBefore, v = i.focusMonthAfter, m = i.focusYearBefore, b = i.focusYearAfter, $ = i.focusStartOfWeek, g = i.focusEndOfWeek, y = function(A) {
    var O, B, te, ne;
    $o(t) ? (O = o.onDayClick) === null || O === void 0 || O.call(o, e, n, A) : En(t) ? (B = r.onDayClick) === null || B === void 0 || B.call(r, e, n, A) : Tn(t) ? (te = a.onDayClick) === null || te === void 0 || te.call(a, e, n, A) : (ne = t.onDayClick) === null || ne === void 0 || ne.call(t, e, n, A);
  }, E = function(A) {
    var O;
    f(e), (O = t.onDayFocus) === null || O === void 0 || O.call(t, e, n, A);
  }, S = function(A) {
    var O;
    d(), (O = t.onDayBlur) === null || O === void 0 || O.call(t, e, n, A);
  }, N = function(A) {
    var O;
    (O = t.onDayMouseEnter) === null || O === void 0 || O.call(t, e, n, A);
  }, P = function(A) {
    var O;
    (O = t.onDayMouseLeave) === null || O === void 0 || O.call(t, e, n, A);
  }, W = function(A) {
    var O;
    (O = t.onDayPointerEnter) === null || O === void 0 || O.call(t, e, n, A);
  }, Y = function(A) {
    var O;
    (O = t.onDayPointerLeave) === null || O === void 0 || O.call(t, e, n, A);
  }, X = function(A) {
    var O;
    (O = t.onDayTouchCancel) === null || O === void 0 || O.call(t, e, n, A);
  }, H = function(A) {
    var O;
    (O = t.onDayTouchEnd) === null || O === void 0 || O.call(t, e, n, A);
  }, V = function(A) {
    var O;
    (O = t.onDayTouchMove) === null || O === void 0 || O.call(t, e, n, A);
  }, G = function(A) {
    var O;
    (O = t.onDayTouchStart) === null || O === void 0 || O.call(t, e, n, A);
  }, M = function(A) {
    var O;
    (O = t.onDayKeyUp) === null || O === void 0 || O.call(t, e, n, A);
  }, I = function(A) {
    var O;
    switch (A.key) {
      case "ArrowLeft":
        A.preventDefault(), A.stopPropagation(), t.dir === "rtl" ? s() : c();
        break;
      case "ArrowRight":
        A.preventDefault(), A.stopPropagation(), t.dir === "rtl" ? c() : s();
        break;
      case "ArrowDown":
        A.preventDefault(), A.stopPropagation(), l();
        break;
      case "ArrowUp":
        A.preventDefault(), A.stopPropagation(), u();
        break;
      case "PageUp":
        A.preventDefault(), A.stopPropagation(), A.shiftKey ? m() : p();
        break;
      case "PageDown":
        A.preventDefault(), A.stopPropagation(), A.shiftKey ? b() : v();
        break;
      case "Home":
        A.preventDefault(), A.stopPropagation(), $();
        break;
      case "End":
        A.preventDefault(), A.stopPropagation(), g();
        break;
    }
    (O = t.onDayKeyDown) === null || O === void 0 || O.call(t, e, n, A);
  }, F = {
    onClick: y,
    onFocus: E,
    onBlur: S,
    onKeyDown: I,
    onKeyUp: M,
    onMouseEnter: N,
    onMouseLeave: P,
    onPointerEnter: W,
    onPointerLeave: Y,
    onTouchCancel: X,
    onTouchEnd: H,
    onTouchMove: V,
    onTouchStart: G
  };
  return F;
}
function mg() {
  var e = ge(), n = kc(), t = Xr(), o = Qr(), r = $o(e) ? n.selected : En(e) ? t.selected : Tn(e) ? o.selected : void 0;
  return r;
}
function bg(e) {
  return Object.values(Ke).includes(e);
}
function hg(e, n) {
  var t = [e.classNames.day];
  return Object.keys(n).forEach(function(o) {
    var r = e.modifiersClassNames[o];
    if (r)
      t.push(r);
    else if (bg(o)) {
      var a = e.classNames["day_".concat(o)];
      a && t.push(a);
    }
  }), t;
}
function gg(e, n) {
  var t = J({}, e.styles.day);
  return Object.keys(n).forEach(function(o) {
    var r;
    t = J(J({}, t), (r = e.modifiersStyles) === null || r === void 0 ? void 0 : r[o]);
  }), t;
}
function $g(e, n, t) {
  var o, r, a, i = ge(), s = ea(), c = ug(e, n), l = vg(e, c), u = mg(), d = !!(i.onDayClick || i.mode !== "default");
  q(function() {
    var N;
    c.outside || s.focusedDay && d && ke(s.focusedDay, e) && ((N = t.current) === null || N === void 0 || N.focus());
  }, [
    s.focusedDay,
    e,
    t,
    d,
    c.outside
  ]);
  var f = hg(i, c).join(" "), p = gg(i, c), v = !!(c.outside && !i.showOutsideDays || c.hidden), m = (a = (r = i.components) === null || r === void 0 ? void 0 : r.DayContent) !== null && a !== void 0 ? a : jh, b = w.createElement(m, { date: e, displayMonth: n, activeModifiers: c }), $ = {
    style: p,
    className: f,
    children: b,
    role: "gridcell"
  }, g = s.focusTarget && ke(s.focusTarget, e) && !c.outside, y = s.focusedDay && ke(s.focusedDay, e), E = J(J(J({}, $), (o = { disabled: c.disabled, role: "gridcell" }, o["aria-selected"] = c.selected, o.tabIndex = y || g ? 0 : -1, o)), l), S = {
    isButton: d,
    isHidden: v,
    activeModifiers: c,
    selectedDays: u,
    buttonProps: E,
    divProps: $
  };
  return S;
}
function yg(e) {
  var n = k(null), t = $g(e.date, e.displayMonth, n);
  return t.isHidden ? w.createElement("div", { role: "gridcell" }) : t.isButton ? w.createElement(to, J({ name: "day", ref: n }, t.buttonProps)) : w.createElement("div", J({}, t.divProps));
}
function wg(e) {
  var n = e.number, t = e.dates, o = ge(), r = o.onWeekNumberClick, a = o.styles, i = o.classNames, s = o.locale, c = o.labels.labelWeekNumber, l = o.formatters.formatWeekNumber, u = l(Number(n), { locale: s });
  if (!r)
    return w.createElement("span", { className: i.weeknumber, style: a.weeknumber }, u);
  var d = c(Number(n), { locale: s }), f = function(p) {
    r(n, t, p);
  };
  return w.createElement(to, { name: "week-number", "aria-label": d, className: i.weeknumber, style: a.weeknumber, onClick: f }, u);
}
function xg(e) {
  var n, t, o = ge(), r = o.styles, a = o.classNames, i = o.showWeekNumber, s = o.components, c = (n = s == null ? void 0 : s.Day) !== null && n !== void 0 ? n : yg, l = (t = s == null ? void 0 : s.WeekNumber) !== null && t !== void 0 ? t : wg, u;
  return i && (u = w.createElement(
    "td",
    { className: a.cell, style: r.cell },
    w.createElement(l, { number: e.weekNumber, dates: e.dates })
  )), w.createElement(
    "tr",
    { className: a.row, style: r.row },
    u,
    e.dates.map(function(d) {
      return w.createElement(
        "td",
        { className: a.cell, style: r.cell, key: vv(d), role: "presentation" },
        w.createElement(c, { displayMonth: e.displayMonth, date: d })
      );
    })
  );
}
function oi(e, n, t) {
  for (var o = t != null && t.ISOWeek ? os(n) : Or(n, t), r = t != null && t.ISOWeek ? Dt(e) : Qe(e, t), a = rt(o, r), i = [], s = 0; s <= a; s++)
    i.push(Ve(r, s));
  var c = i.reduce(function(l, u) {
    var d = t != null && t.ISOWeek ? fv(u) : gv(u, t), f = l.find(function(p) {
      return p.weekNumber === d;
    });
    return f ? (f.dates.push(u), l) : (l.push({
      weekNumber: d,
      dates: [u]
    }), l);
  }, []);
  return c;
}
function Cg(e, n) {
  var t = oi(Ae(e), Mr(e), n);
  if (n != null && n.useFixedWeeks) {
    var o = yv(e, n);
    if (o < 6) {
      var r = t[t.length - 1], a = r.dates[r.dates.length - 1], i = nr(a, 6 - o), s = oi(nr(a, 1), i, n);
      t.push.apply(t, s);
    }
  }
  return t;
}
function _g(e) {
  var n, t, o, r = ge(), a = r.locale, i = r.classNames, s = r.styles, c = r.hideHead, l = r.fixedWeeks, u = r.components, d = r.weekStartsOn, f = r.firstWeekContainsDate, p = r.ISOWeek, v = Cg(e.displayMonth, {
    useFixedWeeks: !!l,
    ISOWeek: p,
    locale: a,
    weekStartsOn: d,
    firstWeekContainsDate: f
  }), m = (n = u == null ? void 0 : u.Head) !== null && n !== void 0 ? n : Wh, b = (t = u == null ? void 0 : u.Row) !== null && t !== void 0 ? t : xg, $ = (o = u == null ? void 0 : u.Footer) !== null && o !== void 0 ? o : Ih;
  return w.createElement(
    "table",
    { id: e.id, className: i.table, style: s.table, role: "grid", "aria-labelledby": e["aria-labelledby"] },
    !c && w.createElement(m, null),
    w.createElement("tbody", { className: i.tbody, style: s.tbody, role: "rowgroup" }, v.map(function(g) {
      return w.createElement(b, { displayMonth: e.displayMonth, key: g.weekNumber, dates: g.dates, weekNumber: g.weekNumber });
    })),
    w.createElement($, { displayMonth: e.displayMonth })
  );
}
function Eg() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var Tg = Eg() ? D.useLayoutEffect : D.useEffect, Uo = !1, Pg = 0;
function ri() {
  return "react-day-picker-".concat(++Pg);
}
function Sg(e) {
  var n, t = e ?? (Uo ? ri() : null), o = D.useState(t), r = o[0], a = o[1];
  return Tg(function() {
    r === null && a(ri());
  }, []), D.useEffect(function() {
    Uo === !1 && (Uo = !0);
  }, []), (n = e ?? r) !== null && n !== void 0 ? n : void 0;
}
function Dg(e) {
  var n, t, o = ge(), r = o.dir, a = o.classNames, i = o.styles, s = o.components, c = Pn().displayMonths, l = Sg(o.id ? "".concat(o.id, "-").concat(e.displayIndex) : void 0), u = o.id ? "".concat(o.id, "-grid-").concat(e.displayIndex) : void 0, d = [a.month], f = i.month, p = e.displayIndex === 0, v = e.displayIndex === c.length - 1, m = !p && !v;
  r === "rtl" && (n = [p, v], v = n[0], p = n[1]), p && (d.push(a.caption_start), f = J(J({}, f), i.caption_start)), v && (d.push(a.caption_end), f = J(J({}, f), i.caption_end)), m && (d.push(a.caption_between), f = J(J({}, f), i.caption_between));
  var b = (t = s == null ? void 0 : s.Caption) !== null && t !== void 0 ? t : Ah;
  return w.createElement(
    "div",
    { key: e.displayIndex, className: d.join(" "), style: f },
    w.createElement(b, { id: l, displayMonth: e.displayMonth }),
    w.createElement(_g, { id: u, "aria-labelledby": l, displayMonth: e.displayMonth })
  );
}
function Mg(e) {
  var n = e.initialProps, t = ge(), o = ea(), r = Pn(), a = z(!1), i = a[0], s = a[1];
  q(function() {
    t.initialFocus && o.focusTarget && (i || (o.focus(o.focusTarget), s(!0)));
  }, [
    t.initialFocus,
    i,
    o.focus,
    o.focusTarget,
    o
  ]);
  var c = [t.classNames.root, t.className];
  t.numberOfMonths > 1 && c.push(t.classNames.multiple_months), t.showWeekNumber && c.push(t.classNames.with_weeknumber);
  var l = J(J({}, t.styles.root), t.style), u = Object.keys(n).filter(function(d) {
    return d.startsWith("data-");
  }).reduce(function(d, f) {
    var p;
    return J(J({}, d), (p = {}, p[f] = n[f], p));
  }, {});
  return w.createElement(
    "div",
    J({ className: c.join(" "), style: l, dir: t.dir, id: t.id }, u),
    w.createElement("div", { className: t.classNames.months, style: t.styles.months }, r.displayMonths.map(function(d, f) {
      return w.createElement(Dg, { key: f, displayIndex: f, displayMonth: d });
    }))
  );
}
function Og(e) {
  var n = e.children, t = nh(e, ["children"]);
  return w.createElement(
    wh,
    { initialProps: t },
    w.createElement(
      Oh,
      null,
      w.createElement(
        fg,
        { initialProps: t },
        w.createElement(
          Vh,
          { initialProps: t },
          w.createElement(
            Hh,
            { initialProps: t },
            w.createElement(
              Qh,
              null,
              w.createElement(dg, null, n)
            )
          )
        )
      )
    )
  );
}
function Ng(e) {
  return w.createElement(
    Og,
    J({}, e),
    w.createElement(Mg, { initialProps: e })
  );
}
function na({
  className: e,
  classNames: n,
  showOutsideDays: t = !0,
  ...o
}) {
  return /* @__PURE__ */ _.jsx(
    Ng,
    {
      showOutsideDays: t,
      className: R("tw-reset ~p-3", e),
      classNames: {
        months: "~flex ~flex-col sm:~flex-row ~space-y-4 sm:~space-x-4 sm:~space-y-0",
        month: R("~space-y-4"),
        caption: "~flex ~justify-center ~pt-1 ~relative ~items-center",
        caption_label: "~text-sm ~font-medium",
        nav: "~space-x-1 ~flex ~items-center",
        nav_button: R(bn({ variant: "ghost" }), "~h-9 ~w-9 ~p-0"),
        nav_button_previous: "~absolute ~left-1",
        nav_button_next: "~absolute ~right-1",
        table: "~w-full ~border-collapse ~space-y-1",
        head_row: "~flex",
        head_cell: R(
          "caption-1 ~w-10 ~text-center ~font-normal ~text-muted-foreground"
        ),
        row: "~flex ~w-full ~mt-2",
        cell: R(
          "~relative ~p-0 ~text-center focus-within:~relative focus-within:~z-20",
          "[&:has([aria-selected])]:~rounded-full [&:has([aria-selected])]:~bg-accent",
          "first:[&:has([aria-selected])]:~rounded-l-full last:[&:has([aria-selected])]:~rounded-r-full",
          "[&:has([aria-selected]):has(.range-middle)]:~rounded-none",
          "[&:has([aria-selected]):has(.range-start)]:~rounded-r-none",
          "[&:has([aria-selected]):has(.range-end)]:~rounded-l-none",
          "[&:has([aria-selected]):has(.range-start):has(.range-end)]:~rounded-full"
        ),
        day: R(
          bn({ variant: "ghost" }),
          "~h-10 ~w-10 ~p-0 ~font-normal aria-selected:~opacity-100"
        ),
        day_selected: R(
          "~bg-primary ~text-primary-foreground",
          "hover:~bg-primary hover:~text-primary-foreground",
          "focus:~bg-primary focus:~text-primary-foreground"
        ),
        day_today: R("today ~bg-accent ~text-accent-foreground"),
        day_outside: "~text-muted-foreground ~opacity-50",
        day_disabled: "~text-muted-foreground ~opacity-50",
        day_range_middle: R(
          "range-middle aria-selected:~bg-transparent aria-selected:~text-accent-foreground",
          "[&.today]:~bg-accent"
        ),
        day_range_start: "range-start",
        day_range_end: "range-end",
        day_hidden: "~invisible",
        ...n
      },
      components: {
        IconLeft: ({ ...r }) => /* @__PURE__ */ _.jsx(Ff, { className: "~h-5 ~w-5" }),
        IconRight: ({ ...r }) => /* @__PURE__ */ _.jsx(ts, { className: "~h-5 ~w-5" })
      },
      ...o
    }
  );
}
na.displayName = "Calendar";
const Rg = D.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ _.jsx(
  "div",
  {
    ref: t,
    className: R(
      "tw-reset ~rounded-xl ~border ~bg-card ~text-card-foreground ~shadow",
      e
    ),
    ...n
  }
));
Rg.displayName = "Card";
const kg = D.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ _.jsx(
  "div",
  {
    ref: t,
    className: R("~flex ~flex-col ~space-y-1.5 ~p-6", e),
    ...n
  }
));
kg.displayName = "CardHeader";
const Ag = D.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ _.jsx(
  "h3",
  {
    ref: t,
    className: R("~font-semibold ~leading-none ~tracking-tight", e),
    ...n
  }
));
Ag.displayName = "CardTitle";
const Ig = D.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ _.jsx("p", { ref: t, className: R("~text-muted-foreground", e), ...n }));
Ig.displayName = "CardDescription";
const Lg = D.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ _.jsx("div", { ref: t, className: R("~p-6 ~pt-0", e), ...n }));
Lg.displayName = "CardContent";
const Fg = D.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ _.jsx(
  "div",
  {
    ref: t,
    className: R("~flex ~items-center ~p-6 ~pt-0", e),
    ...n
  }
));
Fg.displayName = "CardFooter";
const Dw = ki, Mw = D.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ _.jsx(
  Ai,
  {
    ref: t,
    className: R("tw-reset", e),
    ...n
  }
)), Ac = ({
  className: e,
  ...n
}) => /* @__PURE__ */ _.jsx(wr, { className: R(e), ...n });
Ac.displayName = wr.displayName;
const Ic = D.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ _.jsx(
  xr,
  {
    ref: t,
    className: R(
      "~fixed ~inset-0 ~z-50 ~bg-background/80 ~backdrop-blur-sm",
      "data-[state=open]:~animate-in data-[state=open]:~fade-in-0",
      "data-[state=closed]:~animate-out data-[state=closed]:~fade-out-0",
      e
    ),
    ...n
  }
));
Ic.displayName = xr.displayName;
const Wg = D.forwardRef(({ className: e, children: n, ...t }, o) => /* @__PURE__ */ _.jsxs(Ac, { children: [
  /* @__PURE__ */ _.jsx(Ic, {}),
  /* @__PURE__ */ _.jsxs(
    Cr,
    {
      ref: o,
      className: R(
        "tw-reset ~fixed ~left-[50%] ~top-[50%] ~z-50 ~grid ~w-full ~max-w-lg ~translate-x-[-50%] ~translate-y-[-50%] ~gap-4 ~border ~bg-background ~p-6 ~shadow-lg ~duration-200 sm:~rounded-lg md:~w-full",
        "data-[state=open]:~animate-in data-[state=open]:~fade-in-0 data-[state=open]:~zoom-in-95 data-[state=open]:~slide-in-from-left-1/2 data-[state=open]:~slide-in-from-top-[48%]",
        "data-[state=closed]:~animate-out data-[state=closed]:~fade-out-0 data-[state=closed]:~zoom-out-95 data-[state=closed]:~slide-out-to-left-1/2 data-[state=closed]:~slide-out-to-top-[48%]",
        e
      ),
      ...t,
      children: [
        n,
        /* @__PURE__ */ _.jsxs(
          Tr,
          {
            className: R(
              "~absolute ~right-4 ~top-4 ~rounded-sm ~opacity-70 ~transition-opacity hover:~opacity-100 disabled:~pointer-events-none",
              "~ring-offset-background focus:~outline-none focus:~ring-2 focus:~ring-ring focus:~ring-offset-2",
              "data-[state=open]:~bg-accent data-[state=open]:~text-muted-foreground"
            ),
            children: [
              /* @__PURE__ */ _.jsx(ns, { className: "~h-4 ~w-4" }),
              /* @__PURE__ */ _.jsx("span", { className: "~sr-only", children: "Close" })
            ]
          }
        )
      ]
    }
  )
] }));
Wg.displayName = Cr.displayName;
const jg = ({
  className: e,
  ...n
}) => /* @__PURE__ */ _.jsx(
  "div",
  {
    className: R(
      "~flex ~flex-col ~space-y-1.5 ~text-center sm:~text-left",
      e
    ),
    ...n
  }
);
jg.displayName = "DialogHeader";
const Vg = ({
  className: e,
  ...n
}) => /* @__PURE__ */ _.jsx(
  "div",
  {
    className: R(
      "~flex ~flex-col-reverse sm:~flex-row sm:~justify-end sm:~space-x-2",
      e
    ),
    ...n
  }
);
Vg.displayName = "DialogFooter";
const Bg = _r;
Bg.displayName = _r.displayName;
const Yg = D.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ _.jsx(
  Er,
  {
    ref: t,
    className: R("~text-muted-foreground", e),
    ...n
  }
));
Yg.displayName = Er.displayName;
const Hg = D.forwardRef(
  ({ className: e, type: n, ...t }, o) => /* @__PURE__ */ _.jsx(
    "input",
    {
      type: n,
      className: R(
        "tw-reset ~flex ~h-9 ~w-full ~rounded-md ~border ~border-border ~bg-background ~px-3 ~py-1 ~shadow-sm ~transition-colors",
        "placeholder:~text-input",
        "focus-visible:~outline-none focus-visible:~ring-1 focus-visible:~ring-ring",
        "disabled:~cursor-not-allowed disabled:~bg-muted",
        e
      ),
      ref: o,
      ...t
    }
  )
);
Hg.displayName = "Input";
const Ug = /* @__PURE__ */ T((e, n) => /* @__PURE__ */ h(U.label, x({}, e, {
  ref: n,
  onMouseDown: (t) => {
    var o;
    (o = e.onMouseDown) === null || o === void 0 || o.call(e, t), !t.defaultPrevented && t.detail > 1 && t.preventDefault();
  }
}))), Lc = Ug, Kg = xt(
  "tw-reset ~leading-none peer-disabled:~cursor-not-allowed peer-disabled:~opacity-50"
), Gg = D.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ _.jsx(
  Lc,
  {
    ref: t,
    className: R(Kg(), e),
    ...n
  }
));
Gg.displayName = Lc.displayName;
const Fc = "Popover", [Wc, Ow] = xe(Fc, [
  $t
]), oa = $t(), [zg, tn] = Wc(Fc), qg = (e) => {
  const { __scopePopover: n, children: t, open: o, defaultOpen: r, onOpenChange: a, modal: i = !1 } = e, s = oa(n), c = k(null), [l, u] = z(!1), [d = !1, f] = Ee({
    prop: o,
    defaultProp: r,
    onChange: a
  });
  return /* @__PURE__ */ h(wn, s, /* @__PURE__ */ h(zg, {
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
}, Xg = "PopoverTrigger", Zg = /* @__PURE__ */ T((e, n) => {
  const { __scopePopover: t, ...o } = e, r = tn(Xg, t), a = oa(t), i = oe(n, r.triggerRef), s = /* @__PURE__ */ h(U.button, x({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": r.open,
    "aria-controls": r.contentId,
    "data-state": Bc(r.open)
  }, o, {
    ref: i,
    onClick: L(e.onClick, r.onOpenToggle)
  }));
  return r.hasCustomAnchor ? s : /* @__PURE__ */ h(po, x({
    asChild: !0
  }, a), s);
}), jc = "PopoverPortal", [Qg, Jg] = Wc(jc, {
  forceMount: void 0
}), e1 = (e) => {
  const { __scopePopover: n, forceMount: t, children: o, container: r } = e, a = tn(jc, n);
  return /* @__PURE__ */ h(Qg, {
    scope: n,
    forceMount: t
  }, /* @__PURE__ */ h(Me, {
    present: t || a.open
  }, /* @__PURE__ */ h($n, {
    asChild: !0,
    container: r
  }, o)));
}, hn = "PopoverContent", t1 = /* @__PURE__ */ T((e, n) => {
  const t = Jg(hn, e.__scopePopover), { forceMount: o = t.forceMount, ...r } = e, a = tn(hn, e.__scopePopover);
  return /* @__PURE__ */ h(Me, {
    present: o || a.open
  }, a.modal ? /* @__PURE__ */ h(n1, x({}, r, {
    ref: n
  })) : /* @__PURE__ */ h(o1, x({}, r, {
    ref: n
  })));
}), n1 = /* @__PURE__ */ T((e, n) => {
  const t = tn(hn, e.__scopePopover), o = k(null), r = oe(n, o), a = k(!1);
  return q(() => {
    const i = o.current;
    if (i)
      return lo(i);
  }, []), /* @__PURE__ */ h(co, {
    as: ct,
    allowPinchZoom: !0
  }, /* @__PURE__ */ h(Vc, x({}, e, {
    ref: r,
    trapFocus: t.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: L(e.onCloseAutoFocus, (i) => {
      var s;
      i.preventDefault(), a.current || (s = t.triggerRef.current) === null || s === void 0 || s.focus();
    }),
    onPointerDownOutside: L(e.onPointerDownOutside, (i) => {
      const s = i.detail.originalEvent, c = s.button === 0 && s.ctrlKey === !0, l = s.button === 2 || c;
      a.current = l;
    }, {
      checkForDefaultPrevented: !1
    }),
    onFocusOutside: L(
      e.onFocusOutside,
      (i) => i.preventDefault(),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), o1 = /* @__PURE__ */ T((e, n) => {
  const t = tn(hn, e.__scopePopover), o = k(!1), r = k(!1);
  return /* @__PURE__ */ h(Vc, x({}, e, {
    ref: n,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: (a) => {
      var i;
      if ((i = e.onCloseAutoFocus) === null || i === void 0 || i.call(e, a), !a.defaultPrevented) {
        var s;
        o.current || (s = t.triggerRef.current) === null || s === void 0 || s.focus(), a.preventDefault();
      }
      o.current = !1, r.current = !1;
    },
    onInteractOutside: (a) => {
      var i, s;
      (i = e.onInteractOutside) === null || i === void 0 || i.call(e, a), a.defaultPrevented || (o.current = !0, a.detail.originalEvent.type === "pointerdown" && (r.current = !0));
      const c = a.target;
      ((s = t.triggerRef.current) === null || s === void 0 ? void 0 : s.contains(c)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && r.current && a.preventDefault();
    }
  }));
}), Vc = /* @__PURE__ */ T((e, n) => {
  const { __scopePopover: t, trapFocus: o, onOpenAutoFocus: r, onCloseAutoFocus: a, disableOutsidePointerEvents: i, onEscapeKeyDown: s, onPointerDownOutside: c, onFocusOutside: l, onInteractOutside: u, ...d } = e, f = tn(hn, t), p = oa(t);
  return io(), /* @__PURE__ */ h(ao, {
    asChild: !0,
    loop: !0,
    trapped: o,
    onMountAutoFocus: r,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ h(Xt, {
    asChild: !0,
    disableOutsidePointerEvents: i,
    onInteractOutside: u,
    onEscapeKeyDown: s,
    onPointerDownOutside: c,
    onFocusOutside: l,
    onDismiss: () => f.onOpenChange(!1)
  }, /* @__PURE__ */ h(vo, x({
    "data-state": Bc(f.open),
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
function Bc(e) {
  return e ? "open" : "closed";
}
const r1 = qg, a1 = Zg, i1 = e1, Yc = t1, Hc = r1, Uc = D.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ _.jsx(
  a1,
  {
    ref: t,
    className: R("tw-reset", e),
    ...n
  }
)), ra = D.forwardRef(
  ({
    className: e,
    align: n = "start",
    sideOffset: t = 4,
    collisionPadding: o = 10,
    ...r
  }, a) => /* @__PURE__ */ _.jsx(i1, { children: /* @__PURE__ */ _.jsx(
    Yc,
    {
      ref: a,
      align: n,
      sideOffset: t,
      collisionPadding: o,
      className: R(
        "tw-reset ~z-50 ~w-72 ~rounded-md ~border ~bg-popover ~p-4 ~text-popover-foreground ~shadow-md ~outline-none",
        "data-[side=bottom]:~slide-in-from-top-2 data-[side=left]:~slide-in-from-right-2 data-[side=right]:~slide-in-from-left-2 data-[side=top]:~slide-in-from-bottom-2",
        "data-[state=open]:~animate-in data-[state=open]:~fade-in-0 data-[state=open]:~zoom-in-95",
        "data-[state=closed]:~animate-out data-[state=closed]:~fade-out-0 data-[state=closed]:~zoom-out-95",
        e
      ),
      ...r
    }
  ) })
);
ra.displayName = Yc.displayName;
function no(e, [n, t]) {
  return Math.min(t, Math.max(n, e));
}
const yo = /* @__PURE__ */ T((e, n) => /* @__PURE__ */ h(U.span, x({}, e, {
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
}))), s1 = yo, c1 = [
  " ",
  "Enter",
  "ArrowUp",
  "ArrowDown"
], l1 = [
  " ",
  "Enter"
], wo = "Select", [xo, aa, d1] = Zt(wo), [nn, Nw] = xe(wo, [
  d1,
  $t
]), ia = $t(), [u1, It] = nn(wo), [f1, p1] = nn(wo), v1 = (e) => {
  const { __scopeSelect: n, children: t, open: o, defaultOpen: r, onOpenChange: a, value: i, defaultValue: s, onValueChange: c, dir: l, name: u, autoComplete: d, disabled: f, required: p } = e, v = ia(n), [m, b] = z(null), [$, g] = z(null), [y, E] = z(!1), S = Rt(l), [N = !1, P] = Ee({
    prop: o,
    defaultProp: r,
    onChange: a
  }), [W, Y] = Ee({
    prop: i,
    defaultProp: s,
    onChange: c
  }), X = k(null), H = m ? !!m.closest("form") : !0, [V, G] = z(/* @__PURE__ */ new Set()), M = Array.from(V).map(
    (I) => I.props.value
  ).join(";");
  return /* @__PURE__ */ h(wn, v, /* @__PURE__ */ h(u1, {
    required: p,
    scope: n,
    trigger: m,
    onTriggerChange: b,
    valueNode: $,
    onValueNodeChange: g,
    valueNodeHasChildren: y,
    onValueNodeHasChildrenChange: E,
    contentId: De(),
    value: W,
    onValueChange: Y,
    open: N,
    onOpenChange: P,
    dir: S,
    triggerPointerDownPosRef: X,
    disabled: f
  }, /* @__PURE__ */ h(xo.Provider, {
    scope: n
  }, /* @__PURE__ */ h(f1, {
    scope: e.__scopeSelect,
    onNativeOptionAdd: ee((I) => {
      G(
        (F) => new Set(F).add(I)
      );
    }, []),
    onNativeOptionRemove: ee((I) => {
      G((F) => {
        const A = new Set(F);
        return A.delete(I), A;
      });
    }, [])
  }, t)), H ? /* @__PURE__ */ h(zc, {
    key: M,
    "aria-hidden": !0,
    required: p,
    tabIndex: -1,
    name: u,
    autoComplete: d,
    value: W,
    onChange: (I) => Y(I.target.value),
    disabled: f
  }, W === void 0 ? /* @__PURE__ */ h("option", {
    value: ""
  }) : null, Array.from(V)) : null));
}, m1 = "SelectTrigger", b1 = /* @__PURE__ */ T((e, n) => {
  const { __scopeSelect: t, disabled: o = !1, ...r } = e, a = ia(t), i = It(m1, t), s = i.disabled || o, c = oe(n, i.onTriggerChange), l = aa(t), [u, d, f] = qc((v) => {
    const m = l().filter(
      (g) => !g.disabled
    ), b = m.find(
      (g) => g.value === i.value
    ), $ = Xc(m, v, b);
    $ !== void 0 && i.onValueChange($.value);
  }), p = () => {
    s || (i.onOpenChange(!0), f());
  };
  return /* @__PURE__ */ h(po, x({
    asChild: !0
  }, a), /* @__PURE__ */ h(U.button, x({
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
  }, r, {
    ref: c,
    onClick: L(r.onClick, (v) => {
      v.currentTarget.focus();
    }),
    onPointerDown: L(r.onPointerDown, (v) => {
      const m = v.target;
      m.hasPointerCapture(v.pointerId) && m.releasePointerCapture(v.pointerId), v.button === 0 && v.ctrlKey === !1 && (p(), i.triggerPointerDownPosRef.current = {
        x: Math.round(v.pageX),
        y: Math.round(v.pageY)
      }, v.preventDefault());
    }),
    onKeyDown: L(r.onKeyDown, (v) => {
      const m = u.current !== "";
      !(v.ctrlKey || v.altKey || v.metaKey) && v.key.length === 1 && d(v.key), !(m && v.key === " ") && c1.includes(v.key) && (p(), v.preventDefault());
    })
  })));
}), h1 = "SelectValue", g1 = /* @__PURE__ */ T((e, n) => {
  const { __scopeSelect: t, className: o, style: r, children: a, placeholder: i, ...s } = e, c = It(h1, t), { onValueNodeHasChildrenChange: l } = c, u = a !== void 0, d = oe(n, c.onValueNodeChange);
  return Ie(() => {
    l(u);
  }, [
    l,
    u
  ]), /* @__PURE__ */ h(U.span, x({}, s, {
    ref: d,
    style: {
      pointerEvents: "none"
    }
  }), c.value === void 0 && i !== void 0 ? i : a);
}), $1 = /* @__PURE__ */ T((e, n) => {
  const { __scopeSelect: t, children: o, ...r } = e;
  return /* @__PURE__ */ h(U.span, x({
    "aria-hidden": !0
  }, r, {
    ref: n
  }), o || "▼");
}), y1 = (e) => /* @__PURE__ */ h($n, x({
  asChild: !0
}, e)), qt = "SelectContent", w1 = /* @__PURE__ */ T((e, n) => {
  const t = It(qt, e.__scopeSelect), [o, r] = z();
  if (Ie(() => {
    r(new DocumentFragment());
  }, []), !t.open) {
    const a = o;
    return a ? /* @__PURE__ */ hr(/* @__PURE__ */ h(Kc, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ h(xo.Slot, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ h("div", null, e.children))), a) : null;
  }
  return /* @__PURE__ */ h(x1, x({}, e, {
    ref: n
  }));
}), ot = 10, [Kc, Co] = nn(qt), x1 = /* @__PURE__ */ T((e, n) => {
  const {
    __scopeSelect: t,
    position: o = "item-aligned",
    onCloseAutoFocus: r,
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
  } = e, g = It(qt, t), [y, E] = z(null), [S, N] = z(null), P = oe(
    n,
    (Z) => E(Z)
  ), [W, Y] = z(null), [X, H] = z(null), V = aa(t), [G, M] = z(!1), I = k(!1);
  q(() => {
    if (y)
      return lo(y);
  }, [
    y
  ]), io();
  const F = ee((Z) => {
    const [le, ...be] = V().map(
      (pe) => pe.ref.current
    ), [ue] = be.slice(-1), fe = document.activeElement;
    for (const pe of Z)
      if (pe === fe || (pe == null || pe.scrollIntoView({
        block: "nearest"
      }), pe === le && S && (S.scrollTop = 0), pe === ue && S && (S.scrollTop = S.scrollHeight), pe == null || pe.focus(), document.activeElement !== fe))
        return;
  }, [
    V,
    S
  ]), A = ee(
    () => F([
      W,
      y
    ]),
    [
      F,
      W,
      y
    ]
  );
  q(() => {
    G && A();
  }, [
    G,
    A
  ]);
  const { onOpenChange: O, triggerPointerDownPosRef: B } = g;
  q(() => {
    if (y) {
      let Z = {
        x: 0,
        y: 0
      };
      const le = (ue) => {
        var fe, pe, Oe, Ce;
        Z = {
          x: Math.abs(Math.round(ue.pageX) - ((fe = (pe = B.current) === null || pe === void 0 ? void 0 : pe.x) !== null && fe !== void 0 ? fe : 0)),
          y: Math.abs(Math.round(ue.pageY) - ((Oe = (Ce = B.current) === null || Ce === void 0 ? void 0 : Ce.y) !== null && Oe !== void 0 ? Oe : 0))
        };
      }, be = (ue) => {
        Z.x <= 10 && Z.y <= 10 ? ue.preventDefault() : y.contains(ue.target) || O(!1), document.removeEventListener("pointermove", le), B.current = null;
      };
      return B.current !== null && (document.addEventListener("pointermove", le), document.addEventListener("pointerup", be, {
        capture: !0,
        once: !0
      })), () => {
        document.removeEventListener("pointermove", le), document.removeEventListener("pointerup", be, {
          capture: !0
        });
      };
    }
  }, [
    y,
    O,
    B
  ]), q(() => {
    const Z = () => O(!1);
    return window.addEventListener("blur", Z), window.addEventListener("resize", Z), () => {
      window.removeEventListener("blur", Z), window.removeEventListener("resize", Z);
    };
  }, [
    O
  ]);
  const [te, ne] = qc((Z) => {
    const le = V().filter(
      (fe) => !fe.disabled
    ), be = le.find(
      (fe) => fe.ref.current === document.activeElement
    ), ue = Xc(le, Z, be);
    ue && setTimeout(
      () => ue.ref.current.focus()
    );
  }), de = ee((Z, le, be) => {
    const ue = !I.current && !be;
    (g.value !== void 0 && g.value === le || ue) && (Y(Z), ue && (I.current = !0));
  }, [
    g.value
  ]), ce = ee(
    () => y == null ? void 0 : y.focus(),
    [
      y
    ]
  ), we = ee((Z, le, be) => {
    const ue = !I.current && !be;
    (g.value !== void 0 && g.value === le || ue) && H(Z);
  }, [
    g.value
  ]), Pe = o === "popper" ? ai : C1, Se = Pe === ai ? {
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
  return /* @__PURE__ */ h(Kc, {
    scope: t,
    content: y,
    viewport: S,
    onViewportChange: N,
    itemRefCallback: de,
    selectedItem: W,
    onItemLeave: ce,
    itemTextRefCallback: we,
    focusSelectedItem: A,
    selectedItemText: X,
    position: o,
    isPositioned: G,
    searchRef: te
  }, /* @__PURE__ */ h(co, {
    as: ct,
    allowPinchZoom: !0
  }, /* @__PURE__ */ h(ao, {
    asChild: !0,
    trapped: g.open,
    onMountAutoFocus: (Z) => {
      Z.preventDefault();
    },
    onUnmountAutoFocus: L(r, (Z) => {
      var le;
      (le = g.trigger) === null || le === void 0 || le.focus({
        preventScroll: !0
      }), Z.preventDefault();
    })
  }, /* @__PURE__ */ h(Xt, {
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
  }, $, Se, {
    onPlaced: () => M(!0),
    ref: P,
    style: {
      // flex layout so we can place the scroll buttons properly
      display: "flex",
      flexDirection: "column",
      // reset the outline by default as the content MAY get focused
      outline: "none",
      ...$.style
    },
    onKeyDown: L($.onKeyDown, (Z) => {
      const le = Z.ctrlKey || Z.altKey || Z.metaKey;
      if (Z.key === "Tab" && Z.preventDefault(), !le && Z.key.length === 1 && ne(Z.key), [
        "ArrowUp",
        "ArrowDown",
        "Home",
        "End"
      ].includes(Z.key)) {
        let ue = V().filter(
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
          () => F(ue)
        ), Z.preventDefault();
      }
    })
  }))))));
}), C1 = /* @__PURE__ */ T((e, n) => {
  const { __scopeSelect: t, onPlaced: o, ...r } = e, a = It(qt, t), i = Co(qt, t), [s, c] = z(null), [l, u] = z(null), d = oe(
    n,
    (P) => u(P)
  ), f = aa(t), p = k(!1), v = k(!0), { viewport: m, selectedItem: b, selectedItemText: $, focusSelectedItem: g } = i, y = ee(() => {
    if (a.trigger && a.valueNode && s && l && m && b && $) {
      const P = a.trigger.getBoundingClientRect(), W = l.getBoundingClientRect(), Y = a.valueNode.getBoundingClientRect(), X = $.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const fe = X.left - W.left, pe = Y.left - fe, Oe = P.left - pe, Ce = P.width + Oe, je = Math.max(Ce, W.width), et = window.innerWidth - ot, tt = no(pe, [
          ot,
          et - je
        ]);
        s.style.minWidth = Ce + "px", s.style.left = tt + "px";
      } else {
        const fe = W.right - X.right, pe = window.innerWidth - Y.right - fe, Oe = window.innerWidth - P.right - pe, Ce = P.width + Oe, je = Math.max(Ce, W.width), et = window.innerWidth - ot, tt = no(pe, [
          ot,
          et - je
        ]);
        s.style.minWidth = Ce + "px", s.style.right = tt + "px";
      }
      const H = f(), V = window.innerHeight - ot * 2, G = m.scrollHeight, M = window.getComputedStyle(l), I = parseInt(M.borderTopWidth, 10), F = parseInt(M.paddingTop, 10), A = parseInt(M.borderBottomWidth, 10), O = parseInt(M.paddingBottom, 10), B = I + F + G + O + A, te = Math.min(b.offsetHeight * 5, B), ne = window.getComputedStyle(m), de = parseInt(ne.paddingTop, 10), ce = parseInt(ne.paddingBottom, 10), we = P.top + P.height / 2 - ot, Pe = V - we, Se = b.offsetHeight / 2, Z = b.offsetTop + Se, le = I + F + Z, be = B - le;
      if (le <= we) {
        const fe = b === H[H.length - 1].ref.current;
        s.style.bottom = "0px";
        const pe = l.clientHeight - m.offsetTop - m.offsetHeight, Oe = Math.max(Pe, Se + (fe ? ce : 0) + pe + A), Ce = le + Oe;
        s.style.height = Ce + "px";
      } else {
        const fe = b === H[0].ref.current;
        s.style.top = "0px";
        const Oe = Math.max(we, I + m.offsetTop + (fe ? de : 0) + Se) + be;
        s.style.height = Oe + "px", m.scrollTop = le - we + m.offsetTop;
      }
      s.style.margin = `${ot}px 0`, s.style.minHeight = te + "px", s.style.maxHeight = V + "px", o == null || o(), requestAnimationFrame(
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
    o
  ]);
  Ie(
    () => y(),
    [
      y
    ]
  );
  const [E, S] = z();
  Ie(() => {
    l && S(window.getComputedStyle(l).zIndex);
  }, [
    l
  ]);
  const N = ee((P) => {
    P && v.current === !0 && (y(), g == null || g(), v.current = !1);
  }, [
    y,
    g
  ]);
  return /* @__PURE__ */ h(_1, {
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
      zIndex: E
    }
  }, /* @__PURE__ */ h(U.div, x({}, r, {
    ref: d,
    style: {
      // When we get the height of the content, it includes borders. If we were to set
      // the height without having `boxSizing: 'border-box'` it would be too big.
      boxSizing: "border-box",
      // We need to ensure the content doesn't get taller than the wrapper
      maxHeight: "100%",
      ...r.style
    }
  }))));
}), ai = /* @__PURE__ */ T((e, n) => {
  const { __scopeSelect: t, align: o = "start", collisionPadding: r = ot, ...a } = e, i = ia(t);
  return /* @__PURE__ */ h(vo, x({}, i, a, {
    ref: n,
    align: o,
    collisionPadding: r,
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
}), [_1, E1] = nn(qt, {}), ii = "SelectViewport", T1 = /* @__PURE__ */ T((e, n) => {
  const { __scopeSelect: t, ...o } = e, r = Co(ii, t), a = E1(ii, t), i = oe(n, r.onViewportChange), s = k(0);
  return /* @__PURE__ */ h(Ot, null, /* @__PURE__ */ h("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ h(xo.Slot, {
    scope: t
  }, /* @__PURE__ */ h(U.div, x({
    "data-radix-select-viewport": "",
    role: "presentation"
  }, o, {
    ref: i,
    style: {
      // we use position: 'relative' here on the `viewport` so that when we call
      // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
      // (independent of the scrollUpButton).
      position: "relative",
      flex: 1,
      overflow: "auto",
      ...o.style
    },
    onScroll: L(o.onScroll, (c) => {
      const l = c.currentTarget, { contentWrapper: u, shouldExpandOnScrollRef: d } = a;
      if (d != null && d.current && u) {
        const f = Math.abs(s.current - l.scrollTop);
        if (f > 0) {
          const p = window.innerHeight - ot * 2, v = parseFloat(u.style.minHeight), m = parseFloat(u.style.height), b = Math.max(v, m);
          if (b < p) {
            const $ = b + f, g = Math.min(p, $), y = $ - g;
            u.style.height = g + "px", u.style.bottom === "0px" && (l.scrollTop = y > 0 ? y : 0, u.style.justifyContent = "flex-end");
          }
        }
      }
      s.current = l.scrollTop;
    })
  }))));
}), P1 = "SelectGroup", [S1, D1] = nn(P1), M1 = /* @__PURE__ */ T((e, n) => {
  const { __scopeSelect: t, ...o } = e, r = De();
  return /* @__PURE__ */ h(S1, {
    scope: t,
    id: r
  }, /* @__PURE__ */ h(U.div, x({
    role: "group",
    "aria-labelledby": r
  }, o, {
    ref: n
  })));
}), O1 = "SelectLabel", N1 = /* @__PURE__ */ T((e, n) => {
  const { __scopeSelect: t, ...o } = e, r = D1(O1, t);
  return /* @__PURE__ */ h(U.div, x({
    id: r.id
  }, o, {
    ref: n
  }));
}), dr = "SelectItem", [R1, Gc] = nn(dr), k1 = /* @__PURE__ */ T((e, n) => {
  const { __scopeSelect: t, value: o, disabled: r = !1, textValue: a, ...i } = e, s = It(dr, t), c = Co(dr, t), l = s.value === o, [u, d] = z(a ?? ""), [f, p] = z(!1), v = oe(n, ($) => {
    var g;
    return (g = c.itemRefCallback) === null || g === void 0 ? void 0 : g.call(c, $, o, r);
  }), m = De(), b = () => {
    r || (s.onValueChange(o), s.onOpenChange(!1));
  };
  return /* @__PURE__ */ h(R1, {
    scope: t,
    value: o,
    disabled: r,
    textId: m,
    isSelected: l,
    onItemTextChange: ee(($) => {
      d((g) => {
        var y;
        return g || ((y = $ == null ? void 0 : $.textContent) !== null && y !== void 0 ? y : "").trim();
      });
    }, [])
  }, /* @__PURE__ */ h(xo.ItemSlot, {
    scope: t,
    value: o,
    disabled: r,
    textValue: u
  }, /* @__PURE__ */ h(U.div, x({
    role: "option",
    "aria-labelledby": m,
    "data-highlighted": f ? "" : void 0,
    "aria-selected": l && f,
    "data-state": l ? "checked" : "unchecked",
    "aria-disabled": r || void 0,
    "data-disabled": r ? "" : void 0,
    tabIndex: r ? void 0 : -1
  }, i, {
    ref: v,
    onFocus: L(
      i.onFocus,
      () => p(!0)
    ),
    onBlur: L(
      i.onBlur,
      () => p(!1)
    ),
    onPointerUp: L(i.onPointerUp, b),
    onPointerMove: L(i.onPointerMove, ($) => {
      if (r) {
        var g;
        (g = c.onItemLeave) === null || g === void 0 || g.call(c);
      } else
        $.currentTarget.focus({
          preventScroll: !0
        });
    }),
    onPointerLeave: L(i.onPointerLeave, ($) => {
      if ($.currentTarget === document.activeElement) {
        var g;
        (g = c.onItemLeave) === null || g === void 0 || g.call(c);
      }
    }),
    onKeyDown: L(i.onKeyDown, ($) => {
      var g;
      ((g = c.searchRef) === null || g === void 0 ? void 0 : g.current) !== "" && $.key === " " || (l1.includes($.key) && b(), $.key === " " && $.preventDefault());
    })
  }))));
}), Fn = "SelectItemText", A1 = /* @__PURE__ */ T((e, n) => {
  const { __scopeSelect: t, className: o, style: r, ...a } = e, i = It(Fn, t), s = Co(Fn, t), c = Gc(Fn, t), l = p1(Fn, t), [u, d] = z(null), f = oe(
    n,
    ($) => d($),
    c.onItemTextChange,
    ($) => {
      var g;
      return (g = s.itemTextRefCallback) === null || g === void 0 ? void 0 : g.call(s, $, c.value, c.disabled);
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
  ]), /* @__PURE__ */ h(Ot, null, /* @__PURE__ */ h(U.span, x({
    id: c.textId
  }, a, {
    ref: f
  })), c.isSelected && i.valueNode && !i.valueNodeHasChildren ? /* @__PURE__ */ hr(a.children, i.valueNode) : null);
}), I1 = "SelectItemIndicator", L1 = /* @__PURE__ */ T((e, n) => {
  const { __scopeSelect: t, ...o } = e;
  return Gc(I1, t).isSelected ? /* @__PURE__ */ h(U.span, x({
    "aria-hidden": !0
  }, o, {
    ref: n
  })) : null;
}), F1 = /* @__PURE__ */ T((e, n) => {
  const { __scopeSelect: t, ...o } = e;
  return /* @__PURE__ */ h(U.div, x({
    "aria-hidden": !0
  }, o, {
    ref: n
  }));
}), zc = /* @__PURE__ */ T((e, n) => {
  const { value: t, ...o } = e, r = k(null), a = oe(n, r), i = _n(t);
  return q(() => {
    const s = r.current, c = window.HTMLSelectElement.prototype, u = Object.getOwnPropertyDescriptor(c, "value").set;
    if (i !== t && u) {
      const d = new Event("change", {
        bubbles: !0
      });
      u.call(s, t), s.dispatchEvent(d);
    }
  }, [
    i,
    t
  ]), /* @__PURE__ */ h(yo, {
    asChild: !0
  }, /* @__PURE__ */ h("select", x({}, o, {
    ref: a,
    defaultValue: t
  })));
});
zc.displayName = "BubbleSelect";
function qc(e) {
  const n = _e(e), t = k(""), o = k(0), r = ee((i) => {
    const s = t.current + i;
    n(s), function c(l) {
      t.current = l, window.clearTimeout(o.current), l !== "" && (o.current = window.setTimeout(
        () => c(""),
        1e3
      ));
    }(s);
  }, [
    n
  ]), a = ee(() => {
    t.current = "", window.clearTimeout(o.current);
  }, []);
  return q(() => () => window.clearTimeout(o.current), []), [
    t,
    r,
    a
  ];
}
function Xc(e, n, t) {
  const r = n.length > 1 && Array.from(n).every(
    (l) => l === n[0]
  ) ? n[0] : n, a = t ? e.indexOf(t) : -1;
  let i = W1(e, Math.max(a, 0));
  r.length === 1 && (i = i.filter(
    (l) => l !== t
  ));
  const c = i.find(
    (l) => l.textValue.toLowerCase().startsWith(r.toLowerCase())
  );
  return c !== t ? c : void 0;
}
function W1(e, n) {
  return e.map(
    (t, o) => e[(n + o) % e.length]
  );
}
const j1 = v1, Zc = b1, V1 = g1, B1 = $1, Y1 = y1, Qc = w1, H1 = T1, U1 = M1, Jc = N1, el = k1, K1 = A1, G1 = L1, tl = F1, Rw = j1, kw = U1, Aw = V1, z1 = D.forwardRef(({ className: e, children: n, ...t }, o) => /* @__PURE__ */ _.jsxs(
  Zc,
  {
    ref: o,
    className: R(
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
      /* @__PURE__ */ _.jsx(B1, { asChild: !0, children: /* @__PURE__ */ _.jsx(Rf, { className: "~h-4 ~w-4 ~opacity-50" }) })
    ]
  }
));
z1.displayName = Zc.displayName;
const q1 = D.forwardRef(({ className: e, children: n, position: t = "item-aligned", ...o }, r) => /* @__PURE__ */ _.jsx(Y1, { children: /* @__PURE__ */ _.jsx(
  Qc,
  {
    ref: r,
    className: R(
      "tw-reset ~relative ~z-50 ~min-w-[8em] ~overflow-hidden ~rounded-md ~border ~bg-popover ~font-normal ~leading-6 ~text-popover-foreground ~shadow-md",
      "data-[state=open]:~animate-in data-[state=open]:~fade-in-0 data-[state=open]:~zoom-in-95",
      "data-[state=closed]:~animate-out data-[state=closed]:~fade-out-0 data-[state=closed]:~zoom-out-95",
      "data-[side=bottom]:~slide-in-from-top-2 data-[side=left]:~slide-in-from-right-2 data-[side=right]:~slide-in-from-left-2 data-[side=top]:~slide-in-from-bottom-2",
      t === "popper" && "data-[side=bottom]:~translate-y-1 data-[side=left]:~-translate-x-1 data-[side=right]:~translate-x-1 data-[side=top]:~-translate-y-1",
      e
    ),
    position: t,
    ...o,
    children: /* @__PURE__ */ _.jsx(
      H1,
      {
        className: R(
          "~p-0",
          // dropdown padding
          t === "popper" && "~h-[var(--radix-select-trigger-height)] ~w-full ~min-w-[var(--radix-select-trigger-width)]"
        ),
        children: n
      }
    )
  }
) }));
q1.displayName = Qc.displayName;
const X1 = D.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ _.jsx(
  Jc,
  {
    ref: t,
    className: R("~px-2 ~py-1.5 ~font-bold", e),
    ...n
  }
));
X1.displayName = Jc.displayName;
const Z1 = D.forwardRef(({ className: e, children: n, ...t }, o) => /* @__PURE__ */ _.jsxs(
  el,
  {
    ref: o,
    className: R(
      "~relative ~flex ~w-full ~cursor-pointer ~select-none ~items-center ~rounded-sm ~py-1.5 ~pl-2 ~pr-8 ~outline-none",
      "focus:~bg-accent focus:~text-accent-foreground",
      "data-[disabled]:~pointer-events-none data-[disabled]:~opacity-50",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ _.jsx("span", { className: "~absolute ~right-2 ~flex ~h-3.5 ~w-3.5 ~items-center ~justify-center", children: /* @__PURE__ */ _.jsx(G1, { children: /* @__PURE__ */ _.jsx(Sr, { className: "~h-4 ~w-4" }) }) }),
      /* @__PURE__ */ _.jsx(K1, { children: n })
    ]
  }
));
Z1.displayName = el.displayName;
const Q1 = D.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ _.jsx(
  tl,
  {
    ref: t,
    className: R("~-mx-1 ~my-1 ~h-px ~bg-muted", e),
    ...n
  }
));
Q1.displayName = tl.displayName;
const ur = "horizontal", J1 = [
  "horizontal",
  "vertical"
], nl = /* @__PURE__ */ T((e, n) => {
  const { decorative: t, orientation: o = ur, ...r } = e, a = ol(o) ? o : ur, s = t ? {
    role: "none"
  } : {
    "aria-orientation": a === "vertical" ? a : void 0,
    role: "separator"
  };
  return /* @__PURE__ */ h(U.div, x({
    "data-orientation": a
  }, s, r, {
    ref: n
  }));
});
nl.propTypes = {
  orientation(e, n, t) {
    const o = e[n], r = String(o);
    return o && !ol(o) ? new Error(e$(r, t)) : null;
  }
};
function e$(e, n) {
  return `Invalid prop \`orientation\` of value \`${e}\` supplied to \`${n}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${ur}\`.`;
}
function ol(e) {
  return J1.includes(e);
}
const rl = nl, t$ = D.forwardRef(
  ({ className: e, orientation: n = "horizontal", decorative: t = !0, ...o }, r) => /* @__PURE__ */ _.jsx(
    rl,
    {
      ref: r,
      decorative: t,
      orientation: n,
      className: R(
        "tw-reset ~shrink-0 ~bg-border",
        n === "horizontal" ? "~h-[1px] ~w-full" : "~h-full ~w-[1px]",
        e
      ),
      ...o
    }
  )
);
t$.displayName = rl.displayName;
const al = [
  "PageUp",
  "PageDown"
], il = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
], sl = {
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
}, Sn = "Slider", [fr, n$, o$] = Zt(Sn), [cl, Iw] = xe(Sn, [
  o$
]), [r$, _o] = cl(Sn), a$ = /* @__PURE__ */ T((e, n) => {
  const { name: t, min: o = 0, max: r = 100, step: a = 1, orientation: i = "horizontal", disabled: s = !1, minStepsBetweenThumbs: c = 0, defaultValue: l = [
    o
  ], value: u, onValueChange: d = () => {
  }, onValueCommit: f = () => {
  }, inverted: p = !1, ...v } = e, [m, b] = z(null), $ = oe(
    n,
    (M) => b(M)
  ), g = k(/* @__PURE__ */ new Set()), y = k(0), E = i === "horizontal", S = m ? !!m.closest("form") : !0, N = E ? i$ : s$, [P = [], W] = Ee({
    prop: u,
    defaultProp: l,
    onChange: (M) => {
      var I;
      (I = [
        ...g.current
      ][y.current]) === null || I === void 0 || I.focus(), d(M);
    }
  }), Y = k(P);
  function X(M) {
    const I = b$(P, M);
    G(M, I);
  }
  function H(M) {
    G(M, y.current);
  }
  function V() {
    const M = Y.current[y.current];
    P[y.current] !== M && f(P);
  }
  function G(M, I, { commit: F } = {
    commit: !1
  }) {
    const A = y$(a), O = w$(Math.round((M - o) / a) * a + o, A), B = no(O, [
      o,
      r
    ]);
    W((te = []) => {
      const ne = v$(te, B, I);
      if ($$(ne, c * a)) {
        y.current = ne.indexOf(B);
        const de = String(ne) !== String(te);
        return de && F && f(ne), de ? ne : te;
      } else
        return te;
    });
  }
  return /* @__PURE__ */ h(r$, {
    scope: e.__scopeSlider,
    disabled: s,
    min: o,
    max: r,
    valueIndexToChangeRef: y,
    thumbs: g.current,
    values: P,
    orientation: i
  }, /* @__PURE__ */ h(fr.Provider, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ h(fr.Slot, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ h(N, x({
    "aria-disabled": s,
    "data-disabled": s ? "" : void 0
  }, v, {
    ref: $,
    onPointerDown: L(v.onPointerDown, () => {
      s || (Y.current = P);
    }),
    min: o,
    max: r,
    inverted: p,
    onSlideStart: s ? void 0 : X,
    onSlideMove: s ? void 0 : H,
    onSlideEnd: s ? void 0 : V,
    onHomeKeyDown: () => !s && G(o, 0, {
      commit: !0
    }),
    onEndKeyDown: () => !s && G(r, P.length - 1, {
      commit: !0
    }),
    onStepKeyDown: ({ event: M, direction: I }) => {
      if (!s) {
        const O = al.includes(M.key) || M.shiftKey && il.includes(M.key) ? 10 : 1, B = y.current, te = P[B], ne = a * O * I;
        G(te + ne, B, {
          commit: !0
        });
      }
    }
  })))), S && P.map(
    (M, I) => /* @__PURE__ */ h(p$, {
      key: I,
      name: t ? t + (P.length > 1 ? "[]" : "") : void 0,
      value: M
    })
  ));
}), [ll, dl] = cl(Sn, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), i$ = /* @__PURE__ */ T((e, n) => {
  const { min: t, max: o, dir: r, inverted: a, onSlideStart: i, onSlideMove: s, onSlideEnd: c, onStepKeyDown: l, ...u } = e, [d, f] = z(null), p = oe(
    n,
    (y) => f(y)
  ), v = k(), m = Rt(r), b = m === "ltr", $ = b && !a || !b && a;
  function g(y) {
    const E = v.current || d.getBoundingClientRect(), S = [
      0,
      E.width
    ], P = sa(S, $ ? [
      t,
      o
    ] : [
      o,
      t
    ]);
    return v.current = E, P(y - E.left);
  }
  return /* @__PURE__ */ h(ll, {
    scope: e.__scopeSlider,
    startEdge: $ ? "left" : "right",
    endEdge: $ ? "right" : "left",
    direction: $ ? 1 : -1,
    size: "width"
  }, /* @__PURE__ */ h(ul, x({
    dir: m,
    "data-orientation": "horizontal"
  }, u, {
    ref: p,
    style: {
      ...u.style,
      "--radix-slider-thumb-transform": "translateX(-50%)"
    },
    onSlideStart: (y) => {
      const E = g(y.clientX);
      i == null || i(E);
    },
    onSlideMove: (y) => {
      const E = g(y.clientX);
      s == null || s(E);
    },
    onSlideEnd: () => {
      v.current = void 0, c == null || c();
    },
    onStepKeyDown: (y) => {
      const S = sl[$ ? "from-left" : "from-right"].includes(y.key);
      l == null || l({
        event: y,
        direction: S ? -1 : 1
      });
    }
  })));
}), s$ = /* @__PURE__ */ T((e, n) => {
  const { min: t, max: o, inverted: r, onSlideStart: a, onSlideMove: i, onSlideEnd: s, onStepKeyDown: c, ...l } = e, u = k(null), d = oe(n, u), f = k(), p = !r;
  function v(m) {
    const b = f.current || u.current.getBoundingClientRect(), $ = [
      0,
      b.height
    ], y = sa($, p ? [
      o,
      t
    ] : [
      t,
      o
    ]);
    return f.current = b, y(m - b.top);
  }
  return /* @__PURE__ */ h(ll, {
    scope: e.__scopeSlider,
    startEdge: p ? "bottom" : "top",
    endEdge: p ? "top" : "bottom",
    size: "height",
    direction: p ? 1 : -1
  }, /* @__PURE__ */ h(ul, x({
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
      const $ = sl[p ? "from-bottom" : "from-top"].includes(m.key);
      c == null || c({
        event: m,
        direction: $ ? -1 : 1
      });
    }
  })));
}), ul = /* @__PURE__ */ T((e, n) => {
  const { __scopeSlider: t, onSlideStart: o, onSlideMove: r, onSlideEnd: a, onHomeKeyDown: i, onEndKeyDown: s, onStepKeyDown: c, ...l } = e, u = _o(Sn, t);
  return /* @__PURE__ */ h(U.span, x({}, l, {
    ref: n,
    onKeyDown: L(e.onKeyDown, (d) => {
      d.key === "Home" ? (i(d), d.preventDefault()) : d.key === "End" ? (s(d), d.preventDefault()) : al.concat(il).includes(d.key) && (c(d), d.preventDefault());
    }),
    onPointerDown: L(e.onPointerDown, (d) => {
      const f = d.target;
      f.setPointerCapture(d.pointerId), d.preventDefault(), u.thumbs.has(f) ? f.focus() : o(d);
    }),
    onPointerMove: L(e.onPointerMove, (d) => {
      d.target.hasPointerCapture(d.pointerId) && r(d);
    }),
    onPointerUp: L(e.onPointerUp, (d) => {
      const f = d.target;
      f.hasPointerCapture(d.pointerId) && (f.releasePointerCapture(d.pointerId), a(d));
    })
  }));
}), c$ = "SliderTrack", l$ = /* @__PURE__ */ T((e, n) => {
  const { __scopeSlider: t, ...o } = e, r = _o(c$, t);
  return /* @__PURE__ */ h(U.span, x({
    "data-disabled": r.disabled ? "" : void 0,
    "data-orientation": r.orientation
  }, o, {
    ref: n
  }));
}), si = "SliderRange", d$ = /* @__PURE__ */ T((e, n) => {
  const { __scopeSlider: t, ...o } = e, r = _o(si, t), a = dl(si, t), i = k(null), s = oe(n, i), c = r.values.length, l = r.values.map(
    (f) => fl(f, r.min, r.max)
  ), u = c > 1 ? Math.min(...l) : 0, d = 100 - Math.max(...l);
  return /* @__PURE__ */ h(U.span, x({
    "data-orientation": r.orientation,
    "data-disabled": r.disabled ? "" : void 0
  }, o, {
    ref: s,
    style: {
      ...e.style,
      [a.startEdge]: u + "%",
      [a.endEdge]: d + "%"
    }
  }));
}), ci = "SliderThumb", u$ = /* @__PURE__ */ T((e, n) => {
  const t = n$(e.__scopeSlider), [o, r] = z(null), a = oe(
    n,
    (s) => r(s)
  ), i = Xe(
    () => o ? t().findIndex(
      (s) => s.ref.current === o
    ) : -1,
    [
      t,
      o
    ]
  );
  return /* @__PURE__ */ h(f$, x({}, e, {
    ref: a,
    index: i
  }));
}), f$ = /* @__PURE__ */ T((e, n) => {
  const { __scopeSlider: t, index: o, ...r } = e, a = _o(ci, t), i = dl(ci, t), [s, c] = z(null), l = oe(
    n,
    (b) => c(b)
  ), u = yn(s), d = a.values[o], f = d === void 0 ? 0 : fl(d, a.min, a.max), p = m$(o, a.values.length), v = u == null ? void 0 : u[i.size], m = v ? h$(v, f, i.direction) : 0;
  return q(() => {
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
  }, /* @__PURE__ */ h(fr.ItemSlot, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ h(U.span, x({
    role: "slider",
    "aria-label": e["aria-label"] || p,
    "aria-valuemin": a.min,
    "aria-valuenow": d,
    "aria-valuemax": a.max,
    "aria-orientation": a.orientation,
    "data-orientation": a.orientation,
    "data-disabled": a.disabled ? "" : void 0,
    tabIndex: a.disabled ? void 0 : 0
  }, r, {
    ref: l,
    style: d === void 0 ? {
      display: "none"
    } : e.style,
    onFocus: L(e.onFocus, () => {
      a.valueIndexToChangeRef.current = o;
    })
  }))));
}), p$ = (e) => {
  const { value: n, ...t } = e, o = k(null), r = _n(n);
  return q(() => {
    const a = o.current, i = window.HTMLInputElement.prototype, c = Object.getOwnPropertyDescriptor(i, "value").set;
    if (r !== n && c) {
      const l = new Event("input", {
        bubbles: !0
      });
      c.call(a, n), a.dispatchEvent(l);
    }
  }, [
    r,
    n
  ]), /* @__PURE__ */ h("input", x({
    style: {
      display: "none"
    }
  }, t, {
    ref: o,
    defaultValue: n
  }));
};
function v$(e = [], n, t) {
  const o = [
    ...e
  ];
  return o[t] = n, o.sort(
    (r, a) => r - a
  );
}
function fl(e, n, t) {
  const a = 100 / (t - n) * (e - n);
  return no(a, [
    0,
    100
  ]);
}
function m$(e, n) {
  return n > 2 ? `Value ${e + 1} of ${n}` : n === 2 ? [
    "Minimum",
    "Maximum"
  ][e] : void 0;
}
function b$(e, n) {
  if (e.length === 1)
    return 0;
  const t = e.map(
    (r) => Math.abs(r - n)
  ), o = Math.min(...t);
  return t.indexOf(o);
}
function h$(e, n, t) {
  const o = e / 2, a = sa([
    0,
    50
  ], [
    0,
    o
  ]);
  return (o - a(n) * t) * t;
}
function g$(e) {
  return e.slice(0, -1).map(
    (n, t) => e[t + 1] - n
  );
}
function $$(e, n) {
  if (n > 0) {
    const t = g$(e);
    return Math.min(...t) >= n;
  }
  return !0;
}
function sa(e, n) {
  return (t) => {
    if (e[0] === e[1] || n[0] === n[1])
      return n[0];
    const o = (n[1] - n[0]) / (e[1] - e[0]);
    return n[0] + o * (t - e[0]);
  };
}
function y$(e) {
  return (String(e).split(".")[1] || "").length;
}
function w$(e, n) {
  const t = Math.pow(10, n);
  return Math.round(e * t) / t;
}
const pl = a$, x$ = l$, C$ = d$, li = u$, _$ = D.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ _.jsxs(
  pl,
  {
    ref: t,
    className: R(
      "tw-reset ~group ~relative ~flex ~w-full ~cursor-pointer ~touch-none ~select-none ~items-center",
      "data-[disabled]:~cursor-not-allowed data-[disabled]:~opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ _.jsx(x$, { className: "~relative ~h-1.5 ~w-full ~grow ~overflow-hidden ~rounded-full ~bg-primary/20", children: /* @__PURE__ */ _.jsx(C$, { className: "~absolute ~h-full ~bg-primary" }) }),
      /* @__PURE__ */ _.jsx(
        li,
        {
          className: R(
            "~block ~h-4 ~w-4 ~rounded-full ~border ~border-primary/50 ~bg-background ~shadow ~transition-colors",
            "focus-visible:~outline-none focus-visible:~ring-1 focus-visible:~ring-ring"
          )
        }
      ),
      /* @__PURE__ */ _.jsx(
        li,
        {
          className: R(
            "~block ~h-4 ~w-4 ~rounded-full ~border ~border-primary/50 ~bg-background ~shadow ~transition-colors",
            "focus-visible:~outline-none focus-visible:~ring-1 focus-visible:~ring-ring"
          )
        }
      )
    ]
  }
));
_$.displayName = pl.displayName;
const vl = "Switch", [E$, Lw] = xe(vl), [T$, P$] = E$(vl), S$ = /* @__PURE__ */ T((e, n) => {
  const { __scopeSwitch: t, name: o, checked: r, defaultChecked: a, required: i, disabled: s, value: c = "on", onCheckedChange: l, ...u } = e, [d, f] = z(null), p = oe(
    n,
    (g) => f(g)
  ), v = k(!1), m = d ? !!d.closest("form") : !0, [b = !1, $] = Ee({
    prop: r,
    defaultProp: a,
    onChange: l
  });
  return /* @__PURE__ */ h(T$, {
    scope: t,
    checked: b,
    disabled: s
  }, /* @__PURE__ */ h(U.button, x({
    type: "button",
    role: "switch",
    "aria-checked": b,
    "aria-required": i,
    "data-state": ml(b),
    "data-disabled": s ? "" : void 0,
    disabled: s,
    value: c
  }, u, {
    ref: p,
    onClick: L(e.onClick, (g) => {
      $(
        (y) => !y
      ), m && (v.current = g.isPropagationStopped(), v.current || g.stopPropagation());
    })
  })), m && /* @__PURE__ */ h(O$, {
    control: d,
    bubbles: !v.current,
    name: o,
    value: c,
    checked: b,
    required: i,
    disabled: s,
    style: {
      transform: "translateX(-100%)"
    }
  }));
}), D$ = "SwitchThumb", M$ = /* @__PURE__ */ T((e, n) => {
  const { __scopeSwitch: t, ...o } = e, r = P$(D$, t);
  return /* @__PURE__ */ h(U.span, x({
    "data-state": ml(r.checked),
    "data-disabled": r.disabled ? "" : void 0
  }, o, {
    ref: n
  }));
}), O$ = (e) => {
  const { control: n, checked: t, bubbles: o = !0, ...r } = e, a = k(null), i = _n(t), s = yn(n);
  return q(() => {
    const c = a.current, l = window.HTMLInputElement.prototype, d = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (i !== t && d) {
      const f = new Event("click", {
        bubbles: o
      });
      d.call(c, t), c.dispatchEvent(f);
    }
  }, [
    i,
    t,
    o
  ]), /* @__PURE__ */ h("input", x({
    type: "checkbox",
    "aria-hidden": !0,
    defaultChecked: t
  }, r, {
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
function ml(e) {
  return e ? "checked" : "unchecked";
}
const bl = S$, N$ = M$, R$ = D.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ _.jsx(
  bl,
  {
    className: R(
      "tw-reset ~peer ~inline-flex ~h-4 ~w-8 ~shrink-0 ~cursor-pointer ~items-center ~rounded-full ~border-2 ~border-transparent ~shadow-sm ~transition-colors",
      "focus-visible:~outline-none focus-visible:~ring-2 focus-visible:~ring-ring focus-visible:~ring-offset-2 focus-visible:~ring-offset-background",
      "disabled:~cursor-not-allowed disabled:~opacity-50",
      "data-[state=checked]:~bg-primary data-[state=unchecked]:~bg-input",
      e
    ),
    ...n,
    ref: t,
    children: /* @__PURE__ */ _.jsx(
      N$,
      {
        className: R(
          "~pointer-events-none ~block ~h-3 ~w-3 ~rounded-full ~bg-background ~shadow-lg ~ring-0 ~transition-transform",
          "data-[state=checked]:~translate-x-4 data-[state=unchecked]:~translate-x-0"
        )
      }
    )
  }
));
R$.displayName = bl.displayName;
const k$ = D.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ _.jsx("div", { className: "tw-reset ~w-full ~overflow-auto", children: /* @__PURE__ */ _.jsx(
  "table",
  {
    ref: t,
    className: R("~w-full ~caption-bottom", e),
    ...n
  }
) }));
k$.displayName = "Table";
const A$ = D.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ _.jsx("thead", { ref: t, className: R("[&_tr]:~border-b", e), ...n }));
A$.displayName = "TableHeader";
const I$ = D.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ _.jsx(
  "tbody",
  {
    ref: t,
    className: R("[&_tr:last-child]:~border-0", e),
    ...n
  }
));
I$.displayName = "TableBody";
const L$ = D.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ _.jsx(
  "tfoot",
  {
    ref: t,
    className: R(
      "~bg-primary ~font-medium ~text-primary-foreground",
      e
    ),
    ...n
  }
));
L$.displayName = "TableFooter";
const F$ = D.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ _.jsx(
  "tr",
  {
    ref: t,
    className: R(
      "~border-b ~transition-colors hover:~bg-muted/50 data-[state=selected]:~bg-muted",
      e
    ),
    ...n
  }
));
F$.displayName = "TableRow";
const W$ = D.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ _.jsx(
  "th",
  {
    ref: t,
    className: R(
      "~h-9 ~px-2 ~text-left ~align-middle ~font-semibold ~text-muted-foreground",
      "[&:has([role=checkbox])]:~pr-0 [&>[role=checkbox]]:~translate-y-[2px]",
      e
    ),
    ...n
  }
));
W$.displayName = "TableHead";
const j$ = D.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ _.jsx(
  "td",
  {
    ref: t,
    className: R(
      "~p-2 ~align-middle [&:has([role=checkbox])]:~pr-0 [&>[role=checkbox]]:~translate-y-[2px]",
      e
    ),
    ...n
  }
));
j$.displayName = "TableCell";
const V$ = D.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ _.jsx(
  "caption",
  {
    ref: t,
    className: R("~mt-4 ~text-muted-foreground", e),
    ...n
  }
));
V$.displayName = "TableCaption";
const hl = "Tabs", [B$, Fw] = xe(hl, [
  Jt
]), gl = Jt(), [Y$, ca] = B$(hl), H$ = /* @__PURE__ */ T((e, n) => {
  const { __scopeTabs: t, value: o, onValueChange: r, defaultValue: a, orientation: i = "horizontal", dir: s, activationMode: c = "automatic", ...l } = e, u = Rt(s), [d, f] = Ee({
    prop: o,
    onChange: r,
    defaultProp: a
  });
  return /* @__PURE__ */ h(Y$, {
    scope: t,
    baseId: De(),
    value: d,
    onValueChange: f,
    orientation: i,
    dir: u,
    activationMode: c
  }, /* @__PURE__ */ h(U.div, x({
    dir: u,
    "data-orientation": i
  }, l, {
    ref: n
  })));
}), U$ = "TabsList", K$ = /* @__PURE__ */ T((e, n) => {
  const { __scopeTabs: t, loop: o = !0, ...r } = e, a = ca(U$, t), i = gl(t);
  return /* @__PURE__ */ h(Lr, x({
    asChild: !0
  }, i, {
    orientation: a.orientation,
    dir: a.dir,
    loop: o
  }), /* @__PURE__ */ h(U.div, x({
    role: "tablist",
    "aria-orientation": a.orientation
  }, r, {
    ref: n
  })));
}), G$ = "TabsTrigger", z$ = /* @__PURE__ */ T((e, n) => {
  const { __scopeTabs: t, value: o, disabled: r = !1, ...a } = e, i = ca(G$, t), s = gl(t), c = $l(i.baseId, o), l = yl(i.baseId, o), u = o === i.value;
  return /* @__PURE__ */ h(Fr, x({
    asChild: !0
  }, s, {
    focusable: !r,
    active: u
  }), /* @__PURE__ */ h(U.button, x({
    type: "button",
    role: "tab",
    "aria-selected": u,
    "aria-controls": l,
    "data-state": u ? "active" : "inactive",
    "data-disabled": r ? "" : void 0,
    disabled: r,
    id: c
  }, a, {
    ref: n,
    onMouseDown: L(e.onMouseDown, (d) => {
      !r && d.button === 0 && d.ctrlKey === !1 ? i.onValueChange(o) : d.preventDefault();
    }),
    onKeyDown: L(e.onKeyDown, (d) => {
      [
        " ",
        "Enter"
      ].includes(d.key) && i.onValueChange(o);
    }),
    onFocus: L(e.onFocus, () => {
      const d = i.activationMode !== "manual";
      !u && !r && d && i.onValueChange(o);
    })
  })));
}), q$ = "TabsContent", X$ = /* @__PURE__ */ T((e, n) => {
  const { __scopeTabs: t, value: o, forceMount: r, children: a, ...i } = e, s = ca(q$, t), c = $l(s.baseId, o), l = yl(s.baseId, o), u = o === s.value, d = k(u);
  return q(() => {
    const f = requestAnimationFrame(
      () => d.current = !1
    );
    return () => cancelAnimationFrame(f);
  }, []), /* @__PURE__ */ h(
    Me,
    {
      present: r || u
    },
    ({ present: f }) => /* @__PURE__ */ h(U.div, x({
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
function $l(e, n) {
  return `${e}-trigger-${n}`;
}
function yl(e, n) {
  return `${e}-content-${n}`;
}
const Z$ = H$, wl = K$, xl = z$, Cl = X$, Q$ = xt(
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
), J$ = xt(
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
), ey = xt(
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
), la = We({
  variant: "default"
}), Ww = ({ variant: e = "default", className: n, ...t }) => /* @__PURE__ */ _.jsx(la.Provider, { value: { variant: e }, children: /* @__PURE__ */ _.jsx(Z$, { ...t, className: R("tw-reset", n) }) }), ty = w.forwardRef(({ className: e, children: n, ...t }, o) => {
  const r = k(null), a = k(null), i = o || a, { variant: s } = Le(la), [c, l] = z(!0);
  return oo(() => {
    function u() {
      const f = i.current, p = f == null ? void 0 : f.querySelector('[data-state="active"]');
      if (p && r.current) {
        const v = p;
        r.current.style.transform = `translateX(${v.offsetLeft}px)`, r.current.style.width = `${v.offsetWidth}px`, l(!1);
      }
    }
    u();
    const d = new MutationObserver(u);
    return d.observe(i.current, {
      attributes: !0,
      subtree: !0
    }), () => d.disconnect();
  }, [i]), /* @__PURE__ */ _.jsxs(
    wl,
    {
      ref: i,
      className: R(Q$({ variant: s }), e),
      ...t,
      children: [
        /* @__PURE__ */ _.jsx(
          "div",
          {
            ref: r,
            className: R(
              J$({ variant: s }),
              c ? "~transition-none" : ""
            )
          }
        ),
        n
      ]
    }
  );
});
ty.displayName = wl.displayName;
const ny = w.forwardRef(({ className: e, ...n }, t) => {
  const { variant: o } = Le(la);
  return /* @__PURE__ */ _.jsx(
    xl,
    {
      ref: t,
      className: R(ey({ variant: o }), e),
      ...n
    }
  );
});
ny.displayName = xl.displayName;
const oy = w.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ _.jsx(
  Cl,
  {
    ref: t,
    className: R(
      "~mt-2 ~ring-offset-background",
      "focus-visible:~outline-none focus-visible:~ring-2 focus-visible:~ring-ring focus-visible:~ring-offset-2",
      e
    ),
    ...n
  }
));
oy.displayName = Cl.displayName;
const ry = D.forwardRef(
  ({ className: e, ...n }, t) => /* @__PURE__ */ _.jsx(
    "textarea",
    {
      className: R(
        "tw-reset ~flex ~min-h-[60px] ~w-full ~rounded-md ~border ~border-border ~bg-transparent ~px-3 ~py-2 ~shadow-sm",
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
ry.displayName = "Textarea";
const ay = /* @__PURE__ */ T((e, n) => {
  const { pressed: t, defaultPressed: o = !1, onPressedChange: r, ...a } = e, [i = !1, s] = Ee({
    prop: t,
    onChange: r,
    defaultProp: o
  });
  return /* @__PURE__ */ h(U.button, x({
    type: "button",
    "aria-pressed": i,
    "data-state": i ? "on" : "off",
    "data-disabled": e.disabled ? "" : void 0
  }, a, {
    ref: n,
    onClick: L(e.onClick, () => {
      e.disabled || s(!i);
    })
  }));
}), _l = ay, iy = xt(
  [
    "tw-reset ~inline-flex ~items-center ~justify-center ~rounded-md ~bg-transparent ~transition-none",
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
), sy = D.forwardRef(({ className: e, variant: n, size: t, shape: o, ...r }, a) => /* @__PURE__ */ _.jsx(
  _l,
  {
    ref: a,
    className: R(iy({ variant: n, size: t, shape: o, className: e })),
    ...r
  }
));
sy.displayName = _l.displayName;
const [Eo, jw] = xe("Tooltip", [
  $t
]), da = $t(), cy = "TooltipProvider", ly = 700, pr = "tooltip.open", [dy, ua] = Eo(cy), uy = (e) => {
  const { __scopeTooltip: n, delayDuration: t = ly, skipDelayDuration: o = 300, disableHoverableContent: r = !1, children: a } = e, [i, s] = z(!0), c = k(!1), l = k(0);
  return q(() => {
    const u = l.current;
    return () => window.clearTimeout(u);
  }, []), /* @__PURE__ */ h(dy, {
    scope: n,
    isOpenDelayed: i,
    delayDuration: t,
    onOpen: ee(() => {
      window.clearTimeout(l.current), s(!1);
    }, []),
    onClose: ee(() => {
      window.clearTimeout(l.current), l.current = window.setTimeout(
        () => s(!0),
        o
      );
    }, [
      o
    ]),
    isPointerInTransitRef: c,
    onPointerInTransitChange: ee((u) => {
      c.current = u;
    }, []),
    disableHoverableContent: r
  }, a);
}, fa = "Tooltip", [fy, To] = Eo(fa), py = (e) => {
  const { __scopeTooltip: n, children: t, open: o, defaultOpen: r = !1, onOpenChange: a, disableHoverableContent: i, delayDuration: s } = e, c = ua(fa, e.__scopeTooltip), l = da(n), [u, d] = z(null), f = De(), p = k(0), v = i ?? c.disableHoverableContent, m = s ?? c.delayDuration, b = k(!1), [$ = !1, g] = Ee({
    prop: o,
    defaultProp: r,
    onChange: (P) => {
      P ? (c.onOpen(), document.dispatchEvent(new CustomEvent(pr))) : c.onClose(), a == null || a(P);
    }
  }), y = Xe(() => $ ? b.current ? "delayed-open" : "instant-open" : "closed", [
    $
  ]), E = ee(() => {
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
  return q(() => () => window.clearTimeout(p.current), []), /* @__PURE__ */ h(wn, l, /* @__PURE__ */ h(fy, {
    scope: n,
    contentId: f,
    open: $,
    stateAttribute: y,
    trigger: u,
    onTriggerChange: d,
    onTriggerEnter: ee(() => {
      c.isOpenDelayed ? N() : E();
    }, [
      c.isOpenDelayed,
      N,
      E
    ]),
    onTriggerLeave: ee(() => {
      v ? S() : window.clearTimeout(p.current);
    }, [
      S,
      v
    ]),
    onOpen: E,
    onClose: S,
    disableHoverableContent: v
  }, t));
}, di = "TooltipTrigger", vy = /* @__PURE__ */ T((e, n) => {
  const { __scopeTooltip: t, ...o } = e, r = To(di, t), a = ua(di, t), i = da(t), s = k(null), c = oe(n, s, r.onTriggerChange), l = k(!1), u = k(!1), d = ee(
    () => l.current = !1,
    []
  );
  return q(() => () => document.removeEventListener("pointerup", d), [
    d
  ]), /* @__PURE__ */ h(po, x({
    asChild: !0
  }, i), /* @__PURE__ */ h(U.button, x({
    // We purposefully avoid adding `type=button` here because tooltip triggers are also
    // commonly anchors and the anchor `type` attribute signifies MIME type.
    "aria-describedby": r.open ? r.contentId : void 0,
    "data-state": r.stateAttribute
  }, o, {
    ref: c,
    onPointerMove: L(e.onPointerMove, (f) => {
      f.pointerType !== "touch" && !u.current && !a.isPointerInTransitRef.current && (r.onTriggerEnter(), u.current = !0);
    }),
    onPointerLeave: L(e.onPointerLeave, () => {
      r.onTriggerLeave(), u.current = !1;
    }),
    onPointerDown: L(e.onPointerDown, () => {
      l.current = !0, document.addEventListener("pointerup", d, {
        once: !0
      });
    }),
    onFocus: L(e.onFocus, () => {
      l.current || r.onOpen();
    }),
    onBlur: L(e.onBlur, r.onClose),
    onClick: L(e.onClick, r.onClose)
  })));
}), my = "TooltipPortal", [Vw, by] = Eo(my, {
  forceMount: void 0
}), gn = "TooltipContent", hy = /* @__PURE__ */ T((e, n) => {
  const t = by(gn, e.__scopeTooltip), { forceMount: o = t.forceMount, side: r = "top", ...a } = e, i = To(gn, e.__scopeTooltip);
  return /* @__PURE__ */ h(Me, {
    present: o || i.open
  }, i.disableHoverableContent ? /* @__PURE__ */ h(El, x({
    side: r
  }, a, {
    ref: n
  })) : /* @__PURE__ */ h(gy, x({
    side: r
  }, a, {
    ref: n
  })));
}), gy = /* @__PURE__ */ T((e, n) => {
  const t = To(gn, e.__scopeTooltip), o = ua(gn, e.__scopeTooltip), r = k(null), a = oe(n, r), [i, s] = z(null), { trigger: c, onClose: l } = t, u = r.current, { onPointerInTransitChange: d } = o, f = ee(() => {
    s(null), d(!1);
  }, [
    d
  ]), p = ee((v, m) => {
    const b = v.currentTarget, $ = {
      x: v.clientX,
      y: v.clientY
    }, g = yy($, b.getBoundingClientRect()), y = wy($, g), E = xy(m.getBoundingClientRect()), S = _y([
      ...y,
      ...E
    ]);
    s(S), d(!0);
  }, [
    d
  ]);
  return q(() => () => f(), [
    f
  ]), q(() => {
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
  ]), q(() => {
    if (i) {
      const v = (m) => {
        const b = m.target, $ = {
          x: m.clientX,
          y: m.clientY
        }, g = (c == null ? void 0 : c.contains(b)) || (u == null ? void 0 : u.contains(b)), y = !Cy($, i);
        g ? f() : y && (f(), l());
      };
      return document.addEventListener("pointermove", v), () => document.removeEventListener("pointermove", v);
    }
  }, [
    c,
    u,
    i,
    l,
    f
  ]), /* @__PURE__ */ h(El, x({}, e, {
    ref: a
  }));
}), [$y, Bw] = Eo(fa, {
  isInside: !1
}), El = /* @__PURE__ */ T((e, n) => {
  const { __scopeTooltip: t, children: o, "aria-label": r, onEscapeKeyDown: a, onPointerDownOutside: i, ...s } = e, c = To(gn, t), l = da(t), { onClose: u } = c;
  return q(() => (document.addEventListener(pr, u), () => document.removeEventListener(pr, u)), [
    u
  ]), q(() => {
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
  ]), /* @__PURE__ */ h(Xt, {
    asChild: !0,
    disableOutsidePointerEvents: !1,
    onEscapeKeyDown: a,
    onPointerDownOutside: i,
    onFocusOutside: (d) => d.preventDefault(),
    onDismiss: u
  }, /* @__PURE__ */ h(vo, x({
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
  }), /* @__PURE__ */ h(gr, null, o), /* @__PURE__ */ h($y, {
    scope: t,
    isInside: !0
  }, /* @__PURE__ */ h(s1, {
    id: c.contentId,
    role: "tooltip"
  }, r || o))));
});
function yy(e, n) {
  const t = Math.abs(n.top - e.y), o = Math.abs(n.bottom - e.y), r = Math.abs(n.right - e.x), a = Math.abs(n.left - e.x);
  switch (Math.min(t, o, r, a)) {
    case a:
      return "left";
    case r:
      return "right";
    case t:
      return "top";
    case o:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function wy(e, n, t = 5) {
  const o = [];
  switch (n) {
    case "top":
      o.push({
        x: e.x - t,
        y: e.y + t
      }, {
        x: e.x + t,
        y: e.y + t
      });
      break;
    case "bottom":
      o.push({
        x: e.x - t,
        y: e.y - t
      }, {
        x: e.x + t,
        y: e.y - t
      });
      break;
    case "left":
      o.push({
        x: e.x + t,
        y: e.y - t
      }, {
        x: e.x + t,
        y: e.y + t
      });
      break;
    case "right":
      o.push({
        x: e.x - t,
        y: e.y - t
      }, {
        x: e.x - t,
        y: e.y + t
      });
      break;
  }
  return o;
}
function xy(e) {
  const { top: n, right: t, bottom: o, left: r } = e;
  return [
    {
      x: r,
      y: n
    },
    {
      x: t,
      y: n
    },
    {
      x: t,
      y: o
    },
    {
      x: r,
      y: o
    }
  ];
}
function Cy(e, n) {
  const { x: t, y: o } = e;
  let r = !1;
  for (let a = 0, i = n.length - 1; a < n.length; i = a++) {
    const s = n[a].x, c = n[a].y, l = n[i].x, u = n[i].y;
    c > o != u > o && t < (l - s) * (o - c) / (u - c) + s && (r = !r);
  }
  return r;
}
function _y(e) {
  const n = e.slice();
  return n.sort((t, o) => t.x < o.x ? -1 : t.x > o.x ? 1 : t.y < o.y ? -1 : t.y > o.y ? 1 : 0), Ey(n);
}
function Ey(e) {
  if (e.length <= 1)
    return e.slice();
  const n = [];
  for (let o = 0; o < e.length; o++) {
    const r = e[o];
    for (; n.length >= 2; ) {
      const a = n[n.length - 1], i = n[n.length - 2];
      if ((a.x - i.x) * (r.y - i.y) >= (a.y - i.y) * (r.x - i.x))
        n.pop();
      else
        break;
    }
    n.push(r);
  }
  n.pop();
  const t = [];
  for (let o = e.length - 1; o >= 0; o--) {
    const r = e[o];
    for (; t.length >= 2; ) {
      const a = t[t.length - 1], i = t[t.length - 2];
      if ((a.x - i.x) * (r.y - i.y) >= (a.y - i.y) * (r.x - i.x))
        t.pop();
      else
        break;
    }
    t.push(r);
  }
  return t.pop(), n.length === 1 && t.length === 1 && n[0].x === t[0].x && n[0].y === t[0].y ? n : n.concat(t);
}
const Ty = uy, Py = py, Sy = vy, Tl = hy, Yw = Ty, Hw = Py, Uw = D.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ _.jsx(
  Sy,
  {
    ref: t,
    className: R(
      "tw-reset disabled:~cursor-not-allowed disabled:~opacity-50",
      e
    ),
    ...n
  }
)), Dy = D.forwardRef(({ className: e, sideOffset: n = 4, ...t }, o) => /* @__PURE__ */ _.jsx(
  Tl,
  {
    ref: o,
    sideOffset: n,
    className: R(
      "tw-reset body-x-small ~z-50 ~overflow-hidden ~rounded-md ~bg-accent ~px-3 ~py-1.5 ~text-accent-foreground ~animate-in ~fade-in-0 ~zoom-in-95",
      "data-[state=closed]:~animate-out data-[state=closed]:~fade-out-0 data-[state=closed]:~zoom-out-95",
      "data-[side=bottom]:~slide-in-from-top-2 data-[side=left]:~slide-in-from-right-2 data-[side=right]:~slide-in-from-left-2 data-[side=top]:~slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
Dy.displayName = Tl.displayName;
const Pl = "ToastProvider", [pa, My, Oy] = Zt("Toast"), [Sl, Kw] = xe("Toast", [
  Oy
]), [Ny, Po] = Sl(Pl), Dl = (e) => {
  const { __scopeToast: n, label: t = "Notification", duration: o = 5e3, swipeDirection: r = "right", swipeThreshold: a = 50, children: i } = e, [s, c] = z(null), [l, u] = z(0), d = k(!1), f = k(!1);
  return /* @__PURE__ */ h(pa.Provider, {
    scope: n
  }, /* @__PURE__ */ h(Ny, {
    scope: n,
    label: t,
    duration: o,
    swipeDirection: r,
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
Dl.propTypes = {
  label(e) {
    if (e.label && typeof e.label == "string" && !e.label.trim()) {
      const n = `Invalid prop \`label\` supplied to \`${Pl}\`. Expected non-empty \`string\`.`;
      return new Error(n);
    }
    return null;
  }
};
const Ry = "ToastViewport", ky = [
  "F8"
], vr = "toast.viewportPause", mr = "toast.viewportResume", Ay = /* @__PURE__ */ T((e, n) => {
  const { __scopeToast: t, hotkey: o = ky, label: r = "Notifications ({hotkey})", ...a } = e, i = Po(Ry, t), s = My(t), c = k(null), l = k(null), u = k(null), d = k(null), f = oe(n, d, i.onViewportChange), p = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""), v = i.toastCount > 0;
  q(() => {
    const b = ($) => {
      var g;
      o.every(
        (E) => $[E] || $.code === E
      ) && ((g = d.current) === null || g === void 0 || g.focus());
    };
    return document.addEventListener("keydown", b), () => document.removeEventListener("keydown", b);
  }, [
    o
  ]), q(() => {
    const b = c.current, $ = d.current;
    if (v && b && $) {
      const g = () => {
        if (!i.isClosePausedRef.current) {
          const N = new CustomEvent(vr);
          $.dispatchEvent(N), i.isClosePausedRef.current = !0;
        }
      }, y = () => {
        if (i.isClosePausedRef.current) {
          const N = new CustomEvent(mr);
          $.dispatchEvent(N), i.isClosePausedRef.current = !1;
        }
      }, E = (N) => {
        !b.contains(N.relatedTarget) && y();
      }, S = () => {
        b.contains(document.activeElement) || y();
      };
      return b.addEventListener("focusin", g), b.addEventListener("focusout", E), b.addEventListener("pointermove", g), b.addEventListener("pointerleave", S), window.addEventListener("blur", g), window.addEventListener("focus", y), () => {
        b.removeEventListener("focusin", g), b.removeEventListener("focusout", E), b.removeEventListener("pointermove", g), b.removeEventListener("pointerleave", S), window.removeEventListener("blur", g), window.removeEventListener("focus", y);
      };
    }
  }, [
    v,
    i.isClosePausedRef
  ]);
  const m = ee(({ tabbingDirection: b }) => {
    const g = s().map((y) => {
      const E = y.ref.current, S = [
        E,
        ...Zy(E)
      ];
      return b === "forwards" ? S : S.reverse();
    });
    return (b === "forwards" ? g.reverse() : g).flat();
  }, [
    s
  ]);
  return q(() => {
    const b = d.current;
    if (b) {
      const $ = (g) => {
        const y = g.altKey || g.ctrlKey || g.metaKey;
        if (g.key === "Tab" && !y) {
          const W = document.activeElement, Y = g.shiftKey;
          if (g.target === b && Y) {
            var S;
            (S = l.current) === null || S === void 0 || S.focus();
            return;
          }
          const V = m({
            tabbingDirection: Y ? "backwards" : "forwards"
          }), G = V.findIndex(
            (M) => M === W
          );
          if (Ko(V.slice(G + 1)))
            g.preventDefault();
          else {
            var N, P;
            Y ? (N = l.current) === null || N === void 0 || N.focus() : (P = u.current) === null || P === void 0 || P.focus();
          }
        }
      };
      return b.addEventListener("keydown", $), () => b.removeEventListener("keydown", $);
    }
  }, [
    s,
    m
  ]), /* @__PURE__ */ h(yd, {
    ref: c,
    role: "region",
    "aria-label": r.replace("{hotkey}", p),
    tabIndex: -1,
    style: {
      pointerEvents: v ? void 0 : "none"
    }
  }, v && /* @__PURE__ */ h(ui, {
    ref: l,
    onFocusFromOutsideViewport: () => {
      const b = m({
        tabbingDirection: "forwards"
      });
      Ko(b);
    }
  }), /* @__PURE__ */ h(pa.Slot, {
    scope: t
  }, /* @__PURE__ */ h(U.ol, x({
    tabIndex: -1
  }, a, {
    ref: f
  }))), v && /* @__PURE__ */ h(ui, {
    ref: u,
    onFocusFromOutsideViewport: () => {
      const b = m({
        tabbingDirection: "backwards"
      });
      Ko(b);
    }
  }));
}), Iy = "ToastFocusProxy", ui = /* @__PURE__ */ T((e, n) => {
  const { __scopeToast: t, onFocusFromOutsideViewport: o, ...r } = e, a = Po(Iy, t);
  return /* @__PURE__ */ h(yo, x({
    "aria-hidden": !0,
    tabIndex: 0
  }, r, {
    ref: n,
    style: {
      position: "fixed"
    },
    onFocus: (i) => {
      var s;
      const c = i.relatedTarget;
      !((s = a.viewport) !== null && s !== void 0 && s.contains(c)) && o();
    }
  }));
}), So = "Toast", Ly = "toast.swipeStart", Fy = "toast.swipeMove", Wy = "toast.swipeCancel", jy = "toast.swipeEnd", Vy = /* @__PURE__ */ T((e, n) => {
  const { forceMount: t, open: o, defaultOpen: r, onOpenChange: a, ...i } = e, [s = !0, c] = Ee({
    prop: o,
    defaultProp: r,
    onChange: a
  });
  return /* @__PURE__ */ h(Me, {
    present: t || s
  }, /* @__PURE__ */ h(Ml, x({
    open: s
  }, i, {
    ref: n,
    onClose: () => c(!1),
    onPause: _e(e.onPause),
    onResume: _e(e.onResume),
    onSwipeStart: L(e.onSwipeStart, (l) => {
      l.currentTarget.setAttribute("data-swipe", "start");
    }),
    onSwipeMove: L(e.onSwipeMove, (l) => {
      const { x: u, y: d } = l.detail.delta;
      l.currentTarget.setAttribute("data-swipe", "move"), l.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${u}px`), l.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${d}px`);
    }),
    onSwipeCancel: L(e.onSwipeCancel, (l) => {
      l.currentTarget.setAttribute("data-swipe", "cancel"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), l.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), l.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
    }),
    onSwipeEnd: L(e.onSwipeEnd, (l) => {
      const { x: u, y: d } = l.detail.delta;
      l.currentTarget.setAttribute("data-swipe", "end"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), l.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${u}px`), l.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${d}px`), c(!1);
    })
  })));
}), [By, Yy] = Sl(So, {
  onClose() {
  }
}), Ml = /* @__PURE__ */ T((e, n) => {
  const { __scopeToast: t, type: o = "foreground", duration: r, open: a, onClose: i, onEscapeKeyDown: s, onPause: c, onResume: l, onSwipeStart: u, onSwipeMove: d, onSwipeCancel: f, onSwipeEnd: p, ...v } = e, m = Po(So, t), [b, $] = z(null), g = oe(
    n,
    (M) => $(M)
  ), y = k(null), E = k(null), S = r || m.duration, N = k(0), P = k(S), W = k(0), { onToastAdd: Y, onToastRemove: X } = m, H = _e(() => {
    var M;
    (b == null ? void 0 : b.contains(document.activeElement)) && ((M = m.viewport) === null || M === void 0 || M.focus()), i();
  }), V = ee((M) => {
    !M || M === 1 / 0 || (window.clearTimeout(W.current), N.current = (/* @__PURE__ */ new Date()).getTime(), W.current = window.setTimeout(H, M));
  }, [
    H
  ]);
  q(() => {
    const M = m.viewport;
    if (M) {
      const I = () => {
        V(P.current), l == null || l();
      }, F = () => {
        const A = (/* @__PURE__ */ new Date()).getTime() - N.current;
        P.current = P.current - A, window.clearTimeout(W.current), c == null || c();
      };
      return M.addEventListener(vr, F), M.addEventListener(mr, I), () => {
        M.removeEventListener(vr, F), M.removeEventListener(mr, I);
      };
    }
  }, [
    m.viewport,
    S,
    c,
    l,
    V
  ]), q(() => {
    a && !m.isClosePausedRef.current && V(S);
  }, [
    a,
    S,
    m.isClosePausedRef,
    V
  ]), q(() => (Y(), () => X()), [
    Y,
    X
  ]);
  const G = Xe(() => b ? kl(b) : null, [
    b
  ]);
  return m.viewport ? /* @__PURE__ */ h(Ot, null, G && /* @__PURE__ */ h(Hy, {
    __scopeToast: t,
    role: "status",
    "aria-live": o === "foreground" ? "assertive" : "polite",
    "aria-atomic": !0
  }, G), /* @__PURE__ */ h(By, {
    scope: t,
    onClose: H
  }, /* @__PURE__ */ hr(/* @__PURE__ */ h(pa.ItemSlot, {
    scope: t
  }, /* @__PURE__ */ h($d, {
    asChild: !0,
    onEscapeKeyDown: L(s, () => {
      m.isFocusedToastEscapeKeyDownRef.current || H(), m.isFocusedToastEscapeKeyDownRef.current = !1;
    })
  }, /* @__PURE__ */ h(U.li, x({
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
    onKeyDown: L(e.onKeyDown, (M) => {
      M.key === "Escape" && (s == null || s(M.nativeEvent), M.nativeEvent.defaultPrevented || (m.isFocusedToastEscapeKeyDownRef.current = !0, H()));
    }),
    onPointerDown: L(e.onPointerDown, (M) => {
      M.button === 0 && (y.current = {
        x: M.clientX,
        y: M.clientY
      });
    }),
    onPointerMove: L(e.onPointerMove, (M) => {
      if (!y.current)
        return;
      const I = M.clientX - y.current.x, F = M.clientY - y.current.y, A = !!E.current, O = [
        "left",
        "right"
      ].includes(m.swipeDirection), B = [
        "left",
        "up"
      ].includes(m.swipeDirection) ? Math.min : Math.max, te = O ? B(0, I) : 0, ne = O ? 0 : B(0, F), de = M.pointerType === "touch" ? 10 : 2, ce = {
        x: te,
        y: ne
      }, we = {
        originalEvent: M,
        delta: ce
      };
      A ? (E.current = ce, Wn(Fy, d, we, {
        discrete: !1
      })) : fi(ce, m.swipeDirection, de) ? (E.current = ce, Wn(Ly, u, we, {
        discrete: !1
      }), M.target.setPointerCapture(M.pointerId)) : (Math.abs(I) > de || Math.abs(F) > de) && (y.current = null);
    }),
    onPointerUp: L(e.onPointerUp, (M) => {
      const I = E.current, F = M.target;
      if (F.hasPointerCapture(M.pointerId) && F.releasePointerCapture(M.pointerId), E.current = null, y.current = null, I) {
        const A = M.currentTarget, O = {
          originalEvent: M,
          delta: I
        };
        fi(I, m.swipeDirection, m.swipeThreshold) ? Wn(jy, p, O, {
          discrete: !0
        }) : Wn(Wy, f, O, {
          discrete: !0
        }), A.addEventListener(
          "click",
          (B) => B.preventDefault(),
          {
            once: !0
          }
        );
      }
    })
  })))), m.viewport))) : null;
});
Ml.propTypes = {
  type(e) {
    if (e.type && ![
      "foreground",
      "background"
    ].includes(e.type)) {
      const n = `Invalid prop \`type\` supplied to \`${So}\`. Expected \`foreground | background\`.`;
      return new Error(n);
    }
    return null;
  }
};
const Hy = (e) => {
  const { __scopeToast: n, children: t, ...o } = e, r = Po(So, n), [a, i] = z(!1), [s, c] = z(!1);
  return qy(
    () => i(!0)
  ), q(() => {
    const l = window.setTimeout(
      () => c(!0),
      1e3
    );
    return () => window.clearTimeout(l);
  }, []), s ? null : /* @__PURE__ */ h($n, {
    asChild: !0
  }, /* @__PURE__ */ h(yo, o, a && /* @__PURE__ */ h(Ot, null, r.label, " ", t)));
}, Uy = /* @__PURE__ */ T((e, n) => {
  const { __scopeToast: t, ...o } = e;
  return /* @__PURE__ */ h(U.div, x({}, o, {
    ref: n
  }));
}), Ky = /* @__PURE__ */ T((e, n) => {
  const { __scopeToast: t, ...o } = e;
  return /* @__PURE__ */ h(U.div, x({}, o, {
    ref: n
  }));
}), Gy = "ToastAction", Ol = /* @__PURE__ */ T((e, n) => {
  const { altText: t, ...o } = e;
  return t ? /* @__PURE__ */ h(Rl, {
    altText: t,
    asChild: !0
  }, /* @__PURE__ */ h(Nl, x({}, o, {
    ref: n
  }))) : null;
});
Ol.propTypes = {
  altText(e) {
    return e.altText ? null : new Error(`Missing prop \`altText\` expected on \`${Gy}\``);
  }
};
const zy = "ToastClose", Nl = /* @__PURE__ */ T((e, n) => {
  const { __scopeToast: t, ...o } = e, r = Yy(zy, t);
  return /* @__PURE__ */ h(Rl, {
    asChild: !0
  }, /* @__PURE__ */ h(U.button, x({
    type: "button"
  }, o, {
    ref: n,
    onClick: L(e.onClick, r.onClose)
  })));
}), Rl = /* @__PURE__ */ T((e, n) => {
  const { __scopeToast: t, altText: o, ...r } = e;
  return /* @__PURE__ */ h(U.div, x({
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": o || void 0
  }, r, {
    ref: n
  }));
});
function kl(e) {
  const n = [];
  return Array.from(e.childNodes).forEach((o) => {
    if (o.nodeType === o.TEXT_NODE && o.textContent && n.push(o.textContent), Xy(o)) {
      const r = o.ariaHidden || o.hidden || o.style.display === "none", a = o.dataset.radixToastAnnounceExclude === "";
      if (!r)
        if (a) {
          const i = o.dataset.radixToastAnnounceAlt;
          i && n.push(i);
        } else
          n.push(...kl(o));
    }
  }), n;
}
function Wn(e, n, t, { discrete: o }) {
  const r = t.originalEvent.currentTarget, a = new CustomEvent(e, {
    bubbles: !0,
    cancelable: !0,
    detail: t
  });
  n && r.addEventListener(e, n, {
    once: !0
  }), o ? $r(r, a) : r.dispatchEvent(a);
}
const fi = (e, n, t = 0) => {
  const o = Math.abs(e.x), r = Math.abs(e.y), a = o > r;
  return n === "left" || n === "right" ? a && o > t : !a && r > t;
};
function qy(e = () => {
}) {
  const n = _e(e);
  Ie(() => {
    let t = 0, o = 0;
    return t = window.requestAnimationFrame(
      () => o = window.requestAnimationFrame(n)
    ), () => {
      window.cancelAnimationFrame(t), window.cancelAnimationFrame(o);
    };
  }, [
    n
  ]);
}
function Xy(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function Zy(e) {
  const n = [], t = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; t.nextNode(); )
    n.push(t.currentNode);
  return n;
}
function Ko(e) {
  const n = document.activeElement;
  return e.some((t) => t === n ? !0 : (t.focus(), document.activeElement !== n));
}
const Qy = Dl, Al = Ay, Il = Vy, Ll = Uy, Fl = Ky, Wl = Ol, jl = Nl, Jy = Qy, Vl = D.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ _.jsx(
  Al,
  {
    ref: t,
    className: R(
      "tw-reset ~fixed ~top-0 ~z-[100] ~flex ~max-h-screen ~w-full ~flex-col-reverse ~p-4 sm:~bottom-0 sm:~right-0 sm:~top-auto sm:~flex-col md:~max-w-[420px]",
      e
    ),
    ...n
  }
));
Vl.displayName = Al.displayName;
const ew = xt(
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
), Bl = D.forwardRef(({ className: e, variant: n, ...t }, o) => /* @__PURE__ */ _.jsx(
  Il,
  {
    ref: o,
    className: R(ew({ variant: n }), e),
    ...t
  }
));
Bl.displayName = Il.displayName;
const tw = D.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ _.jsx(
  Wl,
  {
    ref: t,
    className: R(
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
tw.displayName = Wl.displayName;
const Yl = D.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ _.jsx(
  jl,
  {
    ref: t,
    className: R(
      "~absolute ~right-1 ~top-1 ~rounded-md ~p-1 ~text-foreground/50 ~opacity-0 ~transition-opacity",
      "hover:~text-foreground group-hover:~opacity-100",
      "focus:~opacity-100 focus:~outline-none focus:~ring-1",
      "group-[.destructive]:~text-red-300 group-[.destructive]:hover:~text-red-50",
      "group-[.destructive]:focus:~ring-red-400 group-[.destructive]:focus:~ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...n,
    children: /* @__PURE__ */ _.jsx(ns, { className: "~h-4 ~w-4" })
  }
));
Yl.displayName = jl.displayName;
const Hl = D.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ _.jsx(
  Ll,
  {
    ref: t,
    className: R("body-large [&+div]:~text-xs", e),
    ...n
  }
));
Hl.displayName = Ll.displayName;
const Ul = D.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ _.jsx(
  Fl,
  {
    ref: t,
    className: R("~opacity-90", e),
    ...n
  }
));
Ul.displayName = Fl.displayName;
const nw = 1, ow = 1e6;
let Go = 0;
function rw() {
  return Go = (Go + 1) % Number.MAX_VALUE, Go.toString();
}
const zo = /* @__PURE__ */ new Map(), pi = (e) => {
  if (zo.has(e))
    return;
  const n = setTimeout(() => {
    zo.delete(e), cn({
      type: "REMOVE_TOAST",
      toastId: e
    });
  }, ow);
  zo.set(e, n);
}, aw = (e, n) => {
  switch (n.type) {
    case "ADD_TOAST":
      return {
        ...e,
        toasts: [n.toast, ...e.toasts].slice(0, nw)
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
      return t ? pi(t) : e.toasts.forEach((o) => {
        pi(o.id);
      }), {
        ...e,
        toasts: e.toasts.map(
          (o) => o.id === t || t === void 0 ? {
            ...o,
            open: !1
          } : o
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
}, Hn = [];
let Un = { toasts: [] };
function cn(e) {
  Un = aw(Un, e), Hn.forEach((n) => {
    n(Un);
  });
}
function iw({ ...e }) {
  const n = rw(), t = (r) => cn({
    type: "UPDATE_TOAST",
    toast: { ...r, id: n }
  }), o = () => cn({ type: "DISMISS_TOAST", toastId: n });
  return cn({
    type: "ADD_TOAST",
    toast: {
      ...e,
      id: n,
      open: !0,
      onOpenChange: (r) => {
        r || o();
      }
    }
  }), {
    id: n,
    dismiss: o,
    update: t
  };
}
function sw() {
  const [e, n] = D.useState(Un);
  return D.useEffect(() => (Hn.push(n), () => {
    const t = Hn.indexOf(n);
    t > -1 && Hn.splice(t, 1);
  }), [e]), {
    ...e,
    toast: iw,
    dismiss: (t) => cn({ type: "DISMISS_TOAST", toastId: t })
  };
}
function Gw() {
  const { toasts: e } = sw();
  return /* @__PURE__ */ _.jsxs(Jy, { children: [
    e.map(function({ id: n, title: t, description: o, action: r, ...a }) {
      return /* @__PURE__ */ _.jsxs(Bl, { ...a, children: [
        /* @__PURE__ */ _.jsxs("div", { className: "~grid ~gap-1", children: [
          t && /* @__PURE__ */ _.jsx(Hl, { children: t }),
          o && /* @__PURE__ */ _.jsx(Ul, { children: o })
        ] }),
        r,
        /* @__PURE__ */ _.jsx(Yl, {})
      ] }, n);
    }),
    /* @__PURE__ */ _.jsx(Vl, {})
  ] });
}
export {
  Tw as Accordion,
  Y0 as AccordionContent,
  V0 as AccordionItem,
  B0 as AccordionTrigger,
  fw as AlertDialog,
  Df as AlertDialogAction,
  Mf as AlertDialogCancel,
  _f as AlertDialogContent,
  Sf as AlertDialogDescription,
  Tf as AlertDialogFooter,
  Ef as AlertDialogHeader,
  Pf as AlertDialogTitle,
  pw as AlertDialogTrigger,
  Q0 as Avatar,
  eh as AvatarFallback,
  J0 as AvatarImage,
  Sw as Badge,
  zr as Button,
  na as Calendar,
  Rg as Card,
  Lg as CardContent,
  Ig as CardDescription,
  Fg as CardFooter,
  kg as CardHeader,
  Ag as CardTitle,
  f0 as Checkbox,
  vw as DatePicker,
  Dw as Dialog,
  Wg as DialogContent,
  Yg as DialogDescription,
  Vg as DialogFooter,
  jg as DialogHeader,
  Bg as DialogTitle,
  Mw as DialogTrigger,
  hw as DropdownMenu,
  Ab as DropdownMenuCheckboxItem,
  Rb as DropdownMenuContent,
  gw as DropdownMenuGroup,
  kb as DropdownMenuItem,
  Lb as DropdownMenuLabel,
  $w as DropdownMenuPortal,
  ww as DropdownMenuRadioGroup,
  Ib as DropdownMenuRadioItem,
  Fb as DropdownMenuSeparator,
  Wb as DropdownMenuShortcut,
  yw as DropdownMenuSub,
  Nb as DropdownMenuSubContent,
  Ob as DropdownMenuSubTrigger,
  xw as DropdownMenuTrigger,
  Hg as Input,
  Gg as Label,
  Hc as Popover,
  ra as PopoverContent,
  Uc as PopoverTrigger,
  n0 as RadioGroup,
  o0 as RadioGroupItem,
  Rw as Select,
  q1 as SelectContent,
  kw as SelectGroup,
  Z1 as SelectItem,
  X1 as SelectLabel,
  Q1 as SelectSeparator,
  z1 as SelectTrigger,
  Aw as SelectValue,
  t$ as Separator,
  _$ as Slider,
  R$ as Switch,
  k$ as Table,
  I$ as TableBody,
  V$ as TableCaption,
  j$ as TableCell,
  L$ as TableFooter,
  W$ as TableHead,
  A$ as TableHeader,
  F$ as TableRow,
  Ww as Tabs,
  oy as TabsContent,
  ty as TabsList,
  ny as TabsTrigger,
  ry as Textarea,
  Bl as Toast,
  tw as ToastAction,
  Yl as ToastClose,
  Ul as ToastDescription,
  Jy as ToastProvider,
  Hl as ToastTitle,
  Vl as ToastViewport,
  Gw as Toaster,
  sy as Toggle,
  Hw as Tooltip,
  Dy as TooltipContent,
  Yw as TooltipProvider,
  Uw as TooltipTrigger,
  th as badgeVariants,
  bn as buttonVariants,
  aw as reducer,
  iw as toast,
  iy as toggleVariants,
  sw as useToast
};
