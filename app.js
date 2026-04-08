"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["style"];
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect,
  useCallback = _React.useCallback,
  useRef = _React.useRef;

// ══════════════════════════════════════════════════════════
// CONFIG
// ══════════════════════════════════════════════════════════

var APP_VERSION = function () {
  try {
    var d = new Date(document.lastModified);
    if (isNaN(d.getTime())) return "?";
    var day = String(d.getDate()).padStart(2, "0");
    var month = String(d.getMonth() + 1).padStart(2, "0");
    var year = String(d.getFullYear()).slice(2);
    var h = String(d.getHours()).padStart(2, "0");
    var m = String(d.getMinutes()).padStart(2, "0");
    return "".concat(day, "/").concat(month, "/").concat(year, " ").concat(h, ":").concat(m);
  } catch (_unused) {
    return "?";
  }
}();
var FACTIONS = {
  "SM": {
    label: "Space Marines",
    "short": "SM",
    icon: "✠",
    accent: "#b8922a",
    // or templier
    accent2: "#c9a84c",
    // or clair
    bg: "#0c0a06",
    bgCard: "linear-gradient(180deg,#1a1510 0%,#120e08 100%)",
    borderColor: "#b8922a",
    pageGrain: "#0a0806",
    watermark: "✠",
    glow: "#b8922a44"
  },
  "TY": {
    label: "Tyranides",
    "short": "TY",
    icon: "☠",
    accent: "#8a1a1a",
    // rouge chitin
    accent2: "#c43030",
    // rouge sang vif
    bg: "#0a0404",
    bgCard: "linear-gradient(180deg,#1a0c0c 0%,#110606 100%)",
    borderColor: "#8a1a1a",
    pageGrain: "#080304",
    watermark: "☠",
    glow: "#8a1a1a44"
  },
  "IK": {
    label: "Chevaliers Imp.",
    "short": "IK",
    icon: "⚜",
    accent: "#7a8a3a",
    // vert acier héraldique
    accent2: "#a0b050",
    // vert clair
    bg: "#060a04",
    bgCard: "linear-gradient(180deg,#121a08 0%,#0a1006 100%)",
    borderColor: "#7a8a3a",
    pageGrain: "#060804",
    watermark: "⚜",
    glow: "#7a8a3a44"
  },
  "IM": {
    label: "Imperium",
    "short": "IM",
    icon: "☩",
    accent: "#c0b090",
    bg: "#060608",
    bgCard: "linear-gradient(180deg,#10100e 0%,#0a0a0c 100%)"
  }
};

// ══════════════════════════════════════════════════════════
// PRIX BOUTIQUE — myhobby.place/fr (remise ~20% sur PPC GW)
// ══════════════════════════════════════════════════════════
var SHOP_PRICES = {
  // ── SPACE MARINES ──────────────────────────────────────
  "Captain": 27.20,
  "Captain in Gravis Armour": 33.60,
  "Captain in Phobos Armour": 27.20,
  "Captain in Terminator Armour": 33.60,
  "Primaris Lieutenant": 27.20,
  "Lieutenant": 22.40,
  "Lieutenant in Phobos Armour": 27.20,
  "Librarian": 27.20,
  "Librarian in Phobos Armour": 27.20,
  "Chaplain": 27.20,
  "Chaplain on Bike": 29.60,
  "Techmarine": 22.40,
  "Apothecary": 27.20,
  "Apothecary Biologis": 33.60,
  "Company Ancient": 27.20,
  "Company Heroes": 40.00,
  "Roboute Guilliman": 79.20,
  "Marneus Calgar": 44.00,
  "Tigurius": 29.60,
  "Sicarius": 29.60,
  "Lysander": 29.60,
  "Darnath Lysander": 29.60,
  "Pedro Kantor": 29.60,
  "Vulkan He'stan": 29.60,
  "Kayvaan Shrike": 29.60,
  "Iron Father Feirros": 33.60,
  "Adrax Agatone": 29.60,
  "Kor'sarro Khan": 29.60,
  "Lion El'Jonson": 56.00,
  "Intercessor Squad": 41.20,
  "Assault Intercessor Squad": 40.00,
  "Heavy Intercessor Squad": 44.00,
  "Tactical Squad": 40.00,
  "Scout Squad": 34.00,
  "Bladeguard Veteran Squad": 44.00,
  "Sternguard Veteran Squad": 44.00,
  "Vanguard Veteran Squad": 40.00,
  "Assault Squad": 40.00,
  "Terminator Squad": 49.60,
  "Terminator Assault Squad": 49.60,
  "Deathwing Knights": 49.60,
  "Reiver Squad": 34.00,
  "Incursor Squad": 34.00,
  "Infiltrator Squad": 34.00,
  "Eliminator Squad": 34.00,
  "Suppressor Squad": 34.00,
  "Inceptor Squad": 40.00,
  "Aggressor Squad": 34.00,
  "Eradicator Squad": 40.00,
  "Hellblaster Squad": 44.00,
  "Outrider Squad": 40.00,
  "Bladeguard Ancient": 27.20,
  "Judiciar": 27.20,
  "Company Champion": 22.40,
  "Dreadnought": 38.00,
  "Redemptor Dreadnought": 44.00,
  "Brutalis Dreadnought": 44.00,
  "Ballistus Dreadnought": 44.00,
  "Venerable Dreadnought": 38.00,
  "Ironclad Dreadnought": 38.00,
  "Predator Annihilator": 52.00,
  "Predator Destructor": 52.00,
  "Whirlwind": 52.00,
  "Vindicator": 52.00,
  "Gladiator Lancer": 52.00,
  "Gladiator Reaper": 52.00,
  "Gladiator Valiant": 52.00,
  "Repulsor Executioner": 72.00,
  "Repulsor": 76.00,
  "Impulsor": 44.00,
  "Stormhawk Interceptor": 38.00,
  "Stormraven Gunship": 68.00,
  "Stormtalon Gunship": 38.00,
  "Land Raider": 72.00,
  "Land Raider Crusader": 72.00,
  "Land Raider Redeemer": 72.00,
  "Rhino": 38.00,
  "Razorback": 44.00,
  "Drop Pod": 30.40,
  "Land Speeder": 30.40,
  "Land Speeder Storm": 30.40,
  "Bike Squad": 34.00,
  "Attack Bike Squad": 22.40,
  "Ravenwing Black Knights": 40.00,
  "High Marshal Helbrecht": 33.60,
  "Chaplain Grimaldus": 29.60,
  "Emperor's Champion": 22.40,
  "Crusader Squad": 36.00,
  "Ragnar Blackmane": 33.60,
  "Logan Grimnar": 44.00,
  "Njal Stormcaller": 29.60,
  "Bjorn the Fell-Handed": 44.00,
  "Wulfen": 38.00,
  "Azrael": 33.60,
  "Ezekiel": 29.60,
  "Asmodai": 22.40,
  "Belial": 29.60,
  "Sammael": 44.00,
  "Inner Circle Companions": 44.00,
  "Mephiston": 33.60,
  "Commander Dante": 44.00,
  "Astorath": 29.60,
  "Lemartes": 22.40,
  "Sanguinary Guard": 44.00,
  "Death Company Marines": 40.00,
  "Death Company Dreadnought": 44.00,
  "Storm Speeder Hailstrike": 44.00,
  "Storm Speeder Hammerstrike": 44.00,
  "Storm Speeder Thunderstrike": 44.00,
  "Astraeus Super-heavy Tank": 136.00,
  // ── IMPERIAL KNIGHTS ───────────────────────────────────
  "Armiger Warglaive": 64.00,
  // Knight Armigers (2 dans la boîte)
  "Armiger Helverin": 135.00,
  // même kit
  "Knight Paladin": 120.00,
  // Knight Questoris
  "Knight Errant": 96.00,
  "Knight Gallant": 96.00,
  "Knight Crusader": 120.00,
  "Knight Warden": 120.00,
  "Knight Preceptor": 120.00,
  "Knight Castellan": 120.00,
  // Knight Dominus
  "Knight Valiant": 120.00,
  "Canis Rex": 120.00,
  "Cerastus Knight Lancer": 136.00,
  "Cerastus Knight Castigator": 136.00,
  "Cerastus Knight Acheron": 136.00,
  "Cerastus Knight Atrapos": 136.00,
  // ── TYRANIDES ─────────────────────────────────────────
  "Hive Tyrant": 44.00,
  "The Swarmlord": 44.00,
  "Neurotyrant": 33.60,
  "Neurothropes": 33.60,
  "Broodlord": 29.60,
  "Deathleaper": 22.40,
  "Old One Eye": 44.00,
  "Norn Assimilator": 72.00,
  "Norn Emissary": 72.00,
  "Genestealers": 34.00,
  "Termagants": 34.00,
  "Hormagaunts": 34.00,
  "Von Ryan's Leapers": 34.00,
  "Tyranid Warriors With Melee Bio-weapons": 44.00,
  "Tyranid Warriors With Ranged Bio-weapons": 44.00,
  "Winged Tyranid Warriors": 44.00,
  "Tyrant Guard": 40.00,
  "Hive Guard": 40.00,
  "Zoanthropes": 34.00,
  "Venomthropes": 34.00,
  "Lictors": 22.40,
  "Raveners": 34.00,
  "Gargoyles": 34.00,
  "Screamer-Killer": 40.00,
  "Carnifex": 40.00,
  "Harpy": 52.00,
  "Hive Crone": 52.00,
  "Mawloc": 44.00,
  "Trygon": 44.00,
  "Trygon Prime": 44.00,
  "Tervigon": 72.00,
  "Exocrine": 52.00,
  "Tyrannofex": 52.00,
  "Toxicrene": 52.00,
  "Haruspex": 52.00,
  "Maleceptor": 52.00,
  "Biovores": 34.00,
  "Pyrovores": 34.00,
  "Ripper Swarms": 22.40,
  "Mucolid Spores": 22.40,
  "Sporocyst": 40.00,
  "Psychophage": 40.00,
  "Dimachaeron": 72.00,
  "Hierophant Bio-Titan": 320.00,
  // ── IMPERIUM ──
  "Callidus Assassin": 27.20,
  "Culexus Assassin": 27.20,
  "Eversor Assassin": 27.20,
  "Vindicare Assassin": 27.20,
  "Inquisitor": 65.40,
  "Inquisitor Coteaz": 29.60,
  "Inquisitor Draxus": 29.60,
  "Inquisitor Greyfax": 29.60,
  "Ministorum Priest": 18.00,
  "Navigator": 22.40,
  "Watch Captain Artemis": 29.60,
  "Watch Master": 29.60,
  "Aquila Kill Team": 44.00,
  "Deathwatch Kill Team": 44.00,
  "Grey Knights Terminator Squad": 52.00,
  "Inquisitorial Agents": 34.00,
  "Sanctifiers": 34.00,
  // Sœurs de Bataille
  "Morvenn Vahl": 44.00,
  "Saint Celestine": 33.60,
  "Junith Eruita": 33.60,
  "Triumph of Saint Katherine": 52.00,
  "Canoness": 27.20,
  "Palatine": 27.20,
  "Dialogus": 22.40,
  "Hospitaller": 22.40,
  "Imagifier": 22.40,
  "Missionary": 22.40,
  "Battle Sisters Squad": 40.00,
  "Dominion Squad": 40.00,
  "Celestian Sacresants": 34.00,
  "Repentia Squad": 34.00,
  "Arco-flagellants": 27.20,
  "Death Cult Assassins": 27.20,
  "Mortifiers": 38.00,
  "Penitent Engines": 38.00,
  "Paragon Warsuits": 52.00,
  "Retributor Squad": 40.00,
  "Seraphim Squad": 34.00,
  "Zephyrim Squad": 34.00,
  "Novitiates": 34.00,
  "Castigator": 64.00,
  "Exorcist": 52.00,
  "Immolator": 44.00,
  "Sororitas Rhino": 38.00,
  "Inquisitor Karamazov": 44.00
};

// ══════════════════════════════════════════════════════════
// POINTS DATABASE — MFM v2.8 mars 2026 (source: GW Munitorum Field Manual)
// Modifiable manuellement depuis le badge dans l'app
// ══════════════════════════════════════════════════════════
var POINTS_DB = {
  "Acastus Knight Asterius": 765,
  "Acastus Knight Porphyrion": 700,
  "Adrax Agatone": 115,
  "Aethon Shaan": 80,
  "Aggressor Squad": 95,
  "Ancient": 50,
  "Ancient in Terminator Armour": 75,
  "Ancient on Bike": 60,
  "Apothecary": 50,
  "Apothecary Biologis": 70,
  "Arco-flagellants": 45,
  "Arjac Rockfist": 105,
  "Armiger Helverin": 135,
  "Armiger Warglaive": 140,
  "Asmodai": 80,
  "Assault Intercessor Squad": 75,
  "Assault Squad": 75,
  "Astorath": 85,
  "Astraeus Super-heavy Tank": 380,
  "Attack Bike Squad": 55,
  "Azrael": 135,
  "Ballistus Dreadnought": 150,
  "Barbgaunts": 55,
  "Battle Sisters Squad": 105,
  "Belial": 130,
  "Bike Squad": 85,
  "Biovores": 50,
  "Bjorn the Fell-Handed": 145,
  "Black Templars Gladiator Lancer": 170,
  "Black Templars Gladiator Reaper": 170,
  "Black Templars Gladiator Valiant": 170,
  "Bladeguard Ancient": 45,
  "Bladeguard Veteran Squad": 80,
  "Blood Claws": 75,
  "Broodlord": 80,
  "Brutalis Dreadnought": 160,
  "Callidus Assassin": 100,
  "Canis Rex": 415,
  "Canoness": 70,
  "Captain": 80,
  "Captain Titus": 90,
  "Captain in Gravis Armour": 80,
  "Captain in Phobos Armour": 70,
  "Captain in Terminator Armour": 95,
  "Carnifex": 90,
  "Castellan": 75,
  "Castigator": 160,
  "Celestian Sacresants": 85,
  "Centurion Assault Squad": 150,
  "Centurion Devastator Squad": 175,
  "Cerastus Knight Acheron": 395,
  "Cerastus Knight Atrapos": 405,
  "Cerastus Knight Castigator": 395,
  "Cerastus Knight Lancer": 395,
  "Chaplain": 60,
  "Chaplain Grimaldus": 90,
  "Chaplain in Terminator Armour": 75,
  "Chaplain on Bike": 75,
  "Chief Apothecary": 65,
  "Commander Dante": 175,
  "Company Ancient": 50,
  "Company Champion": 45,
  "Company Heroes": 105,
  "Crusader Squad": 150,
  "Culexus Assassin": 85,
  "Darnath Lysander": 100,
  "Death Company Dreadnought": 120,
  "Death Company Marines": 75,
  "Death Cult Assassins": 55,
  "Deathleaper": 80,
  "Deathwatch Kill Team": 110,
  "Deathwatch Veterans": 95,
  "Deathwing Knights": 175,
  "Devastator Squad": 120,
  "Dialogus": 40,
  "Dimachaeron": 200,
  "Dominion Squad": 95,
  "Dreadnought": 135,
  "Drop Pod": 70,
  "Eliminator Squad": 85,
  "Emperor's Champion": 90,
  "Eradicator Squad": 90,
  "Eversor Assassin": 110,
  "Execrator": 60,
  "Exocrine": 140,
  "Exorcist": 180,
  "Ezekiel": 110,
  "Gargoyles": 85,
  "Genestealers": 75,
  "Gladiator Lancer": 160,
  "Gladiator Reaper": 160,
  "Gladiator Valiant": 150,
  "Grey Hunters": 75,
  "Grey Knights Terminator Squad": 190,
  "Harpy": 215,
  "Haruspex": 125,
  "Heavy Intercessor Squad": 100,
  "Hellblaster Squad": 110,
  "Hierophant Bio-Titan": 810,
  "High Marshal Helbrecht": 120,
  "Hive Crone": 200,
  "Hive Guard": 90,
  "Hive Tyrant": 195,
  "Hormagaunts": 65,
  "Hospitaller": 55,
  "Imagifier": 45,
  "Immolator": 115,
  "Impulsor": 80,
  "Inceptor Squad": 120,
  "Incursor Squad": 80,
  "Infiltrator Squad": 100,
  "Inner Circle Companions": 130,
  "Inquisitor": 55,
  "Inquisitor Coteaz": 75,
  "Inquisitor Draxus": 75,
  "Inquisitor Greyfax": 65,
  "Inquisitor Karamazov": 100,
  "Inquisitorial Agents": 50,
  "Intercessor Squad": 80,
  "Iron Father Feirros": 115,
  "Ironclad Dreadnought": 115,
  "Judiciar": 70,
  "Junith Eruita": 80,
  "Kayvaan Shrike": 100,
  "Knight Castellan": 410,
  "Knight Crusader": 385,
  "Knight Desecrator": 380,
  "Knight Errant": 355,
  "Knight Gallant": 355,
  "Knight Paladin": 375,
  "Knight Preceptor": 365,
  "Knight Rampager": 370,
  "Knight Valiant": 410,
  "Knight Warden": 375,
  "Knight Wardog": 130,
  "Kor'sarro Khan": 95,
  "Land Raider": 220,
  "Land Raider Crusader": 220,
  "Land Raider Redeemer": 270,
  "Land Speeder": 70,
  "Land Speeder Storm": 75,
  "Land Speeder Tornado": 80,
  "Lemartes": 90,
  "Librarian": 65,
  "Librarian in Phobos Armour": 70,
  "Librarian in Terminator Armour": 75,
  "Lictors": 60,
  "Lieutenant": 55,
  "Lieutenant in Phobos Armour": 55,
  "Lieutenant in Reiver Armour": 55,
  "Lieutenant with Combi-weapon": 85,
  "Lion El'Jonson": 300,
  "Logan Grimnar": 165,
  "Lukas the Trickster": 75,
  "Lysander": 130,
  "Maleceptor": 170,
  "Marneus Calgar": 140,
  "Marshal": 75,
  "Master of Sanctity": 80,
  "Master of the Chapter": 80,
  "Master of the Forge": 65,
  "Mawloc": 135,
  "Mephiston": 150,
  "Ministorum Priest": 40,
  "Missionary": 50,
  "Mortifiers": 70,
  "Morvenn Vahl": 200,
  "Mucolid Spores": 30,
  "Navigator": 60,
  "Neurogaunts": 45,
  "Neurolictor": 70,
  "Neurothropes": 80,
  "Neurotyrant": 105,
  "Njal Stormcaller": 120,
  "Norn Assimilator": 275,
  "Norn Emissary": 260,
  "Novitiates": 55,
  "Old One Eye": 150,
  "Outrider Squad": 60,
  "Palatine": 55,
  "Paragon Warsuits": 210,
  "Parasite of Mortrex": 85,
  "Pedro Kantor": 90,
  "Penitent Engines": 75,
  "Phobos Strike Team": 70,
  "Predator Annihilator": 135,
  "Predator Destructor": 140,
  "Primaris Ancient": 55,
  "Primaris Apothecary": 55,
  "Primaris Chaplain on Bike": 80,
  "Primaris Lieutenant": 65,
  "Primaris Sword Brethren": 100,
  "Primaris Techmarine": 55,
  "Primaris Watch Master": 90,
  "Psychophage": 110,
  "Pyrovores": 40,
  "Ragnar Blackmane": 130,
  "Raveners": 125,
  "Ravenwing Black Knights": 150,
  "Ravenwing Darkshroud": 105,
  "Ravenwing Land Speeder Vengeance": 105,
  "Razorback": 95,
  "Reclusiarch": 75,
  "Redemptor Dreadnought": 205,
  "Reiver Squad": 80,
  "Repentia Squad": 65,
  "Repulsor": 180,
  "Repulsor Executioner": 230,
  "Retributor Squad": 105,
  "Rhino": 75,
  "Ripper Swarms": 25,
  "Roboute Guilliman": 340,
  "Saint Celestine": 150,
  "Sammael": 150,
  "Sanctifiers": 120,
  "Sanguinary Ancient": 70,
  "Sanguinary Guard": 115,
  "Sanguinor": 140,
  "Scout Squad": 70,
  "Screamer-Killer": 125,
  "Seraphim Squad": 80,
  "Severus Agemman": 75,
  "Shrike": 100,
  "Sicarius": 100,
  "Sororitas Rhino": 75,
  "Spore Mines": 55,
  "Sporocyst": 145,
  "Sternguard Veteran Squad": 100,
  "Stone Crusher Carnifex": 110,
  "Storm Speeder Hailstrike": 115,
  "Storm Speeder Hammerstrike": 125,
  "Storm Speeder Thunderstrike": 135,
  "Stormhawk Interceptor": 155,
  "Stormraven Gunship": 280,
  "Stormtalon Gunship": 165,
  "Suppressor Squad": 75,
  "Swiftclaws": 65,
  "Tactical Squad": 140,
  "Techmarine": 55,
  "Termagants": 60,
  "Terminator Assault Squad": 180,
  "Terminator Squad": 170,
  "Tervigon": 160,
  "The Swarmlord": 220,
  "Thunderwolf Cavalry": 110,
  "Tigurius": 75,
  "Tor Garadon": 90,
  "Toxicrene": 150,
  "Triumph of Saint Katherine": 235,
  "Trygon": 140,
  "Trygon Prime": 155,
  "Tycho": 85,
  "Tyranid Prime": 65,
  "Tyranid Warriors With Melee Bio-weapons": 75,
  "Tyranid Warriors With Ranged Bio-weapons": 65,
  "Tyrannofex": 200,
  "Tyrant Guard": 80,
  "Ulrik the Slayer": 95,
  "Uriel Ventris": 95,
  "Vanguard Veteran Squad": 90,
  "Venerable Dreadnought": 100,
  "Venomthropes": 70,
  "Vindicare Assassin": 110,
  "Vindicator": 185,
  "Von Ryan's Leapers": 70,
  "Vulkan He'stan": 130,
  "Watch Captain": 80,
  "Watch Captain Artemis": 65,
  "Watch Master": 95,
  "Whirlwind": 190,
  "Winged Hive Tyrant": 170,
  "Winged Tyranid Warriors": 105,
  "Wolf Guard": 95,
  "Wolf Guard Terminators": 115,
  "Wulfen": 130,
  "Zephyrim Squad": 80,
  "Zoanthropes": 100,
  "Invader ATV": 60,
  "Invictor Tactical Warsuit": 125,
  "Tyrannocyte": 105,
  "Harridan": 610,
  "Knight Defender": 415,
  "Questoris Knight Magaera": 385,
  "Questoris Knight Styrix": 385,
  "Armiger Moirax": 150
};

