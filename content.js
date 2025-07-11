(() => {
    var e, t, n = {
            838: function(e) {
                e.exports = function() {
                    "use strict";
                    const {
                        entries: e,
                        setPrototypeOf: t,
                        isFrozen: n,
                        getPrototypeOf: r,
                        getOwnPropertyDescriptor: o
                    } = Object;
                    let {
                        freeze: i,
                        seal: a,
                        create: l
                    } = Object, {
                        apply: u,
                        construct: s
                    } = "undefined" != typeof Reflect && Reflect;
                    i || (i = function(e) {
                        return e
                    }), a || (a = function(e) {
                        return e
                    }), u || (u = function(e, t, n) {
                        return e.apply(t, n)
                    }), s || (s = function(e, t) {
                        return new e(...t)
                    });
                    const c = x(Array.prototype.forEach),
                        f = x(Array.prototype.pop),
                        d = x(Array.prototype.push),
                        p = x(String.prototype.toLowerCase),
                        h = x(String.prototype.toString),
                        g = x(String.prototype.match),
                        m = x(String.prototype.replace),
                        v = x(String.prototype.indexOf),
                        y = x(String.prototype.trim),
                        b = x(Object.prototype.hasOwnProperty),
                        w = x(RegExp.prototype.test),
                        _ = S(TypeError);

                    function x(e) {
                        return function(t) {
                            for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                            return u(e, t, r)
                        }
                    }

                    function S(e) {
                        return function() {
                            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                            return s(e, n)
                        }
                    }

                    function E(e, r) {
                        let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : p;
                        t && t(e, null);
                        let i = r.length;
                        for (; i--;) {
                            let t = r[i];
                            if ("string" == typeof t) {
                                const e = o(t);
                                e !== t && (n(r) || (r[i] = e), t = e)
                            }
                            e[t] = !0
                        }
                        return e
                    }

                    function k(e) {
                        for (let t = 0; t < e.length; t++) b(e, t) || (e[t] = null);
                        return e
                    }

                    function C(t) {
                        const n = l(null);
                        for (const [r, o] of e(t)) b(t, r) && (Array.isArray(o) ? n[r] = k(o) : o && "object" == typeof o && o.constructor === Object ? n[r] = C(o) : n[r] = o);
                        return n
                    }

                    function T(e, t) {
                        for (; null !== e;) {
                            const n = o(e, t);
                            if (n) {
                                if (n.get) return x(n.get);
                                if ("function" == typeof n.value) return x(n.value)
                            }
                            e = r(e)
                        }

                        function n() {
                            return null
                        }
                        return n
                    }
                    const N = i(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
                        R = i(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
                        A = i(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
                        L = i(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
                        O = i(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]),
                        I = i(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
                        D = i(["#text"]),
                        j = i(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]),
                        M = i(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
                        P = i(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
                        z = i(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
                        B = a(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
                        F = a(/<%[\w\W]*|[\w\W]*%>/gm),
                        U = a(/\${[\w\W]*}/gm),
                        W = a(/^data-[\-\w.\u00B7-\uFFFF]/),
                        H = a(/^aria-[\-\w]+$/),
                        $ = a(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
                        V = a(/^(?:\w+script|data):/i),
                        Y = a(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
                        Q = a(/^html$/i),
                        q = a(/^[a-z][.\w]*(-[.\w]+)+$/i);
                    var K = Object.freeze({
                        __proto__: null,
                        MUSTACHE_EXPR: B,
                        ERB_EXPR: F,
                        TMPLIT_EXPR: U,
                        DATA_ATTR: W,
                        ARIA_ATTR: H,
                        IS_ALLOWED_URI: $,
                        IS_SCRIPT_OR_DATA: V,
                        ATTR_WHITESPACE: Y,
                        DOCTYPE_NAME: Q,
                        CUSTOM_ELEMENT: q
                    });
                    const X = {
                            element: 1,
                            attribute: 2,
                            text: 3,
                            cdataSection: 4,
                            entityReference: 5,
                            entityNode: 6,
                            progressingInstruction: 7,
                            comment: 8,
                            document: 9,
                            documentType: 10,
                            documentFragment: 11,
                            notation: 12
                        },
                        G = function() {
                            return "undefined" == typeof window ? null : window
                        },
                        J = function(e, t) {
                            if ("object" != typeof e || "function" != typeof e.createPolicy) return null;
                            let n = null;
                            const r = "data-tt-policy-suffix";
                            t && t.hasAttribute(r) && (n = t.getAttribute(r));
                            const o = "dompurify" + (n ? "#" + n : "");
                            try {
                                return e.createPolicy(o, {
                                    createHTML: e => e,
                                    createScriptURL: e => e
                                })
                            } catch (e) {
                                return console.warn("TrustedTypes policy " + o + " could not be created."), null
                            }
                        };

                    function Z() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : G();
                        const n = e => Z(e);
                        if (n.version = "3.1.6", n.removed = [], !t || !t.document || t.document.nodeType !== X.document) return n.isSupported = !1, n;
                        let {
                            document: r
                        } = t;
                        const o = r,
                            a = o.currentScript,
                            {
                                DocumentFragment: u,
                                HTMLTemplateElement: s,
                                Node: x,
                                Element: S,
                                NodeFilter: k,
                                NamedNodeMap: B = t.NamedNodeMap || t.MozNamedAttrMap,
                                HTMLFormElement: F,
                                DOMParser: U,
                                trustedTypes: W
                            } = t,
                            H = S.prototype,
                            V = T(H, "cloneNode"),
                            Y = T(H, "remove"),
                            q = T(H, "nextSibling"),
                            ee = T(H, "childNodes"),
                            te = T(H, "parentNode");
                        if ("function" == typeof s) {
                            const e = r.createElement("template");
                            e.content && e.content.ownerDocument && (r = e.content.ownerDocument)
                        }
                        let ne, re = "";
                        const {
                            implementation: oe,
                            createNodeIterator: ie,
                            createDocumentFragment: ae,
                            getElementsByTagName: le
                        } = r, {
                            importNode: ue
                        } = o;
                        let se = {};
                        n.isSupported = "function" == typeof e && "function" == typeof te && oe && void 0 !== oe.createHTMLDocument;
                        const {
                            MUSTACHE_EXPR: ce,
                            ERB_EXPR: fe,
                            TMPLIT_EXPR: de,
                            DATA_ATTR: pe,
                            ARIA_ATTR: he,
                            IS_SCRIPT_OR_DATA: ge,
                            ATTR_WHITESPACE: me,
                            CUSTOM_ELEMENT: ve
                        } = K;
                        let {
                            IS_ALLOWED_URI: ye
                        } = K, be = null;
                        const we = E({}, [...N, ...R, ...A, ...O, ...D]);
                        let _e = null;
                        const xe = E({}, [...j, ...M, ...P, ...z]);
                        let Se = Object.seal(l(null, {
                                tagNameCheck: {
                                    writable: !0,
                                    configurable: !1,
                                    enumerable: !0,
                                    value: null
                                },
                                attributeNameCheck: {
                                    writable: !0,
                                    configurable: !1,
                                    enumerable: !0,
                                    value: null
                                },
                                allowCustomizedBuiltInElements: {
                                    writable: !0,
                                    configurable: !1,
                                    enumerable: !0,
                                    value: !1
                                }
                            })),
                            Ee = null,
                            ke = null,
                            Ce = !0,
                            Te = !0,
                            Ne = !1,
                            Re = !0,
                            Ae = !1,
                            Le = !0,
                            Oe = !1,
                            Ie = !1,
                            De = !1,
                            je = !1,
                            Me = !1,
                            Pe = !1,
                            ze = !0,
                            Be = !1;
                        const Fe = "user-content-";
                        let Ue = !0,
                            We = !1,
                            He = {},
                            $e = null;
                        const Ve = E({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
                        let Ye = null;
                        const Qe = E({}, ["audio", "video", "img", "source", "image", "track"]);
                        let qe = null;
                        const Ke = E({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]),
                            Xe = "http://www.w3.org/1998/Math/MathML",
                            Ge = "http://www.w3.org/2000/svg",
                            Je = "http://www.w3.org/1999/xhtml";
                        let Ze = Je,
                            et = !1,
                            tt = null;
                        const nt = E({}, [Xe, Ge, Je], h);
                        let rt = null;
                        const ot = ["application/xhtml+xml", "text/html"],
                            it = "text/html";
                        let at = null,
                            lt = null;
                        const ut = r.createElement("form"),
                            st = function(e) {
                                return e instanceof RegExp || e instanceof Function
                            },
                            ct = function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                if (!lt || lt !== e) {
                                    if (e && "object" == typeof e || (e = {}), e = C(e), rt = -1 === ot.indexOf(e.PARSER_MEDIA_TYPE) ? it : e.PARSER_MEDIA_TYPE, at = "application/xhtml+xml" === rt ? h : p, be = b(e, "ALLOWED_TAGS") ? E({}, e.ALLOWED_TAGS, at) : we, _e = b(e, "ALLOWED_ATTR") ? E({}, e.ALLOWED_ATTR, at) : xe, tt = b(e, "ALLOWED_NAMESPACES") ? E({}, e.ALLOWED_NAMESPACES, h) : nt, qe = b(e, "ADD_URI_SAFE_ATTR") ? E(C(Ke), e.ADD_URI_SAFE_ATTR, at) : Ke, Ye = b(e, "ADD_DATA_URI_TAGS") ? E(C(Qe), e.ADD_DATA_URI_TAGS, at) : Qe, $e = b(e, "FORBID_CONTENTS") ? E({}, e.FORBID_CONTENTS, at) : Ve, Ee = b(e, "FORBID_TAGS") ? E({}, e.FORBID_TAGS, at) : {}, ke = b(e, "FORBID_ATTR") ? E({}, e.FORBID_ATTR, at) : {}, He = !!b(e, "USE_PROFILES") && e.USE_PROFILES, Ce = !1 !== e.ALLOW_ARIA_ATTR, Te = !1 !== e.ALLOW_DATA_ATTR, Ne = e.ALLOW_UNKNOWN_PROTOCOLS || !1, Re = !1 !== e.ALLOW_SELF_CLOSE_IN_ATTR, Ae = e.SAFE_FOR_TEMPLATES || !1, Le = !1 !== e.SAFE_FOR_XML, Oe = e.WHOLE_DOCUMENT || !1, je = e.RETURN_DOM || !1, Me = e.RETURN_DOM_FRAGMENT || !1, Pe = e.RETURN_TRUSTED_TYPE || !1, De = e.FORCE_BODY || !1, ze = !1 !== e.SANITIZE_DOM, Be = e.SANITIZE_NAMED_PROPS || !1, Ue = !1 !== e.KEEP_CONTENT, We = e.IN_PLACE || !1, ye = e.ALLOWED_URI_REGEXP || $, Ze = e.NAMESPACE || Je, Se = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && st(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (Se.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && st(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (Se.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && "boolean" == typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (Se.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Ae && (Te = !1), Me && (je = !0), He && (be = E({}, D), _e = [], !0 === He.html && (E(be, N), E(_e, j)), !0 === He.svg && (E(be, R), E(_e, M), E(_e, z)), !0 === He.svgFilters && (E(be, A), E(_e, M), E(_e, z)), !0 === He.mathMl && (E(be, O), E(_e, P), E(_e, z))), e.ADD_TAGS && (be === we && (be = C(be)), E(be, e.ADD_TAGS, at)), e.ADD_ATTR && (_e === xe && (_e = C(_e)), E(_e, e.ADD_ATTR, at)), e.ADD_URI_SAFE_ATTR && E(qe, e.ADD_URI_SAFE_ATTR, at), e.FORBID_CONTENTS && ($e === Ve && ($e = C($e)), E($e, e.FORBID_CONTENTS, at)), Ue && (be["#text"] = !0), Oe && E(be, ["html", "head", "body"]), be.table && (E(be, ["tbody"]), delete Ee.tbody), e.TRUSTED_TYPES_POLICY) {
                                        if ("function" != typeof e.TRUSTED_TYPES_POLICY.createHTML) throw _('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
                                        if ("function" != typeof e.TRUSTED_TYPES_POLICY.createScriptURL) throw _('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
                                        ne = e.TRUSTED_TYPES_POLICY, re = ne.createHTML("")
                                    } else void 0 === ne && (ne = J(W, a)), null !== ne && "string" == typeof re && (re = ne.createHTML(""));
                                    i && i(e), lt = e
                                }
                            },
                            ft = E({}, ["mi", "mo", "mn", "ms", "mtext"]),
                            dt = E({}, ["foreignobject", "annotation-xml"]),
                            pt = E({}, ["title", "style", "font", "a", "script"]),
                            ht = E({}, [...R, ...A, ...L]),
                            gt = E({}, [...O, ...I]),
                            mt = function(e) {
                                let t = te(e);
                                t && t.tagName || (t = {
                                    namespaceURI: Ze,
                                    tagName: "template"
                                });
                                const n = p(e.tagName),
                                    r = p(t.tagName);
                                return !!tt[e.namespaceURI] && (e.namespaceURI === Ge ? t.namespaceURI === Je ? "svg" === n : t.namespaceURI === Xe ? "svg" === n && ("annotation-xml" === r || ft[r]) : Boolean(ht[n]) : e.namespaceURI === Xe ? t.namespaceURI === Je ? "math" === n : t.namespaceURI === Ge ? "math" === n && dt[r] : Boolean(gt[n]) : e.namespaceURI === Je ? !(t.namespaceURI === Ge && !dt[r]) && !(t.namespaceURI === Xe && !ft[r]) && !gt[n] && (pt[n] || !ht[n]) : !("application/xhtml+xml" !== rt || !tt[e.namespaceURI]))
                            },
                            vt = function(e) {
                                d(n.removed, {
                                    element: e
                                });
                                try {
                                    te(e).removeChild(e)
                                } catch (t) {
                                    Y(e)
                                }
                            },
                            yt = function(e, t) {
                                try {
                                    d(n.removed, {
                                        attribute: t.getAttributeNode(e),
                                        from: t
                                    })
                                } catch (e) {
                                    d(n.removed, {
                                        attribute: null,
                                        from: t
                                    })
                                }
                                if (t.removeAttribute(e), "is" === e && !_e[e])
                                    if (je || Me) try {
                                        vt(t)
                                    } catch (e) {} else try {
                                        t.setAttribute(e, "")
                                    } catch (e) {}
                            },
                            bt = function(e) {
                                let t = null,
                                    n = null;
                                if (De) e = "<remove></remove>" + e;
                                else {
                                    const t = g(e, /^[\r\n\t ]+/);
                                    n = t && t[0]
                                }
                                "application/xhtml+xml" === rt && Ze === Je && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
                                const o = ne ? ne.createHTML(e) : e;
                                if (Ze === Je) try {
                                    t = (new U).parseFromString(o, rt)
                                } catch (e) {}
                                if (!t || !t.documentElement) {
                                    t = oe.createDocument(Ze, "template", null);
                                    try {
                                        t.documentElement.innerHTML = et ? re : o
                                    } catch (e) {}
                                }
                                const i = t.body || t.documentElement;
                                return e && n && i.insertBefore(r.createTextNode(n), i.childNodes[0] || null), Ze === Je ? le.call(t, Oe ? "html" : "body")[0] : Oe ? t.documentElement : i
                            },
                            wt = function(e) {
                                return ie.call(e.ownerDocument || e, e, k.SHOW_ELEMENT | k.SHOW_COMMENT | k.SHOW_TEXT | k.SHOW_PROCESSING_INSTRUCTION | k.SHOW_CDATA_SECTION, null)
                            },
                            _t = function(e) {
                                return e instanceof F && ("string" != typeof e.nodeName || "string" != typeof e.textContent || "function" != typeof e.removeChild || !(e.attributes instanceof B) || "function" != typeof e.removeAttribute || "function" != typeof e.setAttribute || "string" != typeof e.namespaceURI || "function" != typeof e.insertBefore || "function" != typeof e.hasChildNodes)
                            },
                            xt = function(e) {
                                return "function" == typeof x && e instanceof x
                            },
                            St = function(e, t, r) {
                                se[e] && c(se[e], (e => {
                                    e.call(n, t, r, lt)
                                }))
                            },
                            Et = function(e) {
                                let t = null;
                                if (St("beforeSanitizeElements", e, null), _t(e)) return vt(e), !0;
                                const r = at(e.nodeName);
                                if (St("uponSanitizeElement", e, {
                                        tagName: r,
                                        allowedTags: be
                                    }), e.hasChildNodes() && !xt(e.firstElementChild) && w(/<[/\w]/g, e.innerHTML) && w(/<[/\w]/g, e.textContent)) return vt(e), !0;
                                if (e.nodeType === X.progressingInstruction) return vt(e), !0;
                                if (Le && e.nodeType === X.comment && w(/<[/\w]/g, e.data)) return vt(e), !0;
                                if (!be[r] || Ee[r]) {
                                    if (!Ee[r] && Ct(r)) {
                                        if (Se.tagNameCheck instanceof RegExp && w(Se.tagNameCheck, r)) return !1;
                                        if (Se.tagNameCheck instanceof Function && Se.tagNameCheck(r)) return !1
                                    }
                                    if (Ue && !$e[r]) {
                                        const t = te(e) || e.parentNode,
                                            n = ee(e) || e.childNodes;
                                        if (n && t)
                                            for (let r = n.length - 1; r >= 0; --r) {
                                                const o = V(n[r], !0);
                                                o.__removalCount = (e.__removalCount || 0) + 1, t.insertBefore(o, q(e))
                                            }
                                    }
                                    return vt(e), !0
                                }
                                return e instanceof S && !mt(e) ? (vt(e), !0) : "noscript" !== r && "noembed" !== r && "noframes" !== r || !w(/<\/no(script|embed|frames)/i, e.innerHTML) ? (Ae && e.nodeType === X.text && (t = e.textContent, c([ce, fe, de], (e => {
                                    t = m(t, e, " ")
                                })), e.textContent !== t && (d(n.removed, {
                                    element: e.cloneNode()
                                }), e.textContent = t)), St("afterSanitizeElements", e, null), !1) : (vt(e), !0)
                            },
                            kt = function(e, t, n) {
                                if (ze && ("id" === t || "name" === t) && (n in r || n in ut)) return !1;
                                if (Te && !ke[t] && w(pe, t));
                                else if (Ce && w(he, t));
                                else if (!_e[t] || ke[t]) {
                                    if (!(Ct(e) && (Se.tagNameCheck instanceof RegExp && w(Se.tagNameCheck, e) || Se.tagNameCheck instanceof Function && Se.tagNameCheck(e)) && (Se.attributeNameCheck instanceof RegExp && w(Se.attributeNameCheck, t) || Se.attributeNameCheck instanceof Function && Se.attributeNameCheck(t)) || "is" === t && Se.allowCustomizedBuiltInElements && (Se.tagNameCheck instanceof RegExp && w(Se.tagNameCheck, n) || Se.tagNameCheck instanceof Function && Se.tagNameCheck(n)))) return !1
                                } else if (qe[t]);
                                else if (w(ye, m(n, me, "")));
                                else if ("src" !== t && "xlink:href" !== t && "href" !== t || "script" === e || 0 !== v(n, "data:") || !Ye[e])
                                    if (Ne && !w(ge, m(n, me, "")));
                                    else if (n) return !1;
                                return !0
                            },
                            Ct = function(e) {
                                return "annotation-xml" !== e && g(e, ve)
                            },
                            Tt = function(e) {
                                St("beforeSanitizeAttributes", e, null);
                                const {
                                    attributes: t
                                } = e;
                                if (!t) return;
                                const r = {
                                    attrName: "",
                                    attrValue: "",
                                    keepAttr: !0,
                                    allowedAttributes: _e
                                };
                                let o = t.length;
                                for (; o--;) {
                                    const i = t[o],
                                        {
                                            name: a,
                                            namespaceURI: l,
                                            value: u
                                        } = i,
                                        s = at(a);
                                    let d = "value" === a ? u : y(u);
                                    if (r.attrName = s, r.attrValue = d, r.keepAttr = !0, r.forceKeepAttr = void 0, St("uponSanitizeAttribute", e, r), d = r.attrValue, Le && w(/((--!?|])>)|<\/(style|title)/i, d)) {
                                        yt(a, e);
                                        continue
                                    }
                                    if (r.forceKeepAttr) continue;
                                    if (yt(a, e), !r.keepAttr) continue;
                                    if (!Re && w(/\/>/i, d)) {
                                        yt(a, e);
                                        continue
                                    }
                                    Ae && c([ce, fe, de], (e => {
                                        d = m(d, e, " ")
                                    }));
                                    const p = at(e.nodeName);
                                    if (kt(p, s, d)) {
                                        if (!Be || "id" !== s && "name" !== s || (yt(a, e), d = Fe + d), ne && "object" == typeof W && "function" == typeof W.getAttributeType)
                                            if (l);
                                            else switch (W.getAttributeType(p, s)) {
                                                case "TrustedHTML":
                                                    d = ne.createHTML(d);
                                                    break;
                                                case "TrustedScriptURL":
                                                    d = ne.createScriptURL(d)
                                            }
                                        try {
                                            l ? e.setAttributeNS(l, a, d) : e.setAttribute(a, d), _t(e) ? vt(e) : f(n.removed)
                                        } catch (e) {}
                                    }
                                }
                                St("afterSanitizeAttributes", e, null)
                            },
                            Nt = function e(t) {
                                let n = null;
                                const r = wt(t);
                                for (St("beforeSanitizeShadowDOM", t, null); n = r.nextNode();) St("uponSanitizeShadowNode", n, null), Et(n) || (n.content instanceof u && e(n.content), Tt(n));
                                St("afterSanitizeShadowDOM", t, null)
                            };
                        return n.sanitize = function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                r = null,
                                i = null,
                                a = null,
                                l = null;
                            if (et = !e, et && (e = "\x3c!--\x3e"), "string" != typeof e && !xt(e)) {
                                if ("function" != typeof e.toString) throw _("toString is not a function");
                                if ("string" != typeof(e = e.toString())) throw _("dirty is not a string, aborting")
                            }
                            if (!n.isSupported) return e;
                            if (Ie || ct(t), n.removed = [], "string" == typeof e && (We = !1), We) {
                                if (e.nodeName) {
                                    const t = at(e.nodeName);
                                    if (!be[t] || Ee[t]) throw _("root node is forbidden and cannot be sanitized in-place")
                                }
                            } else if (e instanceof x) r = bt("\x3c!----\x3e"), i = r.ownerDocument.importNode(e, !0), i.nodeType === X.element && "BODY" === i.nodeName || "HTML" === i.nodeName ? r = i : r.appendChild(i);
                            else {
                                if (!je && !Ae && !Oe && -1 === e.indexOf("<")) return ne && Pe ? ne.createHTML(e) : e;
                                if (r = bt(e), !r) return je ? null : Pe ? re : ""
                            }
                            r && De && vt(r.firstChild);
                            const s = wt(We ? e : r);
                            for (; a = s.nextNode();) Et(a) || (a.content instanceof u && Nt(a.content), Tt(a));
                            if (We) return e;
                            if (je) {
                                if (Me)
                                    for (l = ae.call(r.ownerDocument); r.firstChild;) l.appendChild(r.firstChild);
                                else l = r;
                                return (_e.shadowroot || _e.shadowrootmode) && (l = ue.call(o, l, !0)), l
                            }
                            let f = Oe ? r.outerHTML : r.innerHTML;
                            return Oe && be["!doctype"] && r.ownerDocument && r.ownerDocument.doctype && r.ownerDocument.doctype.name && w(Q, r.ownerDocument.doctype.name) && (f = "<!DOCTYPE " + r.ownerDocument.doctype.name + ">\n" + f), Ae && c([ce, fe, de], (e => {
                                f = m(f, e, " ")
                            })), ne && Pe ? ne.createHTML(f) : f
                        }, n.setConfig = function() {
                            ct(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}), Ie = !0
                        }, n.clearConfig = function() {
                            lt = null, Ie = !1
                        }, n.isValidAttribute = function(e, t, n) {
                            lt || ct({});
                            const r = at(e),
                                o = at(t);
                            return kt(r, o, n)
                        }, n.addHook = function(e, t) {
                            "function" == typeof t && (se[e] = se[e] || [], d(se[e], t))
                        }, n.removeHook = function(e) {
                            if (se[e]) return f(se[e])
                        }, n.removeHooks = function(e) {
                            se[e] && (se[e] = [])
                        }, n.removeAllHooks = function() {
                            se = {}
                        }, n
                    }
                    return Z()
                }()
            },
            543: function(e, t, n) {
                var r;
                e = n.nmd(e),
                    function() {
                        var o, i = "Expected a function",
                            a = "__lodash_hash_undefined__",
                            l = "__lodash_placeholder__",
                            u = 16,
                            s = 32,
                            c = 64,
                            f = 128,
                            d = 256,
                            p = 1 / 0,
                            h = 9007199254740991,
                            g = NaN,
                            m = 4294967295,
                            v = [
                                ["ary", f],
                                ["bind", 1],
                                ["bindKey", 2],
                                ["curry", 8],
                                ["curryRight", u],
                                ["flip", 512],
                                ["partial", s],
                                ["partialRight", c],
                                ["rearg", d]
                            ],
                            y = "[object Arguments]",
                            b = "[object Array]",
                            w = "[object Boolean]",
                            _ = "[object Date]",
                            x = "[object Error]",
                            S = "[object Function]",
                            E = "[object GeneratorFunction]",
                            k = "[object Map]",
                            C = "[object Number]",
                            T = "[object Object]",
                            N = "[object Promise]",
                            R = "[object RegExp]",
                            A = "[object Set]",
                            L = "[object String]",
                            O = "[object Symbol]",
                            I = "[object WeakMap]",
                            D = "[object ArrayBuffer]",
                            j = "[object DataView]",
                            M = "[object Float32Array]",
                            P = "[object Float64Array]",
                            z = "[object Int8Array]",
                            B = "[object Int16Array]",
                            F = "[object Int32Array]",
                            U = "[object Uint8Array]",
                            W = "[object Uint8ClampedArray]",
                            H = "[object Uint16Array]",
                            $ = "[object Uint32Array]",
                            V = /\b__p \+= '';/g,
                            Y = /\b(__p \+=) '' \+/g,
                            Q = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                            q = /&(?:amp|lt|gt|quot|#39);/g,
                            K = /[&<>"']/g,
                            X = RegExp(q.source),
                            G = RegExp(K.source),
                            J = /<%-([\s\S]+?)%>/g,
                            Z = /<%([\s\S]+?)%>/g,
                            ee = /<%=([\s\S]+?)%>/g,
                            te = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                            ne = /^\w*$/,
                            re = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                            oe = /[\\^$.*+?()[\]{}|]/g,
                            ie = RegExp(oe.source),
                            ae = /^\s+/,
                            le = /\s/,
                            ue = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                            se = /\{\n\/\* \[wrapped with (.+)\] \*/,
                            ce = /,? & /,
                            fe = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                            de = /[()=,{}\[\]\/\s]/,
                            pe = /\\(\\)?/g,
                            he = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                            ge = /\w*$/,
                            me = /^[-+]0x[0-9a-f]+$/i,
                            ve = /^0b[01]+$/i,
                            ye = /^\[object .+?Constructor\]$/,
                            be = /^0o[0-7]+$/i,
                            we = /^(?:0|[1-9]\d*)$/,
                            _e = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                            xe = /($^)/,
                            Se = /['\n\r\u2028\u2029\\]/g,
                            Ee = "\\ud800-\\udfff",
                            ke = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
                            Ce = "\\u2700-\\u27bf",
                            Te = "a-z\\xdf-\\xf6\\xf8-\\xff",
                            Ne = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                            Re = "\\ufe0e\\ufe0f",
                            Ae = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                            Le = "['’]",
                            Oe = "[" + Ee + "]",
                            Ie = "[" + Ae + "]",
                            De = "[" + ke + "]",
                            je = "\\d+",
                            Me = "[" + Ce + "]",
                            Pe = "[" + Te + "]",
                            ze = "[^" + Ee + Ae + je + Ce + Te + Ne + "]",
                            Be = "\\ud83c[\\udffb-\\udfff]",
                            Fe = "[^" + Ee + "]",
                            Ue = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                            We = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                            He = "[" + Ne + "]",
                            $e = "\\u200d",
                            Ve = "(?:" + Pe + "|" + ze + ")",
                            Ye = "(?:" + He + "|" + ze + ")",
                            Qe = "(?:['’](?:d|ll|m|re|s|t|ve))?",
                            qe = "(?:['’](?:D|LL|M|RE|S|T|VE))?",
                            Ke = "(?:" + De + "|" + Be + ")" + "?",
                            Xe = "[" + Re + "]?",
                            Ge = Xe + Ke + ("(?:" + $e + "(?:" + [Fe, Ue, We].join("|") + ")" + Xe + Ke + ")*"),
                            Je = "(?:" + [Me, Ue, We].join("|") + ")" + Ge,
                            Ze = "(?:" + [Fe + De + "?", De, Ue, We, Oe].join("|") + ")",
                            et = RegExp(Le, "g"),
                            tt = RegExp(De, "g"),
                            nt = RegExp(Be + "(?=" + Be + ")|" + Ze + Ge, "g"),
                            rt = RegExp([He + "?" + Pe + "+" + Qe + "(?=" + [Ie, He, "$"].join("|") + ")", Ye + "+" + qe + "(?=" + [Ie, He + Ve, "$"].join("|") + ")", He + "?" + Ve + "+" + Qe, He + "+" + qe, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", je, Je].join("|"), "g"),
                            ot = RegExp("[" + $e + Ee + ke + Re + "]"),
                            it = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                            at = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                            lt = -1,
                            ut = {};
                        ut[M] = ut[P] = ut[z] = ut[B] = ut[F] = ut[U] = ut[W] = ut[H] = ut[$] = !0, ut[y] = ut[b] = ut[D] = ut[w] = ut[j] = ut[_] = ut[x] = ut[S] = ut[k] = ut[C] = ut[T] = ut[R] = ut[A] = ut[L] = ut[I] = !1;
                        var st = {};
                        st[y] = st[b] = st[D] = st[j] = st[w] = st[_] = st[M] = st[P] = st[z] = st[B] = st[F] = st[k] = st[C] = st[T] = st[R] = st[A] = st[L] = st[O] = st[U] = st[W] = st[H] = st[$] = !0, st[x] = st[S] = st[I] = !1;
                        var ct = {
                                "\\": "\\",
                                "'": "'",
                                "\n": "n",
                                "\r": "r",
                                "\u2028": "u2028",
                                "\u2029": "u2029"
                            },
                            ft = parseFloat,
                            dt = parseInt,
                            pt = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
                            ht = "object" == typeof self && self && self.Object === Object && self,
                            gt = pt || ht || Function("return this")(),
                            mt = t && !t.nodeType && t,
                            vt = mt && e && !e.nodeType && e,
                            yt = vt && vt.exports === mt,
                            bt = yt && pt.process,
                            wt = function() {
                                try {
                                    var e = vt && vt.require && vt.require("util").types;
                                    return e || bt && bt.binding && bt.binding("util")
                                } catch (e) {}
                            }(),
                            _t = wt && wt.isArrayBuffer,
                            xt = wt && wt.isDate,
                            St = wt && wt.isMap,
                            Et = wt && wt.isRegExp,
                            kt = wt && wt.isSet,
                            Ct = wt && wt.isTypedArray;

                        function Tt(e, t, n) {
                            switch (n.length) {
                                case 0:
                                    return e.call(t);
                                case 1:
                                    return e.call(t, n[0]);
                                case 2:
                                    return e.call(t, n[0], n[1]);
                                case 3:
                                    return e.call(t, n[0], n[1], n[2])
                            }
                            return e.apply(t, n)
                        }

                        function Nt(e, t, n, r) {
                            for (var o = -1, i = null == e ? 0 : e.length; ++o < i;) {
                                var a = e[o];
                                t(r, a, n(a), e)
                            }
                            return r
                        }

                        function Rt(e, t) {
                            for (var n = -1, r = null == e ? 0 : e.length; ++n < r && !1 !== t(e[n], n, e););
                            return e
                        }

                        function At(e, t) {
                            for (var n = null == e ? 0 : e.length; n-- && !1 !== t(e[n], n, e););
                            return e
                        }

                        function Lt(e, t) {
                            for (var n = -1, r = null == e ? 0 : e.length; ++n < r;)
                                if (!t(e[n], n, e)) return !1;
                            return !0
                        }

                        function Ot(e, t) {
                            for (var n = -1, r = null == e ? 0 : e.length, o = 0, i = []; ++n < r;) {
                                var a = e[n];
                                t(a, n, e) && (i[o++] = a)
                            }
                            return i
                        }

                        function It(e, t) {
                            return !!(null == e ? 0 : e.length) && Ht(e, t, 0) > -1
                        }

                        function Dt(e, t, n) {
                            for (var r = -1, o = null == e ? 0 : e.length; ++r < o;)
                                if (n(t, e[r])) return !0;
                            return !1
                        }

                        function jt(e, t) {
                            for (var n = -1, r = null == e ? 0 : e.length, o = Array(r); ++n < r;) o[n] = t(e[n], n, e);
                            return o
                        }

                        function Mt(e, t) {
                            for (var n = -1, r = t.length, o = e.length; ++n < r;) e[o + n] = t[n];
                            return e
                        }

                        function Pt(e, t, n, r) {
                            var o = -1,
                                i = null == e ? 0 : e.length;
                            for (r && i && (n = e[++o]); ++o < i;) n = t(n, e[o], o, e);
                            return n
                        }

                        function zt(e, t, n, r) {
                            var o = null == e ? 0 : e.length;
                            for (r && o && (n = e[--o]); o--;) n = t(n, e[o], o, e);
                            return n
                        }

                        function Bt(e, t) {
                            for (var n = -1, r = null == e ? 0 : e.length; ++n < r;)
                                if (t(e[n], n, e)) return !0;
                            return !1
                        }
                        var Ft = Qt("length");

                        function Ut(e, t, n) {
                            var r;
                            return n(e, (function(e, n, o) {
                                if (t(e, n, o)) return r = n, !1
                            })), r
                        }

                        function Wt(e, t, n, r) {
                            for (var o = e.length, i = n + (r ? 1 : -1); r ? i-- : ++i < o;)
                                if (t(e[i], i, e)) return i;
                            return -1
                        }

                        function Ht(e, t, n) {
                            return t == t ? function(e, t, n) {
                                var r = n - 1,
                                    o = e.length;
                                for (; ++r < o;)
                                    if (e[r] === t) return r;
                                return -1
                            }(e, t, n) : Wt(e, Vt, n)
                        }

                        function $t(e, t, n, r) {
                            for (var o = n - 1, i = e.length; ++o < i;)
                                if (r(e[o], t)) return o;
                            return -1
                        }

                        function Vt(e) {
                            return e != e
                        }

                        function Yt(e, t) {
                            var n = null == e ? 0 : e.length;
                            return n ? Xt(e, t) / n : g
                        }

                        function Qt(e) {
                            return function(t) {
                                return null == t ? o : t[e]
                            }
                        }

                        function qt(e) {
                            return function(t) {
                                return null == e ? o : e[t]
                            }
                        }

                        function Kt(e, t, n, r, o) {
                            return o(e, (function(e, o, i) {
                                n = r ? (r = !1, e) : t(n, e, o, i)
                            })), n
                        }

                        function Xt(e, t) {
                            for (var n, r = -1, i = e.length; ++r < i;) {
                                var a = t(e[r]);
                                a !== o && (n = n === o ? a : n + a)
                            }
                            return n
                        }

                        function Gt(e, t) {
                            for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
                            return r
                        }

                        function Jt(e) {
                            return e ? e.slice(0, mn(e) + 1).replace(ae, "") : e
                        }

                        function Zt(e) {
                            return function(t) {
                                return e(t)
                            }
                        }

                        function en(e, t) {
                            return jt(t, (function(t) {
                                return e[t]
                            }))
                        }

                        function tn(e, t) {
                            return e.has(t)
                        }

                        function nn(e, t) {
                            for (var n = -1, r = e.length; ++n < r && Ht(t, e[n], 0) > -1;);
                            return n
                        }

                        function rn(e, t) {
                            for (var n = e.length; n-- && Ht(t, e[n], 0) > -1;);
                            return n
                        }
                        var on = qt({
                                À: "A",
                                Á: "A",
                                Â: "A",
                                Ã: "A",
                                Ä: "A",
                                Å: "A",
                                à: "a",
                                á: "a",
                                â: "a",
                                ã: "a",
                                ä: "a",
                                å: "a",
                                Ç: "C",
                                ç: "c",
                                Ð: "D",
                                ð: "d",
                                È: "E",
                                É: "E",
                                Ê: "E",
                                Ë: "E",
                                è: "e",
                                é: "e",
                                ê: "e",
                                ë: "e",
                                Ì: "I",
                                Í: "I",
                                Î: "I",
                                Ï: "I",
                                ì: "i",
                                í: "i",
                                î: "i",
                                ï: "i",
                                Ñ: "N",
                                ñ: "n",
                                Ò: "O",
                                Ó: "O",
                                Ô: "O",
                                Õ: "O",
                                Ö: "O",
                                Ø: "O",
                                ò: "o",
                                ó: "o",
                                ô: "o",
                                õ: "o",
                                ö: "o",
                                ø: "o",
                                Ù: "U",
                                Ú: "U",
                                Û: "U",
                                Ü: "U",
                                ù: "u",
                                ú: "u",
                                û: "u",
                                ü: "u",
                                Ý: "Y",
                                ý: "y",
                                ÿ: "y",
                                Æ: "Ae",
                                æ: "ae",
                                Þ: "Th",
                                þ: "th",
                                ß: "ss",
                                Ā: "A",
                                Ă: "A",
                                Ą: "A",
                                ā: "a",
                                ă: "a",
                                ą: "a",
                                Ć: "C",
                                Ĉ: "C",
                                Ċ: "C",
                                Č: "C",
                                ć: "c",
                                ĉ: "c",
                                ċ: "c",
                                č: "c",
                                Ď: "D",
                                Đ: "D",
                                ď: "d",
                                đ: "d",
                                Ē: "E",
                                Ĕ: "E",
                                Ė: "E",
                                Ę: "E",
                                Ě: "E",
                                ē: "e",
                                ĕ: "e",
                                ė: "e",
                                ę: "e",
                                ě: "e",
                                Ĝ: "G",
                                Ğ: "G",
                                Ġ: "G",
                                Ģ: "G",
                                ĝ: "g",
                                ğ: "g",
                                ġ: "g",
                                ģ: "g",
                                Ĥ: "H",
                                Ħ: "H",
                                ĥ: "h",
                                ħ: "h",
                                Ĩ: "I",
                                Ī: "I",
                                Ĭ: "I",
                                Į: "I",
                                İ: "I",
                                ĩ: "i",
                                ī: "i",
                                ĭ: "i",
                                į: "i",
                                ı: "i",
                                Ĵ: "J",
                                ĵ: "j",
                                Ķ: "K",
                                ķ: "k",
                                ĸ: "k",
                                Ĺ: "L",
                                Ļ: "L",
                                Ľ: "L",
                                Ŀ: "L",
                                Ł: "L",
                                ĺ: "l",
                                ļ: "l",
                                ľ: "l",
                                ŀ: "l",
                                ł: "l",
                                Ń: "N",
                                Ņ: "N",
                                Ň: "N",
                                Ŋ: "N",
                                ń: "n",
                                ņ: "n",
                                ň: "n",
                                ŋ: "n",
                                Ō: "O",
                                Ŏ: "O",
                                Ő: "O",
                                ō: "o",
                                ŏ: "o",
                                ő: "o",
                                Ŕ: "R",
                                Ŗ: "R",
                                Ř: "R",
                                ŕ: "r",
                                ŗ: "r",
                                ř: "r",
                                Ś: "S",
                                Ŝ: "S",
                                Ş: "S",
                                Š: "S",
                                ś: "s",
                                ŝ: "s",
                                ş: "s",
                                š: "s",
                                Ţ: "T",
                                Ť: "T",
                                Ŧ: "T",
                                ţ: "t",
                                ť: "t",
                                ŧ: "t",
                                Ũ: "U",
                                Ū: "U",
                                Ŭ: "U",
                                Ů: "U",
                                Ű: "U",
                                Ų: "U",
                                ũ: "u",
                                ū: "u",
                                ŭ: "u",
                                ů: "u",
                                ű: "u",
                                ų: "u",
                                Ŵ: "W",
                                ŵ: "w",
                                Ŷ: "Y",
                                ŷ: "y",
                                Ÿ: "Y",
                                Ź: "Z",
                                Ż: "Z",
                                Ž: "Z",
                                ź: "z",
                                ż: "z",
                                ž: "z",
                                Ĳ: "IJ",
                                ĳ: "ij",
                                Œ: "Oe",
                                œ: "oe",
                                ŉ: "'n",
                                ſ: "s"
                            }),
                            an = qt({
                                "&": "&amp;",
                                "<": "&lt;",
                                ">": "&gt;",
                                '"': "&quot;",
                                "'": "&#39;"
                            });

                        function ln(e) {
                            return "\\" + ct[e]
                        }

                        function un(e) {
                            return ot.test(e)
                        }

                        function sn(e) {
                            var t = -1,
                                n = Array(e.size);
                            return e.forEach((function(e, r) {
                                n[++t] = [r, e]
                            })), n
                        }

                        function cn(e, t) {
                            return function(n) {
                                return e(t(n))
                            }
                        }

                        function fn(e, t) {
                            for (var n = -1, r = e.length, o = 0, i = []; ++n < r;) {
                                var a = e[n];
                                a !== t && a !== l || (e[n] = l, i[o++] = n)
                            }
                            return i
                        }

                        function dn(e) {
                            var t = -1,
                                n = Array(e.size);
                            return e.forEach((function(e) {
                                n[++t] = e
                            })), n
                        }

                        function pn(e) {
                            var t = -1,
                                n = Array(e.size);
                            return e.forEach((function(e) {
                                n[++t] = [e, e]
                            })), n
                        }

                        function hn(e) {
                            return un(e) ? function(e) {
                                var t = nt.lastIndex = 0;
                                for (; nt.test(e);) ++t;
                                return t
                            }(e) : Ft(e)
                        }

                        function gn(e) {
                            return un(e) ? function(e) {
                                return e.match(nt) || []
                            }(e) : function(e) {
                                return e.split("")
                            }(e)
                        }

                        function mn(e) {
                            for (var t = e.length; t-- && le.test(e.charAt(t)););
                            return t
                        }
                        var vn = qt({
                            "&amp;": "&",
                            "&lt;": "<",
                            "&gt;": ">",
                            "&quot;": '"',
                            "&#39;": "'"
                        });
                        var yn = function e(t) {
                            var n, r = (t = null == t ? gt : yn.defaults(gt.Object(), t, yn.pick(gt, at))).Array,
                                le = t.Date,
                                Ee = t.Error,
                                ke = t.Function,
                                Ce = t.Math,
                                Te = t.Object,
                                Ne = t.RegExp,
                                Re = t.String,
                                Ae = t.TypeError,
                                Le = r.prototype,
                                Oe = ke.prototype,
                                Ie = Te.prototype,
                                De = t["__core-js_shared__"],
                                je = Oe.toString,
                                Me = Ie.hasOwnProperty,
                                Pe = 0,
                                ze = (n = /[^.]+$/.exec(De && De.keys && De.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "",
                                Be = Ie.toString,
                                Fe = je.call(Te),
                                Ue = gt._,
                                We = Ne("^" + je.call(Me).replace(oe, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                                He = yt ? t.Buffer : o,
                                $e = t.Symbol,
                                Ve = t.Uint8Array,
                                Ye = He ? He.allocUnsafe : o,
                                Qe = cn(Te.getPrototypeOf, Te),
                                qe = Te.create,
                                Ke = Ie.propertyIsEnumerable,
                                Xe = Le.splice,
                                Ge = $e ? $e.isConcatSpreadable : o,
                                Je = $e ? $e.iterator : o,
                                Ze = $e ? $e.toStringTag : o,
                                nt = function() {
                                    try {
                                        var e = pi(Te, "defineProperty");
                                        return e({}, "", {}), e
                                    } catch (e) {}
                                }(),
                                ot = t.clearTimeout !== gt.clearTimeout && t.clearTimeout,
                                ct = le && le.now !== gt.Date.now && le.now,
                                pt = t.setTimeout !== gt.setTimeout && t.setTimeout,
                                ht = Ce.ceil,
                                mt = Ce.floor,
                                vt = Te.getOwnPropertySymbols,
                                bt = He ? He.isBuffer : o,
                                wt = t.isFinite,
                                Ft = Le.join,
                                qt = cn(Te.keys, Te),
                                bn = Ce.max,
                                wn = Ce.min,
                                _n = le.now,
                                xn = t.parseInt,
                                Sn = Ce.random,
                                En = Le.reverse,
                                kn = pi(t, "DataView"),
                                Cn = pi(t, "Map"),
                                Tn = pi(t, "Promise"),
                                Nn = pi(t, "Set"),
                                Rn = pi(t, "WeakMap"),
                                An = pi(Te, "create"),
                                Ln = Rn && new Rn,
                                On = {},
                                In = Bi(kn),
                                Dn = Bi(Cn),
                                jn = Bi(Tn),
                                Mn = Bi(Nn),
                                Pn = Bi(Rn),
                                zn = $e ? $e.prototype : o,
                                Bn = zn ? zn.valueOf : o,
                                Fn = zn ? zn.toString : o;

                            function Un(e) {
                                if (nl(e) && !Va(e) && !(e instanceof Vn)) {
                                    if (e instanceof $n) return e;
                                    if (Me.call(e, "__wrapped__")) return Fi(e)
                                }
                                return new $n(e)
                            }
                            var Wn = function() {
                                function e() {}
                                return function(t) {
                                    if (!tl(t)) return {};
                                    if (qe) return qe(t);
                                    e.prototype = t;
                                    var n = new e;
                                    return e.prototype = o, n
                                }
                            }();

                            function Hn() {}

                            function $n(e, t) {
                                this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = o
                            }

                            function Vn(e) {
                                this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = m, this.__views__ = []
                            }

                            function Yn(e) {
                                var t = -1,
                                    n = null == e ? 0 : e.length;
                                for (this.clear(); ++t < n;) {
                                    var r = e[t];
                                    this.set(r[0], r[1])
                                }
                            }

                            function Qn(e) {
                                var t = -1,
                                    n = null == e ? 0 : e.length;
                                for (this.clear(); ++t < n;) {
                                    var r = e[t];
                                    this.set(r[0], r[1])
                                }
                            }

                            function qn(e) {
                                var t = -1,
                                    n = null == e ? 0 : e.length;
                                for (this.clear(); ++t < n;) {
                                    var r = e[t];
                                    this.set(r[0], r[1])
                                }
                            }

                            function Kn(e) {
                                var t = -1,
                                    n = null == e ? 0 : e.length;
                                for (this.__data__ = new qn; ++t < n;) this.add(e[t])
                            }

                            function Xn(e) {
                                var t = this.__data__ = new Qn(e);
                                this.size = t.size
                            }

                            function Gn(e, t) {
                                var n = Va(e),
                                    r = !n && $a(e),
                                    o = !n && !r && Ka(e),
                                    i = !n && !r && !o && cl(e),
                                    a = n || r || o || i,
                                    l = a ? Gt(e.length, Re) : [],
                                    u = l.length;
                                for (var s in e) !t && !Me.call(e, s) || a && ("length" == s || o && ("offset" == s || "parent" == s) || i && ("buffer" == s || "byteLength" == s || "byteOffset" == s) || wi(s, u)) || l.push(s);
                                return l
                            }

                            function Jn(e) {
                                var t = e.length;
                                return t ? e[Kr(0, t - 1)] : o
                            }

                            function Zn(e, t) {
                                return Mi(Lo(e), ur(t, 0, e.length))
                            }

                            function er(e) {
                                return Mi(Lo(e))
                            }

                            function tr(e, t, n) {
                                (n !== o && !Ua(e[t], n) || n === o && !(t in e)) && ar(e, t, n)
                            }

                            function nr(e, t, n) {
                                var r = e[t];
                                Me.call(e, t) && Ua(r, n) && (n !== o || t in e) || ar(e, t, n)
                            }

                            function rr(e, t) {
                                for (var n = e.length; n--;)
                                    if (Ua(e[n][0], t)) return n;
                                return -1
                            }

                            function or(e, t, n, r) {
                                return pr(e, (function(e, o, i) {
                                    t(r, e, n(e), i)
                                })), r
                            }

                            function ir(e, t) {
                                return e && Oo(t, Ol(t), e)
                            }

                            function ar(e, t, n) {
                                "__proto__" == t && nt ? nt(e, t, {
                                    configurable: !0,
                                    enumerable: !0,
                                    value: n,
                                    writable: !0
                                }) : e[t] = n
                            }

                            function lr(e, t) {
                                for (var n = -1, i = t.length, a = r(i), l = null == e; ++n < i;) a[n] = l ? o : Tl(e, t[n]);
                                return a
                            }

                            function ur(e, t, n) {
                                return e == e && (n !== o && (e = e <= n ? e : n), t !== o && (e = e >= t ? e : t)), e
                            }

                            function sr(e, t, n, r, i, a) {
                                var l, u = 1 & t,
                                    s = 2 & t,
                                    c = 4 & t;
                                if (n && (l = i ? n(e, r, i, a) : n(e)), l !== o) return l;
                                if (!tl(e)) return e;
                                var f = Va(e);
                                if (f) {
                                    if (l = function(e) {
                                            var t = e.length,
                                                n = new e.constructor(t);
                                            t && "string" == typeof e[0] && Me.call(e, "index") && (n.index = e.index, n.input = e.input);
                                            return n
                                        }(e), !u) return Lo(e, l)
                                } else {
                                    var d = mi(e),
                                        p = d == S || d == E;
                                    if (Ka(e)) return ko(e, u);
                                    if (d == T || d == y || p && !i) {
                                        if (l = s || p ? {} : yi(e), !u) return s ? function(e, t) {
                                            return Oo(e, gi(e), t)
                                        }(e, function(e, t) {
                                            return e && Oo(t, Il(t), e)
                                        }(l, e)) : function(e, t) {
                                            return Oo(e, hi(e), t)
                                        }(e, ir(l, e))
                                    } else {
                                        if (!st[d]) return i ? e : {};
                                        l = function(e, t, n) {
                                            var r = e.constructor;
                                            switch (t) {
                                                case D:
                                                    return Co(e);
                                                case w:
                                                case _:
                                                    return new r(+e);
                                                case j:
                                                    return function(e, t) {
                                                        var n = t ? Co(e.buffer) : e.buffer;
                                                        return new e.constructor(n, e.byteOffset, e.byteLength)
                                                    }(e, n);
                                                case M:
                                                case P:
                                                case z:
                                                case B:
                                                case F:
                                                case U:
                                                case W:
                                                case H:
                                                case $:
                                                    return To(e, n);
                                                case k:
                                                    return new r;
                                                case C:
                                                case L:
                                                    return new r(e);
                                                case R:
                                                    return function(e) {
                                                        var t = new e.constructor(e.source, ge.exec(e));
                                                        return t.lastIndex = e.lastIndex, t
                                                    }(e);
                                                case A:
                                                    return new r;
                                                case O:
                                                    return o = e, Bn ? Te(Bn.call(o)) : {}
                                            }
                                            var o
                                        }(e, d, u)
                                    }
                                }
                                a || (a = new Xn);
                                var h = a.get(e);
                                if (h) return h;
                                a.set(e, l), ll(e) ? e.forEach((function(r) {
                                    l.add(sr(r, t, n, r, e, a))
                                })) : rl(e) && e.forEach((function(r, o) {
                                    l.set(o, sr(r, t, n, o, e, a))
                                }));
                                var g = f ? o : (c ? s ? ai : ii : s ? Il : Ol)(e);
                                return Rt(g || e, (function(r, o) {
                                    g && (r = e[o = r]), nr(l, o, sr(r, t, n, o, e, a))
                                })), l
                            }

                            function cr(e, t, n) {
                                var r = n.length;
                                if (null == e) return !r;
                                for (e = Te(e); r--;) {
                                    var i = n[r],
                                        a = t[i],
                                        l = e[i];
                                    if (l === o && !(i in e) || !a(l)) return !1
                                }
                                return !0
                            }

                            function fr(e, t, n) {
                                if ("function" != typeof e) throw new Ae(i);
                                return Oi((function() {
                                    e.apply(o, n)
                                }), t)
                            }

                            function dr(e, t, n, r) {
                                var o = -1,
                                    i = It,
                                    a = !0,
                                    l = e.length,
                                    u = [],
                                    s = t.length;
                                if (!l) return u;
                                n && (t = jt(t, Zt(n))), r ? (i = Dt, a = !1) : t.length >= 200 && (i = tn, a = !1, t = new Kn(t));
                                e: for (; ++o < l;) {
                                    var c = e[o],
                                        f = null == n ? c : n(c);
                                    if (c = r || 0 !== c ? c : 0, a && f == f) {
                                        for (var d = s; d--;)
                                            if (t[d] === f) continue e;
                                        u.push(c)
                                    } else i(t, f, r) || u.push(c)
                                }
                                return u
                            }
                            Un.templateSettings = {
                                escape: J,
                                evaluate: Z,
                                interpolate: ee,
                                variable: "",
                                imports: {
                                    _: Un
                                }
                            }, Un.prototype = Hn.prototype, Un.prototype.constructor = Un, $n.prototype = Wn(Hn.prototype), $n.prototype.constructor = $n, Vn.prototype = Wn(Hn.prototype), Vn.prototype.constructor = Vn, Yn.prototype.clear = function() {
                                this.__data__ = An ? An(null) : {}, this.size = 0
                            }, Yn.prototype.delete = function(e) {
                                var t = this.has(e) && delete this.__data__[e];
                                return this.size -= t ? 1 : 0, t
                            }, Yn.prototype.get = function(e) {
                                var t = this.__data__;
                                if (An) {
                                    var n = t[e];
                                    return n === a ? o : n
                                }
                                return Me.call(t, e) ? t[e] : o
                            }, Yn.prototype.has = function(e) {
                                var t = this.__data__;
                                return An ? t[e] !== o : Me.call(t, e)
                            }, Yn.prototype.set = function(e, t) {
                                var n = this.__data__;
                                return this.size += this.has(e) ? 0 : 1, n[e] = An && t === o ? a : t, this
                            }, Qn.prototype.clear = function() {
                                this.__data__ = [], this.size = 0
                            }, Qn.prototype.delete = function(e) {
                                var t = this.__data__,
                                    n = rr(t, e);
                                return !(n < 0) && (n == t.length - 1 ? t.pop() : Xe.call(t, n, 1), --this.size, !0)
                            }, Qn.prototype.get = function(e) {
                                var t = this.__data__,
                                    n = rr(t, e);
                                return n < 0 ? o : t[n][1]
                            }, Qn.prototype.has = function(e) {
                                return rr(this.__data__, e) > -1
                            }, Qn.prototype.set = function(e, t) {
                                var n = this.__data__,
                                    r = rr(n, e);
                                return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this
                            }, qn.prototype.clear = function() {
                                this.size = 0, this.__data__ = {
                                    hash: new Yn,
                                    map: new(Cn || Qn),
                                    string: new Yn
                                }
                            }, qn.prototype.delete = function(e) {
                                var t = fi(this, e).delete(e);
                                return this.size -= t ? 1 : 0, t
                            }, qn.prototype.get = function(e) {
                                return fi(this, e).get(e)
                            }, qn.prototype.has = function(e) {
                                return fi(this, e).has(e)
                            }, qn.prototype.set = function(e, t) {
                                var n = fi(this, e),
                                    r = n.size;
                                return n.set(e, t), this.size += n.size == r ? 0 : 1, this
                            }, Kn.prototype.add = Kn.prototype.push = function(e) {
                                return this.__data__.set(e, a), this
                            }, Kn.prototype.has = function(e) {
                                return this.__data__.has(e)
                            }, Xn.prototype.clear = function() {
                                this.__data__ = new Qn, this.size = 0
                            }, Xn.prototype.delete = function(e) {
                                var t = this.__data__,
                                    n = t.delete(e);
                                return this.size = t.size, n
                            }, Xn.prototype.get = function(e) {
                                return this.__data__.get(e)
                            }, Xn.prototype.has = function(e) {
                                return this.__data__.has(e)
                            }, Xn.prototype.set = function(e, t) {
                                var n = this.__data__;
                                if (n instanceof Qn) {
                                    var r = n.__data__;
                                    if (!Cn || r.length < 199) return r.push([e, t]), this.size = ++n.size, this;
                                    n = this.__data__ = new qn(r)
                                }
                                return n.set(e, t), this.size = n.size, this
                            };
                            var pr = jo(_r),
                                hr = jo(xr, !0);

                            function gr(e, t) {
                                var n = !0;
                                return pr(e, (function(e, r, o) {
                                    return n = !!t(e, r, o)
                                })), n
                            }

                            function mr(e, t, n) {
                                for (var r = -1, i = e.length; ++r < i;) {
                                    var a = e[r],
                                        l = t(a);
                                    if (null != l && (u === o ? l == l && !sl(l) : n(l, u))) var u = l,
                                        s = a
                                }
                                return s
                            }

                            function vr(e, t) {
                                var n = [];
                                return pr(e, (function(e, r, o) {
                                    t(e, r, o) && n.push(e)
                                })), n
                            }

                            function yr(e, t, n, r, o) {
                                var i = -1,
                                    a = e.length;
                                for (n || (n = bi), o || (o = []); ++i < a;) {
                                    var l = e[i];
                                    t > 0 && n(l) ? t > 1 ? yr(l, t - 1, n, r, o) : Mt(o, l) : r || (o[o.length] = l)
                                }
                                return o
                            }
                            var br = Mo(),
                                wr = Mo(!0);

                            function _r(e, t) {
                                return e && br(e, t, Ol)
                            }

                            function xr(e, t) {
                                return e && wr(e, t, Ol)
                            }

                            function Sr(e, t) {
                                return Ot(t, (function(t) {
                                    return Ja(e[t])
                                }))
                            }

                            function Er(e, t) {
                                for (var n = 0, r = (t = _o(t, e)).length; null != e && n < r;) e = e[zi(t[n++])];
                                return n && n == r ? e : o
                            }

                            function kr(e, t, n) {
                                var r = t(e);
                                return Va(e) ? r : Mt(r, n(e))
                            }

                            function Cr(e) {
                                return null == e ? e === o ? "[object Undefined]" : "[object Null]" : Ze && Ze in Te(e) ? function(e) {
                                    var t = Me.call(e, Ze),
                                        n = e[Ze];
                                    try {
                                        e[Ze] = o;
                                        var r = !0
                                    } catch (e) {}
                                    var i = Be.call(e);
                                    r && (t ? e[Ze] = n : delete e[Ze]);
                                    return i
                                }(e) : function(e) {
                                    return Be.call(e)
                                }(e)
                            }

                            function Tr(e, t) {
                                return e > t
                            }

                            function Nr(e, t) {
                                return null != e && Me.call(e, t)
                            }

                            function Rr(e, t) {
                                return null != e && t in Te(e)
                            }

                            function Ar(e, t, n) {
                                for (var i = n ? Dt : It, a = e[0].length, l = e.length, u = l, s = r(l), c = 1 / 0, f = []; u--;) {
                                    var d = e[u];
                                    u && t && (d = jt(d, Zt(t))), c = wn(d.length, c), s[u] = !n && (t || a >= 120 && d.length >= 120) ? new Kn(u && d) : o
                                }
                                d = e[0];
                                var p = -1,
                                    h = s[0];
                                e: for (; ++p < a && f.length < c;) {
                                    var g = d[p],
                                        m = t ? t(g) : g;
                                    if (g = n || 0 !== g ? g : 0, !(h ? tn(h, m) : i(f, m, n))) {
                                        for (u = l; --u;) {
                                            var v = s[u];
                                            if (!(v ? tn(v, m) : i(e[u], m, n))) continue e
                                        }
                                        h && h.push(m), f.push(g)
                                    }
                                }
                                return f
                            }

                            function Lr(e, t, n) {
                                var r = null == (e = Ri(e, t = _o(t, e))) ? e : e[zi(Gi(t))];
                                return null == r ? o : Tt(r, e, n)
                            }

                            function Or(e) {
                                return nl(e) && Cr(e) == y
                            }

                            function Ir(e, t, n, r, i) {
                                return e === t || (null == e || null == t || !nl(e) && !nl(t) ? e != e && t != t : function(e, t, n, r, i, a) {
                                    var l = Va(e),
                                        u = Va(t),
                                        s = l ? b : mi(e),
                                        c = u ? b : mi(t),
                                        f = (s = s == y ? T : s) == T,
                                        d = (c = c == y ? T : c) == T,
                                        p = s == c;
                                    if (p && Ka(e)) {
                                        if (!Ka(t)) return !1;
                                        l = !0, f = !1
                                    }
                                    if (p && !f) return a || (a = new Xn), l || cl(e) ? ri(e, t, n, r, i, a) : function(e, t, n, r, o, i, a) {
                                        switch (n) {
                                            case j:
                                                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                                                e = e.buffer, t = t.buffer;
                                            case D:
                                                return !(e.byteLength != t.byteLength || !i(new Ve(e), new Ve(t)));
                                            case w:
                                            case _:
                                            case C:
                                                return Ua(+e, +t);
                                            case x:
                                                return e.name == t.name && e.message == t.message;
                                            case R:
                                            case L:
                                                return e == t + "";
                                            case k:
                                                var l = sn;
                                            case A:
                                                var u = 1 & r;
                                                if (l || (l = dn), e.size != t.size && !u) return !1;
                                                var s = a.get(e);
                                                if (s) return s == t;
                                                r |= 2, a.set(e, t);
                                                var c = ri(l(e), l(t), r, o, i, a);
                                                return a.delete(e), c;
                                            case O:
                                                if (Bn) return Bn.call(e) == Bn.call(t)
                                        }
                                        return !1
                                    }(e, t, s, n, r, i, a);
                                    if (!(1 & n)) {
                                        var h = f && Me.call(e, "__wrapped__"),
                                            g = d && Me.call(t, "__wrapped__");
                                        if (h || g) {
                                            var m = h ? e.value() : e,
                                                v = g ? t.value() : t;
                                            return a || (a = new Xn), i(m, v, n, r, a)
                                        }
                                    }
                                    if (!p) return !1;
                                    return a || (a = new Xn),
                                        function(e, t, n, r, i, a) {
                                            var l = 1 & n,
                                                u = ii(e),
                                                s = u.length,
                                                c = ii(t),
                                                f = c.length;
                                            if (s != f && !l) return !1;
                                            var d = s;
                                            for (; d--;) {
                                                var p = u[d];
                                                if (!(l ? p in t : Me.call(t, p))) return !1
                                            }
                                            var h = a.get(e),
                                                g = a.get(t);
                                            if (h && g) return h == t && g == e;
                                            var m = !0;
                                            a.set(e, t), a.set(t, e);
                                            var v = l;
                                            for (; ++d < s;) {
                                                var y = e[p = u[d]],
                                                    b = t[p];
                                                if (r) var w = l ? r(b, y, p, t, e, a) : r(y, b, p, e, t, a);
                                                if (!(w === o ? y === b || i(y, b, n, r, a) : w)) {
                                                    m = !1;
                                                    break
                                                }
                                                v || (v = "constructor" == p)
                                            }
                                            if (m && !v) {
                                                var _ = e.constructor,
                                                    x = t.constructor;
                                                _ == x || !("constructor" in e) || !("constructor" in t) || "function" == typeof _ && _ instanceof _ && "function" == typeof x && x instanceof x || (m = !1)
                                            }
                                            return a.delete(e), a.delete(t), m
                                        }(e, t, n, r, i, a)
                                }(e, t, n, r, Ir, i))
                            }

                            function Dr(e, t, n, r) {
                                var i = n.length,
                                    a = i,
                                    l = !r;
                                if (null == e) return !a;
                                for (e = Te(e); i--;) {
                                    var u = n[i];
                                    if (l && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1
                                }
                                for (; ++i < a;) {
                                    var s = (u = n[i])[0],
                                        c = e[s],
                                        f = u[1];
                                    if (l && u[2]) {
                                        if (c === o && !(s in e)) return !1
                                    } else {
                                        var d = new Xn;
                                        if (r) var p = r(c, f, s, e, t, d);
                                        if (!(p === o ? Ir(f, c, 3, r, d) : p)) return !1
                                    }
                                }
                                return !0
                            }

                            function jr(e) {
                                return !(!tl(e) || (t = e, ze && ze in t)) && (Ja(e) ? We : ye).test(Bi(e));
                                var t
                            }

                            function Mr(e) {
                                return "function" == typeof e ? e : null == e ? ou : "object" == typeof e ? Va(e) ? Wr(e[0], e[1]) : Ur(e) : pu(e)
                            }

                            function Pr(e) {
                                if (!ki(e)) return qt(e);
                                var t = [];
                                for (var n in Te(e)) Me.call(e, n) && "constructor" != n && t.push(n);
                                return t
                            }

                            function zr(e) {
                                if (!tl(e)) return function(e) {
                                    var t = [];
                                    if (null != e)
                                        for (var n in Te(e)) t.push(n);
                                    return t
                                }(e);
                                var t = ki(e),
                                    n = [];
                                for (var r in e)("constructor" != r || !t && Me.call(e, r)) && n.push(r);
                                return n
                            }

                            function Br(e, t) {
                                return e < t
                            }

                            function Fr(e, t) {
                                var n = -1,
                                    o = Qa(e) ? r(e.length) : [];
                                return pr(e, (function(e, r, i) {
                                    o[++n] = t(e, r, i)
                                })), o
                            }

                            function Ur(e) {
                                var t = di(e);
                                return 1 == t.length && t[0][2] ? Ti(t[0][0], t[0][1]) : function(n) {
                                    return n === e || Dr(n, e, t)
                                }
                            }

                            function Wr(e, t) {
                                return xi(e) && Ci(t) ? Ti(zi(e), t) : function(n) {
                                    var r = Tl(n, e);
                                    return r === o && r === t ? Nl(n, e) : Ir(t, r, 3)
                                }
                            }

                            function Hr(e, t, n, r, i) {
                                e !== t && br(t, (function(a, l) {
                                    if (i || (i = new Xn), tl(a)) ! function(e, t, n, r, i, a, l) {
                                        var u = Ai(e, n),
                                            s = Ai(t, n),
                                            c = l.get(s);
                                        if (c) return void tr(e, n, c);
                                        var f = a ? a(u, s, n + "", e, t, l) : o,
                                            d = f === o;
                                        if (d) {
                                            var p = Va(s),
                                                h = !p && Ka(s),
                                                g = !p && !h && cl(s);
                                            f = s, p || h || g ? Va(u) ? f = u : qa(u) ? f = Lo(u) : h ? (d = !1, f = ko(s, !0)) : g ? (d = !1, f = To(s, !0)) : f = [] : il(s) || $a(s) ? (f = u, $a(u) ? f = yl(u) : tl(u) && !Ja(u) || (f = yi(s))) : d = !1
                                        }
                                        d && (l.set(s, f), i(f, s, r, a, l), l.delete(s));
                                        tr(e, n, f)
                                    }(e, t, l, n, Hr, r, i);
                                    else {
                                        var u = r ? r(Ai(e, l), a, l + "", e, t, i) : o;
                                        u === o && (u = a), tr(e, l, u)
                                    }
                                }), Il)
                            }

                            function $r(e, t) {
                                var n = e.length;
                                if (n) return wi(t += t < 0 ? n : 0, n) ? e[t] : o
                            }

                            function Vr(e, t, n) {
                                t = t.length ? jt(t, (function(e) {
                                    return Va(e) ? function(t) {
                                        return Er(t, 1 === e.length ? e[0] : e)
                                    } : e
                                })) : [ou];
                                var r = -1;
                                t = jt(t, Zt(ci()));
                                var o = Fr(e, (function(e, n, o) {
                                    var i = jt(t, (function(t) {
                                        return t(e)
                                    }));
                                    return {
                                        criteria: i,
                                        index: ++r,
                                        value: e
                                    }
                                }));
                                return function(e, t) {
                                    var n = e.length;
                                    for (e.sort(t); n--;) e[n] = e[n].value;
                                    return e
                                }(o, (function(e, t) {
                                    return function(e, t, n) {
                                        var r = -1,
                                            o = e.criteria,
                                            i = t.criteria,
                                            a = o.length,
                                            l = n.length;
                                        for (; ++r < a;) {
                                            var u = No(o[r], i[r]);
                                            if (u) return r >= l ? u : u * ("desc" == n[r] ? -1 : 1)
                                        }
                                        return e.index - t.index
                                    }(e, t, n)
                                }))
                            }

                            function Yr(e, t, n) {
                                for (var r = -1, o = t.length, i = {}; ++r < o;) {
                                    var a = t[r],
                                        l = Er(e, a);
                                    n(l, a) && eo(i, _o(a, e), l)
                                }
                                return i
                            }

                            function Qr(e, t, n, r) {
                                var o = r ? $t : Ht,
                                    i = -1,
                                    a = t.length,
                                    l = e;
                                for (e === t && (t = Lo(t)), n && (l = jt(e, Zt(n))); ++i < a;)
                                    for (var u = 0, s = t[i], c = n ? n(s) : s;
                                        (u = o(l, c, u, r)) > -1;) l !== e && Xe.call(l, u, 1), Xe.call(e, u, 1);
                                return e
                            }

                            function qr(e, t) {
                                for (var n = e ? t.length : 0, r = n - 1; n--;) {
                                    var o = t[n];
                                    if (n == r || o !== i) {
                                        var i = o;
                                        wi(o) ? Xe.call(e, o, 1) : po(e, o)
                                    }
                                }
                                return e
                            }

                            function Kr(e, t) {
                                return e + mt(Sn() * (t - e + 1))
                            }

                            function Xr(e, t) {
                                var n = "";
                                if (!e || t < 1 || t > h) return n;
                                do {
                                    t % 2 && (n += e), (t = mt(t / 2)) && (e += e)
                                } while (t);
                                return n
                            }

                            function Gr(e, t) {
                                return Ii(Ni(e, t, ou), e + "")
                            }

                            function Jr(e) {
                                return Jn(Ul(e))
                            }

                            function Zr(e, t) {
                                var n = Ul(e);
                                return Mi(n, ur(t, 0, n.length))
                            }

                            function eo(e, t, n, r) {
                                if (!tl(e)) return e;
                                for (var i = -1, a = (t = _o(t, e)).length, l = a - 1, u = e; null != u && ++i < a;) {
                                    var s = zi(t[i]),
                                        c = n;
                                    if ("__proto__" === s || "constructor" === s || "prototype" === s) return e;
                                    if (i != l) {
                                        var f = u[s];
                                        (c = r ? r(f, s, u) : o) === o && (c = tl(f) ? f : wi(t[i + 1]) ? [] : {})
                                    }
                                    nr(u, s, c), u = u[s]
                                }
                                return e
                            }
                            var to = Ln ? function(e, t) {
                                    return Ln.set(e, t), e
                                } : ou,
                                no = nt ? function(e, t) {
                                    return nt(e, "toString", {
                                        configurable: !0,
                                        enumerable: !1,
                                        value: tu(t),
                                        writable: !0
                                    })
                                } : ou;

                            function ro(e) {
                                return Mi(Ul(e))
                            }

                            function oo(e, t, n) {
                                var o = -1,
                                    i = e.length;
                                t < 0 && (t = -t > i ? 0 : i + t), (n = n > i ? i : n) < 0 && (n += i), i = t > n ? 0 : n - t >>> 0, t >>>= 0;
                                for (var a = r(i); ++o < i;) a[o] = e[o + t];
                                return a
                            }

                            function io(e, t) {
                                var n;
                                return pr(e, (function(e, r, o) {
                                    return !(n = t(e, r, o))
                                })), !!n
                            }

                            function ao(e, t, n) {
                                var r = 0,
                                    o = null == e ? r : e.length;
                                if ("number" == typeof t && t == t && o <= 2147483647) {
                                    for (; r < o;) {
                                        var i = r + o >>> 1,
                                            a = e[i];
                                        null !== a && !sl(a) && (n ? a <= t : a < t) ? r = i + 1 : o = i
                                    }
                                    return o
                                }
                                return lo(e, t, ou, n)
                            }

                            function lo(e, t, n, r) {
                                var i = 0,
                                    a = null == e ? 0 : e.length;
                                if (0 === a) return 0;
                                for (var l = (t = n(t)) != t, u = null === t, s = sl(t), c = t === o; i < a;) {
                                    var f = mt((i + a) / 2),
                                        d = n(e[f]),
                                        p = d !== o,
                                        h = null === d,
                                        g = d == d,
                                        m = sl(d);
                                    if (l) var v = r || g;
                                    else v = c ? g && (r || p) : u ? g && p && (r || !h) : s ? g && p && !h && (r || !m) : !h && !m && (r ? d <= t : d < t);
                                    v ? i = f + 1 : a = f
                                }
                                return wn(a, 4294967294)
                            }

                            function uo(e, t) {
                                for (var n = -1, r = e.length, o = 0, i = []; ++n < r;) {
                                    var a = e[n],
                                        l = t ? t(a) : a;
                                    if (!n || !Ua(l, u)) {
                                        var u = l;
                                        i[o++] = 0 === a ? 0 : a
                                    }
                                }
                                return i
                            }

                            function so(e) {
                                return "number" == typeof e ? e : sl(e) ? g : +e
                            }

                            function co(e) {
                                if ("string" == typeof e) return e;
                                if (Va(e)) return jt(e, co) + "";
                                if (sl(e)) return Fn ? Fn.call(e) : "";
                                var t = e + "";
                                return "0" == t && 1 / e == -1 / 0 ? "-0" : t
                            }

                            function fo(e, t, n) {
                                var r = -1,
                                    o = It,
                                    i = e.length,
                                    a = !0,
                                    l = [],
                                    u = l;
                                if (n) a = !1, o = Dt;
                                else if (i >= 200) {
                                    var s = t ? null : Go(e);
                                    if (s) return dn(s);
                                    a = !1, o = tn, u = new Kn
                                } else u = t ? [] : l;
                                e: for (; ++r < i;) {
                                    var c = e[r],
                                        f = t ? t(c) : c;
                                    if (c = n || 0 !== c ? c : 0, a && f == f) {
                                        for (var d = u.length; d--;)
                                            if (u[d] === f) continue e;
                                        t && u.push(f), l.push(c)
                                    } else o(u, f, n) || (u !== l && u.push(f), l.push(c))
                                }
                                return l
                            }

                            function po(e, t) {
                                return null == (e = Ri(e, t = _o(t, e))) || delete e[zi(Gi(t))]
                            }

                            function ho(e, t, n, r) {
                                return eo(e, t, n(Er(e, t)), r)
                            }

                            function go(e, t, n, r) {
                                for (var o = e.length, i = r ? o : -1;
                                    (r ? i-- : ++i < o) && t(e[i], i, e););
                                return n ? oo(e, r ? 0 : i, r ? i + 1 : o) : oo(e, r ? i + 1 : 0, r ? o : i)
                            }

                            function mo(e, t) {
                                var n = e;
                                return n instanceof Vn && (n = n.value()), Pt(t, (function(e, t) {
                                    return t.func.apply(t.thisArg, Mt([e], t.args))
                                }), n)
                            }

                            function vo(e, t, n) {
                                var o = e.length;
                                if (o < 2) return o ? fo(e[0]) : [];
                                for (var i = -1, a = r(o); ++i < o;)
                                    for (var l = e[i], u = -1; ++u < o;) u != i && (a[i] = dr(a[i] || l, e[u], t, n));
                                return fo(yr(a, 1), t, n)
                            }

                            function yo(e, t, n) {
                                for (var r = -1, i = e.length, a = t.length, l = {}; ++r < i;) {
                                    var u = r < a ? t[r] : o;
                                    n(l, e[r], u)
                                }
                                return l
                            }

                            function bo(e) {
                                return qa(e) ? e : []
                            }

                            function wo(e) {
                                return "function" == typeof e ? e : ou
                            }

                            function _o(e, t) {
                                return Va(e) ? e : xi(e, t) ? [e] : Pi(bl(e))
                            }
                            var xo = Gr;

                            function So(e, t, n) {
                                var r = e.length;
                                return n = n === o ? r : n, !t && n >= r ? e : oo(e, t, n)
                            }
                            var Eo = ot || function(e) {
                                return gt.clearTimeout(e)
                            };

                            function ko(e, t) {
                                if (t) return e.slice();
                                var n = e.length,
                                    r = Ye ? Ye(n) : new e.constructor(n);
                                return e.copy(r), r
                            }

                            function Co(e) {
                                var t = new e.constructor(e.byteLength);
                                return new Ve(t).set(new Ve(e)), t
                            }

                            function To(e, t) {
                                var n = t ? Co(e.buffer) : e.buffer;
                                return new e.constructor(n, e.byteOffset, e.length)
                            }

                            function No(e, t) {
                                if (e !== t) {
                                    var n = e !== o,
                                        r = null === e,
                                        i = e == e,
                                        a = sl(e),
                                        l = t !== o,
                                        u = null === t,
                                        s = t == t,
                                        c = sl(t);
                                    if (!u && !c && !a && e > t || a && l && s && !u && !c || r && l && s || !n && s || !i) return 1;
                                    if (!r && !a && !c && e < t || c && n && i && !r && !a || u && n && i || !l && i || !s) return -1
                                }
                                return 0
                            }

                            function Ro(e, t, n, o) {
                                for (var i = -1, a = e.length, l = n.length, u = -1, s = t.length, c = bn(a - l, 0), f = r(s + c), d = !o; ++u < s;) f[u] = t[u];
                                for (; ++i < l;)(d || i < a) && (f[n[i]] = e[i]);
                                for (; c--;) f[u++] = e[i++];
                                return f
                            }

                            function Ao(e, t, n, o) {
                                for (var i = -1, a = e.length, l = -1, u = n.length, s = -1, c = t.length, f = bn(a - u, 0), d = r(f + c), p = !o; ++i < f;) d[i] = e[i];
                                for (var h = i; ++s < c;) d[h + s] = t[s];
                                for (; ++l < u;)(p || i < a) && (d[h + n[l]] = e[i++]);
                                return d
                            }

                            function Lo(e, t) {
                                var n = -1,
                                    o = e.length;
                                for (t || (t = r(o)); ++n < o;) t[n] = e[n];
                                return t
                            }

                            function Oo(e, t, n, r) {
                                var i = !n;
                                n || (n = {});
                                for (var a = -1, l = t.length; ++a < l;) {
                                    var u = t[a],
                                        s = r ? r(n[u], e[u], u, n, e) : o;
                                    s === o && (s = e[u]), i ? ar(n, u, s) : nr(n, u, s)
                                }
                                return n
                            }

                            function Io(e, t) {
                                return function(n, r) {
                                    var o = Va(n) ? Nt : or,
                                        i = t ? t() : {};
                                    return o(n, e, ci(r, 2), i)
                                }
                            }

                            function Do(e) {
                                return Gr((function(t, n) {
                                    var r = -1,
                                        i = n.length,
                                        a = i > 1 ? n[i - 1] : o,
                                        l = i > 2 ? n[2] : o;
                                    for (a = e.length > 3 && "function" == typeof a ? (i--, a) : o, l && _i(n[0], n[1], l) && (a = i < 3 ? o : a, i = 1), t = Te(t); ++r < i;) {
                                        var u = n[r];
                                        u && e(t, u, r, a)
                                    }
                                    return t
                                }))
                            }

                            function jo(e, t) {
                                return function(n, r) {
                                    if (null == n) return n;
                                    if (!Qa(n)) return e(n, r);
                                    for (var o = n.length, i = t ? o : -1, a = Te(n);
                                        (t ? i-- : ++i < o) && !1 !== r(a[i], i, a););
                                    return n
                                }
                            }

                            function Mo(e) {
                                return function(t, n, r) {
                                    for (var o = -1, i = Te(t), a = r(t), l = a.length; l--;) {
                                        var u = a[e ? l : ++o];
                                        if (!1 === n(i[u], u, i)) break
                                    }
                                    return t
                                }
                            }

                            function Po(e) {
                                return function(t) {
                                    var n = un(t = bl(t)) ? gn(t) : o,
                                        r = n ? n[0] : t.charAt(0),
                                        i = n ? So(n, 1).join("") : t.slice(1);
                                    return r[e]() + i
                                }
                            }

                            function zo(e) {
                                return function(t) {
                                    return Pt(Jl($l(t).replace(et, "")), e, "")
                                }
                            }

                            function Bo(e) {
                                return function() {
                                    var t = arguments;
                                    switch (t.length) {
                                        case 0:
                                            return new e;
                                        case 1:
                                            return new e(t[0]);
                                        case 2:
                                            return new e(t[0], t[1]);
                                        case 3:
                                            return new e(t[0], t[1], t[2]);
                                        case 4:
                                            return new e(t[0], t[1], t[2], t[3]);
                                        case 5:
                                            return new e(t[0], t[1], t[2], t[3], t[4]);
                                        case 6:
                                            return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                                        case 7:
                                            return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
                                    }
                                    var n = Wn(e.prototype),
                                        r = e.apply(n, t);
                                    return tl(r) ? r : n
                                }
                            }

                            function Fo(e) {
                                return function(t, n, r) {
                                    var i = Te(t);
                                    if (!Qa(t)) {
                                        var a = ci(n, 3);
                                        t = Ol(t), n = function(e) {
                                            return a(i[e], e, i)
                                        }
                                    }
                                    var l = e(t, n, r);
                                    return l > -1 ? i[a ? t[l] : l] : o
                                }
                            }

                            function Uo(e) {
                                return oi((function(t) {
                                    var n = t.length,
                                        r = n,
                                        a = $n.prototype.thru;
                                    for (e && t.reverse(); r--;) {
                                        var l = t[r];
                                        if ("function" != typeof l) throw new Ae(i);
                                        if (a && !u && "wrapper" == ui(l)) var u = new $n([], !0)
                                    }
                                    for (r = u ? r : n; ++r < n;) {
                                        var s = ui(l = t[r]),
                                            c = "wrapper" == s ? li(l) : o;
                                        u = c && Si(c[0]) && 424 == c[1] && !c[4].length && 1 == c[9] ? u[ui(c[0])].apply(u, c[3]) : 1 == l.length && Si(l) ? u[s]() : u.thru(l)
                                    }
                                    return function() {
                                        var e = arguments,
                                            r = e[0];
                                        if (u && 1 == e.length && Va(r)) return u.plant(r).value();
                                        for (var o = 0, i = n ? t[o].apply(this, e) : r; ++o < n;) i = t[o].call(this, i);
                                        return i
                                    }
                                }))
                            }

                            function Wo(e, t, n, i, a, l, u, s, c, d) {
                                var p = t & f,
                                    h = 1 & t,
                                    g = 2 & t,
                                    m = 24 & t,
                                    v = 512 & t,
                                    y = g ? o : Bo(e);
                                return function f() {
                                    for (var b = arguments.length, w = r(b), _ = b; _--;) w[_] = arguments[_];
                                    if (m) var x = si(f),
                                        S = function(e, t) {
                                            for (var n = e.length, r = 0; n--;) e[n] === t && ++r;
                                            return r
                                        }(w, x);
                                    if (i && (w = Ro(w, i, a, m)), l && (w = Ao(w, l, u, m)), b -= S, m && b < d) {
                                        var E = fn(w, x);
                                        return Ko(e, t, Wo, f.placeholder, n, w, E, s, c, d - b)
                                    }
                                    var k = h ? n : this,
                                        C = g ? k[e] : e;
                                    return b = w.length, s ? w = function(e, t) {
                                        var n = e.length,
                                            r = wn(t.length, n),
                                            i = Lo(e);
                                        for (; r--;) {
                                            var a = t[r];
                                            e[r] = wi(a, n) ? i[a] : o
                                        }
                                        return e
                                    }(w, s) : v && b > 1 && w.reverse(), p && c < b && (w.length = c), this && this !== gt && this instanceof f && (C = y || Bo(C)), C.apply(k, w)
                                }
                            }

                            function Ho(e, t) {
                                return function(n, r) {
                                    return function(e, t, n, r) {
                                        return _r(e, (function(e, o, i) {
                                            t(r, n(e), o, i)
                                        })), r
                                    }(n, e, t(r), {})
                                }
                            }

                            function $o(e, t) {
                                return function(n, r) {
                                    var i;
                                    if (n === o && r === o) return t;
                                    if (n !== o && (i = n), r !== o) {
                                        if (i === o) return r;
                                        "string" == typeof n || "string" == typeof r ? (n = co(n), r = co(r)) : (n = so(n), r = so(r)), i = e(n, r)
                                    }
                                    return i
                                }
                            }

                            function Vo(e) {
                                return oi((function(t) {
                                    return t = jt(t, Zt(ci())), Gr((function(n) {
                                        var r = this;
                                        return e(t, (function(e) {
                                            return Tt(e, r, n)
                                        }))
                                    }))
                                }))
                            }

                            function Yo(e, t) {
                                var n = (t = t === o ? " " : co(t)).length;
                                if (n < 2) return n ? Xr(t, e) : t;
                                var r = Xr(t, ht(e / hn(t)));
                                return un(t) ? So(gn(r), 0, e).join("") : r.slice(0, e)
                            }

                            function Qo(e) {
                                return function(t, n, i) {
                                    return i && "number" != typeof i && _i(t, n, i) && (n = i = o), t = hl(t), n === o ? (n = t, t = 0) : n = hl(n),
                                        function(e, t, n, o) {
                                            for (var i = -1, a = bn(ht((t - e) / (n || 1)), 0), l = r(a); a--;) l[o ? a : ++i] = e, e += n;
                                            return l
                                        }(t, n, i = i === o ? t < n ? 1 : -1 : hl(i), e)
                                }
                            }

                            function qo(e) {
                                return function(t, n) {
                                    return "string" == typeof t && "string" == typeof n || (t = vl(t), n = vl(n)), e(t, n)
                                }
                            }

                            function Ko(e, t, n, r, i, a, l, u, f, d) {
                                var p = 8 & t;
                                t |= p ? s : c, 4 & (t &= ~(p ? c : s)) || (t &= -4);
                                var h = [e, t, i, p ? a : o, p ? l : o, p ? o : a, p ? o : l, u, f, d],
                                    g = n.apply(o, h);
                                return Si(e) && Li(g, h), g.placeholder = r, Di(g, e, t)
                            }

                            function Xo(e) {
                                var t = Ce[e];
                                return function(e, n) {
                                    if (e = vl(e), (n = null == n ? 0 : wn(gl(n), 292)) && wt(e)) {
                                        var r = (bl(e) + "e").split("e");
                                        return +((r = (bl(t(r[0] + "e" + (+r[1] + n))) + "e").split("e"))[0] + "e" + (+r[1] - n))
                                    }
                                    return t(e)
                                }
                            }
                            var Go = Nn && 1 / dn(new Nn([, -0]))[1] == p ? function(e) {
                                return new Nn(e)
                            } : su;

                            function Jo(e) {
                                return function(t) {
                                    var n = mi(t);
                                    return n == k ? sn(t) : n == A ? pn(t) : function(e, t) {
                                        return jt(t, (function(t) {
                                            return [t, e[t]]
                                        }))
                                    }(t, e(t))
                                }
                            }

                            function Zo(e, t, n, a, p, h, g, m) {
                                var v = 2 & t;
                                if (!v && "function" != typeof e) throw new Ae(i);
                                var y = a ? a.length : 0;
                                if (y || (t &= -97, a = p = o), g = g === o ? g : bn(gl(g), 0), m = m === o ? m : gl(m), y -= p ? p.length : 0, t & c) {
                                    var b = a,
                                        w = p;
                                    a = p = o
                                }
                                var _ = v ? o : li(e),
                                    x = [e, t, n, a, p, b, w, h, g, m];
                                if (_ && function(e, t) {
                                        var n = e[1],
                                            r = t[1],
                                            o = n | r,
                                            i = o < 131,
                                            a = r == f && 8 == n || r == f && n == d && e[7].length <= t[8] || 384 == r && t[7].length <= t[8] && 8 == n;
                                        if (!i && !a) return e;
                                        1 & r && (e[2] = t[2], o |= 1 & n ? 0 : 4);
                                        var u = t[3];
                                        if (u) {
                                            var s = e[3];
                                            e[3] = s ? Ro(s, u, t[4]) : u, e[4] = s ? fn(e[3], l) : t[4]
                                        }(u = t[5]) && (s = e[5], e[5] = s ? Ao(s, u, t[6]) : u, e[6] = s ? fn(e[5], l) : t[6]);
                                        (u = t[7]) && (e[7] = u);
                                        r & f && (e[8] = null == e[8] ? t[8] : wn(e[8], t[8]));
                                        null == e[9] && (e[9] = t[9]);
                                        e[0] = t[0], e[1] = o
                                    }(x, _), e = x[0], t = x[1], n = x[2], a = x[3], p = x[4], !(m = x[9] = x[9] === o ? v ? 0 : e.length : bn(x[9] - y, 0)) && 24 & t && (t &= -25), t && 1 != t) S = 8 == t || t == u ? function(e, t, n) {
                                    var i = Bo(e);
                                    return function a() {
                                        for (var l = arguments.length, u = r(l), s = l, c = si(a); s--;) u[s] = arguments[s];
                                        var f = l < 3 && u[0] !== c && u[l - 1] !== c ? [] : fn(u, c);
                                        return (l -= f.length) < n ? Ko(e, t, Wo, a.placeholder, o, u, f, o, o, n - l) : Tt(this && this !== gt && this instanceof a ? i : e, this, u)
                                    }
                                }(e, t, m) : t != s && 33 != t || p.length ? Wo.apply(o, x) : function(e, t, n, o) {
                                    var i = 1 & t,
                                        a = Bo(e);
                                    return function t() {
                                        for (var l = -1, u = arguments.length, s = -1, c = o.length, f = r(c + u), d = this && this !== gt && this instanceof t ? a : e; ++s < c;) f[s] = o[s];
                                        for (; u--;) f[s++] = arguments[++l];
                                        return Tt(d, i ? n : this, f)
                                    }
                                }(e, t, n, a);
                                else var S = function(e, t, n) {
                                    var r = 1 & t,
                                        o = Bo(e);
                                    return function t() {
                                        return (this && this !== gt && this instanceof t ? o : e).apply(r ? n : this, arguments)
                                    }
                                }(e, t, n);
                                return Di((_ ? to : Li)(S, x), e, t)
                            }

                            function ei(e, t, n, r) {
                                return e === o || Ua(e, Ie[n]) && !Me.call(r, n) ? t : e
                            }

                            function ti(e, t, n, r, i, a) {
                                return tl(e) && tl(t) && (a.set(t, e), Hr(e, t, o, ti, a), a.delete(t)), e
                            }

                            function ni(e) {
                                return il(e) ? o : e
                            }

                            function ri(e, t, n, r, i, a) {
                                var l = 1 & n,
                                    u = e.length,
                                    s = t.length;
                                if (u != s && !(l && s > u)) return !1;
                                var c = a.get(e),
                                    f = a.get(t);
                                if (c && f) return c == t && f == e;
                                var d = -1,
                                    p = !0,
                                    h = 2 & n ? new Kn : o;
                                for (a.set(e, t), a.set(t, e); ++d < u;) {
                                    var g = e[d],
                                        m = t[d];
                                    if (r) var v = l ? r(m, g, d, t, e, a) : r(g, m, d, e, t, a);
                                    if (v !== o) {
                                        if (v) continue;
                                        p = !1;
                                        break
                                    }
                                    if (h) {
                                        if (!Bt(t, (function(e, t) {
                                                if (!tn(h, t) && (g === e || i(g, e, n, r, a))) return h.push(t)
                                            }))) {
                                            p = !1;
                                            break
                                        }
                                    } else if (g !== m && !i(g, m, n, r, a)) {
                                        p = !1;
                                        break
                                    }
                                }
                                return a.delete(e), a.delete(t), p
                            }

                            function oi(e) {
                                return Ii(Ni(e, o, Yi), e + "")
                            }

                            function ii(e) {
                                return kr(e, Ol, hi)
                            }

                            function ai(e) {
                                return kr(e, Il, gi)
                            }
                            var li = Ln ? function(e) {
                                return Ln.get(e)
                            } : su;

                            function ui(e) {
                                for (var t = e.name + "", n = On[t], r = Me.call(On, t) ? n.length : 0; r--;) {
                                    var o = n[r],
                                        i = o.func;
                                    if (null == i || i == e) return o.name
                                }
                                return t
                            }

                            function si(e) {
                                return (Me.call(Un, "placeholder") ? Un : e).placeholder
                            }

                            function ci() {
                                var e = Un.iteratee || iu;
                                return e = e === iu ? Mr : e, arguments.length ? e(arguments[0], arguments[1]) : e
                            }

                            function fi(e, t) {
                                var n, r, o = e.__data__;
                                return ("string" == (r = typeof(n = t)) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== n : null === n) ? o["string" == typeof t ? "string" : "hash"] : o.map
                            }

                            function di(e) {
                                for (var t = Ol(e), n = t.length; n--;) {
                                    var r = t[n],
                                        o = e[r];
                                    t[n] = [r, o, Ci(o)]
                                }
                                return t
                            }

                            function pi(e, t) {
                                var n = function(e, t) {
                                    return null == e ? o : e[t]
                                }(e, t);
                                return jr(n) ? n : o
                            }
                            var hi = vt ? function(e) {
                                    return null == e ? [] : (e = Te(e), Ot(vt(e), (function(t) {
                                        return Ke.call(e, t)
                                    })))
                                } : mu,
                                gi = vt ? function(e) {
                                    for (var t = []; e;) Mt(t, hi(e)), e = Qe(e);
                                    return t
                                } : mu,
                                mi = Cr;

                            function vi(e, t, n) {
                                for (var r = -1, o = (t = _o(t, e)).length, i = !1; ++r < o;) {
                                    var a = zi(t[r]);
                                    if (!(i = null != e && n(e, a))) break;
                                    e = e[a]
                                }
                                return i || ++r != o ? i : !!(o = null == e ? 0 : e.length) && el(o) && wi(a, o) && (Va(e) || $a(e))
                            }

                            function yi(e) {
                                return "function" != typeof e.constructor || ki(e) ? {} : Wn(Qe(e))
                            }

                            function bi(e) {
                                return Va(e) || $a(e) || !!(Ge && e && e[Ge])
                            }

                            function wi(e, t) {
                                var n = typeof e;
                                return !!(t = null == t ? h : t) && ("number" == n || "symbol" != n && we.test(e)) && e > -1 && e % 1 == 0 && e < t
                            }

                            function _i(e, t, n) {
                                if (!tl(n)) return !1;
                                var r = typeof t;
                                return !!("number" == r ? Qa(n) && wi(t, n.length) : "string" == r && t in n) && Ua(n[t], e)
                            }

                            function xi(e, t) {
                                if (Va(e)) return !1;
                                var n = typeof e;
                                return !("number" != n && "symbol" != n && "boolean" != n && null != e && !sl(e)) || (ne.test(e) || !te.test(e) || null != t && e in Te(t))
                            }

                            function Si(e) {
                                var t = ui(e),
                                    n = Un[t];
                                if ("function" != typeof n || !(t in Vn.prototype)) return !1;
                                if (e === n) return !0;
                                var r = li(n);
                                return !!r && e === r[0]
                            }(kn && mi(new kn(new ArrayBuffer(1))) != j || Cn && mi(new Cn) != k || Tn && mi(Tn.resolve()) != N || Nn && mi(new Nn) != A || Rn && mi(new Rn) != I) && (mi = function(e) {
                                var t = Cr(e),
                                    n = t == T ? e.constructor : o,
                                    r = n ? Bi(n) : "";
                                if (r) switch (r) {
                                    case In:
                                        return j;
                                    case Dn:
                                        return k;
                                    case jn:
                                        return N;
                                    case Mn:
                                        return A;
                                    case Pn:
                                        return I
                                }
                                return t
                            });
                            var Ei = De ? Ja : vu;

                            function ki(e) {
                                var t = e && e.constructor;
                                return e === ("function" == typeof t && t.prototype || Ie)
                            }

                            function Ci(e) {
                                return e == e && !tl(e)
                            }

                            function Ti(e, t) {
                                return function(n) {
                                    return null != n && (n[e] === t && (t !== o || e in Te(n)))
                                }
                            }

                            function Ni(e, t, n) {
                                return t = bn(t === o ? e.length - 1 : t, 0),
                                    function() {
                                        for (var o = arguments, i = -1, a = bn(o.length - t, 0), l = r(a); ++i < a;) l[i] = o[t + i];
                                        i = -1;
                                        for (var u = r(t + 1); ++i < t;) u[i] = o[i];
                                        return u[t] = n(l), Tt(e, this, u)
                                    }
                            }

                            function Ri(e, t) {
                                return t.length < 2 ? e : Er(e, oo(t, 0, -1))
                            }

                            function Ai(e, t) {
                                if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t]
                            }
                            var Li = ji(to),
                                Oi = pt || function(e, t) {
                                    return gt.setTimeout(e, t)
                                },
                                Ii = ji(no);

                            function Di(e, t, n) {
                                var r = t + "";
                                return Ii(e, function(e, t) {
                                    var n = t.length;
                                    if (!n) return e;
                                    var r = n - 1;
                                    return t[r] = (n > 1 ? "& " : "") + t[r], t = t.join(n > 2 ? ", " : " "), e.replace(ue, "{\n/* [wrapped with " + t + "] */\n")
                                }(r, function(e, t) {
                                    return Rt(v, (function(n) {
                                        var r = "_." + n[0];
                                        t & n[1] && !It(e, r) && e.push(r)
                                    })), e.sort()
                                }(function(e) {
                                    var t = e.match(se);
                                    return t ? t[1].split(ce) : []
                                }(r), n)))
                            }

                            function ji(e) {
                                var t = 0,
                                    n = 0;
                                return function() {
                                    var r = _n(),
                                        i = 16 - (r - n);
                                    if (n = r, i > 0) {
                                        if (++t >= 800) return arguments[0]
                                    } else t = 0;
                                    return e.apply(o, arguments)
                                }
                            }

                            function Mi(e, t) {
                                var n = -1,
                                    r = e.length,
                                    i = r - 1;
                                for (t = t === o ? r : t; ++n < t;) {
                                    var a = Kr(n, i),
                                        l = e[a];
                                    e[a] = e[n], e[n] = l
                                }
                                return e.length = t, e
                            }
                            var Pi = function(e) {
                                var t = ja(e, (function(e) {
                                        return 500 === n.size && n.clear(), e
                                    })),
                                    n = t.cache;
                                return t
                            }((function(e) {
                                var t = [];
                                return 46 === e.charCodeAt(0) && t.push(""), e.replace(re, (function(e, n, r, o) {
                                    t.push(r ? o.replace(pe, "$1") : n || e)
                                })), t
                            }));

                            function zi(e) {
                                if ("string" == typeof e || sl(e)) return e;
                                var t = e + "";
                                return "0" == t && 1 / e == -1 / 0 ? "-0" : t
                            }

                            function Bi(e) {
                                if (null != e) {
                                    try {
                                        return je.call(e)
                                    } catch (e) {}
                                    try {
                                        return e + ""
                                    } catch (e) {}
                                }
                                return ""
                            }

                            function Fi(e) {
                                if (e instanceof Vn) return e.clone();
                                var t = new $n(e.__wrapped__, e.__chain__);
                                return t.__actions__ = Lo(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
                            }
                            var Ui = Gr((function(e, t) {
                                    return qa(e) ? dr(e, yr(t, 1, qa, !0)) : []
                                })),
                                Wi = Gr((function(e, t) {
                                    var n = Gi(t);
                                    return qa(n) && (n = o), qa(e) ? dr(e, yr(t, 1, qa, !0), ci(n, 2)) : []
                                })),
                                Hi = Gr((function(e, t) {
                                    var n = Gi(t);
                                    return qa(n) && (n = o), qa(e) ? dr(e, yr(t, 1, qa, !0), o, n) : []
                                }));

                            function $i(e, t, n) {
                                var r = null == e ? 0 : e.length;
                                if (!r) return -1;
                                var o = null == n ? 0 : gl(n);
                                return o < 0 && (o = bn(r + o, 0)), Wt(e, ci(t, 3), o)
                            }

                            function Vi(e, t, n) {
                                var r = null == e ? 0 : e.length;
                                if (!r) return -1;
                                var i = r - 1;
                                return n !== o && (i = gl(n), i = n < 0 ? bn(r + i, 0) : wn(i, r - 1)), Wt(e, ci(t, 3), i, !0)
                            }

                            function Yi(e) {
                                return (null == e ? 0 : e.length) ? yr(e, 1) : []
                            }

                            function Qi(e) {
                                return e && e.length ? e[0] : o
                            }
                            var qi = Gr((function(e) {
                                    var t = jt(e, bo);
                                    return t.length && t[0] === e[0] ? Ar(t) : []
                                })),
                                Ki = Gr((function(e) {
                                    var t = Gi(e),
                                        n = jt(e, bo);
                                    return t === Gi(n) ? t = o : n.pop(), n.length && n[0] === e[0] ? Ar(n, ci(t, 2)) : []
                                })),
                                Xi = Gr((function(e) {
                                    var t = Gi(e),
                                        n = jt(e, bo);
                                    return (t = "function" == typeof t ? t : o) && n.pop(), n.length && n[0] === e[0] ? Ar(n, o, t) : []
                                }));

                            function Gi(e) {
                                var t = null == e ? 0 : e.length;
                                return t ? e[t - 1] : o
                            }
                            var Ji = Gr(Zi);

                            function Zi(e, t) {
                                return e && e.length && t && t.length ? Qr(e, t) : e
                            }
                            var ea = oi((function(e, t) {
                                var n = null == e ? 0 : e.length,
                                    r = lr(e, t);
                                return qr(e, jt(t, (function(e) {
                                    return wi(e, n) ? +e : e
                                })).sort(No)), r
                            }));

                            function ta(e) {
                                return null == e ? e : En.call(e)
                            }
                            var na = Gr((function(e) {
                                    return fo(yr(e, 1, qa, !0))
                                })),
                                ra = Gr((function(e) {
                                    var t = Gi(e);
                                    return qa(t) && (t = o), fo(yr(e, 1, qa, !0), ci(t, 2))
                                })),
                                oa = Gr((function(e) {
                                    var t = Gi(e);
                                    return t = "function" == typeof t ? t : o, fo(yr(e, 1, qa, !0), o, t)
                                }));

                            function ia(e) {
                                if (!e || !e.length) return [];
                                var t = 0;
                                return e = Ot(e, (function(e) {
                                    if (qa(e)) return t = bn(e.length, t), !0
                                })), Gt(t, (function(t) {
                                    return jt(e, Qt(t))
                                }))
                            }

                            function aa(e, t) {
                                if (!e || !e.length) return [];
                                var n = ia(e);
                                return null == t ? n : jt(n, (function(e) {
                                    return Tt(t, o, e)
                                }))
                            }
                            var la = Gr((function(e, t) {
                                    return qa(e) ? dr(e, t) : []
                                })),
                                ua = Gr((function(e) {
                                    return vo(Ot(e, qa))
                                })),
                                sa = Gr((function(e) {
                                    var t = Gi(e);
                                    return qa(t) && (t = o), vo(Ot(e, qa), ci(t, 2))
                                })),
                                ca = Gr((function(e) {
                                    var t = Gi(e);
                                    return t = "function" == typeof t ? t : o, vo(Ot(e, qa), o, t)
                                })),
                                fa = Gr(ia);
                            var da = Gr((function(e) {
                                var t = e.length,
                                    n = t > 1 ? e[t - 1] : o;
                                return n = "function" == typeof n ? (e.pop(), n) : o, aa(e, n)
                            }));

                            function pa(e) {
                                var t = Un(e);
                                return t.__chain__ = !0, t
                            }

                            function ha(e, t) {
                                return t(e)
                            }
                            var ga = oi((function(e) {
                                var t = e.length,
                                    n = t ? e[0] : 0,
                                    r = this.__wrapped__,
                                    i = function(t) {
                                        return lr(t, e)
                                    };
                                return !(t > 1 || this.__actions__.length) && r instanceof Vn && wi(n) ? ((r = r.slice(n, +n + (t ? 1 : 0))).__actions__.push({
                                    func: ha,
                                    args: [i],
                                    thisArg: o
                                }), new $n(r, this.__chain__).thru((function(e) {
                                    return t && !e.length && e.push(o), e
                                }))) : this.thru(i)
                            }));
                            var ma = Io((function(e, t, n) {
                                Me.call(e, n) ? ++e[n] : ar(e, n, 1)
                            }));
                            var va = Fo($i),
                                ya = Fo(Vi);

                            function ba(e, t) {
                                return (Va(e) ? Rt : pr)(e, ci(t, 3))
                            }

                            function wa(e, t) {
                                return (Va(e) ? At : hr)(e, ci(t, 3))
                            }
                            var _a = Io((function(e, t, n) {
                                Me.call(e, n) ? e[n].push(t) : ar(e, n, [t])
                            }));
                            var xa = Gr((function(e, t, n) {
                                    var o = -1,
                                        i = "function" == typeof t,
                                        a = Qa(e) ? r(e.length) : [];
                                    return pr(e, (function(e) {
                                        a[++o] = i ? Tt(t, e, n) : Lr(e, t, n)
                                    })), a
                                })),
                                Sa = Io((function(e, t, n) {
                                    ar(e, n, t)
                                }));

                            function Ea(e, t) {
                                return (Va(e) ? jt : Fr)(e, ci(t, 3))
                            }
                            var ka = Io((function(e, t, n) {
                                e[n ? 0 : 1].push(t)
                            }), (function() {
                                return [
                                    [],
                                    []
                                ]
                            }));
                            var Ca = Gr((function(e, t) {
                                    if (null == e) return [];
                                    var n = t.length;
                                    return n > 1 && _i(e, t[0], t[1]) ? t = [] : n > 2 && _i(t[0], t[1], t[2]) && (t = [t[0]]), Vr(e, yr(t, 1), [])
                                })),
                                Ta = ct || function() {
                                    return gt.Date.now()
                                };

                            function Na(e, t, n) {
                                return t = n ? o : t, t = e && null == t ? e.length : t, Zo(e, f, o, o, o, o, t)
                            }

                            function Ra(e, t) {
                                var n;
                                if ("function" != typeof t) throw new Ae(i);
                                return e = gl(e),
                                    function() {
                                        return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = o), n
                                    }
                            }
                            var Aa = Gr((function(e, t, n) {
                                    var r = 1;
                                    if (n.length) {
                                        var o = fn(n, si(Aa));
                                        r |= s
                                    }
                                    return Zo(e, r, t, n, o)
                                })),
                                La = Gr((function(e, t, n) {
                                    var r = 3;
                                    if (n.length) {
                                        var o = fn(n, si(La));
                                        r |= s
                                    }
                                    return Zo(t, r, e, n, o)
                                }));

                            function Oa(e, t, n) {
                                var r, a, l, u, s, c, f = 0,
                                    d = !1,
                                    p = !1,
                                    h = !0;
                                if ("function" != typeof e) throw new Ae(i);

                                function g(t) {
                                    var n = r,
                                        i = a;
                                    return r = a = o, f = t, u = e.apply(i, n)
                                }

                                function m(e) {
                                    var n = e - c;
                                    return c === o || n >= t || n < 0 || p && e - f >= l
                                }

                                function v() {
                                    var e = Ta();
                                    if (m(e)) return y(e);
                                    s = Oi(v, function(e) {
                                        var n = t - (e - c);
                                        return p ? wn(n, l - (e - f)) : n
                                    }(e))
                                }

                                function y(e) {
                                    return s = o, h && r ? g(e) : (r = a = o, u)
                                }

                                function b() {
                                    var e = Ta(),
                                        n = m(e);
                                    if (r = arguments, a = this, c = e, n) {
                                        if (s === o) return function(e) {
                                            return f = e, s = Oi(v, t), d ? g(e) : u
                                        }(c);
                                        if (p) return Eo(s), s = Oi(v, t), g(c)
                                    }
                                    return s === o && (s = Oi(v, t)), u
                                }
                                return t = vl(t) || 0, tl(n) && (d = !!n.leading, l = (p = "maxWait" in n) ? bn(vl(n.maxWait) || 0, t) : l, h = "trailing" in n ? !!n.trailing : h), b.cancel = function() {
                                    s !== o && Eo(s), f = 0, r = c = a = s = o
                                }, b.flush = function() {
                                    return s === o ? u : y(Ta())
                                }, b
                            }
                            var Ia = Gr((function(e, t) {
                                    return fr(e, 1, t)
                                })),
                                Da = Gr((function(e, t, n) {
                                    return fr(e, vl(t) || 0, n)
                                }));

                            function ja(e, t) {
                                if ("function" != typeof e || null != t && "function" != typeof t) throw new Ae(i);
                                var n = function() {
                                    var r = arguments,
                                        o = t ? t.apply(this, r) : r[0],
                                        i = n.cache;
                                    if (i.has(o)) return i.get(o);
                                    var a = e.apply(this, r);
                                    return n.cache = i.set(o, a) || i, a
                                };
                                return n.cache = new(ja.Cache || qn), n
                            }

                            function Ma(e) {
                                if ("function" != typeof e) throw new Ae(i);
                                return function() {
                                    var t = arguments;
                                    switch (t.length) {
                                        case 0:
                                            return !e.call(this);
                                        case 1:
                                            return !e.call(this, t[0]);
                                        case 2:
                                            return !e.call(this, t[0], t[1]);
                                        case 3:
                                            return !e.call(this, t[0], t[1], t[2])
                                    }
                                    return !e.apply(this, t)
                                }
                            }
                            ja.Cache = qn;
                            var Pa = xo((function(e, t) {
                                    var n = (t = 1 == t.length && Va(t[0]) ? jt(t[0], Zt(ci())) : jt(yr(t, 1), Zt(ci()))).length;
                                    return Gr((function(r) {
                                        for (var o = -1, i = wn(r.length, n); ++o < i;) r[o] = t[o].call(this, r[o]);
                                        return Tt(e, this, r)
                                    }))
                                })),
                                za = Gr((function(e, t) {
                                    var n = fn(t, si(za));
                                    return Zo(e, s, o, t, n)
                                })),
                                Ba = Gr((function(e, t) {
                                    var n = fn(t, si(Ba));
                                    return Zo(e, c, o, t, n)
                                })),
                                Fa = oi((function(e, t) {
                                    return Zo(e, d, o, o, o, t)
                                }));

                            function Ua(e, t) {
                                return e === t || e != e && t != t
                            }
                            var Wa = qo(Tr),
                                Ha = qo((function(e, t) {
                                    return e >= t
                                })),
                                $a = Or(function() {
                                    return arguments
                                }()) ? Or : function(e) {
                                    return nl(e) && Me.call(e, "callee") && !Ke.call(e, "callee")
                                },
                                Va = r.isArray,
                                Ya = _t ? Zt(_t) : function(e) {
                                    return nl(e) && Cr(e) == D
                                };

                            function Qa(e) {
                                return null != e && el(e.length) && !Ja(e)
                            }

                            function qa(e) {
                                return nl(e) && Qa(e)
                            }
                            var Ka = bt || vu,
                                Xa = xt ? Zt(xt) : function(e) {
                                    return nl(e) && Cr(e) == _
                                };

                            function Ga(e) {
                                if (!nl(e)) return !1;
                                var t = Cr(e);
                                return t == x || "[object DOMException]" == t || "string" == typeof e.message && "string" == typeof e.name && !il(e)
                            }

                            function Ja(e) {
                                if (!tl(e)) return !1;
                                var t = Cr(e);
                                return t == S || t == E || "[object AsyncFunction]" == t || "[object Proxy]" == t
                            }

                            function Za(e) {
                                return "number" == typeof e && e == gl(e)
                            }

                            function el(e) {
                                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= h
                            }

                            function tl(e) {
                                var t = typeof e;
                                return null != e && ("object" == t || "function" == t)
                            }

                            function nl(e) {
                                return null != e && "object" == typeof e
                            }
                            var rl = St ? Zt(St) : function(e) {
                                return nl(e) && mi(e) == k
                            };

                            function ol(e) {
                                return "number" == typeof e || nl(e) && Cr(e) == C
                            }

                            function il(e) {
                                if (!nl(e) || Cr(e) != T) return !1;
                                var t = Qe(e);
                                if (null === t) return !0;
                                var n = Me.call(t, "constructor") && t.constructor;
                                return "function" == typeof n && n instanceof n && je.call(n) == Fe
                            }
                            var al = Et ? Zt(Et) : function(e) {
                                return nl(e) && Cr(e) == R
                            };
                            var ll = kt ? Zt(kt) : function(e) {
                                return nl(e) && mi(e) == A
                            };

                            function ul(e) {
                                return "string" == typeof e || !Va(e) && nl(e) && Cr(e) == L
                            }

                            function sl(e) {
                                return "symbol" == typeof e || nl(e) && Cr(e) == O
                            }
                            var cl = Ct ? Zt(Ct) : function(e) {
                                return nl(e) && el(e.length) && !!ut[Cr(e)]
                            };
                            var fl = qo(Br),
                                dl = qo((function(e, t) {
                                    return e <= t
                                }));

                            function pl(e) {
                                if (!e) return [];
                                if (Qa(e)) return ul(e) ? gn(e) : Lo(e);
                                if (Je && e[Je]) return function(e) {
                                    for (var t, n = []; !(t = e.next()).done;) n.push(t.value);
                                    return n
                                }(e[Je]());
                                var t = mi(e);
                                return (t == k ? sn : t == A ? dn : Ul)(e)
                            }

                            function hl(e) {
                                return e ? (e = vl(e)) === p || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
                            }

                            function gl(e) {
                                var t = hl(e),
                                    n = t % 1;
                                return t == t ? n ? t - n : t : 0
                            }

                            function ml(e) {
                                return e ? ur(gl(e), 0, m) : 0
                            }

                            function vl(e) {
                                if ("number" == typeof e) return e;
                                if (sl(e)) return g;
                                if (tl(e)) {
                                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                                    e = tl(t) ? t + "" : t
                                }
                                if ("string" != typeof e) return 0 === e ? e : +e;
                                e = Jt(e);
                                var n = ve.test(e);
                                return n || be.test(e) ? dt(e.slice(2), n ? 2 : 8) : me.test(e) ? g : +e
                            }

                            function yl(e) {
                                return Oo(e, Il(e))
                            }

                            function bl(e) {
                                return null == e ? "" : co(e)
                            }
                            var wl = Do((function(e, t) {
                                    if (ki(t) || Qa(t)) Oo(t, Ol(t), e);
                                    else
                                        for (var n in t) Me.call(t, n) && nr(e, n, t[n])
                                })),
                                _l = Do((function(e, t) {
                                    Oo(t, Il(t), e)
                                })),
                                xl = Do((function(e, t, n, r) {
                                    Oo(t, Il(t), e, r)
                                })),
                                Sl = Do((function(e, t, n, r) {
                                    Oo(t, Ol(t), e, r)
                                })),
                                El = oi(lr);
                            var kl = Gr((function(e, t) {
                                    e = Te(e);
                                    var n = -1,
                                        r = t.length,
                                        i = r > 2 ? t[2] : o;
                                    for (i && _i(t[0], t[1], i) && (r = 1); ++n < r;)
                                        for (var a = t[n], l = Il(a), u = -1, s = l.length; ++u < s;) {
                                            var c = l[u],
                                                f = e[c];
                                            (f === o || Ua(f, Ie[c]) && !Me.call(e, c)) && (e[c] = a[c])
                                        }
                                    return e
                                })),
                                Cl = Gr((function(e) {
                                    return e.push(o, ti), Tt(jl, o, e)
                                }));

                            function Tl(e, t, n) {
                                var r = null == e ? o : Er(e, t);
                                return r === o ? n : r
                            }

                            function Nl(e, t) {
                                return null != e && vi(e, t, Rr)
                            }
                            var Rl = Ho((function(e, t, n) {
                                    null != t && "function" != typeof t.toString && (t = Be.call(t)), e[t] = n
                                }), tu(ou)),
                                Al = Ho((function(e, t, n) {
                                    null != t && "function" != typeof t.toString && (t = Be.call(t)), Me.call(e, t) ? e[t].push(n) : e[t] = [n]
                                }), ci),
                                Ll = Gr(Lr);

                            function Ol(e) {
                                return Qa(e) ? Gn(e) : Pr(e)
                            }

                            function Il(e) {
                                return Qa(e) ? Gn(e, !0) : zr(e)
                            }
                            var Dl = Do((function(e, t, n) {
                                    Hr(e, t, n)
                                })),
                                jl = Do((function(e, t, n, r) {
                                    Hr(e, t, n, r)
                                })),
                                Ml = oi((function(e, t) {
                                    var n = {};
                                    if (null == e) return n;
                                    var r = !1;
                                    t = jt(t, (function(t) {
                                        return t = _o(t, e), r || (r = t.length > 1), t
                                    })), Oo(e, ai(e), n), r && (n = sr(n, 7, ni));
                                    for (var o = t.length; o--;) po(n, t[o]);
                                    return n
                                }));
                            var Pl = oi((function(e, t) {
                                return null == e ? {} : function(e, t) {
                                    return Yr(e, t, (function(t, n) {
                                        return Nl(e, n)
                                    }))
                                }(e, t)
                            }));

                            function zl(e, t) {
                                if (null == e) return {};
                                var n = jt(ai(e), (function(e) {
                                    return [e]
                                }));
                                return t = ci(t), Yr(e, n, (function(e, n) {
                                    return t(e, n[0])
                                }))
                            }
                            var Bl = Jo(Ol),
                                Fl = Jo(Il);

                            function Ul(e) {
                                return null == e ? [] : en(e, Ol(e))
                            }
                            var Wl = zo((function(e, t, n) {
                                return t = t.toLowerCase(), e + (n ? Hl(t) : t)
                            }));

                            function Hl(e) {
                                return Gl(bl(e).toLowerCase())
                            }

                            function $l(e) {
                                return (e = bl(e)) && e.replace(_e, on).replace(tt, "")
                            }
                            var Vl = zo((function(e, t, n) {
                                    return e + (n ? "-" : "") + t.toLowerCase()
                                })),
                                Yl = zo((function(e, t, n) {
                                    return e + (n ? " " : "") + t.toLowerCase()
                                })),
                                Ql = Po("toLowerCase");
                            var ql = zo((function(e, t, n) {
                                return e + (n ? "_" : "") + t.toLowerCase()
                            }));
                            var Kl = zo((function(e, t, n) {
                                return e + (n ? " " : "") + Gl(t)
                            }));
                            var Xl = zo((function(e, t, n) {
                                    return e + (n ? " " : "") + t.toUpperCase()
                                })),
                                Gl = Po("toUpperCase");

                            function Jl(e, t, n) {
                                return e = bl(e), (t = n ? o : t) === o ? function(e) {
                                    return it.test(e)
                                }(e) ? function(e) {
                                    return e.match(rt) || []
                                }(e) : function(e) {
                                    return e.match(fe) || []
                                }(e) : e.match(t) || []
                            }
                            var Zl = Gr((function(e, t) {
                                    try {
                                        return Tt(e, o, t)
                                    } catch (e) {
                                        return Ga(e) ? e : new Ee(e)
                                    }
                                })),
                                eu = oi((function(e, t) {
                                    return Rt(t, (function(t) {
                                        t = zi(t), ar(e, t, Aa(e[t], e))
                                    })), e
                                }));

                            function tu(e) {
                                return function() {
                                    return e
                                }
                            }
                            var nu = Uo(),
                                ru = Uo(!0);

                            function ou(e) {
                                return e
                            }

                            function iu(e) {
                                return Mr("function" == typeof e ? e : sr(e, 1))
                            }
                            var au = Gr((function(e, t) {
                                    return function(n) {
                                        return Lr(n, e, t)
                                    }
                                })),
                                lu = Gr((function(e, t) {
                                    return function(n) {
                                        return Lr(e, n, t)
                                    }
                                }));

                            function uu(e, t, n) {
                                var r = Ol(t),
                                    o = Sr(t, r);
                                null != n || tl(t) && (o.length || !r.length) || (n = t, t = e, e = this, o = Sr(t, Ol(t)));
                                var i = !(tl(n) && "chain" in n && !n.chain),
                                    a = Ja(e);
                                return Rt(o, (function(n) {
                                    var r = t[n];
                                    e[n] = r, a && (e.prototype[n] = function() {
                                        var t = this.__chain__;
                                        if (i || t) {
                                            var n = e(this.__wrapped__);
                                            return (n.__actions__ = Lo(this.__actions__)).push({
                                                func: r,
                                                args: arguments,
                                                thisArg: e
                                            }), n.__chain__ = t, n
                                        }
                                        return r.apply(e, Mt([this.value()], arguments))
                                    })
                                })), e
                            }

                            function su() {}
                            var cu = Vo(jt),
                                fu = Vo(Lt),
                                du = Vo(Bt);

                            function pu(e) {
                                return xi(e) ? Qt(zi(e)) : function(e) {
                                    return function(t) {
                                        return Er(t, e)
                                    }
                                }(e)
                            }
                            var hu = Qo(),
                                gu = Qo(!0);

                            function mu() {
                                return []
                            }

                            function vu() {
                                return !1
                            }
                            var yu = $o((function(e, t) {
                                    return e + t
                                }), 0),
                                bu = Xo("ceil"),
                                wu = $o((function(e, t) {
                                    return e / t
                                }), 1),
                                _u = Xo("floor");
                            var xu, Su = $o((function(e, t) {
                                    return e * t
                                }), 1),
                                Eu = Xo("round"),
                                ku = $o((function(e, t) {
                                    return e - t
                                }), 0);
                            return Un.after = function(e, t) {
                                if ("function" != typeof t) throw new Ae(i);
                                return e = gl(e),
                                    function() {
                                        if (--e < 1) return t.apply(this, arguments)
                                    }
                            }, Un.ary = Na, Un.assign = wl, Un.assignIn = _l, Un.assignInWith = xl, Un.assignWith = Sl, Un.at = El, Un.before = Ra, Un.bind = Aa, Un.bindAll = eu, Un.bindKey = La, Un.castArray = function() {
                                if (!arguments.length) return [];
                                var e = arguments[0];
                                return Va(e) ? e : [e]
                            }, Un.chain = pa, Un.chunk = function(e, t, n) {
                                t = (n ? _i(e, t, n) : t === o) ? 1 : bn(gl(t), 0);
                                var i = null == e ? 0 : e.length;
                                if (!i || t < 1) return [];
                                for (var a = 0, l = 0, u = r(ht(i / t)); a < i;) u[l++] = oo(e, a, a += t);
                                return u
                            }, Un.compact = function(e) {
                                for (var t = -1, n = null == e ? 0 : e.length, r = 0, o = []; ++t < n;) {
                                    var i = e[t];
                                    i && (o[r++] = i)
                                }
                                return o
                            }, Un.concat = function() {
                                var e = arguments.length;
                                if (!e) return [];
                                for (var t = r(e - 1), n = arguments[0], o = e; o--;) t[o - 1] = arguments[o];
                                return Mt(Va(n) ? Lo(n) : [n], yr(t, 1))
                            }, Un.cond = function(e) {
                                var t = null == e ? 0 : e.length,
                                    n = ci();
                                return e = t ? jt(e, (function(e) {
                                    if ("function" != typeof e[1]) throw new Ae(i);
                                    return [n(e[0]), e[1]]
                                })) : [], Gr((function(n) {
                                    for (var r = -1; ++r < t;) {
                                        var o = e[r];
                                        if (Tt(o[0], this, n)) return Tt(o[1], this, n)
                                    }
                                }))
                            }, Un.conforms = function(e) {
                                return function(e) {
                                    var t = Ol(e);
                                    return function(n) {
                                        return cr(n, e, t)
                                    }
                                }(sr(e, 1))
                            }, Un.constant = tu, Un.countBy = ma, Un.create = function(e, t) {
                                var n = Wn(e);
                                return null == t ? n : ir(n, t)
                            }, Un.curry = function e(t, n, r) {
                                var i = Zo(t, 8, o, o, o, o, o, n = r ? o : n);
                                return i.placeholder = e.placeholder, i
                            }, Un.curryRight = function e(t, n, r) {
                                var i = Zo(t, u, o, o, o, o, o, n = r ? o : n);
                                return i.placeholder = e.placeholder, i
                            }, Un.debounce = Oa, Un.defaults = kl, Un.defaultsDeep = Cl, Un.defer = Ia, Un.delay = Da, Un.difference = Ui, Un.differenceBy = Wi, Un.differenceWith = Hi, Un.drop = function(e, t, n) {
                                var r = null == e ? 0 : e.length;
                                return r ? oo(e, (t = n || t === o ? 1 : gl(t)) < 0 ? 0 : t, r) : []
                            }, Un.dropRight = function(e, t, n) {
                                var r = null == e ? 0 : e.length;
                                return r ? oo(e, 0, (t = r - (t = n || t === o ? 1 : gl(t))) < 0 ? 0 : t) : []
                            }, Un.dropRightWhile = function(e, t) {
                                return e && e.length ? go(e, ci(t, 3), !0, !0) : []
                            }, Un.dropWhile = function(e, t) {
                                return e && e.length ? go(e, ci(t, 3), !0) : []
                            }, Un.fill = function(e, t, n, r) {
                                var i = null == e ? 0 : e.length;
                                return i ? (n && "number" != typeof n && _i(e, t, n) && (n = 0, r = i), function(e, t, n, r) {
                                    var i = e.length;
                                    for ((n = gl(n)) < 0 && (n = -n > i ? 0 : i + n), (r = r === o || r > i ? i : gl(r)) < 0 && (r += i), r = n > r ? 0 : ml(r); n < r;) e[n++] = t;
                                    return e
                                }(e, t, n, r)) : []
                            }, Un.filter = function(e, t) {
                                return (Va(e) ? Ot : vr)(e, ci(t, 3))
                            }, Un.flatMap = function(e, t) {
                                return yr(Ea(e, t), 1)
                            }, Un.flatMapDeep = function(e, t) {
                                return yr(Ea(e, t), p)
                            }, Un.flatMapDepth = function(e, t, n) {
                                return n = n === o ? 1 : gl(n), yr(Ea(e, t), n)
                            }, Un.flatten = Yi, Un.flattenDeep = function(e) {
                                return (null == e ? 0 : e.length) ? yr(e, p) : []
                            }, Un.flattenDepth = function(e, t) {
                                return (null == e ? 0 : e.length) ? yr(e, t = t === o ? 1 : gl(t)) : []
                            }, Un.flip = function(e) {
                                return Zo(e, 512)
                            }, Un.flow = nu, Un.flowRight = ru, Un.fromPairs = function(e) {
                                for (var t = -1, n = null == e ? 0 : e.length, r = {}; ++t < n;) {
                                    var o = e[t];
                                    r[o[0]] = o[1]
                                }
                                return r
                            }, Un.functions = function(e) {
                                return null == e ? [] : Sr(e, Ol(e))
                            }, Un.functionsIn = function(e) {
                                return null == e ? [] : Sr(e, Il(e))
                            }, Un.groupBy = _a, Un.initial = function(e) {
                                return (null == e ? 0 : e.length) ? oo(e, 0, -1) : []
                            }, Un.intersection = qi, Un.intersectionBy = Ki, Un.intersectionWith = Xi, Un.invert = Rl, Un.invertBy = Al, Un.invokeMap = xa, Un.iteratee = iu, Un.keyBy = Sa, Un.keys = Ol, Un.keysIn = Il, Un.map = Ea, Un.mapKeys = function(e, t) {
                                var n = {};
                                return t = ci(t, 3), _r(e, (function(e, r, o) {
                                    ar(n, t(e, r, o), e)
                                })), n
                            }, Un.mapValues = function(e, t) {
                                var n = {};
                                return t = ci(t, 3), _r(e, (function(e, r, o) {
                                    ar(n, r, t(e, r, o))
                                })), n
                            }, Un.matches = function(e) {
                                return Ur(sr(e, 1))
                            }, Un.matchesProperty = function(e, t) {
                                return Wr(e, sr(t, 1))
                            }, Un.memoize = ja, Un.merge = Dl, Un.mergeWith = jl, Un.method = au, Un.methodOf = lu, Un.mixin = uu, Un.negate = Ma, Un.nthArg = function(e) {
                                return e = gl(e), Gr((function(t) {
                                    return $r(t, e)
                                }))
                            }, Un.omit = Ml, Un.omitBy = function(e, t) {
                                return zl(e, Ma(ci(t)))
                            }, Un.once = function(e) {
                                return Ra(2, e)
                            }, Un.orderBy = function(e, t, n, r) {
                                return null == e ? [] : (Va(t) || (t = null == t ? [] : [t]), Va(n = r ? o : n) || (n = null == n ? [] : [n]), Vr(e, t, n))
                            }, Un.over = cu, Un.overArgs = Pa, Un.overEvery = fu, Un.overSome = du, Un.partial = za, Un.partialRight = Ba, Un.partition = ka, Un.pick = Pl, Un.pickBy = zl, Un.property = pu, Un.propertyOf = function(e) {
                                return function(t) {
                                    return null == e ? o : Er(e, t)
                                }
                            }, Un.pull = Ji, Un.pullAll = Zi, Un.pullAllBy = function(e, t, n) {
                                return e && e.length && t && t.length ? Qr(e, t, ci(n, 2)) : e
                            }, Un.pullAllWith = function(e, t, n) {
                                return e && e.length && t && t.length ? Qr(e, t, o, n) : e
                            }, Un.pullAt = ea, Un.range = hu, Un.rangeRight = gu, Un.rearg = Fa, Un.reject = function(e, t) {
                                return (Va(e) ? Ot : vr)(e, Ma(ci(t, 3)))
                            }, Un.remove = function(e, t) {
                                var n = [];
                                if (!e || !e.length) return n;
                                var r = -1,
                                    o = [],
                                    i = e.length;
                                for (t = ci(t, 3); ++r < i;) {
                                    var a = e[r];
                                    t(a, r, e) && (n.push(a), o.push(r))
                                }
                                return qr(e, o), n
                            }, Un.rest = function(e, t) {
                                if ("function" != typeof e) throw new Ae(i);
                                return Gr(e, t = t === o ? t : gl(t))
                            }, Un.reverse = ta, Un.sampleSize = function(e, t, n) {
                                return t = (n ? _i(e, t, n) : t === o) ? 1 : gl(t), (Va(e) ? Zn : Zr)(e, t)
                            }, Un.set = function(e, t, n) {
                                return null == e ? e : eo(e, t, n)
                            }, Un.setWith = function(e, t, n, r) {
                                return r = "function" == typeof r ? r : o, null == e ? e : eo(e, t, n, r)
                            }, Un.shuffle = function(e) {
                                return (Va(e) ? er : ro)(e)
                            }, Un.slice = function(e, t, n) {
                                var r = null == e ? 0 : e.length;
                                return r ? (n && "number" != typeof n && _i(e, t, n) ? (t = 0, n = r) : (t = null == t ? 0 : gl(t), n = n === o ? r : gl(n)), oo(e, t, n)) : []
                            }, Un.sortBy = Ca, Un.sortedUniq = function(e) {
                                return e && e.length ? uo(e) : []
                            }, Un.sortedUniqBy = function(e, t) {
                                return e && e.length ? uo(e, ci(t, 2)) : []
                            }, Un.split = function(e, t, n) {
                                return n && "number" != typeof n && _i(e, t, n) && (t = n = o), (n = n === o ? m : n >>> 0) ? (e = bl(e)) && ("string" == typeof t || null != t && !al(t)) && !(t = co(t)) && un(e) ? So(gn(e), 0, n) : e.split(t, n) : []
                            }, Un.spread = function(e, t) {
                                if ("function" != typeof e) throw new Ae(i);
                                return t = null == t ? 0 : bn(gl(t), 0), Gr((function(n) {
                                    var r = n[t],
                                        o = So(n, 0, t);
                                    return r && Mt(o, r), Tt(e, this, o)
                                }))
                            }, Un.tail = function(e) {
                                var t = null == e ? 0 : e.length;
                                return t ? oo(e, 1, t) : []
                            }, Un.take = function(e, t, n) {
                                return e && e.length ? oo(e, 0, (t = n || t === o ? 1 : gl(t)) < 0 ? 0 : t) : []
                            }, Un.takeRight = function(e, t, n) {
                                var r = null == e ? 0 : e.length;
                                return r ? oo(e, (t = r - (t = n || t === o ? 1 : gl(t))) < 0 ? 0 : t, r) : []
                            }, Un.takeRightWhile = function(e, t) {
                                return e && e.length ? go(e, ci(t, 3), !1, !0) : []
                            }, Un.takeWhile = function(e, t) {
                                return e && e.length ? go(e, ci(t, 3)) : []
                            }, Un.tap = function(e, t) {
                                return t(e), e
                            }, Un.throttle = function(e, t, n) {
                                var r = !0,
                                    o = !0;
                                if ("function" != typeof e) throw new Ae(i);
                                return tl(n) && (r = "leading" in n ? !!n.leading : r, o = "trailing" in n ? !!n.trailing : o), Oa(e, t, {
                                    leading: r,
                                    maxWait: t,
                                    trailing: o
                                })
                            }, Un.thru = ha, Un.toArray = pl, Un.toPairs = Bl, Un.toPairsIn = Fl, Un.toPath = function(e) {
                                return Va(e) ? jt(e, zi) : sl(e) ? [e] : Lo(Pi(bl(e)))
                            }, Un.toPlainObject = yl, Un.transform = function(e, t, n) {
                                var r = Va(e),
                                    o = r || Ka(e) || cl(e);
                                if (t = ci(t, 4), null == n) {
                                    var i = e && e.constructor;
                                    n = o ? r ? new i : [] : tl(e) && Ja(i) ? Wn(Qe(e)) : {}
                                }
                                return (o ? Rt : _r)(e, (function(e, r, o) {
                                    return t(n, e, r, o)
                                })), n
                            }, Un.unary = function(e) {
                                return Na(e, 1)
                            }, Un.union = na, Un.unionBy = ra, Un.unionWith = oa, Un.uniq = function(e) {
                                return e && e.length ? fo(e) : []
                            }, Un.uniqBy = function(e, t) {
                                return e && e.length ? fo(e, ci(t, 2)) : []
                            }, Un.uniqWith = function(e, t) {
                                return t = "function" == typeof t ? t : o, e && e.length ? fo(e, o, t) : []
                            }, Un.unset = function(e, t) {
                                return null == e || po(e, t)
                            }, Un.unzip = ia, Un.unzipWith = aa, Un.update = function(e, t, n) {
                                return null == e ? e : ho(e, t, wo(n))
                            }, Un.updateWith = function(e, t, n, r) {
                                return r = "function" == typeof r ? r : o, null == e ? e : ho(e, t, wo(n), r)
                            }, Un.values = Ul, Un.valuesIn = function(e) {
                                return null == e ? [] : en(e, Il(e))
                            }, Un.without = la, Un.words = Jl, Un.wrap = function(e, t) {
                                return za(wo(t), e)
                            }, Un.xor = ua, Un.xorBy = sa, Un.xorWith = ca, Un.zip = fa, Un.zipObject = function(e, t) {
                                return yo(e || [], t || [], nr)
                            }, Un.zipObjectDeep = function(e, t) {
                                return yo(e || [], t || [], eo)
                            }, Un.zipWith = da, Un.entries = Bl, Un.entriesIn = Fl, Un.extend = _l, Un.extendWith = xl, uu(Un, Un), Un.add = yu, Un.attempt = Zl, Un.camelCase = Wl, Un.capitalize = Hl, Un.ceil = bu, Un.clamp = function(e, t, n) {
                                return n === o && (n = t, t = o), n !== o && (n = (n = vl(n)) == n ? n : 0), t !== o && (t = (t = vl(t)) == t ? t : 0), ur(vl(e), t, n)
                            }, Un.clone = function(e) {
                                return sr(e, 4)
                            }, Un.cloneDeep = function(e) {
                                return sr(e, 5)
                            }, Un.cloneDeepWith = function(e, t) {
                                return sr(e, 5, t = "function" == typeof t ? t : o)
                            }, Un.cloneWith = function(e, t) {
                                return sr(e, 4, t = "function" == typeof t ? t : o)
                            }, Un.conformsTo = function(e, t) {
                                return null == t || cr(e, t, Ol(t))
                            }, Un.deburr = $l, Un.defaultTo = function(e, t) {
                                return null == e || e != e ? t : e
                            }, Un.divide = wu, Un.endsWith = function(e, t, n) {
                                e = bl(e), t = co(t);
                                var r = e.length,
                                    i = n = n === o ? r : ur(gl(n), 0, r);
                                return (n -= t.length) >= 0 && e.slice(n, i) == t
                            }, Un.eq = Ua, Un.escape = function(e) {
                                return (e = bl(e)) && G.test(e) ? e.replace(K, an) : e
                            }, Un.escapeRegExp = function(e) {
                                return (e = bl(e)) && ie.test(e) ? e.replace(oe, "\\$&") : e
                            }, Un.every = function(e, t, n) {
                                var r = Va(e) ? Lt : gr;
                                return n && _i(e, t, n) && (t = o), r(e, ci(t, 3))
                            }, Un.find = va, Un.findIndex = $i, Un.findKey = function(e, t) {
                                return Ut(e, ci(t, 3), _r)
                            }, Un.findLast = ya, Un.findLastIndex = Vi, Un.findLastKey = function(e, t) {
                                return Ut(e, ci(t, 3), xr)
                            }, Un.floor = _u, Un.forEach = ba, Un.forEachRight = wa, Un.forIn = function(e, t) {
                                return null == e ? e : br(e, ci(t, 3), Il)
                            }, Un.forInRight = function(e, t) {
                                return null == e ? e : wr(e, ci(t, 3), Il)
                            }, Un.forOwn = function(e, t) {
                                return e && _r(e, ci(t, 3))
                            }, Un.forOwnRight = function(e, t) {
                                return e && xr(e, ci(t, 3))
                            }, Un.get = Tl, Un.gt = Wa, Un.gte = Ha, Un.has = function(e, t) {
                                return null != e && vi(e, t, Nr)
                            }, Un.hasIn = Nl, Un.head = Qi, Un.identity = ou, Un.includes = function(e, t, n, r) {
                                e = Qa(e) ? e : Ul(e), n = n && !r ? gl(n) : 0;
                                var o = e.length;
                                return n < 0 && (n = bn(o + n, 0)), ul(e) ? n <= o && e.indexOf(t, n) > -1 : !!o && Ht(e, t, n) > -1
                            }, Un.indexOf = function(e, t, n) {
                                var r = null == e ? 0 : e.length;
                                if (!r) return -1;
                                var o = null == n ? 0 : gl(n);
                                return o < 0 && (o = bn(r + o, 0)), Ht(e, t, o)
                            }, Un.inRange = function(e, t, n) {
                                return t = hl(t), n === o ? (n = t, t = 0) : n = hl(n),
                                    function(e, t, n) {
                                        return e >= wn(t, n) && e < bn(t, n)
                                    }(e = vl(e), t, n)
                            }, Un.invoke = Ll, Un.isArguments = $a, Un.isArray = Va, Un.isArrayBuffer = Ya, Un.isArrayLike = Qa, Un.isArrayLikeObject = qa, Un.isBoolean = function(e) {
                                return !0 === e || !1 === e || nl(e) && Cr(e) == w
                            }, Un.isBuffer = Ka, Un.isDate = Xa, Un.isElement = function(e) {
                                return nl(e) && 1 === e.nodeType && !il(e)
                            }, Un.isEmpty = function(e) {
                                if (null == e) return !0;
                                if (Qa(e) && (Va(e) || "string" == typeof e || "function" == typeof e.splice || Ka(e) || cl(e) || $a(e))) return !e.length;
                                var t = mi(e);
                                if (t == k || t == A) return !e.size;
                                if (ki(e)) return !Pr(e).length;
                                for (var n in e)
                                    if (Me.call(e, n)) return !1;
                                return !0
                            }, Un.isEqual = function(e, t) {
                                return Ir(e, t)
                            }, Un.isEqualWith = function(e, t, n) {
                                var r = (n = "function" == typeof n ? n : o) ? n(e, t) : o;
                                return r === o ? Ir(e, t, o, n) : !!r
                            }, Un.isError = Ga, Un.isFinite = function(e) {
                                return "number" == typeof e && wt(e)
                            }, Un.isFunction = Ja, Un.isInteger = Za, Un.isLength = el, Un.isMap = rl, Un.isMatch = function(e, t) {
                                return e === t || Dr(e, t, di(t))
                            }, Un.isMatchWith = function(e, t, n) {
                                return n = "function" == typeof n ? n : o, Dr(e, t, di(t), n)
                            }, Un.isNaN = function(e) {
                                return ol(e) && e != +e
                            }, Un.isNative = function(e) {
                                if (Ei(e)) throw new Ee("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
                                return jr(e)
                            }, Un.isNil = function(e) {
                                return null == e
                            }, Un.isNull = function(e) {
                                return null === e
                            }, Un.isNumber = ol, Un.isObject = tl, Un.isObjectLike = nl, Un.isPlainObject = il, Un.isRegExp = al, Un.isSafeInteger = function(e) {
                                return Za(e) && e >= -9007199254740991 && e <= h
                            }, Un.isSet = ll, Un.isString = ul, Un.isSymbol = sl, Un.isTypedArray = cl, Un.isUndefined = function(e) {
                                return e === o
                            }, Un.isWeakMap = function(e) {
                                return nl(e) && mi(e) == I
                            }, Un.isWeakSet = function(e) {
                                return nl(e) && "[object WeakSet]" == Cr(e)
                            }, Un.join = function(e, t) {
                                return null == e ? "" : Ft.call(e, t)
                            }, Un.kebabCase = Vl, Un.last = Gi, Un.lastIndexOf = function(e, t, n) {
                                var r = null == e ? 0 : e.length;
                                if (!r) return -1;
                                var i = r;
                                return n !== o && (i = (i = gl(n)) < 0 ? bn(r + i, 0) : wn(i, r - 1)), t == t ? function(e, t, n) {
                                    for (var r = n + 1; r--;)
                                        if (e[r] === t) return r;
                                    return r
                                }(e, t, i) : Wt(e, Vt, i, !0)
                            }, Un.lowerCase = Yl, Un.lowerFirst = Ql, Un.lt = fl, Un.lte = dl, Un.max = function(e) {
                                return e && e.length ? mr(e, ou, Tr) : o
                            }, Un.maxBy = function(e, t) {
                                return e && e.length ? mr(e, ci(t, 2), Tr) : o
                            }, Un.mean = function(e) {
                                return Yt(e, ou)
                            }, Un.meanBy = function(e, t) {
                                return Yt(e, ci(t, 2))
                            }, Un.min = function(e) {
                                return e && e.length ? mr(e, ou, Br) : o
                            }, Un.minBy = function(e, t) {
                                return e && e.length ? mr(e, ci(t, 2), Br) : o
                            }, Un.stubArray = mu, Un.stubFalse = vu, Un.stubObject = function() {
                                return {}
                            }, Un.stubString = function() {
                                return ""
                            }, Un.stubTrue = function() {
                                return !0
                            }, Un.multiply = Su, Un.nth = function(e, t) {
                                return e && e.length ? $r(e, gl(t)) : o
                            }, Un.noConflict = function() {
                                return gt._ === this && (gt._ = Ue), this
                            }, Un.noop = su, Un.now = Ta, Un.pad = function(e, t, n) {
                                e = bl(e);
                                var r = (t = gl(t)) ? hn(e) : 0;
                                if (!t || r >= t) return e;
                                var o = (t - r) / 2;
                                return Yo(mt(o), n) + e + Yo(ht(o), n)
                            }, Un.padEnd = function(e, t, n) {
                                e = bl(e);
                                var r = (t = gl(t)) ? hn(e) : 0;
                                return t && r < t ? e + Yo(t - r, n) : e
                            }, Un.padStart = function(e, t, n) {
                                e = bl(e);
                                var r = (t = gl(t)) ? hn(e) : 0;
                                return t && r < t ? Yo(t - r, n) + e : e
                            }, Un.parseInt = function(e, t, n) {
                                return n || null == t ? t = 0 : t && (t = +t), xn(bl(e).replace(ae, ""), t || 0)
                            }, Un.random = function(e, t, n) {
                                if (n && "boolean" != typeof n && _i(e, t, n) && (t = n = o), n === o && ("boolean" == typeof t ? (n = t, t = o) : "boolean" == typeof e && (n = e, e = o)), e === o && t === o ? (e = 0, t = 1) : (e = hl(e), t === o ? (t = e, e = 0) : t = hl(t)), e > t) {
                                    var r = e;
                                    e = t, t = r
                                }
                                if (n || e % 1 || t % 1) {
                                    var i = Sn();
                                    return wn(e + i * (t - e + ft("1e-" + ((i + "").length - 1))), t)
                                }
                                return Kr(e, t)
                            }, Un.reduce = function(e, t, n) {
                                var r = Va(e) ? Pt : Kt,
                                    o = arguments.length < 3;
                                return r(e, ci(t, 4), n, o, pr)
                            }, Un.reduceRight = function(e, t, n) {
                                var r = Va(e) ? zt : Kt,
                                    o = arguments.length < 3;
                                return r(e, ci(t, 4), n, o, hr)
                            }, Un.repeat = function(e, t, n) {
                                return t = (n ? _i(e, t, n) : t === o) ? 1 : gl(t), Xr(bl(e), t)
                            }, Un.replace = function() {
                                var e = arguments,
                                    t = bl(e[0]);
                                return e.length < 3 ? t : t.replace(e[1], e[2])
                            }, Un.result = function(e, t, n) {
                                var r = -1,
                                    i = (t = _o(t, e)).length;
                                for (i || (i = 1, e = o); ++r < i;) {
                                    var a = null == e ? o : e[zi(t[r])];
                                    a === o && (r = i, a = n), e = Ja(a) ? a.call(e) : a
                                }
                                return e
                            }, Un.round = Eu, Un.runInContext = e, Un.sample = function(e) {
                                return (Va(e) ? Jn : Jr)(e)
                            }, Un.size = function(e) {
                                if (null == e) return 0;
                                if (Qa(e)) return ul(e) ? hn(e) : e.length;
                                var t = mi(e);
                                return t == k || t == A ? e.size : Pr(e).length
                            }, Un.snakeCase = ql, Un.some = function(e, t, n) {
                                var r = Va(e) ? Bt : io;
                                return n && _i(e, t, n) && (t = o), r(e, ci(t, 3))
                            }, Un.sortedIndex = function(e, t) {
                                return ao(e, t)
                            }, Un.sortedIndexBy = function(e, t, n) {
                                return lo(e, t, ci(n, 2))
                            }, Un.sortedIndexOf = function(e, t) {
                                var n = null == e ? 0 : e.length;
                                if (n) {
                                    var r = ao(e, t);
                                    if (r < n && Ua(e[r], t)) return r
                                }
                                return -1
                            }, Un.sortedLastIndex = function(e, t) {
                                return ao(e, t, !0)
                            }, Un.sortedLastIndexBy = function(e, t, n) {
                                return lo(e, t, ci(n, 2), !0)
                            }, Un.sortedLastIndexOf = function(e, t) {
                                if (null == e ? 0 : e.length) {
                                    var n = ao(e, t, !0) - 1;
                                    if (Ua(e[n], t)) return n
                                }
                                return -1
                            }, Un.startCase = Kl, Un.startsWith = function(e, t, n) {
                                return e = bl(e), n = null == n ? 0 : ur(gl(n), 0, e.length), t = co(t), e.slice(n, n + t.length) == t
                            }, Un.subtract = ku, Un.sum = function(e) {
                                return e && e.length ? Xt(e, ou) : 0
                            }, Un.sumBy = function(e, t) {
                                return e && e.length ? Xt(e, ci(t, 2)) : 0
                            }, Un.template = function(e, t, n) {
                                var r = Un.templateSettings;
                                n && _i(e, t, n) && (t = o), e = bl(e), t = xl({}, t, r, ei);
                                var i, a, l = xl({}, t.imports, r.imports, ei),
                                    u = Ol(l),
                                    s = en(l, u),
                                    c = 0,
                                    f = t.interpolate || xe,
                                    d = "__p += '",
                                    p = Ne((t.escape || xe).source + "|" + f.source + "|" + (f === ee ? he : xe).source + "|" + (t.evaluate || xe).source + "|$", "g"),
                                    h = "//# sourceURL=" + (Me.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++lt + "]") + "\n";
                                e.replace(p, (function(t, n, r, o, l, u) {
                                    return r || (r = o), d += e.slice(c, u).replace(Se, ln), n && (i = !0, d += "' +\n__e(" + n + ") +\n'"), l && (a = !0, d += "';\n" + l + ";\n__p += '"), r && (d += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"), c = u + t.length, t
                                })), d += "';\n";
                                var g = Me.call(t, "variable") && t.variable;
                                if (g) {
                                    if (de.test(g)) throw new Ee("Invalid `variable` option passed into `_.template`")
                                } else d = "with (obj) {\n" + d + "\n}\n";
                                d = (a ? d.replace(V, "") : d).replace(Y, "$1").replace(Q, "$1;"), d = "function(" + (g || "obj") + ") {\n" + (g ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (i ? ", __e = _.escape" : "") + (a ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + d + "return __p\n}";
                                var m = Zl((function() {
                                    return ke(u, h + "return " + d).apply(o, s)
                                }));
                                if (m.source = d, Ga(m)) throw m;
                                return m
                            }, Un.times = function(e, t) {
                                if ((e = gl(e)) < 1 || e > h) return [];
                                var n = m,
                                    r = wn(e, m);
                                t = ci(t), e -= m;
                                for (var o = Gt(r, t); ++n < e;) t(n);
                                return o
                            }, Un.toFinite = hl, Un.toInteger = gl, Un.toLength = ml, Un.toLower = function(e) {
                                return bl(e).toLowerCase()
                            }, Un.toNumber = vl, Un.toSafeInteger = function(e) {
                                return e ? ur(gl(e), -9007199254740991, h) : 0 === e ? e : 0
                            }, Un.toString = bl, Un.toUpper = function(e) {
                                return bl(e).toUpperCase()
                            }, Un.trim = function(e, t, n) {
                                if ((e = bl(e)) && (n || t === o)) return Jt(e);
                                if (!e || !(t = co(t))) return e;
                                var r = gn(e),
                                    i = gn(t);
                                return So(r, nn(r, i), rn(r, i) + 1).join("")
                            }, Un.trimEnd = function(e, t, n) {
                                if ((e = bl(e)) && (n || t === o)) return e.slice(0, mn(e) + 1);
                                if (!e || !(t = co(t))) return e;
                                var r = gn(e);
                                return So(r, 0, rn(r, gn(t)) + 1).join("")
                            }, Un.trimStart = function(e, t, n) {
                                if ((e = bl(e)) && (n || t === o)) return e.replace(ae, "");
                                if (!e || !(t = co(t))) return e;
                                var r = gn(e);
                                return So(r, nn(r, gn(t))).join("")
                            }, Un.truncate = function(e, t) {
                                var n = 30,
                                    r = "...";
                                if (tl(t)) {
                                    var i = "separator" in t ? t.separator : i;
                                    n = "length" in t ? gl(t.length) : n, r = "omission" in t ? co(t.omission) : r
                                }
                                var a = (e = bl(e)).length;
                                if (un(e)) {
                                    var l = gn(e);
                                    a = l.length
                                }
                                if (n >= a) return e;
                                var u = n - hn(r);
                                if (u < 1) return r;
                                var s = l ? So(l, 0, u).join("") : e.slice(0, u);
                                if (i === o) return s + r;
                                if (l && (u += s.length - u), al(i)) {
                                    if (e.slice(u).search(i)) {
                                        var c, f = s;
                                        for (i.global || (i = Ne(i.source, bl(ge.exec(i)) + "g")), i.lastIndex = 0; c = i.exec(f);) var d = c.index;
                                        s = s.slice(0, d === o ? u : d)
                                    }
                                } else if (e.indexOf(co(i), u) != u) {
                                    var p = s.lastIndexOf(i);
                                    p > -1 && (s = s.slice(0, p))
                                }
                                return s + r
                            }, Un.unescape = function(e) {
                                return (e = bl(e)) && X.test(e) ? e.replace(q, vn) : e
                            }, Un.uniqueId = function(e) {
                                var t = ++Pe;
                                return bl(e) + t
                            }, Un.upperCase = Xl, Un.upperFirst = Gl, Un.each = ba, Un.eachRight = wa, Un.first = Qi, uu(Un, (xu = {}, _r(Un, (function(e, t) {
                                Me.call(Un.prototype, t) || (xu[t] = e)
                            })), xu), {
                                chain: !1
                            }), Un.VERSION = "4.17.21", Rt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], (function(e) {
                                Un[e].placeholder = Un
                            })), Rt(["drop", "take"], (function(e, t) {
                                Vn.prototype[e] = function(n) {
                                    n = n === o ? 1 : bn(gl(n), 0);
                                    var r = this.__filtered__ && !t ? new Vn(this) : this.clone();
                                    return r.__filtered__ ? r.__takeCount__ = wn(n, r.__takeCount__) : r.__views__.push({
                                        size: wn(n, m),
                                        type: e + (r.__dir__ < 0 ? "Right" : "")
                                    }), r
                                }, Vn.prototype[e + "Right"] = function(t) {
                                    return this.reverse()[e](t).reverse()
                                }
                            })), Rt(["filter", "map", "takeWhile"], (function(e, t) {
                                var n = t + 1,
                                    r = 1 == n || 3 == n;
                                Vn.prototype[e] = function(e) {
                                    var t = this.clone();
                                    return t.__iteratees__.push({
                                        iteratee: ci(e, 3),
                                        type: n
                                    }), t.__filtered__ = t.__filtered__ || r, t
                                }
                            })), Rt(["head", "last"], (function(e, t) {
                                var n = "take" + (t ? "Right" : "");
                                Vn.prototype[e] = function() {
                                    return this[n](1).value()[0]
                                }
                            })), Rt(["initial", "tail"], (function(e, t) {
                                var n = "drop" + (t ? "" : "Right");
                                Vn.prototype[e] = function() {
                                    return this.__filtered__ ? new Vn(this) : this[n](1)
                                }
                            })), Vn.prototype.compact = function() {
                                return this.filter(ou)
                            }, Vn.prototype.find = function(e) {
                                return this.filter(e).head()
                            }, Vn.prototype.findLast = function(e) {
                                return this.reverse().find(e)
                            }, Vn.prototype.invokeMap = Gr((function(e, t) {
                                return "function" == typeof e ? new Vn(this) : this.map((function(n) {
                                    return Lr(n, e, t)
                                }))
                            })), Vn.prototype.reject = function(e) {
                                return this.filter(Ma(ci(e)))
                            }, Vn.prototype.slice = function(e, t) {
                                e = gl(e);
                                var n = this;
                                return n.__filtered__ && (e > 0 || t < 0) ? new Vn(n) : (e < 0 ? n = n.takeRight(-e) : e && (n = n.drop(e)), t !== o && (n = (t = gl(t)) < 0 ? n.dropRight(-t) : n.take(t - e)), n)
                            }, Vn.prototype.takeRightWhile = function(e) {
                                return this.reverse().takeWhile(e).reverse()
                            }, Vn.prototype.toArray = function() {
                                return this.take(m)
                            }, _r(Vn.prototype, (function(e, t) {
                                var n = /^(?:filter|find|map|reject)|While$/.test(t),
                                    r = /^(?:head|last)$/.test(t),
                                    i = Un[r ? "take" + ("last" == t ? "Right" : "") : t],
                                    a = r || /^find/.test(t);
                                i && (Un.prototype[t] = function() {
                                    var t = this.__wrapped__,
                                        l = r ? [1] : arguments,
                                        u = t instanceof Vn,
                                        s = l[0],
                                        c = u || Va(t),
                                        f = function(e) {
                                            var t = i.apply(Un, Mt([e], l));
                                            return r && d ? t[0] : t
                                        };
                                    c && n && "function" == typeof s && 1 != s.length && (u = c = !1);
                                    var d = this.__chain__,
                                        p = !!this.__actions__.length,
                                        h = a && !d,
                                        g = u && !p;
                                    if (!a && c) {
                                        t = g ? t : new Vn(this);
                                        var m = e.apply(t, l);
                                        return m.__actions__.push({
                                            func: ha,
                                            args: [f],
                                            thisArg: o
                                        }), new $n(m, d)
                                    }
                                    return h && g ? e.apply(this, l) : (m = this.thru(f), h ? r ? m.value()[0] : m.value() : m)
                                })
                            })), Rt(["pop", "push", "shift", "sort", "splice", "unshift"], (function(e) {
                                var t = Le[e],
                                    n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                                    r = /^(?:pop|shift)$/.test(e);
                                Un.prototype[e] = function() {
                                    var e = arguments;
                                    if (r && !this.__chain__) {
                                        var o = this.value();
                                        return t.apply(Va(o) ? o : [], e)
                                    }
                                    return this[n]((function(n) {
                                        return t.apply(Va(n) ? n : [], e)
                                    }))
                                }
                            })), _r(Vn.prototype, (function(e, t) {
                                var n = Un[t];
                                if (n) {
                                    var r = n.name + "";
                                    Me.call(On, r) || (On[r] = []), On[r].push({
                                        name: t,
                                        func: n
                                    })
                                }
                            })), On[Wo(o, 2).name] = [{
                                name: "wrapper",
                                func: o
                            }], Vn.prototype.clone = function() {
                                var e = new Vn(this.__wrapped__);
                                return e.__actions__ = Lo(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = Lo(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = Lo(this.__views__), e
                            }, Vn.prototype.reverse = function() {
                                if (this.__filtered__) {
                                    var e = new Vn(this);
                                    e.__dir__ = -1, e.__filtered__ = !0
                                } else(e = this.clone()).__dir__ *= -1;
                                return e
                            }, Vn.prototype.value = function() {
                                var e = this.__wrapped__.value(),
                                    t = this.__dir__,
                                    n = Va(e),
                                    r = t < 0,
                                    o = n ? e.length : 0,
                                    i = function(e, t, n) {
                                        var r = -1,
                                            o = n.length;
                                        for (; ++r < o;) {
                                            var i = n[r],
                                                a = i.size;
                                            switch (i.type) {
                                                case "drop":
                                                    e += a;
                                                    break;
                                                case "dropRight":
                                                    t -= a;
                                                    break;
                                                case "take":
                                                    t = wn(t, e + a);
                                                    break;
                                                case "takeRight":
                                                    e = bn(e, t - a)
                                            }
                                        }
                                        return {
                                            start: e,
                                            end: t
                                        }
                                    }(0, o, this.__views__),
                                    a = i.start,
                                    l = i.end,
                                    u = l - a,
                                    s = r ? l : a - 1,
                                    c = this.__iteratees__,
                                    f = c.length,
                                    d = 0,
                                    p = wn(u, this.__takeCount__);
                                if (!n || !r && o == u && p == u) return mo(e, this.__actions__);
                                var h = [];
                                e: for (; u-- && d < p;) {
                                    for (var g = -1, m = e[s += t]; ++g < f;) {
                                        var v = c[g],
                                            y = v.iteratee,
                                            b = v.type,
                                            w = y(m);
                                        if (2 == b) m = w;
                                        else if (!w) {
                                            if (1 == b) continue e;
                                            break e
                                        }
                                    }
                                    h[d++] = m
                                }
                                return h
                            }, Un.prototype.at = ga, Un.prototype.chain = function() {
                                return pa(this)
                            }, Un.prototype.commit = function() {
                                return new $n(this.value(), this.__chain__)
                            }, Un.prototype.next = function() {
                                this.__values__ === o && (this.__values__ = pl(this.value()));
                                var e = this.__index__ >= this.__values__.length;
                                return {
                                    done: e,
                                    value: e ? o : this.__values__[this.__index__++]
                                }
                            }, Un.prototype.plant = function(e) {
                                for (var t, n = this; n instanceof Hn;) {
                                    var r = Fi(n);
                                    r.__index__ = 0, r.__values__ = o, t ? i.__wrapped__ = r : t = r;
                                    var i = r;
                                    n = n.__wrapped__
                                }
                                return i.__wrapped__ = e, t
                            }, Un.prototype.reverse = function() {
                                var e = this.__wrapped__;
                                if (e instanceof Vn) {
                                    var t = e;
                                    return this.__actions__.length && (t = new Vn(this)), (t = t.reverse()).__actions__.push({
                                        func: ha,
                                        args: [ta],
                                        thisArg: o
                                    }), new $n(t, this.__chain__)
                                }
                                return this.thru(ta)
                            }, Un.prototype.toJSON = Un.prototype.valueOf = Un.prototype.value = function() {
                                return mo(this.__wrapped__, this.__actions__)
                            }, Un.prototype.first = Un.prototype.head, Je && (Un.prototype[Je] = function() {
                                return this
                            }), Un
                        }();
                        gt._ = yn, (r = function() {
                            return yn
                        }.call(t, n, t, e)) === o || (e.exports = r)
                    }.call(this)
            },
            251: function(e, t, n) {
                var r, o;
                r = function(e) {
                    "use strict";
                    var t, n, r = function(e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (t in arguments[n]) Object.prototype.hasOwnProperty.call(arguments[n], t) && (e[t] = arguments[n][t]);
                            return e
                        },
                        o = {
                            template: "[%t] %l:",
                            levelFormatter: function(e) {
                                return e.toUpperCase()
                            },
                            nameFormatter: function(e) {
                                return e || "root"
                            },
                            timestampFormatter: function(e) {
                                return e.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1")
                            },
                            format: void 0
                        },
                        i = {},
                        a = function(e, n) {
                            if (!e || !e.setLevel) throw new TypeError("Argument is not a logger");
                            var a = e.methodFactory,
                                l = e.name || "",
                                u = i[l] || i[""] || o;

                            function s(e, t, n) {
                                var r = a(e, t, n),
                                    o = i[n] || i[""],
                                    u = -1 !== o.template.indexOf("%t"),
                                    s = -1 !== o.template.indexOf("%l"),
                                    c = -1 !== o.template.indexOf("%n");
                                return function() {
                                    for (var t = "", a = arguments.length, f = Array(a), d = 0; d < a; d++) f[d] = arguments[d];
                                    if (l || !i[n]) {
                                        var p = o.timestampFormatter(new Date),
                                            h = o.levelFormatter(e),
                                            g = o.nameFormatter(n);
                                        o.format ? t += o.format(h, g, p) : (t += o.template, u && (t = t.replace(/%t/, p)), s && (t = t.replace(/%l/, h)), c && (t = t.replace(/%n/, g))), f.length && "string" == typeof f[0] ? f[0] = t + " " + f[0] : f.unshift(t)
                                    }
                                    r.apply(void 0, f)
                                }
                            }
                            return i[l] || (e.methodFactory = s), (n = n || {}).template && (n.format = void 0), i[l] = r({}, u, n), e.setLevel(e.getLevel()), t || e.warn("It is necessary to call the function reg() of loglevel-plugin-prefix before calling apply. From the next release, it will throw an error. See more: https://github.com/kutuluk/loglevel-plugin-prefix/blob/master/README.md"), e
                        },
                        l = {
                            reg: function(e) {
                                if (!e || !e.getLogger) throw new TypeError("Argument is not a root logger");
                                t = e
                            },
                            apply: a
                        };
                    return e && (n = e.prefix, l.noConflict = function() {
                        return e.prefix === l && (e.prefix = n), l
                    }), l
                }, void 0 === (o = "function" == typeof r ? r.call(t, n, t, e) : r) || (e.exports = o)
            },
            65: function(e, t, n) {
                var r, o;
                ! function(i, a) {
                    "use strict";
                    r = function() {
                        var e = function() {},
                            t = "undefined",
                            n = typeof window !== t && typeof window.navigator !== t && /Trident\/|MSIE /.test(window.navigator.userAgent),
                            r = ["trace", "debug", "info", "warn", "error"],
                            o = {},
                            i = null;

                        function a(e, t) {
                            var n = e[t];
                            if ("function" == typeof n.bind) return n.bind(e);
                            try {
                                return Function.prototype.bind.call(n, e)
                            } catch (t) {
                                return function() {
                                    return Function.prototype.apply.apply(n, [e, arguments])
                                }
                            }
                        }

                        function l() {
                            console.log && (console.log.apply ? console.log.apply(console, arguments) : Function.prototype.apply.apply(console.log, [console, arguments])), console.trace && console.trace()
                        }

                        function u(r) {
                            return "debug" === r && (r = "log"), typeof console !== t && ("trace" === r && n ? l : void 0 !== console[r] ? a(console, r) : void 0 !== console.log ? a(console, "log") : e)
                        }

                        function s() {
                            for (var n = this.getLevel(), o = 0; o < r.length; o++) {
                                var i = r[o];
                                this[i] = o < n ? e : this.methodFactory(i, n, this.name)
                            }
                            if (this.log = this.debug, typeof console === t && n < this.levels.SILENT) return "No console available for logging"
                        }

                        function c(e) {
                            return function() {
                                typeof console !== t && (s.call(this), this[e].apply(this, arguments))
                            }
                        }

                        function f(e, t, n) {
                            return u(e) || c.apply(this, arguments)
                        }

                        function d(e, n) {
                            var a, l, u, c = this,
                                d = "loglevel";

                            function p(e) {
                                var n = (r[e] || "silent").toUpperCase();
                                if (typeof window !== t && d) {
                                    try {
                                        return void(window.localStorage[d] = n)
                                    } catch (e) {}
                                    try {
                                        window.document.cookie = encodeURIComponent(d) + "=" + n + ";"
                                    } catch (e) {}
                                }
                            }

                            function h() {
                                var e;
                                if (typeof window !== t && d) {
                                    try {
                                        e = window.localStorage[d]
                                    } catch (e) {}
                                    if (typeof e === t) try {
                                        var n = window.document.cookie,
                                            r = encodeURIComponent(d),
                                            o = n.indexOf(r + "="); - 1 !== o && (e = /^([^;]+)/.exec(n.slice(o + r.length + 1))[1])
                                    } catch (e) {}
                                    return void 0 === c.levels[e] && (e = void 0), e
                                }
                            }

                            function g() {
                                if (typeof window !== t && d) {
                                    try {
                                        window.localStorage.removeItem(d)
                                    } catch (e) {}
                                    try {
                                        window.document.cookie = encodeURIComponent(d) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
                                    } catch (e) {}
                                }
                            }

                            function m(e) {
                                var t = e;
                                if ("string" == typeof t && void 0 !== c.levels[t.toUpperCase()] && (t = c.levels[t.toUpperCase()]), "number" == typeof t && t >= 0 && t <= c.levels.SILENT) return t;
                                throw new TypeError("log.setLevel() called with invalid level: " + e)
                            }
                            "string" == typeof e ? d += ":" + e : "symbol" == typeof e && (d = void 0), c.name = e, c.levels = {
                                TRACE: 0,
                                DEBUG: 1,
                                INFO: 2,
                                WARN: 3,
                                ERROR: 4,
                                SILENT: 5
                            }, c.methodFactory = n || f, c.getLevel = function() {
                                return null != u ? u : null != l ? l : a
                            }, c.setLevel = function(e, t) {
                                return u = m(e), !1 !== t && p(u), s.call(c)
                            }, c.setDefaultLevel = function(e) {
                                l = m(e), h() || c.setLevel(e, !1)
                            }, c.resetLevel = function() {
                                u = null, g(), s.call(c)
                            }, c.enableAll = function(e) {
                                c.setLevel(c.levels.TRACE, e)
                            }, c.disableAll = function(e) {
                                c.setLevel(c.levels.SILENT, e)
                            }, c.rebuild = function() {
                                if (i !== c && (a = m(i.getLevel())), s.call(c), i === c)
                                    for (var e in o) o[e].rebuild()
                            }, a = m(i ? i.getLevel() : "WARN");
                            var v = h();
                            null != v && (u = m(v)), s.call(c)
                        }(i = new d).getLogger = function(e) {
                            if ("symbol" != typeof e && "string" != typeof e || "" === e) throw new TypeError("You must supply a name when creating a logger.");
                            var t = o[e];
                            return t || (t = o[e] = new d(e, i.methodFactory)), t
                        };
                        var p = typeof window !== t ? window.log : void 0;
                        return i.noConflict = function() {
                            return typeof window !== t && window.log === i && (window.log = p), i
                        }, i.getLoggers = function() {
                            return o
                        }, i.default = i, i
                    }, void 0 === (o = "function" == typeof r ? r.call(t, n, t, e) : r) || (e.exports = o)
                }()
            },
            802: e => {
                e.exports = function e(t, n, r) {
                    function o(a, l) {
                        if (!n[a]) {
                            if (!t[a]) {
                                if (i) return i(a, !0);
                                throw new Error("Cannot find module '" + a + "'")
                            }
                            l = n[a] = {
                                exports: {}
                            }, t[a][0].call(l.exports, (function(e) {
                                return o(t[a][1][e] || e)
                            }), l, l.exports, e, t, n, r)
                        }
                        return n[a].exports
                    }
                    for (var i = void 0, a = 0; a < r.length; a++) o(r[a]);
                    return o
                }({
                    1: [function(e, t, n) {
                        (function(r, o, i, a, l, u, s, c, f) {
                            "use strict";
                            var d = e("crypto");

                            function p(e, t) {
                                var n;
                                return void 0 === (n = "passthrough" !== (t = m(e, t)).algorithm ? d.createHash(t.algorithm) : new b).write && (n.write = n.update, n.end = n.update), y(t, n).dispatch(e), n.update || n.end(""), n.digest ? n.digest("buffer" === t.encoding ? void 0 : t.encoding) : (e = n.read(), "buffer" !== t.encoding ? e.toString(t.encoding) : e)
                            }(n = t.exports = p).sha1 = function(e) {
                                return p(e)
                            }, n.keys = function(e) {
                                return p(e, {
                                    excludeValues: !0,
                                    algorithm: "sha1",
                                    encoding: "hex"
                                })
                            }, n.MD5 = function(e) {
                                return p(e, {
                                    algorithm: "md5",
                                    encoding: "hex"
                                })
                            }, n.keysMD5 = function(e) {
                                return p(e, {
                                    algorithm: "md5",
                                    encoding: "hex",
                                    excludeValues: !0
                                })
                            };
                            var h = d.getHashes ? d.getHashes().slice() : ["sha1", "md5"],
                                g = (h.push("passthrough"), ["buffer", "hex", "binary", "base64"]);

                            function m(e, t) {
                                var n = {};
                                if (n.algorithm = (t = t || {}).algorithm || "sha1", n.encoding = t.encoding || "hex", n.excludeValues = !!t.excludeValues, n.algorithm = n.algorithm.toLowerCase(), n.encoding = n.encoding.toLowerCase(), n.ignoreUnknown = !0 === t.ignoreUnknown, n.respectType = !1 !== t.respectType, n.respectFunctionNames = !1 !== t.respectFunctionNames, n.respectFunctionProperties = !1 !== t.respectFunctionProperties, n.unorderedArrays = !0 === t.unorderedArrays, n.unorderedSets = !1 !== t.unorderedSets, n.unorderedObjects = !1 !== t.unorderedObjects, n.replacer = t.replacer || void 0, n.excludeKeys = t.excludeKeys || void 0, void 0 === e) throw new Error("Object argument required.");
                                for (var r = 0; r < h.length; ++r) h[r].toLowerCase() === n.algorithm.toLowerCase() && (n.algorithm = h[r]);
                                if (-1 === h.indexOf(n.algorithm)) throw new Error('Algorithm "' + n.algorithm + '"  not supported. supported values: ' + h.join(", "));
                                if (-1 === g.indexOf(n.encoding) && "passthrough" !== n.algorithm) throw new Error('Encoding "' + n.encoding + '"  not supported. supported values: ' + g.join(", "));
                                return n
                            }

                            function v(e) {
                                if ("function" == typeof e) return null != /^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(e))
                            }

                            function y(e, t, n) {
                                function r(e) {
                                    return t.update ? t.update(e, "utf8") : t.write(e, "utf8")
                                }
                                return n = n || [], {
                                    dispatch: function(t) {
                                        return this["_" + (null === (t = e.replacer ? e.replacer(t) : t) ? "null" : typeof t)](t)
                                    },
                                    _object: function(t) {
                                        var o, a = Object.prototype.toString.call(t),
                                            l = /\[object (.*)\]/i.exec(a);
                                        if (l = (l = l ? l[1] : "unknown:[" + a + "]").toLowerCase(), 0 <= (a = n.indexOf(t))) return this.dispatch("[CIRCULAR:" + a + "]");
                                        if (n.push(t), void 0 !== i && i.isBuffer && i.isBuffer(t)) return r("buffer:"), r(t);
                                        if ("object" === l || "function" === l || "asyncfunction" === l) return a = Object.keys(t), e.unorderedObjects && (a = a.sort()), !1 === e.respectType || v(t) || a.splice(0, 0, "prototype", "__proto__", "constructor"), e.excludeKeys && (a = a.filter((function(t) {
                                            return !e.excludeKeys(t)
                                        }))), r("object:" + a.length + ":"), o = this, a.forEach((function(n) {
                                            o.dispatch(n), r(":"), e.excludeValues || o.dispatch(t[n]), r(",")
                                        }));
                                        if (!this["_" + l]) {
                                            if (e.ignoreUnknown) return r("[" + l + "]");
                                            throw new Error('Unknown object type "' + l + '"')
                                        }
                                        this["_" + l](t)
                                    },
                                    _array: function(t, o) {
                                        o = void 0 !== o ? o : !1 !== e.unorderedArrays;
                                        var i = this;
                                        if (r("array:" + t.length + ":"), !o || t.length <= 1) return t.forEach((function(e) {
                                            return i.dispatch(e)
                                        }));
                                        var a = [];
                                        return o = t.map((function(t) {
                                            var r = new b,
                                                o = n.slice();
                                            return y(e, r, o).dispatch(t), a = a.concat(o.slice(n.length)), r.read().toString()
                                        })), n = n.concat(a), o.sort(), this._array(o, !1)
                                    },
                                    _date: function(e) {
                                        return r("date:" + e.toJSON())
                                    },
                                    _symbol: function(e) {
                                        return r("symbol:" + e.toString())
                                    },
                                    _error: function(e) {
                                        return r("error:" + e.toString())
                                    },
                                    _boolean: function(e) {
                                        return r("bool:" + e.toString())
                                    },
                                    _string: function(e) {
                                        r("string:" + e.length + ":"), r(e.toString())
                                    },
                                    _function: function(t) {
                                        r("fn:"), v(t) ? this.dispatch("[native]") : this.dispatch(t.toString()), !1 !== e.respectFunctionNames && this.dispatch("function-name:" + String(t.name)), e.respectFunctionProperties && this._object(t)
                                    },
                                    _number: function(e) {
                                        return r("number:" + e.toString())
                                    },
                                    _xml: function(e) {
                                        return r("xml:" + e.toString())
                                    },
                                    _null: function() {
                                        return r("Null")
                                    },
                                    _undefined: function() {
                                        return r("Undefined")
                                    },
                                    _regexp: function(e) {
                                        return r("regex:" + e.toString())
                                    },
                                    _uint8array: function(e) {
                                        return r("uint8array:"), this.dispatch(Array.prototype.slice.call(e))
                                    },
                                    _uint8clampedarray: function(e) {
                                        return r("uint8clampedarray:"), this.dispatch(Array.prototype.slice.call(e))
                                    },
                                    _int8array: function(e) {
                                        return r("int8array:"), this.dispatch(Array.prototype.slice.call(e))
                                    },
                                    _uint16array: function(e) {
                                        return r("uint16array:"), this.dispatch(Array.prototype.slice.call(e))
                                    },
                                    _int16array: function(e) {
                                        return r("int16array:"), this.dispatch(Array.prototype.slice.call(e))
                                    },
                                    _uint32array: function(e) {
                                        return r("uint32array:"), this.dispatch(Array.prototype.slice.call(e))
                                    },
                                    _int32array: function(e) {
                                        return r("int32array:"), this.dispatch(Array.prototype.slice.call(e))
                                    },
                                    _float32array: function(e) {
                                        return r("float32array:"), this.dispatch(Array.prototype.slice.call(e))
                                    },
                                    _float64array: function(e) {
                                        return r("float64array:"), this.dispatch(Array.prototype.slice.call(e))
                                    },
                                    _arraybuffer: function(e) {
                                        return r("arraybuffer:"), this.dispatch(new Uint8Array(e))
                                    },
                                    _url: function(e) {
                                        return r("url:" + e.toString())
                                    },
                                    _map: function(t) {
                                        return r("map:"), t = Array.from(t), this._array(t, !1 !== e.unorderedSets)
                                    },
                                    _set: function(t) {
                                        return r("set:"), t = Array.from(t), this._array(t, !1 !== e.unorderedSets)
                                    },
                                    _file: function(e) {
                                        return r("file:"), this.dispatch([e.name, e.size, e.type, e.lastModfied])
                                    },
                                    _blob: function() {
                                        if (e.ignoreUnknown) return r("[blob]");
                                        throw Error('Hashing Blob objects is currently not supported\n(see https://github.com/puleos/object-hash/issues/26)\nUse "options.replacer" or "options.ignoreUnknown"\n')
                                    },
                                    _domwindow: function() {
                                        return r("domwindow")
                                    },
                                    _bigint: function(e) {
                                        return r("bigint:" + e.toString())
                                    },
                                    _process: function() {
                                        return r("process")
                                    },
                                    _timer: function() {
                                        return r("timer")
                                    },
                                    _pipe: function() {
                                        return r("pipe")
                                    },
                                    _tcp: function() {
                                        return r("tcp")
                                    },
                                    _udp: function() {
                                        return r("udp")
                                    },
                                    _tty: function() {
                                        return r("tty")
                                    },
                                    _statwatcher: function() {
                                        return r("statwatcher")
                                    },
                                    _securecontext: function() {
                                        return r("securecontext")
                                    },
                                    _connection: function() {
                                        return r("connection")
                                    },
                                    _zlib: function() {
                                        return r("zlib")
                                    },
                                    _context: function() {
                                        return r("context")
                                    },
                                    _nodescript: function() {
                                        return r("nodescript")
                                    },
                                    _httpparser: function() {
                                        return r("httpparser")
                                    },
                                    _dataview: function() {
                                        return r("dataview")
                                    },
                                    _signal: function() {
                                        return r("signal")
                                    },
                                    _fsevent: function() {
                                        return r("fsevent")
                                    },
                                    _tlswrap: function() {
                                        return r("tlswrap")
                                    }
                                }
                            }

                            function b() {
                                return {
                                    buf: "",
                                    write: function(e) {
                                        this.buf += e
                                    },
                                    end: function(e) {
                                        this.buf += e
                                    },
                                    read: function() {
                                        return this.buf
                                    }
                                }
                            }
                            n.writeToStream = function(e, t, n) {
                                return void 0 === n && (n = t, t = {}), y(t = m(e, t), n).dispatch(e)
                            }
                        }).call(this, e("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/fake_9a5aa49d.js", "/")
                    }, {
                        buffer: 3,
                        crypto: 5,
                        lYpoI2: 11
                    }],
                    2: [function(e, t, n) {
                        (function(e, t, r, o, i, a, l, u, s) {
                            ! function(e) {
                                "use strict";
                                var t = "undefined" != typeof Uint8Array ? Uint8Array : Array,
                                    n = "+".charCodeAt(0),
                                    r = "/".charCodeAt(0),
                                    o = "0".charCodeAt(0),
                                    i = "a".charCodeAt(0),
                                    a = "A".charCodeAt(0),
                                    l = "-".charCodeAt(0),
                                    u = "_".charCodeAt(0);

                                function s(e) {
                                    return (e = e.charCodeAt(0)) === n || e === l ? 62 : e === r || e === u ? 63 : e < o ? -1 : e < o + 10 ? e - o + 26 + 26 : e < a + 26 ? e - a : e < i + 26 ? e - i + 26 : void 0
                                }
                                e.toByteArray = function(e) {
                                    var n, r;
                                    if (0 < e.length % 4) throw new Error("Invalid string. Length must be a multiple of 4");
                                    var o = e.length,
                                        i = (o = "=" === e.charAt(o - 2) ? 2 : "=" === e.charAt(o - 1) ? 1 : 0, new t(3 * e.length / 4 - o)),
                                        a = 0 < o ? e.length - 4 : e.length,
                                        l = 0;

                                    function u(e) {
                                        i[l++] = e
                                    }
                                    for (n = 0; n < a; n += 4, 0) u((16711680 & (r = s(e.charAt(n)) << 18 | s(e.charAt(n + 1)) << 12 | s(e.charAt(n + 2)) << 6 | s(e.charAt(n + 3)))) >> 16), u((65280 & r) >> 8), u(255 & r);
                                    return 2 == o ? u(255 & (r = s(e.charAt(n)) << 2 | s(e.charAt(n + 1)) >> 4)) : 1 == o && (u((r = s(e.charAt(n)) << 10 | s(e.charAt(n + 1)) << 4 | s(e.charAt(n + 2)) >> 2) >> 8 & 255), u(255 & r)), i
                                }, e.fromByteArray = function(e) {
                                    var t, n, r, o, i = e.length % 3,
                                        a = "";

                                    function l(e) {
                                        return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e)
                                    }
                                    for (t = 0, r = e.length - i; t < r; t += 3) a += l((o = n = (e[t] << 16) + (e[t + 1] << 8) + e[t + 2]) >> 18 & 63) + l(o >> 12 & 63) + l(o >> 6 & 63) + l(63 & o);
                                    switch (i) {
                                        case 1:
                                            a = (a += l((n = e[e.length - 1]) >> 2)) + l(n << 4 & 63) + "==";
                                            break;
                                        case 2:
                                            a = (a = (a += l((n = (e[e.length - 2] << 8) + e[e.length - 1]) >> 10)) + l(n >> 4 & 63)) + l(n << 2 & 63) + "="
                                    }
                                    return a
                                }
                            }(void 0 === n ? this.base64js = {} : n)
                        }).call(this, e("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js", "/node_modules/gulp-browserify/node_modules/base64-js/lib")
                    }, {
                        buffer: 3,
                        lYpoI2: 11
                    }],
                    3: [function(e, t, n) {
                        (function(t, r, o, i, a, l, u, s, c) {
                            var f = e("base64-js"),
                                d = e("ieee754");

                            function o(e, t, n) {
                                if (!(this instanceof o)) return new o(e, t, n);
                                var r, i, a, l, u = typeof e;
                                if ("base64" === t && "string" == u)
                                    for (e = (l = e).trim ? l.trim() : l.replace(/^\s+|\s+$/g, ""); e.length % 4 != 0;) e += "=";
                                if ("number" == u) r = A(e);
                                else if ("string" == u) r = o.byteLength(e, t);
                                else {
                                    if ("object" != u) throw new Error("First argument needs to be a number, array or string.");
                                    r = A(e.length)
                                }
                                if (o._useTypedArrays ? i = o._augment(new Uint8Array(r)) : ((i = this).length = r, i._isBuffer = !0), o._useTypedArrays && "number" == typeof e.byteLength) i._set(e);
                                else if (L(l = e) || o.isBuffer(l) || l && "object" == typeof l && "number" == typeof l.length)
                                    for (a = 0; a < r; a++) o.isBuffer(e) ? i[a] = e.readUInt8(a) : i[a] = e[a];
                                else if ("string" == u) i.write(e, 0, t);
                                else if ("number" == u && !o._useTypedArrays && !n)
                                    for (a = 0; a < r; a++) i[a] = 0;
                                return i
                            }

                            function p(e, t, n, r) {
                                return o._charsWritten = j(function(e) {
                                    for (var t = [], n = 0; n < e.length; n++) t.push(255 & e.charCodeAt(n));
                                    return t
                                }(t), e, n, r)
                            }

                            function h(e, t, n, r) {
                                return o._charsWritten = j(function(e) {
                                    for (var t, n, r = [], o = 0; o < e.length; o++) t = (n = e.charCodeAt(o)) >> 8, n %= 256, r.push(n), r.push(t);
                                    return r
                                }(t), e, n, r)
                            }

                            function g(e, t, n) {
                                var r = "";
                                n = Math.min(e.length, n);
                                for (var o = t; o < n; o++) r += String.fromCharCode(e[o]);
                                return r
                            }

                            function m(e, t, n, r) {
                                var o;
                                if (r || (F("boolean" == typeof n, "missing or invalid endian"), F(null != t, "missing offset"), F(t + 1 < e.length, "Trying to read beyond buffer length")), !((r = e.length) <= t)) return n ? (o = e[t], t + 1 < r && (o |= e[t + 1] << 8)) : (o = e[t] << 8, t + 1 < r && (o |= e[t + 1])), o
                            }

                            function v(e, t, n, r) {
                                var o;
                                if (r || (F("boolean" == typeof n, "missing or invalid endian"), F(null != t, "missing offset"), F(t + 3 < e.length, "Trying to read beyond buffer length")), !((r = e.length) <= t)) return n ? (t + 2 < r && (o = e[t + 2] << 16), t + 1 < r && (o |= e[t + 1] << 8), o |= e[t], t + 3 < r && (o += e[t + 3] << 24 >>> 0)) : (t + 1 < r && (o = e[t + 1] << 16), t + 2 < r && (o |= e[t + 2] << 8), t + 3 < r && (o |= e[t + 3]), o += e[t] << 24 >>> 0), o
                            }

                            function y(e, t, n, r) {
                                if (r || (F("boolean" == typeof n, "missing or invalid endian"), F(null != t, "missing offset"), F(t + 1 < e.length, "Trying to read beyond buffer length")), !(e.length <= t)) return 32768 & (r = m(e, t, n, !0)) ? -1 * (65535 - r + 1) : r
                            }

                            function b(e, t, n, r) {
                                if (r || (F("boolean" == typeof n, "missing or invalid endian"), F(null != t, "missing offset"), F(t + 3 < e.length, "Trying to read beyond buffer length")), !(e.length <= t)) return 2147483648 & (r = v(e, t, n, !0)) ? -1 * (4294967295 - r + 1) : r
                            }

                            function w(e, t, n, r) {
                                return r || (F("boolean" == typeof n, "missing or invalid endian"), F(t + 3 < e.length, "Trying to read beyond buffer length")), d.read(e, t, n, 23, 4)
                            }

                            function _(e, t, n, r) {
                                return r || (F("boolean" == typeof n, "missing or invalid endian"), F(t + 7 < e.length, "Trying to read beyond buffer length")), d.read(e, t, n, 52, 8)
                            }

                            function x(e, t, n, r, o) {
                                if (o || (F(null != t, "missing value"), F("boolean" == typeof r, "missing or invalid endian"), F(null != n, "missing offset"), F(n + 1 < e.length, "trying to write beyond buffer length"), P(t, 65535)), !((o = e.length) <= n))
                                    for (var i = 0, a = Math.min(o - n, 2); i < a; i++) e[n + i] = (t & 255 << 8 * (r ? i : 1 - i)) >>> 8 * (r ? i : 1 - i)
                            }

                            function S(e, t, n, r, o) {
                                if (o || (F(null != t, "missing value"), F("boolean" == typeof r, "missing or invalid endian"), F(null != n, "missing offset"), F(n + 3 < e.length, "trying to write beyond buffer length"), P(t, 4294967295)), !((o = e.length) <= n))
                                    for (var i = 0, a = Math.min(o - n, 4); i < a; i++) e[n + i] = t >>> 8 * (r ? i : 3 - i) & 255
                            }

                            function E(e, t, n, r, o) {
                                o || (F(null != t, "missing value"), F("boolean" == typeof r, "missing or invalid endian"), F(null != n, "missing offset"), F(n + 1 < e.length, "Trying to write beyond buffer length"), z(t, 32767, -32768)), e.length <= n || x(e, 0 <= t ? t : 65535 + t + 1, n, r, o)
                            }

                            function k(e, t, n, r, o) {
                                o || (F(null != t, "missing value"), F("boolean" == typeof r, "missing or invalid endian"), F(null != n, "missing offset"), F(n + 3 < e.length, "Trying to write beyond buffer length"), z(t, 2147483647, -2147483648)), e.length <= n || S(e, 0 <= t ? t : 4294967295 + t + 1, n, r, o)
                            }

                            function C(e, t, n, r, o) {
                                o || (F(null != t, "missing value"), F("boolean" == typeof r, "missing or invalid endian"), F(null != n, "missing offset"), F(n + 3 < e.length, "Trying to write beyond buffer length"), B(t, 34028234663852886e22, -34028234663852886e22)), e.length <= n || d.write(e, t, n, r, 23, 4)
                            }

                            function T(e, t, n, r, o) {
                                o || (F(null != t, "missing value"), F("boolean" == typeof r, "missing or invalid endian"), F(null != n, "missing offset"), F(n + 7 < e.length, "Trying to write beyond buffer length"), B(t, 17976931348623157e292, -17976931348623157e292)), e.length <= n || d.write(e, t, n, r, 52, 8)
                            }
                            n.Buffer = o, n.SlowBuffer = o, n.INSPECT_MAX_BYTES = 50, o.poolSize = 8192, o._useTypedArrays = function() {
                                try {
                                    var e = new ArrayBuffer(0),
                                        t = new Uint8Array(e);
                                    return t.foo = function() {
                                        return 42
                                    }, 42 === t.foo() && "function" == typeof t.subarray
                                } catch (e) {
                                    return !1
                                }
                            }(), o.isEncoding = function(e) {
                                switch (String(e).toLowerCase()) {
                                    case "hex":
                                    case "utf8":
                                    case "utf-8":
                                    case "ascii":
                                    case "binary":
                                    case "base64":
                                    case "raw":
                                    case "ucs2":
                                    case "ucs-2":
                                    case "utf16le":
                                    case "utf-16le":
                                        return !0;
                                    default:
                                        return !1
                                }
                            }, o.isBuffer = function(e) {
                                return !(null == e || !e._isBuffer)
                            }, o.byteLength = function(e, t) {
                                var n;
                                switch (e += "", t || "utf8") {
                                    case "hex":
                                        n = e.length / 2;
                                        break;
                                    case "utf8":
                                    case "utf-8":
                                        n = I(e).length;
                                        break;
                                    case "ascii":
                                    case "binary":
                                    case "raw":
                                        n = e.length;
                                        break;
                                    case "base64":
                                        n = D(e).length;
                                        break;
                                    case "ucs2":
                                    case "ucs-2":
                                    case "utf16le":
                                    case "utf-16le":
                                        n = 2 * e.length;
                                        break;
                                    default:
                                        throw new Error("Unknown encoding")
                                }
                                return n
                            }, o.concat = function(e, t) {
                                if (F(L(e), "Usage: Buffer.concat(list, [totalLength])\nlist should be an Array."), 0 === e.length) return new o(0);
                                if (1 === e.length) return e[0];
                                if ("number" != typeof t)
                                    for (i = t = 0; i < e.length; i++) t += e[i].length;
                                for (var n = new o(t), r = 0, i = 0; i < e.length; i++) {
                                    var a = e[i];
                                    a.copy(n, r), r += a.length
                                }
                                return n
                            }, o.prototype.write = function(e, t, n, r) {
                                isFinite(t) ? isFinite(n) || (r = n, n = void 0) : (s = r, r = t, t = n, n = s), t = Number(t) || 0;
                                var i, a, l, u, s = this.length - t;
                                switch ((!n || s < (n = Number(n))) && (n = s), r = String(r || "utf8").toLowerCase()) {
                                    case "hex":
                                        i = function(e, t, n, r) {
                                            n = Number(n) || 0;
                                            var i = e.length - n;
                                            (!r || i < (r = Number(r))) && (r = i), F((i = t.length) % 2 == 0, "Invalid hex string"), i / 2 < r && (r = i / 2);
                                            for (var a = 0; a < r; a++) {
                                                var l = parseInt(t.substr(2 * a, 2), 16);
                                                F(!isNaN(l), "Invalid hex string"), e[n + a] = l
                                            }
                                            return o._charsWritten = 2 * a, a
                                        }(this, e, t, n);
                                        break;
                                    case "utf8":
                                    case "utf-8":
                                        a = this, l = t, u = n, i = o._charsWritten = j(I(e), a, l, u);
                                        break;
                                    case "ascii":
                                    case "binary":
                                        i = p(this, e, t, n);
                                        break;
                                    case "base64":
                                        a = this, l = t, u = n, i = o._charsWritten = j(D(e), a, l, u);
                                        break;
                                    case "ucs2":
                                    case "ucs-2":
                                    case "utf16le":
                                    case "utf-16le":
                                        i = h(this, e, t, n);
                                        break;
                                    default:
                                        throw new Error("Unknown encoding")
                                }
                                return i
                            }, o.prototype.toString = function(e, t, n) {
                                var r, o, i, a, l = this;
                                if (e = String(e || "utf8").toLowerCase(), t = Number(t) || 0, (n = void 0 !== n ? Number(n) : l.length) === t) return "";
                                switch (e) {
                                    case "hex":
                                        r = function(e, t, n) {
                                            var r = e.length;
                                            (!t || t < 0) && (t = 0), (!n || n < 0 || r < n) && (n = r);
                                            for (var o = "", i = t; i < n; i++) o += O(e[i]);
                                            return o
                                        }(l, t, n);
                                        break;
                                    case "utf8":
                                    case "utf-8":
                                        r = function(e, t, n) {
                                            var r = "",
                                                o = "";
                                            n = Math.min(e.length, n);
                                            for (var i = t; i < n; i++) e[i] <= 127 ? (r += M(o) + String.fromCharCode(e[i]), o = "") : o += "%" + e[i].toString(16);
                                            return r + M(o)
                                        }(l, t, n);
                                        break;
                                    case "ascii":
                                    case "binary":
                                        r = g(l, t, n);
                                        break;
                                    case "base64":
                                        o = l, a = n, r = 0 === (i = t) && a === o.length ? f.fromByteArray(o) : f.fromByteArray(o.slice(i, a));
                                        break;
                                    case "ucs2":
                                    case "ucs-2":
                                    case "utf16le":
                                    case "utf-16le":
                                        r = function(e, t, n) {
                                            for (var r = e.slice(t, n), o = "", i = 0; i < r.length; i += 2) o += String.fromCharCode(r[i] + 256 * r[i + 1]);
                                            return o
                                        }(l, t, n);
                                        break;
                                    default:
                                        throw new Error("Unknown encoding")
                                }
                                return r
                            }, o.prototype.toJSON = function() {
                                return {
                                    type: "Buffer",
                                    data: Array.prototype.slice.call(this._arr || this, 0)
                                }
                            }, o.prototype.copy = function(e, t, n, r) {
                                if (t = t || 0, (r = r || 0 === r ? r : this.length) !== (n = n || 0) && 0 !== e.length && 0 !== this.length) {
                                    F(n <= r, "sourceEnd < sourceStart"), F(0 <= t && t < e.length, "targetStart out of bounds"), F(0 <= n && n < this.length, "sourceStart out of bounds"), F(0 <= r && r <= this.length, "sourceEnd out of bounds"), r > this.length && (r = this.length);
                                    var i = (r = e.length - t < r - n ? e.length - t + n : r) - n;
                                    if (i < 100 || !o._useTypedArrays)
                                        for (var a = 0; a < i; a++) e[a + t] = this[a + n];
                                    else e._set(this.subarray(n, n + i), t)
                                }
                            }, o.prototype.slice = function(e, t) {
                                var n = this.length;
                                if (e = R(e, n, 0), t = R(t, n, n), o._useTypedArrays) return o._augment(this.subarray(e, t));
                                for (var r = t - e, i = new o(r, void 0, !0), a = 0; a < r; a++) i[a] = this[a + e];
                                return i
                            }, o.prototype.get = function(e) {
                                return console.log(".get() is deprecated. Access using array indexes instead."), this.readUInt8(e)
                            }, o.prototype.set = function(e, t) {
                                return console.log(".set() is deprecated. Access using array indexes instead."), this.writeUInt8(e, t)
                            }, o.prototype.readUInt8 = function(e, t) {
                                if (t || (F(null != e, "missing offset"), F(e < this.length, "Trying to read beyond buffer length")), !(e >= this.length)) return this[e]
                            }, o.prototype.readUInt16LE = function(e, t) {
                                return m(this, e, !0, t)
                            }, o.prototype.readUInt16BE = function(e, t) {
                                return m(this, e, !1, t)
                            }, o.prototype.readUInt32LE = function(e, t) {
                                return v(this, e, !0, t)
                            }, o.prototype.readUInt32BE = function(e, t) {
                                return v(this, e, !1, t)
                            }, o.prototype.readInt8 = function(e, t) {
                                if (t || (F(null != e, "missing offset"), F(e < this.length, "Trying to read beyond buffer length")), !(e >= this.length)) return 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
                            }, o.prototype.readInt16LE = function(e, t) {
                                return y(this, e, !0, t)
                            }, o.prototype.readInt16BE = function(e, t) {
                                return y(this, e, !1, t)
                            }, o.prototype.readInt32LE = function(e, t) {
                                return b(this, e, !0, t)
                            }, o.prototype.readInt32BE = function(e, t) {
                                return b(this, e, !1, t)
                            }, o.prototype.readFloatLE = function(e, t) {
                                return w(this, e, !0, t)
                            }, o.prototype.readFloatBE = function(e, t) {
                                return w(this, e, !1, t)
                            }, o.prototype.readDoubleLE = function(e, t) {
                                return _(this, e, !0, t)
                            }, o.prototype.readDoubleBE = function(e, t) {
                                return _(this, e, !1, t)
                            }, o.prototype.writeUInt8 = function(e, t, n) {
                                n || (F(null != e, "missing value"), F(null != t, "missing offset"), F(t < this.length, "trying to write beyond buffer length"), P(e, 255)), t >= this.length || (this[t] = e)
                            }, o.prototype.writeUInt16LE = function(e, t, n) {
                                x(this, e, t, !0, n)
                            }, o.prototype.writeUInt16BE = function(e, t, n) {
                                x(this, e, t, !1, n)
                            }, o.prototype.writeUInt32LE = function(e, t, n) {
                                S(this, e, t, !0, n)
                            }, o.prototype.writeUInt32BE = function(e, t, n) {
                                S(this, e, t, !1, n)
                            }, o.prototype.writeInt8 = function(e, t, n) {
                                n || (F(null != e, "missing value"), F(null != t, "missing offset"), F(t < this.length, "Trying to write beyond buffer length"), z(e, 127, -128)), t >= this.length || (0 <= e ? this.writeUInt8(e, t, n) : this.writeUInt8(255 + e + 1, t, n))
                            }, o.prototype.writeInt16LE = function(e, t, n) {
                                E(this, e, t, !0, n)
                            }, o.prototype.writeInt16BE = function(e, t, n) {
                                E(this, e, t, !1, n)
                            }, o.prototype.writeInt32LE = function(e, t, n) {
                                k(this, e, t, !0, n)
                            }, o.prototype.writeInt32BE = function(e, t, n) {
                                k(this, e, t, !1, n)
                            }, o.prototype.writeFloatLE = function(e, t, n) {
                                C(this, e, t, !0, n)
                            }, o.prototype.writeFloatBE = function(e, t, n) {
                                C(this, e, t, !1, n)
                            }, o.prototype.writeDoubleLE = function(e, t, n) {
                                T(this, e, t, !0, n)
                            }, o.prototype.writeDoubleBE = function(e, t, n) {
                                T(this, e, t, !1, n)
                            }, o.prototype.fill = function(e, t, n) {
                                if (t = t || 0, n = n || this.length, F("number" == typeof(e = "string" == typeof(e = e || 0) ? e.charCodeAt(0) : e) && !isNaN(e), "value is not a number"), F(t <= n, "end < start"), n !== t && 0 !== this.length) {
                                    F(0 <= t && t < this.length, "start out of bounds"), F(0 <= n && n <= this.length, "end out of bounds");
                                    for (var r = t; r < n; r++) this[r] = e
                                }
                            }, o.prototype.inspect = function() {
                                for (var e = [], t = this.length, r = 0; r < t; r++)
                                    if (e[r] = O(this[r]), r === n.INSPECT_MAX_BYTES) {
                                        e[r + 1] = "...";
                                        break
                                    }
                                return "<Buffer " + e.join(" ") + ">"
                            }, o.prototype.toArrayBuffer = function() {
                                if ("undefined" == typeof Uint8Array) throw new Error("Buffer.toArrayBuffer not supported in this browser");
                                if (o._useTypedArrays) return new o(this).buffer;
                                for (var e = new Uint8Array(this.length), t = 0, n = e.length; t < n; t += 1) e[t] = this[t];
                                return e.buffer
                            };
                            var N = o.prototype;

                            function R(e, t, n) {
                                return "number" != typeof e ? n : t <= (e = ~~e) ? t : 0 <= e || 0 <= (e += t) ? e : 0
                            }

                            function A(e) {
                                return (e = ~~Math.ceil(+e)) < 0 ? 0 : e
                            }

                            function L(e) {
                                return (Array.isArray || function(e) {
                                    return "[object Array]" === Object.prototype.toString.call(e)
                                })(e)
                            }

                            function O(e) {
                                return e < 16 ? "0" + e.toString(16) : e.toString(16)
                            }

                            function I(e) {
                                for (var t = [], n = 0; n < e.length; n++) {
                                    var r = e.charCodeAt(n);
                                    if (r <= 127) t.push(e.charCodeAt(n));
                                    else
                                        for (var o = n, i = (55296 <= r && r <= 57343 && n++, encodeURIComponent(e.slice(o, n + 1)).substr(1).split("%")), a = 0; a < i.length; a++) t.push(parseInt(i[a], 16))
                                }
                                return t
                            }

                            function D(e) {
                                return f.toByteArray(e)
                            }

                            function j(e, t, n, r) {
                                for (var o = 0; o < r && !(o + n >= t.length || o >= e.length); o++) t[o + n] = e[o];
                                return o
                            }

                            function M(e) {
                                try {
                                    return decodeURIComponent(e)
                                } catch (e) {
                                    return String.fromCharCode(65533)
                                }
                            }

                            function P(e, t) {
                                F("number" == typeof e, "cannot write a non-number as a number"), F(0 <= e, "specified a negative value for writing an unsigned value"), F(e <= t, "value is larger than maximum value for type"), F(Math.floor(e) === e, "value has a fractional component")
                            }

                            function z(e, t, n) {
                                F("number" == typeof e, "cannot write a non-number as a number"), F(e <= t, "value larger than maximum allowed value"), F(n <= e, "value smaller than minimum allowed value"), F(Math.floor(e) === e, "value has a fractional component")
                            }

                            function B(e, t, n) {
                                F("number" == typeof e, "cannot write a non-number as a number"), F(e <= t, "value larger than maximum allowed value"), F(n <= e, "value smaller than minimum allowed value")
                            }

                            function F(e, t) {
                                if (!e) throw new Error(t || "Failed assertion")
                            }
                            o._augment = function(e) {
                                return e._isBuffer = !0, e._get = e.get, e._set = e.set, e.get = N.get, e.set = N.set, e.write = N.write, e.toString = N.toString, e.toLocaleString = N.toString, e.toJSON = N.toJSON, e.copy = N.copy, e.slice = N.slice, e.readUInt8 = N.readUInt8, e.readUInt16LE = N.readUInt16LE, e.readUInt16BE = N.readUInt16BE, e.readUInt32LE = N.readUInt32LE, e.readUInt32BE = N.readUInt32BE, e.readInt8 = N.readInt8, e.readInt16LE = N.readInt16LE, e.readInt16BE = N.readInt16BE, e.readInt32LE = N.readInt32LE, e.readInt32BE = N.readInt32BE, e.readFloatLE = N.readFloatLE, e.readFloatBE = N.readFloatBE, e.readDoubleLE = N.readDoubleLE, e.readDoubleBE = N.readDoubleBE, e.writeUInt8 = N.writeUInt8, e.writeUInt16LE = N.writeUInt16LE, e.writeUInt16BE = N.writeUInt16BE, e.writeUInt32LE = N.writeUInt32LE, e.writeUInt32BE = N.writeUInt32BE, e.writeInt8 = N.writeInt8, e.writeInt16LE = N.writeInt16LE, e.writeInt16BE = N.writeInt16BE, e.writeInt32LE = N.writeInt32LE, e.writeInt32BE = N.writeInt32BE, e.writeFloatLE = N.writeFloatLE, e.writeFloatBE = N.writeFloatBE, e.writeDoubleLE = N.writeDoubleLE, e.writeDoubleBE = N.writeDoubleBE, e.fill = N.fill, e.inspect = N.inspect, e.toArrayBuffer = N.toArrayBuffer, e
                            }
                        }).call(this, e("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/buffer/index.js", "/node_modules/gulp-browserify/node_modules/buffer")
                    }, {
                        "base64-js": 2,
                        buffer: 3,
                        ieee754: 10,
                        lYpoI2: 11
                    }],
                    4: [function(e, t, n) {
                        (function(n, r, o, i, a, l, u, s, c) {
                            o = e("buffer").Buffer;
                            var f = 4,
                                d = new o(f);
                            d.fill(0), t.exports = {
                                hash: function(e, t, n, r) {
                                    for (var i = t(function(e, t) {
                                            e.length % f != 0 && (n = e.length + (f - e.length % f), e = o.concat([e, d], n));
                                            for (var n, r = [], i = t ? e.readInt32BE : e.readInt32LE, a = 0; a < e.length; a += f) r.push(i.call(e, a));
                                            return r
                                        }(e = o.isBuffer(e) ? e : new o(e), r), 8 * e.length), a = (t = r, new o(n)), l = t ? a.writeInt32BE : a.writeInt32LE, u = 0; u < i.length; u++) l.call(a, i[u], 4 * u, !0);
                                    return a
                                }
                            }
                        }).call(this, e("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify")
                    }, {
                        buffer: 3,
                        lYpoI2: 11
                    }],
                    5: [function(e, t, n) {
                        (function(t, r, o, i, a, l, u, s, c) {
                            o = e("buffer").Buffer;
                            var f = e("./sha"),
                                d = e("./sha256"),
                                p = e("./rng"),
                                h = {
                                    sha1: f,
                                    sha256: d,
                                    md5: e("./md5")
                                },
                                g = 64,
                                m = new o(g);

                            function v(e, t) {
                                var n = h[e = e || "sha1"],
                                    r = [];
                                return n || y("algorithm:", e, "is not yet supported"), {
                                    update: function(e) {
                                        return o.isBuffer(e) || (e = new o(e)), r.push(e), e.length, this
                                    },
                                    digest: function(e) {
                                        var i = o.concat(r);
                                        return i = t ? function(e, t, n) {
                                            o.isBuffer(t) || (t = new o(t)), o.isBuffer(n) || (n = new o(n)), t.length > g ? t = e(t) : t.length < g && (t = o.concat([t, m], g));
                                            for (var r = new o(g), i = new o(g), a = 0; a < g; a++) r[a] = 54 ^ t[a], i[a] = 92 ^ t[a];
                                            return n = e(o.concat([r, n])), e(o.concat([i, n]))
                                        }(n, t, i) : n(i), r = null, e ? i.toString(e) : i
                                    }
                                }
                            }

                            function y() {
                                var e = [].slice.call(arguments).join(" ");
                                throw new Error([e, "we accept pull requests", "http://github.com/dominictarr/crypto-browserify"].join("\n"))
                            }
                            m.fill(0), n.createHash = function(e) {
                                return v(e)
                            }, n.createHmac = v, n.randomBytes = function(e, t) {
                                if (!t || !t.call) return new o(p(e));
                                try {
                                    t.call(this, void 0, new o(p(e)))
                                } catch (e) {
                                    t(e)
                                }
                            };
                            var b, w = ["createCredentials", "createCipher", "createCipheriv", "createDecipher", "createDecipheriv", "createSign", "createVerify", "createDiffieHellman", "pbkdf2"],
                                _ = function(e) {
                                    n[e] = function() {
                                        y("sorry,", e, "is not implemented yet")
                                    }
                                };
                            for (b in w) _(w[b], b)
                        }).call(this, e("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify")
                    }, {
                        "./md5": 6,
                        "./rng": 7,
                        "./sha": 8,
                        "./sha256": 9,
                        buffer: 3,
                        lYpoI2: 11
                    }],
                    6: [function(e, t, n) {
                        (function(n, r, o, i, a, l, u, s, c) {
                            var f = e("./helpers");

                            function d(e, t) {
                                e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
                                for (var n = 1732584193, r = -271733879, o = -1732584194, i = 271733878, a = 0; a < e.length; a += 16) {
                                    var l = n,
                                        u = r,
                                        s = o,
                                        c = i;
                                    n = h(n, r, o, i, e[a + 0], 7, -680876936), i = h(i, n, r, o, e[a + 1], 12, -389564586), o = h(o, i, n, r, e[a + 2], 17, 606105819), r = h(r, o, i, n, e[a + 3], 22, -1044525330), n = h(n, r, o, i, e[a + 4], 7, -176418897), i = h(i, n, r, o, e[a + 5], 12, 1200080426), o = h(o, i, n, r, e[a + 6], 17, -1473231341), r = h(r, o, i, n, e[a + 7], 22, -45705983), n = h(n, r, o, i, e[a + 8], 7, 1770035416), i = h(i, n, r, o, e[a + 9], 12, -1958414417), o = h(o, i, n, r, e[a + 10], 17, -42063), r = h(r, o, i, n, e[a + 11], 22, -1990404162), n = h(n, r, o, i, e[a + 12], 7, 1804603682), i = h(i, n, r, o, e[a + 13], 12, -40341101), o = h(o, i, n, r, e[a + 14], 17, -1502002290), n = g(n, r = h(r, o, i, n, e[a + 15], 22, 1236535329), o, i, e[a + 1], 5, -165796510), i = g(i, n, r, o, e[a + 6], 9, -1069501632), o = g(o, i, n, r, e[a + 11], 14, 643717713), r = g(r, o, i, n, e[a + 0], 20, -373897302), n = g(n, r, o, i, e[a + 5], 5, -701558691), i = g(i, n, r, o, e[a + 10], 9, 38016083), o = g(o, i, n, r, e[a + 15], 14, -660478335), r = g(r, o, i, n, e[a + 4], 20, -405537848), n = g(n, r, o, i, e[a + 9], 5, 568446438), i = g(i, n, r, o, e[a + 14], 9, -1019803690), o = g(o, i, n, r, e[a + 3], 14, -187363961), r = g(r, o, i, n, e[a + 8], 20, 1163531501), n = g(n, r, o, i, e[a + 13], 5, -1444681467), i = g(i, n, r, o, e[a + 2], 9, -51403784), o = g(o, i, n, r, e[a + 7], 14, 1735328473), n = m(n, r = g(r, o, i, n, e[a + 12], 20, -1926607734), o, i, e[a + 5], 4, -378558), i = m(i, n, r, o, e[a + 8], 11, -2022574463), o = m(o, i, n, r, e[a + 11], 16, 1839030562), r = m(r, o, i, n, e[a + 14], 23, -35309556), n = m(n, r, o, i, e[a + 1], 4, -1530992060), i = m(i, n, r, o, e[a + 4], 11, 1272893353), o = m(o, i, n, r, e[a + 7], 16, -155497632), r = m(r, o, i, n, e[a + 10], 23, -1094730640), n = m(n, r, o, i, e[a + 13], 4, 681279174), i = m(i, n, r, o, e[a + 0], 11, -358537222), o = m(o, i, n, r, e[a + 3], 16, -722521979), r = m(r, o, i, n, e[a + 6], 23, 76029189), n = m(n, r, o, i, e[a + 9], 4, -640364487), i = m(i, n, r, o, e[a + 12], 11, -421815835), o = m(o, i, n, r, e[a + 15], 16, 530742520), n = v(n, r = m(r, o, i, n, e[a + 2], 23, -995338651), o, i, e[a + 0], 6, -198630844), i = v(i, n, r, o, e[a + 7], 10, 1126891415), o = v(o, i, n, r, e[a + 14], 15, -1416354905), r = v(r, o, i, n, e[a + 5], 21, -57434055), n = v(n, r, o, i, e[a + 12], 6, 1700485571), i = v(i, n, r, o, e[a + 3], 10, -1894986606), o = v(o, i, n, r, e[a + 10], 15, -1051523), r = v(r, o, i, n, e[a + 1], 21, -2054922799), n = v(n, r, o, i, e[a + 8], 6, 1873313359), i = v(i, n, r, o, e[a + 15], 10, -30611744), o = v(o, i, n, r, e[a + 6], 15, -1560198380), r = v(r, o, i, n, e[a + 13], 21, 1309151649), n = v(n, r, o, i, e[a + 4], 6, -145523070), i = v(i, n, r, o, e[a + 11], 10, -1120210379), o = v(o, i, n, r, e[a + 2], 15, 718787259), r = v(r, o, i, n, e[a + 9], 21, -343485551), n = y(n, l), r = y(r, u), o = y(o, s), i = y(i, c)
                                }
                                return Array(n, r, o, i)
                            }

                            function p(e, t, n, r, o, i) {
                                return y((t = y(y(t, e), y(r, i))) << o | t >>> 32 - o, n)
                            }

                            function h(e, t, n, r, o, i, a) {
                                return p(t & n | ~t & r, e, t, o, i, a)
                            }

                            function g(e, t, n, r, o, i, a) {
                                return p(t & r | n & ~r, e, t, o, i, a)
                            }

                            function m(e, t, n, r, o, i, a) {
                                return p(t ^ n ^ r, e, t, o, i, a)
                            }

                            function v(e, t, n, r, o, i, a) {
                                return p(n ^ (t | ~r), e, t, o, i, a)
                            }

                            function y(e, t) {
                                var n = (65535 & e) + (65535 & t);
                                return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
                            }
                            t.exports = function(e) {
                                return f.hash(e, d, 16)
                            }
                        }).call(this, e("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify")
                    }, {
                        "./helpers": 4,
                        buffer: 3,
                        lYpoI2: 11
                    }],
                    7: [function(e, t, n) {
                        (function(e, n, r, o, i, a, l, u, s) {
                            var c;
                            t.exports = c || function(e) {
                                for (var t, n = new Array(e), r = 0; r < e; r++) !(3 & r) && (t = 4294967296 * Math.random()), n[r] = t >>> ((3 & r) << 3) & 255;
                                return n
                            }
                        }).call(this, e("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify")
                    }, {
                        buffer: 3,
                        lYpoI2: 11
                    }],
                    8: [function(e, t, n) {
                        (function(n, r, o, i, a, l, u, s, c) {
                            var f = e("./helpers");

                            function d(e, t) {
                                e[t >> 5] |= 128 << 24 - t % 32, e[15 + (t + 64 >> 9 << 4)] = t;
                                for (var n, r, o, i = Array(80), a = 1732584193, l = -271733879, u = -1732584194, s = 271733878, c = -1009589776, f = 0; f < e.length; f += 16) {
                                    for (var d = a, g = l, m = u, v = s, y = c, b = 0; b < 80; b++) {
                                        i[b] = b < 16 ? e[f + b] : h(i[b - 3] ^ i[b - 8] ^ i[b - 14] ^ i[b - 16], 1);
                                        var w = p(p(h(a, 5), (w = l, r = u, o = s, (n = b) < 20 ? w & r | ~w & o : !(n < 40) && n < 60 ? w & r | w & o | r & o : w ^ r ^ o)), p(p(c, i[b]), (n = b) < 20 ? 1518500249 : n < 40 ? 1859775393 : n < 60 ? -1894007588 : -899497514));
                                        c = s, s = u, u = h(l, 30), l = a, a = w
                                    }
                                    a = p(a, d), l = p(l, g), u = p(u, m), s = p(s, v), c = p(c, y)
                                }
                                return Array(a, l, u, s, c)
                            }

                            function p(e, t) {
                                var n = (65535 & e) + (65535 & t);
                                return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
                            }

                            function h(e, t) {
                                return e << t | e >>> 32 - t
                            }
                            t.exports = function(e) {
                                return f.hash(e, d, 20, !0)
                            }
                        }).call(this, e("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify")
                    }, {
                        "./helpers": 4,
                        buffer: 3,
                        lYpoI2: 11
                    }],
                    9: [function(e, t, n) {
                        (function(n, r, o, i, a, l, u, s, c) {
                            function f(e, t) {
                                var n = (65535 & e) + (65535 & t);
                                return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
                            }

                            function d(e, t) {
                                var n, r = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298),
                                    o = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225),
                                    i = new Array(64);
                                e[t >> 5] |= 128 << 24 - t % 32, e[15 + (t + 64 >> 9 << 4)] = t;
                                for (var a, l, u = 0; u < e.length; u += 16) {
                                    for (var s = o[0], c = o[1], d = o[2], p = o[3], m = o[4], v = o[5], y = o[6], b = o[7], w = 0; w < 64; w++) i[w] = w < 16 ? e[w + u] : f(f(f((l = i[w - 2], h(l, 17) ^ h(l, 19) ^ g(l, 10)), i[w - 7]), (l = i[w - 15], h(l, 7) ^ h(l, 18) ^ g(l, 3))), i[w - 16]), n = f(f(f(f(b, h(l = m, 6) ^ h(l, 11) ^ h(l, 25)), m & v ^ ~m & y), r[w]), i[w]), a = f(h(a = s, 2) ^ h(a, 13) ^ h(a, 22), s & c ^ s & d ^ c & d), b = y, y = v, v = m, m = f(p, n), p = d, d = c, c = s, s = f(n, a);
                                    o[0] = f(s, o[0]), o[1] = f(c, o[1]), o[2] = f(d, o[2]), o[3] = f(p, o[3]), o[4] = f(m, o[4]), o[5] = f(v, o[5]), o[6] = f(y, o[6]), o[7] = f(b, o[7])
                                }
                                return o
                            }
                            var p = e("./helpers"),
                                h = function(e, t) {
                                    return e >>> t | e << 32 - t
                                },
                                g = function(e, t) {
                                    return e >>> t
                                };
                            t.exports = function(e) {
                                return p.hash(e, d, 32, !0)
                            }
                        }).call(this, e("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify")
                    }, {
                        "./helpers": 4,
                        buffer: 3,
                        lYpoI2: 11
                    }],
                    10: [function(e, t, n) {
                        (function(e, t, r, o, i, a, l, u, s) {
                            n.read = function(e, t, n, r, o) {
                                var i, a, l = 8 * o - r - 1,
                                    u = (1 << l) - 1,
                                    s = u >> 1,
                                    c = -7,
                                    f = n ? o - 1 : 0,
                                    d = n ? -1 : 1;
                                for (o = e[t + f], f += d, i = o & (1 << -c) - 1, o >>= -c, c += l; 0 < c; i = 256 * i + e[t + f], f += d, c -= 8);
                                for (a = i & (1 << -c) - 1, i >>= -c, c += r; 0 < c; a = 256 * a + e[t + f], f += d, c -= 8);
                                if (0 === i) i = 1 - s;
                                else {
                                    if (i === u) return a ? NaN : 1 / 0 * (o ? -1 : 1);
                                    a += Math.pow(2, r), i -= s
                                }
                                return (o ? -1 : 1) * a * Math.pow(2, i - r)
                            }, n.write = function(e, t, n, r, o, i) {
                                var a, l, u = 8 * i - o - 1,
                                    s = (1 << u) - 1,
                                    c = s >> 1,
                                    f = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                                    d = r ? 0 : i - 1,
                                    p = r ? 1 : -1;
                                for (i = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0, t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (l = isNaN(t) ? 1 : 0, a = s) : (a = Math.floor(Math.log(t) / Math.LN2), t * (r = Math.pow(2, -a)) < 1 && (a--, r *= 2), 2 <= (t += 1 <= a + c ? f / r : f * Math.pow(2, 1 - c)) * r && (a++, r /= 2), s <= a + c ? (l = 0, a = s) : 1 <= a + c ? (l = (t * r - 1) * Math.pow(2, o), a += c) : (l = t * Math.pow(2, c - 1) * Math.pow(2, o), a = 0)); 8 <= o; e[n + d] = 255 & l, d += p, l /= 256, o -= 8);
                                for (a = a << o | l, u += o; 0 < u; e[n + d] = 255 & a, d += p, a /= 256, u -= 8);
                                e[n + d - p] |= 128 * i
                            }
                        }).call(this, e("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/ieee754/index.js", "/node_modules/gulp-browserify/node_modules/ieee754")
                    }, {
                        buffer: 3,
                        lYpoI2: 11
                    }],
                    11: [function(e, t, n) {
                        (function(e, n, r, o, i, a, l, u, s) {
                            var c, f, d;

                            function p() {}(e = t.exports = {}).nextTick = (f = "undefined" != typeof window && window.setImmediate, d = "undefined" != typeof window && window.postMessage && window.addEventListener, f ? function(e) {
                                return window.setImmediate(e)
                            } : d ? (c = [], window.addEventListener("message", (function(e) {
                                var t = e.source;
                                t !== window && null !== t || "process-tick" !== e.data || (e.stopPropagation(), 0 < c.length && c.shift()())
                            }), !0), function(e) {
                                c.push(e), window.postMessage("process-tick", "*")
                            }) : function(e) {
                                setTimeout(e, 0)
                            }), e.title = "browser", e.browser = !0, e.env = {}, e.argv = [], e.on = p, e.addListener = p, e.once = p, e.off = p, e.removeListener = p, e.removeAllListeners = p, e.emit = p, e.binding = function(e) {
                                throw new Error("process.binding is not supported")
                            }, e.cwd = function() {
                                return "/"
                            }, e.chdir = function(e) {
                                throw new Error("process.chdir is not supported")
                            }
                        }).call(this, e("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/process/browser.js", "/node_modules/gulp-browserify/node_modules/process")
                    }, {
                        buffer: 3,
                        lYpoI2: 11
                    }]
                }, {}, [1])(1)
            },
            551: (e, t, n) => {
                "use strict";
                var r = n(540),
                    o = n(982);

                function i(e) {
                    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
                    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
                }
                var a = new Set,
                    l = {};

                function u(e, t) {
                    s(e, t), s(e + "Capture", t)
                }

                function s(e, t) {
                    for (l[e] = t, e = 0; e < t.length; e++) a.add(t[e])
                }
                var c = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement),
                    f = Object.prototype.hasOwnProperty,
                    d = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
                    p = {},
                    h = {};

                function g(e, t, n, r, o, i, a) {
                    this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = a
                }
                var m = {};
                "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e) {
                    m[e] = new g(e, 0, !1, e, null, !1, !1)
                })), [
                    ["acceptCharset", "accept-charset"],
                    ["className", "class"],
                    ["htmlFor", "for"],
                    ["httpEquiv", "http-equiv"]
                ].forEach((function(e) {
                    var t = e[0];
                    m[t] = new g(t, 1, !1, e[1], null, !1, !1)
                })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(e) {
                    m[e] = new g(e, 2, !1, e.toLowerCase(), null, !1, !1)
                })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(e) {
                    m[e] = new g(e, 2, !1, e, null, !1, !1)
                })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e) {
                    m[e] = new g(e, 3, !1, e.toLowerCase(), null, !1, !1)
                })), ["checked", "multiple", "muted", "selected"].forEach((function(e) {
                    m[e] = new g(e, 3, !0, e, null, !1, !1)
                })), ["capture", "download"].forEach((function(e) {
                    m[e] = new g(e, 4, !1, e, null, !1, !1)
                })), ["cols", "rows", "size", "span"].forEach((function(e) {
                    m[e] = new g(e, 6, !1, e, null, !1, !1)
                })), ["rowSpan", "start"].forEach((function(e) {
                    m[e] = new g(e, 5, !1, e.toLowerCase(), null, !1, !1)
                }));
                var v = /[\-:]([a-z])/g;

                function y(e) {
                    return e[1].toUpperCase()
                }

                function b(e, t, n, r) {
                    var o = m.hasOwnProperty(t) ? m[t] : null;
                    (null !== o ? 0 !== o.type : r || !(2 < t.length) || "o" !== t[0] && "O" !== t[0] || "n" !== t[1] && "N" !== t[1]) && (function(e, t, n, r) {
                        if (null == t || function(e, t, n, r) {
                                if (null !== n && 0 === n.type) return !1;
                                switch (typeof t) {
                                    case "function":
                                    case "symbol":
                                        return !0;
                                    case "boolean":
                                        return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                                    default:
                                        return !1
                                }
                            }(e, t, n, r)) return !0;
                        if (r) return !1;
                        if (null !== n) switch (n.type) {
                            case 3:
                                return !t;
                            case 4:
                                return !1 === t;
                            case 5:
                                return isNaN(t);
                            case 6:
                                return isNaN(t) || 1 > t
                        }
                        return !1
                    }(t, n, o, r) && (n = null), r || null === o ? function(e) {
                        return !!f.call(h, e) || !f.call(p, e) && (d.test(e) ? h[e] = !0 : (p[e] = !0, !1))
                    }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = null === n ? 3 !== o.type && "" : n : (t = o.attributeName, r = o.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (o = o.type) || 4 === o && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
                }
                "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e) {
                    var t = e.replace(v, y);
                    m[t] = new g(t, 1, !1, e, null, !1, !1)
                })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e) {
                    var t = e.replace(v, y);
                    m[t] = new g(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
                })), ["xml:base", "xml:lang", "xml:space"].forEach((function(e) {
                    var t = e.replace(v, y);
                    m[t] = new g(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
                })), ["tabIndex", "crossOrigin"].forEach((function(e) {
                    m[e] = new g(e, 1, !1, e.toLowerCase(), null, !1, !1)
                })), m.xlinkHref = new g("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function(e) {
                    m[e] = new g(e, 1, !1, e.toLowerCase(), null, !0, !0)
                }));
                var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
                    _ = Symbol.for("react.element"),
                    x = Symbol.for("react.portal"),
                    S = Symbol.for("react.fragment"),
                    E = Symbol.for("react.strict_mode"),
                    k = Symbol.for("react.profiler"),
                    C = Symbol.for("react.provider"),
                    T = Symbol.for("react.context"),
                    N = Symbol.for("react.forward_ref"),
                    R = Symbol.for("react.suspense"),
                    A = Symbol.for("react.suspense_list"),
                    L = Symbol.for("react.memo"),
                    O = Symbol.for("react.lazy");
                Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
                var I = Symbol.for("react.offscreen");
                Symbol.for("react.legacy_hidden"), Symbol.for("react.cache"), Symbol.for("react.tracing_marker");
                var D = Symbol.iterator;

                function j(e) {
                    return null === e || "object" != typeof e ? null : "function" == typeof(e = D && e[D] || e["@@iterator"]) ? e : null
                }
                var M, P = Object.assign;

                function z(e) {
                    if (void 0 === M) try {
                        throw Error()
                    } catch (e) {
                        var t = e.stack.trim().match(/\n( *(at )?)/);
                        M = t && t[1] || ""
                    }
                    return "\n" + M + e
                }
                var B = !1;

                function F(e, t) {
                    if (!e || B) return "";
                    B = !0;
                    var n = Error.prepareStackTrace;
                    Error.prepareStackTrace = void 0;
                    try {
                        if (t)
                            if (t = function() {
                                    throw Error()
                                }, Object.defineProperty(t.prototype, "props", {
                                    set: function() {
                                        throw Error()
                                    }
                                }), "object" == typeof Reflect && Reflect.construct) {
                                try {
                                    Reflect.construct(t, [])
                                } catch (e) {
                                    var r = e
                                }
                                Reflect.construct(e, [], t)
                            } else {
                                try {
                                    t.call()
                                } catch (e) {
                                    r = e
                                }
                                e.call(t.prototype)
                            }
                        else {
                            try {
                                throw Error()
                            } catch (e) {
                                r = e
                            }
                            e()
                        }
                    } catch (t) {
                        if (t && r && "string" == typeof t.stack) {
                            for (var o = t.stack.split("\n"), i = r.stack.split("\n"), a = o.length - 1, l = i.length - 1; 1 <= a && 0 <= l && o[a] !== i[l];) l--;
                            for (; 1 <= a && 0 <= l; a--, l--)
                                if (o[a] !== i[l]) {
                                    if (1 !== a || 1 !== l)
                                        do {
                                            if (a--, 0 > --l || o[a] !== i[l]) {
                                                var u = "\n" + o[a].replace(" at new ", " at ");
                                                return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u
                                            }
                                        } while (1 <= a && 0 <= l);
                                    break
                                }
                        }
                    } finally {
                        B = !1, Error.prepareStackTrace = n
                    }
                    return (e = e ? e.displayName || e.name : "") ? z(e) : ""
                }

                function U(e) {
                    switch (e.tag) {
                        case 5:
                            return z(e.type);
                        case 16:
                            return z("Lazy");
                        case 13:
                            return z("Suspense");
                        case 19:
                            return z("SuspenseList");
                        case 0:
                        case 2:
                        case 15:
                            return e = F(e.type, !1);
                        case 11:
                            return e = F(e.type.render, !1);
                        case 1:
                            return e = F(e.type, !0);
                        default:
                            return ""
                    }
                }

                function W(e) {
                    if (null == e) return null;
                    if ("function" == typeof e) return e.displayName || e.name || null;
                    if ("string" == typeof e) return e;
                    switch (e) {
                        case S:
                            return "Fragment";
                        case x:
                            return "Portal";
                        case k:
                            return "Profiler";
                        case E:
                            return "StrictMode";
                        case R:
                            return "Suspense";
                        case A:
                            return "SuspenseList"
                    }
                    if ("object" == typeof e) switch (e.$$typeof) {
                        case T:
                            return (e.displayName || "Context") + ".Consumer";
                        case C:
                            return (e._context.displayName || "Context") + ".Provider";
                        case N:
                            var t = e.render;
                            return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                        case L:
                            return null !== (t = e.displayName || null) ? t : W(e.type) || "Memo";
                        case O:
                            t = e._payload, e = e._init;
                            try {
                                return W(e(t))
                            } catch (e) {}
                    }
                    return null
                }

                function H(e) {
                    var t = e.type;
                    switch (e.tag) {
                        case 24:
                            return "Cache";
                        case 9:
                            return (t.displayName || "Context") + ".Consumer";
                        case 10:
                            return (t._context.displayName || "Context") + ".Provider";
                        case 18:
                            return "DehydratedFragment";
                        case 11:
                            return e = (e = t.render).displayName || e.name || "", t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
                        case 7:
                            return "Fragment";
                        case 5:
                            return t;
                        case 4:
                            return "Portal";
                        case 3:
                            return "Root";
                        case 6:
                            return "Text";
                        case 16:
                            return W(t);
                        case 8:
                            return t === E ? "StrictMode" : "Mode";
                        case 22:
                            return "Offscreen";
                        case 12:
                            return "Profiler";
                        case 21:
                            return "Scope";
                        case 13:
                            return "Suspense";
                        case 19:
                            return "SuspenseList";
                        case 25:
                            return "TracingMarker";
                        case 1:
                        case 0:
                        case 17:
                        case 2:
                        case 14:
                        case 15:
                            if ("function" == typeof t) return t.displayName || t.name || null;
                            if ("string" == typeof t) return t
                    }
                    return null
                }

                function $(e) {
                    switch (typeof e) {
                        case "boolean":
                        case "number":
                        case "string":
                        case "undefined":
                        case "object":
                            return e;
                        default:
                            return ""
                    }
                }

                function V(e) {
                    var t = e.type;
                    return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
                }

                function Y(e) {
                    e._valueTracker || (e._valueTracker = function(e) {
                        var t = V(e) ? "checked" : "value",
                            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                            r = "" + e[t];
                        if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
                            var o = n.get,
                                i = n.set;
                            return Object.defineProperty(e, t, {
                                configurable: !0,
                                get: function() {
                                    return o.call(this)
                                },
                                set: function(e) {
                                    r = "" + e, i.call(this, e)
                                }
                            }), Object.defineProperty(e, t, {
                                enumerable: n.enumerable
                            }), {
                                getValue: function() {
                                    return r
                                },
                                setValue: function(e) {
                                    r = "" + e
                                },
                                stopTracking: function() {
                                    e._valueTracker = null, delete e[t]
                                }
                            }
                        }
                    }(e))
                }

                function Q(e) {
                    if (!e) return !1;
                    var t = e._valueTracker;
                    if (!t) return !0;
                    var n = t.getValue(),
                        r = "";
                    return e && (r = V(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
                }

                function q(e) {
                    if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;
                    try {
                        return e.activeElement || e.body
                    } catch (t) {
                        return e.body
                    }
                }

                function K(e, t) {
                    var n = t.checked;
                    return P({}, t, {
                        defaultChecked: void 0,
                        defaultValue: void 0,
                        value: void 0,
                        checked: null != n ? n : e._wrapperState.initialChecked
                    })
                }

                function X(e, t) {
                    var n = null == t.defaultValue ? "" : t.defaultValue,
                        r = null != t.checked ? t.checked : t.defaultChecked;
                    n = $(null != t.value ? t.value : n), e._wrapperState = {
                        initialChecked: r,
                        initialValue: n,
                        controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
                    }
                }

                function G(e, t) {
                    null != (t = t.checked) && b(e, "checked", t, !1)
                }

                function J(e, t) {
                    G(e, t);
                    var n = $(t.value),
                        r = t.type;
                    if (null != n) "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
                    else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
                    t.hasOwnProperty("value") ? ee(e, t.type, n) : t.hasOwnProperty("defaultValue") && ee(e, t.type, $(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
                }

                function Z(e, t, n) {
                    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
                        var r = t.type;
                        if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value)) return;
                        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
                    }
                    "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n)
                }

                function ee(e, t, n) {
                    "number" === t && q(e.ownerDocument) === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
                }
                var te = Array.isArray;

                function ne(e, t, n, r) {
                    if (e = e.options, t) {
                        t = {};
                        for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
                        for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0)
                    } else {
                        for (n = "" + $(n), t = null, o = 0; o < e.length; o++) {
                            if (e[o].value === n) return e[o].selected = !0, void(r && (e[o].defaultSelected = !0));
                            null !== t || e[o].disabled || (t = e[o])
                        }
                        null !== t && (t.selected = !0)
                    }
                }

                function re(e, t) {
                    if (null != t.dangerouslySetInnerHTML) throw Error(i(91));
                    return P({}, t, {
                        value: void 0,
                        defaultValue: void 0,
                        children: "" + e._wrapperState.initialValue
                    })
                }

                function oe(e, t) {
                    var n = t.value;
                    if (null == n) {
                        if (n = t.children, t = t.defaultValue, null != n) {
                            if (null != t) throw Error(i(92));
                            if (te(n)) {
                                if (1 < n.length) throw Error(i(93));
                                n = n[0]
                            }
                            t = n
                        }
                        null == t && (t = ""), n = t
                    }
                    e._wrapperState = {
                        initialValue: $(n)
                    }
                }

                function ie(e, t) {
                    var n = $(t.value),
                        r = $(t.defaultValue);
                    null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r)
                }

                function ae(e) {
                    var t = e.textContent;
                    t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
                }

                function le(e) {
                    switch (e) {
                        case "svg":
                            return "http://www.w3.org/2000/svg";
                        case "math":
                            return "http://www.w3.org/1998/Math/MathML";
                        default:
                            return "http://www.w3.org/1999/xhtml"
                    }
                }

                function ue(e, t) {
                    return null == e || "http://www.w3.org/1999/xhtml" === e ? le(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
                }
                var se, ce, fe = (ce = function(e, t) {
                    if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e) e.innerHTML = t;
                    else {
                        for ((se = se || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = se.firstChild; e.firstChild;) e.removeChild(e.firstChild);
                        for (; t.firstChild;) e.appendChild(t.firstChild)
                    }
                }, "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function(e, t, n, r) {
                    MSApp.execUnsafeLocalFunction((function() {
                        return ce(e, t)
                    }))
                } : ce);

                function de(e, t) {
                    if (t) {
                        var n = e.firstChild;
                        if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue = t)
                    }
                    e.textContent = t
                }
                var pe = {
                        animationIterationCount: !0,
                        aspectRatio: !0,
                        borderImageOutset: !0,
                        borderImageSlice: !0,
                        borderImageWidth: !0,
                        boxFlex: !0,
                        boxFlexGroup: !0,
                        boxOrdinalGroup: !0,
                        columnCount: !0,
                        columns: !0,
                        flex: !0,
                        flexGrow: !0,
                        flexPositive: !0,
                        flexShrink: !0,
                        flexNegative: !0,
                        flexOrder: !0,
                        gridArea: !0,
                        gridRow: !0,
                        gridRowEnd: !0,
                        gridRowSpan: !0,
                        gridRowStart: !0,
                        gridColumn: !0,
                        gridColumnEnd: !0,
                        gridColumnSpan: !0,
                        gridColumnStart: !0,
                        fontWeight: !0,
                        lineClamp: !0,
                        lineHeight: !0,
                        opacity: !0,
                        order: !0,
                        orphans: !0,
                        tabSize: !0,
                        widows: !0,
                        zIndex: !0,
                        zoom: !0,
                        fillOpacity: !0,
                        floodOpacity: !0,
                        stopOpacity: !0,
                        strokeDasharray: !0,
                        strokeDashoffset: !0,
                        strokeMiterlimit: !0,
                        strokeOpacity: !0,
                        strokeWidth: !0
                    },
                    he = ["Webkit", "ms", "Moz", "O"];

                function ge(e, t, n) {
                    return null == t || "boolean" == typeof t || "" === t ? "" : n || "number" != typeof t || 0 === t || pe.hasOwnProperty(e) && pe[e] ? ("" + t).trim() : t + "px"
                }

                function me(e, t) {
                    for (var n in e = e.style, t)
                        if (t.hasOwnProperty(n)) {
                            var r = 0 === n.indexOf("--"),
                                o = ge(n, t[n], r);
                            "float" === n && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o
                        }
                }
                Object.keys(pe).forEach((function(e) {
                    he.forEach((function(t) {
                        t = t + e.charAt(0).toUpperCase() + e.substring(1), pe[t] = pe[e]
                    }))
                }));
                var ve = P({
                    menuitem: !0
                }, {
                    area: !0,
                    base: !0,
                    br: !0,
                    col: !0,
                    embed: !0,
                    hr: !0,
                    img: !0,
                    input: !0,
                    keygen: !0,
                    link: !0,
                    meta: !0,
                    param: !0,
                    source: !0,
                    track: !0,
                    wbr: !0
                });

                function ye(e, t) {
                    if (t) {
                        if (ve[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(i(137, e));
                        if (null != t.dangerouslySetInnerHTML) {
                            if (null != t.children) throw Error(i(60));
                            if ("object" != typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(i(61))
                        }
                        if (null != t.style && "object" != typeof t.style) throw Error(i(62))
                    }
                }

                function be(e, t) {
                    if (-1 === e.indexOf("-")) return "string" == typeof t.is;
                    switch (e) {
                        case "annotation-xml":
                        case "color-profile":
                        case "font-face":
                        case "font-face-src":
                        case "font-face-uri":
                        case "font-face-format":
                        case "font-face-name":
                        case "missing-glyph":
                            return !1;
                        default:
                            return !0
                    }
                }
                var we = null;

                function _e(e) {
                    return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
                }
                var xe = null,
                    Se = null,
                    Ee = null;

                function ke(e) {
                    if (e = wo(e)) {
                        if ("function" != typeof xe) throw Error(i(280));
                        var t = e.stateNode;
                        t && (t = xo(t), xe(e.stateNode, e.type, t))
                    }
                }

                function Ce(e) {
                    Se ? Ee ? Ee.push(e) : Ee = [e] : Se = e
                }

                function Te() {
                    if (Se) {
                        var e = Se,
                            t = Ee;
                        if (Ee = Se = null, ke(e), t)
                            for (e = 0; e < t.length; e++) ke(t[e])
                    }
                }

                function Ne(e, t) {
                    return e(t)
                }

                function Re() {}
                var Ae = !1;

                function Le(e, t, n) {
                    if (Ae) return e(t, n);
                    Ae = !0;
                    try {
                        return Ne(e, t, n)
                    } finally {
                        Ae = !1, (null !== Se || null !== Ee) && (Re(), Te())
                    }
                }

                function Oe(e, t) {
                    var n = e.stateNode;
                    if (null === n) return null;
                    var r = xo(n);
                    if (null === r) return null;
                    n = r[t];
                    e: switch (t) {
                        case "onClick":
                        case "onClickCapture":
                        case "onDoubleClick":
                        case "onDoubleClickCapture":
                        case "onMouseDown":
                        case "onMouseDownCapture":
                        case "onMouseMove":
                        case "onMouseMoveCapture":
                        case "onMouseUp":
                        case "onMouseUpCapture":
                        case "onMouseEnter":
                            (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
                            break e;
                        default:
                            e = !1
                    }
                    if (e) return null;
                    if (n && "function" != typeof n) throw Error(i(231, t, typeof n));
                    return n
                }
                var Ie = !1;
                if (c) try {
                    var De = {};
                    Object.defineProperty(De, "passive", {
                        get: function() {
                            Ie = !0
                        }
                    }), window.addEventListener("test", De, De), window.removeEventListener("test", De, De)
                } catch (ce) {
                    Ie = !1
                }

                function je(e, t, n, r, o, i, a, l, u) {
                    var s = Array.prototype.slice.call(arguments, 3);
                    try {
                        t.apply(n, s)
                    } catch (e) {
                        this.onError(e)
                    }
                }
                var Me = !1,
                    Pe = null,
                    ze = !1,
                    Be = null,
                    Fe = {
                        onError: function(e) {
                            Me = !0, Pe = e
                        }
                    };

                function Ue(e, t, n, r, o, i, a, l, u) {
                    Me = !1, Pe = null, je.apply(Fe, arguments)
                }

                function We(e) {
                    var t = e,
                        n = e;
                    if (e.alternate)
                        for (; t.return;) t = t.return;
                    else {
                        e = t;
                        do {
                            !!(4098 & (t = e).flags) && (n = t.return), e = t.return
                        } while (e)
                    }
                    return 3 === t.tag ? n : null
                }

                function He(e) {
                    if (13 === e.tag) {
                        var t = e.memoizedState;
                        if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)), null !== t) return t.dehydrated
                    }
                    return null
                }

                function $e(e) {
                    if (We(e) !== e) throw Error(i(188))
                }

                function Ve(e) {
                    return null !== (e = function(e) {
                        var t = e.alternate;
                        if (!t) {
                            if (null === (t = We(e))) throw Error(i(188));
                            return t !== e ? null : e
                        }
                        for (var n = e, r = t;;) {
                            var o = n.return;
                            if (null === o) break;
                            var a = o.alternate;
                            if (null === a) {
                                if (null !== (r = o.return)) {
                                    n = r;
                                    continue
                                }
                                break
                            }
                            if (o.child === a.child) {
                                for (a = o.child; a;) {
                                    if (a === n) return $e(o), e;
                                    if (a === r) return $e(o), t;
                                    a = a.sibling
                                }
                                throw Error(i(188))
                            }
                            if (n.return !== r.return) n = o, r = a;
                            else {
                                for (var l = !1, u = o.child; u;) {
                                    if (u === n) {
                                        l = !0, n = o, r = a;
                                        break
                                    }
                                    if (u === r) {
                                        l = !0, r = o, n = a;
                                        break
                                    }
                                    u = u.sibling
                                }
                                if (!l) {
                                    for (u = a.child; u;) {
                                        if (u === n) {
                                            l = !0, n = a, r = o;
                                            break
                                        }
                                        if (u === r) {
                                            l = !0, r = a, n = o;
                                            break
                                        }
                                        u = u.sibling
                                    }
                                    if (!l) throw Error(i(189))
                                }
                            }
                            if (n.alternate !== r) throw Error(i(190))
                        }
                        if (3 !== n.tag) throw Error(i(188));
                        return n.stateNode.current === n ? e : t
                    }(e)) ? Ye(e) : null
                }

                function Ye(e) {
                    if (5 === e.tag || 6 === e.tag) return e;
                    for (e = e.child; null !== e;) {
                        var t = Ye(e);
                        if (null !== t) return t;
                        e = e.sibling
                    }
                    return null
                }
                var Qe = o.unstable_scheduleCallback,
                    qe = o.unstable_cancelCallback,
                    Ke = o.unstable_shouldYield,
                    Xe = o.unstable_requestPaint,
                    Ge = o.unstable_now,
                    Je = o.unstable_getCurrentPriorityLevel,
                    Ze = o.unstable_ImmediatePriority,
                    et = o.unstable_UserBlockingPriority,
                    tt = o.unstable_NormalPriority,
                    nt = o.unstable_LowPriority,
                    rt = o.unstable_IdlePriority,
                    ot = null,
                    it = null;
                var at = Math.clz32 ? Math.clz32 : function(e) {
                        return e >>>= 0, 0 === e ? 32 : 31 - (lt(e) / ut | 0) | 0
                    },
                    lt = Math.log,
                    ut = Math.LN2;
                var st = 64,
                    ct = 4194304;

                function ft(e) {
                    switch (e & -e) {
                        case 1:
                            return 1;
                        case 2:
                            return 2;
                        case 4:
                            return 4;
                        case 8:
                            return 8;
                        case 16:
                            return 16;
                        case 32:
                            return 32;
                        case 64:
                        case 128:
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                            return 4194240 & e;
                        case 4194304:
                        case 8388608:
                        case 16777216:
                        case 33554432:
                        case 67108864:
                            return 130023424 & e;
                        case 134217728:
                            return 134217728;
                        case 268435456:
                            return 268435456;
                        case 536870912:
                            return 536870912;
                        case 1073741824:
                            return 1073741824;
                        default:
                            return e
                    }
                }

                function dt(e, t) {
                    var n = e.pendingLanes;
                    if (0 === n) return 0;
                    var r = 0,
                        o = e.suspendedLanes,
                        i = e.pingedLanes,
                        a = 268435455 & n;
                    if (0 !== a) {
                        var l = a & ~o;
                        0 !== l ? r = ft(l) : 0 !== (i &= a) && (r = ft(i))
                    } else 0 !== (a = n & ~o) ? r = ft(a) : 0 !== i && (r = ft(i));
                    if (0 === r) return 0;
                    if (0 !== t && t !== r && !(t & o) && ((o = r & -r) >= (i = t & -t) || 16 === o && 4194240 & i)) return t;
                    if (4 & r && (r |= 16 & n), 0 !== (t = e.entangledLanes))
                        for (e = e.entanglements, t &= r; 0 < t;) o = 1 << (n = 31 - at(t)), r |= e[n], t &= ~o;
                    return r
                }

                function pt(e, t) {
                    switch (e) {
                        case 1:
                        case 2:
                        case 4:
                            return t + 250;
                        case 8:
                        case 16:
                        case 32:
                        case 64:
                        case 128:
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                            return t + 5e3;
                        default:
                            return -1
                    }
                }

                function ht(e) {
                    return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
                }

                function gt() {
                    var e = st;
                    return !(4194240 & (st <<= 1)) && (st = 64), e
                }

                function mt(e) {
                    for (var t = [], n = 0; 31 > n; n++) t.push(e);
                    return t
                }

                function vt(e, t, n) {
                    e.pendingLanes |= t, 536870912 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0), (e = e.eventTimes)[t = 31 - at(t)] = n
                }

                function yt(e, t) {
                    var n = e.entangledLanes |= t;
                    for (e = e.entanglements; n;) {
                        var r = 31 - at(n),
                            o = 1 << r;
                        o & t | e[r] & t && (e[r] |= t), n &= ~o
                    }
                }
                var bt = 0;

                function wt(e) {
                    return 1 < (e &= -e) ? 4 < e ? 268435455 & e ? 16 : 536870912 : 4 : 1
                }
                var _t, xt, St, Et, kt, Ct = !1,
                    Tt = [],
                    Nt = null,
                    Rt = null,
                    At = null,
                    Lt = new Map,
                    Ot = new Map,
                    It = [],
                    Dt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

                function jt(e, t) {
                    switch (e) {
                        case "focusin":
                        case "focusout":
                            Nt = null;
                            break;
                        case "dragenter":
                        case "dragleave":
                            Rt = null;
                            break;
                        case "mouseover":
                        case "mouseout":
                            At = null;
                            break;
                        case "pointerover":
                        case "pointerout":
                            Lt.delete(t.pointerId);
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                            Ot.delete(t.pointerId)
                    }
                }

                function Mt(e, t, n, r, o, i) {
                    return null === e || e.nativeEvent !== i ? (e = {
                        blockedOn: t,
                        domEventName: n,
                        eventSystemFlags: r,
                        nativeEvent: i,
                        targetContainers: [o]
                    }, null !== t && (null !== (t = wo(t)) && xt(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== o && -1 === t.indexOf(o) && t.push(o), e)
                }

                function Pt(e) {
                    var t = bo(e.target);
                    if (null !== t) {
                        var n = We(t);
                        if (null !== n)
                            if (13 === (t = n.tag)) {
                                if (null !== (t = He(n))) return e.blockedOn = t, void kt(e.priority, (function() {
                                    St(n)
                                }))
                            } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated) return void(e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
                    }
                    e.blockedOn = null
                }

                function zt(e) {
                    if (null !== e.blockedOn) return !1;
                    for (var t = e.targetContainers; 0 < t.length;) {
                        var n = Kt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
                        if (null !== n) return null !== (t = wo(n)) && xt(t), e.blockedOn = n, !1;
                        var r = new(n = e.nativeEvent).constructor(n.type, n);
                        we = r, n.target.dispatchEvent(r), we = null, t.shift()
                    }
                    return !0
                }

                function Bt(e, t, n) {
                    zt(e) && n.delete(t)
                }

                function Ft() {
                    Ct = !1, null !== Nt && zt(Nt) && (Nt = null), null !== Rt && zt(Rt) && (Rt = null), null !== At && zt(At) && (At = null), Lt.forEach(Bt), Ot.forEach(Bt)
                }

                function Ut(e, t) {
                    e.blockedOn === t && (e.blockedOn = null, Ct || (Ct = !0, o.unstable_scheduleCallback(o.unstable_NormalPriority, Ft)))
                }

                function Wt(e) {
                    function t(t) {
                        return Ut(t, e)
                    }
                    if (0 < Tt.length) {
                        Ut(Tt[0], e);
                        for (var n = 1; n < Tt.length; n++) {
                            var r = Tt[n];
                            r.blockedOn === e && (r.blockedOn = null)
                        }
                    }
                    for (null !== Nt && Ut(Nt, e), null !== Rt && Ut(Rt, e), null !== At && Ut(At, e), Lt.forEach(t), Ot.forEach(t), n = 0; n < It.length; n++)(r = It[n]).blockedOn === e && (r.blockedOn = null);
                    for (; 0 < It.length && null === (n = It[0]).blockedOn;) Pt(n), null === n.blockedOn && It.shift()
                }
                var Ht = w.ReactCurrentBatchConfig,
                    $t = !0;

                function Vt(e, t, n, r) {
                    var o = bt,
                        i = Ht.transition;
                    Ht.transition = null;
                    try {
                        bt = 1, Qt(e, t, n, r)
                    } finally {
                        bt = o, Ht.transition = i
                    }
                }

                function Yt(e, t, n, r) {
                    var o = bt,
                        i = Ht.transition;
                    Ht.transition = null;
                    try {
                        bt = 4, Qt(e, t, n, r)
                    } finally {
                        bt = o, Ht.transition = i
                    }
                }

                function Qt(e, t, n, r) {
                    if ($t) {
                        var o = Kt(e, t, n, r);
                        if (null === o) $r(e, t, r, qt, n), jt(e, r);
                        else if (function(e, t, n, r, o) {
                                switch (t) {
                                    case "focusin":
                                        return Nt = Mt(Nt, e, t, n, r, o), !0;
                                    case "dragenter":
                                        return Rt = Mt(Rt, e, t, n, r, o), !0;
                                    case "mouseover":
                                        return At = Mt(At, e, t, n, r, o), !0;
                                    case "pointerover":
                                        var i = o.pointerId;
                                        return Lt.set(i, Mt(Lt.get(i) || null, e, t, n, r, o)), !0;
                                    case "gotpointercapture":
                                        return i = o.pointerId, Ot.set(i, Mt(Ot.get(i) || null, e, t, n, r, o)), !0
                                }
                                return !1
                            }(o, e, t, n, r)) r.stopPropagation();
                        else if (jt(e, r), 4 & t && -1 < Dt.indexOf(e)) {
                            for (; null !== o;) {
                                var i = wo(o);
                                if (null !== i && _t(i), null === (i = Kt(e, t, n, r)) && $r(e, t, r, qt, n), i === o) break;
                                o = i
                            }
                            null !== o && r.stopPropagation()
                        } else $r(e, t, r, null, n)
                    }
                }
                var qt = null;

                function Kt(e, t, n, r) {
                    if (qt = null, null !== (e = bo(e = _e(r))))
                        if (null === (t = We(e))) e = null;
                        else if (13 === (n = t.tag)) {
                        if (null !== (e = He(t))) return e;
                        e = null
                    } else if (3 === n) {
                        if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
                        e = null
                    } else t !== e && (e = null);
                    return qt = e, null
                }

                function Xt(e) {
                    switch (e) {
                        case "cancel":
                        case "click":
                        case "close":
                        case "contextmenu":
                        case "copy":
                        case "cut":
                        case "auxclick":
                        case "dblclick":
                        case "dragend":
                        case "dragstart":
                        case "drop":
                        case "focusin":
                        case "focusout":
                        case "input":
                        case "invalid":
                        case "keydown":
                        case "keypress":
                        case "keyup":
                        case "mousedown":
                        case "mouseup":
                        case "paste":
                        case "pause":
                        case "play":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointerup":
                        case "ratechange":
                        case "reset":
                        case "resize":
                        case "seeked":
                        case "submit":
                        case "touchcancel":
                        case "touchend":
                        case "touchstart":
                        case "volumechange":
                        case "change":
                        case "selectionchange":
                        case "textInput":
                        case "compositionstart":
                        case "compositionend":
                        case "compositionupdate":
                        case "beforeblur":
                        case "afterblur":
                        case "beforeinput":
                        case "blur":
                        case "fullscreenchange":
                        case "focus":
                        case "hashchange":
                        case "popstate":
                        case "select":
                        case "selectstart":
                            return 1;
                        case "drag":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "mousemove":
                        case "mouseout":
                        case "mouseover":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "scroll":
                        case "toggle":
                        case "touchmove":
                        case "wheel":
                        case "mouseenter":
                        case "mouseleave":
                        case "pointerenter":
                        case "pointerleave":
                            return 4;
                        case "message":
                            switch (Je()) {
                                case Ze:
                                    return 1;
                                case et:
                                    return 4;
                                case tt:
                                case nt:
                                    return 16;
                                case rt:
                                    return 536870912;
                                default:
                                    return 16
                            }
                        default:
                            return 16
                    }
                }
                var Gt = null,
                    Jt = null,
                    Zt = null;

                function en() {
                    if (Zt) return Zt;
                    var e, t, n = Jt,
                        r = n.length,
                        o = "value" in Gt ? Gt.value : Gt.textContent,
                        i = o.length;
                    for (e = 0; e < r && n[e] === o[e]; e++);
                    var a = r - e;
                    for (t = 1; t <= a && n[r - t] === o[i - t]; t++);
                    return Zt = o.slice(e, 1 < t ? 1 - t : void 0)
                }

                function tn(e) {
                    var t = e.keyCode;
                    return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
                }

                function nn() {
                    return !0
                }

                function rn() {
                    return !1
                }

                function on(e) {
                    function t(t, n, r, o, i) {
                        for (var a in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = o, this.target = i, this.currentTarget = null, e) e.hasOwnProperty(a) && (t = e[a], this[a] = t ? t(o) : o[a]);
                        return this.isDefaultPrevented = (null != o.defaultPrevented ? o.defaultPrevented : !1 === o.returnValue) ? nn : rn, this.isPropagationStopped = rn, this
                    }
                    return P(t.prototype, {
                        preventDefault: function() {
                            this.defaultPrevented = !0;
                            var e = this.nativeEvent;
                            e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = nn)
                        },
                        stopPropagation: function() {
                            var e = this.nativeEvent;
                            e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = nn)
                        },
                        persist: function() {},
                        isPersistent: nn
                    }), t
                }
                var an, ln, un, sn = {
                        eventPhase: 0,
                        bubbles: 0,
                        cancelable: 0,
                        timeStamp: function(e) {
                            return e.timeStamp || Date.now()
                        },
                        defaultPrevented: 0,
                        isTrusted: 0
                    },
                    cn = on(sn),
                    fn = P({}, sn, {
                        view: 0,
                        detail: 0
                    }),
                    dn = on(fn),
                    pn = P({}, fn, {
                        screenX: 0,
                        screenY: 0,
                        clientX: 0,
                        clientY: 0,
                        pageX: 0,
                        pageY: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        altKey: 0,
                        metaKey: 0,
                        getModifierState: kn,
                        button: 0,
                        buttons: 0,
                        relatedTarget: function(e) {
                            return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
                        },
                        movementX: function(e) {
                            return "movementX" in e ? e.movementX : (e !== un && (un && "mousemove" === e.type ? (an = e.screenX - un.screenX, ln = e.screenY - un.screenY) : ln = an = 0, un = e), an)
                        },
                        movementY: function(e) {
                            return "movementY" in e ? e.movementY : ln
                        }
                    }),
                    hn = on(pn),
                    gn = on(P({}, pn, {
                        dataTransfer: 0
                    })),
                    mn = on(P({}, fn, {
                        relatedTarget: 0
                    })),
                    vn = on(P({}, sn, {
                        animationName: 0,
                        elapsedTime: 0,
                        pseudoElement: 0
                    })),
                    yn = P({}, sn, {
                        clipboardData: function(e) {
                            return "clipboardData" in e ? e.clipboardData : window.clipboardData
                        }
                    }),
                    bn = on(yn),
                    wn = on(P({}, sn, {
                        data: 0
                    })),
                    _n = {
                        Esc: "Escape",
                        Spacebar: " ",
                        Left: "ArrowLeft",
                        Up: "ArrowUp",
                        Right: "ArrowRight",
                        Down: "ArrowDown",
                        Del: "Delete",
                        Win: "OS",
                        Menu: "ContextMenu",
                        Apps: "ContextMenu",
                        Scroll: "ScrollLock",
                        MozPrintableKey: "Unidentified"
                    },
                    xn = {
                        8: "Backspace",
                        9: "Tab",
                        12: "Clear",
                        13: "Enter",
                        16: "Shift",
                        17: "Control",
                        18: "Alt",
                        19: "Pause",
                        20: "CapsLock",
                        27: "Escape",
                        32: " ",
                        33: "PageUp",
                        34: "PageDown",
                        35: "End",
                        36: "Home",
                        37: "ArrowLeft",
                        38: "ArrowUp",
                        39: "ArrowRight",
                        40: "ArrowDown",
                        45: "Insert",
                        46: "Delete",
                        112: "F1",
                        113: "F2",
                        114: "F3",
                        115: "F4",
                        116: "F5",
                        117: "F6",
                        118: "F7",
                        119: "F8",
                        120: "F9",
                        121: "F10",
                        122: "F11",
                        123: "F12",
                        144: "NumLock",
                        145: "ScrollLock",
                        224: "Meta"
                    },
                    Sn = {
                        Alt: "altKey",
                        Control: "ctrlKey",
                        Meta: "metaKey",
                        Shift: "shiftKey"
                    };

                function En(e) {
                    var t = this.nativeEvent;
                    return t.getModifierState ? t.getModifierState(e) : !!(e = Sn[e]) && !!t[e]
                }

                function kn() {
                    return En
                }
                var Cn = P({}, fn, {
                        key: function(e) {
                            if (e.key) {
                                var t = _n[e.key] || e.key;
                                if ("Unidentified" !== t) return t
                            }
                            return "keypress" === e.type ? 13 === (e = tn(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? xn[e.keyCode] || "Unidentified" : ""
                        },
                        code: 0,
                        location: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        altKey: 0,
                        metaKey: 0,
                        repeat: 0,
                        locale: 0,
                        getModifierState: kn,
                        charCode: function(e) {
                            return "keypress" === e.type ? tn(e) : 0
                        },
                        keyCode: function(e) {
                            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                        },
                        which: function(e) {
                            return "keypress" === e.type ? tn(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                        }
                    }),
                    Tn = on(Cn),
                    Nn = on(P({}, pn, {
                        pointerId: 0,
                        width: 0,
                        height: 0,
                        pressure: 0,
                        tangentialPressure: 0,
                        tiltX: 0,
                        tiltY: 0,
                        twist: 0,
                        pointerType: 0,
                        isPrimary: 0
                    })),
                    Rn = on(P({}, fn, {
                        touches: 0,
                        targetTouches: 0,
                        changedTouches: 0,
                        altKey: 0,
                        metaKey: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        getModifierState: kn
                    })),
                    An = on(P({}, sn, {
                        propertyName: 0,
                        elapsedTime: 0,
                        pseudoElement: 0
                    })),
                    Ln = P({}, pn, {
                        deltaX: function(e) {
                            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
                        },
                        deltaY: function(e) {
                            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
                        },
                        deltaZ: 0,
                        deltaMode: 0
                    }),
                    On = on(Ln),
                    In = [9, 13, 27, 32],
                    Dn = c && "CompositionEvent" in window,
                    jn = null;
                c && "documentMode" in document && (jn = document.documentMode);
                var Mn = c && "TextEvent" in window && !jn,
                    Pn = c && (!Dn || jn && 8 < jn && 11 >= jn),
                    zn = String.fromCharCode(32),
                    Bn = !1;

                function Fn(e, t) {
                    switch (e) {
                        case "keyup":
                            return -1 !== In.indexOf(t.keyCode);
                        case "keydown":
                            return 229 !== t.keyCode;
                        case "keypress":
                        case "mousedown":
                        case "focusout":
                            return !0;
                        default:
                            return !1
                    }
                }

                function Un(e) {
                    return "object" == typeof(e = e.detail) && "data" in e ? e.data : null
                }
                var Wn = !1;
                var Hn = {
                    color: !0,
                    date: !0,
                    datetime: !0,
                    "datetime-local": !0,
                    email: !0,
                    month: !0,
                    number: !0,
                    password: !0,
                    range: !0,
                    search: !0,
                    tel: !0,
                    text: !0,
                    time: !0,
                    url: !0,
                    week: !0
                };

                function $n(e) {
                    var t = e && e.nodeName && e.nodeName.toLowerCase();
                    return "input" === t ? !!Hn[e.type] : "textarea" === t
                }

                function Vn(e, t, n, r) {
                    Ce(r), 0 < (t = Yr(t, "onChange")).length && (n = new cn("onChange", "change", null, n, r), e.push({
                        event: n,
                        listeners: t
                    }))
                }
                var Yn = null,
                    Qn = null;

                function qn(e) {
                    zr(e, 0)
                }

                function Kn(e) {
                    if (Q(_o(e))) return e
                }

                function Xn(e, t) {
                    if ("change" === e) return t
                }
                var Gn = !1;
                if (c) {
                    var Jn;
                    if (c) {
                        var Zn = "oninput" in document;
                        if (!Zn) {
                            var er = document.createElement("div");
                            er.setAttribute("oninput", "return;"), Zn = "function" == typeof er.oninput
                        }
                        Jn = Zn
                    } else Jn = !1;
                    Gn = Jn && (!document.documentMode || 9 < document.documentMode)
                }

                function tr() {
                    Yn && (Yn.detachEvent("onpropertychange", nr), Qn = Yn = null)
                }

                function nr(e) {
                    if ("value" === e.propertyName && Kn(Qn)) {
                        var t = [];
                        Vn(t, Qn, e, _e(e)), Le(qn, t)
                    }
                }

                function rr(e, t, n) {
                    "focusin" === e ? (tr(), Qn = n, (Yn = t).attachEvent("onpropertychange", nr)) : "focusout" === e && tr()
                }

                function or(e) {
                    if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Kn(Qn)
                }

                function ir(e, t) {
                    if ("click" === e) return Kn(t)
                }

                function ar(e, t) {
                    if ("input" === e || "change" === e) return Kn(t)
                }
                var lr = "function" == typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
                };

                function ur(e, t) {
                    if (lr(e, t)) return !0;
                    if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
                    var n = Object.keys(e),
                        r = Object.keys(t);
                    if (n.length !== r.length) return !1;
                    for (r = 0; r < n.length; r++) {
                        var o = n[r];
                        if (!f.call(t, o) || !lr(e[o], t[o])) return !1
                    }
                    return !0
                }

                function sr(e) {
                    for (; e && e.firstChild;) e = e.firstChild;
                    return e
                }

                function cr(e, t) {
                    var n, r = sr(e);
                    for (e = 0; r;) {
                        if (3 === r.nodeType) {
                            if (n = e + r.textContent.length, e <= t && n >= t) return {
                                node: r,
                                offset: t - e
                            };
                            e = n
                        }
                        e: {
                            for (; r;) {
                                if (r.nextSibling) {
                                    r = r.nextSibling;
                                    break e
                                }
                                r = r.parentNode
                            }
                            r = void 0
                        }
                        r = sr(r)
                    }
                }

                function fr(e, t) {
                    return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? fr(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
                }

                function dr() {
                    for (var e = window, t = q(); t instanceof e.HTMLIFrameElement;) {
                        try {
                            var n = "string" == typeof t.contentWindow.location.href
                        } catch (e) {
                            n = !1
                        }
                        if (!n) break;
                        t = q((e = t.contentWindow).document)
                    }
                    return t
                }

                function pr(e) {
                    var t = e && e.nodeName && e.nodeName.toLowerCase();
                    return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
                }

                function hr(e) {
                    var t = dr(),
                        n = e.focusedElem,
                        r = e.selectionRange;
                    if (t !== n && n && n.ownerDocument && fr(n.ownerDocument.documentElement, n)) {
                        if (null !== r && pr(n))
                            if (t = r.start, void 0 === (e = r.end) && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
                            else if ((e = (t = n.ownerDocument || document) && t.defaultView || window).getSelection) {
                            e = e.getSelection();
                            var o = n.textContent.length,
                                i = Math.min(r.start, o);
                            r = void 0 === r.end ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = cr(n, i);
                            var a = cr(n, r);
                            o && a && (1 !== e.rangeCount || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && ((t = t.createRange()).setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset), e.addRange(t)))
                        }
                        for (t = [], e = n; e = e.parentNode;) 1 === e.nodeType && t.push({
                            element: e,
                            left: e.scrollLeft,
                            top: e.scrollTop
                        });
                        for ("function" == typeof n.focus && n.focus(), n = 0; n < t.length; n++)(e = t[n]).element.scrollLeft = e.left, e.element.scrollTop = e.top
                    }
                }
                var gr = c && "documentMode" in document && 11 >= document.documentMode,
                    mr = null,
                    vr = null,
                    yr = null,
                    br = !1;

                function wr(e, t, n) {
                    var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
                    br || null == mr || mr !== q(r) || ("selectionStart" in (r = mr) && pr(r) ? r = {
                        start: r.selectionStart,
                        end: r.selectionEnd
                    } : r = {
                        anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
                        anchorOffset: r.anchorOffset,
                        focusNode: r.focusNode,
                        focusOffset: r.focusOffset
                    }, yr && ur(yr, r) || (yr = r, 0 < (r = Yr(vr, "onSelect")).length && (t = new cn("onSelect", "select", null, t, n), e.push({
                        event: t,
                        listeners: r
                    }), t.target = mr)))
                }

                function _r(e, t) {
                    var n = {};
                    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
                }
                var xr = {
                        animationend: _r("Animation", "AnimationEnd"),
                        animationiteration: _r("Animation", "AnimationIteration"),
                        animationstart: _r("Animation", "AnimationStart"),
                        transitionend: _r("Transition", "TransitionEnd")
                    },
                    Sr = {},
                    Er = {};

                function kr(e) {
                    if (Sr[e]) return Sr[e];
                    if (!xr[e]) return e;
                    var t, n = xr[e];
                    for (t in n)
                        if (n.hasOwnProperty(t) && t in Er) return Sr[e] = n[t];
                    return e
                }
                c && (Er = document.createElement("div").style, "AnimationEvent" in window || (delete xr.animationend.animation, delete xr.animationiteration.animation, delete xr.animationstart.animation), "TransitionEvent" in window || delete xr.transitionend.transition);
                var Cr = kr("animationend"),
                    Tr = kr("animationiteration"),
                    Nr = kr("animationstart"),
                    Rr = kr("transitionend"),
                    Ar = new Map,
                    Lr = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

                function Or(e, t) {
                    Ar.set(e, t), u(t, [e])
                }
                for (var Ir = 0; Ir < Lr.length; Ir++) {
                    var Dr = Lr[Ir];
                    Or(Dr.toLowerCase(), "on" + (Dr[0].toUpperCase() + Dr.slice(1)))
                }
                Or(Cr, "onAnimationEnd"), Or(Tr, "onAnimationIteration"), Or(Nr, "onAnimationStart"), Or("dblclick", "onDoubleClick"), Or("focusin", "onFocus"), Or("focusout", "onBlur"), Or(Rr, "onTransitionEnd"), s("onMouseEnter", ["mouseout", "mouseover"]), s("onMouseLeave", ["mouseout", "mouseover"]), s("onPointerEnter", ["pointerout", "pointerover"]), s("onPointerLeave", ["pointerout", "pointerover"]), u("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), u("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), u("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
                var jr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
                    Mr = new Set("cancel close invalid load scroll toggle".split(" ").concat(jr));

                function Pr(e, t, n) {
                    var r = e.type || "unknown-event";
                    e.currentTarget = n,
                        function(e, t, n, r, o, a, l, u, s) {
                            if (Ue.apply(this, arguments), Me) {
                                if (!Me) throw Error(i(198));
                                var c = Pe;
                                Me = !1, Pe = null, ze || (ze = !0, Be = c)
                            }
                        }(r, t, void 0, e), e.currentTarget = null
                }

                function zr(e, t) {
                    t = !!(4 & t);
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n],
                            o = r.event;
                        r = r.listeners;
                        e: {
                            var i = void 0;
                            if (t)
                                for (var a = r.length - 1; 0 <= a; a--) {
                                    var l = r[a],
                                        u = l.instance,
                                        s = l.currentTarget;
                                    if (l = l.listener, u !== i && o.isPropagationStopped()) break e;
                                    Pr(o, l, s), i = u
                                } else
                                    for (a = 0; a < r.length; a++) {
                                        if (u = (l = r[a]).instance, s = l.currentTarget, l = l.listener, u !== i && o.isPropagationStopped()) break e;
                                        Pr(o, l, s), i = u
                                    }
                        }
                    }
                    if (ze) throw e = Be, ze = !1, Be = null, e
                }

                function Br(e, t) {
                    var n = t[mo];
                    void 0 === n && (n = t[mo] = new Set);
                    var r = e + "__bubble";
                    n.has(r) || (Hr(t, e, 2, !1), n.add(r))
                }

                function Fr(e, t, n) {
                    var r = 0;
                    t && (r |= 4), Hr(n, e, r, t)
                }
                var Ur = "_reactListening" + Math.random().toString(36).slice(2);

                function Wr(e) {
                    if (!e[Ur]) {
                        e[Ur] = !0, a.forEach((function(t) {
                            "selectionchange" !== t && (Mr.has(t) || Fr(t, !1, e), Fr(t, !0, e))
                        }));
                        var t = 9 === e.nodeType ? e : e.ownerDocument;
                        null === t || t[Ur] || (t[Ur] = !0, Fr("selectionchange", !1, t))
                    }
                }

                function Hr(e, t, n, r) {
                    switch (Xt(t)) {
                        case 1:
                            var o = Vt;
                            break;
                        case 4:
                            o = Yt;
                            break;
                        default:
                            o = Qt
                    }
                    n = o.bind(null, t, n, e), o = void 0, !Ie || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (o = !0), r ? void 0 !== o ? e.addEventListener(t, n, {
                        capture: !0,
                        passive: o
                    }) : e.addEventListener(t, n, !0) : void 0 !== o ? e.addEventListener(t, n, {
                        passive: o
                    }) : e.addEventListener(t, n, !1)
                }

                function $r(e, t, n, r, o) {
                    var i = r;
                    if (!(1 & t || 2 & t || null === r)) e: for (;;) {
                        if (null === r) return;
                        var a = r.tag;
                        if (3 === a || 4 === a) {
                            var l = r.stateNode.containerInfo;
                            if (l === o || 8 === l.nodeType && l.parentNode === o) break;
                            if (4 === a)
                                for (a = r.return; null !== a;) {
                                    var u = a.tag;
                                    if ((3 === u || 4 === u) && ((u = a.stateNode.containerInfo) === o || 8 === u.nodeType && u.parentNode === o)) return;
                                    a = a.return
                                }
                            for (; null !== l;) {
                                if (null === (a = bo(l))) return;
                                if (5 === (u = a.tag) || 6 === u) {
                                    r = i = a;
                                    continue e
                                }
                                l = l.parentNode
                            }
                        }
                        r = r.return
                    }
                    Le((function() {
                        var r = i,
                            o = _e(n),
                            a = [];
                        e: {
                            var l = Ar.get(e);
                            if (void 0 !== l) {
                                var u = cn,
                                    s = e;
                                switch (e) {
                                    case "keypress":
                                        if (0 === tn(n)) break e;
                                    case "keydown":
                                    case "keyup":
                                        u = Tn;
                                        break;
                                    case "focusin":
                                        s = "focus", u = mn;
                                        break;
                                    case "focusout":
                                        s = "blur", u = mn;
                                        break;
                                    case "beforeblur":
                                    case "afterblur":
                                        u = mn;
                                        break;
                                    case "click":
                                        if (2 === n.button) break e;
                                    case "auxclick":
                                    case "dblclick":
                                    case "mousedown":
                                    case "mousemove":
                                    case "mouseup":
                                    case "mouseout":
                                    case "mouseover":
                                    case "contextmenu":
                                        u = hn;
                                        break;
                                    case "drag":
                                    case "dragend":
                                    case "dragenter":
                                    case "dragexit":
                                    case "dragleave":
                                    case "dragover":
                                    case "dragstart":
                                    case "drop":
                                        u = gn;
                                        break;
                                    case "touchcancel":
                                    case "touchend":
                                    case "touchmove":
                                    case "touchstart":
                                        u = Rn;
                                        break;
                                    case Cr:
                                    case Tr:
                                    case Nr:
                                        u = vn;
                                        break;
                                    case Rr:
                                        u = An;
                                        break;
                                    case "scroll":
                                        u = dn;
                                        break;
                                    case "wheel":
                                        u = On;
                                        break;
                                    case "copy":
                                    case "cut":
                                    case "paste":
                                        u = bn;
                                        break;
                                    case "gotpointercapture":
                                    case "lostpointercapture":
                                    case "pointercancel":
                                    case "pointerdown":
                                    case "pointermove":
                                    case "pointerout":
                                    case "pointerover":
                                    case "pointerup":
                                        u = Nn
                                }
                                var c = !!(4 & t),
                                    f = !c && "scroll" === e,
                                    d = c ? null !== l ? l + "Capture" : null : l;
                                c = [];
                                for (var p, h = r; null !== h;) {
                                    var g = (p = h).stateNode;
                                    if (5 === p.tag && null !== g && (p = g, null !== d && (null != (g = Oe(h, d)) && c.push(Vr(h, g, p)))), f) break;
                                    h = h.return
                                }
                                0 < c.length && (l = new u(l, s, null, n, o), a.push({
                                    event: l,
                                    listeners: c
                                }))
                            }
                        }
                        if (!(7 & t)) {
                            if (u = "mouseout" === e || "pointerout" === e, (!(l = "mouseover" === e || "pointerover" === e) || n === we || !(s = n.relatedTarget || n.fromElement) || !bo(s) && !s[go]) && (u || l) && (l = o.window === o ? o : (l = o.ownerDocument) ? l.defaultView || l.parentWindow : window, u ? (u = r, null !== (s = (s = n.relatedTarget || n.toElement) ? bo(s) : null) && (s !== (f = We(s)) || 5 !== s.tag && 6 !== s.tag) && (s = null)) : (u = null, s = r), u !== s)) {
                                if (c = hn, g = "onMouseLeave", d = "onMouseEnter", h = "mouse", "pointerout" !== e && "pointerover" !== e || (c = Nn, g = "onPointerLeave", d = "onPointerEnter", h = "pointer"), f = null == u ? l : _o(u), p = null == s ? l : _o(s), (l = new c(g, h + "leave", u, n, o)).target = f, l.relatedTarget = p, g = null, bo(o) === r && ((c = new c(d, h + "enter", s, n, o)).target = p, c.relatedTarget = f, g = c), f = g, u && s) e: {
                                    for (d = s, h = 0, p = c = u; p; p = Qr(p)) h++;
                                    for (p = 0, g = d; g; g = Qr(g)) p++;
                                    for (; 0 < h - p;) c = Qr(c),
                                    h--;
                                    for (; 0 < p - h;) d = Qr(d),
                                    p--;
                                    for (; h--;) {
                                        if (c === d || null !== d && c === d.alternate) break e;
                                        c = Qr(c), d = Qr(d)
                                    }
                                    c = null
                                }
                                else c = null;
                                null !== u && qr(a, l, u, c, !1), null !== s && null !== f && qr(a, f, s, c, !0)
                            }
                            if ("select" === (u = (l = r ? _o(r) : window).nodeName && l.nodeName.toLowerCase()) || "input" === u && "file" === l.type) var m = Xn;
                            else if ($n(l))
                                if (Gn) m = ar;
                                else {
                                    m = or;
                                    var v = rr
                                }
                            else(u = l.nodeName) && "input" === u.toLowerCase() && ("checkbox" === l.type || "radio" === l.type) && (m = ir);
                            switch (m && (m = m(e, r)) ? Vn(a, m, n, o) : (v && v(e, l, r), "focusout" === e && (v = l._wrapperState) && v.controlled && "number" === l.type && ee(l, "number", l.value)), v = r ? _o(r) : window, e) {
                                case "focusin":
                                    ($n(v) || "true" === v.contentEditable) && (mr = v, vr = r, yr = null);
                                    break;
                                case "focusout":
                                    yr = vr = mr = null;
                                    break;
                                case "mousedown":
                                    br = !0;
                                    break;
                                case "contextmenu":
                                case "mouseup":
                                case "dragend":
                                    br = !1, wr(a, n, o);
                                    break;
                                case "selectionchange":
                                    if (gr) break;
                                case "keydown":
                                case "keyup":
                                    wr(a, n, o)
                            }
                            var y;
                            if (Dn) e: {
                                switch (e) {
                                    case "compositionstart":
                                        var b = "onCompositionStart";
                                        break e;
                                    case "compositionend":
                                        b = "onCompositionEnd";
                                        break e;
                                    case "compositionupdate":
                                        b = "onCompositionUpdate";
                                        break e
                                }
                                b = void 0
                            }
                            else Wn ? Fn(e, n) && (b = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (b = "onCompositionStart");
                            b && (Pn && "ko" !== n.locale && (Wn || "onCompositionStart" !== b ? "onCompositionEnd" === b && Wn && (y = en()) : (Jt = "value" in (Gt = o) ? Gt.value : Gt.textContent, Wn = !0)), 0 < (v = Yr(r, b)).length && (b = new wn(b, e, null, n, o), a.push({
                                event: b,
                                listeners: v
                            }), y ? b.data = y : null !== (y = Un(n)) && (b.data = y))), (y = Mn ? function(e, t) {
                                switch (e) {
                                    case "compositionend":
                                        return Un(t);
                                    case "keypress":
                                        return 32 !== t.which ? null : (Bn = !0, zn);
                                    case "textInput":
                                        return (e = t.data) === zn && Bn ? null : e;
                                    default:
                                        return null
                                }
                            }(e, n) : function(e, t) {
                                if (Wn) return "compositionend" === e || !Dn && Fn(e, t) ? (e = en(), Zt = Jt = Gt = null, Wn = !1, e) : null;
                                switch (e) {
                                    case "paste":
                                    default:
                                        return null;
                                    case "keypress":
                                        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                                            if (t.char && 1 < t.char.length) return t.char;
                                            if (t.which) return String.fromCharCode(t.which)
                                        }
                                        return null;
                                    case "compositionend":
                                        return Pn && "ko" !== t.locale ? null : t.data
                                }
                            }(e, n)) && (0 < (r = Yr(r, "onBeforeInput")).length && (o = new wn("onBeforeInput", "beforeinput", null, n, o), a.push({
                                event: o,
                                listeners: r
                            }), o.data = y))
                        }
                        zr(a, t)
                    }))
                }

                function Vr(e, t, n) {
                    return {
                        instance: e,
                        listener: t,
                        currentTarget: n
                    }
                }

                function Yr(e, t) {
                    for (var n = t + "Capture", r = []; null !== e;) {
                        var o = e,
                            i = o.stateNode;
                        5 === o.tag && null !== i && (o = i, null != (i = Oe(e, n)) && r.unshift(Vr(e, i, o)), null != (i = Oe(e, t)) && r.push(Vr(e, i, o))), e = e.return
                    }
                    return r
                }

                function Qr(e) {
                    if (null === e) return null;
                    do {
                        e = e.return
                    } while (e && 5 !== e.tag);
                    return e || null
                }

                function qr(e, t, n, r, o) {
                    for (var i = t._reactName, a = []; null !== n && n !== r;) {
                        var l = n,
                            u = l.alternate,
                            s = l.stateNode;
                        if (null !== u && u === r) break;
                        5 === l.tag && null !== s && (l = s, o ? null != (u = Oe(n, i)) && a.unshift(Vr(n, u, l)) : o || null != (u = Oe(n, i)) && a.push(Vr(n, u, l))), n = n.return
                    }
                    0 !== a.length && e.push({
                        event: t,
                        listeners: a
                    })
                }
                var Kr = /\r\n?/g,
                    Xr = /\u0000|\uFFFD/g;

                function Gr(e) {
                    return ("string" == typeof e ? e : "" + e).replace(Kr, "\n").replace(Xr, "")
                }

                function Jr(e, t, n) {
                    if (t = Gr(t), Gr(e) !== t && n) throw Error(i(425))
                }

                function Zr() {}
                var eo = null,
                    to = null;

                function no(e, t) {
                    return "textarea" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
                }
                var ro = "function" == typeof setTimeout ? setTimeout : void 0,
                    oo = "function" == typeof clearTimeout ? clearTimeout : void 0,
                    io = "function" == typeof Promise ? Promise : void 0,
                    ao = "function" == typeof queueMicrotask ? queueMicrotask : void 0 !== io ? function(e) {
                        return io.resolve(null).then(e).catch(lo)
                    } : ro;

                function lo(e) {
                    setTimeout((function() {
                        throw e
                    }))
                }

                function uo(e, t) {
                    var n = t,
                        r = 0;
                    do {
                        var o = n.nextSibling;
                        if (e.removeChild(n), o && 8 === o.nodeType)
                            if ("/$" === (n = o.data)) {
                                if (0 === r) return e.removeChild(o), void Wt(t);
                                r--
                            } else "$" !== n && "$?" !== n && "$!" !== n || r++;
                        n = o
                    } while (n);
                    Wt(t)
                }

                function so(e) {
                    for (; null != e; e = e.nextSibling) {
                        var t = e.nodeType;
                        if (1 === t || 3 === t) break;
                        if (8 === t) {
                            if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
                            if ("/$" === t) return null
                        }
                    }
                    return e
                }

                function co(e) {
                    e = e.previousSibling;
                    for (var t = 0; e;) {
                        if (8 === e.nodeType) {
                            var n = e.data;
                            if ("$" === n || "$!" === n || "$?" === n) {
                                if (0 === t) return e;
                                t--
                            } else "/$" === n && t++
                        }
                        e = e.previousSibling
                    }
                    return null
                }
                var fo = Math.random().toString(36).slice(2),
                    po = "__reactFiber$" + fo,
                    ho = "__reactProps$" + fo,
                    go = "__reactContainer$" + fo,
                    mo = "__reactEvents$" + fo,
                    vo = "__reactListeners$" + fo,
                    yo = "__reactHandles$" + fo;

                function bo(e) {
                    var t = e[po];
                    if (t) return t;
                    for (var n = e.parentNode; n;) {
                        if (t = n[go] || n[po]) {
                            if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
                                for (e = co(e); null !== e;) {
                                    if (n = e[po]) return n;
                                    e = co(e)
                                }
                            return t
                        }
                        n = (e = n).parentNode
                    }
                    return null
                }

                function wo(e) {
                    return !(e = e[po] || e[go]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
                }

                function _o(e) {
                    if (5 === e.tag || 6 === e.tag) return e.stateNode;
                    throw Error(i(33))
                }

                function xo(e) {
                    return e[ho] || null
                }
                var So = [],
                    Eo = -1;

                function ko(e) {
                    return {
                        current: e
                    }
                }

                function Co(e) {
                    0 > Eo || (e.current = So[Eo], So[Eo] = null, Eo--)
                }

                function To(e, t) {
                    Eo++, So[Eo] = e.current, e.current = t
                }
                var No = {},
                    Ro = ko(No),
                    Ao = ko(!1),
                    Lo = No;

                function Oo(e, t) {
                    var n = e.type.contextTypes;
                    if (!n) return No;
                    var r = e.stateNode;
                    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
                    var o, i = {};
                    for (o in n) i[o] = t[o];
                    return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i
                }

                function Io(e) {
                    return null != (e = e.childContextTypes)
                }

                function Do() {
                    Co(Ao), Co(Ro)
                }

                function jo(e, t, n) {
                    if (Ro.current !== No) throw Error(i(168));
                    To(Ro, t), To(Ao, n)
                }

                function Mo(e, t, n) {
                    var r = e.stateNode;
                    if (t = t.childContextTypes, "function" != typeof r.getChildContext) return n;
                    for (var o in r = r.getChildContext())
                        if (!(o in t)) throw Error(i(108, H(e) || "Unknown", o));
                    return P({}, n, r)
                }

                function Po(e) {
                    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || No, Lo = Ro.current, To(Ro, e), To(Ao, Ao.current), !0
                }

                function zo(e, t, n) {
                    var r = e.stateNode;
                    if (!r) throw Error(i(169));
                    n ? (e = Mo(e, t, Lo), r.__reactInternalMemoizedMergedChildContext = e, Co(Ao), Co(Ro), To(Ro, e)) : Co(Ao), To(Ao, n)
                }
                var Bo = null,
                    Fo = !1,
                    Uo = !1;

                function Wo(e) {
                    null === Bo ? Bo = [e] : Bo.push(e)
                }

                function Ho() {
                    if (!Uo && null !== Bo) {
                        Uo = !0;
                        var e = 0,
                            t = bt;
                        try {
                            var n = Bo;
                            for (bt = 1; e < n.length; e++) {
                                var r = n[e];
                                do {
                                    r = r(!0)
                                } while (null !== r)
                            }
                            Bo = null, Fo = !1
                        } catch (t) {
                            throw null !== Bo && (Bo = Bo.slice(e + 1)), Qe(Ze, Ho), t
                        } finally {
                            bt = t, Uo = !1
                        }
                    }
                    return null
                }
                var $o = [],
                    Vo = 0,
                    Yo = null,
                    Qo = 0,
                    qo = [],
                    Ko = 0,
                    Xo = null,
                    Go = 1,
                    Jo = "";

                function Zo(e, t) {
                    $o[Vo++] = Qo, $o[Vo++] = Yo, Yo = e, Qo = t
                }

                function ei(e, t, n) {
                    qo[Ko++] = Go, qo[Ko++] = Jo, qo[Ko++] = Xo, Xo = e;
                    var r = Go;
                    e = Jo;
                    var o = 32 - at(r) - 1;
                    r &= ~(1 << o), n += 1;
                    var i = 32 - at(t) + o;
                    if (30 < i) {
                        var a = o - o % 5;
                        i = (r & (1 << a) - 1).toString(32), r >>= a, o -= a, Go = 1 << 32 - at(t) + o | n << o | r, Jo = i + e
                    } else Go = 1 << i | n << o | r, Jo = e
                }

                function ti(e) {
                    null !== e.return && (Zo(e, 1), ei(e, 1, 0))
                }

                function ni(e) {
                    for (; e === Yo;) Yo = $o[--Vo], $o[Vo] = null, Qo = $o[--Vo], $o[Vo] = null;
                    for (; e === Xo;) Xo = qo[--Ko], qo[Ko] = null, Jo = qo[--Ko], qo[Ko] = null, Go = qo[--Ko], qo[Ko] = null
                }
                var ri = null,
                    oi = null,
                    ii = !1,
                    ai = null;

                function li(e, t) {
                    var n = Ls(5, null, null, 0);
                    n.elementType = "DELETED", n.stateNode = t, n.return = e, null === (t = e.deletions) ? (e.deletions = [n], e.flags |= 16) : t.push(n)
                }

                function ui(e, t) {
                    switch (e.tag) {
                        case 5:
                            var n = e.type;
                            return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, ri = e, oi = so(t.firstChild), !0);
                        case 6:
                            return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, ri = e, oi = null, !0);
                        case 13:
                            return null !== (t = 8 !== t.nodeType ? null : t) && (n = null !== Xo ? {
                                id: Go,
                                overflow: Jo
                            } : null, e.memoizedState = {
                                dehydrated: t,
                                treeContext: n,
                                retryLane: 1073741824
                            }, (n = Ls(18, null, null, 0)).stateNode = t, n.return = e, e.child = n, ri = e, oi = null, !0);
                        default:
                            return !1
                    }
                }

                function si(e) {
                    return !(!(1 & e.mode) || 128 & e.flags)
                }

                function ci(e) {
                    if (ii) {
                        var t = oi;
                        if (t) {
                            var n = t;
                            if (!ui(e, t)) {
                                if (si(e)) throw Error(i(418));
                                t = so(n.nextSibling);
                                var r = ri;
                                t && ui(e, t) ? li(r, n) : (e.flags = -4097 & e.flags | 2, ii = !1, ri = e)
                            }
                        } else {
                            if (si(e)) throw Error(i(418));
                            e.flags = -4097 & e.flags | 2, ii = !1, ri = e
                        }
                    }
                }

                function fi(e) {
                    for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
                    ri = e
                }

                function di(e) {
                    if (e !== ri) return !1;
                    if (!ii) return fi(e), ii = !0, !1;
                    var t;
                    if ((t = 3 !== e.tag) && !(t = 5 !== e.tag) && (t = "head" !== (t = e.type) && "body" !== t && !no(e.type, e.memoizedProps)), t && (t = oi)) {
                        if (si(e)) throw pi(), Error(i(418));
                        for (; t;) li(e, t), t = so(t.nextSibling)
                    }
                    if (fi(e), 13 === e.tag) {
                        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(i(317));
                        e: {
                            for (e = e.nextSibling, t = 0; e;) {
                                if (8 === e.nodeType) {
                                    var n = e.data;
                                    if ("/$" === n) {
                                        if (0 === t) {
                                            oi = so(e.nextSibling);
                                            break e
                                        }
                                        t--
                                    } else "$" !== n && "$!" !== n && "$?" !== n || t++
                                }
                                e = e.nextSibling
                            }
                            oi = null
                        }
                    } else oi = ri ? so(e.stateNode.nextSibling) : null;
                    return !0
                }

                function pi() {
                    for (var e = oi; e;) e = so(e.nextSibling)
                }

                function hi() {
                    oi = ri = null, ii = !1
                }

                function gi(e) {
                    null === ai ? ai = [e] : ai.push(e)
                }
                var mi = w.ReactCurrentBatchConfig;

                function vi(e, t, n) {
                    if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
                        if (n._owner) {
                            if (n = n._owner) {
                                if (1 !== n.tag) throw Error(i(309));
                                var r = n.stateNode
                            }
                            if (!r) throw Error(i(147, e));
                            var o = r,
                                a = "" + e;
                            return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === a ? t.ref : (t = function(e) {
                                var t = o.refs;
                                null === e ? delete t[a] : t[a] = e
                            }, t._stringRef = a, t)
                        }
                        if ("string" != typeof e) throw Error(i(284));
                        if (!n._owner) throw Error(i(290, e))
                    }
                    return e
                }

                function yi(e, t) {
                    throw e = Object.prototype.toString.call(t), Error(i(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
                }

                function bi(e) {
                    return (0, e._init)(e._payload)
                }

                function wi(e) {
                    function t(t, n) {
                        if (e) {
                            var r = t.deletions;
                            null === r ? (t.deletions = [n], t.flags |= 16) : r.push(n)
                        }
                    }

                    function n(n, r) {
                        if (!e) return null;
                        for (; null !== r;) t(n, r), r = r.sibling;
                        return null
                    }

                    function r(e, t) {
                        for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
                        return e
                    }

                    function o(e, t) {
                        return (e = Is(e, t)).index = 0, e.sibling = null, e
                    }

                    function a(t, n, r) {
                        return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 2, n) : r : (t.flags |= 2, n) : (t.flags |= 1048576, n)
                    }

                    function l(t) {
                        return e && null === t.alternate && (t.flags |= 2), t
                    }

                    function u(e, t, n, r) {
                        return null === t || 6 !== t.tag ? ((t = Ps(n, e.mode, r)).return = e, t) : ((t = o(t, n)).return = e, t)
                    }

                    function s(e, t, n, r) {
                        var i = n.type;
                        return i === S ? f(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === i || "object" == typeof i && null !== i && i.$$typeof === O && bi(i) === t.type) ? ((r = o(t, n.props)).ref = vi(e, t, n), r.return = e, r) : ((r = Ds(n.type, n.key, n.props, null, e.mode, r)).ref = vi(e, t, n), r.return = e, r)
                    }

                    function c(e, t, n, r) {
                        return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = zs(n, e.mode, r)).return = e, t) : ((t = o(t, n.children || [])).return = e, t)
                    }

                    function f(e, t, n, r, i) {
                        return null === t || 7 !== t.tag ? ((t = js(n, e.mode, r, i)).return = e, t) : ((t = o(t, n)).return = e, t)
                    }

                    function d(e, t, n) {
                        if ("string" == typeof t && "" !== t || "number" == typeof t) return (t = Ps("" + t, e.mode, n)).return = e, t;
                        if ("object" == typeof t && null !== t) {
                            switch (t.$$typeof) {
                                case _:
                                    return (n = Ds(t.type, t.key, t.props, null, e.mode, n)).ref = vi(e, null, t), n.return = e, n;
                                case x:
                                    return (t = zs(t, e.mode, n)).return = e, t;
                                case O:
                                    return d(e, (0, t._init)(t._payload), n)
                            }
                            if (te(t) || j(t)) return (t = js(t, e.mode, n, null)).return = e, t;
                            yi(e, t)
                        }
                        return null
                    }

                    function p(e, t, n, r) {
                        var o = null !== t ? t.key : null;
                        if ("string" == typeof n && "" !== n || "number" == typeof n) return null !== o ? null : u(e, t, "" + n, r);
                        if ("object" == typeof n && null !== n) {
                            switch (n.$$typeof) {
                                case _:
                                    return n.key === o ? s(e, t, n, r) : null;
                                case x:
                                    return n.key === o ? c(e, t, n, r) : null;
                                case O:
                                    return p(e, t, (o = n._init)(n._payload), r)
                            }
                            if (te(n) || j(n)) return null !== o ? null : f(e, t, n, r, null);
                            yi(e, n)
                        }
                        return null
                    }

                    function h(e, t, n, r, o) {
                        if ("string" == typeof r && "" !== r || "number" == typeof r) return u(t, e = e.get(n) || null, "" + r, o);
                        if ("object" == typeof r && null !== r) {
                            switch (r.$$typeof) {
                                case _:
                                    return s(t, e = e.get(null === r.key ? n : r.key) || null, r, o);
                                case x:
                                    return c(t, e = e.get(null === r.key ? n : r.key) || null, r, o);
                                case O:
                                    return h(e, t, n, (0, r._init)(r._payload), o)
                            }
                            if (te(r) || j(r)) return f(t, e = e.get(n) || null, r, o, null);
                            yi(t, r)
                        }
                        return null
                    }

                    function g(o, i, l, u) {
                        for (var s = null, c = null, f = i, g = i = 0, m = null; null !== f && g < l.length; g++) {
                            f.index > g ? (m = f, f = null) : m = f.sibling;
                            var v = p(o, f, l[g], u);
                            if (null === v) {
                                null === f && (f = m);
                                break
                            }
                            e && f && null === v.alternate && t(o, f), i = a(v, i, g), null === c ? s = v : c.sibling = v, c = v, f = m
                        }
                        if (g === l.length) return n(o, f), ii && Zo(o, g), s;
                        if (null === f) {
                            for (; g < l.length; g++) null !== (f = d(o, l[g], u)) && (i = a(f, i, g), null === c ? s = f : c.sibling = f, c = f);
                            return ii && Zo(o, g), s
                        }
                        for (f = r(o, f); g < l.length; g++) null !== (m = h(f, o, g, l[g], u)) && (e && null !== m.alternate && f.delete(null === m.key ? g : m.key), i = a(m, i, g), null === c ? s = m : c.sibling = m, c = m);
                        return e && f.forEach((function(e) {
                            return t(o, e)
                        })), ii && Zo(o, g), s
                    }

                    function m(o, l, u, s) {
                        var c = j(u);
                        if ("function" != typeof c) throw Error(i(150));
                        if (null == (u = c.call(u))) throw Error(i(151));
                        for (var f = c = null, g = l, m = l = 0, v = null, y = u.next(); null !== g && !y.done; m++, y = u.next()) {
                            g.index > m ? (v = g, g = null) : v = g.sibling;
                            var b = p(o, g, y.value, s);
                            if (null === b) {
                                null === g && (g = v);
                                break
                            }
                            e && g && null === b.alternate && t(o, g), l = a(b, l, m), null === f ? c = b : f.sibling = b, f = b, g = v
                        }
                        if (y.done) return n(o, g), ii && Zo(o, m), c;
                        if (null === g) {
                            for (; !y.done; m++, y = u.next()) null !== (y = d(o, y.value, s)) && (l = a(y, l, m), null === f ? c = y : f.sibling = y, f = y);
                            return ii && Zo(o, m), c
                        }
                        for (g = r(o, g); !y.done; m++, y = u.next()) null !== (y = h(g, o, m, y.value, s)) && (e && null !== y.alternate && g.delete(null === y.key ? m : y.key), l = a(y, l, m), null === f ? c = y : f.sibling = y, f = y);
                        return e && g.forEach((function(e) {
                            return t(o, e)
                        })), ii && Zo(o, m), c
                    }
                    return function e(r, i, a, u) {
                        if ("object" == typeof a && null !== a && a.type === S && null === a.key && (a = a.props.children), "object" == typeof a && null !== a) {
                            switch (a.$$typeof) {
                                case _:
                                    e: {
                                        for (var s = a.key, c = i; null !== c;) {
                                            if (c.key === s) {
                                                if ((s = a.type) === S) {
                                                    if (7 === c.tag) {
                                                        n(r, c.sibling), (i = o(c, a.props.children)).return = r, r = i;
                                                        break e
                                                    }
                                                } else if (c.elementType === s || "object" == typeof s && null !== s && s.$$typeof === O && bi(s) === c.type) {
                                                    n(r, c.sibling), (i = o(c, a.props)).ref = vi(r, c, a), i.return = r, r = i;
                                                    break e
                                                }
                                                n(r, c);
                                                break
                                            }
                                            t(r, c), c = c.sibling
                                        }
                                        a.type === S ? ((i = js(a.props.children, r.mode, u, a.key)).return = r, r = i) : ((u = Ds(a.type, a.key, a.props, null, r.mode, u)).ref = vi(r, i, a), u.return = r, r = u)
                                    }
                                    return l(r);
                                case x:
                                    e: {
                                        for (c = a.key; null !== i;) {
                                            if (i.key === c) {
                                                if (4 === i.tag && i.stateNode.containerInfo === a.containerInfo && i.stateNode.implementation === a.implementation) {
                                                    n(r, i.sibling), (i = o(i, a.children || [])).return = r, r = i;
                                                    break e
                                                }
                                                n(r, i);
                                                break
                                            }
                                            t(r, i), i = i.sibling
                                        }(i = zs(a, r.mode, u)).return = r,
                                        r = i
                                    }
                                    return l(r);
                                case O:
                                    return e(r, i, (c = a._init)(a._payload), u)
                            }
                            if (te(a)) return g(r, i, a, u);
                            if (j(a)) return m(r, i, a, u);
                            yi(r, a)
                        }
                        return "string" == typeof a && "" !== a || "number" == typeof a ? (a = "" + a, null !== i && 6 === i.tag ? (n(r, i.sibling), (i = o(i, a)).return = r, r = i) : (n(r, i), (i = Ps(a, r.mode, u)).return = r, r = i), l(r)) : n(r, i)
                    }
                }
                var _i = wi(!0),
                    xi = wi(!1),
                    Si = ko(null),
                    Ei = null,
                    ki = null,
                    Ci = null;

                function Ti() {
                    Ci = ki = Ei = null
                }

                function Ni(e) {
                    var t = Si.current;
                    Co(Si), e._currentValue = t
                }

                function Ri(e, t, n) {
                    for (; null !== e;) {
                        var r = e.alternate;
                        if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
                        e = e.return
                    }
                }

                function Ai(e, t) {
                    Ei = e, Ci = ki = null, null !== (e = e.dependencies) && null !== e.firstContext && (!!(e.lanes & t) && (bl = !0), e.firstContext = null)
                }

                function Li(e) {
                    var t = e._currentValue;
                    if (Ci !== e)
                        if (e = {
                                context: e,
                                memoizedValue: t,
                                next: null
                            }, null === ki) {
                            if (null === Ei) throw Error(i(308));
                            ki = e, Ei.dependencies = {
                                lanes: 0,
                                firstContext: e
                            }
                        } else ki = ki.next = e;
                    return t
                }
                var Oi = null;

                function Ii(e) {
                    null === Oi ? Oi = [e] : Oi.push(e)
                }

                function Di(e, t, n, r) {
                    var o = t.interleaved;
                    return null === o ? (n.next = n, Ii(t)) : (n.next = o.next, o.next = n), t.interleaved = n, ji(e, r)
                }

                function ji(e, t) {
                    e.lanes |= t;
                    var n = e.alternate;
                    for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e;) e.childLanes |= t, null !== (n = e.alternate) && (n.childLanes |= t), n = e, e = e.return;
                    return 3 === n.tag ? n.stateNode : null
                }
                var Mi = !1;

                function Pi(e) {
                    e.updateQueue = {
                        baseState: e.memoizedState,
                        firstBaseUpdate: null,
                        lastBaseUpdate: null,
                        shared: {
                            pending: null,
                            interleaved: null,
                            lanes: 0
                        },
                        effects: null
                    }
                }

                function zi(e, t) {
                    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
                        baseState: e.baseState,
                        firstBaseUpdate: e.firstBaseUpdate,
                        lastBaseUpdate: e.lastBaseUpdate,
                        shared: e.shared,
                        effects: e.effects
                    })
                }

                function Bi(e, t) {
                    return {
                        eventTime: e,
                        lane: t,
                        tag: 0,
                        payload: null,
                        callback: null,
                        next: null
                    }
                }

                function Fi(e, t, n) {
                    var r = e.updateQueue;
                    if (null === r) return null;
                    if (r = r.shared, 2 & Nu) {
                        var o = r.pending;
                        return null === o ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, ji(e, n)
                    }
                    return null === (o = r.interleaved) ? (t.next = t, Ii(r)) : (t.next = o.next, o.next = t), r.interleaved = t, ji(e, n)
                }

                function Ui(e, t, n) {
                    if (null !== (t = t.updateQueue) && (t = t.shared, 4194240 & n)) {
                        var r = t.lanes;
                        n |= r &= e.pendingLanes, t.lanes = n, yt(e, n)
                    }
                }

                function Wi(e, t) {
                    var n = e.updateQueue,
                        r = e.alternate;
                    if (null !== r && n === (r = r.updateQueue)) {
                        var o = null,
                            i = null;
                        if (null !== (n = n.firstBaseUpdate)) {
                            do {
                                var a = {
                                    eventTime: n.eventTime,
                                    lane: n.lane,
                                    tag: n.tag,
                                    payload: n.payload,
                                    callback: n.callback,
                                    next: null
                                };
                                null === i ? o = i = a : i = i.next = a, n = n.next
                            } while (null !== n);
                            null === i ? o = i = t : i = i.next = t
                        } else o = i = t;
                        return n = {
                            baseState: r.baseState,
                            firstBaseUpdate: o,
                            lastBaseUpdate: i,
                            shared: r.shared,
                            effects: r.effects
                        }, void(e.updateQueue = n)
                    }
                    null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
                }

                function Hi(e, t, n, r) {
                    var o = e.updateQueue;
                    Mi = !1;
                    var i = o.firstBaseUpdate,
                        a = o.lastBaseUpdate,
                        l = o.shared.pending;
                    if (null !== l) {
                        o.shared.pending = null;
                        var u = l,
                            s = u.next;
                        u.next = null, null === a ? i = s : a.next = s, a = u;
                        var c = e.alternate;
                        null !== c && ((l = (c = c.updateQueue).lastBaseUpdate) !== a && (null === l ? c.firstBaseUpdate = s : l.next = s, c.lastBaseUpdate = u))
                    }
                    if (null !== i) {
                        var f = o.baseState;
                        for (a = 0, c = s = u = null, l = i;;) {
                            var d = l.lane,
                                p = l.eventTime;
                            if ((r & d) === d) {
                                null !== c && (c = c.next = {
                                    eventTime: p,
                                    lane: 0,
                                    tag: l.tag,
                                    payload: l.payload,
                                    callback: l.callback,
                                    next: null
                                });
                                e: {
                                    var h = e,
                                        g = l;
                                    switch (d = t, p = n, g.tag) {
                                        case 1:
                                            if ("function" == typeof(h = g.payload)) {
                                                f = h.call(p, f, d);
                                                break e
                                            }
                                            f = h;
                                            break e;
                                        case 3:
                                            h.flags = -65537 & h.flags | 128;
                                        case 0:
                                            if (null == (d = "function" == typeof(h = g.payload) ? h.call(p, f, d) : h)) break e;
                                            f = P({}, f, d);
                                            break e;
                                        case 2:
                                            Mi = !0
                                    }
                                }
                                null !== l.callback && 0 !== l.lane && (e.flags |= 64, null === (d = o.effects) ? o.effects = [l] : d.push(l))
                            } else p = {
                                eventTime: p,
                                lane: d,
                                tag: l.tag,
                                payload: l.payload,
                                callback: l.callback,
                                next: null
                            }, null === c ? (s = c = p, u = f) : c = c.next = p, a |= d;
                            if (null === (l = l.next)) {
                                if (null === (l = o.shared.pending)) break;
                                l = (d = l).next, d.next = null, o.lastBaseUpdate = d, o.shared.pending = null
                            }
                        }
                        if (null === c && (u = f), o.baseState = u, o.firstBaseUpdate = s, o.lastBaseUpdate = c, null !== (t = o.shared.interleaved)) {
                            o = t;
                            do {
                                a |= o.lane, o = o.next
                            } while (o !== t)
                        } else null === i && (o.shared.lanes = 0);
                        Mu |= a, e.lanes = a, e.memoizedState = f
                    }
                }

                function $i(e, t, n) {
                    if (e = t.effects, t.effects = null, null !== e)
                        for (t = 0; t < e.length; t++) {
                            var r = e[t],
                                o = r.callback;
                            if (null !== o) {
                                if (r.callback = null, r = n, "function" != typeof o) throw Error(i(191, o));
                                o.call(r)
                            }
                        }
                }
                var Vi = {},
                    Yi = ko(Vi),
                    Qi = ko(Vi),
                    qi = ko(Vi);

                function Ki(e) {
                    if (e === Vi) throw Error(i(174));
                    return e
                }

                function Xi(e, t) {
                    switch (To(qi, t), To(Qi, e), To(Yi, Vi), e = t.nodeType) {
                        case 9:
                        case 11:
                            t = (t = t.documentElement) ? t.namespaceURI : ue(null, "");
                            break;
                        default:
                            t = ue(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName)
                    }
                    Co(Yi), To(Yi, t)
                }

                function Gi() {
                    Co(Yi), Co(Qi), Co(qi)
                }

                function Ji(e) {
                    Ki(qi.current);
                    var t = Ki(Yi.current),
                        n = ue(t, e.type);
                    t !== n && (To(Qi, e), To(Yi, n))
                }

                function Zi(e) {
                    Qi.current === e && (Co(Yi), Co(Qi))
                }
                var ea = ko(0);

                function ta(e) {
                    for (var t = e; null !== t;) {
                        if (13 === t.tag) {
                            var n = t.memoizedState;
                            if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return t
                        } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                            if (128 & t.flags) return t
                        } else if (null !== t.child) {
                            t.child.return = t, t = t.child;
                            continue
                        }
                        if (t === e) break;
                        for (; null === t.sibling;) {
                            if (null === t.return || t.return === e) return null;
                            t = t.return
                        }
                        t.sibling.return = t.return, t = t.sibling
                    }
                    return null
                }
                var na = [];

                function ra() {
                    for (var e = 0; e < na.length; e++) na[e]._workInProgressVersionPrimary = null;
                    na.length = 0
                }
                var oa = w.ReactCurrentDispatcher,
                    ia = w.ReactCurrentBatchConfig,
                    aa = 0,
                    la = null,
                    ua = null,
                    sa = null,
                    ca = !1,
                    fa = !1,
                    da = 0,
                    pa = 0;

                function ha() {
                    throw Error(i(321))
                }

                function ga(e, t) {
                    if (null === t) return !1;
                    for (var n = 0; n < t.length && n < e.length; n++)
                        if (!lr(e[n], t[n])) return !1;
                    return !0
                }

                function ma(e, t, n, r, o, a) {
                    if (aa = a, la = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, oa.current = null === e || null === e.memoizedState ? Za : el, e = n(r, o), fa) {
                        a = 0;
                        do {
                            if (fa = !1, da = 0, 25 <= a) throw Error(i(301));
                            a += 1, sa = ua = null, t.updateQueue = null, oa.current = tl, e = n(r, o)
                        } while (fa)
                    }
                    if (oa.current = Ja, t = null !== ua && null !== ua.next, aa = 0, sa = ua = la = null, ca = !1, t) throw Error(i(300));
                    return e
                }

                function va() {
                    var e = 0 !== da;
                    return da = 0, e
                }

                function ya() {
                    var e = {
                        memoizedState: null,
                        baseState: null,
                        baseQueue: null,
                        queue: null,
                        next: null
                    };
                    return null === sa ? la.memoizedState = sa = e : sa = sa.next = e, sa
                }

                function ba() {
                    if (null === ua) {
                        var e = la.alternate;
                        e = null !== e ? e.memoizedState : null
                    } else e = ua.next;
                    var t = null === sa ? la.memoizedState : sa.next;
                    if (null !== t) sa = t, ua = e;
                    else {
                        if (null === e) throw Error(i(310));
                        e = {
                            memoizedState: (ua = e).memoizedState,
                            baseState: ua.baseState,
                            baseQueue: ua.baseQueue,
                            queue: ua.queue,
                            next: null
                        }, null === sa ? la.memoizedState = sa = e : sa = sa.next = e
                    }
                    return sa
                }

                function wa(e, t) {
                    return "function" == typeof t ? t(e) : t
                }

                function _a(e) {
                    var t = ba(),
                        n = t.queue;
                    if (null === n) throw Error(i(311));
                    n.lastRenderedReducer = e;
                    var r = ua,
                        o = r.baseQueue,
                        a = n.pending;
                    if (null !== a) {
                        if (null !== o) {
                            var l = o.next;
                            o.next = a.next, a.next = l
                        }
                        r.baseQueue = o = a, n.pending = null
                    }
                    if (null !== o) {
                        a = o.next, r = r.baseState;
                        var u = l = null,
                            s = null,
                            c = a;
                        do {
                            var f = c.lane;
                            if ((aa & f) === f) null !== s && (s = s.next = {
                                lane: 0,
                                action: c.action,
                                hasEagerState: c.hasEagerState,
                                eagerState: c.eagerState,
                                next: null
                            }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
                            else {
                                var d = {
                                    lane: f,
                                    action: c.action,
                                    hasEagerState: c.hasEagerState,
                                    eagerState: c.eagerState,
                                    next: null
                                };
                                null === s ? (u = s = d, l = r) : s = s.next = d, la.lanes |= f, Mu |= f
                            }
                            c = c.next
                        } while (null !== c && c !== a);
                        null === s ? l = r : s.next = u, lr(r, t.memoizedState) || (bl = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = s, n.lastRenderedState = r
                    }
                    if (null !== (e = n.interleaved)) {
                        o = e;
                        do {
                            a = o.lane, la.lanes |= a, Mu |= a, o = o.next
                        } while (o !== e)
                    } else null === o && (n.lanes = 0);
                    return [t.memoizedState, n.dispatch]
                }

                function xa(e) {
                    var t = ba(),
                        n = t.queue;
                    if (null === n) throw Error(i(311));
                    n.lastRenderedReducer = e;
                    var r = n.dispatch,
                        o = n.pending,
                        a = t.memoizedState;
                    if (null !== o) {
                        n.pending = null;
                        var l = o = o.next;
                        do {
                            a = e(a, l.action), l = l.next
                        } while (l !== o);
                        lr(a, t.memoizedState) || (bl = !0), t.memoizedState = a, null === t.baseQueue && (t.baseState = a), n.lastRenderedState = a
                    }
                    return [a, r]
                }

                function Sa() {}

                function Ea(e, t) {
                    var n = la,
                        r = ba(),
                        o = t(),
                        a = !lr(r.memoizedState, o);
                    if (a && (r.memoizedState = o, bl = !0), r = r.queue, Ma(Ta.bind(null, n, r, e), [e]), r.getSnapshot !== t || a || null !== sa && 1 & sa.memoizedState.tag) {
                        if (n.flags |= 2048, La(9, Ca.bind(null, n, r, o, t), void 0, null), null === Ru) throw Error(i(349));
                        30 & aa || ka(n, t, o)
                    }
                    return o
                }

                function ka(e, t, n) {
                    e.flags |= 16384, e = {
                        getSnapshot: t,
                        value: n
                    }, null === (t = la.updateQueue) ? (t = {
                        lastEffect: null,
                        stores: null
                    }, la.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e)
                }

                function Ca(e, t, n, r) {
                    t.value = n, t.getSnapshot = r, Na(t) && Ra(e)
                }

                function Ta(e, t, n) {
                    return n((function() {
                        Na(t) && Ra(e)
                    }))
                }

                function Na(e) {
                    var t = e.getSnapshot;
                    e = e.value;
                    try {
                        var n = t();
                        return !lr(e, n)
                    } catch (e) {
                        return !0
                    }
                }

                function Ra(e) {
                    var t = ji(e, 1);
                    null !== t && ns(t, e, 1, -1)
                }

                function Aa(e) {
                    var t = ya();
                    return "function" == typeof e && (e = e()), t.memoizedState = t.baseState = e, e = {
                        pending: null,
                        interleaved: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: wa,
                        lastRenderedState: e
                    }, t.queue = e, e = e.dispatch = qa.bind(null, la, e), [t.memoizedState, e]
                }

                function La(e, t, n, r) {
                    return e = {
                        tag: e,
                        create: t,
                        destroy: n,
                        deps: r,
                        next: null
                    }, null === (t = la.updateQueue) ? (t = {
                        lastEffect: null,
                        stores: null
                    }, la.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e
                }

                function Oa() {
                    return ba().memoizedState
                }

                function Ia(e, t, n, r) {
                    var o = ya();
                    la.flags |= e, o.memoizedState = La(1 | t, n, void 0, void 0 === r ? null : r)
                }

                function Da(e, t, n, r) {
                    var o = ba();
                    r = void 0 === r ? null : r;
                    var i = void 0;
                    if (null !== ua) {
                        var a = ua.memoizedState;
                        if (i = a.destroy, null !== r && ga(r, a.deps)) return void(o.memoizedState = La(t, n, i, r))
                    }
                    la.flags |= e, o.memoizedState = La(1 | t, n, i, r)
                }

                function ja(e, t) {
                    return Ia(8390656, 8, e, t)
                }

                function Ma(e, t) {
                    return Da(2048, 8, e, t)
                }

                function Pa(e, t) {
                    return Da(4, 2, e, t)
                }

                function za(e, t) {
                    return Da(4, 4, e, t)
                }

                function Ba(e, t) {
                    return "function" == typeof t ? (e = e(), t(e), function() {
                        t(null)
                    }) : null != t ? (e = e(), t.current = e, function() {
                        t.current = null
                    }) : void 0
                }

                function Fa(e, t, n) {
                    return n = null != n ? n.concat([e]) : null, Da(4, 4, Ba.bind(null, t, e), n)
                }

                function Ua() {}

                function Wa(e, t) {
                    var n = ba();
                    t = void 0 === t ? null : t;
                    var r = n.memoizedState;
                    return null !== r && null !== t && ga(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
                }

                function Ha(e, t) {
                    var n = ba();
                    t = void 0 === t ? null : t;
                    var r = n.memoizedState;
                    return null !== r && null !== t && ga(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
                }

                function $a(e, t, n) {
                    return 21 & aa ? (lr(n, t) || (n = gt(), la.lanes |= n, Mu |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, bl = !0), e.memoizedState = n)
                }

                function Va(e, t) {
                    var n = bt;
                    bt = 0 !== n && 4 > n ? n : 4, e(!0);
                    var r = ia.transition;
                    ia.transition = {};
                    try {
                        e(!1), t()
                    } finally {
                        bt = n, ia.transition = r
                    }
                }

                function Ya() {
                    return ba().memoizedState
                }

                function Qa(e, t, n) {
                    var r = ts(e);
                    if (n = {
                            lane: r,
                            action: n,
                            hasEagerState: !1,
                            eagerState: null,
                            next: null
                        }, Ka(e)) Xa(t, n);
                    else if (null !== (n = Di(e, t, n, r))) {
                        ns(n, e, r, es()), Ga(n, t, r)
                    }
                }

                function qa(e, t, n) {
                    var r = ts(e),
                        o = {
                            lane: r,
                            action: n,
                            hasEagerState: !1,
                            eagerState: null,
                            next: null
                        };
                    if (Ka(e)) Xa(t, o);
                    else {
                        var i = e.alternate;
                        if (0 === e.lanes && (null === i || 0 === i.lanes) && null !== (i = t.lastRenderedReducer)) try {
                            var a = t.lastRenderedState,
                                l = i(a, n);
                            if (o.hasEagerState = !0, o.eagerState = l, lr(l, a)) {
                                var u = t.interleaved;
                                return null === u ? (o.next = o, Ii(t)) : (o.next = u.next, u.next = o), void(t.interleaved = o)
                            }
                        } catch (e) {}
                        null !== (n = Di(e, t, o, r)) && (ns(n, e, r, o = es()), Ga(n, t, r))
                    }
                }

                function Ka(e) {
                    var t = e.alternate;
                    return e === la || null !== t && t === la
                }

                function Xa(e, t) {
                    fa = ca = !0;
                    var n = e.pending;
                    null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
                }

                function Ga(e, t, n) {
                    if (4194240 & n) {
                        var r = t.lanes;
                        n |= r &= e.pendingLanes, t.lanes = n, yt(e, n)
                    }
                }
                var Ja = {
                        readContext: Li,
                        useCallback: ha,
                        useContext: ha,
                        useEffect: ha,
                        useImperativeHandle: ha,
                        useInsertionEffect: ha,
                        useLayoutEffect: ha,
                        useMemo: ha,
                        useReducer: ha,
                        useRef: ha,
                        useState: ha,
                        useDebugValue: ha,
                        useDeferredValue: ha,
                        useTransition: ha,
                        useMutableSource: ha,
                        useSyncExternalStore: ha,
                        useId: ha,
                        unstable_isNewReconciler: !1
                    },
                    Za = {
                        readContext: Li,
                        useCallback: function(e, t) {
                            return ya().memoizedState = [e, void 0 === t ? null : t], e
                        },
                        useContext: Li,
                        useEffect: ja,
                        useImperativeHandle: function(e, t, n) {
                            return n = null != n ? n.concat([e]) : null, Ia(4194308, 4, Ba.bind(null, t, e), n)
                        },
                        useLayoutEffect: function(e, t) {
                            return Ia(4194308, 4, e, t)
                        },
                        useInsertionEffect: function(e, t) {
                            return Ia(4, 2, e, t)
                        },
                        useMemo: function(e, t) {
                            var n = ya();
                            return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e
                        },
                        useReducer: function(e, t, n) {
                            var r = ya();
                            return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                                pending: null,
                                interleaved: null,
                                lanes: 0,
                                dispatch: null,
                                lastRenderedReducer: e,
                                lastRenderedState: t
                            }, r.queue = e, e = e.dispatch = Qa.bind(null, la, e), [r.memoizedState, e]
                        },
                        useRef: function(e) {
                            return e = {
                                current: e
                            }, ya().memoizedState = e
                        },
                        useState: Aa,
                        useDebugValue: Ua,
                        useDeferredValue: function(e) {
                            return ya().memoizedState = e
                        },
                        useTransition: function() {
                            var e = Aa(!1),
                                t = e[0];
                            return e = Va.bind(null, e[1]), ya().memoizedState = e, [t, e]
                        },
                        useMutableSource: function() {},
                        useSyncExternalStore: function(e, t, n) {
                            var r = la,
                                o = ya();
                            if (ii) {
                                if (void 0 === n) throw Error(i(407));
                                n = n()
                            } else {
                                if (n = t(), null === Ru) throw Error(i(349));
                                30 & aa || ka(r, t, n)
                            }
                            o.memoizedState = n;
                            var a = {
                                value: n,
                                getSnapshot: t
                            };
                            return o.queue = a, ja(Ta.bind(null, r, a, e), [e]), r.flags |= 2048, La(9, Ca.bind(null, r, a, n, t), void 0, null), n
                        },
                        useId: function() {
                            var e = ya(),
                                t = Ru.identifierPrefix;
                            if (ii) {
                                var n = Jo;
                                t = ":" + t + "R" + (n = (Go & ~(1 << 32 - at(Go) - 1)).toString(32) + n), 0 < (n = da++) && (t += "H" + n.toString(32)), t += ":"
                            } else t = ":" + t + "r" + (n = pa++).toString(32) + ":";
                            return e.memoizedState = t
                        },
                        unstable_isNewReconciler: !1
                    },
                    el = {
                        readContext: Li,
                        useCallback: Wa,
                        useContext: Li,
                        useEffect: Ma,
                        useImperativeHandle: Fa,
                        useInsertionEffect: Pa,
                        useLayoutEffect: za,
                        useMemo: Ha,
                        useReducer: _a,
                        useRef: Oa,
                        useState: function() {
                            return _a(wa)
                        },
                        useDebugValue: Ua,
                        useDeferredValue: function(e) {
                            return $a(ba(), ua.memoizedState, e)
                        },
                        useTransition: function() {
                            return [_a(wa)[0], ba().memoizedState]
                        },
                        useMutableSource: Sa,
                        useSyncExternalStore: Ea,
                        useId: Ya,
                        unstable_isNewReconciler: !1
                    },
                    tl = {
                        readContext: Li,
                        useCallback: Wa,
                        useContext: Li,
                        useEffect: Ma,
                        useImperativeHandle: Fa,
                        useInsertionEffect: Pa,
                        useLayoutEffect: za,
                        useMemo: Ha,
                        useReducer: xa,
                        useRef: Oa,
                        useState: function() {
                            return xa(wa)
                        },
                        useDebugValue: Ua,
                        useDeferredValue: function(e) {
                            var t = ba();
                            return null === ua ? t.memoizedState = e : $a(t, ua.memoizedState, e)
                        },
                        useTransition: function() {
                            return [xa(wa)[0], ba().memoizedState]
                        },
                        useMutableSource: Sa,
                        useSyncExternalStore: Ea,
                        useId: Ya,
                        unstable_isNewReconciler: !1
                    };

                function nl(e, t) {
                    if (e && e.defaultProps) {
                        for (var n in t = P({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
                        return t
                    }
                    return t
                }

                function rl(e, t, n, r) {
                    n = null == (n = n(r, t = e.memoizedState)) ? t : P({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n)
                }
                var ol = {
                    isMounted: function(e) {
                        return !!(e = e._reactInternals) && We(e) === e
                    },
                    enqueueSetState: function(e, t, n) {
                        e = e._reactInternals;
                        var r = es(),
                            o = ts(e),
                            i = Bi(r, o);
                        i.payload = t, null != n && (i.callback = n), null !== (t = Fi(e, i, o)) && (ns(t, e, o, r), Ui(t, e, o))
                    },
                    enqueueReplaceState: function(e, t, n) {
                        e = e._reactInternals;
                        var r = es(),
                            o = ts(e),
                            i = Bi(r, o);
                        i.tag = 1, i.payload = t, null != n && (i.callback = n), null !== (t = Fi(e, i, o)) && (ns(t, e, o, r), Ui(t, e, o))
                    },
                    enqueueForceUpdate: function(e, t) {
                        e = e._reactInternals;
                        var n = es(),
                            r = ts(e),
                            o = Bi(n, r);
                        o.tag = 2, null != t && (o.callback = t), null !== (t = Fi(e, o, r)) && (ns(t, e, r, n), Ui(t, e, r))
                    }
                };

                function il(e, t, n, r, o, i, a) {
                    return "function" == typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, i, a) : !t.prototype || !t.prototype.isPureReactComponent || (!ur(n, r) || !ur(o, i))
                }

                function al(e, t, n) {
                    var r = !1,
                        o = No,
                        i = t.contextType;
                    return "object" == typeof i && null !== i ? i = Li(i) : (o = Io(t) ? Lo : Ro.current, i = (r = null != (r = t.contextTypes)) ? Oo(e, o) : No), t = new t(n, i), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = ol, e.stateNode = t, t._reactInternals = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t
                }

                function ll(e, t, n, r) {
                    e = t.state, "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ol.enqueueReplaceState(t, t.state, null)
                }

                function ul(e, t, n, r) {
                    var o = e.stateNode;
                    o.props = n, o.state = e.memoizedState, o.refs = {}, Pi(e);
                    var i = t.contextType;
                    "object" == typeof i && null !== i ? o.context = Li(i) : (i = Io(t) ? Lo : Ro.current, o.context = Oo(e, i)), o.state = e.memoizedState, "function" == typeof(i = t.getDerivedStateFromProps) && (rl(e, t, i, n), o.state = e.memoizedState), "function" == typeof t.getDerivedStateFromProps || "function" == typeof o.getSnapshotBeforeUpdate || "function" != typeof o.UNSAFE_componentWillMount && "function" != typeof o.componentWillMount || (t = o.state, "function" == typeof o.componentWillMount && o.componentWillMount(), "function" == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount(), t !== o.state && ol.enqueueReplaceState(o, o.state, null), Hi(e, n, o, r), o.state = e.memoizedState), "function" == typeof o.componentDidMount && (e.flags |= 4194308)
                }

                function sl(e, t) {
                    try {
                        var n = "",
                            r = t;
                        do {
                            n += U(r), r = r.return
                        } while (r);
                        var o = n
                    } catch (e) {
                        o = "\nError generating stack: " + e.message + "\n" + e.stack
                    }
                    return {
                        value: e,
                        source: t,
                        stack: o,
                        digest: null
                    }
                }

                function cl(e, t, n) {
                    return {
                        value: e,
                        source: null,
                        stack: null != n ? n : null,
                        digest: null != t ? t : null
                    }
                }

                function fl(e, t) {
                    try {
                        console.error(t.value)
                    } catch (e) {
                        setTimeout((function() {
                            throw e
                        }))
                    }
                }
                var dl = "function" == typeof WeakMap ? WeakMap : Map;

                function pl(e, t, n) {
                    (n = Bi(-1, n)).tag = 3, n.payload = {
                        element: null
                    };
                    var r = t.value;
                    return n.callback = function() {
                        $u || ($u = !0, Vu = r), fl(0, t)
                    }, n
                }

                function hl(e, t, n) {
                    (n = Bi(-1, n)).tag = 3;
                    var r = e.type.getDerivedStateFromError;
                    if ("function" == typeof r) {
                        var o = t.value;
                        n.payload = function() {
                            return r(o)
                        }, n.callback = function() {
                            fl(0, t)
                        }
                    }
                    var i = e.stateNode;
                    return null !== i && "function" == typeof i.componentDidCatch && (n.callback = function() {
                        fl(0, t), "function" != typeof r && (null === Yu ? Yu = new Set([this]) : Yu.add(this));
                        var e = t.stack;
                        this.componentDidCatch(t.value, {
                            componentStack: null !== e ? e : ""
                        })
                    }), n
                }

                function gl(e, t, n) {
                    var r = e.pingCache;
                    if (null === r) {
                        r = e.pingCache = new dl;
                        var o = new Set;
                        r.set(t, o)
                    } else void 0 === (o = r.get(t)) && (o = new Set, r.set(t, o));
                    o.has(n) || (o.add(n), e = ks.bind(null, e, t, n), t.then(e, e))
                }

                function ml(e) {
                    do {
                        var t;
                        if ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t) return e;
                        e = e.return
                    } while (null !== e);
                    return null
                }

                function vl(e, t, n, r, o) {
                    return 1 & e.mode ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, 1 === n.tag && (null === n.alternate ? n.tag = 17 : ((t = Bi(-1, 1)).tag = 2, Fi(n, t, 1))), n.lanes |= 1), e)
                }
                var yl = w.ReactCurrentOwner,
                    bl = !1;

                function wl(e, t, n, r) {
                    t.child = null === e ? xi(t, null, n, r) : _i(t, e.child, n, r)
                }

                function _l(e, t, n, r, o) {
                    n = n.render;
                    var i = t.ref;
                    return Ai(t, o), r = ma(e, t, n, r, i, o), n = va(), null === e || bl ? (ii && n && ti(t), t.flags |= 1, wl(e, t, r, o), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, $l(e, t, o))
                }

                function xl(e, t, n, r, o) {
                    if (null === e) {
                        var i = n.type;
                        return "function" != typeof i || Os(i) || void 0 !== i.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Ds(n.type, null, r, t, t.mode, o)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = i, Sl(e, t, i, r, o))
                    }
                    if (i = e.child, !(e.lanes & o)) {
                        var a = i.memoizedProps;
                        if ((n = null !== (n = n.compare) ? n : ur)(a, r) && e.ref === t.ref) return $l(e, t, o)
                    }
                    return t.flags |= 1, (e = Is(i, r)).ref = t.ref, e.return = t, t.child = e
                }

                function Sl(e, t, n, r, o) {
                    if (null !== e) {
                        var i = e.memoizedProps;
                        if (ur(i, r) && e.ref === t.ref) {
                            if (bl = !1, t.pendingProps = r = i, !(e.lanes & o)) return t.lanes = e.lanes, $l(e, t, o);
                            131072 & e.flags && (bl = !0)
                        }
                    }
                    return Cl(e, t, n, r, o)
                }

                function El(e, t, n) {
                    var r = t.pendingProps,
                        o = r.children,
                        i = null !== e ? e.memoizedState : null;
                    if ("hidden" === r.mode)
                        if (1 & t.mode) {
                            if (!(1073741824 & n)) return e = null !== i ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                                baseLanes: e,
                                cachePool: null,
                                transitions: null
                            }, t.updateQueue = null, To(Iu, Ou), Ou |= e, null;
                            t.memoizedState = {
                                baseLanes: 0,
                                cachePool: null,
                                transitions: null
                            }, r = null !== i ? i.baseLanes : n, To(Iu, Ou), Ou |= r
                        } else t.memoizedState = {
                            baseLanes: 0,
                            cachePool: null,
                            transitions: null
                        }, To(Iu, Ou), Ou |= n;
                    else null !== i ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, To(Iu, Ou), Ou |= r;
                    return wl(e, t, o, n), t.child
                }

                function kl(e, t) {
                    var n = t.ref;
                    (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
                }

                function Cl(e, t, n, r, o) {
                    var i = Io(n) ? Lo : Ro.current;
                    return i = Oo(t, i), Ai(t, o), n = ma(e, t, n, r, i, o), r = va(), null === e || bl ? (ii && r && ti(t), t.flags |= 1, wl(e, t, n, o), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, $l(e, t, o))
                }

                function Tl(e, t, n, r, o) {
                    if (Io(n)) {
                        var i = !0;
                        Po(t)
                    } else i = !1;
                    if (Ai(t, o), null === t.stateNode) Hl(e, t), al(t, n, r), ul(t, n, r, o), r = !0;
                    else if (null === e) {
                        var a = t.stateNode,
                            l = t.memoizedProps;
                        a.props = l;
                        var u = a.context,
                            s = n.contextType;
                        "object" == typeof s && null !== s ? s = Li(s) : s = Oo(t, s = Io(n) ? Lo : Ro.current);
                        var c = n.getDerivedStateFromProps,
                            f = "function" == typeof c || "function" == typeof a.getSnapshotBeforeUpdate;
                        f || "function" != typeof a.UNSAFE_componentWillReceiveProps && "function" != typeof a.componentWillReceiveProps || (l !== r || u !== s) && ll(t, a, r, s), Mi = !1;
                        var d = t.memoizedState;
                        a.state = d, Hi(t, r, a, o), u = t.memoizedState, l !== r || d !== u || Ao.current || Mi ? ("function" == typeof c && (rl(t, n, c, r), u = t.memoizedState), (l = Mi || il(t, n, l, r, d, u, s)) ? (f || "function" != typeof a.UNSAFE_componentWillMount && "function" != typeof a.componentWillMount || ("function" == typeof a.componentWillMount && a.componentWillMount(), "function" == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount()), "function" == typeof a.componentDidMount && (t.flags |= 4194308)) : ("function" == typeof a.componentDidMount && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), a.props = r, a.state = u, a.context = s, r = l) : ("function" == typeof a.componentDidMount && (t.flags |= 4194308), r = !1)
                    } else {
                        a = t.stateNode, zi(e, t), l = t.memoizedProps, s = t.type === t.elementType ? l : nl(t.type, l), a.props = s, f = t.pendingProps, d = a.context, "object" == typeof(u = n.contextType) && null !== u ? u = Li(u) : u = Oo(t, u = Io(n) ? Lo : Ro.current);
                        var p = n.getDerivedStateFromProps;
                        (c = "function" == typeof p || "function" == typeof a.getSnapshotBeforeUpdate) || "function" != typeof a.UNSAFE_componentWillReceiveProps && "function" != typeof a.componentWillReceiveProps || (l !== f || d !== u) && ll(t, a, r, u), Mi = !1, d = t.memoizedState, a.state = d, Hi(t, r, a, o);
                        var h = t.memoizedState;
                        l !== f || d !== h || Ao.current || Mi ? ("function" == typeof p && (rl(t, n, p, r), h = t.memoizedState), (s = Mi || il(t, n, s, r, d, h, u) || !1) ? (c || "function" != typeof a.UNSAFE_componentWillUpdate && "function" != typeof a.componentWillUpdate || ("function" == typeof a.componentWillUpdate && a.componentWillUpdate(r, h, u), "function" == typeof a.UNSAFE_componentWillUpdate && a.UNSAFE_componentWillUpdate(r, h, u)), "function" == typeof a.componentDidUpdate && (t.flags |= 4), "function" == typeof a.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" != typeof a.componentDidUpdate || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), "function" != typeof a.getSnapshotBeforeUpdate || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = h), a.props = r, a.state = h, a.context = u, r = s) : ("function" != typeof a.componentDidUpdate || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), "function" != typeof a.getSnapshotBeforeUpdate || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1)
                    }
                    return Nl(e, t, n, r, i, o)
                }

                function Nl(e, t, n, r, o, i) {
                    kl(e, t);
                    var a = !!(128 & t.flags);
                    if (!r && !a) return o && zo(t, n, !1), $l(e, t, i);
                    r = t.stateNode, yl.current = t;
                    var l = a && "function" != typeof n.getDerivedStateFromError ? null : r.render();
                    return t.flags |= 1, null !== e && a ? (t.child = _i(t, e.child, null, i), t.child = _i(t, null, l, i)) : wl(e, t, l, i), t.memoizedState = r.state, o && zo(t, n, !0), t.child
                }

                function Rl(e) {
                    var t = e.stateNode;
                    t.pendingContext ? jo(0, t.pendingContext, t.pendingContext !== t.context) : t.context && jo(0, t.context, !1), Xi(e, t.containerInfo)
                }

                function Al(e, t, n, r, o) {
                    return hi(), gi(o), t.flags |= 256, wl(e, t, n, r), t.child
                }
                var Ll, Ol, Il, Dl, jl = {
                    dehydrated: null,
                    treeContext: null,
                    retryLane: 0
                };

                function Ml(e) {
                    return {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null
                    }
                }

                function Pl(e, t, n) {
                    var r, o = t.pendingProps,
                        a = ea.current,
                        l = !1,
                        u = !!(128 & t.flags);
                    if ((r = u) || (r = (null === e || null !== e.memoizedState) && !!(2 & a)), r ? (l = !0, t.flags &= -129) : null !== e && null === e.memoizedState || (a |= 1), To(ea, 1 & a), null === e) return ci(t), null !== (e = t.memoizedState) && null !== (e = e.dehydrated) ? (1 & t.mode ? "$!" === e.data ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (u = o.children, e = o.fallback, l ? (o = t.mode, l = t.child, u = {
                        mode: "hidden",
                        children: u
                    }, 1 & o || null === l ? l = Ms(u, o, 0, null) : (l.childLanes = 0, l.pendingProps = u), e = js(e, o, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = Ml(n), t.memoizedState = jl, e) : zl(t, u));
                    if (null !== (a = e.memoizedState) && null !== (r = a.dehydrated)) return function(e, t, n, r, o, a, l) {
                        if (n) return 256 & t.flags ? (t.flags &= -257, Bl(e, t, l, r = cl(Error(i(422))))) : null !== t.memoizedState ? (t.child = e.child, t.flags |= 128, null) : (a = r.fallback, o = t.mode, r = Ms({
                            mode: "visible",
                            children: r.children
                        }, o, 0, null), (a = js(a, o, l, null)).flags |= 2, r.return = t, a.return = t, r.sibling = a, t.child = r, 1 & t.mode && _i(t, e.child, null, l), t.child.memoizedState = Ml(l), t.memoizedState = jl, a);
                        if (!(1 & t.mode)) return Bl(e, t, l, null);
                        if ("$!" === o.data) {
                            if (r = o.nextSibling && o.nextSibling.dataset) var u = r.dgst;
                            return r = u, Bl(e, t, l, r = cl(a = Error(i(419)), r, void 0))
                        }
                        if (u = !!(l & e.childLanes), bl || u) {
                            if (null !== (r = Ru)) {
                                switch (l & -l) {
                                    case 4:
                                        o = 2;
                                        break;
                                    case 16:
                                        o = 8;
                                        break;
                                    case 64:
                                    case 128:
                                    case 256:
                                    case 512:
                                    case 1024:
                                    case 2048:
                                    case 4096:
                                    case 8192:
                                    case 16384:
                                    case 32768:
                                    case 65536:
                                    case 131072:
                                    case 262144:
                                    case 524288:
                                    case 1048576:
                                    case 2097152:
                                    case 4194304:
                                    case 8388608:
                                    case 16777216:
                                    case 33554432:
                                    case 67108864:
                                        o = 32;
                                        break;
                                    case 536870912:
                                        o = 268435456;
                                        break;
                                    default:
                                        o = 0
                                }
                                0 !== (o = o & (r.suspendedLanes | l) ? 0 : o) && o !== a.retryLane && (a.retryLane = o, ji(e, o), ns(r, e, o, -1))
                            }
                            return gs(), Bl(e, t, l, r = cl(Error(i(421))))
                        }
                        return "$?" === o.data ? (t.flags |= 128, t.child = e.child, t = Ts.bind(null, e), o._reactRetry = t, null) : (e = a.treeContext, oi = so(o.nextSibling), ri = t, ii = !0, ai = null, null !== e && (qo[Ko++] = Go, qo[Ko++] = Jo, qo[Ko++] = Xo, Go = e.id, Jo = e.overflow, Xo = t), t = zl(t, r.children), t.flags |= 4096, t)
                    }(e, t, u, o, r, a, n);
                    if (l) {
                        l = o.fallback, u = t.mode, r = (a = e.child).sibling;
                        var s = {
                            mode: "hidden",
                            children: o.children
                        };
                        return 1 & u || t.child === a ? (o = Is(a, s)).subtreeFlags = 14680064 & a.subtreeFlags : ((o = t.child).childLanes = 0, o.pendingProps = s, t.deletions = null), null !== r ? l = Is(r, l) : (l = js(l, u, n, null)).flags |= 2, l.return = t, o.return = t, o.sibling = l, t.child = o, o = l, l = t.child, u = null === (u = e.child.memoizedState) ? Ml(n) : {
                            baseLanes: u.baseLanes | n,
                            cachePool: null,
                            transitions: u.transitions
                        }, l.memoizedState = u, l.childLanes = e.childLanes & ~n, t.memoizedState = jl, o
                    }
                    return e = (l = e.child).sibling, o = Is(l, {
                        mode: "visible",
                        children: o.children
                    }), !(1 & t.mode) && (o.lanes = n), o.return = t, o.sibling = null, null !== e && (null === (n = t.deletions) ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = o, t.memoizedState = null, o
                }

                function zl(e, t) {
                    return (t = Ms({
                        mode: "visible",
                        children: t
                    }, e.mode, 0, null)).return = e, e.child = t
                }

                function Bl(e, t, n, r) {
                    return null !== r && gi(r), _i(t, e.child, null, n), (e = zl(t, t.pendingProps.children)).flags |= 2, t.memoizedState = null, e
                }

                function Fl(e, t, n) {
                    e.lanes |= t;
                    var r = e.alternate;
                    null !== r && (r.lanes |= t), Ri(e.return, t, n)
                }

                function Ul(e, t, n, r, o) {
                    var i = e.memoizedState;
                    null === i ? e.memoizedState = {
                        isBackwards: t,
                        rendering: null,
                        renderingStartTime: 0,
                        last: r,
                        tail: n,
                        tailMode: o
                    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o)
                }

                function Wl(e, t, n) {
                    var r = t.pendingProps,
                        o = r.revealOrder,
                        i = r.tail;
                    if (wl(e, t, r.children, n), 2 & (r = ea.current)) r = 1 & r | 2, t.flags |= 128;
                    else {
                        if (null !== e && 128 & e.flags) e: for (e = t.child; null !== e;) {
                            if (13 === e.tag) null !== e.memoizedState && Fl(e, n, t);
                            else if (19 === e.tag) Fl(e, n, t);
                            else if (null !== e.child) {
                                e.child.return = e, e = e.child;
                                continue
                            }
                            if (e === t) break e;
                            for (; null === e.sibling;) {
                                if (null === e.return || e.return === t) break e;
                                e = e.return
                            }
                            e.sibling.return = e.return, e = e.sibling
                        }
                        r &= 1
                    }
                    if (To(ea, r), 1 & t.mode) switch (o) {
                        case "forwards":
                            for (n = t.child, o = null; null !== n;) null !== (e = n.alternate) && null === ta(e) && (o = n), n = n.sibling;
                            null === (n = o) ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Ul(t, !1, o, n, i);
                            break;
                        case "backwards":
                            for (n = null, o = t.child, t.child = null; null !== o;) {
                                if (null !== (e = o.alternate) && null === ta(e)) {
                                    t.child = o;
                                    break
                                }
                                e = o.sibling, o.sibling = n, n = o, o = e
                            }
                            Ul(t, !0, n, null, i);
                            break;
                        case "together":
                            Ul(t, !1, null, null, void 0);
                            break;
                        default:
                            t.memoizedState = null
                    } else t.memoizedState = null;
                    return t.child
                }

                function Hl(e, t) {
                    !(1 & t.mode) && null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2)
                }

                function $l(e, t, n) {
                    if (null !== e && (t.dependencies = e.dependencies), Mu |= t.lanes, !(n & t.childLanes)) return null;
                    if (null !== e && t.child !== e.child) throw Error(i(153));
                    if (null !== t.child) {
                        for (n = Is(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = Is(e, e.pendingProps)).return = t;
                        n.sibling = null
                    }
                    return t.child
                }

                function Vl(e, t) {
                    if (!ii) switch (e.tailMode) {
                        case "hidden":
                            t = e.tail;
                            for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
                            null === n ? e.tail = null : n.sibling = null;
                            break;
                        case "collapsed":
                            n = e.tail;
                            for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
                            null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
                    }
                }

                function Yl(e) {
                    var t = null !== e.alternate && e.alternate.child === e.child,
                        n = 0,
                        r = 0;
                    if (t)
                        for (var o = e.child; null !== o;) n |= o.lanes | o.childLanes, r |= 14680064 & o.subtreeFlags, r |= 14680064 & o.flags, o.return = e, o = o.sibling;
                    else
                        for (o = e.child; null !== o;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
                    return e.subtreeFlags |= r, e.childLanes = n, t
                }

                function Ql(e, t, n) {
                    var r = t.pendingProps;
                    switch (ni(t), t.tag) {
                        case 2:
                        case 16:
                        case 15:
                        case 0:
                        case 11:
                        case 7:
                        case 8:
                        case 12:
                        case 9:
                        case 14:
                            return Yl(t), null;
                        case 1:
                        case 17:
                            return Io(t.type) && Do(), Yl(t), null;
                        case 3:
                            return r = t.stateNode, Gi(), Co(Ao), Co(Ro), ra(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), null !== e && null !== e.child || (di(t) ? t.flags |= 4 : null === e || e.memoizedState.isDehydrated && !(256 & t.flags) || (t.flags |= 1024, null !== ai && (as(ai), ai = null))), Ol(e, t), Yl(t), null;
                        case 5:
                            Zi(t);
                            var o = Ki(qi.current);
                            if (n = t.type, null !== e && null != t.stateNode) Il(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                            else {
                                if (!r) {
                                    if (null === t.stateNode) throw Error(i(166));
                                    return Yl(t), null
                                }
                                if (e = Ki(Yi.current), di(t)) {
                                    r = t.stateNode, n = t.type;
                                    var a = t.memoizedProps;
                                    switch (r[po] = t, r[ho] = a, e = !!(1 & t.mode), n) {
                                        case "dialog":
                                            Br("cancel", r), Br("close", r);
                                            break;
                                        case "iframe":
                                        case "object":
                                        case "embed":
                                            Br("load", r);
                                            break;
                                        case "video":
                                        case "audio":
                                            for (o = 0; o < jr.length; o++) Br(jr[o], r);
                                            break;
                                        case "source":
                                            Br("error", r);
                                            break;
                                        case "img":
                                        case "image":
                                        case "link":
                                            Br("error", r), Br("load", r);
                                            break;
                                        case "details":
                                            Br("toggle", r);
                                            break;
                                        case "input":
                                            X(r, a), Br("invalid", r);
                                            break;
                                        case "select":
                                            r._wrapperState = {
                                                wasMultiple: !!a.multiple
                                            }, Br("invalid", r);
                                            break;
                                        case "textarea":
                                            oe(r, a), Br("invalid", r)
                                    }
                                    for (var u in ye(n, a), o = null, a)
                                        if (a.hasOwnProperty(u)) {
                                            var s = a[u];
                                            "children" === u ? "string" == typeof s ? r.textContent !== s && (!0 !== a.suppressHydrationWarning && Jr(r.textContent, s, e), o = ["children", s]) : "number" == typeof s && r.textContent !== "" + s && (!0 !== a.suppressHydrationWarning && Jr(r.textContent, s, e), o = ["children", "" + s]) : l.hasOwnProperty(u) && null != s && "onScroll" === u && Br("scroll", r)
                                        }
                                    switch (n) {
                                        case "input":
                                            Y(r), Z(r, a, !0);
                                            break;
                                        case "textarea":
                                            Y(r), ae(r);
                                            break;
                                        case "select":
                                        case "option":
                                            break;
                                        default:
                                            "function" == typeof a.onClick && (r.onclick = Zr)
                                    }
                                    r = o, t.updateQueue = r, null !== r && (t.flags |= 4)
                                } else {
                                    u = 9 === o.nodeType ? o : o.ownerDocument, "http://www.w3.org/1999/xhtml" === e && (e = le(n)), "http://www.w3.org/1999/xhtml" === e ? "script" === n ? ((e = u.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" == typeof r.is ? e = u.createElement(n, {
                                        is: r.is
                                    }) : (e = u.createElement(n), "select" === n && (u = e, r.multiple ? u.multiple = !0 : r.size && (u.size = r.size))) : e = u.createElementNS(e, n), e[po] = t, e[ho] = r, Ll(e, t, !1, !1), t.stateNode = e;
                                    e: {
                                        switch (u = be(n, r), n) {
                                            case "dialog":
                                                Br("cancel", e), Br("close", e), o = r;
                                                break;
                                            case "iframe":
                                            case "object":
                                            case "embed":
                                                Br("load", e), o = r;
                                                break;
                                            case "video":
                                            case "audio":
                                                for (o = 0; o < jr.length; o++) Br(jr[o], e);
                                                o = r;
                                                break;
                                            case "source":
                                                Br("error", e), o = r;
                                                break;
                                            case "img":
                                            case "image":
                                            case "link":
                                                Br("error", e), Br("load", e), o = r;
                                                break;
                                            case "details":
                                                Br("toggle", e), o = r;
                                                break;
                                            case "input":
                                                X(e, r), o = K(e, r), Br("invalid", e);
                                                break;
                                            case "option":
                                            default:
                                                o = r;
                                                break;
                                            case "select":
                                                e._wrapperState = {
                                                    wasMultiple: !!r.multiple
                                                }, o = P({}, r, {
                                                    value: void 0
                                                }), Br("invalid", e);
                                                break;
                                            case "textarea":
                                                oe(e, r), o = re(e, r), Br("invalid", e)
                                        }
                                        for (a in ye(n, o), s = o)
                                            if (s.hasOwnProperty(a)) {
                                                var c = s[a];
                                                "style" === a ? me(e, c) : "dangerouslySetInnerHTML" === a ? null != (c = c ? c.__html : void 0) && fe(e, c) : "children" === a ? "string" == typeof c ? ("textarea" !== n || "" !== c) && de(e, c) : "number" == typeof c && de(e, "" + c) : "suppressContentEditableWarning" !== a && "suppressHydrationWarning" !== a && "autoFocus" !== a && (l.hasOwnProperty(a) ? null != c && "onScroll" === a && Br("scroll", e) : null != c && b(e, a, c, u))
                                            }
                                        switch (n) {
                                            case "input":
                                                Y(e), Z(e, r, !1);
                                                break;
                                            case "textarea":
                                                Y(e), ae(e);
                                                break;
                                            case "option":
                                                null != r.value && e.setAttribute("value", "" + $(r.value));
                                                break;
                                            case "select":
                                                e.multiple = !!r.multiple, null != (a = r.value) ? ne(e, !!r.multiple, a, !1) : null != r.defaultValue && ne(e, !!r.multiple, r.defaultValue, !0);
                                                break;
                                            default:
                                                "function" == typeof o.onClick && (e.onclick = Zr)
                                        }
                                        switch (n) {
                                            case "button":
                                            case "input":
                                            case "select":
                                            case "textarea":
                                                r = !!r.autoFocus;
                                                break e;
                                            case "img":
                                                r = !0;
                                                break e;
                                            default:
                                                r = !1
                                        }
                                    }
                                    r && (t.flags |= 4)
                                }
                                null !== t.ref && (t.flags |= 512, t.flags |= 2097152)
                            }
                            return Yl(t), null;
                        case 6:
                            if (e && null != t.stateNode) Dl(e, t, e.memoizedProps, r);
                            else {
                                if ("string" != typeof r && null === t.stateNode) throw Error(i(166));
                                if (n = Ki(qi.current), Ki(Yi.current), di(t)) {
                                    if (r = t.stateNode, n = t.memoizedProps, r[po] = t, (a = r.nodeValue !== n) && null !== (e = ri)) switch (e.tag) {
                                        case 3:
                                            Jr(r.nodeValue, n, !!(1 & e.mode));
                                            break;
                                        case 5:
                                            !0 !== e.memoizedProps.suppressHydrationWarning && Jr(r.nodeValue, n, !!(1 & e.mode))
                                    }
                                    a && (t.flags |= 4)
                                } else(r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[po] = t, t.stateNode = r
                            }
                            return Yl(t), null;
                        case 13:
                            if (Co(ea), r = t.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
                                if (ii && null !== oi && 1 & t.mode && !(128 & t.flags)) pi(), hi(), t.flags |= 98560, a = !1;
                                else if (a = di(t), null !== r && null !== r.dehydrated) {
                                    if (null === e) {
                                        if (!a) throw Error(i(318));
                                        if (!(a = null !== (a = t.memoizedState) ? a.dehydrated : null)) throw Error(i(317));
                                        a[po] = t
                                    } else hi(), !(128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                                    Yl(t), a = !1
                                } else null !== ai && (as(ai), ai = null), a = !0;
                                if (!a) return 65536 & t.flags ? t : null
                            }
                            return 128 & t.flags ? (t.lanes = n, t) : ((r = null !== r) !== (null !== e && null !== e.memoizedState) && r && (t.child.flags |= 8192, 1 & t.mode && (null === e || 1 & ea.current ? 0 === Du && (Du = 3) : gs())), null !== t.updateQueue && (t.flags |= 4), Yl(t), null);
                        case 4:
                            return Gi(), Ol(e, t), null === e && Wr(t.stateNode.containerInfo), Yl(t), null;
                        case 10:
                            return Ni(t.type._context), Yl(t), null;
                        case 19:
                            if (Co(ea), null === (a = t.memoizedState)) return Yl(t), null;
                            if (r = !!(128 & t.flags), null === (u = a.rendering))
                                if (r) Vl(a, !1);
                                else {
                                    if (0 !== Du || null !== e && 128 & e.flags)
                                        for (e = t.child; null !== e;) {
                                            if (null !== (u = ta(e))) {
                                                for (t.flags |= 128, Vl(a, !1), null !== (r = u.updateQueue) && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; null !== n;) e = r, (a = n).flags &= 14680066, null === (u = a.alternate) ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = u.childLanes, a.lanes = u.lanes, a.child = u.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = u.memoizedProps, a.memoizedState = u.memoizedState, a.updateQueue = u.updateQueue, a.type = u.type, e = u.dependencies, a.dependencies = null === e ? null : {
                                                    lanes: e.lanes,
                                                    firstContext: e.firstContext
                                                }), n = n.sibling;
                                                return To(ea, 1 & ea.current | 2), t.child
                                            }
                                            e = e.sibling
                                        }
                                    null !== a.tail && Ge() > Wu && (t.flags |= 128, r = !0, Vl(a, !1), t.lanes = 4194304)
                                }
                            else {
                                if (!r)
                                    if (null !== (e = ta(u))) {
                                        if (t.flags |= 128, r = !0, null !== (n = e.updateQueue) && (t.updateQueue = n, t.flags |= 4), Vl(a, !0), null === a.tail && "hidden" === a.tailMode && !u.alternate && !ii) return Yl(t), null
                                    } else 2 * Ge() - a.renderingStartTime > Wu && 1073741824 !== n && (t.flags |= 128, r = !0, Vl(a, !1), t.lanes = 4194304);
                                a.isBackwards ? (u.sibling = t.child, t.child = u) : (null !== (n = a.last) ? n.sibling = u : t.child = u, a.last = u)
                            }
                            return null !== a.tail ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = Ge(), t.sibling = null, n = ea.current, To(ea, r ? 1 & n | 2 : 1 & n), t) : (Yl(t), null);
                        case 22:
                        case 23:
                            return fs(), r = null !== t.memoizedState, null !== e && null !== e.memoizedState !== r && (t.flags |= 8192), r && 1 & t.mode ? !!(1073741824 & Ou) && (Yl(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : Yl(t), null;
                        case 24:
                        case 25:
                            return null
                    }
                    throw Error(i(156, t.tag))
                }

                function ql(e, t) {
                    switch (ni(t), t.tag) {
                        case 1:
                            return Io(t.type) && Do(), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                        case 3:
                            return Gi(), Co(Ao), Co(Ro), ra(), 65536 & (e = t.flags) && !(128 & e) ? (t.flags = -65537 & e | 128, t) : null;
                        case 5:
                            return Zi(t), null;
                        case 13:
                            if (Co(ea), null !== (e = t.memoizedState) && null !== e.dehydrated) {
                                if (null === t.alternate) throw Error(i(340));
                                hi()
                            }
                            return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                        case 19:
                            return Co(ea), null;
                        case 4:
                            return Gi(), null;
                        case 10:
                            return Ni(t.type._context), null;
                        case 22:
                        case 23:
                            return fs(), null;
                        default:
                            return null
                    }
                }
                Ll = function(e, t) {
                    for (var n = t.child; null !== n;) {
                        if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
                        else if (4 !== n.tag && null !== n.child) {
                            n.child.return = n, n = n.child;
                            continue
                        }
                        if (n === t) break;
                        for (; null === n.sibling;) {
                            if (null === n.return || n.return === t) return;
                            n = n.return
                        }
                        n.sibling.return = n.return, n = n.sibling
                    }
                }, Ol = function() {}, Il = function(e, t, n, r) {
                    var o = e.memoizedProps;
                    if (o !== r) {
                        e = t.stateNode, Ki(Yi.current);
                        var i, a = null;
                        switch (n) {
                            case "input":
                                o = K(e, o), r = K(e, r), a = [];
                                break;
                            case "select":
                                o = P({}, o, {
                                    value: void 0
                                }), r = P({}, r, {
                                    value: void 0
                                }), a = [];
                                break;
                            case "textarea":
                                o = re(e, o), r = re(e, r), a = [];
                                break;
                            default:
                                "function" != typeof o.onClick && "function" == typeof r.onClick && (e.onclick = Zr)
                        }
                        for (c in ye(n, r), n = null, o)
                            if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && null != o[c])
                                if ("style" === c) {
                                    var u = o[c];
                                    for (i in u) u.hasOwnProperty(i) && (n || (n = {}), n[i] = "")
                                } else "dangerouslySetInnerHTML" !== c && "children" !== c && "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && "autoFocus" !== c && (l.hasOwnProperty(c) ? a || (a = []) : (a = a || []).push(c, null));
                        for (c in r) {
                            var s = r[c];
                            if (u = null != o ? o[c] : void 0, r.hasOwnProperty(c) && s !== u && (null != s || null != u))
                                if ("style" === c)
                                    if (u) {
                                        for (i in u) !u.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
                                        for (i in s) s.hasOwnProperty(i) && u[i] !== s[i] && (n || (n = {}), n[i] = s[i])
                                    } else n || (a || (a = []), a.push(c, n)), n = s;
                            else "dangerouslySetInnerHTML" === c ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, null != s && u !== s && (a = a || []).push(c, s)) : "children" === c ? "string" != typeof s && "number" != typeof s || (a = a || []).push(c, "" + s) : "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && (l.hasOwnProperty(c) ? (null != s && "onScroll" === c && Br("scroll", e), a || u === s || (a = [])) : (a = a || []).push(c, s))
                        }
                        n && (a = a || []).push("style", n);
                        var c = a;
                        (t.updateQueue = c) && (t.flags |= 4)
                    }
                }, Dl = function(e, t, n, r) {
                    n !== r && (t.flags |= 4)
                };
                var Kl = !1,
                    Xl = !1,
                    Gl = "function" == typeof WeakSet ? WeakSet : Set,
                    Jl = null;

                function Zl(e, t) {
                    var n = e.ref;
                    if (null !== n)
                        if ("function" == typeof n) try {
                            n(null)
                        } catch (n) {
                            Es(e, t, n)
                        } else n.current = null
                }

                function eu(e, t, n) {
                    try {
                        n()
                    } catch (n) {
                        Es(e, t, n)
                    }
                }
                var tu = !1;

                function nu(e, t, n) {
                    var r = t.updateQueue;
                    if (null !== (r = null !== r ? r.lastEffect : null)) {
                        var o = r = r.next;
                        do {
                            if ((o.tag & e) === e) {
                                var i = o.destroy;
                                o.destroy = void 0, void 0 !== i && eu(t, n, i)
                            }
                            o = o.next
                        } while (o !== r)
                    }
                }

                function ru(e, t) {
                    if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
                        var n = t = t.next;
                        do {
                            if ((n.tag & e) === e) {
                                var r = n.create;
                                n.destroy = r()
                            }
                            n = n.next
                        } while (n !== t)
                    }
                }

                function ou(e) {
                    var t = e.ref;
                    if (null !== t) {
                        var n = e.stateNode;
                        e.tag, e = n, "function" == typeof t ? t(e) : t.current = e
                    }
                }

                function iu(e) {
                    var t = e.alternate;
                    null !== t && (e.alternate = null, iu(t)), e.child = null, e.deletions = null, e.sibling = null, 5 === e.tag && (null !== (t = e.stateNode) && (delete t[po], delete t[ho], delete t[mo], delete t[vo], delete t[yo])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
                }

                function au(e) {
                    return 5 === e.tag || 3 === e.tag || 4 === e.tag
                }

                function lu(e) {
                    e: for (;;) {
                        for (; null === e.sibling;) {
                            if (null === e.return || au(e.return)) return null;
                            e = e.return
                        }
                        for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) {
                            if (2 & e.flags) continue e;
                            if (null === e.child || 4 === e.tag) continue e;
                            e.child.return = e, e = e.child
                        }
                        if (!(2 & e.flags)) return e.stateNode
                    }
                }

                function uu(e, t, n) {
                    var r = e.tag;
                    if (5 === r || 6 === r) e = e.stateNode, t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = Zr));
                    else if (4 !== r && null !== (e = e.child))
                        for (uu(e, t, n), e = e.sibling; null !== e;) uu(e, t, n), e = e.sibling
                }

                function su(e, t, n) {
                    var r = e.tag;
                    if (5 === r || 6 === r) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
                    else if (4 !== r && null !== (e = e.child))
                        for (su(e, t, n), e = e.sibling; null !== e;) su(e, t, n), e = e.sibling
                }
                var cu = null,
                    fu = !1;

                function du(e, t, n) {
                    for (n = n.child; null !== n;) pu(e, t, n), n = n.sibling
                }

                function pu(e, t, n) {
                    if (it && "function" == typeof it.onCommitFiberUnmount) try {
                        it.onCommitFiberUnmount(ot, n)
                    } catch (e) {}
                    switch (n.tag) {
                        case 5:
                            Xl || Zl(n, t);
                        case 6:
                            var r = cu,
                                o = fu;
                            cu = null, du(e, t, n), fu = o, null !== (cu = r) && (fu ? (e = cu, n = n.stateNode, 8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n)) : cu.removeChild(n.stateNode));
                            break;
                        case 18:
                            null !== cu && (fu ? (e = cu, n = n.stateNode, 8 === e.nodeType ? uo(e.parentNode, n) : 1 === e.nodeType && uo(e, n), Wt(e)) : uo(cu, n.stateNode));
                            break;
                        case 4:
                            r = cu, o = fu, cu = n.stateNode.containerInfo, fu = !0, du(e, t, n), cu = r, fu = o;
                            break;
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            if (!Xl && (null !== (r = n.updateQueue) && null !== (r = r.lastEffect))) {
                                o = r = r.next;
                                do {
                                    var i = o,
                                        a = i.destroy;
                                    i = i.tag, void 0 !== a && (2 & i || 4 & i) && eu(n, t, a), o = o.next
                                } while (o !== r)
                            }
                            du(e, t, n);
                            break;
                        case 1:
                            if (!Xl && (Zl(n, t), "function" == typeof(r = n.stateNode).componentWillUnmount)) try {
                                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
                            } catch (e) {
                                Es(n, t, e)
                            }
                            du(e, t, n);
                            break;
                        case 21:
                            du(e, t, n);
                            break;
                        case 22:
                            1 & n.mode ? (Xl = (r = Xl) || null !== n.memoizedState, du(e, t, n), Xl = r) : du(e, t, n);
                            break;
                        default:
                            du(e, t, n)
                    }
                }

                function hu(e) {
                    var t = e.updateQueue;
                    if (null !== t) {
                        e.updateQueue = null;
                        var n = e.stateNode;
                        null === n && (n = e.stateNode = new Gl), t.forEach((function(t) {
                            var r = Ns.bind(null, e, t);
                            n.has(t) || (n.add(t), t.then(r, r))
                        }))
                    }
                }

                function gu(e, t) {
                    var n = t.deletions;
                    if (null !== n)
                        for (var r = 0; r < n.length; r++) {
                            var o = n[r];
                            try {
                                var a = e,
                                    l = t,
                                    u = l;
                                e: for (; null !== u;) {
                                    switch (u.tag) {
                                        case 5:
                                            cu = u.stateNode, fu = !1;
                                            break e;
                                        case 3:
                                        case 4:
                                            cu = u.stateNode.containerInfo, fu = !0;
                                            break e
                                    }
                                    u = u.return
                                }
                                if (null === cu) throw Error(i(160));
                                pu(a, l, o), cu = null, fu = !1;
                                var s = o.alternate;
                                null !== s && (s.return = null), o.return = null
                            } catch (e) {
                                Es(o, t, e)
                            }
                        }
                    if (12854 & t.subtreeFlags)
                        for (t = t.child; null !== t;) mu(t, e), t = t.sibling
                }

                function mu(e, t) {
                    var n = e.alternate,
                        r = e.flags;
                    switch (e.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            if (gu(t, e), vu(e), 4 & r) {
                                try {
                                    nu(3, e, e.return), ru(3, e)
                                } catch (t) {
                                    Es(e, e.return, t)
                                }
                                try {
                                    nu(5, e, e.return)
                                } catch (t) {
                                    Es(e, e.return, t)
                                }
                            }
                            break;
                        case 1:
                            gu(t, e), vu(e), 512 & r && null !== n && Zl(n, n.return);
                            break;
                        case 5:
                            if (gu(t, e), vu(e), 512 & r && null !== n && Zl(n, n.return), 32 & e.flags) {
                                var o = e.stateNode;
                                try {
                                    de(o, "")
                                } catch (t) {
                                    Es(e, e.return, t)
                                }
                            }
                            if (4 & r && null != (o = e.stateNode)) {
                                var a = e.memoizedProps,
                                    l = null !== n ? n.memoizedProps : a,
                                    u = e.type,
                                    s = e.updateQueue;
                                if (e.updateQueue = null, null !== s) try {
                                    "input" === u && "radio" === a.type && null != a.name && G(o, a), be(u, l);
                                    var c = be(u, a);
                                    for (l = 0; l < s.length; l += 2) {
                                        var f = s[l],
                                            d = s[l + 1];
                                        "style" === f ? me(o, d) : "dangerouslySetInnerHTML" === f ? fe(o, d) : "children" === f ? de(o, d) : b(o, f, d, c)
                                    }
                                    switch (u) {
                                        case "input":
                                            J(o, a);
                                            break;
                                        case "textarea":
                                            ie(o, a);
                                            break;
                                        case "select":
                                            var p = o._wrapperState.wasMultiple;
                                            o._wrapperState.wasMultiple = !!a.multiple;
                                            var h = a.value;
                                            null != h ? ne(o, !!a.multiple, h, !1) : p !== !!a.multiple && (null != a.defaultValue ? ne(o, !!a.multiple, a.defaultValue, !0) : ne(o, !!a.multiple, a.multiple ? [] : "", !1))
                                    }
                                    o[ho] = a
                                } catch (t) {
                                    Es(e, e.return, t)
                                }
                            }
                            break;
                        case 6:
                            if (gu(t, e), vu(e), 4 & r) {
                                if (null === e.stateNode) throw Error(i(162));
                                o = e.stateNode, a = e.memoizedProps;
                                try {
                                    o.nodeValue = a
                                } catch (t) {
                                    Es(e, e.return, t)
                                }
                            }
                            break;
                        case 3:
                            if (gu(t, e), vu(e), 4 & r && null !== n && n.memoizedState.isDehydrated) try {
                                Wt(t.containerInfo)
                            } catch (t) {
                                Es(e, e.return, t)
                            }
                            break;
                        case 4:
                        default:
                            gu(t, e), vu(e);
                            break;
                        case 13:
                            gu(t, e), vu(e), 8192 & (o = e.child).flags && (a = null !== o.memoizedState, o.stateNode.isHidden = a, !a || null !== o.alternate && null !== o.alternate.memoizedState || (Uu = Ge())), 4 & r && hu(e);
                            break;
                        case 22:
                            if (f = null !== n && null !== n.memoizedState, 1 & e.mode ? (Xl = (c = Xl) || f, gu(t, e), Xl = c) : gu(t, e), vu(e), 8192 & r) {
                                if (c = null !== e.memoizedState, (e.stateNode.isHidden = c) && !f && 1 & e.mode)
                                    for (Jl = e, f = e.child; null !== f;) {
                                        for (d = Jl = f; null !== Jl;) {
                                            switch (h = (p = Jl).child, p.tag) {
                                                case 0:
                                                case 11:
                                                case 14:
                                                case 15:
                                                    nu(4, p, p.return);
                                                    break;
                                                case 1:
                                                    Zl(p, p.return);
                                                    var g = p.stateNode;
                                                    if ("function" == typeof g.componentWillUnmount) {
                                                        r = p, n = p.return;
                                                        try {
                                                            t = r, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount()
                                                        } catch (e) {
                                                            Es(r, n, e)
                                                        }
                                                    }
                                                    break;
                                                case 5:
                                                    Zl(p, p.return);
                                                    break;
                                                case 22:
                                                    if (null !== p.memoizedState) {
                                                        _u(d);
                                                        continue
                                                    }
                                            }
                                            null !== h ? (h.return = p, Jl = h) : _u(d)
                                        }
                                        f = f.sibling
                                    }
                                e: for (f = null, d = e;;) {
                                    if (5 === d.tag) {
                                        if (null === f) {
                                            f = d;
                                            try {
                                                o = d.stateNode, c ? "function" == typeof(a = o.style).setProperty ? a.setProperty("display", "none", "important") : a.display = "none" : (u = d.stateNode, l = null != (s = d.memoizedProps.style) && s.hasOwnProperty("display") ? s.display : null, u.style.display = ge("display", l))
                                            } catch (t) {
                                                Es(e, e.return, t)
                                            }
                                        }
                                    } else if (6 === d.tag) {
                                        if (null === f) try {
                                            d.stateNode.nodeValue = c ? "" : d.memoizedProps
                                        } catch (t) {
                                            Es(e, e.return, t)
                                        }
                                    } else if ((22 !== d.tag && 23 !== d.tag || null === d.memoizedState || d === e) && null !== d.child) {
                                        d.child.return = d, d = d.child;
                                        continue
                                    }
                                    if (d === e) break e;
                                    for (; null === d.sibling;) {
                                        if (null === d.return || d.return === e) break e;
                                        f === d && (f = null), d = d.return
                                    }
                                    f === d && (f = null), d.sibling.return = d.return, d = d.sibling
                                }
                            }
                            break;
                        case 19:
                            gu(t, e), vu(e), 4 & r && hu(e);
                        case 21:
                    }
                }

                function vu(e) {
                    var t = e.flags;
                    if (2 & t) {
                        try {
                            e: {
                                for (var n = e.return; null !== n;) {
                                    if (au(n)) {
                                        var r = n;
                                        break e
                                    }
                                    n = n.return
                                }
                                throw Error(i(160))
                            }
                            switch (r.tag) {
                                case 5:
                                    var o = r.stateNode;
                                    32 & r.flags && (de(o, ""), r.flags &= -33), su(e, lu(e), o);
                                    break;
                                case 3:
                                case 4:
                                    var a = r.stateNode.containerInfo;
                                    uu(e, lu(e), a);
                                    break;
                                default:
                                    throw Error(i(161))
                            }
                        }
                        catch (t) {
                            Es(e, e.return, t)
                        }
                        e.flags &= -3
                    }
                    4096 & t && (e.flags &= -4097)
                }

                function yu(e, t, n) {
                    Jl = e, bu(e, t, n)
                }

                function bu(e, t, n) {
                    for (var r = !!(1 & e.mode); null !== Jl;) {
                        var o = Jl,
                            i = o.child;
                        if (22 === o.tag && r) {
                            var a = null !== o.memoizedState || Kl;
                            if (!a) {
                                var l = o.alternate,
                                    u = null !== l && null !== l.memoizedState || Xl;
                                l = Kl;
                                var s = Xl;
                                if (Kl = a, (Xl = u) && !s)
                                    for (Jl = o; null !== Jl;) u = (a = Jl).child, 22 === a.tag && null !== a.memoizedState ? xu(o) : null !== u ? (u.return = a, Jl = u) : xu(o);
                                for (; null !== i;) Jl = i, bu(i, t, n), i = i.sibling;
                                Jl = o, Kl = l, Xl = s
                            }
                            wu(e)
                        } else 8772 & o.subtreeFlags && null !== i ? (i.return = o, Jl = i) : wu(e)
                    }
                }

                function wu(e) {
                    for (; null !== Jl;) {
                        var t = Jl;
                        if (8772 & t.flags) {
                            var n = t.alternate;
                            try {
                                if (8772 & t.flags) switch (t.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Xl || ru(5, t);
                                        break;
                                    case 1:
                                        var r = t.stateNode;
                                        if (4 & t.flags && !Xl)
                                            if (null === n) r.componentDidMount();
                                            else {
                                                var o = t.elementType === t.type ? n.memoizedProps : nl(t.type, n.memoizedProps);
                                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                                            }
                                        var a = t.updateQueue;
                                        null !== a && $i(t, a, r);
                                        break;
                                    case 3:
                                        var l = t.updateQueue;
                                        if (null !== l) {
                                            if (n = null, null !== t.child) switch (t.child.tag) {
                                                case 5:
                                                case 1:
                                                    n = t.child.stateNode
                                            }
                                            $i(t, l, n)
                                        }
                                        break;
                                    case 5:
                                        var u = t.stateNode;
                                        if (null === n && 4 & t.flags) {
                                            n = u;
                                            var s = t.memoizedProps;
                                            switch (t.type) {
                                                case "button":
                                                case "input":
                                                case "select":
                                                case "textarea":
                                                    s.autoFocus && n.focus();
                                                    break;
                                                case "img":
                                                    s.src && (n.src = s.src)
                                            }
                                        }
                                        break;
                                    case 6:
                                    case 4:
                                    case 12:
                                    case 19:
                                    case 17:
                                    case 21:
                                    case 22:
                                    case 23:
                                    case 25:
                                        break;
                                    case 13:
                                        if (null === t.memoizedState) {
                                            var c = t.alternate;
                                            if (null !== c) {
                                                var f = c.memoizedState;
                                                if (null !== f) {
                                                    var d = f.dehydrated;
                                                    null !== d && Wt(d)
                                                }
                                            }
                                        }
                                        break;
                                    default:
                                        throw Error(i(163))
                                }
                                Xl || 512 & t.flags && ou(t)
                            } catch (e) {
                                Es(t, t.return, e)
                            }
                        }
                        if (t === e) {
                            Jl = null;
                            break
                        }
                        if (null !== (n = t.sibling)) {
                            n.return = t.return, Jl = n;
                            break
                        }
                        Jl = t.return
                    }
                }

                function _u(e) {
                    for (; null !== Jl;) {
                        var t = Jl;
                        if (t === e) {
                            Jl = null;
                            break
                        }
                        var n = t.sibling;
                        if (null !== n) {
                            n.return = t.return, Jl = n;
                            break
                        }
                        Jl = t.return
                    }
                }

                function xu(e) {
                    for (; null !== Jl;) {
                        var t = Jl;
                        try {
                            switch (t.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    var n = t.return;
                                    try {
                                        ru(4, t)
                                    } catch (e) {
                                        Es(t, n, e)
                                    }
                                    break;
                                case 1:
                                    var r = t.stateNode;
                                    if ("function" == typeof r.componentDidMount) {
                                        var o = t.return;
                                        try {
                                            r.componentDidMount()
                                        } catch (e) {
                                            Es(t, o, e)
                                        }
                                    }
                                    var i = t.return;
                                    try {
                                        ou(t)
                                    } catch (e) {
                                        Es(t, i, e)
                                    }
                                    break;
                                case 5:
                                    var a = t.return;
                                    try {
                                        ou(t)
                                    } catch (e) {
                                        Es(t, a, e)
                                    }
                            }
                        } catch (e) {
                            Es(t, t.return, e)
                        }
                        if (t === e) {
                            Jl = null;
                            break
                        }
                        var l = t.sibling;
                        if (null !== l) {
                            l.return = t.return, Jl = l;
                            break
                        }
                        Jl = t.return
                    }
                }
                var Su, Eu = Math.ceil,
                    ku = w.ReactCurrentDispatcher,
                    Cu = w.ReactCurrentOwner,
                    Tu = w.ReactCurrentBatchConfig,
                    Nu = 0,
                    Ru = null,
                    Au = null,
                    Lu = 0,
                    Ou = 0,
                    Iu = ko(0),
                    Du = 0,
                    ju = null,
                    Mu = 0,
                    Pu = 0,
                    zu = 0,
                    Bu = null,
                    Fu = null,
                    Uu = 0,
                    Wu = 1 / 0,
                    Hu = null,
                    $u = !1,
                    Vu = null,
                    Yu = null,
                    Qu = !1,
                    qu = null,
                    Ku = 0,
                    Xu = 0,
                    Gu = null,
                    Ju = -1,
                    Zu = 0;

                function es() {
                    return 6 & Nu ? Ge() : -1 !== Ju ? Ju : Ju = Ge()
                }

                function ts(e) {
                    return 1 & e.mode ? 2 & Nu && 0 !== Lu ? Lu & -Lu : null !== mi.transition ? (0 === Zu && (Zu = gt()), Zu) : 0 !== (e = bt) ? e : e = void 0 === (e = window.event) ? 16 : Xt(e.type) : 1
                }

                function ns(e, t, n, r) {
                    if (50 < Xu) throw Xu = 0, Gu = null, Error(i(185));
                    vt(e, n, r), 2 & Nu && e === Ru || (e === Ru && (!(2 & Nu) && (Pu |= n), 4 === Du && ls(e, Lu)), rs(e, r), 1 === n && 0 === Nu && !(1 & t.mode) && (Wu = Ge() + 500, Fo && Ho()))
                }

                function rs(e, t) {
                    var n = e.callbackNode;
                    ! function(e, t) {
                        for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i;) {
                            var a = 31 - at(i),
                                l = 1 << a,
                                u = o[a]; - 1 === u ? l & n && !(l & r) || (o[a] = pt(l, t)) : u <= t && (e.expiredLanes |= l), i &= ~l
                        }
                    }(e, t);
                    var r = dt(e, e === Ru ? Lu : 0);
                    if (0 === r) null !== n && qe(n), e.callbackNode = null, e.callbackPriority = 0;
                    else if (t = r & -r, e.callbackPriority !== t) {
                        if (null != n && qe(n), 1 === t) 0 === e.tag ? function(e) {
                            Fo = !0, Wo(e)
                        }(us.bind(null, e)) : Wo(us.bind(null, e)), ao((function() {
                            !(6 & Nu) && Ho()
                        })), n = null;
                        else {
                            switch (wt(r)) {
                                case 1:
                                    n = Ze;
                                    break;
                                case 4:
                                    n = et;
                                    break;
                                case 16:
                                default:
                                    n = tt;
                                    break;
                                case 536870912:
                                    n = rt
                            }
                            n = Rs(n, os.bind(null, e))
                        }
                        e.callbackPriority = t, e.callbackNode = n
                    }
                }

                function os(e, t) {
                    if (Ju = -1, Zu = 0, 6 & Nu) throw Error(i(327));
                    var n = e.callbackNode;
                    if (xs() && e.callbackNode !== n) return null;
                    var r = dt(e, e === Ru ? Lu : 0);
                    if (0 === r) return null;
                    if (30 & r || r & e.expiredLanes || t) t = ms(e, r);
                    else {
                        t = r;
                        var o = Nu;
                        Nu |= 2;
                        var a = hs();
                        for (Ru === e && Lu === t || (Hu = null, Wu = Ge() + 500, ds(e, t));;) try {
                            ys();
                            break
                        } catch (t) {
                            ps(e, t)
                        }
                        Ti(), ku.current = a, Nu = o, null !== Au ? t = 0 : (Ru = null, Lu = 0, t = Du)
                    }
                    if (0 !== t) {
                        if (2 === t && (0 !== (o = ht(e)) && (r = o, t = is(e, o))), 1 === t) throw n = ju, ds(e, 0), ls(e, r), rs(e, Ge()), n;
                        if (6 === t) ls(e, r);
                        else {
                            if (o = e.current.alternate, !(30 & r || function(e) {
                                    for (var t = e;;) {
                                        if (16384 & t.flags) {
                                            var n = t.updateQueue;
                                            if (null !== n && null !== (n = n.stores))
                                                for (var r = 0; r < n.length; r++) {
                                                    var o = n[r],
                                                        i = o.getSnapshot;
                                                    o = o.value;
                                                    try {
                                                        if (!lr(i(), o)) return !1
                                                    } catch (e) {
                                                        return !1
                                                    }
                                                }
                                        }
                                        if (n = t.child, 16384 & t.subtreeFlags && null !== n) n.return = t, t = n;
                                        else {
                                            if (t === e) break;
                                            for (; null === t.sibling;) {
                                                if (null === t.return || t.return === e) return !0;
                                                t = t.return
                                            }
                                            t.sibling.return = t.return, t = t.sibling
                                        }
                                    }
                                    return !0
                                }(o) || (t = ms(e, r), 2 === t && (a = ht(e), 0 !== a && (r = a, t = is(e, a))), 1 !== t))) throw n = ju, ds(e, 0), ls(e, r), rs(e, Ge()), n;
                            switch (e.finishedWork = o, e.finishedLanes = r, t) {
                                case 0:
                                case 1:
                                    throw Error(i(345));
                                case 2:
                                case 5:
                                    _s(e, Fu, Hu);
                                    break;
                                case 3:
                                    if (ls(e, r), (130023424 & r) === r && 10 < (t = Uu + 500 - Ge())) {
                                        if (0 !== dt(e, 0)) break;
                                        if (((o = e.suspendedLanes) & r) !== r) {
                                            es(), e.pingedLanes |= e.suspendedLanes & o;
                                            break
                                        }
                                        e.timeoutHandle = ro(_s.bind(null, e, Fu, Hu), t);
                                        break
                                    }
                                    _s(e, Fu, Hu);
                                    break;
                                case 4:
                                    if (ls(e, r), (4194240 & r) === r) break;
                                    for (t = e.eventTimes, o = -1; 0 < r;) {
                                        var l = 31 - at(r);
                                        a = 1 << l, (l = t[l]) > o && (o = l), r &= ~a
                                    }
                                    if (r = o, 10 < (r = (120 > (r = Ge() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Eu(r / 1960)) - r)) {
                                        e.timeoutHandle = ro(_s.bind(null, e, Fu, Hu), r);
                                        break
                                    }
                                    _s(e, Fu, Hu);
                                    break;
                                default:
                                    throw Error(i(329))
                            }
                        }
                    }
                    return rs(e, Ge()), e.callbackNode === n ? os.bind(null, e) : null
                }

                function is(e, t) {
                    var n = Bu;
                    return e.current.memoizedState.isDehydrated && (ds(e, t).flags |= 256), 2 !== (e = ms(e, t)) && (t = Fu, Fu = n, null !== t && as(t)), e
                }

                function as(e) {
                    null === Fu ? Fu = e : Fu.push.apply(Fu, e)
                }

                function ls(e, t) {
                    for (t &= ~zu, t &= ~Pu, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
                        var n = 31 - at(t),
                            r = 1 << n;
                        e[n] = -1, t &= ~r
                    }
                }

                function us(e) {
                    if (6 & Nu) throw Error(i(327));
                    xs();
                    var t = dt(e, 0);
                    if (!(1 & t)) return rs(e, Ge()), null;
                    var n = ms(e, t);
                    if (0 !== e.tag && 2 === n) {
                        var r = ht(e);
                        0 !== r && (t = r, n = is(e, r))
                    }
                    if (1 === n) throw n = ju, ds(e, 0), ls(e, t), rs(e, Ge()), n;
                    if (6 === n) throw Error(i(345));
                    return e.finishedWork = e.current.alternate, e.finishedLanes = t, _s(e, Fu, Hu), rs(e, Ge()), null
                }

                function ss(e, t) {
                    var n = Nu;
                    Nu |= 1;
                    try {
                        return e(t)
                    } finally {
                        0 === (Nu = n) && (Wu = Ge() + 500, Fo && Ho())
                    }
                }

                function cs(e) {
                    null !== qu && 0 === qu.tag && !(6 & Nu) && xs();
                    var t = Nu;
                    Nu |= 1;
                    var n = Tu.transition,
                        r = bt;
                    try {
                        if (Tu.transition = null, bt = 1, e) return e()
                    } finally {
                        bt = r, Tu.transition = n, !(6 & (Nu = t)) && Ho()
                    }
                }

                function fs() {
                    Ou = Iu.current, Co(Iu)
                }

                function ds(e, t) {
                    e.finishedWork = null, e.finishedLanes = 0;
                    var n = e.timeoutHandle;
                    if (-1 !== n && (e.timeoutHandle = -1, oo(n)), null !== Au)
                        for (n = Au.return; null !== n;) {
                            var r = n;
                            switch (ni(r), r.tag) {
                                case 1:
                                    null != (r = r.type.childContextTypes) && Do();
                                    break;
                                case 3:
                                    Gi(), Co(Ao), Co(Ro), ra();
                                    break;
                                case 5:
                                    Zi(r);
                                    break;
                                case 4:
                                    Gi();
                                    break;
                                case 13:
                                case 19:
                                    Co(ea);
                                    break;
                                case 10:
                                    Ni(r.type._context);
                                    break;
                                case 22:
                                case 23:
                                    fs()
                            }
                            n = n.return
                        }
                    if (Ru = e, Au = e = Is(e.current, null), Lu = Ou = t, Du = 0, ju = null, zu = Pu = Mu = 0, Fu = Bu = null, null !== Oi) {
                        for (t = 0; t < Oi.length; t++)
                            if (null !== (r = (n = Oi[t]).interleaved)) {
                                n.interleaved = null;
                                var o = r.next,
                                    i = n.pending;
                                if (null !== i) {
                                    var a = i.next;
                                    i.next = o, r.next = a
                                }
                                n.pending = r
                            }
                        Oi = null
                    }
                    return e
                }

                function ps(e, t) {
                    for (;;) {
                        var n = Au;
                        try {
                            if (Ti(), oa.current = Ja, ca) {
                                for (var r = la.memoizedState; null !== r;) {
                                    var o = r.queue;
                                    null !== o && (o.pending = null), r = r.next
                                }
                                ca = !1
                            }
                            if (aa = 0, sa = ua = la = null, fa = !1, da = 0, Cu.current = null, null === n || null === n.return) {
                                Du = 1, ju = t, Au = null;
                                break
                            }
                            e: {
                                var a = e,
                                    l = n.return,
                                    u = n,
                                    s = t;
                                if (t = Lu, u.flags |= 32768, null !== s && "object" == typeof s && "function" == typeof s.then) {
                                    var c = s,
                                        f = u,
                                        d = f.tag;
                                    if (!(1 & f.mode || 0 !== d && 11 !== d && 15 !== d)) {
                                        var p = f.alternate;
                                        p ? (f.updateQueue = p.updateQueue, f.memoizedState = p.memoizedState, f.lanes = p.lanes) : (f.updateQueue = null, f.memoizedState = null)
                                    }
                                    var h = ml(l);
                                    if (null !== h) {
                                        h.flags &= -257, vl(h, l, u, 0, t), 1 & h.mode && gl(a, c, t), s = c;
                                        var g = (t = h).updateQueue;
                                        if (null === g) {
                                            var m = new Set;
                                            m.add(s), t.updateQueue = m
                                        } else g.add(s);
                                        break e
                                    }
                                    if (!(1 & t)) {
                                        gl(a, c, t), gs();
                                        break e
                                    }
                                    s = Error(i(426))
                                } else if (ii && 1 & u.mode) {
                                    var v = ml(l);
                                    if (null !== v) {
                                        !(65536 & v.flags) && (v.flags |= 256), vl(v, l, u, 0, t), gi(sl(s, u));
                                        break e
                                    }
                                }
                                a = s = sl(s, u),
                                4 !== Du && (Du = 2),
                                null === Bu ? Bu = [a] : Bu.push(a),
                                a = l;do {
                                    switch (a.tag) {
                                        case 3:
                                            a.flags |= 65536, t &= -t, a.lanes |= t, Wi(a, pl(0, s, t));
                                            break e;
                                        case 1:
                                            u = s;
                                            var y = a.type,
                                                b = a.stateNode;
                                            if (!(128 & a.flags || "function" != typeof y.getDerivedStateFromError && (null === b || "function" != typeof b.componentDidCatch || null !== Yu && Yu.has(b)))) {
                                                a.flags |= 65536, t &= -t, a.lanes |= t, Wi(a, hl(a, u, t));
                                                break e
                                            }
                                    }
                                    a = a.return
                                } while (null !== a)
                            }
                            ws(n)
                        } catch (e) {
                            t = e, Au === n && null !== n && (Au = n = n.return);
                            continue
                        }
                        break
                    }
                }

                function hs() {
                    var e = ku.current;
                    return ku.current = Ja, null === e ? Ja : e
                }

                function gs() {
                    0 !== Du && 3 !== Du && 2 !== Du || (Du = 4), null === Ru || !(268435455 & Mu) && !(268435455 & Pu) || ls(Ru, Lu)
                }

                function ms(e, t) {
                    var n = Nu;
                    Nu |= 2;
                    var r = hs();
                    for (Ru === e && Lu === t || (Hu = null, ds(e, t));;) try {
                        vs();
                        break
                    } catch (t) {
                        ps(e, t)
                    }
                    if (Ti(), Nu = n, ku.current = r, null !== Au) throw Error(i(261));
                    return Ru = null, Lu = 0, Du
                }

                function vs() {
                    for (; null !== Au;) bs(Au)
                }

                function ys() {
                    for (; null !== Au && !Ke();) bs(Au)
                }

                function bs(e) {
                    var t = Su(e.alternate, e, Ou);
                    e.memoizedProps = e.pendingProps, null === t ? ws(e) : Au = t, Cu.current = null
                }

                function ws(e) {
                    var t = e;
                    do {
                        var n = t.alternate;
                        if (e = t.return, 32768 & t.flags) {
                            if (null !== (n = ql(n, t))) return n.flags &= 32767, void(Au = n);
                            if (null === e) return Du = 6, void(Au = null);
                            e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null
                        } else if (null !== (n = Ql(n, t, Ou))) return void(Au = n);
                        if (null !== (t = t.sibling)) return void(Au = t);
                        Au = t = e
                    } while (null !== t);
                    0 === Du && (Du = 5)
                }

                function _s(e, t, n) {
                    var r = bt,
                        o = Tu.transition;
                    try {
                        Tu.transition = null, bt = 1,
                            function(e, t, n, r) {
                                do {
                                    xs()
                                } while (null !== qu);
                                if (6 & Nu) throw Error(i(327));
                                n = e.finishedWork;
                                var o = e.finishedLanes;
                                if (null === n) return null;
                                if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(i(177));
                                e.callbackNode = null, e.callbackPriority = 0;
                                var a = n.lanes | n.childLanes;
                                if (function(e, t) {
                                        var n = e.pendingLanes & ~t;
                                        e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
                                        var r = e.eventTimes;
                                        for (e = e.expirationTimes; 0 < n;) {
                                            var o = 31 - at(n),
                                                i = 1 << o;
                                            t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i
                                        }
                                    }(e, a), e === Ru && (Au = Ru = null, Lu = 0), !(2064 & n.subtreeFlags) && !(2064 & n.flags) || Qu || (Qu = !0, Rs(tt, (function() {
                                        return xs(), null
                                    }))), a = !!(15990 & n.flags), !!(15990 & n.subtreeFlags) || a) {
                                    a = Tu.transition, Tu.transition = null;
                                    var l = bt;
                                    bt = 1;
                                    var u = Nu;
                                    Nu |= 4, Cu.current = null,
                                        function(e, t) {
                                            if (eo = $t, pr(e = dr())) {
                                                if ("selectionStart" in e) var n = {
                                                    start: e.selectionStart,
                                                    end: e.selectionEnd
                                                };
                                                else e: {
                                                    var r = (n = (n = e.ownerDocument) && n.defaultView || window).getSelection && n.getSelection();
                                                    if (r && 0 !== r.rangeCount) {
                                                        n = r.anchorNode;
                                                        var o = r.anchorOffset,
                                                            a = r.focusNode;
                                                        r = r.focusOffset;
                                                        try {
                                                            n.nodeType, a.nodeType
                                                        } catch (e) {
                                                            n = null;
                                                            break e
                                                        }
                                                        var l = 0,
                                                            u = -1,
                                                            s = -1,
                                                            c = 0,
                                                            f = 0,
                                                            d = e,
                                                            p = null;
                                                        t: for (;;) {
                                                            for (var h; d !== n || 0 !== o && 3 !== d.nodeType || (u = l + o), d !== a || 0 !== r && 3 !== d.nodeType || (s = l + r), 3 === d.nodeType && (l += d.nodeValue.length), null !== (h = d.firstChild);) p = d, d = h;
                                                            for (;;) {
                                                                if (d === e) break t;
                                                                if (p === n && ++c === o && (u = l), p === a && ++f === r && (s = l), null !== (h = d.nextSibling)) break;
                                                                p = (d = p).parentNode
                                                            }
                                                            d = h
                                                        }
                                                        n = -1 === u || -1 === s ? null : {
                                                            start: u,
                                                            end: s
                                                        }
                                                    } else n = null
                                                }
                                                n = n || {
                                                    start: 0,
                                                    end: 0
                                                }
                                            } else n = null;
                                            for (to = {
                                                    focusedElem: e,
                                                    selectionRange: n
                                                }, $t = !1, Jl = t; null !== Jl;)
                                                if (e = (t = Jl).child, 1028 & t.subtreeFlags && null !== e) e.return = t, Jl = e;
                                                else
                                                    for (; null !== Jl;) {
                                                        t = Jl;
                                                        try {
                                                            var g = t.alternate;
                                                            if (1024 & t.flags) switch (t.tag) {
                                                                case 0:
                                                                case 11:
                                                                case 15:
                                                                case 5:
                                                                case 6:
                                                                case 4:
                                                                case 17:
                                                                    break;
                                                                case 1:
                                                                    if (null !== g) {
                                                                        var m = g.memoizedProps,
                                                                            v = g.memoizedState,
                                                                            y = t.stateNode,
                                                                            b = y.getSnapshotBeforeUpdate(t.elementType === t.type ? m : nl(t.type, m), v);
                                                                        y.__reactInternalSnapshotBeforeUpdate = b
                                                                    }
                                                                    break;
                                                                case 3:
                                                                    var w = t.stateNode.containerInfo;
                                                                    1 === w.nodeType ? w.textContent = "" : 9 === w.nodeType && w.documentElement && w.removeChild(w.documentElement);
                                                                    break;
                                                                default:
                                                                    throw Error(i(163))
                                                            }
                                                        } catch (e) {
                                                            Es(t, t.return, e)
                                                        }
                                                        if (null !== (e = t.sibling)) {
                                                            e.return = t.return, Jl = e;
                                                            break
                                                        }
                                                        Jl = t.return
                                                    }
                                            g = tu, tu = !1
                                        }(e, n), mu(n, e), hr(to), $t = !!eo, to = eo = null, e.current = n, yu(n, e, o), Xe(), Nu = u, bt = l, Tu.transition = a
                                } else e.current = n;
                                if (Qu && (Qu = !1, qu = e, Ku = o), a = e.pendingLanes, 0 === a && (Yu = null), function(e) {
                                        if (it && "function" == typeof it.onCommitFiberRoot) try {
                                            it.onCommitFiberRoot(ot, e, void 0, !(128 & ~e.current.flags))
                                        } catch (e) {}
                                    }(n.stateNode), rs(e, Ge()), null !== t)
                                    for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, {
                                        componentStack: o.stack,
                                        digest: o.digest
                                    });
                                if ($u) throw $u = !1, e = Vu, Vu = null, e;
                                !!(1 & Ku) && 0 !== e.tag && xs(), a = e.pendingLanes, 1 & a ? e === Gu ? Xu++ : (Xu = 0, Gu = e) : Xu = 0, Ho()
                            }(e, t, n, r)
                    } finally {
                        Tu.transition = o, bt = r
                    }
                    return null
                }

                function xs() {
                    if (null !== qu) {
                        var e = wt(Ku),
                            t = Tu.transition,
                            n = bt;
                        try {
                            if (Tu.transition = null, bt = 16 > e ? 16 : e, null === qu) var r = !1;
                            else {
                                if (e = qu, qu = null, Ku = 0, 6 & Nu) throw Error(i(331));
                                var o = Nu;
                                for (Nu |= 4, Jl = e.current; null !== Jl;) {
                                    var a = Jl,
                                        l = a.child;
                                    if (16 & Jl.flags) {
                                        var u = a.deletions;
                                        if (null !== u) {
                                            for (var s = 0; s < u.length; s++) {
                                                var c = u[s];
                                                for (Jl = c; null !== Jl;) {
                                                    var f = Jl;
                                                    switch (f.tag) {
                                                        case 0:
                                                        case 11:
                                                        case 15:
                                                            nu(8, f, a)
                                                    }
                                                    var d = f.child;
                                                    if (null !== d) d.return = f, Jl = d;
                                                    else
                                                        for (; null !== Jl;) {
                                                            var p = (f = Jl).sibling,
                                                                h = f.return;
                                                            if (iu(f), f === c) {
                                                                Jl = null;
                                                                break
                                                            }
                                                            if (null !== p) {
                                                                p.return = h, Jl = p;
                                                                break
                                                            }
                                                            Jl = h
                                                        }
                                                }
                                            }
                                            var g = a.alternate;
                                            if (null !== g) {
                                                var m = g.child;
                                                if (null !== m) {
                                                    g.child = null;
                                                    do {
                                                        var v = m.sibling;
                                                        m.sibling = null, m = v
                                                    } while (null !== m)
                                                }
                                            }
                                            Jl = a
                                        }
                                    }
                                    if (2064 & a.subtreeFlags && null !== l) l.return = a, Jl = l;
                                    else e: for (; null !== Jl;) {
                                        if (2048 & (a = Jl).flags) switch (a.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                nu(9, a, a.return)
                                        }
                                        var y = a.sibling;
                                        if (null !== y) {
                                            y.return = a.return, Jl = y;
                                            break e
                                        }
                                        Jl = a.return
                                    }
                                }
                                var b = e.current;
                                for (Jl = b; null !== Jl;) {
                                    var w = (l = Jl).child;
                                    if (2064 & l.subtreeFlags && null !== w) w.return = l, Jl = w;
                                    else e: for (l = b; null !== Jl;) {
                                        if (2048 & (u = Jl).flags) try {
                                            switch (u.tag) {
                                                case 0:
                                                case 11:
                                                case 15:
                                                    ru(9, u)
                                            }
                                        } catch (e) {
                                            Es(u, u.return, e)
                                        }
                                        if (u === l) {
                                            Jl = null;
                                            break e
                                        }
                                        var _ = u.sibling;
                                        if (null !== _) {
                                            _.return = u.return, Jl = _;
                                            break e
                                        }
                                        Jl = u.return
                                    }
                                }
                                if (Nu = o, Ho(), it && "function" == typeof it.onPostCommitFiberRoot) try {
                                    it.onPostCommitFiberRoot(ot, e)
                                } catch (e) {}
                                r = !0
                            }
                            return r
                        } finally {
                            bt = n, Tu.transition = t
                        }
                    }
                    return !1
                }

                function Ss(e, t, n) {
                    e = Fi(e, t = pl(0, t = sl(n, t), 1), 1), t = es(), null !== e && (vt(e, 1, t), rs(e, t))
                }

                function Es(e, t, n) {
                    if (3 === e.tag) Ss(e, e, n);
                    else
                        for (; null !== t;) {
                            if (3 === t.tag) {
                                Ss(t, e, n);
                                break
                            }
                            if (1 === t.tag) {
                                var r = t.stateNode;
                                if ("function" == typeof t.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === Yu || !Yu.has(r))) {
                                    t = Fi(t, e = hl(t, e = sl(n, e), 1), 1), e = es(), null !== t && (vt(t, 1, e), rs(t, e));
                                    break
                                }
                            }
                            t = t.return
                        }
                }

                function ks(e, t, n) {
                    var r = e.pingCache;
                    null !== r && r.delete(t), t = es(), e.pingedLanes |= e.suspendedLanes & n, Ru === e && (Lu & n) === n && (4 === Du || 3 === Du && (130023424 & Lu) === Lu && 500 > Ge() - Uu ? ds(e, 0) : zu |= n), rs(e, t)
                }

                function Cs(e, t) {
                    0 === t && (1 & e.mode ? (t = ct, !(130023424 & (ct <<= 1)) && (ct = 4194304)) : t = 1);
                    var n = es();
                    null !== (e = ji(e, t)) && (vt(e, t, n), rs(e, n))
                }

                function Ts(e) {
                    var t = e.memoizedState,
                        n = 0;
                    null !== t && (n = t.retryLane), Cs(e, n)
                }

                function Ns(e, t) {
                    var n = 0;
                    switch (e.tag) {
                        case 13:
                            var r = e.stateNode,
                                o = e.memoizedState;
                            null !== o && (n = o.retryLane);
                            break;
                        case 19:
                            r = e.stateNode;
                            break;
                        default:
                            throw Error(i(314))
                    }
                    null !== r && r.delete(t), Cs(e, n)
                }

                function Rs(e, t) {
                    return Qe(e, t)
                }

                function As(e, t, n, r) {
                    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
                }

                function Ls(e, t, n, r) {
                    return new As(e, t, n, r)
                }

                function Os(e) {
                    return !(!(e = e.prototype) || !e.isReactComponent)
                }

                function Is(e, t) {
                    var n = e.alternate;
                    return null === n ? ((n = Ls(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 14680064 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
                        lanes: t.lanes,
                        firstContext: t.firstContext
                    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
                }

                function Ds(e, t, n, r, o, a) {
                    var l = 2;
                    if (r = e, "function" == typeof e) Os(e) && (l = 1);
                    else if ("string" == typeof e) l = 5;
                    else e: switch (e) {
                        case S:
                            return js(n.children, o, a, t);
                        case E:
                            l = 8, o |= 8;
                            break;
                        case k:
                            return (e = Ls(12, n, t, 2 | o)).elementType = k, e.lanes = a, e;
                        case R:
                            return (e = Ls(13, n, t, o)).elementType = R, e.lanes = a, e;
                        case A:
                            return (e = Ls(19, n, t, o)).elementType = A, e.lanes = a, e;
                        case I:
                            return Ms(n, o, a, t);
                        default:
                            if ("object" == typeof e && null !== e) switch (e.$$typeof) {
                                case C:
                                    l = 10;
                                    break e;
                                case T:
                                    l = 9;
                                    break e;
                                case N:
                                    l = 11;
                                    break e;
                                case L:
                                    l = 14;
                                    break e;
                                case O:
                                    l = 16, r = null;
                                    break e
                            }
                            throw Error(i(130, null == e ? e : typeof e, ""))
                    }
                    return (t = Ls(l, n, t, o)).elementType = e, t.type = r, t.lanes = a, t
                }

                function js(e, t, n, r) {
                    return (e = Ls(7, e, r, t)).lanes = n, e
                }

                function Ms(e, t, n, r) {
                    return (e = Ls(22, e, r, t)).elementType = I, e.lanes = n, e.stateNode = {
                        isHidden: !1
                    }, e
                }

                function Ps(e, t, n) {
                    return (e = Ls(6, e, null, t)).lanes = n, e
                }

                function zs(e, t, n) {
                    return (t = Ls(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = {
                        containerInfo: e.containerInfo,
                        pendingChildren: null,
                        implementation: e.implementation
                    }, t
                }

                function Bs(e, t, n, r, o) {
                    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = mt(0), this.expirationTimes = mt(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = mt(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null
                }

                function Fs(e, t, n, r, o, i, a, l, u) {
                    return e = new Bs(e, t, n, l, u), 1 === t ? (t = 1, !0 === i && (t |= 8)) : t = 0, i = Ls(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = {
                        element: r,
                        isDehydrated: n,
                        cache: null,
                        transitions: null,
                        pendingSuspenseBoundaries: null
                    }, Pi(i), e
                }

                function Us(e) {
                    if (!e) return No;
                    e: {
                        if (We(e = e._reactInternals) !== e || 1 !== e.tag) throw Error(i(170));
                        var t = e;do {
                            switch (t.tag) {
                                case 3:
                                    t = t.stateNode.context;
                                    break e;
                                case 1:
                                    if (Io(t.type)) {
                                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                                        break e
                                    }
                            }
                            t = t.return
                        } while (null !== t);
                        throw Error(i(171))
                    }
                    if (1 === e.tag) {
                        var n = e.type;
                        if (Io(n)) return Mo(e, n, t)
                    }
                    return t
                }

                function Ws(e, t, n, r, o, i, a, l, u) {
                    return (e = Fs(n, r, !0, e, 0, i, 0, l, u)).context = Us(null), n = e.current, (i = Bi(r = es(), o = ts(n))).callback = null != t ? t : null, Fi(n, i, o), e.current.lanes = o, vt(e, o, r), rs(e, r), e
                }

                function Hs(e, t, n, r) {
                    var o = t.current,
                        i = es(),
                        a = ts(o);
                    return n = Us(n), null === t.context ? t.context = n : t.pendingContext = n, (t = Bi(i, a)).payload = {
                        element: e
                    }, null !== (r = void 0 === r ? null : r) && (t.callback = r), null !== (e = Fi(o, t, a)) && (ns(e, o, a, i), Ui(e, o, a)), a
                }

                function $s(e) {
                    return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null
                }

                function Vs(e, t) {
                    if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
                        var n = e.retryLane;
                        e.retryLane = 0 !== n && n < t ? n : t
                    }
                }

                function Ys(e, t) {
                    Vs(e, t), (e = e.alternate) && Vs(e, t)
                }
                Su = function(e, t, n) {
                    if (null !== e)
                        if (e.memoizedProps !== t.pendingProps || Ao.current) bl = !0;
                        else {
                            if (!(e.lanes & n || 128 & t.flags)) return bl = !1,
                                function(e, t, n) {
                                    switch (t.tag) {
                                        case 3:
                                            Rl(t), hi();
                                            break;
                                        case 5:
                                            Ji(t);
                                            break;
                                        case 1:
                                            Io(t.type) && Po(t);
                                            break;
                                        case 4:
                                            Xi(t, t.stateNode.containerInfo);
                                            break;
                                        case 10:
                                            var r = t.type._context,
                                                o = t.memoizedProps.value;
                                            To(Si, r._currentValue), r._currentValue = o;
                                            break;
                                        case 13:
                                            if (null !== (r = t.memoizedState)) return null !== r.dehydrated ? (To(ea, 1 & ea.current), t.flags |= 128, null) : n & t.child.childLanes ? Pl(e, t, n) : (To(ea, 1 & ea.current), null !== (e = $l(e, t, n)) ? e.sibling : null);
                                            To(ea, 1 & ea.current);
                                            break;
                                        case 19:
                                            if (r = !!(n & t.childLanes), 128 & e.flags) {
                                                if (r) return Wl(e, t, n);
                                                t.flags |= 128
                                            }
                                            if (null !== (o = t.memoizedState) && (o.rendering = null, o.tail = null, o.lastEffect = null), To(ea, ea.current), r) break;
                                            return null;
                                        case 22:
                                        case 23:
                                            return t.lanes = 0, El(e, t, n)
                                    }
                                    return $l(e, t, n)
                                }(e, t, n);
                            bl = !!(131072 & e.flags)
                        }
                    else bl = !1, ii && 1048576 & t.flags && ei(t, Qo, t.index);
                    switch (t.lanes = 0, t.tag) {
                        case 2:
                            var r = t.type;
                            Hl(e, t), e = t.pendingProps;
                            var o = Oo(t, Ro.current);
                            Ai(t, n), o = ma(null, t, r, e, o, n);
                            var a = va();
                            return t.flags |= 1, "object" == typeof o && null !== o && "function" == typeof o.render && void 0 === o.$$typeof ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Io(r) ? (a = !0, Po(t)) : a = !1, t.memoizedState = null !== o.state && void 0 !== o.state ? o.state : null, Pi(t), o.updater = ol, t.stateNode = o, o._reactInternals = t, ul(t, r, e, n), t = Nl(null, t, r, !0, a, n)) : (t.tag = 0, ii && a && ti(t), wl(null, t, o, n), t = t.child), t;
                        case 16:
                            r = t.elementType;
                            e: {
                                switch (Hl(e, t), e = t.pendingProps, r = (o = r._init)(r._payload), t.type = r, o = t.tag = function(e) {
                                    if ("function" == typeof e) return Os(e) ? 1 : 0;
                                    if (null != e) {
                                        if ((e = e.$$typeof) === N) return 11;
                                        if (e === L) return 14
                                    }
                                    return 2
                                }(r), e = nl(r, e), o) {
                                    case 0:
                                        t = Cl(null, t, r, e, n);
                                        break e;
                                    case 1:
                                        t = Tl(null, t, r, e, n);
                                        break e;
                                    case 11:
                                        t = _l(null, t, r, e, n);
                                        break e;
                                    case 14:
                                        t = xl(null, t, r, nl(r.type, e), n);
                                        break e
                                }
                                throw Error(i(306, r, ""))
                            }
                            return t;
                        case 0:
                            return r = t.type, o = t.pendingProps, Cl(e, t, r, o = t.elementType === r ? o : nl(r, o), n);
                        case 1:
                            return r = t.type, o = t.pendingProps, Tl(e, t, r, o = t.elementType === r ? o : nl(r, o), n);
                        case 3:
                            e: {
                                if (Rl(t), null === e) throw Error(i(387));r = t.pendingProps,
                                o = (a = t.memoizedState).element,
                                zi(e, t),
                                Hi(t, r, null, n);
                                var l = t.memoizedState;
                                if (r = l.element, a.isDehydrated) {
                                    if (a = {
                                            element: r,
                                            isDehydrated: !1,
                                            cache: l.cache,
                                            pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                                            transitions: l.transitions
                                        }, t.updateQueue.baseState = a, t.memoizedState = a, 256 & t.flags) {
                                        t = Al(e, t, r, n, o = sl(Error(i(423)), t));
                                        break e
                                    }
                                    if (r !== o) {
                                        t = Al(e, t, r, n, o = sl(Error(i(424)), t));
                                        break e
                                    }
                                    for (oi = so(t.stateNode.containerInfo.firstChild), ri = t, ii = !0, ai = null, n = xi(t, null, r, n), t.child = n; n;) n.flags = -3 & n.flags | 4096, n = n.sibling
                                } else {
                                    if (hi(), r === o) {
                                        t = $l(e, t, n);
                                        break e
                                    }
                                    wl(e, t, r, n)
                                }
                                t = t.child
                            }
                            return t;
                        case 5:
                            return Ji(t), null === e && ci(t), r = t.type, o = t.pendingProps, a = null !== e ? e.memoizedProps : null, l = o.children, no(r, o) ? l = null : null !== a && no(r, a) && (t.flags |= 32), kl(e, t), wl(e, t, l, n), t.child;
                        case 6:
                            return null === e && ci(t), null;
                        case 13:
                            return Pl(e, t, n);
                        case 4:
                            return Xi(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = _i(t, null, r, n) : wl(e, t, r, n), t.child;
                        case 11:
                            return r = t.type, o = t.pendingProps, _l(e, t, r, o = t.elementType === r ? o : nl(r, o), n);
                        case 7:
                            return wl(e, t, t.pendingProps, n), t.child;
                        case 8:
                        case 12:
                            return wl(e, t, t.pendingProps.children, n), t.child;
                        case 10:
                            e: {
                                if (r = t.type._context, o = t.pendingProps, a = t.memoizedProps, l = o.value, To(Si, r._currentValue), r._currentValue = l, null !== a)
                                    if (lr(a.value, l)) {
                                        if (a.children === o.children && !Ao.current) {
                                            t = $l(e, t, n);
                                            break e
                                        }
                                    } else
                                        for (null !== (a = t.child) && (a.return = t); null !== a;) {
                                            var u = a.dependencies;
                                            if (null !== u) {
                                                l = a.child;
                                                for (var s = u.firstContext; null !== s;) {
                                                    if (s.context === r) {
                                                        if (1 === a.tag) {
                                                            (s = Bi(-1, n & -n)).tag = 2;
                                                            var c = a.updateQueue;
                                                            if (null !== c) {
                                                                var f = (c = c.shared).pending;
                                                                null === f ? s.next = s : (s.next = f.next, f.next = s), c.pending = s
                                                            }
                                                        }
                                                        a.lanes |= n, null !== (s = a.alternate) && (s.lanes |= n), Ri(a.return, n, t), u.lanes |= n;
                                                        break
                                                    }
                                                    s = s.next
                                                }
                                            } else if (10 === a.tag) l = a.type === t.type ? null : a.child;
                                            else if (18 === a.tag) {
                                                if (null === (l = a.return)) throw Error(i(341));
                                                l.lanes |= n, null !== (u = l.alternate) && (u.lanes |= n), Ri(l, n, t), l = a.sibling
                                            } else l = a.child;
                                            if (null !== l) l.return = a;
                                            else
                                                for (l = a; null !== l;) {
                                                    if (l === t) {
                                                        l = null;
                                                        break
                                                    }
                                                    if (null !== (a = l.sibling)) {
                                                        a.return = l.return, l = a;
                                                        break
                                                    }
                                                    l = l.return
                                                }
                                            a = l
                                        }
                                wl(e, t, o.children, n),
                                t = t.child
                            }
                            return t;
                        case 9:
                            return o = t.type, r = t.pendingProps.children, Ai(t, n), r = r(o = Li(o)), t.flags |= 1, wl(e, t, r, n), t.child;
                        case 14:
                            return o = nl(r = t.type, t.pendingProps), xl(e, t, r, o = nl(r.type, o), n);
                        case 15:
                            return Sl(e, t, t.type, t.pendingProps, n);
                        case 17:
                            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : nl(r, o), Hl(e, t), t.tag = 1, Io(r) ? (e = !0, Po(t)) : e = !1, Ai(t, n), al(t, r, o), ul(t, r, o, n), Nl(null, t, r, !0, e, n);
                        case 19:
                            return Wl(e, t, n);
                        case 22:
                            return El(e, t, n)
                    }
                    throw Error(i(156, t.tag))
                };
                var Qs = "function" == typeof reportError ? reportError : function(e) {
                    console.error(e)
                };

                function qs(e) {
                    this._internalRoot = e
                }

                function Ks(e) {
                    this._internalRoot = e
                }

                function Xs(e) {
                    return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
                }

                function Gs(e) {
                    return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
                }

                function Js() {}

                function Zs(e, t, n, r, o) {
                    var i = n._reactRootContainer;
                    if (i) {
                        var a = i;
                        if ("function" == typeof o) {
                            var l = o;
                            o = function() {
                                var e = $s(a);
                                l.call(e)
                            }
                        }
                        Hs(t, a, e, o)
                    } else a = function(e, t, n, r, o) {
                        if (o) {
                            if ("function" == typeof r) {
                                var i = r;
                                r = function() {
                                    var e = $s(a);
                                    i.call(e)
                                }
                            }
                            var a = Ws(t, r, e, 0, null, !1, 0, "", Js);
                            return e._reactRootContainer = a, e[go] = a.current, Wr(8 === e.nodeType ? e.parentNode : e), cs(), a
                        }
                        for (; o = e.lastChild;) e.removeChild(o);
                        if ("function" == typeof r) {
                            var l = r;
                            r = function() {
                                var e = $s(u);
                                l.call(e)
                            }
                        }
                        var u = Fs(e, 0, !1, null, 0, !1, 0, "", Js);
                        return e._reactRootContainer = u, e[go] = u.current, Wr(8 === e.nodeType ? e.parentNode : e), cs((function() {
                            Hs(t, u, n, r)
                        })), u
                    }(n, t, e, o, r);
                    return $s(a)
                }
                Ks.prototype.render = qs.prototype.render = function(e) {
                    var t = this._internalRoot;
                    if (null === t) throw Error(i(409));
                    Hs(e, t, null, null)
                }, Ks.prototype.unmount = qs.prototype.unmount = function() {
                    var e = this._internalRoot;
                    if (null !== e) {
                        this._internalRoot = null;
                        var t = e.containerInfo;
                        cs((function() {
                            Hs(null, e, null, null)
                        })), t[go] = null
                    }
                }, Ks.prototype.unstable_scheduleHydration = function(e) {
                    if (e) {
                        var t = Et();
                        e = {
                            blockedOn: null,
                            target: e,
                            priority: t
                        };
                        for (var n = 0; n < It.length && 0 !== t && t < It[n].priority; n++);
                        It.splice(n, 0, e), 0 === n && Pt(e)
                    }
                }, _t = function(e) {
                    switch (e.tag) {
                        case 3:
                            var t = e.stateNode;
                            if (t.current.memoizedState.isDehydrated) {
                                var n = ft(t.pendingLanes);
                                0 !== n && (yt(t, 1 | n), rs(t, Ge()), !(6 & Nu) && (Wu = Ge() + 500, Ho()))
                            }
                            break;
                        case 13:
                            cs((function() {
                                var t = ji(e, 1);
                                if (null !== t) {
                                    var n = es();
                                    ns(t, e, 1, n)
                                }
                            })), Ys(e, 1)
                    }
                }, xt = function(e) {
                    if (13 === e.tag) {
                        var t = ji(e, 134217728);
                        if (null !== t) ns(t, e, 134217728, es());
                        Ys(e, 134217728)
                    }
                }, St = function(e) {
                    if (13 === e.tag) {
                        var t = ts(e),
                            n = ji(e, t);
                        if (null !== n) ns(n, e, t, es());
                        Ys(e, t)
                    }
                }, Et = function() {
                    return bt
                }, kt = function(e, t) {
                    var n = bt;
                    try {
                        return bt = e, t()
                    } finally {
                        bt = n
                    }
                }, xe = function(e, t, n) {
                    switch (t) {
                        case "input":
                            if (J(e, n), t = n.name, "radio" === n.type && null != t) {
                                for (n = e; n.parentNode;) n = n.parentNode;
                                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                                    var r = n[t];
                                    if (r !== e && r.form === e.form) {
                                        var o = xo(r);
                                        if (!o) throw Error(i(90));
                                        Q(r), J(r, o)
                                    }
                                }
                            }
                            break;
                        case "textarea":
                            ie(e, n);
                            break;
                        case "select":
                            null != (t = n.value) && ne(e, !!n.multiple, t, !1)
                    }
                }, Ne = ss, Re = cs;
                var ec = {
                        usingClientEntryPoint: !1,
                        Events: [wo, _o, xo, Ce, Te, ss]
                    },
                    tc = {
                        findFiberByHostInstance: bo,
                        bundleType: 0,
                        version: "18.3.1",
                        rendererPackageName: "react-dom"
                    },
                    nc = {
                        bundleType: tc.bundleType,
                        version: tc.version,
                        rendererPackageName: tc.rendererPackageName,
                        rendererConfig: tc.rendererConfig,
                        overrideHookState: null,
                        overrideHookStateDeletePath: null,
                        overrideHookStateRenamePath: null,
                        overrideProps: null,
                        overridePropsDeletePath: null,
                        overridePropsRenamePath: null,
                        setErrorHandler: null,
                        setSuspenseHandler: null,
                        scheduleUpdate: null,
                        currentDispatcherRef: w.ReactCurrentDispatcher,
                        findHostInstanceByFiber: function(e) {
                            return null === (e = Ve(e)) ? null : e.stateNode
                        },
                        findFiberByHostInstance: tc.findFiberByHostInstance || function() {
                            return null
                        },
                        findHostInstancesForRefresh: null,
                        scheduleRefresh: null,
                        scheduleRoot: null,
                        setRefreshHandler: null,
                        getCurrentFiber: null,
                        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
                    };
                if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
                    var rc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                    if (!rc.isDisabled && rc.supportsFiber) try {
                        ot = rc.inject(nc), it = rc
                    } catch (ce) {}
                }
                t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ec, t.createPortal = function(e, t) {
                    var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                    if (!Xs(t)) throw Error(i(200));
                    return function(e, t, n) {
                        var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                        return {
                            $$typeof: x,
                            key: null == r ? null : "" + r,
                            children: e,
                            containerInfo: t,
                            implementation: n
                        }
                    }(e, t, null, n)
                }, t.createRoot = function(e, t) {
                    if (!Xs(e)) throw Error(i(299));
                    var n = !1,
                        r = "",
                        o = Qs;
                    return null != t && (!0 === t.unstable_strictMode && (n = !0), void 0 !== t.identifierPrefix && (r = t.identifierPrefix), void 0 !== t.onRecoverableError && (o = t.onRecoverableError)), t = Fs(e, 1, !1, null, 0, n, 0, r, o), e[go] = t.current, Wr(8 === e.nodeType ? e.parentNode : e), new qs(t)
                }, t.findDOMNode = function(e) {
                    if (null == e) return null;
                    if (1 === e.nodeType) return e;
                    var t = e._reactInternals;
                    if (void 0 === t) {
                        if ("function" == typeof e.render) throw Error(i(188));
                        throw e = Object.keys(e).join(","), Error(i(268, e))
                    }
                    return e = null === (e = Ve(t)) ? null : e.stateNode
                }, t.flushSync = function(e) {
                    return cs(e)
                }, t.hydrate = function(e, t, n) {
                    if (!Gs(t)) throw Error(i(200));
                    return Zs(null, e, t, !0, n)
                }, t.hydrateRoot = function(e, t, n) {
                    if (!Xs(e)) throw Error(i(405));
                    var r = null != n && n.hydratedSources || null,
                        o = !1,
                        a = "",
                        l = Qs;
                    if (null != n && (!0 === n.unstable_strictMode && (o = !0), void 0 !== n.identifierPrefix && (a = n.identifierPrefix), void 0 !== n.onRecoverableError && (l = n.onRecoverableError)), t = Ws(t, null, e, 1, null != n ? n : null, o, 0, a, l), e[go] = t.current, Wr(e), r)
                        for (e = 0; e < r.length; e++) o = (o = (n = r[e])._getVersion)(n._source), null == t.mutableSourceEagerHydrationData ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
                    return new Ks(t)
                }, t.render = function(e, t, n) {
                    if (!Gs(t)) throw Error(i(200));
                    return Zs(null, e, t, !1, n)
                }, t.unmountComponentAtNode = function(e) {
                    if (!Gs(e)) throw Error(i(40));
                    return !!e._reactRootContainer && (cs((function() {
                        Zs(null, null, e, !1, (function() {
                            e._reactRootContainer = null, e[go] = null
                        }))
                    })), !0)
                }, t.unstable_batchedUpdates = ss, t.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
                    if (!Gs(n)) throw Error(i(200));
                    if (null == e || void 0 === e._reactInternals) throw Error(i(38));
                    return Zs(e, t, n, !1, r)
                }, t.version = "18.3.1-next-f1338f8080-20240426"
            },
            338: (e, t, n) => {
                "use strict";
                var r = n(961);
                t.H = r.createRoot, r.hydrateRoot
            },
            961: (e, t, n) => {
                "use strict";
                ! function e() {
                    if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
                        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
                    } catch (e) {
                        console.error(e)
                    }
                }(), e.exports = n(551)
            },
            20: (e, t, n) => {
                "use strict";
                var r = n(540),
                    o = Symbol.for("react.element"),
                    i = Symbol.for("react.fragment"),
                    a = Object.prototype.hasOwnProperty,
                    l = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                    u = {
                        key: !0,
                        ref: !0,
                        __self: !0,
                        __source: !0
                    };

                function s(e, t, n) {
                    var r, i = {},
                        s = null,
                        c = null;
                    for (r in void 0 !== n && (s = "" + n), void 0 !== t.key && (s = "" + t.key), void 0 !== t.ref && (c = t.ref), t) a.call(t, r) && !u.hasOwnProperty(r) && (i[r] = t[r]);
                    if (e && e.defaultProps)
                        for (r in t = e.defaultProps) void 0 === i[r] && (i[r] = t[r]);
                    return {
                        $$typeof: o,
                        type: e,
                        key: s,
                        ref: c,
                        props: i,
                        _owner: l.current
                    }
                }
                t.Fragment = i, t.jsx = s, t.jsxs = s
            },
            287: (e, t) => {
                "use strict";
                var n = Symbol.for("react.element"),
                    r = Symbol.for("react.portal"),
                    o = Symbol.for("react.fragment"),
                    i = Symbol.for("react.strict_mode"),
                    a = Symbol.for("react.profiler"),
                    l = Symbol.for("react.provider"),
                    u = Symbol.for("react.context"),
                    s = Symbol.for("react.forward_ref"),
                    c = Symbol.for("react.suspense"),
                    f = Symbol.for("react.memo"),
                    d = Symbol.for("react.lazy"),
                    p = Symbol.iterator;
                var h = {
                        isMounted: function() {
                            return !1
                        },
                        enqueueForceUpdate: function() {},
                        enqueueReplaceState: function() {},
                        enqueueSetState: function() {}
                    },
                    g = Object.assign,
                    m = {};

                function v(e, t, n) {
                    this.props = e, this.context = t, this.refs = m, this.updater = n || h
                }

                function y() {}

                function b(e, t, n) {
                    this.props = e, this.context = t, this.refs = m, this.updater = n || h
                }
                v.prototype.isReactComponent = {}, v.prototype.setState = function(e, t) {
                    if ("object" != typeof e && "function" != typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                    this.updater.enqueueSetState(this, e, t, "setState")
                }, v.prototype.forceUpdate = function(e) {
                    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
                }, y.prototype = v.prototype;
                var w = b.prototype = new y;
                w.constructor = b, g(w, v.prototype), w.isPureReactComponent = !0;
                var _ = Array.isArray,
                    x = Object.prototype.hasOwnProperty,
                    S = {
                        current: null
                    },
                    E = {
                        key: !0,
                        ref: !0,
                        __self: !0,
                        __source: !0
                    };

                function k(e, t, r) {
                    var o, i = {},
                        a = null,
                        l = null;
                    if (null != t)
                        for (o in void 0 !== t.ref && (l = t.ref), void 0 !== t.key && (a = "" + t.key), t) x.call(t, o) && !E.hasOwnProperty(o) && (i[o] = t[o]);
                    var u = arguments.length - 2;
                    if (1 === u) i.children = r;
                    else if (1 < u) {
                        for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
                        i.children = s
                    }
                    if (e && e.defaultProps)
                        for (o in u = e.defaultProps) void 0 === i[o] && (i[o] = u[o]);
                    return {
                        $$typeof: n,
                        type: e,
                        key: a,
                        ref: l,
                        props: i,
                        _owner: S.current
                    }
                }

                function C(e) {
                    return "object" == typeof e && null !== e && e.$$typeof === n
                }
                var T = /\/+/g;

                function N(e, t) {
                    return "object" == typeof e && null !== e && null != e.key ? function(e) {
                        var t = {
                            "=": "=0",
                            ":": "=2"
                        };
                        return "$" + e.replace(/[=:]/g, (function(e) {
                            return t[e]
                        }))
                    }("" + e.key) : t.toString(36)
                }

                function R(e, t, o, i, a) {
                    var l = typeof e;
                    "undefined" !== l && "boolean" !== l || (e = null);
                    var u = !1;
                    if (null === e) u = !0;
                    else switch (l) {
                        case "string":
                        case "number":
                            u = !0;
                            break;
                        case "object":
                            switch (e.$$typeof) {
                                case n:
                                case r:
                                    u = !0
                            }
                    }
                    if (u) return a = a(u = e), e = "" === i ? "." + N(u, 0) : i, _(a) ? (o = "", null != e && (o = e.replace(T, "$&/") + "/"), R(a, t, o, "", (function(e) {
                        return e
                    }))) : null != a && (C(a) && (a = function(e, t) {
                        return {
                            $$typeof: n,
                            type: e.type,
                            key: t,
                            ref: e.ref,
                            props: e.props,
                            _owner: e._owner
                        }
                    }(a, o + (!a.key || u && u.key === a.key ? "" : ("" + a.key).replace(T, "$&/") + "/") + e)), t.push(a)), 1;
                    if (u = 0, i = "" === i ? "." : i + ":", _(e))
                        for (var s = 0; s < e.length; s++) {
                            var c = i + N(l = e[s], s);
                            u += R(l, t, o, c, a)
                        } else if (c = function(e) {
                                return null === e || "object" != typeof e ? null : "function" == typeof(e = p && e[p] || e["@@iterator"]) ? e : null
                            }(e), "function" == typeof c)
                            for (e = c.call(e), s = 0; !(l = e.next()).done;) u += R(l = l.value, t, o, c = i + N(l, s++), a);
                        else if ("object" === l) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
                    return u
                }

                function A(e, t, n) {
                    if (null == e) return e;
                    var r = [],
                        o = 0;
                    return R(e, r, "", "", (function(e) {
                        return t.call(n, e, o++)
                    })), r
                }

                function L(e) {
                    if (-1 === e._status) {
                        var t = e._result;
                        (t = t()).then((function(t) {
                            0 !== e._status && -1 !== e._status || (e._status = 1, e._result = t)
                        }), (function(t) {
                            0 !== e._status && -1 !== e._status || (e._status = 2, e._result = t)
                        })), -1 === e._status && (e._status = 0, e._result = t)
                    }
                    if (1 === e._status) return e._result.default;
                    throw e._result
                }
                var O = {
                        current: null
                    },
                    I = {
                        transition: null
                    },
                    D = {
                        ReactCurrentDispatcher: O,
                        ReactCurrentBatchConfig: I,
                        ReactCurrentOwner: S
                    };

                function j() {
                    throw Error("act(...) is not supported in production builds of React.")
                }
                t.Children = {
                    map: A,
                    forEach: function(e, t, n) {
                        A(e, (function() {
                            t.apply(this, arguments)
                        }), n)
                    },
                    count: function(e) {
                        var t = 0;
                        return A(e, (function() {
                            t++
                        })), t
                    },
                    toArray: function(e) {
                        return A(e, (function(e) {
                            return e
                        })) || []
                    },
                    only: function(e) {
                        if (!C(e)) throw Error("React.Children.only expected to receive a single React element child.");
                        return e
                    }
                }, t.Component = v, t.Fragment = o, t.Profiler = a, t.PureComponent = b, t.StrictMode = i, t.Suspense = c, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = D, t.act = j, t.cloneElement = function(e, t, r) {
                    if (null == e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
                    var o = g({}, e.props),
                        i = e.key,
                        a = e.ref,
                        l = e._owner;
                    if (null != t) {
                        if (void 0 !== t.ref && (a = t.ref, l = S.current), void 0 !== t.key && (i = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
                        for (s in t) x.call(t, s) && !E.hasOwnProperty(s) && (o[s] = void 0 === t[s] && void 0 !== u ? u[s] : t[s])
                    }
                    var s = arguments.length - 2;
                    if (1 === s) o.children = r;
                    else if (1 < s) {
                        u = Array(s);
                        for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
                        o.children = u
                    }
                    return {
                        $$typeof: n,
                        type: e.type,
                        key: i,
                        ref: a,
                        props: o,
                        _owner: l
                    }
                }, t.createContext = function(e) {
                    return (e = {
                        $$typeof: u,
                        _currentValue: e,
                        _currentValue2: e,
                        _threadCount: 0,
                        Provider: null,
                        Consumer: null,
                        _defaultValue: null,
                        _globalName: null
                    }).Provider = {
                        $$typeof: l,
                        _context: e
                    }, e.Consumer = e
                }, t.createElement = k, t.createFactory = function(e) {
                    var t = k.bind(null, e);
                    return t.type = e, t
                }, t.createRef = function() {
                    return {
                        current: null
                    }
                }, t.forwardRef = function(e) {
                    return {
                        $$typeof: s,
                        render: e
                    }
                }, t.isValidElement = C, t.lazy = function(e) {
                    return {
                        $$typeof: d,
                        _payload: {
                            _status: -1,
                            _result: e
                        },
                        _init: L
                    }
                }, t.memo = function(e, t) {
                    return {
                        $$typeof: f,
                        type: e,
                        compare: void 0 === t ? null : t
                    }
                }, t.startTransition = function(e) {
                    var t = I.transition;
                    I.transition = {};
                    try {
                        e()
                    } finally {
                        I.transition = t
                    }
                }, t.unstable_act = j, t.useCallback = function(e, t) {
                    return O.current.useCallback(e, t)
                }, t.useContext = function(e) {
                    return O.current.useContext(e)
                }, t.useDebugValue = function() {}, t.useDeferredValue = function(e) {
                    return O.current.useDeferredValue(e)
                }, t.useEffect = function(e, t) {
                    return O.current.useEffect(e, t)
                }, t.useId = function() {
                    return O.current.useId()
                }, t.useImperativeHandle = function(e, t, n) {
                    return O.current.useImperativeHandle(e, t, n)
                }, t.useInsertionEffect = function(e, t) {
                    return O.current.useInsertionEffect(e, t)
                }, t.useLayoutEffect = function(e, t) {
                    return O.current.useLayoutEffect(e, t)
                }, t.useMemo = function(e, t) {
                    return O.current.useMemo(e, t)
                }, t.useReducer = function(e, t, n) {
                    return O.current.useReducer(e, t, n)
                }, t.useRef = function(e) {
                    return O.current.useRef(e)
                }, t.useState = function(e) {
                    return O.current.useState(e)
                }, t.useSyncExternalStore = function(e, t, n) {
                    return O.current.useSyncExternalStore(e, t, n)
                }, t.useTransition = function() {
                    return O.current.useTransition()
                }, t.version = "18.3.1"
            },
            540: (e, t, n) => {
                "use strict";
                e.exports = n(287)
            },
            848: (e, t, n) => {
                "use strict";
                e.exports = n(20)
            },
            463: (e, t) => {
                "use strict";

                function n(e, t) {
                    var n = e.length;
                    e.push(t);
                    e: for (; 0 < n;) {
                        var r = n - 1 >>> 1,
                            o = e[r];
                        if (!(0 < i(o, t))) break e;
                        e[r] = t, e[n] = o, n = r
                    }
                }

                function r(e) {
                    return 0 === e.length ? null : e[0]
                }

                function o(e) {
                    if (0 === e.length) return null;
                    var t = e[0],
                        n = e.pop();
                    if (n !== t) {
                        e[0] = n;
                        e: for (var r = 0, o = e.length, a = o >>> 1; r < a;) {
                            var l = 2 * (r + 1) - 1,
                                u = e[l],
                                s = l + 1,
                                c = e[s];
                            if (0 > i(u, n)) s < o && 0 > i(c, u) ? (e[r] = c, e[s] = n, r = s) : (e[r] = u, e[l] = n, r = l);
                            else {
                                if (!(s < o && 0 > i(c, n))) break e;
                                e[r] = c, e[s] = n, r = s
                            }
                        }
                    }
                    return t
                }

                function i(e, t) {
                    var n = e.sortIndex - t.sortIndex;
                    return 0 !== n ? n : e.id - t.id
                }
                if ("object" == typeof performance && "function" == typeof performance.now) {
                    var a = performance;
                    t.unstable_now = function() {
                        return a.now()
                    }
                } else {
                    var l = Date,
                        u = l.now();
                    t.unstable_now = function() {
                        return l.now() - u
                    }
                }
                var s = [],
                    c = [],
                    f = 1,
                    d = null,
                    p = 3,
                    h = !1,
                    g = !1,
                    m = !1,
                    v = "function" == typeof setTimeout ? setTimeout : null,
                    y = "function" == typeof clearTimeout ? clearTimeout : null,
                    b = "undefined" != typeof setImmediate ? setImmediate : null;

                function w(e) {
                    for (var t = r(c); null !== t;) {
                        if (null === t.callback) o(c);
                        else {
                            if (!(t.startTime <= e)) break;
                            o(c), t.sortIndex = t.expirationTime, n(s, t)
                        }
                        t = r(c)
                    }
                }

                function _(e) {
                    if (m = !1, w(e), !g)
                        if (null !== r(s)) g = !0, I(x);
                        else {
                            var t = r(c);
                            null !== t && D(_, t.startTime - e)
                        }
                }

                function x(e, n) {
                    g = !1, m && (m = !1, y(C), C = -1), h = !0;
                    var i = p;
                    try {
                        for (w(n), d = r(s); null !== d && (!(d.expirationTime > n) || e && !R());) {
                            var a = d.callback;
                            if ("function" == typeof a) {
                                d.callback = null, p = d.priorityLevel;
                                var l = a(d.expirationTime <= n);
                                n = t.unstable_now(), "function" == typeof l ? d.callback = l : d === r(s) && o(s), w(n)
                            } else o(s);
                            d = r(s)
                        }
                        if (null !== d) var u = !0;
                        else {
                            var f = r(c);
                            null !== f && D(_, f.startTime - n), u = !1
                        }
                        return u
                    } finally {
                        d = null, p = i, h = !1
                    }
                }
                "undefined" != typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
                var S, E = !1,
                    k = null,
                    C = -1,
                    T = 5,
                    N = -1;

                function R() {
                    return !(t.unstable_now() - N < T)
                }

                function A() {
                    if (null !== k) {
                        var e = t.unstable_now();
                        N = e;
                        var n = !0;
                        try {
                            n = k(!0, e)
                        } finally {
                            n ? S() : (E = !1, k = null)
                        }
                    } else E = !1
                }
                if ("function" == typeof b) S = function() {
                    b(A)
                };
                else if ("undefined" != typeof MessageChannel) {
                    var L = new MessageChannel,
                        O = L.port2;
                    L.port1.onmessage = A, S = function() {
                        O.postMessage(null)
                    }
                } else S = function() {
                    v(A, 0)
                };

                function I(e) {
                    k = e, E || (E = !0, S())
                }

                function D(e, n) {
                    C = v((function() {
                        e(t.unstable_now())
                    }), n)
                }
                t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(e) {
                    e.callback = null
                }, t.unstable_continueExecution = function() {
                    g || h || (g = !0, I(x))
                }, t.unstable_forceFrameRate = function(e) {
                    0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : T = 0 < e ? Math.floor(1e3 / e) : 5
                }, t.unstable_getCurrentPriorityLevel = function() {
                    return p
                }, t.unstable_getFirstCallbackNode = function() {
                    return r(s)
                }, t.unstable_next = function(e) {
                    switch (p) {
                        case 1:
                        case 2:
                        case 3:
                            var t = 3;
                            break;
                        default:
                            t = p
                    }
                    var n = p;
                    p = t;
                    try {
                        return e()
                    } finally {
                        p = n
                    }
                }, t.unstable_pauseExecution = function() {}, t.unstable_requestPaint = function() {}, t.unstable_runWithPriority = function(e, t) {
                    switch (e) {
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                            break;
                        default:
                            e = 3
                    }
                    var n = p;
                    p = e;
                    try {
                        return t()
                    } finally {
                        p = n
                    }
                }, t.unstable_scheduleCallback = function(e, o, i) {
                    var a = t.unstable_now();
                    switch ("object" == typeof i && null !== i ? i = "number" == typeof(i = i.delay) && 0 < i ? a + i : a : i = a, e) {
                        case 1:
                            var l = -1;
                            break;
                        case 2:
                            l = 250;
                            break;
                        case 5:
                            l = 1073741823;
                            break;
                        case 4:
                            l = 1e4;
                            break;
                        default:
                            l = 5e3
                    }
                    return e = {
                        id: f++,
                        callback: o,
                        priorityLevel: e,
                        startTime: i,
                        expirationTime: l = i + l,
                        sortIndex: -1
                    }, i > a ? (e.sortIndex = i, n(c, e), null === r(s) && e === r(c) && (m ? (y(C), C = -1) : m = !0, D(_, i - a))) : (e.sortIndex = l, n(s, e), g || h || (g = !0, I(x))), e
                }, t.unstable_shouldYield = R, t.unstable_wrapCallback = function(e) {
                    var t = p;
                    return function() {
                        var n = p;
                        p = t;
                        try {
                            return e.apply(this, arguments)
                        } finally {
                            p = n
                        }
                    }
                }
            },
            982: (e, t, n) => {
                "use strict";
                e.exports = n(463)
            },
            154: (e, t, n) => {
                "use strict";
                var r = n(540);
                var o = "function" == typeof Object.is ? Object.is : function(e, t) {
                        return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
                    },
                    i = r.useSyncExternalStore,
                    a = r.useRef,
                    l = r.useEffect,
                    u = r.useMemo,
                    s = r.useDebugValue;
                t.useSyncExternalStoreWithSelector = function(e, t, n, r, c) {
                    var f = a(null);
                    if (null === f.current) {
                        var d = {
                            hasValue: !1,
                            value: null
                        };
                        f.current = d
                    } else d = f.current;
                    f = u((function() {
                        function e(e) {
                            if (!l) {
                                if (l = !0, i = e, e = r(e), void 0 !== c && d.hasValue) {
                                    var t = d.value;
                                    if (c(t, e)) return a = t
                                }
                                return a = e
                            }
                            if (t = a, o(i, e)) return t;
                            var n = r(e);
                            return void 0 !== c && c(t, n) ? t : (i = e, a = n)
                        }
                        var i, a, l = !1,
                            u = void 0 === n ? null : n;
                        return [function() {
                            return e(t())
                        }, null === u ? void 0 : function() {
                            return e(u())
                        }]
                    }), [t, n, r, c]);
                    var p = i(e, f[0], f[1]);
                    return l((function() {
                        d.hasValue = !0, d.value = p
                    }), [p]), s(p), p
                }
            },
            418: (e, t, n) => {
                "use strict";
                e.exports = n(154)
            },
            942: (e, t) => {
                var n;
                ! function() {
                    "use strict";
                    var r = {}.hasOwnProperty;

                    function o() {
                        for (var e = "", t = 0; t < arguments.length; t++) {
                            var n = arguments[t];
                            n && (e = a(e, i(n)))
                        }
                        return e
                    }

                    function i(e) {
                        if ("string" == typeof e || "number" == typeof e) return e;
                        if ("object" != typeof e) return "";
                        if (Array.isArray(e)) return o.apply(null, e);
                        if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]")) return e.toString();
                        var t = "";
                        for (var n in e) r.call(e, n) && e[n] && (t = a(t, n));
                        return t
                    }

                    function a(e, t) {
                        return t ? e ? e + " " + t : e + t : e
                    }
                    e.exports ? (o.default = o, e.exports = o) : void 0 === (n = function() {
                        return o
                    }.apply(t, [])) || (e.exports = n)
                }()
            }
        },
        r = {};

    function o(e) {
        var t = r[e];
        if (void 0 !== t) return t.exports;
        var i = r[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return n[e].call(i.exports, i, i.exports, o), i.loaded = !0, i.exports
    }
    o.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return o.d(t, {
            a: t
        }), t
    }, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, o.t = function(n, r) {
        if (1 & r && (n = this(n)), 8 & r) return n;
        if ("object" == typeof n && n) {
            if (4 & r && n.__esModule) return n;
            if (16 & r && "function" == typeof n.then) return n
        }
        var i = Object.create(null);
        o.r(i);
        var a = {};
        e = e || [null, t({}), t([]), t(t)];
        for (var l = 2 & r && n;
            "object" == typeof l && !~e.indexOf(l); l = t(l)) Object.getOwnPropertyNames(l).forEach((e => a[e] = () => n[e]));
        return a.default = () => n, o.d(i, a), i
    }, o.d = (e, t) => {
        for (var n in t) o.o(t, n) && !o.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
        })
    }, o.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), o.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
        "use strict";
        var e = o(848),
            t = o(338),
            n = o(540),
            r = o.t(n, 2),
            i = o(418),
            a = n,
            l = Symbol.for("react-redux-context"),
            u = "undefined" != typeof globalThis ? globalThis : {};

        function s() {
            if (!a.createContext) return {};
            const e = u[l] ? ? (u[l] = new Map);
            let t = e.get(a.createContext);
            return t || (t = a.createContext(null), e.set(a.createContext, t)), t
        }
        var c = s(),
            f = () => {
                throw new Error("uSES not initialized!")
            };

        function d(e = c) {
            return function() {
                return a.useContext(e)
            }
        }
        var p = d(),
            h = f,
            g = (e, t) => e === t;

        function m(e = c) {
            const t = e === c ? p : d(e),
                n = (e, n = {}) => {
                    const {
                        equalityFn: r = g,
                        devModeChecks: o = {}
                    } = "function" == typeof n ? {
                        equalityFn: n
                    } : n;
                    const {
                        store: i,
                        subscription: l,
                        getServerState: u,
                        stabilityCheck: s,
                        identityFunctionCheck: c
                    } = t(), f = (a.useRef(!0), a.useCallback({
                        [e.name]: t => e(t)
                    }[e.name], [e, s, o.stabilityCheck])), d = h(l.addNestedSub, i.getState, u || i.getState, f, r);
                    return a.useDebugValue(d), d
                };
            return Object.assign(n, {
                withTypes: () => n
            }), n
        }
        var v = m();
        Symbol.for("react.element"), Symbol.for("react.portal"), Symbol.for("react.fragment"), Symbol.for("react.strict_mode"), Symbol.for("react.profiler"), Symbol.for("react.provider"), Symbol.for("react.context"), Symbol.for("react.server_context"), Symbol.for("react.forward_ref"), Symbol.for("react.suspense"), Symbol.for("react.suspense_list"), Symbol.for("react.memo"), Symbol.for("react.lazy"), Symbol.for("react.offscreen"), Symbol.for("react.client.reference");

        function y(e) {
            e()
        }
        var b = {
            notify() {},
            get: () => []
        };

        function w(e, t) {
            let n, r = b,
                o = 0,
                i = !1;

            function a() {
                s.onStateChange && s.onStateChange()
            }

            function l() {
                o++, n || (n = t ? t.addNestedSub(a) : e.subscribe(a), r = function() {
                    let e = null,
                        t = null;
                    return {
                        clear() {
                            e = null, t = null
                        },
                        notify() {
                            y((() => {
                                let t = e;
                                for (; t;) t.callback(), t = t.next
                            }))
                        },
                        get() {
                            const t = [];
                            let n = e;
                            for (; n;) t.push(n), n = n.next;
                            return t
                        },
                        subscribe(n) {
                            let r = !0;
                            const o = t = {
                                callback: n,
                                next: null,
                                prev: t
                            };
                            return o.prev ? o.prev.next = o : e = o,
                                function() {
                                    r && null !== e && (r = !1, o.next ? o.next.prev = o.prev : t = o.prev, o.prev ? o.prev.next = o.next : e = o.next)
                                }
                        }
                    }
                }())
            }

            function u() {
                o--, n && 0 === o && (n(), n = void 0, r.clear(), r = b)
            }
            const s = {
                addNestedSub: function(e) {
                    l();
                    const t = r.subscribe(e);
                    let n = !1;
                    return () => {
                        n || (n = !0, t(), u())
                    }
                },
                notifyNestedSubs: function() {
                    r.notify()
                },
                handleChangeWrapper: a,
                isSubscribed: function() {
                    return i
                },
                trySubscribe: function() {
                    i || (i = !0, l())
                },
                tryUnsubscribe: function() {
                    i && (i = !1, u())
                },
                getListeners: () => r
            };
            return s
        }
        var _ = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement),
            x = "undefined" != typeof navigator && "ReactNative" === navigator.product,
            S = _ || x ? a.useLayoutEffect : a.useEffect;
        Object.defineProperty, Object.getOwnPropertyNames, Object.getOwnPropertySymbols, Object.getOwnPropertyDescriptor, Object.getPrototypeOf, Object.prototype;
        var E = function({
            store: e,
            context: t,
            children: n,
            serverState: r,
            stabilityCheck: o = "once",
            identityFunctionCheck: i = "once"
        }) {
            const l = a.useMemo((() => {
                    const t = w(e);
                    return {
                        store: e,
                        subscription: t,
                        getServerState: r ? () => r : void 0,
                        stabilityCheck: o,
                        identityFunctionCheck: i
                    }
                }), [e, r, o, i]),
                u = a.useMemo((() => e.getState()), [e]);
            S((() => {
                const {
                    subscription: t
                } = l;
                return t.onStateChange = t.notifyNestedSubs, t.trySubscribe(), u !== e.getState() && t.notifyNestedSubs(), () => {
                    t.tryUnsubscribe(), t.onStateChange = void 0
                }
            }), [l, u]);
            const s = t || c;
            return a.createElement(s.Provider, {
                value: l
            }, n)
        };

        function k(e = c) {
            const t = e === c ? p : d(e),
                n = () => {
                    const {
                        store: e
                    } = t();
                    return e
                };
            return Object.assign(n, {
                withTypes: () => n
            }), n
        }
        var C = k();

        function T(e = c) {
            const t = e === c ? C : k(e),
                n = () => t().dispatch;
            return Object.assign(n, {
                withTypes: () => n
            }), n
        }
        var N, R = T();
        N = i.useSyncExternalStoreWithSelector, h = N, (e => {
            e
        })(n.useSyncExternalStore);
        var A = o(961);
        const L = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement;

        function O(e) {
            const t = Object.prototype.toString.call(e);
            return "[object Window]" === t || "[object global]" === t
        }

        function I(e) {
            return "nodeType" in e
        }

        function D(e) {
            var t, n;
            return e ? O(e) ? e : I(e) && null != (t = null == (n = e.ownerDocument) ? void 0 : n.defaultView) ? t : window : window
        }

        function j(e) {
            const {
                Document: t
            } = D(e);
            return e instanceof t
        }

        function M(e) {
            return !O(e) && e instanceof D(e).HTMLElement
        }

        function P(e) {
            return e instanceof D(e).SVGElement
        }

        function z(e) {
            return e ? O(e) ? e.document : I(e) ? j(e) ? e : M(e) || P(e) ? e.ownerDocument : document : document : document
        }
        const B = L ? n.useLayoutEffect : n.useEffect;

        function F(e) {
            const t = (0, n.useRef)(e);
            return B((() => {
                t.current = e
            })), (0, n.useCallback)((function() {
                for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                return null == t.current ? void 0 : t.current(...n)
            }), [])
        }

        function U(e, t) {
            void 0 === t && (t = [e]);
            const r = (0, n.useRef)(e);
            return B((() => {
                r.current !== e && (r.current = e)
            }), t), r
        }

        function W(e, t) {
            const r = (0, n.useRef)();
            return (0, n.useMemo)((() => {
                const t = e(r.current);
                return r.current = t, t
            }), [...t])
        }

        function H(e) {
            const t = F(e),
                r = (0, n.useRef)(null),
                o = (0, n.useCallback)((e => {
                    e !== r.current && (null == t || t(e, r.current)), r.current = e
                }), []);
            return [r, o]
        }

        function $(e) {
            const t = (0, n.useRef)();
            return (0, n.useEffect)((() => {
                t.current = e
            }), [e]), t.current
        }
        let V = {};

        function Y(e, t) {
            return (0, n.useMemo)((() => {
                if (t) return t;
                const n = null == V[e] ? 0 : V[e] + 1;
                return V[e] = n, e + "-" + n
            }), [e, t])
        }

        function Q(e) {
            return function(t) {
                for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                return r.reduce(((t, n) => {
                    const r = Object.entries(n);
                    for (const [n, o] of r) {
                        const r = t[n];
                        null != r && (t[n] = r + e * o)
                    }
                    return t
                }), { ...t
                })
            }
        }
        const q = Q(1),
            K = Q(-1);

        function X(e) {
            if (!e) return !1;
            const {
                KeyboardEvent: t
            } = D(e.target);
            return t && e instanceof t
        }

        function G(e) {
            if (function(e) {
                    if (!e) return !1;
                    const {
                        TouchEvent: t
                    } = D(e.target);
                    return t && e instanceof t
                }(e)) {
                if (e.touches && e.touches.length) {
                    const {
                        clientX: t,
                        clientY: n
                    } = e.touches[0];
                    return {
                        x: t,
                        y: n
                    }
                }
                if (e.changedTouches && e.changedTouches.length) {
                    const {
                        clientX: t,
                        clientY: n
                    } = e.changedTouches[0];
                    return {
                        x: t,
                        y: n
                    }
                }
            }
            return function(e) {
                return "clientX" in e && "clientY" in e
            }(e) ? {
                x: e.clientX,
                y: e.clientY
            } : null
        }
        const J = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";

        function Z(e) {
            return e.matches(J) ? e : e.querySelector(J)
        }
        const ee = {
            display: "none"
        };

        function te(e) {
            let {
                id: t,
                value: r
            } = e;
            return n.createElement("div", {
                id: t,
                style: ee
            }, r)
        }

        function ne(e) {
            let {
                id: t,
                announcement: r,
                ariaLiveType: o = "assertive"
            } = e;
            return n.createElement("div", {
                id: t,
                style: {
                    position: "fixed",
                    width: 1,
                    height: 1,
                    margin: -1,
                    border: 0,
                    padding: 0,
                    overflow: "hidden",
                    clip: "rect(0 0 0 0)",
                    clipPath: "inset(100%)",
                    whiteSpace: "nowrap"
                },
                role: "status",
                "aria-live": o,
                "aria-atomic": !0
            }, r)
        }
        const re = (0, n.createContext)(null);
        const oe = {
                draggable: "\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  "
            },
            ie = {
                onDragStart(e) {
                    let {
                        active: t
                    } = e;
                    return "Picked up draggable item " + t.id + "."
                },
                onDragOver(e) {
                    let {
                        active: t,
                        over: n
                    } = e;
                    return n ? "Draggable item " + t.id + " was moved over droppable area " + n.id + "." : "Draggable item " + t.id + " is no longer over a droppable area."
                },
                onDragEnd(e) {
                    let {
                        active: t,
                        over: n
                    } = e;
                    return n ? "Draggable item " + t.id + " was dropped over droppable area " + n.id : "Draggable item " + t.id + " was dropped."
                },
                onDragCancel(e) {
                    let {
                        active: t
                    } = e;
                    return "Dragging was cancelled. Draggable item " + t.id + " was dropped."
                }
            };

        function ae(e) {
            let {
                announcements: t = ie,
                container: r,
                hiddenTextDescribedById: o,
                screenReaderInstructions: i = oe
            } = e;
            const {
                announce: a,
                announcement: l
            } = function() {
                const [e, t] = (0, n.useState)("");
                return {
                    announce: (0, n.useCallback)((e => {
                        null != e && t(e)
                    }), []),
                    announcement: e
                }
            }(), u = Y("DndLiveRegion"), [s, c] = (0, n.useState)(!1);
            if ((0, n.useEffect)((() => {
                    c(!0)
                }), []), function(e) {
                    const t = (0, n.useContext)(re);
                    (0, n.useEffect)((() => {
                        if (!t) throw new Error("useDndMonitor must be used within a children of <DndContext>");
                        return t(e)
                    }), [e, t])
                }((0, n.useMemo)((() => ({
                    onDragStart(e) {
                        let {
                            active: n
                        } = e;
                        a(t.onDragStart({
                            active: n
                        }))
                    },
                    onDragMove(e) {
                        let {
                            active: n,
                            over: r
                        } = e;
                        t.onDragMove && a(t.onDragMove({
                            active: n,
                            over: r
                        }))
                    },
                    onDragOver(e) {
                        let {
                            active: n,
                            over: r
                        } = e;
                        a(t.onDragOver({
                            active: n,
                            over: r
                        }))
                    },
                    onDragEnd(e) {
                        let {
                            active: n,
                            over: r
                        } = e;
                        a(t.onDragEnd({
                            active: n,
                            over: r
                        }))
                    },
                    onDragCancel(e) {
                        let {
                            active: n,
                            over: r
                        } = e;
                        a(t.onDragCancel({
                            active: n,
                            over: r
                        }))
                    }
                })), [a, t])), !s) return null;
            const f = n.createElement(n.Fragment, null, n.createElement(te, {
                id: o,
                value: i.draggable
            }), n.createElement(ne, {
                id: u,
                announcement: l
            }));
            return r ? (0, A.createPortal)(f, r) : f
        }
        var le;

        function ue() {}! function(e) {
            e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable"
        }(le || (le = {}));
        const se = Object.freeze({
            x: 0,
            y: 0
        });

        function ce(e, t) {
            let {
                data: {
                    value: n
                }
            } = e, {
                data: {
                    value: r
                }
            } = t;
            return r - n
        }

        function fe(e, t) {
            const n = Math.max(t.top, e.top),
                r = Math.max(t.left, e.left),
                o = Math.min(t.left + t.width, e.left + e.width),
                i = Math.min(t.top + t.height, e.top + e.height),
                a = o - r,
                l = i - n;
            if (r < o && n < i) {
                const n = t.width * t.height,
                    r = e.width * e.height,
                    o = a * l;
                return Number((o / (n + r - o)).toFixed(4))
            }
            return 0
        }
        const de = e => {
            let {
                collisionRect: t,
                droppableRects: n,
                droppableContainers: r
            } = e;
            const o = [];
            for (const e of r) {
                const {
                    id: r
                } = e, i = n.get(r);
                if (i) {
                    const n = fe(i, t);
                    n > 0 && o.push({
                        id: r,
                        data: {
                            droppableContainer: e,
                            value: n
                        }
                    })
                }
            }
            return o.sort(ce)
        };

        function pe(e, t) {
            return e && t ? {
                x: e.left - t.left,
                y: e.top - t.top
            } : se
        }

        function he(e) {
            return function(t) {
                for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                return r.reduce(((t, n) => ({ ...t,
                    top: t.top + e * n.y,
                    bottom: t.bottom + e * n.y,
                    left: t.left + e * n.x,
                    right: t.right + e * n.x
                })), { ...t
                })
            }
        }
        const ge = he(1);

        function me(e) {
            if (e.startsWith("matrix3d(")) {
                const t = e.slice(9, -1).split(/, /);
                return {
                    x: +t[12],
                    y: +t[13],
                    scaleX: +t[0],
                    scaleY: +t[5]
                }
            }
            if (e.startsWith("matrix(")) {
                const t = e.slice(7, -1).split(/, /);
                return {
                    x: +t[4],
                    y: +t[5],
                    scaleX: +t[0],
                    scaleY: +t[3]
                }
            }
            return null
        }
        const ve = {
            ignoreTransform: !1
        };

        function ye(e, t) {
            void 0 === t && (t = ve);
            let n = e.getBoundingClientRect();
            if (t.ignoreTransform) {
                const {
                    transform: t,
                    transformOrigin: r
                } = D(e).getComputedStyle(e);
                t && (n = function(e, t, n) {
                    const r = me(t);
                    if (!r) return e;
                    const {
                        scaleX: o,
                        scaleY: i,
                        x: a,
                        y: l
                    } = r, u = e.left - a - (1 - o) * parseFloat(n), s = e.top - l - (1 - i) * parseFloat(n.slice(n.indexOf(" ") + 1)), c = o ? e.width / o : e.width, f = i ? e.height / i : e.height;
                    return {
                        width: c,
                        height: f,
                        top: s,
                        right: u + c,
                        bottom: s + f,
                        left: u
                    }
                }(n, t, r))
            }
            const {
                top: r,
                left: o,
                width: i,
                height: a,
                bottom: l,
                right: u
            } = n;
            return {
                top: r,
                left: o,
                width: i,
                height: a,
                bottom: l,
                right: u
            }
        }

        function be(e) {
            return ye(e, {
                ignoreTransform: !0
            })
        }

        function we(e, t) {
            const n = [];
            return e ? function r(o) {
                if (null != t && n.length >= t) return n;
                if (!o) return n;
                if (j(o) && null != o.scrollingElement && !n.includes(o.scrollingElement)) return n.push(o.scrollingElement), n;
                if (!M(o) || P(o)) return n;
                if (n.includes(o)) return n;
                const i = D(e).getComputedStyle(o);
                return o !== e && function(e, t) {
                        void 0 === t && (t = D(e).getComputedStyle(e));
                        const n = /(auto|scroll|overlay)/;
                        return ["overflow", "overflowX", "overflowY"].some((e => {
                            const r = t[e];
                            return "string" == typeof r && n.test(r)
                        }))
                    }(o, i) && n.push(o),
                    function(e, t) {
                        return void 0 === t && (t = D(e).getComputedStyle(e)), "fixed" === t.position
                    }(o, i) ? n : r(o.parentNode)
            }(e) : n
        }

        function _e(e) {
            const [t] = we(e, 1);
            return null != t ? t : null
        }

        function xe(e) {
            return L && e ? O(e) ? e : I(e) ? j(e) || e === z(e).scrollingElement ? window : M(e) ? e : null : null : null
        }

        function Se(e) {
            return O(e) ? e.scrollX : e.scrollLeft
        }

        function Ee(e) {
            return O(e) ? e.scrollY : e.scrollTop
        }

        function ke(e) {
            return {
                x: Se(e),
                y: Ee(e)
            }
        }
        var Ce;

        function Te(e) {
            return !(!L || !e) && e === document.scrollingElement
        }

        function Ne(e) {
            const t = {
                    x: 0,
                    y: 0
                },
                n = Te(e) ? {
                    height: window.innerHeight,
                    width: window.innerWidth
                } : {
                    height: e.clientHeight,
                    width: e.clientWidth
                },
                r = {
                    x: e.scrollWidth - n.width,
                    y: e.scrollHeight - n.height
                };
            return {
                isTop: e.scrollTop <= t.y,
                isLeft: e.scrollLeft <= t.x,
                isBottom: e.scrollTop >= r.y,
                isRight: e.scrollLeft >= r.x,
                maxScroll: r,
                minScroll: t
            }
        }! function(e) {
            e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward"
        }(Ce || (Ce = {}));
        const Re = {
            x: .2,
            y: .2
        };

        function Ae(e, t, n, r, o) {
            let {
                top: i,
                left: a,
                right: l,
                bottom: u
            } = n;
            void 0 === r && (r = 10), void 0 === o && (o = Re);
            const {
                isTop: s,
                isBottom: c,
                isLeft: f,
                isRight: d
            } = Ne(e), p = {
                x: 0,
                y: 0
            }, h = {
                x: 0,
                y: 0
            }, g = t.height * o.y, m = t.width * o.x;
            return !s && i <= t.top + g ? (p.y = Ce.Backward, h.y = r * Math.abs((t.top + g - i) / g)) : !c && u >= t.bottom - g && (p.y = Ce.Forward, h.y = r * Math.abs((t.bottom - g - u) / g)), !d && l >= t.right - m ? (p.x = Ce.Forward, h.x = r * Math.abs((t.right - m - l) / m)) : !f && a <= t.left + m && (p.x = Ce.Backward, h.x = r * Math.abs((t.left + m - a) / m)), {
                direction: p,
                speed: h
            }
        }

        function Le(e) {
            if (e === document.scrollingElement) {
                const {
                    innerWidth: e,
                    innerHeight: t
                } = window;
                return {
                    top: 0,
                    left: 0,
                    right: e,
                    bottom: t,
                    width: e,
                    height: t
                }
            }
            const {
                top: t,
                left: n,
                right: r,
                bottom: o
            } = e.getBoundingClientRect();
            return {
                top: t,
                left: n,
                right: r,
                bottom: o,
                width: e.clientWidth,
                height: e.clientHeight
            }
        }

        function Oe(e) {
            return e.reduce(((e, t) => q(e, ke(t))), se)
        }

        function Ie(e, t) {
            if (void 0 === t && (t = ye), !e) return;
            const {
                top: n,
                left: r,
                bottom: o,
                right: i
            } = t(e);
            _e(e) && (o <= 0 || i <= 0 || n >= window.innerHeight || r >= window.innerWidth) && e.scrollIntoView({
                block: "center",
                inline: "center"
            })
        }
        const De = [
            ["x", ["left", "right"], function(e) {
                return e.reduce(((e, t) => e + Se(t)), 0)
            }],
            ["y", ["top", "bottom"], function(e) {
                return e.reduce(((e, t) => e + Ee(t)), 0)
            }]
        ];
        class je {
            constructor(e, t) {
                this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
                const n = we(t),
                    r = Oe(n);
                this.rect = { ...e
                }, this.width = e.width, this.height = e.height;
                for (const [e, t, o] of De)
                    for (const i of t) Object.defineProperty(this, i, {
                        get: () => {
                            const t = o(n),
                                a = r[e] - t;
                            return this.rect[i] + a
                        },
                        enumerable: !0
                    });
                Object.defineProperty(this, "rect", {
                    enumerable: !1
                })
            }
        }
        class Me {
            constructor(e) {
                this.target = void 0, this.listeners = [], this.removeAll = () => {
                    this.listeners.forEach((e => {
                        var t;
                        return null == (t = this.target) ? void 0 : t.removeEventListener(...e)
                    }))
                }, this.target = e
            }
            add(e, t, n) {
                var r;
                null == (r = this.target) || r.addEventListener(e, t, n), this.listeners.push([e, t, n])
            }
        }

        function Pe(e, t) {
            const n = Math.abs(e.x),
                r = Math.abs(e.y);
            return "number" == typeof t ? Math.sqrt(n ** 2 + r ** 2) > t : "x" in t && "y" in t ? n > t.x && r > t.y : "x" in t ? n > t.x : "y" in t && r > t.y
        }
        var ze, Be;

        function Fe(e) {
            e.preventDefault()
        }

        function Ue(e) {
            e.stopPropagation()
        }! function(e) {
            e.Click = "click", e.DragStart = "dragstart", e.Keydown = "keydown", e.ContextMenu = "contextmenu", e.Resize = "resize", e.SelectionChange = "selectionchange", e.VisibilityChange = "visibilitychange"
        }(ze || (ze = {})),
        function(e) {
            e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter"
        }(Be || (Be = {}));
        const We = {
                start: [Be.Space, Be.Enter],
                cancel: [Be.Esc],
                end: [Be.Space, Be.Enter]
            },
            He = (e, t) => {
                let {
                    currentCoordinates: n
                } = t;
                switch (e.code) {
                    case Be.Right:
                        return { ...n,
                            x: n.x + 25
                        };
                    case Be.Left:
                        return { ...n,
                            x: n.x - 25
                        };
                    case Be.Down:
                        return { ...n,
                            y: n.y + 25
                        };
                    case Be.Up:
                        return { ...n,
                            y: n.y - 25
                        }
                }
            };
        class $e {
            constructor(e) {
                this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = e;
                const {
                    event: {
                        target: t
                    }
                } = e;
                this.props = e, this.listeners = new Me(z(t)), this.windowListeners = new Me(D(t)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach()
            }
            attach() {
                this.handleStart(), this.windowListeners.add(ze.Resize, this.handleCancel), this.windowListeners.add(ze.VisibilityChange, this.handleCancel), setTimeout((() => this.listeners.add(ze.Keydown, this.handleKeyDown)))
            }
            handleStart() {
                const {
                    activeNode: e,
                    onStart: t
                } = this.props, n = e.node.current;
                n && Ie(n), t(se)
            }
            handleKeyDown(e) {
                if (X(e)) {
                    const {
                        active: t,
                        context: n,
                        options: r
                    } = this.props, {
                        keyboardCodes: o = We,
                        coordinateGetter: i = He,
                        scrollBehavior: a = "smooth"
                    } = r, {
                        code: l
                    } = e;
                    if (o.end.includes(l)) return void this.handleEnd(e);
                    if (o.cancel.includes(l)) return void this.handleCancel(e);
                    const {
                        collisionRect: u
                    } = n.current, s = u ? {
                        x: u.left,
                        y: u.top
                    } : se;
                    this.referenceCoordinates || (this.referenceCoordinates = s);
                    const c = i(e, {
                        active: t,
                        context: n.current,
                        currentCoordinates: s
                    });
                    if (c) {
                        const t = K(c, s),
                            r = {
                                x: 0,
                                y: 0
                            },
                            {
                                scrollableAncestors: o
                            } = n.current;
                        for (const n of o) {
                            const o = e.code,
                                {
                                    isTop: i,
                                    isRight: l,
                                    isLeft: u,
                                    isBottom: s,
                                    maxScroll: f,
                                    minScroll: d
                                } = Ne(n),
                                p = Le(n),
                                h = {
                                    x: Math.min(o === Be.Right ? p.right - p.width / 2 : p.right, Math.max(o === Be.Right ? p.left : p.left + p.width / 2, c.x)),
                                    y: Math.min(o === Be.Down ? p.bottom - p.height / 2 : p.bottom, Math.max(o === Be.Down ? p.top : p.top + p.height / 2, c.y))
                                },
                                g = o === Be.Right && !l || o === Be.Left && !u,
                                m = o === Be.Down && !s || o === Be.Up && !i;
                            if (g && h.x !== c.x) {
                                const e = n.scrollLeft + t.x,
                                    i = o === Be.Right && e <= f.x || o === Be.Left && e >= d.x;
                                if (i && !t.y) return void n.scrollTo({
                                    left: e,
                                    behavior: a
                                });
                                r.x = i ? n.scrollLeft - e : o === Be.Right ? n.scrollLeft - f.x : n.scrollLeft - d.x, r.x && n.scrollBy({
                                    left: -r.x,
                                    behavior: a
                                });
                                break
                            }
                            if (m && h.y !== c.y) {
                                const e = n.scrollTop + t.y,
                                    i = o === Be.Down && e <= f.y || o === Be.Up && e >= d.y;
                                if (i && !t.x) return void n.scrollTo({
                                    top: e,
                                    behavior: a
                                });
                                r.y = i ? n.scrollTop - e : o === Be.Down ? n.scrollTop - f.y : n.scrollTop - d.y, r.y && n.scrollBy({
                                    top: -r.y,
                                    behavior: a
                                });
                                break
                            }
                        }
                        this.handleMove(e, q(K(c, this.referenceCoordinates), r))
                    }
                }
            }
            handleMove(e, t) {
                const {
                    onMove: n
                } = this.props;
                e.preventDefault(), n(t)
            }
            handleEnd(e) {
                const {
                    onEnd: t
                } = this.props;
                e.preventDefault(), this.detach(), t()
            }
            handleCancel(e) {
                const {
                    onCancel: t
                } = this.props;
                e.preventDefault(), this.detach(), t()
            }
            detach() {
                this.listeners.removeAll(), this.windowListeners.removeAll()
            }
        }

        function Ve(e) {
            return Boolean(e && "distance" in e)
        }

        function Ye(e) {
            return Boolean(e && "delay" in e)
        }
        $e.activators = [{
            eventName: "onKeyDown",
            handler: (e, t, n) => {
                let {
                    keyboardCodes: r = We,
                    onActivation: o
                } = t, {
                    active: i
                } = n;
                const {
                    code: a
                } = e.nativeEvent;
                if (r.start.includes(a)) {
                    const t = i.activatorNode.current;
                    return (!t || e.target === t) && (e.preventDefault(), null == o || o({
                        event: e.nativeEvent
                    }), !0)
                }
                return !1
            }
        }];
        class Qe {
            constructor(e, t, n) {
                var r;
                void 0 === n && (n = function(e) {
                    const {
                        EventTarget: t
                    } = D(e);
                    return e instanceof t ? e : z(e)
                }(e.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = e, this.events = t;
                const {
                    event: o
                } = e, {
                    target: i
                } = o;
                this.props = e, this.events = t, this.document = z(i), this.documentListeners = new Me(this.document), this.listeners = new Me(n), this.windowListeners = new Me(D(i)), this.initialCoordinates = null != (r = G(o)) ? r : se, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach()
            }
            attach() {
                const {
                    events: e,
                    props: {
                        options: {
                            activationConstraint: t,
                            bypassActivationConstraint: n
                        }
                    }
                } = this;
                if (this.listeners.add(e.move.name, this.handleMove, {
                        passive: !1
                    }), this.listeners.add(e.end.name, this.handleEnd), this.windowListeners.add(ze.Resize, this.handleCancel), this.windowListeners.add(ze.DragStart, Fe), this.windowListeners.add(ze.VisibilityChange, this.handleCancel), this.windowListeners.add(ze.ContextMenu, Fe), this.documentListeners.add(ze.Keydown, this.handleKeydown), t) {
                    if (null != n && n({
                            event: this.props.event,
                            activeNode: this.props.activeNode,
                            options: this.props.options
                        })) return this.handleStart();
                    if (Ye(t)) return void(this.timeoutId = setTimeout(this.handleStart, t.delay));
                    if (Ve(t)) return
                }
                this.handleStart()
            }
            detach() {
                this.listeners.removeAll(), this.windowListeners.removeAll(), setTimeout(this.documentListeners.removeAll, 50), null !== this.timeoutId && (clearTimeout(this.timeoutId), this.timeoutId = null)
            }
            handleStart() {
                const {
                    initialCoordinates: e
                } = this, {
                    onStart: t
                } = this.props;
                e && (this.activated = !0, this.documentListeners.add(ze.Click, Ue, {
                    capture: !0
                }), this.removeTextSelection(), this.documentListeners.add(ze.SelectionChange, this.removeTextSelection), t(e))
            }
            handleMove(e) {
                var t;
                const {
                    activated: n,
                    initialCoordinates: r,
                    props: o
                } = this, {
                    onMove: i,
                    options: {
                        activationConstraint: a
                    }
                } = o;
                if (!r) return;
                const l = null != (t = G(e)) ? t : se,
                    u = K(r, l);
                if (!n && a) {
                    if (Ve(a)) {
                        if (null != a.tolerance && Pe(u, a.tolerance)) return this.handleCancel();
                        if (Pe(u, a.distance)) return this.handleStart()
                    }
                    return Ye(a) && Pe(u, a.tolerance) ? this.handleCancel() : void 0
                }
                e.cancelable && e.preventDefault(), i(l)
            }
            handleEnd() {
                const {
                    onEnd: e
                } = this.props;
                this.detach(), e()
            }
            handleCancel() {
                const {
                    onCancel: e
                } = this.props;
                this.detach(), e()
            }
            handleKeydown(e) {
                e.code === Be.Esc && this.handleCancel()
            }
            removeTextSelection() {
                var e;
                null == (e = this.document.getSelection()) || e.removeAllRanges()
            }
        }
        const qe = {
            move: {
                name: "pointermove"
            },
            end: {
                name: "pointerup"
            }
        };
        class Ke extends Qe {
            constructor(e) {
                const {
                    event: t
                } = e, n = z(t.target);
                super(e, qe, n)
            }
        }
        Ke.activators = [{
            eventName: "onPointerDown",
            handler: (e, t) => {
                let {
                    nativeEvent: n
                } = e, {
                    onActivation: r
                } = t;
                return !(!n.isPrimary || 0 !== n.button) && (null == r || r({
                    event: n
                }), !0)
            }
        }];
        const Xe = {
            move: {
                name: "mousemove"
            },
            end: {
                name: "mouseup"
            }
        };
        var Ge;
        ! function(e) {
            e[e.RightClick = 2] = "RightClick"
        }(Ge || (Ge = {}));
        (class extends Qe {
            constructor(e) {
                super(e, Xe, z(e.event.target))
            }
        }).activators = [{
            eventName: "onMouseDown",
            handler: (e, t) => {
                let {
                    nativeEvent: n
                } = e, {
                    onActivation: r
                } = t;
                return n.button !== Ge.RightClick && (null == r || r({
                    event: n
                }), !0)
            }
        }];
        const Je = {
            move: {
                name: "touchmove"
            },
            end: {
                name: "touchend"
            }
        };
        var Ze, et;

        function tt(e) {
            let {
                acceleration: t,
                activator: r = Ze.Pointer,
                canScroll: o,
                draggingRect: i,
                enabled: a,
                interval: l = 5,
                order: u = et.TreeOrder,
                pointerCoordinates: s,
                scrollableAncestors: c,
                scrollableAncestorRects: f,
                delta: d,
                threshold: p
            } = e;
            const h = function(e) {
                    let {
                        delta: t,
                        disabled: n
                    } = e;
                    const r = $(t);
                    return W((e => {
                        if (n || !r || !e) return nt;
                        const o = {
                            x: Math.sign(t.x - r.x),
                            y: Math.sign(t.y - r.y)
                        };
                        return {
                            x: {
                                [Ce.Backward]: e.x[Ce.Backward] || -1 === o.x,
                                [Ce.Forward]: e.x[Ce.Forward] || 1 === o.x
                            },
                            y: {
                                [Ce.Backward]: e.y[Ce.Backward] || -1 === o.y,
                                [Ce.Forward]: e.y[Ce.Forward] || 1 === o.y
                            }
                        }
                    }), [n, t, r])
                }({
                    delta: d,
                    disabled: !a
                }),
                [g, m] = function() {
                    const e = (0, n.useRef)(null),
                        t = (0, n.useCallback)(((t, n) => {
                            e.current = setInterval(t, n)
                        }), []);
                    return [t, (0, n.useCallback)((() => {
                        null !== e.current && (clearInterval(e.current), e.current = null)
                    }), [])]
                }(),
                v = (0, n.useRef)({
                    x: 0,
                    y: 0
                }),
                y = (0, n.useRef)({
                    x: 0,
                    y: 0
                }),
                b = (0, n.useMemo)((() => {
                    switch (r) {
                        case Ze.Pointer:
                            return s ? {
                                top: s.y,
                                bottom: s.y,
                                left: s.x,
                                right: s.x
                            } : null;
                        case Ze.DraggableRect:
                            return i
                    }
                }), [r, i, s]),
                w = (0, n.useRef)(null),
                _ = (0, n.useCallback)((() => {
                    const e = w.current;
                    if (!e) return;
                    const t = v.current.x * y.current.x,
                        n = v.current.y * y.current.y;
                    e.scrollBy(t, n)
                }), []),
                x = (0, n.useMemo)((() => u === et.TreeOrder ? [...c].reverse() : c), [u, c]);
            (0, n.useEffect)((() => {
                if (a && c.length && b) {
                    for (const e of x) {
                        if (!1 === (null == o ? void 0 : o(e))) continue;
                        const n = c.indexOf(e),
                            r = f[n];
                        if (!r) continue;
                        const {
                            direction: i,
                            speed: a
                        } = Ae(e, r, b, t, p);
                        for (const e of ["x", "y"]) h[e][i[e]] || (a[e] = 0, i[e] = 0);
                        if (a.x > 0 || a.y > 0) return m(), w.current = e, g(_, l), v.current = a, void(y.current = i)
                    }
                    v.current = {
                        x: 0,
                        y: 0
                    }, y.current = {
                        x: 0,
                        y: 0
                    }, m()
                } else m()
            }), [t, _, o, m, a, l, JSON.stringify(b), JSON.stringify(h), g, c, x, f, JSON.stringify(p)])
        }(class extends Qe {
            constructor(e) {
                super(e, Je)
            }
            static setup() {
                return window.addEventListener(Je.move.name, e, {
                        capture: !1,
                        passive: !1
                    }),
                    function() {
                        window.removeEventListener(Je.move.name, e)
                    };

                function e() {}
            }
        }).activators = [{
                eventName: "onTouchStart",
                handler: (e, t) => {
                    let {
                        nativeEvent: n
                    } = e, {
                        onActivation: r
                    } = t;
                    const {
                        touches: o
                    } = n;
                    return !(o.length > 1) && (null == r || r({
                        event: n
                    }), !0)
                }
            }],
            function(e) {
                e[e.Pointer = 0] = "Pointer", e[e.DraggableRect = 1] = "DraggableRect"
            }(Ze || (Ze = {})),
            function(e) {
                e[e.TreeOrder = 0] = "TreeOrder", e[e.ReversedTreeOrder = 1] = "ReversedTreeOrder"
            }(et || (et = {}));
        const nt = {
            x: {
                [Ce.Backward]: !1,
                [Ce.Forward]: !1
            },
            y: {
                [Ce.Backward]: !1,
                [Ce.Forward]: !1
            }
        };
        var rt, ot;
        ! function(e) {
            e[e.Always = 0] = "Always", e[e.BeforeDragging = 1] = "BeforeDragging", e[e.WhileDragging = 2] = "WhileDragging"
        }(rt || (rt = {})),
        function(e) {
            e.Optimized = "optimized"
        }(ot || (ot = {}));
        const it = new Map;

        function at(e, t) {
            return W((n => e ? n || ("function" == typeof t ? t(e) : e) : null), [t, e])
        }

        function lt(e) {
            let {
                callback: t,
                disabled: r
            } = e;
            const o = F(t),
                i = (0, n.useMemo)((() => {
                    if (r || "undefined" == typeof window || void 0 === window.ResizeObserver) return;
                    const {
                        ResizeObserver: e
                    } = window;
                    return new e(o)
                }), [r]);
            return (0, n.useEffect)((() => () => null == i ? void 0 : i.disconnect()), [i]), i
        }

        function ut(e) {
            return new je(ye(e), e)
        }

        function st(e, t, r) {
            void 0 === t && (t = ut);
            const [o, i] = (0, n.useReducer)((function(n) {
                if (!e) return null;
                var o;
                if (!1 === e.isConnected) return null != (o = null != n ? n : r) ? o : null;
                const i = t(e);
                if (JSON.stringify(n) === JSON.stringify(i)) return n;
                return i
            }), null), a = function(e) {
                let {
                    callback: t,
                    disabled: r
                } = e;
                const o = F(t),
                    i = (0, n.useMemo)((() => {
                        if (r || "undefined" == typeof window || void 0 === window.MutationObserver) return;
                        const {
                            MutationObserver: e
                        } = window;
                        return new e(o)
                    }), [o, r]);
                return (0, n.useEffect)((() => () => null == i ? void 0 : i.disconnect()), [i]), i
            }({
                callback(t) {
                    if (e)
                        for (const n of t) {
                            const {
                                type: t,
                                target: r
                            } = n;
                            if ("childList" === t && r instanceof HTMLElement && r.contains(e)) {
                                i();
                                break
                            }
                        }
                }
            }), l = lt({
                callback: i
            });
            return B((() => {
                i(), e ? (null == l || l.observe(e), null == a || a.observe(document.body, {
                    childList: !0,
                    subtree: !0
                })) : (null == l || l.disconnect(), null == a || a.disconnect())
            }), [e]), o
        }
        const ct = [];

        function ft(e, t) {
            void 0 === t && (t = []);
            const r = (0, n.useRef)(null);
            return (0, n.useEffect)((() => {
                r.current = null
            }), t), (0, n.useEffect)((() => {
                const t = e !== se;
                t && !r.current && (r.current = e), !t && r.current && (r.current = null)
            }), [e]), r.current ? K(e, r.current) : se
        }

        function dt(e) {
            return (0, n.useMemo)((() => e ? function(e) {
                const t = e.innerWidth,
                    n = e.innerHeight;
                return {
                    top: 0,
                    left: 0,
                    right: t,
                    bottom: n,
                    width: t,
                    height: n
                }
            }(e) : null), [e])
        }
        const pt = [];

        function ht(e) {
            if (!e) return null;
            if (e.children.length > 1) return e;
            const t = e.children[0];
            return M(t) ? t : e
        }
        const gt = [{
                sensor: Ke,
                options: {}
            }, {
                sensor: $e,
                options: {}
            }],
            mt = {
                current: {}
            },
            vt = {
                draggable: {
                    measure: be
                },
                droppable: {
                    measure: be,
                    strategy: rt.WhileDragging,
                    frequency: ot.Optimized
                },
                dragOverlay: {
                    measure: ye
                }
            };
        class yt extends Map {
            get(e) {
                var t;
                return null != e && null != (t = super.get(e)) ? t : void 0
            }
            toArray() {
                return Array.from(this.values())
            }
            getEnabled() {
                return this.toArray().filter((e => {
                    let {
                        disabled: t
                    } = e;
                    return !t
                }))
            }
            getNodeFor(e) {
                var t, n;
                return null != (t = null == (n = this.get(e)) ? void 0 : n.node.current) ? t : void 0
            }
        }
        const bt = {
                activatorEvent: null,
                active: null,
                activeNode: null,
                activeNodeRect: null,
                collisions: null,
                containerNodeRect: null,
                draggableNodes: new Map,
                droppableRects: new Map,
                droppableContainers: new yt,
                over: null,
                dragOverlay: {
                    nodeRef: {
                        current: null
                    },
                    rect: null,
                    setRef: ue
                },
                scrollableAncestors: [],
                scrollableAncestorRects: [],
                measuringConfiguration: vt,
                measureDroppableContainers: ue,
                windowRect: null,
                measuringScheduled: !1
            },
            wt = {
                activatorEvent: null,
                activators: [],
                active: null,
                activeNodeRect: null,
                ariaDescribedById: {
                    draggable: ""
                },
                dispatch: ue,
                draggableNodes: new Map,
                over: null,
                measureDroppableContainers: ue
            },
            _t = (0, n.createContext)(wt),
            xt = (0, n.createContext)(bt);

        function St() {
            return {
                draggable: {
                    active: null,
                    initialCoordinates: {
                        x: 0,
                        y: 0
                    },
                    nodes: new Map,
                    translate: {
                        x: 0,
                        y: 0
                    }
                },
                droppable: {
                    containers: new yt
                }
            }
        }

        function Et(e, t) {
            switch (t.type) {
                case le.DragStart:
                    return { ...e,
                        draggable: { ...e.draggable,
                            initialCoordinates: t.initialCoordinates,
                            active: t.active
                        }
                    };
                case le.DragMove:
                    return e.draggable.active ? { ...e,
                        draggable: { ...e.draggable,
                            translate: {
                                x: t.coordinates.x - e.draggable.initialCoordinates.x,
                                y: t.coordinates.y - e.draggable.initialCoordinates.y
                            }
                        }
                    } : e;
                case le.DragEnd:
                case le.DragCancel:
                    return { ...e,
                        draggable: { ...e.draggable,
                            active: null,
                            initialCoordinates: {
                                x: 0,
                                y: 0
                            },
                            translate: {
                                x: 0,
                                y: 0
                            }
                        }
                    };
                case le.RegisterDroppable:
                    {
                        const {
                            element: n
                        } = t,
                        {
                            id: r
                        } = n,
                        o = new yt(e.droppable.containers);
                        return o.set(r, n),
                        { ...e,
                            droppable: { ...e.droppable,
                                containers: o
                            }
                        }
                    }
                case le.SetDroppableDisabled:
                    {
                        const {
                            id: n,
                            key: r,
                            disabled: o
                        } = t,
                        i = e.droppable.containers.get(n);
                        if (!i || r !== i.key) return e;
                        const a = new yt(e.droppable.containers);
                        return a.set(n, { ...i,
                            disabled: o
                        }),
                        { ...e,
                            droppable: { ...e.droppable,
                                containers: a
                            }
                        }
                    }
                case le.UnregisterDroppable:
                    {
                        const {
                            id: n,
                            key: r
                        } = t,
                        o = e.droppable.containers.get(n);
                        if (!o || r !== o.key) return e;
                        const i = new yt(e.droppable.containers);
                        return i.delete(n),
                        { ...e,
                            droppable: { ...e.droppable,
                                containers: i
                            }
                        }
                    }
                default:
                    return e
            }
        }

        function kt(e) {
            let {
                disabled: t
            } = e;
            const {
                active: r,
                activatorEvent: o,
                draggableNodes: i
            } = (0, n.useContext)(_t), a = $(o), l = $(null == r ? void 0 : r.id);
            return (0, n.useEffect)((() => {
                if (!t && !o && a && null != l) {
                    if (!X(a)) return;
                    if (document.activeElement === a.target) return;
                    const e = i.get(l);
                    if (!e) return;
                    const {
                        activatorNode: t,
                        node: n
                    } = e;
                    if (!t.current && !n.current) return;
                    requestAnimationFrame((() => {
                        for (const e of [t.current, n.current]) {
                            if (!e) continue;
                            const t = Z(e);
                            if (t) {
                                t.focus();
                                break
                            }
                        }
                    }))
                }
            }), [o, t, i, l, a]), null
        }

        function Ct(e, t) {
            let {
                transform: n,
                ...r
            } = t;
            return null != e && e.length ? e.reduce(((e, t) => t({
                transform: e,
                ...r
            })), n) : n
        }
        const Tt = (0, n.createContext)({ ...se,
            scaleX: 1,
            scaleY: 1
        });
        var Nt;
        ! function(e) {
            e[e.Uninitialized = 0] = "Uninitialized", e[e.Initializing = 1] = "Initializing", e[e.Initialized = 2] = "Initialized"
        }(Nt || (Nt = {}));
        const Rt = (0, n.memo)((function(e) {
                var t, r, o, i;
                let {
                    id: a,
                    accessibility: l,
                    autoScroll: u = !0,
                    children: s,
                    sensors: c = gt,
                    collisionDetection: f = de,
                    measuring: d,
                    modifiers: p,
                    ...h
                } = e;
                const g = (0, n.useReducer)(Et, void 0, St),
                    [m, v] = g,
                    [y, b] = function() {
                        const [e] = (0, n.useState)((() => new Set)), t = (0, n.useCallback)((t => (e.add(t), () => e.delete(t))), [e]), r = (0, n.useCallback)((t => {
                            let {
                                type: n,
                                event: r
                            } = t;
                            e.forEach((e => {
                                var t;
                                return null == (t = e[n]) ? void 0 : t.call(e, r)
                            }))
                        }), [e]);
                        return [r, t]
                    }(),
                    [w, _] = (0, n.useState)(Nt.Uninitialized),
                    x = w === Nt.Initialized,
                    {
                        draggable: {
                            active: S,
                            nodes: E,
                            translate: k
                        },
                        droppable: {
                            containers: C
                        }
                    } = m,
                    T = S ? E.get(S) : null,
                    N = (0, n.useRef)({
                        initial: null,
                        translated: null
                    }),
                    R = (0, n.useMemo)((() => {
                        var e;
                        return null != S ? {
                            id: S,
                            data: null != (e = null == T ? void 0 : T.data) ? e : mt,
                            rect: N
                        } : null
                    }), [S, T]),
                    O = (0, n.useRef)(null),
                    [I, j] = (0, n.useState)(null),
                    [P, z] = (0, n.useState)(null),
                    F = U(h, Object.values(h)),
                    $ = Y("DndDescribedBy", a),
                    V = (0, n.useMemo)((() => C.getEnabled()), [C]),
                    Q = (K = d, (0, n.useMemo)((() => ({
                        draggable: { ...vt.draggable,
                            ...null == K ? void 0 : K.draggable
                        },
                        droppable: { ...vt.droppable,
                            ...null == K ? void 0 : K.droppable
                        },
                        dragOverlay: { ...vt.dragOverlay,
                            ...null == K ? void 0 : K.dragOverlay
                        }
                    })), [null == K ? void 0 : K.draggable, null == K ? void 0 : K.droppable, null == K ? void 0 : K.dragOverlay]));
                var K;
                const {
                    droppableRects: X,
                    measureDroppableContainers: J,
                    measuringScheduled: Z
                } = function(e, t) {
                    let {
                        dragging: r,
                        dependencies: o,
                        config: i
                    } = t;
                    const [a, l] = (0, n.useState)(null), {
                        frequency: u,
                        measure: s,
                        strategy: c
                    } = i, f = (0, n.useRef)(e), d = function() {
                        switch (c) {
                            case rt.Always:
                                return !1;
                            case rt.BeforeDragging:
                                return r;
                            default:
                                return !r
                        }
                    }(), p = U(d), h = (0, n.useCallback)((function(e) {
                        void 0 === e && (e = []), p.current || l((t => null === t ? e : t.concat(e.filter((e => !t.includes(e))))))
                    }), [p]), g = (0, n.useRef)(null), m = W((t => {
                        if (d && !r) return it;
                        if (!t || t === it || f.current !== e || null != a) {
                            const t = new Map;
                            for (let n of e) {
                                if (!n) continue;
                                if (a && a.length > 0 && !a.includes(n.id) && n.rect.current) {
                                    t.set(n.id, n.rect.current);
                                    continue
                                }
                                const e = n.node.current,
                                    r = e ? new je(s(e), e) : null;
                                n.rect.current = r, r && t.set(n.id, r)
                            }
                            return t
                        }
                        return t
                    }), [e, a, r, d, s]);
                    return (0, n.useEffect)((() => {
                        f.current = e
                    }), [e]), (0, n.useEffect)((() => {
                        d || h()
                    }), [r, d]), (0, n.useEffect)((() => {
                        a && a.length > 0 && l(null)
                    }), [JSON.stringify(a)]), (0, n.useEffect)((() => {
                        d || "number" != typeof u || null !== g.current || (g.current = setTimeout((() => {
                            h(), g.current = null
                        }), u))
                    }), [u, d, h, ...o]), {
                        droppableRects: m,
                        measureDroppableContainers: h,
                        measuringScheduled: null != a
                    }
                }(V, {
                    dragging: x,
                    dependencies: [k.x, k.y],
                    config: Q.droppable
                }), ee = function(e, t) {
                    const n = null !== t ? e.get(t) : void 0,
                        r = n ? n.node.current : null;
                    return W((e => {
                        var n;
                        return null === t ? null : null != (n = null != r ? r : e) ? n : null
                    }), [r, t])
                }(E, S), te = (0, n.useMemo)((() => P ? G(P) : null), [P]), ne = function() {
                    const e = !1 === (null == I ? void 0 : I.autoScrollEnabled),
                        t = "object" == typeof u ? !1 === u.enabled : !1 === u,
                        n = x && !e && !t;
                    if ("object" == typeof u) return { ...u,
                        enabled: n
                    };
                    return {
                        enabled: n
                    }
                }(), oe = function(e, t) {
                    return at(e, t)
                }(ee, Q.draggable.measure);
                ! function(e) {
                    let {
                        activeNode: t,
                        measure: r,
                        initialRect: o,
                        config: i = !0
                    } = e;
                    const a = (0, n.useRef)(!1),
                        {
                            x: l,
                            y: u
                        } = "boolean" == typeof i ? {
                            x: i,
                            y: i
                        } : i;
                    B((() => {
                        if (!l && !u || !t) return void(a.current = !1);
                        if (a.current || !o) return;
                        const e = null == t ? void 0 : t.node.current;
                        if (!e || !1 === e.isConnected) return;
                        const n = pe(r(e), o);
                        if (l || (n.x = 0), u || (n.y = 0), a.current = !0, Math.abs(n.x) > 0 || Math.abs(n.y) > 0) {
                            const t = _e(e);
                            t && t.scrollBy({
                                top: n.y,
                                left: n.x
                            })
                        }
                    }), [t, l, u, o, r])
                }({
                    activeNode: S ? E.get(S) : null,
                    config: ne.layoutShiftCompensation,
                    initialRect: oe,
                    measure: Q.draggable.measure
                });
                const ie = st(ee, Q.draggable.measure, oe),
                    ue = st(ee ? ee.parentElement : null),
                    ce = (0, n.useRef)({
                        activatorEvent: null,
                        active: null,
                        activeNode: ee,
                        collisionRect: null,
                        collisions: null,
                        droppableRects: X,
                        draggableNodes: E,
                        draggingNode: null,
                        draggingNodeRect: null,
                        droppableContainers: C,
                        over: null,
                        scrollableAncestors: [],
                        scrollAdjustedTranslate: null
                    }),
                    fe = C.getNodeFor(null == (t = ce.current.over) ? void 0 : t.id),
                    he = function(e) {
                        let {
                            measure: t
                        } = e;
                        const [r, o] = (0, n.useState)(null), i = lt({
                            callback: (0, n.useCallback)((e => {
                                for (const {
                                        target: n
                                    } of e)
                                    if (M(n)) {
                                        o((e => {
                                            const r = t(n);
                                            return e ? { ...e,
                                                width: r.width,
                                                height: r.height
                                            } : r
                                        }));
                                        break
                                    }
                            }), [t])
                        }), a = (0, n.useCallback)((e => {
                            const n = ht(e);
                            null == i || i.disconnect(), n && (null == i || i.observe(n)), o(n ? t(n) : null)
                        }), [t, i]), [l, u] = H(a);
                        return (0, n.useMemo)((() => ({
                            nodeRef: l,
                            rect: r,
                            setRef: u
                        })), [r, l, u])
                    }({
                        measure: Q.dragOverlay.measure
                    }),
                    me = null != (r = he.nodeRef.current) ? r : ee,
                    ve = x ? null != (o = he.rect) ? o : ie : null,
                    be = Boolean(he.nodeRef.current && he.rect),
                    Se = pe(Ee = be ? null : ie, at(Ee));
                var Ee;
                const Ce = dt(me ? D(me) : null),
                    Ne = function(e) {
                        const t = (0, n.useRef)(e),
                            r = W((n => e ? n && n !== ct && e && t.current && e.parentNode === t.current.parentNode ? n : we(e) : ct), [e]);
                        return (0, n.useEffect)((() => {
                            t.current = e
                        }), [e]), r
                    }(x ? null != fe ? fe : ee : null),
                    Re = function(e, t) {
                        void 0 === t && (t = ye);
                        const [r] = e, o = dt(r ? D(r) : null), [i, a] = (0, n.useReducer)((function() {
                            return e.length ? e.map((e => Te(e) ? o : new je(t(e), e))) : pt
                        }), pt), l = lt({
                            callback: a
                        });
                        return e.length > 0 && i === pt && a(), B((() => {
                            e.length ? e.forEach((e => null == l ? void 0 : l.observe(e))) : (null == l || l.disconnect(), a())
                        }), [e]), i
                    }(Ne),
                    Ae = Ct(p, {
                        transform: {
                            x: k.x - Se.x,
                            y: k.y - Se.y,
                            scaleX: 1,
                            scaleY: 1
                        },
                        activatorEvent: P,
                        active: R,
                        activeNodeRect: ie,
                        containerNodeRect: ue,
                        draggingNodeRect: ve,
                        over: ce.current.over,
                        overlayNodeRect: he.rect,
                        scrollableAncestors: Ne,
                        scrollableAncestorRects: Re,
                        windowRect: Ce
                    }),
                    Le = te ? q(te, k) : null,
                    Ie = function(e) {
                        const [t, r] = (0, n.useState)(null), o = (0, n.useRef)(e), i = (0, n.useCallback)((e => {
                            const t = xe(e.target);
                            t && r((e => e ? (e.set(t, ke(t)), new Map(e)) : null))
                        }), []);
                        return (0, n.useEffect)((() => {
                            const t = o.current;
                            if (e !== t) {
                                n(t);
                                const a = e.map((e => {
                                    const t = xe(e);
                                    return t ? (t.addEventListener("scroll", i, {
                                        passive: !0
                                    }), [t, ke(t)]) : null
                                })).filter((e => null != e));
                                r(a.length ? new Map(a) : null), o.current = e
                            }
                            return () => {
                                n(e), n(t)
                            };

                            function n(e) {
                                e.forEach((e => {
                                    const t = xe(e);
                                    null == t || t.removeEventListener("scroll", i)
                                }))
                            }
                        }), [i, e]), (0, n.useMemo)((() => e.length ? t ? Array.from(t.values()).reduce(((e, t) => q(e, t)), se) : Oe(e) : se), [e, t])
                    }(Ne),
                    De = ft(Ie),
                    Me = ft(Ie, [ie]),
                    Pe = q(Ae, De),
                    ze = ve ? ge(ve, Ae) : null,
                    Be = R && ze ? f({
                        active: R,
                        collisionRect: ze,
                        droppableRects: X,
                        droppableContainers: V,
                        pointerCoordinates: Le
                    }) : null,
                    Fe = function(e, t) {
                        if (!e || 0 === e.length) return null;
                        const [n] = e;
                        return t ? n[t] : n
                    }(Be, "id"),
                    [Ue, We] = (0, n.useState)(null),
                    He = function(e, t, n) {
                        return { ...e,
                            scaleX: t && n ? t.width / n.width : 1,
                            scaleY: t && n ? t.height / n.height : 1
                        }
                    }(be ? Ae : q(Ae, Me), null != (i = null == Ue ? void 0 : Ue.rect) ? i : null, ie),
                    $e = (0, n.useCallback)(((e, t) => {
                        let {
                            sensor: n,
                            options: r
                        } = t;
                        if (null == O.current) return;
                        const o = E.get(O.current);
                        if (!o) return;
                        const i = e.nativeEvent,
                            a = new n({
                                active: O.current,
                                activeNode: o,
                                event: i,
                                options: r,
                                context: ce,
                                onStart(e) {
                                    const t = O.current;
                                    if (null == t) return;
                                    const n = E.get(t);
                                    if (!n) return;
                                    const {
                                        onDragStart: r
                                    } = F.current, o = {
                                        active: {
                                            id: t,
                                            data: n.data,
                                            rect: N
                                        }
                                    };
                                    (0, A.unstable_batchedUpdates)((() => {
                                        null == r || r(o), _(Nt.Initializing), v({
                                            type: le.DragStart,
                                            initialCoordinates: e,
                                            active: t
                                        }), y({
                                            type: "onDragStart",
                                            event: o
                                        })
                                    }))
                                },
                                onMove(e) {
                                    v({
                                        type: le.DragMove,
                                        coordinates: e
                                    })
                                },
                                onEnd: l(le.DragEnd),
                                onCancel: l(le.DragCancel)
                            });

                        function l(e) {
                            return async function() {
                                const {
                                    active: t,
                                    collisions: n,
                                    over: r,
                                    scrollAdjustedTranslate: o
                                } = ce.current;
                                let a = null;
                                if (t && o) {
                                    const {
                                        cancelDrop: l
                                    } = F.current;
                                    if (a = {
                                            activatorEvent: i,
                                            active: t,
                                            collisions: n,
                                            delta: o,
                                            over: r
                                        }, e === le.DragEnd && "function" == typeof l) {
                                        await Promise.resolve(l(a)) && (e = le.DragCancel)
                                    }
                                }
                                O.current = null, (0, A.unstable_batchedUpdates)((() => {
                                    v({
                                        type: e
                                    }), _(Nt.Uninitialized), We(null), j(null), z(null);
                                    const t = e === le.DragEnd ? "onDragEnd" : "onDragCancel";
                                    if (a) {
                                        const e = F.current[t];
                                        null == e || e(a), y({
                                            type: t,
                                            event: a
                                        })
                                    }
                                }))
                            }
                        }(0, A.unstable_batchedUpdates)((() => {
                            j(a), z(e.nativeEvent)
                        }))
                    }), [E]),
                    Ve = (0, n.useCallback)(((e, t) => (n, r) => {
                        const o = n.nativeEvent,
                            i = E.get(r);
                        if (null !== O.current || !i || o.dndKit || o.defaultPrevented) return;
                        const a = {
                            active: i
                        };
                        !0 === e(n, t.options, a) && (o.dndKit = {
                            capturedBy: t.sensor
                        }, O.current = r, $e(n, t))
                    }), [E, $e]),
                    Ye = function(e, t) {
                        return (0, n.useMemo)((() => e.reduce(((e, n) => {
                            const {
                                sensor: r
                            } = n;
                            return [...e, ...r.activators.map((e => ({
                                eventName: e.eventName,
                                handler: t(e.handler, n)
                            })))]
                        }), [])), [e, t])
                    }(c, Ve);
                ! function(e) {
                    (0, n.useEffect)((() => {
                        if (!L) return;
                        const t = e.map((e => {
                            let {
                                sensor: t
                            } = e;
                            return null == t.setup ? void 0 : t.setup()
                        }));
                        return () => {
                            for (const e of t) null == e || e()
                        }
                    }), e.map((e => {
                        let {
                            sensor: t
                        } = e;
                        return t
                    })))
                }(c), B((() => {
                    ie && w === Nt.Initializing && _(Nt.Initialized)
                }), [ie, w]), (0, n.useEffect)((() => {
                    const {
                        onDragMove: e
                    } = F.current, {
                        active: t,
                        activatorEvent: n,
                        collisions: r,
                        over: o
                    } = ce.current;
                    if (!t || !n) return;
                    const i = {
                        active: t,
                        activatorEvent: n,
                        collisions: r,
                        delta: {
                            x: Pe.x,
                            y: Pe.y
                        },
                        over: o
                    };
                    (0, A.unstable_batchedUpdates)((() => {
                        null == e || e(i), y({
                            type: "onDragMove",
                            event: i
                        })
                    }))
                }), [Pe.x, Pe.y]), (0, n.useEffect)((() => {
                    const {
                        active: e,
                        activatorEvent: t,
                        collisions: n,
                        droppableContainers: r,
                        scrollAdjustedTranslate: o
                    } = ce.current;
                    if (!e || null == O.current || !t || !o) return;
                    const {
                        onDragOver: i
                    } = F.current, a = r.get(Fe), l = a && a.rect.current ? {
                        id: a.id,
                        rect: a.rect.current,
                        data: a.data,
                        disabled: a.disabled
                    } : null, u = {
                        active: e,
                        activatorEvent: t,
                        collisions: n,
                        delta: {
                            x: o.x,
                            y: o.y
                        },
                        over: l
                    };
                    (0, A.unstable_batchedUpdates)((() => {
                        We(l), null == i || i(u), y({
                            type: "onDragOver",
                            event: u
                        })
                    }))
                }), [Fe]), B((() => {
                    ce.current = {
                        activatorEvent: P,
                        active: R,
                        activeNode: ee,
                        collisionRect: ze,
                        collisions: Be,
                        droppableRects: X,
                        draggableNodes: E,
                        draggingNode: me,
                        draggingNodeRect: ve,
                        droppableContainers: C,
                        over: Ue,
                        scrollableAncestors: Ne,
                        scrollAdjustedTranslate: Pe
                    }, N.current = {
                        initial: ve,
                        translated: ze
                    }
                }), [R, ee, Be, ze, E, me, ve, X, C, Ue, Ne, Pe]), tt({ ...ne,
                    delta: k,
                    draggingRect: ze,
                    pointerCoordinates: Le,
                    scrollableAncestors: Ne,
                    scrollableAncestorRects: Re
                });
                const Qe = (0, n.useMemo)((() => ({
                        active: R,
                        activeNode: ee,
                        activeNodeRect: ie,
                        activatorEvent: P,
                        collisions: Be,
                        containerNodeRect: ue,
                        dragOverlay: he,
                        draggableNodes: E,
                        droppableContainers: C,
                        droppableRects: X,
                        over: Ue,
                        measureDroppableContainers: J,
                        scrollableAncestors: Ne,
                        scrollableAncestorRects: Re,
                        measuringConfiguration: Q,
                        measuringScheduled: Z,
                        windowRect: Ce
                    })), [R, ee, ie, P, Be, ue, he, E, C, X, Ue, J, Ne, Re, Q, Z, Ce]),
                    qe = (0, n.useMemo)((() => ({
                        activatorEvent: P,
                        activators: Ye,
                        active: R,
                        activeNodeRect: ie,
                        ariaDescribedById: {
                            draggable: $
                        },
                        dispatch: v,
                        draggableNodes: E,
                        over: Ue,
                        measureDroppableContainers: J
                    })), [P, Ye, R, ie, v, $, E, Ue, J]);
                return n.createElement(re.Provider, {
                    value: b
                }, n.createElement(_t.Provider, {
                    value: qe
                }, n.createElement(xt.Provider, {
                    value: Qe
                }, n.createElement(Tt.Provider, {
                    value: He
                }, s)), n.createElement(kt, {
                    disabled: !1 === (null == l ? void 0 : l.restoreFocus)
                })), n.createElement(ae, { ...l,
                    hiddenTextDescribedById: $
                }))
            })),
            At = (0, n.createContext)(null),
            Lt = "button",
            Ot = "Droppable";

        function It(e) {
            let {
                id: t,
                data: r,
                disabled: o = !1,
                attributes: i
            } = e;
            const a = Y(Ot),
                {
                    activators: l,
                    activatorEvent: u,
                    active: s,
                    activeNodeRect: c,
                    ariaDescribedById: f,
                    draggableNodes: d,
                    over: p
                } = (0, n.useContext)(_t),
                {
                    role: h = Lt,
                    roleDescription: g = "draggable",
                    tabIndex: m = 0
                } = null != i ? i : {},
                v = (null == s ? void 0 : s.id) === t,
                y = (0, n.useContext)(v ? Tt : At),
                [b, w] = H(),
                [_, x] = H(),
                S = function(e, t) {
                    return (0, n.useMemo)((() => e.reduce(((e, n) => {
                        let {
                            eventName: r,
                            handler: o
                        } = n;
                        return e[r] = e => {
                            o(e, t)
                        }, e
                    }), {})), [e, t])
                }(l, t),
                E = U(r);
            B((() => (d.set(t, {
                id: t,
                key: a,
                node: b,
                activatorNode: _,
                data: E
            }), () => {
                const e = d.get(t);
                e && e.key === a && d.delete(t)
            })), [d, t]);
            return {
                active: s,
                activatorEvent: u,
                activeNodeRect: c,
                attributes: (0, n.useMemo)((() => ({
                    role: h,
                    tabIndex: m,
                    "aria-disabled": o,
                    "aria-pressed": !(!v || h !== Lt) || void 0,
                    "aria-roledescription": g,
                    "aria-describedby": f.draggable
                })), [o, h, m, v, g, f.draggable]),
                isDragging: v,
                listeners: o ? void 0 : S,
                node: b,
                over: p,
                setNodeRef: w,
                setActivatorNodeRef: x,
                transform: y
            }
        }
        var Dt = o(942),
            jt = o.n(Dt),
            Mt = o(543);
        const Pt = "jPKSfrJJxGEmG0wH";
        var zt = Symbol.for("immer-nothing"),
            Bt = Symbol.for("immer-draftable"),
            Ft = Symbol.for("immer-state");

        function Ut(e, ...t) {
            throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)
        }
        var Wt = Object.getPrototypeOf;

        function Ht(e) {
            return !!e && !!e[Ft]
        }

        function $t(e) {
            return !!e && (Yt(e) || Array.isArray(e) || !!e[Bt] || !!e.constructor ? .[Bt] || Gt(e) || Jt(e))
        }
        var Vt = Object.prototype.constructor.toString();

        function Yt(e) {
            if (!e || "object" != typeof e) return !1;
            const t = Wt(e);
            if (null === t) return !0;
            const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
            return n === Object || "function" == typeof n && Function.toString.call(n) === Vt
        }

        function Qt(e, t) {
            0 === qt(e) ? Reflect.ownKeys(e).forEach((n => {
                t(n, e[n], e)
            })) : e.forEach(((n, r) => t(r, n, e)))
        }

        function qt(e) {
            const t = e[Ft];
            return t ? t.type_ : Array.isArray(e) ? 1 : Gt(e) ? 2 : Jt(e) ? 3 : 0
        }

        function Kt(e, t) {
            return 2 === qt(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
        }

        function Xt(e, t, n) {
            const r = qt(e);
            2 === r ? e.set(t, n) : 3 === r ? e.add(n) : e[t] = n
        }

        function Gt(e) {
            return e instanceof Map
        }

        function Jt(e) {
            return e instanceof Set
        }

        function Zt(e) {
            return e.copy_ || e.base_
        }

        function en(e, t) {
            if (Gt(e)) return new Map(e);
            if (Jt(e)) return new Set(e);
            if (Array.isArray(e)) return Array.prototype.slice.call(e);
            const n = Yt(e);
            if (!0 === t || "class_only" === t && !n) {
                const t = Object.getOwnPropertyDescriptors(e);
                delete t[Ft];
                let n = Reflect.ownKeys(t);
                for (let r = 0; r < n.length; r++) {
                    const o = n[r],
                        i = t[o];
                    !1 === i.writable && (i.writable = !0, i.configurable = !0), (i.get || i.set) && (t[o] = {
                        configurable: !0,
                        writable: !0,
                        enumerable: i.enumerable,
                        value: e[o]
                    })
                }
                return Object.create(Wt(e), t)
            } {
                const t = Wt(e);
                if (null !== t && n) return { ...e
                };
                const r = Object.create(t);
                return Object.assign(r, e)
            }
        }

        function tn(e, t = !1) {
            return rn(e) || Ht(e) || !$t(e) || (qt(e) > 1 && (e.set = e.add = e.clear = e.delete = nn), Object.freeze(e), t && Object.entries(e).forEach((([e, t]) => tn(t, !0)))), e
        }

        function nn() {
            Ut(2)
        }

        function rn(e) {
            return Object.isFrozen(e)
        }
        var on, an = {};

        function ln(e) {
            const t = an[e];
            return t || Ut(0), t
        }

        function un() {
            return on
        }

        function sn(e, t) {
            t && (ln("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t)
        }

        function cn(e) {
            fn(e), e.drafts_.forEach(pn), e.drafts_ = null
        }

        function fn(e) {
            e === on && (on = e.parent_)
        }

        function dn(e) {
            return on = {
                drafts_: [],
                parent_: on,
                immer_: e,
                canAutoFreeze_: !0,
                unfinalizedDrafts_: 0
            }
        }

        function pn(e) {
            const t = e[Ft];
            0 === t.type_ || 1 === t.type_ ? t.revoke_() : t.revoked_ = !0
        }

        function hn(e, t) {
            t.unfinalizedDrafts_ = t.drafts_.length;
            const n = t.drafts_[0];
            return void 0 !== e && e !== n ? (n[Ft].modified_ && (cn(t), Ut(4)), $t(e) && (e = gn(t, e), t.parent_ || vn(t, e)), t.patches_ && ln("Patches").generateReplacementPatches_(n[Ft].base_, e, t.patches_, t.inversePatches_)) : e = gn(t, n, []), cn(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== zt ? e : void 0
        }

        function gn(e, t, n) {
            if (rn(t)) return t;
            const r = t[Ft];
            if (!r) return Qt(t, ((o, i) => mn(e, r, t, o, i, n))), t;
            if (r.scope_ !== e) return t;
            if (!r.modified_) return vn(e, r.base_, !0), r.base_;
            if (!r.finalized_) {
                r.finalized_ = !0, r.scope_.unfinalizedDrafts_--;
                const t = r.copy_;
                let o = t,
                    i = !1;
                3 === r.type_ && (o = new Set(t), t.clear(), i = !0), Qt(o, ((o, a) => mn(e, r, t, o, a, n, i))), vn(e, t, !1), n && e.patches_ && ln("Patches").generatePatches_(r, n, e.patches_, e.inversePatches_)
            }
            return r.copy_
        }

        function mn(e, t, n, r, o, i, a) {
            if (Ht(o)) {
                const a = gn(e, o, i && t && 3 !== t.type_ && !Kt(t.assigned_, r) ? i.concat(r) : void 0);
                if (Xt(n, r, a), !Ht(a)) return;
                e.canAutoFreeze_ = !1
            } else a && n.add(o);
            if ($t(o) && !rn(o)) {
                if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
                gn(e, o), t && t.scope_.parent_ || "symbol" == typeof r || !Object.prototype.propertyIsEnumerable.call(n, r) || vn(e, o)
            }
        }

        function vn(e, t, n = !1) {
            !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && tn(t, n)
        }
        var yn = {
                get(e, t) {
                    if (t === Ft) return e;
                    const n = Zt(e);
                    if (!Kt(n, t)) return function(e, t, n) {
                        const r = _n(t, n);
                        return r ? "value" in r ? r.value : r.get ? .call(e.draft_) : void 0
                    }(e, n, t);
                    const r = n[t];
                    return e.finalized_ || !$t(r) ? r : r === wn(e.base_, t) ? (Sn(e), e.copy_[t] = En(r, e)) : r
                },
                has: (e, t) => t in Zt(e),
                ownKeys: e => Reflect.ownKeys(Zt(e)),
                set(e, t, n) {
                    const r = _n(Zt(e), t);
                    if (r ? .set) return r.set.call(e.draft_, n), !0;
                    if (!e.modified_) {
                        const r = wn(Zt(e), t),
                            a = r ? .[Ft];
                        if (a && a.base_ === n) return e.copy_[t] = n, e.assigned_[t] = !1, !0;
                        if (((o = n) === (i = r) ? 0 !== o || 1 / o == 1 / i : o != o && i != i) && (void 0 !== n || Kt(e.base_, t))) return !0;
                        Sn(e), xn(e)
                    }
                    var o, i;
                    return e.copy_[t] === n && (void 0 !== n || t in e.copy_) || Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_[t] = !0), !0
                },
                deleteProperty: (e, t) => (void 0 !== wn(e.base_, t) || t in e.base_ ? (e.assigned_[t] = !1, Sn(e), xn(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0),
                getOwnPropertyDescriptor(e, t) {
                    const n = Zt(e),
                        r = Reflect.getOwnPropertyDescriptor(n, t);
                    return r ? {
                        writable: !0,
                        configurable: 1 !== e.type_ || "length" !== t,
                        enumerable: r.enumerable,
                        value: n[t]
                    } : r
                },
                defineProperty() {
                    Ut(11)
                },
                getPrototypeOf: e => Wt(e.base_),
                setPrototypeOf() {
                    Ut(12)
                }
            },
            bn = {};

        function wn(e, t) {
            const n = e[Ft];
            return (n ? Zt(n) : e)[t]
        }

        function _n(e, t) {
            if (!(t in e)) return;
            let n = Wt(e);
            for (; n;) {
                const e = Object.getOwnPropertyDescriptor(n, t);
                if (e) return e;
                n = Wt(n)
            }
        }

        function xn(e) {
            e.modified_ || (e.modified_ = !0, e.parent_ && xn(e.parent_))
        }

        function Sn(e) {
            e.copy_ || (e.copy_ = en(e.base_, e.scope_.immer_.useStrictShallowCopy_))
        }
        Qt(yn, ((e, t) => {
            bn[e] = function() {
                return arguments[0] = arguments[0][0], t.apply(this, arguments)
            }
        })), bn.deleteProperty = function(e, t) {
            return bn.set.call(this, e, t, void 0)
        }, bn.set = function(e, t, n) {
            return yn.set.call(this, e[0], t, n, e[0])
        };

        function En(e, t) {
            const n = Gt(e) ? ln("MapSet").proxyMap_(e, t) : Jt(e) ? ln("MapSet").proxySet_(e, t) : function(e, t) {
                const n = Array.isArray(e),
                    r = {
                        type_: n ? 1 : 0,
                        scope_: t ? t.scope_ : un(),
                        modified_: !1,
                        finalized_: !1,
                        assigned_: {},
                        parent_: t,
                        base_: e,
                        draft_: null,
                        copy_: null,
                        revoke_: null,
                        isManual_: !1
                    };
                let o = r,
                    i = yn;
                n && (o = [r], i = bn);
                const {
                    revoke: a,
                    proxy: l
                } = Proxy.revocable(o, i);
                return r.draft_ = l, r.revoke_ = a, l
            }(e, t);
            return (t ? t.scope_ : un()).drafts_.push(n), n
        }

        function kn(e) {
            return Ht(e) || Ut(10), Cn(e)
        }

        function Cn(e) {
            if (!$t(e) || rn(e)) return e;
            const t = e[Ft];
            let n;
            if (t) {
                if (!t.modified_) return t.base_;
                t.finalized_ = !0, n = en(e, t.scope_.immer_.useStrictShallowCopy_)
            } else n = en(e, !0);
            return Qt(n, ((e, t) => {
                Xt(n, e, Cn(t))
            })), t && (t.finalized_ = !1), n
        }
        var Tn = new class {
                constructor(e) {
                    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (e, t, n) => {
                        if ("function" == typeof e && "function" != typeof t) {
                            const n = t;
                            t = e;
                            const r = this;
                            return function(e = n, ...o) {
                                return r.produce(e, (e => t.call(this, e, ...o)))
                            }
                        }
                        let r;
                        if ("function" != typeof t && Ut(6), void 0 !== n && "function" != typeof n && Ut(7), $t(e)) {
                            const o = dn(this),
                                i = En(e, void 0);
                            let a = !0;
                            try {
                                r = t(i), a = !1
                            } finally {
                                a ? cn(o) : fn(o)
                            }
                            return sn(o, n), hn(r, o)
                        }
                        if (!e || "object" != typeof e) {
                            if (r = t(e), void 0 === r && (r = e), r === zt && (r = void 0), this.autoFreeze_ && tn(r, !0), n) {
                                const t = [],
                                    o = [];
                                ln("Patches").generateReplacementPatches_(e, r, t, o), n(t, o)
                            }
                            return r
                        }
                        Ut(1)
                    }, this.produceWithPatches = (e, t) => {
                        if ("function" == typeof e) return (t, ...n) => this.produceWithPatches(t, (t => e(t, ...n)));
                        let n, r;
                        return [this.produce(e, t, ((e, t) => {
                            n = e, r = t
                        })), n, r]
                    }, "boolean" == typeof e ? .autoFreeze && this.setAutoFreeze(e.autoFreeze), "boolean" == typeof e ? .useStrictShallowCopy && this.setUseStrictShallowCopy(e.useStrictShallowCopy)
                }
                createDraft(e) {
                    $t(e) || Ut(8), Ht(e) && (e = kn(e));
                    const t = dn(this),
                        n = En(e, void 0);
                    return n[Ft].isManual_ = !0, fn(t), n
                }
                finishDraft(e, t) {
                    const n = e && e[Ft];
                    n && n.isManual_ || Ut(9);
                    const {
                        scope_: r
                    } = n;
                    return sn(r, t), hn(void 0, r)
                }
                setAutoFreeze(e) {
                    this.autoFreeze_ = e
                }
                setUseStrictShallowCopy(e) {
                    this.useStrictShallowCopy_ = e
                }
                applyPatches(e, t) {
                    let n;
                    for (n = t.length - 1; n >= 0; n--) {
                        const r = t[n];
                        if (0 === r.path.length && "replace" === r.op) {
                            e = r.value;
                            break
                        }
                    }
                    n > -1 && (t = t.slice(n + 1));
                    const r = ln("Patches").applyPatches_;
                    return Ht(e) ? r(e, t) : this.produce(e, (e => r(e, t)))
                }
            },
            Nn = Tn.produce;
        Tn.produceWithPatches.bind(Tn), Tn.setAutoFreeze.bind(Tn), Tn.setUseStrictShallowCopy.bind(Tn), Tn.applyPatches.bind(Tn), Tn.createDraft.bind(Tn), Tn.finishDraft.bind(Tn);

        function Rn(e, t = "expected a function, instead received " + typeof e) {
            if ("function" != typeof e) throw new TypeError(t)
        }
        var An = e => Array.isArray(e) ? e : [e];

        function Ln(e) {
            const t = Array.isArray(e[0]) ? e[0] : e;
            return function(e, t = "expected all items to be functions, instead received the following types: ") {
                if (!e.every((e => "function" == typeof e))) {
                    const n = e.map((e => "function" == typeof e ? `function ${e.name||"unnamed"}()` : typeof e)).join(", ");
                    throw new TypeError(`${t}[${n}]`)
                }
            }(t, "createSelector expects all input-selectors to be functions, but received the following types: "), t
        }
        Symbol(), Object.getPrototypeOf({});
        var On = "undefined" != typeof WeakRef ? WeakRef : class {
                constructor(e) {
                    this.value = e
                }
                deref() {
                    return this.value
                }
            },
            In = 0,
            Dn = 1;

        function jn() {
            return {
                s: In,
                v: void 0,
                o: null,
                p: null
            }
        }

        function Mn(e, t = {}) {
            let n = jn();
            const {
                resultEqualityCheck: r
            } = t;
            let o, i = 0;

            function a() {
                let t = n;
                const {
                    length: a
                } = arguments;
                for (let e = 0, n = a; e < n; e++) {
                    const n = arguments[e];
                    if ("function" == typeof n || "object" == typeof n && null !== n) {
                        let e = t.o;
                        null === e && (t.o = e = new WeakMap);
                        const r = e.get(n);
                        void 0 === r ? (t = jn(), e.set(n, t)) : t = r
                    } else {
                        let e = t.p;
                        null === e && (t.p = e = new Map);
                        const r = e.get(n);
                        void 0 === r ? (t = jn(), e.set(n, t)) : t = r
                    }
                }
                const l = t;
                let u;
                if (t.s === Dn) u = t.v;
                else if (u = e.apply(null, arguments), i++, r) {
                    const e = o ? .deref ? .() ? ? o;
                    null != e && r(e, u) && (u = e, 0 !== i && i--);
                    o = "object" == typeof u && null !== u || "function" == typeof u ? new On(u) : u
                }
                return l.s = Dn, l.v = u, u
            }
            return a.clearCache = () => {
                n = jn(), a.resetResultsCount()
            }, a.resultsCount = () => i, a.resetResultsCount = () => {
                i = 0
            }, a
        }

        function Pn(e, ...t) {
            const n = "function" == typeof e ? {
                    memoize: e,
                    memoizeOptions: t
                } : e,
                r = (...e) => {
                    let t, r = 0,
                        o = 0,
                        i = {},
                        a = e.pop();
                    "object" == typeof a && (i = a, a = e.pop()), Rn(a, `createSelector expects an output function after the inputs, but received: [${typeof a}]`);
                    const l = { ...n,
                            ...i
                        },
                        {
                            memoize: u,
                            memoizeOptions: s = [],
                            argsMemoize: c = Mn,
                            argsMemoizeOptions: f = [],
                            devModeChecks: d = {}
                        } = l,
                        p = An(s),
                        h = An(f),
                        g = Ln(e),
                        m = u((function() {
                            return r++, a.apply(null, arguments)
                        }), ...p);
                    const v = c((function() {
                        o++;
                        const e = function(e, t) {
                            const n = [],
                                {
                                    length: r
                                } = e;
                            for (let o = 0; o < r; o++) n.push(e[o].apply(null, t));
                            return n
                        }(g, arguments);
                        return t = m.apply(null, e), t
                    }), ...h);
                    return Object.assign(v, {
                        resultFunc: a,
                        memoizedResultFunc: m,
                        dependencies: g,
                        dependencyRecomputations: () => o,
                        resetDependencyRecomputations: () => {
                            o = 0
                        },
                        lastResult: () => t,
                        recomputations: () => r,
                        resetRecomputations: () => {
                            r = 0
                        },
                        memoize: u,
                        argsMemoize: c
                    })
                };
            return Object.assign(r, {
                withTypes: () => r
            }), r
        }
        var zn = Pn(Mn),
            Bn = Object.assign(((e, t = zn) => {
                ! function(e, t = "expected an object, instead received " + typeof e) {
                    if ("object" != typeof e) throw new TypeError(t)
                }(e, "createStructuredSelector expects first argument to be an object where each property is a selector, instead received a " + typeof e);
                const n = Object.keys(e),
                    r = n.map((t => e[t])),
                    o = t(r, ((...e) => e.reduce(((e, t, r) => (e[n[r]] = t, e)), {})));
                return o
            }), {
                withTypes: () => Bn
            });

        function Fn(e) {
            return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `
        }
        var Un = (() => "function" == typeof Symbol && Symbol.observable || "@@observable")(),
            Wn = () => Math.random().toString(36).substring(7).split("").join("."),
            Hn = {
                INIT: `@@redux/INIT${Wn()}`,
                REPLACE: `@@redux/REPLACE${Wn()}`,
                PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Wn()}`
            };

        function $n(e) {
            if ("object" != typeof e || null === e) return !1;
            let t = e;
            for (; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
            return Object.getPrototypeOf(e) === t || null === Object.getPrototypeOf(e)
        }

        function Vn(e, t, n) {
            if ("function" != typeof e) throw new Error(Fn(2));
            if ("function" == typeof t && "function" == typeof n || "function" == typeof n && "function" == typeof arguments[3]) throw new Error(Fn(0));
            if ("function" == typeof t && void 0 === n && (n = t, t = void 0), void 0 !== n) {
                if ("function" != typeof n) throw new Error(Fn(1));
                return n(Vn)(e, t)
            }
            let r = e,
                o = t,
                i = new Map,
                a = i,
                l = 0,
                u = !1;

            function s() {
                a === i && (a = new Map, i.forEach(((e, t) => {
                    a.set(t, e)
                })))
            }

            function c() {
                if (u) throw new Error(Fn(3));
                return o
            }

            function f(e) {
                if ("function" != typeof e) throw new Error(Fn(4));
                if (u) throw new Error(Fn(5));
                let t = !0;
                s();
                const n = l++;
                return a.set(n, e),
                    function() {
                        if (t) {
                            if (u) throw new Error(Fn(6));
                            t = !1, s(), a.delete(n), i = null
                        }
                    }
            }

            function d(e) {
                if (!$n(e)) throw new Error(Fn(7));
                if (void 0 === e.type) throw new Error(Fn(8));
                if ("string" != typeof e.type) throw new Error(Fn(17));
                if (u) throw new Error(Fn(9));
                try {
                    u = !0, o = r(o, e)
                } finally {
                    u = !1
                }
                return (i = a).forEach((e => {
                    e()
                })), e
            }
            d({
                type: Hn.INIT
            });
            return {
                dispatch: d,
                subscribe: f,
                getState: c,
                replaceReducer: function(e) {
                    if ("function" != typeof e) throw new Error(Fn(10));
                    r = e, d({
                        type: Hn.REPLACE
                    })
                },
                [Un]: function() {
                    const e = f;
                    return {
                        subscribe(t) {
                            if ("object" != typeof t || null === t) throw new Error(Fn(11));

                            function n() {
                                const e = t;
                                e.next && e.next(c())
                            }
                            n();
                            return {
                                unsubscribe: e(n)
                            }
                        },
                        [Un]() {
                            return this
                        }
                    }
                }
            }
        }

        function Yn(e) {
            const t = Object.keys(e),
                n = {};
            for (let r = 0; r < t.length; r++) {
                const o = t[r];
                0, "function" == typeof e[o] && (n[o] = e[o])
            }
            const r = Object.keys(n);
            let o;
            try {
                ! function(e) {
                    Object.keys(e).forEach((t => {
                        const n = e[t];
                        if (void 0 === n(void 0, {
                                type: Hn.INIT
                            })) throw new Error(Fn(12));
                        if (void 0 === n(void 0, {
                                type: Hn.PROBE_UNKNOWN_ACTION()
                            })) throw new Error(Fn(13))
                    }))
                }(n)
            } catch (e) {
                o = e
            }
            return function(e = {}, t) {
                if (o) throw o;
                let i = !1;
                const a = {};
                for (let o = 0; o < r.length; o++) {
                    const l = r[o],
                        u = n[l],
                        s = e[l],
                        c = u(s, t);
                    if (void 0 === c) {
                        t && t.type;
                        throw new Error(Fn(14))
                    }
                    a[l] = c, i = i || c !== s
                }
                return i = i || r.length !== Object.keys(e).length, i ? a : e
            }
        }

        function Qn(...e) {
            return 0 === e.length ? e => e : 1 === e.length ? e[0] : e.reduce(((e, t) => (...n) => e(t(...n))))
        }

        function qn(e) {
            return ({
                dispatch: t,
                getState: n
            }) => r => o => "function" == typeof o ? o(t, n, e) : r(o)
        }
        var Kn = qn(),
            Xn = qn,
            Gn = (((...e) => {
                const t = Pn(...e),
                    n = Object.assign(((...e) => {
                        const n = t(...e),
                            r = (e, ...t) => n(Ht(e) ? kn(e) : e, ...t);
                        return Object.assign(r, n), r
                    }), {
                        withTypes: () => n
                    })
            })(Mn), "undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
                if (0 !== arguments.length) return "object" == typeof arguments[0] ? Qn : Qn.apply(null, arguments)
            });
        "undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__;

        function Jn(e, t) {
            function n(...n) {
                if (t) {
                    let r = t(...n);
                    if (!r) throw new Error(Er(0));
                    return {
                        type: e,
                        payload: r.payload,
                        ..."meta" in r && {
                            meta: r.meta
                        },
                        ..."error" in r && {
                            error: r.error
                        }
                    }
                }
                return {
                    type: e,
                    payload: n[0]
                }
            }
            return n.toString = () => `${e}`, n.type = e, n.match = t => function(e) {
                return $n(e) && "type" in e && "string" == typeof e.type
            }(t) && t.type === e, n
        }
        var Zn = class e extends Array {
            constructor(...t) {
                super(...t), Object.setPrototypeOf(this, e.prototype)
            }
            static get[Symbol.species]() {
                return e
            }
            concat(...e) {
                return super.concat.apply(this, e)
            }
            prepend(...t) {
                return 1 === t.length && Array.isArray(t[0]) ? new e(...t[0].concat(this)) : new e(...t.concat(this))
            }
        };

        function er(e) {
            return $t(e) ? Nn(e, (() => {})) : e
        }

        function tr(e, t, n) {
            if (e.has(t)) {
                let r = e.get(t);
                return n.update && (r = n.update(r, t, e), e.set(t, r)), r
            }
            if (!n.insert) throw new Error(Er(10));
            const r = n.insert(t, e);
            return e.set(t, r), r
        }
        var nr = () => function(e) {
                const {
                    thunk: t = !0,
                    immutableCheck: n = !0,
                    serializableCheck: r = !0,
                    actionCreatorCheck: o = !0
                } = e ? ? {};
                let i = new Zn;
                return t && ("boolean" == typeof t ? i.push(Kn) : i.push(Xn(t.extraArgument))), i
            },
            rr = "RTK_autoBatch",
            or = e => t => {
                setTimeout(t, e)
            },
            ir = "undefined" != typeof window && window.requestAnimationFrame ? window.requestAnimationFrame : or(10),
            ar = e => function(t) {
                const {
                    autoBatch: n = !0
                } = t ? ? {};
                let r = new Zn(e);
                return n && r.push(((e = {
                    type: "raf"
                }) => t => (...n) => {
                    const r = t(...n);
                    let o = !0,
                        i = !1,
                        a = !1;
                    const l = new Set,
                        u = "tick" === e.type ? queueMicrotask : "raf" === e.type ? ir : "callback" === e.type ? e.queueNotification : or(e.timeout),
                        s = () => {
                            a = !1, i && (i = !1, l.forEach((e => e())))
                        };
                    return Object.assign({}, r, {
                        subscribe(e) {
                            const t = r.subscribe((() => o && e()));
                            return l.add(e), () => {
                                t(), l.delete(e)
                            }
                        },
                        dispatch(e) {
                            try {
                                return o = !e ? .meta ? .[rr], i = !o, i && (a || (a = !0, u(s))), r.dispatch(e)
                            } finally {
                                o = !0
                            }
                        }
                    })
                })("object" == typeof n ? n : void 0)), r
            },
            lr = !0;

        function ur(e) {
            const t = nr(),
                {
                    reducer: n,
                    middleware: r,
                    devTools: o = !0,
                    preloadedState: i,
                    enhancers: a
                } = e || {};
            let l, u;
            if ("function" == typeof n) l = n;
            else {
                if (!$n(n)) throw new Error(Er(1));
                l = Yn(n)
            }
            if (!lr && r && "function" != typeof r) throw new Error(Er(2));
            if ("function" == typeof r) {
                if (u = r(t), !lr && !Array.isArray(u)) throw new Error(Er(3))
            } else u = t();
            if (!lr && u.some((e => "function" != typeof e))) throw new Error(Er(4));
            let s = Qn;
            o && (s = Gn({
                trace: !lr,
                ..."object" == typeof o && o
            }));
            const c = function(...e) {
                    return t => (n, r) => {
                        const o = t(n, r);
                        let i = () => {
                            throw new Error(Fn(15))
                        };
                        const a = {
                                getState: o.getState,
                                dispatch: (e, ...t) => i(e, ...t)
                            },
                            l = e.map((e => e(a)));
                        return i = Qn(...l)(o.dispatch), { ...o,
                            dispatch: i
                        }
                    }
                }(...u),
                f = ar(c);
            if (!lr && a && "function" != typeof a) throw new Error(Er(5));
            let d = "function" == typeof a ? a(f) : f();
            if (!lr && !Array.isArray(d)) throw new Error(Er(6));
            if (!lr && d.some((e => "function" != typeof e))) throw new Error(Er(7));
            lr || !u.length || d.includes(c) || console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");
            return Vn(l, i, s(...d))
        }

        function sr(e) {
            const t = {},
                n = [];
            let r;
            const o = {
                addCase(e, n) {
                    const r = "string" == typeof e ? e : e.type;
                    if (!r) throw new Error(Er(28));
                    if (r in t) throw new Error(Er(29));
                    return t[r] = n, o
                },
                addMatcher: (e, t) => (n.push({
                    matcher: e,
                    reducer: t
                }), o),
                addDefaultCase: e => (r = e, o)
            };
            return e(o), [t, n, r]
        }
        var cr = (e = 21) => {
            let t = "",
                n = e;
            for (; n--;) t += "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW" [64 * Math.random() | 0];
            return t
        };
        var fr = Symbol.for("rtk-slice-createasyncthunk");

        function dr(e, t) {
            return `${e}/${t}`
        }

        function pr({
            creators: e
        } = {}) {
            const t = e ? .asyncThunk ? .[fr];
            return function(e) {
                const {
                    name: n,
                    reducerPath: r = n
                } = e;
                if (!n) throw new Error(Er(11));
                const o = ("function" == typeof e.reducers ? e.reducers(function() {
                        function e(e, t) {
                            return {
                                _reducerDefinitionType: "asyncThunk",
                                payloadCreator: e,
                                ...t
                            }
                        }
                        return e.withTypes = () => e, {
                            reducer: e => Object.assign({
                                [e.name]: (...t) => e(...t)
                            }[e.name], {
                                _reducerDefinitionType: "reducer"
                            }),
                            preparedReducer: (e, t) => ({
                                _reducerDefinitionType: "reducerWithPrepare",
                                prepare: e,
                                reducer: t
                            }),
                            asyncThunk: e
                        }
                    }()) : e.reducers) || {},
                    i = Object.keys(o),
                    a = {
                        sliceCaseReducersByName: {},
                        sliceCaseReducersByType: {},
                        actionCreators: {},
                        sliceMatchers: []
                    },
                    l = {
                        addCase(e, t) {
                            const n = "string" == typeof e ? e : e.type;
                            if (!n) throw new Error(Er(12));
                            if (n in a.sliceCaseReducersByType) throw new Error(Er(13));
                            return a.sliceCaseReducersByType[n] = t, l
                        },
                        addMatcher: (e, t) => (a.sliceMatchers.push({
                            matcher: e,
                            reducer: t
                        }), l),
                        exposeAction: (e, t) => (a.actionCreators[e] = t, l),
                        exposeCaseReducer: (e, t) => (a.sliceCaseReducersByName[e] = t, l)
                    };

                function u() {
                    const [t = {}, n = [], r] = "function" == typeof e.extraReducers ? sr(e.extraReducers) : [e.extraReducers], o = { ...t,
                        ...a.sliceCaseReducersByType
                    };
                    return function(e, t) {
                        let n, [r, o, i] = sr(t);
                        if ("function" == typeof e) n = () => er(e());
                        else {
                            const t = er(e);
                            n = () => t
                        }

                        function a(e = n(), t) {
                            let a = [r[t.type], ...o.filter((({
                                matcher: e
                            }) => e(t))).map((({
                                reducer: e
                            }) => e))];
                            return 0 === a.filter((e => !!e)).length && (a = [i]), a.reduce(((e, n) => {
                                if (n) {
                                    if (Ht(e)) {
                                        const r = n(e, t);
                                        return void 0 === r ? e : r
                                    }
                                    if ($t(e)) return Nn(e, (e => n(e, t))); {
                                        const r = n(e, t);
                                        if (void 0 === r) {
                                            if (null === e) return e;
                                            throw new Error(Er(9))
                                        }
                                        return r
                                    }
                                }
                                return e
                            }), e)
                        }
                        return a.getInitialState = n, a
                    }(e.initialState, (e => {
                        for (let t in o) e.addCase(t, o[t]);
                        for (let t of a.sliceMatchers) e.addMatcher(t.matcher, t.reducer);
                        for (let t of n) e.addMatcher(t.matcher, t.reducer);
                        r && e.addDefaultCase(r)
                    }))
                }
                i.forEach((r => {
                    const i = o[r],
                        a = {
                            reducerName: r,
                            type: dr(n, r),
                            createNotation: "function" == typeof e.reducers
                        };
                    ! function(e) {
                        return "asyncThunk" === e._reducerDefinitionType
                    }(i) ? function({
                        type: e,
                        reducerName: t,
                        createNotation: n
                    }, r, o) {
                        let i, a;
                        if ("reducer" in r) {
                            if (n && ! function(e) {
                                    return "reducerWithPrepare" === e._reducerDefinitionType
                                }(r)) throw new Error(Er(17));
                            i = r.reducer, a = r.prepare
                        } else i = r;
                        o.addCase(e, i).exposeCaseReducer(t, i).exposeAction(t, a ? Jn(e, a) : Jn(e))
                    }(a, i, l) : function({
                        type: e,
                        reducerName: t
                    }, n, r, o) {
                        if (!o) throw new Error(Er(18));
                        const {
                            payloadCreator: i,
                            fulfilled: a,
                            pending: l,
                            rejected: u,
                            settled: s,
                            options: c
                        } = n, f = o(e, i, c);
                        r.exposeAction(t, f), a && r.addCase(f.fulfilled, a);
                        l && r.addCase(f.pending, l);
                        u && r.addCase(f.rejected, u);
                        s && r.addMatcher(f.settled, s);
                        r.exposeCaseReducer(t, {
                            fulfilled: a || mr,
                            pending: l || mr,
                            rejected: u || mr,
                            settled: s || mr
                        })
                    }(a, i, l, t)
                }));
                const s = e => e,
                    c = new Map;
                let f;

                function d(e, t) {
                    return f || (f = u()), f(e, t)
                }

                function p() {
                    return f || (f = u()), f.getInitialState()
                }

                function h(t, n = !1) {
                    function r(e) {
                        let r = e[t];
                        return void 0 === r && n && (r = p()), r
                    }

                    function o(t = s) {
                        const r = tr(c, n, {
                            insert: () => new WeakMap
                        });
                        return tr(r, t, {
                            insert: () => {
                                const r = {};
                                for (const [o, i] of Object.entries(e.selectors ? ? {})) r[o] = hr(i, t, p, n);
                                return r
                            }
                        })
                    }
                    return {
                        reducerPath: t,
                        getSelectors: o,
                        get selectors() {
                            return o(r)
                        },
                        selectSlice: r
                    }
                }
                const g = {
                    name: n,
                    reducer: d,
                    actions: a.actionCreators,
                    caseReducers: a.sliceCaseReducersByName,
                    getInitialState: p,
                    ...h(r),
                    injectInto(e, {
                        reducerPath: t,
                        ...n
                    } = {}) {
                        const o = t ? ? r;
                        return e.inject({
                            reducerPath: o,
                            reducer: d
                        }, n), { ...g,
                            ...h(o, !0)
                        }
                    }
                };
                return g
            }
        }

        function hr(e, t, n, r) {
            function o(o, ...i) {
                let a = t(o);
                return void 0 === a && r && (a = n()), e(a, ...i)
            }
            return o.unwrapped = e, o
        }
        var gr = pr();

        function mr() {}
        var vr = (e, t) => {
            if ("function" != typeof e) throw new Error(Er(32))
        };
        var {
            assign: yr
        } = Object, br = "listenerMiddleware", wr = e => {
            let {
                type: t,
                actionCreator: n,
                matcher: r,
                predicate: o,
                effect: i
            } = e;
            if (t) o = Jn(t).match;
            else if (n) t = n.type, o = n.match;
            else if (r) o = r;
            else if (!o) throw new Error(Er(21));
            return vr(i), {
                predicate: o,
                type: t,
                effect: i
            }
        }, _r = Object.assign((e => {
            const {
                type: t,
                predicate: n,
                effect: r
            } = wr(e);
            return {
                id: cr(),
                effect: r,
                type: t,
                predicate: n,
                pending: new Set,
                unsubscribe: () => {
                    throw new Error(Er(22))
                }
            }
        }), {
            withTypes: () => _r
        }), xr = Object.assign(Jn(`${br}/add`), {
            withTypes: () => xr
        }), Sr = (Jn(`${br}/removeAll`), Object.assign(Jn(`${br}/remove`), {
            withTypes: () => Sr
        }));
        Symbol.for("rtk-state-proxy-original");

        function Er(e) {
            return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `
        }
        const kr = "local";

        function Cr(e = kr) {
            return chrome.storage[e]
        }
        async function Tr(e, t = kr) {
            return Cr(t).set(e)
        }
        const Nr = "dfdState",
            Rr = e => t => n => {
                const r = t(n),
                    o = e.getState();
                return Tr({
                    [Nr]: o
                }), r
            };

        function Ar(e) {
            return "object" == typeof e && null !== e && e.nodeType === Node.ELEMENT_NODE
        }
        const Lr = {
                NONE: "",
                DESCENDANT: " ",
                CHILD: " > "
            },
            Or = {
                id: "id",
                class: "class",
                tag: "tag",
                attribute: "attribute",
                nthchild: "nthchild",
                nthoftype: "nthoftype"
            };
        const Ir = "CssSelectorGenerator";

        function Dr(e = "unknown problem", ...t) {
            console.warn(`${Ir}: ${e}`, ...t)
        }
        const jr = {
            selectors: [Or.id, Or.class, Or.tag, Or.attribute],
            includeTag: !1,
            whitelist: [],
            blacklist: [],
            combineWithinSelector: !0,
            combineBetweenSelectors: !0,
            root: null,
            maxCombinations: Number.POSITIVE_INFINITY,
            maxCandidates: Number.POSITIVE_INFINITY
        };

        function Mr(e) {
            return Array.isArray(e) ? e.filter((e => {
                return t = Or, n = e, Object.values(t).includes(n);
                var t, n
            })) : []
        }

        function Pr(e) {
            return e instanceof RegExp
        }

        function zr(e) {
            return ["string", "function"].includes(typeof e) || Pr(e)
        }

        function Br(e) {
            return Array.isArray(e) ? e.filter(zr) : []
        }

        function Fr(e) {
            const t = [Node.DOCUMENT_NODE, Node.DOCUMENT_FRAGMENT_NODE, Node.ELEMENT_NODE];
            return function(e) {
                return e instanceof Node
            }(e) && t.includes(e.nodeType)
        }

        function Ur(e, t) {
            if (Fr(e)) return e.contains(t) || Dr("element root mismatch", "Provided root does not contain the element. This will most likely result in producing a fallback selector using element's real root node. If you plan to use the selector using provided root (e.g. `root.querySelector`), it will nto work as intended."), e;
            const n = t.getRootNode({
                composed: !1
            });
            return Fr(n) ? (n !== document && Dr("shadow root inferred", "You did not provide a root and the element is a child of Shadow DOM. This will produce a selector using ShadowRoot as a root. If you plan to use the selector using document as a root (e.g. `document.querySelector`), it will not work as intended."), n) : t.ownerDocument.querySelector(":root")
        }

        function Wr(e) {
            return "number" == typeof e ? e : Number.POSITIVE_INFINITY
        }

        function Hr(e = []) {
            const [t = [], ...n] = e;
            return 0 === n.length ? t : n.reduce(((e, t) => e.filter((e => t.includes(e)))), t)
        }

        function $r(e) {
            return [].concat(...e)
        }

        function Vr(e) {
            const t = e.map((e => {
                if (Pr(e)) return t => e.test(t);
                if ("function" == typeof e) return t => {
                    const n = e(t);
                    return "boolean" != typeof n ? (Dr("pattern matcher function invalid", "Provided pattern matching function does not return boolean. It's result will be ignored.", e), !1) : n
                };
                if ("string" == typeof e) {
                    const t = new RegExp("^" + (e.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".+") + "$"));
                    return e => t.test(e)
                }
                return Dr("pattern matcher invalid", "Pattern matching only accepts strings, regular expressions and/or functions. This item is invalid and will be ignored.", e), () => !1
            }));
            return e => t.some((t => t(e)))
        }

        function Yr(e, t, n) {
            const r = Array.from(Ur(n, e[0]).querySelectorAll(t));
            return r.length === e.length && e.every((e => r.includes(e)))
        }

        function Qr(e, t) {
            t = null != t ? t : function(e) {
                return e.ownerDocument.querySelector(":root")
            }(e);
            const n = [];
            let r = e;
            for (; Ar(r) && r !== t;) n.push(r), r = r.parentElement;
            return n
        }

        function qr(e, t) {
            return Hr(e.map((e => Qr(e, t))))
        }
        const Kr = ", ",
            Xr = new RegExp(["^$", "\\s"].join("|")),
            Gr = new RegExp(["^$"].join("|")),
            Jr = [Or.nthoftype, Or.tag, Or.id, Or.class, Or.attribute, Or.nthchild],
            Zr = Vr(["class", "id", "ng-*"]);

        function eo({
            name: e
        }) {
            return `[${e}]`
        }

        function to({
            name: e,
            value: t
        }) {
            return `[${e}='${t}']`
        }

        function no({
            nodeName: e,
            nodeValue: t
        }) {
            return {
                name: mo(e),
                value: mo(t)
            }
        }

        function ro(e) {
            const t = Array.from(e.attributes).filter((t => function({
                nodeName: e
            }, t) {
                const n = t.tagName.toLowerCase();
                return !(["input", "option"].includes(n) && "value" === e || Zr(e))
            }(t, e))).map(no);
            return [...t.map(eo), ...t.map(to)]
        }

        function oo(e) {
            return (e.getAttribute("class") || "").trim().split(/\s+/).filter((e => !Gr.test(e))).map((e => `.${mo(e)}`))
        }

        function io(e) {
            const t = e.getAttribute("id") || "",
                n = `#${mo(t)}`,
                r = e.getRootNode({
                    composed: !1
                });
            return !Xr.test(t) && Yr([e], n, r) ? [n] : []
        }

        function ao(e) {
            const t = e.parentNode;
            if (t) {
                const n = Array.from(t.childNodes).filter(Ar).indexOf(e);
                if (n > -1) return [`:nth-child(${n+1})`]
            }
            return []
        }

        function lo(e) {
            return [mo(e.tagName.toLowerCase())]
        }

        function uo(e) {
            const t = [...new Set($r(e.map(lo)))];
            return 0 === t.length || t.length > 1 ? [] : [t[0]]
        }

        function so(e) {
            const t = uo([e])[0],
                n = e.parentElement;
            if (n) {
                const r = Array.from(n.children).filter((e => e.tagName.toLowerCase() === t)),
                    o = r.indexOf(e);
                if (o > -1) return [`${t}:nth-of-type(${o+1})`]
            }
            return []
        }

        function co(e = [], {
            maxResults: t = Number.POSITIVE_INFINITY
        } = {}) {
            return Array.from(function*(e = [], {
                maxResults: t = Number.POSITIVE_INFINITY
            } = {}) {
                let n = 0,
                    r = po(1);
                for (; r.length <= e.length && n < t;) {
                    n += 1;
                    const t = r.map((t => e[t]));
                    yield t, r = fo(r, e.length - 1)
                }
            }(e, {
                maxResults: t
            }))
        }

        function fo(e = [], t = 0) {
            const n = e.length;
            if (0 === n) return [];
            const r = [...e];
            r[n - 1] += 1;
            for (let e = n - 1; e >= 0; e--)
                if (r[e] > t) {
                    if (0 === e) return po(n + 1);
                    r[e - 1]++, r[e] = r[e - 1] + 1
                }
            return r[n - 1] > t ? po(n + 1) : r
        }

        function po(e = 1) {
            return Array.from(Array(e).keys())
        }
        const ho = ":".charCodeAt(0).toString(16).toUpperCase(),
            go = /[ !"#$%&'()\[\]{|}<>*+,./;=?@^`~\\]/;

        function mo(e = "") {
            var t, n;
            return null !== (n = null === (t = null === CSS || void 0 === CSS ? void 0 : CSS.escape) || void 0 === t ? void 0 : t.call(CSS, e)) && void 0 !== n ? n : function(e = "") {
                return e.split("").map((e => ":" === e ? `\\${ho} ` : go.test(e) ? `\\${e}` : escape(e).replace(/%/g, "\\"))).join("")
            }(e)
        }
        const vo = {
                tag: uo,
                id: function(e) {
                    return 0 === e.length || e.length > 1 ? [] : io(e[0])
                },
                class: function(e) {
                    return Hr(e.map(oo))
                },
                attribute: function(e) {
                    return Hr(e.map(ro))
                },
                nthchild: function(e) {
                    return Hr(e.map(ao))
                },
                nthoftype: function(e) {
                    return Hr(e.map(so))
                }
            },
            yo = {
                tag: lo,
                id: io,
                class: oo,
                attribute: ro,
                nthchild: ao,
                nthoftype: so
            };

        function bo(e, t, n) {
            const r = function(e, t) {
                    const {
                        blacklist: n,
                        whitelist: r,
                        combineWithinSelector: o,
                        maxCombinations: i
                    } = t, a = Vr(n), l = Vr(r), u = (t, n) => {
                        const r = function(e, t) {
                                var n;
                                return (null !== (n = vo[t]) && void 0 !== n ? n : () => [])(e)
                            }(e, n),
                            u = function(e = [], t, n) {
                                return e.filter((e => n(e) || !t(e)))
                            }(r, a, l),
                            s = function(e = [], t) {
                                return e.sort(((e, n) => {
                                    const r = t(e),
                                        o = t(n);
                                    return r && !o ? -1 : !r && o ? 1 : 0
                                }))
                            }(u, l);
                        return t[n] = o ? co(s, {
                            maxResults: i
                        }) : s.map((e => [e])), t
                    };
                    return function(e) {
                        const {
                            selectors: t,
                            includeTag: n
                        } = e, r = [].concat(t);
                        n && !r.includes("tag") && r.push("tag");
                        return r
                    }(t).reduce(u, {})
                }(e, n),
                o = function(e, t) {
                    return function(e) {
                        const {
                            selectors: t,
                            combineBetweenSelectors: n,
                            includeTag: r,
                            maxCandidates: o
                        } = e, i = n ? co(t, {
                            maxResults: o
                        }) : t.map((e => [e]));
                        return r ? i.map(wo) : i
                    }(t).map((t => function(e, t) {
                        const n = {};
                        e.forEach((e => {
                            const r = t[e];
                            r.length > 0 && (n[e] = r)
                        }));
                        return function(e = {}) {
                            let t = [];
                            return Object.entries(e).forEach((([e, n]) => {
                                t = n.flatMap((n => 0 === t.length ? [{
                                    [e]: n
                                }] : t.map((t => Object.assign(Object.assign({}, t), {
                                    [e]: n
                                })))))
                            })), t
                        }(n).map(_o)
                    }(t, e))).filter((e => e.length > 0))
                }(r, n),
                i = $r(o);
            return [...new Set(i)]
        }

        function wo(e) {
            return e.includes(Or.tag) || e.includes(Or.nthoftype) ? [...e] : [...e, Or.tag]
        }

        function _o(e = {}) {
            const t = [...Jr];
            return e[Or.tag] && e[Or.nthoftype] && t.splice(t.indexOf(Or.tag), 1), t.map((t => {
                return (r = e)[n = t] ? r[n].join("") : "";
                var n, r
            })).join("")
        }

        function xo(e, t) {
            return "" === t ? e : function(e, t) {
                return [...e.map((e => t + Lr.DESCENDANT + e)), ...e.map((e => t + Lr.CHILD + e))]
            }(e, t)
        }

        function So(e, t, n = "", r) {
            const o = xo(bo(e, r.root, r), n);
            for (const t of o)
                if (Yr(e, t, r.root)) return t;
            return null
        }

        function Eo(e) {
            return {
                value: e,
                include: !1
            }
        }

        function ko(e, t, n = Lr.NONE) {
            const r = {};
            return t.forEach((t => {
                Reflect.set(r, t, function(e, t) {
                    return yo[t](e)
                }(e, t).map(Eo))
            })), {
                element: e,
                operator: n,
                selectors: r
            }
        }

        function Co({
            selectors: e,
            operator: t
        }) {
            let n = [...Jr];
            e[Or.tag] && e[Or.nthoftype] && (n = n.filter((e => e !== Or.tag)));
            let r = "";
            return n.forEach((t => {
                (e[t] || []).forEach((({
                    value: e,
                    include: t
                }) => {
                    t && (r += e)
                }))
            })), t + r
        }

        function To(e) {
            return [":root", ...Qr(e).reverse().map((e => {
                const t = ko(e, [Or.nthchild], Lr.CHILD);
                return t.selectors.nthchild.forEach((e => {
                    e.include = !0
                })), t
            })).map(Co)].join("")
        }
        const No = function e(t, n = {}) {
            const r = function(e) {
                    (e instanceof NodeList || e instanceof HTMLCollection) && (e = Array.from(e));
                    const t = (Array.isArray(e) ? e : [e]).filter(Ar);
                    return [...new Set(t)]
                }(t),
                o = function(e, t = {}) {
                    const n = Object.assign(Object.assign({}, jr), t);
                    return {
                        selectors: Mr(n.selectors),
                        whitelist: Br(n.whitelist),
                        blacklist: Br(n.blacklist),
                        root: Ur(n.root, e),
                        combineWithinSelector: !!n.combineWithinSelector,
                        combineBetweenSelectors: !!n.combineBetweenSelectors,
                        includeTag: !!n.includeTag,
                        maxCombinations: Wr(n.maxCombinations),
                        maxCandidates: Wr(n.maxCandidates)
                    }
                }(r[0], n);
            let i = "",
                a = o.root;

            function l() {
                return function(e, t, n = "", r) {
                    if (0 === e.length) return null;
                    const o = [e.length > 1 ? e : [], ...qr(e, t).map((e => [e]))];
                    for (const e of o) {
                        const t = So(e, 0, n, r);
                        if (t) return {
                            foundElements: e,
                            selector: t
                        }
                    }
                    return null
                }(r, a, i, o)
            }
            let u = l();
            for (; u;) {
                const {
                    foundElements: e,
                    selector: t
                } = u;
                if (Yr(r, t, o.root)) return t;
                a = e[0], i = t, u = l()
            }
            return r.length > 1 ? r.map((t => e(t, o))).join(Kr) : function(e) {
                return e.map(To).join(Kr)
            }(r)
        };
        var Ro = o(838);

        function Ao(e) {
            return e ? e.split(" ").length : 0
        }
        var Lo = o(65),
            Oo = o.n(Lo),
            Io = o(251),
            Do = o.n(Io);
        Oo().setLevel("warn", !0), Do().reg(Oo()), Do().apply(Oo(), {
            levelFormatter: e => e.toUpperCase(),
            timestampFormatter: e => e.toISOString(),
            format: function(e, t, n) {
                return `[${n}] ${e}`
            }
        });
        const jo = Oo(),
            Mo = Object.freeze({
                text: "",
                node: null,
                wordCount: 0,
                updatedAt: 0
            });
        let Po = { ...Mo
        };

        function zo() {
            return Po
        }

        function Bo(e) {
            if (!e) return void jo.debug(`scrollElementIntoView: invalid selector provided: ${e}`);
            const t = "string" == typeof e ? document.querySelector(e) : e;
            t ? t.scrollIntoView({
                inline: "center",
                block: "center",
                behavior: "smooth"
            }) : jo.debug(`scrollElementIntoView: no element found with provided selector: ${e}`)
        }
        const Fo = {
            ADD_ATTR: ["target"],
            ADD_TAGS: ["style"],
            FORBID_TAGS: ["script"],
            FORCE_BODY: !0
        };
        async function Uo(e, t) {
            return Ki({
                message: "logEvent",
                payload: {
                    eventName: e,
                    eventPayloadProperties: t
                }
            })
        }
        const Wo = JSON.parse('[{"id":"apollo","name":"ApolloDFT","shortName":"ApolloDFT","type":"In-House","license":"In-House","performanceScores":[{"text":"Analysis Speed","score":3},{"text":"Domain Versatility","score":5},{"text":"Adversarial Defense","score":4},{"text":"LLM Coverage","score":5}]},{"id":"binocular","name":"Binoculars","shortName":"Binoculars","type":"Open Source","license":"BSD 3-Clause","performanceScores":[{"text":"Analysis Speed","score":3},{"text":"Domain Versatility","score":4},{"text":"Adversarial Defense","score":3},{"text":"LLM Coverage","score":3}]},{"id":"uar","name":"UAR","shortName":"UAR","type":"Open Source","license":"Apache-2.0","performanceScores":[{"text":"Analysis Speed","score":4},{"text":"Domain Versatility","score":1},{"text":"Adversarial Defense","score":2},{"text":"LLM Coverage","score":2}]},{"id":"zippy","name":"ZipPy","shortName":"ZipPy","type":"Open Source","license":"MIT","performanceScores":[{"text":"Analysis Speed","score":5},{"text":"Domain Versatility","score":2},{"text":"Adversarial Defense","score":4},{"text":"LLM Coverage","score":1}]}]'),
            Ho = Wo.length,
            $o = Wo.map((e => e.id)),
            Vo = ["apollo", "zippy", "uar", "binocular"];

        function Yo(e) {
            return e.toSorted(((e, t) => Vo.indexOf(e) - Vo.indexOf(t)))
        }
        const Qo = ["Human", "AI", "Unknown"];

        function qo(e) {
            return e.toSorted(((e, t) => Qo.indexOf(e) - Qo.indexOf(t)))
        }
        const Ko = Wo.reduce(((e, t) => ({ ...e,
                [t.id]: t
            })), {}),
            Xo = Object.groupBy(Wo, (e => e.type)),
            Go = /(.*)_result/;

        function Jo(e) {
            return Go.exec(e)[1]
        }
        const Zo = $o.map((e => `${e}_result`));
        const ei = 32,
            ti = {
                NOT_ENOUGH_WORDS: {
                    code: "NOT_ENOUGH_WORDS",
                    description: `Selections must have at least ${ei} words to receive a reliable analysis.`
                },
                NO_MODEL_SELECTED: {
                    code: "NO_MODEL_SELECTED",
                    description: "You must select a model in order to start an analysis."
                },
                REQUEST_FAILED: {
                    code: "REQUEST_FAILED",
                    description: "Something went wrong. Please try again later."
                },
                REQUEST_TIMEOUT: {
                    code: "REQUEST_TIMEOUT",
                    description: "Analysis request timed out. Please try again later."
                },
                RATE_LIMIT_EXCEEDED: {
                    code: "RATE_LIMIT_EXCEEDED",
                    description: "Request rate limit exceeded. Please try again in a few minutes."
                }
            };
        var ni = o(802),
            ri = o.n(ni);
        const oi = {
            unorderedArrays: !0,
            unorderedSets: !0
        };

        function ii(e) {
            return function(e, t = {}) {
                return ri()(e, { ...oi,
                    ...t
                })
            }(e || o.g.crypto.randomUUID())
        }
        const ai = {
            analysisQueue: []
        };

        function li(e, t) {
            "invalid" === t.status || Object.keys(t.errors).length > 0 ? jo.debug(`Not refetching invalid analysis ${t.id}:`, {
                analysis: t
            }) : (ci(e, t.id, {
                result: null,
                status: "pending"
            }), Ki({
                message: "detectionRequest",
                payload: {
                    methods: t.models,
                    text: t.analyzedText,
                    id: t.id
                }
            }))
        }

        function ui(e, t) {
            return e.find((e => e.id === t))
        }

        function si(e) {
            const {
                analyzedText: t,
                models: n,
                selector: r
            } = e, o = {
                analyzedText: t,
                models: n,
                selector: r,
                url: window.location.href
            }, i = ii(o), a = [];
            let l = "new";
            const u = t.trim();
            return Ao(u) >= ei || (a.push(ti.NOT_ENOUGH_WORDS), l = "invalid"), 0 === n.length && (a.push(ti.NO_MODEL_SELECTED), l = "invalid"), { ...o,
                createdAt: Date.now(),
                errors: a,
                id: i,
                status: l,
                updatedAt: Date.now()
            }
        }

        function ci(e, t, n) {
            const r = ui(e, t);
            if (!r) return jo.error(`could not update analysis ${r.id} because it does not exist in the queue`), null;
            const o = Object.entries(n).reduce(((e, [t, n]) => void 0 === n ? e : { ...e,
                [t]: n
            }), {});
            return jo.debug(`updating analysis ${r.id} with params:`, {
                filteredUpdateParams: o
            }), Object.assign(r, o), e.sort(((e, t) => t.updatedAt - e.updatedAt)), r
        }(0, Mt.debounce)((e => Uo("analysis_text_highlighted", {
            word_count: e
        })), 1e3);
        const fi = gr({
                name: "analyses",
                initialState: ai,
                reducers: {
                    addAnalysisFromCurrentSelection: (e, t) => {
                        const {
                            analysisQueue: n
                        } = e, {
                            detectorMethods: r,
                            triggerMethod: o
                        } = t.payload, {
                            text: i,
                            node: a,
                            updatedAt: l
                        } = zo(), u = {
                            analyzedText: i,
                            selector: No(a),
                            models: r,
                            url: window.location.href
                        }, s = ii(u);
                        let c = ui(n, s);
                        c ? "invalid" === c.status && (c = ci(n, s, {
                            hasUpdate: !0
                        })) : (c = si(u), n.unshift(c), n.length > 10 && n.pop()), "new" === c.status && (li(n, c), Uo("analysis_triggered", {
                            highlight_method: "manual",
                            is_retry: !1,
                            models: c.models,
                            time_delta: Date.now() - l,
                            trigger_method: o,
                            word_count: Ao(c.analyzedText)
                        }))
                    },
                    setAnalysisAsDone: (e, t) => {
                        ci(e.analysisQueue, t.payload.id, {
                            hasUpdate: !0,
                            status: "done",
                            result: t.payload,
                            errors: t.payload.errors || []
                        })
                    },
                    setAnalysisAsFailed: (e, t) => {
                        ci(e.analysisQueue, t.payload.id, {
                            hasUpdate: !0,
                            status: "failed",
                            result: null,
                            errors: t.payload.errors
                        })
                    },
                    flashAnalysis: (e, t) => {
                        ci(e.analysisQueue, t.payload, {
                            hasUpdate: !0
                        })
                    },
                    unflashAnalysis: (e, t) => {
                        ci(e.analysisQueue, t.payload, {
                            hasUpdate: !1
                        })
                    },
                    syncAnalysesStateFromStorage: (e, t) => {
                        e.analysisQueue = t.payload.analysisQueue
                    },
                    removeAnalysis: (e, t) => {
                        const n = e.analysisQueue.findIndex((e => e.id === t.payload)),
                            r = e.analysisQueue[n];
                        e.analysisQueue.splice(n, 1), Uo("analysis_removed", {
                            models: r.models,
                            result: r.result
                        })
                    },
                    removeAllAnalyses: e => {
                        const t = e.analysisQueue.length;
                        e.analysisQueue = [], Uo("analysis_all_removed", {
                            analysis_count: t
                        })
                    },
                    removeAllFailedAnalyses: e => {
                        e.analysisQueue = e.analysisQueue.filter((e => ["failed", "invalid"].includes(e.status)))
                    },
                    retryAnalysis: (e, t) => {
                        const n = ci(e.analysisQueue, t.payload, {
                                status: "new"
                            }),
                            {
                                updatedAt: r
                            } = zo();
                        li(e.analysisQueue, n), Uo("analysis_triggered", {
                            highlight_method: "manual",
                            is_retry: !1,
                            models: n.models,
                            time_delta: Date.now() - r,
                            trigger_method: "retry_button",
                            word_count: Ao(n.analyzedText)
                        })
                    }
                }
            }),
            {
                addAnalysisFromCurrentSelection: di,
                setAnalysisAsDone: pi,
                syncAnalysesStateFromStorage: hi,
                removeAnalysis: gi,
                removeAllAnalyses: mi,
                flashAnalysis: vi,
                unflashAnalysis: yi,
                setAnalysisAsFailed: bi,
                removeAllFailedAnalyses: wi,
                retryAnalysis: _i
            } = fi.actions,
            xi = fi.reducer;
        const Si = "showedPrivacyNotice",
            Ei = "allowDataAcquisition",
            ki = "optIn",
            Ci = "showedWelcomePage";
        const Ti = 275,
            Ni = 100,
            Ri = {
                version: 7,
                currentPage: "analysis",
                isSidebarOpen: !1,
                isModelSelectionOpen: !1,
                sidebarWidth: Ti,
                [Ci]: !1,
                [Si]: !0,
                [Ei]: !0,
                [ki]: !0
            },
            Ai = gr({
                name: "app",
                initialState: Ri,
                reducers: {
                    setCurrentPage: (e, t) => {
                        const n = t.payload;
                        Uo("navigation_sidebar_page_changed", {
                            page: n
                        }), e.currentPage = n
                    },
                    openSidebar: e => {
                        const {
                            isSidebarOpen: t
                        } = e;
                        e.isSidebarOpen = !0, t || Uo("navigation_sidebar_opened")
                    },
                    closeSidebar: e => {
                        Uo("navigation_sidebar_closed"), e.isSidebarOpen = !1, e.isModelSelectionOpen = !1
                    },
                    toggleSidebar: e => {
                        e.isSidebarOpen = !e.isSidebarOpen, e.isSidebarOpen ? Uo("navigation_sidebar_opened") : (Uo("navigation_sidebar_closed"), e.isModelSelectionOpen = !1)
                    },
                    syncAppStateFromStorage: (e, t) => {
                        e.currentPage = t.payload.currentPage, e.sidebarWidth = t.payload.sidebarWidth, e[Si] = t.payload[Si], e[Ei] = t.payload[Ei], e[ki] = t.payload[ki], e[Ci] = t.payload[Ci]
                    },
                    setIsModelSelectionOpen: (e, t) => {
                        e.isModelSelectionOpen = t.payload
                    },
                    handleESCPress: e => {
                        e.isModelSelectionOpen || (e.isSidebarOpen = !1), e.isModelSelectionOpen = !1
                    },
                    setSidebarWidth: (e, t) => {
                        e.sidebarWidth = t.payload
                    },
                    resetSidebarWidth: e => {
                        e.sidebarWidth = Ti
                    }
                },
                extraReducers: e => {
                    e.addCase(di, (e => {
                        const {
                            isSidebarOpen: t,
                            currentPage: n
                        } = e;
                        e.isSidebarOpen = !0, e.currentPage = "analysis", t || Uo("navigation_sidebar_opened"), "analysis" !== n && Uo("navigation_sidebar_page_changed", {
                            page: "analysis"
                        })
                    }))
                }
            }),
            {
                setCurrentPage: Li,
                openSidebar: Oi,
                closeSidebar: Ii,
                toggleSidebar: Di,
                syncAppStateFromStorage: ji,
                setIsModelSelectionOpen: Mi,
                handleESCPress: Pi,
                setSidebarWidth: zi,
                resetSidebarWidth: Bi
            } = Ai.actions,
            Fi = Ai.reducer,
            Ui = {
                activeModelIds: $o,
                keyboardShortcuts: []
            },
            Wi = gr({
                name: "settings",
                initialState: Ui,
                reducers: {
                    setKeyboardShortcuts: (e, t) => {
                        e.keyboardShortcuts = t.payload
                    },
                    toggleActiveModel: (e, t) => {
                        const n = t.payload,
                            r = new Set(e.activeModelIds);
                        r.has(n) ? r.delete(n) : r.add(n);
                        const o = Array.from(r);
                        e.activeModelIds = o, Uo("settings_models_changed", {
                            models: o
                        })
                    },
                    syncSettingsStateFromStorage: (e, t) => {
                        e.activeModelIds = t.payload.activeModelIds
                    }
                }
            }),
            {
                setKeyboardShortcuts: Hi,
                toggleActiveModel: $i,
                syncSettingsStateFromStorage: Vi
            } = Wi.actions,
            Yi = Wi.reducer;
        let Qi;

        function qi(e = {
            initialState: {}
        }) {
            return Qi || (Qi = function(e) {
                const {
                    initialState: t
                } = e, n = {
                    reducer: {
                        app: Fi,
                        settings: Yi,
                        analyses: xi
                    },
                    middleware: e => e().concat([Rr])
                };
                return ur(t ? { ...n,
                    preloadedState: t
                } : n)
            }(e)), Qi
        }
        async function Ki(e) {
            return jo.debug("sending message to background:", {
                request: e
            }), await chrome.runtime.sendMessage(e)
        }
        class Xi extends n.Component {
            state = {
                error: null
            };
            static getDerivedStateFromError(e) {
                return {
                    error: e
                }
            }
            componentDidCatch(e, t) {
                ! function(e, t) {
                    Ki({
                        message: "errorOccurred",
                        payload: {
                            error: {
                                name: e.name,
                                cause: e.cause,
                                message: e.message,
                                stack: e.stack,
                                stacktrace: e.stacktrace
                            },
                            info: t
                        }
                    })
                }(e, t)
            }
            render() {
                return this.state.error ? (0, e.jsx)("p", {
                    className: Pt,
                    children: "Something went wrong. Please refresh the page."
                }) : this.props.children
            }
        }
        const Gi = {
                main: "YDkiV5Fv2Bn94yEI",
                analysisContent: "FZJCzluhPn4sTebY",
                analysisContainer: "rehCENBg40FLQpXt"
            },
            Ji = {
                textMaxHeight: "95px",
                main: "AmaOl2y5pbwy1ObH",
                clickable: "LQ5_uLnTJV7M56BZ",
                hasUpdate: "eaUaIfmMG0NFNTNb",
                highlight: "owgO3zLQ687McwOi",
                currentSelection: "DZIYteNWtbOSbVmy",
                analyzedText: "q5BZ2Y1TDP0Pzubl",
                header: "uEXXtL60LvMtRxJN",
                headerStatus: "_x3vBSKGN6mbbMxI",
                headerLoadingImage: "YglTzkUzx4dVqMtg",
                headerButtonsContainer: "OWUMadgC4ks2NyBN",
                headerRemoveButton: "DUl2g_dJRQMGgAKo",
                headerRemoveButtonImage: "tGfXmQpXMSZH9DeI",
                headerFailure: "JHo_oI_OjoX_eUdJ",
                headerRetryButton: "QMDxo1IkPXT2rP_8",
                textSelectionMain: "lYG1cFPad7Pilxc_",
                border: "wJ2qJkDIWPZsTfNK",
                caveatList: "CaYI8c2jGhUB0T4s",
                caveatText: "KSsd2FjjQtgSusOi",
                errorText: "KpOcypr9UyENMsJd KSsd2FjjQtgSusOi",
                warningText: "PZl36Gwpp9ZXQEtr KSsd2FjjQtgSusOi",
                humanText: "NFpEMrMa0QHP3PtT",
                aiText: "FqkLLsKQ6pkahAob",
                alternateModelComparisonSeparator: "qZ7MMNVPa5y7XoS0",
                alternateModelComparisonTitle: "oBNVGQprGJcamSfy"
            };

        function Zi() {
            return "undefined" != typeof window
        }

        function ea(e) {
            return ra(e) ? (e.nodeName || "").toLowerCase() : "#document"
        }

        function ta(e) {
            var t;
            return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
        }

        function na(e) {
            var t;
            return null == (t = (ra(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
        }

        function ra(e) {
            return !!Zi() && (e instanceof Node || e instanceof ta(e).Node)
        }

        function oa(e) {
            return !!Zi() && (e instanceof Element || e instanceof ta(e).Element)
        }

        function ia(e) {
            return !!Zi() && (e instanceof HTMLElement || e instanceof ta(e).HTMLElement)
        }

        function aa(e) {
            return !(!Zi() || "undefined" == typeof ShadowRoot) && (e instanceof ShadowRoot || e instanceof ta(e).ShadowRoot)
        }

        function la(e) {
            const {
                overflow: t,
                overflowX: n,
                overflowY: r,
                display: o
            } = pa(e);
            return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o)
        }

        function ua(e) {
            return ["table", "td", "th"].includes(ea(e))
        }

        function sa(e) {
            return [":popover-open", ":modal"].some((t => {
                try {
                    return e.matches(t)
                } catch (e) {
                    return !1
                }
            }))
        }

        function ca(e) {
            const t = fa(),
                n = oa(e) ? pa(e) : e;
            return ["transform", "translate", "scale", "rotate", "perspective"].some((e => !!n[e] && "none" !== n[e])) || !!n.containerType && "normal" !== n.containerType || !t && !!n.backdropFilter && "none" !== n.backdropFilter || !t && !!n.filter && "none" !== n.filter || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((e => (n.willChange || "").includes(e))) || ["paint", "layout", "strict", "content"].some((e => (n.contain || "").includes(e)))
        }

        function fa() {
            return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none")
        }

        function da(e) {
            return ["html", "body", "#document"].includes(ea(e))
        }

        function pa(e) {
            return ta(e).getComputedStyle(e)
        }

        function ha(e) {
            return oa(e) ? {
                scrollLeft: e.scrollLeft,
                scrollTop: e.scrollTop
            } : {
                scrollLeft: e.scrollX,
                scrollTop: e.scrollY
            }
        }

        function ga(e) {
            if ("html" === ea(e)) return e;
            const t = e.assignedSlot || e.parentNode || aa(e) && e.host || na(e);
            return aa(t) ? t.host : t
        }

        function ma(e) {
            const t = ga(e);
            return da(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ia(t) && la(t) ? t : ma(t)
        }

        function va(e, t, n) {
            var r;
            void 0 === t && (t = []), void 0 === n && (n = !0);
            const o = ma(e),
                i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
                a = ta(o);
            if (i) {
                const e = ya(a);
                return t.concat(a, a.visualViewport || [], la(o) ? o : [], e && n ? va(e) : [])
            }
            return t.concat(o, va(o, [], n))
        }

        function ya(e) {
            return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
        }

        function ba(e) {
            let t = e.activeElement;
            for (; null != (null == (n = t) || null == (n = n.shadowRoot) ? void 0 : n.activeElement);) {
                var n;
                t = t.shadowRoot.activeElement
            }
            return t
        }

        function wa(e, t) {
            if (!e || !t) return !1;
            const n = null == t.getRootNode ? void 0 : t.getRootNode();
            if (e.contains(t)) return !0;
            if (n && aa(n)) {
                let n = t;
                for (; n;) {
                    if (e === n) return !0;
                    n = n.parentNode || n.host
                }
            }
            return !1
        }

        function _a() {
            const e = navigator.userAgentData;
            return null != e && e.platform ? e.platform : navigator.platform
        }

        function xa() {
            const e = navigator.userAgentData;
            return e && Array.isArray(e.brands) ? e.brands.map((e => {
                let {
                    brand: t,
                    version: n
                } = e;
                return t + "/" + n
            })).join(" ") : navigator.userAgent
        }

        function Sa(e) {
            return !xa().includes("jsdom/") && (!ka() && 0 === e.width && 0 === e.height || ka() && 1 === e.width && 1 === e.height && 0 === e.pressure && 0 === e.detail && "mouse" === e.pointerType || e.width < 1 && e.height < 1 && 0 === e.pressure && 0 === e.detail && "touch" === e.pointerType)
        }

        function Ea() {
            return /apple/i.test(navigator.vendor)
        }

        function ka() {
            const e = /android/i;
            return e.test(_a()) || e.test(xa())
        }

        function Ca(e, t) {
            const n = ["mouse", "pen"];
            return t || n.push("", void 0), n.includes(e)
        }

        function Ta(e) {
            return (null == e ? void 0 : e.ownerDocument) || document
        }

        function Na(e, t) {
            if (null == t) return !1;
            if ("composedPath" in e) return e.composedPath().includes(t);
            const n = e;
            return null != n.target && t.contains(n.target)
        }

        function Ra(e) {
            return "composedPath" in e ? e.composedPath()[0] : e.target
        }
        const Aa = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";

        function La(e) {
            return ia(e) && e.matches(Aa)
        }
        var Oa = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"],
            Ia = Oa.join(","),
            Da = "undefined" == typeof Element,
            ja = Da ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
            Ma = !Da && Element.prototype.getRootNode ? function(e) {
                var t;
                return null == e || null === (t = e.getRootNode) || void 0 === t ? void 0 : t.call(e)
            } : function(e) {
                return null == e ? void 0 : e.ownerDocument
            },
            Pa = function e(t, n) {
                var r;
                void 0 === n && (n = !0);
                var o = null == t || null === (r = t.getAttribute) || void 0 === r ? void 0 : r.call(t, "inert");
                return "" === o || "true" === o || n && t && e(t.parentNode)
            },
            za = function(e, t, n) {
                if (Pa(e)) return [];
                var r = Array.prototype.slice.apply(e.querySelectorAll(Ia));
                return t && ja.call(e, Ia) && r.unshift(e), r = r.filter(n)
            },
            Ba = function e(t, n, r) {
                for (var o = [], i = Array.from(t); i.length;) {
                    var a = i.shift();
                    if (!Pa(a, !1))
                        if ("SLOT" === a.tagName) {
                            var l = a.assignedElements(),
                                u = e(l.length ? l : a.children, !0, r);
                            r.flatten ? o.push.apply(o, u) : o.push({
                                scopeParent: a,
                                candidates: u
                            })
                        } else {
                            ja.call(a, Ia) && r.filter(a) && (n || !t.includes(a)) && o.push(a);
                            var s = a.shadowRoot || "function" == typeof r.getShadowRoot && r.getShadowRoot(a),
                                c = !Pa(s, !1) && (!r.shadowRootFilter || r.shadowRootFilter(a));
                            if (s && c) {
                                var f = e(!0 === s ? a.children : s.children, !0, r);
                                r.flatten ? o.push.apply(o, f) : o.push({
                                    scopeParent: a,
                                    candidates: f
                                })
                            } else i.unshift.apply(i, a.children)
                        }
                }
                return o
            },
            Fa = function(e) {
                return !isNaN(parseInt(e.getAttribute("tabindex"), 10))
            },
            Ua = function(e) {
                if (!e) throw new Error("No node provided");
                return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || function(e) {
                    var t, n = null == e || null === (t = e.getAttribute) || void 0 === t ? void 0 : t.call(e, "contenteditable");
                    return "" === n || "true" === n
                }(e)) && !Fa(e) ? 0 : e.tabIndex
            },
            Wa = function(e, t) {
                return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex
            },
            Ha = function(e) {
                return "INPUT" === e.tagName
            },
            $a = function(e) {
                return function(e) {
                    return Ha(e) && "radio" === e.type
                }(e) && ! function(e) {
                    if (!e.name) return !0;
                    var t, n = e.form || Ma(e),
                        r = function(e) {
                            return n.querySelectorAll('input[type="radio"][name="' + e + '"]')
                        };
                    if ("undefined" != typeof window && void 0 !== window.CSS && "function" == typeof window.CSS.escape) t = r(window.CSS.escape(e.name));
                    else try {
                        t = r(e.name)
                    } catch (e) {
                        return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", e.message), !1
                    }
                    var o = function(e, t) {
                        for (var n = 0; n < e.length; n++)
                            if (e[n].checked && e[n].form === t) return e[n]
                    }(t, e.form);
                    return !o || o === e
                }(e)
            },
            Va = function(e) {
                var t = e.getBoundingClientRect(),
                    n = t.width,
                    r = t.height;
                return 0 === n && 0 === r
            },
            Ya = function(e, t) {
                var n = t.displayCheck,
                    r = t.getShadowRoot;
                if ("hidden" === getComputedStyle(e).visibility) return !0;
                var o = ja.call(e, "details>summary:first-of-type") ? e.parentElement : e;
                if (ja.call(o, "details:not([open]) *")) return !0;
                if (n && "full" !== n && "legacy-full" !== n) {
                    if ("non-zero-area" === n) return Va(e)
                } else {
                    if ("function" == typeof r) {
                        for (var i = e; e;) {
                            var a = e.parentElement,
                                l = Ma(e);
                            if (a && !a.shadowRoot && !0 === r(a)) return Va(e);
                            e = e.assignedSlot ? e.assignedSlot : a || l === e.ownerDocument ? a : l.host
                        }
                        e = i
                    }
                    if (function(e) {
                            var t, n, r, o, i = e && Ma(e),
                                a = null === (t = i) || void 0 === t ? void 0 : t.host,
                                l = !1;
                            if (i && i !== e)
                                for (l = !!(null !== (n = a) && void 0 !== n && null !== (r = n.ownerDocument) && void 0 !== r && r.contains(a) || null != e && null !== (o = e.ownerDocument) && void 0 !== o && o.contains(e)); !l && a;) {
                                    var u, s, c;
                                    l = !(null === (s = a = null === (u = i = Ma(a)) || void 0 === u ? void 0 : u.host) || void 0 === s || null === (c = s.ownerDocument) || void 0 === c || !c.contains(a))
                                }
                            return l
                        }(e)) return !e.getClientRects().length;
                    if ("legacy-full" !== n) return !0
                }
                return !1
            },
            Qa = function(e, t) {
                return !(t.disabled || Pa(t) || function(e) {
                    return Ha(e) && "hidden" === e.type
                }(t) || Ya(t, e) || function(e) {
                    return "DETAILS" === e.tagName && Array.prototype.slice.apply(e.children).some((function(e) {
                        return "SUMMARY" === e.tagName
                    }))
                }(t) || function(e) {
                    if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
                        for (var t = e.parentElement; t;) {
                            if ("FIELDSET" === t.tagName && t.disabled) {
                                for (var n = 0; n < t.children.length; n++) {
                                    var r = t.children.item(n);
                                    if ("LEGEND" === r.tagName) return !!ja.call(t, "fieldset[disabled] *") || !r.contains(e)
                                }
                                return !0
                            }
                            t = t.parentElement
                        }
                    return !1
                }(t))
            },
            qa = function(e, t) {
                return !($a(t) || Ua(t) < 0 || !Qa(e, t))
            },
            Ka = function(e) {
                var t = parseInt(e.getAttribute("tabindex"), 10);
                return !!(isNaN(t) || t >= 0)
            },
            Xa = function e(t) {
                var n = [],
                    r = [];
                return t.forEach((function(t, o) {
                    var i = !!t.scopeParent,
                        a = i ? t.scopeParent : t,
                        l = function(e, t) {
                            var n = Ua(e);
                            return n < 0 && t && !Fa(e) ? 0 : n
                        }(a, i),
                        u = i ? e(t.candidates) : a;
                    0 === l ? i ? n.push.apply(n, u) : n.push(a) : r.push({
                        documentOrder: o,
                        tabIndex: l,
                        item: t,
                        isScope: i,
                        content: u
                    })
                })), r.sort(Wa).reduce((function(e, t) {
                    return t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e
                }), []).concat(n)
            },
            Ga = function(e, t) {
                var n;
                return n = (t = t || {}).getShadowRoot ? Ba([e], t.includeContainer, {
                    filter: qa.bind(null, t),
                    flatten: !1,
                    getShadowRoot: t.getShadowRoot,
                    shadowRootFilter: Ka
                }) : za(e, t.includeContainer, qa.bind(null, t)), Xa(n)
            };
        const Ja = Math.min,
            Za = Math.max,
            el = Math.round,
            tl = (Math.floor, e => ({
                x: e,
                y: e
            }));

        function nl(e) {
            return e.split("-")[0]
        }

        function rl(e) {
            return e.split("-")[1]
        }

        function ol(e) {
            return "y" === e ? "height" : "width"
        }

        function il(e) {
            return ["top", "bottom"].includes(nl(e)) ? "y" : "x"
        }

        function al(e) {
            return "x" === il(e) ? "y" : "x"
        }

        function ll(e) {
            const {
                x: t,
                y: n,
                width: r,
                height: o
            } = e;
            return {
                width: r,
                height: o,
                top: n,
                left: t,
                right: t + r,
                bottom: n + o,
                x: t,
                y: n
            }
        }

        function ul(e, t, n) {
            let {
                reference: r,
                floating: o
            } = e;
            const i = il(t),
                a = al(t),
                l = ol(a),
                u = nl(t),
                s = "y" === i,
                c = r.x + r.width / 2 - o.width / 2,
                f = r.y + r.height / 2 - o.height / 2,
                d = r[l] / 2 - o[l] / 2;
            let p;
            switch (u) {
                case "top":
                    p = {
                        x: c,
                        y: r.y - o.height
                    };
                    break;
                case "bottom":
                    p = {
                        x: c,
                        y: r.y + r.height
                    };
                    break;
                case "right":
                    p = {
                        x: r.x + r.width,
                        y: f
                    };
                    break;
                case "left":
                    p = {
                        x: r.x - o.width,
                        y: f
                    };
                    break;
                default:
                    p = {
                        x: r.x,
                        y: r.y
                    }
            }
            switch (rl(t)) {
                case "start":
                    p[a] -= d * (n && s ? -1 : 1);
                    break;
                case "end":
                    p[a] += d * (n && s ? -1 : 1)
            }
            return p
        }

        function sl(e) {
            const t = pa(e);
            let n = parseFloat(t.width) || 0,
                r = parseFloat(t.height) || 0;
            const o = ia(e),
                i = o ? e.offsetWidth : n,
                a = o ? e.offsetHeight : r,
                l = el(n) !== i || el(r) !== a;
            return l && (n = i, r = a), {
                width: n,
                height: r,
                $: l
            }
        }

        function cl(e) {
            return oa(e) ? e : e.contextElement
        }

        function fl(e) {
            const t = cl(e);
            if (!ia(t)) return tl(1);
            const n = t.getBoundingClientRect(),
                {
                    width: r,
                    height: o,
                    $: i
                } = sl(t);
            let a = (i ? el(n.width) : n.width) / r,
                l = (i ? el(n.height) : n.height) / o;
            return a && Number.isFinite(a) || (a = 1), l && Number.isFinite(l) || (l = 1), {
                x: a,
                y: l
            }
        }
        const dl = tl(0);

        function pl(e) {
            const t = ta(e);
            return fa() && t.visualViewport ? {
                x: t.visualViewport.offsetLeft,
                y: t.visualViewport.offsetTop
            } : dl
        }

        function hl(e, t, n, r) {
            void 0 === t && (t = !1), void 0 === n && (n = !1);
            const o = e.getBoundingClientRect(),
                i = cl(e);
            let a = tl(1);
            t && (r ? oa(r) && (a = fl(r)) : a = fl(e));
            const l = function(e, t, n) {
                return void 0 === t && (t = !1), !(!n || t && n !== ta(e)) && t
            }(i, n, r) ? pl(i) : tl(0);
            let u = (o.left + l.x) / a.x,
                s = (o.top + l.y) / a.y,
                c = o.width / a.x,
                f = o.height / a.y;
            if (i) {
                const e = ta(i),
                    t = r && oa(r) ? ta(r) : r;
                let n = e,
                    o = ya(n);
                for (; o && r && t !== n;) {
                    const e = fl(o),
                        t = o.getBoundingClientRect(),
                        r = pa(o),
                        i = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
                        a = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
                    u *= e.x, s *= e.y, c *= e.x, f *= e.y, u += i, s += a, n = ta(o), o = ya(n)
                }
            }
            return ll({
                width: c,
                height: f,
                x: u,
                y: s
            })
        }

        function gl(e, t) {
            const n = ha(e).scrollLeft;
            return t ? t.left + n : hl(na(e)).left + n
        }

        function ml(e, t, n) {
            void 0 === n && (n = !1);
            const r = e.getBoundingClientRect();
            return {
                x: r.left + t.scrollLeft - (n ? 0 : gl(e, r)),
                y: r.top + t.scrollTop
            }
        }

        function vl(e, t, n) {
            let r;
            if ("viewport" === t) r = function(e, t) {
                const n = ta(e),
                    r = na(e),
                    o = n.visualViewport;
                let i = r.clientWidth,
                    a = r.clientHeight,
                    l = 0,
                    u = 0;
                if (o) {
                    i = o.width, a = o.height;
                    const e = fa();
                    (!e || e && "fixed" === t) && (l = o.offsetLeft, u = o.offsetTop)
                }
                return {
                    width: i,
                    height: a,
                    x: l,
                    y: u
                }
            }(e, n);
            else if ("document" === t) r = function(e) {
                const t = na(e),
                    n = ha(e),
                    r = e.ownerDocument.body,
                    o = Za(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
                    i = Za(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
                let a = -n.scrollLeft + gl(e);
                const l = -n.scrollTop;
                return "rtl" === pa(r).direction && (a += Za(t.clientWidth, r.clientWidth) - o), {
                    width: o,
                    height: i,
                    x: a,
                    y: l
                }
            }(na(e));
            else if (oa(t)) r = function(e, t) {
                const n = hl(e, !0, "fixed" === t),
                    r = n.top + e.clientTop,
                    o = n.left + e.clientLeft,
                    i = ia(e) ? fl(e) : tl(1);
                return {
                    width: e.clientWidth * i.x,
                    height: e.clientHeight * i.y,
                    x: o * i.x,
                    y: r * i.y
                }
            }(t, n);
            else {
                const n = pl(e);
                r = {
                    x: t.x - n.x,
                    y: t.y - n.y,
                    width: t.width,
                    height: t.height
                }
            }
            return ll(r)
        }

        function yl(e, t) {
            const n = ga(e);
            return !(n === t || !oa(n) || da(n)) && ("fixed" === pa(n).position || yl(n, t))
        }

        function bl(e, t, n) {
            const r = ia(t),
                o = na(t),
                i = "fixed" === n,
                a = hl(e, !0, i, t);
            let l = {
                scrollLeft: 0,
                scrollTop: 0
            };
            const u = tl(0);
            if (r || !r && !i)
                if (("body" !== ea(t) || la(o)) && (l = ha(t)), r) {
                    const e = hl(t, !0, i, t);
                    u.x = e.x + t.clientLeft, u.y = e.y + t.clientTop
                } else o && (u.x = gl(o));
            const s = !o || r || i ? tl(0) : ml(o, l);
            return {
                x: a.left + l.scrollLeft - u.x - s.x,
                y: a.top + l.scrollTop - u.y - s.y,
                width: a.width,
                height: a.height
            }
        }

        function wl(e) {
            return "static" === pa(e).position
        }

        function _l(e, t) {
            if (!ia(e) || "fixed" === pa(e).position) return null;
            if (t) return t(e);
            let n = e.offsetParent;
            return na(e) === n && (n = n.ownerDocument.body), n
        }

        function xl(e, t) {
            const n = ta(e);
            if (sa(e)) return n;
            if (!ia(e)) {
                let t = ga(e);
                for (; t && !da(t);) {
                    if (oa(t) && !wl(t)) return t;
                    t = ga(t)
                }
                return n
            }
            let r = _l(e, t);
            for (; r && ua(r) && wl(r);) r = _l(r, t);
            return r && da(r) && wl(r) && !ca(r) ? n : r || function(e) {
                let t = ga(e);
                for (; ia(t) && !da(t);) {
                    if (ca(t)) return t;
                    if (sa(t)) return null;
                    t = ga(t)
                }
                return null
            }(e) || n
        }
        const Sl = {
            convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
                let {
                    elements: t,
                    rect: n,
                    offsetParent: r,
                    strategy: o
                } = e;
                const i = "fixed" === o,
                    a = na(r),
                    l = !!t && sa(t.floating);
                if (r === a || l && i) return n;
                let u = {
                        scrollLeft: 0,
                        scrollTop: 0
                    },
                    s = tl(1);
                const c = tl(0),
                    f = ia(r);
                if ((f || !f && !i) && (("body" !== ea(r) || la(a)) && (u = ha(r)), ia(r))) {
                    const e = hl(r);
                    s = fl(r), c.x = e.x + r.clientLeft, c.y = e.y + r.clientTop
                }
                const d = !a || f || i ? tl(0) : ml(a, u, !0);
                return {
                    width: n.width * s.x,
                    height: n.height * s.y,
                    x: n.x * s.x - u.scrollLeft * s.x + c.x + d.x,
                    y: n.y * s.y - u.scrollTop * s.y + c.y + d.y
                }
            },
            getDocumentElement: na,
            getClippingRect: function(e) {
                let {
                    element: t,
                    boundary: n,
                    rootBoundary: r,
                    strategy: o
                } = e;
                const i = [..."clippingAncestors" === n ? sa(t) ? [] : function(e, t) {
                        const n = t.get(e);
                        if (n) return n;
                        let r = va(e, [], !1).filter((e => oa(e) && "body" !== ea(e))),
                            o = null;
                        const i = "fixed" === pa(e).position;
                        let a = i ? ga(e) : e;
                        for (; oa(a) && !da(a);) {
                            const t = pa(a),
                                n = ca(a);
                            n || "fixed" !== t.position || (o = null), (i ? !n && !o : !n && "static" === t.position && o && ["absolute", "fixed"].includes(o.position) || la(a) && !n && yl(e, a)) ? r = r.filter((e => e !== a)) : o = t, a = ga(a)
                        }
                        return t.set(e, r), r
                    }(t, this._c) : [].concat(n), r],
                    a = i[0],
                    l = i.reduce(((e, n) => {
                        const r = vl(t, n, o);
                        return e.top = Za(r.top, e.top), e.right = Ja(r.right, e.right), e.bottom = Ja(r.bottom, e.bottom), e.left = Za(r.left, e.left), e
                    }), vl(t, a, o));
                return {
                    width: l.right - l.left,
                    height: l.bottom - l.top,
                    x: l.left,
                    y: l.top
                }
            },
            getOffsetParent: xl,
            getElementRects: async function(e) {
                const t = this.getOffsetParent || xl,
                    n = this.getDimensions,
                    r = await n(e.floating);
                return {
                    reference: bl(e.reference, await t(e.floating), e.strategy),
                    floating: {
                        x: 0,
                        y: 0,
                        width: r.width,
                        height: r.height
                    }
                }
            },
            getClientRects: function(e) {
                return Array.from(e.getClientRects())
            },
            getDimensions: function(e) {
                const {
                    width: t,
                    height: n
                } = sl(e);
                return {
                    width: t,
                    height: n
                }
            },
            getScale: fl,
            isElement: oa,
            isRTL: function(e) {
                return "rtl" === pa(e).direction
            }
        };
        const El = function(e) {
                return void 0 === e && (e = 0), {
                    name: "offset",
                    options: e,
                    async fn(t) {
                        var n, r;
                        const {
                            x: o,
                            y: i,
                            placement: a,
                            middlewareData: l
                        } = t, u = await async function(e, t) {
                            const {
                                placement: n,
                                platform: r,
                                elements: o
                            } = e, i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)), a = nl(n), l = rl(n), u = "y" === il(n), s = ["left", "top"].includes(a) ? -1 : 1, c = i && u ? -1 : 1, f = (p = e, "function" == typeof(d = t) ? d(p) : d);
                            var d, p;
                            let {
                                mainAxis: h,
                                crossAxis: g,
                                alignmentAxis: m
                            } = "number" == typeof f ? {
                                mainAxis: f,
                                crossAxis: 0,
                                alignmentAxis: null
                            } : {
                                mainAxis: f.mainAxis || 0,
                                crossAxis: f.crossAxis || 0,
                                alignmentAxis: f.alignmentAxis
                            };
                            return l && "number" == typeof m && (g = "end" === l ? -1 * m : m), u ? {
                                x: g * c,
                                y: h * s
                            } : {
                                x: h * s,
                                y: g * c
                            }
                        }(t, e);
                        return a === (null == (n = l.offset) ? void 0 : n.placement) && null != (r = l.arrow) && r.alignmentOffset ? {} : {
                            x: o + u.x,
                            y: i + u.y,
                            data: { ...u,
                                placement: a
                            }
                        }
                    }
                }
            },
            kl = (e, t, n) => {
                const r = new Map,
                    o = {
                        platform: Sl,
                        ...n
                    },
                    i = { ...o.platform,
                        _c: r
                    };
                return (async (e, t, n) => {
                    const {
                        placement: r = "bottom",
                        strategy: o = "absolute",
                        middleware: i = [],
                        platform: a
                    } = n, l = i.filter(Boolean), u = await (null == a.isRTL ? void 0 : a.isRTL(t));
                    let s = await a.getElementRects({
                            reference: e,
                            floating: t,
                            strategy: o
                        }),
                        {
                            x: c,
                            y: f
                        } = ul(s, r, u),
                        d = r,
                        p = {},
                        h = 0;
                    for (let n = 0; n < l.length; n++) {
                        const {
                            name: i,
                            fn: g
                        } = l[n], {
                            x: m,
                            y: v,
                            data: y,
                            reset: b
                        } = await g({
                            x: c,
                            y: f,
                            initialPlacement: r,
                            placement: d,
                            strategy: o,
                            middlewareData: p,
                            rects: s,
                            platform: a,
                            elements: {
                                reference: e,
                                floating: t
                            }
                        });
                        c = null != m ? m : c, f = null != v ? v : f, p = { ...p,
                            [i]: { ...p[i],
                                ...y
                            }
                        }, b && h <= 50 && (h++, "object" == typeof b && (b.placement && (d = b.placement), b.rects && (s = !0 === b.rects ? await a.getElementRects({
                            reference: e,
                            floating: t,
                            strategy: o
                        }) : b.rects), ({
                            x: c,
                            y: f
                        } = ul(s, d, u))), n = -1)
                    }
                    return {
                        x: c,
                        y: f,
                        placement: d,
                        strategy: o,
                        middlewareData: p
                    }
                })(e, t, { ...o,
                    platform: i
                })
            };
        var Cl = "undefined" != typeof document ? n.useLayoutEffect : n.useEffect;

        function Tl(e, t) {
            if (e === t) return !0;
            if (typeof e != typeof t) return !1;
            if ("function" == typeof e && e.toString() === t.toString()) return !0;
            let n, r, o;
            if (e && t && "object" == typeof e) {
                if (Array.isArray(e)) {
                    if (n = e.length, n !== t.length) return !1;
                    for (r = n; 0 != r--;)
                        if (!Tl(e[r], t[r])) return !1;
                    return !0
                }
                if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length) return !1;
                for (r = n; 0 != r--;)
                    if (!{}.hasOwnProperty.call(t, o[r])) return !1;
                for (r = n; 0 != r--;) {
                    const n = o[r];
                    if (("_owner" !== n || !e.$$typeof) && !Tl(e[n], t[n])) return !1
                }
                return !0
            }
            return e != e && t != t
        }

        function Nl(e) {
            if ("undefined" == typeof window) return 1;
            return (e.ownerDocument.defaultView || window).devicePixelRatio || 1
        }

        function Rl(e, t) {
            const n = Nl(e);
            return Math.round(t * n) / n
        }

        function Al(e) {
            const t = n.useRef(e);
            return Cl((() => {
                t.current = e
            })), t
        }
        const Ll = (e, t) => ({ ...El(e),
            options: [e, t]
        });
        const Ol = { ...r
            },
            Il = Ol.useInsertionEffect || (e => e());

        function Dl(e) {
            const t = n.useRef((() => {
                0
            }));
            return Il((() => {
                t.current = e
            })), n.useCallback((function() {
                for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                return null == t.current ? void 0 : t.current(...n)
            }), [])
        }
        const jl = "ArrowUp",
            Ml = "ArrowDown",
            Pl = "ArrowLeft",
            zl = "ArrowRight";
        var Bl = "undefined" != typeof document ? n.useLayoutEffect : n.useEffect;
        const Fl = [Pl, zl],
            Ul = [jl, Ml];
        let Wl = !1,
            Hl = 0;
        const $l = () => "floating-ui-" + Math.random().toString(36).slice(2, 6) + Hl++;
        const Vl = Ol.useId || function() {
            const [e, t] = n.useState((() => Wl ? $l() : void 0));
            return Bl((() => {
                null == e && t($l())
            }), []), n.useEffect((() => {
                Wl = !0
            }), []), e
        };

        function Yl() {
            const e = new Map;
            return {
                emit(t, n) {
                    var r;
                    null == (r = e.get(t)) || r.forEach((e => e(n)))
                },
                on(t, n) {
                    e.set(t, [...e.get(t) || [], n])
                },
                off(t, n) {
                    var r;
                    e.set(t, (null == (r = e.get(t)) ? void 0 : r.filter((e => e !== n))) || [])
                }
            }
        }
        const Ql = n.createContext(null),
            ql = n.createContext(null),
            Kl = () => {
                var e;
                return (null == (e = n.useContext(Ql)) ? void 0 : e.id) || null
            },
            Xl = () => n.useContext(ql);

        function Gl(e) {
            return "data-floating-ui-" + e
        }

        function Jl(e) {
            const t = (0, n.useRef)(e);
            return Bl((() => {
                t.current = e
            })), t
        }
        const Zl = Gl("safe-polygon");

        function eu(e, t, n) {
            return n && !Ca(n) ? 0 : "number" == typeof e ? e : null == e ? void 0 : e[t]
        }

        function tu(e, t) {
            let n = e.filter((e => {
                    var n;
                    return e.parentId === t && (null == (n = e.context) ? void 0 : n.open)
                })),
                r = n;
            for (; r.length;) r = e.filter((e => {
                var t;
                return null == (t = r) ? void 0 : t.some((t => {
                    var n;
                    return e.parentId === t.id && (null == (n = e.context) ? void 0 : n.open)
                }))
            })), n = n.concat(r);
            return n
        }
        const nu = () => ({
            getShadowRoot: !0,
            displayCheck: "function" == typeof ResizeObserver && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
        });

        function ru(e, t) {
            const n = Ga(e, nu());
            "prev" === t && n.reverse();
            const r = n.indexOf(ba(Ta(e)));
            return n.slice(r + 1)[0]
        }

        function ou() {
            return ru(document.body, "next")
        }

        function iu() {
            return ru(document.body, "prev")
        }

        function au(e, t) {
            const n = t || e.currentTarget,
                r = e.relatedTarget;
            return !r || !wa(n, r)
        }

        function lu(e) {
            Ga(e, nu()).forEach((e => {
                e.dataset.tabindex = e.getAttribute("tabindex") || "", e.setAttribute("tabindex", "-1")
            }))
        }

        function uu(e) {
            e.querySelectorAll("[data-tabindex]").forEach((e => {
                const t = e.dataset.tabindex;
                delete e.dataset.tabindex, t ? e.setAttribute("tabindex", t) : e.removeAttribute("tabindex")
            }))
        }
        const su = {
            border: 0,
            clip: "rect(0 0 0 0)",
            height: "1px",
            margin: "-1px",
            overflow: "hidden",
            padding: 0,
            position: "fixed",
            whiteSpace: "nowrap",
            width: "1px",
            top: 0,
            left: 0
        };

        function cu(e) {
            "Tab" === e.key && (e.target, clearTimeout(undefined))
        }
        const fu = n.forwardRef((function(t, r) {
                const [o, i] = n.useState();
                Bl((() => (Ea() && i("button"), document.addEventListener("keydown", cu), () => {
                    document.removeEventListener("keydown", cu)
                })), []);
                const a = {
                    ref: r,
                    tabIndex: 0,
                    role: o,
                    "aria-hidden": !o || void 0,
                    [Gl("focus-guard")]: "",
                    style: su
                };
                return (0, e.jsx)("span", { ...t,
                    ...a
                })
            })),
            du = n.createContext(null),
            pu = Gl("portal");

        function hu(t) {
            const {
                children: r,
                id: o,
                root: i,
                preserveTabOrder: a = !0
            } = t, l = function(e) {
                void 0 === e && (e = {});
                const {
                    id: t,
                    root: r
                } = e, o = Vl(), i = gu(), [a, l] = n.useState(null), u = n.useRef(null);
                return Bl((() => () => {
                    null == a || a.remove(), queueMicrotask((() => {
                        u.current = null
                    }))
                }), [a]), Bl((() => {
                    if (!o) return;
                    if (u.current) return;
                    const e = t ? document.getElementById(t) : null;
                    if (!e) return;
                    const n = document.createElement("div");
                    n.id = o, n.setAttribute(pu, ""), e.appendChild(n), u.current = n, l(n)
                }), [t, o]), Bl((() => {
                    if (null === r) return;
                    if (!o) return;
                    if (u.current) return;
                    let e = r || (null == i ? void 0 : i.portalNode);
                    e && !oa(e) && (e = e.current), e = e || document.body;
                    let n = null;
                    t && (n = document.createElement("div"), n.id = t, e.appendChild(n));
                    const a = document.createElement("div");
                    a.id = o, a.setAttribute(pu, ""), e = n || e, e.appendChild(a), u.current = a, l(a)
                }), [t, r, o, i]), a
            }({
                id: o,
                root: i
            }), [u, s] = n.useState(null), c = n.useRef(null), f = n.useRef(null), d = n.useRef(null), p = n.useRef(null), h = null == u ? void 0 : u.modal, g = null == u ? void 0 : u.open, m = !!u && !u.modal && u.open && a && !(!i && !l);
            return n.useEffect((() => {
                if (l && a && !h) return l.addEventListener("focusin", e, !0), l.addEventListener("focusout", e, !0), () => {
                    l.removeEventListener("focusin", e, !0), l.removeEventListener("focusout", e, !0)
                };

                function e(e) {
                    if (l && au(e)) {
                        ("focusin" === e.type ? uu : lu)(l)
                    }
                }
            }), [l, a, h]), n.useEffect((() => {
                l && (g || uu(l))
            }), [g, l]), (0, e.jsxs)(du.Provider, {
                value: n.useMemo((() => ({
                    preserveTabOrder: a,
                    beforeOutsideRef: c,
                    afterOutsideRef: f,
                    beforeInsideRef: d,
                    afterInsideRef: p,
                    portalNode: l,
                    setFocusManagerState: s
                })), [a, l]),
                children: [m && l && (0, e.jsx)(fu, {
                    "data-type": "outside",
                    ref: c,
                    onFocus: e => {
                        if (au(e, l)) {
                            var t;
                            null == (t = d.current) || t.focus()
                        } else {
                            const e = iu() || (null == u ? void 0 : u.domReference);
                            null == e || e.focus()
                        }
                    }
                }), m && l && (0, e.jsx)("span", {
                    "aria-owns": l.id,
                    style: su
                }), l && A.createPortal(r, l), m && l && (0, e.jsx)(fu, {
                    "data-type": "outside",
                    ref: f,
                    onFocus: e => {
                        if (au(e, l)) {
                            var t;
                            null == (t = p.current) || t.focus()
                        } else {
                            const t = ou() || (null == u ? void 0 : u.domReference);
                            null == t || t.focus(), (null == u ? void 0 : u.closeOnFocusOut) && (null == u || u.onOpenChange(!1, e.nativeEvent, "focus-out"))
                        }
                    }
                })]
            })
        }
        const gu = () => n.useContext(du),
            mu = "data-floating-ui-focusable";
        const vu = {
                pointerdown: "onPointerDown",
                mousedown: "onMouseDown",
                click: "onClick"
            },
            yu = {
                pointerdown: "onPointerDownCapture",
                mousedown: "onMouseDownCapture",
                click: "onClickCapture"
            },
            bu = e => {
                var t, n;
                return {
                    escapeKey: "boolean" == typeof e ? e : null != (t = null == e ? void 0 : e.escapeKey) && t,
                    outsidePress: "boolean" == typeof e ? e : null == (n = null == e ? void 0 : e.outsidePress) || n
                }
            };

        function wu(e) {
            void 0 === e && (e = {});
            const {
                nodeId: t
            } = e, r = function(e) {
                const {
                    open: t = !1,
                    onOpenChange: r,
                    elements: o
                } = e, i = Vl(), a = n.useRef({}), [l] = n.useState((() => Yl())), u = null != Kl(), [s, c] = n.useState(o.reference), f = Dl(((e, t, n) => {
                    a.current.openEvent = e ? t : void 0, l.emit("openchange", {
                        open: e,
                        event: t,
                        reason: n,
                        nested: u
                    }), null == r || r(e, t, n)
                })), d = n.useMemo((() => ({
                    setPositionReference: c
                })), []), p = n.useMemo((() => ({
                    reference: s || o.reference || null,
                    floating: o.floating || null,
                    domReference: o.reference
                })), [s, o.reference, o.floating]);
                return n.useMemo((() => ({
                    dataRef: a,
                    open: t,
                    onOpenChange: f,
                    elements: p,
                    events: l,
                    floatingId: i,
                    refs: d
                })), [t, f, p, l, i, d])
            }({ ...e,
                elements: {
                    reference: null,
                    floating: null,
                    ...e.elements
                }
            }), o = e.rootContext || r, i = o.elements, [a, l] = n.useState(null), [u, s] = n.useState(null), c = (null == i ? void 0 : i.domReference) || a, f = n.useRef(null), d = Xl();
            Bl((() => {
                c && (f.current = c)
            }), [c]);
            const p = function(e) {
                    void 0 === e && (e = {});
                    const {
                        placement: t = "bottom",
                        strategy: r = "absolute",
                        middleware: o = [],
                        platform: i,
                        elements: {
                            reference: a,
                            floating: l
                        } = {},
                        transform: u = !0,
                        whileElementsMounted: s,
                        open: c
                    } = e, [f, d] = n.useState({
                        x: 0,
                        y: 0,
                        strategy: r,
                        placement: t,
                        middlewareData: {},
                        isPositioned: !1
                    }), [p, h] = n.useState(o);
                    Tl(p, o) || h(o);
                    const [g, m] = n.useState(null), [v, y] = n.useState(null), b = n.useCallback((e => {
                        e !== S.current && (S.current = e, m(e))
                    }), []), w = n.useCallback((e => {
                        e !== E.current && (E.current = e, y(e))
                    }), []), _ = a || g, x = l || v, S = n.useRef(null), E = n.useRef(null), k = n.useRef(f), C = null != s, T = Al(s), N = Al(i), R = Al(c), L = n.useCallback((() => {
                        if (!S.current || !E.current) return;
                        const e = {
                            placement: t,
                            strategy: r,
                            middleware: p
                        };
                        N.current && (e.platform = N.current), kl(S.current, E.current, e).then((e => {
                            const t = { ...e,
                                isPositioned: !1 !== R.current
                            };
                            O.current && !Tl(k.current, t) && (k.current = t, A.flushSync((() => {
                                d(t)
                            })))
                        }))
                    }), [p, t, r, N, R]);
                    Cl((() => {
                        !1 === c && k.current.isPositioned && (k.current.isPositioned = !1, d((e => ({ ...e,
                            isPositioned: !1
                        }))))
                    }), [c]);
                    const O = n.useRef(!1);
                    Cl((() => (O.current = !0, () => {
                        O.current = !1
                    })), []), Cl((() => {
                        if (_ && (S.current = _), x && (E.current = x), _ && x) {
                            if (T.current) return T.current(_, x, L);
                            L()
                        }
                    }), [_, x, L, T, C]);
                    const I = n.useMemo((() => ({
                            reference: S,
                            floating: E,
                            setReference: b,
                            setFloating: w
                        })), [b, w]),
                        D = n.useMemo((() => ({
                            reference: _,
                            floating: x
                        })), [_, x]),
                        j = n.useMemo((() => {
                            const e = {
                                position: r,
                                left: 0,
                                top: 0
                            };
                            if (!D.floating) return e;
                            const t = Rl(D.floating, f.x),
                                n = Rl(D.floating, f.y);
                            return u ? { ...e,
                                transform: "translate(" + t + "px, " + n + "px)",
                                ...Nl(D.floating) >= 1.5 && {
                                    willChange: "transform"
                                }
                            } : {
                                position: r,
                                left: t,
                                top: n
                            }
                        }), [r, u, D.floating, f.x, f.y]);
                    return n.useMemo((() => ({ ...f,
                        update: L,
                        refs: I,
                        elements: D,
                        floatingStyles: j
                    })), [f, L, I, D, j])
                }({ ...e,
                    elements: { ...i,
                        ...u && {
                            reference: u
                        }
                    }
                }),
                h = n.useCallback((e => {
                    const t = oa(e) ? {
                        getBoundingClientRect: () => e.getBoundingClientRect(),
                        contextElement: e
                    } : e;
                    s(t), p.refs.setReference(t)
                }), [p.refs]),
                g = n.useCallback((e => {
                    (oa(e) || null === e) && (f.current = e, l(e)), (oa(p.refs.reference.current) || null === p.refs.reference.current || null !== e && !oa(e)) && p.refs.setReference(e)
                }), [p.refs]),
                m = n.useMemo((() => ({ ...p.refs,
                    setReference: g,
                    setPositionReference: h,
                    domReference: f
                })), [p.refs, g, h]),
                v = n.useMemo((() => ({ ...p.elements,
                    domReference: c
                })), [p.elements, c]),
                y = n.useMemo((() => ({ ...p,
                    ...o,
                    refs: m,
                    elements: v,
                    nodeId: t
                })), [p, m, v, t, o]);
            return Bl((() => {
                o.dataRef.current.floatingContext = y;
                const e = null == d ? void 0 : d.nodesRef.current.find((e => e.id === t));
                e && (e.context = y)
            })), n.useMemo((() => ({ ...p,
                context: y,
                refs: m,
                elements: v
            })), [p, m, v, y])
        }

        function _u(e, t) {
            void 0 === t && (t = {});
            const {
                open: r,
                onOpenChange: o,
                events: i,
                dataRef: a,
                elements: l
            } = e, {
                enabled: u = !0,
                visibleOnly: s = !0
            } = t, c = n.useRef(!1), f = n.useRef(), d = n.useRef(!0);
            n.useEffect((() => {
                if (!u) return;
                const e = ta(l.domReference);

                function t() {
                    !r && ia(l.domReference) && l.domReference === ba(Ta(l.domReference)) && (c.current = !0)
                }

                function n() {
                    d.current = !0
                }
                return e.addEventListener("blur", t), e.addEventListener("keydown", n, !0), () => {
                    e.removeEventListener("blur", t), e.removeEventListener("keydown", n, !0)
                }
            }), [l.domReference, r, u]), n.useEffect((() => {
                if (u) return i.on("openchange", e), () => {
                    i.off("openchange", e)
                };

                function e(e) {
                    let {
                        reason: t
                    } = e;
                    "reference-press" !== t && "escape-key" !== t || (c.current = !0)
                }
            }), [i, u]), n.useEffect((() => () => {
                clearTimeout(f.current)
            }), []);
            const p = n.useMemo((() => ({
                onPointerDown(e) {
                    Sa(e.nativeEvent) || (d.current = !1)
                },
                onMouseLeave() {
                    c.current = !1
                },
                onFocus(e) {
                    if (c.current) return;
                    const t = Ra(e.nativeEvent);
                    if (s && oa(t)) try {
                        if (Ea() && _a().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints) throw Error();
                        if (!t.matches(":focus-visible")) return
                    } catch (e) {
                        if (!d.current && !La(t)) return
                    }
                    o(!0, e.nativeEvent, "focus")
                },
                onBlur(e) {
                    c.current = !1;
                    const t = e.relatedTarget,
                        n = e.nativeEvent,
                        r = oa(t) && t.hasAttribute(Gl("focus-guard")) && "outside" === t.getAttribute("data-type");
                    f.current = window.setTimeout((() => {
                        var e;
                        const i = ba(l.domReference ? l.domReference.ownerDocument : document);
                        (t || i !== l.domReference) && (wa(null == (e = a.current.floatingContext) ? void 0 : e.refs.floating.current, i) || wa(l.domReference, i) || r || o(!1, n, "focus"))
                    }))
                }
            })), [a, l.domReference, o, s]);
            return n.useMemo((() => u ? {
                reference: p
            } : {}), [u, p])
        }
        const xu = "active",
            Su = "selected";

        function Eu(e, t, n) {
            const r = new Map,
                o = "item" === n;
            let i = e;
            if (o && e) {
                const {
                    [xu]: t, [Su]: n, ...r
                } = e;
                i = r
            }
            return { ..."floating" === n && {
                    tabIndex: -1,
                    [mu]: ""
                },
                ...i,
                ...t.map((t => {
                    const r = t ? t[n] : null;
                    return "function" == typeof r ? e ? r(e) : null : r
                })).concat(e).reduce(((e, t) => t ? (Object.entries(t).forEach((t => {
                    let [n, i] = t;
                    var a;
                    o && [xu, Su].includes(n) || (0 === n.indexOf("on") ? (r.has(n) || r.set(n, []), "function" == typeof i && (null == (a = r.get(n)) || a.push(i), e[n] = function() {
                        for (var e, t = arguments.length, o = new Array(t), i = 0; i < t; i++) o[i] = arguments[i];
                        return null == (e = r.get(n)) ? void 0 : e.map((e => e(...o))).find((e => void 0 !== e))
                    })) : e[n] = i)
                })), e) : e), {})
            }
        }
        const ku = new Map([
            ["select", "listbox"],
            ["combobox", "listbox"],
            ["label", !1]
        ]);
        const Cu = {
            colors: "'~content/theme/colors.module.css'",
            detectionAiColor: "#ba4747",
            detectionHumanColor: "#2ca961",
            detectionUnknownColor: "#e7b507",
            detectionSplitColor: "#e7b507",
            badge: "GV1Yg8u4bjIfQrK2",
            unknown: "cdg48zSJXTaUjb_b",
            split: "IJFqBcDfBCjwxr5Z",
            human: "IXehpCvoC0MaSMmj",
            ai: "dNl0CpW2lSVgcsw3",
            badgeLabel: "QdoTSrI6m6uvfzje",
            apolloBadge: "knxk7PCWZqLumpLP",
            apolloBadgeTitleText: "XOM33xcNDTEBBDNq",
            apolloBadgeResult: "axXuKCoV6Fe23YQD",
            apolloBadgeResultImage: "JYNA9d3no5Xer55C",
            apolloBadgeConfidenceSeparator: "xvR0izQb5nz16Obt",
            apolloBadgeConfidence: "hxunrnEPknsXlYuc",
            apolloBadgeConfidenceTitle: "veequ4EnFNcjw5Gs",
            apolloBadgeConfidenceTitleText: "oyy4HSRrhzDgH04C",
            apolloBadgeConfidenceScore: "iSjUKNCr5pcKzRoc",
            apolloBadgeConfidenceScoreText: "KlRINNp5igRwN56J",
            apolloBadgeConfidenceScoreProgessBar: "vPdq8hg5uWKfDIua",
            apolloBadgeConfidenceScoreProgessBarFill: "tV90gscSyYhBdU3b",
            apolloBadgeConfidenceScoreTooltipAnchor: "XR5_a7D6Eee4CYzP",
            apolloBadgeExplainerTooltip: "RaKIrdjsA2oD9YEP",
            apolloBadgeExplainerTooltipText: "j6sl5_nWWLGt6iW8",
            apolloBadgeConfidenceAddendumText: "K2vRLR8W3OrN6D2Y"
        };

        function Tu(e) {
            return o.g.chrome ? .runtime ? .getURL(`assets/${e}`)
        }

        function Nu() {
            return o.g.chrome ? .runtime ? .getURL("content.css")
        }
        const Ru = "https://c.fakespot.io/assets/images/DFD";

        function Au(e) {
            return `${Ru}/${e}`
        }

        function Lu(e) {
            return Tu(`fonts/${e}.otf`)
        }
        const Ou = {
            AI: {
                label: "AI Patterns Detected",
                icon: "warning.svg",
                smallIcon: "aiSmall.svg",
                styleClass: "ai",
                addendumText: ""
            },
            Human: {
                label: "Human Author Likely",
                icon: "approved.svg",
                smallIcon: "humanSmall.svg",
                styleClass: "human",
                addendumText: ""
            },
            Unknown: {
                label: "Text Origin Unknown",
                icon: "warning.svg",
                smallIcon: "unknownSmall.svg",
                styleClass: "unknown",
                addendumText: ""
            }
        };

        function Iu(e, t) {
            const n = Ou[e];
            return "Unknown" !== e && t ? { ...n,
                label: "AI" === e ? "Uncertain, Possibly AI" : "Uncertain, Possibly Human",
                icon: "warning.svg",
                smallIcon: "unknownSmall.svg",
                styleClass: "unknown",
                addendumText: t ? "Note: Highlighting more text will help to improve results." : ""
            } : n
        }

        function Du({
            isSplit: t,
            overall: n
        }) {
            const r = t ? {} : n.reduce(((e, t) => {
                    const {
                        styleClass: n
                    } = Iu(t);
                    return { ...e,
                        [Cu[n]]: !0
                    }
                }), {}),
                o = jt()({
                    [Cu.badge]: !0,
                    [Cu.split]: t,
                    ...r
                }),
                i = Iu(n[0]);
            return (0, e.jsxs)("div", {
                className: o,
                children: [(0, e.jsx)("img", {
                    alt: i.icon,
                    src: Tu(i.icon)
                }), (0, e.jsx)("p", {
                    className: Cu.badgeLabel,
                    children: t ? "Model Conflict" : i.label
                })]
            })
        }

        function ju({
            analysisResult: t
        }) {
            const {
                label: r,
                confidence: o,
                is_uncertain: i
            } = t, {
                styleClass: a,
                label: l,
                icon: u,
                addendumText: s
            } = Iu(r, i), c = jt()(Cu.apolloBadge, Cu[a]), f = `${Math.ceil(100*o)}%`, [d, p] = (0, n.useState)(!1), {
                context: h,
                floatingStyles: g,
                refs: m
            } = wu({
                middleware: [Ll((() => ({
                    mainAxis: 10,
                    alignmentAxis: 0
                })))],
                onOpenChange: p,
                open: d,
                placement: "bottom-start"
            }), v = function(e, t) {
                void 0 === t && (t = {});
                const {
                    open: r,
                    onOpenChange: o,
                    dataRef: i,
                    events: a,
                    elements: l
                } = e, {
                    enabled: u = !0,
                    delay: s = 0,
                    handleClose: c = null,
                    mouseOnly: f = !1,
                    restMs: d = 0,
                    move: p = !0
                } = t, h = Xl(), g = Kl(), m = Jl(c), v = Jl(s), y = Jl(r), b = n.useRef(), w = n.useRef(-1), _ = n.useRef(), x = n.useRef(-1), S = n.useRef(!0), E = n.useRef(!1), k = n.useRef((() => {})), C = n.useRef(!1), T = n.useCallback((() => {
                    var e;
                    const t = null == (e = i.current.openEvent) ? void 0 : e.type;
                    return (null == t ? void 0 : t.includes("mouse")) && "mousedown" !== t
                }), [i]);
                n.useEffect((() => {
                    if (u) return a.on("openchange", e), () => {
                        a.off("openchange", e)
                    };

                    function e(e) {
                        let {
                            open: t
                        } = e;
                        t || (clearTimeout(w.current), clearTimeout(x.current), S.current = !0, C.current = !1)
                    }
                }), [u, a]), n.useEffect((() => {
                    if (!u) return;
                    if (!m.current) return;
                    if (!r) return;

                    function e(e) {
                        T() && o(!1, e, "hover")
                    }
                    const t = Ta(l.floating).documentElement;
                    return t.addEventListener("mouseleave", e), () => {
                        t.removeEventListener("mouseleave", e)
                    }
                }), [l.floating, r, o, u, m, T]);
                const N = n.useCallback((function(e, t, n) {
                        void 0 === t && (t = !0), void 0 === n && (n = "hover");
                        const r = eu(v.current, "close", b.current);
                        r && !_.current ? (clearTimeout(w.current), w.current = window.setTimeout((() => o(!1, e, n)), r)) : t && (clearTimeout(w.current), o(!1, e, n))
                    }), [v, o]),
                    R = Dl((() => {
                        k.current(), _.current = void 0
                    })),
                    A = Dl((() => {
                        if (E.current) {
                            const e = Ta(l.floating).body;
                            e.style.pointerEvents = "", e.removeAttribute(Zl), E.current = !1
                        }
                    })),
                    L = Dl((() => !!i.current.openEvent && ["click", "mousedown"].includes(i.current.openEvent.type)));
                n.useEffect((() => {
                    if (u && oa(l.domReference)) {
                        var e;
                        const o = l.domReference;
                        return r && o.addEventListener("mouseleave", a), null == (e = l.floating) || e.addEventListener("mouseleave", a), p && o.addEventListener("mousemove", t, {
                            once: !0
                        }), o.addEventListener("mouseenter", t), o.addEventListener("mouseleave", n), () => {
                            var e;
                            r && o.removeEventListener("mouseleave", a), null == (e = l.floating) || e.removeEventListener("mouseleave", a), p && o.removeEventListener("mousemove", t), o.removeEventListener("mouseenter", t), o.removeEventListener("mouseleave", n)
                        }
                    }

                    function t(e) {
                        if (clearTimeout(w.current), S.current = !1, f && !Ca(b.current) || d > 0 && !eu(v.current, "open")) return;
                        const t = eu(v.current, "open", b.current);
                        t ? w.current = window.setTimeout((() => {
                            y.current || o(!0, e, "hover")
                        }), t) : r || o(!0, e, "hover")
                    }

                    function n(e) {
                        if (L()) return;
                        k.current();
                        const t = Ta(l.floating);
                        if (clearTimeout(x.current), C.current = !1, m.current && i.current.floatingContext) {
                            r || clearTimeout(w.current), _.current = m.current({ ...i.current.floatingContext,
                                tree: h,
                                x: e.clientX,
                                y: e.clientY,
                                onClose() {
                                    A(), R(), L() || N(e, !0, "safe-polygon")
                                }
                            });
                            const n = _.current;
                            return t.addEventListener("mousemove", n), void(k.current = () => {
                                t.removeEventListener("mousemove", n)
                            })
                        }("touch" !== b.current || !wa(l.floating, e.relatedTarget)) && N(e)
                    }

                    function a(e) {
                        L() || i.current.floatingContext && (null == m.current || m.current({ ...i.current.floatingContext,
                            tree: h,
                            x: e.clientX,
                            y: e.clientY,
                            onClose() {
                                A(), R(), L() || N(e)
                            }
                        })(e))
                    }
                }), [l, u, e, f, d, p, N, R, A, o, r, y, h, v, m, i, L]), Bl((() => {
                    var e;
                    if (u && r && null != (e = m.current) && e.__options.blockPointerEvents && T()) {
                        E.current = !0;
                        const e = l.floating;
                        if (oa(l.domReference) && e) {
                            var t;
                            const n = Ta(l.floating).body;
                            n.setAttribute(Zl, "");
                            const r = l.domReference,
                                o = null == h || null == (t = h.nodesRef.current.find((e => e.id === g))) || null == (t = t.context) ? void 0 : t.elements.floating;
                            return o && (o.style.pointerEvents = ""), n.style.pointerEvents = "none", r.style.pointerEvents = "auto", e.style.pointerEvents = "auto", () => {
                                n.style.pointerEvents = "", r.style.pointerEvents = "", e.style.pointerEvents = ""
                            }
                        }
                    }
                }), [u, r, g, l, h, m, T]), Bl((() => {
                    r || (b.current = void 0, C.current = !1, R(), A())
                }), [r, R, A]), n.useEffect((() => () => {
                    R(), clearTimeout(w.current), clearTimeout(x.current), A()
                }), [u, l.domReference, R, A]);
                const O = n.useMemo((() => {
                        function e(e) {
                            b.current = e.pointerType
                        }
                        return {
                            onPointerDown: e,
                            onPointerEnter: e,
                            onMouseMove(e) {
                                const {
                                    nativeEvent: t
                                } = e;

                                function n() {
                                    S.current || y.current || o(!0, t, "hover")
                                }
                                f && !Ca(b.current) || r || 0 === d || C.current && e.movementX ** 2 + e.movementY ** 2 < 2 || (clearTimeout(x.current), "touch" === b.current ? n() : (C.current = !0, x.current = window.setTimeout(n, d)))
                            }
                        }
                    }), [f, o, r, y, d]),
                    I = n.useMemo((() => ({
                        onMouseEnter() {
                            clearTimeout(w.current)
                        },
                        onMouseLeave(e) {
                            L() || N(e.nativeEvent, !1)
                        }
                    })), [N, L]);
                return n.useMemo((() => u ? {
                    reference: O,
                    floating: I
                } : {}), [u, O, I])
            }(h, {
                move: !1
            }), y = _u(h), b = function(e, t) {
                void 0 === t && (t = {});
                const {
                    open: r,
                    onOpenChange: o,
                    elements: i,
                    dataRef: a
                } = e, {
                    enabled: l = !0,
                    escapeKey: u = !0,
                    outsidePress: s = !0,
                    outsidePressEvent: c = "pointerdown",
                    referencePress: f = !1,
                    referencePressEvent: d = "pointerdown",
                    ancestorScroll: p = !1,
                    bubbles: h,
                    capture: g
                } = t, m = Xl(), v = Dl("function" == typeof s ? s : () => !1), y = "function" == typeof s ? v : s, b = n.useRef(!1), w = n.useRef(!1), {
                    escapeKey: _,
                    outsidePress: x
                } = bu(h), {
                    escapeKey: S,
                    outsidePress: E
                } = bu(g), k = n.useRef(!1), C = Dl((e => {
                    var t;
                    if (!r || !l || !u || "Escape" !== e.key) return;
                    if (k.current) return;
                    const n = null == (t = a.current.floatingContext) ? void 0 : t.nodeId,
                        i = m ? tu(m.nodesRef.current, n) : [];
                    if (!_ && (e.stopPropagation(), i.length > 0)) {
                        let e = !0;
                        if (i.forEach((t => {
                                var n;
                                null == (n = t.context) || !n.open || t.context.dataRef.current.__escapeKeyBubbles || (e = !1)
                            })), !e) return
                    }
                    o(!1, function(e) {
                        return "nativeEvent" in e
                    }(e) ? e.nativeEvent : e, "escape-key")
                })), T = Dl((e => {
                    var t;
                    const n = () => {
                        var t;
                        C(e), null == (t = Ra(e)) || t.removeEventListener("keydown", n)
                    };
                    null == (t = Ra(e)) || t.addEventListener("keydown", n)
                })), N = Dl((e => {
                    var t;
                    const n = b.current;
                    b.current = !1;
                    const r = w.current;
                    if (w.current = !1, "click" === c && r) return;
                    if (n) return;
                    if ("function" == typeof y && !y(e)) return;
                    const l = Ra(e),
                        u = "[" + Gl("inert") + "]",
                        s = Ta(i.floating).querySelectorAll(u);
                    let f = oa(l) ? l : null;
                    for (; f && !da(f);) {
                        const e = ga(f);
                        if (da(e) || !oa(e)) break;
                        f = e
                    }
                    if (s.length && oa(l) && !l.matches("html,body") && !wa(l, i.floating) && Array.from(s).every((e => !wa(f, e)))) return;
                    if (ia(l) && L) {
                        const t = da(l),
                            n = pa(l),
                            r = /auto|scroll/,
                            o = t || r.test(n.overflowX),
                            i = t || r.test(n.overflowY),
                            a = o && l.clientWidth > 0 && l.scrollWidth > l.clientWidth,
                            u = i && l.clientHeight > 0 && l.scrollHeight > l.clientHeight,
                            s = "rtl" === n.direction,
                            c = u && (s ? e.offsetX <= l.offsetWidth - l.clientWidth : e.offsetX > l.clientWidth),
                            f = a && e.offsetY > l.clientHeight;
                        if (c || f) return
                    }
                    const d = null == (t = a.current.floatingContext) ? void 0 : t.nodeId,
                        p = m && tu(m.nodesRef.current, d).some((t => {
                            var n;
                            return Na(e, null == (n = t.context) ? void 0 : n.elements.floating)
                        }));
                    if (Na(e, i.floating) || Na(e, i.domReference) || p) return;
                    const h = m ? tu(m.nodesRef.current, d) : [];
                    if (h.length > 0) {
                        let e = !0;
                        if (h.forEach((t => {
                                var n;
                                null == (n = t.context) || !n.open || t.context.dataRef.current.__outsidePressBubbles || (e = !1)
                            })), !e) return
                    }
                    o(!1, e, "outside-press")
                })), R = Dl((e => {
                    var t;
                    const n = () => {
                        var t;
                        N(e), null == (t = Ra(e)) || t.removeEventListener(c, n)
                    };
                    null == (t = Ra(e)) || t.addEventListener(c, n)
                }));
                n.useEffect((() => {
                    if (!r || !l) return;
                    a.current.__escapeKeyBubbles = _, a.current.__outsidePressBubbles = x;
                    let e = -1;

                    function t(e) {
                        o(!1, e, "ancestor-scroll")
                    }

                    function n() {
                        window.clearTimeout(e), k.current = !0
                    }

                    function s() {
                        e = window.setTimeout((() => {
                            k.current = !1
                        }), fa() ? 5 : 0)
                    }
                    const f = Ta(i.floating);
                    u && (f.addEventListener("keydown", S ? T : C, S), f.addEventListener("compositionstart", n), f.addEventListener("compositionend", s)), y && f.addEventListener(c, E ? R : N, E);
                    let d = [];
                    return p && (oa(i.domReference) && (d = va(i.domReference)), oa(i.floating) && (d = d.concat(va(i.floating))), !oa(i.reference) && i.reference && i.reference.contextElement && (d = d.concat(va(i.reference.contextElement)))), d = d.filter((e => {
                        var t;
                        return e !== (null == (t = f.defaultView) ? void 0 : t.visualViewport)
                    })), d.forEach((e => {
                        e.addEventListener("scroll", t, {
                            passive: !0
                        })
                    })), () => {
                        u && (f.removeEventListener("keydown", S ? T : C, S), f.removeEventListener("compositionstart", n), f.removeEventListener("compositionend", s)), y && f.removeEventListener(c, E ? R : N, E), d.forEach((e => {
                            e.removeEventListener("scroll", t)
                        })), window.clearTimeout(e)
                    }
                }), [a, i, u, y, c, r, o, p, l, _, x, C, S, T, N, E, R]), n.useEffect((() => {
                    b.current = !1
                }), [y, c]);
                const A = n.useMemo((() => ({
                        onKeyDown: C,
                        ...f && {
                            [vu[d]]: e => {
                                o(!1, e.nativeEvent, "reference-press")
                            },
                            ..."click" !== d && {
                                onClick(e) {
                                    o(!1, e.nativeEvent, "reference-press")
                                }
                            }
                        }
                    })), [C, o, f, d]),
                    L = n.useMemo((() => ({
                        onKeyDown: C,
                        onMouseDown() {
                            w.current = !0
                        },
                        onMouseUp() {
                            w.current = !0
                        },
                        [yu[c]]: () => {
                            b.current = !0
                        }
                    })), [C, c]);
                return n.useMemo((() => l ? {
                    reference: A,
                    floating: L
                } : {}), [l, A, L])
            }(h), w = function(e, t) {
                var r;
                void 0 === t && (t = {});
                const {
                    open: o,
                    floatingId: i
                } = e, {
                    enabled: a = !0,
                    role: l = "dialog"
                } = t, u = null != (r = ku.get(l)) ? r : l, s = Vl(), c = null != Kl(), f = n.useMemo((() => "tooltip" === u || "label" === l ? {
                    ["aria-" + ("label" === l ? "labelledby" : "describedby")]: o ? i : void 0
                } : {
                    "aria-expanded": o ? "true" : "false",
                    "aria-haspopup": "alertdialog" === u ? "dialog" : u,
                    "aria-controls": o ? i : void 0,
                    ..."listbox" === u && {
                        role: "combobox"
                    },
                    ..."menu" === u && {
                        id: s
                    },
                    ..."menu" === u && c && {
                        role: "menuitem"
                    },
                    ..."select" === l && {
                        "aria-autocomplete": "none"
                    },
                    ..."combobox" === l && {
                        "aria-autocomplete": "list"
                    }
                }), [u, i, c, o, s, l]), d = n.useMemo((() => {
                    const e = {
                        id: i,
                        ...u && {
                            role: u
                        }
                    };
                    return "tooltip" === u || "label" === l ? e : { ...e,
                        ..."menu" === u && {
                            "aria-labelledby": s
                        }
                    }
                }), [u, i, s, l]), p = n.useCallback((e => {
                    let {
                        active: t,
                        selected: n
                    } = e;
                    const r = {
                        role: "option",
                        ...t && {
                            id: i + "-option"
                        }
                    };
                    switch (l) {
                        case "select":
                            return { ...r,
                                "aria-selected": t && n
                            };
                        case "combobox":
                            return { ...r,
                                ...t && {
                                    "aria-selected": !0
                                }
                            }
                    }
                    return {}
                }), [i, l]);
                return n.useMemo((() => a ? {
                    reference: f,
                    floating: d,
                    item: p
                } : {}), [a, f, d, p])
            }(h, {
                role: "tooltip"
            }), {
                getReferenceProps: _,
                getFloatingProps: x
            } = function(e) {
                void 0 === e && (e = []);
                const t = e.map((e => null == e ? void 0 : e.reference)),
                    r = e.map((e => null == e ? void 0 : e.floating)),
                    o = e.map((e => null == e ? void 0 : e.item)),
                    i = n.useCallback((t => Eu(t, e, "reference")), t),
                    a = n.useCallback((t => Eu(t, e, "floating")), r),
                    l = n.useCallback((t => Eu(t, e, "item")), o);
                return n.useMemo((() => ({
                    getReferenceProps: i,
                    getFloatingProps: a,
                    getItemProps: l
                })), [i, a, l])
            }([v, y, b, w]), S = (0, n.useRef)(null);
            return (0, e.jsxs)(e.Fragment, {
                children: [(0, e.jsxs)("div", {
                    className: c,
                    ref: S,
                    children: [(0, e.jsx)("p", {
                        className: Cu.apolloBadgeTitleText,
                        children: "Fakespot Apollo DFT"
                    }), (0, e.jsxs)("div", {
                        className: Cu.apolloBadgeResult,
                        children: [(0, e.jsx)("img", {
                            className: Cu.apolloBadgeResultImage,
                            alt: u,
                            src: Tu(u)
                        }), (0, e.jsx)("p", {
                            className: Cu.badgeLabel,
                            children: l
                        })]
                    }), (0, e.jsx)("hr", {
                        className: Cu.apolloBadgeConfidenceSeparator
                    }), (0, e.jsxs)("div", {
                        className: Cu.apolloBadgeConfidence,
                        children: [(0, e.jsxs)("div", {
                            className: Cu.apolloBadgeConfidenceTitle,
                            ref: m.setReference,
                            children: [(0, e.jsx)("p", {
                                className: Cu.apolloBadgeConfidenceTitleText,
                                children: "Confidence Score"
                            }), (0, e.jsx)("img", { ..._(),
                                className: Cu.apolloBadgeConfidenceScoreTooltipAnchor,
                                ref: S,
                                src: Tu("info.svg")
                            }), d && (0, e.jsx)(hu, {
                                root: S.current,
                                children: (0, e.jsxs)("div", { ...x(),
                                    className: Cu.apolloBadgeExplainerTooltip,
                                    ref: m.setFloating,
                                    style: g,
                                    children: [(0, e.jsx)("p", {
                                        className: Cu.apolloBadgeExplainerTooltipText,
                                        children: "Measures strength of signals found in the analysis."
                                    }), (0, e.jsx)("p", {
                                        className: Cu.apolloBadgeExplainerTooltipText,
                                        children: "Read as “How likely the finding is correct”"
                                    }), (0, e.jsx)("p", {
                                        className: Cu.apolloBadgeExplainerTooltipText,
                                        children: "Low of 0, high of 99."
                                    })]
                                })
                            })]
                        }), (0, e.jsxs)("div", {
                            className: Cu.apolloBadgeConfidenceScore,
                            children: [(0, e.jsx)("p", {
                                className: Cu.apolloBadgeConfidenceScoreText,
                                children: f
                            }), (0, e.jsx)("div", {
                                className: Cu.apolloBadgeConfidenceScoreProgessBar,
                                children: (0, e.jsx)("div", {
                                    className: Cu.apolloBadgeConfidenceScoreProgessBarFill,
                                    style: {
                                        width: f
                                    }
                                })
                            })]
                        })]
                    })]
                }), s && (0, e.jsx)("p", {
                    className: Cu.apolloBadgeConfidenceAddendumText,
                    children: s
                })]
            })
        }
        const Mu = {
            colors: "'~content/theme/colors.module.css'",
            detectionAiColor: "#ba4747",
            detectionHumanColor: "#2ca961",
            detectionUnknownColor: "#e7b507",
            detectionSplitColor: "#e7b507",
            bullets: "DCbGqnBwSmm80EIP",
            bullet: "lA2GHuCwYqL6ceLJ",
            bulletIcon: "c9fHwvLLwDg5SB7Z",
            aiText: "fKRX00QBXQ6e7A5n",
            humanText: "F1LcqW3Khka5_HWN",
            unknownText: "WtE9umLJD6gs8oc2"
        };

        function Pu(e) {
            return Mu[`${Iu(e).styleClass}Text`]
        }

        function zu({
            category: t,
            modelIds: r,
            id: o
        }) {
            return r.map(((i, a) => {
                const l = `${o}-${i}`;
                return (0, e.jsxs)(n.Fragment, {
                    children: [(0, e.jsx)("b", {
                        className: Pu(t),
                        children: Ko[i].name
                    }), a !== r.length - 1 ? ", " : ""]
                }, l)
            }))
        }

        function Bu({
            breakdown: t,
            id: n
        }) {
            return (0, e.jsx)("div", {
                className: Mu.bullets,
                children: qo(Object.keys(t)).map((r => {
                    const o = t[r],
                        {
                            smallIcon: i
                        } = Iu(r),
                        a = 1 === o.length ? "" : " each",
                        l = `${n}-${r}`;
                    return (0, e.jsxs)("div", {
                        className: Mu.bullet,
                        children: [(0, e.jsx)("img", {
                            className: Mu.bulletIcon,
                            alt: r,
                            src: Tu(i)
                        }), (0, e.jsxs)("div", {
                            children: [(0, e.jsx)(zu, {
                                category: r,
                                id: n,
                                modelIds: o
                            }), a, " returned a result of", " ", (0, e.jsx)("b", {
                                className: Pu(r),
                                children: r
                            }), "."]
                        })]
                    }, l)
                }))
            })
        }
        const Fu = R.withTypes(),
            Uu = v.withTypes(),
            Wu = (C.withTypes(), 1e3);

        function Hu({
            analysis: t,
            children: r,
            header: o
        }) {
            const i = Fu(),
                {
                    scrollToElement: a
                } = (0, n.useContext)(Os),
                l = (0, n.useRef)(null),
                u = jt()(Ji.main, Ji.clickable, {
                    [Ji.hasUpdate]: t.hasUpdate
                });
            return (0, n.useEffect)((() => {
                t.hasUpdate && (a(l.current), window.setTimeout((() => {
                    i(yi(t.id))
                }), Wu))
            }), [t]), (0, e.jsxs)("div", {
                onClick: () => function() {
                    if (window.location.href === t.url) return Bo(t.selector);
                    Ki({
                        message: "openAnalysisTab",
                        payload: t
                    })
                }(),
                "data-dfd-analysis-id": t.id,
                className: u,
                title: "Scroll to Selected Text",
                ref: l,
                children: [(0, e.jsxs)("div", {
                    className: Ji.header,
                    children: [(0, e.jsx)("div", {
                        className: Ji.headerStatus,
                        children: o
                    }), (0, e.jsx)("div", {
                        className: Ji.headerButtonsContainer,
                        children: (0, e.jsx)("button", {
                            className: Ji.headerRemoveButton,
                            type: "button",
                            onClick: function(e) {
                                e.stopPropagation(), i(gi(t.id))
                            },
                            children: (0, e.jsx)("img", {
                                className: Ji.headerRemoveButtonImage,
                                alt: "Remove this analysis",
                                src: Tu("close.svg")
                            })
                        })
                    })]
                }), (0, e.jsx)("div", {
                    children: r
                }), (0, e.jsx)($u, {
                    analysis: t
                })]
            })
        }

        function $u({
            analysis: t
        }) {
            const n = Zo.filter((e => t.result && t.result[e] ? .is_truncated));
            return (0, e.jsxs)(e.Fragment, {
                children: [t.errors.length > 0 && (0, e.jsx)("ul", {
                    className: Ji.caveatList,
                    children: t.errors.map((t => (0, e.jsx)("li", {
                        className: Ji.errorText,
                        children: (0, e.jsx)("p", {
                            children: t.description
                        })
                    }, t.code)))
                }), n.length > 0 && (0, e.jsx)("ul", {
                    className: Ji.caveatList,
                    children: n.map((t => {
                        const n = Ko[Jo(t)] ? .name;
                        return n ? (0, e.jsx)("li", {
                            className: Ji.warningText,
                            children: (0, e.jsxs)("p", {
                                children: ["Warning: Input text was truncated for ", n, "."]
                            })
                        }, n) : null
                    }))
                })]
            })
        }
        const Vu = {
            colors: "'~content/theme/colors.module.css'",
            thematicBlue: "#1E78F3",
            main: "bEuEnMDVKA8GaqLj",
            disabled: "xrROmoHe7BWvUvpG",
            quickstart: "M3sdmqEDPo6QOw7J",
            quickstartBold: "DVT4bORmjBE0ENvK",
            buttonLabel: "_nnWy1nBdpD22NJg"
        };

        function Yu({
            keyboardShortcut: t
        }) {
            return (0, e.jsxs)("p", {
                className: Vu.quickstart,
                children: ["Select text to analyze or alternatively you can also use the", " ", (0, e.jsxs)("span", {
                    className: Vu.quickstartBold,
                    children: ["keyboard shortcut (", t || "Currently Unset", ")"]
                }), " ", "or ", (0, e.jsx)("span", {
                    className: Vu.quickstartBold,
                    children: "right click"
                }), ' and click "Scan for Deepfakes".']
            })
        }

        function Qu() {
            const t = Fu(),
                n = Uu((e => e.settings.activeModelIds)),
                r = Uu((e => e.analyses.analysisQueue)),
                o = Uu((e => e.settings.keyboardShortcuts)),
                i = o.find((e => "analyze_selection" === e.name)) ? .shortcut,
                a = jt()({
                    [Vu.main]: !0
                }),
                l = i && i.length < 5;
            return (0, e.jsxs)(e.Fragment, {
                children: [(0, e.jsxs)("button", {
                    className: a,
                    onClick: () => {
                        t(di({
                            detectorMethods: n,
                            triggerMethod: "analyze_button"
                        }))
                    },
                    children: [(0, e.jsxs)("div", {
                        className: Vu.buttonLabel,
                        children: [(0, e.jsx)("img", {
                            alt: "Analyze",
                            src: Tu("scan.svg")
                        }), (0, e.jsx)("h4", {
                            children: "Scan for Deepfake"
                        })]
                    }), l && (0, e.jsx)("div", {
                        children: i
                    })]
                }), 0 === r.length && (0, e.jsx)(Yu, {
                    keyboardShortcut: i
                })]
            })
        }
        const qu = {
            removeBtnWrapper: "n8ydzd1WZ5WYzaBp",
            notClickable: "Sb_vZH4nRLTeaqrb",
            removeAllAnalysisButton: "plQI7mY77NU3BUb0"
        };

        function Ku() {
            const t = Fu(),
                n = !Uu((e => e.analyses.analysisQueue)).length,
                r = jt()(qu.removeBtnWrapper, {
                    [qu.notClickable]: n
                });
            return (0, e.jsx)("div", {
                className: r,
                children: (0, e.jsx)("button", {
                    className: qu.removeAllAnalysisButton,
                    type: "button",
                    disabled: n,
                    onClick: () => t(mi()),
                    children: "Clear All Analyses"
                })
            })
        }
        const Xu = "b_oYvnsNXXd5n8dQ",
            Gu = () => (0, e.jsxs)("div", {
                className: Xu,
                children: [(0, e.jsx)("strong", {
                    children: "Important Update: Deepfake Detector will shut down on June 26, 2025."
                }), (0, e.jsx)("br", {}), (0, e.jsxs)("span", {
                    style: {
                        fontSize: "13px"
                    },
                    children: ["On June 26, you will no longer be able to use the Deepfake Detector extension. Thanks for supporting our journey.", (0, e.jsx)("br", {}), (0, e.jsx)("a", {
                        href: "https://support.google.com/chrome_webstore/answer/2664769?hl=en",
                        style: {
                            textDecoration: "underline",
                            color: "black"
                        },
                        children: "Learn how to uninstall."
                    })]
                })]
            }),
            Ju = {
                new: () => null,
                pending: function({
                    analysis: t
                }) {
                    return (0, e.jsx)(Hu, {
                        analysis: t,
                        header: (0, e.jsxs)(e.Fragment, {
                            children: [(0, e.jsx)("img", {
                                className: Ji.headerLoadingImage,
                                alt: "Loading",
                                src: Tu("spinner.gif")
                            }), (0, e.jsx)("span", {
                                children: "Analyzing Text"
                            })]
                        }),
                        children: (0, e.jsx)("p", {
                            className: Ji.analyzedText,
                            children: t.analyzedText
                        })
                    })
                },
                done: function({
                    analysis: t
                }) {
                    const {
                        result: n
                    } = t, {
                        apollo_result: r,
                        ...o
                    } = n, {
                        isSplit: i,
                        overall: a,
                        breakdown: l
                    } = function(e) {
                        const t = {
                            AI: 0,
                            Human: 0,
                            Unknown: 0
                        };
                        let n = -1;
                        const r = Object.keys(e).filter((e => Zo.includes(e))).reduce(((r, o) => {
                            if (!e[o]) return r;
                            const i = e[o].label,
                                a = Jo(o),
                                l = t[i] + 1;
                            return t[i] = t[i] + 1, l > n && (n = l), r[i] = r[i] || [], r[i].push(a), r
                        }), {});
                        Object.entries(r).forEach((([, e]) => {
                            Yo(e)
                        }));
                        let o = 0;
                        const i = Object.keys(t).flatMap((e => t[e] === n ? o++ > 0 && "Unknown" === e ? [] : e : []));
                        return {
                            isSplit: i.length > 1,
                            overall: qo(i),
                            breakdown: Object.entries(r).reduce(((e, [t, n]) => ({ ...e,
                                [t]: Yo(n)
                            })), {})
                        }
                    }(o), u = i ? {} : a.reduce(((e, t) => ({ ...e,
                        [Ji[t.toLowerCase() + "Text"]]: !0
                    })), {}), s = jt()(Ji.analyzedText, { ...u
                    });
                    return (0, e.jsxs)(Hu, {
                        analysis: t,
                        header: "Analysis Result",
                        children: [(0, e.jsx)("p", {
                            className: s,
                            children: t.analyzedText
                        }), r ? (0, e.jsxs)(e.Fragment, {
                            children: [(0, e.jsx)(ju, {
                                analysisResult: r
                            }), (0, e.jsx)("hr", {
                                className: Ji.alternateModelComparisonSeparator
                            }), (0, e.jsx)("p", {
                                className: Ji.alternateModelComparisonTitle,
                                children: "Alternate Model Comparison"
                            }), (0, e.jsx)(Bu, {
                                id: t.id,
                                breakdown: l
                            })]
                        }) : (0, e.jsx)(e.Fragment, {
                            children: a ? .length > 0 && Object.keys(l) ? .length > 0 && (0, e.jsxs)(e.Fragment, {
                                children: [(0, e.jsx)(Du, {
                                    isSplit: i,
                                    overall: a
                                }), (0, e.jsx)(Bu, {
                                    id: t.id,
                                    breakdown: l
                                })]
                            })
                        })]
                    })
                },
                failed: function({
                    analysis: t
                }) {
                    return (0, e.jsx)(Hu, {
                        analysis: t,
                        header: (0, e.jsx)(e.Fragment, {
                            children: (0, e.jsx)("span", {
                                className: Ji.headerFailure,
                                children: "Analysis Error"
                            })
                        }),
                        children: (0, e.jsx)("p", {
                            className: Ji.analyzedText,
                            children: t.analyzedText
                        })
                    })
                },
                invalid: function({
                    analysis: t
                }) {
                    return (0, e.jsx)(Hu, {
                        analysis: t,
                        header: (0, e.jsxs)("div", {
                            className: Ji.headerStatus,
                            children: [(0, e.jsx)("img", {
                                alt: "invalid scan",
                                src: Tu("caution.svg")
                            }), (0, e.jsx)("span", {
                                children: "Scan not possible"
                            })]
                        }),
                        children: (0, e.jsx)("p", {
                            className: Ji.analyzedText,
                            children: t.analyzedText
                        })
                    })
                }
            };

        function Zu() {
            const t = Uu((e => e.analyses.analysisQueue));
            return (0, e.jsxs)("div", {
                className: Gi.main,
                children: [(0, e.jsxs)("div", {
                    className: Gi.analysisContent,
                    children: [(0, e.jsx)(Qu, {}), t.length ? t.map((t => {
                        const n = `${t.id}-${t.updatedAt}`,
                            r = Ju[t.status];
                        return (0, e.jsx)("div", {
                            className: Gi.analysisContainer,
                            children: (0, e.jsx)(r, {
                                analysis: t
                            }, n)
                        }, n)
                    })) : (0, e.jsx)(Gu, {})]
                }), (0, e.jsx)(Ku, {})]
            })
        }
        const es = {
                main: "NstFgOwb8HWqJUzW",
                line: "QpKCiRc0dINl8bpP",
                navigationButtonsContainer: "LS_EVGVUVS3ddaDN",
                navigationButton: "YQz_nas4YkMzfMeP",
                navigationButtonImage: "optMZLh1WxR30fuT"
            },
            ts = {
                dropdownContainer: "Qm1DVeoG02gp6P0o",
                dropdownContainerText: "DiYkY2JdMJ2kPIDv",
                dropdownMain: "ocNt56OVIPz4aRUg",
                modelTypeSection: "Gqp85FObJz8gprmz",
                dropdownHeader: "NdatnvKdUXByjfTg",
                dropdownHeaderButton: "a1Be7vKSrIrj3yv6",
                dropdownHeaderText: "ettFKBaV44b8bds8",
                dropdownCloseIcon: "Oa33ewrj1U9LBTyw",
                moduleHeader: "L8AYJugaJRXneJTy",
                module: "rw92O9aAwGvJsRrI",
                sticky: "o_7MvyZVqsI33zvr",
                dropdownCta: "cLQahKMA5Sm_IUTI",
                dropdownCtaDown: "aNKtZQZ3BavXJTcZ",
                dropdownCtaUp: "Gp1KIF5TfxFw5h5B",
                dropDownSticky: "vnQaMS__C3fFeyGD"
            },
            ns = {
                colors: "'~content/theme/colors.module.css'",
                thematicBlue: "#1E78F3",
                detectionHumanColor: "#2ca961",
                detectionAiColor: "#ba4747",
                detectionSplitColor: "#e7b507",
                main: "x9YyN3qnXTtQEGE7",
                headerText: "IhefYFSBSAryY9Rm",
                active: "rBlukGY6irFTlZrK",
                title: "WsUN4eF3arsX0c4y",
                checkbox: "WTfIi423sRxTx9W0",
                border: "x2nW158K6y0mZflV",
                description: "voWtNTDGwYyMmlZ5",
                bullet: "Wbvl4dgQbSF_B_XA",
                bulletGood: "ZaunOecdbvhrU4Uh Wbvl4dgQbSF_B_XA",
                bulletAverage: "E0ydXNBZwGuJIYa7 Wbvl4dgQbSF_B_XA",
                bulletBad: "MFWVXJ5LIT8SX9Jj Wbvl4dgQbSF_B_XA",
                performanceScores: "z2apj3rZr1USFSuw",
                performanceScoreText: "aB6UUjAYEcy9W6va",
                performanceScoreRating: "GdFcPWX2XM_0VrYM",
                license: "zDvH4yCyl3fTl2Rz",
                modelHeader: "Ys20WLhVyC3_eVK1"
            };

        function rs({
            performanceScore: t
        }) {
            const {
                score: n,
                text: r
            } = t;
            let o = ns.bulletAverage;
            return n >= 4 ? o = ns.bulletGood : n <= 2.5 && (o = ns.bulletBad), (0, e.jsxs)("div", {
                className: ns.description,
                children: [(0, e.jsx)("div", {
                    className: o
                }), (0, e.jsx)("p", {
                    className: ns.performanceScoreText,
                    children: r
                }), (0, e.jsxs)("p", {
                    className: ns.performanceScoreRating,
                    children: [n, "/5"]
                })]
            })
        }

        function os({
            model: t,
            isActive: n
        }) {
            const {
                id: r,
                name: o,
                license: i,
                performanceScores: a
            } = t, l = Fu();
            return (0, e.jsxs)("div", {
                className: [ns.main, "model"].join(" "),
                role: "button",
                onClick: () => l($i(r)),
                onKeyDown: e => {
                    ["Enter", "Space"].includes(e.code) && (e.preventDefault(), l($i(r)))
                },
                children: [(0, e.jsxs)("div", {
                    className: ns.modelHeader,
                    children: [(0, e.jsxs)("div", {
                        className: ns.title,
                        children: [(0, e.jsx)("input", {
                            type: "checkbox",
                            checked: n,
                            className: ns.checkbox,
                            onChange: () => {}
                        }), (0, e.jsx)("p", {
                            className: ns.headerText,
                            children: o
                        })]
                    }), (0, e.jsx)("div", {
                        children: (0, e.jsx)("p", {
                            className: ns.license,
                            children: i
                        })
                    })]
                }), (0, e.jsx)("div", {
                    className: ns.performanceScores,
                    children: a.map(((t, n) => (0, e.jsx)(rs, {
                        performanceScore: t
                    }, n)))
                })]
            })
        }

        function is({
            activeModelIds: t,
            sticky: r
        }) {
            const o = Fu(),
                i = (0, n.useRef)(null),
                a = () => {
                    o(Mi(!1))
                };
            (0, n.useEffect)((() => {
                const e = e => {
                    i.current ? .contains(e.target) || a()
                };
                return document.addEventListener("click", e), () => {
                    document.removeEventListener("click", e)
                }
            }), []);
            const l = jt()({
                [ts.dropdownMain]: !0,
                [ts.dropDownSticky]: r
            });
            return (0, e.jsx)("div", {
                ref: i,
                id: "dfd-model-selection",
                className: l,
                onClick: e => e.stopPropagation(),
                children: Object.entries(Xo).map((([n, r], o) => (0, e.jsxs)("section", {
                    className: ts.modelTypeSection,
                    children: [(0, e.jsxs)("div", {
                        className: ts.dropdownHeader,
                        children: [(0, e.jsxs)("h4", {
                            className: ts.dropdownHeaderText,
                            children: [n, " Models"]
                        }), 0 === o && (0, e.jsx)("button", {
                            className: ts.dropdownHeaderButton,
                            type: "button",
                            onClick: a,
                            children: (0, e.jsx)("img", {
                                className: ts.dropdownCloseIcon,
                                alt: "Close",
                                src: Tu("close.svg")
                            })
                        })]
                    }), r.map((n => (0, e.jsx)(os, {
                        model: n,
                        isActive: t.includes(n.id)
                    }, n.id)))]
                }, n)))
            })
        }

        function as(e) {
            const t = Wo.flatMap((t => e.includes(t.id) ? t.name : []));
            return 0 === t.length ? "Please select a model." : t.length === Ho ? "All models" : t.join(", ")
        }

        function ls({
            sticky: t
        }) {
            const n = Fu(),
                r = Uu((e => e.settings.activeModelIds)),
                o = Uu((e => e.app.isModelSelectionOpen)),
                i = jt()({
                    [ts.module]: !0,
                    [ts.sticky]: t
                }),
                a = jt()(ts.dropdownCta, {
                    [ts.dropdownCtaUp]: t ? !o : o,
                    [ts.dropdownCtaDown]: t ? o : !o
                });
            return (0, e.jsxs)("div", {
                className: i,
                children: [(0, e.jsx)("h3", {
                    className: ts.moduleHeader,
                    children: "Model(s) in Use"
                }), (0, e.jsxs)("div", {
                    className: ts.dropdownContainer,
                    onClick: e => (e.stopPropagation(), void n(Mi(!o))),
                    role: "button",
                    children: [(0, e.jsx)("p", {
                        className: ts.dropdownContainerText,
                        children: as(r)
                    }), (0, e.jsx)("img", {
                        className: a,
                        alt: "Open",
                        src: Tu("dropdownArrow.svg")
                    })]
                }), o && (0, e.jsx)(is, {
                    activeModelIds: r,
                    sticky: t
                })]
            })
        }
        const us = Tu("dropdownArrow.svg");

        function ss() {
            const t = Fu();
            return (0, e.jsxs)("div", {
                className: es.main,
                children: [(0, e.jsx)(ls, {
                    sticky: !1
                }), (0, e.jsx)("hr", {
                    className: es.line
                }), (0, e.jsx)("div", {
                    className: es.navigationButtonsContainer,
                    children: (0, e.jsxs)("button", {
                        className: es.navigationButton,
                        onClick: function() {
                            t(Li("waysToActivate"))
                        },
                        type: "button",
                        children: [(0, e.jsx)("span", {
                            children: "Ways to Activate"
                        }), (0, e.jsx)("img", {
                            alt: "go to ways to activate",
                            className: es.navigationButtonImage,
                            src: us
                        })]
                    })
                })]
            })
        }
        const cs = {
                sidebarWidth: "275px",
                minimumSidebarWidth: "238px",
                sidebarMain: "ycO7zzeZQ0gReIMF",
                sidebarContentScrollable: "aamdzaWqzH10JLfg",
                sidebarContent: "k3UCRQYenHcXhvLC",
                open: "D9a8FM4KO7Lrm8YG",
                resizeContainer: "YLVRr3RkI5Di0WiE",
                resizeHandle: "EYB2X2XyZT_xcsRM"
            },
            fs = {
                main: "FIe0IEEOE17ENmto",
                backButton: "wtmpGOr2kSDsLzf6",
                backButtonImage: "MUlSXeO1hlw_uZ22",
                title: "JQEtnFLRHLXvP11J"
            },
            ds = Tu("dropdownArrow.svg");

        function ps({
            children: t,
            onBackClick: n,
            title: r
        }) {
            return (0, e.jsxs)("div", {
                className: fs.main,
                children: [(0, e.jsx)("button", {
                    className: fs.backButton,
                    onClick: n,
                    type: "button",
                    children: (0, e.jsx)("img", {
                        className: fs.backButtonImage,
                        src: ds,
                        alt: "go back"
                    })
                }), (0, e.jsx)("h3", {
                    className: fs.title,
                    children: r
                }), (0, e.jsx)("div", {
                    children: t
                })]
            })
        }
        const hs = {
                activateBox: "Am5C1KnRjfNDsUoB",
                activateHeader: "fmBhaK5WRNY7cWZN",
                activateGifHeader: "OO4p0DEZSjSQB3NB",
                gif: "gOLnQam2ThdueeSR"
            },
            gs = {
                colors: "'~content/theme/colors.module.css'",
                thematicGray: "#eff3f7",
                thematicBlue: "#1E78F3",
                main: "uISYSOarWf5imU3v",
                header: "qFLQnzlLn4sDKVnX",
                button: "P1MvQYvkyh19O05B"
            },
            ms = {
                brave: "brave://extensions/shortcuts",
                chrome: "chrome://extensions/shortcuts",
                edge: "edge://extensions/shortcuts",
                firefox: "https://support.mozilla.org/en-US/kb/manage-extension-shortcuts-firefox",
                safari: null,
                opera: "opera://extensions/shortcuts",
                unknown: null
            }[function() {
                const {
                    userAgent: e,
                    brave: t
                } = navigator;
                if (t) return "brave";
                const n = e.includes("Chrome");
                return e.includes("Edg") ? "edge" : e.includes("Safari") && !n ? "safari" : e.includes("OPR") || e.includes("Opera") ? "opera" : e.includes("Chrome") ? "chrome" : "unknown"
            }()];

        function vs() {
            const t = Uu((e => e.settings.keyboardShortcuts)).find((e => "analyze_selection" === e.name));
            return (0, e.jsxs)("div", {
                className: gs.main,
                children: [(0, e.jsx)("h4", {
                    className: gs.header,
                    children: t ? .shortcut ? t.shortcut : "No shortcut set"
                }), (0, e.jsx)("button", {
                    type: "button",
                    onClick: function() {
                        Ki({
                            message: "openTab",
                            payload: ms
                        })
                    },
                    className: gs.button,
                    children: (0, e.jsx)("img", {
                        className: gs.buttonImage,
                        src: Tu("edit.svg"),
                        alt: "edit keyboard shortcut"
                    })
                })]
            })
        }

        function ys({
            title: t,
            children: n
        }) {
            return (0, e.jsxs)("div", {
                className: hs.activateBox,
                children: [(0, e.jsx)("h3", {
                    className: hs.activateGifHeader,
                    children: t
                }), n]
            })
        }

        function bs() {
            return (0, e.jsxs)("div", {
                className: hs.activate,
                children: [ms && (0, e.jsx)(ys, {
                    title: "Keyboard Shortcut",
                    children: (0, e.jsx)(vs, {})
                }), (0, e.jsx)(ys, {
                    title: "Right Click on Highlight",
                    children: (0, e.jsx)("img", {
                        className: hs.gif,
                        src: `${Au("right_click.gif")}`,
                        alt: "Right Click on Highlight"
                    })
                }), (0, e.jsx)(ys, {
                    title: "Instance on Highlight",
                    children: (0, e.jsx)("img", {
                        className: hs.gif,
                        src: `${Au("selection.gif")}`,
                        alt: "Instance on Highlight"
                    })
                })]
            })
        }

        function ws() {
            const t = Fu();
            return (0, e.jsx)("div", {
                className: es.main,
                children: (0, e.jsx)(ps, {
                    onBackClick: function() {
                        t(Li("settings"))
                    },
                    title: "Ways to Activate",
                    children: (0, e.jsx)(bs, {})
                })
            })
        }
        const _s = {
            main: "p1DGJT3SsnSEkGir",
            text: "TWZiip8tfxXxVuZW",
            link: "HJdTHhR5c3ljKZZ3"
        };

        function xs() {
            return (0, e.jsxs)("div", {
                className: _s.main,
                children: [(0, e.jsx)("p", {
                    className: _s.text,
                    children: "You have not opted into Deep Fake Detector's data collection, which is necessary for the extension to function properly."
                }), (0, e.jsxs)("p", {
                    className: _s.text,
                    children: ["Please visit the", " ", (0, e.jsx)("a", {
                        className: _s.link,
                        href: o.g.chrome ? .runtime ? .getURL("consent.html"),
                        target: "_blank",
                        rel: "noreferrer noopener",
                        children: "consent page"
                    }), " ", "and choose to opt in to continue using the extension."]
                })]
            })
        }
        const Ss = {
                contentPadding: "15px",
                main: "imjmbh6QJLVfKEOs",
                buttonsContainer: "UJwvz0YYixac2qOb",
                logoImage: "c4YCHz9mJBwIsEZ0",
                navigationButton: "iekUSMpu_cFRJS2i",
                navigationButtonImage: "tCo63RIMXo8zsnUq",
                closeButton: "sYOQEkVDbhnW0s75 iekUSMpu_cFRJS2i",
                closeButtonImage: "lv3fmyaWvT_E2eVr tCo63RIMXo8zsnUq"
            },
            Es = Tu("close.svg"),
            ks = Tu("logoBlack.svg"),
            Cs = Tu("settings.svg"),
            Ts = Tu("analysis.svg"),
            Ns = Tu("analysisActive.svg"),
            Rs = Tu("settingsActive.svg");

        function As() {
            const t = Fu(),
                n = Uu((e => e.app.currentPage)),
                r = Uu((e => e.app[ki]));
            return (0, e.jsxs)("div", {
                className: Ss.main,
                children: [(0, e.jsx)("div", {
                    className: Ss.logo,
                    children: (0, e.jsx)("img", {
                        className: Ss.logoImage,
                        alt: "Deep Fake Detector logo",
                        src: ks
                    })
                }), (0, e.jsxs)("div", {
                    className: Ss.buttonsContainer,
                    children: [r && (0, e.jsxs)(e.Fragment, {
                        children: [(0, e.jsx)("button", {
                            className: Ss.navigationButton,
                            onClick: () => t(Li("analysis")),
                            type: "button",
                            children: (0, e.jsx)("img", {
                                className: Ss.navigationButtonImage,
                                src: "analysis" === n ? Ns : Ts,
                                alt: "Analysis"
                            })
                        }), (0, e.jsx)("button", {
                            className: Ss.navigationButton,
                            onClick: () => t(Li("settings")),
                            type: "button",
                            children: (0, e.jsx)("img", {
                                className: Ss.navigationButtonImage,
                                src: ["settings", "waysToActivate"].includes(n) ? Rs : Cs,
                                alt: "Settings"
                            })
                        })]
                    }), (0, e.jsx)("button", {
                        className: Ss.closeButton,
                        onClick: () => t(Ii()),
                        type: "button",
                        children: (0, e.jsx)("img", {
                            className: Ss.closeButtonImage,
                            src: Es,
                            alt: "Close"
                        })
                    })]
                })]
            })
        }
        const Ls = 100,
            Os = (0, n.createContext)(null),
            Is = "dfd-sidebar-content";

        function Ds({
            resizableRef: t,
            width: r
        }) {
            const o = Uu((e => e.app.currentPage)),
                i = Uu((e => e.app.isSidebarOpen)),
                a = Uu((e => e.app[ki])),
                l = Fu(),
                u = (0, Mt.debounce)((e => {
                    ! function(e) {
                        Po = { ...e,
                            updatedAt: Date.now(),
                            wordCount: Ao(e.text)
                        }
                    }({ ...e,
                        updatedAt: Date.now(),
                        wordCount: Ao(e.text)
                    })
                }), Ls);
            (0, n.useEffect)((() => {
                function e() {
                    const e = function() {
                        const e = window.getSelection();
                        return e ? .toString() ? {
                            node: e.anchorNode.parentNode,
                            text: e.toString()
                        } : Mo
                    }();
                    e && u(e)
                }

                function t(e) {
                    "Escape" === e.key && l(Pi())
                }
                return document.addEventListener("selectionchange", e), document.addEventListener("keyup", t), () => {
                    document.removeEventListener("selectionchange", e), u.cancel(), document.removeEventListener("keyup", t)
                }
            }), [u]);
            const s = jt()({
                    [cs.sidebarMain]: !0,
                    [cs.open]: i
                }),
                {
                    attributes: c,
                    listeners: f,
                    setNodeRef: d
                } = It({
                    id: "resizable-sidebar"
                }),
                p = jt()(cs.sidebarContentScrollable, {
                    [cs.sidebarContentScrollableAnalysis]: "analysis" === o
                });
            return (0, e.jsx)(Os.Provider, {
                value: {
                    scrollToElement: e => Bo(e)
                },
                children: (0, e.jsx)("div", {
                    id: "dfd-app-root",
                    children: (0, e.jsx)(Xi, {
                        children: (0, e.jsx)("div", {
                            className: s,
                            ref: t,
                            style: {
                                width: r
                            },
                            children: (0, e.jsxs)("div", {
                                className: cs.resizeContainer,
                                children: [(0, e.jsx)("button", {
                                    className: cs.resizeHandle,
                                    type: "button",
                                    ref: d,
                                    ...f,
                                    ...c
                                }), (0, e.jsx)(As, {}), (0, e.jsx)("div", {
                                    className: p,
                                    children: (0, e.jsx)("div", {
                                        id: Is,
                                        className: cs.sidebarContent,
                                        children: a ? (0, e.jsxs)(e.Fragment, {
                                            children: ["settings" === o && (0, e.jsx)(ss, {}), "analysis" === o && (0, e.jsx)(Zu, {}), "waysToActivate" === o && (0, e.jsx)(ws, {})]
                                        }) : (0, e.jsx)(xs, {})
                                    })
                                })]
                            })
                        })
                    })
                })
            })
        }

        function js(e, t) {
            let n = e - t;
            if (n < Ti) return Ti;
            const r = window.document.body.clientWidth - Ni;
            return n >= r && (n = r), n
        }

        function Ms() {
            const t = (0, n.useRef)(null),
                r = Uu((e => e.app.sidebarWidth)),
                [o, i] = (0, n.useState)(r),
                a = R();
            return (0, n.useEffect)((() => {
                i(r)
            }), [r]), (0, e.jsx)(Rt, {
                onDragEnd: function(e) {
                    const t = js(r, e.delta.x);
                    i(t), a(zi(t))
                },
                onDragMove: function(e) {
                    i(js(r, e.delta.x))
                },
                children: (0, e.jsx)(Ds, {
                    resizableRef: t,
                    width: o
                })
            })
        }

        function Ps() {
            const t = qi();
            return (0, e.jsx)(E, {
                store: t,
                children: (0, e.jsx)(zs, {})
            })
        }

        function zs() {
            const t = Tu("reset.css"),
                n = Nu();
            return (0, e.jsxs)(e.Fragment, {
                children: [(0, e.jsx)("link", {
                    href: t,
                    type: "text/css",
                    rel: "stylesheet"
                }), (0, e.jsx)("link", {
                    href: n,
                    type: "text/css",
                    rel: "stylesheet"
                }), (0, e.jsx)(Ms, {})]
            })
        }

        function Bs(e = document.head) {
            const t = `\n    @font-face {\n      font-style: normal;\n      font-weight: 400;\n      font-family: 'Metropolis';\n      src: url(${Lu("Metropolis-Regular")}) format('opentype');\n    }\n    @font-face {\n      font-style: normal;\n      font-weight: 500;\n      font-family: 'Metropolis';\n      src: url(${Lu("Metropolis-Medium")}) format('opentype');\n    }\n    @font-face {\n      font-style: normal;\n      font-weight: 600;\n      font-family: 'Metropolis';\n      src: url(${Lu("Metropolis-Semibold")}) format('opentype');\n    }\n    @font-face {\n      font-style: normal;\n      font-weight: 700;\n      font-family: 'Metropolis';\n      src: url(${Lu("Metropolis-Bold")}) format('opentype');\n    }\n    @font-face {\n      font-style: normal;\n      font-weight: 400;\n      src: url(${Lu("CircularStd")}) format('opentype');\n      font-family: 'CircularStd';\n    }\n    @font-face {\n      font-style: normal;\n      font-weight: 300;\n      src: url(${Lu("CircularStdLight")}) format('opentype');\n      font-family: 'CircularStd';\n    }\n  `;
            try {
                const n = document.createElement("style");
                n.appendChild(document.createTextNode(function(e, t = {}) {
                    return (0, Ro.sanitize)(e, { ...Fo,
                        ...t
                    })
                }(t))), e.appendChild(n)
            } catch (e) {
                jo.warn("Could not inject font faces into head")
            }
        }
        const Fs = "dfd-root";
        let Us, Ws = null;

        function Hs() {
            let n = document.querySelector(`#${Fs}`);
            if (n) return;
            Bs(), n = document.createElement("div"), n.style.display = "none", n.id = Fs;
            const r = document.createElement("link");
            r.rel = "stylesheet", r.type = "text/css", r.href = Nu(), r.addEventListener("load", (() => {
                n.style.display = "block"
            })), n.appendChild(r);
            document.querySelector("body").appendChild(n), Us = n.attachShadow({
                mode: "closed"
            });
            (0, t.H)(Us).render((0, e.jsx)(Ps, {})),
                function() {
                    if (Ws) return;
                    Ws = new MutationObserver(((e, t) => {
                        for (const t of e)
                            if ("childList" === t.type)
                                for (const e of t.removedNodes)
                                    if ("BODY" === e.nodeName || e ? .getAttribute("id") === Fs) return void Hs()
                    })), Ws.observe(document.documentElement, {
                        childList: !0,
                        attributeFilter: ["id"]
                    })
                }()
        }
        chrome.runtime.onMessage.addListener((async function(e, t, n) {
            jo.debug("message received from background: ", {
                request: e
            });
            const r = qi(),
                {
                    message: o,
                    payload: i
                } = e;
            if ("openSidebar" === o) return r.dispatch(Di());
            if (await async function() {
                    return !0
                }()) switch (o) {
                case "detectionResponse":
                    return async function(e) {
                        return qi().dispatch(pi(e))
                    }(i);
                case "detectionFailure":
                    return async function(e) {
                        return qi().dispatch(bi(e))
                    }(i);
                case "scanSelection":
                    const t = r.getState(),
                        {
                            triggerMethod: n
                        } = i,
                        o = t.settings.activeModelIds;
                    return r.dispatch(di({
                        detectorMethods: o,
                        triggerMethod: n
                    })), void r.dispatch(Oi());
                case "loadStorageState":
                    if (!i) return;
                    const a = i;
                    return r.dispatch(ji(a.app)), r.dispatch(Vi(a.settings)), void r.dispatch(hi(a.analyses));
                case "scrollToAnalysis":
                    return void Bo(i.selector);
                case "keyboardShortcutsResponse":
                    return r.dispatch(Hi(i));
                default:
                    jo.debug("unhandled message received:", {
                        request: e
                    })
            } else jo.debug(`${o} ignored due to user not opting in`)
        })), Hs(), Ki({
            message: "readyForStorageState"
        }), Ki({
            message: "keyboardShortcutsRequest"
        })
    })()
})();
//# sourceMappingURL=content.js.map
