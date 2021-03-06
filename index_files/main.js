! function(e, t, n) {
    function r(e, t) {
        return typeof e === t
    }

    function o() {
        var e, t, n, o, a, i, u;
        for (var d in g)
            if (g.hasOwnProperty(d)) {
                if (e = [], t = g[d], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                    for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                for (o = r(t.fn, "function") ? t.fn() : t.fn, a = 0; a < e.length; a++) i = e[a], u = i.split("."), 1 === u.length ? v[u[0]] = o : (!v[u[0]] || v[u[0]] instanceof Boolean || (v[u[0]] = new Boolean(v[u[0]])), v[u[0]][u[1]] = o), y.push((o ? "" : "no-") + u.join("-"))
            }
    }

    function a() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : A ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
    }

    function i() {
        var e = t.body;
        return e || (e = a(A ? "svg" : "body"), e.fake = !0), e
    }

    function u(e, n, r, o) {
        var u, d, f, s, c = "modernizr",
            l = a("div"),
            p = i();
        if (parseInt(r, 10))
            for (; r--;) f = a("div"), f.id = o ? o[r] : c + (r + 1), l.appendChild(f);
        return u = a("style"), u.type = "text/css", u.id = "s" + c, (p.fake ? p : l).appendChild(u), p.appendChild(l), u.styleSheet ? u.styleSheet.cssText = e : u.appendChild(t.createTextNode(e)), l.id = c, p.fake && (p.style.background = "", p.style.overflow = "hidden", s = D.style.overflow, D.style.overflow = "hidden", D.appendChild(p)), d = n(l, e), p.fake ? (p.parentNode.removeChild(p), D.style.overflow = s, D.offsetHeight) : l.parentNode.removeChild(l), !!d
    }

    function d(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function f(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
            return t + n.toUpperCase()
        }).replace(/^-/, "")
    }

    function s(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }

    function c(e, t, n) {
        var o;
        for (var a in e)
            if (e[a] in t) return n === !1 ? e[a] : (o = t[e[a]], r(o, "function") ? s(o, n || t) : o);
        return !1
    }

    function l(e) {
        return e.replace(/([A-Z])/g, function(e, t) {
            return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function p(t, r) {
        var o = t.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; o--;)
                if (e.CSS.supports(l(t[o]), r)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in e) {
            for (var a = []; o--;) a.push("(" + l(t[o]) + ":" + r + ")");
            return a = a.join(" or "), u("@supports (" + a + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == getComputedStyle(e, null).position
            })
        }
        return n
    }

    function m(e, t, o, i) {
        function u() {
            c && (delete k.style, delete k.modElem)
        }
        if (i = r(i, "undefined") ? !1 : i, !r(o, "undefined")) {
            var s = p(e, o);
            if (!r(s, "undefined")) return s
        }
        for (var c, l, m, h, F, g = ["modernizr", "tspan", "samp"]; !k.style && g.length;) c = !0, k.modElem = a(g.shift()), k.style = k.modElem.style;
        for (m = e.length, l = 0; m > l; l++)
            if (h = e[l], F = k.style[h], d(h, "-") && (h = f(h)), k.style[h] !== n) {
                if (i || r(o, "undefined")) return u(), "pfx" == t ? h : !0;
                try {
                    k.style[h] = o
                } catch (w) {}
                if (k.style[h] != F) return u(), "pfx" == t ? h : !0
            }
        return u(), !1
    }

    function h(e, t, n, o, a) {
        var i = e.charAt(0).toUpperCase() + e.slice(1),
            u = (e + " " + z.join(i + " ") + i).split(" ");
        return r(t, "string") || r(t, "undefined") ? m(u, t, o, a) : (u = (e + " " + T.join(i + " ") + i).split(" "), c(u, t, n))
    }

    function F(e, t, r) {
        return h(e, n, n, t, r)
    }
    var g = [],
        w = {
            _version: "3.3.1",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, t) {
                var n = this;
                setTimeout(function() {
                    t(n[e])
                }, 0)
            },
            addTest: function(e, t, n) {
                g.push({
                    name: e,
                    fn: t,
                    options: n
                })
            },
            addAsyncTest: function(e) {
                g.push({
                    name: null,
                    fn: e
                })
            }
        },
        v = function() {};
    v.prototype = w, v = new v;
    var y = [],
        b = w._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    w._prefixes = b;
    var D = t.documentElement,
        A = "svg" === D.nodeName.toLowerCase();
    v.addTest("inlinesvg", function() {
        var e = a("div");
        return e.innerHTML = "<svg/>", "http://www.w3.org/2000/svg" == ("undefined" != typeof SVGRect && e.firstChild && e.firstChild.namespaceURI)
    });
    var x = w.testStyles = u;
    v.addTest("touchevents", function() {
        var n;
        if ("ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch) n = !0;
        else {
            var r = ["@media (", b.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
            x(r, function(e) {
                n = 9 === e.offsetTop
            })
        }
        return n
    });
    var C = "Moz O ms Webkit",
        z = w._config.usePrefixes ? C.split(" ") : [];
    w._cssomPrefixes = z;
    var T = w._config.usePrefixes ? C.toLowerCase().split(" ") : [];
    w._domPrefixes = T;
    var j = {
        elem: a("modernizr")
    };
    v._q.push(function() {
        delete j.elem
    });
    var k = {
        style: j.elem.style
    };
    v._q.unshift(function() {
        delete k.style
    }), w.testAllProps = h, w.testAllProps = F, v.addTest("bgsizecover", F("backgroundSize", "cover")), v.addTest("csstransforms", function() {
        return -1 === navigator.userAgent.indexOf("Android 2.") && F("transform", "scale(1)", !0)
    }), o(), delete w.addTest, delete w.addAsyncTest;
    for (var $ = 0; $ < v._q.length; $++) v._q[$]();
    e.Modernizr = v
}(window, document), ! function(e, t) {
    "function" == typeof define && define.amd ? define(function() {
        return e.is = t()
    }) : "object" == typeof exports ? module.exports = t() : e.is = t()
}(this, function() {
    function e(e) {
        return function() {
            return !e.apply(null, f.call(arguments))
        }
    }

    function t(e) {
        return function() {
            var t = f.call(arguments),
                n = t.length;
            1 === n && u.array(t[0]) && (t = t[0], n = t.length);
            for (var r = 0; n > r; r++)
                if (!e.call(null, t[r])) return !1;
            return !0
        }
    }

    function n(e) {
        return function() {
            var t = f.call(arguments),
                n = t.length;
            1 === n && u.array(t[0]) && (t = t[0], n = t.length);
            for (var r = 0; n > r; r++)
                if (e.call(null, t[r])) return !0;
            return !1
        }
    }

    function r(e, t) {
        u[e] = function(n) {
            return t[e].test(n)
        }
    }

    function o() {
        var r = u;
        for (var o in r)
            if (s.call(r, o) && u["function"](r[o]))
                for (var a = r[o].api || ["not", "all", "any"], i = 0; i < a.length; i++) "not" === a[i] && (u.not[o] = e(u[o])), "all" === a[i] && (u.all[o] = t(u[o])), "any" === a[i] && (u.any[o] = n(u[o]))
    }
    var a = this || global,
        i = a.is,
        u = {};
    u.VERSION = "0.8.0", u.not = {}, u.all = {}, u.any = {};
    var d = Object.prototype.toString,
        f = Array.prototype.slice,
        s = Object.prototype.hasOwnProperty;
    u.arguments = function(e) {
        return u.not["null"](e) && ("[object Arguments]" === d.call(e) || "object" == typeof e && "callee" in e)
    }, u.array = Array.isArray || function(e) {
        return "[object Array]" === d.call(e)
    }, u["boolean"] = function(e) {
        return e === !0 || e === !1 || "[object Boolean]" === d.call(e)
    }, u.date = function(e) {
        return "[object Date]" === d.call(e)
    }, u.error = function(e) {
        return "[object Error]" === d.call(e)
    }, u["function"] = function(e) {
        return "[object Function]" === d.call(e) || "function" == typeof e
    }, u.nan = function(e) {
        return e !== e
    }, u["null"] = function(e) {
        return null === e
    }, u.number = function(e) {
        return u.not.nan(e) && "[object Number]" === d.call(e)
    }, u.object = function(e) {
        var t = typeof e;
        return "function" === t || "object" === t && !!e
    }, u.json = function(e) {
        return "[object Object]" === d.call(e)
    }, u.regexp = function(e) {
        return "[object RegExp]" === d.call(e)
    }, u.sameType = function(e, t) {
        return u.nan(e) || u.nan(t) ? u.nan(e) === u.nan(t) : d.call(e) === d.call(t)
    }, u.sameType.api = ["not"], u.string = function(e) {
        return "[object String]" === d.call(e)
    }, u["char"] = function(e) {
        return u.string(e) && 1 === e.length
    }, u.undefined = function(e) {
        return void 0 === e
    }, u.empty = function(e) {
        if (u.object(e)) {
            var t = Object.getOwnPropertyNames(e).length;
            return 0 === t || 1 === t && u.array(e) || 2 === t && u.arguments(e) ? !0 : !1
        }
        return "" === e
    }, u.existy = function(e) {
        return null !== e && void 0 !== e
    }, u.truthy = function(e) {
        return u.existy(e) && e !== !1 && u.not.nan(e) && "" !== e && 0 !== e
    }, u.falsy = e(u.truthy), u.space = function(e) {
        if (u["char"](e)) {
            var t = e.charCodeAt(0);
            return t > 8 && 14 > t || 32 === t
        }
        return !1
    }, u.equal = function(e, t) {
        return u.all.number(e, t) ? e === t && 1 / e === 1 / t : u.all.string(e, t) || u.all.regexp(e, t) ? "" + e == "" + t : u.all["boolean"](e, t) ? e === t : !1
    }, u.equal.api = ["not"], u.even = function(e) {
        return u.number(e) && e % 2 === 0
    }, u.odd = function(e) {
        return u.number(e) && e % 2 === 1
    }, u.positive = function(e) {
        return u.number(e) && e > 0
    }, u.negative = function(e) {
        return u.number(e) && 0 > e
    }, u.above = function(e, t) {
        return u.all.number(e, t) && e > t
    }, u.above.api = ["not"], u.under = function(e, t) {
        return u.all.number(e, t) && t > e
    }, u.under.api = ["not"], u.within = function(e, t, n) {
        return u.all.number(e, t, n) && e > t && n > e
    }, u.within.api = ["not"], u.decimal = function(e) {
        return u.number(e) && e % 1 !== 0
    }, u.integer = function(e) {
        return u.number(e) && e % 1 === 0
    }, u.finite = isFinite || function(e) {
        return e !== 1 / 0 && e !== -(1 / 0) && u.not.nan(e)
    }, u.infinite = e(u.finite);
    var c = {
        url: /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/i,
        email: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,
        creditCard: /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/,
        alphaNumeric: /^[A-Za-z0-9]+$/,
        timeString: /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])$/,
        dateString: /^(1[0-2]|0?[1-9])\/(3[01]|[12][0-9]|0?[1-9])\/(?:[0-9]{2})?[0-9]{2}$/,
        usZipCode: /^[0-9]{5}(?:-[0-9]{4})?$/,
        caPostalCode: /^(?!.*[DFIOQU])[A-VXY][0-9][A-Z]\s?[0-9][A-Z][0-9]$/,
        ukPostCode: /^[A-Z]{1,2}[0-9RCHNQ][0-9A-Z]?\s?[0-9][ABD-HJLNP-UW-Z]{2}$|^[A-Z]{2}-?[0-9]{4}$/,
        nanpPhone: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
        eppPhone: /^\+[0-9]{1,3}\.[0-9]{4,14}(?:x.+)?$/,
        socialSecurityNumber: /^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$/,
        affirmative: /^(?:1|t(?:rue)?|y(?:es)?|ok(?:ay)?)$/,
        hexadecimal: /^[0-9a-fA-F]+$/,
        hexColor: /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/,
        ipv4: /^(?:(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.){3}(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])$/,
        ipv6: /^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,
        ip: /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/
    };
    for (var l in c) c.hasOwnProperty(l) && r(l, c);
    u.include = function(e, t) {
        return e.indexOf(t) > -1
    }, u.include.api = ["not"], u.upperCase = function(e) {
        return u.string(e) && e === e.toUpperCase()
    }, u.lowerCase = function(e) {
        return u.string(e) && e === e.toLowerCase()
    }, u.startWith = function(e, t) {
        return u.string(e) && 0 === e.indexOf(t)
    }, u.startWith.api = ["not"], u.endWith = function(e, t) {
        return u.string(e) && e.indexOf(t) > -1 && e.indexOf(t) === e.length - t.length
    }, u.endWith.api = ["not"], u.capitalized = function(e) {
        if (u.not.string(e)) return !1;
        for (var t = e.split(" "), n = [], r = 0; r < t.length; r++) n.push(t[r][0] === t[r][0].toUpperCase());
        return u.all.truthy.apply(null, n)
    }, u.palindrome = function(e) {
        return u.string(e) && e == e.split("").reverse().join("")
    };
    var p = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"],
        m = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
    if (u.today = function(e) {
            var t = new Date,
                n = t.toDateString();
            return u.date(e) && e.toDateString() === n
        }, u.yesterday = function(e) {
            var t = new Date,
                n = new Date(t.setDate(t.getDate() - 1)).toDateString();
            return u.date(e) && e.toDateString() === n
        }, u.tomorrow = function(e) {
            var t = new Date,
                n = new Date(t.setDate(t.getDate() + 1)).toDateString();
            return u.date(e) && e.toDateString() === n
        }, u.past = function(e) {
            var t = new Date;
            return u.date(e) && e.getTime() < t.getTime()
        }, u.future = e(u.past), u.day = function(e, t) {
            return u.date(e) && t.toLowerCase() === p[e.getDay()]
        }, u.day.api = ["not"], u.month = function(e, t) {
            return u.date(e) && t.toLowerCase() === m[e.getMonth()]
        }, u.month.api = ["not"], u.year = function(e, t) {
            return u.date(e) && u.number(t) && t === e.getFullYear()
        }, u.year.api = ["not"], u.leapYear = function(e) {
            return u.number(e) && (e % 4 === 0 && e % 100 !== 0 || e % 400 === 0)
        }, u.weekend = function(e) {
            return u.date(e) && (6 === e.getDay() || 0 === e.getDay())
        }, u.weekday = e(u.weekend), u.inDateRange = function(e, t, n) {
            if (u.not.date(e) || u.not.date(t) || u.not.date(n)) return !1;
            var r = e.getTime(),
                o = t.getTime(),
                a = n.getTime();
            return r > o && a > r
        }, u.inDateRange.api = ["not"], u.inLastWeek = function(e) {
            return u.inDateRange(e, new Date((new Date).setDate((new Date).getDate() - 7)), new Date)
        }, u.inLastMonth = function(e) {
            return u.inDateRange(e, new Date((new Date).setMonth((new Date).getMonth() - 1)), new Date)
        }, u.inLastYear = function(e) {
            return u.inDateRange(e, new Date((new Date).setFullYear((new Date).getFullYear() - 1)), new Date)
        }, u.inNextWeek = function(e) {
            return u.inDateRange(e, new Date, new Date((new Date).setDate((new Date).getDate() + 7)))
        }, u.inNextMonth = function(e) {
            return u.inDateRange(e, new Date, new Date((new Date).setMonth((new Date).getMonth() + 1)))
        }, u.inNextYear = function(e) {
            return u.inDateRange(e, new Date, new Date((new Date).setFullYear((new Date).getFullYear() + 1)))
        }, u.quarterOfYear = function(e, t) {
            return u.date(e) && u.number(t) && t === Math.floor((e.getMonth() + 3) / 3)
        }, u.quarterOfYear.api = ["not"], u.dayLightSavingTime = function(e) {
            var t = new Date(e.getFullYear(), 0, 1),
                n = new Date(e.getFullYear(), 6, 1),
                r = Math.max(t.getTimezoneOffset(), n.getTimezoneOffset());
            return e.getTimezoneOffset() < r
        }, "undefined" != typeof window) {
        var h = "navigator" in window && "userAgent" in navigator && navigator.userAgent.toLowerCase() || "",
            F = "navigator" in window && "vendor" in navigator && navigator.vendor.toLowerCase() || "",
            g = "navigator" in window && "appVersion" in navigator && navigator.appVersion.toLowerCase() || "";
        u.chrome = function() {
            return /chrome|chromium/i.test(h) && /google inc/.test(F)
        }, u.chrome.api = ["not"], u.firefox = function() {
            return /firefox/i.test(h)
        }, u.firefox.api = ["not"], u.edge = function() {
            return /edge/i.test(h)
        }, u.edge.api = ["not"], u.ie = function(e) {
            return e ? e >= 11 ? "ActiveXObject" in window : new RegExp("msie " + e).test(h) : /msie/i.test(h) || "ActiveXObject" in window
        }, u.ie.api = ["not"], u.opera = function() {
            return /^Opera\//.test(h) || /\x20OPR\//.test(h)
        }, u.opera.api = ["not"], u.safari = function() {
            return /safari/i.test(h) && /apple computer/i.test(F)
        }, u.safari.api = ["not"], u.ios = function() {
            return u.iphone() || u.ipad() || u.ipod()
        }, u.ios.api = ["not"], u.iphone = function() {
            return /iphone/i.test(h)
        }, u.iphone.api = ["not"], u.ipad = function() {
            return /ipad/i.test(h)
        }, u.ipad.api = ["not"], u.ipod = function() {
            return /ipod/i.test(h)
        }, u.ipod.api = ["not"], u.android = function() {
            return /android/i.test(h)
        }, u.android.api = ["not"], u.androidPhone = function() {
            return /android/i.test(h) && /mobile/i.test(h)
        }, u.androidPhone.api = ["not"], u.androidTablet = function() {
            return /android/i.test(h) && !/mobile/i.test(h)
        }, u.androidTablet.api = ["not"], u.blackberry = function() {
            return /blackberry/i.test(h) || /BB10/i.test(h)
        }, u.blackberry.api = ["not"], u.desktop = function() {
            return u.not.mobile() && u.not.tablet()
        }, u.desktop.api = ["not"], u.linux = function() {
            return /linux/i.test(g)
        }, u.linux.api = ["not"], u.mac = function() {
            return /mac/i.test(g)
        }, u.mac.api = ["not"], u.windows = function() {
            return /win/i.test(g)
        }, u.windows.api = ["not"], u.windowsPhone = function() {
            return u.windows() && /phone/i.test(h)
        }, u.windowsPhone.api = ["not"], u.windowsTablet = function() {
            return u.windows() && u.not.windowsPhone() && /touch/i.test(h)
        }, u.windowsTablet.api = ["not"], u.mobile = function() {
            return u.iphone() || u.ipod() || u.androidPhone() || u.blackberry() || u.windowsPhone()
        }, u.mobile.api = ["not"], u.tablet = function() {
            return u.ipad() || u.androidTablet() || u.windowsTablet()
        }, u.tablet.api = ["not"], u.online = function() {
            return navigator.onLine
        }, u.online.api = ["not"], u.offline = e(u.online), u.offline.api = ["not"], u.touchDevice = function() {
            return "ontouchstart" in window || "DocumentTouch" in window && document instanceof DocumentTouch
        }, u.touchDevice.api = ["not"]
    }
    return u.propertyCount = function(e, t) {
        if (!u.object(e) || !u.number(t)) return !1;
        if (Object.keys) return Object.keys(e).length === t;
        var n, r = [];
        for (n in e) s.call(e, n) && r.push(n);
        return r.length === t
    }, u.propertyCount.api = ["not"], u.propertyDefined = function(e, t) {
        return u.object(e) && u.string(t) && t in e
    }, u.propertyDefined.api = ["not"], u.windowObject = function(e) {
        return "object" == typeof e && "setInterval" in e
    }, u.domNode = function(e) {
        return u.object(e) && e.nodeType > 0
    }, u.inArray = function(e, t) {
        if (u.not.array(t)) return !1;
        for (var n = 0; n < t.length; n++)
            if (t[n] === e) return !0;
        return !1
    }, u.inArray.api = ["not"], u.sorted = function(e) {
        if (u.not.array(e)) return !1;
        for (var t = 0; t < e.length; t++)
            if (e[t] > e[t + 1]) return !1;
        return !0
    }, o(), u.setRegexp = function(e, t) {
        for (var n in c) s.call(c, n) && t === n && (c[n] = e)
    }, u.setNamespace = function() {
        return a.is = i, this
    }, u
}),
function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
    "use strict";

    function t(t) {
        return !t.nodeName || -1 !== e.inArray(t.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"])
    }

    function n(t) {
        return e.isFunction(t) || e.isPlainObject(t) ? t : {
            top: t,
            left: t
        }
    }
    var r = e.scrollTo = function(t, n, r) {
        return e(window).scrollTo(t, n, r)
    };
    return r.defaults = {
        axis: "xy",
        duration: 0,
        limit: !0
    }, e.fn.scrollTo = function(o, a, i) {
        "object" == typeof a && (i = a, a = 0), "function" == typeof i && (i = {
            onAfter: i
        }), "max" === o && (o = 9e9), i = e.extend({}, r.defaults, i), a = a || i.duration;
        var u = i.queue && 1 < i.axis.length;
        return u && (a /= 2), i.offset = n(i.offset), i.over = n(i.over), this.each(function() {
            function d(t) {
                var n = e.extend({}, i, {
                    queue: !0,
                    duration: a,
                    complete: t && function() {
                        t.call(c, p, i)
                    }
                });
                l.animate(m, n)
            }
            if (null !== o) {
                var f, s = t(this),
                    c = s ? this.contentWindow || window : this,
                    l = e(c),
                    p = o,
                    m = {};
                switch (typeof p) {
                    case "number":
                    case "string":
                        if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(p)) {
                            p = n(p);
                            break
                        }
                        p = s ? e(p) : e(p, c);
                    case "object":
                        if (0 === p.length) return;
                        (p.is || p.style) && (f = (p = e(p)).offset())
                }
                var h = e.isFunction(i.offset) && i.offset(c, p) || i.offset;
                e.each(i.axis.split(""), function(e, t) {
                    var n = "x" === t ? "Left" : "Top",
                        o = n.toLowerCase(),
                        a = "scroll" + n,
                        F = l[a](),
                        g = r.max(c, t);
                    f ? (m[a] = f[o] + (s ? 0 : F - l.offset()[o]), i.margin && (m[a] -= parseInt(p.css("margin" + n), 10) || 0, m[a] -= parseInt(p.css("border" + n + "Width"), 10) || 0), m[a] += h[o] || 0, i.over[o] && (m[a] += p["x" === t ? "width" : "height"]() * i.over[o])) : (n = p[o], m[a] = n.slice && "%" === n.slice(-1) ? parseFloat(n) / 100 * g : n), i.limit && /^\d+$/.test(m[a]) && (m[a] = 0 >= m[a] ? 0 : Math.min(m[a], g)), !e && 1 < i.axis.length && (F === m[a] ? m = {} : u && (d(i.onAfterFirst), m = {}))
                }), d(i.onAfter)
            }
        })
    }, r.max = function(n, r) {
        var o = "x" === r ? "Width" : "Height",
            a = "scroll" + o;
        if (!t(n)) return n[a] - e(n)[o.toLowerCase()]();
        var o = "client" + o,
            i = n.ownerDocument || n.document,
            u = i.documentElement,
            i = i.body;
        return Math.max(u[a], i[a]) - Math.min(u[o], i[o])
    }, e.Tween.propHooks.scrollLeft = e.Tween.propHooks.scrollTop = {
        get: function(t) {
            return e(t.elem)[t.prop]()
        },
        set: function(t) {
            var n = this.get(t);
            if (t.options.interrupt && t._last && t._last !== n) return e(t.elem).stop();
            var r = Math.round(t.now);
            n !== r && (e(t.elem)[t.prop](r), t._last = this.get(t))
        }
    }, r
}), jQuery.extend(jQuery.easing, {
    swoop: function(e, t, n, r, o) {
        return 0 == t ? n : t == o ? n + r : (t /= o / 2) < 1 ? r / 2 * Math.pow(2, 10 * (t - 1)) + n : r / 2 * (-Math.pow(2, -10 * --t) + 2) + n
    }
}), $(document).ready(function() {
    var e = !0,
        t = !0,
        n = !1,
        r = !1,
        o = $(window),
        a = $(document),
        i = ($("html"), $("body")),
        u = $(".preload"),
        d = $(".header-background");
    if (Modernizr.bgsizecover && Modernizr.csstransforms && Modernizr.inlinesvg || (e = !1, i.addClass("not-supported")), (!Modernizr.touchevents || is.not.touchDevice()) && (t = !1, i.addClass("not-touch")), document.addEventListener && document.addEventListener("touchstart", function() {}, !1), d.attr("data-original") && d.attr("data-glitch")) {
        r = !0;
        var f, s, c = d.data("original"),
            l = d.data("glitch").split(","),
            p = l.length;
        for (f = 0; p > f; f++) {
            var m = $.trim(l[f].replace(/[\[\]']+/g, "")),
                h = document.createElement("img");
            h.src = m;
        }
        var F = function() {
            d.css("background-image", "url(" + c + ")"), s = setTimeout(function() {
                d.css("background-image", "url(" + l[Math.floor(Math.random() * p)] + ")"), s = setTimeout(function() {
                    d.css("background-image", "url(" + l[Math.floor(Math.random() * p)] + ")"), s = setTimeout(F, Math.floor(120 * Math.random() + 60))
                }, Math.floor(120 * Math.random() + 60))
            }, Math.floor(2400 * Math.random() + 1200))
        }
    }
    $('a[href*="#"]').click(function(e) {
        return e.preventDefault(), a.scrollTo(this.hash, 800, {
            easing: "swoop"
        }), !1
    }), o.load(function() {
        1 == e && setTimeout(function() {
            n = !0, i.addClass("is-loaded"), 1 == r && F(), setTimeout(function() {
                u.remove()
            }, 800)
        }, 800)
    }), 0 == e && i.prepend('            <div class="unsupported">                <div class="unsupported-container">                    <h1>Please Upgrade Your Browser</h1>                    <p>Your browser seems outdated and is not longer supported. Find the latest versions of our supported browsers below.</p>                    <p><a href="https://www.google.com/chrome/browser/desktop" target="_blank">Chrome</a> - <a href="https://www.mozilla.org/firefox" target="_blank">Firefox</a> - <a href="http://www.opera.com" target="_blank">Opera</a> - <a href="https://www.apple.com/safari" target="_blank">Safari</a></p>                    <p>Thank you.</p>                </div>            </div>        ')
});