// ══════════════════════════════════════════════════════════
// TAILLE D'UNITÉ (nombre de figurines par unité)
// 1 = personnage / véhicule / monstre solo
// ══════════════════════════════════════════════════════════
var MODEL_COUNT = {
  // Squads SM
  "Intercessor Squad": 5,
  "Assault Intercessor Squad": 5,
  "Heavy Intercessor Squad": 5,
  "Tactical Squad": 10,
  "Scout Squad": 5,
  "Crusader Squad": 10,
  "Primaris Crusader Squad": 10,
  "Blood Claws": 5,
  "Grey Hunters": 5,
  "Long Fangs": 5,
  "Bladeguard Veteran Squad": 3,
  "Sternguard Veteran Squad": 5,
  "Vanguard Veteran Squad": 5,
  "Terminator Squad": 5,
  "Terminator Assault Squad": 5,
  "Aggressor Squad": 3,
  "Eradicator Squad": 3,
  "Hellblaster Squad": 5,
  "Eliminator Squad": 3,
  "Infiltrator Squad": 5,
  "Incursor Squad": 5,
  "Reiver Squad": 5,
  "Suppressor Squad": 3,
  "Inceptor Squad": 3,
  "Outrider Squad": 3,
  "Assault Squad": 5,
  "Deathwatch Veterans": 5,
  "Deathwing Terminator Squad": 5,
  "Deathwing Knights": 5,
  "Wolf Guard Terminators": 5,
  "Wolf Guard": 5,
  "Wulfen": 5,
  "Swiftclaws": 5,
  "Thunderwolf Cavalry": 3,
  "Sanguinary Guard": 5,
  "Death Company Marines": 5,
  "Ravenwing Black Knights": 3,
  "Ravenwing Bike Squadron": 3,
  "Company Heroes": 5,
  "Victrix Honour Guard": 2,
  "Primaris Honour Guard": 2,
  "Inner Circle Companions": 4,
  "Primaris Sword Brethren": 5,
  "Helbrecht's Crusaders": 5,
  "Bike Squad": 3,
  "Veteran Intercessor Squad": 5,
  "Company Veterans": 5,
  // Tyranids squads
  "Gargoyles": 10,
  "Hormagaunts": 10,
  "Termagants": 10,
  "Neurogaunts": 10,
  "Tyranid Warriors With Melee Bio-weapons": 3,
  "Tyranid Warriors With Ranged Bio-weapons": 3,
  "Winged Tyranid Warriors": 3,
  "Von Ryan's Leapers": 3,
  "Genestealers": 10,
  "Tyrant Guard": 3,
  "Hive Guard": 3,
  "Zoanthropes": 3,
  "Venomthropes": 3,
  "Raveners": 3,
  "Ripper Swarms": 3,
  "Mucolid Spores": 3,
  "Spore Mines": 3,
  "Biovores": 3,
  "Pyrovores": 3,
  "Neurothropes": 3,
  "Neurotyrant": 3,
  "Tyranid Prime with Warriors": 6,
  "Barbgaunts": 5,
  // IK multi
  "Armiger Talon": 2,
  // IM squads
  "Battle Sisters Squad": 10,
  "Dominion Squad": 5,
  "Retributor Squad": 5,
  "Seraphim Squad": 5,
  "Zephyrim Squad": 5,
  "Celestian Sacresants": 5,
  "Repentia Squad": 5,
  "Novitiates": 10,
  "Arco-flagellants": 3,
  "Death Cult Assassins": 4,
  "Mortifiers": 2,
  "Penitent Engines": 2,
  "Paragon Warsuits": 3,
  "Aquila Kill Team": 5,
  "Inquisitorial Agents": 6,
  "Sanctifiers": 9,
  "Saint Celestine": 3,
  "Triumph of Saint Katherine": 1,
  "Grey Knights Terminator Squad": 5,
  // Personnages multi-socles
  "Chaplain Grimaldus": 4,
  "Thunderfire Cannon": 2
};
var getModelCount = function getModelCount(unitName) {
  var qty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return (MODEL_COUNT[unitName] || 1) * qty;
};
var UNITS_DB = {
  "SM": [{
    id: "sm001",
    name: "Captain",
    role: "QG",
    chapter: "Générique"
  }, {
    id: "sm002",
    name: "Captain in Gravis Armour",
    role: "QG",
    chapter: "Générique"
  }, {
    id: "sm003",
    name: "Captain in Phobos Armour",
    role: "QG",
    chapter: "Générique"
  }, {
    id: "sm004",
    name: "Captain in Terminator Armour",
    role: "QG",
    chapter: "Générique"
  }, {
    id: "sm005",
    name: "Librarian",
    role: "QG",
    chapter: "Générique",
    forbidden: ["Black Templars"]
  }, {
    id: "sm006",
    name: "Librarian in Phobos Armour",
    role: "QG",
    chapter: "Générique",
    forbidden: ["Black Templars"]
  }, {
    id: "sm007",
    name: "Librarian in Terminator Armour",
    role: "QG",
    chapter: "Générique",
    forbidden: ["Black Templars"]
  }, {
    id: "sm008",
    name: "Chaplain",
    role: "QG",
    chapter: "Générique"
  }, {
    id: "sm009",
    name: "Chaplain in Terminator Armour",
    role: "QG",
    chapter: "Générique"
  }, {
    id: "sm010",
    name: "Chaplain on Bike",
    role: "QG",
    chapter: "Générique"
  }, {
    id: "sm011",
    name: "Apothecary",
    role: "QG",
    chapter: "Générique",
    forbidden: ["Space Wolves"]
  }, {
    id: "sm012",
    name: "Apothecary Biologis",
    role: "QG",
    chapter: "Générique"
  }, {
    id: "sm013",
    name: "Techmarine",
    role: "QG",
    chapter: "Générique"
  }, {
    id: "sm014",
    name: "Lieutenant",
    role: "QG",
    chapter: "Générique"
  }, {
    id: "sm015",
    name: "Lieutenant in Phobos Armour",
    role: "QG",
    chapter: "Générique"
  }, {
    id: "sm016",
    name: "Lieutenant in Reiver Armour",
    role: "QG",
    chapter: "Générique"
  }, {
    id: "sm017",
    name: "Master of the Forge",
    role: "QG",
    chapter: "Générique"
  }, {
    id: "sm018",
    name: "Chief Apothecary",
    role: "QG",
    chapter: "Générique"
  }, {
    id: "sm019",
    name: "Master of Sanctity",
    role: "QG",
    chapter: "Générique"
  }, {
    id: "sm020",
    name: "Roboute Guilliman",
    role: "QG",
    chapter: "Ultramarines"
  }, {
    id: "sm021",
    name: "Marneus Calgar",
    role: "QG",
    chapter: "Ultramarines"
  }, {
    id: "sm022",
    name: "Tigurius",
    role: "QG",
    chapter: "Ultramarines"
  }, {
    id: "sm023",
    name: "Uriel Ventris",
    role: "QG",
    chapter: "Ultramarines"
  }, {
    id: "sm_titus",
    name: "Captain Titus",
    role: "QG",
    chapter: "Ultramarines"
  }, {
    id: "sm024",
    name: "Sicarius",
    role: "QG",
    chapter: "Ultramarines"
  }, {
    id: "sm025",
    name: "Severus Agemman",
    role: "QG",
    chapter: "Ultramarines"
  }, {
    id: "sm026",
    name: "High Marshal Helbrecht",
    role: "QG",
    chapter: "Black Templars"
  }, {
    id: "sm027",
    name: "Chaplain Grimaldus",
    role: "QG",
    chapter: "Black Templars"
  }, {
    id: "sm028",
    name: "Emperor's Champion",
    role: "Élite",
    chapter: "Black Templars"
  }, {
    id: "sm029",
    name: "Castellan",
    role: "QG",
    chapter: "Black Templars"
  }, {
    id: "sm030",
    name: "Marshal",
    role: "QG",
    chapter: "Black Templars"
  }, {
    id: "sm031",
    name: "Reclusiarch",
    role: "QG",
    chapter: "Black Templars"
  }, {
    id: "sm031b",
    name: "Ancient",
    role: "Élite",
    chapter: "Black Templars"
  }, {
    id: "sm031c",
    name: "Execrator",
    role: "QG",
    chapter: "Black Templars"
  }, {
    id: "sm032",
    name: "Ezekiel",
    role: "QG",
    chapter: "Dark Angels"
  }, {
    id: "sm033",
    name: "Azrael",
    role: "QG",
    chapter: "Dark Angels"
  }, {
    id: "sm034",
    name: "Asmodai",
    role: "QG",
    chapter: "Dark Angels"
  }, {
    id: "sm035",
    name: "Belial",
    role: "QG",
    chapter: "Dark Angels"
  }, {
    id: "sm036",
    name: "Sammael",
    role: "QG",
    chapter: "Dark Angels"
  }, {
    id: "sm160",
    name: "Lion El'Jonson",
    role: "QG",
    chapter: "Dark Angels"
  }, {
    id: "sm037",
    name: "Mephiston",
    role: "QG",
    chapter: "Blood Angels"
  }, {
    id: "sm038",
    name: "Commander Dante",
    role: "QG",
    chapter: "Blood Angels"
  }, {
    id: "sm039",
    name: "Astorath",
    role: "QG",
    chapter: "Blood Angels"
  }, {
    id: "sm040",
    name: "Lemartes",
    role: "QG",
    chapter: "Blood Angels"
  }, {
    id: "sm041",
    name: "Sanguinor",
    role: "QG",
    chapter: "Blood Angels"
  }, {
    id: "sm042",
    name: "Tycho",
    role: "QG",
    chapter: "Blood Angels"
  }, {
    id: "sm043",
    name: "Ragnar Blackmane",
    role: "QG",
    chapter: "Space Wolves"
  }, {
    id: "sm044",
    name: "Logan Grimnar",
    role: "QG",
    chapter: "Space Wolves"
  }, {
    id: "sm045",
    name: "Njal Stormcaller",
    role: "QG",
    chapter: "Space Wolves"
  }, {
    id: "sm046",
    name: "Ulrik the Slayer",
    role: "QG",
    chapter: "Space Wolves"
  }, {
    id: "sm047",
    name: "Bjorn the Fell-Handed",
    role: "Lourd",
    chapter: "Space Wolves"
  }, {
    id: "sm048",
    name: "Pedro Kantor",
    role: "QG",
    chapter: "Crimson Fists"
  }, {
    id: "sm049",
    name: "Lysander",
    role: "QG",
    chapter: "Imperial Fists"
  }, {
    id: "sm050",
    name: "Tor Garadon",
    role: "QG",
    chapter: "Imperial Fists"
  }, {
    id: "sm051",
    name: "Shrike",
    role: "QG",
    chapter: "Raven Guard"
  }, {
    id: "sm052",
    name: "Aethon Shaan",
    role: "QG",
    chapter: "Raven Guard"
  }, {
    id: "sm053",
    name: "Vulkan He'stan",
    role: "QG",
    chapter: "Salamanders"
  }, {
    id: "sm054",
    name: "Kor'sarro Khan",
    role: "QG",
    chapter: "White Scars"
  }, {
    id: "sm055",
    name: "Iron Father Feirros",
    role: "QG",
    chapter: "Iron Hands"
  }, {
    id: "sm056",
    name: "Kayvaan Shrike",
    role: "QG",
    chapter: "Raven Guard"
  }, {
    id: "sm060",
    name: "Intercessor Squad",
    role: "Troupes",
    chapter: "Générique"
  }, {
    id: "sm061",
    name: "Assault Intercessor Squad",
    role: "Troupes",
    chapter: "Générique"
  }, {
    id: "sm062",
    name: "Scout Squad",
    role: "Troupes",
    chapter: "Générique",
    forbidden: ["Deathwatch"]
  }, {
    id: "sm063",
    name: "Tactical Squad",
    role: "Troupes",
    chapter: "Générique",
    forbidden: ["Deathwatch", "Space Wolves"]
  }, {
    id: "sm064",
    name: "Crusader Squad",
    role: "Troupes",
    chapter: "Black Templars"
  }, {
    id: "sm065",
    name: "Infiltrator Squad",
    role: "Troupes",
    chapter: "Générique"
  }, {
    id: "sm066",
    name: "Incursor Squad",
    role: "Troupes",
    chapter: "Générique"
  }, {
    id: "sm070",
    name: "Terminator Squad",
    role: "Élite",
    chapter: "Générique",
    forbidden: ["Black Templars", "Deathwatch"]
  }, {
    id: "sm071",
    name: "Terminator Assault Squad",
    role: "Élite",
    chapter: "Générique",
    forbidden: ["Deathwatch"]
  }, {
    id: "sm072",
    name: "Bladeguard Veteran Squad",
    role: "Élite",
    chapter: "Générique"
  }, {
    id: "sm073",
    name: "Sternguard Veteran Squad",
    role: "Élite",
    chapter: "Générique",
    forbidden: ["Black Templars"]
  }, {
    id: "sm074",
    name: "Vanguard Veteran Squad",
    role: "Élite",
    chapter: "Générique"
  }, {
    id: "sm075",
    name: "Hellblaster Squad",
    role: "Élite",
    chapter: "Générique"
  }, {
    id: "sm076",
    name: "Aggressor Squad",
    role: "Élite",
    chapter: "Générique"
  }, {
    id: "sm077",
    name: "Reiver Squad",
    role: "Élite",
    chapter: "Générique"
  }, {
    id: "sm078",
    name: "Eliminator Squad",
    role: "Élite",
    chapter: "Générique"
  }, {
    id: "sm079",
    name: "Suppressor Squad",
    role: "Élite",
    chapter: "Générique"
  }, {
    id: "sm080",
    name: "Eradicator Squad",
    role: "Élite",
    chapter: "Générique"
  }, {
    id: "sm081",
    name: "Centurion Assault Squad",
    role: "Élite",
    chapter: "Générique"
  }, {
    id: "sm082",
    name: "Dreadnought",
    role: "Élite",
    chapter: "Générique"
  }, {
    id: "sm083",
    name: "Venerable Dreadnought",
    role: "Élite",
    chapter: "Générique"
  }, {
    id: "sm084",
    name: "Redemptor Dreadnought",
    role: "Élite",
    chapter: "Générique"
  }, {
    id: "sm085",
    name: "Brutalis Dreadnought",
    role: "Élite",
    chapter: "Générique"
  }, {
    id: "sm086",
    name: "Ballistus Dreadnought",
    role: "Élite",
    chapter: "Générique"
  }, {
    id: "sm087",
    name: "Ironclad Dreadnought",
    role: "Élite",
    chapter: "Générique"
  }, {
    id: "sm088",
    name: "Company Ancient",
    role: "Élite",
    chapter: "Générique"
  }, {
    id: "sm089",
    name: "Company Champion",
    role: "Élite",
    chapter: "Générique"
  }, {
    id: "sm090",
    name: "Judiciar",
    role: "Élite",
    chapter: "Générique"
  }, {
    id: "sm091",
    name: "Centurion Assault Squad",
    role: "Élite",
    chapter: "Générique"
  }, {
    id: "sm092",
    name: "Death Company Marines",
    role: "Élite",
    chapter: "Blood Angels"
  }, {
    id: "sm093",
    name: "Death Company Dreadnought",
    role: "Élite",
    chapter: "Blood Angels"
  }, {
    id: "sm094",
    name: "Sanguinary Guard",
    role: "Élite",
    chapter: "Blood Angels"
  }, {
    id: "sm095",
    name: "Sanguinary Ancient",
    role: "Élite",
    chapter: "Blood Angels"
  }, {
    id: "sm096",
    name: "Wolf Guard",
    role: "Élite",
    chapter: "Space Wolves"
  }, {
    id: "sm097",
    name: "Wolf Guard Terminators",
    role: "Élite",
    chapter: "Space Wolves"
  }, {
    id: "sm098",
    name: "Wulfen",
    role: "Élite",
    chapter: "Space Wolves"
  }, {
    id: "sm099",
    name: "Deathwing Knights",
    role: "Élite",
    chapter: "Dark Angels"
  }, {
    id: "sm100",
    name: "Inner Circle Companions",
    role: "Élite",
    chapter: "Dark Angels"
  }, {
    id: "sm110",
    name: "Inceptor Squad",
    role: "Rapide",
    chapter: "Générique"
  }, {
    id: "sm111",
    name: "Outrider Squad",
    role: "Rapide",
    chapter: "Générique"
  }, {
    id: "sm112",
    name: "Assault Squad",
    role: "Rapide",
    chapter: "Générique",
    forbidden: ["Deathwatch"]
  }, {
    id: "sm113",
    name: "Bike Squad",
    role: "Rapide",
    chapter: "Générique"
  }, {
    id: "sm114",
    name: "Attack Bike Squad",
    role: "Rapide",
    chapter: "Générique",
    forbidden: ["Deathwatch"]
  }, {
    id: "sm115",
    name: "Land Speeder",
    role: "Rapide",
    chapter: "Générique"
  }, {
    id: "sm116",
    name: "Land Speeder Storm",
    role: "Rapide",
    chapter: "Générique",
    forbidden: ["Deathwatch"]
  }, {
    id: "sm117",
    name: "Land Speeder Tornado",
    role: "Rapide",
    chapter: "Générique"
  }, {
    id: "sm118",
    name: "Stormhawk Interceptor",
    role: "Rapide",
    chapter: "Générique"
  }, {
    id: "sm119",
    name: "Stormtalon Gunship",
    role: "Rapide",
    chapter: "Générique"
  }, {
    id: "sm120",
    name: "Stormraven Gunship",
    role: "Rapide",
    chapter: "Générique"
  }, {
    id: "sm121",
    name: "Storm Speeder Hailstrike",
    role: "Rapide",
    chapter: "Générique"
  }, {
    id: "sm122",
    name: "Storm Speeder Hammerstrike",
    role: "Rapide",
    chapter: "Générique"
  }, {
    id: "sm123",
    name: "Storm Speeder Thunderstrike",
    role: "Rapide",
    chapter: "Générique"
  }, {
    id: "sm124",
    name: "Swiftclaws",
    role: "Rapide",
    chapter: "Space Wolves"
  }, {
    id: "sm125",
    name: "Ravenwing Black Knights",
    role: "Rapide",
    chapter: "Dark Angels"
  }, {
    id: "sm126",
    name: "Ravenwing Darkshroud",
    role: "Rapide",
    chapter: "Dark Angels"
  }, {
    id: "sm127",
    name: "Ravenwing Land Speeder Vengeance",
    role: "Rapide",
    chapter: "Dark Angels"
  }, {
    id: "sm130",
    name: "Devastator Squad",
    role: "Lourd",
    chapter: "Générique",
    forbidden: ["Deathwatch", "Space Wolves"]
  }, {
    id: "sm131",
    name: "Centurion Devastator Squad",
    role: "Lourd",
    chapter: "Générique"
  }, {
    id: "sm132",
    name: "Predator Annihilator",
    role: "Lourd",
    chapter: "Générique"
  }, {
    id: "sm133",
    name: "Predator Destructor",
    role: "Lourd",
    chapter: "Générique"
  }, {
    id: "sm134",
    name: "Land Raider",
    role: "Lourd",
    chapter: "Générique"
  }, {
    id: "sm135",
    name: "Land Raider Crusader",
    role: "Lourd",
    chapter: "Générique"
  }, {
    id: "sm136",
    name: "Land Raider Redeemer",
    role: "Lourd",
    chapter: "Générique"
  }, {
    id: "sm137",
    name: "Vindicator",
    role: "Lourd",
    chapter: "Générique"
  }, {
    id: "sm138",
    name: "Whirlwind",
    role: "Lourd",
    chapter: "Générique"
  }, {
    id: "sm139",
    name: "Gladiator Lancer",
    role: "Lourd",
    chapter: "Générique",
    forbidden: ["Black Templars"]
  }, {
    id: "sm140",
    name: "Gladiator Reaper",
    role: "Lourd",
    chapter: "Générique",
    forbidden: ["Black Templars"]
  }, {
    id: "sm141",
    name: "Gladiator Valiant",
    role: "Lourd",
    chapter: "Générique",
    forbidden: ["Black Templars"]
  }, {
    id: "sm142",
    name: "Repulsor Executioner",
    role: "Lourd",
    chapter: "Générique",
    forbidden: ["Black Templars"]
  }, {
    id: "sm143",
    name: "Astraeus Super-heavy Tank",
    role: "Lourd",
    chapter: "Générique"
  }, {
    id: "sm150",
    name: "Rhino",
    role: "Transport",
    chapter: "Générique"
  }, {
    id: "sm151",
    name: "Razorback",
    role: "Transport",
    chapter: "Générique"
  }, {
    id: "sm152",
    name: "Drop Pod",
    role: "Transport",
    chapter: "Générique"
  }, {
    id: "sm153",
    name: "Impulsor",
    role: "Transport",
    chapter: "Générique",
    forbidden: ["Black Templars"]
  }, {
    id: "sm154",
    name: "Repulsor",
    role: "Transport",
    chapter: "Générique",
    forbidden: ["Black Templars"]
  },
  // ── Génériques manquants ──────────────────────────────
  {
    id: "sm200",
    name: "Lieutenant with Combi-weapon",
    role: "QG",
    chapter: "Générique"
  }, {
    id: "sm201",
    name: "Master of the Chapter",
    role: "QG",
    chapter: "Générique"
  }, {
    id: "sm202",
    name: "Company Heroes",
    role: "QG",
    chapter: "Générique"
  }, {
    id: "sm203",
    name: "Primaris Ancient",
    role: "QG",
    chapter: "Générique"
  }, {
    id: "sm204",
    name: "Ancient in Terminator Armour",
    role: "QG",
    chapter: "Générique"
  }, {
    id: "sm205",
    name: "Ancient on Bike",
    role: "QG",
    chapter: "Générique"
  }, {
    id: "sm206",
    name: "Primaris Chaplain on Bike",
    role: "QG",
    chapter: "Générique"
  }, {
    id: "sm207",
    name: "Primaris Techmarine",
    role: "QG",
    chapter: "Générique"
  }, {
    id: "sm208",
    name: "Primaris Apothecary",
    role: "QG",
    chapter: "Générique"
  }, {
    id: "sm209",
    name: "Sergeant Chronus",
    role: "QG",
    chapter: "Ultramarines"
  }, {
    id: "sm210",
    name: "Sergeant Telion",
    role: "Élite",
    chapter: "Ultramarines"
  }, {
    id: "sm211",
    name: "Bladeguard Ancient",
    role: "QG",
    chapter: "Générique"
  }, {
    id: "sm212",
    name: "Primaris Lieutenant",
    role: "QG",
    chapter: "Générique"
  },
  // ── Troupes manquants ─────────────────────────────────
  {
    id: "sm220",
    name: "Heavy Intercessor Squad",
    role: "Troupes",
    chapter: "Générique"
  }, {
    id: "sm221",
    name: "Phobos Strike Team",
    role: "Troupes",
    chapter: "Générique"
  },
  // ── Élite manquants ───────────────────────────────────
  {
    id: "sm230",
    name: "Centurion Assault Squad",
    role: "Élite",
    chapter: "Générique"
  }, {
    id: "sm231",
    name: "Deathwing Terminator Squad",
    role: "Élite",
    chapter: "Dark Angels"
  }, {
    id: "sm232",
    name: "Wolf Guard Battle Leader",
    role: "QG",
    chapter: "Space Wolves"
  }, {
    id: "sm233",
    name: "Wolf Guard Battle Leader on Thunderwolf",
    role: "QG",
    chapter: "Space Wolves"
  }, {
    id: "sm234",
    name: "Thunderwolf Cavalry",
    role: "Élite",
    chapter: "Space Wolves"
  }, {
    id: "sm235",
    name: "Blood Claws",
    role: "Troupes",
    chapter: "Space Wolves"
  }, {
    id: "sm236",
    name: "Grey Hunters",
    role: "Troupes",
    chapter: "Space Wolves"
  }, {
    id: "sm237",
    name: "Long Fangs",
    role: "Lourd",
    chapter: "Space Wolves"
  }, {
    id: "sm238",
    name: "Fenrisian Wolf Pack",
    role: "Rapide",
    chapter: "Space Wolves"
  }, {
    id: "sm239",
    name: "Lukas the Trickster",
    role: "QG",
    chapter: "Space Wolves"
  }, {
    id: "sm240",
    name: "Arjac Rockfist",
    role: "QG",
    chapter: "Space Wolves"
  }, {
    id: "sm241",
    name: "Primaris Crusader Squad",
    role: "Troupes",
    chapter: "Black Templars"
  }, {
    id: "sm242",
    name: "Primaris Sword Brethren",
    role: "Élite",
    chapter: "Black Templars"
  },
  // ── Rapide manquants ──────────────────────────────────
  {
    id: "sm250",
    name: "Land Speeder Tempest",
    role: "Rapide",
    chapter: "Générique"
  }, {
    id: "sm251",
    name: "Invader ATV",
    role: "Rapide",
    chapter: "Générique"
  }, {
    id: "sm252",
    name: "Inceptor Squad",
    role: "Rapide",
    chapter: "Générique"
  },
  // ── Lourd manquants ───────────────────────────────────
  {
    id: "sm260",
    name: "Devastator Squad",
    role: "Lourd",
    chapter: "Générique",
    forbidden: ["Deathwatch", "Space Wolves"]
  }, {
    id: "sm261",
    name: "Centurion Devastator Squad",
    role: "Lourd",
    chapter: "Générique"
  }, {
    id: "sm262",
    name: "Whirlwind Hyperios",
    role: "Lourd",
    chapter: "Générique"
  }, {
    id: "sm263",
    name: "Hunter",
    role: "Lourd",
    chapter: "Générique"
  }, {
    id: "sm264",
    name: "Stalker",
    role: "Lourd",
    chapter: "Générique"
  }, {
    id: "sm265",
    name: "Thunderfire Cannon",
    role: "Lourd",
    chapter: "Générique"
  }, {
    id: "sm266",
    name: "Executioner",
    role: "Lourd",
    chapter: "Générique"
  },
  // ── Dark Angels manquants ─────────────────────────────
  {
    id: "sm270",
    name: "Interrogator-Chaplain",
    role: "QG",
    chapter: "Dark Angels"
  }, {
    id: "sm271",
    name: "Ravenwing Apothecary",
    role: "QG",
    chapter: "Dark Angels"
  }, {
    id: "sm272",
    name: "Ravenwing Ancient",
    role: "QG",
    chapter: "Dark Angels"
  }, {
    id: "sm273",
    name: "Ravenwing Talonmaster",
    role: "QG",
    chapter: "Dark Angels"
  }, {
    id: "sm274",
    name: "Deathwing Ancient",
    role: "QG",
    chapter: "Dark Angels"
  }, {
    id: "sm275",
    name: "Deathwing Champion",
    role: "QG",
    chapter: "Dark Angels"
  }, {
    id: "sm276",
    name: "Deathwing Command Squad",
    role: "Élite",
    chapter: "Dark Angels"
  }, {
    id: "sm277",
    name: "Ravenwing Command Squad",
    role: "Élite",
    chapter: "Dark Angels"
  }, {
    id: "sm278",
    name: "Ravenwing Bike Squadron",
    role: "Rapide",
    chapter: "Dark Angels"
  },
  // ── Blood Angels manquants ────────────────────────────
  {
    id: "sm280",
    name: "The Sanguinor",
    role: "QG",
    chapter: "Blood Angels"
  }, {
    id: "sm281",
    name: "Brother Corbulo",
    role: "QG",
    chapter: "Blood Angels"
  }, {
    id: "sm282",
    name: "Gabriel Seth",
    role: "QG",
    chapter: "Blood Angels"
  }, {
    id: "sm283",
    name: "Flesh Tearers",
    role: "Troupes",
    chapter: "Blood Angels"
  }, {
    id: "sm284",
    name: "Primaris Chaplain",
    role: "QG",
    chapter: "Blood Angels"
  },
  // ── Ultramarines manquants ────────────────────────────
  {
    id: "sm290",
    name: "Chief Librarian Tigurius",
    role: "QG",
    chapter: "Ultramarines"
  }, {
    id: "sm291",
    name: "Primaris Honour Guard",
    role: "Élite",
    chapter: "Ultramarines"
  }, {
    id: "sm292",
    name: "Victrix Honour Guard",
    role: "Élite",
    chapter: "Ultramarines"
  }, {
    id: "sm293",
    name: "Primaris Vindicator",
    role: "Lourd",
    chapter: "Ultramarines"
  },
  // ── Deathwatch ────────────────────────────────────────
  {
    id: "sm300",
    name: "Deathwatch Watch Master",
    role: "QG",
    chapter: "Deathwatch"
  }, {
    id: "sm301",
    name: "Deathwatch Kill Team",
    role: "Élite",
    chapter: "Deathwatch"
  }, {
    id: "sm302",
    name: "Deathwatch Veterans",
    role: "Élite",
    chapter: "Deathwatch"
  }, {
    id: "sm303",
    name: "Deathwatch Dreadnought",
    role: "Élite",
    chapter: "Deathwatch"
  }, {
    id: "sm304",
    name: "Primaris Watch Master",
    role: "QG",
    chapter: "Deathwatch"
  }, {
    id: "sm305",
    name: "Watch Captain",
    role: "QG",
    chapter: "Deathwatch"
  }, {
    id: "sm306",
    name: "Watch Captain in Terminator Armour",
    role: "QG",
    chapter: "Deathwatch"
  },
  // ── Iron Hands ────────────────────────────────────────
  {
    id: "sm310",
    name: "Iron Father Feirros",
    role: "QG",
    chapter: "Iron Hands"
  }, {
    id: "sm311",
    name: "Forge Master",
    role: "QG",
    chapter: "Iron Hands"
  },
  // ── Raven Guard ───────────────────────────────────────
  {
    id: "sm320",
    name: "Lias Issodon",
    role: "QG",
    chapter: "Raven Guard"
  },
  // ── Salamanders ───────────────────────────────────────
  {
    id: "sm330",
    name: "Adrax Agatone",
    role: "QG",
    chapter: "Salamanders"
  },
  // ── White Scars ───────────────────────────────────────
  {
    id: "sm340",
    name: "Kor'sarro Khan on Moondrakkan",
    role: "QG",
    chapter: "White Scars"
  },
  // ── Imperial Fists ────────────────────────────────────
  {
    id: "sm350",
    name: "Darnath Lysander",
    role: "QG",
    chapter: "Imperial Fists"
  },
  // ── Transports manquants ──────────────────────────────
  {
    id: "sm360",
    name: "Land Raider Terminus Ultra",
    role: "Transport",
    chapter: "Générique"
  }, {
    id: "sm361",
    name: "Thunderhawk Gunship",
    role: "Transport",
    chapter: "Générique"
  }],
  "TY": [{
    id: "ty001",
    name: "Hive Tyrant",
    role: "QG"
  }, {
    id: "ty002",
    name: "Winged Hive Tyrant",
    role: "QG"
  }, {
    id: "ty003",
    name: "The Swarmlord",
    role: "QG"
  }, {
    id: "ty004",
    name: "Tervigon",
    role: "QG"
  }, {
    id: "ty005",
    name: "Broodlord",
    role: "QG"
  }, {
    id: "ty006",
    name: "Neurotyrant",
    role: "QG"
  }, {
    id: "ty007",
    name: "Norn Emissary",
    role: "QG"
  }, {
    id: "ty008",
    name: "Norn Assimilator",
    role: "QG"
  }, {
    id: "ty009",
    name: "Parasite of Mortrex",
    role: "QG"
  }, {
    id: "ty010",
    name: "Termagants",
    role: "Troupes"
  }, {
    id: "ty011",
    name: "Hormagaunts",
    role: "Troupes"
  }, {
    id: "ty012",
    name: "Ripper Swarms",
    role: "Troupes"
  }, {
    id: "ty013",
    name: "Neurogaunts",
    role: "Troupes"
  }, {
    id: "ty020",
    name: "Genestealers",
    role: "Élite"
  }, {
    id: "ty021",
    name: "Tyranid Warriors With Melee Bio-weapons",
    role: "Élite"
  }, {
    id: "ty022",
    name: "Tyranid Warriors With Ranged Bio-weapons",
    role: "Élite"
  }, {
    id: "ty023",
    name: "Lictors",
    role: "Élite"
  }, {
    id: "ty024",
    name: "Deathleaper",
    role: "Élite"
  }, {
    id: "ty025",
    name: "Zoanthropes",
    role: "Élite"
  }, {
    id: "ty026",
    name: "Neurothropes",
    role: "Élite"
  }, {
    id: "ty027",
    name: "Venomthropes",
    role: "Élite"
  }, {
    id: "ty028",
    name: "Pyrovores",
    role: "Élite"
  }, {
    id: "ty029",
    name: "Tyrant Guard",
    role: "Élite"
  }, {
    id: "ty030",
    name: "Hive Guard",
    role: "Élite"
  }, {
    id: "ty031",
    name: "Von Ryan's Leapers",
    role: "Élite"
  }, {
    id: "ty032",
    name: "Barbgaunts",
    role: "Élite"
  }, {
    id: "ty033",
    name: "Neurolictor",
    role: "Élite"
  }, {
    id: "ty034",
    name: "Winged Tyranid Warriors",
    role: "Élite"
  }, {
    id: "ty040",
    name: "Gargoyles",
    role: "Rapide"
  }, {
    id: "ty041",
    name: "Raveners",
    role: "Rapide"
  }, {
    id: "ty042",
    name: "Harpy",
    role: "Rapide"
  }, {
    id: "ty043",
    name: "Hive Crone",
    role: "Rapide"
  }, {
    id: "ty044",
    name: "Spore Mines",
    role: "Rapide"
  }, {
    id: "ty045",
    name: "Mucolid Spores",
    role: "Rapide"
  }, {
    id: "ty050",
    name: "Carnifex",
    role: "Lourd"
  }, {
    id: "ty051",
    name: "Screamer-Killer",
    role: "Lourd"
  }, {
    id: "ty052",
    name: "Old One Eye",
    role: "Lourd"
  }, {
    id: "ty053",
    name: "Trygon",
    role: "Lourd"
  }, {
    id: "ty054",
    name: "Trygon Prime",
    role: "Lourd"
  }, {
    id: "ty055",
    name: "Mawloc",
    role: "Lourd"
  }, {
    id: "ty056",
    name: "Tyrannofex",
    role: "Lourd"
  }, {
    id: "ty057",
    name: "Exocrine",
    role: "Lourd"
  }, {
    id: "ty058",
    name: "Haruspex",
    role: "Lourd"
  }, {
    id: "ty059",
    name: "Toxicrene",
    role: "Lourd"
  }, {
    id: "ty060",
    name: "Biovores",
    role: "Lourd"
  }, {
    id: "ty061",
    name: "Maleceptor",
    role: "Lourd"
  }, {
    id: "ty062",
    name: "Psychophage",
    role: "Lourd"
  }, {
    id: "ty063",
    name: "Stone Crusher Carnifex",
    role: "Lourd"
  }, {
    id: "ty064",
    name: "Sporocyst",
    role: "Lourd"
  }, {
    id: "ty065",
    name: "Hierophant Bio-Titan",
    role: "Lourd"
  }, {
    id: "ty066",
    name: "Dimachaeron",
    role: "Lourd"
  },
  // ── Tyranides manquants ───────────────────────────────
  {
    id: "ty070",
    name: "The Norn Queen",
    role: "QG"
  }, {
    id: "ty071",
    name: "Tyranid Prime",
    role: "QG"
  }, {
    id: "ty072",
    name: "Winged Tyranid Prime",
    role: "QG"
  }, {
    id: "ty073",
    name: "Tyranid Prime with Warriors",
    role: "QG"
  }, {
    id: "ty074",
    name: "Neurospike Swarm",
    role: "Troupes"
  }, {
    id: "ty075",
    name: "Leapers",
    role: "Rapide"
  }, {
    id: "ty076",
    name: "Sky-Slasher Swarms",
    role: "Rapide"
  }, {
    id: "ty077",
    name: "Spore Mine Cluster",
    role: "Rapide"
  }, {
    id: "ty078",
    name: "Endless Multitude",
    role: "Troupes"
  }],
  "IK": [{
    id: "ik001",
    name: "Armiger Warglaive",
    role: "Armiger"
  }, {
    id: "ik002",
    name: "Armiger Helverin",
    role: "Armiger"
  }, {
    id: "ik003",
    name: "Moirax",
    role: "Armiger"
  }, {
    id: "ik010",
    name: "Knight Paladin",
    role: "Chevalier Questoris"
  }, {
    id: "ik011",
    name: "Knight Errant",
    role: "Chevalier Questoris"
  }, {
    id: "ik012",
    name: "Knight Crusader",
    role: "Chevalier Questoris"
  }, {
    id: "ik013",
    name: "Knight Gallant",
    role: "Chevalier Questoris"
  }, {
    id: "ik014",
    name: "Knight Warden",
    role: "Chevalier Questoris"
  }, {
    id: "ik015",
    name: "Knight Preceptor",
    role: "Chevalier Questoris"
  }, {
    id: "ik016",
    name: "Knight Wardog",
    role: "Chevalier Questoris"
  }, {
    id: "ik020",
    name: "Knight Castellan",
    role: "Chevalier Dominus"
  }, {
    id: "ik021",
    name: "Knight Valiant",
    role: "Chevalier Dominus"
  }, {
    id: "ik030",
    name: "Cerastus Knight Castigator",
    role: "Chevalier Cerastus"
  }, {
    id: "ik031",
    name: "Cerastus Knight Acheron",
    role: "Chevalier Cerastus"
  }, {
    id: "ik032",
    name: "Cerastus Knight Lancer",
    role: "Chevalier Cerastus"
  }, {
    id: "ik033",
    name: "Cerastus Knight Atrapos",
    role: "Chevalier Cerastus"
  }, {
    id: "ik035",
    name: "Acastus Knight Porphyrion",
    role: "Chevalier Acastus"
  }, {
    id: "ik036",
    name: "Acastus Knight Asterius",
    role: "Chevalier Acastus"
  }, {
    id: "ik040",
    name: "Canis Rex",
    role: "Seigneur de guerre"
  }, {
    id: "ik041",
    name: "Gerantius",
    role: "Seigneur de guerre"
  },
  // ── Chevaliers manquants ──────────────────────────────
  {
    id: "ik050",
    name: "Knight Desecrator",
    role: "Chevalier Questoris"
  }, {
    id: "ik051",
    name: "Knight Rampager",
    role: "Chevalier Questoris"
  }, {
    id: "ik052",
    name: "Knight Styrix",
    role: "Chevalier Questoris"
  }, {
    id: "ik053",
    name: "Knight Magaera",
    role: "Chevalier Questoris"
  }, {
    id: "ik054",
    name: "Armiger Talon",
    role: "Armiger"
  }, {
    id: "ik055",
    name: "Knight Abominant",
    role: "Chevalier Questoris"
  }, {
    id: "ik056",
    name: "Knight Tyrant",
    role: "Chevalier Dominus"
  }],
  "IM": [{
    id: "im001",
    name: "Callidus Assassin",
    role: "QG"
  }, {
    id: "im002",
    name: "Culexus Assassin",
    role: "QG"
  }, {
    id: "im003",
    name: "Eversor Assassin",
    role: "QG"
  }, {
    id: "im004",
    name: "Vindicare Assassin",
    role: "QG"
  }, {
    id: "im005",
    name: "Inquisitor",
    role: "QG"
  }, {
    id: "im006",
    name: "Inquisitor Coteaz",
    role: "QG"
  }, {
    id: "im007",
    name: "Inquisitor Draxus",
    role: "QG"
  }, {
    id: "im008",
    name: "Inquisitor Greyfax",
    role: "QG"
  }, {
    id: "im009",
    name: "Ministorum Priest",
    role: "QG"
  }, {
    id: "im010",
    name: "Navigator",
    role: "QG"
  }, {
    id: "im011",
    name: "Watch Captain Artemis",
    role: "QG"
  }, {
    id: "im012",
    name: "Watch Master",
    role: "QG"
  }, {
    id: "im013",
    name: "Aquila Kill Team",
    role: "Troupes"
  }, {
    id: "im014",
    name: "Deathwatch Kill Team",
    role: "Troupes"
  }, {
    id: "im015",
    name: "Grey Knights Terminator Squad",
    role: "Élite"
  }, {
    id: "im016",
    name: "Inquisitorial Agents",
    role: "Troupes"
  }, {
    id: "im017",
    name: "Sanctifiers",
    role: "Élite"
  },
  // ── Sœurs de Bataille ──────────────────────────────
  {
    id: "im018",
    name: "Morvenn Vahl",
    role: "QG"
  }, {
    id: "im019",
    name: "Saint Celestine",
    role: "QG"
  }, {
    id: "im020",
    name: "Junith Eruita",
    role: "QG"
  }, {
    id: "im021",
    name: "Triumph of Saint Katherine",
    role: "QG"
  }, {
    id: "im022",
    name: "Canoness",
    role: "QG"
  }, {
    id: "im023",
    name: "Palatine",
    role: "QG"
  }, {
    id: "im024",
    name: "Dialogus",
    role: "QG"
  }, {
    id: "im025",
    name: "Hospitaller",
    role: "QG"
  }, {
    id: "im026",
    name: "Imagifier",
    role: "QG"
  }, {
    id: "im027",
    name: "Missionary",
    role: "QG"
  }, {
    id: "im028",
    name: "Battle Sisters Squad",
    role: "Troupes"
  }, {
    id: "im029",
    name: "Dominion Squad",
    role: "Troupes"
  }, {
    id: "im030",
    name: "Celestian Sacresants",
    role: "Élite"
  }, {
    id: "im031",
    name: "Repentia Squad",
    role: "Élite"
  }, {
    id: "im032",
    name: "Arco-flagellants",
    role: "Élite"
  }, {
    id: "im033",
    name: "Death Cult Assassins",
    role: "Élite"
  }, {
    id: "im034",
    name: "Mortifiers",
    role: "Élite"
  }, {
    id: "im035",
    name: "Penitent Engines",
    role: "Élite"
  }, {
    id: "im036",
    name: "Paragon Warsuits",
    role: "Élite"
  }, {
    id: "im037",
    name: "Retributor Squad",
    role: "Soutien lourd"
  }, {
    id: "im038",
    name: "Seraphim Squad",
    role: "Attaque rapide"
  }, {
    id: "im039",
    name: "Zephyrim Squad",
    role: "Attaque rapide"
  }, {
    id: "im040",
    name: "Novitiates",
    role: "Troupes"
  }, {
    id: "im041",
    name: "Castigator",
    role: "Soutien lourd"
  }, {
    id: "im042",
    name: "Exorcist",
    role: "Soutien lourd"
  }, {
    id: "im043",
    name: "Immolator",
    role: "Transport"
  }, {
    id: "im044",
    name: "Sororitas Rhino",
    role: "Transport"
  }, {
    id: "im045",
    name: "Inquisitor Karamazov",
    role: "QG"
  }]
};
var PAINT_STATUS = {
  "unpainted": {
    label: "Non peint",
    color: "#46402a"
  },
  "primed": {
    label: "Apprêté",
    color: "#7a6a00"
  },
  "wip": {
    label: "En cours",
    color: "#8a5a00"
  },
  "painted": {
    label: "Peint",
    color: "#2a7a2a"
  }
};
var STORAGE_KEY = "wh40k-live-v1";

// ══════════════════════════════════════════════════════════
// ══════════════════════════════════════════════════════════
// STORAGE (IndexedDB — fonctionne en file://, PWA, Android)
// ══════════════════════════════════════════════════════════
// ══════════════════════════════════════════════════════════

function openDB() {
  return new Promise(function (resolve, reject) {
    var req = indexedDB.open("wh40k-codex", 1);
    req.onupgradeneeded = function (e) {
      return e.target.result.createObjectStore("appdata");
    };
    req.onsuccess = function (e) {
      return resolve(e.target.result);
    };
    req.onerror = function (e) {
      return reject(e.target.error);
    };
  });
}
function loadApp() {
  return _loadApp.apply(this, arguments);
}
function _loadApp() {
  _loadApp = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var db, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.p = 0;
          _context.n = 1;
          return openDB();
        case 1:
          db = _context.v;
          return _context.a(2, new Promise(function (resolve) {
            var tx = db.transaction("appdata", "readonly");
            var req = tx.objectStore("appdata").get("state");
            req.onsuccess = function (e) {
              return resolve(e.target.result || null);
            };
            req.onerror = function () {
              return resolve(null);
            };
          }));
        case 2:
          _context.p = 2;
          _t = _context.v;
          return _context.a(2, null);
      }
    }, _callee, null, [[0, 2]]);
  }));
  return _loadApp.apply(this, arguments);
}
function saveApp(_x) {
  return _saveApp.apply(this, arguments);
} // ══════════════════════════════════════════════════════════
// ICONS
// ══════════════════════════════════════════════════════════
function _saveApp() {
  _saveApp = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(d) {
    var db, _t2;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          _context2.p = 0;
          _context2.n = 1;
          return openDB();
        case 1:
          db = _context2.v;
          return _context2.a(2, new Promise(function (resolve) {
            var tx = db.transaction("appdata", "readwrite");
            tx.objectStore("appdata").put(d, "state");
            tx.oncomplete = resolve;
            tx.onerror = resolve;
          }));
        case 2:
          _context2.p = 2;
          _t2 = _context2.v;
        case 3:
          return _context2.a(2);
      }
    }, _callee2, null, [[0, 2]]);
  }));
  return _saveApp.apply(this, arguments);
}
var Ic = {
  Plus: function Plus() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.5"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "5",
      x2: "12",
      y2: "19"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "5",
      y1: "12",
      x2: "19",
      y2: "12"
    }));
  },
  Back: function Back() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.5"
    }, /*#__PURE__*/React.createElement("polyline", {
      points: "15 18 9 12 15 6"
    }));
  },
  Trash: function Trash() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "15",
      height: "15",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2"
    }, /*#__PURE__*/React.createElement("polyline", {
      points: "3 6 5 6 21 6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
    }));
  },
  Refresh: function Refresh() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.5"
    }, /*#__PURE__*/React.createElement("polyline", {
      points: "23 4 23 10 17 10"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M20.49 15a9 9 0 1 1-2.12-9.36L23 10"
    }));
  }
};

