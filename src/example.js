// function t(n, a) {
//     var l, o, i = n.__emotion_real === n, u = i && n.__emotion_base || n;
//     void 0 !== a && (l = a.label,
//     o = a.target);
//     var s = Te(n, a, i)
//       , c = s || Ne(u)
//       , f = !c("as");
//     return function() {
//         var d = arguments
//           , p = i && void 0 !== n.__emotion_styles ? n.__emotion_styles.slice(0) : [];
//         if (void 0 !== l && p.push("label:" + l + ";"),
//         null == d[0] || void 0 === d[0].raw)
//             p.push.apply(p, d);
//         else {
//             p.push(d[0][0]);
//             for (var h = d.length, m = 1; m < h; m++)
//                 p.push(d[m], d[0][m])
//         }
//         var v = ke((function(t, n, r) {
//             var a = f && t.as || u
//               , l = ""
//               , i = []
//               , d = t;
//             if (null == t.theme) {
//                 for (var h in d = {},
//                 t)
//                     d[h] = t[h];
//                 d.theme = (0,
//                 e.useContext)(Se)
//             }
//             "string" == typeof t.className ? l = le(n.registered, i, t.className) : null != t.className && (l = t.className + " ");
//             var m = ge(p.concat(i), n.registered, d);
//             oe(n, m, "string" == typeof a),
//             l += n.key + "-" + m.name,
//             void 0 !== o && (l += " " + o);
//             var v = f && void 0 === s ? Ne(a) : c
//               , y = {};
//             for (var g in t)
//                 f && "as" === g || v(g) && (y[g] = t[g]);
//             return y.className = l,
//             y.ref = r,
//             (0,
//             e.createElement)(a, y)
//         }
//         ));
//         return v.displayName = void 0 !== l ? l : "Styled(" + ("string" == typeof u ? u : u.displayName || u.name || "Component") + ")",
//         v.defaultProps = n.defaultProps,
//         v.__emotion_real = v,
//         v.__emotion_base = u,
//         v.__emotion_styles = p,
//         v.__emotion_forwardProp = s,
//         Object.defineProperty(v, "toString", {
//             value: function() {
//                 return "." + o
//             }
//         }),
//         v.withComponent = function(e, n) {
//             return t(e, r({}, a, n, {
//                 shouldForwardProp: Te(v, n, !0)
//             })).apply(void 0, p)
//         }
//         ,
//         v
//     }
// }("div", {
//     target: "e12ghx8k0"
// })("display:grid;grid:auto-flow/0.5fr 1fr;grid-row-gap:", (function(e) {
//     var t = e.gutter;
//     return "var(--cx-spacing-".concat(void 0 === t ? 2 : t, "x);")
// }
// ), " padding:var(--cx-spacing-4x);");

(function a(x, y) {
    const [p, q] = [x, y];

    console.log(p, q);

    return function() {
        const b = arguments;
        console.log(b);
    }
})(1, 2)('hhh')