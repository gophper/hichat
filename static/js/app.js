!function() {
    function e(e, t, n) {
        t !== !1 ? z.addEventListener(e, J[e], n) : z.removeEventListener(e, J[e])
    }
    function t(e) {
        var t = w(e.target)
          , i = y(t);
        if (ionic.tap.requiresNativeClick(i) || G)
            return !1;
        var r = ionic.tap.pointerCoord(e);
        n("click", i, r.x, r.y),
        h(i)
    }
    function n(e, t, n, i) {
        var r = document.createEvent("MouseEvents");
        r.initMouseEvent(e, !0, !0, window, 1, 0, 0, n, i, !1, !1, !1, !1, 0, null ),
        r.isIonicTap = !0,
        t.dispatchEvent(r)
    }
    function i(e) {
        return "submit" == e.target.type && 0 === e.detail ? null  : ionic.scroll.isScrolling && ionic.tap.containsOrIsTextInput(e.target) || !e.isIonicTap && !ionic.tap.requiresNativeClick(e.target) ? (e.stopPropagation(),
        ionic.tap.isLabelWithTextInput(e.target) || e.preventDefault(),
        !1) : void 0
    }
    function r(t) {
        return t.isIonicTap || f(t) ? null  : U ? (t.stopPropagation(),
        ionic.tap.isTextInput(t.target) && Y === t.target || /^(select|option)$/i.test(t.target.tagName) || t.preventDefault(),
        !1) : (G = !1,
        j = ionic.tap.pointerCoord(t),
        e("mousemove"),
        void ionic.activator.start(t))
    }
    function o(n) {
        return U ? (n.stopPropagation(),
        n.preventDefault(),
        !1) : f(n) || /^(select|option)$/i.test(n.target.tagName) ? !1 : ($(n) || t(n),
        e("mousemove", !1),
        ionic.activator.end(),
        void (G = !1))
    }
    function a(t) {
        return $(t) ? (e("mousemove", !1),
        ionic.activator.end(),
        G = !0,
        !1) : void 0
    }
    function s(t) {
        if (!f(t) && (G = !1,
        d(),
        j = ionic.tap.pointerCoord(t),
        e(X),
        ionic.activator.start(t),
        ionic.Platform.isIOS() && ionic.tap.isLabelWithTextInput(t.target))) {
            var n = y(w(t.target));
            n !== F && t.preventDefault()
        }
    }
    function c(e) {
        f(e) || (d(),
        $(e) || (t(e),
        /^(select|option)$/i.test(e.target.tagName) && e.preventDefault()),
        Y = e.target,
        u())
    }
    function l(t) {
        return $(t) ? (G = !0,
        e(X, !1),
        ionic.activator.end(),
        !1) : void 0
    }
    function u() {
        e(X, !1),
        ionic.activator.end(),
        G = !1
    }
    function d() {
        U = !0,
        clearTimeout(q),
        q = setTimeout(function() {
            U = !1
        }
        , 600)
    }
    function f(e) {
        return e.isTapHandled ? !0 : (e.isTapHandled = !0,
        ionic.scroll.isScrolling && ionic.tap.containsOrIsTextInput(e.target) ? (e.preventDefault(),
        !0) : void 0)
    }
    function h(e) {
        W = null ;
        var t = !1;
        "SELECT" == e.tagName ? (n("mousedown", e, 0, 0),
        e.focus && e.focus(),
        t = !0) : g() === e ? t = !0 : /^(input|textarea)$/i.test(e.tagName) || e.isContentEditable ? (t = !0,
        e.focus && e.focus(),
        e.value = e.value,
        U && (W = e)) : p(),
        t && (g(e),
        ionic.trigger("ionic.focusin", {
            target: e
        }, !0))
    }
    function p() {
        var e = g();
        e && (/^(input|textarea|select)$/i.test(e.tagName) || e.isContentEditable) && e.blur(),
        g(null )
    }
    function m(e) {
        U && ionic.tap.isTextInput(g()) && ionic.tap.isTextInput(W) && W !== e.target && (W.focus(),
        W = null ),
        ionic.scroll.isScrolling = !1
    }
    function v() {
        g(null )
    }
    function g(e) {
        return arguments.length && (F = e),
        F || document.activeElement
    }
    function $(e) {
        if (!e || 1 !== e.target.nodeType || !j || 0 === j.x && 0 === j.y)
            return !1;
        var t = ionic.tap.pointerCoord(e)
          , n = !(!e.target.classList || !e.target.classList.contains || "function" != typeof e.target.classList.contains)
          , i = n && e.target.classList.contains("button") ? Z : K;
        return Math.abs(j.x - t.x) > i || Math.abs(j.y - t.y) > i
    }
    function w(e, t) {
        for (var n = e, i = 0; 6 > i && n; i++) {
            if ("LABEL" === n.tagName)
                return n;
            n = n.parentElement
        }
        return t !== !1 ? e : void 0
    }
    function y(e) {
        if (e && "LABEL" === e.tagName) {
            if (e.control)
                return e.control;
            if (e.querySelector) {
                var t = e.querySelector("input,textarea,select");
                if (t)
                    return t
            }
        }
        return e
    }
    function _() {
        ionic.keyboard.isInitialized || (N() ? (window.addEventListener("native.keyboardshow", ue),
        window.addEventListener("native.keyboardhide", T)) : document.body.addEventListener("focusout", T),
        document.body.addEventListener("ionic.focusin", le),
        document.body.addEventListener("focusin", le),
        window.navigator.msPointerEnabled ? document.removeEventListener("MSPointerDown", _) : document.removeEventListener("touchstart", _),
        ionic.keyboard.isInitialized = !0)
    }
    function b(e) {
        clearTimeout(ne),
        (!ionic.keyboard.isOpen || ionic.keyboard.isClosing) && (ionic.keyboard.isOpening = !0,
        ionic.keyboard.isClosing = !1),
        ionic.keyboard.height = e.keyboardHeight,
        ae ? k(L, !0) : k(I, !0)
    }
    function S(e) {
        return clearTimeout(ne),
        e.target && !e.target.readOnly && ionic.tap.isKeyboardElement(e.target) && (ee = ionic.DomUtil.getParentWithClass(e.target, ce)) ? (Q = e.target,
        ee.classList.contains("overflow-scroll") || (document.body.scrollTop = 0,
        ee.scrollTop = 0,
        ionic.requestAnimationFrame(function() {
            document.body.scrollTop = 0,
            ee.scrollTop = 0
        }
        ),
        window.navigator.msPointerEnabled ? document.addEventListener("MSPointerMove", C, !1) : document.addEventListener("touchmove", C, !1)),
        (!ionic.keyboard.isOpen || ionic.keyboard.isClosing) && (ionic.keyboard.isOpening = !0,
        ionic.keyboard.isClosing = !1),
        document.addEventListener("keydown", E, !1),
        void (ionic.keyboard.isOpen || N() ? ionic.keyboard.isOpen && I() : k(I, !0))) : void (Q = null )
    }
    function T() {
        clearTimeout(ne),
        (ionic.keyboard.isOpen || ionic.keyboard.isOpening) && (ionic.keyboard.isClosing = !0,
        ionic.keyboard.isOpening = !1),
        ne = setTimeout(function() {
            ionic.requestAnimationFrame(function() {
                ae ? k(function() {
                    L(),
                    A()
                }
                , !1) : k(A, !1)
            }
            )
        }
        , 50)
    }
    function x() {
        ionic.keyboard.isLandscape = !ionic.keyboard.isLandscape,
        ionic.Platform.isIOS() && L(),
        ionic.Platform.isAndroid() && (ionic.keyboard.isOpen && N() ? ae = !0 : k(L, !1))
    }
    function E(e) {
        ionic.scroll.isScrolling && C(e)
    }
    function C(e) {
        "TEXTAREA" !== e.target.tagName && e.preventDefault()
    }
    function k(e, t) {
        clearInterval(te);
        var n, i = 0, r = V(), o = r;
        return n = ionic.Platform.isAndroid() && ionic.Platform.version() < 4.4 ? 30 : ionic.Platform.isAndroid() ? 10 : 1,
        te = setInterval(function() {
            o = V(),
            (!(++i < n) || (M(o) || P(o)) && ionic.keyboard.height) && (N() || (ionic.keyboard.height = Math.abs(r - window.innerHeight)),
            ionic.keyboard.isOpen = t,
            clearInterval(te),
            e())
        }
        , 50),
        n
    }
    function A() {
        clearTimeout(ne),
        ionic.keyboard.isOpen = !1,
        ionic.keyboard.isClosing = !1,
        Q && ionic.trigger("resetScrollView", {
            target: Q
        }, !0),
        ionic.requestAnimationFrame(function() {
            document.body.classList.remove(se)
        }
        ),
        window.navigator.msPointerEnabled ? document.removeEventListener("MSPointerMove", C) : document.removeEventListener("touchmove", C),
        document.removeEventListener("keydown", E),
        ionic.Platform.isAndroid() && (N() && cordova.plugins.Keyboard.close(),
        Q && Q.blur()),
        Q = null
    }
    function I() {
        ionic.keyboard.isOpen = !0,
        ionic.keyboard.isOpening = !1;
        var e = {
            keyboardHeight: D(),
            viewportHeight: ie
        };
        if (Q) {
            e.target = Q;
            var t = Q.getBoundingClientRect();
            e.elementTop = Math.round(t.top),
            e.elementBottom = Math.round(t.bottom),
            e.windowHeight = e.viewportHeight - e.keyboardHeight,
            e.isElementUnderKeyboard = e.elementBottom > e.windowHeight,
            ionic.trigger("scrollChildIntoView", e, !0)
        }
        return setTimeout(function() {
            document.body.classList.add(se)
        }
        , 400),
        e
    }
    function D() {
        if (ionic.keyboard.height)
            return ionic.keyboard.height;
        if (ionic.Platform.isAndroid()) {
            if (ionic.Platform.isFullScreen)
                return 275;
            var e = window.innerHeight;
            return ie > e ? ie - e : 0
        }
        return ionic.Platform.isIOS() ? ionic.keyboard.isLandscape ? 206 : ionic.Platform.isWebView() ? 260 : 216 : 275
    }
    function M(e) {
        return !!(!ionic.keyboard.isLandscape && re && Math.abs(re - e) < 2)
    }
    function P(e) {
        return !!(ionic.keyboard.isLandscape && oe && Math.abs(oe - e) < 2)
    }
    function L() {
        ae = !1,
        ie = V(),
        ionic.keyboard.isLandscape && !oe ? oe = ie : ionic.keyboard.isLandscape || re || (re = ie),
        Q && ionic.trigger("resetScrollView", {
            target: Q
        }, !0),
        ionic.keyboard.isOpen && ionic.tap.isTextInput(Q) && I()
    }
    function O() {
        var e = V();
        e / window.innerWidth < 1 && (ionic.keyboard.isLandscape = !0),
        ie = e,
        ionic.keyboard.isLandscape && !oe ? oe = ie : ionic.keyboard.isLandscape || re || (re = ie)
    }
    function V() {
        var e = window.innerHeight;
        return ionic.Platform.isAndroid() && ionic.Platform.isFullScreen || !ionic.keyboard.isOpen && !ionic.keyboard.isOpening || ionic.keyboard.isClosing ? e : e + D()
    }
    function N() {
        return !!(window.cordova && cordova.plugins && cordova.plugins.Keyboard)
    }
    function B() {
        var e;
        for (e = 0; e < document.head.children.length; e++)
            if ("viewport" == document.head.children[e].name) {
                de = document.head.children[e];
                break
            }
        if (de) {
            var t, n = de.content.toLowerCase().replace(/\s+/g, "").split(",");
            for (e = 0; e < n.length; e++)
                n[e] && (t = n[e].split("="),
                fe[t[0]] = t.length > 1 ? t[1] : "_");
            R()
        }
    }
    function R() {
        var e = fe.width
          , t = fe.height
          , n = ionic.Platform
          , i = n.version()
          , r = "device-width"
          , o = "device-height"
          , a = ionic.viewport.orientation();
        delete fe.height,
        fe.width = r,
        n.isIPad() ? i > 7 ? delete fe.width : n.isWebView() ? 90 == a ? fe.height = "0" : 7 == i && (fe.height = o) : 7 > i && (fe.height = "0") : n.isIOS() && (n.isWebView() ? i > 7 ? delete fe.width : 7 > i ? t && (fe.height = "0") : 7 == i && (fe.height = o) : 7 > i && t && (fe.height = "0")),
        (e !== fe.width || t !== fe.height) && H()
    }
    function H() {
        var e, t = [];
        for (e in fe)
            fe[e] && t.push(e + ("_" == fe[e] ? "" : "=" + fe[e]));
        de.content = t.join(", ")
    }
    window.ionic = window.ionic || {},
    window.ionic.views = {},
    window.ionic.version = "1.0.1",
    function(e) {
        e.DelegateService = function(e) {
            function t() {
                return !0
            }
            if (e.indexOf("$getByHandle") > -1)
                throw new Error("Method '$getByHandle' is implicitly added to each delegate service. Do not list it as a method.");
            return ["$log", function(n) {
                function i(e, t) {
                    this._instances = e,
                    this.handle = t
                }
                function r() {
                    this._instances = []
                }
                function o(e) {
                    return function() {
                        var t, i = this.handle, r = arguments, o = 0;
                        return this._instances.forEach(function(n) {
                            if ((!i || i == n.$$delegateHandle) && n.$$filterFn(n)) {
                                o++;
                                var a = n[e].apply(n, r);
                                1 === o && (t = a)
                            }
                        }
                        ),
                        !o && i ? n.warn('Delegate for handle "' + i + '" could not find a corresponding element with delegate-handle="' + i + '"! ' + e + "() was not called!\nPossible cause: If you are calling " + e + '() immediately, and your element with delegate-handle="' + i + '" is a child of your controller, then your element may not be compiled yet. Put a $timeout around your call to ' + e + "() and try again.") : t
                    }
                }
                return e.forEach(function(e) {
                    i.prototype[e] = o(e)
                }
                ),
                r.prototype = i.prototype,
                r.prototype._registerInstance = function(e, n, i) {
                    var r = this._instances;
                    return e.$$delegateHandle = n,
                    e.$$filterFn = i || t,
                    r.push(e),
                    function() {
                        var t = r.indexOf(e);
                        -1 !== t && r.splice(t, 1)
                    }
                }
                ,
                r.prototype.$getByHandle = function(e) {
                    return new i(this._instances,e)
                }
                ,
                new r
            }
            ]
        }
    }
    (window.ionic),
    function(e, t, n) {
        function i() {
            o = !0;
            for (var e = 0; e < r.length; e++)
                n.requestAnimationFrame(r[e]);
            r = [],
            t.removeEventListener("DOMContentLoaded", i)
        }
        var r = []
          , o = "complete" === t.readyState || "interactive" === t.readyState;
        o || t.addEventListener("DOMContentLoaded", i),
        e._rAF = function() {
            return e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || function(t) {
                e.setTimeout(t, 16)
            }
        }
        ();
        var a = e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.mozCancelAnimationFrame || e.webkitCancelRequestAnimationFrame;
        n.DomUtil = {
            requestAnimationFrame: function(t) {
                return e._rAF(t)
            },
            cancelAnimationFrame: function(e) {
                a(e)
            },
            animationFrameThrottle: function(e) {
                var t, i, r;
                return function() {
                    t = arguments,
                    r = this,
                    i || (i = !0,
                    n.requestAnimationFrame(function() {
                        e.apply(r, t),
                        i = !1
                    }
                    ))
                }
            },
            contains: function(e, t) {
                for (var n = t; n; ) {
                    if (n === e)
                        return !0;
                    n = n.parentNode
                }
            },
            getPositionInParent: function(e) {
                return {
                    left: e.offsetLeft,
                    top: e.offsetTop
                }
            },
            ready: function(e) {
                o ? n.requestAnimationFrame(e) : r.push(e)
            },
            getTextBounds: function(n) {
                if (t.createRange) {
                    var i = t.createRange();
                    if (i.selectNodeContents(n),
                    i.getBoundingClientRect) {
                        var r = i.getBoundingClientRect();
                        if (r) {
                            var o = e.scrollX
                              , a = e.scrollY;
                            return {
                                top: r.top + a,
                                left: r.left + o,
                                right: r.left + o + r.width,
                                bottom: r.top + a + r.height,
                                width: r.width,
                                height: r.height
                            }
                        }
                    }
                }
                return null
            },
            getChildIndex: function(e, t) {
                if (t)
                    for (var n, i = e.parentNode.children, r = 0, o = 0, a = i.length; a > r; r++)
                        if (n = i[r],
                        n.nodeName && n.nodeName.toLowerCase() == t) {
                            if (n == e)
                                return o;
                            o++
                        }
                return Array.prototype.slice.call(e.parentNode.children).indexOf(e)
            },
            swapNodes: function(e, t) {
                t.parentNode.insertBefore(e, t)
            },
            elementIsDescendant: function(e, t, n) {
                var i = e;
                do {
                    if (i === t)
                        return !0;
                    i = i.parentNode
                } while (i && i !== n);return !1
            },
            getParentWithClass: function(e, t, n) {
                for (n = n || 10; e.parentNode && n--; ) {
                    if (e.parentNode.classList && e.parentNode.classList.contains(t))
                        return e.parentNode;
                    e = e.parentNode
                }
                return null
            },
            getParentOrSelfWithClass: function(e, t, n) {
                for (n = n || 10; e && n--; ) {
                    if (e.classList && e.classList.contains(t))
                        return e;
                    e = e.parentNode
                }
                return null
            },
            rectContains: function(e, t, n, i, r, o) {
                return n > e || e > r ? !1 : i > t || t > o ? !1 : !0
            },
            blurAll: function() {
                return t.activeElement && t.activeElement != t.body ? (t.activeElement.blur(),
                t.activeElement) : null
            },
            cachedAttr: function(e, t, n) {
                if (e = e && e.length && e[0] || e,
                e && e.setAttribute) {
                    var i = "$attr-" + t;
                    return arguments.length > 2 ? e[i] !== n && (e.setAttribute(t, n),
                    e[i] = n) : "undefined" == typeof e[i] && (e[i] = e.getAttribute(t)),
                    e[i]
                }
            },
            cachedStyles: function(e, t) {
                if (e = e && e.length && e[0] || e,
                e && e.style)
                    for (var n in t)
                        e["$style-" + n] !== t[n] && (e.style[n] = e["$style-" + n] = t[n])
            }
        },
        n.requestAnimationFrame = n.DomUtil.requestAnimationFrame,
        n.cancelAnimationFrame = n.DomUtil.cancelAnimationFrame,
        n.animationFrameThrottle = n.DomUtil.animationFrameThrottle
    }
    (window, document, ionic),
    function(e) {
        e.CustomEvent = function() {
            if ("function" == typeof window.CustomEvent)
                return CustomEvent;
            var e = function(e, t) {
                var n;
                t = t || {
                    bubbles: !1,
                    cancelable: !1,
                    detail: void 0
                };
                try {
                    n = document.createEvent("CustomEvent"),
                    n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail)
                } catch (i) {
                    n = document.createEvent("Event");
                    for (var r in t)
                        n[r] = t[r];
                    n.initEvent(e, t.bubbles, t.cancelable)
                }
                return n
            }
            ;
            return e.prototype = window.Event.prototype,
            e
        }
        (),
        e.EventController = {
            VIRTUALIZED_EVENTS: ["tap", "swipe", "swiperight", "swipeleft", "drag", "hold", "release"],
            trigger: function(t, n, i, r) {
                var o = new e.CustomEvent(t,{
                    detail: n,
                    bubbles: !!i,
                    cancelable: !!r
                });
                n && n.target && n.target.dispatchEvent && n.target.dispatchEvent(o) || window.dispatchEvent(o)
            },
            on: function(t, n, i) {
                for (var r = i || window, o = 0, a = this.VIRTUALIZED_EVENTS.length; a > o; o++)
                    if (t == this.VIRTUALIZED_EVENTS[o]) {
                        var s = new e.Gesture(i);
                        return s.on(t, n),
                        s
                    }
                r.addEventListener(t, n)
            },
            off: function(e, t, n) {
                n.removeEventListener(e, t)
            },
            onGesture: function(t, n, i, r) {
                var o = new e.Gesture(i,r);
                return o.on(t, n),
                o
            },
            offGesture: function(e, t, n) {
                e && e.off(t, n)
            },
            handlePopState: function() {}
        },
        e.on = function() {
            e.EventController.on.apply(e.EventController, arguments)
        }
        ,
        e.off = function() {
            e.EventController.off.apply(e.EventController, arguments)
        }
        ,
        e.trigger = e.EventController.trigger,
        e.onGesture = function() {
            return e.EventController.onGesture.apply(e.EventController.onGesture, arguments)
        }
        ,
        e.offGesture = function() {
            return e.EventController.offGesture.apply(e.EventController.offGesture, arguments)
        }
    }
    (window.ionic),
    function(e) {
        function t() {
            if (!e.Gestures.READY) {
                e.Gestures.event.determineEventTypes();
                for (var t in e.Gestures.gestures)
                    e.Gestures.gestures.hasOwnProperty(t) && e.Gestures.detection.register(e.Gestures.gestures[t]);
                e.Gestures.event.onTouch(e.Gestures.DOCUMENT, e.Gestures.EVENT_MOVE, e.Gestures.detection.detect),
                e.Gestures.event.onTouch(e.Gestures.DOCUMENT, e.Gestures.EVENT_END, e.Gestures.detection.detect),
                e.Gestures.READY = !0
            }
        }
        e.Gesture = function(t, n) {
            return new e.Gestures.Instance(t,n || {})
        }
        ,
        e.Gestures = {},
        e.Gestures.defaults = {
            stop_browser_behavior: "disable-user-behavior"
        },
        e.Gestures.HAS_POINTEREVENTS = window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
        e.Gestures.HAS_TOUCHEVENTS = "ontouchstart" in window,
        e.Gestures.MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android|silk/i,
        e.Gestures.NO_MOUSEEVENTS = e.Gestures.HAS_TOUCHEVENTS && window.navigator.userAgent.match(e.Gestures.MOBILE_REGEX),
        e.Gestures.EVENT_TYPES = {},
        e.Gestures.DIRECTION_DOWN = "down",
        e.Gestures.DIRECTION_LEFT = "left",
        e.Gestures.DIRECTION_UP = "up",
        e.Gestures.DIRECTION_RIGHT = "right",
        e.Gestures.POINTER_MOUSE = "mouse",
        e.Gestures.POINTER_TOUCH = "touch",
        e.Gestures.POINTER_PEN = "pen",
        e.Gestures.EVENT_START = "start",
        e.Gestures.EVENT_MOVE = "move",
        e.Gestures.EVENT_END = "end",
        e.Gestures.DOCUMENT = window.document,
        e.Gestures.plugins = {},
        e.Gestures.READY = !1,
        e.Gestures.Instance = function(n, i) {
            var r = this;
            return null  === n ? this : (t(),
            this.element = n,
            this.enabled = !0,
            this.options = e.Gestures.utils.extend(e.Gestures.utils.extend({}, e.Gestures.defaults), i || {}),
            this.options.stop_browser_behavior && e.Gestures.utils.stopDefaultBrowserBehavior(this.element, this.options.stop_browser_behavior),
            e.Gestures.event.onTouch(n, e.Gestures.EVENT_START, function(t) {
                r.enabled && e.Gestures.detection.startDetect(r, t)
            }
            ),
            this)
        }
        ,
        e.Gestures.Instance.prototype = {
            on: function(e, t) {
                for (var n = e.split(" "), i = 0; i < n.length; i++)
                    this.element.addEventListener(n[i], t, !1);
                return this
            },
            off: function(e, t) {
                for (var n = e.split(" "), i = 0; i < n.length; i++)
                    this.element.removeEventListener(n[i], t, !1);
                return this
            },
            trigger: function(t, n) {
                var i = e.Gestures.DOCUMENT.createEvent("Event");
                i.initEvent(t, !0, !0),
                i.gesture = n;
                var r = this.element;
                return e.Gestures.utils.hasParent(n.target, r) && (r = n.target),
                r.dispatchEvent(i),
                this
            },
            enable: function(e) {
                return this.enabled = e,
                this
            }
        };
        var n = null
          , i = !1
          , r = !1;
        e.Gestures.event = {
            bindDom: function(e, t, n) {
                for (var i = t.split(" "), r = 0; r < i.length; r++)
                    e.addEventListener(i[r], n, !1)
            },
            onTouch: function(t, o, a) {
                var s = this;
                this.bindDom(t, e.Gestures.EVENT_TYPES[o], function(c) {
                    var l = c.type.toLowerCase();
                    if (!l.match(/mouse/) || !r) {
                        l.match(/touch/) || l.match(/pointerdown/) || l.match(/mouse/) && 1 === c.which ? i = !0 : l.match(/mouse/) && 1 !== c.which && (i = !1),
                        l.match(/touch|pointer/) && (r = !0);
                        var u = 0;
                        i && (e.Gestures.HAS_POINTEREVENTS && o != e.Gestures.EVENT_END ? u = e.Gestures.PointerEvent.updatePointer(o, c) : l.match(/touch/) ? u = c.touches.length : r || (u = l.match(/up/) ? 0 : 1),
                        u > 0 && o == e.Gestures.EVENT_END ? o = e.Gestures.EVENT_MOVE : u || (o = e.Gestures.EVENT_END),
                        (u || null  === n) && (n = c),
                        a.call(e.Gestures.detection, s.collectEventData(t, o, s.getTouchList(n, o), c)),
                        e.Gestures.HAS_POINTEREVENTS && o == e.Gestures.EVENT_END && (u = e.Gestures.PointerEvent.updatePointer(o, c))),
                        u || (n = null ,
                        i = !1,
                        r = !1,
                        e.Gestures.PointerEvent.reset())
                    }
                }
                )
            },
            determineEventTypes: function() {
                var t;
                t = e.Gestures.HAS_POINTEREVENTS ? e.Gestures.PointerEvent.getEvents() : e.Gestures.NO_MOUSEEVENTS ? ["touchstart", "touchmove", "touchend touchcancel"] : ["touchstart mousedown", "touchmove mousemove", "touchend touchcancel mouseup"],
                e.Gestures.EVENT_TYPES[e.Gestures.EVENT_START] = t[0],
                e.Gestures.EVENT_TYPES[e.Gestures.EVENT_MOVE] = t[1],
                e.Gestures.EVENT_TYPES[e.Gestures.EVENT_END] = t[2]
            },
            getTouchList: function(t) {
                return e.Gestures.HAS_POINTEREVENTS ? e.Gestures.PointerEvent.getTouchList() : t.touches ? t.touches : (t.identifier = 1,
                [t])
            },
            collectEventData: function(t, n, i, r) {
                var o = e.Gestures.POINTER_TOUCH;
                return (r.type.match(/mouse/) || e.Gestures.PointerEvent.matchType(e.Gestures.POINTER_MOUSE, r)) && (o = e.Gestures.POINTER_MOUSE),
                {
                    center: e.Gestures.utils.getCenter(i),
                    timeStamp: (new Date).getTime(),
                    target: r.target,
                    touches: i,
                    eventType: n,
                    pointerType: o,
                    srcEvent: r,
                    preventDefault: function() {
                        this.srcEvent.preventManipulation && this.srcEvent.preventManipulation(),
                        this.srcEvent.preventDefault
                    },
                    stopPropagation: function() {
                        this.srcEvent.stopPropagation()
                    },
                    stopDetect: function() {
                        return e.Gestures.detection.stopDetect()
                    }
                }
            }
        },
        e.Gestures.PointerEvent = {
            pointers: {},
            getTouchList: function() {
                var e = this
                  , t = [];
                return Object.keys(e.pointers).sort().forEach(function(n) {
                    t.push(e.pointers[n])
                }
                ),
                t
            },
            updatePointer: function(t, n) {
                return t == e.Gestures.EVENT_END ? this.pointers = {} : (n.identifier = n.pointerId,
                this.pointers[n.pointerId] = n),
                Object.keys(this.pointers).length
            },
            matchType: function(t, n) {
                if (!n.pointerType)
                    return !1;
                var i = {};
                return i[e.Gestures.POINTER_MOUSE] = n.pointerType == n.MSPOINTER_TYPE_MOUSE || n.pointerType == e.Gestures.POINTER_MOUSE,
                i[e.Gestures.POINTER_TOUCH] = n.pointerType == n.MSPOINTER_TYPE_TOUCH || n.pointerType == e.Gestures.POINTER_TOUCH,
                i[e.Gestures.POINTER_PEN] = n.pointerType == n.MSPOINTER_TYPE_PEN || n.pointerType == e.Gestures.POINTER_PEN,
                i[t]
            },
            getEvents: function() {
                return ["pointerdown MSPointerDown", "pointermove MSPointerMove", "pointerup pointercancel MSPointerUp MSPointerCancel"]
            },
            reset: function() {
                this.pointers = {}
            }
        },
        e.Gestures.utils = {
            extend: function(e, t, n) {
                for (var i in t)
                    void 0 !== e[i] && n || (e[i] = t[i]);
                return e
            },
            hasParent: function(e, t) {
                for (; e; ) {
                    if (e == t)
                        return !0;
                    e = e.parentNode
                }
                return !1
            },
            getCenter: function(e) {
                for (var t = [], n = [], i = 0, r = e.length; r > i; i++)
                    t.push(e[i].pageX),
                    n.push(e[i].pageY);
                return {
                    pageX: (Math.min.apply(Math, t) + Math.max.apply(Math, t)) / 2,
                    pageY: (Math.min.apply(Math, n) + Math.max.apply(Math, n)) / 2
                }
            },
            getVelocity: function(e, t, n) {
                return {
                    x: Math.abs(t / e) || 0,
                    y: Math.abs(n / e) || 0
                }
            },
            getAngle: function(e, t) {
                var n = t.pageY - e.pageY
                  , i = t.pageX - e.pageX;
                return 180 * Math.atan2(n, i) / Math.PI
            },
            getDirection: function(t, n) {
                var i = Math.abs(t.pageX - n.pageX)
                  , r = Math.abs(t.pageY - n.pageY);
                return i >= r ? t.pageX - n.pageX > 0 ? e.Gestures.DIRECTION_LEFT : e.Gestures.DIRECTION_RIGHT : t.pageY - n.pageY > 0 ? e.Gestures.DIRECTION_UP : e.Gestures.DIRECTION_DOWN
            },
            getDistance: function(e, t) {
                var n = t.pageX - e.pageX
                  , i = t.pageY - e.pageY;
                return Math.sqrt(n * n + i * i)
            },
            getScale: function(e, t) {
                return e.length >= 2 && t.length >= 2 ? this.getDistance(t[0], t[1]) / this.getDistance(e[0], e[1]) : 1
            },
            getRotation: function(e, t) {
                return e.length >= 2 && t.length >= 2 ? this.getAngle(t[1], t[0]) - this.getAngle(e[1], e[0]) : 0
            },
            isVertical: function(t) {
                return t == e.Gestures.DIRECTION_UP || t == e.Gestures.DIRECTION_DOWN
            },
            stopDefaultBrowserBehavior: function(e, t) {
                e && e.classList && (e.classList.add(t),
                e.onselectstart = function() {
                    return !1
                }
                )
            }
        },
        e.Gestures.detection = {
            gestures: [],
            current: null ,
            previous: null ,
            stopped: !1,
            startDetect: function(t, n) {
                this.current || (this.stopped = !1,
                this.current = {
                    inst: t,
                    startEvent: e.Gestures.utils.extend({}, n),
                    lastEvent: !1,
                    name: ""
                },
                this.detect(n))
            },
            detect: function(t) {
                if (!this.current || this.stopped)
                    return null ;
                t = this.extendEventData(t);
                for (var n = this.current.inst.options, i = 0, r = this.gestures.length; r > i; i++) {
                    var o = this.gestures[i];
                    if (!this.stopped && n[o.name] !== !1 && o.handler.call(o, t, this.current.inst) === !1) {
                        this.stopDetect();
                        break
                    }
                }
                return this.current && (this.current.lastEvent = t),
                t.eventType == e.Gestures.EVENT_END && !t.touches.length - 1 && this.stopDetect(),
                t
            },
            stopDetect: function() {
                this.previous = e.Gestures.utils.extend({}, this.current),
                this.current = null ,
                this.stopped = !0
            },
            extendEventData: function(t) {
                var n = this.current.startEvent;
                if (n && (t.touches.length != n.touches.length || t.touches === n.touches)) {
                    n.touches = [];
                    for (var i = 0, r = t.touches.length; r > i; i++)
                        n.touches.push(e.Gestures.utils.extend({}, t.touches[i]))
                }
                var o = t.timeStamp - n.timeStamp
                  , a = t.center.pageX - n.center.pageX
                  , s = t.center.pageY - n.center.pageY
                  , c = e.Gestures.utils.getVelocity(o, a, s);
                return e.Gestures.utils.extend(t, {
                    deltaTime: o,
                    deltaX: a,
                    deltaY: s,
                    velocityX: c.x,
                    velocityY: c.y,
                    distance: e.Gestures.utils.getDistance(n.center, t.center),
                    angle: e.Gestures.utils.getAngle(n.center, t.center),
                    direction: e.Gestures.utils.getDirection(n.center, t.center),
                    scale: e.Gestures.utils.getScale(n.touches, t.touches),
                    rotation: e.Gestures.utils.getRotation(n.touches, t.touches),
                    startEvent: n
                }),
                t
            },
            register: function(t) {
                var n = t.defaults || {};
                return void 0 === n[t.name] && (n[t.name] = !0),
                e.Gestures.utils.extend(e.Gestures.defaults, n, !0),
                t.index = t.index || 1e3,
                this.gestures.push(t),
                this.gestures.sort(function(e, t) {
                    return e.index < t.index ? -1 : e.index > t.index ? 1 : 0
                }
                ),
                this.gestures
            }
        },
        e.Gestures.gestures = e.Gestures.gestures || {},
        e.Gestures.gestures.Hold = {
            name: "hold",
            index: 10,
            defaults: {
                hold_timeout: 500,
                hold_threshold: 1
            },
            timer: null ,
            handler: function(t, n) {
                switch (t.eventType) {
                case e.Gestures.EVENT_START:
                    clearTimeout(this.timer),
                    e.Gestures.detection.current.name = this.name,
                    this.timer = setTimeout(function() {
                        "hold" == e.Gestures.detection.current.name && (e.tap.cancelClick(),
                        n.trigger("hold", t))
                    }
                    , n.options.hold_timeout);
                    break;
                case e.Gestures.EVENT_MOVE:
                    t.distance > n.options.hold_threshold && clearTimeout(this.timer);
                    break;
                case e.Gestures.EVENT_END:
                    clearTimeout(this.timer)
                }
            }
        },
        e.Gestures.gestures.Tap = {
            name: "tap",
            index: 100,
            defaults: {
                tap_max_touchtime: 250,
                tap_max_distance: 10,
                tap_always: !0,
                doubletap_distance: 20,
                doubletap_interval: 300
            },
            handler: function(t, n) {
                if (t.eventType == e.Gestures.EVENT_END && "touchcancel" != t.srcEvent.type) {
                    var i = e.Gestures.detection.previous
                      , r = !1;
                    if (t.deltaTime > n.options.tap_max_touchtime || t.distance > n.options.tap_max_distance)
                        return;
                    i && "tap" == i.name && t.timeStamp - i.lastEvent.timeStamp < n.options.doubletap_interval && t.distance < n.options.doubletap_distance && (n.trigger("doubletap", t),
                    r = !0),
                    (!r || n.options.tap_always) && (e.Gestures.detection.current.name = "tap",
                    n.trigger("tap", t))
                }
            }
        },
        e.Gestures.gestures.Swipe = {
            name: "swipe",
            index: 40,
            defaults: {
                swipe_max_touches: 1,
                swipe_velocity: .4
            },
            handler: function(t, n) {
                if (t.eventType == e.Gestures.EVENT_END) {
                    if (n.options.swipe_max_touches > 0 && t.touches.length > n.options.swipe_max_touches)
                        return;
                    (t.velocityX > n.options.swipe_velocity || t.velocityY > n.options.swipe_velocity) && (n.trigger(this.name, t),
                    n.trigger(this.name + t.direction, t))
                }
            }
        },
        e.Gestures.gestures.Drag = {
            name: "drag",
            index: 50,
            defaults: {
                drag_min_distance: 10,
                correct_for_drag_min_distance: !0,
                drag_max_touches: 1,
                drag_block_horizontal: !0,
                drag_block_vertical: !0,
                drag_lock_to_axis: !1,
                drag_lock_min_distance: 25,
                prevent_default_directions: []
            },
            triggered: !1,
            handler: function(t, n) {
                if ("touchstart" == t.srcEvent.type || "touchend" == t.srcEvent.type ? this.preventedFirstMove = !1 : this.preventedFirstMove || "touchmove" != t.srcEvent.type || ((0 === n.options.prevent_default_directions.length || -1 != n.options.prevent_default_directions.indexOf(t.direction)) && t.srcEvent.preventDefault(),
                this.preventedFirstMove = !0),
                e.Gestures.detection.current.name != this.name && this.triggered)
                    return n.trigger(this.name + "end", t),
                    void (this.triggered = !1);
                if (!(n.options.drag_max_touches > 0 && t.touches.length > n.options.drag_max_touches))
                    switch (t.eventType) {
                    case e.Gestures.EVENT_START:
                        this.triggered = !1;
                        break;
                    case e.Gestures.EVENT_MOVE:
                        if (t.distance < n.options.drag_min_distance && e.Gestures.detection.current.name != this.name)
                            return;
                        if (e.Gestures.detection.current.name != this.name && (e.Gestures.detection.current.name = this.name,
                        n.options.correct_for_drag_min_distance)) {
                            var i = Math.abs(n.options.drag_min_distance / t.distance);
                            e.Gestures.detection.current.startEvent.center.pageX += t.deltaX * i,
                            e.Gestures.detection.current.startEvent.center.pageY += t.deltaY * i,
                            t = e.Gestures.detection.extendEventData(t)
                        }
                        (e.Gestures.detection.current.lastEvent.drag_locked_to_axis || n.options.drag_lock_to_axis && n.options.drag_lock_min_distance <= t.distance) && (t.drag_locked_to_axis = !0);
                        var r = e.Gestures.detection.current.lastEvent.direction;
                        t.drag_locked_to_axis && r !== t.direction && (e.Gestures.utils.isVertical(r) ? t.direction = t.deltaY < 0 ? e.Gestures.DIRECTION_UP : e.Gestures.DIRECTION_DOWN : t.direction = t.deltaX < 0 ? e.Gestures.DIRECTION_LEFT : e.Gestures.DIRECTION_RIGHT),
                        this.triggered || (n.trigger(this.name + "start", t),
                        this.triggered = !0),
                        n.trigger(this.name, t),
                        n.trigger(this.name + t.direction, t),
                        (n.options.drag_block_vertical && e.Gestures.utils.isVertical(t.direction) || n.options.drag_block_horizontal && !e.Gestures.utils.isVertical(t.direction)) && t.preventDefault();
                        break;
                    case e.Gestures.EVENT_END:
                        this.triggered && n.trigger(this.name + "end", t),
                        this.triggered = !1
                    }
            }
        },
        e.Gestures.gestures.Transform = {
            name: "transform",
            index: 45,
            defaults: {
                transform_min_scale: .01,
                transform_min_rotation: 1,
                transform_always_block: !1
            },
            triggered: !1,
            handler: function(t, n) {
                if (e.Gestures.detection.current.name != this.name && this.triggered)
                    return n.trigger(this.name + "end", t),
                    void (this.triggered = !1);
                if (!(t.touches.length < 2))
                    switch (n.options.transform_always_block && t.preventDefault(),
                    t.eventType) {
                    case e.Gestures.EVENT_START:
                        this.triggered = !1;
                        break;
                    case e.Gestures.EVENT_MOVE:
                        var i = Math.abs(1 - t.scale)
                          , r = Math.abs(t.rotation);
                        if (i < n.options.transform_min_scale && r < n.options.transform_min_rotation)
                            return;
                        e.Gestures.detection.current.name = this.name,
                        this.triggered || (n.trigger(this.name + "start", t),
                        this.triggered = !0),
                        n.trigger(this.name, t),
                        r > n.options.transform_min_rotation && n.trigger("rotate", t),
                        i > n.options.transform_min_scale && (n.trigger("pinch", t),
                        n.trigger("pinch" + (t.scale < 1 ? "in" : "out"), t));
                        break;
                    case e.Gestures.EVENT_END:
                        this.triggered && n.trigger(this.name + "end", t),
                        this.triggered = !1
                    }
            }
        },
        e.Gestures.gestures.Touch = {
            name: "touch",
            index: -(1 / 0),
            defaults: {
                prevent_default: !1,
                prevent_mouseevents: !1
            },
            handler: function(t, n) {
                return n.options.prevent_mouseevents && t.pointerType == e.Gestures.POINTER_MOUSE ? void t.stopDetect() : (n.options.prevent_default && t.preventDefault(),
                void (t.eventType == e.Gestures.EVENT_START && n.trigger(this.name, t)))
            }
        },
        e.Gestures.gestures.Release = {
            name: "release",
            index: 1 / 0,
            handler: function(t, n) {
                t.eventType == e.Gestures.EVENT_END && n.trigger(this.name, t)
            }
        }
    }
    (window.ionic),
    function(e, t, n) {
        function i(e) {
            e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var t = new RegExp("[\\?&]" + e + "=([^&#]*)")
              , n = t.exec(location.search);
            return null  === n ? "" : decodeURIComponent(n[1].replace(/\+/g, " "))
        }
        function r() {
            d.isWebView() ? t.addEventListener("deviceready", o, !1) : o(),
            a && e.removeEventListener("load", r, !1)
        }
        function o() {
            d.isReady = !0,
            d.detect();
            for (var e = 0; e < p.length; e++)
                p[e]();
            p = [],
            n.trigger("platformready", {
                target: t
            }),
            u(function() {
                t.body.classList.add("platform-ready")
            }
            )
        }
        var a, s = "ios", c = "android", l = "windowsphone", u = n.requestAnimationFrame, d = n.Platform = {
            navigator: e.navigator,
            isReady: !1,
            isFullScreen: !1,
            platforms: null ,
            grade: null ,
            ua: navigator.userAgent,
            ready: function(e) {
                d.isReady ? e() : p.push(e)
            },
            detect: function() {
                d._checkPlatforms(),
                u(function() {
                    for (var e = 0; e < d.platforms.length; e++)
                        t.body.classList.add("platform-" + d.platforms[e])
                }
                )
            },
            setGrade: function(e) {
                var n = d.grade;
                d.grade = e,
                u(function() {
                    n && t.body.classList.remove("grade-" + n),
                    t.body.classList.add("grade-" + e)
                }
                )
            },
            device: function() {
                return e.device || {}
            },
            _checkPlatforms: function() {
                d.platforms = [];
                var t = "a";
                d.isWebView() ? (d.platforms.push("webview"),
                e.cordova || e.PhoneGap || e.phonegap ? d.platforms.push("cordova") : e.forge && d.platforms.push("trigger")) : d.platforms.push("browser"),
                d.isIPad() && d.platforms.push("ipad");
                var n = d.platform();
                if (n) {
                    d.platforms.push(n);
                    var i = d.version();
                    if (i) {
                        var r = i.toString();
                        r.indexOf(".") > 0 ? r = r.replace(".", "_") : r += "_0",
                        d.platforms.push(n + r.split("_")[0]),
                        d.platforms.push(n + r),
                        d.isAndroid() && 4.4 > i ? t = 4 > i ? "c" : "b" : d.isWindowsPhone() && (t = "b")
                    }
                }
                d.setGrade(t)
            },
            isWebView: function() {
                return !!(e.cordova || e.PhoneGap || e.phonegap || e.forge)
            },
            isIPad: function() {
                return /iPad/i.test(d.navigator.platform) ? !0 : /iPad/i.test(d.ua)
            },
            isIOS: function() {
                return d.is(s)
            },
            isAndroid: function() {
                return d.is(c)
            },
            isWindowsPhone: function() {
                return d.is(l)
            },
            platform: function() {
                return null  === f && d.setPlatform(d.device().platform),
                f
            },
            setPlatform: function(e) {
                f = "undefined" != typeof e && null  !== e && e.length ? e.toLowerCase() : i("ionicplatform") ? i("ionicplatform") : d.ua.indexOf("Android") > 0 ? c : /iPhone|iPad|iPod/.test(d.ua) ? s : d.ua.indexOf("Windows Phone") > -1 ? l : d.navigator.platform && navigator.platform.toLowerCase().split(" ")[0] || ""
            },
            version: function() {
                return null  === h && d.setVersion(d.device().version),
                h
            },
            setVersion: function(e) {
                if ("undefined" != typeof e && null  !== e && (e = e.split("."),
                e = parseFloat(e[0] + "." + (e.length > 1 ? e[1] : 0)),
                !isNaN(e)))
                    return void (h = e);
                h = 0;
                var t = d.platform()
                  , n = {
                    android: /Android (\d+).(\d+)?/,
                    ios: /OS (\d+)_(\d+)?/,
                    windowsphone: /Windows Phone (\d+).(\d+)?/
                };
                n[t] && (e = d.ua.match(n[t]),
                e && e.length > 2 && (h = parseFloat(e[1] + "." + e[2])))
            },
            is: function(e) {
                if (e = e.toLowerCase(),
                d.platforms)
                    for (var t = 0; t < d.platforms.length; t++)
                        if (d.platforms[t] === e)
                            return !0;
                var n = d.platform();
                return n ? n === e.toLowerCase() : d.ua.toLowerCase().indexOf(e) >= 0
            },
            exitApp: function() {
                d.ready(function() {
                    navigator.app && navigator.app.exitApp && navigator.app.exitApp()
                }
                )
            },
            showStatusBar: function(n) {
                d._showStatusBar = n,
                d.ready(function() {
                    u(function() {
                        d._showStatusBar ? (e.StatusBar && e.StatusBar.show(),
                        t.body.classList.remove("status-bar-hide")) : (e.StatusBar && e.StatusBar.hide(),
                        t.body.classList.add("status-bar-hide"))
                    }
                    )
                }
                )
            },
            fullScreen: function(e, i) {
                d.isFullScreen = e !== !1,
                n.DomUtil.ready(function() {
                    u(function() {
                        d.isFullScreen ? t.body.classList.add("fullscreen") : t.body.classList.remove("fullscreen")
                    }
                    ),
                    d.showStatusBar(i === !0)
                }
                )
            }
        }, f = null , h = null , p = [];
        "complete" === t.readyState ? r() : (a = !0,
        e.addEventListener("load", r, !1))
    }
    (this, document, ionic),
    function(e, t) {
        "use strict";
        t.CSS = {},
        function() {
            var n, i = ["webkitTransform", "transform", "-webkit-transform", "webkit-transform", "-moz-transform", "moz-transform", "MozTransform", "mozTransform", "msTransform"];
            for (n = 0; n < i.length; n++)
                if (void 0 !== e.documentElement.style[i[n]]) {
                    t.CSS.TRANSFORM = i[n];
                    break
                }
            for (i = ["webkitTransition", "mozTransition", "msTransition", "transition"],
            n = 0; n < i.length; n++)
                if (void 0 !== e.documentElement.style[i[n]]) {
                    t.CSS.TRANSITION = i[n];
                    break
                }
            var r = t.CSS.TRANSITION.indexOf("webkit") > -1;
            t.CSS.TRANSITION_DURATION = (r ? "-webkit-" : "") + "transition-duration",
            t.CSS.TRANSITIONEND = (r ? "webkitTransitionEnd " : "") + "transitionend"
        }
        (),
        "classList" in e.documentElement || !Object.defineProperty || "undefined" == typeof HTMLElement || Object.defineProperty(HTMLElement.prototype, "classList", {
            get: function() {
                function e(e) {
                    return function() {
                        var n, i = t.className.split(/\s+/);
                        for (n = 0; n < arguments.length; n++)
                            e(i, i.indexOf(arguments[n]), arguments[n]);
                        t.className = i.join(" ")
                    }
                }
                var t = this;
                return {
                    add: e(function(e, t, n) {
                        ~t || e.push(n)
                    }
                    ),
                    remove: e(function(e, t) {
                        ~t && e.splice(t, 1)
                    }
                    ),
                    toggle: e(function(e, t, n) {
                        ~t ? e.splice(t, 1) : e.push(n)
                    }
                    ),
                    contains: function(e) {
                        return !!~t.className.split(/\s+/).indexOf(e)
                    },
                    item: function(e) {
                        return t.className.split(/\s+/)[e] || null
                    }
                }
            }
        })
    }
    (document, ionic);
    var z, F, U, q, G, j, W, Y, X = "touchmove", K = 12, Z = 50, J = {
        click: i,
        mousedown: r,
        mouseup: o,
        mousemove: a,
        touchstart: s,
        touchend: c,
        touchcancel: u,
        touchmove: l,
        pointerdown: s,
        pointerup: c,
        pointercancel: u,
        pointermove: l,
        MSPointerDown: s,
        MSPointerUp: c,
        MSPointerCancel: u,
        MSPointerMove: l,
        focusin: m,
        focusout: v
    };
    ionic.tap = {
        register: function(t) {
            return z = t,
            e("click", !0, !0),
            e("mouseup"),
            e("mousedown"),
            window.navigator.pointerEnabled ? (e("pointerdown"),
            e("pointerup"),
            e("pointcancel"),
            X = "pointermove") : window.navigator.msPointerEnabled ? (e("MSPointerDown"),
            e("MSPointerUp"),
            e("MSPointerCancel"),
            X = "MSPointerMove") : (e("touchstart"),
            e("touchend"),
            e("touchcancel")),
            e("focusin"),
            e("focusout"),
            function() {
                for (var t in J)
                    e(t, !1);
                z = null ,
                F = null ,
                U = !1,
                G = !1,
                j = null
            }
        },
        ignoreScrollStart: function(e) {
            return e.defaultPrevented || /^(file|range)$/i.test(e.target.type) || "true" == (e.target.dataset ? e.target.dataset.preventScroll : e.target.getAttribute("data-prevent-scroll")) || !!/^(object|embed)$/i.test(e.target.tagName) || ionic.tap.isElementTapDisabled(e.target)
        },
        isTextInput: function(e) {
            return !!e && ("TEXTAREA" == e.tagName || "true" === e.contentEditable || "INPUT" == e.tagName && !/^(radio|checkbox|range|file|submit|reset|color|image|button)$/i.test(e.type))
        },
        isDateInput: function(e) {
            return !!e && "INPUT" == e.tagName && /^(date|time|datetime-local|month|week)$/i.test(e.type)
        },
        isKeyboardElement: function(e) {
            return !ionic.Platform.isIOS() || ionic.Platform.isIPad() ? ionic.tap.isTextInput(e) && !ionic.tap.isDateInput(e) : ionic.tap.isTextInput(e) || !!e && "SELECT" == e.tagName
        },
        isLabelWithTextInput: function(e) {
            var t = w(e, !1);
            return !!t && ionic.tap.isTextInput(y(t))
        },
        containsOrIsTextInput: function(e) {
            return ionic.tap.isTextInput(e) || ionic.tap.isLabelWithTextInput(e)
        },
        cloneFocusedInput: function(e) {
            ionic.tap.hasCheckedClone || (ionic.tap.hasCheckedClone = !0,
            ionic.requestAnimationFrame(function() {
                var t = e.querySelector(":focus");
                if (ionic.tap.isTextInput(t) && !ionic.tap.isDateInput(t)) {
                    var n = t.cloneNode(!0);
                    n.value = t.value,
                    n.classList.add("cloned-text-input"),
                    n.readOnly = !0,
                    t.isContentEditable && (n.contentEditable = t.contentEditable,
                    n.innerHTML = t.innerHTML),
                    t.parentElement.insertBefore(n, t),
                    t.classList.add("previous-input-focus"),
                    n.scrollTop = t.scrollTop
                }
            }
            ))
        },
        hasCheckedClone: !1,
        removeClonedInputs: function(e) {
            ionic.tap.hasCheckedClone = !1,
            ionic.requestAnimationFrame(function() {
                var t, n = e.querySelectorAll(".cloned-text-input"), i = e.querySelectorAll(".previous-input-focus");
                for (t = 0; t < n.length; t++)
                    n[t].parentElement.removeChild(n[t]);
                for (t = 0; t < i.length; t++)
                    i[t].classList.remove("previous-input-focus"),
                    i[t].style.top = "",
                    ionic.keyboard.isOpen && !ionic.keyboard.isClosing && i[t].focus()
            }
            )
        },
        requiresNativeClick: function(e) {
            return !e || e.disabled || /^(file|range)$/i.test(e.type) || /^(object|video)$/i.test(e.tagName) || ionic.tap.isLabelContainingFileInput(e) ? !0 : ionic.tap.isElementTapDisabled(e)
        },
        isLabelContainingFileInput: function(e) {
            var t = w(e);
            if ("LABEL" !== t.tagName)
                return !1;
            var n = t.querySelector("input[type=file]");
            return n && n.disabled === !1 ? !0 : !1
        },
        isElementTapDisabled: function(e) {
            if (e && 1 === e.nodeType)
                for (var t = e; t; ) {
                    if ("true" == (t.dataset ? t.dataset.tapDisabled : t.getAttribute("data-tap-disabled")))
                        return !0;
                    t = t.parentElement
                }
            return !1
        },
        setTolerance: function(e, t) {
            K = e,
            Z = t
        },
        cancelClick: function() {
            G = !0
        },
        pointerCoord: function(e) {
            var t = {
                x: 0,
                y: 0
            };
            if (e) {
                var n = e.touches && e.touches.length ? e.touches : [e]
                  , i = e.changedTouches && e.changedTouches[0] || n[0];
                i && (t.x = i.clientX || i.pageX || 0,
                t.y = i.clientY || i.pageY || 0)
            }
            return t
        }
    },
    ionic.DomUtil.ready(function() {
        var e = "undefined" != typeof angular ? angular : null ;
        (!e || e && !e.scenario) && ionic.tap.register(document)
    }
    ),
    function(e, t) {
        "use strict";
        function n() {
            o = {},
            t.requestAnimationFrame(r)
        }
        function i() {
            for (var e in o)
                o[e] && (o[e].classList.add(c),
                a[e] = o[e]);
            o = {}
        }
        function r() {
            if (t.transition && t.transition.isActive)
                return void setTimeout(r, 400);
            for (var e in a)
                a[e] && (a[e].classList.remove(c),
                delete a[e])
        }
        var o = {}
          , a = {}
          , s = 0
          , c = "activated";
        t.activator = {
            start: function(e) {
                var n = t.tap.pointerCoord(e).x;
                n > 0 && 30 > n || t.requestAnimationFrame(function() {
                    if (!(t.scroll && t.scroll.isScrolling || t.tap.requiresNativeClick(e.target))) {
                        for (var n, r = e.target, a = 0; 6 > a && r && 1 === r.nodeType; a++) {
                            if (n && r.classList && r.classList.contains("item")) {
                                n = r;
                                break
                            }
                            if ("A" == r.tagName || "BUTTON" == r.tagName || r.hasAttribute("ng-click")) {
                                n = r;
                                break
                            }
                            if (r.classList.contains("button")) {
                                n = r;
                                break
                            }
                            if ("ION-CONTENT" == r.tagName || r.classList && r.classList.contains("pane") || "BODY" == r.tagName)
                                break;
                            r = r.parentElement
                        }
                        n && (o[s] = n,
                        t.requestAnimationFrame(i),
                        s = s > 29 ? 0 : s + 1)
                    }
                }
                )
            },
            end: function() {
                setTimeout(n, 200)
            }
        }
    }
    (document, ionic),
    function(e) {
        var t = 0;
        e.Utils = {
            arrayMove: function(e, t, n) {
                if (n >= e.length)
                    for (var i = n - e.length; i-- + 1; )
                        e.push(void 0);
                return e.splice(n, 0, e.splice(t, 1)[0]),
                e
            },
            proxy: function(e, t) {
                var n = Array.prototype.slice.call(arguments, 2);
                return function() {
                    return e.apply(t, n.concat(Array.prototype.slice.call(arguments)))
                }
            },
            debounce: function(e, t, n) {
                var i, r, o, a, s;
                return function() {
                    o = this,
                    r = arguments,
                    a = new Date;
                    var c = function() {
                        var l = new Date - a;
                        t > l ? i = setTimeout(c, t - l) : (i = null ,
                        n || (s = e.apply(o, r)))
                    }
                      , l = n && !i;
                    return i || (i = setTimeout(c, t)),
                    l && (s = e.apply(o, r)),
                    s
                }
            },
            throttle: function(e, t, n) {
                var i, r, o, a = null , s = 0;
                n || (n = {});
                var c = function() {
                    s = n.leading === !1 ? 0 : Date.now(),
                    a = null ,
                    o = e.apply(i, r)
                }
                ;
                return function() {
                    var l = Date.now();
                    s || n.leading !== !1 || (s = l);
                    var u = t - (l - s);
                    return i = this,
                    r = arguments,
                    0 >= u ? (clearTimeout(a),
                    a = null ,
                    s = l,
                    o = e.apply(i, r)) : a || n.trailing === !1 || (a = setTimeout(c, u)),
                    o
                }
            },
            inherit: function(t, n) {
                var i, r = this;
                i = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
                    return r.apply(this, arguments)
                }
                ,
                e.extend(i, r, n);
                var o = function() {
                    this.constructor = i
                }
                ;
                return o.prototype = r.prototype,
                i.prototype = new o,
                t && e.extend(i.prototype, t),
                i.__super__ = r.prototype,
                i
            },
            extend: function(e) {
                for (var t = Array.prototype.slice.call(arguments, 1), n = 0; n < t.length; n++) {
                    var i = t[n];
                    if (i)
                        for (var r in i)
                            e[r] = i[r]
                }
                return e
            },
            nextUid: function() {
                return "ion" + t++
            },
            disconnectScope: function(e) {
                if (e && e.$root !== e) {
                    var t = e.$parent;
                    e.$$disconnected = !0,
                    e.$broadcast("$ionic.disconnectScope", e),
                    t.$$childHead === e && (t.$$childHead = e.$$nextSibling),
                    t.$$childTail === e && (t.$$childTail = e.$$prevSibling),
                    e.$$prevSibling && (e.$$prevSibling.$$nextSibling = e.$$nextSibling),
                    e.$$nextSibling && (e.$$nextSibling.$$prevSibling = e.$$prevSibling),
                    e.$$nextSibling = e.$$prevSibling = null
                }
            },
            reconnectScope: function(e) {
                if (e && e.$root !== e && e.$$disconnected) {
                    var t = e.$parent;
                    e.$$disconnected = !1,
                    e.$broadcast("$ionic.reconnectScope", e),
                    e.$$prevSibling = t.$$childTail,
                    t.$$childHead ? (t.$$childTail.$$nextSibling = e,
                    t.$$childTail = e) : t.$$childHead = t.$$childTail = e
                }
            },
            isScopeDisconnected: function(e) {
                for (var t = e; t; ) {
                    if (t.$$disconnected)
                        return !0;
                    t = t.$parent
                }
                return !1
            }
        },
        e.inherit = e.Utils.inherit,
        e.extend = e.Utils.extend,
        e.throttle = e.Utils.throttle,
        e.proxy = e.Utils.proxy,
        e.debounce = e.Utils.debounce
    }
    (window.ionic);
    var Q, ee, te, ne, ie = 0, re = 0, oe = 0, ae = !1, se = "keyboard-open", ce = "scroll-content", le = ionic.debounce(S, 200, !0), ue = ionic.debounce(b, 100, !0);
    ionic.keyboard = {
        isOpen: !1,
        isClosing: !1,
        isOpening: !1,
        height: 0,
        isLandscape: !1,
        isInitialized: !1,
        hide: function() {
            N() && cordova.plugins.Keyboard.close(),
            Q && Q.blur()
        },
        show: function() {
            N() && cordova.plugins.Keyboard.show()
        },
        disable: function() {
            N() ? (window.removeEventListener("native.keyboardshow", ue),
            window.removeEventListener("native.keyboardhide", T)) : document.body.removeEventListener("focusout", T),
            document.body.removeEventListener("ionic.focusin", le),
            document.body.removeEventListener("focusin", le),
            window.removeEventListener("orientationchange", x),
            window.navigator.msPointerEnabled ? document.removeEventListener("MSPointerDown", _) : document.removeEventListener("touchstart", _),
            ionic.keyboard.isInitialized = !1
        },
        enable: function() {
            _()
        }
    },
    ie = V(),
    ionic.Platform.ready(function() {
        O(),
        window.addEventListener("orientationchange", x),
        setTimeout(O, 999),
        window.navigator.msPointerEnabled ? document.addEventListener("MSPointerDown", _, !1) : document.addEventListener("touchstart", _, !1)
    }
    );
    var de, fe = {};
    ionic.viewport = {
        orientation: function() {
            return window.innerWidth > window.innerHeight ? 90 : 0
        }
    },
    ionic.Platform.ready(function() {
        B(),
        window.addEventListener("orientationchange", function() {
            setTimeout(R, 1e3)
        }
        , !1)
    }
    ),
    function(e) {
        "use strict";
        e.views.View = function() {
            this.initialize.apply(this, arguments)
        }
        ,
        e.views.View.inherit = e.inherit,
        e.extend(e.views.View.prototype, {
            initialize: function() {}
        })
    }
    (window.ionic);
    var he = {
        effect: {}
    };
    !function(e) {
        var t = Date.now || function() {
            return +new Date
        }
          , n = 60
          , i = 1e3
          , r = {}
          , o = 1;
        he.effect.Animate = {
            requestAnimationFrame: function() {
                var t = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame
                  , n = !!t;
                if (t && !/requestAnimationFrame\(\)\s*\{\s*\[native code\]\s*\}/i.test(t.toString()) && (n = !1),
                n)
                    return function(e, n) {
                        t(e, n)
                    }
                    ;
                var i = 60
                  , r = {}
                  , o = 0
                  , a = 1
                  , s = null
                  , c = +new Date;
                return function(e) {
                    var t = a++;
                    return r[t] = e,
                    o++,
                    null  === s && (s = setInterval(function() {
                        var e = +new Date
                          , t = r;
                        r = {},
                        o = 0;
                        for (var n in t)
                            t.hasOwnProperty(n) && (t[n](e),
                            c = e);
                        e - c > 2500 && (clearInterval(s),
                        s = null )
                    }
                    , 1e3 / i)),
                    t
                }
            }
            (),
            stop: function(e) {
                var t = null  != r[e];
                return t && (r[e] = null ),
                t
            },
            isRunning: function(e) {
                return null  != r[e]
            },
            start: function(e, a, s, c, l, u) {
                var d = t()
                  , f = d
                  , h = 0
                  , p = 0
                  , m = o++;
                if (u || (u = document.body),
                m % 20 === 0) {
                    var v = {};
                    for (var g in r)
                        v[g] = !0;
                    r = v
                }
                var $ = function(o) {
                    var v = o !== !0
                      , g = t();
                    if (!r[m] || a && !a(m))
                        return r[m] = null ,
                        void (s && s(n - p / ((g - d) / i), m, !1));
                    if (v)
                        for (var w = Math.round((g - f) / (i / n)) - 1, y = 0; y < Math.min(w, 4); y++)
                            $(!0),
                            p++;
                    c && (h = (g - d) / c,
                    h > 1 && (h = 1));
                    var _ = l ? l(h) : h;
                    e(_, g, v) !== !1 && 1 !== h || !v ? v && (f = g,
                    he.effect.Animate.requestAnimationFrame($, u)) : (r[m] = null ,
                    s && s(n - p / ((g - d) / i), m, 1 === h || null  == c))
                }
                ;
                return r[m] = !0,
                he.effect.Animate.requestAnimationFrame($, u),
                m
            }
        }
    }
    (this),
    function(e) {
        var t = function() {}
          , n = function(e) {
            return Math.pow(e - 1, 3) + 1
        }
          , i = function(e) {
            return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
        }
        ;
        e.views.Scroll = e.views.View.inherit({
            initialize: function(n) {
                var i = this;
                i.__container = n.el,
                i.__content = n.el.firstElementChild,
                setTimeout(function() {
                    i.__container && i.__content && (i.__container.scrollTop = 0,
                    i.__content.scrollTop = 0)
                }
                ),
                i.options = {
                    scrollingX: !1,
                    scrollbarX: !0,
                    scrollingY: !0,
                    scrollbarY: !0,
                    startX: 0,
                    startY: 0,
                    wheelDampen: 6,
                    minScrollbarSizeX: 5,
                    minScrollbarSizeY: 5,
                    scrollbarsFade: !0,
                    scrollbarFadeDelay: 300,
                    scrollbarResizeFadeDelay: 1e3,
                    animating: !0,
                    animationDuration: 250,
                    decelVelocityThreshold: 4,
                    decelVelocityThresholdPaging: 4,
                    bouncing: !0,
                    locking: !0,
                    paging: !1,
                    snapping: !1,
                    zooming: !1,
                    minZoom: .5,
                    maxZoom: 3,
                    speedMultiplier: 1,
                    deceleration: .97,
                    preventDefault: !1,
                    scrollingComplete: t,
                    penetrationDeceleration: .03,
                    penetrationAcceleration: .08,
                    scrollEventInterval: 10,
                    freeze: !1,
                    getContentWidth: function() {
                        return Math.max(i.__content.scrollWidth, i.__content.offsetWidth)
                    },
                    getContentHeight: function() {
                        return Math.max(i.__content.scrollHeight, i.__content.offsetHeight + 2 * i.__content.offsetTop)
                    }
                };
                for (var r in n)
                    i.options[r] = n[r];
                i.hintResize = e.debounce(function() {
                    i.resize()
                }
                , 1e3, !0),
                i.onScroll = function() {
                    e.scroll.isScrolling ? (clearTimeout(i.scrollTimer),
                    i.scrollTimer = setTimeout(i.setScrollStop, 80)) : setTimeout(i.setScrollStart, 50)
                }
                ,
                i.freeze = function(e) {
                    return arguments.length && (i.options.freeze = e),
                    i.options.freeze
                }
                ,
                i.setScrollStart = function() {
                    e.scroll.isScrolling = Math.abs(e.scroll.lastTop - i.__scrollTop) > 1,
                    clearTimeout(i.scrollTimer),
                    i.scrollTimer = setTimeout(i.setScrollStop, 80)
                }
                ,
                i.setScrollStop = function() {
                    e.scroll.isScrolling = !1,
                    e.scroll.lastTop = i.__scrollTop
                }
                ,
                i.triggerScrollEvent = e.throttle(function() {
                    i.onScroll(),
                    e.trigger("scroll", {
                        scrollTop: i.__scrollTop,
                        scrollLeft: i.__scrollLeft,
                        target: i.__container
                    })
                }
                , i.options.scrollEventInterval),
                i.triggerScrollEndEvent = function() {
                    e.trigger("scrollend", {
                        scrollTop: i.__scrollTop,
                        scrollLeft: i.__scrollLeft,
                        target: i.__container
                    })
                }
                ,
                i.__scrollLeft = i.options.startX,
                i.__scrollTop = i.options.startY,
                i.__callback = i.getRenderFn(),
                i.__initEventHandlers(),
                i.__createScrollbars()
            },
            run: function() {
                this.resize(),
                this.__fadeScrollbars("out", this.options.scrollbarResizeFadeDelay)
            },
            __isSingleTouch: !1,
            __isTracking: !1,
            __didDecelerationComplete: !1,
            __isGesturing: !1,
            __isDragging: !1,
            __isDecelerating: !1,
            __isAnimating: !1,
            __clientLeft: 0,
            __clientTop: 0,
            __clientWidth: 0,
            __clientHeight: 0,
            __contentWidth: 0,
            __contentHeight: 0,
            __snapWidth: 100,
            __snapHeight: 100,
            __refreshHeight: null ,
            __refreshActive: !1,
            __refreshActivate: null ,
            __refreshDeactivate: null ,
            __refreshStart: null ,
            __zoomLevel: 1,
            __scrollLeft: 0,
            __scrollTop: 0,
            __maxScrollLeft: 0,
            __maxScrollTop: 0,
            __scheduledLeft: 0,
            __scheduledTop: 0,
            __scheduledZoom: 0,
            __lastTouchLeft: null ,
            __lastTouchTop: null ,
            __lastTouchMove: null ,
            __positions: null ,
            __minDecelerationScrollLeft: null ,
            __minDecelerationScrollTop: null ,
            __maxDecelerationScrollLeft: null ,
            __maxDecelerationScrollTop: null ,
            __decelerationVelocityX: null ,
            __decelerationVelocityY: null ,
            __transformProperty: null ,
            __perspectiveProperty: null ,
            __indicatorX: null ,
            __indicatorY: null ,
            __scrollbarFadeTimeout: null ,
            __didWaitForSize: null ,
            __sizerTimeout: null ,
            __initEventHandlers: function() {
                function t(e) {
                    return e.touches && e.touches.length ? e.touches : [{
                        pageX: e.pageX,
                        pageY: e.pageY
                    }]
                }
                var n, i = this, r = i.__container;
                if (i.scrollChildIntoView = function(t) {
                    var o = r.getBoundingClientRect().bottom;
                    n = r.offsetHeight;
                    var a = i.isShrunkForKeyboard
                      , s = r.parentNode.classList.contains("modal")
                      , c = s && window.innerWidth >= 680;
                    if (!a) {
                        if (e.Platform.isIOS() || e.Platform.isFullScreen || c) {
                            var l = t.detail.viewportHeight - o
                              , u = Math.max(0, t.detail.keyboardHeight - l);
                            e.requestAnimationFrame(function() {
                                n -= u,
                                r.style.height = n + "px",
                                r.style.overflow = "visible",
                                i.resize()
                            }
                            )
                        }
                        i.isShrunkForKeyboard = !0
                    }
                    t.detail.isElementUnderKeyboard && e.requestAnimationFrame(function() {
                        r.scrollTop = 0,
                        i.isShrunkForKeyboard && !a && (o = r.getBoundingClientRect().bottom);
                        var s = .5 * n
                          , c = (t.detail.elementBottom + t.detail.elementTop) / 2
                          , l = c - o
                          , u = l + s;
                        u > 0 && (e.Platform.isIOS() && e.tap.cloneFocusedInput(r, i),
                        i.scrollBy(0, u, !0),
                        i.onScroll())
                    }
                    ),
                    t.stopPropagation()
                }
                ,
                i.resetScrollView = function() {
                    i.isShrunkForKeyboard && (i.isShrunkForKeyboard = !1,
                    r.style.height = "",
                    r.style.overflow = ""),
                    i.resize()
                }
                ,
                r.addEventListener("scrollChildIntoView", i.scrollChildIntoView),
                document.addEventListener("resetScrollView", i.resetScrollView),
                i.touchStart = function(n) {
                    if (i.startCoordinates = e.tap.pointerCoord(n),
                    !e.tap.ignoreScrollStart(n)) {
                        if (i.__isDown = !0,
                        e.tap.containsOrIsTextInput(n.target) || "SELECT" === n.target.tagName)
                            return void (i.__hasStarted = !1);
                        i.__isSelectable = !0,
                        i.__enableScrollY = !0,
                        i.__hasStarted = !0,
                        i.doTouchStart(t(n), n.timeStamp),
                        n.preventDefault()
                    }
                }
                ,
                i.touchMove = function(n) {
                    if (!(i.options.freeze || !i.__isDown || !i.__isDown && n.defaultPrevented || "TEXTAREA" === n.target.tagName && n.target.parentElement.querySelector(":focus"))) {
                        if (!i.__hasStarted && (e.tap.containsOrIsTextInput(n.target) || "SELECT" === n.target.tagName))
                            return i.__hasStarted = !0,
                            i.doTouchStart(t(n), n.timeStamp),
                            void n.preventDefault();
                        if (i.startCoordinates) {
                            var o = e.tap.pointerCoord(n);
                            i.__isSelectable && e.tap.isTextInput(n.target) && Math.abs(i.startCoordinates.x - o.x) > 20 && (i.__enableScrollY = !1,
                            i.__isSelectable = !0),
                            i.__enableScrollY && Math.abs(i.startCoordinates.y - o.y) > 10 && (i.__isSelectable = !1,
                            e.tap.cloneFocusedInput(r, i))
                        }
                        i.doTouchMove(t(n), n.timeStamp, n.scale),
                        i.__isDown = !0
                    }
                }
                ,
                i.touchMoveBubble = function(e) {
                    i.__isDown && i.options.preventDefault && e.preventDefault()
                }
                ,
                i.touchEnd = function(t) {
                    i.__isDown && (i.doTouchEnd(t, t.timeStamp),
                    i.__isDown = !1,
                    i.__hasStarted = !1,
                    i.__isSelectable = !0,
                    i.__enableScrollY = !0,
                    i.__isDragging || i.__isDecelerating || i.__isAnimating || e.tap.removeClonedInputs(r, i))
                }
                ,
                i.mouseWheel = e.animationFrameThrottle(function(t) {
                    var n = e.DomUtil.getParentOrSelfWithClass(t.target, "ionic-scroll");
                    i.options.freeze || n !== i.__container || (i.hintResize(),
                    i.scrollBy((t.wheelDeltaX || t.deltaX || 0) / i.options.wheelDampen, (-t.wheelDeltaY || t.deltaY || 0) / i.options.wheelDampen),
                    i.__fadeScrollbars("in"),
                    clearTimeout(i.__wheelHideBarTimeout),
                    i.__wheelHideBarTimeout = setTimeout(function() {
                        i.__fadeScrollbars("out")
                    }
                    , 100))
                }
                ),
                "ontouchstart" in window)
                    r.addEventListener("touchstart", i.touchStart, !1),
                    i.options.preventDefault && r.addEventListener("touchmove", i.touchMoveBubble, !1),
                    document.addEventListener("touchmove", i.touchMove, !1),
                    document.addEventListener("touchend", i.touchEnd, !1),
                    document.addEventListener("touchcancel", i.touchEnd, !1);
                else if (window.navigator.pointerEnabled)
                    r.addEventListener("pointerdown", i.touchStart, !1),
                    i.options.preventDefault && r.addEventListener("pointermove", i.touchMoveBubble, !1),
                    document.addEventListener("pointermove", i.touchMove, !1),
                    document.addEventListener("pointerup", i.touchEnd, !1),
                    document.addEventListener("pointercancel", i.touchEnd, !1),
                    document.addEventListener("wheel", i.mouseWheel, !1);
                else if (window.navigator.msPointerEnabled)
                    r.addEventListener("MSPointerDown", i.touchStart, !1),
                    i.options.preventDefault && r.addEventListener("MSPointerMove", i.touchMoveBubble, !1),
                    document.addEventListener("MSPointerMove", i.touchMove, !1),
                    document.addEventListener("MSPointerUp", i.touchEnd, !1),
                    document.addEventListener("MSPointerCancel", i.touchEnd, !1),
                    document.addEventListener("wheel", i.mouseWheel, !1);
                else {
                    var o = !1;
                    i.mouseDown = function(n) {
                        e.tap.ignoreScrollStart(n) || "SELECT" === n.target.tagName || (i.doTouchStart(t(n), n.timeStamp),
                        e.tap.isTextInput(n.target) || n.preventDefault(),
                        o = !0)
                    }
                    ,
                    i.mouseMove = function(e) {
                        i.options.freeze || !o || !o && e.defaultPrevented || (i.doTouchMove(t(e), e.timeStamp),
                        o = !0)
                    }
                    ,
                    i.mouseMoveBubble = function(e) {
                        o && i.options.preventDefault && e.preventDefault()
                    }
                    ,
                    i.mouseUp = function(e) {
                        o && (i.doTouchEnd(e, e.timeStamp),
                        o = !1)
                    }
                    ,
                    r.addEventListener("mousedown", i.mouseDown, !1),
                    i.options.preventDefault && r.addEventListener("mousemove", i.mouseMoveBubble, !1),
                    document.addEventListener("mousemove", i.mouseMove, !1),
                    document.addEventListener("mouseup", i.mouseUp, !1),
                    document.addEventListener("mousewheel", i.mouseWheel, !1),
                    document.addEventListener("wheel", i.mouseWheel, !1)
                }
            },
            __cleanup: function() {
                var n = this
                  , i = n.__container;
                i.removeEventListener("touchstart", n.touchStart),
                i.removeEventListener("touchmove", n.touchMoveBubble),
                document.removeEventListener("touchmove", n.touchMove),
                document.removeEventListener("touchend", n.touchEnd),
                document.removeEventListener("touchcancel", n.touchEnd),
                i.removeEventListener("pointerdown", n.touchStart),
                i.removeEventListener("pointermove", n.touchMoveBubble),
                document.removeEventListener("pointermove", n.touchMove),
                document.removeEventListener("pointerup", n.touchEnd),
                document.removeEventListener("pointercancel", n.touchEnd),
                i.removeEventListener("MSPointerDown", n.touchStart),
                i.removeEventListener("MSPointerMove", n.touchMoveBubble),
                document.removeEventListener("MSPointerMove", n.touchMove),
                document.removeEventListener("MSPointerUp", n.touchEnd),
                document.removeEventListener("MSPointerCancel", n.touchEnd),
                i.removeEventListener("mousedown", n.mouseDown),
                i.removeEventListener("mousemove", n.mouseMoveBubble),
                document.removeEventListener("mousemove", n.mouseMove),
                document.removeEventListener("mouseup", n.mouseUp),
                document.removeEventListener("mousewheel", n.mouseWheel),
                document.removeEventListener("wheel", n.mouseWheel),
                i.removeEventListener("scrollChildIntoView", n.scrollChildIntoView),
                document.removeEventListener("resetScrollView", n.resetScrollView),
                e.tap.removeClonedInputs(i, n),
                delete n.__container,
                delete n.__content,
                delete n.__indicatorX,
                delete n.__indicatorY,
                delete n.options.el,
                n.__callback = n.scrollChildIntoView = n.resetScrollView = t,
                n.mouseMove = n.mouseDown = n.mouseUp = n.mouseWheel = n.touchStart = n.touchMove = n.touchEnd = n.touchCancel = t,
                n.resize = n.scrollTo = n.zoomTo = n.__scrollingComplete = t,
                i = null
            },
            __createScrollbar: function(e) {
                var t = document.createElement("div")
                  , n = document.createElement("div");
                return n.className = "scroll-bar-indicator scroll-bar-fade-out",
                "h" == e ? t.className = "scroll-bar scroll-bar-h" : t.className = "scroll-bar scroll-bar-v",
                t.appendChild(n),
                t
            },
            __createScrollbars: function() {
                var e, t, n = this;
                n.options.scrollingX && (e = {
                    el: n.__createScrollbar("h"),
                    sizeRatio: 1
                },
                e.indicator = e.el.children[0],
                n.options.scrollbarX && n.__container.appendChild(e.el),
                n.__indicatorX = e),
                n.options.scrollingY && (t = {
                    el: n.__createScrollbar("v"),
                    sizeRatio: 1
                },
                t.indicator = t.el.children[0],
                n.options.scrollbarY && n.__container.appendChild(t.el),
                n.__indicatorY = t)
            },
            __resizeScrollbars: function() {
                var t = this;
                if (t.__indicatorX) {
                    var n = Math.max(Math.round(t.__clientWidth * t.__clientWidth / t.__contentWidth), 20);
                    n > t.__contentWidth && (n = 0),
                    n !== t.__indicatorX.size && e.requestAnimationFrame(function() {
                        t.__indicatorX.indicator.style.width = n + "px"
                    }
                    ),
                    t.__indicatorX.size = n,
                    t.__indicatorX.minScale = t.options.minScrollbarSizeX / n,
                    t.__indicatorX.maxPos = t.__clientWidth - n,
                    t.__indicatorX.sizeRatio = t.__maxScrollLeft ? t.__indicatorX.maxPos / t.__maxScrollLeft : 1
                }
                if (t.__indicatorY) {
                    var i = Math.max(Math.round(t.__clientHeight * t.__clientHeight / t.__contentHeight), 20);
                    i > t.__contentHeight && (i = 0),
                    i !== t.__indicatorY.size && e.requestAnimationFrame(function() {
                        t.__indicatorY && (t.__indicatorY.indicator.style.height = i + "px")
                    }
                    ),
                    t.__indicatorY.size = i,
                    t.__indicatorY.minScale = t.options.minScrollbarSizeY / i,
                    t.__indicatorY.maxPos = t.__clientHeight - i,
                    t.__indicatorY.sizeRatio = t.__maxScrollTop ? t.__indicatorY.maxPos / t.__maxScrollTop : 1
                }
            },
            __repositionScrollbars: function() {
                var e, t, n, i, r, o, a = this, s = 0, c = 0;
                if (a.__indicatorX) {
                    a.__indicatorY && (s = 10),
                    r = Math.round(a.__indicatorX.sizeRatio * a.__scrollLeft) || 0,
                    n = a.__scrollLeft - (a.__maxScrollLeft - s),
                    a.__scrollLeft < 0 ? (t = Math.max(a.__indicatorX.minScale, (a.__indicatorX.size - Math.abs(a.__scrollLeft)) / a.__indicatorX.size),
                    r = 0,
                    a.__indicatorX.indicator.style[a.__transformOriginProperty] = "left center") : n > 0 ? (t = Math.max(a.__indicatorX.minScale, (a.__indicatorX.size - n) / a.__indicatorX.size),
                    r = a.__indicatorX.maxPos - s,
                    a.__indicatorX.indicator.style[a.__transformOriginProperty] = "right center") : (r = Math.min(a.__maxScrollLeft, Math.max(0, r)),
                    t = 1);
                    var l = "translate3d(" + r + "px, 0, 0) scaleX(" + t + ")";
                    a.__indicatorX.transformProp !== l && (a.__indicatorX.indicator.style[a.__transformProperty] = l,
                    a.__indicatorX.transformProp = l)
                }
                if (a.__indicatorY) {
                    o = Math.round(a.__indicatorY.sizeRatio * a.__scrollTop) || 0,
                    a.__indicatorX && (c = 10),
                    i = a.__scrollTop - (a.__maxScrollTop - c),
                    a.__scrollTop < 0 ? (e = Math.max(a.__indicatorY.minScale, (a.__indicatorY.size - Math.abs(a.__scrollTop)) / a.__indicatorY.size),
                    o = 0,
                    "center top" !== a.__indicatorY.originProp && (a.__indicatorY.indicator.style[a.__transformOriginProperty] = "center top",
                    a.__indicatorY.originProp = "center top")) : i > 0 ? (e = Math.max(a.__indicatorY.minScale, (a.__indicatorY.size - i) / a.__indicatorY.size),
                    o = a.__indicatorY.maxPos - c,
                    "center bottom" !== a.__indicatorY.originProp && (a.__indicatorY.indicator.style[a.__transformOriginProperty] = "center bottom",
                    a.__indicatorY.originProp = "center bottom")) : (o = Math.min(a.__maxScrollTop, Math.max(0, o)),
                    e = 1);
                    var u = "translate3d(0," + o + "px, 0) scaleY(" + e + ")";
                    a.__indicatorY.transformProp !== u && (a.__indicatorY.indicator.style[a.__transformProperty] = u,
                    a.__indicatorY.transformProp = u)
                }
            },
            __fadeScrollbars: function(e, t) {
                var n = this;
                if (n.options.scrollbarsFade) {
                    var i = "scroll-bar-fade-out";
                    n.options.scrollbarsFade === !0 && (clearTimeout(n.__scrollbarFadeTimeout),
                    "in" == e ? (n.__indicatorX && n.__indicatorX.indicator.classList.remove(i),
                    n.__indicatorY && n.__indicatorY.indicator.classList.remove(i)) : n.__scrollbarFadeTimeout = setTimeout(function() {
                        n.__indicatorX && n.__indicatorX.indicator.classList.add(i),
                        n.__indicatorY && n.__indicatorY.indicator.classList.add(i)
                    }
                    , t || n.options.scrollbarFadeDelay))
                }
            },
            __scrollingComplete: function() {
                this.options.scrollingComplete(),
                e.tap.removeClonedInputs(this.__container, this),
                this.__fadeScrollbars("out")
            },
            resize: function(e) {
                var t = this;
                t.__container && t.options && t.setDimensions(t.__container.clientWidth, t.__container.clientHeight, t.options.getContentWidth(), t.options.getContentHeight(), e)
            },
            getRenderFn: function() {
                var e, t = this, n = t.__content, i = document.documentElement.style;
                "MozAppearance" in i ? e = "gecko" : "WebkitAppearance" in i ? e = "webkit" : "string" == typeof navigator.cpuClass && (e = "trident");
                var r, o = {
                    trident: "ms",
                    gecko: "Moz",
                    webkit: "Webkit",
                    presto: "O"
                }[e], a = document.createElement("div"), s = o + "Perspective", c = o + "Transform", l = o + "TransformOrigin";
                return t.__perspectiveProperty = c,
                t.__transformProperty = c,
                t.__transformOriginProperty = l,
                a.style[s] !== r ? function(e, i, r, o) {
                    var a = "translate3d(" + -e + "px," + -i + "px,0) scale(" + r + ")";
                    a !== t.contentTransform && (n.style[c] = a,
                    t.contentTransform = a),
                    t.__repositionScrollbars(),
                    o || t.triggerScrollEvent()
                }
                 : a.style[c] !== r ? function(e, i, r, o) {
                    n.style[c] = "translate(" + -e + "px," + -i + "px) scale(" + r + ")",
                    t.__repositionScrollbars(),
                    o || t.triggerScrollEvent()
                }
                 : function(e, i, r, o) {
                    n.style.marginLeft = e ? -e / r + "px" : "",
                    n.style.marginTop = i ? -i / r + "px" : "",
                    n.style.zoom = r || "",
                    t.__repositionScrollbars(),
                    o || t.triggerScrollEvent()
                }
            },
            setDimensions: function(e, t, n, i, r) {
                var o = this;
                (e || t || n || i) && (e === +e && (o.__clientWidth = e),
                t === +t && (o.__clientHeight = t),
                n === +n && (o.__contentWidth = n),
                i === +i && (o.__contentHeight = i),
                o.__computeScrollMax(),
                o.__resizeScrollbars(),
                r || o.scrollTo(o.__scrollLeft, o.__scrollTop, !0, null , !0))
            },
            setPosition: function(e, t) {
                this.__clientLeft = e || 0,
                this.__clientTop = t || 0
            },
            setSnapSize: function(e, t) {
                this.__snapWidth = e,
                this.__snapHeight = t
            },
            activatePullToRefresh: function(t, n) {
                var i = this;
                i.__refreshHeight = t,
                i.__refreshActivate = function() {
                    e.requestAnimationFrame(n.activate)
                }
                ,
                i.__refreshDeactivate = function() {
                    e.requestAnimationFrame(n.deactivate)
                }
                ,
                i.__refreshStart = function() {
                    e.requestAnimationFrame(n.start)
                }
                ,
                i.__refreshShow = function() {
                    e.requestAnimationFrame(n.show)
                }
                ,
                i.__refreshHide = function() {
                    e.requestAnimationFrame(n.hide)
                }
                ,
                i.__refreshTail = function() {
                    e.requestAnimationFrame(n.tail)
                }
                ,
                i.__refreshTailTime = 100,
                i.__minSpinTime = 600
            },
            triggerPullToRefresh: function() {
                this.__publish(this.__scrollLeft, -this.__refreshHeight, this.__zoomLevel, !0);
                var e = new Date;
                this.refreshStartTime = e.getTime(),
                this.__refreshStart && this.__refreshStart()
            },
            finishPullToRefresh: function() {
                var e = this
                  , t = new Date
                  , n = 0;
                e.refreshStartTime + e.__minSpinTime > t.getTime() && (n = e.refreshStartTime + e.__minSpinTime - t.getTime()),
                setTimeout(function() {
                    e.__refreshTail && e.__refreshTail(),
                    setTimeout(function() {
                        e.__refreshActive = !1,
                        e.__refreshDeactivate && e.__refreshDeactivate(),
                        e.__refreshHide && e.__refreshHide(),
                        e.scrollTo(e.__scrollLeft, e.__scrollTop, !0)
                    }
                    , e.__refreshTailTime)
                }
                , n)
            },
            getValues: function() {
                return {
                    left: this.__scrollLeft,
                    top: this.__scrollTop,
                    zoom: this.__zoomLevel
                }
            },
            getScrollMax: function() {
                return {
                    left: this.__maxScrollLeft,
                    top: this.__maxScrollTop
                }
            },
            zoomTo: function(e, t, n, i) {
                var r = this;
                if (!r.options.zooming)
                    throw new Error("Zooming is not enabled!");
                r.__isDecelerating && (he.effect.Animate.stop(r.__isDecelerating),
                r.__isDecelerating = !1);
                var o = r.__zoomLevel;
                null  == n && (n = r.__clientWidth / 2),
                null  == i && (i = r.__clientHeight / 2),
                e = Math.max(Math.min(e, r.options.maxZoom), r.options.minZoom),
                r.__computeScrollMax(e);
                var a = (n + r.__scrollLeft) * e / o - n
                  , s = (i + r.__scrollTop) * e / o - i;
                a > r.__maxScrollLeft ? a = r.__maxScrollLeft : 0 > a && (a = 0),
                s > r.__maxScrollTop ? s = r.__maxScrollTop : 0 > s && (s = 0),
                r.__publish(a, s, e, t)
            },
            zoomBy: function(e, t, n, i) {
                this.zoomTo(this.__zoomLevel * e, t, n, i)
            },
            scrollTo: function(e, t, n, i, r) {
                var o = this;
                if (o.__isDecelerating && (he.effect.Animate.stop(o.__isDecelerating),
                o.__isDecelerating = !1),
                null  != i && i !== o.__zoomLevel) {
                    if (!o.options.zooming)
                        throw new Error("Zooming is not enabled!");
                    e *= i,
                    t *= i,
                    o.__computeScrollMax(i)
                } else
                    i = o.__zoomLevel;
                o.options.scrollingX ? o.options.paging ? e = Math.round(e / o.__clientWidth) * o.__clientWidth : o.options.snapping && (e = Math.round(e / o.__snapWidth) * o.__snapWidth) : e = o.__scrollLeft,
                o.options.scrollingY ? o.options.paging ? t = Math.round(t / o.__clientHeight) * o.__clientHeight : o.options.snapping && (t = Math.round(t / o.__snapHeight) * o.__snapHeight) : t = o.__scrollTop,
                e = Math.max(Math.min(o.__maxScrollLeft, e), 0),
                t = Math.max(Math.min(o.__maxScrollTop, t), 0),
                e === o.__scrollLeft && t === o.__scrollTop && (n = !1),
                o.__publish(e, t, i, n, r)
            },
            scrollBy: function(e, t, n) {
                var i = this
                  , r = i.__isAnimating ? i.__scheduledLeft : i.__scrollLeft
                  , o = i.__isAnimating ? i.__scheduledTop : i.__scrollTop;
                i.scrollTo(r + (e || 0), o + (t || 0), n)
            },
            doMouseZoom: function(e, t, n, i) {
                var r = e > 0 ? .97 : 1.03;
                return this.zoomTo(this.__zoomLevel * r, !1, n - this.__clientLeft, i - this.__clientTop)
            },
            doTouchStart: function(e, t) {
                var n = this;
                n.__decStopped = !(!n.__isDecelerating && !n.__isAnimating),
                n.hintResize(),
                t instanceof Date && (t = t.valueOf()),
                "number" != typeof t && (t = Date.now()),
                n.__interruptedAnimation = !0,
                n.__isDecelerating && (he.effect.Animate.stop(n.__isDecelerating),
                n.__isDecelerating = !1,
                n.__interruptedAnimation = !0),
                n.__isAnimating && (he.effect.Animate.stop(n.__isAnimating),
                n.__isAnimating = !1,
                n.__interruptedAnimation = !0);
                var i, r, o = 1 === e.length;
                o ? (i = e[0].pageX,
                r = e[0].pageY) : (i = Math.abs(e[0].pageX + e[1].pageX) / 2,
                r = Math.abs(e[0].pageY + e[1].pageY) / 2),
                n.__initialTouchLeft = i,
                n.__initialTouchTop = r,
                n.__initialTouches = e,
                n.__zoomLevelStart = n.__zoomLevel,
                n.__lastTouchLeft = i,
                n.__lastTouchTop = r,
                n.__lastTouchMove = t,
                n.__lastScale = 1,
                n.__enableScrollX = !o && n.options.scrollingX,
                n.__enableScrollY = !o && n.options.scrollingY,
                n.__isTracking = !0,
                n.__didDecelerationComplete = !1,
                n.__isDragging = !o,
                n.__isSingleTouch = o,
                n.__positions = []
            },
            doTouchMove: function(e, t, n) {
                t instanceof Date && (t = t.valueOf()),
                "number" != typeof t && (t = Date.now());
                var i = this;
                if (i.__isTracking) {
                    var r, o;
                    2 === e.length ? (r = Math.abs(e[0].pageX + e[1].pageX) / 2,
                    o = Math.abs(e[0].pageY + e[1].pageY) / 2,
                    !n && i.options.zooming && (n = i.__getScale(i.__initialTouches, e))) : (r = e[0].pageX,
                    o = e[0].pageY);
                    var a = i.__positions;
                    if (i.__isDragging) {
                        i.__decStopped = !1;
                        var s = r - i.__lastTouchLeft
                          , c = o - i.__lastTouchTop
                          , l = i.__scrollLeft
                          , u = i.__scrollTop
                          , d = i.__zoomLevel;
                        if (null  != n && i.options.zooming) {
                            var f = d;
                            if (d = d / i.__lastScale * n,
                            d = Math.max(Math.min(d, i.options.maxZoom), i.options.minZoom),
                            f !== d) {
                                var h = r - i.__clientLeft
                                  , p = o - i.__clientTop;
                                l = (h + l) * d / f - h,
                                u = (p + u) * d / f - p,
                                i.__computeScrollMax(d)
                            }
                        }
                        if (i.__enableScrollX) {
                            l -= s * i.options.speedMultiplier;
                            var m = i.__maxScrollLeft;
                            (l > m || 0 > l) && (i.options.bouncing ? l += s / 2 * i.options.speedMultiplier : l = l > m ? m : 0)
                        }
                        if (i.__enableScrollY) {
                            u -= c * i.options.speedMultiplier;
                            var v = i.__maxScrollTop;
                            u > v || 0 > u ? i.options.bouncing || i.__refreshHeight && 0 > u ? (u += c / 2 * i.options.speedMultiplier,
                            i.__enableScrollX || null  == i.__refreshHeight || (0 > u ? (i.__refreshHidden = !1,
                            i.__refreshShow()) : (i.__refreshHide(),
                            i.__refreshHidden = !0),
                            !i.__refreshActive && u <= -i.__refreshHeight ? (i.__refreshActive = !0,
                            i.__refreshActivate && i.__refreshActivate()) : i.__refreshActive && u > -i.__refreshHeight && (i.__refreshActive = !1,
                            i.__refreshDeactivate && i.__refreshDeactivate()))) : u = u > v ? v : 0 : i.__refreshHeight && !i.__refreshHidden && (i.__refreshHide(),
                            i.__refreshHidden = !0)
                        }
                        a.length > 60 && a.splice(0, 30),
                        a.push(l, u, t),
                        i.__publish(l, u, d)
                    } else {
                        var g = i.options.locking ? 3 : 0
                          , $ = 5
                          , w = Math.abs(r - i.__initialTouchLeft)
                          , y = Math.abs(o - i.__initialTouchTop);
                        i.__enableScrollX = i.options.scrollingX && w >= g,
                        i.__enableScrollY = i.options.scrollingY && y >= g,
                        a.push(i.__scrollLeft, i.__scrollTop, t),
                        i.__isDragging = (i.__enableScrollX || i.__enableScrollY) && (w >= $ || y >= $),
                        i.__isDragging && (i.__interruptedAnimation = !1,
                        i.__fadeScrollbars("in"))
                    }
                    i.__lastTouchLeft = r,
                    i.__lastTouchTop = o,
                    i.__lastTouchMove = t,
                    i.__lastScale = n
                }
            },
            doTouchEnd: function(t, n) {
                n instanceof Date && (n = n.valueOf()),
                "number" != typeof n && (n = Date.now());
                var i = this;
                if (i.__isTracking) {
                    if (i.__isTracking = !1,
                    i.__isDragging)
                        if (i.__isDragging = !1,
                        i.__isSingleTouch && i.options.animating && n - i.__lastTouchMove <= 100) {
                            for (var r = i.__positions, o = r.length - 1, a = o, s = o; s > 0 && r[s] > i.__lastTouchMove - 100; s -= 3)
                                a = s;
                            if (a !== o) {
                                var c = r[o] - r[a]
                                  , l = i.__scrollLeft - r[a - 2]
                                  , u = i.__scrollTop - r[a - 1];
                                i.__decelerationVelocityX = l / c * (1e3 / 60),
                                i.__decelerationVelocityY = u / c * (1e3 / 60);
                                var d = i.options.paging || i.options.snapping ? i.options.decelVelocityThresholdPaging : i.options.decelVelocityThreshold;
                                (Math.abs(i.__decelerationVelocityX) > d || Math.abs(i.__decelerationVelocityY) > d) && (i.__refreshActive || i.__startDeceleration(n))
                            } else
                                i.__scrollingComplete()
                        } else
                            n - i.__lastTouchMove > 100 && i.__scrollingComplete();
                    else
                        i.__decStopped && (t.isTapHandled = !0,
                        i.__decStopped = !1);
                    if (!i.__isDecelerating)
                        if (i.__refreshActive && i.__refreshStart) {
                            i.__publish(i.__scrollLeft, -i.__refreshHeight, i.__zoomLevel, !0);
                            var f = new Date;
                            i.refreshStartTime = f.getTime(),
                            i.__refreshStart && i.__refreshStart(),
                            e.Platform.isAndroid() || i.__startDeceleration()
                        } else
                            (i.__interruptedAnimation || i.__isDragging) && i.__scrollingComplete(),
                            i.scrollTo(i.__scrollLeft, i.__scrollTop, !0, i.__zoomLevel),
                            i.__refreshActive && (i.__refreshActive = !1,
                            i.__refreshDeactivate && i.__refreshDeactivate());
                    i.__positions.length = 0
                }
            },
            __publish: function(e, t, r, o, a) {
                var s = this
                  , c = s.__isAnimating;
                if (c && (he.effect.Animate.stop(c),
                s.__isAnimating = !1),
                o && s.options.animating) {
                    s.__scheduledLeft = e,
                    s.__scheduledTop = t,
                    s.__scheduledZoom = r;
                    var l = s.__scrollLeft
                      , u = s.__scrollTop
                      , d = s.__zoomLevel
                      , f = e - l
                      , h = t - u
                      , p = r - d
                      , m = function(e, t, n) {
                        n && (s.__scrollLeft = l + f * e,
                        s.__scrollTop = u + h * e,
                        s.__zoomLevel = d + p * e,
                        s.__callback && s.__callback(s.__scrollLeft, s.__scrollTop, s.__zoomLevel, a))
                    }
                      , v = function(e) {
                        return s.__isAnimating === e
                    }
                      , g = function(e, t, n) {
                        t === s.__isAnimating && (s.__isAnimating = !1),
                        (s.__didDecelerationComplete || n) && s.__scrollingComplete(),
                        s.options.zooming && s.__computeScrollMax()
                    }
                    ;
                    s.__isAnimating = he.effect.Animate.start(m, v, g, s.options.animationDuration, c ? n : i)
                } else
                    s.__scheduledLeft = s.__scrollLeft = e,
                    s.__scheduledTop = s.__scrollTop = t,
                    s.__scheduledZoom = s.__zoomLevel = r,
                    s.__callback && s.__callback(e, t, r, a),
                    s.options.zooming && s.__computeScrollMax()
            },
            __computeScrollMax: function(e) {
                var t = this;
                null  == e && (e = t.__zoomLevel),
                t.__maxScrollLeft = Math.max(t.__contentWidth * e - t.__clientWidth, 0),
                t.__maxScrollTop = Math.max(t.__contentHeight * e - t.__clientHeight, 0),
                t.__didWaitForSize || t.__maxScrollLeft || t.__maxScrollTop || (t.__didWaitForSize = !0,
                t.__waitForSize())
            },
            __waitForSize: function() {
                var e = this;
                clearTimeout(e.__sizerTimeout);
                var t = function() {
                    e.resize(!0)
                }
                ;
                t(),
                e.__sizerTimeout = setTimeout(t, 500)
            },
            __startDeceleration: function() {
                var e = this;
                if (e.options.paging) {
                    var t = Math.max(Math.min(e.__scrollLeft, e.__maxScrollLeft), 0)
                      , n = Math.max(Math.min(e.__scrollTop, e.__maxScrollTop), 0)
                      , i = e.__clientWidth
                      , r = e.__clientHeight;
                    e.__minDecelerationScrollLeft = Math.floor(t / i) * i,
                    e.__minDecelerationScrollTop = Math.floor(n / r) * r,
                    e.__maxDecelerationScrollLeft = Math.ceil(t / i) * i,
                    e.__maxDecelerationScrollTop = Math.ceil(n / r) * r
                } else
                    e.__minDecelerationScrollLeft = 0,
                    e.__minDecelerationScrollTop = 0,
                    e.__maxDecelerationScrollLeft = e.__maxScrollLeft,
                    e.__maxDecelerationScrollTop = e.__maxScrollTop,
                    e.__refreshActive && (e.__minDecelerationScrollTop = -1 * e.__refreshHeight);
                var o = function(t, n, i) {
                    e.__stepThroughDeceleration(i)
                }
                ;
                e.__minVelocityToKeepDecelerating = e.options.snapping ? 4 : .1;
                var a = function() {
                    var t = Math.abs(e.__decelerationVelocityX) >= e.__minVelocityToKeepDecelerating || Math.abs(e.__decelerationVelocityY) >= e.__minVelocityToKeepDecelerating;
                    return t || (e.__didDecelerationComplete = !0,
                    e.options.bouncing && !e.__refreshActive && e.scrollTo(Math.min(Math.max(e.__scrollLeft, 0), e.__maxScrollLeft), Math.min(Math.max(e.__scrollTop, 0), e.__maxScrollTop), e.__refreshActive)),
                    t
                }
                  , s = function() {
                    e.__isDecelerating = !1,
                    e.__didDecelerationComplete && e.__scrollingComplete(),
                    e.options.paging && e.scrollTo(e.__scrollLeft, e.__scrollTop, e.options.snapping)
                }
                ;
                e.__isDecelerating = he.effect.Animate.start(o, a, s)
            },
            __stepThroughDeceleration: function(e) {
                var t = this
                  , n = t.__scrollLeft + t.__decelerationVelocityX
                  , i = t.__scrollTop + t.__decelerationVelocityY;
                if (!t.options.bouncing) {
                    var r = Math.max(Math.min(t.__maxDecelerationScrollLeft, n), t.__minDecelerationScrollLeft);
                    r !== n && (n = r,
                    t.__decelerationVelocityX = 0);
                    var o = Math.max(Math.min(t.__maxDecelerationScrollTop, i), t.__minDecelerationScrollTop);
                    o !== i && (i = o,
                    t.__decelerationVelocityY = 0)
                }
                if (e ? t.__publish(n, i, t.__zoomLevel) : (t.__scrollLeft = n,
                t.__scrollTop = i),
                !t.options.paging) {
                    var a = t.options.deceleration;
                    t.__decelerationVelocityX *= a,
                    t.__decelerationVelocityY *= a
                }
                if (t.options.bouncing) {
                    var s = 0
                      , c = 0
                      , l = t.options.penetrationDeceleration
                      , u = t.options.penetrationAcceleration;
                    if (n < t.__minDecelerationScrollLeft ? s = t.__minDecelerationScrollLeft - n : n > t.__maxDecelerationScrollLeft && (s = t.__maxDecelerationScrollLeft - n),
                    i < t.__minDecelerationScrollTop ? c = t.__minDecelerationScrollTop - i : i > t.__maxDecelerationScrollTop && (c = t.__maxDecelerationScrollTop - i),
                    0 !== s) {
                        var d = s * t.__decelerationVelocityX <= t.__minDecelerationScrollLeft;
                        d && (t.__decelerationVelocityX += s * l);
                        var f = Math.abs(t.__decelerationVelocityX) <= t.__minVelocityToKeepDecelerating;
                        (!d || f) && (t.__decelerationVelocityX = s * u)
                    }
                    if (0 !== c) {
                        var h = c * t.__decelerationVelocityY <= t.__minDecelerationScrollTop;
                        h && (t.__decelerationVelocityY += c * l);
                        var p = Math.abs(t.__decelerationVelocityY) <= t.__minVelocityToKeepDecelerating;
                        (!h || p) && (t.__decelerationVelocityY = c * u)
                    }
                }
            },
            __getDistance: function(e, t) {
                var n = t.pageX - e.pageX
                  , i = t.pageY - e.pageY;
                return Math.sqrt(n * n + i * i)
            },
            __getScale: function(e, t) {
                return e.length >= 2 && t.length >= 2 ? this.__getDistance(t[0], t[1]) / this.__getDistance(e[0], e[1]) : 1
            }
        }),
        e.scroll = {
            isScrolling: !1,
            lastTop: 0
        }
    }
    (ionic),
    function(e) {
        var t = function() {}
          , n = function(e) {}
        ;
        e.views.ScrollNative = e.views.View.inherit({
            initialize: function(n) {
                var i = this;
                i.__container = i.el = n.el,
                i.__content = n.el.firstElementChild,
                i.isNative = !0,
                i.__scrollTop = i.el.scrollTop,
                i.__scrollLeft = i.el.scrollLeft,
                i.__clientHeight = i.__content.clientHeight,
                i.__clientWidth = i.__content.clientWidth,
                i.__maxScrollTop = Math.max(i.__contentHeight - i.__clientHeight, 0),
                i.__maxScrollLeft = Math.max(i.__contentWidth - i.__clientWidth, 0),
                i.options = {
                    freeze: !1,
                    getContentWidth: function() {
                        return Math.max(i.__content.scrollWidth, i.__content.offsetWidth)
                    },
                    getContentHeight: function() {
                        return Math.max(i.__content.scrollHeight, i.__content.offsetHeight + 2 * i.__content.offsetTop)
                    }
                };
                for (var r in n)
                    i.options[r] = n[r];
                i.onScroll = function() {
                    e.scroll.isScrolling || (e.scroll.isScrolling = !0),
                    clearTimeout(i.scrollTimer),
                    i.scrollTimer = setTimeout(function() {
                        e.scroll.isScrolling = !1
                    }
                    , 80)
                }
                ,
                i.freeze = t,
                i.__initEventHandlers()
            },
            __callback: function() {
                n("__callback")
            },
            zoomTo: function() {
                n("zoomTo")
            },
            zoomBy: function() {
                n("zoomBy")
            },
            activatePullToRefresh: function() {
                n("activatePullToRefresh")
            },
            resize: function(e) {
                var t = this;
                t.__container && t.options && t.setDimensions(t.__container.clientWidth, t.__container.clientHeight, t.options.getContentWidth(), t.options.getContentHeight(), e)
            },
            run: function() {
                this.resize()
            },
            getValues: function() {
                var e = this;
                return e.update(),
                {
                    left: e.__scrollLeft,
                    top: e.__scrollTop,
                    zoom: 1
                }
            },
            update: function() {
                var e = this;
                e.__scrollLeft = e.el.scrollLeft,
                e.__scrollTop = e.el.scrollTop
            },
            setDimensions: function(e, t, n, i) {
                var r = this;
                (e || t || n || i) && (e === +e && (r.__clientWidth = e),
                t === +t && (r.__clientHeight = t),
                n === +n && (r.__contentWidth = n),
                i === +i && (r.__contentHeight = i),
                r.__computeScrollMax())
            },
            getScrollMax: function() {
                return {
                    left: this.__maxScrollLeft,
                    top: this.__maxScrollTop
                }
            },
            scrollBy: function(e, t, n) {
                var i = this;
                i.update();
                var r = i.__isAnimating ? i.__scheduledLeft : i.__scrollLeft
                  , o = i.__isAnimating ? i.__scheduledTop : i.__scrollTop;
                i.scrollTo(r + (e || 0), o + (t || 0), n)
            },
            scrollTo: function(t, n, i) {
                function r(t, n) {
                    function i(e) {
                        return --e * e * e + 1
                    }
                    function r() {
                        var u = Date.now()
                          , d = Math.min(1, (u - a) / s)
                          , f = i(d);
                        c != t && (o.el.scrollTop = parseInt(f * (t - c) + c, 10)),
                        l != n && (o.el.scrollLeft = parseInt(f * (n - l) + l, 10)),
                        1 > d ? e.requestAnimationFrame(r) : (e.tap.removeClonedInputs(o.__container, o),
                        o.resize())
                    }
                    var a = Date.now()
                      , s = 250
                      , c = o.el.scrollTop
                      , l = o.el.scrollLeft;
                    return c === t && l === n ? void o.resize() : void e.requestAnimationFrame(r)
                }
                var o = this;
                return i ? void r(n, t) : (o.el.scrollTop = n,
                o.el.scrollLeft = t,
                void o.resize())
            },
            __waitForSize: function() {
                var e = this;
                clearTimeout(e.__sizerTimeout);
                var t = function() {
                    e.resize(!0)
                }
                ;
                t(),
                e.__sizerTimeout = setTimeout(t, 500)
            },
            __computeScrollMax: function() {
                var e = this;
                e.__maxScrollLeft = Math.max(e.__contentWidth - e.__clientWidth, 0),
                e.__maxScrollTop = Math.max(e.__contentHeight - e.__clientHeight, 0),
                e.__didWaitForSize || e.__maxScrollLeft || e.__maxScrollTop || (e.__didWaitForSize = !0,
                e.__waitForSize())
            },
            __initEventHandlers: function() {
                var t, n = this, i = n.__container;
                n.scrollChildIntoView = function(r) {
                    var o = i.getBoundingClientRect().bottom;
                    t = i.offsetHeight;
                    var a = n.isShrunkForKeyboard
                      , s = i.parentNode.classList.contains("modal")
                      , c = s && window.innerWidth >= 680;
                    if (!a) {
                        if (e.Platform.isIOS() || e.Platform.isFullScreen || c) {
                            var l = r.detail.viewportHeight - o
                              , u = Math.max(0, r.detail.keyboardHeight - l);
                            e.requestAnimationFrame(function() {
                                t -= u,
                                i.style.height = t + "px",
                                n.resize()
                            }
                            )
                        }
                        n.isShrunkForKeyboard = !0
                    }
                    r.detail.isElementUnderKeyboard && e.requestAnimationFrame(function() {
                        n.isShrunkForKeyboard && !a && (o = i.getBoundingClientRect().bottom);
                        var s = .5 * t
                          , c = (r.detail.elementBottom + r.detail.elementTop) / 2
                          , l = c - o
                          , u = l + s;
                        u > 0 && (e.Platform.isIOS() ? setTimeout(function() {
                            e.tap.cloneFocusedInput(i, n),
                            n.scrollBy(0, u, !0),
                            n.onScroll()
                        }
                        , 32) : (n.scrollBy(0, u, !0),
                        n.onScroll()))
                    }
                    ),
                    r.stopPropagation()
                }
                ,
                n.resetScrollView = function() {
                    n.isShrunkForKeyboard && (n.isShrunkForKeyboard = !1,
                    i.style.height = ""),
                    n.resize()
                }
                ,
                i.addEventListener("scroll", n.onScroll),
                i.addEventListener("scrollChildIntoView", n.scrollChildIntoView),
                document.addEventListener("resetScrollView", n.resetScrollView)
            },
            __cleanup: function() {
                var n = this
                  , i = n.__container;
                i.removeEventListener("resetScrollView", n.resetScrollView),
                i.removeEventListener("scroll", n.onScroll),
                i.removeEventListener("scrollChildIntoView", n.scrollChildIntoView),
                i.removeEventListener("resetScrollView", n.resetScrollView),
                e.tap.removeClonedInputs(i, n),
                delete n.__container,
                delete n.__content,
                delete n.__indicatorX,
                delete n.__indicatorY,
                delete n.options.el,
                n.resize = n.scrollTo = n.onScroll = n.resetScrollView = t,
                n.scrollChildIntoView = t,
                i = null
            }
        })
    }
    (ionic),
    function(e) {
        "use strict";
        var t = "item"
          , n = "item-content"
          , i = "item-sliding"
          , r = "item-options"
          , o = "item-placeholder"
          , a = "item-reordering"
          , s = "item-reorder"
          , c = function() {}
        ;
        c.prototype = {
            start: function() {},
            drag: function() {},
            end: function() {},
            isSameItem: function() {
                return !1
            }
        };
        var l = function(e) {
            this.dragThresholdX = e.dragThresholdX || 10,
            this.el = e.el,
            this.item = e.item,
            this.canSwipe = e.canSwipe
        }
        ;
        l.prototype = new c,
        l.prototype.start = function(o) {
            var a, s, c, l;
            this.canSwipe() && (a = o.target.classList.contains(n) ? o.target : o.target.classList.contains(t) ? o.target.querySelector("." + n) : e.DomUtil.getParentWithClass(o.target, n),
            a && (a.classList.remove(i),
            c = parseFloat(a.style[e.CSS.TRANSFORM].replace("translate3d(", "").split(",")[0]) || 0,
            s = a.parentNode.querySelector("." + r),
            s && (s.classList.remove("invisible"),
            l = s.offsetWidth,
            this._currentDrag = {
                buttons: s,
                buttonsWidth: l,
                content: a,
                startOffsetX: c
            })))
        }
        ,
        l.prototype.isSameItem = function(e) {
            return e._lastDrag && this._currentDrag ? this._currentDrag.content == e._lastDrag.content : !1
        }
        ,
        l.prototype.clean = function(t) {
            function n() {
                i.buttons && i.buttons.classList.add("invisible")
            }
            var i = this._lastDrag;
            i && i.content && (i.content.style[e.CSS.TRANSITION] = "",
            i.content.style[e.CSS.TRANSFORM] = "",
            t ? (i.content.style[e.CSS.TRANSITION] = "none",
            n(),
            e.requestAnimationFrame(function() {
                i.content.style[e.CSS.TRANSITION] = ""
            }
            )) : e.requestAnimationFrame(function() {
                setTimeout(n, 250)
            }
            ))
        }
        ,
        l.prototype.drag = e.animationFrameThrottle(function(t) {
            var n;
            if (this._currentDrag && (!this._isDragging && (Math.abs(t.gesture.deltaX) > this.dragThresholdX || Math.abs(this._currentDrag.startOffsetX) > 0) && (this._isDragging = !0),
            this._isDragging)) {
                n = this._currentDrag.buttonsWidth;
                var i = Math.min(0, this._currentDrag.startOffsetX + t.gesture.deltaX);
                -n > i && (i = Math.min(-n, -n + .4 * (t.gesture.deltaX + n))),
                this._currentDrag.content.$$ionicOptionsOpen = 0 !== i,
                this._currentDrag.content.style[e.CSS.TRANSFORM] = "translate3d(" + i + "px, 0, 0)",
                this._currentDrag.content.style[e.CSS.TRANSITION] = "none"
            }
        }
        ),
        l.prototype.end = function(t, n) {
            var i = this;
            if (!i._currentDrag)
                return void (n && n());
            var r = -i._currentDrag.buttonsWidth;
            t.gesture.deltaX > -(i._currentDrag.buttonsWidth / 2) && ("left" == t.gesture.direction && Math.abs(t.gesture.velocityX) < .3 ? r = 0 : "right" == t.gesture.direction && (r = 0)),
            e.requestAnimationFrame(function() {
                if (0 === r) {
                    i._currentDrag.content.style[e.CSS.TRANSFORM] = "";
                    var t = i._currentDrag.buttons;
                    setTimeout(function() {
                        t && t.classList.add("invisible")
                    }
                    , 250)
                } else
                    i._currentDrag.content.style[e.CSS.TRANSFORM] = "translate3d(" + r + "px,0,0)";
                i._currentDrag.content.style[e.CSS.TRANSITION] = "",
                i._lastDrag || (i._lastDrag = {}),
                e.extend(i._lastDrag, i._currentDrag),
                i._currentDrag && (i._currentDrag.buttons = null ,
                i._currentDrag.content = null ),
                i._currentDrag = null ,
                n && n()
            }
            )
        }
        ;
        var u = function(e) {
            var t = this;
            if (t.dragThresholdY = e.dragThresholdY || 0,
            t.onReorder = e.onReorder,
            t.listEl = e.listEl,
            t.el = t.item = e.el,
            t.scrollEl = e.scrollEl,
            t.scrollView = e.scrollView,
            t.listElTrueTop = 0,
            t.listEl.offsetParent) {
                var n = t.listEl;
                do
                    t.listElTrueTop += n.offsetTop,
                    n = n.offsetParent;
                while (n)
            }
        }
        ;
        u.prototype = new c,
        u.prototype._moveElement = function(t) {
            var n = t.gesture.center.pageY + this.scrollView.getValues().top - this._currentDrag.elementHeight / 2 - this.listElTrueTop;
            this.el.style[e.CSS.TRANSFORM] = "translate3d(0, " + n + "px, 0)"
        }
        ,
        u.prototype.deregister = function() {
            this.listEl = this.el = this.scrollEl = this.scrollView = null
        }
        ,
        u.prototype.start = function(t) {
            var n = e.DomUtil.getChildIndex(this.el, this.el.nodeName.toLowerCase())
              , i = this.el.scrollHeight
              , r = this.el.cloneNode(!0);
            r.classList.add(o),
            this.el.parentNode.insertBefore(r, this.el),
            this.el.classList.add(a),
            this._currentDrag = {
                elementHeight: i,
                startIndex: n,
                placeholder: r,
                scrollHeight: scroll,
                list: r.parentNode
            },
            this._moveElement(t)
        }
        ,
        u.prototype.drag = e.animationFrameThrottle(function(t) {
            var n = this;
            if (this._currentDrag) {
                var i = 0
                  , r = t.gesture.center.pageY
                  , o = this.listElTrueTop;
                if (this.scrollView) {
                    var a = this.scrollView.__container;
                    i = this.scrollView.getValues().top;
                    var s = a.offsetTop
                      , c = s - r + this._currentDrag.elementHeight / 2
                      , l = r + this._currentDrag.elementHeight / 2 - s - a.offsetHeight;
                    t.gesture.deltaY < 0 && c > 0 && i > 0 && (this.scrollView.scrollBy(null , -c),
                    e.requestAnimationFrame(function() {
                        n.drag(t)
                    }
                    )),
                    t.gesture.deltaY > 0 && l > 0 && i < this.scrollView.getScrollMax().top && (this.scrollView.scrollBy(null , l),
                    e.requestAnimationFrame(function() {
                        n.drag(t)
                    }
                    ))
                }
                !this._isDragging && Math.abs(t.gesture.deltaY) > this.dragThresholdY && (this._isDragging = !0),
                this._isDragging && (this._moveElement(t),
                this._currentDrag.currentY = i + r - o)
            }
        }
        ),
        u.prototype._getReorderIndex = function() {
            for (var e, t = this, n = Array.prototype.slice.call(t._currentDrag.placeholder.parentNode.children).filter(function(e) {
                return e.nodeName === t.el.nodeName && e !== t.el
            }
            ), i = t._currentDrag.currentY, r = 0, o = n.length; o > r; r++)
                if (e = n[r],
                r === o - 1) {
                    if (i > e.offsetTop)
                        return r
                } else if (0 === r) {
                    if (i < e.offsetTop + e.offsetHeight)
                        return r
                } else if (i > e.offsetTop - e.offsetHeight / 2 && i < e.offsetTop + e.offsetHeight)
                    return r;
            return t._currentDrag.startIndex
        }
        ,
        u.prototype.end = function(t, n) {
            if (!this._currentDrag)
                return void (n && n());
            var i = this._currentDrag.placeholder
              , r = this._getReorderIndex();
            this.el.classList.remove(a),
            this.el.style[e.CSS.TRANSFORM] = "",
            i.parentNode.insertBefore(this.el, i),
            i.parentNode.removeChild(i),
            this.onReorder && this.onReorder(this.el, this._currentDrag.startIndex, r),
            this._currentDrag = {
                placeholder: null ,
                content: null
            },
            this._currentDrag = null ,
            n && n()
        }
        ,
        e.views.ListView = e.views.View.inherit({
            initialize: function(t) {
                var n = this;
                t = e.extend({
                    onReorder: function() {},
                    virtualRemoveThreshold: -200,
                    virtualAddThreshold: 200,
                    canSwipe: function() {
                        return !0
                    }
                }, t),
                e.extend(n, t),
                !n.itemHeight && n.listEl && (n.itemHeight = n.listEl.children[0] && parseInt(n.listEl.children[0].style.height, 10)),
                n.onRefresh = t.onRefresh || function() {}
                ,
                n.onRefreshOpening = t.onRefreshOpening || function() {}
                ,
                n.onRefreshHolding = t.onRefreshHolding || function() {}
                ;
                var i = {};
                e.DomUtil.getParentOrSelfWithClass(n.el, "overflow-scroll") && (i.prevent_default_directions = ["left", "right"]),
                window.ionic.onGesture("release", function(e) {
                    n._handleEndDrag(e)
                }
                , n.el, i),
                window.ionic.onGesture("drag", function(e) {
                    n._handleDrag(e)
                }
                , n.el, i),
                n._initDrag()
            },
            deregister: function() {
                this.el = this.listEl = this.scrollEl = this.scrollView = null ,
                this.isScrollFreeze && self.scrollView.freeze(!1)
            },
            stopRefreshing: function() {
                var e = this.el.querySelector(".list-refresher");
                e.style.height = "0"
            },
            didScroll: function(e) {
                var t = this;
                if (t.isVirtual) {
                    var n = t.itemHeight
                      , i = e.target.scrollHeight
                      , r = t.el.parentNode.offsetHeight
                      , o = Math.max(0, e.scrollTop + t.virtualRemoveThreshold)
                      , a = Math.min(i, Math.abs(e.scrollTop) + r + t.virtualAddThreshold)
                      , s = parseInt(Math.abs(o / n), 10)
                      , c = parseInt(Math.abs(a / n), 10);
                    t._virtualItemsToRemove = Array.prototype.slice.call(t.listEl.children, 0, s),
                    t.renderViewport && t.renderViewport(o, a, s, c)
                }
            },
            didStopScrolling: function() {
                if (this.isVirtual)
                    for (var e = 0; e < this._virtualItemsToRemove.length; e++)
                        this.didHideItem && this.didHideItem(e)
            },
            clearDragEffects: function(e) {
                this._lastDragOp && (this._lastDragOp.clean && this._lastDragOp.clean(e),
                this._lastDragOp.deregister && this._lastDragOp.deregister(),
                this._lastDragOp = null )
            },
            _initDrag: function() {
                this._lastDragOp && this._lastDragOp.deregister && this._lastDragOp.deregister(),
                this._lastDragOp = this._dragOp,
                this._dragOp = null
            },
            _getItem: function(e) {
                for (; e; ) {
                    if (e.classList && e.classList.contains(t))
                        return e;
                    e = e.parentNode
                }
                return null
            },
            _startDrag: function(t) {
                var n = this;
                n._isDragging = !1;
                var i, r = n._lastDragOp;
                n._didDragUpOrDown && r instanceof l && r.clean && r.clean(),
                !e.DomUtil.getParentOrSelfWithClass(t.target, s) || "up" != t.gesture.direction && "down" != t.gesture.direction ? !n._didDragUpOrDown && ("left" == t.gesture.direction || "right" == t.gesture.direction) && Math.abs(t.gesture.deltaX) > 5 && (i = n._getItem(t.target),
                i && i.querySelector(".item-options") && (n._dragOp = new l({
                    el: n.el,
                    item: i,
                    canSwipe: n.canSwipe
                }),
                n._dragOp.start(t),
                t.preventDefault(),
                n.isScrollFreeze = n.scrollView.freeze(!0))) : (i = n._getItem(t.target),
                i && (n._dragOp = new u({
                    listEl: n.el,
                    el: i,
                    scrollEl: n.scrollEl,
                    scrollView: n.scrollView,
                    onReorder: function(e, t, i) {
                        n.onReorder && n.onReorder(e, t, i)
                    }
                }),
                n._dragOp.start(t),
                t.preventDefault())),
                r && n._dragOp && !n._dragOp.isSameItem(r) && t.defaultPrevented && r.clean && r.clean()
            },
            _handleEndDrag: function(e) {
                var t = this;
                t.scrollView && (t.isScrollFreeze = t.scrollView.freeze(!1)),
                t._didDragUpOrDown = !1,
                t._dragOp && t._dragOp.end(e, function() {
                    t._initDrag()
                }
                )
            },
            _handleDrag: function(e) {
                var t = this;
                Math.abs(e.gesture.deltaY) > 5 && (t._didDragUpOrDown = !0),
                t.isDragging || t._dragOp || t._startDrag(e),
                t._dragOp && (e.gesture.srcEvent.preventDefault(),
                t._dragOp.drag(e))
            }
        })
    }
    (ionic),
    function(e) {
        "use strict";
        e.views.Modal = e.views.View.inherit({
            initialize: function(t) {
                t = e.extend({
                    focusFirstInput: !1,
                    unfocusOnHide: !0,
                    focusFirstDelay: 600,
                    backdropClickToClose: !0,
                    hardwareBackButtonClose: !0
                }, t),
                e.extend(this, t),
                this.el = t.el
            },
            show: function() {
                var e = this;
                e.focusFirstInput && window.setTimeout(function() {
                    var t = e.el.querySelector("input, textarea");
                    t && t.focus && t.focus()
                }
                , e.focusFirstDelay)
            },
            hide: function() {
                if (this.unfocusOnHide) {
                    var e = this.el.querySelectorAll("input, textarea");
                    window.setTimeout(function() {
                        for (var t = 0; t < e.length; t++)
                            e[t].blur && e[t].blur()
                    }
                    )
                }
            }
        })
    }
    (ionic),
    function(e) {
        "use strict";
        e.views.SideMenu = e.views.View.inherit({
            initialize: function(e) {
                this.el = e.el,
                this.isEnabled = "undefined" == typeof e.isEnabled ? !0 : e.isEnabled,
                this.setWidth(e.width)
            },
            getFullWidth: function() {
                return this.width
            },
            setWidth: function(e) {
                this.width = e,
                this.el.style.width = e + "px"
            },
            setIsEnabled: function(e) {
                this.isEnabled = e
            },
            bringUp: function() {
                "0" !== this.el.style.zIndex && (this.el.style.zIndex = "0")
            },
            pushDown: function() {
                "-1" !== this.el.style.zIndex && (this.el.style.zIndex = "-1")
            }
        }),
        e.views.SideMenuContent = e.views.View.inherit({
            initialize: function(t) {
                e.extend(this, {
                    animationClass: "menu-animated",
                    onDrag: function() {},
                    onEndDrag: function() {}
                }, t),
                e.onGesture("drag", e.proxy(this._onDrag, this), this.el),
                e.onGesture("release", e.proxy(this._onEndDrag, this), this.el)
            },
            _onDrag: function(e) {
                this.onDrag && this.onDrag(e)
            },
            _onEndDrag: function(e) {
                this.onEndDrag && this.onEndDrag(e)
            },
            disableAnimation: function() {
                this.el.classList.remove(this.animationClass)
            },
            enableAnimation: function() {
                this.el.classList.add(this.animationClass)
            },
            getTranslateX: function() {
                return parseFloat(this.el.style[e.CSS.TRANSFORM].replace("translate3d(", "").split(",")[0])
            },
            setTranslateX: e.animationFrameThrottle(function(t) {
                this.el.style[e.CSS.TRANSFORM] = "translate3d(" + t + "px, 0, 0)"
            }
            )
        })
    }
    (ionic),
    function(e) {
        "use strict";
        e.views.Slider = e.views.View.inherit({
            initialize: function(e) {
                function t() {
                    if (m.offsetWidth) {
                        v = y.children,
                        w = v.length,
                        v.length < 2 && (e.continuous = !1),
                        p.transitions && e.continuous && v.length < 3 && (y.appendChild(v[0].cloneNode(!0)),
                        y.appendChild(y.children[1].cloneNode(!0)),
                        v = y.children),
                        g = new Array(v.length),
                        $ = m.offsetWidth || m.getBoundingClientRect().width,
                        y.style.width = v.length * $ + "px";
                        for (var t = v.length; t--; ) {
                            var n = v[t];
                            n.style.width = $ + "px",
                            n.setAttribute("data-index", t),
                            p.transitions && (n.style.left = t * -$ + "px",
                            a(t, _ > t ? -$ : t > _ ? $ : 0, 0))
                        }
                        e.continuous && p.transitions && (a(r(_ - 1), -$, 0),
                        a(r(_ + 1), $, 0)),
                        p.transitions || (y.style.left = _ * -$ + "px"),
                        m.style.visibility = "visible",
                        e.slidesChanged && e.slidesChanged()
                    }
                }
                function n(t) {
                    e.continuous ? o(_ - 1, t) : _ && o(_ - 1, t)
                }
                function i(t) {
                    e.continuous ? o(_ + 1, t) : _ < v.length - 1 && o(_ + 1, t)
                }
                function r(e) {
                    return (v.length + e % v.length) % v.length
                }
                function o(t, n) {
                    if (_ != t) {
                        if (p.transitions) {
                            var i = Math.abs(_ - t) / (_ - t);
                            if (e.continuous) {
                                var o = i;
                                i = -g[r(t)] / $,
                                i !== o && (t = -i * v.length + t)
                            }
                            for (var s = Math.abs(_ - t) - 1; s--; )
                                a(r((t > _ ? t : _) - s - 1), $ * i, 0);
                            t = r(t),
                            a(_, $ * i, n || b),
                            a(t, 0, n || b),
                            e.continuous && a(r(t - i), -($ * i), 0)
                        } else
                            t = r(t),
                            c(_ * -$, t * -$, n || b);
                        _ = t,
                        h(e.callback && e.callback(_, v[_]))
                    }
                }
                function a(e, t, n) {
                    s(e, t, n),
                    g[e] = t
                }
                function s(e, t, n) {
                    var i = v[e]
                      , r = i && i.style;
                    r && (r.webkitTransitionDuration = r.MozTransitionDuration = r.msTransitionDuration = r.OTransitionDuration = r.transitionDuration = n + "ms",
                    r.webkitTransform = "translate(" + t + "px,0)translateZ(0)",
                    r.msTransform = r.MozTransform = r.OTransform = "translateX(" + t + "px)")
                }
                function c(t, n, i) {
                    if (!i)
                        return void (y.style.left = n + "px");
                    var r = +new Date
                      , o = setInterval(function() {
                        var a = +new Date - r;
                        return a > i ? (y.style.left = n + "px",
                        x && l(),
                        e.transitionEnd && e.transitionEnd.call(event, _, v[_]),
                        void clearInterval(o)) : void (y.style.left = (n - t) * (Math.floor(a / i * 100) / 100) + t + "px")
                    }
                    , 4)
                }
                function l() {
                    S = setTimeout(i, x)
                }
                function u() {
                    x = e.auto || 0,
                    clearTimeout(S)
                }
                var d = this
                  , f = function() {}
                  , h = function(e) {
                    setTimeout(e || f, 0)
                }
                  , p = {
                    addEventListener: !!window.addEventListener,
                    touch: "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch,
                    transitions: function(e) {
                        var t = ["transitionProperty", "WebkitTransition", "MozTransition", "OTransition", "msTransition"];
                        for (var n in t)
                            if (void 0 !== e.style[t[n]])
                                return !0;
                        return !1
                    }
                    (document.createElement("swipe"))
                }
                  , m = e.el;
                if (m) {
                    var v, g, $, w, y = m.children[0];
                    e = e || {};
                    var _ = parseInt(e.startSlide, 10) || 0
                      , b = e.speed || 300;
                    e.continuous = void 0 !== e.continuous ? e.continuous : !0;
                    var S, T, x = e.auto || 0, E = {}, C = {}, k = {
                        handleEvent: function(n) {
                            switch (("mousedown" == n.type || "mouseup" == n.type || "mousemove" == n.type) && (n.touches = [{
                                pageX: n.pageX,
                                pageY: n.pageY
                            }]),
                            n.type) {
                            case "mousedown":
                                this.start(n);
                                break;
                            case "touchstart":
                                this.start(n);
                                break;
                            case "touchmove":
                                this.touchmove(n);
                                break;
                            case "mousemove":
                                this.touchmove(n);
                                break;
                            case "touchend":
                                h(this.end(n));
                                break;
                            case "mouseup":
                                h(this.end(n));
                                break;
                            case "webkitTransitionEnd":
                            case "msTransitionEnd":
                            case "oTransitionEnd":
                            case "otransitionend":
                            case "transitionend":
                                h(this.transitionEnd(n));
                                break;
                            case "resize":
                                h(t)
                            }
                            e.stopPropagation && n.stopPropagation()
                        },
                        start: function(e) {
                            var t = e.touches[0];
                            E = {
                                x: t.pageX,
                                y: t.pageY,
                                time: +new Date
                            },
                            T = void 0,
                            C = {},
                            p.touch ? (y.addEventListener("touchmove", this, !1),
                            y.addEventListener("touchend", this, !1)) : (y.addEventListener("mousemove", this, !1),
                            y.addEventListener("mouseup", this, !1),
                            document.addEventListener("mouseup", this, !1))
                        },
                        touchmove: function(t) {
                            if (!(t.touches.length > 1 || t.scale && 1 !== t.scale || d.slideIsDisabled)) {
                                e.disableScroll && t.preventDefault();
                                var n = t.touches[0];
                                C = {
                                    x: n.pageX - E.x,
                                    y: n.pageY - E.y
                                },
                                "undefined" == typeof T && (T = !!(T || Math.abs(C.x) < Math.abs(C.y))),
                                T || (t.preventDefault(),
                                u(),
                                e.continuous ? (s(r(_ - 1), C.x + g[r(_ - 1)], 0),
                                s(_, C.x + g[_], 0),
                                s(r(_ + 1), C.x + g[r(_ + 1)], 0)) : (C.x = C.x / (!_ && C.x > 0 || _ == v.length - 1 && C.x < 0 ? Math.abs(C.x) / $ + 1 : 1),
                                s(_ - 1, C.x + g[_ - 1], 0),
                                s(_, C.x + g[_], 0),
                                s(_ + 1, C.x + g[_ + 1], 0)),
                                e.onDrag && e.onDrag())
                            }
                        },
                        end: function() {
                            var t = +new Date - E.time
                              , n = Number(t) < 250 && Math.abs(C.x) > 20 || Math.abs(C.x) > $ / 2
                              , i = !_ && C.x > 0 || _ == v.length - 1 && C.x < 0;
                            e.continuous && (i = !1);
                            var o = C.x < 0;
                            T || (n && !i ? (o ? (e.continuous ? (a(r(_ - 1), -$, 0),
                            a(r(_ + 2), $, 0)) : a(_ - 1, -$, 0),
                            a(_, g[_] - $, b),
                            a(r(_ + 1), g[r(_ + 1)] - $, b),
                            _ = r(_ + 1)) : (e.continuous ? (a(r(_ + 1), $, 0),
                            a(r(_ - 2), -$, 0)) : a(_ + 1, $, 0),
                            a(_, g[_] + $, b),
                            a(r(_ - 1), g[r(_ - 1)] + $, b),
                            _ = r(_ - 1)),
                            e.callback && e.callback(_, v[_])) : e.continuous ? (a(r(_ - 1), -$, b),
                            a(_, 0, b),
                            a(r(_ + 1), $, b)) : (a(_ - 1, -$, b),
                            a(_, 0, b),
                            a(_ + 1, $, b))),
                            p.touch ? (y.removeEventListener("touchmove", k, !1),
                            y.removeEventListener("touchend", k, !1)) : (y.removeEventListener("mousemove", k, !1),
                            y.removeEventListener("mouseup", k, !1),
                            document.removeEventListener("mouseup", k, !1)),
                            e.onDragEnd && e.onDragEnd()
                        },
                        transitionEnd: function(t) {
                            parseInt(t.target.getAttribute("data-index"), 10) == _ && (x && l(),
                            e.transitionEnd && e.transitionEnd.call(t, _, v[_]))
                        }
                    };
                    this.update = function() {
                        setTimeout(t)
                    }
                    ,
                    this.setup = function() {
                        t()
                    }
                    ,
                    this.loop = function(t) {
                        return arguments.length && (e.continuous = !!t),
                        e.continuous
                    }
                    ,
                    this.enableSlide = function(e) {
                        return arguments.length && (this.slideIsDisabled = !e),
                        !this.slideIsDisabled
                    }
                    ,
                    this.slide = this.select = function(e, t) {
                        u(),
                        o(e, t)
                    }
                    ,
                    this.prev = this.previous = function() {
                        u(),
                        n()
                    }
                    ,
                    this.next = function() {
                        u(),
                        i()
                    }
                    ,
                    this.stop = function() {
                        u()
                    }
                    ,
                    this.start = function() {
                        l()
                    }
                    ,
                    this.autoPlay = function(e) {
                        !x || 0 > x ? u() : (x = e,
                        l())
                    }
                    ,
                    this.currentIndex = this.selected = function() {
                        return _
                    }
                    ,
                    this.slidesCount = this.count = function() {
                        return w
                    }
                    ,
                    this.kill = function() {
                        u(),
                        y.style.width = "",
                        y.style.left = "",
                        v && (v = []),
                        p.addEventListener ? (y.removeEventListener("touchstart", k, !1),
                        y.removeEventListener("webkitTransitionEnd", k, !1),
                        y.removeEventListener("msTransitionEnd", k, !1),
                        y.removeEventListener("oTransitionEnd", k, !1),
                        y.removeEventListener("otransitionend", k, !1),
                        y.removeEventListener("transitionend", k, !1),
                        window.removeEventListener("resize", k, !1)) : window.onresize = null
                    }
                    ,
                    this.load = function() {
                        t(),
                        x && l(),
                        p.addEventListener ? (p.touch ? y.addEventListener("touchstart", k, !1) : y.addEventListener("mousedown", k, !1),
                        p.transitions && (y.addEventListener("webkitTransitionEnd", k, !1),
                        y.addEventListener("msTransitionEnd", k, !1),
                        y.addEventListener("oTransitionEnd", k, !1),
                        y.addEventListener("otransitionend", k, !1),
                        y.addEventListener("transitionend", k, !1)),
                        window.addEventListener("resize", k, !1)) : window.onresize = function() {
                            t()
                        }
                    }
                }
            }
        })
    }
    (ionic),
    function(e) {
        "use strict";
        e.views.Toggle = e.views.View.inherit({
            initialize: function(t) {
                var n = this;
                this.el = t.el,
                this.checkbox = t.checkbox,
                this.track = t.track,
                this.handle = t.handle,
                this.openPercent = -1,
                this.onChange = t.onChange || function() {}
                ,
                this.triggerThreshold = t.triggerThreshold || 20,
                this.dragStartHandler = function(e) {
                    n.dragStart(e)
                }
                ,
                this.dragHandler = function(e) {
                    n.drag(e)
                }
                ,
                this.holdHandler = function(e) {
                    n.hold(e)
                }
                ,
                this.releaseHandler = function(e) {
                    n.release(e)
                }
                ,
                this.dragStartGesture = e.onGesture("dragstart", this.dragStartHandler, this.el),
                this.dragGesture = e.onGesture("drag", this.dragHandler, this.el),
                this.dragHoldGesture = e.onGesture("hold", this.holdHandler, this.el),
                this.dragReleaseGesture = e.onGesture("release", this.releaseHandler, this.el)
            },
            destroy: function() {
                e.offGesture(this.dragStartGesture, "dragstart", this.dragStartGesture),
                e.offGesture(this.dragGesture, "drag", this.dragGesture),
                e.offGesture(this.dragHoldGesture, "hold", this.holdHandler),
                e.offGesture(this.dragReleaseGesture, "release", this.releaseHandler)
            },
            tap: function() {
                "disabled" !== this.el.getAttribute("disabled") && this.val(!this.checkbox.checked)
            },
            dragStart: function(e) {
                this.checkbox.disabled || (this._dragInfo = {
                    width: this.el.offsetWidth,
                    left: this.el.offsetLeft,
                    right: this.el.offsetLeft + this.el.offsetWidth,
                    triggerX: this.el.offsetWidth / 2,
                    initialState: this.checkbox.checked
                },
                e.gesture.srcEvent.preventDefault(),
                this.hold(e))
            },
            drag: function(t) {
                var n = this;
                this._dragInfo && (t.gesture.srcEvent.preventDefault(),
                e.requestAnimationFrame(function() {
                    if (n._dragInfo) {
                        var e = t.gesture.touches[0].pageX - n._dragInfo.left
                          , i = n._dragInfo.width - n.triggerThreshold;
                        n._dragInfo.initialState ? e < n.triggerThreshold ? n.setOpenPercent(0) : e > n._dragInfo.triggerX && n.setOpenPercent(100) : e < n._dragInfo.triggerX ? n.setOpenPercent(0) : e > i && n.setOpenPercent(100)
                    }
                }
                ))
            },
            endDrag: function() {
                this._dragInfo = null
            },
            hold: function() {
                this.el.classList.add("dragging")
            },
            release: function(e) {
                this.el.classList.remove("dragging"),
                this.endDrag(e)
            },
            setOpenPercent: function(t) {
                if (this.openPercent < 0 || t < this.openPercent - 3 || t > this.openPercent + 3)
                    if (this.openPercent = t,
                    0 === t)
                        this.val(!1);
                    else if (100 === t)
                        this.val(!0);
                    else {
                        var n = Math.round(t / 100 * this.track.offsetWidth - this.handle.offsetWidth);
                        n = 1 > n ? 0 : n,
                        this.handle.style[e.CSS.TRANSFORM] = "translate3d(" + n + "px,0,0)"
                    }
            },
            val: function(t) {
                return (t === !0 || t === !1) && ("" !== this.handle.style[e.CSS.TRANSFORM] && (this.handle.style[e.CSS.TRANSFORM] = ""),
                this.checkbox.checked = t,
                this.openPercent = t ? 100 : 0,
                this.onChange && this.onChange()),
                this.checkbox.checked
            }
        })
    }
    (ionic)
}
(),
function(e, t, n) {
    "use strict";
    function i(e) {
        return function() {
            var t, n = arguments[0];
            for (t = "[" + (e ? e + ":" : "") + n + "] http://errors.angularjs.org/1.3.13/" + (e ? e + "/" : "") + n,
            n = 1; n < arguments.length; n++) {
                t = t + (1 == n ? "?" : "&") + "p" + (n - 1) + "=";
                var i, r = encodeURIComponent;
                i = arguments[n],
                i = "function" == typeof i ? i.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof i ? "undefined" : "string" != typeof i ? JSON.stringify(i) : i,
                t += r(i)
            }
            return Error(t)
        }
    }
    function r(e) {
        if (null  == e || T(e))
            return !1;
        var t = e.length;
        return e.nodeType === zn && t ? !0 : w(e) || Ln(e) || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }
    function o(e, t, n) {
        var i, a;
        if (e)
            if (b(e))
                for (i in e)
                    "prototype" == i || "length" == i || "name" == i || e.hasOwnProperty && !e.hasOwnProperty(i) || t.call(n, e[i], i, e);
            else if (Ln(e) || r(e)) {
                var s = "object" != typeof e;
                for (i = 0,
                a = e.length; a > i; i++)
                    (s || i in e) && t.call(n, e[i], i, e)
            } else if (e.forEach && e.forEach !== o)
                e.forEach(t, n, e);
            else
                for (i in e)
                    e.hasOwnProperty(i) && t.call(n, e[i], i, e);
        return e
    }
    function a(e, t, n) {
        for (var i = Object.keys(e).sort(), r = 0; r < i.length; r++)
            t.call(n, e[i[r]], i[r]);
        return i
    }
    function s(e) {
        return function(t, n) {
            e(n, t)
        }
    }
    function c() {
        return ++Mn
    }
    function l(e, t) {
        t ? e.$$hashKey = t : delete e.$$hashKey
    }
    function u(e) {
        for (var t = e.$$hashKey, n = 1, i = arguments.length; i > n; n++) {
            var r = arguments[n];
            if (r)
                for (var o = Object.keys(r), a = 0, s = o.length; s > a; a++) {
                    var c = o[a];
                    e[c] = r[c]
                }
        }
        return l(e, t),
        e
    }
    function d(e) {
        return parseInt(e, 10)
    }
    function f(e, t) {
        return u(Object.create(e), t)
    }
    function h() {}
    function p(e) {
        return e
    }
    function m(e) {
        return function() {
            return e
        }
    }
    function v(e) {
        return "undefined" == typeof e
    }
    function g(e) {
        return "undefined" != typeof e
    }
    function $(e) {
        return null  !== e && "object" == typeof e
    }
    function w(e) {
        return "string" == typeof e
    }
    function y(e) {
        return "number" == typeof e
    }
    function _(e) {
        return "[object Date]" === An.call(e)
    }
    function b(e) {
        return "function" == typeof e
    }
    function S(e) {
        return "[object RegExp]" === An.call(e)
    }
    function T(e) {
        return e && e.window === e
    }
    function x(e) {
        return e && e.$evalAsync && e.$watch
    }
    function E(e) {
        return "boolean" == typeof e
    }
    function C(e) {
        return !(!e || !(e.nodeName || e.prop && e.attr && e.find))
    }
    function k(e) {
        var t = {};
        e = e.split(",");
        var n;
        for (n = 0; n < e.length; n++)
            t[e[n]] = !0;
        return t
    }
    function A(e) {
        return Sn(e.nodeName || e[0] && e[0].nodeName)
    }
    function I(e, t) {
        var n = e.indexOf(t);
        return n >= 0 && e.splice(n, 1),
        t
    }
    function D(e, t, n, i) {
        if (T(e) || x(e))
            throw In("cpws");
        if (t) {
            if (e === t)
                throw In("cpi");
            if (n = n || [],
            i = i || [],
            $(e)) {
                var r = n.indexOf(e);
                if (-1 !== r)
                    return i[r];
                n.push(e),
                i.push(t)
            }
            if (Ln(e))
                for (var a = t.length = 0; a < e.length; a++)
                    r = D(e[a], null , n, i),
                    $(e[a]) && (n.push(e[a]),
                    i.push(r)),
                    t.push(r);
            else {
                var s = t.$$hashKey;
                Ln(t) ? t.length = 0 : o(t, function(e, n) {
                    delete t[n]
                }
                );
                for (a in e)
                    e.hasOwnProperty(a) && (r = D(e[a], null , n, i),
                    $(e[a]) && (n.push(e[a]),
                    i.push(r)),
                    t[a] = r);
                l(t, s)
            }
        } else
            (t = e) && (Ln(e) ? t = D(e, [], n, i) : _(e) ? t = new Date(e.getTime()) : S(e) ? (t = new RegExp(e.source,e.toString().match(/[^\/]*$/)[0]),
            t.lastIndex = e.lastIndex) : $(e) && (r = Object.create(Object.getPrototypeOf(e)),
            t = D(e, r, n, i)));
        return t
    }
    function M(e, t) {
        if (Ln(e)) {
            t = t || [];
            for (var n = 0, i = e.length; i > n; n++)
                t[n] = e[n]
        } else if ($(e))
            for (n in t = t || {},
            e)
                ("$" !== n.charAt(0) || "$" !== n.charAt(1)) && (t[n] = e[n]);
        return t || e
    }
    function P(e, t) {
        if (e === t)
            return !0;
        if (null  === e || null  === t)
            return !1;
        if (e !== e && t !== t)
            return !0;
        var i, r = typeof e;
        if (r == typeof t && "object" == r) {
            if (!Ln(e)) {
                if (_(e))
                    return _(t) ? P(e.getTime(), t.getTime()) : !1;
                if (S(e) && S(t))
                    return e.toString() == t.toString();
                if (x(e) || x(t) || T(e) || T(t) || Ln(t))
                    return !1;
                r = {};
                for (i in e)
                    if ("$" !== i.charAt(0) && !b(e[i])) {
                        if (!P(e[i], t[i]))
                            return !1;
                        r[i] = !0
                    }
                for (i in t)
                    if (!r.hasOwnProperty(i) && "$" !== i.charAt(0) && t[i] !== n && !b(t[i]))
                        return !1;
                return !0
            }
            if (!Ln(t))
                return !1;
            if ((r = e.length) == t.length) {
                for (i = 0; r > i; i++)
                    if (!P(e[i], t[i]))
                        return !1;
                return !0
            }
        }
        return !1
    }
    function L(e, t, n) {
        return e.concat(En.call(t, n))
    }
    function O(e, t) {
        var n = 2 < arguments.length ? En.call(arguments, 2) : [];
        return !b(t) || t instanceof RegExp ? t : n.length ? function() {
            return arguments.length ? t.apply(e, L(n, arguments, 0)) : t.apply(e, n)
        }
         : function() {
            return arguments.length ? t.apply(e, arguments) : t.call(e)
        }
    }
    function V(e, i) {
        var r = i;
        return "string" == typeof e && "$" === e.charAt(0) && "$" === e.charAt(1) ? r = n : T(i) ? r = "$WINDOW" : i && t === i ? r = "$DOCUMENT" : x(i) && (r = "$SCOPE"),
        r
    }
    function N(e, t) {
        return "undefined" == typeof e ? n : (y(t) || (t = t ? 2 : null ),
        JSON.stringify(e, V, t))
    }
    function B(e) {
        return w(e) ? JSON.parse(e) : e
    }
    function R(e) {
        e = wn(e).clone();
        try {
            e.empty()
        } catch (t) {}
        var n = wn("<div>").append(e).html();
        try {
            return e[0].nodeType === Fn ? Sn(n) : n.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(e, t) {
                return "<" + Sn(t)
            }
            )
        } catch (i) {
            return Sn(n)
        }
    }
    function H(e) {
        try {
            return decodeURIComponent(e)
        } catch (t) {}
    }
    function z(e) {
        var t, n, i = {};
        return o((e || "").split("&"), function(e) {
            e && (t = e.replace(/\+/g, "%20").split("="),
            n = H(t[0]),
            g(n) && (e = g(t[1]) ? H(t[1]) : !0,
            Tn.call(i, n) ? Ln(i[n]) ? i[n].push(e) : i[n] = [i[n], e] : i[n] = e))
        }
        ),
        i
    }
    function F(e) {
        var t = [];
        return o(e, function(e, n) {
            Ln(e) ? o(e, function(e) {
                t.push(q(n, !0) + (!0 === e ? "" : "=" + q(e, !0)))
            }
            ) : t.push(q(n, !0) + (!0 === e ? "" : "=" + q(e, !0)))
        }
        ),
        t.length ? t.join("&") : ""
    }
    function U(e) {
        return q(e, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }
    function q(e, t) {
        return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, t ? "%20" : "+")
    }
    function G(e, t) {
        var n, i, r = Bn.length;
        for (e = wn(e),
        i = 0; r > i; ++i)
            if (n = Bn[i] + t,
            w(n = e.attr(n)))
                return n;
        return null
    }
    function j(e, t) {
        var n, i, r = {};
        o(Bn, function(t) {
            t += "app",
            !n && e.hasAttribute && e.hasAttribute(t) && (n = e,
            i = e.getAttribute(t))
        }
        ),
        o(Bn, function(t) {
            t += "app";
            var r;
            !n && (r = e.querySelector("[" + t.replace(":", "\\:") + "]")) && (n = r,
            i = r.getAttribute(t))
        }
        ),
        n && (r.strictDi = null  !== G(n, "strict-di"),
        t(n, i ? [i] : [], r))
    }
    function W(n, i, r) {
        $(r) || (r = {}),
        r = u({
            strictDi: !1
        }, r);
        var a = function() {
            if (n = wn(n),
            n.injector()) {
                var e = n[0] === t ? "document" : R(n);
                throw In("btstrpd", e.replace(/</, "&lt;").replace(/>/, "&gt;"))
            }
            return i = i || [],
            i.unshift(["$provide", function(e) {
                e.value("$rootElement", n)
            }
            ]),
            r.debugInfoEnabled && i.push(["$compileProvider", function(e) {
                e.debugInfoEnabled(!0)
            }
            ]),
            i.unshift("ng"),
            e = Me(i, r.strictDi),
            e.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function(e, t, n, i) {
                e.$apply(function() {
                    t.data("$injector", i),
                    n(t)(e)
                }
                )
            }
            ]),
            e
        }
          , s = /^NG_ENABLE_DEBUG_INFO!/
          , c = /^NG_DEFER_BOOTSTRAP!/;
        return e && s.test(e.name) && (r.debugInfoEnabled = !0,
        e.name = e.name.replace(s, "")),
        e && !c.test(e.name) ? a() : (e.name = e.name.replace(c, ""),
        Dn.resumeBootstrap = function(e) {
            return o(e, function(e) {
                i.push(e)
            }
            ),
            a()
        }
        ,
        void (b(Dn.resumeDeferredBootstrap) && Dn.resumeDeferredBootstrap()))
    }
    function Y() {
        e.name = "NG_ENABLE_DEBUG_INFO!" + e.name,
        e.location.reload()
    }
    function X(e) {
        if (e = Dn.element(e).injector(),
        !e)
            throw In("test");
        return e.get("$$testability")
    }
    function K(e, t) {
        return t = t || "_",
        e.replace(Rn, function(e, n) {
            return (n ? t : "") + e.toLowerCase()
        }
        )
    }
    function Z() {
        var t;
        Hn || ((yn = e.jQuery) && yn.fn.on ? (wn = yn,
        u(yn.fn, {
            scope: ti.scope,
            isolateScope: ti.isolateScope,
            controller: ti.controller,
            injector: ti.injector,
            inheritedData: ti.inheritedData
        }),
        t = yn.cleanData,
        yn.cleanData = function(e) {
            var n;
            if (Pn)
                Pn = !1;
            else
                for (var i, r = 0; null  != (i = e[r]); r++)
                    (n = yn._data(i, "events")) && n.$destroy && yn(i).triggerHandler("$destroy");
            t(e)
        }
        ) : wn = le,
        Dn.element = wn,
        Hn = !0)
    }
    function J(e, t, n) {
        if (!e)
            throw In("areq", t || "?", n || "required");
        return e
    }
    function Q(e, t, n) {
        return n && Ln(e) && (e = e[e.length - 1]),
        J(b(e), t, "not a function, got " + (e && "object" == typeof e ? e.constructor.name || "Object" : typeof e)),
        e
    }
    function ee(e, t) {
        if ("hasOwnProperty" === e)
            throw In("badname", t)
    }
    function te(e, t, n) {
        if (!t)
            return e;
        t = t.split(".");
        for (var i, r = e, o = t.length, a = 0; o > a; a++)
            i = t[a],
            e && (e = (r = e)[i]);
        return !n && b(e) ? O(r, e) : e
    }
    function ne(e) {
        var t = e[0];
        e = e[e.length - 1];
        var n = [t];
        do {
            if (t = t.nextSibling,
            !t)
                break;
            n.push(t)
        } while (t !== e);return wn(n)
    }
    function ie() {
        return Object.create(null )
    }
    function re(e) {
        function t(e, t, n) {
            return e[t] || (e[t] = n())
        }
        var n = i("$injector")
          , r = i("ng");
        return e = t(e, "angular", Object),
        e.$$minErr = e.$$minErr || i,
        t(e, "module", function() {
            var e = {};
            return function(i, o, a) {
                if ("hasOwnProperty" === i)
                    throw r("badname", "module");
                return o && e.hasOwnProperty(i) && (e[i] = null ),
                t(e, i, function() {
                    function e(e, n, i, r) {
                        return r || (r = t),
                        function() {
                            return r[i || "push"]([e, n, arguments]),
                            l
                        }
                    }
                    if (!o)
                        throw n("nomod", i);
                    var t = []
                      , r = []
                      , s = []
                      , c = e("$injector", "invoke", "push", r)
                      , l = {
                        _invokeQueue: t,
                        _configBlocks: r,
                        _runBlocks: s,
                        requires: o,
                        name: i,
                        provider: e("$provide", "provider"),
                        factory: e("$provide", "factory"),
                        service: e("$provide", "service"),
                        value: e("$provide", "value"),
                        constant: e("$provide", "constant", "unshift"),
                        animation: e("$animateProvider", "register"),
                        filter: e("$filterProvider", "register"),
                        controller: e("$controllerProvider", "register"),
                        directive: e("$compileProvider", "directive"),
                        config: c,
                        run: function(e) {
                            return s.push(e),
                            this
                        }
                    };
                    return a && c(a),
                    l
                }
                )
            }
        }
        )
    }
    function oe(t) {
        u(t, {
            bootstrap: W,
            copy: D,
            extend: u,
            equals: P,
            element: wn,
            forEach: o,
            injector: Me,
            noop: h,
            bind: O,
            toJson: N,
            fromJson: B,
            identity: p,
            isUndefined: v,
            isDefined: g,
            isString: w,
            isFunction: b,
            isObject: $,
            isNumber: y,
            isElement: C,
            isArray: Ln,
            version: Un,
            isDate: _,
            lowercase: Sn,
            uppercase: xn,
            callbacks: {
                counter: 0
            },
            getTestability: X,
            $$minErr: i,
            $$csp: Nn,
            reloadWithDebugInfo: Y
        }),
        _n = re(e);
        try {
            _n("ngLocale")
        } catch (n) {
            _n("ngLocale", []).provider("$locale", nt)
        }
        _n("ng", ["ngLocale"], ["$provide", function(e) {
            e.provider({
                $$sanitizeUri: Mt
            }),
            e.provider("$compile", Re).directive({
                a: Wi,
                input: lr,
                textarea: lr,
                form: Zi,
                script: Yr,
                select: Zr,
                style: Qr,
                option: Jr,
                ngBind: fr,
                ngBindHtml: pr,
                ngBindTemplate: hr,
                ngClass: vr,
                ngClassEven: $r,
                ngClassOdd: gr,
                ngCloak: wr,
                ngController: yr,
                ngForm: Ji,
                ngHide: Fr,
                ngIf: Sr,
                ngInclude: Tr,
                ngInit: Er,
                ngNonBindable: Br,
                ngPluralize: Rr,
                ngRepeat: Hr,
                ngShow: zr,
                ngStyle: Ur,
                ngSwitch: qr,
                ngSwitchWhen: Gr,
                ngSwitchDefault: jr,
                ngOptions: Kr,
                ngTransclude: Wr,
                ngModel: Or,
                ngList: Cr,
                ngChange: mr,
                pattern: to,
                ngPattern: to,
                required: eo,
                ngRequired: eo,
                minlength: io,
                ngMinlength: io,
                maxlength: no,
                ngMaxlength: no,
                ngValue: dr,
                ngModelOptions: Nr
            }).directive({
                ngInclude: xr
            }).directive(Yi).directive(_r),
            e.provider({
                $anchorScroll: Pe,
                $animate: di,
                $browser: Ve,
                $cacheFactory: Ne,
                $controller: Ue,
                $document: qe,
                $exceptionHandler: Ge,
                $filter: qt,
                $interpolate: et,
                $interval: tt,
                $http: Ke,
                $httpBackend: Je,
                $location: mt,
                $log: vt,
                $parse: Et,
                $rootScope: Dt,
                $q: Ct,
                $$q: kt,
                $sce: Vt,
                $sceDelegate: Ot,
                $sniffer: Nt,
                $templateCache: Be,
                $templateRequest: Bt,
                $$testability: Rt,
                $timeout: Ht,
                $window: Ut,
                $$rAF: It,
                $$asyncCallback: Le,
                $$jqLite: ke
            })
        }
        ])
    }
    function ae(e) {
        return e.replace(jn, function(e, t, n, i) {
            return i ? n.toUpperCase() : n
        }
        ).replace(Wn, "Moz$1")
    }
    function se(e) {
        return e = e.nodeType,
        e === zn || !e || 9 === e
    }
    function ce(e, t) {
        var n, i, r = t.createDocumentFragment(), a = [];
        if (Zn.test(e)) {
            for (n = n || r.appendChild(t.createElement("div")),
            i = (Jn.exec(e) || ["", ""])[1].toLowerCase(),
            i = ei[i] || ei._default,
            n.innerHTML = i[1] + e.replace(Qn, "<$1></$2>") + i[2],
            i = i[0]; i--; )
                n = n.lastChild;
            a = L(a, n.childNodes),
            n = r.firstChild,
            n.textContent = ""
        } else
            a.push(t.createTextNode(e));
        return r.textContent = "",
        r.innerHTML = "",
        o(a, function(e) {
            r.appendChild(e)
        }
        ),
        r
    }
    function le(e) {
        if (e instanceof le)
            return e;
        var n;
        if (w(e) && (e = On(e),
        n = !0),
        !(this instanceof le)) {
            if (n && "<" != e.charAt(0))
                throw Xn("nosel");
            return new le(e)
        }
        if (n) {
            n = t;
            var i;
            e = (i = Kn.exec(e)) ? [n.createElement(i[1])] : (i = ce(e, n)) ? i.childNodes : []
        }
        we(this, e)
    }
    function ue(e) {
        return e.cloneNode(!0)
    }
    function de(e, t) {
        if (t || he(e),
        e.querySelectorAll)
            for (var n = e.querySelectorAll("*"), i = 0, r = n.length; r > i; i++)
                he(n[i])
    }
    function fe(e, t, n, i) {
        if (g(i))
            throw Xn("offargs");
        var r = (i = pe(e)) && i.events
          , a = i && i.handle;
        if (a)
            if (t)
                o(t.split(" "), function(t) {
                    if (g(n)) {
                        var i = r[t];
                        if (I(i || [], n),
                        i && 0 < i.length)
                            return
                    }
                    e.removeEventListener(t, a, !1),
                    delete r[t]
                }
                );
            else
                for (t in r)
                    "$destroy" !== t && e.removeEventListener(t, a, !1),
                    delete r[t]
    }
    function he(e, t) {
        var i = e.ng339
          , r = i && qn[i];
        r && (t ? delete r.data[t] : (r.handle && (r.events.$destroy && r.handle({}, "$destroy"),
        fe(e)),
        delete qn[i],
        e.ng339 = n))
    }
    function pe(e, t) {
        var i = e.ng339
          , i = i && qn[i];
        return t && !i && (e.ng339 = i = ++Gn,
        i = qn[i] = {
            events: {},
            data: {},
            handle: n
        }),
        i
    }
    function me(e, t, n) {
        if (se(e)) {
            var i = g(n)
              , r = !i && t && !$(t)
              , o = !t;
            if (e = (e = pe(e, !r)) && e.data,
            i)
                e[t] = n;
            else {
                if (o)
                    return e;
                if (r)
                    return e && e[t];
                u(e, t)
            }
        }
    }
    function ve(e, t) {
        return e.getAttribute ? -1 < (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + t + " ") : !1
    }
    function ge(e, t) {
        t && e.setAttribute && o(t.split(" "), function(t) {
            e.setAttribute("class", On((" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + On(t) + " ", " ")))
        }
        )
    }
    function $e(e, t) {
        if (t && e.setAttribute) {
            var n = (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            o(t.split(" "), function(e) {
                e = On(e),
                -1 === n.indexOf(" " + e + " ") && (n += e + " ")
            }
            ),
            e.setAttribute("class", On(n))
        }
    }
    function we(e, t) {
        if (t)
            if (t.nodeType)
                e[e.length++] = t;
            else {
                var n = t.length;
                if ("number" == typeof n && t.window !== t) {
                    if (n)
                        for (var i = 0; n > i; i++)
                            e[e.length++] = t[i]
                } else
                    e[e.length++] = t
            }
    }
    function ye(e, t) {
        return _e(e, "$" + (t || "ngController") + "Controller")
    }
    function _e(e, t, i) {
        for (9 == e.nodeType && (e = e.documentElement),
        t = Ln(t) ? t : [t]; e; ) {
            for (var r = 0, o = t.length; o > r; r++)
                if ((i = wn.data(e, t[r])) !== n)
                    return i;
            e = e.parentNode || 11 === e.nodeType && e.host
        }
    }
    function be(e) {
        for (de(e, !0); e.firstChild; )
            e.removeChild(e.firstChild)
    }
    function Se(e, t) {
        t || de(e);
        var n = e.parentNode;
        n && n.removeChild(e)
    }
    function Te(t, n) {
        n = n || e,
        "complete" === n.document.readyState ? n.setTimeout(t) : wn(n).on("load", t)
    }
    function xe(e, t) {
        var n = ni[t.toLowerCase()];
        return n && ii[A(e)] && n
    }
    function Ee(e, t) {
        var n = e.nodeName;
        return ("INPUT" === n || "TEXTAREA" === n) && ri[t]
    }
    function Ce(e, t) {
        var n = function(n, i) {
            n.isDefaultPrevented = function() {
                return n.defaultPrevented
            }
            ;
            var r = t[i || n.type]
              , o = r ? r.length : 0;
            if (o) {
                if (v(n.immediatePropagationStopped)) {
                    var a = n.stopImmediatePropagation;
                    n.stopImmediatePropagation = function() {
                        n.immediatePropagationStopped = !0,
                        n.stopPropagation && n.stopPropagation(),
                        a && a.call(n)
                    }
                }
                n.isImmediatePropagationStopped = function() {
                    return !0 === n.immediatePropagationStopped
                }
                ,
                o > 1 && (r = M(r));
                for (var s = 0; o > s; s++)
                    n.isImmediatePropagationStopped() || r[s].call(e, n)
            }
        }
        ;
        return n.elem = e,
        n
    }
    function ke() {
        this.$get = function() {
            return u(le, {
                hasClass: function(e, t) {
                    return e.attr && (e = e[0]),
                    ve(e, t)
                },
                addClass: function(e, t) {
                    return e.attr && (e = e[0]),
                    $e(e, t)
                },
                removeClass: function(e, t) {
                    return e.attr && (e = e[0]),
                    ge(e, t)
                }
            })
        }
    }
    function Ae(e, t) {
        var n = e && e.$$hashKey;
        return n ? ("function" == typeof n && (n = e.$$hashKey()),
        n) : (n = typeof e,
        n = "function" == n || "object" == n && null  !== e ? e.$$hashKey = n + ":" + (t || c)() : n + ":" + e)
    }
    function Ie(e, t) {
        if (t) {
            var n = 0;
            this.nextUid = function() {
                return ++n
            }
        }
        o(e, this.put, this)
    }
    function De(e) {
        return (e = e.toString().replace(ci, "").match(oi)) ? "function(" + (e[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
    }
    function Me(e, t) {
        function i(e) {
            return function(t, n) {
                return $(t) ? void o(t, s(e)) : e(t, n)
            }
        }
        function r(e, t) {
            if (ee(e, "service"),
            (b(t) || Ln(t)) && (t = y.instantiate(t)),
            !t.$get)
                throw li("pget", e);
            return g[e + "Provider"] = t
        }
        function a(e, t) {
            return function() {
                var n = S.invoke(t, this);
                if (v(n))
                    throw li("undef", e);
                return n
            }
        }
        function c(e, t, n) {
            return r(e, {
                $get: !1 !== n ? a(e, t) : t
            })
        }
        function l(e) {
            var t, n = [];
            return o(e, function(e) {
                function i(e) {
                    var t, n;
                    for (t = 0,
                    n = e.length; n > t; t++) {
                        var i = e[t]
                          , r = y.get(i[0]);
                        r[i[1]].apply(r, i[2])
                    }
                }
                if (!p.get(e)) {
                    p.put(e, !0);
                    try {
                        w(e) ? (t = _n(e),
                        n = n.concat(l(t.requires)).concat(t._runBlocks),
                        i(t._invokeQueue),
                        i(t._configBlocks)) : b(e) ? n.push(y.invoke(e)) : Ln(e) ? n.push(y.invoke(e)) : Q(e, "module")
                    } catch (r) {
                        throw Ln(e) && (e = e[e.length - 1]),
                        r.message && r.stack && -1 == r.stack.indexOf(r.message) && (r = r.message + "\n" + r.stack),
                        li("modulerr", e, r.stack || r.message || r)
                    }
                }
            }
            ),
            n
        }
        function u(e, n) {
            function i(t, i) {
                if (e.hasOwnProperty(t)) {
                    if (e[t] === d)
                        throw li("cdep", t + " <- " + f.join(" <- "));
                    return e[t]
                }
                try {
                    return f.unshift(t),
                    e[t] = d,
                    e[t] = n(t, i)
                } catch (r) {
                    throw e[t] === d && delete e[t],
                    r
                } finally {
                    f.shift()
                }
            }
            function r(e, n, r, o) {
                "string" == typeof r && (o = r,
                r = null );
                var a, s, c, l = [], u = Me.$$annotate(e, t, o);
                for (s = 0,
                a = u.length; a > s; s++) {
                    if (c = u[s],
                    "string" != typeof c)
                        throw li("itkn", c);
                    l.push(r && r.hasOwnProperty(c) ? r[c] : i(c, o))
                }
                return Ln(e) && (e = e[a]),
                e.apply(n, l)
            }
            return {
                invoke: r,
                instantiate: function(e, t, n) {
                    var i = Object.create((Ln(e) ? e[e.length - 1] : e).prototype || null );
                    return e = r(e, i, t, n),
                    $(e) || b(e) ? e : i
                },
                get: i,
                annotate: Me.$$annotate,
                has: function(t) {
                    return g.hasOwnProperty(t + "Provider") || e.hasOwnProperty(t)
                }
            }
        }
        t = !0 === t;
        var d = {}
          , f = []
          , p = new Ie([],!0)
          , g = {
            $provide: {
                provider: i(r),
                factory: i(c),
                service: i(function(e, t) {
                    return c(e, ["$injector", function(e) {
                        return e.instantiate(t)
                    }
                    ])
                }
                ),
                value: i(function(e, t) {
                    return c(e, m(t), !1)
                }
                ),
                constant: i(function(e, t) {
                    ee(e, "constant"),
                    g[e] = t,
                    _[e] = t
                }
                ),
                decorator: function(e, t) {
                    var n = y.get(e + "Provider")
                      , i = n.$get;
                    n.$get = function() {
                        var e = S.invoke(i, n);
                        return S.invoke(t, null , {
                            $delegate: e
                        })
                    }
                }
            }
        }
          , y = g.$injector = u(g, function(e, t) {
            throw Dn.isString(t) && f.push(t),
            li("unpr", f.join(" <- "))
        }
        )
          , _ = {}
          , S = _.$injector = u(_, function(e, t) {
            var i = y.get(e + "Provider", t);
            return S.invoke(i.$get, i, n, e)
        }
        );
        return o(l(e), function(e) {
            S.invoke(e || h)
        }
        ),
        S
    }
    function Pe() {
        var e = !0;
        this.disableAutoScrolling = function() {
            e = !1
        }
        ,
        this.$get = ["$window", "$location", "$rootScope", function(t, n, i) {
            function r(e) {
                var t = null ;
                return Array.prototype.some.call(e, function(e) {
                    return "a" === A(e) ? (t = e,
                    !0) : void 0
                }
                ),
                t
            }
            function o(e) {
                if (e) {
                    e.scrollIntoView();
                    var n;
                    n = a.yOffset,
                    b(n) ? n = n() : C(n) ? (n = n[0],
                    n = "fixed" !== t.getComputedStyle(n).position ? 0 : n.getBoundingClientRect().bottom) : y(n) || (n = 0),
                    n && (e = e.getBoundingClientRect().top,
                    t.scrollBy(0, e - n))
                } else
                    t.scrollTo(0, 0)
            }
            function a() {
                var e, t = n.hash();
                t ? (e = s.getElementById(t)) ? o(e) : (e = r(s.getElementsByName(t))) ? o(e) : "top" === t && o(null ) : o(null )
            }
            var s = t.document;
            return e && i.$watch(function() {
                return n.hash()
            }
            , function(e, t) {
                e === t && "" === e || Te(function() {
                    i.$evalAsync(a)
                }
                )
            }
            ),
            a
        }
        ]
    }
    function Le() {
        this.$get = ["$$rAF", "$timeout", function(e, t) {
            return e.supported ? function(t) {
                return e(t)
            }
             : function(e) {
                return t(e, 0, !1)
            }
        }
        ]
    }
    function Oe(e, t, i, r) {
        function a(e) {
            try {
                e.apply(null , En.call(arguments, 1))
            } finally {
                if (b--,
                0 === b)
                    for (; S.length; )
                        try {
                            S.pop()()
                        } catch (t) {
                            i.error(t)
                        }
            }
        }
        function s(e, t) {
            !function n() {
                o(x, function(e) {
                    e()
                }
                ),
                T = t(n, e)
            }
            ()
        }
        function c() {
            l(),
            u()
        }
        function l() {
            E = e.history.state,
            E = v(E) ? null  : E,
            P(E, L) && (E = L),
            L = E
        }
        function u() {
            (k !== f.url() || C !== E) && (k = f.url(),
            C = E,
            o(D, function(e) {
                e(f.url(), E)
            }
            ))
        }
        function d(e) {
            try {
                return decodeURIComponent(e)
            } catch (t) {
                return e
            }
        }
        var f = this
          , p = t[0]
          , m = e.location
          , g = e.history
          , $ = e.setTimeout
          , y = e.clearTimeout
          , _ = {};
        f.isMock = !1;
        var b = 0
          , S = [];
        f.$$completeOutstandingRequest = a,
        f.$$incOutstandingRequestCount = function() {
            b++
        }
        ,
        f.notifyWhenNoOutstandingRequests = function(e) {
            o(x, function(e) {
                e()
            }
            ),
            0 === b ? e() : S.push(e)
        }
        ;
        var T, x = [];
        f.addPollFn = function(e) {
            return v(T) && s(100, $),
            x.push(e),
            e
        }
        ;
        var E, C, k = m.href, A = t.find("base"), I = null ;
        l(),
        C = E,
        f.url = function(t, n, i) {
            if (v(i) && (i = null ),
            m !== e.location && (m = e.location),
            g !== e.history && (g = e.history),
            t) {
                var o = C === i;
                if (k === t && (!r.history || o))
                    return f;
                var a = k && st(k) === st(t);
                return k = t,
                C = i,
                !r.history || a && o ? (a || (I = t),
                n ? m.replace(t) : a ? (n = m,
                i = t.indexOf("#"),
                t = -1 === i ? "" : t.substr(i + 1),
                n.hash = t) : m.href = t) : (g[n ? "replaceState" : "pushState"](i, "", t),
                l(),
                C = E),
                f
            }
            return I || m.href.replace(/%27/g, "'")
        }
        ,
        f.state = function() {
            return E
        }
        ;
        var D = []
          , M = !1
          , L = null ;
        f.onUrlChange = function(t) {
            return M || (r.history && wn(e).on("popstate", c),
            wn(e).on("hashchange", c),
            M = !0),
            D.push(t),
            t
        }
        ,
        f.$$checkUrlChange = u,
        f.baseHref = function() {
            var e = A.attr("href");
            return e ? e.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
        }
        ;
        var O = {}
          , V = ""
          , N = f.baseHref();
        f.cookies = function(e, t) {
            var r, o, a, s;
            if (!e) {
                if (p.cookie !== V)
                    for (V = p.cookie,
                    r = V.split("; "),
                    O = {},
                    a = 0; a < r.length; a++)
                        o = r[a],
                        s = o.indexOf("="),
                        s > 0 && (e = d(o.substring(0, s)),
                        O[e] === n && (O[e] = d(o.substring(s + 1))));
                return O
            }
            t === n ? p.cookie = encodeURIComponent(e) + "=;path=" + N + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : w(t) && (r = (p.cookie = encodeURIComponent(e) + "=" + encodeURIComponent(t) + ";path=" + N).length + 1,
            r > 4096 && i.warn("Cookie '" + e + "' possibly not set or overflowed because it was too large (" + r + " > 4096 bytes)!"))
        }
        ,
        f.defer = function(e, t) {
            var n;
            return b++,
            n = $(function() {
                delete _[n],
                a(e)
            }
            , t || 0),
            _[n] = !0,
            n
        }
        ,
        f.defer.cancel = function(e) {
            return _[e] ? (delete _[e],
            y(e),
            a(h),
            !0) : !1
        }
    }
    function Ve() {
        this.$get = ["$window", "$log", "$sniffer", "$document", function(e, t, n, i) {
            return new Oe(e,i,t,n)
        }
        ]
    }
    function Ne() {
        this.$get = function() {
            function e(e, n) {
                function r(e) {
                    e != f && (h ? h == e && (h = e.n) : h = e,
                    o(e.n, e.p),
                    o(e, f),
                    f = e,
                    f.n = null )
                }
                function o(e, t) {
                    e != t && (e && (e.p = t),
                    t && (t.n = e))
                }
                if (e in t)
                    throw i("$cacheFactory")("iid", e);
                var a = 0
                  , s = u({}, n, {
                    id: e
                })
                  , c = {}
                  , l = n && n.capacity || Number.MAX_VALUE
                  , d = {}
                  , f = null
                  , h = null ;
                return t[e] = {
                    put: function(e, t) {
                        if (l < Number.MAX_VALUE) {
                            var n = d[e] || (d[e] = {
                                key: e
                            });
                            r(n)
                        }
                        return v(t) ? void 0 : (e in c || a++,
                        c[e] = t,
                        a > l && this.remove(h.key),
                        t)
                    },
                    get: function(e) {
                        if (l < Number.MAX_VALUE) {
                            var t = d[e];
                            if (!t)
                                return;
                            r(t)
                        }
                        return c[e]
                    },
                    remove: function(e) {
                        if (l < Number.MAX_VALUE) {
                            var t = d[e];
                            if (!t)
                                return;
                            t == f && (f = t.p),
                            t == h && (h = t.n),
                            o(t.n, t.p),
                            delete d[e]
                        }
                        delete c[e],
                        a--
                    },
                    removeAll: function() {
                        c = {},
                        a = 0,
                        d = {},
                        f = h = null
                    },
                    destroy: function() {
                        d = s = c = null ,
                        delete t[e]
                    },
                    info: function() {
                        return u({}, s, {
                            size: a
                        })
                    }
                }
            }
            var t = {};
            return e.info = function() {
                var e = {};
                return o(t, function(t, n) {
                    e[n] = t.info()
                }
                ),
                e
            }
            ,
            e.get = function(e) {
                return t[e]
            }
            ,
            e
        }
    }
    function Be() {
        this.$get = ["$cacheFactory", function(e) {
            return e("templates")
        }
        ]
    }
    function Re(e, i) {
        function r(e, t) {
            var n = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/
              , i = {};
            return o(e, function(e, r) {
                var o = e.match(n);
                if (!o)
                    throw fi("iscp", t, r, e);
                i[r] = {
                    mode: o[1][0],
                    collection: "*" === o[2],
                    optional: "?" === o[3],
                    attrName: o[4] || r
                }
            }
            ),
            i
        }
        var a = {}
          , c = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/
          , l = /(([\w\-]+)(?:\:([^;]+))?;?)/
          , d = k("ngSrc,ngSrcset,src,srcset")
          , v = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/
          , y = /^(on[a-z]+|formaction)$/;
        this.directive = function S(t, n) {
            return ee(t, "directive"),
            w(t) ? (J(n, "directiveFactory"),
            a.hasOwnProperty(t) || (a[t] = [],
            e.factory(t + "Directive", ["$injector", "$exceptionHandler", function(e, n) {
                var i = [];
                return o(a[t], function(o, a) {
                    try {
                        var s = e.invoke(o);
                        b(s) ? s = {
                            compile: m(s)
                        } : !s.compile && s.link && (s.compile = m(s.link)),
                        s.priority = s.priority || 0,
                        s.index = a,
                        s.name = s.name || t,
                        s.require = s.require || s.controller && s.name,
                        s.restrict = s.restrict || "EA",
                        $(s.scope) && (s.$$isolateBindings = r(s.scope, s.name)),
                        i.push(s)
                    } catch (c) {
                        n(c)
                    }
                }
                ),
                i
            }
            ])),
            a[t].push(n)) : o(t, s(S)),
            this
        }
        ,
        this.aHrefSanitizationWhitelist = function(e) {
            return g(e) ? (i.aHrefSanitizationWhitelist(e),
            this) : i.aHrefSanitizationWhitelist()
        }
        ,
        this.imgSrcSanitizationWhitelist = function(e) {
            return g(e) ? (i.imgSrcSanitizationWhitelist(e),
            this) : i.imgSrcSanitizationWhitelist()
        }
        ;
        var _ = !0;
        this.debugInfoEnabled = function(e) {
            return g(e) ? (_ = e,
            this) : _
        }
        ,
        this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function(e, i, r, s, m, g, S, T, E, C, k) {
            function D(e, t) {
                try {
                    e.addClass(t)
                } catch (n) {}
            }
            function M(e, t, n, i, r) {
                e instanceof wn || (e = wn(e)),
                o(e, function(t, n) {
                    t.nodeType == Fn && t.nodeValue.match(/\S+/) && (e[n] = wn(t).wrap("<span></span>").parent()[0])
                }
                );
                var a = L(e, t, e, n, i, r);
                M.$$addScopeClass(e);
                var s = null ;
                return function(t, n, i) {
                    J(t, "scope"),
                    i = i || {};
                    var r = i.parentBoundTranscludeFn
                      , o = i.transcludeControllers;
                    if (i = i.futureParentElement,
                    r && r.$$boundTransclude && (r = r.$$boundTransclude),
                    s || (s = (i = i && i[0]) && "foreignobject" !== A(i) && i.toString().match(/SVG/) ? "svg" : "html"),
                    i = "html" !== s ? wn(X(s, wn("<div>").append(e).html())) : n ? ti.clone.call(e) : e,
                    o)
                        for (var c in o)
                            i.data("$" + c + "Controller", o[c].instance);
                    return M.$$addScopeInfo(i, t),
                    n && n(i, t),
                    a && a(t, i, i, r),
                    i
                }
            }
            function L(e, t, i, r, o, a) {
                function s(e, i, r, o) {
                    var a, s, c, l, u, d, p;
                    if (f)
                        for (p = Array(i.length),
                        l = 0; l < h.length; l += 3)
                            a = h[l],
                            p[a] = i[a];
                    else
                        p = i;
                    for (l = 0,
                    u = h.length; u > l; )
                        s = p[h[l++]],
                        i = h[l++],
                        a = h[l++],
                        i ? (i.scope ? (c = e.$new(),
                        M.$$addScopeInfo(wn(s), c)) : c = e,
                        d = i.transcludeOnThisElement ? O(e, i.transclude, o, i.elementTranscludeOnThisElement) : !i.templateOnThisElement && o ? o : !o && t ? O(e, t) : null ,
                        i(a, c, s, r, d)) : a && a(e, s.childNodes, n, o)
                }
                for (var c, l, u, d, f, h = [], p = 0; p < e.length; p++)
                    c = new re,
                    l = V(e[p], [], c, 0 === p ? r : n, o),
                    (a = l.length ? H(l, e[p], c, t, i, null , [], [], a) : null ) && a.scope && M.$$addScopeClass(c.$$element),
                    c = a && a.terminal || !(u = e[p].childNodes) || !u.length ? null  : L(u, a ? (a.transcludeOnThisElement || !a.templateOnThisElement) && a.transclude : t),
                    (a || c) && (h.push(p, a, c),
                    d = !0,
                    f = f || a),
                    a = null ;
                return d ? s : null
            }
            function O(e, t, n, i) {
                return function(i, r, o, a, s) {
                    return i || (i = e.$new(!1, s),
                    i.$$transcluded = !0),
                    t(i, r, {
                        parentBoundTranscludeFn: n,
                        transcludeControllers: o,
                        futureParentElement: a
                    })
                }
            }
            function V(e, t, n, i, r) {
                var o, a = n.$attr;
                switch (e.nodeType) {
                case zn:
                    F(t, He(A(e)), "E", i, r);
                    for (var s, u, d, f = e.attributes, h = 0, p = f && f.length; p > h; h++) {
                        var m = !1
                          , v = !1;
                        s = f[h],
                        o = s.name,
                        u = On(s.value),
                        s = He(o),
                        (d = ce.test(s)) && (o = o.replace(hi, "").substr(8).replace(/_(.)/g, function(e, t) {
                            return t.toUpperCase()
                        }
                        ));
                        var g = s.replace(/(Start|End)$/, "");
                        U(g) && s === g + "Start" && (m = o,
                        v = o.substr(0, o.length - 5) + "end",
                        o = o.substr(0, o.length - 6)),
                        s = He(o.toLowerCase()),
                        a[s] = o,
                        (d || !n.hasOwnProperty(s)) && (n[s] = u,
                        xe(e, s) && (n[s] = !0)),
                        Q(e, t, u, s, d),
                        F(t, s, "A", i, r, m, v)
                    }
                    if (e = e.className,
                    $(e) && (e = e.animVal),
                    w(e) && "" !== e)
                        for (; o = l.exec(e); )
                            s = He(o[2]),
                            F(t, s, "C", i, r) && (n[s] = On(o[3])),
                            e = e.substr(o.index + o[0].length);
                    break;
                case Fn:
                    Y(t, e.nodeValue);
                    break;
                case 8:
                    try {
                        (o = c.exec(e.nodeValue)) && (s = He(o[1]),
                        F(t, s, "M", i, r) && (n[s] = On(o[2])))
                    } catch (y) {}
                }
                return t.sort(j),
                t
            }
            function N(e, t, n) {
                var i = []
                  , r = 0;
                if (t && e.hasAttribute && e.hasAttribute(t)) {
                    do {
                        if (!e)
                            throw fi("uterdir", t, n);
                        e.nodeType == zn && (e.hasAttribute(t) && r++,
                        e.hasAttribute(n) && r--),
                        i.push(e),
                        e = e.nextSibling
                    } while (r > 0)
                } else
                    i.push(e);
                return wn(i)
            }
            function B(e, t, n) {
                return function(i, r, o, a, s) {
                    return r = N(r[0], t, n),
                    e(i, r, o, a, s)
                }
            }
            function H(e, a, s, c, l, u, d, f, h) {
                function p(e, t, n, i) {
                    e && (n && (e = B(e, n, i)),
                    e.require = E.require,
                    e.directiveName = C,
                    (L === E || E.$$isolateScope) && (e = te(e, {
                        isolateScope: !0
                    })),
                    d.push(e)),
                    t && (n && (t = B(t, n, i)),
                    t.require = E.require,
                    t.directiveName = C,
                    (L === E || E.$$isolateScope) && (t = te(t, {
                        isolateScope: !0
                    })),
                    f.push(t))
                }
                function y(e, t, n, i) {
                    var r, a, s = "data", c = !1, l = n;
                    if (w(t)) {
                        if (a = t.match(v),
                        t = t.substring(a[0].length),
                        a[3] && (a[1] ? a[3] = null  : a[1] = a[3]),
                        "^" === a[1] ? s = "inheritedData" : "^^" === a[1] && (s = "inheritedData",
                        l = n.parent()),
                        "?" === a[2] && (c = !0),
                        r = null ,
                        i && "data" === s && (r = i[t]) && (r = r.instance),
                        r = r || l[s]("$" + t + "Controller"),
                        !r && !c)
                            throw fi("ctreq", t, e);
                        return r || null
                    }
                    return Ln(t) && (r = [],
                    o(t, function(t) {
                        r.push(y(e, t, n, i))
                    }
                    )),
                    r
                }
                function _(e, t, r, c, l) {
                    function u(e, t, i) {
                        var r;
                        return x(e) || (i = t,
                        t = e,
                        e = n),
                        j && (r = w),
                        i || (i = j ? b.parent() : b),
                        l(e, t, r, i, C)
                    }
                    var h, p, v, $, w, _, b, S;
                    if (a === r ? (S = s,
                    b = s.$$element) : (b = wn(r),
                    S = new re(b,s)),
                    L && ($ = t.$new(!0)),
                    l && (_ = u,
                    _.$$boundTransclude = l),
                    D && (T = {},
                    w = {},
                    o(D, function(e) {
                        var n = {
                            $scope: e === L || e.$$isolateScope ? $ : t,
                            $element: b,
                            $attrs: S,
                            $transclude: _
                        };
                        v = e.controller,
                        "@" == v && (v = S[e.name]),
                        n = g(v, n, !0, e.controllerAs),
                        w[e.name] = n,
                        j || b.data("$" + e.name + "Controller", n.instance),
                        T[e.name] = n
                    }
                    )),
                    L) {
                        M.$$addScopeInfo(b, $, !0, !(O && (O === L || O === L.$$originalDirective))),
                        M.$$addScopeClass(b, !0),
                        c = T && T[L.name];
                        var E = $;
                        c && c.identifier && !0 === L.bindToController && (E = c.instance),
                        o($.$$isolateBindings = L.$$isolateBindings, function(e, n) {
                            var r, o, a, s, c = e.attrName, l = e.optional;
                            switch (e.mode) {
                            case "@":
                                S.$observe(c, function(e) {
                                    E[n] = e
                                }
                                ),
                                S.$$observers[c].$$scope = t,
                                S[c] && (E[n] = i(S[c])(t));
                                break;
                            case "=":
                                if (l && !S[c])
                                    break;
                                o = m(S[c]),
                                s = o.literal ? P : function(e, t) {
                                    return e === t || e !== e && t !== t
                                }
                                ,
                                a = o.assign || function() {
                                    throw r = E[n] = o(t),
                                    fi("nonassign", S[c], L.name)
                                }
                                ,
                                r = E[n] = o(t),
                                l = function(e) {
                                    return s(e, E[n]) || (s(e, r) ? a(t, e = E[n]) : E[n] = e),
                                    r = e
                                }
                                ,
                                l.$stateful = !0,
                                l = e.collection ? t.$watchCollection(S[c], l) : t.$watch(m(S[c], l), null , o.literal),
                                $.$on("$destroy", l);
                                break;
                            case "&":
                                o = m(S[c]),
                                E[n] = function(e) {
                                    return o(t, e)
                                }
                            }
                        }
                        )
                    }
                    for (T && (o(T, function(e) {
                        e()
                    }
                    ),
                    T = null ),
                    c = 0,
                    h = d.length; h > c; c++)
                        p = d[c],
                        ne(p, p.isolateScope ? $ : t, b, S, p.require && y(p.directiveName, p.require, b, w), _);
                    var C = t;
                    for (L && (L.template || null  === L.templateUrl) && (C = $),
                    e && e(C, r.childNodes, n, l),
                    c = f.length - 1; c >= 0; c--)
                        p = f[c],
                        ne(p, p.isolateScope ? $ : t, b, S, p.require && y(p.directiveName, p.require, b, w), _)
                }
                h = h || {};
                for (var S, T, E, C, k, A, I = -Number.MAX_VALUE, D = h.controllerDirectives, L = h.newIsolateScopeDirective, O = h.templateDirective, H = h.nonTlbTranscludeDirective, F = !1, U = !1, j = h.hasElementTranscludeDirective, Y = s.$$element = wn(a), K = c, Z = 0, J = e.length; J > Z; Z++) {
                    E = e[Z];
                    var Q = E.$$start
                      , ie = E.$$end;
                    if (Q && (Y = N(a, Q, ie)),
                    k = n,
                    I > E.priority)
                        break;
                    if ((k = E.scope) && (E.templateUrl || ($(k) ? (W("new/isolated scope", L || S, E, Y),
                    L = E) : W("new/isolated scope", L, E, Y)),
                    S = S || E),
                    C = E.name,
                    !E.templateUrl && E.controller && (k = E.controller,
                    D = D || {},
                    W("'" + C + "' controller", D[C], E, Y),
                    D[C] = E),
                    (k = E.transclude) && (F = !0,
                    E.$$tlb || (W("transclusion", H, E, Y),
                    H = E),
                    "element" == k ? (j = !0,
                    I = E.priority,
                    k = Y,
                    Y = s.$$element = wn(t.createComment(" " + C + ": " + s[C] + " ")),
                    a = Y[0],
                    ee(l, En.call(k, 0), a),
                    K = M(k, c, I, u && u.name, {
                        nonTlbTranscludeDirective: H
                    })) : (k = wn(ue(a)).contents(),
                    Y.empty(),
                    K = M(k, c))),
                    E.template)
                        if (U = !0,
                        W("template", O, E, Y),
                        O = E,
                        k = b(E.template) ? E.template(Y, s) : E.template,
                        k = se(k),
                        E.replace) {
                            if (u = E,
                            k = Zn.test(k) ? Fe(X(E.templateNamespace, On(k))) : [],
                            a = k[0],
                            1 != k.length || a.nodeType !== zn)
                                throw fi("tplrt", C, "");
                            ee(l, Y, a),
                            J = {
                                $attr: {}
                            },
                            k = V(a, [], J);
                            var oe = e.splice(Z + 1, e.length - (Z + 1));
                            L && z(k),
                            e = e.concat(k).concat(oe),
                            q(s, J),
                            J = e.length
                        } else
                            Y.html(k);
                    if (E.templateUrl)
                        U = !0,
                        W("template", O, E, Y),
                        O = E,
                        E.replace && (u = E),
                        _ = G(e.splice(Z, e.length - Z), Y, s, l, F && K, d, f, {
                            controllerDirectives: D,
                            newIsolateScopeDirective: L,
                            templateDirective: O,
                            nonTlbTranscludeDirective: H
                        }),
                        J = e.length;
                    else if (E.compile)
                        try {
                            A = E.compile(Y, s, K),
                            b(A) ? p(null , A, Q, ie) : A && p(A.pre, A.post, Q, ie)
                        } catch (ae) {
                            r(ae, R(Y))
                        }
                    E.terminal && (_.terminal = !0,
                    I = Math.max(I, E.priority))
                }
                return _.scope = S && !0 === S.scope,
                _.transcludeOnThisElement = F,
                _.elementTranscludeOnThisElement = j,
                _.templateOnThisElement = U,
                _.transclude = K,
                h.hasElementTranscludeDirective = j,
                _
            }
            function z(e) {
                for (var t = 0, n = e.length; n > t; t++)
                    e[t] = f(e[t], {
                        $$isolateScope: !0
                    })
            }
            function F(t, i, o, s, c, l, u) {
                if (i === c)
                    return null ;
                if (c = null ,
                a.hasOwnProperty(i)) {
                    var d;
                    i = e.get(i + "Directive");
                    for (var h = 0, p = i.length; p > h; h++)
                        try {
                            d = i[h],
                            (s === n || s > d.priority) && -1 != d.restrict.indexOf(o) && (l && (d = f(d, {
                                $$start: l,
                                $$end: u
                            })),
                            t.push(d),
                            c = d)
                        } catch (m) {
                            r(m)
                        }
                }
                return c
            }
            function U(t) {
                if (a.hasOwnProperty(t))
                    for (var n = e.get(t + "Directive"), i = 0, r = n.length; r > i; i++)
                        if (t = n[i],
                        t.multiElement)
                            return !0;
                return !1
            }
            function q(e, t) {
                var n = t.$attr
                  , i = e.$attr
                  , r = e.$$element;
                o(e, function(i, r) {
                    "$" != r.charAt(0) && (t[r] && t[r] !== i && (i += ("style" === r ? ";" : " ") + t[r]),
                    e.$set(r, i, !0, n[r]))
                }
                ),
                o(t, function(t, o) {
                    "class" == o ? (D(r, t),
                    e["class"] = (e["class"] ? e["class"] + " " : "") + t) : "style" == o ? (r.attr("style", r.attr("style") + ";" + t),
                    e.style = (e.style ? e.style + ";" : "") + t) : "$" == o.charAt(0) || e.hasOwnProperty(o) || (e[o] = t,
                    i[o] = n[o])
                }
                )
            }
            function G(e, t, n, i, r, a, c, l) {
                var u, d, h = [], p = t[0], m = e.shift(), v = f(m, {
                    templateUrl: null ,
                    transclude: null ,
                    replace: null ,
                    $$originalDirective: m
                }), g = b(m.templateUrl) ? m.templateUrl(t, n) : m.templateUrl, w = m.templateNamespace;
                return t.empty(),
                s(E.getTrustedResourceUrl(g)).then(function(s) {
                    var f, y;
                    if (s = se(s),
                    m.replace) {
                        if (s = Zn.test(s) ? Fe(X(w, On(s))) : [],
                        f = s[0],
                        1 != s.length || f.nodeType !== zn)
                            throw fi("tplrt", m.name, g);
                        s = {
                            $attr: {}
                        },
                        ee(i, t, f);
                        var _ = V(f, [], s);
                        $(m.scope) && z(_),
                        e = _.concat(e),
                        q(n, s)
                    } else
                        f = p,
                        t.html(s);
                    for (e.unshift(v),
                    u = H(e, f, n, r, t, m, a, c, l),
                    o(i, function(e, n) {
                        e == f && (i[n] = t[0])
                    }
                    ),
                    d = L(t[0].childNodes, r); h.length; ) {
                        s = h.shift(),
                        y = h.shift();
                        var b = h.shift()
                          , S = h.shift()
                          , _ = t[0];
                        if (!s.$$destroyed) {
                            if (y !== p) {
                                var T = y.className;
                                l.hasElementTranscludeDirective && m.replace || (_ = ue(f)),
                                ee(b, wn(y), _),
                                D(wn(_), T)
                            }
                            y = u.transcludeOnThisElement ? O(s, u.transclude, S) : S,
                            u(d, s, _, i, y)
                        }
                    }
                    h = null
                }
                ),
                function(e, t, n, i, r) {
                    e = r,
                    t.$$destroyed || (h ? h.push(t, n, i, e) : (u.transcludeOnThisElement && (e = O(t, u.transclude, r)),
                    u(d, t, n, i, e)))
                }
            }
            function j(e, t) {
                var n = t.priority - e.priority;
                return 0 !== n ? n : e.name !== t.name ? e.name < t.name ? -1 : 1 : e.index - t.index
            }
            function W(e, t, n, i) {
                if (t)
                    throw fi("multidir", t.name, n.name, e, R(i))
            }
            function Y(e, t) {
                var n = i(t, !0);
                n && e.push({
                    priority: 0,
                    compile: function(e) {
                        e = e.parent();
                        var t = !!e.length;
                        return t && M.$$addBindingClass(e),
                        function(e, i) {
                            var r = i.parent();
                            t || M.$$addBindingClass(r),
                            M.$$addBindingInfo(r, n.expressions),
                            e.$watch(n, function(e) {
                                i[0].nodeValue = e
                            }
                            )
                        }
                    }
                })
            }
            function X(e, n) {
                switch (e = Sn(e || "html")) {
                case "svg":
                case "math":
                    var i = t.createElement("div");
                    return i.innerHTML = "<" + e + ">" + n + "</" + e + ">",
                    i.childNodes[0].childNodes;
                default:
                    return n
                }
            }
            function Z(e, t) {
                if ("srcdoc" == t)
                    return E.HTML;
                var n = A(e);
                return "xlinkHref" == t || "form" == n && "action" == t || "img" != n && ("src" == t || "ngSrc" == t) ? E.RESOURCE_URL : void 0
            }
            function Q(e, t, n, r, o) {
                var a = Z(e, r);
                o = d[r] || o;
                var s = i(n, !0, a, o);
                if (s) {
                    if ("multiple" === r && "select" === A(e))
                        throw fi("selmulti", R(e));
                    t.push({
                        priority: 100,
                        compile: function() {
                            return {
                                pre: function(e, t, c) {
                                    if (t = c.$$observers || (c.$$observers = {}),
                                    y.test(r))
                                        throw fi("nodomevents");
                                    var l = c[r];
                                    l !== n && (s = l && i(l, !0, a, o),
                                    n = l),
                                    s && (c[r] = s(e),
                                    (t[r] || (t[r] = [])).$$inter = !0,
                                    (c.$$observers && c.$$observers[r].$$scope || e).$watch(s, function(e, t) {
                                        "class" === r && e != t ? c.$updateClass(e, t) : c.$set(r, e)
                                    }
                                    ))
                                }
                            }
                        }
                    })
                }
            }
            function ee(e, n, i) {
                var r, o, a = n[0], s = n.length, c = a.parentNode;
                if (e)
                    for (r = 0,
                    o = e.length; o > r; r++)
                        if (e[r] == a) {
                            e[r++] = i,
                            o = r + s - 1;
                            for (var l = e.length; l > r; r++,
                            o++)
                                l > o ? e[r] = e[o] : delete e[r];
                            e.length -= s - 1,
                            e.context === a && (e.context = i);
                            break
                        }
                for (c && c.replaceChild(i, a),
                e = t.createDocumentFragment(),
                e.appendChild(a),
                wn(i).data(wn(a).data()),
                yn ? (Pn = !0,
                yn.cleanData([a])) : delete wn.cache[a[wn.expando]],
                a = 1,
                s = n.length; s > a; a++)
                    c = n[a],
                    wn(c).remove(),
                    e.appendChild(c),
                    delete n[a];
                n[0] = i,
                n.length = 1
            }
            function te(e, t) {
                return u(function() {
                    return e.apply(null , arguments)
                }
                , e, t)
            }
            function ne(e, t, n, i, o, a) {
                try {
                    e(t, n, i, o, a)
                } catch (s) {
                    r(s, R(n))
                }
            }
            var re = function(e, t) {
                if (t) {
                    var n, i, r, o = Object.keys(t);
                    for (n = 0,
                    i = o.length; i > n; n++)
                        r = o[n],
                        this[r] = t[r]
                } else
                    this.$attr = {};
                this.$$element = e
            }
            ;
            re.prototype = {
                $normalize: He,
                $addClass: function(e) {
                    e && 0 < e.length && C.addClass(this.$$element, e)
                },
                $removeClass: function(e) {
                    e && 0 < e.length && C.removeClass(this.$$element, e)
                },
                $updateClass: function(e, t) {
                    var n = ze(e, t);
                    n && n.length && C.addClass(this.$$element, n),
                    (n = ze(t, e)) && n.length && C.removeClass(this.$$element, n)
                },
                $set: function(e, t, i, a) {
                    var s = this.$$element[0]
                      , c = xe(s, e)
                      , l = Ee(s, e)
                      , s = e;
                    if (c ? (this.$$element.prop(e, t),
                    a = c) : l && (this[l] = t,
                    s = l),
                    this[e] = t,
                    a ? this.$attr[e] = a : (a = this.$attr[e]) || (this.$attr[e] = a = K(e, "-")),
                    c = A(this.$$element),
                    "a" === c && "href" === e || "img" === c && "src" === e)
                        this[e] = t = k(t, "src" === e);
                    else if ("img" === c && "srcset" === e) {
                        for (var c = "", l = On(t), u = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, u = /\s/.test(l) ? u : /(,)/, l = l.split(u), u = Math.floor(l.length / 2), d = 0; u > d; d++)
                            var f = 2 * d
                              , c = c + k(On(l[f]), !0)
                              , c = c + (" " + On(l[f + 1]));
                        l = On(l[2 * d]).split(/\s/),
                        c += k(On(l[0]), !0),
                        2 === l.length && (c += " " + On(l[1])),
                        this[e] = t = c
                    }
                    !1 !== i && (null  === t || t === n ? this.$$element.removeAttr(a) : this.$$element.attr(a, t)),
                    (e = this.$$observers) && o(e[s], function(e) {
                        try {
                            e(t)
                        } catch (n) {
                            r(n)
                        }
                    }
                    )
                },
                $observe: function(e, t) {
                    var n = this
                      , i = n.$$observers || (n.$$observers = ie())
                      , r = i[e] || (i[e] = []);
                    return r.push(t),
                    S.$evalAsync(function() {
                        !r.$$inter && n.hasOwnProperty(e) && t(n[e])
                    }
                    ),
                    function() {
                        I(r, t)
                    }
                }
            };
            var oe = i.startSymbol()
              , ae = i.endSymbol()
              , se = "{{" == oe || "}}" == ae ? p : function(e) {
                return e.replace(/\{\{/g, oe).replace(/}}/g, ae)
            }
              , ce = /^ngAttr[A-Z]/;
            return M.$$addBindingInfo = _ ? function(e, t) {
                var n = e.data("$binding") || [];
                Ln(t) ? n = n.concat(t) : n.push(t),
                e.data("$binding", n)
            }
             : h,
            M.$$addBindingClass = _ ? function(e) {
                D(e, "ng-binding")
            }
             : h,
            M.$$addScopeInfo = _ ? function(e, t, n, i) {
                e.data(n ? i ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope", t)
            }
             : h,
            M.$$addScopeClass = _ ? function(e, t) {
                D(e, t ? "ng-isolate-scope" : "ng-scope")
            }
             : h,
            M
        }
        ]
    }
    function He(e) {
        return ae(e.replace(hi, ""))
    }
    function ze(e, t) {
        var n = ""
          , i = e.split(/\s+/)
          , r = t.split(/\s+/)
          , o = 0;
        e: for (; o < i.length; o++) {
            for (var a = i[o], s = 0; s < r.length; s++)
                if (a == r[s])
                    continue e;
            n += (0 < n.length ? " " : "") + a
        }
        return n
    }
    function Fe(e) {
        e = wn(e);
        var t = e.length;
        if (1 >= t)
            return e;
        for (; t--; )
            8 === e[t].nodeType && Cn.call(e, t, 1);
        return e
    }
    function Ue() {
        var e = {}
          , t = !1
          , r = /^(\S+)(\s+as\s+(\w+))?$/;
        this.register = function(t, n) {
            ee(t, "controller"),
            $(t) ? u(e, t) : e[t] = n
        }
        ,
        this.allowGlobals = function() {
            t = !0
        }
        ,
        this.$get = ["$injector", "$window", function(o, a) {
            function s(e, t, n, r) {
                if (!e || !$(e.$scope))
                    throw i("$controller")("noscp", r, t);
                e.$scope[t] = n
            }
            return function(i, c, l, d) {
                var f, h, p;
                if (l = !0 === l,
                d && w(d) && (p = d),
                w(i)) {
                    if (d = i.match(r),
                    !d)
                        throw pi("ctrlfmt", i);
                    h = d[1],
                    p = p || d[3],
                    i = e.hasOwnProperty(h) ? e[h] : te(c.$scope, h, !0) || (t ? te(a, h, !0) : n),
                    Q(i, h, !0)
                }
                return l ? (l = (Ln(i) ? i[i.length - 1] : i).prototype,
                f = Object.create(l || null ),
                p && s(c, p, f, h || i.name),
                u(function() {
                    return o.invoke(i, f, c, h),
                    f
                }
                , {
                    instance: f,
                    identifier: p
                })) : (f = o.instantiate(i, c, h),
                p && s(c, p, f, h || i.name),
                f)
            }
        }
        ]
    }
    function qe() {
        this.$get = ["$window", function(e) {
            return wn(e.document)
        }
        ]
    }
    function Ge() {
        this.$get = ["$log", function(e) {
            return function(t, n) {
                e.error.apply(e, arguments)
            }
        }
        ]
    }
    function je(e, t) {
        if (w(e)) {
            var n = e.replace(wi, "").trim();
            if (n) {
                var i = t("Content-Type");
                (i = i && 0 === i.indexOf(mi)) || (i = (i = n.match(gi)) && $i[i[0]].test(n)),
                i && (e = B(n))
            }
        }
        return e
    }
    function We(e) {
        var t, n, i, r = ie();
        return e ? (o(e.split("\n"), function(e) {
            i = e.indexOf(":"),
            t = Sn(On(e.substr(0, i))),
            n = On(e.substr(i + 1)),
            t && (r[t] = r[t] ? r[t] + ", " + n : n)
        }
        ),
        r) : r
    }
    function Ye(e) {
        var t = $(e) ? e : n;
        return function(n) {
            return t || (t = We(e)),
            n ? (n = t[Sn(n)],
            void 0 === n && (n = null ),
            n) : t
        }
    }
    function Xe(e, t, n, i) {
        return b(i) ? i(e, t, n) : (o(i, function(i) {
            e = i(e, t, n)
        }
        ),
        e)
    }
    function Ke() {
        var e = this.defaults = {
            transformResponse: [je],
            transformRequest: [function(e) {
                return $(e) && "[object File]" !== An.call(e) && "[object Blob]" !== An.call(e) && "[object FormData]" !== An.call(e) ? N(e) : e
            }
            ],
            headers: {
                common: {
                    Accept: "application/json, text/plain, */*"
                },
                post: M(vi),
                put: M(vi),
                patch: M(vi)
            },
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN"
        }
          , t = !1;
        this.useApplyAsync = function(e) {
            return g(e) ? (t = !!e,
            this) : t
        }
        ;
        var r = this.interceptors = [];
        this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function(s, c, l, d, f, h) {
            function p(t) {
                function r(e) {
                    var t = u({}, e);
                    return t.data = e.data ? Xe(e.data, e.headers, e.status, s.transformResponse) : e.data,
                    e = e.status,
                    e >= 200 && 300 > e ? t : f.reject(t)
                }
                function a(e) {
                    var t, n = {};
                    return o(e, function(e, i) {
                        b(e) ? (t = e(),
                        null  != t && (n[i] = t)) : n[i] = e
                    }
                    ),
                    n
                }
                if (!Dn.isObject(t))
                    throw i("$http")("badreq", t);
                var s = u({
                    method: "get",
                    transformRequest: e.transformRequest,
                    transformResponse: e.transformResponse
                }, t);
                s.headers = function(t) {
                    var n, i, r = e.headers, o = u({}, t.headers), r = u({}, r.common, r[Sn(t.method)]);
                    e: for (n in r) {
                        t = Sn(n);
                        for (i in o)
                            if (Sn(i) === t)
                                continue e;
                        o[n] = r[n]
                    }
                    return a(o)
                }
                (t),
                s.method = xn(s.method);
                var c = [function(t) {
                    var i = t.headers
                      , a = Xe(t.data, Ye(i), n, t.transformRequest);
                    return v(a) && o(i, function(e, t) {
                        "content-type" === Sn(t) && delete i[t]
                    }
                    ),
                    v(t.withCredentials) && !v(e.withCredentials) && (t.withCredentials = e.withCredentials),
                    m(t, a).then(r, r)
                }
                , n]
                  , l = f.when(s);
                for (o(T, function(e) {
                    (e.request || e.requestError) && c.unshift(e.request, e.requestError),
                    (e.response || e.responseError) && c.push(e.response, e.responseError)
                }
                ); c.length; ) {
                    t = c.shift();
                    var d = c.shift()
                      , l = l.then(t, d)
                }
                return l.success = function(e) {
                    return l.then(function(t) {
                        e(t.data, t.status, t.headers, s)
                    }
                    ),
                    l
                }
                ,
                l.error = function(e) {
                    return l.then(null , function(t) {
                        e(t.data, t.status, t.headers, s)
                    }
                    ),
                    l
                }
                ,
                l
            }
            function m(i, r) {
                function o(e, n, i, r) {
                    function o() {
                        a(n, e, i, r)
                    }
                    h && (e >= 200 && 300 > e ? h.put(x, [e, n, We(i), r]) : h.remove(x)),
                    t ? d.$applyAsync(o) : (o(),
                    d.$$phase || d.$apply())
                }
                function a(e, t, n, r) {
                    t = Math.max(t, 0),
                    (t >= 200 && 300 > t ? w.resolve : w.reject)({
                        data: e,
                        status: t,
                        headers: Ye(n),
                        config: i,
                        statusText: r
                    })
                }
                function l(e) {
                    a(e.data, e.status, M(e.headers()), e.statusText)
                }
                function u() {
                    var e = p.pendingRequests.indexOf(i);
                    -1 !== e && p.pendingRequests.splice(e, 1)
                }
                var h, m, w = f.defer(), _ = w.promise, T = i.headers, x = y(i.url, i.params);
                return p.pendingRequests.push(i),
                _.then(u, u),
                !i.cache && !e.cache || !1 === i.cache || "GET" !== i.method && "JSONP" !== i.method || (h = $(i.cache) ? i.cache : $(e.cache) ? e.cache : S),
                h && (m = h.get(x),
                g(m) ? m && b(m.then) ? m.then(l, l) : Ln(m) ? a(m[1], m[0], M(m[2]), m[3]) : a(m, 200, {}, "OK") : h.put(x, _)),
                v(m) && ((m = Ft(i.url) ? c.cookies()[i.xsrfCookieName || e.xsrfCookieName] : n) && (T[i.xsrfHeaderName || e.xsrfHeaderName] = m),
                s(i.method, x, r, o, T, i.timeout, i.withCredentials, i.responseType)),
                _
            }
            function y(e, t) {
                if (!t)
                    return e;
                var n = [];
                return a(t, function(e, t) {
                    null  === e || v(e) || (Ln(e) || (e = [e]),
                    o(e, function(e) {
                        $(e) && (e = _(e) ? e.toISOString() : N(e)),
                        n.push(q(t) + "=" + q(e))
                    }
                    ))
                }
                ),
                0 < n.length && (e += (-1 == e.indexOf("?") ? "?" : "&") + n.join("&")),
                e
            }
            var S = l("$http")
              , T = [];
            return o(r, function(e) {
                T.unshift(w(e) ? h.get(e) : h.invoke(e))
            }
            ),
            p.pendingRequests = [],
            function(e) {
                o(arguments, function(e) {
                    p[e] = function(t, n) {
                        return p(u(n || {}, {
                            method: e,
                            url: t
                        }))
                    }
                }
                )
            }
            ("get", "delete", "head", "jsonp"),
            function(e) {
                o(arguments, function(e) {
                    p[e] = function(t, n, i) {
                        return p(u(i || {}, {
                            method: e,
                            url: t,
                            data: n
                        }))
                    }
                }
                )
            }
            ("post", "put", "patch"),
            p.defaults = e,
            p
        }
        ]
    }
    function Ze() {
        return new e.XMLHttpRequest
    }
    function Je() {
        this.$get = ["$browser", "$window", "$document", function(e, t, n) {
            return Qe(e, Ze, e.defer, t.angular.callbacks, n[0])
        }
        ]
    }
    function Qe(e, t, i, r, a) {
        function s(e, t, n) {
            var i = a.createElement("script")
              , o = null ;
            return i.type = "text/javascript",
            i.src = e,
            i.async = !0,
            o = function(e) {
                i.removeEventListener("load", o, !1),
                i.removeEventListener("error", o, !1),
                a.body.removeChild(i),
                i = null ;
                var s = -1
                  , c = "unknown";
                e && ("load" !== e.type || r[t].called || (e = {
                    type: "error"
                }),
                c = e.type,
                s = "error" === e.type ? 404 : 200),
                n && n(s, c)
            }
            ,
            i.addEventListener("load", o, !1),
            i.addEventListener("error", o, !1),
            a.body.appendChild(i),
            o
        }
        return function(a, c, l, u, d, f, p, m) {
            function v() {
                y && y(),
                _ && _.abort()
            }
            function $(t, r, o, a, s) {
                T !== n && i.cancel(T),
                y = _ = null ,
                t(r, o, a, s),
                e.$$completeOutstandingRequest(h)
            }
            if (e.$$incOutstandingRequestCount(),
            c = c || e.url(),
            "jsonp" == Sn(a)) {
                var w = "_" + (r.counter++).toString(36);
                r[w] = function(e) {
                    r[w].data = e,
                    r[w].called = !0
                }
                ;
                var y = s(c.replace("JSON_CALLBACK", "angular.callbacks." + w), w, function(e, t) {
                    $(u, e, r[w].data, "", t),
                    r[w] = h
                }
                )
            } else {
                var _ = t();
                if (_.open(a, c, !0),
                o(d, function(e, t) {
                    g(e) && _.setRequestHeader(t, e)
                }
                ),
                _.onload = function() {
                    var e = _.statusText || ""
                      , t = "response" in _ ? _.response : _.responseText
                      , n = 1223 === _.status ? 204 : _.status;
                    0 === n && (n = t ? 200 : "file" == zt(c).protocol ? 404 : 0),
                    $(u, n, t, _.getAllResponseHeaders(), e)
                }
                ,
                a = function() {
                    $(u, -1, null , null , "")
                }
                ,
                _.onerror = a,
                _.onabort = a,
                p && (_.withCredentials = !0),
                m)
                    try {
                        _.responseType = m
                    } catch (S) {
                        if ("json" !== m)
                            throw S
                    }
                _.send(l || null )
            }
            if (f > 0)
                var T = i(v, f);
            else
                f && b(f.then) && f.then(v)
        }
    }
    function et() {
        var e = "{{"
          , t = "}}";
        this.startSymbol = function(t) {
            return t ? (e = t,
            this) : e
        }
        ,
        this.endSymbol = function(e) {
            return e ? (t = e,
            this) : t
        }
        ,
        this.$get = ["$parse", "$exceptionHandler", "$sce", function(n, i, r) {
            function o(e) {
                return "\\\\\\" + e
            }
            function a(o, a, f, h) {
                function p(n) {
                    return n.replace(l, e).replace(d, t)
                }
                function m(e) {
                    try {
                        var t = e;
                        e = f ? r.getTrusted(f, t) : r.valueOf(t);
                        var n;
                        if (h && !g(e))
                            n = e;
                        else if (null  == e)
                            n = "";
                        else {
                            switch (typeof e) {
                            case "string":
                                break;
                            case "number":
                                e = "" + e;
                                break;
                            default:
                                e = N(e)
                            }
                            n = e
                        }
                        return n
                    } catch (a) {
                        n = yi("interr", o, a.toString()),
                        i(n)
                    }
                }
                h = !!h;
                for (var $, w, y = 0, _ = [], S = [], T = o.length, x = [], E = []; T > y; ) {
                    if (-1 == ($ = o.indexOf(e, y)) || -1 == (w = o.indexOf(t, $ + s))) {
                        y !== T && x.push(p(o.substring(y)));
                        break
                    }
                    y !== $ && x.push(p(o.substring(y, $))),
                    y = o.substring($ + s, w),
                    _.push(y),
                    S.push(n(y, m)),
                    y = w + c,
                    E.push(x.length),
                    x.push("")
                }
                if (f && 1 < x.length)
                    throw yi("noconcat", o);
                if (!a || _.length) {
                    var C = function(e) {
                        for (var t = 0, n = _.length; n > t; t++) {
                            if (h && v(e[t]))
                                return;
                            x[E[t]] = e[t]
                        }
                        return x.join("")
                    }
                    ;
                    return u(function(e) {
                        var t = 0
                          , n = _.length
                          , r = Array(n);
                        try {
                            for (; n > t; t++)
                                r[t] = S[t](e);
                            return C(r)
                        } catch (a) {
                            e = yi("interr", o, a.toString()),
                            i(e)
                        }
                    }
                    , {
                        exp: o,
                        expressions: _,
                        $$watchDelegate: function(e, t, n) {
                            var i;
                            return e.$watchGroup(S, function(n, r) {
                                var o = C(n);
                                b(t) && t.call(this, o, n !== r ? i : o, e),
                                i = o
                            }
                            , n)
                        }
                    })
                }
            }
            var s = e.length
              , c = t.length
              , l = new RegExp(e.replace(/./g, o),"g")
              , d = new RegExp(t.replace(/./g, o),"g");
            return a.startSymbol = function() {
                return e
            }
            ,
            a.endSymbol = function() {
                return t
            }
            ,
            a
        }
        ]
    }
    function tt() {
        this.$get = ["$rootScope", "$window", "$q", "$$q", function(e, t, n, i) {
            function r(r, a, s, c) {
                var l = t.setInterval
                  , u = t.clearInterval
                  , d = 0
                  , f = g(c) && !c
                  , h = (f ? i : n).defer()
                  , p = h.promise;
                return s = g(s) ? s : 0,
                p.then(null , null , r),
                p.$$intervalId = l(function() {
                    h.notify(d++),
                    s > 0 && d >= s && (h.resolve(d),
                    u(p.$$intervalId),
                    delete o[p.$$intervalId]),
                    f || e.$apply()
                }
                , a),
                o[p.$$intervalId] = h,
                p
            }
            var o = {};
            return r.cancel = function(e) {
                return e && e.$$intervalId in o ? (o[e.$$intervalId].reject("canceled"),
                t.clearInterval(e.$$intervalId),
                delete o[e.$$intervalId],
                !0) : !1
            }
            ,
            r
        }
        ]
    }
    function nt() {
        this.$get = function() {
            return {
                id: "en-us",
                NUMBER_FORMATS: {
                    DECIMAL_SEP: ".",
                    GROUP_SEP: ",",
                    PATTERNS: [{
                        minInt: 1,
                        minFrac: 0,
                        maxFrac: 3,
                        posPre: "",
                        posSuf: "",
                        negPre: "-",
                        negSuf: "",
                        gSize: 3,
                        lgSize: 3
                    }, {
                        minInt: 1,
                        minFrac: 2,
                        maxFrac: 2,
                        posPre: "¤",
                        posSuf: "",
                        negPre: "(¤",
                        negSuf: ")",
                        gSize: 3,
                        lgSize: 3
                    }],
                    CURRENCY_SYM: "$"
                },
                DATETIME_FORMATS: {
                    MONTH: "January February March April May June July August September October November December".split(" "),
                    SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                    DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                    SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                    AMPMS: ["AM", "PM"],
                    medium: "MMM d, y h:mm:ss a",
                    "short": "M/d/yy h:mm a",
                    fullDate: "EEEE, MMMM d, y",
                    longDate: "MMMM d, y",
                    mediumDate: "MMM d, y",
                    shortDate: "M/d/yy",
                    mediumTime: "h:mm:ss a",
                    shortTime: "h:mm a"
                },
                pluralCat: function(e) {
                    return 1 === e ? "one" : "other"
                }
            }
        }
    }
    function it(e) {
        e = e.split("/");
        for (var t = e.length; t--; )
            e[t] = U(e[t]);
        return e.join("/")
    }
    function rt(e, t) {
        var n = zt(e);
        t.$$protocol = n.protocol,
        t.$$host = n.hostname,
        t.$$port = d(n.port) || bi[n.protocol] || null
    }
    function ot(e, t) {
        var n = "/" !== e.charAt(0);
        n && (e = "/" + e);
        var i = zt(e);
        t.$$path = decodeURIComponent(n && "/" === i.pathname.charAt(0) ? i.pathname.substring(1) : i.pathname),
        t.$$search = z(i.search),
        t.$$hash = decodeURIComponent(i.hash),
        t.$$path && "/" != t.$$path.charAt(0) && (t.$$path = "/" + t.$$path)
    }
    function at(e, t) {
        return 0 === t.indexOf(e) ? t.substr(e.length) : void 0
    }
    function st(e) {
        var t = e.indexOf("#");
        return -1 == t ? e : e.substr(0, t)
    }
    function ct(e) {
        return e.replace(/(#.+)|#$/, "$1")
    }
    function lt(e) {
        return e.substr(0, st(e).lastIndexOf("/") + 1)
    }
    function ut(e, t) {
        this.$$html5 = !0,
        t = t || "";
        var i = lt(e);
        rt(e, this),
        this.$$parse = function(e) {
            var t = at(i, e);
            if (!w(t))
                throw Si("ipthprfx", e, i);
            ot(t, this),
            this.$$path || (this.$$path = "/"),
            this.$$compose()
        }
        ,
        this.$$compose = function() {
            var e = F(this.$$search)
              , t = this.$$hash ? "#" + U(this.$$hash) : "";
            this.$$url = it(this.$$path) + (e ? "?" + e : "") + t,
            this.$$absUrl = i + this.$$url.substr(1)
        }
        ,
        this.$$parseLinkUrl = function(r, o) {
            if (o && "#" === o[0])
                return this.hash(o.slice(1)),
                !0;
            var a, s;
            return (a = at(e, r)) !== n ? (s = a,
            s = (a = at(t, a)) !== n ? i + (at("/", a) || a) : e + s) : (a = at(i, r)) !== n ? s = i + a : i == r + "/" && (s = i),
            s && this.$$parse(s),
            !!s
        }
    }
    function dt(e, t) {
        var n = lt(e);
        rt(e, this),
        this.$$parse = function(i) {
            i = at(e, i) || at(n, i);
            var r;
            "#" === i.charAt(0) ? (r = at(t, i),
            v(r) && (r = i)) : r = this.$$html5 ? i : "",
            ot(r, this),
            i = this.$$path;
            var o = /^\/[A-Z]:(\/.*)/;
            0 === r.indexOf(e) && (r = r.replace(e, "")),
            o.exec(r) || (i = (r = o.exec(i)) ? r[1] : i),
            this.$$path = i,
            this.$$compose()
        }
        ,
        this.$$compose = function() {
            var n = F(this.$$search)
              , i = this.$$hash ? "#" + U(this.$$hash) : "";
            this.$$url = it(this.$$path) + (n ? "?" + n : "") + i,
            this.$$absUrl = e + (this.$$url ? t + this.$$url : "")
        }
        ,
        this.$$parseLinkUrl = function(t, n) {
            return st(e) == st(t) ? (this.$$parse(t),
            !0) : !1
        }
    }
    function ft(e, t) {
        this.$$html5 = !0,
        dt.apply(this, arguments);
        var n = lt(e);
        this.$$parseLinkUrl = function(i, r) {
            if (r && "#" === r[0])
                return this.hash(r.slice(1)),
                !0;
            var o, a;
            return e == st(i) ? o = i : (a = at(n, i)) ? o = e + t + a : n === i + "/" && (o = n),
            o && this.$$parse(o),
            !!o
        }
        ,
        this.$$compose = function() {
            var n = F(this.$$search)
              , i = this.$$hash ? "#" + U(this.$$hash) : "";
            this.$$url = it(this.$$path) + (n ? "?" + n : "") + i,
            this.$$absUrl = e + t + this.$$url
        }
    }
    function ht(e) {
        return function() {
            return this[e]
        }
    }
    function pt(e, t) {
        return function(n) {
            return v(n) ? this[e] : (this[e] = t(n),
            this.$$compose(),
            this)
        }
    }
    function mt() {
        var e = ""
          , t = {
            enabled: !1,
            requireBase: !0,
            rewriteLinks: !0
        };
        this.hashPrefix = function(t) {
            return g(t) ? (e = t,
            this) : e
        }
        ,
        this.html5Mode = function(e) {
            return E(e) ? (t.enabled = e,
            this) : $(e) ? (E(e.enabled) && (t.enabled = e.enabled),
            E(e.requireBase) && (t.requireBase = e.requireBase),
            E(e.rewriteLinks) && (t.rewriteLinks = e.rewriteLinks),
            this) : t
        }
        ,
        this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function(n, i, r, o, a) {
            function s(e, t, n) {
                var r = l.url()
                  , o = l.$$state;
                try {
                    i.url(e, t, n),
                    l.$$state = i.state()
                } catch (a) {
                    throw l.url(r),
                    l.$$state = o,
                    a
                }
            }
            function c(e, t) {
                n.$broadcast("$locationChangeSuccess", l.absUrl(), e, l.$$state, t)
            }
            var l, u;
            u = i.baseHref();
            var d, f = i.url();
            if (t.enabled) {
                if (!u && t.requireBase)
                    throw Si("nobase");
                d = f.substring(0, f.indexOf("/", f.indexOf("//") + 2)) + (u || "/"),
                u = r.history ? ut : ft
            } else
                d = st(f),
                u = dt;
            l = new u(d,"#" + e),
            l.$$parseLinkUrl(f, f),
            l.$$state = i.state();
            var h = /^\s*(javascript|mailto):/i;
            o.on("click", function(e) {
                if (t.rewriteLinks && !e.ctrlKey && !e.metaKey && !e.shiftKey && 2 != e.which && 2 != e.button) {
                    for (var r = wn(e.target); "a" !== A(r[0]); )
                        if (r[0] === o[0] || !(r = r.parent())[0])
                            return;
                    var s = r.prop("href")
                      , c = r.attr("href") || r.attr("xlink:href");
                    $(s) && "[object SVGAnimatedString]" === s.toString() && (s = zt(s.animVal).href),
                    h.test(s) || !s || r.attr("target") || e.isDefaultPrevented() || !l.$$parseLinkUrl(s, c) || (e.preventDefault(),
                    l.absUrl() != i.url() && (n.$apply(),
                    a.angular["ff-684208-preventDefault"] = !0))
                }
            }
            ),
            ct(l.absUrl()) != ct(f) && i.url(l.absUrl(), !0);
            var p = !0;
            return i.onUrlChange(function(e, t) {
                n.$evalAsync(function() {
                    var i, r = l.absUrl(), o = l.$$state;
                    l.$$parse(e),
                    l.$$state = t,
                    i = n.$broadcast("$locationChangeStart", e, r, t, o).defaultPrevented,
                    l.absUrl() === e && (i ? (l.$$parse(r),
                    l.$$state = o,
                    s(r, !1, o)) : (p = !1,
                    c(r, o)))
                }
                ),
                n.$$phase || n.$digest()
            }
            ),
            n.$watch(function() {
                var e = ct(i.url())
                  , t = ct(l.absUrl())
                  , o = i.state()
                  , a = l.$$replace
                  , u = e !== t || l.$$html5 && r.history && o !== l.$$state;
                (p || u) && (p = !1,
                n.$evalAsync(function() {
                    var t = l.absUrl()
                      , i = n.$broadcast("$locationChangeStart", t, e, l.$$state, o).defaultPrevented;
                    l.absUrl() === t && (i ? (l.$$parse(e),
                    l.$$state = o) : (u && s(t, a, o === l.$$state ? null  : l.$$state),
                    c(e, o)))
                }
                )),
                l.$$replace = !1
            }
            ),
            l
        }
        ]
    }
    function vt() {
        var e = !0
          , t = this;
        this.debugEnabled = function(t) {
            return g(t) ? (e = t,
            this) : e
        }
        ,
        this.$get = ["$window", function(n) {
            function i(e) {
                return e instanceof Error && (e.stack ? e = e.message && -1 === e.stack.indexOf(e.message) ? "Error: " + e.message + "\n" + e.stack : e.stack : e.sourceURL && (e = e.message + "\n" + e.sourceURL + ":" + e.line)),
                e
            }
            function r(e) {
                var t = n.console || {}
                  , r = t[e] || t.log || h;
                e = !1;
                try {
                    e = !!r.apply
                } catch (a) {}
                return e ? function() {
                    var e = [];
                    return o(arguments, function(t) {
                        e.push(i(t))
                    }
                    ),
                    r.apply(t, e)
                }
                 : function(e, t) {
                    r(e, null  == t ? "" : t)
                }
            }
            return {
                log: r("log"),
                info: r("info"),
                warn: r("warn"),
                error: r("error"),
                debug: function() {
                    var n = r("debug");
                    return function() {
                        e && n.apply(t, arguments)
                    }
                }
                ()
            }
        }
        ]
    }
    function gt(e, t) {
        if ("__defineGetter__" === e || "__defineSetter__" === e || "__lookupGetter__" === e || "__lookupSetter__" === e || "__proto__" === e)
            throw xi("isecfld", t);
        return e
    }
    function $t(e, t) {
        if (e) {
            if (e.constructor === e)
                throw xi("isecfn", t);
            if (e.window === e)
                throw xi("isecwindow", t);
            if (e.children && (e.nodeName || e.prop && e.attr && e.find))
                throw xi("isecdom", t);
            if (e === Object)
                throw xi("isecobj", t)
        }
        return e
    }
    function wt(e) {
        return e.constant
    }
    function yt(e, t, n, i, r) {
        $t(e, r),
        $t(t, r),
        n = n.split(".");
        for (var o, a = 0; 1 < n.length; a++) {
            o = gt(n.shift(), r);
            var s = 0 === a && t && t[o] || e[o];
            s || (s = {},
            e[o] = s),
            e = $t(s, r)
        }
        return o = gt(n.shift(), r),
        $t(e[o], r),
        e[o] = i
    }
    function _t(e) {
        return "constructor" == e
    }
    function bt(e, t, i, r, o, a, s) {
        gt(e, a),
        gt(t, a),
        gt(i, a),
        gt(r, a),
        gt(o, a);
        var c = function(e) {
            return $t(e, a)
        }
          , l = s || _t(e) ? c : p
          , u = s || _t(t) ? c : p
          , d = s || _t(i) ? c : p
          , f = s || _t(r) ? c : p
          , h = s || _t(o) ? c : p;
        return function(a, s) {
            var c = s && s.hasOwnProperty(e) ? s : a;
            return null  == c ? c : (c = l(c[e]),
            t ? null  == c ? n : (c = u(c[t]),
            i ? null  == c ? n : (c = d(c[i]),
            r ? null  == c ? n : (c = f(c[r]),
            o ? null  == c ? n : c = h(c[o]) : c) : c) : c) : c)
        }
    }
    function St(e, t) {
        return function(n, i) {
            return e(n, i, $t, t)
        }
    }
    function Tt(e, t, i) {
        var r = t.expensiveChecks
          , a = r ? Oi : Li
          , s = a[e];
        if (s)
            return s;
        var c = e.split(".")
          , l = c.length;
        if (t.csp)
            s = 6 > l ? bt(c[0], c[1], c[2], c[3], c[4], i, r) : function(e, t) {
                var o, a = 0;
                do
                    o = bt(c[a++], c[a++], c[a++], c[a++], c[a++], i, r)(e, t),
                    t = n,
                    e = o;
                while (l > a);return o
            }
            ;
        else {
            var u = "";
            r && (u += "s = eso(s, fe);\nl = eso(l, fe);\n");
            var d = r;
            o(c, function(e, t) {
                gt(e, i);
                var n = (t ? "s" : '((l&&l.hasOwnProperty("' + e + '"))?l:s)') + "." + e;
                (r || _t(e)) && (n = "eso(" + n + ", fe)",
                d = !0),
                u += "if(s == null) return undefined;\ns=" + n + ";\n"
            }
            ),
            u += "return s;",
            t = new Function("s","l","eso","fe",u),
            t.toString = m(u),
            d && (t = St(t, i)),
            s = t
        }
        return s.sharedGetter = !0,
        s.assign = function(t, n, i) {
            return yt(t, i, e, n, e)
        }
        ,
        a[e] = s
    }
    function xt(e) {
        return b(e.valueOf) ? e.valueOf() : Vi.call(e)
    }
    function Et() {
        var e = ie()
          , t = ie();
        this.$get = ["$filter", "$sniffer", function(n, i) {
            function r(e) {
                var t = e;
                return e.sharedGetter && (t = function(t, n) {
                    return e(t, n)
                }
                ,
                t.literal = e.literal,
                t.constant = e.constant,
                t.assign = e.assign),
                t
            }
            function a(e, t) {
                for (var n = 0, i = e.length; i > n; n++) {
                    var r = e[n];
                    r.constant || (r.inputs ? a(r.inputs, t) : -1 === t.indexOf(r) && t.push(r))
                }
                return t
            }
            function s(e, t) {
                return null  == e || null  == t ? e === t : "object" == typeof e && (e = xt(e),
                "object" == typeof e) ? !1 : e === t || e !== e && t !== t
            }
            function c(e, t, n, i) {
                var r, o = i.$$inputs || (i.$$inputs = a(i.inputs, []));
                if (1 === o.length) {
                    var c = s
                      , o = o[0];
                    return e.$watch(function(e) {
                        var t = o(e);
                        return s(t, c) || (r = i(e),
                        c = t && xt(t)),
                        r
                    }
                    , t, n)
                }
                for (var l = [], u = 0, d = o.length; d > u; u++)
                    l[u] = s;
                return e.$watch(function(e) {
                    for (var t = !1, n = 0, a = o.length; a > n; n++) {
                        var c = o[n](e);
                        (t || (t = !s(c, l[n]))) && (l[n] = c && xt(c))
                    }
                    return t && (r = i(e)),
                    r
                }
                , t, n)
            }
            function l(e, t, n, i) {
                var r, o;
                return r = e.$watch(function(e) {
                    return i(e)
                }
                , function(e, n, i) {
                    o = e,
                    b(t) && t.apply(this, arguments),
                    g(e) && i.$$postDigest(function() {
                        g(o) && r()
                    }
                    )
                }
                , n)
            }
            function u(e, t, n, i) {
                function r(e) {
                    var t = !0;
                    return o(e, function(e) {
                        g(e) || (t = !1)
                    }
                    ),
                    t
                }
                var a, s;
                return a = e.$watch(function(e) {
                    return i(e)
                }
                , function(e, n, i) {
                    s = e,
                    b(t) && t.call(this, e, n, i),
                    r(e) && i.$$postDigest(function() {
                        r(s) && a()
                    }
                    )
                }
                , n)
            }
            function d(e, t, n, i) {
                var r;
                return r = e.$watch(function(e) {
                    return i(e)
                }
                , function(e, n, i) {
                    b(t) && t.apply(this, arguments),
                    r()
                }
                , n)
            }
            function f(e, t) {
                if (!t)
                    return e;
                var n = e.$$watchDelegate
                  , n = n !== u && n !== l ? function(n, i) {
                    var r = e(n, i);
                    return t(r, n, i)
                }
                 : function(n, i) {
                    var r = e(n, i)
                      , o = t(r, n, i);
                    return g(r) ? o : r
                }
                ;
                return e.$$watchDelegate && e.$$watchDelegate !== c ? n.$$watchDelegate = e.$$watchDelegate : t.$stateful || (n.$$watchDelegate = c,
                n.inputs = [e]),
                n
            }
            var p = {
                csp: i.csp,
                expensiveChecks: !1
            }
              , m = {
                csp: i.csp,
                expensiveChecks: !0
            };
            return function(i, o, a) {
                var s, v, g;
                switch (typeof i) {
                case "string":
                    g = i = i.trim();
                    var $ = a ? t : e;
                    return s = $[g],
                    s || (":" === i.charAt(0) && ":" === i.charAt(1) && (v = !0,
                    i = i.substring(2)),
                    a = a ? m : p,
                    s = new Mi(a),
                    s = new Pi(s,n,a).parse(i),
                    s.constant ? s.$$watchDelegate = d : v ? (s = r(s),
                    s.$$watchDelegate = s.literal ? u : l) : s.inputs && (s.$$watchDelegate = c),
                    $[g] = s),
                    f(s, o);
                case "function":
                    return f(i, o);
                default:
                    return f(h, o)
                }
            }
        }
        ]
    }
    function Ct() {
        this.$get = ["$rootScope", "$exceptionHandler", function(e, t) {
            return At(function(t) {
                e.$evalAsync(t)
            }
            , t)
        }
        ]
    }
    function kt() {
        this.$get = ["$browser", "$exceptionHandler", function(e, t) {
            return At(function(t) {
                e.defer(t)
            }
            , t)
        }
        ]
    }
    function At(e, t) {
        function r(e, t, n) {
            function i(t) {
                return function(n) {
                    r || (r = !0,
                    t.call(e, n))
                }
            }
            var r = !1;
            return [i(t), i(n)]
        }
        function a() {
            this.$$state = {
                status: 0
            }
        }
        function s(e, t) {
            return function(n) {
                t.call(e, n)
            }
        }
        function c(i) {
            !i.processScheduled && i.pending && (i.processScheduled = !0,
            e(function() {
                var e, r, o;
                o = i.pending,
                i.processScheduled = !1,
                i.pending = n;
                for (var a = 0, s = o.length; s > a; ++a) {
                    r = o[a][0],
                    e = o[a][i.status];
                    try {
                        b(e) ? r.resolve(e(i.value)) : 1 === i.status ? r.resolve(i.value) : r.reject(i.value)
                    } catch (c) {
                        r.reject(c),
                        t(c)
                    }
                }
            }
            ))
        }
        function l() {
            this.promise = new a,
            this.resolve = s(this, this.resolve),
            this.reject = s(this, this.reject),
            this.notify = s(this, this.notify)
        }
        var u = i("$q", TypeError);
        a.prototype = {
            then: function(e, t, n) {
                var i = new l;
                return this.$$state.pending = this.$$state.pending || [],
                this.$$state.pending.push([i, e, t, n]),
                0 < this.$$state.status && c(this.$$state),
                i.promise
            },
            "catch": function(e) {
                return this.then(null , e)
            },
            "finally": function(e, t) {
                return this.then(function(t) {
                    return f(t, !0, e)
                }
                , function(t) {
                    return f(t, !1, e)
                }
                , t)
            }
        },
        l.prototype = {
            resolve: function(e) {
                this.promise.$$state.status || (e === this.promise ? this.$$reject(u("qcycle", e)) : this.$$resolve(e))
            },
            $$resolve: function(e) {
                var n, i;
                i = r(this, this.$$resolve, this.$$reject);
                try {
                    ($(e) || b(e)) && (n = e && e.then),
                    b(n) ? (this.promise.$$state.status = -1,
                    n.call(e, i[0], i[1], this.notify)) : (this.promise.$$state.value = e,
                    this.promise.$$state.status = 1,
                    c(this.promise.$$state))
                } catch (o) {
                    i[1](o),
                    t(o)
                }
            },
            reject: function(e) {
                this.promise.$$state.status || this.$$reject(e)
            },
            $$reject: function(e) {
                this.promise.$$state.value = e,
                this.promise.$$state.status = 2,
                c(this.promise.$$state)
            },
            notify: function(n) {
                var i = this.promise.$$state.pending;
                0 >= this.promise.$$state.status && i && i.length && e(function() {
                    for (var e, r, o = 0, a = i.length; a > o; o++) {
                        r = i[o][0],
                        e = i[o][3];
                        try {
                            r.notify(b(e) ? e(n) : n)
                        } catch (s) {
                            t(s)
                        }
                    }
                }
                )
            }
        };
        var d = function(e, t) {
            var n = new l;
            return t ? n.resolve(e) : n.reject(e),
            n.promise
        }
          , f = function(e, t, n) {
            var i = null ;
            try {
                b(n) && (i = n())
            } catch (r) {
                return d(r, !1)
            }
            return i && b(i.then) ? i.then(function() {
                return d(e, t)
            }
            , function(e) {
                return d(e, !1)
            }
            ) : d(e, t)
        }
          , h = function(e, t, n, i) {
            var r = new l;
            return r.resolve(e),
            r.promise.then(t, n, i)
        }
          , p = function m(e) {
            if (!b(e))
                throw u("norslvr", e);
            if (!(this instanceof m))
                return new m(e);
            var t = new l;
            return e(function(e) {
                t.resolve(e)
            }
            , function(e) {
                t.reject(e)
            }
            ),
            t.promise
        }
        ;
        return p.defer = function() {
            return new l
        }
        ,
        p.reject = function(e) {
            var t = new l;
            return t.reject(e),
            t.promise
        }
        ,
        p.when = h,
        p.all = function(e) {
            var t = new l
              , n = 0
              , i = Ln(e) ? [] : {};
            return o(e, function(e, r) {
                n++,
                h(e).then(function(e) {
                    i.hasOwnProperty(r) || (i[r] = e,
                    --n || t.resolve(i))
                }
                , function(e) {
                    i.hasOwnProperty(r) || t.reject(e)
                }
                )
            }
            ),
            0 === n && t.resolve(i),
            t.promise
        }
        ,
        p
    }
    function It() {
        this.$get = ["$window", "$timeout", function(e, t) {
            var n = e.requestAnimationFrame || e.webkitRequestAnimationFrame
              , i = e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.webkitCancelRequestAnimationFrame
              , r = !!n
              , o = r ? function(e) {
                var t = n(e);
                return function() {
                    i(t)
                }
            }
             : function(e) {
                var n = t(e, 16.66, !1);
                return function() {
                    t.cancel(n)
                }
            }
            ;
            return o.supported = r,
            o
        }
        ]
    }
    function Dt() {
        var e = 10
          , t = i("$rootScope")
          , n = null
          , a = null ;
        this.digestTtl = function(t) {
            return arguments.length && (e = t),
            e
        }
        ,
        this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function(i, s, c, l) {
            function u() {
                this.$id = ++Mn,
                this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null ,
                this.$root = this,
                this.$$destroyed = !1,
                this.$$listeners = {},
                this.$$listenerCount = {},
                this.$$isolateBindings = null
            }
            function d(e) {
                if (w.$$phase)
                    throw t("inprog", w.$$phase);
                w.$$phase = e
            }
            function f(e, t, n) {
                do
                    e.$$listenerCount[n] -= t,
                    0 === e.$$listenerCount[n] && delete e.$$listenerCount[n];
                while (e = e.$parent)
            }
            function p() {}
            function m() {
                for (; S.length; )
                    try {
                        S.shift()()
                    } catch (e) {
                        s(e)
                    }
                a = null
            }
            function g() {
                null  === a && (a = l.defer(function() {
                    w.$apply(m)
                }
                ))
            }
            u.prototype = {
                constructor: u,
                $new: function(e, t) {
                    function n() {
                        i.$$destroyed = !0
                    }
                    var i;
                    return t = t || this,
                    e ? (i = new u,
                    i.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = function() {
                        this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null ,
                        this.$$listeners = {},
                        this.$$listenerCount = {},
                        this.$id = ++Mn,
                        this.$$ChildScope = null
                    }
                    ,
                    this.$$ChildScope.prototype = this),
                    i = new this.$$ChildScope),
                    i.$parent = t,
                    i.$$prevSibling = t.$$childTail,
                    t.$$childHead ? (t.$$childTail.$$nextSibling = i,
                    t.$$childTail = i) : t.$$childHead = t.$$childTail = i,
                    (e || t != this) && i.$on("$destroy", n),
                    i
                },
                $watch: function(e, t, i) {
                    var r = c(e);
                    if (r.$$watchDelegate)
                        return r.$$watchDelegate(this, t, i, r);
                    var o = this.$$watchers
                      , a = {
                        fn: t,
                        last: p,
                        get: r,
                        exp: e,
                        eq: !!i
                    };
                    return n = null ,
                    b(t) || (a.fn = h),
                    o || (o = this.$$watchers = []),
                    o.unshift(a),
                    function() {
                        I(o, a),
                        n = null
                    }
                },
                $watchGroup: function(e, t) {
                    function n() {
                        c = !1,
                        l ? (l = !1,
                        t(r, r, s)) : t(r, i, s)
                    }
                    var i = Array(e.length)
                      , r = Array(e.length)
                      , a = []
                      , s = this
                      , c = !1
                      , l = !0;
                    if (!e.length) {
                        var u = !0;
                        return s.$evalAsync(function() {
                            u && t(r, r, s)
                        }
                        ),
                        function() {
                            u = !1
                        }
                    }
                    return 1 === e.length ? this.$watch(e[0], function(e, n, o) {
                        r[0] = e,
                        i[0] = n,
                        t(r, e === n ? r : i, o)
                    }
                    ) : (o(e, function(e, t) {
                        var o = s.$watch(e, function(e, o) {
                            r[t] = e,
                            i[t] = o,
                            c || (c = !0,
                            s.$evalAsync(n))
                        }
                        );
                        a.push(o)
                    }
                    ),
                    function() {
                        for (; a.length; )
                            a.shift()()
                    }
                    )
                },
                $watchCollection: function(e, t) {
                    function n(e) {
                        i = e;
                        var t, n, a, s;
                        if (!v(i)) {
                            if ($(i))
                                if (r(i))
                                    for (o !== f && (o = f,
                                    m = o.length = 0,
                                    u++),
                                    e = i.length,
                                    m !== e && (u++,
                                    o.length = m = e),
                                    t = 0; e > t; t++)
                                        s = o[t],
                                        a = i[t],
                                        n = s !== s && a !== a,
                                        n || s === a || (u++,
                                        o[t] = a);
                                else {
                                    o !== h && (o = h = {},
                                    m = 0,
                                    u++),
                                    e = 0;
                                    for (t in i)
                                        i.hasOwnProperty(t) && (e++,
                                        a = i[t],
                                        s = o[t],
                                        t in o ? (n = s !== s && a !== a,
                                        n || s === a || (u++,
                                        o[t] = a)) : (m++,
                                        o[t] = a,
                                        u++));
                                    if (m > e)
                                        for (t in u++,
                                        o)
                                            i.hasOwnProperty(t) || (m--,
                                            delete o[t])
                                }
                            else
                                o !== i && (o = i,
                                u++);
                            return u
                        }
                    }
                    n.$stateful = !0;
                    var i, o, a, s = this, l = 1 < t.length, u = 0, d = c(e, n), f = [], h = {}, p = !0, m = 0;
                    return this.$watch(d, function() {
                        if (p ? (p = !1,
                        t(i, i, s)) : t(i, a, s),
                        l)
                            if ($(i))
                                if (r(i)) {
                                    a = Array(i.length);
                                    for (var e = 0; e < i.length; e++)
                                        a[e] = i[e]
                                } else
                                    for (e in a = {},
                                    i)
                                        Tn.call(i, e) && (a[e] = i[e]);
                            else
                                a = i
                    }
                    )
                },
                $digest: function() {
                    var i, r, o, c, u, f, h, v, g, $ = e, S = [];
                    d("$digest"),
                    l.$$checkUrlChange(),
                    this === w && null  !== a && (l.defer.cancel(a),
                    m()),
                    n = null ;
                    do {
                        for (f = !1,
                        h = this; y.length; ) {
                            try {
                                g = y.shift(),
                                g.scope.$eval(g.expression, g.locals)
                            } catch (T) {
                                s(T)
                            }
                            n = null
                        }
                        e: do {
                            if (c = h.$$watchers)
                                for (u = c.length; u--; )
                                    try {
                                        if (i = c[u])
                                            if ((r = i.get(h)) === (o = i.last) || (i.eq ? P(r, o) : "number" == typeof r && "number" == typeof o && isNaN(r) && isNaN(o))) {
                                                if (i === n) {
                                                    f = !1;
                                                    break e
                                                }
                                            } else
                                                f = !0,
                                                n = i,
                                                i.last = i.eq ? D(r, null ) : r,
                                                i.fn(r, o === p ? r : o, h),
                                                5 > $ && (v = 4 - $,
                                                S[v] || (S[v] = []),
                                                S[v].push({
                                                    msg: b(i.exp) ? "fn: " + (i.exp.name || i.exp.toString()) : i.exp,
                                                    newVal: r,
                                                    oldVal: o
                                                }))
                                    } catch (x) {
                                        s(x)
                                    }
                            if (!(c = h.$$childHead || h !== this && h.$$nextSibling))
                                for (; h !== this && !(c = h.$$nextSibling); )
                                    h = h.$parent
                        } while (h = c);if ((f || y.length) && !$--)
                            throw w.$$phase = null ,
                            t("infdig", e, S)
                    } while (f || y.length);for (w.$$phase = null ; _.length; )
                        try {
                            _.shift()()
                        } catch (E) {
                            s(E)
                        }
                },
                $destroy: function() {
                    if (!this.$$destroyed) {
                        var e = this.$parent;
                        if (this.$broadcast("$destroy"),
                        this.$$destroyed = !0,
                        this !== w) {
                            for (var t in this.$$listenerCount)
                                f(this, this.$$listenerCount[t], t);
                            e.$$childHead == this && (e.$$childHead = this.$$nextSibling),
                            e.$$childTail == this && (e.$$childTail = this.$$prevSibling),
                            this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling),
                            this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling),
                            this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = h,
                            this.$on = this.$watch = this.$watchGroup = function() {
                                return h
                            }
                            ,
                            this.$$listeners = {},
                            this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = this.$$watchers = null
                        }
                    }
                },
                $eval: function(e, t) {
                    return c(e)(this, t)
                },
                $evalAsync: function(e, t) {
                    w.$$phase || y.length || l.defer(function() {
                        y.length && w.$digest()
                    }
                    ),
                    y.push({
                        scope: this,
                        expression: e,
                        locals: t
                    })
                },
                $$postDigest: function(e) {
                    _.push(e)
                },
                $apply: function(e) {
                    try {
                        return d("$apply"),
                        this.$eval(e)
                    } catch (t) {
                        s(t)
                    } finally {
                        w.$$phase = null ;
                        try {
                            w.$digest()
                        } catch (n) {
                            throw s(n),
                            n
                        }
                    }
                },
                $applyAsync: function(e) {
                    function t() {
                        n.$eval(e)
                    }
                    var n = this;
                    e && S.push(t),
                    g()
                },
                $on: function(e, t) {
                    var n = this.$$listeners[e];
                    n || (this.$$listeners[e] = n = []),
                    n.push(t);
                    var i = this;
                    do
                        i.$$listenerCount[e] || (i.$$listenerCount[e] = 0),
                        i.$$listenerCount[e]++;
                    while (i = i.$parent);var r = this;
                    return function() {
                        var i = n.indexOf(t);
                        -1 !== i && (n[i] = null ,
                        f(r, 1, e))
                    }
                },
                $emit: function(e, t) {
                    var n, i, r, o = [], a = this, c = !1, l = {
                        name: e,
                        targetScope: a,
                        stopPropagation: function() {
                            c = !0
                        },
                        preventDefault: function() {
                            l.defaultPrevented = !0
                        },
                        defaultPrevented: !1
                    }, u = L([l], arguments, 1);
                    do {
                        for (n = a.$$listeners[e] || o,
                        l.currentScope = a,
                        i = 0,
                        r = n.length; r > i; i++)
                            if (n[i])
                                try {
                                    n[i].apply(null , u)
                                } catch (d) {
                                    s(d)
                                }
                            else
                                n.splice(i, 1),
                                i--,
                                r--;
                        if (c)
                            return l.currentScope = null ,
                            l;
                        a = a.$parent
                    } while (a);return l.currentScope = null ,
                    l
                },
                $broadcast: function(e, t) {
                    var n = this
                      , i = this
                      , r = {
                        name: e,
                        targetScope: this,
                        preventDefault: function() {
                            r.defaultPrevented = !0
                        },
                        defaultPrevented: !1
                    };
                    if (!this.$$listenerCount[e])
                        return r;
                    for (var o, a, c = L([r], arguments, 1); n = i; ) {
                        for (r.currentScope = n,
                        i = n.$$listeners[e] || [],
                        o = 0,
                        a = i.length; a > o; o++)
                            if (i[o])
                                try {
                                    i[o].apply(null , c)
                                } catch (l) {
                                    s(l)
                                }
                            else
                                i.splice(o, 1),
                                o--,
                                a--;
                        if (!(i = n.$$listenerCount[e] && n.$$childHead || n !== this && n.$$nextSibling))
                            for (; n !== this && !(i = n.$$nextSibling); )
                                n = n.$parent
                    }
                    return r.currentScope = null ,
                    r
                }
            };
            var w = new u
              , y = w.$$asyncQueue = []
              , _ = w.$$postDigestQueue = []
              , S = w.$$applyAsyncQueue = [];
            return w
        }
        ]
    }
    function Mt() {
        var e = /^\s*(https?|ftp|mailto|tel|file):/
          , t = /^\s*((https?|ftp|file|blob):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function(t) {
            return g(t) ? (e = t,
            this) : e
        }
        ,
        this.imgSrcSanitizationWhitelist = function(e) {
            return g(e) ? (t = e,
            this) : t
        }
        ,
        this.$get = function() {
            return function(n, i) {
                var r, o = i ? t : e;
                return r = zt(n).href,
                "" === r || r.match(o) ? n : "unsafe:" + r
            }
        }
    }
    function Pt(e) {
        if ("self" === e)
            return e;
        if (w(e)) {
            if (-1 < e.indexOf("***"))
                throw Ni("iwcard", e);
            return e = Vn(e).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"),
            new RegExp("^" + e + "$")
        }
        if (S(e))
            return new RegExp("^" + e.source + "$");
        throw Ni("imatcher")
    }
    function Lt(e) {
        var t = [];
        return g(e) && o(e, function(e) {
            t.push(Pt(e))
        }
        ),
        t
    }
    function Ot() {
        this.SCE_CONTEXTS = Bi;
        var e = ["self"]
          , t = [];
        this.resourceUrlWhitelist = function(t) {
            return arguments.length && (e = Lt(t)),
            e
        }
        ,
        this.resourceUrlBlacklist = function(e) {
            return arguments.length && (t = Lt(e)),
            t
        }
        ,
        this.$get = ["$injector", function(i) {
            function r(e, t) {
                return "self" === e ? Ft(t) : !!e.exec(t.href)
            }
            function o(e) {
                var t = function(e) {
                    this.$$unwrapTrustedValue = function() {
                        return e
                    }
                }
                ;
                return e && (t.prototype = new e),
                t.prototype.valueOf = function() {
                    return this.$$unwrapTrustedValue()
                }
                ,
                t.prototype.toString = function() {
                    return this.$$unwrapTrustedValue().toString()
                }
                ,
                t
            }
            var a = function(e) {
                throw Ni("unsafe")
            }
            ;
            i.has("$sanitize") && (a = i.get("$sanitize"));
            var s = o()
              , c = {};
            return c[Bi.HTML] = o(s),
            c[Bi.CSS] = o(s),
            c[Bi.URL] = o(s),
            c[Bi.JS] = o(s),
            c[Bi.RESOURCE_URL] = o(c[Bi.URL]),
            {
                trustAs: function(e, t) {
                    var i = c.hasOwnProperty(e) ? c[e] : null ;
                    if (!i)
                        throw Ni("icontext", e, t);
                    if (null  === t || t === n || "" === t)
                        return t;
                    if ("string" != typeof t)
                        throw Ni("itype", e);
                    return new i(t)
                },
                getTrusted: function(i, o) {
                    if (null  === o || o === n || "" === o)
                        return o;
                    var s = c.hasOwnProperty(i) ? c[i] : null ;
                    if (s && o instanceof s)
                        return o.$$unwrapTrustedValue();
                    if (i === Bi.RESOURCE_URL) {
                        var l, u, s = zt(o.toString()), d = !1;
                        for (l = 0,
                        u = e.length; u > l; l++)
                            if (r(e[l], s)) {
                                d = !0;
                                break
                            }
                        if (d)
                            for (l = 0,
                            u = t.length; u > l; l++)
                                if (r(t[l], s)) {
                                    d = !1;
                                    break
                                }
                        if (d)
                            return o;
                        throw Ni("insecurl", o.toString())
                    }
                    if (i === Bi.HTML)
                        return a(o);
                    throw Ni("unsafe")
                },
                valueOf: function(e) {
                    return e instanceof s ? e.$$unwrapTrustedValue() : e
                }
            }
        }
        ]
    }
    function Vt() {
        var e = !0;
        this.enabled = function(t) {
            return arguments.length && (e = !!t),
            e
        }
        ,
        this.$get = ["$parse", "$sceDelegate", function(t, n) {
            if (e && 8 > $n)
                throw Ni("iequirks");
            var i = M(Bi);
            i.isEnabled = function() {
                return e
            }
            ,
            i.trustAs = n.trustAs,
            i.getTrusted = n.getTrusted,
            i.valueOf = n.valueOf,
            e || (i.trustAs = i.getTrusted = function(e, t) {
                return t
            }
            ,
            i.valueOf = p),
            i.parseAs = function(e, n) {
                var r = t(n);
                return r.literal && r.constant ? r : t(n, function(t) {
                    return i.getTrusted(e, t)
                }
                )
            }
            ;
            var r = i.parseAs
              , a = i.getTrusted
              , s = i.trustAs;
            return o(Bi, function(e, t) {
                var n = Sn(t);
                i[ae("parse_as_" + n)] = function(t) {
                    return r(e, t)
                }
                ,
                i[ae("get_trusted_" + n)] = function(t) {
                    return a(e, t)
                }
                ,
                i[ae("trust_as_" + n)] = function(t) {
                    return s(e, t)
                }
            }
            ),
            i
        }
        ]
    }
    function Nt() {
        this.$get = ["$window", "$document", function(e, t) {
            var n, i = {}, r = d((/android (\d+)/.exec(Sn((e.navigator || {}).userAgent)) || [])[1]), o = /Boxee/i.test((e.navigator || {}).userAgent), a = t[0] || {}, s = /^(Moz|webkit|ms)(?=[A-Z])/, c = a.body && a.body.style, l = !1, u = !1;
            if (c) {
                for (var f in c)
                    if (l = s.exec(f)) {
                        n = l[0],
                        n = n.substr(0, 1).toUpperCase() + n.substr(1);
                        break
                    }
                n || (n = "WebkitOpacity" in c && "webkit"),
                l = !!("transition" in c || n + "Transition" in c),
                u = !!("animation" in c || n + "Animation" in c),
                !r || l && u || (l = w(a.body.style.webkitTransition),
                u = w(a.body.style.webkitAnimation))
            }
            return {
                history: !(!e.history || !e.history.pushState || 4 > r || o),
                hasEvent: function(e) {
                    if ("input" === e && 11 >= $n)
                        return !1;
                    if (v(i[e])) {
                        var t = a.createElement("div");
                        i[e] = "on" + e in t
                    }
                    return i[e]
                },
                csp: Nn(),
                vendorPrefix: n,
                transitions: l,
                animations: u,
                android: r
            }
        }
        ]
    }
    function Bt() {
        this.$get = ["$templateCache", "$http", "$q", function(e, t, n) {
            function i(r, o) {
                i.totalPendingRequests++;
                var a = t.defaults && t.defaults.transformResponse;
                return Ln(a) ? a = a.filter(function(e) {
                    return e !== je
                }
                ) : a === je && (a = null ),
                t.get(r, {
                    cache: e,
                    transformResponse: a
                })["finally"](function() {
                    i.totalPendingRequests--
                }
                ).then(function(e) {
                    return e.data
                }
                , function(e) {
                    if (!o)
                        throw fi("tpload", r);
                    return n.reject(e)
                }
                )
            }
            return i.totalPendingRequests = 0,
            i
        }
        ]
    }
    function Rt() {
        this.$get = ["$rootScope", "$browser", "$location", function(e, t, n) {
            return {
                findBindings: function(e, t, n) {
                    e = e.getElementsByClassName("ng-binding");
                    var i = [];
                    return o(e, function(e) {
                        var r = Dn.element(e).data("$binding");
                        r && o(r, function(r) {
                            n ? new RegExp("(^|\\s)" + Vn(t) + "(\\s|\\||$)").test(r) && i.push(e) : -1 != r.indexOf(t) && i.push(e)
                        }
                        )
                    }
                    ),
                    i
                },
                findModels: function(e, t, n) {
                    for (var i = ["ng-", "data-ng-", "ng\\:"], r = 0; r < i.length; ++r) {
                        var o = e.querySelectorAll("[" + i[r] + "model" + (n ? "=" : "*=") + '"' + t + '"]');
                        if (o.length)
                            return o
                    }
                },
                getLocation: function() {
                    return n.url()
                },
                setLocation: function(t) {
                    t !== n.url() && (n.url(t),
                    e.$digest())
                },
                whenStable: function(e) {
                    t.notifyWhenNoOutstandingRequests(e)
                }
            }
        }
        ]
    }
    function Ht() {
        this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function(e, t, n, i, r) {
            function o(o, s, c) {
                var l = g(c) && !c
                  , u = (l ? i : n).defer()
                  , d = u.promise;
                return s = t.defer(function() {
                    try {
                        u.resolve(o())
                    } catch (t) {
                        u.reject(t),
                        r(t)
                    } finally {
                        delete a[d.$$timeoutId]
                    }
                    l || e.$apply()
                }
                , s),
                d.$$timeoutId = s,
                a[s] = u,
                d
            }
            var a = {};
            return o.cancel = function(e) {
                return e && e.$$timeoutId in a ? (a[e.$$timeoutId].reject("canceled"),
                delete a[e.$$timeoutId],
                t.defer.cancel(e.$$timeoutId)) : !1
            }
            ,
            o
        }
        ]
    }
    function zt(e) {
        return $n && (Ri.setAttribute("href", e),
        e = Ri.href),
        Ri.setAttribute("href", e),
        {
            href: Ri.href,
            protocol: Ri.protocol ? Ri.protocol.replace(/:$/, "") : "",
            host: Ri.host,
            search: Ri.search ? Ri.search.replace(/^\?/, "") : "",
            hash: Ri.hash ? Ri.hash.replace(/^#/, "") : "",
            hostname: Ri.hostname,
            port: Ri.port,
            pathname: "/" === Ri.pathname.charAt(0) ? Ri.pathname : "/" + Ri.pathname
        }
    }
    function Ft(e) {
        return e = w(e) ? zt(e) : e,
        e.protocol === Hi.protocol && e.host === Hi.host
    }
    function Ut() {
        this.$get = m(e)
    }
    function qt(e) {
        function t(n, i) {
            if ($(n)) {
                var r = {};
                return o(n, function(e, n) {
                    r[n] = t(n, e)
                }
                ),
                r
            }
            return e.factory(n + "Filter", i)
        }
        this.register = t,
        this.$get = ["$injector", function(e) {
            return function(t) {
                return e.get(t + "Filter")
            }
        }
        ],
        t("currency", Yt),
        t("date", nn),
        t("filter", Gt),
        t("json", rn),
        t("limitTo", on),
        t("lowercase", Gi),
        t("number", Xt),
        t("orderBy", an),
        t("uppercase", ji)
    }
    function Gt() {
        return function(e, t, n) {
            if (!Ln(e))
                return e;
            var i;
            switch (typeof t) {
            case "function":
                break;
            case "boolean":
            case "number":
            case "string":
                i = !0;
            case "object":
                t = jt(t, n, i);
                break;
            default:
                return e
            }
            return e.filter(t)
        }
    }
    function jt(e, t, n) {
        var i = $(e) && "$" in e;
        return !0 === t ? t = P : b(t) || (t = function(e, t) {
            return $(e) || $(t) ? !1 : (e = Sn("" + e),
            t = Sn("" + t),
            -1 !== e.indexOf(t))
        }
        ),
        function(r) {
            return i && !$(r) ? Wt(r, e.$, t, !1) : Wt(r, e, t, n)
        }
    }
    function Wt(e, t, n, i, r) {
        var o = typeof e
          , a = typeof t;
        if ("string" === a && "!" === t.charAt(0))
            return !Wt(e, t.substring(1), n, i);
        if (Ln(e))
            return e.some(function(e) {
                return Wt(e, t, n, i)
            }
            );
        switch (o) {
        case "object":
            var s;
            if (i) {
                for (s in e)
                    if ("$" !== s.charAt(0) && Wt(e[s], t, n, !0))
                        return !0;
                return r ? !1 : Wt(e, t, n, !1)
            }
            if ("object" === a) {
                for (s in t)
                    if (r = t[s],
                    !b(r) && (o = "$" === s,
                    !Wt(o ? e : e[s], r, n, o, o)))
                        return !1;
                return !0
            }
            return n(e, t);
        case "function":
            return !1;
        default:
            return n(e, t)
        }
    }
    function Yt(e) {
        var t = e.NUMBER_FORMATS;
        return function(e, n, i) {
            return v(n) && (n = t.CURRENCY_SYM),
            v(i) && (i = t.PATTERNS[1].maxFrac),
            null  == e ? e : Kt(e, t.PATTERNS[1], t.GROUP_SEP, t.DECIMAL_SEP, i).replace(/\u00A4/g, n)
        }
    }
    function Xt(e) {
        var t = e.NUMBER_FORMATS;
        return function(e, n) {
            return null  == e ? e : Kt(e, t.PATTERNS[0], t.GROUP_SEP, t.DECIMAL_SEP, n)
        }
    }
    function Kt(e, t, n, i, r) {
        if (!isFinite(e) || $(e))
            return "";
        var o = 0 > e;
        e = Math.abs(e);
        var a = e + ""
          , s = ""
          , c = []
          , l = !1;
        if (-1 !== a.indexOf("e")) {
            var u = a.match(/([\d\.]+)e(-?)(\d+)/);
            u && "-" == u[2] && u[3] > r + 1 ? e = 0 : (s = a,
            l = !0)
        }
        if (l)
            r > 0 && 1 > e && (s = e.toFixed(r),
            e = parseFloat(s));
        else {
            a = (a.split(zi)[1] || "").length,
            v(r) && (r = Math.min(Math.max(t.minFrac, a), t.maxFrac)),
            e = +(Math.round(+(e.toString() + "e" + r)).toString() + "e" + -r);
            var a = ("" + e).split(zi)
              , l = a[0]
              , a = a[1] || ""
              , d = 0
              , f = t.lgSize
              , h = t.gSize;
            if (l.length >= f + h)
                for (d = l.length - f,
                u = 0; d > u; u++)
                    0 === (d - u) % h && 0 !== u && (s += n),
                    s += l.charAt(u);
            for (u = d; u < l.length; u++)
                0 === (l.length - u) % f && 0 !== u && (s += n),
                s += l.charAt(u);
            for (; a.length < r; )
                a += "0";
            r && "0" !== r && (s += i + a.substr(0, r))
        }
        return 0 === e && (o = !1),
        c.push(o ? t.negPre : t.posPre, s, o ? t.negSuf : t.posSuf),
        c.join("")
    }
    function Zt(e, t, n) {
        var i = "";
        for (0 > e && (i = "-",
        e = -e),
        e = "" + e; e.length < t; )
            e = "0" + e;
        return n && (e = e.substr(e.length - t)),
        i + e
    }
    function Jt(e, t, n, i) {
        return n = n || 0,
        function(r) {
            return r = r["get" + e](),
            (n > 0 || r > -n) && (r += n),
            0 === r && -12 == n && (r = 12),
            Zt(r, t, i)
        }
    }
    function Qt(e, t) {
        return function(n, i) {
            var r = n["get" + e]()
              , o = xn(t ? "SHORT" + e : e);
            return i[o][r]
        }
    }
    function en(e) {
        var t = new Date(e,0,1).getDay();
        return new Date(e,0,(4 >= t ? 5 : 12) - t)
    }
    function tn(e) {
        return function(t) {
            var n = en(t.getFullYear());
            return t = +new Date(t.getFullYear(),t.getMonth(),t.getDate() + (4 - t.getDay())) - +n,
            t = 1 + Math.round(t / 6048e5),
            Zt(t, e)
        }
    }
    function nn(e) {
        function t(e) {
            var t;
            if (t = e.match(n)) {
                e = new Date(0);
                var i = 0
                  , r = 0
                  , o = t[8] ? e.setUTCFullYear : e.setFullYear
                  , a = t[8] ? e.setUTCHours : e.setHours;
                t[9] && (i = d(t[9] + t[10]),
                r = d(t[9] + t[11])),
                o.call(e, d(t[1]), d(t[2]) - 1, d(t[3])),
                i = d(t[4] || 0) - i,
                r = d(t[5] || 0) - r,
                o = d(t[6] || 0),
                t = Math.round(1e3 * parseFloat("0." + (t[7] || 0))),
                a.call(e, i, r, o, t)
            }
            return e
        }
        var n = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function(n, i, r) {
            var a, s, c = "", l = [];
            if (i = i || "mediumDate",
            i = e.DATETIME_FORMATS[i] || i,
            w(n) && (n = qi.test(n) ? d(n) : t(n)),
            y(n) && (n = new Date(n)),
            !_(n))
                return n;
            for (; i; )
                (s = Ui.exec(i)) ? (l = L(l, s, 1),
                i = l.pop()) : (l.push(i),
                i = null );
            return r && "UTC" === r && (n = new Date(n.getTime()),
            n.setMinutes(n.getMinutes() + n.getTimezoneOffset())),
            o(l, function(t) {
                a = Fi[t],
                c += a ? a(n, e.DATETIME_FORMATS) : t.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            }
            ),
            c
        }
    }
    function rn() {
        return function(e, t) {
            return v(t) && (t = 2),
            N(e, t)
        }
    }
    function on() {
        return function(e, t) {
            return y(e) && (e = e.toString()),
            Ln(e) || w(e) ? (t = 1 / 0 === Math.abs(Number(t)) ? Number(t) : d(t)) ? t > 0 ? e.slice(0, t) : e.slice(t) : w(e) ? "" : [] : e
        }
    }
    function an(e) {
        return function(t, n, i) {
            function o(e, t) {
                return t ? function(t, n) {
                    return e(n, t)
                }
                 : e
            }
            function a(e) {
                switch (typeof e) {
                case "number":
                case "boolean":
                case "string":
                    return !0;
                default:
                    return !1
                }
            }
            function s(e) {
                return null  === e ? "null" : "function" == typeof e.valueOf && (e = e.valueOf(),
                a(e)) || "function" == typeof e.toString && (e = e.toString(),
                a(e)) ? e : ""
            }
            function c(e, t) {
                var n = typeof e
                  , i = typeof t;
                return n === i && "object" === n && (e = s(e),
                t = s(t)),
                n === i ? ("string" === n && (e = e.toLowerCase(),
                t = t.toLowerCase()),
                e === t ? 0 : t > e ? -1 : 1) : i > n ? -1 : 1
            }
            return r(t) ? (n = Ln(n) ? n : [n],
            0 === n.length && (n = ["+"]),
            n = n.map(function(t) {
                var n = !1
                  , i = t || p;
                if (w(t)) {
                    if (("+" == t.charAt(0) || "-" == t.charAt(0)) && (n = "-" == t.charAt(0),
                    t = t.substring(1)),
                    "" === t)
                        return o(c, n);
                    if (i = e(t),
                    i.constant) {
                        var r = i();
                        return o(function(e, t) {
                            return c(e[r], t[r])
                        }
                        , n)
                    }
                }
                return o(function(e, t) {
                    return c(i(e), i(t))
                }
                , n)
            }
            ),
            En.call(t).sort(o(function(e, t) {
                for (var i = 0; i < n.length; i++) {
                    var r = n[i](e, t);
                    if (0 !== r)
                        return r
                }
                return 0
            }
            , i))) : t
        }
    }
    function sn(e) {
        return b(e) && (e = {
            link: e
        }),
        e.restrict = e.restrict || "AC",
        m(e)
    }
    function cn(e, t, i, r, a) {
        var s = this
          , c = []
          , l = s.$$parentForm = e.parent().controller("form") || Xi;
        s.$error = {},
        s.$$success = {},
        s.$pending = n,
        s.$name = a(t.name || t.ngForm || "")(i),
        s.$dirty = !1,
        s.$pristine = !0,
        s.$valid = !0,
        s.$invalid = !1,
        s.$submitted = !1,
        l.$addControl(s),
        s.$rollbackViewValue = function() {
            o(c, function(e) {
                e.$rollbackViewValue()
            }
            )
        }
        ,
        s.$commitViewValue = function() {
            o(c, function(e) {
                e.$commitViewValue()
            }
            )
        }
        ,
        s.$addControl = function(e) {
            ee(e.$name, "input"),
            c.push(e),
            e.$name && (s[e.$name] = e)
        }
        ,
        s.$$renameControl = function(e, t) {
            var n = e.$name;
            s[n] === e && delete s[n],
            s[t] = e,
            e.$name = t
        }
        ,
        s.$removeControl = function(e) {
            e.$name && s[e.$name] === e && delete s[e.$name],
            o(s.$pending, function(t, n) {
                s.$setValidity(n, null , e)
            }
            ),
            o(s.$error, function(t, n) {
                s.$setValidity(n, null , e)
            }
            ),
            o(s.$$success, function(t, n) {
                s.$setValidity(n, null , e)
            }
            ),
            I(c, e)
        }
        ,
        vn({
            ctrl: this,
            $element: e,
            set: function(e, t, n) {
                var i = e[t];
                i ? -1 === i.indexOf(n) && i.push(n) : e[t] = [n]
            },
            unset: function(e, t, n) {
                var i = e[t];
                i && (I(i, n),
                0 === i.length && delete e[t])
            },
            parentForm: l,
            $animate: r
        }),
        s.$setDirty = function() {
            r.removeClass(e, Ir),
            r.addClass(e, Dr),
            s.$dirty = !0,
            s.$pristine = !1,
            l.$setDirty()
        }
        ,
        s.$setPristine = function() {
            r.setClass(e, Ir, Dr + " ng-submitted"),
            s.$dirty = !1,
            s.$pristine = !0,
            s.$submitted = !1,
            o(c, function(e) {
                e.$setPristine()
            }
            )
        }
        ,
        s.$setUntouched = function() {
            o(c, function(e) {
                e.$setUntouched()
            }
            )
        }
        ,
        s.$setSubmitted = function() {
            r.addClass(e, "ng-submitted"),
            s.$submitted = !0,
            l.$setSubmitted()
        }
    }
    function ln(e) {
        e.$formatters.push(function(t) {
            return e.$isEmpty(t) ? t : t.toString()
        }
        )
    }
    function un(e, t, n, i, r, o) {
        var a = Sn(t[0].type);
        if (!r.android) {
            var s = !1;
            t.on("compositionstart", function(e) {
                s = !0
            }
            ),
            t.on("compositionend", function() {
                s = !1,
                c()
            }
            )
        }
        var c = function(e) {
            if (l && (o.defer.cancel(l),
            l = null ),
            !s) {
                var r = t.val();
                e = e && e.type,
                "password" === a || n.ngTrim && "false" === n.ngTrim || (r = On(r)),
                (i.$viewValue !== r || "" === r && i.$$hasNativeValidators) && i.$setViewValue(r, e)
            }
        }
        ;
        if (r.hasEvent("input"))
            t.on("input", c);
        else {
            var l, u = function(e, t, n) {
                l || (l = o.defer(function() {
                    l = null ,
                    t && t.value === n || c(e)
                }
                ))
            }
            ;
            t.on("keydown", function(e) {
                var t = e.keyCode;
                91 === t || t > 15 && 19 > t || t >= 37 && 40 >= t || u(e, this, this.value)
            }
            ),
            r.hasEvent("paste") && t.on("paste cut", u)
        }
        t.on("change", c),
        i.$render = function() {
            t.val(i.$isEmpty(i.$viewValue) ? "" : i.$viewValue)
        }
    }
    function dn(e, t) {
        return function(n, i) {
            var r, a;
            if (_(n))
                return n;
            if (w(n)) {
                if ('"' == n.charAt(0) && '"' == n.charAt(n.length - 1) && (n = n.substring(1, n.length - 1)),
                Qi.test(n))
                    return new Date(n);
                if (e.lastIndex = 0,
                r = e.exec(n))
                    return r.shift(),
                    a = i ? {
                        yyyy: i.getFullYear(),
                        MM: i.getMonth() + 1,
                        dd: i.getDate(),
                        HH: i.getHours(),
                        mm: i.getMinutes(),
                        ss: i.getSeconds(),
                        sss: i.getMilliseconds() / 1e3
                    } : {
                        yyyy: 1970,
                        MM: 1,
                        dd: 1,
                        HH: 0,
                        mm: 0,
                        ss: 0,
                        sss: 0
                    },
                    o(r, function(e, n) {
                        n < t.length && (a[t[n]] = +e)
                    }
                    ),
                    new Date(a.yyyy,a.MM - 1,a.dd,a.HH,a.mm,a.ss || 0,1e3 * a.sss || 0)
            }
            return NaN
        }
    }
    function fn(e, t, i, r) {
        return function(o, a, s, c, l, u, d) {
            function f(e) {
                return e && !(e.getTime && e.getTime() !== e.getTime())
            }
            function h(e) {
                return g(e) ? _(e) ? e : i(e) : n
            }
            hn(o, a, s, c),
            un(o, a, s, c, l, u);
            var p, m = c && c.$options && c.$options.timezone;
            if (c.$$parserName = e,
            c.$parsers.push(function(e) {
                return c.$isEmpty(e) ? null  : t.test(e) ? (e = i(e, p),
                "UTC" === m && e.setMinutes(e.getMinutes() - e.getTimezoneOffset()),
                e) : n
            }
            ),
            c.$formatters.push(function(e) {
                if (e && !_(e))
                    throw Pr("datefmt", e);
                if (f(e)) {
                    if ((p = e) && "UTC" === m) {
                        var t = 6e4 * p.getTimezoneOffset();
                        p = new Date(p.getTime() + t)
                    }
                    return d("date")(e, r, m)
                }
                return p = null ,
                ""
            }
            ),
            g(s.min) || s.ngMin) {
                var $;
                c.$validators.min = function(e) {
                    return !f(e) || v($) || i(e) >= $
                }
                ,
                s.$observe("min", function(e) {
                    $ = h(e),
                    c.$validate()
                }
                )
            }
            if (g(s.max) || s.ngMax) {
                var w;
                c.$validators.max = function(e) {
                    return !f(e) || v(w) || i(e) <= w
                }
                ,
                s.$observe("max", function(e) {
                    w = h(e),
                    c.$validate()
                }
                )
            }
        }
    }
    function hn(e, t, i, r) {
        (r.$$hasNativeValidators = $(t[0].validity)) && r.$parsers.push(function(e) {
            var i = t.prop("validity") || {};
            return i.badInput && !i.typeMismatch ? n : e
        }
        )
    }
    function pn(e, t, n, r, o) {
        if (g(r)) {
            if (e = e(r),
            !e.constant)
                throw i("ngModel")("constexpr", n, r);
            return e(t)
        }
        return o
    }
    function mn(e, t) {
        return e = "ngClass" + e,
        ["$animate", function(n) {
            function i(e, t) {
                var n = []
                  , i = 0;
                e: for (; i < e.length; i++) {
                    for (var r = e[i], o = 0; o < t.length; o++)
                        if (r == t[o])
                            continue e;
                    n.push(r)
                }
                return n
            }
            function r(e) {
                if (!Ln(e)) {
                    if (w(e))
                        return e.split(" ");
                    if ($(e)) {
                        var t = [];
                        return o(e, function(e, n) {
                            e && (t = t.concat(n.split(" ")))
                        }
                        ),
                        t
                    }
                }
                return e
            }
            return {
                restrict: "AC",
                link: function(a, s, c) {
                    function l(e, t) {
                        var n = s.data("$classCounts") || {}
                          , i = [];
                        return o(e, function(e) {
                            (t > 0 || n[e]) && (n[e] = (n[e] || 0) + t,
                            n[e] === +(t > 0) && i.push(e))
                        }
                        ),
                        s.data("$classCounts", n),
                        i.join(" ")
                    }
                    function u(e) {
                        if (!0 === t || a.$index % 2 === t) {
                            var o = r(e || []);
                            if (d) {
                                if (!P(e, d)) {
                                    var u = r(d)
                                      , f = i(o, u)
                                      , o = i(u, o)
                                      , f = l(f, 1)
                                      , o = l(o, -1);
                                    f && f.length && n.addClass(s, f),
                                    o && o.length && n.removeClass(s, o)
                                }
                            } else {
                                var f = l(o, 1);
                                c.$addClass(f)
                            }
                        }
                        d = M(e)
                    }
                    var d;
                    a.$watch(c[e], u, !0),
                    c.$observe("class", function(t) {
                        u(a.$eval(c[e]))
                    }
                    ),
                    "ngClass" !== e && a.$watch("$index", function(n, i) {
                        var o = 1 & n;
                        if (o !== (1 & i)) {
                            var s = r(a.$eval(c[e]));
                            o === t ? (o = l(s, 1),
                            c.$addClass(o)) : (o = l(s, -1),
                            c.$removeClass(o))
                        }
                    }
                    )
                }
            }
        }
        ]
    }
    function vn(e) {
        function t(e, t) {
            t && !a[e] ? (u.addClass(o, e),
            a[e] = !0) : !t && a[e] && (u.removeClass(o, e),
            a[e] = !1)
        }
        function i(e, n) {
            e = e ? "-" + K(e, "-") : "",
            t(kr + e, !0 === n),
            t(Ar + e, !1 === n)
        }
        var r = e.ctrl
          , o = e.$element
          , a = {}
          , s = e.set
          , c = e.unset
          , l = e.parentForm
          , u = e.$animate;
        a[Ar] = !(a[kr] = o.hasClass(kr)),
        r.$setValidity = function(e, o, a) {
            o === n ? (r.$pending || (r.$pending = {}),
            s(r.$pending, e, a)) : (r.$pending && c(r.$pending, e, a),
            gn(r.$pending) && (r.$pending = n)),
            E(o) ? o ? (c(r.$error, e, a),
            s(r.$$success, e, a)) : (s(r.$error, e, a),
            c(r.$$success, e, a)) : (c(r.$error, e, a),
            c(r.$$success, e, a)),
            r.$pending ? (t(Mr, !0),
            r.$valid = r.$invalid = n,
            i("", null )) : (t(Mr, !1),
            r.$valid = gn(r.$error),
            r.$invalid = !r.$valid,
            i("", r.$valid)),
            o = r.$pending && r.$pending[e] ? n : r.$error[e] ? !1 : r.$$success[e] ? !0 : null ,
            i(e, o),
            l.$setValidity(e, o, r)
        }
    }
    function gn(e) {
        if (e)
            for (var t in e)
                return !1;
        return !0
    }
    var $n, wn, yn, _n, bn = /^\/(.+)\/([a-z]*)$/, Sn = function(e) {
        return w(e) ? e.toLowerCase() : e
    }
    , Tn = Object.prototype.hasOwnProperty, xn = function(e) {
        return w(e) ? e.toUpperCase() : e
    }
    , En = [].slice, Cn = [].splice, kn = [].push, An = Object.prototype.toString, In = i("ng"), Dn = e.angular || (e.angular = {}), Mn = 0;
    $n = t.documentMode,
    h.$inject = [],
    p.$inject = [];
    var Pn, Ln = Array.isArray, On = function(e) {
        return w(e) ? e.trim() : e
    }
    , Vn = function(e) {
        return e.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
    }
    , Nn = function() {
        if (g(Nn.isActive_))
            return Nn.isActive_;
        var e = !(!t.querySelector("[ng-csp]") && !t.querySelector("[data-ng-csp]"));
        if (!e)
            try {
                new Function("")
            } catch (n) {
                e = !0
            }
        return Nn.isActive_ = e
    }
    , Bn = ["ng-", "data-ng-", "ng:", "x-ng-"], Rn = /[A-Z]/g, Hn = !1, zn = 1, Fn = 3, Un = {
        full: "1.3.13",
        major: 1,
        minor: 3,
        dot: 13,
        codeName: "meticulous-riffleshuffle"
    };
    le.expando = "ng339";
    var qn = le.cache = {}
      , Gn = 1;
    le._data = function(e) {
        return this.cache[e[this.expando]] || {}
    }
    ;
    var jn = /([\:\-\_]+(.))/g
      , Wn = /^moz([A-Z])/
      , Yn = {
        mouseleave: "mouseout",
        mouseenter: "mouseover"
    }
      , Xn = i("jqLite")
      , Kn = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
      , Zn = /<|&#?\w+;/
      , Jn = /<([\w:]+)/
      , Qn = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , ei = {
        option: [1, '<select multiple="multiple">', "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    ei.optgroup = ei.option,
    ei.tbody = ei.tfoot = ei.colgroup = ei.caption = ei.thead,
    ei.th = ei.td;
    var ti = le.prototype = {
        ready: function(n) {
            function i() {
                r || (r = !0,
                n())
            }
            var r = !1;
            "complete" === t.readyState ? setTimeout(i) : (this.on("DOMContentLoaded", i),
            le(e).on("load", i))
        },
        toString: function() {
            var e = [];
            return o(this, function(t) {
                e.push("" + t)
            }
            ),
            "[" + e.join(", ") + "]"
        },
        eq: function(e) {
            return wn(e >= 0 ? this[e] : this[this.length + e])
        },
        length: 0,
        push: kn,
        sort: [].sort,
        splice: [].splice
    }
      , ni = {};
    o("multiple selected checked disabled readOnly required open".split(" "), function(e) {
        ni[Sn(e)] = e
    }
    );
    var ii = {};
    o("input select option textarea button form details".split(" "), function(e) {
        ii[e] = !0
    }
    );
    var ri = {
        ngMinlength: "minlength",
        ngMaxlength: "maxlength",
        ngMin: "min",
        ngMax: "max",
        ngPattern: "pattern"
    };
    o({
        data: me,
        removeData: he
    }, function(e, t) {
        le[t] = e
    }
    ),
    o({
        data: me,
        inheritedData: _e,
        scope: function(e) {
            return wn.data(e, "$scope") || _e(e.parentNode || e, ["$isolateScope", "$scope"])
        },
        isolateScope: function(e) {
            return wn.data(e, "$isolateScope") || wn.data(e, "$isolateScopeNoTemplate")
        },
        controller: ye,
        injector: function(e) {
            return _e(e, "$injector")
        },
        removeAttr: function(e, t) {
            e.removeAttribute(t)
        },
        hasClass: ve,
        css: function(e, t, n) {
            return t = ae(t),
            g(n) ? void (e.style[t] = n) : e.style[t]
        },
        attr: function(e, t, i) {
            var r = Sn(t);
            if (ni[r]) {
                if (!g(i))
                    return e[t] || (e.attributes.getNamedItem(t) || h).specified ? r : n;
                i ? (e[t] = !0,
                e.setAttribute(t, r)) : (e[t] = !1,
                e.removeAttribute(r))
            } else if (g(i))
                e.setAttribute(t, i);
            else if (e.getAttribute)
                return e = e.getAttribute(t, 2),
                null  === e ? n : e
        },
        prop: function(e, t, n) {
            return g(n) ? void (e[t] = n) : e[t]
        },
        text: function() {
            function e(e, t) {
                if (v(t)) {
                    var n = e.nodeType;
                    return n === zn || n === Fn ? e.textContent : ""
                }
                e.textContent = t
            }
            return e.$dv = "",
            e
        }
        (),
        val: function(e, t) {
            if (v(t)) {
                if (e.multiple && "select" === A(e)) {
                    var n = [];
                    return o(e.options, function(e) {
                        e.selected && n.push(e.value || e.text)
                    }
                    ),
                    0 === n.length ? null  : n
                }
                return e.value
            }
            e.value = t
        },
        html: function(e, t) {
            return v(t) ? e.innerHTML : (de(e, !0),
            void (e.innerHTML = t))
        },
        empty: be
    }, function(e, t) {
        le.prototype[t] = function(t, i) {
            var r, o, a = this.length;
            if (e !== be && (2 == e.length && e !== ve && e !== ye ? t : i) === n) {
                if ($(t)) {
                    for (r = 0; a > r; r++)
                        if (e === me)
                            e(this[r], t);
                        else
                            for (o in t)
                                e(this[r], o, t[o]);
                    return this
                }
                for (r = e.$dv,
                a = r === n ? Math.min(a, 1) : a,
                o = 0; a > o; o++) {
                    var s = e(this[o], t, i);
                    r = r ? r + s : s
                }
                return r
            }
            for (r = 0; a > r; r++)
                e(this[r], t, i);
            return this
        }
    }
    ),
    o({
        removeData: he,
        on: function ro(e, t, n, i) {
            if (g(i))
                throw Xn("onargs");
            if (se(e)) {
                var r = pe(e, !0);
                i = r.events;
                var o = r.handle;
                o || (o = r.handle = Ce(e, i));
                for (var r = 0 <= t.indexOf(" ") ? t.split(" ") : [t], a = r.length; a--; ) {
                    t = r[a];
                    var s = i[t];
                    s || (i[t] = [],
                    "mouseenter" === t || "mouseleave" === t ? ro(e, Yn[t], function(e) {
                        var n = e.relatedTarget;
                        n && (n === this || this.contains(n)) || o(e, t)
                    }
                    ) : "$destroy" !== t && e.addEventListener(t, o, !1),
                    s = i[t]),
                    s.push(n)
                }
            }
        },
        off: fe,
        one: function(e, t, n) {
            e = wn(e),
            e.on(t, function i() {
                e.off(t, n),
                e.off(t, i)
            }
            ),
            e.on(t, n)
        },
        replaceWith: function(e, t) {
            var n, i = e.parentNode;
            de(e),
            o(new le(t), function(t) {
                n ? i.insertBefore(t, n.nextSibling) : i.replaceChild(t, e),
                n = t
            }
            )
        },
        children: function(e) {
            var t = [];
            return o(e.childNodes, function(e) {
                e.nodeType === zn && t.push(e)
            }
            ),
            t
        },
        contents: function(e) {
            return e.contentDocument || e.childNodes || []
        },
        append: function(e, t) {
            var n = e.nodeType;
            if (n === zn || 11 === n) {
                t = new le(t);
                for (var n = 0, i = t.length; i > n; n++)
                    e.appendChild(t[n])
            }
        },
        prepend: function(e, t) {
            if (e.nodeType === zn) {
                var n = e.firstChild;
                o(new le(t), function(t) {
                    e.insertBefore(t, n)
                }
                )
            }
        },
        wrap: function(e, t) {
            t = wn(t).eq(0).clone()[0];
            var n = e.parentNode;
            n && n.replaceChild(t, e),
            t.appendChild(e)
        },
        remove: Se,
        detach: function(e) {
            Se(e, !0)
        },
        after: function(e, t) {
            var n = e
              , i = e.parentNode;
            t = new le(t);
            for (var r = 0, o = t.length; o > r; r++) {
                var a = t[r];
                i.insertBefore(a, n.nextSibling),
                n = a
            }
        },
        addClass: $e,
        removeClass: ge,
        toggleClass: function(e, t, n) {
            t && o(t.split(" "), function(t) {
                var i = n;
                v(i) && (i = !ve(e, t)),
                (i ? $e : ge)(e, t)
            }
            )
        },
        parent: function(e) {
            return (e = e.parentNode) && 11 !== e.nodeType ? e : null
        },
        next: function(e) {
            return e.nextElementSibling
        },
        find: function(e, t) {
            return e.getElementsByTagName ? e.getElementsByTagName(t) : []
        },
        clone: ue,
        triggerHandler: function(e, t, n) {
            var i, r, a = t.type || t, s = pe(e);
            (s = (s = s && s.events) && s[a]) && (i = {
                preventDefault: function() {
                    this.defaultPrevented = !0
                },
                isDefaultPrevented: function() {
                    return !0 === this.defaultPrevented
                },
                stopImmediatePropagation: function() {
                    this.immediatePropagationStopped = !0
                },
                isImmediatePropagationStopped: function() {
                    return !0 === this.immediatePropagationStopped
                },
                stopPropagation: h,
                type: a,
                target: e
            },
            t.type && (i = u(i, t)),
            t = M(s),
            r = n ? [i].concat(n) : [i],
            o(t, function(t) {
                i.isImmediatePropagationStopped() || t.apply(e, r)
            }
            ))
        }
    }, function(e, t) {
        le.prototype[t] = function(t, n, i) {
            for (var r, o = 0, a = this.length; a > o; o++)
                v(r) ? (r = e(this[o], t, n, i),
                g(r) && (r = wn(r))) : we(r, e(this[o], t, n, i));
            return g(r) ? r : this
        }
        ,
        le.prototype.bind = le.prototype.on,
        le.prototype.unbind = le.prototype.off
    }
    ),
    Ie.prototype = {
        put: function(e, t) {
            this[Ae(e, this.nextUid)] = t
        },
        get: function(e) {
            return this[Ae(e, this.nextUid)]
        },
        remove: function(e) {
            var t = this[e = Ae(e, this.nextUid)];
            return delete this[e],
            t
        }
    };
    var oi = /^function\s*[^\(]*\(\s*([^\)]*)\)/m
      , ai = /,/
      , si = /^\s*(_?)(\S+?)\1\s*$/
      , ci = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm
      , li = i("$injector");
    Me.$$annotate = function(e, t, n) {
        var i;
        if ("function" == typeof e) {
            if (!(i = e.$inject)) {
                if (i = [],
                e.length) {
                    if (t)
                        throw w(n) && n || (n = e.name || De(e)),
                        li("strictdi", n);
                    t = e.toString().replace(ci, ""),
                    t = t.match(oi),
                    o(t[1].split(ai), function(e) {
                        e.replace(si, function(e, t, n) {
                            i.push(n)
                        }
                        )
                    }
                    )
                }
                e.$inject = i
            }
        } else
            Ln(e) ? (t = e.length - 1,
            Q(e[t], "fn"),
            i = e.slice(0, t)) : Q(e, "fn", !0);
        return i
    }
    ;
    var ui = i("$animate")
      , di = ["$provide", function(e) {
        this.$$selectors = {},
        this.register = function(t, n) {
            var i = t + "-animation";
            if (t && "." != t.charAt(0))
                throw ui("notcsel", t);
            this.$$selectors[t.substr(1)] = i,
            e.factory(i, n)
        }
        ,
        this.classNameFilter = function(e) {
            return 1 === arguments.length && (this.$$classNameFilter = e instanceof RegExp ? e : null ),
            this.$$classNameFilter
        }
        ,
        this.$get = ["$$q", "$$asyncCallback", "$rootScope", function(e, t, n) {
            function i(t) {
                var i, r = e.defer();
                return r.promise.$$cancelFn = function() {
                    i && i()
                }
                ,
                n.$$postDigest(function() {
                    i = t(function() {
                        r.resolve()
                    }
                    )
                }
                ),
                r.promise
            }
            function r(e, t) {
                var n = []
                  , i = []
                  , r = ie();
                return o((e.attr("class") || "").split(/\s+/), function(e) {
                    r[e] = !0
                }
                ),
                o(t, function(e, t) {
                    var o = r[t];
                    !1 === e && o ? i.push(t) : !0 !== e || o || n.push(t)
                }
                ),
                0 < n.length + i.length && [n.length ? n : null , i.length ? i : null ]
            }
            function a(e, t, n) {
                for (var i = 0, r = t.length; r > i; ++i)
                    e[t[i]] = n
            }
            function s() {
                return l || (l = e.defer(),
                t(function() {
                    l.resolve(),
                    l = null
                }
                )),
                l.promise
            }
            function c(e, t) {
                if (Dn.isObject(t)) {
                    var n = u(t.from || {}, t.to || {});
                    e.css(n)
                }
            }
            var l;
            return {
                animate: function(e, t, n) {
                    return c(e, {
                        from: t,
                        to: n
                    }),
                    s()
                },
                enter: function(e, t, n, i) {
                    return c(e, i),
                    n ? n.after(e) : t.prepend(e),
                    s()
                },
                leave: function(e, t) {
                    return e.remove(),
                    s()
                },
                move: function(e, t, n, i) {
                    return this.enter(e, t, n, i)
                },
                addClass: function(e, t, n) {
                    return this.setClass(e, t, [], n)
                },
                $$addClassImmediately: function(e, t, n) {
                    return e = wn(e),
                    t = w(t) ? t : Ln(t) ? t.join(" ") : "",
                    o(e, function(e) {
                        $e(e, t)
                    }
                    ),
                    c(e, n),
                    s()
                },
                removeClass: function(e, t, n) {
                    return this.setClass(e, [], t, n)
                },
                $$removeClassImmediately: function(e, t, n) {
                    return e = wn(e),
                    t = w(t) ? t : Ln(t) ? t.join(" ") : "",
                    o(e, function(e) {
                        ge(e, t)
                    }
                    ),
                    c(e, n),
                    s()
                },
                setClass: function(e, t, n, o) {
                    var s = this
                      , c = !1;
                    e = wn(e);
                    var l = e.data("$$animateClasses");
                    return l ? o && l.options && (l.options = Dn.extend(l.options || {}, o)) : (l = {
                        classes: {},
                        options: o
                    },
                    c = !0),
                    o = l.classes,
                    t = Ln(t) ? t : t.split(" "),
                    n = Ln(n) ? n : n.split(" "),
                    a(o, t, !0),
                    a(o, n, !1),
                    c && (l.promise = i(function(t) {
                        var n = e.data("$$animateClasses");
                        if (e.removeData("$$animateClasses"),
                        n) {
                            var i = r(e, n.classes);
                            i && s.$$setClassImmediately(e, i[0], i[1], n.options)
                        }
                        t()
                    }
                    ),
                    e.data("$$animateClasses", l)),
                    l.promise
                },
                $$setClassImmediately: function(e, t, n, i) {
                    return t && this.$$addClassImmediately(e, t),
                    n && this.$$removeClassImmediately(e, n),
                    c(e, i),
                    s()
                },
                enabled: h,
                cancel: h
            }
        }
        ]
    }
    ]
      , fi = i("$compile");
    Re.$inject = ["$provide", "$$sanitizeUriProvider"];
    var hi = /^((?:x|data)[\:\-_])/i
      , pi = i("$controller")
      , mi = "application/json"
      , vi = {
        "Content-Type": mi + ";charset=utf-8"
    }
      , gi = /^\[|^\{(?!\{)/
      , $i = {
        "[": /]$/,
        "{": /}$/
    }
      , wi = /^\)\]\}',?\n/
      , yi = i("$interpolate")
      , _i = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/
      , bi = {
        http: 80,
        https: 443,
        ftp: 21
    }
      , Si = i("$location")
      , Ti = {
        $$html5: !1,
        $$replace: !1,
        absUrl: ht("$$absUrl"),
        url: function(e) {
            if (v(e))
                return this.$$url;
            var t = _i.exec(e);
            return (t[1] || "" === e) && this.path(decodeURIComponent(t[1])),
            (t[2] || t[1] || "" === e) && this.search(t[3] || ""),
            this.hash(t[5] || ""),
            this
        },
        protocol: ht("$$protocol"),
        host: ht("$$host"),
        port: ht("$$port"),
        path: pt("$$path", function(e) {
            return e = null  !== e ? e.toString() : "",
            "/" == e.charAt(0) ? e : "/" + e
        }
        ),
        search: function(e, t) {
            switch (arguments.length) {
            case 0:
                return this.$$search;
            case 1:
                if (w(e) || y(e))
                    e = e.toString(),
                    this.$$search = z(e);
                else {
                    if (!$(e))
                        throw Si("isrcharg");
                    e = D(e, {}),
                    o(e, function(t, n) {
                        null  == t && delete e[n]
                    }
                    ),
                    this.$$search = e
                }
                break;
            default:
                v(t) || null  === t ? delete this.$$search[e] : this.$$search[e] = t
            }
            return this.$$compose(),
            this
        },
        hash: pt("$$hash", function(e) {
            return null  !== e ? e.toString() : ""
        }
        ),
        replace: function() {
            return this.$$replace = !0,
            this
        }
    };
    o([ft, dt, ut], function(e) {
        e.prototype = Object.create(Ti),
        e.prototype.state = function(t) {
            if (!arguments.length)
                return this.$$state;
            if (e !== ut || !this.$$html5)
                throw Si("nostate");
            return this.$$state = v(t) ? null  : t,
            this
        }
    }
    );
    var xi = i("$parse")
      , Ei = Function.prototype.call
      , Ci = Function.prototype.apply
      , ki = Function.prototype.bind
      , Ai = ie();
    o({
        "null": function() {
            return null
        },
        "true": function() {
            return !0
        },
        "false": function() {
            return !1
        },
        undefined: function() {}
    }, function(e, t) {
        e.constant = e.literal = e.sharedGetter = !0,
        Ai[t] = e
    }
    ),
    Ai["this"] = function(e) {
        return e
    }
    ,
    Ai["this"].sharedGetter = !0;
    var Ii = u(ie(), {
        "+": function(e, t, i, r) {
            return i = i(e, t),
            r = r(e, t),
            g(i) ? g(r) ? i + r : i : g(r) ? r : n
        },
        "-": function(e, t, n, i) {
            return n = n(e, t),
            i = i(e, t),
            (g(n) ? n : 0) - (g(i) ? i : 0)
        },
        "*": function(e, t, n, i) {
            return n(e, t) * i(e, t)
        },
        "/": function(e, t, n, i) {
            return n(e, t) / i(e, t)
        },
        "%": function(e, t, n, i) {
            return n(e, t) % i(e, t)
        },
        "===": function(e, t, n, i) {
            return n(e, t) === i(e, t)
        },
        "!==": function(e, t, n, i) {
            return n(e, t) !== i(e, t)
        },
        "==": function(e, t, n, i) {
            return n(e, t) == i(e, t)
        },
        "!=": function(e, t, n, i) {
            return n(e, t) != i(e, t)
        },
        "<": function(e, t, n, i) {
            return n(e, t) < i(e, t)
        },
        ">": function(e, t, n, i) {
            return n(e, t) > i(e, t)
        },
        "<=": function(e, t, n, i) {
            return n(e, t) <= i(e, t)
        },
        ">=": function(e, t, n, i) {
            return n(e, t) >= i(e, t)
        },
        "&&": function(e, t, n, i) {
            return n(e, t) && i(e, t)
        },
        "||": function(e, t, n, i) {
            return n(e, t) || i(e, t)
        },
        "!": function(e, t, n) {
            return !n(e, t)
        },
        "=": !0,
        "|": !0
    })
      , Di = {
        n: "\n",
        f: "\f",
        r: "\r",
        t: "	",
        v: "",
        "'": "'",
        '"': '"'
    }
      , Mi = function(e) {
        this.options = e
    }
    ;
    Mi.prototype = {
        constructor: Mi,
        lex: function(e) {
            for (this.text = e,
            this.index = 0,
            this.tokens = []; this.index < this.text.length; )
                if (e = this.text.charAt(this.index),
                '"' === e || "'" === e)
                    this.readString(e);
                else if (this.isNumber(e) || "." === e && this.isNumber(this.peek()))
                    this.readNumber();
                else if (this.isIdent(e))
                    this.readIdent();
                else if (this.is(e, "(){}[].,;:?"))
                    this.tokens.push({
                        index: this.index,
                        text: e
                    }),
                    this.index++;
                else if (this.isWhitespace(e))
                    this.index++;
                else {
                    var t = e + this.peek()
                      , n = t + this.peek(2)
                      , i = Ii[t]
                      , r = Ii[n];
                    Ii[e] || i || r ? (e = r ? n : i ? t : e,
                    this.tokens.push({
                        index: this.index,
                        text: e,
                        operator: !0
                    }),
                    this.index += e.length) : this.throwError("Unexpected next character ", this.index, this.index + 1)
                }
            return this.tokens
        },
        is: function(e, t) {
            return -1 !== t.indexOf(e)
        },
        peek: function(e) {
            return e = e || 1,
            this.index + e < this.text.length ? this.text.charAt(this.index + e) : !1
        },
        isNumber: function(e) {
            return e >= "0" && "9" >= e && "string" == typeof e
        },
        isWhitespace: function(e) {
            return " " === e || "\r" === e || "	" === e || "\n" === e || "" === e || " " === e
        },
        isIdent: function(e) {
            return e >= "a" && "z" >= e || e >= "A" && "Z" >= e || "_" === e || "$" === e
        },
        isExpOperator: function(e) {
            return "-" === e || "+" === e || this.isNumber(e)
        },
        throwError: function(e, t, n) {
            throw n = n || this.index,
            t = g(t) ? "s " + t + "-" + this.index + " [" + this.text.substring(t, n) + "]" : " " + n,
            xi("lexerr", e, t, this.text)
        },
        readNumber: function() {
            for (var e = "", t = this.index; this.index < this.text.length; ) {
                var n = Sn(this.text.charAt(this.index));
                if ("." == n || this.isNumber(n))
                    e += n;
                else {
                    var i = this.peek();
                    if ("e" == n && this.isExpOperator(i))
                        e += n;
                    else if (this.isExpOperator(n) && i && this.isNumber(i) && "e" == e.charAt(e.length - 1))
                        e += n;
                    else {
                        if (!this.isExpOperator(n) || i && this.isNumber(i) || "e" != e.charAt(e.length - 1))
                            break;
                        this.throwError("Invalid exponent")
                    }
                }
                this.index++
            }
            this.tokens.push({
                index: t,
                text: e,
                constant: !0,
                value: Number(e)
            })
        },
        readIdent: function() {
            for (var e = this.index; this.index < this.text.length; ) {
                var t = this.text.charAt(this.index);
                if (!this.isIdent(t) && !this.isNumber(t))
                    break;
                this.index++
            }
            this.tokens.push({
                index: e,
                text: this.text.slice(e, this.index),
                identifier: !0
            })
        },
        readString: function(e) {
            var t = this.index;
            this.index++;
            for (var n = "", i = e, r = !1; this.index < this.text.length; ) {
                var o = this.text.charAt(this.index)
                  , i = i + o;
                if (r)
                    "u" === o ? (r = this.text.substring(this.index + 1, this.index + 5),
                    r.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + r + "]"),
                    this.index += 4,
                    n += String.fromCharCode(parseInt(r, 16))) : n += Di[o] || o,
                    r = !1;
                else if ("\\" === o)
                    r = !0;
                else {
                    if (o === e)
                        return this.index++,
                        void this.tokens.push({
                            index: t,
                            text: i,
                            constant: !0,
                            value: n
                        });
                    n += o
                }
                this.index++
            }
            this.throwError("Unterminated quote", t)
        }
    };
    var Pi = function(e, t, n) {
        this.lexer = e,
        this.$filter = t,
        this.options = n
    }
    ;
    Pi.ZERO = u(function() {
        return 0
    }
    , {
        sharedGetter: !0,
        constant: !0
    }),
    Pi.prototype = {
        constructor: Pi,
        parse: function(e) {
            return this.text = e,
            this.tokens = this.lexer.lex(e),
            e = this.statements(),
            0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]),
            e.literal = !!e.literal,
            e.constant = !!e.constant,
            e
        },
        primary: function() {
            var e;
            this.expect("(") ? (e = this.filterChain(),
            this.consume(")")) : this.expect("[") ? e = this.arrayDeclaration() : this.expect("{") ? e = this.object() : this.peek().identifier && this.peek().text in Ai ? e = Ai[this.consume().text] : this.peek().identifier ? e = this.identifier() : this.peek().constant ? e = this.constant() : this.throwError("not a primary expression", this.peek());
            for (var t, n; t = this.expect("(", "[", "."); )
                "(" === t.text ? (e = this.functionCall(e, n),
                n = null ) : "[" === t.text ? (n = e,
                e = this.objectIndex(e)) : "." === t.text ? (n = e,
                e = this.fieldAccess(e)) : this.throwError("IMPOSSIBLE");
            return e
        },
        throwError: function(e, t) {
            throw xi("syntax", t.text, e, t.index + 1, this.text, this.text.substring(t.index))
        },
        peekToken: function() {
            if (0 === this.tokens.length)
                throw xi("ueoe", this.text);
            return this.tokens[0]
        },
        peek: function(e, t, n, i) {
            return this.peekAhead(0, e, t, n, i)
        },
        peekAhead: function(e, t, n, i, r) {
            if (this.tokens.length > e) {
                e = this.tokens[e];
                var o = e.text;
                if (o === t || o === n || o === i || o === r || !(t || n || i || r))
                    return e
            }
            return !1
        },
        expect: function(e, t, n, i) {
            return (e = this.peek(e, t, n, i)) ? (this.tokens.shift(),
            e) : !1
        },
        consume: function(e) {
            if (0 === this.tokens.length)
                throw xi("ueoe", this.text);
            var t = this.expect(e);
            return t || this.throwError("is unexpected, expecting [" + e + "]", this.peek()),
            t
        },
        unaryFn: function(e, t) {
            var n = Ii[e];
            return u(function(e, i) {
                return n(e, i, t)
            }
            , {
                constant: t.constant,
                inputs: [t]
            })
        },
        binaryFn: function(e, t, n, i) {
            var r = Ii[t];
            return u(function(t, i) {
                return r(t, i, e, n)
            }
            , {
                constant: e.constant && n.constant,
                inputs: !i && [e, n]
            })
        },
        identifier: function() {
            for (var e = this.consume().text; this.peek(".") && this.peekAhead(1).identifier && !this.peekAhead(2, "("); )
                e += this.consume().text + this.consume().text;
            return Tt(e, this.options, this.text)
        },
        constant: function() {
            var e = this.consume().value;
            return u(function() {
                return e
            }
            , {
                constant: !0,
                literal: !0
            })
        },
        statements: function() {
            for (var e = []; ; )
                if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && e.push(this.filterChain()),
                !this.expect(";"))
                    return 1 === e.length ? e[0] : function(t, n) {
                        for (var i, r = 0, o = e.length; o > r; r++)
                            i = e[r](t, n);
                        return i
                    }
        },
        filterChain: function() {
            for (var e = this.expression(); this.expect("|"); )
                e = this.filter(e);
            return e
        },
        filter: function(e) {
            var t, i, r = this.$filter(this.consume().text);
            if (this.peek(":"))
                for (t = [],
                i = []; this.expect(":"); )
                    t.push(this.expression());
            var o = [e].concat(t || []);
            return u(function(o, a) {
                var s = e(o, a);
                if (i) {
                    for (i[0] = s,
                    s = t.length; s--; )
                        i[s + 1] = t[s](o, a);
                    return r.apply(n, i)
                }
                return r(s)
            }
            , {
                constant: !r.$stateful && o.every(wt),
                inputs: !r.$stateful && o
            })
        },
        expression: function() {
            return this.assignment()
        },
        assignment: function() {
            var e, t, n = this.ternary();
            return (t = this.expect("=")) ? (n.assign || this.throwError("implies assignment but [" + this.text.substring(0, t.index) + "] can not be assigned to", t),
            e = this.ternary(),
            u(function(t, i) {
                return n.assign(t, e(t, i), i)
            }
            , {
                inputs: [n, e]
            })) : n
        },
        ternary: function() {
            var e, t = this.logicalOR();
            if (this.expect("?") && (e = this.assignment(),
            this.consume(":"))) {
                var n = this.assignment();
                return u(function(i, r) {
                    return t(i, r) ? e(i, r) : n(i, r)
                }
                , {
                    constant: t.constant && e.constant && n.constant
                })
            }
            return t
        },
        logicalOR: function() {
            for (var e, t = this.logicalAND(); e = this.expect("||"); )
                t = this.binaryFn(t, e.text, this.logicalAND(), !0);
            return t
        },
        logicalAND: function() {
            for (var e, t = this.equality(); e = this.expect("&&"); )
                t = this.binaryFn(t, e.text, this.equality(), !0);
            return t
        },
        equality: function() {
            for (var e, t = this.relational(); e = this.expect("==", "!=", "===", "!=="); )
                t = this.binaryFn(t, e.text, this.relational());
            return t
        },
        relational: function() {
            for (var e, t = this.additive(); e = this.expect("<", ">", "<=", ">="); )
                t = this.binaryFn(t, e.text, this.additive());
            return t
        },
        additive: function() {
            for (var e, t = this.multiplicative(); e = this.expect("+", "-"); )
                t = this.binaryFn(t, e.text, this.multiplicative());
            return t
        },
        multiplicative: function() {
            for (var e, t = this.unary(); e = this.expect("*", "/", "%"); )
                t = this.binaryFn(t, e.text, this.unary());
            return t
        },
        unary: function() {
            var e;
            return this.expect("+") ? this.primary() : (e = this.expect("-")) ? this.binaryFn(Pi.ZERO, e.text, this.unary()) : (e = this.expect("!")) ? this.unaryFn(e.text, this.unary()) : this.primary()
        },
        fieldAccess: function(e) {
            var t = this.identifier();
            return u(function(i, r, o) {
                return i = o || e(i, r),
                null  == i ? n : t(i)
            }
            , {
                assign: function(n, i, r) {
                    var o = e(n, r);
                    return o || e.assign(n, o = {}, r),
                    t.assign(o, i)
                }
            })
        },
        objectIndex: function(e) {
            var t = this.text
              , i = this.expression();
            return this.consume("]"),
            u(function(r, o) {
                var a = e(r, o)
                  , s = i(r, o);
                return gt(s, t),
                a ? $t(a[s], t) : n
            }
            , {
                assign: function(n, r, o) {
                    var a = gt(i(n, o), t)
                      , s = $t(e(n, o), t);
                    return s || e.assign(n, s = {}, o),
                    s[a] = r
                }
            })
        },
        functionCall: function(e, t) {
            var i = [];
            if (")" !== this.peekToken().text)
                do
                    i.push(this.expression());
                while (this.expect(","));this.consume(")");
            var r = this.text
              , o = i.length ? [] : null ;
            return function(a, s) {
                var c = t ? t(a, s) : g(t) ? n : a
                  , l = e(a, s, c) || h;
                if (o)
                    for (var u = i.length; u--; )
                        o[u] = $t(i[u](a, s), r);
                if ($t(c, r),
                l) {
                    if (l.constructor === l)
                        throw xi("isecfn", r);
                    if (l === Ei || l === Ci || l === ki)
                        throw xi("isecff", r)
                }
                return c = l.apply ? l.apply(c, o) : l(o[0], o[1], o[2], o[3], o[4]),
                o && (o.length = 0),
                $t(c, r)
            }
        },
        arrayDeclaration: function() {
            var e = [];
            if ("]" !== this.peekToken().text)
                do {
                    if (this.peek("]"))
                        break;
                    e.push(this.expression())
                } while (this.expect(","));return this.consume("]"),
            u(function(t, n) {
                for (var i = [], r = 0, o = e.length; o > r; r++)
                    i.push(e[r](t, n));
                return i
            }
            , {
                literal: !0,
                constant: e.every(wt),
                inputs: e
            })
        },
        object: function() {
            var e = []
              , t = [];
            if ("}" !== this.peekToken().text)
                do {
                    if (this.peek("}"))
                        break;
                    var n = this.consume();
                    n.constant ? e.push(n.value) : n.identifier ? e.push(n.text) : this.throwError("invalid key", n),
                    this.consume(":"),
                    t.push(this.expression())
                } while (this.expect(","));return this.consume("}"),
            u(function(n, i) {
                for (var r = {}, o = 0, a = t.length; a > o; o++)
                    r[e[o]] = t[o](n, i);
                return r
            }
            , {
                literal: !0,
                constant: t.every(wt),
                inputs: t
            })
        }
    };
    var Li = ie()
      , Oi = ie()
      , Vi = Object.prototype.valueOf
      , Ni = i("$sce")
      , Bi = {
        HTML: "html",
        CSS: "css",
        URL: "url",
        RESOURCE_URL: "resourceUrl",
        JS: "js"
    }
      , fi = i("$compile")
      , Ri = t.createElement("a")
      , Hi = zt(e.location.href);
    qt.$inject = ["$provide"],
    Yt.$inject = ["$locale"],
    Xt.$inject = ["$locale"];
    var zi = "."
      , Fi = {
        yyyy: Jt("FullYear", 4),
        yy: Jt("FullYear", 2, 0, !0),
        y: Jt("FullYear", 1),
        MMMM: Qt("Month"),
        MMM: Qt("Month", !0),
        MM: Jt("Month", 2, 1),
        M: Jt("Month", 1, 1),
        dd: Jt("Date", 2),
        d: Jt("Date", 1),
        HH: Jt("Hours", 2),
        H: Jt("Hours", 1),
        hh: Jt("Hours", 2, -12),
        h: Jt("Hours", 1, -12),
        mm: Jt("Minutes", 2),
        m: Jt("Minutes", 1),
        ss: Jt("Seconds", 2),
        s: Jt("Seconds", 1),
        sss: Jt("Milliseconds", 3),
        EEEE: Qt("Day"),
        EEE: Qt("Day", !0),
        a: function(e, t) {
            return 12 > e.getHours() ? t.AMPMS[0] : t.AMPMS[1]
        },
        Z: function(e) {
            return e = -1 * e.getTimezoneOffset(),
            e = (e >= 0 ? "+" : "") + (Zt(Math[e > 0 ? "floor" : "ceil"](e / 60), 2) + Zt(Math.abs(e % 60), 2))
        },
        ww: tn(2),
        w: tn(1)
    }
      , Ui = /((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/
      , qi = /^\-?\d+$/;
    nn.$inject = ["$locale"];
    var Gi = m(Sn)
      , ji = m(xn);
    an.$inject = ["$parse"];
    var Wi = m({
        restrict: "E",
        compile: function(e, t) {
            return t.href || t.xlinkHref || t.name ? void 0 : function(e, t) {
                if ("a" === t[0].nodeName.toLowerCase()) {
                    var n = "[object SVGAnimatedString]" === An.call(t.prop("href")) ? "xlink:href" : "href";
                    t.on("click", function(e) {
                        t.attr(n) || e.preventDefault()
                    }
                    )
                }
            }
        }
    })
      , Yi = {};
    o(ni, function(e, t) {
        if ("multiple" != e) {
            var n = He("ng-" + t);
            Yi[n] = function() {
                return {
                    restrict: "A",
                    priority: 100,
                    link: function(e, i, r) {
                        e.$watch(r[n], function(e) {
                            r.$set(t, !!e)
                        }
                        )
                    }
                }
            }
        }
    }
    ),
    o(ri, function(e, t) {
        Yi[t] = function() {
            return {
                priority: 100,
                link: function(e, n, i) {
                    return "ngPattern" === t && "/" == i.ngPattern.charAt(0) && (n = i.ngPattern.match(bn)) ? void i.$set("ngPattern", new RegExp(n[1],n[2])) : void e.$watch(i[t], function(e) {
                        i.$set(t, e)
                    }
                    )
                }
            }
        }
    }
    ),
    o(["src", "srcset", "href"], function(e) {
        var t = He("ng-" + e);
        Yi[t] = function() {
            return {
                priority: 99,
                link: function(n, i, r) {
                    var o = e
                      , a = e;
                    "href" === e && "[object SVGAnimatedString]" === An.call(i.prop("href")) && (a = "xlinkHref",
                    r.$attr[a] = "xlink:href",
                    o = null ),
                    r.$observe(t, function(t) {
                        t ? (r.$set(a, t),
                        $n && o && i.prop(o, r[a])) : "href" === e && r.$set(a, null )
                    }
                    )
                }
            }
        }
    }
    );
    var Xi = {
        $addControl: h,
        $$renameControl: function(e, t) {
            e.$name = t
        },
        $removeControl: h,
        $setValidity: h,
        $setDirty: h,
        $setPristine: h,
        $setSubmitted: h
    };
    cn.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
    var Ki = function(e) {
        return ["$timeout", function(t) {
            return {
                name: "form",
                restrict: e ? "EAC" : "E",
                controller: cn,
                compile: function(e) {
                    return e.addClass(Ir).addClass(kr),
                    {
                        pre: function(e, i, r, o) {
                            if (!("action" in r)) {
                                var a = function(t) {
                                    e.$apply(function() {
                                        o.$commitViewValue(),
                                        o.$setSubmitted()
                                    }
                                    ),
                                    t.preventDefault()
                                }
                                ;
                                i[0].addEventListener("submit", a, !1),
                                i.on("$destroy", function() {
                                    t(function() {
                                        i[0].removeEventListener("submit", a, !1)
                                    }
                                    , 0, !1)
                                }
                                )
                            }
                            var s = o.$$parentForm
                              , c = o.$name;
                            c && (yt(e, null , c, o, c),
                            r.$observe(r.name ? "name" : "ngForm", function(t) {
                                c !== t && (yt(e, null , c, n, c),
                                c = t,
                                yt(e, null , c, o, c),
                                s.$$renameControl(o, c))
                            }
                            )),
                            i.on("$destroy", function() {
                                s.$removeControl(o),
                                c && yt(e, null , c, n, c),
                                u(o, Xi)
                            }
                            )
                        }
                    }
                }
            }
        }
        ]
    }
      , Zi = Ki()
      , Ji = Ki(!0)
      , Qi = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/
      , er = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/
      , tr = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i
      , nr = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/
      , ir = /^(\d{4})-(\d{2})-(\d{2})$/
      , rr = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/
      , or = /^(\d{4})-W(\d\d)$/
      , ar = /^(\d{4})-(\d\d)$/
      , sr = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/
      , cr = {
        text: function(e, t, n, i, r, o) {
            un(e, t, n, i, r, o),
            ln(i)
        },
        date: fn("date", ir, dn(ir, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
        "datetime-local": fn("datetimelocal", rr, dn(rr, "yyyy MM dd HH mm ss sss".split(" ")), "yyyy-MM-ddTHH:mm:ss.sss"),
        time: fn("time", sr, dn(sr, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
        week: fn("week", or, function(e, t) {
            if (_(e))
                return e;
            if (w(e)) {
                or.lastIndex = 0;
                var n = or.exec(e);
                if (n) {
                    var i = +n[1]
                      , r = +n[2]
                      , o = n = 0
                      , a = 0
                      , s = 0
                      , c = en(i)
                      , r = 7 * (r - 1);
                    return t && (n = t.getHours(),
                    o = t.getMinutes(),
                    a = t.getSeconds(),
                    s = t.getMilliseconds()),
                    new Date(i,0,c.getDate() + r,n,o,a,s)
                }
            }
            return NaN
        }
        , "yyyy-Www"),
        month: fn("month", ar, dn(ar, ["yyyy", "MM"]), "yyyy-MM"),
        number: function(e, t, i, r, o, a) {
            if (hn(e, t, i, r),
            un(e, t, i, r, o, a),
            r.$$parserName = "number",
            r.$parsers.push(function(e) {
                return r.$isEmpty(e) ? null  : nr.test(e) ? parseFloat(e) : n
            }
            ),
            r.$formatters.push(function(e) {
                if (!r.$isEmpty(e)) {
                    if (!y(e))
                        throw Pr("numfmt", e);
                    e = e.toString()
                }
                return e
            }
            ),
            i.min || i.ngMin) {
                var s;
                r.$validators.min = function(e) {
                    return r.$isEmpty(e) || v(s) || e >= s
                }
                ,
                i.$observe("min", function(e) {
                    g(e) && !y(e) && (e = parseFloat(e, 10)),
                    s = y(e) && !isNaN(e) ? e : n,
                    r.$validate()
                }
                )
            }
            if (i.max || i.ngMax) {
                var c;
                r.$validators.max = function(e) {
                    return r.$isEmpty(e) || v(c) || c >= e
                }
                ,
                i.$observe("max", function(e) {
                    g(e) && !y(e) && (e = parseFloat(e, 10)),
                    c = y(e) && !isNaN(e) ? e : n,
                    r.$validate()
                }
                )
            }
        },
        url: function(e, t, n, i, r, o) {
            un(e, t, n, i, r, o),
            ln(i),
            i.$$parserName = "url",
            i.$validators.url = function(e, t) {
                var n = e || t;
                return i.$isEmpty(n) || er.test(n)
            }
        },
        email: function(e, t, n, i, r, o) {
            un(e, t, n, i, r, o),
            ln(i),
            i.$$parserName = "email",
            i.$validators.email = function(e, t) {
                var n = e || t;
                return i.$isEmpty(n) || tr.test(n)
            }
        },
        radio: function(e, t, n, i) {
            v(n.name) && t.attr("name", ++Mn),
            t.on("click", function(e) {
                t[0].checked && i.$setViewValue(n.value, e && e.type)
            }
            ),
            i.$render = function() {
                t[0].checked = n.value == i.$viewValue
            }
            ,
            n.$observe("value", i.$render)
        },
        checkbox: function(e, t, n, i, r, o, a, s) {
            var c = pn(s, e, "ngTrueValue", n.ngTrueValue, !0)
              , l = pn(s, e, "ngFalseValue", n.ngFalseValue, !1);
            t.on("click", function(e) {
                i.$setViewValue(t[0].checked, e && e.type)
            }
            ),
            i.$render = function() {
                t[0].checked = i.$viewValue
            }
            ,
            i.$isEmpty = function(e) {
                return !1 === e
            }
            ,
            i.$formatters.push(function(e) {
                return P(e, c)
            }
            ),
            i.$parsers.push(function(e) {
                return e ? c : l
            }
            )
        },
        hidden: h,
        button: h,
        submit: h,
        reset: h,
        file: h
    }
      , lr = ["$browser", "$sniffer", "$filter", "$parse", function(e, t, n, i) {
        return {
            restrict: "E",
            require: ["?ngModel"],
            link: {
                pre: function(r, o, a, s) {
                    s[0] && (cr[Sn(a.type)] || cr.text)(r, o, a, s[0], t, e, n, i)
                }
            }
        }
    }
    ]
      , ur = /^(true|false|\d+)$/
      , dr = function() {
        return {
            restrict: "A",
            priority: 100,
            compile: function(e, t) {
                return ur.test(t.ngValue) ? function(e, t, n) {
                    n.$set("value", e.$eval(n.ngValue))
                }
                 : function(e, t, n) {
                    e.$watch(n.ngValue, function(e) {
                        n.$set("value", e)
                    }
                    )
                }
            }
        }
    }
      , fr = ["$compile", function(e) {
        return {
            restrict: "AC",
            compile: function(t) {
                return e.$$addBindingClass(t),
                function(t, i, r) {
                    e.$$addBindingInfo(i, r.ngBind),
                    i = i[0],
                    t.$watch(r.ngBind, function(e) {
                        i.textContent = e === n ? "" : e
                    }
                    )
                }
            }
        }
    }
    ]
      , hr = ["$interpolate", "$compile", function(e, t) {
        return {
            compile: function(i) {
                return t.$$addBindingClass(i),
                function(i, r, o) {
                    i = e(r.attr(o.$attr.ngBindTemplate)),
                    t.$$addBindingInfo(r, i.expressions),
                    r = r[0],
                    o.$observe("ngBindTemplate", function(e) {
                        r.textContent = e === n ? "" : e
                    }
                    )
                }
            }
        }
    }
    ]
      , pr = ["$sce", "$parse", "$compile", function(e, t, n) {
        return {
            restrict: "A",
            compile: function(i, r) {
                var o = t(r.ngBindHtml)
                  , a = t(r.ngBindHtml, function(e) {
                    return (e || "").toString()
                }
                );
                return n.$$addBindingClass(i),
                function(t, i, r) {
                    n.$$addBindingInfo(i, r.ngBindHtml),
                    t.$watch(a, function() {
                        i.html(e.getTrustedHtml(o(t)) || "")
                    }
                    )
                }
            }
        }
    }
    ]
      , mr = m({
        restrict: "A",
        require: "ngModel",
        link: function(e, t, n, i) {
            i.$viewChangeListeners.push(function() {
                e.$eval(n.ngChange)
            }
            )
        }
    })
      , vr = mn("", !0)
      , gr = mn("Odd", 0)
      , $r = mn("Even", 1)
      , wr = sn({
        compile: function(e, t) {
            t.$set("ngCloak", n),
            e.removeClass("ng-cloak")
        }
    })
      , yr = [function() {
        return {
            restrict: "A",
            scope: !0,
            controller: "@",
            priority: 500
        }
    }
    ]
      , _r = {}
      , br = {
        blur: !0,
        focus: !0
    };
    o("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(e) {
        var t = He("ng-" + e);
        _r[t] = ["$parse", "$rootScope", function(n, i) {
            return {
                restrict: "A",
                compile: function(r, o) {
                    var a = n(o[t], null , !0);
                    return function(t, n) {
                        n.on(e, function(n) {
                            var r = function() {
                                a(t, {
                                    $event: n
                                })
                            }
                            ;
                            br[e] && i.$$phase ? t.$evalAsync(r) : t.$apply(r)
                        }
                        )
                    }
                }
            }
        }
        ]
    }
    );
    var Sr = ["$animate", function(e) {
        return {
            multiElement: !0,
            transclude: "element",
            priority: 600,
            terminal: !0,
            restrict: "A",
            $$tlb: !0,
            link: function(n, i, r, o, a) {
                var s, c, l;
                n.$watch(r.ngIf, function(n) {
                    n ? c || a(function(n, o) {
                        c = o,
                        n[n.length++] = t.createComment(" end ngIf: " + r.ngIf + " "),
                        s = {
                            clone: n
                        },
                        e.enter(n, i.parent(), i)
                    }
                    ) : (l && (l.remove(),
                    l = null ),
                    c && (c.$destroy(),
                    c = null ),
                    s && (l = ne(s.clone),
                    e.leave(l).then(function() {
                        l = null
                    }
                    ),
                    s = null ))
                }
                )
            }
        }
    }
    ]
      , Tr = ["$templateRequest", "$anchorScroll", "$animate", "$sce", function(e, t, n, i) {
        return {
            restrict: "ECA",
            priority: 400,
            terminal: !0,
            transclude: "element",
            controller: Dn.noop,
            compile: function(r, o) {
                var a = o.ngInclude || o.src
                  , s = o.onload || ""
                  , c = o.autoscroll;
                return function(r, o, l, u, d) {
                    var f, h, p, m = 0, v = function() {
                        h && (h.remove(),
                        h = null ),
                        f && (f.$destroy(),
                        f = null ),
                        p && (n.leave(p).then(function() {
                            h = null
                        }
                        ),
                        h = p,
                        p = null )
                    }
                    ;
                    r.$watch(i.parseAsResourceUrl(a), function(i) {
                        var a = function() {
                            !g(c) || c && !r.$eval(c) || t()
                        }
                          , l = ++m;
                        i ? (e(i, !0).then(function(e) {
                            if (l === m) {
                                var t = r.$new();
                                u.template = e,
                                e = d(t, function(e) {
                                    v(),
                                    n.enter(e, null , o).then(a)
                                }
                                ),
                                f = t,
                                p = e,
                                f.$emit("$includeContentLoaded", i),
                                r.$eval(s)
                            }
                        }
                        , function() {
                            l === m && (v(),
                            r.$emit("$includeContentError", i))
                        }
                        ),
                        r.$emit("$includeContentRequested", i)) : (v(),
                        u.template = null )
                    }
                    )
                }
            }
        }
    }
    ]
      , xr = ["$compile", function(e) {
        return {
            restrict: "ECA",
            priority: -400,
            require: "ngInclude",
            link: function(n, i, r, o) {
                /SVG/.test(i[0].toString()) ? (i.empty(),
                e(ce(o.template, t).childNodes)(n, function(e) {
                    i.append(e)
                }
                , {
                    futureParentElement: i
                })) : (i.html(o.template),
                e(i.contents())(n))
            }
        }
    }
    ]
      , Er = sn({
        priority: 450,
        compile: function() {
            return {
                pre: function(e, t, n) {
                    e.$eval(n.ngInit)
                }
            }
        }
    })
      , Cr = function() {
        return {
            restrict: "A",
            priority: 100,
            require: "ngModel",
            link: function(e, t, i, r) {
                var a = t.attr(i.$attr.ngList) || ", "
                  , s = "false" !== i.ngTrim
                  , c = s ? On(a) : a;
                r.$parsers.push(function(e) {
                    if (!v(e)) {
                        var t = [];
                        return e && o(e.split(c), function(e) {
                            e && t.push(s ? On(e) : e)
                        }
                        ),
                        t
                    }
                }
                ),
                r.$formatters.push(function(e) {
                    return Ln(e) ? e.join(a) : n
                }
                ),
                r.$isEmpty = function(e) {
                    return !e || !e.length
                }
            }
        }
    }
      , kr = "ng-valid"
      , Ar = "ng-invalid"
      , Ir = "ng-pristine"
      , Dr = "ng-dirty"
      , Mr = "ng-pending"
      , Pr = new i("ngModel")
      , Lr = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function(e, t, i, r, a, s, c, l, u, d) {
        this.$modelValue = this.$viewValue = Number.NaN,
        this.$$rawModelValue = n,
        this.$validators = {},
        this.$asyncValidators = {},
        this.$parsers = [],
        this.$formatters = [],
        this.$viewChangeListeners = [],
        this.$untouched = !0,
        this.$touched = !1,
        this.$pristine = !0,
        this.$dirty = !1,
        this.$valid = !0,
        this.$invalid = !1,
        this.$error = {},
        this.$$success = {},
        this.$pending = n,
        this.$name = d(i.name || "", !1)(e);
        var f = a(i.ngModel)
          , p = f.assign
          , m = f
          , $ = p
          , w = null
          , _ = this;
        this.$$setOptions = function(e) {
            if ((_.$options = e) && e.getterSetter) {
                var t = a(i.ngModel + "()")
                  , n = a(i.ngModel + "($$$p)");
                m = function(e) {
                    var n = f(e);
                    return b(n) && (n = t(e)),
                    n
                }
                ,
                $ = function(e, t) {
                    b(f(e)) ? n(e, {
                        $$$p: _.$modelValue
                    }) : p(e, _.$modelValue)
                }
            } else if (!f.assign)
                throw Pr("nonassign", i.ngModel, R(r))
        }
        ,
        this.$render = h,
        this.$isEmpty = function(e) {
            return v(e) || "" === e || null  === e || e !== e
        }
        ;
        var S = r.inheritedData("$formController") || Xi
          , T = 0;
        vn({
            ctrl: this,
            $element: r,
            set: function(e, t) {
                e[t] = !0
            },
            unset: function(e, t) {
                delete e[t]
            },
            parentForm: S,
            $animate: s
        }),
        this.$setPristine = function() {
            _.$dirty = !1,
            _.$pristine = !0,
            s.removeClass(r, Dr),
            s.addClass(r, Ir)
        }
        ,
        this.$setDirty = function() {
            _.$dirty = !0,
            _.$pristine = !1,
            s.removeClass(r, Ir),
            s.addClass(r, Dr),
            S.$setDirty()
        }
        ,
        this.$setUntouched = function() {
            _.$touched = !1,
            _.$untouched = !0,
            s.setClass(r, "ng-untouched", "ng-touched")
        }
        ,
        this.$setTouched = function() {
            _.$touched = !0,
            _.$untouched = !1,
            s.setClass(r, "ng-touched", "ng-untouched")
        }
        ,
        this.$rollbackViewValue = function() {
            c.cancel(w),
            _.$viewValue = _.$$lastCommittedViewValue,
            _.$render()
        }
        ,
        this.$validate = function() {
            if (!y(_.$modelValue) || !isNaN(_.$modelValue)) {
                var e = _.$$rawModelValue
                  , t = _.$valid
                  , i = _.$modelValue
                  , r = _.$options && _.$options.allowInvalid;
                _.$$runValidators(_.$error[_.$$parserName || "parse"] ? !1 : n, e, _.$$lastCommittedViewValue, function(o) {
                    r || t === o || (_.$modelValue = o ? e : n,
                    _.$modelValue !== i && _.$$writeModelToScope())
                }
                )
            }
        }
        ,
        this.$$runValidators = function(e, t, i, r) {
            function a() {
                var e = !0;
                return o(_.$validators, function(n, r) {
                    var o = n(t, i);
                    e = e && o,
                    c(r, o)
                }
                ),
                e ? !0 : (o(_.$asyncValidators, function(e, t) {
                    c(t, null )
                }
                ),
                !1)
            }
            function s() {
                var e = []
                  , r = !0;
                o(_.$asyncValidators, function(o, a) {
                    var s = o(t, i);
                    if (!s || !b(s.then))
                        throw Pr("$asyncValidators", s);
                    c(a, n),
                    e.push(s.then(function() {
                        c(a, !0)
                    }
                    , function(e) {
                        r = !1,
                        c(a, !1)
                    }
                    ))
                }
                ),
                e.length ? u.all(e).then(function() {
                    l(r)
                }
                , h) : l(!0)
            }
            function c(e, t) {
                d === T && _.$setValidity(e, t)
            }
            function l(e) {
                d === T && r(e)
            }
            T++;
            var d = T;
            (function(e) {
                var t = _.$$parserName || "parse";
                if (e === n)
                    c(t, null );
                else if (c(t, e),
                !e)
                    return o(_.$validators, function(e, t) {
                        c(t, null )
                    }
                    ),
                    o(_.$asyncValidators, function(e, t) {
                        c(t, null )
                    }
                    ),
                    !1;
                return !0
            }
            )(e) && a() ? s() : l(!1)
        }
        ,
        this.$commitViewValue = function() {
            var e = _.$viewValue;
            c.cancel(w),
            (_.$$lastCommittedViewValue !== e || "" === e && _.$$hasNativeValidators) && (_.$$lastCommittedViewValue = e,
            _.$pristine && this.$setDirty(),
            this.$$parseAndValidate())
        }
        ,
        this.$$parseAndValidate = function() {
            var t = _.$$lastCommittedViewValue
              , i = v(t) ? n : !0;
            if (i)
                for (var r = 0; r < _.$parsers.length; r++)
                    if (t = _.$parsers[r](t),
                    v(t)) {
                        i = !1;
                        break
                    }
            y(_.$modelValue) && isNaN(_.$modelValue) && (_.$modelValue = m(e));
            var o = _.$modelValue
              , a = _.$options && _.$options.allowInvalid;
            _.$$rawModelValue = t,
            a && (_.$modelValue = t,
            _.$modelValue !== o && _.$$writeModelToScope()),
            _.$$runValidators(i, t, _.$$lastCommittedViewValue, function(e) {
                a || (_.$modelValue = e ? t : n,
                _.$modelValue !== o && _.$$writeModelToScope())
            }
            )
        }
        ,
        this.$$writeModelToScope = function() {
            $(e, _.$modelValue),
            o(_.$viewChangeListeners, function(e) {
                try {
                    e()
                } catch (n) {
                    t(n)
                }
            }
            )
        }
        ,
        this.$setViewValue = function(e, t) {
            _.$viewValue = e,
            _.$options && !_.$options.updateOnDefault || _.$$debounceViewValueCommit(t)
        }
        ,
        this.$$debounceViewValueCommit = function(t) {
            var n = 0
              , i = _.$options;
            i && g(i.debounce) && (i = i.debounce,
            y(i) ? n = i : y(i[t]) ? n = i[t] : y(i["default"]) && (n = i["default"])),
            c.cancel(w),
            n ? w = c(function() {
                _.$commitViewValue()
            }
            , n) : l.$$phase ? _.$commitViewValue() : e.$apply(function() {
                _.$commitViewValue()
            }
            )
        }
        ,
        e.$watch(function() {
            var t = m(e);
            if (t !== _.$modelValue) {
                _.$modelValue = _.$$rawModelValue = t;
                for (var i = _.$formatters, r = i.length, o = t; r--; )
                    o = i[r](o);
                _.$viewValue !== o && (_.$viewValue = _.$$lastCommittedViewValue = o,
                _.$render(),
                _.$$runValidators(n, t, o, h))
            }
            return t
        }
        )
    }
    ]
      , Or = ["$rootScope", function(e) {
        return {
            restrict: "A",
            require: ["ngModel", "^?form", "^?ngModelOptions"],
            controller: Lr,
            priority: 1,
            compile: function(t) {
                return t.addClass(Ir).addClass("ng-untouched").addClass(kr),
                {
                    pre: function(e, t, n, i) {
                        var r = i[0]
                          , o = i[1] || Xi;
                        r.$$setOptions(i[2] && i[2].$options),
                        o.$addControl(r),
                        n.$observe("name", function(e) {
                            r.$name !== e && o.$$renameControl(r, e)
                        }
                        ),
                        e.$on("$destroy", function() {
                            o.$removeControl(r)
                        }
                        )
                    },
                    post: function(t, n, i, r) {
                        var o = r[0];
                        o.$options && o.$options.updateOn && n.on(o.$options.updateOn, function(e) {
                            o.$$debounceViewValueCommit(e && e.type)
                        }
                        ),
                        n.on("blur", function(n) {
                            o.$touched || (e.$$phase ? t.$evalAsync(o.$setTouched) : t.$apply(o.$setTouched))
                        }
                        )
                    }
                }
            }
        }
    }
    ]
      , Vr = /(\s+|^)default(\s+|$)/
      , Nr = function() {
        return {
            restrict: "A",
            controller: ["$scope", "$attrs", function(e, t) {
                var i = this;
                this.$options = e.$eval(t.ngModelOptions),
                this.$options.updateOn !== n ? (this.$options.updateOnDefault = !1,
                this.$options.updateOn = On(this.$options.updateOn.replace(Vr, function() {
                    return i.$options.updateOnDefault = !0,
                    " "
                }
                ))) : this.$options.updateOnDefault = !0
            }
            ]
        }
    }
      , Br = sn({
        terminal: !0,
        priority: 1e3
    })
      , Rr = ["$locale", "$interpolate", function(e, t) {
        var n = /{}/g
          , i = /^when(Minus)?(.+)$/;
        return {
            restrict: "EA",
            link: function(r, a, s) {
                function c(e) {
                    a.text(e || "")
                }
                var l, u = s.count, d = s.$attr.when && a.attr(s.$attr.when), f = s.offset || 0, h = r.$eval(d) || {}, p = {}, d = t.startSymbol(), m = t.endSymbol(), v = d + u + "-" + f + m, g = Dn.noop;
                o(s, function(e, t) {
                    var n = i.exec(t);
                    n && (n = (n[1] ? "-" : "") + Sn(n[2]),
                    h[n] = a.attr(s.$attr[t]))
                }
                ),
                o(h, function(e, i) {
                    p[i] = t(e.replace(n, v))
                }
                ),
                r.$watch(u, function(t) {
                    t = parseFloat(t);
                    var n = isNaN(t);
                    n || t in h || (t = e.pluralCat(t - f)),
                    t === l || n && isNaN(l) || (g(),
                    g = r.$watch(p[t], c),
                    l = t)
                }
                )
            }
        }
    }
    ]
      , Hr = ["$parse", "$animate", function(e, a) {
        var s = i("ngRepeat")
          , c = function(e, t, n, i, r, o, a) {
            e[n] = i,
            r && (e[r] = o),
            e.$index = t,
            e.$first = 0 === t,
            e.$last = t === a - 1,
            e.$middle = !(e.$first || e.$last),
            e.$odd = !(e.$even = 0 === (1 & t))
        }
        ;
        return {
            restrict: "A",
            multiElement: !0,
            transclude: "element",
            priority: 1e3,
            terminal: !0,
            $$tlb: !0,
            compile: function(i, l) {
                var u = l.ngRepeat
                  , d = t.createComment(" end ngRepeat: " + u + " ")
                  , f = u.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                if (!f)
                    throw s("iexp", u);
                var h = f[1]
                  , p = f[2]
                  , m = f[3]
                  , v = f[4]
                  , f = h.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);
                if (!f)
                    throw s("iidexp", h);
                var g = f[3] || f[1]
                  , $ = f[2];
                if (m && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(m) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(m)))
                    throw s("badident", m);
                var w, y, _, b, S = {
                    $id: Ae
                };
                return v ? w = e(v) : (_ = function(e, t) {
                    return Ae(t)
                }
                ,
                b = function(e) {
                    return e
                }
                ),
                function(e, t, i, l, f) {
                    w && (y = function(t, n, i) {
                        return $ && (S[$] = t),
                        S[g] = n,
                        S.$index = i,
                        w(e, S)
                    }
                    );
                    var h = ie();
                    e.$watchCollection(p, function(i) {
                        var l, p, v, w, S, T, x, E, C, k, A = t[0], I = ie();
                        if (m && (e[m] = i),
                        r(i))
                            E = i,
                            p = y || _;
                        else {
                            p = y || b,
                            E = [];
                            for (k in i)
                                i.hasOwnProperty(k) && "$" != k.charAt(0) && E.push(k);
                            E.sort()
                        }
                        for (w = E.length,
                        k = Array(w),
                        l = 0; w > l; l++)
                            if (S = i === E ? l : E[l],
                            T = i[S],
                            x = p(S, T, l),
                            h[x])
                                C = h[x],
                                delete h[x],
                                I[x] = C,
                                k[l] = C;
                            else {
                                if (I[x])
                                    throw o(k, function(e) {
                                        e && e.scope && (h[e.id] = e)
                                    }
                                    ),
                                    s("dupes", u, x, T);
                                k[l] = {
                                    id: x,
                                    scope: n,
                                    clone: n
                                },
                                I[x] = !0
                            }
                        for (v in h) {
                            if (C = h[v],
                            x = ne(C.clone),
                            a.leave(x),
                            x[0].parentNode)
                                for (l = 0,
                                p = x.length; p > l; l++)
                                    x[l].$$NG_REMOVED = !0;
                            C.scope.$destroy()
                        }
                        for (l = 0; w > l; l++)
                            if (S = i === E ? l : E[l],
                            T = i[S],
                            C = k[l],
                            C.scope) {
                                v = A;
                                do
                                    v = v.nextSibling;
                                while (v && v.$$NG_REMOVED);C.clone[0] != v && a.move(ne(C.clone), null , wn(A)),
                                A = C.clone[C.clone.length - 1],
                                c(C.scope, l, g, T, $, S, w)
                            } else
                                f(function(e, t) {
                                    C.scope = t;
                                    var n = d.cloneNode(!1);
                                    e[e.length++] = n,
                                    a.enter(e, null , wn(A)),
                                    A = n,
                                    C.clone = e,
                                    I[C.id] = C,
                                    c(C.scope, l, g, T, $, S, w)
                                }
                                );
                        h = I
                    }
                    )
                }
            }
        }
    }
    ]
      , zr = ["$animate", function(e) {
        return {
            restrict: "A",
            multiElement: !0,
            link: function(t, n, i) {
                t.$watch(i.ngShow, function(t) {
                    e[t ? "removeClass" : "addClass"](n, "ng-hide", {
                        tempClasses: "ng-hide-animate"
                    })
                }
                )
            }
        }
    }
    ]
      , Fr = ["$animate", function(e) {
        return {
            restrict: "A",
            multiElement: !0,
            link: function(t, n, i) {
                t.$watch(i.ngHide, function(t) {
                    e[t ? "addClass" : "removeClass"](n, "ng-hide", {
                        tempClasses: "ng-hide-animate"
                    })
                }
                )
            }
        }
    }
    ]
      , Ur = sn(function(e, t, n) {
        e.$watchCollection(n.ngStyle, function(e, n) {
            n && e !== n && o(n, function(e, n) {
                t.css(n, "")
            }
            ),
            e && t.css(e)
        }
        )
    }
    )
      , qr = ["$animate", function(e) {
        return {
            restrict: "EA",
            require: "ngSwitch",
            controller: ["$scope", function() {
                this.cases = {}
            }
            ],
            link: function(n, i, r, a) {
                var s = []
                  , c = []
                  , l = []
                  , u = []
                  , d = function(e, t) {
                    return function() {
                        e.splice(t, 1)
                    }
                }
                ;
                n.$watch(r.ngSwitch || r.on, function(n) {
                    var i, r;
                    for (i = 0,
                    r = l.length; r > i; ++i)
                        e.cancel(l[i]);
                    for (i = l.length = 0,
                    r = u.length; r > i; ++i) {
                        var f = ne(c[i].clone);
                        u[i].$destroy(),
                        (l[i] = e.leave(f)).then(d(l, i))
                    }
                    c.length = 0,
                    u.length = 0,
                    (s = a.cases["!" + n] || a.cases["?"]) && o(s, function(n) {
                        n.transclude(function(i, r) {
                            u.push(r);
                            var o = n.element;
                            i[i.length++] = t.createComment(" end ngSwitchWhen: "),
                            c.push({
                                clone: i
                            }),
                            e.enter(i, o.parent(), o)
                        }
                        )
                    }
                    )
                }
                )
            }
        }
    }
    ]
      , Gr = sn({
        transclude: "element",
        priority: 1200,
        require: "^ngSwitch",
        multiElement: !0,
        link: function(e, t, n, i, r) {
            i.cases["!" + n.ngSwitchWhen] = i.cases["!" + n.ngSwitchWhen] || [],
            i.cases["!" + n.ngSwitchWhen].push({
                transclude: r,
                element: t
            })
        }
    })
      , jr = sn({
        transclude: "element",
        priority: 1200,
        require: "^ngSwitch",
        multiElement: !0,
        link: function(e, t, n, i, r) {
            i.cases["?"] = i.cases["?"] || [],
            i.cases["?"].push({
                transclude: r,
                element: t
            })
        }
    })
      , Wr = sn({
        restrict: "EAC",
        link: function(e, t, n, r, o) {
            if (!o)
                throw i("ngTransclude")("orphan", R(t));
            o(function(e) {
                t.empty(),
                t.append(e)
            }
            )
        }
    })
      , Yr = ["$templateCache", function(e) {
        return {
            restrict: "E",
            terminal: !0,
            compile: function(t, n) {
                "text/ng-template" == n.type && e.put(n.id, t[0].text)
            }
        }
    }
    ]
      , Xr = i("ngOptions")
      , Kr = m({
        restrict: "A",
        terminal: !0
    })
      , Zr = ["$compile", "$parse", function(e, i) {
        var r = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/
          , a = {
            $setViewValue: h
        };
        return {
            restrict: "E",
            require: ["select", "?ngModel"],
            controller: ["$element", "$scope", "$attrs", function(e, t, n) {
                var i, r = this, o = {}, s = a;
                r.databound = n.ngModel,
                r.init = function(e, t, n) {
                    s = e,
                    i = n
                }
                ,
                r.addOption = function(t, n) {
                    ee(t, '"option value"'),
                    o[t] = !0,
                    s.$viewValue == t && (e.val(t),
                    i.parent() && i.remove()),
                    n && n[0].hasAttribute("selected") && (n[0].selected = !0)
                }
                ,
                r.removeOption = function(e) {
                    this.hasOption(e) && (delete o[e],
                    s.$viewValue === e && this.renderUnknownOption(e))
                }
                ,
                r.renderUnknownOption = function(t) {
                    t = "? " + Ae(t) + " ?",
                    i.val(t),
                    e.prepend(i),
                    e.val(t),
                    i.prop("selected", !0)
                }
                ,
                r.hasOption = function(e) {
                    return o.hasOwnProperty(e)
                }
                ,
                t.$on("$destroy", function() {
                    r.renderUnknownOption = h
                }
                )
            }
            ],
            link: function(a, s, c, l) {
                function u(e, t, n, i) {
                    n.$render = function() {
                        var e = n.$viewValue;
                        i.hasOption(e) ? (S.parent() && S.remove(),
                        t.val(e),
                        "" === e && p.prop("selected", !0)) : v(e) && p ? t.val("") : i.renderUnknownOption(e)
                    }
                    ,
                    t.on("change", function() {
                        e.$apply(function() {
                            S.parent() && S.remove(),
                            n.$setViewValue(t.val())
                        }
                        )
                    }
                    )
                }
                function d(e, t, n) {
                    var i;
                    n.$render = function() {
                        var e = new Ie(n.$viewValue);
                        o(t.find("option"), function(t) {
                            t.selected = g(e.get(t.value))
                        }
                        )
                    }
                    ,
                    e.$watch(function() {
                        P(i, n.$viewValue) || (i = M(n.$viewValue),
                        n.$render())
                    }
                    ),
                    t.on("change", function() {
                        e.$apply(function() {
                            var e = [];
                            o(t.find("option"), function(t) {
                                t.selected && e.push(t.value)
                            }
                            ),
                            n.$setViewValue(e)
                        }
                        )
                    }
                    )
                }
                function f(t, a, s) {
                    function c(e, n, i) {
                        return P[S] = i,
                        E && (P[E] = n),
                        e(t, P)
                    }
                    function l(e) {
                        var t;
                        if (m)
                            if (I && Ln(e)) {
                                t = new Ie([]);
                                for (var n = 0; n < e.length; n++)
                                    t.put(c(I, null , e[n]), !0)
                            } else
                                t = new Ie(e);
                        else
                            I && (e = c(I, null , e));
                        return function(n, i) {
                            var r;
                            return r = I ? I : x ? x : k,
                            m ? g(t.remove(c(r, n, i))) : e === c(r, n, i)
                        }
                    }
                    function u() {
                        y || (t.$$postDigest(f),
                        y = !0)
                    }
                    function d(e, t, n) {
                        e[t] = e[t] || 0,
                        e[t] += n ? 1 : -1
                    }
                    function f() {
                        y = !1;
                        var e, n, i, r, u, f = {
                            "": []
                        }, p = [""];
                        i = s.$viewValue,
                        r = A(t) || [];
                        var $, S, T, x, k = E ? Object.keys(r).sort() : r, L = {};
                        u = l(i);
                        var O, V, N = !1;
                        for (D = {},
                        x = 0; T = k.length,
                        T > x; x++)
                            $ = x,
                            E && ($ = k[x],
                            "$" === $.charAt(0)) || (S = r[$],
                            e = c(C, $, S) || "",
                            (n = f[e]) || (n = f[e] = [],
                            p.push(e)),
                            e = u($, S),
                            N = N || e,
                            S = c(v, $, S),
                            S = g(S) ? S : "",
                            V = I ? I(t, P) : E ? k[x] : x,
                            I && (D[V] = $),
                            n.push({
                                id: V,
                                label: S,
                                selected: e
                            }));
                        for (m || (w || null  === i ? f[""].unshift({
                            id: "",
                            label: "",
                            selected: !N
                        }) : N || f[""].unshift({
                            id: "?",
                            label: "",
                            selected: !0
                        })),
                        $ = 0,
                        k = p.length; k > $; $++) {
                            for (e = p[$],
                            n = f[e],
                            M.length <= $ ? (i = {
                                element: b.clone().attr("label", e),
                                label: n.label
                            },
                            r = [i],
                            M.push(r),
                            a.append(i.element)) : (r = M[$],
                            i = r[0],
                            i.label != e && i.element.attr("label", i.label = e)),
                            N = null ,
                            x = 0,
                            T = n.length; T > x; x++)
                                e = n[x],
                                (u = r[x + 1]) ? (N = u.element,
                                u.label !== e.label && (d(L, u.label, !1),
                                d(L, e.label, !0),
                                N.text(u.label = e.label),
                                N.prop("label", u.label)),
                                u.id !== e.id && N.val(u.id = e.id),
                                N[0].selected !== e.selected && (N.prop("selected", u.selected = e.selected),
                                $n && N.prop("selected", u.selected))) : ("" === e.id && w ? O = w : (O = _.clone()).val(e.id).prop("selected", e.selected).attr("selected", e.selected).prop("label", e.label).text(e.label),
                                r.push(u = {
                                    element: O,
                                    label: e.label,
                                    id: e.id,
                                    selected: e.selected
                                }),
                                d(L, e.label, !0),
                                N ? N.after(O) : i.element.append(O),
                                N = O);
                            for (x++; r.length > x; )
                                e = r.pop(),
                                d(L, e.label, !1),
                                e.element.remove()
                        }
                        for (; M.length > $; ) {
                            for (n = M.pop(),
                            x = 1; x < n.length; ++x)
                                d(L, n[x].label, !1);
                            n[0].element.remove()
                        }
                        o(L, function(e, t) {
                            e > 0 ? h.addOption(t) : 0 > e && h.removeOption(t)
                        }
                        )
                    }
                    var p;
                    if (!(p = $.match(r)))
                        throw Xr("iexp", $, R(a));
                    var v = i(p[2] || p[1])
                      , S = p[4] || p[6]
                      , T = / as /.test(p[0]) && p[1]
                      , x = T ? i(T) : null
                      , E = p[5]
                      , C = i(p[3] || "")
                      , k = i(p[2] ? p[1] : S)
                      , A = i(p[7])
                      , I = p[8] ? i(p[8]) : null
                      , D = {}
                      , M = [[{
                        element: a,
                        label: ""
                    }]]
                      , P = {};
                    w && (e(w)(t),
                    w.removeClass("ng-scope"),
                    w.remove()),
                    a.empty(),
                    a.on("change", function() {
                        t.$apply(function() {
                            var e, i = A(t) || [];
                            if (m)
                                e = [],
                                o(a.val(), function(t) {
                                    t = I ? D[t] : t,
                                    e.push("?" === t ? n : "" === t ? null  : c(x ? x : k, t, i[t]))
                                }
                                );
                            else {
                                var r = I ? D[a.val()] : a.val();
                                e = "?" === r ? n : "" === r ? null  : c(x ? x : k, r, i[r])
                            }
                            s.$setViewValue(e),
                            f()
                        }
                        )
                    }
                    ),
                    s.$render = f,
                    t.$watchCollection(A, u),
                    t.$watchCollection(function() {
                        var e, n = A(t);
                        if (n && Ln(n)) {
                            e = Array(n.length);
                            for (var i = 0, r = n.length; r > i; i++)
                                e[i] = c(v, i, n[i])
                        } else if (n)
                            for (i in e = {},
                            n)
                                n.hasOwnProperty(i) && (e[i] = c(v, i, n[i]));
                        return e
                    }
                    , u),
                    m && t.$watchCollection(function() {
                        return s.$modelValue
                    }
                    , u)
                }
                if (l[1]) {
                    var h = l[0];
                    l = l[1];
                    var p, m = c.multiple, $ = c.ngOptions, w = !1, y = !1, _ = wn(t.createElement("option")), b = wn(t.createElement("optgroup")), S = _.clone();
                    c = 0;
                    for (var T = s.children(), x = T.length; x > c; c++)
                        if ("" === T[c].value) {
                            p = w = T.eq(c);
                            break
                        }
                    h.init(l, w, S),
                    m && (l.$isEmpty = function(e) {
                        return !e || 0 === e.length
                    }
                    ),
                    $ ? f(a, s, l) : m ? d(a, s, l) : u(a, s, l, h)
                }
            }
        }
    }
    ]
      , Jr = ["$interpolate", function(e) {
        var t = {
            addOption: h,
            removeOption: h
        };
        return {
            restrict: "E",
            priority: 100,
            compile: function(n, i) {
                if (v(i.value)) {
                    var r = e(n.text(), !0);
                    r || i.$set("value", n.text())
                }
                return function(e, n, i) {
                    var o = n.parent()
                      , a = o.data("$selectController") || o.parent().data("$selectController");
                    a && a.databound || (a = t),
                    r ? e.$watch(r, function(e, t) {
                        i.$set("value", e),
                        t !== e && a.removeOption(t),
                        a.addOption(e, n)
                    }
                    ) : a.addOption(i.value, n),
                    n.on("$destroy", function() {
                        a.removeOption(i.value)
                    }
                    )
                }
            }
        }
    }
    ]
      , Qr = m({
        restrict: "E",
        terminal: !1
    })
      , eo = function() {
        return {
            restrict: "A",
            require: "?ngModel",
            link: function(e, t, n, i) {
                i && (n.required = !0,
                i.$validators.required = function(e, t) {
                    return !n.required || !i.$isEmpty(t)
                }
                ,
                n.$observe("required", function() {
                    i.$validate()
                }
                ))
            }
        }
    }
      , to = function() {
        return {
            restrict: "A",
            require: "?ngModel",
            link: function(e, t, r, o) {
                if (o) {
                    var a, s = r.ngPattern || r.pattern;
                    r.$observe("pattern", function(e) {
                        if (w(e) && 0 < e.length && (e = new RegExp("^" + e + "$")),
                        e && !e.test)
                            throw i("ngPattern")("noregexp", s, e, R(t));
                        a = e || n,
                        o.$validate()
                    }
                    ),
                    o.$validators.pattern = function(e) {
                        return o.$isEmpty(e) || v(a) || a.test(e)
                    }
                }
            }
        }
    }
      , no = function() {
        return {
            restrict: "A",
            require: "?ngModel",
            link: function(e, t, n, i) {
                if (i) {
                    var r = -1;
                    n.$observe("maxlength", function(e) {
                        e = d(e),
                        r = isNaN(e) ? -1 : e,
                        i.$validate()
                    }
                    ),
                    i.$validators.maxlength = function(e, t) {
                        return 0 > r || i.$isEmpty(t) || t.length <= r
                    }
                }
            }
        }
    }
      , io = function() {
        return {
            restrict: "A",
            require: "?ngModel",
            link: function(e, t, n, i) {
                if (i) {
                    var r = 0;
                    n.$observe("minlength", function(e) {
                        r = d(e) || 0,
                        i.$validate()
                    }
                    ),
                    i.$validators.minlength = function(e, t) {
                        return i.$isEmpty(t) || t.length >= r
                    }
                }
            }
        }
    }
    ;
    e.angular.bootstrap ? console.log("WARNING: Tried to load angular more than once.") : (Z(),
    oe(Dn),
    wn(t).ready(function() {
        j(t, W)
    }
    ))
}
(window, document),
!window.angular.$$csp() && window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>'),
function(e, t, n) {
    "use strict";
    t.module("ngAnimate", ["ng"]).directive("ngAnimateChildren", function() {
        return function(e, n, i) {
            i = i.ngAnimateChildren,
            t.isString(i) && 0 === i.length ? n.data("$$ngAnimateChildren", !0) : e.$watch(i, function(e) {
                n.data("$$ngAnimateChildren", !!e)
            }
            )
        }
    }
    ).factory("$$animateReflow", ["$$rAF", "$document", function(e, t) {
        return function(t) {
            return e(function() {
                t()
            }
            )
        }
    }
    ]).config(["$provide", "$animateProvider", function(i, r) {
        function o(e) {
            for (var t = 0; t < e.length; t++) {
                var n = e[t];
                if (1 == n.nodeType)
                    return n
            }
        }
        function a(e, t) {
            return o(e) == o(t)
        }
        var s, c = t.noop, l = t.forEach, u = r.$$selectors, d = t.isArray, f = t.isString, h = t.isObject, p = {
            running: !0
        };
        i.decorator("$animate", ["$delegate", "$$q", "$injector", "$sniffer", "$rootElement", "$$asyncCallback", "$rootScope", "$document", "$templateRequest", "$$jqLite", function(e, n, i, m, v, g, $, w, y, _) {
            function b(e, t) {
                var n = e.data("$$ngAnimateState") || {};
                return t && (n.running = !0,
                n.structural = !0,
                e.data("$$ngAnimateState", n)),
                n.disabled || n.running && n.structural
            }
            function S(e) {
                var t, i = n.defer();
                return i.promise.$$cancelFn = function() {
                    t && t()
                }
                ,
                $.$$postDigest(function() {
                    t = e(function() {
                        i.resolve()
                    }
                    )
                }
                ),
                i.promise
            }
            function T(e) {
                return h(e) ? (e.tempClasses && f(e.tempClasses) && (e.tempClasses = e.tempClasses.split(/\s+/)),
                e) : void 0
            }
            function x(e, t, n) {
                n = n || {};
                var i = {};
                l(n, function(e, t) {
                    l(t.split(" "), function(t) {
                        i[t] = e
                    }
                    )
                }
                );
                var r = Object.create(null );
                l((e.attr("class") || "").split(/\s+/), function(e) {
                    r[e] = !0
                }
                );
                var o = []
                  , a = [];
                return l(t && t.classes || [], function(e, t) {
                    var n = r[t]
                      , s = i[t] || {};
                    !1 === e ? (n || "addClass" == s.event) && a.push(t) : !0 === e && (n && "removeClass" != s.event || o.push(t))
                }
                ),
                0 < o.length + a.length && [o.join(" "), a.join(" ")]
            }
            function E(e) {
                if (e) {
                    var t = []
                      , n = {};
                    e = e.substr(1).split("."),
                    (m.transitions || m.animations) && t.push(i.get(u[""]));
                    for (var r = 0; r < e.length; r++) {
                        var o = e[r]
                          , a = u[o];
                        a && !n[o] && (t.push(i.get(a)),
                        n[o] = !0)
                    }
                    return t
                }
            }
            function C(e, n, i, r) {
                function o(e, t) {
                    var n = e[t]
                      , i = e["before" + t.charAt(0).toUpperCase() + t.substr(1)];
                    return n || i ? ("leave" == t && (i = n,
                    n = null ),
                    _.push({
                        event: t,
                        fn: n
                    }),
                    $.push({
                        event: t,
                        fn: i
                    }),
                    !0) : void 0
                }
                function a(t, n, o) {
                    var a = [];
                    l(t, function(e) {
                        e.fn && a.push(e)
                    }
                    );
                    var s = 0;
                    l(a, function(t, l) {
                        var d = function() {
                            e: {
                                if (n) {
                                    if ((n[l] || c)(),
                                    ++s < a.length)
                                        break e;
                                    n = null
                                }
                                o()
                            }
                        }
                        ;
                        switch (t.event) {
                        case "setClass":
                            n.push(t.fn(e, u, f, d, r));
                            break;
                        case "animate":
                            n.push(t.fn(e, i, r.from, r.to, d));
                            break;
                        case "addClass":
                            n.push(t.fn(e, u || i, d, r));
                            break;
                        case "removeClass":
                            n.push(t.fn(e, f || i, d, r));
                            break;
                        default:
                            n.push(t.fn(e, d, r))
                        }
                    }
                    ),
                    n && 0 === n.length && o()
                }
                var s = e[0];
                if (s) {
                    r && (r.to = r.to || {},
                    r.from = r.from || {});
                    var u, f;
                    d(i) && (u = i[0],
                    f = i[1],
                    u ? f ? i = u + " " + f : (i = u,
                    n = "addClass") : (i = f,
                    n = "removeClass"));
                    var h = "setClass" == n
                      , p = h || "addClass" == n || "removeClass" == n || "animate" == n
                      , m = e.attr("class") + " " + i;
                    if (O(m)) {
                        var v = c
                          , g = []
                          , $ = []
                          , w = c
                          , y = []
                          , _ = []
                          , m = (" " + m).replace(/\s+/g, ".");
                        return l(E(m), function(e) {
                            !o(e, n) && h && (o(e, "addClass"),
                            o(e, "removeClass"))
                        }
                        ),
                        {
                            node: s,
                            event: n,
                            className: i,
                            isClassBased: p,
                            isSetClassOperation: h,
                            applyStyles: function() {
                                r && e.css(t.extend(r.from || {}, r.to || {}))
                            },
                            before: function(e) {
                                v = e,
                                a($, g, function() {
                                    v = c,
                                    e()
                                }
                                )
                            },
                            after: function(e) {
                                w = e,
                                a(_, y, function() {
                                    w = c,
                                    e()
                                }
                                )
                            },
                            cancel: function() {
                                g && (l(g, function(e) {
                                    (e || c)(!0)
                                }
                                ),
                                v(!0)),
                                y && (l(y, function(e) {
                                    (e || c)(!0)
                                }
                                ),
                                w(!0))
                            }
                        }
                    }
                }
            }
            function k(e, n, i, r, o, a, u, d) {
                function f(t) {
                    var r = "$animate:" + t;
                    w && w[r] && 0 < w[r].length && g(function() {
                        i.triggerHandler(r, {
                            event: e,
                            className: n
                        })
                    }
                    )
                }
                function h() {
                    f("before")
                }
                function p() {
                    f("after")
                }
                function m() {
                    m.hasBeenRun || (m.hasBeenRun = !0,
                    a())
                }
                function v() {
                    if (!v.hasBeenRun) {
                        $ && $.applyStyles(),
                        v.hasBeenRun = !0,
                        u && u.tempClasses && l(u.tempClasses, function(e) {
                            s.removeClass(i, e)
                        }
                        );
                        var t = i.data("$$ngAnimateState");
                        t && ($ && $.isClassBased ? I(i, n) : (g(function() {
                            var t = i.data("$$ngAnimateState") || {};
                            T == t.index && I(i, n, e)
                        }
                        ),
                        i.data("$$ngAnimateState", t))),
                        f("close"),
                        d()
                    }
                }
                var $ = C(i, e, n, u);
                if (!$)
                    return m(),
                    h(),
                    p(),
                    v(),
                    c;
                e = $.event,
                n = $.className;
                var w = t.element._data($.node)
                  , w = w && w.events;
                if (r || (r = o ? o.parent() : i.parent()),
                D(i, r))
                    return m(),
                    h(),
                    p(),
                    v(),
                    c;
                r = i.data("$$ngAnimateState") || {};
                var y = r.active || {}
                  , _ = r.totalActive || 0
                  , b = r.last;
                if (o = !1,
                _ > 0) {
                    if (_ = [],
                    $.isClassBased)
                        "setClass" == b.event ? (_.push(b),
                        I(i, n)) : y[n] && (S = y[n],
                        S.event == e ? o = !0 : (_.push(S),
                        I(i, n)));
                    else if ("leave" == e && y["ng-leave"])
                        o = !0;
                    else {
                        for (var S in y)
                            _.push(y[S]);
                        r = {},
                        I(i, !0)
                    }
                    0 < _.length && l(_, function(e) {
                        e.cancel()
                    }
                    )
                }
                if (!$.isClassBased || $.isSetClassOperation || "animate" == e || o || (o = "addClass" == e == i.hasClass(n)),
                o)
                    return m(),
                    h(),
                    p(),
                    f("close"),
                    d(),
                    c;
                y = r.active || {},
                _ = r.totalActive || 0,
                "leave" == e && i.one("$destroy", function(e) {
                    e = t.element(this);
                    var n = e.data("$$ngAnimateState");
                    n && (n = n.active["ng-leave"]) && (n.cancel(),
                    I(e, "ng-leave"))
                }
                ),
                s.addClass(i, "ng-animate"),
                u && u.tempClasses && l(u.tempClasses, function(e) {
                    s.addClass(i, e)
                }
                );
                var T = P++;
                return _++,
                y[n] = $,
                i.data("$$ngAnimateState", {
                    last: $,
                    active: y,
                    index: T,
                    totalActive: _
                }),
                h(),
                $.before(function(t) {
                    var r = i.data("$$ngAnimateState");
                    t = t || !r || !r.active[n] || $.isClassBased && r.active[n].event != e,
                    m(),
                    !0 === t ? v() : (p(),
                    $.after(v))
                }
                ),
                $.cancel
            }
            function A(e) {
                (e = o(e)) && (e = t.isFunction(e.getElementsByClassName) ? e.getElementsByClassName("ng-animate") : e.querySelectorAll(".ng-animate"),
                l(e, function(e) {
                    e = t.element(e),
                    (e = e.data("$$ngAnimateState")) && e.active && l(e.active, function(e) {
                        e.cancel()
                    }
                    )
                }
                ))
            }
            function I(e, t) {
                if (a(e, v))
                    p.disabled || (p.running = !1,
                    p.structural = !1);
                else if (t) {
                    var n = e.data("$$ngAnimateState") || {}
                      , i = !0 === t;
                    !i && n.active && n.active[t] && (n.totalActive--,
                    delete n.active[t]),
                    (i || !n.totalActive) && (s.removeClass(e, "ng-animate"),
                    e.removeData("$$ngAnimateState"))
                }
            }
            function D(e, n) {
                if (p.disabled)
                    return !0;
                if (a(e, v))
                    return p.running;
                var i, r, o;
                do {
                    if (0 === n.length)
                        break;
                    var s = a(n, v)
                      , c = s ? p : n.data("$$ngAnimateState") || {};
                    if (c.disabled)
                        return !0;
                    s && (o = !0),
                    !1 !== i && (s = n.data("$$ngAnimateChildren"),
                    t.isDefined(s) && (i = s)),
                    r = r || c.running || c.last && !c.last.isClassBased
                } while (n = n.parent());return !o || !i && r
            }
            s = _,
            v.data("$$ngAnimateState", p);
            var M = $.$watch(function() {
                return y.totalPendingRequests
            }
            , function(e, t) {
                0 === e && (M(),
                $.$$postDigest(function() {
                    $.$$postDigest(function() {
                        p.running = !1
                    }
                    )
                }
                ))
            }
            )
              , P = 0
              , L = r.classNameFilter()
              , O = L ? function(e) {
                return L.test(e)
            }
             : function() {
                return !0
            }
            ;
            return {
                animate: function(e, n, i, r, a) {
                    return r = r || "ng-inline-animate",
                    a = T(a) || {},
                    a.from = i ? n : null ,
                    a.to = i ? i : n,
                    S(function(n) {
                        return k("animate", r, t.element(o(e)), null , null , c, a, n)
                    }
                    )
                },
                enter: function(n, i, r, a) {
                    return a = T(a),
                    n = t.element(n),
                    i = i && t.element(i),
                    r = r && t.element(r),
                    b(n, !0),
                    e.enter(n, i, r),
                    S(function(e) {
                        return k("enter", "ng-enter", t.element(o(n)), i, r, c, a, e)
                    }
                    )
                },
                leave: function(n, i) {
                    return i = T(i),
                    n = t.element(n),
                    A(n),
                    b(n, !0),
                    S(function(r) {
                        return k("leave", "ng-leave", t.element(o(n)), null , null , function() {
                            e.leave(n)
                        }
                        , i, r)
                    }
                    )
                },
                move: function(n, i, r, a) {
                    return a = T(a),
                    n = t.element(n),
                    i = i && t.element(i),
                    r = r && t.element(r),
                    A(n),
                    b(n, !0),
                    e.move(n, i, r),
                    S(function(e) {
                        return k("move", "ng-move", t.element(o(n)), i, r, c, a, e)
                    }
                    )
                },
                addClass: function(e, t, n) {
                    return this.setClass(e, t, [], n)
                },
                removeClass: function(e, t, n) {
                    return this.setClass(e, [], t, n)
                },
                setClass: function(n, i, r, a) {
                    if (a = T(a),
                    n = t.element(n),
                    n = t.element(o(n)),
                    b(n))
                        return e.$$setClassImmediately(n, i, r, a);
                    var s, c = n.data("$$animateClasses"), u = !!c;
                    return c || (c = {
                        classes: {}
                    }),
                    s = c.classes,
                    i = d(i) ? i : i.split(" "),
                    l(i, function(e) {
                        e && e.length && (s[e] = !0)
                    }
                    ),
                    r = d(r) ? r : r.split(" "),
                    l(r, function(e) {
                        e && e.length && (s[e] = !1)
                    }
                    ),
                    u ? (a && c.options && (c.options = t.extend(c.options || {}, a)),
                    c.promise) : (n.data("$$animateClasses", c = {
                        classes: s,
                        options: a
                    }),
                    c.promise = S(function(t) {
                        var i = n.parent()
                          , r = o(n)
                          , a = r.parentNode;
                        if (a && !a.$$NG_REMOVED && !r.$$NG_REMOVED) {
                            r = n.data("$$animateClasses"),
                            n.removeData("$$animateClasses");
                            var a = n.data("$$ngAnimateState") || {}
                              , s = x(n, r, a.active);
                            return s ? k("setClass", s, n, i, null , function() {
                                s[0] && e.$$addClassImmediately(n, s[0]),
                                s[1] && e.$$removeClassImmediately(n, s[1])
                            }
                            , r.options, t) : t()
                        }
                        t()
                    }
                    ))
                },
                cancel: function(e) {
                    e.$$cancelFn()
                },
                enabled: function(e, t) {
                    switch (arguments.length) {
                    case 2:
                        if (e)
                            I(t);
                        else {
                            var n = t.data("$$ngAnimateState") || {};
                            n.disabled = !0,
                            t.data("$$ngAnimateState", n)
                        }
                        break;
                    case 1:
                        p.disabled = !e;
                        break;
                    default:
                        e = !p.disabled
                    }
                    return !!e
                }
            }
        }
        ]),
        r.register("", ["$window", "$sniffer", "$timeout", "$$animateReflow", function(i, r, a, u) {
            function h() {
                M || (M = u(function() {
                    O = [],
                    M = null ,
                    P = {}
                }
                ))
            }
            function p(e, t) {
                M && M(),
                O.push(t),
                M = u(function() {
                    l(O, function(e) {
                        e()
                    }
                    ),
                    O = [],
                    M = null ,
                    P = {}
                }
                )
            }
            function m(e, n) {
                var i = o(e);
                e = t.element(i),
                B.push(e),
                i = Date.now() + n,
                N >= i || (a.cancel(V),
                N = i,
                V = a(function() {
                    v(B),
                    B = []
                }
                , n, !1))
            }
            function v(e) {
                l(e, function(e) {
                    (e = e.data("$$ngAnimateCSS3Data")) && l(e.closeAnimationFns, function(e) {
                        e()
                    }
                    )
                }
                )
            }
            function g(e, t) {
                var n = t ? P[t] : null ;
                if (!n) {
                    var r = 0
                      , o = 0
                      , a = 0
                      , s = 0;
                    l(e, function(e) {
                        if (1 == e.nodeType) {
                            e = i.getComputedStyle(e) || {},
                            r = Math.max($(e[C + "Duration"]), r),
                            o = Math.max($(e[C + "Delay"]), o),
                            s = Math.max($(e[A + "Delay"]), s);
                            var t = $(e[A + "Duration"]);
                            t > 0 && (t *= parseInt(e[A + "IterationCount"], 10) || 1),
                            a = Math.max(t, a)
                        }
                    }
                    ),
                    n = {
                        total: 0,
                        transitionDelay: o,
                        transitionDuration: r,
                        animationDelay: s,
                        animationDuration: a
                    },
                    t && (P[t] = n)
                }
                return n
            }
            function $(e) {
                var t = 0;
                return e = f(e) ? e.split(/\s*,\s*/) : [],
                l(e, function(e) {
                    t = Math.max(parseFloat(e) || 0, t)
                }
                ),
                t
            }
            function w(e, t, n, i) {
                e = 0 <= ["ng-enter", "ng-leave", "ng-move"].indexOf(n);
                var r, a = t.parent(), c = a.data("$$ngAnimateKey");
                c || (a.data("$$ngAnimateKey", ++L),
                c = L),
                r = c + "-" + o(t).getAttribute("class");
                var a = r + " " + n
                  , c = P[a] ? ++P[a].total : 0
                  , l = {};
                if (c > 0) {
                    var u = n + "-stagger"
                      , l = r + " " + u;
                    (r = !P[l]) && s.addClass(t, u),
                    l = g(t, l),
                    r && s.removeClass(t, u)
                }
                s.addClass(t, n);
                var u = t.data("$$ngAnimateCSS3Data") || {}
                  , d = g(t, a);
                return r = d.transitionDuration,
                d = d.animationDuration,
                e && 0 === r && 0 === d ? (s.removeClass(t, n),
                !1) : (n = i || e && r > 0,
                e = d > 0 && 0 < l.animationDelay && 0 === l.animationDuration,
                t.data("$$ngAnimateCSS3Data", {
                    stagger: l,
                    cacheKey: a,
                    running: u.running || 0,
                    itemIndex: c,
                    blockTransition: n,
                    closeAnimationFns: u.closeAnimationFns || []
                }),
                a = o(t),
                n && (_(a, !0),
                i && t.css(i)),
                e && (a.style[A + "PlayState"] = "paused"),
                !0)
            }
            function y(e, t, n, i, r) {
                function c() {
                    t.off(M, u),
                    s.removeClass(t, f),
                    s.removeClass(t, h),
                    E && a.cancel(E),
                    x(t, n);
                    var e, i = o(t);
                    for (e in p)
                        i.style.removeProperty(p[e])
                }
                function u(e) {
                    e.stopPropagation();
                    var t = e.originalEvent || e;
                    e = t.$manualTimeStamp || t.timeStamp || Date.now(),
                    t = parseFloat(t.elapsedTime.toFixed(3)),
                    Math.max(e - C, 0) >= T && t >= S && i()
                }
                var d = o(t);
                if (e = t.data("$$ngAnimateCSS3Data"),
                -1 != d.getAttribute("class").indexOf(n) && e) {
                    var f = ""
                      , h = "";
                    l(n.split(" "), function(e, t) {
                        var n = (t > 0 ? " " : "") + e;
                        f += n + "-active",
                        h += n + "-pending"
                    }
                    );
                    var p = []
                      , v = e.itemIndex
                      , $ = e.stagger
                      , w = 0;
                    if (v > 0) {
                        w = 0,
                        0 < $.transitionDelay && 0 === $.transitionDuration && (w = $.transitionDelay * v);
                        var y = 0;
                        0 < $.animationDelay && 0 === $.animationDuration && (y = $.animationDelay * v,
                        p.push(D + "animation-play-state")),
                        w = Math.round(100 * Math.max(w, y)) / 100
                    }
                    w || (s.addClass(t, f),
                    e.blockTransition && _(d, !1));
                    var b = g(t, e.cacheKey + " " + f)
                      , S = Math.max(b.transitionDuration, b.animationDuration);
                    if (0 !== S) {
                        !w && r && 0 < Object.keys(r).length && (b.transitionDuration || (t.css("transition", b.animationDuration + "s linear all"),
                        p.push("transition")),
                        t.css(r));
                        var v = Math.max(b.transitionDelay, b.animationDelay)
                          , T = 1e3 * v;
                        0 < p.length && ($ = d.getAttribute("style") || "",
                        ";" !== $.charAt($.length - 1) && ($ += ";"),
                        d.setAttribute("style", $ + " "));
                        var E, C = Date.now(), M = I + " " + k, v = 1e3 * (w + 1.5 * (v + S));
                        return w > 0 && (s.addClass(t, h),
                        E = a(function() {
                            E = null ,
                            0 < b.transitionDuration && _(d, !1),
                            0 < b.animationDuration && (d.style[A + "PlayState"] = ""),
                            s.addClass(t, f),
                            s.removeClass(t, h),
                            r && (0 === b.transitionDuration && t.css("transition", b.animationDuration + "s linear all"),
                            t.css(r),
                            p.push("transition"))
                        }
                        , 1e3 * w, !1)),
                        t.on(M, u),
                        e.closeAnimationFns.push(function() {
                            c(),
                            i()
                        }
                        ),
                        e.running++,
                        m(t, v),
                        c
                    }
                    s.removeClass(t, f),
                    x(t, n),
                    i()
                } else
                    i()
            }
            function _(e, t) {
                e.style[C + "Property"] = t ? "none" : ""
            }
            function b(e, t, n, i) {
                return w(e, t, n, i) ? function(e) {
                    e && x(t, n)
                }
                 : void 0
            }
            function S(e, t, n, i, r) {
                return t.data("$$ngAnimateCSS3Data") ? y(e, t, n, i, r) : (x(t, n),
                void i())
            }
            function T(e, t, n, i, r) {
                var o = b(e, t, n, r.from);
                if (o) {
                    var a = o;
                    return p(t, function() {
                        a = S(e, t, n, i, r.to)
                    }
                    ),
                    function(e) {
                        (a || c)(e)
                    }
                }
                h(),
                i()
            }
            function x(e, t) {
                s.removeClass(e, t);
                var n = e.data("$$ngAnimateCSS3Data");
                n && (n.running && n.running--,
                n.running && 0 !== n.running || e.removeData("$$ngAnimateCSS3Data"))
            }
            function E(e, t) {
                var n = "";
                return e = d(e) ? e : e.split(/\s+/),
                l(e, function(e, i) {
                    e && 0 < e.length && (n += (i > 0 ? " " : "") + e + t)
                }
                ),
                n
            }
            var C, k, A, I, D = "";
            e.ontransitionend === n && e.onwebkittransitionend !== n ? (D = "-webkit-",
            C = "WebkitTransition",
            k = "webkitTransitionEnd transitionend") : (C = "transition",
            k = "transitionend"),
            e.onanimationend === n && e.onwebkitanimationend !== n ? (D = "-webkit-",
            A = "WebkitAnimation",
            I = "webkitAnimationEnd animationend") : (A = "animation",
            I = "animationend");
            var M, P = {}, L = 0, O = [], V = null , N = 0, B = [];
            return {
                animate: function(e, t, n, i, r, o) {
                    return o = o || {},
                    o.from = n,
                    o.to = i,
                    T("animate", e, t, r, o)
                },
                enter: function(e, t, n) {
                    return n = n || {},
                    T("enter", e, "ng-enter", t, n)
                },
                leave: function(e, t, n) {
                    return n = n || {},
                    T("leave", e, "ng-leave", t, n)
                },
                move: function(e, t, n) {
                    return n = n || {},
                    T("move", e, "ng-move", t, n)
                },
                beforeSetClass: function(e, t, n, i, r) {
                    return r = r || {},
                    t = E(n, "-remove") + " " + E(t, "-add"),
                    (r = b("setClass", e, t, r.from)) ? (p(e, i),
                    r) : (h(),
                    void i())
                },
                beforeAddClass: function(e, t, n, i) {
                    return i = i || {},
                    (t = b("addClass", e, E(t, "-add"), i.from)) ? (p(e, n),
                    t) : (h(),
                    void n())
                },
                beforeRemoveClass: function(e, t, n, i) {
                    return i = i || {},
                    (t = b("removeClass", e, E(t, "-remove"), i.from)) ? (p(e, n),
                    t) : (h(),
                    void n())
                },
                setClass: function(e, t, n, i, r) {
                    return r = r || {},
                    n = E(n, "-remove"),
                    t = E(t, "-add"),
                    S("setClass", e, n + " " + t, i, r.to)
                },
                addClass: function(e, t, n, i) {
                    return i = i || {},
                    S("addClass", e, E(t, "-add"), n, i.to)
                },
                removeClass: function(e, t, n, i) {
                    return i = i || {},
                    S("removeClass", e, E(t, "-remove"), n, i.to)
                }
            }
        }
        ])
    }
    ])
}
(window, window.angular),
function(e, t, n) {
    "use strict";
    function i(e) {
        var n = [];
        return c(n, t.noop).chars(e),
        n.join("")
    }
    function r(e) {
        var t = {};
        e = e.split(",");
        var n;
        for (n = 0; n < e.length; n++)
            t[e[n]] = !0;
        return t
    }
    function o(e, n) {
        function i(e, i, o, s) {
            if (i = t.lowercase(i),
            b[i])
                for (; $.last() && S[$.last()]; )
                    r("", $.last());
            _[i] && $.last() == i && r("", i),
            (s = y[i] || !!s) || $.push(i);
            var c = {};
            o.replace(f, function(e, t, n, i, r) {
                c[t] = a(n || i || r || "")
            }
            ),
            n.start && n.start(i, c, s)
        }
        function r(e, i) {
            var r, o = 0;
            if (i = t.lowercase(i))
                for (o = $.length - 1; o >= 0 && $[o] != i; o--)
                    ;
            if (o >= 0) {
                for (r = $.length - 1; r >= o; r--)
                    n.end && n.end($[r]);
                $.length = o
            }
        }
        "string" != typeof e && (e = null  === e || "undefined" == typeof e ? "" : "" + e);
        var o, s, c, $ = [], w = e;
        for ($.last = function() {
            return $[$.length - 1]
        }
        ; e; ) {
            if (c = "",
            s = !0,
            $.last() && T[$.last()] ? (e = e.replace(new RegExp("([\\W\\w]*)<\\s*\\/\\s*" + $.last() + "[^>]*>","i"), function(e, t) {
                return t = t.replace(m, "$1").replace(g, "$1"),
                n.chars && n.chars(a(t)),
                ""
            }
            ),
            r("", $.last())) : (0 === e.indexOf("<!--") ? (o = e.indexOf("--", 4),
            o >= 0 && e.lastIndexOf("-->", o) === o && (n.comment && n.comment(e.substring(4, o)),
            e = e.substring(o + 3),
            s = !1)) : v.test(e) ? (o = e.match(v)) && (e = e.replace(o[0], ""),
            s = !1) : p.test(e) ? (o = e.match(d)) && (e = e.substring(o[0].length),
            o[0].replace(d, r),
            s = !1) : h.test(e) && ((o = e.match(u)) ? (o[4] && (e = e.substring(o[0].length),
            o[0].replace(u, i)),
            s = !1) : (c += "<",
            e = e.substring(1))),
            s && (o = e.indexOf("<"),
            c += 0 > o ? e : e.substring(0, o),
            e = 0 > o ? "" : e.substring(o),
            n.chars && n.chars(a(c)))),
            e == w)
                throw l("badparse", e);
            w = e
        }
        r()
    }
    function a(e) {
        if (!e)
            return "";
        var t = A.exec(e);
        e = t[1];
        var n = t[3];
        return (t = t[2]) && (k.innerHTML = t.replace(/</g, "&lt;"),
        t = "textContent" in k ? k.textContent : k.innerText),
        e + t + n
    }
    function s(e) {
        return e.replace(/&/g, "&amp;").replace($, function(e) {
            var t = e.charCodeAt(0);
            return e = e.charCodeAt(1),
            "&#" + (1024 * (t - 55296) + (e - 56320) + 65536) + ";"
        }
        ).replace(w, function(e) {
            return "&#" + e.charCodeAt(0) + ";"
        }
        ).replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    function c(e, n) {
        var i = !1
          , r = t.bind(e, e.push);
        return {
            start: function(e, o, a) {
                e = t.lowercase(e),
                !i && T[e] && (i = e),
                i || !0 !== x[e] || (r("<"),
                r(e),
                t.forEach(o, function(i, o) {
                    var a = t.lowercase(o)
                      , c = "img" === e && "src" === a || "background" === a;
                    !0 !== C[a] || !0 === E[a] && !n(i, c) || (r(" "),
                    r(o),
                    r('="'),
                    r(s(i)),
                    r('"'))
                }
                ),
                r(a ? "/>" : ">"))
            },
            end: function(e) {
                e = t.lowercase(e),
                i || !0 !== x[e] || (r("</"),
                r(e),
                r(">")),
                e == i && (i = !1)
            },
            chars: function(e) {
                i || r(s(e))
            }
        }
    }
    var l = t.$$minErr("$sanitize")
      , u = /^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/
      , d = /^<\/\s*([\w:-]+)[^>]*>/
      , f = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g
      , h = /^</
      , p = /^<\//
      , m = /\x3c!--(.*?)--\x3e/g
      , v = /<!DOCTYPE([^>]*?)>/i
      , g = /<!\[CDATA\[(.*?)]]\x3e/g
      , $ = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g
      , w = /([^\#-~| |!])/g
      , y = r("area,br,col,hr,img,wbr");
    e = r("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
    n = r("rp,rt");
    var _ = t.extend({}, n, e)
      , b = t.extend({}, e, r("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul"))
      , S = t.extend({}, n, r("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var"));
    e = r("animate,animateColor,animateMotion,animateTransform,circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,set,stop,svg,switch,text,title,tspan,use");
    var T = r("script,style")
      , x = t.extend({}, y, b, S, _, e)
      , E = r("background,cite,href,longdesc,src,usemap,xlink:href");
    e = r("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width"),
    n = r("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,attributeName,attributeType,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan");
    var C = t.extend({}, E, n, e)
      , k = document.createElement("pre")
      , A = /^(\s*)([\s\S]*?)(\s*)$/;
    t.module("ngSanitize", []).provider("$sanitize", function() {
        this.$get = ["$$sanitizeUri", function(e) {
            return function(t) {
                var n = [];
                return o(t, c(n, function(t, n) {
                    return !/^unsafe/.test(e(t, n))
                }
                )),
                n.join("")
            }
        }
        ]
    }
    ),
    t.module("ngSanitize").filter("linky", ["$sanitize", function(e) {
        var n = /((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/
          , r = /^mailto:/;
        return function(o, a) {
            function s(e) {
                e && h.push(i(e))
            }
            function c(e, n) {
                h.push("<a "),
                t.isDefined(a) && h.push('target="', a, '" '),
                h.push('href="', e.replace(/"/g, "&quot;"), '">'),
                s(n),
                h.push("</a>")
            }
            if (!o)
                return o;
            for (var l, u, d, f = o, h = []; l = f.match(n); )
                u = l[0],
                l[2] || l[4] || (u = (l[3] ? "http://" : "mailto:") + u),
                d = l.index,
                s(f.substr(0, d)),
                c(u, l[0].replace(r, "")),
                f = f.substring(d + l[0].length);
            return s(f),
            e(h.join(""))
        }
    }
    ])
}
(window, window.angular),
"undefined" != typeof module && "undefined" != typeof exports && module.exports === exports && (module.exports = "ui.router"),
function(e, t, n) {
    "use strict";
    function i(e, t) {
        return B(new (B(function() {}
        , {
            prototype: e
        })), t)
    }
    function r(e) {
        return N(arguments, function(t) {
            t !== e && N(t, function(t, n) {
                e.hasOwnProperty(n) || (e[n] = t)
            }
            )
        }
        ),
        e
    }
    function o(e, t) {
        var n = [];
        for (var i in e.path) {
            if (e.path[i] !== t.path[i])
                break;
            n.push(e.path[i])
        }
        return n
    }
    function a(e) {
        if (Object.keys)
            return Object.keys(e);
        var n = [];
        return t.forEach(e, function(e, t) {
            n.push(t)
        }
        ),
        n
    }
    function s(e, t) {
        if (Array.prototype.indexOf)
            return e.indexOf(t, Number(arguments[2]) || 0);
        var n = e.length >>> 0
          , i = Number(arguments[2]) || 0;
        for (i = 0 > i ? Math.ceil(i) : Math.floor(i),
        0 > i && (i += n); n > i; i++)
            if (i in e && e[i] === t)
                return i;
        return -1
    }
    function c(e, t, n, i) {
        var r, c = o(n, i), l = {}, u = [];
        for (var d in c)
            if (c[d].params && (r = a(c[d].params),
            r.length))
                for (var f in r)
                    s(u, r[f]) >= 0 || (u.push(r[f]),
                    l[r[f]] = e[r[f]]);
        return B({}, l, t)
    }
    function l(e, t, n) {
        if (!n) {
            n = [];
            for (var i in e)
                n.push(i)
        }
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            if (e[o] != t[o])
                return !1
        }
        return !0
    }
    function u(e, t) {
        var n = {};
        return N(e, function(e) {
            n[e] = t[e]
        }
        ),
        n
    }
    function d(e) {
        var t = {}
          , n = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
        for (var i in e)
            -1 == s(n, i) && (t[i] = e[i]);
        return t
    }
    function f(e, t) {
        var n = V(e)
          , i = n ? [] : {};
        return N(e, function(e, r) {
            t(e, r) && (i[n ? i.length : r] = e)
        }
        ),
        i
    }
    function h(e, t) {
        var n = V(e) ? [] : {};
        return N(e, function(e, i) {
            n[i] = t(e, i)
        }
        ),
        n
    }
    function p(e, t) {
        var i = 1
          , o = 2
          , c = {}
          , l = []
          , u = c
          , f = B(e.when(c), {
            $$promises: c,
            $$values: c
        });
        this.study = function(c) {
            function h(e, n) {
                if ($[n] !== o) {
                    if (g.push(n),
                    $[n] === i)
                        throw g.splice(0, s(g, n)),
                        new Error("Cyclic dependency: " + g.join(" -> "));
                    if ($[n] = i,
                    L(e))
                        v.push(n, [function() {
                            return t.get(e)
                        }
                        ], l);
                    else {
                        var r = t.annotate(e);
                        N(r, function(e) {
                            e !== n && c.hasOwnProperty(e) && h(c[e], e)
                        }
                        ),
                        v.push(n, e, r)
                    }
                    g.pop(),
                    $[n] = o
                }
            }
            function p(e) {
                return O(e) && e.then && e.$$promises
            }
            if (!O(c))
                throw new Error("'invocables' must be an object");
            var m = a(c || {})
              , v = []
              , g = []
              , $ = {};
            return N(c, h),
            c = g = $ = null ,
            function(i, o, a) {
                function s() {
                    --y || (_ || r(w, o.$$values),
                    g.$$values = w,
                    g.$$promises = g.$$promises || !0,
                    delete g.$$inheritedValues,
                    h.resolve(w))
                }
                function c(e) {
                    g.$$failure = e,
                    h.reject(e)
                }
                function l(n, r, o) {
                    function l(e) {
                        d.reject(e),
                        c(e)
                    }
                    function u() {
                        if (!M(g.$$failure))
                            try {
                                d.resolve(t.invoke(r, a, w)),
                                d.promise.then(function(e) {
                                    w[n] = e,
                                    s()
                                }
                                , l)
                            } catch (e) {
                                l(e)
                            }
                    }
                    var d = e.defer()
                      , f = 0;
                    N(o, function(e) {
                        $.hasOwnProperty(e) && !i.hasOwnProperty(e) && (f++,
                        $[e].then(function(t) {
                            w[e] = t,
                            --f || u()
                        }
                        , l))
                    }
                    ),
                    f || u(),
                    $[n] = d.promise
                }
                if (p(i) && a === n && (a = o,
                o = i,
                i = null ),
                i) {
                    if (!O(i))
                        throw new Error("'locals' must be an object")
                } else
                    i = u;
                if (o) {
                    if (!p(o))
                        throw new Error("'parent' must be a promise returned by $resolve.resolve()")
                } else
                    o = f;
                var h = e.defer()
                  , g = h.promise
                  , $ = g.$$promises = {}
                  , w = B({}, i)
                  , y = 1 + v.length / 3
                  , _ = !1;
                if (M(o.$$failure))
                    return c(o.$$failure),
                    g;
                o.$$inheritedValues && r(w, d(o.$$inheritedValues, m)),
                B($, o.$$promises),
                o.$$values ? (_ = r(w, d(o.$$values, m)),
                g.$$inheritedValues = d(o.$$values, m),
                s()) : (o.$$inheritedValues && (g.$$inheritedValues = d(o.$$inheritedValues, m)),
                o.then(s, c));
                for (var b = 0, S = v.length; S > b; b += 3)
                    i.hasOwnProperty(v[b]) ? s() : l(v[b], v[b + 1], v[b + 2]);
                return g
            }
        }
        ,
        this.resolve = function(e, t, n, i) {
            return this.study(e)(t, n, i)
        }
    }
    function m(e, t, n) {
        this.fromConfig = function(e, t, n) {
            return M(e.template) ? this.fromString(e.template, t) : M(e.templateUrl) ? this.fromUrl(e.templateUrl, t) : M(e.templateProvider) ? this.fromProvider(e.templateProvider, t, n) : null
        }
        ,
        this.fromString = function(e, t) {
            return P(e) ? e(t) : e
        }
        ,
        this.fromUrl = function(n, i) {
            return P(n) && (n = n(i)),
            null  == n ? null  : e.get(n, {
                cache: t,
                headers: {
                    Accept: "text/html"
                }
            }).then(function(e) {
                return e.data
            }
            )
        }
        ,
        this.fromProvider = function(e, t, i) {
            return n.invoke(e, null , i || {
                params: t
            })
        }
    }
    function v(e, t, r) {
        function o(t, n, i, r) {
            if (v.push(t),
            p[t])
                return p[t];
            if (!/^\w+(-+\w+)*(?:\[\])?$/.test(t))
                throw new Error("Invalid parameter name '" + t + "' in pattern '" + e + "'");
            if (m[t])
                throw new Error("Duplicate parameter name '" + t + "' in pattern '" + e + "'");
            return m[t] = new H.Param(t,n,i,r),
            m[t]
        }
        function a(e, t, n) {
            var i = ["", ""]
              , r = e.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
            if (!t)
                return r;
            switch (n) {
            case !1:
                i = ["(", ")"];
                break;
            case !0:
                i = ["?(", ")?"];
                break;
            default:
                i = ["(" + n + "|", ")?"]
            }
            return r + i[0] + t + i[1]
        }
        function s(n, r) {
            var o, a, s, c, l;
            return o = n[2] || n[3],
            l = t.params[o],
            s = e.substring(f, n.index),
            a = r ? n[4] : n[4] || ("*" == n[1] ? ".*" : null ),
            c = H.type(a || "string") || i(H.type("string"), {
                pattern: new RegExp(a)
            }),
            {
                id: o,
                regexp: a,
                segment: s,
                type: c,
                cfg: l
            }
        }
        t = B({
            params: {}
        }, O(t) ? t : {});
        var c, l = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g, u = /([:]?)([\w\[\]-]+)|\{([\w\[\]-]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g, d = "^", f = 0, h = this.segments = [], p = r ? r.params : {}, m = this.params = r ? r.params.$$new() : new H.ParamSet, v = [];
        this.source = e;
        for (var g, $, w; (c = l.exec(e)) && (g = s(c, !1),
        !(g.segment.indexOf("?") >= 0)); )
            $ = o(g.id, g.type, g.cfg, "path"),
            d += a(g.segment, $.type.pattern.source, $.squash),
            h.push(g.segment),
            f = l.lastIndex;
        w = e.substring(f);
        var y = w.indexOf("?");
        if (y >= 0) {
            var _ = this.sourceSearch = w.substring(y);
            if (w = w.substring(0, y),
            this.sourcePath = e.substring(0, f + y),
            _.length > 0)
                for (f = 0; c = u.exec(_); )
                    g = s(c, !0),
                    $ = o(g.id, g.type, g.cfg, "search"),
                    f = l.lastIndex
        } else
            this.sourcePath = e,
            this.sourceSearch = "";
        d += a(w) + (t.strict === !1 ? "/?" : "") + "$",
        h.push(w),
        this.regexp = new RegExp(d,t.caseInsensitive ? "i" : n),
        this.prefix = h[0],
        this.$$paramNames = v
    }
    function g(e) {
        B(this, e)
    }
    function $() {
        function e(e) {
            return null  != e ? e.toString().replace(/\//g, "%2F") : e
        }
        function r(e) {
            return null  != e ? e.toString().replace(/%2F/g, "/") : e
        }
        function o(e) {
            return this.pattern.test(e)
        }
        function c() {
            return {
                strict: w,
                caseInsensitive: m
            }
        }
        function l(e) {
            return P(e) || V(e) && P(e[e.length - 1])
        }
        function u() {
            for (; S.length; ) {
                var e = S.shift();
                if (e.pattern)
                    throw new Error("You cannot override a type's .pattern at runtime.");
                t.extend(_[e.name], p.invoke(e.def))
            }
        }
        function d(e) {
            B(this, e || {})
        }
        H = this;
        var p, m = !1, w = !0, y = !1, _ = {}, b = !0, S = [], T = {
            string: {
                encode: e,
                decode: r,
                is: o,
                pattern: /[^/]*/
            },
            "int": {
                encode: e,
                decode: function(e) {
                    return parseInt(e, 10)
                },
                is: function(e) {
                    return M(e) && this.decode(e.toString()) === e
                },
                pattern: /\d+/
            },
            bool: {
                encode: function(e) {
                    return e ? 1 : 0
                },
                decode: function(e) {
                    return 0 !== parseInt(e, 10)
                },
                is: function(e) {
                    return e === !0 || e === !1
                },
                pattern: /0|1/
            },
            date: {
                encode: function(e) {
                    return this.is(e) ? [e.getFullYear(), ("0" + (e.getMonth() + 1)).slice(-2), ("0" + e.getDate()).slice(-2)].join("-") : n
                },
                decode: function(e) {
                    if (this.is(e))
                        return e;
                    var t = this.capture.exec(e);
                    return t ? new Date(t[1],t[2] - 1,t[3]) : n
                },
                is: function(e) {
                    return e instanceof Date && !isNaN(e.valueOf())
                },
                equals: function(e, t) {
                    return this.is(e) && this.is(t) && e.toISOString() === t.toISOString()
                },
                pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
                capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
            },
            json: {
                encode: t.toJson,
                decode: t.fromJson,
                is: t.isObject,
                equals: t.equals,
                pattern: /[^/]*/
            },
            any: {
                encode: t.identity,
                decode: t.identity,
                is: t.identity,
                equals: t.equals,
                pattern: /.*/
            }
        };
        $.$$getDefaultValue = function(e) {
            if (!l(e.value))
                return e.value;
            if (!p)
                throw new Error("Injectable functions cannot be called at configuration time");
            return p.invoke(e.value)
        }
        ,
        this.caseInsensitive = function(e) {
            return M(e) && (m = e),
            m
        }
        ,
        this.strictMode = function(e) {
            return M(e) && (w = e),
            w
        }
        ,
        this.defaultSquashPolicy = function(e) {
            if (!M(e))
                return y;
            if (e !== !0 && e !== !1 && !L(e))
                throw new Error("Invalid squash policy: " + e + ". Valid policies: false, true, arbitrary-string");
            return y = e,
            e
        }
        ,
        this.compile = function(e, t) {
            return new v(e,B(c(), t))
        }
        ,
        this.isMatcher = function(e) {
            if (!O(e))
                return !1;
            var t = !0;
            return N(v.prototype, function(n, i) {
                P(n) && (t = t && M(e[i]) && P(e[i]))
            }
            ),
            t
        }
        ,
        this.type = function(e, t, n) {
            if (!M(t))
                return _[e];
            if (_.hasOwnProperty(e))
                throw new Error("A type named '" + e + "' has already been defined.");
            return _[e] = new g(B({
                name: e
            }, t)),
            n && (S.push({
                name: e,
                def: n
            }),
            b || u()),
            this
        }
        ,
        N(T, function(e, t) {
            _[t] = new g(B({
                name: t
            }, e))
        }
        ),
        _ = i(_, {}),
        this.$get = ["$injector", function(e) {
            return p = e,
            b = !1,
            u(),
            N(T, function(e, t) {
                _[t] || (_[t] = new g(e))
            }
            ),
            this
        }
        ],
        this.Param = function(e, t, i, r) {
            function o(e) {
                var t = O(e) ? a(e) : []
                  , n = -1 === s(t, "value") && -1 === s(t, "type") && -1 === s(t, "squash") && -1 === s(t, "array");
                return n && (e = {
                    value: e
                }),
                e.$$fn = l(e.value) ? e.value : function() {
                    return e.value
                }
                ,
                e
            }
            function c(t, n, i) {
                if (t.type && n)
                    throw new Error("Param '" + e + "' has two type configurations.");
                return n ? n : t.type ? t.type instanceof g ? t.type : new g(t.type) : "config" === i ? _.any : _.string
            }
            function u() {
                var t = {
                    array: "search" === r ? "auto" : !1
                }
                  , n = e.match(/\[\]$/) ? {
                    array: !0
                } : {};
                return B(t, n, i).array
            }
            function d(e, t) {
                var n = e.squash;
                if (!t || n === !1)
                    return !1;
                if (!M(n) || null  == n)
                    return y;
                if (n === !0 || L(n))
                    return n;
                throw new Error("Invalid squash policy: '" + n + "'. Valid policies: false, true, or arbitrary string")
            }
            function m(e, t, i, r) {
                var o, a, c = [{
                    from: "",
                    to: i || t ? n : ""
                }, {
                    from: null ,
                    to: i || t ? n : ""
                }];
                return o = V(e.replace) ? e.replace : [],
                L(r) && o.push({
                    from: r,
                    to: n
                }),
                a = h(o, function(e) {
                    return e.from
                }
                ),
                f(c, function(e) {
                    return -1 === s(a, e.from)
                }
                ).concat(o)
            }
            function v() {
                if (!p)
                    throw new Error("Injectable functions cannot be called at configuration time");
                return p.invoke(i.$$fn)
            }
            function $(e) {
                function t(e) {
                    return function(t) {
                        return t.from === e
                    }
                }
                function n(e) {
                    var n = h(f(b.replace, t(e)), function(e) {
                        return e.to
                    }
                    );
                    return n.length ? n[0] : e
                }
                return e = n(e),
                M(e) ? b.type.decode(e) : v()
            }
            function w() {
                return "{Param:" + e + " " + t + " squash: '" + x + "' optional: " + T + "}"
            }
            var b = this;
            i = o(i),
            t = c(i, t, r);
            var S = u();
            t = S ? t.$asArray(S, "search" === r) : t,
            "string" !== t.name || S || "path" !== r || i.value !== n || (i.value = "");
            var T = i.value !== n
              , x = d(i, T)
              , E = m(i, S, T, x);
            B(this, {
                id: e,
                type: t,
                location: r,
                array: S,
                squash: x,
                replace: E,
                isOptional: T,
                value: $,
                dynamic: n,
                config: i,
                toString: w
            })
        }
        ,
        d.prototype = {
            $$new: function() {
                return i(this, B(new d, {
                    $$parent: this
                }))
            },
            $$keys: function() {
                for (var e = [], t = [], n = this, i = a(d.prototype); n; )
                    t.push(n),
                    n = n.$$parent;
                return t.reverse(),
                N(t, function(t) {
                    N(a(t), function(t) {
                        -1 === s(e, t) && -1 === s(i, t) && e.push(t)
                    }
                    )
                }
                ),
                e
            },
            $$values: function(e) {
                var t = {}
                  , n = this;
                return N(n.$$keys(), function(i) {
                    t[i] = n[i].value(e && e[i])
                }
                ),
                t
            },
            $$equals: function(e, t) {
                var n = !0
                  , i = this;
                return N(i.$$keys(), function(r) {
                    var o = e && e[r]
                      , a = t && t[r];
                    i[r].type.equals(o, a) || (n = !1)
                }
                ),
                n
            },
            $$validates: function(e) {
                var t, n, i, r = !0, o = this;
                return N(this.$$keys(), function(a) {
                    i = o[a],
                    n = e[a],
                    t = !n && i.isOptional,
                    r = r && (t || !!i.type.is(n))
                }
                ),
                r
            },
            $$parent: n
        },
        this.ParamSet = d
    }
    function w(e, i) {
        function r(e) {
            var t = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(e.source);
            return null  != t ? t[1].replace(/\\(.)/g, "$1") : ""
        }
        function o(e, t) {
            return e.replace(/\$(\$|\d{1,2})/, function(e, n) {
                return t["$" === n ? 0 : Number(n)]
            }
            )
        }
        function a(e, t, n) {
            if (!n)
                return !1;
            var i = e.invoke(t, t, {
                $match: n
            });
            return M(i) ? i : !0
        }
        function s(i, r, o, a) {
            function s(e, t, n) {
                return "/" === m ? e : t ? m.slice(0, -1) + e : n ? m.slice(1) + e : e
            }
            function f(e) {
                function t(e) {
                    var t = e(o, i);
                    return t ? (L(t) && i.replace().url(t),
                    !0) : !1
                }
                if (!e || !e.defaultPrevented) {
                    var r = p && i.url() === p;
                    if (p = n,
                    r)
                        return !0;
                    var a, s = l.length;
                    for (a = 0; s > a; a++)
                        if (t(l[a]))
                            return;
                    u && t(u)
                }
            }
            function h() {
                return c = c || r.$on("$locationChangeSuccess", f)
            }
            var p, m = a.baseHref(), v = i.url();
            return d || h(),
            {
                sync: function() {
                    f()
                },
                listen: function() {
                    return h()
                },
                update: function(e) {
                    return e ? void (v = i.url()) : void (i.url() !== v && (i.url(v),
                    i.replace()))
                },
                push: function(e, t, r) {
                    i.url(e.format(t || {})),
                    p = r && r.$$avoidResync ? i.url() : n,
                    r && r.replace && i.replace()
                },
                href: function(n, r, o) {
                    if (!n.validates(r))
                        return null ;
                    var a = e.html5Mode();
                    t.isObject(a) && (a = a.enabled);
                    var c = n.format(r);
                    if (o = o || {},
                    a || null  === c || (c = "#" + e.hashPrefix() + c),
                    c = s(c, a, o.absolute),
                    !o.absolute || !c)
                        return c;
                    var l = !a && c ? "/" : ""
                      , u = i.port();
                    return u = 80 === u || 443 === u ? "" : ":" + u,
                    [i.protocol(), "://", i.host(), u, l, c].join("")
                }
            }
        }
        var c, l = [], u = null , d = !1;
        this.rule = function(e) {
            if (!P(e))
                throw new Error("'rule' must be a function");
            return l.push(e),
            this
        }
        ,
        this.otherwise = function(e) {
            if (L(e)) {
                var t = e;
                e = function() {
                    return t
                }
            } else if (!P(e))
                throw new Error("'rule' must be a function");
            return u = e,
            this
        }
        ,
        this.when = function(e, t) {
            var n, s = L(t);
            if (L(e) && (e = i.compile(e)),
            !s && !P(t) && !V(t))
                throw new Error("invalid 'handler' in when()");
            var c = {
                matcher: function(e, t) {
                    return s && (n = i.compile(t),
                    t = ["$match", function(e) {
                        return n.format(e)
                    }
                    ]),
                    B(function(n, i) {
                        return a(n, t, e.exec(i.path(), i.search()))
                    }
                    , {
                        prefix: L(e.prefix) ? e.prefix : ""
                    })
                },
                regex: function(e, t) {
                    if (e.global || e.sticky)
                        throw new Error("when() RegExp must not be global or sticky");
                    return s && (n = t,
                    t = ["$match", function(e) {
                        return o(n, e)
                    }
                    ]),
                    B(function(n, i) {
                        return a(n, t, e.exec(i.path()))
                    }
                    , {
                        prefix: r(e)
                    })
                }
            }
              , l = {
                matcher: i.isMatcher(e),
                regex: e instanceof RegExp
            };
            for (var u in l)
                if (l[u])
                    return this.rule(c[u](e, t));
            throw new Error("invalid 'what' in when()")
        }
        ,
        this.deferIntercept = function(e) {
            e === n && (e = !0),
            d = e
        }
        ,
        this.$get = s,
        s.$inject = ["$location", "$rootScope", "$injector", "$browser"]
    }
    function y(e, r) {
        function o(e) {
            return 0 === e.indexOf(".") || 0 === e.indexOf("^")
        }
        function d(e, t) {
            if (!e)
                return n;
            var i = L(e)
              , r = i ? e : e.name
              , a = o(r);
            if (a) {
                if (!t)
                    throw new Error("No reference point given for path '" + r + "'");
                t = d(t);
                for (var s = r.split("."), c = 0, l = s.length, u = t; l > c; c++)
                    if ("" !== s[c] || 0 !== c) {
                        if ("^" !== s[c])
                            break;
                        if (!u.parent)
                            throw new Error("Path '" + r + "' not valid for state '" + t.name + "'");
                        u = u.parent
                    } else
                        u = t;
                s = s.slice(c).join("."),
                r = u.name + (u.name && s ? "." : "") + s
            }
            var f = T[r];
            return !f || !i && (i || f !== e && f.self !== e) ? n : f
        }
        function f(e, t) {
            x[e] || (x[e] = []),
            x[e].push(t)
        }
        function p(e) {
            for (var t = x[e] || []; t.length; )
                m(t.shift())
        }
        function m(t) {
            t = i(t, {
                self: t,
                resolve: t.resolve || {},
                toString: function() {
                    return this.name
                }
            });
            var n = t.name;
            if (!L(n) || n.indexOf("@") >= 0)
                throw new Error("State must have a valid name");
            if (T.hasOwnProperty(n))
                throw new Error("State '" + n + "'' is already defined");
            var r = -1 !== n.indexOf(".") ? n.substring(0, n.lastIndexOf(".")) : L(t.parent) ? t.parent : O(t.parent) && L(t.parent.name) ? t.parent.name : "";
            if (r && !T[r])
                return f(r, t.self);
            for (var o in C)
                P(C[o]) && (t[o] = C[o](t, C.$delegates[o]));
            return T[n] = t,
            !t[E] && t.url && e.when(t.url, ["$match", "$stateParams", function(e, n) {
                S.$current.navigable == t && l(e, n) || S.transitionTo(t, e, {
                    inherit: !0,
                    location: !1
                })
            }
            ]),
            p(n),
            t
        }
        function v(e) {
            return e.indexOf("*") > -1
        }
        function g(e) {
            var t = e.split(".")
              , n = S.$current.name.split(".");
            if ("**" === t[0] && (n = n.slice(s(n, t[1])),
            n.unshift("**")),
            "**" === t[t.length - 1] && (n.splice(s(n, t[t.length - 2]) + 1, Number.MAX_VALUE),
            n.push("**")),
            t.length != n.length)
                return !1;
            for (var i = 0, r = t.length; r > i; i++)
                "*" === t[i] && (n[i] = "*");
            return n.join("") === t.join("")
        }
        function $(e, t) {
            return L(e) && !M(t) ? C[e] : P(t) && L(e) ? (C[e] && !C.$delegates[e] && (C.$delegates[e] = C[e]),
            C[e] = t,
            this) : this
        }
        function w(e, t) {
            return O(e) ? t = e : t.name = e,
            m(t),
            this
        }
        function y(e, r, o, s, f, p, m) {
            function $(t, n, i, o) {
                var a = e.$broadcast("$stateNotFound", t, n, i);
                if (a.defaultPrevented)
                    return m.update(),
                    C;
                if (!a.retry)
                    return null ;
                if (o.$retry)
                    return m.update(),
                    k;
                var s = S.transition = r.when(a.retry);
                return s.then(function() {
                    return s !== S.transition ? y : (t.options.$retry = !0,
                    S.transitionTo(t.to, t.toParams, t.options))
                }
                , function() {
                    return C
                }
                ),
                m.update(),
                s
            }
            function w(e, n, i, a, c, l) {
                var d = i ? n : u(e.params.$$keys(), n)
                  , h = {
                    $stateParams: d
                };
                c.resolve = f.resolve(e.resolve, h, c.resolve, e);
                var p = [c.resolve.then(function(e) {
                    c.globals = e
                }
                )];
                return a && p.push(a),
                N(e.views, function(n, i) {
                    var r = n.resolve && n.resolve !== e.resolve ? n.resolve : {};
                    r.$template = [function() {
                        return o.load(i, {
                            view: n,
                            locals: h,
                            params: d,
                            notify: l.notify
                        }) || ""
                    }
                    ],
                    p.push(f.resolve(r, h, c.resolve, e).then(function(o) {
                        if (P(n.controllerProvider) || V(n.controllerProvider)) {
                            var a = t.extend({}, r, h);
                            o.$$controller = s.invoke(n.controllerProvider, null , a)
                        } else
                            o.$$controller = n.controller;
                        o.$$state = e,
                        o.$$controllerAs = n.controllerAs,
                        c[i] = o
                    }
                    ))
                }
                ),
                r.all(p).then(function() {
                    return c
                }
                )
            }
            var y = r.reject(new Error("transition superseded"))
              , x = r.reject(new Error("transition prevented"))
              , C = r.reject(new Error("transition aborted"))
              , k = r.reject(new Error("transition failed"));
            return b.locals = {
                resolve: null ,
                globals: {
                    $stateParams: {}
                }
            },
            S = {
                params: {},
                current: b.self,
                $current: b,
                transition: null
            },
            S.reload = function() {
                return S.transitionTo(S.current, p, {
                    reload: !0,
                    inherit: !1,
                    notify: !0
                })
            }
            ,
            S.go = function(e, t, n) {
                return S.transitionTo(e, t, B({
                    inherit: !0,
                    relative: S.$current
                }, n))
            }
            ,
            S.transitionTo = function(t, n, o) {
                n = n || {},
                o = B({
                    location: !0,
                    inherit: !1,
                    relative: null ,
                    notify: !0,
                    reload: !1,
                    $retry: !1
                }, o || {});
                var a, l = S.$current, f = S.params, h = l.path, v = d(t, o.relative);
                if (!M(v)) {
                    var g = {
                        to: t,
                        toParams: n,
                        options: o
                    }
                      , T = $(g, l.self, f, o);
                    if (T)
                        return T;
                    if (t = g.to,
                    n = g.toParams,
                    o = g.options,
                    v = d(t, o.relative),
                    !M(v)) {
                        if (!o.relative)
                            throw new Error("No such state '" + t + "'");
                        throw new Error("Could not resolve '" + t + "' from state '" + o.relative + "'")
                    }
                }
                if (v[E])
                    throw new Error("Cannot transition to abstract state '" + t + "'");
                if (o.inherit && (n = c(p, n || {}, S.$current, v)),
                !v.params.$$validates(n))
                    return k;
                n = v.params.$$values(n),
                t = v;
                var C = t.path
                  , A = 0
                  , I = C[A]
                  , D = b.locals
                  , P = [];
                if (!o.reload)
                    for (; I && I === h[A] && I.ownParams.$$equals(n, f); )
                        D = P[A] = I.locals,
                        A++,
                        I = C[A];
                if (_(t, l, D, o))
                    return t.self.reloadOnSearch !== !1 && m.update(),
                    S.transition = null ,
                    r.when(S.current);
                if (n = u(t.params.$$keys(), n || {}),
                o.notify && e.$broadcast("$stateChangeStart", t.self, n, l.self, f).defaultPrevented)
                    return m.update(),
                    x;
                for (var L = r.when(D), O = A; O < C.length; O++,
                I = C[O])
                    D = P[O] = i(D),
                    L = w(I, n, I === t, L, D, o);
                var V = S.transition = L.then(function() {
                    var i, r, a;
                    if (S.transition !== V)
                        return y;
                    for (i = h.length - 1; i >= A; i--)
                        a = h[i],
                        a.self.onExit && s.invoke(a.self.onExit, a.self, a.locals.globals),
                        a.locals = null ;
                    for (i = A; i < C.length; i++)
                        r = C[i],
                        r.locals = P[i],
                        r.self.onEnter && s.invoke(r.self.onEnter, r.self, r.locals.globals);
                    return S.transition !== V ? y : (S.$current = t,
                    S.current = t.self,
                    S.params = n,
                    R(S.params, p),
                    S.transition = null ,
                    o.location && t.navigable && m.push(t.navigable.url, t.navigable.locals.globals.$stateParams, {
                        $$avoidResync: !0,
                        replace: "replace" === o.location
                    }),
                    o.notify && e.$broadcast("$stateChangeSuccess", t.self, n, l.self, f),
                    m.update(!0),
                    S.current)
                }
                , function(i) {
                    return S.transition !== V ? y : (S.transition = null ,
                    a = e.$broadcast("$stateChangeError", t.self, n, l.self, f, i),
                    a.defaultPrevented || m.update(),
                    r.reject(i))
                }
                );
                return V
            }
            ,
            S.is = function(e, t, i) {
                i = B({
                    relative: S.$current
                }, i || {});
                var r = d(e, i.relative);
                return M(r) ? S.$current !== r ? !1 : t ? l(r.params.$$values(t), p) : !0 : n
            }
            ,
            S.includes = function(e, t, i) {
                if (i = B({
                    relative: S.$current
                }, i || {}),
                L(e) && v(e)) {
                    if (!g(e))
                        return !1;
                    e = S.$current.name
                }
                var r = d(e, i.relative);
                return M(r) ? M(S.$current.includes[r.name]) ? t ? l(r.params.$$values(t), p, a(t)) : !0 : !1 : n
            }
            ,
            S.href = function(e, t, i) {
                i = B({
                    lossy: !0,
                    inherit: !0,
                    absolute: !1,
                    relative: S.$current
                }, i || {});
                var r = d(e, i.relative);
                if (!M(r))
                    return null ;
                i.inherit && (t = c(p, t || {}, S.$current, r));
                var o = r && i.lossy ? r.navigable : r;
                return o && o.url !== n && null  !== o.url ? m.href(o.url, u(r.params.$$keys(), t || {}), {
                    absolute: i.absolute
                }) : null
            }
            ,
            S.get = function(e, t) {
                if (0 === arguments.length)
                    return h(a(T), function(e) {
                        return T[e].self
                    }
                    );
                var n = d(e, t || S.$current);
                return n && n.self ? n.self : null
            }
            ,
            S
        }
        function _(e, t, n, i) {
            return e !== t || (n !== t.locals || i.reload) && e.self.reloadOnSearch !== !1 ? void 0 : !0
        }
        var b, S, T = {}, x = {}, E = "abstract", C = {
            parent: function(e) {
                if (M(e.parent) && e.parent)
                    return d(e.parent);
                var t = /^(.+)\.[^.]+$/.exec(e.name);
                return t ? d(t[1]) : b
            },
            data: function(e) {
                return e.parent && e.parent.data && (e.data = e.self.data = B({}, e.parent.data, e.data)),
                e.data
            },
            url: function(e) {
                var t = e.url
                  , n = {
                    params: e.params || {}
                };
                if (L(t))
                    return "^" == t.charAt(0) ? r.compile(t.substring(1), n) : (e.parent.navigable || b).url.concat(t, n);
                if (!t || r.isMatcher(t))
                    return t;
                throw new Error("Invalid url '" + t + "' in state '" + e + "'")
            },
            navigable: function(e) {
                return e.url ? e : e.parent ? e.parent.navigable : null
            },
            ownParams: function(e) {
                var t = e.url && e.url.params || new H.ParamSet;
                return N(e.params || {}, function(e, n) {
                    t[n] || (t[n] = new H.Param(n,null ,e,"config"))
                }
                ),
                t
            },
            params: function(e) {
                return e.parent && e.parent.params ? B(e.parent.params.$$new(), e.ownParams) : new H.ParamSet
            },
            views: function(e) {
                var t = {};
                return N(M(e.views) ? e.views : {
                    "": e
                }, function(n, i) {
                    i.indexOf("@") < 0 && (i += "@" + e.parent.name),
                    t[i] = n
                }
                ),
                t
            },
            path: function(e) {
                return e.parent ? e.parent.path.concat(e) : []
            },
            includes: function(e) {
                var t = e.parent ? B({}, e.parent.includes) : {};
                return t[e.name] = !0,
                t
            },
            $delegates: {}
        };
        b = m({
            name: "",
            url: "^",
            views: null ,
            "abstract": !0
        }),
        b.navigable = null ,
        this.decorator = $,
        this.state = w,
        this.$get = y,
        y.$inject = ["$rootScope", "$q", "$view", "$injector", "$resolve", "$stateParams", "$urlRouter", "$location", "$urlMatcherFactory"]
    }
    function _() {
        function e(e, t) {
            return {
                load: function(n, i) {
                    var r, o = {
                        template: null ,
                        controller: null ,
                        view: null ,
                        locals: null ,
                        notify: !0,
                        async: !0,
                        params: {}
                    };
                    return i = B(o, i),
                    i.view && (r = t.fromConfig(i.view, i.params, i.locals)),
                    r && i.notify && e.$broadcast("$viewContentLoading", i),
                    r
                }
            }
        }
        this.$get = e,
        e.$inject = ["$rootScope", "$templateFactory"]
    }
    function b() {
        var e = !1;
        this.useAnchorScroll = function() {
            e = !0
        }
        ,
        this.$get = ["$anchorScroll", "$timeout", function(t, n) {
            return e ? t : function(e) {
                n(function() {
                    e[0].scrollIntoView()
                }
                , 0, !1)
            }
        }
        ]
    }
    function S(e, n, i, r) {
        function o() {
            return n.has ? function(e) {
                return n.has(e) ? n.get(e) : null
            }
             : function(e) {
                try {
                    return n.get(e)
                } catch (t) {
                    return null
                }
            }
        }
        function a(e, t) {
            var n = function() {
                return {
                    enter: function(e, t, n) {
                        t.after(e),
                        n()
                    },
                    leave: function(e, t) {
                        e.remove(),
                        t()
                    }
                }
            }
            ;
            if (l)
                return {
                    enter: function(e, t, n) {
                        var i = l.enter(e, null , t, n);
                        i && i.then && i.then(n)
                    },
                    leave: function(e, t) {
                        var n = l.leave(e, t);
                        n && n.then && n.then(t)
                    }
                };
            if (c) {
                var i = c && c(t, e);
                return {
                    enter: function(e, t, n) {
                        i.enter(e, null , t),
                        n()
                    },
                    leave: function(e, t) {
                        i.leave(e),
                        t()
                    }
                }
            }
            return n()
        }
        var s = o()
          , c = s("$animator")
          , l = s("$animate")
          , u = {
            restrict: "ECA",
            terminal: !0,
            priority: 400,
            transclude: "element",
            compile: function(n, o, s) {
                return function(n, o, c) {
                    function l() {
                        d && (d.remove(),
                        d = null ),
                        h && (h.$destroy(),
                        h = null ),
                        f && (g.leave(f, function() {
                            d = null
                        }
                        ),
                        d = f,
                        f = null )
                    }
                    function u(a) {
                        var u, d = x(n, c, o, r), $ = d && e.$current && e.$current.locals[d];
                        if (a || $ !== p) {
                            u = n.$new(),
                            p = e.$current.locals[d];
                            var w = s(u, function(e) {
                                g.enter(e, o, function() {
                                    h && h.$emit("$viewContentAnimationEnded"),
                                    (t.isDefined(v) && !v || n.$eval(v)) && i(e)
                                }
                                ),
                                l()
                            }
                            );
                            f = w,
                            h = u,
                            h.$emit("$viewContentLoaded"),
                            h.$eval(m)
                        }
                    }
                    var d, f, h, p, m = c.onload || "", v = c.autoscroll, g = a(c, n);
                    n.$on("$stateChangeSuccess", function() {
                        u(!1)
                    }
                    ),
                    n.$on("$viewContentLoading", function() {
                        u(!1)
                    }
                    ),
                    u(!0)
                }
            }
        };
        return u
    }
    function T(e, t, n, i) {
        return {
            restrict: "ECA",
            priority: -400,
            compile: function(r) {
                var o = r.html();
                return function(r, a, s) {
                    var c = n.$current
                      , l = x(r, s, a, i)
                      , u = c && c.locals[l];
                    if (u) {
                        a.data("$uiView", {
                            name: l,
                            state: u.$$state
                        }),
                        a.html(u.$template ? u.$template : o);
                        var d = e(a.contents());
                        if (u.$$controller) {
                            u.$scope = r;
                            var f = t(u.$$controller, u);
                            u.$$controllerAs && (r[u.$$controllerAs] = f),
                            a.data("$ngControllerController", f),
                            a.children().data("$ngControllerController", f)
                        }
                        d(r)
                    }
                }
            }
        }
    }
    function x(e, t, n, i) {
        var r = i(t.uiView || t.name || "")(e)
          , o = n.inheritedData("$uiView");
        return r.indexOf("@") >= 0 ? r : r + "@" + (o ? o.state.name : "")
    }
    function E(e, t) {
        var n, i = e.match(/^\s*({[^}]*})\s*$/);
        if (i && (e = t + "(" + i[1] + ")"),
        n = e.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/),
        !n || 4 !== n.length)
            throw new Error("Invalid state ref '" + e + "'");
        return {
            state: n[1],
            paramExpr: n[3] || null
        }
    }
    function C(e) {
        var t = e.parent().inheritedData("$uiView");
        return t && t.state && t.state.name ? t.state : void 0
    }
    function k(e, n) {
        var i = ["location", "inherit", "reload"];
        return {
            restrict: "A",
            require: ["?^uiSrefActive", "?^uiSrefActiveEq"],
            link: function(r, o, a, s) {
                var c = E(a.uiSref, e.current.name)
                  , l = null
                  , u = C(o) || e.$current
                  , d = null
                  , f = "A" === o.prop("tagName")
                  , h = "FORM" === o[0].nodeName
                  , p = h ? "action" : "href"
                  , m = !0
                  , v = {
                    relative: u,
                    inherit: !0
                }
                  , g = r.$eval(a.uiSrefOpts) || {};
                t.forEach(i, function(e) {
                    e in g && (v[e] = g[e])
                }
                );
                var $ = function(n) {
                    if (n && (l = t.copy(n)),
                    m) {
                        d = e.href(c.state, l, v);
                        var i = s[1] || s[0];
                        return i && i.$$setStateInfo(c.state, l),
                        null  === d ? (m = !1,
                        !1) : void a.$set(p, d)
                    }
                }
                ;
                c.paramExpr && (r.$watch(c.paramExpr, function(e) {
                    e !== l && $(e)
                }
                , !0),
                l = t.copy(r.$eval(c.paramExpr))),
                $(),
                h || o.bind("click", function(t) {
                    var i = t.which || t.button;
                    if (!(i > 1 || t.ctrlKey || t.metaKey || t.shiftKey || o.attr("target"))) {
                        var r = n(function() {
                            e.go(c.state, l, v)
                        }
                        );
                        t.preventDefault();
                        var a = f && !d ? 1 : 0;
                        t.preventDefault = function() {
                            a-- <= 0 && n.cancel(r)
                        }
                    }
                }
                )
            }
        }
    }
    function A(e, t, n) {
        return {
            restrict: "A",
            controller: ["$scope", "$element", "$attrs", function(t, i, r) {
                function o() {
                    a() ? i.addClass(l) : i.removeClass(l)
                }
                function a() {
                    return "undefined" != typeof r.uiSrefActiveEq ? s && e.is(s.name, c) : s && e.includes(s.name, c)
                }
                var s, c, l;
                l = n(r.uiSrefActiveEq || r.uiSrefActive || "", !1)(t),
                this.$$setStateInfo = function(t, n) {
                    s = e.get(t, C(i)),
                    c = n,
                    o()
                }
                ,
                t.$on("$stateChangeSuccess", o)
            }
            ]
        }
    }
    function I(e) {
        var t = function(t) {
            return e.is(t)
        }
        ;
        return t.$stateful = !0,
        t
    }
    function D(e) {
        var t = function(t) {
            return e.includes(t)
        }
        ;
        return t.$stateful = !0,
        t
    }
    var M = t.isDefined
      , P = t.isFunction
      , L = t.isString
      , O = t.isObject
      , V = t.isArray
      , N = t.forEach
      , B = t.extend
      , R = t.copy;
    t.module("ui.router.util", ["ng"]),
    t.module("ui.router.router", ["ui.router.util"]),
    t.module("ui.router.state", ["ui.router.router", "ui.router.util"]),
    t.module("ui.router", ["ui.router.state"]),
    t.module("ui.router.compat", ["ui.router"]),
    p.$inject = ["$q", "$injector"],
    t.module("ui.router.util").service("$resolve", p),
    m.$inject = ["$http", "$templateCache", "$injector"],
    t.module("ui.router.util").service("$templateFactory", m);
    var H;
    v.prototype.concat = function(e, t) {
        var n = {
            caseInsensitive: H.caseInsensitive(),
            strict: H.strictMode(),
            squash: H.defaultSquashPolicy()
        };
        return new v(this.sourcePath + e + this.sourceSearch,B(n, t),this)
    }
    ,
    v.prototype.toString = function() {
        return this.source
    }
    ,
    v.prototype.exec = function(e, t) {
        function n(e) {
            function t(e) {
                return e.split("").reverse().join("")
            }
            function n(e) {
                return e.replace(/\\-/, "-")
            }
            var i = t(e).split(/-(?!\\)/)
              , r = h(i, t);
            return h(r, n).reverse()
        }
        var i = this.regexp.exec(e);
        if (!i)
            return null ;
        t = t || {};
        var r, o, a, s = this.parameters(), c = s.length, l = this.segments.length - 1, u = {};
        if (l !== i.length - 1)
            throw new Error("Unbalanced capture group in route '" + this.source + "'");
        for (r = 0; l > r; r++) {
            a = s[r];
            var d = this.params[a]
              , f = i[r + 1];
            for (o = 0; o < d.replace; o++)
                d.replace[o].from === f && (f = d.replace[o].to);
            f && d.array === !0 && (f = n(f)),
            u[a] = d.value(f)
        }
        for (; c > r; r++)
            a = s[r],
            u[a] = this.params[a].value(t[a]);
        return u
    }
    ,
    v.prototype.parameters = function(e) {
        return M(e) ? this.params[e] || null  : this.$$paramNames
    }
    ,
    v.prototype.validates = function(e) {
        return this.params.$$validates(e)
    }
    ,
    v.prototype.format = function(e) {
        function t(e) {
            return encodeURIComponent(e).replace(/-/g, function(e) {
                return "%5C%" + e.charCodeAt(0).toString(16).toUpperCase()
            }
            )
        }
        e = e || {};
        var n = this.segments
          , i = this.parameters()
          , r = this.params;
        if (!this.validates(e))
            return null ;
        var o, a = !1, s = n.length - 1, c = i.length, l = n[0];
        for (o = 0; c > o; o++) {
            var u = s > o
              , d = i[o]
              , f = r[d]
              , p = f.value(e[d])
              , m = f.isOptional && f.type.equals(f.value(), p)
              , v = m ? f.squash : !1
              , g = f.type.encode(p);
            if (u) {
                var $ = n[o + 1];
                if (v === !1)
                    null  != g && (l += V(g) ? h(g, t).join("-") : encodeURIComponent(g)),
                    l += $;
                else if (v === !0) {
                    var w = l.match(/\/$/) ? /\/?(.*)/ : /(.*)/;
                    l += $.match(w)[1]
                } else
                    L(v) && (l += v + $)
            } else {
                if (null  == g || m && v !== !1)
                    continue;V(g) || (g = [g]),
                g = h(g, encodeURIComponent).join("&" + d + "="),
                l += (a ? "&" : "?") + (d + "=" + g),
                a = !0
            }
        }
        return l
    }
    ,
    g.prototype.is = function() {
        return !0
    }
    ,
    g.prototype.encode = function(e) {
        return e
    }
    ,
    g.prototype.decode = function(e) {
        return e
    }
    ,
    g.prototype.equals = function(e, t) {
        return e == t
    }
    ,
    g.prototype.$subPattern = function() {
        var e = this.pattern.toString();
        return e.substr(1, e.length - 2)
    }
    ,
    g.prototype.pattern = /.*/,
    g.prototype.toString = function() {
        return "{Type:" + this.name + "}"
    }
    ,
    g.prototype.$asArray = function(e, t) {
        function i(e, t) {
            function i(e, t) {
                return function() {
                    return e[t].apply(e, arguments)
                }
            }
            function r(e) {
                return V(e) ? e : M(e) ? [e] : []
            }
            function o(e) {
                switch (e.length) {
                case 0:
                    return n;
                case 1:
                    return "auto" === t ? e[0] : e;
                default:
                    return e
                }
            }
            function a(e) {
                return !e
            }
            function s(e, t) {
                return function(n) {
                    n = r(n);
                    var i = h(n, e);
                    return t === !0 ? 0 === f(i, a).length : o(i)
                }
            }
            function c(e) {
                return function(t, n) {
                    var i = r(t)
                      , o = r(n);
                    if (i.length !== o.length)
                        return !1;
                    for (var a = 0; a < i.length; a++)
                        if (!e(i[a], o[a]))
                            return !1;
                    return !0
                }
            }
            this.encode = s(i(e, "encode")),
            this.decode = s(i(e, "decode")),
            this.is = s(i(e, "is"), !0),
            this.equals = c(i(e, "equals")),
            this.pattern = e.pattern,
            this.$arrayMode = t
        }
        if (!e)
            return this;
        if ("auto" === e && !t)
            throw new Error("'auto' array mode is for query parameters only");
        return new i(this,e)
    }
    ,
    t.module("ui.router.util").provider("$urlMatcherFactory", $),
    t.module("ui.router.util").run(["$urlMatcherFactory", function() {}
    ]),
    w.$inject = ["$locationProvider", "$urlMatcherFactoryProvider"],
    t.module("ui.router.router").provider("$urlRouter", w),
    y.$inject = ["$urlRouterProvider", "$urlMatcherFactoryProvider"],
    t.module("ui.router.state").value("$stateParams", {}).provider("$state", y),
    _.$inject = [],
    t.module("ui.router.state").provider("$view", _),
    t.module("ui.router.state").provider("$uiViewScroll", b),
    S.$inject = ["$state", "$injector", "$uiViewScroll", "$interpolate"],
    T.$inject = ["$compile", "$controller", "$state", "$interpolate"],
    t.module("ui.router.state").directive("uiView", S),
    t.module("ui.router.state").directive("uiView", T),
    k.$inject = ["$state", "$timeout"],
    A.$inject = ["$state", "$stateParams", "$interpolate"],
    t.module("ui.router.state").directive("uiSref", k).directive("uiSrefActive", A).directive("uiSrefActiveEq", A),
    I.$inject = ["$state"],
    D.$inject = ["$state"],
    t.module("ui.router.state").filter("isState", I).filter("includedByState", D)
}
(window, window.angular),
!function() {
    function e(e, t, n, i, r, o) {
        function a(i, a, s, c, l) {
            function d() {
                B.resizeRequiresRefresh(w.__clientWidth, w.__clientHeight) && v()
            }
            function f() {
                var e;
                return e = {
                    dataLength: 0,
                    width: 0,
                    height: 0,
                    resizeRequiresRefresh: function(t, n) {
                        var i = e.dataLength && t && n && (t !== e.width || n !== e.height);
                        return e.width = t,
                        e.height = n,
                        !!i
                    },
                    dataChangeRequiresRefresh: function(t) {
                        var n = t.length > 0 || t.length < e.dataLength;
                        return e.dataLength = t.length,
                        !!n
                    }
                }
            }
            function h() {
                return x || (x = new e({
                    afterItemsNode: N[0],
                    containerNode: _,
                    heightData: A,
                    widthData: I,
                    forceRefreshImages: !(!u(s.forceRefreshImages) || "false" === s.forceRefreshImages),
                    keyExpression: E,
                    renderBuffer: L,
                    scope: i,
                    scrollView: c.scrollView,
                    transclude: l
                }))
            }
            function p() {
                var e = angular.element(w.__content.querySelector(".collection-repeat-after-container"));
                if (!e.length) {
                    var t = !1
                      , n = [].filter.call(w.__content.childNodes, function(e) {
                        return ionic.DomUtil.contains(e, _) ? (t = !0,
                        !1) : t
                    }
                    );
                    e = angular.element('<span class="collection-repeat-after-container">'),
                    w.options.scrollingX && e.addClass("horizontal"),
                    e.append(n),
                    w.__content.appendChild(e[0])
                }
                return e
            }
            function m() {
                O ? g(O, A) : A.computed = !0,
                V ? g(V, I) : I.computed = !0
            }
            function v() {
                var e = M.length > 0;
                if (e && (A.computed || I.computed) && $(),
                e && A.computed) {
                    if (A.value = D.height,
                    !A.value)
                        throw new Error('collection-repeat tried to compute the height of repeated elements "' + S + '", but was unable to. Please provide the "item-height" attribute. http://ionicframework.com/docs/api/directive/collectionRepeat/')
                } else
                    !A.dynamic && A.getValue && (A.value = A.getValue());
                if (e && I.computed) {
                    if (I.value = D.width,
                    !I.value)
                        throw new Error('collection-repeat tried to compute the width of repeated elements "' + S + '", but was unable to. Please provide the "item-width" attribute. http://ionicframework.com/docs/api/directive/collectionRepeat/')
                } else
                    !I.dynamic && I.getValue && (I.value = I.getValue());
                h().refreshLayout()
            }
            function g(e, n) {
                if (e) {
                    var i;
                    try {
                        i = t(e)
                    } catch (r) {
                        e.trim().match(/\d+(px|%)$/) && (e = '"' + e + '"'),
                        i = t(e)
                    }
                    var o = e.replace(/(\'|\"|px|%)/g, "").trim()
                      , a = o.length && !/([a-zA-Z]|\$|:|\?)/.test(o);
                    if (n.attrValue = e,
                    a) {
                        var s = parseInt(i());
                        if (e.indexOf("%") > -1) {
                            var c = s / 100;
                            n.getValue = n === A ? function() {
                                return Math.floor(c * w.__clientHeight)
                            }
                             : function() {
                                return Math.floor(c * w.__clientWidth)
                            }
                        } else
                            n.value = s
                    } else
                        n.dynamic = !0,
                        n.getValue = n === A ? function(e, t) {
                            var n = i(e, t);
                            return n.charAt && "%" === n.charAt(n.length - 1) ? Math.floor(parseInt(n) / 100 * w.__clientHeight) : parseInt(n)
                        }
                         : function(e, t) {
                            var n = i(e, t);
                            return n.charAt && "%" === n.charAt(n.length - 1) ? Math.floor(parseInt(n) / 100 * w.__clientWidth) : parseInt(n)
                        }
                }
            }
            function $() {
                H || l(z = i.$new(), function(e) {
                    e[0].removeAttribute("collection-repeat"),
                    H = e[0]
                }
                ),
                z[E] = (k(i) || [])[0],
                r.$$phase || z.$digest(),
                _.appendChild(H);
                var e = n.getComputedStyle(H);
                D.width = parseInt(e.width),
                D.height = parseInt(e.height),
                _.removeChild(H)
            }
            var w = c.scrollView
              , y = a[0]
              , _ = angular.element('<div class="collection-repeat-container">')[0];
            if (y.parentNode.replaceChild(_, y),
            w.options.scrollingX && w.options.scrollingY)
                throw new Error("collection-repeat expected a parent x or y scrollView, not an xy scrollView.");
            var S = s.collectionRepeat
              , T = S.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
            if (!T)
                throw new Error("collection-repeat expected expression in form of '_item_ in _collection_[ track by _id_]' but got '" + s.collectionRepeat + "'.");
            var x, E = T[1], C = T[2], k = t(C), A = {}, I = {}, D = {}, M = [], P = s.itemRenderBuffer || s.collectionBufferSize, L = angular.isDefined(P) ? parseInt(P) : b, O = s.itemHeight || s.collectionItemHeight, V = s.itemWidth || s.collectionItemWidth, N = p(), B = f();
            m(),
            c.$element.on("scroll-resize", v),
            angular.element(n).on("resize", d);
            var R = r.$on("$ionicExposeAside", ionic.animationFrameThrottle(function() {
                c.scrollView.resize(),
                d()
            }
            ));
            o(v, 0, !1),
            i.$watchCollection(k, function(e) {
                if (M = e || (e = []),
                !angular.isArray(e))
                    throw new Error("collection-repeat expected an array for '" + C + "', but got a " + typeof value);
                i.$$postDigest(function() {
                    h().setData(M),
                    B.dataChangeRequiresRefresh(M) && v()
                }
                )
            }
            ),
            i.$on("$destroy", function() {
                angular.element(n).off("resize", d),
                R(),
                c.$element && c.$element.off("scroll-resize", v),
                H && H.parentNode && H.parentNode.removeChild(H),
                z && z.$destroy(),
                z = H = null ,
                x && x.destroy(),
                x = null
            }
            );
            var H, z
        }
        return {
            restrict: "A",
            priority: 1e3,
            transclude: "element",
            $$tlb: !0,
            require: "^^$ionicScroll",
            link: a
        }
    }
    function t(e, t, n) {
        var i = {
            primaryPos: 0,
            secondaryPos: 0,
            primarySize: 0,
            secondarySize: 0,
            rowPrimarySize: 0
        };
        return function(r) {
            function o() {
                return a(!0)
            }
            function a(t) {
                if (!a.destroyed) {
                    var n, r, o, l, u, d = ee.getScrollValue(), f = d + ee.scrollPrimarySize;
                    ee.updateRenderRange(d, f),
                    q = Math.max(0, q - x),
                    G = Math.min(A.length - 1, G + x);
                    for (n in Z)
                        (q > n || n > G) && (o = Z[n],
                        delete Z[n],
                        X.push(o),
                        o.isShown = !1);
                    for (n = q; G >= n; n++)
                        n >= A.length || Z[n] && !t || (o = Z[n] || (Z[n] = X.length ? X.pop() : Y.length ? Y.shift() : new c),
                        K.push(o),
                        o.isShown = !0,
                        u = o.scope,
                        u.$index = n,
                        u[T] = A[n],
                        u.$first = 0 === n,
                        u.$last = n === A.length - 1,
                        u.$middle = !(u.$first || u.$last),
                        u.$odd = !(u.$even = 0 === (1 & n)),
                        u.$$disconnected && ionic.Utils.reconnectScope(o.scope),
                        l = ee.getDimensions(n),
                        (o.secondaryPos !== l.secondaryPos || o.primaryPos !== l.primaryPos) && (o.node.style[ionic.CSS.TRANSFORM] = H.replace(B, o.primaryPos = l.primaryPos).replace(R, o.secondaryPos = l.secondaryPos)),
                        (o.secondarySize !== l.secondarySize || o.primarySize !== l.primarySize) && (o.node.style.cssText = o.node.style.cssText.replace(_, z.replace(B, (o.primarySize = l.primarySize) + 1).replace(R, o.secondarySize = l.secondarySize))));
                    for (G === A.length - 1 && (l = ee.getDimensions(A.length - 1) || i,
                    g.style[ionic.CSS.TRANSFORM] = H.replace(B, l.primaryPos + l.primarySize).replace(R, 0)); X.length; )
                        o = X.pop(),
                        o.scope.$broadcast("$collectionRepeatLeave"),
                        ionic.Utils.disconnectScope(o.scope),
                        Y.push(o),
                        o.node.style[ionic.CSS.TRANSFORM] = "translate3d(-9999px,-9999px,0)",
                        o.primaryPos = o.secondaryPos = null ;
                    if (w)
                        for (n = 0,
                        r = K.length; r > n && (o = K[n]); n++)
                            if (o.images)
                                for (var h, p = 0, m = o.images.length; m > p && (h = o.images[p]); p++) {
                                    var v = h.src;
                                    h.src = y,
                                    h.src = v
                                }
                    if (t)
                        for (var $ = e.$$phase; K.length; )
                            o = K.pop(),
                            $ || o.scope.$digest();
                    else
                        s()
                }
            }
            function s() {
                var t;
                s.running || (s.running = !0,
                n(function() {
                    for (var n = e.$$phase; K.length; )
                        t = K.pop(),
                        t.isShown && (n || t.scope.$digest());
                    s.running = !1
                }
                ))
            }
            function c() {
                var e = this;
                this.scope = E.$new(),
                this.id = "item" + J++,
                k(this.scope, function(t) {
                    e.element = t,
                    e.element.data("$$collectionRepeatItem", e),
                    e.node = t[0],
                    e.node.style[ionic.CSS.TRANSFORM] = "translate3d(-9999px,-9999px,0)",
                    e.node.style.cssText += " height: 0px; width: 0px;",
                    ionic.Utils.disconnectScope(e.scope),
                    $.appendChild(e.node),
                    e.images = t[0].getElementsByTagName("img")
                }
                )
            }
            function l() {
                this.getItemPrimarySize = M,
                this.getItemSecondarySize = L,
                this.getScrollValue = function() {
                    return Math.max(0, Math.min(C.__scrollTop - F, C.__maxScrollTop - F - U))
                }
                ,
                this.refreshDirection = function() {
                    this.scrollPrimarySize = C.__clientHeight,
                    this.scrollSecondarySize = C.__clientWidth,
                    this.estimatedPrimarySize = m,
                    this.estimatedSecondarySize = v,
                    this.estimatedItemsAcross = V && Math.floor(C.__clientWidth / v) || 1
                }
            }
            function u() {
                this.getItemPrimarySize = L,
                this.getItemSecondarySize = M,
                this.getScrollValue = function() {
                    return Math.max(0, Math.min(C.__scrollLeft - F, C.__maxScrollLeft - F - U))
                }
                ,
                this.refreshDirection = function() {
                    this.scrollPrimarySize = C.__clientWidth,
                    this.scrollSecondarySize = C.__clientHeight,
                    this.estimatedPrimarySize = v,
                    this.estimatedSecondarySize = m,
                    this.estimatedItemsAcross = V && Math.floor(C.__clientHeight / m) || 1
                }
            }
            function d() {
                this.getEstimatedSecondaryPos = function(e) {
                    return e % this.estimatedItemsAcross * this.estimatedSecondarySize
                }
                ,
                this.getEstimatedPrimaryPos = function(e) {
                    return Math.floor(e / this.estimatedItemsAcross) * this.estimatedPrimarySize
                }
                ,
                this.getEstimatedIndex = function(e) {
                    return Math.floor(e / this.estimatedPrimarySize) * this.estimatedItemsAcross
                }
            }
            function f() {
                this.getEstimatedSecondaryPos = function() {
                    return 0
                }
                ,
                this.getEstimatedPrimaryPos = function(e) {
                    return e * this.estimatedPrimarySize
                }
                ,
                this.getEstimatedIndex = function(e) {
                    return Math.floor(e / this.estimatedPrimarySize)
                }
            }
            function h() {
                this.getContentSize = function() {
                    return this.getEstimatedPrimaryPos(A.length - 1) + this.estimatedPrimarySize + F + U
                }
                ;
                var e = {};
                this.getDimensions = function(t) {
                    return e.primaryPos = this.getEstimatedPrimaryPos(t),
                    e.secondaryPos = this.getEstimatedSecondaryPos(t),
                    e.primarySize = this.estimatedPrimarySize,
                    e.secondarySize = this.estimatedSecondarySize,
                    e
                }
                ,
                this.updateRenderRange = function(e, t) {
                    q = Math.max(0, this.getEstimatedIndex(e)),
                    G = Math.min(A.length - 1, this.getEstimatedIndex(t) + this.estimatedItemsAcross - 1),
                    W = Math.max(0, this.getEstimatedPrimaryPos(q)),
                    j = this.getEstimatedPrimaryPos(G) + this.estimatedPrimarySize
                }
            }
            function p() {
                function e(e) {
                    var t, o, a;
                    for (t = Math.max(0, n); e >= t && (a = s[t]); t++)
                        o = s[t - 1] || i,
                        a.primarySize = r.getItemPrimarySize(t, A[t]),
                        a.secondarySize = r.scrollSecondarySize,
                        a.primaryPos = o.primaryPos + o.primarySize,
                        a.secondaryPos = 0
                }
                function t(e) {
                    var t, o, a;
                    for (t = Math.max(n, 0); e >= t && (a = s[t]); t++)
                        o = s[t - 1] || i,
                        a.secondarySize = Math.min(r.getItemSecondarySize(t, A[t]), r.scrollSecondarySize),
                        a.secondaryPos = o.secondaryPos + o.secondarySize,
                        0 === t || a.secondaryPos + a.secondarySize > r.scrollSecondarySize ? (a.secondaryPos = 0,
                        a.primarySize = r.getItemPrimarySize(t, A[t]),
                        a.primaryPos = o.primaryPos + o.rowPrimarySize,
                        a.rowStartIndex = t,
                        a.rowPrimarySize = a.primarySize) : (a.primarySize = r.getItemPrimarySize(t, A[t]),
                        a.primaryPos = o.primaryPos,
                        a.rowStartIndex = o.rowStartIndex,
                        s[a.rowStartIndex].rowPrimarySize = a.rowPrimarySize = Math.max(s[a.rowStartIndex].rowPrimarySize, a.primarySize),
                        a.rowPrimarySize = Math.max(a.primarySize, a.rowPrimarySize))
                }
                var n, r = this, o = ionic.debounce(Q, 25, !0), a = V ? t : e, s = [];
                this.getContentSize = function() {
                    var e = s[n] || i;
                    return (e.primaryPos + e.primarySize || 0) + this.getEstimatedPrimaryPos(A.length - n - 1) + F + U
                }
                ,
                this.onDestroy = function() {
                    s.length = 0
                }
                ,
                this.onRefreshData = function() {
                    var e, t;
                    for (e = s.length,
                    t = A.length; t > e; e++)
                        s.push({});
                    n = -1
                }
                ,
                this.onRefreshLayout = function() {
                    n = -1
                }
                ,
                this.getDimensions = function(e) {
                    return e = Math.min(e, A.length - 1),
                    e > n && (e > .9 * A.length ? (a(A.length - 1),
                    n = A.length - 1,
                    Q()) : (a(e),
                    n = e,
                    o())),
                    s[e]
                }
                ;
                var c = -1
                  , l = -1;
                this.updateRenderRange = function(e, t) {
                    var n, i, r;
                    if (this.getDimensions(2 * this.getEstimatedIndex(t)),
                    -1 === c || 0 === e)
                        n = 0;
                    else if (e >= l)
                        for (n = c,
                        i = A.length; i > n && !((r = this.getDimensions(n)) && r.primaryPos + r.rowPrimarySize >= e); n++)
                            ;
                    else
                        for (n = c; n >= 0; n--)
                            if ((r = this.getDimensions(n)) && r.primaryPos <= e) {
                                n = V ? r.rowStartIndex : n;
                                break
                            }
                    q = Math.min(Math.max(0, n), A.length - 1),
                    W = -1 !== q ? this.getDimensions(q).primaryPos : -1;
                    var o;
                    for (n = q + 1,
                    i = A.length; i > n; n++)
                        if ((r = this.getDimensions(n)) && r.primaryPos + r.rowPrimarySize > t) {
                            if (V)
                                for (o = r; i - 1 > n && (r = this.getDimensions(n + 1)).primaryPos === o.primaryPos; )
                                    n++;
                            break
                        }
                    G = Math.min(n, A.length - 1),
                    j = -1 !== G ? (r = this.getDimensions(G)).primaryPos + (r.rowPrimarySize || r.primarySize) : -1,
                    l = e,
                    c = q
                }
            }
            var m, v, g = r.afterItemsNode, $ = r.containerNode, w = r.forceRefreshImages, b = r.heightData, S = r.widthData, T = r.keyExpression, x = r.renderBuffer, E = r.scope, C = r.scrollView, k = r.transclude, A = [], I = {}, D = b.getValue || function() {
                return b.value
            }
            , M = function(e, t) {
                return I[T] = t,
                I.$index = e,
                D(E, I)
            }
            , P = S.getValue || function() {
                return S.value
            }
            , L = function(e, t) {
                return I[T] = t,
                I.$index = e,
                P(E, I)
            }
            , O = !!C.options.scrollingY, V = O ? S.dynamic || S.value !== C.__clientWidth : b.dynamic || b.value !== C.__clientHeight, N = !b.dynamic && !S.dynamic, B = "PRIMARY", R = "SECONDARY", H = O ? "translate3d(SECONDARYpx,PRIMARYpx,0)" : "translate3d(PRIMARYpx,SECONDARYpx,0)", z = O ? "height: PRIMARYpx; width: SECONDARYpx;" : "height: SECONDARYpx; width: PRIMARYpx;", F = 0, U = 0, q = -1, G = -1, j = -1, W = -1, Y = [], X = [], K = [], Z = {}, J = 0, Q = O ? function() {
                C.setDimensions(null , null , null , ee.getContentSize(), !0)
            }
             : function() {
                C.setDimensions(null , null , ee.getContentSize(), null , !0)
            }
            , ee = O ? new l : new u;
            (V ? d : f).call(ee),
            (N ? h : p).call(ee);
            var te = O ? "getContentHeight" : "getContentWidth"
              , ne = C.options[te];
            C.options[te] = angular.bind(ee, ee.getContentSize),
            C.__$callback = C.__callback,
            C.__callback = function(e, t, n, i) {
                var r = ee.getScrollValue();
                (-1 === q || r + ee.scrollPrimarySize > j || W > r) && a(),
                C.__$callback(e, t, n, i)
            }
            ;
            var ie = !1
              , re = !1;
            this.refreshLayout = function() {
                A.length ? (m = M(0, A[0]),
                v = L(0, A[0])) : (m = 100,
                v = 100);
                var e = getComputedStyle(g) || {}
                  , n = g.firstElementChild && getComputedStyle(g.firstElementChild) || {}
                  , i = g.lastElementChild && getComputedStyle(g.lastElementChild) || {};
                U = (parseInt(e[O ? "height" : "width"]) || 0) + (n && parseInt(n[O ? "marginTop" : "marginLeft"]) || 0) + (i && parseInt(i[O ? "marginBottom" : "marginRight"]) || 0),
                F = 0;
                var r = $;
                do
                    F += r[O ? "offsetTop" : "offsetLeft"];
                while (ionic.DomUtil.contains(C.__content, r = r.offsetParent));var a = $.previousElementSibling
                  , s = a ? t.getComputedStyle(a) : {}
                  , l = parseInt(s[O ? "marginBottom" : "marginRight"] || 0);
                if ($.style[ionic.CSS.TRANSFORM] = H.replace(B, -l).replace(R, 0),
                F -= l,
                C.__clientHeight && C.__clientWidth || (C.__clientWidth = C.__container.clientWidth,
                C.__clientHeight = C.__container.clientHeight),
                (ee.onRefreshLayout || angular.noop)(),
                ee.refreshDirection(),
                Q(),
                !ie)
                    for (var u = Math.max(20, 3 * x), d = 0; u > d; d++)
                        Y.push(new c);
                ie = !0,
                ie && re && ((C.__scrollLeft > C.__maxScrollLeft || C.__scrollTop > C.__maxScrollTop) && C.resize(),
                o(!0))
            }
            ,
            this.setData = function(e) {
                A = e,
                (ee.onRefreshData || angular.noop)(),
                re = !0
            }
            ,
            this.destroy = function() {
                a.destroyed = !0,
                Y.forEach(function(e) {
                    e.scope.$destroy(),
                    e.scope = e.element = e.node = e.images = null
                }
                ),
                Y.length = K.length = X.length = 0,
                Z = {},
                C.options[te] = ne,
                C.__callback = C.__$callback,
                C.resize(),
                (ee.onDestroy || angular.noop)()
            }
        }
    }
    function n(e) {
        return ["$ionicGesture", "$parse", function(t, n) {
            var i = e.substr(2).toLowerCase();
            return function(r, o, a) {
                var s = n(a[e])
                  , c = function(e) {
                    r.$apply(function() {
                        s(r, {
                            $event: e
                        })
                    }
                    )
                }
                  , l = t.on(i, c, o);
                r.$on("$destroy", function() {
                    t.off(l, i, c)
                }
                )
            }
        }
        ]
    }
    function i() {
        return ["$ionicScrollDelegate", function(e) {
            return {
                restrict: "E",
                link: function(t, n, i) {
                    function r(t) {
                        for (var i = 3, r = t.target; i-- && r; ) {
                            if (r.classList.contains("button") || r.tagName.match(/input|textarea|select/i) || r.isContentEditable)
                                return;
                            r = r.parentNode
                        }
                        var o = t.gesture && t.gesture.touches[0] || t.detail.touches[0]
                          , a = n[0].getBoundingClientRect();
                        ionic.DomUtil.rectContains(o.pageX, o.pageY, a.left, a.top - 20, a.left + a.width, a.top + a.height) && e.scrollTop(!0)
                    }
                    "true" != i.noTapScroll && (ionic.on("tap", r, n[0]),
                    t.$on("$destroy", function() {
                        ionic.off("tap", r, n[0])
                    }
                    ))
                }
            }
        }
        ]
    }
    function r(e) {
        return ["$document", "$timeout", function(t, n) {
            return {
                restrict: "E",
                controller: "$ionicHeaderBar",
                compile: function(i) {
                    function r(t, n, i, r) {
                        e ? (t.$watch(function() {
                            return n[0].className
                        }
                        , function(e) {
                            var n = -1 === e.indexOf("ng-hide")
                              , i = -1 !== e.indexOf("bar-subheader");
                            t.$hasHeader = n && !i,
                            t.$hasSubheader = n && i,
                            t.$emit("$ionicSubheader", t.$hasSubheader)
                        }
                        ),
                        t.$on("$destroy", function() {
                            delete t.$hasHeader,
                            delete t.$hasSubheader
                        }
                        ),
                        r.align(),
                        t.$on("$ionicHeader.align", function() {
                            ionic.requestAnimationFrame(function() {
                                r.align()
                            }
                            )
                        }
                        )) : (t.$watch(function() {
                            return n[0].className
                        }
                        , function(e) {
                            var n = -1 === e.indexOf("ng-hide")
                              , i = -1 !== e.indexOf("bar-subfooter");
                            t.$hasFooter = n && !i,
                            t.$hasSubfooter = n && i
                        }
                        ),
                        t.$on("$destroy", function() {
                            delete t.$hasFooter,
                            delete t.$hasSubfooter
                        }
                        ),
                        t.$watch("$hasTabs", function(e) {
                            n.toggleClass("has-tabs", !!e)
                        }
                        ))
                    }
                    return i.addClass(e ? "bar bar-header" : "bar bar-footer"),
                    n(function() {
                        e && t[0].getElementsByClassName("tabs-top").length && i.addClass("has-tabs-top")
                    }
                    ),
                    {
                        pre: r
                    }
                }
            }
        }
        ]
    }
    function o(e) {
        return e.clientHeight
    }
    function a(e) {
        e.stopPropagation()
    }
    e.$inject = ["e", "t", "n", "i", "o", "r"],
    t.$inject = ["e", "t", "n"];
    var s = angular.module("ionic", ["ngAnimate", "ngSanitize", "ui.router"])
      , c = angular.extend
      , l = angular.forEach
      , u = angular.isDefined
      , d = angular.isNumber
      , f = angular.isString
      , h = angular.element
      , p = angular.noop;
    s.factory("$ionicActionSheet", ["$rootScope", "$compile", "$animate", "$timeout", "$ionicTemplateLoader", "$ionicPlatform", "$ionicBody", "IONIC_BACK_PRIORITY", function(e, t, n, i, r, o, a, s) {
        function l(r) {
            function l(e) {
                e && /icon/.test(e) && (u.$actionSheetHasIcon = !0)
            }
            var u = e.$new(!0);
            c(u, {
                cancel: p,
                destructiveButtonClicked: p,
                buttonClicked: p,
                $deregisterBackButton: p,
                buttons: [],
                cancelOnStateChange: !0
            }, r || {});
            for (var d = 0; d < u.buttons.length; d++)
                l(u.buttons[d].text);
            l(u.cancelText),
            l(u.destructiveText);
            var f = u.element = t('<ion-action-sheet ng-class="cssClass" buttons="buttons"></ion-action-sheet>')(u)
              , m = h(f[0].querySelector(".action-sheet-wrapper"))
              , v = u.cancelOnStateChange ? e.$on("$stateChangeSuccess", function() {
                u.cancel()
            }
            ) : p;
            return u.removeSheet = function(e) {
                u.removed || (u.removed = !0,
                m.removeClass("action-sheet-up"),
                i(function() {
                    a.removeClass("action-sheet-open")
                }
                , 400),
                u.$deregisterBackButton(),
                v(),
                n.removeClass(f, "active").then(function() {
                    u.$destroy(),
                    f.remove(),
                    u.cancel.$scope = m = null ,
                    (e || p)()
                }
                ))
            }
            ,
            u.showSheet = function(e) {
                u.removed || (a.append(f).addClass("action-sheet-open"),
                n.addClass(f, "active").then(function() {
                    u.removed || (e || p)()
                }
                ),
                i(function() {
                    u.removed || m.addClass("action-sheet-up")
                }
                , 20, !1))
            }
            ,
            u.$deregisterBackButton = o.registerBackButtonAction(function() {
                i(u.cancel)
            }
            , s.actionSheet),
            u.cancel = function() {
                u.removeSheet(r.cancel)
            }
            ,
            u.buttonClicked = function(e) {
                r.buttonClicked(e, r.buttons[e]) === !0 && u.removeSheet()
            }
            ,
            u.destructiveButtonClicked = function() {
                r.destructiveButtonClicked() === !0 && u.removeSheet()
            }
            ,
            u.showSheet(),
            u.cancel.$scope = u,
            u.cancel
        }
        return {
            show: l
        }
    }
    ]),
    h.prototype.addClass = function(e) {
        var t, n, i, r, o, a;
        if (e && "ng-scope" != e && "ng-isolate-scope" != e)
            for (t = 0; t < this.length; t++)
                if (r = this[t],
                r.setAttribute)
                    if (e.indexOf(" ") < 0 && r.classList.add)
                        r.classList.add(e);
                    else {
                        for (a = (" " + (r.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " "),
                        o = e.split(" "),
                        n = 0; n < o.length; n++)
                            i = o[n].trim(),
                            -1 === a.indexOf(" " + i + " ") && (a += i + " ");
                        r.setAttribute("class", a.trim())
                    }
        return this
    }
    ,
    h.prototype.removeClass = function(e) {
        var t, n, i, r, o;
        if (e)
            for (t = 0; t < this.length; t++)
                if (o = this[t],
                o.getAttribute)
                    if (e.indexOf(" ") < 0 && o.classList.remove)
                        o.classList.remove(e);
                    else
                        for (i = e.split(" "),
                        n = 0; n < i.length; n++)
                            r = i[n],
                            o.setAttribute("class", (" " + (o.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + r.trim() + " ", " ").trim());
        return this
    }
    ,
    s.factory("$ionicBackdrop", ["$document", "$timeout", "$$rAF", function(e, t, n) {
        function i() {
            s++,
            1 === s && (a.addClass("visible"),
            n(function() {
                s >= 1 && a.addClass("active")
            }
            ))
        }
        function r() {
            1 === s && (a.removeClass("active"),
            t(function() {
                0 === s && a.removeClass("visible")
            }
            , 400, !1)),
            s = Math.max(0, s - 1)
        }
        function o() {
            return a
        }
        var a = h('<div class="backdrop">')
          , s = 0;
        return e[0].body.appendChild(a[0]),
        {
            retain: i,
            release: r,
            getElement: o,
            _element: a
        }
    }
    ]),
    s.factory("$ionicBind", ["$parse", "$interpolate", function(e, t) {
        var n = /^\s*([@=&])(\??)\s*(\w*)\s*$/;
        return function(i, r, o) {
            l(o || {}, function(o, a) {
                var s, c, l = o.match(n) || [], u = l[3] || a, d = l[1];
                switch (d) {
                case "@":
                    if (!r[u])
                        return;
                    r.$observe(u, function(e) {
                        i[a] = e
                    }
                    ),
                    r[u] && (i[a] = t(r[u])(i));
                    break;
                case "=":
                    if (!r[u])
                        return;
                    c = i.$watch(r[u], function(e) {
                        i[a] = e
                    }
                    ),
                    i.$on("$destroy", c);
                    break;
                case "&":
                    if (r[u] && r[u].match(RegExp(a + "(.*?)")))
                        throw new Error('& expression binding "' + a + '" looks like it will recursively call "' + r[u] + '" and cause a stack overflow! Please choose a different scopeName.');
                    s = e(r[u]),
                    i[a] = function(e) {
                        return s(i, e)
                    }
                }
            }
            )
        }
    }
    ]),
    s.factory("$ionicBody", ["$document", function(e) {
        return {
            addClass: function() {
                for (var t = 0; t < arguments.length; t++)
                    e[0].body.classList.add(arguments[t]);
                return this
            },
            removeClass: function() {
                for (var t = 0; t < arguments.length; t++)
                    e[0].body.classList.remove(arguments[t]);
                return this
            },
            enableClass: function(e) {
                var t = Array.prototype.slice.call(arguments).slice(1);
                return e ? this.addClass.apply(this, t) : this.removeClass.apply(this, t),
                this
            },
            append: function(t) {
                return e[0].body.appendChild(t.length ? t[0] : t),
                this
            },
            get: function() {
                return e[0].body
            }
        }
    }
    ]),
    s.factory("$ionicClickBlock", ["$document", "$ionicBody", "$timeout", function(e, t, n) {
        function i(e) {
            e.preventDefault(),
            e.stopPropagation()
        }
        function r() {
            c && (a ? a.classList.remove(l) : (a = e[0].createElement("div"),
            a.className = "click-block",
            t.append(a),
            a.addEventListener("touchstart", i),
            a.addEventListener("mousedown", i)),
            c = !1)
        }
        function o() {
            a && a.classList.add(l)
        }
        var a, s, c, l = "click-block-hide";
        return {
            show: function(e) {
                c = !0,
                n.cancel(s),
                s = n(this.hide, e || 310, !1),
                r()
            },
            hide: function() {
                c = !1,
                n.cancel(s),
                o()
            }
        }
    }
    ]),
    s.factory("$ionicGesture", [function() {
        return {
            on: function(e, t, n, i) {
                return window.ionic.onGesture(e, t, n[0], i)
            },
            off: function(e, t, n) {
                return window.ionic.offGesture(e, t, n)
            }
        }
    }
    ]),
    s.factory("$ionicHistory", ["$rootScope", "$state", "$location", "$window", "$timeout", "$ionicViewSwitcher", "$ionicNavViewDelegate", function(e, t, n, i, r, o, a) {
        function s(e) {
            return e ? V.views[e] : null
        }
        function l(e) {
            return e ? s(e.backViewId) : null
        }
        function d(e) {
            return e ? s(e.forwardViewId) : null
        }
        function f(e) {
            return e ? V.histories[e] : null
        }
        function h(e) {
            var t = p(e);
            return V.histories[t.historyId] || (V.histories[t.historyId] = {
                historyId: t.historyId,
                parentHistoryId: p(t.scope.$parent).historyId,
                stack: [],
                cursor: -1
            }),
            f(t.historyId)
        }
        function p(t) {
            for (var n = t; n; ) {
                if (n.hasOwnProperty("$historyId"))
                    return {
                        historyId: n.$historyId,
                        scope: n
                    };
                n = n.$parent
            }
            return {
                historyId: "root",
                scope: e
            }
        }
        function m(e) {
            V.currentView = s(e),
            V.backView = l(V.currentView),
            V.forwardView = d(V.currentView)
        }
        function v() {
            var e;
            if (t && t.current && t.current.name) {
                if (e = t.current.name,
                t.params)
                    for (var n in t.params)
                        t.params.hasOwnProperty(n) && t.params[n] && (e += "_" + n + "=" + t.params[n]);
                return e
            }
            return ionic.Utils.nextUid()
        }
        function g() {
            var e;
            if (t && t.params)
                for (var n in t.params)
                    t.params.hasOwnProperty(n) && (e = e || {},
                    e[n] = t.params[n]);
            return e
        }
        function $(e) {
            return e && e.length && /ion-side-menus|ion-tabs/i.test(e[0].tagName)
        }
        function w(e, t) {
            return t && t.$$state && t.$$state.self.canSwipeBack === !1 ? !1 : e && "false" === e.attr("can-swipe-back") ? !1 : !0
        }
        var y, _, b, S, T, x = "initialView", E = "newView", C = "moveBack", k = "moveForward", A = "back", I = "forward", D = "enter", M = "exit", P = "swap", L = "none", O = 0, V = {
            histories: {
                root: {
                    historyId: "root",
                    parentHistoryId: null ,
                    stack: [],
                    cursor: -1
                }
            },
            views: {},
            backView: null ,
            forwardView: null ,
            currentView: null
        }, N = function() {}
        ;
        return N.prototype.initialize = function(e) {
            if (e) {
                for (var t in e)
                    this[t] = e[t];
                return this
            }
            return null
        }
        ,
        N.prototype.go = function() {
            if (this.stateName)
                return t.go(this.stateName, this.stateParams);
            if (this.url && this.url !== n.url()) {
                if (V.backView === this)
                    return i.history.go(-1);
                if (V.forwardView === this)
                    return i.history.go(1);
                n.url(this.url)
            }
            return null
        }
        ,
        N.prototype.destroy = function() {
            this.scope && (this.scope.$destroy && this.scope.$destroy(),
            this.scope = null )
        }
        ,
        {
            register: function(e, t) {
                var i, a, c, u = v(), d = h(e), $ = V.currentView, N = V.backView, B = V.forwardView, R = null , H = null , z = L, F = d.historyId, U = n.url();
                if (y !== u && (y = u,
                O++),
                T)
                    R = T.viewId,
                    H = T.action,
                    z = T.direction,
                    T = null ;
                else if (N && N.stateId === u)
                    R = N.viewId,
                    F = N.historyId,
                    H = C,
                    N.historyId === $.historyId ? z = A : $ && (z = M,
                    i = f(N.historyId),
                    i && i.parentHistoryId === $.historyId ? z = D : (i = f($.historyId),
                    i && i.parentHistoryId === d.parentHistoryId && (z = P)));
                else if (B && B.stateId === u)
                    R = B.viewId,
                    F = B.historyId,
                    H = k,
                    B.historyId === $.historyId ? z = I : $ && (z = M,
                    $.historyId === d.parentHistoryId ? z = D : (i = f($.historyId),
                    i && i.parentHistoryId === d.parentHistoryId && (z = P))),
                    i = p(e),
                    B.historyId && i.scope && (i.scope.$historyId = B.historyId,
                    F = B.historyId);
                else if ($ && $.historyId !== F && d.cursor > -1 && d.stack.length > 0 && d.cursor < d.stack.length && d.stack[d.cursor].stateId === u) {
                    var q = d.stack[d.cursor];
                    R = q.viewId,
                    F = q.historyId,
                    H = C,
                    z = P,
                    i = f($.historyId),
                    i && i.parentHistoryId === F ? z = M : (i = f(F),
                    i && i.parentHistoryId === $.historyId && (z = D)),
                    i = s(q.backViewId),
                    i && q.historyId !== i.historyId && (d.stack[d.cursor].backViewId = $.viewId)
                } else {
                    if (c = o.createViewEle(t),
                    this.isAbstractEle(c, t))
                        return {
                            action: "abstractView",
                            direction: L,
                            ele: c
                        };
                    if (R = ionic.Utils.nextUid(),
                    $) {
                        if ($.forwardViewId = R,
                        H = E,
                        B && $.stateId !== B.stateId && $.historyId === B.historyId && (i = f(B.historyId))) {
                            for (a = i.stack.length - 1; a >= B.index; a--) {
                                var G = i.stack[a];
                                G && G.destroy && G.destroy(),
                                i.stack.splice(a)
                            }
                            F = B.historyId
                        }
                        d.historyId === $.historyId ? z = I : $.historyId !== d.historyId && (z = D,
                        i = f($.historyId),
                        i && i.parentHistoryId === d.parentHistoryId ? z = P : (i = f(i.parentHistoryId),
                        i && i.historyId === d.historyId && (z = M)))
                    } else
                        H = x;
                    2 > O && (z = L),
                    V.views[R] = this.createView({
                        viewId: R,
                        index: d.stack.length,
                        historyId: d.historyId,
                        backViewId: $ && $.viewId ? $.viewId : null ,
                        forwardViewId: null ,
                        stateId: u,
                        stateName: this.currentStateName(),
                        stateParams: g(),
                        url: U,
                        canSwipeBack: w(c, t)
                    }),
                    d.stack.push(V.views[R])
                }
                if (b && b(),
                r.cancel(S),
                _) {
                    if (_.disableAnimate && (z = L),
                    _.disableBack && (V.views[R].backViewId = null ),
                    _.historyRoot) {
                        for (a = 0; a < d.stack.length; a++)
                            d.stack[a].viewId === R ? (d.stack[a].index = 0,
                            d.stack[a].backViewId = d.stack[a].forwardViewId = null ) : delete V.views[d.stack[a].viewId];
                        d.stack = [V.views[R]]
                    }
                    _ = null
                }
                if (m(R),
                V.backView && F == V.backView.historyId && u == V.backView.stateId && U == V.backView.url)
                    for (a = 0; a < d.stack.length; a++)
                        if (d.stack[a].viewId == R) {
                            H = "dupNav",
                            z = L,
                            a > 0 && (d.stack[a - 1].forwardViewId = null ),
                            V.forwardView = null ,
                            V.currentView.index = V.backView.index,
                            V.currentView.backViewId = V.backView.backViewId,
                            V.backView = l(V.backView),
                            d.stack.splice(a, 1);
                            break
                        }
                return d.cursor = V.currentView.index,
                {
                    viewId: R,
                    action: H,
                    direction: z,
                    historyId: F,
                    enableBack: this.enabledBack(V.currentView),
                    isHistoryRoot: 0 === V.currentView.index,
                    ele: c
                }
            },
            registerHistory: function(e) {
                e.$historyId = ionic.Utils.nextUid()
            },
            createView: function(e) {
                var t = new N;
                return t.initialize(e)
            },
            getViewById: s,
            viewHistory: function() {
                return V
            },
            currentView: function(e) {
                return arguments.length && (V.currentView = e),
                V.currentView
            },
            currentHistoryId: function() {
                return V.currentView ? V.currentView.historyId : null
            },
            currentTitle: function(e) {
                return V.currentView ? (arguments.length && (V.currentView.title = e),
                V.currentView.title) : void 0
            },
            backView: function(e) {
                return arguments.length && (V.backView = e),
                V.backView
            },
            backTitle: function(e) {
                var t = e && s(e.backViewId) || V.backView;
                return t && t.title
            },
            forwardView: function(e) {
                return arguments.length && (V.forwardView = e),
                V.forwardView
            },
            currentStateName: function() {
                return t && t.current ? t.current.name : null
            },
            isCurrentStateNavView: function(e) {
                return !!(t && t.current && t.current.views && t.current.views[e])
            },
            goToHistoryRoot: function(e) {
                if (e) {
                    var t = f(e);
                    if (t && t.stack.length) {
                        if (V.currentView && V.currentView.viewId === t.stack[0].viewId)
                            return;
                        T = {
                            viewId: t.stack[0].viewId,
                            action: C,
                            direction: A
                        },
                        t.stack[0].go()
                    }
                }
            },
            goBack: function(e) {
                if (u(e) && -1 !== e) {
                    if (e > -1)
                        return;
                    var t = V.histories[this.currentHistoryId()]
                      , n = t.cursor + e + 1;
                    1 > n && (n = 1),
                    t.cursor = n,
                    m(t.stack[n].viewId);
                    for (var i = n - 1, o = [], a = s(t.stack[i].forwardViewId); a && (o.push(a.stateId || a.viewId),
                    i++,
                    !(i >= t.stack.length)); )
                        a = s(t.stack[i].forwardViewId);
                    var c = this;
                    o.length && r(function() {
                        c.clearCache(o)
                    }
                    , 600)
                }
                V.backView && V.backView.go()
            },
            enabledBack: function(e) {
                var t = l(e);
                return !(!t || t.historyId !== e.historyId)
            },
            clearHistory: function() {
                var e = V.histories
                  , t = V.currentView;
                if (e)
                    for (var n in e)
                        e[n].stack && (e[n].stack = [],
                        e[n].cursor = -1),
                        t && t.historyId === n ? (t.backViewId = t.forwardViewId = null ,
                        e[n].stack.push(t)) : e[n].destroy && e[n].destroy();
                for (var i in V.views)
                    i !== t.viewId && delete V.views[i];
                t && m(t.viewId)
            },
            clearCache: function(e) {
                r(function() {
                    a._instances.forEach(function(t) {
                        t.clearCache(e)
                    }
                    )
                }
                )
            },
            nextViewOptions: function(t) {
                return b && b(),
                arguments.length && (r.cancel(S),
                null  === t ? _ = t : (_ = _ || {},
                c(_, t),
                _.expire && (b = e.$on("$stateChangeSuccess", function() {
                    S = r(function() {
                        _ = null
                    }
                    , _.expire)
                }
                )))),
                _
            },
            isAbstractEle: function(e, t) {
                return t && t.$$state && t.$$state.self["abstract"] ? !0 : !(!e || !$(e) && !$(e.children()))
            },
            isActiveScope: function(e) {
                if (!e)
                    return !1;
                for (var t, n = e, i = this.currentHistoryId(); n; ) {
                    if (n.$$disconnected)
                        return !1;
                    if (!t && n.hasOwnProperty("$historyId") && (t = !0),
                    i) {
                        if (n.hasOwnProperty("$historyId") && i == n.$historyId)
                            return !0;
                        if (n.hasOwnProperty("$activeHistoryId") && i == n.$activeHistoryId) {
                            if (n.hasOwnProperty("$historyId"))
                                return !0;
                            if (!t)
                                return !0
                        }
                    }
                    t && n.hasOwnProperty("$activeHistoryId") && (t = !1),
                    n = n.$parent
                }
                return i ? "root" == i : !0
            }
        }
    }
    ]).run(["$rootScope", "$state", "$location", "$document", "$ionicPlatform", "$ionicHistory", "IONIC_BACK_PRIORITY", function(e, t, n, i, r, o, a) {
        function s(e) {
            var t = o.backView();
            return t ? t.go() : ionic.Platform.exitApp(),
            e.preventDefault(),
            !1
        }
        e.$on("$ionicView.beforeEnter", function() {
            ionic.keyboard && ionic.keyboard.hide && ionic.keyboard.hide()
        }
        ),
        e.$on("$ionicHistory.change", function(e, i) {
            if (!i)
                return null ;
            var r = o.viewHistory()
              , a = i.historyId ? r.histories[i.historyId] : null ;
            if (a && a.cursor > -1 && a.cursor < a.stack.length) {
                var s = a.stack[a.cursor];
                return s.go(i)
            }
            !i.url && i.uiSref && (i.url = t.href(i.uiSref)),
            i.url && (0 === i.url.indexOf("#") && (i.url = i.url.replace("#", "")),
            i.url !== n.url() && n.url(i.url))
        }
        ),
        e.$ionicGoBack = function(e) {
            o.goBack(e)
        }
        ,
        e.$on("$ionicView.afterEnter", function(e, t) {
            t && t.title && (i[0].title = t.title)
        }
        ),
        r.registerBackButtonAction(s, a.view)
    }
    ]),
    s.provider("$ionicConfig", function() {
        function e(e, i) {
            a.platform[e] = i,
            r.platform[e] = {},
            t(a, a.platform[e]),
            n(a.platform[e], r.platform[e], "")
        }
        function t(e, n) {
            for (var i in e)
                i != o && e.hasOwnProperty(i) && (angular.isObject(e[i]) ? (u(n[i]) || (n[i] = {}),
                t(e[i], n[i])) : u(n[i]) || (n[i] = null ))
        }
        function n(e, t, r) {
            l(e, function(s, c) {
                angular.isObject(e[c]) ? (t[c] = {},
                n(e[c], t[c], r + "." + c)) : t[c] = function(n) {
                    if (arguments.length)
                        return e[c] = n,
                        t;
                    if (e[c] == o) {
                        var s = i(a.platform, ionic.Platform.platform() + r + "." + c);
                        return s || s === !1 ? s : i(a.platform, "default" + r + "." + c)
                    }
                    return e[c]
                }
            }
            )
        }
        function i(e, t) {
            t = t.split(".");
            for (var n = 0; n < t.length; n++) {
                if (!e || !u(e[t[n]]))
                    return null ;
                e = e[t[n]]
            }
            return e
        }
        var r = this;
        r.platform = {};
        var o = "platform"
          , a = {
            views: {
                maxCache: o,
                forwardCache: o,
                transition: o,
                swipeBackEnabled: o,
                swipeBackHitWidth: o
            },
            navBar: {
                alignTitle: o,
                positionPrimaryButtons: o,
                positionSecondaryButtons: o,
                transition: o
            },
            backButton: {
                icon: o,
                text: o,
                previousTitleText: o
            },
            form: {
                checkbox: o,
                toggle: o
            },
            scrolling: {
                jsScrolling: o
            },
            spinner: {
                icon: o
            },
            tabs: {
                style: o,
                position: o
            },
            templates: {
                maxPrefetch: o
            },
            platform: {}
        };
        n(a, r, ""),
        e("default", {
            views: {
                maxCache: 10,
                forwardCache: !1,
                transition: "ios",
                swipeBackEnabled: !0,
                swipeBackHitWidth: 45
            },
            navBar: {
                alignTitle: "center",
                positionPrimaryButtons: "left",
                positionSecondaryButtons: "right",
                transition: "view"
            },
            backButton: {
                icon: "ion-ios-arrow-back",
                text: "Back",
                previousTitleText: !0
            },
            form: {
                checkbox: "circle",
                toggle: "large"
            },
            scrolling: {
                jsScrolling: !0
            },
            spinner: {
                icon: "ios"
            },
            tabs: {
                style: "standard",
                position: "bottom"
            },
            templates: {
                maxPrefetch: 30
            }
        }),
        e("ios", {}),
        e("android", {
            views: {
                transition: "android",
                swipeBackEnabled: !1
            },
            navBar: {
                alignTitle: "left",
                positionPrimaryButtons: "right",
                positionSecondaryButtons: "right"
            },
            backButton: {
                icon: "ion-android-arrow-back",
                text: !1,
                previousTitleText: !1
            },
            form: {
                checkbox: "square",
                toggle: "small"
            },
            spinner: {
                icon: "android"
            },
            tabs: {
                style: "striped",
                position: "top"
            }
        }),
        e("windowsphone", {
            spinner: {
                icon: "android"
            }
        }),
        r.transitions = {
            views: {},
            navBar: {}
        },
        r.transitions.views.ios = function(e, t, n, i) {
            function r(e, t, n, i) {
                var r = {};
                r[ionic.CSS.TRANSITION_DURATION] = o.shouldAnimate ? "" : 0,
                r.opacity = t,
                i > -1 && (r.boxShadow = "0 0 10px rgba(0,0,0," + (o.shouldAnimate ? .45 * i : .3) + ")"),
                r[ionic.CSS.TRANSFORM] = "translate3d(" + n + "%,0,0)",
                ionic.DomUtil.cachedStyles(e, r)
            }
            var o = {
                run: function(i) {
                    "forward" == n ? (r(e, 1, 99 * (1 - i), 1 - i),
                    r(t, 1 - .1 * i, -33 * i, -1)) : "back" == n ? (r(e, 1 - .1 * (1 - i), -33 * (1 - i), -1),
                    r(t, 1, 100 * i, 1 - i)) : (r(e, 1, 0, -1),
                    r(t, 0, 0, -1))
                },
                shouldAnimate: i && ("forward" == n || "back" == n)
            };
            return o
        }
        ,
        r.transitions.navBar.ios = function(e, t, n, i) {
            function r(e, t, n, i) {
                var r = {};
                r[ionic.CSS.TRANSITION_DURATION] = s.shouldAnimate ? "" : "0ms",
                r.opacity = 1 === t ? "" : t,
                e.setCss("buttons-left", r),
                e.setCss("buttons-right", r),
                e.setCss("back-button", r),
                r[ionic.CSS.TRANSFORM] = "translate3d(" + i + "px,0,0)",
                e.setCss("back-text", r),
                r[ionic.CSS.TRANSFORM] = "translate3d(" + n + "px,0,0)",
                e.setCss("title", r)
            }
            function o(e, t, n) {
                if (e && t) {
                    var i = (e.titleTextX() + e.titleWidth()) * (1 - n)
                      , o = t && (t.titleTextX() - e.backButtonTextLeft()) * (1 - n) || 0;
                    r(e, n, i, o)
                }
            }
            function a(e, t, n) {
                if (e && t) {
                    var i = (-(e.titleTextX() - t.backButtonTextLeft()) - e.titleLeftRight()) * n;
                    r(e, 1 - n, i, 0)
                }
            }
            var s = {
                run: function(n) {
                    var i = e.controller()
                      , r = t && t.controller();
                    "back" == s.direction ? (a(i, r, 1 - n),
                    o(r, i, 1 - n)) : (o(i, r, n),
                    a(r, i, n))
                },
                direction: n,
                shouldAnimate: i && ("forward" == n || "back" == n)
            };
            return s
        }
        ,
        r.transitions.views.android = function(e, t, n, i) {
            function r(e, t) {
                var n = {};
                n[ionic.CSS.TRANSITION_DURATION] = o.shouldAnimate ? "" : 0,
                n[ionic.CSS.TRANSFORM] = "translate3d(" + t + "%,0,0)",
                ionic.DomUtil.cachedStyles(e, n)
            }
            i = i && ("forward" == n || "back" == n);
            var o = {
                run: function(i) {
                    "forward" == n ? (r(e, 99 * (1 - i)),
                    r(t, -100 * i)) : "back" == n ? (r(e, -100 * (1 - i)),
                    r(t, 100 * i)) : (r(e, 0),
                    r(t, 0))
                },
                shouldAnimate: i
            };
            return o
        }
        ,
        r.transitions.navBar.android = function(e, t, n, i) {
            function r(e, t) {
                if (e) {
                    var n = {};
                    n.opacity = 1 === t ? "" : t,
                    e.setCss("buttons-left", n),
                    e.setCss("buttons-right", n),
                    e.setCss("back-button", n),
                    e.setCss("back-text", n),
                    e.setCss("title", n)
                }
            }
            return {
                run: function(n) {
                    r(e.controller(), n),
                    r(t && t.controller(), 1 - n)
                },
                shouldAnimate: i && ("forward" == n || "back" == n)
            }
        }
        ,
        r.transitions.views.none = function(e, t) {
            return {
                run: function(n) {
                    r.transitions.views.android(e, t, !1, !1).run(n)
                },
                shouldAnimate: !1
            }
        }
        ,
        r.transitions.navBar.none = function(e, t) {
            return {
                run: function(n) {
                    r.transitions.navBar.ios(e, t, !1, !1).run(n),
                    r.transitions.navBar.android(e, t, !1, !1).run(n)
                },
                shouldAnimate: !1
            }
        }
        ,
        r.setPlatformConfig = e,
        r.$get = function() {
            return r
        }
    }
    ).config(["$compileProvider", function(e) {
        e.aHrefSanitizationWhitelist(/^\s*(https?|tel|ftp|mailto|file|ghttps?|ms-appx|x-wmapp0):/),
        e.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|content|blob|ms-appx|x-wmapp0):|data:image\//)
    }
    ]);
    var m = '<div class="loading-container"><div class="loading"></div></div>'
      , v = "$ionicLoading instance.hide() has been deprecated. Use $ionicLoading.hide()."
      , g = "$ionicLoading instance.show() has been deprecated. Use $ionicLoading.show()."
      , $ = "$ionicLoading instance.setContent() has been deprecated. Use $ionicLoading.show({ template: 'my content' }).";
    s.constant("$ionicLoadingConfig", {
        template: "<ion-spinner></ion-spinner>"
    }).factory("$ionicLoading", ["$ionicLoadingConfig", "$ionicBody", "$ionicTemplateLoader", "$ionicBackdrop", "$timeout", "$q", "$log", "$compile", "$ionicPlatform", "$rootScope", "IONIC_BACK_PRIORITY", function(e, t, n, i, r, o, a, s, l, u, d) {
        function f() {
            return y || (y = n.compile({
                template: m,
                appendTo: t.get()
            }).then(function(e) {
                return e.show = function(a) {
                    var c = a.templateUrl ? n.load(a.templateUrl) : o.when(a.template || a.content || "");
                    e.scope = a.scope || e.scope,
                    e.isShown || (e.hasBackdrop = !a.noBackdrop && a.showBackdrop !== !1,
                    e.hasBackdrop && (i.retain(),
                    i.getElement().addClass("backdrop-loading"))),
                    a.duration && (r.cancel(e.durationTimeout),
                    e.durationTimeout = r(angular.bind(e, e.hide), +a.duration)),
                    _(),
                    _ = l.registerBackButtonAction(p, d.loading),
                    c.then(function(n) {
                        if (n) {
                            var i = e.element.children();
                            i.html(n),
                            s(i.contents())(e.scope)
                        }
                        e.isShown && (e.element.addClass("visible"),
                        ionic.requestAnimationFrame(function() {
                            e.isShown && (e.element.addClass("active"),
                            t.addClass("loading-active"))
                        }
                        ))
                    }
                    ),
                    e.isShown = !0
                }
                ,
                e.hide = function() {
                    _(),
                    e.isShown && (e.hasBackdrop && (i.release(),
                    i.getElement().removeClass("backdrop-loading")),
                    e.element.removeClass("active"),
                    t.removeClass("loading-active"),
                    setTimeout(function() {
                        !e.isShown && e.element.removeClass("visible")
                    }
                    , 200)),
                    r.cancel(e.durationTimeout),
                    e.isShown = !1
                }
                ,
                e
            }
            )),
            y
        }
        function h(t) {
            t = c({}, e || {}, t || {});
            var n = t.delay || t.showDelay || 0;
            return b(),
            S(),
            t.hideOnStateChange && (b = u.$on("$stateChangeSuccess", w),
            S = u.$on("$stateChangeError", w)),
            r.cancel(T),
            T = r(p, n),
            T.then(f).then(function(e) {
                return e.show(t)
            }
            ),
            {
                hide: function() {
                    return a.error(v),
                    w.apply(this, arguments)
                },
                show: function() {
                    return a.error(g),
                    h.apply(this, arguments)
                },
                setContent: function(e) {
                    return a.error($),
                    f().then(function(t) {
                        t.show({
                            template: e
                        })
                    }
                    )
                }
            }
        }
        function w() {
            b(),
            S(),
            r.cancel(T),
            f().then(function(e) {
                e.hide()
            }
            )
        }
        var y, _ = p, b = p, S = p, T = o.when();
        return {
            show: h,
            hide: w,
            _getLoader: f
        }
    }
    ]),
    s.factory("$ionicModal", ["$rootScope", "$ionicBody", "$compile", "$timeout", "$ionicPlatform", "$ionicTemplateLoader", "$$q", "$log", "$ionicClickBlock", "$window", "IONIC_BACK_PRIORITY", function(e, t, n, i, r, o, a, s, l, u, d) {
        var f = ionic.views.Modal.inherit({
            initialize: function(e) {
                ionic.views.Modal.prototype.initialize.call(this, e),
                this.animation = e.animation || "slide-in-up"
            },
            show: function(e) {
                var n = this;
                if (n.scope.$$destroyed)
                    return s.error("Cannot call " + n.viewType + ".show() after remove(). Please create a new " + n.viewType + " instance."),
                    a.when();
                l.show(600),
                g.add(n);
                var o = h(n.modalEl);
                n.el.classList.remove("hide"),
                i(function() {
                    n._isShown && t.addClass(n.viewType + "-open")
                }
                , 400, !1),
                n.el.parentElement || (o.addClass(n.animation),
                t.append(n.el));
                var c = o.data("$$ionicScrollController");
                return c && c.resize(),
                e && n.positionView && (n.positionView(e, o),
                n._onWindowResize = function() {
                    n._isShown && n.positionView(e, o)
                }
                ,
                ionic.on("resize", n._onWindowResize, window)),
                o.addClass("ng-enter active").removeClass("ng-leave ng-leave-active"),
                n._isShown = !0,
                n._deregisterBackButton = r.registerBackButtonAction(n.hardwareBackButtonClose ? angular.bind(n, n.hide) : p, d.modal),
                ionic.views.Modal.prototype.show.call(n),
                i(function() {
                    n._isShown && (o.addClass("ng-enter-active"),
                    ionic.trigger("resize"),
                    n.scope.$parent && n.scope.$parent.$broadcast(n.viewType + ".shown", n),
                    n.el.classList.add("active"),
                    n.scope.$broadcast("$ionicHeader.align"))
                }
                , 20),
                i(function() {
                    n._isShown && n.$el.on("click", function(e) {
                        n.backdropClickToClose && e.target === n.el && g.isHighest(n) && n.hide()
                    }
                    )
                }
                , 400)
            },
            hide: function() {
                var e = this
                  , n = h(e.modalEl);
                return l.show(600),
                g.remove(e),
                e.el.classList.remove("active"),
                n.addClass("ng-leave"),
                i(function() {
                    e._isShown || n.addClass("ng-leave-active").removeClass("ng-enter ng-enter-active active")
                }
                , 20, !1),
                e.$el.off("click"),
                e._isShown = !1,
                e.scope.$parent && e.scope.$parent.$broadcast(e.viewType + ".hidden", e),
                e._deregisterBackButton && e._deregisterBackButton(),
                ionic.views.Modal.prototype.hide.call(e),
                e.positionView && ionic.off("resize", e._onWindowResize, window),
                i(function() {
                    t.removeClass(e.viewType + "-open"),
                    e.el.classList.add("hide")
                }
                , e.hideDelay || 320)
            },
            remove: function() {
                var e = this;
                return e.scope.$parent && e.scope.$parent.$broadcast(e.viewType + ".removed", e),
                e.hide().then(function() {
                    e.scope.$destroy(),
                    e.$el.remove()
                }
                )
            },
            isShown: function() {
                return !!this._isShown
            }
        })
          , m = function(t, i) {
            var r = i.scope && i.scope.$new() || e.$new(!0);
            i.viewType = i.viewType || "modal",
            c(r, {
                $hasHeader: !1,
                $hasSubheader: !1,
                $hasFooter: !1,
                $hasSubfooter: !1,
                $hasTabs: !1,
                $hasTabsTop: !1
            });
            var o = n("<ion-" + i.viewType + ">" + t + "</ion-" + i.viewType + ">")(r);
            i.$el = o,
            i.el = o[0],
            i.modalEl = i.el.querySelector("." + i.viewType);
            var a = new f(i);
            return a.scope = r,
            i.scope || (r[i.viewType] = a),
            a
        }
          , v = []
          , g = {
            add: function(e) {
                v.push(e)
            },
            remove: function(e) {
                var t = v.indexOf(e);
                t > -1 && t < v.length && v.splice(t, 1)
            },
            isHighest: function(e) {
                var t = v.indexOf(e);
                return t > -1 && t === v.length - 1
            }
        };
        return {
            fromTemplate: function(e, t) {
                var n = m(e, t || {});
                return n
            },
            fromTemplateUrl: function(e, t, n) {
                var i;
                return angular.isFunction(t) && (i = t,
                t = n),
                o.load(e).then(function(e) {
                    var n = m(e, t || {});
                    return i && i(n),
                    n
                }
                )
            },
            stack: g
        }
    }
    ]),
    s.service("$ionicNavBarDelegate", ionic.DelegateService(["align", "showBackButton", "showBar", "title", "changeTitle", "setTitle", "getTitle", "back", "getPreviousTitle"])),
    s.service("$ionicNavViewDelegate", ionic.DelegateService(["clearCache"])),
    s.constant("IONIC_BACK_PRIORITY", {
        view: 100,
        sideMenu: 150,
        modal: 200,
        actionSheet: 300,
        popup: 400,
        loading: 500
    }).provider("$ionicPlatform", function() {
        return {
            $get: ["$q", function(e) {
                var t = {
                    onHardwareBackButton: function(e) {
                        ionic.Platform.ready(function() {
                            document.addEventListener("backbutton", e, !1)
                        }
                        )
                    },
                    offHardwareBackButton: function(e) {
                        ionic.Platform.ready(function() {
                            document.removeEventListener("backbutton", e)
                        }
                        )
                    },
                    $backButtonActions: {},
                    registerBackButtonAction: function(e, n, i) {
                        t._hasBackButtonHandler || (t.$backButtonActions = {},
                        t.onHardwareBackButton(t.hardwareBackButtonClick),
                        t._hasBackButtonHandler = !0);
                        var r = {
                            id: i ? i : ionic.Utils.nextUid(),
                            priority: n ? n : 0,
                            fn: e
                        };
                        return t.$backButtonActions[r.id] = r,
                        function() {
                            delete t.$backButtonActions[r.id]
                        }
                    },
                    hardwareBackButtonClick: function(e) {
                        var n, i;
                        for (i in t.$backButtonActions)
                            (!n || t.$backButtonActions[i].priority >= n.priority) && (n = t.$backButtonActions[i]);
                        return n ? (n.fn(e),
                        n) : void 0
                    },
                    is: function(e) {
                        return ionic.Platform.is(e)
                    },
                    on: function(e, t) {
                        return ionic.Platform.ready(function() {
                            document.addEventListener(e, t, !1)
                        }
                        ),
                        function() {
                            ionic.Platform.ready(function() {
                                document.removeEventListener(e, t)
                            }
                            )
                        }
                    },
                    ready: function(t) {
                        var n = e.defer();
                        return ionic.Platform.ready(function() {
                            n.resolve(),
                            t && t()
                        }
                        ),
                        n.promise
                    }
                };
                return t
            }
            ]
        }
    }
    ),
    s.factory("$ionicPopover", ["$ionicModal", "$ionicPosition", "$document", "$window", function(e, t, n, i) {
        function r(e, n) {
            var r = h(e.target || e)
              , a = t.offset(r)
              , s = n.prop("offsetWidth")
              , c = n.prop("offsetHeight")
              , l = i.innerWidth
              , u = i.innerHeight
              , d = {
                left: a.left + a.width / 2 - s / 2
            }
              , f = h(n[0].querySelector(".popover-arrow"));
            d.left < o ? d.left = o : d.left + s + o > l && (d.left = l - s - o),
            a.top + a.height + c > u && a.top - c > 0 ? (d.top = a.top - c,
            n.addClass("popover-bottom")) : (d.top = a.top + a.height,
            n.removeClass("popover-bottom")),
            f.css({
                left: a.left + a.width / 2 - f.prop("offsetWidth") / 2 - d.left + "px"
            }),
            n.css({
                top: d.top + "px",
                left: d.left + "px",
                marginLeft: "0",
                opacity: "1"
            })
        }
        var o = 6
          , a = {
            viewType: "popover",
            hideDelay: 1,
            animation: "none",
            positionView: r
        };
        return {
            fromTemplate: function(t, n) {
                return e.fromTemplate(t, ionic.Utils.extend(a, n || {}))
            },
            fromTemplateUrl: function(t, n) {
                return e.fromTemplateUrl(t, ionic.Utils.extend(a, n || {}))
            }
        }
    }
    ]);
    var w = '<div class="popup-container" ng-class="cssClass"><div class="popup"><div class="popup-head"><h3 class="popup-title" ng-bind-html="title"></h3><h5 class="popup-sub-title" ng-bind-html="subTitle" ng-if="subTitle"></h5></div><div class="popup-body"></div><div class="popup-buttons" ng-show="buttons.length"><button ng-repeat="button in buttons" ng-click="$buttonTapped(button, $event)" class="button" ng-class="button.type || \'button-default\'" ng-bind-html="button.text"></button></div></div></div>';
    s.factory("$ionicPopup", ["$ionicTemplateLoader", "$ionicBackdrop", "$q", "$timeout", "$rootScope", "$ionicBody", "$compile", "$ionicPlatform", "$ionicModal", "IONIC_BACK_PRIORITY", function(e, t, n, i, r, o, a, s, l, u) {
        function d(t) {
            t = c({
                scope: null ,
                title: "",
                buttons: []
            }, t || {});
            var s = {};
            return s.scope = (t.scope || r).$new(),
            s.element = h(w),
            s.responseDeferred = n.defer(),
            o.get().appendChild(s.element[0]),
            a(s.element)(s.scope),
            c(s.scope, {
                title: t.title,
                buttons: t.buttons,
                subTitle: t.subTitle,
                cssClass: t.cssClass,
                $buttonTapped: function(e, t) {
                    var n = (e.onTap || p)(t);
                    t = t.originalEvent || t,
                    t.defaultPrevented || s.responseDeferred.resolve(n)
                }
            }),
            n.when(t.templateUrl ? e.load(t.templateUrl) : t.template || t.content || "").then(function(e) {
                var t = h(s.element[0].querySelector(".popup-body"));
                e ? (t.html(e),
                a(t.contents())(s.scope)) : t.remove()
            }
            ),
            s.show = function() {
                s.isShown || s.removed || (l.stack.add(s),
                s.isShown = !0,
                ionic.requestAnimationFrame(function() {
                    s.isShown && (s.element.removeClass("popup-hidden"),
                    s.element.addClass("popup-showing active"),
                    v(s.element))
                }
                ))
            }
            ,
            s.hide = function(e) {
                return e = e || p,
                s.isShown ? (l.stack.remove(s),
                s.isShown = !1,
                s.element.removeClass("active"),
                s.element.addClass("popup-hidden"),
                void i(e, 250, !1)) : e()
            }
            ,
            s.remove = function() {
                !s.removed && l.stack.isHighest(s) && (s.hide(function() {
                    s.element.remove(),
                    s.scope.$destroy()
                }
                ),
                s.removed = !0)
            }
            ,
            s
        }
        function f() {
            var e = b[b.length - 1];
            e && e.responseDeferred.resolve()
        }
        function m(e) {
            function n() {
                b.push(r),
                i(r.show, a, !1),
                r.responseDeferred.promise.then(function(e) {
                    var n = b.indexOf(r);
                    return -1 !== n && b.splice(n, 1),
                    b.length > 0 ? b[b.length - 1].show() : (t.release(),
                    i(function() {
                        b.length || o.removeClass("popup-open")
                    }
                    , 400, !1),
                    (S._backButtonActionDone || p)()),
                    r.remove(),
                    e
                }
                )
            }
            var r = S._createPopup(e)
              , a = 0;
            return b.length > 0 ? (b[b.length - 1].hide(),
            a = _.stackPushDelay) : (o.addClass("popup-open"),
            t.retain(),
            S._backButtonActionDone = s.registerBackButtonAction(f, u.popup)),
            r.responseDeferred.promise.close = function(e) {
                r.removed || r.responseDeferred.resolve(e)
            }
            ,
            r.responseDeferred.notify({
                close: r.responseDeferred.close
            }),
            n(),
            r.responseDeferred.promise
        }
        function v(e) {
            var t = e[0].querySelector("[autofocus]");
            t && t.focus()
        }
        function g(e) {
            return m(c({
                buttons: [{
                    text: e.okText || "OK",
                    type: e.okType || "button-positive",
                    onTap: function() {
                        return !0
                    }
                }]
            }, e || {}))
        }
        function $(e) {
            return m(c({
                buttons: [{
                    text: e.cancelText || "Cancel",
                    type: e.cancelType || "button-default",
                    onTap: function() {
                        return !1
                    }
                }, {
                    text: e.okText || "OK",
                    type: e.okType || "button-positive",
                    onTap: function() {
                        return !0
                    }
                }]
            }, e || {}))
        }
        function y(e) {
            var t = r.$new(!0);
            t.data = {};
            var n = "";
            return e.template && /<[a-z][\s\S]*>/i.test(e.template) === !1 && (n = "<span>" + e.template + "</span>",
            delete e.template),
            m(c({
                template: n + '<input ng-model="data.response" type="' + (e.inputType || "text") + '" placeholder="' + (e.inputPlaceholder || "") + '">',
                scope: t,
                buttons: [{
                    text: e.cancelText || "Cancel",
                    type: e.cancelType || "button-default",
                    onTap: function() {}
                }, {
                    text: e.okText || "OK",
                    type: e.okType || "button-positive",
                    onTap: function() {
                        return t.data.response || ""
                    }
                }]
            }, e || {}))
        }
        var _ = {
            stackPushDelay: 75
        }
          , b = []
          , S = {
            show: m,
            alert: g,
            confirm: $,
            prompt: y,
            _createPopup: d,
            _popupStack: b
        };
        return S
    }
    ]),
    s.factory("$ionicPosition", ["$document", "$window", function(e, t) {
        function n(e, n) {
            return e.currentStyle ? e.currentStyle[n] : t.getComputedStyle ? t.getComputedStyle(e)[n] : e.style[n]
        }
        function i(e) {
            return "static" === (n(e, "position") || "static")
        }
        var r = function(t) {
            for (var n = e[0], r = t.offsetParent || n; r && r !== n && i(r); )
                r = r.offsetParent;
            return r || n
        }
        ;
        return {
            position: function(t) {
                var n = this.offset(t)
                  , i = {
                    top: 0,
                    left: 0
                }
                  , o = r(t[0]);
                o != e[0] && (i = this.offset(h(o)),
                i.top += o.clientTop - o.scrollTop,
                i.left += o.clientLeft - o.scrollLeft);
                var a = t[0].getBoundingClientRect();
                return {
                    width: a.width || t.prop("offsetWidth"),
                    height: a.height || t.prop("offsetHeight"),
                    top: n.top - i.top,
                    left: n.left - i.left
                }
            },
            offset: function(n) {
                var i = n[0].getBoundingClientRect();
                return {
                    width: i.width || n.prop("offsetWidth"),
                    height: i.height || n.prop("offsetHeight"),
                    top: i.top + (t.pageYOffset || e[0].documentElement.scrollTop),
                    left: i.left + (t.pageXOffset || e[0].documentElement.scrollLeft)
                }
            }
        }
    }
    ]),
    s.service("$ionicScrollDelegate", ionic.DelegateService(["resize", "scrollTop", "scrollBottom", "scrollTo", "scrollBy", "zoomTo", "zoomBy", "getScrollPosition", "anchorScroll", "freezeScroll", "freezeAllScrolls", "getScrollView"])),
    s.service("$ionicSideMenuDelegate", ionic.DelegateService(["toggleLeft", "toggleRight", "getOpenRatio", "isOpen", "isOpenLeft", "isOpenRight", "canDragContent", "edgeDragThreshold"])),
    s.service("$ionicSlideBoxDelegate", ionic.DelegateService(["update", "slide", "select", "enableSlide", "previous", "next", "stop", "autoPlay", "start", "currentIndex", "selected", "slidesCount", "count", "loop"])),
    s.service("$ionicTabsDelegate", ionic.DelegateService(["select", "selectedIndex"])),
    function() {
        var e = [];
        s.factory("$ionicTemplateCache", ["$http", "$templateCache", "$timeout", function(t, n, i) {
            function r(e) {
                return "undefined" == typeof e ? o() : (f(e) && (e = [e]),
                l(e, function(e) {
                    s.push(e)
                }
                ),
                void (a && o()))
            }
            function o() {
                var e;
                if (r._runCount++,
                a = !0,
                0 !== s.length) {
                    for (var c = 0; 4 > c && (e = s.pop()); )
                        f(e) && t.get(e, {
                            cache: n
                        }),
                        c++;
                    s.length && i(o, 1e3)
                }
            }
            var a, s = e;
            return r._runCount = 0,
            r
        }
        ]).config(["$stateProvider", "$ionicConfigProvider", function(t, n) {
            var i = t.state;
            t.state = function(r, o) {
                if ("object" == typeof o) {
                    var a = o.prefetchTemplate !== !1 && e.length < n.templates.maxPrefetch();
                    if (a && f(o.templateUrl) && e.push(o.templateUrl),
                    angular.isObject(o.views))
                        for (var s in o.views)
                            a = o.views[s].prefetchTemplate !== !1 && e.length < n.templates.maxPrefetch(),
                            a && f(o.views[s].templateUrl) && e.push(o.views[s].templateUrl)
                }
                return i.call(t, r, o)
            }
        }
        ]).run(["$ionicTemplateCache", function(e) {
            e()
        }
        ])
    }
    (),
    s.factory("$ionicTemplateLoader", ["$compile", "$controller", "$http", "$q", "$rootScope", "$templateCache", function(e, t, n, i, r, o) {
        function a(e) {
            return n.get(e, {
                cache: o
            }).then(function(e) {
                return e.data && e.data.trim()
            }
            )
        }
        function s(n) {
            n = c({
                template: "",
                templateUrl: "",
                scope: null ,
                controller: null ,
                locals: {},
                appendTo: null
            }, n || {});
            var o = n.templateUrl ? this.load(n.templateUrl) : i.when(n.template);
            return o.then(function(i) {
                var o, a = n.scope || r.$new(), s = h("<div>").html(i).contents();
                return n.controller && (o = t(n.controller, c(n.locals, {
                    $scope: a
                })),
                s.children().data("$ngControllerController", o)),
                n.appendTo && h(n.appendTo).append(s),
                e(s)(a),
                {
                    element: s,
                    scope: a
                }
            }
            )
        }
        return {
            load: a,
            compile: s
        }
    }
    ]),
    s.factory("$ionicViewService", ["$ionicHistory", "$log", function(e, t) {
        function n(e, n) {
            t.warn("$ionicViewService" + e + " is deprecated, please use $ionicHistory" + n + " instead: http://ionicframework.com/docs/nightly/api/service/$ionicHistory/")
        }
        n("", "");
        var i = {
            getCurrentView: "currentView",
            getBackView: "backView",
            getForwardView: "forwardView",
            getCurrentStateName: "currentStateName",
            nextViewOptions: "nextViewOptions",
            clearHistory: "clearHistory"
        };
        return l(i, function(t, r) {
            i[r] = function() {
                return n("." + r, "." + t),
                e[t].apply(this, arguments)
            }
        }
        ),
        i
    }
    ]),
    s.factory("$ionicViewSwitcher", ["$timeout", "$document", "$q", "$ionicClickBlock", "$ionicConfig", "$ionicNavBarDelegate", function(e, t, n, i, r, o) {
        function a(e, t) {
            return s(e)["abstract"] ? s(e).name : t ? t.stateId || t.viewId : ionic.Utils.nextUid()
        }
        function s(e) {
            return e && e.$$state && e.$$state.self || {}
        }
        function d(e, t, n, i) {
            var o = s(e)
              , a = v || D(t, "view-transition") || o.viewTransition || r.views.transition() || "ios"
              , l = r.navBar.transition();
            return n = g || D(t, "view-direction") || o.viewDirection || n || "none",
            c(f(i), {
                transition: a,
                navBarTransition: "view" === l ? a : l,
                direction: n,
                shouldAnimate: "none" !== a && "none" !== n
            })
        }
        function f(e) {
            return e = e || {},
            {
                viewId: e.viewId,
                historyId: e.historyId,
                stateId: e.stateId,
                stateName: e.stateName,
                stateParams: e.stateParams
            }
        }
        function p(e, t) {
            return arguments.length > 1 ? void D(e, x, t) : D(e, x)
        }
        function m(e) {
            if (e && e.length) {
                var t = e.scope();
                t && (t.$emit("$ionicView.unloaded", e.data(T)),
                t.$destroy()),
                e.remove()
            }
        }
        var v, g, $ = "webkitTransitionEnd transitionend", w = "$noCache", y = "$destroyEle", _ = "$eleId", b = "$accessed", S = "$fallbackTimer", T = "$viewData", x = "nav-view", E = "active", C = "cached", k = "stage", A = 0;
        ionic.transition = ionic.transition || {},
        ionic.transition.isActive = !1;
        var I, D = ionic.DomUtil.cachedAttr, M = [], P = 1100, L = {
            create: function(t, l, h, x, I, O) {
                var V, N, B, R = ++A, H = {
                    init: function(e, t) {
                        L.isTransitioning(!0),
                        H.loadViewElements(e),
                        H.render(e, function() {
                            t && t()
                        }
                        )
                    },
                    loadViewElements: function(e) {
                        var n, i, r, o = t.getViewElements(), s = a(l, h), c = t.activeEleId();
                        for (n = 0,
                        i = o.length; i > n && (r = o.eq(n),
                        r.data(_) === s ? r.data(w) ? (r.data(_, s + ionic.Utils.nextUid()),
                        r.data(y, !0)) : V = r : u(c) && r.data(_) === c && (N = r),
                        !V || !N); n++)
                            ;
                        B = !!V,
                        B || (V = e.ele || L.createViewEle(l),
                        V.data(_, s)),
                        O && t.activeEleId(s),
                        e.ele = null
                    },
                    render: function(e, n) {
                        if (B)
                            ionic.Utils.reconnectScope(V.scope());
                        else {
                            p(V, k);
                            var i = d(l, V, e.direction, h)
                              , o = r.transitions.views[i.transition] || r.transitions.views.none;
                            o(V, null , i.direction, !0).run(0),
                            V.data(T, {
                                viewId: i.viewId,
                                historyId: i.historyId,
                                stateName: i.stateName,
                                stateParams: i.stateParams
                            }),
                            (s(l).cache === !1 || "false" === s(l).cache || "false" == V.attr("cache-view") || 0 === r.views.maxCache()) && V.data(w, !0);
                            var a = t.appendViewElement(V, l);
                            delete i.direction,
                            delete i.transition,
                            a.$emit("$ionicView.loaded", i)
                        }
                        V.data(b, Date.now()),
                        n && n()
                    },
                    transition: function(a, s, u) {
                        function m() {
                            p(V, q.shouldAnimate ? "entering" : E),
                            p(N, q.shouldAnimate ? "leaving" : C),
                            q.run(1),
                            o._instances.forEach(function(e) {
                                e.triggerTransitionStart(R)
                            }
                            ),
                            q.shouldAnimate || y()
                        }
                        function w(e) {
                            e.target === this && y()
                        }
                        function y() {
                            y.x || (y.x = !0,
                            V.off($, w),
                            e.cancel(V.data(S)),
                            N && e.cancel(N.data(S)),
                            H.emit("after", z, F),
                            T && T.resolve(t),
                            R === A && (n.all(M).then(L.transitionEnd),
                            H.cleanup(z)),
                            o._instances.forEach(function(e) {
                                e.triggerTransitionEnd()
                            }
                            ),
                            v = g = h = x = V = N = null )
                        }
                        function _(e) {
                            e.target === this && b()
                        }
                        function b() {
                            p(V, C),
                            p(N, E),
                            V.off($, _),
                            e.cancel(V.data(S)),
                            L.transitionEnd([t])
                        }
                        var T, z = d(l, V, a, h), F = c(c({}, z), f(x));
                        z.transitionId = F.transitionId = R,
                        z.fromCache = !!B,
                        z.enableBack = !!s,
                        z.renderStart = I,
                        z.renderEnd = O,
                        D(V.parent(), "nav-view-transition", z.transition),
                        D(V.parent(), "nav-view-direction", z.direction),
                        e.cancel(V.data(S));
                        var U = r.transitions.views[z.transition] || r.transitions.views.none
                          , q = U(V, N, z.direction, z.shouldAnimate && u && O);
                        if (q.shouldAnimate && (V.on($, w),
                        V.data(S, e(y, P)),
                        i.show(P)),
                        I && (H.emit("before", z, F),
                        p(V, k),
                        q.run(0)),
                        O && (T = n.defer(),
                        M.push(T.promise)),
                        I && O)
                            e(m, 16);
                        else {
                            if (!O)
                                return p(V, "entering"),
                                p(N, "leaving"),
                                {
                                    run: q.run,
                                    cancel: function(t) {
                                        t ? (V.on($, _),
                                        V.data(S, e(b, P)),
                                        i.show(P)) : b(),
                                        q.shouldAnimate = t,
                                        q.run(0),
                                        q = null
                                    }
                                };
                            O && m()
                        }
                    },
                    emit: function(e, t, n) {
                        var i = V.scope()
                          , r = N && N.scope();
                        "after" == e && (i && i.$emit("$ionicView.enter", t),
                        r ? r.$emit("$ionicView.leave", n) : i && n && n.viewId && i.$emit("$ionicNavView.leave", n)),
                        i && i.$emit("$ionicView." + e + "Enter", t),
                        r ? r.$emit("$ionicView." + e + "Leave", n) : i && n && n.viewId && i.$emit("$ionicNavView." + e + "Leave", n)
                    },
                    cleanup: function(e) {
                        N && "back" == e.direction && !r.views.forwardCache() && m(N);
                        var n, i, o, a = t.getViewElements(), s = a.length, c = s - 1 > r.views.maxCache(), l = Date.now();
                        for (n = 0; s > n; n++)
                            i = a.eq(n),
                            c && i.data(b) < l ? (l = i.data(b),
                            o = a.eq(n)) : i.data(y) && p(i) != E && m(i);
                        m(o),
                        V.data(w) && V.data(y, !0)
                    },
                    enteringEle: function() {
                        return V
                    },
                    leavingEle: function() {
                        return N
                    }
                };
                return H
            },
            transitionEnd: function(e) {
                l(e, function(e) {
                    e.transitionEnd()
                }
                ),
                L.isTransitioning(!1),
                i.hide(),
                M = []
            },
            nextTransition: function(e) {
                v = e
            },
            nextDirection: function(e) {
                g = e
            },
            isTransitioning: function(t) {
                return arguments.length && (ionic.transition.isActive = !!t,
                e.cancel(I),
                t && (I = e(function() {
                    L.isTransitioning(!1)
                }
                , 999))),
                ionic.transition.isActive
            },
            createViewEle: function(e) {
                var n = t[0].createElement("div");
                return e && e.$template && (n.innerHTML = e.$template,
                1 === n.children.length) ? (n.children[0].classList.add("pane"),
                h(n.children[0])) : (n.className = "pane",
                h(n))
            },
            viewEleIsActive: function(e, t) {
                p(e, t ? E : C)
            },
            getTransitionData: d,
            navViewAttr: p,
            destroyViewEle: m
        };
        return L
    }
    ]),
    s.config(["$provide", function(e) {
        e.decorator("$compile", ["$delegate", function(e) {
            return e.$$addScopeInfo = function(e, t, n, i) {
                var r = n ? i ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope";
                e.data(r, t)
            }
            ,
            e
        }
        ])
    }
    ]),
    s.config(["$provide", function(e) {
        function t(e, t) {
            return e.__hash = e.hash,
            e.hash = function(n) {
                return u(n) && t(function() {
                    var e = document.querySelector(".scroll-content");
                    e && (e.scrollTop = 0)
                }
                , 0, !1),
                e.__hash(n)
            }
            ,
            e
        }
        e.decorator("$location", ["$delegate", "$timeout", t])
    }
    ]),
    s.controller("$ionicHeaderBar", ["$scope", "$element", "$attrs", "$q", "$ionicConfig", "$ionicHistory", function(e, t, n, i, r, o) {
        function a(e) {
            return T[e] || (T[e] = t[0].querySelector("." + e)),
            T[e]
        }
        var s = "title"
          , c = "back-text"
          , l = "back-button"
          , u = "default-title"
          , d = "previous-title"
          , f = "hide"
          , h = this
          , p = ""
          , m = ""
          , v = 0
          , g = 0
          , $ = ""
          , w = !1
          , y = !0
          , _ = !0
          , b = !1
          , S = 0;
        h.beforeEnter = function(t) {
            e.$broadcast("$ionicView.beforeEnter", t)
        }
        ,
        h.title = function(e) {
            return arguments.length && e !== p && (a(s).innerHTML = e,
            p = e,
            S = 0),
            p
        }
        ,
        h.enableBack = function(e, t) {
            return arguments.length && (w = e,
            t || h.updateBackButton()),
            w
        }
        ,
        h.showBack = function(e, t) {
            return arguments.length && (y = e,
            t || h.updateBackButton()),
            y
        }
        ,
        h.showNavBack = function(e) {
            _ = e,
            h.updateBackButton()
        }
        ,
        h.updateBackButton = function() {
            var e;
            (y && _ && w) !== b && (b = y && _ && w,
            e = a(l),
            e && e.classList[b ? "remove" : "add"](f)),
            w && (e = e || a(l),
            e && (h.backButtonIcon !== r.backButton.icon() && (e = a(l + " .icon"),
            e && (h.backButtonIcon = r.backButton.icon(),
            e.className = "icon " + h.backButtonIcon)),
            h.backButtonText !== r.backButton.text() && (e = a(l + " .back-text"),
            e && (e.textContent = h.backButtonText = r.backButton.text()))))
        }
        ,
        h.titleTextWidth = function() {
            if (!S) {
                var e = ionic.DomUtil.getTextBounds(a(s));
                S = Math.min(e && e.width || 30)
            }
            return S
        }
        ,
        h.titleWidth = function() {
            var e = h.titleTextWidth()
              , t = a(s).offsetWidth;
            return e > t && (e = t + (v - g - 5)),
            e
        }
        ,
        h.titleTextX = function() {
            return t[0].offsetWidth / 2 - h.titleWidth() / 2
        }
        ,
        h.titleLeftRight = function() {
            return v - g
        }
        ,
        h.backButtonTextLeft = function() {
            for (var e = 0, t = a(c); t; )
                e += t.offsetLeft,
                t = t.parentElement;
            return e
        }
        ,
        h.resetBackButton = function(e) {
            if (r.backButton.previousTitleText()) {
                var t = a(d);
                if (t) {
                    t.classList.remove(f);
                    var n = e && o.getViewById(e.viewId)
                      , i = o.backTitle(n);
                    i !== m && (m = t.innerHTML = i)
                }
                var s = a(u);
                s && s.classList.remove(f)
            }
        }
        ,
        h.align = function(e) {
            var i = a(s);
            e = e || n.alignTitle || r.navBar.alignTitle();
            var o = h.calcWidths(e, !1);
            if (y && m && r.backButton.previousTitleText()) {
                var c = h.calcWidths(e, !0)
                  , l = t[0].offsetWidth - c.titleLeft - c.titleRight;
                h.titleTextWidth() <= l && (o = c)
            }
            return h.updatePositions(i, o.titleLeft, o.titleRight, o.buttonsLeft, o.buttonsRight, o.css, o.showPrevTitle)
        }
        ,
        h.calcWidths = function(e, n) {
            var i, r, o, h, p, m, v, g, $, w = a(s), _ = a(l), b = t[0].childNodes, S = 0, T = 0, x = 0, E = 0, C = "", k = 0;
            for (i = 0; i < b.length; i++) {
                if (p = b[i],
                v = 0,
                1 == p.nodeType) {
                    if (p === w) {
                        $ = !0;
                        continue
                    }
                    if (p.classList.contains(f))
                        continue;if (y && p === _) {
                        for (r = 0; r < p.childNodes.length; r++)
                            if (h = p.childNodes[r],
                            1 == h.nodeType)
                                if (h.classList.contains(c))
                                    for (o = 0; o < h.children.length; o++)
                                        if (m = h.children[o],
                                        n) {
                                            if (m.classList.contains(u))
                                                continue;k += m.offsetWidth
                                        } else {
                                            if (m.classList.contains(d))
                                                continue;k += m.offsetWidth
                                        }
                                else
                                    k += h.offsetWidth;
                            else
                                3 == h.nodeType && h.nodeValue.trim() && (g = ionic.DomUtil.getTextBounds(h),
                                k += g && g.width || 0);
                        v = k || p.offsetWidth
                    } else
                        v = p.offsetWidth
                } else
                    3 == p.nodeType && p.nodeValue.trim() && (g = ionic.DomUtil.getTextBounds(p),
                    v = g && g.width || 0);
                $ ? T += v : S += v
            }
            if ("left" == e)
                C = "title-left",
                S && (x = S + 15),
                T && (E = T + 15);
            else if ("right" == e)
                C = "title-right",
                S && (x = S + 15),
                T && (E = T + 15);
            else {
                var A = Math.max(S, T) + 10;
                A > 10 && (x = E = A)
            }
            return {
                backButtonWidth: k,
                buttonsLeft: S,
                buttonsRight: T,
                titleLeft: x,
                titleRight: E,
                showPrevTitle: n,
                css: C
            }
        }
        ,
        h.updatePositions = function(e, n, o, s, c, l, p) {
            var m = i.defer();
            if (e && (n !== v && (e.style.left = n ? n + "px" : "",
            v = n),
            o !== g && (e.style.right = o ? o + "px" : "",
            g = o),
            l !== $ && (l && e.classList.add(l),
            $ && e.classList.remove($),
            $ = l)),
            r.backButton.previousTitleText()) {
                var w = a(d)
                  , y = a(u);
                w && w.classList[p ? "remove" : "add"](f),
                y && y.classList[p ? "add" : "remove"](f)
            }
            return ionic.requestAnimationFrame(function() {
                if (e && e.offsetWidth + 10 < e.scrollWidth) {
                    var n = c + 5
                      , i = t[0].offsetWidth - v - h.titleTextWidth() - 20;
                    o = n > i ? n : i,
                    o !== g && (e.style.right = o + "px",
                    g = o)
                }
                m.resolve()
            }
            ),
            m.promise
        }
        ,
        h.setCss = function(e, t) {
            ionic.DomUtil.cachedStyles(a(e), t)
        }
        ;
        var T = {};
        e.$on("$destroy", function() {
            for (var e in T)
                T[e] = null
        }
        )
    }
    ]),
    s.controller("$ionInfiniteScroll", ["$scope", "$attrs", "$element", "$timeout", function(e, t, n, i) {
        function r() {
            ionic.requestAnimationFrame(function() {
                n[0].classList.add("active")
            }
            ),
            c.isLoading = !0,
            e.$parent && e.$parent.$apply(t.onInfinite || "")
        }
        function o() {
            ionic.requestAnimationFrame(function() {
                n[0].classList.remove("active")
            }
            ),
            i(function() {
                c.jsScrolling && c.scrollView.resize(),
                (c.jsScrolling && c.scrollView.__container && c.scrollView.__container.offsetHeight > 0 || !c.jsScrolling) && c.checkBounds()
            }
            , 30, !1),
            c.isLoading = !1
        }
        function a() {
            if (!c.isLoading) {
                var e = {};
                if (c.jsScrolling) {
                    e = c.getJSMaxScroll();
                    var t = c.scrollView.getValues();
                    (-1 !== e.left && t.left >= e.left || -1 !== e.top && t.top >= e.top) && r()
                } else
                    e = c.getNativeMaxScroll(),
                    (-1 !== e.left && c.scrollEl.scrollLeft >= e.left - c.scrollEl.clientWidth || -1 !== e.top && c.scrollEl.scrollTop >= e.top - c.scrollEl.clientHeight) && r()
            }
        }
        function s(e) {
            var n = (t.distance || "2.5%").trim()
              , i = -1 !== n.indexOf("%");
            return i ? e * (1 - parseFloat(n) / 100) : e - parseFloat(n)
        }
        var c = this;
        c.isLoading = !1,
        e.icon = function() {
            return u(t.icon) ? t.icon : "ion-load-d"
        }
        ,
        e.spinner = function() {
            return u(t.spinner) ? t.spinner : ""
        }
        ,
        e.$on("scroll.infiniteScrollComplete", function() {
            o()
        }
        ),
        e.$on("$destroy", function() {
            c.scrollCtrl && c.scrollCtrl.$element && c.scrollCtrl.$element.off("scroll", c.checkBounds),
            c.scrollEl && c.scrollEl.removeEventListener && c.scrollEl.removeEventListener("scroll", c.checkBounds)
        }
        ),
        c.checkBounds = ionic.Utils.throttle(a, 300),
        c.getJSMaxScroll = function() {
            var e = c.scrollView.getScrollMax();
            return {
                left: c.scrollView.options.scrollingX ? s(e.left) : -1,
                top: c.scrollView.options.scrollingY ? s(e.top) : -1
            }
        }
        ,
        c.getNativeMaxScroll = function() {
            var e = {
                left: c.scrollEl.scrollWidth,
                top: c.scrollEl.scrollHeight
            }
              , t = window.getComputedStyle(c.scrollEl) || {};
            return {
                left: "scroll" === t.overflowX || "auto" === t.overflowX || "scroll" === c.scrollEl.style["overflow-x"] ? s(e.left) : -1,
                top: "scroll" === t.overflowY || "auto" === t.overflowY || "scroll" === c.scrollEl.style["overflow-y"] ? s(e.top) : -1
            }
        }
        ,
        c.__finishInfiniteScroll = o
    }
    ]),
    s.service("$ionicListDelegate", ionic.DelegateService(["showReorder", "showDelete", "canSwipeItems", "closeOptionButtons"])).controller("$ionicList", ["$scope", "$attrs", "$ionicListDelegate", "$ionicHistory", function(e, t, n, i) {
        var r = this
          , o = !0
          , a = !1
          , s = !1
          , c = n._registerInstance(r, t.delegateHandle, function() {
            return i.isActiveScope(e)
        }
        );
        e.$on("$destroy", c),
        r.showReorder = function(e) {
            return arguments.length && (a = !!e),
            a
        }
        ,
        r.showDelete = function(e) {
            return arguments.length && (s = !!e),
            s
        }
        ,
        r.canSwipeItems = function(e) {
            return arguments.length && (o = !!e),
            o
        }
        ,
        r.closeOptionButtons = function() {
            r.listView && r.listView.clearDragEffects()
        }
    }
    ]),
    s.controller("$ionicNavBar", ["$scope", "$element", "$attrs", "$compile", "$timeout", "$ionicNavBarDelegate", "$ionicConfig", "$ionicHistory", function(e, t, n, i, r, o, a, s) {
        function c(e, t) {
            var n = console.warn || console.log;
            n && n.call(console, "navBarController." + e + " is deprecated, please use " + t + " instead")
        }
        function d(e) {
            return k[e] ? h(k[e]) : void 0
        }
        function f() {
            for (var e = 0; e < C.length; e++)
                if (C[e].isActive)
                    return C[e]
        }
        function p() {
            for (var e = 0; e < C.length; e++)
                if (!C[e].isActive)
                    return C[e]
        }
        function m(e, t) {
            e && ionic.DomUtil.cachedAttr(e.containerEle(), "nav-bar", t)
        }
        function v(e) {
            ionic.DomUtil.cachedAttr(t, "nav-swipe", e)
        }
        var g, $, w, y = "hide", _ = "$ionNavBarController", b = "primaryButtons", S = "secondaryButtons", T = "backButton", x = "primaryButtons secondaryButtons leftButtons rightButtons title".split(" "), E = this, C = [], k = {}, A = !0;
        t.parent().data(_, E);
        var I = n.delegateHandle || "navBar" + ionic.Utils.nextUid()
          , D = o._registerInstance(E, I);
        E.init = function() {
            t.addClass("nav-bar-container"),
            ionic.DomUtil.cachedAttr(t, "nav-bar-transition", a.views.transition()),
            E.createHeaderBar(!1),
            E.createHeaderBar(!0),
            e.$emit("ionNavBar.init", I)
        }
        ,
        E.createHeaderBar = function(r) {
            function o(e, t) {
                e && ("title" === t ? v.append(e) : "rightButtons" == t || t == S && "left" != a.navBar.positionSecondaryButtons() || t == b && "right" == a.navBar.positionPrimaryButtons() ? (m || (m = h('<div class="buttons buttons-right">'),
                f.append(m)),
                t == S ? m.append(e) : m.prepend(e)) : (p || (p = h('<div class="buttons buttons-left">'),
                g[T] ? g[T].after(p) : f.prepend(p)),
                t == S ? p.append(e) : p.prepend(e)))
            }
            var s = h('<div class="nav-bar-block">');
            ionic.DomUtil.cachedAttr(s, "nav-bar", r ? "active" : "cached");
            var c = n.alignTitle || a.navBar.alignTitle()
              , f = h("<ion-header-bar>").addClass(n["class"]).attr("align-title", c);
            u(n.noTapScroll) && f.attr("no-tap-scroll", n.noTapScroll);
            var p, m, v = h('<div class="title title-' + c + '">'), g = {}, $ = {};
            g[T] = d(T),
            g[T] && f.append(g[T]),
            f.append(v),
            l(x, function(e) {
                g[e] = d(e),
                o(g[e], e)
            }
            );
            for (var w = 0; w < f[0].children.length; w++)
                f[0].children[w].classList.add("header-item");
            s.append(f),
            t.append(i(s)(e.$new()));
            var _ = f.data("$ionHeaderBarController");
            _.backButtonIcon = a.backButton.icon(),
            _.backButtonText = a.backButton.text();
            var E = {
                isActive: r,
                title: function(e) {
                    _.title(e)
                },
                setItem: function(e, t) {
                    E.removeItem(t),
                    e ? ("title" === t && E.title(""),
                    o(e, t),
                    g[t] && g[t].addClass(y),
                    $[t] = e) : g[t] && g[t].removeClass(y)
                },
                removeItem: function(e) {
                    $[e] && ($[e].scope().$destroy(),
                    $[e].remove(),
                    $[e] = null )
                },
                containerEle: function() {
                    return s
                },
                headerBarEle: function() {
                    return f
                },
                afterLeave: function() {
                    l(x, function(e) {
                        E.removeItem(e)
                    }
                    ),
                    _.resetBackButton()
                },
                controller: function() {
                    return _
                },
                destroy: function() {
                    l(x, function(e) {
                        E.removeItem(e)
                    }
                    ),
                    s.scope().$destroy();
                    for (var e in g)
                        g[e] && (g[e].removeData(),
                        g[e] = null );
                    p && p.removeData(),
                    m && m.removeData(),
                    v.removeData(),
                    f.removeData(),
                    s.remove(),
                    s = f = v = p = m = null
                }
            };
            return C.push(E),
            E
        }
        ,
        E.navElement = function(e, t) {
            return u(t) && (k[e] = t),
            k[e]
        }
        ,
        E.update = function(e) {
            var t = !e.hasHeaderBar && e.showNavBar;
            e.transition = a.views.transition(),
            t || (e.direction = "none"),
            E.enable(t);
            var n = E.isInitialized ? p() : f()
              , i = E.isInitialized ? f() : null
              , r = n.controller();
            r.enableBack(e.enableBack, !0),
            r.showBack(e.showBack, !0),
            r.updateBackButton(),
            E.title(e.title, n),
            E.showBar(t),
            e.navBarItems && l(x, function(t) {
                n.setItem(e.navBarItems[t], t)
            }
            ),
            E.transition(n, i, e),
            E.isInitialized = !0,
            v("")
        }
        ,
        E.transition = function(n, i, o) {
            function s() {
                for (var e = 0; e < C.length; e++)
                    C[e].isActive = !1;
                n.isActive = !0,
                m(n, "active"),
                m(i, "cached"),
                E.activeTransition = d = $ = null
            }
            var c = n.controller()
              , l = a.transitions.navBar[o.navBarTransition] || a.transitions.navBar.none
              , u = o.transitionId;
            c.beforeEnter(o);
            var d = l(n, i, o.direction, o.shouldAnimate && E.isInitialized);
            ionic.DomUtil.cachedAttr(t, "nav-bar-transition", o.navBarTransition),
            ionic.DomUtil.cachedAttr(t, "nav-bar-direction", o.direction),
            d.shouldAnimate && o.renderEnd ? m(n, "stage") : (m(n, "entering"),
            m(i, "leaving")),
            c.resetBackButton(o),
            d.run(0),
            E.activeTransition = {
                run: function(e) {
                    d.shouldAnimate = !1,
                    d.direction = "back",
                    d.run(e)
                },
                cancel: function(t, r, o) {
                    v(r),
                    m(i, "active"),
                    m(n, "cached"),
                    d.shouldAnimate = t,
                    d.run(0),
                    E.activeTransition = d = null ;
                    var a;
                    o.showBar !== E.showBar() && E.showBar(o.showBar),
                    o.showBackButton !== E.showBackButton() && E.showBackButton(o.showBackButton),
                    a && e.$apply()
                },
                complete: function(e, t) {
                    v(t),
                    d.shouldAnimate = e,
                    d.run(1),
                    $ = s
                }
            },
            r(c.align, 16),
            (g = function() {
                w === u && (m(n, "entering"),
                m(i, "leaving"),
                d.run(1),
                $ = function() {
                    w != u && d.shouldAnimate || s()
                }
                ,
                g = null )
            }
            )()
        }
        ,
        E.triggerTransitionStart = function(e) {
            w = e,
            g && g()
        }
        ,
        E.triggerTransitionEnd = function() {
            $ && $()
        }
        ,
        E.showBar = function(t) {
            return arguments.length && (E.visibleBar(t),
            e.$parent.$hasHeader = !!t),
            !!e.$parent.$hasHeader
        }
        ,
        E.visibleBar = function(e) {
            e && !A ? (t.removeClass(y),
            E.align()) : !e && A && t.addClass(y),
            A = e
        }
        ,
        E.enable = function(e) {
            E.visibleBar(e);
            for (var t = 0; t < o._instances.length; t++)
                o._instances[t] !== E && o._instances[t].visibleBar(!1)
        }
        ,
        E.showBackButton = function(t) {
            if (arguments.length) {
                for (var n = 0; n < C.length; n++)
                    C[n].controller().showNavBack(!!t);
                e.$isBackButtonShown = !!t
            }
            return e.$isBackButtonShown
        }
        ,
        E.showActiveBackButton = function(e) {
            var t = f();
            return t ? arguments.length ? t.controller().showBack(e) : t.controller().showBack() : void 0
        }
        ,
        E.title = function(t, n) {
            return u(t) && (t = t || "",
            n = n || f(),
            n && n.title(t),
            e.$title = t,
            s.currentTitle(t)),
            e.$title
        }
        ,
        E.align = function(e, t) {
            t = t || f(),
            t && t.controller().align(e)
        }
        ,
        E.hasTabsTop = function(e) {
            t[e ? "addClass" : "removeClass"]("nav-bar-tabs-top")
        }
        ,
        E.hasBarSubheader = function(e) {
            t[e ? "addClass" : "removeClass"]("nav-bar-has-subheader")
        }
        ,
        E.changeTitle = function(e) {
            c("changeTitle(val)", "title(val)"),
            E.title(e)
        }
        ,
        E.setTitle = function(e) {
            c("setTitle(val)", "title(val)"),
            E.title(e)
        }
        ,
        E.getTitle = function() {
            return c("getTitle()", "title()"),
            E.title()
        }
        ,
        E.back = function() {
            c("back()", "$ionicHistory.goBack()"),
            s.goBack()
        }
        ,
        E.getPreviousTitle = function() {
            c("getPreviousTitle()", "$ionicHistory.backTitle()"),
            s.goBack()
        }
        ,
        e.$on("$destroy", function() {
            e.$parent.$hasHeader = !1,
            t.parent().removeData(_);
            for (var n = 0; n < C.length; n++)
                C[n].destroy();
            t.remove(),
            t = C = null ,
            D()
        }
        )
    }
    ]),
    s.controller("$ionicNavView", ["$scope", "$element", "$attrs", "$compile", "$controller", "$ionicNavBarDelegate", "$ionicNavViewDelegate", "$ionicHistory", "$ionicViewSwitcher", "$ionicConfig", "$ionicScrollDelegate", function(e, t, n, i, r, o, a, s, l, u, d) {
        function f(e, n) {
            for (var i, r, o = t.children(), a = 0, s = o.length; s > a; a++)
                if (i = o.eq(a),
                A(i) == x) {
                    r = i.scope(),
                    r && r.$emit(e.name.replace("Tabs", "View"), n);
                    break
                }
        }
        function h(e) {
            ionic.DomUtil.cachedAttr(t, "nav-swipe", e)
        }
        function p(e, t) {
            var n = v();
            n && n.hasTabsTop(t)
        }
        function m(e, t) {
            var n = v();
            n && n.hasBarSubheader(t)
        }
        function v() {
            if ($)
                for (var e = 0; e < o._instances.length; e++)
                    if (o._instances[e].$$delegateHandle == $)
                        return o._instances[e];
            return t.inheritedData("$ionNavBarController")
        }
        var g, $, w, y, _, b = "$eleId", S = "$destroyEle", T = "$noCache", x = "active", E = "cached", C = this, k = !1, A = l.navViewAttr;
        C.scope = e,
        C.element = t,
        C.init = function() {
            var i = n.name || ""
              , r = t.parent().inheritedData("$uiView")
              , o = r && r.state ? r.state.name : "";
            i.indexOf("@") < 0 && (i = i + "@" + o);
            var s = {
                name: i,
                state: null
            };
            t.data("$uiView", s);
            var c = a._registerInstance(C, n.delegateHandle);
            return e.$on("$destroy", function() {
                c(),
                C.isSwipeFreeze && d.freezeAllScrolls(!1)
            }
            ),
            e.$on("$ionicHistory.deselect", C.cacheCleanup),
            e.$on("$ionicTabs.top", p),
            e.$on("$ionicSubheader", m),
            e.$on("$ionicTabs.beforeLeave", f),
            e.$on("$ionicTabs.afterLeave", f),
            e.$on("$ionicTabs.leave", f),
            ionic.Platform.ready(function() {
                ionic.Platform.isWebView() && u.views.swipeBackEnabled() && C.initSwipeBack()
            }
            ),
            s
        }
        ,
        C.register = function(t) {
            var n = c({}, s.currentView())
              , i = s.register(e, t);
            C.update(i);
            var r = s.getViewById(i.viewId) || {}
              , o = y !== i.viewId;
            C.render(i, t, r, n, o, !0)
        }
        ,
        C.update = function(e) {
            k = !0,
            g = e.direction;
            var n = t.parent().inheritedData("$ionNavViewController");
            n && (n.isPrimary(!1),
            ("enter" === g || "exit" === g) && (n.direction(g),
            "enter" === g && (g = "none")))
        }
        ,
        C.render = function(e, t, n, i, r, o) {
            var a = l.create(C, t, n, i, r, o);
            a.init(e, function() {
                a.transition(C.direction(), e.enableBack, !_),
                y = _ = null
            }
            )
        }
        ,
        C.beforeEnter = function(e) {
            if (k) {
                $ = e.navBarDelegate;
                var t = v();
                t && t.update(e),
                h("")
            }
        }
        ,
        C.activeEleId = function(e) {
            return arguments.length && (w = e),
            w
        }
        ,
        C.transitionEnd = function() {
            var e, n, i, r = t.children();
            for (e = 0,
            n = r.length; n > e; e++)
                i = r.eq(e),
                i.data(b) === w ? A(i, x) : ("leaving" === A(i) || A(i) === x || A(i) === E) && (i.data(S) || i.data(T) ? l.destroyViewEle(i) : (A(i, E),
                ionic.Utils.disconnectScope(i.scope())));
            h(""),
            C.isSwipeFreeze && d.freezeAllScrolls(!1)
        }
        ,
        C.cacheCleanup = function() {
            for (var e = t.children(), n = 0, i = e.length; i > n; n++)
                e.eq(n).data(S) && l.destroyViewEle(e.eq(n))
        }
        ,
        C.clearCache = function(e) {
            var n, i, r, o, a, s, c = t.children();
            for (r = 0,
            o = c.length; o > r; r++)
                if (n = c.eq(r),
                e)
                    for (s = n.data(b),
                    a = 0; a < e.length; a++)
                        s === e[a] && l.destroyViewEle(n);
                else
                    A(n) == E ? l.destroyViewEle(n) : A(n) == x && (i = n.scope(),
                    i && i.$broadcast("$ionicView.clearCache"))
        }
        ,
        C.getViewElements = function() {
            return t.children()
        }
        ,
        C.appendViewElement = function(n, o) {
            var a = i(n);
            t.append(n);
            var s = e.$new();
            if (o && o.$$controller) {
                o.$scope = s;
                var c = r(o.$$controller, o);
                t.children().data("$ngControllerController", c)
            }
            return a(s),
            s
        }
        ,
        C.title = function(e) {
            var t = v();
            t && t.title(e)
        }
        ,
        C.enableBackButton = function(e) {
            var t = v();
            t && t.enableBackButton(e)
        }
        ,
        C.showBackButton = function(e) {
            var t = v();
            return t ? arguments.length ? t.showActiveBackButton(e) : t.showActiveBackButton() : !0
        }
        ,
        C.showBar = function(e) {
            var t = v();
            return t ? arguments.length ? t.showBar(e) : t.showBar() : !0
        }
        ,
        C.isPrimary = function(e) {
            return arguments.length && (k = e),
            k
        }
        ,
        C.direction = function(e) {
            return arguments.length && (g = e),
            g
        }
        ,
        C.initSwipeBack = function() {
            function n(e) {
                if (k && (b = o(e),
                !(b > T))) {
                    p = s.backView();
                    var n = s.currentView();
                    if (p && p.historyId === n.historyId && n.canSwipeBack !== !1) {
                        w || (w = window.innerWidth),
                        C.isSwipeFreeze = d.freezeAllScrolls(!0);
                        var a = {
                            direction: "back"
                        };
                        S = [],
                        x = {
                            showBar: C.showBar(),
                            showBackButton: C.showBackButton()
                        };
                        var u = l.create(C, a, p, n, !0, !1);
                        u.loadViewElements(a),
                        u.render(a),
                        c = u.transition("back", s.enabledBack(p), !0),
                        f = v(),
                        g = ionic.onGesture("drag", i, t[0]),
                        $ = ionic.onGesture("release", r, t[0])
                    }
                }
            }
            function i(e) {
                if (k && c) {
                    var t = o(e);
                    if (S.push({
                        t: Date.now(),
                        x: t
                    }),
                    t >= w - 15)
                        r(e);
                    else {
                        var n = Math.min(Math.max(a(t), 0), 1);
                        c.run(n),
                        f && f.activeTransition && f.activeTransition.run(n)
                    }
                }
            }
            function r(e) {
                if (k && c && S && S.length > 1) {
                    for (var t = Date.now(), n = o(e), s = S[S.length - 1], l = S.length - 2; l >= 0 && !(t - s.t > 200); l--)
                        s = S[l];
                    var u = n >= S[S.length - 2].x
                      , m = a(n)
                      , v = Math.abs(s.x - n) / (t - s.t);
                    if (y = p.viewId,
                    _ = .03 > m || m > .97,
                    u && (m > .5 || v > .1)) {
                        var b = v > .5 || .05 > v || n > w - 45 ? "fast" : "slow";
                        h(_ ? "" : b),
                        p.go(),
                        f && f.activeTransition && f.activeTransition.complete(!_, b)
                    } else
                        h(_ ? "" : "fast"),
                        y = null ,
                        c.cancel(!_),
                        f && f.activeTransition && f.activeTransition.cancel(!_, "fast", x),
                        _ = null
                }
                ionic.offGesture(g, "drag", i),
                ionic.offGesture($, "release", r),
                w = c = S = null ,
                C.isSwipeFreeze = d.freezeAllScrolls(!1)
            }
            function o(e) {
                return ionic.tap.pointerCoord(e.gesture.srcEvent).x
            }
            function a(e) {
                return (e - b) / w
            }
            var c, f, p, m, g, $, w, b, S, T = u.views.swipeBackHitWidth(), x = {};
            m = ionic.onGesture("dragstart", n, t[0]),
            e.$on("$destroy", function() {
                ionic.offGesture(m, "dragstart", n),
                ionic.offGesture(g, "drag", i),
                ionic.offGesture($, "release", r),
                C.element = c = f = null
            }
            )
        }
    }
    ]),
    s.controller("$ionicRefresher", ["$scope", "$attrs", "$element", "$ionicBind", "$timeout", function(e, t, n, i, r) {
        function o() {
            (M || S) && (I = null ,
            S ? (S = !1,
            x = 0,
            E > C ? (v(),
            f(C, A)) : (f(0, A, m),
            T = !1)) : (x = 0,
            T = !1,
            d(!1)))
        }
        function a(e) {
            if (M && !(e.touches.length > 1)) {
                if (null  === I && (I = parseInt(e.touches[0].screenY, 10)),
                ionic.Platform.isAndroid() && 4.4 === ionic.Platform.version() && 0 === y.scrollTop && (S = !0,
                e.preventDefault()),
                D = parseInt(e.touches[0].screenY, 10) - I,
                0 >= D - x || 0 !== y.scrollTop)
                    return T && (T = !1,
                    d(!1)),
                    S && l(y, -1 * parseInt(D - x, 10)),
                    void (0 !== E && c(0));
                D > 0 && 0 === y.scrollTop && !T && (x = D),
                e.preventDefault(),
                T || (T = !0,
                d(!0)),
                S = !0,
                c(parseInt((D - x) / 3, 10)),
                !k && E > C ? (k = !0,
                ionic.requestAnimationFrame(p)) : k && C > E && (k = !1,
                ionic.requestAnimationFrame(m))
            }
        }
        function s(e) {
            M = 0 === e.target.scrollTop || S
        }
        function c(e) {
            _.style[ionic.CSS.TRANSFORM] = "translateY(" + e + "px)",
            E = e
        }
        function l(e, t) {
            e.scrollTop = t;
            var n = document.createEvent("UIEvents");
            n.initUIEvent("scroll", !0, !0, window, 1),
            e.dispatchEvent(n)
        }
        function d(e) {
            ionic.requestAnimationFrame(e ? function() {
                _.classList.add("overscroll"),
                g()
            }
             : function() {
                _.classList.remove("overscroll"),
                $(),
                m()
            }
            )
        }
        function f(e, t, n) {
            function i(e) {
                return --e * e * e + 1
            }
            function r() {
                var s = Date.now()
                  , l = Math.min(1, (s - o) / t)
                  , u = i(l);
                c(parseInt(u * (e - a) + a, 10)),
                1 > l ? ionic.requestAnimationFrame(r) : (5 > e && e > -5 && (T = !1,
                d(!1)),
                n && n())
            }
            var o = Date.now()
              , a = E;
            return a === e ? void n() : void ionic.requestAnimationFrame(r)
        }
        function h() {
            ionic.off("touchmove", a, _),
            ionic.off("touchend", o, _),
            ionic.off("scroll", s, y),
            y = null ,
            _ = null
        }
        function p() {
            n[0].classList.add("active"),
            e.$onPulling()
        }
        function m() {
            r(function() {
                n.removeClass("active refreshing refreshing-tail"),
                k && (k = !1)
            }
            , 150)
        }
        function v() {
            n[0].classList.add("refreshing"),
            e.$onRefresh()
        }
        function g() {
            n[0].classList.remove("invisible")
        }
        function $() {
            n[0].classList.add("invisible")
        }
        function w() {
            n[0].classList.add("refreshing-tail")
        }
        var y, _, b = this, S = !1, T = !1, x = 0, E = 0, C = 60, k = !1, A = 500, I = null , D = null , M = !0;
        u(t.pullingIcon) || t.$set("pullingIcon", "ion-android-arrow-down"),
        e.showSpinner = !u(t.refreshingIcon) && "none" != t.spinner,
        e.showIcon = u(t.refreshingIcon),
        i(e, t, {
            pullingIcon: "@",
            pullingText: "@",
            refreshingIcon: "@",
            refreshingText: "@",
            spinner: "@",
            disablePullingRotation: "@",
            $onRefresh: "&onRefresh",
            $onPulling: "&onPulling"
        }),
        e.$on("scroll.refreshComplete", function() {
            r(function() {
                ionic.requestAnimationFrame(w),
                f(0, A, m),
                r(function() {
                    T && (T = !1,
                    d(!1))
                }
                , A)
            }
            , A)
        }
        ),
        b.init = function() {
            if (y = n.parent().parent()[0],
            _ = n.parent()[0],
            !(y && y.classList.contains("ionic-scroll") && _ && _.classList.contains("scroll")))
                throw new Error("Refresher must be immediate child of ion-content or ion-scroll");
            ionic.on("touchmove", a, _),
            ionic.on("touchend", o, _),
            ionic.on("scroll", s, y),
            e.$on("$destroy", h)
        }
        ,
        b.getRefresherDomMethods = function() {
            return {
                activate: p,
                deactivate: m,
                start: v,
                show: g,
                hide: $,
                tail: w
            }
        }
        ,
        b.__handleTouchmove = a,
        b.__getScrollChild = function() {
            return _
        }
        ,
        b.__getScrollParent = function() {
            return y
        }
    }
    ]),
    s.controller("$ionicScroll", ["$scope", "scrollViewOptions", "$timeout", "$window", "$location", "$document", "$ionicScrollDelegate", "$ionicHistory", function(e, t, n, i, r, o, a, s) {
        var c = this;
        c.__timeout = n,
        c._scrollViewOptions = t,
        c.isNative = function() {
            return !!t.nativeScrolling
        }
        ;
        var l, d = c.element = t.el, f = c.$element = h(d);
        l = c.isNative() ? c.scrollView = new ionic.views.ScrollNative(t) : c.scrollView = new ionic.views.Scroll(t),
        (f.parent().length ? f.parent() : f).data("$$ionicScrollController", c);
        var p = a._registerInstance(c, t.delegateHandle, function() {
            return s.isActiveScope(e)
        }
        );
        u(t.bouncing) || ionic.Platform.ready(function() {
            l.options && (l.options.bouncing = !0,
            ionic.Platform.isAndroid() && (l.options.bouncing = !1,
            l.options.deceleration = .95))
        }
        );
        var m = angular.bind(l, l.resize);
        angular.element(i).on("resize", m);
        var v = function(t) {
            var n = (t.originalEvent || t).detail || {};
            e.$onScroll && e.$onScroll({
                event: t,
                scrollTop: n.scrollTop || 0,
                scrollLeft: n.scrollLeft || 0
            })
        }
        ;
        f.on("scroll", v),
        e.$on("$destroy", function() {
            p(),
            l && l.__cleanup && l.__cleanup(),
            angular.element(i).off("resize", m),
            f.off("scroll", v),
            l = c.scrollView = t = c._scrollViewOptions = t.el = c._scrollViewOptions.el = f = c.$element = d = null
        }
        ),
        n(function() {
            l && l.run && l.run()
        }
        ),
        c.getScrollView = function() {
            return l
        }
        ,
        c.getScrollPosition = function() {
            return l.getValues()
        }
        ,
        c.resize = function() {
            return n(m, 0, !1).then(function() {
                f && f.triggerHandler("scroll-resize")
            }
            )
        }
        ,
        c.scrollTop = function(e) {
            c.resize().then(function() {
                l.scrollTo(0, 0, !!e)
            }
            )
        }
        ,
        c.scrollBottom = function(e) {
            c.resize().then(function() {
                var t = l.getScrollMax();
                l.scrollTo(t.left, t.top, !!e)
            }
            )
        }
        ,
        c.scrollTo = function(e, t, n) {
            c.resize().then(function() {
                l.scrollTo(e, t, !!n)
            }
            )
        }
        ,
        c.zoomTo = function(e, t, n, i) {
            c.resize().then(function() {
                l.zoomTo(e, !!t, n, i)
            }
            )
        }
        ,
        c.zoomBy = function(e, t, n, i) {
            c.resize().then(function() {
                l.zoomBy(e, !!t, n, i)
            }
            )
        }
        ,
        c.scrollBy = function(e, t, n) {
            c.resize().then(function() {
                l.scrollBy(e, t, !!n)
            }
            )
        }
        ,
        c.anchorScroll = function(e) {
            c.resize().then(function() {
                var t = r.hash()
                  , n = t && o[0].getElementById(t);
                if (!t || !n)
                    return void l.scrollTo(0, 0, !!e);
                var i = n
                  , a = 0
                  , s = 0;
                do
                    null  !== i && (a += i.offsetLeft),
                    null  !== i && (s += i.offsetTop),
                    i = i.offsetParent;
                while (i.attributes != c.element.attributes && i.offsetParent);l.scrollTo(a, s, !!e)
            }
            )
        }
        ,
        c.freezeScroll = l.freeze,
        c.freezeAllScrolls = function(e) {
            for (var t = 0; t < a._instances.length; t++)
                a._instances[t].freezeScroll(e)
        }
        ,
        c._setRefresher = function(e, t, n) {
            c.refresher = t;
            var i = c.refresher.clientHeight || 60;
            l.activatePullToRefresh(i, n)
        }
    }
    ]),
    s.controller("$ionicSideMenus", ["$scope", "$attrs", "$ionicSideMenuDelegate", "$ionicPlatform", "$ionicBody", "$ionicHistory", "$ionicScrollDelegate", "IONIC_BACK_PRIORITY", "$rootScope", function(e, t, n, i, r, o, a, s, c) {
        function l(e) {
            e && !w.isScrollFreeze ? a.freezeAllScrolls(e) : !e && w.isScrollFreeze && a.freezeAllScrolls(!1),
            w.isScrollFreeze = e
        }
        var u, f, h, m, v, g, $, w = this, y = !0;
        w.$scope = e,
        w.initialize = function(e) {
            w.left = e.left,
            w.right = e.right,
            w.setContent(e.content),
            w.dragThresholdX = e.dragThresholdX || 10,
            o.registerHistory(w.$scope)
        }
        ,
        w.setContent = function(e) {
            e && (w.content = e,
            w.content.onDrag = function(e) {
                w._handleDrag(e)
            }
            ,
            w.content.endDrag = function(e) {
                w._endDrag(e)
            }
            )
        }
        ,
        w.isOpenLeft = function() {
            return w.getOpenAmount() > 0
        }
        ,
        w.isOpenRight = function() {
            return w.getOpenAmount() < 0
        }
        ,
        w.toggleLeft = function(e) {
            if (!$ && w.left.isEnabled) {
                var t = w.getOpenAmount();
                0 === arguments.length && (e = 0 >= t),
                w.content.enableAnimation(),
                e ? (w.openPercentage(100),
                c.$emit("$ionicSideMenuOpen", "left")) : (w.openPercentage(0),
                c.$emit("$ionicSideMenuClose", "left"))
            }
        }
        ,
        w.toggleRight = function(e) {
            if (!$ && w.right.isEnabled) {
                var t = w.getOpenAmount();
                0 === arguments.length && (e = t >= 0),
                w.content.enableAnimation(),
                e ? (w.openPercentage(-100),
                c.$emit("$ionicSideMenuOpen", "right")) : (w.openPercentage(0),
                c.$emit("$ionicSideMenuClose", "right"))
            }
        }
        ,
        w.toggle = function(e) {
            "right" == e ? w.toggleRight() : w.toggleLeft()
        }
        ,
        w.close = function() {
            w.openPercentage(0),
            c.$emit("$ionicSideMenuClose", "left"),
            c.$emit("$ionicSideMenuClose", "right")
        }
        ,
        w.getOpenAmount = function() {
            return w.content && w.content.getTranslateX() || 0
        }
        ,
        w.getOpenRatio = function() {
            var e = w.getOpenAmount();
            return e >= 0 ? e / w.left.width : e / w.right.width
        }
        ,
        w.isOpen = function() {
            return 0 !== w.getOpenAmount()
        }
        ,
        w.getOpenPercentage = function() {
            return 100 * w.getOpenRatio()
        }
        ,
        w.openPercentage = function(e) {
            var t = e / 100;
            w.left && e >= 0 ? w.openAmount(w.left.width * t) : w.right && 0 > e && w.openAmount(w.right.width * t),
            r.enableClass(0 !== e, "menu-open"),
            l(!1)
        }
        ,
        w.openAmount = function(e) {
            var t = w.left && w.left.width || 0
              , n = w.right && w.right.width || 0;
            return (!w.left || !w.left.isEnabled) && e > 0 || (!w.right || !w.right.isEnabled) && 0 > e ? void w.content.setTranslateX(0) : f && e > t ? void w.content.setTranslateX(t) : u && -n > e ? void w.content.setTranslateX(-n) : (w.content.setTranslateX(e),
            void (e >= 0 ? (f = !0,
            u = !1,
            e > 0 && (w.right && w.right.pushDown && w.right.pushDown(),
            w.left && w.left.bringUp && w.left.bringUp())) : (u = !0,
            f = !1,
            w.right && w.right.bringUp && w.right.bringUp(),
            w.left && w.left.pushDown && w.left.pushDown())))
        }
        ,
        w.snapToRest = function(e) {
            w.content.enableAnimation(),
            h = !1;
            var t = w.getOpenRatio();
            if (0 === t)
                return void w.openPercentage(0);
            var n = .3
              , i = e.gesture.velocityX
              , r = e.gesture.direction;
            w.openPercentage(t > 0 && .5 > t && "right" == r && n > i ? 0 : t > .5 && "left" == r && n > i ? 100 : 0 > t && t > -.5 && "left" == r && n > i ? 0 : .5 > t && "right" == r && n > i ? -100 : "right" == r && t >= 0 && (t >= .5 || i > n) ? 100 : "left" == r && 0 >= t && (-.5 >= t || i > n) ? -100 : 0)
        }
        ,
        w.enableMenuWithBackViews = function(e) {
            return arguments.length && (y = !!e),
            y
        }
        ,
        w.isAsideExposed = function() {
            return !!$
        }
        ,
        w.exposeAside = function(e) {
            (w.left && w.left.isEnabled || w.right && w.right.isEnabled) && (w.close(),
            $ = e,
            w.left && w.left.isEnabled ? w.content.setMarginLeft($ ? w.left.width : 0) : w.right && w.right.isEnabled && w.content.setMarginRight($ ? w.right.width : 0),
            w.$scope.$emit("$ionicExposeAside", $))
        }
        ,
        w.activeAsideResizing = function(e) {
            r.enableClass(e, "aside-resizing")
        }
        ,
        w._endDrag = function(e) {
            l(!1),
            $ || (h && w.snapToRest(e),
            m = null ,
            v = null ,
            g = null )
        }
        ,
        w._handleDrag = function(t) {
            !$ && e.dragContent && (m ? v = t.gesture.touches[0].pageX : (m = t.gesture.touches[0].pageX,
            v = m),
            !h && Math.abs(v - m) > w.dragThresholdX && (m = v,
            h = !0,
            w.content.disableAnimation(),
            g = w.getOpenAmount()),
            h && (w.openAmount(g + (v - m)),
            l(!0)))
        }
        ,
        w.canDragContent = function(t) {
            return arguments.length && (e.dragContent = !!t),
            e.dragContent
        }
        ,
        w.edgeThreshold = 25,
        w.edgeThresholdEnabled = !1,
        w.edgeDragThreshold = function(e) {
            return arguments.length && (d(e) && e > 0 ? (w.edgeThreshold = e,
            w.edgeThresholdEnabled = !0) : w.edgeThresholdEnabled = !!e),
            w.edgeThresholdEnabled
        }
        ,
        w.isDraggableTarget = function(t) {
            var n = w.edgeThresholdEnabled && !w.isOpen()
              , i = t.gesture.startEvent && t.gesture.startEvent.center && t.gesture.startEvent.center.pageX
              , r = !n || i <= w.edgeThreshold || i >= w.content.element.offsetWidth - w.edgeThreshold
              , a = o.backView()
              , s = y ? !0 : !a;
            if (!s) {
                var c = o.currentView() || {};
                return a.historyId !== c.historyId
            }
            return (e.dragContent || w.isOpen()) && r && !t.gesture.srcEvent.defaultPrevented && s && !t.target.tagName.match(/input|textarea|select|object|embed/i) && !t.target.isContentEditable && !(t.target.dataset ? t.target.dataset.preventScroll : "true" == t.target.getAttribute("data-prevent-scroll"))
        }
        ,
        e.sideMenuContentTranslateX = 0;
        var _ = p
          , b = angular.bind(w, w.close);
        e.$watch(function() {
            return 0 !== w.getOpenAmount()
        }
        , function(e) {
            _(),
            e && (_ = i.registerBackButtonAction(b, s.sideMenu))
        }
        );
        var S = n._registerInstance(w, t.delegateHandle, function() {
            return o.isActiveScope(e)
        }
        );
        e.$on("$destroy", function() {
            S(),
            _(),
            w.$scope = null ,
            w.content && (w.content.element = null ,
            w.content = null ),
            l(!1)
        }
        ),
        w.initialize({
            left: {
                width: 275
            },
            right: {
                width: 275
            }
        })
    }
    ]),
    function(e) {
        function t(e, i, r, o) {
            var a, s, c, l = document.createElement(f[e] || e);
            for (a in i)
                if (angular.isArray(i[a]))
                    for (s = 0; s < i[a].length; s++)
                        if (i[a][s].fn)
                            for (c = 0; c < i[a][s].t; c++)
                                t(a, i[a][s].fn(c, o), l, o);
                        else
                            t(a, i[a][s], l, o);
                else
                    n(l, a, i[a]);
            r.appendChild(l)
        }
        function n(e, t, n) {
            e.setAttribute(f[t] || t, n)
        }
        function i(e, t) {
            var n = e.split(";")
              , i = n.slice(t)
              , r = n.slice(0, n.length - i.length);
            return n = i.concat(r).reverse(),
            n.join(";") + ";" + n[0]
        }
        function r(e, t) {
            return e /= t / 2,
            1 > e ? .5 * e * e * e : (e -= 2,
            .5 * (e * e * e + 2))
        }
        var o = "translate(32,32)"
          , a = "stroke-opacity"
          , c = "round"
          , l = "indefinite"
          , u = "750ms"
          , d = "none"
          , f = {
            a: "animate",
            an: "attributeName",
            at: "animateTransform",
            c: "circle",
            da: "stroke-dasharray",
            os: "stroke-dashoffset",
            f: "fill",
            lc: "stroke-linecap",
            rc: "repeatCount",
            sw: "stroke-width",
            t: "transform",
            v: "values"
        }
          , h = {
            v: "0,32,32;360,32,32",
            an: "transform",
            type: "rotate",
            rc: l,
            dur: u
        }
          , p = {
            sw: 4,
            lc: c,
            line: [{
                fn: function(e, t) {
                    return {
                        y1: "ios" == t ? 17 : 12,
                        y2: "ios" == t ? 29 : 20,
                        t: o + " rotate(" + (30 * e + (6 > e ? 180 : -180)) + ")",
                        a: [{
                            fn: function() {
                                return {
                                    an: a,
                                    dur: u,
                                    v: i("0;.1;.15;.25;.35;.45;.55;.65;.7;.85;1", e),
                                    rc: l
                                }
                            },
                            t: 1
                        }]
                    }
                },
                t: 12
            }]
        }
          , m = {
            android: {
                c: [{
                    sw: 6,
                    da: 128,
                    os: 82,
                    r: 26,
                    cx: 32,
                    cy: 32,
                    f: d
                }]
            },
            ios: p,
            "ios-small": p,
            bubbles: {
                sw: 0,
                c: [{
                    fn: function(e) {
                        return {
                            cx: 24 * Math.cos(2 * Math.PI * e / 8),
                            cy: 24 * Math.sin(2 * Math.PI * e / 8),
                            t: o,
                            a: [{
                                fn: function() {
                                    return {
                                        an: "r",
                                        dur: u,
                                        v: i("1;2;3;4;5;6;7;8", e),
                                        rc: l
                                    }
                                },
                                t: 1
                            }]
                        }
                    },
                    t: 8
                }]
            },
            circles: {
                c: [{
                    fn: function(e) {
                        return {
                            r: 5,
                            cx: 24 * Math.cos(2 * Math.PI * e / 8),
                            cy: 24 * Math.sin(2 * Math.PI * e / 8),
                            t: o,
                            sw: 0,
                            a: [{
                                fn: function() {
                                    return {
                                        an: "fill-opacity",
                                        dur: u,
                                        v: i(".3;.3;.3;.4;.7;.85;.9;1", e),
                                        rc: l
                                    }
                                },
                                t: 1
                            }]
                        }
                    },
                    t: 8
                }]
            },
            crescent: {
                c: [{
                    sw: 4,
                    da: 128,
                    os: 82,
                    r: 26,
                    cx: 32,
                    cy: 32,
                    f: d,
                    at: [h]
                }]
            },
            dots: {
                c: [{
                    fn: function(e) {
                        return {
                            cx: 16 + 16 * e,
                            cy: 32,
                            sw: 0,
                            a: [{
                                fn: function() {
                                    return {
                                        an: "fill-opacity",
                                        dur: u,
                                        v: i(".5;.6;.8;1;.8;.6;.5", e),
                                        rc: l
                                    }
                                },
                                t: 1
                            }, {
                                fn: function() {
                                    return {
                                        an: "r",
                                        dur: u,
                                        v: i("4;5;6;5;4;3;3", e),
                                        rc: l
                                    }
                                },
                                t: 1
                            }]
                        }
                    },
                    t: 3
                }]
            },
            lines: {
                sw: 7,
                lc: c,
                line: [{
                    fn: function(e) {
                        return {
                            x1: 10 + 14 * e,
                            x2: 10 + 14 * e,
                            a: [{
                                fn: function() {
                                    return {
                                        an: "y1",
                                        dur: u,
                                        v: i("16;18;28;18;16", e),
                                        rc: l
                                    }
                                },
                                t: 1
                            }, {
                                fn: function() {
                                    return {
                                        an: "y2",
                                        dur: u,
                                        v: i("48;44;36;46;48", e),
                                        rc: l
                                    }
                                },
                                t: 1
                            }, {
                                fn: function() {
                                    return {
                                        an: a,
                                        dur: u,
                                        v: i("1;.8;.5;.4;1", e),
                                        rc: l
                                    }
                                },
                                t: 1
                            }]
                        }
                    },
                    t: 4
                }]
            },
            ripple: {
                f: d,
                "fill-rule": "evenodd",
                sw: 3,
                circle: [{
                    fn: function(e) {
                        return {
                            cx: 32,
                            cy: 32,
                            a: [{
                                fn: function() {
                                    return {
                                        an: "r",
                                        begin: -1 * e + "s",
                                        dur: "2s",
                                        v: "0;24",
                                        keyTimes: "0;1",
                                        keySplines: "0.1,0.2,0.3,1",
                                        calcMode: "spline",
                                        rc: l
                                    }
                                },
                                t: 1
                            }, {
                                fn: function() {
                                    return {
                                        an: a,
                                        begin: -1 * e + "s",
                                        dur: "2s",
                                        v: ".2;1;.2;0",
                                        rc: l
                                    }
                                },
                                t: 1
                            }]
                        }
                    },
                    t: 2
                }]
            },
            spiral: {
                defs: [{
                    linearGradient: [{
                        id: "sGD",
                        gradientUnits: "userSpaceOnUse",
                        x1: 55,
                        y1: 46,
                        x2: 2,
                        y2: 46,
                        stop: [{
                            offset: .1,
                            "class": "stop1"
                        }, {
                            offset: 1,
                            "class": "stop2"
                        }]
                    }]
                }],
                g: [{
                    sw: 4,
                    lc: c,
                    f: d,
                    path: [{
                        stroke: "url(#sGD)",
                        d: "M4,32 c0,15,12,28,28,28c8,0,16-4,21-9"
                    }, {
                        d: "M60,32 C60,16,47.464,4,32,4S4,16,4,32"
                    }],
                    at: [h]
                }]
            }
        }
          , v = {
            android: function(t) {
                function i() {
                    var t = r(Date.now() - o, 650)
                      , u = 1
                      , d = 0
                      , f = 188 - 58 * t
                      , h = 182 - 182 * t;
                    a % 2 && (u = -1,
                    d = -64,
                    f = 128 - -58 * t,
                    h = 182 * t);
                    var p = [0, -101, -90, -11, -180, 79, -270, -191][a];
                    n(l, "da", Math.max(Math.min(f, 188), 128)),
                    n(l, "os", Math.max(Math.min(h, 182), 0)),
                    n(l, "t", "scale(" + u + ",1) translate(" + d + ",0) rotate(" + p + ",32,32)"),
                    s += 4.1,
                    s > 359 && (s = 0),
                    n(c, "t", "rotate(" + s + ",32,32)"),
                    t >= 1 && (a++,
                    a > 7 && (a = 0),
                    o = Date.now()),
                    e.requestAnimationFrame(i)
                }
                var o, a = 0, s = 0, c = t.querySelector("g"), l = t.querySelector("circle");
                return function() {
                    o = Date.now(),
                    i()
                }
            }
        };
        s.controller("$ionicSpinner", ["$element", "$attrs", "$ionicConfig", function(e, n, i) {
            var r;
            this.init = function() {
                r = n.icon || i.spinner.icon();
                var o = document.createElement("div");
                return t("svg", {
                    viewBox: "0 0 64 64",
                    g: [m[r]]
                }, o, r),
                e.html(o.innerHTML),
                this.start(),
                r
            }
            ,
            this.start = function() {
                v[r] && v[r](e[0])()
            }
        }
        ])
    }
    (ionic),
    s.controller("$ionicTab", ["$scope", "$ionicHistory", "$attrs", "$location", "$state", function(e, t, n, i, r) {
        this.$scope = e,
        this.hrefMatchesState = function() {
            return n.href && 0 === i.path().indexOf(n.href.replace(/^#/, "").replace(/\/$/, ""))
        }
        ,
        this.srefMatchesState = function() {
            return n.uiSref && r.includes(n.uiSref.split("(")[0])
        }
        ,
        this.navNameMatchesState = function() {
            return this.navViewName && t.isCurrentStateNavView(this.navViewName)
        }
        ,
        this.tabMatchesState = function() {
            return this.hrefMatchesState() || this.srefMatchesState() || this.navNameMatchesState()
        }
    }
    ]),
    s.controller("$ionicTabs", ["$scope", "$element", "$ionicHistory", function(e, t, n) {
        var i, r = this, o = null , a = null ;
        r.tabs = [],
        r.selectedIndex = function() {
            return r.tabs.indexOf(o)
        }
        ,
        r.selectedTab = function() {
            return o
        }
        ,
        r.previousSelectedTab = function() {
            return a
        }
        ,
        r.add = function(e) {
            n.registerHistory(e),
            r.tabs.push(e)
        }
        ,
        r.remove = function(e) {
            var t = r.tabs.indexOf(e);
            if (-1 !== t) {
                if (e.$tabSelected)
                    if (r.deselect(e),
                    1 === r.tabs.length)
                        ;
                    else {
                        var n = t === r.tabs.length - 1 ? t - 1 : t + 1;
                        r.select(r.tabs[n])
                    }
                r.tabs.splice(t, 1)
            }
        }
        ,
        r.deselect = function(e) {
            e.$tabSelected && (a = o,
            o = i = null ,
            e.$tabSelected = !1,
            (e.onDeselect || p)(),
            e.$broadcast && e.$broadcast("$ionicHistory.deselect"))
        }
        ,
        r.select = function(t, a) {
            var s;
            if (d(t)) {
                if (s = t,
                s >= r.tabs.length)
                    return;
                t = r.tabs[s]
            } else
                s = r.tabs.indexOf(t);
            1 === arguments.length && (a = !(!t.navViewName && !t.uiSref)),
            o && o.$historyId == t.$historyId ? a && n.goToHistoryRoot(t.$historyId) : i !== s && (l(r.tabs, function(e) {
                r.deselect(e)
            }
            ),
            o = t,
            i = s,
            r.$scope && r.$scope.$parent && (r.$scope.$parent.$activeHistoryId = t.$historyId),
            t.$tabSelected = !0,
            (t.onSelect || p)(),
            a && e.$emit("$ionicHistory.change", {
                type: "tab",
                tabIndex: s,
                historyId: t.$historyId,
                navViewName: t.navViewName,
                hasNavView: !!t.navViewName,
                title: t.title,
                url: t.href,
                uiSref: t.uiSref
            }))
        }
        ,
        r.hasActiveScope = function() {
            for (var e = 0; e < r.tabs.length; e++)
                if (n.isActiveScope(r.tabs[e]))
                    return !0;
            return !1
        }
    }
    ]),
    s.controller("$ionicView", ["$scope", "$element", "$attrs", "$compile", "$rootScope", function(e, t, n, i, r) {
        function o() {
            var t = u(n.viewTitle) && "viewTitle" || u(n.title) && "title";
            t && (a(n[t]),
            $.push(n.$observe(t, a))),
            u(n.hideBackButton) && $.push(e.$watch(n.hideBackButton, function(e) {
                f.showBackButton(!e)
            }
            )),
            u(n.hideNavBar) && $.push(e.$watch(n.hideNavBar, function(e) {
                f.showBar(!e)
            }
            ))
        }
        function a(e) {
            u(e) && e !== m && (m = e,
            f.title(m))
        }
        function s() {
            for (var e = 0; e < $.length; e++)
                $[e]();
            $ = []
        }
        function l(t) {
            return t ? i(t)(e.$new()) : void 0
        }
        function d(t) {
            return !!e.$eval(n[t])
        }
        var f, h, p, m, v = this, g = {}, $ = [], w = e.$on("ionNavBar.init", function(e, t) {
            e.stopPropagation(),
            h = t
        }
        );
        v.init = function() {
            w();
            var n = t.inheritedData("$ionModalController");
            f = t.inheritedData("$ionNavViewController"),
            f && !n && (e.$on("$ionicView.beforeEnter", v.beforeEnter),
            e.$on("$ionicView.afterEnter", o),
            e.$on("$ionicView.beforeLeave", s))
        }
        ,
        v.beforeEnter = function(t, i) {
            if (i && !i.viewNotified) {
                i.viewNotified = !0,
                r.$$phase || e.$digest(),
                m = u(n.viewTitle) ? n.viewTitle : n.title;
                var o = {};
                for (var a in g)
                    o[a] = l(g[a]);
                f.beforeEnter(c(i, {
                    title: m,
                    showBack: !d("hideBackButton"),
                    navBarItems: o,
                    navBarDelegate: h || null ,
                    showNavBar: !d("hideNavBar"),
                    hasHeaderBar: !!p
                })),
                s()
            }
        }
        ,
        v.navElement = function(e, t) {
            g[e] = t
        }
    }
    ]),
    s.directive("ionActionSheet", ["$document", function(e) {
        return {
            restrict: "E",
            scope: !0,
            replace: !0,
            link: function(t, n) {
                var i = function(e) {
                    27 == e.which && (t.cancel(),
                    t.$apply())
                }
                  , r = function(e) {
                    e.target == n[0] && (t.cancel(),
                    t.$apply())
                }
                ;
                t.$on("$destroy", function() {
                    n.remove(),
                    e.unbind("keyup", i)
                }
                ),
                e.bind("keyup", i),
                n.bind("click", r)
            },
            template: '<div class="action-sheet-backdrop"><div class="action-sheet-wrapper"><div class="action-sheet" ng-class="{\'action-sheet-has-icons\': $actionSheetHasIcon}"><div class="action-sheet-group action-sheet-options"><div class="action-sheet-title" ng-if="titleText" ng-bind-html="titleText"></div><button class="button action-sheet-option" ng-click="buttonClicked($index)" ng-repeat="b in buttons" ng-bind-html="b.text"></button><button class="button destructive action-sheet-destructive" ng-if="destructiveText" ng-click="destructiveButtonClicked()" ng-bind-html="destructiveText"></button></div><div class="action-sheet-group action-sheet-cancel" ng-if="cancelText"><button class="button" ng-click="cancel()" ng-bind-html="cancelText"></button></div></div></div></div>'
        }
    }
    ]),
    s.directive("ionCheckbox", ["$ionicConfig", function(e) {
        return {
            restrict: "E",
            replace: !0,
            require: "?ngModel",
            transclude: !0,
            template: '<label class="item item-checkbox"><div class="checkbox checkbox-input-hidden disable-pointer-events"><input type="checkbox"><i class="checkbox-icon"></i></div><div class="item-content disable-pointer-events" ng-transclude></div></label>',
            compile: function(t, n) {
                var i = t.find("input");
                l({
                    name: n.name,
                    "ng-value": n.ngValue,
                    "ng-model": n.ngModel,
                    "ng-checked": n.ngChecked,
                    "ng-disabled": n.ngDisabled,
                    "ng-true-value": n.ngTrueValue,
                    "ng-false-value": n.ngFalseValue,
                    "ng-change": n.ngChange,
                    "ng-required": n.ngRequired,
                    required: n.required
                }, function(e, t) {
                    u(e) && i.attr(t, e)
                }
                );
                var r = t[0].querySelector(".checkbox");
                r.classList.add("checkbox-" + e.form.checkbox())
            }
        }
    }
    ]),
    s.directive("collectionRepeat", e).factory("$ionicCollectionManager", t);
    var y = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
      , _ = /height:.*?px;\s*width:.*?px/
      , b = 3;
    e.$inject = ["$ionicCollectionManager", "$parse", "$window", "$$rAF", "$rootScope", "$timeout"],
    t.$inject = ["$rootScope", "$window", "$$rAF"],
    s.directive("ionContent", ["$timeout", "$controller", "$ionicBind", "$ionicConfig", function(e, t, n, i) {
        return {
            restrict: "E",
            require: "^?ionNavView",
            scope: !0,
            priority: 800,
            compile: function(e, r) {
                function o(e, i, o) {
                    function l() {
                        e.$onScrollComplete({
                            scrollTop: s.scrollView.__scrollTop,
                            scrollLeft: s.scrollView.__scrollLeft
                        })
                    }
                    var d = e.$parent;
                    if (e.$watch(function() {
                        return (d.$hasHeader ? " has-header" : "") + (d.$hasSubheader ? " has-subheader" : "") + (d.$hasFooter ? " has-footer" : "") + (d.$hasSubfooter ? " has-subfooter" : "") + (d.$hasTabs ? " has-tabs" : "") + (d.$hasTabsTop ? " has-tabs-top" : "")
                    }
                    , function(e, t) {
                        i.removeClass(t),
                        i.addClass(e)
                    }
                    ),
                    e.$hasHeader = e.$hasSubheader = e.$hasFooter = e.$hasSubfooter = e.$hasTabs = e.$hasTabsTop = !1,
                    n(e, o, {
                        $onScroll: "&onScroll",
                        $onScrollComplete: "&onScrollComplete",
                        hasBouncing: "@",
                        padding: "@",
                        direction: "@",
                        scrollbarX: "@",
                        scrollbarY: "@",
                        startX: "@",
                        startY: "@",
                        scrollEventInterval: "@"
                    }),
                    e.direction = e.direction || "y",
                    u(o.padding) && e.$watch(o.padding, function(e) {
                        (a || i).toggleClass("padding", !!e)
                    }
                    ),
                    "false" === o.scroll)
                        ;
                    else {
                        var f = {};
                        c ? (i.addClass("overflow-scroll"),
                        f = {
                            el: i[0],
                            delegateHandle: r.delegateHandle,
                            startX: e.$eval(e.startX) || 0,
                            startY: e.$eval(e.startY) || 0,
                            nativeScrolling: !0
                        }) : f = {
                            el: i[0],
                            delegateHandle: r.delegateHandle,
                            locking: "true" === (r.locking || "true"),
                            bouncing: e.$eval(e.hasBouncing),
                            startX: e.$eval(e.startX) || 0,
                            startY: e.$eval(e.startY) || 0,
                            scrollbarX: e.$eval(e.scrollbarX) !== !1,
                            scrollbarY: e.$eval(e.scrollbarY) !== !1,
                            scrollingX: e.direction.indexOf("x") >= 0,
                            scrollingY: e.direction.indexOf("y") >= 0,
                            scrollEventInterval: parseInt(e.scrollEventInterval, 10) || 10,
                            scrollingComplete: l
                        },
                        s = t("$ionicScroll", {
                            $scope: e,
                            scrollViewOptions: f
                        }),
                        e.$on("$destroy", function() {
                            f && (f.scrollingComplete = p,
                            delete f.el),
                            a = null ,
                            i = null ,
                            r.$$element = null
                        }
                        )
                    }
                }
                var a, s;
                e.addClass("scroll-content ionic-scroll"),
                "false" != r.scroll ? (a = h('<div class="scroll"></div>'),
                a.append(e.contents()),
                e.append(a)) : e.addClass("scroll-content-false");
                var c = "true" === r.overflowScroll || !i.scrolling.jsScrolling();
                return c && (c = !e[0].querySelector("[collection-repeat]")),
                {
                    pre: o
                }
            }
        }
    }
    ]),
    s.directive("exposeAsideWhen", ["$window", function(e) {
        return {
            restrict: "A",
            require: "^ionSideMenus",
            link: function(t, n, i, r) {
                function o() {
                    var t = "large" == i.exposeAsideWhen ? "(min-width:768px)" : i.exposeAsideWhen;
                    r.exposeAside(e.matchMedia(t).matches),
                    r.activeAsideResizing(!1)
                }
                function a() {
                    r.activeAsideResizing(!0),
                    s()
                }
                var s = ionic.debounce(function() {
                    t.$apply(o)
                }
                , 300, !1);
                t.$evalAsync(o),
                ionic.on("resize", a, e),
                t.$on("$destroy", function() {
                    ionic.off("resize", a, e)
                }
                )
            }
        }
    }
    ]);
    var S = "onHold onTap onDoubleTap onTouch onRelease onDragStart onDrag onDragEnd onDragUp onDragRight onDragDown onDragLeft onSwipe onSwipeUp onSwipeRight onSwipeDown onSwipeLeft".split(" ");
    S.forEach(function(e) {
        s.directive(e, n(e))
    }
    ),
    s.directive("ionHeaderBar", i()).directive("ionHeaderBar", r(!0)).directive("ionFooterBar", r(!1)),
    s.directive("ionInfiniteScroll", ["$timeout", function(e) {
        return {
            restrict: "E",
            require: ["?^$ionicScroll", "ionInfiniteScroll"],
            template: function(e, t) {
                return t.icon ? '<i class="icon {{icon()}} icon-refreshing {{scrollingType}}"></i>' : '<ion-spinner icon="{{spinner()}}"></ion-spinner>'
            },
            scope: !0,
            controller: "$ionInfiniteScroll",
            link: function(t, n, i, r) {
                var o = r[1]
                  , a = o.scrollCtrl = r[0]
                  , s = o.jsScrolling = !a.isNative();
                if (s)
                    o.scrollView = a.scrollView,
                    t.scrollingType = "js-scrolling",
                    a.$element.on("scroll", o.checkBounds);
                else {
                    var c = ionic.DomUtil.getParentOrSelfWithClass(n[0].parentNode, "overflow-scroll");
                    if (o.scrollEl = c,
                    !c)
                        throw "Infinite scroll must be used inside a scrollable div";
                    o.scrollEl.addEventListener("scroll", o.checkBounds)
                }
                var l = u(i.immediateCheck) ? t.$eval(i.immediateCheck) : !0;
                l && e(function() {
                    o.checkBounds()
                }
                )
            }
        }
    }
    ]),
    s.directive("ionItem", ["$$rAF", function(e) {
        return {
            restrict: "E",
            controller: ["$scope", "$element", function(e, t) {
                this.$scope = e,
                this.$element = t
            }
            ],
            scope: !0,
            compile: function(t, n) {
                var i = u(n.href) || u(n.ngHref) || u(n.uiSref)
                  , r = i || /ion-(delete|option|reorder)-button/i.test(t.html());
                if (r) {
                    var o = h(i ? "<a></a>" : "<div></div>");
                    o.addClass("item-content"),
                    (u(n.href) || u(n.ngHref)) && (o.attr("ng-href", "{{$href()}}"),
                    u(n.target) && o.attr("target", "{{$target()}}")),
                    o.append(t.contents()),
                    t.addClass("item item-complex").append(o)
                } else
                    t.addClass("item");
                return function(t, n, i) {
                    t.$href = function() {
                        return i.href || i.ngHref
                    }
                    ,
                    t.$target = function() {
                        return i.target
                    }
                    ;
                    var r = n[0].querySelector(".item-content");
                    r && t.$on("$collectionRepeatLeave", function() {
                        r && r.$$ionicOptionsOpen && (r.style[ionic.CSS.TRANSFORM] = "",
                        r.style[ionic.CSS.TRANSITION] = "none",
                        e(function() {
                            r.style[ionic.CSS.TRANSITION] = ""
                        }
                        ),
                        r.$$ionicOptionsOpen = !1)
                    }
                    )
                }
            }
        }
    }
    ]);
    var T = '<div class="item-left-edit item-delete enable-pointer-events"></div>';
    s.directive("ionDeleteButton", function() {
        function e(e) {
            e.stopPropagation()
        }
        return {
            restrict: "E",
            require: ["^^ionItem", "^?ionList"],
            priority: Number.MAX_VALUE,
            compile: function(t, n) {
                return n.$set("class", (n["class"] || "") + " button icon button-icon", !0),
                function(t, n, i, r) {
                    function o() {
                        s = s || n.controller("ionList"),
                        s && s.showDelete() && c.addClass("visible active")
                    }
                    var a = r[0]
                      , s = r[1]
                      , c = h(T);
                    c.append(n),
                    a.$element.append(c).addClass("item-left-editable"),
                    n.on("click", e),
                    o(),
                    t.$on("$ionic.reconnectScope", o)
                }
            }
        }
    }
    ),
    s.directive("itemFloatingLabel", function() {
        return {
            restrict: "C",
            link: function(e, t) {
                var n = t[0]
                  , i = n.querySelector("input, textarea")
                  , r = n.querySelector(".input-label");
                if (i && r) {
                    var o = function() {
                        i.value ? r.classList.add("has-input") : r.classList.remove("has-input")
                    }
                    ;
                    i.addEventListener("input", o);
                    var a = h(i).controller("ngModel");
                    a && (a.$render = function() {
                        i.value = a.$viewValue || "",
                        o()
                    }
                    ),
                    e.$on("$destroy", function() {
                        i.removeEventListener("input", o)
                    }
                    )
                }
            }
        }
    }
    );
    var x = '<div class="item-options invisible"></div>';
    s.directive("ionOptionButton", [function() {
        function e(e) {
            e.stopPropagation()
        }
        return {
            restrict: "E",
            require: "^ionItem",
            priority: Number.MAX_VALUE,
            compile: function(t, n) {
                return n.$set("class", (n["class"] || "") + " button", !0),
                function(t, n, i, r) {
                    r.optionsContainer || (r.optionsContainer = h(x),
                    r.$element.append(r.optionsContainer)),
                    r.optionsContainer.append(n),
                    r.$element.addClass("item-right-editable"),
                    n.on("click", e)
                }
            }
        }
    }
    ]);
    var E = '<div data-prevent-scroll="true" class="item-right-edit item-reorder enable-pointer-events"></div>';
    s.directive("ionReorderButton", ["$parse", function(e) {
        return {
            restrict: "E",
            require: ["^ionItem", "^?ionList"],
            priority: Number.MAX_VALUE,
            compile: function(t, n) {
                return n.$set("class", (n["class"] || "") + " button icon button-icon", !0),
                t[0].setAttribute("data-prevent-scroll", !0),
                function(t, n, i, r) {
                    var o = r[0]
                      , a = r[1]
                      , s = e(i.onReorder);
                    t.$onReorder = function(e, n) {
                        s(t, {
                            $fromIndex: e,
                            $toIndex: n
                        })
                    }
                    ,
                    i.ngClick || i.onClick || i.onclick || (n[0].onclick = function(e) {
                        return e.stopPropagation(),
                        !1
                    }
                    );
                    var c = h(E);
                    c.append(n),
                    o.$element.append(c).addClass("item-right-editable"),
                    a && a.showReorder() && c.addClass("visible active")
                }
            }
        }
    }
    ]),
    s.directive("keyboardAttach", function() {
        return function(e, t) {
            function n(e) {
                if (!ionic.Platform.isAndroid() || ionic.Platform.isFullScreen) {
                    var n = e.keyboardHeight || e.detail.keyboardHeight;
                    t.css("bottom", n + "px"),
                    r = t.controller("$ionicScroll"),
                    r && (r.scrollView.__container.style.bottom = n + o(t[0]) + "px")
                }
            }
            function i() {
                (!ionic.Platform.isAndroid() || ionic.Platform.isFullScreen) && (t.css("bottom", ""),
                r && (r.scrollView.__container.style.bottom = ""))
            }
            ionic.on("native.keyboardshow", n, window),
            ionic.on("native.keyboardhide", i, window),
            ionic.on("native.showkeyboard", n, window),
            ionic.on("native.hidekeyboard", i, window);
            var r;
            e.$on("$destroy", function() {
                ionic.off("native.keyboardshow", n, window),
                ionic.off("native.keyboardhide", i, window),
                ionic.off("native.showkeyboard", n, window),
                ionic.off("native.hidekeyboard", i, window)
            }
            )
        }
    }
    ),
    s.directive("ionList", ["$timeout", function(e) {
        return {
            restrict: "E",
            require: ["ionList", "^?$ionicScroll"],
            controller: "$ionicList",
            compile: function(t, n) {
                var i = h('<div class="list">').append(t.contents()).addClass(n.type);
                return t.append(i),
                function(t, i, r, o) {
                    function a() {
                        function r(e, t) {
                            t() && e.addClass("visible") || e.removeClass("active"),
                            ionic.requestAnimationFrame(function() {
                                t() && e.addClass("active") || e.removeClass("visible")
                            }
                            )
                        }
                        var o = s.listView = new ionic.views.ListView({
                            el: i[0],
                            listEl: i.children()[0],
                            scrollEl: c && c.element,
                            scrollView: c && c.scrollView,
                            onReorder: function(t, n, i) {
                                var r = h(t).scope();
                                r && r.$onReorder && e(function() {
                                    r.$onReorder(n, i)
                                }
                                )
                            },
                            canSwipe: function() {
                                return s.canSwipeItems()
                            }
                        });
                        t.$on("$destroy", function() {
                            o && (o.deregister && o.deregister(),
                            o = null )
                        }
                        ),
                        u(n.canSwipe) && t.$watch("!!(" + n.canSwipe + ")", function(e) {
                            s.canSwipeItems(e)
                        }
                        ),
                        u(n.showDelete) && t.$watch("!!(" + n.showDelete + ")", function(e) {
                            s.showDelete(e)
                        }
                        ),
                        u(n.showReorder) && t.$watch("!!(" + n.showReorder + ")", function(e) {
                            s.showReorder(e)
                        }
                        ),
                        t.$watch(function() {
                            return s.showDelete()
                        }
                        , function(e, t) {
                            if (e || t) {
                                e && s.closeOptionButtons(),
                                s.canSwipeItems(!e),
                                i.children().toggleClass("list-left-editing", e),
                                i.toggleClass("disable-pointer-events", e);
                                var n = h(i[0].getElementsByClassName("item-delete"));
                                r(n, s.showDelete)
                            }
                        }
                        ),
                        t.$watch(function() {
                            return s.showReorder()
                        }
                        , function(e, t) {
                            if (e || t) {
                                e && s.closeOptionButtons(),
                                s.canSwipeItems(!e),
                                i.children().toggleClass("list-right-editing", e),
                                i.toggleClass("disable-pointer-events", e);
                                var n = h(i[0].getElementsByClassName("item-reorder"));
                                r(n, s.showReorder)
                            }
                        }
                        )
                    }
                    var s = o[0]
                      , c = o[1];
                    e(a)
                }
            }
        }
    }
    ]),
    s.directive("menuClose", ["$ionicHistory", function(e) {
        return {
            restrict: "AC",
            link: function(t, n) {
                n.bind("click", function() {
                    var t = n.inheritedData("$ionSideMenusController");
                    t && (e.nextViewOptions({
                        historyRoot: !0,
                        disableAnimate: !0,
                        expire: 300
                    }),
                    t.close())
                }
                )
            }
        }
    }
    ]),
    s.directive("menuToggle", function() {
        return {
            restrict: "AC",
            link: function(e, t, n) {
                e.$on("$ionicView.beforeEnter", function(e, n) {
                    if (n.enableBack) {
                        var i = t.inheritedData("$ionSideMenusController");
                        i.enableMenuWithBackViews() || t.addClass("hide")
                    } else
                        t.removeClass("hide")
                }
                ),
                t.bind("click", function() {
                    var e = t.inheritedData("$ionSideMenusController");
                    e && e.toggle(n.menuToggle)
                }
                )
            }
        }
    }
    ),
    s.directive("ionModal", [function() {
        return {
            restrict: "E",
            transclude: !0,
            replace: !0,
            controller: [function() {}
            ],
            template: '<div class="modal-backdrop"><div class="modal-backdrop-bg"></div><div class="modal-wrapper" ng-transclude></div></div>'
        }
    }
    ]),
    s.directive("ionModalView", function() {
        return {
            restrict: "E",
            compile: function(e) {
                e.addClass("modal")
            }
        }
    }
    ),
    s.directive("ionNavBackButton", ["$ionicConfig", "$document", function(e, t) {
        return {
            restrict: "E",
            require: "^ionNavBar",
            compile: function(n, i) {
                function r(e) {
                    return /ion-|icon/.test(e.className)
                }
                var o = t[0].createElement("button");
                for (var a in i.$attr)
                    o.setAttribute(i.$attr[a], i[a]);
                i.ngClick || o.setAttribute("ng-click", "$ionicGoBack()"),
                o.className = "button back-button hide buttons " + (n.attr("class") || ""),
                o.innerHTML = n.html() || "";
                for (var s, c, l, u, d = r(n[0]), f = 0; f < n[0].childNodes.length; f++)
                    s = n[0].childNodes[f],
                    1 === s.nodeType ? r(s) ? d = !0 : s.classList.contains("default-title") ? l = !0 : s.classList.contains("previous-title") && (u = !0) : c || 3 !== s.nodeType || (c = !!s.nodeValue.trim());
                var h = e.backButton.icon();
                if (!d && h && "none" !== h && (o.innerHTML = '<i class="icon ' + h + '"></i> ' + o.innerHTML,
                o.className += " button-clear"),
                !c) {
                    var p = t[0].createElement("span");
                    p.className = "back-text",
                    !l && e.backButton.text() && (p.innerHTML += '<span class="default-title">' + e.backButton.text() + "</span>"),
                    !u && e.backButton.previousTitleText() && (p.innerHTML += '<span class="previous-title"></span>'),
                    o.appendChild(p)
                }
                return n.attr("class", "hide"),
                n.empty(),
                {
                    pre: function(e, t, n, i) {
                        i.navElement("backButton", o.outerHTML),
                        o = null
                    }
                }
            }
        }
    }
    ]),
    s.directive("ionNavBar", function() {
        return {
            restrict: "E",
            controller: "$ionicNavBar",
            scope: !0,
            link: function(e, t, n, i) {
                i.init()
            }
        }
    }
    ),
    s.directive("ionNavButtons", ["$document", function(e) {
        return {
            require: "^ionNavBar",
            restrict: "E",
            compile: function(t, n) {
                var i = "left";
                /^primary|secondary|right$/i.test(n.side || "") && (i = n.side.toLowerCase());
                var r = e[0].createElement("span");
                r.className = i + "-buttons",
                r.innerHTML = t.html();
                var o = i + "Buttons";
                return t.attr("class", "hide"),
                t.empty(),
                {
                    pre: function(e, t, n, i) {
                        var a = t.parent().data("$ionViewController");
                        a ? a.navElement(o, r.outerHTML) : i.navElement(o, r.outerHTML),
                        r = null
                    }
                }
            }
        }
    }
    ]),
    s.directive("navDirection", ["$ionicViewSwitcher", function(e) {
        return {
            restrict: "A",
            priority: 1e3,
            link: function(t, n, i) {
                n.bind("click", function() {
                    e.nextDirection(i.navDirection)
                }
                )
            }
        }
    }
    ]),
    s.directive("ionNavTitle", ["$document", function(e) {
        return {
            require: "^ionNavBar",
            restrict: "E",
            compile: function(t, n) {
                var i = "title"
                  , r = e[0].createElement("span");
                for (var o in n.$attr)
                    r.setAttribute(n.$attr[o], n[o]);
                return r.classList.add("nav-bar-title"),
                r.innerHTML = t.html(),
                t.attr("class", "hide"),
                t.empty(),
                {
                    pre: function(e, t, n, o) {
                        var a = t.parent().data("$ionViewController");
                        a ? a.navElement(i, r.outerHTML) : o.navElement(i, r.outerHTML),
                        r = null
                    }
                }
            }
        }
    }
    ]),
    s.directive("navTransition", ["$ionicViewSwitcher", function(e) {
        return {
            restrict: "A",
            priority: 1e3,
            link: function(t, n, i) {
                n.bind("click", function() {
                    e.nextTransition(i.navTransition)
                }
                )
            }
        }
    }
    ]),
    s.directive("ionNavView", ["$state", "$ionicConfig", function(e, t) {
        return {
            restrict: "E",
            terminal: !0,
            priority: 2e3,
            transclude: !0,
            controller: "$ionicNavView",
            compile: function(n, i, r) {
                return n.addClass("view-container"),
                ionic.DomUtil.cachedAttr(n, "nav-view-transition", t.views.transition()),
                function(t, n, i, o) {
                    function a(t) {
                        var n = e.$current && e.$current.locals[c.name];
                        n && (t || n !== s) && (s = n,
                        c.state = n.$$state,
                        o.register(n))
                    }
                    var s;
                    r(t, function(e) {
                        n.append(e)
                    }
                    );
                    var c = o.init();
                    t.$on("$stateChangeSuccess", function() {
                        a(!1)
                    }
                    ),
                    t.$on("$viewContentLoading", function() {
                        a(!1)
                    }
                    ),
                    a(!0)
                }
            }
        }
    }
    ]),
    s.config(["$provide", function(e) {
        e.decorator("ngClickDirective", ["$delegate", function(e) {
            return e.shift(),
            e
        }
        ])
    }
    ]).factory("$ionicNgClick", ["$parse", function(e) {
        return function(t, n, i) {
            var r = angular.isFunction(i) ? i : e(i);
            n.on("click", function(e) {
                t.$apply(function() {
                    r(t, {
                        $event: e
                    })
                }
                )
            }
            ),
            n.onclick = p
        }
    }
    ]).directive("ngClick", ["$ionicNgClick", function(e) {
        return function(t, n, i) {
            e(t, n, i.ngClick)
        }
    }
    ]).directive("ionStopEvent", function() {
        return {
            restrict: "A",
            link: function(e, t, n) {
                t.bind(n.ionStopEvent, a)
            }
        }
    }
    ),
    s.directive("ionPane", function() {
        return {
            restrict: "E",
            link: function(e, t) {
                t.addClass("pane")
            }
        }
    }
    ),
    s.directive("ionPopover", [function() {
        return {
            restrict: "E",
            transclude: !0,
            replace: !0,
            controller: [function() {}
            ],
            template: '<div class="popover-backdrop"><div class="popover-wrapper" ng-transclude></div></div>'
        }
    }
    ]),
    s.directive("ionPopoverView", function() {
        return {
            restrict: "E",
            compile: function(e) {
                e.append(h('<div class="popover-arrow">')),
                e.addClass("popover")
            }
        }
    }
    ),
    s.directive("ionRadio", function() {
        return {
            restrict: "E",
            replace: !0,
            require: "?ngModel",
            transclude: !0,
            template: '<label class="item item-radio"><input type="radio" name="radio-group"><div class="item-content disable-pointer-events" ng-transclude></div><i class="radio-icon disable-pointer-events icon ion-checkmark"></i></label>',
            compile: function(e, t) {
                t.icon && e.children().eq(2).removeClass("ion-checkmark").addClass(t.icon);
                var n = e.find("input");
                return l({
                    name: t.name,
                    value: t.value,
                    disabled: t.disabled,
                    "ng-value": t.ngValue,
                    "ng-model": t.ngModel,
                    "ng-disabled": t.ngDisabled,
                    "ng-change": t.ngChange,
                    "ng-required": t.ngRequired,
                    required: t.required
                }, function(e, t) {
                    u(e) && n.attr(t, e)
                }
                ),
                function(e, t, n) {
                    e.getValue = function() {
                        return e.ngValue || n.value
                    }
                }
            }
        }
    }
    ),
    s.directive("ionRefresher", [function() {
        return {
            restrict: "E",
            replace: !0,
            require: ["?^$ionicScroll", "ionRefresher"],
            controller: "$ionicRefresher",
            template: '<div class="scroll-refresher invisible" collection-repeat-ignore><div class="ionic-refresher-content" ng-class="{\'ionic-refresher-with-text\': pullingText || refreshingText}"><div class="icon-pulling" ng-class="{\'pulling-rotation-disabled\':disablePullingRotation}"><i class="icon {{pullingIcon}}"></i></div><div class="text-pulling" ng-bind-html="pullingText"></div><div class="icon-refreshing"><ion-spinner ng-if="showSpinner" icon="{{spinner}}"></ion-spinner><i ng-if="showIcon" class="icon {{refreshingIcon}}"></i></div><div class="text-refreshing" ng-bind-html="refreshingText"></div></div></div>',
            link: function(e, t, n, i) {
                var r = i[0]
                  , o = i[1];
                !r || r.isNative() ? o.init() : (t[0].classList.add("js-scrolling"),
                r._setRefresher(e, t[0], o.getRefresherDomMethods()),
                e.$on("scroll.refreshComplete", function() {
                    e.$evalAsync(function() {
                        r.scrollView.finishPullToRefresh()
                    }
                    )
                }
                ))
            }
        }
    }
    ]),
    s.directive("ionScroll", ["$timeout", "$controller", "$ionicBind", function(e, t, n) {
        return {
            restrict: "E",
            scope: !0,
            controller: function() {},
            compile: function(e) {
                function i(e, i, o) {
                    n(e, o, {
                        direction: "@",
                        paging: "@",
                        $onScroll: "&onScroll",
                        scroll: "@",
                        scrollbarX: "@",
                        scrollbarY: "@",
                        zooming: "@",
                        minZoom: "@",
                        maxZoom: "@"
                    }),
                    e.direction = e.direction || "y",
                    u(o.padding) && e.$watch(o.padding, function(e) {
                        r.toggleClass("padding", !!e)
                    }
                    ),
                    e.$eval(e.paging) === !0 && r.addClass("scroll-paging"),
                    e.direction || (e.direction = "y");
                    var a = e.$eval(e.paging) === !0
                      , s = {
                        el: i[0],
                        delegateHandle: o.delegateHandle,
                        locking: "true" === (o.locking || "true"),
                        bouncing: e.$eval(o.hasBouncing),
                        paging: a,
                        scrollbarX: e.$eval(e.scrollbarX) !== !1,
                        scrollbarY: e.$eval(e.scrollbarY) !== !1,
                        scrollingX: e.direction.indexOf("x") >= 0,
                        scrollingY: e.direction.indexOf("y") >= 0,
                        zooming: e.$eval(e.zooming) === !0,
                        maxZoom: e.$eval(e.maxZoom) || 3,
                        minZoom: e.$eval(e.minZoom) || .5,
                        preventDefault: !0
                    };
                    a && (s.speedMultiplier = .8,
                    s.bouncing = !1),
                    t("$ionicScroll", {
                        $scope: e,
                        scrollViewOptions: s
                    })
                }
                e.addClass("scroll-view ionic-scroll");
                var r = h('<div class="scroll"></div>');
                return r.append(e.contents()),
                e.append(r),
                {
                    pre: i
                }
            }
        }
    }
    ]),
    s.directive("ionSideMenu", function() {
        return {
            restrict: "E",
            require: "^ionSideMenus",
            scope: !0,
            compile: function(e, t) {
                return angular.isUndefined(t.isEnabled) && t.$set("isEnabled", "true"),
                angular.isUndefined(t.width) && t.$set("width", "275"),
                e.addClass("menu menu-" + t.side),
                function(e, n, i, r) {
                    e.side = i.side || "left";
                    var o = r[e.side] = new ionic.views.SideMenu({
                        width: t.width,
                        el: n[0],
                        isEnabled: !0
                    });
                    e.$watch(i.width, function(e) {
                        var t = +e;
                        t && t == e && o.setWidth(+e)
                    }
                    ),
                    e.$watch(i.isEnabled, function(e) {
                        o.setIsEnabled(!!e)
                    }
                    )
                }
            }
        }
    }
    ),
    s.directive("ionSideMenuContent", ["$timeout", "$ionicGesture", "$window", function(e, t, n) {
        return {
            restrict: "EA",
            require: "^ionSideMenus",
            scope: !0,
            compile: function(i, r) {
                function o(o, a, s, c) {
                    function l(e) {
                        0 !== c.getOpenAmount() ? (c.close(),
                        e.gesture.srcEvent.preventDefault(),
                        m = null ,
                        v = null ) : m || (m = ionic.tap.pointerCoord(e.gesture.srcEvent))
                    }
                    function d(e) {
                        c.isDraggableTarget(e) && "x" == p(e) && (c._handleDrag(e),
                        e.gesture.srcEvent.preventDefault())
                    }
                    function f(e) {
                        "x" == p(e) && e.gesture.srcEvent.preventDefault()
                    }
                    function h(e) {
                        c._endDrag(e),
                        m = null ,
                        v = null
                    }
                    function p(e) {
                        if (v)
                            return v;
                        if (e && e.gesture) {
                            if (m) {
                                var t = ionic.tap.pointerCoord(e.gesture.srcEvent)
                                  , n = Math.abs(t.x - m.x)
                                  , i = Math.abs(t.y - m.y)
                                  , r = i > n ? "y" : "x";
                                return Math.max(n, i) > 30 && (v = r),
                                r
                            }
                            m = ionic.tap.pointerCoord(e.gesture.srcEvent)
                        }
                        return "y"
                    }
                    var m = null
                      , v = null ;
                    u(r.dragContent) ? o.$watch(r.dragContent, function(e) {
                        c.canDragContent(e)
                    }
                    ) : c.canDragContent(!0),
                    u(r.edgeDragThreshold) && o.$watch(r.edgeDragThreshold, function(e) {
                        c.edgeDragThreshold(e)
                    }
                    );
                    var g = {
                        element: i[0],
                        onDrag: function() {},
                        endDrag: function() {},
                        getTranslateX: function() {
                            return o.sideMenuContentTranslateX || 0
                        },
                        setTranslateX: ionic.animationFrameThrottle(function(t) {
                            var n = g.offsetX + t;
                            a[0].style[ionic.CSS.TRANSFORM] = "translate3d(" + n + "px,0,0)",
                            e(function() {
                                o.sideMenuContentTranslateX = t
                            }
                            )
                        }
                        ),
                        setMarginLeft: ionic.animationFrameThrottle(function(e) {
                            e ? (e = parseInt(e, 10),
                            a[0].style[ionic.CSS.TRANSFORM] = "translate3d(" + e + "px,0,0)",
                            a[0].style.width = n.innerWidth - e + "px",
                            g.offsetX = e) : (a[0].style[ionic.CSS.TRANSFORM] = "translate3d(0,0,0)",
                            a[0].style.width = "",
                            g.offsetX = 0)
                        }
                        ),
                        setMarginRight: ionic.animationFrameThrottle(function(e) {
                            e ? (e = parseInt(e, 10),
                            a[0].style.width = n.innerWidth - e + "px",
                            g.offsetX = e) : (a[0].style.width = "",
                            g.offsetX = 0),
                            a[0].style[ionic.CSS.TRANSFORM] = "translate3d(0,0,0)"
                        }
                        ),
                        enableAnimation: function() {
                            o.animationEnabled = !0,
                            a[0].classList.add("menu-animated")
                        },
                        disableAnimation: function() {
                            o.animationEnabled = !1,
                            a[0].classList.remove("menu-animated")
                        },
                        offsetX: 0
                    };
                    c.setContent(g);
                    var $ = {
                        stop_browser_behavior: !1
                    };
                    ionic.DomUtil.getParentOrSelfWithClass(a[0], "overflow-scroll") && ($.prevent_default_directions = ["left", "right"]);
                    var w = t.on("tap", l, a, $)
                      , y = t.on("dragright", d, a, $)
                      , _ = t.on("dragleft", d, a, $)
                      , b = t.on("dragup", f, a, $)
                      , S = t.on("dragdown", f, a, $)
                      , T = t.on("release", h, a, $);
                    o.$on("$destroy", function() {
                        g && (g.element = null ,
                        g = null ),
                        t.off(_, "dragleft", d),
                        t.off(y, "dragright", d),
                        t.off(b, "dragup", f),
                        t.off(S, "dragdown", f),
                        t.off(T, "release", h),
                        t.off(w, "tap", l)
                    }
                    )
                }
                return i.addClass("menu-content pane"),
                {
                    pre: o
                }
            }
        }
    }
    ]),
    s.directive("ionSideMenus", ["$ionicBody", function(e) {
        return {
            restrict: "ECA",
            controller: "$ionicSideMenus",
            compile: function(t, n) {
                function i(t, n, i, r) {
                    r.enableMenuWithBackViews(t.$eval(i.enableMenuWithBackViews)),
                    t.$on("$ionicExposeAside", function(n, i) {
                        t.$exposeAside || (t.$exposeAside = {}),
                        t.$exposeAside.active = i,
                        e.enableClass(i, "aside-open")
                    }
                    ),
                    t.$on("$ionicView.beforeEnter", function(e, n) {
                        n.historyId && (t.$activeHistoryId = n.historyId)
                    }
                    ),
                    t.$on("$destroy", function() {
                        e.removeClass("menu-open", "aside-open")
                    }
                    )
                }
                return n.$set("class", (n["class"] || "") + " view"),
                {
                    pre: i
                }
            }
        }
    }
    ]),
    s.directive("ionSlideBox", ["$timeout", "$compile", "$ionicSlideBoxDelegate", "$ionicHistory", "$ionicScrollDelegate", function(e, t, n, i, r) {
        return {
            restrict: "E",
            replace: !0,
            transclude: !0,
            scope: {
                autoPlay: "=",
                doesContinue: "@",
                slideInterval: "@",
                showPager: "@",
                pagerClick: "&",
                disableScroll: "@",
                onSlideChanged: "&",
                activeSlide: "=?"
            },
            controller: ["$scope", "$element", "$attrs", function(t, o, a) {
                function s(e) {
                    e && !c.isScrollFreeze ? r.freezeAllScrolls(e) : !e && c.isScrollFreeze && r.freezeAllScrolls(!1),
                    c.isScrollFreeze = e
                }
                var c = this
                  , l = t.$eval(t.doesContinue) === !0
                  , d = u(a.autoPlay) ? !!t.autoPlay : !1
                  , f = d ? t.$eval(t.slideInterval) || 4e3 : 0
                  , h = new ionic.views.Slider({
                    el: o[0],
                    auto: f,
                    continuous: l,
                    startSlide: t.activeSlide,
                    slidesChanged: function() {
                        t.currentSlide = h.currentIndex(),
                        e(function() {}
                        )
                    },
                    callback: function(n) {
                        t.currentSlide = n,
                        t.onSlideChanged({
                            index: t.currentSlide,
                            $index: t.currentSlide
                        }),
                        t.$parent.$broadcast("slideBox.slideChanged", n),
                        t.activeSlide = n,
                        e(function() {}
                        )
                    },
                    onDrag: function() {
                        s(!0)
                    },
                    onDragEnd: function() {
                        s(!1)
                    }
                });
                h.enableSlide(t.$eval(a.disableScroll) !== !0),
                t.$watch("activeSlide", function(e) {
                    u(e) && h.slide(e)
                }
                ),
                t.$on("slideBox.nextSlide", function() {
                    h.next()
                }
                ),
                t.$on("slideBox.prevSlide", function() {
                    h.prev()
                }
                ),
                t.$on("slideBox.setSlide", function(e, t) {
                    h.slide(t)
                }
                ),
                this.__slider = h;
                var p = n._registerInstance(h, a.delegateHandle, function() {
                    return i.isActiveScope(t)
                }
                );
                t.$on("$destroy", function() {
                    p(),
                    h.kill()
                }
                ),
                this.slidesCount = function() {
                    return h.slidesCount()
                }
                ,
                this.onPagerClick = function(e) {
                    t.pagerClick({
                        index: e
                    })
                }
                ,
                e(function() {
                    h.load()
                }
                )
            }
            ],
            template: '<div class="slider"><div class="slider-slides" ng-transclude></div></div>',
            link: function(e, n, i) {
                function r() {
                    if (!o) {
                        var i = e.$new();
                        o = h("<ion-pager></ion-pager>"),
                        n.append(o),
                        o = t(o)(i)
                    }
                    return o
                }
                u(i.showPager) || (e.showPager = !0,
                r().toggleClass("hide", !1)),
                i.$observe("showPager", function(t) {
                    t = e.$eval(t),
                    r().toggleClass("hide", !t)
                }
                );
                var o
            }
        }
    }
    ]).directive("ionSlide", function() {
        return {
            restrict: "E",
            require: "^ionSlideBox",
            compile: function(e) {
                e.addClass("slider-slide")
            }
        }
    }
    ).directive("ionPager", function() {
        return {
            restrict: "E",
            replace: !0,
            require: "^ionSlideBox",
            template: '<div class="slider-pager"><span class="slider-pager-page" ng-repeat="slide in numSlides() track by $index" ng-class="{active: $index == currentSlide}" ng-click="pagerClick($index)"><i class="icon ion-record"></i></span></div>',
            link: function(e, t, n, i) {
                var r = function(e) {
                    for (var n = t[0].children, i = n.length, r = 0; i > r; r++)
                        r == e ? n[r].classList.add("active") : n[r].classList.remove("active")
                }
                ;
                e.pagerClick = function(e) {
                    i.onPagerClick(e)
                }
                ,
                e.numSlides = function() {
                    return new Array(i.slidesCount())
                }
                ,
                e.$watch("currentSlide", function(e) {
                    r(e)
                }
                )
            }
        }
    }
    ),
    s.directive("ionSpinner", function() {
        return {
            restrict: "E",
            controller: "$ionicSpinner",
            link: function(e, t, n, i) {
                var r = i.init();
                t.addClass("spinner spinner-" + r)
            }
        }
    }
    ),
    s.directive("ionTab", ["$compile", "$ionicConfig", "$ionicBind", "$ionicViewSwitcher", function(e, t, n, i) {
        function r(e, t) {
            return u(t) ? " " + e + '="' + t + '"' : ""
        }
        return {
            restrict: "E",
            require: ["^ionTabs", "ionTab"],
            controller: "$ionicTab",
            scope: !0,
            compile: function(o, a) {
                for (var s = "<ion-tab-nav" + r("ng-click", a.ngClick) + r("title", a.title) + r("icon", a.icon) + r("icon-on", a.iconOn) + r("icon-off", a.iconOff) + r("badge", a.badge) + r("badge-style", a.badgeStyle) + r("hidden", a.hidden) + r("disabled", a.disabled) + r("class", a["class"]) + "></ion-tab-nav>", c = document.createElement("div"), l = 0; l < o[0].children.length; l++)
                    c.appendChild(o[0].children[l].cloneNode(!0));
                var u = c.childElementCount;
                o.empty();
                var d, f;
                return u && ("ION-NAV-VIEW" === c.children[0].tagName && (d = c.children[0].getAttribute("name"),
                c.children[0].classList.add("view-container"),
                f = !0),
                1 === u && (c = c.children[0]),
                f || c.classList.add("pane"),
                c.classList.add("tab-content")),
                function(r, o, a, l) {
                    function f() {
                        w.tabMatchesState() && $.select(r, !1)
                    }
                    function p(n) {
                        n && u ? (y || (v = r.$new(),
                        g = h(c),
                        i.viewEleIsActive(g, !0),
                        $.$element.append(g),
                        e(g)(v),
                        y = !0),
                        i.viewEleIsActive(g, !0)) : y && g && (t.views.maxCache() > 0 ? i.viewEleIsActive(g, !1) : m())
                    }
                    function m() {
                        v && v.$destroy(),
                        y && g && g.remove(),
                        c.innerHTML = "",
                        y = v = g = null
                    }
                    var v, g, $ = l[0], w = l[1], y = !1;
                    r.$tabSelected = !1,
                    n(r, a, {
                        onSelect: "&",
                        onDeselect: "&",
                        title: "@",
                        uiSref: "@",
                        href: "@"
                    }),
                    $.add(r),
                    r.$on("$destroy", function() {
                        r.$tabsDestroy || $.remove(r),
                        _.isolateScope().$destroy(),
                        _.remove(),
                        _ = c = g = null
                    }
                    ),
                    o[0].removeAttribute("title"),
                    d && (w.navViewName = r.navViewName = d),
                    r.$on("$stateChangeSuccess", f),
                    f();
                    var _ = h(s);
                    _.data("$ionTabsController", $),
                    _.data("$ionTabController", w),
                    $.$tabsElement.append(e(_)(r)),
                    r.$watch("$tabSelected", p),
                    r.$on("$ionicView.afterEnter", function() {
                        i.viewEleIsActive(g, r.$tabSelected)
                    }
                    ),
                    r.$on("$ionicView.clearCache", function() {
                        r.$tabSelected || m()
                    }
                    )
                }
            }
        }
    }
    ]),
    s.directive("ionTabNav", [function() {
        return {
            restrict: "E",
            replace: !0,
            require: ["^ionTabs", "^ionTab"],
            template: "<a ng-class=\"{'tab-item-active': isTabActive(), 'has-badge':badge, 'tab-hidden':isHidden()}\" " + ' ng-disabled="disabled()" class="tab-item"><span class="badge {{badgeStyle}}" ng-if="badge">{{badge}}</span><i class="icon {{getIconOn()}}" ng-if="getIconOn() && isTabActive()"></i><i class="icon {{getIconOff()}}" ng-if="getIconOff() && !isTabActive()"></i><span class="tab-title" ng-bind-html="title"></span></a>',
            scope: {
                title: "@",
                icon: "@",
                iconOn: "@",
                iconOff: "@",
                badge: "=",
                hidden: "@",
                disabled: "&",
                badgeStyle: "@",
                "class": "@"
            },
            link: function(e, t, n, i) {
                var r = i[0]
                  , o = i[1];
                t[0].removeAttribute("title"),
                e.selectTab = function(e) {
                    e.preventDefault(),
                    r.select(o.$scope, !0)
                }
                ,
                n.ngClick || t.on("click", function(t) {
                    e.$apply(function() {
                        e.selectTab(t)
                    }
                    )
                }
                ),
                e.isHidden = function() {
                    return "true" === n.hidden || n.hidden === !0 ? !0 : !1
                }
                ,
                e.getIconOn = function() {
                    return e.iconOn || e.icon
                }
                ,
                e.getIconOff = function() {
                    return e.iconOff || e.icon
                }
                ,
                e.isTabActive = function() {
                    return r.selectedTab() === o.$scope
                }
            }
        }
    }
    ]),
    s.directive("ionTabs", ["$ionicTabsDelegate", "$ionicConfig", function(e, t) {
        return {
            restrict: "E",
            scope: !0,
            controller: "$ionicTabs",
            compile: function(n) {
                function i(t, n, i, r) {
                    function a(e, t) {
                        e.stopPropagation();
                        var n = r.previousSelectedTab();
                        n && n.$broadcast(e.name.replace("NavView", "Tabs"), t)
                    }
                    var s = e._registerInstance(r, i.delegateHandle, r.hasActiveScope);
                    r.$scope = t,
                    r.$element = n,
                    r.$tabsElement = h(n[0].querySelector(".tabs")),
                    t.$watch(function() {
                        return n[0].className
                    }
                    , function(e) {
                        var n = -1 !== e.indexOf("tabs-top")
                          , i = -1 !== e.indexOf("tabs-item-hide");
                        t.$hasTabs = !n && !i,
                        t.$hasTabsTop = n && !i,
                        t.$emit("$ionicTabs.top", t.$hasTabsTop)
                    }
                    ),
                    t.$on("$ionicNavView.beforeLeave", a),
                    t.$on("$ionicNavView.afterLeave", a),
                    t.$on("$ionicNavView.leave", a),
                    t.$on("$destroy", function() {
                        t.$tabsDestroy = !0,
                        s(),
                        r.$tabsElement = r.$element = r.$scope = o = null ,
                        delete t.$hasTabs,
                        delete t.$hasTabsTop
                    }
                    )
                }
                function r(e, t, n, i) {
                    i.selectedTab() || i.select(0)
                }
                var o = h('<div class="tab-nav tabs">');
                return o.append(n.contents()),
                n.append(o).addClass("tabs-" + t.tabs.position() + " tabs-" + t.tabs.style()),
                {
                    pre: i,
                    post: r
                }
            }
        }
    }
    ]),
    s.directive("ionToggle", ["$timeout", "$ionicConfig", function(e, t) {
        return {
            restrict: "E",
            replace: !0,
            require: "?ngModel",
            transclude: !0,
            template: '<div class="item item-toggle"><div ng-transclude></div><label class="toggle"><input type="checkbox"><div class="track"><div class="handle"></div></div></label></div>',
            compile: function(e, n) {
                var i = e.find("input");
                return l({
                    name: n.name,
                    "ng-value": n.ngValue,
                    "ng-model": n.ngModel,
                    "ng-checked": n.ngChecked,
                    "ng-disabled": n.ngDisabled,
                    "ng-true-value": n.ngTrueValue,
                    "ng-false-value": n.ngFalseValue,
                    "ng-change": n.ngChange,
                    "ng-required": n.ngRequired,
                    required: n.required
                }, function(e, t) {
                    u(e) && i.attr(t, e)
                }
                ),
                n.toggleClass && e[0].getElementsByTagName("label")[0].classList.add(n.toggleClass),
                e.addClass("toggle-" + t.form.toggle()),
                function(e, t) {
                    var n = t[0].getElementsByTagName("label")[0]
                      , i = n.children[0]
                      , r = n.children[1]
                      , o = r.children[0]
                      , a = h(i).controller("ngModel");
                    e.toggle = new ionic.views.Toggle({
                        el: n,
                        track: r,
                        checkbox: i,
                        handle: o,
                        onChange: function() {
                            a && (a.$setViewValue(i.checked),
                            e.$apply())
                        }
                    }),
                    e.$on("$destroy", function() {
                        e.toggle.destroy()
                    }
                    )
                }
            }
        }
    }
    ]),
    s.directive("ionView", function() {
        return {
            restrict: "EA",
            priority: 1e3,
            controller: "$ionicView",
            compile: function(e) {
                return e.addClass("pane"),
                e[0].removeAttribute("title"),
                function(e, t, n, i) {
                    i.init()
                }
            }
        }
    }
    )
}
(),
angular.module("starter", ["ionic", "starter.controllers", "starter.services", "templates"]).run(["$ionicPlatform", "$rootScope", function(e, t) {
    e.ready(function() {
        window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard && (cordova.plugins.Keyboard.hideKeyboardAccessoryBar(!0),
        cordova.plugins.Keyboard.disableScroll(!0)),
        window.StatusBar && StatusBar.styleLightContent()
    }
    ),
    t.currentUserID = 213
}
]).config(["$stateProvider", "$urlRouterProvider", function(e, t) {
    e.state("tab", {
        url: "/tab",
        "abstract": !0,
        templateUrl: "templates/tabs.html"
    }).state("tab.activities", {
        url: "/activities",
        views: {
            "tab-activities": {
                templateUrl: "templates/tab-activities.html",
                controller: "ActivitiesCtrl"
            }
        }
    }).state("room", {
        url: "/room/:roomId",
        templateUrl: "templates/room.html",
        controller: "RoomCtrl"
    }).state("room-user", {
        url: "/room/:roomId/:userId",
        templateUrl: "templates/room.html",
        controller: "RoomCtrl"
    }).state("room-group", {
        url: "/room/:roomId/:groupName/:userList",
        templateUrl: "templates/room.html",
        controller: "RoomCtrl"
    }).state("room-setting", {
        url: "/room-setting/:roomId",
        templateUrl: "templates/room-setting.html",
        controller: "RoomSettingCtrl"
    }).state("room-setting-user", {
        url: "/room-setting/:roomId/:userId",
        templateUrl: "templates/room-setting.html",
        controller: "RoomSettingCtrl"
    }).state("room-setting-group", {
        url: "/room-setting/:roomId/:groupName/:userList",
        templateUrl: "templates/room-setting.html",
        controller: "RoomSettingCtrl"
    }).state("user-setting", {
        url: "/user-setting/:userId",
        templateUrl: "templates/user-setting.html",
        controller: "UserSettingCtrl"
    }).state("tab.groups", {
        url: "/groups",
        views: {
            "tab-groups": {
                templateUrl: "templates/tab-groups.html",
                controller: "GroupsCtrl"
            }
        }
    }).state("tab.friends", {
        url: "/friends",
        "abstract": !0,
        views: {
            "tab-friends": {
                templateUrl: "templates/tab-friends.html",
                controller: "FriendsCtrl"
            }
        }
    }).state("tab.friends.messenger", {
        url: "/messenger",
        templateUrl: "templates/tab-friends-messenger.html"
    }).state("tab.friends.active", {
        url: "/active",
        templateUrl: "templates/tab-friends-active.html"
    }).state("tab.account", {
        url: "/account",
        views: {
            "tab-account": {
                templateUrl: "templates/tab-account.html",
                controller: "AccountCtrl"
            }
        }
    }).state("login", {
        url: "/login",
        templateUrl: "templates/login.html"
    }).state("sign-up", {
        url: "/sign-up",
        templateUrl: "templates/sign-up.html"
    }).state("sign-up-name", {
        url: "/sign-up-name",
        templateUrl: "templates/sign-up-name.html"
    }).state("sign-up-photo", {
        url: "/sign-up-photo",
        templateUrl: "templates/sign-up-photo.html"
    }).state("sign-up-success", {
        url: "/sign-up-success",
        templateUrl: "templates/sign-up-success.html"
    }).state("forgot-password", {
        url: "/forgot-password",
        templateUrl: "templates/forgot-password.html"
    }),
    t.otherwise("/login")
}
]),
angular.module("starter.controllers", []).controller("MainCtrl", ["$scope", "$stateParams", "User", "$ionicModal", "Room", "$location", "$rootScope", "$ionicPopup", function(e, t, n, i, r, o, a, s) {
    e.historyBack = function() {
        window.history.back()
    }
    ,
    e.friends = n.myFriends("213"),
    e.activities = r.userActivities("213"),
    e.user = n.get("213"),
    a.newGroupName = "",
    e.createNewGroup = function(t) {
        for (var n = "", i = 0; i < e.friends.length; i++)
            e.friends[i].checked && (n ? n += "+" + e.friends[i].id : n = e.friends[i].id);
        if (n.split("+").length < 2 || !t) {
            if (n.split("+").length < 2) {
                s.alert({
                    title: "Please Add More People",
                    template: "Groups need at least three people.",
                    okType: "button-clear"
                });
                return
            }
            if (!t) {
                s.alert({
                    title: "Name This Group",
                    template: "To create the group, please name it first. (Anyone in the group can change the name later.)",
                    okType: "button-clear"
                });
                return
            }
        } else {
            n += "+213",
            o.path("/room/new/" + t + "/" + n),
            a.newGroupName = "";
            for (var i = 0; i < e.friends.length; i++)
                e.friends[i].checked = ""
        }
    }
    ,
    i.fromTemplateUrl("templates/modal/new-chat.html", {
        scope: e,
        animation: "slide-in-up"
    }).then(function(t) {
        e.newChatmodal = t
    }
    ),
    e.openNewChat = function() {
        e.newChatmodal.show()
    }
    ,
    e.closeNewChat = function() {
        e.newChatmodal.hide()
    }
    ,
    i.fromTemplateUrl("templates/modal/new-group.html", {
        scope: e,
        animation: "slide-in-up"
    }).then(function(t) {
        e.newGroupModal = t
    }
    ),
    e.openNewGroup = function() {
        e.newGroupModal.show()
    }
    ,
    e.closeNewGroup = function() {
        e.newGroupModal.hide()
    }
    ,
    i.fromTemplateUrl("templates/modal/add-people.html", {
        scope: e,
        animation: "slide-in-up"
    }).then(function(t) {
        e.addPeopleModal = t
    }
    ),
    e.openAddPeople = function() {
        e.addPeopleModal.show()
    }
    ,
    e.closeAddPeople = function() {
        e.addPeopleModal.hide()
    }
    ;
    for (var c in e.friends) {
        var l = r.getByUserId(e.friends[c].id);
        e.friends[c].room = l
    }
    i.fromTemplateUrl("templates/modal/search.html", {
        scope: e,
        animation: "slide-in-up"
    }).then(function(t) {
        e.searchModal = t
    }
    ),
    e.openSearch = function() {
        e.searchModal.show()
    }
    ,
    e.closeSearch = function() {
        e.searchModal.hide()
    }
    ,
    e.$on("$stateChangeStart", function() {
        e.searchModal && e.closeSearch(),
        e.addPeopleModal && e.closeAddPeople(),
        e.newGroupModal && e.closeNewGroup(),
        e.newChatmodal && e.closeNewChat()
    }
    )
}
]).controller("ActivitiesCtrl", ["$scope", "Room", "User", function(e, t, n) {
    e.activities = t.userActivities("213"),
    e.remove = function(e) {
        t.remove(e)
    }
    ,
    e.friends = n
}
]).controller("RoomCtrl", ["$scope", "$stateParams", "Room", "Chat", function(e, t, n, i) {
    "new" == t.roomId ? t.userList ? (e.room = n.newGroup(t.groupName, t.userList),
    e.room.settingURL = "#/room-setting/new/" + t.groupName + "/" + t.userList) : (e.room = n.newRoom(t.userId),
    e.room.settingURL = "#/room-setting/new/" + t.userId) : (e.room = n.get(t.roomId),
    e.room.settingURL = "#/room-setting/" + t.roomId),
    e.chatList = i.getByRoom(e.room.id),
    e.sendChat = function(n) {
        i.add(n, t.roomId, "213"),
        e.chatList = i.getByRoom(t.roomId),
        r()
    }
    ;
    var r = function() {
        for (var n, r = 0; r < e.room.userList.length; r++)
            "213" != e.room.userList[r] && (n = e.room.userList[r]);
        var o = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
        i.add(o, t.roomId, n),
        e.chatList = i.getByRoom(t.roomId)
    }
}
]).controller("GroupsCtrl", ["$scope", "Room", function(e, t) {
    e.groupRow = t.allGroups("213", 2)
}
]).controller("FriendsCtrl", ["$scope", "$stateParams", "$ionicPopup", "User", "Room", "$state", function(e, t, n, i, r, o) {
    e.$state = o,
    e.friends = i.myFriends("213");
    for (var a in e.friends) {
        var s = r.getByUserId(e.friends[a].id);
        e.friends[a].room = s
    }
    e.showPromptAdd = function() {
        n.prompt({
            title: "Add Contact",
            template: "Enter someone's email to find them on Messenger",
            inputType: "email",
            inputPlaceholder: "Email",
            cancelType: "button-clear",
            okText: "Save",
            okType: "button-clear"
        }).then(function(e) {
            console.log("Your password is", e)
        }
        )
    }
}
]).controller("AccountCtrl", ["$scope", "$ionicActionSheet", "$ionicModal", function(e, t, n) {
    e.showNotification = function() {
        t.show({
            buttons: [{
                text: "Turn off for 15min"
            }, {
                text: "Turn off for 1h"
            }, {
                text: "Turn off for 8h"
            }, {
                text: "Turn off for 24h"
            }],
            titleText: "Notifications",
            cancelText: "Cancel",
            cancel: function() {},
            buttonClicked: function(e) {
                return !0
            }
        })
    }
    ,
    e.showSync = function() {
        t.show({
            buttons: [{
                text: "Stop Syncing"
            }],
            titleText: "Stop syncing your phone contacts？",
            cancelText: "Cancel",
            cancel: function() {},
            buttonClicked: function(e) {
                return !0
            }
        })
    }
    ,
    e.showEdit = function() {
        var n = t.show({
            buttons: [{
                text: "Change email"
            }],
            cancelText: "Cancel",
            cancel: function() {},
            buttonClicked: function(t) {
                0 == t && (e.changeEmailmodal.show(),
                n())
            }
        })
    }
    ,
    n.fromTemplateUrl("templates/modal/change-email.html", {
        scope: e,
        animation: "slide-in-up"
    }).then(function(t) {
        e.changeEmailmodal = t
    }
    ),
    e.openChangeEmail = function() {
        e.changeEmailmodal.show()
    }
    ,
    e.closeChangeEmail = function() {
        e.changeEmailmodal.hide()
    }
}
]).controller("RoomSettingCtrl", ["$scope", "$ionicActionSheet", "$stateParams", "$ionicPopup", "Room", function(e, t, n, i, r) {
    "new" == n.roomId ? n.userList ? e.room = r.newGroup(n.groupName, n.userList) : e.room = r.newRoom(n.userId) : e.room = r.get(n.roomId),
    e.setNotification = function() {
        t.show({
            buttons: [{
                text: "Turn off for 15min"
            }, {
                text: "Turn off for 1h"
            }, {
                text: "Turn off for 8h"
            }, {
                text: "Turn off for 24h"
            }, {
                text: "Until I turn it back on"
            }],
            titleText: "Mute notification for this conversation",
            cancelText: "Cancel",
            cancel: function() {},
            buttonClicked: function() {
                return !0
            }
        })
    }
    ,
    e.showConfirmLeave = function() {
        var e = i.confirm({
            title: "Leave Group?",
            template: "This conversation will be archived, and you won't get any new message.",
            cancelText: "Cancel",
            cancelType: "button-clear",
            okText: "Leave",
            okType: "button-clear"
        });
        e.then(function(e) {
            e ? console.log("Leave") : console.log("Stay")
        }
        )
    }
}
]).controller("UserSettingCtrl", ["$scope", "$stateParams", "$ionicPopup", "User", function(e, t, n, i) {
    e.user = i.get(t.userId),
    e.showConfirmRemove = function() {
        var e = n.confirm({
            title: "Remove This Person?",
            template: "They won't be able to keep chatting with this group.",
            cancelText: "Cancel",
            cancelType: "button-clear",
            okText: "Remove",
            okType: "button-clear"
        });
        e.then(function(e) {
            e ? console.log("Remove") : console.log("Keep")
        }
        )
    }
}
]).controller("DisableCtrl", ["$scope", function(e) {
    e.thetext = "",
    e.b1 = function() {
        console.log("B1")
    }
    ,
    e.b2 = function() {
        console.log("B2")
    }
}
]),
angular.module("starter.services", []).factory("User", function() {
    var e = [{
        id: "1",
        friendType: "Messenger",
        name: "felix",
        face: "img/user01.jpg",
        email: "hi@weburner.com",
        activeTime: "Active today"
    }, {
        id: "2",
        friendType: "facebook",
        name: "Eric",
        face: "img/user02.jpg",
        email: "hi@weburner.com",
        activeTime: "Active 1h ago"
    }, {
        id: "3",
        name: "Apple",
        friendType: "Messenger",
        face: "img/user03.jpg",
        email: "hi@weburner.com",
        activeTime: "Active today"
    }, {
        id: "213",
        name: "Diamond",
        friendType: "Messenger",
        face: "img/user04.jpg",
        email: "hi@weburner.com",
        activeTime: "Active 3m ago"
    }, {
        id: "5",
        name: "Mike",
        friendType: "facebook",
        face: "img/user05.jpg",
        email: "hi@weburner.com",
        activeTime: "Active today"
    }];
    return {
        all: function() {
            return e
        },
        myFriends: function(t) {
            for (var n = [], i = 0; i < e.length; i++)
                e[i].id != t && n.push(e[i]);
            return n
        },
        get: function(t) {
            for (var n = 0; n < e.length; n++)
                if (e[n].id === t)
                    return e[n];
            return null
        }
    }
}
).factory("Room", ["User", "Chat", function(e, t) {
    var n = [{
        id: "room_a",
        roomType: "group",
        thumbnail: "img/thumbnail01.jpg",
        title: "I Love Coffee",
        members: "Felix, Eric, Diamond",
        activeTime: "Active today",
        userList: ["213", "1", "2"]
    }, {
        id: "room_b",
        roomType: "group",
        thumbnail: "img/thumbnail02.jpg",
        title: "Go shopping",
        members: "Eric, Apple, Diamond",
        activeTime: "Active today",
        userList: ["2", "3", "213"]
    }, {
        id: "room_c",
        roomType: "ms_friend",
        thumbnail: "img/user01.jpg",
        title: "felix",
        members: "Felix, Diamond",
        activeTime: "Active 1h ago",
        userList: ["213", "1"]
    }, {
        id: "room_d",
        roomType: "fb_friend",
        thumbnail: "img/user02.jpg",
        title: "Eric",
        members: "Eric, Diamond",
        activeTime: "Active 1h ago",
        userList: ["213", "2"]
    }, {
        id: "room_e",
        roomType: "group",
        thumbnail: "img/thumbnail03.jpg",
        title: "Ionic",
        members: "Eric, Apple, Mike, Diamond",
        activeTime: "11:00 am",
        userList: ["2", "3", "5", "213"]
    }, {
        id: "room_f",
        roomType: "group",
        thumbnail: "img/thumbnail04.jpg",
        title: "Rockers",
        members: "felix, Eric, Diamond, Mike",
        activeTime: "12:15 am",
        userList: ["1", "2", "213", "5"]
    }];
    return {
        all: function() {
            return n
        },
        allGroups: function(e, t) {
            for (var i = [], r = [], o = 0; o < n.length; o++) {
                var a = !1;
                if (!a && n[o].userList.length > 2)
                    for (var s = 0; s < n[o].userList.length; s++)
                        n[o].userList[s] === e && (a = !0);
                a && r.push(n[o]),
                (r.length == t || o + 1 == n.length) && (i.push(r),
                r = [])
            }
            return i
        },
        userActivities: function(e) {
            for (var i = [], r = 0; r < n.length; r++) {
                var o = !1;
                if (!o)
                    for (var a = 0; a < n[r].userList.length; a++)
                        n[r].userList[a] === e && (o = !0);
                if (o) {
                    var s = t.getByRoom(n[r].id);
                    s.length > 0 && (n[r].latest_chat = s[s.length - 1].chatText,
                    i.push(n[r]))
                }
            }
            return i
        },
        get: function(t) {
            for (var i = 0; i < n.length; i++)
                if (n[i].id === t) {
                    n[i].user = [];
                    for (var r = 0; r < n[i].userList.length; r++)
                        n[i].user.push(e.get(n[i].userList[r]));
                    return n[i]
                }
            return null
        },
        newRoom: function(t) {
            var n = e.get(t)
              , i = {
                id: "",
                roomType: "fb_friend",
                thumbnail: n.face,
                title: n.name,
                members: n.name + ", Diamond",
                activeTime: "Now",
                userList: ["213", n.id]
            };
            return i
        },
        newGroup: function(t, n) {
            var i = n.split("+")
              , r = {
                id: "",
                roomType: "group",
                thumbnail: "img/placeholder.png",
                title: t,
                members: "",
                activeTime: "Now",
                userList: i
            };
            r.user = [];
            for (var o = 0; o < i.length; o++)
                r.user.push(e.get(i[o]));
            return r
        },
        getByUserId: function(t) {
            for (var i = !1, r = 0; r < n.length; r++)
                if ("group" != n[r].roomType && !i)
                    for (var o = 0; o < n[r].userList.length; o++)
                        if (n[r].userList[o] === t)
                            return i = !0,
                            n[r];
            if (!i) {
                var a = e.get(t)
                  , s = {
                    id: "new/" + a.id
                };
                return s
            }
            return null
        }
    }
}
]).factory("Chat", ["User", function(e) {
    var t = [{
        id: "0",
        userId: "1",
        chatText: "I found a great coffee shop.",
        roomId: "room_a"
    }, {
        id: "1",
        userId: "2",
        chatText: "Where is it?",
        roomId: "room_a"
    }, {
        id: "2",
        userId: "1",
        chatText: "Not far from the office building.",
        roomId: "room_a"
    }, {
        id: "3",
        userId: "213",
        chatText: "Shall we go there today?",
        roomId: "room_a"
    }, {
        id: "4",
        userId: "3",
        chatText: "What'up!",
        roomId: "room_b"
    }, {
        id: "5",
        userId: "5",
        chatText: "I'm going to do some shopping.",
        roomId: "room_b"
    }, {
        id: "6",
        userId: "3",
        chatText: "Let' s go together.",
        roomId: "room_b"
    }, {
        id: "7",
        userId: "213",
        chatText: "I'll go with you boys.",
        roomId: "room_b"
    }, {
        id: "8",
        userId: "213",
        chatText: "Hey.",
        roomId: "room_c"
    }, {
        id: "9",
        userId: "1",
        chatText: "Hey.",
        roomId: "room_c"
    }, {
        id: "10",
        userId: "1",
        chatText: "Hey hey.",
        roomId: "room_c"
    }, {
        id: "11",
        userId: "213",
        chatText: "Ionic.",
        roomId: "room_d"
    }, {
        id: "12",
        userId: "2",
        chatText: "Angular.",
        roomId: "room_d"
    }, {
        id: "13",
        userId: "2",
        chatText: "Welcome!.",
        roomId: "room_e"
    }, {
        id: "14",
        userId: "3",
        chatText: "Ionic is a powerful HTML5 SDK that helps you build native-feeling mobile apps using web technologies like HTML, CSS, and Javascript.",
        roomId: "room_e"
    }, {
        id: "15",
        userId: "213",
        chatText: "Ionic is focused mainly on the look and feel, and UI interaction of your app.",
        roomId: "room_e"
    }, {
        id: "16",
        userId: "5",
        chatText: "Ionic currently requires AngularJS.",
        roomId: "room_e"
    }];
    return {
        all: function() {
            return t
        },
        add: function(e, n, i) {
            var r = {
                id: t.length + 1,
                userId: i,
                chatText: e,
                roomId: n
            };
            t.push(r)
        },
        get: function(n) {
            for (var i = 0; i < t.length; i++)
                if (t[i].id === n)
                    return t[i].user = e.get(t[i].userId),
                    t[i];
            return null
        },
        getByRoom: function(n) {
            for (var i = [], r = 0; r < t.length; r++)
                t[r].roomId === n && (t[r].user = e.get(t[r].userId),
                i.push(t[r]));
            return i
        }
    }
}
]);