// ══════════════════════════════════════════════════════════
// SHARED STYLES
// ══════════════════════════════════════════════════════════

var btnSm = {
  background: "transparent",
  border: "1px solid #1c1c1c",
  color: "#786858",
  padding: "5px 12px",
  cursor: "pointer",
  fontSize: "11px",
  fontFamily: "'Cinzel',serif",
  letterSpacing: "1px"
};
var qtyBtn = {
  background: "#030303",
  border: "1px solid #1c1c1c",
  color: "#b8922a",
  width: "36px",
  height: "36px",
  cursor: "pointer",
  fontSize: "18px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "serif"
};
var iconMiniBtn = {
  background: "none",
  border: "1px solid #1c1c1c",
  cursor: "pointer",
  padding: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  touchAction: "manipulation",
  minWidth: "32px",
  minHeight: "32px"
};
var pageStyle = {
  minHeight: "100%",
  display: "flex",
  flexDirection: "column",
  fontFamily: "'Crimson Pro',Georgia,serif"
};
var pageClass = function pageClass(view) {
  return "bg-".concat(view);
};

// ══════════════════════════════════════════════════════════
// SHARED UI COMPONENTS
// ══════════════════════════════════════════════════════════

var CrossDivider = function CrossDivider(_ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "#151515" : _ref$color;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      margin: "4px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: "1px",
      background: color
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: color,
      fontSize: "10px"
    }
  }, "\u2720"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: "1px",
      background: color
    }
  }));
};
var Overlay = function Overlay(_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.92)",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
      zIndex: 100,
      overflow: "hidden"
    }
  }, children);
};
var Sheet = function Sheet(_ref3) {
  var children = _ref3.children,
    accent = _ref3.accent;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(180deg,#0d0b08 0%,#080808 100%)",
      borderTop: "2px solid ".concat(accent),
      borderLeft: "1px solid #131313",
      borderRight: "1px solid #131313",
      padding: "20px 20px 48px",
      width: "100%",
      maxWidth: "560px",
      maxHeight: "80vh",
      overflowY: "auto",
      overflowX: "hidden",
      boxShadow: "0 -12px 60px rgba(0,0,0,0.9)",
      position: "relative",
      WebkitOverflowScrolling: "touch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "8px",
      left: "8px",
      color: accent,
      fontSize: "10px",
      opacity: 0.4
    }
  }, "\u2720"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "8px",
      right: "8px",
      color: accent,
      fontSize: "10px",
      opacity: 0.4
    }
  }, "\u2720"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1
    }
  }, children));
};
var SheetHeader = function SheetHeader(_ref4) {
  var title = _ref4.title,
    onClose = _ref4.onClose,
    accent = _ref4.accent;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "10px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: accent,
      fontFamily: "'Cinzel Decorative','Cinzel',serif",
      margin: 0,
      fontSize: "15px",
      letterSpacing: "3px",
      textTransform: "uppercase",
      textShadow: "0 0 20px ".concat(accent, "44")
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: "none",
      border: "1px solid #111",
      color: "#46402a",
      cursor: "pointer",
      fontSize: "16px",
      width: "28px",
      height: "28px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, "\xD7")), /*#__PURE__*/React.createElement(CrossDivider, {
    color: accent + "44"
  }));
};
var Label = function Label(_ref5) {
  var children = _ref5.children;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#4a4a4a",
      fontSize: "10px",
      letterSpacing: "2px",
      textTransform: "uppercase",
      marginBottom: "6px",
      fontFamily: "'Cinzel',serif"
    }
  }, children);
};
var Input = function Input(_ref6) {
  var _ref6$style = _ref6.style,
    style = _ref6$style === void 0 ? {} : _ref6$style,
    p = _objectWithoutProperties(_ref6, _excluded);
  return /*#__PURE__*/React.createElement("input", _extends({
    style: _objectSpread({
      background: "#050505",
      border: "1px solid #151515",
      borderBottom: "1px solid #1c1c1c",
      color: "#e8dfc0",
      padding: "10px 12px",
      fontSize: "14px",
      outline: "none",
      width: "100%",
      boxSizing: "border-box",
      marginBottom: "16px",
      fontFamily: "'Crimson Pro',serif",
      letterSpacing: "0.5px"
    }, style)
  }, p));
};
var FactionPill = function FactionPill(_ref7) {
  var f = _ref7.f,
    active = _ref7.active,
    onClick = _ref7.onClick;
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      flex: 1,
      background: active ? "".concat(f.accent, "15") : "transparent",
      border: "1px solid ".concat(active ? f.accent : "#151515"),
      borderTop: active ? "2px solid ".concat(f.accent) : "2px solid transparent",
      color: active ? f.accent : "#444",
      padding: "10px 4px",
      cursor: "pointer",
      fontFamily: "'Cinzel',serif",
      letterSpacing: "1px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "20px",
      marginBottom: "2px"
    }
  }, f.icon), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "9px",
      letterSpacing: "2px"
    }
  }, f["short"]));
};
var PrimaryBtn = function PrimaryBtn(_ref8) {
  var children = _ref8.children,
    color = _ref8.color,
    onClick = _ref8.onClick;
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      width: "100%",
      padding: "14px",
      background: "linear-gradient(180deg,#131313 0%,#0d0d0d 100%)",
      border: "1px solid ".concat(color),
      borderTop: "2px solid ".concat(color),
      color: color,
      fontFamily: "'Cinzel',serif",
      fontSize: "13px",
      letterSpacing: "3px",
      cursor: "pointer",
      textTransform: "uppercase",
      textShadow: "0 0 10px ".concat(color, "66")
    }
  }, children);
};
var IconBtn = function IconBtn(_ref9) {
  var children = _ref9.children,
    onClick = _ref9.onClick;
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      background: "#0f0c08",
      border: "1px solid #2a2215",
      width: "36px",
      height: "36px",
      cursor: "pointer",
      color: "#b8922a",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      touchAction: "manipulation"
    }
  }, children);
};
var EmptyState = function EmptyState(_ref0) {
  var icon = _ref0.icon,
    title = _ref0.title,
    sub = _ref0.sub;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "60px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "36px",
      marginBottom: "16px",
      opacity: 0.3
    }
  }, icon), /*#__PURE__*/React.createElement(CrossDivider, {
    color: "#131313"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#1c1c1c",
      fontFamily: "'Cinzel',serif",
      fontSize: "14px",
      letterSpacing: "2px",
      margin: "16px 0 8px",
      textTransform: "uppercase"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "12px",
      color: "#222"
    }
  }, sub));
};

// ══════════════════════════════════════════════════════════
// PTS BADGE — saisie manuelle
// ══════════════════════════════════════════════════════════

function PtsBadge(_ref1) {
  var _UNITS_DB$faction;
  var unitId = _ref1.unitId,
    faction = _ref1.faction,
    _ref1$qty = _ref1.qty,
    qty = _ref1$qty === void 0 ? 1 : _ref1$qty,
    pts = _ref1.pts,
    onSetPts = _ref1.onSetPts;
  var f = FACTIONS[faction];
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    editing = _useState2[0],
    setEditing = _useState2[1];
  var _useState3 = useState(""),
    _useState4 = _slicedToArray(_useState3, 2),
    editVal = _useState4[0],
    setEditVal = _useState4[1];
  var inputRef = useRef(null);
  useEffect(function () {
    if (editing && inputRef.current) inputRef.current.focus();
  }, [editing]);

  // Lookup unit name to get default pts from POINTS_DB
  var unit = (_UNITS_DB$faction = UNITS_DB[faction]) === null || _UNITS_DB$faction === void 0 ? void 0 : _UNITS_DB$faction.find(function (u) {
    return u.id === unitId;
  });
  var defaultPts = unit ? POINTS_DB[unit.name] : null;
  // Use manual override if set, otherwise fall back to POINTS_DB
  var effectivePts = pts || defaultPts;
  var isDefault = !pts && !!defaultPts; // true = from DB, not manually set
  var total = effectivePts ? effectivePts * qty : null;
  var confirm = function confirm() {
    var n = parseInt(editVal);
    if (!isNaN(n) && n > 0) onSetPts(unitId, faction, n);
    setEditing(false);
    setEditVal("");
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      gap: "3px"
    }
  }, editing ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "4px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    type: "number",
    value: editVal,
    onChange: function onChange(e) {
      return setEditVal(e.target.value);
    },
    onKeyDown: function onKeyDown(e) {
      if (e.key === "Enter") confirm();
      if (e.key === "Escape") setEditing(false);
    },
    placeholder: effectivePts || "pts",
    style: {
      width: "60px",
      background: "#030303",
      border: "1px solid ".concat(f.accent),
      color: f.accent,
      padding: "4px 6px",
      fontSize: "13px",
      fontFamily: "monospace",
      outline: "none",
      textAlign: "center"
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: confirm,
    style: {
      background: "".concat(f.accent, "33"),
      border: "1px solid ".concat(f.accent),
      color: f.accent,
      cursor: "pointer",
      padding: "6px 12px",
      fontSize: "14px",
      touchAction: "manipulation"
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setEditing(false);
    },
    style: {
      background: "none",
      border: "1px solid #1c1c1c",
      color: "#786858",
      cursor: "pointer",
      padding: "6px 12px",
      fontSize: "14px",
      touchAction: "manipulation"
    }
  }, "\u2715")) : /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      setEditVal(effectivePts || "");
      setEditing(true);
    },
    title: isDefault ? "Points MFM (toucher pour modifier)" : "Toucher pour modifier les points",
    style: {
      background: effectivePts ? "".concat(f.accent, "22") : "#131313",
      border: "1px solid ".concat(effectivePts ? f.accent + "66" : "#333"),
      padding: "4px 10px",
      display: "flex",
      alignItems: "center",
      minWidth: "70px",
      justifyContent: "center",
      cursor: "pointer",
      flexDirection: "column",
      gap: "1px"
    }
  }, effectivePts ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: f.accent,
      fontWeight: "900",
      fontFamily: "monospace",
      fontSize: "15px"
    }
  }, total, " pts"), isDefault && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "".concat(f.accent, "55"),
      fontSize: "7px",
      letterSpacing: "1px"
    }
  }, "MFM")) : /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#46402a",
      fontSize: "11px"
    }
  }, "+ pts")));
}
function useTotalPts(entries, faction, ptsMap) {
  return entries.reduce(function (sum, e) {
    var _UNITS_DB$faction2;
    var manual = ptsMap["".concat(faction, ":").concat(e.unitId)];
    var unit = (_UNITS_DB$faction2 = UNITS_DB[faction]) === null || _UNITS_DB$faction2 === void 0 ? void 0 : _UNITS_DB$faction2.find(function (u) {
      return u.id === e.unitId;
    });
    var p = manual || (unit ? POINTS_DB[unit.name] : 0) || 0;
    return sum + p * e.qty;
  }, 0);
}

// ══════════════════════════════════════════════════════════
// UNIT ROW
// ══════════════════════════════════════════════════════════

// Wahapedia URL: spaces→hyphens, Title-Case each word, remove apostrophes/special chars
// Format: wahapedia.ru/wh40k10ed/factions/[faction]/[Unit-Name]
var WAHA_FACTIONS = {
  "SM": "space-marines",
  "TY": "tyranids",
  "IK": "imperial-knights",
  "IM": "agents-of-the-imperium"
};

// Certaines unités IM sont sur adepta-sororitas plutôt que agents-of-the-imperium
var WAHA_SORORITAS = new Set(["Morvenn Vahl", "Saint Celestine", "Junith Eruita", "Triumph of Saint Katherine", "Canoness", "Palatine", "Dialogus", "Hospitaller", "Imagifier", "Battle Sisters Squad", "Dominion Squad", "Celestian Sacresants", "Repentia Squad", "Arco-flagellants", "Death Cult Assassins", "Mortifiers", "Penitent Engines", "Paragon Warsuits", "Retributor Squad", "Seraphim Squad", "Zephyrim Squad", "Novitiates", "Castigator", "Exorcist", "Immolator", "Sororitas Rhino"]);
function wahapediaUrl(unitName, faction) {
  var factionSlug = WAHA_FACTIONS[faction] || "space-marines";
  if (faction === "IM" && WAHA_SORORITAS.has(unitName)) factionSlug = "adepta-sororitas";
  var slug = unitName.replace(/([a-z])'([A-Z])/g, "$1-$2") // apostrophe before uppercase → hyphen (El'Jonson → El-Jonson)
  .replace(/'/g, "") // all other apostrophes → remove (Kor'sarro, 's, etc.)
  .replace(/[^a-zA-Z0-9\s-]/g, "") // other special chars → remove
  .trim().split(/\s+/).map(function (w) {
    return w.charAt(0).toUpperCase() + w.slice(1);
  }) // Title-Case each word
  .join("-");
  return "https://wahapedia.ru/wh40k10ed/factions/".concat(factionSlug, "/").concat(slug);
}
var WahapediaBtn = function WahapediaBtn(_ref10) {
  var unitName = _ref10.unitName,
    faction = _ref10.faction,
    accent = _ref10.accent;
  return /*#__PURE__*/React.createElement("a", {
    href: wahapediaUrl(unitName, faction),
    target: "_blank",
    rel: "noopener noreferrer",
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    title: "Ouvrir ".concat(unitName, " sur Wahapedia"),
    style: {
      display: "flex",
      alignItems: "center",
      gap: "4px",
      padding: "5px 10px",
      background: "#0f0c08",
      border: "1px solid ".concat(accent, "55"),
      color: accent,
      textDecoration: "none",
      fontSize: "9px",
      fontFamily: "'Cinzel',serif",
      letterSpacing: "1px",
      cursor: "pointer",
      flexShrink: 0,
      touchAction: "manipulation"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "10",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "15 3 21 3 21 9"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "10",
    y1: "14",
    x2: "21",
    y2: "3"
  })), "WAHA");
};
function UnitRow(_ref11) {
  var _UNITS_DB$faction3, _PAINT_STATUS$inv$pai, _PAINT_STATUS$inv$pai2;
  var entry = _ref11.entry,
    faction = _ref11.faction,
    ptsMap = _ref11.ptsMap,
    onSetPts = _ref11.onSetPts,
    onDelete = _ref11.onDelete,
    onToggleWarlord = _ref11.onToggleWarlord;
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    open = _useState6[0],
    setOpen = _useState6[1];
  var f = FACTIONS[faction];
  var unit = (_UNITS_DB$faction3 = UNITS_DB[faction]) === null || _UNITS_DB$faction3 === void 0 ? void 0 : _UNITS_DB$faction3.find(function (u) {
    return u.id === entry.unitId;
  });
  var inv = entry.inv;
  if (!unit) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "6px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: f.bgCard || "linear-gradient(180deg,#1a1714 0%,#141210 100%)",
      border: "1px solid ".concat(entry.warlord ? f.accent + "44" : "#222"),
      borderLeft: "2px solid ".concat(entry.warlord ? f.accent : f.accent + "44"),
      overflow: "hidden",
      transition: "background 0.4s"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      padding: "10px 12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "46px",
      height: "46px",
      flexShrink: 0,
      background: "#020202",
      border: "1px solid ".concat(f.accent, "22"),
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "20px",
      position: "relative"
    }
  }, inv !== null && inv !== void 0 && inv.photo ? /*#__PURE__*/React.createElement("img", {
    src: inv.photo,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, f.icon, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: "1px",
      right: "2px",
      fontSize: "7px",
      color: f.accent,
      opacity: 0.3
    }
  }, "\u2720"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, entry.warlord && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#0d0a00",
      border: "1px solid #b8922a66",
      padding: "1px 8px",
      display: "inline-block",
      marginBottom: "4px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#b8922a",
      fontSize: "9px",
      letterSpacing: "2px",
      fontFamily: "'Cinzel',serif"
    }
  }, "\u2720 SEIGNEUR DE GUERRE")), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#e8dfc0",
      fontSize: "14px",
      fontFamily: "'Cinzel',serif",
      letterSpacing: "0.5px"
    }
  }, entry.qty > 1 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: f.accent,
      marginRight: "6px"
    }
  }, entry.qty, "\xD7"), unit.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      marginTop: "4px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#9a8a78",
      fontSize: "10px",
      letterSpacing: "1px",
      fontFamily: "'Cinzel',serif",
      textTransform: "uppercase"
    }
  }, unit.role), /*#__PURE__*/React.createElement(WahapediaBtn, {
    unitName: unit.name,
    faction: faction,
    accent: f.accent
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      gap: "6px"
    }
  }, /*#__PURE__*/React.createElement(PtsBadge, {
    unitId: unit.id,
    faction: faction,
    qty: entry.qty,
    pts: ptsMap["".concat(faction, ":").concat(unit.id)],
    onSetPts: onSetPts
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "4px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return onToggleWarlord(entry.id);
    },
    title: entry.warlord ? "Retirer Seigneur de Guerre" : "Désigner comme Seigneur de Guerre",
    style: _objectSpread(_objectSpread({}, iconMiniBtn), {}, {
      color: entry.warlord ? "#b8922a" : "#7a6a58",
      background: entry.warlord ? "#1a1000" : "none",
      borderColor: entry.warlord ? "#b8922a44" : "#131313"
    })
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "11px",
      lineHeight: 1
    }
  }, "\u2720")), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setOpen(!open);
    },
    style: _objectSpread(_objectSpread({}, iconMiniBtn), {}, {
      color: "#9a8a78"
    })
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: open ? "18 15 12 9 6 15" : "6 9 12 15 18 9"
  }))), /*#__PURE__*/React.createElement("button", {
    onClick: onDelete,
    style: _objectSpread(_objectSpread({}, iconMiniBtn), {}, {
      color: "#2a1a1a"
    })
  }, /*#__PURE__*/React.createElement(Ic.Trash, null))))), open && inv && /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid #0f0f0f",
      padding: "8px 12px",
      background: "#030303"
    }
  }, /*#__PURE__*/React.createElement(CrossDivider, {
    color: "#111"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "8px",
      alignItems: "center",
      marginTop: "6px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#9a8a78",
      fontSize: "9px",
      letterSpacing: "2px",
      fontFamily: "'Cinzel',serif"
    }
  }, "PEINTURE:"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: ((_PAINT_STATUS$inv$pai = PAINT_STATUS[inv.paintStatus]) === null || _PAINT_STATUS$inv$pai === void 0 ? void 0 : _PAINT_STATUS$inv$pai.color) || "#333",
      fontSize: "11px",
      fontStyle: "italic"
    }
  }, ((_PAINT_STATUS$inv$pai2 = PAINT_STATUS[inv.paintStatus]) === null || _PAINT_STATUS$inv$pai2 === void 0 ? void 0 : _PAINT_STATUS$inv$pai2.label) || "–")))));
}

// ══════════════════════════════════════════════════════════
// PHOTO PICKER
// ══════════════════════════════════════════════════════════

function PhotoPicker(_ref12) {
  var photo = _ref12.photo,
    onPhoto = _ref12.onPhoto,
    accent = _ref12.accent,
    _ref12$size = _ref12.size,
    size = _ref12$size === void 0 ? 64 : _ref12$size;
  var cameraRef = useRef(null);
  var galleryRef = useRef(null);
  var handleFile = function handleFile(e) {
    var file = e.target.files[0];
    if (!file) return;
    e.target.value = "";
    var reader = new FileReader();
    reader.onload = function (ev) {
      return onPhoto(ev.target.result);
    };
    reader.readAsDataURL(file);
  };
  if (size > 100) return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "12px",
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      overflow: "hidden",
      border: "1px solid ".concat(photo ? accent + "66" : "#1c1c1c"),
      background: "#040404",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, photo ? /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      opacity: 0.3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "36px"
    }
  }, "\u2720"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: accent,
      fontSize: "9px",
      marginTop: "6px",
      letterSpacing: "2px",
      fontFamily: "'Cinzel',serif"
    }
  }, "AUCUNE PHOTO"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "10px",
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      var _cameraRef$current;
      return (_cameraRef$current = cameraRef.current) === null || _cameraRef$current === void 0 ? void 0 : _cameraRef$current.click();
    },
    style: {
      flex: 1,
      padding: "11px 0",
      background: "#060504",
      border: "1px solid ".concat(accent, "55"),
      color: accent,
      fontFamily: "'Cinzel',serif",
      fontSize: "11px",
      letterSpacing: "1px",
      cursor: "pointer"
    }
  }, "\uD83D\uDCF7 APPAREIL"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      var _galleryRef$current;
      return (_galleryRef$current = galleryRef.current) === null || _galleryRef$current === void 0 ? void 0 : _galleryRef$current.click();
    },
    style: {
      flex: 1,
      padding: "11px 0",
      background: "#060504",
      border: "1px solid #1c1c1c",
      color: "#9a8a78",
      fontFamily: "'Cinzel',serif",
      fontSize: "11px",
      letterSpacing: "1px",
      cursor: "pointer"
    }
  }, "\uD83D\uDDBC GALERIE")), /*#__PURE__*/React.createElement("input", {
    ref: cameraRef,
    type: "file",
    accept: "image/*",
    capture: "environment",
    onChange: handleFile,
    style: {
      display: "none"
    }
  }), /*#__PURE__*/React.createElement("input", {
    ref: galleryRef,
    type: "file",
    accept: "image/*",
    onChange: handleFile,
    style: {
      display: "none"
    }
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "10px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      overflow: "hidden",
      border: "1px solid ".concat(photo ? accent + "55" : "#1c1c1c"),
      background: "#040404",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, photo ? /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "20px",
      opacity: 0.2
    }
  }, "\u2720")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      var _cameraRef$current2;
      return (_cameraRef$current2 = cameraRef.current) === null || _cameraRef$current2 === void 0 ? void 0 : _cameraRef$current2.click();
    },
    style: {
      padding: "7px 14px",
      background: "#060504",
      border: "1px solid ".concat(accent, "55"),
      color: accent,
      fontFamily: "'Cinzel',serif",
      fontSize: "10px",
      letterSpacing: "1px",
      cursor: "pointer"
    }
  }, "\uD83D\uDCF7 Appareil photo"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      var _galleryRef$current2;
      return (_galleryRef$current2 = galleryRef.current) === null || _galleryRef$current2 === void 0 ? void 0 : _galleryRef$current2.click();
    },
    style: {
      padding: "7px 14px",
      background: "#060504",
      border: "1px solid #1c1c1c",
      color: "#9a8a78",
      fontFamily: "'Cinzel',serif",
      fontSize: "10px",
      letterSpacing: "1px",
      cursor: "pointer"
    }
  }, "\uD83D\uDDBC Galerie")), /*#__PURE__*/React.createElement("input", {
    ref: cameraRef,
    type: "file",
    accept: "image/*",
    capture: "environment",
    onChange: handleFile,
    style: {
      display: "none"
    }
  }), /*#__PURE__*/React.createElement("input", {
    ref: galleryRef,
    type: "file",
    accept: "image/*",
    onChange: handleFile,
    style: {
      display: "none"
    }
  }));
}

// ══════════════════════════════════════════════════════════
// MODAL EDIT PHOTO
// ══════════════════════════════════════════════════════════

function ModalEditPhoto(_ref13) {
  var _UNITS_DB$faction4;
  var item = _ref13.item,
    faction = _ref13.faction,
    onClose = _ref13.onClose,
    onSave = _ref13.onSave;
  var f = FACTIONS[faction];
  var unit = (_UNITS_DB$faction4 = UNITS_DB[faction]) === null || _UNITS_DB$faction4 === void 0 ? void 0 : _UNITS_DB$faction4.find(function (u) {
    return u.id === item.unitId;
  });
  var _useState7 = useState(item.photo || null),
    _useState8 = _slicedToArray(_useState7, 2),
    photo = _useState8[0],
    setPhoto = _useState8[1];
  // Sauvegarder immédiatement dans IndexedDB dès que la photo est prise
  // pour survivre au rechargement Android PWA après capture caméra
  var handlePhoto = function handlePhoto(newPhoto) {
    setPhoto(newPhoto);
    onSave(newPhoto); // sauvegarde immédiate sans attendre ENREGISTRER
  };
  return /*#__PURE__*/React.createElement(Overlay, null, /*#__PURE__*/React.createElement(Sheet, {
    accent: f.accent
  }, /*#__PURE__*/React.createElement(SheetHeader, {
    title: "Photo de la figurine",
    onClose: onClose,
    accent: f.accent
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#4a4038",
      fontSize: "12px",
      textAlign: "center",
      marginBottom: "16px",
      fontStyle: "italic"
    }
  }, unit === null || unit === void 0 ? void 0 : unit.name), /*#__PURE__*/React.createElement(PhotoPicker, {
    photo: photo,
    onPhoto: handlePhoto,
    accent: f.accent,
    size: 180
  }), photo && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setPhoto(null);
      onSave(null);
    },
    style: {
      display: "block",
      width: "100%",
      marginTop: "12px",
      background: "none",
      border: "1px solid #1c1c1c",
      color: "#3a2020",
      padding: "8px",
      cursor: "pointer",
      fontFamily: "'Cinzel',serif",
      fontSize: "10px",
      letterSpacing: "2px"
    }
  }, "\u2715 SUPPRIMER LA PHOTO"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "20px"
    }
  }, /*#__PURE__*/React.createElement(PrimaryBtn, {
    color: f.accent,
    onClick: function onClick() {
      onClose();
    }
  }, "FERMER"))));
}

// ══════════════════════════════════════════════════════════
// MODAL CREATE LIST
// ══════════════════════════════════════════════════════════

function ModalCreateList(_ref14) {
  var onClose = _ref14.onClose,
    onCreate = _ref14.onCreate;
  var _useState9 = useState(""),
    _useState0 = _slicedToArray(_useState9, 2),
    name = _useState0[0],
    setName = _useState0[1];
  var _useState1 = useState("IK"),
    _useState10 = _slicedToArray(_useState1, 2),
    faction = _useState10[0],
    setFactionRaw = _useState10[1];
  var setFaction = function setFaction(k) {
    setFactionRaw(k);
    setPaintFilter("all");
  };
  var _useState11 = useState(2000),
    _useState12 = _slicedToArray(_useState11, 2),
    maxPts = _useState12[0],
    setMaxPts = _useState12[1];
  var f = FACTIONS[faction];
  return /*#__PURE__*/React.createElement(Overlay, null, /*#__PURE__*/React.createElement(Sheet, {
    accent: f.accent
  }, /*#__PURE__*/React.createElement(SheetHeader, {
    title: "Nouvelle liste",
    onClose: onClose,
    accent: f.accent
  }), /*#__PURE__*/React.createElement(Label, null, "Nom de la liste"), /*#__PURE__*/React.createElement(Input, {
    value: name,
    onChange: function onChange(e) {
      return setName(e.target.value);
    },
    placeholder: "Ex: Tournoi Paris\u2026"
  }), /*#__PURE__*/React.createElement(Label, null, "Faction"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "8px",
      marginBottom: "16px"
    }
  }, Object.entries(FACTIONS).map(function (_ref15) {
    var _ref16 = _slicedToArray(_ref15, 2),
      k = _ref16[0],
      v = _ref16[1];
    return /*#__PURE__*/React.createElement(FactionPill, {
      key: k,
      f: v,
      active: faction === k,
      onClick: function onClick() {
        return setFaction(k);
      }
    });
  })), /*#__PURE__*/React.createElement(Label, null, "Points maximum"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "8px",
      marginBottom: "20px",
      flexWrap: "wrap"
    }
  }, [500, 1000, 1500, 2000, 2500, 3000].map(function (p) {
    return /*#__PURE__*/React.createElement("button", {
      key: p,
      onClick: function onClick() {
        return setMaxPts(p);
      },
      style: _objectSpread(_objectSpread({}, btnSm), {}, {
        borderColor: maxPts === p ? f.accent : "#333",
        color: maxPts === p ? f.accent : "#666",
        background: maxPts === p ? "".concat(f.accent, "15") : "transparent"
      })
    }, p);
  })), /*#__PURE__*/React.createElement(PrimaryBtn, {
    color: f.accent,
    onClick: function onClick() {
      if (name.trim()) {
        onCreate({
          name: name.trim(),
          faction: faction,
          maxPts: maxPts
        });
        onClose();
      }
    }
  }, "CR\xC9ER LA LISTE")));
}

// ══════════════════════════════════════════════════════════
// MODAL ADD UNIT
// ══════════════════════════════════════════════════════════

function ModalAddUnit(_ref17) {
  var faction = _ref17.faction,
    inventory = _ref17.inventory,
    onClose = _ref17.onClose,
    onAdd = _ref17.onAdd,
    _ref17$mode = _ref17.mode,
    mode = _ref17$mode === void 0 ? "list" : _ref17$mode;
  var f = FACTIONS[faction];
  var units = UNITS_DB[faction] || [];
  var _useState13 = useState(null),
    _useState14 = _slicedToArray(_useState13, 2),
    selected = _useState14[0],
    setSelected = _useState14[1];
  var _useState15 = useState(1),
    _useState16 = _slicedToArray(_useState15, 2),
    qty = _useState16[0],
    setQty = _useState16[1];
  var _useState17 = useState("unpainted"),
    _useState18 = _slicedToArray(_useState17, 2),
    paint = _useState18[0],
    setPaint = _useState18[1];
  var _useState19 = useState(""),
    _useState20 = _slicedToArray(_useState19, 2),
    search = _useState20[0],
    setSearch = _useState20[1];
  var _useState21 = useState("Tous"),
    _useState22 = _slicedToArray(_useState21, 2),
    chapterFilter = _useState22[0],
    setChapterFilter = _useState22[1];
  var _useState23 = useState(null),
    _useState24 = _slicedToArray(_useState23, 2),
    photo = _useState24[0],
    setPhoto = _useState24[1];
  var chapters = faction === "SM" ? ["Tous"].concat(_toConsumableArray(new Set(units.map(function (u) {
    return u.chapter;
  }).filter(Boolean)))) : [];
  var available = mode === "list" ? units.filter(function (u) {
    return inventory.some(function (i) {
      return i.unitId === u.id && i.faction === faction;
    });
  }) : units;
  var filtered = available.filter(function (u) {
    return chapterFilter === "Tous" || !u.chapter || u.chapter === chapterFilter || u.chapter === "Générique";
  }).filter(function (u) {
    return chapterFilter === "Tous" || !(u.forbidden || []).includes(chapterFilter);
  }).filter(function (u) {
    return u.name.toLowerCase().includes(search.toLowerCase());
  });
  var grouped = filtered.reduce(function (acc, u) {
    if (!acc[u.role]) acc[u.role] = [];
    acc[u.role].push(u);
    return acc;
  }, {});
  return /*#__PURE__*/React.createElement(Overlay, null, /*#__PURE__*/React.createElement(Sheet, {
    accent: f.accent
  }, /*#__PURE__*/React.createElement(SheetHeader, {
    title: mode === "list" ? "Ajouter à la liste" : "Ajouter à l'inventaire",
    onClose: onClose,
    accent: f.accent
  }), /*#__PURE__*/React.createElement(Input, {
    value: search,
    onChange: function onChange(e) {
      return setSearch(e.target.value);
    },
    placeholder: "Rechercher\u2026",
    style: {
      marginBottom: "8px"
    }
  }), faction === "SM" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "6px",
      overflowX: "auto",
      marginBottom: "10px",
      paddingBottom: "4px"
    }
  }, chapters.map(function (ch) {
    return /*#__PURE__*/React.createElement("button", {
      key: ch,
      onClick: function onClick() {
        return setChapterFilter(ch);
      },
      style: _objectSpread(_objectSpread({}, btnSm), {}, {
        whiteSpace: "nowrap",
        fontSize: "10px",
        borderColor: chapterFilter === ch ? f.accent : "#333",
        color: chapterFilter === ch ? f.accent : "#555",
        background: chapterFilter === ch ? "".concat(f.accent, "15") : "transparent"
      })
    }, ch);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowY: "auto",
      maxHeight: "28vh",
      marginBottom: "16px"
    }
  }, Object.entries(grouped).map(function (_ref18) {
    var _ref19 = _slicedToArray(_ref18, 2),
      role = _ref19[0],
      roleUnits = _ref19[1];
    return /*#__PURE__*/React.createElement("div", {
      key: role
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        color: "#35281a",
        fontSize: "10px",
        letterSpacing: "2px",
        padding: "6px 4px 4px",
        fontFamily: "'Cinzel',serif"
      }
    }, role.toUpperCase()), roleUnits.map(function (u) {
      return /*#__PURE__*/React.createElement("div", {
        key: u.id,
        onClick: function onClick() {
          return setSelected(u.id);
        },
        style: {
          padding: "9px 12px",
          marginBottom: "3px",
          background: selected === u.id ? "".concat(f.accent, "22") : "#111",
          border: "1px solid ".concat(selected === u.id ? f.accent : "#222"),
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        style: {
          color: selected === u.id ? "#fff" : "#ccc",
          fontSize: "13px"
        }
      }, u.name), u.chapter && u.chapter !== "Générique" && /*#__PURE__*/React.createElement("div", {
        style: {
          color: f.accent,
          fontSize: "10px",
          opacity: 0.7
        }
      }, u.chapter)), /*#__PURE__*/React.createElement("span", {
        style: {
          color: f.accent,
          fontSize: "16px"
        }
      }, "\u2726"));
    }));
  }), filtered.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#46402a",
      textAlign: "center",
      padding: "20px",
      fontSize: "13px"
    }
  }, "Aucun r\xE9sultat")), selected && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Label, null, "Quantit\xE9"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "10px",
      alignItems: "center",
      marginBottom: "16px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setQty(Math.max(1, qty - 1));
    },
    style: qtyBtn
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#e8dfc0",
      fontSize: "20px",
      fontWeight: "700",
      minWidth: "30px",
      textAlign: "center"
    }
  }, qty), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setQty(qty + 1);
    },
    style: qtyBtn
  }, "+")), mode === "inventory" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Label, null, "Statut peinture"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "6px",
      marginBottom: "16px",
      flexWrap: "wrap"
    }
  }, Object.entries(PAINT_STATUS).map(function (_ref20) {
    var _ref21 = _slicedToArray(_ref20, 2),
      k = _ref21[0],
      v = _ref21[1];
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      onClick: function onClick() {
        return setPaint(k);
      },
      style: _objectSpread(_objectSpread({}, btnSm), {}, {
        borderColor: paint === k ? v.color : "#333",
        color: paint === k ? "#fff" : "#666",
        background: paint === k ? "".concat(v.color, "33") : "transparent"
      })
    }, v.label);
  })), /*#__PURE__*/React.createElement(Label, null, "Photo (optionnel)"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "16px"
    }
  }, /*#__PURE__*/React.createElement(PhotoPicker, {
    photo: photo,
    onPhoto: setPhoto,
    accent: f.accent,
    size: 80
  })))), /*#__PURE__*/React.createElement(PrimaryBtn, {
    color: f.accent,
    onClick: function onClick() {
      if (!selected) return;
      // In list mode, link to an existing inventory item if available
      // In inventory mode, always create a new separate entry
      var invItem = mode === "list" ? inventory.find(function (i) {
        return i.unitId === selected && i.faction === faction;
      }) : null;
      onAdd({
        unitId: selected,
        faction: faction,
        qty: qty,
        paintStatus: paint,
        photo: photo,
        inventoryId: invItem === null || invItem === void 0 ? void 0 : invItem.id
      });
      onClose();
    }
  }, "AJOUTER")));
}

