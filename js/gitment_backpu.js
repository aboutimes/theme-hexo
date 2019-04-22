var Gitment = function(F) {
    function d(t) {
      if (v[t]) return v[t].exports;
      var z = v[t] = {
        i: t,
        l: !1,
        exports: {}
      };
      F[t].call(z.exports, z, z.exports, d);
      z.l = !0;
      return z.exports
    }
    var v = {};
    d.m = F;
    d.c = v;
    d.i = function(d) {
      return d
    };
    d.d = function(t, z, v) {
      d.o(t, z) || Object.defineProperty(t, z, {
        configurable: !1,
        enumerable: !0,
        get: v
      })
    };
    d.n = function(t) {
      var z = t && t.__esModule ?
      function() {
        return t["default"]
      } : function() {
        return t
      };
      d.d(z, "a", z);
      return z
    };
    d.o = function(d, z) {
      return Object.prototype.hasOwnProperty.call(d, z)
    };
    d.p = "";
    return d(d.s = 5)
  }([function(F, d, v) {
    Object.defineProperty(d, "__esModule", {
      value: !0
    });
    d.LS_ACCESS_TOKEN_KEY = "gitment-comments-token";
    d.LS_USER_KEY = "gitment-user-info";
    d.NOT_INITIALIZED_ERROR = Error("Comments Not Initialized")
  }, function(F, d, v) {
    (function(t) {
      function z(a) {
        return function(b, c, f) {
          return f && "function" === typeof f.value ? (f.value = pa(a, f.value), f.enumerable = !1, f.configurable = !0, f) : Mb(a).apply(this, arguments)
        }
      }
      function v(a) {
        return "function" === typeof a && !0 === a.isMobxAction
      }
      function u(a, b, c) {
        var f = function() {
            return Aa(b, c, a, arguments)
          };
        f.isMobxAction = !0;
        N(a, b, f)
      }
      function n(a, b, c) {
        function f() {
          l(e)
        }
        if ("string" === typeof a) {
          var g = a,
            l = b;
          a = c
        } else g = a.name || "Autorun@" + C(), l = a, a = b;
        r("function" === typeof l, w.m004);
        r(!1 === v(l), w.m005);
        a && (l = l.bind(a));
        var e = new qa(g, function() {
          this.track(f)
        });
        e.schedule();
        return e.getDisposer()
      }
      function h(a) {
        return Ba(function(b, c, f, g, l) {
          r("undefined" !== typeof l, w.m009);
          r("function" === typeof l.get, w.m010);
          b = ia(b, "");
          $a(b, c, l.get, l.set, a, !1)
        }, function(a) {
          a = this.$mobx.values[a];
          if (void 0 !== a) return a.get()
        }, function(a, c) {
          this.$mobx.values[a].set(c)
        }, !1, !1)
      }
      function A(a) {
        for (var b = [], c = 1; c < arguments.length; c++) b[c - 1] = arguments[c];
        return e(a, O, b)
      }
      function k(a) {
        for (var b = [], c = 1; c < arguments.length; c++) b[c - 1] = arguments[c];
        return e(a, P, b)
      }
      function e(a, b, c) {
        r(2 <= arguments.length, w.m014);
        r("object" === ("undefined" === typeof a ? "undefined" : D(a)), w.m015);
        r(!J(a), w.m016);
        c.forEach(function(a) {
          r("object" === ("undefined" === typeof a ? "undefined" : D(a)), w.m017);
          r(!p(a), w.m018)
        });
        for (var f = ia(a), g = {}, l = c.length - 1; 0 <= l; l--) {
          var e = c[l],
            d;
          for (d in e) if (!0 !== g[d] && Ca.call(e, d) && (g[d] = !0, a !== e || ab(a, d))) {
            var k = Object.getOwnPropertyDescriptor(e, d);
            Ob(f, d, k, b)
          }
        }
        return a
      }
      function x(a) {
        var b = {
          name: a.name
        };
        a.observing && 0 < a.observing.length && (b.dependencies = Da(a.observing).map(x));
        return b
      }
      function q(a) {
        var b = {
          name: a.name
        };
        a.observers && 0 < a.observers.length && (b.observers = a.observers.map(q));
        return b
      }
      function p(a, b) {
        if (null === a || void 0 === a) return !1;
        if (void 0 !== b) {
          if (X(a) || J(a)) throw Error(w.m019);
          return L(a) ? (a = a.$mobx, a.values && !! a.values[b]) : !1
        }
        return L(a) || !! a.$mobx || La(a) || ja(a) || Y(a)
      }
      function Q(a) {
        G("Expected one or two arguments to observable." + a + ". Did you accidentally try to use observable." + a + " as decorator?")
      }
      function R(a) {
        r( !! a, ":(");
        return Ba(function(b, c, f, g, l) {
          Ma(b, c);
          r(!l || !l.get, w.m022);
          b = ia(b, void 0);
          Na(b, c, f, a)
        }, function(a) {
          a = this.$mobx.values[a];
          if (void 0 !== a) return a.get()
        }, function(a, c) {
          bb(this, a, c)
        }, !0, !1)
      }
      function ra(a, b, c) {
        function f(f) {
          b && c.push([a, f]);
          return f
        }
        void 0 === b && (b = !0);
        void 0 === c && (c = []);
        if (p(a)) {
          b && null === c && (c = []);
          if (b && null !== a && "object" === ("undefined" === typeof a ? "undefined" : D(a))) for (var g = 0, l = c.length; g < l; g++) if (c[g][0] === a) return c[g][1];
          if (X(a)) {
            var e = f([]),
              d = a.map(function(a) {
                return ra(a, b, c)
              });
            e.length = d.length;
            g = 0;
            for (l = d.length; g < l; g++) e[g] = d[g];
            return e
          }
          if (L(a)) {
            e = f({});
            for (d in a) e[d] = ra(a[d], b, c);
            return e
          }
          if (J(a)) {
            var k = f({});
            a.forEach(function(a, f) {
              return k[f] = ra(a, b, c)
            });
            return k
          }
          if (cb(a)) return ra(a.get(), b, c)
        }
        return a
      }
      function ka(a, b) {
        return Aa("", a)
      }
      function db(a) {
        console.log(a);
        return a
      }
      function pa(a, b) {
        r("function" === typeof b, w.m026);
        r("string" === typeof a && 0 < a.length, "actions should have valid names, got: '" + a + "'");
        var c = function() {
            return Aa(a, b, this, arguments)
          };
        c.originalFn = b;
        c.isMobxAction = !0;
        return c
      }
      function Aa(a, b, c, f) {
        var g = E() && !! a,
          l = 0;
        if (g) {
          l = Date.now();
          var e = f && f.length || 0,
            d = Array(e);
          if (0 < e) for (var k = 0; k < e; k++) d[k] = f[k];
          H({
            type: "action",
            name: a,
            fn: b,
            object: c,
            arguments: d
          })
        }
        a = Z();
        m.inBatch++;
        e = eb(!0);
        try {
          return b.apply(c, f)
        } finally {
          m.allowStateChanges = e, aa(), m.trackingDerivation = a, g && I({
            time: Date.now() - l
          })
        }
      }
      function eb(a) {
        var b = m.allowStateChanges;
        m.allowStateChanges = a;
        return b
      }
      function Oa(a) {
        switch (a.dependenciesState) {
        case y.UP_TO_DATE:
          return !1;
        case y.NOT_TRACKING:
        case y.STALE:
          return !0;
        case y.POSSIBLY_STALE:
          for (var b = Z(), c = a.observing, f = c.length, g = 0; g < f; g++) {
            var l = c[g];
            if (Y(l)) {
              try {
                l.get()
              } catch (ec) {
                return m.trackingDerivation = b, !0
              }
              if (a.dependenciesState === y.STALE) return m.trackingDerivation = b, !0
            }
          }
          fb(a);
          m.trackingDerivation = b;
          return !1
        }
      }
      function gb() {
        return null !== m.trackingDerivation
      }
      function Pa(a) {
        var b = 0 < a.observers.length;
        0 < m.computationDepth && b && G(w.m031 + a.name);
        !m.allowStateChanges && b && G(w[m.strictMode ? "m030a" : "m030b"] + a.name)
      }
      function hb(a, b, c) {
        fb(a);
        a.newObserving = Array(a.observing.length + 100);
        a.unboundDepsCount = 0;
        a.runId = ++m.runId;
        var f = m.trackingDerivation;
        m.trackingDerivation = a;
        try {
          var g = b.call(c)
        } catch (Nb) {
          g = new la(Nb)
        }
        m.trackingDerivation = f;
        f = a.observing;
        b = a.observing = a.newObserving;
        a.newObserving = null;
        c = 0;
        for (var l = a.unboundDepsCount, e = 0; e < l; e++) {
          var d = b[e];
          0 === d.diffValue && (d.diffValue = 1, c !== e && (b[c] = d), c++)
        }
        b.length = c;
        for (l = f.length; l--;) d = f[l], 0 === d.diffValue && ib(d, a), d.diffValue = 0;
        for (; c--;) d = b[c], 1 === d.diffValue && (d.diffValue = 0, f = d, l = a, (e = f.observers.length) && (f.observersIndexes[l.__mapid] = e), f.observers[e] = l, f.lowestObserverState > l.dependenciesState && (f.lowestObserverState = l.dependenciesState));
        return g
      }
      function Qa(a) {
        for (var b = a.observing, c = b.length; c--;) ib(b[c], a);
        a.dependenciesState = y.NOT_TRACKING;
        b.length = 0
      }
      function jb(a) {
        var b = Z();
        a = a();
        m.trackingDerivation = b;
        return a
      }
      function Z() {
        var a = m.trackingDerivation;
        m.trackingDerivation = null;
        return a
      }
      function fb(a) {
        if (a.dependenciesState !== y.UP_TO_DATE) {
          a.dependenciesState = y.UP_TO_DATE;
          a = a.observing;
          for (var b = a.length; b--;) a[b].lowestObserverState = y.UP_TO_DATE
        }
      }
      function ib(a, b) {
        if (1 === a.observers.length) a.observers.length = 0, a.isPendingUnobservation || (a.isPendingUnobservation = !0, m.pendingUnobservations.push(a));
        else {
          var c = a.observers;
          a = a.observersIndexes;
          var f = c.pop();
          if (f !== b) {
            var g = a[b.__mapid] || 0;
            g ? a[f.__mapid] = g : delete a[f.__mapid];
            c[g] = f
          }
          delete a[b.__mapid]
        }
      }
      function aa() {
        if (0 === --m.inBatch) {
          0 < m.inBatch || m.isRunningReactions || Ea(kb);
          for (var a = m.pendingUnobservations, b = 0; b < a.length; b++) {
            var c = a[b];
            c.isPendingUnobservation = !1;
            if (0 === c.observers.length) c.onBecomeUnobserved()
          }
          m.pendingUnobservations = []
        }
      }
      function lb(a) {
        var b = m.trackingDerivation;
        null !== b ? b.runId !== a.lastAccessedBy && (a.lastAccessedBy = b.runId, b.newObserving[b.unboundDepsCount++] = a) : 0 === a.observers.length && (a.isPendingUnobservation || (a.isPendingUnobservation = !0, m.pendingUnobservations.push(a)))
      }
      function Pb(a) {
        r(this && this.$mobx && ja(this.$mobx), "Invalid `this`");
        r(!this.$mobx.errorHandler, "Only one onErrorHandler can be registered");
        this.$mobx.errorHandler = a
      }
      function kb() {
        m.isRunningReactions = !0;
        for (var a = m.pendingReactions, b = 0; 0 < a.length;) {
          ++b === mb && (console.error("Reaction doesn't converge to a stable state after " + mb + " iterations." + (" Probably there is a cycle in the reactive function: " + a[0])), a.splice(0));
          for (var c = a.splice(0), f = 0, g = c.length; f < g; f++) c[f].runReaction()
        }
        m.isRunningReactions = !1
      }
      function E() {
        return !!m.spyListeners.length
      }
      function S(a) {
        if (m.spyListeners.length) for (var b = m.spyListeners, c = 0, f = b.length; c < f; c++) b[c](a)
      }
      function H(a) {
        a = nb({}, a, {
          spyReportStart: !0
        });
        S(a)
      }
      function I(a) {
        a ? S(nb({}, a, ob)) : S(ob)
      }
      function ba(a) {
        return a.interceptors && 0 < a.interceptors.length
      }
      function Fa(a, b) {
        var c = a.interceptors || (a.interceptors = []);
        c.push(b);
        return Ra(function() {
          var a = c.indexOf(b); - 1 !== a && c.splice(a, 1)
        })
      }
      function ca(a, b) {
        var c = Z();
        try {
          var f = a.interceptors;
          if (f) {
            a = 0;
            for (var g = f.length; a < g && (b = f[a](b), r(!b || b.type, "Intercept handlers should return nothing or a change object"), b); a++);
          }
          return b
        } finally {
          m.trackingDerivation = c
        }
      }
      function T(a) {
        return a.changeListeners && 0 < a.changeListeners.length
      }
      function Ga(a, b) {
        var c = a.changeListeners || (a.changeListeners = []);
        c.push(b);
        return Ra(function() {
          var a = c.indexOf(b); - 1 !== a && c.splice(a, 1)
        })
      }
      function U(a, b) {
        var c = Z();
        if (a = a.changeListeners) {
          a = a.slice();
          for (var f = 0, g = a.length; f < g; f++) a[f](b);
          m.trackingDerivation = c
        }
      }
      function da(a) {
        return "object" === ("undefined" === typeof a ? "undefined" : D(a)) && null !== a && !0 === a.isMobxModifierDescriptor
      }
      function sa(a, b) {
        r(!da(b), "Modifiers cannot be nested");
        return {
          isMobxModifierDescriptor: !0,
          initialValue: b,
          enhancer: a
        }
      }
      function O(a, b, c) {
        da(a) && G("You tried to assign a modifier wrapped value to a collection, please define modifiers when creating the collection, not when modifying it");
        return p(a) ? a : Array.isArray(a) ? B.array(a, c) : ta(a) ? B.object(a, c) : ua(a) ? B.map(a, c) : a
      }
      function pb(a, b, c) {
        da(a) && G("You tried to assign a modifier wrapped value to a collection, please define modifiers when creating the collection, not when modifying it");
        return void 0 === a || null === a || L(a) || X(a) || J(a) ? a : Array.isArray(a) ? B.shallowArray(a, c) : ta(a) ? B.shallowObject(a, c) : ua(a) ? B.shallowMap(a, c) : G("The shallow modifier / decorator can only used in combination with arrays, objects and maps")
      }
      function P(a) {
        return a
      }
      function va(a, b, c) {
        return V(a, b) ? b : p(a) ? a : Array.isArray(a) ? new M(a, va, c) : ua(a) ? new ma(a, va, c) : ta(a) ? (b = {}, ia(b, c), e(b, va, [a]), b) : a
      }
      function qb(a, b, c) {
        return V(a, b) ? b : a
      }
      function rb(a) {
        return function(b) {
          var c = this.$mobx,
            f = c.values;
          if (a < f.length) {
            Pa(c.atom);
            var g = f[a];
            if (ba(c)) {
              b = ca(c, {
                type: "update",
                object: c.array,
                index: a,
                newValue: b
              });
              if (!b) return;
              b = b.newValue
            }
            b = c.enhancer(b, g);
            b !== g && (f[a] = b, c.notifyArrayChildUpdate(a, b, g))
          } else if (a === f.length) c.spliceWithArray(a, 0, [b]);
          else throw Error("[mobx.array] Index out of bounds, " + a + " is larger than " + f.length);
        }
      }
      function sb(a) {
        return function() {
          var b = this.$mobx;
          if (b) {
            if (a < b.values.length) return b.atom.reportObserved(), b.values[a];
            console.warn("[mobx.array] Attempt to read an array index (" + a + ") that is out of bounds (" + b.values.length + "). Please check length first. Out of bound indices will not be tracked by MobX")
          }
        }
      }
      function tb(a) {
        for (var b = Sa; b < a; b++) {
          var c = b,
            f = rb(c),
            g = sb(c);
          Object.defineProperty(M.prototype, "" + c, {
            enumerable: !1,
            configurable: !0,
            set: f,
            get: g
          })
        }
        Sa = a
      }
      function X(a) {
        return Ta(a) && Qb(a.$mobx)
      }
      function ia(a, b) {
        if (L(a)) return a.$mobx;
        r(Object.isExtensible(a), w.m035);
        ta(a) || (b = (a.constructor.name || "ObservableObject") + "@" + C());
        b || (b = "ObservableObject@" + C());
        b = new ub(a, b);
        wa(a, "$mobx", b);
        return b
      }
      function Ob(a, b, c, f) {
        a.values[b] ? (r("value" in c, "The property " + b + " in " + a.name + " is already observable, cannot redefine it as computed property"), a.target[b] = c.value) : "value" in c ? da(c.value) ? (c = c.value, Na(a, b, c.initialValue, c.enhancer)) : v(c.value) && !0 === c.value.autoBind ? u(a.target, b, c.value.originalFn) : Y(c.value) ? (c = c.value, c.name = a.name + "." + b, c.scope || (c.scope = a.target), a.values[b] = c, Object.defineProperty(a.target, b, vb(b))) : Na(a, b, c.value, f) : $a(a, b, c.get, c.set, !1, !0)
      }
      function Na(a, b, c, f) {
        Ma(a.target, b);
        if (ba(a)) {
          c = ca(a, {
            object: a.target,
            name: b,
            type: "add",
            newValue: c
          });
          if (!c) return;
          c = c.newValue
        }
        c = (a.values[b] = new W(c, f, a.name + "." + b, !1)).value;
        Object.defineProperty(a.target, b, Rb(b));
        f = a.target;
        var g = c;
        c = T(a);
        var l = E();
        b = c || l ? {
          type: "add",
          object: f,
          name: b,
          newValue: g
        } : null;
        l && H(b);
        c && U(a, b);
        l && I()
      }
      function $a(a, b, c, f, g, l) {
        l && Ma(a.target, b);
        a.values[b] = new na(c, a.target, g, a.name + "." + b, f);
        l && Object.defineProperty(a.target, b, vb(b))
      }
      function Rb(a) {
        return wb[a] || (wb[a] = {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return this.$mobx.values[a].get()
          },
          set: function(b) {
            bb(this, a, b)
          }
        })
      }
      function vb(a) {
        return xb[a] || (xb[a] = {
          configurable: !0,
          enumerable: !1,
          get: function() {
            return this.$mobx.values[a].get()
          },
          set: function(b) {
            return this.$mobx.values[a].set(b)
          }
        })
      }
      function bb(a, b, c) {
        var f = a.$mobx,
          g = f.values[b];
        if (ba(f)) {
          var l = ca(f, {
            type: "update",
            object: a,
            name: b,
            newValue: c
          });
          if (!l) return;
          c = l.newValue
        }
        c = g.prepareNewValue(c);
        if (c !== xa) {
          var e = T(f),
            d = E();
          l = e || d ? {
            type: "update",
            object: a,
            oldValue: g.value,
            name: b,
            newValue: c
          } : null;
          d && H(l);
          g.setNewValue(c);
          e && U(f, l);
          d && I()
        }
      }
      function L(a) {
        return Ta(a) ? (ya(a), Sb(a.$mobx)) : !1
      }
      function K(a, b) {
        if ("object" === ("undefined" === typeof a ? "undefined" : D(a)) && null !== a) {
          if (X(a)) return r(void 0 === b, w.m036), a.$mobx.atom;
          if (J(a)) {
            if (void 0 === b) return K(a._keys);
            var c = a._data[b] || a._hasMap[b];
            r( !! c, "the entry '" + b + "' does not exist in the observable map '" + Ua(a) + "'");
            return c
          }
          ya(a);
          if (L(a)) {
            if (!b) return G("please specify a property");
            c = a.$mobx.values[b];
            r( !! c, "no observable property '" + b + "' found on the observable object '" + Ua(a) + "'");
            return c
          }
          if (La(a) || Y(a) || ja(a)) return a
        } else if ("function" === typeof a && ja(a.$mobx)) return a.$mobx;
        return G("Cannot obtain atom from " + a)
      }
      function ea(a, b) {
        r(a, "Expecting some object");
        if (void 0 !== b) return ea(K(a, b));
        if (La(a) || Y(a) || ja(a) || J(a)) return a;
        ya(a);
        if (a.$mobx) return a.$mobx;
        r(!1, "Cannot obtain administration from " + a)
      }
      function Ua(a, b) {
        return (void 0 !== b ? K(a, b) : L(a) || J(a) ? ea(a) : K(a)).name
      }
      function Ba(a, b, c, f, g) {
        function l(l, e, d, k, h) {
          void 0 === h && (h = 0);
          r(g || yb(arguments), "This function is a decorator, but it wasn't invoked like a decorator");
          if (d) {
            Ca.call(l, "__mobxLazyInitializers") || N(l, "__mobxLazyInitializers", l.__mobxLazyInitializers && l.__mobxLazyInitializers.slice() || []);
            var m = d.value,
              x = d.initializer;
            l.__mobxLazyInitializers.push(function(b) {
              a(b, e, x ? x.call(b) : m, k, d)
            });
            return {
              enumerable: f,
              configurable: !0,
              get: function() {
                !0 !== this.__mobxDidRunLazyInitializers && ya(this);
                return b.call(this, e)
              },
              set: function(a) {
                !0 !== this.__mobxDidRunLazyInitializers && ya(this);
                c.call(this, e, a)
              }
            }
          }
          var u = {
            enumerable: f,
            configurable: !0,
            get: function() {
              this.__mobxInitializedProps && !0 === this.__mobxInitializedProps[e] || zb(this, e, void 0, a, k, d);
              return b.call(this, e)
            },
            set: function(b) {
              this.__mobxInitializedProps && !0 === this.__mobxInitializedProps[e] ? c.call(this, e, b) : zb(this, e, b, a, k, d)
            }
          };
          (3 > arguments.length || 5 === arguments.length && 3 > h) && Object.defineProperty(l, e, u);
          return u
        }
        return g ?
        function() {
          if (yb(arguments)) return l.apply(null, arguments);
          var a = arguments,
            b = arguments.length;
          return function(c, f, g) {
            return l(c, f, g, a, b)
          }
        } : l
      }
      function zb(a, b, c, f, g, l) {
        Ca.call(a, "__mobxInitializedProps") || N(a, "__mobxInitializedProps", {});
        a.__mobxInitializedProps[b] = !0;
        f(a, b, c, g, l)
      }
      function ya(a) {
        !0 !== a.__mobxDidRunLazyInitializers && a.__mobxLazyInitializers && (N(a, "__mobxDidRunLazyInitializers", !0), a.__mobxDidRunLazyInitializers && a.__mobxLazyInitializers.forEach(function(b) {
          return b(a)
        }))
      }

      function yb(a) {
        return (2 === a.length || 3 === a.length) && "string" === typeof a[1]
      }
      function Ha(a) {
        r(!0 !== a[Ab], "Illegal state: cannot recycle array as iterator");
        wa(a, Ab, !0);
        var b = -1;
        wa(a, "next", function() {
          b++;
          return {
            done: b >= this.length,
            value: b < this.length ? this[b] : void 0
          }
        });
        return a
      }
      function Bb(a, b) {
        wa(a, "function" === typeof Symbol && Symbol.iterator || "@@iterator", b)
      }
      function C() {
        return ++m.mobxGuid
      }
      function G(a, b) {
        r(!1, a, b);
        throw "X";
      }
      function r(a, b, c) {
        if (!a) throw Error("[mobx] Invariant failed: " + b + (c ? " in '" + c + "'" : ""));
      }
      function oa(a) {
        if (-1 !== Cb.indexOf(a)) return !1;
        Cb.push(a);
        console.error("[mobx] Deprecated: " + a);
        return !0
      }
      function Ra(a) {
        var b = !1;
        return function() {
          if (!b) return b = !0, a.apply(this, arguments)
        }
      }
      function Da(a) {
        var b = [];
        a.forEach(function(a) {
          -1 === b.indexOf(a) && b.push(a)
        });
        return b
      }
      function Va(a, b, c) {
        void 0 === b && (b = 100);
        void 0 === c && (c = " - ");
        return a ? "" + a.slice(0, b).join(c) + (a.length > b ? " (... and " + (a.length - b) + "more)" : "") : ""
      }
      function Ta(a) {
        return null !== a && "object" === ("undefined" === typeof a ? "undefined" : D(a))
      }
      function ta(a) {
        if (null === a || "object" !== ("undefined" === typeof a ? "undefined" : D(a))) return !1;
        a = Object.getPrototypeOf(a);
        return a === Object.prototype || null === a
      }
      function nb() {
        for (var a = arguments[0], b = 1, c = arguments.length; b < c; b++) {
          var f = arguments[b],
            g;
          for (g in f) Ca.call(f, g) && (a[g] = f[g])
        }
        return a
      }
      function Db(a, b, c) {
        return "number" === typeof b && isNaN(b) ? "number" !== typeof c || !isNaN(c) : a ? !V(b, c) : b !== c
      }
      function N(a, b, c) {
        Object.defineProperty(a, b, {
          enumerable: !1,
          writable: !0,
          configurable: !0,
          value: c
        })
      }

      function wa(a, b, c) {
        Object.defineProperty(a, b, {
          enumerable: !1,
          writable: !1,
          configurable: !0,
          value: c
        })
      }
      function ab(a, b) {
        a = Object.getOwnPropertyDescriptor(a, b);
        return !a || !1 !== a.configurable && !1 !== a.writable
      }
      function Ma(a, b) {
        r(ab(a, b), "Cannot make property '" + b + "' observable, it is not configurable and writable in the target object")
      }
      function Eb(a) {
        var b = [],
          c;
        for (c in a) b.push(c);
        return b
      }
      function V(a, b) {
        if (null === a && null === b || void 0 === a && void 0 === b) return !0;
        if ("object" !== ("undefined" === typeof a ? "undefined" : D(a))) return a === b;
        var c = Wa(a),
          f = Ia(a);
        if (c === Wa(b) && f === Ia(b)) {
          if (c) {
            if (a.length !== b.length) return !1;
            for (c = a.length - 1; 0 <= c; c--) if (!V(a[c], b[c])) return !1;
            return !0
          }
          if (f) {
            if (a.size !== b.size) return !1;
            var g = !0;
            a.forEach(function(a, c) {
              g = g && V(b.get(c), a)
            });
            return g
          }
          if ("object" === ("undefined" === typeof a ? "undefined" : D(a)) && "object" === ("undefined" === typeof b ? "undefined" : D(b))) {
            if (null === a || null === b) return !1;
            if (Ia(a) && Ia(b)) return a.size !== b.size ? !1 : V(B.shallowMap(a).entries(), B.shallowMap(b).entries());
            if (Eb(a).length !== Eb(b).length) return !1;
            for (var l in a) if (!(l in b && V(a[l], b[l]))) return !1;
            return !0
          }
        }
        return !1
      }
      function fa(a, b) {
        var c = "isMobX" + a;
        b.prototype[c] = !0;
        return function(a) {
          return Ta(a) && !0 === a[c]
        }
      }
      function Wa(a) {
        return Array.isArray(a) || X(a)
      }
      function Ia(a) {
        return ua(a) || J(a)
      }
      function ua(a) {
        return void 0 !== t.Map && a instanceof t.Map ? !0 : !1
      }
      function Fb() {
        return "function" === typeof Symbol && Symbol.toPrimitive || "@@toPrimitive"
      }
      function Gb(a) {
        return null === a ? null : "object" === ("undefined" === typeof a ? "undefined" : D(a)) ? "" + a : a
      }
      var D = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ?
      function(a) {
        return typeof a
      } : function(a) {
        return a && "function" === typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
      }, Ja = function() {
        var a = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array &&
        function(a, c) {
          a.__proto__ = c
        } ||
        function(a, c) {
          for (var b in c) c.hasOwnProperty(b) && (a[b] = c[b])
        };
        return function(b, c) {
          function f() {
            this.constructor = b
          }
          a(b, c);
          b.prototype = null === c ? Object.create(c) : (f.prototype = c.prototype, new f)
        }
      }();
      Object.defineProperty(d, "__esModule", {
        value: !0
      });
      d.extras = {
        allowStateChanges: function(a, b) {
          a = eb(a);
          try {
            var c = b()
          } finally {
            m.allowStateChanges = a
          }
          return c
        },
        deepEqual: V,
        getAtom: K,
        getDebugName: Ua,
        getDependencyTree: function(a, b) {
          return x(K(a, b))
        },
        getAdministration: ea,
        getGlobalState: function() {
          return m
        },
        getObserverTree: function(a, b) {
          return q(K(a, b))
        },
        isComputingDerivation: gb,
        isSpyEnabled: E,
        onReactionError: function(a) {
          m.globalReactionErrorHandlers.push(a);
          return function() {
            var b = m.globalReactionErrorHandlers.indexOf(a);
            0 <= b && m.globalReactionErrorHandlers.splice(b, 1)
          }
        },
        resetGlobalState: function() {
          m.resetId++;
          var a = new Hb,
            b;
          for (b in a) - 1 === Tb.indexOf(b) && (m[b] = a[b]);
          m.allowStateChanges = !m.strictMode
        },
        shareGlobalState: function() {
          var a = m;
          if (t.__mobservableTrackingStack || t.__mobservableViewStack) throw Error("[mobx] An incompatible version of mobservable is already loaded.");
          if (t.__mobxGlobal && t.__mobxGlobal.version !== a.version) throw Error("[mobx] An incompatible version of mobx is already loaded.");
          t.__mobxGlobal ? m = t.__mobxGlobal : t.__mobxGlobal = a
        },
        spyReport: S,
        spyReportEnd: I,
        spyReportStart: H,
        setReactionScheduler: function(a) {
          var b = Ea;
          Ea = function(c) {
            return a(function() {
              return b(c)
            })
          }
        }
      };
      "object" === ("undefined" === typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ ? "undefined" : D(__MOBX_DEVTOOLS_GLOBAL_HOOK__)) && __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx(F.exports);
      F.exports.
    default = F.exports;
      var Mb = Ba(function(a, b, c, f, g) {
        c = Ka(f && 1 === f.length ? f[0] : c.name || b || "<unnamed action>", c);
        N(a, b, c)
      }, function(a) {
        return this[a]
      }, function() {
        r(!1, w.m001)
      }, !1, !0),
        Ub = Ba(function(a, b, c) {
          u(a, b, c)
        }, function(a) {
          return this[a]
        }, function() {
          r(!1, w.m001)
        }, !1, !1),
        Ka = function(a, b, c, f) {
          return 1 === arguments.length && "function" === typeof a ? pa(a.name || "<unnamed action>", a) : 2 === arguments.length && "function" === typeof b ? pa(a, b) : 1 === arguments.length && "string" === typeof a ? z(a) : z(b).apply(null, arguments)
        };
      d.action = Ka;
      Ka.bound = function(a, b, c) {
        if ("function" === typeof a) {
          var f = pa("<not yet bound action>", a);
          f.autoBind = !0;
          return f
        }
        return Ub.apply(null, arguments)
      };
      d.runInAction = function(a, b, c) {
        var f = "string" === typeof a ? a : a.name || "<unnamed action>",
          g = "function" === typeof a ? a : b;
        a = "function" === typeof a ? b : c;
        r("function" === typeof g, w.m002);
        r(0 === g.length, w.m003);
        r("string" === typeof f && 0 < f.length, "actions should have valid names, got: '" + f + "'");
        return Aa(f, g, a, void 0)
      };
      d.isAction = v;
      d.autorun = n;
      d.when = function(a, b, c, f) {
        if ("string" === typeof a) var g = a,
          l = b,
          e = c,
          d = f;
        else g = "When@" + C(), l = a, e = b, d = c;
        return n(g, function(a) {
          l.call(d) && (a.dispose(), a = Z(), e.call(d), m.trackingDerivation = a)
        })
      };
      d.autorunAsync = function(a, b, c, f) {
        function g() {
          e(h)
        }
        if ("string" === typeof a) {
          var l = a,
            e = b,
            d = c;
          a = f
        } else l = a.name || "AutorunAsync@" + C(), e = a, d = b, a = c;
        r(!1 === v(e), w.m006);
        void 0 === d && (d = 1);
        a && (e = e.bind(a));
        var k = !1,
          h = new qa(l, function() {
            k || (k = !0, setTimeout(function() {
              k = !1;
              h.isDisposed || h.track(g)
            }, d))
          });
        h.schedule();
        return h.getDisposer()
      };
      d.reaction = function(a, b, c) {
        function f() {
          if (!k.isDisposed) {
            var c = !1;
            k.track(function() {
              var b = a(k);
              c = Db(g.compareStructural, d, b);
              d = b
            });
            l && g.fireImmediately && b(d, k);
            l || !0 !== c || b(d, k);
            l && (l = !1)
          }
        }
        3 < arguments.length && G(w.m007);
        da(a) && G(w.m008);
        var g = "object" === ("undefined" === typeof c ? "undefined" : D(c)) ? c : {};
        g.name = g.name || a.name || b.name || "Reaction@" + C();
        g.fireImmediately = !0 === c || !0 === g.fireImmediately;
        g.delay = g.delay || 0;
        g.compareStructural = g.compareStructural || g.struct || !1;
        b = Ka(g.name, g.context ? b.bind(g.context) : b);
        g.context && (a = a.bind(g.context));
        var l = !0,
          e = !1,
          d, k = new qa(g.name, function() {
            l || 1 > g.delay ? f() : e || (e = !0, setTimeout(function() {
              e = !1;
              f()
            }, g.delay))
          });
        k.schedule();
        return k.getDisposer()
      };
      var Vb = h(!1),
        Wb = h(!0),
        Xa = function(a, b, c) {
          if ("string" === typeof b) return Vb.apply(null, arguments);
          r("function" === typeof a, w.m011);
          r(3 > arguments.length, w.m012);
          var f = "object" === ("undefined" === typeof b ? "undefined" : D(b)) ? b : {};
          f.setter = "function" === typeof b ? b : f.setter;
          return new na(a, f.context, f.compareStructural || f.struct || !1, f.name || a.name || "", f.setter)
        };
      d.computed = Xa;
      Xa.struct = Wb;
      d.createTransformer = function(a, b) {
        r("function" === typeof a && 2 > a.length, "createTransformer expects a function that accepts one argument");
        var c = {},
          f = m.resetId,
          g = function(f) {
            function g(b, c) {
              var g = f.call(this, function() {
                return a(c)
              }, void 0, !1, "Transformer-" + a.name + "-" + b, void 0) || this;
              g.sourceIdentifier = b;
              g.sourceObject = c;
              return g
            }
            Ja(g, f);
            g.prototype.onBecomeUnobserved = function() {
              var a = this.value;
              f.prototype.onBecomeUnobserved.call(this);
              delete c[this.sourceIdentifier];
              b && b(a, this.sourceObject)
            };
            return g
          }(na);
        return function(a) {
          f !== m.resetId && (c = {}, f = m.resetId);
          if (null === a || "object" !== ("undefined" === typeof a ? "undefined" : D(a))) throw Error("[mobx] transform expected some kind of object, got: " + a);
          var b = a.$transformId;
          void 0 === b && (b = C(), N(a, "$transformId", b));
          var l = c[b];
          if (l) return l.get();
          l = c[b] = new g(b, a);
          return l.get()
        }
      };
      d.expr = function(a, b) {
        gb() || console.warn(w.m013);
        return Xa(a, {
          context: b
        }).get()
      };
      d.extendObservable = A;
      d.extendShallowObservable = k;
      d.intercept = function(a, b, c) {
        return "function" === typeof c ? ea(a, b).intercept(c) : ea(a).intercept(b)
      };
      d.isComputed = function(a, b) {
        if (null === a || void 0 === a) return !1;
        if (void 0 !== b) {
          if (!1 === L(a)) return !1;
          a = K(a, b)
        }
        return Y(a)
      };
      d.isObservable = p;
      var Ib = R(O),
        Xb = R(pb),
        Yb = R(P),
        Zb = R(va),
        $b = R(qb),
        Ya = function() {
          function a() {}
          a.prototype.box = function(a, c) {
            2 < arguments.length && Q("box");
            return new W(a, O, c)
          };
          a.prototype.shallowBox = function(a, c) {
            2 < arguments.length && Q("shallowBox");
            return new W(a, P, c)
          };
          a.prototype.array = function(a, c) {
            2 < arguments.length && Q("array");
            return new M(a, O, c)
          };
          a.prototype.shallowArray = function(a, c) {
            2 < arguments.length && Q("shallowArray");
            return new M(a, P, c)
          };
          a.prototype.map = function(a, c) {
            2 < arguments.length && Q("map");
            return new ma(a, O, c)
          };
          a.prototype.shallowMap = function(a, c) {
            2 < arguments.length && Q("shallowMap");
            return new ma(a, P, c)
          };
          a.prototype.object = function(a, c) {
            2 < arguments.length && Q("object");
            var b = {};
            ia(b, c);
            A(b, a);
            return b
          };
          a.prototype.shallowObject = function(a, c) {
            2 < arguments.length && Q("shallowObject");
            var b = {};
            ia(b, c);
            k(b, a);
            return b
          };
          a.prototype.ref = function() {
            return 2 > arguments.length ? sa(P, arguments[0]) : Yb.apply(null, arguments)
          };
          a.prototype.shallow = function() {
            return 2 > arguments.length ? sa(pb, arguments[0]) : Xb.apply(null, arguments)
          };
          a.prototype.deep = function() {
            return 2 > arguments.length ? sa(O, arguments[0]) : Ib.apply(null, arguments)
          };
          a.prototype.struct = function() {
            return 2 > arguments.length ? sa(va, arguments[0]) : Zb.apply(null, arguments)
          };
          return a
        }();
      d.IObservableFactories = Ya;
      var B = function(a) {
          void 0 === a && (a = void 0);
          if ("string" === typeof arguments[1]) return Ib.apply(null, arguments);
          r(1 >= arguments.length, w.m021);
          r(!da(a), w.m020);
          if (p(a)) return a;
          var b = O(a, void 0, void 0);
          return b !== a ? b : B.box(a)
        };
      d.observable = B;
      Object.keys(Ya.prototype).forEach(function(a) {
        return B[a] = Ya.prototype[a]
      });
      B.deep.struct = B.struct;
      B.ref.struct = function() {
        return 2 > arguments.length ? sa(qb, arguments[0]) : $b.apply(null, arguments)
      };
      d.observe = function(a, b, c, f) {
        return "function" === typeof c ? ea(a, b).observe(c, f) : ea(a).observe(b, c)
      };
      d.toJS = ra;
      d.transaction = function(a, b) {
        void 0 === b && (b = void 0);
        oa(w.m023);
        return ka.apply(void 0, arguments)
      };
      d.whyRun = function(a, b) {
        switch (arguments.length) {
        case 0:
          a = m.trackingDerivation;
          if (!a) return db(w.m024);
          break;
        case 2:
          a = K(a, b)
        }
        a = K(a);
        return Y(a) || ja(a) ? db(a.whyRun()) : G(w.m025)
      };
      d.useStrict = function(a) {
        r(null === m.trackingDerivation, w.m028);
        m.strictMode = a;
        m.allowStateChanges = !a
      };
      d.isStrictModeEnabled = function() {
        return m.strictMode
      };
      var za = function() {
          function a(a) {
            void 0 === a && (a = "Atom@" + C());
            this.name = a;
            this.isPendingUnobservation = !0;
            this.observers = [];
            this.observersIndexes = {};
            this.lastAccessedBy = this.diffValue = 0;
            this.lowestObserverState = y.NOT_TRACKING
          }
          a.prototype.onBecomeUnobserved = function() {};
          a.prototype.reportObserved = function() {
            lb(this)
          };
          a.prototype.reportChanged = function() {
            m.inBatch++;
            if (this.lowestObserverState !== y.STALE) {
              this.lowestObserverState = y.STALE;
              for (var a = this.observers, c = a.length; c--;) {
                var f = a[c];
                if (f.dependenciesState === y.UP_TO_DATE) f.onBecomeStale();
                f.dependenciesState = y.STALE
              }
            }
            aa()
          };
          a.prototype.toString = function() {
            return this.name
          };
          return a
        }();
      d.BaseAtom = za;
      var ac = function(a) {
          function b(b, f, g) {
            void 0 === b && (b = "Atom@" + C());
            void 0 === f && (f = Jb);
            void 0 === g && (g = Jb);
            var c = a.call(this, b) || this;
            c.name = b;
            c.onBecomeObservedHandler = f;
            c.onBecomeUnobservedHandler = g;
            c.isPendingUnobservation = !1;
            c.isBeingTracked = !1;
            return c
          }
          Ja(b, a);
          b.prototype.reportObserved = function() {
            m.inBatch++;
            a.prototype.reportObserved.call(this);
            this.isBeingTracked || (this.isBeingTracked = !0, this.onBecomeObservedHandler());
            aa();
            return !!m.trackingDerivation
          };
          b.prototype.onBecomeUnobserved = function() {
            this.isBeingTracked = !1;
            this.onBecomeUnobservedHandler()
          };
          return b
        }(za);
      d.Atom = ac;
      var La = fa("Atom", za),
        na = function() {
          function a(a, c, f, g, e) {
            this.derivation = a;
            this.scope = c;
            this.compareStructural = f;
            this.dependenciesState = y.NOT_TRACKING;
            this.observing = [];
            this.newObserving = null;
            this.isPendingUnobservation = !1;
            this.observers = [];
            this.observersIndexes = {};
            this.lastAccessedBy = this.runId = this.diffValue = 0;
            this.lowestObserverState = y.UP_TO_DATE;
            this.unboundDepsCount = 0;
            this.__mapid = "#" + C();
            this.value = void 0;
            this.isRunningSetter = this.isComputing = !1;
            this.name = g || "ComputedValue@" + C();
            e && (this.setter = pa(g + "-setter", e))
          }
          a.prototype.onBecomeStale = function() {
            if (this.lowestObserverState === y.UP_TO_DATE) {
              this.lowestObserverState = y.POSSIBLY_STALE;
              for (var a = this.observers, c = a.length; c--;) {
                var f = a[c];
                f.dependenciesState === y.UP_TO_DATE && (f.dependenciesState = y.POSSIBLY_STALE, f.onBecomeStale())
              }
            }
          };
          a.prototype.onBecomeUnobserved = function() {
            r(this.dependenciesState !== y.NOT_TRACKING, w.m029);
            Qa(this);
            this.value = void 0
          };
          a.prototype.get = function() {
            r(!this.isComputing, "Cycle detected in computation " + this.name, this.derivation);
            if (0 === m.inBatch) m.inBatch++, Oa(this) && (this.value = this.computeValue(!1)), aa();
            else if (lb(this), Oa(this) && this.trackAndCompute() && this.lowestObserverState !== y.STALE) {
              this.lowestObserverState = y.STALE;
              for (var a = this.observers, c = a.length; c--;) {
                var f = a[c];
                f.dependenciesState === y.POSSIBLY_STALE ? f.dependenciesState = y.STALE : f.dependenciesState === y.UP_TO_DATE && (this.lowestObserverState = y.UP_TO_DATE)
              }
            }
            a = this.value;
            if (a instanceof la) throw a.cause;
            return a
          };
          a.prototype.peek = function() {
            var a = this.computeValue(!1);
            if (a instanceof la) throw a.cause;
            return a
          };
          a.prototype.set = function(a) {
            if (this.setter) {
              r(!this.isRunningSetter, "The setter of computed value '" + this.name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?");
              this.isRunningSetter = !0;
              try {
                this.setter.call(this.scope, a)
              } finally {
                this.isRunningSetter = !1
              }
            } else r(!1, "[ComputedValue '" + this.name + "'] It is not possible to assign a new value to a computed value.")
          };
          a.prototype.trackAndCompute = function() {
            E() && S({
              object: this.scope,
              type: "compute",
              fn: this.derivation
            });
            var a = this.value,
              c = this.value = this.computeValue(!0);
            return c instanceof la || Db(this.compareStructural, c, a)
          };
          a.prototype.computeValue = function(a) {
            this.isComputing = !0;
            m.computationDepth++;
            if (a) var b = hb(this, this.derivation, this.scope);
            else try {
              b = this.derivation.call(this.scope)
            } catch (f) {
              b = new la(f)
            }
            m.computationDepth--;
            this.isComputing = !1;
            return b
          };
          a.prototype.observe = function(a, c) {
            var b = this,
              g = !0,
              e = void 0;
            return n(function() {
              var f = b.get();
              if (!g || c) {
                var d = Z();
                a({
                  type: "update",
                  object: b,
                  newValue: f,
                  oldValue: e
                });
                m.trackingDerivation = d
              }
              g = !1;
              e = f
            })
          };
          a.prototype.toJSON = function() {
            return this.get()
          };
          a.prototype.toString = function() {
            return this.name + "[" + this.derivation.toString() + "]"
          };
          a.prototype.valueOf = function() {
            return Gb(this.get())
          };
          a.prototype.whyRun = function() {
            var a = !! m.trackingDerivation,
              c = Da(this.isComputing ? this.newObserving : this.observing).map(function(a) {
                return a.name
              }),
              f = Da(this.observers.map(function(a) {
                return a.name
              }));
            return "\nWhyRun? computation '" + this.name + "':\n * Running because: " + (a ? "[active] the value of this computation is needed by a reaction" : this.isComputing ? "[get] The value of this computed was requested outside a reaction" : "[idle] not running at the moment") + "\n" + (this.dependenciesState === y.NOT_TRACKING ? w.m032 : " * This computation will re-run if any of the following observables changes:\n    " + Va(c) + "\n    " + (this.isComputing && a ? " (... or any observable accessed during the remainder of the current run)" : "") + "\n\t" + w.m038 + "\n\n  * If the outcome of this computation changes, the following observers will be re-run:\n    " + Va(f) + "\n")
          };
          return a
        }();
      na.prototype[Fb()] = na.prototype.valueOf;
      var Y = fa("ComputedValue", na),
        y;
      (function(a) {
        a[a.NOT_TRACKING = -1] = "NOT_TRACKING";
        a[a.UP_TO_DATE = 0] = "UP_TO_DATE";
        a[a.POSSIBLY_STALE = 1] = "POSSIBLY_STALE";
        a[a.STALE = 2] = "STALE"
      })(y || (y = {}));
      d.IDerivationState = y;
      var la = function() {
          return function(a) {
            this.cause = a
          }
        }();
      d.untracked = jb;
      var Tb = ["mobxGuid", "resetId", "spyListeners", "strictMode", "runId"],
        Hb = function() {
          return function() {
            this.version = 5;
            this.trackingDerivation = null;
            this.inBatch = this.mobxGuid = this.runId = this.computationDepth = 0;
            this.pendingUnobservations = [];
            this.pendingReactions = [];
            this.isRunningReactions = !1;
            this.allowStateChanges = !0;
            this.strictMode = !1;
            this.resetId = 0;
            this.spyListeners = [];
            this.globalReactionErrorHandlers = []
          }
        }(),
        m = new Hb,
        qa = function() {
          function a(a, c) {
            void 0 === a && (a = "Reaction@" + C());
            this.name = a;
            this.onInvalidate = c;
            this.observing = [];
            this.newObserving = [];
            this.dependenciesState = y.NOT_TRACKING;
            this.unboundDepsCount = this.runId = this.diffValue = 0;
            this.__mapid = "#" + C();
            this._isRunning = this._isTrackPending = this._isScheduled = this.isDisposed = !1
          }
          a.prototype.onBecomeStale = function() {
            this.schedule()
          };
          a.prototype.schedule = function() {
            this._isScheduled || (this._isScheduled = !0, m.pendingReactions.push(this), 0 < m.inBatch || m.isRunningReactions || Ea(kb))
          };
          a.prototype.isScheduled = function() {
            return this._isScheduled
          };
          a.prototype.runReaction = function() {
            this.isDisposed || (m.inBatch++, this._isScheduled = !1, Oa(this) && (this._isTrackPending = !0, this.onInvalidate(), this._isTrackPending && E() && S({
              object: this,
              type: "scheduled-reaction"
            })), aa())
          };
          a.prototype.track = function(a) {
            m.inBatch++;
            var b = E();
            if (b) {
              var f = Date.now();
              H({
                object: this,
                type: "reaction",
                fn: a
              })
            }
            this._isRunning = !0;
            a = hb(this, a, void 0);
            this._isTrackPending = this._isRunning = !1;
            this.isDisposed && Qa(this);
            a instanceof la && this.reportExceptionInDerivation(a.cause);
            b && I({
              time: Date.now() - f
            });
            aa()
          };
          a.prototype.reportExceptionInDerivation = function(a) {
            var b = this;
            if (this.errorHandler) this.errorHandler(a, this);
            else {
              var f = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this,
                g = w.m037;
              console.error(f || g, a);
              E() && S({
                type: "error",
                message: f,
                error: a,
                object: this
              });
              m.globalReactionErrorHandlers.forEach(function(c) {
                return c(a, b)
              })
            }
          };
          a.prototype.dispose = function() {
            this.isDisposed || (this.isDisposed = !0, this._isRunning || (m.inBatch++, Qa(this), aa()))
          };
          a.prototype.getDisposer = function() {
            var a = this.dispose.bind(this);
            a.$mobx = this;
            a.onError = Pb;
            return a
          };
          a.prototype.toString = function() {
            return "Reaction[" + this.name + "]"
          };
          a.prototype.whyRun = function() {
            var a = Da(this._isRunning ? this.newObserving : this.observing).map(function(a) {
              return a.name
            });
            return "\nWhyRun? reaction '" + this.name + "':\n * Status: [" + (this.isDisposed ? "stopped" : this._isRunning ? "running" : this.isScheduled() ? "scheduled" : "idle") + "]\n * This reaction will re-run if any of the following observables changes:\n    " + Va(a) + "\n    " + (this._isRunning ? " (... or any observable accessed during the remainder of the current run)" : "") + "\n\t" + w.m038 + "\n"
          };
          return a
        }();
      d.Reaction = qa;
      var mb = 100,
        Ea = function(a) {
          return a()
        },
        ja = fa("Reaction", qa),
        ob = {
          spyReportEnd: !0
        };
      d.spy = function(a) {
        m.spyListeners.push(a);
        return Ra(function() {
          var b = m.spyListeners.indexOf(a); - 1 !== b && m.spyListeners.splice(b, 1)
        })
      };
      d.asReference = function(a) {
        oa("asReference is deprecated, use observable.ref instead");
        return B.ref(a)
      };
      d.asStructure = function(a) {
        oa("asStructure is deprecated. Use observable.struct, computed.struct or reaction options instead.");
        return B.struct(a)
      };
      d.asFlat = function(a) {
        oa("asFlat is deprecated, use observable.shallow instead");
        return B.shallow(a)
      };
      d.asMap = function(a) {
        oa("asMap is deprecated, use observable.map or observable.shallowMap instead");
        return B.map(a || {})
      };
      d.isModifierDescriptor = da;
      var bc = function() {
          var a = !1,
            b = {};
          Object.defineProperty(b, "0", {
            set: function() {
              a = !0
            }
          });
          Object.create(b)["0"] = 1;
          return !1 === a
        }(),
        Sa = 0,
        Kb = function() {
          return function() {}
        }();
      Kb.prototype = [];
      var Lb = function() {
          function a(a, c, f, g) {
            this.array = f;
            this.owned = g;
            this.lastKnownLength = 0;
            this.changeListeners = this.interceptors = null;
            this.atom = new za(a || "ObservableArray@" + C());
            this.enhancer = function(b, f) {
              return c(b, f, a + "[..]")
            }
          }
          a.prototype.intercept = function(a) {
            return Fa(this, a)
          };
          a.prototype.observe = function(a, c) {
            void 0 === c && (c = !1);
            c && a({
              object: this.array,
              type: "splice",
              index: 0,
              added: this.values.slice(),
              addedCount: this.values.length,
              removed: [],
              removedCount: 0
            });
            return Ga(this, a)
          };
          a.prototype.getArrayLength = function() {
            this.atom.reportObserved();
            return this.values.length
          };
          a.prototype.setArrayLength = function(a) {
            if ("number" !== typeof a || 0 > a) throw Error("[mobx.array] Out of range: " + a);
            var b = this.values.length;
            if (a !== b) if (a > b) {
              for (var f = Array(a - b), g = 0; g < a - b; g++) f[g] = void 0;
              this.spliceWithArray(b, 0, f)
            } else this.spliceWithArray(a, b - a)
          };
          a.prototype.updateArrayLength = function(a, c) {
            if (a !== this.lastKnownLength) throw Error("[mobx] Modification exception: the internal structure of an observable array was changed. Did you use peek() to change it?");
            this.lastKnownLength += c;
            0 < c && a + c + 1 > Sa && tb(a + c + 1)
          };
          a.prototype.spliceWithArray = function(a, c, f) {
            var b = this;
            Pa(this.atom);
            var e = this.values.length;
            void 0 === a ? a = 0 : a > e ? a = e : 0 > a && (a = Math.max(0, e + a));
            c = 1 === arguments.length ? e - a : void 0 === c || null === c ? 0 : Math.max(0, Math.min(c, e - a));
            void 0 === f && (f = []);
            if (ba(this)) {
              var d = ca(this, {
                object: this.array,
                type: "splice",
                index: a,
                removedCount: c,
                added: f
              });
              if (!d) return Za;
              c = d.removedCount;
              f = d.added
            }
            f = f.map(function(a) {
              return b.enhancer(a, void 0)
            });
            this.updateArrayLength(e, f.length - c);
            e = this.spliceItemsIntoValues(a, c, f);
            0 === c && 0 === f.length || this.notifyArraySplice(a, f, e);
            return e
          };
          a.prototype.spliceItemsIntoValues = function(a, c, f) {
            if (1E4 > f.length) return (b = this.values).splice.apply(b, [a, c].concat(f));
            b = this.values.slice(a, a + c);
            this.values = this.values.slice(0, a).concat(f, this.values.slice(a + c));
            return b;
            var b
          };
          a.prototype.notifyArrayChildUpdate = function(a, c, f) {
            var b = !this.owned && E(),
              e = T(this);
            a = e || b ? {
              object: this.array,
              type: "update",
              index: a,
              newValue: c,
              oldValue: f
            } : null;
            b && H(a);
            this.atom.reportChanged();
            e && U(this, a);
            b && I()
          };
          a.prototype.notifyArraySplice = function(a, c, f) {
            var b = !this.owned && E(),
              e = T(this);
            a = e || b ? {
              object: this.array,
              type: "splice",
              index: a,
              removed: f,
              added: c,
              removedCount: f.length,
              addedCount: c.length
            } : null;
            b && H(a);
            this.atom.reportChanged();
            e && U(this, a);
            b && I()
          };
          return a
        }(),
        M = function(a) {
          function b(b, f, e, d) {
            void 0 === e && (e = "ObservableArray@" + C());
            void 0 === d && (d = !1);
            var c = a.call(this) || this;
            d = new Lb(e, f, c, d);
            wa(c, "$mobx", d);
            b && b.length ? (d.updateArrayLength(0, b.length), d.values = b.map(function(a) {
              return f(a, void 0, e + "[..]")
            }), d.notifyArraySplice(0, d.values.slice(), Za)) : d.values = [];
            bc && Object.defineProperty(d.array, "0", cc);
            return c
          }
          Ja(b, a);
          b.prototype.intercept = function(a) {
            return this.$mobx.intercept(a)
          };
          b.prototype.observe = function(a, b) {
            void 0 === b && (b = !1);
            return this.$mobx.observe(a, b)
          };
          b.prototype.clear = function() {
            return this.splice(0)
          };
          b.prototype.concat = function() {
            for (var a = [], b = 0; b < arguments.length; b++) a[b] = arguments[b];
            this.$mobx.atom.reportObserved();
            return Array.prototype.concat.apply(this.peek(), a.map(function(a) {
              return X(a) ? a.peek() : a
            }))
          };
          b.prototype.replace = function(a) {
            return this.$mobx.spliceWithArray(0, this.$mobx.values.length, a)
          };
          b.prototype.toJS = function() {
            return this.slice()
          };
          b.prototype.toJSON = function() {
            return this.toJS()
          };
          b.prototype.peek = function() {
            return this.$mobx.values
          };
          b.prototype.find = function(a, b, e) {
            void 0 === e && (e = 0);
            this.$mobx.atom.reportObserved();
            for (var c = this.$mobx.values, f = c.length; e < f; e++) if (a.call(b, c[e], e, this)) return c[e]
          };
          b.prototype.splice = function(a, b) {
            for (var c = [], f = 2; f < arguments.length; f++) c[f - 2] = arguments[f];
            switch (arguments.length) {
            case 0:
              return [];
            case 1:
              return this.$mobx.spliceWithArray(a);
            case 2:
              return this.$mobx.spliceWithArray(a, b)
            }
            return this.$mobx.spliceWithArray(a, b, c)
          };
          b.prototype.spliceWithArray = function(a, b, e) {
            return this.$mobx.spliceWithArray(a, b, e)
          };
          b.prototype.push = function() {
            for (var a = [], b = 0; b < arguments.length; b++) a[b] = arguments[b];
            b = this.$mobx;
            b.spliceWithArray(b.values.length, 0, a);
            return b.values.length
          };
          b.prototype.pop = function() {
            return this.splice(Math.max(this.$mobx.values.length - 1, 0), 1)[0]
          };
          b.prototype.shift = function() {
            return this.splice(0, 1)[0]
          };
          b.prototype.unshift = function() {
            for (var a = [], b = 0; b < arguments.length; b++) a[b] = arguments[b];
            b = this.$mobx;
            b.spliceWithArray(0, 0, a);
            return b.values.length
          };
          b.prototype.reverse = function() {
            this.$mobx.atom.reportObserved();
            var a = this.slice();
            return a.reverse.apply(a, arguments)
          };
          b.prototype.sort = function(a) {
            this.$mobx.atom.reportObserved();
            var b = this.slice();
            return b.sort.apply(b, arguments)
          };
          b.prototype.remove = function(a) {
            a = this.$mobx.values.indexOf(a);
            return -1 < a ? (this.splice(a, 1), !0) : !1
          };
          b.prototype.move = function(a, b) {
            function c(a) {
              if (0 > a) throw Error("[mobx.array] Index out of bounds: " + a + " is negative");
              var b = this.$mobx.values.length;
              if (a >= b) throw Error("[mobx.array] Index out of bounds: " + a + " is not smaller than " + b);
            }
            c.call(this, a);
            c.call(this, b);
            if (a !== b) {
              var f = this.$mobx.values;
              a = a < b ? f.slice(0, a).concat(f.slice(a + 1, b + 1), [f[a]], f.slice(b + 1)) : f.slice(0, b).concat([f[a]], f.slice(b, a), f.slice(a + 1));
              this.replace(a)
            }
          };
          b.prototype.toString = function() {
            this.$mobx.atom.reportObserved();
            return Array.prototype.toString.apply(this.$mobx.values, arguments)
          };
          b.prototype.toLocaleString = function() {
            this.$mobx.atom.reportObserved();
            return Array.prototype.toLocaleString.apply(this.$mobx.values, arguments)
          };
          return b
        }(Kb);
      Bb(M.prototype, function() {
        return Ha(this.slice())
      });
      (function(a, b) {
        for (var c = 0; c < b.length; c++) N(a, b[c], a[b[c]])
      })(M.prototype, "constructor intercept observe clear concat replace toJS toJSON peek find splice spliceWithArray push pop shift unshift reverse sort remove move toString toLocaleString".split(" "));
      Object.defineProperty(M.prototype, "length", {
        enumerable: !1,
        configurable: !0,
        get: function() {
          return this.$mobx.getArrayLength()
        },
        set: function(a) {
          this.$mobx.setArrayLength(a)
        }
      });
      "every filter forEach indexOf join lastIndexOf map reduce reduceRight slice some".split(" ").forEach(function(a) {
        var b = Array.prototype[a];
        r("function" === typeof b, "Base function not defined on Array prototype: '" + a + "'");
        N(M.prototype, a, function() {
          this.$mobx.atom.reportObserved();
          return b.apply(this.$mobx.values, arguments)
        })
      });
      var cc = {
        configurable: !0,
        enumerable: !1,
        set: rb(0),
        get: sb(0)
      };
      tb(1E3);
      var Qb = fa("ObservableArrayAdministration", Lb);
      d.isObservableArray = X;
      var dc = {},
        ma = function() {
          function a(a, c, f) {
            void 0 === c && (c = O);
            void 0 === f && (f = "ObservableMap@" + C());
            this.enhancer = c;
            this.name = f;
            this.$mobx = dc;
            this._data = {};
            this._hasMap = {};
            this._keys = new M(void 0, P, this.name + ".keys()", !0);
            this.changeListeners = this.interceptors = null;
            this.merge(a)
          }
          a.prototype._has = function(a) {
            return "undefined" !== typeof this._data[a]
          };
          a.prototype.has = function(a) {
            if (!this.isValidKey(a)) return !1;
            a = "" + a;
            return this._hasMap[a] ? this._hasMap[a].get() : this._updateHasMapEntry(a, !1).get()
          };
          a.prototype.set = function(a, c) {
            this.assertValidKey(a);
            a = "" + a;
            var b = this._has(a);
            if (ba(this)) {
              c = ca(this, {
                type: b ? "update" : "add",
                object: this,
                newValue: c,
                name: a
              });
              if (!c) return this;
              c = c.newValue
            }
            b ? this._updateValue(a, c) : this._addValue(a, c);
            return this
          };
          a.prototype.delete = function(a) {
            var b = this;
            this.assertValidKey(a);
            a = "" + a;
            if (ba(this)) {
              var f = ca(this, {
                type: "delete",
                object: this,
                name: a
              });
              if (!f) return !1
            }
            if (this._has(a)) {
              var e = E(),
                d = T(this);
              f = d || e ? {
                type: "delete",
                object: this,
                oldValue: this._data[a].value,
                name: a
              } : null;
              e && H(f);
              ka(function() {
                b._keys.remove(a);
                b._updateHasMapEntry(a, !1);
                b._data[a].setNewValue(void 0);
                b._data[a] = void 0
              });
              d && U(this, f);
              e && I();
              return !0
            }
            return !1
          };
          a.prototype._updateHasMapEntry = function(a, c) {
            var b = this._hasMap[a];
            b ? b.setNewValue(c) : b = this._hasMap[a] = new W(c, P, this.name + "." + a + "?", !1);
            return b
          };
          a.prototype._updateValue = function(a, c) {
            var b = this._data[a];
            c = b.prepareNewValue(c);
            if (c !== xa) {
              var e = E(),
                d = T(this);
              a = d || e ? {
                type: "update",
                object: this,
                oldValue: b.value,
                name: a,
                newValue: c
              } : null;
              e && H(a);
              b.setNewValue(c);
              d && U(this, a);
              e && I()
            }
          };
          a.prototype._addValue = function(a, c) {
            var b = this;
            ka(function() {
              c = (b._data[a] = new W(c, b.enhancer, b.name + "." + a, !1)).value;
              b._updateHasMapEntry(a, !0);
              b._keys.push(a)
            });
            var e = E(),
              d = T(this),
              k = d || e ? {
                type: "add",
                object: this,
                name: a,
                newValue: c
              } : null;
            e && H(k);
            d && U(this, k);
            e && I()
          };
          a.prototype.get = function(a) {
            a = "" + a;
            if (this.has(a)) return this._data[a].get()
          };
          a.prototype.keys = function() {
            return Ha(this._keys.slice())
          };
          a.prototype.values = function() {
            return Ha(this._keys.map(this.get, this))
          };
          a.prototype.entries = function() {
            var a = this;
            return Ha(this._keys.map(function(b) {
              return [b, a.get(b)]
            }))
          };
          a.prototype.forEach = function(a, c) {
            var b = this;
            this.keys().forEach(function(f) {
              return a.call(c, b.get(f), f, b)
            })
          };
          a.prototype.merge = function(a) {
            var b = this;
            J(a) && (a = a.toJS());
            ka(function() {
              ta(a) ? Object.keys(a).forEach(function(c) {
                return b.set(c, a[c])
              }) : Array.isArray(a) ? a.forEach(function(a) {
                return b.set(a[0], a[1])
              }) : ua(a) ? a.forEach(function(a, c) {
                return b.set(c, a)
              }) : null !== a && void 0 !== a && G("Cannot initialize map from " + a)
            });
            return this
          };
          a.prototype.clear = function() {
            var a = this;
            ka(function() {
              jb(function() {
                a.keys().forEach(a.delete, a)
              })
            })
          };
          a.prototype.replace = function(a) {
            var b = this;
            ka(function() {
              b.clear();
              b.merge(a)
            });
            return this
          };
          Object.defineProperty(a.prototype, "size", {
            get: function() {
              return this._keys.length
            },
            enumerable: !0,
            configurable: !0
          });
          a.prototype.toJS = function() {
            var a = this,
              c = {};
            this.keys().forEach(function(b) {
              return c[b] = a.get(b)
            });
            return c
          };
          a.prototype.toJSON = function() {
            return this.toJS()
          };
          a.prototype.isValidKey = function(a) {
            return null === a || void 0 === a ? !1 : "string" === typeof a || "number" === typeof a || "boolean" === typeof a ? !0 : !1
          };
          a.prototype.assertValidKey = function(a) {
            if (!this.isValidKey(a)) throw Error("[mobx.map] Invalid key: '" + a + "', only strings, numbers and booleans are accepted as key in observable maps.");
          };
          a.prototype.toString = function() {
            var a = this;
            return this.name + "[{ " + this.keys().map(function(b) {
              return b + ": " + ("" + a.get(b))
            }).join(", ") + " }]"
          };
          a.prototype.observe = function(a, c) {
            r(!0 !== c, w.m033);
            return Ga(this, a)
          };
          a.prototype.intercept = function(a) {
            return Fa(this, a)
          };
          return a
        }();
      d.ObservableMap = ma;
      Bb(ma.prototype, function() {
        return this.entries()
      });
      d.map = function(a) {
        oa("`mobx.map` is deprecated, use `new ObservableMap` or `mobx.observable.map` instead");
        return B.map(a)
      };
      var J = fa("ObservableMap", ma);
      d.isObservableMap = J;
      var ub = function() {
          function a(a, c) {
            this.target = a;
            this.name = c;
            this.values = {};
            this.interceptors = this.changeListeners = null
          }
          a.prototype.observe = function(a, c) {
            r(!0 !== c, "`observe` doesn't support the fire immediately property for observable objects.");
            return Ga(this, a)
          };
          a.prototype.intercept = function(a) {
            return Fa(this, a)
          };
          return a
        }(),
        wb = {},
        xb = {},
        Sb = fa("ObservableObjectAdministration", ub);
      d.isObservableObject = L;
      var xa = {},
        W = function(a) {
          function b(b, f, e, d) {
            void 0 === e && (e = "ObservableValue@" + C());
            void 0 === d && (d = !0);
            var c = a.call(this, e) || this;
            c.enhancer = f;
            c.hasUnreportedChange = !1;
            c.value = f(b, void 0, e);
            d && E() && S({
              type: "create",
              object: c,
              newValue: c.value
            });
            return c
          }
          Ja(b, a);
          b.prototype.set = function(a) {
            var b = this.value;
            a = this.prepareNewValue(a);
            if (a !== xa) {
              var c = E();
              c && H({
                type: "update",
                object: this,
                newValue: a,
                oldValue: b
              });
              this.setNewValue(a);
              c && I()
            }
          };
          b.prototype.prepareNewValue = function(a) {
            Pa(this);
            if (ba(this)) {
              a = ca(this, {
                object: this,
                type: "update",
                newValue: a
              });
              if (!a) return xa;
              a = a.newValue
            }
            a = this.enhancer(a, this.value, this.name);
            return this.value !== a ? a : xa
          };
          b.prototype.setNewValue = function(a) {
            var b = this.value;
            this.value = a;
            this.reportChanged();
            T(this) && U(this, {
              type: "update",
              object: this,
              newValue: a,
              oldValue: b
            })
          };
          b.prototype.get = function() {
            this.reportObserved();
            return this.value
          };
          b.prototype.intercept = function(a) {
            return Fa(this, a)
          };
          b.prototype.observe = function(a, b) {
            b && a({
              object: this,
              type: "update",
              newValue: this.value,
              oldValue: void 0
            });
            return Ga(this, a)
          };
          b.prototype.toJSON = function() {
            return this.get()
          };
          b.prototype.toString = function() {
            return this.name + "[" + this.value + "]"
          };
          b.prototype.valueOf = function() {
            return Gb(this.get())
          };
          return b
        }(za);
      W.prototype[Fb()] = W.prototype.valueOf;
      var cb = fa("ObservableValue", W);
      d.isBoxedObservable = cb;
      var Ab = "__$$iterating",
        w = {
          m001: "It is not allowed to assign new values to @action fields",
          m002: "`runInAction` expects a function",
          m003: "`runInAction` expects a function without arguments",
          m004: "autorun expects a function",
          m005: "Warning: attempted to pass an action to autorun. Actions are untracked and will not trigger on state changes. Use `reaction` or wrap only your state modification code in an action.",
          m006: "Warning: attempted to pass an action to autorunAsync. Actions are untracked and will not trigger on state changes. Use `reaction` or wrap only your state modification code in an action.",
          m007: "reaction only accepts 2 or 3 arguments. If migrating from MobX 2, please provide an options object",
          m008: "wrapping reaction expression in `asReference` is no longer supported, use options object instead",
          m009: "@computed can only be used on getter functions, like: '@computed get myProps() { return ...; }'. It looks like it was used on a property.",
          m010: "@computed can only be used on getter functions, like: '@computed get myProps() { return ...; }'",
          m011: "First argument to `computed` should be an expression. If using computed as decorator, don't pass it arguments",
          m012: "computed takes one or two arguments if used as function",
          m013: "[mobx.expr] 'expr' should only be used inside other reactive functions.",
          m014: "extendObservable expected 2 or more arguments",
          m015: "extendObservable expects an object as first argument",
          m016: "extendObservable should not be used on maps, use map.merge instead",
          m017: "all arguments of extendObservable should be objects",
          m018: "extending an object with another observable (object) is not supported. Please construct an explicit propertymap, using `toJS` if need. See issue #540",
          m019: "[mobx.isObservable] isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.",
          m020: "modifiers can only be used for individual object properties",
          m021: "observable expects zero or one arguments",
          m022: "@observable can not be used on getters, use @computed instead",
          m023: "Using `transaction` is deprecated, use `runInAction` or `(@)action` instead.",
          m024: "whyRun() can only be used if a derivation is active, or by passing an computed value / reaction explicitly. If you invoked whyRun from inside a computation; the computation is currently suspended but re-evaluating because somebody requested its value.",
          m025: "whyRun can only be used on reactions and computed values",
          m026: "`action` can only be invoked on functions",
          m028: "It is not allowed to set `useStrict` when a derivation is running",
          m029: "INTERNAL ERROR only onBecomeUnobserved shouldn't be called twice in a row",
          m030a: "Since strict-mode is enabled, changing observed observable values outside actions is not allowed. Please wrap the code in an `action` if this change is intended. Tried to modify: ",
          m030b: "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, the render function of a React component? Tried to modify: ",
          m031: "Computed values are not allowed to not cause side effects by changing observables that are already being observed. Tried to modify: ",
          m032: "* This computation is suspended (not in use by any reaction) and won't run automatically.\n  Didn't expect this computation to be suspended at this point?\n   1. Make sure this computation is used by a reaction (reaction, autorun, observer).\n    2. Check whether you are using this computation synchronously (in the same stack as they reaction that needs it).",
          m033: "`observe` doesn't support the fire immediately property for observable maps.",
          m034: "`mobx.map` is deprecated, use `new ObservableMap` or `mobx.observable.map` instead",
          m035: "Cannot make the designated object observable; it is not extensible",
          m036: "It is not possible to get index atoms from arrays",
          m037: 'Hi there! I\'m sorry you have just run into an exception.\nIf your debugger ends up here, know that some reaction (like the render() of an observer component, autorun or reaction)\nthrew an exception and that mobx caught it, to avoid that it brings the rest of your application down.\nThe original cause of the exception (the code that caused this reaction to run (again)), is still in the stack.\n\nHowever, more interesting is the actual stack trace of the error itself.\nHopefully the error is an instanceof Error, because in that case you can inspect the original stack of the error from where it was thrown.\nSee `error.stack` property, or press the very subtle "(...)" link you see near the console.error message that probably brought you here.\nThat stack is more interesting than the stack of this console.error itself.\n\nIf the exception you see is an exception you created yourself, make sure to use `throw new Error("Oops")` instead of `throw "Oops"`,\nbecause the javascript environment will only preserve the original stack trace in the first form.\n\nYou can also make sure the debugger pauses the next time this very same exception is thrown by enabling "Pause on caught exception".\n(Note that it might pause on many other, unrelated exception as well).\n\nIf that all doesn\'t help you out, feel free to open an issue https://github.com/mobxjs/mobx/issues!\n',
          m038: "Missing items in this list?\n    1. Check whether all used values are properly marked as observable (use isObservable to verify)\n    2. Make sure you didn't dereference values too early. MobX observes props, not primitives. E.g: use 'person.name' instead of 'name' in your computation.\n"
        },
        Za = [];
      Object.freeze(Za);
      var Cb = [],
        Jb = function() {},
        Ca = Object.prototype.hasOwnProperty;
      d.isArrayLike = Wa
    }).call(d, v(4))
  }, function(F, d, v) {
    Object.defineProperty(d, "__esModule", {
      value: !0
    });
    var t = function() {
        return function(d, n) {
          if (Array.isArray(d)) return d;
          if (Symbol.iterator in Object(d)) {
            var h = [],
              u = !0,
              k = !1,
              e = void 0;
            try {
              for (var x = d[Symbol.iterator](), q; !(u = (q = x.next()).done) && (h.push(q.value), !n || h.length !== n); u = !0);
            } catch (p) {
              k = !0, e = p
            } finally {
              try {
                if (!u && x["return"]) x["return"]()
              } finally {
                if (k) throw e;
              }
            }
            return h
          }
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
      }(),
      z = v(6),
      ha = v(0);
    d.
  default = {
      render: function(d, n) {
        var h = document.createElement("div");
        h.lang = "en-US";
        h.className = "gitment-container gitment-root-container";
        h.appendChild(n.renderHeader(d, n));
        h.appendChild(n.renderComments(d, n));
        h.appendChild(n.renderEditor(d, n));
        h.appendChild(n.renderFooter(d, n));
        return h
      },
      renderHeader: function(d, n) {
        var h = d.meta,
          u = d.user,
          k = d.reactions;
        d = document.createElement("div");
        d.lang = "en-US";
        d.className = "gitment-container gitment-header-container";
        var e = document.createElement("span");
        k = k.find(function(e) {
          return "heart" === e.content && e.user.login === u.login
        });
        e.className = "gitment-header-like-btn";
        e.innerHTML = z.heart + (h.reactions && h.reactions.heart ? " " + h.reactions.heart + " " : "") + "\u559c\u6b22";
        k ? (e.classList.add("liked"), e.onclick = function() {
          return n.unlike()
        }) : (e.classList.remove("liked"), e.onclick = function() {
          return n.like()
        });
        d.appendChild(e);
        document.createElement("span").innerHTML = "\n    " + (h.comments ? " \u2022 <strong>" + h.comments + "</strong> \u4e2a\u8bc4\u8bba" : "") + "\n  ";
        e = document.createElement("a");
        e.className = "gitment-header-issue-link";
        e.href = h.html_url;
        e.target = "_blank";
        e.innerText = "Issue Page";
        return d
      },
      renderComments: function(d, n) {
        var h = d.meta,
          A = d.comments,
          k = d.commentReactions,
          e = d.currentPage,
          x = d.user,
          q = d.error;
        d = document.createElement("div");
        d.lang = "en-US";
        d.className = "gitment-container gitment-comments-container";
        if (q) {
          h = document.createElement("div");
          h.className = "gitment-comments-error";
          if (q === ha.NOT_INITIALIZED_ERROR && x.login && x.login.toLowerCase() === n.owner.toLowerCase()) {
            A = document.createElement("div");
            var p = document.createElement("button");
            p.className = "gitment-comments-init-btn";
            p.onclick = function() {
              p.setAttribute("disabled", !0);
              n.init().
              catch (function(d) {
                p.removeAttribute("disabled");
                alert(d)
              })
            };
            p.innerText = "Initialize Comments";
            A.appendChild(p);
            h.appendChild(A)
          } else h.innerText = q;
          d.appendChild(h);
          return d
        }
        if (void 0 === A) return h = document.createElement("div"), h.innerText = "\u8bc4\u8bba\u52a0\u8f7d...", h.className = "gitment-comments-loading", d.appendChild(h), d;
        if (!A.length) return h = document.createElement("div"), h.className = "gitment-comments-empty", h.innerText = "\u6682\u65e0\u8bc4\u8bba", d.appendChild(h), d;
        var t = document.createElement("ul");
        t.className = "gitment-comments-list";
        A.forEach(function(d) {
          var e = new Date(d.created_at),
            h = new Date(d.updated_at),
            q = "\u4e00\u6708 \u4e8c\u6708 \u4e09\u6708 \u56db\u6708 \u4e94\u6708 \u516d\u6708 \u4e03\u6708 \u516b\u6708 \u4e5d\u6708 \u5341\u6708 \u5341\u4e00\u6708 \u5341\u4e8c\u6708".split(" "),
            p = document.createElement("li");
          p.className = "gitment-comment";
          p.innerHTML = '\n      <a class="gitment-comment-avatar" href="' + d.user.html_url + '" target="_blank">\n        <img class="gitment-comment-avatar-img" src="' + d.user.avatar_url + '"/>\n      </a>\n      <div class="gitment-comment-main">\n        <div class="gitment-comment-header">\n          <a class="gitment-comment-name" href="' + d.user.html_url + '" target="_blank">' + d.user.login + "</a>" + (e.toString() !== h.toString() ? '<span class="gitment-comment-header" title="comment was edited at ' + h + '">\u4fee\u6539\u4e8e\uff1a' + q[h.getMonth()] + " " + h.getDate() + ", " + h.getFullYear() + "</span>" : '<span class="gitment-comment-header" title="comment on ' + e + '">\u8bc4\u8bba\u4e8e\uff1a' + q[e.getMonth()] + " " + e.getDate() + ", " + e.getFullYear()) + '</span>\n          <div class="gitment-comment-like-btn">' + z.heart + " " + (d.reactions.heart || "") + '\n            </div></div>\n        <div class="gitment-comment-body gitment-markdown">' + d.body_html + "</div>\n          </div>\n          ";
          e = p.querySelector(".gitment-comment-like-btn");
          k[d.id] && k[d.id].find(function(d) {
            return "heart" === d.content && d.user.login === x.login
          }) ? (e.classList.add("liked"), e.onclick = function() {
            return n.unlikeAComment(d.id)
          }) : (e.classList.remove("liked"), e.onclick = function() {
            return n.likeAComment(d.id)
          });
          e = document.createElement("img");
          var u = p.querySelector(".gitment-comment-body");
          e.className = "gitment-hidden";
          e.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
          e.onload = function() {
            u.clientHeight > n.maxCommentHeight && (u.classList.add("gitment-comment-body-folded"), u.style.maxHeight = n.maxCommentHeight + "px", u.title = "Click to Expand", u.onclick = function() {
              u.classList.remove("gitment-comment-body-folded");
              u.style.maxHeight = "";
              u.title = "";
              u.onclick = null
            })
          };
          p.appendChild(e);
          t.appendChild(p)
        });
        d.appendChild(t);
        if (h && (h = Math.ceil(h.comments / n.perPage), 1 < h)) {
          var u = document.createElement("ul");
          u.className = "gitment-comments-pagination";
          1 < e && (A = document.createElement("li"), A.className = "gitment-comments-page-item", A.innerText = "Previous", A.onclick = function() {
            return n.goto(e - 1)
          }, u.appendChild(A));
          A = function(d) {
            var k = document.createElement("li");
            k.className = "gitment-comments-page-item";
            k.innerText = d;
            k.onclick = function() {
              return n.goto(d)
            };
            e === d && k.classList.add("gitment-selected");
            u.appendChild(k)
          };
          for (q = 1; q <= h; q++) A(q);
          e < h && (h = document.createElement("li"), h.className = "gitment-comments-page-item", h.innerText = "Next", h.onclick = function() {
            return n.goto(e + 1)
          }, u.appendChild(h));
          d.appendChild(u)
        }
        return d
      },
      renderEditor: function(d, n) {
        var h = d.user,
          A = d.error;
        d = document.createElement("div");
        d.lang = "en-US";
        d.className = "gitment-container gitment-editor-container";
        A = h.login && !A ? "" : "disabled";
        var k = h.login ? "" : "Login to Comment";
        d.innerHTML = "\n      " + (h.login ? '<a class="gitment-editor-avatar" href="' + h.html_url + '" target="_blank">\n            <img class="gitment-editor-avatar-img" src="' + h.avatar_url + '"/>\n          </a>' : h.isLoggingIn ? '<div class="gitment-editor-avatar">' + z.spinner + "</div>" : '<a class="gitment-editor-avatar" href="' + n.loginLink + '" title="login with GitHub">\n              ' + z.github + "\n            </a>") + '\n    </a>\n    <div class="gitment-editor-main">\n      <div class="gitment-editor-header">\n        <nav class="gitment-editor-tabs">\n          <button class="gitment-editor-tab gitment-selected">\u8f93\u5165</button>\n          <button class="gitment-editor-tab">\u9884\u89c8</button>\n        </nav>\n              </div>\n      <div class="gitment-editor-body">\n        <div class="gitment-editor-write-field">\n          <textarea placeholder="\u8bf4\u70b9\u4ec0\u4e48" title="' + k + '" ' + A + '></textarea>\n        </div>\n        <div class="gitment-editor-preview-field gitment-hidden">\n          <div class="gitment-editor-preview gitment-markdown"></div>\n        </div>\n      </div>\n    </div>\n    <div class="gitment-editor-footer">\n      <a class="gitment-editor-footer-tip" href="https://guides.github.com/features/mastering-markdown/" target="_blank">\n<svg class="icon" style="vertical-align: middle;" width="1em" height="1em" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M895.318 192 128.682 192C93.008 192 64 220.968 64 256.616l0 510.698C64 802.986 93.008 832 128.682 832l766.636 0C930.992 832 960 802.986 960 767.312L960 256.616C960 220.968 930.992 192 895.318 192zM568.046 704l-112.096 0 0-192-84.08 107.756L287.826 512l0 192L175.738 704 175.738 320l112.088 0 84.044 135.96 84.08-135.96 112.096 0L568.046 704 568.046 704zM735.36 704l-139.27-192 84 0 0-192 112.086 0 0 192 84.054 0-140.906 192L735.36 704z" /></svg>         supported\n      </a>\n      <button class="gitment-editor-submit" title="' + k + '" ' + A + ">\u53d1\u8868\u8bc4\u8bba</button>\n    </div>\n  ";
        h.login && (d.querySelector(".gitment-editor-logout-link").onclick = function() {
          return n.logout()
        });
        var e = d.querySelector(".gitment-editor-write-field"),
          x = d.querySelector(".gitment-editor-preview-field"),
          q = e.querySelector("textarea");
        q.oninput = function() {
          q.style.height = "auto";
          var d = window.getComputedStyle(q, null);
          d = parseInt(d.height, 10);
          var e = q.clientHeight,
            k = q.scrollHeight;
          e < k && (q.style.height = d + k - e + "px")
        };
        h = d.querySelectorAll(".gitment-editor-tab");
        h = t(h, 2);
        var p = h[0],
          u = h[1];
        p.onclick = function() {
          p.classList.add("gitment-selected");
          u.classList.remove("gitment-selected");
          e.classList.remove("gitment-hidden");
          x.classList.add("gitment-hidden");
          q.focus()
        };
        u.onclick = function() {
          u.classList.add("gitment-selected");
          p.classList.remove("gitment-selected");
          x.classList.remove("gitment-hidden");
          e.classList.add("gitment-hidden");
          var d = x.querySelector(".gitment-editor-preview"),
            k = q.value.trim();
          k ? (d.innerText = "Loading preview...", n.markdown(k).then(function(e) {
            return d.innerHTML = e
          })) : d.innerText = "\u8bf4\u70b9\u4ec0\u4e48"
        };
        var v = d.querySelector(".gitment-editor-submit");
        v.onclick = function() {
          v.innerText = "\u53d1\u5e03\u4e2d...";
          v.setAttribute("disabled", !0);
          n.post(q.value.trim()).then(function(d) {
            q.value = "";
            q.style.height = "auto";
            v.removeAttribute("disabled");
            v.innerText = "\u53d1\u8868\u8bc4\u8bba"
          }).
          catch (function(d) {
            alert(d);
            v.removeAttribute("disabled");
            v.innerText = "\u53d1\u8868\u8bc4\u8bba"
          })
        };
        return d
      },
      renderFooter: function() {
        var d = document.createElement("div");
        d.lang = "en-US";
        d.className = "gitment-container gitment-footer-container";
        d.innerHTML = '\n    Powered by\n    <a class="gitment-footer-project-link" href="https://github.com/imsun/gitment" target="_blank">\n      Gitment\n    </a>\n  ';
        return d
      }
    }
  }, function(F, d, v) {
    function t(d) {
      return function(h) {
        var k = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
          e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "https://api.github.com",
          x = new XMLHttpRequest,
          q = localStorage.getItem(ha.LS_ACCESS_TOKEN_KEY);
        e = "" + e + h;
        var p = null;
        if ("GET" === d || "DELETE" === d) e += n.stringify(k);
        var t = new Promise(function(d, e) {
          x.addEventListener("load", function() {
            var k = x.getResponseHeader("content-type"),
              h = x.responseText;
            /json/.test(k) ? (k = x.responseText ? JSON.parse(h) : {}, k.message ? e(Error(k.message)) : d(k)) : d(h)
          });
          x.addEventListener("error", function(d) {
            return e(d)
          })
        });
        x.open(d, e, !0);
        x.setRequestHeader("Accept", "application/vnd.github.squirrel-girl-preview, application/vnd.github.html+json");
        q && x.setRequestHeader("Authorization", "token " + q);
        "GET" !== d && "DELETE" !== d && (p = JSON.stringify(k), x.setRequestHeader("Content-Type", "application/json"));
        x.send(p);
        return t
      }
    }
    Object.defineProperty(d, "__esModule", {
      value: !0
    });
    d.http = d.Query = d.isString = void 0;
    var z = function() {
        return function(d, n) {
          if (Array.isArray(d)) return d;
          if (Symbol.iterator in Object(d)) {
            var k = [],
              e = !0,
              h = !1,
              q = void 0;
            try {
              for (var p = d[Symbol.iterator](), t; !(e = (t = p.next()).done) && (k.push(t.value), !n || k.length !== n); e = !0);
            } catch (R) {
              h = !0, q = R
            } finally {
              try {
                if (!e && p["return"]) p["return"]()
              } finally {
                if (h) throw q;
              }
            }
            return k
          }
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
      }();
    d.getTargetContainer = function(d) {
      return d instanceof Element ? d : u(d) ? document.getElementById(d) : document.createElement("div")
    };
    var ha = v(0),
      u = d.isString = function(d) {
        return "[object String]" === toString.call(d)
      },
      n = d.Query = {
        parse: function() {
          var d = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : window.location.search;
          if (!d) return {};
          var n = {};
          ("?" === d[0] ? d.substring(1) : d).split("&").forEach(function(d) {
            d = d.split("=");
            var e = z(d, 2);
            d = e[0];
            e = e[1];
            d && (n[d] = e)
          });
          return n
        },
        stringify: function(d) {
          var h = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "?",
            k = Object.keys(d).map(function(e) {
              return e + "=" + encodeURIComponent(d[e] || "")
            }).join("&");
          return k ? h + k : ""
        }
      };
    d.http = {
      get: t("GET"),
      post: t("POST"),
      delete: t("DELETE"),
      put: t("PUT")
    }
  }, function(F, d, v) {
    d = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ?
    function(d) {
      return typeof d
    } : function(d) {
      return d && "function" === typeof Symbol && d.constructor === Symbol && d !== Symbol.prototype ? "symbol" : typeof d
    };
    v = function() {
      return this
    }();
    try {
      v = v || Function("return this")() || (0, eval)("this")
    } catch (t) {
      "object" === ("undefined" === typeof window ? "undefined" : d(window)) && (v = window)
    }
    F.exports = v
  }, function(F, d, v) {
    function t(d, k) {
      d[k] = function(e) {
        var h = (0, n.getTargetContainer)(e),
          q = d.theme[k] || d.defaultTheme[k];
        (0, ha.autorun)(function() {
          var e = q(d.state, d);
          h.firstChild ? h.replaceChild(e, h.firstChild) : h.appendChild(e)
        });
        return h
      }
    }
    var z = function() {
        function d(d, e) {
          for (var k = 0; k < e.length; k++) {
            var h = e[k];
            h.enumerable = h.enumerable || !1;
            h.configurable = !0;
            "value" in h && (h.writable = !0);
            Object.defineProperty(d, h.key, h)
          }
        }
        return function(k, e, h) {
          e && d(k.prototype, e);
          h && d(k, h);
          return k
        }
      }(),
      ha = v(1),
      u = v(0),
      n = v(3),
      h = (d = v(2)) && d.__esModule ? d : {
      default:
        d
      };
    d = function() {
      function d() {
        var k = this,
          e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
        if (!(this instanceof d)) throw new TypeError("Cannot call a class as a function");
        this.defaultTheme = h.
      default;
        this.useTheme(h.
      default);
        Object.assign(this, {
          id: window.location.href,
          title: window.document.title,
          link: window.location.href,
          desc: "",
          labels: [],
          theme: h.
        default,
          oauth:
          {},
          perPage: 20,
          maxCommentHeight: 250
        }, e);
        this.useTheme(this.theme);
        var x = {};
        try {
          var q = localStorage.getItem(u.LS_USER_KEY);
          this.accessToken && q && Object.assign(x, JSON.parse(q), {
            fromCache: !0
          })
        } catch (R) {
          localStorage.removeItem(u.LS_USER_KEY)
        }
        this.state = (0, ha.observable)({
          user: x,
          error: null,
          meta: {},
          comments: void 0,
          reactions: [],
          commentReactions: {},
          currentPage: 1
        });
        var p = n.Query.parse();
        if (p.code) {
          q = this.oauth;
          x = q.client_id;
          q = q.client_secret;
          var t = p.code;
          delete p.code;
          p = n.Query.stringify(p);
          p = "" + window.location.origin + window.location.pathname + p + window.location.hash;
          history.replaceState({}, "", p);
          Object.assign(this, {
            id: p,
            link: p
          }, e);
          this.state.user.isLoggingIn = !0;
          n.http.post("https://auth.baixiaotu.cc", {
            code: t,
            client_id: x,
            client_secret: q
          }, "").then(function(d) {
            k.accessToken = d.access_token;
            k.update()
          }).
          catch (function(d) {
            k.state.user.isLoggingIn = !1;
            alert(d)
          })
        } else this.update()
      }
      z(d, [{
        key: "accessToken",
        get: function() {
          return localStorage.getItem(u.LS_ACCESS_TOKEN_KEY)
        },
        set: function(d) {
          localStorage.setItem(u.LS_ACCESS_TOKEN_KEY, d)
        }
      }, {
        key: "loginLink",
        get: function() {
          var d = Object.assign({
            scope: "public_repo",
            redirect_uri: this.oauth.redirect_uri || window.location.href
          }, this.oauth);
          return "https://github.com/login/oauth/authorize" + n.Query.stringify(d)
        }
      }]);
      z(d, [{
        key: "init",
        value: function() {
          var d = this;
          return this.createIssue().then(function() {
            return d.loadComments()
          }).then(function(e) {
            d.state.error = null;
            return e
          })
        }
      }, {
        key: "useTheme",
        value: function() {
          var d = this;
          this.theme = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
          Object.keys(this.theme).forEach(function(e) {
            return t(d, e)
          })
        }
      }, {
        key: "update",
        value: function() {
          var d = this;
          return Promise.all([this.loadMeta(), this.loadUserInfo()]).then(function() {
            return Promise.all([d.loadComments().then(function() {
              return d.loadCommentReactions()
            }), d.loadReactions()])
          }).
          catch (function(e) {
            return d.state.error = e
          })
        }
      }, {
        key: "markdown",
        value: function(d) {
          return n.http.post("/markdown", {
            text: d,
            mode: "gfm"
          })
        }
      }, {
        key: "createIssue",
        value: function() {
          var d = this,
            e = this.link,
            h = this.desc;
          return n.http.post("/repos/" + this.owner + "/" + this.repo + "/issues", {
            title: this.title,
            labels: this.labels.concat(["gitment", this.id]),
            body: e + "\n\n" + h
          }).then(function(e) {
            return d.state.meta = e
          })
        }
      }, {
        key: "getIssue",
        value: function() {
          return this.state.meta.id ? Promise.resolve(this.state.meta) : this.loadMeta()
        }
      }, {
        key: "post",
        value: function(d) {
          var e = this;
          return this.getIssue().then(function(e) {
            return n.http.post(e.comments_url, {
              body: d
            }, "")
          }).then(function(d) {
            e.state.meta.comments++;
            e.state.currentPage === Math.ceil(e.state.meta.comments / e.perPage) && e.state.comments.push(d);
            return d
          })
        }
      }, {
        key: "loadMeta",
        value: function() {
          var d = this,
            e = this.owner;
          return n.http.get("/repos/" + e + "/" + this.repo + "/issues", {
            creator: e,
            labels: this.id
          }).then(function(e) {
            if (!e.length) return Promise.reject(u.NOT_INITIALIZED_ERROR);
            d.state.meta = e[0];
            return e[0]
          })
        }
      }, {
        key: "loadComments",
        value: function() {
          var d = this,
            e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.state.currentPage;
          return this.getIssue().then(function(k) {
            return n.http.get(k.comments_url, {
              page: e,
              per_page: d.perPage
            }, "")
          }).then(function(e) {
            return d.state.comments = e
          })
        }
      }, {
        key: "loadUserInfo",
        value: function() {
          var d = this;
          return this.accessToken ? n.http.get("/user").then(function(e) {
            d.state.user = e;
            localStorage.setItem(u.LS_USER_KEY, JSON.stringify(e));
            return e
          }) : (this.logout(), Promise.resolve({}))
        }
      }, {
        key: "loadReactions",
        value: function() {
          var d = this;
          return this.accessToken ? this.getIssue().then(function(d) {
            return d.reactions.total_count ? n.http.get(d.reactions.url, {}, "") : []
          }).then(function(e) {
            return d.state.reactions = e
          }) : (this.state.reactions = [], Promise.resolve([]))
        }
      }, {
        key: "loadCommentReactions",
        value: function() {
          var d = this;
          if (!this.accessToken) return this.state.commentReactions = {}, Promise.resolve([]);
          var e = this.state.comments,
            h = {};
          return Promise.all(e.map(function(e) {
            return e.reactions.total_count ? n.http.get("/repos/" + d.owner + "/" + d.repo + "/issues/comments/" + e.id + "/reactions", {}) : []
          })).then(function(k) {
            e.forEach(function(d, e) {
              h[d.id] = k[e]
            });
            return d.state.commentReactions = h
          })
        }
      }, {
        key: "login",
        value: function() {
          window.location.href = this.loginLink
        }
      }, {
        key: "logout",
        value: function() {
          localStorage.removeItem(u.LS_ACCESS_TOKEN_KEY);
          localStorage.removeItem(u.LS_USER_KEY);
          this.state.user = {}
        }
      }, {
        key: "goto",
        value: function(d) {
          this.state.currentPage = d;
          this.state.comments = void 0;
          return this.loadComments(d)
        }
      }, {
        key: "like",
        value: function() {
          var d = this;
          return this.accessToken ? n.http.post("/repos/" + this.owner + "/" + this.repo + "/issues/" + this.state.meta.number + "/reactions", {
            content: "heart"
          }).then(function(e) {
            d.state.reactions.push(e);
            d.state.meta.reactions.heart++
          }) : (alert("Login to Like"), Promise.reject())
        }
      }, {
        key: "unlike",
        value: function() {
          var d = this;
          if (!this.accessToken) return Promise.reject();
          var e = this.state,
            h = e.user,
            q = e.reactions,
            p = q.findIndex(function(d) {
              return d.user.login === h.login
            });
          return n.http.delete("/reactions/" + q[p].id).then(function() {
            q.splice(p, 1);
            d.state.meta.reactions.heart--
          })
        }
      }, {
        key: "likeAComment",
        value: function(d) {
          var e = this;
          if (!this.accessToken) return alert("Login to Like"), Promise.reject();
          var h = this.owner,
            k = this.repo,
            p = this.state.comments.find(function(e) {
              return e.id === d
            });
          return n.http.post("/repos/" + h + "/" + k + "/issues/comments/" + d + "/reactions", {
            content: "heart"
          }).then(function(h) {
            e.state.commentReactions[d].push(h);
            p.reactions.heart++
          })
        }
      }, {
        key: "unlikeAComment",
        value: function(d) {
          if (!this.accessToken) return Promise.reject();
          var e = this.state.commentReactions[d],
            h = this.state.comments.find(function(e) {
              return e.id === d
            }),
            k = this.state.user,
            p = e.findIndex(function(d) {
              return d.user.login === k.login
            });
          return n.http.delete("/reactions/" + e[p].id).then(function() {
            e.splice(p, 1);
            h.reactions.heart--
          })
        }
      }]);
      return d
    }();
    F.exports = d
  }, function(F, d, v) {
    Object.defineProperty(d, "__esModule", {
      value: !0
    });
    d.close = '<svg class="gitment-close-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M37.304 11.282l1.414 1.414-26.022 26.02-1.414-1.413z"/><path d="M12.696 11.282l26.022 26.02-1.414 1.415-26.022-26.02z"/></svg>';
    d.github = '<svg style="vertical-align: middle;" class="icon" fill="#999" viewBox="0 0 1049 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M524.979332 0C234.676191 0 0 234.676191 0 524.979332c0 232.068678 150.366597 428.501342 358.967656 498.035028 26.075132 5.215026 35.636014-11.299224 35.636014-25.205961 0-12.168395-0.869171-53.888607-0.869171-97.347161-146.020741 31.290159-176.441729-62.580318-176.441729-62.580318-23.467619-60.841976-58.234462-76.487055-58.234463-76.487055-47.804409-32.15933 3.476684-32.15933 3.476685-32.15933 53.019436 3.476684 80.83291 53.888607 80.83291 53.888607 46.935238 79.963739 122.553122 57.365291 152.97411 43.458554 4.345855-33.897672 18.252593-57.365291 33.028501-70.402857-116.468925-12.168395-239.022047-57.365291-239.022047-259.012982 0-57.365291 20.860106-104.300529 53.888607-140.805715-5.215026-13.037566-23.467619-66.926173 5.215027-139.067372 0 0 44.327725-13.906737 144.282399 53.888607 41.720212-11.299224 86.917108-17.383422 131.244833-17.383422s89.524621 6.084198 131.244833 17.383422C756.178839 203.386032 800.506564 217.29277 800.506564 217.29277c28.682646 72.1412 10.430053 126.029806 5.215026 139.067372 33.897672 36.505185 53.888607 83.440424 53.888607 140.805715 0 201.64769-122.553122 245.975415-239.891218 259.012982 19.121764 16.514251 35.636014 47.804409 35.636015 97.347161 0 70.402857-0.869171 126.898978-0.869172 144.282399 0 13.906737 9.560882 30.420988 35.636015 25.205961 208.601059-69.533686 358.967656-265.96635 358.967655-498.035028C1049.958663 234.676191 814.413301 0 524.979332 0z" /><path d="M199.040177 753.571326c-0.869171 2.607513-5.215026 3.476684-8.691711 1.738342s-6.084198-5.215026-4.345855-7.82254c0.869171-2.607513 5.215026-3.476684 8.691711-1.738342s5.215026 5.215026 4.345855 7.82254z m-6.953369-4.345856M219.900283 777.038945c-2.607513 2.607513-7.82254 0.869171-10.430053-2.607514-3.476684-3.476684-4.345855-8.691711-1.738342-11.299224 2.607513-2.607513 6.953369-0.869171 10.430053 2.607514 3.476684 4.345855 4.345855 9.560882 1.738342 11.299224z m-5.215026-5.215027M240.760389 807.459932c-3.476684 2.607513-8.691711 0-11.299224-4.345855-3.476684-4.345855-3.476684-10.430053 0-12.168395 3.476684-2.607513 8.691711 0 11.299224 4.345855 3.476684 4.345855 3.476684 9.560882 0 12.168395z m0 0M269.443034 837.011749c-2.607513 3.476684-8.691711 2.607513-13.906737-1.738342-4.345855-4.345855-6.084198-10.430053-2.607513-13.037566 2.607513-3.476684 8.691711-2.607513 13.906737 1.738342 4.345855 3.476684 5.215026 9.560882 2.607513 13.037566z m0 0M308.555733 853.526c-0.869171 4.345855-6.953369 6.084198-13.037566 4.345855-6.084198-1.738342-9.560882-6.953369-8.691711-10.430053 0.869171-4.345855 6.953369-6.084198 13.037566-4.345855 6.084198 1.738342 9.560882 6.084198 8.691711 10.430053z m0 0M351.145116 857.002684c0 4.345855-5.215026 7.82254-11.299224 7.82254-6.084198 0-11.299224-3.476684-11.299224-7.82254s5.215026-7.82254 11.299224-7.82254c6.084198 0 11.299224 3.476684 11.299224 7.82254z m0 0M391.126986 850.049315c0.869171 4.345855-3.476684 8.691711-9.560882 9.560882-6.084198 0.869171-11.299224-1.738342-12.168395-6.084197-0.869171-4.345855 3.476684-8.691711 9.560881-9.560882 6.084198-0.869171 11.299224 1.738342 12.168396 6.084197z m0 0" /></svg>';
    d.heart = '<svg width="1.6em" height="1.6em" class="gitment-heart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="#999"><path d="M25 39.7l-.6-.5C11.5 28.7 8 25 8 19c0-5 4-9 9-9 4.1 0 6.4 2.3 8 4.1 1.6-1.8 3.9-4.1 8-4.1 5 0 9 4 9 9 0 6-3.5 9.7-16.4 20.2l-.6.5zM17 12c-3.9 0-7 3.1-7 7 0 5.1 3.2 8.5 15 18.1 11.8-9.6 15-13 15-18.1 0-3.9-3.1-7-7-7-3.5 0-5.4 2.1-6.9 3.8L25 17.1l-1.1-1.3C22.4 14.1 20.5 12 17 12z"/></svg>';
    d.spinner = '<svg class="gitment-spinner-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M25 18c-.6 0-1-.4-1-1V9c0-.6.4-1 1-1s1 .4 1 1v8c0 .6-.4 1-1 1z"/><path opacity=".3" d="M25 42c-.6 0-1-.4-1-1v-8c0-.6.4-1 1-1s1 .4 1 1v8c0 .6-.4 1-1 1z"/><path opacity=".3" d="M29 19c-.2 0-.3 0-.5-.1-.4-.3-.6-.8-.3-1.3l4-6.9c.3-.4.8-.6 1.3-.3.4.3.6.8.3 1.3l-4 6.9c-.2.2-.5.4-.8.4z"/><path opacity=".3" d="M17 39.8c-.2 0-.3 0-.5-.1-.4-.3-.6-.8-.3-1.3l4-6.9c.3-.4.8-.6 1.3-.3.4.3.6.8.3 1.3l-4 6.9c-.2.2-.5.4-.8.4z"/><path opacity=".93" d="M21 19c-.3 0-.6-.2-.8-.5l-4-6.9c-.3-.4-.1-1 .3-1.3.4-.3 1-.1 1.3.3l4 6.9c.3.4.1 1-.3 1.3-.2.2-.3.2-.5.2z"/><path opacity=".3" d="M33 39.8c-.3 0-.6-.2-.8-.5l-4-6.9c-.3-.4-.1-1 .3-1.3.4-.3 1-.1 1.3.3l4 6.9c.3.4.1 1-.3 1.3-.2.1-.3.2-.5.2z"/><path opacity=".65" d="M17 26H9c-.6 0-1-.4-1-1s.4-1 1-1h8c.6 0 1 .4 1 1s-.4 1-1 1z"/><path opacity=".3" d="M41 26h-8c-.6 0-1-.4-1-1s.4-1 1-1h8c.6 0 1 .4 1 1s-.4 1-1 1z"/><path opacity=".86" d="M18.1 21.9c-.2 0-.3 0-.5-.1l-6.9-4c-.4-.3-.6-.8-.3-1.3.3-.4.8-.6 1.3-.3l6.9 4c.4.3.6.8.3 1.3-.2.3-.5.4-.8.4z"/><path opacity=".3" d="M38.9 33.9c-.2 0-.3 0-.5-.1l-6.9-4c-.4-.3-.6-.8-.3-1.3.3-.4.8-.6 1.3-.3l6.9 4c.4.3.6.8.3 1.3-.2.3-.5.4-.8.4z"/><path opacity=".44" d="M11.1 33.9c-.3 0-.6-.2-.8-.5-.3-.4-.1-1 .3-1.3l6.9-4c.4-.3 1-.1 1.3.3.3.4.1 1-.3 1.3l-6.9 4c-.1.2-.3.2-.5.2z"/><path opacity=".3" d="M31.9 21.9c-.3 0-.6-.2-.8-.5-.3-.4-.1-1 .3-1.3l6.9-4c.4-.3 1-.1 1.3.3.3.4.1 1-.3 1.3l-6.9 4c-.2.2-.3.2-.5.2z"/></svg>'
  }]);