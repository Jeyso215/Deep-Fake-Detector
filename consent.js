(() => {
    var e = {
            838: function(e) {
                e.exports = function() {
                    "use strict";
                    const {
                        entries: e,
                        setPrototypeOf: t,
                        isFrozen: n,
                        getPrototypeOf: r,
                        getOwnPropertyDescriptor: l
                    } = Object;
                    let {
                        freeze: a,
                        seal: o,
                        create: i
                    } = Object, {
                        apply: u,
                        construct: s
                    } = "undefined" != typeof Reflect && Reflect;
                    a || (a = function(e) {
                        return e
                    }), o || (o = function(e) {
                        return e
                    }), u || (u = function(e, t, n) {
                        return e.apply(t, n)
                    }), s || (s = function(e, t) {
                        return new e(...t)
                    });
                    const c = S(Array.prototype.forEach),
                        f = S(Array.prototype.pop),
                        d = S(Array.prototype.push),
                        p = S(String.prototype.toLowerCase),
                        m = S(String.prototype.toString),
                        h = S(String.prototype.match),
                        g = S(String.prototype.replace),
                        y = S(String.prototype.indexOf),
                        v = S(String.prototype.trim),
                        b = S(Object.prototype.hasOwnProperty),
                        w = S(RegExp.prototype.test),
                        k = E(TypeError);

                    function S(e) {
                        return function(t) {
                            for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++) r[l - 1] = arguments[l];
                            return u(e, t, r)
                        }
                    }

                    function E(e) {
                        return function() {
                            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                            return s(e, n)
                        }
                    }

                    function x(e, r) {
                        let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : p;
                        t && t(e, null);
                        let a = r.length;
                        for (; a--;) {
                            let t = r[a];
                            if ("string" == typeof t) {
                                const e = l(t);
                                e !== t && (n(r) || (r[a] = e), t = e)
                            }
                            e[t] = !0
                        }
                        return e
                    }

                    function _(e) {
                        for (let t = 0; t < e.length; t++) b(e, t) || (e[t] = null);
                        return e
                    }

                    function C(t) {
                        const n = i(null);
                        for (const [r, l] of e(t)) b(t, r) && (Array.isArray(l) ? n[r] = _(l) : l && "object" == typeof l && l.constructor === Object ? n[r] = C(l) : n[r] = l);
                        return n
                    }

                    function T(e, t) {
                        for (; null !== e;) {
                            const n = l(e, t);
                            if (n) {
                                if (n.get) return S(n.get);
                                if ("function" == typeof n.value) return S(n.value)
                            }
                            e = r(e)
                        }

                        function n() {
                            return null
                        }
                        return n
                    }
                    const N = a(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
                        L = a(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
                        P = a(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
                        R = a(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
                        D = a(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]),
                        z = a(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
                        O = a(["#text"]),
                        A = a(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]),
                        M = a(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
                        I = a(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
                        F = a(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
                        U = o(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
                        j = o(/<%[\w\W]*|[\w\W]*%>/gm),
                        H = o(/\${[\w\W]*}/gm),
                        B = o(/^data-[\-\w.\u00B7-\uFFFF]/),
                        W = o(/^aria-[\-\w]+$/),
                        $ = o(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
                        V = o(/^(?:\w+script|data):/i),
                        Q = o(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
                        q = o(/^html$/i),
                        Y = o(/^[a-z][.\w]*(-[.\w]+)+$/i);
                    var G = Object.freeze({
                        __proto__: null,
                        MUSTACHE_EXPR: U,
                        ERB_EXPR: j,
                        TMPLIT_EXPR: H,
                        DATA_ATTR: B,
                        ARIA_ATTR: W,
                        IS_ALLOWED_URI: $,
                        IS_SCRIPT_OR_DATA: V,
                        ATTR_WHITESPACE: Q,
                        DOCTYPE_NAME: q,
                        CUSTOM_ELEMENT: Y
                    });
                    const K = {
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
                        X = function() {
                            return "undefined" == typeof window ? null : window
                        },
                        Z = function(e, t) {
                            if ("object" != typeof e || "function" != typeof e.createPolicy) return null;
                            let n = null;
                            const r = "data-tt-policy-suffix";
                            t && t.hasAttribute(r) && (n = t.getAttribute(r));
                            const l = "dompurify" + (n ? "#" + n : "");
                            try {
                                return e.createPolicy(l, {
                                    createHTML: e => e,
                                    createScriptURL: e => e
                                })
                            } catch (e) {
                                return console.warn("TrustedTypes policy " + l + " could not be created."), null
                            }
                        };

                    function J() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : X();
                        const n = e => J(e);
                        if (n.version = "3.1.6", n.removed = [], !t || !t.document || t.document.nodeType !== K.document) return n.isSupported = !1, n;
                        let {
                            document: r
                        } = t;
                        const l = r,
                            o = l.currentScript,
                            {
                                DocumentFragment: u,
                                HTMLTemplateElement: s,
                                Node: S,
                                Element: E,
                                NodeFilter: _,
                                NamedNodeMap: U = t.NamedNodeMap || t.MozNamedAttrMap,
                                HTMLFormElement: j,
                                DOMParser: H,
                                trustedTypes: B
                            } = t,
                            W = E.prototype,
                            V = T(W, "cloneNode"),
                            Q = T(W, "remove"),
                            Y = T(W, "nextSibling"),
                            ee = T(W, "childNodes"),
                            te = T(W, "parentNode");
                        if ("function" == typeof s) {
                            const e = r.createElement("template");
                            e.content && e.content.ownerDocument && (r = e.content.ownerDocument)
                        }
                        let ne, re = "";
                        const {
                            implementation: le,
                            createNodeIterator: ae,
                            createDocumentFragment: oe,
                            getElementsByTagName: ie
                        } = r, {
                            importNode: ue
                        } = l;
                        let se = {};
                        n.isSupported = "function" == typeof e && "function" == typeof te && le && void 0 !== le.createHTMLDocument;
                        const {
                            MUSTACHE_EXPR: ce,
                            ERB_EXPR: fe,
                            TMPLIT_EXPR: de,
                            DATA_ATTR: pe,
                            ARIA_ATTR: me,
                            IS_SCRIPT_OR_DATA: he,
                            ATTR_WHITESPACE: ge,
                            CUSTOM_ELEMENT: ye
                        } = G;
                        let {
                            IS_ALLOWED_URI: ve
                        } = G, be = null;
                        const we = x({}, [...N, ...L, ...P, ...D, ...O]);
                        let ke = null;
                        const Se = x({}, [...A, ...M, ...I, ...F]);
                        let Ee = Object.seal(i(null, {
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
                            xe = null,
                            _e = null,
                            Ce = !0,
                            Te = !0,
                            Ne = !1,
                            Le = !0,
                            Pe = !1,
                            Re = !0,
                            De = !1,
                            ze = !1,
                            Oe = !1,
                            Ae = !1,
                            Me = !1,
                            Ie = !1,
                            Fe = !0,
                            Ue = !1;
                        const je = "user-content-";
                        let He = !0,
                            Be = !1,
                            We = {},
                            $e = null;
                        const Ve = x({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
                        let Qe = null;
                        const qe = x({}, ["audio", "video", "img", "source", "image", "track"]);
                        let Ye = null;
                        const Ge = x({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]),
                            Ke = "http://www.w3.org/1998/Math/MathML",
                            Xe = "http://www.w3.org/2000/svg",
                            Ze = "http://www.w3.org/1999/xhtml";
                        let Je = Ze,
                            et = !1,
                            tt = null;
                        const nt = x({}, [Ke, Xe, Ze], m);
                        let rt = null;
                        const lt = ["application/xhtml+xml", "text/html"],
                            at = "text/html";
                        let ot = null,
                            it = null;
                        const ut = r.createElement("form"),
                            st = function(e) {
                                return e instanceof RegExp || e instanceof Function
                            },
                            ct = function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                if (!it || it !== e) {
                                    if (e && "object" == typeof e || (e = {}), e = C(e), rt = -1 === lt.indexOf(e.PARSER_MEDIA_TYPE) ? at : e.PARSER_MEDIA_TYPE, ot = "application/xhtml+xml" === rt ? m : p, be = b(e, "ALLOWED_TAGS") ? x({}, e.ALLOWED_TAGS, ot) : we, ke = b(e, "ALLOWED_ATTR") ? x({}, e.ALLOWED_ATTR, ot) : Se, tt = b(e, "ALLOWED_NAMESPACES") ? x({}, e.ALLOWED_NAMESPACES, m) : nt, Ye = b(e, "ADD_URI_SAFE_ATTR") ? x(C(Ge), e.ADD_URI_SAFE_ATTR, ot) : Ge, Qe = b(e, "ADD_DATA_URI_TAGS") ? x(C(qe), e.ADD_DATA_URI_TAGS, ot) : qe, $e = b(e, "FORBID_CONTENTS") ? x({}, e.FORBID_CONTENTS, ot) : Ve, xe = b(e, "FORBID_TAGS") ? x({}, e.FORBID_TAGS, ot) : {}, _e = b(e, "FORBID_ATTR") ? x({}, e.FORBID_ATTR, ot) : {}, We = !!b(e, "USE_PROFILES") && e.USE_PROFILES, Ce = !1 !== e.ALLOW_ARIA_ATTR, Te = !1 !== e.ALLOW_DATA_ATTR, Ne = e.ALLOW_UNKNOWN_PROTOCOLS || !1, Le = !1 !== e.ALLOW_SELF_CLOSE_IN_ATTR, Pe = e.SAFE_FOR_TEMPLATES || !1, Re = !1 !== e.SAFE_FOR_XML, De = e.WHOLE_DOCUMENT || !1, Ae = e.RETURN_DOM || !1, Me = e.RETURN_DOM_FRAGMENT || !1, Ie = e.RETURN_TRUSTED_TYPE || !1, Oe = e.FORCE_BODY || !1, Fe = !1 !== e.SANITIZE_DOM, Ue = e.SANITIZE_NAMED_PROPS || !1, He = !1 !== e.KEEP_CONTENT, Be = e.IN_PLACE || !1, ve = e.ALLOWED_URI_REGEXP || $, Je = e.NAMESPACE || Ze, Ee = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && st(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (Ee.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && st(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (Ee.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && "boolean" == typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (Ee.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Pe && (Te = !1), Me && (Ae = !0), We && (be = x({}, O), ke = [], !0 === We.html && (x(be, N), x(ke, A)), !0 === We.svg && (x(be, L), x(ke, M), x(ke, F)), !0 === We.svgFilters && (x(be, P), x(ke, M), x(ke, F)), !0 === We.mathMl && (x(be, D), x(ke, I), x(ke, F))), e.ADD_TAGS && (be === we && (be = C(be)), x(be, e.ADD_TAGS, ot)), e.ADD_ATTR && (ke === Se && (ke = C(ke)), x(ke, e.ADD_ATTR, ot)), e.ADD_URI_SAFE_ATTR && x(Ye, e.ADD_URI_SAFE_ATTR, ot), e.FORBID_CONTENTS && ($e === Ve && ($e = C($e)), x($e, e.FORBID_CONTENTS, ot)), He && (be["#text"] = !0), De && x(be, ["html", "head", "body"]), be.table && (x(be, ["tbody"]), delete xe.tbody), e.TRUSTED_TYPES_POLICY) {
                                        if ("function" != typeof e.TRUSTED_TYPES_POLICY.createHTML) throw k('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
                                        if ("function" != typeof e.TRUSTED_TYPES_POLICY.createScriptURL) throw k('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
                                        ne = e.TRUSTED_TYPES_POLICY, re = ne.createHTML("")
                                    } else void 0 === ne && (ne = Z(B, o)), null !== ne && "string" == typeof re && (re = ne.createHTML(""));
                                    a && a(e), it = e
                                }
                            },
                            ft = x({}, ["mi", "mo", "mn", "ms", "mtext"]),
                            dt = x({}, ["foreignobject", "annotation-xml"]),
                            pt = x({}, ["title", "style", "font", "a", "script"]),
                            mt = x({}, [...L, ...P, ...R]),
                            ht = x({}, [...D, ...z]),
                            gt = function(e) {
                                let t = te(e);
                                t && t.tagName || (t = {
                                    namespaceURI: Je,
                                    tagName: "template"
                                });
                                const n = p(e.tagName),
                                    r = p(t.tagName);
                                return !!tt[e.namespaceURI] && (e.namespaceURI === Xe ? t.namespaceURI === Ze ? "svg" === n : t.namespaceURI === Ke ? "svg" === n && ("annotation-xml" === r || ft[r]) : Boolean(mt[n]) : e.namespaceURI === Ke ? t.namespaceURI === Ze ? "math" === n : t.namespaceURI === Xe ? "math" === n && dt[r] : Boolean(ht[n]) : e.namespaceURI === Ze ? !(t.namespaceURI === Xe && !dt[r]) && !(t.namespaceURI === Ke && !ft[r]) && !ht[n] && (pt[n] || !mt[n]) : !("application/xhtml+xml" !== rt || !tt[e.namespaceURI]))
                            },
                            yt = function(e) {
                                d(n.removed, {
                                    element: e
                                });
                                try {
                                    te(e).removeChild(e)
                                } catch (t) {
                                    Q(e)
                                }
                            },
                            vt = function(e, t) {
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
                                if (t.removeAttribute(e), "is" === e && !ke[e])
                                    if (Ae || Me) try {
                                        yt(t)
                                    } catch (e) {} else try {
                                        t.setAttribute(e, "")
                                    } catch (e) {}
                            },
                            bt = function(e) {
                                let t = null,
                                    n = null;
                                if (Oe) e = "<remove></remove>" + e;
                                else {
                                    const t = h(e, /^[\r\n\t ]+/);
                                    n = t && t[0]
                                }
                                "application/xhtml+xml" === rt && Je === Ze && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
                                const l = ne ? ne.createHTML(e) : e;
                                if (Je === Ze) try {
                                    t = (new H).parseFromString(l, rt)
                                } catch (e) {}
                                if (!t || !t.documentElement) {
                                    t = le.createDocument(Je, "template", null);
                                    try {
                                        t.documentElement.innerHTML = et ? re : l
                                    } catch (e) {}
                                }
                                const a = t.body || t.documentElement;
                                return e && n && a.insertBefore(r.createTextNode(n), a.childNodes[0] || null), Je === Ze ? ie.call(t, De ? "html" : "body")[0] : De ? t.documentElement : a
                            },
                            wt = function(e) {
                                return ae.call(e.ownerDocument || e, e, _.SHOW_ELEMENT | _.SHOW_COMMENT | _.SHOW_TEXT | _.SHOW_PROCESSING_INSTRUCTION | _.SHOW_CDATA_SECTION, null)
                            },
                            kt = function(e) {
                                return e instanceof j && ("string" != typeof e.nodeName || "string" != typeof e.textContent || "function" != typeof e.removeChild || !(e.attributes instanceof U) || "function" != typeof e.removeAttribute || "function" != typeof e.setAttribute || "string" != typeof e.namespaceURI || "function" != typeof e.insertBefore || "function" != typeof e.hasChildNodes)
                            },
                            St = function(e) {
                                return "function" == typeof S && e instanceof S
                            },
                            Et = function(e, t, r) {
                                se[e] && c(se[e], (e => {
                                    e.call(n, t, r, it)
                                }))
                            },
                            xt = function(e) {
                                let t = null;
                                if (Et("beforeSanitizeElements", e, null), kt(e)) return yt(e), !0;
                                const r = ot(e.nodeName);
                                if (Et("uponSanitizeElement", e, {
                                        tagName: r,
                                        allowedTags: be
                                    }), e.hasChildNodes() && !St(e.firstElementChild) && w(/<[/\w]/g, e.innerHTML) && w(/<[/\w]/g, e.textContent)) return yt(e), !0;
                                if (e.nodeType === K.progressingInstruction) return yt(e), !0;
                                if (Re && e.nodeType === K.comment && w(/<[/\w]/g, e.data)) return yt(e), !0;
                                if (!be[r] || xe[r]) {
                                    if (!xe[r] && Ct(r)) {
                                        if (Ee.tagNameCheck instanceof RegExp && w(Ee.tagNameCheck, r)) return !1;
                                        if (Ee.tagNameCheck instanceof Function && Ee.tagNameCheck(r)) return !1
                                    }
                                    if (He && !$e[r]) {
                                        const t = te(e) || e.parentNode,
                                            n = ee(e) || e.childNodes;
                                        if (n && t)
                                            for (let r = n.length - 1; r >= 0; --r) {
                                                const l = V(n[r], !0);
                                                l.__removalCount = (e.__removalCount || 0) + 1, t.insertBefore(l, Y(e))
                                            }
                                    }
                                    return yt(e), !0
                                }
                                return e instanceof E && !gt(e) ? (yt(e), !0) : "noscript" !== r && "noembed" !== r && "noframes" !== r || !w(/<\/no(script|embed|frames)/i, e.innerHTML) ? (Pe && e.nodeType === K.text && (t = e.textContent, c([ce, fe, de], (e => {
                                    t = g(t, e, " ")
                                })), e.textContent !== t && (d(n.removed, {
                                    element: e.cloneNode()
                                }), e.textContent = t)), Et("afterSanitizeElements", e, null), !1) : (yt(e), !0)
                            },
                            _t = function(e, t, n) {
                                if (Fe && ("id" === t || "name" === t) && (n in r || n in ut)) return !1;
                                if (Te && !_e[t] && w(pe, t));
                                else if (Ce && w(me, t));
                                else if (!ke[t] || _e[t]) {
                                    if (!(Ct(e) && (Ee.tagNameCheck instanceof RegExp && w(Ee.tagNameCheck, e) || Ee.tagNameCheck instanceof Function && Ee.tagNameCheck(e)) && (Ee.attributeNameCheck instanceof RegExp && w(Ee.attributeNameCheck, t) || Ee.attributeNameCheck instanceof Function && Ee.attributeNameCheck(t)) || "is" === t && Ee.allowCustomizedBuiltInElements && (Ee.tagNameCheck instanceof RegExp && w(Ee.tagNameCheck, n) || Ee.tagNameCheck instanceof Function && Ee.tagNameCheck(n)))) return !1
                                } else if (Ye[t]);
                                else if (w(ve, g(n, ge, "")));
                                else if ("src" !== t && "xlink:href" !== t && "href" !== t || "script" === e || 0 !== y(n, "data:") || !Qe[e])
                                    if (Ne && !w(he, g(n, ge, "")));
                                    else if (n) return !1;
                                return !0
                            },
                            Ct = function(e) {
                                return "annotation-xml" !== e && h(e, ye)
                            },
                            Tt = function(e) {
                                Et("beforeSanitizeAttributes", e, null);
                                const {
                                    attributes: t
                                } = e;
                                if (!t) return;
                                const r = {
                                    attrName: "",
                                    attrValue: "",
                                    keepAttr: !0,
                                    allowedAttributes: ke
                                };
                                let l = t.length;
                                for (; l--;) {
                                    const a = t[l],
                                        {
                                            name: o,
                                            namespaceURI: i,
                                            value: u
                                        } = a,
                                        s = ot(o);
                                    let d = "value" === o ? u : v(u);
                                    if (r.attrName = s, r.attrValue = d, r.keepAttr = !0, r.forceKeepAttr = void 0, Et("uponSanitizeAttribute", e, r), d = r.attrValue, Re && w(/((--!?|])>)|<\/(style|title)/i, d)) {
                                        vt(o, e);
                                        continue
                                    }
                                    if (r.forceKeepAttr) continue;
                                    if (vt(o, e), !r.keepAttr) continue;
                                    if (!Le && w(/\/>/i, d)) {
                                        vt(o, e);
                                        continue
                                    }
                                    Pe && c([ce, fe, de], (e => {
                                        d = g(d, e, " ")
                                    }));
                                    const p = ot(e.nodeName);
                                    if (_t(p, s, d)) {
                                        if (!Ue || "id" !== s && "name" !== s || (vt(o, e), d = je + d), ne && "object" == typeof B && "function" == typeof B.getAttributeType)
                                            if (i);
                                            else switch (B.getAttributeType(p, s)) {
                                                case "TrustedHTML":
                                                    d = ne.createHTML(d);
                                                    break;
                                                case "TrustedScriptURL":
                                                    d = ne.createScriptURL(d)
                                            }
                                        try {
                                            i ? e.setAttributeNS(i, o, d) : e.setAttribute(o, d), kt(e) ? yt(e) : f(n.removed)
                                        } catch (e) {}
                                    }
                                }
                                Et("afterSanitizeAttributes", e, null)
                            },
                            Nt = function e(t) {
                                let n = null;
                                const r = wt(t);
                                for (Et("beforeSanitizeShadowDOM", t, null); n = r.nextNode();) Et("uponSanitizeShadowNode", n, null), xt(n) || (n.content instanceof u && e(n.content), Tt(n));
                                Et("afterSanitizeShadowDOM", t, null)
                            };
                        return n.sanitize = function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                r = null,
                                a = null,
                                o = null,
                                i = null;
                            if (et = !e, et && (e = "\x3c!--\x3e"), "string" != typeof e && !St(e)) {
                                if ("function" != typeof e.toString) throw k("toString is not a function");
                                if ("string" != typeof(e = e.toString())) throw k("dirty is not a string, aborting")
                            }
                            if (!n.isSupported) return e;
                            if (ze || ct(t), n.removed = [], "string" == typeof e && (Be = !1), Be) {
                                if (e.nodeName) {
                                    const t = ot(e.nodeName);
                                    if (!be[t] || xe[t]) throw k("root node is forbidden and cannot be sanitized in-place")
                                }
                            } else if (e instanceof S) r = bt("\x3c!----\x3e"), a = r.ownerDocument.importNode(e, !0), a.nodeType === K.element && "BODY" === a.nodeName || "HTML" === a.nodeName ? r = a : r.appendChild(a);
                            else {
                                if (!Ae && !Pe && !De && -1 === e.indexOf("<")) return ne && Ie ? ne.createHTML(e) : e;
                                if (r = bt(e), !r) return Ae ? null : Ie ? re : ""
                            }
                            r && Oe && yt(r.firstChild);
                            const s = wt(Be ? e : r);
                            for (; o = s.nextNode();) xt(o) || (o.content instanceof u && Nt(o.content), Tt(o));
                            if (Be) return e;
                            if (Ae) {
                                if (Me)
                                    for (i = oe.call(r.ownerDocument); r.firstChild;) i.appendChild(r.firstChild);
                                else i = r;
                                return (ke.shadowroot || ke.shadowrootmode) && (i = ue.call(l, i, !0)), i
                            }
                            let f = De ? r.outerHTML : r.innerHTML;
                            return De && be["!doctype"] && r.ownerDocument && r.ownerDocument.doctype && r.ownerDocument.doctype.name && w(q, r.ownerDocument.doctype.name) && (f = "<!DOCTYPE " + r.ownerDocument.doctype.name + ">\n" + f), Pe && c([ce, fe, de], (e => {
                                f = g(f, e, " ")
                            })), ne && Ie ? ne.createHTML(f) : f
                        }, n.setConfig = function() {
                            ct(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}), ze = !0
                        }, n.clearConfig = function() {
                            it = null, ze = !1
                        }, n.isValidAttribute = function(e, t, n) {
                            it || ct({});
                            const r = ot(e),
                                l = ot(t);
                            return _t(r, l, n)
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
                    return J()
                }()
            },
            251: function(e, t, n) {
                var r, l;
                r = function(e) {
                    "use strict";
                    var t, n, r = function(e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (t in arguments[n]) Object.prototype.hasOwnProperty.call(arguments[n], t) && (e[t] = arguments[n][t]);
                            return e
                        },
                        l = {
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
                        a = {},
                        o = function(e, n) {
                            if (!e || !e.setLevel) throw new TypeError("Argument is not a logger");
                            var o = e.methodFactory,
                                i = e.name || "",
                                u = a[i] || a[""] || l;

                            function s(e, t, n) {
                                var r = o(e, t, n),
                                    l = a[n] || a[""],
                                    u = -1 !== l.template.indexOf("%t"),
                                    s = -1 !== l.template.indexOf("%l"),
                                    c = -1 !== l.template.indexOf("%n");
                                return function() {
                                    for (var t = "", o = arguments.length, f = Array(o), d = 0; d < o; d++) f[d] = arguments[d];
                                    if (i || !a[n]) {
                                        var p = l.timestampFormatter(new Date),
                                            m = l.levelFormatter(e),
                                            h = l.nameFormatter(n);
                                        l.format ? t += l.format(m, h, p) : (t += l.template, u && (t = t.replace(/%t/, p)), s && (t = t.replace(/%l/, m)), c && (t = t.replace(/%n/, h))), f.length && "string" == typeof f[0] ? f[0] = t + " " + f[0] : f.unshift(t)
                                    }
                                    r.apply(void 0, f)
                                }
                            }
                            return a[i] || (e.methodFactory = s), (n = n || {}).template && (n.format = void 0), a[i] = r({}, u, n), e.setLevel(e.getLevel()), t || e.warn("It is necessary to call the function reg() of loglevel-plugin-prefix before calling apply. From the next release, it will throw an error. See more: https://github.com/kutuluk/loglevel-plugin-prefix/blob/master/README.md"), e
                        },
                        i = {
                            reg: function(e) {
                                if (!e || !e.getLogger) throw new TypeError("Argument is not a root logger");
                                t = e
                            },
                            apply: o
                        };
                    return e && (n = e.prefix, i.noConflict = function() {
                        return e.prefix === i && (e.prefix = n), i
                    }), i
                }, void 0 === (l = "function" == typeof r ? r.call(t, n, t, e) : r) || (e.exports = l)
            },
            65: function(e, t, n) {
                var r, l;
                ! function(a, o) {
                    "use strict";
                    r = function() {
                        var e = function() {},
                            t = "undefined",
                            n = typeof window !== t && typeof window.navigator !== t && /Trident\/|MSIE /.test(window.navigator.userAgent),
                            r = ["trace", "debug", "info", "warn", "error"],
                            l = {},
                            a = null;

                        function o(e, t) {
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

                        function i() {
                            console.log && (console.log.apply ? console.log.apply(console, arguments) : Function.prototype.apply.apply(console.log, [console, arguments])), console.trace && console.trace()
                        }

                        function u(r) {
                            return "debug" === r && (r = "log"), typeof console !== t && ("trace" === r && n ? i : void 0 !== console[r] ? o(console, r) : void 0 !== console.log ? o(console, "log") : e)
                        }

                        function s() {
                            for (var n = this.getLevel(), l = 0; l < r.length; l++) {
                                var a = r[l];
                                this[a] = l < n ? e : this.methodFactory(a, n, this.name)
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
                            var o, i, u, c = this,
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

                            function m() {
                                var e;
                                if (typeof window !== t && d) {
                                    try {
                                        e = window.localStorage[d]
                                    } catch (e) {}
                                    if (typeof e === t) try {
                                        var n = window.document.cookie,
                                            r = encodeURIComponent(d),
                                            l = n.indexOf(r + "="); - 1 !== l && (e = /^([^;]+)/.exec(n.slice(l + r.length + 1))[1])
                                    } catch (e) {}
                                    return void 0 === c.levels[e] && (e = void 0), e
                                }
                            }

                            function h() {
                                if (typeof window !== t && d) {
                                    try {
                                        window.localStorage.removeItem(d)
                                    } catch (e) {}
                                    try {
                                        window.document.cookie = encodeURIComponent(d) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
                                    } catch (e) {}
                                }
                            }

                            function g(e) {
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
                                return null != u ? u : null != i ? i : o
                            }, c.setLevel = function(e, t) {
                                return u = g(e), !1 !== t && p(u), s.call(c)
                            }, c.setDefaultLevel = function(e) {
                                i = g(e), m() || c.setLevel(e, !1)
                            }, c.resetLevel = function() {
                                u = null, h(), s.call(c)
                            }, c.enableAll = function(e) {
                                c.setLevel(c.levels.TRACE, e)
                            }, c.disableAll = function(e) {
                                c.setLevel(c.levels.SILENT, e)
                            }, c.rebuild = function() {
                                if (a !== c && (o = g(a.getLevel())), s.call(c), a === c)
                                    for (var e in l) l[e].rebuild()
                            }, o = g(a ? a.getLevel() : "WARN");
                            var y = m();
                            null != y && (u = g(y)), s.call(c)
                        }(a = new d).getLogger = function(e) {
                            if ("symbol" != typeof e && "string" != typeof e || "" === e) throw new TypeError("You must supply a name when creating a logger.");
                            var t = l[e];
                            return t || (t = l[e] = new d(e, a.methodFactory)), t
                        };
                        var p = typeof window !== t ? window.log : void 0;
                        return a.noConflict = function() {
                            return typeof window !== t && window.log === a && (window.log = p), a
                        }, a.getLoggers = function() {
                            return l
                        }, a.default = a, a
                    }, void 0 === (l = "function" == typeof r ? r.call(t, n, t, e) : r) || (e.exports = l)
                }()
            },
            551: (e, t, n) => {
                "use strict";
                var r = n(540),
                    l = n(982);

                function a(e) {
                    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
                    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
                }
                var o = new Set,
                    i = {};

                function u(e, t) {
                    s(e, t), s(e + "Capture", t)
                }

                function s(e, t) {
                    for (i[e] = t, e = 0; e < t.length; e++) o.add(t[e])
                }
                var c = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement),
                    f = Object.prototype.hasOwnProperty,
                    d = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
                    p = {},
                    m = {};

                function h(e, t, n, r, l, a, o) {
                    this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = o
                }
                var g = {};
                "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e) {
                    g[e] = new h(e, 0, !1, e, null, !1, !1)
                })), [
                    ["acceptCharset", "accept-charset"],
                    ["className", "class"],
                    ["htmlFor", "for"],
                    ["httpEquiv", "http-equiv"]
                ].forEach((function(e) {
                    var t = e[0];
                    g[t] = new h(t, 1, !1, e[1], null, !1, !1)
                })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(e) {
                    g[e] = new h(e, 2, !1, e.toLowerCase(), null, !1, !1)
                })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(e) {
                    g[e] = new h(e, 2, !1, e, null, !1, !1)
                })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e) {
                    g[e] = new h(e, 3, !1, e.toLowerCase(), null, !1, !1)
                })), ["checked", "multiple", "muted", "selected"].forEach((function(e) {
                    g[e] = new h(e, 3, !0, e, null, !1, !1)
                })), ["capture", "download"].forEach((function(e) {
                    g[e] = new h(e, 4, !1, e, null, !1, !1)
                })), ["cols", "rows", "size", "span"].forEach((function(e) {
                    g[e] = new h(e, 6, !1, e, null, !1, !1)
                })), ["rowSpan", "start"].forEach((function(e) {
                    g[e] = new h(e, 5, !1, e.toLowerCase(), null, !1, !1)
                }));
                var y = /[\-:]([a-z])/g;

                function v(e) {
                    return e[1].toUpperCase()
                }

                function b(e, t, n, r) {
                    var l = g.hasOwnProperty(t) ? g[t] : null;
                    (null !== l ? 0 !== l.type : r || !(2 < t.length) || "o" !== t[0] && "O" !== t[0] || "n" !== t[1] && "N" !== t[1]) && (function(e, t, n, r) {
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
                    }(t, n, l, r) && (n = null), r || null === l ? function(e) {
                        return !!f.call(m, e) || !f.call(p, e) && (d.test(e) ? m[e] = !0 : (p[e] = !0, !1))
                    }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = null === n ? 3 !== l.type && "" : n : (t = l.attributeName, r = l.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (l = l.type) || 4 === l && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
                }
                "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e) {
                    var t = e.replace(y, v);
                    g[t] = new h(t, 1, !1, e, null, !1, !1)
                })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e) {
                    var t = e.replace(y, v);
                    g[t] = new h(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
                })), ["xml:base", "xml:lang", "xml:space"].forEach((function(e) {
                    var t = e.replace(y, v);
                    g[t] = new h(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
                })), ["tabIndex", "crossOrigin"].forEach((function(e) {
                    g[e] = new h(e, 1, !1, e.toLowerCase(), null, !1, !1)
                })), g.xlinkHref = new h("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function(e) {
                    g[e] = new h(e, 1, !1, e.toLowerCase(), null, !0, !0)
                }));
                var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
                    k = Symbol.for("react.element"),
                    S = Symbol.for("react.portal"),
                    E = Symbol.for("react.fragment"),
                    x = Symbol.for("react.strict_mode"),
                    _ = Symbol.for("react.profiler"),
                    C = Symbol.for("react.provider"),
                    T = Symbol.for("react.context"),
                    N = Symbol.for("react.forward_ref"),
                    L = Symbol.for("react.suspense"),
                    P = Symbol.for("react.suspense_list"),
                    R = Symbol.for("react.memo"),
                    D = Symbol.for("react.lazy");
                Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
                var z = Symbol.for("react.offscreen");
                Symbol.for("react.legacy_hidden"), Symbol.for("react.cache"), Symbol.for("react.tracing_marker");
                var O = Symbol.iterator;

                function A(e) {
                    return null === e || "object" != typeof e ? null : "function" == typeof(e = O && e[O] || e["@@iterator"]) ? e : null
                }
                var M, I = Object.assign;

                function F(e) {
                    if (void 0 === M) try {
                        throw Error()
                    } catch (e) {
                        var t = e.stack.trim().match(/\n( *(at )?)/);
                        M = t && t[1] || ""
                    }
                    return "\n" + M + e
                }
                var U = !1;

                function j(e, t) {
                    if (!e || U) return "";
                    U = !0;
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
                            for (var l = t.stack.split("\n"), a = r.stack.split("\n"), o = l.length - 1, i = a.length - 1; 1 <= o && 0 <= i && l[o] !== a[i];) i--;
                            for (; 1 <= o && 0 <= i; o--, i--)
                                if (l[o] !== a[i]) {
                                    if (1 !== o || 1 !== i)
                                        do {
                                            if (o--, 0 > --i || l[o] !== a[i]) {
                                                var u = "\n" + l[o].replace(" at new ", " at ");
                                                return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u
                                            }
                                        } while (1 <= o && 0 <= i);
                                    break
                                }
                        }
                    } finally {
                        U = !1, Error.prepareStackTrace = n
                    }
                    return (e = e ? e.displayName || e.name : "") ? F(e) : ""
                }

                function H(e) {
                    switch (e.tag) {
                        case 5:
                            return F(e.type);
                        case 16:
                            return F("Lazy");
                        case 13:
                            return F("Suspense");
                        case 19:
                            return F("SuspenseList");
                        case 0:
                        case 2:
                        case 15:
                            return e = j(e.type, !1);
                        case 11:
                            return e = j(e.type.render, !1);
                        case 1:
                            return e = j(e.type, !0);
                        default:
                            return ""
                    }
                }

                function B(e) {
                    if (null == e) return null;
                    if ("function" == typeof e) return e.displayName || e.name || null;
                    if ("string" == typeof e) return e;
                    switch (e) {
                        case E:
                            return "Fragment";
                        case S:
                            return "Portal";
                        case _:
                            return "Profiler";
                        case x:
                            return "StrictMode";
                        case L:
                            return "Suspense";
                        case P:
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
                        case R:
                            return null !== (t = e.displayName || null) ? t : B(e.type) || "Memo";
                        case D:
                            t = e._payload, e = e._init;
                            try {
                                return B(e(t))
                            } catch (e) {}
                    }
                    return null
                }

                function W(e) {
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
                            return B(t);
                        case 8:
                            return t === x ? "StrictMode" : "Mode";
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

                function Q(e) {
                    e._valueTracker || (e._valueTracker = function(e) {
                        var t = V(e) ? "checked" : "value",
                            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                            r = "" + e[t];
                        if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
                            var l = n.get,
                                a = n.set;
                            return Object.defineProperty(e, t, {
                                configurable: !0,
                                get: function() {
                                    return l.call(this)
                                },
                                set: function(e) {
                                    r = "" + e, a.call(this, e)
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

                function q(e) {
                    if (!e) return !1;
                    var t = e._valueTracker;
                    if (!t) return !0;
                    var n = t.getValue(),
                        r = "";
                    return e && (r = V(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
                }

                function Y(e) {
                    if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;
                    try {
                        return e.activeElement || e.body
                    } catch (t) {
                        return e.body
                    }
                }

                function G(e, t) {
                    var n = t.checked;
                    return I({}, t, {
                        defaultChecked: void 0,
                        defaultValue: void 0,
                        value: void 0,
                        checked: null != n ? n : e._wrapperState.initialChecked
                    })
                }

                function K(e, t) {
                    var n = null == t.defaultValue ? "" : t.defaultValue,
                        r = null != t.checked ? t.checked : t.defaultChecked;
                    n = $(null != t.value ? t.value : n), e._wrapperState = {
                        initialChecked: r,
                        initialValue: n,
                        controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
                    }
                }

                function X(e, t) {
                    null != (t = t.checked) && b(e, "checked", t, !1)
                }

                function Z(e, t) {
                    X(e, t);
                    var n = $(t.value),
                        r = t.type;
                    if (null != n) "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
                    else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
                    t.hasOwnProperty("value") ? ee(e, t.type, n) : t.hasOwnProperty("defaultValue") && ee(e, t.type, $(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
                }

                function J(e, t, n) {
                    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
                        var r = t.type;
                        if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value)) return;
                        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
                    }
                    "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n)
                }

                function ee(e, t, n) {
                    "number" === t && Y(e.ownerDocument) === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
                }
                var te = Array.isArray;

                function ne(e, t, n, r) {
                    if (e = e.options, t) {
                        t = {};
                        for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
                        for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0)
                    } else {
                        for (n = "" + $(n), t = null, l = 0; l < e.length; l++) {
                            if (e[l].value === n) return e[l].selected = !0, void(r && (e[l].defaultSelected = !0));
                            null !== t || e[l].disabled || (t = e[l])
                        }
                        null !== t && (t.selected = !0)
                    }
                }

                function re(e, t) {
                    if (null != t.dangerouslySetInnerHTML) throw Error(a(91));
                    return I({}, t, {
                        value: void 0,
                        defaultValue: void 0,
                        children: "" + e._wrapperState.initialValue
                    })
                }

                function le(e, t) {
                    var n = t.value;
                    if (null == n) {
                        if (n = t.children, t = t.defaultValue, null != n) {
                            if (null != t) throw Error(a(92));
                            if (te(n)) {
                                if (1 < n.length) throw Error(a(93));
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

                function ae(e, t) {
                    var n = $(t.value),
                        r = $(t.defaultValue);
                    null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r)
                }

                function oe(e) {
                    var t = e.textContent;
                    t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
                }

                function ie(e) {
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
                    return null == e || "http://www.w3.org/1999/xhtml" === e ? ie(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
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
                    me = ["Webkit", "ms", "Moz", "O"];

                function he(e, t, n) {
                    return null == t || "boolean" == typeof t || "" === t ? "" : n || "number" != typeof t || 0 === t || pe.hasOwnProperty(e) && pe[e] ? ("" + t).trim() : t + "px"
                }

                function ge(e, t) {
                    for (var n in e = e.style, t)
                        if (t.hasOwnProperty(n)) {
                            var r = 0 === n.indexOf("--"),
                                l = he(n, t[n], r);
                            "float" === n && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l
                        }
                }
                Object.keys(pe).forEach((function(e) {
                    me.forEach((function(t) {
                        t = t + e.charAt(0).toUpperCase() + e.substring(1), pe[t] = pe[e]
                    }))
                }));
                var ye = I({
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

                function ve(e, t) {
                    if (t) {
                        if (ye[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(a(137, e));
                        if (null != t.dangerouslySetInnerHTML) {
                            if (null != t.children) throw Error(a(60));
                            if ("object" != typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(a(61))
                        }
                        if (null != t.style && "object" != typeof t.style) throw Error(a(62))
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

                function ke(e) {
                    return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
                }
                var Se = null,
                    Ee = null,
                    xe = null;

                function _e(e) {
                    if (e = bl(e)) {
                        if ("function" != typeof Se) throw Error(a(280));
                        var t = e.stateNode;
                        t && (t = kl(t), Se(e.stateNode, e.type, t))
                    }
                }

                function Ce(e) {
                    Ee ? xe ? xe.push(e) : xe = [e] : Ee = e
                }

                function Te() {
                    if (Ee) {
                        var e = Ee,
                            t = xe;
                        if (xe = Ee = null, _e(e), t)
                            for (e = 0; e < t.length; e++) _e(t[e])
                    }
                }

                function Ne(e, t) {
                    return e(t)
                }

                function Le() {}
                var Pe = !1;

                function Re(e, t, n) {
                    if (Pe) return e(t, n);
                    Pe = !0;
                    try {
                        return Ne(e, t, n)
                    } finally {
                        Pe = !1, (null !== Ee || null !== xe) && (Le(), Te())
                    }
                }

                function De(e, t) {
                    var n = e.stateNode;
                    if (null === n) return null;
                    var r = kl(n);
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
                    if (n && "function" != typeof n) throw Error(a(231, t, typeof n));
                    return n
                }
                var ze = !1;
                if (c) try {
                    var Oe = {};
                    Object.defineProperty(Oe, "passive", {
                        get: function() {
                            ze = !0
                        }
                    }), window.addEventListener("test", Oe, Oe), window.removeEventListener("test", Oe, Oe)
                } catch (ce) {
                    ze = !1
                }

                function Ae(e, t, n, r, l, a, o, i, u) {
                    var s = Array.prototype.slice.call(arguments, 3);
                    try {
                        t.apply(n, s)
                    } catch (e) {
                        this.onError(e)
                    }
                }
                var Me = !1,
                    Ie = null,
                    Fe = !1,
                    Ue = null,
                    je = {
                        onError: function(e) {
                            Me = !0, Ie = e
                        }
                    };

                function He(e, t, n, r, l, a, o, i, u) {
                    Me = !1, Ie = null, Ae.apply(je, arguments)
                }

                function Be(e) {
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

                function We(e) {
                    if (13 === e.tag) {
                        var t = e.memoizedState;
                        if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)), null !== t) return t.dehydrated
                    }
                    return null
                }

                function $e(e) {
                    if (Be(e) !== e) throw Error(a(188))
                }

                function Ve(e) {
                    return null !== (e = function(e) {
                        var t = e.alternate;
                        if (!t) {
                            if (null === (t = Be(e))) throw Error(a(188));
                            return t !== e ? null : e
                        }
                        for (var n = e, r = t;;) {
                            var l = n.return;
                            if (null === l) break;
                            var o = l.alternate;
                            if (null === o) {
                                if (null !== (r = l.return)) {
                                    n = r;
                                    continue
                                }
                                break
                            }
                            if (l.child === o.child) {
                                for (o = l.child; o;) {
                                    if (o === n) return $e(l), e;
                                    if (o === r) return $e(l), t;
                                    o = o.sibling
                                }
                                throw Error(a(188))
                            }
                            if (n.return !== r.return) n = l, r = o;
                            else {
                                for (var i = !1, u = l.child; u;) {
                                    if (u === n) {
                                        i = !0, n = l, r = o;
                                        break
                                    }
                                    if (u === r) {
                                        i = !0, r = l, n = o;
                                        break
                                    }
                                    u = u.sibling
                                }
                                if (!i) {
                                    for (u = o.child; u;) {
                                        if (u === n) {
                                            i = !0, n = o, r = l;
                                            break
                                        }
                                        if (u === r) {
                                            i = !0, r = o, n = l;
                                            break
                                        }
                                        u = u.sibling
                                    }
                                    if (!i) throw Error(a(189))
                                }
                            }
                            if (n.alternate !== r) throw Error(a(190))
                        }
                        if (3 !== n.tag) throw Error(a(188));
                        return n.stateNode.current === n ? e : t
                    }(e)) ? Qe(e) : null
                }

                function Qe(e) {
                    if (5 === e.tag || 6 === e.tag) return e;
                    for (e = e.child; null !== e;) {
                        var t = Qe(e);
                        if (null !== t) return t;
                        e = e.sibling
                    }
                    return null
                }
                var qe = l.unstable_scheduleCallback,
                    Ye = l.unstable_cancelCallback,
                    Ge = l.unstable_shouldYield,
                    Ke = l.unstable_requestPaint,
                    Xe = l.unstable_now,
                    Ze = l.unstable_getCurrentPriorityLevel,
                    Je = l.unstable_ImmediatePriority,
                    et = l.unstable_UserBlockingPriority,
                    tt = l.unstable_NormalPriority,
                    nt = l.unstable_LowPriority,
                    rt = l.unstable_IdlePriority,
                    lt = null,
                    at = null;
                var ot = Math.clz32 ? Math.clz32 : function(e) {
                        return e >>>= 0, 0 === e ? 32 : 31 - (it(e) / ut | 0) | 0
                    },
                    it = Math.log,
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
                        l = e.suspendedLanes,
                        a = e.pingedLanes,
                        o = 268435455 & n;
                    if (0 !== o) {
                        var i = o & ~l;
                        0 !== i ? r = ft(i) : 0 !== (a &= o) && (r = ft(a))
                    } else 0 !== (o = n & ~l) ? r = ft(o) : 0 !== a && (r = ft(a));
                    if (0 === r) return 0;
                    if (0 !== t && t !== r && !(t & l) && ((l = r & -r) >= (a = t & -t) || 16 === l && 4194240 & a)) return t;
                    if (4 & r && (r |= 16 & n), 0 !== (t = e.entangledLanes))
                        for (e = e.entanglements, t &= r; 0 < t;) l = 1 << (n = 31 - ot(t)), r |= e[n], t &= ~l;
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

                function mt(e) {
                    return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
                }

                function ht() {
                    var e = st;
                    return !(4194240 & (st <<= 1)) && (st = 64), e
                }

                function gt(e) {
                    for (var t = [], n = 0; 31 > n; n++) t.push(e);
                    return t
                }

                function yt(e, t, n) {
                    e.pendingLanes |= t, 536870912 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0), (e = e.eventTimes)[t = 31 - ot(t)] = n
                }

                function vt(e, t) {
                    var n = e.entangledLanes |= t;
                    for (e = e.entanglements; n;) {
                        var r = 31 - ot(n),
                            l = 1 << r;
                        l & t | e[r] & t && (e[r] |= t), n &= ~l
                    }
                }
                var bt = 0;

                function wt(e) {
                    return 1 < (e &= -e) ? 4 < e ? 268435455 & e ? 16 : 536870912 : 4 : 1
                }
                var kt, St, Et, xt, _t, Ct = !1,
                    Tt = [],
                    Nt = null,
                    Lt = null,
                    Pt = null,
                    Rt = new Map,
                    Dt = new Map,
                    zt = [],
                    Ot = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

                function At(e, t) {
                    switch (e) {
                        case "focusin":
                        case "focusout":
                            Nt = null;
                            break;
                        case "dragenter":
                        case "dragleave":
                            Lt = null;
                            break;
                        case "mouseover":
                        case "mouseout":
                            Pt = null;
                            break;
                        case "pointerover":
                        case "pointerout":
                            Rt.delete(t.pointerId);
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                            Dt.delete(t.pointerId)
                    }
                }

                function Mt(e, t, n, r, l, a) {
                    return null === e || e.nativeEvent !== a ? (e = {
                        blockedOn: t,
                        domEventName: n,
                        eventSystemFlags: r,
                        nativeEvent: a,
                        targetContainers: [l]
                    }, null !== t && (null !== (t = bl(t)) && St(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== l && -1 === t.indexOf(l) && t.push(l), e)
                }

                function It(e) {
                    var t = vl(e.target);
                    if (null !== t) {
                        var n = Be(t);
                        if (null !== n)
                            if (13 === (t = n.tag)) {
                                if (null !== (t = We(n))) return e.blockedOn = t, void _t(e.priority, (function() {
                                    Et(n)
                                }))
                            } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated) return void(e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
                    }
                    e.blockedOn = null
                }

                function Ft(e) {
                    if (null !== e.blockedOn) return !1;
                    for (var t = e.targetContainers; 0 < t.length;) {
                        var n = Gt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
                        if (null !== n) return null !== (t = bl(n)) && St(t), e.blockedOn = n, !1;
                        var r = new(n = e.nativeEvent).constructor(n.type, n);
                        we = r, n.target.dispatchEvent(r), we = null, t.shift()
                    }
                    return !0
                }

                function Ut(e, t, n) {
                    Ft(e) && n.delete(t)
                }

                function jt() {
                    Ct = !1, null !== Nt && Ft(Nt) && (Nt = null), null !== Lt && Ft(Lt) && (Lt = null), null !== Pt && Ft(Pt) && (Pt = null), Rt.forEach(Ut), Dt.forEach(Ut)
                }

                function Ht(e, t) {
                    e.blockedOn === t && (e.blockedOn = null, Ct || (Ct = !0, l.unstable_scheduleCallback(l.unstable_NormalPriority, jt)))
                }

                function Bt(e) {
                    function t(t) {
                        return Ht(t, e)
                    }
                    if (0 < Tt.length) {
                        Ht(Tt[0], e);
                        for (var n = 1; n < Tt.length; n++) {
                            var r = Tt[n];
                            r.blockedOn === e && (r.blockedOn = null)
                        }
                    }
                    for (null !== Nt && Ht(Nt, e), null !== Lt && Ht(Lt, e), null !== Pt && Ht(Pt, e), Rt.forEach(t), Dt.forEach(t), n = 0; n < zt.length; n++)(r = zt[n]).blockedOn === e && (r.blockedOn = null);
                    for (; 0 < zt.length && null === (n = zt[0]).blockedOn;) It(n), null === n.blockedOn && zt.shift()
                }
                var Wt = w.ReactCurrentBatchConfig,
                    $t = !0;

                function Vt(e, t, n, r) {
                    var l = bt,
                        a = Wt.transition;
                    Wt.transition = null;
                    try {
                        bt = 1, qt(e, t, n, r)
                    } finally {
                        bt = l, Wt.transition = a
                    }
                }

                function Qt(e, t, n, r) {
                    var l = bt,
                        a = Wt.transition;
                    Wt.transition = null;
                    try {
                        bt = 4, qt(e, t, n, r)
                    } finally {
                        bt = l, Wt.transition = a
                    }
                }

                function qt(e, t, n, r) {
                    if ($t) {
                        var l = Gt(e, t, n, r);
                        if (null === l) $r(e, t, r, Yt, n), At(e, r);
                        else if (function(e, t, n, r, l) {
                                switch (t) {
                                    case "focusin":
                                        return Nt = Mt(Nt, e, t, n, r, l), !0;
                                    case "dragenter":
                                        return Lt = Mt(Lt, e, t, n, r, l), !0;
                                    case "mouseover":
                                        return Pt = Mt(Pt, e, t, n, r, l), !0;
                                    case "pointerover":
                                        var a = l.pointerId;
                                        return Rt.set(a, Mt(Rt.get(a) || null, e, t, n, r, l)), !0;
                                    case "gotpointercapture":
                                        return a = l.pointerId, Dt.set(a, Mt(Dt.get(a) || null, e, t, n, r, l)), !0
                                }
                                return !1
                            }(l, e, t, n, r)) r.stopPropagation();
                        else if (At(e, r), 4 & t && -1 < Ot.indexOf(e)) {
                            for (; null !== l;) {
                                var a = bl(l);
                                if (null !== a && kt(a), null === (a = Gt(e, t, n, r)) && $r(e, t, r, Yt, n), a === l) break;
                                l = a
                            }
                            null !== l && r.stopPropagation()
                        } else $r(e, t, r, null, n)
                    }
                }
                var Yt = null;

                function Gt(e, t, n, r) {
                    if (Yt = null, null !== (e = vl(e = ke(r))))
                        if (null === (t = Be(e))) e = null;
                        else if (13 === (n = t.tag)) {
                        if (null !== (e = We(t))) return e;
                        e = null
                    } else if (3 === n) {
                        if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
                        e = null
                    } else t !== e && (e = null);
                    return Yt = e, null
                }

                function Kt(e) {
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
                            switch (Ze()) {
                                case Je:
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
                var Xt = null,
                    Zt = null,
                    Jt = null;

                function en() {
                    if (Jt) return Jt;
                    var e, t, n = Zt,
                        r = n.length,
                        l = "value" in Xt ? Xt.value : Xt.textContent,
                        a = l.length;
                    for (e = 0; e < r && n[e] === l[e]; e++);
                    var o = r - e;
                    for (t = 1; t <= o && n[r - t] === l[a - t]; t++);
                    return Jt = l.slice(e, 1 < t ? 1 - t : void 0)
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

                function ln(e) {
                    function t(t, n, r, l, a) {
                        for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = l, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(l) : l[o]);
                        return this.isDefaultPrevented = (null != l.defaultPrevented ? l.defaultPrevented : !1 === l.returnValue) ? nn : rn, this.isPropagationStopped = rn, this
                    }
                    return I(t.prototype, {
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
                var an, on, un, sn = {
                        eventPhase: 0,
                        bubbles: 0,
                        cancelable: 0,
                        timeStamp: function(e) {
                            return e.timeStamp || Date.now()
                        },
                        defaultPrevented: 0,
                        isTrusted: 0
                    },
                    cn = ln(sn),
                    fn = I({}, sn, {
                        view: 0,
                        detail: 0
                    }),
                    dn = ln(fn),
                    pn = I({}, fn, {
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
                        getModifierState: _n,
                        button: 0,
                        buttons: 0,
                        relatedTarget: function(e) {
                            return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
                        },
                        movementX: function(e) {
                            return "movementX" in e ? e.movementX : (e !== un && (un && "mousemove" === e.type ? (an = e.screenX - un.screenX, on = e.screenY - un.screenY) : on = an = 0, un = e), an)
                        },
                        movementY: function(e) {
                            return "movementY" in e ? e.movementY : on
                        }
                    }),
                    mn = ln(pn),
                    hn = ln(I({}, pn, {
                        dataTransfer: 0
                    })),
                    gn = ln(I({}, fn, {
                        relatedTarget: 0
                    })),
                    yn = ln(I({}, sn, {
                        animationName: 0,
                        elapsedTime: 0,
                        pseudoElement: 0
                    })),
                    vn = I({}, sn, {
                        clipboardData: function(e) {
                            return "clipboardData" in e ? e.clipboardData : window.clipboardData
                        }
                    }),
                    bn = ln(vn),
                    wn = ln(I({}, sn, {
                        data: 0
                    })),
                    kn = {
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
                    Sn = {
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
                    En = {
                        Alt: "altKey",
                        Control: "ctrlKey",
                        Meta: "metaKey",
                        Shift: "shiftKey"
                    };

                function xn(e) {
                    var t = this.nativeEvent;
                    return t.getModifierState ? t.getModifierState(e) : !!(e = En[e]) && !!t[e]
                }

                function _n() {
                    return xn
                }
                var Cn = I({}, fn, {
                        key: function(e) {
                            if (e.key) {
                                var t = kn[e.key] || e.key;
                                if ("Unidentified" !== t) return t
                            }
                            return "keypress" === e.type ? 13 === (e = tn(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? Sn[e.keyCode] || "Unidentified" : ""
                        },
                        code: 0,
                        location: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        altKey: 0,
                        metaKey: 0,
                        repeat: 0,
                        locale: 0,
                        getModifierState: _n,
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
                    Tn = ln(Cn),
                    Nn = ln(I({}, pn, {
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
                    Ln = ln(I({}, fn, {
                        touches: 0,
                        targetTouches: 0,
                        changedTouches: 0,
                        altKey: 0,
                        metaKey: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        getModifierState: _n
                    })),
                    Pn = ln(I({}, sn, {
                        propertyName: 0,
                        elapsedTime: 0,
                        pseudoElement: 0
                    })),
                    Rn = I({}, pn, {
                        deltaX: function(e) {
                            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
                        },
                        deltaY: function(e) {
                            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
                        },
                        deltaZ: 0,
                        deltaMode: 0
                    }),
                    Dn = ln(Rn),
                    zn = [9, 13, 27, 32],
                    On = c && "CompositionEvent" in window,
                    An = null;
                c && "documentMode" in document && (An = document.documentMode);
                var Mn = c && "TextEvent" in window && !An,
                    In = c && (!On || An && 8 < An && 11 >= An),
                    Fn = String.fromCharCode(32),
                    Un = !1;

                function jn(e, t) {
                    switch (e) {
                        case "keyup":
                            return -1 !== zn.indexOf(t.keyCode);
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

                function Hn(e) {
                    return "object" == typeof(e = e.detail) && "data" in e ? e.data : null
                }
                var Bn = !1;
                var Wn = {
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
                    return "input" === t ? !!Wn[e.type] : "textarea" === t
                }

                function Vn(e, t, n, r) {
                    Ce(r), 0 < (t = Qr(t, "onChange")).length && (n = new cn("onChange", "change", null, n, r), e.push({
                        event: n,
                        listeners: t
                    }))
                }
                var Qn = null,
                    qn = null;

                function Yn(e) {
                    Fr(e, 0)
                }

                function Gn(e) {
                    if (q(wl(e))) return e
                }

                function Kn(e, t) {
                    if ("change" === e) return t
                }
                var Xn = !1;
                if (c) {
                    var Zn;
                    if (c) {
                        var Jn = "oninput" in document;
                        if (!Jn) {
                            var er = document.createElement("div");
                            er.setAttribute("oninput", "return;"), Jn = "function" == typeof er.oninput
                        }
                        Zn = Jn
                    } else Zn = !1;
                    Xn = Zn && (!document.documentMode || 9 < document.documentMode)
                }

                function tr() {
                    Qn && (Qn.detachEvent("onpropertychange", nr), qn = Qn = null)
                }

                function nr(e) {
                    if ("value" === e.propertyName && Gn(qn)) {
                        var t = [];
                        Vn(t, qn, e, ke(e)), Re(Yn, t)
                    }
                }

                function rr(e, t, n) {
                    "focusin" === e ? (tr(), qn = n, (Qn = t).attachEvent("onpropertychange", nr)) : "focusout" === e && tr()
                }

                function lr(e) {
                    if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Gn(qn)
                }

                function ar(e, t) {
                    if ("click" === e) return Gn(t)
                }

                function or(e, t) {
                    if ("input" === e || "change" === e) return Gn(t)
                }
                var ir = "function" == typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
                };

                function ur(e, t) {
                    if (ir(e, t)) return !0;
                    if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
                    var n = Object.keys(e),
                        r = Object.keys(t);
                    if (n.length !== r.length) return !1;
                    for (r = 0; r < n.length; r++) {
                        var l = n[r];
                        if (!f.call(t, l) || !ir(e[l], t[l])) return !1
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
                    for (var e = window, t = Y(); t instanceof e.HTMLIFrameElement;) {
                        try {
                            var n = "string" == typeof t.contentWindow.location.href
                        } catch (e) {
                            n = !1
                        }
                        if (!n) break;
                        t = Y((e = t.contentWindow).document)
                    }
                    return t
                }

                function pr(e) {
                    var t = e && e.nodeName && e.nodeName.toLowerCase();
                    return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
                }

                function mr(e) {
                    var t = dr(),
                        n = e.focusedElem,
                        r = e.selectionRange;
                    if (t !== n && n && n.ownerDocument && fr(n.ownerDocument.documentElement, n)) {
                        if (null !== r && pr(n))
                            if (t = r.start, void 0 === (e = r.end) && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
                            else if ((e = (t = n.ownerDocument || document) && t.defaultView || window).getSelection) {
                            e = e.getSelection();
                            var l = n.textContent.length,
                                a = Math.min(r.start, l);
                            r = void 0 === r.end ? a : Math.min(r.end, l), !e.extend && a > r && (l = r, r = a, a = l), l = cr(n, a);
                            var o = cr(n, r);
                            l && o && (1 !== e.rangeCount || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && ((t = t.createRange()).setStart(l.node, l.offset), e.removeAllRanges(), a > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)))
                        }
                        for (t = [], e = n; e = e.parentNode;) 1 === e.nodeType && t.push({
                            element: e,
                            left: e.scrollLeft,
                            top: e.scrollTop
                        });
                        for ("function" == typeof n.focus && n.focus(), n = 0; n < t.length; n++)(e = t[n]).element.scrollLeft = e.left, e.element.scrollTop = e.top
                    }
                }
                var hr = c && "documentMode" in document && 11 >= document.documentMode,
                    gr = null,
                    yr = null,
                    vr = null,
                    br = !1;

                function wr(e, t, n) {
                    var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
                    br || null == gr || gr !== Y(r) || ("selectionStart" in (r = gr) && pr(r) ? r = {
                        start: r.selectionStart,
                        end: r.selectionEnd
                    } : r = {
                        anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
                        anchorOffset: r.anchorOffset,
                        focusNode: r.focusNode,
                        focusOffset: r.focusOffset
                    }, vr && ur(vr, r) || (vr = r, 0 < (r = Qr(yr, "onSelect")).length && (t = new cn("onSelect", "select", null, t, n), e.push({
                        event: t,
                        listeners: r
                    }), t.target = gr)))
                }

                function kr(e, t) {
                    var n = {};
                    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
                }
                var Sr = {
                        animationend: kr("Animation", "AnimationEnd"),
                        animationiteration: kr("Animation", "AnimationIteration"),
                        animationstart: kr("Animation", "AnimationStart"),
                        transitionend: kr("Transition", "TransitionEnd")
                    },
                    Er = {},
                    xr = {};

                function _r(e) {
                    if (Er[e]) return Er[e];
                    if (!Sr[e]) return e;
                    var t, n = Sr[e];
                    for (t in n)
                        if (n.hasOwnProperty(t) && t in xr) return Er[e] = n[t];
                    return e
                }
                c && (xr = document.createElement("div").style, "AnimationEvent" in window || (delete Sr.animationend.animation, delete Sr.animationiteration.animation, delete Sr.animationstart.animation), "TransitionEvent" in window || delete Sr.transitionend.transition);
                var Cr = _r("animationend"),
                    Tr = _r("animationiteration"),
                    Nr = _r("animationstart"),
                    Lr = _r("transitionend"),
                    Pr = new Map,
                    Rr = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

                function Dr(e, t) {
                    Pr.set(e, t), u(t, [e])
                }
                for (var zr = 0; zr < Rr.length; zr++) {
                    var Or = Rr[zr];
                    Dr(Or.toLowerCase(), "on" + (Or[0].toUpperCase() + Or.slice(1)))
                }
                Dr(Cr, "onAnimationEnd"), Dr(Tr, "onAnimationIteration"), Dr(Nr, "onAnimationStart"), Dr("dblclick", "onDoubleClick"), Dr("focusin", "onFocus"), Dr("focusout", "onBlur"), Dr(Lr, "onTransitionEnd"), s("onMouseEnter", ["mouseout", "mouseover"]), s("onMouseLeave", ["mouseout", "mouseover"]), s("onPointerEnter", ["pointerout", "pointerover"]), s("onPointerLeave", ["pointerout", "pointerover"]), u("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), u("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), u("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
                var Ar = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
                    Mr = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ar));

                function Ir(e, t, n) {
                    var r = e.type || "unknown-event";
                    e.currentTarget = n,
                        function(e, t, n, r, l, o, i, u, s) {
                            if (He.apply(this, arguments), Me) {
                                if (!Me) throw Error(a(198));
                                var c = Ie;
                                Me = !1, Ie = null, Fe || (Fe = !0, Ue = c)
                            }
                        }(r, t, void 0, e), e.currentTarget = null
                }

                function Fr(e, t) {
                    t = !!(4 & t);
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n],
                            l = r.event;
                        r = r.listeners;
                        e: {
                            var a = void 0;
                            if (t)
                                for (var o = r.length - 1; 0 <= o; o--) {
                                    var i = r[o],
                                        u = i.instance,
                                        s = i.currentTarget;
                                    if (i = i.listener, u !== a && l.isPropagationStopped()) break e;
                                    Ir(l, i, s), a = u
                                } else
                                    for (o = 0; o < r.length; o++) {
                                        if (u = (i = r[o]).instance, s = i.currentTarget, i = i.listener, u !== a && l.isPropagationStopped()) break e;
                                        Ir(l, i, s), a = u
                                    }
                        }
                    }
                    if (Fe) throw e = Ue, Fe = !1, Ue = null, e
                }

                function Ur(e, t) {
                    var n = t[hl];
                    void 0 === n && (n = t[hl] = new Set);
                    var r = e + "__bubble";
                    n.has(r) || (Wr(t, e, 2, !1), n.add(r))
                }

                function jr(e, t, n) {
                    var r = 0;
                    t && (r |= 4), Wr(n, e, r, t)
                }
                var Hr = "_reactListening" + Math.random().toString(36).slice(2);

                function Br(e) {
                    if (!e[Hr]) {
                        e[Hr] = !0, o.forEach((function(t) {
                            "selectionchange" !== t && (Mr.has(t) || jr(t, !1, e), jr(t, !0, e))
                        }));
                        var t = 9 === e.nodeType ? e : e.ownerDocument;
                        null === t || t[Hr] || (t[Hr] = !0, jr("selectionchange", !1, t))
                    }
                }

                function Wr(e, t, n, r) {
                    switch (Kt(t)) {
                        case 1:
                            var l = Vt;
                            break;
                        case 4:
                            l = Qt;
                            break;
                        default:
                            l = qt
                    }
                    n = l.bind(null, t, n, e), l = void 0, !ze || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (l = !0), r ? void 0 !== l ? e.addEventListener(t, n, {
                        capture: !0,
                        passive: l
                    }) : e.addEventListener(t, n, !0) : void 0 !== l ? e.addEventListener(t, n, {
                        passive: l
                    }) : e.addEventListener(t, n, !1)
                }

                function $r(e, t, n, r, l) {
                    var a = r;
                    if (!(1 & t || 2 & t || null === r)) e: for (;;) {
                        if (null === r) return;
                        var o = r.tag;
                        if (3 === o || 4 === o) {
                            var i = r.stateNode.containerInfo;
                            if (i === l || 8 === i.nodeType && i.parentNode === l) break;
                            if (4 === o)
                                for (o = r.return; null !== o;) {
                                    var u = o.tag;
                                    if ((3 === u || 4 === u) && ((u = o.stateNode.containerInfo) === l || 8 === u.nodeType && u.parentNode === l)) return;
                                    o = o.return
                                }
                            for (; null !== i;) {
                                if (null === (o = vl(i))) return;
                                if (5 === (u = o.tag) || 6 === u) {
                                    r = a = o;
                                    continue e
                                }
                                i = i.parentNode
                            }
                        }
                        r = r.return
                    }
                    Re((function() {
                        var r = a,
                            l = ke(n),
                            o = [];
                        e: {
                            var i = Pr.get(e);
                            if (void 0 !== i) {
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
                                        s = "focus", u = gn;
                                        break;
                                    case "focusout":
                                        s = "blur", u = gn;
                                        break;
                                    case "beforeblur":
                                    case "afterblur":
                                        u = gn;
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
                                        u = mn;
                                        break;
                                    case "drag":
                                    case "dragend":
                                    case "dragenter":
                                    case "dragexit":
                                    case "dragleave":
                                    case "dragover":
                                    case "dragstart":
                                    case "drop":
                                        u = hn;
                                        break;
                                    case "touchcancel":
                                    case "touchend":
                                    case "touchmove":
                                    case "touchstart":
                                        u = Ln;
                                        break;
                                    case Cr:
                                    case Tr:
                                    case Nr:
                                        u = yn;
                                        break;
                                    case Lr:
                                        u = Pn;
                                        break;
                                    case "scroll":
                                        u = dn;
                                        break;
                                    case "wheel":
                                        u = Dn;
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
                                    d = c ? null !== i ? i + "Capture" : null : i;
                                c = [];
                                for (var p, m = r; null !== m;) {
                                    var h = (p = m).stateNode;
                                    if (5 === p.tag && null !== h && (p = h, null !== d && (null != (h = De(m, d)) && c.push(Vr(m, h, p)))), f) break;
                                    m = m.return
                                }
                                0 < c.length && (i = new u(i, s, null, n, l), o.push({
                                    event: i,
                                    listeners: c
                                }))
                            }
                        }
                        if (!(7 & t)) {
                            if (u = "mouseout" === e || "pointerout" === e, (!(i = "mouseover" === e || "pointerover" === e) || n === we || !(s = n.relatedTarget || n.fromElement) || !vl(s) && !s[ml]) && (u || i) && (i = l.window === l ? l : (i = l.ownerDocument) ? i.defaultView || i.parentWindow : window, u ? (u = r, null !== (s = (s = n.relatedTarget || n.toElement) ? vl(s) : null) && (s !== (f = Be(s)) || 5 !== s.tag && 6 !== s.tag) && (s = null)) : (u = null, s = r), u !== s)) {
                                if (c = mn, h = "onMouseLeave", d = "onMouseEnter", m = "mouse", "pointerout" !== e && "pointerover" !== e || (c = Nn, h = "onPointerLeave", d = "onPointerEnter", m = "pointer"), f = null == u ? i : wl(u), p = null == s ? i : wl(s), (i = new c(h, m + "leave", u, n, l)).target = f, i.relatedTarget = p, h = null, vl(l) === r && ((c = new c(d, m + "enter", s, n, l)).target = p, c.relatedTarget = f, h = c), f = h, u && s) e: {
                                    for (d = s, m = 0, p = c = u; p; p = qr(p)) m++;
                                    for (p = 0, h = d; h; h = qr(h)) p++;
                                    for (; 0 < m - p;) c = qr(c),
                                    m--;
                                    for (; 0 < p - m;) d = qr(d),
                                    p--;
                                    for (; m--;) {
                                        if (c === d || null !== d && c === d.alternate) break e;
                                        c = qr(c), d = qr(d)
                                    }
                                    c = null
                                }
                                else c = null;
                                null !== u && Yr(o, i, u, c, !1), null !== s && null !== f && Yr(o, f, s, c, !0)
                            }
                            if ("select" === (u = (i = r ? wl(r) : window).nodeName && i.nodeName.toLowerCase()) || "input" === u && "file" === i.type) var g = Kn;
                            else if ($n(i))
                                if (Xn) g = or;
                                else {
                                    g = lr;
                                    var y = rr
                                }
                            else(u = i.nodeName) && "input" === u.toLowerCase() && ("checkbox" === i.type || "radio" === i.type) && (g = ar);
                            switch (g && (g = g(e, r)) ? Vn(o, g, n, l) : (y && y(e, i, r), "focusout" === e && (y = i._wrapperState) && y.controlled && "number" === i.type && ee(i, "number", i.value)), y = r ? wl(r) : window, e) {
                                case "focusin":
                                    ($n(y) || "true" === y.contentEditable) && (gr = y, yr = r, vr = null);
                                    break;
                                case "focusout":
                                    vr = yr = gr = null;
                                    break;
                                case "mousedown":
                                    br = !0;
                                    break;
                                case "contextmenu":
                                case "mouseup":
                                case "dragend":
                                    br = !1, wr(o, n, l);
                                    break;
                                case "selectionchange":
                                    if (hr) break;
                                case "keydown":
                                case "keyup":
                                    wr(o, n, l)
                            }
                            var v;
                            if (On) e: {
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
                            else Bn ? jn(e, n) && (b = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (b = "onCompositionStart");
                            b && (In && "ko" !== n.locale && (Bn || "onCompositionStart" !== b ? "onCompositionEnd" === b && Bn && (v = en()) : (Zt = "value" in (Xt = l) ? Xt.value : Xt.textContent, Bn = !0)), 0 < (y = Qr(r, b)).length && (b = new wn(b, e, null, n, l), o.push({
                                event: b,
                                listeners: y
                            }), v ? b.data = v : null !== (v = Hn(n)) && (b.data = v))), (v = Mn ? function(e, t) {
                                switch (e) {
                                    case "compositionend":
                                        return Hn(t);
                                    case "keypress":
                                        return 32 !== t.which ? null : (Un = !0, Fn);
                                    case "textInput":
                                        return (e = t.data) === Fn && Un ? null : e;
                                    default:
                                        return null
                                }
                            }(e, n) : function(e, t) {
                                if (Bn) return "compositionend" === e || !On && jn(e, t) ? (e = en(), Jt = Zt = Xt = null, Bn = !1, e) : null;
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
                                        return In && "ko" !== t.locale ? null : t.data
                                }
                            }(e, n)) && (0 < (r = Qr(r, "onBeforeInput")).length && (l = new wn("onBeforeInput", "beforeinput", null, n, l), o.push({
                                event: l,
                                listeners: r
                            }), l.data = v))
                        }
                        Fr(o, t)
                    }))
                }

                function Vr(e, t, n) {
                    return {
                        instance: e,
                        listener: t,
                        currentTarget: n
                    }
                }

                function Qr(e, t) {
                    for (var n = t + "Capture", r = []; null !== e;) {
                        var l = e,
                            a = l.stateNode;
                        5 === l.tag && null !== a && (l = a, null != (a = De(e, n)) && r.unshift(Vr(e, a, l)), null != (a = De(e, t)) && r.push(Vr(e, a, l))), e = e.return
                    }
                    return r
                }

                function qr(e) {
                    if (null === e) return null;
                    do {
                        e = e.return
                    } while (e && 5 !== e.tag);
                    return e || null
                }

                function Yr(e, t, n, r, l) {
                    for (var a = t._reactName, o = []; null !== n && n !== r;) {
                        var i = n,
                            u = i.alternate,
                            s = i.stateNode;
                        if (null !== u && u === r) break;
                        5 === i.tag && null !== s && (i = s, l ? null != (u = De(n, a)) && o.unshift(Vr(n, u, i)) : l || null != (u = De(n, a)) && o.push(Vr(n, u, i))), n = n.return
                    }
                    0 !== o.length && e.push({
                        event: t,
                        listeners: o
                    })
                }
                var Gr = /\r\n?/g,
                    Kr = /\u0000|\uFFFD/g;

                function Xr(e) {
                    return ("string" == typeof e ? e : "" + e).replace(Gr, "\n").replace(Kr, "")
                }

                function Zr(e, t, n) {
                    if (t = Xr(t), Xr(e) !== t && n) throw Error(a(425))
                }

                function Jr() {}
                var el = null,
                    tl = null;

                function nl(e, t) {
                    return "textarea" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
                }
                var rl = "function" == typeof setTimeout ? setTimeout : void 0,
                    ll = "function" == typeof clearTimeout ? clearTimeout : void 0,
                    al = "function" == typeof Promise ? Promise : void 0,
                    ol = "function" == typeof queueMicrotask ? queueMicrotask : void 0 !== al ? function(e) {
                        return al.resolve(null).then(e).catch(il)
                    } : rl;

                function il(e) {
                    setTimeout((function() {
                        throw e
                    }))
                }

                function ul(e, t) {
                    var n = t,
                        r = 0;
                    do {
                        var l = n.nextSibling;
                        if (e.removeChild(n), l && 8 === l.nodeType)
                            if ("/$" === (n = l.data)) {
                                if (0 === r) return e.removeChild(l), void Bt(t);
                                r--
                            } else "$" !== n && "$?" !== n && "$!" !== n || r++;
                        n = l
                    } while (n);
                    Bt(t)
                }

                function sl(e) {
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

                function cl(e) {
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
                var fl = Math.random().toString(36).slice(2),
                    dl = "__reactFiber$" + fl,
                    pl = "__reactProps$" + fl,
                    ml = "__reactContainer$" + fl,
                    hl = "__reactEvents$" + fl,
                    gl = "__reactListeners$" + fl,
                    yl = "__reactHandles$" + fl;

                function vl(e) {
                    var t = e[dl];
                    if (t) return t;
                    for (var n = e.parentNode; n;) {
                        if (t = n[ml] || n[dl]) {
                            if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
                                for (e = cl(e); null !== e;) {
                                    if (n = e[dl]) return n;
                                    e = cl(e)
                                }
                            return t
                        }
                        n = (e = n).parentNode
                    }
                    return null
                }

                function bl(e) {
                    return !(e = e[dl] || e[ml]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
                }

                function wl(e) {
                    if (5 === e.tag || 6 === e.tag) return e.stateNode;
                    throw Error(a(33))
                }

                function kl(e) {
                    return e[pl] || null
                }
                var Sl = [],
                    El = -1;

                function xl(e) {
                    return {
                        current: e
                    }
                }

                function _l(e) {
                    0 > El || (e.current = Sl[El], Sl[El] = null, El--)
                }

                function Cl(e, t) {
                    El++, Sl[El] = e.current, e.current = t
                }
                var Tl = {},
                    Nl = xl(Tl),
                    Ll = xl(!1),
                    Pl = Tl;

                function Rl(e, t) {
                    var n = e.type.contextTypes;
                    if (!n) return Tl;
                    var r = e.stateNode;
                    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
                    var l, a = {};
                    for (l in n) a[l] = t[l];
                    return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a
                }

                function Dl(e) {
                    return null != (e = e.childContextTypes)
                }

                function zl() {
                    _l(Ll), _l(Nl)
                }

                function Ol(e, t, n) {
                    if (Nl.current !== Tl) throw Error(a(168));
                    Cl(Nl, t), Cl(Ll, n)
                }

                function Al(e, t, n) {
                    var r = e.stateNode;
                    if (t = t.childContextTypes, "function" != typeof r.getChildContext) return n;
                    for (var l in r = r.getChildContext())
                        if (!(l in t)) throw Error(a(108, W(e) || "Unknown", l));
                    return I({}, n, r)
                }

                function Ml(e) {
                    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Tl, Pl = Nl.current, Cl(Nl, e), Cl(Ll, Ll.current), !0
                }

                function Il(e, t, n) {
                    var r = e.stateNode;
                    if (!r) throw Error(a(169));
                    n ? (e = Al(e, t, Pl), r.__reactInternalMemoizedMergedChildContext = e, _l(Ll), _l(Nl), Cl(Nl, e)) : _l(Ll), Cl(Ll, n)
                }
                var Fl = null,
                    Ul = !1,
                    jl = !1;

                function Hl(e) {
                    null === Fl ? Fl = [e] : Fl.push(e)
                }

                function Bl() {
                    if (!jl && null !== Fl) {
                        jl = !0;
                        var e = 0,
                            t = bt;
                        try {
                            var n = Fl;
                            for (bt = 1; e < n.length; e++) {
                                var r = n[e];
                                do {
                                    r = r(!0)
                                } while (null !== r)
                            }
                            Fl = null, Ul = !1
                        } catch (t) {
                            throw null !== Fl && (Fl = Fl.slice(e + 1)), qe(Je, Bl), t
                        } finally {
                            bt = t, jl = !1
                        }
                    }
                    return null
                }
                var Wl = [],
                    $l = 0,
                    Vl = null,
                    Ql = 0,
                    ql = [],
                    Yl = 0,
                    Gl = null,
                    Kl = 1,
                    Xl = "";

                function Zl(e, t) {
                    Wl[$l++] = Ql, Wl[$l++] = Vl, Vl = e, Ql = t
                }

                function Jl(e, t, n) {
                    ql[Yl++] = Kl, ql[Yl++] = Xl, ql[Yl++] = Gl, Gl = e;
                    var r = Kl;
                    e = Xl;
                    var l = 32 - ot(r) - 1;
                    r &= ~(1 << l), n += 1;
                    var a = 32 - ot(t) + l;
                    if (30 < a) {
                        var o = l - l % 5;
                        a = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, Kl = 1 << 32 - ot(t) + l | n << l | r, Xl = a + e
                    } else Kl = 1 << a | n << l | r, Xl = e
                }

                function ea(e) {
                    null !== e.return && (Zl(e, 1), Jl(e, 1, 0))
                }

                function ta(e) {
                    for (; e === Vl;) Vl = Wl[--$l], Wl[$l] = null, Ql = Wl[--$l], Wl[$l] = null;
                    for (; e === Gl;) Gl = ql[--Yl], ql[Yl] = null, Xl = ql[--Yl], ql[Yl] = null, Kl = ql[--Yl], ql[Yl] = null
                }
                var na = null,
                    ra = null,
                    la = !1,
                    aa = null;

                function oa(e, t) {
                    var n = Rs(5, null, null, 0);
                    n.elementType = "DELETED", n.stateNode = t, n.return = e, null === (t = e.deletions) ? (e.deletions = [n], e.flags |= 16) : t.push(n)
                }

                function ia(e, t) {
                    switch (e.tag) {
                        case 5:
                            var n = e.type;
                            return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, na = e, ra = sl(t.firstChild), !0);
                        case 6:
                            return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, na = e, ra = null, !0);
                        case 13:
                            return null !== (t = 8 !== t.nodeType ? null : t) && (n = null !== Gl ? {
                                id: Kl,
                                overflow: Xl
                            } : null, e.memoizedState = {
                                dehydrated: t,
                                treeContext: n,
                                retryLane: 1073741824
                            }, (n = Rs(18, null, null, 0)).stateNode = t, n.return = e, e.child = n, na = e, ra = null, !0);
                        default:
                            return !1
                    }
                }

                function ua(e) {
                    return !(!(1 & e.mode) || 128 & e.flags)
                }

                function sa(e) {
                    if (la) {
                        var t = ra;
                        if (t) {
                            var n = t;
                            if (!ia(e, t)) {
                                if (ua(e)) throw Error(a(418));
                                t = sl(n.nextSibling);
                                var r = na;
                                t && ia(e, t) ? oa(r, n) : (e.flags = -4097 & e.flags | 2, la = !1, na = e)
                            }
                        } else {
                            if (ua(e)) throw Error(a(418));
                            e.flags = -4097 & e.flags | 2, la = !1, na = e
                        }
                    }
                }

                function ca(e) {
                    for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
                    na = e
                }

                function fa(e) {
                    if (e !== na) return !1;
                    if (!la) return ca(e), la = !0, !1;
                    var t;
                    if ((t = 3 !== e.tag) && !(t = 5 !== e.tag) && (t = "head" !== (t = e.type) && "body" !== t && !nl(e.type, e.memoizedProps)), t && (t = ra)) {
                        if (ua(e)) throw da(), Error(a(418));
                        for (; t;) oa(e, t), t = sl(t.nextSibling)
                    }
                    if (ca(e), 13 === e.tag) {
                        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(a(317));
                        e: {
                            for (e = e.nextSibling, t = 0; e;) {
                                if (8 === e.nodeType) {
                                    var n = e.data;
                                    if ("/$" === n) {
                                        if (0 === t) {
                                            ra = sl(e.nextSibling);
                                            break e
                                        }
                                        t--
                                    } else "$" !== n && "$!" !== n && "$?" !== n || t++
                                }
                                e = e.nextSibling
                            }
                            ra = null
                        }
                    } else ra = na ? sl(e.stateNode.nextSibling) : null;
                    return !0
                }

                function da() {
                    for (var e = ra; e;) e = sl(e.nextSibling)
                }

                function pa() {
                    ra = na = null, la = !1
                }

                function ma(e) {
                    null === aa ? aa = [e] : aa.push(e)
                }
                var ha = w.ReactCurrentBatchConfig;

                function ga(e, t, n) {
                    if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
                        if (n._owner) {
                            if (n = n._owner) {
                                if (1 !== n.tag) throw Error(a(309));
                                var r = n.stateNode
                            }
                            if (!r) throw Error(a(147, e));
                            var l = r,
                                o = "" + e;
                            return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === o ? t.ref : (t = function(e) {
                                var t = l.refs;
                                null === e ? delete t[o] : t[o] = e
                            }, t._stringRef = o, t)
                        }
                        if ("string" != typeof e) throw Error(a(284));
                        if (!n._owner) throw Error(a(290, e))
                    }
                    return e
                }

                function ya(e, t) {
                    throw e = Object.prototype.toString.call(t), Error(a(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
                }

                function va(e) {
                    return (0, e._init)(e._payload)
                }

                function ba(e) {
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

                    function l(e, t) {
                        return (e = zs(e, t)).index = 0, e.sibling = null, e
                    }

                    function o(t, n, r) {
                        return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 2, n) : r : (t.flags |= 2, n) : (t.flags |= 1048576, n)
                    }

                    function i(t) {
                        return e && null === t.alternate && (t.flags |= 2), t
                    }

                    function u(e, t, n, r) {
                        return null === t || 6 !== t.tag ? ((t = Is(n, e.mode, r)).return = e, t) : ((t = l(t, n)).return = e, t)
                    }

                    function s(e, t, n, r) {
                        var a = n.type;
                        return a === E ? f(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === a || "object" == typeof a && null !== a && a.$$typeof === D && va(a) === t.type) ? ((r = l(t, n.props)).ref = ga(e, t, n), r.return = e, r) : ((r = Os(n.type, n.key, n.props, null, e.mode, r)).ref = ga(e, t, n), r.return = e, r)
                    }

                    function c(e, t, n, r) {
                        return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Fs(n, e.mode, r)).return = e, t) : ((t = l(t, n.children || [])).return = e, t)
                    }

                    function f(e, t, n, r, a) {
                        return null === t || 7 !== t.tag ? ((t = As(n, e.mode, r, a)).return = e, t) : ((t = l(t, n)).return = e, t)
                    }

                    function d(e, t, n) {
                        if ("string" == typeof t && "" !== t || "number" == typeof t) return (t = Is("" + t, e.mode, n)).return = e, t;
                        if ("object" == typeof t && null !== t) {
                            switch (t.$$typeof) {
                                case k:
                                    return (n = Os(t.type, t.key, t.props, null, e.mode, n)).ref = ga(e, null, t), n.return = e, n;
                                case S:
                                    return (t = Fs(t, e.mode, n)).return = e, t;
                                case D:
                                    return d(e, (0, t._init)(t._payload), n)
                            }
                            if (te(t) || A(t)) return (t = As(t, e.mode, n, null)).return = e, t;
                            ya(e, t)
                        }
                        return null
                    }

                    function p(e, t, n, r) {
                        var l = null !== t ? t.key : null;
                        if ("string" == typeof n && "" !== n || "number" == typeof n) return null !== l ? null : u(e, t, "" + n, r);
                        if ("object" == typeof n && null !== n) {
                            switch (n.$$typeof) {
                                case k:
                                    return n.key === l ? s(e, t, n, r) : null;
                                case S:
                                    return n.key === l ? c(e, t, n, r) : null;
                                case D:
                                    return p(e, t, (l = n._init)(n._payload), r)
                            }
                            if (te(n) || A(n)) return null !== l ? null : f(e, t, n, r, null);
                            ya(e, n)
                        }
                        return null
                    }

                    function m(e, t, n, r, l) {
                        if ("string" == typeof r && "" !== r || "number" == typeof r) return u(t, e = e.get(n) || null, "" + r, l);
                        if ("object" == typeof r && null !== r) {
                            switch (r.$$typeof) {
                                case k:
                                    return s(t, e = e.get(null === r.key ? n : r.key) || null, r, l);
                                case S:
                                    return c(t, e = e.get(null === r.key ? n : r.key) || null, r, l);
                                case D:
                                    return m(e, t, n, (0, r._init)(r._payload), l)
                            }
                            if (te(r) || A(r)) return f(t, e = e.get(n) || null, r, l, null);
                            ya(t, r)
                        }
                        return null
                    }

                    function h(l, a, i, u) {
                        for (var s = null, c = null, f = a, h = a = 0, g = null; null !== f && h < i.length; h++) {
                            f.index > h ? (g = f, f = null) : g = f.sibling;
                            var y = p(l, f, i[h], u);
                            if (null === y) {
                                null === f && (f = g);
                                break
                            }
                            e && f && null === y.alternate && t(l, f), a = o(y, a, h), null === c ? s = y : c.sibling = y, c = y, f = g
                        }
                        if (h === i.length) return n(l, f), la && Zl(l, h), s;
                        if (null === f) {
                            for (; h < i.length; h++) null !== (f = d(l, i[h], u)) && (a = o(f, a, h), null === c ? s = f : c.sibling = f, c = f);
                            return la && Zl(l, h), s
                        }
                        for (f = r(l, f); h < i.length; h++) null !== (g = m(f, l, h, i[h], u)) && (e && null !== g.alternate && f.delete(null === g.key ? h : g.key), a = o(g, a, h), null === c ? s = g : c.sibling = g, c = g);
                        return e && f.forEach((function(e) {
                            return t(l, e)
                        })), la && Zl(l, h), s
                    }

                    function g(l, i, u, s) {
                        var c = A(u);
                        if ("function" != typeof c) throw Error(a(150));
                        if (null == (u = c.call(u))) throw Error(a(151));
                        for (var f = c = null, h = i, g = i = 0, y = null, v = u.next(); null !== h && !v.done; g++, v = u.next()) {
                            h.index > g ? (y = h, h = null) : y = h.sibling;
                            var b = p(l, h, v.value, s);
                            if (null === b) {
                                null === h && (h = y);
                                break
                            }
                            e && h && null === b.alternate && t(l, h), i = o(b, i, g), null === f ? c = b : f.sibling = b, f = b, h = y
                        }
                        if (v.done) return n(l, h), la && Zl(l, g), c;
                        if (null === h) {
                            for (; !v.done; g++, v = u.next()) null !== (v = d(l, v.value, s)) && (i = o(v, i, g), null === f ? c = v : f.sibling = v, f = v);
                            return la && Zl(l, g), c
                        }
                        for (h = r(l, h); !v.done; g++, v = u.next()) null !== (v = m(h, l, g, v.value, s)) && (e && null !== v.alternate && h.delete(null === v.key ? g : v.key), i = o(v, i, g), null === f ? c = v : f.sibling = v, f = v);
                        return e && h.forEach((function(e) {
                            return t(l, e)
                        })), la && Zl(l, g), c
                    }
                    return function e(r, a, o, u) {
                        if ("object" == typeof o && null !== o && o.type === E && null === o.key && (o = o.props.children), "object" == typeof o && null !== o) {
                            switch (o.$$typeof) {
                                case k:
                                    e: {
                                        for (var s = o.key, c = a; null !== c;) {
                                            if (c.key === s) {
                                                if ((s = o.type) === E) {
                                                    if (7 === c.tag) {
                                                        n(r, c.sibling), (a = l(c, o.props.children)).return = r, r = a;
                                                        break e
                                                    }
                                                } else if (c.elementType === s || "object" == typeof s && null !== s && s.$$typeof === D && va(s) === c.type) {
                                                    n(r, c.sibling), (a = l(c, o.props)).ref = ga(r, c, o), a.return = r, r = a;
                                                    break e
                                                }
                                                n(r, c);
                                                break
                                            }
                                            t(r, c), c = c.sibling
                                        }
                                        o.type === E ? ((a = As(o.props.children, r.mode, u, o.key)).return = r, r = a) : ((u = Os(o.type, o.key, o.props, null, r.mode, u)).ref = ga(r, a, o), u.return = r, r = u)
                                    }
                                    return i(r);
                                case S:
                                    e: {
                                        for (c = o.key; null !== a;) {
                                            if (a.key === c) {
                                                if (4 === a.tag && a.stateNode.containerInfo === o.containerInfo && a.stateNode.implementation === o.implementation) {
                                                    n(r, a.sibling), (a = l(a, o.children || [])).return = r, r = a;
                                                    break e
                                                }
                                                n(r, a);
                                                break
                                            }
                                            t(r, a), a = a.sibling
                                        }(a = Fs(o, r.mode, u)).return = r,
                                        r = a
                                    }
                                    return i(r);
                                case D:
                                    return e(r, a, (c = o._init)(o._payload), u)
                            }
                            if (te(o)) return h(r, a, o, u);
                            if (A(o)) return g(r, a, o, u);
                            ya(r, o)
                        }
                        return "string" == typeof o && "" !== o || "number" == typeof o ? (o = "" + o, null !== a && 6 === a.tag ? (n(r, a.sibling), (a = l(a, o)).return = r, r = a) : (n(r, a), (a = Is(o, r.mode, u)).return = r, r = a), i(r)) : n(r, a)
                    }
                }
                var wa = ba(!0),
                    ka = ba(!1),
                    Sa = xl(null),
                    Ea = null,
                    xa = null,
                    _a = null;

                function Ca() {
                    _a = xa = Ea = null
                }

                function Ta(e) {
                    var t = Sa.current;
                    _l(Sa), e._currentValue = t
                }

                function Na(e, t, n) {
                    for (; null !== e;) {
                        var r = e.alternate;
                        if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
                        e = e.return
                    }
                }

                function La(e, t) {
                    Ea = e, _a = xa = null, null !== (e = e.dependencies) && null !== e.firstContext && (!!(e.lanes & t) && (bi = !0), e.firstContext = null)
                }

                function Pa(e) {
                    var t = e._currentValue;
                    if (_a !== e)
                        if (e = {
                                context: e,
                                memoizedValue: t,
                                next: null
                            }, null === xa) {
                            if (null === Ea) throw Error(a(308));
                            xa = e, Ea.dependencies = {
                                lanes: 0,
                                firstContext: e
                            }
                        } else xa = xa.next = e;
                    return t
                }
                var Ra = null;

                function Da(e) {
                    null === Ra ? Ra = [e] : Ra.push(e)
                }

                function za(e, t, n, r) {
                    var l = t.interleaved;
                    return null === l ? (n.next = n, Da(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Oa(e, r)
                }

                function Oa(e, t) {
                    e.lanes |= t;
                    var n = e.alternate;
                    for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e;) e.childLanes |= t, null !== (n = e.alternate) && (n.childLanes |= t), n = e, e = e.return;
                    return 3 === n.tag ? n.stateNode : null
                }
                var Aa = !1;

                function Ma(e) {
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

                function Ia(e, t) {
                    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
                        baseState: e.baseState,
                        firstBaseUpdate: e.firstBaseUpdate,
                        lastBaseUpdate: e.lastBaseUpdate,
                        shared: e.shared,
                        effects: e.effects
                    })
                }

                function Fa(e, t) {
                    return {
                        eventTime: e,
                        lane: t,
                        tag: 0,
                        payload: null,
                        callback: null,
                        next: null
                    }
                }

                function Ua(e, t, n) {
                    var r = e.updateQueue;
                    if (null === r) return null;
                    if (r = r.shared, 2 & Nu) {
                        var l = r.pending;
                        return null === l ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Oa(e, n)
                    }
                    return null === (l = r.interleaved) ? (t.next = t, Da(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Oa(e, n)
                }

                function ja(e, t, n) {
                    if (null !== (t = t.updateQueue) && (t = t.shared, 4194240 & n)) {
                        var r = t.lanes;
                        n |= r &= e.pendingLanes, t.lanes = n, vt(e, n)
                    }
                }

                function Ha(e, t) {
                    var n = e.updateQueue,
                        r = e.alternate;
                    if (null !== r && n === (r = r.updateQueue)) {
                        var l = null,
                            a = null;
                        if (null !== (n = n.firstBaseUpdate)) {
                            do {
                                var o = {
                                    eventTime: n.eventTime,
                                    lane: n.lane,
                                    tag: n.tag,
                                    payload: n.payload,
                                    callback: n.callback,
                                    next: null
                                };
                                null === a ? l = a = o : a = a.next = o, n = n.next
                            } while (null !== n);
                            null === a ? l = a = t : a = a.next = t
                        } else l = a = t;
                        return n = {
                            baseState: r.baseState,
                            firstBaseUpdate: l,
                            lastBaseUpdate: a,
                            shared: r.shared,
                            effects: r.effects
                        }, void(e.updateQueue = n)
                    }
                    null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
                }

                function Ba(e, t, n, r) {
                    var l = e.updateQueue;
                    Aa = !1;
                    var a = l.firstBaseUpdate,
                        o = l.lastBaseUpdate,
                        i = l.shared.pending;
                    if (null !== i) {
                        l.shared.pending = null;
                        var u = i,
                            s = u.next;
                        u.next = null, null === o ? a = s : o.next = s, o = u;
                        var c = e.alternate;
                        null !== c && ((i = (c = c.updateQueue).lastBaseUpdate) !== o && (null === i ? c.firstBaseUpdate = s : i.next = s, c.lastBaseUpdate = u))
                    }
                    if (null !== a) {
                        var f = l.baseState;
                        for (o = 0, c = s = u = null, i = a;;) {
                            var d = i.lane,
                                p = i.eventTime;
                            if ((r & d) === d) {
                                null !== c && (c = c.next = {
                                    eventTime: p,
                                    lane: 0,
                                    tag: i.tag,
                                    payload: i.payload,
                                    callback: i.callback,
                                    next: null
                                });
                                e: {
                                    var m = e,
                                        h = i;
                                    switch (d = t, p = n, h.tag) {
                                        case 1:
                                            if ("function" == typeof(m = h.payload)) {
                                                f = m.call(p, f, d);
                                                break e
                                            }
                                            f = m;
                                            break e;
                                        case 3:
                                            m.flags = -65537 & m.flags | 128;
                                        case 0:
                                            if (null == (d = "function" == typeof(m = h.payload) ? m.call(p, f, d) : m)) break e;
                                            f = I({}, f, d);
                                            break e;
                                        case 2:
                                            Aa = !0
                                    }
                                }
                                null !== i.callback && 0 !== i.lane && (e.flags |= 64, null === (d = l.effects) ? l.effects = [i] : d.push(i))
                            } else p = {
                                eventTime: p,
                                lane: d,
                                tag: i.tag,
                                payload: i.payload,
                                callback: i.callback,
                                next: null
                            }, null === c ? (s = c = p, u = f) : c = c.next = p, o |= d;
                            if (null === (i = i.next)) {
                                if (null === (i = l.shared.pending)) break;
                                i = (d = i).next, d.next = null, l.lastBaseUpdate = d, l.shared.pending = null
                            }
                        }
                        if (null === c && (u = f), l.baseState = u, l.firstBaseUpdate = s, l.lastBaseUpdate = c, null !== (t = l.shared.interleaved)) {
                            l = t;
                            do {
                                o |= l.lane, l = l.next
                            } while (l !== t)
                        } else null === a && (l.shared.lanes = 0);
                        Mu |= o, e.lanes = o, e.memoizedState = f
                    }
                }

                function Wa(e, t, n) {
                    if (e = t.effects, t.effects = null, null !== e)
                        for (t = 0; t < e.length; t++) {
                            var r = e[t],
                                l = r.callback;
                            if (null !== l) {
                                if (r.callback = null, r = n, "function" != typeof l) throw Error(a(191, l));
                                l.call(r)
                            }
                        }
                }
                var $a = {},
                    Va = xl($a),
                    Qa = xl($a),
                    qa = xl($a);

                function Ya(e) {
                    if (e === $a) throw Error(a(174));
                    return e
                }

                function Ga(e, t) {
                    switch (Cl(qa, t), Cl(Qa, e), Cl(Va, $a), e = t.nodeType) {
                        case 9:
                        case 11:
                            t = (t = t.documentElement) ? t.namespaceURI : ue(null, "");
                            break;
                        default:
                            t = ue(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName)
                    }
                    _l(Va), Cl(Va, t)
                }

                function Ka() {
                    _l(Va), _l(Qa), _l(qa)
                }

                function Xa(e) {
                    Ya(qa.current);
                    var t = Ya(Va.current),
                        n = ue(t, e.type);
                    t !== n && (Cl(Qa, e), Cl(Va, n))
                }

                function Za(e) {
                    Qa.current === e && (_l(Va), _l(Qa))
                }
                var Ja = xl(0);

                function eo(e) {
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
                var to = [];

                function no() {
                    for (var e = 0; e < to.length; e++) to[e]._workInProgressVersionPrimary = null;
                    to.length = 0
                }
                var ro = w.ReactCurrentDispatcher,
                    lo = w.ReactCurrentBatchConfig,
                    ao = 0,
                    oo = null,
                    io = null,
                    uo = null,
                    so = !1,
                    co = !1,
                    fo = 0,
                    po = 0;

                function mo() {
                    throw Error(a(321))
                }

                function ho(e, t) {
                    if (null === t) return !1;
                    for (var n = 0; n < t.length && n < e.length; n++)
                        if (!ir(e[n], t[n])) return !1;
                    return !0
                }

                function go(e, t, n, r, l, o) {
                    if (ao = o, oo = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ro.current = null === e || null === e.memoizedState ? Jo : ei, e = n(r, l), co) {
                        o = 0;
                        do {
                            if (co = !1, fo = 0, 25 <= o) throw Error(a(301));
                            o += 1, uo = io = null, t.updateQueue = null, ro.current = ti, e = n(r, l)
                        } while (co)
                    }
                    if (ro.current = Zo, t = null !== io && null !== io.next, ao = 0, uo = io = oo = null, so = !1, t) throw Error(a(300));
                    return e
                }

                function yo() {
                    var e = 0 !== fo;
                    return fo = 0, e
                }

                function vo() {
                    var e = {
                        memoizedState: null,
                        baseState: null,
                        baseQueue: null,
                        queue: null,
                        next: null
                    };
                    return null === uo ? oo.memoizedState = uo = e : uo = uo.next = e, uo
                }

                function bo() {
                    if (null === io) {
                        var e = oo.alternate;
                        e = null !== e ? e.memoizedState : null
                    } else e = io.next;
                    var t = null === uo ? oo.memoizedState : uo.next;
                    if (null !== t) uo = t, io = e;
                    else {
                        if (null === e) throw Error(a(310));
                        e = {
                            memoizedState: (io = e).memoizedState,
                            baseState: io.baseState,
                            baseQueue: io.baseQueue,
                            queue: io.queue,
                            next: null
                        }, null === uo ? oo.memoizedState = uo = e : uo = uo.next = e
                    }
                    return uo
                }

                function wo(e, t) {
                    return "function" == typeof t ? t(e) : t
                }

                function ko(e) {
                    var t = bo(),
                        n = t.queue;
                    if (null === n) throw Error(a(311));
                    n.lastRenderedReducer = e;
                    var r = io,
                        l = r.baseQueue,
                        o = n.pending;
                    if (null !== o) {
                        if (null !== l) {
                            var i = l.next;
                            l.next = o.next, o.next = i
                        }
                        r.baseQueue = l = o, n.pending = null
                    }
                    if (null !== l) {
                        o = l.next, r = r.baseState;
                        var u = i = null,
                            s = null,
                            c = o;
                        do {
                            var f = c.lane;
                            if ((ao & f) === f) null !== s && (s = s.next = {
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
                                null === s ? (u = s = d, i = r) : s = s.next = d, oo.lanes |= f, Mu |= f
                            }
                            c = c.next
                        } while (null !== c && c !== o);
                        null === s ? i = r : s.next = u, ir(r, t.memoizedState) || (bi = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = s, n.lastRenderedState = r
                    }
                    if (null !== (e = n.interleaved)) {
                        l = e;
                        do {
                            o = l.lane, oo.lanes |= o, Mu |= o, l = l.next
                        } while (l !== e)
                    } else null === l && (n.lanes = 0);
                    return [t.memoizedState, n.dispatch]
                }

                function So(e) {
                    var t = bo(),
                        n = t.queue;
                    if (null === n) throw Error(a(311));
                    n.lastRenderedReducer = e;
                    var r = n.dispatch,
                        l = n.pending,
                        o = t.memoizedState;
                    if (null !== l) {
                        n.pending = null;
                        var i = l = l.next;
                        do {
                            o = e(o, i.action), i = i.next
                        } while (i !== l);
                        ir(o, t.memoizedState) || (bi = !0), t.memoizedState = o, null === t.baseQueue && (t.baseState = o), n.lastRenderedState = o
                    }
                    return [o, r]
                }

                function Eo() {}

                function xo(e, t) {
                    var n = oo,
                        r = bo(),
                        l = t(),
                        o = !ir(r.memoizedState, l);
                    if (o && (r.memoizedState = l, bi = !0), r = r.queue, Mo(To.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || null !== uo && 1 & uo.memoizedState.tag) {
                        if (n.flags |= 2048, Ro(9, Co.bind(null, n, r, l, t), void 0, null), null === Lu) throw Error(a(349));
                        30 & ao || _o(n, t, l)
                    }
                    return l
                }

                function _o(e, t, n) {
                    e.flags |= 16384, e = {
                        getSnapshot: t,
                        value: n
                    }, null === (t = oo.updateQueue) ? (t = {
                        lastEffect: null,
                        stores: null
                    }, oo.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e)
                }

                function Co(e, t, n, r) {
                    t.value = n, t.getSnapshot = r, No(t) && Lo(e)
                }

                function To(e, t, n) {
                    return n((function() {
                        No(t) && Lo(e)
                    }))
                }

                function No(e) {
                    var t = e.getSnapshot;
                    e = e.value;
                    try {
                        var n = t();
                        return !ir(e, n)
                    } catch (e) {
                        return !0
                    }
                }

                function Lo(e) {
                    var t = Oa(e, 1);
                    null !== t && ns(t, e, 1, -1)
                }

                function Po(e) {
                    var t = vo();
                    return "function" == typeof e && (e = e()), t.memoizedState = t.baseState = e, e = {
                        pending: null,
                        interleaved: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: wo,
                        lastRenderedState: e
                    }, t.queue = e, e = e.dispatch = Yo.bind(null, oo, e), [t.memoizedState, e]
                }

                function Ro(e, t, n, r) {
                    return e = {
                        tag: e,
                        create: t,
                        destroy: n,
                        deps: r,
                        next: null
                    }, null === (t = oo.updateQueue) ? (t = {
                        lastEffect: null,
                        stores: null
                    }, oo.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e
                }

                function Do() {
                    return bo().memoizedState
                }

                function zo(e, t, n, r) {
                    var l = vo();
                    oo.flags |= e, l.memoizedState = Ro(1 | t, n, void 0, void 0 === r ? null : r)
                }

                function Oo(e, t, n, r) {
                    var l = bo();
                    r = void 0 === r ? null : r;
                    var a = void 0;
                    if (null !== io) {
                        var o = io.memoizedState;
                        if (a = o.destroy, null !== r && ho(r, o.deps)) return void(l.memoizedState = Ro(t, n, a, r))
                    }
                    oo.flags |= e, l.memoizedState = Ro(1 | t, n, a, r)
                }

                function Ao(e, t) {
                    return zo(8390656, 8, e, t)
                }

                function Mo(e, t) {
                    return Oo(2048, 8, e, t)
                }

                function Io(e, t) {
                    return Oo(4, 2, e, t)
                }

                function Fo(e, t) {
                    return Oo(4, 4, e, t)
                }

                function Uo(e, t) {
                    return "function" == typeof t ? (e = e(), t(e), function() {
                        t(null)
                    }) : null != t ? (e = e(), t.current = e, function() {
                        t.current = null
                    }) : void 0
                }

                function jo(e, t, n) {
                    return n = null != n ? n.concat([e]) : null, Oo(4, 4, Uo.bind(null, t, e), n)
                }

                function Ho() {}

                function Bo(e, t) {
                    var n = bo();
                    t = void 0 === t ? null : t;
                    var r = n.memoizedState;
                    return null !== r && null !== t && ho(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
                }

                function Wo(e, t) {
                    var n = bo();
                    t = void 0 === t ? null : t;
                    var r = n.memoizedState;
                    return null !== r && null !== t && ho(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
                }

                function $o(e, t, n) {
                    return 21 & ao ? (ir(n, t) || (n = ht(), oo.lanes |= n, Mu |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, bi = !0), e.memoizedState = n)
                }

                function Vo(e, t) {
                    var n = bt;
                    bt = 0 !== n && 4 > n ? n : 4, e(!0);
                    var r = lo.transition;
                    lo.transition = {};
                    try {
                        e(!1), t()
                    } finally {
                        bt = n, lo.transition = r
                    }
                }

                function Qo() {
                    return bo().memoizedState
                }

                function qo(e, t, n) {
                    var r = ts(e);
                    if (n = {
                            lane: r,
                            action: n,
                            hasEagerState: !1,
                            eagerState: null,
                            next: null
                        }, Go(e)) Ko(t, n);
                    else if (null !== (n = za(e, t, n, r))) {
                        ns(n, e, r, es()), Xo(n, t, r)
                    }
                }

                function Yo(e, t, n) {
                    var r = ts(e),
                        l = {
                            lane: r,
                            action: n,
                            hasEagerState: !1,
                            eagerState: null,
                            next: null
                        };
                    if (Go(e)) Ko(t, l);
                    else {
                        var a = e.alternate;
                        if (0 === e.lanes && (null === a || 0 === a.lanes) && null !== (a = t.lastRenderedReducer)) try {
                            var o = t.lastRenderedState,
                                i = a(o, n);
                            if (l.hasEagerState = !0, l.eagerState = i, ir(i, o)) {
                                var u = t.interleaved;
                                return null === u ? (l.next = l, Da(t)) : (l.next = u.next, u.next = l), void(t.interleaved = l)
                            }
                        } catch (e) {}
                        null !== (n = za(e, t, l, r)) && (ns(n, e, r, l = es()), Xo(n, t, r))
                    }
                }

                function Go(e) {
                    var t = e.alternate;
                    return e === oo || null !== t && t === oo
                }

                function Ko(e, t) {
                    co = so = !0;
                    var n = e.pending;
                    null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
                }

                function Xo(e, t, n) {
                    if (4194240 & n) {
                        var r = t.lanes;
                        n |= r &= e.pendingLanes, t.lanes = n, vt(e, n)
                    }
                }
                var Zo = {
                        readContext: Pa,
                        useCallback: mo,
                        useContext: mo,
                        useEffect: mo,
                        useImperativeHandle: mo,
                        useInsertionEffect: mo,
                        useLayoutEffect: mo,
                        useMemo: mo,
                        useReducer: mo,
                        useRef: mo,
                        useState: mo,
                        useDebugValue: mo,
                        useDeferredValue: mo,
                        useTransition: mo,
                        useMutableSource: mo,
                        useSyncExternalStore: mo,
                        useId: mo,
                        unstable_isNewReconciler: !1
                    },
                    Jo = {
                        readContext: Pa,
                        useCallback: function(e, t) {
                            return vo().memoizedState = [e, void 0 === t ? null : t], e
                        },
                        useContext: Pa,
                        useEffect: Ao,
                        useImperativeHandle: function(e, t, n) {
                            return n = null != n ? n.concat([e]) : null, zo(4194308, 4, Uo.bind(null, t, e), n)
                        },
                        useLayoutEffect: function(e, t) {
                            return zo(4194308, 4, e, t)
                        },
                        useInsertionEffect: function(e, t) {
                            return zo(4, 2, e, t)
                        },
                        useMemo: function(e, t) {
                            var n = vo();
                            return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e
                        },
                        useReducer: function(e, t, n) {
                            var r = vo();
                            return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                                pending: null,
                                interleaved: null,
                                lanes: 0,
                                dispatch: null,
                                lastRenderedReducer: e,
                                lastRenderedState: t
                            }, r.queue = e, e = e.dispatch = qo.bind(null, oo, e), [r.memoizedState, e]
                        },
                        useRef: function(e) {
                            return e = {
                                current: e
                            }, vo().memoizedState = e
                        },
                        useState: Po,
                        useDebugValue: Ho,
                        useDeferredValue: function(e) {
                            return vo().memoizedState = e
                        },
                        useTransition: function() {
                            var e = Po(!1),
                                t = e[0];
                            return e = Vo.bind(null, e[1]), vo().memoizedState = e, [t, e]
                        },
                        useMutableSource: function() {},
                        useSyncExternalStore: function(e, t, n) {
                            var r = oo,
                                l = vo();
                            if (la) {
                                if (void 0 === n) throw Error(a(407));
                                n = n()
                            } else {
                                if (n = t(), null === Lu) throw Error(a(349));
                                30 & ao || _o(r, t, n)
                            }
                            l.memoizedState = n;
                            var o = {
                                value: n,
                                getSnapshot: t
                            };
                            return l.queue = o, Ao(To.bind(null, r, o, e), [e]), r.flags |= 2048, Ro(9, Co.bind(null, r, o, n, t), void 0, null), n
                        },
                        useId: function() {
                            var e = vo(),
                                t = Lu.identifierPrefix;
                            if (la) {
                                var n = Xl;
                                t = ":" + t + "R" + (n = (Kl & ~(1 << 32 - ot(Kl) - 1)).toString(32) + n), 0 < (n = fo++) && (t += "H" + n.toString(32)), t += ":"
                            } else t = ":" + t + "r" + (n = po++).toString(32) + ":";
                            return e.memoizedState = t
                        },
                        unstable_isNewReconciler: !1
                    },
                    ei = {
                        readContext: Pa,
                        useCallback: Bo,
                        useContext: Pa,
                        useEffect: Mo,
                        useImperativeHandle: jo,
                        useInsertionEffect: Io,
                        useLayoutEffect: Fo,
                        useMemo: Wo,
                        useReducer: ko,
                        useRef: Do,
                        useState: function() {
                            return ko(wo)
                        },
                        useDebugValue: Ho,
                        useDeferredValue: function(e) {
                            return $o(bo(), io.memoizedState, e)
                        },
                        useTransition: function() {
                            return [ko(wo)[0], bo().memoizedState]
                        },
                        useMutableSource: Eo,
                        useSyncExternalStore: xo,
                        useId: Qo,
                        unstable_isNewReconciler: !1
                    },
                    ti = {
                        readContext: Pa,
                        useCallback: Bo,
                        useContext: Pa,
                        useEffect: Mo,
                        useImperativeHandle: jo,
                        useInsertionEffect: Io,
                        useLayoutEffect: Fo,
                        useMemo: Wo,
                        useReducer: So,
                        useRef: Do,
                        useState: function() {
                            return So(wo)
                        },
                        useDebugValue: Ho,
                        useDeferredValue: function(e) {
                            var t = bo();
                            return null === io ? t.memoizedState = e : $o(t, io.memoizedState, e)
                        },
                        useTransition: function() {
                            return [So(wo)[0], bo().memoizedState]
                        },
                        useMutableSource: Eo,
                        useSyncExternalStore: xo,
                        useId: Qo,
                        unstable_isNewReconciler: !1
                    };

                function ni(e, t) {
                    if (e && e.defaultProps) {
                        for (var n in t = I({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
                        return t
                    }
                    return t
                }

                function ri(e, t, n, r) {
                    n = null == (n = n(r, t = e.memoizedState)) ? t : I({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n)
                }
                var li = {
                    isMounted: function(e) {
                        return !!(e = e._reactInternals) && Be(e) === e
                    },
                    enqueueSetState: function(e, t, n) {
                        e = e._reactInternals;
                        var r = es(),
                            l = ts(e),
                            a = Fa(r, l);
                        a.payload = t, null != n && (a.callback = n), null !== (t = Ua(e, a, l)) && (ns(t, e, l, r), ja(t, e, l))
                    },
                    enqueueReplaceState: function(e, t, n) {
                        e = e._reactInternals;
                        var r = es(),
                            l = ts(e),
                            a = Fa(r, l);
                        a.tag = 1, a.payload = t, null != n && (a.callback = n), null !== (t = Ua(e, a, l)) && (ns(t, e, l, r), ja(t, e, l))
                    },
                    enqueueForceUpdate: function(e, t) {
                        e = e._reactInternals;
                        var n = es(),
                            r = ts(e),
                            l = Fa(n, r);
                        l.tag = 2, null != t && (l.callback = t), null !== (t = Ua(e, l, r)) && (ns(t, e, r, n), ja(t, e, r))
                    }
                };

                function ai(e, t, n, r, l, a, o) {
                    return "function" == typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, a, o) : !t.prototype || !t.prototype.isPureReactComponent || (!ur(n, r) || !ur(l, a))
                }

                function oi(e, t, n) {
                    var r = !1,
                        l = Tl,
                        a = t.contextType;
                    return "object" == typeof a && null !== a ? a = Pa(a) : (l = Dl(t) ? Pl : Nl.current, a = (r = null != (r = t.contextTypes)) ? Rl(e, l) : Tl), t = new t(n, a), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = li, e.stateNode = t, t._reactInternals = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = a), t
                }

                function ii(e, t, n, r) {
                    e = t.state, "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && li.enqueueReplaceState(t, t.state, null)
                }

                function ui(e, t, n, r) {
                    var l = e.stateNode;
                    l.props = n, l.state = e.memoizedState, l.refs = {}, Ma(e);
                    var a = t.contextType;
                    "object" == typeof a && null !== a ? l.context = Pa(a) : (a = Dl(t) ? Pl : Nl.current, l.context = Rl(e, a)), l.state = e.memoizedState, "function" == typeof(a = t.getDerivedStateFromProps) && (ri(e, t, a, n), l.state = e.memoizedState), "function" == typeof t.getDerivedStateFromProps || "function" == typeof l.getSnapshotBeforeUpdate || "function" != typeof l.UNSAFE_componentWillMount && "function" != typeof l.componentWillMount || (t = l.state, "function" == typeof l.componentWillMount && l.componentWillMount(), "function" == typeof l.UNSAFE_componentWillMount && l.UNSAFE_componentWillMount(), t !== l.state && li.enqueueReplaceState(l, l.state, null), Ba(e, n, l, r), l.state = e.memoizedState), "function" == typeof l.componentDidMount && (e.flags |= 4194308)
                }

                function si(e, t) {
                    try {
                        var n = "",
                            r = t;
                        do {
                            n += H(r), r = r.return
                        } while (r);
                        var l = n
                    } catch (e) {
                        l = "\nError generating stack: " + e.message + "\n" + e.stack
                    }
                    return {
                        value: e,
                        source: t,
                        stack: l,
                        digest: null
                    }
                }

                function ci(e, t, n) {
                    return {
                        value: e,
                        source: null,
                        stack: null != n ? n : null,
                        digest: null != t ? t : null
                    }
                }

                function fi(e, t) {
                    try {
                        console.error(t.value)
                    } catch (e) {
                        setTimeout((function() {
                            throw e
                        }))
                    }
                }
                var di = "function" == typeof WeakMap ? WeakMap : Map;

                function pi(e, t, n) {
                    (n = Fa(-1, n)).tag = 3, n.payload = {
                        element: null
                    };
                    var r = t.value;
                    return n.callback = function() {
                        $u || ($u = !0, Vu = r), fi(0, t)
                    }, n
                }

                function mi(e, t, n) {
                    (n = Fa(-1, n)).tag = 3;
                    var r = e.type.getDerivedStateFromError;
                    if ("function" == typeof r) {
                        var l = t.value;
                        n.payload = function() {
                            return r(l)
                        }, n.callback = function() {
                            fi(0, t)
                        }
                    }
                    var a = e.stateNode;
                    return null !== a && "function" == typeof a.componentDidCatch && (n.callback = function() {
                        fi(0, t), "function" != typeof r && (null === Qu ? Qu = new Set([this]) : Qu.add(this));
                        var e = t.stack;
                        this.componentDidCatch(t.value, {
                            componentStack: null !== e ? e : ""
                        })
                    }), n
                }

                function hi(e, t, n) {
                    var r = e.pingCache;
                    if (null === r) {
                        r = e.pingCache = new di;
                        var l = new Set;
                        r.set(t, l)
                    } else void 0 === (l = r.get(t)) && (l = new Set, r.set(t, l));
                    l.has(n) || (l.add(n), e = _s.bind(null, e, t, n), t.then(e, e))
                }

                function gi(e) {
                    do {
                        var t;
                        if ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t) return e;
                        e = e.return
                    } while (null !== e);
                    return null
                }

                function yi(e, t, n, r, l) {
                    return 1 & e.mode ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, 1 === n.tag && (null === n.alternate ? n.tag = 17 : ((t = Fa(-1, 1)).tag = 2, Ua(n, t, 1))), n.lanes |= 1), e)
                }
                var vi = w.ReactCurrentOwner,
                    bi = !1;

                function wi(e, t, n, r) {
                    t.child = null === e ? ka(t, null, n, r) : wa(t, e.child, n, r)
                }

                function ki(e, t, n, r, l) {
                    n = n.render;
                    var a = t.ref;
                    return La(t, l), r = go(e, t, n, r, a, l), n = yo(), null === e || bi ? (la && n && ea(t), t.flags |= 1, wi(e, t, r, l), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, $i(e, t, l))
                }

                function Si(e, t, n, r, l) {
                    if (null === e) {
                        var a = n.type;
                        return "function" != typeof a || Ds(a) || void 0 !== a.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Os(n.type, null, r, t, t.mode, l)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = a, Ei(e, t, a, r, l))
                    }
                    if (a = e.child, !(e.lanes & l)) {
                        var o = a.memoizedProps;
                        if ((n = null !== (n = n.compare) ? n : ur)(o, r) && e.ref === t.ref) return $i(e, t, l)
                    }
                    return t.flags |= 1, (e = zs(a, r)).ref = t.ref, e.return = t, t.child = e
                }

                function Ei(e, t, n, r, l) {
                    if (null !== e) {
                        var a = e.memoizedProps;
                        if (ur(a, r) && e.ref === t.ref) {
                            if (bi = !1, t.pendingProps = r = a, !(e.lanes & l)) return t.lanes = e.lanes, $i(e, t, l);
                            131072 & e.flags && (bi = !0)
                        }
                    }
                    return Ci(e, t, n, r, l)
                }

                function xi(e, t, n) {
                    var r = t.pendingProps,
                        l = r.children,
                        a = null !== e ? e.memoizedState : null;
                    if ("hidden" === r.mode)
                        if (1 & t.mode) {
                            if (!(1073741824 & n)) return e = null !== a ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                                baseLanes: e,
                                cachePool: null,
                                transitions: null
                            }, t.updateQueue = null, Cl(zu, Du), Du |= e, null;
                            t.memoizedState = {
                                baseLanes: 0,
                                cachePool: null,
                                transitions: null
                            }, r = null !== a ? a.baseLanes : n, Cl(zu, Du), Du |= r
                        } else t.memoizedState = {
                            baseLanes: 0,
                            cachePool: null,
                            transitions: null
                        }, Cl(zu, Du), Du |= n;
                    else null !== a ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, Cl(zu, Du), Du |= r;
                    return wi(e, t, l, n), t.child
                }

                function _i(e, t) {
                    var n = t.ref;
                    (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
                }

                function Ci(e, t, n, r, l) {
                    var a = Dl(n) ? Pl : Nl.current;
                    return a = Rl(t, a), La(t, l), n = go(e, t, n, r, a, l), r = yo(), null === e || bi ? (la && r && ea(t), t.flags |= 1, wi(e, t, n, l), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, $i(e, t, l))
                }

                function Ti(e, t, n, r, l) {
                    if (Dl(n)) {
                        var a = !0;
                        Ml(t)
                    } else a = !1;
                    if (La(t, l), null === t.stateNode) Wi(e, t), oi(t, n, r), ui(t, n, r, l), r = !0;
                    else if (null === e) {
                        var o = t.stateNode,
                            i = t.memoizedProps;
                        o.props = i;
                        var u = o.context,
                            s = n.contextType;
                        "object" == typeof s && null !== s ? s = Pa(s) : s = Rl(t, s = Dl(n) ? Pl : Nl.current);
                        var c = n.getDerivedStateFromProps,
                            f = "function" == typeof c || "function" == typeof o.getSnapshotBeforeUpdate;
                        f || "function" != typeof o.UNSAFE_componentWillReceiveProps && "function" != typeof o.componentWillReceiveProps || (i !== r || u !== s) && ii(t, o, r, s), Aa = !1;
                        var d = t.memoizedState;
                        o.state = d, Ba(t, r, o, l), u = t.memoizedState, i !== r || d !== u || Ll.current || Aa ? ("function" == typeof c && (ri(t, n, c, r), u = t.memoizedState), (i = Aa || ai(t, n, i, r, d, u, s)) ? (f || "function" != typeof o.UNSAFE_componentWillMount && "function" != typeof o.componentWillMount || ("function" == typeof o.componentWillMount && o.componentWillMount(), "function" == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount()), "function" == typeof o.componentDidMount && (t.flags |= 4194308)) : ("function" == typeof o.componentDidMount && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), o.props = r, o.state = u, o.context = s, r = i) : ("function" == typeof o.componentDidMount && (t.flags |= 4194308), r = !1)
                    } else {
                        o = t.stateNode, Ia(e, t), i = t.memoizedProps, s = t.type === t.elementType ? i : ni(t.type, i), o.props = s, f = t.pendingProps, d = o.context, "object" == typeof(u = n.contextType) && null !== u ? u = Pa(u) : u = Rl(t, u = Dl(n) ? Pl : Nl.current);
                        var p = n.getDerivedStateFromProps;
                        (c = "function" == typeof p || "function" == typeof o.getSnapshotBeforeUpdate) || "function" != typeof o.UNSAFE_componentWillReceiveProps && "function" != typeof o.componentWillReceiveProps || (i !== f || d !== u) && ii(t, o, r, u), Aa = !1, d = t.memoizedState, o.state = d, Ba(t, r, o, l);
                        var m = t.memoizedState;
                        i !== f || d !== m || Ll.current || Aa ? ("function" == typeof p && (ri(t, n, p, r), m = t.memoizedState), (s = Aa || ai(t, n, s, r, d, m, u) || !1) ? (c || "function" != typeof o.UNSAFE_componentWillUpdate && "function" != typeof o.componentWillUpdate || ("function" == typeof o.componentWillUpdate && o.componentWillUpdate(r, m, u), "function" == typeof o.UNSAFE_componentWillUpdate && o.UNSAFE_componentWillUpdate(r, m, u)), "function" == typeof o.componentDidUpdate && (t.flags |= 4), "function" == typeof o.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" != typeof o.componentDidUpdate || i === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), "function" != typeof o.getSnapshotBeforeUpdate || i === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = m), o.props = r, o.state = m, o.context = u, r = s) : ("function" != typeof o.componentDidUpdate || i === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), "function" != typeof o.getSnapshotBeforeUpdate || i === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1)
                    }
                    return Ni(e, t, n, r, a, l)
                }

                function Ni(e, t, n, r, l, a) {
                    _i(e, t);
                    var o = !!(128 & t.flags);
                    if (!r && !o) return l && Il(t, n, !1), $i(e, t, a);
                    r = t.stateNode, vi.current = t;
                    var i = o && "function" != typeof n.getDerivedStateFromError ? null : r.render();
                    return t.flags |= 1, null !== e && o ? (t.child = wa(t, e.child, null, a), t.child = wa(t, null, i, a)) : wi(e, t, i, a), t.memoizedState = r.state, l && Il(t, n, !0), t.child
                }

                function Li(e) {
                    var t = e.stateNode;
                    t.pendingContext ? Ol(0, t.pendingContext, t.pendingContext !== t.context) : t.context && Ol(0, t.context, !1), Ga(e, t.containerInfo)
                }

                function Pi(e, t, n, r, l) {
                    return pa(), ma(l), t.flags |= 256, wi(e, t, n, r), t.child
                }
                var Ri, Di, zi, Oi, Ai = {
                    dehydrated: null,
                    treeContext: null,
                    retryLane: 0
                };

                function Mi(e) {
                    return {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null
                    }
                }

                function Ii(e, t, n) {
                    var r, l = t.pendingProps,
                        o = Ja.current,
                        i = !1,
                        u = !!(128 & t.flags);
                    if ((r = u) || (r = (null === e || null !== e.memoizedState) && !!(2 & o)), r ? (i = !0, t.flags &= -129) : null !== e && null === e.memoizedState || (o |= 1), Cl(Ja, 1 & o), null === e) return sa(t), null !== (e = t.memoizedState) && null !== (e = e.dehydrated) ? (1 & t.mode ? "$!" === e.data ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (u = l.children, e = l.fallback, i ? (l = t.mode, i = t.child, u = {
                        mode: "hidden",
                        children: u
                    }, 1 & l || null === i ? i = Ms(u, l, 0, null) : (i.childLanes = 0, i.pendingProps = u), e = As(e, l, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Mi(n), t.memoizedState = Ai, e) : Fi(t, u));
                    if (null !== (o = e.memoizedState) && null !== (r = o.dehydrated)) return function(e, t, n, r, l, o, i) {
                        if (n) return 256 & t.flags ? (t.flags &= -257, Ui(e, t, i, r = ci(Error(a(422))))) : null !== t.memoizedState ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = Ms({
                            mode: "visible",
                            children: r.children
                        }, l, 0, null), (o = As(o, l, i, null)).flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, 1 & t.mode && wa(t, e.child, null, i), t.child.memoizedState = Mi(i), t.memoizedState = Ai, o);
                        if (!(1 & t.mode)) return Ui(e, t, i, null);
                        if ("$!" === l.data) {
                            if (r = l.nextSibling && l.nextSibling.dataset) var u = r.dgst;
                            return r = u, Ui(e, t, i, r = ci(o = Error(a(419)), r, void 0))
                        }
                        if (u = !!(i & e.childLanes), bi || u) {
                            if (null !== (r = Lu)) {
                                switch (i & -i) {
                                    case 4:
                                        l = 2;
                                        break;
                                    case 16:
                                        l = 8;
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
                                        l = 32;
                                        break;
                                    case 536870912:
                                        l = 268435456;
                                        break;
                                    default:
                                        l = 0
                                }
                                0 !== (l = l & (r.suspendedLanes | i) ? 0 : l) && l !== o.retryLane && (o.retryLane = l, Oa(e, l), ns(r, e, l, -1))
                            }
                            return hs(), Ui(e, t, i, r = ci(Error(a(421))))
                        }
                        return "$?" === l.data ? (t.flags |= 128, t.child = e.child, t = Ts.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, ra = sl(l.nextSibling), na = t, la = !0, aa = null, null !== e && (ql[Yl++] = Kl, ql[Yl++] = Xl, ql[Yl++] = Gl, Kl = e.id, Xl = e.overflow, Gl = t), t = Fi(t, r.children), t.flags |= 4096, t)
                    }(e, t, u, l, r, o, n);
                    if (i) {
                        i = l.fallback, u = t.mode, r = (o = e.child).sibling;
                        var s = {
                            mode: "hidden",
                            children: l.children
                        };
                        return 1 & u || t.child === o ? (l = zs(o, s)).subtreeFlags = 14680064 & o.subtreeFlags : ((l = t.child).childLanes = 0, l.pendingProps = s, t.deletions = null), null !== r ? i = zs(r, i) : (i = As(i, u, n, null)).flags |= 2, i.return = t, l.return = t, l.sibling = i, t.child = l, l = i, i = t.child, u = null === (u = e.child.memoizedState) ? Mi(n) : {
                            baseLanes: u.baseLanes | n,
                            cachePool: null,
                            transitions: u.transitions
                        }, i.memoizedState = u, i.childLanes = e.childLanes & ~n, t.memoizedState = Ai, l
                    }
                    return e = (i = e.child).sibling, l = zs(i, {
                        mode: "visible",
                        children: l.children
                    }), !(1 & t.mode) && (l.lanes = n), l.return = t, l.sibling = null, null !== e && (null === (n = t.deletions) ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = l, t.memoizedState = null, l
                }

                function Fi(e, t) {
                    return (t = Ms({
                        mode: "visible",
                        children: t
                    }, e.mode, 0, null)).return = e, e.child = t
                }

                function Ui(e, t, n, r) {
                    return null !== r && ma(r), wa(t, e.child, null, n), (e = Fi(t, t.pendingProps.children)).flags |= 2, t.memoizedState = null, e
                }

                function ji(e, t, n) {
                    e.lanes |= t;
                    var r = e.alternate;
                    null !== r && (r.lanes |= t), Na(e.return, t, n)
                }

                function Hi(e, t, n, r, l) {
                    var a = e.memoizedState;
                    null === a ? e.memoizedState = {
                        isBackwards: t,
                        rendering: null,
                        renderingStartTime: 0,
                        last: r,
                        tail: n,
                        tailMode: l
                    } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = l)
                }

                function Bi(e, t, n) {
                    var r = t.pendingProps,
                        l = r.revealOrder,
                        a = r.tail;
                    if (wi(e, t, r.children, n), 2 & (r = Ja.current)) r = 1 & r | 2, t.flags |= 128;
                    else {
                        if (null !== e && 128 & e.flags) e: for (e = t.child; null !== e;) {
                            if (13 === e.tag) null !== e.memoizedState && ji(e, n, t);
                            else if (19 === e.tag) ji(e, n, t);
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
                    if (Cl(Ja, r), 1 & t.mode) switch (l) {
                        case "forwards":
                            for (n = t.child, l = null; null !== n;) null !== (e = n.alternate) && null === eo(e) && (l = n), n = n.sibling;
                            null === (n = l) ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Hi(t, !1, l, n, a);
                            break;
                        case "backwards":
                            for (n = null, l = t.child, t.child = null; null !== l;) {
                                if (null !== (e = l.alternate) && null === eo(e)) {
                                    t.child = l;
                                    break
                                }
                                e = l.sibling, l.sibling = n, n = l, l = e
                            }
                            Hi(t, !0, n, null, a);
                            break;
                        case "together":
                            Hi(t, !1, null, null, void 0);
                            break;
                        default:
                            t.memoizedState = null
                    } else t.memoizedState = null;
                    return t.child
                }

                function Wi(e, t) {
                    !(1 & t.mode) && null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2)
                }

                function $i(e, t, n) {
                    if (null !== e && (t.dependencies = e.dependencies), Mu |= t.lanes, !(n & t.childLanes)) return null;
                    if (null !== e && t.child !== e.child) throw Error(a(153));
                    if (null !== t.child) {
                        for (n = zs(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = zs(e, e.pendingProps)).return = t;
                        n.sibling = null
                    }
                    return t.child
                }

                function Vi(e, t) {
                    if (!la) switch (e.tailMode) {
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

                function Qi(e) {
                    var t = null !== e.alternate && e.alternate.child === e.child,
                        n = 0,
                        r = 0;
                    if (t)
                        for (var l = e.child; null !== l;) n |= l.lanes | l.childLanes, r |= 14680064 & l.subtreeFlags, r |= 14680064 & l.flags, l.return = e, l = l.sibling;
                    else
                        for (l = e.child; null !== l;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
                    return e.subtreeFlags |= r, e.childLanes = n, t
                }

                function qi(e, t, n) {
                    var r = t.pendingProps;
                    switch (ta(t), t.tag) {
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
                            return Qi(t), null;
                        case 1:
                        case 17:
                            return Dl(t.type) && zl(), Qi(t), null;
                        case 3:
                            return r = t.stateNode, Ka(), _l(Ll), _l(Nl), no(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), null !== e && null !== e.child || (fa(t) ? t.flags |= 4 : null === e || e.memoizedState.isDehydrated && !(256 & t.flags) || (t.flags |= 1024, null !== aa && (os(aa), aa = null))), Di(e, t), Qi(t), null;
                        case 5:
                            Za(t);
                            var l = Ya(qa.current);
                            if (n = t.type, null !== e && null != t.stateNode) zi(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                            else {
                                if (!r) {
                                    if (null === t.stateNode) throw Error(a(166));
                                    return Qi(t), null
                                }
                                if (e = Ya(Va.current), fa(t)) {
                                    r = t.stateNode, n = t.type;
                                    var o = t.memoizedProps;
                                    switch (r[dl] = t, r[pl] = o, e = !!(1 & t.mode), n) {
                                        case "dialog":
                                            Ur("cancel", r), Ur("close", r);
                                            break;
                                        case "iframe":
                                        case "object":
                                        case "embed":
                                            Ur("load", r);
                                            break;
                                        case "video":
                                        case "audio":
                                            for (l = 0; l < Ar.length; l++) Ur(Ar[l], r);
                                            break;
                                        case "source":
                                            Ur("error", r);
                                            break;
                                        case "img":
                                        case "image":
                                        case "link":
                                            Ur("error", r), Ur("load", r);
                                            break;
                                        case "details":
                                            Ur("toggle", r);
                                            break;
                                        case "input":
                                            K(r, o), Ur("invalid", r);
                                            break;
                                        case "select":
                                            r._wrapperState = {
                                                wasMultiple: !!o.multiple
                                            }, Ur("invalid", r);
                                            break;
                                        case "textarea":
                                            le(r, o), Ur("invalid", r)
                                    }
                                    for (var u in ve(n, o), l = null, o)
                                        if (o.hasOwnProperty(u)) {
                                            var s = o[u];
                                            "children" === u ? "string" == typeof s ? r.textContent !== s && (!0 !== o.suppressHydrationWarning && Zr(r.textContent, s, e), l = ["children", s]) : "number" == typeof s && r.textContent !== "" + s && (!0 !== o.suppressHydrationWarning && Zr(r.textContent, s, e), l = ["children", "" + s]) : i.hasOwnProperty(u) && null != s && "onScroll" === u && Ur("scroll", r)
                                        }
                                    switch (n) {
                                        case "input":
                                            Q(r), J(r, o, !0);
                                            break;
                                        case "textarea":
                                            Q(r), oe(r);
                                            break;
                                        case "select":
                                        case "option":
                                            break;
                                        default:
                                            "function" == typeof o.onClick && (r.onclick = Jr)
                                    }
                                    r = l, t.updateQueue = r, null !== r && (t.flags |= 4)
                                } else {
                                    u = 9 === l.nodeType ? l : l.ownerDocument, "http://www.w3.org/1999/xhtml" === e && (e = ie(n)), "http://www.w3.org/1999/xhtml" === e ? "script" === n ? ((e = u.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" == typeof r.is ? e = u.createElement(n, {
                                        is: r.is
                                    }) : (e = u.createElement(n), "select" === n && (u = e, r.multiple ? u.multiple = !0 : r.size && (u.size = r.size))) : e = u.createElementNS(e, n), e[dl] = t, e[pl] = r, Ri(e, t, !1, !1), t.stateNode = e;
                                    e: {
                                        switch (u = be(n, r), n) {
                                            case "dialog":
                                                Ur("cancel", e), Ur("close", e), l = r;
                                                break;
                                            case "iframe":
                                            case "object":
                                            case "embed":
                                                Ur("load", e), l = r;
                                                break;
                                            case "video":
                                            case "audio":
                                                for (l = 0; l < Ar.length; l++) Ur(Ar[l], e);
                                                l = r;
                                                break;
                                            case "source":
                                                Ur("error", e), l = r;
                                                break;
                                            case "img":
                                            case "image":
                                            case "link":
                                                Ur("error", e), Ur("load", e), l = r;
                                                break;
                                            case "details":
                                                Ur("toggle", e), l = r;
                                                break;
                                            case "input":
                                                K(e, r), l = G(e, r), Ur("invalid", e);
                                                break;
                                            case "option":
                                            default:
                                                l = r;
                                                break;
                                            case "select":
                                                e._wrapperState = {
                                                    wasMultiple: !!r.multiple
                                                }, l = I({}, r, {
                                                    value: void 0
                                                }), Ur("invalid", e);
                                                break;
                                            case "textarea":
                                                le(e, r), l = re(e, r), Ur("invalid", e)
                                        }
                                        for (o in ve(n, l), s = l)
                                            if (s.hasOwnProperty(o)) {
                                                var c = s[o];
                                                "style" === o ? ge(e, c) : "dangerouslySetInnerHTML" === o ? null != (c = c ? c.__html : void 0) && fe(e, c) : "children" === o ? "string" == typeof c ? ("textarea" !== n || "" !== c) && de(e, c) : "number" == typeof c && de(e, "" + c) : "suppressContentEditableWarning" !== o && "suppressHydrationWarning" !== o && "autoFocus" !== o && (i.hasOwnProperty(o) ? null != c && "onScroll" === o && Ur("scroll", e) : null != c && b(e, o, c, u))
                                            }
                                        switch (n) {
                                            case "input":
                                                Q(e), J(e, r, !1);
                                                break;
                                            case "textarea":
                                                Q(e), oe(e);
                                                break;
                                            case "option":
                                                null != r.value && e.setAttribute("value", "" + $(r.value));
                                                break;
                                            case "select":
                                                e.multiple = !!r.multiple, null != (o = r.value) ? ne(e, !!r.multiple, o, !1) : null != r.defaultValue && ne(e, !!r.multiple, r.defaultValue, !0);
                                                break;
                                            default:
                                                "function" == typeof l.onClick && (e.onclick = Jr)
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
                            return Qi(t), null;
                        case 6:
                            if (e && null != t.stateNode) Oi(e, t, e.memoizedProps, r);
                            else {
                                if ("string" != typeof r && null === t.stateNode) throw Error(a(166));
                                if (n = Ya(qa.current), Ya(Va.current), fa(t)) {
                                    if (r = t.stateNode, n = t.memoizedProps, r[dl] = t, (o = r.nodeValue !== n) && null !== (e = na)) switch (e.tag) {
                                        case 3:
                                            Zr(r.nodeValue, n, !!(1 & e.mode));
                                            break;
                                        case 5:
                                            !0 !== e.memoizedProps.suppressHydrationWarning && Zr(r.nodeValue, n, !!(1 & e.mode))
                                    }
                                    o && (t.flags |= 4)
                                } else(r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[dl] = t, t.stateNode = r
                            }
                            return Qi(t), null;
                        case 13:
                            if (_l(Ja), r = t.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
                                if (la && null !== ra && 1 & t.mode && !(128 & t.flags)) da(), pa(), t.flags |= 98560, o = !1;
                                else if (o = fa(t), null !== r && null !== r.dehydrated) {
                                    if (null === e) {
                                        if (!o) throw Error(a(318));
                                        if (!(o = null !== (o = t.memoizedState) ? o.dehydrated : null)) throw Error(a(317));
                                        o[dl] = t
                                    } else pa(), !(128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                                    Qi(t), o = !1
                                } else null !== aa && (os(aa), aa = null), o = !0;
                                if (!o) return 65536 & t.flags ? t : null
                            }
                            return 128 & t.flags ? (t.lanes = n, t) : ((r = null !== r) !== (null !== e && null !== e.memoizedState) && r && (t.child.flags |= 8192, 1 & t.mode && (null === e || 1 & Ja.current ? 0 === Ou && (Ou = 3) : hs())), null !== t.updateQueue && (t.flags |= 4), Qi(t), null);
                        case 4:
                            return Ka(), Di(e, t), null === e && Br(t.stateNode.containerInfo), Qi(t), null;
                        case 10:
                            return Ta(t.type._context), Qi(t), null;
                        case 19:
                            if (_l(Ja), null === (o = t.memoizedState)) return Qi(t), null;
                            if (r = !!(128 & t.flags), null === (u = o.rendering))
                                if (r) Vi(o, !1);
                                else {
                                    if (0 !== Ou || null !== e && 128 & e.flags)
                                        for (e = t.child; null !== e;) {
                                            if (null !== (u = eo(e))) {
                                                for (t.flags |= 128, Vi(o, !1), null !== (r = u.updateQueue) && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; null !== n;) e = r, (o = n).flags &= 14680066, null === (u = o.alternate) ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = u.childLanes, o.lanes = u.lanes, o.child = u.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = u.memoizedProps, o.memoizedState = u.memoizedState, o.updateQueue = u.updateQueue, o.type = u.type, e = u.dependencies, o.dependencies = null === e ? null : {
                                                    lanes: e.lanes,
                                                    firstContext: e.firstContext
                                                }), n = n.sibling;
                                                return Cl(Ja, 1 & Ja.current | 2), t.child
                                            }
                                            e = e.sibling
                                        }
                                    null !== o.tail && Xe() > Bu && (t.flags |= 128, r = !0, Vi(o, !1), t.lanes = 4194304)
                                }
                            else {
                                if (!r)
                                    if (null !== (e = eo(u))) {
                                        if (t.flags |= 128, r = !0, null !== (n = e.updateQueue) && (t.updateQueue = n, t.flags |= 4), Vi(o, !0), null === o.tail && "hidden" === o.tailMode && !u.alternate && !la) return Qi(t), null
                                    } else 2 * Xe() - o.renderingStartTime > Bu && 1073741824 !== n && (t.flags |= 128, r = !0, Vi(o, !1), t.lanes = 4194304);
                                o.isBackwards ? (u.sibling = t.child, t.child = u) : (null !== (n = o.last) ? n.sibling = u : t.child = u, o.last = u)
                            }
                            return null !== o.tail ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = Xe(), t.sibling = null, n = Ja.current, Cl(Ja, r ? 1 & n | 2 : 1 & n), t) : (Qi(t), null);
                        case 22:
                        case 23:
                            return fs(), r = null !== t.memoizedState, null !== e && null !== e.memoizedState !== r && (t.flags |= 8192), r && 1 & t.mode ? !!(1073741824 & Du) && (Qi(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : Qi(t), null;
                        case 24:
                        case 25:
                            return null
                    }
                    throw Error(a(156, t.tag))
                }

                function Yi(e, t) {
                    switch (ta(t), t.tag) {
                        case 1:
                            return Dl(t.type) && zl(), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                        case 3:
                            return Ka(), _l(Ll), _l(Nl), no(), 65536 & (e = t.flags) && !(128 & e) ? (t.flags = -65537 & e | 128, t) : null;
                        case 5:
                            return Za(t), null;
                        case 13:
                            if (_l(Ja), null !== (e = t.memoizedState) && null !== e.dehydrated) {
                                if (null === t.alternate) throw Error(a(340));
                                pa()
                            }
                            return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                        case 19:
                            return _l(Ja), null;
                        case 4:
                            return Ka(), null;
                        case 10:
                            return Ta(t.type._context), null;
                        case 22:
                        case 23:
                            return fs(), null;
                        default:
                            return null
                    }
                }
                Ri = function(e, t) {
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
                }, Di = function() {}, zi = function(e, t, n, r) {
                    var l = e.memoizedProps;
                    if (l !== r) {
                        e = t.stateNode, Ya(Va.current);
                        var a, o = null;
                        switch (n) {
                            case "input":
                                l = G(e, l), r = G(e, r), o = [];
                                break;
                            case "select":
                                l = I({}, l, {
                                    value: void 0
                                }), r = I({}, r, {
                                    value: void 0
                                }), o = [];
                                break;
                            case "textarea":
                                l = re(e, l), r = re(e, r), o = [];
                                break;
                            default:
                                "function" != typeof l.onClick && "function" == typeof r.onClick && (e.onclick = Jr)
                        }
                        for (c in ve(n, r), n = null, l)
                            if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && null != l[c])
                                if ("style" === c) {
                                    var u = l[c];
                                    for (a in u) u.hasOwnProperty(a) && (n || (n = {}), n[a] = "")
                                } else "dangerouslySetInnerHTML" !== c && "children" !== c && "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && "autoFocus" !== c && (i.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
                        for (c in r) {
                            var s = r[c];
                            if (u = null != l ? l[c] : void 0, r.hasOwnProperty(c) && s !== u && (null != s || null != u))
                                if ("style" === c)
                                    if (u) {
                                        for (a in u) !u.hasOwnProperty(a) || s && s.hasOwnProperty(a) || (n || (n = {}), n[a] = "");
                                        for (a in s) s.hasOwnProperty(a) && u[a] !== s[a] && (n || (n = {}), n[a] = s[a])
                                    } else n || (o || (o = []), o.push(c, n)), n = s;
                            else "dangerouslySetInnerHTML" === c ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, null != s && u !== s && (o = o || []).push(c, s)) : "children" === c ? "string" != typeof s && "number" != typeof s || (o = o || []).push(c, "" + s) : "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && (i.hasOwnProperty(c) ? (null != s && "onScroll" === c && Ur("scroll", e), o || u === s || (o = [])) : (o = o || []).push(c, s))
                        }
                        n && (o = o || []).push("style", n);
                        var c = o;
                        (t.updateQueue = c) && (t.flags |= 4)
                    }
                }, Oi = function(e, t, n, r) {
                    n !== r && (t.flags |= 4)
                };
                var Gi = !1,
                    Ki = !1,
                    Xi = "function" == typeof WeakSet ? WeakSet : Set,
                    Zi = null;

                function Ji(e, t) {
                    var n = e.ref;
                    if (null !== n)
                        if ("function" == typeof n) try {
                            n(null)
                        } catch (n) {
                            xs(e, t, n)
                        } else n.current = null
                }

                function eu(e, t, n) {
                    try {
                        n()
                    } catch (n) {
                        xs(e, t, n)
                    }
                }
                var tu = !1;

                function nu(e, t, n) {
                    var r = t.updateQueue;
                    if (null !== (r = null !== r ? r.lastEffect : null)) {
                        var l = r = r.next;
                        do {
                            if ((l.tag & e) === e) {
                                var a = l.destroy;
                                l.destroy = void 0, void 0 !== a && eu(t, n, a)
                            }
                            l = l.next
                        } while (l !== r)
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

                function lu(e) {
                    var t = e.ref;
                    if (null !== t) {
                        var n = e.stateNode;
                        e.tag, e = n, "function" == typeof t ? t(e) : t.current = e
                    }
                }

                function au(e) {
                    var t = e.alternate;
                    null !== t && (e.alternate = null, au(t)), e.child = null, e.deletions = null, e.sibling = null, 5 === e.tag && (null !== (t = e.stateNode) && (delete t[dl], delete t[pl], delete t[hl], delete t[gl], delete t[yl])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
                }

                function ou(e) {
                    return 5 === e.tag || 3 === e.tag || 4 === e.tag
                }

                function iu(e) {
                    e: for (;;) {
                        for (; null === e.sibling;) {
                            if (null === e.return || ou(e.return)) return null;
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
                    if (5 === r || 6 === r) e = e.stateNode, t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = Jr));
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
                    if (at && "function" == typeof at.onCommitFiberUnmount) try {
                        at.onCommitFiberUnmount(lt, n)
                    } catch (e) {}
                    switch (n.tag) {
                        case 5:
                            Ki || Ji(n, t);
                        case 6:
                            var r = cu,
                                l = fu;
                            cu = null, du(e, t, n), fu = l, null !== (cu = r) && (fu ? (e = cu, n = n.stateNode, 8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n)) : cu.removeChild(n.stateNode));
                            break;
                        case 18:
                            null !== cu && (fu ? (e = cu, n = n.stateNode, 8 === e.nodeType ? ul(e.parentNode, n) : 1 === e.nodeType && ul(e, n), Bt(e)) : ul(cu, n.stateNode));
                            break;
                        case 4:
                            r = cu, l = fu, cu = n.stateNode.containerInfo, fu = !0, du(e, t, n), cu = r, fu = l;
                            break;
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            if (!Ki && (null !== (r = n.updateQueue) && null !== (r = r.lastEffect))) {
                                l = r = r.next;
                                do {
                                    var a = l,
                                        o = a.destroy;
                                    a = a.tag, void 0 !== o && (2 & a || 4 & a) && eu(n, t, o), l = l.next
                                } while (l !== r)
                            }
                            du(e, t, n);
                            break;
                        case 1:
                            if (!Ki && (Ji(n, t), "function" == typeof(r = n.stateNode).componentWillUnmount)) try {
                                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
                            } catch (e) {
                                xs(n, t, e)
                            }
                            du(e, t, n);
                            break;
                        case 21:
                            du(e, t, n);
                            break;
                        case 22:
                            1 & n.mode ? (Ki = (r = Ki) || null !== n.memoizedState, du(e, t, n), Ki = r) : du(e, t, n);
                            break;
                        default:
                            du(e, t, n)
                    }
                }

                function mu(e) {
                    var t = e.updateQueue;
                    if (null !== t) {
                        e.updateQueue = null;
                        var n = e.stateNode;
                        null === n && (n = e.stateNode = new Xi), t.forEach((function(t) {
                            var r = Ns.bind(null, e, t);
                            n.has(t) || (n.add(t), t.then(r, r))
                        }))
                    }
                }

                function hu(e, t) {
                    var n = t.deletions;
                    if (null !== n)
                        for (var r = 0; r < n.length; r++) {
                            var l = n[r];
                            try {
                                var o = e,
                                    i = t,
                                    u = i;
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
                                if (null === cu) throw Error(a(160));
                                pu(o, i, l), cu = null, fu = !1;
                                var s = l.alternate;
                                null !== s && (s.return = null), l.return = null
                            } catch (e) {
                                xs(l, t, e)
                            }
                        }
                    if (12854 & t.subtreeFlags)
                        for (t = t.child; null !== t;) gu(t, e), t = t.sibling
                }

                function gu(e, t) {
                    var n = e.alternate,
                        r = e.flags;
                    switch (e.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            if (hu(t, e), yu(e), 4 & r) {
                                try {
                                    nu(3, e, e.return), ru(3, e)
                                } catch (t) {
                                    xs(e, e.return, t)
                                }
                                try {
                                    nu(5, e, e.return)
                                } catch (t) {
                                    xs(e, e.return, t)
                                }
                            }
                            break;
                        case 1:
                            hu(t, e), yu(e), 512 & r && null !== n && Ji(n, n.return);
                            break;
                        case 5:
                            if (hu(t, e), yu(e), 512 & r && null !== n && Ji(n, n.return), 32 & e.flags) {
                                var l = e.stateNode;
                                try {
                                    de(l, "")
                                } catch (t) {
                                    xs(e, e.return, t)
                                }
                            }
                            if (4 & r && null != (l = e.stateNode)) {
                                var o = e.memoizedProps,
                                    i = null !== n ? n.memoizedProps : o,
                                    u = e.type,
                                    s = e.updateQueue;
                                if (e.updateQueue = null, null !== s) try {
                                    "input" === u && "radio" === o.type && null != o.name && X(l, o), be(u, i);
                                    var c = be(u, o);
                                    for (i = 0; i < s.length; i += 2) {
                                        var f = s[i],
                                            d = s[i + 1];
                                        "style" === f ? ge(l, d) : "dangerouslySetInnerHTML" === f ? fe(l, d) : "children" === f ? de(l, d) : b(l, f, d, c)
                                    }
                                    switch (u) {
                                        case "input":
                                            Z(l, o);
                                            break;
                                        case "textarea":
                                            ae(l, o);
                                            break;
                                        case "select":
                                            var p = l._wrapperState.wasMultiple;
                                            l._wrapperState.wasMultiple = !!o.multiple;
                                            var m = o.value;
                                            null != m ? ne(l, !!o.multiple, m, !1) : p !== !!o.multiple && (null != o.defaultValue ? ne(l, !!o.multiple, o.defaultValue, !0) : ne(l, !!o.multiple, o.multiple ? [] : "", !1))
                                    }
                                    l[pl] = o
                                } catch (t) {
                                    xs(e, e.return, t)
                                }
                            }
                            break;
                        case 6:
                            if (hu(t, e), yu(e), 4 & r) {
                                if (null === e.stateNode) throw Error(a(162));
                                l = e.stateNode, o = e.memoizedProps;
                                try {
                                    l.nodeValue = o
                                } catch (t) {
                                    xs(e, e.return, t)
                                }
                            }
                            break;
                        case 3:
                            if (hu(t, e), yu(e), 4 & r && null !== n && n.memoizedState.isDehydrated) try {
                                Bt(t.containerInfo)
                            } catch (t) {
                                xs(e, e.return, t)
                            }
                            break;
                        case 4:
                        default:
                            hu(t, e), yu(e);
                            break;
                        case 13:
                            hu(t, e), yu(e), 8192 & (l = e.child).flags && (o = null !== l.memoizedState, l.stateNode.isHidden = o, !o || null !== l.alternate && null !== l.alternate.memoizedState || (Hu = Xe())), 4 & r && mu(e);
                            break;
                        case 22:
                            if (f = null !== n && null !== n.memoizedState, 1 & e.mode ? (Ki = (c = Ki) || f, hu(t, e), Ki = c) : hu(t, e), yu(e), 8192 & r) {
                                if (c = null !== e.memoizedState, (e.stateNode.isHidden = c) && !f && 1 & e.mode)
                                    for (Zi = e, f = e.child; null !== f;) {
                                        for (d = Zi = f; null !== Zi;) {
                                            switch (m = (p = Zi).child, p.tag) {
                                                case 0:
                                                case 11:
                                                case 14:
                                                case 15:
                                                    nu(4, p, p.return);
                                                    break;
                                                case 1:
                                                    Ji(p, p.return);
                                                    var h = p.stateNode;
                                                    if ("function" == typeof h.componentWillUnmount) {
                                                        r = p, n = p.return;
                                                        try {
                                                            t = r, h.props = t.memoizedProps, h.state = t.memoizedState, h.componentWillUnmount()
                                                        } catch (e) {
                                                            xs(r, n, e)
                                                        }
                                                    }
                                                    break;
                                                case 5:
                                                    Ji(p, p.return);
                                                    break;
                                                case 22:
                                                    if (null !== p.memoizedState) {
                                                        ku(d);
                                                        continue
                                                    }
                                            }
                                            null !== m ? (m.return = p, Zi = m) : ku(d)
                                        }
                                        f = f.sibling
                                    }
                                e: for (f = null, d = e;;) {
                                    if (5 === d.tag) {
                                        if (null === f) {
                                            f = d;
                                            try {
                                                l = d.stateNode, c ? "function" == typeof(o = l.style).setProperty ? o.setProperty("display", "none", "important") : o.display = "none" : (u = d.stateNode, i = null != (s = d.memoizedProps.style) && s.hasOwnProperty("display") ? s.display : null, u.style.display = he("display", i))
                                            } catch (t) {
                                                xs(e, e.return, t)
                                            }
                                        }
                                    } else if (6 === d.tag) {
                                        if (null === f) try {
                                            d.stateNode.nodeValue = c ? "" : d.memoizedProps
                                        } catch (t) {
                                            xs(e, e.return, t)
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
                            hu(t, e), yu(e), 4 & r && mu(e);
                        case 21:
                    }
                }

                function yu(e) {
                    var t = e.flags;
                    if (2 & t) {
                        try {
                            e: {
                                for (var n = e.return; null !== n;) {
                                    if (ou(n)) {
                                        var r = n;
                                        break e
                                    }
                                    n = n.return
                                }
                                throw Error(a(160))
                            }
                            switch (r.tag) {
                                case 5:
                                    var l = r.stateNode;
                                    32 & r.flags && (de(l, ""), r.flags &= -33), su(e, iu(e), l);
                                    break;
                                case 3:
                                case 4:
                                    var o = r.stateNode.containerInfo;
                                    uu(e, iu(e), o);
                                    break;
                                default:
                                    throw Error(a(161))
                            }
                        }
                        catch (t) {
                            xs(e, e.return, t)
                        }
                        e.flags &= -3
                    }
                    4096 & t && (e.flags &= -4097)
                }

                function vu(e, t, n) {
                    Zi = e, bu(e, t, n)
                }

                function bu(e, t, n) {
                    for (var r = !!(1 & e.mode); null !== Zi;) {
                        var l = Zi,
                            a = l.child;
                        if (22 === l.tag && r) {
                            var o = null !== l.memoizedState || Gi;
                            if (!o) {
                                var i = l.alternate,
                                    u = null !== i && null !== i.memoizedState || Ki;
                                i = Gi;
                                var s = Ki;
                                if (Gi = o, (Ki = u) && !s)
                                    for (Zi = l; null !== Zi;) u = (o = Zi).child, 22 === o.tag && null !== o.memoizedState ? Su(l) : null !== u ? (u.return = o, Zi = u) : Su(l);
                                for (; null !== a;) Zi = a, bu(a, t, n), a = a.sibling;
                                Zi = l, Gi = i, Ki = s
                            }
                            wu(e)
                        } else 8772 & l.subtreeFlags && null !== a ? (a.return = l, Zi = a) : wu(e)
                    }
                }

                function wu(e) {
                    for (; null !== Zi;) {
                        var t = Zi;
                        if (8772 & t.flags) {
                            var n = t.alternate;
                            try {
                                if (8772 & t.flags) switch (t.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Ki || ru(5, t);
                                        break;
                                    case 1:
                                        var r = t.stateNode;
                                        if (4 & t.flags && !Ki)
                                            if (null === n) r.componentDidMount();
                                            else {
                                                var l = t.elementType === t.type ? n.memoizedProps : ni(t.type, n.memoizedProps);
                                                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                                            }
                                        var o = t.updateQueue;
                                        null !== o && Wa(t, o, r);
                                        break;
                                    case 3:
                                        var i = t.updateQueue;
                                        if (null !== i) {
                                            if (n = null, null !== t.child) switch (t.child.tag) {
                                                case 5:
                                                case 1:
                                                    n = t.child.stateNode
                                            }
                                            Wa(t, i, n)
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
                                                    null !== d && Bt(d)
                                                }
                                            }
                                        }
                                        break;
                                    default:
                                        throw Error(a(163))
                                }
                                Ki || 512 & t.flags && lu(t)
                            } catch (e) {
                                xs(t, t.return, e)
                            }
                        }
                        if (t === e) {
                            Zi = null;
                            break
                        }
                        if (null !== (n = t.sibling)) {
                            n.return = t.return, Zi = n;
                            break
                        }
                        Zi = t.return
                    }
                }

                function ku(e) {
                    for (; null !== Zi;) {
                        var t = Zi;
                        if (t === e) {
                            Zi = null;
                            break
                        }
                        var n = t.sibling;
                        if (null !== n) {
                            n.return = t.return, Zi = n;
                            break
                        }
                        Zi = t.return
                    }
                }

                function Su(e) {
                    for (; null !== Zi;) {
                        var t = Zi;
                        try {
                            switch (t.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    var n = t.return;
                                    try {
                                        ru(4, t)
                                    } catch (e) {
                                        xs(t, n, e)
                                    }
                                    break;
                                case 1:
                                    var r = t.stateNode;
                                    if ("function" == typeof r.componentDidMount) {
                                        var l = t.return;
                                        try {
                                            r.componentDidMount()
                                        } catch (e) {
                                            xs(t, l, e)
                                        }
                                    }
                                    var a = t.return;
                                    try {
                                        lu(t)
                                    } catch (e) {
                                        xs(t, a, e)
                                    }
                                    break;
                                case 5:
                                    var o = t.return;
                                    try {
                                        lu(t)
                                    } catch (e) {
                                        xs(t, o, e)
                                    }
                            }
                        } catch (e) {
                            xs(t, t.return, e)
                        }
                        if (t === e) {
                            Zi = null;
                            break
                        }
                        var i = t.sibling;
                        if (null !== i) {
                            i.return = t.return, Zi = i;
                            break
                        }
                        Zi = t.return
                    }
                }
                var Eu, xu = Math.ceil,
                    _u = w.ReactCurrentDispatcher,
                    Cu = w.ReactCurrentOwner,
                    Tu = w.ReactCurrentBatchConfig,
                    Nu = 0,
                    Lu = null,
                    Pu = null,
                    Ru = 0,
                    Du = 0,
                    zu = xl(0),
                    Ou = 0,
                    Au = null,
                    Mu = 0,
                    Iu = 0,
                    Fu = 0,
                    Uu = null,
                    ju = null,
                    Hu = 0,
                    Bu = 1 / 0,
                    Wu = null,
                    $u = !1,
                    Vu = null,
                    Qu = null,
                    qu = !1,
                    Yu = null,
                    Gu = 0,
                    Ku = 0,
                    Xu = null,
                    Zu = -1,
                    Ju = 0;

                function es() {
                    return 6 & Nu ? Xe() : -1 !== Zu ? Zu : Zu = Xe()
                }

                function ts(e) {
                    return 1 & e.mode ? 2 & Nu && 0 !== Ru ? Ru & -Ru : null !== ha.transition ? (0 === Ju && (Ju = ht()), Ju) : 0 !== (e = bt) ? e : e = void 0 === (e = window.event) ? 16 : Kt(e.type) : 1
                }

                function ns(e, t, n, r) {
                    if (50 < Ku) throw Ku = 0, Xu = null, Error(a(185));
                    yt(e, n, r), 2 & Nu && e === Lu || (e === Lu && (!(2 & Nu) && (Iu |= n), 4 === Ou && is(e, Ru)), rs(e, r), 1 === n && 0 === Nu && !(1 & t.mode) && (Bu = Xe() + 500, Ul && Bl()))
                }

                function rs(e, t) {
                    var n = e.callbackNode;
                    ! function(e, t) {
                        for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, a = e.pendingLanes; 0 < a;) {
                            var o = 31 - ot(a),
                                i = 1 << o,
                                u = l[o]; - 1 === u ? i & n && !(i & r) || (l[o] = pt(i, t)) : u <= t && (e.expiredLanes |= i), a &= ~i
                        }
                    }(e, t);
                    var r = dt(e, e === Lu ? Ru : 0);
                    if (0 === r) null !== n && Ye(n), e.callbackNode = null, e.callbackPriority = 0;
                    else if (t = r & -r, e.callbackPriority !== t) {
                        if (null != n && Ye(n), 1 === t) 0 === e.tag ? function(e) {
                            Ul = !0, Hl(e)
                        }(us.bind(null, e)) : Hl(us.bind(null, e)), ol((function() {
                            !(6 & Nu) && Bl()
                        })), n = null;
                        else {
                            switch (wt(r)) {
                                case 1:
                                    n = Je;
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
                            n = Ls(n, ls.bind(null, e))
                        }
                        e.callbackPriority = t, e.callbackNode = n
                    }
                }

                function ls(e, t) {
                    if (Zu = -1, Ju = 0, 6 & Nu) throw Error(a(327));
                    var n = e.callbackNode;
                    if (Ss() && e.callbackNode !== n) return null;
                    var r = dt(e, e === Lu ? Ru : 0);
                    if (0 === r) return null;
                    if (30 & r || r & e.expiredLanes || t) t = gs(e, r);
                    else {
                        t = r;
                        var l = Nu;
                        Nu |= 2;
                        var o = ms();
                        for (Lu === e && Ru === t || (Wu = null, Bu = Xe() + 500, ds(e, t));;) try {
                            vs();
                            break
                        } catch (t) {
                            ps(e, t)
                        }
                        Ca(), _u.current = o, Nu = l, null !== Pu ? t = 0 : (Lu = null, Ru = 0, t = Ou)
                    }
                    if (0 !== t) {
                        if (2 === t && (0 !== (l = mt(e)) && (r = l, t = as(e, l))), 1 === t) throw n = Au, ds(e, 0), is(e, r), rs(e, Xe()), n;
                        if (6 === t) is(e, r);
                        else {
                            if (l = e.current.alternate, !(30 & r || function(e) {
                                    for (var t = e;;) {
                                        if (16384 & t.flags) {
                                            var n = t.updateQueue;
                                            if (null !== n && null !== (n = n.stores))
                                                for (var r = 0; r < n.length; r++) {
                                                    var l = n[r],
                                                        a = l.getSnapshot;
                                                    l = l.value;
                                                    try {
                                                        if (!ir(a(), l)) return !1
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
                                }(l) || (t = gs(e, r), 2 === t && (o = mt(e), 0 !== o && (r = o, t = as(e, o))), 1 !== t))) throw n = Au, ds(e, 0), is(e, r), rs(e, Xe()), n;
                            switch (e.finishedWork = l, e.finishedLanes = r, t) {
                                case 0:
                                case 1:
                                    throw Error(a(345));
                                case 2:
                                case 5:
                                    ks(e, ju, Wu);
                                    break;
                                case 3:
                                    if (is(e, r), (130023424 & r) === r && 10 < (t = Hu + 500 - Xe())) {
                                        if (0 !== dt(e, 0)) break;
                                        if (((l = e.suspendedLanes) & r) !== r) {
                                            es(), e.pingedLanes |= e.suspendedLanes & l;
                                            break
                                        }
                                        e.timeoutHandle = rl(ks.bind(null, e, ju, Wu), t);
                                        break
                                    }
                                    ks(e, ju, Wu);
                                    break;
                                case 4:
                                    if (is(e, r), (4194240 & r) === r) break;
                                    for (t = e.eventTimes, l = -1; 0 < r;) {
                                        var i = 31 - ot(r);
                                        o = 1 << i, (i = t[i]) > l && (l = i), r &= ~o
                                    }
                                    if (r = l, 10 < (r = (120 > (r = Xe() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * xu(r / 1960)) - r)) {
                                        e.timeoutHandle = rl(ks.bind(null, e, ju, Wu), r);
                                        break
                                    }
                                    ks(e, ju, Wu);
                                    break;
                                default:
                                    throw Error(a(329))
                            }
                        }
                    }
                    return rs(e, Xe()), e.callbackNode === n ? ls.bind(null, e) : null
                }

                function as(e, t) {
                    var n = Uu;
                    return e.current.memoizedState.isDehydrated && (ds(e, t).flags |= 256), 2 !== (e = gs(e, t)) && (t = ju, ju = n, null !== t && os(t)), e
                }

                function os(e) {
                    null === ju ? ju = e : ju.push.apply(ju, e)
                }

                function is(e, t) {
                    for (t &= ~Fu, t &= ~Iu, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
                        var n = 31 - ot(t),
                            r = 1 << n;
                        e[n] = -1, t &= ~r
                    }
                }

                function us(e) {
                    if (6 & Nu) throw Error(a(327));
                    Ss();
                    var t = dt(e, 0);
                    if (!(1 & t)) return rs(e, Xe()), null;
                    var n = gs(e, t);
                    if (0 !== e.tag && 2 === n) {
                        var r = mt(e);
                        0 !== r && (t = r, n = as(e, r))
                    }
                    if (1 === n) throw n = Au, ds(e, 0), is(e, t), rs(e, Xe()), n;
                    if (6 === n) throw Error(a(345));
                    return e.finishedWork = e.current.alternate, e.finishedLanes = t, ks(e, ju, Wu), rs(e, Xe()), null
                }

                function ss(e, t) {
                    var n = Nu;
                    Nu |= 1;
                    try {
                        return e(t)
                    } finally {
                        0 === (Nu = n) && (Bu = Xe() + 500, Ul && Bl())
                    }
                }

                function cs(e) {
                    null !== Yu && 0 === Yu.tag && !(6 & Nu) && Ss();
                    var t = Nu;
                    Nu |= 1;
                    var n = Tu.transition,
                        r = bt;
                    try {
                        if (Tu.transition = null, bt = 1, e) return e()
                    } finally {
                        bt = r, Tu.transition = n, !(6 & (Nu = t)) && Bl()
                    }
                }

                function fs() {
                    Du = zu.current, _l(zu)
                }

                function ds(e, t) {
                    e.finishedWork = null, e.finishedLanes = 0;
                    var n = e.timeoutHandle;
                    if (-1 !== n && (e.timeoutHandle = -1, ll(n)), null !== Pu)
                        for (n = Pu.return; null !== n;) {
                            var r = n;
                            switch (ta(r), r.tag) {
                                case 1:
                                    null != (r = r.type.childContextTypes) && zl();
                                    break;
                                case 3:
                                    Ka(), _l(Ll), _l(Nl), no();
                                    break;
                                case 5:
                                    Za(r);
                                    break;
                                case 4:
                                    Ka();
                                    break;
                                case 13:
                                case 19:
                                    _l(Ja);
                                    break;
                                case 10:
                                    Ta(r.type._context);
                                    break;
                                case 22:
                                case 23:
                                    fs()
                            }
                            n = n.return
                        }
                    if (Lu = e, Pu = e = zs(e.current, null), Ru = Du = t, Ou = 0, Au = null, Fu = Iu = Mu = 0, ju = Uu = null, null !== Ra) {
                        for (t = 0; t < Ra.length; t++)
                            if (null !== (r = (n = Ra[t]).interleaved)) {
                                n.interleaved = null;
                                var l = r.next,
                                    a = n.pending;
                                if (null !== a) {
                                    var o = a.next;
                                    a.next = l, r.next = o
                                }
                                n.pending = r
                            }
                        Ra = null
                    }
                    return e
                }

                function ps(e, t) {
                    for (;;) {
                        var n = Pu;
                        try {
                            if (Ca(), ro.current = Zo, so) {
                                for (var r = oo.memoizedState; null !== r;) {
                                    var l = r.queue;
                                    null !== l && (l.pending = null), r = r.next
                                }
                                so = !1
                            }
                            if (ao = 0, uo = io = oo = null, co = !1, fo = 0, Cu.current = null, null === n || null === n.return) {
                                Ou = 1, Au = t, Pu = null;
                                break
                            }
                            e: {
                                var o = e,
                                    i = n.return,
                                    u = n,
                                    s = t;
                                if (t = Ru, u.flags |= 32768, null !== s && "object" == typeof s && "function" == typeof s.then) {
                                    var c = s,
                                        f = u,
                                        d = f.tag;
                                    if (!(1 & f.mode || 0 !== d && 11 !== d && 15 !== d)) {
                                        var p = f.alternate;
                                        p ? (f.updateQueue = p.updateQueue, f.memoizedState = p.memoizedState, f.lanes = p.lanes) : (f.updateQueue = null, f.memoizedState = null)
                                    }
                                    var m = gi(i);
                                    if (null !== m) {
                                        m.flags &= -257, yi(m, i, u, 0, t), 1 & m.mode && hi(o, c, t), s = c;
                                        var h = (t = m).updateQueue;
                                        if (null === h) {
                                            var g = new Set;
                                            g.add(s), t.updateQueue = g
                                        } else h.add(s);
                                        break e
                                    }
                                    if (!(1 & t)) {
                                        hi(o, c, t), hs();
                                        break e
                                    }
                                    s = Error(a(426))
                                } else if (la && 1 & u.mode) {
                                    var y = gi(i);
                                    if (null !== y) {
                                        !(65536 & y.flags) && (y.flags |= 256), yi(y, i, u, 0, t), ma(si(s, u));
                                        break e
                                    }
                                }
                                o = s = si(s, u),
                                4 !== Ou && (Ou = 2),
                                null === Uu ? Uu = [o] : Uu.push(o),
                                o = i;do {
                                    switch (o.tag) {
                                        case 3:
                                            o.flags |= 65536, t &= -t, o.lanes |= t, Ha(o, pi(0, s, t));
                                            break e;
                                        case 1:
                                            u = s;
                                            var v = o.type,
                                                b = o.stateNode;
                                            if (!(128 & o.flags || "function" != typeof v.getDerivedStateFromError && (null === b || "function" != typeof b.componentDidCatch || null !== Qu && Qu.has(b)))) {
                                                o.flags |= 65536, t &= -t, o.lanes |= t, Ha(o, mi(o, u, t));
                                                break e
                                            }
                                    }
                                    o = o.return
                                } while (null !== o)
                            }
                            ws(n)
                        } catch (e) {
                            t = e, Pu === n && null !== n && (Pu = n = n.return);
                            continue
                        }
                        break
                    }
                }

                function ms() {
                    var e = _u.current;
                    return _u.current = Zo, null === e ? Zo : e
                }

                function hs() {
                    0 !== Ou && 3 !== Ou && 2 !== Ou || (Ou = 4), null === Lu || !(268435455 & Mu) && !(268435455 & Iu) || is(Lu, Ru)
                }

                function gs(e, t) {
                    var n = Nu;
                    Nu |= 2;
                    var r = ms();
                    for (Lu === e && Ru === t || (Wu = null, ds(e, t));;) try {
                        ys();
                        break
                    } catch (t) {
                        ps(e, t)
                    }
                    if (Ca(), Nu = n, _u.current = r, null !== Pu) throw Error(a(261));
                    return Lu = null, Ru = 0, Ou
                }

                function ys() {
                    for (; null !== Pu;) bs(Pu)
                }

                function vs() {
                    for (; null !== Pu && !Ge();) bs(Pu)
                }

                function bs(e) {
                    var t = Eu(e.alternate, e, Du);
                    e.memoizedProps = e.pendingProps, null === t ? ws(e) : Pu = t, Cu.current = null
                }

                function ws(e) {
                    var t = e;
                    do {
                        var n = t.alternate;
                        if (e = t.return, 32768 & t.flags) {
                            if (null !== (n = Yi(n, t))) return n.flags &= 32767, void(Pu = n);
                            if (null === e) return Ou = 6, void(Pu = null);
                            e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null
                        } else if (null !== (n = qi(n, t, Du))) return void(Pu = n);
                        if (null !== (t = t.sibling)) return void(Pu = t);
                        Pu = t = e
                    } while (null !== t);
                    0 === Ou && (Ou = 5)
                }

                function ks(e, t, n) {
                    var r = bt,
                        l = Tu.transition;
                    try {
                        Tu.transition = null, bt = 1,
                            function(e, t, n, r) {
                                do {
                                    Ss()
                                } while (null !== Yu);
                                if (6 & Nu) throw Error(a(327));
                                n = e.finishedWork;
                                var l = e.finishedLanes;
                                if (null === n) return null;
                                if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(a(177));
                                e.callbackNode = null, e.callbackPriority = 0;
                                var o = n.lanes | n.childLanes;
                                if (function(e, t) {
                                        var n = e.pendingLanes & ~t;
                                        e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
                                        var r = e.eventTimes;
                                        for (e = e.expirationTimes; 0 < n;) {
                                            var l = 31 - ot(n),
                                                a = 1 << l;
                                            t[l] = 0, r[l] = -1, e[l] = -1, n &= ~a
                                        }
                                    }(e, o), e === Lu && (Pu = Lu = null, Ru = 0), !(2064 & n.subtreeFlags) && !(2064 & n.flags) || qu || (qu = !0, Ls(tt, (function() {
                                        return Ss(), null
                                    }))), o = !!(15990 & n.flags), !!(15990 & n.subtreeFlags) || o) {
                                    o = Tu.transition, Tu.transition = null;
                                    var i = bt;
                                    bt = 1;
                                    var u = Nu;
                                    Nu |= 4, Cu.current = null,
                                        function(e, t) {
                                            if (el = $t, pr(e = dr())) {
                                                if ("selectionStart" in e) var n = {
                                                    start: e.selectionStart,
                                                    end: e.selectionEnd
                                                };
                                                else e: {
                                                    var r = (n = (n = e.ownerDocument) && n.defaultView || window).getSelection && n.getSelection();
                                                    if (r && 0 !== r.rangeCount) {
                                                        n = r.anchorNode;
                                                        var l = r.anchorOffset,
                                                            o = r.focusNode;
                                                        r = r.focusOffset;
                                                        try {
                                                            n.nodeType, o.nodeType
                                                        } catch (e) {
                                                            n = null;
                                                            break e
                                                        }
                                                        var i = 0,
                                                            u = -1,
                                                            s = -1,
                                                            c = 0,
                                                            f = 0,
                                                            d = e,
                                                            p = null;
                                                        t: for (;;) {
                                                            for (var m; d !== n || 0 !== l && 3 !== d.nodeType || (u = i + l), d !== o || 0 !== r && 3 !== d.nodeType || (s = i + r), 3 === d.nodeType && (i += d.nodeValue.length), null !== (m = d.firstChild);) p = d, d = m;
                                                            for (;;) {
                                                                if (d === e) break t;
                                                                if (p === n && ++c === l && (u = i), p === o && ++f === r && (s = i), null !== (m = d.nextSibling)) break;
                                                                p = (d = p).parentNode
                                                            }
                                                            d = m
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
                                            for (tl = {
                                                    focusedElem: e,
                                                    selectionRange: n
                                                }, $t = !1, Zi = t; null !== Zi;)
                                                if (e = (t = Zi).child, 1028 & t.subtreeFlags && null !== e) e.return = t, Zi = e;
                                                else
                                                    for (; null !== Zi;) {
                                                        t = Zi;
                                                        try {
                                                            var h = t.alternate;
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
                                                                    if (null !== h) {
                                                                        var g = h.memoizedProps,
                                                                            y = h.memoizedState,
                                                                            v = t.stateNode,
                                                                            b = v.getSnapshotBeforeUpdate(t.elementType === t.type ? g : ni(t.type, g), y);
                                                                        v.__reactInternalSnapshotBeforeUpdate = b
                                                                    }
                                                                    break;
                                                                case 3:
                                                                    var w = t.stateNode.containerInfo;
                                                                    1 === w.nodeType ? w.textContent = "" : 9 === w.nodeType && w.documentElement && w.removeChild(w.documentElement);
                                                                    break;
                                                                default:
                                                                    throw Error(a(163))
                                                            }
                                                        } catch (e) {
                                                            xs(t, t.return, e)
                                                        }
                                                        if (null !== (e = t.sibling)) {
                                                            e.return = t.return, Zi = e;
                                                            break
                                                        }
                                                        Zi = t.return
                                                    }
                                            h = tu, tu = !1
                                        }(e, n), gu(n, e), mr(tl), $t = !!el, tl = el = null, e.current = n, vu(n, e, l), Ke(), Nu = u, bt = i, Tu.transition = o
                                } else e.current = n;
                                if (qu && (qu = !1, Yu = e, Gu = l), o = e.pendingLanes, 0 === o && (Qu = null), function(e) {
                                        if (at && "function" == typeof at.onCommitFiberRoot) try {
                                            at.onCommitFiberRoot(lt, e, void 0, !(128 & ~e.current.flags))
                                        } catch (e) {}
                                    }(n.stateNode), rs(e, Xe()), null !== t)
                                    for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, {
                                        componentStack: l.stack,
                                        digest: l.digest
                                    });
                                if ($u) throw $u = !1, e = Vu, Vu = null, e;
                                !!(1 & Gu) && 0 !== e.tag && Ss(), o = e.pendingLanes, 1 & o ? e === Xu ? Ku++ : (Ku = 0, Xu = e) : Ku = 0, Bl()
                            }(e, t, n, r)
                    } finally {
                        Tu.transition = l, bt = r
                    }
                    return null
                }

                function Ss() {
                    if (null !== Yu) {
                        var e = wt(Gu),
                            t = Tu.transition,
                            n = bt;
                        try {
                            if (Tu.transition = null, bt = 16 > e ? 16 : e, null === Yu) var r = !1;
                            else {
                                if (e = Yu, Yu = null, Gu = 0, 6 & Nu) throw Error(a(331));
                                var l = Nu;
                                for (Nu |= 4, Zi = e.current; null !== Zi;) {
                                    var o = Zi,
                                        i = o.child;
                                    if (16 & Zi.flags) {
                                        var u = o.deletions;
                                        if (null !== u) {
                                            for (var s = 0; s < u.length; s++) {
                                                var c = u[s];
                                                for (Zi = c; null !== Zi;) {
                                                    var f = Zi;
                                                    switch (f.tag) {
                                                        case 0:
                                                        case 11:
                                                        case 15:
                                                            nu(8, f, o)
                                                    }
                                                    var d = f.child;
                                                    if (null !== d) d.return = f, Zi = d;
                                                    else
                                                        for (; null !== Zi;) {
                                                            var p = (f = Zi).sibling,
                                                                m = f.return;
                                                            if (au(f), f === c) {
                                                                Zi = null;
                                                                break
                                                            }
                                                            if (null !== p) {
                                                                p.return = m, Zi = p;
                                                                break
                                                            }
                                                            Zi = m
                                                        }
                                                }
                                            }
                                            var h = o.alternate;
                                            if (null !== h) {
                                                var g = h.child;
                                                if (null !== g) {
                                                    h.child = null;
                                                    do {
                                                        var y = g.sibling;
                                                        g.sibling = null, g = y
                                                    } while (null !== g)
                                                }
                                            }
                                            Zi = o
                                        }
                                    }
                                    if (2064 & o.subtreeFlags && null !== i) i.return = o, Zi = i;
                                    else e: for (; null !== Zi;) {
                                        if (2048 & (o = Zi).flags) switch (o.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                nu(9, o, o.return)
                                        }
                                        var v = o.sibling;
                                        if (null !== v) {
                                            v.return = o.return, Zi = v;
                                            break e
                                        }
                                        Zi = o.return
                                    }
                                }
                                var b = e.current;
                                for (Zi = b; null !== Zi;) {
                                    var w = (i = Zi).child;
                                    if (2064 & i.subtreeFlags && null !== w) w.return = i, Zi = w;
                                    else e: for (i = b; null !== Zi;) {
                                        if (2048 & (u = Zi).flags) try {
                                            switch (u.tag) {
                                                case 0:
                                                case 11:
                                                case 15:
                                                    ru(9, u)
                                            }
                                        } catch (e) {
                                            xs(u, u.return, e)
                                        }
                                        if (u === i) {
                                            Zi = null;
                                            break e
                                        }
                                        var k = u.sibling;
                                        if (null !== k) {
                                            k.return = u.return, Zi = k;
                                            break e
                                        }
                                        Zi = u.return
                                    }
                                }
                                if (Nu = l, Bl(), at && "function" == typeof at.onPostCommitFiberRoot) try {
                                    at.onPostCommitFiberRoot(lt, e)
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

                function Es(e, t, n) {
                    e = Ua(e, t = pi(0, t = si(n, t), 1), 1), t = es(), null !== e && (yt(e, 1, t), rs(e, t))
                }

                function xs(e, t, n) {
                    if (3 === e.tag) Es(e, e, n);
                    else
                        for (; null !== t;) {
                            if (3 === t.tag) {
                                Es(t, e, n);
                                break
                            }
                            if (1 === t.tag) {
                                var r = t.stateNode;
                                if ("function" == typeof t.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === Qu || !Qu.has(r))) {
                                    t = Ua(t, e = mi(t, e = si(n, e), 1), 1), e = es(), null !== t && (yt(t, 1, e), rs(t, e));
                                    break
                                }
                            }
                            t = t.return
                        }
                }

                function _s(e, t, n) {
                    var r = e.pingCache;
                    null !== r && r.delete(t), t = es(), e.pingedLanes |= e.suspendedLanes & n, Lu === e && (Ru & n) === n && (4 === Ou || 3 === Ou && (130023424 & Ru) === Ru && 500 > Xe() - Hu ? ds(e, 0) : Fu |= n), rs(e, t)
                }

                function Cs(e, t) {
                    0 === t && (1 & e.mode ? (t = ct, !(130023424 & (ct <<= 1)) && (ct = 4194304)) : t = 1);
                    var n = es();
                    null !== (e = Oa(e, t)) && (yt(e, t, n), rs(e, n))
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
                                l = e.memoizedState;
                            null !== l && (n = l.retryLane);
                            break;
                        case 19:
                            r = e.stateNode;
                            break;
                        default:
                            throw Error(a(314))
                    }
                    null !== r && r.delete(t), Cs(e, n)
                }

                function Ls(e, t) {
                    return qe(e, t)
                }

                function Ps(e, t, n, r) {
                    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
                }

                function Rs(e, t, n, r) {
                    return new Ps(e, t, n, r)
                }

                function Ds(e) {
                    return !(!(e = e.prototype) || !e.isReactComponent)
                }

                function zs(e, t) {
                    var n = e.alternate;
                    return null === n ? ((n = Rs(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 14680064 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
                        lanes: t.lanes,
                        firstContext: t.firstContext
                    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
                }

                function Os(e, t, n, r, l, o) {
                    var i = 2;
                    if (r = e, "function" == typeof e) Ds(e) && (i = 1);
                    else if ("string" == typeof e) i = 5;
                    else e: switch (e) {
                        case E:
                            return As(n.children, l, o, t);
                        case x:
                            i = 8, l |= 8;
                            break;
                        case _:
                            return (e = Rs(12, n, t, 2 | l)).elementType = _, e.lanes = o, e;
                        case L:
                            return (e = Rs(13, n, t, l)).elementType = L, e.lanes = o, e;
                        case P:
                            return (e = Rs(19, n, t, l)).elementType = P, e.lanes = o, e;
                        case z:
                            return Ms(n, l, o, t);
                        default:
                            if ("object" == typeof e && null !== e) switch (e.$$typeof) {
                                case C:
                                    i = 10;
                                    break e;
                                case T:
                                    i = 9;
                                    break e;
                                case N:
                                    i = 11;
                                    break e;
                                case R:
                                    i = 14;
                                    break e;
                                case D:
                                    i = 16, r = null;
                                    break e
                            }
                            throw Error(a(130, null == e ? e : typeof e, ""))
                    }
                    return (t = Rs(i, n, t, l)).elementType = e, t.type = r, t.lanes = o, t
                }

                function As(e, t, n, r) {
                    return (e = Rs(7, e, r, t)).lanes = n, e
                }

                function Ms(e, t, n, r) {
                    return (e = Rs(22, e, r, t)).elementType = z, e.lanes = n, e.stateNode = {
                        isHidden: !1
                    }, e
                }

                function Is(e, t, n) {
                    return (e = Rs(6, e, null, t)).lanes = n, e
                }

                function Fs(e, t, n) {
                    return (t = Rs(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = {
                        containerInfo: e.containerInfo,
                        pendingChildren: null,
                        implementation: e.implementation
                    }, t
                }

                function Us(e, t, n, r, l) {
                    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = gt(0), this.expirationTimes = gt(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = gt(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null
                }

                function js(e, t, n, r, l, a, o, i, u) {
                    return e = new Us(e, t, n, i, u), 1 === t ? (t = 1, !0 === a && (t |= 8)) : t = 0, a = Rs(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = {
                        element: r,
                        isDehydrated: n,
                        cache: null,
                        transitions: null,
                        pendingSuspenseBoundaries: null
                    }, Ma(a), e
                }

                function Hs(e) {
                    if (!e) return Tl;
                    e: {
                        if (Be(e = e._reactInternals) !== e || 1 !== e.tag) throw Error(a(170));
                        var t = e;do {
                            switch (t.tag) {
                                case 3:
                                    t = t.stateNode.context;
                                    break e;
                                case 1:
                                    if (Dl(t.type)) {
                                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                                        break e
                                    }
                            }
                            t = t.return
                        } while (null !== t);
                        throw Error(a(171))
                    }
                    if (1 === e.tag) {
                        var n = e.type;
                        if (Dl(n)) return Al(e, n, t)
                    }
                    return t
                }

                function Bs(e, t, n, r, l, a, o, i, u) {
                    return (e = js(n, r, !0, e, 0, a, 0, i, u)).context = Hs(null), n = e.current, (a = Fa(r = es(), l = ts(n))).callback = null != t ? t : null, Ua(n, a, l), e.current.lanes = l, yt(e, l, r), rs(e, r), e
                }

                function Ws(e, t, n, r) {
                    var l = t.current,
                        a = es(),
                        o = ts(l);
                    return n = Hs(n), null === t.context ? t.context = n : t.pendingContext = n, (t = Fa(a, o)).payload = {
                        element: e
                    }, null !== (r = void 0 === r ? null : r) && (t.callback = r), null !== (e = Ua(l, t, o)) && (ns(e, l, o, a), ja(e, l, o)), o
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

                function Qs(e, t) {
                    Vs(e, t), (e = e.alternate) && Vs(e, t)
                }
                Eu = function(e, t, n) {
                    if (null !== e)
                        if (e.memoizedProps !== t.pendingProps || Ll.current) bi = !0;
                        else {
                            if (!(e.lanes & n || 128 & t.flags)) return bi = !1,
                                function(e, t, n) {
                                    switch (t.tag) {
                                        case 3:
                                            Li(t), pa();
                                            break;
                                        case 5:
                                            Xa(t);
                                            break;
                                        case 1:
                                            Dl(t.type) && Ml(t);
                                            break;
                                        case 4:
                                            Ga(t, t.stateNode.containerInfo);
                                            break;
                                        case 10:
                                            var r = t.type._context,
                                                l = t.memoizedProps.value;
                                            Cl(Sa, r._currentValue), r._currentValue = l;
                                            break;
                                        case 13:
                                            if (null !== (r = t.memoizedState)) return null !== r.dehydrated ? (Cl(Ja, 1 & Ja.current), t.flags |= 128, null) : n & t.child.childLanes ? Ii(e, t, n) : (Cl(Ja, 1 & Ja.current), null !== (e = $i(e, t, n)) ? e.sibling : null);
                                            Cl(Ja, 1 & Ja.current);
                                            break;
                                        case 19:
                                            if (r = !!(n & t.childLanes), 128 & e.flags) {
                                                if (r) return Bi(e, t, n);
                                                t.flags |= 128
                                            }
                                            if (null !== (l = t.memoizedState) && (l.rendering = null, l.tail = null, l.lastEffect = null), Cl(Ja, Ja.current), r) break;
                                            return null;
                                        case 22:
                                        case 23:
                                            return t.lanes = 0, xi(e, t, n)
                                    }
                                    return $i(e, t, n)
                                }(e, t, n);
                            bi = !!(131072 & e.flags)
                        }
                    else bi = !1, la && 1048576 & t.flags && Jl(t, Ql, t.index);
                    switch (t.lanes = 0, t.tag) {
                        case 2:
                            var r = t.type;
                            Wi(e, t), e = t.pendingProps;
                            var l = Rl(t, Nl.current);
                            La(t, n), l = go(null, t, r, e, l, n);
                            var o = yo();
                            return t.flags |= 1, "object" == typeof l && null !== l && "function" == typeof l.render && void 0 === l.$$typeof ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Dl(r) ? (o = !0, Ml(t)) : o = !1, t.memoizedState = null !== l.state && void 0 !== l.state ? l.state : null, Ma(t), l.updater = li, t.stateNode = l, l._reactInternals = t, ui(t, r, e, n), t = Ni(null, t, r, !0, o, n)) : (t.tag = 0, la && o && ea(t), wi(null, t, l, n), t = t.child), t;
                        case 16:
                            r = t.elementType;
                            e: {
                                switch (Wi(e, t), e = t.pendingProps, r = (l = r._init)(r._payload), t.type = r, l = t.tag = function(e) {
                                    if ("function" == typeof e) return Ds(e) ? 1 : 0;
                                    if (null != e) {
                                        if ((e = e.$$typeof) === N) return 11;
                                        if (e === R) return 14
                                    }
                                    return 2
                                }(r), e = ni(r, e), l) {
                                    case 0:
                                        t = Ci(null, t, r, e, n);
                                        break e;
                                    case 1:
                                        t = Ti(null, t, r, e, n);
                                        break e;
                                    case 11:
                                        t = ki(null, t, r, e, n);
                                        break e;
                                    case 14:
                                        t = Si(null, t, r, ni(r.type, e), n);
                                        break e
                                }
                                throw Error(a(306, r, ""))
                            }
                            return t;
                        case 0:
                            return r = t.type, l = t.pendingProps, Ci(e, t, r, l = t.elementType === r ? l : ni(r, l), n);
                        case 1:
                            return r = t.type, l = t.pendingProps, Ti(e, t, r, l = t.elementType === r ? l : ni(r, l), n);
                        case 3:
                            e: {
                                if (Li(t), null === e) throw Error(a(387));r = t.pendingProps,
                                l = (o = t.memoizedState).element,
                                Ia(e, t),
                                Ba(t, r, null, n);
                                var i = t.memoizedState;
                                if (r = i.element, o.isDehydrated) {
                                    if (o = {
                                            element: r,
                                            isDehydrated: !1,
                                            cache: i.cache,
                                            pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                                            transitions: i.transitions
                                        }, t.updateQueue.baseState = o, t.memoizedState = o, 256 & t.flags) {
                                        t = Pi(e, t, r, n, l = si(Error(a(423)), t));
                                        break e
                                    }
                                    if (r !== l) {
                                        t = Pi(e, t, r, n, l = si(Error(a(424)), t));
                                        break e
                                    }
                                    for (ra = sl(t.stateNode.containerInfo.firstChild), na = t, la = !0, aa = null, n = ka(t, null, r, n), t.child = n; n;) n.flags = -3 & n.flags | 4096, n = n.sibling
                                } else {
                                    if (pa(), r === l) {
                                        t = $i(e, t, n);
                                        break e
                                    }
                                    wi(e, t, r, n)
                                }
                                t = t.child
                            }
                            return t;
                        case 5:
                            return Xa(t), null === e && sa(t), r = t.type, l = t.pendingProps, o = null !== e ? e.memoizedProps : null, i = l.children, nl(r, l) ? i = null : null !== o && nl(r, o) && (t.flags |= 32), _i(e, t), wi(e, t, i, n), t.child;
                        case 6:
                            return null === e && sa(t), null;
                        case 13:
                            return Ii(e, t, n);
                        case 4:
                            return Ga(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = wa(t, null, r, n) : wi(e, t, r, n), t.child;
                        case 11:
                            return r = t.type, l = t.pendingProps, ki(e, t, r, l = t.elementType === r ? l : ni(r, l), n);
                        case 7:
                            return wi(e, t, t.pendingProps, n), t.child;
                        case 8:
                        case 12:
                            return wi(e, t, t.pendingProps.children, n), t.child;
                        case 10:
                            e: {
                                if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, Cl(Sa, r._currentValue), r._currentValue = i, null !== o)
                                    if (ir(o.value, i)) {
                                        if (o.children === l.children && !Ll.current) {
                                            t = $i(e, t, n);
                                            break e
                                        }
                                    } else
                                        for (null !== (o = t.child) && (o.return = t); null !== o;) {
                                            var u = o.dependencies;
                                            if (null !== u) {
                                                i = o.child;
                                                for (var s = u.firstContext; null !== s;) {
                                                    if (s.context === r) {
                                                        if (1 === o.tag) {
                                                            (s = Fa(-1, n & -n)).tag = 2;
                                                            var c = o.updateQueue;
                                                            if (null !== c) {
                                                                var f = (c = c.shared).pending;
                                                                null === f ? s.next = s : (s.next = f.next, f.next = s), c.pending = s
                                                            }
                                                        }
                                                        o.lanes |= n, null !== (s = o.alternate) && (s.lanes |= n), Na(o.return, n, t), u.lanes |= n;
                                                        break
                                                    }
                                                    s = s.next
                                                }
                                            } else if (10 === o.tag) i = o.type === t.type ? null : o.child;
                                            else if (18 === o.tag) {
                                                if (null === (i = o.return)) throw Error(a(341));
                                                i.lanes |= n, null !== (u = i.alternate) && (u.lanes |= n), Na(i, n, t), i = o.sibling
                                            } else i = o.child;
                                            if (null !== i) i.return = o;
                                            else
                                                for (i = o; null !== i;) {
                                                    if (i === t) {
                                                        i = null;
                                                        break
                                                    }
                                                    if (null !== (o = i.sibling)) {
                                                        o.return = i.return, i = o;
                                                        break
                                                    }
                                                    i = i.return
                                                }
                                            o = i
                                        }
                                wi(e, t, l.children, n),
                                t = t.child
                            }
                            return t;
                        case 9:
                            return l = t.type, r = t.pendingProps.children, La(t, n), r = r(l = Pa(l)), t.flags |= 1, wi(e, t, r, n), t.child;
                        case 14:
                            return l = ni(r = t.type, t.pendingProps), Si(e, t, r, l = ni(r.type, l), n);
                        case 15:
                            return Ei(e, t, t.type, t.pendingProps, n);
                        case 17:
                            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ni(r, l), Wi(e, t), t.tag = 1, Dl(r) ? (e = !0, Ml(t)) : e = !1, La(t, n), oi(t, r, l), ui(t, r, l, n), Ni(null, t, r, !0, e, n);
                        case 19:
                            return Bi(e, t, n);
                        case 22:
                            return xi(e, t, n)
                    }
                    throw Error(a(156, t.tag))
                };
                var qs = "function" == typeof reportError ? reportError : function(e) {
                    console.error(e)
                };

                function Ys(e) {
                    this._internalRoot = e
                }

                function Gs(e) {
                    this._internalRoot = e
                }

                function Ks(e) {
                    return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
                }

                function Xs(e) {
                    return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
                }

                function Zs() {}

                function Js(e, t, n, r, l) {
                    var a = n._reactRootContainer;
                    if (a) {
                        var o = a;
                        if ("function" == typeof l) {
                            var i = l;
                            l = function() {
                                var e = $s(o);
                                i.call(e)
                            }
                        }
                        Ws(t, o, e, l)
                    } else o = function(e, t, n, r, l) {
                        if (l) {
                            if ("function" == typeof r) {
                                var a = r;
                                r = function() {
                                    var e = $s(o);
                                    a.call(e)
                                }
                            }
                            var o = Bs(t, r, e, 0, null, !1, 0, "", Zs);
                            return e._reactRootContainer = o, e[ml] = o.current, Br(8 === e.nodeType ? e.parentNode : e), cs(), o
                        }
                        for (; l = e.lastChild;) e.removeChild(l);
                        if ("function" == typeof r) {
                            var i = r;
                            r = function() {
                                var e = $s(u);
                                i.call(e)
                            }
                        }
                        var u = js(e, 0, !1, null, 0, !1, 0, "", Zs);
                        return e._reactRootContainer = u, e[ml] = u.current, Br(8 === e.nodeType ? e.parentNode : e), cs((function() {
                            Ws(t, u, n, r)
                        })), u
                    }(n, t, e, l, r);
                    return $s(o)
                }
                Gs.prototype.render = Ys.prototype.render = function(e) {
                    var t = this._internalRoot;
                    if (null === t) throw Error(a(409));
                    Ws(e, t, null, null)
                }, Gs.prototype.unmount = Ys.prototype.unmount = function() {
                    var e = this._internalRoot;
                    if (null !== e) {
                        this._internalRoot = null;
                        var t = e.containerInfo;
                        cs((function() {
                            Ws(null, e, null, null)
                        })), t[ml] = null
                    }
                }, Gs.prototype.unstable_scheduleHydration = function(e) {
                    if (e) {
                        var t = xt();
                        e = {
                            blockedOn: null,
                            target: e,
                            priority: t
                        };
                        for (var n = 0; n < zt.length && 0 !== t && t < zt[n].priority; n++);
                        zt.splice(n, 0, e), 0 === n && It(e)
                    }
                }, kt = function(e) {
                    switch (e.tag) {
                        case 3:
                            var t = e.stateNode;
                            if (t.current.memoizedState.isDehydrated) {
                                var n = ft(t.pendingLanes);
                                0 !== n && (vt(t, 1 | n), rs(t, Xe()), !(6 & Nu) && (Bu = Xe() + 500, Bl()))
                            }
                            break;
                        case 13:
                            cs((function() {
                                var t = Oa(e, 1);
                                if (null !== t) {
                                    var n = es();
                                    ns(t, e, 1, n)
                                }
                            })), Qs(e, 1)
                    }
                }, St = function(e) {
                    if (13 === e.tag) {
                        var t = Oa(e, 134217728);
                        if (null !== t) ns(t, e, 134217728, es());
                        Qs(e, 134217728)
                    }
                }, Et = function(e) {
                    if (13 === e.tag) {
                        var t = ts(e),
                            n = Oa(e, t);
                        if (null !== n) ns(n, e, t, es());
                        Qs(e, t)
                    }
                }, xt = function() {
                    return bt
                }, _t = function(e, t) {
                    var n = bt;
                    try {
                        return bt = e, t()
                    } finally {
                        bt = n
                    }
                }, Se = function(e, t, n) {
                    switch (t) {
                        case "input":
                            if (Z(e, n), t = n.name, "radio" === n.type && null != t) {
                                for (n = e; n.parentNode;) n = n.parentNode;
                                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                                    var r = n[t];
                                    if (r !== e && r.form === e.form) {
                                        var l = kl(r);
                                        if (!l) throw Error(a(90));
                                        q(r), Z(r, l)
                                    }
                                }
                            }
                            break;
                        case "textarea":
                            ae(e, n);
                            break;
                        case "select":
                            null != (t = n.value) && ne(e, !!n.multiple, t, !1)
                    }
                }, Ne = ss, Le = cs;
                var ec = {
                        usingClientEntryPoint: !1,
                        Events: [bl, wl, kl, Ce, Te, ss]
                    },
                    tc = {
                        findFiberByHostInstance: vl,
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
                        lt = rc.inject(nc), at = rc
                    } catch (ce) {}
                }
                t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ec, t.createPortal = function(e, t) {
                    var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                    if (!Ks(t)) throw Error(a(200));
                    return function(e, t, n) {
                        var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                        return {
                            $$typeof: S,
                            key: null == r ? null : "" + r,
                            children: e,
                            containerInfo: t,
                            implementation: n
                        }
                    }(e, t, null, n)
                }, t.createRoot = function(e, t) {
                    if (!Ks(e)) throw Error(a(299));
                    var n = !1,
                        r = "",
                        l = qs;
                    return null != t && (!0 === t.unstable_strictMode && (n = !0), void 0 !== t.identifierPrefix && (r = t.identifierPrefix), void 0 !== t.onRecoverableError && (l = t.onRecoverableError)), t = js(e, 1, !1, null, 0, n, 0, r, l), e[ml] = t.current, Br(8 === e.nodeType ? e.parentNode : e), new Ys(t)
                }, t.findDOMNode = function(e) {
                    if (null == e) return null;
                    if (1 === e.nodeType) return e;
                    var t = e._reactInternals;
                    if (void 0 === t) {
                        if ("function" == typeof e.render) throw Error(a(188));
                        throw e = Object.keys(e).join(","), Error(a(268, e))
                    }
                    return e = null === (e = Ve(t)) ? null : e.stateNode
                }, t.flushSync = function(e) {
                    return cs(e)
                }, t.hydrate = function(e, t, n) {
                    if (!Xs(t)) throw Error(a(200));
                    return Js(null, e, t, !0, n)
                }, t.hydrateRoot = function(e, t, n) {
                    if (!Ks(e)) throw Error(a(405));
                    var r = null != n && n.hydratedSources || null,
                        l = !1,
                        o = "",
                        i = qs;
                    if (null != n && (!0 === n.unstable_strictMode && (l = !0), void 0 !== n.identifierPrefix && (o = n.identifierPrefix), void 0 !== n.onRecoverableError && (i = n.onRecoverableError)), t = Bs(t, null, e, 1, null != n ? n : null, l, 0, o, i), e[ml] = t.current, Br(e), r)
                        for (e = 0; e < r.length; e++) l = (l = (n = r[e])._getVersion)(n._source), null == t.mutableSourceEagerHydrationData ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(n, l);
                    return new Gs(t)
                }, t.render = function(e, t, n) {
                    if (!Xs(t)) throw Error(a(200));
                    return Js(null, e, t, !1, n)
                }, t.unmountComponentAtNode = function(e) {
                    if (!Xs(e)) throw Error(a(40));
                    return !!e._reactRootContainer && (cs((function() {
                        Js(null, null, e, !1, (function() {
                            e._reactRootContainer = null, e[ml] = null
                        }))
                    })), !0)
                }, t.unstable_batchedUpdates = ss, t.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
                    if (!Xs(n)) throw Error(a(200));
                    if (null == e || void 0 === e._reactInternals) throw Error(a(38));
                    return Js(e, t, n, !1, r)
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
                    l = Symbol.for("react.element"),
                    a = Symbol.for("react.fragment"),
                    o = Object.prototype.hasOwnProperty,
                    i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                    u = {
                        key: !0,
                        ref: !0,
                        __self: !0,
                        __source: !0
                    };

                function s(e, t, n) {
                    var r, a = {},
                        s = null,
                        c = null;
                    for (r in void 0 !== n && (s = "" + n), void 0 !== t.key && (s = "" + t.key), void 0 !== t.ref && (c = t.ref), t) o.call(t, r) && !u.hasOwnProperty(r) && (a[r] = t[r]);
                    if (e && e.defaultProps)
                        for (r in t = e.defaultProps) void 0 === a[r] && (a[r] = t[r]);
                    return {
                        $$typeof: l,
                        type: e,
                        key: s,
                        ref: c,
                        props: a,
                        _owner: i.current
                    }
                }
                t.jsx = s, t.jsxs = s
            },
            287: (e, t) => {
                "use strict";
                var n = Symbol.for("react.element"),
                    r = Symbol.for("react.portal"),
                    l = Symbol.for("react.fragment"),
                    a = Symbol.for("react.strict_mode"),
                    o = Symbol.for("react.profiler"),
                    i = Symbol.for("react.provider"),
                    u = Symbol.for("react.context"),
                    s = Symbol.for("react.forward_ref"),
                    c = Symbol.for("react.suspense"),
                    f = Symbol.for("react.memo"),
                    d = Symbol.for("react.lazy"),
                    p = Symbol.iterator;
                var m = {
                        isMounted: function() {
                            return !1
                        },
                        enqueueForceUpdate: function() {},
                        enqueueReplaceState: function() {},
                        enqueueSetState: function() {}
                    },
                    h = Object.assign,
                    g = {};

                function y(e, t, n) {
                    this.props = e, this.context = t, this.refs = g, this.updater = n || m
                }

                function v() {}

                function b(e, t, n) {
                    this.props = e, this.context = t, this.refs = g, this.updater = n || m
                }
                y.prototype.isReactComponent = {}, y.prototype.setState = function(e, t) {
                    if ("object" != typeof e && "function" != typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                    this.updater.enqueueSetState(this, e, t, "setState")
                }, y.prototype.forceUpdate = function(e) {
                    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
                }, v.prototype = y.prototype;
                var w = b.prototype = new v;
                w.constructor = b, h(w, y.prototype), w.isPureReactComponent = !0;
                var k = Array.isArray,
                    S = Object.prototype.hasOwnProperty,
                    E = {
                        current: null
                    },
                    x = {
                        key: !0,
                        ref: !0,
                        __self: !0,
                        __source: !0
                    };

                function _(e, t, r) {
                    var l, a = {},
                        o = null,
                        i = null;
                    if (null != t)
                        for (l in void 0 !== t.ref && (i = t.ref), void 0 !== t.key && (o = "" + t.key), t) S.call(t, l) && !x.hasOwnProperty(l) && (a[l] = t[l]);
                    var u = arguments.length - 2;
                    if (1 === u) a.children = r;
                    else if (1 < u) {
                        for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
                        a.children = s
                    }
                    if (e && e.defaultProps)
                        for (l in u = e.defaultProps) void 0 === a[l] && (a[l] = u[l]);
                    return {
                        $$typeof: n,
                        type: e,
                        key: o,
                        ref: i,
                        props: a,
                        _owner: E.current
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

                function L(e, t, l, a, o) {
                    var i = typeof e;
                    "undefined" !== i && "boolean" !== i || (e = null);
                    var u = !1;
                    if (null === e) u = !0;
                    else switch (i) {
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
                    if (u) return o = o(u = e), e = "" === a ? "." + N(u, 0) : a, k(o) ? (l = "", null != e && (l = e.replace(T, "$&/") + "/"), L(o, t, l, "", (function(e) {
                        return e
                    }))) : null != o && (C(o) && (o = function(e, t) {
                        return {
                            $$typeof: n,
                            type: e.type,
                            key: t,
                            ref: e.ref,
                            props: e.props,
                            _owner: e._owner
                        }
                    }(o, l + (!o.key || u && u.key === o.key ? "" : ("" + o.key).replace(T, "$&/") + "/") + e)), t.push(o)), 1;
                    if (u = 0, a = "" === a ? "." : a + ":", k(e))
                        for (var s = 0; s < e.length; s++) {
                            var c = a + N(i = e[s], s);
                            u += L(i, t, l, c, o)
                        } else if (c = function(e) {
                                return null === e || "object" != typeof e ? null : "function" == typeof(e = p && e[p] || e["@@iterator"]) ? e : null
                            }(e), "function" == typeof c)
                            for (e = c.call(e), s = 0; !(i = e.next()).done;) u += L(i = i.value, t, l, c = a + N(i, s++), o);
                        else if ("object" === i) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
                    return u
                }

                function P(e, t, n) {
                    if (null == e) return e;
                    var r = [],
                        l = 0;
                    return L(e, r, "", "", (function(e) {
                        return t.call(n, e, l++)
                    })), r
                }

                function R(e) {
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
                var D = {
                        current: null
                    },
                    z = {
                        transition: null
                    },
                    O = {
                        ReactCurrentDispatcher: D,
                        ReactCurrentBatchConfig: z,
                        ReactCurrentOwner: E
                    };

                function A() {
                    throw Error("act(...) is not supported in production builds of React.")
                }
                t.Children = {
                    map: P,
                    forEach: function(e, t, n) {
                        P(e, (function() {
                            t.apply(this, arguments)
                        }), n)
                    },
                    count: function(e) {
                        var t = 0;
                        return P(e, (function() {
                            t++
                        })), t
                    },
                    toArray: function(e) {
                        return P(e, (function(e) {
                            return e
                        })) || []
                    },
                    only: function(e) {
                        if (!C(e)) throw Error("React.Children.only expected to receive a single React element child.");
                        return e
                    }
                }, t.Component = y, t.Fragment = l, t.Profiler = o, t.PureComponent = b, t.StrictMode = a, t.Suspense = c, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = O, t.act = A, t.cloneElement = function(e, t, r) {
                    if (null == e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
                    var l = h({}, e.props),
                        a = e.key,
                        o = e.ref,
                        i = e._owner;
                    if (null != t) {
                        if (void 0 !== t.ref && (o = t.ref, i = E.current), void 0 !== t.key && (a = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
                        for (s in t) S.call(t, s) && !x.hasOwnProperty(s) && (l[s] = void 0 === t[s] && void 0 !== u ? u[s] : t[s])
                    }
                    var s = arguments.length - 2;
                    if (1 === s) l.children = r;
                    else if (1 < s) {
                        u = Array(s);
                        for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
                        l.children = u
                    }
                    return {
                        $$typeof: n,
                        type: e.type,
                        key: a,
                        ref: o,
                        props: l,
                        _owner: i
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
                        $$typeof: i,
                        _context: e
                    }, e.Consumer = e
                }, t.createElement = _, t.createFactory = function(e) {
                    var t = _.bind(null, e);
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
                        _init: R
                    }
                }, t.memo = function(e, t) {
                    return {
                        $$typeof: f,
                        type: e,
                        compare: void 0 === t ? null : t
                    }
                }, t.startTransition = function(e) {
                    var t = z.transition;
                    z.transition = {};
                    try {
                        e()
                    } finally {
                        z.transition = t
                    }
                }, t.unstable_act = A, t.useCallback = function(e, t) {
                    return D.current.useCallback(e, t)
                }, t.useContext = function(e) {
                    return D.current.useContext(e)
                }, t.useDebugValue = function() {}, t.useDeferredValue = function(e) {
                    return D.current.useDeferredValue(e)
                }, t.useEffect = function(e, t) {
                    return D.current.useEffect(e, t)
                }, t.useId = function() {
                    return D.current.useId()
                }, t.useImperativeHandle = function(e, t, n) {
                    return D.current.useImperativeHandle(e, t, n)
                }, t.useInsertionEffect = function(e, t) {
                    return D.current.useInsertionEffect(e, t)
                }, t.useLayoutEffect = function(e, t) {
                    return D.current.useLayoutEffect(e, t)
                }, t.useMemo = function(e, t) {
                    return D.current.useMemo(e, t)
                }, t.useReducer = function(e, t, n) {
                    return D.current.useReducer(e, t, n)
                }, t.useRef = function(e) {
                    return D.current.useRef(e)
                }, t.useState = function(e) {
                    return D.current.useState(e)
                }, t.useSyncExternalStore = function(e, t, n) {
                    return D.current.useSyncExternalStore(e, t, n)
                }, t.useTransition = function() {
                    return D.current.useTransition()
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
                            l = e[r];
                        if (!(0 < a(l, t))) break e;
                        e[r] = t, e[n] = l, n = r
                    }
                }

                function r(e) {
                    return 0 === e.length ? null : e[0]
                }

                function l(e) {
                    if (0 === e.length) return null;
                    var t = e[0],
                        n = e.pop();
                    if (n !== t) {
                        e[0] = n;
                        e: for (var r = 0, l = e.length, o = l >>> 1; r < o;) {
                            var i = 2 * (r + 1) - 1,
                                u = e[i],
                                s = i + 1,
                                c = e[s];
                            if (0 > a(u, n)) s < l && 0 > a(c, u) ? (e[r] = c, e[s] = n, r = s) : (e[r] = u, e[i] = n, r = i);
                            else {
                                if (!(s < l && 0 > a(c, n))) break e;
                                e[r] = c, e[s] = n, r = s
                            }
                        }
                    }
                    return t
                }

                function a(e, t) {
                    var n = e.sortIndex - t.sortIndex;
                    return 0 !== n ? n : e.id - t.id
                }
                if ("object" == typeof performance && "function" == typeof performance.now) {
                    var o = performance;
                    t.unstable_now = function() {
                        return o.now()
                    }
                } else {
                    var i = Date,
                        u = i.now();
                    t.unstable_now = function() {
                        return i.now() - u
                    }
                }
                var s = [],
                    c = [],
                    f = 1,
                    d = null,
                    p = 3,
                    m = !1,
                    h = !1,
                    g = !1,
                    y = "function" == typeof setTimeout ? setTimeout : null,
                    v = "function" == typeof clearTimeout ? clearTimeout : null,
                    b = "undefined" != typeof setImmediate ? setImmediate : null;

                function w(e) {
                    for (var t = r(c); null !== t;) {
                        if (null === t.callback) l(c);
                        else {
                            if (!(t.startTime <= e)) break;
                            l(c), t.sortIndex = t.expirationTime, n(s, t)
                        }
                        t = r(c)
                    }
                }

                function k(e) {
                    if (g = !1, w(e), !h)
                        if (null !== r(s)) h = !0, z(S);
                        else {
                            var t = r(c);
                            null !== t && O(k, t.startTime - e)
                        }
                }

                function S(e, n) {
                    h = !1, g && (g = !1, v(C), C = -1), m = !0;
                    var a = p;
                    try {
                        for (w(n), d = r(s); null !== d && (!(d.expirationTime > n) || e && !L());) {
                            var o = d.callback;
                            if ("function" == typeof o) {
                                d.callback = null, p = d.priorityLevel;
                                var i = o(d.expirationTime <= n);
                                n = t.unstable_now(), "function" == typeof i ? d.callback = i : d === r(s) && l(s), w(n)
                            } else l(s);
                            d = r(s)
                        }
                        if (null !== d) var u = !0;
                        else {
                            var f = r(c);
                            null !== f && O(k, f.startTime - n), u = !1
                        }
                        return u
                    } finally {
                        d = null, p = a, m = !1
                    }
                }
                "undefined" != typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
                var E, x = !1,
                    _ = null,
                    C = -1,
                    T = 5,
                    N = -1;

                function L() {
                    return !(t.unstable_now() - N < T)
                }

                function P() {
                    if (null !== _) {
                        var e = t.unstable_now();
                        N = e;
                        var n = !0;
                        try {
                            n = _(!0, e)
                        } finally {
                            n ? E() : (x = !1, _ = null)
                        }
                    } else x = !1
                }
                if ("function" == typeof b) E = function() {
                    b(P)
                };
                else if ("undefined" != typeof MessageChannel) {
                    var R = new MessageChannel,
                        D = R.port2;
                    R.port1.onmessage = P, E = function() {
                        D.postMessage(null)
                    }
                } else E = function() {
                    y(P, 0)
                };

                function z(e) {
                    _ = e, x || (x = !0, E())
                }

                function O(e, n) {
                    C = y((function() {
                        e(t.unstable_now())
                    }), n)
                }
                t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(e) {
                    e.callback = null
                }, t.unstable_continueExecution = function() {
                    h || m || (h = !0, z(S))
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
                }, t.unstable_scheduleCallback = function(e, l, a) {
                    var o = t.unstable_now();
                    switch ("object" == typeof a && null !== a ? a = "number" == typeof(a = a.delay) && 0 < a ? o + a : o : a = o, e) {
                        case 1:
                            var i = -1;
                            break;
                        case 2:
                            i = 250;
                            break;
                        case 5:
                            i = 1073741823;
                            break;
                        case 4:
                            i = 1e4;
                            break;
                        default:
                            i = 5e3
                    }
                    return e = {
                        id: f++,
                        callback: l,
                        priorityLevel: e,
                        startTime: a,
                        expirationTime: i = a + i,
                        sortIndex: -1
                    }, a > o ? (e.sortIndex = a, n(c, e), null === r(s) && e === r(c) && (g ? (v(C), C = -1) : g = !0, O(k, a - o))) : (e.sortIndex = i, n(s, e), h || m || (h = !0, z(S))), e
                }, t.unstable_shouldYield = L, t.unstable_wrapCallback = function(e) {
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
            942: (e, t) => {
                var n;
                ! function() {
                    "use strict";
                    var r = {}.hasOwnProperty;

                    function l() {
                        for (var e = "", t = 0; t < arguments.length; t++) {
                            var n = arguments[t];
                            n && (e = o(e, a(n)))
                        }
                        return e
                    }

                    function a(e) {
                        if ("string" == typeof e || "number" == typeof e) return e;
                        if ("object" != typeof e) return "";
                        if (Array.isArray(e)) return l.apply(null, e);
                        if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]")) return e.toString();
                        var t = "";
                        for (var n in e) r.call(e, n) && e[n] && (t = o(t, n));
                        return t
                    }

                    function o(e, t) {
                        return t ? e ? e + " " + t : e + t : e
                    }
                    e.exports ? (l.default = l, e.exports = l) : void 0 === (n = function() {
                        return l
                    }.apply(t, [])) || (e.exports = n)
                }()
            }
        },
        t = {};

    function n(r) {
        var l = t[r];
        if (void 0 !== l) return l.exports;
        var a = t[r] = {
            exports: {}
        };
        return e[r].call(a.exports, a, a.exports, n), a.exports
    }
    n.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return n.d(t, {
            a: t
        }), t
    }, n.d = (e, t) => {
        for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
        })
    }, n.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
        "use strict";
        var e = n(848),
            t = n(338);

        function r(e) {
            return n.g.chrome ? .runtime ? .getURL(`assets/${e}`)
        }

        function l(e) {
            return r(`fonts/${e}.otf`)
        }
        var a = n(838),
            o = n(65),
            i = n.n(o),
            u = n(251),
            s = n.n(u);
        i().setLevel("warn", !0), s().reg(i()), s().apply(i(), {
            levelFormatter: e => e.toUpperCase(),
            timestampFormatter: e => e.toISOString(),
            format: function(e, t, n) {
                return `[${n}] ${e}`
            }
        });
        const c = i(),
            f = Object.freeze({
                text: "",
                node: null,
                wordCount: 0,
                updatedAt: 0
            });
        const d = {
            ADD_ATTR: ["target"],
            ADD_TAGS: ["style"],
            FORBID_TAGS: ["script"],
            FORCE_BODY: !0
        };

        function p(e = document.head) {
            const t = `\n    @font-face {\n      font-style: normal;\n      font-weight: 400;\n      font-family: 'Metropolis';\n      src: url(${l("Metropolis-Regular")}) format('opentype');\n    }\n    @font-face {\n      font-style: normal;\n      font-weight: 500;\n      font-family: 'Metropolis';\n      src: url(${l("Metropolis-Medium")}) format('opentype');\n    }\n    @font-face {\n      font-style: normal;\n      font-weight: 600;\n      font-family: 'Metropolis';\n      src: url(${l("Metropolis-Semibold")}) format('opentype');\n    }\n    @font-face {\n      font-style: normal;\n      font-weight: 700;\n      font-family: 'Metropolis';\n      src: url(${l("Metropolis-Bold")}) format('opentype');\n    }\n    @font-face {\n      font-style: normal;\n      font-weight: 400;\n      src: url(${l("CircularStd")}) format('opentype');\n      font-family: 'CircularStd';\n    }\n    @font-face {\n      font-style: normal;\n      font-weight: 300;\n      src: url(${l("CircularStdLight")}) format('opentype');\n      font-family: 'CircularStd';\n    }\n  `;
            try {
                const n = document.createElement("style");
                n.appendChild(document.createTextNode(function(e, t = {}) {
                    return (0, a.sanitize)(e, { ...d,
                        ...t
                    })
                }(t))), e.appendChild(n)
            } catch (e) {
                c.warn("Could not inject font faces into head")
            }
        }
        var m = n(942),
            h = n.n(m),
            g = n(540);
        const y = {
                main: "XmaqsiDX5dwBhtao",
                container: "RyaBL03cAJYYQI78",
                logo: "AWG7jH26rOEX81lZ",
                header: "y4Om_lD6d9Hpd41_",
                contents: "DpfUNGljV0U0SC82",
                titleText: "m0QpTbqZUhAPtJ89",
                normalText: "dMTopALpEmjw5foa",
                deemphasizedText: "mrACnCOQqHno8LiK",
                caveatText: "tuS_YC7gT1JdiuS5 mrACnCOQqHno8LiK",
                collectionItemList: "eapqSuC9_uJ9K3pX",
                section: "oyfdkuvyRnurXESo",
                centerSection: "vyJ8zhacvc6Cq5UK oyfdkuvyRnurXESo",
                bottomSection: "id43pQSFcgP2LSvZ oyfdkuvyRnurXESo",
                checkboxContainer: "ZpwCOaMZzQwQrt9R",
                allowDataAcquisitionLabel: "Gjq_00_zrThHoFdb",
                allowDataAcquisitionLabelChecked: "WjBNuDjvZpxap4is",
                allowDataAcquisitionCheckbox: "NDrSMibQLzXvGsOe",
                allowDataAcquisitionText: "E81SbwNFCNVNG7CL",
                helpUsText: "Yc5iMwDEVp0DnTvc dMTopALpEmjw5foa",
                buttonsContainer: "ATdl3qZbl6asxMdo",
                optInOutButton: "AvTDEZ6gQ0BIBQcg",
                optInButton: "cJfAbIgyvko8BQd1 AvTDEZ6gQ0BIBQcg",
                optOutButton: "_M71LmjSlfeIvKCS AvTDEZ6gQ0BIBQcg",
                privacyPolicyLink: "rh1mPCk0expjD3Oy"
            },
            v = r("logo.svg");

        function b({
            onOptInClick: t,
            onOptOutClick: n
        }) {
            const [r, l] = (0, g.useState)(!1), a = h()(y.allowDataAcquisitionLabel, {
                [y.allowDataAcquisitionLabelChecked]: r
            });
            return (0, e.jsx)("main", {
                className: y.main,
                children: (0, e.jsxs)("div", {
                    className: y.container,
                    children: [(0, e.jsx)("header", {
                        className: y.header,
                        children: (0, e.jsx)("img", {
                            src: v,
                            alt: "Deep Fake Detector logo",
                            className: y.logo
                        })
                    }), (0, e.jsxs)("article", {
                        className: y.contents,
                        children: [(0, e.jsx)("h1", {
                            className: y.titleText,
                            children: "Welcome to Deep Fake Detector by Fakespot"
                        }), (0, e.jsx)("h3", {
                            className: y.deemphasizedText,
                            children: "Thank you for installing our extension."
                        }), (0, e.jsxs)("section", {
                            className: y.centerSection,
                            children: [(0, e.jsx)("p", {
                                className: y.normalText,
                                children: "Deep Fake Detector needs to collect the following data to detect AI patterns in text:"
                            }), (0, e.jsx)("ul", {
                                className: y.collectionItemList,
                                children: (0, e.jsx)("li", {
                                    className: y.deemphasizedText,
                                    children: "Deep Fake Detector will send highlighted text to be analyzed when you request analysis by any method."
                                })
                            }), (0, e.jsx)("p", {
                                className: y.caveatText,
                                children: "If you choose to not allow us to send this data, we will not be able to analyze text."
                            }), (0, e.jsxs)("p", {
                                className: y.caveatText,
                                children: ["Full details about the data we collect and what we do with it are provided in our ", (0, e.jsx)("a", {
                                    href: "https://addons.mozilla.org/en-US/firefox/addon/deep-fake-detector/privacy/",
                                    className: y.privacyPolicyLink,
                                    target: "_blank",
                                    rel: "noreferrer noopener",
                                    children: "Privacy Notice"
                                }), "."]
                            })]
                        }), (0, e.jsx)("section", {
                            className: y.bottomSection,
                            children: (0, e.jsx)("div", {
                                children: (0, e.jsxs)("label", {
                                    htmlFor: "allowDataAcquisition",
                                    className: a,
                                    children: [(0, e.jsxs)("span", {
                                        className: y.checkboxContainer,
                                        children: [(0, e.jsx)("input", {
                                            type: "checkbox",
                                            id: "allowDataAcquisition",
                                            name: "allowDataAcquisition",
                                            checked: r,
                                            onClick: () => l((e => !e)),
                                            className: y.allowDataAcquisitionCheckbox
                                        }), (0, e.jsx)("span", {
                                            className: y.helpUsText,
                                            children: "Help us improve the add-on"
                                        })]
                                    }), (0, e.jsx)("span", {
                                        className: y.allowDataAcquisitionText,
                                        children: "Also allow Deep Fake Detector to collect interaction data to ensure stability and improve the add-on. Deep Fake Detector will collect data such as your IP address, settings choices and browser information, and analysis results and failures. Collection of this Interaction Data is not required for functionality of the add-on. Further details are described in our Privacy Notice."
                                    })]
                                })
                            })
                        })]
                    }), (0, e.jsxs)("div", {
                        className: y.buttonsContainer,
                        children: [(0, e.jsx)("button", {
                            className: y.optInButton,
                            type: "button",
                            onClick: () => t(r),
                            children: "Yes, Opt-in"
                        }), (0, e.jsx)("button", {
                            className: y.optOutButton,
                            type: "button",
                            onClick: n,
                            children: "Do not opt in"
                        })]
                    })]
                })
            })
        }
        const w = "dfdState";
        const k = "local";

        function S(e = k) {
            return chrome.storage[e]
        }
        async function E(e, t) {
            const n = function(e, t, n) {
                return t.reduce(((e, r, l) => e ? (l === t.length - 1 && (e[r] = n), e[r]) : null), e), e
            }(await async function(e, t = k) {
                const n = await S(t).get(e);
                return null == n ? null : n[e]
            }(w), e, t);
            return async function(e, t = k) {
                return S(t).set(e)
            }({
                [w]: n
            })
        }
        const x = "allowDataAcquisition",
            _ = "optIn";

        function C(e) {
            return ["app", e]
        }! function() {
            p();
            const n = document.querySelector("#root");
            (0, t.H)(n).render((0, e.jsx)(b, {
                onOptInClick: async function(e) {
                    await async function(e) {
                        return E(C(_), e)
                    }(!0), e && await async function(e) {
                        return E(C(x), e)
                    }(e);
                    const t = await chrome.tabs.getCurrent();
                    chrome.tabs.remove(t.id)
                },
                onOptOutClick: function() {
                    chrome.management.uninstallSelf()
                }
            }))
        }()
    })()
})();
//# sourceMappingURL=consent.js.map