// ══════════════════════════════════════════════════════════
// VIEW: Lists
// ══════════════════════════════════════════════════════════

function ViewLists(_ref22) {
  var lists = _ref22.lists,
    inventory = _ref22.inventory,
    ptsMap = _ref22.ptsMap,
    onSelect = _ref22.onSelect,
    onCreate = _ref22.onCreate,
    onDelete = _ref22.onDelete;
  var _useState25 = useState(false),
    _useState26 = _slicedToArray(_useState25, 2),
    showModal = _useState26[0],
    setShowModal = _useState26[1];
  return /*#__PURE__*/React.createElement("div", {
    style: pageStyle,
    className: "bg-lists"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(180deg,#0a0808 0%,#050505 100%)",
      borderBottom: "1px solid #131313",
      padding: "20px 16px 14px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: "60px",
      top: "50%",
      transform: "translateY(-50%)",
      fontSize: "80px",
      color: "#b8922a",
      opacity: 0.12,
      fontFamily: "serif",
      pointerEvents: "none",
      lineHeight: 1
    }
  }, "\u2720"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#b8922a",
      fontSize: "9px",
      letterSpacing: "5px",
      fontFamily: "'Cinzel',serif",
      marginBottom: "4px",
      opacity: 0.6
    }
  }, "CODEX ASTARTES"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#e8dfc0",
      fontSize: "22px",
      fontFamily: "'Cinzel Decorative','Cinzel',serif",
      letterSpacing: "3px",
      fontWeight: "900",
      textShadow: "0 0 30px #b8922a33",
      lineHeight: 1
    }
  }, "CROISADE"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#35281a",
      fontSize: "9px",
      letterSpacing: "2px",
      fontFamily: "'Cinzel',serif",
      marginTop: "4px"
    }
  }, lists.length, " LISTE", lists.length !== 1 ? "S" : "", " \xB7 ", lists.reduce(function (s, l) {
    return s + (l.entries || []).length;
  }, 0), " UNIT\xC9S")), /*#__PURE__*/React.createElement(IconBtn, {
    onClick: function onClick() {
      return setShowModal(true);
    }
  }, /*#__PURE__*/React.createElement(Ic.Plus, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 16px",
      flex: 1,
      overflowY: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#100e0c",
      border: "1px solid #222",
      borderLeft: "3px solid #b8922a",
      padding: "10px 14px",
      marginBottom: "20px",
      display: "flex",
      alignItems: "center",
      gap: "12px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "18px",
      opacity: 0.7
    }
  }, "\u2720"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#b8922a",
      fontSize: "10px",
      fontFamily: "'Cinzel',serif",
      letterSpacing: "2px"
    }
  }, "POINTS VIA WAHAPEDIA"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#35281a",
      fontSize: "11px",
      marginTop: "2px",
      fontStyle: "italic"
    }
  }, "Mis \xE0 jour automatiquement par l'oracle"))), lists.length === 0 && /*#__PURE__*/React.createElement(EmptyState, {
    icon: "\u2720",
    title: "Aucune croisade",
    sub: "Forgez votre premi\xE8re liste d'arm\xE9e"
  }), lists.map(function (list, idx) {
    var f = FACTIONS[list.faction];
    var pts = (list.entries || []).reduce(function (sum, e) {
      var _UNITS_DB$list$factio;
      var manual = ptsMap["".concat(list.faction, ":").concat(e.unitId)];
      var unit = (_UNITS_DB$list$factio = UNITS_DB[list.faction]) === null || _UNITS_DB$list$factio === void 0 ? void 0 : _UNITS_DB$list$factio.find(function (u) {
        return u.id === e.unitId;
      });
      var p = manual || (unit ? POINTS_DB[unit.name] : 0) || 0;
      return sum + p * e.qty;
    }, 0);
    var pct = Math.min(100, pts / list.maxPts * 100);
    return /*#__PURE__*/React.createElement("div", {
      key: list.id,
      onClick: function onClick() {
        return onSelect(list.id);
      },
      className: "hcard",
      style: {
        background: "linear-gradient(180deg,#1c1916 0%,#151210 100%)",
        border: "1px solid #252220",
        borderTop: "2px solid ".concat(f.accent),
        padding: "16px",
        marginBottom: "10px",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        animation: "slideUp 0.25s ".concat(idx * 60, "ms ease both")
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: "6px",
        right: "8px",
        color: f.accent,
        fontSize: "10px",
        opacity: 0.25
      }
    }, "\u2720"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        color: "#e8dfc0",
        fontSize: "16px",
        fontFamily: "'Cinzel',serif",
        letterSpacing: "1px",
        fontWeight: "700"
      }
    }, list.name), /*#__PURE__*/React.createElement("div", {
      style: {
        color: f.accent,
        fontSize: "11px",
        marginTop: "4px",
        letterSpacing: "1px",
        fontFamily: "'Cinzel',serif"
      }
    }, f.icon, "  ", f.label.toUpperCase())), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "right"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        color: "#e8dfc0",
        fontSize: "24px",
        fontWeight: "900",
        fontFamily: "'Cinzel',serif"
      }
    }, pts), /*#__PURE__*/React.createElement("div", {
      style: {
        color: "#35281a",
        fontSize: "10px",
        letterSpacing: "1px"
      }
    }, "/ ", list.maxPts, " pts"))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "14px",
        background: "#0d0d0d",
        height: "3px",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "".concat(pct, "%"),
        height: "100%",
        background: pts > list.maxPts ? "#7a1515" : f.accent,
        transition: "width 0.4s"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "8px",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        color: "#35281a",
        fontSize: "11px",
        fontStyle: "italic"
      }
    }, (list.entries || []).length, " fr\xE8res de bataille"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick(e) {
        e.stopPropagation();
        onDelete(list.id);
      },
      style: {
        background: "none",
        border: "none",
        color: "#151515",
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement(Ic.Trash, null))));
  })), showModal && /*#__PURE__*/React.createElement(ModalCreateList, {
    onClose: function onClose() {
      return setShowModal(false);
    },
    onCreate: onCreate
  }));
}

// ══════════════════════════════════════════════════════════
// VIEW: List Detail
// ══════════════════════════════════════════════════════════

function ViewListDetail(_ref23) {
  var list = _ref23.list,
    inventory = _ref23.inventory,
    ptsMap = _ref23.ptsMap,
    onSetPts = _ref23.onSetPts,
    onBack = _ref23.onBack,
    onAddEntry = _ref23.onAddEntry,
    onDeleteEntry = _ref23.onDeleteEntry,
    onToggleWarlord = _ref23.onToggleWarlord,
    onRename = _ref23.onRename,
    onSetMaxPts = _ref23.onSetMaxPts;
  var _useState27 = useState(false),
    _useState28 = _slicedToArray(_useState27, 2),
    showModal = _useState28[0],
    setShowModal = _useState28[1];
  var _useState29 = useState(false),
    _useState30 = _slicedToArray(_useState29, 2),
    editingName = _useState30[0],
    setEditingName = _useState30[1];
  var _useState31 = useState(false),
    _useState32 = _slicedToArray(_useState31, 2),
    editingMaxPts = _useState32[0],
    setEditingMaxPts = _useState32[1];
  var _useState33 = useState(String(list.maxPts)),
    _useState34 = _slicedToArray(_useState33, 2),
    maxPtsVal = _useState34[0],
    setMaxPtsVal = _useState34[1];
  var maxPtsRef = useRef(null);
  useEffect(function () {
    if (editingMaxPts && maxPtsRef.current) maxPtsRef.current.focus();
  }, [editingMaxPts]);
  var confirmMaxPts = function confirmMaxPts() {
    var n = parseInt(maxPtsVal);
    if (!isNaN(n) && n > 0) onSetMaxPts(n);
    setEditingMaxPts(false);
  };
  var _useState35 = useState(list.name),
    _useState36 = _slicedToArray(_useState35, 2),
    nameVal = _useState36[0],
    setNameVal = _useState36[1];
  var nameRef = useRef(null);
  useEffect(function () {
    if (editingName && nameRef.current) nameRef.current.focus();
  }, [editingName]);
  var confirmRename = function confirmRename() {
    var v = nameVal.trim();
    if (v && v !== list.name) onRename(v);
    setEditingName(false);
  };
  var f = FACTIONS[list.faction];
  var entries = (list.entries || []).map(function (e) {
    return _objectSpread(_objectSpread({}, e), {}, {
      inv: inventory.find(function (i) {
        return i.id === e.inventoryId;
      })
    });
  });
  var pts = useTotalPts(list.entries || [], list.faction, ptsMap);
  var pct = Math.min(100, pts / list.maxPts * 100);
  var SECTION_ORDER = [{
    key: "QG",
    title: "CHARACTERS"
  }, {
    key: "Troupes",
    title: "BATTLELINE"
  }, {
    key: "Élite",
    title: "ÉLITE"
  }, {
    key: "Attaque rapide",
    title: "FAST ATTACK",
    extraRoles: ["Rapide"]
  }, {
    key: "Soutien lourd",
    title: "HEAVY SUPPORT",
    extraRoles: ["Lourd"]
  }, {
    key: "Transport",
    title: "DEDICATED TRANSPORTS"
  }, {
    key: "Armiger",
    title: "ARMIGERS"
  }, {
    key: "Chevalier Questoris",
    title: "KNIGHTS",
    extraRoles: ["Seigneur de guerre"]
  }, {
    key: "Chevalier Dominus",
    title: "KNIGHTS"
  }, {
    key: "Chevalier Cerastus",
    title: "KNIGHTS"
  }, {
    key: "Chevalier Acastus",
    title: "KNIGHTS"
  }];
  var sectionedEntries = SECTION_ORDER.map(function (s) {
    return _objectSpread(_objectSpread({}, s), {}, {
      items: entries.filter(function (e) {
        var _UNITS_DB$list$factio2;
        var u = (_UNITS_DB$list$factio2 = UNITS_DB[list.faction]) === null || _UNITS_DB$list$factio2 === void 0 ? void 0 : _UNITS_DB$list$factio2.find(function (u) {
          return u.id === e.unitId;
        });
        if (!u) return false;
        return u.role === s.key || s.extraRoles && s.extraRoles.includes(u.role);
      })
    });
  }).filter(function (s) {
    return s.items.length > 0;
  });
  // Fusionner les sections Knights en une seule
  var knightKeys = new Set(["Armiger", "Chevalier Questoris", "Chevalier Dominus", "Chevalier Cerastus", "Chevalier Acastus"]);
  var mergedSections = [];
  var knightSection = null;
  var _iterator = _createForOfIteratorHelper(sectionedEntries),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var s = _step.value;
      if (knightKeys.has(s.key)) {
        if (!knightSection) {
          knightSection = {
            key: "knights",
            title: "KNIGHTS",
            items: []
          };
          mergedSections.push(knightSection);
        }
        knightSection.items = [].concat(_toConsumableArray(knightSection.items), _toConsumableArray(s.items));
      } else {
        mergedSections.push(s);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var _useState37 = useState({}),
    _useState38 = _slicedToArray(_useState37, 2),
    collapsedSections = _useState38[0],
    setCollapsedSections = _useState38[1];
  var toggleSection = function toggleSection(title) {
    return setCollapsedSections(function (p) {
      return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, title, !p[title]));
    });
  };
  var Section = function Section(_ref24) {
    var title = _ref24.title,
      items = _ref24.items;
    if (items.length === 0) return null;
    var collapsed = collapsedSections[title];
    var sectionPts = items.reduce(function (sum, e) {
      var _UNITS_DB$list$factio3;
      var manual = ptsMap["".concat(list.faction, ":").concat(e.unitId)];
      var unit = (_UNITS_DB$list$factio3 = UNITS_DB[list.faction]) === null || _UNITS_DB$list$factio3 === void 0 ? void 0 : _UNITS_DB$list$factio3.find(function (u) {
        return u.id === e.unitId;
      });
      var p = manual || (unit ? POINTS_DB[unit.name] : 0) || 0;
      return sum + p * e.qty;
    }, 0);
    var sectionPct = list.maxPts ? Math.round(sectionPts / list.maxPts * 100) : 0;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: "20px"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return toggleSection(title);
      },
      style: {
        width: "100%",
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "0 0 8px 0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        touchAction: "manipulation"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "10px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "2px",
        height: "14px",
        background: "#b8922a",
        opacity: 0.5
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#9a8a78",
        fontFamily: "'Cinzel',serif",
        fontSize: "11px",
        letterSpacing: "4px"
      }
    }, title), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#7a6a58",
        fontSize: "9px"
      }
    }, items.length)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "8px"
      }
    }, sectionPts > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#7a6a58",
        fontSize: "9px"
      }
    }, sectionPct, "%"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: f.accent,
        fontFamily: "monospace",
        fontSize: "13px",
        fontWeight: "700"
      }
    }, sectionPts, " pts")), /*#__PURE__*/React.createElement("svg", {
      width: "10",
      height: "10",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#7a6a58",
      strokeWidth: "2.5"
    }, /*#__PURE__*/React.createElement("polyline", {
      points: collapsed ? "6 9 12 15 18 9" : "18 15 12 9 6 15"
    })))), !collapsed && sectionPts > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        height: "2px",
        background: "#0a0806",
        marginBottom: "10px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "".concat(sectionPct, "%"),
        height: "100%",
        background: "".concat(f.accent, "66"),
        transition: "width 0.4s"
      }
    })), !collapsed && items.map(function (e, idx) {
      return /*#__PURE__*/React.createElement("div", {
        key: idx,
        style: {
          animation: "slideLeft 0.2s ".concat(idx * 30, "ms ease both")
        }
      }, /*#__PURE__*/React.createElement(UnitRow, {
        entry: e,
        faction: list.faction,
        ptsMap: ptsMap,
        onSetPts: onSetPts,
        onDelete: function onDelete() {
          return onDeleteEntry(e.id);
        },
        onToggleWarlord: onToggleWarlord
      }));
    }));
  };
  return /*#__PURE__*/React.createElement("div", {
    style: pageStyle,
    className: "bg-lists"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(180deg,#0a0808 0%,#060606 100%)",
      borderBottom: "1px solid ".concat(f.accent, "33"),
      padding: "12px 16px",
      display: "flex",
      alignItems: "center",
      gap: "12px"
    }
  }, /*#__PURE__*/React.createElement(IconBtn, {
    onClick: onBack
  }, /*#__PURE__*/React.createElement(Ic.Back, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "38px",
      height: "38px",
      border: "1px solid ".concat(f.accent, "55"),
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "20px",
      background: "#050505",
      flexShrink: 0
    }
  }, f.icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, editingName ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "6px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("input", {
    ref: nameRef,
    value: nameVal,
    onChange: function onChange(e) {
      return setNameVal(e.target.value);
    },
    onKeyDown: function onKeyDown(e) {
      if (e.key === "Enter") confirmRename();
      if (e.key === "Escape") setEditingName(false);
    },
    style: {
      flex: 1,
      background: "#060402",
      border: "1px solid ".concat(f.accent, "66"),
      color: "#e8dfc0",
      padding: "5px 8px",
      fontSize: "14px",
      fontFamily: "'Cinzel',serif",
      outline: "none",
      letterSpacing: "1px"
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: confirmRename,
    style: {
      background: "".concat(f.accent, "33"),
      border: "1px solid ".concat(f.accent),
      color: f.accent,
      cursor: "pointer",
      padding: "5px 10px",
      fontSize: "14px"
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setEditingName(false);
    },
    style: {
      background: "none",
      border: "1px solid #1c1c1c",
      color: "#786858",
      cursor: "pointer",
      padding: "5px 10px",
      fontSize: "14px"
    }
  }, "\u2715")) : /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setNameVal(list.name);
      setEditingName(true);
    },
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      textAlign: "left",
      padding: 0,
      display: "flex",
      alignItems: "center",
      gap: "8px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#e8dfc0",
      fontSize: "15px",
      fontFamily: "'Cinzel',serif",
      letterSpacing: "1px",
      fontWeight: "700"
    }
  }, list.name), /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "10",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#7a6a58",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
  }))), !editingName && /*#__PURE__*/React.createElement("div", {
    style: {
      color: f.accent,
      fontSize: "10px",
      letterSpacing: "2px",
      fontFamily: "'Cinzel',serif",
      marginTop: "2px"
    }
  }, f.label.toUpperCase()))), /*#__PURE__*/React.createElement(IconBtn, {
    onClick: function onClick() {
      return setShowModal(true);
    }
  }, /*#__PURE__*/React.createElement(Ic.Plus, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#030303",
      padding: "12px 16px",
      borderBottom: "1px solid #131313"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginBottom: "8px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#35281a",
      fontSize: "9px",
      letterSpacing: "3px",
      fontFamily: "'Cinzel',serif",
      marginBottom: "4px"
    }
  }, "POINTS DE CROISADE"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "4px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: pct > 95 ? "#7a1515" : "#e8dfc0",
      fontSize: "28px",
      fontFamily: "'Cinzel',serif",
      fontWeight: "900",
      lineHeight: 1
    }
  }, pts), editingMaxPts ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "4px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#35281a",
      fontSize: "13px"
    }
  }, "/"), /*#__PURE__*/React.createElement("input", {
    ref: maxPtsRef,
    type: "number",
    value: maxPtsVal,
    onChange: function onChange(e) {
      return setMaxPtsVal(e.target.value);
    },
    onKeyDown: function onKeyDown(e) {
      if (e.key === "Enter") confirmMaxPts();
      if (e.key === "Escape") setEditingMaxPts(false);
    },
    style: {
      width: "70px",
      background: "#060402",
      border: "1px solid ".concat(f.accent, "66"),
      color: "#e8dfc0",
      padding: "3px 6px",
      fontSize: "13px",
      fontFamily: "'Cinzel',serif",
      outline: "none"
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: confirmMaxPts,
    style: {
      background: "".concat(f.accent, "33"),
      border: "1px solid ".concat(f.accent),
      color: f.accent,
      cursor: "pointer",
      padding: "3px 8px",
      fontSize: "13px",
      touchAction: "manipulation"
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setEditingMaxPts(false);
    },
    style: {
      background: "none",
      border: "1px solid #1c1c1c",
      color: "#786858",
      cursor: "pointer",
      padding: "3px 8px",
      fontSize: "13px",
      touchAction: "manipulation"
    }
  }, "\u2715")) : /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setMaxPtsVal(String(list.maxPts));
      setEditingMaxPts(true);
    },
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "baseline",
      gap: "4px",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#35281a",
      fontSize: "13px",
      fontFamily: "'Cinzel',serif"
    }
  }, "/ ", list.maxPts), /*#__PURE__*/React.createElement("svg", {
    width: "9",
    height: "9",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#7a6a58",
    strokeWidth: "2",
    style: {
      marginBottom: "2px"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: pts > list.maxPts ? "#7a1515" : "#6a5a48",
      fontSize: "11px"
    }
  }, list.maxPts - pts, " pts restants"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#060606",
      height: "4px",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "".concat(pct, "%"),
      height: "100%",
      background: pts > list.maxPts ? "#7a1515" : "linear-gradient(90deg,".concat(f.accent, "88,").concat(f.accent, ")"),
      transition: "width 0.5s"
    }
  }), [25, 50, 75].map(function (p) {
    return /*#__PURE__*/React.createElement("div", {
      key: p,
      style: {
        position: "absolute",
        top: 0,
        left: "".concat(p, "%"),
        width: "1px",
        height: "100%",
        background: "#131313"
      }
    });
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "16px"
    }
  }, entries.length === 0 && /*#__PURE__*/React.createElement(EmptyState, {
    icon: f.icon,
    title: "Liste vide",
    sub: "Ajoutez des unit\xE9s depuis votre inventaire"
  }), mergedSections.map(function (s) {
    return /*#__PURE__*/React.createElement(Section, {
      key: s.key,
      title: s.title,
      items: s.items
    });
  }), function () {
    var allSectionedIds = new Set(mergedSections.flatMap(function (s) {
      return s.items.map(function (e) {
        return e.id;
      });
    }));
    var orphans = entries.filter(function (e) {
      return !allSectionedIds.has(e.id);
    });
    return orphans.length > 0 ? /*#__PURE__*/React.createElement(Section, {
      key: "autres",
      title: "AUTRES",
      items: orphans
    }) : null;
  }()), showModal && /*#__PURE__*/React.createElement(ModalAddUnit, {
    faction: list.faction,
    inventory: inventory,
    mode: "list",
    onClose: function onClose() {
      return setShowModal(false);
    },
    onAdd: function onAdd(entry) {
      return onAddEntry(list.id, entry);
    }
  }));
}

// ══════════════════════════════════════════════════════════
// VIEW: Inventory
// ══════════════════════════════════════════════════════════

