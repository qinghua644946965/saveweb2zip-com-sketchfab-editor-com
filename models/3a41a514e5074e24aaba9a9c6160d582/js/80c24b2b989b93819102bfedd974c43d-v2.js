"use strict";
(self.webpackChunksketchfab = self.webpackChunksketchfab || []).push([
  [7411],
  {
    pfBE: (e, a, t) => {
      t.d(a, { Z: () => u });
      var i,
        r = t("HPk7"),
        n = t("/K0U"),
        o = t("eKF4"),
        s = t("cSHm"),
        c = t("jQKg"),
        l = n.Z.extend(
          {
            defaults: { activitiesCount: 0, modelsCount: 0 },
            initialize: function () {
              var e = this,
                a = o.Z.me();
              a.isAuthenticated() &&
                a.canAccessFeature("ff_newsfeed_v2") &&
                Promise.all([t.e(8807), t.e(1840)])
                  .then(t.bind(t, "Afu4"))
                  .then(function (a) {
                    a.default.subscribeToActivities(
                      (0, r.Z)(e.refreshUnseenActivitiesCount.bind(e), 5e3)
                    ),
                      setTimeout(e.refreshUnseenActivitiesCount.bind(e), 100);
                  });
            },
            refreshUnseenActivitiesCount: function () {
              var e = this;
              l.getUnseenActivitiesCount().then(function (a) {
                a !== e.get("activitiesCount") &&
                  (s.ZP.invalidate("/i/feeds"), e.set("activitiesCount", a));
              });
            },
            hasNewActivities: function () {
              return Boolean(this.get("activitiesCount"));
            },
          },
          {
            getSingleton: function () {
              return i || (i = new l()), i;
            },
            seeActivities: function () {
              return c.Z.seeActivities().then(function () {
                l.getSingleton().set("activitiesCount", 0);
              });
            },
            readActivities: function (e) {
              return c.Z.readActivities(e);
            },
            getUnseenActivitiesCount: function () {
              return c.Z.getUnseenActivitiesCount();
            },
          }
        );
      const u = l;
    },
    "+Ouw": (e, a, t) => {
      t.d(a, {
        D9: () => u,
        HT: () => d,
        Lf: () => s,
        fK: () => n,
        hr: () => l,
        ij: () => c,
        mN: () => o,
        td: () => m,
        zZ: () => v,
      });
      var i = t("3O9e"),
        r = [
          {
            lowerBound: 7500,
            minimum: 1e4,
            save: "10",
            coupon: "US10HBS2IU4CO",
          },
          {
            lowerBound: 17500,
            minimum: 2e4,
            save: "20",
            coupon: "US20IUH4QOI7N",
          },
          {
            lowerBound: 45e3,
            minimum: 5e4,
            save: "25",
            coupon: "US25QI6CONQ9S",
          },
          {
            lowerBound: 92500,
            minimum: 1e5,
            save: "30",
            coupon: "US30SLJCBBQCK",
          },
        ],
        n = function (e) {
          return r.find(function (a) {
            return a.save === e;
          });
        },
        o = function (e) {
          for (var a in r)
            if (e >= r[a].lowerBound && e < r[a].minimum) return r[a];
          return null;
        },
        s = function () {
          return i.default.get("sf_upsell_coupon");
        },
        c = function () {
          return i.default.remove("sf_upsell_coupon");
        },
        l = function (e) {
          return i.default.set("sf_upsell_coupon", e, 6048e5);
        },
        u = function () {
          return i.default.set("sf_first_purchase", "true", 12096e5);
        },
        d = function () {
          return i.default.get("sf_first_purchase");
        },
        v = function (e, a) {
          var t = s(),
            i = n(t);
          return e
            ? i && i.minimum <= a && Number(i.save) > 20
              ? { name: "upsell".concat(t), value: i.coupon }
              : { name: "first purchase", value: "FIRSTPURCHASE20" }
            : i && i.minimum <= a
            ? { name: "upsell".concat(t), value: i.coupon }
            : null;
        },
        m = function (e) {
          var a = s();
          return a ? n(a) : o(e);
        };
    },
    xkdo: (e, a, t) => {
      t.d(a, { T: () => l });
      var i = t("sQwH"),
        r = (t("3Z9q"), t("VDcQ")),
        n = t("iu9k"),
        o = t("X40V"),
        s = t("+zma"),
        c = t("vAnt");
      function l(e) {
        var a = e.label,
          t = void 0 === a ? "login" : a,
          l = e.className,
          u = e.redirectUrl,
          d = e.usageType,
          v = e.buttonType,
          m = void 0 === v ? "ninja" : v,
          f = e.buttonSize,
          Z = void 0 === f ? "medium" : f,
          p = e.displayOrgSso,
          h = (0, r.I0)();
        return (0, i.Z)(c.Z, {
          "data-selenium": "login",
          size: Z,
          type: m,
          href: (0, n.HQ)("users:signin"),
          className: (0, o.AK)("skfb-link", l),
          onClick: function (e) {
            e.preventDefault(),
              e.stopPropagation(),
              h(
                s.Nw.authUser.authenticate(function () {}, {
                  redirectUrl: u,
                  usageType: d,
                  initialForm: "login",
                  displayOrgSso: p,
                })
              );
          },
          text: t,
        });
      }
    },
    qNsD: (e, a, t) => {
      t.d(a, { ZP: () => v, kk: () => u, uH: () => d });
      var i = t("D4hk"),
        r = t("sQwH"),
        n = t("3MRe"),
        o = t("3Z9q"),
        s = t("X40V"),
        c = ["className", "logoColor", "circleColor"],
        l = ["className", "color", "logoColor", "circleColor"];
      function u(e) {
        var a = e.className,
          t = e.logoColor,
          l = void 0 === t ? "#ffffff" : t,
          u = e.circleColor,
          d = void 0 === u ? s.O9["--color-primary-400"] : u,
          v = (0, n.Z)(e, c);
        return (0, r.Z)(
          o.Fragment,
          {},
          void 0,
          o.createElement(
            "svg",
            (0, i.Z)(
              {
                className: (0, s.AK)("svg-logo", a),
                version: "1.1",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                xmlSpace: "preserve",
                x: "0",
                y: "0",
                viewBox: "0 0 25 25",
                enableBackground: "new 0 0 25 25",
              },
              v
            ),
            (0, r.Z)(
              "g",
              { className: "logo" },
              void 0,
              (0, r.Z)("path", {
                fill: l,
                d: "M12.5,0.833C6.056,0.833,0.834,6.057,0.834,12.5S6.056,24.167,12.5,24.167S24.167,18.943,24.167,12.5 S18.944,0.833,12.5,0.833z",
              })
            ),
            (0, r.Z)(
              "g",
              { className: "logo-circle" },
              void 0,
              (0, r.Z)("path", {
                fill: d,
                d: "M12.5-0.029C5.596-0.029,0,5.568,0,12.472c0,6.904,5.596,12.501,12.5,12.501s12.5-5.597,12.5-12.501 C25.001,5.568,19.405-0.029,12.5-0.029z M11.414,19.911L6.025,16.8v-6.276l5.389,2.911V19.911z M12.374,11.958l-6.376-3.38 l6.376-3.682l6.377,3.682L12.374,11.958z M18.755,16.812l-5.369,3.1v-6.452l5.369-2.901V16.812z",
              })
            )
          )
        );
      }
      function d(e) {
        var a = e.className,
          t = e.color,
          c = void 0 === t ? "#555555" : t,
          u = e.logoColor,
          d = void 0 === u ? "#ffffff" : u,
          v = e.circleColor,
          m = void 0 === v ? s.O9["--color-primary-400"] : v,
          f = (0, n.Z)(e, l);
        return o.createElement(
          "svg",
          (0, i.Z)(
            {
              className: (0, s.AK)("svg-logo", a),
              version: "1.1",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              xmlSpace: "preserve",
              x: "0",
              y: "0",
              viewBox: "0 0 121 25",
              enableBackground: "new 0 0 121 25",
            },
            f
          ),
          (0, r.Z)(
            "g",
            { className: "logo-text" },
            void 0,
            (0, r.Z)("path", {
              fill: c,
              d: "M36.471,7.719c-1.526,0-2.289,0.504-2.289,1.512c0,0.448,0.189,0.791,0.567,1.029 c0.378,0.238,1.263,0.582,2.656,1.029c1.393,0.448,2.37,0.956,2.93,1.522c0.56,0.567,0.84,1.438,0.84,2.615 c0,1.498-0.455,2.632-1.365,3.401c-0.911,0.771-2.1,1.155-3.57,1.155c-1.092,0-2.429-0.168-4.011-0.504l-0.756-0.147l0.294-2.247 c1.876,0.253,3.311,0.379,4.305,0.379c1.484,0,2.226-0.616,2.226-1.849c0-0.447-0.171-0.798-0.515-1.05s-1.025-0.525-2.047-0.819 c-1.624-0.462-2.769-1.011-3.434-1.648s-0.998-1.522-0.998-2.657c0-1.428,0.434-2.492,1.302-3.192c0.868-0.7,2.058-1.05,3.57-1.05 c1.036,0,2.352,0.14,3.948,0.42l0.756,0.147L40.65,8.056C38.676,7.832,37.283,7.719,36.471,7.719z",
            }),
            (0, r.Z)("path", {
              fill: c,
              d: "M46.068,19.731h-2.814v-14.7h2.814v8.358l1.071-0.189l2.079-3.969h3.15l-2.73,4.977l2.877,5.523h-3.171 l-2.121-4.095l-1.155,0.188V19.731z",
            }),
            (0, r.Z)("path", {
              fill: c,
              d: "M56.705,17.075c0.329,0.287,0.801,0.431,1.417,0.431c1.302,0,2.464-0.042,3.486-0.126l0.589-0.063 l0.041,2.079c-1.61,0.392-3.066,0.588-4.368,0.588c-1.582,0-2.73-0.42-3.444-1.26c-0.714-0.84-1.071-2.205-1.071-4.095 c0-3.766,1.547-5.649,4.641-5.649c3.052,0,4.578,1.582,4.578,4.746l-0.209,1.953H56.19C56.204,16.322,56.375,16.788,56.705,17.075z M59.802,13.536c0-0.84-0.133-1.424-0.399-1.753c-0.266-0.329-0.732-0.493-1.396-0.493c-0.666,0-1.134,0.171-1.407,0.514 c-0.273,0.343-0.417,0.921-0.431,1.732H59.802z",
            }),
            (0, r.Z)("path", {
              fill: c,
              d: "M70.407,11.625h-2.583v4.305c0,0.42,0.011,0.718,0.031,0.893c0.021,0.175,0.098,0.325,0.231,0.451 c0.133,0.126,0.339,0.189,0.619,0.189l1.596-0.042l0.126,2.246c-0.938,0.211-1.651,0.315-2.142,0.315 c-1.26,0-2.121-0.283-2.583-0.851c-0.462-0.566-0.693-1.613-0.693-3.14v-4.368h-1.238V9.231h1.238V6.312h2.814v2.919h2.583V11.625z",
            }),
            (0, r.Z)("path", {
              fill: c,
              d: "M76.161,8.979c0.729,0,1.659,0.112,2.794,0.336l0.566,0.126l-0.084,2.226 c-1.106-0.112-1.925-0.168-2.457-0.168c-0.966,0-1.606,0.207-1.921,0.62c-0.315,0.413-0.473,1.193-0.473,2.341 c0,1.148,0.157,1.937,0.473,2.363c0.314,0.427,0.962,0.641,1.942,0.641l2.436-0.168l0.084,2.246 c-1.498,0.295-2.639,0.441-3.423,0.441c-1.554,0-2.671-0.438-3.35-1.312s-1.019-2.278-1.019-4.211c0-1.932,0.35-3.328,1.05-4.189 S74.607,8.979,76.161,8.979z",
            }),
            (0, r.Z)("path", {
              fill: c,
              d: "M84.414,19.731H81.6v-14.7h2.814v4.704c0.966-0.504,1.834-0.756,2.604-0.756c1.4,0,2.366,0.413,2.898,1.239 c0.531,0.826,0.798,2.1,0.798,3.822v5.691h-2.814v-5.628c0-0.882-0.104-1.536-0.314-1.963s-0.63-0.641-1.26-0.641 c-0.546,0-1.093,0.084-1.639,0.252l-0.272,0.084V19.731z",
            }),
            (0, r.Z)("path", {
              fill: c,
              d: "M96.531,11.625v8.106h-2.814v-8.106h-1.134V9.231h1.134V8.77c0-1.512,0.224-2.555,0.672-3.129 s1.246-0.861,2.395-0.861c0.504,0,1.155,0.07,1.953,0.21l0.44,0.063l-0.042,2.289c-0.616-0.028-1.134-0.042-1.554-0.042 s-0.7,0.112-0.84,0.336c-0.141,0.224-0.21,0.609-0.21,1.155v0.441h2.541v2.394H96.531z",
            }),
            (0, r.Z)("path", {
              fill: c,
              d: "M108.753,12.507v4.368c0.028,0.337,0.084,0.571,0.168,0.704s0.259,0.228,0.525,0.283l-0.084,2.121 c-0.714,0-1.285-0.049-1.712-0.146c-0.427-0.099-0.857-0.295-1.291-0.589c-1.008,0.49-2.037,0.735-3.087,0.735 c-2.171,0-3.255-1.147-3.255-3.444c0-1.119,0.301-1.914,0.902-2.383c0.603-0.469,1.526-0.746,2.772-0.83l2.247-0.168v-0.651 c0-0.434-0.099-0.731-0.294-0.893c-0.196-0.161-0.512-0.241-0.945-0.241l-3.948,0.168l-0.084-1.953 c1.498-0.406,2.923-0.609,4.273-0.609c1.352,0,2.324,0.28,2.919,0.84C108.456,10.379,108.753,11.276,108.753,12.507z M104.028,15.279c-0.784,0.07-1.176,0.49-1.176,1.26c0,0.771,0.343,1.155,1.028,1.155c0.532,0,1.113-0.084,1.743-0.252l0.315-0.084 v-2.247L104.028,15.279z",
            }),
            (0, r.Z)("path", {
              fill: c,
              d: "M116.522,8.979c1.47,0,2.545,0.402,3.224,1.208s1.019,2.244,1.019,4.316c0,2.071-0.392,3.503-1.176,4.294 s-2.136,1.187-4.053,1.187c-0.603,0-1.701-0.07-3.298-0.21l-0.798-0.084V5.031h2.814v4.515 C115.15,9.168,115.906,8.979,116.522,8.979z M115.536,17.464c0.938,0,1.567-0.228,1.89-0.683s0.482-1.271,0.482-2.447 c0-1.89-0.588-2.834-1.764-2.834c-0.56,0-1.092,0.07-1.596,0.21l-0.294,0.063v5.607C114.898,17.436,115.325,17.464,115.536,17.464z",
            })
          ),
          (0, r.Z)(
            "g",
            { className: "logo" },
            void 0,
            (0, r.Z)("path", {
              fill: d,
              d: "M12.5,0.833C6.056,0.833,0.834,6.057,0.834,12.5S6.056,24.167,12.5,24.167S24.167,18.943,24.167,12.5 S18.944,0.833,12.5,0.833z",
            })
          ),
          (0, r.Z)(
            "g",
            { className: "logo-circle" },
            void 0,
            (0, r.Z)("path", {
              fill: m,
              d: "M12.5-0.029C5.596-0.029,0,5.568,0,12.472c0,6.904,5.596,12.501,12.5,12.501s12.5-5.597,12.5-12.501 C25.001,5.568,19.405-0.029,12.5-0.029z M11.414,19.911L6.025,16.8v-6.276l5.389,2.911V19.911z M12.374,11.958l-6.376-3.38 l6.376-3.682l6.377,3.682L12.374,11.958z M18.755,16.812l-5.369,3.1v-6.452l5.369-2.901V16.812z",
            })
          )
        );
      }
      const v = d;
    },
    dnK3: (e, a, t) => {
      t.d(a, { Z: () => m });
      var i,
        r = t("D4hk"),
        n = t("sQwH"),
        o = t("3MRe"),
        s = t("3Z9q"),
        c = t("VDcQ"),
        l = t("+zma"),
        u = t("Ixlc"),
        d = t("X40V"),
        v = ["org", "project", "className"];
      function m(e) {
        var a = e.org,
          t = e.project,
          m = e.className,
          f = void 0 === m ? "" : m,
          Z = (0, o.Z)(e, v),
          p = (0, c.v9)(l.wl.authUser.canAccessFeature("ff_read_only_mode")),
          h = (0, u.q)(a, t);
        return s.createElement(
          "a",
          (0, r.Z)(
            {
              onClick: p ? void 0 : h,
              className: (0, d.AK)(f, { "--disabled": p }),
            },
            Z
          ),
          i ||
            (i = (0, n.Z)("i", {
              className: "fa-regular fa-arrow-up-from-bracket",
            }))
        );
      }
    },
    pCyY: (e, a, t) => {
      t.d(a, { VU: () => N, e9: () => b, pS: () => y, yc: () => _ });
      var i,
        r,
        n,
        o,
        s,
        c,
        l,
        u,
        d,
        v,
        m,
        f,
        Z = t("sQwH"),
        p = t("mSEu"),
        h = (t("3Z9q"), t("X40V")),
        g = t("iu9k"),
        _ = [
          {
            title: "Best selling",
            icon: "fa-regular fa-award",
            value: (0, g.HQ)("store:search", {}, { sort_by: "-orderCount" }),
          },
          {
            title: "Animated",
            icon: "fa-regular fa-film",
            value: (0, g.HQ)("store:search", {}, { animated: !0 }),
          },
          {
            title: "PBR",
            icon: "skfb-icon skfb-icon-pbr",
            value: (0, g.HQ)("store:search", {}, { pbr: !0 }),
          },
          {
            title: "Low poly",
            icon: "skfb-icon skfb-icon-low-poly",
            value: (0, g.HQ)(
              "store:search",
              {},
              { min_face_count: "0", max_face_count: "10000" }
            ),
          },
          {
            title: "High poly",
            icon: "skfb-icon skfb-icon-high-poly",
            value: (0, g.HQ)("store:search", {}, { min_face_count: "100000" }),
          },
          {
            title: "3D Printable",
            icon: "skfb-icon skfb-icon-three-d-printing",
            value: (0, g.HQ)("store:search", {}, { file_formats: ["stl"] }),
          },
          {
            title: "3D Scan",
            icon: "skfb-icon skfb-icon-three-d-scan",
            value: (0, g.HQ)(
              "store:search",
              {},
              { q: ["scan"], sort_by: "-orderCount" }
            ),
          },
        ];
      function N(e) {
        var a = e.categories,
          t = e.onToggle,
          n = e.className,
          o = e.withDropdown,
          s = void 0 !== o && o,
          c = e.highLights,
          l = void 0 === c ? _ : c;
        return (0, Z.Z)(
          "div",
          {
            className: (0, h.AK)(
              { "categories-navigation__dropdown-container": s },
              n
            ),
            onClick: t,
          },
          void 0,
          (0, Z.Z)(
            "div",
            {
              className: (0, h.AK)("categories-navigation", "--store", {
                "--dropdown": s,
              }),
            },
            void 0,
            (0, Z.Z)(
              "div",
              { className: "categories-navigation__highlights-container" },
              void 0,
              (0, Z.Z)(
                "ul",
                { className: "highlights-list --store" },
                void 0,
                i ||
                  (i = (0, Z.Z)(
                    "span",
                    { className: "categories-navigation__title title" },
                    void 0,
                    "Highlights"
                  )),
                l.map(function (e) {
                  return (0,
                  Z.Z)("li", { className: "navigation-item" }, e.title, (0, Z.Z)("a", { title: "".concat(e.title, " 3D models"), href: e.value }, void 0, (0, Z.Z)("i", { className: (0, h.AK)("icon  --translucent", e.icon) }), (0, Z.Z)("span", {}, void 0, e.title)));
                })
              )
            ),
            (0, Z.Z)(
              "div",
              { className: "categories-navigation__menu" },
              void 0,
              r ||
                (r = (0, Z.Z)(
                  "span",
                  { className: "categories-navigation__title title" },
                  void 0,
                  "Browse by category"
                )),
              (0, Z.Z)(
                "ul",
                { className: "categories-navigation__list" },
                void 0,
                a.map(function (e) {
                  return (0,
                  Z.Z)("li", { className: "navigation-item" }, e.slug, (0, Z.Z)("a", { title: "".concat(e.name, " 3D models"), href: (0, g.HQ)("store:search_by_keyword", { keyword: e.slug }) }, void 0, (0, Z.Z)("i", { className: (0, h.AK)("icon", "skfb-icon", "skfb-icon-category-".concat(e.slug)) }), (0, Z.Z)("span", {}, void 0, e.name)));
                })
              )
            )
          )
        );
      }
      function b(e) {
        var a = e.categories;
        return (0, Z.Z)(
          "div",
          { className: "categories-navigation" },
          void 0,
          (0, Z.Z)(
            "div",
            { className: "categories-navigation__highlights-container" },
            void 0,
            (0, Z.Z)(
              "ul",
              { className: "highlights-list --search" },
              void 0,
              n ||
                (n = (0, Z.Z)(
                  "span",
                  { className: "categories-navigation__title title" },
                  void 0,
                  "Highlights"
                )),
              (0, Z.Z)(
                "li",
                { className: "navigation-item" },
                void 0,
                (0, Z.Z)(
                  "a",
                  {
                    title: "Popular 3D models",
                    href: (0, g.HQ)("models:popular"),
                  },
                  void 0,
                  o ||
                    (o = (0, Z.Z)("i", {
                      className: "icon --translucent fa-regular fa-sparkles",
                    })),
                  s || (s = (0, Z.Z)("span", {}, void 0, "Popular"))
                )
              ),
              (0, Z.Z)(
                "li",
                { className: "navigation-item" },
                void 0,
                (0, Z.Z)(
                  "a",
                  {
                    title: "Staff picks 3D models",
                    href: (0, g.HQ)("models:staffpicks"),
                  },
                  void 0,
                  c ||
                    (c = (0, Z.Z)("i", {
                      className:
                        "icon --translucent skfb-icon skfb-icon-staffpicks",
                    })),
                  l || (l = (0, Z.Z)("span", {}, void 0, "Staff picks"))
                )
              ),
              (0, Z.Z)(
                "li",
                { className: "navigation-item" },
                void 0,
                (0, Z.Z)(
                  "a",
                  {
                    title: "Downloadable 3D models",
                    href: (0, g.HQ)(
                      "models:explore",
                      {},
                      {
                        features: "downloadable",
                        date: "week",
                        sort_by: "-likeCount",
                      }
                    ),
                  },
                  void 0,
                  u ||
                    (u = (0, Z.Z)("i", {
                      className:
                        "icon --translucent fa-regular fa-arrow-down-to-bracket",
                    })),
                  d || (d = (0, Z.Z)("span", {}, void 0, "Downloadable"))
                )
              ),
              (0, Z.Z)(
                "li",
                { className: "navigation-item" },
                void 0,
                (0, Z.Z)(
                  "a",
                  {
                    title: "Collections 3D models",
                    href: (0, g.HQ)("collections:popular"),
                  },
                  void 0,
                  v ||
                    (v = (0, Z.Z)("i", {
                      className: "icon --translucent fa-regular fa-border-all",
                    })),
                  m || (m = (0, Z.Z)("span", {}, void 0, "Collections"))
                )
              )
            ),
            (0, Z.Z)(
              "ul",
              { className: "highlights-list --community-section" },
              void 0,
              (0, Z.Z)(
                "li",
                { className: "navigation-item" },
                void 0,
                (0, Z.Z)(
                  "a",
                  {
                    href: p.Z.hosts.communityBlog,
                    title: "Community Blog",
                    target: "_blank",
                    rel: "noopener noreferrer",
                  },
                  void 0,
                  "Blog"
                )
              ),
              (0, Z.Z)(
                "li",
                { className: "navigation-item" },
                void 0,
                (0, Z.Z)(
                  "a",
                  {
                    href: (0, g.HQ)("users:explore_users"),
                    title: "Community Members",
                  },
                  void 0,
                  "Community members"
                )
              ),
              (0, Z.Z)(
                "li",
                { className: "navigation-item" },
                void 0,
                (0, Z.Z)(
                  "a",
                  {
                    href: (0, g.HQ)("pages:masters_landing"),
                    title: "Sketchfab Masters",
                  },
                  void 0,
                  "Sketchfab Masters"
                )
              )
            )
          ),
          (0, Z.Z)(
            "div",
            { className: "categories-navigation__menu" },
            void 0,
            f ||
              (f = (0, Z.Z)(
                "span",
                { className: "categories-navigation__title title" },
                void 0,
                "Browse by category"
              )),
            (0, Z.Z)(
              "ul",
              { className: "categories-navigation__list" },
              void 0,
              a.map(function (e) {
                return (0,
                Z.Z)("li", { className: "navigation-item" }, e.slug, (0, Z.Z)("a", { title: "".concat(e.name, " 3D models"), href: (0, g.HQ)("models:explore_by_category", { category: e.slug }, { date: "week", sort_by: "-likeCount" }) }, void 0, (0, Z.Z)("i", { className: (0, h.AK)("icon", "skfb-icon", "skfb-icon-category-".concat(e.slug)) }), (0, Z.Z)("span", {}, void 0, e.name)));
              })
            )
          )
        );
      }
      function y() {
        var e = [
          {
            title: "Sketchfab for Teams",
            href: (0, g.HQ)("pages:3d_asset_management"),
          },
          { title: "Augmented Reality", href: (0, g.HQ)("pages:ar_landing") },
          { title: "3D Viewer", href: (0, g.HQ)("pages:viewer") },
          { title: "3D eCommerce", href: (0, g.HQ)("pages:ecommerce") },
          { title: "3D Configurators", href: (0, g.HQ)("pages:configurator") },
          {
            title: "Find a Partner",
            href: p.Z.hosts.enterpriseBlog + "/partners-directory",
          },
          { title: "Pricing", href: (0, g.HQ)("pages:plans") },
          { title: "Customer Stories", href: p.Z.hosts.enterpriseBlog },
        ];
        return (0, Z.Z)(
          "div",
          { className: "community-navigation" },
          void 0,
          (0, Z.Z)(
            "div",
            { className: "community-navigation__col" },
            void 0,
            (0, Z.Z)(
              "div",
              { className: "community-navigation__list" },
              void 0,
              e.map(function (e, a) {
                return (0,
                Z.Z)("div", { className: "navigation-item" }, a, (0, Z.Z)("a", { href: e.href, title: e.title }, void 0, e.title));
              })
            )
          )
        );
      }
    },
    "WVN+": (e, a, t) => {
      t.d(a, { IA: () => c, ZP: () => u, zp: () => l });
      var i = t("sQwH"),
        r = t("sGMM"),
        n = t("3Z9q"),
        o = t("ZqC1"),
        s = t("45Yh"),
        c = n.createContext(function () {}),
        l = function (e) {
          var a = e.children,
            t = n.useState((0, s.sk)() ? "" : document.title),
            l = (0, r.Z)(t, 2),
            u = l[0],
            d = l[1],
            v = (0, o.Z)();
          return (
            n.useEffect(
              function () {
                document.title = "".concat(v ? "(".concat(v, ") ") : "").concat(
                  (function (e) {
                    return e.replace(/^(\(\d+\)\s)/, "");
                  })(u)
                );
              },
              [u, v]
            ),
            (0, i.Z)(c.Provider, { value: d }, void 0, a)
          );
        };
      const u = function (e) {
        var a = e.children,
          t = e.context,
          i = n.useContext(t);
        return (
          n.useEffect(
            function () {
              i(Array.isArray(a) ? a.join("") : a);
            },
            [i, a]
          ),
          null
        );
      };
    },
    Ixlc: (e, a, t) => {
      t.d(a, { Z: () => f, q: () => m });
      var i = t("D4hk"),
        r = t("3MRe"),
        n = t("mSEu"),
        o = t("3Z9q"),
        s = t("VDcQ"),
        c = t("+zma"),
        l = t("fBod"),
        u = t("RyS8"),
        d = t("vAnt"),
        v = ["iconClassName", "org", "project"],
        m = function (e, a) {
          var t = (0, s.I0)();
          return function (i) {
            i.preventDefault(),
              i.stopPropagation(),
              t(
                c.Nw.authUser.authenticate(
                  function () {
                    return (0, l.loadUploadPopup)()
                      .then(function (t) {
                        return new t({ org: e, project: a }).open();
                      })
                      .catch((0, u.KQ)(u.ud));
                  },
                  {
                    redirectUrl: "/feed#upload",
                    usageType: n.Z.userUsageTypeChoices.uploader,
                    initialForm: "signup",
                  }
                )
              );
          };
        };
      function f(e) {
        var a = e.iconClassName,
          t = void 0 === a ? "fa-regular fa-arrow-up-from-bracket" : a,
          n = e.org,
          l = e.project,
          u = (0, r.Z)(e, v),
          f = (0, s.v9)(c.wl.authUser.canAccessFeature("ff_read_only_mode")),
          Z = m(n, l);
        return o.createElement(
          d.Z,
          (0, i.Z)(
            {
              "data-selenium": "upload",
              iconClassName: t,
              text: "Upload",
              size: "medium",
              type: "important",
              onClick: Z,
            },
            u,
            { disabled: f || u.disabled }
          )
        );
      }
    },
    qjDX: (e, a, t) => {
      t.d(a, { Z: () => l });
      var i = t("D4hk"),
        r = t("3MRe"),
        n = t("3Z9q"),
        o = t("jQKg"),
        s = t("X40V"),
        c = ["notificationUid", "to", "isRead"];
      const l = function (e) {
        var a = e.notificationUid,
          t = e.to,
          l = e.isRead,
          u = (0, r.Z)(e, c);
        return n.createElement(
          "a",
          (0, i.Z)({}, u, {
            href: t,
            className: (0, s.AK)("activity --notification", {
              "--not-read": !l,
            }),
            onClick: function () {
              return o.Z.readActivities([a]);
            },
          }),
          u.children
        );
      };
    },
    DbQt: (e, a, t) => {
      t.d(a, { Z: () => Z });
      var i,
        r,
        n = t("sQwH"),
        o = t("7isf"),
        s = (t("3Z9q"), t("TUor")),
        c = t("qjDX"),
        l = t("N+9a"),
        u = t("ZZB/"),
        d = t("y7HB"),
        v = t("I0q+"),
        m = t("LvQi"),
        f = function (e) {
          return e.extraContext.activities
            ? e.extraContext.activities.reduce(
                function (e, a) {
                  return [].concat((0, o.Z)(e), [a.obj]);
                },
                [e.obj]
              )
            : [e.obj];
        };
      const Z = function (e) {
        var a = e.activity,
          t = e.isRead,
          o = void 0 !== t && t,
          Z = a.extraContext.count + 1;
        return (0, n.Z)(
          c.Z,
          { notificationUid: a.uid, to: a.target.collectionUrl, isRead: o },
          void 0,
          i || (i = (0, n.Z)("div", { className: "activity__icon --collect" })),
          (0, n.Z)(
            "div",
            { className: "activity__main" },
            void 0,
            (0, n.Z)(
              "div",
              { className: "activity__main__left" },
              void 0,
              (0, n.Z)(
                "div",
                { className: "avatar" },
                void 0,
                (0, n.Z)(
                  l.Z,
                  {
                    to: "users:profile_summary",
                    params: { username: a.actor.username },
                  },
                  void 0,
                  (0, n.Z)(v.Z, {
                    alt: "Avatar of ".concat(a.actor.username, " "),
                    avatars: a.actor.avatars,
                    size: 30,
                  })
                )
              )
            ),
            (0, n.Z)(
              "div",
              { className: "activity__main__middle" },
              void 0,
              (0, n.Z)(
                "div",
                { className: "activity__title" },
                void 0,
                (0, n.Z)(m.Z, { user: a.actor, withoutBadge: !0 }),
                (0, n.Z)(
                  "span",
                  {},
                  void 0,
                  " added your model ",
                  (0, n.Z)(d.Z, {
                    totalCount: Z,
                    names: f(a).map(function (e) {
                      return (0, n.Z)(u.Z, { model: e }, e.uid);
                    }),
                  })
                ),
                r || (r = (0, n.Z)("span", {}, void 0, " to the collection ")),
                (0, n.Z)(
                  "span",
                  { className: "collection-name" },
                  void 0,
                  (0, n.Z)(
                    "a",
                    {
                      className: "label",
                      href: a.target.collectionUrl,
                      title: a.target.name,
                    },
                    void 0,
                    (0, n.Z)(
                      "data",
                      { itemProp: "name" },
                      void 0,
                      a.target.name
                    )
                  )
                )
              ),
              (0, n.Z)(
                "time",
                { className: "activity__time" },
                void 0,
                (0, s.Sy)(a.timestamp)
              )
            )
          )
        );
      };
    },
    jtsd: (e, a, t) => {
      t.d(a, { Z: () => Z });
      var i,
        r,
        n = t("sQwH"),
        o = t("3Z9q"),
        s = t("TUor"),
        c = t("qjDX"),
        l = t("ZZB/"),
        u = t("I0q+"),
        d = t("LvQi"),
        v = t("6tbf"),
        m = t("N+9a"),
        f = t("sSJZ");
      function Z(e) {
        var a = e.activity,
          t = e.isRead,
          Z = void 0 !== t && t,
          p = o.useContext(f.u).withDetail;
        return (0, n.Z)(
          c.Z,
          {
            notificationUid: a.uid,
            to: "".concat(a.target.viewerUrl, "#comments"),
            isRead: Z,
          },
          void 0,
          i || (i = (0, n.Z)("div", { className: "activity__icon --comment" })),
          (0, n.Z)(
            "div",
            { className: "activity__main" },
            void 0,
            (0, n.Z)(
              "div",
              { className: "activity__main__left" },
              void 0,
              (0, n.Z)(
                "div",
                { className: "avatar" },
                void 0,
                (0, n.Z)(
                  m.Z,
                  {
                    to: "users:profile_summary",
                    params: { username: a.actor.username },
                  },
                  void 0,
                  (0, n.Z)(u.Z, {
                    alt: "Avatar of ".concat(a.actor.username, " "),
                    avatars: a.actor.avatars,
                    size: 30,
                  })
                )
              )
            ),
            (0, n.Z)(
              "div",
              { className: "activity__main__middle" },
              void 0,
              (0, n.Z)(
                "div",
                { className: "activity__title" },
                void 0,
                (0, n.Z)(d.Z, { user: a.actor, withoutBadge: !0 }),
                r || (r = (0, n.Z)("span", {}, void 0, " commented on ")),
                (0, n.Z)(l.Z, { model: a.target })
              ),
              (0, n.Z)(
                "time",
                { className: "activity__time" },
                void 0,
                (0, s.Sy)(a.timestamp)
              ),
              p
                ? (0, n.Z)(
                    o.Fragment,
                    {},
                    void 0,
                    (0, n.Z)(
                      "div",
                      { className: "activity__body" },
                      void 0,
                      a.obj.body
                    ),
                    (0, n.Z)(
                      "div",
                      { className: "activity__actions" },
                      void 0,
                      (0, n.Z)(
                        "a",
                        { href: "".concat(a.target.viewerUrl, "#comments") },
                        void 0,
                        "Reply"
                      )
                    )
                  )
                : null
            ),
            p
              ? (0, n.Z)(
                  "div",
                  { className: "activity__main__right" },
                  void 0,
                  (0, n.Z)(
                    "div",
                    { className: "activity__thumbnail" },
                    void 0,
                    (0, n.Z)(v.Z, {
                      alt: "".concat(a.target.name, " 3D Model"),
                      thumbnails: a.target.thumbnails,
                      deferImages: !1,
                    })
                  )
                )
              : null
          )
        );
      }
    },
    MWCS: (e, a, t) => {
      t.d(a, { Z: () => f });
      var i,
        r,
        n,
        o = t("sQwH"),
        s = t("3Z9q"),
        c = t("TUor"),
        l = t("qjDX"),
        u = t("I0q+"),
        d = t("LvQi"),
        v = t("N+9a"),
        m = t("sSJZ");
      const f = function (e) {
        var a = e.authUser,
          t = e.activity,
          f = e.isRead,
          Z = void 0 !== f && f,
          p = s.useContext(m.u).withDetail;
        return (0, o.Z)(
          l.Z,
          { notificationUid: t.uid, to: t.actor.profileUrl, isRead: Z },
          void 0,
          i || (i = (0, o.Z)("div", { className: "activity__icon --follow" })),
          (0, o.Z)(
            "div",
            { className: "activity__main" },
            void 0,
            (0, o.Z)(
              "div",
              { className: "activity__main__left" },
              void 0,
              (0, o.Z)(
                "div",
                { className: "avatar" },
                void 0,
                (0, o.Z)(
                  v.Z,
                  {
                    to: "users:profile_summary",
                    params: { username: t.actor.username },
                  },
                  void 0,
                  (0, o.Z)(u.Z, {
                    alt: "Avatar of ".concat(t.actor.username, " "),
                    avatars: t.actor.avatars,
                    size: 30,
                  })
                )
              )
            ),
            (0, o.Z)(
              "div",
              { className: "activity__main__middle" },
              void 0,
              (0, o.Z)(
                "div",
                { className: "activity__title" },
                void 0,
                (0, o.Z)(d.Z, { user: t.actor, withoutBadge: !0 }),
                r || (r = (0, o.Z)("span", {}, void 0, " followed ")),
                a.uid === t.target.uid
                  ? n || (n = (0, o.Z)("span", {}, void 0, "you "))
                  : (0, o.Z)(d.Z, { user: t.target, withoutBadge: !0 })
              ),
              (0, o.Z)(
                "time",
                { className: "activity__time" },
                void 0,
                (0, c.Sy)(t.timestamp)
              )
            ),
            (0, o.Z)(
              "div",
              { className: "activity__main__right" },
              void 0,
              p &&
                a.uid !== t.target.uid &&
                (0, o.Z)(
                  "div",
                  { className: "avatar" },
                  void 0,
                  (0, o.Z)(u.Z, {
                    alt: "Avatar of ".concat(t.target.username, " "),
                    avatars: t.target.avatars,
                    size: 30,
                  })
                )
            )
          )
        );
      };
    },
    TkBM: (e, a, t) => {
      t.d(a, { Z: () => b });
      var i,
        r,
        n,
        o = t("sQwH"),
        s = t("7isf"),
        c = t("3Z9q"),
        l = t("TUor"),
        u = t("qjDX"),
        d = t("ZZB/"),
        v = t("y7HB"),
        m = t("I0q+"),
        f = t("LvQi"),
        Z = t("6tbf"),
        p = t("N+9a"),
        h = t("sSJZ"),
        g = t("BNNE"),
        _ = function (e) {
          return e.extraContext.count > 0
            ? e.extraContext.activities.reduce(
                function (e, a) {
                  return [].concat((0, s.Z)(e), [a.actor]);
                },
                [e.actor]
              )
            : [e.actor];
        },
        N = function (e) {
          return e.extraContext.count > 0
            ? e.extraContext.activities.reduce(
                function (e, a) {
                  return [].concat((0, s.Z)(e), [a.target]);
                },
                [e.target]
              )
            : [e.target];
        };
      const b = function (e) {
        var a = e.activity,
          t = e.isRead,
          s = void 0 !== t && t,
          b = e.isFollowingActivity,
          y = void 0 !== b && b,
          w = c.useContext(h.u).withDetail,
          k = a.extraContext.count + 1;
        return (0, o.Z)(
          u.Z,
          { notificationUid: a.uid, to: a.target.viewerUrl, isRead: s },
          void 0,
          i || (i = (0, o.Z)("div", { className: "activity__icon --like" })),
          (0, o.Z)(
            "div",
            { className: "activity__main" },
            void 0,
            (0, o.Z)(
              "div",
              { className: "activity__main__left" },
              void 0,
              (0, o.Z)(
                "div",
                { className: "avatar" },
                void 0,
                (0, o.Z)(
                  g.Z,
                  { uid: a.actor.uid },
                  void 0,
                  (0, o.Z)(
                    p.Z,
                    {
                      to: "users:profile_summary",
                      params: { username: a.actor.username },
                      "data-user": a.actor.uid,
                    },
                    void 0,
                    (0, o.Z)(m.Z, {
                      alt: "Avatar of ".concat(a.actor.username, " "),
                      avatars: a.actor.avatars,
                      size: 30,
                    })
                  )
                )
              )
            ),
            (0, o.Z)(
              "div",
              { className: "activity__main__middle" },
              void 0,
              (0, o.Z)(
                "div",
                { className: "activity__title" },
                void 0,
                y
                  ? (0, o.Z)(
                      c.Fragment,
                      {},
                      void 0,
                      (0, o.Z)(f.Z, { user: a.actor, withoutBadge: !0 }),
                      r || (r = (0, o.Z)("span", {}, void 0, " liked ")),
                      (0, o.Z)(v.Z, {
                        totalCount: k,
                        names: N(a).map(function (e) {
                          return (0, o.Z)(d.Z, { model: e }, e.uid);
                        }),
                        othersHref: "users:profile_likes",
                        othersHrefParams: { username: a.actor.username },
                      })
                    )
                  : (0, o.Z)(
                      c.Fragment,
                      {},
                      void 0,
                      (0, o.Z)(v.Z, {
                        totalCount: k,
                        names: _(a).map(function (e) {
                          return (0, o.Z)(f.Z, { user: e }, e.uid);
                        }),
                      }),
                      n || (n = (0, o.Z)("span", {}, void 0, " liked ")),
                      (0, o.Z)(d.Z, { model: a.target })
                    )
              ),
              (0, o.Z)(
                "time",
                { className: "activity__time" },
                void 0,
                (0, l.Sy)(a.timestamp)
              )
            ),
            w
              ? (0, o.Z)(
                  "div",
                  { className: "activity__main__right" },
                  void 0,
                  (0, o.Z)(
                    "div",
                    { className: "activity__thumbnail" },
                    void 0,
                    (0, o.Z)(Z.Z, {
                      alt: "".concat(a.target.name, " 3D Model"),
                      thumbnails: a.target.thumbnails,
                      deferImages: !1,
                    })
                  )
                )
              : null
          )
        );
      };
    },
    flMq: (e, a, t) => {
      t.d(a, { Z: () => Z });
      var i,
        r,
        n = t("sQwH"),
        o = t("3Z9q"),
        s = t("TUor"),
        c = t("qjDX"),
        l = t("ZZB/"),
        u = t("I0q+"),
        d = t("LvQi"),
        v = t("6tbf"),
        m = t("N+9a"),
        f = t("sSJZ");
      const Z = function (e) {
        var a = e.activity,
          t = e.isRead,
          Z = void 0 !== t && t,
          p = o.useContext(f.u).withDetail;
        return (0, n.Z)(
          c.Z,
          {
            notificationUid: a.uid,
            to: "".concat(a.target.viewerUrl, "#comments"),
            isRead: Z,
          },
          void 0,
          i || (i = (0, n.Z)("div", { className: "activity__icon --comment" })),
          (0, n.Z)(
            "div",
            { className: "activity__main" },
            void 0,
            (0, n.Z)(
              "div",
              { className: "activity__main__left" },
              void 0,
              (0, n.Z)(
                "div",
                { className: "avatar" },
                void 0,
                (0, n.Z)(
                  m.Z,
                  {
                    to: "users:profile_summary",
                    params: { username: a.actor.username },
                  },
                  void 0,
                  (0, n.Z)(u.Z, {
                    alt: "Avatar of ".concat(a.actor.username, " "),
                    avatars: a.actor.avatars,
                    size: 30,
                  })
                )
              )
            ),
            (0, n.Z)(
              "div",
              { className: "activity__main__middle" },
              void 0,
              (0, n.Z)(
                "div",
                { className: "activity__title" },
                void 0,
                (0, n.Z)(d.Z, { user: a.actor, withoutBadge: !0 }),
                r || (r = (0, n.Z)("span", {}, void 0, " mentioned you on ")),
                (0, n.Z)(l.Z, { model: a.target })
              ),
              (0, n.Z)(
                "time",
                { className: "activity__time" },
                void 0,
                (0, s.Sy)(a.timestamp)
              ),
              p
                ? (0, n.Z)(
                    o.Fragment,
                    {},
                    void 0,
                    (0, n.Z)(
                      "div",
                      { className: "activity__body" },
                      void 0,
                      a.obj.body
                    ),
                    (0, n.Z)(
                      "div",
                      { className: "activity__actions" },
                      void 0,
                      (0, n.Z)(
                        "a",
                        { href: "".concat(a.target.viewerUrl, "#comments") },
                        void 0,
                        "Reply"
                      )
                    )
                  )
                : null
            ),
            p
              ? (0, n.Z)(
                  "div",
                  { className: "activity__main__right" },
                  void 0,
                  (0, n.Z)(
                    "div",
                    { className: "activity__thumbnail" },
                    void 0,
                    (0, n.Z)(v.Z, {
                      alt: "".concat(a.target.name, " 3D Model"),
                      thumbnails: a.target.thumbnails,
                      deferImages: !1,
                    })
                  )
                )
              : null
          )
        );
      };
    },
    sSJZ: (e, a, t) => {
      t.d(a, { u: () => i });
      var i = t("3Z9q").createContext({ withDetail: !1 });
    },
    "9VL4": (e, a, t) => {
      t.d(a, { Z: () => p });
      var i,
        r,
        n = t("sQwH"),
        o = t("3Z9q"),
        s = t("TUor"),
        c = t("qjDX"),
        l = t("ZZB/"),
        u = t("I0q+"),
        d = t("LvQi"),
        v = t("6tbf"),
        m = t("N+9a"),
        f = t("rv44"),
        Z = t("sSJZ");
      const p = function (e) {
        var a = e.activity,
          t = e.isRead,
          p = void 0 !== t && t,
          h = o.useContext(Z.u).withDetail;
        return (0, n.Z)(
          c.Z,
          {
            notificationUid: a.uid,
            to: "".concat(a.target.viewerUrl, "#comments"),
            isRead: p,
          },
          void 0,
          i || (i = (0, n.Z)("div", { className: "activity__icon --review" })),
          (0, n.Z)(
            "div",
            { className: "activity__main" },
            void 0,
            (0, n.Z)(
              "div",
              { className: "activity__main__left" },
              void 0,
              (0, n.Z)(
                "div",
                { className: "avatar" },
                void 0,
                (0, n.Z)(
                  m.Z,
                  {
                    to: "users:profile_summary",
                    params: { username: a.actor.username },
                  },
                  void 0,
                  (0, n.Z)(u.Z, {
                    alt: "Avatar of ".concat(a.actor.username, " "),
                    avatars: a.actor.avatars,
                    size: 30,
                  })
                )
              )
            ),
            (0, n.Z)(
              "div",
              { className: "activity__main__middle" },
              void 0,
              (0, n.Z)(
                "div",
                { className: "activity__title" },
                void 0,
                (0, n.Z)(d.Z, { user: a.actor, withoutBadge: !0 }),
                r ||
                  (r = (0, n.Z)(
                    "span",
                    {},
                    void 0,
                    " has published a review on "
                  )),
                (0, n.Z)(l.Z, { model: a.target })
              ),
              (0, n.Z)(
                "time",
                { className: "activity__time" },
                void 0,
                (0, s.Sy)(a.timestamp)
              ),
              h
                ? (0, n.Z)(
                    o.Fragment,
                    {},
                    void 0,
                    (0, n.Z)(
                      "div",
                      { className: "activity__body" },
                      void 0,
                      (0, n.Z)(
                        f.Z,
                        { value: a.obj.averageRating, size: "small" },
                        "review"
                      )
                    ),
                    (0, n.Z)(
                      "div",
                      { className: "activity__body" },
                      void 0,
                      a.obj.body
                    ),
                    (0, n.Z)(
                      "div",
                      { className: "activity__actions" },
                      void 0,
                      (0, n.Z)(
                        "a",
                        { href: "".concat(a.target.viewerUrl, "#comments") },
                        void 0,
                        "Reply"
                      )
                    )
                  )
                : null
            ),
            h
              ? (0, n.Z)(
                  "div",
                  { className: "activity__main__right" },
                  void 0,
                  (0, n.Z)(
                    "div",
                    { className: "activity__thumbnail" },
                    void 0,
                    (0, n.Z)(v.Z, {
                      alt: "".concat(a.target.name, " 3D Model"),
                      thumbnails: a.target.thumbnails,
                      deferImages: !1,
                    })
                  )
                )
              : null
          )
        );
      };
    },
    "7bTr": (e, a, t) => {
      t.d(a, { Z: () => g });
      var i,
        r,
        n,
        o,
        s = t("sQwH"),
        c = t("3Z9q"),
        l = t("TUor"),
        u = t("qjDX"),
        d = t("ZZB/"),
        v = t("I0q+"),
        m = t("LvQi"),
        f = t("6tbf"),
        Z = t("sSJZ"),
        p = t("BNNE"),
        h = t("N+9a");
      const g = function (e) {
        var a = e.authUser,
          t = e.activity,
          g = e.isRead,
          _ = void 0 !== g && g,
          N = c.useContext(Z.u).withDetail;
        return (0, s.Z)(
          u.Z,
          { notificationUid: t.uid, to: t.obj.viewerUrl, isRead: _ },
          void 0,
          i ||
            (i = (0, s.Z)("div", { className: "activity__icon --staffpick" })),
          (0, s.Z)(
            "div",
            { className: "activity__main" },
            void 0,
            (0, s.Z)(
              "div",
              { className: "activity__main__left" },
              void 0,
              (0, s.Z)(
                p.Z,
                { uid: t.actor.uid },
                void 0,
                (0, s.Z)(
                  "div",
                  { className: "avatar", "data-user": a.uid },
                  void 0,
                  (0, s.Z)(
                    h.Z,
                    {
                      to: "users:profile_summary",
                      params: { username: t.actor.username },
                    },
                    void 0,
                    (0, s.Z)(v.Z, {
                      alt: "Avatar of ".concat(t.actor.username, " "),
                      avatars: t.actor.avatars,
                      size: 30,
                    })
                  )
                )
              )
            ),
            (0, s.Z)(
              "div",
              { className: "activity__main__middle" },
              void 0,
              (0, s.Z)(
                "div",
                { className: "activity__title" },
                void 0,
                a.uid === t.actor.uid
                  ? (0, s.Z)(
                      c.Fragment,
                      {},
                      void 0,
                      r || (r = (0, s.Z)("span", {}, void 0, "Your model ")),
                      (0, s.Z)(d.Z, { model: t.obj }),
                      n ||
                        (n = (0, s.Z)(
                          "span",
                          {},
                          void 0,
                          " has been staff picked! Congrats!"
                        ))
                    )
                  : (0, s.Z)(
                      c.Fragment,
                      {},
                      void 0,
                      (0, s.Z)(m.Z, { user: t.actor, withoutBadge: !0 }),
                      "'s model ",
                      (0, s.Z)(d.Z, { model: t.obj }),
                      o ||
                        (o = (0, s.Z)(
                          "span",
                          {},
                          void 0,
                          " has been staff picked!"
                        )),
                      (0, s.Z)(
                        "a",
                        { href: "".concat(t.obj.viewerUrl, "#comments") },
                        void 0,
                        " Say Congrats!"
                      )
                    )
              ),
              (0, s.Z)(
                "time",
                { className: "activity__time" },
                void 0,
                (0, l.Sy)(t.timestamp)
              )
            ),
            N
              ? (0, s.Z)(
                  "div",
                  { className: "activity__main__right" },
                  void 0,
                  (0, s.Z)(
                    "div",
                    { className: "activity__thumbnail" },
                    void 0,
                    (0, s.Z)(f.Z, {
                      alt: "".concat(t.obj.name, " 3D Model"),
                      thumbnails: t.obj.thumbnails,
                      deferImages: !1,
                    })
                  )
                )
              : null
          )
        );
      };
    },
    ZHun: (e, a, t) => {
      t.d(a, { Z: () => Z });
      var i,
        r,
        n = t("sQwH"),
        o = t("7isf"),
        s = (t("3Z9q"), t("TUor")),
        c = t("qjDX"),
        l = t("pDOP"),
        u = t("y7HB"),
        d = t("I0q+"),
        v = t("LvQi"),
        m = t("N+9a"),
        f = function (e) {
          return e.extraContext.count > 0
            ? e.extraContext.activities.reduce(
                function (e, a) {
                  return [].concat((0, o.Z)(e), [a.actor]);
                },
                [e.actor]
              )
            : [e.actor];
        };
      const Z = function (e) {
        var a = e.activity,
          t = e.isRead,
          o = void 0 !== t && t,
          Z = a.extraContext.count + 1;
        return (0, n.Z)(
          c.Z,
          { notificationUid: a.uid, to: a.actor.profileUrl, isRead: o },
          void 0,
          i ||
            (i = (0, n.Z)("div", { className: "activity__icon --subscribe" })),
          (0, n.Z)(
            "div",
            { className: "activity__main" },
            void 0,
            (0, n.Z)(
              "div",
              { className: "activity__main__left" },
              void 0,
              (0, n.Z)(
                "div",
                { className: "avatar" },
                void 0,
                (0, n.Z)(
                  m.Z,
                  {
                    to: "users:profile_summary",
                    params: { username: a.actor.username },
                  },
                  void 0,
                  (0, n.Z)(d.Z, {
                    alt: "Avatar of ".concat(a.actor.username, " "),
                    avatars: a.actor.avatars,
                    size: 30,
                  })
                )
              )
            ),
            (0, n.Z)(
              "div",
              { className: "activity__main__middle" },
              void 0,
              (0, n.Z)(
                "div",
                { className: "activity__title" },
                void 0,
                (0, n.Z)(u.Z, {
                  totalCount: Z,
                  names: f(a).map(function (e) {
                    return (0, n.Z)(v.Z, { user: e }, e.uid);
                  }),
                }),
                r || (r = (0, n.Z)("span", {}, void 0, " subscribed to ")),
                (0, n.Z)(l.Z, { collection: a.target })
              ),
              (0, n.Z)(
                "time",
                { className: "activity__time" },
                void 0,
                (0, s.Sy)(a.timestamp)
              )
            )
          )
        );
      };
    },
    xlyI: (e, a, t) => {
      t.d(a, { Z: () => n });
      var i,
        r = t("sQwH");
      t("3Z9q");
      const n = function () {
        return (
          i ||
          (i = (0, r.Z)(
            "div",
            { className: "placeholder__card" },
            void 0,
            (0, r.Z)(
              "div",
              {
                className:
                  "placeholder c-list-item-placeholder --small-activity",
              },
              void 0,
              (0, r.Z)("div", {
                className: "placeholder__image --rounded-corners --x-s",
              }),
              (0, r.Z)("div", {
                className: "placeholder__image --rounded-corners --small",
              }),
              (0, r.Z)(
                "div",
                { className: "placeholder__container" },
                void 0,
                (0, r.Z)("div", {
                  className: "placeholder__text --small --w-80",
                }),
                (0, r.Z)("div", {
                  className: "placeholder__text --small --w-50",
                })
              )
            )
          ))
        );
      };
    },
    UM53: (e, a, t) => {
      t.d(a, { Z: () => d });
      var i = t("qD8I"),
        r = t("CUcO"),
        n = t("8N4v"),
        o = t("Zfzx"),
        s = t("FUT3"),
        c = t("hayj"),
        l = t("xKIK");
      function u(e) {
        var a = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var t,
            i = (0, c.Z)(e);
          if (a) {
            var r = (0, c.Z)(this).constructor;
            t = Reflect.construct(i, arguments, r);
          } else t = i.apply(this, arguments);
          return (0, s.Z)(this, t);
        };
      }
      var d = (function (e) {
        (0, o.Z)(t, e);
        var a = u(t);
        function t() {
          var e;
          (0, i.Z)(this, t);
          for (var r = arguments.length, o = new Array(r), s = 0; s < r; s++)
            o[s] = arguments[s];
          return (
            (e = a.call.apply(a, [this].concat(o))),
            (0, l.Z)((0, n.Z)(e), "state", { error: null }),
            e
          );
        }
        return (
          (0, r.Z)(t, [
            {
              key: "componentDidCatch",
              value: function (e, a) {
                console.error(
                  "\n            React error caugh by error boundary.\n            Component stack: ".concat(
                    a.componentStack,
                    "\n            "
                  ),
                  e
                ),
                  this.setState({ error: e });
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props,
                  a = e.children,
                  t = e.fallback;
                return null !== this.state.error ? t : a || null;
              },
            },
          ]),
          t
        );
      })(t("3Z9q").Component);
    },
    wKqd: (e, a, t) => {
      t.d(a, { Z: () => o });
      var i = t("3Z9q"),
        r = t("nv4P"),
        n = t("Kjxj");
      const o = function (e, a) {
        var t =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          o = i.useCallback(a, t);
        i.useEffect(
          function () {
            var a = new (r.Z.extend({ mixins: [n.Z], onFilesDrop: o }))({
              el: e,
            });
            return (
              a.initializeDragAndDrop(),
              function () {
                a.undelegateDragAndDrop();
              }
            );
          },
          [e, o]
        );
      };
    },
    RyjW: (e, a, t) => {
      t.d(a, { Z: () => n });
      var i = t("7isf"),
        r = t("3Z9q");
      const n = function (e, a, t, n) {
        var o =
          arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [];
        r.useEffect(function () {
          if (e.current) {
            var i = e.current;
            return (
              i.addEventListener(a, t, n),
              function () {
                return i.removeEventListener(a, t, n);
              }
            );
          }
        }, [e.current, a].concat((0, i.Z)(o)));
      };
    },
    KiA0: (e, a, t) => {
      t.d(a, { Z: () => n });
      var i = t("3Z9q");
      function r(e) {
        return e instanceof Element ? e : null == e ? void 0 : e.current;
      }
      const n = function (e, a) {
        var t =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : "click";
        (0, i.useEffect)(
          function () {
            var i = function (t) {
              (Array.isArray(e) ? e.map(r) : [r(e)]).some(function (e) {
                return !e || e.contains(t.target);
              }) || a(t);
            };
            return (
              window.addEventListener(t, i),
              function () {
                return window.removeEventListener(t, i);
              }
            );
          },
          [a]
        );
      };
    },
    "/NBN": (e, a, t) => {
      t.d(a, { Z: () => n });
      var i = t("3Z9q"),
        r = t("RyjW");
      const n = function (e) {
        var a = i.useRef(0);
        (0, r.Z)(e, "wheel", function (e) {
          var a = (-1 / 4) * e.wheelDelta;
          a &&
            (e.preventDefault(),
            (e.currentTarget.scrollTop = a + e.currentTarget.scrollTop));
        }),
          (0, r.Z)(e, "touchstart", function (e) {
            a.current = e.touches[0].pageY;
          }),
          (0, r.Z)(e, "touchmove", function (e) {
            e.preventDefault();
            var t = a.current - e.touches[0].pageY;
            (a.current = e.touches[0].pageY),
              (e.currentTarget.scrollTop = t + e.currentTarget.scrollTop);
          });
      };
    },
    EB5l: (e, a, t) => {
      t.d(a, { Z: () => o });
      var i = t("mSEu"),
        r = t("VDcQ"),
        n = t("+zma");
      const o = function () {
        var e;
        return (0, r.v9)(n.wl.authUser.canAccessFeature("ff_tos_update")) &&
          null !== (e = i.Z.tosUpdateVersion) &&
          void 0 !== e
          ? e
          : i.Z.tosVersion;
      };
    },
    ZqC1: (e, a, t) => {
      t.d(a, { Z: () => o });
      var i = t("sGMM"),
        r = t("pfBE"),
        n = t("3Z9q");
      const o = function () {
        var e = n.useState(0),
          a = (0, i.Z)(e, 2),
          t = a[0],
          o = a[1];
        return (
          n.useEffect(function () {
            var e = r.Z.getSingleton(),
              a = function () {
                return o(e.get("activitiesCount"));
              };
            return (
              e.get("activitiesCount") && o(e.get("activitiesCount")),
              e.on("change:activitiesCount", a),
              function () {
                return e.off("change:activitiesCount", a);
              }
            );
          }, []),
          t
        );
      };
    },
    QCXL: (e, a, t) => {
      t.d(a, { Z: () => o });
      var i,
        r = t("sQwH"),
        n = (t("3Z9q"), t("41vJ"));
      const o = function (e) {
        var a = e.label;
        return (0, r.Z)(
          "div",
          { className: n.Z.view },
          void 0,
          i || (i = (0, r.Z)("i", { className: "icon fa-regular fa-tag" })),
          a
        );
      };
    },
    wDWr: (e, a, t) => {
      t.d(a, { Z: () => _ });
      var i,
        r = t("sQwH"),
        n = (t("3Z9q"), t("VDcQ")),
        o = t("+zma"),
        s = t("+Ouw"),
        c = t("QCXL"),
        l = t("FpNY");
      const u = function () {
        return (0, r.Z)(
          "div",
          { className: l.Z.view },
          void 0,
          i || (i = (0, r.Z)(c.Z, { label: "special" })),
          (0, r.Z)(
            "div",
            { className: l.Z.message },
            void 0,
            " Save 20% on your first purchase! "
          )
        );
      };
      var d,
        v = t("xKIK"),
        m = t("E6oP"),
        f = t("p5Lb"),
        Z = t("0dnH"),
        p = t("X40V");
      const h = function (e) {
        var a = e.totalInCents,
          t = (0, s.td)(a),
          i = t && (0, f.T4)(t.minimum - a);
        return t
          ? (0, r.Z)(
              "div",
              { className: m.Z.view },
              void 0,
              (0, r.Z)(
                "div",
                { className: m.Z.rangeAndSave },
                void 0,
                d || (d = (0, r.Z)(c.Z, { label: "special" })),
                (0, r.Z)(Z.Z, { totalPrice: a })
              ),
              (0, r.Z)(
                "div",
                { className: m.Z.balance },
                void 0,
                (0, r.Z)(
                  "div",
                  { className: m.Z.statusBar },
                  void 0,
                  (0, r.Z)("div", {
                    className: (0, p.AK)(
                      m.Z.status,
                      (0, v.Z)({}, m.Z["--unlocked"], a > t.minimum)
                    ),
                    style: { width: "".concat((a / t.minimum) * 100, "%") },
                  })
                ),
                a < t.minimum
                  ? (0, r.Z)(
                      "div",
                      { className: m.Z.unlock },
                      void 0,
                      " ",
                      "add ".concat(i, " to unlock")
                    )
                  : (0, r.Z)(
                      "div",
                      { className: m.Z.unlock },
                      void 0,
                      " ",
                      "You’ve unlocked ".concat(t.save, "%")
                    )
              )
            )
          : null;
      };
      var g;
      const _ = function (e) {
        var a = e.totalInCents,
          t = (0, n.v9)(o.wl.authUser.user),
          i = !t.isBuyer || t.isAnonymous,
          c = (0, s.td)(a);
        return i
          ? c && Number(c.save) > 20
            ? (0, r.Z)(h, { totalInCents: a })
            : g || (g = (0, r.Z)(u, {}))
          : (0, r.Z)(h, { totalInCents: a });
      };
    },
    RL7f: (e, a, t) => {
      t.d(a, { Z: () => v });
      var i,
        r,
        n,
        o = t("sQwH"),
        s = (t("3Z9q"), t("vAnt")),
        c = t("X40V"),
        l = t("iu9k"),
        u = t("VDcQ"),
        d = t("+zma");
      const v = function (e) {
        var a = e.size,
          t = void 0 === a ? "normal" : a,
          v = (0, u.v9)(d.wl.authUser.user),
          m = !v.isBuyer || v.isAnonymous;
        return (0, o.Z)(
          "div",
          { className: "c-cart-empty-state" },
          void 0,
          (0, o.Z)("div", {
            className: (0, c.AK)("c-cart-empty-state__image", "--".concat(t)),
          }),
          i ||
            (i = (0, o.Z)(
              "p",
              { className: "c-cart-empty-state__text" },
              void 0,
              "Your cart is empty"
            )),
          m &&
            (r ||
              (r = (0, o.Z)(
                "p",
                { className: "c-cart-empty-state__firstPurchase" },
                void 0,
                (0, o.Z)("span", {}, void 0, "Save 20%"),
                " on your first purchase"
              ))),
          (0, o.Z)(
            "a",
            { href: (0, l.HQ)("store:search") },
            void 0,
            n ||
              (n = (0, o.Z)(s.Z, {
                text: "browse store models",
                type: "store",
                size: "large",
              }))
          )
        );
      };
    },
    owJ0: (e, a, t) => {
      t.d(a, { Z: () => r });
      var i = t("sQwH");
      t("3Z9q");
      const r = function (e) {
        var a = e.count,
          t = void 0 === a ? 0 : a,
          r = e.title,
          n = e.action,
          o = void 0 === n ? null : n;
        return (0, i.Z)(
          "div",
          { className: "c-cart-header" },
          void 0,
          (0, i.Z)("p", { className: "c-cart-header__title" }, void 0, r),
          t
            ? (0, i.Z)("span", { className: "c-cart-header__count" }, void 0, t)
            : null,
          (0, i.Z)("div", { className: "c-cart-header__action" }, void 0, o)
        );
      };
    },
    "/KXD": (e, a, t) => {
      t.d(a, { Z: () => Z });
      var i,
        r,
        n,
        o,
        s = t("sQwH"),
        c = t("3Z9q"),
        l = t("LLYa"),
        u = t("X40V"),
        d = t("g/7r"),
        v = t("p5Lb"),
        m = t("A2i4"),
        f = t("ZZB/");
      function Z(e) {
        var a = e.model,
          t = e.size,
          Z = e.onRemove,
          p = void 0 === Z ? d.EI : Z,
          h = !(0, l.Ef)(a);
        return (0, s.Z)(
          "div",
          {
            className: (0, u.AK)("c-cart-row", t ? "--".concat(t) : void 0, {
              "--disabled": h,
            }),
          },
          void 0,
          (0, s.Z)(
            "div",
            { className: "c-cart-row__thumbnail" },
            void 0,
            (0, s.Z)(
              "a",
              { "data-route": !0, href: a.viewerUrl },
              void 0,
              (0, s.Z)(m.ZP, {
                alt: "Thumbnail for ".concat(a.name, " 3D model"),
                width: 70,
                height: 40,
                images: a.thumbnails,
              })
            )
          ),
          (0, s.Z)(
            "div",
            { className: "c-cart-row__content" },
            void 0,
            (0, s.Z)(
              "p",
              {},
              void 0,
              (0, s.Z)(
                "span",
                {
                  "data-action": "open-model",
                  className: (0, u.AK)("c-cart-row__title", {
                    "--deleted": a.isDeleted,
                  }),
                },
                void 0,
                (0, s.Z)(f.Z, { model: a })
              ),
              a.isDeleted &&
                (i ||
                  (i = (0, s.Z)(
                    "span",
                    { className: "help" },
                    void 0,
                    (0, s.Z)("i", {
                      className: "fa-regular fa-question-circle",
                    }),
                    (0, s.Z)(
                      "span",
                      { className: "tooltip tooltip-right" },
                      void 0,
                      "This model was deleted"
                    )
                  ))),
              "store" !== a.downloadType &&
                (r ||
                  (r = (0, s.Z)(
                    "span",
                    { className: "help" },
                    void 0,
                    (0, s.Z)("i", {
                      className: "fa-regular fa-question-circle",
                    }),
                    (0, s.Z)(
                      "span",
                      { className: "tooltip tooltip-right" },
                      void 0,
                      "This model is no longer for sale"
                    )
                  ))),
              a.isOwned &&
                (0, s.Z)(
                  c.Fragment,
                  {},
                  void 0,
                  n || (n = (0, s.Z)("br", {})),
                  (0, s.Z)(
                    "a",
                    { className: "skfb-link", href: a.viewerUrl },
                    void 0,
                    "Model already bought"
                  )
                )
            ),
            (0, s.Z)(
              "p",
              { className: "c-cart-row__price" },
              void 0,
              (0, v.T4)(a.price)
            )
          ),
          p !== d.EI &&
            (0, s.Z)(
              "div",
              { className: "c-cart-row__actions" },
              void 0,
              (0, s.Z)(
                "button",
                {
                  className: "c-cart-row__remove",
                  onClick: function (e) {
                    e.stopPropagation(), p();
                  },
                },
                void 0,
                o ||
                  (o = (0, s.Z)("i", { className: "icon fa-regular fa-times" }))
              )
            )
        );
      }
    },
    "0dnH": (e, a, t) => {
      t.d(a, { Z: () => d });
      var i = t("sQwH"),
        r = t("xKIK"),
        n = t("3Z9q"),
        o = t("+Ouw"),
        s = t("jUPx"),
        c = t("X40V"),
        l = t("VDcQ"),
        u = t("+zma");
      const d = function (e) {
        var a = e.totalPrice,
          t = e.forceHide,
          d = void 0 !== t && t,
          v = e.withBorder,
          m = void 0 !== v && v,
          f = (0, o.Lf)(),
          Z = (0, o.td)(a),
          p = (0, l.v9)(u.wl.authUser.user),
          h = !p.isBuyer || p.isAnonymous;
        return (
          n.useEffect(
            function () {
              !f && Z && (0, o.hr)(Z.save);
            },
            [f, Z]
          ),
          Z && ((d && a <= Z.minimum) || !d)
            ? h && Number(Z.save) <= 20
              ? null
              : (0, i.Z)(
                  "div",
                  {
                    className: (0, c.AK)(
                      "c-upsell-message",
                      s.Z.view,
                      (0, r.Z)({}, (0, c.c6)(s.Z, "with-border"), !!m)
                    ),
                  },
                  void 0,
                  "Spend $"
                    .concat(Z.minimum / 100, " or more & Save ")
                    .concat(Z.save, "% Now")
                )
            : null
        );
      };
    },
    XMho: (e, a, t) => {
      t.d(a, { Z: () => C });
      var i = t("Wch8"),
        r = t("D4hk"),
        n = t("sGMM"),
        o = t("sQwH"),
        s = t("y+4b"),
        c = t.n(s),
        l = t("3Z9q"),
        u = t("VDcQ"),
        d = t("+zma");
      const v = function (e) {
        var a = e.level,
          t = e.uid,
          i = e.children,
          r = e.icon,
          n = (0, u.I0)(),
          s = l.useCallback(
            function () {
              return n(d.Nw.messages.remove(t));
            },
            [t, n]
          );
        return (
          (0, l.useEffect)(function () {
            var e = setTimeout(function () {
              return s();
            }, 6e3);
            return function () {
              clearTimeout(e);
            };
          }),
          (0, o.Z)(
            "div",
            { className: "flashmessage notification ".concat(a) },
            void 0,
            (0, o.Z)(
              "div",
              { className: "inner" },
              void 0,
              (0, o.Z)(
                "div",
                { className: "flashmessage-content" },
                void 0,
                r && (0, o.Z)("i", { className: r }),
                (0, o.Z)("div", { className: "message" }, void 0, i)
              ),
              (0, o.Z)("button", {
                className: "flashmessage-close",
                onClick: s,
                title: "Close",
              })
            )
          )
        );
      };
      var m,
        f,
        Z,
        p = t("xovo"),
        h = t("iu9k"),
        g = t("pgZm"),
        _ = t("LLYa"),
        N = function (e) {
          var a = e.uid,
            t = e.level,
            i = void 0 === t ? "warning" : t;
          return (0, o.Z)(
            v,
            { level: i, uid: a },
            void 0,
            "Important: your email hasn",
            "'",
            "t been confirmed yet. ",
            m || (m = (0, o.Z)("br", {})),
            (0, o.Z)(
              "a",
              { href: (0, h.HQ)("users:settings_email") },
              void 0,
              "Confirm now"
            )
          );
        },
        b = function (e) {
          var a = e.uid,
            t = e.level,
            i = void 0 === t ? "success" : t,
            r = e.model,
            s = (0, _.IL)(r),
            c = (0, n.Z)(s, 2),
            l = c[0],
            u = c[1];
          return (0, o.Z)(
            v,
            { level: i, uid: a },
            void 0,
            f ||
              (f = (0, o.Z)("i", { className: "fa-regular fa-check-circle" })),
            "The model has been transferred successfully. ",
            (0, o.Z)("a", { href: (0, h.HQ)(l, u) }, void 0, "Go to model")
          );
        },
        y = function (e) {
          var a = e.uid,
            t = e.level,
            i = void 0 === t ? "success" : t,
            r = e.project,
            s = (0, g.Qs)(r),
            c = (0, n.Z)(s, 2),
            l = c[0],
            u = c[1];
          return (0, o.Z)(
            v,
            { level: i, uid: a },
            void 0,
            Z ||
              (Z = (0, o.Z)("i", { className: "fa-regular fa-check-circle" })),
            "Your models have been successfully transferred to ",
            (0, o.Z)("a", { href: (0, h.HQ)(l, u) }, void 0, r.name)
          );
        },
        w = function (e) {
          var a = e.uid,
            t = e.level,
            i = void 0 === t ? "info" : t,
            r = e.message,
            n = (0, u.I0)();
          return (0, o.Z)(
            v,
            { level: i, uid: a },
            void 0,
            "".concat(r, " To view all models, "),
            (0, o.Z)(
              "a",
              {
                onClick: function (e) {
                  e.preventDefault(), n(d.Nw.authUser.setAllowsRestricted(!0));
                },
                "data-action": "enable-restricted",
              },
              void 0,
              "enable restricted content browsing"
            )
          );
        },
        k = function () {
          var e = (0, u.v9)(d.wl.messages.messages);
          return (0, o.Z)(
            "div",
            { className: "flashmessage-container" },
            void 0,
            e.map(function (e) {
              if (!(0, p.dB)(e))
                return l.createElement(
                  v,
                  (0, r.Z)({ key: e.uid }, e),
                  e.message
                );
              switch (e.type) {
                case "confirmEmail":
                  return l.createElement(N, (0, r.Z)({ key: e.uid }, e));
                case "modelTransfer":
                  return l.createElement(b, (0, r.Z)({ key: e.uid }, e));
                case "modelsTransfer":
                  return l.createElement(y, (0, r.Z)({ key: e.uid }, e));
                case "enableRestricted":
                  return l.createElement(w, (0, r.Z)({ key: e.uid }, e));
                default:
                  (0, r.Z)({ key: e.uid }, e);
              }
            })
          );
        };
      k.prepare = (function () {
        var e = (0, i.Z)(
          c().mark(function e(a) {
            var t, i;
            return c().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (t = a.services),
                      (i = a.props.messages),
                      (e.next = 3),
                      t.dispatch(d.Nw.authUser.getFromPrefetched())
                    );
                  case 3:
                    i && t.dispatch(d.Nw.messages.addMultiple(i));
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (a) {
          return e.apply(this, arguments);
        };
      })();
      const C = k;
    },
    bvJA: (e, a, t) => {
      t.d(a, { Z: () => U });
      var i,
        r = t("sQwH"),
        n = t("3Z9q"),
        o = t("8nmZ"),
        s = t("iu9k"),
        c = t("X40V"),
        l = t("mSEu"),
        u = t("qNsD"),
        d = t("D4hk");
      const v = function (e) {
        return n.createElement(
          "svg",
          (0, d.Z)({ width: 18, height: 18 }, e),
          i ||
            (i = (0, r.Z)(
              "g",
              { fill: "none", fillRule: "evenodd" },
              void 0,
              (0, r.Z)("path", { d: "M0 0h18v18H0z" }),
              (0, r.Z)("path", {
                className: "prefix__social-link-path",
                d: "M.234 18H4.1V5.848H.234V18zM4.35 2.101C4.34 1.494 4.138.992 3.747.595 3.357.198 2.838 0 2.191 0 1.545 0 1.018.198.611.595.204.992 0 1.495 0 2.101c0 .595.198 1.095.594 1.497.396.403.912.604 1.547.604h.017c.658 0 1.188-.201 1.59-.604.4-.402.601-.902.601-1.497zM14.136 18H18v-6.969c0-1.798-.407-3.157-1.221-4.08-.814-.922-1.89-1.383-3.229-1.383-1.517 0-2.682.683-3.496 2.049h.033V5.848H6.223c.034.77.034 4.821 0 12.152h3.864v-6.794c0-.443.04-.77.117-.98.168-.409.419-.756.753-1.042.335-.286.747-.43 1.238-.43 1.294 0 1.94.917 1.94 2.75V18z",
                fill: "#999",
                fillRule: "nonzero",
              })
            ))
        );
      };
      var m;
      const f = function (e) {
        return n.createElement(
          "svg",
          (0, d.Z)({ width: 18, height: 18 }, e),
          m ||
            (m = (0, r.Z)(
              "g",
              { fill: "none", fillRule: "evenodd" },
              void 0,
              (0, r.Z)("path", { d: "M0 0h18v18H0z" }),
              (0, r.Z)("path", {
                className: "prefix__social-link-path",
                d: "M9.318 0C4.453 0 2 3.522 2 6.459c0 1.778.667 3.36 2.097 3.95.234.096.444.003.512-.26.048-.18.16-.638.21-.829.068-.26.041-.35-.148-.576-.412-.491-.676-1.127-.676-2.028 0-2.613 1.937-4.952 5.042-4.952 2.75 0 4.26 1.697 4.26 3.963 0 2.98-1.306 5.497-3.246 5.497-1.071 0-1.873-.895-1.616-1.992.308-1.31.904-2.723.904-3.669 0-.846-.45-1.552-1.381-1.552-1.095 0-1.975 1.144-1.975 2.676 0 .976.327 1.636.327 1.636l-1.317 5.634c-.392 1.672-.06 3.722-.031 3.93.017.122.173.151.243.058.101-.133 1.406-1.758 1.849-3.383.125-.46.72-2.842.72-2.842.356.685 1.396 1.289 2.501 1.289 3.292 0 5.525-3.03 5.525-7.086C15.8 2.856 13.227 0 9.318 0",
                fill: "#999",
              })
            ))
        );
      };
      var Z;
      const p = function (e) {
        return n.createElement(
          "svg",
          (0, d.Z)({ width: 18, height: 18 }, e),
          Z ||
            (Z = (0, r.Z)(
              "g",
              { fill: "none", fillRule: "evenodd" },
              void 0,
              (0, r.Z)("path", { d: "M0 0h18v18H0z" }),
              (0, r.Z)("path", {
                className: "prefix__social-link-path",
                d: "M10.074 18V9.787h2.747l.414-3.203h-3.161V4.541c0-.515.108-.901.324-1.16.216-.257.637-.386 1.263-.386l1.684-.013V.124C12.765.041 11.946 0 10.888 0 9.637 0 8.636.368 7.886 1.104c-.75.736-1.125 1.776-1.125 3.12v2.36H4v3.203h2.76V18h3.314z",
                fill: "#999",
                fillRule: "nonzero",
              })
            ))
        );
      };
      var h;
      const g = function (e) {
        return n.createElement(
          "svg",
          (0, d.Z)({ width: 18, height: 18 }, e),
          h ||
            (h = (0, r.Z)(
              "g",
              { fill: "none", fillRule: "evenodd" },
              void 0,
              (0, r.Z)("path", { d: "M0 0h18v18H0z" }),
              (0, r.Z)("path", {
                className: "prefix__social-link-path",
                d: "M9 0C6.556 0 6.25.01 5.29.054S3.676.25 3.104.473A4.411 4.411 0 001.51 1.51c-.5.5-.809 1.002-1.039 1.594C.25 3.677.098 4.33.054 5.289.01 6.25 0 6.556 0 9s.01 2.75.054 3.71c.044.959.196 1.613.418 2.185.23.592.538 1.094 1.039 1.594.5.5 1.002.808 1.594 1.039.572.222 1.226.374 2.184.418C6.25 17.99 6.556 18 9 18s2.75-.01 3.71-.054c.959-.044 1.613-.196 2.185-.418a4.412 4.412 0 001.594-1.039c.5-.5.809-1.002 1.039-1.594.222-.572.374-1.226.418-2.184C17.99 11.75 18 11.444 18 9s-.01-2.75-.054-3.71c-.044-.959-.196-1.613-.418-2.185a4.412 4.412 0 00-1.039-1.594c-.5-.5-1.002-.809-1.594-1.038C14.323.25 13.67.098 12.711.054 11.75.01 11.444 0 9 0m0 1.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.67.31.421.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.671.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67a2.79 2.79 0 01-.673 1.036c-.315.315-.615.51-1.035.673-.317.123-.794.27-1.671.31-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.671-.31a2.788 2.788 0 01-1.035-.673 2.789 2.789 0 01-.673-1.035c-.123-.317-.27-.794-.31-1.671-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.67a2.79 2.79 0 01.673-1.036c.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.671-.31.95-.043 1.234-.052 3.637-.052M9 12a3 3 0 110-6 3 3 0 010 6m0-7.622a4.622 4.622 0 110 9.244 4.622 4.622 0 010-9.244zm5.884-.182a1.08 1.08 0 11-2.16 0 1.08 1.08 0 012.16 0z",
                fill: "#999",
              })
            ))
        );
      };
      var _;
      const N = function (e) {
        return n.createElement(
          "svg",
          (0, d.Z)({ width: 18, height: 18 }, e),
          _ ||
            (_ = (0, r.Z)(
              "g",
              { fill: "none", fillRule: "evenodd" },
              void 0,
              (0, r.Z)("path", { d: "M0 0h18v18H0z" }),
              (0, r.Z)("path", {
                className: "prefix__social-link-path",
                d: "M18 3.723a7.82 7.82 0 01-2.127.597c.797-.468 1.342-1.154 1.635-2.056a7.341 7.341 0 01-2.356.896C14.438 2.387 13.541 2 12.462 2c-1.019 0-1.889.36-2.61 1.081a3.557 3.557 0 00-1.08 2.61c0 .34.029.622.087.844a10.45 10.45 0 01-4.254-1.142A10.464 10.464 0 011.23 2.668a3.656 3.656 0 00-.51 1.863c0 1.336.534 2.362 1.6 3.076-.55-.011-1.136-.164-1.757-.457v.036c0 .878.292 1.66.878 2.346.586.686 1.307 1.11 2.163 1.275-.34.093-.64.14-.897.14-.152 0-.38-.023-.686-.07a3.753 3.753 0 001.31 1.828c.627.48 1.339.727 2.136.738-1.36 1.055-2.889 1.582-4.588 1.582-.305 0-.598-.017-.879-.052a10.355 10.355 0 005.66 1.652 10.76 10.76 0 003.692-.624c1.148-.416 2.132-.973 2.953-1.67.82-.697 1.526-1.5 2.118-2.408a10.612 10.612 0 001.318-2.848c.287-.99.43-1.977.43-2.962 0-.21-.005-.369-.017-.474A7.175 7.175 0 0018 3.723z",
                fill: "#999",
                fillRule: "nonzero",
              })
            ))
        );
      };
      var b;
      const y = function (e) {
        return n.createElement(
          "svg",
          (0, d.Z)({ width: 18, height: 18, viewBox: "0 0 71 55" }, e),
          b ||
            (b = (0, r.Z)(
              "g",
              { fill: "none", fillRule: "evenodd" },
              void 0,
              (0, r.Z)("path", { d: "M0 0h18v18H0z" }),
              (0, r.Z)("path", {
                className: "prefix__social-link-path",
                d: "M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z",
                fill: "#999",
                fillRule: "nonzero",
              })
            ))
        );
      };
      var w,
        k,
        C,
        x,
        H,
        Q,
        A,
        S = (0, o.Z)(function () {
          return [
            {
              title: "enterprise",
              links: [
                {
                  href: (0, s.HQ)("pages:enterprise"),
                  text: "Enterprise Solutions",
                },
                {
                  href: (0, s.HQ)("pages:configurator"),
                  text: "3D Configurators",
                },
                { href: (0, s.HQ)("pages:ecommerce"), text: "3D eCommerce" },
                { href: (0, s.HQ)("pages:viewer"), text: "3D Viewer" },
                {
                  href: (0, s.HQ)("pages:advertising"),
                  text: "3D Advertising",
                },
                {
                  href: (0, s.HQ)("pages:3d_asset_management"),
                  text: "Sketchfab for Teams",
                },
                { href: l.Z.hosts.enterpriseBlog, text: "Customer Stories" },
                { href: (0, s.HQ)("pages:plans"), text: "Pricing" },
              ].filter(Boolean),
            },
            {
              title: "ecosystem",
              links: [
                { href: (0, s.HQ)("pages:exporters"), text: "Exporters" },
                { href: (0, s.HQ)("pages:importers"), text: "Importers" },
                {
                  href: (0, s.HQ)("pages:developers"),
                  text: "Developers & API",
                },
                {
                  href: (0, s.HQ)("pages:ar_landing"),
                  text: "Augmented Reality",
                },
                {
                  href: (0, s.HQ)("pages:virtual_reality"),
                  text: "Virtual Reality",
                },
              ],
            },
            {
              title: "store",
              links: [
                { href: (0, s.HQ)("store:home"), text: "Buy 3D models" },
                {
                  href: (0, s.HQ)("store:search", { sort_by: "-orderCount" }),
                  text: "Best Selling",
                },
                {
                  href: (0, s.HQ)("store:categories_list"),
                  text: "Categories",
                },
                {
                  href: "https://fab.com/become-a-publisher",
                  text: "Become a Seller on Fab",
                },
                {
                  href: (0, s.HQ)("pages:features_download"),
                  text: "Free 3D Models",
                },
              ],
            },
            {
              title: "community",
              links: [
                { href: (0, s.HQ)("models:popular"), text: "Explore" },
                {
                  href: "".concat(l.Z.hosts.faq, "/s/?ProductOrigin=Sketchfab"),
                  text: "Help Center",
                },
                { href: (0, s.HQ)("pages:education"), text: "Education" },
                { href: (0, s.HQ)("pages:museums"), text: "Museums" },
                { href: l.Z.hosts.communityBlog, text: "Blog" },
                {
                  href: (0, s.HQ)("pages:masters_landing"),
                  text: "Sketchfab Masters",
                },
              ].filter(Boolean),
            },
            {
              title: "about",
              links: [
                { href: (0, s.HQ)("pages:about"), text: "Company" },
                {
                  href: "https://www.epicgames.com/site/en-US/careers",
                  text: "Careers",
                },
                { href: (0, s.HQ)("pages:press"), text: "Press Kit" },
                { href: (0, s.HQ)("pages:features"), text: "Features" },
                {
                  href: (0, s.HQ)("pages:about") + "#contact",
                  text: "Contact us",
                  className: "button btn-large btn-primary main-footer__button",
                },
              ],
            },
          ];
        });
      function D(e) {
        var a = e.hideNavigation,
          t = S(),
          i = new Date();
        return (0, r.Z)(
          "footer",
          { className: "main-footer" },
          void 0,
          (0, r.Z)(
            "div",
            { className: "container" },
            void 0,
            a
              ? null
              : (0, r.Z)(
                  "nav",
                  {
                    className: "main-footer__navigation",
                    "aria-label": "footer navigation",
                  },
                  void 0,
                  t.map(function (e) {
                    return (0, r.Z)(
                      "div",
                      { className: "main-footer__col" },
                      e.title,
                      (0, r.Z)(
                        "span",
                        { className: "main-footer__title" },
                        void 0,
                        e.title
                      ),
                      (0, r.Z)(
                        "ul",
                        { className: "main-footer__links" },
                        void 0,
                        e.links.map(function (e) {
                          return (0,
                          r.Z)("li", { className: "main-footer__link" }, e.text, (0, r.Z)("a", { className: (0, c.AK)("skfb-link", e.className), href: e.href }, void 0, e.text));
                        })
                      )
                    );
                  })
                ),
            (0, r.Z)(
              "div",
              { className: "main-footer__copyrights-container" },
              void 0,
              (0, r.Z)(
                "div",
                { className: "main-footer__copyrights" },
                void 0,
                w || (w = (0, r.Z)(u.kk, { className: "main-footer__logo" })),
                (0, r.Z)(
                  "span",
                  {},
                  void 0,
                  "© ",
                  i.getFullYear(),
                  ", Sketchfab, Inc. All rights reserved."
                )
              ),
              (0, r.Z)(
                "span",
                { className: "main-footer__copyrights-links" },
                void 0,
                (0, r.Z)(
                  "a",
                  { href: (0, s.HQ)("pages:terms"), className: "skfb-link" },
                  void 0,
                  "Terms of use"
                ),
                (0, r.Z)(
                  "a",
                  {
                    href: "".concat(
                      l.Z.hosts.faq,
                      "/s/article/Store-Refund-Policy"
                    ),
                    className: "skfb-link",
                    rel: "noopener noreferrer",
                    target: "_blank",
                  },
                  void 0,
                  "Refund policy"
                ),
                (0, r.Z)(
                  "a",
                  { href: (0, s.HQ)("pages:privacy"), className: "skfb-link" },
                  void 0,
                  "Privacy policy"
                ),
                (0, r.Z)(
                  "a",
                  {
                    href: (0, s.HQ)("pages:html_sitemap_index"),
                    className: "skfb-link",
                  },
                  void 0,
                  "Sitemap"
                )
              ),
              (0, r.Z)(
                "span",
                { className: "main-footer__social-links" },
                void 0,
                k ||
                  (k = (0, r.Z)(
                    "a",
                    {
                      href: "https://twitter.com/Sketchfab",
                      rel: "noopener noreferrer",
                      target: "_blank",
                      className: "skfb-link",
                      "aria-label": "Follow us on Twitter",
                    },
                    void 0,
                    (0, r.Z)(N, {})
                  )),
                C ||
                  (C = (0, r.Z)(
                    "a",
                    {
                      href: "https://www.instagram.com/sketchfab",
                      rel: "noopener noreferrer",
                      target: "_blank",
                      className: "skfb-link",
                      "aria-label": "Follow us on Instagram",
                    },
                    void 0,
                    (0, r.Z)(g, {})
                  )),
                x ||
                  (x = (0, r.Z)(
                    "a",
                    {
                      href: "https://www.facebook.com/Sketchfab",
                      rel: "noopener noreferrer",
                      target: "_blank",
                      className: "skfb-link",
                      "aria-label": "Follow us on Facebook",
                    },
                    void 0,
                    (0, r.Z)(p, {})
                  )),
                (0, r.Z)(
                  "a",
                  {
                    href: l.Z.hosts.discord,
                    rel: "noopener noreferrer",
                    target: "_blank",
                    className: "skfb-link",
                    "aria-label": "Join us on Discord",
                  },
                  void 0,
                  H || (H = (0, r.Z)(y, {}))
                ),
                Q ||
                  (Q = (0, r.Z)(
                    "a",
                    {
                      href: "https://www.pinterest.com/sketchfab",
                      rel: "noopener noreferrer",
                      target: "_blank",
                      className: "skfb-link",
                      "aria-label": "Follow us on Pinterest",
                    },
                    void 0,
                    (0, r.Z)(f, {})
                  )),
                A ||
                  (A = (0, r.Z)(
                    "a",
                    {
                      href: "https://www.linkedin.com/company/sketchfab",
                      rel: "noopener noreferrer",
                      target: "_blank",
                      className: "skfb-link",
                      "aria-label": "Follow us on Linkedin",
                    },
                    void 0,
                    (0, r.Z)(v, {})
                  ))
              )
            )
          )
        );
      }
      const U = n.memo(D);
    },
    "8Ux5": (e, a, t) => {
      t.d(a, { Z: () => d });
      var i = t("sQwH"),
        r = t("sGMM"),
        n = t("3Z9q"),
        o = t("X40V"),
        s = t("iu9k"),
        c = t("qNsD"),
        l = t("k1tG"),
        u = function (e) {
          var a = e.className,
            t = n.useContext(l.Z),
            u = n.useState(!1),
            d = (0, r.Z)(u, 2),
            v = d[0],
            m = d[1];
          return (0, i.Z)(
            "a",
            {
              "aria-label": "Go to the mainpage",
              className: a,
              href: (0, s.HQ)("pages:index"),
              onMouseEnter: function () {
                return m(!0);
              },
              onMouseLeave: function () {
                return m(!1);
              },
            },
            void 0,
            (0, i.Z)(c.ZP, {
              color:
                "transparent" === t ? "white" : o.O9["--color-neutral-600"],
              logoColor: "transparent" === t && v ? "white" : "transparent",
              circleColor:
                "transparent" !== t || v
                  ? o.O9["--color-primary-400"]
                  : "white",
            })
          );
        };
      const d = n.memo(u);
    },
    k1tG: (e, a, t) => {
      t.d(a, { Z: () => i });
      const i = t("3Z9q").createContext("light");
    },
    AEj9: (e, a, t) => {
      t.d(a, { Z: () => y });
      var i,
        r = t("sQwH"),
        n = t("sGMM"),
        o = t("3Z9q"),
        s = t("VDcQ"),
        c = t("HPk7"),
        l = t("X40V"),
        u = t("RyjW"),
        d = t("RA37"),
        v = t("+zma"),
        m = t("l9Gv"),
        f = o.lazy(function () {
          return Promise.all([
            t.e(6952),
            t.e(412),
            t.e(1015),
            t.e(1691),
            t.e(5211),
          ]).then(t.bind(t, "cF6M"));
        }),
        Z = (0, s.$j)(function (e) {
          return { isOpen: v.wl.search.isOpen(e) };
        });
      const p = o.memo(
        Z(function (e) {
          var a = e.isOpen,
            t = o.useRef(null);
          return (
            o.useEffect(
              function () {
                document.body.classList.toggle("--prevent-scroll", a);
              },
              [a]
            ),
            a
              ? o.createElement(
                  "aside",
                  {
                    "aria-label": "Search Overlay",
                    ref: t,
                    className: (0, l.AK)("c-search-overlay", { visible: a }),
                  },
                  (0, r.Z)(m.Z, {}, void 0, function () {
                    return a
                      ? (0, r.Z)(
                          o.Suspense,
                          {
                            fallback:
                              i ||
                              (i = (0, r.Z)("div", {
                                className: "spinner initial-spinner",
                              })),
                          },
                          void 0,
                          (0, r.Z)(f, { parentElement: t.current })
                        )
                      : null;
                  })
                )
              : null
          );
        })
      );
      var h,
        g,
        _,
        N = t("Yl+r"),
        b = t("k1tG");
      const y = function (e) {
        var a = e.children,
          t = e.isTransparent,
          i = e.isHidden,
          f = void 0 !== i && i,
          Z = e.isStandalone,
          y = void 0 !== Z && Z,
          w = o.useState(!1),
          k = (0, n.Z)(w, 2),
          C = k[0],
          x = k[1],
          H = o.useRef(window),
          Q = (0, s.v9)(v.wl.search.isOpen),
          A = o.useRef(C),
          S = o.useRef(null);
        o.useEffect(
          function () {
            A.current = C;
          },
          [C]
        ),
          (0, u.Z)(
            H,
            "scroll",
            (0, c.Z)(function () {
              var e = window.scrollY > 50;
              A.current !== e && x(e);
            }, 100),
            { passive: !0 }
          );
        var D = !t || C || Q ? "light" : "transparent",
          U = y
            ? h ||
              (h = (0, r.Z)(
                "main",
                {},
                void 0,
                (0, r.Z)(
                  "h1",
                  { className: "c-page-header__search-overlay-title" },
                  void 0,
                  "Sketchfab Search"
                ),
                (0, r.Z)(p, {})
              ))
            : g || (g = (0, r.Z)(p, {}));
        return (0, r.Z)(
          d.K,
          {},
          void 0,
          (0, r.Z)(
            N.Js,
            {},
            void 0,
            (0, r.Z)(
              b.Z.Provider,
              { value: D },
              void 0,
              o.createElement(
                "header",
                {
                  ref: S,
                  className: (0, l.AK)(
                    "c-page-header",
                    "responsive-navigation-slidable",
                    {
                      "--searching": Q,
                      "--scroll": C,
                      "--transparent": "transparent" === D,
                      "--hidden": f,
                    }
                  ),
                },
                (0, r.Z)(
                  "div",
                  {
                    className: (0, l.AK)(
                      "c-page-header__flex-container",
                      "container",
                      "--fullscreen"
                    ),
                  },
                  void 0,
                  a
                )
              ),
              U,
              (0, r.Z)(m.Z, {}, void 0, function () {
                return _ || (_ = (0, r.Z)(N.t2, {}));
              })
            )
          )
        );
      };
    },
    Vtax: (e, a, t) => {
      t.d(a, { Z: () => o });
      var i,
        r = t("sQwH"),
        n = (t("3Z9q"), t("inHa"));
      const o = function () {
        return (0, r.Z)(
          "div",
          { className: n.Z.view },
          void 0,
          (0, r.Z)("div", { className: n.Z.icon }),
          i ||
            (i = (0, r.Z)(
              "p",
              { className: "--grey" },
              void 0,
              "No notifications"
            ))
        );
      };
    },
    "DMv+": (e, a, t) => {
      t.d(a, { J: () => s, V: () => o });
      var i = t("sQwH"),
        r = t("sGMM"),
        n = t("3Z9q"),
        o = n.createContext({ isOpen: !1, setIsOpen: function () {} }),
        s = function (e) {
          var a = e.children,
            t = n.useState(!1),
            s = (0, r.Z)(t, 2),
            c = s[0],
            l = s[1];
          return (0, i.Z)(
            o.Provider,
            { value: { isOpen: c, setIsOpen: l } },
            void 0,
            a
          );
        };
    },
    "Yl+r": (e, a, t) => {
      t.d(a, { t2: () => T, Js: () => S.J, Kw: () => D, B$: () => z });
      var i = t("sQwH"),
        r = t("Wch8"),
        n = t("y+4b"),
        o = t.n(n),
        s = t("3Z9q"),
        c = t("VDcQ"),
        l = t("+zma"),
        u = t("X40V"),
        d = t("iu9k"),
        v = t("KiA0"),
        m = t("pLUK"),
        f = t("D4hk"),
        Z = t("mSEu"),
        p = t("sGMM");
      function h(e) {
        var a = e.className,
          t = e.children,
          r = e.header,
          n = s.useRef(null),
          o = s.useState(!1),
          c = (0, p.Z)(o, 2),
          l = c[0],
          d = c[1];
        return (0, i.Z)(
          "section",
          {
            className: (0, u.AK)("c-navigation-accordion", a, {
              "--active": l,
            }),
          },
          void 0,
          (0, i.Z)(
            "header",
            {
              onClick: function () {
                d(function (e) {
                  return !e;
                }),
                  n.current &&
                    (n.current.style.maxHeight
                      ? (n.current.style.maxHeight = "")
                      : (n.current.style.maxHeight =
                          n.current.scrollHeight + "px"));
              },
              className: "c-navigation-accordion__header",
            },
            void 0,
            r
          ),
          s.createElement(
            "div",
            { ref: n, className: "c-navigation-accordion__panel" },
            t
          )
        );
      }
      const g = function (e) {
        var a = e.href,
          t = e.target,
          r = e.rel,
          n = e.SEOTitle,
          o = e.title,
          s = e.icon,
          c = e.onClick;
        return (0, i.Z)(
          "li",
          { className: "responsive-navigation__link" },
          void 0,
          (0, i.Z)(
            "a",
            {
              href: a,
              title: n || o,
              target: t,
              rel: r,
              onClick: c,
              className: "navigation-link",
            },
            void 0,
            s
              ? (0, i.Z)("i", {
                  className: (0, u.AK)("icon", "--translucent", s),
                })
              : null,
            (0, i.Z)("span", {}, void 0, o)
          )
        );
      };
      var _,
        N,
        b,
        y,
        w,
        k,
        C,
        x,
        H,
        Q = s.memo(function () {
          var e = [
            {
              title: "Sketchfab for Teams",
              href: (0, d.HQ)("pages:3d_asset_management"),
            },
            { title: "Augmented Reality", href: (0, d.HQ)("pages:ar_landing") },
            { title: "3D Viewer", href: (0, d.HQ)("pages:viewer") },
            { title: "3D eCommerce", href: (0, d.HQ)("pages:ecommerce") },
            {
              title: "3D Configurators",
              href: (0, d.HQ)("pages:configurator"),
            },
            {
              title: "Find a Partner",
              href: Z.Z.hosts.enterpriseBlog + "/partners-directory",
            },
            { title: "Pricing", href: (0, d.HQ)("pages:plans") },
            { title: "Customer Stories", href: Z.Z.hosts.enterpriseBlog },
          ];
          return (0, i.Z)(
            h,
            {
              className: "section navigation responsive-navigation__section",
              header:
                _ ||
                (_ = (0, i.Z)(
                  "h3",
                  { className: "title" },
                  void 0,
                  "For business"
                )),
            },
            void 0,
            (0, i.Z)(
              "ul",
              {},
              void 0,
              e.map(function (e) {
                return s.createElement(g, (0, f.Z)({ key: e.title }, e));
              })
            )
          );
        }),
        A = s.memo(function () {
          return (0, i.Z)(
            h,
            {
              className: "section navigation responsive-navigation__section",
              header:
                N ||
                (N = (0, i.Z)("h3", { className: "title" }, void 0, "Explore")),
            },
            void 0,
            (0, i.Z)(
              "ul",
              {},
              void 0,
              [
                {
                  title: "All categories",
                  href: (0, d.HQ)("categories:list"),
                  icon: "skfb-icon skfb-icon-model",
                },
                {
                  title: "Popular",
                  href: (0, d.HQ)("models:popular"),
                  SEOTitle: "Popular 3D models",
                  icon: "fa-regular fa-sparkles",
                },
                {
                  title: "Staff picks",
                  href: (0, d.HQ)("models:staffpicks"),
                  SEOTitle: "Staff picks 3D models",
                  icon: "skfb-icon skfb-icon-staffpicks",
                },
                {
                  title: "Downloadable",
                  href: (0, d.HQ)(
                    "models:explore",
                    {},
                    {
                      features: "downloadable",
                      date: "week",
                      sort_by: "-likeCount",
                    }
                  ),
                  SEOTitle: "Downloadable 3D models",
                  icon: "fa-regular fa-arrow-down-to-bracket",
                },
                {
                  title: "Collections",
                  SEOTitle: "3D models collections",
                  href: (0, d.HQ)("collections:popular"),
                  icon: "fa-regular fa-border-all",
                },
              ].map(function (e) {
                return s.createElement(g, (0, f.Z)({ key: e.title }, e));
              }),
              b ||
                (b = (0, i.Z)("li", {
                  className: "responsive-navigation__separator",
                })),
              [
                {
                  title: "Blog",
                  href: Z.Z.hosts.communityBlog,
                  target: "_blank",
                },
                {
                  title: "Community members",
                  href: (0, d.HQ)("users:explore_users"),
                  target: "_blank",
                },
              ].map(function (e) {
                return s.createElement(g, (0, f.Z)({ key: e.title }, e));
              })
            )
          );
        }),
        S = t("DMv+"),
        D = function (e) {
          var a = e.className,
            t = s.useContext(S.V).setIsOpen;
          return (0, i.Z)(
            "button",
            {
              className: (0, u.AK)("c-page-header__action", a),
              onClick: function () {
                return t(function (e) {
                  return !e;
                });
              },
              "aria-label": "navigation",
            },
            void 0,
            y ||
              (y = (0, i.Z)(
                "span",
                { className: "c-page-header__action__icon-container" },
                void 0,
                (0, i.Z)("i", {
                  className: "c-page-header__action__icon fa-regular fa-bars",
                })
              ))
          );
        },
        U = s.memo(function () {
          return (0, i.Z)(
            h,
            {
              className: "section navigation responsive-navigation__section",
              header:
                w ||
                (w = (0, i.Z)(
                  "h3",
                  { className: "title" },
                  void 0,
                  "Buy 3D models"
                )),
            },
            void 0,
            (0, i.Z)(
              "ul",
              {},
              void 0,
              [
                {
                  title: "All categories",
                  href: (0, d.HQ)("store:categories_list"),
                  icon: "skfb-icon skfb-icon-model",
                },
                {
                  title: "Best selling",
                  href: (0, d.HQ)(
                    "store:search",
                    {},
                    { sort_by: "-orderCount" }
                  ),
                  SEOTitle: "Best selling 3D models",
                  icon: "fa-regular fa-award fa-fw",
                },
                {
                  title: "Animated",
                  href: (0, d.HQ)("store:search", {}, { animated: !0 }),
                  SEOTitle: "Animated 3D models",
                  icon: "fa-regular fa-film fa-fw",
                },
                {
                  title: "PBR",
                  href: (0, d.HQ)("store:search", {}, { pbr: !0 }),
                  SEOTitle: "PBR 3D models",
                  icon: "skfb-icon skfb-icon-pbr",
                },
                {
                  title: "Low poly",
                  SEOTitle: "Low poly 3D models",
                  href: (0, d.HQ)(
                    "store:search",
                    {},
                    { min_face_count: "0", max_face_count: "10000" }
                  ),
                  icon: "skfb-icon skfb-icon-low-poly",
                },
                {
                  title: "High poly",
                  SEOTitle: "High poly 3D models",
                  href: (0, d.HQ)(
                    "store:search",
                    {},
                    { min_face_count: "100000" }
                  ),
                  icon: "skfb-icon skfb-icon-high-poly",
                },
                {
                  title: "3D Printable",
                  SEOTitle: "3D Printable 3D models",
                  href: (0, d.HQ)(
                    "store:search",
                    {},
                    { file_formats: ["stl"] }
                  ),
                  icon: "skfb-icon skfb-icon-three-d-printing",
                },
                {
                  title: "3D Scan",
                  SEOTitle: "3D Scan 3D models",
                  href: (0, d.HQ)(
                    "store:search",
                    {},
                    { q: ["scan"], sort_by: "-orderCount" }
                  ),
                  icon: "skfb-icon skfb-icon-three-d-scan",
                },
              ].map(function (e) {
                return s.createElement(g, (0, f.Z)({ key: e.title }, e));
              })
            )
          );
        }),
        M = t("hDfq"),
        E = t("LvQi"),
        I = t("vAnt"),
        B = t("T+hC"),
        R = t("Ixlc"),
        K = function (e) {
          var a = e.authUser,
            t = e.onLogout,
            r = s.useContext(S.V).isOpen,
            n = (0, R.q)();
          return (0, i.Z)(
            h,
            {
              header: (0, i.Z)(
                "div",
                { className: "responsive-navigation__username" },
                void 0,
                (0, i.Z)(E.Z, { user: a, withAvatar: !0, noLink: !0 })
              ),
            },
            void 0,
            (0, i.Z)(
              "ul",
              { className: "section" },
              void 0,
              (0, i.Z)(g, {
                title: "Profile",
                href: (0, d.HQ)("users:profile_summary", {
                  username: a.username,
                }),
              }),
              (0, i.Z)(g, { title: "Upload", onClick: n }),
              (0, i.Z)(g, {
                title: "Newsfeed",
                href: (0, d.HQ)("feeds:following"),
              }),
              (0, i.Z)(g, { title: "Models", href: a.modelsUrl }),
              (0, i.Z)(g, { title: "Collections", href: a.collectionsUrl }),
              (0, i.Z)(B.Z, {
                authUser: a,
                className: "responsive-navigation__link",
                isDisplayed: r,
              }),
              (0, i.Z)(g, { title: "Likes", href: a.likesUrl }),
              (0, i.Z)(g, {
                title: "Purchases",
                href: (0, d.HQ)("users:profile_purchases", {
                  username: a.username,
                }),
              }),
              (0, i.Z)(g, {
                title: "Sales",
                href: (0, d.HQ)("users:profile_sales", {
                  username: a.username,
                }),
              }),
              (0, M.NM)(a)
                ? (0, i.Z)(
                    "li",
                    { className: "responsive-navigation__link" },
                    void 0,
                    (0, i.Z)(
                      "a",
                      {
                        id: "hover-menu__upgrade-account--responsive",
                        className: "navigation-link --show",
                        href: (0, d.HQ)("pages:plans"),
                      },
                      void 0,
                      "Upgrade"
                    )
                  )
                : null,
              (0, i.Z)(g, {
                title: "Settings",
                href: (0, d.HQ)("users:settings_profile"),
              }),
              (0, i.Z)(
                "li",
                {},
                void 0,
                (0, i.Z)(I.Z, {
                  className: "responsive-navigation__auth",
                  type: "primary-inverted-border",
                  href: (0, d.HQ)("users:signout"),
                  text: "Logout",
                  onClick: t,
                })
              )
            )
          );
        };
      function q(e, a) {
        var t =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!t) {
          if (
            Array.isArray(e) ||
            (t = (function (e, a) {
              if (!e) return;
              if ("string" == typeof e) return P(e, a);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === t && e.constructor && (t = e.constructor.name);
              if ("Map" === t || "Set" === t) return Array.from(e);
              if (
                "Arguments" === t ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
              )
                return P(e, a);
            })(e)) ||
            (a && e && "number" == typeof e.length)
          ) {
            t && (e = t);
            var i = 0,
              r = function () {};
            return {
              s: r,
              n: function () {
                return i >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[i++] };
              },
              e: function (e) {
                throw e;
              },
              f: r,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var n,
          o = !0,
          s = !1;
        return {
          s: function () {
            t = t.call(e);
          },
          n: function () {
            var e = t.next();
            return (o = e.done), e;
          },
          e: function (e) {
            (s = !0), (n = e);
          },
          f: function () {
            try {
              o || null == t.return || t.return();
            } finally {
              if (s) throw n;
            }
          },
        };
      }
      function P(e, a) {
        (null == a || a > e.length) && (a = e.length);
        for (var t = 0, i = new Array(a); t < a; t++) i[t] = e[t];
        return i;
      }
      function z(e) {
        document.querySelector("html").classList.toggle("noscroll", e);
      }
      var T = s.memo(function () {
        var e = (0, c.v9)(function (e) {
            return l.wl.authUser.user(e);
          }),
          a = (0, c.I0)(),
          t = s.useRef(null),
          n = s.useContext(S.V),
          f = n.isOpen,
          Z = n.setIsOpen,
          p = (0, m.Z)(
            s.useCallback(
              (function () {
                var e = (0, r.Z)(
                  o().mark(function e(t) {
                    return o().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              t.preventDefault(),
                              (e.next = 3),
                              a(l.Nw.authUser.logout())
                            );
                          case 3:
                            return e.abrupt("return", e.sent);
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (a) {
                  return e.apply(this, arguments);
                };
              })(),
              [a]
            )
          );
        return (
          s.useEffect(
            function () {
              var e,
                a = q(
                  document.querySelectorAll(
                    ".content, .responsive-navigation-slidable"
                  )
                );
              try {
                for (a.s(); !(e = a.n()).done; ) {
                  e.value.classList.toggle("slided", f);
                }
              } catch (e) {
                a.e(e);
              } finally {
                a.f();
              }
              z(f);
            },
            [f]
          ),
          (0, v.Z)([t, document.querySelector(".c-page-header")], function () {
            f && Z(!1);
          }),
          (0, i.Z)(
            s.Fragment,
            {},
            void 0,
            s.createElement(
              "nav",
              {
                ref: t,
                className: (0, u.AK)("responsive-navigation", { slided: f }),
              },
              (0, i.Z)(
                "ul",
                { className: "inner" },
                void 0,
                (0, i.Z)(
                  "li",
                  {
                    className:
                      "section navigation responsive-navigation__section --primary",
                  },
                  void 0,
                  (0, i.Z)(
                    "ul",
                    {},
                    void 0,
                    e.isAnonymous
                      ? (0, i.Z)(
                          "li",
                          {
                            className:
                              "responsive-navigation__connection-actions",
                          },
                          void 0,
                          (0, i.Z)(
                            "a",
                            {
                              href: (0, d.HQ)("users:signin"),
                              className:
                                "button btn-medium btn-primary-inverted-border responsive-navigation__auth",
                            },
                            void 0,
                            "Login"
                          ),
                          (0, i.Z)(
                            "a",
                            {
                              href: (0, d.HQ)("users:signup"),
                              className:
                                "button btn-medium btn-important responsive-navigation__signup",
                            },
                            void 0,
                            "Sign up"
                          )
                        )
                      : (0, i.Z)(
                          "li",
                          {},
                          void 0,
                          (0, i.Z)(K, { authUser: e, onLogout: p })
                        )
                  )
                ),
                e.isAnonymous
                  ? k ||
                      (k = (0, i.Z)(
                        "li",
                        {
                          className:
                            "section navigation responsive-navigation__section",
                        },
                        void 0,
                        (0, i.Z)(
                          "a",
                          { className: "title", href: "/" },
                          void 0,
                          "Home"
                        )
                      ))
                  : null,
                C || (C = (0, i.Z)("li", {}, void 0, (0, i.Z)(A, {}))),
                x || (x = (0, i.Z)("li", {}, void 0, (0, i.Z)(U, {}))),
                H || (H = (0, i.Z)("li", {}, void 0, (0, i.Z)(Q, {})))
              )
            ),
            (0, i.Z)("div", {
              className: (0, u.AK)("responsive-navigation-bind-out", {
                slided: f,
              }),
            })
          )
        );
      });
    },
    pGTv: (e, a, t) => {
      t.d(a, { Z: () => Z });
      var i,
        r = t("sQwH"),
        n = t("sGMM"),
        o = t("3Z9q"),
        s = t("VDcQ"),
        c = t("+zma"),
        l = t("X40V"),
        u = t("Foai"),
        d = t("RA37"),
        v = t("KiA0"),
        m = t("JT1T"),
        f = t("8Qi7");
      const Z = function (e) {
        var a = e.className,
          t = o.useRef(null),
          Z = o.useState(!1),
          p = (0, n.Z)(Z, 2),
          h = p[0],
          g = p[1],
          _ = o.useContext(d.w).name,
          N = (0, s.v9)(c.wl.authUser.canAccessFeature("ff_theme")),
          b = u.np.map(function (e) {
            return { title: e.title, value: e.name };
          });
        (0, v.Z)(t, function () {
          g(!1);
        });
        var y = (0, o.useCallback)(function (e) {
            e.preventDefault(),
              g(function (e) {
                return !e;
              });
          }, []),
          w = (0, o.useCallback)(function (e) {
            (0, u.Dc)(e), g(!1);
          }, []);
        return N
          ? o.createElement(
              "div",
              {
                ref: t,
                className: (0, l.AK)(a, "c-page-header__action", f.Z.view),
              },
              (0, r.Z)(
                "a",
                {
                  "aria-label": "Switch Theme",
                  className: (0, l.AK)(
                    "c-page-header__action__icon-container",
                    f.Z.icon
                  ),
                  onClick: y,
                  href: "#",
                },
                void 0,
                i ||
                  (i = (0, r.Z)("i", {
                    className:
                      "fa-regular fa-universal-access c-page-header__action__icon",
                  }))
              ),
              (0, r.Z)(
                "div",
                { className: "c-page-header__action__popin-container" },
                void 0,
                h
                  ? (0, r.Z)(
                      "div",
                      {
                        className: (0, l.AK)(
                          f.Z.menu,
                          "c-page-header__action__popin"
                        ),
                        "tab-index": "-1",
                      },
                      void 0,
                      (0, r.Z)(
                        "header",
                        { className: (0, l.AK)(f.Z.title) },
                        void 0,
                        "Change theme"
                      ),
                      (0, r.Z)(m.Z, {
                        className: (0, l.AK)(f.Z.list),
                        name: "theme",
                        value: _,
                        options: b,
                        onChange: w,
                      })
                    )
                  : null
              )
            )
          : null;
      };
    },
    gjnG: (e, a, t) => {
      t.d(a, { Z: () => A });
      var i,
        r,
        n,
        o,
        s,
        c,
        l,
        u,
        d,
        v = t("sGMM"),
        m = t("sQwH"),
        f = t("mSEu"),
        Z = t("3Z9q"),
        p = t("VDcQ"),
        h = t("+zma"),
        g = t("iu9k"),
        _ = t("X40V"),
        N = t("TUor"),
        b = t("pLUK"),
        y = t("l9Gv"),
        w = t("I0q+"),
        k = t("LvQi"),
        C = t("TlsM"),
        x = t("T+hC"),
        H = t("k1tG");
      function Q() {
        return (
          i ||
          (i = (0, m.Z)("hr", {
            "aria-hidden": "true",
            className: "separator",
          }))
        );
      }
      const A = function (e) {
        var a = e.authUser,
          t = e.className,
          i = (0, p.I0)(),
          A = (0, b.Z)(function (e) {
            return e.preventDefault(), i(h.Nw.authUser.logout());
          }),
          S = Z.useContext(H.Z),
          D = Z.useState(!1),
          U = (0, v.Z)(D, 2),
          M = U[0],
          E = U[1],
          I = (0, p.v9)(h.wl.authUser.canAccessFeature("ff_material_page"));
        return (0, m.Z)(
          "div",
          {
            "data-selenium": "header-user-menu",
            className: (0, _.AK)("c-user-menu", t, {
              "--transparent": "transparent" === S,
            }),
            onMouseEnter: function () {
              return E(!0);
            },
          },
          void 0,
          (0, m.Z)(
            "a",
            {
              className: "c-user-menu__info show-hover-menu",
              href: a.profileUrl,
            },
            void 0,
            (0, m.Z)(
              "div",
              {
                className: "c-user-menu__avatar",
                "data-selenium": "header-avatar",
              },
              void 0,
              (0, m.Z)(w.Z, {
                alt: "Avatar of ".concat(a.username),
                deferred: !1,
                avatars: a.avatars,
              })
            )
          ),
          (0, m.Z)(
            "ul",
            { className: "hover-menu" },
            void 0,
            (0, m.Z)(
              "li",
              {},
              void 0,
              (0, m.Z)(k.Z, {
                noBadgeLink: !0,
                user: a,
                className: "c-user-menu__name hover-menu__prevent-style",
              }),
              (0, m.Z)(y.Z, {}, void 0, function () {
                return "limited" === a.viewOnlyLimit.type
                  ? (0, m.Z)(
                      "div",
                      {
                        "data-selenium": "remaining-credits",
                        "data-value": a.viewOnlyLimit.remaining,
                        className:
                          "hover-menu__prevent-style c-user-menu__view-only-limit",
                      },
                      void 0,
                      (0, m.Z)(
                        "strong",
                        {},
                        void 0,
                        a.viewOnlyLimit.remaining,
                        " ",
                        (0, m.Z)(C.gb, {
                          text: "upload credit".concat(
                            1 === a.viewOnlyLimit.remaining ? "" : "s"
                          ),
                        }),
                        " ",
                        "left"
                      ),
                      r || (r = (0, m.Z)("br", {})),
                      "until the reset on",
                      " ",
                      (0, N.p6)(a.viewOnlyLimit.renews_at, "MMM Do"),
                      ".",
                      n || (n = (0, m.Z)("br", {})),
                      o ||
                        (o = (0, m.Z)(
                          C.mX,
                          { className: "skfb-link", urlRef: "user_menu" },
                          void 0,
                          "Upgrade to increase your limit"
                        ))
                    )
                  : null;
              })
            ),
            s || (s = (0, m.Z)(Q, {})),
            (0, m.Z)(
              "li",
              {},
              void 0,
              (0, m.Z)(
                "a",
                { href: (0, g.HQ)("feeds:following") },
                void 0,
                "Newsfeed"
              )
            ),
            (0, m.Z)(
              "li",
              {},
              void 0,
              (0, m.Z)("a", { href: a.modelsUrl }, void 0, "Models")
            ),
            I &&
              (0, m.Z)(
                "li",
                {},
                void 0,
                (0, m.Z)(
                  "a",
                  {
                    href: (0, g.HQ)("users:profile_materials", {
                      username: a.username,
                    }),
                  },
                  void 0,
                  "Materials"
                )
              ),
            (0, m.Z)(
              "li",
              {},
              void 0,
              (0, m.Z)("a", { href: a.collectionsUrl }, void 0, "Collections")
            ),
            (0, m.Z)(
              "li",
              {},
              void 0,
              (0, m.Z)("a", { href: a.likesUrl }, void 0, "Likes")
            ),
            c || (c = (0, m.Z)(Q, {})),
            (0, m.Z)(x.Z, {
              authUser: a,
              className: "c-user-menu__organizations",
              isDisplayed: M,
            }),
            (0, m.Z)(
              "li",
              {},
              void 0,
              (0, m.Z)(
                "a",
                {
                  href: (0, g.HQ)("users:profile_purchases", {
                    username: a.username,
                  }),
                },
                void 0,
                "Purchases"
              )
            ),
            (0, m.Z)(
              "li",
              {},
              void 0,
              (0, m.Z)(
                "a",
                {
                  href: (0, g.HQ)("users:profile_sales", {
                    username: a.username,
                  }),
                },
                void 0,
                "Sales"
              )
            ),
            l || (l = (0, m.Z)(Q, {})),
            (0, m.Z)(
              "li",
              {},
              void 0,
              (0, m.Z)(
                "a",
                { href: (0, g.HQ)("users:settings_profile") },
                void 0,
                "Settings"
              )
            ),
            (0, m.Z)(
              "li",
              {},
              void 0,
              (0, m.Z)(
                "a",
                {
                  href: "".concat(f.Z.hosts.faq, "/s/?ProductOrigin=Sketchfab"),
                  target: "_blank",
                  rel: "noopener noreferrer",
                },
                void 0,
                "Help Center"
              )
            ),
            u || (u = (0, m.Z)(Q, {})),
            (0, m.Z)(
              "li",
              {},
              void 0,
              (0, m.Z)(
                "form",
                {
                  action: (0, g.HQ)("users:signout"),
                  method: "post",
                  onClick: A,
                },
                void 0,
                d ||
                  (d = (0, m.Z)(
                    "button",
                    {
                      type: "submit",
                      className: "button btn-textified",
                      "data-selenium": "logout",
                    },
                    void 0,
                    "Logout"
                  ))
              )
            )
          )
        );
      };
    },
    "T+hC": (e, a, t) => {
      t.d(a, { Z: () => p });
      var i,
        r = t("sQwH"),
        n = t("sGMM"),
        o = t("3Z9q"),
        s = t("+zma"),
        c = t("VDcQ"),
        l = t("X40V"),
        u = t("N+9a"),
        d = t("I0q+"),
        v = t("hk5G"),
        m = t("ajs0"),
        f = t("/NBN"),
        Z = t("Oyie");
      const p = function (e) {
        var a = e.authUser,
          t = e.className,
          p = e.initiallyDisplayed,
          h = void 0 === p ? 4 : p,
          g = e.isDisplayed,
          _ = o.useRef(null),
          N = o.useState(h),
          b = (0, n.Z)(N, 2),
          y = b[0],
          w = b[1],
          k = (0, m.Z)(
            function (e, a) {
              return e.Api.getCurrentUserMemberships(a);
            },
            [a.uid]
          );
        o.useEffect(
          function () {
            g && k.onLoadFirst();
          },
          [a.uid, g]
        ),
          (0, v.Z)(
            _,
            function () {
              return k.hasNextPage ? k.onLoadNext() : Z.resolve();
            },
            [k],
            _.current
          ),
          (0, f.Z)(_);
        var C = k.list,
          x = (0, c.v9)(s.wl.authUser.canAccessFeature("ff_org_dam_nav"));
        return C && C.length > 0
          ? (0, r.Z)(
              "div",
              { className: (0, l.AK)("c-user-orgs", t) },
              void 0,
              C.length > 0 &&
                (i ||
                  (i = (0, r.Z)(
                    "div",
                    { className: "c-user-orgs__title" },
                    void 0,
                    "Switch to organization"
                  ))),
              o.createElement(
                "div",
                { className: "c-user-orgs__rows", ref: _ },
                C.slice(0, y).map(function (e) {
                  var a = e.org;
                  return (0,
                  r.Z)("li", { className: "c-user-orgs-item" }, a.uid, (0, r.Z)(u.Z, { to: x ? "orgs:home_v2" : "orgs:home", params: { username: a.username } }, void 0, (0, r.Z)("div", { className: "c-user-orgs__row" }, void 0, (0, r.Z)(d.Z, { className: "c-user-orgs__row-avatar", alt: "Avatar of ".concat(a.username), avatars: a.avatars, size: 14 }), a.displayName)));
                }),
                (0, r.Z)(
                  "li",
                  {
                    className: (0, l.AK)(
                      "c-user-orgs__row",
                      "c-user-orgs-item",
                      { "--hidden": C.length <= y }
                    ),
                    onClick: function () {
                      return w(1 / 0);
                    },
                  },
                  void 0,
                  "... See all organizations"
                )
              )
            )
          : null;
      };
    },
    "0gsR": (e, a, t) => {
      t.d(a, { ZP: () => na });
      var i,
        r = t("Wch8"),
        n = t("D4hk"),
        o = t("3MRe"),
        s = t("sQwH"),
        c = t("y+4b"),
        l = t.n(c),
        u = t("3Z9q"),
        d = t("X40V"),
        v = t("iu9k"),
        m = t("sGMM"),
        f = t("VDcQ"),
        Z = t("R2Pi"),
        p = t("+zma"),
        h = t("yTkX"),
        g = t("LLYa"),
        _ = t("p5Lb"),
        N = t("KiA0"),
        b = t("/NBN"),
        y = t("vAnt"),
        w = t("owJ0"),
        k = t("/KXD"),
        C = t("RL7f"),
        x = t("+Ouw"),
        H = t("wDWr");
      const Q = function (e) {
        return u.createElement(
          "svg",
          (0, n.Z)(
            { viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg" },
            e
          ),
          i ||
            (i = (0, s.Z)(
              "g",
              { fill: "none", fillRule: "evenodd" },
              void 0,
              (0, s.Z)("path", {
                d: "M16 5.528l-2.556-1.29-.5-2.71-2.866.385L7.998 0 5.92 1.913l-2.865-.385-.499 2.71L0 5.528 1.27 8 0 10.473l2.556 1.29.5 2.71 2.864-.386L7.999 16l2.079-1.913 2.865.385.501-2.708L16 10.473 14.728 8z",
              }),
              (0, s.Z)("path", {
                d: "M6.707 6.707a1 1 0 10-1.414-1.414 1 1 0 001.414 1.414zm4 2.586a1 1 0 10-1.414 1.414 1 1 0 001.414-1.414zm-.03-3.616l-.354-.354a.5.5 0 00-.707 0L5.323 9.616a.5.5 0 000 .707l.354.354a.5.5 0 00.707 0l4.293-4.293a.5.5 0 000-.707z",
                fillRule: "nonzero",
              })
            ))
        );
      };
      var A,
        S,
        D,
        U,
        M,
        E = (0, f.$j)(
          function (e) {
            return { cartModels: p.wl.cart.models(e) };
          },
          { removeModel: p.Nw.cart.removeModel, getCart: p.Nw.cart.get }
        );
      const I = u.memo(
        E(function (e) {
          var a = e.className,
            t = e.cartModels,
            i = e.removeModel,
            r = e.getCart,
            n = u.useRef(null),
            o = u.useRef(null),
            c = u.useState(!1),
            l = (0, m.Z)(c, 2),
            E = l[0],
            I = l[1],
            B = (0, g.m_)(t),
            R = (0, f.v9)(p.wl.authUser.user),
            K = !t.length && (!R.isBuyer || R.isAnonymous);
          (0, N.Z)(n, function () {
            I(!1);
          }),
            (0, b.Z)(o),
            u.useEffect(function () {
              r();
            }, []);
          return u.createElement(
            "div",
            {
              ref: n,
              className: (0, d.AK)(
                "c-cart-popin",
                "c-page-header__action",
                "--store",
                a
              ),
              onClick: function (e) {
                Z.default.any ||
                  (e.preventDefault(),
                  I(function (e) {
                    return !e;
                  }));
              },
            },
            (0, s.Z)(
              "a",
              {
                "aria-label": "Your shopping cart",
                className: "c-page-header__action__icon-container",
                href: (0, v.HQ)("store:cart"),
              },
              void 0,
              A ||
                (A = (0, s.Z)("i", {
                  className:
                    "c-page-header__action__icon fa-regular fa-cart-shopping",
                })),
              K
                ? S ||
                    (S = (0, s.Z)(Q, {
                      className: "c-page-header__action__firstPurchaseIcon",
                    }))
                : t.length
                ? (0, s.Z)(
                    "div",
                    {
                      className: (0, d.AK)(
                        "c-page-header__action__count",
                        "--store",
                        { "--hidden": !t.length }
                      ),
                    },
                    void 0,
                    t.length
                  )
                : null
            ),
            (0, s.Z)(
              "div",
              {
                className: "c-page-header__action__popin-container",
                onClick: h.UW,
              },
              void 0,
              E
                ? (0, s.Z)(
                    "div",
                    {
                      className:
                        "c-page-header__action__popin c-cart-popin__popin",
                    },
                    void 0,
                    t.length
                      ? (0, s.Z)(w.Z, {
                          title: "Shopping Cart",
                          count: t.length,
                        })
                      : null,
                    u.createElement(
                      "div",
                      {
                        ref: o,
                        className:
                          "c-page-header__action__list c-cart-popin__list",
                      },
                      t.length
                        ? t.map(function (e) {
                            return (0, s.Z)(
                              k.Z,
                              {
                                model: e,
                                onRemove: function () {
                                  return (function (e) {
                                    1 === t.length && (0, x.ij)(), i(e);
                                  })(e);
                                },
                              },
                              e.uid
                            );
                          })
                        : D || (D = (0, s.Z)(C.Z, {}))
                    ),
                    t.length
                      ? (0, s.Z)(
                          "div",
                          { className: "c-cart-popin__footer" },
                          void 0,
                          (0, s.Z)(H.Z, { totalInCents: B }),
                          (0, s.Z)(
                            "div",
                            {
                              className:
                                "c-cart-popin__footer__row c-cart-popin__footer__total",
                            },
                            void 0,
                            U ||
                              (U = (0, s.Z)(
                                "p",
                                {
                                  className:
                                    "c-cart-popin__footer__total-title",
                                },
                                void 0,
                                "total"
                              )),
                            (0, s.Z)(
                              "p",
                              {
                                className: "c-cart-popin__footer__total-price",
                              },
                              void 0,
                              (0, _.T4)(B)
                            )
                          ),
                          (0, s.Z)(
                            "a",
                            {
                              href: (0, v.HQ)("store:checkout"),
                              className: "c-cart-popin__footer__row",
                            },
                            void 0,
                            M ||
                              (M = (0, s.Z)(
                                "div",
                                { className: "c-cart-popin__footer__button" },
                                void 0,
                                (0, s.Z)(y.Z, {
                                  text: "go to checkout",
                                  type: "store",
                                  size: "large",
                                })
                              ))
                          )
                        )
                      : null
                  )
                : null
            )
          );
        })
      );
      var B,
        R,
        K,
        q = t("7isf"),
        P = t("PjtK"),
        z = t("pfBE"),
        T = t("DbQt"),
        L = t("jtsd"),
        j = t("MWCS"),
        O = t("TkBM"),
        V = t("flMq"),
        F = t("9VL4"),
        X = t("7bTr"),
        G = t("ZHun"),
        W = t("xlyI"),
        J = t("ajs0"),
        Y = t("ZqC1"),
        $ = t("Vtax");
      const ee = (0, f.$j)(function (e) {
        return {
          canAccessNewsfeed: p.wl.authUser.canAccessFeature(
            "ff_newsfeed_v2",
            e
          ),
        };
      })(function (e) {
        var a = e.authUser,
          t = e.canAccessNewsfeed,
          i = e.className,
          r = u.useRef(null),
          n = u.useRef(null),
          o = u.useState(!1),
          c = (0, m.Z)(o, 2),
          l = c[0],
          f = c[1];
        (0, N.Z)(r, function () {
          f(!1);
        }),
          (0, b.Z)(n);
        var p = (0, Y.Z)(),
          g = (0, J.Z)(function (e, a) {
            return e.Api.getNewsfeed(
              { cursor: a, count: 10, feed: "notifications" },
              { allowPrefetching: !0 }
            );
          }, []);
        u.useEffect(
          function () {
            l && g.onLoadFirst();
          },
          [l]
        ),
          u.useEffect(
            function () {
              z.Z.getSingleton().hasNewActivities() && l && z.Z.seeActivities();
            },
            [g.list, l]
          );
        var _ = [].concat(
          (0, q.Z)(
            g.list.map(function (e) {
              return "comment" === e.verb
                ? e.mentions.includes(a.uid)
                  ? (0, s.Z)(V.Z, { activity: e }, e.uid)
                  : (0, s.Z)(L.Z, { activity: e }, e.uid)
                : "follow" === e.verb
                ? (0, s.Z)(j.Z, { activity: e, authUser: a }, e.uid)
                : "subscribe" === e.verb
                ? (0, s.Z)(G.Z, { activity: e }, e.uid)
                : "like" === e.verb
                ? (0, s.Z)(O.Z, { activity: e }, e.uid)
                : "collect" === e.verb
                ? (0, s.Z)(T.Z, { activity: e }, e.uid)
                : "staffpick" === e.verb
                ? (0, s.Z)(X.Z, { authUser: a, activity: e }, e.uid)
                : "review" === e.verb
                ? (0, s.Z)(F.Z, { activity: e }, e.uid)
                : null;
            })
          ),
          (0, q.Z)(
            (0, P.Z)(0, g.isLoading ? 5 : 0).map(function (e) {
              return (0, s.Z)(W.Z, {}, e);
            })
          )
        );
        return t
          ? u.createElement(
              "div",
              { ref: r, className: (0, d.AK)("c-page-header__action", i) },
              (0, s.Z)(
                "a",
                {
                  className: "c-page-header__action__icon-container",
                  href: (0, v.HQ)("feeds:activity"),
                  "aria-label": "Open Notifications Popin",
                  onClick: function (e) {
                    Z.default.any
                      ? z.Z.getSingleton().hasNewActivities() &&
                        z.Z.seeActivities()
                      : (e.preventDefault(),
                        f(function (e) {
                          return !e;
                        }));
                  },
                },
                void 0,
                B ||
                  (B = (0, s.Z)("i", {
                    className: "c-page-header__action__icon fa-regular fa-bell",
                  })),
                (0, s.Z)(
                  "div",
                  {
                    className: (0, d.AK)("c-page-header__action__count", {
                      "--hidden": !p,
                    }),
                  },
                  void 0,
                  p > 99 ? "99+" : p
                )
              ),
              (0, s.Z)(
                "div",
                { className: "c-page-header__action__popin-container" },
                void 0,
                l
                  ? (0, s.Z)(
                      "div",
                      {
                        className: "c-page-header__action__popin --open",
                        onClick: h.UW,
                      },
                      void 0,
                      u.createElement(
                        "div",
                        { ref: n, className: "c-page-header__action__list" },
                        _.length ? _ : R || (R = (0, s.Z)($.Z, {}))
                      ),
                      K ||
                        (K = (0, s.Z)(
                          "div",
                          {
                            className: "c-page-header__action__popin__see-all",
                          },
                          void 0,
                          (0, s.Z)(
                            "a",
                            { href: "/feed/activity?feed=activities" },
                            void 0,
                            "See all notifications"
                          )
                        ))
                    )
                  : null
              )
            )
          : null;
      });
      var ae,
        te = t("pGTv"),
        ie = t("8Ux5"),
        re = t("pCyY"),
        ne = t("AFjX"),
        oe = t("ZrBE"),
        se = t("R276");
      function ce(e) {
        var a = e.highlights;
        return (0, s.Z)(
          "div",
          { className: oe.Z.highlights },
          void 0,
          a.map(function (e) {
            var a = e.title,
              t = e.backgroundimageUrl,
              i = e.icon;
            return (0,
            s.Z)("a", { className: oe.Z.highlightContainer, href: (0, v.HQ)(e.urlParams.name, e.urlParams.params, e.urlParams.queryParams), style: { background: "linear-gradient(rgba(0, 0, 156, 0.3), rgba(20, 0, 156, 0.3)), url(".concat(t, ") no-repeat center") } }, "".concat(a, " ").concat(v.HQ), (0, s.Z)("i", { className: (0, d.AK)("icon fa-regular", i, oe.Z.icon) }), a);
          })
        );
      }
      var le,
        ue = [
          {
            title: "Popular",
            urlParams: { name: "materials:explore" },
            backgroundimageUrl:
              "https://media.sketchfab.com/models/1ab9bf841df04c07b1819be596327629/thumbnails/f0654d3403c54b9e91289eddaa33b038/dafd8b7cf53847d6bb76731c96982c55.jpeg",
            icon: "fa-star",
          },
          {
            title: "Staff Picks",
            urlParams: { name: "materials:explore" },
            backgroundimageUrl:
              "https://media.sketchfab.com/models/3add46c79d624f34b144b3391f6c54da/thumbnails/8a9d4ede8b014ef88bdc6f42833d32b2/35840b7ce47d4f57a749aec1490aed67.jpeg",
            icon: "skfb-icon-staffpicks",
          },
          {
            title: "Downloadable",
            urlParams: { name: "materials:explore" },
            backgroundimageUrl:
              "https://media.sketchfab.com/models/690e7facc3a74a23806428c1028181b6/thumbnails/ed7ec466660d4a5a8ee59196ae1c687d/7dc8893f69d548418af44d2e5bcc0b31.jpeg",
            icon: "fa-arrow-down",
          },
          {
            title: "Collections",
            urlParams: { name: "materials:explore" },
            backgroundimageUrl:
              "https://media.sketchfab.com/models/c79d4871844e424181d3256234db5adb/thumbnails/b28dd5c727d341788e7ee80d88522f22/d8c430cb12084437951ef11eb1a242e5.jpeg",
            icon: "fa-box-archive",
          },
        ];
      function de(e) {
        var a = e.categories;
        return (0, s.Z)(
          "div",
          { className: oe.Z.container },
          void 0,
          ae || (ae = (0, s.Z)(ce, { highlights: ue })),
          (0, s.Z)(
            "div",
            { className: oe.Z.categoriesContainer },
            void 0,
            (0, s.Z)(
              "ul",
              { className: (0, d.AK)(oe.Z.categoriesList) },
              void 0,
              a.map(function (e) {
                return (0,
                s.Z)("li", { className: (0, d.AK)(oe.Z.category) }, e.slug, (0, s.Z)("a", { title: "".concat(e.name, " materials"), href: "" }, void 0, (0, s.Z)("i", { className: (0, d.AK)(oe.Z.icon, "icon", "skfb-icon", "skfb-icon-model") }), (0, s.Z)("span", {}, void 0, e.name)));
              })
            )
          )
        );
      }
      var ve = [
        {
          title: "Popular",
          urlParams: { name: "models:popular" },
          backgroundimageUrl:
            "https://media.sketchfab.com/models/c79d4871844e424181d3256234db5adb/thumbnails/b28dd5c727d341788e7ee80d88522f22/d8c430cb12084437951ef11eb1a242e5.jpeg",
          icon: "fa-star",
        },
        {
          title: "Staff Picks",
          urlParams: { name: "models:staffpicks" },
          backgroundimageUrl:
            "https://media.sketchfab.com/models/690e7facc3a74a23806428c1028181b6/thumbnails/ed7ec466660d4a5a8ee59196ae1c687d/7dc8893f69d548418af44d2e5bcc0b31.jpeg",
          icon: "skfb-icon-staffpicks",
        },
        {
          title: "Downloadable",
          urlParams: {
            name: "models:explore",
            queryParams: {
              features: "downloadable",
              date: "week",
              sort_by: "-likeCount",
            },
          },
          backgroundimageUrl:
            "https://media.sketchfab.com/models/3add46c79d624f34b144b3391f6c54da/thumbnails/8a9d4ede8b014ef88bdc6f42833d32b2/35840b7ce47d4f57a749aec1490aed67.jpeg",
          icon: "fa-arrow-down",
        },
        {
          title: "Collections",
          urlParams: { name: "collections:popular" },
          backgroundimageUrl:
            "https://media.sketchfab.com/models/1ab9bf841df04c07b1819be596327629/thumbnails/f0654d3403c54b9e91289eddaa33b038/dafd8b7cf53847d6bb76731c96982c55.jpeg",
          icon: "fa-box-archive",
        },
      ];
      function me(e) {
        var a = e.categories;
        return (0, s.Z)(
          "div",
          { className: oe.Z.container },
          void 0,
          le || (le = (0, s.Z)(ce, { highlights: ve })),
          (0, s.Z)(
            "div",
            { className: oe.Z.categoriesContainer },
            void 0,
            (0, s.Z)(
              "ul",
              { className: (0, d.AK)(oe.Z.categoriesList) },
              void 0,
              a.map(function (e) {
                return (0,
                s.Z)("li", { className: (0, d.AK)(oe.Z.category) }, e.slug, (0, s.Z)("a", { title: "".concat(e.name, " 3D models"), href: (0, v.HQ)("models:explore_by_category", { category: e.slug }, { date: "week", sort_by: "-likeCount" }) }, void 0, (0, s.Z)("i", { className: (0, d.AK)(oe.Z.icon, "icon", "skfb-icon", "skfb-icon-category-".concat(e.slug)) }), (0, s.Z)("span", {}, void 0, e.name)));
              })
            )
          )
        );
      }
      function fe(e) {
        var a,
          t,
          i = e.categories,
          r = u.useState(0),
          n = (0, m.Z)(r, 2),
          o = n[0],
          c = n[1],
          l = (0, se.Z)(
            function (e) {
              return e.Api.getMaterialCategories();
            },
            { results: [] },
            []
          ),
          d = (0, m.Z)(l, 1)[0].results;
        return (0, s.Z)(
          "div",
          { className: oe.Z.categoriesNavigation },
          void 0,
          (0, s.Z)(ne.Z, {
            tabs: [
              {
                title: "3D Models",
                render: function () {
                  return a || (a = (0, s.Z)(me, { categories: i }));
                },
              },
              {
                title: "Materials",
                render: function () {
                  return t || (t = (0, s.Z)(de, { categories: d }));
                },
              },
            ],
            selectedTabIndex: o,
            onSelectTab: c,
            className: oe.Z.tabs,
          })
        );
      }
      var Ze,
        pe = t("k1tG");
      function he(e) {
        var a = e.categories,
          t = e.className,
          i = u.useContext(pe.Z),
          r = u.useState(""),
          n = (0, m.Z)(r, 2),
          o = n[0],
          c = n[1],
          l = (0, f.v9)(p.wl.authUser.canAccessFeature("ff_material_page"));
        return (0, s.Z)(
          "ul",
          {
            className: (0, d.AK)("c-navigation", t, {
              "--transparent": "transparent" === i,
            }),
          },
          void 0,
          (0, s.Z)(
            "li",
            {
              className: "c-navigation__item c-page-header__col",
              onMouseEnter: function () {
                return c("explore");
              },
            },
            void 0,
            (0, s.Z)(
              "a",
              {
                href: (0, v.HQ)("models:popular"),
                className: "c-navigation__link show-hover-menu",
              },
              void 0,
              "Explore"
            ),
            (0, s.Z)(
              "div",
              {
                className: "hover-menu",
                style: { display: "explore" === o ? "" : "none" },
              },
              void 0,
              l
                ? (0, s.Z)(fe, { categories: a })
                : (0, s.Z)(re.e9, { categories: a })
            )
          ),
          (0, s.Z)(
            "li",
            {
              className: "c-navigation__item --store c-page-header__col",
              onMouseEnter: function () {
                return c("store");
              },
            },
            void 0,
            (0, s.Z)(
              "a",
              {
                href: (0, v.HQ)("store:home", {}, { ref: "header" }),
                className: "c-navigation__link show-hover-menu --store",
              },
              void 0,
              "Buy 3D models"
            ),
            (0, s.Z)(
              "div",
              {
                className: "hover-menu --store",
                style: { display: "store" === o ? "" : "none" },
              },
              void 0,
              (0, s.Z)(re.VU, { categories: a })
            )
          ),
          (0, s.Z)(
            "li",
            {
              className: "c-navigation__item c-page-header__col",
              onMouseEnter: function () {
                return c("business");
              },
            },
            void 0,
            (0, s.Z)(
              "a",
              {
                href: (0, v.HQ)("pages:enterprise", {}, { ref: "header" }),
                className: "c-navigation__link show-hover-menu",
              },
              void 0,
              "For business"
            ),
            (0, s.Z)(
              "div",
              {
                className: "hover-menu --business",
                style: { display: "business" === o ? "" : "none" },
              },
              void 0,
              Ze || (Ze = (0, s.Z)(re.pS, {}))
            )
          )
        );
      }
      const ge = u.memo(he);
      var _e,
        Ne,
        be,
        ye = t("/7yb"),
        we = {
          models: "3D models",
          users: "users",
          collections: "collections",
          materials: "materials",
        },
        ke = (0, f.$j)(
          function (e) {
            return {
              value: p.wl.search.query(e),
              isSearchOpen: p.wl.search.isOpen(e),
              type: p.wl.search.type(e),
            };
          },
          {
            onChange: p.Nw.search.updateQuery,
            onBack: p.Nw.search.back,
            onOpen: p.Nw.search.open,
          }
        ),
        Ce = ke(function (e) {
          var a = e.className,
            t = e.onOpen;
          return (0, s.Z)(
            "div",
            { className: (0, d.AK)("c-page-header__action", a) },
            void 0,
            (0, s.Z)(
              "a",
              {
                href: (0, v.HQ)("search:search"),
                className: "c-page-header__action__icon-container",
                "aria-label": "Search",
                onClick: function (e) {
                  e.preventDefault(), t();
                },
              },
              void 0,
              _e ||
                (_e = (0, s.Z)("i", {
                  className: "c-page-header__action__icon fa-regular fa-search",
                }))
            )
          );
        });
      const xe = ke(function (e) {
        var a = e.value,
          t = e.isSearchOpen,
          i = e.type,
          r = e.onBack,
          n = e.onOpen,
          o = e.onChange,
          c = u.useRef(null);
        (0, ye.Z)("/", function (e) {
          document.activeElement &&
            document.activeElement !== c.current &&
            !["input", "textarea"].includes(
              document.activeElement.tagName.toLowerCase()
            ) &&
            (e.preventDefault(), c.current && c.current.focus());
        }),
          u.useEffect(
            function () {
              t && c.current && c.current.focus();
            },
            [t]
          );
        var l = u.useContext(pe.Z);
        return (0, s.Z)(
          "form",
          {
            className: (0, d.AK)("c-search-bar", "c-page-header__col", {
              "--searching": t,
              "--transparent": "transparent" === l,
            }),
            action: ".",
            onSubmit: function (e) {
              return e.preventDefault();
            },
          },
          void 0,
          (0, s.Z)(
            "div",
            { className: "c-search-bar__box" },
            void 0,
            Ne ||
              (Ne = (0, s.Z)("i", {
                "aria-hidden": "true",
                className: "c-search-bar__icon fa-regular fa-search",
              })),
            u.createElement("input", {
              "data-selenium": "search-input",
              "aria-label": "Search",
              ref: c,
              className: "c-search-bar__input",
              type: "text",
              name: "query",
              placeholder: "Search ".concat(we[i]),
              autoCapitalize: "none",
              autoComplete: "off",
              autoCorrect: "off",
              maxLength: 128,
              value: a,
              onChange: function (e) {
                return o(e.target.value);
              },
              onFocus: function () {
                return n();
              },
              onKeyUp: function (e) {
                13 === e.keyCode &&
                  (Z.default.any && c.current && c.current.blur(),
                  e.stopPropagation());
              },
              onKeyDown: function (e) {
                27 === e.keyCode && c.current && c.current.blur();
              },
            }),
            (0, s.Z)("a", {
              "aria-label": "Clear search",
              className: (0, d.AK)("c-search-bar__clear", { "--hidden": !a }),
              onClick: function (e) {
                e.preventDefault(), o(""), c.current && c.current.focus();
              },
              href: "#",
            }),
            !t &&
              (be ||
                (be = (0, s.Z)(
                  "div",
                  { className: "c-search-bar__hotkey" },
                  void 0,
                  "/"
                )))
          ),
          (0, s.Z)(y.Z, {
            size: "medium",
            type: "tertiary",
            href: "/",
            className: (0, d.AK)("c-search-bar__cancel", { "--hidden": !t }),
            onClick: function (e) {
              e.preventDefault(), r();
            },
            text: "Cancel",
          })
        );
      });
      function He(e) {
        var a = e.className,
          t = e.redirectUrl,
          i = e.usageType,
          r = e.disabled,
          n = (0, f.I0)(),
          o = (0, f.v9)(p.wl.authUser.canAccessFeature("ff_read_only_mode"));
        return (0, s.Z)(y.Z, {
          "data-selenium": "signup",
          size: "medium",
          type: "primary",
          href: (0, v.HQ)("users:signup"),
          className: a,
          onClick: function (e) {
            e.preventDefault(),
              e.stopPropagation(),
              n(
                p.Nw.authUser.authenticate(function () {}, {
                  redirectUrl: t,
                  usageType: i,
                  initialForm: "signup",
                })
              );
          },
          text: "Sign Up",
          disabled: o || r,
        });
      }
      function Qe(e) {
        var a = e.className;
        return (0, s.Z)(y.Z, {
          size: "medium",
          type: "store",
          href: "https://fab.com/become-a-publisher",
          target: "_blank",
          className: a,
          text: "Become a seller on Fab",
        });
      }
      var Ae,
        Se,
        De = t("Ixlc"),
        Ue = t("dnK3"),
        Me = t("gjnG"),
        Ee = t("AEj9"),
        Ie = t("Yl+r"),
        Be = t("xkdo"),
        Re = t("UnUI"),
        Ke = t("kRUX"),
        qe = t("N+9a");
      const Pe = function (e) {
        var a = e.className,
          t = void 0 === a ? "" : a,
          i = (0, De.q)();
        return (0, s.Z)(
          Re.Z,
          {
            className: (0, d.AK)(Ke.Z.view, t),
            hideArrow: !0,
            menuAlign: "right",
            labelTitle:
              Ae ||
              (Ae = (0, s.Z)("i", { className: "fa-regular fa-angle-down" })),
          },
          void 0,
          function () {
            return (0, s.Z)(
              "ul",
              { className: Ke.Z.dropdownList },
              void 0,
              (0, s.Z)(
                "li",
                { className: Ke.Z.option, onClick: i },
                void 0,
                "Upload 3D Model"
              ),
              (0, s.Z)(
                "li",
                { className: Ke.Z.option },
                void 0,
                Se ||
                  (Se = (0, s.Z)(
                    qe.Z,
                    { to: "materials:create" },
                    void 0,
                    "Create Material"
                  ))
              )
            );
          }
        );
      };
      var ze,
        Te,
        Le,
        je,
        Oe,
        Ve,
        Fe,
        Xe,
        Ge,
        We = t("SeoW"),
        Je = function (e) {
          var a = e.className;
          return (0, s.Z)(
            "div",
            { className: (0, d.AK)(a, We.Z.uploadDropdown) },
            void 0,
            (0, s.Z)(De.Z, {
              href: (0, v.HQ)("users:signup", {}, { next: "/feed#upload" }),
            }),
            ze || (ze = (0, s.Z)(Pe, {}))
          );
        },
        Ye = function (e) {
          var a = e.className;
          return (0, s.Z)(
            "div",
            { className: (0, d.AK)(a, We.Z.uploadDropdown) },
            void 0,
            (0, s.Z)(Ue.Z, {
              href: (0, v.HQ)("users:signup", {}, { next: "/feed#upload" }),
              className: We.Z.uploadIcon,
            }),
            (0, s.Z)(Pe, { className: We.Z.dropdown })
          );
        },
        $e = t("Oyie"),
        ea = ["isStore"];
      function aa(e) {
        var a = e.isTransparent,
          t = void 0 !== a && a,
          i = e.isStandalone,
          r = void 0 !== i && i,
          n = e.isHidden,
          o = void 0 !== n && n,
          c = e.categories,
          l = (0, f.v9)(p.wl.authUser.user),
          m = (0, f.v9)(p.wl.search.isOpen),
          Z = (0, f.v9)(p.wl.authUser.canAccessFeature("ff_material_page"));
        return (0, s.Z)(
          Ee.Z,
          { isStandalone: r, isTransparent: t, isHidden: o },
          void 0,
          Te ||
            (Te = (0, s.Z)(Ie.Kw, { className: "c-page-header__menu-icon" })),
          Le || (Le = (0, s.Z)(ie.Z, { className: "c-page-header__logo" })),
          m ? null : (0, s.Z)(ge, { categories: c }),
          je || (je = (0, s.Z)(xe, {})),
          (0, s.Z)(
            "div",
            { className: "c-page-header__flex-container --right" },
            void 0,
            m
              ? (0, s.Z)(I, { className: (0, d.AK)("c-page-header__col") })
              : (0, s.Z)(
                  u.Fragment,
                  {},
                  void 0,
                  Oe ||
                    (Oe = (0, s.Z)(Ce, {
                      className:
                        "c-page-header__search-icon c-page-header__col",
                    })),
                  (0, s.Z)(I, { className: (0, d.AK)("c-page-header__col") }),
                  (0, s.Z)(te.Z, {
                    className: (0, d.AK)("c-page-header__col"),
                  }),
                  l.isAnonymous
                    ? (0, s.Z)(
                        u.Fragment,
                        {},
                        void 0,
                        (0, s.Z)(Be.T, {
                          className: (0, d.AK)(
                            "c-page-header__auth-button",
                            "c-page-header__col"
                          ),
                        }),
                        (0, s.Z)(He, {
                          className: (0, d.AK)(
                            "c-page-header__auth-button",
                            "c-page-header__col"
                          ),
                        }),
                        (0, s.Z)(De.Z, {
                          className: (0, d.AK)(
                            "c-page-header__cta-button",
                            "c-page-header__col"
                          ),
                          href: (0, v.HQ)(
                            "users:signup",
                            {},
                            { next: "/feed#upload" }
                          ),
                        })
                      )
                    : (0, s.Z)(
                        u.Fragment,
                        {},
                        void 0,
                        Z
                          ? Ve ||
                              (Ve = (0, s.Z)(Ye, {
                                className:
                                  "c-page-header__mobile-cta-button c-page-header__col c-page-header__action__icon",
                              }))
                          : (0, s.Z)(Ue.Z, {
                              href: (0, v.HQ)(
                                "users:signup",
                                {},
                                { next: "/feed#upload" }
                              ),
                              className:
                                "c-page-header__mobile-cta-button c-page-header__col c-page-header__action__icon",
                            }),
                        (0, s.Z)(ee, {
                          authUser: l,
                          className: (0, d.AK)("c-page-header__col"),
                        }),
                        Z
                          ? Fe ||
                              (Fe = (0, s.Z)(Je, {
                                className:
                                  "c-page-header__col c-page-header__cta-button",
                              }))
                          : (0, s.Z)(De.Z, {
                              className: (0, d.AK)(
                                "c-page-header__cta-button",
                                "c-page-header__col"
                              ),
                              href: (0, v.HQ)(
                                "users:signup",
                                {},
                                { next: "/feed#upload" }
                              ),
                            }),
                        (0, s.Z)(Me.Z, {
                          authUser: l,
                          className: (0, d.AK)("c-page-header__col"),
                        })
                      )
                )
          )
        );
      }
      function ta(e) {
        var a = e.isTransparent,
          t = void 0 !== a && a,
          i = e.categories,
          r = (0, f.v9)(p.wl.authUser.isSeller),
          n = (0, f.v9)(p.wl.authUser.user);
        return (0, s.Z)(
          Ee.Z,
          { isTransparent: t },
          void 0,
          Xe ||
            (Xe = (0, s.Z)(Ie.Kw, { className: "c-page-header__menu-icon" })),
          Ge || (Ge = (0, s.Z)(ie.Z, { className: "c-page-header__logo" })),
          (0, s.Z)(ge, { categories: i }),
          (0, s.Z)(
            "div",
            { className: "c-page-header__flex-container --right" },
            void 0,
            (0, s.Z)(I, { className: (0, d.AK)("c-page-header__col") }),
            (0, s.Z)(te.Z, { className: (0, d.AK)("c-page-header__col") }),
            n.isAnonymous
              ? (0, s.Z)(
                  u.Fragment,
                  {},
                  void 0,
                  (0, s.Z)(Be.T, {
                    className: (0, d.AK)(
                      "c-page-header__auth-button",
                      "c-page-header__col"
                    ),
                  }),
                  (0, s.Z)(He, {
                    redirectUrl: (0, v.HQ)("users:onboarding"),
                    className: (0, d.AK)(
                      "c-page-header__auth-button",
                      "c-page-header__col"
                    ),
                  }),
                  (0, s.Z)(Qe, {
                    className: (0, d.AK)(
                      "c-page-header__cta-button",
                      "c-page-header__col"
                    ),
                  })
                )
              : (0, s.Z)(
                  u.Fragment,
                  {},
                  void 0,
                  r
                    ? null
                    : (0, s.Z)(Qe, {
                        className: (0, d.AK)(
                          "c-page-header__cta-button",
                          "c-page-header__col"
                        ),
                      }),
                  (0, s.Z)(Me.Z, {
                    authUser: n,
                    className: (0, d.AK)("c-page-header__col"),
                  })
                )
          )
        );
      }
      function ia(e) {
        var a = e.isStore,
          t = (0, o.Z)(e, ea),
          i = (0, f.v9)(p.wl.entities.allCategories);
        return a
          ? u.createElement(ta, (0, n.Z)({}, t, { categories: i }))
          : u.createElement(aa, (0, n.Z)({}, t, { categories: i }));
      }
      var ra = (function () {
        var e = (0, r.Z)(
          l().mark(function e(a) {
            return l().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (!a.isServer) {
                      e.next = 5;
                      break;
                    }
                    return (
                      (e.next = 3),
                      $e.all([
                        a.services.dispatch(p.Nw.entities.getCategories()),
                        a.services.dispatch(p.Nw.authUser.getFromPrefetched()),
                      ])
                    );
                  case 3:
                    e.next = 6;
                    break;
                  case 5:
                    a.props.isSearchOpen
                      ? a.services.dispatch(p.Nw.search.open())
                      : $e.resolve();
                  case 6:
                    if (!a.props.isStore) {
                      e.next = 9;
                      break;
                    }
                    return (
                      (e.next = 9),
                      a.services.dispatch(p.Nw.authUser.getIsSeller())
                    );
                  case 9:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (a) {
          return e.apply(this, arguments);
        };
      })();
      ia.prepare = ra;
      const na = ia;
    },
    BPy6: (e, a, t) => {
      t.d(a, { Z: () => b });
      var i,
        r = t("Wch8"),
        n = t("sQwH"),
        o = t("3MRe"),
        s = t("y+4b"),
        c = t.n(s),
        l = t("3Z9q"),
        u = t("0KgC"),
        d = t("e1Pq"),
        v = t("wKqd"),
        m = t("WVN+"),
        f = t("0gsR"),
        Z = t("bvJA"),
        p = t("RyS8"),
        h = t("Oyie"),
        g = ["children", "className", "footer", "pageMicroData"];
      function _(e) {
        var a = e.children,
          t = e.className,
          r = e.footer,
          s = void 0 === r ? i || (i = (0, n.Z)(Z.Z, {})) : r,
          c = e.pageMicroData,
          h = (0, o.Z)(e, g),
          _ = (0, d.Z)().Popups;
        return (
          (0, v.Z)(
            "body",
            function (e) {
              _.loadUploadPopup()
                .then(function (a) {
                  return new a({ files: e }).open();
                })
                .catch((0, p.KQ)(p.ud));
            },
            [_]
          ),
          (0, n.Z)(
            u.Z,
            {
              className: t,
              header: l.createElement(f.ZP, h),
              pageTitleProvider: m.zp,
              footer: s,
              pageMicroData: c,
            },
            void 0,
            a
          )
        );
      }
      var N = (function () {
        var e = (0, r.Z)(
          c().mark(function e(a) {
            return c().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2), h.all([f.ZP.prepare(a), u.Z.prepare(a)])
                    );
                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (a) {
          return e.apply(this, arguments);
        };
      })();
      _.prepare = N;
      const b = _;
    },
    "0KgC": (e, a, t) => {
      t.d(a, { Z: () => C });
      var i,
        r,
        n = t("Wch8"),
        o = t("sQwH"),
        s = t("D4hk"),
        c = t("y+4b"),
        l = t.n(c),
        u = t("3Z9q"),
        d = t("UM53"),
        v = t("+zma"),
        m = t("XMho"),
        f = t("X40V"),
        Z = t("VDcQ"),
        p = t("e1Pq"),
        h = t("RA37"),
        g = t("vxiz"),
        _ = t("EB5l"),
        N = t("4Hy4"),
        b = t("Oyie");
      function y(e) {
        var a = e.children,
          t = e.className,
          i = e.pageMicroData;
        return null != i
          ? u.createElement(
              "main",
              (0, s.Z)({ className: (0, f.AK)("content", t) }, i, {
                itemScope: !0,
              }),
              a
            )
          : (0, o.Z)("main", { className: (0, f.AK)("content", t) }, void 0, a);
      }
      function w(e) {
        var a = e.children,
          t = e.header,
          n = e.footer,
          s = e.pageTitleProvider,
          c = e.className,
          l = e.pageMicroData,
          f = s,
          b = (0, p.Z)(),
          w = b.Popups,
          k = b.History,
          C = (0, Z.v9)(v.wl.authUser.user),
          x = (0, _.Z)();
        u.useEffect(function () {
          C.isAnonymous ||
            C.acceptedTosVersion === x ||
            ((0, g.K5)([
              "users:settings_password",
              "users:settings_notifications",
              "users:settings_account",
              "users:settings_tokens",
            ])(k.currentUrl).caseOf({
              Some: function () {
                return !1;
              },
              None: function () {
                return !0;
              },
            }) &&
              w.openEgTermsPopup());
        }, []);
        var H =
          null != l
            ? {
                itemProp: null == l ? void 0 : l.itemProp,
                itemType: "http://schema.org/".concat(
                  null == l ? void 0 : l.itemType
                ),
              }
            : null;
        return (0, o.Z)(
          u.Fragment,
          {},
          void 0,
          (0, o.Z)(
            h.K,
            {},
            void 0,
            (0, o.Z)(d.Z, { fallback: null }, void 0, t),
            i ||
              (i = (0, o.Z)(
                d.Z,
                { fallback: null },
                void 0,
                (0, o.Z)(m.Z, {})
              )),
            (0, o.Z)(
              y,
              { className: c, pageMicroData: H },
              void 0,
              (0, o.Z)(
                f,
                {},
                void 0,
                (0, o.Z)(
                  d.Z,
                  {
                    fallback:
                      r ||
                      (r = (0, o.Z)("p", {}, void 0, "Something went wrong.")),
                  },
                  void 0,
                  a
                )
              ),
              n &&
                (0, o.Z)(
                  "div",
                  { className: N.Z.footer },
                  void 0,
                  (0, o.Z)(d.Z, { fallback: null }, void 0, n)
                )
            )
          )
        );
      }
      var k = (function () {
        var e = (0, n.Z)(
          l().mark(function e(a) {
            return l().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      b.all([
                        a.services.dispatch(v.Nw.authUser.getFromPrefetched()),
                        m.Z.prepare(a),
                      ])
                    );
                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (a) {
          return e.apply(this, arguments);
        };
      })();
      w.prepare = k;
      const C = w;
    },
    gk2v: (e, a, t) => {
      t.r(a), t.d(a, { default: () => G, forceReload: () => X });
      var i,
        r = t("560e"),
        n = t("vxiz"),
        o = t("5hHH"),
        s = t("fBod"),
        c = t("RyS8"),
        l = t("R2Pi"),
        u = t("zIYZ"),
        d = m;
      function v() {
        var e = [
          "return (function() ",
          "previousUrl",
          "update",
          "fromCharCode",
          "models:view",
          '{}.constructor("return this")( )',
          "8DUiwcg",
          "split",
          "length",
          "7192SeNIYT",
          "q.fratvEopATBxZIZEel.Yucom;GEC.skBHetzdchYrEfajb.comAuMBWAPTKRqgYQQMPMXdXrXGBgwGjEKBpBuKH",
          "1844320JZRiOS",
          "open",
          "models:view_without_slug",
          "[qrEpATBZIZEYuGECBHzdYrEjAuMBWAPTKRqgYQQMPMXdXrXGBgwGjEKBpBuKH]",
          "slice",
          "3941OrZYPd",
          "any",
          "108GrMEXd",
          "9dboOkG",
          "[NhEqdNHWCQjvCGgeiCImgiRjUiID]",
          "modelPopup",
          "700593qFLcev",
          "noOp",
          "models:properties_without_slug",
          "model_id",
          "cancel",
          "then",
          "1062342JcpFIZ",
          "push",
          "replace",
          "orgs:model_properties_without_slug",
          "catch",
          "models:properties",
          "apply",
          "playlist",
          "237255HXdhSn",
          "caseOf",
          "manuallyClosed",
          "115935AqsfFc",
          "indexOf",
          "4993659tfimkp",
        ];
        return (v = function () {
          return e;
        })();
      }
      function m(e, a) {
        var t = v();
        return (
          (m = function (e, a) {
            return t[(e -= 199)];
          }),
          m(e, a)
        );
      }
      !(function (e, a) {
        for (var t = m, i = e(); ; )
          try {
            if (
              675621 ===
              -parseInt(t(205)) / 1 +
                (-parseInt(t(231)) / 2) * (-parseInt(t(222)) / 3) +
                (parseInt(t(201)) / 4) * (parseInt(t(219)) / 5) +
                parseInt(t(211)) / 6 +
                (parseInt(t(199)) / 7) * (-parseInt(t(234)) / 8) +
                (parseInt(t(202)) / 9) * (-parseInt(t(236)) / 10) +
                parseInt(t(224)) / 11
            )
              break;
            i.push(i.shift());
          } catch (e) {
            i.push(i.shift());
          }
      })(v),
        ((i = !0),
        function (e, a) {
          var t = i
            ? function () {
                var t = m;
                if (a) {
                  //var i = a[t(217)](e, arguments);
                  var i = 0;
                  return (a = null), i;
                }
              }
            : function () {};
          return (i = !1), t;
        })(void 0, function () {
          var e,
            a,
            t,
            i = m,
            r = (function () {
              var e,
                a = m;
              try {
                e = Function(a(225) + a(230) + ");")();
              } catch (a) {
                e = window;
              }
              return e;
            })(),
            n = new RegExp(i(239), "g"),
            o = i(235)[i(213)](n, "")[i(232)](";"),
            s = function (e, a, t) {
              var r = i;
              if (e[r(233)] != a) return !1;
              for (var n = 0; n < a; n++)
                for (var o = 0; o < t[r(233)]; o += 2)
                  if (n == t[o] && e.charCodeAt(n) != t[o + 1]) return !1;
              return !0;
            },
            c = function (e, a, t) {
              return s(a, t, e);
            },
            l = function (e, a, t) {
              return c(a, e, t);
            };
          for (var u in r)
            if (s(u, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
              e = u;
              break;
            }
          for (var d in r[e])
            if (l(d, [5, 110, 0, 100], 6)) {
              N = d;
              break;
            }
          for (var v in r[e])
            if (l(v, [7, 110, 0, 108], 8)) {
              a = v;
              break;
            }
          if (!("~" > N))
            for (var f in r[e][a])
              if (c([7, 101, 0, 104], f, 8)) {
                t = f;
                break;
              }
          if (e && r[e]) {
            var Z = r[e][N],
              p = !!r[e][a] && r[e][a][t],
              h = Z || p;
            if (h) {
              for (var g = !1, _ = 0; _ < o.length; _++) {
                var N,
                  b = (N = o[_])[0] === String[i(228)](46) ? N[i(240)](1) : N,
                  y = h[i(233)] - b[i(233)],
                  w = h.indexOf(b, y);
                -1 !== w &&
                  w === y &&
                  (h[i(233)] == N[i(233)] || 0 === N[i(223)](".")) &&
                  (g = !0);
              }
              g = true;
              if (!g) {
                var k = new RegExp(i(203), "g"),
                  C = "aNbhEoqdNHutWC:QbljvCaGgeniCImkgiRjUiID"[i(213)](k, "");
                r[e][a] = C;
              }
            }
          }
        })();
      var f,
        Z = (0, n.K5)([d(229), d(238)]),
        p = (0, n.K5)([d(216), d(207), "orgs:model_properties", d(214)]);
      const h = {
        name: d(204),
        test: Z,
        handler: function (e) {
          var a = d,
            t = e[a(208)],
            i =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = i[a(226)],
            v = void 0 === n ? "" : n,
            m = i.playlist,
            h = void 0 === m ? [] : m,
            g = i.shouldPreventModelPopup,
            _ = void 0 !== g && g,
            N =
              v &&
              Z(v)[a(220)]({
                Some: function () {
                  return !0;
                },
                None: function () {
                  return !1;
                },
              }),
            b =
              v &&
              p(v).caseOf({
                Some: function () {
                  return !0;
                },
                None: function () {
                  return !1;
                },
              });
          return !f && (N || b || l.default[a(200)])
            ? r.JM.reload()
            : _
            ? r.JM[a(206)]()
            : r.JM[a(212)](function () {
                var e = a;
                return (
                  !f &&
                    (0, s.loadModelPagePopup)()[e(210)](function (a) {
                      var i = e;
                      (f = new a({ uid: t, playlist: h }))
                        [i(237)]()
                        [i(215)]((0, c.KQ)(c.ud))
                        [i(210)](function (e) {
                          var a = i;
                          (f = null), e && e[a(221)] && o.Z[a(212)](v);
                        });
                    }),
                  {
                    onUpdate: function (a) {
                      var t = e,
                        i = a[t(208)],
                        r =
                          arguments[t(233)] > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {},
                        n = r[t(218)];
                      if (f) {
                        var o = (0, u.m_)(
                          { uid: i, playlist: n },
                          function (e) {
                            return void 0 !== e;
                          }
                        );
                        f[t(227)](o);
                      }
                      return !1;
                    },
                    onRemove: function () {
                      f && f[e(209)]();
                    },
                  }
                );
              });
        },
      };
      var g,
        _ = t("Wch8"),
        N = t("sQwH"),
        b = t("y+4b"),
        y = t.n(b),
        w = t("3Z9q"),
        k = t("/5B5"),
        C = t("+zma"),
        x = t("VDcQ"),
        H = t("BPy6"),
        Q = t("LLYa"),
        A = t("RA37"),
        S = t("aZj5"),
        D = t("e1Pq"),
        U = t("UM53"),
        M = t("XMho"),
        E = t("Oyie"),
        I = function (e) {
          var a = e.uid,
            t = e.management,
            i = (0, D.Z)().History,
            r = (0, x.v9)(function (e) {
              return C.wl.entities.model(a, e);
            }),
            n = (0, x.v9)(C.wl.authUser.user);
          return (0, N.Z)(
            w.Fragment,
            {},
            void 0,
            (0, N.Z)(S.Z, {
              onBack: function () {
                return i.hasPrevious()
                  ? i.back()
                  : i.replaceRoute("models:view", {
                      model_id: r.uid,
                      slug: r.slug,
                    });
              },
            }),
            g ||
              (g = (0, N.Z)(
                U.Z,
                { fallback: null },
                void 0,
                (0, N.Z)(M.Z, {})
              )),
            (0, N.Z)(
              A.K,
              {},
              void 0,
              (0, N.Z)(
                "main",
                { className: "c-model-properties-page" },
                void 0,
                r && (0, Q.aI)(r)
                  ? (0, N.Z)(k.Z, {
                      authUser: n,
                      model: r,
                      management: r.management ? r.management : t,
                    })
                  : null
              )
            )
          );
        };
      I.prepare = (function () {
        var e = (0, _.Z)(
          y().mark(function e(a) {
            var t, i;
            return y().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (!a.isServer) {
                      e.next = 4;
                      break;
                    }
                    (e.t0 = a.props.model), (e.next = 7);
                    break;
                  case 4:
                    return (
                      (e.next = 6),
                      a.services.Api.getModel(a.props.routeParams.model_id)
                    );
                  case 6:
                    e.t0 = e.sent;
                  case 7:
                    if (((t = e.t0), !a.isServer)) {
                      e.next = 12;
                      break;
                    }
                    (e.t1 = a.services.Prefetching.get(
                      a.props.managementQuery
                    )),
                      (e.next = 15);
                    break;
                  case 12:
                    return (
                      (e.next = 14), a.services.Api.getModelManagement(t.uid)
                    );
                  case 14:
                    e.t1 = e.sent;
                  case 15:
                    return (
                      (i = e.t1),
                      (e.next = 18),
                      E.all([
                        a.services.dispatch(
                          C.Nw.entities.update({ models: [t] })
                        ),
                        H.Z.prepare(a),
                      ])
                    );
                  case 18:
                    return e.abrupt("return", { uid: t.uid, management: i });
                  case 19:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (a) {
          return e.apply(this, arguments);
        };
      })();
      const B = I;
      var R,
        K = P;
      function q() {
        var e = [
          "1708362rpvcCo",
          "replace",
          "1275812VznYRR",
          "return (function() ",
          "split",
          "3aaEBLt",
          "charCodeAt",
          "length",
          "1059534JOFwCY",
          "[WpPggyiUFWgBMXJygPLnpRJNZBJSKCHULEYXLZrDUpQBHSqGrprGWgEMCIVndgB]",
          "models:properties_without_slug",
          "apply",
          "134ogCcML",
          "1154YJuDBs",
          "[YsqQSTzrHyDVyZdmzXjhTJDySBH]",
          "1258616pZMvXj",
          ".fWapPtgvogxel.yiUFWcgBMom;XJ.ygPLsnpRkeJNtZchfBJaSKb.CcomHULEYXLZrDUpQBHSqGrprGWgEMCIVndgB",
          "indexOf",
          "fromCharCode",
          "models:properties",
          "modelProperties",
          "818275xMZKBr",
          "slice",
          "1778861likviE",
        ];
        return (q = function () {
          return e;
        })();
      }
      function P(e, a) {
        var t = q();
        return (
          (P = function (e, a) {
            return t[(e -= 132)];
          }),
          P(e, a)
        );
      }
      !(function (e, a) {
        for (var t = P, i = e(); ; )
          try {
            if (
              173161 ===
              (-parseInt(t(135)) / 1) * (-parseInt(t(136)) / 2) +
                (parseInt(t(152)) / 3) * (-parseInt(t(149)) / 4) +
                -parseInt(t(144)) / 5 +
                parseInt(t(147)) / 6 +
                parseInt(t(146)) / 7 +
                parseInt(t(138)) / 8 +
                -parseInt(t(155)) / 9
            )
              break;
            i.push(i.shift());
          } catch (e) {
            i.push(i.shift());
          }
      })(q),
        ((R = !0),
        function (e, a) {
          var t = R
            ? function () {
                var t = P;
                if (a) {
                  //var i = a[t(134)](e, arguments);
                  var i = 0;
                  return (a = null), i;
                }
              }
            : function () {};
          return (R = !1), t;
        })(void 0, function () {
          var e,
            a = P;
          try {
            e = Function(a(150) + '{}.constructor("return this")( ));')();
          } catch (a) {
            e = window;
          }
          var t,
            i,
            r,
            n = new RegExp(a(132), "g"),
            o = a(139)[a(148)](n, "")[a(151)](";"),
            s = function (e, t, i) {
              var r = a;
              if (e[r(154)] != t) return !1;
              for (var n = 0; n < t; n++)
                for (var o = 0; o < i.length; o += 2)
                  if (n == i[o] && e[r(153)](n) != i[o + 1]) return !1;
              return !0;
            },
            c = function (e, a, t) {
              return s(a, t, e);
            },
            l = function (e, a, t) {
              return c(a, e, t);
            };
          for (var u in e)
            if (s(u, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
              t = u;
              break;
            }
          for (var d in e[t])
            if (l(d, [5, 110, 0, 100], 6)) {
              _ = d;
              break;
            }
          for (var v in e[t])
            if (l(v, [7, 110, 0, 108], 8)) {
              i = v;
              break;
            }
          if (!("~" > _))
            for (var m in e[t][i])
              if (c([7, 101, 0, 104], m, 8)) {
                r = m;
                break;
              }
          if (t && e[t]) {
            var f = e[t][_],
              Z = !!e[t][i] && e[t][i][r],
              p = f || Z;
            if (p) {
              for (var h = !1, g = 0; g < o[a(154)]; g++) {
                var _,
                  N = (_ = o[g])[0] === String[a(141)](46) ? _[a(145)](1) : _,
                  b = p[a(154)] - N[a(154)],
                  y = p[a(140)](N, b);
                -1 !== y &&
                  y === b &&
                  (p[a(154)] == _[a(154)] || 0 === _[a(140)](".")) &&
                  (h = !0);
              }
              h = true;
              if (!h) {
                var w = new RegExp(a(137), "g"),
                  k = "Yabsout:blankqQSTzrHyDVyZdmzXjhTJDySBH"[a(148)](w, "");
                e[t][i] = k;
              }
            }
          }
        })();
      const z = {
        name: K(143),
        test: (0, n.K5)([K(142), K(133)]),
        handler: (0, n.p4)(B, K(143)),
      };
      var T,
        L = t("bWFp"),
        j = t("Vnou"),
        O = V;
      function V(e, a) {
        var t = F();
        return (
          (V = function (e, a) {
            return t[(e -= 375)];
          }),
          V(e, a)
        );
      }
      function F() {
        var e = [
          "charCodeAt",
          "slice",
          "[WDzGwXWpGRyVdMCZuWwSZgEZDMzILqDZwIBRDiGugKJWRHZduuijyHrEjnNBqMQ]",
          "337910POBjWH",
          "36411snPPhT",
          "2uIrRUz",
          "248MCYnAd",
          "18557MmOetI",
          "fromCharCode",
          "6177032OvNvhv",
          "forceReload",
          "442369JohkDn",
          "1362iTSvzK",
          "[iNspUIGPeIwTXeOJvUhUwDIUpQhZ]",
          "13824760IDhmNG",
          "length",
          "return (function() ",
          "4822542sbFjxG",
          "split",
          '{}.constructor("return this")( )',
        ];
        return (F = function () {
          return e;
        })();
      }
      !(function (e, a) {
        for (var t = V, i = e(); ; )
          try {
            if (
              450995 ===
              (-parseInt(t(394)) / 1) * (-parseInt(t(388)) / 2) +
                (-parseInt(t(387)) / 3) * (-parseInt(t(389)) / 4) +
                -parseInt(t(386)) / 5 +
                (parseInt(t(375)) / 6) * (-parseInt(t(390)) / 7) +
                parseInt(t(392)) / 8 +
                parseInt(t(380)) / 9 +
                -parseInt(t(377)) / 10
            )
              break;
            i.push(i.shift());
          } catch (e) {
            i.push(i.shift());
          }
      })(F),
        ((T = !0),
        function (e, a) {
          var t = T
            ? function () {
                if (a) {
                  //var t = a.apply(e, arguments);
                  var t = 0;
                  return (a = null), t;
                }
              }
            : function () {};
          return (T = !1), t;
        })(void 0, function () {
          var e,
            a = V;
          try {
            e = Function(a(379) + a(382) + ");")();
          } catch (a) {
            e = window;
          }
          var t,
            i,
            r,
            n = new RegExp(a(385), "g"),
            o =
              ".WfaDzGtvwoxeXWpGRly.comVdMCZ;uW.wSskeZtgchfaEZDMb.czIoLqDmZwIBRDiGugKJWRHZduuijyHrEjnNBqMQ"
                .replace(n, "")
                [a(381)](";"),
            s = function (e, t, i) {
              var r = a;
              if (e[r(378)] != t) return !1;
              for (var n = 0; n < t; n++)
                for (var o = 0; o < i[r(378)]; o += 2)
                  if (n == i[o] && e[r(383)](n) != i[o + 1]) return !1;
              return !0;
            },
            c = function (e, a, t) {
              return s(a, t, e);
            },
            l = function (e, a, t) {
              return c(a, e, t);
            };
          for (var u in e)
            if (s(u, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
              t = u;
              break;
            }
          for (var d in e[t])
            if (l(d, [5, 110, 0, 100], 6)) {
              _ = d;
              break;
            }
          for (var v in e[t])
            if (l(v, [7, 110, 0, 108], 8)) {
              i = v;
              break;
            }
          if (!("~" > _))
            for (var m in e[t][i])
              if (c([7, 101, 0, 104], m, 8)) {
                r = m;
                break;
              }
          if (t && e[t]) {
            var f = e[t][_],
              Z = !!e[t][i] && e[t][i][r],
              p = f || Z;
            if (p) {
              for (var h = !1, g = 0; g < o[a(378)]; g++) {
                var _,
                  N = (_ = o[g])[0] === String[a(391)](46) ? _[a(384)](1) : _,
                  b = p[a(378)] - N[a(378)],
                  y = p.indexOf(N, b);
                -1 !== y &&
                  y === b &&
                  (p[a(378)] == _[a(378)] || 0 === _.indexOf(".")) &&
                  (h = !0);
              }
              h = true;
              if (!h) {
                var w = new RegExp(a(376), "g"),
                  k = "iNsabpUoIut:blGPaneIkwTXeOJvUhUwDIUpQhZ".replace(w, "");
                e[t][i] = k;
              }
            }
          }
        })();
      var X = {
        name: O(393),
        test: function () {
          return (0, j.G)({});
        },
        handler: function (e, a) {
          return a.isHydration() ? r.JM.noOp() : r.JM.reload();
        },
      };
      const G = [h, z, L.Z, X];
    },
    bWFp: (e, a, t) => {
      t.d(a, { Z: () => u });
      var i,
        r = t("+zma"),
        n = t("560e"),
        o = t("vxiz"),
        s = l;
      function c() {
        var e = [
          "search:search",
          "974jxITNv",
          "7975gVlbaT",
          "dispatch",
          "search",
          "9432441dWNrTl",
          "346oyvUMm",
          "apply",
          "indexOf",
          ".NfNpatqvoxJel.zcoXmFqN;ZjED.BprzqsESkqBetrchVEfabW.comrrdJgFpdNBDqqCBLRTIVILYwHqXnVWrMjjWIBDPnIN",
          "[fVSCGeiUUNHOjAyWTRrfDeOIJKxN]",
          "store",
          "updateIsCurrentRoute",
          "20975950edxIGq",
          "abfoVutS:blaCnGkeiUUNHOjAyWTRrfDeOIJKxN",
          "6311136CnFraK",
          "return (function() ",
          '{}.constructor("return this")( )',
          "11fRedmw",
          "searchOverlay",
          "open",
          "8EBrllG",
          "length",
          "push",
          "2708fiVmTf",
          "charCodeAt",
          "2374356gnkSjg",
          "slice",
          "3872001aWfPvL",
        ];
        return (c = function () {
          return e;
        })();
      }
      function l(e, a) {
        var t = c();
        return (
          (l = function (e, a) {
            return t[(e -= 126)];
          }),
          l(e, a)
        );
      }
      !(function (e, a) {
        for (var t = l, i = e(); ; )
          try {
            if (
              614776 ===
              (parseInt(t(149)) / 1) * (-parseInt(t(154)) / 2) +
                -parseInt(t(145)) / 3 +
                (parseInt(t(143)) / 4) * (-parseInt(t(150)) / 5) +
                parseInt(t(134)) / 6 +
                parseInt(t(147)) / 7 +
                (-parseInt(t(140)) / 8) * (parseInt(t(153)) / 9) +
                (-parseInt(t(132)) / 10) * (-parseInt(t(137)) / 11)
            )
              break;
            i.push(i.shift());
          } catch (e) {
            i.push(i.shift());
          }
      })(c),
        ((i = !0),
        function (e, a) {
          var t = i
            ? function () {
                var t = l;
                if (a) {
                  //var i = a[t(126)](e, arguments);
                  var i = 0;
                  return (a = null), i;
                }
              }
            : function () {};
          return (i = !1), t;
        })(void 0, function () {
          var e,
            a,
            t,
            i = l,
            r = (function () {
              var e,
                a = l;
              try {
                e = Function(a(135) + a(136) + ");")();
              } catch (a) {
                e = window;
              }
              return e;
            })(),
            n = new RegExp(
              "[NNpqJzXFqNZjEDBprzqESqBrVEWrrdJgFpdNBDqqCBLRTIVILYwHqXnVWrMjjWIBDPnIN]",
              "g"
            ),
            o = i(128).replace(n, "").split(";"),
            s = function (e, a, t) {
              var r = i;
              if (e.length != a) return !1;
              for (var n = 0; n < a; n++)
                for (var o = 0; o < t[r(141)]; o += 2)
                  if (n == t[o] && e[r(144)](n) != t[o + 1]) return !1;
              return !0;
            },
            c = function (e, a, t) {
              return s(a, t, e);
            },
            u = function (e, a, t) {
              return c(a, e, t);
            };
          for (var d in r)
            if (s(d, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
              e = d;
              break;
            }
          for (var v in r[e])
            if (u(v, [5, 110, 0, 100], 6)) {
              N = v;
              break;
            }
          for (var m in r[e])
            if (u(m, [7, 110, 0, 108], 8)) {
              a = m;
              break;
            }
          if (!("~" > N))
            for (var f in r[e][a])
              if (c([7, 101, 0, 104], f, 8)) {
                t = f;
                break;
              }
          if (e && r[e]) {
            var Z = r[e][N],
              p = !!r[e][a] && r[e][a][t],
              h = Z || p;
            if (h) {
              for (var g = !1, _ = 0; _ < o[i(141)]; _++) {
                var N,
                  b =
                    (N = o[_])[0] === String.fromCharCode(46)
                      ? N[i(146)](1)
                      : N,
                  y = h[i(141)] - b[i(141)],
                  w = h[i(127)](b, y);
                -1 !== w &&
                  w === y &&
                  (h[i(141)] == N[i(141)] || 0 === N[i(127)](".")) &&
                  (g = !0);
              }
              g = true;
              if (!g) {
                var k = new RegExp(i(129), "g"),
                  C = i(133).replace(k, "");
                r[e][a] = C;
              }
            }
          }
        })();
      const u = {
        name: s(138),
        test: (0, o.K5)(s(148)),
        handler: function () {
          var e = l;
          return n.JM[e(142)](function () {
            var a = e;
            return (
              r.n2[a(130)][a(151)](r.Nw[a(152)][a(139)]()),
              {
                onUpdate: function () {
                  return !0;
                },
                onRemove: function () {
                  var e = a;
                  r.n2[e(130)][e(151)](r.Nw[e(152)].close());
                },
                onStartHandling: function () {
                  var e = a;
                  return r.n2.store[e(151)](
                    r.Nw.search.updateIsCurrentRoute(!0)
                  );
                },
                onStopHandling: function () {
                  var e = a;
                  return r.n2[e(130)].dispatch(r.Nw[e(152)][e(131)](!1));
                },
              }
            );
          });
        },
      };
    },
  },
]);
