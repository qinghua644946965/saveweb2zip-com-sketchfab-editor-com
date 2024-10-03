"use strict";
(self.webpackChunksketchfab = self.webpackChunksketchfab || []).push([
  [109],
  {
    "560e": (e, t, n) => {
      n.d(t, { JM: () => v, ZP: () => y, n_: () => h });
      var r,
        o = n("L0SH"),
        i = n("qD8I"),
        u = n("CUcO"),
        a = n("xKIK"),
        c = n("5hHH");
      function s(e, t) {
        var n =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return f(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return f(e, t);
            })(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var i,
          u = !0,
          a = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (u = e.done), e;
          },
          e: function (e) {
            (a = !0), (i = e);
          },
          f: function () {
            try {
              u || null == n.return || n.return();
            } finally {
              if (a) throw i;
            }
          },
        };
      }
      function f(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                (0, a.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      !(function (e) {
        (e.Push = "push"),
          (e.Replace = "replace"),
          (e.Reload = "reload"),
          (e.NoOp = "noOp");
      })(r || (r = {}));
      var d = 0,
        v = {
          push: function (e) {
            return { type: r.Push, onCreate: e };
          },
          replace: function (e) {
            return { type: r.Replace, onCreate: e };
          },
          reload: function () {
            return { type: r.Reload };
          },
          noOp: function () {
            return { type: r.NoOp };
          },
        },
        h = function () {
          window.scrollTo(0, 0), window.location.reload();
        },
        y = (function () {
          function e() {
            var t = this;
            (0, i.Z)(this, e),
              (0, a.Z)(this, "isFirstRouterRun", !0),
              (0, a.Z)(this, "routes", []),
              (0, a.Z)(this, "activeRoutesStack", []),
              (0, a.Z)(this, "handlingRoute", null),
              (0, a.Z)(this, "onHistoryChange", void 0);
            var n = function (e, n) {
                var r = { routeWasAdded: "ADD" === n };
                t.handlingRoute !== e && e.lifecycle.onStartHandling(r),
                  (t.handlingRoute = e);
              },
              u = function (e) {
                var r = t.activeRoutesStack[0];
                r &&
                  (function (e) {
                    (t.isFirstRouterRun = !1),
                      t.handlingRoute === e && e.lifecycle.onStopHandling(),
                      (t.handlingRoute = null);
                  })(r),
                  t.activeRoutesStack.unshift(e),
                  e.lifecycle.onCreate(),
                  n(e, "ADD");
              },
              f = function (e) {
                (t.isFirstRouterRun = !1),
                  e.lifecycle.onRemove(),
                  (t.activeRoutesStack = t.activeRoutesStack.filter(function (
                    t
                  ) {
                    return t !== e;
                  }));
              };
            (this.onHistoryChange = function (e, i) {
              t.isFirstRouterRun && (t.isFirstRouterRun = ++d <= 1);
              var a,
                c = s(t.routes);
              try {
                var l = function () {
                  var o = a.value,
                    c = o.name,
                    l = o.test,
                    d = o.handler,
                    v = l(e).caseOf({
                      None: function () {
                        return !1;
                      },
                      Some: function (e) {
                        var o = p(
                            p({}, i),
                            {},
                            {
                              isHydration: function () {
                                return t.isFirstRouterRun;
                              },
                              activeRoutes: t.activeRoutesStack,
                            }
                          ),
                          a = d(e, o);
                        switch (a.type) {
                          case r.Replace:
                          case r.Push:
                            return (
                              (function (e, o, i) {
                                var a,
                                  c = s(t.activeRoutesStack);
                                try {
                                  for (c.s(); !(a = c.n()).done; ) {
                                    var l = a.value;
                                    if (
                                      l.test === e.test &&
                                      ((t.isFirstRouterRun = !1),
                                      l.lifecycle.onUpdate(o, i))
                                    )
                                      return void n(l, "UPDATE");
                                    (e.type === r.Replace ||
                                      (l.type === r.Push && i.isBack)) &&
                                      f(l);
                                  }
                                } catch (e) {
                                  c.e(e);
                                } finally {
                                  c.f();
                                }
                                u(e);
                              })(
                                (function (e) {
                                  var t = e.name,
                                    n = e.test,
                                    r = e.onCreate,
                                    o = {
                                      type: e.type,
                                      name: t,
                                      test: n,
                                      lifecycle: {
                                        onRemove: function () {},
                                        onUpdate: function () {
                                          return !1;
                                        },
                                        onStartHandling: function () {},
                                        onStopHandling: function () {},
                                        onCreate: function () {
                                          o.lifecycle = p(
                                            p({}, o.lifecycle),
                                            r.apply(void 0, arguments) || {}
                                          );
                                        },
                                      },
                                    };
                                  return o;
                                })({
                                  type: a.type,
                                  name: c,
                                  test: l,
                                  onCreate: a.onCreate,
                                }),
                                e,
                                o
                              ),
                              !0
                            );
                          case "reload":
                            return h(), !0;
                          case "noOp":
                            return !0;
                        }
                      },
                    });
                  if (v) return { v: void 0 };
                };
                for (c.s(); !(a = c.n()).done; ) {
                  var v = l();
                  if ("object" === (0, o.Z)(v)) return v.v;
                }
              } catch (e) {
                c.e(e);
              } finally {
                c.f();
              }
              i.isBack && h();
            }),
              c.Z.listen(this.onHistoryChange);
          }
          return (
            (0, u.Z)(e, [
              {
                key: "add",
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  for (var r = 0, o = t; r < o.length; r++) {
                    var i = o[r];
                    this.routes.push(i);
                  }
                  return this;
                },
              },
              {
                key: "start",
                value: function () {
                  this.onHistoryChange(c.Z.getWindowUrl(), { isBack: !1 });
                },
              },
            ]),
            e
          );
        })();
    },
    vxiz: (e, t, n) => {
      n.d(t, {
        K5: () => g,
        PW: () => R,
        ie: () => O,
        no: () => P,
        p4: () => j,
        v_: () => w,
        ww: () => S,
      });
      var r = n("xKIK"),
        o = n("rEmB"),
        i = n("cSHm"),
        u = n("lrhy"),
        a = n("560e"),
        c = n("3Z9q"),
        s = n("bjID"),
        f = n("+zma"),
        l = n("iu9k"),
        p = n("Vnou"),
        d = n("Oyie");
      function v(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function h(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? v(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : v(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var y,
        g = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : l.EQ,
            n = "string" == typeof e ? [e] : e;
          return function (e) {
            e = e.replace(".html?disable_sentry=1","");
            debugger
            return n.reduce(function (n, r) {
              return n.caseOf({
                Some: function (e) {
                  return (0, p.G)(e);
                },
                None: function () {
                  var n = t(r, e);
                  return n ? (0, p.G)(n) : p.Y;
                },
              });
            }, p.Y);
          };
        },
        m = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : o.Z;
          return function (n, r) {
            return a.JM.replace(function () {
              if (r.isHydration()) {
                var o = d.resolve(e(n));
                return {
                  onStartHandling: function () {
                    o.then(function (e) {
                      return e.setOptions({ isCurrentRoute: !0 });
                    });
                  },
                  onStopHandling: function () {
                    o.then(function (e) {
                      return e.setOptions({ isCurrentRoute: !1 });
                    });
                  },
                  onUpdate: function (e) {
                    if (t(n, e)) return !0;
                    (0, a.n_)();
                  },
                  onRemove: function () {},
                };
              }
              (0, a.n_)();
            });
          };
        },
        O = function (e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            r = n.hasUpdated,
            o = "string" == typeof e ? [e] : e;
          return { name: o.join(","), test: g(e), handler: m(t, r) };
        },
        R = function (e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            r = n.hasUpdated;
          return { name: e, test: g(e, l.KQ), handler: m(t, r) };
        },
        b = function (e) {
          return function (t) {
            return a.JM.replace(function () {
              return (
                e(t),
                {
                  onUpdate: function (t) {
                    return e(t), !0;
                  },
                }
              );
            });
          };
        },
        P = function (e, t) {
          return {
            name: ("string" == typeof e ? [e] : e).join(","),
            test: g(e),
            handler: b(t),
          };
        },
        S = function (e, t) {
          return { name: e, test: g(e, l.KQ), handler: b(t) };
        },
        j = function (e, t) {
          return function (n, r) {
            return a.JM.replace(function () {
              var l,
                p = { routeParams: n, isCurrentRoute: !0 },
                v = function (e) {
                  return (
                    r.isHydration() &&
                    i.ZP.hasInitialPropsOf(t) &&
                    (0, o.Z)(n, e)
                  );
                },
                g = function (n) {
                  return u.k3.fromPromise(
                    v(n)
                      ? d.resolve(i.ZP.getInitialPropsOf(t))
                      : e.prepare
                      ? e.prepare({
                          services: h(
                            h({}, f.n2.services),
                            {},
                            {
                              dispatch: f.n2.store.dispatch,
                              getState: f.n2.store.getState,
                            }
                          ),
                          props: { routeParams: n, isCurrentRoute: !0 },
                          isServer: !1,
                        })
                      : d.resolve({})
                  );
                },
                m = function () {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    n =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1];
                  (p = h(h({}, p), t)),
                    (l = g(p.routeParams)
                      .then(function (t) {
                        var o = document.getElementById("root");
                        if (!o)
                          return (
                            console.error(
                              "renderReactPage Error: no '#root' element found on page "
                                .concat(name, " coming from ")
                                .concat(r.previousUrl, ". Reloading")
                            ),
                            (0, a.n_)()
                          );
                        var i = c.createElement(
                          f.n2.Provider,
                          null,
                          c.createElement(e, h(h({}, p), t))
                        );
                        v(p.routeParams)
                          ? (y = (0, s.hydrateRoot)(o, i, {
                              onRecoverableError: function (e) {
                                throw e;
                              },
                            }))
                          : (n &&
                              y &&
                              (y.unmount(), (y = (0, s.createRoot)(o))),
                            y.render(i));
                      })
                      .catch(function (e) {
                        return console.error("renderReactPage error:", e);
                      }));
                };
              return {
                onUpdate: function (e) {
                  return m({ routeParams: e }), !0;
                },
                onStartHandling: function (e) {
                  m({ isCurrentRoute: !0 }, e.routeWasAdded);
                },
                onStopHandling: function () {
                  m({ isCurrentRoute: !1 });
                },
                onRemove: function () {
                  l.cancel();
                },
              };
            });
          };
        },
        w = function (e, t, n) {
          return {
            name: ("string" == typeof e ? [e] : e).join(","),
            test: g(e),
            handler: j(t, n),
          };
        };
    },
  },
]);