// Ordre des rôles pour l'affichage
var ROLE_ORDER = ["QG", "Seigneur de guerre", "Troupes", "Élite", "Rapide", "Lourd", "Transport", "Armiger", "Chevalier Questoris", "Chevalier Dominus", "Chevalier Cerastus", "Chevalier Acastus"];
var PAINT_KEYS = ["unpainted", "primed", "wip", "painted"];
function PaintCycleBtn(_ref25) {
  var status = _ref25.status,
    onCycle = _ref25.onCycle;
  var ps = PAINT_STATUS[status] || PAINT_STATUS.unpainted;
  var _useState39 = useState(0),
    _useState40 = _slicedToArray(_useState39, 2),
    animKey = _useState40[0],
    setAnimKey = _useState40[1];
  var _useState41 = useState(false),
    _useState42 = _slicedToArray(_useState41, 2),
    showRipple = _useState42[0],
    setShowRipple = _useState42[1];
  var handleClick = function handleClick() {
    setAnimKey(function (k) {
      return k + 1;
    });
    setShowRipple(true);
    setTimeout(function () {
      return setShowRipple(false);
    }, 400);
    onCycle();
  };
  return /*#__PURE__*/React.createElement("button", {
    onClick: handleClick,
    title: "Changer le statut de peinture",
    style: {
      display: "flex",
      alignItems: "center",
      gap: "6px",
      padding: "6px 10px",
      background: "#0d0b08",
      border: "1px solid ".concat(ps.color, "66"),
      cursor: "pointer",
      transition: "border-color 0.3s, background 0.3s",
      touchAction: "manipulation",
      position: "relative",
      overflow: "hidden"
    }
  }, showRipple && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "".concat(ps.color, "22"),
      animation: "paintPop 0.35s ease both",
      borderRadius: "inherit",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    key: animKey,
    style: {
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      background: ps.color,
      flexShrink: 0,
      boxShadow: "0 0 6px ".concat(ps.color),
      animation: "paintPop 0.35s cubic-bezier(0.34,1.56,0.64,1) both"
    }
  }), /*#__PURE__*/React.createElement("span", {
    key: animKey + "t",
    style: {
      fontSize: "10px",
      color: ps.color,
      fontFamily: "'Cinzel',serif",
      letterSpacing: "1px",
      whiteSpace: "nowrap",
      animation: "slideLeft 0.2s ease both"
    }
  }, ps.label), /*#__PURE__*/React.createElement("svg", {
    width: "9",
    height: "9",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: ps.color,
    strokeWidth: "2.5",
    opacity: "0.7"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  })));
}
function QtyEditor(_ref26) {
  var qty = _ref26.qty,
    onUpdate = _ref26.onUpdate,
    accent = _ref26.accent;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "2px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return qty > 1 && onUpdate(qty - 1);
    },
    style: {
      width: "32px",
      height: "32px",
      background: "#0f0c08",
      border: "1px solid ".concat(accent, "55"),
      color: qty > 1 ? accent : "#7a6a58",
      cursor: qty > 1 ? "pointer" : "default",
      fontSize: "18px",
      lineHeight: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      touchAction: "manipulation"
    }
  }, "\u2212"), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: "30px",
      textAlign: "center",
      fontSize: "13px",
      color: accent,
      fontFamily: "monospace",
      fontWeight: "700",
      background: "#080604",
      border: "1px solid ".concat(accent, "33"),
      padding: "4px 6px"
    }
  }, qty), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return onUpdate(qty + 1);
    },
    style: {
      width: "32px",
      height: "32px",
      background: "#0f0c08",
      border: "1px solid ".concat(accent, "55"),
      color: accent,
      cursor: "pointer",
      fontSize: "18px",
      lineHeight: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      touchAction: "manipulation"
    }
  }, "+"));
}
function InventoryItem(_ref27) {
  var _item$unit;
  var item = _ref27.item,
    faction = _ref27.faction,
    ptsMap = _ref27.ptsMap,
    onSetPts = _ref27.onSetPts,
    onDelete = _ref27.onDelete,
    onEditPhoto = _ref27.onEditPhoto,
    onUpdatePaint = _ref27.onUpdatePaint,
    onUpdateQty = _ref27.onUpdateQty,
    onUpdateModelCount = _ref27.onUpdateModelCount,
    accent = _ref27.accent,
    viewMode = _ref27.viewMode,
    dragHandleProps = _ref27.dragHandleProps;
  var f = FACTIONS[faction] || FACTIONS["SM"];
  var ps = PAINT_STATUS[item.paintStatus] || PAINT_STATUS.unpainted;
  var defaultCount = MODEL_COUNT[(_item$unit = item.unit) === null || _item$unit === void 0 ? void 0 : _item$unit.name] || 1;
  var modelCount = item.modelCount || defaultCount;
  var totalFigs = modelCount * (item.qty || 1);
  var cycleStatus = function cycleStatus() {
    var idx = PAINT_KEYS.indexOf(item.paintStatus || "unpainted");
    var next = PAINT_KEYS[(idx + 1) % PAINT_KEYS.length];
    onUpdatePaint(item.id, next);
  };
  var borderColor = item.paintStatus === "painted" ? PAINT_STATUS.painted.color : item.paintStatus === "wip" ? PAINT_STATUS.wip.color : item.paintStatus === "primed" ? PAINT_STATUS.primed.color : accent;

  // ── GRID CARD ─────────────────────────────────────────
  if (viewMode === "grid") {
    return /*#__PURE__*/React.createElement("div", {
      className: "hcard card-stagger",
      style: {
        background: f.bgCard || "linear-gradient(180deg,#181512 0%,#0e0c0a 100%)",
        border: "1px solid ".concat(borderColor, "22"),
        borderTop: "2px solid ".concat(borderColor),
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        position: "relative",
        transition: "background 0.4s, border-color 0.3s"
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: function onClick() {
        return onEditPhoto(item);
      },
      style: {
        height: "110px",
        cursor: "pointer",
        background: "#040404",
        position: "relative",
        overflow: "hidden"
      }
    }, item.photo ? /*#__PURE__*/React.createElement("img", {
      src: item.photo,
      alt: "",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block"
      }
    }) : /*#__PURE__*/React.createElement("div", {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "4px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "28px",
        opacity: 0.12
      }
    }, faction === "SM" ? "✠" : faction === "TY" ? "☠" : "⚜"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: accent,
        fontSize: "7px",
        opacity: 0.3,
        fontFamily: "'Cinzel',serif",
        letterSpacing: "2px"
      }
    }, "PHOTO")), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: "6px",
        right: "6px",
        width: "8px",
        height: "8px",
        borderRadius: "50%",
        background: ps.color,
        boxShadow: "0 0 6px ".concat(ps.color, "88")
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to top,rgba(10,8,6,0.85) 0%,transparent 55%)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        bottom: "6px",
        left: "7px",
        right: "7px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        color: "#e8dfc0",
        fontSize: "10px",
        fontFamily: "'Cinzel',serif",
        lineHeight: 1.2,
        textShadow: "0 1px 4px #000"
      }
    }, item.qty > 1 && /*#__PURE__*/React.createElement("span", {
      style: {
        color: accent,
        marginRight: "3px",
        fontSize: "9px"
      }
    }, "\xD7", item.qty), item.unit.name))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "7px 8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "4px"
      }
    }, /*#__PURE__*/React.createElement(QtyEditor, {
      qty: item.qty,
      accent: accent,
      onUpdate: function onUpdate(n) {
        return onUpdateQty(item.id, n);
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "2px"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return onUpdateModelCount && onUpdateModelCount(item.id, Math.max(1, modelCount - 1));
      },
      style: {
        width: "16px",
        height: "16px",
        background: "#060402",
        border: "1px solid #1c1c1c",
        color: "#4a3a28",
        cursor: "pointer",
        fontSize: "10px",
        lineHeight: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        touchAction: "manipulation"
      }
    }, "\u2212"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: item.modelCount ? accent : "#9a8a78",
        fontSize: "9px",
        fontFamily: "monospace",
        minWidth: "20px",
        textAlign: "center"
      }
    }, modelCount), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return onUpdateModelCount && onUpdateModelCount(item.id, modelCount + 1);
      },
      style: {
        width: "16px",
        height: "16px",
        background: "#060402",
        border: "1px solid #1c1c1c",
        color: "#4a3a28",
        cursor: "pointer",
        fontSize: "10px",
        lineHeight: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        touchAction: "manipulation"
      }
    }, "+")), /*#__PURE__*/React.createElement("button", {
      onClick: cycleStatus,
      title: "Changer statut peinture",
      style: {
        display: "flex",
        alignItems: "center",
        gap: "3px",
        padding: "2px 6px",
        background: "#060402",
        border: "1px solid ".concat(ps.color, "33"),
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "5px",
        height: "5px",
        borderRadius: "50%",
        background: ps.color
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "7px",
        color: ps.color,
        fontFamily: "'Cinzel',serif"
      }
    }, ps.label)), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return onDelete(item.id);
      },
      style: {
        background: "none",
        border: "1px solid #2a2215",
        color: "#6a4a3a",
        cursor: "pointer",
        padding: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        touchAction: "manipulation"
      }
    }, /*#__PURE__*/React.createElement(Ic.Trash, null))));
  }

  // ── LIST CARD (default) ────────────────────────────────
  return /*#__PURE__*/React.createElement("div", {
    className: "hcard card-stagger",
    style: {
      background: f.bgCard || "linear-gradient(180deg,#181512 0%,#121008 100%)",
      border: "1px solid ".concat(borderColor, "22"),
      borderLeft: "3px solid ".concat(borderColor),
      marginBottom: "5px",
      display: "flex",
      alignItems: "stretch",
      transition: "background 0.4s, border-color 0.3s"
    }
  }, /*#__PURE__*/React.createElement("div", _extends({}, dragHandleProps, {
    style: {
      width: "22px",
      flexShrink: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "grab",
      borderRight: "1px solid #1a1a16",
      touchAction: "none"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "16",
    viewBox: "0 0 10 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "1.5",
    fill: "#9a8a78"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "3",
    r: "1.5",
    fill: "#9a8a78"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "8",
    r: "1.5",
    fill: "#9a8a78"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "8",
    r: "1.5",
    fill: "#9a8a78"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "13",
    r: "1.5",
    fill: "#9a8a78"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "13",
    r: "1.5",
    fill: "#9a8a78"
  }))), /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return onEditPhoto(item);
    },
    style: {
      width: "46px",
      flexShrink: 0,
      cursor: "pointer",
      borderRight: "1px solid #0c0c0c",
      overflow: "hidden",
      position: "relative"
    }
  }, item.photo ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
    src: item.photo,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(to top,rgba(0,0,0,0.65) 0%,transparent 45%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: "3px",
      right: "3px",
      fontSize: "8px"
    }
  }, "\uD83D\uDCF7")) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      minHeight: "62px",
      height: "100%",
      background: "#040404",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "3px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "16px",
      opacity: 0.2
    }
  }, "\uD83D\uDCF7"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: "8px 10px",
      display: "flex",
      alignItems: "center",
      gap: "8px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "6px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#e8dfc0",
      fontSize: "13px",
      fontFamily: "'Cinzel',serif",
      lineHeight: 1.3
    }
  }, item.unit.name), modelCount > 1 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: item.modelCount ? accent : "#9a8a78",
      fontSize: "9px",
      fontFamily: "monospace"
    }
  }, totalFigs > modelCount ? "".concat(modelCount, "\xD7").concat(item.qty) : "".concat(modelCount), "fig")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "6px",
      marginTop: "3px",
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(PaintCycleBtn, {
    status: item.paintStatus || "unpainted",
    onCycle: cycleStatus
  }), /*#__PURE__*/React.createElement(WahapediaBtn, {
    unitName: item.unit.name,
    faction: faction,
    accent: accent
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      gap: "6px"
    }
  }, /*#__PURE__*/React.createElement(QtyEditor, {
    qty: item.qty,
    accent: accent,
    onUpdate: function onUpdate(n) {
      return onUpdateQty(item.id, n);
    }
  }), /*#__PURE__*/React.createElement(PtsBadge, {
    unitId: item.unit.id,
    faction: faction,
    qty: item.qty,
    pts: ptsMap["".concat(faction, ":").concat(item.unit.id)],
    onSetPts: onSetPts
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return onDelete(item.id);
    },
    style: {
      background: "none",
      border: "1px solid #2a2215",
      color: "#6a4a3a",
      cursor: "pointer",
      padding: "6px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      touchAction: "manipulation"
    }
  }, /*#__PURE__*/React.createElement(Ic.Trash, null)))));
}
function ViewInventory(_ref28) {
  var inventory = _ref28.inventory,
    ptsMap = _ref28.ptsMap,
    onSetPts = _ref28.onSetPts,
    onAdd = _ref28.onAdd,
    onDelete = _ref28.onDelete,
    onUpdatePhoto = _ref28.onUpdatePhoto,
    onUpdatePaint = _ref28.onUpdatePaint,
    onUpdateQty = _ref28.onUpdateQty,
    onUpdateModelCount = _ref28.onUpdateModelCount,
    onReorder = _ref28.onReorder;
  var _useState43 = useState(false),
    _useState44 = _slicedToArray(_useState43, 2),
    showModal = _useState44[0],
    setShowModal = _useState44[1];
  var _useState45 = useState(null),
    _useState46 = _slicedToArray(_useState45, 2),
    editPhotoItem = _useState46[0],
    setEditPhotoItem = _useState46[1];
  var _useState47 = useState("IK"),
    _useState48 = _slicedToArray(_useState47, 2),
    faction = _useState48[0],
    setFaction = _useState48[1];
  var _useState49 = useState("all"),
    _useState50 = _slicedToArray(_useState49, 2),
    chapterFilter = _useState50[0],
    setChapterFilter = _useState50[1];
  var _useState51 = useState("list"),
    _useState52 = _slicedToArray(_useState51, 2),
    viewMode = _useState52[0],
    setViewMode = _useState52[1];
  var _useState53 = useState("all"),
    _useState54 = _slicedToArray(_useState53, 2),
    paintFilter = _useState54[0],
    setPaintFilter = _useState54[1];
  var _useState55 = useState({}),
    _useState56 = _slicedToArray(_useState55, 2),
    collapsedRoles = _useState56[0],
    setCollapsedRoles = _useState56[1];
  var dragState = useRef(null);
  var _useState57 = useState(null),
    _useState58 = _slicedToArray(_useState57, 2),
    draggingId = _useState58[0],
    setDraggingId = _useState58[1];
  var _useState59 = useState(null),
    _useState60 = _slicedToArray(_useState59, 2),
    dragOverId = _useState60[0],
    setDragOverId = _useState60[1];
  var f = FACTIONS[faction];
  var availableChapters = faction === "SM" ? ["all"].concat(_toConsumableArray(Array.from(new Set(inventory.filter(function (i) {
    return i.faction === "SM";
  }).map(function (i) {
    var _UNITS_DB$SM;
    return ((_UNITS_DB$SM = UNITS_DB["SM"]) === null || _UNITS_DB$SM === void 0 || (_UNITS_DB$SM = _UNITS_DB$SM.find(function (u) {
      return u.id === i.unitId;
    })) === null || _UNITS_DB$SM === void 0 ? void 0 : _UNITS_DB$SM.chapter) || "Générique";
  }).filter(Boolean))))) : [];
  var rawItems = inventory.filter(function (i) {
    return i.faction === faction;
  }).filter(function (i) {
    return paintFilter === "all" || (paintFilter === "unpainted" ? !i.paintStatus || i.paintStatus === "unpainted" : i.paintStatus === paintFilter);
  }).map(function (i) {
    var _UNITS_DB$i$faction;
    return _objectSpread(_objectSpread({}, i), {}, {
      unit: (_UNITS_DB$i$faction = UNITS_DB[i.faction]) === null || _UNITS_DB$i$faction === void 0 ? void 0 : _UNITS_DB$i$faction.find(function (u) {
        return u.id === i.unitId;
      })
    });
  }).filter(function (i) {
    return i.unit;
  }).filter(function (i) {
    var _i$unit, _i$unit2;
    if (faction !== "SM" || chapterFilter === "all") return true;
    var ch = ((_i$unit = i.unit) === null || _i$unit === void 0 ? void 0 : _i$unit.chapter) || "Générique";
    var forbidden = ((_i$unit2 = i.unit) === null || _i$unit2 === void 0 ? void 0 : _i$unit2.forbidden) || [];
    if (forbidden.includes(chapterFilter)) return false;
    if (ch === "Générique") return true;
    return ch === chapterFilter;
  });

  // Group by role, respecting custom order (inventory order within each role)
  var grouped = {};
  ROLE_ORDER.forEach(function (r) {
    grouped[r] = [];
  });
  rawItems.forEach(function (item) {
    var role = item.unit.role;
    if (!grouped[role]) grouped[role] = [];
    grouped[role].push(item);
  });
  var usedRoles = ROLE_ORDER.filter(function (r) {
    var _grouped$r;
    return ((_grouped$r = grouped[r]) === null || _grouped$r === void 0 ? void 0 : _grouped$r.length) > 0;
  });
  var toggleRole = function toggleRole(role) {
    return setCollapsedRoles(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, role, !prev[role]));
    });
  };

  // Drag-and-drop handlers
  var _onDragStart = function onDragStart(e, item, role) {
    var _e$touches$0$clientY, _e$touches;
    dragState.current = {
      id: item.id,
      role: role,
      startY: (_e$touches$0$clientY = (_e$touches = e.touches) === null || _e$touches === void 0 || (_e$touches = _e$touches[0]) === null || _e$touches === void 0 ? void 0 : _e$touches.clientY) !== null && _e$touches$0$clientY !== void 0 ? _e$touches$0$clientY : e.clientY
    };
    setDraggingId(item.id);
    if (e.dataTransfer) {
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("text/plain", item.id);
    }
  };
  var _onDragOver = function onDragOver(e, item) {
    e.preventDefault();
    if (item.id !== draggingId) setDragOverId(item.id);
  };
  var _onDrop = function onDrop(e, targetItem) {
    e.preventDefault();
    if (!dragState.current || dragState.current.id === targetItem.id) return;
    onReorder(dragState.current.id, targetItem.id, faction);
    setDraggingId(null);
    setDragOverId(null);
    dragState.current = null;
  };
  var onDragEnd = function onDragEnd() {
    setDraggingId(null);
    setDragOverId(null);
    dragState.current = null;
  };

  // Touch drag
  var _onTouchStart = function onTouchStart(e, item, role) {
    dragState.current = {
      id: item.id,
      role: role,
      startY: e.touches[0].clientY
    };
    setDraggingId(item.id);
  };
  var onTouchMove = function onTouchMove(e) {
    if (!dragState.current) return;
    var touch = e.touches[0];
    var el = document.elementFromPoint(touch.clientX, touch.clientY);
    var card = el === null || el === void 0 ? void 0 : el.closest("[data-itemid]");
    if (card) setDragOverId(card.dataset.itemid);
  };
  var onTouchEnd = function onTouchEnd() {
    if (!dragState.current || !dragOverId) {
      setDraggingId(null);
      setDragOverId(null);
      dragState.current = null;
      return;
    }
    onReorder(dragState.current.id, dragOverId, faction);
    setDraggingId(null);
    setDragOverId(null);
    dragState.current = null;
  };
  return /*#__PURE__*/React.createElement("div", {
    style: pageStyle,
    className: "bg-inventory"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#030202",
      borderBottom: "1px solid #0f0f0f",
      padding: "18px 16px 14px",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#b8922a",
      fontSize: "8px",
      letterSpacing: "5px",
      fontFamily: "'Cinzel',serif",
      opacity: 0.6,
      marginBottom: "4px"
    }
  }, "REGISTRE DES RELIQUES"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#e8dfc0",
      fontSize: "18px",
      fontFamily: "'Cinzel Decorative','Cinzel',serif",
      letterSpacing: "3px",
      fontWeight: "700",
      textShadow: "0 0 20px #b8922a22"
    }
  }, "INVENTAIRE"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#7a6a58",
      fontSize: "9px",
      letterSpacing: "2px",
      fontFamily: "'Cinzel',serif",
      marginTop: "3px"
    }
  }, inventory.length, " R\xC9F\xC9RENCES")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "6px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setViewMode(function (v) {
        return v === "list" ? "grid" : "list";
      });
    },
    title: viewMode === "list" ? "Vue grille" : "Vue liste",
    style: {
      background: "none",
      border: "1px solid #1c1c1c",
      color: viewMode === "grid" ? "#b8922a" : "#2a2218",
      cursor: "pointer",
      padding: "7px 9px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, viewMode === "list" ? /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "7",
    height: "7"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "3",
    width: "7",
    height: "7"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "14",
    width: "7",
    height: "7"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "14",
    width: "7",
    height: "7"
  })) : /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "8",
    y1: "6",
    x2: "21",
    y2: "6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "8",
    y1: "12",
    x2: "21",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "8",
    y1: "18",
    x2: "21",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "6",
    x2: "3.01",
    y2: "6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "12",
    x2: "3.01",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "18",
    x2: "3.01",
    y2: "18"
  }))), /*#__PURE__*/React.createElement(IconBtn, {
    onClick: function onClick() {
      return setShowModal(true);
    }
  }, /*#__PURE__*/React.createElement(Ic.Plus, null))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      background: "#020202",
      borderBottom: "1px solid #0f0f0f"
    }
  }, Object.entries(FACTIONS).map(function (_ref29) {
    var _ref30 = _slicedToArray(_ref29, 2),
      k = _ref30[0],
      v = _ref30[1];
    var fItems = inventory.filter(function (i) {
      return i.faction === k;
    });
    var painted = fItems.filter(function (i) {
      return i.paintStatus === "painted";
    }).length;
    var total = fItems.length;
    var pct = total ? Math.round(painted / total * 100) : 0;
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      onClick: function onClick() {
        setFaction(k);
        setChapterFilter("all");
        setPaintFilter("all");
        setCollapsedRoles({});
      },
      style: {
        flex: 1,
        background: faction === k ? "".concat(v.bg || "#020202") : "none",
        border: "none",
        borderBottom: faction === k ? "2px solid ".concat(v.accent) : "2px solid transparent",
        color: faction === k ? v.accent : "#181410",
        padding: "8px 0 6px",
        cursor: "pointer",
        fontFamily: "'Cinzel',serif",
        fontSize: "9px",
        letterSpacing: "2px",
        textShadow: faction === k ? "0 0 10px ".concat(v.accent, "66") : "none",
        transition: "background 0.3s"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "16px",
        marginBottom: "2px"
      }
    }, v.icon), v["short"], total > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        margin: "4px 6px 0",
        height: "2px",
        background: "#0f0f0f",
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "".concat(pct, "%"),
        height: "100%",
        background: pct === 100 ? "#2a7a2a" : v.accent,
        transition: "width 0.4s",
        opacity: faction === k ? 1 : 0.4
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "center",
        gap: "3px",
        marginTop: "4px",
        flexWrap: "wrap",
        padding: "0 4px"
      }
    }, [{
      key: "painted",
      color: PAINT_STATUS.painted.color,
      count: fItems.filter(function (i) {
        return i.paintStatus === "painted";
      }).reduce(function (s, i) {
        return s + (i.qty || 1);
      }, 0)
    }, {
      key: "wip",
      color: PAINT_STATUS.wip.color,
      count: fItems.filter(function (i) {
        return i.paintStatus === "wip";
      }).reduce(function (s, i) {
        return s + (i.qty || 1);
      }, 0)
    }, {
      key: "primed",
      color: PAINT_STATUS.primed.color,
      count: fItems.filter(function (i) {
        return i.paintStatus === "primed";
      }).reduce(function (s, i) {
        return s + (i.qty || 1);
      }, 0)
    }, {
      key: "unpainted",
      color: PAINT_STATUS.unpainted.color,
      count: fItems.filter(function (i) {
        return !i.paintStatus || i.paintStatus === "unpainted";
      }).reduce(function (s, i) {
        return s + (i.qty || 1);
      }, 0)
    }].filter(function (s) {
      return s.count > 0;
    }).map(function (s) {
      return /*#__PURE__*/React.createElement("div", {
        key: s.key,
        style: {
          display: "flex",
          alignItems: "center",
          gap: "1px"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: "5px",
          height: "5px",
          borderRadius: "50%",
          background: faction === k ? s.color : s.color + "55"
        }
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: "7px",
          color: faction === k ? s.color : "#7a6a58",
          fontFamily: "monospace"
        }
      }, s.count));
    }))));
  })), faction === "SM" && availableChapters.length > 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "4px",
      overflowX: "auto",
      padding: "5px 12px",
      borderBottom: "1px solid #0f0e0d",
      scrollbarWidth: "none"
    }
  }, availableChapters.map(function (ch) {
    return /*#__PURE__*/React.createElement("button", {
      key: ch,
      onClick: function onClick() {
        return setChapterFilter(ch);
      },
      style: {
        flexShrink: 0,
        padding: "3px 8px",
        background: chapterFilter === ch ? "".concat(f.accent, "22") : "transparent",
        border: "1px solid ".concat(chapterFilter === ch ? f.accent : "#1a1816"),
        color: chapterFilter === ch ? f.accent : "#9a8a78",
        fontFamily: "'Cinzel',serif",
        fontSize: "8px",
        letterSpacing: "1px",
        cursor: "pointer",
        whiteSpace: "nowrap",
        touchAction: "manipulation"
      }
    }, ch === "all" ? "TOUS" : ch.toUpperCase());
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "4px",
      padding: "6px 12px",
      background: "#020202",
      borderBottom: "1px solid #0a0a0a",
      overflowX: "auto"
    }
  }, [{
    key: "all",
    label: "TOUT",
    color: "#9a8a78",
    dot: null
  }, {
    key: "painted",
    label: "PEINT",
    color: PAINT_STATUS.painted.color,
    dot: PAINT_STATUS.painted.color
  }, {
    key: "wip",
    label: "EN COURS",
    color: PAINT_STATUS.wip.color,
    dot: PAINT_STATUS.wip.color
  }, {
    key: "primed",
    label: "APPRÊTÉ",
    color: PAINT_STATUS.primed.color,
    dot: PAINT_STATUS.primed.color
  }, {
    key: "unpainted",
    label: "NON PEINT",
    color: PAINT_STATUS.unpainted.color,
    dot: PAINT_STATUS.unpainted.color
  }].map(function (fi) {
    var cnt = fi.key === "all" ? inventory.filter(function (i) {
      return i.faction === faction;
    }).reduce(function (s, i) {
      return s + (i.qty || 1);
    }, 0) : fi.key === "unpainted" ? inventory.filter(function (i) {
      return i.faction === faction && (!i.paintStatus || i.paintStatus === "unpainted");
    }).reduce(function (s, i) {
      return s + (i.qty || 1);
    }, 0) : inventory.filter(function (i) {
      return i.faction === faction && i.paintStatus === fi.key;
    }).reduce(function (s, i) {
      return s + (i.qty || 1);
    }, 0);
    var active = paintFilter === fi.key;
    return /*#__PURE__*/React.createElement("button", {
      key: fi.key,
      onClick: function onClick() {
        return setPaintFilter(fi.key);
      },
      style: {
        display: "flex",
        alignItems: "center",
        gap: "4px",
        padding: "4px 10px",
        background: active ? "".concat(fi.color, "22") : "#060402",
        border: "1px solid ".concat(active ? fi.color + "66" : "#1c1c1c"),
        color: active ? fi.color : "#9a8a78",
        fontFamily: "'Cinzel',serif",
        fontSize: "8px",
        letterSpacing: "1px",
        cursor: "pointer",
        whiteSpace: "nowrap",
        flexShrink: 0,
        touchAction: "manipulation"
      }
    }, fi.dot && /*#__PURE__*/React.createElement("div", {
      style: {
        width: "6px",
        height: "6px",
        borderRadius: "50%",
        background: fi.dot,
        flexShrink: 0
      }
    }), fi.label, cnt > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        color: active ? fi.color : "#7a6a58",
        fontFamily: "monospace",
        fontSize: "9px"
      }
    }, cnt));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "12px 16px"
    },
    onTouchMove: onTouchMove,
    onTouchEnd: onTouchEnd
  }, rawItems.length === 0 && /*#__PURE__*/React.createElement(EmptyState, {
    icon: f.icon,
    title: "Aucune figurine",
    sub: "Ajoutez des ".concat(f.label)
  }), usedRoles.map(function (role) {
    return /*#__PURE__*/React.createElement("div", {
      key: role,
      style: {
        marginBottom: "16px"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return toggleRole(role);
      },
      style: {
        width: "100%",
        background: "none",
        border: "none",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "8px",
        cursor: "pointer",
        padding: "4px 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "2px",
        height: "12px",
        background: f.accent,
        opacity: 0.6,
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#9a8a78",
        fontFamily: "'Cinzel',serif",
        fontSize: "10px",
        letterSpacing: "4px",
        flex: 1,
        textAlign: "left"
      }
    }, role.toUpperCase()), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#9a8a78",
        fontSize: "10px"
      }
    }, grouped[role].length, " \u2014 "), /*#__PURE__*/React.createElement("svg", {
      width: "10",
      height: "10",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#9a8a78",
      strokeWidth: "2.5"
    }, /*#__PURE__*/React.createElement("polyline", {
      points: collapsedRoles[role] ? "6 9 12 15 18 9" : "18 15 12 9 6 15"
    }))), !collapsedRoles[role] && (viewMode === "grid" ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "6px",
        marginBottom: "4px"
      }
    }, grouped[role].map(function (item, idx) {
      return /*#__PURE__*/React.createElement(InventoryItem, {
        key: item.id,
        item: item,
        faction: faction,
        ptsMap: ptsMap,
        onSetPts: onSetPts,
        onDelete: onDelete,
        onEditPhoto: setEditPhotoItem,
        onUpdatePaint: onUpdatePaint,
        onUpdateQty: onUpdateQty,
        onUpdateModelCount: onUpdateModelCount,
        accent: f.accent,
        viewMode: "grid",
        dragHandleProps: {}
      });
    })) : grouped[role].map(function (item, idx) {
      return /*#__PURE__*/React.createElement("div", {
        key: item.id,
        "data-itemid": item.id,
        style: {
          opacity: draggingId === item.id ? 0.5 : 1,
          outline: dragOverId === item.id ? "2px solid ".concat(f.accent) : "none",
          background: draggingId === item.id ? "".concat(f.accent, "11") : "transparent",
          transition: "opacity 0.15s",
          animation: "slideLeft 0.2s ".concat(idx * 25, "ms ease both")
        },
        onDragOver: function onDragOver(e) {
          return _onDragOver(e, item);
        },
        onDrop: function onDrop(e) {
          return _onDrop(e, item);
        }
      }, /*#__PURE__*/React.createElement(InventoryItem, {
        item: item,
        faction: faction,
        ptsMap: ptsMap,
        onSetPts: onSetPts,
        onDelete: onDelete,
        onEditPhoto: setEditPhotoItem,
        onUpdatePaint: onUpdatePaint,
        onUpdateQty: onUpdateQty,
        onUpdateModelCount: onUpdateModelCount,
        accent: f.accent,
        viewMode: "list",
        dragHandleProps: {
          draggable: true,
          onDragStart: function onDragStart(e) {
            return _onDragStart(e, item, role);
          },
          onDragEnd: onDragEnd,
          onTouchStart: function onTouchStart(e) {
            return _onTouchStart(e, item, role);
          }
        }
      }));
    })));
  })), showModal && /*#__PURE__*/React.createElement(ModalAddUnit, {
    faction: faction,
    inventory: inventory,
    mode: "inventory",
    onClose: function onClose() {
      return setShowModal(false);
    },
    onAdd: onAdd
  }), editPhotoItem && /*#__PURE__*/React.createElement(ModalEditPhoto, {
    item: editPhotoItem,
    faction: faction,
    onClose: function onClose() {
      return setEditPhotoItem(null);
    },
    onSave: function onSave(photo) {
      return onUpdatePhoto(editPhotoItem.id, photo);
    }
  }));
}

// ══════════════════════════════════════════════════════════
// VIEW: Stats
// ══════════════════════════════════════════════════════════

function StatBar(_ref31) {
  var pct = _ref31.pct,
    color = _ref31.color,
    _ref31$height = _ref31.height,
    height = _ref31$height === void 0 ? 4 : _ref31$height,
    _ref31$bg = _ref31.bg,
    bg = _ref31$bg === void 0 ? "#0a0906" : _ref31$bg;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      height: height,
      position: "relative",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "".concat(Math.min(100, pct), "%"),
      height: "100%",
      background: color,
      transition: "width 0.6s ease"
    }
  }));
}
function ViewStats(_ref32) {
  var inventory = _ref32.inventory,
    lists = _ref32.lists,
    ptsMap = _ref32.ptsMap,
    wishlist = _ref32.wishlist;
  var totalUnits = inventory.reduce(function (s, i) {
    return s + (i.qty || 1);
  }, 0);
  var totalModels = inventory.reduce(function (s, i) {
    var _UNITS_DB$i$faction2;
    var u = (_UNITS_DB$i$faction2 = UNITS_DB[i.faction]) === null || _UNITS_DB$i$faction2 === void 0 ? void 0 : _UNITS_DB$i$faction2.find(function (u) {
      return u.id === i.unitId;
    });
    return s + getModelCount(u === null || u === void 0 ? void 0 : u.name, i.qty || 1);
  }, 0);
  var totalUnique = inventory.length;
  var totalPainted = inventory.filter(function (i) {
    return i.paintStatus === "painted";
  }).reduce(function (s, i) {
    return s + (i.qty || 1);
  }, 0);
  var totalPrimed = inventory.filter(function (i) {
    return i.paintStatus === "primed";
  }).reduce(function (s, i) {
    return s + (i.qty || 1);
  }, 0);
  var totalWip = inventory.filter(function (i) {
    return i.paintStatus === "wip";
  }).reduce(function (s, i) {
    return s + (i.qty || 1);
  }, 0);
  var totalUnpainted = inventory.filter(function (i) {
    return i.paintStatus === "unpainted" || !i.paintStatus;
  }).reduce(function (s, i) {
    return s + (i.qty || 1);
  }, 0);
  var paintPct = totalUnits ? Math.round(totalPainted / totalUnits * 100) : 0;

  // Points investis par faction
  var factionStats = Object.entries(FACTIONS).map(function (_ref33) {
    var _ref34 = _slicedToArray(_ref33, 2),
      k = _ref34[0],
      f = _ref34[1];
    var items = inventory.filter(function (i) {
      return i.faction === k;
    });
    var models = items.reduce(function (s, i) {
      var _UNITS_DB$k;
      var u = (_UNITS_DB$k = UNITS_DB[k]) === null || _UNITS_DB$k === void 0 ? void 0 : _UNITS_DB$k.find(function (u) {
        return u.id === i.unitId;
      });
      return s + getModelCount(u === null || u === void 0 ? void 0 : u.name, i.qty || 1, i.modelCount);
    }, 0);
    var units = items.reduce(function (s, i) {
      return s + (i.qty || 1);
    }, 0);
    var painted = items.filter(function (i) {
      return i.paintStatus === "painted";
    }).reduce(function (s, i) {
      return s + (i.qty || 1);
    }, 0);
    var pts = items.reduce(function (s, i) {
      var _UNITS_DB$k2;
      var manual = ptsMap["".concat(k, ":").concat(i.unitId)];
      var unit = (_UNITS_DB$k2 = UNITS_DB[k]) === null || _UNITS_DB$k2 === void 0 ? void 0 : _UNITS_DB$k2.find(function (u) {
        return u.id === i.unitId;
      });
      var p = manual || (unit ? POINTS_DB[unit.name] : 0) || 0;
      return s + p * i.qty;
    }, 0);
    // Répartition par rôle
    var byRole = {};
    items.forEach(function (i) {
      var _UNITS_DB$k3;
      var unit = (_UNITS_DB$k3 = UNITS_DB[k]) === null || _UNITS_DB$k3 === void 0 ? void 0 : _UNITS_DB$k3.find(function (u) {
        return u.id === i.unitId;
      });
      if (!unit) return;
      byRole[unit.role] = (byRole[unit.role] || 0) + i.qty;
    });
    return {
      key: k,
      f: f,
      models: models,
      units: units,
      painted: painted,
      pts: pts,
      byRole: byRole,
      uniqueUnits: items.length
    };
  }).filter(function (s) {
    return s.models > 0;
  });

  // Unités les plus présentes dans les listes
  var unitUsage = {};
  lists.forEach(function (list) {
    (list.entries || []).forEach(function (e) {
      var key = "".concat(list.faction, ":").concat(e.unitId);
      unitUsage[key] = unitUsage[key] || {
        count: 0,
        faction: list.faction,
        unitId: e.unitId
      };
      unitUsage[key].count += 1;
    });
  });
  var topUnits = Object.values(unitUsage).sort(function (a, b) {
    return b.count - a.count;
  }).slice(0, 5).map(function (u) {
    var _UNITS_DB$u$faction;
    return _objectSpread(_objectSpread({}, u), {}, {
      unit: (_UNITS_DB$u$faction = UNITS_DB[u.faction]) === null || _UNITS_DB$u$faction === void 0 ? void 0 : _UNITS_DB$u$faction.find(function (un) {
        return un.id === u.unitId;
      }),
      f: FACTIONS[u.faction]
    });
  }).filter(function (u) {
    return u.unit;
  });
  var totalPts = inventory.reduce(function (s, i) {
    var _UNITS_DB$i$faction3;
    var unit = (_UNITS_DB$i$faction3 = UNITS_DB[i.faction]) === null || _UNITS_DB$i$faction3 === void 0 ? void 0 : _UNITS_DB$i$faction3.find(function (u) {
      return u.id === i.unitId;
    });
    var pts = ptsMap["".concat(i.faction, ":").concat(i.unitId)] || (unit ? POINTS_DB[unit.name] : 0) || 0;
    return s + pts * (i.qty || 1);
  }, 0);
  var totalValue = inventory.reduce(function (s, i) {
    var _UNITS_DB$i$faction4;
    var unit = (_UNITS_DB$i$faction4 = UNITS_DB[i.faction]) === null || _UNITS_DB$i$faction4 === void 0 ? void 0 : _UNITS_DB$i$faction4.find(function (u) {
      return u.id === i.unitId;
    });
    return s + (unit ? (SHOP_PRICES[unit.name] || 0) * (i.qty || 1) : 0);
  }, 0);
  var accent = "#b8922a";
  return /*#__PURE__*/React.createElement("div", {
    style: pageStyle,
    className: "bg-stats"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#030202",
      borderBottom: "1px solid #0f0f0f",
      padding: "18px 16px 14px",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#b8922a",
      fontSize: "8px",
      letterSpacing: "5px",
      fontFamily: "'Cinzel',serif",
      opacity: 0.6,
      marginBottom: "4px"
    }
  }, "\xC9TAT DES FORCES"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#e8dfc0",
      fontSize: "18px",
      fontFamily: "'Cinzel Decorative','Cinzel',serif",
      letterSpacing: "3px",
      fontWeight: "700"
    }
  }, "STATISTIQUES")), totalValue > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "4px",
      display: "flex",
      alignItems: "baseline",
      gap: "6px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#8aba5a",
      fontSize: "16px",
      fontFamily: "'Cinzel',serif",
      fontWeight: "700"
    }
  }, totalValue.toFixed(0), "\u20AC"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#9a8a78",
      fontSize: "7px",
      letterSpacing: "2px"
    }
  }, "VALEUR COLLECTION"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#9a8a78",
      fontSize: "9px",
      letterSpacing: "4px",
      fontFamily: "'Cinzel',serif",
      marginBottom: "10px"
    }
  }, "COLLECTION GLOBALE"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(180deg,#131110 0%,#0d0b0a 100%)",
      border: "1px solid #1c1a18",
      borderTop: "2px solid ".concat(accent),
      padding: "16px",
      marginBottom: "8px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginBottom: "12px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#e8dfc0",
      fontSize: "32px",
      fontFamily: "'Cinzel',serif",
      fontWeight: "900",
      lineHeight: 1
    }
  }, paintPct, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "16px",
      color: accent
    }
  }, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#9a8a78",
      fontSize: "9px",
      letterSpacing: "2px",
      marginTop: "2px"
    }
  }, "PEINT")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#e8dfc0",
      fontSize: "20px",
      fontFamily: "'Cinzel',serif",
      fontWeight: "700"
    }
  }, totalModels), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#9a8a78",
      fontSize: "9px",
      letterSpacing: "2px"
    }
  }, "FIGURINES"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#7a6a58",
      fontSize: "8px",
      marginTop: "1px"
    }
  }, totalUnits, " unit\xE9s"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      height: "6px",
      gap: "1px",
      marginBottom: "10px"
    }
  }, totalPainted > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: totalPainted,
      background: PAINT_STATUS.painted.color
    }
  }), totalWip > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: totalWip,
      background: PAINT_STATUS.wip.color
    }
  }), totalPrimed > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: totalPrimed,
      background: PAINT_STATUS.primed.color
    }
  }), totalUnpainted > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: totalUnpainted,
      background: "#1c1a16"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "12px",
      flexWrap: "wrap"
    }
  }, [{
    key: "painted",
    label: "Peint",
    val: totalPainted
  }, {
    key: "wip",
    label: "En cours",
    val: totalWip
  }, {
    key: "primed",
    label: "Apprêté",
    val: totalPrimed
  }, {
    key: "unpainted",
    label: "Nu",
    val: totalUnpainted
  }].map(function (s) {
    return s.val > 0 && /*#__PURE__*/React.createElement("div", {
      key: s.key,
      style: {
        display: "flex",
        alignItems: "center",
        gap: "5px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "6px",
        height: "6px",
        borderRadius: "50%",
        background: PAINT_STATUS[s.key].color
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#7a6a58",
        fontSize: "9px"
      }
    }, s.label, " ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#8a7050"
      }
    }, s.val)));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: "6px"
    }
  }, [{
    label: "RÉFÉRENCES",
    val: totalUnique
  }, {
    label: "LISTES",
    val: lists.length
  }, {
    label: "PTS TOTAL",
    val: function () {
      var t = factionStats.reduce(function (s, f) {
        return s + f.pts;
      }, 0);
      return t > 0 ? t.toLocaleString("fr-FR") : "—";
    }()
  }].map(function (c) {
    return /*#__PURE__*/React.createElement("div", {
      key: c.label,
      style: {
        background: "#0d0b0a",
        border: "1px solid #1a1816",
        padding: "10px 8px",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        color: "#e8dfc0",
        fontSize: "18px",
        fontFamily: "'Cinzel',serif",
        fontWeight: "700"
      }
    }, c.val), /*#__PURE__*/React.createElement("div", {
      style: {
        color: "#7a6a58",
        fontSize: "7px",
        letterSpacing: "2px",
        marginTop: "3px"
      }
    }, c.label));
  }))), factionStats.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#9a8a78",
      fontSize: "9px",
      letterSpacing: "4px",
      fontFamily: "'Cinzel',serif",
      marginBottom: "10px"
    }
  }, "PAR FACTION"), factionStats.map(function (_ref35) {
    var key = _ref35.key,
      f = _ref35.f,
      models = _ref35.models,
      units = _ref35.units,
      painted = _ref35.painted,
      pts = _ref35.pts,
      byRole = _ref35.byRole,
      uniqueUnits = _ref35.uniqueUnits;
    var pct = units ? Math.round(painted / units * 100) : 0;
    var topRoles = Object.entries(byRole).sort(function (a, b) {
      return b[1] - a[1];
    }).slice(0, 4);
    return /*#__PURE__*/React.createElement("div", {
      key: key,
      style: {
        background: "linear-gradient(180deg,#131110 0%,#0d0b0a 100%)",
        border: "1px solid #1c1a18",
        borderLeft: "3px solid ".concat(f.accent),
        padding: "12px 14px",
        marginBottom: "8px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "10px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "10px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "20px"
      }
    }, f.icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        color: "#e8dfc0",
        fontSize: "12px",
        fontFamily: "'Cinzel',serif",
        letterSpacing: "1px"
      }
    }, f.label), /*#__PURE__*/React.createElement("div", {
      style: {
        color: "#9a8a78",
        fontSize: "9px",
        marginTop: "1px"
      }
    }, uniqueUnits, " unit\xE9s \xB7 ", models, " figurines"))), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "right"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        color: pct === 100 ? "#2a7a2a" : f.accent,
        fontSize: "20px",
        fontFamily: "'Cinzel',serif",
        fontWeight: "900"
      }
    }, pct, "%"), pts > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        color: "#9a8a78",
        fontSize: "9px"
      }
    }, pts, " pts"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        height: "3px",
        marginBottom: "10px",
        gap: "1px"
      }
    }, painted > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        flex: painted,
        background: PAINT_STATUS.painted.color
      }
    }), units - painted > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        flex: units - painted,
        background: "#1c1a16"
      }
    })), topRoles.length > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "6px",
        flexWrap: "wrap"
      }
    }, topRoles.map(function (_ref36) {
      var _ref37 = _slicedToArray(_ref36, 2),
        role = _ref37[0],
        cnt = _ref37[1];
      return /*#__PURE__*/React.createElement("div", {
        key: role,
        style: {
          background: "#080604",
          border: "1px solid ".concat(f.accent, "22"),
          padding: "2px 8px",
          display: "flex",
          gap: "5px",
          alignItems: "center"
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          color: f.accent,
          fontSize: "11px",
          fontWeight: "700"
        }
      }, cnt), /*#__PURE__*/React.createElement("span", {
        style: {
          color: "#9a8a78",
          fontSize: "8px",
          fontFamily: "'Cinzel',serif",
          letterSpacing: "1px"
        }
      }, {
        "Seigneur de guerre": "Seigneur",
        "Attaque rapide": "Rapide",
        "Soutien lourd": "Lourd",
        "Chevalier Questoris": "Questoris",
        "Chevalier Dominus": "Dominus",
        "Chevalier Cerastus": "Cerastus",
        "Chevalier Acastus": "Acastus"
      }[role] || role));
    })));
  })), function () {
    var collectionValue = inventory.reduce(function (s, i) {
      var _UNITS_DB$i$faction5;
      var unit = (_UNITS_DB$i$faction5 = UNITS_DB[i.faction]) === null || _UNITS_DB$i$faction5 === void 0 ? void 0 : _UNITS_DB$i$faction5.find(function (u) {
        return u.id === i.unitId;
      });
      return s + (unit ? SHOP_PRICES[unit.name] || 0 : 0) * (i.qty || 1);
    }, 0);
    var byFaction = Object.entries(FACTIONS).map(function (_ref38) {
      var _ref39 = _slicedToArray(_ref38, 2),
        k = _ref39[0],
        v = _ref39[1];
      var val = inventory.filter(function (i) {
        return i.faction === k;
      }).reduce(function (s, i) {
        var _UNITS_DB$i$faction6;
        var unit = (_UNITS_DB$i$faction6 = UNITS_DB[i.faction]) === null || _UNITS_DB$i$faction6 === void 0 ? void 0 : _UNITS_DB$i$faction6.find(function (u) {
          return u.id === i.unitId;
        });
        return s + (unit ? SHOP_PRICES[unit.name] || 0 : 0) * (i.qty || 1);
      }, 0);
      var count = inventory.filter(function (i) {
        return i.faction === k;
      }).reduce(function (s, i) {
        return s + (i.qty || 1);
      }, 0);
      return {
        k: k,
        v: v,
        val: val,
        count: count
      };
    }).filter(function (x) {
      return x.count > 0;
    });
    return collectionValue > 0 ? /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: "20px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        color: "#9a8a78",
        fontSize: "9px",
        letterSpacing: "4px",
        fontFamily: "'Cinzel',serif",
        marginBottom: "10px"
      }
    }, "VALEUR COLLECTION"), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "#0a0c08",
        border: "1px solid #2a3a1a",
        borderLeft: "3px solid #5a8a3a",
        padding: "12px 16px",
        marginBottom: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        color: "#9a8a78",
        fontSize: "9px",
        fontFamily: "'Cinzel',serif",
        letterSpacing: "2px"
      }
    }, "TOTAL COLLECTION"), /*#__PURE__*/React.createElement("div", {
      style: {
        color: "#e8dfc0",
        fontSize: "10px",
        marginTop: "2px"
      }
    }, inventory.reduce(function (s, i) {
      return s + (i.qty || 1);
    }, 0), " figurines")), /*#__PURE__*/React.createElement("div", {
      style: {
        color: "#8aba5a",
        fontSize: "22px",
        fontFamily: "'Cinzel',serif",
        fontWeight: "700"
      }
    }, collectionValue.toFixed(0), "\u20AC")), byFaction.map(function (_ref40) {
      var k = _ref40.k,
        v = _ref40.v,
        val = _ref40.val,
        count = _ref40.count;
      return /*#__PURE__*/React.createElement("div", {
        key: k,
        style: {
          background: "#0d0b0a",
          border: "1px solid #1a1816",
          borderLeft: "2px solid ".concat(v.accent, "44"),
          padding: "8px 12px",
          marginBottom: "4px",
          display: "flex",
          alignItems: "center",
          gap: "10px"
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: "16px"
        }
      }, v.icon), /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          color: "#c8b890",
          fontSize: "11px",
          fontFamily: "'Cinzel',serif"
        }
      }, v.label), /*#__PURE__*/React.createElement("div", {
        style: {
          color: "#9a8a78",
          fontSize: "9px",
          marginTop: "1px"
        }
      }, count, " figurines")), /*#__PURE__*/React.createElement("span", {
        style: {
          color: v.accent,
          fontSize: "13px",
          fontFamily: "'Cinzel',serif",
          fontWeight: "700"
        }
      }, val.toFixed(0), "\u20AC"));
    })) : null;
  }(), function () {
    var wl = wishlist || [];
    if (wl.length === 0) return null;
    var wanted = wl.filter(function (i) {
      return i.status === "wanted";
    });
    var ordered = wl.filter(function (i) {
      return i.status === "ordered";
    });
    var received = wl.filter(function (i) {
      return i.status === "received";
    });
    var toSpend = wl.filter(function (i) {
      return i.status !== "received";
    }).reduce(function (s, i) {
      var _UNITS_DB$i$faction7;
      var unit = (_UNITS_DB$i$faction7 = UNITS_DB[i.faction]) === null || _UNITS_DB$i$faction7 === void 0 ? void 0 : _UNITS_DB$i$faction7.find(function (u) {
        return u.id === i.unitId;
      });
      return s + (i.price || (unit ? SHOP_PRICES[unit.name] : 0) || 0) * (i.qty || 1);
    }, 0);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: "20px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        color: "#9a8a78",
        fontSize: "9px",
        letterSpacing: "4px",
        fontFamily: "'Cinzel',serif",
        marginBottom: "10px"
      }
    }, "ACQUISITIONS FUTURES"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "6px",
        marginBottom: "8px"
      }
    }, [{
      label: "SOUHAITÉ",
      count: wanted.length,
      color: "#b8922a",
      icon: "✦"
    }, {
      label: "COMMANDÉ",
      count: ordered.length,
      color: "#4a7a9a",
      icon: "⟳"
    }, {
      label: "REÇU",
      count: received.length,
      color: "#4a8a4a",
      icon: "✓"
    }].map(function (s) {
      return /*#__PURE__*/React.createElement("div", {
        key: s.label,
        style: {
          flex: 1,
          background: "#0d0b0a",
          border: "1px solid ".concat(s.color, "33"),
          padding: "10px 8px",
          textAlign: "center"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          color: s.color,
          fontSize: "16px",
          marginBottom: "3px"
        }
      }, s.icon), /*#__PURE__*/React.createElement("div", {
        style: {
          color: s.color,
          fontSize: "18px",
          fontFamily: "'Cinzel',serif",
          fontWeight: "700"
        }
      }, s.count), /*#__PURE__*/React.createElement("div", {
        style: {
          color: "#9a8a78",
          fontSize: "7px",
          letterSpacing: "1px",
          fontFamily: "'Cinzel',serif"
        }
      }, s.label));
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "#0d0b0a",
        border: "1px solid #1a1816",
        padding: "10px 14px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        color: "#9a8a78",
        fontSize: "9px",
        fontFamily: "'Cinzel',serif",
        letterSpacing: "2px"
      }
    }, "BUDGET RESTANT"), /*#__PURE__*/React.createElement("div", {
      style: {
        color: "#9a8a78",
        fontSize: "9px",
        marginTop: "2px"
      }
    }, "hors articles d\xE9j\xE0 re\xE7us")), /*#__PURE__*/React.createElement("div", {
      style: {
        color: "#b8922a",
        fontSize: "20px",
        fontFamily: "'Cinzel',serif",
        fontWeight: "700"
      }
    }, toSpend.toFixed(0), "\u20AC")));
  }(), inventory.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "48px 0",
      color: "#7a6a58"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "40px",
      marginBottom: "12px",
      opacity: 0.3
    }
  }, "\u2720"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Cinzel',serif",
      fontSize: "11px",
      letterSpacing: "3px"
    }
  }, "AUCUNE DONN\xC9E"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "10px",
      marginTop: "6px",
      fontStyle: "italic"
    }
  }, "Ajoutez des figurines \xE0 votre inventaire"))));
}

