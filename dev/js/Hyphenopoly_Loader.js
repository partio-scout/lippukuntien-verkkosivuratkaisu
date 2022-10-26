/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************************!*\
  !*** ./js/Hyphenopoly_Loader.js ***!
  \**********************************/
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * @license Hyphenopoly_Loader 4.11.0 - client side hyphenation
 * ©2021  Mathias Nater, Güttingen (mathiasnater at gmail dot com)
 * https://github.com/mnater/Hyphenopoly
 *
 * Released under the MIT license
 * http://mnater.github.io/Hyphenopoly/LICENSE
 */

/* globals Hyphenopoly:readonly */
(function (w, d, H, o) {
  "use strict";
  /**
   * Shortcut for new Map
   * @param {any} init - initialiser for new Map
   * @returns {Map}
   */

  var mp = function mp(init) {
    return new Map(init);
  };
  /**
   * Sets default properties for an Object
   * @param {object} obj - The object to set defaults to
   * @param {object} defaults - The defaults to set
   * @returns {object}
   */


  var setDefaults = function setDefaults(obj, defaults) {
    if (obj) {
      o.entries(defaults).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            k = _ref2[0],
            v = _ref2[1];

        // eslint-disable-next-line security/detect-object-injection
        obj[k] = obj[k] || v;
      });
      return obj;
    }

    return defaults;
  };

  var store = sessionStorage;
  var scriptName = "Hyphenopoly_Loader.js";
  var lcRequire = mp();
  var shortcuts = {
    "ac": "appendChild",
    "ce": "createElement",
    "ct": "createTextNode"
  };
  /**
   * Set H.cf (Hyphenopoly.clientFeatures) either by reading out previously
   * computed settings from sessionStorage or creating a template object.
   * This is in an iife to keep complexity low.
   */

  (function () {
    if (H.cacheFeatureTests && store.getItem(scriptName)) {
      H.cf = JSON.parse(store.getItem(scriptName));
      H.cf.langs = mp(H.cf.langs);
    } else {
      H.cf = {
        "langs": mp(),
        "pf": false
      };
    }
  })();
  /**
   * Set H.paths and some H.s (setup) fields to defaults or
   * overwrite with user settings.
   * These is an iife to keep complexity low.
   */


  (function () {
    var thisScript = d.currentScript.src;
    var maindir = thisScript.slice(0, thisScript.lastIndexOf("/") + 1);
    var patterndir = maindir + "patterns/";
    H.paths = setDefaults(H.paths, {
      maindir: maindir,
      patterndir: patterndir
    });
    H.s = setDefaults(H.setup, {
      "CORScredentials": "include",
      "hide": "all",
      "selectors": {
        ".hyphenate": {}
      },
      "timeout": 1000
    }); // Change mode string to mode int

    H.s.hide = ["all", "element", "text"].indexOf(H.s.hide);
  })();
  /**
   * Copy required languages to local lcRequire (lowercaseRequire) and
   * eventually fallbacks to local lcFallbacks (lowercaseFallbacks).
   * This is in an iife to keep complexity low.
   */


  (function () {
    var fallbacks = mp(o.entries(H.fallbacks || {}));
    o.entries(H.require).forEach(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          lang = _ref4[0],
          wo = _ref4[1];

      lcRequire.set(lang.toLowerCase(), {
        "fn": fallbacks.get(lang) || lang,
        wo: wo
      });
    });
  })();
  /**
   * Create deferred Promise
   *
   * Kudos to http://lea.verou.me/2016/12/resolve-promises-externally-with-
   * this-one-weird-trick/
   * @return {promise}
   */


  var defProm = function defProm() {
    var res = null;
    var rej = null;
    var promise = new Promise(function (resolve, reject) {
      res = resolve;
      rej = reject;
    });
    promise.resolve = res;
    promise.reject = rej;
    return promise;
  };

  var stylesNode = null;
  /**
   * Define function H.hide.
   * This function hides (state = 1) or unhides (state = 0)
   * the whole document (mode == 0) or
   * each selected element (mode == 1) or
   * text of each selected element (mode == 2) or
   * nothing (mode == -1)
   * @param {integer} state - State
   * @param {integer} mode  - Mode
   */

  H.hide = function (state, mode) {
    if (state === 0) {
      if (stylesNode) {
        stylesNode.remove();
      }
    } else {
      var vis = "{visibility:hidden!important}";
      stylesNode = d[shortcuts.ce]("style");
      var myStyle = "";

      if (mode === 0) {
        myStyle = "html" + vis;
      } else {
        o.keys(H.s.selectors).forEach(function (sel) {
          if (mode === 1) {
            myStyle += sel + vis;
          } else {
            myStyle += sel + "{color:transparent!important}";
          }
        });
      }

      stylesNode[shortcuts.ac](d[shortcuts.ct](myStyle));
      d.head[shortcuts.ac](stylesNode);
    }
  };

  var tester = function () {
    var fakeBody = null;
    return {
      /**
       * Append fakeBody with tests to document
       * @returns {Object|null} The body element or null, if no tests
       */
      "ap": function ap() {
        if (fakeBody) {
          d.documentElement[shortcuts.ac](fakeBody);
          return fakeBody;
        }

        return null;
      },

      /**
       * Remove fakeBody
       * @returns {undefined}
       */
      "cl": function cl() {
        if (fakeBody) {
          fakeBody.remove();
        }
      },

      /**
       * Create and append div with CSS-hyphenated word
       * @param {string} lang Language
       * @returns {undefined}
       */
      "cr": function cr(lang) {
        if (H.cf.langs.has(lang)) {
          return;
        }

        fakeBody = fakeBody || d[shortcuts.ce]("body");
        var testDiv = d[shortcuts.ce]("div");
        var ha = "hyphens:auto";
        testDiv.lang = lang;
        testDiv.style.cssText = "visibility:hidden;-webkit-".concat(ha, ";-ms-").concat(ha, ";").concat(ha, ";width:48px;font-size:12px;line-height:12px;border:none;padding:0;word-wrap:normal");
        testDiv[shortcuts.ac](d[shortcuts.ct](lcRequire.get(lang).wo.toLowerCase()));
        fakeBody[shortcuts.ac](testDiv);
      }
    };
  }();
  /**
   * Checks if hyphens (ev.prefixed) is set to auto for the element.
   * @param {Object} elm - the element
   * @returns {Boolean} result of the check
   */


  var checkCSSHyphensSupport = function checkCSSHyphensSupport(elmStyle) {
    var h = elmStyle.hyphens || elmStyle.webkitHyphens || elmStyle.msHyphens;
    return h === "auto";
  };

  H.res = {
    "he": mp()
  };
  var fw = mp();
  /**
   * Load hyphenEngines
   *
   * Make sure each .wasm is loaded exactly once, even for fallbacks
   * fw: fetched wasm (maps filename to language)
   * he: hyphenEngines (maps lang to wasm and counter)
   * c (counter) is needed in Hyphenopoly.js to decide
   * if wasm needs to be cloned
   * @param {string} lang The language
   * @returns {undefined}
   */

  var loadhyphenEngine = function loadhyphenEngine(lang) {
    var filename = lcRequire.get(lang).fn + ".wasm";
    H.cf.pf = true;
    H.cf.langs.set(lang, "H9Y");

    if (fw.has(filename)) {
      var hyphenEngineWrapper = H.res.he.get(fw.get(filename));
      hyphenEngineWrapper.c = true;
      H.res.he.set(lang, hyphenEngineWrapper);
    } else {
      H.res.he.set(lang, {
        "w": w.fetch(H.paths.patterndir + filename, {
          "credentials": H.s.CORScredentials
        })
      });
      fw.set(filename, lang);
    }
  };

  lcRequire.forEach(function (value, lang) {
    if (value.wo === "FORCEHYPHENOPOLY" || H.cf.langs.get(lang) === "H9Y") {
      loadhyphenEngine(lang);
    } else {
      tester.cr(lang);
    }
  });
  var testContainer = tester.ap();

  if (testContainer) {
    testContainer.querySelectorAll("div").forEach(function (n) {
      if (checkCSSHyphensSupport(n.style) && n.offsetHeight > 12) {
        H.cf.langs.set(n.lang, "CSS");
      } else {
        loadhyphenEngine(n.lang);
      }
    });
    tester.cl();
  }

  var he = H.handleEvent;

  if (H.cf.pf) {
    H.res.DOM = new Promise(function (res) {
      if (d.readyState === "loading") {
        d.addEventListener("DOMContentLoaded", res, {
          "once": true,
          "passive": true
        });
      } else {
        res();
      }
    });
    var hide = H.s.hide;

    if (hide === 0) {
      H.hide(1, 0);
    }

    if (hide !== -1) {
      H.timeOutHandler = w.setTimeout(function () {
        H.hide(0, null); // eslint-disable-next-line no-console

        console.info(scriptName + " timed out.");
      }, H.s.timeout);
    }

    H.res.DOM.then(function () {
      if (hide > 0) {
        H.hide(1, hide);
      }
    }); // Load main script

    var script = d[shortcuts.ce]("script");
    script.src = H.paths.maindir + "Hyphenopoly.js";
    d.head[shortcuts.ac](script);
    H.hy6ors = mp();
    H.cf.langs.forEach(function (langDef, lang) {
      if (langDef === "H9Y") {
        H.hy6ors.set(lang, defProm());
      }
    });
    H.hy6ors.set("HTML", defProm());
    H.hyphenators = new Proxy(H.hy6ors, {
      "get": function get(target, key) {
        return target.get(key);
      },
      "set": function set() {
        // Inhibit setting of hyphenators
        return true;
      }
    });

    (function () {
      if (he && he.polyfill) {
        he.polyfill();
      }
    })();
  } else {
    (function () {
      if (he && he.tearDown) {
        he.tearDown();
      }

      w.Hyphenopoly = null;
    })();
  }

  (function () {
    if (H.cacheFeatureTests) {
      store.setItem(scriptName, JSON.stringify({
        "langs": _toConsumableArray(H.cf.langs.entries()),
        "pf": H.cf.pf
      }));
    }
  })();
})(window, document, Hyphenopoly, Object);
/******/ })()
;
//# sourceMappingURL=Hyphenopoly_Loader.js.map