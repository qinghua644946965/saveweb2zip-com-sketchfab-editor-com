!(function (e, t) {
  if ("object" == typeof exports && "object" == typeof module)
    module.exports = t();
  else if ("function" == typeof define && define.amd) define([], t);
  else {
    var i = t();
    for (var o in i) ("object" == typeof exports ? exports : e)[o] = i[o];
  }
})(self, () =>
  (self.webpackChunksketchfab = self.webpackChunksketchfab || []).push([
    [1189, 733, 2130],
    {
      "/UCt": (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => De });
        var o = i("k46e"),
          n = i("Hjnd"),
          a = i.n(n),
          r = i("CQWF"),
          s = i("Iao2"),
          l = i("3pbp");
        const d = s.Z.extend({
          mixins: [r.Z, l.Z],
          el: [
            '<div class="widget annotation-widget">',
            '          <div class="widget-wrapper">',
            "              <form>",
            '                  <div class="extra sort-handle">',
            '                      <span class="index"></span>',
            '                      <div class="tools-cell">',
            '                          <div class="tool refresh" title="Use current point of view">',
            '                              <i class="fa-regular fa-camera"></i>',
            "                          </div>",
            '                          <div class="tool delete" title="Delete">',
            '                              <i class="fa-regular fa-trash-can"></i>',
            "                          </div>",
            '                          <button type="submit" class="tool primary confirm" title="Save">',
            "                              Done",
            "                          </button>",
            '                          <div class="tool primary edit" title="Edit">',
            "                              Edit",
            "                          </div>",
            "                      </div>",
            "                  </div>",
            '                  <div class="content">',
            '                      <div class="preview-cell">',
            "                      </div>",
            '                      <div class="content-cell">',
            '                          <div class="title"></div>',
            '                          <div class="description markdown-rendered-content"></div>',
            "                      </div>",
            '                      <div class="edit-cell">',
            '                              <input class="title" placeholder="Title *" maxlength="64" required>',
            '                              <textarea class="description" placeholder="Description" maxlength="1024"></textarea>',
            "                      </div>",
            "                  </div>",
            "              </form>",
            "          </div>",
            "      </div>",
          ].join(""),
          events: (0, o.Z)({}, s.Z.prototype.events, {
            "click .edit": "startEdition",
            "dblclick .content": "startEdition",
            "click .confirm": "confirmEdition",
            "click .delete": "deleteSelf",
            "click .refresh": "refreshPosition",
            "click .preview-cell": "selectSelf",
            "click .content-cell": "selectSelf",
            "keydown textarea": "unsetMarkdownReady",
          }),
          constructor: function () {
            (this.clickSomeWhereElse_ = this.clickSomeWhereElse.bind(this)),
              s.Z.prototype.constructor.apply(this, arguments);
          },
          initialize: function () {
            s.Z.prototype.initialize.apply(this, arguments),
              this.on(
                "sorted",
                function () {
                  this.render();
                }.bind(this)
              ),
              this.initializeMarkdown({
                input: this.$(".edit-cell textarea"),
                target: this.$(".content-cell .description"),
              });
          },
          delegateEvents: function () {
            s.Z.prototype.delegateEvents.apply(this, arguments),
              a()(document).on("click", this.clickSomeWhereElse_);
          },
          undelegateEvents: function () {
            s.Z.prototype.undelegateEvents.apply(this, arguments),
              a()(document).on("click", this.clickSomeWhereElse_);
          },
          render: function () {
            this.model.get("preview") &&
              this.$(".preview-cell").css(
                "background-image",
                "url(%s)".replace("%s", this.model.get("preview"))
              ),
              this.model.collection
                ? this.$(".extra")
                    .css("display", "")
                    .find(".index")
                    .text(this.model.collection.indexOf(this.model) + 1)
                : this.$(".extra").hide(),
              this.$(".content-cell .title").text(this.model.get("name")),
              this.$(".content-cell .description").html(
                this.model.get("content").rendered
              ),
              this.handleLazyLoading();
          },
          startEdition: function () {
            this.$el.hasClass("edition") ||
              (this.$(".edit-cell .title").val(this.model.get("name")),
              this.$(".edit-cell .description").val(
                this.model.get("content").raw
              ),
              this.$el.addClass("edition"));
          },
          confirmEdition: function () {
            this.$el.hasClass("edition") &&
              this.$(".edit-cell .title").val() &&
              (this.$el.removeClass("edition"),
              this.renderMarkdown().then(
                function (e) {
                  this.model.set("name", this.$(".edit-cell .title").val()),
                    this.model.set("content", {
                      raw: this.$(".edit-cell .description").val(),
                      rendered: e,
                    });
                }.bind(this)
              ));
          },
          refreshPosition: function () {
            this.model.get("refreshAction")();
          },
          deleteSelf: function () {
            if (this.model.collection) {
              var e = a().Deferred(),
                t = e.promise();
              this.model.collection.trigger("beforeRemove", e, this.model),
                t.then(
                  function () {
                    this.model.trigger("select", void 0),
                      this.model.collection.remove(this.model);
                  }.bind(this)
                );
            }
          },
          selectSelf: function () {
            this.model.trigger("select", this.model);
          },
          clickSomeWhereElse: function (e) {
            this.$el.has(e.target).length || this.confirmEdition();
          },
        });
        var c = i("RyuJ"),
          u = i("g/7r"),
          h = i("g6dK"),
          g = i("TUor");
        const p = s.Z.extend({
          el: [
            '<div class="widget animation-widget">',
            '   <div class="widget-wrapper">',
            "   </div>",
            "</div>",
          ].join(""),
          events: (0, o.Z)({}, s.Z.prototype.events, {
            "click .visibility": "toggleVisibility",
            "click .name .display": "selectAnimation",
            "click .contextual-menu": "toggleContextualMenu",
            "click .contextual-menu .seamless": "toggleSeamlessLoop",
            "click .contextual-menu .rename": "enterEditionMode",
            "click .contextual-menu .delete": "deleteAnimation",
            "blur .name input": "leaveEditionMode",
            "keyup .name input": "updateName",
            "keydown .name input": "handleNameKeys",
          }),
          constructor: function () {
            (this.globalCloseContextualMenu =
              this.globalCloseContextualMenu.bind(this)),
              (this.toggleContextualMenu =
                this.toggleContextualMenu.bind(this)),
              (this.toggleSeamlessLoop = this.toggleSeamlessLoop.bind(this)),
              (this.enterEditionMode = this.enterEditionMode.bind(this)),
              (this.leaveEditionMode = this.leaveEditionMode.bind(this)),
              (this.deleteAnimation = this.deleteAnimation.bind(this)),
              s.Z.prototype.constructor.apply(this, arguments);
          },
          initialize: function () {
            s.Z.prototype.initialize.apply(this, arguments),
              this.model.on(
                "change:isEnabled",
                this.onVisibilityChange.bind(this)
              ),
              this.model.on(
                "change:isLoop",
                this.onSeamlessLoopChange.bind(this)
              ),
              this.model.on("change:name", this.onNameChange.bind(this));
          },
          render: function () {
            var e, t, i, o, n;
            this.rendered ||
              (this.$(".widget-wrapper").html(
                ((e = this.model.toJSON()),
                (t = e.isEnabled),
                (i = e.name),
                (o = e.duration),
                (n = e.isLoop),
                '\n<div class="visibility'
                  .concat(
                    t ? " hidden" : "",
                    '"></div>\n<div class="name">\n    <div class="display"><p>'
                  )
                  .concat(
                    (0, c.Z)(i),
                    '</p></div>\n    <div class="edit"><input type="text" maxlength="128" value="'
                  )
                  .concat(
                    (0, c.Z)(i),
                    '" /></div>\n</div>\n<div class="spacer"></div>\n<div class="duration">'
                  )
                  .concat(
                    (0, g.Qh)(o),
                    '</div>\n<div class="contextual-menu">\n    <ul class="menu-options">\n        <li class="seamless'
                  )
                  .concat(
                    n ? " enabled" : "",
                    '">Seamless loop</li>\n        <li class="rename">Rename</li>\n        <li class="delete">Delete</li>\n    </ul>\n</div>\n'
                  ))
              ),
              this.$el.attr("data-uid", this.model.get("uid")),
              this.onVisibilityChange(),
              (this.rendered = !0));
          },
          selectAnimation: function (e) {
            e.preventDefault(),
              e.stopPropagation(),
              this.model.collection.trigger("selected", this.model.get("uid"));
          },
          deleteAnimation: function () {
            new h.Z({
              title: "Confirmation",
              text: "Deleting an animation is irreversible. Are you sure ?",
              buttons: { ok: !0, cancel: !0 },
            })
              .open()
              .then(
                function () {
                  this.model.collection._trashbin.push(this.model),
                    this.model.collection.remove(this.model);
                }.bind(this)
              )
              .catch(u.EI),
              this.closeContextualMenu();
          },
          updateName: function () {
            this.model.set("name", this.$(".name input").val());
          },
          onNameChange: function () {
            this.$(".name .display p").text(this.model.get("name"));
          },
          enterEditionMode: function () {
            var e = this.$(".name input");
            this.closeContextualMenu(),
              this.$(".name").addClass("edit-mode"),
              e.focus(),
              e.val(""),
              e.val(this.model.get("name"));
          },
          leaveEditionMode: function () {
            this.$(".name").removeClass("edit-mode");
          },
          handleNameKeys: function (e) {
            var t = this.$(".name input");
            13 === e.which && t.blur();
          },
          openContextualMenu: function () {
            this.$(".contextual-menu").addClass("open");
          },
          closeContextualMenu: function () {
            this.$(".contextual-menu").removeClass("open");
          },
          toggleContextualMenu: function (e) {
            var t = this.$(".contextual-menu");
            e.target === e.currentTarget &&
              (t.hasClass("open")
                ? (this.closeContextualMenu(),
                  a()(document).off("click", this.globalCloseContextualMenu))
                : (this.openContextualMenu(),
                  a()(document).on("click", this.globalCloseContextualMenu)));
          },
          globalCloseContextualMenu: function (e) {
            var t = this.$(".contextual-menu");
            t[0] !== e.target &&
              0 === t.find(e.target).length &&
              (this.closeContextualMenu(),
              a()(document).off("click", this.globalCloseContextualMenu));
          },
          onSeamlessLoopChange: function () {
            this.$(".contextual-menu .seamless").toggleClass(
              "enabled",
              this.model.get("isLoop")
            );
          },
          toggleSeamlessLoop: function () {
            this.model.set("isLoop", !this.model.get("isLoop"));
          },
          onVisibilityChange: function () {
            this.$el.toggleClass("disabled", !this.model.get("isEnabled"));
          },
          toggleVisibility: function () {
            this.model.set("isEnabled", !this.model.get("isEnabled"));
          },
        });
        var m = i("Wuy/"),
          f = i("R4My"),
          v = i.n(f),
          b = i("6IJz");
        const w = s.Z.extend({
            el: [
              '<div class="widget options-widget">',
              '          <div class="widget-wrapper">',
              '              <ul class="options"></ul>',
              "          </div>",
              "      </div>",
            ].join(""),
            events: (0, o.Z)({}, s.Z.prototype.events, {
              "click [data-value]": "selectEvent",
              "click .delete": "deleteEvent",
              keydown: "keydownEvent",
            }),
            constructor: function (e, t) {
              (this.resetOptionEvent_ = this.resetOptionEvent.bind(this)),
                (this.addOptionEvent_ = this.addOptionEvent.bind(this)),
                (this.removeOptionEvent_ = this.removeOptionEvent.bind(this)),
                (this.changeOptionEvent_ = this.changeOptionEvent.bind(this)),
                (t = (0, m.Z)(t || {}, {
                  model: new (v().Model)(),
                  name: "value",
                  image: null,
                  options: {},
                  rowClass: b.Z,
                  allowMultiple: !0,
                  allowEmpty: !1,
                })),
                Array.isArray(t.options) &&
                  (t.options = t.options.reduce(
                    function (e, t) {
                      return (e[t] = t), e;
                    }.bind(this),
                    {}
                  )),
                t.options instanceof v().Collection ||
                  (t.options = new (v().Collection)(
                    Object.keys(t.options).map(
                      function (e) {
                        return { value: e, label: t.options[e] };
                      }.bind(this)
                    )
                  )),
                s.Z.prototype.constructor.call(this, e, t),
                t.options.each(
                  function (e) {
                    this.addOption(e);
                  }.bind(this)
                ),
                !0 === t.allowMultiple && void 0 === this.get() && this.set([]);
            },
            delegateEvents: function () {
              s.Z.prototype.delegateEvents.apply(this, arguments),
                this.options.options.on("reset", this.resetOptionEvent_),
                this.options.options.on("add", this.addOptionEvent_),
                this.options.options.on("remove", this.removeOptionEvent_),
                this.options.options.on("change", this.changeOptionEvent_);
            },
            undelegateEvents: function () {
              s.Z.prototype.undelegateEvents.apply(this, arguments),
                this.options.options.off("reset", this.resetOptionEvent_),
                this.options.options.off("add", this.addOptionEvent_),
                this.options.options.off("remove", this.removeOptionEvent_),
                this.options.options.off("change", this.changeOptionEvent_);
            },
            render: function () {
              var e = [].concat(this.get() || []);
              (e = e.map(function (e) {
                return e.toString();
              })),
                this.$("[data-value]").each(function () {
                  var t = a()(this),
                    i = t.attr("data-value");
                  t.toggleClass("active", -1 !== e.indexOf(i));
                });
            },
            addOption: function (e, t) {
              void 0 === t && (t = !0);
              var i = a()("<li/>")
                  .attr("class", "option")
                  .attr("data-cid", e.cid)
                  .attr("data-value", e.get("value"))
                  .attr("title", e.get("label")),
                o = e.collection.indexOf(e),
                n = this.$(".options > *:nth-child(" + o + ")");
              n.length
                ? n.after(i)
                : 0 === o
                ? this.$(".options").prepend(i)
                : this.$(".options").append(i);
              var r = new this.options.rowClass(this, {
                model: e,
                options: this.options,
              });
              i.append(r.$el), t && this.render();
            },
            removeOption: function (e) {
              this.$(".options .option")
                .filter(function () {
                  return a()(this).attr("data-cid") === e.cid;
                })
                .remove(),
                this.render();
            },
            changeOption: function (e) {
              this.$(".options .option")
                .filter(function () {
                  return a()(this).attr("data-cid") === e.cid;
                })
                .attr("data-value", e.get("value"))
                .attr("title", e.get("label")),
                this.render();
            },
            resetOptions: function () {
              this.$(".options").empty(),
                this.options.options.forEach(
                  function (e) {
                    this.addOption(e, !1);
                  }.bind(this)
                ),
                this.render();
            },
            triggerOption: function (e) {
              var t = this.get();
              if (Array.isArray(t)) {
                var i = t.indexOf(e);
                if (-1 === i) this.change(t.concat([e]));
                else if (this.options.allowEmpty || t.length >= 2) {
                  var o = t.slice();
                  o.splice(i, 1), this.change(o);
                }
              } else
                t !== e
                  ? this.change(e)
                  : this.options.allowEmpty && this.change(null);
            },
            addOptionEvent: function (e) {
              this.addOption(e);
            },
            removeOptionEvent: function (e) {
              this.removeOption(e);
            },
            changeOptionEvent: function (e) {
              this.changeOption(e);
            },
            resetOptionEvent: function () {
              this.resetOptions();
            },
            deleteEvent: function (e) {
              e.preventDefault(), e.stopPropagation();
              var t = a()(e.currentTarget)
                .closest(".option")
                .attr("data-value");
              this.trigger("delete", t);
            },
            selectEvent: function (e) {
              e.preventDefault(),
                this.triggerOption(a()(e.currentTarget).attr("data-value"));
            },
            keydownEvent: function (e) {
              if (13 === e.keyCode) {
                e.preventDefault();
                var t = this.$el.find(".option > a:focus");
                1 === t.length &&
                  (this.$el.find(".option").removeClass("active"),
                  t.parent().addClass("active"));
              }
            },
          }),
          y = w.extend({
            el: [
              '<div class="widget axis-widget">',
              '          <div class="widget-wrapper">',
              '              <ul class="options"></ul>',
              "          </div>",
              "      </div>",
            ].join(""),
            initialize: function (e) {
              (e = (0, m.Z)(e || {}, { options: { x: "X", y: "Y", z: "Z" } })),
                w.prototype.initialize.call(this, e);
            },
          }),
          x = s.Z.extend({
            el: [
              '<div class="widget button-widget">',
              '          <button class="button">',
              '              <span class="button-text"></span>',
              "          </button>",
              "      </div>",
            ].join(""),
            events: (0, o.Z)({}, s.Z.prototype.events, {
              "click .button": "clickEvent",
            }),
            constructor: function (e, t) {
              if (
                ((t = (0, m.Z)(
                  t || {},
                  {
                    model: new (v().Model)(),
                    event: "click",
                    text: "",
                    icon: "",
                    tooltip: "",
                    type: "btn-primary-inverted",
                  },
                  t
                )),
                s.Z.prototype.constructor.call(this, e, t),
                this.$el.find(".button-text").text(this.options.text),
                this.$el.find(".button").addClass(this.options.type),
                "" !== this.options.icon)
              ) {
                var i = a()('<i class="icon fa-regular"></i>');
                i.addClass("fa-" + this.options.icon),
                  i.insertBefore(this.$el.find(".button-text"));
              }
              if ("" !== this.options.tooltip) {
                var o = a()(
                  '<div class="tooltip ' +
                    this.options.tooltipDirection +
                    '"></div>'
                );
                o.text(this.options.tooltip),
                  this.$el.find(".button").addClass("help").append(o);
              }
            },
            clickEvent: function (e) {
              e.preventDefault(),
                this.options.event &&
                  this.options.model.trigger(this.options.event);
            },
          }),
          k = s.Z.extend({
            el: [
              '<div class="widget toggleswitch-widget">',
              '          <a class="state"></a>',
              '          <a class="label"></a>',
              "      </div>",
            ].join(""),
            events: (0, o.Z)({}, s.Z.prototype.events, {
              "click .state": "toggleStateEvent",
              "click .label": "toggleStateEvent",
            }),
            initialize: function (e) {
              (e = (0, m.Z)(e || {}, {
                model: new (v().Model)(),
                name: "value",
                label: "",
              })),
                s.Z.prototype.initialize.call(this, e),
                this.$(".label").text(this.options.label);
            },
            render: function () {
              this.$el.toggleClass("active", this.get());
            },
            toggleStateEvent: function (e) {
              e.preventDefault(),
                e.stopPropagation(),
                this.change(!this.model.get(this.options.name));
            },
          }),
          T = k.extend({
            el: [
              '<div class="widget checkbox-widget">',
              '          <a class="state"></a>',
              '          <a class="label"></a>',
              "      </div>",
            ].join(""),
          }),
          C = k.extend({
            el: [
              '<div class="widget custom-checkbox-widget">',
              '          <div class="label"></div>',
              "      </div>",
            ].join(""),
          });
        var S = i("C/2N"),
          _ = i("x2SW"),
          M = i.n(_);
        const Z = s.Z.extend({
          el: [
            '<div class="widget color-widget">',
            '    <div class="widget-wrapper">',
            '        <div class="box">',
            '            <div class="picker-wrapper">',
            '                <div class="picker-padder"></div>',
            '                <div class="picker"><div class="cursor"></div></div>',
            "            </div>",
            '            <div class="slider-wrapper">',
            '                <div class="slider"><div class="cursor"></div></div>',
            "            </div>",
            "        </div>",
            '        <input class="value" size="8" />',
            "    </div>",
            "</div>",
          ].join(""),
          events: (0, o.Z)({}, s.Z.prototype.events, {
            "change .value:input": "changeEvent",
          }),
          constructor: function (e, t) {
            (t = (0, m.Z)(t || {}, {
              model: new (v().Model)(),
              name: "value",
            })),
              s.Z.prototype.constructor.call(this, e, t),
              void 0 === this.get() && this.set({ r: 1, g: 1, b: 1 }),
              (this._blockUpdateHue = !1);
          },
          changeEvent: function () {
            this.colorPicker.set(this.$(".value").val());
          },
          render: function () {
            var e = this.get();
            void 0 === e && (this.set({ r: 1, g: 1, b: 1 }), (e = this.get())),
              this.colorPicker ||
                (this.colorPicker = (function () {
                  var e = M().apply(M(), arguments),
                    t = e.set;
                  return (
                    (e.set = function (e) {
                      if ("string" == typeof e) {
                        var i = 0;
                        "#" === e[0] && (e = e.slice(1));
                        var o = e;
                        if (e.length > 6) o = e.slice(0, 6);
                        else if (e.length < 6)
                          for (o = "", i = 0; i < 3; ++i)
                            o += e[i] ? e[i] + e[i] : "00";
                        var n = [0, 0, 0];
                        for (i = 0; i < 3; ++i) {
                          var a = parseInt(o[2 * i] + o[2 * i + 1], 16);
                          n[i] = (a != a ? 0 : a) / 255;
                        }
                        (e = { r: n[0], g: n[1], b: n[2] }), t.call(this, e);
                      } else t.call(this, e);
                    }),
                    e
                  );
                })(
                  {
                    slider: this.$(".slider")[0],
                    picker: this.$(".picker")[0],
                    sliderCursor: this.$(".slider > .cursor")[0],
                    pickerCursor: this.$(".picker > .cursor")[0],
                  },
                  function (e, t) {
                    (this._blockUpdateHue = !0),
                      this.change(t),
                      (this._blockUpdateHue = !1);
                  }.bind(this)
                )),
              this._blockUpdateHue || this.colorPicker.set(e);
            var t = S.ZP.rgbToHex(e);
            this.$(".value").val(t);
          },
        });
        var W = i("40Vw"),
          E = i("/Ybn"),
          P = i("mSEu"),
          O = i("Kjxj"),
          A = i("amXS"),
          F = i("xr2m"),
          N = i("jQDz"),
          R = i("Cgfs"),
          D = i("lqp/"),
          B = i("IAxr"),
          I = i("mv18"),
          L = i("+uBU"),
          G = i("Oyie"),
          $ = "";
        const H = L.Z.extend({
          mixins: [O.Z],
          events: (0, o.Z)({}, L.Z.prototype.events, {
            'click [data-action="select-texture"]': "selectTextureEvent",
            'click [data-action="delete-texture"]': "deleteTextureEvent",
            'click [data-action="delete-unused"]': "deleteUnusedTextureEvent",
            "change .upload-input": function (e) {
              this.options.uploadTextures(e.target.files);
            },
            'keyup [name="filter"]': "filterTexture",
            'change [name="filter"]': "filterTexture",
            "submit .filter": "selectOnlyTexture",
            "click .clear": "clearFilter",
          }),
          className: "texture-popup",
          initialize: function () {
            L.Z.prototype.initialize.apply(this, arguments),
              this.model.on(
                "change:unusedTextures",
                this.onUnusedTexturesChange.bind(this)
              ),
              this.updateUnusedTexturesCount().then(
                function (e) {
                  this.onUnusedTexturesChange(this.model, e);
                }.bind(this)
              );
          },
          remove: function () {
            L.Z.prototype.remove.apply(this, arguments),
              this.model.off(
                "change:unusedTextures",
                this.onUnusedTexturesChange.bind(this)
              );
          },
          header: function () {
            return (0, F.Z)(
              [
                '<div class="popup-name">',
                "    Manage Textures",
                "</div>",
                '<div class="popup-actions">',
                '    <a class="popup-action-close"></a>',
                "</div>",
              ].join("\n"),
              { imports: {} }
            )();
          },
          content: function () {
            return (0, F.Z)(
              [
                '<div class="toolbar">',
                '    <div class="buttons">',
                '        <div class="button btn-medium btn-primary upload">',
                '            <label for="upload-texture">',
                '               <input class="upload-input cloaked" id="upload-texture" type="file" accept="image/png, image/jpeg, .tga" multiple >',
                "               <span>Import texture</span>",
                "            </label>",
                '            <div class="loader"><i class="loading-light"></i></div>',
                "        </div>",
                '        <button class="button btn-medium btn-danger" data-action="delete-unused" disabled>Delete Unused</button>',
                "    </div>",
                '    <form class="filter">',
                '       <input type="search" name="filter" placeholder="Search in textures" autofocus>',
                '       <button class="clear" type="button"><i class="fa-regular fa-times"></i></button>',
                "    </form>",
                "</div>",
                '<div class="textures">',
                "    <%= textures %>",
                "</div>",
              ].join("\n")
            )({ textures: (0, N.Z)(this, "textures") });
          },
          clearFilter: function () {
            this.$('.filter [name="filter"]').val(""),
              this._filterTexture(),
              this.$('.filter [name="filter"]').focus();
          },
          filterTexture: function () {
            this.debouncedFilterTexture ||
              (this.debouncedFilterTexture = (0, R.Z)(
                this._filterTexture,
                200
              )),
              this.debouncedFilterTexture();
          },
          _filterTexture: function () {
            var e = this.$('.filter [name="filter"]').val();
            if ((($ = e), "" !== e)) {
              var t = this.options.collection.filter(function (t) {
                return t.get("label").toLowerCase().includes(e.toLowerCase());
              });
              this.$(".textures").html(this.textures(t));
            } else this.renderContent();
          },
          selectOnlyTexture: function () {
            var e = this.$(".textures > .texture");
            if (1 === e.length) {
              var t = e.first().attr("data-value");
              this.options.model.set(this.options.name, t), this.close();
            }
          },
          textures: function (e) {
            return (0, F.Z)(
              [
                "<% textures.forEach( function ( texture ) { %>",
                '    <div class="texture" data-value="<%- texture.get( \'value\' ) %>">',
                '        <div class="texture__image" data-action="select-texture">',
                "            <div style=\"background-image: url(<%- texture.get( 'image' ) %>)\"></div>",
                "        </div>",
                "        <div class=\"texture__name\"><%- texture.escape( 'label' ) %></div>",
                "        <% if ( texture.get( 'value' ) !== \"\" ) { %>",
                '        <div class="texture__actions">',
                '           <a class="button btn-danger btn-medium action delete" alt="delete" href="#" data-action="delete-texture">Delete</a>',
                "        </div>",
                "        <% } %>",
                "    </div>",
                "<% } ); %>",
              ].join("\n")
            )({ textures: e || this.options.collection });
          },
          constructor: function () {
            if (
              (L.Z.apply(this, arguments),
              this.initializeLoader(),
              this.listenTo(
                this.options.collection,
                "remove reset change",
                function () {
                  window.requestAnimationFrame(
                    function () {
                      this.renderContent(), this.updateUnusedTexturesCount();
                    }.bind(this)
                  );
                }.bind(this)
              ),
              this.listenTo(
                this.options.collection,
                "add",
                function (e) {
                  this.clearFilter(),
                    this.renderContent(),
                    this.scrollToIndex(e.collection.indexOf(e)),
                    this.updateUnusedTexturesCount(),
                    this.decrementLoader();
                }.bind(this)
              ),
              this.listenTo(
                this.options.collection,
                "duplicate",
                function () {
                  this.clearFilter(),
                    this.renderContent(),
                    this.updateUnusedTexturesCount(),
                    this.decrementLoader();
                }.bind(this)
              ),
              "" !== $ &&
                (this.$('.filter [name="filter"]').val($),
                this._filterTexture()),
              0 === this.options.collection.length)
            ) {
              var e = this.$(".upload-input");
              setTimeout(e.trigger.bind(e, "click"));
            }
            this.initializeDragAndDrop({ dropbox: ".texture-popup" });
          },
          delegateEvents: function () {
            L.Z.prototype.delegateEvents.apply(this, arguments),
              this.delegateDragAndDrop();
          },
          undelegateEvents: function () {
            L.Z.prototype.undelegateEvents.apply(this, arguments),
              this.undelegateDragAndDrop();
          },
          onDrop: function (e) {
            var t = this.getDragAndDropDropbox();
            e.preventDefault(),
              (e = e.originalEvent ? e.originalEvent : e),
              t.removeClass("file-upload-drag accepting");
            var i = e.dataTransfer.files;
            a()(e.target).hasClass(this.className) &&
              i &&
              i.length &&
              this.options.uploadTextures(i);
          },
          initializeLoader: function () {
            (this.pendingTextures = 0),
              this.$(".loader").hide(),
              this.listenTo(
                this.options.imageWidget,
                "uploadSelectEvent",
                this.incrementLoader,
                this
              );
          },
          incrementLoader: function () {
            this.pendingTextures++,
              this.$(".loader").toggle(this.pendingTextures > 0);
          },
          decrementLoader: function () {
            this.pendingTextures--,
              this.$(".loader").toggle(this.pendingTextures > 0);
          },
          renderContent: function () {
            this.$(".textures").html((0, N.Z)(this, "textures"));
          },
          onUnusedTexturesChange: function (e, t) {
            this.$('[data-action="delete-unused"]').prop("disabled", t <= 0);
          },
          scrollToIndex: function (e) {
            var t = this.$(".textures"),
              i = (e / this.options.collection.length) * t.prop("scrollHeight");
            t.scrollTop(i);
          },
          selectTextureEvent: function (e) {
            this.options.model.set(
              this.options.name,
              a()(e.currentTarget).parents(".texture").attr("data-value")
            ),
              this.close();
          },
          findTextureReferences: function (e) {
            return new G(
              function (t) {
                var i = [];
                (0, D.Z)(
                  this.options.materials.attributes,
                  function (t) {
                    (0, D.Z)(t.getChannels(), function (o) {
                      var n = o.getTextureModel();
                      n &&
                        n.getImageModel().get("uid") === e &&
                        i.push({ channel: o, material: t });
                    });
                  }.bind(this)
                ),
                  t(i);
              }.bind(this)
            );
          },
          removeTextureReferences: function (e) {
            return new G(function (t) {
              e.forEach(function (e) {
                e.channel.setColor
                  ? e.channel.setColor([1, 1, 1])
                  : e.channel.setTextureModel(void 0);
              }),
                t(e);
            });
          },
          confirmTextureDeletion: function (e) {
            return new G(
              function (t, i) {
                var o = (0, B.Z)(e, function (e) {
                  return e.channel.shouldDisplayGUIWarningOnDeletion();
                });
                if (o.length) {
                  var n = (0, I.Z)(
                      o,
                      function (e) {
                        return {
                          materialName:
                            e.material.escape("name") || "Unnamed material",
                          channelName:
                            e.channel.escape("displayName") ||
                            "Unnamed channel",
                        };
                      }.bind(this)
                    ),
                    a =
                      "<p>This texture is still used in the following materials:</p><ul>" +
                      (0, E.Z)((0, I.Z)(n, "materialName")).map(function (e) {
                        var t = n
                          .filter(function (t) {
                            return t.materialName === e;
                          })
                          .map(function (e) {
                            return e.channelName;
                          })
                          .map(function (e) {
                            return "<li>" + e + "</li>";
                          })
                          .join("\n");
                        return "<li><b>" + e + "</b></li><ul>" + t + "</ul>";
                      }) +
                      "</ul><p>Texture will be permanently deleted after saving.</p>",
                    r = new (h.Z.extend({
                      events: {
                        "reset form": "cancel",
                        "submit form": "continue",
                      },
                    }))({
                      title: "Delete texture?",
                      text: a,
                      safe: !0,
                      popupClass: "texture-deletion",
                      buttons: { ok: !0, okLabel: "Delete", cancel: !0 },
                    });
                  r.open().then(
                    function () {
                      r.close(), t(e);
                    },
                    function () {
                      r.close(), i("User cancelled delete.");
                    }
                  );
                } else t(e);
              }.bind(this)
            );
          },
          confirmUnusedTexturesDeletion: function (e) {
            return new G(
              function (t, i) {
                var o =
                    "<p>Delete unused textures - Are you sure you want to delete the following textures:</p><ul>" +
                    e
                      .map(function (e) {
                        return e.escape("label");
                      })
                      .map(function (e) {
                        return "<li><b>" + e + "</b></li>";
                      })
                      .join("\n") +
                    "</ul><p>Textures will be permanently deleted after saving.</p>",
                  n = new (h.Z.extend({
                    events: {
                      "reset form": "cancel",
                      "submit form": "continue",
                    },
                  }))({
                    title: "Delete unused textures?",
                    text: o,
                    safe: !0,
                    popupClass: "texture-deletion",
                    buttons: { ok: !0, okLabel: "Delete", cancel: !0 },
                  });
                n.open().then(
                  function () {
                    n.close(), t(e);
                  },
                  function () {
                    n.close(), i("User cancelled delete.");
                  }
                );
              }.bind(this)
            );
          },
          updateUnusedTexturesCount: function () {
            return this.gettingUnusedTextureIds().then(
              function (e) {
                return this.model.set("unusedTextures", e.length), e.length;
              }.bind(this)
            );
          },
          gettingUnusedTextureIds: function () {
            var e = this.options.collection.models
              .filter(function (e) {
                return "None" !== e.get("label");
              })
              .map(function (e) {
                return e.get("value");
              })
              .map(
                function (e) {
                  return this.findTextureReferences(e).then(function (t) {
                    return { id: e, references: t };
                  });
                }.bind(this)
              );
            return G.all(e).then(function (e) {
              return e
                .filter(function (e) {
                  return 0 === e.references.length;
                })
                .map(function (e) {
                  return e.id;
                });
            });
          },
          deleteUnusedTextureEvent: function (e) {
            e.preventDefault(),
              this.gettingUnusedTextureIds()
                .then(
                  function (e) {
                    return this.options.collection.filter(function (t) {
                      return -1 !== e.indexOf(t.get("value"));
                    });
                  }.bind(this)
                )
                .then(this.confirmUnusedTexturesDeletion.bind(this))
                .then(
                  function (e) {
                    e.forEach(this.deleteTexture.bind(this));
                  }.bind(this)
                )
                .catch(console.log);
          },
          deleteTextureEvent: function (e) {
            e.preventDefault();
            var t = a()(e.target).closest(".texture").data("value"),
              i = this.options.collection.findWhere({ value: t });
            return (
              this.findTextureReferences(t)
                .then(this.confirmTextureDeletion.bind(this))
                .then(this.removeTextureReferences)
                .then(
                  function () {
                    this.deleteTexture(i), this.filterTexture();
                  }.bind(this)
                )
                .catch(console.log),
              !1
            );
          },
          deleteTexture: function (e) {
            var t = e.get("value").slice();
            e.destroy(),
              -1 === t.indexOf("tmp_") &&
                this.options.materials._textureTrashbin.push(t),
              this.updateUnusedTexturesCount();
          },
        });
        var z = i("8AlU");
        const U = s.Z.extend({
          el: [
            '<div class="widget tabbed-widget">',
            '          <div class="widget-wrapper">',
            '              <ul class="tabs"></ul>',
            '              <div class="panels"></div>',
            "          </div>",
            "      </div>",
          ].join(""),
          events: (0, o.Z)({}, s.Z.prototype.events, {
            "click [data-tab]": "selectEvent",
            "touchstart [data-tab]": "selectEvent",
          }),
          constructor: function (e, t) {
            (t = (0, m.Z)(t || {}, {
              model: new (v().Model)(),
              name: "value",
            })),
              s.Z.prototype.constructor.call(this, e, t),
              void 0 === this.get() && this.set(null),
              (this._index = 0),
              (this._panels = []);
          },
          createPanel: function (e, t) {
            void 0 === t && (t = {});
            var i = t.name || "panel" + ++this._index;
            if (-1 !== this._panels.indexOf(i))
              throw new Error("Duplicate panel name");
            this._panels.push(i);
            var o = a()('<li class="tab"/>')
                .attr("data-tab", i)
                .append(a()("<a/>").text(e))
                .appendTo(this.$(".tabs")),
              n = a()('<div class="panel"/>')
                .attr("data-panel", i)
                .appendTo(this.$(".panels")),
              r = z.Z.reify(this, t);
            return (
              r.$el.appendTo(n),
              (r.removePanel = function () {
                o.remove(), n.remove();
                var e = this._panels.indexOf(i);
                this._panels.splice(e, 1),
                  this.get() === i &&
                    (e === this._panels.length &&
                      (this._panels.length > 0 ? (e -= 1) : (e = null)),
                    null !== e ? this.set(this._panels[e]) : this.set(null));
              }.bind(this)),
              null === this.get() ? this.set(i) : this.render(),
              r
            );
          },
          render: function () {
            var e = this.get();
            this.$("[data-tab]").each(function () {
              a()(this).toggleClass("active", a()(this).attr("data-tab") === e);
            }),
              this.$("[data-panel]").each(function () {
                a()(this).toggleClass(
                  "active",
                  a()(this).attr("data-panel") === e
                );
              });
          },
          selectEvent: function (e) {
            e.preventDefault(),
              this.change(a()(e.currentTarget).attr("data-tab"));
          },
        });
        var j = i("k8gV"),
          V = i("0WSC"),
          Y = i("/K0U"),
          X = function (e) {
            return (
              e instanceof HTMLImageElement || e instanceof HTMLCanvasElement
            );
          };
        const q = s.Z.extend({
          mixins: [
            O.Z,
            (0, A.Z)({
              fileTypes: P.Z.textureFileTypes,
              maxFileSize: P.Z.textureMaxFileSize,
            }),
          ],
          el: [
            '<div class="widget image-widget">',
            '    <div class="widget-wrapper">',
            '        <a class="display toggle">',
            '            <canvas class="preview"></canvas>',
            "        </a>",
            "    </div>",
            '    <div class="selectbox">',
            "    </div>",
            "</div>",
          ].join(""),
          events: (0, o.Z)({}, s.Z.prototype.events, {
            "click .toggle": "toggleEvent",
            "click .open": "openEvent",
          }),
          constructor: function (e, t) {
            var i, o;
            if (
              ((this.globalCloseEvent_ = this.globalCloseEvent.bind(this)),
              (this.textureFileTypes = P.Z.textureFileTypes),
              (t = (0, m.Z)(t || {}, {
                model: new (v().Model)(),
                name: "value",
                allowColor: !0,
                allowTexture: !0,
                textureFormatOptions: null,
                textureFilteringOptions: null,
                collection: new (v().Collection)(),
              })),
              s.Z.prototype.constructor.call(this, e, t),
              this.options.allowColor && this.options.allowTexture)
            ) {
              var n = U.reify(this);
              this.$(".selectbox").append(n.$el),
                (o = n.createPanel("Texture")),
                (i = n.createPanel("Color")),
                (this._tabbed = n);
            } else
              this.options.allowColor &&
                ((i = z.Z.reify(this)), this.$(".selectbox").append(i.$el)),
                this.options.allowTexture &&
                  ((o = z.Z.reify(this)), this.$(".selectbox").append(o.$el));
            this.options.allowColor && this.createColorWidgets(i),
              this.options.allowTexture && this.createTextureWidgets(o);
          },
          initialize: function () {
            this.initializeDragAndDrop({
              target: window,
              dropbox: function () {
                var e = this.$el.parent().find(".dropbox");
                return this._uninsertedElement
                  ? this._uninsertedElement
                  : e.length
                  ? e
                  : ((this._uninsertedElement = a()(
                      '<div class="dropbox"></div>'
                    )),
                    setTimeout(
                      function () {
                        this.$el.after(this._uninsertedElement);
                      }.bind(this),
                      500
                    ),
                    this._uninsertedElement);
              },
            }),
              (this.canvas =
                this.$(".preview")[0] || document.createElement("canvas")),
              (this.context = this.canvas.getContext("2d")),
              void 0 === this.get() && this.set({ r: 1, g: 1, b: 1 }),
              s.Z.prototype.initialize.apply(this, arguments),
              a()(window).on("mouseleave", this.onDragLeave);
          },
          remove: function () {
            a()(window).on("off", this.onDragLeave),
              v().View.prototype.remove.apply(this, arguments);
          },
          createColorWidgets: function (e) {
            this.colorWidget = e.createWidget("Color");
            var t = this.get();
            X(t) || this.colorWidget.set(t),
              this.colorWidget.on("change", this.applyColorEvent, this);
          },
          createTextureWidgets: function (e) {
            var t = new Y.Z(),
              i = function () {
                var e = this.options.collection.length > 0;
                t.set({ hasTextures: e, hasNoTextures: !e });
              }.bind(this);
            i(),
              t.listenTo(this.options.collection, "add remove", i),
              this.createTextureWidgetsEmptyState(e, t),
              this.createTextureWidgetsRegularState(e, t);
          },
          _createTextureWidgetsState: function (e, t, i, o) {
            var n = e.createWidget("Hyde", { model: t, name: i });
            return (
              n
                .createWidget("Button", { text: o })
                .model.on("click", this.openTexturesPopup.bind(this)),
              n
            );
          },
          createTextureWidgetsEmptyState: function (e, t) {
            this._createTextureWidgetsState(
              e,
              t,
              "hasNoTextures",
              "Import textures"
            );
          },
          createTextureWidgetsRegularState: function (e, t) {
            var i = this._createTextureWidgetsState(
              e,
              t,
              "hasTextures",
              "Manage textures"
            );
            (this.textureWidget = i.createWidget("Select", {
              placeholder: "Choose texture",
              options: this.options.collection,
              image: "image",
            })),
              this.textureWidget.model.on(
                "change",
                this.applyTextureEvent,
                this
              ),
              this.model.on("change", this.updateTextureEvent, this),
              this.options.collection.on("add", this.updateTextureEvent, this),
              this.updateTextureEvent();
            var o = e.createWidget("Hyde", {
              model: this.textureWidget.model,
              name: "value",
            });
            this.createTextureSettingFiltering(o),
              this.createTextureSettingFormat(o),
              this.createTextureSettingWrapS(o),
              this.createTextureSettingWrapT(o),
              this.createTextureUvTransform(o);
          },
          createTextureUvTransform: function (e) {
            var t = e.createWidget("Group", {
                label: "UV Transformations",
                model: this.model,
                name: "uvTransforms.enable",
                id: "uvTransformsWidget",
                opened: !1,
              }),
              i = t.createWidget("Horizontal");
            i.createWidget("Label", {
              content: "Scale",
              classname: "setting linkGroup",
            }),
              this.model.set(this.field("uvTransformScaleLinked"), !1),
              i.createWidget("Checkbox", {
                model: this.model,
                name: this.field("uvTransformScaleLinked"),
                label: "Link",
              });
            var o = 128,
              n = V.Z.createScaleXPowOffset(256, 3, 1),
              a = new Y.Z({
                proxyUvTransformScaleX: this.model.get(
                  this.field("uvTransformScaleX")
                ),
                proxyUvTransformScaleY: this.model.get(
                  this.field("uvTransformScaleY")
                ),
              }),
              r = t.createWidget("Horizontal");
            r.createWidget("Label", { content: "U" }),
              r.createWidget("NumberedSlider", {
                model: a,
                name: "proxyUvTransformScaleX",
                minimum: n.modelToWidget(-128),
                maximum: n.modelToWidget(o),
                step: 0.01,
                numberOptions: {
                  renderValue: n.widgetToModel,
                  inputValue: n.modelToWidget,
                  decimals: 2,
                },
              });
            var s = t.createWidget("Horizontal");
            s.createWidget("Label", { content: "V" }),
              s.createWidget("NumberedSlider", {
                model: a,
                name: "proxyUvTransformScaleY",
                minimum: n.modelToWidget(-128),
                maximum: n.modelToWidget(o),
                step: 0.01,
                numberOptions: {
                  renderValue: n.widgetToModel,
                  inputValue: n.modelToWidget,
                  decimals: 2,
                },
              }),
              new j.Z(
                "proxyUvTransformScaleX",
                this.field("uvTransformScaleX"),
                a,
                this.model,
                n
              ),
              new j.Z(
                "proxyUvTransformScaleY",
                this.field("uvTransformScaleY"),
                a,
                this.model,
                n
              ),
              t.createWidget("Label", { content: "Rotation" });
            var l = t.createWidget("Horizontal");
            l.createWidget("Label", {
              content: "",
              className: "fa-regular rotation-label",
            }),
              l.createWidget("NumberedSlider", {
                model: this.model,
                name: this.field("uvTransformRotation"),
                numberOptions: {
                  renderValue: function (e) {
                    return (180 * e) / Math.PI;
                  },
                  inputValue: function (e) {
                    return (e * Math.PI) / 180;
                  },
                  decimals: 1,
                  unit: "°",
                },
                minimum: -2 * Math.PI,
                maximum: 2 * Math.PI,
                step: 0.1,
              });
            var d = t.createWidget("Horizontal");
            d.createWidget("Label", {
              content: "Offset",
              classname: "setting",
            }),
              this.model.set(this.field("uvTransformOffsetLinked"), !1),
              d.createWidget("Checkbox", {
                model: this.model,
                name: this.field("uvTransformOffsetLinked"),
                label: "Link",
              });
            var c = t.createWidget("Horizontal");
            c.createWidget("Label", { content: "U" }),
              c.createWidget("NumberedSlider", {
                model: this.model,
                name: this.field("uvTransformOffsetX"),
                minimum: -1,
                maximum: 1,
                step: 0.01,
              });
            var u = t.createWidget("Horizontal");
            u.createWidget("Label", { content: "V" }),
              u.createWidget("NumberedSlider", {
                model: this.model,
                name: this.field("uvTransformOffsetY"),
                minimum: -1,
                maximum: 1,
                step: 0.01,
              }),
              i.$el.addClass("linkingGroup"),
              d.$el.addClass("linkingGroup");
          },
          createTextureSettingFiltering: function (e) {
            var t = this.options.textureFilteringOptions || {
              LINEAR_MIPMAP_LINEAR: "Trilinear (best)",
              LINEAR: "Bilinear",
              NEAREST: "Nearest",
            };
            if (0 !== Object.keys(t).length) {
              var i = e.createWidget("Horizontal");
              i.createWidget("Label", {
                content: "Filtering:",
                classname: "setting",
              }),
                i.createWidget("Select", {
                  model: this.model,
                  name: this.field("minFilter"),
                  options: t,
                });
            }
          },
          createTextureSettingFormat: function (e) {
            var t = this.options.textureFormatOptions || {
              RGB: "RGB",
              ALPHA: "Alpha",
              LUMINANCE: "Luminance",
            };
            if (0 !== Object.keys(t).length) {
              var i = e.createWidget("Horizontal");
              i.createWidget("Label", {
                content: "Format:",
                classname: "setting",
              }),
                i.createWidget("Select", {
                  model: this.model,
                  name: this.field("internalFormat"),
                  options: t,
                });
            }
          },
          createTextureSettingWrapS: function (e) {
            this._createTextureSettingWrap(e, "wrapS", "Wrap S:");
          },
          createTextureSettingWrapT: function (e) {
            this._createTextureSettingWrap(e, "wrapT", "Wrap T:");
          },
          _createTextureSettingWrap: function (e, t, i) {
            var o = e.createWidget("Horizontal");
            o.createWidget("Label", { content: i, classname: "setting" }),
              o.createWidget("Select", {
                model: this.model,
                name: this.field(t),
                options: {
                  REPEAT: "Repeat",
                  MIRRORED_REPEAT: "Mirror",
                  CLAMP_TO_EDGE: "Clamp",
                },
              });
          },
          openTexturesPopup: function () {
            return new H(this, {
              model: this.textureWidget.options.model,
              name: this.textureWidget.options.name,
              materials: this.model.get("materials"),
              isPBR: this.model.get("isPBR"),
              imageWidget: this.model,
              uploadTextures: this.uploadTextures.bind(this),
              collection: this.options.collection,
            });
          },
          onDragEnter: function (e) {
            if (!this.isNotDraggingFile(e)) {
              e.preventDefault();
              var t = this.getDragAndDropDropbox();
              if (this.onDragViewer(e))
                return t.removeClass("file-upload-drag");
              a()(".texture-popup").is(":visible")
                ? t.removeClass("file-upload-drag")
                : t.addClass("file-upload-drag");
            }
          },
          onDragOver: function (e) {
            if (!this.isNotDraggingFile(e)) {
              var t = this.getDragAndDropDropbox();
              if (a()(".texture-popup").is(":visible"))
                return t.removeClass("file-upload-drag");
              if ((e.preventDefault(), !this.onDragViewer(e))) {
                var i = a()(e.target);
                i.hasClass("dropbox")
                  ? i[0] === t[0]
                    ? t.addClass("file-upload-drag accepting")
                    : t.removeClass("file-upload-drag accepting")
                  : t.addClass("file-upload-drag");
              }
            }
          },
          onDragEnd: function (e) {
            e.preventDefault();
            var t = this.getDragAndDropDropbox();
            a()(e.target).hasClass("dropbox") &&
              t.removeClass("file-upload-drag accepting");
          },
          onDragLeave: function (e) {
            var t = a()(e.target),
              i =
                (t.hasClass("panel") && t.hasClass("active")) ||
                t.hasClass("header"),
              o = "mouseleave" === e.type;
            if (i || o)
              return this.getDragAndDropDropbox().removeClass(
                "file-upload-drag accepting"
              );
          },
          onDrop: function (e) {
            var t = this.getDragAndDropDropbox();
            e.preventDefault(),
              (e = e.originalEvent ? e.originalEvent : e),
              t.removeClass("file-upload-drag accepting");
            var i = e.dataTransfer.files;
            e.target === t[0] && i && i.length && this.uploadTextures(i);
          },
          uploadTextures: function (e) {
            for (var t = [], i = e.length, o = 0; o < i; o++) {
              var n = e[o],
                a = this.validateFile(n, !0);
              a ? t.push(a) : this.uploadTexture(n);
            }
            if (0 !== t.length) {
              var r = (0, W.Z)(t)
                  .map(function (e) {
                    return e.message;
                  })
                  .join(""),
                s = (0, E.Z)(
                  (0, W.Z)(t).map(function (e) {
                    return e.type;
                  })
                );
              -1 !== s.indexOf("maxFileSize") &&
                (r = r.concat(this.getExtraErrorInformation("maxFileSize")));
              var l = new h.Z({
                title: "Invalid image file",
                text: r,
                safe: !0,
                buttons: { ok: !0 },
              });
              l.open().then(function () {
                l.close();
              });
            }
          },
          uploadTexture: function (e) {
            var t;
            this.model.trigger("uploadSelectEvent", e);
            var i = function (e) {
              e.get("value") && this.collection.off("add", i),
                this.collection.off("duplicate", t),
                this.options.allowTexture && this.textureWidget
                  ? this.textureWidget.set(e.get("value"))
                  : this.set(e);
            }.bind(this);
            (t = function (e) {
              this.collection.off("add", i),
                this.collection.off("duplicate", t),
                this.options.allowTexture && this.textureWidget
                  ? this.textureWidget.set(e.get("uid"))
                  : this.set(e);
            }.bind(this)),
              this.collection.on("add", i),
              this.collection.on("duplicate", t);
          },
          delegateEvents: function () {
            s.Z.prototype.delegateEvents.apply(this, arguments),
              a()(document).on("mousedown", this.globalCloseEvent_),
              this.delegateDragAndDrop();
          },
          undelegateEvents: function () {
            s.Z.prototype.undelegateEvents.apply(this, arguments),
              a()(document).off("mousedown", this.globalCloseEvent_),
              this.undelegateDragAndDrop();
          },
          render: function () {
            s.Z.prototype.render.apply(this, arguments),
              this.options.dragAndDrop && this.setDragAndDropElements();
            var e = this.get();
            X(e)
              ? ((this.canvas.width = e.width),
                (this.canvas.height = e.height),
                this.context.clearRect(
                  0,
                  0,
                  this.canvas.width,
                  this.canvas.height
                ),
                this.context.drawImage(e, 0, 0))
              : ((this.canvas.width = this.canvas.height = 1),
                (this.context.fillStyle =
                  "rgb(" +
                  Math.round(255 * e.r) +
                  "," +
                  Math.round(255 * e.g) +
                  "," +
                  Math.round(255 * e.b) +
                  ")"),
                this.context.fillRect(0, 0, 1, 1),
                this.colorWidget && this.colorWidget.set(e));
          },
          toggleEvent: function (e) {
            if (this.$el.hasClass("opened")) this.closeEvent(e);
            else {
              if (this._tabbed) {
                var t = this.get();
                X(t)
                  ? this._tabbed.change("panel1")
                  : this._tabbed.change("panel2");
              }
              this.openEvent(e);
            }
          },
          openEvent: function (e) {
            e.preventDefault(),
              e.stopPropagation(),
              this.$el.addClass("opened");
          },
          closeEvent: function () {
            this.$el.removeClass("opened");
          },
          globalCloseEvent: function (e) {
            a().contains(this.el, e.target) || this.closeEvent(e);
          },
          applyColorEvent: function () {
            this.change(this.colorWidget.get());
          },
          applyTextureEvent: function () {
            var e = this.textureWidget.get(),
              t = this.options.collection.findWhere({ value: e });
            if (t) {
              var i = t.get("imageData"),
                o = (this.flag = {}),
                n = function () {
                  o === this.flag &&
                    (i.imageModel
                      ? this.change(i)
                      : this.change({ r: 1, g: 1, b: 1 }));
                }.bind(this);
              i.complete
                ? n()
                : (console.error("Possible asynchronous problem image set."),
                  i.addEventListener("load", n));
            }
          },
          updateTextureEvent: function () {
            var e = this.get();
            if (e instanceof Image) {
              var t = this.options.collection.find(function (t) {
                return (
                  t.get("image") === e.src || t.get("imageData").src === e.src
                );
              });
              this.textureWidget.set(t ? t.get("value") : null);
            } else this.textureWidget.set(null);
          },
          onDragViewer: function (e) {
            return (
              "CANVAS" === e.target.nodeName &&
              void 0 !== e.target.getAttribute("data-modeluid")
            );
          },
        });
        var K = function (e) {
            return (
              e instanceof HTMLImageElement || e instanceof HTMLCanvasElement
            );
          },
          Q = {
            standard: function (e, t, i, o) {
              K(i)
                ? (t.drawImage(
                    i,
                    0,
                    0,
                    i.width,
                    i.height,
                    0,
                    0,
                    e.width,
                    e.height
                  ),
                  (t.fillStyle = "rgba(0, 0, 0, " + (1 - o) + ")"),
                  t.fillRect(0, 0, e.width, e.height))
                : ((t.fillStyle =
                    "rgb(" +
                    [i.r, i.g, i.b]
                      .map(function (e) {
                        return Math.round(255 * e * o);
                      })
                      .join(",") +
                    ")"),
                  t.fillRect(0, 0, e.width, e.height));
            },
            glossiness: function (e, t, i, o) {
              if (((o /= 1e4), i instanceof Image))
                return Q.standard(e, t, i, o);
              var n = 1 - o,
                a = 0.4 + 0.5 * o,
                r = (Math.min(e.width, e.height) / 2) * n;
              (t.fillStyle = "#000000"),
                t.fillRect(0, 0, e.width, e.height),
                t.beginPath(),
                t.arc(e.width / 2, e.height / 2, r, 0, 2 * Math.PI, !0),
                (t.fillStyle =
                  "rgb(" +
                  [i.r, i.g, i.b]
                    .map(function (e) {
                      return Math.round(255 * e * a);
                    })
                    .join(",") +
                  ")"),
                t.fill();
            },
            opacity: function (e, t, i, o) {
              var n = (5 * e.width) / a()(e).width(),
                r = (5 * e.height) / a()(e).height(),
                s = Math.ceil(e.width / n),
                l = Math.ceil(e.height / r);
              (t.fillStyle = "#FFFFFF"),
                t.fillRect(0, 0, e.width, e.height),
                (t.fillStyle = "#D0D0D0");
              for (var d = 0; d < l; ++d)
                for (var c = 0; c < s; ++c)
                  (c + d) % 2 == 0 && t.fillRect(c * n, d * r, n, r);
              K(i)
                ? ((t.globalAlpha = o),
                  t.drawImage(
                    i,
                    0,
                    0,
                    i.width,
                    i.height,
                    0,
                    0,
                    e.width,
                    e.height
                  ),
                  (t.globalAlpha = 1))
                : ((t.fillStyle = "rgba(255, 255, 255, " + o + ")"),
                  t.fillRect(0, 0, e.width, e.height));
            },
          };
        const J = s.Z.extend({
            el: [
              '<div class="widget image-widget factored-image-widget">',
              '    <div class="widget-wrapper">',
              '        <a class="display toggle">',
              '            <canvas class="false-preview"></canvas>',
              "        </a>",
              "    </div>",
              '    <div class="selectbox">',
              "    </div>",
              "</div>",
            ].join(""),
            constructor: function (e, t) {
              (t = (0, m.Z)(t || {}, {
                model: new (v().Model)(),
                name: "value",
                maxWidth: 1 / 0,
                maxHeight: 1 / 0,
                painter: "standard",
              })),
                s.Z.prototype.constructor.call(this, e, t);
            },
            initialize: function () {
              (this.canvas =
                this.$(".false-preview")[0] ||
                document.createElement("canvas")),
                (this.context = this.canvas.getContext("2d")),
                "string" == typeof this.options.painter &&
                  (this.options.painter = Q[this.options.painter]),
                (this.internalCanvas = document.createElement("canvas")),
                (this.internalContext = this.internalCanvas.getContext("2d")),
                (this.image = q.reify(
                  this,
                  (0, m.Z)({}, this.options.imageOptions, {
                    el: this.$el,
                    model: this.model,
                    name: this.field("original"),
                  })
                )),
                void 0 === this.get("factor") && this.set("factor", 1),
                void 0 === this.get() && this.set({ r: 1, g: 1, b: 1 }),
                s.Z.prototype.initialize.apply(this, arguments);
            },
            render: function () {
              s.Z.prototype.render.apply(this, arguments);
              var e = this.get("original"),
                t = this.get("factor");
              (this.canvas.width = a()(this.canvas).width() || 24),
                (this.canvas.height = a()(this.canvas).height() || 24),
                this.options.painter(this.canvas, this.context, e, t);
            },
          }),
          ee = x.extend({
            mixins: [O.Z],
            el: [
              '<div class="widget upload-button-widget">',
              '          <input type="file" class="file">',
              '          <button class="button btn-primary-inverted">',
              "          </button>",
              "      </div>",
            ].join(""),
            events: (0, o.Z)({}, x.prototype.events, {
              "change .file": "changeEvent",
            }),
            initialize: function (e) {
              (e = (0, m.Z)(
                e || {},
                {
                  model: new (v().Model)(),
                  selectEvent: "uploadSelectEvent",
                  cancelEvent: "uploadCancelEvent",
                  text: "",
                  action: null,
                  accept: "",
                },
                e
              )),
                x.prototype.initialize.call(this, e),
                this.$el.find(".button").text(this.options.text),
                this.options.action &&
                  this.$el
                    .find(".button")
                    .attr("data-action", this.options.action),
                this.options.accept &&
                  ((this.options.accept = (
                    "." + this.options.accept.join(",.")
                  ).replace(/\.\./gi, ".")),
                  this.$el.find(".file").attr("accept", this.options.accept)),
                this.initializeDragAndDrop();
            },
            onFilesDrop: function (e) {
              this.changeEvent({ target: { files: e } });
            },
            clickEvent: function (e) {
              e.preventDefault(), this.$el.find(".file").trigger("click");
            },
            changeEvent: function (e) {
              e.target.files[0]
                ? this.options.selectEvent &&
                  this.options.model.trigger(
                    this.options.selectEvent,
                    e.target.files[0]
                  )
                : this.options.cancelEvent &&
                  this.options.model.trigger(this.options.cancelEvent, this),
                this.$el.find(".file").val(null);
            },
          });
        var te = i("qcpF"),
          ie = i("ypYT");
        const oe = ie.Z.extend({
          el: [
            '<div class="widget layout-widget horizontal-widget">',
            '          <div class="widget-wrapper">',
            '              <div class="children"></div>',
            "          </div>",
            "      </div>",
          ].join(""),
        });
        var ne = i("Sbzs");
        const ae = z.Z.extend({
            el: [
              '<div class="widget layout-widget vertical-widget hyde-widget">',
              '          <div class="widget-wrapper">',
              '              <div class="children"></div>',
              "          </div>",
              "      </div>",
            ].join(""),
            constructor: function (e, t) {
              (t = (0, m.Z)(t || {}, {
                model: new (v().Model)(),
                name: "value",
                transition: !1,
                transform: null,
              })),
                z.Z.prototype.constructor.call(this, e, t),
                this.options.transition &&
                  (this.$el.addClass("has-transition"),
                  this.$el.toggleClass("visible", Boolean(this.get())));
            },
            isEnabled: function () {
              return (0, ne.Z)(this.options.transform)
                ? Boolean(this.options.transform.call(this, this.get()))
                : Boolean(this.get());
            },
            render: function () {
              this.options.transition
                ? this.$el.toggleClass("visible", this.isEnabled())
                : this.$el.toggle(this.isEnabled());
            },
          }),
          re = x.extend({
            el: [
              '<div class="widget iconbutton-widget">',
              '   <i class="icon fa-regular">',
              "   </i>",
              "</div>",
            ].join(""),
            events: (0, o.Z)({}, x.prototype.events, {
              "click .icon": "clickEvent",
            }),
            initialize: function (e) {
              if (
                ((e = (0, m.Z)(
                  e || {},
                  {
                    model: new (v().Model)(),
                    event: "click",
                    text: "",
                    icon: "",
                    tooltipDirection: "tooltip-down",
                  },
                  e
                )),
                x.prototype.initialize.call(this, e),
                "" !== this.options.icon &&
                  this.$el.find(".icon").addClass("fa-" + this.options.icon),
                "" !== this.options.text)
              ) {
                var t = a()(
                  '<div class="tooltip ' +
                    this.options.tooltipDirection +
                    '"></div>'
                );
                t.text(this.options.text),
                  this.$el.find(".icon").addClass("help").append(t);
              }
            },
          }),
          se = s.Z.extend({
            el: [
              '<div class="widget imagepreview-widget">',
              '   <img crossorigin="anonymous" class="image" />',
              "</div>",
            ].join(""),
            initialize: function (e) {
              (e = (0, m.Z)(
                e || {},
                {
                  model: new (v().Model)(),
                  name: "value",
                  width: "",
                  height: "",
                },
                e
              )),
                s.Z.prototype.initialize.call(this, e),
                "" !== this.options.height &&
                  this.$(".image").css("max-height", this.options.height),
                "" !== this.options.width &&
                  this.$(".image").css("width", this.options.width);
            },
            render: function () {
              var e = this.get();
              e && this.$(".image").attr("src", e);
            },
          });
        var le = i("1dkX");
        const de = le.Z.extend({
          events: (0, o.Z)({}, le.Z.prototype.events, {
            "mousewheel .slide": "mousewheelEvent",
            "mouseleave .slide": "mouseleaveEvent",
          }),
          constructor: function (e, t) {
            (t = (0, m.Z)(
              t || {},
              {
                mouseDown: !1,
                value: 0,
                initialValue: 0,
                increment: 0,
                pointerValue: 0,
                initialPointerValue: 0,
                isLocked: !1,
              },
              t
            )),
              (this._onPointerLockChange = this.onPointerLockChange.bind(this)),
              le.Z.prototype.constructor.call(this, e, t),
              this.$el.addClass("infinite-slider-widget"),
              (this.lockElement = this.el.querySelector(".slide")),
              this.on("change", this.render.bind(this));
          },
          _updateValue: function (e) {
            (this.options.value = e), this.change(e);
          },
          render: function () {
            var e = Math.floor(this.options.value - this.options.initialValue);
            this.$(".slide").css("background-position-x", e + "px"),
              this.options.isLocked
                ? ((this.options.pointerValue =
                    (this.options.initialPointerValue + e) % this.slideWidth),
                  this.options.pointerValue < 0 &&
                    (this.options.pointerValue += this.slideWidth))
                : (this.options.pointerValue =
                    this.options.initialPointerValue + e),
              this.$(".cursor").css({
                left: Math.floor(this.options.pointerValue) + "px",
              });
          },
          delegateEvents: function () {
            le.Z.prototype.delegateEvents.apply(this, arguments),
              a()(document).on("pointerlockchange", this._onPointerLockChange);
          },
          undelegateEvents: function () {
            le.Z.prototype.undelegateEvents.apply(this, arguments),
              a()(document).off("pointerlockchange", this._onPointerLockChange);
          },
          onPointerLockChange: function () {
            this.options.isLocked =
              document.pointerLockElement === this.lockElement;
          },
          startEvent: function (e) {
            if (
              (le.Z.prototype.startEvent.apply(this, arguments),
              this.lockElement.requestPointerLock)
            ) {
              this.lockElement.requestPointerLock();
              var t = this.$(".slide").offset();
              this.$(".cursor")
                .show()
                .css({
                  top: e.clientY - t.top + "px",
                  left: e.clientX - t.left + "px",
                }),
                (this.options.initialPointerValue = e.clientX - t.left),
                (this.options.pointerValue = e.clientX - t.left);
            } else
              (this.options.initialPointerValue = this.options.pointerValue =
                e.clientX),
                (this.options.mouseDown = !0),
                this.$(".slide").addClass("sliding");
            (this.slideWidth =
              this.$(".slide").width() - this.$(".cursor").width()),
              (this.options.initialValue = this.get()),
              this._updateValue(this.options.initialValue);
          },
          stopEvent: function () {
            le.Z.prototype.stopEvent.apply(this, arguments),
              this.lockElement.requestPointerLock
                ? (document.exitPointerLock(), this.$(".cursor").hide())
                : ((this.options.mouseDown = !1),
                  (this.options.increment = 0),
                  this.$(".slide").removeClass("sliding ")),
              this.$(".slide").removeClass("stopped");
          },
          moveEvent: function (e) {
            var t;
            if (this.options.isLocked) {
              var i = e.originalEvent.movementX;
              t = this.get() + i * this.options.step;
            } else
              this.options.mouseDown &&
                (e.preventDefault(),
                (this.options.increment =
                  e.clientX - this.options.pointerValue),
                (t = this.options.value + this.options.increment));
            void 0 === t || this.isValueLimit(t) || this._updateValue(t);
          },
          mousewheelEvent: function (e, t) {
            e.preventDefault();
            var i = this.options.value + (t > 0 ? 1 : -1) * this.options.step;
            this.isValueLimit(i) || this._updateValue(i);
          },
          mouseleaveEvent: function (e) {
            e.preventDefault(), this.$(".slide").removeClass("stopped");
          },
          isValueLimit: function (e) {
            return e <= this.options.minimum && !this.options.disableMinimum
              ? (this._updateValue(this.options.minimum),
                this.$(".slide").addClass("stopped"),
                !0)
              : e >= this.options.maximum && !this.options.disableMaximum
              ? (this._updateValue(this.options.maximum),
                this.$(".slide").addClass("stopped"),
                !0)
              : (this.$(".slide").removeClass("stopped"), !1);
          },
          selectEvent: function (e) {
            e.preventDefault();
          },
        });
        var ce = i("lotc");
        const ue = s.Z.extend({
            optionTypes: {
              model: ce.Z.model,
              name: ce.Z.string,
              content: ce.Z.string,
              className: ce.Z.string,
              textClassName: ce.Z.string,
              escape: ce.Z.bool,
            },
            el: [
              '<div class="widget label-widget">',
              '          <span class="text">',
              "          </span>",
              "      </div>",
            ].join(""),
            constructor: function (e, t) {
              (t = (0, m.Z)(
                t || {},
                {
                  model: new (v().Model)(),
                  name: "value",
                  content: void 0,
                  className: "",
                  textClassName: "",
                  escape: !0,
                },
                t
              )),
                s.Z.prototype.constructor.call(this, e, t),
                void 0 === this.get() && this.set(this.options.content),
                this.options.textClassName &&
                  this.$(".text").addClass(this.options.textClassName);
            },
            render: function () {
              this.$(".text")[this.options.escape ? "text" : "html"](
                this.get()
              );
            },
          }),
          he = oe.extend({
            el: [
              '<div class="widget layout-widget horizontal-widget numbered-slider-widget">',
              '          <div class="widget-wrapper">',
              '              <div class="children"></div>',
              "          </div>",
              "      </div>",
            ].join(""),
            initialize: function (e) {
              (e = (0, m.Z)(e || {}, {
                model: new (v().Model)(),
                name: "value",
                minimum: 0,
                maximum: 1,
                step: 0.01,
                unit: null,
                infinite: !1,
                disableMaximum: !1,
                disableMinimum: !1,
              })),
                oe.prototype.initialize.call(this, e),
                void 0 === this.get() && this.set(0);
              var t = {
                  model: this.model,
                  name: this.options.name,
                  minimum: this.options.minimum,
                  maximum: this.options.maximum,
                  step: this.options.step,
                  disableMaximum: this.options.disableMaximum,
                  disableMinimum: this.options.disableMinimum,
                },
                i = this.options.infinite ? "InfiniteSlider" : "Slider";
              (this.slider = this.createWidget(
                i,
                (0, o.Z)({}, t, this.options.sliderOptions)
              )),
                (this.number = this.createWidget(
                  "Number",
                  (0, o.Z)({}, t, this.options.numberOptions)
                )),
                this.options.unit &&
                  this.createWidget("Label", { label: this.options.unit });
            },
          }),
          ge = s.Z.extend({
            el: [
              '<div class="widget number-widget">',
              '          <div class="widget-wrapper">',
              '              <div class="decrease"><a></a></div>',
              '              <input class="value" />',
              '              <div class="increase"><a></a></div>',
              "          </div>",
              "      </div>",
            ].join(""),
            events: (0, o.Z)({}, s.Z.prototype.events, {
              "click .decrease": "decreaseEvent",
              "click .increase": "increaseEvent",
              "change .value:input": "changeEvent",
              "keydown .value:input": "keydownEvent",
              "mousewheel .value": "mousewheelEvent",
            }),
            constructor: function (e, t) {
              null ===
                (t = (0, m.Z)(t || {}, {
                  model: new (v().Model)(),
                  name: "value",
                  minimum: 0,
                  maximum: 1,
                  step: 0.01,
                  cycle: !1,
                  unit: "",
                  decimals: null,
                  renderValue: null,
                  inputValue: null,
                })).decimals &&
                (t.decimals = 1 + Math.floor(-Math.log10(t.step))),
                s.Z.prototype.constructor.call(this, e, t),
                void 0 === this.get() && this.set(0);
            },
            render: function () {
              var e = this.$(".value"),
                t = this.get();
              this.options.renderValue && (t = this.options.renderValue(t));
              var i = Math.pow(10, this.options.decimals),
                o = Math.round(t * i) / i + this.options.unit;
              e.is(":input") ? e.val(o) : e.text(o);
            },
            fixValue: function (e) {
              return e < this.options.minimum
                ? !!this.options.cycle &&
                    this.options.maximum -
                      ((this.options.minimum - e) %
                        (this.options.maximum - this.options.minimum))
                : e >= this.options.maximum
                ? this.options.cycle
                  ? this.options.minimum +
                    ((e - this.options.maximum) %
                      (this.options.maximum - this.options.minimum))
                  : !(e > this.options.maximum) && e
                : e;
            },
            add: function (e) {
              var t = this.get() / this.options.step,
                i = Math.round(t),
                o = this.fixValue(this.options.step * (i + e));
              !1 !== o && this.change(o);
            },
            increaseEvent: function (e) {
              e.preventDefault(), this.add(1);
            },
            decreaseEvent: function (e) {
              e.preventDefault(), this.add(-1);
            },
            changeEvent: function (e) {
              var t = a()(e.currentTarget).val(),
                i = t.match(/[^0-9.]*$/)[0],
                o = t.substr(0, t.length - i.length);
              if (
                ((i = i.trim()),
                (o = o.trim()),
                i.length && i !== this.options.unit)
              )
                this.render();
              else {
                if (
                  ((t = Number(o)),
                  this.options.inputValue && (t = this.options.inputValue(t)),
                  t > this.options.maximum)
                )
                  t = this.options.maximum;
                else if (t < this.options.minimum) t = this.options.minimum;
                else if (isNaN(t)) return;
                this.change(t), this.render();
              }
            },
            keydownEvent: function (e) {
              switch (e.keyCode) {
                case 38:
                  e.preventDefault(), this.add(1);
                  break;
                case 40:
                  e.preventDefault(), this.add(-1);
                  break;
                case 33:
                  e.preventDefault(), this.add(10);
                  break;
                case 34:
                  e.preventDefault(), this.add(-10);
              }
            },
            mousewheelEvent: function (e, t) {
              this.$(".value").is(":focus") &&
                (e.preventDefault(),
                t > 0 ? this.add(1) : t < 0 && this.add(-1));
            },
          });
        var pe = i("HPk7");
        const me = s.Z.extend({
            el: [
              '<div class="widget orientation-widget">',
              '          <div class="widget-wrapper">',
              '              <div class="left"><a></a></div>',
              '              <div class="value"></div>',
              '              <div class="right"><a></a></div>',
              "          </div>",
              "      </div>",
            ].join(""),
            events: (0, o.Z)({}, s.Z.prototype.events, {
              "click .left": "leftEvent",
              "click .right": "rightEvent",
            }),
            initialize: function (e) {
              (e = (0, m.Z)(e || {}, { label: "", eventName: "turn" })),
                s.Z.prototype.initialize.call(this, e);
            },
            render: function () {
              this.$(".value").text(this.options.label);
            },
            leftEvent: function () {
              this._triggerEvent("left");
            },
            rightEvent: function () {
              this._triggerEvent("right");
            },
            _triggerEvent: (0, pe.Z)(function (e) {
              this.trigger(this.options.eventName, e);
            }, 500),
          }),
          fe = z.Z.extend({
            el: [
              '<div class="widget layout-widget panel-widget">',
              '          <div class="widget-wrapper">',
              '              <div class="header">',
              '                   <span class="label"></span>',
              "              </div>",
              '              <div class="children"></div>',
              "          </div>",
              "      </div>",
            ].join(""),
            initialize: function (e) {
              (e = (0, m.Z)(e || {}, { label: "" })),
                z.Z.prototype.initialize.call(this, e),
                this.$(".label").text(this.options.label);
            },
          }),
          ve = s.Z.extend({
            el: [
              '<div class="widget slider-widget">',
              '          <div class="widget-wrapper">',
              '              <div class="bar">',
              '                  <div class="slide">',
              "                  </div>",
              "              </div>",
              "          </div>",
              "      </div>",
            ].join(""),
            constructor: function (e, t) {
              (t = (0, m.Z)(t || {}, {
                model: new (v().Model)(),
                name: "value",
              })),
                s.Z.prototype.constructor.call(this, e, t),
                void 0 === this.get() && this.set(0);
            },
            initialize: function () {
              (this.$slide = this.$(".slide")),
                (this.$bar = this.$(".bar")),
                (this.started = !1),
                this.render();
            },
            render: function () {
              var e = (this.get() / 97) * 100;
              0 === e
                ? this.$bar.css({ borderLeftColor: "#333333" })
                : this.$bar.css({ borderLeftColor: "#1AC95D" });
              var t = {
                backgroundColor: "#1AC95D",
                borderBottomRightRadius: "4px",
                borderTopRightRadius: "4px",
              };
              (t.width = e + "%"), this.$slide.css(t);
            },
          }),
          be = z.Z.extend({
            el: [
              '<div class="widget layout-widget vertical-widget progess-group-widget">',
              '          <div class="widget-wrapper">',
              '              <div class="children"></div>',
              "          </div>",
              "      </div>",
            ].join(""),
            initialize: function (e) {
              (e = (0, m.Z)(e || {}, {
                model: new (v().Model)(),
                name: "value",
                timeName: "time",
                labelOptions: { content: "Processing..." },
                timerOptions: {
                  model: new (v().Model)({
                    time: 18,
                    text: "Time left $0 sec",
                  }),
                  label: "text",
                  name: "time",
                },
                cancelOptions: {
                  model: new (v().Model)(),
                  event: "click",
                  text: "cancel processing",
                  icon: "times-circle",
                  tooltipDirection: "tooltip-left",
                },
              })).cancelOptions.model.on("click", function () {
                console.log("Cancel requested");
              }),
                z.Z.prototype.initialize.call(this, e),
                void 0 === this.get() && this.set(0);
              var t = this.createWidget("Horizontal");
              this.label = t.createWidget("Label", this.options.labelOptions);
              var i = new (v().Model)();
              (this.timer = t.createWidget("Label", {
                model: i,
                name: "value",
              })),
                this.setTimerText(e.timerOptions, i),
                e.timerOptions.model.on(
                  "change:time",
                  function () {
                    this.setTimerText(e.timerOptions, i);
                  }.bind(this)
                ),
                this.timer.$el.css({ textAlign: "right", color: "#aaaaaa" });
              var o = this.createWidget("Horizontal");
              (this.progress = o.createWidget("ProgressBar", this.options)),
                this.progress.$el.css({ flexGrow: "25" }),
                o.$el.css({ marginTop: 0 }),
                this.$el.css({
                  borderRadius: "4px",
                  backgroundColor: "#666666",
                  padding: "10px",
                  marginTop: "10px",
                }),
                (this.cancelBtn = o.createWidget(
                  "IconButton",
                  this.options.cancelOptions
                )),
                this.cancelBtn.$el.css({ marginTop: "3px", marginLeft: "5px" });
            },
            setTimerText: function (e, t) {
              var i = e.model.get(e.name),
                o = e.model.get(e.label);
              t.set("value", o.replace("$0", i));
            },
          });
        var we = i("X9mO"),
          ye = i("ssaC");
        const xe = ie.Z.extend({
            el: [
              '<div class="widget repeat-widget">',
              '    <div class="widget-wrapper">',
              '        <div class="children"></div>',
              "    </div>",
              "</div>",
            ].join(""),
            constructor: function (e, t) {
              void 0 === (t = t || {}).sortable && (t.sortable = !1),
                void 0 === t.collection &&
                  (t.collection = new (v().Collection)()),
                void 0 === t.layout && (t.layout = z.Z),
                ie.Z.prototype.constructor.call(this, e, t),
                (this.widgets = []),
                (this.modelToWidget = {}),
                (this.layout = this.createWidget(this.options.layout)),
                this.options.collection.forEach(
                  function (e, t) {
                    this.onAdd(e, this.options.collection, { at: t });
                  }.bind(this)
                );
              var i = this.options.default;
              i &&
                (0, we.Z)(this.widgets, function (e) {
                  return e.model.get("value") === i;
                }).$el.css("order", -1);
              this.options.sortable &&
                new ye.ZP(this.layout.$(".children")[0], {
                  handle: ".widget",
                  ghostClass: "sortable-ghost",
                  animation: 100,
                  onEnd: this.onEnd.bind(this),
                });
            },
            delegateEvents: function () {
              var e = ie.Z.prototype.delegateEvents.apply(this, arguments);
              return (
                this.options.collection.on("add", this.onAdd, this),
                this.options.collection.on("remove", this.onRemove, this),
                this.options.collection.on("reset", this.onReset, this),
                this.options.collection.on("sort", this.onSort, this),
                e
              );
            },
            undelegateEvents: function () {
              return (
                this.options.collection.off("add", this.onAdd, this),
                this.options.collection.off("remove", this.onRemove, this),
                this.options.collection.off("reset", this.onReset, this),
                this.options.collection.off("sort", this.onSort, this),
                ie.Z.prototype.undelegateEvents.apply(this, arguments)
              );
            },
            onAdd: function (e, t, i) {
              var n = i.at || t.length,
                a = t.slice(n).filter(
                  function (e) {
                    return this.modelToWidget[e.cid];
                  }.bind(this)
                );
              a.forEach(
                function (e) {
                  this.onRemove(e);
                }.bind(this)
              );
              var r = this.layout.createWidget(
                null,
                this.options.widget,
                (0, o.Z)({ model: e }, this.options.widgetOptions)
              );
              r.$el.attr("data-repeat-cid", e.cid),
                (this.modelToWidget[e.cid] = r),
                this.widgets.push(r),
                a.forEach(
                  function (e, i) {
                    this.onAdd(e, t, { at: n + 1 + i });
                  }.bind(this)
                );
            },
            onRemove: function (e) {
              var t = this.modelToWidget[e.cid];
              if (t) {
                var i = this.widgets.indexOf(t);
                this.widgets.splice(i, 1),
                  this.layout.removeWidget(t),
                  delete this.modelToWidget[e.cid],
                  this.widgets.slice(i).forEach(function (e) {
                    e.trigger("sorted");
                  });
              }
            },
            onReset: function () {
              this.widgets.forEach(
                function (e) {
                  this.onRemove(e.model);
                }.bind(this)
              ),
                (this.widgets = []),
                (this.modelToWidget = {});
            },
            onSort: function () {
              if (this.inhibNextSort) this.inhibNextSort = !1;
              else {
                this.widgets = this.collection
                  .map(
                    function (e) {
                      return this.modelToWidget[e.cid];
                    }.bind(this)
                  )
                  .filter(function (e) {
                    return null != e;
                  });
                var e = this.layout.$(".children");
                this.widgets.forEach(function (t) {
                  t.$el.detach().appendTo(e);
                }),
                  this.collection.forEach(
                    function (e) {
                      this.modelToWidget[e.cid].trigger("sorted");
                    }.bind(this)
                  );
              }
            },
            onEnd: function (e) {
              var t = a()(e.item),
                i = this.collection.get(t.attr("data-repeat-cid")),
                o = this.modelToWidget[i.cid];
              this.collection.models.splice(e.oldIndex, 1),
                this.collection.models.splice(e.newIndex, 0, i),
                this.widgets.splice(e.oldIndex, 1),
                this.widgets.splice(e.newIndex, 0, o),
                (this.inhibNextSort = !0),
                this.collection.trigger("sort");
              var n = Math.min(e.oldIndex, e.newIndex),
                r = Math.max(e.oldIndex, e.newIndex) + 1;
              this.collection.slice(n, r).forEach(
                function (e) {
                  this.modelToWidget[e.cid].trigger("sorted");
                }.bind(this)
              );
            },
          }),
          ke = w.extend({
            el: [
              '<div class="widget select-widget" tabindex="0">',
              '          <div class="widget-wrapper">',
              '              <a class="selection"></a>',
              '              <ul class="options"></ul>',
              "          </div>",
              "      </div>",
            ].join(""),
            events: (0, o.Z)({}, w.prototype.events, {
              "mouseover [data-value]": "mouseoverEvent",
              blur: "cancel",
              "click .selection": "toggleEvent",
            }),
            constructor: function (e, t) {
              (this._bindedCloseEvent = this.closeEvent.bind(this)),
                (this._bindedKeyDownEvent = this.keyDownEvent.bind(this)),
                (this._bindedKeyPressEvent = this.keyPressEvent.bind(this)),
                (t = (0, m.Z)(t || {}, {
                  placeholder: "Select an option",
                  allowMultiple: !1,
                  allowEmpty: !1,
                })),
                w.prototype.constructor.call(this, e, t),
                this.options.allowMultiple && this.set(this.get()[0]),
                (this._keyBuffer = ""),
                (this._keyBufferTimestamp = null);
            },
            delegateEvents: function () {
              w.prototype.delegateEvents.apply(this, arguments),
                a()(document).on("click", this._bindedCloseEvent),
                a()(document).on("keydown", this._bindedKeyDownEvent),
                a()(document).on("keypress", this._bindedKeyPressEvent);
            },
            undelegateEvents: function () {
              w.prototype.undelegateEvents.apply(this, arguments),
                a()(document).off("click", this._bindedCloseEvent),
                a()(document).off("keydown", this._bindedKeyDownEvent),
                a()(document).off("keypress", this._bindedKeyPressEvent);
            },
            render: function () {
              var e = this.get(),
                t = this.options.options.filter(function (t) {
                  return t.get("value") === e;
                })[0],
                i = t ? t.get("label") : "",
                o = this.$(".selection");
              e && o.removeClass("placeholder"),
                o.text(i || this.options.placeholder),
                o.attr("title", i || this.options.placeholder);
            },
            isOpened: function () {
              return this.$el.hasClass("opened");
            },
            isFocused: function () {
              return this.el === document.activeElement && !this.isOpened();
            },
            toggle: function () {
              this.isOpened() ? this.close() : this.open();
            },
            open: function () {
              (this.lastValue = this.get()),
                this.moveCursorToSelection(),
                this.$el.addClass("opened");
            },
            close: function () {
              this.$el.removeClass("opened"), this.moveCursorToSelection();
            },
            cancel: function () {
              this.isOpened() &&
                (this.triggerOption(this.lastValue), this.close());
            },
            setCursor: function (e) {
              var t = this.$("[data-value]");
              e < 0 && (e = t.length + (e % t.length)),
                e >= t.length && (e %= t.length),
                t.removeClass("cursor"),
                t.eq(e).addClass("cursor"),
                (this.cursorOffset = e);
            },
            changeCursor: function (e) {
              if (0 !== e) {
                var t = this.$("[data-value]").length;
                if (
                  (null != this.cursorOffset ||
                    this.isOpened() ||
                    this.moveCursorToSelection(),
                  null == this.cursorOffset)
                )
                  this.setCursor(e > 0 ? 0 : t - 1);
                else {
                  var i = this.cursorOffset + e;
                  i >= t && (i = t - 1), i < 0 && (i = 0), this.setCursor(i);
                }
              }
            },
            applyCursorToSelection: function () {
              null !== this.cursorOffset &&
                this.triggerOption(
                  this.$("[data-value]")
                    .eq(this.cursorOffset)
                    .attr("data-value")
                );
            },
            moveCursorToSelection: function () {
              var e = this.get();
              this.cursorOffset = this.$("[data-value]")
                .removeClass("cursor")
                .filter(function () {
                  return a()(this).attr("data-value") === e;
                })
                .addClass("cursor")
                .index();
            },
            toggleEvent: function (e) {
              e.preventDefault(), e.stopPropagation(), this.toggle();
            },
            closeEvent: function (e) {
              this.$el.has(e.currentTarget).length ||
                (this.$el.hasClass("opened") &&
                  (e.preventDefault(), this.close()));
            },
            selectEvent: function () {
              w.prototype.selectEvent.apply(this, arguments), this.close();
            },
            mouseoverEvent: function (e) {
              this.setCursor(this.$("[data-value]").index(e.currentTarget));
            },
            keyDownEvent: function (e) {
              switch (e.keyCode) {
                case 36:
                  (this.isOpened() || this.isFocused()) &&
                    (this.setCursor(0), this.applyCursorToSelection());
                  break;
                case 35:
                  (this.isOpened() || this.isFocused()) &&
                    (this.setCursor(-1), this.applyCursorToSelection());
                  break;
                case 27:
                  this.isOpened() && (e.preventDefault(), this.cancel());
                  break;
                case 33:
                  (this.isOpened() || this.isFocused()) &&
                    (e.preventDefault(),
                    this.changeCursor(-10),
                    this.applyCursorToSelection());
                  break;
                case 34:
                  (this.isOpened() || this.isFocused()) &&
                    (e.preventDefault(),
                    this.changeCursor(10),
                    this.applyCursorToSelection());
                  break;
                case 38:
                  (this.isOpened() || this.isFocused()) &&
                    (e.preventDefault(),
                    this.changeCursor(-1),
                    this.applyCursorToSelection());
                  break;
                case 40:
                  (this.isOpened() || this.isFocused()) &&
                    (e.preventDefault(),
                    this.changeCursor(1),
                    this.applyCursorToSelection());
                  break;
                case 32:
                case 13:
                  if (this.isOpened() || this.isFocused()) {
                    e.preventDefault(), this.toggle();
                    break;
                  }
                  break;
                case 8:
                  (this.isOpened() || this.isFocused()) && e.preventDefault();
              }
            },
            keyPressEvent: function (e) {
              if (this.isOpened() || this.isFocused()) {
                var t = String.fromCharCode(e.keyCode).toLowerCase();
                if (!(t.length < 1)) {
                  var i = new Date().getTime();
                  i - this._keyBufferTimestamp > 700 && (this._keyBuffer = ""),
                    (this._keyBuffer += t),
                    (this._keyBufferTimestamp = i);
                  var o = this.options.options,
                    n = function (e) {
                      return (0, we.Z)(o.models, function (t) {
                        return -1 !== t.get("label").toLowerCase().indexOf(e);
                      });
                    },
                    a = n(this._keyBuffer);
                  !a &&
                    this._keyBuffer.length > 1 &&
                    ((this._keyBuffer = t), (a = n(this._keyBuffer))),
                    a &&
                      (this.triggerOption(a.get("value")),
                      this.setCursor(o.indexOf(a)));
                }
              }
            },
          }),
          Te = s.Z.extend({
            el: [
              '<div class="widget separator-widget">',
              "      <hr>",
              "  </div>",
            ].join(""),
            initialize: function (e) {
              s.Z.prototype.initialize.call(this, e);
            },
          }),
          Ce = oe.extend({
            el: [
              '<div class="widget layout-widget horizontal-widget slidered-image-widget">',
              '          <div class="widget-wrapper">',
              '              <div class="children"></div>',
              "          </div>",
              "      </div>",
            ].join(""),
            initialize: function (e) {
              (e = (0, m.Z)(e || {}, {
                model: new (v().Model)(),
                name: "value",
              })),
                oe.prototype.initialize.call(this, e);
              var t = { model: this.model },
                i = this.options.range;
              (this.image = this.createWidget(
                "FactoredImage",
                (0, o.Z)(
                  {},
                  t,
                  { name: this.field() },
                  this.options.factoredImageOptions
                )
              )),
                (this.numberedSlider = this.createWidget(
                  "NumberedSlider",
                  (0, o.Z)(
                    {},
                    t,
                    {
                      name: this.field("factor"),
                      slider: (0, o.Z)({}, i, this.options.sliderOptions),
                      number: (0, o.Z)({}, i, this.options.numberOptions),
                    },
                    this.options.numberedSliderOptions
                  )
                )),
                (this.image = this.factoredImage),
                (this.slider = this.numberedSlider.slider),
                (this.number = this.numberedSlider.number);
            },
          }),
          Se = s.Z.extend({
            createRow: function (e) {
              var t = new oe();
              return (
                t.$el.addClass("level " + e).removeClass("horizontal-widget"),
                this.$el.append(t.el),
                t
              );
            },
          });
        var _e = i("VKI/");
        const Me = s.Z.extend({
            el: [
              '<div class="widget sound-widget">',
              '          <div class="widget-wrapper">',
              "              <form>",
              '                  <div class="extra sort-handle">',
              '                      <span class="index"></span>',
              '                      <span class="label"></span>',
              '                      <div class="contextual-menu" data-action="toggleMenu">',
              '                          <ul class="menu-options">',
              '                              <li data-action="duplicate">Duplicate</a>',
              '                              <li data-action="edit">Replace</a>',
              '                              <li data-action="delete" class="delete">Delete</a>',
              "                          </ul>",
              "                      </div>",
              "                  </div>",
              "              </form>",
              '              <div class="inner"></div>',
              "          </div>",
              "      </div>",
            ].join(""),
            tpl: {
              loopButtonLabel: [
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">',
                '    <polygon points="7.06 6 4 9 4 3 7.06 6" fill="#fff"></polygon>',
                '    <path d="M12,5H9V7h3a2,2,0,0,1,0,4H4A2,2,0,0,1,4,7H5V5H4a4,4,0,0,0,0,8h8a4,4,0,0,0,0-8Z" fill="#fff"></path>',
                "</svg>",
              ].join(""),
              syncSoundButton: [
                '<a data-action="sync-sound" class="sync-sound">',
                '   <i class="fa-regular fa-clock"></i>',
                "</a>",
              ].join(""),
            },
            events: (0, o.Z)({}, s.Z.prototype.events, {
              'click [data-action="edit"]': "edit",
              'click [data-action="delete"]': "delete",
              'click [data-action="duplicate"]': "duplicate",
              "click .extra": "select",
            }),
            constructor: function () {
              (this._boundDocumentClickEvent =
                this.documentClickEvent.bind(this)),
                s.Z.prototype.constructor.apply(this, arguments);
            },
            initialize: function (e) {
              s.Z.prototype.initialize.call(this, arguments),
                this.$(".label").text(this.model.get("name")),
                this.initSoundControls(e),
                this.on(
                  "sorted",
                  function () {
                    this.render();
                  }.bind(this)
                ),
                this.listenTo(this.model.collection, "select", function (e) {
                  e === this.model
                    ? this.$el.addClass("selected")
                    : this.$el.removeClass("selected");
                });
            },
            initSoundControls: function (e) {
              var t = new (Se.extend({ el: this.$(".inner") }))();
              this._options = e;
              var i = t.createRow("first-level");
              if (
                (i
                  .createWidget("CustomCheckbox", {
                    model: this.model,
                    name: "loop",
                    title: "Repeat track",
                  })
                  .$(".label")
                  .html(this.tpl.loopButtonLabel),
                this.model.set("spatial", !this.model.get("ambient")),
                this.model.on(
                  "change:spatial",
                  function () {
                    this.model.set("ambient", !this.model.get("spatial"));
                  }.bind(this)
                ),
                i.createWidget("CustomCheckbox", {
                  model: this.model,
                  name: "spatial",
                  label: "3D",
                }),
                i.createWidget("VolumeSlider", { model: this.model }),
                e.animation)
              ) {
                var o = t.createRow("second-level");
                o.createWidget("Checkbox", {
                  model: this.model,
                  name: "sync",
                  label: "Play when animation is at:",
                }),
                  o.createWidget("Template", {
                    tpl: this.tpl.syncSoundButton,
                    events: {
                      'click [data-action="sync-sound"]':
                        this.syncSound.bind(this),
                    },
                  }),
                  o.createWidget("Timestamp", {
                    model: this.model,
                    name: "startTime",
                  });
              }
              var n = t.createRow("third-level hidden");
              n.createWidget("Checkbox", {
                model: this.model,
                name: "snap",
                label: "Stick to closest geometry",
              });
              var a = t.createRow("fourth-level hidden");
              a.createWidget("Attenuation", "ToggleButton", {
                model: this.model,
                name: "distanceModel",
                help: "How 3D sound attenuates with distance",
                options: { exponential: "Exponential", linear: "Linear" },
              }),
                this.model.on(
                  "change",
                  function (e) {
                    this.model.collection.trigger("select", e);
                  }.bind(this)
                ),
                e.animation &&
                  (this.model.on(
                    "change:sync",
                    (0, _e.Z)(
                      function () {
                        var e = !this.model.get("sync");
                        o.$el
                          .find("input")
                          .prop("disabled", e)
                          .toggleClass("disabled", e);
                      }.bind(this)
                    )
                  ),
                  this.model.on(
                    "change:ambient",
                    (0, _e.Z)(
                      function () {
                        n.$el.toggleClass("hidden", this.model.get("ambient"));
                      }.bind(this)
                    )
                  )),
                this.model.on(
                  "change:ambient",
                  (0, _e.Z)(
                    function () {
                      a.$el.toggleClass("hidden", this.model.get("ambient"));
                    }.bind(this)
                  )
                );
            },
            render: function () {
              this.$(".extra")
                .css("display", "")
                .find(".index")
                .text(this.model.collection.indexOf(this.model) + 1);
            },
            syncSound: function () {
              if (
                this.model.get("sync") &&
                this._options.viewer.getFeatures().animation
              ) {
                var e = this._options.viewer.getFeatures().animation.getModel();
                if (1 === e.get("speed")) {
                  var t = e.getCurrentAnimation();
                  if (void 0 !== t) {
                    var i = t.get("duration"),
                      o = (e.get("progress") * i) / 100;
                    this.model.set("startTime", o);
                  }
                }
              }
            },
            toggleMenu: function () {
              this.$(".contextual-menu").toggleClass("open");
            },
            closeMenu: function () {
              this.$(".contextual-menu").removeClass("open");
            },
            edit: function () {
              this.model.collection.triggerEditTrack(this.model),
                this.closeMenu();
            },
            delete: function () {
              this.model.collection.triggerDeleteTrack(this.model),
                this.closeMenu();
            },
            duplicate: function () {
              this.model.collection.triggerDuplicateTrack(this.model),
                this.closeMenu();
            },
            select: function () {
              this.model.collection.triggerSelectTrack(this.model);
            },
            documentClickEvent: function (e) {
              this.$el.has(e.target).length &&
              "toggleMenu" === e.target.getAttribute("data-action")
                ? this.toggleMenu()
                : this.$(".contextual-menu").has(e.target).length ||
                  this.closeMenu();
            },
            delegateEvents: function () {
              s.Z.prototype.delegateEvents.apply(this, arguments),
                a()(document).on("mousedown", this._boundDocumentClickEvent);
            },
            undelegateEvents: function () {
              s.Z.prototype.undelegateEvents.apply(this, arguments),
                a()(document).off("mousedown", this._boundDocumentClickEvent);
            },
          }),
          Ze = s.Z.extend({
            initialize: function (e) {
              (0, o.Z)(this.events, e.events),
                s.Z.prototype.initialize.apply(this, arguments),
                this.$el.html(e.tpl);
            },
          }),
          We = s.Z.extend({
            el: [
              '<div class="widget number-widget timestamp-widget">',
              '          <div class="widget-wrapper help">',
              '              <input class="value" />',
              '              <span class="tooltip tooltip-down hidden">Format: 01:20</span>',
              "          </div>",
              "      </div>",
            ].join(""),
            events: (0, o.Z)({}, s.Z.prototype.events, {
              "change .value:input": "changeEvent",
            }),
            changeEvent: function (e) {
              var t = a()(e.currentTarget).val();
              t.match(/^([0-9]*):([0-9]*)$/)
                ? (this.$(".tooltip").addClass("hidden"),
                  (t = Number(t.replace(":", "."))),
                  this.change(t))
                : this.$(".tooltip").removeClass("hidden");
            },
            render: function () {
              var e = this.$(".value"),
                t = this.get(),
                i = Math.floor(t),
                o = Math.floor(100 * t) % 100;
              i / 10 < 1 && (i = "0" + i),
                o / 10 < 1 && (o = "0" + o),
                e.val(i + ":" + o);
            },
          }),
          Ee = w.extend({
            el: [
              '<div class="widget togglebutton-widget horizontal-widget">',
              '          <div class="widget-wrapper">',
              '              <ul class="options"></ul>',
              "          </div>",
              "      </div>",
            ].join(""),
            events: (0, o.Z)({}, w.prototype.events),
            initialize: function (e) {
              (e = (0, m.Z)(e || {}, {
                placeholder: "Select an option",
                allowMultiple: !1,
                allowEmpty: !1,
              })),
                w.prototype.initialize.call(this, e),
                this.$(".option > a").each(function () {
                  a()(this).attr("tabindex", 0);
                });
            },
          }),
          Pe = z.Z.extend({
            el: [
              '<div class="widget layout-widget vertical-widget togglechildren-widget">',
              '   <div class="widget-wrapper">',
              '       <div class="children"></div>',
              "   </div>",
              '   <div class="force-closed-widget"></div>',
              "</div>",
            ].join(""),
            initialize: function (e) {
              (e = (0, m.Z)(e || {}, {
                model: new (v().Model)(),
                name: "value",
                transform: null,
              })),
                z.Z.prototype.initialize.call(this, e);
            },
            isEnabled: function () {
              return (0, ne.Z)(this.options.transform)
                ? Boolean(this.options.transform.call(this, this.get()))
                : Boolean(this.get());
            },
            render: function () {
              var e = this.isEnabled(),
                t = (0, N.Z)(this.options, "label") || "",
                i = (0, N.Z)(this.options, "message") || "",
                o = "";
              (i || t) &&
                (o =
                  '<span class="title">' +
                  t +
                  '</span><span class="message">' +
                  i +
                  "</span>"),
                this.$el.toggleClass("enabled", e),
                this.$(".force-closed-widget").html(o),
                this.$el.toggleClass("force-closed", !e),
                this.$el.toggleClass("enable-force-closed-widget", !e && !!o);
            },
          });
        var Oe = i("yCZG"),
          Ae = {},
          Fe = function () {};
        Fe.prototype = {
          addRadioModel: function (e, t) {
            e.on("change:" + t, this.toggle.bind(this, e, t)),
              this._models || (this._models = []),
              this._models.push({ model: e, name: t });
          },
          toggle: function (e, t) {
            if (e.get(t))
              for (var i = 0; i < this._models.length; i++)
                (this._models[i].model === e && this._models[i].name === t) ||
                  this._models[i].model.set(this._models[i].name, !1);
          },
        };
        const Ne = k.extend({
            el: [
              '<div class="widget radio-widget">',
              '          <a class="state"></a>',
              '          <a class="label"></a>',
              "      </div>",
            ].join(""),
            initialize: function (e) {
              if ((k.prototype.initialize.call(this, e), e.radioGroup)) {
                var t = Ae[e.radioGroup];
                t || ((t = new Fe()), (Ae[e.radioGroup] = t)),
                  t.addRadioModel(e.model, e.name);
              }
            },
            toggleStateEvent: function (e) {
              !0 !== this.model.get(this.options.name) &&
                k.prototype.toggleStateEvent.call(this, e);
            },
          }),
          Re = ue.extend({
            el: [
              '<div class="widget warning-widget">',
              '          <span class="fa-regular fa-exclamation-triangle"></span> ',
              '          <span class="text">',
              "          </span>",
              "      </div>",
            ].join(""),
          }),
          De = {
            Group: te.Z,
            Tabbed: U,
            Vertical: z.Z,
            Horizontal: oe,
            Panel: fe,
            Hyde: ae,
            Repeat: xe,
            ToggleChildren: Pe,
            IconButton: re,
            Image: q,
            ImagePreview: se,
            InfiniteSlider: de,
            Color: Z,
            Checkbox: T,
            CustomCheckbox: C,
            FactoredImage: J,
            SlideredImage: Ce,
            Number: ge,
            Options: w,
            OptionRow: b.Z,
            Select: ke,
            Slider: le.Z,
            NumberedSlider: he,
            VolumeSlider: Oe.Z,
            Label: ue,
            ProgressBar: ve,
            ProgressGroup: be,
            Separator: Te,
            ToggleSwitch: k,
            ToggleButton: Ee,
            Button: x,
            FilePicker: ee,
            Annotation: d,
            Sound: Me,
            Animation: p,
            Template: Ze,
            Timestamp: We,
            Radio: Ne,
            Warning: Re,
            Axis: y,
            Orientation: me,
          };
      },
      "+uBU": (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => c });
        var o = i("Psgz"),
          n = i("Hjnd"),
          a = i.n(n),
          r = i("k46e"),
          s = i("jQDz"),
          l = i("OM1T"),
          d = i("ptuJ");
        const c = o.Z.extend({
          mixins: [l.Z, d.Z],
          events: (0, r.Z)({}, o.Z.prototype.events, {
            "click .popup-action-close": "close",
            click: "closeIfOverlay",
          }),
          el: function () {
            return (
              (e = {
                header: (0, s.Z)(this, "header"),
                content: (0, s.Z)(this, "content"),
                footer: (0, s.Z)(this, "footer"),
              }),
              (t = e.header),
              (i = void 0 === t ? "" : t),
              (o = e.content),
              (n = void 0 === o ? "" : o),
              (a = e.footer),
              (r = void 0 === a ? "" : a),
              '\n<div class="popup-wrapper">\n    <div class="popup texture-popup">\n        <div class="popup-header">\n            '
                .concat(
                  i,
                  '\n        </div>\n        <div class="popup-content">\n            '
                )
                .concat(
                  n,
                  '\n        </div>\n        <div class="popup-footer">\n            '
                )
                .concat(r, "\n        </div>\n    </div>\n</div>\n")
            );
            var e, t, i, o, n, a, r;
          },
          constructor: function (e, t) {
            (this.parent = e),
              (this.options = (0, r.Z)({}, t)),
              (this.environment = (0, r.Z)(
                {},
                e ? e.environment : {},
                this.options.environment
              )),
              a()(document).on(
                "keydown",
                function (e) {
                  27 === e.keyCode &&
                    0 !== this.environment.popupStack.length &&
                    this.environment.popupStack[0].close();
                }.bind(this)
              ),
              o.Z.call(this, t),
              this.render();
          },
          render: function () {
            for (
              this.setElement((0, s.Z)(this, "el"));
              this.environment.popupStack.length > 0 &&
              this.environment.popupStack[0] !== this.parent;

            ) {
              this.environment.popupStack.shift().close();
            }
            this.environment.popupStack.unshift(this),
              this.$el.appendTo(this.environment.popupContainer);
          },
          close: function () {
            this.$el.remove();
          },
          closeIfOverlay: function (e) {
            this.$(".popup").has(e.target).length || this.close();
          },
        });
      },
      qcpF: (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => c });
        var o = i("R4My"),
          n = i.n(o),
          a = i("k46e"),
          r = i("Wuy/"),
          s = i("Kjxj"),
          l = i("8AlU"),
          d = i("Iao2");
        const c = d.Z.extend({
          mixins: [s.Z],
          el: [
            '<div class="widget group-widget">',
            '          <div class="widget-wrapper">',
            '              <div class="header">',
            '                  <span class="label"></span>',
            '                  <a class="help" target="_blank">',
            '                      <i class="fa-regular fa-question-circle"></i>',
            '                      <i class="fa-regular fa-arrow-up-right-from-square"></i>',
            '                      <div class="tooltip tooltip-down"></div>',
            "                  </a>",
            '                  <span class="feature-new">New</span>',
            '                  <a class="state"></a>',
            "              </div>",
            '              <div class="inner"></div>',
            "          </div>",
            "</div>",
          ].join(""),
          events: (0, a.Z)({}, d.Z.prototype.events, {
            "click .header": "toggleVisibilityEvent",
            "click .state": "toggleStateEvent",
          }),
          constructor: function (e, t) {
            (t = (0, r.Z)(t || {}, {
              model: new (n().Model)(),
              name: "value",
              inner: l.Z.reify(e, { withMargins: !0 }),
              label: "",
              opened: !0,
              new: !1,
              dragAndDrop: !0,
            })),
              (this.inner = t.inner),
              d.Z.prototype.constructor.call(this, e, t),
              this.$(".label").text(this.options.label),
              this.options.tooltip && this.options.tooltip.help
                ? (this.$(".help .tooltip").html(this.options.tooltip.help),
                  this.options.tooltip.link &&
                    this.$(".help").attr("href", this.options.tooltip.link))
                : this.$(".help").hide(),
              this.$(".inner").append(this.inner.$el),
              this.options.opened && this.$el.addClass("opened"),
              this.options.new || this.$el.find(".feature-new").remove(),
              this.initializeDragAndDrop();
          },
          delegateEvents: function () {
            d.Z.prototype.delegateEvents.apply(this, arguments),
              this.delegateDragAndDrop(),
              this.inner.delegateEvents();
          },
          undelegateEvents: function () {
            d.Z.prototype.undelegateEvents.apply(this, arguments),
              this.undelegateDragAndDrop(),
              this.inner.undelegateEvents();
          },
          render: function () {
            this.$el.toggleClass("static", null == this.get()),
              this.$el.toggleClass("active", this.get());
          },
          toggleVisibilityEvent: function (e) {
            var t, i, o;
            (null !== (t = e.target) &&
              void 0 !== t &&
              null !== (i = t.parentElement) &&
              void 0 !== i &&
              null !== (o = i.classList) &&
              void 0 !== o &&
              o.contains("help")) ||
              (e.preventDefault(), this.$el.toggleClass("opened"));
          },
          toggleStateEvent: function (e) {
            e.preventDefault(),
              e.stopPropagation(),
              this.change(!this.model.get(this.options.name));
          },
          addWidget: function () {
            return this.inner.addWidget.apply(this.inner, arguments);
          },
          createWidget: function () {
            return this.inner.createWidget.apply(this.inner, arguments);
          },
          onDragEnter: function (e) {
            this.isNotDraggingFile(e) ||
              this.$el.hasClass("opened") ||
              this.toggleVisibilityEvent(e);
          },
          onDragEnd: function () {},
          onDragOver: function () {},
          onDrop: function () {},
        });
      },
      ypYT: (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => l });
        var o = i("L0SH"),
          n = i("Hjnd"),
          a = i.n(n),
          r = i("Wuy/"),
          s = i("Iao2");
        const l = s.Z.extend({
          constructor: function (e, t) {
            (t = (0, r.Z)(t || {}, { withMargins: !0, withPadding: !1 }, t)),
              s.Z.call(this, e, t),
              this.options.withMargins && this.$el.addClass("with-margins"),
              this.options.withPadding && this.$el.addClass("with-padding");
          },
          addWidget: function (e, t) {
            if ((arguments.length <= 1 && ((t = e), (e = void 0)), e)) {
              a()("<div/>")
                .attr("class", "widget widget-label")
                .append(a()("<label/>").attr("class", "label").text(e))
                .append(t.$el)
                .appendTo(this.$(".children"));
              var i = t.$el.parent(".widget-label");
              if (t.options && t.options.tooltip) {
                var o =
                  '<a class="help" target="_blank">\n                                    <i class="fa-regular fa-question-circle"></i>\n                                    <i class="fa-regular fa-arrow-up-right-from-square"></i>\n                                    <div class="tooltip tooltip-right">\n                                        '.concat(
                    t.options.tooltip.help,
                    "\n                                    </div>\n                                </a>"
                  );
                t.options.tooltipTarget
                  ? i.find(t.options.tooltipTarget).append(o)
                  : i.find(".label").append(o),
                  t.options.tooltip.link &&
                    i.find(".help").attr("href", t.options.tooltip.link);
              }
            } else t.$el.appendTo(this.$(".children"));
            return t;
          },
          removeWidget: function (e) {
            this.$(e.el).length < 1 ||
              (e.$el.parent().is(this.$(".children")) && e.$el.remove(),
              e.$el.parentsUntil(this.$(".children")).remove());
          },
          createWidget: function (e, t, n) {
            (1 === arguments.length ||
              (2 === arguments.length && "object" === (0, o.Z)(t))) &&
              ((n = t), (t = e), (e = void 0));
            var a = "function" != typeof t ? i("/UCt").Z[t] : t;
            if (!a) throw new Error(t + ": Invalid widget type");
            var r = a.reify(this, n);
            return this.addWidget(e, r);
          },
        });
      },
      "6IJz": (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => d });
        var o = i("R4My"),
          n = i.n(o),
          a = i("Hjnd"),
          r = i.n(a),
          s = i("Wuy/"),
          l = i("Iao2");
        const d = l.Z.extend({
          el: ['<div class="option-row">', "  </div>"].join(""),
          initialize: function (e) {
            (e = (0, s.Z)(
              e || {},
              {
                model: new (n().Model)(),
                name: "value",
                image: e.image,
                icon: e.icon,
              },
              e
            )),
              l.Z.prototype.initialize.call(this, e);
          },
          render: function () {
            var e = r()("<a/>").html(
              r()('<span class="option-row__label"></span>').text(
                this.model.get("label")
              )
            );
            if (
              (this.$el.html(e),
              this.options.options.image &&
                this.model.get(this.options.options.image) &&
                r()('<img crossorigin="anonymous" class="image">')
                  .attr("src", this.model.get(this.options.options.image))
                  .prependTo(e),
              this.model.get("icon") &&
                r()('<i class="' + this.model.get("icon") + '">').prependTo(e),
              this.model.get("tooltip") &&
                e
                  .addClass("tooltip")
                  .attr("data-tooltip", this.model.get("tooltip")),
              this.options.options.value &&
                this.model.get(this.options.options.value) &&
                this.$el.attr(
                  "data-value",
                  this.model.get(this.options.options.value)
                ),
              "function" == typeof this.options.options.select &&
                this.$el.on("click", this.options.options.select.bind(this)),
              this.model.get("deletable"))
            ) {
              var t = e;
              this.options.options.deleteButtonSelector &&
                (t = this.$el.find(this.options.options.deleteButtonSelector)),
                t.append(r()('<i class="delete fa-regular fa-trash-can"></i>')),
                "function" == typeof this.options.options.delete &&
                  e
                    .find("i.delete")
                    .on("click", this.options.options.delete.bind(this));
            }
          },
        });
      },
      "8AlU": (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => o });
        const o = i("ypYT").Z.extend({
          el: [
            '<div class="widget layout-widget vertical-widget">',
            '          <div class="widget-wrapper">',
            '              <div class="children"></div>',
            "          </div>",
            "      </div>",
          ].join(""),
        });
      },
      "1qsc": (e, t, i) => {
        "use strict";
        i("BdNe"), i("GuWZ");
      },
      CQWF: (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => u });
        var o = i("sGMM"),
          n = i("k46e"),
          a = i("T4DV"),
          r = i("Hjnd"),
          s = i.n(r),
          l = i("i2hM"),
          d = i("jQKg"),
          c = i("Oyie");
        const u = {
          name: "Markdown",
          dependencies: ["LazyLoading"],
          initializeMarkdown: function (e) {
            (this.options.markdown = (0, n.Z)({}, this.options.markdown, e)),
              (this.__markdown = {
                ready: !1,
                loading: !1,
                promise: null,
                shortcuts: {},
              }),
              this.options.markdown.editor && this.initializeEditor();
          },
          initializeEditor: function () {
            var e = this,
              t = s()(this.options.markdown.input),
              n = (0, a.Z)(this.options.markdown.editor)
                ? this.options.markdown.editor
                : {};
            t.addClass("loading-editor"),
              c
                .all([
                  i.e(5189).then(i.t.bind(i, "Fi04", 23)),
                  i.e(5189).then(i.t.bind(i, "ExF7", 23)),
                  i.e(5189).then(i.t.bind(i, "eNCp", 23)),
                ])
                .then(function (i) {
                  var a = (0, o.Z)(i, 1)[0].default.fromTextArea(t[0], {
                    mode: "gfm",
                    theme: "neo",
                    highlightFormatting: !0,
                    lineWrapping: !0,
                    extraKeys: l.Z.getShortcuts(),
                  });
                  l.Z.setEditor(a),
                    l.Z.initializeToolbar(n),
                    n.container && s()(n.container).addClass("wysiwyg"),
                    t.removeClass("loading-editor"),
                    a.on("beforeChange", function (t, i) {
                      e.getMarkdownEditorValue().length + i.text[0].length >
                        parseInt(s()(t.getTextArea()).attr("maxlength"), 10) &&
                        "+delete" !== i.origin &&
                        i.cancel();
                    }),
                    a.on("change", function (e) {
                      var t = s()(e.getTextArea());
                      t.val(e.getValue()), t.trigger("input");
                    });
                });
          },
          renderMarkdown: function () {
            var e = this;
            return this.__markdown.ready
              ? c.resolve(this.options.markdown.target[0].innerHTML)
              : (this.__markdown.loading ||
                  ((this.__markdown.loading = !0),
                  (this.__markdown.promise = new c(function (t) {
                    var i = e.getMarkdownEditorValue();
                    i
                      ? (e.unsetMarkdownReady(),
                        d.Z.getMarkdownPreview(i).then(
                          function (e) {
                            this.setMarkdownReady(e.result),
                              this.handleLazyLoading(),
                              t(e.result);
                          }.bind(e),
                          function () {
                            this.setMarkdownReady("Failed to load preview"),
                              t("");
                          }.bind(e)
                        ))
                      : (e.setMarkdownReady(""), t(""));
                  }))),
                this.__markdown.promise);
          },
          setMarkdownReady: function (e) {
            (this.__markdown.ready = !0),
              (this.__markdown.loading = !1),
              this.options.markdown.target.html(s()("<div></div>").append(e));
          },
          unsetMarkdownReady: function () {
            (this.__markdown.ready = !1),
              this.options.markdown.target.html(
                s()("<div>Loading preview...</div>")
              );
          },
          getMarkdownEditorValue: function () {
            return l.Z.getMarkdownEditorValue() || this.options.markdown.input
              ? s()(this.options.markdown.input).val()
              : "";
          },
        };
      },
      lCzS: (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => g });
        var o = i("R4My"),
          n = i.n(o),
          a = i("JBVY"),
          r = i("t3PY"),
          s = i("Bpah"),
          l = i("mSEu"),
          d = i("MQQR"),
          c = i("2jst"),
          u = i("Oyie"),
          h = function (e, t) {
            var i = new (n().Model)();
            return (
              (i.url = e + t),
              i.fetch().then(function (e) {
                return (window.prefetchedData[t] = e), e;
              })
            );
          };
        const g = function () {
          var e = (function () {
            if ("dev" !== l.Z.buildMode) {
              var e = !1;
              if (
                (l.Z.prodHookRestrictedDomains.forEach(function (t) {
                  document.location.href.indexOf(t) > -1 && (e = !0);
                }),
                e)
              )
                return;
            }
            if (-1 !== window.location.search.substr(1).indexOf("hook_")) {
              for (
                var t,
                  i = "hook_".length,
                  o = window.location.search.substr(1).split(r.BJ),
                  n = 0;
                n < o.length;
                ++n
              ) {
                var s = o[n];
                if (-1 !== s.indexOf("hook_")) {
                  t = s.substr(i, s.indexOf("=") - i);
                  break;
                }
              }
              if (t && a.ZP.bool("hook_" + t))
                return (
                  "https://" +
                  ("prod" === t
                    ? "sketchfab.com"
                    : "fatvoxel" === t
                    ? "fatvoxel.com"
                    : t + ".fatvoxel.com")
                );
            }
          })();
          if (e) {
            var t = (0, d.Z)().model;
            if (t) {
              var i = (function (e, t) {
                for (
                  var i = [
                      "",
                      "animations",
                      "backgrounds",
                      "environments",
                      "hotspots",
                      "matcaps",
                      "sounds",
                      "textures",
                    ],
                    o = [],
                    n = 0;
                  n < i.length;
                  ++n
                ) {
                  var a = (0, c.Z)(i[n], t);
                  o.push(h(e, a));
                }
                return u.all(o).then(function (i) {
                  var o = i[0].version;
                  return h(
                    e,
                    "/i/models/"
                      .concat(t, "/versions/")
                      .concat(o.uid, "/options")
                  ).then(function (e) {
                    return (i[0].options = e), new s.Z(i[0]);
                  });
                });
              })(e, t);
              s.Z.get = function () {
                return i;
              };
            }
          }
        };
      },
      GuWZ: (e, t, i) => {
        "use strict";
        i.r(t);
        var o = i("eKF4"),
          n = i("Z1Nz"),
          a = i.n(n),
          r = i("TxBr"),
          s = i("5hHH"),
          l = i("iu9k"),
          d = ["models:embed", "models:embed_specific_version"],
          c = [
            "misc:fallback_generator",
            "misc:fallback_generator_viewer",
            "models:view",
            "models:view_without_slug",
          ],
          u = o.Z.me().get("isStaff"),
          h = function () {
            return !(
              (d.some(function (e) {
                return (0, l.EQ)(e, window.location.pathname);
              }) &&
                (function () {
                  try {
                    window.parent.location.host;
                  } catch (e) {
                    return !1;
                  }
                  return !0;
                })()) ||
              (u &&
                c.some(function (e) {
                  return (0, l.EQ)(e, window.location.pathname);
                }))
            );
          };
        o.Z.me().canAccessFeature("ff_analytics_package") &&
          h() &&
          ((0, n.init)({
            getCSRFToken: function () {
              return r.ZP.get("sb_csrftoken") || "";
            },
          }),
          a()("PAGE_VIEWED"),
          s.Z.listen(function () {
            return h() && a()("PAGE_VIEWED");
          }));
      },
      xFVl: (e, t, i) => {
        "use strict";
        i.r(t);
        var o = i("7isf"),
          n = i("WGQk");
        (0, n.Z)(!0);
        i("QQD/"), i("1qsc");
        var a = i("560e"),
          r = i("vxiz"),
          s = i("Bpah"),
          l = i("JBVY"),
          d = i("xKIK"),
          c = i("sQwH"),
          u = i("D4hk"),
          h = i("3MRe"),
          g = i("ULsr"),
          p = i("Hjnd"),
          m = i.n(p),
          f = i("eKF4"),
          v = i("3Z9q"),
          b = i("jQKg"),
          w = i("mSEu"),
          y = i("+zma"),
          x = i("nv4P"),
          k = i("LLYa"),
          T = i("X40V"),
          C = i("RyS8"),
          S = i("7txH"),
          _ = i("1nxQ"),
          M = i("kAIv"),
          Z = i("tEGF");
        const W = x.Z.extend({
          initialize: function () {
            x.Z.prototype.initialize.apply(this, arguments);
            var e = this.options.context.getWidgetAPI(),
              t = e.getGeneralGroup();
            this.fillGroup(t);
          },
          fillGroup: function (e) {
            var t = e.createWidget("Horizontal", {
              className: "editor-orientation-title",
            });
            t.createWidget("Label", { content: "Straighten model" }),
              t
                .createWidget("IconButton", {
                  icon: "refresh",
                  text: "Reset orientation",
                  tooltipDirection: "tooltip-left",
                })
                .model.on(
                  "click",
                  function () {
                    this.model.trigger("reset");
                  }.bind(this)
                );
            var i = e.createWidget("Horizontal"),
              o = this.model;
            i
              .createWidget("Orientation", { label: "X", eventName: "turnX" })
              .on("turnX", o.trigger.bind(o, "turn", "x")),
              i
                .createWidget("Orientation", { label: "Y", eventName: "turnY" })
                .on("turnY", o.trigger.bind(o, "turn", "y")),
              i
                .createWidget("Orientation", { label: "Z", eventName: "turnZ" })
                .on("turnZ", o.trigger.bind(o, "turn", "z")),
              e.createWidget("Checkbox", {
                model: this.model,
                name: "showGizmo",
                label: "Show advanced rotation",
              }),
              e.createWidget("Separator");
          },
        });
        var E = {
          FeatureName: "orientationUI",
          ModelName: "Orientation",
          ViewListType: [W],
        };
        const P = Z.Z.create(E);
        var O = i("OUQ+"),
          A = i("R4My"),
          F = i.n(A),
          N = i("iu9k");
        const R = {
            General: {
              help: "Set the model's orientation and rendering mode.",
              link: "https://support.fab.com/s/article/Scene",
            },
            CameraGroup: {
              help: "Adjust the field of view and camera limits.",
              link: "https://support.fab.com/s/article/Scene",
            },
            WireframeGroup: {
              help: "Select whether to show the wireframe by default.",
              link: "https://support.fab.com/s/article/Scene",
            },
            PointCloudGroup: {
              help: "Adjust the size of points in the point cloud.",
              link: "https://support.fab.com/s/article/Scene",
            },
            VertexColorGroup: {
              help: "Enable or disable the model's vertex colors.",
              link: "https://support.fab.com/s/article/Scene",
            },
            BackgroundGroup: {
              help: "Set the model's background.",
              link: "https://support.fab.com/s/article/Scene",
            },
            LightsGroup: {
              help: "Adjust the type, color, direction, and shadows for up to 3 lights.",
              link: "https://support.fab.com/s/article/Lighting",
            },
            GroundGroup: {
              help: "Add a ground shadow to give the model the appearance of resting on a surface.",
              link: "https://support.fab.com/s/article/Lighting",
            },
            EnvironmentGroup: {
              help: "Select an environment as a background and/or lighting source.",
              link: "https://support.fab.com/s/article/Lighting",
            },
            Orientation: {
              help: "Viewport shortcuts ALT + Drag: environment & lights ALT + SHIFT + Drag: environment only",
            },
            Shadow: { help: "Shadow casted by Environment" },
            Diffuse: { help: "Add a texture map to give color to the model." },
            Specular: { help: "Color of the reflected light." },
            DiffuseIntensity: {
              help: "Add a texture to simulate the effect of light and shadow on a material.",
            },
            ReflectionGroup: {
              help: "Adjust the degree to which the scene reflects the selected environment.",
            },
            MatcapGroup: {
              help: 'Select a "material capture" shader for the model. Each includes full lighting and reflection data.',
              link: "https://support.fab.com/s/article/Materials-MatCap",
            },
            "Matcap/Curvature": {
              help: "Adjust to increase the contrast of details on smooth-shaded geometries.",
              link: "https://support.fab.com/s/article/Materials-MatCap",
            },
            PBRGroup: {
              help: "Set the characteristics of the primary PBR materials.",
              link: "https://support.fab.com/s/article/Materials-PBR",
            },
            AlbedoPBR: {
              help: "Add an RGB texture or solid color for reflected color (non-metals) or reflectance values (metals).",
              link: "https://support.fab.com/s/article/Materials-PBR",
            },
            MetalnessPBR: {
              help: "Add a grayscale texture for raw metal. Black indicates non-metal, white indicates pure metal.",
              link: "https://support.fab.com/s/article/Materials-PBR",
            },
            SpecularF0: {
              help: "Add an RGB texture or solid color for materials without reflectance values.",
              link: "https://support.fab.com/s/article/Materials-PBR",
            },
            DiffusePBR: {
              help: "Add an RGB texture or solid color for materials without reflectance values.",
              link: "https://support.fab.com/s/article/Materials-PBR",
            },
            SpecularPBR: {
              help: "Add an RGB texture or solid color for metal reflectance values, or a greyscale texture or color for non-metal Fresnel reflectance values.",
              link: "https://support.fab.com/s/article/Materials-PBR",
            },
            Anisotropy: {
              help: "Add reflections over a patterned surface.",
              link: "https://support.fab.com/s/article/Materials-PBR",
            },
            RoughnessGroup: {
              help: "Select how surface irregularities affect the reflection of light.",
              link: "https://support.fab.com/s/article/Materials-PBR",
            },
            Displacement: {
              help: "Use a grayscale depth map to displace the model's vertices.",
              link: "https://support.fab.com/s/article/Materials-PBR",
            },
            NormalBump: {
              help: "Use a texture to add bumps, dents, and other details to the surface of the model.",
              link: "https://support.fab.com/s/article/Materials-PBR",
            },
            SheenGroup: {
              help: "Simulate the way light interacts with lots of small threads.",
              link: "https://support.fab.com/s/article/Materials-PBR",
            },
            Sheen: {
              help: "Add an RGB texture to control the intensity and color of the sheen.",
              link: "https://support.fab.com/s/article/Materials-PBR",
            },
            SheenColorFactor: {
              help: "Select a color to mix with the Sheen texture.",
              link: "https://support.fab.com/s/article/Materials-PBR",
            },
            SheenRoughness: {
              help: "Add a grayscale texture to control the intensity of the sheen's roughness.",
              link: "https://support.fab.com/s/article/Materials-PBR",
            },
            SubsurfaceScattering: {
              help: "Adjust how light scatters within an object like skin, wax, or ice.",
              link: "https://support.fab.com/s/article/Materials-PBR",
            },
            SSRTexture: {
              help: "Add a grayscale texture as a mask to indicate where the effect is visible and how strong it is.",
              link: "https://support.fab.com/s/article/Materials-PBR",
            },
            SSRTranslucencyTexture: {
              help: "Add a grayscale texture to control the thickness of the material.",
              link: "https://support.fab.com/s/article/Materials-PBR",
            },
            ClearCoat: {
              help: "Simulate the effect of a thin reflective layer on top of a surface.",
              link: "https://support.fab.com/s/article/Materials-PBR",
            },
            CCIntensity: {
              help: "Use a grayscale texture to control the intensity of the coat.",
              link: "https://support.fab.com/s/article/Materials-PBR",
            },
            CCThickness: {
              help: "Adjust to control the thickness of the coat.",
              link: "https://support.fab.com/s/article/Materials-PBR",
            },
            CCReflectivity: {
              help: "Adjust to control how reflective the coat is.",
              link: "https://support.fab.com/s/article/Materials-PBR",
            },
            CCTint: {
              help: "Adjust the tint of the coat.",
              link: "https://support.fab.com/s/article/Materials-PBR",
            },
            CCRoughness: {
              help: "Add a grayscale texture to control the intensity of the coat's roughness.",
              link: "https://support.fab.com/s/article/Materials-PBR",
            },
            CCNormalMap: {
              help: "Add a normal map to give the appearance of more intricate geometry.",
              link: "https://support.fab.com/s/article/Materials-PBR",
            },
            AOPBR: {
              help: "Add a grayscale texture to define large areas of occluded light.",
              link: "https://support.fab.com/s/article/Materials-PBR",
            },
            CavityPBR: {
              help: "Add a grayscale texture to define small areas of occluded light.",
              link: "https://support.fab.com/s/article/Materials-PBR",
            },
            AlphaMask: {
              help: "Add a grayscale or alpha texture to mask visibility on parts of the model.",
              link: "https://support.fab.com/s/article/Transparency-Opacity",
            },
            Opacity: {
              help: "Select the preferred method for simulating transparency and adjust settings.",
              link: "https://support.fab.com/s/article/Transparency-Opacity",
            },
            OpacityRefractionColor: {
              help: "Set the transparency color. Black makes the material opaque. Good for stained glass or plastics.",
              link: "https://support.fab.com/s/article/Transparency-Opacity",
            },
            OpacityRefractionIndex: {
              help: "Adjust how the material reflects and refracts light.",
              link: "https://support.fab.com/s/article/Transparency-Opacity",
            },
            OpacityRefractionRoughness: {
              help: "Adjust the blurriness of the refraction.",
              link: "https://support.fab.com/s/article/Transparency-Opacity",
            },
            OpacityDitheredPattern: {
              help: "Use Standard for layers with larger gaps and Thin Layering for geometries like hair or fur.",
              link: "https://support.fab.com/s/article/Transparency-Opacity",
            },
            EmitColor: {
              help: "Turn on to simulate a glowing effect. Maximize the effect with Bloom in post-processing settings.",
              link: "https://support.fab.com/s/article/Materials-PBR",
            },
            CullFaceGroup: {
              help: "Set single or double sided to render one or both sides of the model's faces.",
              link: "https://support.fab.com/s/article/Materials-PBR",
            },
            ScreenSpaceReflection: {
              help: "Adjust to approximate reflections of objects in real-time.",
              link: "https://support.fab.com/s/article/Post-Processing-Filters",
            },
            SSAO: {
              help: "Adjust settings to change or enhance the look of occluded parts of the model.",
              link: "https://support.fab.com/s/article/Post-Processing-Filters",
            },
            Grain: {
              help: "Adjust to add a realistic film grain effect to the scene.",
              link: "https://support.fab.com/s/article/Post-Processing-Filters",
            },
            DOF: {
              help: "Adjust blur sliders to simulate a photorealistic depth of field effect on the model.",
              link: "https://support.fab.com/s/article/Post-Processing-Filters",
            },
            Sharpness: {
              help: "Adjust to sharpen the look of details on the model.",
              link: "https://support.fab.com/s/article/Post-Processing-Filters",
            },
            ChromaticAberration: {
              help: "Adjust to simulate camera lens-related color distortions in the scene.",
              link: "https://support.fab.com/s/article/Post-Processing-Filters",
            },
            Vignette: {
              help: "Adjust to darken the edges of the scene and focus attention on the model.",
              link: "https://support.fab.com/s/article/Post-Processing-Filters",
            },
            Bloom: {
              help: "Adjust to make highlights glow and enhance the look of emissive surfaces.",
              link: "https://support.fab.com/s/article/Post-Processing-Filters",
            },
            ToneMapping: {
              help: "Adjust the exposure, brightness, contrast, and saturation of the scene.",
              link: "https://support.fab.com/s/article/Post-Processing-Filters",
            },
            ColorBalance: {
              help: "Adjust the shadow, midtone, and highlight colors in the scene.",
              link: "https://support.fab.com/s/article/Post-Processing-Filters",
            },
            TemporalAntialiasing: {
              help: "If setting is enabled on transparent pixels, disable the effect if the background appears too blurry.",
              link: "https://support.fab.com/s/article/Post-Processing-Filters",
            },
            AnimationSettings: {
              help: "Adjust the cycling and playback speed.",
              link: "https://support.fab.com/s/article/Animations",
            },
            Animations: {
              help: "Select a default, rename, order, and delete animations.",
              link: "https://support.fab.com/s/article/Animations",
            },
            ARWorldScale: {
              help: "Adjust the size of the model relative to the viewer.",
              link: "https://support.fab.com/s/article/VR-AR-Editor",
            },
            ARFloor: {
              help: "Adjust where the model rests in relation to the floor, or disable the floor entirely.",
              link: "https://support.fab.com/s/article/VR-AR-Editor",
            },
            ARInitialViewingPosition: {
              help: "Set an initial viewing position to help viewers navigate the model or scene.",
              link: "https://support.fab.com/s/article/VR-AR-Editor",
            },
            DeveloperLogs: {
              help: "Viewer API console function parameter log",
              link: "https://sketchfab.com/developers/viewer",
            },
          },
          D = x.Z.extend({
            initialize: function () {
              x.Z.prototype.initialize.apply(this, arguments);
              var e = this.options.context.getWidgetAPI(),
                t = e.getTab("Scene"),
                i = t.createWidget("Group", {
                  label: "Camera",
                  id: "CameraGroup",
                  tooltip: R.CameraGroup,
                  opened: !0,
                });
              this.model.on("uiReady", this.initUi.bind(this, i));
            },
            initUi: function (e) {
              if (
                ((this.state = new (F().Model)({
                  showAdvancedCameraSettings: !1,
                })),
                this.fillFovGroup(e),
                (this._canEdit = this._hasEditRights()),
                this._canEdit || this.model.get("useCameraConstraints"))
              ) {
                var t = e.createWidget("Group", {
                  label: "Limit Orbit Camera",
                  help: "Limit what people can see in the scene",
                  id: "useCameraConstraints",
                  name: "useCameraConstraints",
                  opened: !0,
                  model: this.model,
                });
                if (
                  ((this._angleOptions = {
                    renderValue: this.radiansToDegrees,
                    inputValue: this.degreesToRadian,
                    decimals: 0,
                    unit: "°",
                  }),
                  this._canEdit)
                )
                  this.fillCameraConstraintsGroup(t);
                else {
                  t.on(
                    "change.before",
                    this.deactivateCameraConstraints.bind(this)
                  );
                  var i = new (F().Model)();
                  i.set("enabled", !1);
                  var o = t.createWidget("ToggleChildren", {
                    model: i,
                    name: "enabled",
                  });
                  this.fillCameraConstraintsGroup(o);
                }
                this.model.set(
                  "displayGizmo",
                  this.model.get("useCameraConstraints")
                ),
                  this._displayPreview(
                    this.model.get("useCameraConstraints") &&
                      this.model.get("enableCameraConstraints")
                  );
              } else
                e.createWidget("Label", {
                  content: [
                    "<p><strong>Limit orbit camera</strong></p>",
                    'Upgrade to <a href="' +
                      (0, N.HQ)("pages:plans") +
                      '" target="_blank">Sketchfab PRO</a> ',
                    "to limit the camera",
                  ].join(""),
                  escape: !1,
                  className: "upgrade --highlight",
                  id: "CameraLimitsLabel",
                });
              this.fillAdvancedGroup(e);
            },
            fillFovGroup: function (e) {
              var t = this.model.limits();
              e.createWidget("Field Of View", "NumberedSlider", {
                id: "FovNumberedSlider",
                model: this.model,
                name: "fov",
                minimum: t.fov.min,
                maximum: t.fov.max,
                numberOptions: { unit: "°" },
              });
            },
            fillAdvancedGroup: function (e) {
              var t = this.model.limits();
              e.createWidget("Checkbox", {
                model: this.state,
                name: "showAdvancedCameraSettings",
                label: "Show advanced camera settings",
              }),
                e
                  .createWidget("Hyde", {
                    model: this.state,
                    name: "showAdvancedCameraSettings",
                  })
                  .createWidget("Near clipping distance", "NumberedSlider", {
                    id: "NearFarRatioNumberedSlider",
                    help: "Set a lower value when objects close to the camera are clipped",
                    model: this.model,
                    name: "nearFarRatio",
                    minimum: t.nearFarRatio.min,
                    maximum: t.nearFarRatio.max,
                    step: 49e-6,
                  });
            },
            fillCameraConstraintsGroup: function (e) {
              var t = this.model.limits();
              e.createWidget("Checkbox", {
                model: this.model,
                name: "usePanConstraints",
                label: "Limit Pan",
              });
              var i = this._makeToggleGroup(
                e,
                "useZoomConstraints",
                "Limit Zoom"
              );
              this._makeZoomWidget(i, "In", t, this._saveZoomIn.bind(this)),
                this._makeZoomWidget(i, "Out", t, this._saveZoomOut.bind(this));
              var o = this._makeToggleGroup(
                e,
                "usePitchConstraints",
                "Limit vertical rotation (pitch)"
              );
              this._makeSlider(o, "Up", t), this._makeSlider(o, "Down", t);
              var n = this._makeToggleGroup(
                e,
                "useYawConstraints",
                "Limit horizontal rotation (yaw)"
              );
              this._makeSlider(n, "Offset", t),
                this._makeSlider(n, "Angle", t),
                (this._previewButton = e.createWidget("Button", {
                  text: "Preview Camera Limits",
                  type: "btn-primary",
                })),
                this._previewButton.model.on(
                  "click",
                  function () {
                    this._setEnableConstraints(
                      !this.model.get("enableCameraConstraints")
                    );
                  }.bind(this)
                ),
                this._registerEvents();
            },
            _makeToggleGroup: function (e, t, i) {
              return (
                e.createWidget("Checkbox", {
                  model: this.model,
                  name: t,
                  label: i,
                }),
                e.createWidget("Hyde", { model: this.model, name: t })
              );
            },
            _makeZoomWidget: function (e, t, i, o) {
              var n = e.createWidget("Horizontal");
              this._makeLabel(t, n);
              var a = "zoom" + t,
                r = n.createWidget("Button", {
                  tooltip: "Use current zoom distance",
                  text: "Set from view",
                  icon: "camera",
                  tooltipDirection: "tooltip-down",
                });
              r.model.on("click", o),
                r.$el.addClass("save-zoom"),
                n.createWidget("Number", {
                  id: "Zoom" + t + "NumberedSlider",
                  model: this.model,
                  name: a,
                  step: (i[a].max - i[a].min) / 1e3,
                  minimum: i[a].min,
                  maximum: 1 / 0,
                });
            },
            _makeSlider: function (e, t, i) {
              var o = e.createWidget("Horizontal");
              this._makeLabel(t, o);
              var n = t.toLowerCase();
              o.createWidget("NumberedSlider", {
                id: t + "NumberedSlider",
                model: this.model,
                name: n,
                minimum: i[n].min,
                maximum: i[n].max,
                step: Math.PI / 180,
                numberOptions: this._angleOptions,
              });
            },
            _makeLabel: function (e, t) {
              t.createWidget("Label", { content: e }).$el.addClass(
                "cam-constraint-label "
              );
            },
            _saveZoomIn: function () {
              this.model.trigger("saveZoomIn");
            },
            _saveZoomOut: function () {
              this.model.trigger("saveZoomOut");
            },
            _registerEvents: function () {
              this.model.on(
                "TabLeave",
                this._setEnableConstraints.bind(this, !1)
              ),
                this.model.on("TabEnter", this._enableWithModel.bind(this)),
                this.model.on(
                  "change:useCameraConstraints",
                  this._enableWithModel.bind(this)
                ),
                this.model.on(
                  "ForceDisable",
                  this._displayWarningDisable.bind(this)
                ),
                this.model.on(
                  "change:useYawConstraints",
                  this._onToggleYaw.bind(this)
                );
            },
            _onToggleYaw: function () {
              if (this.model.get("useYawConstraints")) {
                var e = this.model.get("left"),
                  t = this.model.get("right");
                e === this.model.defaults.left &&
                  t === this.model.defaults.right &&
                  (this.model.set("offset", Math.PI),
                  this.model.set("angle", 2 * Math.PI));
              }
            },
            _enableWithModel: function () {
              var e = this.model.get("useCameraConstraints");
              this._setEnableConstraints(e), this.model.set("displayGizmo", e);
            },
            deactivateCameraConstraints: function (e) {
              e.preventDefault(), this.model.set("useCameraConstraints", !1);
            },
            changeStep: function (e) {
              var t = this.model.get("zoomOut") / 100;
              t < 1 && (t = 1), (e.slider.options.step = t);
            },
            checkUpDown: function (e) {
              var t = this.model.get("up"),
                i = this.model.get("down");
              i > t && this.model.set(e, "up" === e ? i : t);
            },
            degreesToRadian: function (e) {
              return (e * Math.PI) / 180;
            },
            radiansToDegrees: function (e) {
              return (180 * e) / Math.PI;
            },
            _setEnableConstraints: function (e) {
              this._displayPreview(e),
                this.model.set("enableCameraConstraints", e);
            },
            _displayPreview: function (e) {
              if (e) {
                if (this._notif) return;
                this._previewButton.$el.find(".button").text("Exit preview"),
                  (this._notif = new O.Z({
                    content: "Previewing orbit camera limits",
                    class: "info",
                  })),
                  (this._notif.close = function (e) {
                    return (
                      e ||
                        this._setEnableConstraints(
                          !this.model.get("enableCameraConstraints")
                        ),
                      O.Z.prototype.close.call(this._notif, 0)
                    );
                  }.bind(this));
              } else
                this._previewButton.$el
                  .find(".button")
                  .text("Preview Camera Limits"),
                  this._notif &&
                    (this._notif.close(!0), (this._notif = void 0));
            },
            _displayWarningDisable: function () {
              new O.Z({
                content:
                  "Camera limits have been disabled. They cannot be used along with Annotations.",
                class: "warning",
                delay: 5e3,
              });
            },
            _hasEditRights: function () {
              try {
                var e = this.options.context.getModel().toJSON(),
                  t = (0, k.A8)(e);
                return w.Z.cameraConstraintsEditing[t];
              } catch (e) {
                console.warn(
                  "Prefetching failure while trying to reach User.me(). This is probably because this code has been run in a non web context where prefetchdata are unusable."
                );
              }
            },
          });
        var B = {
          FeatureName: "cameraUI",
          ModelName: "Camera",
          ViewListType: [D],
        };
        const I = Z.Z.create(B);
        var L = i("/K0U"),
          G = i("0WSC"),
          $ = function (e, t, i, o, n) {
            (this._widgetColorField = e),
              (this._widgetAlphaField = t),
              (this._modelField = i),
              (this._widget = o),
              (this._model = n),
              (this._func = G.Z.ColorHexStr),
              this.init();
          };
        $.prototype = {
          init: function () {
            this.connectSignalModelToWidget(),
              this.connectSignalWidgetToModel(),
              this.changeModelToWidget();
          },
          removeSignals: function () {
            this._model.off(null, this.changeModelToWidget, this),
              this._widget.off(null, this.changeWidgetToModel, this);
          },
          connectSignalModelToWidget: function () {
            this._model.on(
              "change:" + this._modelField,
              this.changeModelToWidget,
              this
            );
          },
          removeSignalModelToWidget: function () {
            this._model.off(
              "change:" + this._modelField,
              this.changeModelToWidget
            );
          },
          connectSignalWidgetToModel: function () {
            this._widget.on(
              "change:" + this._widgetColorField,
              this.changeWidgetToModel,
              this
            ),
              this._widget.on(
                "change:" + this._widgetAlphaField,
                this.changeWidgetToModel,
                this
              );
          },
          removeSignalWidgetToModel: function () {
            this._widget.off(
              "change:" + this._widgetColorField,
              this.changeWidgetToModel
            ),
              this._widget.off(
                "change:" + this._widgetAlphaField,
                this.changeWidgetToModel
              );
          },
          changeModelToWidget: function () {
            var e = this._model.get(this._modelField),
              t = (parseInt(e.substr(6, 2), 16) / 255).toFixed(2);
            this.removeSignalWidgetToModel(),
              this._widget.set(
                this._widgetColorField,
                this._func.modelToWidget(e)
              ),
              this._widget.set(this._widgetAlphaField, t),
              this.connectSignalWidgetToModel();
          },
          changeWidgetToModel: function () {
            var e = this._widget.get(this._widgetColorField),
              t = Math.round(
                255 * this._widget.get(this._widgetAlphaField)
              ).toString(16);
            (t = 1 === t.length ? "0" + t : t),
              this.removeSignalModelToWidget(),
              this._model.set(
                this._modelField,
                this._func.widgetToModel(e) + t
              ),
              this.connectSignalModelToWidget();
          },
        };
        const H = $;
        var z = function (e, t) {
          var i = {};
          "classic" === t.get("rendererProxy") && (i.classic = "Classic"),
            (i.pbr = "PBR"),
            (i.matcap = "Matcap"),
            e.createWidget("Renderer", "ToggleButton", {
              model: t,
              name: "rendererProxy",
              options: i,
              id: "RendererSelect",
            }),
            (function (e, t) {
              var i = new (F().Model)({ visible: !1 }),
                o = function () {
                  i.set("visible", "classic" === t.get("rendererProxy"));
                };
              o(),
                t.on("change:rendererProxy", o),
                e
                  .createWidget("Hyde", { model: i, name: "visible" })
                  .createWidget("Warning", {
                    content:
                      "<strong>The Classic renderer will be removed in the future.</strong><br/>We recommend you switch to the PBR renderer for a similar result.<br/>Once you select PBR and save, you won’t be able to switch back to the Classic renderer anymore.",
                    escape: !1,
                  });
            })(e, t);
        };
        const U = x.Z.extend({
          initialize: function () {
            x.Z.prototype.initialize.apply(this, arguments);
            var e = this.options.context.getWidgetAPI(),
              t = e.getGeneralGroup();
            this.fillGroup(t);
          },
          fillGroup: function (e) {
            var t = this.model;
            !(function (e, t) {
              var i = new L.Z({ rendererProxy: "pbr", styleProxy: "lit" }),
                o = function () {
                  var e = t.get("type"),
                    o = t.get("renderer");
                  "inspector" !== e &&
                    ("matcap" === e
                      ? i.set("rendererProxy", "matcap")
                      : (i.set("styleProxy", e), i.set("rendererProxy", o)));
                };
              t.on("change:renderer change:style", o),
                o(),
                i.on("change:rendererProxy change:styleProxy", function () {
                  var e = i.get("styleProxy"),
                    o = i.get("rendererProxy");
                  "matcap" === o
                    ? t.set("type", "matcap")
                    : (t.set("type", e), t.set("renderer", o));
                }),
                z(e, i),
                (function (e, t) {
                  e.createWidget("Shading", "Select", {
                    model: t,
                    name: "styleProxy",
                    options: { lit: "Lit", shadeless: "Shadeless" },
                    id: "ShadingSelect",
                  });
                })(
                  e.createWidget(null, "ToggleChildren", {
                    model: i,
                    name: "rendererProxy",
                    id: "toggleShadingType",
                    transform: function () {
                      return "matcap" !== i.get("rendererProxy");
                    },
                  }),
                  i
                );
            })(e, t);
            var i = this.options.context.getWidgetAPI().getTab("Scene");
            !(function (e, t) {
              var i = e.createWidget("Group", {
                  label: "Wireframe",
                  tooltip: R.WireframeGroup,
                  model: t,
                  name: "wireframeEnable",
                  id: "WireframeGroup",
                  opened: !1,
                }),
                o = new L.Z({ wireColor: void 0, wireAlpha: void 0 }),
                n = i.createWidget(null, "Horizontal");
              n.createWidget("Image", {
                model: o,
                name: "wireColor",
                allowColor: !0,
                allowTexture: !1,
                id: "WireframeImage",
              }),
                n.createWidget("NumberedSlider", {
                  model: o,
                  name: "wireAlpha",
                  id: "WireframeNumberedSlider",
                }),
                i.$el.addClass("wireframe-group"),
                new H("wireColor", "wireAlpha", "wireframeColor", o, t);
            })(
              i.createWidget(null, "Hyde", { model: t, name: "hasWireframe" }),
              t
            ),
              (function (e, t) {
                e.createWidget("Group", {
                  label: "Point cloud",
                  tooltip: R.PointCloudGroup,
                  model: t,
                  id: "PointCloudGroup",
                  opened: !0,
                }).createWidget("Point size", "NumberedSlider", {
                  id: "PointSizeNumberedSlider",
                  model: t,
                  name: "pointSize",
                  minimum: 0,
                  maximum: 50,
                });
              })(
                i.createWidget(null, "Hyde", { model: t, name: "hasPoints" }),
                t
              ),
              (function (e, t) {
                var i = e.createWidget("Group", {
                  label: "Vertex Color",
                  tooltip: R.VertexColorGroup,
                  model: t,
                  name: "vertexColorEnable",
                  id: "VertexColorGroup",
                  opened: !1,
                });
                i.createWidget(null, "ToggleButton", {
                  model: t,
                  name: "vertexColorColorSpace",
                  options: { linear: "Linear", srgb: "sRGB" },
                  id: "vertexColorColorSpaceSelect",
                }),
                  i
                    .createWidget(null, "Hyde", {
                      model: t,
                      name: "hasVertexAlpha",
                    })
                    .createWidget(null, "Checkbox", {
                      model: t,
                      name: "vertexColorUseAlpha",
                      label: "Use alpha",
                      id: "vertexAlphaEnableCheck",
                    });
              })(
                i.createWidget(null, "Hyde", {
                  model: t,
                  name: "hasVertexColor",
                }),
                t
              );
          },
        });
        var j = {
          FeatureName: "shadingStyleUI",
          ModelName: "ShadingStyle",
          ViewListType: [U],
        };
        const V = Z.Z.create(j);
        var Y = i("AyNe"),
          X = i("tjn4"),
          q = i("zF/U"),
          K = i("0aN2"),
          Q = i("lZH+"),
          J = i.n(Q),
          ee = i("uoOb"),
          te = i.n(ee),
          ie = i("SM3V"),
          oe = i("CUcOv"),
          ne = i("g6dK"),
          ae = function (e, t, i) {
            var o;
            return (
              t &&
                (((o = (0, ie.Z)(e)).name = i), (e = URL.createObjectURL(o))),
              oe.Z.instance
                .getOrCreateImage(e)
                .promise.then(function (e) {
                  var t = e.getWidth(),
                    i = e.getHeight();
                  if ((t && t > 8192) || (i && i > 8192))
                    return J().reject(
                      "The file resolution is too large, the maximum is 8192"
                    );
                  var n = e.getImage();
                  return o && (n.imageBlob = o), n;
                })
                .catch(function (e) {
                  return J().reject(e || "Failed to read image");
                })
            );
          };
        const re = function (e) {
          return new (J())(function (t, i) {
            var o = e.name;
            if (o.toLowerCase().endsWith("tga")) {
              var n = new FileReader();
              (n.onload = function (e) {
                try {
                  var n = new (te().TGA)();
                  n.load(new Uint8Array(e.target.result)),
                    t(ae(n.getDataURL("image/png"), !0, o + ".png"));
                } catch (e) {
                  i(
                    'Error while loading tga file. If it happens again, <a href="' +
                      w.Z.hosts.faq +
                      '/s/?ProductOrigin=Sketchfab" target="_blank">contact our support team</a> with this message error: <br/>"' +
                      e +
                      '"'
                  );
                }
              }),
                n.readAsArrayBuffer(e);
            } else t(ae(URL.createObjectURL(e)));
          }).catch(function (e) {
            var t = new ne.Z({
              title: "Error",
              text: e,
              buttons: { ok: !0 },
              safe: !0,
            });
            return t.open().then(t.close.bind(t)), J().reject();
          });
        };
        var se = i("k8gV"),
          le = i("qcpF"),
          de = [0, 0.02, 0.055, 0.1];
        const ce = x.Z.extend({
          initialize: function () {
            x.Z.prototype.initialize.apply(this, arguments);
            var e = this.options.context.getWidgetAPI(),
              t = e.getTab("Scene"),
              i = f.Z.me();
            (this.me = i), this.buildGroup(t);
          },
          buildGroup: function (e) {
            var t;
            this.model.on("change:enable", function (e, i) {
              "none" === i
                ? (t = new O.Z({
                    content:
                      "Transparent background isn't compatible with antialiasing and supersampling. They have been disabled.",
                    class: "info",
                    delay: 5e3,
                  }))
                : t && t.close();
            });
            var i = this.getEnvironmentModel();
            this.model.proxyCollection = new X.Z();
            var o = le.Z.extend({
              set: function () {
                var e;
                if ("none" === this.model.get(this.options.name)) {
                  var t = this.previousValue || "color";
                  e =
                    ("environment" !== t && "ambient" !== t) || i.get("enable")
                      ? t
                      : "color";
                } else
                  (this.previousValue = this.model.get(this.options.name)),
                    (e = "none");
                return (
                  this.model.set("enable", e),
                  this.model.set(this.options.name, e)
                );
              },
              get: function () {
                return "none" !== this.model.get(this.options.name);
              },
            });
            (this._proxyBackground = this.createProxyBackground()),
              (this._group = e.createWidget(o, {
                label: "Background",
                tooltip: R.BackgroundGroup,
                model: this._proxyBackground,
                name: "enable",
                id: "BackgroundGroup",
                opened: !1,
              })),
              (this.tabbed = this._group.createWidget(
                "Background type",
                "Tabbed",
                {
                  model: this._proxyBackground,
                  name: "enable",
                  id: "BackgroundRendererSelect",
                  className: "background-renderer-select",
                }
              ));
            var n = this.tabbed.createPanel("Environment", {
                name: "environment",
                help: "Environment background options",
              }),
              a = this.tabbed.createPanel("Image", {
                name: "fixed",
                help: "Static image background options",
              }),
              r = this.tabbed.createPanel("Color", {
                name: "color",
                help: "Plain color background options",
              });
            this.buildEnvironmentTab(n),
              this.buildImageTab(a),
              this.buildColorTab(r),
              this.onSyncCollection();
          },
          createProxyBackground: function () {
            var e = this.model,
              t = this.getEnvironmentModel(),
              i = e.get("enable"),
              o = new L.Z({
                enable: "ambient" === i ? "environment" : i,
                blur: this.getClosestBlur(t.get("blur")).toString(),
                useAmbient: "environment" !== i,
              });
            return (
              this.listenTo(o, "change:useAmbient", function (t, i) {
                "environment" === o.get("enable") &&
                  e.set("enable", i ? "ambient" : "environment");
              }),
              this.listenTo(o, "change:enable", function (t, i) {
                e.set(
                  "enable",
                  "environment" === i && t.get("useAmbient") ? "ambient" : i
                );
              }),
              this.listenTo(o, "change:blur", function (e, i) {
                t.set("blur", parseFloat(i));
              }),
              this.listenTo(this.model, "change:enable", function (e, t) {
                o.set("enable", "ambient" === t ? "environment" : t);
              }),
              this.listenTo(
                this.model,
                "useBackgroundEnvironment",
                function () {
                  o.set("enable", "environment");
                }
              ),
              o
            );
          },
          getEnvironmentModel: function () {
            return this.options.context.getFeatures().environment.getModel();
          },
          onEnvironmentDisabled: function (e, t) {
            var i = this.tabbed.$el.find('[data-tab="environment"]');
            t
              ? (!this.previousEnable ||
                  ("environment" !== this.previousEnable &&
                    "ambient" !== this.previousEnable) ||
                  this.model.set("enable", "environment"),
                i.show())
              : ((this.previousEnable = this.model.get("enable")),
                ("environment" !== this.previousEnable &&
                  "ambient" !== this.previousEnable) ||
                  this.model.set("enable", "color"),
                i.hide());
          },
          getEnvironmentLabelMessage: function (e) {
            var t = "Current environment:<br>";
            return e
              ? t +
                  this.getEnvironmentModel()
                    .environmentCollection.findWhere({ uid: e })
                    .escape("name") +
                  ' (<a href="#" data-action="goToLightningTab">change</a>)'
              : t;
          },
          buildEnvironmentTab: function (e) {
            var t = this.getEnvironmentModel(),
              i = e.createWidget("Label", {
                content: this.getEnvironmentLabelMessage(t.get("uid")),
                escape: !1,
              });
            e.createWidget("Checkbox", {
              model: this._proxyBackground,
              name: "useAmbient",
              label: "Ambient environment",
            }),
              t.on("change:enable", this.onEnvironmentDisabled.bind(this)),
              this.onEnvironmentDisabled(t, t.get("enable")),
              t.on(
                "change:uid",
                function (e, t) {
                  i.set(this.getEnvironmentLabelMessage(t)), i.render();
                }.bind(this)
              ),
              i.$el.on(
                "click",
                'a[data-action="goToLightningTab"]',
                function (e) {
                  e.preventDefault(),
                    this.options.context
                      .getWidgetAPI()
                      .getTabbedWidget()
                      .model.set("value", "lighting");
                }.bind(this)
              ),
              this._addBackgroundBlur(e),
              this._addBackgroundExposure(e, t);
          },
          _addBackgroundBlur: function (e) {
            e.createWidget("ToggleChildren", {
              model: this._proxyBackground,
              name: "useAmbient",
              transform: function (e) {
                return !e;
              },
            }).createWidget("Blur", "ToggleButton", {
              label: "Blur background",
              model: this._proxyBackground,
              name: "blur",
              id: "EnvironmentBlurToggleButton",
              options: this._getOptionBlur(),
            });
          },
          _addBackgroundExposure: function (e, t) {
            e.createWidget("Brightness", "NumberedSlider", {
              model: t,
              name: "backgroundExposure",
              minimum: 0,
              maximum: 2,
              step: 0.01,
              id: "EnvironmentBackgroundExposureNumberedSlider",
            });
          },
          _getOptionBlur: function () {
            var e = {};
            return (
              (e[de[0]] = "0"),
              (e[de[1]] = "1"),
              (e[de[2]] = "2"),
              (e[de[3]] = "3"),
              e
            );
          },
          buildImageTab: function (e) {
            this.model.backgroundCollection.on(
              "add",
              this.onAddedElement,
              this
            ),
              this.model.backgroundCollection.on(
                "change:uid",
                function (e) {
                  this.model.get("uid") === e.previous("id") &&
                    this.model.set("uid", e.get("uid"));
                },
                this
              ),
              this.model.on("uploadSelectEvent", this.onAddNewBackground, this);
            var t = e.createWidget(null, "Repeat", {
                model: this.model,
                name: "uid",
                collection: this.model.proxyCollection,
                id: "BackgroundSelect",
                className: "background-select-widget list-select-widget",
                widget: "OptionRow",
                widgetOptions: {
                  options: {
                    image: "image",
                    name: "name",
                    value: "value",
                    select: function (e) {
                      var t = m()(e.currentTarget).attr("data-value");
                      t && this.model.set("uid", t);
                    }.bind(this),
                    delete: function (e) {
                      e.stopPropagation();
                      var t = m()(e.currentTarget)
                        .closest("[data-value]")
                        .attr("data-value");
                      t && this.onRemoveBackground(t);
                    }.bind(this),
                  },
                },
              }),
              i = function (e, i) {
                t.widgets.forEach(function (e) {
                  e.$el.toggleClass("selected", e.model.get("value") === i);
                });
              };
            this.model.on("change:uid", i.bind(this)),
              this.model.proxyCollection.on(
                "add",
                function () {
                  i(this.model, this.model.get("uid"));
                }.bind(this)
              );
            var o = this.options.context.getModel().toJSON();
            (0, k.Ov)("pro", o)
              ? e.createWidget("FilePicker", {
                  model: this.model,
                  text: "Import background image",
                  id: "BackgroundFilePicker",
                  className: "background-file-picker",
                  dragAndDrop: { target: e.$el },
                })
              : e.createWidget("Label", {
                  content: [
                    '<a href="' +
                      (0, N.HQ)("pages:plans") +
                      '" target="_blank">Upgrade your account</a> ',
                    "to upload your custom background images",
                  ].join(""),
                  escape: !1,
                  classname: "upgrade",
                  id: "BackgroundLabel",
                });
          },
          buildColorTab: function (e) {
            var t = new L.Z({ color: void 0 });
            e.createWidget("Color", {
              model: t,
              name: "color",
              allowColor: !0,
              allowTexture: !1,
              id: "BackgroundColor",
            }),
              new se.Z("color", "color", t, this.model, G.Z.ColorVec3);
          },
          getClosestBlur: function (e) {
            for (var t = e, i = de[0], o = 0, n = de.length; o < n; o++) {
              var a = Math.abs(e - de[o]);
              a < t && ((t = a), (i = de[o]));
            }
            return i;
          },
          onRemoveBackground: function (e) {
            var t = this.options.context.getFeatures().background.getModel(),
              i = this.model.backgroundCollection;
            t.get("uid") === e && t.resetToDefaultBackground(),
              this.model.proxyCollection.findWhere({ value: e }).destroy();
            var o = i.findWhere({ uid: e });
            o || (o = i.findWhere({ id: e })),
              t._trashbin.push(o),
              o.on("restore", i.add.bind(i));
          },
          onAddNewBackground: function (e) {
            var t = q.Z.validateFile(e);
            if (t) {
              var i = new ne.Z({
                title: "Invalid background",
                text: t,
                safe: !0,
                buttons: { ok: !0 },
              });
              return (
                i.open().then(function () {
                  i.close();
                }),
                i
              );
            }
            var o = this,
              n = re(e);
            return (
              n.then(function (t) {
                var i = (0, Y.Z)(),
                  n = new q.Z({
                    imageFile: e,
                    images: [
                      {
                        uid: i,
                        url: t.src,
                        width: t.naturalWidth,
                        height: t.naturalHeight,
                      },
                    ],
                    id: i,
                    name: e.name,
                  });
                o.model.backgroundCollection.add(n),
                  (t.imageModel = n),
                  o.model.set("uid", i);
              }),
              n
            );
          },
          onSyncCollection: function () {
            this.model.backgroundCollection.each(
              this.onAddedElement.bind(this)
            );
          },
          onAddedElement: function (e) {
            var t = new K.Z({ images: e.getImages() }).findImageSmallest();
            t || console.error("MISSING BACKGROUND DATA!");
            var i = e.get("isDefault");
            this.model.proxyCollection.add({
              label: e.get("name"),
              value: e.get("uid") || e.get("id"),
              image: t.url,
              imageModel: e,
              deletable: !(void 0 === i && !e.isNew()) && !i,
            });
          },
        });
        var ue = {
          FeatureName: "backgroundUI",
          ModelName: "Background",
          ViewListType: [ce],
        };
        const he = Z.Z.create(ue);
        var ge = i("8AlU"),
          pe = i("XkCy");
        const me = x.Z.extend({
          initialize: function () {
            x.Z.prototype.initialize.apply(this, arguments);
            var e = this.options.context.getWidgetAPI(),
              t = e.getTab("Post processing filters"),
              i = t.createWidget("Group", {
                model: this.model,
                name: "enable",
                label: "Post Processing Filters",
                id: "PostProcessGroup",
              });
            this.model.on("uiReady", this.buildPostProcess.bind(this, i, t));
          },
          buildPostProcess: function (e, t) {
            this.addSsrGroup(e),
              this.addSsaoGroup(e),
              this.addGrainGroup(e),
              this.addDofGroup(e),
              this.addSharpenGroup(e),
              this.addChromaticGroup(e),
              this.addVignetteGroup(e),
              this.addBloomGroup(e),
              this.addToneMappingGroup(e),
              this.addColorBalanceGroup(e),
              this.addTaa(t);
          },
          addGrainGroup: function (e) {
            var t = e.createWidget("Group", {
              label: "Grain",
              tooltip: R.Grain,
              model: this.model,
              name: "grainEnable",
              inner: ge.Z.reify(void 0, { withMargins: !1 }),
              opened: !1,
            });
            this.addNumberedSlider(
              t,
              void 0,
              "grainFactor",
              "GrainNumberedSlider",
              this.model,
              [0, 0.5, 0.005]
            ),
              t.createWidget("Checkbox", {
                model: this.model,
                name: "grainAnimated",
                label: "Animated",
              });
          },
          addSharpenGroup: function (e) {
            var t = e.createWidget("Group", {
                label: "Sharpness",
                tooltip: R.Sharpness,
                model: this.model,
                name: "sharpenEnable",
                inner: ge.Z.reify(void 0, { withMargins: !1 }),
                opened: !1,
              }),
              i = new L.Z({ factor: this.model.get("sharpenFactor") }),
              o = G.Z.createScaleXPow(5, 2);
            this.addNumberedSlider(
              t,
              void 0,
              "factor",
              "SharpenNumberedSlider",
              i,
              void 0,
              { modelToWidget: o.widgetToModel, widgetToModel: o.modelToWidget }
            ),
              new se.Z("factor", "sharpenFactor", i, this.model, o);
          },
          addChromaticGroup: function (e) {
            var t = e.createWidget("Group", {
              label: "Chromatic Aberrations",
              tooltip: R.ChromaticAberrations,
              model: this.model,
              name: "chromaticAberrationEnable",
              inner: ge.Z.reify(void 0, { withMargins: !1 }),
              opened: !1,
            });
            this.addNumberedSlider(
              t,
              void 0,
              "chromaticAberrationFactor",
              "ChromaticNumberedSlider",
              this.model,
              [0, 0.1, 0.001]
            );
          },
          addVignetteGroup: function (e) {
            var t = e.createWidget("Group", {
              label: "Vignette",
              tooltip: R.Vignette,
              model: this.model,
              name: "vignetteEnable",
              inner: ge.Z.reify(void 0, { withMargins: !1 }),
              opened: !1,
            });
            this.addNumberedSlider(
              t,
              "Amount",
              "vignetteAmount",
              "VignetteRadiusNumberedSlider",
              this.model
            ),
              this.addNumberedSlider(
                t,
                "Hardness",
                "vignetteHardness",
                "VignetteHardnessNumberedSlider",
                this.model
              );
          },
          addBloomGroup: function (e) {
            var t = e.createWidget("Group", {
                label: "Bloom",
                tooltip: R.Bloom,
                model: this.model,
                name: "bloomEnable",
                inner: ge.Z.reify(void 0, { withMargins: !1 }),
                opened: !1,
              }),
              i = new L.Z({ threshold: this.model.get("bloomThreshold") }),
              o = {
                widgetToModel: function (e) {
                  return 1 - Math.pow(e, 0.5);
                },
                modelToWidget: function (e) {
                  return Math.pow(1 - e, 2);
                },
              };
            this.addNumberedSlider(
              t,
              "Threshold",
              "threshold",
              "BloomThresholdNumberedSlider",
              i,
              void 0,
              { modelToWidget: o.widgetToModel, widgetToModel: o.modelToWidget }
            ),
              new se.Z("threshold", "bloomThreshold", i, this.model, o),
              this.addNumberedSlider(
                t,
                "Intensity",
                "bloomFactor",
                "BloomFactorNumberedSlider",
                this.model,
                [0, 2, 0.01]
              ),
              this.addNumberedSlider(
                t,
                "Radius",
                "bloomRadius",
                "BloomRadiusNumberedSlider"
              );
          },
          addToneMappingGroup: function (e) {
            var t = e.createWidget("Group", {
              label: "Tone mapping",
              tooltip: R.ToneMapping,
              model: this.model,
              name: "toneMappingEnable",
              inner: ge.Z.reify(void 0, { withMargins: !1 }),
              opened: !1,
            });
            t.createWidget("Type", "ToggleButton", {
              model: this.model,
              name: "toneMappingMethod",
              options: {
                default: "Linear",
                reinhard: "Reinhard",
                filmic: "Filmic",
              },
            }),
              this.addNumberedSlider(
                t,
                "Exposure",
                "toneMappingExposure",
                "ToneMappingExposureNumberedSlider",
                this.model,
                [0, 2, 0.01]
              ),
              this.addNumberedSlider(
                t,
                "Brightness",
                "toneMappingBrightness",
                "ToneMappingBrightnessNumberedSlider",
                this.model,
                [-1, 1, 0.01]
              ),
              this.addNumberedSlider(
                t,
                "Contrast",
                "toneMappingContrast",
                "ToneMappingContrastNumberedSlider",
                this.model,
                [-1, 1, 0.01]
              ),
              this.addNumberedSlider(
                t,
                "Saturation",
                "toneMappingSaturation",
                "ToneMappingSaturationNumberedSlider",
                this.model,
                [0, 2, 0.01]
              );
          },
          addColorBalanceGroup: function (e) {
            var t = this.model,
              i = e.createWidget("Group", {
                label: "Color balance",
                tooltip: R.ColorBalance,
                model: t,
                name: "colorBalanceEnable",
                inner: ge.Z.reify(void 0, { withMargins: !0 }),
                opened: !1,
              }),
              o = this.model.get("colorBalanceMid"),
              n = new L.Z({ tone: "Mid", red: o[0], green: o[1], blue: o[2] }),
              a = function (e) {
                var i = [e.get("red"), e.get("green"), e.get("blue")];
                t.set("colorBalance" + e.get("tone"), i);
              };
            n.on("change:red change:green change:blue", a),
              n.on("change:tone", function (e) {
                var i = t.get("colorBalance" + e.get("tone"));
                n.off("change:red change:green change:blue", a),
                  n.set("red", i[0]),
                  n.set("green", i[1]),
                  n.set("blue", i[2]),
                  n.on("change:red change:green change:blue", a);
              }),
              i.createWidget(null, "ToggleButton", {
                model: n,
                name: "tone",
                id: "ColorBalanceToneToggleButton",
                allowMultiple: !1,
                options: {
                  Low: "Shadows",
                  Mid: "Midtones",
                  High: "Highlights",
                },
              });
            var r = i.createWidget(null, "Vertical", { withMargins: !1 }),
              s = [-1, 1, 0.01];
            this.addNumberedSlider(
              r,
              "Red",
              "red",
              "ColorBalanceRedNumberedSlider",
              n,
              s
            ),
              this.addNumberedSlider(
                r,
                "Green",
                "green",
                "ColorBalanceGreenNumberedSlider",
                n,
                s
              ),
              this.addNumberedSlider(
                r,
                "Blue",
                "blue",
                "ColorBalanceBlueNumberedSlider",
                n,
                s
              );
          },
          addDofGroup: function (e) {
            var t = this.model,
              i = this.options.context.getFeatures().background.getModel(),
              o = new L.Z(),
              n = "Depth of field",
              a = e.createWidget("ToggleChildren", {
                model: o,
                name: "usable",
                label: n,
                message: "Requires color/env. background",
              }),
              r = function () {
                var e = i.get("enable"),
                  n = "none" !== e && "fixed" !== e;
                o.set("usable", n),
                  !n &&
                    t.get("dofEnable") &&
                    (new O.Z({
                      content:
                        "Depth of field is not compatible with fixed background or no background, and has been disabled.",
                      class: "info",
                      delay: 5e3,
                    }),
                    t.set("dofEnable", !1));
              };
            o.listenTo(i, "change:enable", r), r();
            var s = a.createWidget("Group", {
              label: n,
              tooltip: R.DOF,
              model: this.model,
              name: "dofEnable",
              inner: ge.Z.reify(void 0, { withMargins: !1 }),
              opened: !1,
            });
            this.addNumberedSlider(
              s,
              "Foreground blur",
              "dofBlurNear",
              "DofBlurNearNumberedSlider",
              this.model
            ),
              this.addNumberedSlider(
                s,
                "Background blur",
                "dofBlurFar",
                "DofBlurFarNumberedSlider",
                this.model
              );
          },
          addSsrGroup: function (e) {
            var t = e.createWidget("Group", {
              model: this.model,
              name: "ssrEnable",
              tooltip: R.ScreenSpaceReflection,
              label: "Screen Space Reflection",
              id: "ScreenSpaceReflectionGroup",
              opened: !1,
              inner: ge.Z.reify(void 0, { withMargins: !1 }),
            });
            this.addNumberedSlider(
              t,
              void 0,
              "ssrFactor",
              "ssrNumberedSlider",
              this.model
            );
          },
          addSsaoGroup: function (e) {
            var t = e.createWidget("Group", {
                label: "SSAO",
                tooltip: R.SSAO,
                model: this.model,
                name: "ssaoEnable",
                inner: ge.Z.reify(void 0, { withMargins: !1 }),
                opened: !1,
              }),
              i = new L.Z({
                radius: this.model.get("ssaoRadius"),
                intensity: this.model.get("ssaoIntensity"),
                bias: this.model.get("ssaoBias"),
              }),
              o = this.model.getMinimumSsaoRadius(),
              n = this.model.getMaximumSsaoRadius(),
              a = this.model.getMinimumSsaoBias(),
              r = this.model.getMaximumSsaoBias(),
              s = pe.Z.getModelBoxWithDisplacement().radius();
            this.addNumberedSlider(
              t,
              "Radius",
              "radius",
              "SsaoRadiusNumberedSlider",
              i,
              [o, n, 0.01 * s]
            ),
              this.addNumberedSlider(
                t,
                "Intensity",
                "intensity",
                "SsaoIntensityNumberedSlider",
                i
              ),
              this.addNumberedSlider(
                t,
                "Bias",
                "bias",
                "SsaoBiasNumberedSlider",
                i,
                [a, r, 0.001 * s]
              ),
              new se.Z("radius", "ssaoRadius", i, this.model),
              new se.Z("intensity", "ssaoIntensity", i, this.model),
              new se.Z("bias", "ssaoBias", i, this.model);
          },
          addTaa: function (e) {
            e.createWidget("Group", {
              label: "Antialiasing",
              id: "AntialiasingGroup",
              opened: !1,
            })
              .createWidget("Group", {
                label: "Temporal Antialiasing",
                tooltip: R.TemporalAntialiasing,
                model: this.model,
                name: "taaEnable",
                inner: ge.Z.reify(void 0, { withMargins: !1 }),
                opened: !0,
              })
              .createWidget("Checkbox", {
                model: this.model,
                name: "taaTransparent",
                label: "Enabled on transparent pixels",
              });
          },
          addNumberedSlider: function (e, t, i, o, n, a, r) {
            return (
              e.createWidget("Label", { content: t, withMargins: !1 }),
              e.createWidget(null, "NumberedSlider", {
                id: o,
                model: n || this.model,
                name: i,
                minimum: a ? a[0] : 0,
                maximum: a ? a[1] : 1,
                step: a ? a[2] : 0.01,
                numberOptions: {
                  renderValue: r && r.modelToWidget,
                  inputValue: r && r.widgetToModel,
                },
              })
            );
          },
        });
        var fe = {
          FeatureName: "postprocessUI",
          ModelName: "PostProcess",
          ViewListType: [me],
        };
        const ve = Z.Z.create(fe);
        var be = i("k46e"),
          we = i("xr2m"),
          ye = i("+uBU"),
          xe = {
            ThreePointLight: {
              name: "Three-point Lighting",
              description: "3 × Direction",
            },
            FullMoonNight: {
              name: "Full Moon Night",
              description: "3 × Direction",
            },
            LowKeyLight: {
              name: "Low Key Lighting",
              description: "2 × Direction",
            },
            EvilGenius: { name: "Evil Genius", description: "3 × Direction" },
            FairyCamp: { name: "Fairy Camp", description: "3 × Direction" },
            TwoHeadLightV1: { name: "Default", description: "2 × Direction" },
          };
        const ke = ye.Z.extend({
          events: (0, be.Z)({}, ye.Z.prototype.events, {
            "click [data-preset]": "onPresetSelected",
          }),
          className: "lighting-preset-popup",
          header: function () {
            return (0, we.Z)(
              [
                '<div class="popup-name">',
                "    Select a preset",
                "</div>",
                '<div class="popup-actions">',
                '    <a class="popup-action-close"></a>',
                "</div>",
              ].join("\n"),
              {}
            )();
          },
          content: function () {
            return (0, we.Z)(
              [
                '<ul class="preset-list">',
                "   <% for (var id in presets) { %>",
                '   <li class="preset-list-item">',
                '       <div class="preset-list-preset" data-preset="<%= id %>">',
                '           <div class="preset-image preset-id-<%= id %>"></div>',
                '           <span class="preset-name"><%= presets[id].name %></span>',
                '           <span class="preset-description"><%= presets[id].description %></span>',
                "       </div>",
                "   </li>",
                "   <% } %>",
                "</ul>",
              ].join("\n")
            )({ presets: xe });
          },
          onPresetSelected: function (e) {
            this.options.model.set(
              "preset",
              m()(e.currentTarget).attr("data-preset")
            ),
              this.options.model.set("preset", ""),
              this.close();
          },
        });
        var Te = i("Wuy/"),
          Ce = i("6IJz");
        const Se = Ce.Z.extend({
          el: [
            '<div class="widget light-row-widget">',
            '      <div class="widget-wrapper">',
            "          <label>",
            '             <i class="light-color"></i>',
            '             <span class="name"></span>',
            '             <i class="fa-regular fa-exclamation-triangle warning-icon" title="Some settings may cause an issue"></i>',
            "          </label>",
            '          <label class="reset-position" title="Move to center">',
            '              <i class="fa-regular fa-crosshairs"></i>',
            "          </label>",
            '          <label class="toggle-enable" title="Show/Hide">',
            '              <i class="fa-regular fa-eye"></i>',
            "          </label>",
            "      </div>",
            "</div>",
          ].join(""),
          events: (0, be.Z)({}, Ce.Z.prototype.events, {
            "click .toggle-enable": "toggle",
            "click .reset-position": "resetPosition",
          }),
          initialize: function (e) {
            (e = (0, Te.Z)(e || {}, { name: null }, e)),
              Ce.Z.prototype.initialize.call(this, e),
              this.model.on(
                "change:displayWarning",
                this._toggleWarning.bind(this)
              );
          },
          render: function () {
            this.$el.toggleClass("enabled", this.model.get("enable"));
            var e = this.model.get("value") + 1,
              t = {
                NONE: "None",
                DIRECTION: "Direction",
                POINT: "Point",
                SPOT: "Spot",
                HEMI: "Hemi",
              }[this.model.get("type")],
              i = e + " : " + t;
            this.$(".name").text(i);
            var o = this.model.get("color"),
              n = Math.floor(255 * o[0]),
              a = Math.floor(255 * o[1]),
              r = Math.floor(255 * o[2]);
            "None" !== t
              ? (this.$(".light-color").css("visibility", "visible"),
                this.$(".light-color").css(
                  "background-color",
                  "rgb(" + n + "," + a + "," + r + ")"
                ))
              : this.$(".light-color").css("visibility", "hidden"),
              this.$(".toggle-enable").toggle(
                "NONE" !== this.model.get("type")
              ),
              this.$(".reset-position").toggle(
                "NONE" !== this.model.get("type")
              ),
              this._toggleWarning();
          },
          _toggleWarning: function () {
            this.$(".warning-icon").toggleClass(
              "visible",
              !!this.model.get("displayWarning")
            );
          },
          toggle: function (e) {
            e.stopPropagation();
            var t = this.model.get("enable");
            this.model.set({ enable: !t });
          },
          resetPosition: function (e) {
            e.stopPropagation(), this.model.resetPosition();
          },
        });
        var _e = i("KXnA"),
          Me = i("MQQR");
        const Ze = x.Z.extend({
          initialize: function () {
            x.Z.prototype.initialize.apply(this, arguments);
            var e = this.options.context.getWidgetAPI(),
              t = e.getTab("Lighting"),
              i = this.model.get("lights"),
              o = new L.Z(),
              n = function () {
                o.set("useful", _e.Z.get("mask") & _e.Z.LIT);
              };
            o.listenTo(_e.Z, "change:mask", n), n();
            var a = t.createWidget("ToggleChildren", {
              model: o,
              name: "useful",
            });
            (this._group = a.createWidget("Group", {
              model: this.model,
              label: "Lights",
              name: "enable",
              tooltip: R.LightsGroup,
              id: "LightsGroup",
              opened: !0,
            })),
              this.model.on("uiReady", this.buildLights.bind(this, e, t, i));
          },
          buildLights: function (e, t, i) {
            var o = new L.Z({ selectedLight: null }),
              n = new X.Z(i);
            n.each(
              function (e, t) {
                e.set({
                  label: "Light " + t,
                  value: t,
                  selected: !1,
                  displayWarning: this._isDisplayLightWarning(e),
                });
              }.bind(this)
            ),
              o.on("change:selectedLight", function (e) {
                n.each(function (t) {
                  t.get("selected") && t.set("selected", !1),
                    t.get("value").toString() === e.get("selectedLight") &&
                      t.set("selected", !0);
                });
              });
            var a = this._group.createWidget(null, "Button", {
              text: "Load lighting preset",
            });
            a.model.on("click", function () {
              new ke(e.getAPI(), { model: a.model });
            }),
              a.model.on(
                "change:preset",
                function (e) {
                  var t = e.get("preset");
                  t && this.model.setPreset(t);
                }.bind(this)
              ),
              this._group.createWidget(null, "Options", {
                allowEmpty: !0,
                id: "LightingSelect",
                model: o,
                name: "selectedLight",
                options: n,
                rowClass: Se,
              });
            var r = {
              widgetToModel: function (e) {
                return null === e ? -1 : parseInt(e, 10);
              },
              modelToWidget: function (e) {
                return e.toString();
              },
            };
            new se.Z("selectedLight", "select", o, this.model, r),
              n.each(
                function (e) {
                  this.createLightWidget(e);
                }.bind(this)
              );
          },
          createLightWidget: function (e) {
            var t = this._group
                .createWidget("Hyde", { model: e, name: "selected" })
                .createWidget("Panel", { label: "Light properties" }),
              i = e.get("color"),
              o = new L.Z({
                color: { r: i[0], g: i[1], b: i[2] },
                "color.factor": 1,
                "color.original": { r: i[0], g: i[1], b: i[2] },
              });
            o.on("change", function (t) {
              var i = t.get("color.original");
              e.set("color", [i.r, i.g, i.b]);
            }),
              e.on("change:color", function () {
                var t = e.get("color");
                o.set({
                  color: { r: t[0], g: t[1], b: t[2] },
                  "color.factor": 1,
                  "color.original": { r: t[0], g: t[1], b: t[2] },
                });
              }),
              t.createWidget("ToggleButton", {
                model: e,
                name: "type",
                options: {
                  NONE: "None",
                  DIRECTION: "Direction",
                  POINT: "Point",
                  SPOT: "Spot",
                  HEMI: "Hemi",
                },
              });
            var n = new L.Z(),
              a = function (e) {
                var t = e.get("type");
                n.set({
                  isNone: "NONE" === t,
                  isLight: "NONE" !== t,
                  isDirectional: "DIRECTION" === t,
                  isPoint: "POINT" === t,
                  isSpot: "SPOT" === t,
                  isHemi: "HEMI" === t,
                });
              };
            a(e),
              n.listenTo(e, "change:type", a),
              n.listenTo(e, "change:attachedToCamera", a),
              this.createCommonWidgets(n, e, o, t),
              this.createDirectionLightWidgets(n, e, t),
              this.createPointLightWidgets(n, e, t),
              this.createSpotLightWidgets(n, e, t),
              this.createHemiLightWidgets(n, e, t);
          },
          createCommonWidgets: function (e, t, i, o) {
            var n = o
              .createWidget("Hyde", { model: e, name: "isLight" })
              .createWidget("Horizontal");
            n.createWidget("FactoredImage", {
              model: i,
              name: "color",
              className: "light-color-widget",
              imageOptions: { allowColor: !0, allowTexture: !1 },
            }),
              this.addIntensityWidget(n, t, "intensity");
          },
          createDirectionLightWidgets: function (e, t, i) {
            var o = i.createWidget("Hyde", { model: e, name: "isDirectional" });
            o.createWidget("Hyde", {
              model: t,
              name: "displayWarning",
            }).createWidget("Warning", {
              content:
                "When a light is attached to the camera, enabling shadows can cause performance issues.",
            });
            var n = function () {
              t.set("displayWarning", this._isDisplayLightWarning(t));
            }.bind(this);
            t.on("change:castShadows", n),
              t.on("change:attachedToCamera", n),
              t.on("change:type", n),
              o.createWidget("ToggleSwitch", {
                label: "Attached to camera",
                model: t,
                name: "attachedToCamera",
              }),
              this.addShadows(t, o);
          },
          _isDisplayLightWarning: function (e) {
            return e.isAttachedToCamera() && e.isCastingShadows();
          },
          createPointLightWidgets: function (e, t, i) {
            var o = i.createWidget("Hyde", { model: e, name: "isPoint" });
            this.addFalloffWidget(o, t);
          },
          createSpotLightWidgets: function (e, t, i) {
            var o = i.createWidget("Hyde", { model: e, name: "isSpot" });
            this.addFalloffWidget(o, t),
              o.createWidget("Angle", "NumberedSlider", {
                model: t,
                name: "angle",
                minimum: 1,
                maximum: 90,
                step: 1,
              }),
              o.createWidget("Softness", "NumberedSlider", {
                model: t,
                name: "hardness",
                minimum: 0,
                maximum: 1,
                step: 0.01,
              }),
              o.createWidget("Separator"),
              this.addShadows(t, o);
          },
          addShadows: function (e, t) {
            t.createWidget("ToggleSwitch", {
              label: "Cast shadows",
              model: e,
              name: "castShadows",
            });
            var i = new L.Z({ proxyShadowBias: 0 });
            t.createWidget("Shadows bias", "NumberedSlider", {
              model: i,
              name: "proxyShadowBias",
              minimum: 0,
              maximum: 1,
              step: 0.001,
            }),
              new se.Z(
                "proxyShadowBias",
                "shadowBias",
                i,
                e,
                G.Z.createScaleXPow(1, 4)
              ),
              (0, Me.Z)().shadowNormalOffset &&
                ((i = new L.Z({ proxyShadowNormalBias: 0 })),
                t.createWidget("Shadows Normal bias", "NumberedSlider", {
                  model: i,
                  name: "proxyShadowNormalBias",
                  minimum: 0,
                  maximum: 1,
                  step: 0.001,
                }),
                new se.Z(
                  "proxyShadowNormalBias",
                  "shadowNormalBias",
                  i,
                  e,
                  G.Z.createScaleXPow(1, 4)
                ));
          },
          createHemiLightWidgets: function (e, t, i) {
            var o = new L.Z(),
              n = function () {
                o.set("isPBR", _e.Z.get("mask") & _e.Z.PBR),
                  o.set("isClassic", _e.Z.get("mask") & _e.Z.CLASSIC);
              };
            o.listenTo(_e.Z, "change:mask", n), n();
            var a = t.get("ground"),
              r = new L.Z({
                color: { r: a[0], g: a[1], b: a[2] },
                "color.factor": 100,
                "color.original": { r: a[0], g: a[1], b: a[2] },
              });
            r.on("change", function (e) {
              var i = e.get("color.original");
              t.set("ground", [i.r, i.g, i.b]);
            });
            var s = i.createWidget("Hyde", { model: e, name: "isHemi" });
            s.createWidget("Hyde", { model: o, name: "isPBR" }).createWidget(
              "Warning",
              { content: "In PBR, Hemi lights work as Direction" }
            );
            var l = s
              .createWidget("Hyde", { model: o, name: "isClassic" })
              .createWidget("Horizontal");
            l.createWidget("FactoredImage", {
              model: r,
              name: "color",
              className: "light-color-widget",
              imageOptions: { allowColor: !0, allowTexture: !1 },
            }),
              this.addIntensityWidget(l, t, "intensityGround"),
              s.createWidget("ToggleSwitch", {
                label: "Attached to camera",
                model: t,
                name: "attachedToCamera",
              });
          },
          addFalloffWidget: function (e, t) {
            var i = new L.Z({ proxyFallOff: 0 });
            e.createWidget("Falloff", "NumberedSlider", {
              model: i,
              name: "proxyFallOff",
              minimum: 0,
              maximum: 1,
              step: 0.01,
            });
            var o = Math.max(
              t.get("falloff"),
              1e3 / this.model._root.getMinimumBound().radius2()
            );
            (t.multUI_ = 1 / o),
              new se.Z(
                "proxyFallOff",
                "falloff",
                i,
                t,
                G.Z.createScaleXPow(o, 8)
              );
          },
          addIntensityWidget: function (e, t, i) {
            var o = new L.Z({ proxyIntensity: 0 }),
              n = 2 * Math.max(10, t.get(i)) - 2,
              a = {
                widgetToModel: function (e) {
                  return e <= 0.5 ? 2 * e : 1 + (e - 0.5) * n;
                },
                modelToWidget: function (e) {
                  return e <= 1 ? e / 2 : (e - 1) / n + 0.5;
                },
              };
            e.createWidget("NumberedSlider", {
              model: o,
              name: "proxyIntensity",
              className: "light-intensity-widget",
              minimum: 0,
              maximum: 1,
              step: 0.001,
              numberOptions: {
                renderValue: a.widgetToModel,
                inputValue: a.modelToWidget,
              },
            }),
              new se.Z("proxyIntensity", i, o, t, a);
          },
        });
        var We = {
          FeatureName: "lightingUI",
          ModelName: "Lighting",
          ViewListType: [Ze],
        };
        const Ee = Z.Z.create(We);
        var Pe = i("lqp/"),
          Oe = i("IAxr"),
          Ae = i("X9mO"),
          Fe = i("ogfj"),
          Ne = i("KDlt");
        i("ldIZ");
        const Re = O.Z.extend({
          template: function () {
            return Ne.Z.getFromMacro(
              "front/macros/notification_upload",
              "flashmessage_upload",
              []
            );
          },
          setProgress: function (e) {
            return (
              "string" == typeof e
                ? this.$(".value").html(e)
                : this.$(".value").html(e.toFixed(0) + "%"),
              this
            );
          },
          setMessage: function (e) {
            return this.$(".message").html(e), this;
          },
          setDoneStatus: function (e) {
            return this.$(".done").toggleClass("error", !e), this;
          },
          showSection: function (e) {
            return (
              this.$("section.visible").removeClass("visible"),
              this.$("section." + e).addClass("visible"),
              this
            );
          },
          toggleCloseButton: function (e) {
            return (
              this.$(".flashmessage-close").toggleClass("visible", e), this
            );
          },
        });
        var De = i("Kjxj"),
          Be = i("1XKa"),
          Ie = [0, 0.02, 0.055, 0.1];
        const Le = x.Z.extend({
          mixins: [De.Z],
          initialize: function () {
            x.Z.prototype.initialize.apply(this, arguments);
            var e = this.options.context.getWidgetAPI(),
              t = e.getTab("Lighting");
            (this._proxyCollection = new X.Z()),
              (this._group = t.createWidget("Group", {
                label: "Environment",
                tooltip: R.EnvironmentGroup,
                model: this.model,
                name: "enable",
                id: "EnvironmentGroup",
                opened: !0,
              })),
              (this._imagePreviewModel = new L.Z({ image: "" })),
              (this.me = f.Z.me()),
              this.onSyncCollection(),
              this.buildGroup(),
              this.syncPreview(),
              m()(this._group.el).css("position", "relative"),
              this.initializeDragAndDrop({
                target: this._group.el,
                dropbox: this._group.el,
              });
          },
          onFilesDrop: function (e) {
            (0, Pe.Z)(e, this.onAddNewEnvironment.bind(this));
          },
          filterLegacyEnvironment: function () {
            for (
              var e = this.options.context
                  .getFeatures()
                  .environment.getModel()
                  .get("uid"),
                t = 0,
                i = Be.Z.length;
              t < i;
              t++
            ) {
              var o = Be.Z[t];
              if (o !== e) {
                var n = this._proxyCollection.findWhere({ value: o });
                n && n.destroy();
              }
            }
          },
          buildGroup: function () {
            this.model.environmentCollection.on(
              "add",
              this.onAddedElement.bind(this)
            ),
              this.model.on(
                "uploadSelectEvent",
                this.onAddNewEnvironment,
                this
              ),
              this.filterLegacyEnvironment(),
              (this._environmentSelect = this._group.createWidget("Select", {
                model: this.model,
                name: "uid",
                image: "image",
                options: this._proxyCollection,
                placeholder: "Select an environment",
                id: "EnvironmentSelect",
                deleteButtonSelector: ".option-row__label",
                className: "--large-image",
              })),
              (0, Oe.Z)(
                this._group.model.environmentCollection.models,
                function (e) {
                  return !e.attributes.isDefault;
                }
              ).forEach(
                function (e) {
                  this._group.$el
                    .find("[data-value=" + e.id + "]")
                    .addClass("--deletable");
                }.bind(this)
              ),
              this._environmentSelect.on(
                "delete",
                this.onRemoveEnvironment.bind(this)
              ),
              this._group.createWidget("ImagePreview", {
                model: this._imagePreviewModel,
                name: "image",
                height: 130,
              });
            var e = this.options.context.getModel().toJSON();
            (0, k.Ov)("pro", e)
              ? this._group.createWidget("FilePicker", {
                  model: this.model,
                  text: "Import HDR file",
                  id: "EnvironmentFilePicker",
                  accept: w.Z.environmentFiletypes,
                })
              : this._group.createWidget("Label", {
                  content: [
                    '<a href="' +
                      (0, N.HQ)("pages:plans") +
                      '" target="_blank">Upgrade your account</a> ',
                    "to upload your custom environments",
                  ].join(""),
                  escape: !1,
                  className: "upgrade",
                  id: "EnvironmentLabel",
                });
            var t = this._group.createWidget("Button", {
                text: "Set as background",
                model: this.model,
                event: "clickOverrideBackground",
                id: "EnvironmentBackgroundGroup",
              }),
              i = this.options.context.getFeatures().background.getModel(),
              o = function (e, i) {
                "environment" === i || "ambient" === i
                  ? t.disable()
                  : t.enable(),
                  m()("#EnvironmentBackgroundGroup button").blur();
              };
            i.on("change:enable", o),
              o(0, i.get("enable")),
              this.model.on("clickOverrideBackground", function () {
                i.trigger("useBackgroundEnvironment");
              });
            var n = new L.Z({
                blur: this.getClosestBlur(this.model.get("blur")).toString(),
              }),
              a = G.Z.createScaleXPow(35, 4),
              r = G.Z.DegToRad;
            new se.Z("rotation", "rotation", n, this.model, r),
              new se.Z("exposure", "exposure", n, this.model, a),
              this._group.createWidget("Orientation", "NumberedSlider", {
                id: "EnvironmentRotationNumberedSlider",
                model: n,
                name: "rotation",
                minimum: 0,
                maximum: 360,
                numberOptions: { unit: "°" },
              }),
              this._group.createWidget("Brightness", "NumberedSlider", {
                model: n,
                name: "exposure",
                minimum: 0,
                maximum: 1,
                step: 0.001,
                numberOptions: {
                  renderValue: a.widgetToModel,
                  inputValue: a.modelToWidget,
                },
                id: "EnvironmentExposureNumberedSlider",
              }),
              this.addShadowGroup(n);
          },
          onRemoveEnvironment: function (e) {
            var t = this.model.environmentCollection.get(e),
              i = t.get("name"),
              o = new ne.Z({
                title: "Delete " + i,
                text: [
                  'Are you sure you want to delete this environment: "' +
                    i +
                    '"?',
                ].join(" "),
                buttons: {
                  delete: !0,
                  deleteLabel: "DELETE ENVIRONMENT",
                  cancel: !0,
                },
              });
            o.open().then(
              function () {
                var i = this.options.context
                    .getFeatures()
                    .environment.getModel(),
                  n = this.options.context
                    .getFeatures()
                    .environment.getModel()._trashbin;
                if (t.get("uid") === i.get("uid")) {
                  var a = this.model.environmentCollection
                    .findWhere({ isDefault: !0 })
                    .get("uid");
                  this._environmentSelect.close(), this.model.set("uid", a);
                }
                this._proxyCollection.findWhere({ value: e }).destroy(),
                  this._environmentSelect.setCursor(0),
                  this._environmentSelect.applyCursorToSelection(),
                  n.push(t),
                  t.on(
                    "restore",
                    this.model.environmentCollection.add.bind(
                      this.model.environmentCollection
                    )
                  ),
                  o.close();
              }.bind(this),
              function () {
                o.close();
              }
            );
          },
          onAddNewEnvironment: function (e) {
            var t = this,
              i = new FormData(),
              o = Fe.Z.validateFile(e);
            if (o) {
              var n = new ne.Z({
                title: "Invalid environment",
                text: o,
                safe: !0,
                buttons: { ok: !0 },
              });
              return (
                n.open().then(function () {
                  n.close();
                }),
                n
              );
            }
            var a = new Re(),
              r = function (e) {
                var t = ((e.loaded / e.total) * 100).toFixed(0) + "%";
                a.setProgress(t);
              };
            a.showSection("uploading").setMessage("Uploading your environment");
            var s = this.options.context.getModel().get("uid");
            i.append("environmentFile", e),
              i.append("modelUid", s),
              new (J())(function (e, t) {
                m().ajax({
                  url: "/i/environments",
                  type: "POST",
                  data: i,
                  cache: !1,
                  contentType: !1,
                  processData: !1,
                  xhr: function () {
                    var e = m().ajaxSettings.xhr();
                    return (
                      e.upload && e.upload.addEventListener("progress", r, !1),
                      e
                    );
                  },
                  success: e.bind(this),
                  error: t.bind(this),
                });
              })
                .then(function (e) {
                  a.showSection("idle")
                    .setDoneStatus(!0)
                    .toggleCloseButton(!0)
                    .setMessage("Processing your environment");
                  var i = new Fe.Z({ uid: e.uid });
                  i.checkStatusAndRetry().then(function (e) {
                    "SUCCEEDED" === e.processing.toUpperCase()
                      ? i.fetch().then(
                          function () {
                            t.model.environmentCollection.add(i),
                              a
                                .showSection("done")
                                .toggleCloseButton(!0)
                                .setDoneStatus(!0)
                                .close(5e3)
                                .setMessage(
                                  "Your environment is ready for use"
                                );
                          },
                          function () {
                            a.showSection("done")
                              .toggleCloseButton(!0)
                              .setDoneStatus(!0)
                              .close(5e3)
                              .setMessage(
                                "Environment ready. Please reload the page to use it."
                              );
                          }
                        )
                      : a
                          .showSection("done")
                          .toggleCloseButton(!0)
                          .setDoneStatus(!1)
                          .setMessage(
                            "Error while processing your environment"
                          );
                  });
                })
                .catch(function () {
                  a.showSection("done")
                    .setDoneStatus(!1)
                    .toggleCloseButton(!0)
                    .setMessage("Error while uploading your environment");
                });
          },
          getClosestBlur: function (e) {
            for (var t = e, i = Ie[0], o = 0, n = Ie.length; o < n; o++) {
              var a = Math.abs(e - Ie[o]);
              a < t && ((t = a), (i = Ie[o]));
            }
            return i;
          },
          addShadowGroup: function () {
            var e = this._group.createWidget(null, "ToggleChildren", {
              model: this.model,
              name: "uid",
              id: "toggleMask",
              transform: function () {
                var e = this.model.getEnvironment().get("lights");
                return (
                  void 0 !== e && e.length > 0 && _e.Z.get("mask") & _e.Z.LIT
                );
              },
            });
            _e.Z.bind("change:mask", e.render.bind(e));
            var t = e.createWidget("Group", {
              label: "Shadow",
              model: this.model,
              id: "ShadowEnvGroup",
              name: "shadowEnable",
              inner: ge.Z.reify(void 0, { withMargins: !1 }),
              opened: !0,
            });
            t.on("change.before", function (e) {
              var t = e.target.model.getEnvironment().get("lights"),
                i = _e.Z.get("mask") & _e.Z.LIT;
              if (!(void 0 !== t && t.length > 0 && i)) {
                var o;
                o = i
                  ? 'This environment can not cast shadows. Refer to <a target="_blank" href="https://support.fab.com/s/article/Lighting">our help center</a> for more information.'
                  : 'Environment shadows require shading to be "lit".';
                var n = new ne.Z({
                  title: "Disabled",
                  text: o,
                  safe: !0,
                  buttons: { ok: !0 },
                });
                n.open().then(function () {
                  n.close();
                }),
                  e.preventDefault();
              }
            }),
              t.createWidget("Light intensity", "NumberedSlider", {
                model: this.model,
                name: "lightIntensity",
                minimum: 0,
                maximum: 5,
                step: 0.25,
                id: "EnvironmentLightIntensityNumberedSlider",
              });
            var i = new L.Z({ proxyShadowBias: 0 }),
              o = G.Z.createScaleXPow(1, 4);
            t.createWidget("Shadows bias", "NumberedSlider", {
              model: i,
              name: "proxyShadowBias",
              minimum: 0,
              maximum: 1,
              step: 0.001,
              id: "EnvironmentShadowBiasNumberedSlider",
              numberOptions: {
                renderValue: o.widgetToModel,
                inputValue: o.modelToWidget,
              },
            }),
              new se.Z("proxyShadowBias", "shadowBias", i, this.model, o);
          },
          onSyncCollection: function () {
            this._proxyCollection.reset(),
              this.model
                .getEnvironmentCollection()
                .each(this.onAddedElement.bind(this)),
              this.model.checkEnvironmentValidity();
          },
          syncPreview: function () {
            var e = function () {
              if (this.model.get("uid")) {
                var e = this._proxyCollection.findWhere({
                  value: this.model.get("uid"),
                });
                e && this._imagePreviewModel.set("image", e.get("image"));
              }
            }.bind(this);
            e(), this._imagePreviewModel.listenTo(this.model, "change:uid", e);
          },
          onAddedElement: function (e) {
            var t = "",
              i = (0, Ae.Z)(e.get("textures"), { type: "thumbnail" });
            i && i.images && (t = i.images[0].file),
              this._proxyCollection.add({
                label: e.get("name"),
                value: e.get("uid"),
                image: t,
                deletable: !e.get("isDefault"),
              });
          },
        });
        var Ge = {
          FeatureName: "environmentUI",
          ModelName: "Environment",
          ViewListType: [Le],
        };
        const $e = Z.Z.create(Ge);
        var He = i("qqsP"),
          ze = i("mv18"),
          Ue = i("AuQH"),
          je = i("aMVL"),
          Ve = i("Sgtb"),
          Ye = i("Igo1"),
          Xe = i("l5lH"),
          qe = i("QX1t"),
          Ke = i("aqzA"),
          Qe = Ke.Z.osg,
          Je = (0, qe.Z)(Qe.Texture),
          et = {};
        (et.default = G.Z.PassThrough),
          (et["Opacity.ior"] = G.Z.createScaleXPowOffset(1, 6, 1)),
          (et["Opacity.iorInvertUI"] = G.Z.createScaleXPowOffset(1, 1 / 6, 1)),
          (et["Opacity.thinLayer"] = {
            widgetToModel: function (e) {
              return "thin" === e;
            },
            modelToWidget: function (e) {
              return e ? "thin" : "standard";
            },
          }),
          (et.cullFace = {
            widgetToModel: function (e) {
              return "single" === e ? Qe.CullFace.BACK : Qe.CullFace.DISABLE;
            },
            modelToWidget: function (e) {
              return e === Qe.CullFace.DISABLE ? "double" : "single";
            },
          }),
          (et.textureOptions = {
            widgetToModel: function (e) {
              return Qe.Texture[e];
            },
            modelToWidget: function (e) {
              return Je[e];
            },
          }),
          (et.texCoordUnit = {
            widgetToModel: function (e) {
              return void 0 !== e ? parseInt(e, 10) : void 0;
            },
            modelToWidget: function (e) {
              return void 0 !== e ? e.toString() : void 0;
            },
          });
        const tt = {
          functors: et,
          getFunctor: function (e) {
            var t = et[e];
            if (t) return t;
            var i = e.split("."),
              o = i[i.length - 1];
            return "texCoordUnit" === o
              ? et.texCoordUnit
              : "minFilter" === o ||
                "internalFormat" === o ||
                "wrapS" === o ||
                "wrapT" === o
              ? et.textureOptions
              : et.default;
          },
        };
        var it = function (e, t, i, o) {
          se.Z.call(this, e, t, i, o, tt.getFunctor(e));
        };
        it.prototype = se.Z.prototype;
        const ot = it;
        var nt = function (e, t, i, o) {
          (this._isOpacity = "Opacity" === t),
            this._isOpacity &&
              o.on("change:type", this.changeWidgetToModel.bind(this)),
            ot.call(this, e, t, i, o);
        };
        nt.prototype = (0, be.Z)({}, ot.prototype, {
          connectSignalModelToWidget: function () {
            this._model.on("setFactor", this.changeModelToWidget, this);
          },
          removeSignalModelToWidget: function () {
            this._model.off("setFactor", this.changeModelToWidget);
          },
          changeModelToWidget: function () {
            var e = this._model.getFactor();
            this.removeSignalWidgetToModel(),
              this._widget.set(this._widgetField, this._func.modelToWidget(e)),
              this.connectSignalWidgetToModel();
          },
          changeWidgetToModel: function () {
            var e = this._widget.get(this._widgetField);
            this.removeSignalModelToWidget(),
              this._model.setFactor(this._func.widgetToModel(e)),
              this.connectSignalModelToWidget();
          },
        });
        const at = nt;
        var rt = Ke.Z.osg,
          st = function (e, t, i, o, n) {
            (this._channel = n), ot.call(this, e, t, i, o);
          };
        st.prototype = (0, be.Z)({}, ot.prototype, {
          updateTexture: function () {
            this.removeSignals(),
              (this._model = this._channel.getTextureModel()),
              this.init();
          },
          changeWidgetToModel: function () {
            if (this._channel.getTextureModel()) {
              var e = this._widget.get(this._widgetField);
              this.removeSignalModelToWidget();
              var t = this._func.widgetToModel(e);
              this._model.set(this._modelField, t),
                "minFilter" === this._modelField &&
                  this._model.set(
                    "magFilter",
                    t === rt.Texture.LINEAR_MIPMAP_LINEAR
                      ? rt.Texture.LINEAR
                      : t
                  );
              var i = this._channel;
              if (this._widgetField.indexOf("uvTransform") > 0) {
                var o = i.getOrCreateUVTransforms(),
                  n = this._widget.get(
                    this._widgetField.substring(
                      0,
                      this._widgetField.length - 1
                    ) + "Linked"
                  );
                "scaleX" === this._modelField &&
                  ((o.scale[0] = t), n && (o.scale[1] = t)),
                  "scaleY" === this._modelField &&
                    ((o.scale[1] = t), n && (o.scale[0] = t)),
                  "rotation" === this._modelField && (o.rotation = t),
                  "offsetX" === this._modelField &&
                    ((o.offset[0] = t), n && (o.offset[1] = t)),
                  "offsetY" === this._modelField &&
                    ((o.offset[1] = t), n && (o.offset[0] = t)),
                  i.changeTexCoordTransform();
              }
              var a = i.getTextureModel();
              a.updateMultiresTexture(),
                i.setTextureModel(a),
                this.connectSignalModelToWidget();
            }
          },
          changeModelToWidget: function () {
            var e;
            if (
              (this.removeSignalWidgetToModel(),
              this._widgetField.indexOf("uvTransform") > 0)
            ) {
              var t = this._channel.getOrCreateUVTransforms();
              "scaleX" === this._modelField && (e = t.scale[0]),
                "scaleY" === this._modelField && (e = t.scale[1]),
                "rotation" === this._modelField && (e = t.rotation),
                "offsetX" === this._modelField && (e = t.offset[0]),
                "offsetY" === this._modelField && (e = t.offset[1]);
            } else e = this._model.get(this._modelField);
            this._widget.set(this._widgetField, this._func.modelToWidget(e)),
              this.connectSignalWidgetToModel();
          },
        });
        var lt = function (e, t, i) {
          (this._signals = []), this.init(e, t, i);
        };
        lt.prototype = {
          init: function (e, t, i) {
            var o = i.getTextureModel(),
              n = this._signals;
            n.push(new st(e + ".texCoordUnit", "texCoordUnit", t, o, i)),
              n.push(new st(e + ".minFilter", "minFilter", t, o, i)),
              n.push(new st(e + ".internalFormat", "internalFormat", t, o, i)),
              n.push(new st(e + ".wrapS", "wrapS", t, o, i)),
              n.push(new st(e + ".wrapT", "wrapT", t, o, i)),
              n.push(new st(e + ".uvTransformScaleX", "scaleX", t, o, i)),
              n.push(new st(e + ".uvTransformScaleY", "scaleY", t, o, i)),
              n.push(new st(e + ".uvTransformRotation", "rotation", t, o, i)),
              n.push(new st(e + ".uvTransformOffsetX", "offsetX", t, o, i)),
              n.push(new st(e + ".uvTransformOffsetY", "offsetY", t, o, i));
          },
          updateTexture: function () {
            for (
              var e = this._signals, t = 0, i = this._signals.length;
              t < i;
              ++t
            )
              e[t].updateTexture();
          },
          removeSignals: function () {
            for (
              var e = this._signals, t = 0, i = this._signals.length;
              t < i;
              ++t
            )
              e[t].removeSignals();
          },
        };
        const dt = lt;
        var ct = i("C/2N"),
          ut = function (e, t, i) {
            (this._field = e),
              (this._widget = t),
              (this._model = i),
              (this._signalTexture = void 0),
              this.init();
          };
        ut.prototype = {
          init: function () {
            var e = this._model.getTextureModel();
            (this._signalTexture = e
              ? new dt(this._field, this._widget, this._model)
              : void 0),
              this.connectSignalModelToWidget(),
              this.connectSignalWidgetToModel(),
              this.changeModelTextureToWidget(),
              this.changeModelColorToWidget();
          },
          removeSignals: function () {
            void 0 !== this._signalTexture &&
              this._signalTexture.removeSignals(),
              this._model.off(null, this.changeModelTextureToWidget, this),
              this._model.off(null, this.changeModelColorToWidget, this),
              this._widget.off(null, this.changeWidgetToModel, this);
          },
          connectSignalModelToWidget: function () {
            this._model.on(
              "setTextureModel",
              this.changeModelTextureToWidget,
              this
            ),
              this._model.on("setColor", this.changeModelColorToWidget, this);
          },
          removeSignalModelToWidget: function () {
            this._model.off("setTextureModel", this.changeModelTextureToWidget),
              this._model.off("setColor", this.changeModelColorToWidget);
          },
          connectSignalWidgetToModel: function () {
            this._widget.on(
              "change:" + this._field,
              this.changeWidgetToModel,
              this
            );
          },
          removeSignalWidgetToModel: function () {
            this._widget.off("change:" + this._field, this.changeWidgetToModel);
          },
          updateTextureSignals: function () {
            var e = !!this._model.getTextureModel();
            this._widget.trigger(this._field + ".displayUV", e),
              e &&
                (this._signalTexture
                  ? this._signalTexture.updateTexture()
                  : (this._signalTexture = new dt(
                      this._field,
                      this._widget,
                      this._model
                    )));
          },
          changeModelColorToWidget: function () {
            this.removeSignalWidgetToModel();
            var e = this._model.getColor && this._model.getColor();
            if ("SubsurfaceTranslucency.original" === this._field)
              this._widget.set(this._field, { r: 1, g: 1, b: 1 });
            else if (e) {
              var t = { r: (e = ct.ZP.linearToSrgb(e))[0], g: e[1], b: e[2] };
              this._widget.set(this._field, t);
            } else
              this._model.getTextureModel() ||
                this._widget.set(this._field, { r: 1, g: 1, b: 1 });
            this.updateTextureSignals(), this.connectSignalWidgetToModel();
          },
          _setModelTextureToWidget: function (e) {
            this._model.get("material").get("id") ===
              this._widget.get("material") &&
              (this.removeSignalWidgetToModel(),
              this._widget.set(this._field, e),
              this.updateTextureSignals(),
              this.connectSignalWidgetToModel());
          },
          changeModelTextureToWidget: function () {
            var e = this._model.getTextureModel();
            e && e.getImageModel
              ? "Matcap" !== this._model.getName()
                ? e
                    .getMultiresTexture()
                    .getImageWidget()
                    .promise.then(
                      function (e) {
                        this._setModelTextureToWidget(e.getImage());
                      }.bind(this)
                    )
                : this._setModelTextureToWidget(e.getUID())
              : this._model.getColor ||
                this._widget.set(this._field, { r: 1, g: 1, b: 1 });
          },
          changeWidgetToModel: function () {
            this.removeSignalModelToWidget();
            var e = this._model,
              t = this._widget.get(this._field);
            if ("string" == typeof t) e.setChannelJSON({ texture: { uid: t } });
            else if (t instanceof window.Image) {
              var i = e.getTextureModel();
              if (i) i.setImageModel(t.imageModel), e.setTextureModel(i);
              else {
                var o = e.get("name");
                "Displacement" === o || "SubsurfaceScattering" === o
                  ? 0 === e.getFactor() &&
                    e.setFactor(
                      0.1 * pe.Z.getModelBoxWithoutDisplacement().radius()
                    )
                  : 1 !== e.getFactor() && e.setFactor(1),
                  e.setupTextureModel({ image: t.imageModel });
              }
            } else if (
              "SubsurfaceTranslucency" !== e.get("name") &&
              e.setColor
            ) {
              var n = [t.r, t.g, t.b];
              e.setColor(ct.ZP.srgbToLinear(n));
            } else e.setTextureModel(void 0);
            this.updateTextureSignals(), this.connectSignalModelToWidget();
          },
        };
        const ht = ut;
        var gt = function (e) {
            e.removeSignalWidgetToModel(),
              (e.changeWidgetToModel = function () {
                se.Z.prototype.changeWidgetToModel.call(this),
                  e._model.trigger("setColor");
              }),
              e.connectSignalWidgetToModel();
          },
          pt = { reflection: !0, cullFace: !0 },
          mt = {
            enable: !0,
            type: !0,
            invert: !0,
            roughnessFactor: !0,
            ior: !0,
            useMicrosurfaceTexture: !0,
            useAlbedoTint: !0,
            useNormalOffset: !0,
            thinLayer: !0,
            roughness: !0,
            thickness: !0,
            reflectivity: !0,
            flipY: !0,
            flipXY: !0,
            occludeSpecular: !0,
            curvature: !0,
            direction: !0,
            profile: !0,
            thicknessFactor: !0,
            useProfileFalloff: !0,
          },
          ft = function (e) {
            (this._widget = e), (this._signals = {});
          };
        ft.prototype = {
          removeSignals: function () {
            (0, Pe.Z)(this._signals, function (e) {
              e.removeSignals();
            });
          },
          extractFieldInformations: function (e, t) {
            var i = t.split("."),
              o = i[0];
            return {
              channelName: o,
              attributeName: i[i.length - 1],
              channel: e.get("channels")[o],
            };
          },
          setModelMaterial: function (e) {
            if (e) {
              var t = this._widget,
                i = this._signals,
                o = G.Z.ColorVec3Gamma,
                n = this._widget.attributes;
              for (var a in n) {
                var r = this.extractFieldInformations(e, a),
                  s = r.channel,
                  l = r.attributeName;
                s || !pt[a]
                  ? s &&
                    ("factor" !== l
                      ? "original" !== l
                        ? mt[l]
                          ? (i[a] = new ot(a, l, t, s))
                          : ("color" !== l &&
                              "refractionColor" !== l &&
                              "tint" !== l &&
                              "colorFactor" !== l) ||
                            ((i[a] = new se.Z(a, l, t, s, o)),
                            ("Matcap" !== r.channelName &&
                              "SubsurfaceTranslucency" !== r.channelName) ||
                              gt(i[a]))
                        : (i[a] = new ht(a, t, s))
                      : (i[a] = new at(a, s.getName(), t, s)))
                  : (i[a] = new ot(a, l, t, e));
              }
            }
          },
        };
        const vt = ft;
        var bt = function (e, t, i) {
          var o = document.createElement("canvas");
          return (
            (o.width = t),
            (o.height = i),
            o.getContext("2d").drawImage(e, 0, 0, t, i),
            o.toDataURL()
          );
        };
        const wt = function (e, t, i) {
          return new (J())(function (o, n) {
            e.complete
              ? o(bt(e, t, i))
              : (e.addEventListener("load", function () {
                  o(bt(e, t, i));
                }),
                e.addEventListener("error", function () {
                  n("Error loading image");
                }));
          });
        };
        var yt,
          xt,
          kt = i("Rdny"),
          Tt = function (e, t) {
            e.on("change:uid", function (e, i) {
              t.findWhere({ value: e.previous("uid") }).set("value", i);
            });
          },
          Ct = function (e) {
            var t = _e.Z.get("mask"),
              i = t & _e.Z.PBR;
            if ((e.set("mask", t), i)) {
              var o = { noCopy: !0 };
              e.set(
                "selectWorkFlowMetalSpec",
                e.get("MetalnessPBR.enable") ? "metalness" : "specular",
                o
              ),
                e.set(
                  "selectWorkFlowRoughGloss",
                  e.get("RoughnessPBR.enable") ? "roughness" : "glossiness",
                  o
                );
            }
          },
          St = function (e, t, i) {
            e.removeSignals();
            var o = i.get("material");
            if (o) {
              var n = i.get("materials").attributes[o];
              if (n) {
                var a = n.get("texCoordUnitList");
                t.reset();
                for (var r = "", s = 0; s < a.length; ++s) {
                  var l = a[s].toString(),
                    d = "UV " + l;
                  t.add({ label: d, value: l }),
                    (r += (0 === s ? "" : ", ") + d);
                }
                i.set("infoUVs", r ? "Available UV: " + r : "No Available UV"),
                  e.setModelMaterial(n),
                  (function (e) {
                    var t =
                      e.get("NormalMap.enable") || e.get("BumpMap.enable");
                    e.set(
                      "NormalBump.value",
                      e.get("BumpMap.enable") ? "BumpMap" : "NormalMap",
                      { noCopy: !0 }
                    ),
                      e.set("NormalBump.enable", t);
                  })(i),
                  Ct(i);
              }
            }
          },
          _t = function (e, t, i) {
            return e
              .createWidget(null, "Hyde", {
                model: t,
                name: "mask",
                id: "hydeMask",
                transform: function () {
                  var e = _e.Z.get("mask");
                  return e & _e.Z.PBR
                    ? i & _e.Z.PBR
                    : e & _e.Z.CLASSIC
                    ? i & _e.Z.CLASSIC
                    : i & _e.Z.MATCAP;
                },
              })
              .createWidget(null, "ToggleChildren", {
                model: t,
                name: "mask",
                id: "toggleMask",
                transform: function () {
                  return _e.Z.get("mask") & i;
                },
              });
          },
          Mt = function (e, t, i, o, n, a, r) {
            var s = "NormalBump" === n ? "NormalMap" : n;
            return _t(e, t, kt.Z.getShadingMask(s)).createWidget("Group", {
              label: i,
              tooltip: o,
              model: t,
              name: n + ".enable",
              opened: void 0 === a || a,
              id: n + "Group",
              new: r,
            });
          },
          Zt = function (e) {
            return (
              pe.Z.getModelBoxWithoutDisplacement().radius() *
              kt.Z.getBoxFactor(e)
            );
          },
          Wt = function (e) {
            return "BumpMap" === e || "EmitColor" === e
              ? 10
              : "SpecularHardness" === e
              ? 1e4
              : "Displacement" === e || "SubsurfaceScattering" === e
              ? Zt(e)
              : "Thickness" === e
              ? Zt("SubsurfaceTranslucency")
              : 1;
          },
          Et = function (e, t, i, o, n, a, r, s, l, d) {
            var c = kt.Z.getPossibleFormat(o);
            1 === Object.keys(c).length && (c = {});
            var u = Wt(o);
            e.createWidget(a || null, "SlideredImage", {
              model: i,
              name: o,
              id: o + "SlideredImage",
              factoredImageOptions: {
                maxWidth: 32,
                maxHeight: 32,
                id: o + "FactoredImage",
                painter: r || "standard",
                imageOptions: {
                  allowColor: void 0 === n || n,
                  allowTexture: void 0 === d || d,
                  collection: t.textureProxyImageCollection,
                  id: o + "Image",
                  textureFormatOptions: c,
                  textureFilteringOptions: kt.Z.getPossibleFiltering(o),
                },
              },
              numberedSliderOptions: {
                minimum: 0,
                maximum: u,
                step: u / 100,
                id: o + "NumberedSlider",
              },
              tooltip: s,
              tooltipTarget: l,
            });
          },
          Pt = function (e, t, i, o) {
            var n = e.createWidget(null, "Hyde", { id: o + "TexCoordHyde" });
            i.on(o + ".original.displayUV", function (e) {
              n.model.set("value", t.length > 1 && e);
            }),
              n.createWidget(null, "Select", {
                model: i,
                name: o + ".original.texCoordUnit",
                options: t,
                id: o + "TexCoordSelect",
              });
          },
          Ot = function (e, t, i, o) {
            var n = "NormalBump",
              a = Mt(e, i, "Normal/Bump Map", R.NormalBump, n, !1);
            a.createWidget(null, "ToggleButton", {
              model: i,
              name: n + ".value",
              id: n + "Select",
              options: { NormalMap: "Normal Map", BumpMap: "Bump Map" },
            }),
              (function (e, t, i, o) {
                var n = "NormalMap",
                  a = e.createWidget(null, "Hyde", {
                    model: i,
                    name: "NormalMap.enable",
                    id: "NormalMapHyde",
                  });
                Et(a, t, i, n, !1),
                  Pt(a, o, i, n),
                  a.createWidget("Checkbox", {
                    label: "Flip green (-Y)",
                    model: i,
                    name: "NormalMap.flipY",
                    id: "NormalMapToggleSwitch",
                  });
              })(a, t, i, o),
              (function (e, t, i, o) {
                var n = "BumpMap",
                  a = e.createWidget(null, "Hyde", {
                    model: i,
                    name: "BumpMap.enable",
                    id: "BumpMapHyde",
                  });
                Et(a, t, i, n, !1), Pt(a, o, i, n);
              })(a, t, i, o);
          },
          At = function (e, t) {
            if (!yt) {
              yt = new (F().Model)({ visible: !1 });
              var i = function () {
                var e =
                    t.get("Opacity.enable") &&
                    t.get("SubsurfaceScattering.enable"),
                  i = t.get("Opacity.type"),
                  o =
                    "additive" === i ||
                    "alphaBlend" === i ||
                    "refraction" === i;
                yt.set("visible", e && o);
              };
              i(),
                t.on("change:Opacity.type", i),
                t.on("change:Opacity.enable", i),
                t.on("change:SubsurfaceScattering.enable", i);
            }
            e.createWidget("Hyde", { model: yt, name: "visible" }).createWidget(
              "Warning",
              {
                content:
                  "Blending, Additive and Refraction transparency are not compatible with Subsurface Scattering. Please use Dithering or Mask transparency",
              }
            );
          },
          Ft = function (e, t, i, o) {
            var n = "Opacity",
              a = Mt(e, i, "Opacity", R.Opacity, n, !1);
            At(a, i),
              a.createWidget(null, "ToggleButton", {
                model: i,
                name: n + ".type",
                id: n + "TypeSelect",
                options: {
                  alphaBlend: "Blending",
                  refraction: "Refraction",
                  additive: "Additive",
                  dithering: "Dithered",
                },
              }),
              (function (e, t) {
                xt = new (F().Model)({ visible: !1 });
                var i = function () {
                  var e = t.get("Opacity.type"),
                    i =
                      "additive" === e ||
                      "alphaBlend" === e ||
                      "refraction" === e;
                  xt.set("visible", i);
                };
                i(),
                  t.on("change:Opacity.type", i),
                  e
                    .createWidget("Hyde", { model: xt, name: "visible" })
                    .createWidget("Warning", {
                      content:
                        "This type of transparency does not cast shadows.",
                    });
              })(a, i),
              Et(a, t, i, n, !1, null, "opacity"),
              Pt(a, o, i, n),
              (function (e, t) {
                e.createWidget("Checkbox", {
                  label: "Invert texture",
                  model: t,
                  name: "Opacity.invert",
                  id: "OpacityInvertToggleSwitch",
                });
              })(a, i),
              (function (e, t) {
                var i = e.createWidget(null, "Hyde", {
                  model: t,
                  name: "Opacity.type",
                  transform: function () {
                    return "refraction" === t.get("Opacity.type");
                  },
                });
                i.createWidget("Separator"),
                  i.createWidget("TINT", "Image", {
                    model: t,
                    name: "Opacity.refractionColor",
                    allowColor: !0,
                    allowTexture: !1,
                    id: "RefractionColor",
                    tooltip: R.OpacityRefractionColor,
                  }),
                  i.createWidget("Checkbox", {
                    label: "Use diffuse",
                    model: t,
                    name: "Opacity.useAlbedoTint",
                  }),
                  i.createWidget("Separator"),
                  i.createWidget("Label", { content: "REFRACTION" }),
                  i.createWidget("Checkbox", {
                    label: "Use normal offset",
                    model: t,
                    name: "Opacity.useNormalOffset",
                  });
                var o = tt.functors["Opacity.iorInvertUI"];
                i.createWidget("Index of Refraction", "NumberedSlider", {
                  model: t,
                  name: "Opacity.ior",
                  minimum: 1,
                  maximum: 2,
                  step: 0.01,
                  numberOptions: {
                    renderValue: o.modelToWidget,
                    inputValue: o.widgetToModel,
                  },
                  tooltip: R.OpacityRefractionIndex,
                }),
                  i.createWidget("Roughness", "NumberedSlider", {
                    model: t,
                    name: "Opacity.roughnessFactor",
                    tooltip: R.OpacityRefractionRoughness,
                  }),
                  i.createWidget("Checkbox", {
                    label: "Use Roughness/Glossiness texture",
                    model: t,
                    name: "Opacity.useMicrosurfaceTexture",
                  });
              })(a, i),
              (function (e, t) {
                var i = e.createWidget(null, "Hyde", {
                  model: t,
                  name: "Opacity.type",
                  transform: function () {
                    return "dithering" === t.get("Opacity.type");
                  },
                });
                i.createWidget("Separator"),
                  i.createWidget("Pattern", "ToggleButton", {
                    model: t,
                    name: "Opacity.thinLayer",
                    tooltip: R.OpacityDitheredPattern,
                    options: { standard: "Standard", thin: "Thin layering" },
                  });
              })(a, i);
          },
          Nt = function (e, t, i, o) {
            var n = t.getMatcapCollection();
            (t.proxyMatcapCollection = new X.Z([])),
              n.forEach(function (e) {
                t.proxyMatcapCollection.add(e.getProxyImage());
              }),
              n.on("add", function (e) {
                t.proxyMatcapCollection.add(e.getProxyImage());
              }),
              n.on("remove", function (e) {
                var i = t.proxyMatcapCollection.findWhere({
                  value: e.get("uid"),
                });
                t.proxyMatcapCollection.remove(i);
              }),
              Tt(n, t.proxyMatcapCollection);
            var a = e.createWidget(null, "Repeat", {
              model: i,
              name: "Matcap",
              collection: t.proxyMatcapCollection,
              id: "Matcap.Select",
              className: "list-select-widget --round-images",
              default: w.Z.defaultMatcapUid,
              widget: "OptionRow",
              widgetOptions: {
                options: {
                  image: "image",
                  name: "name",
                  value: "value",
                  select: function (e) {
                    var t = m()(e.currentTarget).attr("data-value");
                    t && i.set("Matcap.original", t);
                  },
                  delete: function (e) {
                    var i;
                    e.stopPropagation();
                    var a = m()(e.currentTarget)
                      .closest("[data-value]")
                      .attr("data-value");
                    a &&
                      ((i = o
                        .getViewer()
                        .getFeatures()
                        .material.getModel()._matcapTrashbin),
                      (function (e, t, i, o) {
                        var n = (0, He.Z)(t.attributes, function (t) {
                            return (
                              t
                                .getChannels()
                                .Matcap.getTextureModel()
                                .getUID() === e
                            );
                          }),
                          a = J().resolve(n);
                        Object.keys(n).length >= 2 &&
                          (a = new (J())(function (e, t) {
                            var i =
                                "<p>This texture is still used in the following materials:</p><ul>" +
                                (0, ze.Z)(n, function (e) {
                                  return "<li>" + e.get("name") + "</li>";
                                }).join("\n") +
                                "</ul><p>Texture will be permanently deleted after saving.</p>",
                              o = new (ne.Z.extend({
                                events: {
                                  "reset form": "cancel",
                                  "submit form": "continue",
                                },
                              }))({
                                title: "Delete texture?",
                                text: i,
                                safe: !0,
                                popupClass: "texture-deletion",
                                buttons: {
                                  ok: !0,
                                  okLabel: "Delete",
                                  cancel: !0,
                                },
                              });
                            o.open().then(
                              function () {
                                o.close(), e(n);
                              },
                              function () {
                                o.close(), t("User cancelled delete.");
                              }
                            );
                          })),
                          a
                            .then(function (t) {
                              for (var n in t)
                                t[n]
                                  .getChannels()
                                  .Matcap.resetToDefaultMatcap();
                              var a = i.remove(e);
                              o.push(a), a.on("restore", i.add.bind(i));
                            })
                            .catch(console.log);
                      })(a, t, n, i));
                  },
                },
              },
            });
            i.on("change:Matcap.original", function (e, t) {
              "string" == typeof t &&
                a.widgets.forEach(function (e) {
                  e.$el.toggleClass("selected", e.model.get("value") === t);
                });
            });
            var r = o.getModel().toJSON();
            (0, k.Ov)("pro", r)
              ? e.createWidget("FilePicker", {
                  model: i,
                  text: "Import matcap image",
                  dragAndDrop: { target: e.$el },
                  selectEvent: "uploadMatcapSelectEvent",
                })
              : e.createWidget("Label", {
                  content: [
                    '<a href="' +
                      (0, N.HQ)("pages:plans") +
                      '" target="_blank">Upgrade your account</a> ',
                    "to upload your custom matcaps",
                  ].join(""),
                  escape: !1,
                  classname: "upgrade",
                });
          },
          Rt = function (e, t, i, o) {
            var n = _t(e, i, kt.Z.getShadingMask("Matcap")).createWidget(
              "Group",
              {
                label: "Matcap",
                tooltip: R.MatcapGroup,
                opened: !0,
                id: "MatcapGroup",
              }
            );
            !(function (e, t, i) {
              var o = t.attributes;
              if (1 !== Object.keys(o).length) {
                var n = function () {
                    if (i.get("Matcap.global")) {
                      var e = i.get("material"),
                        t = o[e].getChannels().Matcap.getJSON();
                      for (var n in o)
                        n !== e && o[n].getChannels().Matcap.setChannelJSON(t);
                    }
                  },
                  a = function (e) {
                    e === i.get("material") && n();
                  },
                  r = !0,
                  s = "";
                for (var l in o) {
                  var d = o[l].getChannels().Matcap;
                  if ((d.on("all", a.bind(d, l)), r)) {
                    var c = JSON.stringify(d.getJSON());
                    s ? s !== c && (r = !1) : (s = c);
                  }
                }
                i.set("Matcap.global", r),
                  i.on("change:Matcap.global", n),
                  e.createWidget("Checkbox", {
                    label: "Apply to all materials",
                    model: i,
                    name: "Matcap.global",
                    id: "MatcapGlobal",
                  });
              }
            })(n, t, i),
              Nt(n, t, i, o),
              (function (e, t, i) {
                e.createWidget("Matcap tint", "Image", {
                  model: i,
                  name: "Matcap.color",
                  allowColor: !0,
                  allowTexture: !1,
                  id: "MatcapColor",
                }),
                  e.$el.addClass("wireframe-group");
                var o = pe.Z.getModelBoxWithDisplacement().radius();
                e.createWidget("Curvature", "NumberedSlider", {
                  id: "MatcapCurvature",
                  model: i,
                  name: "Matcap.curvature",
                  minimum: 0,
                  maximum: o,
                  step: 0.01 * o,
                  help: "Increase contrast on details (except normal map). Requires smooth shading.",
                });
              })(n, 0, i);
          },
          Dt = function (e, t, i, o, n, a, r, s, l) {
            var d = _t(e, i, kt.Z.getShadingMask(n)).createWidget(
              null,
              "Hyde",
              { model: i, name: n + ".enable" }
            );
            Et(d, t, i, n, a, r, null, s, l), Pt(d, o, i, n);
          },
          Bt = function (e) {
            var t = ct.ZP.linearToSrgb(e);
            return { r: t[0], g: t[1], b: t[2] };
          },
          It = function (e) {
            return ct.ZP.srgbToLinear([e.r, e.g, e.b]);
          },
          Lt = function (e, t, i, o, n) {
            var a = n.get("sssProfiles")[e],
              r = new (F().Model)({
                color: Bt(a[i]),
                "color.factor": 1,
                "color.original": Bt(a[i]),
              }),
              s = t.createWidget("FactoredImage", {
                model: r,
                name: "color",
                className: "light-color-widget",
                imageOptions: { allowColor: !0, allowTexture: !1 },
              });
            return (
              "falloff" === i
                ? r.on("change", function () {
                    (a[i] = It(r.get("color.original"))),
                      n.set("sssKernelDone", !1);
                    var t = o.get("materials").attributes;
                    for (var s in t) {
                      var l = t[s],
                        d = l.get("channels");
                      if (d.SubsurfaceScattering.get("profile") === e + 1)
                        d.SubsurfaceTranslucency.get("useProfileFalloff") &&
                          (d.SubsurfaceTranslucency.setColor(a[i]),
                          l.trigger("apply"));
                    }
                  })
                : r.on("change", function () {
                    (a[i] = It(r.get("color.original"))),
                      n.set("sssKernelDone", !1);
                  }),
              s
            );
          },
          Gt = function (e, t, i, o) {
            var n = t.createWidget("Horizontal"),
              a = new (F().Model)(),
              r = function () {
                a.get("selected") &&
                  i.set("SubsurfaceScattering.profile", e + 1);
              },
              s = function () {
                a.set(
                  "selected",
                  e === i.get("SubsurfaceScattering.profile") - 1
                ),
                  i.trigger("change:SubsurfaceTranslucency.useProfileFalloff");
              };
            s(),
              n.createWidget(null, "Radio", {
                label: "Profile 0" + (e + 1),
                model: a,
                name: "selected",
                radioGroup: "sssProfiles",
              }),
              a.on("change:selected", r),
              i.on("change:SubsurfaceScattering.profile", function () {
                a.off("change:selected", r), s(), a.on("change:selected", r);
              }),
              Lt(e, n, "strength", i, o)
                .$(".selectbox")
                .addClass("selectbox-subsurface-color"),
              Lt(e, n, "falloff", i, o)
                .$(".selectbox")
                .addClass("selectbox-falloff-color");
          },
          $t = function (e, t) {
            var i = e.get("SubsurfaceScattering.profile") - 1,
              o = t.get("sssProfiles")[i];
            return Bt(o.falloff);
          },
          Ht = function (e, t, i, o, n) {
            var a = "SubsurfaceScattering",
              r = a + ".enable",
              s = "SubsurfaceTranslucency.enable",
              l = new (F().Model)({
                "SubsurfaceScattering.enable": i.get(r) || i.get(s),
              }),
              d = Mt(
                e,
                l,
                "Subsurface Scattering / Skin",
                R.SubsurfaceScattering,
                a,
                !1,
                !1
              ),
              c = !1;
            l.on("change:" + r, function () {
              c = !0;
              var e = l.get(r),
                t = i.get(r),
                o = i.get(s),
                n = !o && !o;
              i.set(r, e && (n || t)), i.set(s, e && (n || o)), (c = !1);
            });
            var u = function () {
              c || l.set(r, i.get(r) || i.get(s));
            };
            i.on("change:" + r, u),
              i.on("change:" + s, u),
              i.on("change:mask", function () {
                l.set("mask", i.get("mask"));
              }),
              d.createWidget("Checkbox", {
                model: i,
                name: r,
                label: "Subsurface Scatterring",
              });
            var h = d.createWidget("Hyde", { model: i, name: r });
            h.$el.css("marginLeft", "20px"),
              At(h, i),
              Et(h, t, i, a, !1, "Texture", void 0, R.SSRTexture),
              h.createWidget(null, "Label", {
                content: "Profile (Subsurface color, Falloff color)",
              });
            for (var g = 0, p = n.get("sssProfiles").length; g < p; g++)
              Gt(g, h, i, n);
            Pt(h, o, i, a),
              d.createWidget("Separator"),
              (function (e, t, i, o, n) {
                var a = "SubsurfaceTranslucency",
                  r = R.SSRTranslucencyTexture;
                e.createWidget("Checkbox", {
                  model: i,
                  name: a + ".enable",
                  label: "Translucency",
                });
                var s = e.createWidget("Hyde", {
                  model: i,
                  name: a + ".enable",
                });
                s.$el.css("marginLeft", "20px"),
                  Et(s, t, i, a, !1, "Texture", void 0, r),
                  Pt(s, o, i, a);
                var l = s.createWidget("Color", "Horizontal");
                l.createWidget(null, "Radio", {
                  label: "Profile Color",
                  model: i,
                  name: "SubsurfaceTranslucency.useProfileFalloff",
                  radioGroup: "translucencyColor",
                }),
                  l
                    .createWidget(null, "Radio", {
                      label: "Custom",
                      model: i,
                      name: "SubsurfaceTranslucency.useCustom",
                      radioGroup: "translucencyColor",
                    })
                    .$el.css("maxWidth", "70px");
                var d = l.createWidget("Image", {
                  model: i,
                  name: a + ".color",
                  className: "light-color-widget",
                  allowColor: !0,
                  allowTexture: !1,
                  id: "SubsurfaceTranslucencyColor",
                });
                d.$(".selectbox").addClass("selectbox-falloff-color"),
                  i.on(
                    "change:SubsurfaceTranslucency.useProfileFalloff",
                    function () {
                      if (i.get("SubsurfaceTranslucency.useProfileFalloff"))
                        return (
                          i.set("SubsurfaceTranslucency.color", $t(i, n)),
                          void d.disable()
                        );
                      t.attributes[i.get("material")]
                        .getChannels()
                        .SubsurfaceTranslucency.get("useProfileFalloff") &&
                        i.set("SubsurfaceTranslucency.color", $t(i, n)),
                        d.enable(),
                        i.set("SubsurfaceTranslucency.useCustom", !0);
                    }
                  );
                var c = Wt("Thickness");
                s.createWidget("Thickness factor", "NumberedSlider", {
                  model: i,
                  name: "SubsurfaceTranslucency.thicknessFactor",
                  minimum: 0,
                  maximum: c,
                  step: c / 100,
                });
              })(d, t, i, o, n);
          };
        var zt = {
          FeatureName: "materialUI",
          ModelName: "Material",
          ViewListType: [
            x.Z.extend({
              initialize: function () {
                x.Z.prototype.initialize.apply(this, arguments);
                var e = this.options.context;
                this._viewer = e.getViewer();
                var t = e.getWidgetAPI().getTab("Materials");
                je.Z.getModelDisplayed().then(
                  this.buildMaterials.bind(this, t)
                ),
                  (this.model.textureProxyImageCollection = new X.Z()),
                  (this.model.textureProxyImageCollection.comparator =
                    Ve.Z.prototype.comparator);
                var i = this.model.getImageCollection();
                this.model.textureProxyImageCollection.on(
                  "change:colorSpace",
                  function (e) {
                    var t = e.get("value");
                    i
                      .findWhere({ uid: t })
                      .set("colorSpace", e.get("colorSpace")),
                      this.triggerSetTextureColorSpace(t);
                  }.bind(this)
                ),
                  i.on("add", this.onAddedImageElement, this),
                  Tt(i, this.model.textureProxyImageCollection),
                  this.onSyncImageCollection();
              },
              triggerSetTextureColorSpace: function (e) {
                var t = this.model.attributes;
                for (var i in t) {
                  var o = t[i].getChannels();
                  for (var n in o) {
                    var a = o[n],
                      r = a.getTextureModel();
                    r && r.getUID() === e && a.trigger("setTextureModel");
                  }
                }
              },
              buildMaterials: function (e) {
                for (
                  var t = this.model,
                    i = (0, Ue.Z)(t.toJSON()),
                    o = {},
                    n = 0,
                    a = kt.Z.length;
                  n < a;
                  ++n
                ) {
                  var r = kt.Z[n];
                  (o[r] = void 0),
                    (o[r + ".factor"] = 100),
                    (o[r + ".enable"] = !0);
                  var s = r + ".original";
                  (o[s] = void 0),
                    (o[s + ".texCoordUnit"] = void 0),
                    (o[s + ".minFilter"] = void 0),
                    (o[s + ".internalFormat"] = void 0),
                    (o[s + ".wrapS"] = void 0),
                    (o[s + ".wrapT"] = void 0),
                    (o[s + ".uvTransformScaleX"] = void 0),
                    (o[s + ".uvTransformScaleY"] = void 0),
                    (o[s + ".uvTransformRotation"] = void 0),
                    (o[s + ".uvTransformOffsetX"] = void 0),
                    (o[s + ".uvTransformOffsetY"] = void 0);
                }
                for (
                  var l,
                    d,
                    c,
                    u,
                    h,
                    g,
                    p = new (F().Model)(
                      (0, be.Z)(o, {
                        selectWorkFlowMetalSpec: "metalness",
                        selectWorkFlowRoughGloss: "roughness",
                        "Anisotropy.flipXY": !1,
                        "Matcap.curvature": 0,
                        "Matcap.color": { r: 1, g: 1, b: 1 },
                        "Matcap.global": !0,
                        "NormalMap.flipY": !1,
                        "AOPBR.occludeSpecular": !1,
                        "Sheen.factor": 0,
                        "Sheen.colorFactor": { r: 0, g: 0, b: 1 },
                        "ClearCoat.roughness": 0.5,
                        "ClearCoat.thickness": 1,
                        "ClearCoat.reflectivity": 0,
                        "ClearCoat.tint": { r: 1, g: 1, b: 1 },
                        "ClearCoatNormalMap.flipY": !1,
                        AlphaMask: !1,
                        "AlphaMask.factor": !1,
                        "AlphaMask.invert": !1,
                        "Opacity.type": "alphaBlend",
                        "Opacity.invert": !1,
                        "Opacity.roughnessFactor": 0,
                        "Opacity.useMicrosurfaceTexture": !1,
                        "Opacity.useAlbedoTint": !1,
                        "Opacity.useNormalOffset": !1,
                        "Opacity.thinLayer": "standard",
                        "Opacity.refractionColor": { r: 1, g: 1, b: 1 },
                        "Opacity.ior": 0,
                        "NormalBump.enable": !0,
                        "NormalBump.value": "NormalMap",
                        "SubsurfaceScattering.profile": 1,
                        "SubsurfaceTranslucency.color": { r: 1, g: 1, b: 1 },
                        "SubsurfaceTranslucency.thicknessFactor": 1,
                        "SubsurfaceTranslucency.useProfileFalloff": !1,
                        "SubsurfaceTranslucency.useCustom": !0,
                        reflection: 100,
                        cullFace: "double",
                        infoUVs: "",
                        materials: t,
                        material: i[0] ? i[0].get("id") : void 0,
                      })
                    ),
                    m = this._viewer.getFeatures().postProcess.getModel(),
                    f = 0;
                  f < i.length;
                  f++
                ) {
                  var v = i[f],
                    b = v.get("channels").SubsurfaceScattering,
                    w = v.get("channels").SubsurfaceTranslucency,
                    y = b.get("profile") - 1,
                    x = m.get("sssProfiles")[y],
                    k = w.get("color");
                  w.set(
                    "useProfileFalloff",
                    ((l = k),
                    (d = x.falloff),
                    (c = void 0),
                    (u = void 0),
                    (h = void 0),
                    (g = void 0),
                    (g = 0.001),
                    void 0 === l.r
                      ? ((c = l[0] - d[0]),
                        (u = l[1] - d[1]),
                        (h = l[2] - d[2]))
                      : ((c = l.r - d.r), (u = l.g - d.g), (h = l.b - d.b)),
                    (c = Math.abs(c)),
                    (u = Math.abs(u)),
                    (h = Math.abs(h)),
                    c < g && u < g && h < g)
                  );
                }
                t.uiModel = p;
                var T = new vt(p),
                  C = new X.Z();
                _e.Z.bind("change:mask", Ct.bind(this, p));
                var S = this._viewer.getFeatures().inspector.getModel();
                p.on("change:material", function () {
                  St(T, C, p), S.set("material", p.get("material"));
                }),
                  S.on("change:material", function () {
                    p.set("material", S.get("material"));
                  }),
                  t.on("addMaterial", function () {}),
                  this.initEvents(p),
                  (function (e, t, i) {
                    var o = new X.Z();
                    o.comparator = function (e, t) {
                      var i = e.get("label").toLowerCase(),
                        o = t.get("label").toLowerCase();
                      return (0, Xe.Z)(i, o);
                    };
                    var n = i.map(function (e) {
                      return { value: e.get("id"), label: e.get("name") };
                    });
                    o.set(n),
                      e
                        .createWidget("Vertical", { withPadding: !0 })
                        .createWidget(null, "Select", {
                          model: t,
                          name: "material",
                          options: o,
                          id: "MaterialSelect",
                        });
                  })(e, p, i),
                  this.initHelperMaterial(e, p),
                  this.initGroups(e, t, p, C),
                  St(T, C, p);
              },
              initHelperMaterial: function (e, t) {
                var i = this._viewer.getFeatures().inspector.getModel(),
                  o = e.createWidget("Vertical", {
                    withPadding: !0,
                    withMargins: !1,
                    id: "MaterialSelectionOptions",
                  });
                o
                  .createWidget("Horizontal")
                  .createWidget("Label", {
                    label: "",
                    model: t,
                    name: "infoUVs",
                  }),
                  o
                    .createWidget("Horizontal")
                    .createWidget("Checkbox", {
                      label: "Zoom on selected material",
                      model: i,
                      name: "focusMaterial",
                      id: "FocusMaterialCheckbox",
                    }),
                  o
                    .createWidget("Horizontal")
                    .createWidget("Checkbox", {
                      label: "Highlight selectable materials",
                      model: i,
                      name: "highlightOnHover",
                      id: "HighlightOnHoverCheckbox",
                    });
              },
              initEvents: function (e) {
                var t = this;
                e.on("uploadSelectEvent", this.onAddNewTexture.bind(this)),
                  e.on(
                    "uploadMatcapSelectEvent",
                    this.onAddNewMatcap.bind(this)
                  ),
                  e.on("change:selectWorkFlowMetalSpec", function (e, i, o) {
                    var n = "metalness" === i,
                      a = !o.noCopy;
                    t.model.setWorkFlowMetalSpec(n, a);
                  }),
                  e.on("change:selectWorkFlowRoughGloss", function (i, o, n) {
                    var a = "roughness" === o,
                      r = !n.noCopy;
                    t.model.get(e.get("material")).setWorkFlowRoughGloss(a, r);
                  }),
                  e.on("change:SpecularColor.enable", function (t, i) {
                    e.set("SpecularHardness.enable", i);
                  }),
                  e.on("change:NormalBump.value", function (i, o, n) {
                    var a = "NormalMap" === o ? "BumpMap" : "NormalMap";
                    (e.set(a + ".enable", !1),
                    e.set(o + ".enable", !0),
                    n.noCopy) ||
                      t.model.get(e.get("material")).copyDualChannel(o, a);
                  }),
                  e.on("change:NormalBump.enable", function (t, i) {
                    var o = "NormalMap" === e.get("NormalBump.value");
                    e.set("NormalMap.enable", i && o),
                      e.set("BumpMap.enable", i && !o);
                  });
              },
              initGroups: function (e, t, i, o) {
                var n = this._viewer.getFeatures().postProcess.getModel();
                Rt(e, t, i, this.options.context),
                  (function (e, t, i, o) {
                    var n = _t(
                      e,
                      i,
                      _e.Z.PBR_LIT | _e.Z.PBR_SHADELESS
                    ).createWidget("Group", {
                      label: "PBR maps",
                      tooltip: R.PBRGroup,
                      opened: !0,
                      id: "PBRGroup",
                    });
                    n.createWidget("Workflow", "ToggleButton", {
                      model: i,
                      name: "selectWorkFlowMetalSpec",
                      options: { metalness: "Metalness", specular: "Specular" },
                    }),
                      Dt(
                        n,
                        t,
                        i,
                        o,
                        "AlbedoPBR",
                        !0,
                        "Base Color",
                        R.AlbedoPBR,
                        "label"
                      ),
                      Dt(
                        n,
                        t,
                        i,
                        o,
                        "MetalnessPBR",
                        !1,
                        "Metalness",
                        R.MetalnessPBR,
                        "label"
                      ),
                      Dt(
                        n,
                        t,
                        i,
                        o,
                        "SpecularF0",
                        !1,
                        "Specular F0",
                        R.SpecularF0,
                        "label"
                      ),
                      Dt(
                        n,
                        t,
                        i,
                        o,
                        "DiffusePBR",
                        !0,
                        "Albedo",
                        R.DiffusePBR,
                        "label"
                      ),
                      Dt(
                        n,
                        t,
                        i,
                        o,
                        "SpecularPBR",
                        !0,
                        "Specular",
                        R.SpecularPBR,
                        "label"
                      );
                  })(e, t, i, o),
                  (function (e, t, i, o, n) {
                    var a = Mt(
                      e,
                      i,
                      "Anisotropy",
                      R.Anisotropy,
                      "Anisotropy",
                      !1
                    );
                    a
                      .createWidget("Intensity", "NumberedSlider", {
                        model: i,
                        name: "Anisotropy.factor",
                      })
                      .number.$el.css({ "max-width": "20%" }),
                      a.createWidget("Label", { content: "Direction" });
                    var r = new (F().Model)({ useTexture: !1, useFactor: !0 }),
                      s = _e.Z.get("mask") & _e.Z.PBR,
                      l = new (F().Model)({
                        texture: { r: 1, g: 1, b: 1 },
                        "texture.internalFormat": "RGB",
                        "texture.minFilter": "LINEAR_MIPMAP_LINEAR",
                        "texture.texCoordUnit": void 0,
                        "texture.wrapS": "REPEAT",
                        "texture.wrapT": "REPEAT",
                        "texture.uvTransformScaleX": 1,
                        "texture.uvTransformScaleY": 1,
                        "texture.uvTransformRotation": 0,
                        "texture.uvTransformOffsetX": 0,
                        "texture.uvTransformOffsetY": 0,
                        isPBR: s,
                        materials: i.get("materials"),
                      });
                    l.on("uploadSelectEvent", n.onAddNewTexture.bind(n));
                    var d = a.createWidget("Horizontal");
                    d.createWidget("Radio", {
                      radioGroup: "AnisotropyDirection",
                      model: r,
                      name: "useTexture",
                      label: "Texture",
                    }).$el.css({ maxWidth: "23%" });
                    var c = d.createWidget("ToggleChildren", {
                        model: r,
                        name: "useTexture",
                      }),
                      u = c.createWidget("Horizontal"),
                      h = kt.Z.getPossibleFormat("Anisotropy"),
                      g = u.createWidget("Image", {
                        model: l,
                        name: "texture",
                        allowColor: !1,
                        allowTexture: !0,
                        collection: t.textureProxyImageCollection,
                        id: "AnisotropyImage",
                        textureFormatOptions: h,
                        textureFilteringOptions:
                          kt.Z.getPossibleFiltering("Anisotropy"),
                      });
                    g.$el.css({ maxWidth: "25%" }),
                      g
                        .$(".selectbox")
                        .addClass("selectbox-anisotropy-texture"),
                      u.createWidget("Checkbox", {
                        label: "Swap XY",
                        model: i,
                        name: "Anisotropy.flipXY",
                        id: "AnisotropyToggleSwitch",
                      }),
                      Pt(c, o, l, "texture");
                    var p = a.createWidget("Horizontal");
                    p
                      .createWidget("Radio", {
                        radioGroup: "AnisotropyDirection",
                        model: r,
                        name: "useFactor",
                        label: "Factor",
                      })
                      .$el.css({ maxWidth: "23%" }),
                      p
                        .createWidget("ToggleChildren", {
                          model: r,
                          name: "useFactor",
                        })
                        .createWidget("NumberedSlider", {
                          model: i,
                          name: "Anisotropy.direction",
                          minimum: -1,
                          maximum: 1,
                          step: 0.01,
                        })
                        .slider.$el.css({ "max-width": "68%" }),
                      i.listenToOnce(
                        i,
                        "change:Anisotropy.original",
                        function () {
                          var e = i.get("Anisotropy.original");
                          void 0 === e.r
                            ? l.set({
                                texture: e,
                                "texture.internalFormat": i.get(
                                  "Anisotropy.original.internalFormat"
                                ),
                                "texture.minFilter": i.get(
                                  "Anisotropy.original.minFilter"
                                ),
                                "texture.texCoordUnit": i.get(
                                  "Anisotropy.original.texCoordUnit"
                                ),
                                "texture.wrapS": i.get(
                                  "Anisotropy.original.wrapS"
                                ),
                                "texture.wrapT": i.get(
                                  "Anisotropy.original.wrapT"
                                ),
                                "texture.uvTransformScaleX": i.get(
                                  "Anisotropy.original.uvTransformScaleX"
                                ),
                                "texture.uvTransformScaleY": i.get(
                                  "Anisotropy.original.uvTransformScaleY"
                                ),
                                "texture.uvTransformRotation": i.get(
                                  "Anisotropy.original.uvTransformRotation"
                                ),
                                "texture.uvTransformOffsetX": i.get(
                                  "Anisotropy.original.uvTransformOffsetX"
                                ),
                                "texture.uvTransformOffsetY": i.get(
                                  "Anisotropy.original.uvTransformOffsetY"
                                ),
                              })
                            : r.set("useFactor");
                        }
                      ),
                      i.on("change:Anisotropy.original", function () {
                        void 0 === i.get("Anisotropy.original").r
                          ? r.set("useTexture", !0)
                          : (g.closeEvent(), r.set("useFactor", !0));
                      });
                    var m = function () {
                      i.set("Anisotropy.original", l.get("texture")),
                        i.set(
                          "Anisotropy.original.internalFormat",
                          l.get("texture.internalFormat")
                        ),
                        i.set(
                          "Anisotropy.original.minFilter",
                          l.get("texture.minFilter")
                        ),
                        i.set(
                          "Anisotropy.original.texCoordUnit",
                          l.get("texture.texCoordUnit")
                        ),
                        i.set(
                          "Anisotropy.original.wrapS",
                          l.get("texture.wrapS")
                        ),
                        i.set(
                          "Anisotropy.original.wrapT",
                          l.get("texture.wrapT")
                        ),
                        i.set(
                          "Anisotropy.original.uvTransformScaleX",
                          l.get("texture.uvTransformScaleX")
                        ),
                        i.set(
                          "Anisotropy.original.uvTransformScaleY",
                          l.get("texture.uvTransformScaleY")
                        ),
                        i.set(
                          "Anisotropy.original.uvTransformRotation",
                          l.get("texture.uvTransformRotation")
                        ),
                        i.set(
                          "Anisotropy.original.uvTransformOffsetX",
                          l.get("texture.uvTransformOffsetX")
                        ),
                        i.set(
                          "Anisotropy.original.uvTransformOffsetY",
                          l.get("texture.uvTransformOffsetY")
                        );
                    };
                    r.on(
                      "change:useFactor",
                      function () {
                        r.get("useFactor")
                          ? i.set("Anisotropy.original", { r: 1, g: 1, b: 1 })
                          : void 0 === l.get("texture").r && m();
                      }.bind(this)
                    ),
                      l.on("change", m);
                  })(e, t, i, o, this),
                  (function (e, t, i, o) {
                    var n = _t(e, i, _e.Z.PBR_LIT).createWidget("Group", {
                      label: "Roughness/Glossiness",
                      opened: !0,
                      id: "RoughnessGroup",
                      tooltip: R.RoughnessGroup,
                    });
                    n.createWidget(null, "ToggleButton", {
                      model: i,
                      name: "selectWorkFlowRoughGloss",
                      options: {
                        roughness: "Roughness",
                        glossiness: "Glossiness",
                      },
                    }),
                      Dt(n, t, i, o, "RoughnessPBR", !1, null),
                      Dt(n, t, i, o, "GlossinessPBR", !1, null);
                  })(e, t, i, o),
                  (function (e, t, i, o) {
                    var n = "DiffuseColor",
                      a = Mt(e, i, "Diffuse", R.Diffuse, n, !0);
                    Et(a, t, i, n), Pt(a, o, i, n);
                  })(e, t, i, o),
                  (function (e, t, i, o) {
                    var n = "SpecularColor",
                      a = Mt(e, i, "Specular", R.Specular, n, !0);
                    Et(a, t, i, n, !0, "Color"),
                      Pt(a, o, i, n),
                      Et(
                        a,
                        t,
                        i,
                        (n = "SpecularHardness"),
                        !1,
                        "Glossiness",
                        "glossiness"
                      ),
                      Pt(a, o, i, n);
                  })(e, t, i, o),
                  (function (e, t, i, o) {
                    var n = "Displacement",
                      a = Mt(e, i, "Displacement", R.Displacement, n, !1);
                    Et(a, t, i, n, !1), Pt(a, o, i, n);
                  })(e, t, i, o),
                  Ot(e, t, i, o),
                  (function (e, t, i, o) {
                    var n = "Sheen",
                      a = Mt(e, i, "Sheen", R.SheenGroup, n, !0);
                    Et(a, t, i, "Sheen", !1, "Sheen", null, R.Sheen),
                      Pt(a, o, i, n),
                      a.createWidget("Tint", "Image", {
                        model: i,
                        name: "Sheen.colorFactor",
                        allowColor: !0,
                        allowTexture: !1,
                        id: "SheenColorFactor",
                        tooltip: R.SheenColorFactor,
                      }),
                      Et(
                        a,
                        t,
                        i,
                        "SheenRoughness",
                        !1,
                        "Roughness",
                        null,
                        R.SheenRoughness
                      ),
                      Pt(a, o, i, "SheenRoughness");
                  })(e, t, i, o),
                  (function (e, t, i, o, n) {
                    var a = _t(e, i, _e.Z.LIT);
                    Ht(a, t, i, o, n);
                  })(e, t, i, o, n),
                  (function (e, t, i, o) {
                    var n = "ClearCoat",
                      a = Mt(e, i, "Clear Coat", R.ClearCoat, n, !1);
                    Et(
                      a,
                      t,
                      i,
                      "ClearCoat",
                      !1,
                      "Intensity",
                      null,
                      R.CCIntensity
                    ),
                      Pt(a, o, i, n),
                      a.createWidget("Separator"),
                      a.createWidget("Label", { content: "COAT" }),
                      a.createWidget("Thickness", "NumberedSlider", {
                        model: i,
                        name: "ClearCoat.thickness",
                        minimum: 0,
                        maximum: 20,
                        step: 0.1,
                        tooltip: R.CCThickness,
                      }),
                      a.createWidget("Reflectivity", "NumberedSlider", {
                        model: i,
                        name: "ClearCoat.reflectivity",
                        minimum: 0,
                        maximum: 1,
                        step: 0.01,
                        tooltip: R.CCReflectivity,
                      }),
                      a.createWidget("Tint", "Image", {
                        model: i,
                        name: "ClearCoat.tint",
                        allowColor: !0,
                        allowTexture: !1,
                        id: "ClearCoatTint",
                        tooltip: R.CCTint,
                      }),
                      a.createWidget("Separator"),
                      a.createWidget("Label", { content: "SURFACE" }),
                      Et(
                        a,
                        t,
                        i,
                        "ClearCoatRoughness",
                        !1,
                        "Roughness",
                        null,
                        R.CCRoughness
                      ),
                      Pt(a, o, i, "ClearCoatRoughness"),
                      Et(
                        a,
                        t,
                        i,
                        "ClearCoatNormalMap",
                        !1,
                        "Normal map",
                        null,
                        R.CCNormalMap
                      ),
                      a.createWidget("Checkbox", {
                        label: "Flip green (-Y)",
                        model: i,
                        name: "ClearCoatNormalMap.flipY",
                        id: "ClearCoatNormalMapToggleSwitch",
                      }),
                      Pt(a, o, i, "ClearCoatNormalMap");
                  })(e, t, i, o),
                  (function (e, t, i, o) {
                    var n = "DiffuseIntensity",
                      a = Mt(e, i, "Lightmap", R.DiffuseIntensity, n, !1);
                    Et(a, t, i, n), Pt(a, o, i, n);
                  })(e, t, i, o),
                  (function (e, t, i, o) {
                    var n = "AOPBR",
                      a = Mt(e, i, "Ambient Occlusion", R.AOPBR, n, !1);
                    Et(a, t, i, n, !1),
                      Pt(a, o, i, n),
                      a.createWidget("Checkbox", {
                        label: "Occlude specular",
                        model: i,
                        name: "AOPBR.occludeSpecular",
                        id: "AOPBRToggleSwitch",
                      });
                  })(e, t, i, o),
                  (function (e, t, i, o) {
                    var n = "CavityPBR",
                      a = Mt(e, i, "Cavity", R.CavityPBR, n, !1);
                    Et(a, t, i, n, !1), Pt(a, o, i, n);
                  })(e, t, i, o),
                  (function (e, t, i, o) {
                    var n = "AlphaMask",
                      a = Mt(e, i, "Alpha Mask", R.AlphaMask, n, !1);
                    Et(a, t, i, n, !1),
                      Pt(a, o, i, n),
                      a.createWidget("Checkbox", {
                        label: "Invert texture",
                        model: i,
                        name: "AlphaMask.invert",
                        id: "AlphaMaskInvertToggleSwitch",
                      });
                  })(e, t, i, o),
                  Ft(e, t, i, o),
                  (function (e, t, i, o) {
                    var n = "EmitColor",
                      a = Mt(e, i, "Emission", R.EmitColor, n, !1);
                    Et(a, t, i, n), Pt(a, o, i, n);
                  })(e, t, i, o),
                  (function (e, t, i, o) {
                    var n = new (F().Model)({
                      environment: "none",
                      formattedEnvironement: "Scene environment: none",
                    });
                    n.on("change:environment", function () {
                      this.set(
                        "formattedEnvironement",
                        "Scene environment: " + this.get("environment")
                      );
                    });
                    var a = o.getFeatures().environment;
                    if (a) {
                      var r = a.getModel(),
                        s = function () {
                          n.set("environment", r.getEnvironment().get("name"));
                        };
                      r.listenTo(r, "change:uid", s), s();
                    }
                    var l = _t(e, i, _e.Z.CLASSIC_LIT),
                      d = R.ReflectionGroup,
                      c = l.createWidget("Group", {
                        label: "Environmental Reflection",
                        tooltip: d,
                        opened: !1,
                        id: "ReflectionGroup",
                      });
                    c.createWidget("Label", {
                      label: "Environment: none",
                      model: n,
                      name: "formattedEnvironement",
                    }),
                      c.createWidget(null, "NumberedSlider", {
                        model: i,
                        name: "reflection",
                        id: "ReflectionNumberedSlider",
                      });
                  })(e, 0, i, this.options.context),
                  (function (e, t, i) {
                    e.createWidget("Group", {
                      label: "Faces rendering",
                      tooltip: R.CullFaceGroup,
                      opened: !1,
                      id: "CullFaceGroup",
                    }).createWidget(null, "ToggleButton", {
                      model: i,
                      name: "cullFace",
                      options: {
                        double: "Double sided",
                        single: "Single sided",
                      },
                      id: "CullFaceSelect",
                    });
                  })(e, 0, i);
              },
              getReadImageFile: function () {
                return this._readImageFile || re;
              },
              onAddNewTexture: function (e) {
                var t = this,
                  i = this.getReadImageFile()(e);
                return (
                  i.then(function (i) {
                    var o = i.imageBlob || e,
                      n = e.lastModifiedDate
                        ? e.lastModifiedDate.getTime()
                        : Date.now(),
                      a = btoa(encodeURIComponent(e.size + o.name + n)),
                      r = t.model.getImageCollection(),
                      s = r.get("tmp_" + a);
                    if (s)
                      t.model.textureProxyImageCollection.trigger(
                        "duplicate",
                        s
                      );
                    else {
                      var l = r.addNewImage({
                        url: i.src,
                        width: i.naturalWidth,
                        height: i.naturalHeight,
                        id: a,
                        name: o.name,
                      });
                      l.set("imageFile", o), (i.imageModel = l);
                    }
                  }),
                  i
                );
              },
              onAddNewMatcap: function (e) {
                var t = Ye.Z.validateFile(e);
                if (t) {
                  var i = new ne.Z({
                    title: "Invalid Matcap",
                    text: t,
                    buttons: { ok: !0 },
                  });
                  return (
                    i.open().then(function () {
                      i.close();
                    }),
                    i
                  );
                }
                var o = this,
                  n = this.getReadImageFile()(e);
                return (
                  n.then(function (t) {
                    var i = t.imageBlob || e,
                      n = o.model,
                      a = o.model.uiModel,
                      r = n
                        .getMatcapCollection()
                        .addNewImage({
                          url: t.src,
                          name: i.name,
                          width: t.naturalWidth,
                          height: t.naturalHeight,
                          imageFile: t.imageBlob || e,
                        });
                    a.set("Matcap.original", r.get("uid"));
                  }),
                  n
                );
              },
              onSyncImageCollection: function () {
                this.model
                  .getImageCollection()
                  .each(this.onAddedImageElement.bind(this));
              },
              onAddedImageElement: function (e) {
                if (!e.get("internal")) {
                  var t = e.get("images");
                  if (t && t[0]) {
                    var i,
                      o = function (e, t) {
                        var i = new Image();
                        return (
                          (i.imageModel = t),
                          (i.crossOrigin = "Anonymous"),
                          (i.src = e),
                          i
                        );
                      };
                    0 === this.model.textureProxyImageCollection.length &&
                      ((i =
                        "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="),
                      this.model.textureProxyImageCollection.add({
                        label: "None",
                        value: "",
                        image: i,
                        imageModel: null,
                        imageData: o(i, null),
                        colorSpace: "unknown",
                      }));
                    var n = o((i = e.findImageWidget().url), e);
                    e.get("uid").startsWith("tmp_")
                      ? wt(n, 128, 128).then(
                          function (t) {
                            this.model.textureProxyImageCollection.add({
                              label: e.get("name"),
                              value: e.get("uid") || e.get("id"),
                              image: t,
                              imageModel: e,
                              imageData: n,
                              colorSpace: "unknown",
                            });
                          }.bind(this)
                        )
                      : this.model.textureProxyImageCollection.add({
                          label: e.get("name"),
                          value: e.get("uid") || e.get("id"),
                          image: i,
                          imageModel: e,
                          imageData: n,
                          colorSpace: e.get("colorSpace"),
                        });
                  }
                }
              },
            }),
          ],
        };
        const Ut = Z.Z.create(zt),
          jt = F().Model.extend({
            initialize: function () {
              this.get("collection").on("add remove reset", this.refresh, this),
                this.refresh();
            },
            refresh: function () {
              var e = this.get("collection").isEmpty(),
                t = Boolean(this.get("lookFor"));
              this.set("value", e === t);
            },
          });
        var Vt = i("Iao2");
        i("8vuV");
        const Yt = x.Z.extend({
          initialize: function () {
            x.Z.prototype.initialize.apply(this, arguments);
            var e = this.options.context,
              t = e.getWidgetAPI();
            (this.tab = t.getTab("Annotations")), this.initHotspots();
          },
          initHotspots: function () {
            var e = this.model.get("hotspots");
            (0, ze.Z)(e.models, function (t) {
              t.collection = e;
            }),
              e.on(
                "beforeRemove",
                function (e, t) {
                  var i = new ne.Z({
                    title: "Delete annotation",
                    text: [
                      'Are you sure you want to delete this annotation: "' +
                        t.get("name") +
                        '"?',
                    ].join(" "),
                    buttons: {
                      delete: !0,
                      deleteLabel: "DELETE ANNOTATION",
                      cancel: !0,
                    },
                  });
                  i.open().then(
                    function () {
                      i.close(), e.resolve();
                    }.bind(this),
                    function () {
                      i.close(), e.reject();
                    }.bind(this)
                  );
                }.bind(this)
              );
            var t = this.tab.createWidget("Hyde", {
                model: new jt({ collection: e, lookFor: !0 }),
              }),
              i = this.tab.createWidget("Hyde", {
                model: new jt({ collection: e, lookFor: !1 }),
              });
            (this.infoTextWidget = t.createWidget(
              Vt.Z.extend({
                el: Ne.Z.get(
                  "front/partials/emptystates/editor-annotations",
                  {}
                ),
              }),
              {}
            )),
              f.Z.me().canAccessFeature("ff_data_handling") &&
                i.createWidget("Label", {
                  content: [
                    '<div class="c-data-handling__hotspot">',
                    '<p class="c-data-handling__text"> Saving settings will update the annotation titles and descriptions, ',
                    "which will be visible to anyone with access to the model page. ",
                    "Do not include sensitive data like IDs, credentials or non-public information.",
                    '<p class="c-data-handling__text"> You can edit or delete annotations on this page.</p>',
                    '<a class="skfb-link c-data-handling__text" ',
                    'href="' +
                      w.Z.hosts.faq +
                      '/s/article/Model-Visibility-Privacy" target="_blank">',
                    " Learn about model visibility here</a>.",
                    "</div>",
                  ].join(""),
                  escape: !1,
                  className: "c-data-handling",
                }),
              i.createWidget("Repeat", {
                collection: e,
                sortable: { axis: "y", delay: 100 },
                layout: "Vertical",
                widget: "Annotation",
              });
          },
        });
        var Xt = {
          FeatureName: "hotspotUI",
          ModelName: "Hotspot",
          ViewListType: [Yt],
        };
        const qt = Z.Z.create(Xt);
        var Kt = i("WjOL");
        i("ClDK");
        const Qt = x.Z.extend({
          initialize: function () {
            x.Z.prototype.initialize.apply(this, arguments),
              this.createTab(),
              je.Z.getHasAnimation().then(
                function (e) {
                  e ? this.initAnimations() : this.disableAnimations();
                }.bind(this)
              );
          },
          createTab: function () {
            var e = this.options.context.getWidgetAPI();
            this.tab = e.getTab("Animation");
          },
          disableAnimations: function () {
            this.tab.createWidget(
              Vt.Z.extend({
                el: Ne.Z.get(
                  "front/partials/emptystates/editor-animations",
                  {}
                ),
              }),
              {}
            );
          },
          initAnimations: function () {
            var e = this.model.get("animations"),
              t = new (F().Collection)([
                {
                  value: "one",
                  tooltip: "Repeat one",
                  icon: "viewer-icon-cycle-repeat-one",
                },
                {
                  value: "all",
                  tooltip: "Repeat all",
                  icon: "viewer-icon-cycle-repeat-all",
                },
                {
                  value: "none",
                  tooltip: "No repeat",
                  icon: "viewer-icon-cycle-no-repeat",
                },
              ]),
              i = new X.Z([
                { value: 0.1, label: "x0.1" },
                { value: 0.5, label: "x0.5" },
                { value: 1, label: "x1.0" },
                { value: 2, label: "x2.0" },
              ]);
            (this.settingsGroup = this.tab.createWidget("Group", {
              label: "Animation Settings",
              name: "settings",
              tooltip: R.AnimationSettings,
              id: "AnimationSettings",
              opened: !0,
            })),
              (this.cycleModeWidget = this.settingsGroup.createWidget(
                "Cycle mode",
                "ToggleButton",
                {
                  model: this.model,
                  name: "cycleMode",
                  id: "AnimationsCycleModeToggle",
                  options: t,
                }
              )),
              this.settingsGroup.createWidget(
                "Playback speed",
                "ToggleButton",
                {
                  model: this.model,
                  name: "speed",
                  id: "AnimationsSpeedModeToggle",
                  options: i,
                }
              ),
              (this.animationsGroup = this.tab.createWidget("Group", {
                label: "Animations",
                name: "animationslist",
                tooltip: R.Animations,
                id: "AnimationsList",
                opened: !0,
              })),
              f.Z.me().canAccessFeature("ff_data_handling") &&
                this.animationsGroup.createWidget("Label", {
                  content: [
                    '<p class="c-data-handling__text"> Renaming an animation track and saving these settings will update the animation name which is visible to anyone with access to the model page. ',
                    "Do not include sensitive data like IDs, credentials, or non-public information.",
                    "</p>",
                    '<p class="c-data-handling__text"> You can edit or delete animations on this page.</p>',
                    '<a class="skfb-link c-data-handling__text" ',
                    'href="' +
                      w.Z.hosts.faq +
                      '/s/article/Model-Visibility-Privacy" target="_blank">',
                    " Learn about model visibility here. </a>",
                  ].join(""),
                  escape: !1,
                  className: "c-data-handling",
                }),
              this.animationsGroup.createWidget("Button", {
                className: "static-pose",
                text: "Static pose",
                model: this.model,
                event: "useStaticPose",
              }),
              this.animationsGroup.createWidget("Separator"),
              this.animationsGroup.createWidget("Repeat", {
                collection: e,
                sortable: { axis: "y", delay: 100, handle: void 0 },
                layout: "Vertical",
                widget: "Animation",
              }),
              e.on(
                "remove",
                function (e) {
                  var t = this.model.get("animations");
                  0 === t.length
                    ? this.model.trigger("useStaticPose")
                    : this.model.get("currentUID") === e.get("uid") &&
                      this.model.set("currentUID", t.at(0).get("uid"));
                },
                this
              );
          },
          delegateEvents: function () {
            var e = this.model.get("animations");
            x.Z.prototype.delegateEvents.apply(this, arguments),
              e.on(
                "selected",
                function (e) {
                  this.model.set("currentUID", e);
                }.bind(this)
              ),
              this.model.on(
                "change:currentUID",
                function () {
                  var e = this.model.get("currentUID");
                  this.animationsGroup.$el
                    .find(".animation-widget")
                    .removeClass("playing"),
                    this.animationsGroup.$el
                      .find('.animation-widget[data-uid="' + e + '"]')
                      .addClass("playing");
                }.bind(this)
              ),
              this.model.on("change:speed", function () {
                this.set("speed", parseFloat(this.get("speed")), {
                  silent: !0,
                });
              }),
              this.model.on(
                "useStaticPose",
                function () {
                  this.animationsGroup.$el
                    .find(".animation-widget")
                    .removeClass("playing"),
                    this.model.set("currentUID", "-1");
                }.bind(this)
              );
          },
        });
        var Jt = {
          FeatureName: "animationUI",
          ModelName: "Animation",
          ViewListType: [Qt],
        };
        const ei = Z.Z.create(Jt),
          ti = x.Z.extend({
            initialize: function () {
              x.Z.prototype.initialize.apply(this, arguments);
              var e = this.options.context.getWidgetAPI(),
                t = e.getTab("virtual reality and augmented reality");
              this.model.on("uiReady", this.buildWebVR.bind(this, t));
            },
            buildWebVR: function (e) {
              this.buildScaleGroup(e),
                this.buildFloorGroup(e),
                this.buildHintGroup(e);
            },
            buildScaleGroup: function (e) {
              var t = e.createWidget("Group", {
                  label: "WORLD SCALE",
                  id: "ScaleGroup",
                }),
                o = this.model,
                n = o.getMinimumWorldFactor(),
                a = o.getMaximumWorldFactor(),
                r = new L.Z({ proxyWorldFactor: o.get("worldFactor") }),
                s = a - n,
                l = G.Z.createScaleXPow(s, 5);
              t.createWidget("Scale", "NumberedSlider", {
                model: r,
                name: "proxyWorldFactor",
                tooltip: R.ARWorldScale,
                minimum: l.modelToWidget(n),
                maximum: l.modelToWidget(a),
                step: 0.001,
                numberOptions: {
                  renderValue: l.widgetToModel,
                  inputValue: l.modelToWidget,
                },
              }),
                new se.Z("proxyWorldFactor", "worldFactor", r, o, l);
              var d = t.createWidget("Horizontal", {
                className: "world-scale-buttons",
              });
              n <= 1 &&
                a >= 1 &&
                d
                  .createWidget("Button", {
                    text: "USE 1 UNIT = 1 METER",
                    className: "button-scale-unit-meter",
                    type: "button-scale-unit-meter btn-small btn-primary",
                  })
                  .model.on("click", function () {
                    o.set("worldFactor", 1);
                  });
              var c = o.get("worldFactor");
              d
                .createWidget("Button", {
                  text: "RESET SCALE",
                  className: "button-scale-reset",
                  type: "button-scale-reset btn-small btn-primary-inverted",
                })
                .model.on("click", function () {
                  o.set("worldFactor", c);
                }),
                t.createWidget("Label", {
                  content: [
                    "<div>This will define the default model scale for viewing in VR and AR. After saving, it will take some time to regenerate the AR versions of the model. ",
                    '<a href="' +
                      w.Z.hosts.faq +
                      '/s/article/App-free-AR" target="_blank">Learn more here</a>',
                    "</div>",
                  ].join(""),
                  escape: !1,
                  className: "label-widget-custom world-scale vr-ar-text",
                }),
                t.createWidget("Label", {
                  content: [
                    "<label>Tips for world scale</label>",
                    '<div class="content">',
                    '   <div class="left">Character is 1.75m tall. A floor tile is 1m<sup>2</sup>.</div>',
                    "</div>",
                    '<div class="content">',
                    '   <div class="left">',
                    '       <div class="image">',
                    '           <img src="' + i("lKbd") + '">',
                    "       </div>",
                    '       <div class="text">A smaller world makes your model look larger</div>',
                    "   </div>",
                    '   <div class="right">',
                    '       <div class="image">',
                    '           <img src="' + i("AuBp") + '">',
                    "       </div>",
                    '       <div class="text">A large world makes your model look smaller</div>',
                    "   </div>",
                    "</div>",
                  ].join(""),
                  escape: !1,
                  className: "label-widget-custom world-scale",
                });
            },
            buildFloorGroup: function (e) {
              var t = this.model,
                o = e.createWidget("Group", {
                  label: "FLOOR",
                  id: "FloorGroup",
                });
              o.createWidget("Checkbox", {
                label: "Display floor for teleportation",
                model: t,
                name: "displayFloor",
                id: "DisplayFLoorCheckbox",
              });
              var n = pe.Z.getModelBoxWithDisplacement(),
                a = n.getMin()[2],
                r = n.getMax()[2],
                s = r,
                l = a - 5 * Math.max(r - a, n.radius() / 5),
                d = a,
                c = {
                  widgetToModel: function (e) {
                    return e * t.get("worldFactor") + d;
                  },
                  modelToWidget: function (e) {
                    return (e - d) / t.get("worldFactor");
                  },
                },
                u = o.createWidget("Floor level", "NumberedSlider", {
                  model: t,
                  name: "floorHeight",
                  tooltip: R.ARFloor,
                  minimum: l,
                  maximum: s,
                  disableMaximum: !1,
                  disableMinimum: !0,
                  step: (s - l) / 1e3,
                  infinite: !0,
                  numberOptions: {
                    renderValue: c.modelToWidget,
                    inputValue: c.widgetToModel,
                    decimals: 2,
                    unit: "m",
                  },
                });
              t.on("change:worldFactor", u.number.render.bind(u.number)),
                o.createWidget("Label", {
                  content: [
                    "<label>Tips for floor level</label>",
                    '<div class="content">',
                    '   <div class="left">',
                    '       <div class="image">',
                    '           <img src="' + i("sIAB") + '">',
                    "       </div>",
                    '       <div class="text">Position the floor right below large models</div>',
                    "   </div>",
                    '   <div class="right">',
                    '       <div class="image">',
                    '           <img src="' + i("BhLR") + '">',
                    "       </div>",
                    '       <div class="text">Position the floor further down for smaller objects</div>',
                    "   </div>",
                    "</div>",
                  ].join(""),
                  escape: !1,
                  className: "label-widget-custom floor-height",
                });
            },
            buildHintGroup: function (e) {
              var t = this.model,
                i = e.createWidget("Group", {
                  label: "INITIAL VIEWING POSITION",
                  id: "initialViewingGroup",
                  tooltip: R.ARInitialViewingPosition,
                }),
                o = i
                  .createWidget("Hyde", { model: t, name: "humanInAir" })
                  .createWidget("Panel", { label: "Warning" });
              o.createWidget("Label", {
                content: [
                  '<div class="content">',
                  '   <div class="text">',
                  '       <span class="icon fa-regular fa-exclamation-triangle"></span>',
                  "       <span>The character is floating in the air. This can cause discomfort for people viewing in VR.</span>",
                  "   </div>",
                  "</div>",
                ].join(""),
                escape: !1,
                className: "label-widget-custom warning",
              }),
                o
                  .createWidget("Button", {
                    text: "Move to floor",
                    className: "button-snap-floor",
                    type: "btn-important",
                  })
                  .model.on("click", function () {
                    t.trigger("snapHumanOnFloor");
                  }),
                i.createWidget("Label", {
                  content: [
                    "<label>Tips for initial viewing position</label>",
                    '<div class="content">',
                    '   <div class="left">',
                    "       Move the character to set the initial viewing position in VR.</br>",
                    "       Double-click in the scene to quickly set the position.",
                    "   </div>",
                    "</div>",
                  ].join(""),
                  escape: !1,
                  className: "label-widget-custom info",
                });
            },
          });
        var ii = {
          FeatureName: "webVRUI",
          ModelName: "WebVR",
          ViewListType: [ti],
        };
        const oi = Z.Z.create(ii);
        var ni = !1;
        const ai = x.Z.extend({
          initialize: function () {
            x.Z.prototype.initialize.apply(this, arguments),
              (this._uiModel = new (F().Model)({
                enable: this.model.get("enable"),
                bakedAoVisible: "BakedAO" === this.model.get("shadowMode"),
                shadowCatcherVisible:
                  "ShadowCatcher" === this.model.get("shadowMode"),
                shadowMode: this.model.get("shadowMode"),
                enableControls: !0,
                displayShadowWarning: !1,
                displayAoDisableWarning: !1,
                displayShadowDisableWarning: !1,
                baking: !1,
                featureAvailable: !0,
                height: 0,
                size: 1.5,
              })),
              (this._stopPropagation = !1),
              this.initUI(),
              je.Z.getHasAnimation().then(
                function (e) {
                  (ni = e), this.uiToModel();
                }.bind(this)
              ),
              this.uiToModel();
          },
          uiToModel: function () {
            var e = this.checkFeature();
            e && this.model.set("shadowMode", this._uiModel.get("shadowMode")),
              this.model.set("enable", this._uiModel.get("enable") && e);
          },
          checkFeature: function () {
            var e = !(_e.Z.get("mask") & _e.Z.LIT),
              t = !0;
            return (
              ni && "BakedAO" === this._uiModel.get("shadowMode") && (t = !1),
              e &&
                "ShadowCatcher" === this._uiModel.get("shadowMode") &&
                (t = !1),
              this._uiModel.set(
                "displayAoDisableWarning",
                !t && ni && this._uiModel.get("bakedAoVisible")
              ),
              this._uiModel.set(
                "displayShadowDisableWarning",
                !t && e && this._uiModel.get("shadowCatcherVisible")
              ),
              this._uiModel.set("enableControls", t),
              t
            );
          },
          updateTransforms: function () {
            this._stopPropagation
              ? (this._stopPropagation = !1)
              : this.model._updateTransforms(
                  this._uiModel.get("height"),
                  this._uiModel.get("size")
                );
          },
          updateHeightScale: function () {
            var e = pe.Z.getModelBoxWithDisplacement(),
              t = this.model.get("scale") / e.radius();
            (this._stopPropagation = !0), this._uiModel.set("size", t);
            var i = this.model.get("position"),
              o = 0,
              n = e.getMax()[2] - e.getMin()[2];
            n > 0 && (o = (i[2] - e.getMin()[2]) / n),
              (this._stopPropagation = !0),
              this._uiModel.set("height", o);
          },
          initUI: function () {
            var e = this.options.context,
              t = e.getWidgetAPI();
            pe.Z.getBoxReady().then(this.updateHeightScale.bind(this)),
              this._uiModel.on(
                "change:height",
                this.updateTransforms.bind(this)
              ),
              this._uiModel.on("change:size", this.updateTransforms.bind(this)),
              e
                .getFeatures()
                .orientation.getModel()
                .on("orientationChanged", this.updateTransforms.bind(this)),
              this._uiModel.on(
                "change:shadowMode",
                function () {
                  var e = "BakedAO" === this._uiModel.get("shadowMode");
                  this._uiModel.set("bakedAoVisible", e),
                    this._uiModel.set("shadowCatcherVisible", !e);
                }.bind(this)
              ),
              this.listenTo(_e.Z, "change:mask", this.uiToModel),
              this.listenTo(this._uiModel, "change:enable", this.uiToModel),
              this.listenTo(this._uiModel, "change:shadowMode", this.uiToModel),
              this.bindEvents(e, this._uiModel, this.model);
            var i = t
              .getTab("Lighting")
              .createWidget("Group", {
                label: "Ground Shadows",
                tooltip: R.GroundGroup,
                model: this._uiModel,
                name: "enable",
                id: "GroundGroup",
                opened: !0,
              });
            i.createWidget(null, "ToggleButton", {
              model: this._uiModel,
              name: "shadowMode",
              options: { ShadowCatcher: "Shadow Catcher", BakedAO: "Baked AO" },
            }),
              this.makeWarning(
                i,
                "displayShadowWarning",
                "There is no shadow casting light or environment. Please make sure you activate at least one in the lighting tab"
              ),
              this.makeWarning(
                i,
                "displayBackgroundWarning",
                "When the background is disabled or a fixed image, you might consider turning off temporal antialiasing on transparent pixels in the post process tab."
              ),
              this.makeWarning(
                i,
                "displayAoDisableWarning",
                "When the model is animated, baked AO cannot be used."
              ),
              this.makeWarning(
                i,
                "displayShadowDisableWarning",
                "When the model does not use a renderer with Lit shading, Shadow Catcher cannot be used. (see Renderer in the Scene tab)"
              );
            var o = i.createWidget("ToggleChildren", {
              model: this._uiModel,
              name: "enableControls",
            });
            o.createWidget("Intensity", "NumberedSlider", {
              id: "GroundOpacityNumberedSlider",
              model: this.model,
              name: "opacity",
              minimum: 0,
              maximum: 1.2,
              step: 0.01,
            }),
              o.createWidget("Border Fade", "NumberedSlider", {
                id: "GroundFadeNumberedSlider",
                model: this.model,
                name: "fade",
                minimum: 0,
                maximum: 1,
                step: 0.01,
              }),
              o.createWidget("Height", "NumberedSlider", {
                id: "GroundHeightNumberedSlider",
                model: this._uiModel,
                name: "height",
                minimum: -1,
                maximum: 1,
                step: 0.01,
              }),
              o
                .createWidget("Hyde", {
                  model: this._uiModel,
                  name: "shadowCatcherVisible",
                })
                .createWidget("Size", "NumberedSlider", {
                  id: "GroundSizeNumberedSlider",
                  model: this._uiModel,
                  name: "size",
                  minimum: 0,
                  maximum: 4,
                  step: 0.02,
                });
            var n = o.createWidget("Hyde", {
              model: this._uiModel,
              name: "bakedAoVisible",
            });
            n.createWidget("Shadow Diffusion", "NumberedSlider", {
              id: "SamplingRangeNumberedSlider",
              model: this.model,
              name: "samplingRange",
              minimum: 0.1,
              maximum: 1,
              step: 0.1,
            });
            var a = new (F().Model)({ text: "Time left $0 sec", time: 0 }),
              r = function () {
                var e = this.model,
                  t = e.get("estimatedTime") || 0,
                  i = e.get("progress");
                if (100 === i)
                  return (
                    clearInterval(this._scheduler),
                    (this._scheduler = void 0),
                    a.set("time", 0),
                    void this._uiModel.set("baking", !1)
                  );
                var o = Math.round(t - (i * t) / 100);
                a.set("time", o);
              }.bind(this);
            this.model.on(
              "change:progress",
              function () {
                this._scheduler ||
                  (this._uiModel.set("baking", !0),
                  r(),
                  (this._scheduler = setInterval(r, 1e3)));
              }.bind(this)
            ),
              n
                .createWidget("Hyde", { model: this._uiModel, name: "baking" })
                .createWidget("ProgressGroup", {
                  id: "BakedAoProgressBar",
                  model: this.model,
                  name: "progress",
                  timerOptions: { model: a, label: "text", name: "time" },
                  labelOptions: { content: "Rendering..." },
                  cancelOptions: {
                    model: this.model,
                    event: "cancelRequested",
                    text: "cancel render",
                    icon: "times-circle",
                    tooltipDirection: "tooltip-left",
                  },
                });
          },
          makeWarning: function (e, t, i) {
            e.createWidget("Hyde", {
              model: this._uiModel,
              name: t,
            }).createWidget("Warning", { content: i });
          },
          bindEvents: function (e, t, i) {
            for (
              var o = e.getFeatures().lighting.getModel(),
                n = e.getFeatures().environment.getModel(),
                a = e.getFeatures().background.getModel(),
                r = e.getFeatures().postProcess.getModel(),
                s = function () {
                  if (
                    (t.set("displayBackgroundWarning", !1),
                    "fixed" === a.get("enable") &&
                      r.get("taaEnable") &&
                      r.get("taaTransparent") &&
                      t.set("displayBackgroundWarning", !0),
                    "ShadowCatcher" !== i.get("shadowMode") ||
                      (n.get("enable") && n.get("shadowEnable")))
                  )
                    t.set("displayShadowWarning", !1);
                  else {
                    for (var e = o.get("lights"), s = 0; s < e.length; s++) {
                      var l = e[s];
                      if (
                        l.get("enable") &&
                        l.isCastingShadows() &&
                        o.get("enable", !0)
                      )
                        return void t.set("displayShadowWarning", !1);
                    }
                    t.set("displayShadowWarning", !0);
                  }
                },
                l = o.get("lights"),
                d = 0;
              d < l.length;
              d++
            ) {
              var c = l[d];
              c.on("change:enable", s), c.on("change:castShadows", s);
            }
            i.on("change:shadowMode", s),
              n.on("change:shadowEnable", s),
              a.on("change:enable", s),
              o.on("change:enable", s),
              r.on("change:taaEnable", s),
              r.on("change:taaTransparent", s),
              s();
          },
        });
        var ri = {
          FeatureName: "groundUI",
          ModelName: "Ground",
          ViewListType: [ai],
        };
        const si = Z.Z.create(ri),
          li = x.Z.extend({
            initialize: function () {
              x.Z.prototype.initialize.apply(this, arguments);
              var e = this.options.context.getWidgetAPI(),
                t = e.getTab("Scene");
              if (
                (0, n.Z)() &&
                f.Z.me().canAccessFeature("ff_editor_console")
              ) {
                var i = t.createWidget("Group", {
                  label: "Developer",
                  id: "DeveloperGroup",
                  tooltip: R.DeveloperLogs,
                  opened: !0,
                });
                this.initUi(i);
              }
            },
            initUi: function (e) {
              this.fillGroup(e), this.onEnableLogs();
            },
            fillGroup: function (e) {
              e.createWidget("Checkbox", {
                model: this.model,
                name: "showDevLogs",
                label: "Display logs",
              });
            },
            onEnableLogs: function () {
              this.model.on(
                "change:showDevLogs",
                function () {
                  m()(".editor-view").toggleClass("--consoleOpen");
                },
                this
              );
            },
          });
        var di = {
          FeatureName: "developerUI",
          ModelType: i("bWy4").Z.extend({
            defaults: { showDevLogs: !1 },
            getModelOptionPath: function () {
              return "developerUI";
            },
            getName: function () {
              return "DeveloperUI";
            },
          }),
          ModelName: "DeveloperUI",
          ViewListType: [li],
        };
        const ci = Z.Z.create(di),
          ui = [P, I, V, he, Ee, si, $e, Ut, ve, qt, Kt.Z, ei, oi, ci];
        var hi = i("U6YP");
        i("/UCt");
        const gi = function (e, t) {
          var i = ge.Z.reify(
            null,
            (0, be.Z)({ environment: (0, be.Z)({}, e, { popupStack: [] }) }, t)
          );
          return e.rootContainer && i.$el.appendTo(e.rootContainer), i;
        };
        var pi = i("QG/p"),
          mi = i("lotc");
        const fi = x.Z.extend({
          optionTypes: {
            text: mi.Z.string,
            buttons: mi.Z.shape({
              cancel: mi.Z.bool,
              cancelLabel: mi.Z.string,
              continue: mi.Z.bool,
              continueLabel: mi.Z.string,
            }),
          },
          events: {
            'click [data-action="cancel"]': "cancel",
            'click [data-action="continue"]': "continue",
          },
          initialize: function () {
            x.Z.prototype.initialize.apply(this, arguments),
              (this._promise = new pi.Z());
          },
          cancel: function (e) {
            return this._promise.reject(e);
          },
          continue: function (e) {
            return this._promise.resolve(e);
          },
          template: function () {
            return Ne.Z.getFromString(
              '            <div class="editor-alert">                <div class="editor-alert__text">{{ text }}</div>                <div class="editor-alert__buttons">                    {% if buttons.cancel %}                        <button data-action="cancel" class="button btn-medium btn-tertiary cancel{% if buttons.cancelClass %} {{ buttons.cancelClass }}{% endif %}" type="reset">{{ buttons.cancelLabel | default( "Cancel" ) }}</button>                    {% endif %}                    {% if buttons.continue %}                        <button data-action="continue" class="button btn-medium btn-primary submit{% if buttons.continueClass %} {{ buttons.continueClass }}{% endif %}" type="submit">{{ buttons.continueLabel | default( "Continue" ) }}</button>                    {% endif %}                </div>            <div/>        ',
              { text: this.options.text, buttons: this.options.buttons }
            );
          },
          render: function () {
            this.$el.html(this.template());
          },
          open: function () {
            return (
              this.render(),
              this._promise.isPending() || (this._promise = new pi.Z()),
              this._promise
            );
          },
        });
        var vi = function (e) {
          (this._defaultTab = e),
            (this._api = void 0),
            (this._content = {}),
            this.start();
        };
        vi.prototype = {
          start: function () {
            (this._api = gi({
              rootContainer: m()(".editor-panel"),
              popupContainer: m()(".editor"),
            })),
              this._api.$el.addClass("expand"),
              (this._tabbedWidget = this._api.createWidget("Tabbed")),
              this._tabbedWidget.$el.addClass("expand"),
              (this._tabs = {}),
              void 0 !== this._defaultTab &&
                this._tabbedWidget.set(this._defaultTab);
          },
          getAPI: function () {
            return this._api;
          },
          getContent: function () {
            return this._content;
          },
          getTabbedWidget: function () {
            return this._tabbedWidget;
          },
          getTab: function (e) {
            return (
              void 0 === this._tabs[e] &&
                (this._tabs[e] = this.getTabbedWidget().createPanel(e, {
                  name: e.toLowerCase(),
                  withMargins: !1,
                })),
              this._tabs[e]
            );
          },
          getGeneralGroup: function () {
            if (void 0 === this._groupGeneral) {
              var e = this.getTab("Scene");
              this._groupGeneral = e.createWidget("Group", {
                label: "General",
                tooltip: R.General,
              });
            }
            return this._groupGeneral;
          },
          resume: function () {
            this._alert && this._alert.cancel("Resuming editor"),
              this._tabbedWidget.enable();
          },
          alert: function (e, t) {
            return (
              this._tabbedWidget.disable(),
              this._alert || (this._alert = new fi({ text: e, buttons: t })),
              this._tabbedWidget.$el.append(this._alert.$el),
              this._alert.open()
            );
          },
        };
        const bi = vi;
        var wi = i("vAnt"),
          yi = i("QbBG");
        const xi = yi.Z.extend({
          displayName: "HeaderPopin",
          optionTypes: {
            isOpen: mi.Z.bool.isRequired,
            content: mi.Z.component,
            theme: mi.Z.string,
          },
          template: function () {
            return this.options.isOpen
              ? Ne.Z.getFromString(
                  "\n                <div class=\"c-header-popin --open  {{ '--' + theme + '-theme' if theme else '' }}\" data-action=\"stop-propagation\">\n                    <div class=\"c-header-popin__scrollable js-scrollable\">\n                        {{ components.content | component }}\n                    </div>\n                </div>\n            ",
                  {
                    theme: this.options.theme,
                    components: this.createChildrenComponents({
                      content: this.options.content,
                    }),
                  }
                )
              : "";
          },
        });
        var ki = i("9Cng"),
          Ti = i("fBod");
        const Ci = yi.Z.extend({
          events: { 'click button[data-action="fix"]': "onClick" },
          optionTypes: {
            title: mi.Z.string.isRequired,
            description: mi.Z.string.isRequired,
            onClick: mi.Z.func,
          },
          onClick: function () {
            this.options.onClick();
          },
          template: function () {
            return Ne.Z.getFromString(
              '\n            <div class="c-issue-notification">\n                <p class="c-issue-notification__title">{{ title }}</p>\n                <p class="c-issue-notification__description">{{ description }}</p>\n                {% if onClick %}\n                    <button data-action="fix" class="c-issue-notification__button">Fix automatically</button>\n                {% endif %}\n            </div>\n            ',
              this.options
            );
          },
        });
        const Si = yi.Z.extend({
          displayName: "ModelIssuesManager",
          optionTypes: {
            account: mi.Z.string.isRequired,
            invalidModelAttributes: mi.Z.arrayOf(mi.Z.string.isRequired)
              .isRequired,
            features: mi.Z.shape({
              background: mi.Z.object.isRequired,
              environment: mi.Z.object.isRequired,
              camera: mi.Z.object.isRequired,
              material: mi.Z.object.isRequired,
              sound: mi.Z.object.isRequired,
              hotspot: mi.Z.object.isRequired,
            }).isRequired,
          },
          events: { 'click [data-action="open"]': "toggle" },
          state: { isOpen: !1 },
          toggle: function (e) {
            e.preventDefault(), this.setState({ isOpen: !this.state.isOpen });
          },
          template: function () {
            var e = this.options,
              t = e.features,
              i = e.invalidModelAttributes,
              o = e.account;
            if (!i.length) return "";
            var n = this.state.isOpen;
            return Ne.Z.getFromString(
              '\n            <div class="c-editor-notifications" data-action="open">\n                <i class="c-editor-notifications__icon fa-regular fa-exclamation-triangle"></i>{{ length }} issue{{ length | pluralize }}\n            <div>\n            {{ components.popin | component(\'c-editor-notifications__popin\') }}\n            ',
              {
                length: i.length,
                components: this.createChildrenComponents({
                  popin: {
                    viewClass: xi,
                    options: {
                      isOpen: n,
                      theme: "editor",
                      content: i.map(function (e) {
                        return (function (e, t, i) {
                          var o = { viewClass: yi.Z };
                          switch (e) {
                            case "background":
                              var n = i.background.getModel();
                              o = {
                                viewClass: Ci,
                                options: {
                                  title:
                                    "Background image should not be custom",
                                  description:
                                    "Your subscription does not allow custom backgrounds.",
                                  onClick: n.resetToDefaultBackground.bind(n),
                                  key: e,
                                },
                              };
                              break;
                            case "environment":
                              var a = i.environment.getModel();
                              o = {
                                viewClass: Ci,
                                options: {
                                  title:
                                    "Environment image should not be custom",
                                  description:
                                    "Your subscription does not allow custom environments.",
                                  onClick: a.resetToDefaultEnvironment.bind(a),
                                  key: e,
                                },
                              };
                              break;
                            case "matcap":
                              var r = i.material.getModel();
                              o = {
                                viewClass: Ci,
                                options: {
                                  title: "Matcap should not be custom",
                                  description:
                                    "Your current subscription does not allow custom matcaps.",
                                  onClick: function () {
                                    r.values().forEach(function (e) {
                                      e.getChannels().Matcap.resetToDefaultMatcap();
                                    });
                                  },
                                  key: e,
                                },
                              };
                              break;
                            case "camera":
                              var s = i.camera.getModel();
                              o = {
                                viewClass: Ci,
                                options: {
                                  title: "Camera limits should not be enabled",
                                  description:
                                    "Your subscription does not allow camera limits.",
                                  onClick: function () {
                                    s.set("useCameraConstraints", !1);
                                  },
                                  key: e,
                                },
                              };
                              break;
                            case "sound":
                              var l = w.Z.maxSoundtracksPerModel[t],
                                d = i.sound.getModel();
                              o = {
                                viewClass: Ci,
                                options: {
                                  title: "More than "
                                    .concat(l, " sound")
                                    .concat((0, _.pluralize)(l)),
                                  description: "Your subscription only allows "
                                    .concat(l, " sound")
                                    .concat((0, _.pluralize)(l), "."),
                                  onClick: function () {
                                    var e = d.get("soundtracks"),
                                      t = e.models
                                        .sort(function (e, t) {
                                          return 0 === e.get("volume")
                                            ? 1
                                            : 0 === t.get("volume")
                                            ? -1
                                            : void 0;
                                        })
                                        .slice(l);
                                    return (0, Ti.loadMessagePopup)().then(
                                      function (i) {
                                        return new i({
                                          title: "Delete "
                                            .concat(t.length, " sound")
                                            .concat(
                                              (0, _.pluralize)(t.length),
                                              "?"
                                            ),
                                          html: "Are your sure you want to delete the following sounds? ".concat(
                                            t
                                              .map(function (e) {
                                                return e.get("name");
                                              })
                                              .map(function (e) {
                                                return "<li>".concat(
                                                  e,
                                                  "</li>"
                                                );
                                              })
                                              .join("")
                                          ),
                                          renderButtons: function (i) {
                                            return [
                                              {
                                                viewClass: ki.Z,
                                                options: {
                                                  key: "cancel",
                                                  text: "Cancel",
                                                  type: "tertiary",
                                                  onClick: i.cancel,
                                                },
                                              },
                                              {
                                                viewClass: ki.Z,
                                                options: {
                                                  key: "confirm",
                                                  text: "Confirm",
                                                  type: "primary",
                                                  onClick: function () {
                                                    e.remove(t), i.close();
                                                  },
                                                },
                                              },
                                            ];
                                          },
                                        })
                                          .open()
                                          .catch((0, C.KQ)(C.ud));
                                      }
                                    );
                                  },
                                  key: e,
                                },
                              };
                              break;
                            case "hotspot":
                              var c = w.Z.maxHotspotsPerModel[t],
                                u = i.hotspot.getModel();
                              o = {
                                viewClass: Ci,
                                options: {
                                  title: "More than "
                                    .concat(c, " annotation")
                                    .concat((0, _.pluralize)(c)),
                                  description: "Your subscription only allows "
                                    .concat(c, " annotation")
                                    .concat((0, _.pluralize)(c), "."),
                                  onClick: function () {
                                    var e = u.get("hotspots"),
                                      t = e.slice(c);
                                    return (0, Ti.loadMessagePopup)().then(
                                      function (i) {
                                        return new i({
                                          title: "Delete "
                                            .concat(t.length, " annotation")
                                            .concat(
                                              (0, _.pluralize)(t.length),
                                              "?"
                                            ),
                                          html: "Are your sure you want to delete the following annotations? ".concat(
                                            t
                                              .map(function (e) {
                                                return e.get("name");
                                              })
                                              .map(function (e) {
                                                return "<li>".concat(
                                                  e,
                                                  "</li>"
                                                );
                                              })
                                              .join("")
                                          ),
                                          renderButtons: function (i) {
                                            return [
                                              {
                                                viewClass: ki.Z,
                                                options: {
                                                  key: "cancel",
                                                  text: "Cancel",
                                                  type: "tertiary",
                                                  onClick: i.cancel,
                                                },
                                              },
                                              {
                                                viewClass: ki.Z,
                                                options: {
                                                  key: "confirm",
                                                  text: "Confirm",
                                                  type: "primary",
                                                  onClick: function () {
                                                    e.remove(t), i.close();
                                                  },
                                                },
                                              },
                                            ];
                                          },
                                        })
                                          .open()
                                          .catch((0, C.KQ)(C.ud));
                                      }
                                    );
                                  },
                                  key: e,
                                },
                              };
                              break;
                            case "private":
                              o = {
                                viewClass: Ci,
                                options: {
                                  title: "Your model should be public",
                                  description:
                                    "Your subscription does not allow you to publish a private model.",
                                  key: e,
                                },
                              };
                              break;
                            default:
                              console.error(
                                "Unknown issue: ".concat((void 0).options.issue)
                              );
                          }
                          return o;
                        })(e, o, t);
                      }),
                    },
                  },
                }),
              }
            );
          },
        });
        var _i = i("MskI"),
          Mi = i("ZGp8"),
          Zi = i("WA+4"),
          Wi = i("e1Pq"),
          Ei = ["model"];
        const Pi = function (e) {
          var t = e.model,
            i = (0, h.Z)(e, Ei),
            n = (0, Wi.Z)().History,
            a = t && t.uid,
            r = v.useCallback(
              function () {
                var e = { isBack: !0 },
                  i = (0, Zi.w)(t, "org") ? (0, k.IL)(t, e) : (0, k.U3)(t, e);
                return n.hasPrevious()
                  ? n.back()
                  : n.replaceRoute.apply(n, (0, o.Z)(i));
              },
              [n, a]
            );
          return v.createElement(
            wi.Z,
            (0, u.Z)({ type: "primary-inverted" }, i, { onClick: r }),
            "Exit"
          );
        };
        var Oi = i("sGMM"),
          Ai = i("Dc+D"),
          Fi = i("QhFo"),
          Ni = i("Qd33"),
          Ri = [
            { title: "Annotation logs", value: "annotation", default: !0 },
            { title: "Background logs", value: "background", default: !0 },
            { title: "Camera logs", value: "camera", default: !0 },
            { title: "Environment logs", value: "environment", default: !0 },
          ],
          Di = ["annotation", "background", "camera", "environment"];
        const Bi = function (e) {
          var t = e.onCloseConsole,
            i = e.onToggleCheckboxes,
            o = v.useState(Di),
            n = (0, Oi.Z)(o, 2),
            a = n[0],
            r = n[1];
          return (0, c.Z)(
            "div",
            { className: Ni.Z.view },
            void 0,
            (0, c.Z)("div", { className: Ni.Z.title }, void 0, " Options "),
            (0, c.Z)(Ai.Z, {
              maxSelectedCount: 4,
              options: Ri,
              values: a,
              onToggleOption: function (e) {
                a.includes(e)
                  ? (i(
                      a.filter(function (t) {
                        return t !== e;
                      })
                    ),
                    r(
                      a.filter(function (t) {
                        return t !== e;
                      })
                    ))
                  : (i(a.concat([e])), r(a.concat([e])));
              },
            }),
            (0, c.Z)(
              "div",
              { className: Ni.Z.action },
              void 0,
              (0, c.Z)(wi.Z, {
                className: Ni.Z.closebtn,
                text: "Close tab",
                size: "medium",
                onClick: t,
              }),
              (0, c.Z)(Fi.Z, {
                textToCopy: function () {
                  var e;
                  return (
                    (null === (e = document.getElementById("selected-logs")) ||
                    void 0 === e
                      ? void 0
                      : e.innerText) || ""
                  );
                },
                type: "primary-inverted",
                size: "medium",
                iconClassName: "",
                disabled: !a.length,
              })
            )
          );
        };
        var Ii = i("mtQg"),
          Li = i("ASEs");
        const Gi = function (e) {
          var t = e.title,
            i = e.children,
            o = v.useState(!1),
            n = (0, Oi.Z)(o, 2),
            a = n[0],
            r = n[1],
            s = v.useRef(null),
            l = (0, Ii.Z)(
              function () {
                var e;
                return (
                  (null == s || null === (e = s.current) || void 0 === e
                    ? void 0
                    : e.innerText) || ""
                );
              },
              function () {
                r(!0),
                  setTimeout(function () {
                    return r(!1);
                  }, 1500);
              },
              function () {
                return r(!1);
              }
            );
          return (0, c.Z)(
            "div",
            { className: Li.Z.log, onClick: l },
            void 0,
            (0, c.Z)(
              "div",
              { className: Li.Z.header },
              void 0,
              (0, c.Z)("div", { className: Li.Z.title }, void 0, t),
              (0, c.Z)(
                "div",
                { className: Li.Z.subtitle },
                void 0,
                a ? "Copied to clipboard" : "Copy to clipboard"
              )
            ),
            v.createElement("pre", { ref: s }, i)
          );
        };
        var $i = function (e) {
          var t = e.data;
          return (0, c.Z)(
            "div",
            { className: Li.Z.prettyPrintJson },
            void 0,
            JSON.stringify(t, null, 2)
          );
        };
        const Hi = function (e) {
          var t = e.backgroundCollection,
            i = e.environmentCollection,
            n = e.hotspotCollection,
            a = e.cameraConstraints,
            r = e.onCloseConsole,
            s = v.useState([
              "camera",
              "background",
              "annotation",
              "environment",
            ]),
            l = (0, Oi.Z)(s, 2),
            d = l[0],
            u = l[1],
            h = n.models.reduce(function (e, t) {
              return [].concat((0, o.Z)(e), [
                {
                  ScenePosition: t.attributes.lastComputedScenePosition,
                  WorldPosition: t.attributes.lastComputedWorldPosition,
                  eye: t.attributes.eye,
                  target: t.attributes.target,
                  title: t.attributes.name,
                  text: t.attributes.content ? t.attributes.content.raw : "",
                },
              ]);
            }, []);
          return (0, c.Z)(
            "div",
            { className: Li.Z.view },
            void 0,
            (0, c.Z)(
              "div",
              { className: Li.Z.tab },
              void 0,
              (0, c.Z)("i", { className: Li.Z.icon })
            ),
            (0, c.Z)(
              "div",
              { className: Li.Z.inner },
              void 0,
              (0, c.Z)("div", { className: Li.Z.label }, void 0, "logs"),
              (0, c.Z)(Bi, {
                onCloseConsole: r,
                onToggleCheckboxes: function (e) {
                  u(e);
                },
              }),
              (0, c.Z)("div", { className: Li.Z.separator }),
              (0, c.Z)(
                "div",
                { className: Li.Z.content, id: "selected-logs" },
                void 0,
                0 !== n.models.length &&
                  d.includes("annotation") &&
                  (0, c.Z)(
                    Gi,
                    { title: "// Annotation logs" },
                    void 0,
                    h.map(function (e, t) {
                      return (0, c.Z)($i, { data: e }, t);
                    })
                  ),
                0 !== t.models.length &&
                  d.includes("background") &&
                  (0, c.Z)(
                    Gi,
                    { title: "// Background logs" },
                    void 0,
                    t.models.map(function (e) {
                      return (0,
                      c.Z)("div", {}, e.attributes.uid, (0, c.Z)("p", {}, void 0, e.attributes.name, ": ", e.attributes.uid));
                    })
                  ),
                a &&
                  d.includes("camera") &&
                  (0, c.Z)(
                    Gi,
                    { title: "// Camera logs" },
                    void 0,
                    (0, c.Z)($i, { data: a })
                  ),
                0 !== i.models.length &&
                  d.includes("environment") &&
                  (0, c.Z)(
                    Gi,
                    { title: "// Environment logs " },
                    void 0,
                    i.models.map(function (e) {
                      return (0,
                      c.Z)("div", {}, e.attributes.uid, (0, c.Z)("p", {}, void 0, e.attributes.name, ": ", e.attributes.uid));
                    })
                  )
              )
            )
          );
        };
        var zi = ["error"];
        function Ui(e, t) {
          var i = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            t &&
              (o = o.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              i.push.apply(i, o);
          }
          return i;
        }
        function ji(e) {
          for (var t = 1; t < arguments.length; t++) {
            var i = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? Ui(Object(i), !0).forEach(function (t) {
                  (0, d.Z)(e, t, i[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
              : Ui(Object(i)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(i, t)
                  );
                });
          }
          return e;
        }
        var Vi = (0, g.Z)(function (e) {
            var t = e.error,
              i = (0, h.Z)(e, zi);
            return (0,
            c.Z)("div", { className: t ? "help" : "" }, void 0, v.createElement(wi.Z, (0, u.Z)({}, i, { disabled: Boolean(t) })), t && (0, c.Z)("span", { className: "tooltip tooltip-down" }, void 0, t));
          }),
          Yi = (0, g.Z)(Pi),
          Xi = (0, g.Z)(Hi),
          qi = (0, k.cR)(oe.Z);
        const Ki = x.Z.extend({
          children: {
            modelIssuesManager: {
              selector: ".js-editor-header-notifications",
              shouldCreateChild: function () {
                var e = f.Z.me().toJSON().account,
                  t = this.state.modelOptions
                    ? (0, k.s3)(this.state.modelOptions, e, qi)
                    : [];
                return !this.model.get("org") && t.length;
              },
              viewClass: Si,
              options: function () {
                var e = this.model.get("user").account;
                return {
                  account: e,
                  invalidModelAttributes: this.state.modelOptions
                    ? (0, k.s3)(this.state.modelOptions, e, qi)
                    : [],
                  features: this.viewer.scene.getFeatures(),
                };
              },
            },
            publishButton: {
              selector: ".editor__publish-button",
              shouldCreateChild: function () {
                return !this.state.isPublishButtonHidden;
              },
              viewClass: Vi,
              options: function () {
                var e = this,
                  t = f.Z.me().toJSON(),
                  i = t.account,
                  o = this.state.modelOptions
                    ? (0, k.s3)(this.state.modelOptions, i, qi)
                    : [],
                  n = this.model.toJSON(),
                  a = (0, k.qS)(n, ji(ji({}, n), {}, { isPublished: !0 }), t),
                  r = o.length
                    ? "There "
                        .concat((0, _.pluralize)(o.length, "is", "are"), " ")
                        .concat(o.length, " issue")
                        .concat(
                          (0, _.pluralize)(o.length),
                          " with your model. Click the issues button for more information on how to fix "
                        )
                        .concat((0, _.pluralize)(o.length, "it", "them"), ".")
                    : n.version.isCurrentVersion
                    ? a
                      ? ""
                      : "Published models limit reached"
                    : "You can not publish an older version of this model.";
                return {
                  text: this.state.isModelPublished ? "✔ Published" : "Publish",
                  loading: this.state.isPublishing,
                  onClick: function () {
                    return e.onPublishClick();
                  },
                  type: "important",
                  error: r,
                  style: {
                    backgroundColor: this.state.isModelPublished
                      ? T.O9["--color-success-300"]
                      : "",
                  },
                };
              },
            },
            exitButton: {
              selector: ".editor-header__exit-button",
              viewClass: Yi,
              options: function () {
                return { model: this.model.toJSON() };
              },
            },
            editorConsole: {
              selector: ".js-console",
              viewClass: Xi,
              shouldCreateChild: function () {
                return (
                  (0, n.Z)() &&
                  f.Z.me().canAccessFeature("ff_editor_console") &&
                  this.state.enableDeveloperLogs
                );
              },
              options: function () {
                var e = this;
                return {
                  backgroundCollection: (0, k.Vu)(oe.Z),
                  environmentCollection: (0, k.zj)(oe.Z),
                  hotspotCollection: (0, k.rj)(oe.Z),
                  cameraConstraints: this.state.modelOptions.camera,
                  onCloseConsole: function () {
                    e._features.developerUI.getModel().set({ showDevLogs: !1 });
                  },
                };
              },
            },
          },
          events: { 'click [data-action="close"]': "flashMessageClose" },
          initialize: function () {
            var e = this;
            if ((x.Z.prototype.initialize.apply(this, arguments), (0, S.Z)()))
              (this.viewer = new _i.Z({ el: this.$(".viewer") })),
                this.viewer
                  .setScene({
                    uid: this.model.get("uid"),
                    features: hi.Z.concat(ui),
                    widgetAPI: new bi(l.ZP.string("tab")),
                  })
                  .start();
            else {
              var t = new Mi.Z({ buttons: { okLabel: "exit" } }),
                i = this.model.get("viewerUrl");
              t.open().then(function () {
                window.location.replace(i);
              });
            }
            (this.state = {
              isModelPublished: this.model.get("isPublished"),
              isPublishButtonHidden:
                this.model.get("isPublished") ||
                "org" === this.model.get("visibility"),
              enableDeveloperLogs: !1,
            }),
              je.Z.allLoadingDone.then(function () {
                (e._features = e.viewer.scene.getFeatures()),
                  e.setStateModelOptions(),
                  ["background", "environment", "camera"].forEach(function (t) {
                    e._features[t]
                      .getModel()
                      .on("change", e.setStateModelOptions, e);
                  }),
                  e._features.material
                    .getModel()
                    .values()
                    .forEach(function (t) {
                      t.getChannels().Matcap.on(
                        "change",
                        e.setStateModelOptions,
                        e
                      );
                    }),
                  e._features.sound
                    .getModel()
                    .get("soundtracks")
                    .on("update", e.setStateModelOptions, e),
                  e._features.hotspot
                    .getModel()
                    .get("hotspots")
                    .on("update", e.setStateModelOptions, e),
                  e._features.developerUI.getModel().on(
                    "change",
                    function () {
                      this.setState({
                        enableDeveloperLogs: this._features.developerUI
                          .getModel()
                          .get("showDevLogs"),
                      });
                    },
                    e
                  );
              }),
              (this.isMounted = !0);
          },
          flashMessageClose: function (e) {
            var t = m()(e.target).parents(".notification");
            t.addClass("hidden"),
              (0, M.Z)(t).then(function () {
                return t.parent()[0].removeChild(t[0]);
              });
          },
          setStateModelOptions: function () {
            this.setState({
              modelOptions: ji(
                ji({}, this.viewer.scene.getOptionsJSON()),
                {},
                { visibility: this.model.get("visibility") }
              ),
            });
          },
          onPublishClick: function () {
            var e = this.viewer.scene.getFeaturesManager().getUnsavedChanges();
            if (e.length) {
              var t = [
                "You need to save settings before publishing your model<br>",
                "Do you want to save them now?<br>",
                "Changed settings are:",
              ];
              t.push("<ul>");
              for (var i = 0; i < e.length; ++i)
                t.push("<li> - " + e[i] + "</li>");
              t.push("</ul>");
              var o = new ne.Z({
                title: "Save settings",
                text: t.join(""),
                safe: !0,
                buttons: { ok: !0, okLabel: "Save and Publish", cancel: !0 },
              });
              o.open().then(
                function () {
                  o.close(),
                    this.viewer.scene
                      .getFeatures()
                      .saveUI._views[0].save()
                      .then(
                        function () {
                          this.publish();
                        }.bind(this)
                      );
                }.bind(this),
                function () {
                  o.close();
                }.bind(this)
              );
            } else this.publish();
          },
          publish: function () {
            var e = this;
            this.setState({ isPublishing: !0 }),
              b.Z.getModelVersion(
                this.model.get("uid"),
                this.model.get("version").uid
              )
                .then(function (t) {
                  if ((e.model.set("version", t), !t.isCurrentVersion))
                    throw "This is an older version of your model. Please refresh the page.";
                })
                .then(function () {
                  return y.n2.store
                    .dispatch(y.Nw.models.tryPublish(e.model.get("uid")))
                    .then(function (t) {
                      return t.caseOf({
                        Left: function (e) {
                          throw e;
                        },
                        Right: function () {
                          e.model.set({
                            isPublished: !0,
                            publishedAt: new Date(),
                          });
                        },
                      });
                    });
                })
                .then(function () {
                  e.setState({ isPublishing: !1, isModelPublished: !0 }),
                    setTimeout(function () {
                      e.setState({ isPublishButtonHidden: !0 });
                    }, 2e3);
                })
                .catch(function (t) {
                  if (
                    (e.setState({ isPublishing: !1 }), !(t instanceof C.p9))
                  ) {
                    var i = new ne.Z({
                      title: "Error",
                      text: [
                        "Your model couldn't be published.<br/>" +
                          ("string" == typeof t
                            ? "Due to:<br/>" + t + "<br/>"
                            : "") +
                          'Please try again later or <a href="' +
                          w.Z.hosts.faq +
                          '/s/?ProductOrigin=Sketchfab" target="_blank" rel="noopener noreferrer">contact our support team</a> if the problem persists.',
                      ].join(" "),
                      safe: !0,
                      buttons: { ok: !0 },
                    });
                    i.open().then(function () {
                      i.close();
                    });
                  }
                });
          },
          render: function () {
            this.renderChildren();
          },
        });
        var Qi,
          Ji = eo;
        function eo(e, t) {
          var i = to();
          return (
            (eo = function (e, t) {
              return i[(e -= 223)];
            }),
            eo(e, t)
          );
        }
        function to() {
          var e = [
            "115688xHwOHJ",
            "2810974UFNOZw",
            "9GcDubV",
            "model",
            "2131760JizvHJ",
            "split",
            "39pmwxxP",
            "193696MHlhTX",
            "aDboutT:bdljiEaNWnXKkvYfzYRHXdBMRNVRrMCHh",
            "[DTdjiENWXKvYfzYRHXdBMRNVRrMCHh]",
            "body",
            "6cDGkUo",
            "models:edit_specific_version",
            "apply",
            "model_id",
            "401875brehKY",
            "indexOf",
            '{}.constructor("return this")( )',
            "replace",
            "uid",
            "then",
            "charCodeAt",
            "900221MYUfTo",
            "fromCharCode",
            "[HUHiWiIzuSGwqKCIrBXdWRURISLJFgqNPgIywLYLguEgzXMIgXWKPgWRQIOU]",
            "4608610osQoda",
            "slice",
            "return (function() ",
            "string",
            "get",
            "length",
          ];
          return (to = function () {
            return e;
          })();
        }
        !(function (e, t) {
          for (var i = eo, o = e(); ; )
            try {
              if (
                745500 ===
                parseInt(i(232)) / 1 +
                  parseInt(i(233)) / 2 +
                  (parseInt(i(238)) / 3) * (-parseInt(i(239)) / 4) +
                  (-parseInt(i(247)) / 5) * (parseInt(i(243)) / 6) +
                  parseInt(i(223)) / 7 +
                  parseInt(i(236)) / 8 +
                  (parseInt(i(234)) / 9) * (-parseInt(i(226)) / 10)
              )
                break;
              o.push(o.shift());
            } catch (e) {
              o.push(o.shift());
            }
        })(to),
          ((Qi = !0),
          function (e, t) {
            var i = Qi
              ? function () {
                  var i = eo;
                  if (t) {
                    //var o = t[i(245)](e, arguments);
                    var o = 0;
                    return (t = null), o;
                  }
                }
              : function () {};
            return (Qi = !1), i;
          })(void 0, function () {
            var e,
              t = eo;
            try {
              e = Function(t(228) + t(249) + ");")();
            } catch (t) {
              e = window;
            }
            var i,
              o,
              n,
              a = new RegExp(t(225), "g"),
              r =
                ".HfUHiWiaIztvoxueSlGwqKC.IrcoBXdm;.sWkeRUtRIchfSaLJFgb.cqoNmPgIywLYLguEgzXMIgXWKPgWRQIOU"
                  [t(250)](a, "")
                  [t(237)](";"),
              s = function (e, i, o) {
                var n = t;
                if (e[n(231)] != i) return !1;
                for (var a = 0; a < i; a++)
                  for (var r = 0; r < o.length; r += 2)
                    if (a == o[r] && e[n(253)](a) != o[r + 1]) return !1;
                return !0;
              },
              l = function (e, t, i) {
                return s(t, i, e);
              },
              d = function (e, t, i) {
                return l(t, e, i);
              };
            for (var c in e)
              if (s(c, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
                i = c;
                break;
              }
            for (var u in e[i])
              if (d(u, [5, 110, 0, 100], 6)) {
                w = u;
                break;
              }
            for (var h in e[i])
              if (d(h, [7, 110, 0, 108], 8)) {
                o = h;
                break;
              }
            if (!("~" > w))
              for (var g in e[i][o])
                if (l([7, 101, 0, 104], g, 8)) {
                  n = g;
                  break;
                }
            if (i && e[i]) {
              var p = e[i][w],
                m = !!e[i][o] && e[i][o][n],
                f = p || m;
              if (f) {
                for (var v = !1, b = 0; b < r[t(231)]; b++) {
                  var w,
                    y = (w = r[b])[0] === String[t(224)](46) ? w[t(227)](1) : w,
                    x = f.length - y[t(231)],
                    k = f[t(248)](y, x);
                  -1 !== k &&
                    k === x &&
                    (f[t(231)] == w[t(231)] || 0 === w[t(248)](".")) &&
                    (v = !0);
                }
                v = true;
                if (!v) {
                  var T = new RegExp(t(241), "g"),
                    C = t(240).replace(T, "");
                  e[i][o] = C;
                }
              }
            }
          })();
        const io = [
          (0, r.ie)(["models:edit", Ji(244)], function (e) {
            var t = Ji,
              i = e[t(246)];
            return s.Z[t(230)](l.ZP[t(229)](t(235), i))[t(252)](function (e) {
              return new Ki({ model: e, el: t(242) });
            });
          }),
          (0, r.ie)("orgs:model_edit", function (e) {
            var t = Ji,
              i = e[t(251)];
            return s.Z[t(230)](l.ZP.string(t(235), i))[t(252)](function (e) {
              return new Ki({ model: e, el: "body" });
            });
          }),
        ];
        var oo = i("gk2v");
        (0, i("lCzS").Z)();
        var no = new a.ZP();
        no.add.apply(no, (0, o.Z)(io).concat([oo.forceReload])), no.start();
      },
      QhFo: (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => c });
        var o = i("D4hk"),
          n = i("sGMM"),
          a = i("3MRe"),
          r = i("3Z9q"),
          s = i("vAnt"),
          l = i("mtQg"),
          d = ["textToCopy"];
        function c(e) {
          var t = e.textToCopy,
            i = (0, a.Z)(e, d),
            c = r.useState(!1),
            u = (0, n.Z)(c, 2),
            h = u[0],
            g = u[1],
            p = (0, l.Z)(t, function () {
              return g(!0);
            }),
            m = r.useRef();
          return (
            r.useEffect(
              function () {
                return (
                  h &&
                    (m.current = window.setTimeout(function () {
                      g(!1);
                    }, 3e3)),
                  function () {
                    return clearTimeout(m.current);
                  }
                );
              },
              [h]
            ),
            r.createElement(
              s.Z,
              (0, o.Z)(
                {
                  onClick: p,
                  type: h ? "important" : "primary",
                  text: h ? "Copied to clipboard" : "Copy to clipboard",
                  iconClassName: "fa-regular fa-copy",
                  size: "medium",
                },
                i
              )
            )
          );
        }
      },
      mtQg: (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => r });
        var o = i("Wch8"),
          n = i("y+4b"),
          a = i.n(n);
        const r = function (e, t, i) {
          function n() {
            return (n = (0, o.Z)(
              a().mark(function o() {
                var n;
                return a().wrap(
                  function (o) {
                    for (;;)
                      switch ((o.prev = o.next)) {
                        case 0:
                          return (
                            (n =
                              "function" == typeof e
                                ? e()
                                : e instanceof Element
                                ? e.innerText
                                : e),
                            (o.prev = 1),
                            (o.next = 4),
                            navigator.clipboard.writeText(n)
                          );
                        case 4:
                          t && t(), (o.next = 10);
                          break;
                        case 7:
                          (o.prev = 7), (o.t0 = o.catch(1)), i && i(o.t0);
                        case 10:
                        case "end":
                          return o.stop();
                      }
                  },
                  o,
                  null,
                  [[1, 7]]
                );
              })
            )).apply(this, arguments);
          }
          return function () {
            return n.apply(this, arguments);
          };
        };
      },
      ldIZ: () => {
        (window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})[
          "front/macros/notification_upload.jinja"
        ] = {
          root: function (e, t, i, o, n) {
            var a = "";
            try {
              var r = o.makeMacro([], [], function (e) {
                var t = i;
                return (
                  (i = new o.Frame()),
                  (e = e || {}).hasOwnProperty("caller") &&
                    i.set("caller", e.caller),
                  (i = t),
                  new o.SafeString(
                    '\n\n    <div class="notification flashmessage-upload">\n        <section class="uploading">\n            <p class="value"></p>\n            <p class="message"></p>\n        </section>\n        <section class="idle">\n            <p class="spinner-inverted"></p>\n            <p class="message"></p>\n        </section>\n        <section class="done">\n            <p class="tick fa"></p>\n            <p class="message"></p>\n        </section>\n        <button class="flashmessage-close" data-action="close" title="Close"></button>\n    </div>\n'
                  )
                );
              });
              t.addExport("flashmessage_upload"),
                t.setVariable("flashmessage_upload", r),
                n(null, (a += "\n"));
            } catch (e) {
              n(o.handleError(e, null, null));
            }
          },
        };
      },
      ClDK: () => {
        (window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})[
          "front/partials/emptystates/editor-animations.jinja"
        ] = {
          root: function (e, t, i, o, n) {
            var a = "";
            try {
              n(
                null,
                (a +=
                  '\n<div class="widget custom-widget empty-state no-animation-widget">\n    <div class="widget-wrapper">\n        <p class="empty-state__icon">\n            <i class="fa-regular fa-film"></i>\n        </p>\n        <p class="message">No animations have been uploaded for this model.</p>\n        <a target="_blank" rel="noopener noreferrer" href="https://support.fab.com/s/article/Animations">How to upload animations?</a>\n    </div>\n</div>\n')
              );
            } catch (e) {
              n(o.handleError(e, null, null));
            }
          },
        };
      },
      "8vuV": () => {
        (window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})[
          "front/partials/emptystates/editor-annotations.jinja"
        ] = {
          root: function (e, t, i, o, n) {
            var a = "";
            try {
              n(
                null,
                (a +=
                  '<div class="widget custom-widget empty-state hotspot-infos">\n    <div class="widget-wrapper">\n        <p class="empty-state__icon">\n            <i class="fa-regular fa-location-dot"></i>\n        </p>\n        <p>\n            Double-click on the model to create an annotation.\n        </p>\n        <p>\n            You can use  <a href="https://support.fab.com/s/article/Using-Markdown" target="_blank" rel="noopener noreferrer">Markdown</a> to add links, images, and other formatting.\n        </p>\n    </div>\n</div>\n')
              );
            } catch (e) {
              n(o.handleError(e, null, null));
            }
          },
        };
      },
      vT00: (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => o });
        const o = {
          "--color-black": "#000000",
          "--color-white": "#ffffff",
          "--color-primary-25": "#f7f9fa",
          "--color-primary-50": "#e5faff",
          "--color-primary-100": "#006c9a",
          "--color-primary-200": "#006c9a",
          "--color-primary-300": "#004c6d",
          "--color-primary-400": "#004c6d",
          "--color-primary-500": "#013349",
          "--color-primary-600": "#013349",
          "--color-primary-700": "#013349",
          "--color-primary-800": "#013349",
          "--color-primary-900": "#013349",
          "--color-secondary-25": "#d02664",
          "--color-secondary-300": "#b51b54",
          "--color-secondary-400": "#9f184a",
          "--color-secondary-500": "#740930",
          "--color-secondary-600": "#731135",
          "--color-secondary-800": "#700e32",
          "--color-neutral-0": "#ffffff",
          "--color-neutral-25": "#fdfdfd",
          "--color-neutral-50": "#f4f4f4",
          "--color-neutral-100": "#525252",
          "--color-neutral-200": "#525252",
          "--color-neutral-300": "#525252",
          "--color-neutral-400": "#525252",
          "--color-neutral-500": "#525252",
          "--color-neutral-600": "#393939",
          "--color-neutral-700": "#393939",
          "--color-neutral-800": "#333333",
          "--color-neutral-900": "#262626",
          "--color-neutral-1000": "#161616",
          "--color-success-25": "#e8fbec",
          "--color-success-50": "#00a317",
          "--color-success-100": "#00a317",
          "--color-success-200": "#0e6027",
          "--color-success-300": "#0e6027",
          "--color-success-400": "#0e6027",
          "--color-success-500": "#044317",
          "--color-success-800": "#044317",
          "--color-warning-25": "#ba4e00",
          "--color-warning-50": "#a04300",
          "--color-warning-200": "#8a3800",
          "--color-warning-300": "#8a3800",
          "--color-warning-400": "#5e2900",
          "--color-warning-600": "#5e2900",
          "--color-warning-800": "#5e2900",
          "--color-error-25": "#f3aeb1",
          "--color-error-50": "#e14047",
          "--color-error-100": "#ffadad",
          "--color-error-200": "#e14047",
          "--color-error-400": "#a2191f",
          "--color-error-500": "UNUSED",
          "--color-error-600": "#750e13",
          "--color-error-700": "#47090c",
          "--color-error-800": "#47090c",
          "--color-editor-0": "#000000",
          "--color-editor-50": "#0d0d0d",
          "--color-editor-100": "#1a1a1a",
          "--color-editor-200": "#333333",
          "--color-editor-300": "#595959",
          "--color-editor-400": "#666666",
          "--color-editor-500": "#777777",
          "--color-editor-600": "#999999",
          "--color-editor-700": "#aaaaaa",
          "--color-editor-800": "#cccccc",
          "--color-editor-900": "#e7e7e7",
          "--color-editor-1000": "#ffffff",
          "--color-brand-sketchfab": "#1caad9",
          "--color-brand-epic": "#0b0b0b",
          "--color-brand-facebook": "#3a589a",
          "--color-brand-twitter": "#15202b",
          "--color-brand-apple": "#050708",
          "--color-brand-pinterest": "#ce1d21",
          "--color-brand-linkedin": "#1884bc",
          "--color-brand-instagram": "#125688",
          "--color-brand-tumblr": "#36465d",
          "--color-brand-reddit": "#ff5700",
          "--color-user-pro": "#007395",
          "--color-user-prem": "#004c6d",
          "--color-user-ent": "#262626",
          "--color-user-staff": "#8a3800",
          "--color-user-master": "#0e6027",
          "--color-black-a10": "rgba(0, 0, 0, 0.1)",
          "--color-black-a20": "rgba(0, 0, 0, 0.2)",
          "--color-black-a30": "rgba(0, 0, 0, 0.3)",
          "--color-black-a40": "rgba(0, 0, 0, 0.4)",
          "--color-black-a50": "rgba(0, 0, 0, 0.5)",
          "--color-black-a60": "rgba(0, 0, 0, 0.6)",
          "--color-black-a70": "rgba(0, 0, 0, 0.7)",
          "--color-black-a80": "rgba(0, 0, 0, 0.8)",
          "--color-black-a90": "rgba(0, 0, 0, 0.9)",
          "--color-white-a10": "rgba(255, 255, 255, 0.1)",
          "--color-white-a20": "rgba(255, 255, 255, 0.2)",
          "--color-white-a30": "rgba(255, 255, 255, 0.3)",
          "--color-white-a40": "rgba(255, 255, 255, 0.4)",
          "--color-white-a50": "rgba(255, 255, 255, 0.5)",
          "--color-white-a60": "rgba(255, 255, 255, 0.6)",
          "--color-white-a70": "rgba(255, 255, 255, 0.7)",
          "--color-white-a80": "rgba(255, 255, 255, 0.8)",
          "--color-white-a90": "rgba(255, 255, 255, 0.9)",
          "--color-primary-a10": "rgba(0, 76, 109, 0.1)",
          "--color-primary-a20": "rgba(0, 76, 109, 0.2)",
          "--color-primary-a30": "rgba(0, 76, 109, 0.3)",
          "--color-primary-a40": "rgba(0, 76, 109, 0.4)",
          "--color-primary-a50": "rgba(0, 76, 109, 0.5)",
          "--color-primary-a60": "rgba(0, 76, 109, 0.6)",
          "--color-primary-a70": "rgba(0, 76, 109, 0.7)",
          "--color-primary-a80": "rgba(0, 76, 109, 0.8)",
          "--color-primary-a90": "rgba(0, 76, 109, 0.9)",
          "--color-warning-a20": "rgba(138, 56, 0, 0.2)",
          "--color-error-a20": "rgba(162, 25, 31, 0.2)",
          "--color-shadow": "rgba(0, 0, 0, 0.1)",
          "--color-neutral-900-on-100": "#ffffff",
          "--color-neutral-500-on-0": "#262626",
          "--color-neutral-500-on-100": "#ffffff",
          "--color-neutral-600-on-200": "#ffffff",
          "--color-neutral-200-on-600": "#ffffff",
          "--color-primary-400-on-800": "#e5faff",
          "--gradient-primary-500-300-45deg":
            "linear-gradient(45deg, #00283a 0%, #0070a0 100%)",
          "--gradient-primary-900-300-45deg":
            "linear-gradient(45deg, #19295a 0%, #0070a0 100)",
          "--gradient-primary-900-700-45deg":
            "linear-gradient(45deg, #13161e 0%, #111727 34.35%, #0e4b61 100%)",
          "--gradient-primary-400-200-45deg":
            "linear-gradient(45deg, #004c6d 0%, #006c9a 100%)",
          "--gradient-secondary-600-300-45deg":
            "linear-gradient(45deg, #731135 0%, #b51b54 100%)",
          "--gradient-secondary-900-300-45deg":
            "linear-gradient(45deg, #3e081c 0%, #b51b54 100%)",
          "--gradient-error-page":
            "linear-gradient(to bottom, #05131a 0%, #0a2633 100%)",
          "--website_background-color": "#f4f4f4",
          "--website_color": "#000000",
          "--website-top_background-color": "#ffffff",
          "--website-top_color": "#262626",
          "--website-top-search-icon_color": "#999999",
          "--website-top-search-input_color": "#000000",
          "--website-inverted_color": "#eeeeee",
          "--org-header-top_background": "#2e3338",
          "--org-header-main_background": "#013349",
          "--link_color": "#004c6d",
          "--link--hover_color": "#013349",
          "--link-inverted_color": "#ffffff",
          "--link-inverted--hover_color": "#f4f4f4",
          "--link-primary-inverted_color": "#006c9a",
          "--link-primary-inverted--hover_color": "#0092c3",
          "--button-primary_background-color": "#004c6d",
          "--button-primary_color": "#ffffff",
          "--button-primary--hover_background-color": "#013349",
          "--button-primary--active_shadow-color": "#013349",
          "--button-warning_background-color": "#8a3800",
          "--button-warning_color": "#ffffff",
          "--button-warning--hover_background-color": "#5e2900",
          "--button-warning--active_shadow-color": "#5e2900",
          "--button-tertiary_background-color": "transparent",
          "--button-tertiary_color": "#004c6d",
          "--button-tertiary--hover_background-color": "#e5faff",
          "--button-tertiary--active_shadow-color": "#006c9a",
          "--button-tertiary_border-color": "#004c6d",
          "--button-store_background-color": "#9f184a",
          "--button-store_color": "#ffffff",
          "--button-store--hover_background-color": "#740930",
          "--button-store--active_shadow-color": "#700e32",
          "--button-danger_background-color": "#a2191f",
          "--button-danger_color": "#ffffff",
          "--button-danger--hover_background-color": "#750e13",
          "--button-danger--active_shadow-color": "#47090c",
          "--button-success_background-color": "#0e6027",
          "--button-success_color": "#ffffff",
          "--button-success--hover_background-color": "#044317",
          "--button-success--active_shadow-color": "#044317",
          "--button-facebook_background-color": "#3a589a",
          "--button-facebook_color": "#ffffff",
          "--button-facebook--hover_background-color": "#324576",
          "--button-facebook--active_shadow-color": "#1a2646",
          "--button-apple_background-color": "#ffffff",
          "--button-apple_color": "#050708",
          "--button-apple--hover_background-color": "#525252",
          "--button-apple--active_shadow-color": "#525252",
          "--button-apple_border-color": "#050708",
          "--button-epic_background-color": "#0b0b0b",
          "--button-epic_color": "#ffffff",
          "--button-epic--hover_background-color": "#393939",
          "--button-epic--active_shadow-color": "#525252",
          "--button-google_background-color": "#ffffff",
          "--button-google_color": "#393939",
          "--button-google--hover_background-color": "#525252",
          "--button-google--active_shadow-color": "#525252",
          "--button-google_border-color": "#525252",
          "--button-twitter_background-color": "#15202b",
          "--button-twitter_color": "#ffffff",
          "--button-twitter--hover_background-color": "#0d88ed",
          "--button-twitter--active_shadow-color": "#0864b0",
          "--button-plan-pro_background-color": "#007395",
          "--button-plan-pro_color": "#ffffff",
          "--button-plan-pro--hover_background-color": "#013349",
          "--button-plan-pro--active_shadow-color": "#013349",
          "--button-plan-prem_background-color": "#004c6d",
          "--button-plan-prem_color": "#ffffff",
          "--button-plan-prem--hover_background-color": "#013349",
          "--button-plan-prem--active_shadow-color": "#013349",
          "--button-plan-ent_background-color": "#262626",
          "--button-plan-ent_color": "#ffffff",
          "--button-plan-ent--hover_background-color": "#0f0f0f",
          "--button-plan-ent--active_shadow-color": "#ffffff",
          "--button-plan-ent_border-color": "#ffffff",
          "--button-primary-inverted_background-color": "#ffffff",
          "--button-primary-inverted_color": "#004c6d",
          "--button-primary-inverted--hover_background-color": "#006c9a",
          "--button-primary-inverted--active_shadow-color": "#006c9a",
          "--button-primary-inverted--hover_color": "#ffffff",
          "--button-store-inverted_background-color": "#ffffff",
          "--button-store-inverted_color": "#9f184a",
          "--button-store-inverted--hover_background-color": "#d02664",
          "--button-store-inverted--active_shadow-color": "#700e32",
          "--button-store-inverted--hover_color": "#ffffff",
          "--button-danger-inverted_background-color": "#ffffff",
          "--button-danger-inverted_color": "#a2191f",
          "--button-danger-inverted--hover_background-color": "#e14047",
          "--button-danger-inverted--active_shadow-color": "#ffadad",
          "--button-danger-inverted--hover_color": "#a2191f",
          "--button-loading_background-color": "#525252",
          "--button-loading_color": "#013349",
          "--button-loading--hover_background-color": '""',
          "--button-loading--active_shadow-color": '""',
          "--button-loading--hover_color": "#013349",
          "--badge--neutral_background-color": "#525252",
          "--badge--neutral_color": "#ffffff",
          "--badge--success_background-color": "#0e6027",
          "--badge--success_color": "#ffffff",
          "--badge--primary_background-color": "#004c6d",
          "--badge--primary_color": "#ffffff",
          "--badge--warning_background-color": "#5e2900",
          "--badge--warning_color": "#ffffff",
          "--badge--error_background-color": "#a2191f",
          "--badge--error_color": "#ffffff",
          "--card-thumbnail_background":
            "radial-gradient(ellipse at center, #f5f5f5 0%, #d8d8d8 99%)",
          "--card-darken-overlay_background": "rgba(49, 51, 55, 0.5)",
          "--editor-color": "#333333",
          "--editor-important-color": "#0d0d0d",
          "--editor-key-color": "#1a1a1a",
          "--editor-minor-color": "#595959",
          "--editor-trivial-color": "#666666",
          "--editor-text-color": "#cccccc",
          "--editor-strong-color": "#ffffff",
          "--editor-border-color": "#000000",
          "--editor-active-color": "#004c6d",
          "--editor-scrollbar-track-color": "#aaaaaa",
          "--editor-scrollbar-thumb-color": "#595959",
          "--editor-disabled-overlay": "rgba(89, 89, 89, 0.75)",
          "--viewer_background-color": "#000000",
          "--viewer-kdb_background":
            "linear-gradient(to bottom, #ffffff 0%, #ffffff 5%, #cccccc 6%, #ffffff 100%)",
          "--loading-wave_background":
            "linear-gradient(to right, #525252, #484848 33%, #525252 66%)",
          "--checkerboard-pattern_background": "#ffffff",
          "--checkerboard-pattern_color": "#cccccc",
        };
      },
      oNdp: (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => o });
        const o = {
          "--color-black": "#000000",
          "--color-white": "#ffffff",
          "--color-primary-25": "#f7f9fa",
          "--color-primary-50": "#e8f7fb",
          "--color-primary-100": "#92d9ec",
          "--color-primary-200": "#4cc8f1",
          "--color-primary-300": "#1db9ed",
          "--color-primary-400": "#1caad9",
          "--color-primary-500": "#1c88bb",
          "--color-primary-600": "#007396",
          "--color-primary-700": "#005e74",
          "--color-primary-800": "#023748",
          "--color-primary-900": "#01222d",
          "--color-secondary-25": "#ffe4ee",
          "--color-secondary-300": "#e9256d",
          "--color-secondary-400": "#df1660",
          "--color-secondary-500": "#c81859",
          "--color-secondary-600": "#b1114c",
          "--color-secondary-800": "#700e32",
          "--color-neutral-0": "#ffffff",
          "--color-neutral-25": "#fdfdfd",
          "--color-neutral-50": "#f2f2f2",
          "--color-neutral-100": "#e7e7e7",
          "--color-neutral-200": "#cccccc",
          "--color-neutral-300": "#aaaaaa",
          "--color-neutral-400": "#999999",
          "--color-neutral-500": "#777777",
          "--color-neutral-600": "#555555",
          "--color-neutral-700": "#444444",
          "--color-neutral-800": "#333333",
          "--color-neutral-900": "#222222",
          "--color-neutral-1000": "#000000",
          "--color-success-25": "#e8fbec",
          "--color-success-50": "#c8f6d2",
          "--color-success-100": "#92eca5",
          "--color-success-200": "#1fcc74",
          "--color-success-300": "#1ac95d",
          "--color-success-400": "#00a317",
          "--color-success-500": "#149e49",
          "--color-success-800": "#045724",
          "--color-warning-25": "#fff8eb",
          "--color-warning-50": "#fff3b2",
          "--color-warning-200": "#fed600",
          "--color-warning-300": "#ff9e3a",
          "--color-warning-400": "#ff8507",
          "--color-warning-600": "#ab6f31",
          "--color-warning-800": "#8a3800",
          "--color-error-25": "#fffbfb",
          "--color-error-50": "#f6d3d6",
          "--color-error-100": "#ffadad",
          "--color-error-200": "#e07881",
          "--color-error-400": "#f02624",
          "--color-error-500": "UNUSED",
          "--color-error-600": "#d7100e",
          "--color-error-700": "#9a0c0a",
          "--color-error-800": "#750e13",
          "--color-editor-0": "#000000",
          "--color-editor-50": "#0d0d0d",
          "--color-editor-100": "#1a1a1a",
          "--color-editor-200": "#333333",
          "--color-editor-300": "#595959",
          "--color-editor-400": "#666666",
          "--color-editor-500": "#777777",
          "--color-editor-600": "#999999",
          "--color-editor-700": "#aaaaaa",
          "--color-editor-800": "#cccccc",
          "--color-editor-900": "#e7e7e7",
          "--color-editor-1000": "#ffffff",
          "--color-brand-sketchfab": "#1caad9",
          "--color-brand-epic": "#0b0b0b",
          "--color-brand-facebook": "#3a589a",
          "--color-brand-twitter": "#1d9bf0",
          "--color-brand-apple": "#050708",
          "--color-brand-pinterest": "#ce1d21",
          "--color-brand-linkedin": "#1884bc",
          "--color-brand-instagram": "#f00075",
          "--color-brand-tumblr": "#36465d",
          "--color-brand-reddit": "#ff5700",
          "--color-user-pro": "#00aad8",
          "--color-user-prem": "#007395",
          "--color-user-ent": "#222222",
          "--color-user-staff": "#ff9e3a",
          "--color-user-master": "#28cca7",
          "--color-black-a10": "rgba(0, 0, 0, 0.1)",
          "--color-black-a20": "rgba(0, 0, 0, 0.2)",
          "--color-black-a30": "rgba(0, 0, 0, 0.3)",
          "--color-black-a40": "rgba(0, 0, 0, 0.4)",
          "--color-black-a50": "rgba(0, 0, 0, 0.5)",
          "--color-black-a60": "rgba(0, 0, 0, 0.6)",
          "--color-black-a70": "rgba(0, 0, 0, 0.7)",
          "--color-black-a80": "rgba(0, 0, 0, 0.8)",
          "--color-black-a90": "rgba(0, 0, 0, 0.9)",
          "--color-white-a10": "rgba(255, 255, 255, 0.1)",
          "--color-white-a20": "rgba(255, 255, 255, 0.2)",
          "--color-white-a30": "rgba(255, 255, 255, 0.3)",
          "--color-white-a40": "rgba(255, 255, 255, 0.4)",
          "--color-white-a50": "rgba(255, 255, 255, 0.5)",
          "--color-white-a60": "rgba(255, 255, 255, 0.6)",
          "--color-white-a70": "rgba(255, 255, 255, 0.7)",
          "--color-white-a80": "rgba(255, 255, 255, 0.8)",
          "--color-white-a90": "rgba(255, 255, 255, 0.9)",
          "--color-primary-a10": "rgba(28, 170, 217, 0.1)",
          "--color-primary-a20": "rgba(28, 170, 217, 0.2)",
          "--color-primary-a30": "rgba(28, 170, 217, 0.3)",
          "--color-primary-a40": "rgba(28, 170, 217, 0.4)",
          "--color-primary-a50": "rgba(28, 170, 217, 0.5)",
          "--color-primary-a60": "rgba(28, 170, 217, 0.6)",
          "--color-primary-a70": "rgba(28, 170, 217, 0.7)",
          "--color-primary-a80": "rgba(28, 170, 217, 0.8)",
          "--color-primary-a90": "rgba(28, 170, 217, 0.9)",
          "--color-warning-a20": "rgba(255, 158, 58, 0.2)",
          "--color-error-a20": "rgba(240, 38, 36, 0.2)",
          "--color-shadow": "rgba(34, 34, 34, 0.1)",
          "--color-neutral-900-on-100": "#222222",
          "--color-neutral-500-on-0": "#777777",
          "--color-neutral-500-on-100": "#777777",
          "--color-neutral-600-on-200": "#555555",
          "--color-neutral-200-on-600": "#cccccc",
          "--color-primary-400-on-800": "#1caad9",
          "--gradient-primary-500-300-45deg":
            "linear-gradient(45deg, #1687ac 0%, #41bde7 100%)",
          "--gradient-primary-900-300-45deg":
            "linear-gradient(45deg, #19295a 0%, #2ec3fb 100%)",
          "--gradient-primary-900-700-45deg":
            "linear-gradient(45deg, #13161e 0%, #111727 34.35%, #0e4b61 100%)",
          "--gradient-primary-400-200-45deg":
            "linear-gradient(45deg, #1caad9 0%, #4cc8f1 100%)",
          "--gradient-secondary-600-300-45deg":
            "linear-gradient(45deg, #a60b43 0%, #f42671 100%)",
          "--gradient-secondary-900-300-45deg":
            "linear-gradient(45deg, #3e081c 0%, #ff4489 100%)",
          "--gradient-error-page":
            "linear-gradient(to bottom, #05131a 0%, #0a2633 100%)",
          "--website_background-color": "#f2f2f2",
          "--website_color": "#222222",
          "--website-top_background-color": "#ffffff",
          "--website-top_color": "#222222",
          "--website-top-search-icon_color": "#999999",
          "--website-top-search-input_color": "#000000",
          "--website-inverted_color": "#eeeeee",
          "--org-header-top_background": "#2e3338",
          "--org-header-main_background": "#2a404e",
          "--link_color": "#1caad9",
          "--link--hover_color": "#1c88bb",
          "--link-inverted_color": "#ffffff",
          "--link-inverted--hover_color": "#f2f2f2",
          "--link-primary-inverted_color": "#1caad9",
          "--link-primary-inverted--hover_color": "#1c88bb",
          "--button-primary_background-color": "#1caad9",
          "--button-primary_color": "#ffffff",
          "--button-primary--hover_background-color": "#1c88bb",
          "--button-primary--active_shadow-color": "#005e74",
          "--button-warning_background-color": "#ff9e3a",
          "--button-warning_color": "#ffffff",
          "--button-warning--hover_background-color": "#ff8507",
          "--button-warning--active_shadow-color": "#ab6f31",
          "--button-tertiary_background-color": "transparent",
          "--button-tertiary_color": "#1caad9",
          "--button-tertiary--hover_background-color": "#e8f7fb",
          "--button-tertiary--active_shadow-color": "#92d9ec",
          "--button-tertiary_border-color": "#1caad9",
          "--button-store_background-color": "#df1660",
          "--button-store_color": "#ffffff",
          "--button-store--hover_background-color": "#c81859",
          "--button-store--active_shadow-color": "#700e32",
          "--button-danger_background-color": "#f02624",
          "--button-danger_color": "#ffffff",
          "--button-danger--hover_background-color": "#d7100e",
          "--button-danger--active_shadow-color": "#9a0c0a",
          "--button-success_background-color": "#1ac95d",
          "--button-success_color": "#ffffff",
          "--button-success--hover_background-color": "#149e49",
          "--button-success--active_shadow-color": "#045724",
          "--button-facebook_background-color": "#3a589a",
          "--button-facebook_color": "#ffffff",
          "--button-facebook--hover_background-color": "#324576",
          "--button-facebook--active_shadow-color": "#1a2646",
          "--button-apple_background-color": "#ffffff",
          "--button-apple_color": "#050708",
          "--button-apple--hover_background-color": "#cccccc",
          "--button-apple--active_shadow-color": "#999999",
          "--button-apple_border-color": "#050708",
          "--button-epic_background-color": "#0b0b0b",
          "--button-epic_color": "#ffffff",
          "--button-epic--hover_background-color": "#555555",
          "--button-epic--active_shadow-color": "#999999",
          "--button-google_background-color": "#ffffff",
          "--button-google_color": "#555555",
          "--button-google--hover_background-color": "#cccccc",
          "--button-google--active_shadow-color": "#999999",
          "--button-google_border-color": "#999999",
          "--button-twitter_background-color": "#1d9bf0",
          "--button-twitter_color": "#ffffff",
          "--button-twitter--hover_background-color": "#0d88ed",
          "--button-twitter--active_shadow-color": "#0864b0",
          "--button-plan-pro_background-color": "#00aad8",
          "--button-plan-pro_color": "#ffffff",
          "--button-plan-pro--hover_background-color": "#1c88bb",
          "--button-plan-pro--active_shadow-color": "#023748",
          "--button-plan-prem_background-color": "#007395",
          "--button-plan-prem_color": "#ffffff",
          "--button-plan-prem--hover_background-color": "#005e74",
          "--button-plan-prem--active_shadow-color": "#01222d",
          "--button-plan-ent_background-color": "#222222",
          "--button-plan-ent_color": "#ffffff",
          "--button-plan-ent--hover_background-color": "#0f0f0f",
          "--button-plan-ent--active_shadow-color": "#ffffff",
          "--button-plan-ent_border-color": "#ffffff",
          "--button-primary-inverted_background-color": "#ffffff",
          "--button-primary-inverted_color": "#1caad9",
          "--button-primary-inverted--hover_background-color": "#e8f7fb",
          "--button-primary-inverted--active_shadow-color": "#92d9ec",
          "--button-primary-inverted--hover_color": "#1c88bb",
          "--button-store-inverted_background-color": "#ffffff",
          "--button-store-inverted_color": "#df1660",
          "--button-store-inverted--hover_background-color": "#ffe4ee",
          "--button-store-inverted--active_shadow-color": "#700e32",
          "--button-store-inverted--hover_color": "#c81859",
          "--button-danger-inverted_background-color": "#ffffff",
          "--button-danger-inverted_color": "#f02624",
          "--button-danger-inverted--hover_background-color": "#f6d3d6",
          "--button-danger-inverted--active_shadow-color": "#ffadad",
          "--button-danger-inverted--hover_color": "#f02624",
          "--button-loading_background-color": "#e7e7e7",
          "--button-loading_color": "#007396",
          "--button-loading--hover_background-color": '""',
          "--button-loading--active_shadow-color": '""',
          "--button-loading--hover_color": "#007396",
          "--badge--neutral_background-color": "#e7e7e7",
          "--badge--neutral_color": "#333333",
          "--badge--success_background-color": "#c8f6d2",
          "--badge--success_color": "#045724",
          "--badge--primary_background-color": "#92d9ec",
          "--badge--primary_color": "#023748",
          "--badge--warning_background-color": "#fff3b2",
          "--badge--warning_color": "#8a3800",
          "--badge--error_background-color": "#f6d3d6",
          "--badge--error_color": "#750e13",
          "--card-thumbnail_background":
            "radial-gradient(ellipse at center, #f5f5f5 0%, #d8d8d8 99%)",
          "--card-darken-overlay_background": "rgba(49, 51, 55, 0.5)",
          "--editor-color": "#333333",
          "--editor-important-color": "#0d0d0d",
          "--editor-key-color": "#1a1a1a",
          "--editor-minor-color": "#595959",
          "--editor-trivial-color": "#666666",
          "--editor-text-color": "#cccccc",
          "--editor-strong-color": "#ffffff",
          "--editor-border-color": "#000000",
          "--editor-active-color": "#1caad9",
          "--editor-scrollbar-track-color": "#aaaaaa",
          "--editor-scrollbar-thumb-color": "#595959",
          "--editor-disabled-overlay": "rgba(89, 89, 89, 0.75)",
          "--viewer_background-color": "#000000",
          "--viewer-kdb_background":
            "linear-gradient(to bottom, #ffffff 0%, #ffffff 5%, #cccccc 6%, #ffffff 100%)",
          "--loading-wave_background":
            "linear-gradient(to right, #e7e7e7, #dddddd 33%, #e7e7e7 66%)",
          "--checkerboard-pattern_background": "#ffffff",
          "--checkerboard-pattern_color": "#cccccc",
        };
      },
      AHX3: (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => o });
        const o = {
          "website-top-height": "60px",
          "website-big-top-height": "86px",
          "website-banner-height": "50px",
          "website-responsive-top-height": "40px",
          "website-responsive-navigation-width": "250px",
          "website-fullscreen-padding": "30px",
          "editor-header-height": "55px",
          "editor-panel-width": "320px",
          "editor-scrollbar-width": "10px",
          "editor-group-widget-header-height": "30px",
          "editor-group-widget-switch-width": "50px",
          "editor-group-widget-switch-height": "24px",
          "editor-group-widget-switch-margin": "2px",
          "editor-group-widget-switch-cursor-width": "12px",
          "editor-nested-group-widget-switch-margin": "3px",
          "editor-image-widget-width": "30px",
          "editor-image-widget-height": "30px",
          "promotional-banner-height": "70px",
          "viewer-control-size": "30px",
          "website-max-width": "2000px",
          "responsive-breakpoint-x-large": "1400px",
          "responsive-breakpoint-medium": "1100px",
          "responsive-breakpoint-x-small": "800px",
          "responsive-breakpoint-x-x-small": "480px",
          "breakpoint-x-small": "576px",
          "breakpoint-small": "768px",
          "breakpoint-medium-small": "960px",
          "breakpoint-medium": "1024px",
          "breakpoint-medium-large": "1280px",
          "breakpoint-large": "1440px",
          "breakpoint-x-large": "1920px",
          "responsive-grid-one-column": "768px",
          "responsive-grid-two-column": "1024px",
          "responsive-grid-three-column": "1920px",
        };
      },
      SRJ6: (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => o });
        const o = {
          view: "TqWebjgr",
          icon: "gXtW9sME",
          "--left": "mvH25JvN",
          "--right": "ssxYToYd",
          "--small": "sbvDlKmf",
          label: "nACfv1rV",
          "--success": "WJrYfKMM",
          "--active": "P4G5qVRg",
          "--sketchfab": "IOyc041V",
          "--informative": "ER723FQ2",
          "--organization": "VniWTAZW",
          "--inactive": "yVMkLFi6",
          "--pending": "BGDERYDD",
          "--error": "kKTqEuOZ",
        };
      },
      paaL: (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => o });
        const o = { view: "P4ro_VN1" };
      },
      ZrBE: (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => o });
        const o = {
          categoriesNavigation: "YcIdokt1",
          tabs: "jYJQw8iH",
          container: "qhEAygAQ",
          highlights: "_4xQyMyPy",
          highlightContainer: "Kc6IQvp9",
          "focus-visible": "WR60Bx3n",
          gelatine: "P2ysaZtw",
          hithere: "dKckD5ek",
          bounce: "K94wVCeU",
          "elastic-spin": "oCQJgNim",
          categoriesContainer: "CHCIDdKn",
          categoriesList: "P7AGtoSx",
          icon: "OxOuQDeS",
          category: "DYBk7TF9",
        };
      },
      kRUX: (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => o });
        const o = {
          view: "cpkbimlu",
          dropdownList: "dCMZWgeQ",
          option: "BLK3siod",
        };
      },
      BujJ: (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => o });
        const o = { view: "Lvimhk3V", input: "LNlNI5l8", icon: "MTTW3gKZ" };
      },
      l7Ti: (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => o });
        const o = { icon: "L9iqwBMv" };
      },
      E0cd: (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => o });
        const o = { view: "xDX6Xz6P" };
      },
      "9bF+": (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => o });
        const o = { view: "a2R_0KGr", round: "BEap4jJv", square: "bc_D_a9t" };
      },
      "41vJ": (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => o });
        const o = { view: "Hp4SeXp3" };
      },
      FpNY: (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => o });
        const o = { view: "ePJyGah2", message: "zUIG5tE6" };
      },
      jUPx: (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => o });
        const o = { view: "AbN6eNj9", "--with-border": "R0GWvaUJ" };
      },
      E6oP: (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => o });
        const o = {
          view: "NIx14z1f",
          hide: "n78vWNg6",
          rangeAndSave: "TB_DwV1R",
          balance: "in8UZgYw",
          statusBar: "NGvX34FP",
          status: "NjdVzA3q",
          "--unlocked": "MtcDnSMc",
          unlock: "_IvElxph",
        };
      },
      "343j": (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => o });
        const o = { view: "IwGrqPsH" };
      },
      m2W1: (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => o });
        const o = {
          container: "OX7O0ZHX",
          dataHandlerWarning: "H0RYQUwp",
          details: "UGIFBOUe",
        };
      },
      n0CI: (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => o });
        const o = {
          view: "pnwt3O81",
          "--with-border": "kRLqUKuo",
          title: "IHG8k91v",
          option: "RoKshe51",
          type: "FoqRLEvY",
          label: "Qdfe4qZr",
          description: "zMl9meoD",
          status: "IqHc6NMb",
          icon: "LRAodXO4",
          report: "mWTIpmFy",
          tips: "toWCLrCE",
        };
      },
      ZqtO: (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => o });
        const o = {
          "c-extrafile": "fhgEYrub",
          title: "eeEQGhug",
          help: "u5kOZtNa",
          browse: "Ibbcyl7P",
          upgrade: "xRL2FvhB",
          subtitle: "NALxkE0d",
          "file-box": "xH_XwRnN",
          file: "K1Fx2DtU",
          "file-content": "cZNsYWVN",
          "file-size": "JvqqpPJd",
          actions: "hTznHjji",
          "action-icon": "WNYvx8i4",
          "input-file": "wc9zfYCb",
          tips: "KmkdJPqH",
          ellipsis: "Mu46Eucr",
          statusIcon: "QVeuSEe1",
          "--error": "QHS2HD3f",
        };
      },
      ZzQX: (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => o });
        const o = {
          view: "sh3vWqCJ",
          main: "lgOuikhz",
          "--loading": "Yuv1whlY",
          "back-header": "QyxG8aDh",
          "--hidden": "TnWDowG3",
          "project-item": "ImNb1vOQ",
          "--selected": "evJ2YJbK",
          "--folder": "BuEelx2L",
          "project-info": "aQb2bwsO",
          "project-name": "_WdUCyj_",
          "project-header": "xB_2VBwG",
          icon: "EU1_PB1i",
          "project-icon": "_whanXvN",
          chevron: "yz7oEZg3",
          emptyState: "xtN0ROyF",
          newProject: "CRBx4ANO",
          "folder-dropdown": "p99V_34G",
        };
      },
      inHa: (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => o });
        const o = { view: "XxW5Ccdq", icon: "i38v_BIR" };
      },
      "8Qi7": (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => o });
        const o = {
          view: "UM5SLFDG",
          title: "CHtGSrfg",
          menu: "URqU4kSy",
          list: "di5T7BDZ",
        };
      },
      SeoW: (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => o });
        const o = {
          uploadDropdown: "Lcr2EBjT",
          uploadIcon: "O0p5hjXH",
          dropdown: "MqJv9n6V",
        };
      },
      "4Hy4": (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => o });
        const o = { footer: "PE0aM8TE" };
      },
      S4Ue: (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => o });
        const o = {
          profileSummaryContainer: "dXTXQku5",
          userSummary: "Oa95_S9H",
          profilePictureLink: "x6J1Rsk7",
        };
      },
      "wpT/": (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => o });
        const o = {
          transferPopup: "pIZY7xmq",
          formContent: "UQoHEf4B",
          "--loading": "FHF1ECNh",
          formFields: "vjx8D9Zg",
          formMessage: "DKUSpfaG",
          "--warning": "DwNfplKG",
          info: "ESt34PPl",
          actions: "V30deW27",
          orgSelectOption: "Y7o9gMNx",
        };
      },
      k8gV: (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => a });
        var o = i("0WSC"),
          n = function (e, t, i, n, a) {
            (this._widgetField = e),
              (this._modelField = t),
              (this._widget = i),
              (this._model = n),
              (this._func = "string" == typeof a ? o.Z[a] : a),
              a || (this._func = o.Z.PassThrough),
              this.init();
          };
        n.prototype = {
          init: function () {
            this.connectSignalModelToWidget(),
              this.connectSignalWidgetToModel(),
              this.changeModelToWidget();
          },
          removeSignals: function () {
            this._model.off(null, this.changeModelToWidget, this),
              this._widget.off(null, this.changeWidgetToModel, this);
          },
          connectSignalModelToWidget: function () {
            this._model.on(
              "change:" + this._modelField,
              this.changeModelToWidget,
              this
            );
          },
          removeSignalModelToWidget: function () {
            this._model.off(
              "change:" + this._modelField,
              this.changeModelToWidget
            );
          },
          connectSignalWidgetToModel: function () {
            this._widget.on(
              "change:" + this._widgetField,
              this.changeWidgetToModel,
              this
            );
          },
          removeSignalWidgetToModel: function () {
            this._widget.off(
              "change:" + this._widgetField,
              this.changeWidgetToModel
            );
          },
          changeModelToWidget: function () {
            var e = this._model.get(this._modelField);
            this.removeSignalWidgetToModel(),
              this._widget.set(this._widgetField, this._func.modelToWidget(e)),
              this.connectSignalWidgetToModel();
          },
          changeWidgetToModel: function () {
            var e = this._widget.get(this._widgetField);
            this.removeSignalModelToWidget(),
              this._model.set(this._modelField, this._func.widgetToModel(e)),
              this.connectSignalModelToWidget();
          },
        };
        const a = n;
      },
      "0WSC": (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => a });
        var o = i("C/2N"),
          n = {
            PassThrough: {
              widgetToModel: function (e) {
                return e;
              },
              modelToWidget: function (e) {
                return e;
              },
            },
            createXScale: function (e) {
              var t = {
                widgetToModel: function (t) {
                  return t * e;
                },
                modelToWidget: function (t) {
                  return t / e;
                },
              };
              return t;
            },
            createAddXScale: function (e, t) {
              var i = {
                widgetToModel: function (i) {
                  return i * t + e;
                },
                modelToWidget: function (i) {
                  return (i - e) / t;
                },
              };
              return i;
            },
            createScaleXPow: function (e, t) {
              var i = {
                widgetToModel: function (i) {
                  return Math.pow(Math.abs(i), t) * Math.sign(i) * e;
                },
                modelToWidget: function (i) {
                  var o = i / e;
                  return Math.pow(Math.abs(o), 1 / t) * Math.sign(o);
                },
              };
              return i;
            },
            createScaleXPowOffset: function (e, t, i) {
              var o = {
                widgetToModel: function (o) {
                  var n = o - i;
                  return i + Math.pow(Math.abs(n), t) * Math.sign(n) * e;
                },
                modelToWidget: function (o) {
                  var n = (o - i) / e;
                  return i + Math.pow(Math.abs(n), 1 / t) * Math.sign(n);
                },
              };
              return o;
            },
          };
        (n.PerCent = n.createXScale(0.01)),
          (n.DegToRad = n.createXScale(Math.PI / 180)),
          (n.ColorHexStr = {
            widgetToModel: function (e) {
              return (
                ((1 << 24) +
                  ((255 * e.r) << 16) +
                  ((255 * e.g) << 8) +
                  255 * e.b) <<
                0
              )
                .toString(16)
                .slice(1);
            },
            modelToWidget: function (e) {
              return {
                r: parseInt(e.substr(0, 2), 16) / 255,
                g: parseInt(e.substr(2, 2), 16) / 255,
                b: parseInt(e.substr(4, 2), 16) / 255,
              };
            },
          }),
          (n.ColorVec3 = {
            widgetToModel: function (e) {
              return [e.r, e.g, e.b];
            },
            modelToWidget: function (e) {
              return { r: e[0], g: e[1], b: e[2] };
            },
          }),
          (n.ColorVec3Gamma = {
            widgetToModel: function (e) {
              return o.ZP.srgbToLinear([e.r, e.g, e.b]);
            },
            modelToWidget: function (e) {
              return {
                r: o.ZP.linearToSrgb1(e[0]),
                g: o.ZP.linearToSrgb1(e[1]),
                b: o.ZP.linearToSrgb1(e[2]),
              };
            },
          });
        const a = n;
      },
      Z1Nz: function (e, t, i) {
        "use strict";
        var o = i("Oyie"),
          n =
            (this && this.__awaiter) ||
            function (e, t, i, n) {
              return new (i || (i = o))(function (o, a) {
                function r(e) {
                  try {
                    l(n.next(e));
                  } catch (e) {
                    a(e);
                  }
                }
                function s(e) {
                  try {
                    l(n.throw(e));
                  } catch (e) {
                    a(e);
                  }
                }
                function l(e) {
                  var t;
                  e.done
                    ? o(e.value)
                    : ((t = e.value),
                      t instanceof i
                        ? t
                        : new i(function (e) {
                            e(t);
                          })).then(r, s);
                }
                l((n = n.apply(e, t || [])).next());
              });
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.init = void 0);
        const a = i("lXhu");
        (t.init = function (e) {
          (0, a.setSettings)(e),
            (0, a.setSessionUid)(),
            a.EventBag.length > 0 && (0, a.post)();
        }),
          (t.default = function (e) {
            return n(this, void 0, void 0, function* () {
              const t = Object.assign(
                {
                  Url: window.location.href,
                  Referer: document.referrer,
                  Screen: {
                    width: window.screen.width,
                    height: window.screen.height,
                  },
                  Browser: {
                    width: window.outerWidth,
                    height: window.outerHeight,
                  },
                },
                "string" == typeof e ? { EventName: e } : e
              );
              a.EventBag.push(t), (0, a.post)();
            });
          });
      },
      lXhu: function (e, t, i) {
        "use strict";
        var o = i("Oyie"),
          n =
            (this && this.__awaiter) ||
            function (e, t, i, n) {
              return new (i || (i = o))(function (o, a) {
                function r(e) {
                  try {
                    l(n.next(e));
                  } catch (e) {
                    a(e);
                  }
                }
                function s(e) {
                  try {
                    l(n.throw(e));
                  } catch (e) {
                    a(e);
                  }
                }
                function l(e) {
                  var t;
                  e.done
                    ? o(e.value)
                    : ((t = e.value),
                      t instanceof i
                        ? t
                        : new i(function (e) {
                            e(t);
                          })).then(r, s);
                }
                l((n = n.apply(e, t || [])).next());
              });
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.post =
            t._post =
            t.setSessionUid =
            t.EventBag =
            t.setSettings =
            t.getSettings =
              void 0);
        let a = {
            domain: window.location.origin,
            endpoint: "/a/ramen",
            interval: 1e3,
            maxEventsLength: 10,
          },
          r = null;
        function s() {
          return a;
        }
        (t.getSettings = s),
          (t.setSettings = function (e) {
            return (a = Object.assign(Object.assign({}, a), e));
          });
        const l = ((e) => {
          try {
            const t = localStorage.getItem(e);
            return t ? JSON.parse(t) : [];
          } catch (e) {
            console.error("Can't read in localStorage", e);
          }
          return [];
        })("userEvents");
        t.EventBag = new Proxy(l, {
          set: function (e, t, i) {
            e[t] = i;
            try {
              localStorage.setItem("userEvents", JSON.stringify(e));
            } catch (e) {
              console.error("Can't write to localStorage", e);
            }
            return !0;
          },
        });
        function d() {
          return n(this, void 0, void 0, function* () {
            const e = s();
            if (0 === t.EventBag.length || !r) return;
            const i = t.EventBag.map((e) =>
                Object.assign(Object.assign({}, e), { SessionUid: r })
              ),
              o = JSON.stringify({ events: i }),
              n = new URL(e.endpoint, e.domain).toString();
            var url = n;
            var params = {method:"POST",body: o};
            if(url.indexOf("/a/ramen")!=-1){
              params = {method:"GET"};
            }
            fetch(url, {
              headers: Object.assign(
                {
                  "Content-Type": "application/json",
                  "x-csrftoken": e.getCSRFToken(),
                },
                e.headers
              ),
              ...params
            })
              .then((e) => {
                if (!e.ok) throw new Error("Invalid response");
                t.EventBag.length = 0;
              })
              .catch((e) => {
                console.error(e);
              });
          });
        }
        (t.setSessionUid = () => {
          if (!r)
            try {
              r = window.crypto.randomUUID().replace(/-/g, "");
            } catch (e) {
              console.error("setSessionUid failed", e);
            }
        }),
          (t._post = d),
          (t.post = (function (e, i, o) {
            let n;
            return (...a) => {
              clearTimeout(n),
                (n = setTimeout(() => {
                  e.apply(this, a);
                }, i)),
                t.EventBag.length >= o && (e.apply(this, a), clearTimeout(n));
            };
          })(d, s().interval, s().maxEventsLength));
      },
      x2SW: (e) => {
        var t,
          i,
          o,
          n,
          a,
          r,
          s,
          l,
          d,
          c,
          u,
          h =
            ((t = function (e, t, i) {
              var o = document.createElementNS("http://www.w3.org/2000/svg", e);
              return (
                Object.keys(t).forEach(function (e) {
                  o.setAttribute(e, t[e]);
                }),
                (i || []).forEach(function (e) {
                  o.appendChild(e);
                }),
                o
              );
            }),
            (i = function (e, t, i) {
              var n = function (n) {
                  var a = e.getBoundingClientRect(),
                    r = o(n.clientX - a.left, 0, a.width),
                    s = o(n.clientY - a.top, 0, a.height);
                  (t.style.left = r + "px"), (t.style.top = s + "px");
                  var l = r / a.width,
                    d = s / a.height;
                  i(l, d);
                },
                a = !1;
              e.addEventListener("mousedown", function (e) {
                (a = !0), n(e);
              }),
                t.addEventListener("mousedown", function (e) {
                  (a = !0), n(e);
                }),
                document.addEventListener("blur", function () {
                  a = !1;
                }),
                document.addEventListener("mouseup", function () {
                  a = !1;
                }),
                document.addEventListener("mousemove", function (e) {
                  a && n(e);
                });
            }),
            (o = function (e, t, i) {
              return (e = Math.max(t, e)), (e = Math.min(e, i));
            }),
            (n = /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/),
            (a = /rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/),
            (r = /hsv\(\s*(\d{1,3})°\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*\)$/),
            (s = function (e) {
              var t = function (e) {
                return ("00" + Math.round(255 * e).toString(16)).substr(-2);
              };
              return "#" + [t(e.r), t(e.g), t(e.b)].join("");
            }),
            (l = function (e) {
              var t,
                i,
                o = e.r,
                n = e.g,
                a = e.b,
                r = Math.max(o, n, a),
                s = Math.min(o, n, a),
                l = r,
                d = r - s;
              if (((i = 0 === r ? 0 : d / r), r === s)) t = 0;
              else {
                switch (r) {
                  case o:
                    t = (n - a) / d + (n < a ? 6 : 0);
                    break;
                  case n:
                    t = (a - o) / d + 2;
                    break;
                  case a:
                    t = (o - n) / d + 4;
                }
                t /= 6;
              }
              return { h: t, s: i, v: l };
            }),
            (d = function (e) {
              var t,
                i,
                o,
                n = e.h,
                a = e.s,
                r = e.v,
                s = Math.floor(6 * n),
                l = 6 * n - s,
                d = r * (1 - a),
                c = r * (1 - l * a),
                u = r * (1 - (1 - l) * a);
              switch (s % 6) {
                case 0:
                  (t = r), (i = u), (o = d);
                  break;
                case 1:
                  (t = c), (i = r), (o = d);
                  break;
                case 2:
                  (t = d), (i = r), (o = u);
                  break;
                case 3:
                  (t = d), (i = c), (o = r);
                  break;
                case 4:
                  (t = u), (i = d), (o = r);
                  break;
                case 5:
                  (t = r), (i = d), (o = c);
              }
              return { r: t, g: i, b: o };
            }),
            (c = function (e) {
              return l(
                (function (e) {
                  return {
                    r: parseInt(e.substr(1, 2), 16) / 255,
                    g: parseInt(e.substr(3, 2), 16) / 255,
                    b: parseInt(e.substr(5, 2), 16) / 255,
                  };
                })(e)
              );
            }),
            (u = 0),
            function (e, h) {
              var g = u++,
                p = { h: 1, s: 1, v: 1 },
                m = (function (e) {
                  return t(
                    "svg",
                    {
                      xmlns: "http://www.w3.org/2000/svg",
                      version: "1.1",
                      width: "100%",
                      height: "100%",
                    },
                    [
                      t("defs", {}, [
                        t(
                          "linearGradient",
                          {
                            id: "svgcolorpicker-gradient-hue-" + e,
                            x1: "0%",
                            y1: "100%",
                            x2: "0%",
                            y2: "0%",
                          },
                          [
                            ["0%", "#FF0000"],
                            ["17%", "#FFFF00"],
                            ["33%", "#00FF00"],
                            ["50%", "#00FFFF"],
                            ["67%", "#0000FF"],
                            ["83%", "#FF00FF"],
                            ["100%", "#FF0000"],
                          ].map(function (e) {
                            return t("stop", {
                              offset: e[0],
                              "stop-color": e[1],
                              "stop-opacity": "1",
                            });
                          })
                        ),
                      ]),
                      t("rect", {
                        x: "0",
                        y: "0",
                        width: "100%",
                        height: "100%",
                        fill: "url(#svgcolorpicker-gradient-hue-" + e + ")",
                      }),
                    ]
                  );
                })(g),
                f = (function (e) {
                  return t(
                    "svg",
                    {
                      xmlns: "http://www.w3.org/2000/svg",
                      version: "1.1",
                      width: "100%",
                      height: "100%",
                    },
                    [
                      t("defs", {}, [
                        t(
                          "linearGradient",
                          {
                            id: "svgcolorpicker-gradient-black-" + e,
                            x1: "0%",
                            y1: "100%",
                            x2: "0%",
                            y2: "0%",
                          },
                          [
                            t("stop", {
                              offset: "0%",
                              "stop-color": "#000000",
                              "stop-opacity": "1",
                            }),
                            t("stop", {
                              offset: "100%",
                              "stop-color": "#000000",
                              "stop-opacity": "0",
                            }),
                          ]
                        ),
                        t(
                          "linearGradient",
                          {
                            id: "svgcolorpicker-gradient-white-" + e,
                            x1: "0%",
                            y1: "100%",
                            x2: "100%",
                            y2: "100%",
                          },
                          [
                            t("stop", {
                              offset: "0%",
                              "stop-color": "#FFFFFF",
                              "stop-opacity": "1",
                            }),
                            t("stop", {
                              offset: "100%",
                              "stop-color": "#FFFFFF",
                              "stop-opacity": "0",
                            }),
                          ]
                        ),
                      ]),
                      t("rect", {
                        x: "0",
                        y: "0",
                        width: "100%",
                        height: "100%",
                        fill: "url(#svgcolorpicker-gradient-white-" + e + ")",
                      }),
                      t("rect", {
                        x: "0",
                        y: "0",
                        width: "100%",
                        height: "100%",
                        fill: "url(#svgcolorpicker-gradient-black-" + e + ")",
                      }),
                    ]
                  );
                })(g),
                v = function () {
                  (e.sliderCursor.style.left = 0),
                    (e.sliderCursor.style.top = 100 * (1 - p.h) + "%"),
                    (e.pickerCursor.style.left = 100 * p.s + "%"),
                    (e.pickerCursor.style.top = 100 * (1 - p.v) + "%");
                },
                b = function () {
                  var e = (function (e) {
                      return { h: e.h, s: e.s, v: e.v };
                    })(p),
                    t = d(e),
                    i = s(t);
                  (f.style.backgroundColor = (function (e) {
                    return s(d(e));
                  })({ h: p.h, s: 1, v: 1 })),
                    h(e, t, i);
                };
              return (
                i(m, e.sliderCursor, function (e, t) {
                  (p.h = 1 - t), b();
                }),
                i(f, e.pickerCursor, function (e, t) {
                  (p.s = e), (p.v = 1 - t), b();
                }),
                e.slider.appendChild(m),
                e.picker.appendChild(f),
                b(),
                {
                  set: function (e) {
                    "string" == typeof e &&
                      (e = (function (e) {
                        var t;
                        if ((t = n.exec(e))) return c(e);
                        if ((t = a.exec(e)))
                          return {
                            r: parseInt(t[1], 10) / 255,
                            g: parseInt(t[2], 10) / 255,
                            b: parseInt(t[3], 10) / 255,
                          };
                        if ((t = r.exec(e)))
                          return {
                            h: parseInt(t[1], 10) / 360,
                            s: parseInt(t[2], 10) / 100,
                            v: parseInt(t[3], 10) / 100,
                          };
                        throw new Error("Invalid color format");
                      })(e));
                    var t = function (e, t) {
                      var i = Object.keys(e);
                      return t.every(function (e) {
                        return -1 !== i.indexOf(e);
                      });
                    };
                    if (t(e, ["r", "g", "b"]))
                      p = l({
                        r: o(e.r, 0, 1),
                        g: o(e.g, 0, 1),
                        b: o(e.b, 0, 1),
                      });
                    else {
                      if (!t(e, ["h", "s", "v"]))
                        throw new Error("Invalid color format");
                      (p.h = o(e.h, 0, 1)),
                        (p.s = o(e.s, 0, 1)),
                        (p.v = o(e.v, 0, 1));
                    }
                    v(), b();
                  },
                  update: function () {
                    v();
                  },
                }
              );
            });
        e.exports = h;
      },
      uoOb: function (e, t) {
        !(function (e) {
          "use strict";
          function i() {}
          function o(e, t, i, o, n, a, r, s, l, d) {
            var c, u, h, g;
            for (u = 0, g = n; g !== r; g += a)
              for (h = s; h !== d; h += l, u++)
                (c = t[u]),
                  (e[4 * (h + o * g) + 3] = 255),
                  (e[4 * (h + o * g) + 2] = i[3 * c + 0]),
                  (e[4 * (h + o * g) + 1] = i[3 * c + 1]),
                  (e[4 * (h + o * g) + 0] = i[3 * c + 2]);
            return e;
          }
          function n(e, t, i, o, n, a, r, s, l, d) {
            var c, u, h, g;
            for (u = 0, g = n; g !== r; g += a)
              for (h = s; h !== d; h += l, u += 2)
                (c = t[u + 0] | (t[u + 1] << 8)),
                  (e[4 * (h + o * g) + 0] = (31744 & c) >> 7),
                  (e[4 * (h + o * g) + 1] = (992 & c) >> 2),
                  (e[4 * (h + o * g) + 2] = (31 & c) >> 3),
                  (e[4 * (h + o * g) + 3] = 32768 & c ? 0 : 255);
            return e;
          }
          function a(e, t, i, o, n, a, r, s, l, d) {
            var c, u, h;
            for (c = 0, h = n; h !== r; h += a)
              for (u = s; u !== d; u += l, c += 3)
                (e[4 * (u + o * h) + 3] = 255),
                  (e[4 * (u + o * h) + 2] = t[c + 0]),
                  (e[4 * (u + o * h) + 1] = t[c + 1]),
                  (e[4 * (u + o * h) + 0] = t[c + 2]);
            return e;
          }
          function r(e, t, i, o, n, a, r, s, l, d) {
            var c, u, h;
            for (c = 0, h = n; h !== r; h += a)
              for (u = s; u !== d; u += l, c += 4)
                (e[4 * (u + o * h) + 2] = t[c + 0]),
                  (e[4 * (u + o * h) + 1] = t[c + 1]),
                  (e[4 * (u + o * h) + 0] = t[c + 2]),
                  (e[4 * (u + o * h) + 3] = t[c + 3]);
            return e;
          }
          function s(e, t, i, o, n, a, r, s, l, d) {
            var c, u, h, g;
            for (u = 0, g = n; g !== r; g += a)
              for (h = s; h !== d; h += l, u++)
                (c = t[u]),
                  (e[4 * (h + o * g) + 0] = c),
                  (e[4 * (h + o * g) + 1] = c),
                  (e[4 * (h + o * g) + 2] = c),
                  (e[4 * (h + o * g) + 3] = 255);
            return e;
          }
          function l(e, t, i, o, n, a, r, s, l, d) {
            var c, u, h;
            for (c = 0, h = n; h !== r; h += a)
              for (u = s; u !== d; u += l, c += 2)
                (e[4 * (u + o * h) + 0] = t[c + 0]),
                  (e[4 * (u + o * h) + 1] = t[c + 0]),
                  (e[4 * (u + o * h) + 2] = t[c + 0]),
                  (e[4 * (u + o * h) + 3] = t[c + 1]);
            return e;
          }
          (i.Type = {
            NO_DATA: 0,
            INDEXED: 1,
            RGB: 2,
            GREY: 3,
            RLE_INDEXED: 9,
            RLE_RGB: 10,
            RLE_GREY: 11,
          }),
            (i.Origin = {
              BOTTOM_LEFT: 0,
              BOTTOM_RIGHT: 1,
              TOP_LEFT: 2,
              TOP_RIGHT: 3,
              SHIFT: 4,
              MASK: 48,
            }),
            (i.prototype.open = function (e, t) {
              var i,
                o = this;
              (i = new XMLHttpRequest()).open("GET", e, !0),
                (i.responseType = "arraybuffer"),
                (i.onload = function () {
                  200 === this.status &&
                    (o.load(new Uint8Array(i.response)), t && t.call(o));
                }),
                i.send(null);
            }),
            (i.prototype.load = function (e) {
              var t = 0;
              if (e.length < 18)
                throw new Error(
                  "Targa::load() - Not enough data to contain header"
                );
              if (
                ((this.header = {
                  idLength: e[t++],
                  colorMapType: e[t++],
                  imageType: e[t++],
                  colorMapIndex: e[t++] | (e[t++] << 8),
                  colorMapLength: e[t++] | (e[t++] << 8),
                  colorMapDepth: e[t++],
                  offsetX: e[t++] | (e[t++] << 8),
                  offsetY: e[t++] | (e[t++] << 8),
                  width: e[t++] | (e[t++] << 8),
                  height: e[t++] | (e[t++] << 8),
                  pixelDepth: e[t++],
                  flags: e[t++],
                }),
                (this.header.hasEncoding =
                  this.header.imageType === i.Type.RLE_INDEXED ||
                  this.header.imageType === i.Type.RLE_RGB ||
                  this.header.imageType === i.Type.RLE_GREY),
                (this.header.hasColorMap =
                  this.header.imageType === i.Type.RLE_INDEXED ||
                  this.header.imageType === i.Type.INDEXED),
                (this.header.isGreyColor =
                  this.header.imageType === i.Type.RLE_GREY ||
                  this.header.imageType === i.Type.GREY),
                (function (e) {
                  if (e.imageType === i.Type.NO_DATA)
                    throw new Error("Targa::checkHeader() - No data");
                  if (e.hasColorMap) {
                    if (
                      e.colorMapLength > 256 ||
                      24 !== e.colorMapDepth ||
                      1 !== e.colorMapType
                    )
                      throw new Error(
                        "Targa::checkHeader() - Invalid colormap for indexed type"
                      );
                  } else if (e.colorMapType)
                    throw new Error(
                      "Targa::checkHeader() - Why does the image contain a palette ?"
                    );
                  if (e.width <= 0 || e.height <= 0)
                    throw new Error(
                      "Targa::checkHeader() - Invalid image size"
                    );
                  if (
                    8 !== e.pixelDepth &&
                    16 !== e.pixelDepth &&
                    24 !== e.pixelDepth &&
                    32 !== e.pixelDepth
                  )
                    throw new Error(
                      'Targa::checkHeader() - Invalid pixel size "' +
                        e.pixelDepth +
                        '"'
                    );
                })(this.header),
                (t += this.header.idLength) >= e.length)
              )
                throw new Error("Targa::load() - No data");
              if (this.header.hasColorMap) {
                var o =
                  this.header.colorMapLength * (this.header.colorMapDepth >> 3);
                (this.palette = e.subarray(t, t + o)), (t += o);
              }
              var n = this.header.pixelDepth >> 3,
                a = this.header.width * this.header.height,
                r = a * n;
              this.header.hasEncoding
                ? (this.imageData = (function (e, t, i, o) {
                    var n, a, r, s, l, d;
                    for (
                      d = new Uint8Array(o), l = new Uint8Array(i), n = 0;
                      n < o;

                    )
                      if (((r = 1 + (127 & (a = e[t++]))), 128 & a)) {
                        for (s = 0; s < i; ++s) l[s] = e[t++];
                        for (s = 0; s < r; ++s) d.set(l, n), (n += i);
                      } else for (r *= i, s = 0; s < r; ++s) d[n++] = e[t++];
                    return d;
                  })(e, t, n, r))
                : (this.imageData = e.subarray(
                    t,
                    t + (this.header.hasColorMap ? a : r)
                  ));
            }),
            (i.prototype.getImageData = function (e) {
              var t,
                d,
                c,
                u,
                h,
                g,
                p,
                m = this.header.width,
                f = this.header.height,
                v = (this.header.flags & i.Origin.MASK) >> i.Origin.SHIFT;
              switch (
                (e ||
                  (e = document
                    ? document
                        .createElement("canvas")
                        .getContext("2d")
                        .createImageData(m, f)
                    : {
                        width: m,
                        height: f,
                        data: new Uint8ClampedArray(m * f * 4),
                      }),
                v === i.Origin.TOP_LEFT || v === i.Origin.TOP_RIGHT
                  ? ((u = 0), (h = 1), (g = f))
                  : ((u = f - 1), (h = -1), (g = -1)),
                v === i.Origin.TOP_LEFT || v === i.Origin.BOTTOM_LEFT
                  ? ((t = 0), (d = 1), (c = m))
                  : ((t = m - 1), (d = -1), (c = -1)),
                this.header.pixelDepth)
              ) {
                case 8:
                  p = this.header.isGreyColor ? s : o;
                  break;
                case 16:
                  p = this.header.isGreyColor ? l : n;
                  break;
                case 24:
                  p = a;
                  break;
                case 32:
                  p = r;
              }
              return (
                p(e.data, this.imageData, this.palette, m, u, h, g, t, d, c), e
              );
            }),
            (i.prototype.getCanvas = function () {
              var e, t, i;
              return (
                (i = (t = (e = document.createElement("canvas")).getContext(
                  "2d"
                )).createImageData(this.header.width, this.header.height)),
                (e.width = this.header.width),
                (e.height = this.header.height),
                t.putImageData(this.getImageData(i), 0, 0),
                e
              );
            }),
            (i.prototype.getDataURL = function (e) {
              return this.getCanvas().toDataURL(e || "image/png");
            });
          var d = {};
          (d.exports = t), d.exports && (d.exports.TGA = i);
        })();
      },
      BhLR: (e, t, i) => {
        "use strict";
        e.exports =
          i.p +
          "static/assets/images/editor/18ebd1294ae78d5ff337b6b28abb6edf-v2.png";
      },
      sIAB: (e, t, i) => {
        "use strict";
        e.exports =
          i.p +
          "static/assets/images/editor/e496e8afd9ff0ea61bb5945a662219ca-v2.png";
      },
      AuBp: (e, t, i) => {
        "use strict";
        e.exports =
          i.p +
          "static/assets/images/editor/382ee4f087b797d42500bef3b62b1647-v2.png";
      },
      lKbd: (e, t, i) => {
        "use strict";
        e.exports =
          i.p +
          "static/assets/images/editor/3bad784467a00e97974c6980853e92f7-v2.png";
      },
    },
    (e) => (
      e.O(
        0,
        [
          9994, 2698, 1142, 5471, 193, 7550, 2929, 7913, 1438, 4522, 9946, 3206,
          4197, 2852, 8837, 148, 7549, 4939, 5078, 8400, 1287, 6871, 5114, 109,
          3769, 4599, 7386, 1465, 7231, 8048, 8995, 9411, 8813, 507, 9809, 1872,
          7411, 2322, 325, 5644, 416, 9453, 3266, 1111, 5041,
        ],
        () => {
          return (t = "xFVl"), e((e.s = t));
          var t;
        }
      ),
      e.O()
    ),
  ])
);