// ══════════════════════════════════════════════════════════
// CONFIRM MODAL
// ══════════════════════════════════════════════════════════

function ConfirmModal(_ref41) {
  var message = _ref41.message,
    onConfirm = _ref41.onConfirm,
    onCancel = _ref41.onCancel,
    _ref41$accent = _ref41.accent,
    accent = _ref41$accent === void 0 ? "#b8922a" : _ref41$accent,
    _ref41$confirmLabel = _ref41.confirmLabel,
    confirmLabel = _ref41$confirmLabel === void 0 ? "CONFIRMER" : _ref41$confirmLabel,
    _ref41$danger = _ref41.danger,
    danger = _ref41$danger === void 0 ? false : _ref41$danger;
  return /*#__PURE__*/React.createElement(Overlay, null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#0a0806",
      border: "1px solid ".concat(accent, "44"),
      borderTop: "2px solid ".concat(accent),
      padding: "24px 20px",
      width: "100%",
      maxWidth: "320px",
      margin: "0 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#e8dfc0",
      fontSize: "14px",
      fontFamily: "'Cinzel',serif",
      letterSpacing: "1px",
      marginBottom: "8px",
      textAlign: "center"
    }
  }, "CONFIRMATION"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#9a8a78",
      fontSize: "12px",
      fontFamily: "'Crimson Pro',serif",
      fontStyle: "italic",
      textAlign: "center",
      marginBottom: "20px",
      lineHeight: 1.6
    }
  }, message), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "8px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onCancel,
    style: {
      flex: 1,
      padding: "14px",
      background: "#060402",
      border: "1px solid #1c1c1c",
      color: "#7a7060",
      fontFamily: "'Cinzel',serif",
      fontSize: "11px",
      letterSpacing: "2px",
      cursor: "pointer",
      touchAction: "manipulation"
    }
  }, "ANNULER"), /*#__PURE__*/React.createElement("button", {
    onClick: onConfirm,
    style: {
      flex: 1,
      padding: "14px",
      background: danger ? "#1a0a0a" : "".concat(accent, "22"),
      border: "1px solid ".concat(danger ? "#7a1515" : accent),
      color: danger ? "#c04040" : accent,
      fontFamily: "'Cinzel',serif",
      fontSize: "11px",
      letterSpacing: "2px",
      cursor: "pointer",
      touchAction: "manipulation"
    }
  }, confirmLabel))));
}
function useConfirm() {
  var _useState61 = useState(null),
    _useState62 = _slicedToArray(_useState61, 2),
    state = _useState62[0],
    setState = _useState62[1];
  var ask = function ask(message, onConfirm, accent, confirmLabel, danger) {
    return setState({
      message: message,
      onConfirm: onConfirm,
      accent: accent,
      confirmLabel: confirmLabel,
      danger: danger
    });
  };
  var cancel = function cancel() {
    return setState(null);
  };
  var confirm = function confirm() {
    state === null || state === void 0 || state.onConfirm();
    setState(null);
  };
  var modal = state ? /*#__PURE__*/React.createElement(ConfirmModal, {
    message: state.message,
    onConfirm: confirm,
    onCancel: cancel,
    accent: state.accent,
    confirmLabel: state.confirmLabel || "CONFIRMER",
    danger: state.danger || false
  }) : null;
  return [ask, modal];
}

// ══════════════════════════════════════════════════════════
// VIEW: Codex (paramètres + données)
// ══════════════════════════════════════════════════════════

// ══════════════════════════════════════════════════════════
// VIEW PARADE
// ══════════════════════════════════════════════════════════
function ViewParade(_ref42) {
  var _FACTIONS$selectedPho, _FACTIONS$selectedPho2, _FACTIONS$selectedPho3;
  var parade = _ref42.parade,
    onAdd = _ref42.onAdd,
    onDelete = _ref42.onDelete;
  var _useState63 = useState(null),
    _useState64 = _slicedToArray(_useState63, 2),
    selected = _useState64[0],
    setSelected = _useState64[1];
  var _useState65 = useState(false),
    _useState66 = _slicedToArray(_useState65, 2),
    showForm = _useState66[0],
    setShowForm = _useState66[1];
  var _useState67 = useState({
      title: "",
      faction: "SM",
      date: "",
      photo: null
    }),
    _useState68 = _slicedToArray(_useState67, 2),
    form = _useState68[0],
    setForm = _useState68[1];
  var fileRef = useRef(null);
  var selectedPhoto = selected !== null ? parade[selected] : parade.length > 0 ? parade[0] : null;
  var selectedIdx = selected !== null ? selected : 0;
  var handleFile = function handleFile(e) {
    var file = e.target.files[0];
    if (!file) return;
    e.target.value = "";
    var reader = new FileReader();
    reader.onload = function (ev) {
      return setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          photo: ev.target.result
        });
      });
    };
    reader.readAsDataURL(file);
  };
  var handleAdd = function handleAdd() {
    if (!form.photo) return;
    onAdd({
      id: Date.now(),
      photo: form.photo,
      faction: form.faction,
      date: form.date || new Date().toLocaleDateString("fr-FR")
    });
    setForm({
      title: "",
      faction: "SM",
      date: "",
      photo: null
    });
    setShowForm(false);
    setSelected(parade.length); // sélectionner la nouvelle photo
  };
  return /*#__PURE__*/React.createElement("div", {
    style: pageStyle,
    className: "bg-lists"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#030202",
      borderBottom: "1px solid #0f0f0f",
      padding: "14px 16px 12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#b8922a",
      fontSize: "8px",
      letterSpacing: "5px",
      fontFamily: "'Cinzel',serif",
      opacity: 0.6,
      marginBottom: "3px"
    }
  }, "GALERIE"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#e8dfc0",
      fontSize: "18px",
      fontFamily: "'Cinzel Decorative','Cinzel',serif",
      letterSpacing: "3px",
      fontWeight: "700"
    }
  }, "ARMY ON PARADE"), parade.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#9a8a78",
      fontSize: "9px",
      marginTop: "2px"
    }
  }, parade.length, " photo", parade.length > 1 ? "s" : "")), /*#__PURE__*/React.createElement(IconBtn, {
    onClick: function onClick() {
      return setShowForm(true);
    }
  }, /*#__PURE__*/React.createElement(Ic.Plus, null))), parade.length === 0 ? /*#__PURE__*/React.createElement(EmptyState, {
    icon: "\u2694",
    title: "Aucune photo",
    sub: "Ajoutez vos arm\xE9es et dioramas"
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      overflow: "hidden"
    }
  }, selectedPhoto && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: selectedPhoto.photo,
    alt: "",
    style: {
      width: "100%",
      height: "260px",
      objectFit: "cover",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      background: "linear-gradient(to top, rgba(2,2,2,0.95) 0%, transparent 100%)",
      padding: "16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "16px"
    }
  }, ((_FACTIONS$selectedPho = FACTIONS[selectedPhoto.faction]) === null || _FACTIONS$selectedPho === void 0 ? void 0 : _FACTIONS$selectedPho.icon) || "⚔"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: ((_FACTIONS$selectedPho2 = FACTIONS[selectedPhoto.faction]) === null || _FACTIONS$selectedPho2 === void 0 ? void 0 : _FACTIONS$selectedPho2.accent) || "#b8922a",
      fontSize: "11px",
      fontFamily: "'Cinzel',serif",
      letterSpacing: "2px"
    }
  }, ((_FACTIONS$selectedPho3 = FACTIONS[selectedPhoto.faction]) === null || _FACTIONS$selectedPho3 === void 0 ? void 0 : _FACTIONS$selectedPho3.label) || selectedPhoto.faction), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#9a8a78",
      fontSize: "9px",
      marginLeft: "auto"
    }
  }, selectedPhoto.date))), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      onDelete(selectedPhoto.id);
      setSelected(null);
    },
    style: {
      position: "absolute",
      top: "10px",
      right: "10px",
      background: "#0a0806cc",
      border: "1px solid #3a2215",
      color: "#6a4a3a",
      cursor: "pointer",
      padding: "6px",
      display: "flex",
      touchAction: "manipulation"
    }
  }, /*#__PURE__*/React.createElement(Ic.Trash, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "10px 12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "6px"
    }
  }, parade.map(function (p, i) {
    var f = FACTIONS[p.faction];
    var isActive = i === selectedIdx;
    return /*#__PURE__*/React.createElement("div", {
      key: p.id,
      onClick: function onClick() {
        return setSelected(i);
      },
      style: {
        position: "relative",
        cursor: "pointer",
        border: "2px solid ".concat(isActive ? (f === null || f === void 0 ? void 0 : f.accent) || "#b8922a" : "transparent"),
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: p.photo,
      alt: "",
      style: {
        width: "100%",
        aspectRatio: "1",
        objectFit: "cover",
        display: "block"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        bottom: "2px",
        left: "3px",
        fontSize: "12px"
      }
    }, (f === null || f === void 0 ? void 0 : f.icon) || "⚔"));
  })))), showForm && /*#__PURE__*/React.createElement(Overlay, null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#0a0806",
      border: "1px solid #b8922a44",
      borderTop: "2px solid #b8922a",
      width: "100%",
      maxWidth: "420px",
      margin: "0 16px",
      padding: "20px 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#e8dfc0",
      fontSize: "13px",
      fontFamily: "'Cinzel',serif",
      letterSpacing: "1px"
    }
  }, "NOUVELLE PHOTO"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowForm(false);
    },
    style: {
      background: "none",
      border: "none",
      color: "#7a7060",
      cursor: "pointer",
      fontSize: "18px"
    }
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      var _fileRef$current;
      return (_fileRef$current = fileRef.current) === null || _fileRef$current === void 0 ? void 0 : _fileRef$current.click();
    },
    style: {
      width: "100%",
      height: "180px",
      background: "#040404",
      border: "1px dashed ".concat(form.photo ? "#b8922a55" : "#7a6a58"),
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      marginBottom: "14px",
      overflow: "hidden"
    }
  }, form.photo ? /*#__PURE__*/React.createElement("img", {
    src: form.photo,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      color: "#9a8a78"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "32px",
      marginBottom: "8px"
    }
  }, "\uD83D\uDCF7"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "10px",
      fontFamily: "'Cinzel',serif",
      letterSpacing: "2px"
    }
  }, "TAP POUR AJOUTER"))), /*#__PURE__*/React.createElement("input", {
    ref: fileRef,
    type: "file",
    accept: "image/*",
    onChange: handleFile,
    style: {
      display: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "14px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#7a7060",
      fontSize: "9px",
      fontFamily: "'Cinzel',serif",
      letterSpacing: "2px",
      marginBottom: "8px"
    }
  }, "FACTION"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "6px"
    }
  }, Object.entries(FACTIONS).map(function (_ref43) {
    var _ref44 = _slicedToArray(_ref43, 2),
      k = _ref44[0],
      v = _ref44[1];
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      onClick: function onClick() {
        return setForm(function (f) {
          return _objectSpread(_objectSpread({}, f), {}, {
            faction: k
          });
        });
      },
      style: {
        flex: 1,
        padding: "8px 4px",
        background: form.faction === k ? "".concat(v.accent, "15") : "#060402",
        border: "1px solid ".concat(form.faction === k ? v.accent : "#1c1c1c"),
        color: form.faction === k ? v.accent : "#7a6a58",
        cursor: "pointer",
        fontFamily: "'Cinzel',serif",
        fontSize: "9px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "3px",
        touchAction: "manipulation"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "16px"
      }
    }, v.icon), v["short"]);
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#7a7060",
      fontSize: "9px",
      fontFamily: "'Cinzel',serif",
      letterSpacing: "2px",
      marginBottom: "6px"
    }
  }, "DATE (optionnel)"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: form.date,
    onChange: function onChange(e) {
      return setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          date: e.target.value
        });
      });
    },
    placeholder: new Date().toLocaleDateString("fr-FR"),
    style: {
      width: "100%",
      background: "#060402",
      border: "1px solid #1c1c1c",
      color: "#e8dfc0",
      padding: "8px 10px",
      fontSize: "12px",
      outline: "none",
      fontFamily: "'Crimson Pro',serif",
      boxSizing: "border-box"
    }
  })), /*#__PURE__*/React.createElement(PrimaryBtn, {
    color: "#b8922a",
    onClick: handleAdd,
    disabled: !form.photo
  }, "AJOUTER"))));
}

// ══════════════════════════════════════════════════════════
// VIEW PILE OF SHAME
// ══════════════════════════════════════════════════════════
function ViewShame(_ref45) {
  var inventory = _ref45.inventory,
    onUpdatePaint = _ref45.onUpdatePaint,
    confirm = _ref45.confirm,
    paintPct = _ref45.paintPct;
  var _useState69 = useState("all"),
    _useState70 = _slicedToArray(_useState69, 2),
    factionFilter = _useState70[0],
    setFactionFilter = _useState70[1];
  var _useState71 = useState("statut"),
    _useState72 = _slicedToArray(_useState71, 2),
    sortBy = _useState72[0],
    setSortBy = _useState72[1];
  var STATUS_ORDER = {
    unpainted: 0,
    primed: 1,
    wip: 2
  };
  var STATUS_LABEL = {
    unpainted: "Non peint",
    primed: "Apprêté",
    wip: "En cours"
  };
  var unpainted = inventory.filter(function (i) {
    return i.paintStatus !== "painted";
  }).map(function (i) {
    var _UNITS_DB$i$faction8;
    var f = FACTIONS[i.faction];
    var unit = (_UNITS_DB$i$faction8 = UNITS_DB[i.faction]) === null || _UNITS_DB$i$faction8 === void 0 ? void 0 : _UNITS_DB$i$faction8.find(function (u) {
      return u.id === i.unitId;
    });
    var figs = getModelCount(unit === null || unit === void 0 ? void 0 : unit.name, i.qty || 1, i.modelCount);
    return _objectSpread(_objectSpread({}, i), {}, {
      f: f,
      unit: unit,
      figs: figs
    });
  }).filter(function (i) {
    return i.unit;
  }).filter(function (i) {
    return factionFilter === "all" || i.faction === factionFilter;
  }).sort(function (a, b) {
    if (sortBy === "statut") return (STATUS_ORDER[a.paintStatus] || 0) - (STATUS_ORDER[b.paintStatus] || 0);
    if (sortBy === "faction") return a.faction.localeCompare(b.faction);
    return 0;
  });

  // Compteurs par statut
  var countByStatus = inventory.filter(function (i) {
    return i.paintStatus !== "painted";
  }).reduce(function (s, i) {
    var k = i.paintStatus || "unpainted";
    s[k] = (s[k] || 0) + (i.qty || 1);
    return s;
  }, {});
  var totalFigs = inventory.filter(function (i) {
    return i.paintStatus !== "painted";
  }).reduce(function (s, i) {
    var _UNITS_DB$i$faction9;
    var unit = (_UNITS_DB$i$faction9 = UNITS_DB[i.faction]) === null || _UNITS_DB$i$faction9 === void 0 ? void 0 : _UNITS_DB$i$faction9.find(function (u) {
      return u.id === i.unitId;
    });
    return s + getModelCount(unit === null || unit === void 0 ? void 0 : unit.name, i.qty || 1, i.modelCount);
  }, 0);
  var factions = ["all"].concat(_toConsumableArray(Array.from(new Set(inventory.filter(function (i) {
    return i.paintStatus !== "painted";
  }).map(function (i) {
    return i.faction;
  })))));
  return /*#__PURE__*/React.createElement("div", {
    style: pageStyle
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#030202",
      borderBottom: "1px solid #0f0f0f",
      padding: "14px 16px 12px",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#8a1a1a",
      fontSize: "8px",
      letterSpacing: "5px",
      fontFamily: "'Cinzel',serif",
      opacity: 0.8,
      marginBottom: "3px"
    }
  }, "\xC0 PEINDRE"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#e8dfc0",
      fontSize: "18px",
      fontFamily: "'Cinzel Decorative','Cinzel',serif",
      letterSpacing: "3px",
      fontWeight: "700",
      marginBottom: "8px"
    }
  }, "PILE OF SHAME"), paintPct < 80 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      marginBottom: "8px",
      background: "#1a0808",
      border: "1px solid #7a1515",
      padding: "6px 10px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "14px"
    }
  }, "\u26A0\uFE0F"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#c04040",
      fontSize: "10px",
      fontFamily: "'Cinzel',serif",
      letterSpacing: "1px"
    }
  }, paintPct, "% PEINT \u2014 OBJECTIF 80% NON ATTEINT")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "8px",
      flexWrap: "wrap"
    }
  }, [{
    key: "unpainted",
    label: "Non peint",
    color: PAINT_STATUS.unpainted.color
  }, {
    key: "primed",
    label: "Apprêté",
    color: PAINT_STATUS.primed.color
  }, {
    key: "wip",
    label: "En cours",
    color: PAINT_STATUS.wip.color
  }].map(function (s) {
    return countByStatus[s.key] ? /*#__PURE__*/React.createElement("div", {
      key: s.key,
      style: {
        display: "flex",
        alignItems: "center",
        gap: "4px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "6px",
        height: "6px",
        borderRadius: "50%",
        background: s.color
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#9a8a78",
        fontSize: "9px"
      }
    }, s.label), /*#__PURE__*/React.createElement("span", {
      style: {
        color: s.color,
        fontSize: "9px",
        fontFamily: "monospace",
        fontWeight: "700"
      }
    }, countByStatus[s.key])) : null;
  }), totalFigs > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#6a5a4a",
      fontSize: "9px",
      marginLeft: "auto",
      fontFamily: "monospace"
    }
  }, totalFigs, " fig"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "4px",
      overflowX: "auto",
      padding: "6px 12px",
      background: "#020202",
      borderBottom: "1px solid #0a0a0a",
      scrollbarWidth: "none"
    }
  }, [{
    k: "statut",
    label: "STATUT"
  }, {
    k: "faction",
    label: "FACTION"
  }].map(function (t) {
    return /*#__PURE__*/React.createElement("button", {
      key: t.k,
      onClick: function onClick() {
        return setSortBy(t.k);
      },
      style: {
        flexShrink: 0,
        padding: "3px 8px",
        background: sortBy === t.k ? "#1a1816" : "transparent",
        border: "1px solid ".concat(sortBy === t.k ? "#6a5a4a" : "#1a1816"),
        color: sortBy === t.k ? "#9a8a78" : "#6a5a4a",
        fontFamily: "'Cinzel',serif",
        fontSize: "8px",
        cursor: "pointer",
        touchAction: "manipulation"
      }
    }, t.label);
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "1px",
      background: "#1a1816",
      margin: "0 4px"
    }
  }), factions.map(function (k) {
    var f = FACTIONS[k];
    var active = factionFilter === k;
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      onClick: function onClick() {
        return setFactionFilter(k);
      },
      style: {
        flexShrink: 0,
        padding: "3px 8px",
        background: active ? f ? "".concat(f.accent, "22") : "#1a1a1a" : "transparent",
        border: "1px solid ".concat(active ? f ? f.accent : "#6a5a4a" : "#1a1816"),
        color: active ? f ? f.accent : "#e8dfc0" : "#6a5a4a",
        fontFamily: "'Cinzel',serif",
        fontSize: "8px",
        cursor: "pointer",
        touchAction: "manipulation"
      }
    }, k === "all" ? "TOUS" : (f === null || f === void 0 ? void 0 : f["short"]) || k);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "10px 14px"
    }
  }, unpainted.length === 0 ? /*#__PURE__*/React.createElement(EmptyState, {
    icon: "\uD83C\uDFA8",
    title: "Pile of shame vide !",
    sub: "Tout est peint, bravo !"
  }) : unpainted.map(function (item, idx) {
    var _item$f, _item$f2, _item$f3;
    var ps = PAINT_STATUS[item.paintStatus] || PAINT_STATUS.unpainted;
    return /*#__PURE__*/React.createElement("div", {
      key: item.id,
      style: {
        display: "flex",
        gap: "12px",
        alignItems: "center",
        padding: "8px 0",
        borderBottom: "1px solid #0d0d0d",
        animation: "slideLeft 0.2s ".concat(idx * 20, "ms ease both")
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "48px",
        height: "48px",
        flexShrink: 0,
        background: "#040404",
        border: "1px solid ".concat(((_item$f = item.f) === null || _item$f === void 0 ? void 0 : _item$f.accent) || "#1c1c1c", "22"),
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, item.photo ? /*#__PURE__*/React.createElement("img", {
      src: item.photo,
      alt: "",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
    }) : /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "18px",
        opacity: 0.3
      }
    }, ((_item$f2 = item.f) === null || _item$f2 === void 0 ? void 0 : _item$f2.icon) || "?")), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        color: "#e8dfc0",
        fontSize: "12px",
        fontFamily: "'Cinzel',serif",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    }, item.unit.name), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "6px",
        marginTop: "3px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "10px"
      }
    }, (_item$f3 = item.f) === null || _item$f3 === void 0 ? void 0 : _item$f3.icon), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "3px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "6px",
        height: "6px",
        borderRadius: "50%",
        background: ps.color
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#6a5a4a",
        fontSize: "8px"
      }
    }, STATUS_LABEL[item.paintStatus] || "Non peint")), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#6a5a4a",
        fontSize: "8px",
        fontFamily: "monospace"
      }
    }, item.figs, " fig"))), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return confirm("Marquer \"".concat(item.unit.name, "\" comme peint ?"), function () {
          return onUpdatePaint(item.id, "painted");
        }, "#2a7a2a", "PEINT ✓", false);
      },
      style: {
        flexShrink: 0,
        width: "32px",
        height: "32px",
        background: "#0a1208",
        border: "1px solid #2a7a2a44",
        color: "#2a7a2a",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "16px",
        touchAction: "manipulation"
      },
      title: "Marquer comme peint"
    }, "\u2713"));
  })));
}
function ViewCodex(_ref46) {
  var onExport = _ref46.onExport,
    onExportNoPhotos = _ref46.onExportNoPhotos,
    onImport = _ref46.onImport,
    inventory = _ref46.inventory,
    lists = _ref46.lists;
  var importRef = useRef(null);
  var totalModels = inventory.reduce(function (s, i) {
    var _UNITS_DB$i$faction0;
    var u = (_UNITS_DB$i$faction0 = UNITS_DB[i.faction]) === null || _UNITS_DB$i$faction0 === void 0 ? void 0 : _UNITS_DB$i$faction0.find(function (u) {
      return u.id === i.unitId;
    });
    return s + getModelCount(u === null || u === void 0 ? void 0 : u.name, i.qty || 1, i.modelCount);
  }, 0);
  var totalUnits = inventory.reduce(function (s, i) {
    return s + (i.qty || 1);
  }, 0);
  var totalWithPhoto = inventory.filter(function (i) {
    return i.photo;
  }).length;
  var estimatedSizeKB = Math.round(inventory.reduce(function (s, i) {
    return s + (i.photo ? i.photo.length * 0.75 : 0);
  }, 0) / 1024 + inventory.reduce(function (s, i) {
    return s + JSON.stringify(_objectSpread(_objectSpread({}, i), {}, {
      photo: null
    })).length / 1024;
  }, 0) + lists.reduce(function (s, l) {
    return s + JSON.stringify(l).length / 1024;
  }, 0) + 2);
  var sizeMB = (estimatedSizeKB / 1024).toFixed(1);
  var sizeWarning = estimatedSizeKB > 5000;
  return /*#__PURE__*/React.createElement("div", {
    style: pageStyle,
    className: "bg-codex"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#030202",
      borderBottom: "1px solid #0f0f0f",
      padding: "18px 16px 14px",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#b8922a",
      fontSize: "8px",
      letterSpacing: "5px",
      fontFamily: "'Cinzel',serif",
      opacity: 0.6,
      marginBottom: "4px"
    }
  }, "ADMINISTRATION"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#e8dfc0",
      fontSize: "18px",
      fontFamily: "'Cinzel Decorative','Cinzel',serif",
      letterSpacing: "3px",
      fontWeight: "700"
    }
  }, "CODEX"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#b8922a",
      fontSize: "11px",
      fontFamily: "monospace",
      opacity: 0.7,
      background: "#0f0c06",
      border: "1px solid #b8922a33",
      padding: "2px 8px",
      letterSpacing: "1px"
    }
  }, "v", APP_VERSION))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#9a8a78",
      fontSize: "9px",
      letterSpacing: "4px",
      fontFamily: "'Cinzel',serif",
      marginBottom: "10px"
    }
  }, "SAUVEGARDE DES DONN\xC9ES"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(180deg,#131110 0%,#0d0b0a 100%)",
      border: "1px solid #1c1a18",
      borderTop: "2px solid #b8922a",
      padding: "16px",
      marginBottom: "8px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#6a5a3a",
      fontSize: "11px",
      fontFamily: "'Crimson Pro','Crimson Text',serif",
      fontStyle: "italic",
      lineHeight: 1.6,
      marginBottom: "16px"
    }
  }, "Tes donn\xE9es sont stock\xE9es localement sur cet appareil. Exporte r\xE9guli\xE8rement une sauvegarde pour ne rien perdre si tu changes de navigateur ou d'appareil."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: "6px",
      marginBottom: "16px"
    }
  }, [{
    val: inventory.length,
    label: "RÉFÉRENCES"
  }, {
    val: totalModels,
    label: "FIGURINES"
  }, {
    val: totalUnits,
    label: "UNITÉS"
  }].map(function (c) {
    return /*#__PURE__*/React.createElement("div", {
      key: c.label,
      style: {
        background: "#080604",
        border: "1px solid #1a1714",
        padding: "8px",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        color: "#b8922a",
        fontSize: "16px",
        fontFamily: "'Cinzel',serif",
        fontWeight: "700"
      }
    }, c.val), /*#__PURE__*/React.createElement("div", {
      style: {
        color: "#7a6a58",
        fontSize: "7px",
        letterSpacing: "2px",
        marginTop: "2px"
      }
    }, c.label));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "12px",
      padding: "6px 10px",
      background: "#060402",
      border: "1px solid ".concat(sizeWarning ? "#7a1515" : "#1a1714")
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#7a6a58",
      fontSize: "9px",
      fontFamily: "'Cinzel',serif",
      letterSpacing: "1px"
    }
  }, "TAILLE ESTIM\xC9E"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: sizeWarning ? "#c04040" : "#9a8a78",
      fontSize: "11px",
      fontFamily: "monospace",
      fontWeight: "700"
    }
  }, estimatedSizeKB > 1024 ? "".concat(sizeMB, " MB") : "".concat(estimatedSizeKB, " KB"), sizeWarning && " ⚠")), sizeWarning && /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#c04040",
      fontSize: "9px",
      fontFamily: "'Crimson Pro',serif",
      fontStyle: "italic",
      marginBottom: "12px",
      lineHeight: 1.5
    }
  }, "La sauvegarde est volumineuse \xE0 cause des photos. Si l'export \xE9choue, utilise \"Exporter sans photos\"."), /*#__PURE__*/React.createElement("button", {
    onClick: onExport,
    style: {
      width: "100%",
      padding: "14px",
      background: "linear-gradient(180deg,#1a1200 0%,#120d00 100%)",
      border: "1px solid #b8922a55",
      borderTop: "2px solid #b8922a",
      color: "#b8922a",
      fontFamily: "'Cinzel',serif",
      fontSize: "12px",
      letterSpacing: "3px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
      marginBottom: "8px"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "7 10 12 15 17 10"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "15",
    x2: "12",
    y2: "3"
  })), "EXPORTER LA SAUVEGARDE"), /*#__PURE__*/React.createElement("button", {
    onClick: onExportNoPhotos,
    style: {
      width: "100%",
      padding: "10px",
      background: "#060402",
      border: "1px solid #1a1714",
      color: "#6a5a4a",
      fontFamily: "'Cinzel',serif",
      fontSize: "10px",
      letterSpacing: "2px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      marginBottom: "8px"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "7 10 12 15 17 10"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "15",
    x2: "12",
    y2: "3"
  })), "EXPORTER SANS PHOTOS"), /*#__PURE__*/React.createElement("input", {
    ref: importRef,
    type: "file",
    accept: ".json",
    style: {
      display: "none"
    },
    onChange: function onChange(e) {
      if (e.target.files[0]) {
        onImport(e.target.files[0]);
        e.target.value = "";
      }
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      var _importRef$current;
      return (_importRef$current = importRef.current) === null || _importRef$current === void 0 ? void 0 : _importRef$current.click();
    },
    style: {
      width: "100%",
      padding: "14px",
      background: "#080604",
      border: "1px solid #252015",
      color: "#7a7060",
      fontFamily: "'Cinzel',serif",
      fontSize: "12px",
      letterSpacing: "3px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "17 8 12 3 7 8"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "3",
    x2: "12",
    y2: "15"
  })), "IMPORTER UNE SAUVEGARDE")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#080604",
      border: "1px solid #141210",
      borderLeft: "2px solid #35281a",
      padding: "12px 14px",
      marginTop: "8px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#7a6a58",
      fontSize: "9px",
      fontFamily: "'Cinzel',serif",
      letterSpacing: "2px",
      marginBottom: "6px"
    }
  }, "NOTE"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#9a8a78",
      fontSize: "10px",
      fontFamily: "'Crimson Pro','Crimson Text',serif",
      fontStyle: "italic",
      lineHeight: 1.7
    }
  }, "Les photos sont incluses dans la sauvegarde (encod\xE9es en base64). Le fichier peut donc \xEAtre volumineux si tu as beaucoup de photos.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "Pour transf\xE9rer vers un autre appareil, exporte le fichier JSON, transf\xE8re-le, puis importe-le depuis l'onglet Codex."))));
}

