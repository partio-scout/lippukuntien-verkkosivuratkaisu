/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/klaro.js":
/*!*********************!*\
  !*** ./js/klaro.js ***!
  \*********************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e, t) {
  "object" == ( false ? 0 : _typeof(exports)) && "object" == ( false ? 0 : _typeof(module)) ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(this, function () {
  return function (e) {
    var t = {};

    function n(r) {
      if (t[r]) return t[r].exports;
      var i = t[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
    }

    return n.m = e, n.c = t, n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: r
      });
    }, n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, n.t = function (e, t) {
      if (1 & t && (e = n(e)), 8 & t) return e;
      if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
      var r = Object.create(null);
      if (n.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var i in e) {
        n.d(r, i, function (t) {
          return e[t];
        }.bind(null, i));
      }
      return r;
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e["default"];
      } : function () {
        return e;
      };
      return n.d(t, "a", t), t;
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "", n(n.s = 186);
  }([function (e, t, n) {
    var r = n(2),
        i = n(27).f,
        o = n(21),
        a = n(22),
        c = n(66),
        s = n(101),
        l = n(58);

    e.exports = function (e, t) {
      var n,
          u,
          p,
          f,
          d,
          v = e.target,
          y = e.global,
          m = e.stat;
      if (n = y ? r : m ? r[v] || c(v, {}) : (r[v] || {}).prototype) for (u in t) {
        if (f = t[u], p = e.noTargetGet ? (d = i(n, u)) && d.value : n[u], !l(y ? u : v + (m ? "." : "#") + u, e.forced) && void 0 !== p) {
          if (_typeof(f) == _typeof(p)) continue;
          s(f, p);
        }

        (e.sham || p && p.sham) && o(f, "sham", !0), a(n, u, f, e);
      }
    };
  }, function (e, t) {
    e.exports = function (e) {
      try {
        return !!e();
      } catch (e) {
        return !0;
      }
    };
  }, function (e, t, n) {
    (function (t) {
      var n = function n(e) {
        return e && e.Math == Math && e;
      };

      e.exports = n("object" == (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) && globalThis) || n("object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window) || n("object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self) || n("object" == _typeof(t) && t) || Function("return this")();
    }).call(this, n(159));
  }, function (e, t, n) {
    var r = n(2),
        i = n(68),
        o = n(15),
        a = n(55),
        c = n(72),
        s = n(106),
        l = i("wks"),
        u = r.Symbol,
        p = s ? u : u && u.withoutSetter || a;

    e.exports = function (e) {
      return o(l, e) || (c && o(u, e) ? l[e] = u[e] : l[e] = p("Symbol." + e)), l[e];
    };
  }, function (e, t) {
    e.exports = function (e) {
      return "object" == _typeof(e) ? null !== e : "function" == typeof e;
    };
  }, function (e, t, n) {
    "use strict";

    var r = n(0),
        i = n(2),
        o = n(34),
        a = n(33),
        c = n(8),
        s = n(72),
        l = n(106),
        u = n(1),
        p = n(15),
        f = n(59),
        d = n(4),
        v = n(9),
        y = n(23),
        m = n(18),
        h = n(53),
        g = n(42),
        b = n(44),
        _ = n(45),
        k = n(56),
        w = n(162),
        S = n(71),
        x = n(27),
        j = n(16),
        O = n(51),
        A = n(21),
        P = n(22),
        z = n(68),
        E = n(54),
        C = n(43),
        D = n(55),
        T = n(3),
        I = n(108),
        R = n(109),
        N = n(46),
        M = n(32),
        q = n(47).forEach,
        U = E("hidden"),
        L = T("toPrimitive"),
        F = M.set,
        H = M.getterFor("Symbol"),
        W = Object.prototype,
        _B = i.Symbol,
        K = o("JSON", "stringify"),
        V = x.f,
        $ = j.f,
        G = w.f,
        Z = O.f,
        Q = z("symbols"),
        J = z("op-symbols"),
        Y = z("string-to-symbol-registry"),
        X = z("symbol-to-string-registry"),
        ee = z("wks"),
        te = i.QObject,
        ne = !te || !te.prototype || !te.prototype.findChild,
        re = c && u(function () {
      return 7 != b($({}, "a", {
        get: function get() {
          return $(this, "a", {
            value: 7
          }).a;
        }
      })).a;
    }) ? function (e, t, n) {
      var r = V(W, t);
      r && delete W[t], $(e, t, n), r && e !== W && $(W, t, r);
    } : $,
        ie = function ie(e, t) {
      var n = Q[e] = b(_B.prototype);
      return F(n, {
        type: "Symbol",
        tag: e,
        description: t
      }), c || (n.description = t), n;
    },
        oe = l ? function (e) {
      return "symbol" == _typeof(e);
    } : function (e) {
      return Object(e) instanceof _B;
    },
        ae = function ae(e, t, n) {
      e === W && ae(J, t, n), v(e);
      var r = h(t, !0);
      return v(n), p(Q, r) ? (n.enumerable ? (p(e, U) && e[U][r] && (e[U][r] = !1), n = b(n, {
        enumerable: g(0, !1)
      })) : (p(e, U) || $(e, U, g(1, {})), e[U][r] = !0), re(e, r, n)) : $(e, r, n);
    },
        ce = function ce(e, t) {
      v(e);

      var n = m(t),
          r = _(n).concat(pe(n));

      return q(r, function (t) {
        c && !se.call(n, t) || ae(e, t, n[t]);
      }), e;
    },
        se = function se(e) {
      var t = h(e, !0),
          n = Z.call(this, t);
      return !(this === W && p(Q, t) && !p(J, t)) && (!(n || !p(this, t) || !p(Q, t) || p(this, U) && this[U][t]) || n);
    },
        le = function le(e, t) {
      var n = m(e),
          r = h(t, !0);

      if (n !== W || !p(Q, r) || p(J, r)) {
        var i = V(n, r);
        return !i || !p(Q, r) || p(n, U) && n[U][r] || (i.enumerable = !0), i;
      }
    },
        ue = function ue(e) {
      var t = G(m(e)),
          n = [];
      return q(t, function (e) {
        p(Q, e) || p(C, e) || n.push(e);
      }), n;
    },
        pe = function pe(e) {
      var t = e === W,
          n = G(t ? J : m(e)),
          r = [];
      return q(n, function (e) {
        !p(Q, e) || t && !p(W, e) || r.push(Q[e]);
      }), r;
    };

    (s || (P((_B = function B() {
      if (this instanceof _B) throw TypeError("Symbol is not a constructor");

      var e = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
          t = D(e),
          n = function n(e) {
        this === W && n.call(J, e), p(this, U) && p(this[U], t) && (this[U][t] = !1), re(this, t, g(1, e));
      };

      return c && ne && re(W, t, {
        configurable: !0,
        set: n
      }), ie(t, e);
    }).prototype, "toString", function () {
      return H(this).tag;
    }), P(_B, "withoutSetter", function (e) {
      return ie(D(e), e);
    }), O.f = se, j.f = ae, x.f = le, k.f = w.f = ue, S.f = pe, I.f = function (e) {
      return ie(T(e), e);
    }, c && ($(_B.prototype, "description", {
      configurable: !0,
      get: function get() {
        return H(this).description;
      }
    }), a || P(W, "propertyIsEnumerable", se, {
      unsafe: !0
    }))), r({
      global: !0,
      wrap: !0,
      forced: !s,
      sham: !s
    }, {
      Symbol: _B
    }), q(_(ee), function (e) {
      R(e);
    }), r({
      target: "Symbol",
      stat: !0,
      forced: !s
    }, {
      "for": function _for(e) {
        var t = String(e);
        if (p(Y, t)) return Y[t];

        var n = _B(t);

        return Y[t] = n, X[n] = t, n;
      },
      keyFor: function keyFor(e) {
        if (!oe(e)) throw TypeError(e + " is not a symbol");
        if (p(X, e)) return X[e];
      },
      useSetter: function useSetter() {
        ne = !0;
      },
      useSimple: function useSimple() {
        ne = !1;
      }
    }), r({
      target: "Object",
      stat: !0,
      forced: !s,
      sham: !c
    }, {
      create: function create(e, t) {
        return void 0 === t ? b(e) : ce(b(e), t);
      },
      defineProperty: ae,
      defineProperties: ce,
      getOwnPropertyDescriptor: le
    }), r({
      target: "Object",
      stat: !0,
      forced: !s
    }, {
      getOwnPropertyNames: ue,
      getOwnPropertySymbols: pe
    }), r({
      target: "Object",
      stat: !0,
      forced: u(function () {
        S.f(1);
      })
    }, {
      getOwnPropertySymbols: function getOwnPropertySymbols(e) {
        return S.f(y(e));
      }
    }), K) && r({
      target: "JSON",
      stat: !0,
      forced: !s || u(function () {
        var e = _B();

        return "[null]" != K([e]) || "{}" != K({
          a: e
        }) || "{}" != K(Object(e));
      })
    }, {
      stringify: function stringify(e, t, n) {
        for (var r, i = [e], o = 1; arguments.length > o;) {
          i.push(arguments[o++]);
        }

        if (r = t, (d(t) || void 0 !== e) && !oe(e)) return f(t) || (t = function t(e, _t2) {
          if ("function" == typeof r && (_t2 = r.call(this, e, _t2)), !oe(_t2)) return _t2;
        }), i[1] = t, K.apply(null, i);
      }
    });
    _B.prototype[L] || A(_B.prototype, L, _B.prototype.valueOf), N(_B, "Symbol"), C[U] = !0;
  }, function (e, t, n) {
    "use strict";

    var r = n(18),
        i = n(75),
        o = n(49),
        a = n(32),
        c = n(79),
        s = a.set,
        l = a.getterFor("Array Iterator");
    e.exports = c(Array, "Array", function (e, t) {
      s(this, {
        type: "Array Iterator",
        target: r(e),
        index: 0,
        kind: t
      });
    }, function () {
      var e = l(this),
          t = e.target,
          n = e.kind,
          r = e.index++;
      return !t || r >= t.length ? (e.target = void 0, {
        value: void 0,
        done: !0
      }) : "keys" == n ? {
        value: r,
        done: !1
      } : "values" == n ? {
        value: t[r],
        done: !1
      } : {
        value: [r, t[r]],
        done: !1
      };
    }, "values"), o.Arguments = o.Array, i("keys"), i("values"), i("entries");
  }, function (e, t, n) {
    var r = n(77),
        i = n(22),
        o = n(168);
    r || i(Object.prototype, "toString", o, {
      unsafe: !0
    });
  }, function (e, t, n) {
    var r = n(1);
    e.exports = !r(function () {
      return 7 != Object.defineProperty({}, 1, {
        get: function get() {
          return 7;
        }
      })[1];
    });
  }, function (e, t, n) {
    var r = n(4);

    e.exports = function (e) {
      if (!r(e)) throw TypeError(String(e) + " is not an object");
      return e;
    };
  }, function (e, t, n) {
    "use strict";

    var r = n(0),
        i = n(8),
        o = n(2),
        a = n(15),
        c = n(4),
        s = n(16).f,
        l = n(101),
        u = o.Symbol;

    if (i && "function" == typeof u && (!("description" in u.prototype) || void 0 !== u().description)) {
      var p = {},
          f = function f() {
        var e = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
            t = this instanceof f ? new u(e) : void 0 === e ? u() : u(e);
        return "" === e && (p[t] = !0), t;
      };

      l(f, u);
      var d = f.prototype = u.prototype;
      d.constructor = f;
      var v = d.toString,
          y = "Symbol(test)" == String(u("test")),
          m = /^Symbol\((.*)\)[^)]+$/;
      s(d, "description", {
        configurable: !0,
        get: function get() {
          var e = c(this) ? this.valueOf() : this,
              t = v.call(e);
          if (a(p, e)) return "";
          var n = y ? t.slice(7, -1) : t.replace(m, "$1");
          return "" === n ? void 0 : n;
        }
      }), r({
        global: !0,
        forced: !0
      }, {
        Symbol: f
      });
    }
  }, function (e, t, n) {
    n(109)("iterator");
  }, function (e, t, n) {
    "use strict";

    var r = n(22),
        i = n(9),
        o = n(1),
        a = n(88),
        c = RegExp.prototype,
        s = c.toString,
        l = o(function () {
      return "/a/b" != s.call({
        source: "a",
        flags: "b"
      });
    }),
        u = "toString" != s.name;
    (l || u) && r(RegExp.prototype, "toString", function () {
      var e = i(this),
          t = String(e.source),
          n = e.flags;
      return "/" + t + "/" + String(void 0 === n && e instanceof RegExp && !("flags" in c) ? a.call(e) : n);
    }, {
      unsafe: !0
    });
  }, function (e, t, n) {
    "use strict";

    var r = n(124).charAt,
        i = n(32),
        o = n(79),
        a = i.set,
        c = i.getterFor("String Iterator");
    o(String, "String", function (e) {
      a(this, {
        type: "String Iterator",
        string: String(e),
        index: 0
      });
    }, function () {
      var e,
          t = c(this),
          n = t.string,
          i = t.index;
      return i >= n.length ? {
        value: void 0,
        done: !0
      } : (e = r(n, i), t.index += e.length, {
        value: e,
        done: !1
      });
    });
  }, function (e, t, n) {
    var r = n(2),
        i = n(126),
        o = n(6),
        a = n(21),
        c = n(3),
        s = c("iterator"),
        l = c("toStringTag"),
        u = o.values;

    for (var p in i) {
      var f = r[p],
          d = f && f.prototype;

      if (d) {
        if (d[s] !== u) try {
          a(d, s, u);
        } catch (e) {
          d[s] = u;
        }
        if (d[l] || a(d, l, p), i[p]) for (var v in o) {
          if (d[v] !== o[v]) try {
            a(d, v, o[v]);
          } catch (e) {
            d[v] = o[v];
          }
        }
      }
    }
  }, function (e, t) {
    var n = {}.hasOwnProperty;

    e.exports = function (e, t) {
      return n.call(e, t);
    };
  }, function (e, t, n) {
    var r = n(8),
        i = n(99),
        o = n(9),
        a = n(53),
        c = Object.defineProperty;
    t.f = r ? c : function (e, t, n) {
      if (o(e), t = a(t, !0), o(n), i) try {
        return c(e, t, n);
      } catch (e) {}
      if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
      return "value" in n && (e[t] = n.value), e;
    };
  }, function (e, t, n) {
    var r = n(8),
        i = n(16).f,
        o = Function.prototype,
        a = o.toString,
        c = /^\s*function ([^ (]*)/;
    r && !("name" in o) && i(o, "name", {
      configurable: !0,
      get: function get() {
        try {
          return a.call(this).match(c)[1];
        } catch (e) {
          return "";
        }
      }
    });
  }, function (e, t, n) {
    var r = n(52),
        i = n(26);

    e.exports = function (e) {
      return r(i(e));
    };
  }, function (e, t, n) {
    var r = n(57),
        i = Math.min;

    e.exports = function (e) {
      return e > 0 ? i(r(e), 9007199254740991) : 0;
    };
  }, function (e, t, n) {
    "use strict";

    var r = n(0),
        i = n(4),
        o = n(59),
        a = n(105),
        c = n(19),
        s = n(18),
        l = n(60),
        u = n(3),
        p = n(61),
        f = n(36),
        d = p("slice"),
        v = f("slice", {
      ACCESSORS: !0,
      0: 0,
      1: 2
    }),
        y = u("species"),
        m = [].slice,
        h = Math.max;
    r({
      target: "Array",
      proto: !0,
      forced: !d || !v
    }, {
      slice: function slice(e, t) {
        var n,
            r,
            u,
            p = s(this),
            f = c(p.length),
            d = a(e, f),
            v = a(void 0 === t ? f : t, f);
        if (o(p) && ("function" != typeof (n = p.constructor) || n !== Array && !o(n.prototype) ? i(n) && null === (n = n[y]) && (n = void 0) : n = void 0, n === Array || void 0 === n)) return m.call(p, d, v);

        for (r = new (void 0 === n ? Array : n)(h(v - d, 0)), u = 0; d < v; d++, u++) {
          d in p && l(r, u, p[d]);
        }

        return r.length = u, r;
      }
    });
  }, function (e, t, n) {
    var r = n(8),
        i = n(16),
        o = n(42);
    e.exports = r ? function (e, t, n) {
      return i.f(e, t, o(1, n));
    } : function (e, t, n) {
      return e[t] = n, e;
    };
  }, function (e, t, n) {
    var r = n(2),
        i = n(21),
        o = n(15),
        a = n(66),
        c = n(67),
        s = n(32),
        l = s.get,
        u = s.enforce,
        p = String(String).split("String");
    (e.exports = function (e, t, n, c) {
      var s = !!c && !!c.unsafe,
          l = !!c && !!c.enumerable,
          f = !!c && !!c.noTargetGet;
      "function" == typeof n && ("string" != typeof t || o(n, "name") || i(n, "name", t), u(n).source = p.join("string" == typeof t ? t : "")), e !== r ? (s ? !f && e[t] && (l = !0) : delete e[t], l ? e[t] = n : i(e, t, n)) : l ? e[t] = n : a(t, n);
    })(Function.prototype, "toString", function () {
      return "function" == typeof this && l(this).source || c(this);
    });
  }, function (e, t, n) {
    var r = n(26);

    e.exports = function (e) {
      return Object(r(e));
    };
  }, function (e, t, n) {
    var r = n(0),
        i = n(164);
    r({
      target: "Array",
      stat: !0,
      forced: !n(78)(function (e) {
        Array.from(e);
      })
    }, {
      from: i
    });
  }, function (e, t, n) {
    "use strict";

    var r = n(0),
        i = n(47).map,
        o = n(61),
        a = n(36),
        c = o("map"),
        s = a("map");
    r({
      target: "Array",
      proto: !0,
      forced: !c || !s
    }, {
      map: function map(e) {
        return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
  }, function (e, t) {
    e.exports = function (e) {
      if (null == e) throw TypeError("Can't call method on " + e);
      return e;
    };
  }, function (e, t, n) {
    var r = n(8),
        i = n(51),
        o = n(42),
        a = n(18),
        c = n(53),
        s = n(15),
        l = n(99),
        u = Object.getOwnPropertyDescriptor;
    t.f = r ? u : function (e, t) {
      if (e = a(e), t = c(t, !0), l) try {
        return u(e, t);
      } catch (e) {}
      if (s(e, t)) return o(!i.f.call(e, t), e[t]);
    };
  }, function (e, t) {
    var n = {}.toString;

    e.exports = function (e) {
      return n.call(e).slice(8, -1);
    };
  }, function (e, t, n) {
    var r = n(0),
        i = n(1),
        o = n(23),
        a = n(80),
        c = n(117);
    r({
      target: "Object",
      stat: !0,
      forced: i(function () {
        a(1);
      }),
      sham: !c
    }, {
      getPrototypeOf: function getPrototypeOf(e) {
        return a(o(e));
      }
    });
  }, function (e, t, n) {
    n(0)({
      target: "Object",
      stat: !0
    }, {
      setPrototypeOf: n(81)
    });
  }, function (e, t, n) {
    var r = n(0),
        i = n(34),
        o = n(35),
        a = n(9),
        c = n(4),
        s = n(44),
        l = n(169),
        u = n(1),
        p = i("Reflect", "construct"),
        f = u(function () {
      function e() {}

      return !(p(function () {}, [], e) instanceof e);
    }),
        d = !u(function () {
      p(function () {});
    }),
        v = f || d;
    r({
      target: "Reflect",
      stat: !0,
      forced: v,
      sham: v
    }, {
      construct: function construct(e, t) {
        o(e), a(t);
        var n = arguments.length < 3 ? e : o(arguments[2]);
        if (d && !f) return p(e, t, n);

        if (e == n) {
          switch (t.length) {
            case 0:
              return new e();

            case 1:
              return new e(t[0]);

            case 2:
              return new e(t[0], t[1]);

            case 3:
              return new e(t[0], t[1], t[2]);

            case 4:
              return new e(t[0], t[1], t[2], t[3]);
          }

          var r = [null];
          return r.push.apply(r, t), new (l.apply(e, r))();
        }

        var i = n.prototype,
            u = s(c(i) ? i : Object.prototype),
            v = Function.apply.call(e, u, t);
        return c(v) ? v : u;
      }
    });
  }, function (e, t, n) {
    var r,
        i,
        o,
        a = n(160),
        c = n(2),
        s = n(4),
        l = n(21),
        u = n(15),
        p = n(54),
        f = n(43),
        d = c.WeakMap;

    if (a) {
      var v = new d(),
          y = v.get,
          m = v.has,
          h = v.set;
      r = function r(e, t) {
        return h.call(v, e, t), t;
      }, i = function i(e) {
        return y.call(v, e) || {};
      }, o = function o(e) {
        return m.call(v, e);
      };
    } else {
      var g = p("state");
      f[g] = !0, r = function r(e, t) {
        return l(e, g, t), t;
      }, i = function i(e) {
        return u(e, g) ? e[g] : {};
      }, o = function o(e) {
        return u(e, g);
      };
    }

    e.exports = {
      set: r,
      get: i,
      has: o,
      enforce: function enforce(e) {
        return o(e) ? i(e) : r(e, {});
      },
      getterFor: function getterFor(e) {
        return function (t) {
          var n;
          if (!s(t) || (n = i(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
          return n;
        };
      }
    };
  }, function (e, t) {
    e.exports = !1;
  }, function (e, t, n) {
    var r = n(103),
        i = n(2),
        o = function o(e) {
      return "function" == typeof e ? e : void 0;
    };

    e.exports = function (e, t) {
      return arguments.length < 2 ? o(r[e]) || o(i[e]) : r[e] && r[e][t] || i[e] && i[e][t];
    };
  }, function (e, t) {
    e.exports = function (e) {
      if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
      return e;
    };
  }, function (e, t, n) {
    var r = n(8),
        i = n(1),
        o = n(15),
        a = Object.defineProperty,
        c = {},
        s = function s(e) {
      throw e;
    };

    e.exports = function (e, t) {
      if (o(c, e)) return c[e];
      t || (t = {});
      var n = [][e],
          l = !!o(t, "ACCESSORS") && t.ACCESSORS,
          u = o(t, 0) ? t[0] : s,
          p = o(t, 1) ? t[1] : void 0;
      return c[e] = !!n && !i(function () {
        if (l && !r) return !0;
        var e = {
          length: -1
        };
        l ? a(e, 1, {
          enumerable: !0,
          get: s
        }) : e[1] = 1, n.call(e, u, p);
      });
    };
  }, function (e, t, n) {
    var r = n(0),
        i = n(23),
        o = n(45);
    r({
      target: "Object",
      stat: !0,
      forced: n(1)(function () {
        o(1);
      })
    }, {
      keys: function keys(e) {
        return o(i(e));
      }
    });
  }, function (e, t, n) {
    "use strict";

    var r = n(0),
        i = n(63);
    r({
      target: "RegExp",
      proto: !0,
      forced: /./.exec !== i
    }, {
      exec: i
    });
  }, function (e, t, n) {
    "use strict";

    var r = n(0),
        i = n(52),
        o = n(18),
        a = n(62),
        c = [].join,
        s = i != Object,
        l = a("join", ",");
    r({
      target: "Array",
      proto: !0,
      forced: s || !l
    }, {
      join: function join(e) {
        return c.call(o(this), void 0 === e ? "," : e);
      }
    });
  }, function (e, t, n) {
    "use strict";

    var r = n(0),
        i = n(1),
        o = n(59),
        a = n(4),
        c = n(23),
        s = n(19),
        l = n(60),
        u = n(110),
        p = n(61),
        f = n(3),
        d = n(73),
        v = f("isConcatSpreadable"),
        y = d >= 51 || !i(function () {
      var e = [];
      return e[v] = !1, e.concat()[0] !== e;
    }),
        m = p("concat"),
        h = function h(e) {
      if (!a(e)) return !1;
      var t = e[v];
      return void 0 !== t ? !!t : o(e);
    };

    r({
      target: "Array",
      proto: !0,
      forced: !y || !m
    }, {
      concat: function concat(e) {
        var t,
            n,
            r,
            i,
            o,
            a = c(this),
            p = u(a, 0),
            f = 0;

        for (t = -1, r = arguments.length; t < r; t++) {
          if (h(o = -1 === t ? a : arguments[t])) {
            if (f + (i = s(o.length)) > 9007199254740991) throw TypeError("Maximum allowed index exceeded");

            for (n = 0; n < i; n++, f++) {
              n in o && l(p, f, o[n]);
            }
          } else {
            if (f >= 9007199254740991) throw TypeError("Maximum allowed index exceeded");
            l(p, f++, o);
          }
        }

        return p.length = f, p;
      }
    });
  }, function (e, t, n) {
    "use strict";

    var r = n(0),
        i = n(47).filter,
        o = n(61),
        a = n(36),
        c = o("filter"),
        s = a("filter");
    r({
      target: "Array",
      proto: !0,
      forced: !c || !s
    }, {
      filter: function filter(e) {
        return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
  }, function (e, t) {
    e.exports = function (e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t
      };
    };
  }, function (e, t) {
    e.exports = {};
  }, function (e, t, n) {
    var r,
        i = n(9),
        o = n(161),
        a = n(70),
        c = n(43),
        s = n(107),
        l = n(65),
        u = n(54),
        p = u("IE_PROTO"),
        f = function f() {},
        d = function d(e) {
      return "<script>" + e + "<\/script>";
    },
        _v = function v() {
      try {
        r = document.domain && new ActiveXObject("htmlfile");
      } catch (e) {}

      var e, t;
      _v = r ? function (e) {
        e.write(d("")), e.close();
        var t = e.parentWindow.Object;
        return e = null, t;
      }(r) : ((t = l("iframe")).style.display = "none", s.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write(d("document.F=Object")), e.close(), e.F);

      for (var n = a.length; n--;) {
        delete _v.prototype[a[n]];
      }

      return _v();
    };

    c[p] = !0, e.exports = Object.create || function (e, t) {
      var n;
      return null !== e ? (f.prototype = i(e), n = new f(), f.prototype = null, n[p] = e) : n = _v(), void 0 === t ? n : o(n, t);
    };
  }, function (e, t, n) {
    var r = n(104),
        i = n(70);

    e.exports = Object.keys || function (e) {
      return r(e, i);
    };
  }, function (e, t, n) {
    var r = n(16).f,
        i = n(15),
        o = n(3)("toStringTag");

    e.exports = function (e, t, n) {
      e && !i(e = n ? e : e.prototype, o) && r(e, o, {
        configurable: !0,
        value: t
      });
    };
  }, function (e, t, n) {
    var r = n(48),
        i = n(52),
        o = n(23),
        a = n(19),
        c = n(110),
        s = [].push,
        l = function l(e) {
      var t = 1 == e,
          n = 2 == e,
          l = 3 == e,
          u = 4 == e,
          p = 6 == e,
          f = 5 == e || p;
      return function (d, v, y, m) {
        for (var h, g, b = o(d), _ = i(b), k = r(v, y, 3), w = a(_.length), S = 0, x = m || c, j = t ? x(d, w) : n ? x(d, 0) : void 0; w > S; S++) {
          if ((f || S in _) && (g = k(h = _[S], S, b), e)) if (t) j[S] = g;else if (g) switch (e) {
            case 3:
              return !0;

            case 5:
              return h;

            case 6:
              return S;

            case 2:
              s.call(j, h);
          } else if (u) return !1;
        }

        return p ? -1 : l || u ? u : j;
      };
    };

    e.exports = {
      forEach: l(0),
      map: l(1),
      filter: l(2),
      some: l(3),
      every: l(4),
      find: l(5),
      findIndex: l(6)
    };
  }, function (e, t, n) {
    var r = n(35);

    e.exports = function (e, t, n) {
      if (r(e), void 0 === t) return e;

      switch (n) {
        case 0:
          return function () {
            return e.call(t);
          };

        case 1:
          return function (n) {
            return e.call(t, n);
          };

        case 2:
          return function (n, r) {
            return e.call(t, n, r);
          };

        case 3:
          return function (n, r, i) {
            return e.call(t, n, r, i);
          };
      }

      return function () {
        return e.apply(t, arguments);
      };
    };
  }, function (e, t) {
    e.exports = {};
  }, function (e, t, n) {
    var r = n(0),
        i = n(173);
    r({
      target: "Object",
      stat: !0,
      forced: Object.assign !== i
    }, {
      assign: i
    });
  }, function (e, t, n) {
    "use strict";

    var r = {}.propertyIsEnumerable,
        i = Object.getOwnPropertyDescriptor,
        o = i && !r.call({
      1: 2
    }, 1);
    t.f = o ? function (e) {
      var t = i(this, e);
      return !!t && t.enumerable;
    } : r;
  }, function (e, t, n) {
    var r = n(1),
        i = n(28),
        o = "".split;
    e.exports = r(function () {
      return !Object("z").propertyIsEnumerable(0);
    }) ? function (e) {
      return "String" == i(e) ? o.call(e, "") : Object(e);
    } : Object;
  }, function (e, t, n) {
    var r = n(4);

    e.exports = function (e, t) {
      if (!r(e)) return e;
      var n, i;
      if (t && "function" == typeof (n = e.toString) && !r(i = n.call(e))) return i;
      if ("function" == typeof (n = e.valueOf) && !r(i = n.call(e))) return i;
      if (!t && "function" == typeof (n = e.toString) && !r(i = n.call(e))) return i;
      throw TypeError("Can't convert object to primitive value");
    };
  }, function (e, t, n) {
    var r = n(68),
        i = n(55),
        o = r("keys");

    e.exports = function (e) {
      return o[e] || (o[e] = i(e));
    };
  }, function (e, t) {
    var n = 0,
        r = Math.random();

    e.exports = function (e) {
      return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++n + r).toString(36);
    };
  }, function (e, t, n) {
    var r = n(104),
        i = n(70).concat("length", "prototype");

    t.f = Object.getOwnPropertyNames || function (e) {
      return r(e, i);
    };
  }, function (e, t) {
    var n = Math.ceil,
        r = Math.floor;

    e.exports = function (e) {
      return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e);
    };
  }, function (e, t, n) {
    var r = n(1),
        i = /#|\.prototype\./,
        o = function o(e, t) {
      var n = c[a(e)];
      return n == l || n != s && ("function" == typeof t ? r(t) : !!t);
    },
        a = o.normalize = function (e) {
      return String(e).replace(i, ".").toLowerCase();
    },
        c = o.data = {},
        s = o.NATIVE = "N",
        l = o.POLYFILL = "P";

    e.exports = o;
  }, function (e, t, n) {
    var r = n(28);

    e.exports = Array.isArray || function (e) {
      return "Array" == r(e);
    };
  }, function (e, t, n) {
    "use strict";

    var r = n(53),
        i = n(16),
        o = n(42);

    e.exports = function (e, t, n) {
      var a = r(t);
      a in e ? i.f(e, a, o(0, n)) : e[a] = n;
    };
  }, function (e, t, n) {
    var r = n(1),
        i = n(3),
        o = n(73),
        a = i("species");

    e.exports = function (e) {
      return o >= 51 || !r(function () {
        var t = [];
        return (t.constructor = {})[a] = function () {
          return {
            foo: 1
          };
        }, 1 !== t[e](Boolean).foo;
      });
    };
  }, function (e, t, n) {
    "use strict";

    var r = n(1);

    e.exports = function (e, t) {
      var n = [][e];
      return !!n && r(function () {
        n.call(null, t || function () {
          throw 1;
        }, 1);
      });
    };
  }, function (e, t, n) {
    "use strict";

    var r,
        i,
        o = n(88),
        a = n(123),
        c = RegExp.prototype.exec,
        s = String.prototype.replace,
        l = c,
        u = (r = /a/, i = /b*/g, c.call(r, "a"), c.call(i, "a"), 0 !== r.lastIndex || 0 !== i.lastIndex),
        p = a.UNSUPPORTED_Y || a.BROKEN_CARET,
        f = void 0 !== /()??/.exec("")[1];
    (u || f || p) && (l = function l(e) {
      var t,
          n,
          r,
          i,
          a = this,
          l = p && a.sticky,
          d = o.call(a),
          v = a.source,
          y = 0,
          m = e;
      return l && (-1 === (d = d.replace("y", "")).indexOf("g") && (d += "g"), m = String(e).slice(a.lastIndex), a.lastIndex > 0 && (!a.multiline || a.multiline && "\n" !== e[a.lastIndex - 1]) && (v = "(?: " + v + ")", m = " " + m, y++), n = new RegExp("^(?:" + v + ")", d)), f && (n = new RegExp("^" + v + "$(?!\\s)", d)), u && (t = a.lastIndex), r = c.call(l ? n : a, m), l ? r ? (r.input = r.input.slice(y), r[0] = r[0].slice(y), r.index = a.lastIndex, a.lastIndex += r[0].length) : a.lastIndex = 0 : u && r && (a.lastIndex = a.global ? r.index + r[0].length : t), f && r && r.length > 1 && s.call(r[0], n, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          void 0 === arguments[i] && (r[i] = void 0);
        }
      }), r;
    }), e.exports = l;
  }, function (e, t, n) {
    var r = n(8),
        i = n(2),
        o = n(58),
        a = n(120),
        c = n(16).f,
        s = n(56).f,
        l = n(91),
        u = n(88),
        p = n(123),
        f = n(22),
        d = n(1),
        v = n(32).set,
        y = n(85),
        m = n(3)("match"),
        h = i.RegExp,
        g = h.prototype,
        b = /a/g,
        _ = /a/g,
        k = new h(b) !== b,
        w = p.UNSUPPORTED_Y;

    if (r && o("RegExp", !k || w || d(function () {
      return _[m] = !1, h(b) != b || h(_) == _ || "/a/i" != h(b, "i");
    }))) {
      for (var S = function S(e, t) {
        var n,
            r = this instanceof S,
            i = l(e),
            o = void 0 === t;
        if (!r && i && e.constructor === S && o) return e;
        k ? i && !o && (e = e.source) : e instanceof S && (o && (t = u.call(e)), e = e.source), w && (n = !!t && t.indexOf("y") > -1) && (t = t.replace(/y/g, ""));
        var c = a(k ? new h(e, t) : h(e, t), r ? this : g, S);
        return w && n && v(c, {
          sticky: n
        }), c;
      }, x = function x(e) {
        (e in S) || c(S, e, {
          configurable: !0,
          get: function get() {
            return h[e];
          },
          set: function set(t) {
            h[e] = t;
          }
        });
      }, j = s(h), O = 0; j.length > O;) {
        x(j[O++]);
      }

      g.constructor = S, S.prototype = g, f(i, "RegExp", S);
    }

    y("RegExp");
  }, function (e, t, n) {
    var r = n(2),
        i = n(4),
        o = r.document,
        a = i(o) && i(o.createElement);

    e.exports = function (e) {
      return a ? o.createElement(e) : {};
    };
  }, function (e, t, n) {
    var r = n(2),
        i = n(21);

    e.exports = function (e, t) {
      try {
        i(r, e, t);
      } catch (n) {
        r[e] = t;
      }

      return t;
    };
  }, function (e, t, n) {
    var r = n(100),
        i = Function.toString;
    "function" != typeof r.inspectSource && (r.inspectSource = function (e) {
      return i.call(e);
    }), e.exports = r.inspectSource;
  }, function (e, t, n) {
    var r = n(33),
        i = n(100);
    (e.exports = function (e, t) {
      return i[e] || (i[e] = void 0 !== t ? t : {});
    })("versions", []).push({
      version: "3.6.5",
      mode: r ? "pure" : "global",
      copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
    });
  }, function (e, t, n) {
    var r = n(18),
        i = n(19),
        o = n(105),
        a = function a(e) {
      return function (t, n, a) {
        var c,
            s = r(t),
            l = i(s.length),
            u = o(a, l);

        if (e && n != n) {
          for (; l > u;) {
            if ((c = s[u++]) != c) return !0;
          }
        } else for (; l > u; u++) {
          if ((e || u in s) && s[u] === n) return e || u || 0;
        }

        return !e && -1;
      };
    };

    e.exports = {
      includes: a(!0),
      indexOf: a(!1)
    };
  }, function (e, t) {
    e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
  }, function (e, t) {
    t.f = Object.getOwnPropertySymbols;
  }, function (e, t, n) {
    var r = n(1);
    e.exports = !!Object.getOwnPropertySymbols && !r(function () {
      return !String(Symbol());
    });
  }, function (e, t, n) {
    var r,
        i,
        o = n(2),
        a = n(74),
        c = o.process,
        s = c && c.versions,
        l = s && s.v8;
    l ? i = (r = l.split("."))[0] + r[1] : a && (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = a.match(/Chrome\/(\d+)/)) && (i = r[1]), e.exports = i && +i;
  }, function (e, t, n) {
    var r = n(34);
    e.exports = r("navigator", "userAgent") || "";
  }, function (e, t, n) {
    var r = n(3),
        i = n(44),
        o = n(16),
        a = r("unscopables"),
        c = Array.prototype;
    null == c[a] && o.f(c, a, {
      configurable: !0,
      value: i(null)
    }), e.exports = function (e) {
      c[a][e] = !0;
    };
  }, function (e, t, n) {
    "use strict";

    var r = n(0),
        i = n(111);
    r({
      target: "Array",
      proto: !0,
      forced: [].forEach != i
    }, {
      forEach: i
    });
  }, function (e, t, n) {
    var r = {};
    r[n(3)("toStringTag")] = "z", e.exports = "[object z]" === String(r);
  }, function (e, t, n) {
    var r = n(3)("iterator"),
        i = !1;

    try {
      var o = 0,
          a = {
        next: function next() {
          return {
            done: !!o++
          };
        },
        "return": function _return() {
          i = !0;
        }
      };
      a[r] = function () {
        return this;
      }, Array.from(a, function () {
        throw 2;
      });
    } catch (e) {}

    e.exports = function (e, t) {
      if (!t && !i) return !1;
      var n = !1;

      try {
        var o = {};
        o[r] = function () {
          return {
            next: function next() {
              return {
                done: n = !0
              };
            }
          };
        }, e(o);
      } catch (e) {}

      return n;
    };
  }, function (e, t, n) {
    "use strict";

    var r = n(0),
        i = n(165),
        o = n(80),
        a = n(81),
        c = n(46),
        s = n(21),
        l = n(22),
        u = n(3),
        p = n(33),
        f = n(49),
        d = n(116),
        v = d.IteratorPrototype,
        y = d.BUGGY_SAFARI_ITERATORS,
        m = u("iterator"),
        h = function h() {
      return this;
    };

    e.exports = function (e, t, n, u, d, g, b) {
      i(n, t, u);

      var _,
          k,
          w,
          S = function S(e) {
        if (e === d && P) return P;
        if (!y && e in O) return O[e];

        switch (e) {
          case "keys":
          case "values":
          case "entries":
            return function () {
              return new n(this, e);
            };
        }

        return function () {
          return new n(this);
        };
      },
          x = t + " Iterator",
          j = !1,
          O = e.prototype,
          A = O[m] || O["@@iterator"] || d && O[d],
          P = !y && A || S(d),
          z = "Array" == t && O.entries || A;

      if (z && (_ = o(z.call(new e())), v !== Object.prototype && _.next && (p || o(_) === v || (a ? a(_, v) : "function" != typeof _[m] && s(_, m, h)), c(_, x, !0, !0), p && (f[x] = h))), "values" == d && A && "values" !== A.name && (j = !0, P = function P() {
        return A.call(this);
      }), p && !b || O[m] === P || s(O, m, P), f[t] = P, d) if (k = {
        values: S("values"),
        keys: g ? P : S("keys"),
        entries: S("entries")
      }, b) for (w in k) {
        (y || j || !(w in O)) && l(O, w, k[w]);
      } else r({
        target: t,
        proto: !0,
        forced: y || j
      }, k);
      return k;
    };
  }, function (e, t, n) {
    var r = n(15),
        i = n(23),
        o = n(54),
        a = n(117),
        c = o("IE_PROTO"),
        s = Object.prototype;
    e.exports = a ? Object.getPrototypeOf : function (e) {
      return e = i(e), r(e, c) ? e[c] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? s : null;
    };
  }, function (e, t, n) {
    var r = n(9),
        i = n(166);
    e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
      var e,
          t = !1,
          n = {};

      try {
        (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), t = n instanceof Array;
      } catch (e) {}

      return function (n, o) {
        return r(n), i(o), t ? e.call(n, o) : n.__proto__ = o, n;
      };
    }() : void 0);
  }, function (e, t, n) {
    "use strict";

    var r = n(118),
        i = n(121);
    e.exports = r("Map", function (e) {
      return function () {
        return e(this, arguments.length ? arguments[0] : void 0);
      };
    }, i);
  }, function (e, t, n) {
    var r = n(9),
        i = n(113),
        o = n(19),
        a = n(48),
        c = n(114),
        s = n(112),
        l = function l(e, t) {
      this.stopped = e, this.result = t;
    };

    (e.exports = function (e, t, n, u, p) {
      var f,
          d,
          v,
          y,
          m,
          h,
          g,
          b = a(t, n, u ? 2 : 1);
      if (p) f = e;else {
        if ("function" != typeof (d = c(e))) throw TypeError("Target is not iterable");

        if (i(d)) {
          for (v = 0, y = o(e.length); y > v; v++) {
            if ((m = u ? b(r(g = e[v])[0], g[1]) : b(e[v])) && m instanceof l) return m;
          }

          return new l(!1);
        }

        f = d.call(e);
      }

      for (h = f.next; !(g = h.call(f)).done;) {
        if ("object" == _typeof(m = s(f, b, g.value, u)) && m && m instanceof l) return m;
      }

      return new l(!1);
    }).stop = function (e) {
      return new l(!0, e);
    };
  }, function (e, t) {
    e.exports = function (e, t, n) {
      if (!(e instanceof t)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
      return e;
    };
  }, function (e, t, n) {
    "use strict";

    var r = n(34),
        i = n(16),
        o = n(3),
        a = n(8),
        c = o("species");

    e.exports = function (e) {
      var t = r(e),
          n = i.f;
      a && t && !t[c] && n(t, c, {
        configurable: !0,
        get: function get() {
          return this;
        }
      });
    };
  }, function (e, t, n) {
    var r = n(0),
        i = n(1),
        o = n(18),
        a = n(27).f,
        c = n(8),
        s = i(function () {
      a(1);
    });
    r({
      target: "Object",
      stat: !0,
      forced: !c || s,
      sham: !c
    }, {
      getOwnPropertyDescriptor: function getOwnPropertyDescriptor(e, t) {
        return a(o(e), t);
      }
    });
  }, function (e, t, n) {
    var r = n(0),
        i = n(8),
        o = n(102),
        a = n(18),
        c = n(27),
        s = n(60);
    r({
      target: "Object",
      stat: !0,
      sham: !i
    }, {
      getOwnPropertyDescriptors: function getOwnPropertyDescriptors(e) {
        for (var t, n, r = a(e), i = c.f, l = o(r), u = {}, p = 0; l.length > p;) {
          void 0 !== (n = i(r, t = l[p++])) && s(u, t, n);
        }

        return u;
      }
    });
  }, function (e, t, n) {
    "use strict";

    var r = n(9);

    e.exports = function () {
      var e = r(this),
          t = "";
      return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t;
    };
  }, function (e, t, n) {
    "use strict";

    var r = n(90),
        i = n(91),
        o = n(9),
        a = n(26),
        c = n(125),
        s = n(92),
        l = n(19),
        u = n(93),
        p = n(63),
        f = n(1),
        d = [].push,
        v = Math.min,
        y = !f(function () {
      return !RegExp(4294967295, "y");
    });
    r("split", 2, function (e, t, n) {
      var r;
      return r = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function (e, n) {
        var r = String(a(this)),
            o = void 0 === n ? 4294967295 : n >>> 0;
        if (0 === o) return [];
        if (void 0 === e) return [r];
        if (!i(e)) return t.call(r, e, o);

        for (var c, s, l, u = [], f = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), v = 0, y = new RegExp(e.source, f + "g"); (c = p.call(y, r)) && !((s = y.lastIndex) > v && (u.push(r.slice(v, c.index)), c.length > 1 && c.index < r.length && d.apply(u, c.slice(1)), l = c[0].length, v = s, u.length >= o));) {
          y.lastIndex === c.index && y.lastIndex++;
        }

        return v === r.length ? !l && y.test("") || u.push("") : u.push(r.slice(v)), u.length > o ? u.slice(0, o) : u;
      } : "0".split(void 0, 0).length ? function (e, n) {
        return void 0 === e && 0 === n ? [] : t.call(this, e, n);
      } : t, [function (t, n) {
        var i = a(this),
            o = null == t ? void 0 : t[e];
        return void 0 !== o ? o.call(t, i, n) : r.call(String(i), t, n);
      }, function (e, i) {
        var a = n(r, e, this, i, r !== t);
        if (a.done) return a.value;
        var p = o(e),
            f = String(this),
            d = c(p, RegExp),
            m = p.unicode,
            h = (p.ignoreCase ? "i" : "") + (p.multiline ? "m" : "") + (p.unicode ? "u" : "") + (y ? "y" : "g"),
            g = new d(y ? p : "^(?:" + p.source + ")", h),
            b = void 0 === i ? 4294967295 : i >>> 0;
        if (0 === b) return [];
        if (0 === f.length) return null === u(g, f) ? [f] : [];

        for (var _ = 0, k = 0, w = []; k < f.length;) {
          g.lastIndex = y ? k : 0;
          var S,
              x = u(g, y ? f : f.slice(k));
          if (null === x || (S = v(l(g.lastIndex + (y ? 0 : k)), f.length)) === _) k = s(f, k, m);else {
            if (w.push(f.slice(_, k)), w.length === b) return w;

            for (var j = 1; j <= x.length - 1; j++) {
              if (w.push(x[j]), w.length === b) return w;
            }

            k = _ = S;
          }
        }

        return w.push(f.slice(_)), w;
      }];
    }, !y);
  }, function (e, t, n) {
    "use strict";

    n(38);
    var r = n(22),
        i = n(1),
        o = n(3),
        a = n(63),
        c = n(21),
        s = o("species"),
        l = !i(function () {
      var e = /./;
      return e.exec = function () {
        var e = [];
        return e.groups = {
          a: "7"
        }, e;
      }, "7" !== "".replace(e, "$<a>");
    }),
        u = "$0" === "a".replace(/./, "$0"),
        p = o("replace"),
        f = !!/./[p] && "" === /./[p]("a", "$0"),
        d = !i(function () {
      var e = /(?:)/,
          t = e.exec;

      e.exec = function () {
        return t.apply(this, arguments);
      };

      var n = "ab".split(e);
      return 2 !== n.length || "a" !== n[0] || "b" !== n[1];
    });

    e.exports = function (e, t, n, p) {
      var v = o(e),
          y = !i(function () {
        var t = {};
        return t[v] = function () {
          return 7;
        }, 7 != ""[e](t);
      }),
          m = y && !i(function () {
        var t = !1,
            n = /a/;
        return "split" === e && ((n = {}).constructor = {}, n.constructor[s] = function () {
          return n;
        }, n.flags = "", n[v] = /./[v]), n.exec = function () {
          return t = !0, null;
        }, n[v](""), !t;
      });

      if (!y || !m || "replace" === e && (!l || !u || f) || "split" === e && !d) {
        var h = /./[v],
            g = n(v, ""[e], function (e, t, n, r, i) {
          return t.exec === a ? y && !i ? {
            done: !0,
            value: h.call(t, n, r)
          } : {
            done: !0,
            value: e.call(n, t, r)
          } : {
            done: !1
          };
        }, {
          REPLACE_KEEPS_$0: u,
          REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: f
        }),
            b = g[0],
            _ = g[1];
        r(String.prototype, e, b), r(RegExp.prototype, v, 2 == t ? function (e, t) {
          return _.call(e, this, t);
        } : function (e) {
          return _.call(e, this);
        });
      }

      p && c(RegExp.prototype[v], "sham", !0);
    };
  }, function (e, t, n) {
    var r = n(4),
        i = n(28),
        o = n(3)("match");

    e.exports = function (e) {
      var t;
      return r(e) && (void 0 !== (t = e[o]) ? !!t : "RegExp" == i(e));
    };
  }, function (e, t, n) {
    "use strict";

    var r = n(124).charAt;

    e.exports = function (e, t, n) {
      return t + (n ? r(e, t).length : 1);
    };
  }, function (e, t, n) {
    var r = n(28),
        i = n(63);

    e.exports = function (e, t) {
      var n = e.exec;

      if ("function" == typeof n) {
        var o = n.call(e, t);
        if ("object" != _typeof(o)) throw TypeError("RegExp exec method returned something other than an Object or null");
        return o;
      }

      if ("RegExp" !== r(e)) throw TypeError("RegExp#exec called on incompatible receiver");
      return i.call(e, t);
    };
  }, function (e, t, n) {
    var r = n(2),
        i = n(126),
        o = n(111),
        a = n(21);

    for (var c in i) {
      var s = r[c],
          l = s && s.prototype;
      if (l && l.forEach !== o) try {
        a(l, "forEach", o);
      } catch (e) {
        l.forEach = o;
      }
    }
  }, function (e, t, n) {
    var r = n(91);

    e.exports = function (e) {
      if (r(e)) throw TypeError("The method doesn't accept regular expressions");
      return e;
    };
  }, function (e, t, n) {
    var r = n(3)("match");

    e.exports = function (e) {
      var t = /./;

      try {
        "/./"[e](t);
      } catch (n) {
        try {
          return t[r] = !1, "/./"[e](t);
        } catch (e) {}
      }

      return !1;
    };
  }, function (e, t, n) {
    var r = n(0),
        i = n(176).entries;
    r({
      target: "Object",
      stat: !0
    }, {
      entries: function entries(e) {
        return i(e);
      }
    });
  }, function (e, t, n) {
    "use strict";

    var r,
        i = n(0),
        o = n(27).f,
        a = n(19),
        c = n(95),
        s = n(26),
        l = n(96),
        u = n(33),
        p = "".startsWith,
        f = Math.min,
        d = l("startsWith");
    i({
      target: "String",
      proto: !0,
      forced: !!(u || d || (r = o(String.prototype, "startsWith"), !r || r.writable)) && !d
    }, {
      startsWith: function startsWith(e) {
        var t = String(s(this));
        c(e);
        var n = a(f(arguments.length > 1 ? arguments[1] : void 0, t.length)),
            r = String(e);
        return p ? p.call(t, r, n) : t.slice(n, n + r.length) === r;
      }
    });
  }, function (e, t, n) {
    var r = n(8),
        i = n(1),
        o = n(65);
    e.exports = !r && !i(function () {
      return 7 != Object.defineProperty(o("div"), "a", {
        get: function get() {
          return 7;
        }
      }).a;
    });
  }, function (e, t, n) {
    var r = n(2),
        i = n(66),
        o = r["__core-js_shared__"] || i("__core-js_shared__", {});
    e.exports = o;
  }, function (e, t, n) {
    var r = n(15),
        i = n(102),
        o = n(27),
        a = n(16);

    e.exports = function (e, t) {
      for (var n = i(t), c = a.f, s = o.f, l = 0; l < n.length; l++) {
        var u = n[l];
        r(e, u) || c(e, u, s(t, u));
      }
    };
  }, function (e, t, n) {
    var r = n(34),
        i = n(56),
        o = n(71),
        a = n(9);

    e.exports = r("Reflect", "ownKeys") || function (e) {
      var t = i.f(a(e)),
          n = o.f;
      return n ? t.concat(n(e)) : t;
    };
  }, function (e, t, n) {
    var r = n(2);
    e.exports = r;
  }, function (e, t, n) {
    var r = n(15),
        i = n(18),
        o = n(69).indexOf,
        a = n(43);

    e.exports = function (e, t) {
      var n,
          c = i(e),
          s = 0,
          l = [];

      for (n in c) {
        !r(a, n) && r(c, n) && l.push(n);
      }

      for (; t.length > s;) {
        r(c, n = t[s++]) && (~o(l, n) || l.push(n));
      }

      return l;
    };
  }, function (e, t, n) {
    var r = n(57),
        i = Math.max,
        o = Math.min;

    e.exports = function (e, t) {
      var n = r(e);
      return n < 0 ? i(n + t, 0) : o(n, t);
    };
  }, function (e, t, n) {
    var r = n(72);
    e.exports = r && !Symbol.sham && "symbol" == _typeof(Symbol.iterator);
  }, function (e, t, n) {
    var r = n(34);
    e.exports = r("document", "documentElement");
  }, function (e, t, n) {
    var r = n(3);
    t.f = r;
  }, function (e, t, n) {
    var r = n(103),
        i = n(15),
        o = n(108),
        a = n(16).f;

    e.exports = function (e) {
      var t = r.Symbol || (r.Symbol = {});
      i(t, e) || a(t, e, {
        value: o.f(e)
      });
    };
  }, function (e, t, n) {
    var r = n(4),
        i = n(59),
        o = n(3)("species");

    e.exports = function (e, t) {
      var n;
      return i(e) && ("function" != typeof (n = e.constructor) || n !== Array && !i(n.prototype) ? r(n) && null === (n = n[o]) && (n = void 0) : n = void 0), new (void 0 === n ? Array : n)(0 === t ? 0 : t);
    };
  }, function (e, t, n) {
    "use strict";

    var r = n(47).forEach,
        i = n(62),
        o = n(36),
        a = i("forEach"),
        c = o("forEach");
    e.exports = a && c ? [].forEach : function (e) {
      return r(this, e, arguments.length > 1 ? arguments[1] : void 0);
    };
  }, function (e, t, n) {
    var r = n(9);

    e.exports = function (e, t, n, i) {
      try {
        return i ? t(r(n)[0], n[1]) : t(n);
      } catch (t) {
        var o = e["return"];
        throw void 0 !== o && r(o.call(e)), t;
      }
    };
  }, function (e, t, n) {
    var r = n(3),
        i = n(49),
        o = r("iterator"),
        a = Array.prototype;

    e.exports = function (e) {
      return void 0 !== e && (i.Array === e || a[o] === e);
    };
  }, function (e, t, n) {
    var r = n(115),
        i = n(49),
        o = n(3)("iterator");

    e.exports = function (e) {
      if (null != e) return e[o] || e["@@iterator"] || i[r(e)];
    };
  }, function (e, t, n) {
    var r = n(77),
        i = n(28),
        o = n(3)("toStringTag"),
        a = "Arguments" == i(function () {
      return arguments;
    }());
    e.exports = r ? i : function (e) {
      var t, n, r;
      return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function (e, t) {
        try {
          return e[t];
        } catch (e) {}
      }(t = Object(e), o)) ? n : a ? i(t) : "Object" == (r = i(t)) && "function" == typeof t.callee ? "Arguments" : r;
    };
  }, function (e, t, n) {
    "use strict";

    var r,
        i,
        o,
        a = n(80),
        c = n(21),
        s = n(15),
        l = n(3),
        u = n(33),
        p = l("iterator"),
        f = !1;
    [].keys && ("next" in (o = [].keys()) ? (i = a(a(o))) !== Object.prototype && (r = i) : f = !0), null == r && (r = {}), u || s(r, p) || c(r, p, function () {
      return this;
    }), e.exports = {
      IteratorPrototype: r,
      BUGGY_SAFARI_ITERATORS: f
    };
  }, function (e, t, n) {
    var r = n(1);
    e.exports = !r(function () {
      function e() {}

      return e.prototype.constructor = null, Object.getPrototypeOf(new e()) !== e.prototype;
    });
  }, function (e, t, n) {
    "use strict";

    var r = n(0),
        i = n(2),
        o = n(58),
        a = n(22),
        c = n(119),
        s = n(83),
        l = n(84),
        u = n(4),
        p = n(1),
        f = n(78),
        d = n(46),
        v = n(120);

    e.exports = function (e, t, n) {
      var y = -1 !== e.indexOf("Map"),
          m = -1 !== e.indexOf("Weak"),
          h = y ? "set" : "add",
          g = i[e],
          b = g && g.prototype,
          _ = g,
          k = {},
          w = function w(e) {
        var t = b[e];
        a(b, e, "add" == e ? function (e) {
          return t.call(this, 0 === e ? 0 : e), this;
        } : "delete" == e ? function (e) {
          return !(m && !u(e)) && t.call(this, 0 === e ? 0 : e);
        } : "get" == e ? function (e) {
          return m && !u(e) ? void 0 : t.call(this, 0 === e ? 0 : e);
        } : "has" == e ? function (e) {
          return !(m && !u(e)) && t.call(this, 0 === e ? 0 : e);
        } : function (e, n) {
          return t.call(this, 0 === e ? 0 : e, n), this;
        });
      };

      if (o(e, "function" != typeof g || !(m || b.forEach && !p(function () {
        new g().entries().next();
      })))) _ = n.getConstructor(t, e, y, h), c.REQUIRED = !0;else if (o(e, !0)) {
        var S = new _(),
            x = S[h](m ? {} : -0, 1) != S,
            j = p(function () {
          S.has(1);
        }),
            O = f(function (e) {
          new g(e);
        }),
            A = !m && p(function () {
          for (var e = new g(), t = 5; t--;) {
            e[h](t, t);
          }

          return !e.has(-0);
        });
        O || ((_ = t(function (t, n) {
          l(t, _, e);
          var r = v(new g(), t, _);
          return null != n && s(n, r[h], r, y), r;
        })).prototype = b, b.constructor = _), (j || A) && (w("delete"), w("has"), y && w("get")), (A || x) && w(h), m && b.clear && delete b.clear;
      }
      return k[e] = _, r({
        global: !0,
        forced: _ != g
      }, k), d(_, e), m || n.setStrong(_, e, y), _;
    };
  }, function (e, t, n) {
    var r = n(43),
        i = n(4),
        o = n(15),
        a = n(16).f,
        c = n(55),
        s = n(167),
        l = c("meta"),
        u = 0,
        p = Object.isExtensible || function () {
      return !0;
    },
        f = function f(e) {
      a(e, l, {
        value: {
          objectID: "O" + ++u,
          weakData: {}
        }
      });
    },
        d = e.exports = {
      REQUIRED: !1,
      fastKey: function fastKey(e, t) {
        if (!i(e)) return "symbol" == _typeof(e) ? e : ("string" == typeof e ? "S" : "P") + e;

        if (!o(e, l)) {
          if (!p(e)) return "F";
          if (!t) return "E";
          f(e);
        }

        return e[l].objectID;
      },
      getWeakData: function getWeakData(e, t) {
        if (!o(e, l)) {
          if (!p(e)) return !0;
          if (!t) return !1;
          f(e);
        }

        return e[l].weakData;
      },
      onFreeze: function onFreeze(e) {
        return s && d.REQUIRED && p(e) && !o(e, l) && f(e), e;
      }
    };

    r[l] = !0;
  }, function (e, t, n) {
    var r = n(4),
        i = n(81);

    e.exports = function (e, t, n) {
      var o, a;
      return i && "function" == typeof (o = t.constructor) && o !== n && r(a = o.prototype) && a !== n.prototype && i(e, a), e;
    };
  }, function (e, t, n) {
    "use strict";

    var r = n(16).f,
        i = n(44),
        o = n(122),
        a = n(48),
        c = n(84),
        s = n(83),
        l = n(79),
        u = n(85),
        p = n(8),
        f = n(119).fastKey,
        d = n(32),
        v = d.set,
        y = d.getterFor;
    e.exports = {
      getConstructor: function getConstructor(e, t, n, l) {
        var u = e(function (e, r) {
          c(e, u, t), v(e, {
            type: t,
            index: i(null),
            first: void 0,
            last: void 0,
            size: 0
          }), p || (e.size = 0), null != r && s(r, e[l], e, n);
        }),
            d = y(t),
            m = function m(e, t, n) {
          var r,
              i,
              o = d(e),
              a = h(e, t);
          return a ? a.value = n : (o.last = a = {
            index: i = f(t, !0),
            key: t,
            value: n,
            previous: r = o.last,
            next: void 0,
            removed: !1
          }, o.first || (o.first = a), r && (r.next = a), p ? o.size++ : e.size++, "F" !== i && (o.index[i] = a)), e;
        },
            h = function h(e, t) {
          var n,
              r = d(e),
              i = f(t);
          if ("F" !== i) return r.index[i];

          for (n = r.first; n; n = n.next) {
            if (n.key == t) return n;
          }
        };

        return o(u.prototype, {
          clear: function clear() {
            for (var e = d(this), t = e.index, n = e.first; n;) {
              n.removed = !0, n.previous && (n.previous = n.previous.next = void 0), delete t[n.index], n = n.next;
            }

            e.first = e.last = void 0, p ? e.size = 0 : this.size = 0;
          },
          "delete": function _delete(e) {
            var t = d(this),
                n = h(this, e);

            if (n) {
              var r = n.next,
                  i = n.previous;
              delete t.index[n.index], n.removed = !0, i && (i.next = r), r && (r.previous = i), t.first == n && (t.first = r), t.last == n && (t.last = i), p ? t.size-- : this.size--;
            }

            return !!n;
          },
          forEach: function forEach(e) {
            for (var t, n = d(this), r = a(e, arguments.length > 1 ? arguments[1] : void 0, 3); t = t ? t.next : n.first;) {
              for (r(t.value, t.key, this); t && t.removed;) {
                t = t.previous;
              }
            }
          },
          has: function has(e) {
            return !!h(this, e);
          }
        }), o(u.prototype, n ? {
          get: function get(e) {
            var t = h(this, e);
            return t && t.value;
          },
          set: function set(e, t) {
            return m(this, 0 === e ? 0 : e, t);
          }
        } : {
          add: function add(e) {
            return m(this, e = 0 === e ? 0 : e, e);
          }
        }), p && r(u.prototype, "size", {
          get: function get() {
            return d(this).size;
          }
        }), u;
      },
      setStrong: function setStrong(e, t, n) {
        var r = t + " Iterator",
            i = y(t),
            o = y(r);
        l(e, t, function (e, t) {
          v(this, {
            type: r,
            target: e,
            state: i(e),
            kind: t,
            last: void 0
          });
        }, function () {
          for (var e = o(this), t = e.kind, n = e.last; n && n.removed;) {
            n = n.previous;
          }

          return e.target && (e.last = n = n ? n.next : e.state.first) ? "keys" == t ? {
            value: n.key,
            done: !1
          } : "values" == t ? {
            value: n.value,
            done: !1
          } : {
            value: [n.key, n.value],
            done: !1
          } : (e.target = void 0, {
            value: void 0,
            done: !0
          });
        }, n ? "entries" : "values", !n, !0), u(t);
      }
    };
  }, function (e, t, n) {
    var r = n(22);

    e.exports = function (e, t, n) {
      for (var i in t) {
        r(e, i, t[i], n);
      }

      return e;
    };
  }, function (e, t, n) {
    "use strict";

    var r = n(1);

    function i(e, t) {
      return RegExp(e, t);
    }

    t.UNSUPPORTED_Y = r(function () {
      var e = i("a", "y");
      return e.lastIndex = 2, null != e.exec("abcd");
    }), t.BROKEN_CARET = r(function () {
      var e = i("^r", "gy");
      return e.lastIndex = 2, null != e.exec("str");
    });
  }, function (e, t, n) {
    var r = n(57),
        i = n(26),
        o = function o(e) {
      return function (t, n) {
        var o,
            a,
            c = String(i(t)),
            s = r(n),
            l = c.length;
        return s < 0 || s >= l ? e ? "" : void 0 : (o = c.charCodeAt(s)) < 55296 || o > 56319 || s + 1 === l || (a = c.charCodeAt(s + 1)) < 56320 || a > 57343 ? e ? c.charAt(s) : o : e ? c.slice(s, s + 2) : a - 56320 + (o - 55296 << 10) + 65536;
      };
    };

    e.exports = {
      codeAt: o(!1),
      charAt: o(!0)
    };
  }, function (e, t, n) {
    var r = n(9),
        i = n(35),
        o = n(3)("species");

    e.exports = function (e, t) {
      var n,
          a = r(e).constructor;
      return void 0 === a || null == (n = r(a)[o]) ? t : i(n);
    };
  }, function (e, t) {
    e.exports = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0
    };
  }, function (e, t, n) {
    "use strict";

    var r = n(0),
        i = n(69).indexOf,
        o = n(62),
        a = n(36),
        c = [].indexOf,
        s = !!c && 1 / [1].indexOf(1, -0) < 0,
        l = o("indexOf"),
        u = a("indexOf", {
      ACCESSORS: !0,
      1: 0
    });
    r({
      target: "Array",
      proto: !0,
      forced: s || !l || !u
    }, {
      indexOf: function indexOf(e) {
        return s ? c.apply(this, arguments) || 0 : i(this, e, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
  }, function (e, t, n) {
    "use strict";

    var r = n(0),
        i = n(35),
        o = n(23),
        a = n(1),
        c = n(62),
        s = [],
        l = s.sort,
        u = a(function () {
      s.sort(void 0);
    }),
        p = a(function () {
      s.sort(null);
    }),
        f = c("sort");
    r({
      target: "Array",
      proto: !0,
      forced: u || !p || !f
    }, {
      sort: function sort(e) {
        return void 0 === e ? l.call(o(this)) : l.call(o(this), i(e));
      }
    });
  }, function (e, t, n) {
    "use strict";

    var r = n(118),
        i = n(121);
    e.exports = r("Set", function (e) {
      return function () {
        return e(this, arguments.length ? arguments[0] : void 0);
      };
    }, i);
  }, function (e, t, n) {
    "use strict";

    var r = n(90),
        i = n(9),
        o = n(23),
        a = n(19),
        c = n(57),
        s = n(26),
        l = n(92),
        u = n(93),
        p = Math.max,
        f = Math.min,
        d = Math.floor,
        v = /\$([$&'`]|\d\d?|<[^>]*>)/g,
        y = /\$([$&'`]|\d\d?)/g;
    r("replace", 2, function (e, t, n, r) {
      var m = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
          h = r.REPLACE_KEEPS_$0,
          g = m ? "$" : "$0";
      return [function (n, r) {
        var i = s(this),
            o = null == n ? void 0 : n[e];
        return void 0 !== o ? o.call(n, i, r) : t.call(String(i), n, r);
      }, function (e, r) {
        if (!m && h || "string" == typeof r && -1 === r.indexOf(g)) {
          var o = n(t, e, this, r);
          if (o.done) return o.value;
        }

        var s = i(e),
            d = String(this),
            v = "function" == typeof r;
        v || (r = String(r));
        var y = s.global;

        if (y) {
          var _ = s.unicode;
          s.lastIndex = 0;
        }

        for (var k = [];;) {
          var w = u(s, d);
          if (null === w) break;
          if (k.push(w), !y) break;
          "" === String(w[0]) && (s.lastIndex = l(d, a(s.lastIndex), _));
        }

        for (var S, x = "", j = 0, O = 0; O < k.length; O++) {
          w = k[O];

          for (var A = String(w[0]), P = p(f(c(w.index), d.length), 0), z = [], E = 1; E < w.length; E++) {
            z.push(void 0 === (S = w[E]) ? S : String(S));
          }

          var C = w.groups;

          if (v) {
            var D = [A].concat(z, P, d);
            void 0 !== C && D.push(C);
            var T = String(r.apply(void 0, D));
          } else T = b(A, d, P, z, C, r);

          P >= j && (x += d.slice(j, P) + T, j = P + A.length);
        }

        return x + d.slice(j);
      }];

      function b(e, n, r, i, a, c) {
        var s = r + e.length,
            l = i.length,
            u = y;
        return void 0 !== a && (a = o(a), u = v), t.call(c, u, function (t, o) {
          var c;

          switch (o.charAt(0)) {
            case "$":
              return "$";

            case "&":
              return e;

            case "`":
              return n.slice(0, r);

            case "'":
              return n.slice(s);

            case "<":
              c = a[o.slice(1, -1)];
              break;

            default:
              var u = +o;
              if (0 === u) return t;

              if (u > l) {
                var p = d(u / 10);
                return 0 === p ? t : p <= l ? void 0 === i[p - 1] ? o.charAt(1) : i[p - 1] + o.charAt(1) : t;
              }

              c = i[u - 1];
          }

          return void 0 === c ? "" : c;
        });
      }
    });
  }, function (e, t, n) {
    var r,
        i,
        o,
        a = n(2),
        c = n(1),
        s = n(28),
        l = n(48),
        u = n(107),
        p = n(65),
        f = n(132),
        d = a.location,
        v = a.setImmediate,
        y = a.clearImmediate,
        m = a.process,
        h = a.MessageChannel,
        g = a.Dispatch,
        b = 0,
        _ = {},
        k = function k(e) {
      if (_.hasOwnProperty(e)) {
        var t = _[e];
        delete _[e], t();
      }
    },
        w = function w(e) {
      return function () {
        k(e);
      };
    },
        S = function S(e) {
      k(e.data);
    },
        x = function x(e) {
      a.postMessage(e + "", d.protocol + "//" + d.host);
    };

    v && y || (v = function v(e) {
      for (var t = [], n = 1; arguments.length > n;) {
        t.push(arguments[n++]);
      }

      return _[++b] = function () {
        ("function" == typeof e ? e : Function(e)).apply(void 0, t);
      }, r(b), b;
    }, y = function y(e) {
      delete _[e];
    }, "process" == s(m) ? r = function r(e) {
      m.nextTick(w(e));
    } : g && g.now ? r = function r(e) {
      g.now(w(e));
    } : h && !f ? (o = (i = new h()).port2, i.port1.onmessage = S, r = l(o.postMessage, o, 1)) : !a.addEventListener || "function" != typeof postMessage || a.importScripts || c(x) || "file:" === d.protocol ? r = "onreadystatechange" in p("script") ? function (e) {
      u.appendChild(p("script")).onreadystatechange = function () {
        u.removeChild(this), k(e);
      };
    } : function (e) {
      setTimeout(w(e), 0);
    } : (r = x, a.addEventListener("message", S, !1))), e.exports = {
      set: v,
      clear: y
    };
  }, function (e, t, n) {
    var r = n(74);
    e.exports = /(iphone|ipod|ipad).*applewebkit/i.test(r);
  }, function (e, t, n) {
    "use strict";

    var r = n(35),
        i = function i(e) {
      var t, n;
      this.promise = new e(function (e, r) {
        if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
        t = e, n = r;
      }), this.resolve = r(t), this.reject = r(n);
    };

    e.exports.f = function (e) {
      return new i(e);
    };
  }, function (e, t, n) {
    e.exports = n(171)();
  }, function (e, t) {
    e.exports = {
      acceptAll: "照单全收",
      acceptSelected: "接受选择",
      close: "密切",
      consentModal: {
        description: "在这里，您可以评估和定制我们希望在本网站上使用的服务。您是负责人！您可以根据自己的需要启用或禁用服务。启用或禁用您认为合适的服务。",
        privacyPolicy: {
          name: "隐私政策",
          text: "要了解更多，请阅读我们的{privacyPolicy} 。"
        },
        title: "我们想使用的服务"
      },
      consentNotice: {
        changeDescription: "自上次访问后有变化，请更新您的同意。",
        description: "你好！我们可以为{purposes} 启用一些额外的服务吗？您可以随时更改或撤回您的同意。",
        imprint: {
          name: "印记"
        },
        learnMore: "让我来选",
        privacyPolicy: {
          name: "隐私政策"
        },
        testing: "测试模式！"
      },
      contextualConsent: {
        acceptAlways: "总是",
        acceptOnce: "是的，是的",
        description: "你想加载由{title} 提供的外部内容吗？"
      },
      decline: "我拒绝",
      ok: "没事的",
      poweredBy: "与Klaro一起实现!",
      privacyPolicy: {
        name: "隐私政策",
        text: "要了解更多，请阅读我们的{privacyPolicy} 。"
      },
      purposeItem: {
        service: "服务",
        services: "服务"
      },
      purposes: {
        advertising: {
          description: "这些服务处理个人信息，向您展示个性化或基于兴趣的广告。",
          title: "广告宣传"
        },
        functional: {
          description: "这些服务对于本网站的正常运行是必不可少的。您不能在这里禁用它们，否则服务将无法正常运行。\n",
          title: "服务提供"
        },
        marketing: {
          description: "这些服务会处理个人信息，向您展示您可能感兴趣的产品、服务或主题的相关内容。",
          title: "市场营销"
        },
        performance: {
          description: "这些服务处理个人信息是为了优化本网站提供的服务。\n",
          title: "性能优化"
        }
      },
      save: "挽救",
      service: {
        disableAll: {
          description: "使用此开关可启用或禁用所有服务。",
          title: "启用或停用所有服务"
        },
        optOut: {
          description: "这个服务是默认加载的(但你可以选择退出)",
          title: "(选择退出)"
        },
        purpose: "目的",
        purposes: "目的",
        required: {
          description: "这种服务是必须的",
          title: "(总是需要)"
        }
      }
    };
  }, function (e, t) {
    e.exports = {
      acceptAll: "Aceitar todos",
      acceptSelected: "Aceitar selecionados",
      close: "Fechar",
      consentModal: {
        description: "Aqui você pode avaliar e personalizar os serviços que gostaríamos de usar neste website. Você está no comando! Habilite ou desabilite os serviços como julgar conveniente.",
        privacyPolicy: {
          name: "política de privacidade",
          text: "Para saber mais, por favor, leia nossa {privacyPolicy}."
        },
        title: "Serviços que gostaríamos de utilizar"
      },
      consentNotice: {
        changeDescription: "Houve mudanças desde sua última visita, queira renovar seu consentimento.",
        description: "Olá! Poderíamos, por favor, habilitar alguns serviços adicionais para {purposes}? Você pode sempre mudar ou retirar seu consentimento mais tarde.",
        imprint: {
          name: "imprimir"
        },
        learnMore: "Deixe-me escolher",
        privacyPolicy: {
          name: "política de privacidade"
        },
        testing: "Modo de teste!"
      },
      contextualConsent: {
        acceptAlways: "Sempre",
        acceptOnce: "Sim",
        description: "Você deseja carregar conteúdo externo fornecido por {title}?"
      },
      decline: "Recusar",
      ok: "Aceito.",
      poweredBy: "Realizado com Klaro!",
      privacyPolicy: {
        name: "política de privacidade",
        text: "Para saber mais, por favor, leia nossa {privacyPolicy}."
      },
      purposeItem: {
        service: "serviço",
        services: "serviços"
      },
      purposes: {
        advertising: {
          description: "Esses serviços processam informações pessoais para mostrar a você anúncios personalizados ou baseados em interesses.",
          title: "Publicidade"
        },
        functional: {
          description: "Esses serviços são essenciais para o correto funcionamento deste website. Você não pode desativá-los aqui, pois de outra forma o serviço não funcionaria corretamente.\n",
          title: "Prestação de serviços"
        },
        marketing: {
          description: "Esses serviços processam informações pessoais para mostrar a você conteúdo relevante sobre produtos, serviços ou tópicos que possam ser do seu interesse.",
          title: "Marketing"
        },
        performance: {
          description: "Esses serviços processam informações pessoais para otimizar o serviço que este website oferece.\n",
          title: "Otimização do desempenho"
        }
      },
      save: "Salvar",
      service: {
        disableAll: {
          description: "Use essa chave para habilitar ou desabilitar todos os serviços.",
          title: "Habilitar ou desabilitar todos os serviços"
        },
        optOut: {
          description: "Estes serviços são carregados por padrão (mas o você pode optar por não participar).",
          title: "(opt-out)"
        },
        purpose: "Objetivo",
        purposes: "Objetivos",
        required: {
          description: "Esses serviços são sempre necessários",
          title: "(sempre necessário)"
        }
      }
    };
  }, function (e, t) {
    e.exports = {
      acceptAll: "Accepta-les totes",
      acceptSelected: "Accepta les escollides",
      service: {
        disableAll: {
          description: "Useu aquest botó per a habilitar o deshabilitar totes les aplicacions.",
          title: "Habilita/deshabilita totes les aplicacions"
        },
        optOut: {
          description: "Aquesta aplicació es carrega per defecte, però podeu desactivar-la",
          title: "(opt-out)"
        },
        purpose: "Finalitat",
        purposes: "Finalitats",
        required: {
          description: "Aquesta aplicació es necessita sempre",
          title: "(necessària)"
        }
      },
      close: "Tanca",
      consentModal: {
        description: "Aquí podeu veure i personalitzar la informació que recopilem sobre vós.",
        privacyPolicy: {
          name: "política de privadesa",
          text: "Per a més informació, consulteu la nostra {privacyPolicy}."
        },
        title: "Informació que recopilem"
      },
      consentNotice: {
        changeDescription: "Hi ha hagut canvis des de la vostra darrera visita. Actualitzeu el vostre consentiment.",
        description: "Recopilem i processem la vostra informació personal amb les següents finalitats: {purposes}.",
        imprint: {
          name: "Empremta"
        },
        learnMore: "Saber-ne més",
        privacyPolicy: {
          name: "política de privadesa"
        }
      },
      decline: "Rebutja",
      ok: "Accepta",
      poweredBy: "Funciona amb Klaro!",
      purposeItem: {
        service: "aplicació",
        services: "aplicacions"
      },
      save: "Desa"
    };
  }, function (e, t) {
    e.exports = {
      privacyPolicy: {
        name: "zásady ochrany soukromí",
        text: 'Pro další informace si přečtete naše <tr-hint v="privacy policy">{privacyPolicy}</tr-hint>.'
      },
      consentModal: {
        title: "Služby, které bychom rádi využili",
        description: "Zde můžete posoudit a přizpůsobit služby, které bychom rádi na tomto webu používali. Máte to pod kontrolou! Povolte nebo zakažte služby, jak uznáte za vhodné."
      },
      consentNotice: {
        testing: "Testing mode!",
        changeDescription: "Od vaší poslední návštěvy došlo ke změnám, obnovte prosím svůj souhlas.",
        description: "„Dobrý den! Můžeme povolit některé další služby pro {purposes}? Svůj souhlas můžete kdykoliv změnit nebo odvolat.“",
        "learnMore|capitalize": "Vyberu si"
      },
      "účely": {
        functional: {
          "title|capitalize": "Poskytování služeb",
          description: "Tyto služby jsou nezbytné pro správné fungování tohoto webu. Nelze je zde deaktivovat, protože služba by jinak nefungovala správně.\n"
        },
        performance: {
          "title|capitalize": "Optimalizace výkonu",
          description: "V rámci těchto služeb jsou zpracovávány osobní údaje za účelem optimalizace služeb, které jsou na tomto webu poskytovány.\n"
        },
        marketing: {
          "title|capitalize": "Marketing",
          description: "V rámci těchto služeb jsou zpracovávány osobní údaje, aby se vám zobrazoval relevantní obsah o produktech, službách nebo tématech, které by vás mohly zajímat."
        },
        advertising: {
          "title|capitalize": "Reklama",
          description: "V rámci těchto služeb jsou zpracovávány osobní údaje, aby vám zobrazovaly personalizované nebo zájmově orientované reklamy."
        }
      },
      purposeItem: {
        service: "Jednoduchá služba <tr-snip></tr-snip> , kterou nainstaluji do svého počítače.",
        services: "Několik jednoduchých služeb <tr-snip></tr-snip> , které nainstaluji do svého počítače."
      },
      "ok|capitalize": "To je v pořádku",
      save: "uložit",
      "decline|capitalize": "Nepřijímám",
      close: "zavřít",
      acceptAll: "přijmout vše",
      acceptSelected: "přijmout vybrané",
      service: {
        disableAll: {
          title: "povolit nebo zakázat všechny služby",
          description: "Pomocí tohoto přepínače můžete povolit nebo zakázat všechny služby."
        },
        optOut: {
          title: "(opt-out)",
          description: "Tato služba se načítá ve výchozím nastavení (ale můžete ji zrušit)"
        },
        required: {
          title: "(vždy vyžadováno)",
          description: "Tato služba je vždy vyžadována"
        },
        purposes: "Zpracování  pro účely <tr-snip></tr-snip>",
        purpose: "Zpracování pro účely <tr-snip></tr-snip>"
      },
      poweredBy: "Realizováno pomocí Klaro!",
      contextualConsent: {
        description: "Chcete načíst externí obsah dodávaný prostřednictvím {title}?",
        acceptOnce: "Ano",
        acceptAlways: "Vždy"
      }
    };
  }, function (e, t) {
    e.exports = {
      acceptAll: "Tillad alle",
      acceptSelected: "Tillad udvalgte",
      service: {
        disableAll: {
          description: "Brug denne kontakt til at aktivere/deaktivere alle apps.",
          title: "Aktiver/deaktiver alle applikatione"
        },
        optOut: {
          description: "Denne applikation indlæses som standard (men du kan deaktivere den)",
          title: "Opt-Out"
        },
        purpose: "Formål",
        purposes: "Formål",
        required: {
          description: "Denne applikation er altid nødvendig",
          title: "(Altid nødvendig)"
        }
      },
      close: "Luk",
      consentModal: {
        description: "Her kan du se og ændre, hvilke informationer vi gemmer om dig.",
        privacyPolicy: {
          name: "Flere informationer finde du under {privacyPolicy}",
          text: "databeskyttelseserklæring."
        },
        title: "Informationer, som vi gemmer"
      },
      consentNotice: {
        changeDescription: "Der har været ændringer siden dit sidste besøg. Opdater dit valg.",
        description: "Vi gemmer og behandler dine personlige oplysninger til følgende formål: {purposes}.",
        imprint: {
          name: ""
        },
        learnMore: "Læs mere",
        privacyPolicy: {
          name: "Datenschutzerklärung"
        }
      },
      decline: "Afvis",
      ok: "Ok",
      poweredBy: "Realiseret med Klaro!",
      purposeItem: {
        service: "",
        services: ""
      },
      save: "Gem"
    };
  }, function (e, t) {
    e.exports = {
      acceptAll: "Alle akzeptieren",
      acceptSelected: "Ausgewählte akzeptieren",
      close: "Schließen",
      consentModal: {
        description: "Hier können Sie die Dienste, die wir auf dieser Website nutzen möchten, bewerten und anpassen. Sie haben das Sagen! Aktivieren oder deaktivieren Sie die Dienste, wie Sie es für richtig halten.",
        privacyPolicy: {
          name: "Datenschutzerklärung",
          text: "Um mehr zu erfahren, lesen Sie bitte unsere {privacyPolicy}."
        },
        title: "Dienste, die wir nutzen möchten"
      },
      consentNotice: {
        changeDescription: "Seit Ihrem letzten Besuch gab es Änderungen, bitte erneuern Sie Ihre Zustimmung.",
        description: "Hallo! Könnten wir bitte einige zusätzliche Dienste für {purposes} aktivieren? Sie können Ihre Zustimmung später jederzeit ändern oder zurückziehen.",
        imprint: {
          name: "Impressum"
        },
        learnMore: "Lassen Sie mich wählen",
        privacyPolicy: {
          name: "Datenschutzerklärung"
        },
        testing: "Testmodus!"
      },
      contextualConsent: {
        acceptAlways: "Immer",
        acceptOnce: "Ja",
        description: "Möchten Sie von {title} bereitgestellte externe Inhalte laden?"
      },
      decline: "Ich lehne ab",
      ok: "Das ist ok",
      poweredBy: "Realisiert mit Klaro!",
      privacyPolicy: {
        name: "Datenschutzerklärung",
        text: "Um mehr zu erfahren, lesen Sie bitte unsere {privacyPolicy}."
      },
      purposeItem: {
        service: "Dienst",
        services: "Dienste"
      },
      purposes: {
        advertising: {
          description: "Diese Dienste verarbeiten persönliche Informationen, um Ihnen personalisierte oder interessenbezogene Werbung zu zeigen.",
          title: "Werbung"
        },
        functional: {
          description: "Diese Dienste sind für die korrekte Funktion dieser Website unerlässlich. Sie können sie hier nicht deaktivieren, da der Dienst sonst nicht richtig funktionieren würde.\n",
          title: "Dienstbereitstellung"
        },
        marketing: {
          description: "Diese Dienste verarbeiten persönliche Daten, um Ihnen relevante Inhalte über Produkte, Dienstleistungen oder Themen zu zeigen, die Sie interessieren könnten.",
          title: "Marketing"
        },
        performance: {
          description: "Diese Dienste verarbeiten personenbezogene Daten, um den von dieser Website angebotenen Service zu optimieren.\n",
          title: "Optimierung der Leistung"
        }
      },
      save: "Speichern",
      service: {
        disableAll: {
          description: "Mit diesem Schalter können Sie alle Dienste aktivieren oder deaktivieren.",
          title: "Alle Dienste aktivieren oder deaktivieren"
        },
        optOut: {
          description: "Diese Dienste werden standardmäßig geladen (Sie können sich jedoch abmelden)",
          title: "(Opt-out)"
        },
        purpose: "Zweck",
        purposes: "Zwecke",
        required: {
          description: "Dieser Service ist immer erforderlich",
          title: "(immer erforderlich)"
        }
      }
    };
  }, function (e, t) {
    e.exports = {
      acceptAll: "",
      acceptAll_en: "Accept all",
      acceptSelected: "",
      acceptSelected_en: "Accept selected",
      service: {
        disableAll: {
          description: "Χρησιμοποίησε αυτό τον διακόπτη για να ενεργοποιήσεις/απενεργοποιήσεις όλες τις εφαρμογές.",
          title: "Για όλες τις εφαρμογές"
        },
        optOut: {
          description: "Είναι προκαθορισμένο να φορτώνεται, άλλα μπορεί να παραληφθεί",
          title: "(μη απαιτούμενο)"
        },
        purpose: "Σκοπός",
        purposes: "Σκοποί",
        required: {
          description: "Δεν γίνεται να λειτουργήσει σωστά η εφαρμογή χωρίς αυτό",
          title: "(απαιτούμενο)"
        }
      },
      close: "Κλείσιμο",
      consentModal: {
        description: "Εδώ μπορείς να δεις και να ρυθμίσεις τις πληροφορίες που συλλέγουμε σχετικά με εσένα.",
        privacyPolicy: {
          name: "Πολιτική Απορρήτου",
          text: "Για περισσότερες πληροφορίες, παρακαλώ διαβάστε την {privacyPolicy}."
        },
        title: "Πληροφορίες που συλλέγουμε"
      },
      consentNotice: {
        changeDescription: "Πραγματοποιήθηκαν αλλαγές μετά την τελευταία σας επίσκεψη παρακαλούμε ανανεώστε την συγκατάθεση σας.",
        description: "Συγκεντρώνουμε και επεξεργαζόμαστε τα προσωπικά δεδομένα σας για τους παρακάτω λόγους: {purposes}.",
        imprint: {
          name: "",
          name_en: "imprint"
        },
        learnMore: "Περισσότερα",
        privacyPolicy: {
          name: "Πολιτική Απορρήτου"
        }
      },
      decline: "Απόρριπτω",
      ok: "OK",
      poweredBy: "Υποστηρίζεται από το Klaro!",
      purposeItem: {
        service: "",
        services: ""
      },
      save: "Αποθήκευση"
    };
  }, function (e, t) {
    e.exports = {
      acceptAll: "Accept all",
      acceptSelected: "Accept selected",
      close: "Close",
      consentModal: {
        description: "Here you can assess and customize the services that we'd like to use on this website. You're in charge! Enable or disable services as you see fit.",
        title: "Services we would like to use"
      },
      consentNotice: {
        changeDescription: "There were changes since your last visit, please renew your consent.",
        description: "Hi! Could we please enable some additional services for {purposes}? You can always change or withdraw your consent later.",
        learnMore: "Let me choose",
        testing: "Testing mode!"
      },
      contextualConsent: {
        acceptAlways: "Always",
        acceptOnce: "Yes",
        description: "Do you want to load external content supplied by {title}?"
      },
      decline: "I decline",
      ok: "That's ok",
      poweredBy: "Realized with Klaro!",
      privacyPolicy: {
        name: "privacy policy",
        text: "To learn more, please read our {privacyPolicy}."
      },
      purposeItem: {
        service: "service",
        services: "services"
      },
      purposes: {
        advertising: {
          description: "These services process personal information to show you personalized or interest-based advertisements.",
          title: "Advertising"
        },
        functional: {
          description: "These services are essential for the correct functioning of this website. You cannot disable them here as the service would not work correctly otherwise.\n",
          title: "Service Provision"
        },
        marketing: {
          description: "These services process personal information to show you relevant content about products, services or topics that you might be interested in.",
          title: "Marketing"
        },
        performance: {
          description: "These services process personal information to optimize the service that this website offers.\n",
          title: "Performance Optimization"
        }
      },
      save: "Save",
      service: {
        disableAll: {
          description: "Use this switch to enable or disable all services.",
          title: "Enable or disable all services"
        },
        optOut: {
          description: "This services is loaded by default (but you can opt out)",
          title: "(opt-out)"
        },
        purpose: "purpose",
        purposes: "purposes",
        required: {
          description: "This services is always required",
          title: "(always required)"
        }
      }
    };
  }, function (e, t) {
    e.exports = {
      acceptAll: "Aceptar todas",
      acceptSelected: "Aceptar seleccionadas",
      close: "Cerrar",
      consentModal: {
        description: "Aquí puede evaluar y personalizar los servicios que nos gustaría utilizar en este sitio web. ¡Usted decide! Habilite o deshabilite los servicios como considere oportuno.",
        privacyPolicy: {
          name: "política de privacidad",
          text: "Para saber más, por favor lea nuestra {privacyPolicy}."
        },
        title: "Servicios que nos gustaría utilizar"
      },
      consentNotice: {
        changeDescription: "Ha habido cambios en las cookies desde su última visita. Debe renovar su consentimiento.",
        description: "¡Hola! ¿Podríamos habilitar algunos servicios adicionales para {purposes}? Siempre podrá cambiar o retirar su consentimiento más tarde.",
        imprint: {
          name: "Imprimir"
        },
        learnMore: "Quiero elegir",
        privacyPolicy: {
          name: "política de privacidad"
        },
        testing: "¡Modo de prueba!"
      },
      contextualConsent: {
        acceptAlways: "Siempre",
        acceptOnce: "Sí",
        description: "¿Quieres cargar el contenido externo suministrado por {title}?"
      },
      decline: "Descartar todas",
      ok: "De acuerdo",
      poweredBy: "¡Realizado con Klaro!",
      privacyPolicy: {
        name: "política de privacidad",
        text: "Para saber más, por favor lea nuestra {privacyPolicy}."
      },
      purposeItem: {
        service: "servicio",
        services: "servicios"
      },
      purposes: {
        advertising: {
          description: "Estos servicios procesan información personal para mostrarle anuncios personalizados o basados en intereses.",
          title: "Publicidad"
        },
        functional: {
          description: "Estos servicios son esenciales para el correcto funcionamiento de este sitio web. No puede desactivarlos ya que la página no funcionaría correctamente.",
          title: "Prestación de servicios"
        },
        marketing: {
          description: "Estos servicios procesan información personal para mostrarle contenido relevante sobre productos, servicios o temas que puedan interesarle.",
          title: "Marketing"
        },
        performance: {
          description: "Estos servicios procesan información personal para optimizar el servicio que ofrece este sitio.",
          title: "Optimización del rendimiento"
        }
      },
      save: "Guardar",
      service: {
        disableAll: {
          description: "Utilice este interruptor para activar o desactivar todos los servicios.",
          title: "Activar o desactivar todos los servicios"
        },
        optOut: {
          description: "Este servicio está habilitado por defecto (pero puede optar por lo contrario)",
          title: "(desactivar)"
        },
        purpose: "Finalidad",
        purposes: "Finalidades",
        required: {
          description: "Este servicio es necesario siempre",
          title: "(siempre requerido)"
        }
      }
    };
  }, function (e, t) {
    e.exports = {
      acceptAll: "",
      acceptAll_en: "Accept all",
      acceptSelected: "",
      acceptSelected_en: "Accept selected",
      service: {
        disableAll: {
          description: "Aktivoi kaikki päälle/pois.",
          title: "Valitse kaikki"
        },
        optOut: {
          description: "Ladataan oletuksena (mutta voit ottaa sen pois päältä)",
          title: "(ladataan oletuksena)"
        },
        purpose: "Käyttötarkoitus",
        purposes: "Käyttötarkoitukset",
        required: {
          description: "Sivusto vaatii tämän aina",
          title: "(vaaditaan)"
        }
      },
      close: "Sulje",
      consentModal: {
        description: "Voit tarkastella ja muokata sinusta keräämiämme tietoja.",
        privacyPolicy: {
          name: "tietosuojasivultamme",
          text: "Voit lukea lisätietoja {privacyPolicy}."
        },
        title: "Keräämämme tiedot"
      },
      consentNotice: {
        changeDescription: "Olemme tehneet muutoksia ehtoihin viime vierailusi jälkeen, tarkista ehdot.",
        description: "Keräämme ja käsittelemme henkilötietoja seuraaviin tarkoituksiin: {purposes}.",
        imprint: {
          name: "",
          name_en: "imprint"
        },
        learnMore: "Lue lisää",
        privacyPolicy: {
          name: "tietosuojasivultamme"
        }
      },
      decline: "Hylkää",
      ok: "Hyväksy",
      poweredBy: "Palvelun tarjoaa Klaro!",
      purposeItem: {
        service: "",
        services: ""
      },
      save: "Tallenna"
    };
  }, function (e, t) {
    e.exports = {
      acceptAll: "Accepter tout",
      acceptSelected: "Accepter sélectionné",
      close: "Fermer",
      consentModal: {
        description: "Vous pouvez ici évaluer et personnaliser les services que nous aimerions utiliser sur ce site. C'est vous qui décidez ! Activez ou désactivez les services comme bon vous semble.",
        privacyPolicy: {
          name: "politique de confidentialité",
          text: "Pour en savoir plus, veuillez lire notre {privacyPolicy}."
        },
        title: "Services que nous souhaitons utiliser"
      },
      consentNotice: {
        changeDescription: "Il y a eu des changements depuis votre dernière visite, veuillez renouveler votre consentement.",
        description: "Bonjour ! Pourrions-nous activer des services supplémentaires pour {purposes}? Vous pouvez toujours modifier ou retirer votre consentement plus tard.",
        imprint: {
          name: "mentions légales"
        },
        learnMore: "Laissez-moi choisir",
        privacyPolicy: {
          name: "politique de confidentialité"
        },
        testing: "Mode test !"
      },
      contextualConsent: {
        acceptAlways: "Toujours",
        acceptOnce: "Oui",
        description: "Vous souhaitez charger un contenu externe fourni par {title}?"
      },
      decline: "Je refuse",
      ok: "C'est bon.",
      poweredBy: "Réalisé avec Klaro !",
      privacyPolicy: {
        name: "politique de confidentialité",
        text: "Pour en savoir plus, veuillez lire notre {privacyPolicy}."
      },
      purposeItem: {
        service: "service",
        services: "services"
      },
      purposes: {
        advertising: {
          description: "Ces services traitent les informations personnelles pour vous présenter des publicités personnalisées ou basées sur des intérêts.",
          title: "Publicité"
        },
        functional: {
          description: "Ces services sont essentiels au bon fonctionnement de ce site. Vous ne pouvez pas les désactiver ici car le service ne fonctionnerait pas correctement autrement.\n",
          title: "Prestation de services"
        },
        marketing: {
          description: "Ces services traitent les informations personnelles afin de vous présenter un contenu pertinent sur les produits, les services ou les sujets qui pourraient vous intéresser.",
          title: "Marketing"
        },
        performance: {
          description: "Ces services traitent les informations personnelles afin d'optimiser le service que ce site Web offre.\n",
          title: "Optimisation de la performance"
        }
      },
      save: "Enregistrer",
      service: {
        disableAll: {
          description: "Utilisez ce commutateur pour activer ou désactiver tous les services.",
          title: "Activer ou désactiver tous les services"
        },
        optOut: {
          description: "Ce service est chargé par défaut (mais vous pouvez le désactiver)",
          title: "(opt-out)"
        },
        purpose: "Objet",
        purposes: "Fins",
        required: {
          description: "Ce service est toujours nécessaire",
          title: "(toujours requis)"
        }
      }
    };
  }, function (e, t) {
    e.exports = {
      acceptAll: "Aceptar todas",
      acceptSelected: "Aceptar seleccionadas",
      close: "Pechar",
      consentModal: {
        description: "Aquí pode avaliar e personalizar os servizos que nos gustaría utilizar neste sitio web. ¡Vostede decide! Habilite ou deshabilite os servicios como lle conveña.",
        privacyPolicy: {
          name: "política de privacidade",
          text: "Para saber máis, por favor lea a nosa {privacyPolicy}."
        },
        title: "Servizos que nos gustaría utilizar"
      },
      consentNotice: {
        changeDescription: "Houbo cambios nas cookies dende a súa última visita. Debe renovar o seu consentimento.",
        description: "¡Ola! ¿Poderíamos habilitar algúns servizos adicionais para {purposes}? Sempre poderá cambiar ou retirar o séu consentimento máis tarde.",
        imprint: {
          name: "Imprimir"
        },
        learnMore: "Quero elixir",
        privacyPolicy: {
          name: "política de privacidade"
        },
        testing: "¡Modo de proba!"
      },
      decline: "Descartar todas",
      ok: "De acordo",
      poweredBy: "¡Realizado con Klaro!",
      privacyPolicy: {
        name: "política de privacidade",
        text: "Para saber máis, por favor lea a nosa {privacyPolicy}."
      },
      purposeItem: {
        service: "servizo",
        services: "servizos"
      },
      purposes: {
        advertising: {
          description: "Estes servizos procesan información persoal para mostrarlle anuncios personalizados ou basados en intereses.",
          title: "Publicidade"
        },
        functional: {
          description: "Estes servizos son esenciais para o correcto funcionamiento deste sitio web. Non pode desactivalos xa que a páxina non funcionaría correctamente.",
          title: "Prestación de servizos"
        },
        marketing: {
          description: "Estes servizos procesan información persoal para mostrarlle contido relevante sobre produtos, servizos ou temas que poidan interesarlle.",
          title: "Marketing"
        },
        performance: {
          description: "Estes servizos procesan información persoal para optimizar o servizo que ofrece este sitio.",
          title: "Optimización do rendimento"
        }
      },
      save: "Gardar",
      service: {
        disableAll: {
          description: "Utilice este interruptor para activar ou desactivar todos os servizos.",
          title: "Activar ou desactivar todos os servizos"
        },
        optOut: {
          description: "Este servizo está habilitado por defecto (pero pode optar polo contrario)",
          title: "(desactivar)"
        },
        purpose: "Finalidade",
        purposes: "Finalidades",
        required: {
          description: "Este servizo é necesario sempre",
          title: "(sempre requirido)"
        }
      }
    };
  }, function (e, t) {
    e.exports = {
      acceptAll: "",
      acceptAll_en: "Accept all",
      acceptSelected: "",
      acceptSelected_en: "Accept selected",
      service: {
        disableAll: {
          description: "Használd ezt a kapcsolót az összes alkalmazás engedélyezéséhez/letiltásához.",
          title: "Összes app átkapcsolása"
        },
        optOut: {
          description: "Ez az alkalmazás alapértelmezés szerint betöltött (de ki lehet kapcsolni)",
          title: "(leiratkozás)"
        },
        purpose: "Cél",
        purposes: "Célok",
        required: {
          description: "Ez az alkalmazás mindig kötelező",
          title: "(mindig kötelező)"
        }
      },
      close: "Elvet",
      consentModal: {
        description: "Itt láthatod és testreszabhatod az rólad gyűjtött információkat.",
        privacyPolicy: {
          name: "adatvédelmi irányelveinket",
          text: "További információért kérjük, olvassd el az {privacyPolicy}."
        },
        title: "Információk, amiket gyűjtünk"
      },
      consentNotice: {
        changeDescription: "Az utolsó látogatás óta változások történtek, kérjük, frissítsd a hozzájárulásodat.",
        description: "Az személyes adataidat összegyűjtjük és feldolgozzuk az alábbi célokra: {purposes}.",
        imprint: {
          name: "",
          name_en: "imprint"
        },
        learnMore: "Tudj meg többet",
        privacyPolicy: {
          name: "adatvédelmi irányelveinket"
        }
      },
      decline: "Mentés",
      ok: "Elfogad",
      poweredBy: "Powered by Klaro!",
      purposeItem: {
        service: "",
        services: ""
      },
      save: "Save"
    };
  }, function (e, t) {
    e.exports = {
      acceptAll: "",
      acceptAll_en: "Prihvati sve",
      acceptSelected: "",
      acceptSelected_en: "Prihvati odabrane",
      service: {
        disableAll: {
          description: "Koristite ovaj prekidač da omogućite/onemogućite sve aplikacije odjednom.",
          title: "Izmeijeni sve"
        },
        optOut: {
          description: "Ova aplikacija je učitana automatski (ali je možete onemogućiti)",
          title: "(onemogućite)"
        },
        purpose: "Svrha",
        purposes: "Svrhe",
        required: {
          description: "Ova aplikacija je uvijek obavezna",
          title: "(obavezna)"
        }
      },
      close: "Zatvori",
      consentModal: {
        description: "Ovdje možete vidjeti i podesiti informacije koje prikupljamo o Vama.",
        privacyPolicy: {
          name: "pravila privatnosti",
          text: "Za više informacije pročitajte naša {privacyPolicy}."
        },
        title: "Informacije koje prikupljamo"
      },
      consentNotice: {
        changeDescription: "Došlo je do promjena od Vaše posljednjeg posjećivanja web stranice, molimo Vas da ažurirate svoja odobrenja.",
        description: "Mi prikupljamo i procesiramo Vaše osobne podatke radi slijedećeg: {purposes}.",
        imprint: {
          name: "",
          name_en: "imprint"
        },
        learnMore: "Saznajte više",
        privacyPolicy: {
          name: "pravila privatnosti"
        }
      },
      decline: "Odbij",
      ok: "U redu",
      poweredBy: "Pokreće Klaro!",
      purposeItem: {
        service: "",
        services: ""
      },
      save: "Spremi"
    };
  }, function (e, t) {
    e.exports = {
      acceptAll: "Accettare tutti",
      acceptSelected: "Accettare selezionato",
      close: "Chiudi",
      consentModal: {
        description: "Qui può valutare e personalizzare i servizi che vorremmo utilizzare su questo sito web. È lei il responsabile! Abilitare o disabilitare i servizi come meglio crede.",
        privacyPolicy: {
          name: "informativa sulla privacy",
          text: "Per saperne di più, legga la nostra {privacyPolicy}."
        },
        title: "Servizi che desideriamo utilizzare"
      },
      consentNotice: {
        changeDescription: "Ci sono stati dei cambiamenti rispetto alla sua ultima visita, la preghiamo di rinnovare il suo consenso.",
        description: "Salve, possiamo attivare alcuni servizi aggiuntivi per {purposes}? Può sempre modificare o ritirare il suo consenso in un secondo momento.",
        imprint: {
          name: "impronta"
        },
        learnMore: "Lasciatemi scegliere",
        privacyPolicy: {
          name: "informativa sulla privacy"
        },
        testing: "Modalità di test!"
      },
      contextualConsent: {
        acceptAlways: "Sempre",
        acceptOnce: "Sì",
        description: "Vuole caricare contenuti esterni forniti da {title}?"
      },
      decline: "Rifiuto",
      ok: "Va bene così",
      poweredBy: "Realizzato con Klaro!",
      privacyPolicy: {
        name: "informativa sulla privacy",
        text: "Per saperne di più, legga la nostra {privacyPolicy}."
      },
      purposeItem: {
        service: "servizio",
        services: "servizi"
      },
      purposes: {
        advertising: {
          description: "Questi servizi elaborano le informazioni personali per mostrarle annunci pubblicitari personalizzati o basati su interessi.",
          title: "Pubblicità"
        },
        functional: {
          description: "Questi servizi sono essenziali per il corretto funzionamento di questo sito web. Non può disattivarli qui perché altrimenti il servizio non funzionerebbe correttamente.\n",
          title: "Fornitura di servizi"
        },
        marketing: {
          description: "Questi servizi elaborano le informazioni personali per mostrarle contenuti rilevanti su prodotti, servizi o argomenti che potrebbero interessarla.",
          title: "Marketing"
        },
        performance: {
          description: "Questi servizi elaborano le informazioni personali per ottimizzare il servizio offerto da questo sito web.\n",
          title: "Ottimizzazione delle prestazioni"
        }
      },
      save: "Salva",
      service: {
        disableAll: {
          description: "Utilizzi questo interruttore per attivare o disattivare tutti i servizi.",
          title: "Attivare o disattivare tutti i servizi"
        },
        optOut: {
          description: "Questo servizio è caricato di default (ma è possibile scegliere di non usufruirne)",
          title: "(opt-out)"
        },
        purpose: "Scopo dell",
        purposes: "Finalità",
        required: {
          description: "Questo servizio è sempre richiesto",
          title: "(sempre richiesto)"
        }
      }
    };
  }, function (e, t) {
    e.exports = {
      acceptAll: "Accepteer alle",
      acceptSelected: "Geselecteerde",
      close: "Sluit",
      consentModal: {
        description: "Hier kunt u de diensten die wij op deze website willen gebruiken beoordelen en aanpassen. U heeft de leiding! Schakel de diensten naar eigen inzicht in of uit.",
        privacyPolicy: {
          name: "privacybeleid",
          text: "Voor meer informatie kunt u ons {privacyPolicy} lezen."
        },
        title: "Diensten die we graag willen gebruiken"
      },
      consentNotice: {
        changeDescription: "Er waren veranderingen sinds uw laatste bezoek, gelieve uw toestemming te hernieuwen.",
        description: "Hallo, kunnen wij u een aantal extra diensten aanbieden voor {purposes}? U kunt uw toestemming later altijd nog wijzigen of intrekken.",
        imprint: {
          name: "impressum"
        },
        learnMore: "Laat me kiezen",
        privacyPolicy: {
          name: "privacybeleid"
        },
        testing: "Testmodus!"
      },
      contextualConsent: {
        acceptAlways: "Altijd",
        acceptOnce: "Ja",
        description: "Wilt u externe content laden die door {title} wordt aangeleverd ?"
      },
      decline: "Ik weiger",
      ok: "Dat is oké",
      poweredBy: "Gerealiseerd met Klaro!",
      privacyPolicy: {
        name: "privacybeleid",
        text: "Voor meer informatie kunt u ons {privacyPolicy} lezen."
      },
      purposeItem: {
        service: "service",
        services: "diensten"
      },
      purposes: {
        advertising: {
          description: "Deze diensten verwerken persoonlijke informatie om u gepersonaliseerde of op interesse gebaseerde advertenties te tonen.",
          title: "Reclame"
        },
        functional: {
          description: "Deze diensten zijn essentieel voor het correct functioneren van deze website. U kunt ze hier niet uitschakelen omdat de dienst anders niet correct zou werken.\n",
          title: "Dienstverlening"
        },
        marketing: {
          description: "Deze diensten verwerken persoonlijke informatie om u relevante inhoud te tonen over producten, diensten of onderwerpen waarin u geïnteresseerd zou kunnen zijn.",
          title: "Marketing"
        },
        performance: {
          description: "Deze diensten verwerken persoonlijke informatie om de service die deze website biedt te optimaliseren.\n",
          title: "Optimalisatie van de prestaties"
        }
      },
      save: "Opslaan",
      service: {
        disableAll: {
          description: "Gebruik deze schakelaar om alle diensten in of uit te schakelen.",
          title: "Alle diensten in- of uitschakelen"
        },
        optOut: {
          description: "Deze diensten worden standaard geladen (maar u kunt zich afmelden)",
          title: "(opt-out)"
        },
        purpose: "Verwerkingsdoel",
        purposes: "Verwerkingsdoeleinden",
        required: {
          description: "Deze diensten zijn altijd nodig",
          title: "(altijd nodig)"
        }
      }
    };
  }, function (e, t) {
    e.exports = {
      acceptAll: "Godtar alle",
      acceptSelected: "Godtar valgt",
      service: {
        disableAll: {
          description: "Bruk denne for å skru av/på alle apper.",
          title: "Bytt alle apper"
        },
        optOut: {
          description: "Denne appen er lastet som standard (men du kan skru det av)",
          title: "(opt-out)"
        },
        purpose: "Årsak",
        purposes: "Årsaker",
        required: {
          description: "Denne applikasjonen er alltid påkrevd",
          title: "(alltid påkrevd)"
        }
      },
      close: "",
      close_en: "Close",
      consentModal: {
        description: "Her kan du se og velge hvilken informasjon vi samler inn om deg.",
        privacyPolicy: {
          name: "personvernerklæring",
          text: "For å lære mer, vennligst les vår {privacyPolicy}."
        },
        title: "Informasjon vi samler inn"
      },
      consentNotice: {
        changeDescription: "Det har skjedd endringer siden ditt siste besøk, vennligst oppdater ditt samtykke.",
        description: "Vi samler inn og prosesserer din personlige informasjon av følgende årsaker: {purposes}.",
        imprint: {
          name: "",
          name_en: "imprint"
        },
        learnMore: "Lær mer",
        privacyPolicy: {
          name: "personvernerklæring"
        }
      },
      decline: "Avslå",
      ok: "OK",
      poweredBy: "Laget med Klaro!",
      purposeItem: {
        service: "",
        services: ""
      },
      save: "Opslaan"
    };
  }, function (e, t) {
    e.exports = {
      acceptAll: "",
      acceptAll_en: "Accept all",
      acceptSelected: "",
      acceptSelected_en: "Accept selected",
      service: {
        disableAll: {
          description: "Utilizați acest switch pentru a activa/dezactiva toate aplicațiile.",
          title: "Comutați între toate aplicațiile"
        },
        optOut: {
          description: "Această aplicație este încărcată în mod implicit (dar puteți renunța)",
          title: "(opt-out)"
        },
        purpose: "Scop",
        purposes: "Scopuri",
        required: {
          description: "Această aplicație este întotdeauna necesară",
          title: "(întotdeauna necesar)"
        }
      },
      close: "",
      close_en: "Close",
      consentModal: {
        description: "Aici puteți vedea și personaliza informațiile pe care le colectăm despre dvs.",
        privacyPolicy: {
          name: "politica privacy",
          text: "Pentru a afla mai multe, vă rugăm să citiți {privacyPolicy}."
        },
        title: "Informațiile pe care le colectăm"
      },
      consentNotice: {
        changeDescription: "Au existat modificări de la ultima vizită, vă rugăm să actualizați consimțământul.",
        description: "Colectăm și procesăm informațiile dvs. personale în următoarele scopuri: {purposes}.",
        imprint: {
          name: "",
          name_en: "imprint"
        },
        learnMore: "Află mai multe",
        privacyPolicy: {
          name: "politica privacy"
        }
      },
      decline: "Renunță",
      ok: "OK",
      poweredBy: "Realizat de Klaro!",
      purposeItem: {
        service: "",
        services: ""
      },
      save: "Salvează"
    };
  }, function (e, t) {
    e.exports = {
      acceptAll: "",
      acceptAll_en: "Accept all",
      acceptSelected: "",
      acceptSelected_en: "Accept selected",
      service: {
        disableAll: {
          description: "Koristite ovaj prekidač da omogućite/onesposobite sve aplikacije odjednom.",
          title: "Izmeni sve"
        },
        optOut: {
          description: "Ova aplikacija je učitana automatski (ali je možete onesposobiti)",
          title: "(onesposobite)"
        },
        purpose: "Svrha",
        purposes: "Svrhe",
        required: {
          description: "Ova aplikacija je uvek neophodna",
          title: "(neophodna)"
        }
      },
      close: "Zatvori",
      consentModal: {
        description: "Ovde možete videti i podesiti informacije koje prikupljamo o Vama.",
        privacyPolicy: {
          name: "politiku privatnosti",
          text: "Za više informacije pročitajte našu {privacyPolicy}."
        },
        title: "Informacije koje prikupljamo"
      },
      consentNotice: {
        changeDescription: "Došlo je do promena od Vaše poslednje posete, molimo Vas da ažurirate svoja odobrenja.",
        description: "Mi prikupljamo i procesiramo Vaše lične podatke radi sledećeg: {purposes}.",
        imprint: {
          name: "",
          name_en: "imprint"
        },
        learnMore: "Saznajte više",
        privacyPolicy: {
          name: "politiku privatnosti"
        }
      },
      decline: "Odbij",
      ok: "U redu",
      poweredBy: "Pokreće Klaro!",
      purposeItem: {
        service: "",
        services: ""
      },
      save: "Sačuvaj"
    };
  }, function (e, t) {
    e.exports = {
      consentModal: {
        title: "Информације које прикупљамо",
        description: "Овде можете видет и подесити информације које прикупљамо о Вама.\n",
        privacyPolicy: {
          name: "политику приватности",
          text: "За више информација прочитајте нашу {privacyPolicy}.\n"
        }
      },
      consentNotice: {
        changeDescription: "Дошло је до промена од Ваше последнје посете, молимо Вас да ажурирате своја одобрења.",
        description: "Ми прикупљамо и процесирамо Ваше личне податке ради следећег: {purposes}.\n",
        learnMore: "Сазнајте више",
        privacyPolicy: {
          name: "политику приватности"
        }
      },
      ok: "У реду",
      save: "Сачувај",
      decline: "Одбиј",
      close: "Затвори",
      service: {
        disableAll: {
          title: "Измени све",
          description: "Користите овај прекидач да омогућите/онеспособите све апликације одједном."
        },
        optOut: {
          title: "(онеспособите)",
          description: "Ова апликација је учитана аутоматски (али је можете онеспособити)"
        },
        required: {
          title: "(неопходна)",
          description: "Ова апликација је увек неопходна."
        },
        purposes: "Сврхе",
        purpose: "Сврха"
      },
      poweredBy: "Покреће Кларо!"
    };
  }, function (e, t) {
    e.exports = {
      acceptAll: "Acceptera alla",
      acceptSelected: "Acceptera markerat",
      service: {
        disableAll: {
          description: "Använd detta reglage för att aktivera/avaktivera samtliga appar.",
          title: "Ändra för alla appar"
        },
        optOut: {
          description: "Den här appen laddas som standardinställning (men du kan avaktivera den)",
          title: "(Avaktivera)"
        },
        purpose: "Syfte",
        purposes: "Syften",
        required: {
          description: "Den här applikationen krävs alltid",
          title: "(Krävs alltid)"
        }
      },
      close: "Stäng",
      consentModal: {
        description: "Här kan du se och anpassa vilken information vi samlar om dig.",
        privacyPolicy: {
          name: "Integritetspolicy",
          text: "För att veta mer, läs vår {privacyPolicy}."
        },
        title: "Information som vi samlar"
      },
      consentNotice: {
        changeDescription: "Det har skett förändringar sedan ditt senaste besök, var god uppdatera ditt medgivande.",
        description: "Vi samlar och bearbetar din personliga data i följande syften: {purposes}.",
        imprint: {
          name: "",
          name_en: "imprint"
        },
        learnMore: "Läs mer",
        privacyPolicy: {
          name: "Integritetspolicy"
        }
      },
      decline: "Avböj",
      ok: "OK",
      poweredBy: "Körs på Klaro!",
      purposeItem: {
        service: "",
        services: ""
      },
      save: "Spara"
    };
  }, function (e, t) {
    e.exports = {
      acceptAll: "",
      acceptAll_en: "Accept all",
      acceptSelected: "",
      acceptSelected_en: "Accept selected",
      service: {
        disableAll: {
          description: "Toplu açma/kapama için bu düğmeyi kullanabilirsin.",
          title: "Tüm uygulamaları aç/kapat"
        },
        optOut: {
          description: "Bu uygulama varsayılanda yüklendi (ancak iptal edebilirsin)",
          title: "(isteğe bağlı)"
        },
        purpose: "Amaç",
        purposes: "Amaçlar",
        required: {
          description: "Bu uygulama her zaman gerekli",
          title: "(her zaman gerekli)"
        }
      },
      close: "Kapat",
      consentModal: {
        description: "Hakkınızda topladığımız bilgileri burada görebilir ve özelleştirebilirsiniz.",
        privacyPolicy: {
          name: "Gizlilik Politikası",
          text: "Daha fazlası için lütfen {privacyPolicy} sayfamızı okuyun."
        },
        title: "Sakladığımız bilgiler"
      },
      consentNotice: {
        changeDescription: "Son ziyaretinizden bu yana değişiklikler oldu, lütfen seçiminizi güncelleyin.",
        description: "Kişisel bilgilerinizi aşağıdaki amaçlarla saklıyor ve işliyoruz: {purposes}.",
        imprint: {
          name: "",
          name_en: "imprint"
        },
        learnMore: "Daha fazla bilgi",
        privacyPolicy: {
          name: "Gizlilik Politikası"
        }
      },
      decline: "Reddet",
      ok: "Tamam",
      poweredBy: "Klaro tarafından geliştirildi!",
      purposeItem: {
        service: "",
        services: ""
      },
      save: "Kaydet"
    };
  }, function (e, t) {
    e.exports = {
      acceptAll: "Zaakceptować wszystkie",
      acceptSelected: "Zaakceptować wybrany",
      close: "Blisko",
      consentModal: {
        description: "Tutaj mogą Państwo ocenić i dostosować usługi, z których chcielibyśmy skorzystać na tej stronie. Jesteście Państwo odpowiedzialni! Mogą Państwo włączać lub wyłączać usługi według własnego uznania.",
        privacyPolicy: {
          name: "polityka prywatności",
          text: "Aby dowiedzieć się więcej, prosimy o zapoznanie się z naszą {privacyPolicy}."
        },
        title: "Usługi, z których chcielibyśmy skorzystać"
      },
      consentNotice: {
        changeDescription: "Od czasu ostatniej wizyty nastąpiły zmiany, prosimy o odnowienie zgody.",
        description: "Witam! Czy możemy włączyć dodatkowe usługi dla {purposes}? W każdej chwili mogą Państwo później zmienić lub wycofać swoją zgodę.",
        imprint: {
          name: "odcisk"
        },
        learnMore: "Pozwól mi wybrać",
        privacyPolicy: {
          name: "polityka prywatności"
        },
        testing: "Tryb testowy!"
      },
      contextualConsent: {
        acceptAlways: "Zawsze",
        acceptOnce: "Tak",
        description: "Czy chcą Państwo załadować treści zewnętrzne dostarczane przez {title}?"
      },
      decline: "Odmawiam",
      ok: "To jest ok.",
      poweredBy: "Zrealizowane z Klaro!",
      privacyPolicy: {
        name: "polityka prywatności",
        text: "Aby dowiedzieć się więcej, prosimy o zapoznanie się z naszą {privacyPolicy}."
      },
      purposeItem: {
        service: "usługa",
        services: "usług"
      },
      purposes: {
        advertising: {
          description: "Usługi te przetwarzają dane osobowe w celu pokazania Państwu spersonalizowanych lub opartych na zainteresowaniach ogłoszeń.",
          title: "Reklama"
        },
        functional: {
          description: "Usługi te są niezbędne do prawidłowego funkcjonowania niniejszej strony internetowej. Nie mogą Państwo ich tutaj wyłączyć, ponieważ w przeciwnym razie usługa nie działałaby prawidłowo.\n",
          title: "Świadczenie usług"
        },
        marketing: {
          description: "Usługi te przetwarzają dane osobowe w celu pokazania Państwu istotnych treści dotyczących produktów, usług lub tematów, którymi mogą być Państwo zainteresowani.",
          title: "Marketing"
        },
        performance: {
          description: "Usługi te przetwarzają dane osobowe w celu optymalizacji usług oferowanych przez tę stronę.\n",
          title: "Optymalizacja wydajności"
        }
      },
      save: "Z wyjątkiem",
      service: {
        disableAll: {
          description: "Za pomocą tego przełącznika można włączać lub wyłączać wszystkie usługi.",
          title: "Włączać lub wyłączać wszystkie usługi"
        },
        optOut: {
          description: "Ta usługa jest domyślnie załadowana (ale mogą Państwo z niej zrezygnować)",
          title: "(opt-out)"
        },
        purpose: "Cel",
        purposes: "Cele",
        required: {
          description: "Usługi te są zawsze wymagane",
          title: "(zawsze wymagane)"
        }
      }
    };
  }, function (e, t) {
    e.exports = {
      acceptAll: "Принять всё",
      acceptSelected: "Принять выбранные",
      service: {
        disableAll: {
          description: "Используйте этот переключатель, чтобы включить/отключить все приложения.",
          title: "Переключить все приложения"
        },
        optOut: {
          description: "Это приложение включено по умолчанию (но вы можете отказаться)",
          title: "(отказаться)"
        },
        purpose: "Намерение",
        purposes: "Намерения",
        required: {
          description: "Это обязательное приложение",
          title: "(всегда обязательный)"
        }
      },
      close: "Закрыть",
      consentModal: {
        description: "Здесь вы можете просмотреть и настроить, какую информацию о вас мы храним.",
        privacyPolicy: {
          name: "Соглашение",
          text: "Чтобы узнать больше, пожалуйста, прочитайте наше {privacyPolicy}."
        },
        title: "Информация, которую мы сохраняем"
      },
      consentNotice: {
        changeDescription: "Со времени вашего последнего визита произошли изменения, обновите своё согласие.",
        description: "Мы собираем и обрабатываем вашу личную информацию для следующих целей: {purposes}.",
        imprint: {
          name: "",
          name_en: "imprint"
        },
        learnMore: "Настроить",
        privacyPolicy: {
          name: "политика конфиденциальности"
        }
      },
      decline: "Отклонить",
      ok: "Принять",
      poweredBy: "Работает на Кларо!",
      purposeItem: {
        service: "",
        services: ""
      },
      save: "Сохранить"
    };
  }, function (e, t) {
    var n;

    n = function () {
      return this;
    }();

    try {
      n = n || new Function("return this")();
    } catch (e) {
      "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (n = window);
    }

    e.exports = n;
  }, function (e, t, n) {
    var r = n(2),
        i = n(67),
        o = r.WeakMap;
    e.exports = "function" == typeof o && /native code/.test(i(o));
  }, function (e, t, n) {
    var r = n(8),
        i = n(16),
        o = n(9),
        a = n(45);
    e.exports = r ? Object.defineProperties : function (e, t) {
      o(e);

      for (var n, r = a(t), c = r.length, s = 0; c > s;) {
        i.f(e, n = r[s++], t[n]);
      }

      return e;
    };
  }, function (e, t, n) {
    var r = n(18),
        i = n(56).f,
        o = {}.toString,
        a = "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

    e.exports.f = function (e) {
      return a && "[object Window]" == o.call(e) ? function (e) {
        try {
          return i(e);
        } catch (e) {
          return a.slice();
        }
      }(e) : i(r(e));
    };
  }, function (e, t, n) {
    "use strict";

    var r = n(0),
        i = n(47).find,
        o = n(75),
        a = n(36),
        c = !0,
        s = a("find");
    "find" in [] && Array(1).find(function () {
      c = !1;
    }), r({
      target: "Array",
      proto: !0,
      forced: c || !s
    }, {
      find: function find(e) {
        return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
      }
    }), o("find");
  }, function (e, t, n) {
    "use strict";

    var r = n(48),
        i = n(23),
        o = n(112),
        a = n(113),
        c = n(19),
        s = n(60),
        l = n(114);

    e.exports = function (e) {
      var t,
          n,
          u,
          p,
          f,
          d,
          v = i(e),
          y = "function" == typeof this ? this : Array,
          m = arguments.length,
          h = m > 1 ? arguments[1] : void 0,
          g = void 0 !== h,
          b = l(v),
          _ = 0;
      if (g && (h = r(h, m > 2 ? arguments[2] : void 0, 2)), null == b || y == Array && a(b)) for (n = new y(t = c(v.length)); t > _; _++) {
        d = g ? h(v[_], _) : v[_], s(n, _, d);
      } else for (f = (p = b.call(v)).next, n = new y(); !(u = f.call(p)).done; _++) {
        d = g ? o(p, h, [u.value, _], !0) : u.value, s(n, _, d);
      }
      return n.length = _, n;
    };
  }, function (e, t, n) {
    "use strict";

    var r = n(116).IteratorPrototype,
        i = n(44),
        o = n(42),
        a = n(46),
        c = n(49),
        s = function s() {
      return this;
    };

    e.exports = function (e, t, n) {
      var l = t + " Iterator";
      return e.prototype = i(r, {
        next: o(1, n)
      }), a(e, l, !1, !0), c[l] = s, e;
    };
  }, function (e, t, n) {
    var r = n(4);

    e.exports = function (e) {
      if (!r(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype");
      return e;
    };
  }, function (e, t, n) {
    var r = n(1);
    e.exports = !r(function () {
      return Object.isExtensible(Object.preventExtensions({}));
    });
  }, function (e, t, n) {
    "use strict";

    var r = n(77),
        i = n(115);
    e.exports = r ? {}.toString : function () {
      return "[object " + i(this) + "]";
    };
  }, function (e, t, n) {
    "use strict";

    var r = n(35),
        i = n(4),
        o = [].slice,
        a = {},
        c = function c(e, t, n) {
      if (!(t in a)) {
        for (var r = [], i = 0; i < t; i++) {
          r[i] = "a[" + i + "]";
        }

        a[t] = Function("C,a", "return new C(" + r.join(",") + ")");
      }

      return a[t](e, n);
    };

    e.exports = Function.bind || function (e) {
      var t = r(this),
          n = o.call(arguments, 1),
          a = function a() {
        var r = n.concat(o.call(arguments));
        return this instanceof a ? c(t, r.length, r) : t.apply(e, r);
      };

      return i(t.prototype) && (a.prototype = t.prototype), a;
    };
  }, function (e, t, n) {
    var r = n(0),
        i = n(2),
        o = n(74),
        a = [].slice,
        c = function c(e) {
      return function (t, n) {
        var r = arguments.length > 2,
            i = r ? a.call(arguments, 2) : void 0;
        return e(r ? function () {
          ("function" == typeof t ? t : Function(t)).apply(this, i);
        } : t, n);
      };
    };

    r({
      global: !0,
      bind: !0,
      forced: /MSIE .\./.test(o)
    }, {
      setTimeout: c(i.setTimeout),
      setInterval: c(i.setInterval)
    });
  }, function (e, t, n) {
    "use strict";

    var r = n(172);

    function i() {}

    function o() {}

    o.resetWarningCache = i, e.exports = function () {
      function e(e, t, n, i, o, a) {
        if (a !== r) {
          var c = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw c.name = "Invariant Violation", c;
        }
      }

      function t() {
        return e;
      }

      e.isRequired = e;
      var n = {
        array: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        elementType: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes: o,
        resetWarningCache: i
      };
      return n.PropTypes = n, n;
    };
  }, function (e, t, n) {
    "use strict";

    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  }, function (e, t, n) {
    "use strict";

    var r = n(8),
        i = n(1),
        o = n(45),
        a = n(71),
        c = n(51),
        s = n(23),
        l = n(52),
        u = Object.assign,
        p = Object.defineProperty;
    e.exports = !u || i(function () {
      if (r && 1 !== u({
        b: 1
      }, u(p({}, "a", {
        enumerable: !0,
        get: function get() {
          p(this, "b", {
            value: 3,
            enumerable: !1
          });
        }
      }), {
        b: 2
      })).b) return !0;
      var e = {},
          t = {},
          n = Symbol();
      return e[n] = 7, "abcdefghijklmnopqrst".split("").forEach(function (e) {
        t[e] = e;
      }), 7 != u({}, e)[n] || "abcdefghijklmnopqrst" != o(u({}, t)).join("");
    }) ? function (e, t) {
      for (var n = s(e), i = arguments.length, u = 1, p = a.f, f = c.f; i > u;) {
        for (var d, v = l(arguments[u++]), y = p ? o(v).concat(p(v)) : o(v), m = y.length, h = 0; m > h;) {
          d = y[h++], r && !f.call(v, d) || (n[d] = v[d]);
        }
      }

      return n;
    } : u;
  }, function (e, t, n) {
    "use strict";

    var r,
        i = n(0),
        o = n(27).f,
        a = n(19),
        c = n(95),
        s = n(26),
        l = n(96),
        u = n(33),
        p = "".endsWith,
        f = Math.min,
        d = l("endsWith");
    i({
      target: "String",
      proto: !0,
      forced: !!(u || d || (r = o(String.prototype, "endsWith"), !r || r.writable)) && !d
    }, {
      endsWith: function endsWith(e) {
        var t = String(s(this));
        c(e);
        var n = arguments.length > 1 ? arguments[1] : void 0,
            r = a(t.length),
            i = void 0 === n ? r : f(a(n), r),
            o = String(e);
        return p ? p.call(t, o, i) : t.slice(i - o.length, i) === o;
      }
    });
  }, function (e, t, n) {
    "use strict";

    var r = n(90),
        i = n(9),
        o = n(19),
        a = n(26),
        c = n(92),
        s = n(93);
    r("match", 1, function (e, t, n) {
      return [function (t) {
        var n = a(this),
            r = null == t ? void 0 : t[e];
        return void 0 !== r ? r.call(t, n) : new RegExp(t)[e](String(n));
      }, function (e) {
        var r = n(t, e, this);
        if (r.done) return r.value;
        var a = i(e),
            l = String(this);
        if (!a.global) return s(a, l);
        var u = a.unicode;
        a.lastIndex = 0;

        for (var p, f = [], d = 0; null !== (p = s(a, l));) {
          var v = String(p[0]);
          f[d] = v, "" === v && (a.lastIndex = c(l, o(a.lastIndex), u)), d++;
        }

        return 0 === d ? null : f;
      }];
    });
  }, function (e, t, n) {
    var r = n(8),
        i = n(45),
        o = n(18),
        a = n(51).f,
        c = function c(e) {
      return function (t) {
        for (var n, c = o(t), s = i(c), l = s.length, u = 0, p = []; l > u;) {
          n = s[u++], r && !a.call(c, n) || p.push(e ? [n, c[n]] : c[n]);
        }

        return p;
      };
    };

    e.exports = {
      entries: c(!0),
      values: c(!1)
    };
  }, function (e, t, n) {
    "use strict";

    var r = n(0),
        i = n(69).includes,
        o = n(75);
    r({
      target: "Array",
      proto: !0,
      forced: !n(36)("indexOf", {
        ACCESSORS: !0,
        1: 0
      })
    }, {
      includes: function includes(e) {
        return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
      }
    }), o("includes");
  }, function (e, t, n) {
    "use strict";

    var r = n(0),
        i = n(95),
        o = n(26);
    r({
      target: "String",
      proto: !0,
      forced: !n(96)("includes")
    }, {
      includes: function includes(e) {
        return !!~String(o(this)).indexOf(i(e), arguments.length > 1 ? arguments[1] : void 0);
      }
    });
  }, function (e, t, n) {
    "use strict";

    var r,
        i,
        o,
        a,
        c = n(0),
        s = n(33),
        l = n(2),
        u = n(34),
        p = n(180),
        f = n(22),
        d = n(122),
        v = n(46),
        y = n(85),
        m = n(4),
        h = n(35),
        g = n(84),
        b = n(28),
        _ = n(67),
        k = n(83),
        w = n(78),
        S = n(125),
        x = n(131).set,
        j = n(181),
        O = n(182),
        A = n(183),
        P = n(133),
        z = n(184),
        E = n(32),
        C = n(58),
        D = n(3),
        T = n(73),
        I = D("species"),
        R = "Promise",
        N = E.get,
        M = E.set,
        q = E.getterFor(R),
        _U = p,
        L = l.TypeError,
        F = l.document,
        H = l.process,
        W = u("fetch"),
        B = P.f,
        K = B,
        V = "process" == b(H),
        $ = !!(F && F.createEvent && l.dispatchEvent),
        G = C(R, function () {
      if (!(_(_U) !== String(_U))) {
        if (66 === T) return !0;
        if (!V && "function" != typeof PromiseRejectionEvent) return !0;
      }

      if (s && !_U.prototype["finally"]) return !0;
      if (T >= 51 && /native code/.test(_U)) return !1;

      var e = _U.resolve(1),
          t = function t(e) {
        e(function () {}, function () {});
      };

      return (e.constructor = {})[I] = t, !(e.then(function () {}) instanceof t);
    }),
        Z = G || !w(function (e) {
      _U.all(e)["catch"](function () {});
    }),
        Q = function Q(e) {
      var t;
      return !(!m(e) || "function" != typeof (t = e.then)) && t;
    },
        J = function J(e, t, n) {
      if (!t.notified) {
        t.notified = !0;
        var r = t.reactions;
        j(function () {
          for (var i = t.value, o = 1 == t.state, a = 0; r.length > a;) {
            var c,
                s,
                l,
                u = r[a++],
                p = o ? u.ok : u.fail,
                f = u.resolve,
                d = u.reject,
                v = u.domain;

            try {
              p ? (o || (2 === t.rejection && te(e, t), t.rejection = 1), !0 === p ? c = i : (v && v.enter(), c = p(i), v && (v.exit(), l = !0)), c === u.promise ? d(L("Promise-chain cycle")) : (s = Q(c)) ? s.call(c, f, d) : f(c)) : d(i);
            } catch (e) {
              v && !l && v.exit(), d(e);
            }
          }

          t.reactions = [], t.notified = !1, n && !t.rejection && X(e, t);
        });
      }
    },
        Y = function Y(e, t, n) {
      var r, i;
      $ ? ((r = F.createEvent("Event")).promise = t, r.reason = n, r.initEvent(e, !1, !0), l.dispatchEvent(r)) : r = {
        promise: t,
        reason: n
      }, (i = l["on" + e]) ? i(r) : "unhandledrejection" === e && A("Unhandled promise rejection", n);
    },
        X = function X(e, t) {
      x.call(l, function () {
        var n,
            r = t.value;
        if (ee(t) && (n = z(function () {
          V ? H.emit("unhandledRejection", r, e) : Y("unhandledrejection", e, r);
        }), t.rejection = V || ee(t) ? 2 : 1, n.error)) throw n.value;
      });
    },
        ee = function ee(e) {
      return 1 !== e.rejection && !e.parent;
    },
        te = function te(e, t) {
      x.call(l, function () {
        V ? H.emit("rejectionHandled", e) : Y("rejectionhandled", e, t.value);
      });
    },
        ne = function ne(e, t, n, r) {
      return function (i) {
        e(t, n, i, r);
      };
    },
        re = function re(e, t, n, r) {
      t.done || (t.done = !0, r && (t = r), t.value = n, t.state = 2, J(e, t, !0));
    },
        ie = function ie(e, t, n, r) {
      if (!t.done) {
        t.done = !0, r && (t = r);

        try {
          if (e === n) throw L("Promise can't be resolved itself");
          var i = Q(n);
          i ? j(function () {
            var r = {
              done: !1
            };

            try {
              i.call(n, ne(ie, e, r, t), ne(re, e, r, t));
            } catch (n) {
              re(e, r, n, t);
            }
          }) : (t.value = n, t.state = 1, J(e, t, !1));
        } catch (n) {
          re(e, {
            done: !1
          }, n, t);
        }
      }
    };

    G && (_U = function U(e) {
      g(this, _U, R), h(e), r.call(this);
      var t = N(this);

      try {
        e(ne(ie, this, t), ne(re, this, t));
      } catch (e) {
        re(this, t, e);
      }
    }, (r = function r(e) {
      M(this, {
        type: R,
        done: !1,
        notified: !1,
        parent: !1,
        reactions: [],
        rejection: !1,
        state: 0,
        value: void 0
      });
    }).prototype = d(_U.prototype, {
      then: function then(e, t) {
        var n = q(this),
            r = B(S(this, _U));
        return r.ok = "function" != typeof e || e, r.fail = "function" == typeof t && t, r.domain = V ? H.domain : void 0, n.parent = !0, n.reactions.push(r), 0 != n.state && J(this, n, !1), r.promise;
      },
      "catch": function _catch(e) {
        return this.then(void 0, e);
      }
    }), i = function i() {
      var e = new r(),
          t = N(e);
      this.promise = e, this.resolve = ne(ie, e, t), this.reject = ne(re, e, t);
    }, P.f = B = function B(e) {
      return e === _U || e === o ? new i(e) : K(e);
    }, s || "function" != typeof p || (a = p.prototype.then, f(p.prototype, "then", function (e, t) {
      var n = this;
      return new _U(function (e, t) {
        a.call(n, e, t);
      }).then(e, t);
    }, {
      unsafe: !0
    }), "function" == typeof W && c({
      global: !0,
      enumerable: !0,
      forced: !0
    }, {
      fetch: function fetch(e) {
        return O(_U, W.apply(l, arguments));
      }
    }))), c({
      global: !0,
      wrap: !0,
      forced: G
    }, {
      Promise: _U
    }), v(_U, R, !1, !0), y(R), o = u(R), c({
      target: R,
      stat: !0,
      forced: G
    }, {
      reject: function reject(e) {
        var t = B(this);
        return t.reject.call(void 0, e), t.promise;
      }
    }), c({
      target: R,
      stat: !0,
      forced: s || G
    }, {
      resolve: function resolve(e) {
        return O(s && this === o ? _U : this, e);
      }
    }), c({
      target: R,
      stat: !0,
      forced: Z
    }, {
      all: function all(e) {
        var t = this,
            n = B(t),
            r = n.resolve,
            i = n.reject,
            o = z(function () {
          var n = h(t.resolve),
              o = [],
              a = 0,
              c = 1;
          k(e, function (e) {
            var s = a++,
                l = !1;
            o.push(void 0), c++, n.call(t, e).then(function (e) {
              l || (l = !0, o[s] = e, --c || r(o));
            }, i);
          }), --c || r(o);
        });
        return o.error && i(o.value), n.promise;
      },
      race: function race(e) {
        var t = this,
            n = B(t),
            r = n.reject,
            i = z(function () {
          var i = h(t.resolve);
          k(e, function (e) {
            i.call(t, e).then(n.resolve, r);
          });
        });
        return i.error && r(i.value), n.promise;
      }
    });
  }, function (e, t, n) {
    var r = n(2);
    e.exports = r.Promise;
  }, function (e, t, n) {
    var r,
        i,
        o,
        a,
        c,
        s,
        l,
        u,
        p = n(2),
        f = n(27).f,
        d = n(28),
        v = n(131).set,
        y = n(132),
        m = p.MutationObserver || p.WebKitMutationObserver,
        h = p.process,
        g = p.Promise,
        b = "process" == d(h),
        _ = f(p, "queueMicrotask"),
        k = _ && _.value;

    k || (r = function r() {
      var e, t;

      for (b && (e = h.domain) && e.exit(); i;) {
        t = i.fn, i = i.next;

        try {
          t();
        } catch (e) {
          throw i ? a() : o = void 0, e;
        }
      }

      o = void 0, e && e.enter();
    }, b ? a = function a() {
      h.nextTick(r);
    } : m && !y ? (c = !0, s = document.createTextNode(""), new m(r).observe(s, {
      characterData: !0
    }), a = function a() {
      s.data = c = !c;
    }) : g && g.resolve ? (l = g.resolve(void 0), u = l.then, a = function a() {
      u.call(l, r);
    }) : a = function a() {
      v.call(p, r);
    }), e.exports = k || function (e) {
      var t = {
        fn: e,
        next: void 0
      };
      o && (o.next = t), i || (i = t, a()), o = t;
    };
  }, function (e, t, n) {
    var r = n(9),
        i = n(4),
        o = n(133);

    e.exports = function (e, t) {
      if (r(e), i(t) && t.constructor === e) return t;
      var n = o.f(e);
      return (0, n.resolve)(t), n.promise;
    };
  }, function (e, t, n) {
    var r = n(2);

    e.exports = function (e, t) {
      var n = r.console;
      n && n.error && (1 === arguments.length ? n.error(e) : n.error(e, t));
    };
  }, function (e, t) {
    e.exports = function (e) {
      try {
        return {
          error: !1,
          value: e()
        };
      } catch (e) {
        return {
          error: !0,
          value: e
        };
      }
    };
  }, function (e, t, n) {}, function (e, t, n) {
    "use strict";

    n.r(t), n.d(t, "updateConfig", function () {
      return St;
    }), n.d(t, "getElementID", function () {
      return Qn;
    }), n.d(t, "getElement", function () {
      return Jn;
    }), n.d(t, "addEventListener", function () {
      return Yn;
    }), n.d(t, "getConfigTranslations", function () {
      return er;
    }), n.d(t, "render", function () {
      return nr;
    }), n.d(t, "renderContextualConsentNotices", function () {
      return rr;
    }), n.d(t, "validateConfig", function () {
      return or;
    }), n.d(t, "setup", function () {
      return ar;
    }), n.d(t, "show", function () {
      return cr;
    }), n.d(t, "resetManagers", function () {
      return lr;
    }), n.d(t, "getManager", function () {
      return ur;
    }), n.d(t, "version", function () {
      return pr;
    }), n.d(t, "language", function () {
      return Ae;
    }), n.d(t, "defaultConfig", function () {
      return qn;
    }), n.d(t, "defaultTranslations", function () {
      return $n;
    });
    n(5), n(10), n(11), n(40), n(41), n(163), n(76), n(24), n(6), n(25), n(20), n(17), n(82), n(86), n(87), n(37), n(7), n(38), n(12), n(13), n(89), n(94), n(14);
    var r,
        i,
        o,
        a,
        c,
        s = {},
        l = [],
        u = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

    function p(e, t) {
      for (var n in t) {
        e[n] = t[n];
      }

      return e;
    }

    function f(e) {
      var t = e.parentNode;
      t && t.removeChild(e);
    }

    function d(e, t, n) {
      var r,
          i = arguments,
          o = {};

      for (r in t) {
        "key" !== r && "ref" !== r && (o[r] = t[r]);
      }

      if (arguments.length > 3) for (n = [n], r = 3; r < arguments.length; r++) {
        n.push(i[r]);
      }
      if (null != n && (o.children = n), "function" == typeof e && null != e.defaultProps) for (r in e.defaultProps) {
        void 0 === o[r] && (o[r] = e.defaultProps[r]);
      }
      return v(e, o, t && t.key, t && t.ref, null);
    }

    function v(e, t, n, i, o) {
      var a = {
        type: e,
        props: t,
        key: n,
        ref: i,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        constructor: void 0,
        __v: o
      };
      return null == o && (a.__v = a), r.vnode && r.vnode(a), a;
    }

    function y(e) {
      return e.children;
    }

    function m(e, t) {
      this.props = e, this.context = t;
    }

    function h(e, t) {
      if (null == t) return e.__ ? h(e.__, e.__.__k.indexOf(e) + 1) : null;

      for (var n; t < e.__k.length; t++) {
        if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
      }

      return "function" == typeof e.type ? h(e) : null;
    }

    function g(e) {
      var t, n;

      if (null != (e = e.__) && null != e.__c) {
        for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++) {
          if (null != (n = e.__k[t]) && null != n.__e) {
            e.__e = e.__c.base = n.__e;
            break;
          }
        }

        return g(e);
      }
    }

    function b(e) {
      (!e.__d && (e.__d = !0) && i.push(e) && !_.__r++ || a !== r.debounceRendering) && ((a = r.debounceRendering) || o)(_);
    }

    function _() {
      for (var e; _.__r = i.length;) {
        e = i.sort(function (e, t) {
          return e.__v.__b - t.__v.__b;
        }), i = [], e.some(function (e) {
          var t, n, r, i, o, a, c;
          e.__d && (a = (o = (t = e).__v).__e, (c = t.__P) && (n = [], (r = p({}, o)).__v = r, i = P(c, o, r, t.__n, void 0 !== c.ownerSVGElement, null, n, null == a ? h(o) : a), z(n, o), i != a && g(o)));
        });
      }
    }

    function k(e, t, n, r, i, o, a, c, u, p) {
      var d,
          m,
          g,
          b,
          _,
          k,
          w,
          x = r && r.__k || l,
          j = x.length;

      for (u == s && (u = null != a ? a[0] : j ? h(r, 0) : null), n.__k = [], d = 0; d < t.length; d++) {
        if (null != (b = n.__k[d] = null == (b = t[d]) || "boolean" == typeof b ? null : "string" == typeof b || "number" == typeof b ? v(null, b, null, null, b) : Array.isArray(b) ? v(y, {
          children: b
        }, null, null, null) : null != b.__e || null != b.__c ? v(b.type, b.props, b.key, null, b.__v) : b)) {
          if (b.__ = n, b.__b = n.__b + 1, null === (g = x[d]) || g && b.key == g.key && b.type === g.type) x[d] = void 0;else for (m = 0; m < j; m++) {
            if ((g = x[m]) && b.key == g.key && b.type === g.type) {
              x[m] = void 0;
              break;
            }

            g = null;
          }
          _ = P(e, b, g = g || s, i, o, a, c, u, p), (m = b.ref) && g.ref != m && (w || (w = []), g.ref && w.push(g.ref, null, b), w.push(m, b.__c || _, b)), null != _ ? (null == k && (k = _), u = S(e, b, g, x, a, _, u), p || "option" != n.type ? "function" == typeof n.type && (n.__d = u) : e.value = "") : u && g.__e == u && u.parentNode != e && (u = h(g));
        }
      }

      if (n.__e = k, null != a && "function" != typeof n.type) for (d = a.length; d--;) {
        null != a[d] && f(a[d]);
      }

      for (d = j; d--;) {
        null != x[d] && D(x[d], x[d]);
      }

      if (w) for (d = 0; d < w.length; d++) {
        C(w[d], w[++d], w[++d]);
      }
    }

    function w(e) {
      return null == e || "boolean" == typeof e ? [] : Array.isArray(e) ? l.concat.apply([], e.map(w)) : [e];
    }

    function S(e, t, n, r, i, o, a) {
      var c, s, l;
      if (void 0 !== t.__d) c = t.__d, t.__d = void 0;else if (i == n || o != a || null == o.parentNode) e: if (null == a || a.parentNode !== e) e.appendChild(o), c = null;else {
        for (s = a, l = 0; (s = s.nextSibling) && l < r.length; l += 2) {
          if (s == o) break e;
        }

        e.insertBefore(o, a), c = a;
      }
      return void 0 !== c ? c : o.nextSibling;
    }

    function x(e, t, n) {
      "-" === t[0] ? e.setProperty(t, n) : e[t] = "number" == typeof n && !1 === u.test(t) ? n + "px" : null == n ? "" : n;
    }

    function j(e, t, n, r, i) {
      var o, a, c, s, l;
      if (i ? "className" === t && (t = "class") : "class" === t && (t = "className"), "style" === t) {
        if (o = e.style, "string" == typeof n) o.cssText = n;else {
          if ("string" == typeof r && (o.cssText = "", r = null), r) for (s in r) {
            n && s in n || x(o, s, "");
          }
          if (n) for (l in n) {
            r && n[l] === r[l] || x(o, l, n[l]);
          }
        }
      } else "o" === t[0] && "n" === t[1] ? (a = t !== (t = t.replace(/Capture$/, "")), c = t.toLowerCase(), t = (c in e ? c : t).slice(2), n ? (r || e.addEventListener(t, O, a), (e.l || (e.l = {}))[t] = n) : e.removeEventListener(t, O, a)) : "list" !== t && "tagName" !== t && "form" !== t && "type" !== t && "size" !== t && "download" !== t && !i && t in e ? e[t] = null == n ? "" : n : "function" != typeof n && "dangerouslySetInnerHTML" !== t && (t !== (t = t.replace(/^xlink:?/, "")) ? null == n || !1 === n ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), n) : null == n || !1 === n && !/^ar/.test(t) ? e.removeAttribute(t) : e.setAttribute(t, n));
    }

    function O(e) {
      this.l[e.type](r.event ? r.event(e) : e);
    }

    function A(e, t, n) {
      var r, i;

      for (r = 0; r < e.__k.length; r++) {
        (i = e.__k[r]) && (i.__ = e, i.__e && ("function" == typeof i.type && i.__k.length > 1 && A(i, t, n), t = S(n, i, i, e.__k, null, i.__e, t), "function" == typeof e.type && (e.__d = t)));
      }
    }

    function P(e, t, n, i, o, a, c, s, l) {
      var u,
          f,
          d,
          v,
          h,
          g,
          b,
          _,
          w,
          S,
          x,
          j = t.type;

      if (void 0 !== t.constructor) return null;
      (u = r.__b) && u(t);

      try {
        e: if ("function" == typeof j) {
          if (_ = t.props, w = (u = j.contextType) && i[u.__c], S = u ? w ? w.props.value : u.__ : i, n.__c ? b = (f = t.__c = n.__c).__ = f.__E : ("prototype" in j && j.prototype.render ? t.__c = f = new j(_, S) : (t.__c = f = new m(_, S), f.constructor = j, f.render = T), w && w.sub(f), f.props = _, f.state || (f.state = {}), f.context = S, f.__n = i, d = f.__d = !0, f.__h = []), null == f.__s && (f.__s = f.state), null != j.getDerivedStateFromProps && (f.__s == f.state && (f.__s = p({}, f.__s)), p(f.__s, j.getDerivedStateFromProps(_, f.__s))), v = f.props, h = f.state, d) null == j.getDerivedStateFromProps && null != f.componentWillMount && f.componentWillMount(), null != f.componentDidMount && f.__h.push(f.componentDidMount);else {
            if (null == j.getDerivedStateFromProps && _ !== v && null != f.componentWillReceiveProps && f.componentWillReceiveProps(_, S), !f.__e && null != f.shouldComponentUpdate && !1 === f.shouldComponentUpdate(_, f.__s, S) || t.__v === n.__v) {
              f.props = _, f.state = f.__s, t.__v !== n.__v && (f.__d = !1), f.__v = t, t.__e = n.__e, t.__k = n.__k, f.__h.length && c.push(f), A(t, s, e);
              break e;
            }

            null != f.componentWillUpdate && f.componentWillUpdate(_, f.__s, S), null != f.componentDidUpdate && f.__h.push(function () {
              f.componentDidUpdate(v, h, g);
            });
          }
          f.context = S, f.props = _, f.state = f.__s, (u = r.__r) && u(t), f.__d = !1, f.__v = t, f.__P = e, u = f.render(f.props, f.state, f.context), f.state = f.__s, null != f.getChildContext && (i = p(p({}, i), f.getChildContext())), d || null == f.getSnapshotBeforeUpdate || (g = f.getSnapshotBeforeUpdate(v, h)), x = null != u && u.type == y && null == u.key ? u.props.children : u, k(e, Array.isArray(x) ? x : [x], t, n, i, o, a, c, s, l), f.base = t.__e, f.__h.length && c.push(f), b && (f.__E = f.__ = null), f.__e = !1;
        } else null == a && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = E(n.__e, t, n, i, o, a, c, l);

        (u = r.diffed) && u(t);
      } catch (e) {
        t.__v = null, r.__e(e, t, n);
      }

      return t.__e;
    }

    function z(e, t) {
      r.__c && r.__c(t, e), e.some(function (t) {
        try {
          e = t.__h, t.__h = [], e.some(function (e) {
            e.call(t);
          });
        } catch (e) {
          r.__e(e, t.__v);
        }
      });
    }

    function E(e, t, n, r, i, o, a, c) {
      var u,
          p,
          f,
          d,
          v,
          y = n.props,
          m = t.props;
      if (i = "svg" === t.type || i, null != o) for (u = 0; u < o.length; u++) {
        if (null != (p = o[u]) && ((null === t.type ? 3 === p.nodeType : p.localName === t.type) || e == p)) {
          e = p, o[u] = null;
          break;
        }
      }

      if (null == e) {
        if (null === t.type) return document.createTextNode(m);
        e = i ? document.createElementNS("http://www.w3.org/2000/svg", t.type) : document.createElement(t.type, m.is && {
          is: m.is
        }), o = null, c = !1;
      }

      if (null === t.type) y !== m && e.data !== m && (e.data = m);else {
        if (null != o && (o = l.slice.call(e.childNodes)), f = (y = n.props || s).dangerouslySetInnerHTML, d = m.dangerouslySetInnerHTML, !c) {
          if (null != o) for (y = {}, v = 0; v < e.attributes.length; v++) {
            y[e.attributes[v].name] = e.attributes[v].value;
          }
          (d || f) && (d && f && d.__html == f.__html || (e.innerHTML = d && d.__html || ""));
        }

        (function (e, t, n, r, i) {
          var o;

          for (o in n) {
            "children" === o || "key" === o || o in t || j(e, o, null, n[o], r);
          }

          for (o in t) {
            i && "function" != typeof t[o] || "children" === o || "key" === o || "value" === o || "checked" === o || n[o] === t[o] || j(e, o, t[o], n[o], r);
          }
        })(e, m, y, i, c), d ? t.__k = [] : (u = t.props.children, k(e, Array.isArray(u) ? u : [u], t, n, r, "foreignObject" !== t.type && i, o, a, s, c)), c || ("value" in m && void 0 !== (u = m.value) && u !== e.value && j(e, "value", u, y.value, !1), "checked" in m && void 0 !== (u = m.checked) && u !== e.checked && j(e, "checked", u, y.checked, !1));
      }
      return e;
    }

    function C(e, t, n) {
      try {
        "function" == typeof e ? e(t) : e.current = t;
      } catch (e) {
        r.__e(e, n);
      }
    }

    function D(e, t, n) {
      var i, o, a;

      if (r.unmount && r.unmount(e), (i = e.ref) && (i.current && i.current !== e.__e || C(i, null, t)), n || "function" == typeof e.type || (n = null != (o = e.__e)), e.__e = e.__d = void 0, null != (i = e.__c)) {
        if (i.componentWillUnmount) try {
          i.componentWillUnmount();
        } catch (e) {
          r.__e(e, t);
        }
        i.base = i.__P = null;
      }

      if (i = e.__k) for (a = 0; a < i.length; a++) {
        i[a] && D(i[a], t, n);
      }
      null != o && f(o);
    }

    function T(e, t, n) {
      return this.constructor(e, n);
    }

    function I(e, t, n) {
      var i, o, a;
      r.__ && r.__(e, t), o = (i = n === c) ? null : n && n.__k || t.__k, e = d(y, null, [e]), a = [], P(t, (i ? t : n || t).__k = e, o || s, s, void 0 !== t.ownerSVGElement, n && !i ? [n] : o ? null : t.childNodes.length ? l.slice.call(t.childNodes) : null, a, n || s, i), z(a, e);
    }

    r = {
      __e: function __e(e, t) {
        for (var n, r; t = t.__;) {
          if ((n = t.__c) && !n.__) try {
            if (n.constructor && null != n.constructor.getDerivedStateFromError && (r = !0, n.setState(n.constructor.getDerivedStateFromError(e))), null != n.componentDidCatch && (r = !0, n.componentDidCatch(e)), r) return b(n.__E = n);
          } catch (t) {
            e = t;
          }
        }

        throw e;
      }
    }, m.prototype.setState = function (e, t) {
      var n;
      n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = p({}, this.state), "function" == typeof e && (e = e(n, this.props)), e && p(n, e), null != e && this.__v && (t && this.__h.push(t), b(this));
    }, m.prototype.forceUpdate = function (e) {
      this.__v && (this.__e = !0, e && this.__h.push(e), b(this));
    }, m.prototype.render = y, i = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, _.__r = 0, c = s;
    var R,
        N,
        M,
        q = 0,
        U = [],
        L = r.__r,
        F = r.diffed,
        H = r.__c,
        W = r.unmount;

    function B(e, t) {
      r.__h && r.__h(N, e, q || t), q = 0;
      var n = N.__H || (N.__H = {
        __: [],
        __h: []
      });
      return e >= n.__.length && n.__.push({}), n.__[e];
    }

    function K(e) {
      return q = 1, V(X, e);
    }

    function V(e, t, n) {
      var r = B(R++, 2);
      return r.t = e, r.__c || (r.__c = N, r.__ = [n ? n(t) : X(void 0, t), function (e) {
        var t = r.t(r.__[0], e);
        r.__[0] !== t && (r.__ = [t, r.__[1]], r.__c.setState({}));
      }]), r.__;
    }

    function $(e, t) {
      var n = B(R++, 3);
      !r.__s && Y(n.__H, t) && (n.__ = e, n.__H = t, N.__H.__h.push(n));
    }

    function G() {
      U.some(function (e) {
        if (e.__P) try {
          e.__H.__h.forEach(Q), e.__H.__h.forEach(J), e.__H.__h = [];
        } catch (t) {
          return e.__H.__h = [], r.__e(t, e.__v), !0;
        }
      }), U = [];
    }

    r.__r = function (e) {
      L && L(e), R = 0;
      var t = (N = e.__c).__H;
      t && (t.__h.forEach(Q), t.__h.forEach(J), t.__h = []);
    }, r.diffed = function (e) {
      F && F(e);
      var t = e.__c;
      t && t.__H && t.__H.__h.length && (1 !== U.push(t) && M === r.requestAnimationFrame || ((M = r.requestAnimationFrame) || function (e) {
        var t,
            n = function n() {
          clearTimeout(r), Z && cancelAnimationFrame(t), setTimeout(e);
        },
            r = setTimeout(n, 100);

        Z && (t = requestAnimationFrame(n));
      })(G));
    }, r.__c = function (e, t) {
      t.some(function (e) {
        try {
          e.__h.forEach(Q), e.__h = e.__h.filter(function (e) {
            return !e.__ || J(e);
          });
        } catch (n) {
          t.some(function (e) {
            e.__h && (e.__h = []);
          }), t = [], r.__e(n, e.__v);
        }
      }), H && H(e, t);
    }, r.unmount = function (e) {
      W && W(e);
      var t = e.__c;
      if (t && t.__H) try {
        t.__H.__.forEach(Q);
      } catch (e) {
        r.__e(e, t.__v);
      }
    };
    var Z = "function" == typeof requestAnimationFrame;

    function Q(e) {
      "function" == typeof e.u && e.u();
    }

    function J(e) {
      e.u = e.__();
    }

    function Y(e, t) {
      return !e || t.some(function (t, n) {
        return t !== e[n];
      });
    }

    function X(e, t) {
      return "function" == typeof t ? t(e) : t;
    }

    function ee(e, t) {
      for (var n in t) {
        e[n] = t[n];
      }

      return e;
    }

    function te(e, t) {
      for (var n in e) {
        if ("__source" !== n && !(n in t)) return !0;
      }

      for (var r in t) {
        if ("__source" !== r && e[r] !== t[r]) return !0;
      }

      return !1;
    }

    !function (e) {
      var t, n;

      function r(t) {
        var n;
        return (n = e.call(this, t) || this).isPureReactComponent = !0, n;
      }

      n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n, r.prototype.shouldComponentUpdate = function (e, t) {
        return te(this.props, e) || te(this.state, t);
      };
    }(m);
    var ne = r.__b;

    r.__b = function (e) {
      e.type && e.type.t && e.ref && (e.props.ref = e.ref, e.ref = null), ne && ne(e);
    };

    "undefined" != typeof Symbol && Symbol["for"] && Symbol["for"]("react.forward_ref");
    var re = r.__e;

    function ie(e) {
      return e && ((e = ee({}, e)).__c = null, e.__k = e.__k && e.__k.map(ie)), e;
    }

    function oe(e) {
      return e && (e.__v = null, e.__k = e.__k && e.__k.map(oe)), e;
    }

    function ae() {
      this.__u = 0, this.o = null, this.__b = null;
    }

    function ce(e) {
      var t = e.__.__c;
      return t && t.u && t.u(e);
    }

    function se() {
      this.i = null, this.l = null;
    }

    r.__e = function (e, t, n) {
      if (e.then) for (var r, i = t; i = i.__;) {
        if ((r = i.__c) && r.__c) return null == t.__e && (t.__e = n.__e, t.__k = n.__k), r.__c(e, t.__c);
      }
      re(e, t, n);
    }, (ae.prototype = new m()).__c = function (e, t) {
      var n = this;
      null == n.o && (n.o = []), n.o.push(t);

      var r = ce(n.__v),
          i = !1,
          o = function o() {
        i || (i = !0, t.componentWillUnmount = t.__c, r ? r(a) : a());
      };

      t.__c = t.componentWillUnmount, t.componentWillUnmount = function () {
        o(), t.__c && t.__c();
      };

      var a = function a() {
        var e;
        if (! --n.__u) for (n.__v.__k[0] = oe(n.state.u), n.setState({
          u: n.__b = null
        }); e = n.o.pop();) {
          e.forceUpdate();
        }
      };

      n.__u++ || n.setState({
        u: n.__b = n.__v.__k[0]
      }), e.then(o, o);
    }, ae.prototype.componentWillUnmount = function () {
      this.o = [];
    }, ae.prototype.render = function (e, t) {
      return this.__b && (this.__v.__k && (this.__v.__k[0] = ie(this.__b)), this.__b = null), [d(y, null, t.u ? null : e.children), t.u && e.fallback];
    };

    var le = function le(e, t, n) {
      if (++n[1] === n[0] && e.l["delete"](t), e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.l.size)) for (n = e.i; n;) {
        for (; n.length > 3;) {
          n.pop()();
        }

        if (n[1] < n[0]) break;
        e.i = n = n[2];
      }
    };

    (se.prototype = new m()).u = function (e) {
      var t = this,
          n = ce(t.__v),
          r = t.l.get(e);
      return r[0]++, function (i) {
        var o = function o() {
          t.props.revealOrder ? (r.push(i), le(t, e, r)) : i();
        };

        n ? n(o) : o();
      };
    }, se.prototype.render = function (e) {
      this.i = null, this.l = new Map();
      var t = w(e.children);
      e.revealOrder && "b" === e.revealOrder[0] && t.reverse();

      for (var n = t.length; n--;) {
        this.l.set(t[n], this.i = [1, 0, this.i]);
      }

      return e.children;
    }, se.prototype.componentDidUpdate = se.prototype.componentDidMount = function () {
      var e = this;
      e.l.forEach(function (t, n) {
        le(e, n, t);
      });
    };
    !function () {
      function e() {}

      var t = e.prototype;
      t.getChildContext = function () {
        return this.props.context;
      }, t.render = function (e) {
        return e.children;
      };
    }();
    var ue = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
    m.prototype.isReactComponent = {};
    var pe = "undefined" != typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;

    function fe(e, t, n) {
      if (null == t.__k) for (; t.firstChild;) {
        t.removeChild(t.firstChild);
      }
      return I(e, t), "function" == typeof n && n(), e ? e.__c : null;
    }

    var de = r.event;

    function ve(e, t) {
      e["UNSAFE_" + t] && !e[t] && Object.defineProperty(e, t, {
        configurable: !1,
        get: function get() {
          return this["UNSAFE_" + t];
        },
        set: function set(e) {
          this["UNSAFE_" + t] = e;
        }
      });
    }

    r.event = function (e) {
      de && (e = de(e)), e.persist = function () {};
      var t = !1,
          n = !1,
          r = e.stopPropagation;

      e.stopPropagation = function () {
        r.call(e), t = !0;
      };

      var i = e.preventDefault;
      return e.preventDefault = function () {
        i.call(e), n = !0;
      }, e.isPropagationStopped = function () {
        return t;
      }, e.isDefaultPrevented = function () {
        return n;
      }, e.nativeEvent = e;
    };

    var ye = {
      configurable: !0,
      get: function get() {
        return this["class"];
      }
    },
        me = r.vnode;

    r.vnode = function (e) {
      e.$$typeof = pe;
      var t = e.type,
          n = e.props;

      if (t) {
        if (n["class"] != n.className && (ye.enumerable = "className" in n, null != n.className && (n["class"] = n.className), Object.defineProperty(n, "className", ye)), "function" != typeof t) {
          var r, i, o;

          for (o in n.defaultValue && void 0 !== n.value && (n.value || 0 === n.value || (n.value = n.defaultValue), delete n.defaultValue), Array.isArray(n.value) && n.multiple && "select" === t && (w(n.children).forEach(function (e) {
            -1 != n.value.indexOf(e.props.value) && (e.props.selected = !0);
          }), delete n.value), !0 === n.download && (n.download = ""), n) {
            if (r = ue.test(o)) break;
          }

          if (r) for (o in i = e.props = {}, n) {
            i[ue.test(o) ? o.replace(/[A-Z0-9]/, "-$&").toLowerCase() : o] = n[o];
          }
        }

        !function (t) {
          var n = e.type,
              r = e.props;

          if (r && "string" == typeof n) {
            var i = {};

            for (var o in r) {
              /^on(Ani|Tra|Tou)/.test(o) && (r[o.toLowerCase()] = r[o], delete r[o]), i[o.toLowerCase()] = o;
            }

            if (i.ondoubleclick && (r.ondblclick = r[i.ondoubleclick], delete r[i.ondoubleclick]), i.onbeforeinput && (r.onbeforeinput = r[i.onbeforeinput], delete r[i.onbeforeinput]), i.onchange && ("textarea" === n || "input" === n.toLowerCase() && !/^fil|che|ra/i.test(r.type))) {
              var a = i.oninput || "oninput";
              r[a] || (r[a] = r[i.onchange], delete r[i.onchange]);
            }
          }
        }(), "function" == typeof t && !t.m && t.prototype && (ve(t.prototype, "componentWillMount"), ve(t.prototype, "componentWillReceiveProps"), ve(t.prototype, "componentWillUpdate"), t.m = !0);
      }

      me && me(e);
    };

    var he = d,
        ge = y,
        be = m,
        _e = (n(29), n(30), n(31), n(127), n(39), n(128), n(170), n(134)),
        ke = function ke(e) {
      var t = e.t;
      return he("svg", {
        role: "img",
        "aria-label": t(["close"]),
        width: "12",
        height: "12",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }, he("title", null, t(["close"])), he("line", {
        x1: "1",
        y1: "11",
        x2: "11",
        y2: "1",
        strokeWidth: "1"
      }), he("line", {
        x1: "1",
        y1: "1",
        x2: "11",
        y2: "11",
        strokeWidth: "1"
      }));
    };

    ke.propTypes = {
      t: n.n(_e).a.func
    };
    n(50);

    function we(e) {
      return e.split("-").map(function (e) {
        return e.slice(0, 1).toUpperCase() + e.slice(1);
      }).join(" ");
    }

    n(64), n(174), n(175);

    function Se(e) {
      return function (e) {
        if (Array.isArray(e)) return xe(e);
      }(e) || function (e) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
      }(e) || function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return xe(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === n && e.constructor && (n = e.constructor.name);
        if ("Map" === n || "Set" === n) return Array.from(e);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return xe(e, t);
      }(e) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }

    function xe(e, t) {
      (null == t || t > e.length) && (t = e.length);

      for (var n = 0, r = new Array(t); n < t; n++) {
        r[n] = e[n];
      }

      return r;
    }

    function je(e) {
      return (je = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      })(e);
    }

    var Oe = function Oe(e) {
      for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) {
        n[r - 1] = arguments[r];
      }

      var i,
          o = je(n[0]);
      i = 0 === n.length ? {} : "string" === o || "number" === o ? Array.prototype.slice.call(n) : n[0];

      for (var a = [], c = e.toString(); c.length > 0;) {
        var s = c.match(/\{(?!\{)([\w\d]+)\}(?!\})/);

        if (null !== s) {
          var l = c.substr(0, s.index);
          c = c.substr(s.index + s[0].length);
          var u = parseInt(s[1]);
          a.push(l), u != u ? a.push(i[s[1]]) : a.push(i[u]);
        } else a.push(c), c = "";
      }

      return a;
    };

    function Ae(e) {
      if (void 0 !== e && void 0 !== e.lang && "zz" !== e.lang) return e.lang;
      var t = (("string" == typeof window.language ? window.language : null) || document.documentElement.lang || (void 0 !== e && void 0 !== e.languages && void 0 !== e.languages[0] ? e.languages[0] : "en")).toLowerCase(),
          n = new RegExp("^([\\w]+)-([\\w]+)$").exec(t);
      return null === n ? t : n[1];
    }

    function Pe(e, t, n) {
      var r = t;
      Array.isArray(r) || (r = [r]);

      for (var i = e, o = 0; o < r.length; o++) {
        if (void 0 === i) return n;

        if (void 0 !== r[o] && r[o].endsWith("?")) {
          var a = r[o].slice(0, r[o].length - 1),
              c = void 0;
          void 0 !== (c = i instanceof Map ? i.get(a) : i[a]) && "string" == typeof c && (i = c);
        } else i = i instanceof Map ? i.get(r[o]) : i[r[o]];
      }

      return void 0 === i || "string" != typeof i ? n : "" !== i ? i : void 0;
    }

    function ze(e, t, n, r) {
      var i = r,
          o = !1;
      "!" === i[0] && (i = i.slice(1), o = !0), Array.isArray(i) || (i = [i]);
      var a = Pe(e, [t].concat(Se(i)));

      if (void 0 === a && void 0 !== n && (a = Pe(e, [n].concat(Se(i)))), void 0 === a) {
        if (o) return;
        return ["[missing translation: ".concat(t, "/").concat(i.join("/"), "]")];
      }

      for (var c = arguments.length, s = new Array(c > 4 ? c - 4 : 0), l = 4; l < c; l++) {
        s[l - 4] = arguments[l];
      }

      return s.length > 0 ? Oe.apply(void 0, [a].concat(s)) : a;
    }

    var Ee = function Ee(e) {
      var t = e.text,
          n = e.config;

      if (t instanceof Array || (t = [t]), !0 === n.htmlTexts) {
        var r = !1;
        "<" === t[0][0] && (r = !0);
        var i = t.map(function (e, t) {
          return "string" == typeof e ? he("span", {
            key: t,
            dangerouslySetInnerHTML: {
              __html: e
            }
          }) : e;
        });
        return he(r ? ge : "span", null, i);
      }

      return he("span", null, t);
    };

    function Ce(e) {
      return (Ce = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      })(e);
    }

    function De() {
      return (De = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];

          for (var r in n) {
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
        }

        return e;
      }).apply(this, arguments);
    }

    function Te(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }

    function Ie(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    function Re(e, t) {
      return (Re = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }

    function Ne(e) {
      var t = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
        } catch (e) {
          return !1;
        }
      }();

      return function () {
        var n,
            r = qe(e);

        if (t) {
          var i = qe(this).constructor;
          n = Reflect.construct(r, arguments, i);
        } else n = r.apply(this, arguments);

        return Me(this, n);
      };
    }

    function Me(e, t) {
      return !t || "object" !== Ce(t) && "function" != typeof t ? function (e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }(e) : t;
    }

    function qe(e) {
      return (qe = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }

    var Ue = function (e) {
      !function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && Re(e, t);
      }(o, e);
      var t,
          n,
          r,
          i = Ne(o);

      function o() {
        return Te(this, o), i.apply(this, arguments);
      }

      return t = o, (n = [{
        key: "render",
        value: function value() {
          var e,
              t = this.props,
              n = t.checked,
              r = t.onlyRequiredEnabled,
              i = t.onToggle,
              o = t.name,
              a = t.lang,
              c = t.config,
              s = t.translations,
              l = t.title,
              u = t.description,
              p = t.t,
              f = this.props.required || !1,
              d = this.props.optOut || !1,
              v = this.props.purposes || [],
              y = "service-item-".concat(o),
              m = v.map(function (e) {
            return p(["!", "purposes", e, "title?"]) || we(e);
          }).join(", "),
              h = d ? he("span", {
            className: "cm-opt-out",
            title: p(["service", "optOut", "description"])
          }, p(["service", "optOut", "title"])) : "",
              g = f ? he("span", {
            className: "cm-required",
            title: p(["service", "required", "description"])
          }, p(["service", "required", "title"])) : "";
          v.length > 0 && (e = he("p", {
            className: "purposes"
          }, p(["service", v.length > 1 ? "purposes" : "purpose"]), ":", " ", m));
          var b = u || ze(s, a, "zz", ["!", "description"]) || p(["!", o, "description?"]);
          return he("div", null, he("input", {
            id: y,
            className: "cm-list-input" + (f ? " required" : "") + (r ? " half-checked only-required" : ""),
            "aria-describedby": "".concat(y, "-description"),
            disabled: f,
            checked: n || f,
            type: "checkbox",
            onChange: function onChange(e) {
              i(e.target.checked);
            }
          }), he("label", De({
            htmlFor: y,
            className: "cm-list-label"
          }, f ? {
            tabIndex: "0"
          } : {}), he("span", {
            className: "cm-list-title"
          }, l || ze(s, a, "zz", ["!", "title"]) || p(["!", o, "title?"]) || we(o)), g, h, he("span", {
            className: "cm-switch"
          }, he("div", {
            className: "slider round active"
          }))), he("div", {
            id: "".concat(y, "-description")
          }, b && he("p", {
            className: "cm-list-description"
          }, he(Ee, {
            config: c,
            text: b
          })), e));
        }
      }]) && Ie(t.prototype, n), r && Ie(t, r), o;
    }(be);

    function Le(e) {
      return (Le = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      })(e);
    }

    function Fe(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    function He(e, t) {
      return (He = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }

    function We(e) {
      var t = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
        } catch (e) {
          return !1;
        }
      }();

      return function () {
        var n,
            r = Ve(e);

        if (t) {
          var i = Ve(this).constructor;
          n = Reflect.construct(r, arguments, i);
        } else n = r.apply(this, arguments);

        return Be(this, n);
      };
    }

    function Be(e, t) {
      return !t || "object" !== Le(t) && "function" != typeof t ? Ke(e) : t;
    }

    function Ke(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }

    function Ve(e) {
      return (Ve = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }

    function $e() {
      return ($e = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];

          for (var r in n) {
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
        }

        return e;
      }).apply(this, arguments);
    }

    var Ge = function Ge(e) {
      var t = e.services,
          n = e.config,
          r = e.consents,
          i = e.lang,
          o = e.toggle,
          a = e.t;
      return t.map(function (e) {
        var t = r[e.name];
        return he("li", {
          key: e.name,
          className: "cm-service"
        }, he(Ue, $e({
          checked: t || e.required,
          onToggle: function onToggle(t) {
            o([e], t);
          },
          config: n,
          lang: i,
          t: a
        }, e)));
      });
    },
        Ze = function (e) {
      !function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && He(e, t);
      }(o, e);
      var t,
          n,
          r,
          i = We(o);

      function o(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, o), t = i.call(this, e), e.manager.watch(Ke(t)), t.state = {
          consents: e.manager.consents
        }, t;
      }

      return t = o, (n = [{
        key: "componentWillUnmount",
        value: function value() {
          this.props.manager.unwatch(this);
        }
      }, {
        key: "update",
        value: function value(e, t, n) {
          e === this.props.manager && "consents" === t && this.setState({
            consents: n
          });
        }
      }, {
        key: "render",
        value: function value() {
          var e = this.props,
              t = e.config,
              n = e.t,
              r = e.manager,
              i = e.lang,
              o = this.state.consents,
              a = t.services,
              c = function c(e, t) {
            e.map(function (e) {
              e.required || r.updateConsent(e.name, t);
            });
          },
              s = he(Ge, {
            config: t,
            lang: i,
            services: a,
            t: n,
            consents: o,
            toggle: c
          }),
              l = a.filter(function (e) {
            return !e.required;
          }),
              u = l.filter(function (e) {
            return o[e.name];
          }).length,
              p = a.filter(function (e) {
            return e.required;
          }).length,
              f = u === l.length;

          return a.filter(function (e) {
            return e.required;
          }).length, he("ul", {
            className: "cm-services"
          }, s, !t.hideToggleAll && l.length > 1 && he("li", {
            className: "cm-service cm-toggle-all"
          }, he(Ue, {
            name: "disableAll",
            title: n(["service", "disableAll", "title"]),
            description: n(["service", "disableAll", "description"]),
            checked: f,
            config: t,
            onlyRequiredEnabled: !f && p > 0,
            onToggle: function onToggle(e) {
              c(a, e);
            },
            lang: i,
            t: n
          })));
        }
      }]) && Fe(t.prototype, n), r && Fe(t, r), o;
    }(be);

    function Qe(e) {
      return (Qe = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      })(e);
    }

    function Je() {
      return (Je = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];

          for (var r in n) {
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
        }

        return e;
      }).apply(this, arguments);
    }

    function Ye(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    function Xe(e, t) {
      return (Xe = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }

    function et(e) {
      var t = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
        } catch (e) {
          return !1;
        }
      }();

      return function () {
        var n,
            r = nt(e);

        if (t) {
          var i = nt(this).constructor;
          n = Reflect.construct(r, arguments, i);
        } else n = r.apply(this, arguments);

        return tt(this, n);
      };
    }

    function tt(e, t) {
      return !t || "object" !== Qe(t) && "function" != typeof t ? function (e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }(e) : t;
    }

    function nt(e) {
      return (nt = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }

    var rt = function (e) {
      !function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && Xe(e, t);
      }(o, e);
      var t,
          n,
          r,
          i = et(o);

      function o(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, o), (t = i.call(this, e)).state = {
          servicesVisible: !1
        }, t;
      }

      return t = o, (n = [{
        key: "render",
        value: function value() {
          var e,
              t = this,
              n = this.props,
              r = n.allEnabled,
              i = n.onlyRequiredEnabled,
              o = n.allDisabled,
              a = n.services,
              c = n.config,
              s = n.onToggle,
              l = n.name,
              u = n.lang,
              p = n.manager,
              f = n.consents,
              d = n.title,
              v = n.description,
              y = n.t,
              m = this.state.servicesVisible,
              h = this.props.required || !1,
              g = this.props.purposes || [],
              b = "purpose-item-".concat(l),
              _ = g.map(function (e) {
            return y(["!", "purposes", e, "title?"]) || we(e);
          }).join(", "),
              k = h ? he("span", {
            className: "cm-required",
            title: y(["!", "service", "required", "description"]) || ""
          }, y(["service", "required", "title"])) : "";

          g.length > 0 && (e = he("p", {
            className: "purposes"
          }, y(["purpose", g.length > 1 ? "purposes" : "purpose"]), ": ", _));
          var w = he(Ge, {
            config: c,
            lang: u,
            services: a,
            toggle: function toggle(e, t) {
              e.map(function (e) {
                e.required || p.updateConsent(e.name, t);
              });
            },
            consents: f,
            t: y
          }),
              S = v || y(["!", "purposes", l, "description"]);
          return he(ge, null, he("input", {
            id: b,
            className: "cm-list-input" + (h ? " required" : "") + (r ? "" : i ? " only-required" : " half-checked"),
            "aria-describedby": "".concat(b, "-description"),
            disabled: h,
            checked: r || !o && !i,
            type: "checkbox",
            onChange: function onChange(e) {
              s(e.target.checked);
            }
          }), he("label", Je({
            htmlFor: b,
            className: "cm-list-label"
          }, h ? {
            tabIndex: "0"
          } : {}), he("span", {
            className: "cm-list-title"
          }, d || y(["!", "purposes", l, "title?"]) || we(l)), k, he("span", {
            className: "cm-switch"
          }, he("div", {
            className: "slider round active"
          }))), he("div", {
            id: "".concat(b, "-description")
          }, S && he("p", {
            className: "cm-list-description"
          }, he(Ee, {
            config: c,
            text: S
          })), e), a.length > 0 && he("div", {
            className: "cm-services"
          }, he("div", {
            className: "cm-caret"
          }, he("a", {
            href: "#",
            onClick: function onClick(e) {
              e.preventDefault(), t.setState({
                servicesVisible: !m
              });
            }
          }, m && he("span", null, "↑") || he("span", null, "↓"), " ", a.length, " ", y(["purposeItem", a.length > 1 ? "services" : "service"]))), he("ul", {
            className: "cm-content" + (m ? " expanded" : "")
          }, w)));
        }
      }]) && Ye(t.prototype, n), r && Ye(t, r), o;
    }(be);

    function it(e) {
      return (it = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      })(e);
    }

    function ot(e, t) {
      var _n2;

      if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (_n2 = function (e, t) {
          if (!e) return;
          if ("string" == typeof e) return at(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === n && e.constructor && (n = e.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(e);
          if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return at(e, t);
        }(e)) || t && e && "number" == typeof e.length) {
          _n2 && (e = _n2);

          var r = 0,
              i = function i() {};

          return {
            s: i,
            n: function n() {
              return r >= e.length ? {
                done: !0
              } : {
                done: !1,
                value: e[r++]
              };
            },
            e: function e(_e2) {
              throw _e2;
            },
            f: i
          };
        }

        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }

      var o,
          a = !0,
          c = !1;
      return {
        s: function s() {
          _n2 = e[Symbol.iterator]();
        },
        n: function n() {
          var e = _n2.next();

          return a = e.done, e;
        },
        e: function e(_e3) {
          c = !0, o = _e3;
        },
        f: function f() {
          try {
            a || null == _n2["return"] || _n2["return"]();
          } finally {
            if (c) throw o;
          }
        }
      };
    }

    function at(e, t) {
      (null == t || t > e.length) && (t = e.length);

      for (var n = 0, r = new Array(t); n < t; n++) {
        r[n] = e[n];
      }

      return r;
    }

    function ct(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    function st(e, t) {
      return (st = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }

    function lt(e) {
      var t = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
        } catch (e) {
          return !1;
        }
      }();

      return function () {
        var n,
            r = ft(e);

        if (t) {
          var i = ft(this).constructor;
          n = Reflect.construct(r, arguments, i);
        } else n = r.apply(this, arguments);

        return ut(this, n);
      };
    }

    function ut(e, t) {
      return !t || "object" !== it(t) && "function" != typeof t ? pt(e) : t;
    }

    function pt(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }

    function ft(e) {
      return (ft = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }

    var dt = function (e) {
      !function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && st(e, t);
      }(o, e);
      var t,
          n,
          r,
          i = lt(o);

      function o(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, o), t = i.call(this, e), e.manager.watch(pt(t)), t.state = {
          consents: e.manager.consents
        }, t;
      }

      return t = o, (n = [{
        key: "componentWillUnmount",
        value: function value() {
          this.props.manager.unwatch(this);
        }
      }, {
        key: "update",
        value: function value(e, t, n) {
          e === this.props.manager && "consents" === t && this.setState({
            consents: n
          });
        }
      }, {
        key: "render",
        value: function value() {
          var e,
              t = this.props,
              n = t.config,
              r = t.t,
              i = t.manager,
              o = t.lang,
              a = this.state.consents,
              c = n.services,
              s = {},
              l = ot(c);

          try {
            for (l.s(); !(e = l.n()).done;) {
              var u,
                  p = e.value,
                  f = ot(p.purposes);

              try {
                for (f.s(); !(u = f.n()).done;) {
                  var d = u.value;
                  void 0 === s[d] && (s[d] = []), s[d].push(p);
                }
              } catch (e) {
                f.e(e);
              } finally {
                f.f();
              }
            }
          } catch (e) {
            l.e(e);
          } finally {
            l.f();
          }

          var v = function v(e, t) {
            e.map(function (e) {
              var n,
                  r = ot(s[e]);

              try {
                for (r.s(); !(n = r.n()).done;) {
                  var o = n.value;
                  o.required || i.updateConsent(o.name, t);
                }
              } catch (e) {
                r.e(e);
              } finally {
                r.f();
              }
            });
          },
              y = function y(e) {
            var t,
                n = {
              allEnabled: !0,
              onlyRequiredEnabled: !0,
              allDisabled: !0,
              allRequired: !0
            },
                r = ot(e);

            try {
              for (r.s(); !(t = r.n()).done;) {
                var i = t.value;
                i.required || (n.allRequired = !1), a[i.name] ? (i.required || (n.onlyRequiredEnabled = !1), n.allDisabled = !1) : i.required || (n.allEnabled = !1);
              }
            } catch (e) {
              r.e(e);
            } finally {
              r.f();
            }

            return n.allDisabled && (n.onlyRequiredEnabled = !1), n;
          },
              m = n.purposeOrder || [],
              h = Object.keys(s).sort(function (e, t) {
            return m.indexOf(e) - m.indexOf(t);
          }).map(function (e) {
            var t = y(s[e]);
            return he("li", {
              key: e,
              className: "cm-purpose"
            }, he(rt, {
              allEnabled: t.allEnabled,
              allDisabled: t.allDisabled,
              onlyRequiredEnabled: t.onlyRequiredEnabled,
              required: t.allRequired,
              consents: a,
              name: e,
              config: n,
              lang: o,
              manager: i,
              onToggle: function onToggle(t) {
                v([e], t);
              },
              services: s[e],
              t: r
            }));
          }),
              g = Object.keys(s).filter(function (e) {
            var t,
                n = ot(s[e]);

            try {
              for (n.s(); !(t = n.n()).done;) {
                if (!t.value.required) return !0;
              }
            } catch (e) {
              n.e(e);
            } finally {
              n.f();
            }

            return !1;
          }),
              b = y(c);

          return he("ul", {
            className: "cm-purposes"
          }, h, g.length > 1 && he("li", {
            className: "cm-purpose cm-toggle-all"
          }, he(rt, {
            name: "disableAll",
            title: r(["service", "disableAll", "title"]),
            description: r(["service", "disableAll", "description"]),
            allDisabled: b.allDisabled,
            allEnabled: b.allEnabled,
            onlyRequiredEnabled: b.onlyRequiredEnabled,
            onToggle: function onToggle(e) {
              v(Object.keys(s), e);
            },
            manager: i,
            consents: a,
            config: n,
            lang: o,
            services: [],
            t: r
          })));
        }
      }]) && ct(t.prototype, n), r && ct(t, r), o;
    }(be);

    function vt(e) {
      return (vt = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      })(e);
    }

    function yt(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }

    function mt(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    function ht(e, t) {
      return (ht = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }

    function gt(e) {
      var t = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
        } catch (e) {
          return !1;
        }
      }();

      return function () {
        var n,
            r = _t(e);

        if (t) {
          var i = _t(this).constructor;

          n = Reflect.construct(r, arguments, i);
        } else n = r.apply(this, arguments);

        return bt(this, n);
      };
    }

    function bt(e, t) {
      return !t || "object" !== vt(t) && "function" != typeof t ? function (e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }(e) : t;
    }

    function _t(e) {
      return (_t = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }

    var kt = function (e) {
      !function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && ht(e, t);
      }(o, e);
      var t,
          n,
          r,
          i = gt(o);

      function o() {
        return yt(this, o), i.apply(this, arguments);
      }

      return t = o, (n = [{
        key: "render",
        value: function value() {
          var e,
              t,
              n,
              r = this.props,
              i = r.hide,
              o = r.confirming,
              a = r.saveAndHide,
              c = r.acceptAndHide,
              s = r.declineAndHide,
              l = r.config,
              u = r.manager,
              p = r.lang,
              f = r.t,
              d = l.embedded,
              v = void 0 === l.groupByPurpose || l.groupByPurpose;
          l.mustConsent || (e = he("button", {
            title: f(["close"]),
            className: "hide",
            type: "button",
            onClick: i
          }, he(ke, {
            t: f
          }))), l.hideDeclineAll || u.confirmed || (t = he("button", {
            disabled: o,
            className: "cm-btn cm-btn-decline cm-btn-danger cn-decline",
            type: "button",
            onClick: s
          }, f(["decline"])));
          var y,
              m,
              h,
              g = he("button", {
            disabled: o,
            className: "cm-btn cm-btn-success cm-btn-info cm-btn-accept",
            type: "button",
            onClick: a
          }, f([u.confirmed ? "save" : "acceptSelected"]));
          l.acceptAll && !u.confirmed && (n = he("button", {
            disabled: o,
            className: "cm-btn cm-btn-success cm-btn-accept-all",
            type: "button",
            onClick: c
          }, f(["acceptAll"]))), void 0 !== l.privacyPolicy ? "string" == typeof l.privacyPolicy ? y = l.privacyPolicy : "object" === vt(l.privacyPolicy) && (y = l.privacyPolicy[p] || l.privacyPolicy["default"]) : void 0 !== (y = f(["!", "privacyPolicyUrl"], {
            lang: p
          })) && (y = y.join("")), void 0 !== y && (m = he("a", {
            key: "ppLink",
            href: y,
            target: "_blank",
            rel: "noopener"
          }, f(["privacyPolicy", "name"]))), h = he(v ? dt : Ze, {
            t: f,
            config: l,
            manager: u,
            lang: p
          });
          var b = he("div", {
            className: "cm-modal cm-klaro"
          }, he("div", {
            className: "cm-header"
          }, e, he("h1", {
            className: "title"
          }, he(Ee, {
            config: l,
            text: f(["consentModal", "title"])
          })), he("p", null, he(Ee, {
            config: l,
            text: [f(["consentModal", "description"])].concat(m && [" "].concat(f(["privacyPolicy", "text"], {
              privacyPolicy: m
            })) || [])
          }))), he("div", {
            className: "cm-body"
          }, h), he("div", {
            className: "cm-footer"
          }, he("div", {
            className: "cm-footer-buttons"
          }, t, g, n), !l.disablePoweredBy && he("p", {
            className: "cm-powered-by"
          }, he("a", {
            target: "_blank",
            href: l.poweredBy || "https://kiprotect.com/klaro",
            rel: "noopener"
          }, f(["poweredBy"])))));
          return d ? he("div", {
            className: "cookie-modal cm-embedded"
          }, b) : he("div", {
            className: "cookie-modal"
          }, he("div", {
            className: "cm-bg",
            onClick: i
          }), b);
        }
      }]) && mt(t.prototype, n), r && mt(t, r), o;
    }(be);

    n(129);

    function wt(e) {
      return (wt = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      })(e);
    }

    function St(e, t, n) {
      void 0 === n && (n = !0);

      for (var r = Object.keys(t), i = 0; i < r.length; i++) {
        var o = r[i],
            a = t[o],
            c = e[o];
        "string" == typeof a ? (n || void 0 === c) && (e[o] = a) : "object" === wt(a) && ("object" === wt(c) ? St(c, a, n) : (n || void 0 === c) && (e[o] = a));
      }

      return e;
    }

    function xt(e) {
      return (xt = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      })(e);
    }

    function jt(e) {
      return function (e) {
        if (Array.isArray(e)) return Ot(e);
      }(e) || function (e) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
      }(e) || function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return Ot(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === n && e.constructor && (n = e.constructor.name);
        if ("Map" === n || "Set" === n) return Array.from(e);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ot(e, t);
      }(e) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }

    function Ot(e, t) {
      (null == t || t > e.length) && (t = e.length);

      for (var n = 0, r = new Array(t); n < t; n++) {
        r[n] = e[n];
      }

      return r;
    }

    function At(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    function Pt(e, t) {
      return (Pt = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }

    function zt(e) {
      var t = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
        } catch (e) {
          return !1;
        }
      }();

      return function () {
        var n,
            r = Dt(e);

        if (t) {
          var i = Dt(this).constructor;
          n = Reflect.construct(r, arguments, i);
        } else n = r.apply(this, arguments);

        return Et(this, n);
      };
    }

    function Et(e, t) {
      return !t || "object" !== xt(t) && "function" != typeof t ? Ct(e) : t;
    }

    function Ct(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }

    function Dt(e) {
      return (Dt = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }

    function Tt(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e;
    }

    var It = function (e) {
      !function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && Pt(e, t);
      }(o, e);
      var t,
          n,
          r,
          i = zt(o);

      function o(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, o), Tt(Ct(t = i.call(this, e)), "executeButtonClicked", function (e, n, r) {
          var i = t.state.modal,
              o = 0;
          e && (o = t.props.manager.changeAll(n));
          var a = t.props.manager.confirmed;

          if (t.props.manager.saveAndApplyConsents(r), e && !a && (i || t.props.config.mustConsent)) {
            var c = function c() {
              t.setState({
                confirming: !1
              }), t.props.hide();
            };

            t.setState({
              confirming: !0
            }), 0 === o ? c() : setTimeout(c, 800);
          } else t.props.hide();
        }), Tt(Ct(t), "saveAndHide", function () {
          t.executeButtonClicked(!1, !1, "save");
        }), Tt(Ct(t), "acceptAndHide", function () {
          t.executeButtonClicked(!0, !0, "accept");
        }), Tt(Ct(t), "declineAndHide", function () {
          t.executeButtonClicked(!0, !1, "decline");
        }), t.state = {
          modal: e.modal,
          confirming: !1
        }, t;
      }

      return t = o, (n = [{
        key: "componentDidUpdate",
        value: function value(e) {
          e.modal !== this.props.modal && this.setState({
            modal: this.props.modal
          });
        }
      }, {
        key: "render",
        value: function value() {
          var e,
              t = this,
              n = this.props,
              r = n.lang,
              i = n.config,
              o = n.show,
              a = n.manager,
              c = n.testing,
              s = n.t,
              l = this.state,
              u = l.confirming,
              p = l.modal,
              f = i.embedded,
              d = i.noticeAsModal,
              v = i.hideLearnMore,
              y = i.purposeOrder || [],
              m = function (e) {
            for (var t = new Set([]), n = 0; n < e.services.length; n++) {
              for (var r = e.services[n].purposes || [], i = 0; i < r.length; i++) {
                t.add(r[i]);
              }
            }

            return Array.from(t);
          }(i).filter(function (e) {
            return "functional" !== e;
          }).sort(function (e, t) {
            return y.indexOf(e) - y.indexOf(t);
          }).map(function (e) {
            return s(["!", "purposes", e, "title?"]) || we(e);
          }),
              h = "";

          h = 1 === m.length ? m[0] : [].concat(jt(m.slice(0, -2)), [m.slice(-2).join(" & ")]).join(", "), void 0 !== i.privacyPolicy ? "string" == typeof i.privacyPolicy ? e = i.privacyPolicy : "object" === xt(i.privacyPolicy) && (e = i.privacyPolicy[r] || i.privacyPolicy["default"]) : void 0 !== (e = s(["!", "privacyPolicyUrl"], {
            lang: r
          })) && (e = e.join(""));

          var g,
              b = function b(e) {
            e.preventDefault(), t.setState({
              modal: !0
            });
          };

          if (a.changed && (g = he("p", {
            className: "cn-changes"
          }, s(["consentNotice", "changeDescription"]))), !o && !c && !u) return he("div", null);

          var _,
              k = (!i.mustConsent || d) && !a.confirmed && !i.noNotice,
              w = i.hideDeclineAll ? "" : he("button", {
            className: "cm-btn cm-btn-danger cn-decline",
            type: "button",
            onClick: this.declineAndHide
          }, s(["decline"])),
              S = i.acceptAll ? he("button", {
            className: "cm-btn cm-btn-success",
            type: "button",
            onClick: this.acceptAndHide
          }, s(["ok"])) : he("button", {
            className: "cm-btn cm-btn-success",
            type: "button",
            onClick: this.saveAndHide
          }, s(["ok"])),
              x = function x() {
            return d ? he("button", {
              key: "learnMoreLink",
              className: "cm-btn cm-btn-lern-more cm-btn-info",
              type: "button",
              onClick: b
            }, s(["consentNotice", "learnMore"])) : he("a", {
              key: "learnMoreLink",
              className: "cm-link cn-learn-more",
              href: "#",
              onClick: b
            }, s(["consentNotice", "learnMore"]));
          };

          if (void 0 !== e && (_ = he("a", {
            key: "ppLink",
            href: e
          }, s(["privacyPolicy", "name"]))), p || a.confirmed && !c || !a.confirmed && i.mustConsent) return he(kt, {
            t: s,
            lang: r,
            config: i,
            hide: function hide() {
              i.mustConsent && !i.acceptAll || (a.confirmed && !c ? t.props.hide() : t.setState({
                modal: !1
              }));
            },
            confirming: u,
            declineAndHide: this.declineAndHide,
            saveAndHide: this.saveAndHide,
            acceptAndHide: this.acceptAndHide,
            manager: a
          });
          var j = he("div", {
            className: "cookie-notice ".concat(k || c ? "" : "cookie-notice-hidden", " ").concat(d ? "cookie-modal-notice" : "", " ").concat(f ? "cn-embedded" : "")
          }, he("div", {
            className: "cn-body"
          }, he("p", null, he(Ee, {
            config: i,
            text: s(["consentNotice", "description"], {
              purposes: he("strong", {
                key: "strong"
              }, h),
              privacyPolicy: _,
              learnMoreLink: x()
            })
          })), c && he("p", null, s(["consentNotice", "testing"])), g, he("div", {
            className: "cn-ok"
          }, !v && x(), he("div", {
            className: "cn-buttons"
          }, w, S))));
          return d ? he("div", {
            className: "cookie-modal"
          }, he("div", {
            className: "cm-bg"
          }), j) : j;
        }
      }]) && At(t.prototype, n), r && At(t, r), o;
    }(be);

    function Rt(e) {
      return (Rt = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      })(e);
    }

    function Nt(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    function Mt(e, t) {
      return (Mt = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }

    function qt(e) {
      var t = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
        } catch (e) {
          return !1;
        }
      }();

      return function () {
        var n,
            r = Ft(e);

        if (t) {
          var i = Ft(this).constructor;
          n = Reflect.construct(r, arguments, i);
        } else n = r.apply(this, arguments);

        return Ut(this, n);
      };
    }

    function Ut(e, t) {
      return !t || "object" !== Rt(t) && "function" != typeof t ? Lt(e) : t;
    }

    function Lt(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }

    function Ft(e) {
      return (Ft = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }

    var Ht = function (e) {
      !function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && Mt(e, t);
      }(o, e);
      var t,
          n,
          r,
          i = qt(o);

      function o(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, o), t = i.call(this, e), e.manager.watch(Lt(t)), t.state = {
          show: e.show > 0 || !e.manager.confirmed
        }, t;
      }

      return t = o, (n = [{
        key: "componentWillUnmount",
        value: function value() {
          this.props.manager.unwatch(this);
        }
      }, {
        key: "update",
        value: function value(e, t) {
          e === this.props.manager && "applyConsents" === t && (!this.props.config.embedded && this.props.manager.confirmed ? this.setState({
            show: !1
          }) : this.forceUpdate());
        }
      }, {
        key: "notifyApi",
        value: function value() {
          var e = this.props,
              t = e.api,
              n = e.modal,
              r = e.show,
              i = e.config;

          if (void 0 !== t) {
            if (n || r > 0) return;
            this.props.manager.confirmed || this.props.manager.auxiliaryStore.getWithKey("shown-before") || (t.update(this, "showNotice", {
              config: i
            }), this.props.manager.auxiliaryStore.setWithKey("shown-before", !0));
          }
        }
      }, {
        key: "componentDidMount",
        value: function value() {
          this.notifyApi();
        }
      }, {
        key: "componentDidUpdate",
        value: function value(e) {
          if (e.show !== this.props.show) {
            this.notifyApi();
            var t = this.props.show > 0 || !this.props.manager.confirmed;
            t !== this.state.show && this.setState({
              show: t
            });
          }
        }
      }, {
        key: "render",
        value: function value() {
          var e = this,
              t = this.props,
              n = t.config,
              r = t.t,
              i = t.lang,
              o = t.testing,
              a = t.manager,
              c = t.modal,
              s = this.state.show,
              l = n.additionalClass,
              u = n.embedded,
              p = n.stylePrefix;
          return he("div", {
            lang: i,
            className: (p || "klaro") + (void 0 !== l ? " " + l : "")
          }, he(It, {
            key: "app-" + this.props.show,
            t: r,
            testing: o,
            show: s,
            lang: i,
            modal: c,
            hide: function hide() {
              u || e.setState({
                show: !1
              });
            },
            config: n,
            manager: a
          }));
        }
      }]) && Nt(t.prototype, n), r && Nt(t, r), o;
    }(be);

    function Wt(e, t) {
      return function (e) {
        if (Array.isArray(e)) return e;
      }(e) || function (e, t) {
        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
        var n = [],
            r = !0,
            i = !1,
            o = void 0;

        try {
          for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0) {
            ;
          }
        } catch (e) {
          i = !0, o = e;
        } finally {
          try {
            r || null == c["return"] || c["return"]();
          } finally {
            if (i) throw o;
          }
        }

        return n;
      }(e, t) || function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return Bt(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === n && e.constructor && (n = e.constructor.name);
        if ("Map" === n || "Set" === n) return Array.from(e);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Bt(e, t);
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }

    function Bt(e, t) {
      (null == t || t > e.length) && (t = e.length);

      for (var n = 0, r = new Array(t); n < t; n++) {
        r[n] = e[n];
      }

      return r;
    }

    var Kt = function Kt(e) {
      var t = e.manager,
          n = e.style,
          r = e.config,
          i = e.t,
          o = e.lang,
          a = e.service,
          c = Wt(K(0), 2),
          s = c[0],
          l = c[1],
          u = r.additionalClass,
          p = (r.embedded, r.stylePrefix);
      $(function () {
        var e = {
          update: function update() {
            return l(s + 1);
          }
        };
        return t.watch(e), function () {
          t.unwatch(e);
        };
      });
      var f = ze(a.translations || {}, o, "zz", ["!", "title"]) || i(["!", a.name, "title?"]) || we(a.name);
      return he("div", {
        lang: o,
        className: (p || "klaro") + (void 0 !== u ? " " + u : "") + " cm-as-context-notice"
      }, he("div", {
        className: "context-notice" + (void 0 !== n ? " cm-".concat(n) : "")
      }, he("p", null, i(["contextualConsent", "description"], {
        title: f
      })), he("p", {
        className: "cm-buttons"
      }, he("button", {
        className: "cm-btn cm-btn-success",
        type: "button",
        onClick: function onClick() {
          t.updateConsent(a.name, !0), t.applyConsents(!1, !0, a.name), t.updateConsent(a.name, !1);
        }
      }, i(["contextualConsent", "acceptOnce"])), he("button", {
        className: "cm-btn cm-btn-success-var",
        type: "button",
        onClick: function onClick() {
          t.updateConsent(a.name, !0), t.confirmed ? (t.saveConsents("contextual-accept"), t.applyConsents(!1, !0, a.name)) : t.applyConsents(!1, !0, a.name);
        }
      }, i(["contextualConsent", "acceptAlways"])))));
    };

    n(97), n(130), n(98);

    function Vt() {
      for (var e = document.cookie.split(";"), t = [], n = new RegExp("^\\s*([^=]+)\\s*=\\s*(.*?)$"), r = 0; r < e.length; r++) {
        var i = e[r],
            o = n.exec(i);
        null !== o && t.push({
          name: o[1],
          value: o[2]
        });
      }

      return t;
    }

    function $t(e, t, n) {
      var r = e + "=; Max-Age=-99999999;";
      document.cookie = r, r += " path=" + (t || "/") + ";", document.cookie = r, void 0 !== n && (r += " domain=" + n + ";", document.cookie = r);
    }

    n(177), n(178);

    function Gt(e, t) {
      return function (e) {
        if (Array.isArray(e)) return e;
      }(e) || function (e, t) {
        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
        var n = [],
            r = !0,
            i = !1,
            o = void 0;

        try {
          for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0) {
            ;
          }
        } catch (e) {
          i = !0, o = e;
        } finally {
          try {
            r || null == c["return"] || c["return"]();
          } finally {
            if (i) throw o;
          }
        }

        return n;
      }(e, t) || Zt(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }

    function Zt(e, t) {
      if (e) {
        if ("string" == typeof e) return Qt(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Qt(e, t) : void 0;
      }
    }

    function Qt(e, t) {
      (null == t || t > e.length) && (t = e.length);

      for (var n = 0, r = new Array(t); n < t; n++) {
        r[n] = e[n];
      }

      return r;
    }

    function Jt(e) {
      for (var t = {}, n = 0; n < e.attributes.length; n++) {
        var r = e.attributes[n];
        r.name.startsWith("data-") && (t[r.name.slice(5)] = r.value);
      }

      return t;
    }

    function Yt(e, t) {
      for (var n = Object.keys(e), r = 0; r < n.length; r++) {
        var i = n[r],
            o = e[i];
        t[i] !== o && t.setAttribute("data-" + i, o);
      }
    }

    function Xt(e) {
      var t,
          n = function (e, t) {
        var _n3;

        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
          if (Array.isArray(e) || (_n3 = Zt(e)) || t && e && "number" == typeof e.length) {
            _n3 && (e = _n3);

            var r = 0,
                i = function i() {};

            return {
              s: i,
              n: function n() {
                return r >= e.length ? {
                  done: !0
                } : {
                  done: !1,
                  value: e[r++]
                };
              },
              e: function e(_e4) {
                throw _e4;
              },
              f: i
            };
          }

          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }

        var o,
            a = !0,
            c = !1;
        return {
          s: function s() {
            _n3 = e[Symbol.iterator]();
          },
          n: function n() {
            var e = _n3.next();

            return a = e.done, e;
          },
          e: function e(_e5) {
            c = !0, o = _e5;
          },
          f: function f() {
            try {
              a || null == _n3["return"] || _n3["return"]();
            } finally {
              if (c) throw o;
            }
          }
        };
      }(document.querySelectorAll("style[data-context=klaro-styles]"));

      try {
        for (n.s(); !(t = n.n()).done;) {
          var r = t.value,
              i = r.innerText;
          void 0 !== r.styleSheet && (i = r.styleSheet.cssText);

          for (var o = function o() {
            var e = Gt(c[a], 2),
                t = e[0],
                n = e[1],
                r = new RegExp("([a-z0-9-]+):[^;]+;[\\s\\n]*\\1:\\s*var\\(--" + t + ",\\s*[^\\)]+\\)", "g");
            i = i.replace(r, function (e, r) {
              return "".concat(r, ": ").concat(n, "; ").concat(r, ": var(--").concat(t, ", ").concat(n, ")");
            });
          }, a = 0, c = Object.entries(e); a < c.length; a++) {
            o();
          }

          var s = document.createElement("style");
          s.setAttribute("type", "text/css"), s.setAttribute("data-context", "klaro-styles"), void 0 !== s.styleSheet ? s.styleSheet.cssText = i : s.innerText = i, r.parentElement.appendChild(s), r.parentElement.removeChild(r);
        }
      } catch (e) {
        n.e(e);
      } finally {
        n.f();
      }
    }

    function en(e) {
      return (en = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      })(e);
    }

    function tn(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), t && nn(e, t);
    }

    function nn(e, t) {
      return (nn = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }

    function rn(e) {
      var t = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
        } catch (e) {
          return !1;
        }
      }();

      return function () {
        var n,
            r = an(e);

        if (t) {
          var i = an(this).constructor;
          n = Reflect.construct(r, arguments, i);
        } else n = r.apply(this, arguments);

        return on(this, n);
      };
    }

    function on(e, t) {
      return !t || "object" !== en(t) && "function" != typeof t ? function (e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }(e) : t;
    }

    function an(e) {
      return (an = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }

    function cn(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }

    function sn(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    function ln(e, t, n) {
      return t && sn(e.prototype, t), n && sn(e, n), e;
    }

    var un = function () {
      function e() {
        cn(this, e), this.value = null;
      }

      return ln(e, [{
        key: "get",
        value: function value() {
          return this.value;
        }
      }, {
        key: "set",
        value: function value(e) {
          this.value = e;
        }
      }, {
        key: "delete",
        value: function value() {
          this.value = null;
        }
      }]), e;
    }(),
        pn = function () {
      function e(t) {
        cn(this, e), this.cookieName = t.storageName, this.cookieDomain = t.cookieDomain, this.cookiePath = t.cookiePath, this.cookieExpiresAfterDays = t.cookieExpiresAfterDays;
      }

      return ln(e, [{
        key: "get",
        value: function value() {
          var e = function (e) {
            for (var t = Vt(), n = 0; n < t.length; n++) {
              if (t[n].name === e) return t[n];
            }

            return null;
          }(this.cookieName);

          return e ? e.value : null;
        }
      }, {
        key: "set",
        value: function value(e) {
          return function (e, t, n, r, i) {
            var o = "";

            if (n) {
              var a = new Date();
              a.setTime(a.getTime() + 24 * n * 60 * 60 * 1e3), o = "; expires=" + a.toUTCString();
            }

            void 0 !== r && (o += "; domain=" + r), o += void 0 !== i ? "; path=" + i : "; path=/", document.cookie = e + "=" + (t || "") + o + "; SameSite=Lax";
          }(this.cookieName, e, this.cookieExpiresAfterDays, this.cookieDomain, this.cookiePath);
        }
      }, {
        key: "delete",
        value: function value() {
          return $t(this.cookieName);
        }
      }]), e;
    }(),
        fn = function () {
      function e(t, n) {
        cn(this, e), this.key = t.storageName, this.handle = n;
      }

      return ln(e, [{
        key: "get",
        value: function value() {
          return this.handle.getItem(this.key);
        }
      }, {
        key: "getWithKey",
        value: function value(e) {
          return this.handle.getItem(e);
        }
      }, {
        key: "set",
        value: function value(e) {
          return this.handle.setItem(this.key, e);
        }
      }, {
        key: "setWithKey",
        value: function value(e, t) {
          return this.handle.setItem(e, t);
        }
      }, {
        key: "delete",
        value: function value() {
          return this.handle.removeItem(this.key);
        }
      }, {
        key: "deleteWithKey",
        value: function value(e) {
          return this.handle.removeItem(e);
        }
      }]), e;
    }(),
        dn = function (e) {
      tn(n, e);
      var t = rn(n);

      function n(e) {
        return cn(this, n), t.call(this, e, localStorage);
      }

      return n;
    }(fn),
        vn = function (e) {
      tn(n, e);
      var t = rn(n);

      function n(e) {
        return cn(this, n), t.call(this, e, sessionStorage);
      }

      return n;
    }(fn),
        yn = {
      cookie: pn,
      test: un,
      localStorage: dn,
      sessionStorage: vn
    };

    function mn(e, t) {
      var _n4;

      if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (_n4 = gn(e)) || t && e && "number" == typeof e.length) {
          _n4 && (e = _n4);

          var r = 0,
              i = function i() {};

          return {
            s: i,
            n: function n() {
              return r >= e.length ? {
                done: !0
              } : {
                done: !1,
                value: e[r++]
              };
            },
            e: function e(_e6) {
              throw _e6;
            },
            f: i
          };
        }

        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }

      var o,
          a = !0,
          c = !1;
      return {
        s: function s() {
          _n4 = e[Symbol.iterator]();
        },
        n: function n() {
          var e = _n4.next();

          return a = e.done, e;
        },
        e: function e(_e7) {
          c = !0, o = _e7;
        },
        f: function f() {
          try {
            a || null == _n4["return"] || _n4["return"]();
          } finally {
            if (c) throw o;
          }
        }
      };
    }

    function hn(e, t) {
      return function (e) {
        if (Array.isArray(e)) return e;
      }(e) || function (e, t) {
        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
        var n = [],
            r = !0,
            i = !1,
            o = void 0;

        try {
          for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0) {
            ;
          }
        } catch (e) {
          i = !0, o = e;
        } finally {
          try {
            r || null == c["return"] || c["return"]();
          } finally {
            if (i) throw o;
          }
        }

        return n;
      }(e, t) || gn(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }

    function gn(e, t) {
      if (e) {
        if ("string" == typeof e) return bn(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? bn(e, t) : void 0;
      }
    }

    function bn(e, t) {
      (null == t || t > e.length) && (t = e.length);

      for (var n = 0, r = new Array(t); n < t; n++) {
        r[n] = e[n];
      }

      return r;
    }

    function _n(e, t) {
      var n = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, r);
      }

      return n;
    }

    function kn(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? _n(Object(n), !0).forEach(function (t) {
          wn(e, t, n[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _n(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }

      return e;
    }

    function wn(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e;
    }

    function Sn(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    var xn = function () {
      function e(t, n, r) {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), this.config = t, this.store = void 0 !== n ? n : new yn[this.storageMethod](this), void 0 === this.store && (this.store = yn.cookie), this.auxiliaryStore = void 0 !== r ? r : new vn(this), this.consents = this.defaultConsents, this.confirmed = !1, this.changed = !1, this.states = {}, this.initialized = {}, this.executedOnce = {}, this.watchers = new Set([]), this.loadConsents(), this.applyConsents(), this.savedConsents = kn({}, this.consents);
      }

      var t, n, r;
      return t = e, (n = [{
        key: "watch",
        value: function value(e) {
          this.watchers.has(e) || this.watchers.add(e);
        }
      }, {
        key: "unwatch",
        value: function value(e) {
          this.watchers.has(e) && this.watchers["delete"](e);
        }
      }, {
        key: "notify",
        value: function value(e, t) {
          var n = this;
          this.watchers.forEach(function (r) {
            r.update(n, e, t);
          });
        }
      }, {
        key: "getService",
        value: function value(e) {
          var t = this.config.services.filter(function (t) {
            return t.name === e;
          });
          if (t.length > 0) return t[0];
        }
      }, {
        key: "getDefaultConsent",
        value: function value(e) {
          var t = e["default"] || e.required;
          return void 0 === t && (t = this.config["default"]), void 0 === t && (t = !1), t;
        }
      }, {
        key: "changeAll",
        value: function value(e) {
          var t = this,
              n = 0;
          return this.config.services.filter(function (e) {
            return !e.contextualConsentOnly;
          }).map(function (r) {
            r.required || t.config.required || e ? t.updateConsent(r.name, !0) && n++ : t.updateConsent(r.name, !1) && n++;
          }), n;
        }
      }, {
        key: "updateConsent",
        value: function value(e, t) {
          var n = (this.consents[e] || !1) !== t;
          return this.consents[e] = t, this.notify("consents", this.consents), n;
        }
      }, {
        key: "resetConsents",
        value: function value() {
          this.consents = this.defaultConsents, this.states = {}, this.confirmed = !1, this.applyConsents(), this.savedConsents = kn({}, this.consents), this.store["delete"](), this.notify("consents", this.consents);
        }
      }, {
        key: "getConsent",
        value: function value(e) {
          return this.consents[e] || !1;
        }
      }, {
        key: "loadConsents",
        value: function value() {
          var e = this.store.get();
          return null !== e && (this.consents = JSON.parse(decodeURIComponent(e)), this._checkConsents(), this.notify("consents", this.consents)), this.consents;
        }
      }, {
        key: "saveAndApplyConsents",
        value: function value(e) {
          this.saveConsents(e), this.applyConsents();
        }
      }, {
        key: "changedConsents",
        value: function value() {
          for (var e = {}, t = 0, n = Object.entries(this.consents); t < n.length; t++) {
            var r = hn(n[t], 2),
                i = r[0],
                o = r[1];
            this.savedConsents[i] !== o && (e[i] = o);
          }

          return e;
        }
      }, {
        key: "saveConsents",
        value: function value(e) {
          var t = encodeURIComponent(JSON.stringify(this.consents));
          this.store.set(t), this.confirmed = !0, this.changed = !1;
          var n = this.changedConsents();
          this.savedConsents = kn({}, this.consents), this.notify("saveConsents", {
            changes: n,
            consents: this.consents,
            type: e || "script"
          });
        }
      }, {
        key: "applyConsents",
        value: function value(e, t, n) {
          function r(e, t) {
            if (void 0 !== e) return ("function" == typeof e ? e : new Function("opts", e))(t);
          }

          for (var i = 0, o = 0; o < this.config.services.length; o++) {
            var a = this.config.services[o];

            if (void 0 === n || n === a.name) {
              var c = a.vars || {},
                  s = {
                service: a,
                config: this.config,
                vars: c
              };
              this.initialized[a.name] || (this.initialized[a.name] = !0, r(a.onInit, s));
            }
          }

          for (var l = 0; l < this.config.services.length; l++) {
            var u = this.config.services[l];

            if (void 0 === n || n === u.name) {
              var p = this.states[u.name],
                  f = u.vars || {},
                  d = void 0 !== u.optOut ? u.optOut : this.config.optOut || !1,
                  v = void 0 !== u.required ? u.required : this.config.required || !1,
                  y = this.confirmed || d || e || t,
                  m = this.getConsent(u.name) && y || v,
                  h = {
                service: u,
                config: this.config,
                vars: f,
                consents: this.consents,
                confirmed: this.confirmed
              };
              p !== m && i++, e || (r(m ? u.onAccept : u.onDecline, h), this.updateServiceElements(u, m), this.updateServiceStorage(u, m), void 0 !== u.callback && u.callback(m, u), void 0 !== this.config.callback && this.config.callback(m, u), this.states[u.name] = m);
            }
          }

          return this.notify("applyConsents", i, n), i;
        }
      }, {
        key: "updateServiceElements",
        value: function value(e, t) {
          if (t) {
            if (e.onlyOnce && this.executedOnce[e.name]) return;
            this.executedOnce[e.name] = !0;
          }

          for (var n = document.querySelectorAll("[data-name='" + e.name + "']"), r = 0; r < n.length; r++) {
            var i = n[r],
                o = i.parentElement,
                a = Jt(i),
                c = a.type,
                s = a.src,
                l = a.href,
                u = ["href", "src", "type"];
            if ("placeholder" !== c) {
              if ("IFRAME" === i.tagName) {
                if (t && i.src === s) {
                  console.debug("Skipping ".concat(i.tagName, " for service ").concat(e.name, ", as it already has the correct type..."));
                  continue;
                }

                var p,
                    f = document.createElement(i.tagName),
                    d = mn(i.attributes);

                try {
                  for (d.s(); !(p = d.n()).done;) {
                    var v = p.value;
                    f.setAttribute(v.name, v.value);
                  }
                } catch (e) {
                  d.e(e);
                } finally {
                  d.f();
                }

                f.innerText = i.innerText, f.text = i.text, t ? (void 0 !== a["original-display"] && (f.style.display = a["original-display"]), void 0 !== a.src && (f.src = a.src)) : (f.src = "", void 0 !== a["modified-by-klaro"] && void 0 !== a["original-display"] ? f.setAttribute("data-original-display", a["original-display"]) : (void 0 !== i.style.display && f.setAttribute("data-original-display", i.style.display), f.setAttribute("data-modified-by-klaro", "yes")), f.style.display = "none"), o.insertBefore(f, i), o.removeChild(i);
              } else if ("SCRIPT" === i.tagName || "LINK" === i.tagName) {
                if (t && i.type === (c || "") && i.src === s) {
                  console.debug("Skipping ".concat(i.tagName, " for service ").concat(e.name, ", as it already has the correct type or src..."));
                  continue;
                }

                var y,
                    m = document.createElement(i.tagName),
                    h = mn(i.attributes);

                try {
                  for (h.s(); !(y = h.n()).done;) {
                    var g = y.value;
                    m.setAttribute(g.name, g.value);
                  }
                } catch (e) {
                  h.e(e);
                } finally {
                  h.f();
                }

                m.innerText = i.innerText, m.text = i.text, t ? (m.type = c || "", void 0 !== s && (m.src = s), void 0 !== l && (m.href = l)) : m.type = "text/plain", o.insertBefore(m, i), o.removeChild(i);
              } else {
                if (t) {
                  var b,
                      _ = mn(u);

                  try {
                    for (_.s(); !(b = _.n()).done;) {
                      var k = b.value,
                          w = a[k];
                      void 0 !== w && (void 0 === a["original-" + k] && (a["original-" + k] = i[k]), i[k] = w);
                    }
                  } catch (e) {
                    _.e(e);
                  } finally {
                    _.f();
                  }

                  void 0 !== a.title && (i.title = a.title), void 0 !== a["original-display"] ? i.style.display = a["original-display"] : i.style.removeProperty("display");
                } else {
                  void 0 !== a.title && i.removeAttribute("title"), void 0 === a["original-display"] && void 0 !== i.style.display && (a["original-display"] = i.style.display), i.style.display = "none";
                  var S,
                      x = mn(u);

                  try {
                    for (x.s(); !(S = x.n()).done;) {
                      var j = S.value;
                      void 0 !== a[j] && (void 0 !== a["original-" + j] ? i[j] = a["original-" + j] : i.removeAttribute(j));
                    }
                  } catch (e) {
                    x.e(e);
                  } finally {
                    x.f();
                  }
                }

                Yt(a, i);
              }
            } else t ? (i.style.display = "none", a["original-display"] = i.style.display) : i.style.display = a["original-display"] || "block";
          }
        }
      }, {
        key: "updateServiceStorage",
        value: function value(e, t) {
          if (!t && void 0 !== e.cookies && e.cookies.length > 0) for (var n = Vt(), r = 0; r < e.cookies.length; r++) {
            var i = e.cookies[r],
                o = void 0,
                a = void 0;

            if (i instanceof Array) {
              var c = hn(i, 3);
              i = c[0], o = c[1], a = c[2];
            } else if (i instanceof Object && !(i instanceof RegExp)) {
              var s = i;
              i = s.pattern, o = s.path, a = s.domain;
            }

            if (void 0 !== i) {
              i instanceof RegExp || (i = i.startsWith("^") ? new RegExp(i) : new RegExp("^" + i.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&") + "$"));

              for (var l = 0; l < n.length; l++) {
                var u = n[l];
                null !== i.exec(u.name) && (console.debug("Deleting cookie:", u.name, "Matched pattern:", i, "Path:", o, "Domain:", a), $t(u.name, o, a), void 0 === a && $t(u.name, o, "." + window.location.hostname));
              }
            }
          }
        }
      }, {
        key: "_checkConsents",
        value: function value() {
          for (var e = !0, t = new Set(this.config.services.map(function (e) {
            return e.name;
          })), n = new Set(Object.keys(this.consents)), r = 0, i = Object.keys(this.consents); r < i.length; r++) {
            var o = i[r];
            t.has(o) || delete this.consents[o];
          }

          var a,
              c = mn(this.config.services);

          try {
            for (c.s(); !(a = c.n()).done;) {
              var s = a.value;
              n.has(s.name) || (this.consents[s.name] = this.getDefaultConsent(s), e = !1);
            }
          } catch (e) {
            c.e(e);
          } finally {
            c.f();
          }

          this.confirmed = e, e || (this.changed = !0);
        }
      }, {
        key: "storageMethod",
        get: function get() {
          return this.config.storageMethod || "cookie";
        }
      }, {
        key: "storageName",
        get: function get() {
          return this.config.storageName || this.config.cookieName || "klaro";
        }
      }, {
        key: "cookieDomain",
        get: function get() {
          return this.config.cookieDomain || void 0;
        }
      }, {
        key: "cookiePath",
        get: function get() {
          return this.config.cookiePath || void 0;
        }
      }, {
        key: "cookieExpiresAfterDays",
        get: function get() {
          return this.config.cookieExpiresAfterDays || 120;
        }
      }, {
        key: "defaultConsents",
        get: function get() {
          for (var e = {}, t = 0; t < this.config.services.length; t++) {
            var n = this.config.services[t];
            e[n.name] = this.getDefaultConsent(n);
          }

          return e;
        }
      }]) && Sn(t.prototype, n), r && Sn(t, r), e;
    }();

    n(179);

    function jn(e, t) {
      var n = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, r);
      }

      return n;
    }

    function On(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? jn(Object(n), !0).forEach(function (t) {
          An(e, t, n[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : jn(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }

      return e;
    }

    function An(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e;
    }

    function Pn(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    var zn = function () {
      function e(t, n, r) {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), this.url = t, this.id = n, this.opts = Object.assign({}, r);
      }

      var t, n, r;
      return t = e, (n = [{
        key: "getLocationData",
        value: function value(e) {
          var t = e.records || {};
          return {
            pathname: void 0 === t.savePathname || t.savePathname ? location.pathname : void 0,
            port: "" !== location.port ? parseInt(location.port) : 0,
            hostname: location.hostname,
            protocol: location.protocol.slice(0, location.protocol.length - 1)
          };
        }
      }, {
        key: "getUserData",
        value: function value() {
          return {
            client_version: pr(),
            client_name: "klaro:web"
          };
        }
      }, {
        key: "getBaseConsentData",
        value: function value(e) {
          return {
            location_data: this.getLocationData(e),
            user_data: this.getUserData(e)
          };
        }
      }, {
        key: "update",
        value: function value(e, t, n) {
          if ("saveConsents" === t) {
            if ("save" === n.type && 0 === Object.keys(n.changes).length) return;
            var r = On(On({}, this.getBaseConsentData(e.config)), {}, {
              consent_data: {
                consents: n.consents,
                changes: "save" === n.type ? n.changes : void 0,
                type: n.type,
                config: e.config.id
              }
            });
            this.submitConsentData(r);
          } else if ("showNotice" === t) {
            var i = On(On({}, this.getBaseConsentData(n.config)), {}, {
              consent_data: {
                consents: {},
                changes: {},
                type: "show",
                config: n.config.id
              }
            });
            this.submitConsentData(i);
          }
        }
      }, {
        key: "apiRequest",
        value: function value(e, t, n, r) {
          var i = this;
          return new Promise(function (o, a) {
            var c,
                s,
                l = new XMLHttpRequest();
            l.addEventListener("load", function () {
              var e = JSON.parse(l.response);
              l.status < 200 || l.status >= 300 ? (e.status = l.status, a(e)) : o(e, l.status);
            }), l.addEventListener("error", function () {
              a({
                status: 0,
                xhr: l
              });
            }), void 0 !== n && ("GET" === e ? t += "?" + (s = n, "?" + Object.keys(s).map(function (e) {
              return e + "=" + encodeURIComponent(s[e]);
            }).join("&")) : c = JSON.stringify(n)), l.open(e, i.url + t), void 0 !== c && l.setRequestHeader("Content-Type", r || "application/json;charset=UTF-8"), l.send(c);
          });
        }
      }, {
        key: "submitConsentData",
        value: function value(e) {
          return this.apiRequest("POST", "/v1/privacy-managers/" + this.id + "/submit", e, "text/plain;charset=UTF-8");
        }
      }, {
        key: "loadConfig",
        value: function value(e) {
          return this.apiRequest("GET", "/v1/privacy-managers/" + this.id + "/config.json?name=" + e + (this.opts.testing ? "&testing=true" : ""));
        }
      }, {
        key: "loadConfigs",
        value: function value() {
          return this.apiRequest("GET", "/v1/privacy-managers/" + this.id + "/configs.json" + (this.opts.testing ? "&testing=true" : ""));
        }
      }]) && Pn(t.prototype, n), r && Pn(t, r), e;
    }();

    function En(e, t) {
      return function (e) {
        if (Array.isArray(e)) return e;
      }(e) || function (e, t) {
        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
        var n = [],
            r = !0,
            i = !1,
            o = void 0;

        try {
          for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0) {
            ;
          }
        } catch (e) {
          i = !0, o = e;
        } finally {
          try {
            r || null == c["return"] || c["return"]();
          } finally {
            if (i) throw o;
          }
        }

        return n;
      }(e, t) || Cn(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }

    function Cn(e, t) {
      if (e) {
        if ("string" == typeof e) return Dn(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Dn(e, t) : void 0;
      }
    }

    function Dn(e, t) {
      (null == t || t > e.length) && (t = e.length);

      for (var n = 0, r = new Array(t); n < t; n++) {
        r[n] = e[n];
      }

      return r;
    }

    function Tn(e, t, n) {
      if (void 0 !== e.styling) {
        var r = Object.assign({}, e.styling);

        if (void 0 !== r.theme) {
          var i = r.theme;
          i instanceof Array || (i = [i]), r = {};

          var o,
              a = function (e, t) {
            var _n5;

            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
              if (Array.isArray(e) || (_n5 = Cn(e)) || t && e && "number" == typeof e.length) {
                _n5 && (e = _n5);

                var r = 0,
                    i = function i() {};

                return {
                  s: i,
                  n: function n() {
                    return r >= e.length ? {
                      done: !0
                    } : {
                      done: !1,
                      value: e[r++]
                    };
                  },
                  e: function e(_e8) {
                    throw _e8;
                  },
                  f: i
                };
              }

              throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }

            var o,
                a = !0,
                c = !1;
            return {
              s: function s() {
                _n5 = e[Symbol.iterator]();
              },
              n: function n() {
                var e = _n5.next();

                return a = e.done, e;
              },
              e: function e(_e9) {
                c = !0, o = _e9;
              },
              f: function f() {
                try {
                  a || null == _n5["return"] || _n5["return"]();
                } finally {
                  if (c) throw o;
                }
              }
            };
          }(i);

          try {
            for (a.s(); !(o = a.n()).done;) {
              var c = t[o.value];
              if (void 0 !== c) for (var s = 0, l = Object.entries(c); s < l.length; s++) {
                var u = En(l[s], 2),
                    p = u[0],
                    f = u[1];
                p.startsWith("_") || (r[p] = f);
              }
            }
          } catch (e) {
            a.e(e);
          } finally {
            a.f();
          }

          for (var d = 0, v = Object.entries(e.styling); d < v.length; d++) {
            var y = En(v[d], 2),
                m = y[0],
                h = y[1];
            "theme" !== m && (r[m] = h);
          }
        }

        void 0 === n && (n = document.documentElement);

        for (var g = 0, b = Object.entries(r); g < b.length; g++) {
          var _ = En(b[g], 2),
              k = _[0],
              w = _[1];

          n.style.setProperty("--" + k, w);
        }

        window.document.documentMode && n === document.documentElement && Xt(r);
      }
    }

    function In(e, t) {
      var _n6;

      if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (_n6 = function (e, t) {
          if (!e) return;
          if ("string" == typeof e) return Rn(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === n && e.constructor && (n = e.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(e);
          if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Rn(e, t);
        }(e)) || t && e && "number" == typeof e.length) {
          _n6 && (e = _n6);

          var r = 0,
              i = function i() {};

          return {
            s: i,
            n: function n() {
              return r >= e.length ? {
                done: !0
              } : {
                done: !1,
                value: e[r++]
              };
            },
            e: function e(_e10) {
              throw _e10;
            },
            f: i
          };
        }

        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }

      var o,
          a = !0,
          c = !1;
      return {
        s: function s() {
          _n6 = e[Symbol.iterator]();
        },
        n: function n() {
          var e = _n6.next();

          return a = e.done, e;
        },
        e: function e(_e11) {
          c = !0, o = _e11;
        },
        f: function f() {
          try {
            a || null == _n6["return"] || _n6["return"]();
          } finally {
            if (c) throw o;
          }
        }
      };
    }

    function Rn(e, t) {
      (null == t || t > e.length) && (t = e.length);

      for (var n = 0, r = new Array(t); n < t; n++) {
        r[n] = e[n];
      }

      return r;
    }

    function Nn(e) {
      for (var t = new Map([]), n = 0, r = Object.keys(e); n < r.length; n++) {
        var i = r[n],
            o = e[i];
        "string" == typeof i && ("string" == typeof o || null === o ? t.set(i, o) : t.set(i, Nn(o)));
      }

      return t;
    }

    function Mn(e, t, n, r) {
      var i = function i(e, t, n) {
        if (n instanceof Map) {
          var r = new Map([]);
          Mn(r, n, !0, !1), e.set(t, r);
        } else e.set(t, n);
      };

      if (!(t instanceof Map && e instanceof Map)) throw new Error("Parameters are not maps!");
      void 0 === n && (n = !0), void 0 === r && (r = !1), r && (e = new e.constructor(e));
      var o,
          a = In(t.keys());

      try {
        for (a.s(); !(o = a.n()).done;) {
          var c = o.value,
              s = t.get(c),
              l = e.get(c);
          if (e.has(c)) {
            if (s instanceof Map && l instanceof Map) e.set(c, Mn(l, s, n, r));else {
              if (!n) continue;
              i(e, c, s);
            }
          } else i(e, c, s);
        }
      } catch (e) {
        a.e(e);
      } finally {
        a.f();
      }

      return e;
    }

    var qn,
        Un = {
      top: {
        _meta: {
          incompatibleWith: ["bottom"]
        },
        "notice-top": "20px",
        "notice-bottom": "auto"
      },
      bottom: {
        _meta: {
          incompatibleWith: ["top"]
        },
        "notice-bottom": "20px",
        "notice-top": "auto"
      },
      left: {
        _meta: {
          incompatibleWith: ["wide"]
        },
        "notice-left": "20px",
        "notice-right": "auto"
      },
      right: {
        _meta: {
          incompatibleWith: ["wide"]
        },
        "notice-right": "20px",
        "notice-left": "auto"
      },
      wide: {
        "notice-left": "20px",
        "notice-right": "auto",
        "notice-max-width": "calc(100vw - 60px)",
        "notice-position": "fixed"
      },
      light: {
        "button-text-color": "#fff",
        dark1: "#fafafa",
        dark2: "#777",
        dark3: "#555",
        light1: "#444",
        light2: "#666",
        light3: "#111",
        green3: "#f00"
      }
    };
    n(185);

    function Ln(e, t) {
      var n = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, r);
      }

      return n;
    }

    function Fn(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? Ln(Object(n), !0).forEach(function (t) {
          Hn(e, t, n[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ln(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }

      return e;
    }

    function Hn(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e;
    }

    function Wn(e) {
      return function (e) {
        if (Array.isArray(e)) return Vn(e);
      }(e) || function (e) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
      }(e) || Kn(e) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }

    function Bn(e, t) {
      var _n7;

      if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (_n7 = Kn(e)) || t && e && "number" == typeof e.length) {
          _n7 && (e = _n7);

          var r = 0,
              i = function i() {};

          return {
            s: i,
            n: function n() {
              return r >= e.length ? {
                done: !0
              } : {
                done: !1,
                value: e[r++]
              };
            },
            e: function e(_e12) {
              throw _e12;
            },
            f: i
          };
        }

        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }

      var o,
          a = !0,
          c = !1;
      return {
        s: function s() {
          _n7 = e[Symbol.iterator]();
        },
        n: function n() {
          var e = _n7.next();

          return a = e.done, e;
        },
        e: function e(_e13) {
          c = !0, o = _e13;
        },
        f: function f() {
          try {
            a || null == _n7["return"] || _n7["return"]();
          } finally {
            if (c) throw o;
          }
        }
      };
    }

    function Kn(e, t) {
      if (e) {
        if ("string" == typeof e) return Vn(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Vn(e, t) : void 0;
      }
    }

    function Vn(e, t) {
      (null == t || t > e.length) && (t = e.length);

      for (var n = 0, r = new Array(t); n < t; n++) {
        r[n] = e[n];
      }

      return r;
    }

    var $n = new Map([]),
        Gn = {},
        Zn = {};

    function Qn(e, t) {
      return (e.elementID || "klaro") + (t ? "-ide" : "");
    }

    function Jn(e, t) {
      var n = Qn(e, t),
          r = document.getElementById(n);
      return null === r && ((r = document.createElement("div")).id = n, document.body.appendChild(r)), r;
    }

    function Yn(e, t) {
      if (void 0 === Gn[e] ? Gn[e] = [t] : Gn[e].push(t), void 0 !== Zn[e]) {
        var n,
            r = Bn(Zn[e]);

        try {
          for (r.s(); !(n = r.n()).done;) {
            var i = n.value;
            if (!1 === t.apply(void 0, Wn(i))) break;
          }
        } catch (e) {
          r.e(e);
        } finally {
          r.f();
        }
      }
    }

    function Xn(e) {
      for (var t = Gn[e], n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) {
        r[i - 1] = arguments[i];
      }

      if (void 0 === Zn[e] ? Zn[e] = [r] : Zn[e].push(r), void 0 !== t) {
        var o,
            a = Bn(t);

        try {
          for (a.s(); !(o = a.n()).done;) {
            var c = o.value;
            if (!0 === c.apply(void 0, r)) return !0;
          }
        } catch (e) {
          a.e(e);
        } finally {
          a.f();
        }
      }
    }

    function er(e) {
      var t = new Map([]);
      return Mn(t, $n), Mn(t, Nn(e.translations || {})), t;
    }

    var tr = 1;

    function nr(e, t) {
      if (void 0 !== e) {
        t = t || {}, Xn("render", e = or(e), t);
        var n = 0;
        t.show && (n = tr++);
        var r = Jn(e),
            i = ur(e);
        void 0 !== t.api && i.watch(t.api), Tn(e, Un, r);

        var o = Ae(e),
            a = er(e),
            c = function c() {
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) {
            n[r] = arguments[r];
          }

          return ze.apply(void 0, [a, o, e.fallbackLang || "zz"].concat(n));
        },
            s = fe(he(Ht, {
          t: c,
          lang: o,
          manager: i,
          config: e,
          testing: t.testing,
          modal: t.modal,
          api: t.api,
          show: n
        }), r);

        return rr(i, c, o, e, t), s;
      }
    }

    function rr(e, t, n, r, i) {
      var o,
          a = [],
          c = Bn(r.services);

      try {
        for (c.s(); !(o = c.n()).done;) {
          var s,
              l = o.value,
              u = e.getConsent(l.name) && e.confirmed,
              p = Bn(document.querySelectorAll("[data-name='" + l.name + "']"));

          try {
            for (p.s(); !(s = p.n()).done;) {
              var f = s.value,
                  d = Jt(f);

              if ("placeholder" !== d.type && ("IFRAME" === f.tagName || "DIV" === f.tagName)) {
                var v = f.previousElementSibling;

                if (null !== v) {
                  var y = Jt(v);
                  "placeholder" === y.type && y.name === l.name || (v = null);
                }

                if (null === v) {
                  (v = document.createElement("DIV")).style.maxWidth = f.width + "px", v.style.height = f.height + "px", Yt({
                    type: "placeholder",
                    name: l.name
                  }, v), u && (v.style.display = "none"), f.parentElement.insertBefore(v, f);
                  var m = fe(he(Kt, {
                    t: t,
                    lang: n,
                    manager: e,
                    config: r,
                    service: l,
                    style: d.style,
                    testing: i.testing,
                    api: i.api
                  }), v);
                  a.push(m);
                }

                "IFRAME" === f.tagName && (d.src = f.src), void 0 === d["modified-by-klaro"] && void 0 === f.style.display && (d["original-display"] = f.style.display), d["modified-by-klaro"] = "yes", Yt(d, f), u || (f.src = "", f.style.display = "none");
              }
            }
          } catch (e) {
            p.e(e);
          } finally {
            p.f();
          }
        }
      } catch (e) {
        c.e(e);
      } finally {
        c.f();
      }

      return a;
    }

    function ir(e) {
      /complete|interactive|loaded/.test(document.readyState) ? e() : window.addEventListener("DOMContentLoaded", e);
    }

    function or(e) {
      var t = Fn({}, e);
      return 2 === t.version || (void 0 !== t.apps && void 0 === t.services && (t.services = t.apps, console.warn("Warning, your configuration file is outdated. Please change `apps` to `services`"), delete t.apps), void 0 !== t.translations && void 0 !== t.translations.apps && void 0 === t.services && (t.translations.services = t.translations.apps, console.warn("Warning, your configuration file is outdated. Please change `apps` to `services` in the `translations` key"), delete t.translations.apps)), t;
    }

    function ar(e) {
      if (void 0 !== window) {
        var t = function (e) {
          if (null !== document.currentScript && void 0 !== document.currentScript) return document.currentScript;

          for (var t = document.getElementsByTagName("script"), n = 0; n < t.length; n++) {
            var r = t[n];
            if (r.src.includes(e)) return r;
          }

          return null;
        }("klaro"),
            n = new Map(decodeURI(location.hash.slice(1)).split("&").map(function (e) {
          return e.split("=");
        }).map(function (e) {
          return 1 === e.length ? [e[0], !0] : e;
        })),
            r = n.get("klaro-testing"),
            i = function i(e) {
          var t = Fn(Fn({}, e), {}, {
            testing: r
          });
          qn.noAutoLoad || qn.testing && !t.testing || nr(qn, t);
        };

        if (void 0 !== e) qn = e, ir(function () {
          return i({});
        });else if (null !== t) {
          var o = function (e) {
            var t = e.getAttribute("data-klaro-id");
            if (null !== t) return t;
            var n = /.*\/privacy-managers\/([a-f0-9]+)\/klaro.*\.js/.exec(e.src);
            return null !== n ? n[1] : null;
          }(t),
              a = function (e) {
            var t = e.getAttribute("data-klaro-api-url");
            if (null !== t) return t;
            var n = /(http(?:s)?:\/\/[^/]+)\/v1\/privacy-managers\/([a-f0-9]+)\/klaro.*\.js/.exec(e.src);
            return null !== n ? n[1] : null;
          }(t),
              c = function (e, t) {
            if (e.has("klaro-config")) return e.get("klaro-config");
            var n = t.getAttribute("data-klaro-config");
            return null !== n ? n : "default";
          }(n, t);

          if (null !== o) {
            var s = new zn(a, o, {
              testing: r
            });

            if (void 0 !== window.klaroApiConfigs) {
              if (!0 === Xn("apiConfigsLoaded", window.klaroApiConfigs, s)) return;
              var l = window.klaroApiConfigs.find(function (e) {
                return e.name === c && ("active" === e.status || r);
              });
              void 0 !== l ? (qn = l, ir(function () {
                return i({
                  api: s
                });
              })) : Xn("apiConfigsFailed", {});
            } else s.loadConfig(c).then(function (e) {
              !0 !== Xn("apiConfigsLoaded", [e], s) && (qn = e, ir(function () {
                return i({
                  api: s
                });
              }));
            })["catch"](function (e) {
              console.error(e, "cannot load Klaro configs"), Xn("apiConfigsFailed", e);
            });
          } else {
            var u = t.getAttribute("data-klaro-config") || "klaroConfig";
            void 0 !== (qn = window[u]) && ir(function () {
              return i({});
            });
          }
        }
        n.has("klaro-ide") && function (e) {
          var t = /^(.*)(\/[^/]+)$/.exec(e.src)[1] || "",
              n = document.createElement("script");
          n.src = "" !== t ? t + "/ide.js" : "ide.js", n.type = "application/javascript";
          var r,
              i = Bn(n.attributes);

          try {
            for (i.s(); !(r = i.n()).done;) {
              var o = r.value;
              n.setAttribute(o.name, o.value);
            }
          } catch (e) {
            i.e(e);
          } finally {
            i.f();
          }

          document.head.appendChild(n);
        }(t);
      }
    }

    function cr(e, t, n) {
      return nr(e = e || qn, {
        show: !0,
        modal: t,
        api: n
      }), !1;
    }

    var sr = {};

    function lr() {
      for (var e in Object.keys(sr)) {
        delete sr[e];
      }
    }

    function ur(e) {
      var t = (e = e || qn).storageName || e.cookieName || "default";
      return void 0 === sr[t] && (sr[t] = new xn(or(e))), sr[t];
    }

    function pr() {
      return "v" === "v0.7.18"[0] ? "v0.7.18".slice(1) : "v0.7.18";
    }

    var fr = n(135),
        dr = n.n(fr),
        vr = n(136),
        yr = n.n(vr),
        mr = n(137),
        hr = n.n(mr),
        gr = n(138),
        br = n.n(gr),
        _r = n(139),
        kr = n.n(_r),
        wr = n(140),
        Sr = n.n(wr),
        xr = n(141),
        jr = n.n(xr),
        Or = n(142),
        Ar = n.n(Or),
        Pr = n(143),
        zr = n.n(Pr),
        Er = n(144),
        Cr = n.n(Er),
        Dr = n(145),
        Tr = n.n(Dr),
        Ir = n(146),
        Rr = n.n(Ir),
        Nr = n(147),
        Mr = n.n(Nr),
        qr = n(148),
        Ur = n.n(qr),
        Lr = n(149),
        Fr = n.n(Lr),
        Hr = n(150),
        Wr = n.n(Hr),
        Br = n(151),
        Kr = n.n(Br),
        Vr = n(152),
        $r = n.n(Vr),
        Gr = n(153),
        Zr = n.n(Gr),
        Qr = n(154),
        Jr = n.n(Qr),
        Yr = n(155),
        Xr = n.n(Yr),
        ei = n(156),
        ti = n.n(ei),
        ni = n(157),
        ri = n.n(ni),
        ii = n(158),
        oi = n.n(ii),
        ai = Nn({
      ca: hr.a,
      cs: br.a,
      da: kr.a,
      de: Sr.a,
      el: jr.a,
      en: Ar.a,
      zh: dr.a,
      pt: yr.a,
      es: zr.a,
      fi: Cr.a,
      fr: Tr.a,
      gl: Rr.a,
      hu: Mr.a,
      hr: Ur.a,
      it: Fr.a,
      nl: Wr.a,
      no: Kr.a,
      ro: $r.a,
      sr: Zr.a,
      sr_cyrl: Jr.a,
      sv: Xr.a,
      tr: ti.a,
      pl: ri.a,
      ru: oi.a
    });

    Mn($n, ai), ar();
  }]);
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./js/klaro.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=klaro.js.map