// ══════════════════════════════════════════════════════════
// VIEW: Wishlist
// ══════════════════════════════════════════════════════════

var WISH_STATUS = {
  "wanted": {
    label: "Souhaité",
    color: "#46402a",
    icon: "✦"
  },
  "ordered": {
    label: "Commandé",
    color: "#7a6a00",
    icon: "⟳"
  },
  "received": {
    label: "Reçu",
    color: "#2a6a5a",
    icon: "✓"
  }
};
var WISH_STATUS_KEYS = ["wanted", "ordered", "received"];

// ══════════════════════════════════════════════════════════
// PEINTURES CITADEL
// ══════════════════════════════════════════════════════════
var CITADEL_TYPES = {
  "Base": {
    color: "#c04040",
    price: 5.60
  },
  "Layer": {
    color: "#4080c0",
    price: 5.60
  },
  "Shade": {
    color: "#405080",
    price: 5.60
  },
  "Dry": {
    color: "#a08060",
    price: 5.60
  },
  "Contrast": {
    color: "#8040a0",
    price: 6.40
  },
  "Technical": {
    color: "#408060",
    price: 5.60
  },
  "Spray": {
    color: "#6060a0",
    price: 14.40
  }
};
var CITADEL_PAINTS = [{
  name: "Abaddon Black",
  type: "Base"
}, {
  name: "Averland Sunset",
  type: "Base"
}, {
  name: "Balthasar Gold",
  type: "Base"
}, {
  name: "Caledor Sky",
  type: "Base"
}, {
  name: "Castellan Green",
  type: "Base"
}, {
  name: "Corax White",
  type: "Base"
}, {
  name: "Death Guard Green",
  type: "Base"
}, {
  name: "Deathworld Forest",
  type: "Base"
}, {
  name: "Dryad Bark",
  type: "Base"
}, {
  name: "Incubi Darkness",
  type: "Base"
}, {
  name: "Iron Hands Steel",
  type: "Base"
}, {
  name: "Jokaero Orange",
  type: "Base"
}, {
  name: "Kantor Blue",
  type: "Base"
}, {
  name: "Khorne Red",
  type: "Base"
}, {
  name: "Leadbelcher",
  type: "Base"
}, {
  name: "Macragge Blue",
  type: "Base"
}, {
  name: "Mechanicus Standard Grey",
  type: "Base"
}, {
  name: "Mephiston Red",
  type: "Base"
}, {
  name: "Mournfang Brown",
  type: "Base"
}, {
  name: "Naggaroth Night",
  type: "Base"
}, {
  name: "Rakarth Flesh",
  type: "Base"
}, {
  name: "Rhinox Hide",
  type: "Base"
}, {
  name: "Screamer Pink",
  type: "Base"
}, {
  name: "Steel Legion Drab",
  type: "Base"
}, {
  name: "The Fang",
  type: "Base"
}, {
  name: "Thousand Sons Blue",
  type: "Base"
}, {
  name: "Wraithbone",
  type: "Base"
}, {
  name: "XV-88",
  type: "Base"
}, {
  name: "Zandri Dust",
  type: "Base"
}, {
  name: "Celestra Grey",
  type: "Base"
}, {
  name: "Corvus Black",
  type: "Base"
}, {
  name: "Waaagh! Flesh",
  type: "Base"
}, {
  name: "Agrax Earthshade",
  type: "Shade"
}, {
  name: "Athonian Camoshade",
  type: "Shade"
}, {
  name: "Biel-Tan Green",
  type: "Shade"
}, {
  name: "Carroburg Crimson",
  type: "Shade"
}, {
  name: "Coelia Greenshade",
  type: "Shade"
}, {
  name: "Drakenhof Nightshade",
  type: "Shade"
}, {
  name: "Fuegan Orange",
  type: "Shade"
}, {
  name: "Nuln Oil",
  type: "Shade"
}, {
  name: "Reikland Fleshshade",
  type: "Shade"
}, {
  name: "Seraphim Sepia",
  type: "Shade"
}, {
  name: "Druchii Violet",
  type: "Shade"
}, {
  name: "Targor Rageshade",
  type: "Shade"
}, {
  name: "Administratum Grey",
  type: "Layer"
}, {
  name: "Auric Armour Gold",
  type: "Layer"
}, {
  name: "Balor Brown",
  type: "Layer"
}, {
  name: "Baharroth Blue",
  type: "Layer"
}, {
  name: "Blue Horror",
  type: "Layer"
}, {
  name: "Cadian Fleshtone",
  type: "Layer"
}, {
  name: "Calgar Blue",
  type: "Layer"
}, {
  name: "Ceramite White",
  type: "Layer"
}, {
  name: "Daemonette Hide",
  type: "Layer"
}, {
  name: "Dawnstone",
  type: "Layer"
}, {
  name: "Elysian Green",
  type: "Layer"
}, {
  name: "Eshin Grey",
  type: "Layer"
}, {
  name: "Evil Sunz Scarlet",
  type: "Layer"
}, {
  name: "Fire Dragon Bright",
  type: "Layer"
}, {
  name: "Flash Gitz Yellow",
  type: "Layer"
}, {
  name: "Flayed One Flesh",
  type: "Layer"
}, {
  name: "Genestealer Purple",
  type: "Layer"
}, {
  name: "Ironbreaker",
  type: "Layer"
}, {
  name: "Karak Stone",
  type: "Layer"
}, {
  name: "Kislev Flesh",
  type: "Layer"
}, {
  name: "Liberator Gold",
  type: "Layer"
}, {
  name: "Longbeard Grey",
  type: "Layer"
}, {
  name: "Moot Green",
  type: "Layer"
}, {
  name: "Nurgling Green",
  type: "Layer"
}, {
  name: "Pink Horror",
  type: "Layer"
}, {
  name: "Russ Grey",
  type: "Layer"
}, {
  name: "Runefang Steel",
  type: "Layer"
}, {
  name: "Screaming Skull",
  type: "Layer"
}, {
  name: "Skarsnik Green",
  type: "Layer"
}, {
  name: "Slaanesh Grey",
  type: "Layer"
}, {
  name: "Squig Orange",
  type: "Layer"
}, {
  name: "Stormvermin Fur",
  type: "Layer"
}, {
  name: "Sybarite Green",
  type: "Layer"
}, {
  name: "Temple Guard Blue",
  type: "Layer"
}, {
  name: "Thunderhawk Blue",
  type: "Layer"
}, {
  name: "Troll Slayer Orange",
  type: "Layer"
}, {
  name: "Ulthuan Grey",
  type: "Layer"
}, {
  name: "Ushabti Bone",
  type: "Layer"
}, {
  name: "White Scar",
  type: "Layer"
}, {
  name: "Wild Rider Red",
  type: "Layer"
}, {
  name: "Wych Flesh",
  type: "Layer"
}, {
  name: "Xereus Purple",
  type: "Layer"
}, {
  name: "Apothecary White",
  type: "Contrast"
}, {
  name: "Aethermatic Blue",
  type: "Contrast"
}, {
  name: "Black Templar",
  type: "Contrast"
}, {
  name: "Blood Angels Red",
  type: "Contrast"
}, {
  name: "Bonewhite",
  type: "Contrast"
}, {
  name: "Creed Camo",
  type: "Contrast"
}, {
  name: "Dark Angels Green",
  type: "Contrast"
}, {
  name: "Flesh Tearers Red",
  type: "Contrast"
}, {
  name: "Gore-Grunta Fur",
  type: "Contrast"
}, {
  name: "Guilliman Flesh",
  type: "Contrast"
}, {
  name: "Iyanden Yellow",
  type: "Contrast"
}, {
  name: "Leviadon Blue",
  type: "Contrast"
}, {
  name: "Militarum Green",
  type: "Contrast"
}, {
  name: "Nazdreg Yellow",
  type: "Contrast"
}, {
  name: "Nighthaunt Gloom",
  type: "Contrast"
}, {
  name: "Ork Flesh",
  type: "Contrast"
}, {
  name: "Plaguebearer Flesh",
  type: "Contrast"
}, {
  name: "Skeleton Horde",
  type: "Contrast"
}, {
  name: "Space Wolves Grey",
  type: "Contrast"
}, {
  name: "Striking Scorpion Green",
  type: "Contrast"
}, {
  name: "Talassar Blue",
  type: "Contrast"
}, {
  name: "Terradon Turquoise",
  type: "Contrast"
}, {
  name: "Ultramarines Blue",
  type: "Contrast"
}, {
  name: "Volupus Pink",
  type: "Contrast"
}, {
  name: "Wyldwood",
  type: "Contrast"
}, {
  name: "Astorath Red",
  type: "Dry"
}, {
  name: "Hexos Palesun",
  type: "Dry"
}, {
  name: "Icestorm",
  type: "Dry"
}, {
  name: "Lucius Lilac",
  type: "Dry"
}, {
  name: "Necron Compound",
  type: "Dry"
}, {
  name: "Praxeti White",
  type: "Dry"
}, {
  name: "Ryza Rust",
  type: "Dry"
}, {
  name: "Sigmarite",
  type: "Dry"
}, {
  name: "Skullcrusher Brass",
  type: "Dry"
}, {
  name: "Sylvaneth Bark",
  type: "Dry"
}, {
  name: "Terminus Stone",
  type: "Dry"
}, {
  name: "Underhive Ash",
  type: "Dry"
}, {
  name: "Ardcoat",
  type: "Technical"
}, {
  name: "Astrogranite",
  type: "Technical"
}, {
  name: "Blood for the Blood God",
  type: "Technical"
}, {
  name: "Contrast Medium",
  type: "Technical"
}, {
  name: "Martian Ironearth",
  type: "Technical"
}, {
  name: "Nihilakh Oxide",
  type: "Technical"
}, {
  name: "Nurgles Rot",
  type: "Technical"
}, {
  name: "Stormshield",
  type: "Technical"
}, {
  name: "Typhus Corrosion",
  type: "Technical"
}, {
  name: "Valhallan Blizzard",
  type: "Technical"
},
// Sprays / Bombes
{
  name: "Chaos Black Spray",
  type: "Spray"
}, {
  name: "Corax White Spray",
  type: "Spray"
}, {
  name: "Wraithbone Spray",
  type: "Spray"
}, {
  name: "Grey Seer Spray",
  type: "Spray"
}, {
  name: "Leadbelcher Spray",
  type: "Spray"
}, {
  name: "Zandri Dust Spray",
  type: "Spray"
}, {
  name: "Mephiston Red Spray",
  type: "Spray"
}, {
  name: "Macragge Blue Spray",
  type: "Spray"
}, {
  name: "Death Guard Green Spray",
  type: "Spray"
}, {
  name: "Caledor Sky Spray",
  type: "Spray"
}, {
  name: "Retributor Armour Spray",
  type: "Spray"
}, {
  name: "Averland Sunset Spray",
  type: "Spray"
}];
function ViewWishlist(_ref47) {
  var wishlist = _ref47.wishlist,
    paintWishlist = _ref47.paintWishlist,
    ptsMap = _ref47.ptsMap,
    _onAdd = _ref47.onAdd,
    onDelete = _ref47.onDelete,
    onSetStatus = _ref47.onSetStatus,
    onSetPrice = _ref47.onSetPrice,
    onAddPaint = _ref47.onAddPaint,
    onDeletePaint = _ref47.onDeletePaint;
  var _useState73 = useState("units"),
    _useState74 = _slicedToArray(_useState73, 2),
    tab = _useState74[0],
    setTab = _useState74[1];
  var _useState75 = useState(false),
    _useState76 = _slicedToArray(_useState75, 2),
    showFactionPicker = _useState76[0],
    setShowFactionPicker = _useState76[1];
  var _useState77 = useState(false),
    _useState78 = _slicedToArray(_useState77, 2),
    showUnitModal = _useState78[0],
    setShowUnitModal = _useState78[1];
  var _useState79 = useState("SM"),
    _useState80 = _slicedToArray(_useState79, 2),
    modalFaction = _useState80[0],
    setModalFaction = _useState80[1];
  var _useState81 = useState("faction"),
    _useState82 = _slicedToArray(_useState81, 2),
    sortBy = _useState82[0],
    setSortBy = _useState82[1];
  var _useState83 = useState(""),
    _useState84 = _slicedToArray(_useState83, 2),
    paintSearch = _useState84[0],
    setPaintSearch = _useState84[1];
  var _useState85 = useState("all"),
    _useState86 = _slicedToArray(_useState85, 2),
    paintFilter = _useState86[0],
    setPaintFilter = _useState86[1];

  // ── UNITS ──────────────────────────────────────────────
  var allItems = (wishlist || []).filter(function (i) {
    return i && i.unitId;
  }).map(function (i) {
    var _UNITS_DB$i$faction1;
    return _objectSpread(_objectSpread({}, i), {}, {
      unit: ((_UNITS_DB$i$faction1 = UNITS_DB[i.faction]) === null || _UNITS_DB$i$faction1 === void 0 ? void 0 : _UNITS_DB$i$faction1.find(function (u) {
        return u.id === i.unitId;
      })) || null,
      fDef: FACTIONS[i.faction] || FACTIONS["SM"]
    });
  }).filter(function (i) {
    return i.unit;
  });
  var sortedItems = _toConsumableArray(allItems).sort(function (a, b) {
    var _a$unit, _b$unit;
    if (sortBy === "faction") return (a.faction || "").localeCompare(b.faction || "");
    if (sortBy === "role") return (((_a$unit = a.unit) === null || _a$unit === void 0 ? void 0 : _a$unit.role) || "").localeCompare(((_b$unit = b.unit) === null || _b$unit === void 0 ? void 0 : _b$unit.role) || "");
    if (sortBy === "status") return (a.status || "wanted").localeCompare(b.status || "wanted");
    if (sortBy === "price") {
      var _a$unit2, _b$unit2;
      var pa = a.price || SHOP_PRICES[(_a$unit2 = a.unit) === null || _a$unit2 === void 0 ? void 0 : _a$unit2.name] || 0;
      var pb = b.price || SHOP_PRICES[(_b$unit2 = b.unit) === null || _b$unit2 === void 0 ? void 0 : _b$unit2.name] || 0;
      return pb - pa;
    }
    return 0;
  });
  var totalPrice = allItems.reduce(function (s, i) {
    try {
      var _UNITS_DB$i$faction10;
      var unit = (_UNITS_DB$i$faction10 = UNITS_DB[i.faction]) === null || _UNITS_DB$i$faction10 === void 0 ? void 0 : _UNITS_DB$i$faction10.find(function (u) {
        return u.id === i.unitId;
      });
      return s + (i.price || (unit ? SHOP_PRICES[unit.name] : 0) || 0) * (i.qty || 1);
    } catch (_unused2) {
      return s;
    }
  }, 0);
  var totalPts = allItems.reduce(function (s, i) {
    try {
      var _UNITS_DB$i$faction11;
      var unit = (_UNITS_DB$i$faction11 = UNITS_DB[i.faction]) === null || _UNITS_DB$i$faction11 === void 0 ? void 0 : _UNITS_DB$i$faction11.find(function (u) {
        return u.id === i.unitId;
      });
      return s + (ptsMap["".concat(i.faction, ":").concat(i.unitId)] || (unit ? POINTS_DB[unit.name] : 0) || 0) * (i.qty || 1);
    } catch (_unused3) {
      return s;
    }
  }, 0);
  var cycleStatus = function cycleStatus(id) {
    var item = (wishlist || []).find(function (i) {
      return i.id === id;
    });
    if (!item) return;
    var idx = WISH_STATUS_KEYS.indexOf(item.status || "wanted");
    onSetStatus(id, WISH_STATUS_KEYS[(idx + 1) % WISH_STATUS_KEYS.length]);
  };

  // ── PAINTS ─────────────────────────────────────────────
  var pw = paintWishlist || [];
  var paintTotal = pw.reduce(function (s, p) {
    var _CITADEL_TYPES$p$type;
    return s + (((_CITADEL_TYPES$p$type = CITADEL_TYPES[p.type]) === null || _CITADEL_TYPES$p$type === void 0 ? void 0 : _CITADEL_TYPES$p$type.price) || 5.60) * (p.qty || 1);
  }, 0);
  var filteredPaints = CITADEL_PAINTS.filter(function (p) {
    var matchType = paintFilter === "all" || p.type === paintFilter;
    var matchSearch = !paintSearch || p.name.toLowerCase().includes(paintSearch.toLowerCase());
    return matchType && matchSearch;
  });
  var inWishlist = function inWishlist(name) {
    return pw.some(function (p) {
      return p.name === name;
    });
  };
  var grandTotal = totalPrice + paintTotal;
  return /*#__PURE__*/React.createElement("div", {
    style: pageStyle,
    className: "bg-wishlist"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#030202",
      borderBottom: "1px solid #0f0f0f",
      padding: "14px 16px 12px",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: "14px",
      top: "50%",
      transform: "translateY(-50%)",
      fontSize: "60px",
      color: "#0b0a09",
      lineHeight: 1,
      pointerEvents: "none",
      fontFamily: "serif"
    }
  }, "\u2726"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#b8922a",
      fontSize: "8px",
      letterSpacing: "5px",
      fontFamily: "'Cinzel',serif",
      opacity: 0.6,
      marginBottom: "3px"
    }
  }, "ACQUISITIONS FUTURES"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#e8dfc0",
      fontSize: "17px",
      fontFamily: "'Cinzel Decorative','Cinzel',serif",
      letterSpacing: "3px",
      fontWeight: "700"
    }
  }, "WISHLIST"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "10px",
      marginTop: "3px"
    }
  }, grandTotal > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#6a9a3a",
      fontSize: "10px",
      fontWeight: "700"
    }
  }, "~", grandTotal.toFixed(0), "\u20AC total"), totalPts > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#9a8a78",
      fontSize: "9px"
    }
  }, totalPts, " pts"))), tab === "units" && /*#__PURE__*/React.createElement(IconBtn, {
    onClick: function onClick() {
      return setShowFactionPicker(true);
    }
  }, /*#__PURE__*/React.createElement(Ic.Plus, null)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      background: "#020202",
      borderBottom: "1px solid #0f0f0f"
    }
  }, [{
    key: "units",
    label: "FIGURINES",
    icon: "⚔"
  }, {
    key: "paints",
    label: "PEINTURES",
    icon: "🎨"
  }].map(function (t) {
    return /*#__PURE__*/React.createElement("button", {
      key: t.key,
      onClick: function onClick() {
        return setTab(t.key);
      },
      style: {
        flex: 1,
        background: "none",
        border: "none",
        borderBottom: tab === t.key ? "2px solid #b8922a" : "2px solid transparent",
        color: tab === t.key ? "#b8922a" : "#181410",
        padding: "10px 0",
        cursor: "pointer",
        fontFamily: "'Cinzel',serif",
        fontSize: "9px",
        letterSpacing: "2px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "14px",
        marginBottom: "2px"
      }
    }, t.icon), t.label, t.key === "units" && allItems.length > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "8px",
        color: tab === t.key ? "#b8922a" : "#7a6a58",
        marginTop: "1px"
      }
    }, allItems.length), t.key === "paints" && pw.length > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "8px",
        color: tab === t.key ? "#b8922a" : "#7a6a58",
        marginTop: "1px"
      }
    }, pw.length));
  })), tab === "units" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "4px",
      padding: "8px 12px",
      background: "#030202",
      borderBottom: "1px solid #0f0f0f",
      overflowX: "auto"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#9a8a78",
      fontSize: "9px",
      fontFamily: "'Cinzel',serif",
      letterSpacing: "2px",
      alignSelf: "center",
      flexShrink: 0
    }
  }, "TRIER:"), [{
    k: "faction",
    l: "FACTION"
  }, {
    k: "role",
    l: "RÔLE"
  }, {
    k: "status",
    l: "STATUT"
  }, {
    k: "price",
    l: "PRIX"
  }].map(function (s) {
    return /*#__PURE__*/React.createElement("button", {
      key: s.k,
      onClick: function onClick() {
        return setSortBy(s.k);
      },
      style: {
        padding: "4px 10px",
        background: sortBy === s.k ? "#1a1200" : "#060402",
        border: "1px solid ".concat(sortBy === s.k ? "#b8922a55" : "#1c1c1c"),
        color: sortBy === s.k ? "#b8922a" : "#9a8a78",
        fontFamily: "'Cinzel',serif",
        fontSize: "8px",
        letterSpacing: "1px",
        cursor: "pointer",
        whiteSpace: "nowrap",
        flexShrink: 0
      }
    }, s.l);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "10px 14px"
    }
  }, sortedItems.length === 0 && /*#__PURE__*/React.createElement(EmptyState, {
    icon: "\u2726",
    title: "Wishlist vide",
    sub: "Ajoutez des unit\xE9s avec le bouton +"
  }), sortedItems.map(function (item, idx) {
    if (!item.unit) return null;
    var ws = WISH_STATUS[item.status || "wanted"];
    var shopPrice = item.price || SHOP_PRICES[item.unit.name] || null;
    var isAuto = !item.price && !!SHOP_PRICES[item.unit.name];
    var unitPts = ptsMap["".concat(item.faction, ":").concat(item.unitId)] || POINTS_DB[item.unit.name] || null;
    return /*#__PURE__*/React.createElement("div", {
      key: item.id,
      className: "hcard",
      style: {
        background: "linear-gradient(180deg,#181512 0%,#121008 100%)",
        border: "1px solid #222018",
        borderLeft: "3px solid ".concat(ws.color),
        marginBottom: "5px",
        display: "flex",
        alignItems: "stretch",
        animation: "slideLeft 0.2s ".concat(idx * 20, "ms ease both")
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return cycleStatus(item.id);
      },
      title: ws.label,
      style: {
        width: "30px",
        flexShrink: 0,
        background: "none",
        border: "none",
        borderRight: "1px solid ".concat(ws.color, "22"),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "2px",
        cursor: "pointer",
        touchAction: "manipulation"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "12px",
        color: ws.color
      }
    }, ws.icon), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "6px",
        color: ws.color,
        fontFamily: "'Cinzel',serif"
      }
    }, ws.label.slice(0, 3).toUpperCase())), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        padding: "8px 10px",
        display: "flex",
        alignItems: "center",
        gap: "8px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "6px",
        marginBottom: "3px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "12px",
        color: item.fDef.accent
      }
    }, item.fDef.icon), /*#__PURE__*/React.createElement("div", {
      style: {
        color: "#e8dfc0",
        fontSize: "12px",
        fontFamily: "'Cinzel',serif",
        lineHeight: 1.2
      }
    }, item.qty > 1 && /*#__PURE__*/React.createElement("span", {
      style: {
        color: item.fDef.accent,
        marginRight: "4px",
        fontSize: "10px"
      }
    }, "\xD7", item.qty), item.unit.name)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "5px",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#7a6a58",
        fontSize: "8px",
        fontFamily: "'Cinzel',serif",
        letterSpacing: "1px"
      }
    }, item.unit.role), /*#__PURE__*/React.createElement(WahapediaBtn, {
      unitName: item.unit.name,
      faction: item.faction,
      accent: item.fDef.accent
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: "4px"
      }
    }, unitPts && /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#7a7060",
        fontSize: "9px",
        fontFamily: "monospace"
      }
    }, unitPts * item.qty, "pts"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "3px"
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "number",
      value: item.price || "",
      onChange: function onChange(e) {
        return onSetPrice(item.id, parseInt(e.target.value) || 0);
      },
      placeholder: shopPrice ? shopPrice.toFixed(0) : "€",
      style: {
        width: "52px",
        background: isAuto ? "#0d1008" : "#060402",
        border: "1px solid ".concat(isAuto ? "#6a9a4a" : "#7a6a58"),
        color: isAuto ? "#b8e890" : "#e8dfc0",
        WebkitTextFillColor: isAuto ? "#b8e890" : "#e8dfc0",
        padding: "4px 5px",
        fontSize: "12px",
        fontFamily: "monospace",
        fontWeight: "700",
        outline: "none",
        textAlign: "center"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        color: isAuto ? "#b8e890" : "#e8dfc0",
        fontSize: "11px",
        fontWeight: "700"
      }
    }, "\u20AC", isAuto && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "8px"
      }
    }, " a"))), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return onDelete(item.id);
      },
      style: {
        background: "none",
        border: "1px solid #2a2215",
        color: "#6a4a3a",
        cursor: "pointer",
        padding: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        touchAction: "manipulation"
      }
    }, /*#__PURE__*/React.createElement(Ic.Trash, null)))));
  })), showFactionPicker && !showUnitModal && /*#__PURE__*/React.createElement(Overlay, null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#0a0806",
      border: "1px solid #b8922a44",
      borderTop: "2px solid #b8922a",
      width: "100%",
      maxWidth: "360px",
      margin: "0 16px",
      padding: "20px 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#e8dfc0",
      fontSize: "12px",
      fontFamily: "'Cinzel',serif",
      letterSpacing: "2px"
    }
  }, "CHOISIR UNE FACTION"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowFactionPicker(false);
    },
    style: {
      background: "none",
      border: "none",
      color: "#7a7060",
      cursor: "pointer",
      fontSize: "18px",
      lineHeight: 1
    }
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "8px"
    }
  }, Object.entries(FACTIONS).map(function (_ref48) {
    var _ref49 = _slicedToArray(_ref48, 2),
      k = _ref49[0],
      v = _ref49[1];
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      onClick: function onClick() {
        setModalFaction(k);
        setShowFactionPicker(false);
        setShowUnitModal(true);
      },
      style: {
        flex: 1,
        padding: "14px 4px",
        background: "".concat(v.accent, "11"),
        border: "1px solid ".concat(v.accent, "44"),
        color: v.accent,
        cursor: "pointer",
        fontFamily: "'Cinzel',serif",
        fontSize: "10px",
        letterSpacing: "1px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "6px",
        touchAction: "manipulation"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "24px"
      }
    }, v.icon), v["short"]);
  })))), showUnitModal && /*#__PURE__*/React.createElement(ModalAddUnit, {
    faction: modalFaction,
    inventory: [],
    mode: "wishlist",
    onClose: function onClose() {
      return setShowUnitModal(false);
    },
    onAdd: function onAdd(entry) {
      _onAdd({
        unitId: entry.unitId,
        faction: entry.faction,
        qty: entry.qty || 1,
        id: Date.now(),
        status: "wanted",
        price: 0
      });
      setShowUnitModal(false);
    }
  })), tab === "paints" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 12px",
      background: "#030202",
      borderBottom: "1px solid #0f0f0f"
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: paintSearch,
    onChange: function onChange(e) {
      return setPaintSearch(e.target.value);
    },
    placeholder: "Rechercher une peinture...",
    style: {
      width: "100%",
      background: "#060402",
      border: "1px solid #1c1c1c",
      color: "#e8dfc0",
      padding: "8px 10px",
      fontSize: "12px",
      outline: "none",
      marginBottom: "8px",
      fontFamily: "'Crimson Pro',serif",
      boxSizing: "border-box"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "4px",
      overflowX: "auto"
    }
  }, ["all"].concat(_toConsumableArray(Object.keys(CITADEL_TYPES))).map(function (t) {
    var _CITADEL_TYPES$t, _CITADEL_TYPES$t2, _CITADEL_TYPES$t3;
    return /*#__PURE__*/React.createElement("button", {
      key: t,
      onClick: function onClick() {
        return setPaintFilter(t);
      },
      style: {
        padding: "3px 10px",
        background: paintFilter === t ? (((_CITADEL_TYPES$t = CITADEL_TYPES[t]) === null || _CITADEL_TYPES$t === void 0 ? void 0 : _CITADEL_TYPES$t.color) || "#b8922a") + "33" : "#060402",
        border: "1px solid ".concat(paintFilter === t ? (((_CITADEL_TYPES$t2 = CITADEL_TYPES[t]) === null || _CITADEL_TYPES$t2 === void 0 ? void 0 : _CITADEL_TYPES$t2.color) || "#b8922a") + "88" : "#1c1c1c"),
        color: paintFilter === t ? ((_CITADEL_TYPES$t3 = CITADEL_TYPES[t]) === null || _CITADEL_TYPES$t3 === void 0 ? void 0 : _CITADEL_TYPES$t3.color) || "#b8922a" : "#9a8a78",
        fontFamily: "'Cinzel',serif",
        fontSize: "8px",
        letterSpacing: "1px",
        cursor: "pointer",
        whiteSpace: "nowrap",
        flexShrink: 0
      }
    }, t === "all" ? "TOUT" : t.toUpperCase());
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "10px 14px"
    }
  }, pw.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "12px",
      padding: "8px 12px",
      background: "#0a0c08",
      border: "1px solid #2a3a1a",
      borderLeft: "3px solid #5a8a3a"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#5a8a3a",
      fontSize: "9px",
      fontFamily: "'Cinzel',serif",
      letterSpacing: "2px",
      marginBottom: "6px"
    }
  }, "MA LISTE (", pw.length, ")"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "5px"
    }
  }, pw.map(function (p) {
    var _CITADEL_TYPES$p$type2, _CITADEL_TYPES$p$type3, _CITADEL_TYPES$p$type4;
    return /*#__PURE__*/React.createElement("div", {
      key: p.id,
      style: {
        display: "flex",
        alignItems: "center",
        gap: "4px",
        background: "#060804",
        border: "1px solid ".concat(((_CITADEL_TYPES$p$type2 = CITADEL_TYPES[p.type]) === null || _CITADEL_TYPES$p$type2 === void 0 ? void 0 : _CITADEL_TYPES$p$type2.color) || "#555", "44"),
        padding: "3px 8px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "8px",
        height: "8px",
        borderRadius: "50%",
        background: ((_CITADEL_TYPES$p$type3 = CITADEL_TYPES[p.type]) === null || _CITADEL_TYPES$p$type3 === void 0 ? void 0 : _CITADEL_TYPES$p$type3.color) || "#888",
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#c8b890",
        fontSize: "10px"
      }
    }, p.name), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#4a6a2a",
        fontSize: "9px",
        fontWeight: "700"
      }
    }, (((_CITADEL_TYPES$p$type4 = CITADEL_TYPES[p.type]) === null || _CITADEL_TYPES$p$type4 === void 0 ? void 0 : _CITADEL_TYPES$p$type4.price) || 5.60).toFixed(2), "\u20AC"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return onDeletePaint(p.id);
      },
      style: {
        background: "none",
        border: "none",
        color: "#251810",
        cursor: "pointer",
        padding: "0 2px",
        fontSize: "10px"
      }
    }, "\u2715"));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#4a6a2a",
      fontSize: "10px",
      marginTop: "8px",
      fontWeight: "700"
    }
  }, "Total : ", paintTotal.toFixed(2), "\u20AC")), filteredPaints.map(function (paint) {
    var added = inWishlist(paint.name);
    var tc = CITADEL_TYPES[paint.type];
    return /*#__PURE__*/React.createElement("div", {
      key: paint.name,
      style: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "7px 10px",
        marginBottom: "3px",
        background: "#0d0b0a",
        border: "1px solid #1a1816",
        borderLeft: "3px solid ".concat(added ? tc.color : tc.color + "33"),
        opacity: added ? 1 : 0.7
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        background: tc.color,
        flexShrink: 0,
        boxShadow: added ? "0 0 6px ".concat(tc.color) : "none"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        color: added ? "#e8dfc0" : "#8a7050",
        fontSize: "11px",
        fontFamily: "'Cinzel',serif"
      }
    }, paint.name), /*#__PURE__*/React.createElement("div", {
      style: {
        color: tc.color,
        fontSize: "8px",
        opacity: 0.7,
        letterSpacing: "1px"
      }
    }, paint.type.toUpperCase())), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#5a8a3a",
        fontSize: "10px",
        fontWeight: "700",
        minWidth: "36px",
        textAlign: "right"
      }
    }, tc.price.toFixed(2), "\u20AC"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        var _pw$find;
        return added ? onDeletePaint((_pw$find = pw.find(function (p) {
          return p.name === paint.name;
        })) === null || _pw$find === void 0 ? void 0 : _pw$find.id) : onAddPaint({
          id: Date.now(),
          name: paint.name,
          type: paint.type,
          qty: 1
        });
      },
      style: {
        background: added ? "#1a0a0a" : "#0a1008",
        border: "1px solid ".concat(added ? "#7a1515" : tc.color + "55"),
        color: added ? "#c04040" : tc.color,
        cursor: "pointer",
        padding: "4px 10px",
        fontFamily: "'Cinzel',serif",
        fontSize: "9px",
        letterSpacing: "1px",
        flexShrink: 0,
        touchAction: "manipulation"
      }
    }, added ? "RETIRER" : "+ AJOUTER"));
  }))));
}

// ══════════════════════════════════════════════════════════
// ROOT APP
// ══════════════════════════════════════════════════════════

function SplashOverlay(_ref50) {
  var inventory = _ref50.inventory,
    lists = _ref50.lists,
    ptsMap = _ref50.ptsMap,
    onDone = _ref50.onDone;
  var _useState87 = useState("in"),
    _useState88 = _slicedToArray(_useState87, 2),
    phase = _useState88[0],
    setPhase = _useState88[1]; // "in" | "hold" | "out"
  var totalModels = inventory.reduce(function (s, i) {
    return s + i.qty;
  }, 0);
  var painted = inventory.filter(function (i) {
    return i.paintStatus === "painted";
  }).reduce(function (s, i) {
    return s + i.qty;
  }, 0);
  var paintPct = totalModels ? Math.round(painted / totalModels * 100) : 0;
  var totalPts = inventory.reduce(function (s, i) {
    var _UNITS_DB$i$faction12;
    var manual = ptsMap["".concat(i.faction, ":").concat(i.unitId)];
    var unit = (_UNITS_DB$i$faction12 = UNITS_DB[i.faction]) === null || _UNITS_DB$i$faction12 === void 0 ? void 0 : _UNITS_DB$i$faction12.find(function (u) {
      return u.id === i.unitId;
    });
    var p = manual || (unit ? POINTS_DB[unit.name] : 0) || 0;
    return s + p * i.qty;
  }, 0);
  useEffect(function () {
    var t1 = setTimeout(function () {
      return setPhase("out");
    }, 2600);
    var t2 = setTimeout(function () {
      return onDone();
    }, 3200);
    return function () {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);
  var factionSummary = Object.entries(FACTIONS).map(function (_ref51) {
    var _ref52 = _slicedToArray(_ref51, 2),
      k = _ref52[0],
      f = _ref52[1];
    var items = inventory.filter(function (i) {
      return i.faction === k;
    });
    var models = items.reduce(function (s, i) {
      var _UNITS_DB$k4;
      var u = (_UNITS_DB$k4 = UNITS_DB[k]) === null || _UNITS_DB$k4 === void 0 ? void 0 : _UNITS_DB$k4.find(function (u) {
        return u.id === i.unitId;
      });
      return s + getModelCount(u === null || u === void 0 ? void 0 : u.name, i.qty || 1, i.modelCount);
    }, 0);
    var units = items.reduce(function (s, i) {
      return s + (i.qty || 1);
    }, 0);
    var p = items.filter(function (i) {
      return i.paintStatus === "painted";
    }).reduce(function (s, i) {
      return s + i.qty;
    }, 0);
    return {
      key: k,
      f: f,
      models: models,
      painted: p
    };
  }).filter(function (s) {
    return s.models > 0;
  });
  return /*#__PURE__*/React.createElement("div", {
    onClick: onDone,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 9999,
      background: "#020202",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Cinzel',serif",
      cursor: "pointer",
      opacity: phase === "out" ? 0 : 1,
      transition: phase === "out" ? "opacity 0.6s ease" : "none",
      maxWidth: "430px",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      fontSize: "300px",
      color: "#050403",
      lineHeight: 1,
      fontFamily: "serif",
      pointerEvents: "none",
      animation: "breathe 4s ease-in-out infinite"
    }
  }, "\u2720"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(ellipse at center, transparent 20%, #020202 80%)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      maxWidth: "320px",
      padding: "0 24px",
      animation: "splashIn 0.5s ease both"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: "32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "52px",
      color: "#b8922a",
      textShadow: "0 0 60px #b8922a55",
      lineHeight: 1,
      marginBottom: "14px",
      animation: "crossGrow 0.5s cubic-bezier(0.34,1.56,0.64,1) both"
    }
  }, "\u2720"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#e8dfc0",
      fontSize: "19px",
      letterSpacing: "7px",
      fontFamily: "'Cinzel Decorative',serif",
      fontWeight: "900",
      textShadow: "0 0 30px #b8922a33"
    }
  }, "BLACK TEMPLARS"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#7a6a58",
      fontSize: "8px",
      letterSpacing: "4px",
      marginTop: "5px"
    }
  }, "CODEX ASTARTES")), inventory.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      marginBottom: "20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: "1px",
      background: "linear-gradient(90deg,transparent,#2a2215)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#7a6a58",
      fontSize: "8px",
      letterSpacing: "4px"
    }
  }, "\xC9TAT DE LA FORCE"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: "1px",
      background: "linear-gradient(90deg,#2a2215,transparent)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: "8px",
      marginBottom: "20px",
      animation: "statSlide 0.5s 0.2s ease both"
    }
  }, [{
    val: totalModels,
    label: "FIGURINES"
  }, {
    val: "".concat(paintPct, "%"),
    label: "PEINT"
  }, {
    val: lists.length,
    label: "LISTES"
  }].map(function (s) {
    return /*#__PURE__*/React.createElement("div", {
      key: s.label,
      style: {
        background: "#0a0806",
        border: "1px solid #1a1714",
        padding: "12px 8px",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        color: "#b8922a",
        fontSize: "22px",
        fontWeight: "900",
        lineHeight: 1
      }
    }, s.val), /*#__PURE__*/React.createElement("div", {
      style: {
        color: "#7a6a58",
        fontSize: "7px",
        letterSpacing: "2px",
        marginTop: "4px"
      }
    }, s.label));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "20px",
      animation: "statSlide 0.5s 0.35s ease both"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      height: "3px",
      gap: "1px",
      marginBottom: "6px"
    }
  }, ["painted", "wip", "primed", "unpainted"].map(function (status) {
    var cnt = inventory.filter(function (i) {
      return (i.paintStatus || "unpainted") === status;
    }).reduce(function (s, i) {
      return s + i.qty;
    }, 0);
    return cnt > 0 ? /*#__PURE__*/React.createElement("div", {
      key: status,
      style: {
        flex: cnt,
        background: PAINT_STATUS[status].color,
        transition: "flex 0.8s"
      }
    }) : null;
  }))), factionSummary.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      animation: "statSlide 0.5s 0.5s ease both"
    }
  }, factionSummary.map(function (_ref53) {
    var key = _ref53.key,
      f = _ref53.f,
      models = _ref53.models,
      painted = _ref53.painted;
    var pct = models ? Math.round(painted / models * 100) : 0;
    return /*#__PURE__*/React.createElement("div", {
      key: key,
      style: {
        display: "flex",
        alignItems: "center",
        gap: "10px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "14px",
        width: "20px",
        textAlign: "center"
      }
    }, f.icon), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        height: "2px",
        background: "#0f0f0f",
        marginBottom: "3px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "".concat(pct, "%"),
        background: pct === 100 ? "#2a7a2a" : f.accent,
        transition: "width 1s 0.5s"
      }
    }))), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#7a6a58",
        fontSize: "8px",
        width: "28px",
        textAlign: "right"
      }
    }, models, "fig"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: pct === 100 ? "#2a7a2a" : f.accent,
        fontSize: "9px",
        fontWeight: "700",
        width: "32px",
        textAlign: "right"
      }
    }, pct, "%"));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginTop: "28px",
      color: "#1a1610",
      fontSize: "8px",
      letterSpacing: "3px",
      animation: "pulse 2s 1s infinite"
    }
  }, "TOUCHER POUR ENTRER")));
}
function App() {
  var _useState89 = useState({
      inventory: [],
      lists: [],
      ptsMap: {},
      wishlist: [],
      paintWishlist: [],
      parade: []
    }),
    _useState90 = _slicedToArray(_useState89, 2),
    appState = _useState90[0],
    setAppState = _useState90[1];
  var _useState91 = useState(false),
    _useState92 = _slicedToArray(_useState91, 2),
    loaded = _useState92[0],
    setLoaded = _useState92[1];
  var _useConfirm = useConfirm(),
    _useConfirm2 = _slicedToArray(_useConfirm, 2),
    confirm = _useConfirm2[0],
    confirmModal = _useConfirm2[1];
  var _useState93 = useState(function () {
      // Show splash max 3 times
      try {
        var n = parseInt(localStorage.getItem("wh40k-splash-count") || "0");
        return n >= 3;
      } catch (_unused4) {
        return false;
      }
    }),
    _useState94 = _slicedToArray(_useState93, 2),
    splashDone = _useState94[0],
    setSplashDone = _useState94[1];
  var _useState95 = useState("lists"),
    _useState96 = _slicedToArray(_useState95, 2),
    activeView = _useState96[0],
    setActiveView = _useState96[1];
  var _useState97 = useState(null),
    _useState98 = _slicedToArray(_useState97, 2),
    activeListId = _useState98[0],
    setActiveListId = _useState98[1];
  var _useState99 = useState(null),
    _useState100 = _slicedToArray(_useState99, 2),
    lastSaved = _useState100[0],
    setLastSaved = _useState100[1]; // timestamp
  var _useState101 = useState(false),
    _useState102 = _slicedToArray(_useState101, 2),
    saveAnim = _useState102[0],
    setSaveAnim = _useState102[1]; // flash animation

  useEffect(function () {
    loadApp().then(function (saved) {
      if (saved) setAppState(_objectSpread({
        inventory: [],
        lists: [],
        ptsMap: {},
        wishlist: [],
        paintWishlist: [],
        parade: []
      }, saved));
      setLoaded(true);
    });
  }, []);
  var persist = useCallback(function (s) {
    setSaveAnim(true);
    setLastSaved(Date.now());
    saveApp(s);
    setTimeout(function () {
      return setSaveAnim(false);
    }, 800);
  }, []);

  // Human-readable "il y a X" label, refreshed every 30s
  var _useState103 = useState(0),
    _useState104 = _slicedToArray(_useState103, 2),
    forceRender = _useState104[1];
  useEffect(function () {
    var t = setInterval(function () {
      return forceRender(function (n) {
        return n + 1;
      });
    }, 30000);
    return function () {
      return clearInterval(t);
    };
  }, []);
  var savedLabel = function () {
    if (!lastSaved) return null;
    var sec = Math.floor((Date.now() - lastSaved) / 1000);
    if (sec < 10) return "à l'instant";
    if (sec < 60) return "il y a ".concat(sec, "s");
    var min = Math.floor(sec / 60);
    if (min < 60) return "il y a ".concat(min, " min");
    return "il y a ".concat(Math.floor(min / 60), "h");
  }();
  var updateApp = useCallback(function (fn) {
    setAppState(function (prev) {
      var next = fn(prev);
      persist(next);
      return next;
    });
  }, [persist]);

  // Set pts for a unit (stored in ptsMap keyed by "faction:unitId")
  var handleSetPts = useCallback(function (unitId, faction, pts) {
    updateApp(function (s) {
      return _objectSpread(_objectSpread({}, s), {}, {
        ptsMap: _objectSpread(_objectSpread({}, s.ptsMap), {}, _defineProperty({}, "".concat(faction, ":").concat(unitId), pts))
      });
    });
  }, [updateApp]);

  // ── Export / Import ──────────────────────────────────────
  var exportData = function exportData() {
    var data = JSON.stringify(appState, null, 2);
    var blob = new Blob([data], {
      type: "application/json"
    });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    var date = new Date().toISOString().slice(0, 10);
    a.href = url;
    a.download = "black-templars-".concat(date, ".json");
    a.click();
    URL.revokeObjectURL(url);
  };
  var exportDataNoPhotos = function exportDataNoPhotos() {
    var stripped = _objectSpread(_objectSpread({}, appState), {}, {
      inventory: appState.inventory.map(function (i) {
        return _objectSpread(_objectSpread({}, i), {}, {
          photo: null
        });
      }),
      parade: []
    });
    var data = JSON.stringify(stripped, null, 2);
    var blob = new Blob([data], {
      type: "application/json"
    });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    var date = new Date().toISOString().slice(0, 10);
    a.href = url;
    a.download = "black-templars-".concat(date, "-no-photos.json");
    a.click();
    URL.revokeObjectURL(url);
  };
  var importData = function importData(file) {
    var reader = new FileReader();
    reader.onload = function (e) {
      try {
        var parsed = JSON.parse(e.target.result);
        if (!parsed.inventory || !parsed.lists) {
          alert("Fichier invalide.");
          return;
        }
        var next = _objectSpread(_objectSpread({
          inventory: [],
          lists: [],
          ptsMap: {},
          wishlist: [],
          paintWishlist: []
        }, parsed), {}, {
          wishlist: parsed.wishlist || [],
          paintWishlist: parsed.paintWishlist || [],
          parade: parsed.parade || [],
          ptsMap: parsed.ptsMap || {}
        });
        confirm("Importer ".concat(next.inventory.length, " figurines et ").concat(next.lists.length, " listes ? Cela remplacera les donn\xE9es actuelles."), function () {
          setAppState(next);
          saveApp(next);
          setActiveView("lists");
          setActiveListId(null);
          setSplashDone(true);
        }, "#b8922a", "IMPORTER", false);
      } catch (_unused5) {
        alert("Erreur de lecture du fichier.");
      }
    };
    reader.readAsText(file);
  };
  var createList = function createList(m) {
    return updateApp(function (s) {
      return _objectSpread(_objectSpread({}, s), {}, {
        lists: [].concat(_toConsumableArray(s.lists), [_objectSpread(_objectSpread({
          id: Date.now()
        }, m), {}, {
          entries: []
        })])
      });
    });
  };
  var deleteList = function deleteList(id) {
    return confirm("Supprimer cette liste ?", function () {
      return updateApp(function (s) {
        return _objectSpread(_objectSpread({}, s), {}, {
          lists: s.lists.filter(function (l) {
            return l.id !== id;
          })
        });
      });
    }, "#b8922a", "SUPPRIMER", true);
  };
  var renameList = function renameList(id, name) {
    return updateApp(function (s) {
      return _objectSpread(_objectSpread({}, s), {}, {
        lists: s.lists.map(function (l) {
          return l.id === id ? _objectSpread(_objectSpread({}, l), {}, {
            name: name
          }) : l;
        })
      });
    });
  };
  var setListMaxPts = function setListMaxPts(id, maxPts) {
    return updateApp(function (s) {
      return _objectSpread(_objectSpread({}, s), {}, {
        lists: s.lists.map(function (l) {
          return l.id === id ? _objectSpread(_objectSpread({}, l), {}, {
            maxPts: maxPts
          }) : l;
        })
      });
    });
  };
  var deleteEntry = function deleteEntry(listId, entryId) {
    return confirm("Retirer cette unité de la liste ?", function () {
      return updateApp(function (s) {
        return _objectSpread(_objectSpread({}, s), {}, {
          lists: s.lists.map(function (l) {
            return l.id !== listId ? l : _objectSpread(_objectSpread({}, l), {}, {
              entries: l.entries.filter(function (e) {
                return e.id !== entryId;
              })
            });
          })
        });
      });
    }, "#b8922a", "RETIRER", true);
  };
  var toggleWarlord = function toggleWarlord(listId, entryId) {
    return updateApp(function (s) {
      return _objectSpread(_objectSpread({}, s), {}, {
        lists: s.lists.map(function (l) {
          return l.id !== listId ? l : _objectSpread(_objectSpread({}, l), {}, {
            entries: l.entries.map(function (e) {
              return _objectSpread(_objectSpread({}, e), {}, {
                warlord: e.id === entryId ? !e.warlord : false
              });
            })
          });
        })
      });
    });
  };
  var addInventory = function addInventory(entry) {
    return updateApp(function (s) {
      return _objectSpread(_objectSpread({}, s), {}, {
        inventory: [].concat(_toConsumableArray(s.inventory), [_objectSpread({
          id: Date.now()
        }, entry)])
      });
    });
  };
  var deleteInventory = function deleteInventory(id) {
    return confirm("Supprimer cette figurine de l'inventaire ?", function () {
      return updateApp(function (s) {
        return _objectSpread(_objectSpread({}, s), {}, {
          inventory: s.inventory.filter(function (i) {
            return i.id !== id;
          })
        });
      });
    }, "#b8922a", "SUPPRIMER", true);
  };
  var updatePhoto = function updatePhoto(id, photo) {
    return updateApp(function (s) {
      return _objectSpread(_objectSpread({}, s), {}, {
        inventory: s.inventory.map(function (i) {
          return i.id === id ? _objectSpread(_objectSpread({}, i), {}, {
            photo: photo
          }) : i;
        })
      });
    });
  };
  var updatePaint = function updatePaint(id, status) {
    return updateApp(function (s) {
      return _objectSpread(_objectSpread({}, s), {}, {
        inventory: s.inventory.map(function (i) {
          return i.id === id ? _objectSpread(_objectSpread({}, i), {}, {
            paintStatus: status
          }) : i;
        })
      });
    });
  };
  var updateQty = function updateQty(id, qty) {
    return updateApp(function (s) {
      return _objectSpread(_objectSpread({}, s), {}, {
        inventory: s.inventory.map(function (i) {
          return i.id === id ? _objectSpread(_objectSpread({}, i), {}, {
            qty: Math.max(1, qty)
          }) : i;
        })
      });
    });
  };
  var updateModelCount = function updateModelCount(id, count) {
    return updateApp(function (s) {
      return _objectSpread(_objectSpread({}, s), {}, {
        inventory: s.inventory.map(function (i) {
          return i.id === id ? _objectSpread(_objectSpread({}, i), {}, {
            modelCount: count > 0 ? count : null
          }) : i;
        })
      });
    });
  };
  // Reorder: move draggedId to position of targetId within same faction
  var reorderInventory = function reorderInventory(draggedId, targetId, faction) {
    return updateApp(function (s) {
      var inv = _toConsumableArray(s.inventory);
      var dragIdx = inv.findIndex(function (i) {
        return i.id == draggedId;
      });
      var targetIdx = inv.findIndex(function (i) {
        return i.id == targetId;
      });
      if (dragIdx < 0 || targetIdx < 0) return s;
      var _inv$splice = inv.splice(dragIdx, 1),
        _inv$splice2 = _slicedToArray(_inv$splice, 1),
        moved = _inv$splice2[0];
      inv.splice(targetIdx, 0, moved);
      return _objectSpread(_objectSpread({}, s), {}, {
        inventory: inv
      });
    });
  };
  var addWish = function addWish(entry) {
    return updateApp(function (s) {
      return _objectSpread(_objectSpread({}, s), {}, {
        wishlist: [].concat(_toConsumableArray(s.wishlist || []), [entry])
      });
    });
  };
  var deleteWish = function deleteWish(id) {
    return confirm("Retirer de la wishlist ?", function () {
      return updateApp(function (s) {
        return _objectSpread(_objectSpread({}, s), {}, {
          wishlist: (s.wishlist || []).filter(function (i) {
            return i.id !== id;
          })
        });
      });
    }, "#b8922a", "RETIRER", true);
  };
  var setWishStatus = function setWishStatus(id, status) {
    return updateApp(function (s) {
      return _objectSpread(_objectSpread({}, s), {}, {
        wishlist: (s.wishlist || []).map(function (i) {
          return i.id === id ? _objectSpread(_objectSpread({}, i), {}, {
            status: status
          }) : i;
        })
      });
    });
  };
  var setWishPrice = function setWishPrice(id, price) {
    return updateApp(function (s) {
      return _objectSpread(_objectSpread({}, s), {}, {
        wishlist: (s.wishlist || []).map(function (i) {
          return i.id === id ? _objectSpread(_objectSpread({}, i), {}, {
            price: price
          }) : i;
        })
      });
    });
  };
  var addPaintWish = function addPaintWish(entry) {
    return updateApp(function (s) {
      return _objectSpread(_objectSpread({}, s), {}, {
        paintWishlist: [].concat(_toConsumableArray(s.paintWishlist || []), [entry])
      });
    });
  };
  var deletePaintWish = function deletePaintWish(id) {
    return updateApp(function (s) {
      return _objectSpread(_objectSpread({}, s), {}, {
        paintWishlist: (s.paintWishlist || []).filter(function (p) {
          return p.id !== id;
        })
      });
    });
  };
  var addParade = function addParade(entry) {
    return updateApp(function (s) {
      return _objectSpread(_objectSpread({}, s), {}, {
        parade: [].concat(_toConsumableArray(s.parade || []), [entry])
      });
    });
  };
  var deleteParade = function deleteParade(id) {
    return confirm("Supprimer cette photo ?", function () {
      return updateApp(function (s) {
        return _objectSpread(_objectSpread({}, s), {}, {
          parade: (s.parade || []).filter(function (p) {
            return p.id !== id;
          })
        });
      });
    }, "#b8922a", "SUPPRIMER", true);
  };
  var addEntry = function addEntry(listId, entry) {
    return updateApp(function (s) {
      var inv = s.inventory,
        invId = entry.inventoryId;
      if (!invId) {
        var ni = {
          id: Date.now(),
          unitId: entry.unitId,
          faction: entry.faction,
          qty: entry.qty,
          paintStatus: "unpainted"
        };
        inv = [].concat(_toConsumableArray(inv), [ni]);
        invId = ni.id;
      }
      return _objectSpread(_objectSpread({}, s), {}, {
        inventory: inv,
        lists: s.lists.map(function (l) {
          return l.id !== listId ? l : _objectSpread(_objectSpread({}, l), {}, {
            entries: [].concat(_toConsumableArray(l.entries || []), [{
              id: Date.now() + 1,
              inventoryId: invId,
              unitId: entry.unitId,
              qty: entry.qty
            }])
          });
        })
      });
    });
  };
  if (!loaded) return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#020202",
      height: "100vh",
      maxWidth: "430px",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
      fontFamily: "'Cinzel',serif"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      fontSize: "320px",
      color: "#060504",
      lineHeight: 1,
      fontFamily: "serif",
      pointerEvents: "none",
      userSelect: "none",
      animation: "breathe 4s ease-in-out infinite"
    }
  }, "\u2720"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(ellipse at center, transparent 30%, #020202 100%)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "0",
      animation: "splashIn 0.7s ease both"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "72px",
      color: "#b8922a",
      lineHeight: 1,
      textShadow: "0 0 60px #b8922a66, 0 0 120px #b8922a22",
      animation: "crossGrow 0.6s cubic-bezier(0.34,1.56,0.64,1) both"
    }
  }, "\u2720"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "20px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#e8dfc0",
      fontSize: "22px",
      letterSpacing: "8px",
      fontFamily: "'Cinzel Decorative',serif",
      fontWeight: "900",
      textShadow: "0 0 40px #b8922a33"
    }
  }, "BLACK TEMPLARS"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#2a2010",
      fontSize: "8px",
      letterSpacing: "6px",
      marginTop: "6px"
    }
  }, "CODEX ASTARTES \xB7 REGISTRE DE CROISADE")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      margin: "20px 0",
      width: "220px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: "1px",
      background: "linear-gradient(90deg,transparent,#b8922a44)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#9a8a78",
      fontSize: "10px"
    }
  }, "\u2726"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: "1px",
      background: "linear-gradient(90deg,#b8922a44,transparent)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#7a6a58",
      fontSize: "8px",
      letterSpacing: "5px",
      animation: "pulse 1.5s ease-in-out infinite"
    }
  }, "CHARGEMENT DU GRIMOIRE")));
  var ptsMap = appState.ptsMap || {};
  var globalPaintPct = function () {
    var total = appState.inventory.reduce(function (s, i) {
      return s + (i.qty || 1);
    }, 0);
    var painted = appState.inventory.filter(function (i) {
      return i.paintStatus === "painted";
    }).reduce(function (s, i) {
      return s + (i.qty || 1);
    }, 0);
    return total ? Math.round(painted / total * 100) : 100;
  }();
  var shameAlert = globalPaintPct < 80 && appState.inventory.length > 0;
  var activeList = appState.lists.find(function (l) {
    return l.id === activeListId;
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "vignette-wrap",
    style: {
      background: "#020202",
      maxWidth: "430px",
      margin: "0 auto",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      position: "relative",
      overflow: "hidden"
    }
  }, confirmModal, !splashDone && /*#__PURE__*/React.createElement(SplashOverlay, {
    inventory: appState.inventory,
    lists: appState.lists,
    ptsMap: ptsMap,
    onDone: function onDone() {
      try {
        var n = parseInt(localStorage.getItem("wh40k-splash-count") || "0");
        localStorage.setItem("wh40k-splash-count", String(n + 1));
      } catch (_unused6) {}
      setSplashDone(true);
    }
  }), savedLabel && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      bottom: "72px",
      right: "12px",
      zIndex: 200,
      display: "flex",
      alignItems: "center",
      gap: "5px",
      background: saveAnim ? "#0f0c06" : "#060402",
      border: "1px solid ".concat(saveAnim ? "#b8922a66" : "#0f0f0f"),
      padding: "4px 10px",
      transition: "all 0.4s",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "5px",
      height: "5px",
      borderRadius: "50%",
      background: saveAnim ? "#b8922a" : "#2a4a2a",
      boxShadow: saveAnim ? "0 0 6px #b8922a" : "none",
      transition: "all 0.4s"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: saveAnim ? "#b8922a" : "#2a4a2a",
      fontSize: "8px",
      fontFamily: "'Cinzel',serif",
      letterSpacing: "2px",
      transition: "color 0.4s"
    }
  }, saveAnim ? "SAUVEGARDE..." : "SAUVEGARD\xC9 ".concat(savedLabel.toUpperCase()))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      paddingBottom: "64px"
    }
  }, activeView === "lists" && !activeList && /*#__PURE__*/React.createElement(ViewLists, {
    lists: appState.lists,
    inventory: appState.inventory,
    ptsMap: ptsMap,
    onSelect: setActiveListId,
    onCreate: createList,
    onDelete: deleteList
  }), activeView === "lists" && activeList && /*#__PURE__*/React.createElement(ViewListDetail, {
    list: activeList,
    inventory: appState.inventory,
    ptsMap: ptsMap,
    onSetPts: handleSetPts,
    onBack: function onBack() {
      return setActiveListId(null);
    },
    onAddEntry: addEntry,
    onDeleteEntry: function onDeleteEntry(id) {
      return deleteEntry(activeListId, id);
    },
    onToggleWarlord: function onToggleWarlord(id) {
      return toggleWarlord(activeListId, id);
    },
    onRename: function onRename(name) {
      return renameList(activeListId, name);
    },
    onSetMaxPts: function onSetMaxPts(pts) {
      return setListMaxPts(activeListId, pts);
    }
  }), activeView === "inventory" && /*#__PURE__*/React.createElement(ViewInventory, {
    inventory: appState.inventory,
    ptsMap: ptsMap,
    onSetPts: handleSetPts,
    onAdd: addInventory,
    onDelete: deleteInventory,
    onUpdatePhoto: updatePhoto,
    onUpdatePaint: updatePaint,
    onUpdateQty: updateQty,
    onUpdateModelCount: updateModelCount,
    onReorder: reorderInventory
  }), activeView === "stats" && /*#__PURE__*/React.createElement(ViewStats, {
    inventory: appState.inventory,
    lists: appState.lists,
    ptsMap: ptsMap,
    wishlist: appState.wishlist || []
  }), activeView === "wishlist" && /*#__PURE__*/React.createElement(ViewWishlist, {
    wishlist: appState.wishlist || [],
    paintWishlist: appState.paintWishlist || [],
    ptsMap: ptsMap,
    onAdd: addWish,
    onDelete: deleteWish,
    onSetStatus: setWishStatus,
    onSetPrice: setWishPrice,
    onAddPaint: addPaintWish,
    onDeletePaint: deletePaintWish
  }), activeView === "parade" && /*#__PURE__*/React.createElement(ViewParade, {
    parade: appState.parade || [],
    onAdd: addParade,
    onDelete: deleteParade
  }), activeView === "shame" && /*#__PURE__*/React.createElement(ViewShame, {
    inventory: appState.inventory,
    onUpdatePaint: updatePaint,
    confirm: confirm,
    paintPct: globalPaintPct
  }), activeView === "codex" && /*#__PURE__*/React.createElement(ViewCodex, {
    onExport: exportData,
    onExportNoPhotos: exportDataNoPhotos,
    onImport: importData,
    inventory: appState.inventory,
    lists: appState.lists
  })), !activeList && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      bottom: 0,
      left: "50%",
      transform: "translateX(-50%)",
      width: "100%",
      maxWidth: "430px",
      zIndex: 50,
      background: "#030202",
      borderTop: "1px solid #0f0f0f",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: "15%",
      right: "15%",
      height: "1px",
      background: "linear-gradient(90deg,transparent,#b8922a44,transparent)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      color: "#131313",
      fontSize: "14px"
    }
  }, "\u2720"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "3px",
      right: "6px",
      color: "#1a1610",
      fontSize: "7px",
      fontFamily: "monospace",
      letterSpacing: "0.5px",
      pointerEvents: "none"
    }
  }, "v", APP_VERSION), [{
    key: "lists",
    symbol: "✠",
    label: "CROISADE"
  }, {
    key: "inventory",
    symbol: "⚜",
    label: "RELIQUES"
  }, {
    key: "wishlist",
    symbol: "✦",
    label: "WISHLIST"
  }, {
    key: "parade",
    symbol: "⚔",
    label: "PARADE"
  }, {
    key: "shame",
    symbol: "💀",
    label: "SHAME",
    badge: shameAlert
  }, {
    key: "stats",
    symbol: "◈",
    label: "STATS",
    badge: shameAlert
  }, {
    key: "codex",
    symbol: "⚙",
    label: "CODEX"
  }].map(function (t) {
    return /*#__PURE__*/React.createElement("button", {
      key: t.key,
      onClick: function onClick() {
        return setActiveView(t.key);
      },
      style: {
        flex: 1,
        background: "none",
        border: "none",
        borderTop: activeView === t.key ? "2px solid #b8922a" : "2px solid transparent",
        padding: "13px 0 12px",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "5px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "relative",
        display: "inline-block"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "17px",
        lineHeight: 1,
        color: activeView === t.key ? "#b8922a" : "#1c1a18",
        textShadow: activeView === t.key ? "0 0 16px #b8922a99" : "none"
      }
    }, t.symbol), t.badge && /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: "-3px",
        right: "-6px",
        width: "9px",
        height: "9px",
        borderRadius: "50%",
        background: "#c04040",
        display: "block",
        boxShadow: "0 0 4px #c04040"
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "7px",
        fontFamily: "'Cinzel',serif",
        letterSpacing: "3px",
        color: activeView === t.key ? "#b8922a" : "#1c1a18"
      }
    }, t.label));
  })));
}
var ErrorBoundary = /*#__PURE__*/function (_React$Component) {
  function ErrorBoundary(props) {
    var _this;
    _classCallCheck(this, ErrorBoundary);
    _this = _callSuper(this, ErrorBoundary, [props]);
    _this.state = {
      error: null
    };
    return _this;
  }
  _inherits(ErrorBoundary, _React$Component);
  return _createClass(ErrorBoundary, [{
    key: "render",
    value: function render() {
      if (this.state.error) return /*#__PURE__*/React.createElement("div", {
        style: {
          background: "#020202",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
          fontFamily: "'Cinzel',serif",
          gap: "16px"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: "40px",
          color: "#7a1515"
        }
      }, "\u26A0"), /*#__PURE__*/React.createElement("div", {
        style: {
          color: "#e8dfc0",
          fontSize: "14px",
          letterSpacing: "2px",
          textAlign: "center"
        }
      }, "ERREUR \u2014 RECHARGER LA PAGE"), /*#__PURE__*/React.createElement("div", {
        style: {
          color: "#9a8a78",
          fontSize: "10px",
          fontFamily: "monospace",
          textAlign: "center",
          maxWidth: "300px",
          lineHeight: 1.6
        }
      }, this.state.error.message), /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return window.location.reload();
        },
        style: {
          background: "#0f0c08",
          border: "1px solid #b8922a55",
          color: "#b8922a",
          padding: "10px 24px",
          fontFamily: "'Cinzel',serif",
          fontSize: "11px",
          letterSpacing: "3px",
          cursor: "pointer",
          marginTop: "8px"
        }
      }, "RECHARGER"));
      return this.props.children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(e) {
      return {
        error: e
      };
    }
  }]);
}(React.Component); // Bouton retour Android — empêche de quitter l'app
(function () {
  try {
    window.history.pushState(null, "", window.location.href);
    window.addEventListener("popstate", function () {
      window.history.pushState(null, "", window.location.href);
    });
  } catch (e) {}
})();
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(ErrorBoundary, null, /*#__PURE__*/React.createElement(App, null)));
