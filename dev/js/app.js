/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/dummy/components/all.js":
/*!************************************!*\
  !*** ./js/dummy/components/all.js ***!
  \************************************/
/***/ (function() {

//import '../../../components/block-social-feed/js/block-social-feed';

/***/ }),

/***/ "./js/modules/cookies.js":
/*!*******************************!*\
  !*** ./js/modules/cookies.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cookies": function() { return /* binding */ cookies; }
/* harmony export */ });
var $ = window.jQuery;
$(document).ready(function () {
  var sitename = 'partio';
  var cookiename = sitename + '-cookies-accepted';
  var accepted = cookies.get(cookiename);

  if (!accepted) {
    var notification = document.getElementById('cookie-notification');

    if (notification) {
      notification.classList.add('active');
      var acceptButton = document.getElementById('cookie-accept-button');
      acceptButton.addEventListener('click', function cookiesAccepted(e) {
        e.preventDefault();
        acceptButton.removeEventListener('click', cookiesAccepted, false);
        notification.classList.remove('active');
        cookies.set(cookiename, 1, 365);
      });
    }
  }
});
var cookies = {
  set: function set(name, value, days) {
    var cookie = name + "=" + value;

    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 3600000);
      cookie += "; expires=" + date.toUTCString();
    }

    document.cookie = cookie + "; path=/";
  },
  get: function get(name) {
    var pattern = new RegExp(name + '=([^;]+)', 'i');
    var match = document.cookie.match(pattern);
    return match && match[1] || null;
  }
};


/***/ }),

/***/ "./js/modules/input-detection.js":
/*!***************************************!*\
  !*** ./js/modules/input-detection.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var what_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! what-input */ "./node_modules/what-input/dist/what-input.js");
/* harmony import */ var what_input__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(what_input__WEBPACK_IMPORTED_MODULE_0__);
// adds data-input and data-intent to <html> for different styles for keyboard and mouse
// for example, for keyboard only outlines
 // adds .touch-device class to <body> on touch screen

window.addEventListener('touchstart', function onFirstTouch() {
  document.body.classList.add('touch-device');
  window.removeEventListener('touchstart', onFirstTouch, false);
});

/***/ }),

/***/ "./js/modules/livesearchresults.js":
/*!*****************************************!*\
  !*** ./js/modules/livesearchresults.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "livesearchresults": function() { return /* binding */ livesearchresults; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");

var livesearchresults = vue__WEBPACK_IMPORTED_MODULE_0__.default.component("livesearchresults", {
  template: "<div class=\"livesearchresults\">\n        <div v-if=\"!results.best.items.length\" class=\"no-results\">Ei hakutuloksia.</div>\n        <div class=\"type\" v-for=\"(item, index) in results\" :key=\"index\" v-show=\"item.items.length\">\n            <h3 class=\"result-type\">{{item.title}}</h3>\n            <a :href=\"post.link\" class=\"result\" v-for=\"post in item.items\" :key=\"post.id\">\n                <img v-if=\"post.image\" :src=\"post.image\">\n                <div class=\"result-content\">\n                    <h4 class=\"result-title\">{{post.title}}</h4>\n                    <p class=\"result-meta\" v-if=\"post.type == 'product'\">\n                        <span class=\"subname\" v-if=\"post.subname\">{{post.subname}}</span>\n                        <span class=\"product-type\" v-if=\"post.product_type\">{{post.product_type}}</span>\n                        <span class=\"year\" v-if=\"post.year\">{{post.year}}</span>\n                    </p>\n                    <p class=\"result-excerpt\" v-html=\"post.excerpt\"></p>\n                    <div class=\"result-price\" v-if=\"post.price\" v-html=\"post.price\"></div>\n                </div>\n            </a>\n        </div>\n    </div>",
  props: ["results"],
  data: function data() {
    return {};
  },
  created: function created() {},
  methods: {}
});


/***/ }),

/***/ "./js/modules/load-more.js":
/*!*********************************!*\
  !*** ./js/modules/load-more.js ***!
  \*********************************/
/***/ (function() {

var $ = window.jQuery;
$('.load-more').click(function () {
  var button = $(this),
      data = {
    'action': 'loadmore',
    'query': ID_load_more.posts,
    // that's how we get params from wp_localize_script() function
    'page': ID_load_more.current_page
  };
  $.ajax({
    // you can also use $.post here
    url: ajaxurl,
    // AJAX handler
    data: data,
    type: 'POST',
    beforeSend: function beforeSend(xhr) {},
    success: function success(data) {
      if (data) {
        $('.content-row').append(data);
        ID_load_more.current_page++;
        if (ID_load_more.current_page == ID_load_more.max_page) button.remove(); // if last page, remove the button
      } else {
        button.remove(); // if no data, remove the button as well
      }
    }
  });
});

/***/ }),

/***/ "./js/modules/map.js":
/*!***************************!*\
  !*** ./js/modules/map.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initMap": function() { return /* binding */ initMap; }
/* harmony export */ });
var $ = window.jQuery;
/**
 * initMap
 *
 * Renders a Google Map onto the selected jQuery element
 *
 * @date    22/10/19
 * @since   5.8.6
 *
 * @param   jQuery $el The jQuery element.
 * @return  object The map instance.
 */

function initMap($el) {
  // Find marker elements within map.
  var $markers = $el.find('.marker'); // Create gerenic map.

  var mapArgs = {
    zoom: $el.data('zoom') || 16,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map($el[0], mapArgs); // Add markers.

  map.markers = [];
  $markers.each(function () {
    initMarker($(this), map);
  }); // Center map based on markers.

  centerMap(map); // Return map instance.

  return map;
}
/**
 * initMarker
 *
 * Creates a marker for the given jQuery element and map.
 *
 * @date    22/10/19
 * @since   5.8.6
 *
 * @param   jQuery $el The jQuery element.
 * @param   object The map instance.
 * @return  object The marker instance.
 */


function initMarker($marker, map) {
  // Get position from marker.
  var lat = $marker.data('lat');
  var lng = $marker.data('lng');
  var latLng = {
    lat: parseFloat(lat),
    lng: parseFloat(lng)
  }; // Create marker instance.

  var marker = new google.maps.Marker({
    position: latLng,
    map: map
  }); // Append to reference for later use.

  map.markers.push(marker); // If marker contains HTML, add it to an infoWindow.

  if ($marker.html()) {
    // Create info window.
    var infowindow = new google.maps.InfoWindow({
      content: $marker.html()
    }); // Show info window when marker is clicked.

    google.maps.event.addListener(marker, 'click', function () {
      infowindow.open(map, marker);
    });
  }
}
/**
 * centerMap
 *
 * Centers the map showing all markers in view.
 *
 * @date    22/10/19
 * @since   5.8.6
 *
 * @param   object The map instance.
 * @return  void
 */


function centerMap(map) {
  // Create map boundaries from all map markers.
  var bounds = new google.maps.LatLngBounds();
  map.markers.forEach(function (marker) {
    bounds.extend({
      lat: marker.position.lat(),
      lng: marker.position.lng()
    });
  }); // Case: Single marker.

  if (map.markers.length == 1) {
    map.setCenter(bounds.getCenter()); // Case: Multiple markers.
  } else {
    map.fitBounds(bounds);
  }
}



/***/ }),

/***/ "./js/modules/menu.js":
/*!****************************!*\
  !*** ./js/modules/menu.js ***!
  \****************************/
/***/ (function() {

var $ = window.jQuery;
$(document).ready(function () {
  $('.open-language-selector').on('click', function (e) {
    $(this).toggleClass('open');
    $('.language').toggleClass('open');
  });
  $('.open-menu').on('click', function (e) {
    $('.header-mobile .site-header-main').addClass('open');
    $('.header-mobile .menu-overlay').addClass('open');
    $('body').addClass('no-scrolling');
  });
  $('.close-menu').on('click', function (e) {
    $('.header-mobile .site-header-main').removeClass('open');
    $('.header-mobile .menu-overlay').removeClass('open');
    $('body').removeClass('no-scrolling');
  });
  $('.current-menu-ancestor').each(function (e) {
    $(this).addClass('open');
  });
  $('.sub-menu-toggle').on('click', function (e) {
    e.stopPropagation();
    $(this).parent('.menu-item').toggleClass('open');

    if ($(this).parent('.menu-item').hasClass('open')) {
      $(this).attr('aria-label', aria_close_submenu);
    } else {
      $(this).attr('aria-label', aria_open_submenu);
    }
  }); //Float only main menu area

  var helperHeight;
  $(window).on('scroll', function (e) {
    //console.log($(window).scrollTop())
    if ($(window).width() >= 992) {
      helperHeight = $('.header-desktop .header-helper').outerHeight(); //console.log(helperHeight)

      if ($(window).scrollTop() >= helperHeight) {
        $('.site-header-main, .header-helper, .site-header').addClass('floating');
      } else {
        $('.site-header-main, .header-helper, .site-header').removeClass('floating');
      }
    } else {
      helperHeight = $('.header-mobile .header-helper').outerHeight(); //console.log(helperHeight)

      if ($(window).scrollTop() >= helperHeight) {
        $('.site-header-main, .header-helper, .site-header').addClass('floating');
      } else {
        $('.site-header-main, .header-helper, .site-header').removeClass('floating');
      }
    }
  });
});

/***/ }),

/***/ "./js/modules/search.js":
/*!******************************!*\
  !*** ./js/modules/search.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "search": function() { return /* binding */ search; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");
/* harmony import */ var promise_polyfill_src_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! promise-polyfill/src/polyfill */ "./node_modules/promise-polyfill/src/polyfill.js");
/* harmony import */ var _livesearchresults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./livesearchresults */ "./js/modules/livesearchresults.js");

 // polyfill fetch (<2017)



document.addEventListener("DOMContentLoaded", function onDomReady() {
  document.removeEventListener("DOMContentLoaded", onDomReady, false);
  var elementID = "vue-search";
  var element = document.getElementById(elementID);

  if (element) {
    search.init(elementID, !element.dataset.nolive);
  }
});
var search = {
  view: null,
  init: function init(elementID) {
    var livesearch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    this.view = new vue__WEBPACK_IMPORTED_MODULE_3__.default({
      el: "#" + elementID,
      data: {
        ready: false,
        livesearch: livesearch,
        searchterm: "",
        results: null,
        resultsvisible: false,
        mintermlength: 3,
        //remember to change in api-actions.php too
        delays: {
          fake: 300,
          search: 1000
        },
        timers: {
          fake: null,
          search: null
        },
        searching: false,
        searchnum: 0
      },
      created: function created() {
        this.ready = true;
      },
      watch: {
        searchterm: function searchterm(newterm, oldterm) {
          if (!this.livesearch) {
            return false;
          }

          if (this.timers.fake) {
            clearTimeout(this.timers.fake);
          }

          if (this.timers.search) {
            clearTimeout(this.timers.search);
          }

          if (this.searchterm.length == 0) {
            this.hideResults();
          }

          if (this.searchterm.length < this.mintermlength) {
            this.searching = false;
            return false;
          }

          this.timers.fake = setTimeout(this.fakesearch, this.delays.fake);
          this.timers.search = setTimeout(this.search, this.delays.search);
          return true;
        }
      },
      methods: {
        searchfieldfocus: function searchfieldfocus() {
          if (!this.results || this.searchterm.length < this.mintermlength) {
            return false;
          }

          this.showResults();
          return true;
        },
        fakesearch: function fakesearch() {
          this.searching = true;
        },
        search: function search() {
          var _this = this;

          this.searchnum++;
          this.results = null;
          fetch(resturl + "v1/livesearch?s=" + this.searchterm + "&n=" + this.searchnum).then(function (response) {
            return response.json();
          }).then(this.handleSearchResults)["catch"](function (ex) {
            _this.searching = false; //                        alert("Haussa tapahtui virhe. Yritä myöhemmin uudelleen.");
          });
        },
        handleSearchResults: function handleSearchResults(json) {
          this.searching = false;

          if (json.code && json.message) {
            alert(json.message);
            return false;
          }

          if (this.searchnum != json.searchnum) {
            return false;
          }

          this.results = json.results;
          this.showResults();
          return true;
        },
        showResults: function showResults() {
          if (!this.livesearch) {
            return;
          }

          this.resultsvisible = true;
          document.addEventListener("click", this.domClicked);
        },
        hideResults: function hideResults() {
          document.removeEventListener("click", this.domClicked, false);
          this.resultsvisible = false;
        },
        domClicked: function domClicked(ev) {
          if (ev.target.closest("#" + elementID)) {
            return;
          }

          this.hideResults();
        },
        closeBtnClicked: function closeBtnClicked(e) {
          e.preventDefault();
          this.searchterm = '';
          this.hideResults();
        },
        onSubmit: function onSubmit(event) {
          /* Should not prevent user from submitting search without error
          if (this.searchterm.length < this.mintermlength) {
              event.preventDefault();
          } else {
              return true;
          }
          */
          return;
        }
      }
    });
  }
};


/***/ }),

/***/ "./node_modules/klaro/dist/klaro.js":
/*!******************************************!*\
  !*** ./node_modules/klaro/dist/klaro.js ***!
  \******************************************/
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}(this,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=189)}([function(e,t,n){var o=n(2),r=n(27).f,i=n(21),a=n(22),c=n(66),s=n(101),l=n(58);e.exports=function(e,t){var n,u,p,f,d,m=e.target,v=e.global,y=e.stat;if(n=v?o:y?o[m]||c(m,{}):(o[m]||{}).prototype)for(u in t){if(f=t[u],p=e.noTargetGet?(d=r(n,u))&&d.value:n[u],!l(v?u:m+(y?".":"#")+u,e.forced)&&void 0!==p){if(typeof f==typeof p)continue;s(f,p)}(e.sham||p&&p.sham)&&i(f,"sham",!0),a(n,u,f,e)}}},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t,n){(function(t){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||Function("return this")()}).call(this,n(159))},function(e,t,n){var o=n(2),r=n(68),i=n(15),a=n(55),c=n(72),s=n(106),l=r("wks"),u=o.Symbol,p=s?u:u&&u.withoutSetter||a;e.exports=function(e){return i(l,e)||(c&&i(u,e)?l[e]=u[e]:l[e]=p("Symbol."+e)),l[e]}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,n){"use strict";var o=n(0),r=n(2),i=n(34),a=n(33),c=n(8),s=n(72),l=n(106),u=n(1),p=n(15),f=n(59),d=n(4),m=n(9),v=n(23),y=n(18),h=n(53),b=n(42),g=n(44),k=n(45),_=n(56),w=n(162),x=n(71),S=n(27),j=n(16),O=n(51),A=n(21),z=n(22),P=n(68),E=n(54),C=n(43),D=n(55),T=n(3),I=n(108),R=n(109),N=n(46),M=n(32),q=n(47).forEach,U=E("hidden"),L=T("toPrimitive"),F=M.set,H=M.getterFor("Symbol"),W=Object.prototype,B=r.Symbol,K=i("JSON","stringify"),V=S.f,$=j.f,G=w.f,Z=O.f,Y=P("symbols"),Q=P("op-symbols"),J=P("string-to-symbol-registry"),X=P("symbol-to-string-registry"),ee=P("wks"),te=r.QObject,ne=!te||!te.prototype||!te.prototype.findChild,oe=c&&u((function(){return 7!=g($({},"a",{get:function(){return $(this,"a",{value:7}).a}})).a}))?function(e,t,n){var o=V(W,t);o&&delete W[t],$(e,t,n),o&&e!==W&&$(W,t,o)}:$,re=function(e,t){var n=Y[e]=g(B.prototype);return F(n,{type:"Symbol",tag:e,description:t}),c||(n.description=t),n},ie=l?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof B},ae=function(e,t,n){e===W&&ae(Q,t,n),m(e);var o=h(t,!0);return m(n),p(Y,o)?(n.enumerable?(p(e,U)&&e[U][o]&&(e[U][o]=!1),n=g(n,{enumerable:b(0,!1)})):(p(e,U)||$(e,U,b(1,{})),e[U][o]=!0),oe(e,o,n)):$(e,o,n)},ce=function(e,t){m(e);var n=y(t),o=k(n).concat(pe(n));return q(o,(function(t){c&&!se.call(n,t)||ae(e,t,n[t])})),e},se=function(e){var t=h(e,!0),n=Z.call(this,t);return!(this===W&&p(Y,t)&&!p(Q,t))&&(!(n||!p(this,t)||!p(Y,t)||p(this,U)&&this[U][t])||n)},le=function(e,t){var n=y(e),o=h(t,!0);if(n!==W||!p(Y,o)||p(Q,o)){var r=V(n,o);return!r||!p(Y,o)||p(n,U)&&n[U][o]||(r.enumerable=!0),r}},ue=function(e){var t=G(y(e)),n=[];return q(t,(function(e){p(Y,e)||p(C,e)||n.push(e)})),n},pe=function(e){var t=e===W,n=G(t?Q:y(e)),o=[];return q(n,(function(e){!p(Y,e)||t&&!p(W,e)||o.push(Y[e])})),o};(s||(z((B=function(){if(this instanceof B)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,t=D(e),n=function(e){this===W&&n.call(Q,e),p(this,U)&&p(this[U],t)&&(this[U][t]=!1),oe(this,t,b(1,e))};return c&&ne&&oe(W,t,{configurable:!0,set:n}),re(t,e)}).prototype,"toString",(function(){return H(this).tag})),z(B,"withoutSetter",(function(e){return re(D(e),e)})),O.f=se,j.f=ae,S.f=le,_.f=w.f=ue,x.f=pe,I.f=function(e){return re(T(e),e)},c&&($(B.prototype,"description",{configurable:!0,get:function(){return H(this).description}}),a||z(W,"propertyIsEnumerable",se,{unsafe:!0}))),o({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:B}),q(k(ee),(function(e){R(e)})),o({target:"Symbol",stat:!0,forced:!s},{for:function(e){var t=String(e);if(p(J,t))return J[t];var n=B(t);return J[t]=n,X[n]=t,n},keyFor:function(e){if(!ie(e))throw TypeError(e+" is not a symbol");if(p(X,e))return X[e]},useSetter:function(){ne=!0},useSimple:function(){ne=!1}}),o({target:"Object",stat:!0,forced:!s,sham:!c},{create:function(e,t){return void 0===t?g(e):ce(g(e),t)},defineProperty:ae,defineProperties:ce,getOwnPropertyDescriptor:le}),o({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:ue,getOwnPropertySymbols:pe}),o({target:"Object",stat:!0,forced:u((function(){x.f(1)}))},{getOwnPropertySymbols:function(e){return x.f(v(e))}}),K)&&o({target:"JSON",stat:!0,forced:!s||u((function(){var e=B();return"[null]"!=K([e])||"{}"!=K({a:e})||"{}"!=K(Object(e))}))},{stringify:function(e,t,n){for(var o,r=[e],i=1;arguments.length>i;)r.push(arguments[i++]);if(o=t,(d(t)||void 0!==e)&&!ie(e))return f(t)||(t=function(e,t){if("function"==typeof o&&(t=o.call(this,e,t)),!ie(t))return t}),r[1]=t,K.apply(null,r)}});B.prototype[L]||A(B.prototype,L,B.prototype.valueOf),N(B,"Symbol"),C[U]=!0},function(e,t,n){"use strict";var o=n(18),r=n(75),i=n(49),a=n(32),c=n(79),s=a.set,l=a.getterFor("Array Iterator");e.exports=c(Array,"Array",(function(e,t){s(this,{type:"Array Iterator",target:o(e),index:0,kind:t})}),(function(){var e=l(this),t=e.target,n=e.kind,o=e.index++;return!t||o>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:o,done:!1}:"values"==n?{value:t[o],done:!1}:{value:[o,t[o]],done:!1}}),"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(e,t,n){var o=n(77),r=n(22),i=n(168);o||r(Object.prototype,"toString",i,{unsafe:!0})},function(e,t,n){var o=n(1);e.exports=!o((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(e,t,n){var o=n(4);e.exports=function(e){if(!o(e))throw TypeError(String(e)+" is not an object");return e}},function(e,t,n){"use strict";var o=n(0),r=n(8),i=n(2),a=n(15),c=n(4),s=n(16).f,l=n(101),u=i.Symbol;if(r&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var p={},f=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof f?new u(e):void 0===e?u():u(e);return""===e&&(p[t]=!0),t};l(f,u);var d=f.prototype=u.prototype;d.constructor=f;var m=d.toString,v="Symbol(test)"==String(u("test")),y=/^Symbol\((.*)\)[^)]+$/;s(d,"description",{configurable:!0,get:function(){var e=c(this)?this.valueOf():this,t=m.call(e);if(a(p,e))return"";var n=v?t.slice(7,-1):t.replace(y,"$1");return""===n?void 0:n}}),o({global:!0,forced:!0},{Symbol:f})}},function(e,t,n){n(109)("iterator")},function(e,t,n){"use strict";var o=n(22),r=n(9),i=n(1),a=n(88),c=RegExp.prototype,s=c.toString,l=i((function(){return"/a/b"!=s.call({source:"a",flags:"b"})})),u="toString"!=s.name;(l||u)&&o(RegExp.prototype,"toString",(function(){var e=r(this),t=String(e.source),n=e.flags;return"/"+t+"/"+String(void 0===n&&e instanceof RegExp&&!("flags"in c)?a.call(e):n)}),{unsafe:!0})},function(e,t,n){"use strict";var o=n(124).charAt,r=n(32),i=n(79),a=r.set,c=r.getterFor("String Iterator");i(String,"String",(function(e){a(this,{type:"String Iterator",string:String(e),index:0})}),(function(){var e,t=c(this),n=t.string,r=t.index;return r>=n.length?{value:void 0,done:!0}:(e=o(n,r),t.index+=e.length,{value:e,done:!1})}))},function(e,t,n){var o=n(2),r=n(126),i=n(6),a=n(21),c=n(3),s=c("iterator"),l=c("toStringTag"),u=i.values;for(var p in r){var f=o[p],d=f&&f.prototype;if(d){if(d[s]!==u)try{a(d,s,u)}catch(e){d[s]=u}if(d[l]||a(d,l,p),r[p])for(var m in i)if(d[m]!==i[m])try{a(d,m,i[m])}catch(e){d[m]=i[m]}}}},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t,n){var o=n(8),r=n(99),i=n(9),a=n(53),c=Object.defineProperty;t.f=o?c:function(e,t,n){if(i(e),t=a(t,!0),i(n),r)try{return c(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},function(e,t,n){var o=n(8),r=n(16).f,i=Function.prototype,a=i.toString,c=/^\s*function ([^ (]*)/;o&&!("name"in i)&&r(i,"name",{configurable:!0,get:function(){try{return a.call(this).match(c)[1]}catch(e){return""}}})},function(e,t,n){var o=n(52),r=n(26);e.exports=function(e){return o(r(e))}},function(e,t,n){var o=n(57),r=Math.min;e.exports=function(e){return e>0?r(o(e),9007199254740991):0}},function(e,t,n){"use strict";var o=n(0),r=n(4),i=n(59),a=n(105),c=n(19),s=n(18),l=n(60),u=n(3),p=n(61),f=n(36),d=p("slice"),m=f("slice",{ACCESSORS:!0,0:0,1:2}),v=u("species"),y=[].slice,h=Math.max;o({target:"Array",proto:!0,forced:!d||!m},{slice:function(e,t){var n,o,u,p=s(this),f=c(p.length),d=a(e,f),m=a(void 0===t?f:t,f);if(i(p)&&("function"!=typeof(n=p.constructor)||n!==Array&&!i(n.prototype)?r(n)&&null===(n=n[v])&&(n=void 0):n=void 0,n===Array||void 0===n))return y.call(p,d,m);for(o=new(void 0===n?Array:n)(h(m-d,0)),u=0;d<m;d++,u++)d in p&&l(o,u,p[d]);return o.length=u,o}})},function(e,t,n){var o=n(8),r=n(16),i=n(42);e.exports=o?function(e,t,n){return r.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){var o=n(2),r=n(21),i=n(15),a=n(66),c=n(67),s=n(32),l=s.get,u=s.enforce,p=String(String).split("String");(e.exports=function(e,t,n,c){var s=!!c&&!!c.unsafe,l=!!c&&!!c.enumerable,f=!!c&&!!c.noTargetGet;"function"==typeof n&&("string"!=typeof t||i(n,"name")||r(n,"name",t),u(n).source=p.join("string"==typeof t?t:"")),e!==o?(s?!f&&e[t]&&(l=!0):delete e[t],l?e[t]=n:r(e,t,n)):l?e[t]=n:a(t,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&l(this).source||c(this)}))},function(e,t,n){var o=n(26);e.exports=function(e){return Object(o(e))}},function(e,t,n){var o=n(0),r=n(164);o({target:"Array",stat:!0,forced:!n(78)((function(e){Array.from(e)}))},{from:r})},function(e,t,n){"use strict";var o=n(0),r=n(47).map,i=n(61),a=n(36),c=i("map"),s=a("map");o({target:"Array",proto:!0,forced:!c||!s},{map:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}},function(e,t,n){var o=n(8),r=n(51),i=n(42),a=n(18),c=n(53),s=n(15),l=n(99),u=Object.getOwnPropertyDescriptor;t.f=o?u:function(e,t){if(e=a(e),t=c(t,!0),l)try{return u(e,t)}catch(e){}if(s(e,t))return i(!r.f.call(e,t),e[t])}},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t,n){var o=n(0),r=n(1),i=n(23),a=n(80),c=n(117);o({target:"Object",stat:!0,forced:r((function(){a(1)})),sham:!c},{getPrototypeOf:function(e){return a(i(e))}})},function(e,t,n){n(0)({target:"Object",stat:!0},{setPrototypeOf:n(81)})},function(e,t,n){var o=n(0),r=n(34),i=n(35),a=n(9),c=n(4),s=n(44),l=n(169),u=n(1),p=r("Reflect","construct"),f=u((function(){function e(){}return!(p((function(){}),[],e)instanceof e)})),d=!u((function(){p((function(){}))})),m=f||d;o({target:"Reflect",stat:!0,forced:m,sham:m},{construct:function(e,t){i(e),a(t);var n=arguments.length<3?e:i(arguments[2]);if(d&&!f)return p(e,t,n);if(e==n){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var o=[null];return o.push.apply(o,t),new(l.apply(e,o))}var r=n.prototype,u=s(c(r)?r:Object.prototype),m=Function.apply.call(e,u,t);return c(m)?m:u}})},function(e,t,n){var o,r,i,a=n(160),c=n(2),s=n(4),l=n(21),u=n(15),p=n(54),f=n(43),d=c.WeakMap;if(a){var m=new d,v=m.get,y=m.has,h=m.set;o=function(e,t){return h.call(m,e,t),t},r=function(e){return v.call(m,e)||{}},i=function(e){return y.call(m,e)}}else{var b=p("state");f[b]=!0,o=function(e,t){return l(e,b,t),t},r=function(e){return u(e,b)?e[b]:{}},i=function(e){return u(e,b)}}e.exports={set:o,get:r,has:i,enforce:function(e){return i(e)?r(e):o(e,{})},getterFor:function(e){return function(t){var n;if(!s(t)||(n=r(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}}},function(e,t){e.exports=!1},function(e,t,n){var o=n(103),r=n(2),i=function(e){return"function"==typeof e?e:void 0};e.exports=function(e,t){return arguments.length<2?i(o[e])||i(r[e]):o[e]&&o[e][t]||r[e]&&r[e][t]}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},function(e,t,n){var o=n(8),r=n(1),i=n(15),a=Object.defineProperty,c={},s=function(e){throw e};e.exports=function(e,t){if(i(c,e))return c[e];t||(t={});var n=[][e],l=!!i(t,"ACCESSORS")&&t.ACCESSORS,u=i(t,0)?t[0]:s,p=i(t,1)?t[1]:void 0;return c[e]=!!n&&!r((function(){if(l&&!o)return!0;var e={length:-1};l?a(e,1,{enumerable:!0,get:s}):e[1]=1,n.call(e,u,p)}))}},function(e,t,n){var o=n(0),r=n(23),i=n(45);o({target:"Object",stat:!0,forced:n(1)((function(){i(1)}))},{keys:function(e){return i(r(e))}})},function(e,t,n){"use strict";var o=n(0),r=n(63);o({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},function(e,t,n){"use strict";var o=n(0),r=n(52),i=n(18),a=n(62),c=[].join,s=r!=Object,l=a("join",",");o({target:"Array",proto:!0,forced:s||!l},{join:function(e){return c.call(i(this),void 0===e?",":e)}})},function(e,t,n){"use strict";var o=n(0),r=n(1),i=n(59),a=n(4),c=n(23),s=n(19),l=n(60),u=n(110),p=n(61),f=n(3),d=n(73),m=f("isConcatSpreadable"),v=d>=51||!r((function(){var e=[];return e[m]=!1,e.concat()[0]!==e})),y=p("concat"),h=function(e){if(!a(e))return!1;var t=e[m];return void 0!==t?!!t:i(e)};o({target:"Array",proto:!0,forced:!v||!y},{concat:function(e){var t,n,o,r,i,a=c(this),p=u(a,0),f=0;for(t=-1,o=arguments.length;t<o;t++)if(h(i=-1===t?a:arguments[t])){if(f+(r=s(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<r;n++,f++)n in i&&l(p,f,i[n])}else{if(f>=9007199254740991)throw TypeError("Maximum allowed index exceeded");l(p,f++,i)}return p.length=f,p}})},function(e,t,n){"use strict";var o=n(0),r=n(47).filter,i=n(61),a=n(36),c=i("filter"),s=a("filter");o({target:"Array",proto:!0,forced:!c||!s},{filter:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t){e.exports={}},function(e,t,n){var o,r=n(9),i=n(161),a=n(70),c=n(43),s=n(107),l=n(65),u=n(54),p=u("IE_PROTO"),f=function(){},d=function(e){return"<script>"+e+"<\/script>"},m=function(){try{o=document.domain&&new ActiveXObject("htmlfile")}catch(e){}var e,t;m=o?function(e){e.write(d("")),e.close();var t=e.parentWindow.Object;return e=null,t}(o):((t=l("iframe")).style.display="none",s.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(d("document.F=Object")),e.close(),e.F);for(var n=a.length;n--;)delete m.prototype[a[n]];return m()};c[p]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(f.prototype=r(e),n=new f,f.prototype=null,n[p]=e):n=m(),void 0===t?n:i(n,t)}},function(e,t,n){var o=n(104),r=n(70);e.exports=Object.keys||function(e){return o(e,r)}},function(e,t,n){var o=n(16).f,r=n(15),i=n(3)("toStringTag");e.exports=function(e,t,n){e&&!r(e=n?e:e.prototype,i)&&o(e,i,{configurable:!0,value:t})}},function(e,t,n){var o=n(48),r=n(52),i=n(23),a=n(19),c=n(110),s=[].push,l=function(e){var t=1==e,n=2==e,l=3==e,u=4==e,p=6==e,f=5==e||p;return function(d,m,v,y){for(var h,b,g=i(d),k=r(g),_=o(m,v,3),w=a(k.length),x=0,S=y||c,j=t?S(d,w):n?S(d,0):void 0;w>x;x++)if((f||x in k)&&(b=_(h=k[x],x,g),e))if(t)j[x]=b;else if(b)switch(e){case 3:return!0;case 5:return h;case 6:return x;case 2:s.call(j,h)}else if(u)return!1;return p?-1:l||u?u:j}};e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},function(e,t,n){var o=n(35);e.exports=function(e,t,n){if(o(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,o){return e.call(t,n,o)};case 3:return function(n,o,r){return e.call(t,n,o,r)}}return function(){return e.apply(t,arguments)}}},function(e,t){e.exports={}},function(e,t,n){var o=n(0),r=n(173);o({target:"Object",stat:!0,forced:Object.assign!==r},{assign:r})},function(e,t,n){"use strict";var o={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!o.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:o},function(e,t,n){var o=n(1),r=n(28),i="".split;e.exports=o((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==r(e)?i.call(e,""):Object(e)}:Object},function(e,t,n){var o=n(4);e.exports=function(e,t){if(!o(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!o(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!o(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!o(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")}},function(e,t,n){var o=n(68),r=n(55),i=o("keys");e.exports=function(e){return i[e]||(i[e]=r(e))}},function(e,t){var n=0,o=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++n+o).toString(36)}},function(e,t,n){var o=n(104),r=n(70).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return o(e,r)}},function(e,t){var n=Math.ceil,o=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?o:n)(e)}},function(e,t,n){var o=n(1),r=/#|\.prototype\./,i=function(e,t){var n=c[a(e)];return n==l||n!=s&&("function"==typeof t?o(t):!!t)},a=i.normalize=function(e){return String(e).replace(r,".").toLowerCase()},c=i.data={},s=i.NATIVE="N",l=i.POLYFILL="P";e.exports=i},function(e,t,n){var o=n(28);e.exports=Array.isArray||function(e){return"Array"==o(e)}},function(e,t,n){"use strict";var o=n(53),r=n(16),i=n(42);e.exports=function(e,t,n){var a=o(t);a in e?r.f(e,a,i(0,n)):e[a]=n}},function(e,t,n){var o=n(1),r=n(3),i=n(73),a=r("species");e.exports=function(e){return i>=51||!o((function(){var t=[];return(t.constructor={})[a]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},function(e,t,n){"use strict";var o=n(1);e.exports=function(e,t){var n=[][e];return!!n&&o((function(){n.call(null,t||function(){throw 1},1)}))}},function(e,t,n){"use strict";var o,r,i=n(88),a=n(123),c=RegExp.prototype.exec,s=String.prototype.replace,l=c,u=(o=/a/,r=/b*/g,c.call(o,"a"),c.call(r,"a"),0!==o.lastIndex||0!==r.lastIndex),p=a.UNSUPPORTED_Y||a.BROKEN_CARET,f=void 0!==/()??/.exec("")[1];(u||f||p)&&(l=function(e){var t,n,o,r,a=this,l=p&&a.sticky,d=i.call(a),m=a.source,v=0,y=e;return l&&(-1===(d=d.replace("y","")).indexOf("g")&&(d+="g"),y=String(e).slice(a.lastIndex),a.lastIndex>0&&(!a.multiline||a.multiline&&"\n"!==e[a.lastIndex-1])&&(m="(?: "+m+")",y=" "+y,v++),n=new RegExp("^(?:"+m+")",d)),f&&(n=new RegExp("^"+m+"$(?!\\s)",d)),u&&(t=a.lastIndex),o=c.call(l?n:a,y),l?o?(o.input=o.input.slice(v),o[0]=o[0].slice(v),o.index=a.lastIndex,a.lastIndex+=o[0].length):a.lastIndex=0:u&&o&&(a.lastIndex=a.global?o.index+o[0].length:t),f&&o&&o.length>1&&s.call(o[0],n,(function(){for(r=1;r<arguments.length-2;r++)void 0===arguments[r]&&(o[r]=void 0)})),o}),e.exports=l},function(e,t,n){var o=n(8),r=n(2),i=n(58),a=n(120),c=n(16).f,s=n(56).f,l=n(91),u=n(88),p=n(123),f=n(22),d=n(1),m=n(32).set,v=n(85),y=n(3)("match"),h=r.RegExp,b=h.prototype,g=/a/g,k=/a/g,_=new h(g)!==g,w=p.UNSUPPORTED_Y;if(o&&i("RegExp",!_||w||d((function(){return k[y]=!1,h(g)!=g||h(k)==k||"/a/i"!=h(g,"i")})))){for(var x=function(e,t){var n,o=this instanceof x,r=l(e),i=void 0===t;if(!o&&r&&e.constructor===x&&i)return e;_?r&&!i&&(e=e.source):e instanceof x&&(i&&(t=u.call(e)),e=e.source),w&&(n=!!t&&t.indexOf("y")>-1)&&(t=t.replace(/y/g,""));var c=a(_?new h(e,t):h(e,t),o?this:b,x);return w&&n&&m(c,{sticky:n}),c},S=function(e){e in x||c(x,e,{configurable:!0,get:function(){return h[e]},set:function(t){h[e]=t}})},j=s(h),O=0;j.length>O;)S(j[O++]);b.constructor=x,x.prototype=b,f(r,"RegExp",x)}v("RegExp")},function(e,t,n){var o=n(2),r=n(4),i=o.document,a=r(i)&&r(i.createElement);e.exports=function(e){return a?i.createElement(e):{}}},function(e,t,n){var o=n(2),r=n(21);e.exports=function(e,t){try{r(o,e,t)}catch(n){o[e]=t}return t}},function(e,t,n){var o=n(100),r=Function.toString;"function"!=typeof o.inspectSource&&(o.inspectSource=function(e){return r.call(e)}),e.exports=o.inspectSource},function(e,t,n){var o=n(33),r=n(100);(e.exports=function(e,t){return r[e]||(r[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.6.5",mode:o?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(e,t,n){var o=n(18),r=n(19),i=n(105),a=function(e){return function(t,n,a){var c,s=o(t),l=r(s.length),u=i(a,l);if(e&&n!=n){for(;l>u;)if((c=s[u++])!=c)return!0}else for(;l>u;u++)if((e||u in s)&&s[u]===n)return e||u||0;return!e&&-1}};e.exports={includes:a(!0),indexOf:a(!1)}},function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t,n){var o=n(1);e.exports=!!Object.getOwnPropertySymbols&&!o((function(){return!String(Symbol())}))},function(e,t,n){var o,r,i=n(2),a=n(74),c=i.process,s=c&&c.versions,l=s&&s.v8;l?r=(o=l.split("."))[0]+o[1]:a&&(!(o=a.match(/Edge\/(\d+)/))||o[1]>=74)&&(o=a.match(/Chrome\/(\d+)/))&&(r=o[1]),e.exports=r&&+r},function(e,t,n){var o=n(34);e.exports=o("navigator","userAgent")||""},function(e,t,n){var o=n(3),r=n(44),i=n(16),a=o("unscopables"),c=Array.prototype;null==c[a]&&i.f(c,a,{configurable:!0,value:r(null)}),e.exports=function(e){c[a][e]=!0}},function(e,t,n){"use strict";var o=n(0),r=n(111);o({target:"Array",proto:!0,forced:[].forEach!=r},{forEach:r})},function(e,t,n){var o={};o[n(3)("toStringTag")]="z",e.exports="[object z]"===String(o)},function(e,t,n){var o=n(3)("iterator"),r=!1;try{var i=0,a={next:function(){return{done:!!i++}},return:function(){r=!0}};a[o]=function(){return this},Array.from(a,(function(){throw 2}))}catch(e){}e.exports=function(e,t){if(!t&&!r)return!1;var n=!1;try{var i={};i[o]=function(){return{next:function(){return{done:n=!0}}}},e(i)}catch(e){}return n}},function(e,t,n){"use strict";var o=n(0),r=n(165),i=n(80),a=n(81),c=n(46),s=n(21),l=n(22),u=n(3),p=n(33),f=n(49),d=n(116),m=d.IteratorPrototype,v=d.BUGGY_SAFARI_ITERATORS,y=u("iterator"),h=function(){return this};e.exports=function(e,t,n,u,d,b,g){r(n,t,u);var k,_,w,x=function(e){if(e===d&&z)return z;if(!v&&e in O)return O[e];switch(e){case"keys":case"values":case"entries":return function(){return new n(this,e)}}return function(){return new n(this)}},S=t+" Iterator",j=!1,O=e.prototype,A=O[y]||O["@@iterator"]||d&&O[d],z=!v&&A||x(d),P="Array"==t&&O.entries||A;if(P&&(k=i(P.call(new e)),m!==Object.prototype&&k.next&&(p||i(k)===m||(a?a(k,m):"function"!=typeof k[y]&&s(k,y,h)),c(k,S,!0,!0),p&&(f[S]=h))),"values"==d&&A&&"values"!==A.name&&(j=!0,z=function(){return A.call(this)}),p&&!g||O[y]===z||s(O,y,z),f[t]=z,d)if(_={values:x("values"),keys:b?z:x("keys"),entries:x("entries")},g)for(w in _)(v||j||!(w in O))&&l(O,w,_[w]);else o({target:t,proto:!0,forced:v||j},_);return _}},function(e,t,n){var o=n(15),r=n(23),i=n(54),a=n(117),c=i("IE_PROTO"),s=Object.prototype;e.exports=a?Object.getPrototypeOf:function(e){return e=r(e),o(e,c)?e[c]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?s:null}},function(e,t,n){var o=n(9),r=n(166);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{(e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),t=n instanceof Array}catch(e){}return function(n,i){return o(n),r(i),t?e.call(n,i):n.__proto__=i,n}}():void 0)},function(e,t,n){"use strict";var o=n(118),r=n(121);e.exports=o("Map",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),r)},function(e,t,n){var o=n(9),r=n(113),i=n(19),a=n(48),c=n(114),s=n(112),l=function(e,t){this.stopped=e,this.result=t};(e.exports=function(e,t,n,u,p){var f,d,m,v,y,h,b,g=a(t,n,u?2:1);if(p)f=e;else{if("function"!=typeof(d=c(e)))throw TypeError("Target is not iterable");if(r(d)){for(m=0,v=i(e.length);v>m;m++)if((y=u?g(o(b=e[m])[0],b[1]):g(e[m]))&&y instanceof l)return y;return new l(!1)}f=d.call(e)}for(h=f.next;!(b=h.call(f)).done;)if("object"==typeof(y=s(f,g,b.value,u))&&y&&y instanceof l)return y;return new l(!1)}).stop=function(e){return new l(!0,e)}},function(e,t){e.exports=function(e,t,n){if(!(e instanceof t))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return e}},function(e,t,n){"use strict";var o=n(34),r=n(16),i=n(3),a=n(8),c=i("species");e.exports=function(e){var t=o(e),n=r.f;a&&t&&!t[c]&&n(t,c,{configurable:!0,get:function(){return this}})}},function(e,t,n){var o=n(0),r=n(1),i=n(18),a=n(27).f,c=n(8),s=r((function(){a(1)}));o({target:"Object",stat:!0,forced:!c||s,sham:!c},{getOwnPropertyDescriptor:function(e,t){return a(i(e),t)}})},function(e,t,n){var o=n(0),r=n(8),i=n(102),a=n(18),c=n(27),s=n(60);o({target:"Object",stat:!0,sham:!r},{getOwnPropertyDescriptors:function(e){for(var t,n,o=a(e),r=c.f,l=i(o),u={},p=0;l.length>p;)void 0!==(n=r(o,t=l[p++]))&&s(u,t,n);return u}})},function(e,t,n){"use strict";var o=n(9);e.exports=function(){var e=o(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},function(e,t,n){"use strict";var o=n(90),r=n(91),i=n(9),a=n(26),c=n(125),s=n(92),l=n(19),u=n(93),p=n(63),f=n(1),d=[].push,m=Math.min,v=!f((function(){return!RegExp(4294967295,"y")}));o("split",2,(function(e,t,n){var o;return o="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var o=String(a(this)),i=void 0===n?4294967295:n>>>0;if(0===i)return[];if(void 0===e)return[o];if(!r(e))return t.call(o,e,i);for(var c,s,l,u=[],f=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),m=0,v=new RegExp(e.source,f+"g");(c=p.call(v,o))&&!((s=v.lastIndex)>m&&(u.push(o.slice(m,c.index)),c.length>1&&c.index<o.length&&d.apply(u,c.slice(1)),l=c[0].length,m=s,u.length>=i));)v.lastIndex===c.index&&v.lastIndex++;return m===o.length?!l&&v.test("")||u.push(""):u.push(o.slice(m)),u.length>i?u.slice(0,i):u}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var r=a(this),i=null==t?void 0:t[e];return void 0!==i?i.call(t,r,n):o.call(String(r),t,n)},function(e,r){var a=n(o,e,this,r,o!==t);if(a.done)return a.value;var p=i(e),f=String(this),d=c(p,RegExp),y=p.unicode,h=(p.ignoreCase?"i":"")+(p.multiline?"m":"")+(p.unicode?"u":"")+(v?"y":"g"),b=new d(v?p:"^(?:"+p.source+")",h),g=void 0===r?4294967295:r>>>0;if(0===g)return[];if(0===f.length)return null===u(b,f)?[f]:[];for(var k=0,_=0,w=[];_<f.length;){b.lastIndex=v?_:0;var x,S=u(b,v?f:f.slice(_));if(null===S||(x=m(l(b.lastIndex+(v?0:_)),f.length))===k)_=s(f,_,y);else{if(w.push(f.slice(k,_)),w.length===g)return w;for(var j=1;j<=S.length-1;j++)if(w.push(S[j]),w.length===g)return w;_=k=x}}return w.push(f.slice(k)),w}]}),!v)},function(e,t,n){"use strict";n(38);var o=n(22),r=n(1),i=n(3),a=n(63),c=n(21),s=i("species"),l=!r((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u="$0"==="a".replace(/./,"$0"),p=i("replace"),f=!!/./[p]&&""===/./[p]("a","$0"),d=!r((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,p){var m=i(e),v=!r((function(){var t={};return t[m]=function(){return 7},7!=""[e](t)})),y=v&&!r((function(){var t=!1,n=/a/;return"split"===e&&((n={}).constructor={},n.constructor[s]=function(){return n},n.flags="",n[m]=/./[m]),n.exec=function(){return t=!0,null},n[m](""),!t}));if(!v||!y||"replace"===e&&(!l||!u||f)||"split"===e&&!d){var h=/./[m],b=n(m,""[e],(function(e,t,n,o,r){return t.exec===a?v&&!r?{done:!0,value:h.call(t,n,o)}:{done:!0,value:e.call(n,t,o)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),g=b[0],k=b[1];o(String.prototype,e,g),o(RegExp.prototype,m,2==t?function(e,t){return k.call(e,this,t)}:function(e){return k.call(e,this)})}p&&c(RegExp.prototype[m],"sham",!0)}},function(e,t,n){var o=n(4),r=n(28),i=n(3)("match");e.exports=function(e){var t;return o(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==r(e))}},function(e,t,n){"use strict";var o=n(124).charAt;e.exports=function(e,t,n){return t+(n?o(e,t).length:1)}},function(e,t,n){var o=n(28),r=n(63);e.exports=function(e,t){var n=e.exec;if("function"==typeof n){var i=n.call(e,t);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==o(e))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(e,t)}},function(e,t,n){var o=n(2),r=n(126),i=n(111),a=n(21);for(var c in r){var s=o[c],l=s&&s.prototype;if(l&&l.forEach!==i)try{a(l,"forEach",i)}catch(e){l.forEach=i}}},function(e,t,n){var o=n(91);e.exports=function(e){if(o(e))throw TypeError("The method doesn't accept regular expressions");return e}},function(e,t,n){var o=n(3)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[o]=!1,"/./"[e](t)}catch(e){}}return!1}},function(e,t,n){var o=n(0),r=n(176).entries;o({target:"Object",stat:!0},{entries:function(e){return r(e)}})},function(e,t,n){"use strict";var o,r=n(0),i=n(27).f,a=n(19),c=n(95),s=n(26),l=n(96),u=n(33),p="".startsWith,f=Math.min,d=l("startsWith");r({target:"String",proto:!0,forced:!!(u||d||(o=i(String.prototype,"startsWith"),!o||o.writable))&&!d},{startsWith:function(e){var t=String(s(this));c(e);var n=a(f(arguments.length>1?arguments[1]:void 0,t.length)),o=String(e);return p?p.call(t,o,n):t.slice(n,n+o.length)===o}})},function(e,t,n){var o=n(8),r=n(1),i=n(65);e.exports=!o&&!r((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(e,t,n){var o=n(2),r=n(66),i=o["__core-js_shared__"]||r("__core-js_shared__",{});e.exports=i},function(e,t,n){var o=n(15),r=n(102),i=n(27),a=n(16);e.exports=function(e,t){for(var n=r(t),c=a.f,s=i.f,l=0;l<n.length;l++){var u=n[l];o(e,u)||c(e,u,s(t,u))}}},function(e,t,n){var o=n(34),r=n(56),i=n(71),a=n(9);e.exports=o("Reflect","ownKeys")||function(e){var t=r.f(a(e)),n=i.f;return n?t.concat(n(e)):t}},function(e,t,n){var o=n(2);e.exports=o},function(e,t,n){var o=n(15),r=n(18),i=n(69).indexOf,a=n(43);e.exports=function(e,t){var n,c=r(e),s=0,l=[];for(n in c)!o(a,n)&&o(c,n)&&l.push(n);for(;t.length>s;)o(c,n=t[s++])&&(~i(l,n)||l.push(n));return l}},function(e,t,n){var o=n(57),r=Math.max,i=Math.min;e.exports=function(e,t){var n=o(e);return n<0?r(n+t,0):i(n,t)}},function(e,t,n){var o=n(72);e.exports=o&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(e,t,n){var o=n(34);e.exports=o("document","documentElement")},function(e,t,n){var o=n(3);t.f=o},function(e,t,n){var o=n(103),r=n(15),i=n(108),a=n(16).f;e.exports=function(e){var t=o.Symbol||(o.Symbol={});r(t,e)||a(t,e,{value:i.f(e)})}},function(e,t,n){var o=n(4),r=n(59),i=n(3)("species");e.exports=function(e,t){var n;return r(e)&&("function"!=typeof(n=e.constructor)||n!==Array&&!r(n.prototype)?o(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},function(e,t,n){"use strict";var o=n(47).forEach,r=n(62),i=n(36),a=r("forEach"),c=i("forEach");e.exports=a&&c?[].forEach:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}},function(e,t,n){var o=n(9);e.exports=function(e,t,n,r){try{return r?t(o(n)[0],n[1]):t(n)}catch(t){var i=e.return;throw void 0!==i&&o(i.call(e)),t}}},function(e,t,n){var o=n(3),r=n(49),i=o("iterator"),a=Array.prototype;e.exports=function(e){return void 0!==e&&(r.Array===e||a[i]===e)}},function(e,t,n){var o=n(115),r=n(49),i=n(3)("iterator");e.exports=function(e){if(null!=e)return e[i]||e["@@iterator"]||r[o(e)]}},function(e,t,n){var o=n(77),r=n(28),i=n(3)("toStringTag"),a="Arguments"==r(function(){return arguments}());e.exports=o?r:function(e){var t,n,o;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),i))?n:a?r(t):"Object"==(o=r(t))&&"function"==typeof t.callee?"Arguments":o}},function(e,t,n){"use strict";var o,r,i,a=n(80),c=n(21),s=n(15),l=n(3),u=n(33),p=l("iterator"),f=!1;[].keys&&("next"in(i=[].keys())?(r=a(a(i)))!==Object.prototype&&(o=r):f=!0),null==o&&(o={}),u||s(o,p)||c(o,p,(function(){return this})),e.exports={IteratorPrototype:o,BUGGY_SAFARI_ITERATORS:f}},function(e,t,n){var o=n(1);e.exports=!o((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},function(e,t,n){"use strict";var o=n(0),r=n(2),i=n(58),a=n(22),c=n(119),s=n(83),l=n(84),u=n(4),p=n(1),f=n(78),d=n(46),m=n(120);e.exports=function(e,t,n){var v=-1!==e.indexOf("Map"),y=-1!==e.indexOf("Weak"),h=v?"set":"add",b=r[e],g=b&&b.prototype,k=b,_={},w=function(e){var t=g[e];a(g,e,"add"==e?function(e){return t.call(this,0===e?0:e),this}:"delete"==e?function(e){return!(y&&!u(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return y&&!u(e)?void 0:t.call(this,0===e?0:e)}:"has"==e?function(e){return!(y&&!u(e))&&t.call(this,0===e?0:e)}:function(e,n){return t.call(this,0===e?0:e,n),this})};if(i(e,"function"!=typeof b||!(y||g.forEach&&!p((function(){(new b).entries().next()})))))k=n.getConstructor(t,e,v,h),c.REQUIRED=!0;else if(i(e,!0)){var x=new k,S=x[h](y?{}:-0,1)!=x,j=p((function(){x.has(1)})),O=f((function(e){new b(e)})),A=!y&&p((function(){for(var e=new b,t=5;t--;)e[h](t,t);return!e.has(-0)}));O||((k=t((function(t,n){l(t,k,e);var o=m(new b,t,k);return null!=n&&s(n,o[h],o,v),o}))).prototype=g,g.constructor=k),(j||A)&&(w("delete"),w("has"),v&&w("get")),(A||S)&&w(h),y&&g.clear&&delete g.clear}return _[e]=k,o({global:!0,forced:k!=b},_),d(k,e),y||n.setStrong(k,e,v),k}},function(e,t,n){var o=n(43),r=n(4),i=n(15),a=n(16).f,c=n(55),s=n(167),l=c("meta"),u=0,p=Object.isExtensible||function(){return!0},f=function(e){a(e,l,{value:{objectID:"O"+ ++u,weakData:{}}})},d=e.exports={REQUIRED:!1,fastKey:function(e,t){if(!r(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!i(e,l)){if(!p(e))return"F";if(!t)return"E";f(e)}return e[l].objectID},getWeakData:function(e,t){if(!i(e,l)){if(!p(e))return!0;if(!t)return!1;f(e)}return e[l].weakData},onFreeze:function(e){return s&&d.REQUIRED&&p(e)&&!i(e,l)&&f(e),e}};o[l]=!0},function(e,t,n){var o=n(4),r=n(81);e.exports=function(e,t,n){var i,a;return r&&"function"==typeof(i=t.constructor)&&i!==n&&o(a=i.prototype)&&a!==n.prototype&&r(e,a),e}},function(e,t,n){"use strict";var o=n(16).f,r=n(44),i=n(122),a=n(48),c=n(84),s=n(83),l=n(79),u=n(85),p=n(8),f=n(119).fastKey,d=n(32),m=d.set,v=d.getterFor;e.exports={getConstructor:function(e,t,n,l){var u=e((function(e,o){c(e,u,t),m(e,{type:t,index:r(null),first:void 0,last:void 0,size:0}),p||(e.size=0),null!=o&&s(o,e[l],e,n)})),d=v(t),y=function(e,t,n){var o,r,i=d(e),a=h(e,t);return a?a.value=n:(i.last=a={index:r=f(t,!0),key:t,value:n,previous:o=i.last,next:void 0,removed:!1},i.first||(i.first=a),o&&(o.next=a),p?i.size++:e.size++,"F"!==r&&(i.index[r]=a)),e},h=function(e,t){var n,o=d(e),r=f(t);if("F"!==r)return o.index[r];for(n=o.first;n;n=n.next)if(n.key==t)return n};return i(u.prototype,{clear:function(){for(var e=d(this),t=e.index,n=e.first;n;)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete t[n.index],n=n.next;e.first=e.last=void 0,p?e.size=0:this.size=0},delete:function(e){var t=d(this),n=h(this,e);if(n){var o=n.next,r=n.previous;delete t.index[n.index],n.removed=!0,r&&(r.next=o),o&&(o.previous=r),t.first==n&&(t.first=o),t.last==n&&(t.last=r),p?t.size--:this.size--}return!!n},forEach:function(e){for(var t,n=d(this),o=a(e,arguments.length>1?arguments[1]:void 0,3);t=t?t.next:n.first;)for(o(t.value,t.key,this);t&&t.removed;)t=t.previous},has:function(e){return!!h(this,e)}}),i(u.prototype,n?{get:function(e){var t=h(this,e);return t&&t.value},set:function(e,t){return y(this,0===e?0:e,t)}}:{add:function(e){return y(this,e=0===e?0:e,e)}}),p&&o(u.prototype,"size",{get:function(){return d(this).size}}),u},setStrong:function(e,t,n){var o=t+" Iterator",r=v(t),i=v(o);l(e,t,(function(e,t){m(this,{type:o,target:e,state:r(e),kind:t,last:void 0})}),(function(){for(var e=i(this),t=e.kind,n=e.last;n&&n.removed;)n=n.previous;return e.target&&(e.last=n=n?n.next:e.state.first)?"keys"==t?{value:n.key,done:!1}:"values"==t?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(e.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),u(t)}}},function(e,t,n){var o=n(22);e.exports=function(e,t,n){for(var r in t)o(e,r,t[r],n);return e}},function(e,t,n){"use strict";var o=n(1);function r(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=o((function(){var e=r("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=o((function(){var e=r("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},function(e,t,n){var o=n(57),r=n(26),i=function(e){return function(t,n){var i,a,c=String(r(t)),s=o(n),l=c.length;return s<0||s>=l?e?"":void 0:(i=c.charCodeAt(s))<55296||i>56319||s+1===l||(a=c.charCodeAt(s+1))<56320||a>57343?e?c.charAt(s):i:e?c.slice(s,s+2):a-56320+(i-55296<<10)+65536}};e.exports={codeAt:i(!1),charAt:i(!0)}},function(e,t,n){var o=n(9),r=n(35),i=n(3)("species");e.exports=function(e,t){var n,a=o(e).constructor;return void 0===a||null==(n=o(a)[i])?t:r(n)}},function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(e,t,n){"use strict";var o=n(0),r=n(69).indexOf,i=n(62),a=n(36),c=[].indexOf,s=!!c&&1/[1].indexOf(1,-0)<0,l=i("indexOf"),u=a("indexOf",{ACCESSORS:!0,1:0});o({target:"Array",proto:!0,forced:s||!l||!u},{indexOf:function(e){return s?c.apply(this,arguments)||0:r(this,e,arguments.length>1?arguments[1]:void 0)}})},function(e,t,n){"use strict";var o=n(0),r=n(35),i=n(23),a=n(1),c=n(62),s=[],l=s.sort,u=a((function(){s.sort(void 0)})),p=a((function(){s.sort(null)})),f=c("sort");o({target:"Array",proto:!0,forced:u||!p||!f},{sort:function(e){return void 0===e?l.call(i(this)):l.call(i(this),r(e))}})},function(e,t,n){"use strict";var o=n(118),r=n(121);e.exports=o("Set",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),r)},function(e,t,n){"use strict";var o=n(90),r=n(9),i=n(23),a=n(19),c=n(57),s=n(26),l=n(92),u=n(93),p=Math.max,f=Math.min,d=Math.floor,m=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g;o("replace",2,(function(e,t,n,o){var y=o.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,h=o.REPLACE_KEEPS_$0,b=y?"$":"$0";return[function(n,o){var r=s(this),i=null==n?void 0:n[e];return void 0!==i?i.call(n,r,o):t.call(String(r),n,o)},function(e,o){if(!y&&h||"string"==typeof o&&-1===o.indexOf(b)){var i=n(t,e,this,o);if(i.done)return i.value}var s=r(e),d=String(this),m="function"==typeof o;m||(o=String(o));var v=s.global;if(v){var k=s.unicode;s.lastIndex=0}for(var _=[];;){var w=u(s,d);if(null===w)break;if(_.push(w),!v)break;""===String(w[0])&&(s.lastIndex=l(d,a(s.lastIndex),k))}for(var x,S="",j=0,O=0;O<_.length;O++){w=_[O];for(var A=String(w[0]),z=p(f(c(w.index),d.length),0),P=[],E=1;E<w.length;E++)P.push(void 0===(x=w[E])?x:String(x));var C=w.groups;if(m){var D=[A].concat(P,z,d);void 0!==C&&D.push(C);var T=String(o.apply(void 0,D))}else T=g(A,d,z,P,C,o);z>=j&&(S+=d.slice(j,z)+T,j=z+A.length)}return S+d.slice(j)}];function g(e,n,o,r,a,c){var s=o+e.length,l=r.length,u=v;return void 0!==a&&(a=i(a),u=m),t.call(c,u,(function(t,i){var c;switch(i.charAt(0)){case"$":return"$";case"&":return e;case"`":return n.slice(0,o);case"'":return n.slice(s);case"<":c=a[i.slice(1,-1)];break;default:var u=+i;if(0===u)return t;if(u>l){var p=d(u/10);return 0===p?t:p<=l?void 0===r[p-1]?i.charAt(1):r[p-1]+i.charAt(1):t}c=r[u-1]}return void 0===c?"":c}))}}))},function(e,t,n){var o,r,i,a=n(2),c=n(1),s=n(28),l=n(48),u=n(107),p=n(65),f=n(132),d=a.location,m=a.setImmediate,v=a.clearImmediate,y=a.process,h=a.MessageChannel,b=a.Dispatch,g=0,k={},_=function(e){if(k.hasOwnProperty(e)){var t=k[e];delete k[e],t()}},w=function(e){return function(){_(e)}},x=function(e){_(e.data)},S=function(e){a.postMessage(e+"",d.protocol+"//"+d.host)};m&&v||(m=function(e){for(var t=[],n=1;arguments.length>n;)t.push(arguments[n++]);return k[++g]=function(){("function"==typeof e?e:Function(e)).apply(void 0,t)},o(g),g},v=function(e){delete k[e]},"process"==s(y)?o=function(e){y.nextTick(w(e))}:b&&b.now?o=function(e){b.now(w(e))}:h&&!f?(i=(r=new h).port2,r.port1.onmessage=x,o=l(i.postMessage,i,1)):!a.addEventListener||"function"!=typeof postMessage||a.importScripts||c(S)||"file:"===d.protocol?o="onreadystatechange"in p("script")?function(e){u.appendChild(p("script")).onreadystatechange=function(){u.removeChild(this),_(e)}}:function(e){setTimeout(w(e),0)}:(o=S,a.addEventListener("message",x,!1))),e.exports={set:m,clear:v}},function(e,t,n){var o=n(74);e.exports=/(iphone|ipod|ipad).*applewebkit/i.test(o)},function(e,t,n){"use strict";var o=n(35),r=function(e){var t,n;this.promise=new e((function(e,o){if(void 0!==t||void 0!==n)throw TypeError("Bad Promise constructor");t=e,n=o})),this.resolve=o(t),this.reject=o(n)};e.exports.f=function(e){return new r(e)}},function(e,t,n){e.exports=n(171)()},function(e,t){e.exports={acceptAll:"照单全收",acceptSelected:"接受选择",close:"密切",consentModal:{description:"在这里，您可以评估和定制我们希望在本网站上使用的服务。您是负责人！您可以根据自己的需要启用或禁用服务。启用或禁用您认为合适的服务。",privacyPolicy:{name:"隐私政策",text:"要了解更多，请阅读我们的{privacyPolicy} 。"},title:"我们想使用的服务"},consentNotice:{changeDescription:"自上次访问后有变化，请更新您的同意。",description:"你好！我们可以为{purposes} 启用一些额外的服务吗？您可以随时更改或撤回您的同意。",imprint:{name:"印记"},learnMore:"让我来选",privacyPolicy:{name:"隐私政策"},testing:"测试模式！"},contextualConsent:{acceptAlways:"总是",acceptOnce:"是的，是的",description:"你想加载由{title} 提供的外部内容吗？"},decline:"我拒绝",ok:"没事的",poweredBy:"与Klaro一起实现!",privacyPolicy:{name:"隐私政策",text:"要了解更多，请阅读我们的{privacyPolicy} 。"},purposeItem:{service:"服务",services:"服务"},purposes:{advertising:{description:"这些服务处理个人信息，向您展示个性化或基于兴趣的广告。",title:"广告宣传"},functional:{description:"这些服务对于本网站的正常运行是必不可少的。您不能在这里禁用它们，否则服务将无法正常运行。\n",title:"服务提供"},marketing:{description:"这些服务会处理个人信息，向您展示您可能感兴趣的产品、服务或主题的相关内容。",title:"市场营销"},performance:{description:"这些服务处理个人信息是为了优化本网站提供的服务。\n",title:"性能优化"}},save:"挽救",service:{disableAll:{description:"使用此开关可启用或禁用所有服务。",title:"启用或停用所有服务"},optOut:{description:"这个服务是默认加载的(但你可以选择退出)",title:"(选择退出)"},purpose:"目的",purposes:"目的",required:{description:"这种服务是必须的",title:"(总是需要)"}}}},function(e,t){e.exports={acceptAll:"Aceitar todos",acceptSelected:"Aceitar selecionados",close:"Fechar",consentModal:{description:"Aqui você pode avaliar e personalizar os serviços que gostaríamos de usar neste website. Você está no comando! Habilite ou desabilite os serviços como julgar conveniente.",privacyPolicy:{name:"política de privacidade",text:"Para saber mais, por favor, leia nossa {privacyPolicy}."},title:"Serviços que gostaríamos de utilizar"},consentNotice:{changeDescription:"Houve mudanças desde sua última visita, queira renovar seu consentimento.",description:"Olá! Poderíamos, por favor, habilitar alguns serviços adicionais para {purposes}? Você pode sempre mudar ou retirar seu consentimento mais tarde.",imprint:{name:"imprimir"},learnMore:"Deixe-me escolher",privacyPolicy:{name:"política de privacidade"},testing:"Modo de teste!"},contextualConsent:{acceptAlways:"Sempre",acceptOnce:"Sim",description:"Você deseja carregar conteúdo externo fornecido por {title}?"},decline:"Recusar",ok:"Aceito.",poweredBy:"Realizado com Klaro!",privacyPolicy:{name:"política de privacidade",text:"Para saber mais, por favor, leia nossa {privacyPolicy}."},purposeItem:{service:"serviço",services:"serviços"},purposes:{advertising:{description:"Esses serviços processam informações pessoais para mostrar a você anúncios personalizados ou baseados em interesses.",title:"Publicidade"},functional:{description:"Esses serviços são essenciais para o correto funcionamento deste website. Você não pode desativá-los aqui, pois de outra forma o serviço não funcionaria corretamente.\n",title:"Prestação de serviços"},marketing:{description:"Esses serviços processam informações pessoais para mostrar a você conteúdo relevante sobre produtos, serviços ou tópicos que possam ser do seu interesse.",title:"Marketing"},performance:{description:"Esses serviços processam informações pessoais para otimizar o serviço que este website oferece.\n",title:"Otimização do desempenho"}},save:"Salvar",service:{disableAll:{description:"Use essa chave para habilitar ou desabilitar todos os serviços.",title:"Habilitar ou desabilitar todos os serviços"},optOut:{description:"Estes serviços são carregados por padrão (mas o você pode optar por não participar).",title:"(opt-out)"},purpose:"Objetivo",purposes:"Objetivos",required:{description:"Esses serviços são sempre necessários",title:"(sempre necessário)"}}}},function(e,t){e.exports={acceptAll:"Accepta-les totes",acceptSelected:"Accepta les escollides",service:{disableAll:{description:"Useu aquest botó per a habilitar o deshabilitar totes les aplicacions.",title:"Habilita/deshabilita totes les aplicacions"},optOut:{description:"Aquesta aplicació es carrega per defecte, però podeu desactivar-la",title:"(opt-out)"},purpose:"Finalitat",purposes:"Finalitats",required:{description:"Aquesta aplicació es necessita sempre",title:"(necessària)"}},close:"Tanca",consentModal:{description:"Aquí podeu veure i personalitzar la informació que recopilem sobre vós.",privacyPolicy:{name:"política de privadesa",text:"Per a més informació, consulteu la nostra {privacyPolicy}."},title:"Informació que recopilem"},consentNotice:{changeDescription:"Hi ha hagut canvis des de la vostra darrera visita. Actualitzeu el vostre consentiment.",description:"Recopilem i processem la vostra informació personal amb les següents finalitats: {purposes}.",imprint:{name:"Empremta"},learnMore:"Saber-ne més",privacyPolicy:{name:"política de privadesa"}},decline:"Rebutja",ok:"Accepta",poweredBy:"Funciona amb Klaro!",purposeItem:{service:"aplicació",services:"aplicacions"},save:"Desa"}},function(e,t){e.exports={privacyPolicy:{name:"zásady ochrany soukromí",text:'Pro další informace si přečtete naše <tr-hint v="privacy policy">{privacyPolicy}</tr-hint>.'},consentModal:{title:"Služby, které bychom rádi využili",description:"Zde můžete posoudit a přizpůsobit služby, které bychom rádi na tomto webu používali. Máte to pod kontrolou! Povolte nebo zakažte služby, jak uznáte za vhodné."},consentNotice:{testing:"Testing mode!",changeDescription:"Od vaší poslední návštěvy došlo ke změnám, obnovte prosím svůj souhlas.",description:"„Dobrý den! Můžeme povolit některé další služby pro {purposes}? Svůj souhlas můžete kdykoliv změnit nebo odvolat.“","learnMore|capitalize":"Vyberu si"},"účely":{functional:{"title|capitalize":"Poskytování služeb",description:"Tyto služby jsou nezbytné pro správné fungování tohoto webu. Nelze je zde deaktivovat, protože služba by jinak nefungovala správně.\n"},performance:{"title|capitalize":"Optimalizace výkonu",description:"V rámci těchto služeb jsou zpracovávány osobní údaje za účelem optimalizace služeb, které jsou na tomto webu poskytovány.\n"},marketing:{"title|capitalize":"Marketing",description:"V rámci těchto služeb jsou zpracovávány osobní údaje, aby se vám zobrazoval relevantní obsah o produktech, službách nebo tématech, které by vás mohly zajímat."},advertising:{"title|capitalize":"Reklama",description:"V rámci těchto služeb jsou zpracovávány osobní údaje, aby vám zobrazovaly personalizované nebo zájmově orientované reklamy."}},purposeItem:{service:"Jednoduchá služba <tr-snip></tr-snip> , kterou nainstaluji do svého počítače.",services:"Několik jednoduchých služeb <tr-snip></tr-snip> , které nainstaluji do svého počítače."},"ok|capitalize":"To je v pořádku",save:"uložit","decline|capitalize":"Nepřijímám",close:"zavřít",acceptAll:"přijmout vše",acceptSelected:"přijmout vybrané",service:{disableAll:{title:"povolit nebo zakázat všechny služby",description:"Pomocí tohoto přepínače můžete povolit nebo zakázat všechny služby."},optOut:{title:"(opt-out)",description:"Tato služba se načítá ve výchozím nastavení (ale můžete ji zrušit)"},required:{title:"(vždy vyžadováno)",description:"Tato služba je vždy vyžadována"},purposes:"Zpracování  pro účely <tr-snip></tr-snip>",purpose:"Zpracování pro účely <tr-snip></tr-snip>"},poweredBy:"Realizováno pomocí Klaro!",contextualConsent:{description:"Chcete načíst externí obsah dodávaný prostřednictvím {title}?",acceptOnce:"Ano",acceptAlways:"Vždy"}}},function(e,t){e.exports={acceptAll:"Tillad alle",acceptSelected:"Tillad udvalgte",service:{disableAll:{description:"Brug denne kontakt til at aktivere/deaktivere alle apps.",title:"Aktiver/deaktiver alle applikatione"},optOut:{description:"Denne applikation indlæses som standard (men du kan deaktivere den)",title:"Opt-Out"},purpose:"Formål",purposes:"Formål",required:{description:"Denne applikation er altid nødvendig",title:"(Altid nødvendig)"}},close:"Luk",consentModal:{description:"Her kan du se og ændre, hvilke informationer vi gemmer om dig.",privacyPolicy:{name:"Flere informationer finde du under {privacyPolicy}",text:"databeskyttelseserklæring."},title:"Informationer, som vi gemmer"},consentNotice:{changeDescription:"Der har været ændringer siden dit sidste besøg. Opdater dit valg.",description:"Vi gemmer og behandler dine personlige oplysninger til følgende formål: {purposes}.",imprint:{name:""},learnMore:"Læs mere",privacyPolicy:{name:"Datenschutzerklärung"}},decline:"Afvis",ok:"Ok",poweredBy:"Realiseret med Klaro!",purposeItem:{service:"",services:""},save:"Gem"}},function(e,t){e.exports={acceptAll:"Alle akzeptieren",acceptSelected:"Ausgewählte akzeptieren",close:"Schließen",consentModal:{description:"Hier können Sie die Dienste, die wir auf dieser Website nutzen möchten, bewerten und anpassen. Sie haben das Sagen! Aktivieren oder deaktivieren Sie die Dienste, wie Sie es für richtig halten.",privacyPolicy:{name:"Datenschutzerklärung",text:"Um mehr zu erfahren, lesen Sie bitte unsere {privacyPolicy}."},title:"Dienste, die wir nutzen möchten"},consentNotice:{changeDescription:"Seit Ihrem letzten Besuch gab es Änderungen, bitte erneuern Sie Ihre Zustimmung.",description:"Hallo! Könnten wir bitte einige zusätzliche Dienste für {purposes} aktivieren? Sie können Ihre Zustimmung später jederzeit ändern oder zurückziehen.",imprint:{name:"Impressum"},learnMore:"Lassen Sie mich wählen",privacyPolicy:{name:"Datenschutzerklärung"},testing:"Testmodus!"},contextualConsent:{acceptAlways:"Immer",acceptOnce:"Ja",description:"Möchten Sie von {title} bereitgestellte externe Inhalte laden?"},decline:"Ich lehne ab",ok:"Das ist ok",poweredBy:"Realisiert mit Klaro!",privacyPolicy:{name:"Datenschutzerklärung",text:"Um mehr zu erfahren, lesen Sie bitte unsere {privacyPolicy}."},purposeItem:{service:"Dienst",services:"Dienste"},purposes:{advertising:{description:"Diese Dienste verarbeiten persönliche Informationen, um Ihnen personalisierte oder interessenbezogene Werbung zu zeigen.",title:"Werbung"},functional:{description:"Diese Dienste sind für die korrekte Funktion dieser Website unerlässlich. Sie können sie hier nicht deaktivieren, da der Dienst sonst nicht richtig funktionieren würde.\n",title:"Dienstbereitstellung"},marketing:{description:"Diese Dienste verarbeiten persönliche Daten, um Ihnen relevante Inhalte über Produkte, Dienstleistungen oder Themen zu zeigen, die Sie interessieren könnten.",title:"Marketing"},performance:{description:"Diese Dienste verarbeiten personenbezogene Daten, um den von dieser Website angebotenen Service zu optimieren.\n",title:"Optimierung der Leistung"}},save:"Speichern",service:{disableAll:{description:"Mit diesem Schalter können Sie alle Dienste aktivieren oder deaktivieren.",title:"Alle Dienste aktivieren oder deaktivieren"},optOut:{description:"Diese Dienste werden standardmäßig geladen (Sie können sich jedoch abmelden)",title:"(Opt-out)"},purpose:"Zweck",purposes:"Zwecke",required:{description:"Dieser Service ist immer erforderlich",title:"(immer erforderlich)"}}}},function(e,t){e.exports={acceptAll:"",acceptAll_en:"Accept all",acceptSelected:"",acceptSelected_en:"Accept selected",service:{disableAll:{description:"Χρησιμοποίησε αυτό τον διακόπτη για να ενεργοποιήσεις/απενεργοποιήσεις όλες τις εφαρμογές.",title:"Για όλες τις εφαρμογές"},optOut:{description:"Είναι προκαθορισμένο να φορτώνεται, άλλα μπορεί να παραληφθεί",title:"(μη απαιτούμενο)"},purpose:"Σκοπός",purposes:"Σκοποί",required:{description:"Δεν γίνεται να λειτουργήσει σωστά η εφαρμογή χωρίς αυτό",title:"(απαιτούμενο)"}},close:"Κλείσιμο",consentModal:{description:"Εδώ μπορείς να δεις και να ρυθμίσεις τις πληροφορίες που συλλέγουμε σχετικά με εσένα.",privacyPolicy:{name:"Πολιτική Απορρήτου",text:"Για περισσότερες πληροφορίες, παρακαλώ διαβάστε την {privacyPolicy}."},title:"Πληροφορίες που συλλέγουμε"},consentNotice:{changeDescription:"Πραγματοποιήθηκαν αλλαγές μετά την τελευταία σας επίσκεψη παρακαλούμε ανανεώστε την συγκατάθεση σας.",description:"Συγκεντρώνουμε και επεξεργαζόμαστε τα προσωπικά δεδομένα σας για τους παρακάτω λόγους: {purposes}.",imprint:{name:"",name_en:"imprint"},learnMore:"Περισσότερα",privacyPolicy:{name:"Πολιτική Απορρήτου"}},decline:"Απόρριπτω",ok:"OK",poweredBy:"Υποστηρίζεται από το Klaro!",purposeItem:{service:"",services:""},save:"Αποθήκευση"}},function(e,t){e.exports={acceptAll:"Accept all",acceptSelected:"Accept selected",close:"Close",consentModal:{description:"Here you can assess and customize the services that we'd like to use on this website. You're in charge! Enable or disable services as you see fit.",title:"Services we would like to use"},consentNotice:{changeDescription:"There were changes since your last visit, please renew your consent.",description:"Hi! Could we please enable some additional services for {purposes}? You can always change or withdraw your consent later.",learnMore:"Let me choose",testing:"Testing mode!"},contextualConsent:{acceptAlways:"Always",acceptOnce:"Yes",description:"Do you want to load external content supplied by {title}?"},decline:"I decline",ok:"That's ok",poweredBy:"Realized with Klaro!",privacyPolicy:{name:"privacy policy",text:"To learn more, please read our {privacyPolicy}."},purposeItem:{service:"service",services:"services"},purposes:{advertising:{description:"These services process personal information to show you personalized or interest-based advertisements.",title:"Advertising"},functional:{description:"These services are essential for the correct functioning of this website. You cannot disable them here as the service would not work correctly otherwise.\n",title:"Service Provision"},marketing:{description:"These services process personal information to show you relevant content about products, services or topics that you might be interested in.",title:"Marketing"},performance:{description:"These services process personal information to optimize the service that this website offers.\n",title:"Performance Optimization"}},save:"Save",service:{disableAll:{description:"Use this switch to enable or disable all services.",title:"Enable or disable all services"},optOut:{description:"This services is loaded by default (but you can opt out)",title:"(opt-out)"},purpose:"purpose",purposes:"purposes",required:{description:"This services is always required",title:"(always required)"}}}},function(e,t){e.exports={acceptAll:"Aceptar todas",acceptSelected:"Aceptar seleccionadas",close:"Cerrar",consentModal:{description:"Aquí puede evaluar y personalizar los servicios que nos gustaría utilizar en este sitio web. ¡Usted decide! Habilite o deshabilite los servicios como considere oportuno.",privacyPolicy:{name:"política de privacidad",text:"Para saber más, por favor lea nuestra {privacyPolicy}."},title:"Servicios que nos gustaría utilizar"},consentNotice:{changeDescription:"Ha habido cambios en las cookies desde su última visita. Debe renovar su consentimiento.",description:"¡Hola! ¿Podríamos habilitar algunos servicios adicionales para {purposes}? Siempre podrá cambiar o retirar su consentimiento más tarde.",imprint:{name:"Imprimir"},learnMore:"Quiero elegir",privacyPolicy:{name:"política de privacidad"},testing:"¡Modo de prueba!"},contextualConsent:{acceptAlways:"Siempre",acceptOnce:"Sí",description:"¿Quieres cargar el contenido externo suministrado por {title}?"},decline:"Descartar todas",ok:"De acuerdo",poweredBy:"¡Realizado con Klaro!",privacyPolicy:{name:"política de privacidad",text:"Para saber más, por favor lea nuestra {privacyPolicy}."},purposeItem:{service:"servicio",services:"servicios"},purposes:{advertising:{description:"Estos servicios procesan información personal para mostrarle anuncios personalizados o basados en intereses.",title:"Publicidad"},functional:{description:"Estos servicios son esenciales para el correcto funcionamiento de este sitio web. No puede desactivarlos ya que la página no funcionaría correctamente.",title:"Prestación de servicios"},marketing:{description:"Estos servicios procesan información personal para mostrarle contenido relevante sobre productos, servicios o temas que puedan interesarle.",title:"Marketing"},performance:{description:"Estos servicios procesan información personal para optimizar el servicio que ofrece este sitio.",title:"Optimización del rendimiento"}},save:"Guardar",service:{disableAll:{description:"Utilice este interruptor para activar o desactivar todos los servicios.",title:"Activar o desactivar todos los servicios"},optOut:{description:"Este servicio está habilitado por defecto (pero puede optar por lo contrario)",title:"(desactivar)"},purpose:"Finalidad",purposes:"Finalidades",required:{description:"Este servicio es necesario siempre",title:"(siempre requerido)"}}}},function(e,t){e.exports={acceptAll:"",acceptAll_en:"Accept all",acceptSelected:"",acceptSelected_en:"Accept selected",service:{disableAll:{description:"Aktivoi kaikki päälle/pois.",title:"Valitse kaikki"},optOut:{description:"Ladataan oletuksena (mutta voit ottaa sen pois päältä)",title:"(ladataan oletuksena)"},purpose:"Käyttötarkoitus",purposes:"Käyttötarkoitukset",required:{description:"Sivusto vaatii tämän aina",title:"(vaaditaan)"}},close:"Sulje",consentModal:{description:"Voit tarkastella ja muokata sinusta keräämiämme tietoja.",privacyPolicy:{name:"tietosuojasivultamme",text:"Voit lukea lisätietoja {privacyPolicy}."},title:"Keräämämme tiedot"},consentNotice:{changeDescription:"Olemme tehneet muutoksia ehtoihin viime vierailusi jälkeen, tarkista ehdot.",description:"Keräämme ja käsittelemme henkilötietoja seuraaviin tarkoituksiin: {purposes}.",imprint:{name:"",name_en:"imprint"},learnMore:"Lue lisää",privacyPolicy:{name:"tietosuojasivultamme"}},decline:"Hylkää",ok:"Hyväksy",poweredBy:"Palvelun tarjoaa Klaro!",purposeItem:{service:"",services:""},save:"Tallenna"}},function(e,t){e.exports={acceptAll:"Accepter tout",acceptSelected:"Accepter sélectionné",close:"Fermer",consentModal:{description:"Vous pouvez ici évaluer et personnaliser les services que nous aimerions utiliser sur ce site. C'est vous qui décidez ! Activez ou désactivez les services comme bon vous semble.",privacyPolicy:{name:"politique de confidentialité",text:"Pour en savoir plus, veuillez lire notre {privacyPolicy}."},title:"Services que nous souhaitons utiliser"},consentNotice:{changeDescription:"Il y a eu des changements depuis votre dernière visite, veuillez renouveler votre consentement.",description:"Bonjour ! Pourrions-nous activer des services supplémentaires pour {purposes}? Vous pouvez toujours modifier ou retirer votre consentement plus tard.",imprint:{name:"mentions légales"},learnMore:"Laissez-moi choisir",privacyPolicy:{name:"politique de confidentialité"},testing:"Mode test !"},contextualConsent:{acceptAlways:"Toujours",acceptOnce:"Oui",description:"Vous souhaitez charger un contenu externe fourni par {title}?"},decline:"Je refuse",ok:"C'est bon.",poweredBy:"Réalisé avec Klaro !",privacyPolicy:{name:"politique de confidentialité",text:"Pour en savoir plus, veuillez lire notre {privacyPolicy}."},purposeItem:{service:"service",services:"services"},purposes:{advertising:{description:"Ces services traitent les informations personnelles pour vous présenter des publicités personnalisées ou basées sur des intérêts.",title:"Publicité"},functional:{description:"Ces services sont essentiels au bon fonctionnement de ce site. Vous ne pouvez pas les désactiver ici car le service ne fonctionnerait pas correctement autrement.\n",title:"Prestation de services"},marketing:{description:"Ces services traitent les informations personnelles afin de vous présenter un contenu pertinent sur les produits, les services ou les sujets qui pourraient vous intéresser.",title:"Marketing"},performance:{description:"Ces services traitent les informations personnelles afin d'optimiser le service que ce site Web offre.\n",title:"Optimisation de la performance"}},save:"Enregistrer",service:{disableAll:{description:"Utilisez ce commutateur pour activer ou désactiver tous les services.",title:"Activer ou désactiver tous les services"},optOut:{description:"Ce service est chargé par défaut (mais vous pouvez le désactiver)",title:"(opt-out)"},purpose:"Objet",purposes:"Fins",required:{description:"Ce service est toujours nécessaire",title:"(toujours requis)"}}}},function(e,t){e.exports={acceptAll:"Aceptar todas",acceptSelected:"Aceptar seleccionadas",close:"Pechar",consentModal:{description:"Aquí pode avaliar e personalizar os servizos que nos gustaría utilizar neste sitio web. ¡Vostede decide! Habilite ou deshabilite os servicios como lle conveña.",privacyPolicy:{name:"política de privacidade",text:"Para saber máis, por favor lea a nosa {privacyPolicy}."},title:"Servizos que nos gustaría utilizar"},consentNotice:{changeDescription:"Houbo cambios nas cookies dende a súa última visita. Debe renovar o seu consentimento.",description:"¡Ola! ¿Poderíamos habilitar algúns servizos adicionais para {purposes}? Sempre poderá cambiar ou retirar o séu consentimento máis tarde.",imprint:{name:"Imprimir"},learnMore:"Quero elixir",privacyPolicy:{name:"política de privacidade"},testing:"¡Modo de proba!"},decline:"Descartar todas",ok:"De acordo",poweredBy:"¡Realizado con Klaro!",privacyPolicy:{name:"política de privacidade",text:"Para saber máis, por favor lea a nosa {privacyPolicy}."},purposeItem:{service:"servizo",services:"servizos"},purposes:{advertising:{description:"Estes servizos procesan información persoal para mostrarlle anuncios personalizados ou basados en intereses.",title:"Publicidade"},functional:{description:"Estes servizos son esenciais para o correcto funcionamiento deste sitio web. Non pode desactivalos xa que a páxina non funcionaría correctamente.",title:"Prestación de servizos"},marketing:{description:"Estes servizos procesan información persoal para mostrarlle contido relevante sobre produtos, servizos ou temas que poidan interesarlle.",title:"Marketing"},performance:{description:"Estes servizos procesan información persoal para optimizar o servizo que ofrece este sitio.",title:"Optimización do rendimento"}},save:"Gardar",service:{disableAll:{description:"Utilice este interruptor para activar ou desactivar todos os servizos.",title:"Activar ou desactivar todos os servizos"},optOut:{description:"Este servizo está habilitado por defecto (pero pode optar polo contrario)",title:"(desactivar)"},purpose:"Finalidade",purposes:"Finalidades",required:{description:"Este servizo é necesario sempre",title:"(sempre requirido)"}}}},function(e,t){e.exports={acceptAll:"",acceptAll_en:"Accept all",acceptSelected:"",acceptSelected_en:"Accept selected",service:{disableAll:{description:"Használd ezt a kapcsolót az összes alkalmazás engedélyezéséhez/letiltásához.",title:"Összes app átkapcsolása"},optOut:{description:"Ez az alkalmazás alapértelmezés szerint betöltött (de ki lehet kapcsolni)",title:"(leiratkozás)"},purpose:"Cél",purposes:"Célok",required:{description:"Ez az alkalmazás mindig kötelező",title:"(mindig kötelező)"}},close:"Elvet",consentModal:{description:"Itt láthatod és testreszabhatod az rólad gyűjtött információkat.",privacyPolicy:{name:"adatvédelmi irányelveinket",text:"További információért kérjük, olvassd el az {privacyPolicy}."},title:"Információk, amiket gyűjtünk"},consentNotice:{changeDescription:"Az utolsó látogatás óta változások történtek, kérjük, frissítsd a hozzájárulásodat.",description:"Az személyes adataidat összegyűjtjük és feldolgozzuk az alábbi célokra: {purposes}.",imprint:{name:"",name_en:"imprint"},learnMore:"Tudj meg többet",privacyPolicy:{name:"adatvédelmi irányelveinket"}},decline:"Mentés",ok:"Elfogad",poweredBy:"Powered by Klaro!",purposeItem:{service:"",services:""},save:"Save"}},function(e,t){e.exports={acceptAll:"",acceptAll_en:"Prihvati sve",acceptSelected:"",acceptSelected_en:"Prihvati odabrane",service:{disableAll:{description:"Koristite ovaj prekidač da omogućite/onemogućite sve aplikacije odjednom.",title:"Izmeijeni sve"},optOut:{description:"Ova aplikacija je učitana automatski (ali je možete onemogućiti)",title:"(onemogućite)"},purpose:"Svrha",purposes:"Svrhe",required:{description:"Ova aplikacija je uvijek obavezna",title:"(obavezna)"}},close:"Zatvori",consentModal:{description:"Ovdje možete vidjeti i podesiti informacije koje prikupljamo o Vama.",privacyPolicy:{name:"pravila privatnosti",text:"Za više informacije pročitajte naša {privacyPolicy}."},title:"Informacije koje prikupljamo"},consentNotice:{changeDescription:"Došlo je do promjena od Vaše posljednjeg posjećivanja web stranice, molimo Vas da ažurirate svoja odobrenja.",description:"Mi prikupljamo i procesiramo Vaše osobne podatke radi slijedećeg: {purposes}.",imprint:{name:"",name_en:"imprint"},learnMore:"Saznajte više",privacyPolicy:{name:"pravila privatnosti"}},decline:"Odbij",ok:"U redu",poweredBy:"Pokreće Klaro!",purposeItem:{service:"",services:""},save:"Spremi"}},function(e,t){e.exports={acceptAll:"Accettare tutti",acceptSelected:"Accettare selezionato",close:"Chiudi",consentModal:{description:"Qui può valutare e personalizzare i servizi che vorremmo utilizzare su questo sito web. È lei il responsabile! Abilitare o disabilitare i servizi come meglio crede.",privacyPolicy:{name:"informativa sulla privacy",text:"Per saperne di più, legga la nostra {privacyPolicy}."},title:"Servizi che desideriamo utilizzare"},consentNotice:{changeDescription:"Ci sono stati dei cambiamenti rispetto alla sua ultima visita, la preghiamo di rinnovare il suo consenso.",description:"Salve, possiamo attivare alcuni servizi aggiuntivi per {purposes}? Può sempre modificare o ritirare il suo consenso in un secondo momento.",imprint:{name:"impronta"},learnMore:"Lasciatemi scegliere",privacyPolicy:{name:"informativa sulla privacy"},testing:"Modalità di test!"},contextualConsent:{acceptAlways:"Sempre",acceptOnce:"Sì",description:"Vuole caricare contenuti esterni forniti da {title}?"},decline:"Rifiuto",ok:"Va bene così",poweredBy:"Realizzato con Klaro!",privacyPolicy:{name:"informativa sulla privacy",text:"Per saperne di più, legga la nostra {privacyPolicy}."},purposeItem:{service:"servizio",services:"servizi"},purposes:{advertising:{description:"Questi servizi elaborano le informazioni personali per mostrarle annunci pubblicitari personalizzati o basati su interessi.",title:"Pubblicità"},functional:{description:"Questi servizi sono essenziali per il corretto funzionamento di questo sito web. Non può disattivarli qui perché altrimenti il servizio non funzionerebbe correttamente.\n",title:"Fornitura di servizi"},marketing:{description:"Questi servizi elaborano le informazioni personali per mostrarle contenuti rilevanti su prodotti, servizi o argomenti che potrebbero interessarla.",title:"Marketing"},performance:{description:"Questi servizi elaborano le informazioni personali per ottimizzare il servizio offerto da questo sito web.\n",title:"Ottimizzazione delle prestazioni"}},save:"Salva",service:{disableAll:{description:"Utilizzi questo interruttore per attivare o disattivare tutti i servizi.",title:"Attivare o disattivare tutti i servizi"},optOut:{description:"Questo servizio è caricato di default (ma è possibile scegliere di non usufruirne)",title:"(opt-out)"},purpose:"Scopo dell",purposes:"Finalità",required:{description:"Questo servizio è sempre richiesto",title:"(sempre richiesto)"}}}},function(e,t){e.exports={acceptAll:"Accepteer alle",acceptSelected:"Geselecteerde",close:"Sluit",consentModal:{description:"Hier kunt u de diensten die wij op deze website willen gebruiken beoordelen en aanpassen. U heeft de leiding! Schakel de diensten naar eigen inzicht in of uit.",privacyPolicy:{name:"privacybeleid",text:"Voor meer informatie kunt u ons {privacyPolicy} lezen."},title:"Diensten die we graag willen gebruiken"},consentNotice:{changeDescription:"Er waren veranderingen sinds uw laatste bezoek, gelieve uw toestemming te hernieuwen.",description:"Hallo, kunnen wij u een aantal extra diensten aanbieden voor {purposes}? U kunt uw toestemming later altijd nog wijzigen of intrekken.",imprint:{name:"impressum"},learnMore:"Laat me kiezen",privacyPolicy:{name:"privacybeleid"},testing:"Testmodus!"},contextualConsent:{acceptAlways:"Altijd",acceptOnce:"Ja",description:"Wilt u externe content laden die door {title} wordt aangeleverd ?"},decline:"Ik weiger",ok:"Dat is oké",poweredBy:"Gerealiseerd met Klaro!",privacyPolicy:{name:"privacybeleid",text:"Voor meer informatie kunt u ons {privacyPolicy} lezen."},purposeItem:{service:"service",services:"diensten"},purposes:{advertising:{description:"Deze diensten verwerken persoonlijke informatie om u gepersonaliseerde of op interesse gebaseerde advertenties te tonen.",title:"Reclame"},functional:{description:"Deze diensten zijn essentieel voor het correct functioneren van deze website. U kunt ze hier niet uitschakelen omdat de dienst anders niet correct zou werken.\n",title:"Dienstverlening"},marketing:{description:"Deze diensten verwerken persoonlijke informatie om u relevante inhoud te tonen over producten, diensten of onderwerpen waarin u geïnteresseerd zou kunnen zijn.",title:"Marketing"},performance:{description:"Deze diensten verwerken persoonlijke informatie om de service die deze website biedt te optimaliseren.\n",title:"Optimalisatie van de prestaties"}},save:"Opslaan",service:{disableAll:{description:"Gebruik deze schakelaar om alle diensten in of uit te schakelen.",title:"Alle diensten in- of uitschakelen"},optOut:{description:"Deze diensten worden standaard geladen (maar u kunt zich afmelden)",title:"(opt-out)"},purpose:"Verwerkingsdoel",purposes:"Verwerkingsdoeleinden",required:{description:"Deze diensten zijn altijd nodig",title:"(altijd nodig)"}}}},function(e,t){e.exports={acceptAll:"Godtar alle",acceptSelected:"Godtar valgt",service:{disableAll:{description:"Bruk denne for å skru av/på alle apper.",title:"Bytt alle apper"},optOut:{description:"Denne appen er lastet som standard (men du kan skru det av)",title:"(opt-out)"},purpose:"Årsak",purposes:"Årsaker",required:{description:"Denne applikasjonen er alltid påkrevd",title:"(alltid påkrevd)"}},close:"",close_en:"Close",consentModal:{description:"Her kan du se og velge hvilken informasjon vi samler inn om deg.",privacyPolicy:{name:"personvernerklæring",text:"For å lære mer, vennligst les vår {privacyPolicy}."},title:"Informasjon vi samler inn"},consentNotice:{changeDescription:"Det har skjedd endringer siden ditt siste besøk, vennligst oppdater ditt samtykke.",description:"Vi samler inn og prosesserer din personlige informasjon av følgende årsaker: {purposes}.",imprint:{name:"",name_en:"imprint"},learnMore:"Lær mer",privacyPolicy:{name:"personvernerklæring"}},decline:"Avslå",ok:"OK",poweredBy:"Laget med Klaro!",purposeItem:{service:"",services:""},save:"Opslaan"}},function(e,t){e.exports={acceptAll:"",acceptAll_en:"Accept all",acceptSelected:"",acceptSelected_en:"Accept selected",service:{disableAll:{description:"Utilizați acest switch pentru a activa/dezactiva toate aplicațiile.",title:"Comutați între toate aplicațiile"},optOut:{description:"Această aplicație este încărcată în mod implicit (dar puteți renunța)",title:"(opt-out)"},purpose:"Scop",purposes:"Scopuri",required:{description:"Această aplicație este întotdeauna necesară",title:"(întotdeauna necesar)"}},close:"",close_en:"Close",consentModal:{description:"Aici puteți vedea și personaliza informațiile pe care le colectăm despre dvs.",privacyPolicy:{name:"politica privacy",text:"Pentru a afla mai multe, vă rugăm să citiți {privacyPolicy}."},title:"Informațiile pe care le colectăm"},consentNotice:{changeDescription:"Au existat modificări de la ultima vizită, vă rugăm să actualizați consimțământul.",description:"Colectăm și procesăm informațiile dvs. personale în următoarele scopuri: {purposes}.",imprint:{name:"",name_en:"imprint"},learnMore:"Află mai multe",privacyPolicy:{name:"politica privacy"}},decline:"Renunță",ok:"OK",poweredBy:"Realizat de Klaro!",purposeItem:{service:"",services:""},save:"Salvează"}},function(e,t){e.exports={acceptAll:"",acceptAll_en:"Accept all",acceptSelected:"",acceptSelected_en:"Accept selected",service:{disableAll:{description:"Koristite ovaj prekidač da omogućite/onesposobite sve aplikacije odjednom.",title:"Izmeni sve"},optOut:{description:"Ova aplikacija je učitana automatski (ali je možete onesposobiti)",title:"(onesposobite)"},purpose:"Svrha",purposes:"Svrhe",required:{description:"Ova aplikacija je uvek neophodna",title:"(neophodna)"}},close:"Zatvori",consentModal:{description:"Ovde možete videti i podesiti informacije koje prikupljamo o Vama.",privacyPolicy:{name:"politiku privatnosti",text:"Za više informacije pročitajte našu {privacyPolicy}."},title:"Informacije koje prikupljamo"},consentNotice:{changeDescription:"Došlo je do promena od Vaše poslednje posete, molimo Vas da ažurirate svoja odobrenja.",description:"Mi prikupljamo i procesiramo Vaše lične podatke radi sledećeg: {purposes}.",imprint:{name:"",name_en:"imprint"},learnMore:"Saznajte više",privacyPolicy:{name:"politiku privatnosti"}},decline:"Odbij",ok:"U redu",poweredBy:"Pokreće Klaro!",purposeItem:{service:"",services:""},save:"Sačuvaj"}},function(e,t){e.exports={consentModal:{title:"Информације које прикупљамо",description:"Овде можете видет и подесити информације које прикупљамо о Вама.\n",privacyPolicy:{name:"политику приватности",text:"За више информација прочитајте нашу {privacyPolicy}.\n"}},consentNotice:{changeDescription:"Дошло је до промена од Ваше последнје посете, молимо Вас да ажурирате своја одобрења.",description:"Ми прикупљамо и процесирамо Ваше личне податке ради следећег: {purposes}.\n",learnMore:"Сазнајте више",privacyPolicy:{name:"политику приватности"}},ok:"У реду",save:"Сачувај",decline:"Одбиј",close:"Затвори",service:{disableAll:{title:"Измени све",description:"Користите овај прекидач да омогућите/онеспособите све апликације одједном."},optOut:{title:"(онеспособите)",description:"Ова апликација је учитана аутоматски (али је можете онеспособити)"},required:{title:"(неопходна)",description:"Ова апликација је увек неопходна."},purposes:"Сврхе",purpose:"Сврха"},poweredBy:"Покреће Кларо!"}},function(e,t){e.exports={acceptAll:"Acceptera alla",acceptSelected:"Acceptera markerat",service:{disableAll:{description:"Använd detta reglage för att aktivera/avaktivera samtliga appar.",title:"Ändra för alla appar"},optOut:{description:"Den här appen laddas som standardinställning (men du kan avaktivera den)",title:"(Avaktivera)"},purpose:"Syfte",purposes:"Syften",required:{description:"Den här applikationen krävs alltid",title:"(Krävs alltid)"}},close:"Stäng",consentModal:{description:"Här kan du se och anpassa vilken information vi samlar om dig.",privacyPolicy:{name:"Integritetspolicy",text:"För att veta mer, läs vår {privacyPolicy}."},title:"Information som vi samlar"},consentNotice:{changeDescription:"Det har skett förändringar sedan ditt senaste besök, var god uppdatera ditt medgivande.",description:"Vi samlar och bearbetar din personliga data i följande syften: {purposes}.",imprint:{name:"",name_en:"imprint"},learnMore:"Läs mer",privacyPolicy:{name:"Integritetspolicy"}},decline:"Avböj",ok:"OK",poweredBy:"Körs på Klaro!",purposeItem:{service:"",services:""},save:"Spara"}},function(e,t){e.exports={acceptAll:"",acceptAll_en:"Accept all",acceptSelected:"",acceptSelected_en:"Accept selected",service:{disableAll:{description:"Toplu açma/kapama için bu düğmeyi kullanabilirsin.",title:"Tüm uygulamaları aç/kapat"},optOut:{description:"Bu uygulama varsayılanda yüklendi (ancak iptal edebilirsin)",title:"(isteğe bağlı)"},purpose:"Amaç",purposes:"Amaçlar",required:{description:"Bu uygulama her zaman gerekli",title:"(her zaman gerekli)"}},close:"Kapat",consentModal:{description:"Hakkınızda topladığımız bilgileri burada görebilir ve özelleştirebilirsiniz.",privacyPolicy:{name:"Gizlilik Politikası",text:"Daha fazlası için lütfen {privacyPolicy} sayfamızı okuyun."},title:"Sakladığımız bilgiler"},consentNotice:{changeDescription:"Son ziyaretinizden bu yana değişiklikler oldu, lütfen seçiminizi güncelleyin.",description:"Kişisel bilgilerinizi aşağıdaki amaçlarla saklıyor ve işliyoruz: {purposes}.",imprint:{name:"",name_en:"imprint"},learnMore:"Daha fazla bilgi",privacyPolicy:{name:"Gizlilik Politikası"}},decline:"Reddet",ok:"Tamam",poweredBy:"Klaro tarafından geliştirildi!",purposeItem:{service:"",services:""},save:"Kaydet"}},function(e,t){e.exports={acceptAll:"Zaakceptować wszystkie",acceptSelected:"Zaakceptować wybrany",close:"Blisko",consentModal:{description:"Tutaj mogą Państwo ocenić i dostosować usługi, z których chcielibyśmy skorzystać na tej stronie. Jesteście Państwo odpowiedzialni! Mogą Państwo włączać lub wyłączać usługi według własnego uznania.",privacyPolicy:{name:"polityka prywatności",text:"Aby dowiedzieć się więcej, prosimy o zapoznanie się z naszą {privacyPolicy}."},title:"Usługi, z których chcielibyśmy skorzystać"},consentNotice:{changeDescription:"Od czasu ostatniej wizyty nastąpiły zmiany, prosimy o odnowienie zgody.",description:"Witam! Czy możemy włączyć dodatkowe usługi dla {purposes}? W każdej chwili mogą Państwo później zmienić lub wycofać swoją zgodę.",imprint:{name:"odcisk"},learnMore:"Pozwól mi wybrać",privacyPolicy:{name:"polityka prywatności"},testing:"Tryb testowy!"},contextualConsent:{acceptAlways:"Zawsze",acceptOnce:"Tak",description:"Czy chcą Państwo załadować treści zewnętrzne dostarczane przez {title}?"},decline:"Odmawiam",ok:"To jest ok.",poweredBy:"Zrealizowane z Klaro!",privacyPolicy:{name:"polityka prywatności",text:"Aby dowiedzieć się więcej, prosimy o zapoznanie się z naszą {privacyPolicy}."},purposeItem:{service:"usługa",services:"usług"},purposes:{advertising:{description:"Usługi te przetwarzają dane osobowe w celu pokazania Państwu spersonalizowanych lub opartych na zainteresowaniach ogłoszeń.",title:"Reklama"},functional:{description:"Usługi te są niezbędne do prawidłowego funkcjonowania niniejszej strony internetowej. Nie mogą Państwo ich tutaj wyłączyć, ponieważ w przeciwnym razie usługa nie działałaby prawidłowo.\n",title:"Świadczenie usług"},marketing:{description:"Usługi te przetwarzają dane osobowe w celu pokazania Państwu istotnych treści dotyczących produktów, usług lub tematów, którymi mogą być Państwo zainteresowani.",title:"Marketing"},performance:{description:"Usługi te przetwarzają dane osobowe w celu optymalizacji usług oferowanych przez tę stronę.\n",title:"Optymalizacja wydajności"}},save:"Z wyjątkiem",service:{disableAll:{description:"Za pomocą tego przełącznika można włączać lub wyłączać wszystkie usługi.",title:"Włączać lub wyłączać wszystkie usługi"},optOut:{description:"Ta usługa jest domyślnie załadowana (ale mogą Państwo z niej zrezygnować)",title:"(opt-out)"},purpose:"Cel",purposes:"Cele",required:{description:"Usługi te są zawsze wymagane",title:"(zawsze wymagane)"}}}},function(e,t){e.exports={acceptAll:"Принять всё",acceptSelected:"Принять выбранные",service:{disableAll:{description:"Используйте этот переключатель, чтобы включить/отключить все приложения.",title:"Переключить все приложения"},optOut:{description:"Это приложение включено по умолчанию (но вы можете отказаться)",title:"(отказаться)"},purpose:"Намерение",purposes:"Намерения",required:{description:"Это обязательное приложение",title:"(всегда обязательный)"}},close:"Закрыть",consentModal:{description:"Здесь вы можете просмотреть и настроить, какую информацию о вас мы храним.",privacyPolicy:{name:"Соглашение",text:"Чтобы узнать больше, пожалуйста, прочитайте наше {privacyPolicy}."},title:"Информация, которую мы сохраняем"},consentNotice:{changeDescription:"Со времени вашего последнего визита произошли изменения, обновите своё согласие.",description:"Мы собираем и обрабатываем вашу личную информацию для следующих целей: {purposes}.",imprint:{name:"",name_en:"imprint"},learnMore:"Настроить",privacyPolicy:{name:"политика конфиденциальности"}},decline:"Отклонить",ok:"Принять",poweredBy:"Работает на Кларо!",purposeItem:{service:"",services:""},save:"Сохранить"}},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){var o=n(2),r=n(67),i=o.WeakMap;e.exports="function"==typeof i&&/native code/.test(r(i))},function(e,t,n){var o=n(8),r=n(16),i=n(9),a=n(45);e.exports=o?Object.defineProperties:function(e,t){i(e);for(var n,o=a(t),c=o.length,s=0;c>s;)r.f(e,n=o[s++],t[n]);return e}},function(e,t,n){var o=n(18),r=n(56).f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return a&&"[object Window]"==i.call(e)?function(e){try{return r(e)}catch(e){return a.slice()}}(e):r(o(e))}},function(e,t,n){"use strict";var o=n(0),r=n(47).find,i=n(75),a=n(36),c=!0,s=a("find");"find"in[]&&Array(1).find((function(){c=!1})),o({target:"Array",proto:!0,forced:c||!s},{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),i("find")},function(e,t,n){"use strict";var o=n(48),r=n(23),i=n(112),a=n(113),c=n(19),s=n(60),l=n(114);e.exports=function(e){var t,n,u,p,f,d,m=r(e),v="function"==typeof this?this:Array,y=arguments.length,h=y>1?arguments[1]:void 0,b=void 0!==h,g=l(m),k=0;if(b&&(h=o(h,y>2?arguments[2]:void 0,2)),null==g||v==Array&&a(g))for(n=new v(t=c(m.length));t>k;k++)d=b?h(m[k],k):m[k],s(n,k,d);else for(f=(p=g.call(m)).next,n=new v;!(u=f.call(p)).done;k++)d=b?i(p,h,[u.value,k],!0):u.value,s(n,k,d);return n.length=k,n}},function(e,t,n){"use strict";var o=n(116).IteratorPrototype,r=n(44),i=n(42),a=n(46),c=n(49),s=function(){return this};e.exports=function(e,t,n){var l=t+" Iterator";return e.prototype=r(o,{next:i(1,n)}),a(e,l,!1,!0),c[l]=s,e}},function(e,t,n){var o=n(4);e.exports=function(e){if(!o(e)&&null!==e)throw TypeError("Can't set "+String(e)+" as a prototype");return e}},function(e,t,n){var o=n(1);e.exports=!o((function(){return Object.isExtensible(Object.preventExtensions({}))}))},function(e,t,n){"use strict";var o=n(77),r=n(115);e.exports=o?{}.toString:function(){return"[object "+r(this)+"]"}},function(e,t,n){"use strict";var o=n(35),r=n(4),i=[].slice,a={},c=function(e,t,n){if(!(t in a)){for(var o=[],r=0;r<t;r++)o[r]="a["+r+"]";a[t]=Function("C,a","return new C("+o.join(",")+")")}return a[t](e,n)};e.exports=Function.bind||function(e){var t=o(this),n=i.call(arguments,1),a=function(){var o=n.concat(i.call(arguments));return this instanceof a?c(t,o.length,o):t.apply(e,o)};return r(t.prototype)&&(a.prototype=t.prototype),a}},function(e,t,n){var o=n(0),r=n(2),i=n(74),a=[].slice,c=function(e){return function(t,n){var o=arguments.length>2,r=o?a.call(arguments,2):void 0;return e(o?function(){("function"==typeof t?t:Function(t)).apply(this,r)}:t,n)}};o({global:!0,bind:!0,forced:/MSIE .\./.test(i)},{setTimeout:c(r.setTimeout),setInterval:c(r.setInterval)})},function(e,t,n){"use strict";var o=n(172);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,i,a){if(a!==o){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";var o=n(8),r=n(1),i=n(45),a=n(71),c=n(51),s=n(23),l=n(52),u=Object.assign,p=Object.defineProperty;e.exports=!u||r((function(){if(o&&1!==u({b:1},u(p({},"a",{enumerable:!0,get:function(){p(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},n=Symbol();return e[n]=7,"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),7!=u({},e)[n]||"abcdefghijklmnopqrst"!=i(u({},t)).join("")}))?function(e,t){for(var n=s(e),r=arguments.length,u=1,p=a.f,f=c.f;r>u;)for(var d,m=l(arguments[u++]),v=p?i(m).concat(p(m)):i(m),y=v.length,h=0;y>h;)d=v[h++],o&&!f.call(m,d)||(n[d]=m[d]);return n}:u},function(e,t,n){"use strict";var o,r=n(0),i=n(27).f,a=n(19),c=n(95),s=n(26),l=n(96),u=n(33),p="".endsWith,f=Math.min,d=l("endsWith");r({target:"String",proto:!0,forced:!!(u||d||(o=i(String.prototype,"endsWith"),!o||o.writable))&&!d},{endsWith:function(e){var t=String(s(this));c(e);var n=arguments.length>1?arguments[1]:void 0,o=a(t.length),r=void 0===n?o:f(a(n),o),i=String(e);return p?p.call(t,i,r):t.slice(r-i.length,r)===i}})},function(e,t,n){"use strict";var o=n(90),r=n(9),i=n(19),a=n(26),c=n(92),s=n(93);o("match",1,(function(e,t,n){return[function(t){var n=a(this),o=null==t?void 0:t[e];return void 0!==o?o.call(t,n):new RegExp(t)[e](String(n))},function(e){var o=n(t,e,this);if(o.done)return o.value;var a=r(e),l=String(this);if(!a.global)return s(a,l);var u=a.unicode;a.lastIndex=0;for(var p,f=[],d=0;null!==(p=s(a,l));){var m=String(p[0]);f[d]=m,""===m&&(a.lastIndex=c(l,i(a.lastIndex),u)),d++}return 0===d?null:f}]}))},function(e,t,n){var o=n(8),r=n(45),i=n(18),a=n(51).f,c=function(e){return function(t){for(var n,c=i(t),s=r(c),l=s.length,u=0,p=[];l>u;)n=s[u++],o&&!a.call(c,n)||p.push(e?[n,c[n]]:c[n]);return p}};e.exports={entries:c(!0),values:c(!1)}},function(e,t,n){"use strict";var o=n(0),r=n(69).includes,i=n(75);o({target:"Array",proto:!0,forced:!n(36)("indexOf",{ACCESSORS:!0,1:0})},{includes:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),i("includes")},function(e,t,n){"use strict";var o=n(0),r=n(95),i=n(26);o({target:"String",proto:!0,forced:!n(96)("includes")},{includes:function(e){return!!~String(i(this)).indexOf(r(e),arguments.length>1?arguments[1]:void 0)}})},function(e,t,n){"use strict";var o,r,i,a,c=n(0),s=n(33),l=n(2),u=n(34),p=n(180),f=n(22),d=n(122),m=n(46),v=n(85),y=n(4),h=n(35),b=n(84),g=n(28),k=n(67),_=n(83),w=n(78),x=n(125),S=n(131).set,j=n(181),O=n(182),A=n(183),z=n(133),P=n(184),E=n(32),C=n(58),D=n(3),T=n(73),I=D("species"),R="Promise",N=E.get,M=E.set,q=E.getterFor(R),U=p,L=l.TypeError,F=l.document,H=l.process,W=u("fetch"),B=z.f,K=B,V="process"==g(H),$=!!(F&&F.createEvent&&l.dispatchEvent),G=C(R,(function(){if(!(k(U)!==String(U))){if(66===T)return!0;if(!V&&"function"!=typeof PromiseRejectionEvent)return!0}if(s&&!U.prototype.finally)return!0;if(T>=51&&/native code/.test(U))return!1;var e=U.resolve(1),t=function(e){e((function(){}),(function(){}))};return(e.constructor={})[I]=t,!(e.then((function(){}))instanceof t)})),Z=G||!w((function(e){U.all(e).catch((function(){}))})),Y=function(e){var t;return!(!y(e)||"function"!=typeof(t=e.then))&&t},Q=function(e,t,n){if(!t.notified){t.notified=!0;var o=t.reactions;j((function(){for(var r=t.value,i=1==t.state,a=0;o.length>a;){var c,s,l,u=o[a++],p=i?u.ok:u.fail,f=u.resolve,d=u.reject,m=u.domain;try{p?(i||(2===t.rejection&&te(e,t),t.rejection=1),!0===p?c=r:(m&&m.enter(),c=p(r),m&&(m.exit(),l=!0)),c===u.promise?d(L("Promise-chain cycle")):(s=Y(c))?s.call(c,f,d):f(c)):d(r)}catch(e){m&&!l&&m.exit(),d(e)}}t.reactions=[],t.notified=!1,n&&!t.rejection&&X(e,t)}))}},J=function(e,t,n){var o,r;$?((o=F.createEvent("Event")).promise=t,o.reason=n,o.initEvent(e,!1,!0),l.dispatchEvent(o)):o={promise:t,reason:n},(r=l["on"+e])?r(o):"unhandledrejection"===e&&A("Unhandled promise rejection",n)},X=function(e,t){S.call(l,(function(){var n,o=t.value;if(ee(t)&&(n=P((function(){V?H.emit("unhandledRejection",o,e):J("unhandledrejection",e,o)})),t.rejection=V||ee(t)?2:1,n.error))throw n.value}))},ee=function(e){return 1!==e.rejection&&!e.parent},te=function(e,t){S.call(l,(function(){V?H.emit("rejectionHandled",e):J("rejectionhandled",e,t.value)}))},ne=function(e,t,n,o){return function(r){e(t,n,r,o)}},oe=function(e,t,n,o){t.done||(t.done=!0,o&&(t=o),t.value=n,t.state=2,Q(e,t,!0))},re=function(e,t,n,o){if(!t.done){t.done=!0,o&&(t=o);try{if(e===n)throw L("Promise can't be resolved itself");var r=Y(n);r?j((function(){var o={done:!1};try{r.call(n,ne(re,e,o,t),ne(oe,e,o,t))}catch(n){oe(e,o,n,t)}})):(t.value=n,t.state=1,Q(e,t,!1))}catch(n){oe(e,{done:!1},n,t)}}};G&&(U=function(e){b(this,U,R),h(e),o.call(this);var t=N(this);try{e(ne(re,this,t),ne(oe,this,t))}catch(e){oe(this,t,e)}},(o=function(e){M(this,{type:R,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=d(U.prototype,{then:function(e,t){var n=q(this),o=B(x(this,U));return o.ok="function"!=typeof e||e,o.fail="function"==typeof t&&t,o.domain=V?H.domain:void 0,n.parent=!0,n.reactions.push(o),0!=n.state&&Q(this,n,!1),o.promise},catch:function(e){return this.then(void 0,e)}}),r=function(){var e=new o,t=N(e);this.promise=e,this.resolve=ne(re,e,t),this.reject=ne(oe,e,t)},z.f=B=function(e){return e===U||e===i?new r(e):K(e)},s||"function"!=typeof p||(a=p.prototype.then,f(p.prototype,"then",(function(e,t){var n=this;return new U((function(e,t){a.call(n,e,t)})).then(e,t)}),{unsafe:!0}),"function"==typeof W&&c({global:!0,enumerable:!0,forced:!0},{fetch:function(e){return O(U,W.apply(l,arguments))}}))),c({global:!0,wrap:!0,forced:G},{Promise:U}),m(U,R,!1,!0),v(R),i=u(R),c({target:R,stat:!0,forced:G},{reject:function(e){var t=B(this);return t.reject.call(void 0,e),t.promise}}),c({target:R,stat:!0,forced:s||G},{resolve:function(e){return O(s&&this===i?U:this,e)}}),c({target:R,stat:!0,forced:Z},{all:function(e){var t=this,n=B(t),o=n.resolve,r=n.reject,i=P((function(){var n=h(t.resolve),i=[],a=0,c=1;_(e,(function(e){var s=a++,l=!1;i.push(void 0),c++,n.call(t,e).then((function(e){l||(l=!0,i[s]=e,--c||o(i))}),r)})),--c||o(i)}));return i.error&&r(i.value),n.promise},race:function(e){var t=this,n=B(t),o=n.reject,r=P((function(){var r=h(t.resolve);_(e,(function(e){r.call(t,e).then(n.resolve,o)}))}));return r.error&&o(r.value),n.promise}})},function(e,t,n){var o=n(2);e.exports=o.Promise},function(e,t,n){var o,r,i,a,c,s,l,u,p=n(2),f=n(27).f,d=n(28),m=n(131).set,v=n(132),y=p.MutationObserver||p.WebKitMutationObserver,h=p.process,b=p.Promise,g="process"==d(h),k=f(p,"queueMicrotask"),_=k&&k.value;_||(o=function(){var e,t;for(g&&(e=h.domain)&&e.exit();r;){t=r.fn,r=r.next;try{t()}catch(e){throw r?a():i=void 0,e}}i=void 0,e&&e.enter()},g?a=function(){h.nextTick(o)}:y&&!v?(c=!0,s=document.createTextNode(""),new y(o).observe(s,{characterData:!0}),a=function(){s.data=c=!c}):b&&b.resolve?(l=b.resolve(void 0),u=l.then,a=function(){u.call(l,o)}):a=function(){m.call(p,o)}),e.exports=_||function(e){var t={fn:e,next:void 0};i&&(i.next=t),r||(r=t,a()),i=t}},function(e,t,n){var o=n(9),r=n(4),i=n(133);e.exports=function(e,t){if(o(e),r(t)&&t.constructor===e)return t;var n=i.f(e);return(0,n.resolve)(t),n.promise}},function(e,t,n){var o=n(2);e.exports=function(e,t){var n=o.console;n&&n.error&&(1===arguments.length?n.error(e):n.error(e,t))}},function(e,t){e.exports=function(e){try{return{error:!1,value:e()}}catch(e){return{error:!0,value:e}}}},function(e,t,n){var o=n(186),r=n(187);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={attributes:{"data-context":"klaro-styles"},insert:"head",singleton:!1};o(r,i);e.exports=r.locals||{}},function(e,t,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},o=[],r=0;r<e.length;r++){var i=e[r],s=t.base?i[0]+t.base:i[0],l=n[s]||0,u="".concat(s," ").concat(l);n[s]=l+1;var p=c(u),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==p?(a[p].references++,a[p].updater(f)):a.push({identifier:u,updater:y(f,t),references:1}),o.push(u)}return o}function l(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u,p=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function f(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=p(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function d(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var m=null,v=0;function y(e,t){var n,o,r;if(t.singleton){var i=v++;n=m||(m=l(t)),o=f.bind(null,n,i,!1),r=f.bind(null,n,i,!0)}else n=l(t),o=d.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=c(n[o]);a[r].references--}for(var i=s(e,t),l=0;l<n.length;l++){var u=c(n[l]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}n=i}}}},function(e,t,n){(t=n(188)(!1)).push([e.i,".klaro{font-family:inherit;font-family:var(--font-family, inherit);font-size:14px;font-size:var(--font-size, 14px)}.klaro button{font-family:inherit;font-family:var(--font-family, inherit);font-size:14px;font-size:var(--font-size, 14px)}.klaro.cm-as-context-notice{height:100%;padding-bottom:12px;padding-top:12px}.klaro .cookie-modal .cm-switch-container,.klaro .context-notice .cm-switch-container,.klaro .cookie-notice .cm-switch-container{border-bottom-style:solid;border-bottom-style:var(--border-style, solid);border-bottom-width:1px;border-bottom-width:var(--border-width, 1px);border-bottom-color:#c8c8c8;border-bottom-color:var(--light2, #c8c8c8);display:block;position:relative;padding:10px;padding-left:66px;line-height:20px;vertical-align:middle;min-height:40px}.klaro .cookie-modal .cm-switch-container:last-child,.klaro .context-notice .cm-switch-container:last-child,.klaro .cookie-notice .cm-switch-container:last-child{border-bottom:0}.klaro .cookie-modal .cm-switch-container:first-child,.klaro .context-notice .cm-switch-container:first-child,.klaro .cookie-notice .cm-switch-container:first-child{margin-top:0}.klaro .cookie-modal .cm-switch-container p,.klaro .context-notice .cm-switch-container p,.klaro .cookie-notice .cm-switch-container p{margin-top:0}.klaro .cookie-modal .cm-switch,.klaro .context-notice .cm-switch,.klaro .cookie-notice .cm-switch{position:relative;display:inline-block;width:50px;height:30px}.klaro .cookie-modal .cm-list-input:checked+.cm-list-label .slider,.klaro .context-notice .cm-list-input:checked+.cm-list-label .slider,.klaro .cookie-notice .cm-list-input:checked+.cm-list-label .slider{background-color:#1a936f;background-color:var(--green1, #1a936f)}.klaro .cookie-modal .cm-list-input.half-checked:checked+.cm-list-label .slider,.klaro .context-notice .cm-list-input.half-checked:checked+.cm-list-label .slider,.klaro .cookie-notice .cm-list-input.half-checked:checked+.cm-list-label .slider{background-color:#1a936f;background-color:var(--green1, #1a936f);opacity:0.6}.klaro .cookie-modal .cm-list-input.half-checked:checked+.cm-list-label .slider::before,.klaro .context-notice .cm-list-input.half-checked:checked+.cm-list-label .slider::before,.klaro .cookie-notice .cm-list-input.half-checked:checked+.cm-list-label .slider::before{-ms-transform:translateX(10px);transform:translateX(10px)}.klaro .cookie-modal .cm-list-input.only-required+.cm-list-label .slider,.klaro .context-notice .cm-list-input.only-required+.cm-list-label .slider,.klaro .cookie-notice .cm-list-input.only-required+.cm-list-label .slider{background-color:#24cc9a;background-color:var(--green2, #24cc9a);opacity:0.8}.klaro .cookie-modal .cm-list-input.only-required+.cm-list-label .slider::before,.klaro .context-notice .cm-list-input.only-required+.cm-list-label .slider::before,.klaro .cookie-notice .cm-list-input.only-required+.cm-list-label .slider::before{-ms-transform:translateX(10px);transform:translateX(10px)}.klaro .cookie-modal .cm-list-input.required:checked+.cm-list-label .slider,.klaro .context-notice .cm-list-input.required:checked+.cm-list-label .slider,.klaro .cookie-notice .cm-list-input.required:checked+.cm-list-label .slider{background-color:#24cc9a;background-color:var(--green2, #24cc9a);opacity:0.8;cursor:not-allowed}.klaro .cookie-modal .slider,.klaro .context-notice .slider,.klaro .cookie-notice .slider{box-shadow:0 4px 6px 0 rgba(0,0,0,0.2),5px 5px 10px 0 rgba(0,0,0,0.19)}.klaro .cookie-modal .cm-list-input,.klaro .context-notice .cm-list-input,.klaro .cookie-notice .cm-list-input{position:absolute;top:0;left:0;opacity:0;width:50px;height:30px}.klaro .cookie-modal .cm-list-title,.klaro .context-notice .cm-list-title,.klaro .cookie-notice .cm-list-title{font-size:0.9em;font-weight:600}.klaro .cookie-modal .cm-list-description,.klaro .context-notice .cm-list-description,.klaro .cookie-notice .cm-list-description{color:#7c7c7c;color:var(--dark3, #7c7c7c);font-size:0.9em;padding-top:4px}.klaro .cookie-modal .cm-list-label .cm-switch,.klaro .context-notice .cm-list-label .cm-switch,.klaro .cookie-notice .cm-list-label .cm-switch{position:absolute;left:0}.klaro .cookie-modal .cm-list-label .slider,.klaro .context-notice .cm-list-label .slider,.klaro .cookie-notice .cm-list-label .slider{background-color:#f2f2f2;background-color:var(--white2, #f2f2f2);position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;transition:0.4s;width:50px;display:inline-block}.klaro .cookie-modal .cm-list-label .slider::before,.klaro .context-notice .cm-list-label .slider::before,.klaro .cookie-notice .cm-list-label .slider::before{background-color:#e6e6e6;background-color:var(--white3, #e6e6e6);position:absolute;content:'';height:20px;width:20px;left:5px;bottom:5px;transition:0.4s}.klaro .cookie-modal .cm-list-label .slider.round,.klaro .context-notice .cm-list-label .slider.round,.klaro .cookie-notice .cm-list-label .slider.round{border-radius:30px}.klaro .cookie-modal .cm-list-label .slider.round::before,.klaro .context-notice .cm-list-label .slider.round::before,.klaro .cookie-notice .cm-list-label .slider.round::before{border-radius:50%}.klaro .cookie-modal .cm-list-label input:focus+.slider,.klaro .context-notice .cm-list-label input:focus+.slider,.klaro .cookie-notice .cm-list-label input:focus+.slider{box-shadow-color:#48dfb2;box-shadow-color:var(--green3, #48dfb2);box-shadow:0 0 1px var(color, green3)}.klaro .cookie-modal .cm-list-label input:checked+.slider::before,.klaro .context-notice .cm-list-label input:checked+.slider::before,.klaro .cookie-notice .cm-list-label input:checked+.slider::before{-ms-transform:translateX(20px);transform:translateX(20px)}.klaro .cookie-modal .cm-list-input:focus+.cm-list-label .slider,.klaro .context-notice .cm-list-input:focus+.cm-list-label .slider,.klaro .cookie-notice .cm-list-input:focus+.cm-list-label .slider{box-shadow:0 4px 6px 0 rgba(125,125,125,0.2),5px 5px 10px 0 rgba(125,125,125,0.19)}.klaro .cookie-modal .cm-list-input:checked+.cm-list-label .slider::before,.klaro .context-notice .cm-list-input:checked+.cm-list-label .slider::before,.klaro .cookie-notice .cm-list-input:checked+.cm-list-label .slider::before{-ms-transform:translateX(20px);transform:translateX(20px)}.klaro .cookie-modal .slider,.klaro .context-notice .slider,.klaro .cookie-notice .slider{box-shadow:0 4px 6px 0 rgba(0,0,0,0.2),5px 5px 10px 0 rgba(0,0,0,0.19)}.klaro .cookie-modal a,.klaro .context-notice a,.klaro .cookie-notice a{color:#1a936f;color:var(--green1, #1a936f);text-decoration:none}.klaro .cookie-modal p,.klaro .cookie-modal strong,.klaro .cookie-modal h1,.klaro .cookie-modal h2,.klaro .cookie-modal ul,.klaro .cookie-modal li,.klaro .context-notice p,.klaro .context-notice strong,.klaro .context-notice h1,.klaro .context-notice h2,.klaro .context-notice ul,.klaro .context-notice li,.klaro .cookie-notice p,.klaro .cookie-notice strong,.klaro .cookie-notice h1,.klaro .cookie-notice h2,.klaro .cookie-notice ul,.klaro .cookie-notice li{color:#fafafa;color:var(--light1, #fafafa)}.klaro .cookie-modal p,.klaro .cookie-modal h1,.klaro .cookie-modal h2,.klaro .cookie-modal ul,.klaro .cookie-modal li,.klaro .context-notice p,.klaro .context-notice h1,.klaro .context-notice h2,.klaro .context-notice ul,.klaro .context-notice li,.klaro .cookie-notice p,.klaro .cookie-notice h1,.klaro .cookie-notice h2,.klaro .cookie-notice ul,.klaro .cookie-notice li{display:block;text-align:left;margin:0;padding:0;margin-top:0.7em}.klaro .cookie-modal h1,.klaro .cookie-modal h2,.klaro .cookie-modal h3,.klaro .cookie-modal h4,.klaro .cookie-modal h5,.klaro .cookie-modal h6,.klaro .context-notice h1,.klaro .context-notice h2,.klaro .context-notice h3,.klaro .context-notice h4,.klaro .context-notice h5,.klaro .context-notice h6,.klaro .cookie-notice h1,.klaro .cookie-notice h2,.klaro .cookie-notice h3,.klaro .cookie-notice h4,.klaro .cookie-notice h5,.klaro .cookie-notice h6{font-family:inherit;font-family:var(--title-font-family, inherit)}.klaro .cookie-modal .cm-link,.klaro .context-notice .cm-link,.klaro .cookie-notice .cm-link{margin-right:0.5em;vertical-align:middle}.klaro .cookie-modal .cm-btn,.klaro .context-notice .cm-btn,.klaro .cookie-notice .cm-btn{color:#fff;color:var(--button-text-color, #fff);background-color:#5c5c5c;background-color:var(--dark2, #5c5c5c);border-radius:4px;border-radius:var(--border-radius, 4px);padding:6px 10px;margin-right:.5em;border-style:none;padding:0.4em;font-size:1em;cursor:pointer}.klaro .cookie-modal .cm-btn:disabled,.klaro .context-notice .cm-btn:disabled,.klaro .cookie-notice .cm-btn:disabled{opacity:0.5}.klaro .cookie-modal .cm-btn.cm-btn-close,.klaro .context-notice .cm-btn.cm-btn-close,.klaro .cookie-notice .cm-btn.cm-btn-close{background-color:#c8c8c8;background-color:var(--light2, #c8c8c8)}.klaro .cookie-modal .cm-btn.cm-btn-success,.klaro .context-notice .cm-btn.cm-btn-success,.klaro .cookie-notice .cm-btn.cm-btn-success{background-color:#1a936f;background-color:var(--green1, #1a936f)}.klaro .cookie-modal .cm-btn.cm-btn-success-var,.klaro .context-notice .cm-btn.cm-btn-success-var,.klaro .cookie-notice .cm-btn.cm-btn-success-var{background-color:#24cc9a;background-color:var(--green2, #24cc9a)}.klaro .cookie-modal .cm-btn.cm-btn-info,.klaro .context-notice .cm-btn.cm-btn-info,.klaro .cookie-notice .cm-btn.cm-btn-info{background-color:#2581c4;background-color:var(--blue1, #2581c4)}.klaro .context-notice{border-radius:4px;border-radius:var(--border-radius, 4px);border-style:solid;border-style:var(--border-style, solid);border-width:1px;border-width:var(--border-width, 1px);border-color:#c8c8c8;border-color:var(--light2, #c8c8c8);background-color:#fafafa;background-color:var(--light1, #fafafa);display:flex;flex-direction:column;flex-wrap:wrap;align-items:center;justify-content:center;padding:12px;height:100%}.klaro .context-notice.cm-dark{background-color:#333;background-color:var(--dark1, #333);border-color:#5c5c5c;border-color:var(--dark2, #5c5c5c)}.klaro .context-notice.cm-dark p{color:#fafafa;color:var(--light1, #fafafa)}.klaro .context-notice.cm-dark p a{color:#459cdc;color:var(--blue2, #459cdc)}.klaro .context-notice p{color:#333;color:var(--dark1, #333);flex-grow:0;text-align:center;padding-top:0;margin-top:0}.klaro .context-notice p a{color:#24cc9a;color:var(--green2, #24cc9a)}.klaro .context-notice p.cm-buttons{margin-top:12px}.klaro .cookie-modal{width:100%;height:100%;position:fixed;overflow:hidden;left:0;top:0;z-index:1000}.klaro .cookie-modal.cm-embedded{position:relative;height:inherit;width:inherit;left:inherit;right:inherit;z-index:0}.klaro .cookie-modal.cm-embedded .cm-modal.cm-klaro{position:relative;-ms-transform:none;transform:none}.klaro .cookie-modal .cm-bg{background:rgba(0,0,0,0.5);height:100%;width:100%;position:fixed;top:0;left:0}.klaro .cookie-modal .cm-modal.cm-klaro{background-color:#333;background-color:var(--dark1, #333);color:#fafafa;color:var(--light1, #fafafa);z-index:1001;box-shadow:0 4px 6px 0 rgba(0,0,0,0.2),5px 5px 10px 0 rgba(0,0,0,0.19);width:100%;max-height:98%;top:50%;-ms-transform:translateY(-50%);transform:translateY(-50%);position:fixed;overflow:auto}@media (min-width: 660px){.klaro .cookie-modal .cm-modal.cm-klaro{border-radius:4px;border-radius:var(--border-radius, 4px);position:relative;margin:0 auto;max-width:640px;height:auto;width:auto}}.klaro .cookie-modal .cm-modal .hide{border-style:none;background:none;cursor:pointer;position:absolute;top:20px;right:20px;z-index:1}.klaro .cookie-modal .cm-modal .hide svg{stroke:#fafafa;stroke:var(--light1, #fafafa)}.klaro .cookie-modal .cm-modal .cm-footer{border-top-color:#5c5c5c;border-top-color:var(--dark2, #5c5c5c);border-top-width:1px;border-top-width:var(--border-width, 1px);border-top-style:solid;border-top-style:var(--border-style, solid);padding:1em}.klaro .cookie-modal .cm-modal .cm-footer-buttons{display:flex;flex-flow:row;justify-content:space-between}.klaro .cookie-modal .cm-modal .cm-footer .cm-powered-by{font-size:0.8em;padding-top:4px;text-align:right;padding-right:8px}.klaro .cookie-modal .cm-modal .cm-footer .cm-powered-by a{color:#5c5c5c;color:var(--dark2, #5c5c5c)}.klaro .cookie-modal .cm-modal .cm-header{border-bottom-width:1px;border-bottom-width:var(--border-width, 1px);border-bottom-style:solid;border-bottom-style:var(--border-style, solid);border-bottom-color:#5c5c5c;border-bottom-color:var(--dark2, #5c5c5c);padding:1em;padding-right:24px}.klaro .cookie-modal .cm-modal .cm-header h1{margin:0;font-size:2em;display:block}.klaro .cookie-modal .cm-modal .cm-header h1.title{padding-right:20px}.klaro .cookie-modal .cm-modal .cm-body{padding:1em}.klaro .cookie-modal .cm-modal .cm-body ul{display:block}.klaro .cookie-modal .cm-modal .cm-body span{display:inline-block;width:auto}.klaro .cookie-modal .cm-modal .cm-body ul.cm-services,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes{padding:0;margin:0}.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-purpose .cm-services .cm-caret,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose .cm-services .cm-caret{color:#a0a0a0;color:var(--light3, #a0a0a0)}.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-purpose .cm-services .cm-content,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose .cm-services .cm-content{margin-left:-40px;display:none}.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-purpose .cm-services .cm-content.expanded,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose .cm-services .cm-content.expanded{margin-top:10px;display:block}.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-service,.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-purpose,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-service,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose{position:relative;line-height:20px;vertical-align:middle;padding-left:60px;min-height:40px}.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-service:first-child,.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-purpose:first-child,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-service:first-child,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose:first-child{margin-top:0}.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-service p,.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-purpose p,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-service p,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose p{margin-top:0}.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-service p.purposes,.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-purpose p.purposes,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-service p.purposes,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose p.purposes{color:#a0a0a0;color:var(--light3, #a0a0a0);font-size:0.8em}.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-service.cm-toggle-all,.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-purpose.cm-toggle-all,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-service.cm-toggle-all,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose.cm-toggle-all{border-top-width:1px;border-top-width:var(--border-width, 1px);border-top-style:solid;border-top-style:var(--border-style, solid);border-top-color:#5c5c5c;border-top-color:var(--dark2, #5c5c5c);padding-top:1em}.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-service span.cm-list-title,.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-purpose span.cm-list-title,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-service span.cm-list-title,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose span.cm-list-title{font-weight:600}.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-service span.cm-opt-out,.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-service span.cm-required,.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-purpose span.cm-opt-out,.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-purpose span.cm-required,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-service span.cm-opt-out,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-service span.cm-required,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose span.cm-opt-out,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose span.cm-required{color:#5c5c5c;color:var(--dark2, #5c5c5c);padding-left:0.2em;font-size:0.8em}.klaro .cookie-notice:not(.cookie-modal-notice){background-color:#333;background-color:var(--dark1, #333);z-index:999;position:fixed;width:100%;bottom:0;right:0}@media (min-width: 1024px){.klaro .cookie-notice:not(.cookie-modal-notice){border-radius:4px;border-radius:var(--border-radius, 4px);position:fixed;position:var(--notice-position, fixed);right:20px;right:var(--notice-right, 20px);left:auto;left:var(--notice-left, auto);bottom:20px;bottom:var(--notice-bottom, 20px);top:auto;top:var(--notice-top, auto);max-width:400px;max-width:var(--notice-max-width, 400px);box-shadow:0 4px 6px 0 rgba(0,0,0,0.2),5px 5px 10px 0 rgba(0,0,0,0.19)}}@media (max-width: 1023px){.klaro .cookie-notice:not(.cookie-modal-notice){border-style:none;border-radius:0}}.klaro .cookie-notice:not(.cookie-modal-notice).cn-embedded{position:relative;height:inherit;width:inherit;left:inherit;right:inherit;bottom:inherit;z-index:0}.klaro .cookie-notice:not(.cookie-modal-notice).cn-embedded .cn-body{padding-top:0.5em}.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body{margin-bottom:0;margin-right:0;bottom:0;padding:1em;padding-top:0}.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body p{margin-bottom:0.5em}.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body p.cn-changes{text-decoration:underline}.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body .cn-learn-more{display:inline-block;flex-grow:1}.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body .cn-buttons{display:inline-block;margin-top:-0.5em}@media (max-width: 384px){.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body .cn-buttons{width:100%}}.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body .cn-buttons button.cm-btn{margin-top:0.5em}@media (max-width: 384px){.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body .cn-buttons button.cm-btn{width:calc(50% - .5em)}}.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body .cn-ok{margin-top:-0.5em;display:flex;flex-flow:row;flex-wrap:wrap;justify-content:right;align-items:baseline}.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body .cn-ok a,.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body .cn-ok div{margin-top:0.5em}.klaro .cookie-modal-notice{background-color:#333;background-color:var(--dark1, #333);color:#fafafa;color:var(--light1, #fafafa);z-index:1001;box-shadow:0 4px 6px 0 rgba(0,0,0,0.2),5px 5px 10px 0 rgba(0,0,0,0.19);width:100%;max-height:98%;top:50%;-ms-transform:translateY(-50%);transform:translateY(-50%);position:fixed;overflow:auto;padding:1em;padding-top:0.2em}@media (min-width: 400px){.klaro .cookie-modal-notice{border-radius:4px;border-radius:var(--border-radius, 4px);position:relative;margin:0 auto;max-width:400px;height:auto;width:auto}}.klaro .cookie-modal-notice .cn-ok{display:flex;flex-flow:row;justify-content:space-between;align-items:center;margin-top:1em}.klaro .cookie-notice-hidden{display:none !important}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(a=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),i=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([r]).join("\n")}var a,c,s;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);o&&r[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},function(e,t,n){"use strict";n.r(t),n.d(t,"updateConfig",(function(){return xt})),n.d(t,"getElementID",(function(){return Yn})),n.d(t,"getElement",(function(){return Qn})),n.d(t,"addEventListener",(function(){return Jn})),n.d(t,"getConfigTranslations",(function(){return eo})),n.d(t,"render",(function(){return no})),n.d(t,"renderContextualConsentNotices",(function(){return oo})),n.d(t,"validateConfig",(function(){return io})),n.d(t,"setup",(function(){return ao})),n.d(t,"show",(function(){return co})),n.d(t,"resetManagers",(function(){return lo})),n.d(t,"getManager",(function(){return uo})),n.d(t,"version",(function(){return po})),n.d(t,"language",(function(){return Ae})),n.d(t,"defaultConfig",(function(){return qn})),n.d(t,"defaultTranslations",(function(){return $n}));n(5),n(10),n(11),n(40),n(41),n(163),n(76),n(24),n(6),n(25),n(20),n(17),n(82),n(86),n(87),n(37),n(7),n(38),n(12),n(13),n(89),n(94),n(14);var o,r,i,a,c,s={},l=[],u=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function p(e,t){for(var n in t)e[n]=t[n];return e}function f(e){var t=e.parentNode;t&&t.removeChild(e)}function d(e,t,n){var o,r=arguments,i={};for(o in t)"key"!==o&&"ref"!==o&&(i[o]=t[o]);if(arguments.length>3)for(n=[n],o=3;o<arguments.length;o++)n.push(r[o]);if(null!=n&&(i.children=n),"function"==typeof e&&null!=e.defaultProps)for(o in e.defaultProps)void 0===i[o]&&(i[o]=e.defaultProps[o]);return m(e,i,t&&t.key,t&&t.ref,null)}function m(e,t,n,r,i){var a={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:i};return null==i&&(a.__v=a),o.vnode&&o.vnode(a),a}function v(e){return e.children}function y(e,t){this.props=e,this.context=t}function h(e,t){if(null==t)return e.__?h(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?h(e):null}function b(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return b(e)}}function g(e){(!e.__d&&(e.__d=!0)&&r.push(e)&&!k.__r++||a!==o.debounceRendering)&&((a=o.debounceRendering)||i)(k)}function k(){for(var e;k.__r=r.length;)e=r.sort((function(e,t){return e.__v.__b-t.__v.__b})),r=[],e.some((function(e){var t,n,o,r,i,a,c;e.__d&&(a=(i=(t=e).__v).__e,(c=t.__P)&&(n=[],(o=p({},i)).__v=o,r=z(c,i,o,t.__n,void 0!==c.ownerSVGElement,null,n,null==a?h(i):a),P(n,i),r!=a&&b(i)))}))}function _(e,t,n,o,r,i,a,c,u,p){var d,y,b,g,k,_,w,S=o&&o.__k||l,j=S.length;for(u==s&&(u=null!=a?a[0]:j?h(o,0):null),n.__k=[],d=0;d<t.length;d++)if(null!=(g=n.__k[d]=null==(g=t[d])||"boolean"==typeof g?null:"string"==typeof g||"number"==typeof g?m(null,g,null,null,g):Array.isArray(g)?m(v,{children:g},null,null,null):null!=g.__e||null!=g.__c?m(g.type,g.props,g.key,null,g.__v):g)){if(g.__=n,g.__b=n.__b+1,null===(b=S[d])||b&&g.key==b.key&&g.type===b.type)S[d]=void 0;else for(y=0;y<j;y++){if((b=S[y])&&g.key==b.key&&g.type===b.type){S[y]=void 0;break}b=null}k=z(e,g,b=b||s,r,i,a,c,u,p),(y=g.ref)&&b.ref!=y&&(w||(w=[]),b.ref&&w.push(b.ref,null,g),w.push(y,g.__c||k,g)),null!=k?(null==_&&(_=k),u=x(e,g,b,S,a,k,u),p||"option"!=n.type?"function"==typeof n.type&&(n.__d=u):e.value=""):u&&b.__e==u&&u.parentNode!=e&&(u=h(b))}if(n.__e=_,null!=a&&"function"!=typeof n.type)for(d=a.length;d--;)null!=a[d]&&f(a[d]);for(d=j;d--;)null!=S[d]&&D(S[d],S[d]);if(w)for(d=0;d<w.length;d++)C(w[d],w[++d],w[++d])}function w(e){return null==e||"boolean"==typeof e?[]:Array.isArray(e)?l.concat.apply([],e.map(w)):[e]}function x(e,t,n,o,r,i,a){var c,s,l;if(void 0!==t.__d)c=t.__d,t.__d=void 0;else if(r==n||i!=a||null==i.parentNode)e:if(null==a||a.parentNode!==e)e.appendChild(i),c=null;else{for(s=a,l=0;(s=s.nextSibling)&&l<o.length;l+=2)if(s==i)break e;e.insertBefore(i,a),c=a}return void 0!==c?c:i.nextSibling}function S(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]="number"==typeof n&&!1===u.test(t)?n+"px":null==n?"":n}function j(e,t,n,o,r){var i,a,c,s,l;if(r?"className"===t&&(t="class"):"class"===t&&(t="className"),"style"===t)if(i=e.style,"string"==typeof n)i.cssText=n;else{if("string"==typeof o&&(i.cssText="",o=null),o)for(s in o)n&&s in n||S(i,s,"");if(n)for(l in n)o&&n[l]===o[l]||S(i,l,n[l])}else"o"===t[0]&&"n"===t[1]?(a=t!==(t=t.replace(/Capture$/,"")),c=t.toLowerCase(),t=(c in e?c:t).slice(2),n?(o||e.addEventListener(t,O,a),(e.l||(e.l={}))[t]=n):e.removeEventListener(t,O,a)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&"download"!==t&&!r&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function O(e){this.l[e.type](o.event?o.event(e):e)}function A(e,t,n){var o,r;for(o=0;o<e.__k.length;o++)(r=e.__k[o])&&(r.__=e,r.__e&&("function"==typeof r.type&&r.__k.length>1&&A(r,t,n),t=x(n,r,r,e.__k,null,r.__e,t),"function"==typeof e.type&&(e.__d=t)))}function z(e,t,n,r,i,a,c,s,l){var u,f,d,m,h,b,g,k,w,x,S,j=t.type;if(void 0!==t.constructor)return null;(u=o.__b)&&u(t);try{e:if("function"==typeof j){if(k=t.props,w=(u=j.contextType)&&r[u.__c],x=u?w?w.props.value:u.__:r,n.__c?g=(f=t.__c=n.__c).__=f.__E:("prototype"in j&&j.prototype.render?t.__c=f=new j(k,x):(t.__c=f=new y(k,x),f.constructor=j,f.render=T),w&&w.sub(f),f.props=k,f.state||(f.state={}),f.context=x,f.__n=r,d=f.__d=!0,f.__h=[]),null==f.__s&&(f.__s=f.state),null!=j.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=p({},f.__s)),p(f.__s,j.getDerivedStateFromProps(k,f.__s))),m=f.props,h=f.state,d)null==j.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==j.getDerivedStateFromProps&&k!==m&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(k,x),!f.__e&&null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(k,f.__s,x)||t.__v===n.__v){f.props=k,f.state=f.__s,t.__v!==n.__v&&(f.__d=!1),f.__v=t,t.__e=n.__e,t.__k=n.__k,f.__h.length&&c.push(f),A(t,s,e);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(k,f.__s,x),null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(m,h,b)}))}f.context=x,f.props=k,f.state=f.__s,(u=o.__r)&&u(t),f.__d=!1,f.__v=t,f.__P=e,u=f.render(f.props,f.state,f.context),f.state=f.__s,null!=f.getChildContext&&(r=p(p({},r),f.getChildContext())),d||null==f.getSnapshotBeforeUpdate||(b=f.getSnapshotBeforeUpdate(m,h)),S=null!=u&&u.type==v&&null==u.key?u.props.children:u,_(e,Array.isArray(S)?S:[S],t,n,r,i,a,c,s,l),f.base=t.__e,f.__h.length&&c.push(f),g&&(f.__E=f.__=null),f.__e=!1}else null==a&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=E(n.__e,t,n,r,i,a,c,l);(u=o.diffed)&&u(t)}catch(e){t.__v=null,o.__e(e,t,n)}return t.__e}function P(e,t){o.__c&&o.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){o.__e(e,t.__v)}}))}function E(e,t,n,o,r,i,a,c){var u,p,f,d,m,v=n.props,y=t.props;if(r="svg"===t.type||r,null!=i)for(u=0;u<i.length;u++)if(null!=(p=i[u])&&((null===t.type?3===p.nodeType:p.localName===t.type)||e==p)){e=p,i[u]=null;break}if(null==e){if(null===t.type)return document.createTextNode(y);e=r?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,y.is&&{is:y.is}),i=null,c=!1}if(null===t.type)v!==y&&e.data!==y&&(e.data=y);else{if(null!=i&&(i=l.slice.call(e.childNodes)),f=(v=n.props||s).dangerouslySetInnerHTML,d=y.dangerouslySetInnerHTML,!c){if(null!=i)for(v={},m=0;m<e.attributes.length;m++)v[e.attributes[m].name]=e.attributes[m].value;(d||f)&&(d&&f&&d.__html==f.__html||(e.innerHTML=d&&d.__html||""))}(function(e,t,n,o,r){var i;for(i in n)"children"===i||"key"===i||i in t||j(e,i,null,n[i],o);for(i in t)r&&"function"!=typeof t[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===t[i]||j(e,i,t[i],n[i],o)})(e,y,v,r,c),d?t.__k=[]:(u=t.props.children,_(e,Array.isArray(u)?u:[u],t,n,o,"foreignObject"!==t.type&&r,i,a,s,c)),c||("value"in y&&void 0!==(u=y.value)&&u!==e.value&&j(e,"value",u,v.value,!1),"checked"in y&&void 0!==(u=y.checked)&&u!==e.checked&&j(e,"checked",u,v.checked,!1))}return e}function C(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){o.__e(e,n)}}function D(e,t,n){var r,i,a;if(o.unmount&&o.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||C(r,null,t)),n||"function"==typeof e.type||(n=null!=(i=e.__e)),e.__e=e.__d=void 0,null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){o.__e(e,t)}r.base=r.__P=null}if(r=e.__k)for(a=0;a<r.length;a++)r[a]&&D(r[a],t,n);null!=i&&f(i)}function T(e,t,n){return this.constructor(e,n)}function I(e,t,n){var r,i,a;o.__&&o.__(e,t),i=(r=n===c)?null:n&&n.__k||t.__k,e=d(v,null,[e]),a=[],z(t,(r?t:n||t).__k=e,i||s,s,void 0!==t.ownerSVGElement,n&&!r?[n]:i?null:t.childNodes.length?l.slice.call(t.childNodes):null,a,n||s,r),P(a,e)}o={__e:function(e,t){for(var n,o;t=t.__;)if((n=t.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(o=!0,n.setState(n.constructor.getDerivedStateFromError(e))),null!=n.componentDidCatch&&(o=!0,n.componentDidCatch(e)),o)return g(n.__E=n)}catch(t){e=t}throw e}},y.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=p({},this.state),"function"==typeof e&&(e=e(n,this.props)),e&&p(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),g(this))},y.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),g(this))},y.prototype.render=v,r=[],i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,k.__r=0,c=s;var R,N,M,q=0,U=[],L=o.__r,F=o.diffed,H=o.__c,W=o.unmount;function B(e,t){o.__h&&o.__h(N,e,q||t),q=0;var n=N.__H||(N.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function K(e){return q=1,V(X,e)}function V(e,t,n){var o=B(R++,2);return o.t=e,o.__c||(o.__c=N,o.__=[n?n(t):X(void 0,t),function(e){var t=o.t(o.__[0],e);o.__[0]!==t&&(o.__=[t,o.__[1]],o.__c.setState({}))}]),o.__}function $(e,t){var n=B(R++,3);!o.__s&&J(n.__H,t)&&(n.__=e,n.__H=t,N.__H.__h.push(n))}function G(){U.some((function(e){if(e.__P)try{e.__H.__h.forEach(Y),e.__H.__h.forEach(Q),e.__H.__h=[]}catch(t){return e.__H.__h=[],o.__e(t,e.__v),!0}})),U=[]}o.__r=function(e){L&&L(e),R=0;var t=(N=e.__c).__H;t&&(t.__h.forEach(Y),t.__h.forEach(Q),t.__h=[])},o.diffed=function(e){F&&F(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(1!==U.push(t)&&M===o.requestAnimationFrame||((M=o.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(o),Z&&cancelAnimationFrame(t),setTimeout(e)},o=setTimeout(n,100);Z&&(t=requestAnimationFrame(n))})(G))},o.__c=function(e,t){t.some((function(e){try{e.__h.forEach(Y),e.__h=e.__h.filter((function(e){return!e.__||Q(e)}))}catch(n){t.some((function(e){e.__h&&(e.__h=[])})),t=[],o.__e(n,e.__v)}})),H&&H(e,t)},o.unmount=function(e){W&&W(e);var t=e.__c;if(t&&t.__H)try{t.__H.__.forEach(Y)}catch(e){o.__e(e,t.__v)}};var Z="function"==typeof requestAnimationFrame;function Y(e){"function"==typeof e.u&&e.u()}function Q(e){e.u=e.__()}function J(e,t){return!e||t.some((function(t,n){return t!==e[n]}))}function X(e,t){return"function"==typeof t?t(e):t}function ee(e,t){for(var n in t)e[n]=t[n];return e}function te(e,t){for(var n in e)if("__source"!==n&&!(n in t))return!0;for(var o in t)if("__source"!==o&&e[o]!==t[o])return!0;return!1}!function(e){var t,n;function o(t){var n;return(n=e.call(this,t)||this).isPureReactComponent=!0,n}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.prototype.shouldComponentUpdate=function(e,t){return te(this.props,e)||te(this.state,t)}}(y);var ne=o.__b;o.__b=function(e){e.type&&e.type.t&&e.ref&&(e.props.ref=e.ref,e.ref=null),ne&&ne(e)};"undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref");var oe=o.__e;function re(e){return e&&((e=ee({},e)).__c=null,e.__k=e.__k&&e.__k.map(re)),e}function ie(e){return e&&(e.__v=null,e.__k=e.__k&&e.__k.map(ie)),e}function ae(){this.__u=0,this.o=null,this.__b=null}function ce(e){var t=e.__.__c;return t&&t.u&&t.u(e)}function se(){this.i=null,this.l=null}o.__e=function(e,t,n){if(e.then)for(var o,r=t;r=r.__;)if((o=r.__c)&&o.__c)return null==t.__e&&(t.__e=n.__e,t.__k=n.__k),o.__c(e,t.__c);oe(e,t,n)},(ae.prototype=new y).__c=function(e,t){var n=this;null==n.o&&(n.o=[]),n.o.push(t);var o=ce(n.__v),r=!1,i=function(){r||(r=!0,t.componentWillUnmount=t.__c,o?o(a):a())};t.__c=t.componentWillUnmount,t.componentWillUnmount=function(){i(),t.__c&&t.__c()};var a=function(){var e;if(!--n.__u)for(n.__v.__k[0]=ie(n.state.u),n.setState({u:n.__b=null});e=n.o.pop();)e.forceUpdate()};n.__u++||n.setState({u:n.__b=n.__v.__k[0]}),e.then(i,i)},ae.prototype.componentWillUnmount=function(){this.o=[]},ae.prototype.render=function(e,t){return this.__b&&(this.__v.__k&&(this.__v.__k[0]=re(this.__b)),this.__b=null),[d(v,null,t.u?null:e.children),t.u&&e.fallback]};var le=function(e,t,n){if(++n[1]===n[0]&&e.l.delete(t),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.l.size))for(n=e.i;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.i=n=n[2]}};(se.prototype=new y).u=function(e){var t=this,n=ce(t.__v),o=t.l.get(e);return o[0]++,function(r){var i=function(){t.props.revealOrder?(o.push(r),le(t,e,o)):r()};n?n(i):i()}},se.prototype.render=function(e){this.i=null,this.l=new Map;var t=w(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&t.reverse();for(var n=t.length;n--;)this.l.set(t[n],this.i=[1,0,this.i]);return e.children},se.prototype.componentDidUpdate=se.prototype.componentDidMount=function(){var e=this;e.l.forEach((function(t,n){le(e,n,t)}))};!function(){function e(){}var t=e.prototype;t.getChildContext=function(){return this.props.context},t.render=function(e){return e.children}}();var ue=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;y.prototype.isReactComponent={};var pe="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;function fe(e,t,n){if(null==t.__k)for(;t.firstChild;)t.removeChild(t.firstChild);return I(e,t),"function"==typeof n&&n(),e?e.__c:null}var de=o.event;function me(e,t){e["UNSAFE_"+t]&&!e[t]&&Object.defineProperty(e,t,{configurable:!1,get:function(){return this["UNSAFE_"+t]},set:function(e){this["UNSAFE_"+t]=e}})}o.event=function(e){de&&(e=de(e)),e.persist=function(){};var t=!1,n=!1,o=e.stopPropagation;e.stopPropagation=function(){o.call(e),t=!0};var r=e.preventDefault;return e.preventDefault=function(){r.call(e),n=!0},e.isPropagationStopped=function(){return t},e.isDefaultPrevented=function(){return n},e.nativeEvent=e};var ve={configurable:!0,get:function(){return this.class}},ye=o.vnode;o.vnode=function(e){e.$$typeof=pe;var t=e.type,n=e.props;if(t){if(n.class!=n.className&&(ve.enumerable="className"in n,null!=n.className&&(n.class=n.className),Object.defineProperty(n,"className",ve)),"function"!=typeof t){var o,r,i;for(i in n.defaultValue&&void 0!==n.value&&(n.value||0===n.value||(n.value=n.defaultValue),delete n.defaultValue),Array.isArray(n.value)&&n.multiple&&"select"===t&&(w(n.children).forEach((function(e){-1!=n.value.indexOf(e.props.value)&&(e.props.selected=!0)})),delete n.value),!0===n.download&&(n.download=""),n)if(o=ue.test(i))break;if(o)for(i in r=e.props={},n)r[ue.test(i)?i.replace(/[A-Z0-9]/,"-$&").toLowerCase():i]=n[i]}!function(t){var n=e.type,o=e.props;if(o&&"string"==typeof n){var r={};for(var i in o)/^on(Ani|Tra|Tou)/.test(i)&&(o[i.toLowerCase()]=o[i],delete o[i]),r[i.toLowerCase()]=i;if(r.ondoubleclick&&(o.ondblclick=o[r.ondoubleclick],delete o[r.ondoubleclick]),r.onbeforeinput&&(o.onbeforeinput=o[r.onbeforeinput],delete o[r.onbeforeinput]),r.onchange&&("textarea"===n||"input"===n.toLowerCase()&&!/^fil|che|ra/i.test(o.type))){var a=r.oninput||"oninput";o[a]||(o[a]=o[r.onchange],delete o[r.onchange])}}}(),"function"==typeof t&&!t.m&&t.prototype&&(me(t.prototype,"componentWillMount"),me(t.prototype,"componentWillReceiveProps"),me(t.prototype,"componentWillUpdate"),t.m=!0)}ye&&ye(e)};var he=d,be=v,ge=y,ke=(n(29),n(30),n(31),n(127),n(39),n(128),n(170),n(134)),_e=function(e){var t=e.t;return he("svg",{role:"img","aria-label":t(["close"]),width:"12",height:"12",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},he("title",null,t(["close"])),he("line",{x1:"1",y1:"11",x2:"11",y2:"1",strokeWidth:"1"}),he("line",{x1:"1",y1:"1",x2:"11",y2:"11",strokeWidth:"1"}))};_e.propTypes={t:n.n(ke).a.func};n(50);function we(e){return e.split("-").map((function(e){return e.slice(0,1).toUpperCase()+e.slice(1)})).join(" ")}n(64),n(174),n(175);function xe(e){return function(e){if(Array.isArray(e))return Se(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return Se(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Se(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Se(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function je(e){return(je="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var Oe=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var r,i=je(n[0]);r=0===n.length?{}:"string"===i||"number"===i?Array.prototype.slice.call(n):n[0];for(var a=[],c=e.toString();c.length>0;){var s=c.match(/\{(?!\{)([\w\d]+)\}(?!\})/);if(null!==s){var l=c.substr(0,s.index);c=c.substr(s.index+s[0].length);var u=parseInt(s[1]);a.push(l),u!=u?a.push(r[s[1]]):a.push(r[u])}else a.push(c),c=""}return a};function Ae(e){if(void 0!==e&&void 0!==e.lang&&"zz"!==e.lang)return e.lang;var t=(("string"==typeof window.language?window.language:null)||document.documentElement.lang||(void 0!==e&&void 0!==e.languages&&void 0!==e.languages[0]?e.languages[0]:"en")).toLowerCase(),n=new RegExp("^([\\w]+)-([\\w]+)$").exec(t);return null===n?t:n[1]}function ze(e,t,n){var o=t;Array.isArray(o)||(o=[o]);for(var r=e,i=0;i<o.length;i++){if(void 0===r)return n;if(void 0!==o[i]&&o[i].endsWith("?")){var a=o[i].slice(0,o[i].length-1),c=void 0;void 0!==(c=r instanceof Map?r.get(a):r[a])&&"string"==typeof c&&(r=c)}else r=r instanceof Map?r.get(o[i]):r[o[i]]}return void 0===r||"string"!=typeof r?n:""!==r?r:void 0}function Pe(e,t,n,o){var r=o,i=!1;"!"===r[0]&&(r=r.slice(1),i=!0),Array.isArray(r)||(r=[r]);var a=ze(e,[t].concat(xe(r)));if(void 0===a&&void 0!==n&&(a=ze(e,[n].concat(xe(r)))),void 0===a){if(i)return;return["[missing translation: ".concat(t,"/").concat(r.join("/"),"]")]}for(var c=arguments.length,s=new Array(c>4?c-4:0),l=4;l<c;l++)s[l-4]=arguments[l];return s.length>0?Oe.apply(void 0,[a].concat(s)):a}var Ee=function(e){var t=e.text,n=e.config;if(t instanceof Array||(t=[t]),!0===n.htmlTexts){var o=!1;"<"===t[0][0]&&(o=!0);var r=t.map((function(e,t){return"string"==typeof e?he("span",{key:t,dangerouslySetInnerHTML:{__html:e}}):e}));return he(o?be:"span",null,r)}return he("span",null,t)};function Ce(e){return(Ce="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function De(){return(De=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function Te(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ie(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Re(e,t){return(Re=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Ne(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=qe(e);if(t){var r=qe(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Me(this,n)}}function Me(e,t){return!t||"object"!==Ce(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function qe(e){return(qe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Ue=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Re(e,t)}(i,e);var t,n,o,r=Ne(i);function i(){return Te(this,i),r.apply(this,arguments)}return t=i,(n=[{key:"render",value:function(){var e,t=this.props,n=t.checked,o=t.onlyRequiredEnabled,r=t.onToggle,i=t.name,a=t.lang,c=t.config,s=t.translations,l=t.title,u=t.description,p=t.t,f=this.props.required||!1,d=this.props.optOut||!1,m=this.props.purposes||[],v="service-item-".concat(i),y=m.map((function(e){return p(["!","purposes",e,"title?"])||we(e)})).join(", "),h=d?he("span",{className:"cm-opt-out",title:p(["service","optOut","description"])},p(["service","optOut","title"])):"",b=f?he("span",{className:"cm-required",title:p(["service","required","description"])},p(["service","required","title"])):"";m.length>0&&(e=he("p",{className:"purposes"},p(["service",m.length>1?"purposes":"purpose"]),":"," ",y));var g=u||Pe(s,a,"zz",["!","description"])||p(["!",i,"description?"]);return he("div",null,he("input",{id:v,className:"cm-list-input"+(f?" required":"")+(o?" half-checked only-required":""),"aria-describedby":"".concat(v,"-description"),disabled:f,checked:n||f,type:"checkbox",onChange:function(e){r(e.target.checked)}}),he("label",De({htmlFor:v,className:"cm-list-label"},f?{tabIndex:"0"}:{}),he("span",{className:"cm-list-title"},l||Pe(s,a,"zz",["!","title"])||p(["!",i,"title?"])||we(i)),b,h,he("span",{className:"cm-switch"},he("div",{className:"slider round active"}))),he("div",{id:"".concat(v,"-description")},g&&he("p",{className:"cm-list-description"},he(Ee,{config:c,text:g})),e))}}])&&Ie(t.prototype,n),o&&Ie(t,o),i}(ge);function Le(e){return(Le="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Fe(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function He(e,t){return(He=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function We(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Ve(e);if(t){var r=Ve(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Be(this,n)}}function Be(e,t){return!t||"object"!==Le(t)&&"function"!=typeof t?Ke(e):t}function Ke(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ve(e){return(Ve=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function $e(){return($e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var Ge=function(e){var t=e.services,n=e.config,o=e.consents,r=e.lang,i=e.toggle,a=e.t;return t.map((function(e){var t=o[e.name];return he("li",{key:e.name,className:"cm-service"},he(Ue,$e({checked:t||e.required,onToggle:function(t){i([e],t)},config:n,lang:r,t:a},e)))}))},Ze=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&He(e,t)}(i,e);var t,n,o,r=We(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),t=r.call(this,e),e.manager.watch(Ke(t)),t.state={consents:e.manager.consents},t}return t=i,(n=[{key:"componentWillUnmount",value:function(){this.props.manager.unwatch(this)}},{key:"update",value:function(e,t,n){e===this.props.manager&&"consents"===t&&this.setState({consents:n})}},{key:"render",value:function(){var e=this.props,t=e.config,n=e.t,o=e.manager,r=e.lang,i=this.state.consents,a=t.services,c=function(e,t){e.map((function(e){e.required||o.updateConsent(e.name,t)}))},s=he(Ge,{config:t,lang:r,services:a,t:n,consents:i,toggle:c}),l=a.filter((function(e){return!e.required})),u=l.filter((function(e){return i[e.name]})).length,p=a.filter((function(e){return e.required})).length,f=u===l.length;return a.filter((function(e){return e.required})).length,he("ul",{className:"cm-services"},s,!t.hideToggleAll&&l.length>1&&he("li",{className:"cm-service cm-toggle-all"},he(Ue,{name:"disableAll",title:n(["service","disableAll","title"]),description:n(["service","disableAll","description"]),checked:f,config:t,onlyRequiredEnabled:!f&&p>0,onToggle:function(e){c(a,e)},lang:r,t:n})))}}])&&Fe(t.prototype,n),o&&Fe(t,o),i}(ge);function Ye(e){return(Ye="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Qe(){return(Qe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function Je(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Xe(e,t){return(Xe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function et(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=nt(e);if(t){var r=nt(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return tt(this,n)}}function tt(e,t){return!t||"object"!==Ye(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function nt(e){return(nt=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var ot=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Xe(e,t)}(i,e);var t,n,o,r=et(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=r.call(this,e)).state={servicesVisible:!1},t}return t=i,(n=[{key:"render",value:function(){var e,t=this,n=this.props,o=n.allEnabled,r=n.onlyRequiredEnabled,i=n.allDisabled,a=n.services,c=n.config,s=n.onToggle,l=n.name,u=n.lang,p=n.manager,f=n.consents,d=n.title,m=n.description,v=n.t,y=this.state.servicesVisible,h=this.props.required||!1,b=this.props.purposes||[],g="purpose-item-".concat(l),k=b.map((function(e){return v(["!","purposes",e,"title?"])||we(e)})).join(", "),_=h?he("span",{className:"cm-required",title:v(["!","service","required","description"])||""},v(["service","required","title"])):"";b.length>0&&(e=he("p",{className:"purposes"},v(["purpose",b.length>1?"purposes":"purpose"]),": ",k));var w=he(Ge,{config:c,lang:u,services:a,toggle:function(e,t){e.map((function(e){e.required||p.updateConsent(e.name,t)}))},consents:f,t:v}),x=m||v(["!","purposes",l,"description"]);return he(be,null,he("input",{id:g,className:"cm-list-input"+(h?" required":"")+(o?"":r?" only-required":" half-checked"),"aria-describedby":"".concat(g,"-description"),disabled:h,checked:o||!i&&!r,type:"checkbox",onChange:function(e){s(e.target.checked)}}),he("label",Qe({htmlFor:g,className:"cm-list-label"},h?{tabIndex:"0"}:{}),he("span",{className:"cm-list-title"},d||v(["!","purposes",l,"title?"])||we(l)),_,he("span",{className:"cm-switch"},he("div",{className:"slider round active"}))),he("div",{id:"".concat(g,"-description")},x&&he("p",{className:"cm-list-description"},he(Ee,{config:c,text:x})),e),a.length>0&&he("div",{className:"cm-services"},he("div",{className:"cm-caret"},he("a",{href:"#",onClick:function(e){e.preventDefault(),t.setState({servicesVisible:!y})}},y&&he("span",null,"↑")||he("span",null,"↓")," ",a.length," ",v(["purposeItem",a.length>1?"services":"service"]))),he("ul",{className:"cm-content"+(y?" expanded":"")},w)))}}])&&Je(t.prototype,n),o&&Je(t,o),i}(ge);function rt(e){return(rt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function it(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return at(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return at(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}function at(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function ct(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function st(e,t){return(st=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function lt(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=ft(e);if(t){var r=ft(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return ut(this,n)}}function ut(e,t){return!t||"object"!==rt(t)&&"function"!=typeof t?pt(e):t}function pt(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ft(e){return(ft=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var dt=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&st(e,t)}(i,e);var t,n,o,r=lt(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),t=r.call(this,e),e.manager.watch(pt(t)),t.state={consents:e.manager.consents},t}return t=i,(n=[{key:"componentWillUnmount",value:function(){this.props.manager.unwatch(this)}},{key:"update",value:function(e,t,n){e===this.props.manager&&"consents"===t&&this.setState({consents:n})}},{key:"render",value:function(){var e,t=this.props,n=t.config,o=t.t,r=t.manager,i=t.lang,a=this.state.consents,c=n.services,s={},l=it(c);try{for(l.s();!(e=l.n()).done;){var u,p=e.value,f=it(p.purposes);try{for(f.s();!(u=f.n()).done;){var d=u.value;void 0===s[d]&&(s[d]=[]),s[d].push(p)}}catch(e){f.e(e)}finally{f.f()}}}catch(e){l.e(e)}finally{l.f()}var m=function(e,t){e.map((function(e){var n,o=it(s[e]);try{for(o.s();!(n=o.n()).done;){var i=n.value;i.required||r.updateConsent(i.name,t)}}catch(e){o.e(e)}finally{o.f()}}))},v=function(e){var t,n={allEnabled:!0,onlyRequiredEnabled:!0,allDisabled:!0,allRequired:!0},o=it(e);try{for(o.s();!(t=o.n()).done;){var r=t.value;r.required||(n.allRequired=!1),a[r.name]?(r.required||(n.onlyRequiredEnabled=!1),n.allDisabled=!1):r.required||(n.allEnabled=!1)}}catch(e){o.e(e)}finally{o.f()}return n.allDisabled&&(n.onlyRequiredEnabled=!1),n},y=n.purposeOrder||[],h=Object.keys(s).sort((function(e,t){return y.indexOf(e)-y.indexOf(t)})).map((function(e){var t=v(s[e]);return he("li",{key:e,className:"cm-purpose"},he(ot,{allEnabled:t.allEnabled,allDisabled:t.allDisabled,onlyRequiredEnabled:t.onlyRequiredEnabled,required:t.allRequired,consents:a,name:e,config:n,lang:i,manager:r,onToggle:function(t){m([e],t)},services:s[e],t:o}))})),b=Object.keys(s).filter((function(e){var t,n=it(s[e]);try{for(n.s();!(t=n.n()).done;)if(!t.value.required)return!0}catch(e){n.e(e)}finally{n.f()}return!1})),g=v(c);return he("ul",{className:"cm-purposes"},h,b.length>1&&he("li",{className:"cm-purpose cm-toggle-all"},he(ot,{name:"disableAll",title:o(["service","disableAll","title"]),description:o(["service","disableAll","description"]),allDisabled:g.allDisabled,allEnabled:g.allEnabled,onlyRequiredEnabled:g.onlyRequiredEnabled,onToggle:function(e){m(Object.keys(s),e)},manager:r,consents:a,config:n,lang:i,services:[],t:o})))}}])&&ct(t.prototype,n),o&&ct(t,o),i}(ge);function mt(e){return(mt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function vt(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function yt(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function ht(e,t){return(ht=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function bt(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=kt(e);if(t){var r=kt(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return gt(this,n)}}function gt(e,t){return!t||"object"!==mt(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function kt(e){return(kt=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var _t=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ht(e,t)}(i,e);var t,n,o,r=bt(i);function i(){return vt(this,i),r.apply(this,arguments)}return t=i,(n=[{key:"render",value:function(){var e,t,n,o=this.props,r=o.hide,i=o.confirming,a=o.saveAndHide,c=o.acceptAndHide,s=o.declineAndHide,l=o.config,u=o.manager,p=o.lang,f=o.t,d=l.embedded,m=void 0===l.groupByPurpose||l.groupByPurpose;l.mustConsent||(e=he("button",{title:f(["close"]),className:"hide",type:"button",onClick:r},he(_e,{t:f}))),l.hideDeclineAll||u.confirmed||(t=he("button",{disabled:i,className:"cm-btn cm-btn-decline cm-btn-danger cn-decline",type:"button",onClick:s},f(["decline"])));var v,y,h,b=he("button",{disabled:i,className:"cm-btn cm-btn-success cm-btn-info cm-btn-accept",type:"button",onClick:a},f([u.confirmed?"save":"acceptSelected"]));l.acceptAll&&!u.confirmed&&(n=he("button",{disabled:i,className:"cm-btn cm-btn-success cm-btn-accept-all",type:"button",onClick:c},f(["acceptAll"]))),void 0!==l.privacyPolicy?"string"==typeof l.privacyPolicy?v=l.privacyPolicy:"object"===mt(l.privacyPolicy)&&(v=l.privacyPolicy[p]||l.privacyPolicy.default):void 0!==(v=f(["!","privacyPolicyUrl"],{lang:p}))&&(v=v.join("")),void 0!==v&&(y=he("a",{key:"ppLink",href:v,target:"_blank",rel:"noopener"},f(["privacyPolicy","name"]))),h=he(m?dt:Ze,{t:f,config:l,manager:u,lang:p});var g=he("div",{className:"cm-modal cm-klaro"},he("div",{className:"cm-header"},e,he("h1",{className:"title"},he(Ee,{config:l,text:f(["consentModal","title"])})),he("p",null,he(Ee,{config:l,text:[f(["consentModal","description"])].concat(y&&[" "].concat(f(["privacyPolicy","text"],{privacyPolicy:y}))||[])}))),he("div",{className:"cm-body"},h),he("div",{className:"cm-footer"},he("div",{className:"cm-footer-buttons"},t,b,n),!l.disablePoweredBy&&he("p",{className:"cm-powered-by"},he("a",{target:"_blank",href:l.poweredBy||"https://kiprotect.com/klaro",rel:"noopener"},f(["poweredBy"])))));return d?he("div",{className:"cookie-modal cm-embedded"},g):he("div",{className:"cookie-modal"},he("div",{className:"cm-bg",onClick:r}),g)}}])&&yt(t.prototype,n),o&&yt(t,o),i}(ge);n(129);function wt(e){return(wt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function xt(e,t,n){void 0===n&&(n=!0);for(var o=Object.keys(t),r=0;r<o.length;r++){var i=o[r],a=t[i],c=e[i];"string"==typeof a?(n||void 0===c)&&(e[i]=a):"object"===wt(a)&&("object"===wt(c)?xt(c,a,n):(n||void 0===c)&&(e[i]=a))}return e}function St(e){return(St="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function jt(e){return function(e){if(Array.isArray(e))return Ot(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return Ot(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ot(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ot(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function At(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function zt(e,t){return(zt=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Pt(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Dt(e);if(t){var r=Dt(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Et(this,n)}}function Et(e,t){return!t||"object"!==St(t)&&"function"!=typeof t?Ct(e):t}function Ct(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Dt(e){return(Dt=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Tt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var It=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&zt(e,t)}(i,e);var t,n,o,r=Pt(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),Tt(Ct(t=r.call(this,e)),"executeButtonClicked",(function(e,n,o){var r=t.state.modal,i=0;e&&(i=t.props.manager.changeAll(n));var a=t.props.manager.confirmed;if(t.props.manager.saveAndApplyConsents(o),e&&!a&&(r||t.props.config.mustConsent)){var c=function(){t.setState({confirming:!1}),t.props.hide()};t.setState({confirming:!0}),0===i?c():setTimeout(c,800)}else t.props.hide()})),Tt(Ct(t),"saveAndHide",(function(){t.executeButtonClicked(!1,!1,"save")})),Tt(Ct(t),"acceptAndHide",(function(){t.executeButtonClicked(!0,!0,"accept")})),Tt(Ct(t),"declineAndHide",(function(){t.executeButtonClicked(!0,!1,"decline")})),t.state={modal:e.modal,confirming:!1},t}return t=i,(n=[{key:"componentDidUpdate",value:function(e){e.modal!==this.props.modal&&this.setState({modal:this.props.modal})}},{key:"render",value:function(){var e,t=this,n=this.props,o=n.lang,r=n.config,i=n.show,a=n.manager,c=n.testing,s=n.t,l=this.state,u=l.confirming,p=l.modal,f=r.embedded,d=r.noticeAsModal,m=r.hideLearnMore,v=r.purposeOrder||[],y=function(e){for(var t=new Set([]),n=0;n<e.services.length;n++)for(var o=e.services[n].purposes||[],r=0;r<o.length;r++)t.add(o[r]);return Array.from(t)}(r).filter((function(e){return"functional"!==e})).sort((function(e,t){return v.indexOf(e)-v.indexOf(t)})).map((function(e){return s(["!","purposes",e,"title?"])||we(e)})),h="";h=1===y.length?y[0]:[].concat(jt(y.slice(0,-2)),[y.slice(-2).join(" & ")]).join(", "),void 0!==r.privacyPolicy?"string"==typeof r.privacyPolicy?e=r.privacyPolicy:"object"===St(r.privacyPolicy)&&(e=r.privacyPolicy[o]||r.privacyPolicy.default):void 0!==(e=s(["!","privacyPolicyUrl"],{lang:o}))&&(e=e.join(""));var b,g=function(e){e.preventDefault(),t.setState({modal:!0})};if(a.changed&&(b=he("p",{className:"cn-changes"},s(["consentNotice","changeDescription"]))),!i&&!c&&!u)return he("div",null);var k,_=(!r.mustConsent||d)&&!a.confirmed&&!r.noNotice,w=r.hideDeclineAll?"":he("button",{className:"cm-btn cm-btn-danger cn-decline",type:"button",onClick:this.declineAndHide},s(["decline"])),x=r.acceptAll?he("button",{className:"cm-btn cm-btn-success",type:"button",onClick:this.acceptAndHide},s(["ok"])):he("button",{className:"cm-btn cm-btn-success",type:"button",onClick:this.saveAndHide},s(["ok"])),S=function(){return d?he("button",{key:"learnMoreLink",className:"cm-btn cm-btn-lern-more cm-btn-info",type:"button",onClick:g},s(["consentNotice","learnMore"])):he("a",{key:"learnMoreLink",className:"cm-link cn-learn-more",href:"#",onClick:g},s(["consentNotice","learnMore"]))};if(void 0!==e&&(k=he("a",{key:"ppLink",href:e},s(["privacyPolicy","name"]))),p||a.confirmed&&!c||!a.confirmed&&r.mustConsent)return he(_t,{t:s,lang:o,config:r,hide:function(){r.mustConsent&&!r.acceptAll||(a.confirmed&&!c?t.props.hide():t.setState({modal:!1}))},confirming:u,declineAndHide:this.declineAndHide,saveAndHide:this.saveAndHide,acceptAndHide:this.acceptAndHide,manager:a});var j=he("div",{className:"cookie-notice ".concat(_||c?"":"cookie-notice-hidden"," ").concat(d?"cookie-modal-notice":""," ").concat(f?"cn-embedded":"")},he("div",{className:"cn-body"},he("p",null,he(Ee,{config:r,text:s(["consentNotice","description"],{purposes:he("strong",{key:"strong"},h),privacyPolicy:k,learnMoreLink:S()})})),c&&he("p",null,s(["consentNotice","testing"])),b,he("div",{className:"cn-ok"},!m&&S(),he("div",{className:"cn-buttons"},w,x))));return d?he("div",{className:"cookie-modal"},he("div",{className:"cm-bg"}),j):j}}])&&At(t.prototype,n),o&&At(t,o),i}(ge);function Rt(e){return(Rt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Nt(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Mt(e,t){return(Mt=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function qt(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Ft(e);if(t){var r=Ft(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Ut(this,n)}}function Ut(e,t){return!t||"object"!==Rt(t)&&"function"!=typeof t?Lt(e):t}function Lt(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ft(e){return(Ft=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Ht=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Mt(e,t)}(i,e);var t,n,o,r=qt(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),t=r.call(this,e),e.manager.watch(Lt(t)),t.state={show:e.show>0||!e.manager.confirmed},t}return t=i,(n=[{key:"componentWillUnmount",value:function(){this.props.manager.unwatch(this)}},{key:"update",value:function(e,t){e===this.props.manager&&"applyConsents"===t&&(!this.props.config.embedded&&this.props.manager.confirmed?this.setState({show:!1}):this.forceUpdate())}},{key:"notifyApi",value:function(){var e=this.props,t=e.api,n=e.modal,o=e.show,r=e.config;if(void 0!==t){if(n||o>0)return;this.props.manager.confirmed||this.props.manager.auxiliaryStore.getWithKey("shown-before")||(t.update(this,"showNotice",{config:r}),this.props.manager.auxiliaryStore.setWithKey("shown-before",!0))}}},{key:"componentDidMount",value:function(){this.notifyApi()}},{key:"componentDidUpdate",value:function(e){if(e.show!==this.props.show){this.notifyApi();var t=this.props.show>0||!this.props.manager.confirmed;t!==this.state.show&&this.setState({show:t})}}},{key:"render",value:function(){var e=this,t=this.props,n=t.config,o=t.t,r=t.lang,i=t.testing,a=t.manager,c=t.modal,s=this.state.show,l=n.additionalClass,u=n.embedded,p=n.stylePrefix;return he("div",{lang:r,className:(p||"klaro")+(void 0!==l?" "+l:"")},he(It,{key:"app-"+this.props.show,t:o,testing:i,show:s,lang:r,modal:c,hide:function(){u||e.setState({show:!1})},config:n,manager:a}))}}])&&Nt(t.prototype,n),o&&Nt(t,o),i}(ge);function Wt(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],o=!0,r=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(o=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==c.return||c.return()}finally{if(r)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Bt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Bt(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Bt(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var Kt=function(e){var t=e.manager,n=e.style,o=e.config,r=e.t,i=e.lang,a=e.service,c=Wt(K(0),2),s=c[0],l=c[1],u=o.additionalClass,p=(o.embedded,o.stylePrefix);$((function(){var e={update:function(){return l(s+1)}};return t.watch(e),function(){t.unwatch(e)}}));var f=Pe(a.translations||{},i,"zz",["!","title"])||r(["!",a.name,"title?"])||we(a.name);return he("div",{lang:i,className:(p||"klaro")+(void 0!==u?" "+u:"")+" cm-as-context-notice"},he("div",{className:"context-notice"+(void 0!==n?" cm-".concat(n):"")},he("p",null,r(["contextualConsent","description"],{title:f})),he("p",{className:"cm-buttons"},he("button",{className:"cm-btn cm-btn-success",type:"button",onClick:function(){t.updateConsent(a.name,!0),t.applyConsents(!1,!0,a.name),t.updateConsent(a.name,!1)}},r(["contextualConsent","acceptOnce"])),he("button",{className:"cm-btn cm-btn-success-var",type:"button",onClick:function(){t.updateConsent(a.name,!0),t.confirmed?(t.saveConsents("contextual-accept"),t.applyConsents(!1,!0,a.name)):t.applyConsents(!1,!0,a.name)}},r(["contextualConsent","acceptAlways"])))))};n(97),n(130),n(98);function Vt(){for(var e=document.cookie.split(";"),t=[],n=new RegExp("^\\s*([^=]+)\\s*=\\s*(.*?)$"),o=0;o<e.length;o++){var r=e[o],i=n.exec(r);null!==i&&t.push({name:i[1],value:i[2]})}return t}function $t(e,t,n){var o=e+"=; Max-Age=-99999999;";document.cookie=o,o+=" path="+(t||"/")+";",document.cookie=o,void 0!==n&&(o+=" domain="+n+";",document.cookie=o)}n(177),n(178);function Gt(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],o=!0,r=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(o=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==c.return||c.return()}finally{if(r)throw i}}return n}(e,t)||Zt(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Zt(e,t){if(e){if("string"==typeof e)return Yt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Yt(e,t):void 0}}function Yt(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function Qt(e){for(var t={},n=0;n<e.attributes.length;n++){var o=e.attributes[n];o.name.startsWith("data-")&&(t[o.name.slice(5)]=o.value)}return t}function Jt(e,t){for(var n=Object.keys(e),o=0;o<n.length;o++){var r=n[o],i=e[r];t[r]!==i&&t.setAttribute("data-"+r,i)}}function Xt(e){var t,n=function(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=Zt(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}(document.querySelectorAll("style[data-context=klaro-styles]"));try{for(n.s();!(t=n.n()).done;){var o=t.value,r=o.innerText;void 0!==o.styleSheet&&(r=o.styleSheet.cssText);for(var i=function(){var e=Gt(c[a],2),t=e[0],n=e[1],o=new RegExp("([a-z0-9-]+):[^;]+;[\\s\\n]*\\1:\\s*var\\(--"+t+",\\s*[^\\)]+\\)","g");r=r.replace(o,(function(e,o){return"".concat(o,": ").concat(n,"; ").concat(o,": var(--").concat(t,", ").concat(n,")")}))},a=0,c=Object.entries(e);a<c.length;a++)i();var s=document.createElement("style");s.setAttribute("type","text/css"),s.setAttribute("data-context","klaro-styles"),void 0!==s.styleSheet?s.styleSheet.cssText=r:s.innerText=r,o.parentElement.appendChild(s),o.parentElement.removeChild(o)}}catch(e){n.e(e)}finally{n.f()}}function en(e){return(en="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function tn(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&nn(e,t)}function nn(e,t){return(nn=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function on(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=an(e);if(t){var r=an(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return rn(this,n)}}function rn(e,t){return!t||"object"!==en(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function an(e){return(an=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function cn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function sn(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function ln(e,t,n){return t&&sn(e.prototype,t),n&&sn(e,n),e}var un=function(){function e(){cn(this,e),this.value=null}return ln(e,[{key:"get",value:function(){return this.value}},{key:"set",value:function(e){this.value=e}},{key:"delete",value:function(){this.value=null}}]),e}(),pn=function(){function e(t){cn(this,e),this.cookieName=t.storageName,this.cookieDomain=t.cookieDomain,this.cookiePath=t.cookiePath,this.cookieExpiresAfterDays=t.cookieExpiresAfterDays}return ln(e,[{key:"get",value:function(){var e=function(e){for(var t=Vt(),n=0;n<t.length;n++)if(t[n].name===e)return t[n];return null}(this.cookieName);return e?e.value:null}},{key:"set",value:function(e){return function(e,t,n,o,r){var i="";if(n){var a=new Date;a.setTime(a.getTime()+24*n*60*60*1e3),i="; expires="+a.toUTCString()}void 0!==o&&(i+="; domain="+o),i+=void 0!==r?"; path="+r:"; path=/",document.cookie=e+"="+(t||"")+i+"; SameSite=Lax"}(this.cookieName,e,this.cookieExpiresAfterDays,this.cookieDomain,this.cookiePath)}},{key:"delete",value:function(){return $t(this.cookieName)}}]),e}(),fn=function(){function e(t,n){cn(this,e),this.key=t.storageName,this.handle=n}return ln(e,[{key:"get",value:function(){return this.handle.getItem(this.key)}},{key:"getWithKey",value:function(e){return this.handle.getItem(e)}},{key:"set",value:function(e){return this.handle.setItem(this.key,e)}},{key:"setWithKey",value:function(e,t){return this.handle.setItem(e,t)}},{key:"delete",value:function(){return this.handle.removeItem(this.key)}},{key:"deleteWithKey",value:function(e){return this.handle.removeItem(e)}}]),e}(),dn=function(e){tn(n,e);var t=on(n);function n(e){return cn(this,n),t.call(this,e,localStorage)}return n}(fn),mn=function(e){tn(n,e);var t=on(n);function n(e){return cn(this,n),t.call(this,e,sessionStorage)}return n}(fn),vn={cookie:pn,test:un,localStorage:dn,sessionStorage:mn};function yn(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=bn(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}function hn(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],o=!0,r=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(o=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==c.return||c.return()}finally{if(r)throw i}}return n}(e,t)||bn(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function bn(e,t){if(e){if("string"==typeof e)return gn(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?gn(e,t):void 0}}function gn(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function kn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function _n(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?kn(Object(n),!0).forEach((function(t){wn(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):kn(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function wn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function xn(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var Sn=function(){function e(t,n,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.config=t,this.store=void 0!==n?n:new vn[this.storageMethod](this),void 0===this.store&&(this.store=vn.cookie),this.auxiliaryStore=void 0!==o?o:new mn(this),this.consents=this.defaultConsents,this.confirmed=!1,this.changed=!1,this.states={},this.initialized={},this.executedOnce={},this.watchers=new Set([]),this.loadConsents(),this.applyConsents(),this.savedConsents=_n({},this.consents)}var t,n,o;return t=e,(n=[{key:"watch",value:function(e){this.watchers.has(e)||this.watchers.add(e)}},{key:"unwatch",value:function(e){this.watchers.has(e)&&this.watchers.delete(e)}},{key:"notify",value:function(e,t){var n=this;this.watchers.forEach((function(o){o.update(n,e,t)}))}},{key:"getService",value:function(e){var t=this.config.services.filter((function(t){return t.name===e}));if(t.length>0)return t[0]}},{key:"getDefaultConsent",value:function(e){var t=e.default||e.required;return void 0===t&&(t=this.config.default),void 0===t&&(t=!1),t}},{key:"changeAll",value:function(e){var t=this,n=0;return this.config.services.filter((function(e){return!e.contextualConsentOnly})).map((function(o){o.required||t.config.required||e?t.updateConsent(o.name,!0)&&n++:t.updateConsent(o.name,!1)&&n++})),n}},{key:"updateConsent",value:function(e,t){var n=(this.consents[e]||!1)!==t;return this.consents[e]=t,this.notify("consents",this.consents),n}},{key:"resetConsents",value:function(){this.consents=this.defaultConsents,this.states={},this.confirmed=!1,this.applyConsents(),this.savedConsents=_n({},this.consents),this.store.delete(),this.notify("consents",this.consents)}},{key:"getConsent",value:function(e){return this.consents[e]||!1}},{key:"loadConsents",value:function(){var e=this.store.get();return null!==e&&(this.consents=JSON.parse(decodeURIComponent(e)),this._checkConsents(),this.notify("consents",this.consents)),this.consents}},{key:"saveAndApplyConsents",value:function(e){this.saveConsents(e),this.applyConsents()}},{key:"changedConsents",value:function(){for(var e={},t=0,n=Object.entries(this.consents);t<n.length;t++){var o=hn(n[t],2),r=o[0],i=o[1];this.savedConsents[r]!==i&&(e[r]=i)}return e}},{key:"saveConsents",value:function(e){var t=encodeURIComponent(JSON.stringify(this.consents));this.store.set(t),this.confirmed=!0,this.changed=!1;var n=this.changedConsents();this.savedConsents=_n({},this.consents),this.notify("saveConsents",{changes:n,consents:this.consents,type:e||"script"})}},{key:"applyConsents",value:function(e,t,n){function o(e,t){if(void 0!==e)return("function"==typeof e?e:new Function("opts",e))(t)}for(var r=0,i=0;i<this.config.services.length;i++){var a=this.config.services[i];if(void 0===n||n===a.name){var c=a.vars||{},s={service:a,config:this.config,vars:c};this.initialized[a.name]||(this.initialized[a.name]=!0,o(a.onInit,s))}}for(var l=0;l<this.config.services.length;l++){var u=this.config.services[l];if(void 0===n||n===u.name){var p=this.states[u.name],f=u.vars||{},d=void 0!==u.optOut?u.optOut:this.config.optOut||!1,m=void 0!==u.required?u.required:this.config.required||!1,v=this.confirmed||d||e||t,y=this.getConsent(u.name)&&v||m,h={service:u,config:this.config,vars:f,consents:this.consents,confirmed:this.confirmed};p!==y&&r++,e||(o(y?u.onAccept:u.onDecline,h),this.updateServiceElements(u,y),this.updateServiceStorage(u,y),void 0!==u.callback&&u.callback(y,u),void 0!==this.config.callback&&this.config.callback(y,u),this.states[u.name]=y)}}return this.notify("applyConsents",r,n),r}},{key:"updateServiceElements",value:function(e,t){if(t){if(e.onlyOnce&&this.executedOnce[e.name])return;this.executedOnce[e.name]=!0}for(var n=document.querySelectorAll("[data-name='"+e.name+"']"),o=0;o<n.length;o++){var r=n[o],i=r.parentElement,a=Qt(r),c=a.type,s=a.src,l=a.href,u=["href","src","type"];if("placeholder"!==c)if("IFRAME"===r.tagName){if(t&&r.src===s){console.debug("Skipping ".concat(r.tagName," for service ").concat(e.name,", as it already has the correct type..."));continue}var p,f=document.createElement(r.tagName),d=yn(r.attributes);try{for(d.s();!(p=d.n()).done;){var m=p.value;f.setAttribute(m.name,m.value)}}catch(e){d.e(e)}finally{d.f()}f.innerText=r.innerText,f.text=r.text,t?(void 0!==a["original-display"]&&(f.style.display=a["original-display"]),void 0!==a.src&&(f.src=a.src)):(f.src="",void 0!==a["modified-by-klaro"]&&void 0!==a["original-display"]?f.setAttribute("data-original-display",a["original-display"]):(void 0!==r.style.display&&f.setAttribute("data-original-display",r.style.display),f.setAttribute("data-modified-by-klaro","yes")),f.style.display="none"),i.insertBefore(f,r),i.removeChild(r)}else if("SCRIPT"===r.tagName||"LINK"===r.tagName){if(t&&r.type===(c||"")&&r.src===s){console.debug("Skipping ".concat(r.tagName," for service ").concat(e.name,", as it already has the correct type or src..."));continue}var v,y=document.createElement(r.tagName),h=yn(r.attributes);try{for(h.s();!(v=h.n()).done;){var b=v.value;y.setAttribute(b.name,b.value)}}catch(e){h.e(e)}finally{h.f()}y.innerText=r.innerText,y.text=r.text,t?(y.type=c||"",void 0!==s&&(y.src=s),void 0!==l&&(y.href=l)):y.type="text/plain",i.insertBefore(y,r),i.removeChild(r)}else{if(t){var g,k=yn(u);try{for(k.s();!(g=k.n()).done;){var _=g.value,w=a[_];void 0!==w&&(void 0===a["original-"+_]&&(a["original-"+_]=r[_]),r[_]=w)}}catch(e){k.e(e)}finally{k.f()}void 0!==a.title&&(r.title=a.title),void 0!==a["original-display"]?r.style.display=a["original-display"]:r.style.removeProperty("display")}else{void 0!==a.title&&r.removeAttribute("title"),void 0===a["original-display"]&&void 0!==r.style.display&&(a["original-display"]=r.style.display),r.style.display="none";var x,S=yn(u);try{for(S.s();!(x=S.n()).done;){var j=x.value;void 0!==a[j]&&(void 0!==a["original-"+j]?r[j]=a["original-"+j]:r.removeAttribute(j))}}catch(e){S.e(e)}finally{S.f()}}Jt(a,r)}else t?(r.style.display="none",a["original-display"]=r.style.display):r.style.display=a["original-display"]||"block"}}},{key:"updateServiceStorage",value:function(e,t){if(!t&&void 0!==e.cookies&&e.cookies.length>0)for(var n=Vt(),o=0;o<e.cookies.length;o++){var r=e.cookies[o],i=void 0,a=void 0;if(r instanceof Array){var c=hn(r,3);r=c[0],i=c[1],a=c[2]}else if(r instanceof Object&&!(r instanceof RegExp)){var s=r;r=s.pattern,i=s.path,a=s.domain}if(void 0!==r){r instanceof RegExp||(r=r.startsWith("^")?new RegExp(r):new RegExp("^"+r.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&")+"$"));for(var l=0;l<n.length;l++){var u=n[l];null!==r.exec(u.name)&&(console.debug("Deleting cookie:",u.name,"Matched pattern:",r,"Path:",i,"Domain:",a),$t(u.name,i,a),void 0===a&&$t(u.name,i,"."+window.location.hostname))}}}}},{key:"_checkConsents",value:function(){for(var e=!0,t=new Set(this.config.services.map((function(e){return e.name}))),n=new Set(Object.keys(this.consents)),o=0,r=Object.keys(this.consents);o<r.length;o++){var i=r[o];t.has(i)||delete this.consents[i]}var a,c=yn(this.config.services);try{for(c.s();!(a=c.n()).done;){var s=a.value;n.has(s.name)||(this.consents[s.name]=this.getDefaultConsent(s),e=!1)}}catch(e){c.e(e)}finally{c.f()}this.confirmed=e,e||(this.changed=!0)}},{key:"storageMethod",get:function(){return this.config.storageMethod||"cookie"}},{key:"storageName",get:function(){return this.config.storageName||this.config.cookieName||"klaro"}},{key:"cookieDomain",get:function(){return this.config.cookieDomain||void 0}},{key:"cookiePath",get:function(){return this.config.cookiePath||void 0}},{key:"cookieExpiresAfterDays",get:function(){return this.config.cookieExpiresAfterDays||120}},{key:"defaultConsents",get:function(){for(var e={},t=0;t<this.config.services.length;t++){var n=this.config.services[t];e[n.name]=this.getDefaultConsent(n)}return e}}])&&xn(t.prototype,n),o&&xn(t,o),e}();n(179);function jn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function On(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?jn(Object(n),!0).forEach((function(t){An(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):jn(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function An(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function zn(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var Pn=function(){function e(t,n,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.url=t,this.id=n,this.opts=Object.assign({},o)}var t,n,o;return t=e,(n=[{key:"getLocationData",value:function(e){var t=e.records||{};return{pathname:void 0===t.savePathname||t.savePathname?location.pathname:void 0,port:""!==location.port?parseInt(location.port):0,hostname:location.hostname,protocol:location.protocol.slice(0,location.protocol.length-1)}}},{key:"getUserData",value:function(){return{client_version:po(),client_name:"klaro:web"}}},{key:"getBaseConsentData",value:function(e){return{location_data:this.getLocationData(e),user_data:this.getUserData(e)}}},{key:"update",value:function(e,t,n){if("saveConsents"===t){if("save"===n.type&&0===Object.keys(n.changes).length)return;var o=On(On({},this.getBaseConsentData(e.config)),{},{consent_data:{consents:n.consents,changes:"save"===n.type?n.changes:void 0,type:n.type,config:e.config.id}});this.submitConsentData(o)}else if("showNotice"===t){var r=On(On({},this.getBaseConsentData(n.config)),{},{consent_data:{consents:{},changes:{},type:"show",config:n.config.id}});this.submitConsentData(r)}}},{key:"apiRequest",value:function(e,t,n,o){var r=this;return new Promise((function(i,a){var c,s,l=new XMLHttpRequest;l.addEventListener("load",(function(){var e=JSON.parse(l.response);l.status<200||l.status>=300?(e.status=l.status,a(e)):i(e,l.status)})),l.addEventListener("error",(function(){a({status:0,xhr:l})})),void 0!==n&&("GET"===e?t+="?"+(s=n,"?"+Object.keys(s).map((function(e){return e+"="+encodeURIComponent(s[e])})).join("&")):c=JSON.stringify(n)),l.open(e,r.url+t),void 0!==c&&l.setRequestHeader("Content-Type",o||"application/json;charset=UTF-8"),l.send(c)}))}},{key:"submitConsentData",value:function(e){return this.apiRequest("POST","/v1/privacy-managers/"+this.id+"/submit",e,"text/plain;charset=UTF-8")}},{key:"loadConfig",value:function(e){return this.apiRequest("GET","/v1/privacy-managers/"+this.id+"/config.json?name="+e+(this.opts.testing?"&testing=true":""))}},{key:"loadConfigs",value:function(){return this.apiRequest("GET","/v1/privacy-managers/"+this.id+"/configs.json"+(this.opts.testing?"&testing=true":""))}}])&&zn(t.prototype,n),o&&zn(t,o),e}();function En(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],o=!0,r=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(o=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==c.return||c.return()}finally{if(r)throw i}}return n}(e,t)||Cn(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Cn(e,t){if(e){if("string"==typeof e)return Dn(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Dn(e,t):void 0}}function Dn(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function Tn(e,t,n){if(void 0!==e.styling){var o=Object.assign({},e.styling);if(void 0!==o.theme){var r=o.theme;r instanceof Array||(r=[r]),o={};var i,a=function(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=Cn(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}(r);try{for(a.s();!(i=a.n()).done;){var c=t[i.value];if(void 0!==c)for(var s=0,l=Object.entries(c);s<l.length;s++){var u=En(l[s],2),p=u[0],f=u[1];p.startsWith("_")||(o[p]=f)}}}catch(e){a.e(e)}finally{a.f()}for(var d=0,m=Object.entries(e.styling);d<m.length;d++){var v=En(m[d],2),y=v[0],h=v[1];"theme"!==y&&(o[y]=h)}}void 0===n&&(n=document.documentElement);for(var b=0,g=Object.entries(o);b<g.length;b++){var k=En(g[b],2),_=k[0],w=k[1];n.style.setProperty("--"+_,w)}window.document.documentMode&&n===document.documentElement&&Xt(o)}}function In(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return Rn(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Rn(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}function Rn(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function Nn(e){for(var t=new Map([]),n=0,o=Object.keys(e);n<o.length;n++){var r=o[n],i=e[r];"string"==typeof r&&("string"==typeof i||null===i?t.set(r,i):t.set(r,Nn(i)))}return t}function Mn(e,t,n,o){var r=function(e,t,n){if(n instanceof Map){var o=new Map([]);Mn(o,n,!0,!1),e.set(t,o)}else e.set(t,n)};if(!(t instanceof Map&&e instanceof Map))throw new Error("Parameters are not maps!");void 0===n&&(n=!0),void 0===o&&(o=!1),o&&(e=new e.constructor(e));var i,a=In(t.keys());try{for(a.s();!(i=a.n()).done;){var c=i.value,s=t.get(c),l=e.get(c);if(e.has(c))if(s instanceof Map&&l instanceof Map)e.set(c,Mn(l,s,n,o));else{if(!n)continue;r(e,c,s)}else r(e,c,s)}}catch(e){a.e(e)}finally{a.f()}return e}var qn,Un={top:{_meta:{incompatibleWith:["bottom"]},"notice-top":"20px","notice-bottom":"auto"},bottom:{_meta:{incompatibleWith:["top"]},"notice-bottom":"20px","notice-top":"auto"},left:{_meta:{incompatibleWith:["wide"]},"notice-left":"20px","notice-right":"auto"},right:{_meta:{incompatibleWith:["wide"]},"notice-right":"20px","notice-left":"auto"},wide:{"notice-left":"20px","notice-right":"auto","notice-max-width":"calc(100vw - 60px)","notice-position":"fixed"},light:{"button-text-color":"#fff",dark1:"#fafafa",dark2:"#777",dark3:"#555",light1:"#444",light2:"#666",light3:"#111",green3:"#f00"}};n(185);function Ln(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function Fn(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ln(Object(n),!0).forEach((function(t){Hn(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ln(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Hn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Wn(e){return function(e){if(Array.isArray(e))return Vn(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Kn(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Bn(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=Kn(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}function Kn(e,t){if(e){if("string"==typeof e)return Vn(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Vn(e,t):void 0}}function Vn(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var $n=new Map([]),Gn={},Zn={};function Yn(e,t){return(e.elementID||"klaro")+(t?"-ide":"")}function Qn(e,t){var n=Yn(e,t),o=document.getElementById(n);return null===o&&((o=document.createElement("div")).id=n,document.body.appendChild(o)),o}function Jn(e,t){if(void 0===Gn[e]?Gn[e]=[t]:Gn[e].push(t),void 0!==Zn[e]){var n,o=Bn(Zn[e]);try{for(o.s();!(n=o.n()).done;){var r=n.value;if(!1===t.apply(void 0,Wn(r)))break}}catch(e){o.e(e)}finally{o.f()}}}function Xn(e){for(var t=Gn[e],n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];if(void 0===Zn[e]?Zn[e]=[o]:Zn[e].push(o),void 0!==t){var i,a=Bn(t);try{for(a.s();!(i=a.n()).done;){var c=i.value;if(!0===c.apply(void 0,o))return!0}}catch(e){a.e(e)}finally{a.f()}}}function eo(e){var t=new Map([]);return Mn(t,$n),Mn(t,Nn(e.translations||{})),t}var to=1;function no(e,t){if(void 0!==e){t=t||{},Xn("render",e=io(e),t);var n=0;t.show&&(n=to++);var o=Qn(e),r=uo(e);void 0!==t.api&&r.watch(t.api),Tn(e,Un,o);var i=Ae(e),a=eo(e),c=function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return Pe.apply(void 0,[a,i,e.fallbackLang||"zz"].concat(n))},s=fe(he(Ht,{t:c,lang:i,manager:r,config:e,testing:t.testing,modal:t.modal,api:t.api,show:n}),o);return oo(r,c,i,e,t),s}}function oo(e,t,n,o,r){var i,a=[],c=Bn(o.services);try{for(c.s();!(i=c.n()).done;){var s,l=i.value,u=e.getConsent(l.name)&&e.confirmed,p=Bn(document.querySelectorAll("[data-name='"+l.name+"']"));try{for(p.s();!(s=p.n()).done;){var f=s.value,d=Qt(f);if("placeholder"!==d.type&&("IFRAME"===f.tagName||"DIV"===f.tagName)){var m=f.previousElementSibling;if(null!==m){var v=Qt(m);"placeholder"===v.type&&v.name===l.name||(m=null)}if(null===m){(m=document.createElement("DIV")).style.maxWidth=f.width+"px",m.style.height=f.height+"px",Jt({type:"placeholder",name:l.name},m),u&&(m.style.display="none"),f.parentElement.insertBefore(m,f);var y=fe(he(Kt,{t:t,lang:n,manager:e,config:o,service:l,style:d.style,testing:r.testing,api:r.api}),m);a.push(y)}"IFRAME"===f.tagName&&(d.src=f.src),void 0===d["modified-by-klaro"]&&void 0===f.style.display&&(d["original-display"]=f.style.display),d["modified-by-klaro"]="yes",Jt(d,f),u||(f.src="",f.style.display="none")}}}catch(e){p.e(e)}finally{p.f()}}}catch(e){c.e(e)}finally{c.f()}return a}function ro(e){/complete|interactive|loaded/.test(document.readyState)?e():window.addEventListener("DOMContentLoaded",e)}function io(e){var t=Fn({},e);return 2===t.version||(void 0!==t.apps&&void 0===t.services&&(t.services=t.apps,console.warn("Warning, your configuration file is outdated. Please change `apps` to `services`"),delete t.apps),void 0!==t.translations&&void 0!==t.translations.apps&&void 0===t.services&&(t.translations.services=t.translations.apps,console.warn("Warning, your configuration file is outdated. Please change `apps` to `services` in the `translations` key"),delete t.translations.apps)),t}function ao(e){if(void 0!==window){var t=function(e){if(null!==document.currentScript&&void 0!==document.currentScript)return document.currentScript;for(var t=document.getElementsByTagName("script"),n=0;n<t.length;n++){var o=t[n];if(o.src.includes(e))return o}return null}("klaro"),n=new Map(decodeURI(location.hash.slice(1)).split("&").map((function(e){return e.split("=")})).map((function(e){return 1===e.length?[e[0],!0]:e}))),o=n.get("klaro-testing"),r=function(e){var t=Fn(Fn({},e),{},{testing:o});qn.noAutoLoad||qn.testing&&!t.testing||no(qn,t)};if(void 0!==e)qn=e,ro((function(){return r({})}));else if(null!==t){var i=function(e){var t=e.getAttribute("data-klaro-id");if(null!==t)return t;var n=/.*\/privacy-managers\/([a-f0-9]+)\/klaro.*\.js/.exec(e.src);return null!==n?n[1]:null}(t),a=function(e){var t=e.getAttribute("data-klaro-api-url");if(null!==t)return t;var n=/(http(?:s)?:\/\/[^/]+)\/v1\/privacy-managers\/([a-f0-9]+)\/klaro.*\.js/.exec(e.src);return null!==n?n[1]:null}(t),c=function(e,t){if(e.has("klaro-config"))return e.get("klaro-config");var n=t.getAttribute("data-klaro-config");return null!==n?n:"default"}(n,t);if(null!==i){var s=new Pn(a,i,{testing:o});if(void 0!==window.klaroApiConfigs){if(!0===Xn("apiConfigsLoaded",window.klaroApiConfigs,s))return;var l=window.klaroApiConfigs.find((function(e){return e.name===c&&("active"===e.status||o)}));void 0!==l?(qn=l,ro((function(){return r({api:s})}))):Xn("apiConfigsFailed",{})}else s.loadConfig(c).then((function(e){!0!==Xn("apiConfigsLoaded",[e],s)&&(qn=e,ro((function(){return r({api:s})})))})).catch((function(e){console.error(e,"cannot load Klaro configs"),Xn("apiConfigsFailed",e)}))}else{var u=t.getAttribute("data-klaro-config")||"klaroConfig";void 0!==(qn=window[u])&&ro((function(){return r({})}))}}n.has("klaro-ide")&&function(e){var t=/^(.*)(\/[^/]+)$/.exec(e.src)[1]||"",n=document.createElement("script");n.src=""!==t?t+"/ide.js":"ide.js",n.type="application/javascript";var o,r=Bn(n.attributes);try{for(r.s();!(o=r.n()).done;){var i=o.value;n.setAttribute(i.name,i.value)}}catch(e){r.e(e)}finally{r.f()}document.head.appendChild(n)}(t)}}function co(e,t,n){return no(e=e||qn,{show:!0,modal:t,api:n}),!1}var so={};function lo(){for(var e in Object.keys(so))delete so[e]}function uo(e){var t=(e=e||qn).storageName||e.cookieName||"default";return void 0===so[t]&&(so[t]=new Sn(io(e))),so[t]}function po(){return"v"==="v0.7.18"[0]?"v0.7.18".slice(1):"v0.7.18"}var fo=n(135),mo=n.n(fo),vo=n(136),yo=n.n(vo),ho=n(137),bo=n.n(ho),go=n(138),ko=n.n(go),_o=n(139),wo=n.n(_o),xo=n(140),So=n.n(xo),jo=n(141),Oo=n.n(jo),Ao=n(142),zo=n.n(Ao),Po=n(143),Eo=n.n(Po),Co=n(144),Do=n.n(Co),To=n(145),Io=n.n(To),Ro=n(146),No=n.n(Ro),Mo=n(147),qo=n.n(Mo),Uo=n(148),Lo=n.n(Uo),Fo=n(149),Ho=n.n(Fo),Wo=n(150),Bo=n.n(Wo),Ko=n(151),Vo=n.n(Ko),$o=n(152),Go=n.n($o),Zo=n(153),Yo=n.n(Zo),Qo=n(154),Jo=n.n(Qo),Xo=n(155),er=n.n(Xo),tr=n(156),nr=n.n(tr),or=n(157),rr=n.n(or),ir=n(158),ar=n.n(ir),cr=Nn({ca:bo.a,cs:ko.a,da:wo.a,de:So.a,el:Oo.a,en:zo.a,zh:mo.a,pt:yo.a,es:Eo.a,fi:Do.a,fr:Io.a,gl:No.a,hu:qo.a,hr:Lo.a,it:Ho.a,nl:Bo.a,no:Vo.a,ro:Go.a,sr:Yo.a,sr_cyrl:Jo.a,sv:er.a,tr:nr.a,pl:rr.a,ru:ar.a});Mn($n,cr),ao()}])}));

/***/ }),

/***/ "./node_modules/promise-polyfill/src/allSettled.js":
/*!*********************************************************!*\
  !*** ./node_modules/promise-polyfill/src/allSettled.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function allSettled(arr) {
  var P = this;
  return new P(function(resolve, reject) {
    if (!(arr && typeof arr.length !== 'undefined')) {
      return reject(
        new TypeError(
          typeof arr +
            ' ' +
            arr +
            ' is not iterable(cannot read property Symbol(Symbol.iterator))'
        )
      );
    }
    var args = Array.prototype.slice.call(arr);
    if (args.length === 0) return resolve([]);
    var remaining = args.length;

    function res(i, val) {
      if (val && (typeof val === 'object' || typeof val === 'function')) {
        var then = val.then;
        if (typeof then === 'function') {
          then.call(
            val,
            function(val) {
              res(i, val);
            },
            function(e) {
              args[i] = { status: 'rejected', reason: e };
              if (--remaining === 0) {
                resolve(args);
              }
            }
          );
          return;
        }
      }
      args[i] = { status: 'fulfilled', value: val };
      if (--remaining === 0) {
        resolve(args);
      }
    }

    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (allSettled);


/***/ }),

/***/ "./node_modules/promise-polyfill/src/finally.js":
/*!******************************************************!*\
  !*** ./node_modules/promise-polyfill/src/finally.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @this {Promise}
 */
function finallyConstructor(callback) {
  var constructor = this.constructor;
  return this.then(
    function(value) {
      // @ts-ignore
      return constructor.resolve(callback()).then(function() {
        return value;
      });
    },
    function(reason) {
      // @ts-ignore
      return constructor.resolve(callback()).then(function() {
        // @ts-ignore
        return constructor.reject(reason);
      });
    }
  );
}

/* harmony default export */ __webpack_exports__["default"] = (finallyConstructor);


/***/ }),

/***/ "./node_modules/promise-polyfill/src/index.js":
/*!****************************************************!*\
  !*** ./node_modules/promise-polyfill/src/index.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _finally__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./finally */ "./node_modules/promise-polyfill/src/finally.js");
/* harmony import */ var _allSettled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allSettled */ "./node_modules/promise-polyfill/src/allSettled.js");



// Store setTimeout reference so promise-polyfill will be unaffected by
// other code modifying setTimeout (like sinon.useFakeTimers())
var setTimeoutFunc = setTimeout;

function isArray(x) {
  return Boolean(x && typeof x.length !== 'undefined');
}

function noop() {}

// Polyfill for Function.prototype.bind
function bind(fn, thisArg) {
  return function() {
    fn.apply(thisArg, arguments);
  };
}

/**
 * @constructor
 * @param {Function} fn
 */
function Promise(fn) {
  if (!(this instanceof Promise))
    throw new TypeError('Promises must be constructed via new');
  if (typeof fn !== 'function') throw new TypeError('not a function');
  /** @type {!number} */
  this._state = 0;
  /** @type {!boolean} */
  this._handled = false;
  /** @type {Promise|undefined} */
  this._value = undefined;
  /** @type {!Array<!Function>} */
  this._deferreds = [];

  doResolve(fn, this);
}

function handle(self, deferred) {
  while (self._state === 3) {
    self = self._value;
  }
  if (self._state === 0) {
    self._deferreds.push(deferred);
    return;
  }
  self._handled = true;
  Promise._immediateFn(function() {
    var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
      return;
    }
    var ret;
    try {
      ret = cb(self._value);
    } catch (e) {
      reject(deferred.promise, e);
      return;
    }
    resolve(deferred.promise, ret);
  });
}

function resolve(self, newValue) {
  try {
    // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
    if (newValue === self)
      throw new TypeError('A promise cannot be resolved with itself.');
    if (
      newValue &&
      (typeof newValue === 'object' || typeof newValue === 'function')
    ) {
      var then = newValue.then;
      if (newValue instanceof Promise) {
        self._state = 3;
        self._value = newValue;
        finale(self);
        return;
      } else if (typeof then === 'function') {
        doResolve(bind(then, newValue), self);
        return;
      }
    }
    self._state = 1;
    self._value = newValue;
    finale(self);
  } catch (e) {
    reject(self, e);
  }
}

function reject(self, newValue) {
  self._state = 2;
  self._value = newValue;
  finale(self);
}

function finale(self) {
  if (self._state === 2 && self._deferreds.length === 0) {
    Promise._immediateFn(function() {
      if (!self._handled) {
        Promise._unhandledRejectionFn(self._value);
      }
    });
  }

  for (var i = 0, len = self._deferreds.length; i < len; i++) {
    handle(self, self._deferreds[i]);
  }
  self._deferreds = null;
}

/**
 * @constructor
 */
function Handler(onFulfilled, onRejected, promise) {
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, self) {
  var done = false;
  try {
    fn(
      function(value) {
        if (done) return;
        done = true;
        resolve(self, value);
      },
      function(reason) {
        if (done) return;
        done = true;
        reject(self, reason);
      }
    );
  } catch (ex) {
    if (done) return;
    done = true;
    reject(self, ex);
  }
}

Promise.prototype['catch'] = function(onRejected) {
  return this.then(null, onRejected);
};

Promise.prototype.then = function(onFulfilled, onRejected) {
  // @ts-ignore
  var prom = new this.constructor(noop);

  handle(this, new Handler(onFulfilled, onRejected, prom));
  return prom;
};

Promise.prototype['finally'] = _finally__WEBPACK_IMPORTED_MODULE_0__.default;

Promise.all = function(arr) {
  return new Promise(function(resolve, reject) {
    if (!isArray(arr)) {
      return reject(new TypeError('Promise.all accepts an array'));
    }

    var args = Array.prototype.slice.call(arr);
    if (args.length === 0) return resolve([]);
    var remaining = args.length;

    function res(i, val) {
      try {
        if (val && (typeof val === 'object' || typeof val === 'function')) {
          var then = val.then;
          if (typeof then === 'function') {
            then.call(
              val,
              function(val) {
                res(i, val);
              },
              reject
            );
            return;
          }
        }
        args[i] = val;
        if (--remaining === 0) {
          resolve(args);
        }
      } catch (ex) {
        reject(ex);
      }
    }

    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.allSettled = _allSettled__WEBPACK_IMPORTED_MODULE_1__.default;

Promise.resolve = function(value) {
  if (value && typeof value === 'object' && value.constructor === Promise) {
    return value;
  }

  return new Promise(function(resolve) {
    resolve(value);
  });
};

Promise.reject = function(value) {
  return new Promise(function(resolve, reject) {
    reject(value);
  });
};

Promise.race = function(arr) {
  return new Promise(function(resolve, reject) {
    if (!isArray(arr)) {
      return reject(new TypeError('Promise.race accepts an array'));
    }

    for (var i = 0, len = arr.length; i < len; i++) {
      Promise.resolve(arr[i]).then(resolve, reject);
    }
  });
};

// Use polyfill for setImmediate for performance gains
Promise._immediateFn =
  // @ts-ignore
  (typeof setImmediate === 'function' &&
    function(fn) {
      // @ts-ignore
      setImmediate(fn);
    }) ||
  function(fn) {
    setTimeoutFunc(fn, 0);
  };

Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
  if (typeof console !== 'undefined' && console) {
    console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Promise);


/***/ }),

/***/ "./node_modules/promise-polyfill/src/polyfill.js":
/*!*******************************************************!*\
  !*** ./node_modules/promise-polyfill/src/polyfill.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/promise-polyfill/src/index.js");
/* harmony import */ var _finally__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./finally */ "./node_modules/promise-polyfill/src/finally.js");
/* harmony import */ var _allSettled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./allSettled */ "./node_modules/promise-polyfill/src/allSettled.js");




/** @suppress {undefinedVars} */
var globalNS = (function() {
  // the only reliable means to get the global object is
  // `Function('return this')()`
  // However, this causes CSP violations in Chrome apps.
  if (typeof self !== 'undefined') {
    return self;
  }
  if (typeof window !== 'undefined') {
    return window;
  }
  if (typeof __webpack_require__.g !== 'undefined') {
    return __webpack_require__.g;
  }
  throw new Error('unable to locate global object');
})();

// Expose the polyfill if Promise is undefined or set to a
// non-function value. The latter can be due to a named HTMLElement
// being exposed by browsers for legacy reasons.
// https://github.com/taylorhakes/promise-polyfill/issues/114
if (typeof globalNS['Promise'] !== 'function') {
  globalNS['Promise'] = _index__WEBPACK_IMPORTED_MODULE_0__.default;
} else if (!globalNS.Promise.prototype['finally']) {
  globalNS.Promise.prototype['finally'] = _finally__WEBPACK_IMPORTED_MODULE_1__.default;
} else if (!globalNS.Promise.allSettled) {
  globalNS.Promise.allSettled = _allSettled__WEBPACK_IMPORTED_MODULE_2__.default;
}


/***/ }),

/***/ "./node_modules/vue/dist/vue.esm.js":
/*!******************************************!*\
  !*** ./node_modules/vue/dist/vue.esm.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
 * Vue.js v2.6.12
 * (c) 2014-2020 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Generate a string containing static keys from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof __webpack_require__.g !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = __webpack_require__.g['process'] && __webpack_require__.g['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;
var targetStack = [];

function pushTarget (target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget () {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var isUsingMicroTask = false;

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
  isUsingMicroTask = true;
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
  isUsingMicroTask = true;
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : 0
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if ( true && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before () {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : 0;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.12';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

var convertEnumeratedValue = function (key, value) {
  return isFalsyAttrValue(value) || value === 'false'
    ? 'false'
    // allow arbitrary string value for contenteditable
    : key === 'contenteditable' && isValidContentEditableValue(value)
      ? value
      : 'true'
};

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
       true && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps = /*#__PURE__*/Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (true) {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if ( true && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (true) {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (true) {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (
    oldVnode,
    vnode,
    insertedVnodeQueue,
    ownerArray,
    index,
    removeOnly
  ) {
    if (oldVnode === vnode) {
      return
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (true) {
          checkDuplicateKeys(ch);
        }
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (true) {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if ( true &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if ( true &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (true) {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm)) {
          removeVnodes([oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      dir.oldArg = oldDir.arg;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, convertEnumeratedValue(key, value));
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && value !== '' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args))
  }
}

/*  */



/* eslint-disable no-unused-vars */
function baseWarn (msg, range) {
  console.error(("[Vue compiler]: " + msg));
}
/* eslint-enable no-unused-vars */

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value, range, dynamic) {
  (el.props || (el.props = [])).push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
  el.plain = false;
}

function addAttr (el, name, value, range, dynamic) {
  var attrs = dynamic
    ? (el.dynamicAttrs || (el.dynamicAttrs = []))
    : (el.attrs || (el.attrs = []));
  attrs.push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
  el.plain = false;
}

// add a raw attr (use this in preTransforms)
function addRawAttr (el, name, value, range) {
  el.attrsMap[name] = value;
  el.attrsList.push(rangeSetItem({ name: name, value: value }, range));
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  isDynamicArg,
  modifiers,
  range
) {
  (el.directives || (el.directives = [])).push(rangeSetItem({
    name: name,
    rawName: rawName,
    value: value,
    arg: arg,
    isDynamicArg: isDynamicArg,
    modifiers: modifiers
  }, range));
  el.plain = false;
}

function prependModifierMarker (symbol, name, dynamic) {
  return dynamic
    ? ("_p(" + name + ",\"" + symbol + "\")")
    : symbol + name // mark the event as captured
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn,
  range,
  dynamic
) {
  modifiers = modifiers || emptyObject;
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
     true && warn &&
    modifiers.prevent && modifiers.passive
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.',
      range
    );
  }

  // normalize click.right and click.middle since they don't actually fire
  // this is technically browser-specific, but at least for now browsers are
  // the only target envs that have right/middle clicks.
  if (modifiers.right) {
    if (dynamic) {
      name = "(" + name + ")==='click'?'contextmenu':(" + name + ")";
    } else if (name === 'click') {
      name = 'contextmenu';
      delete modifiers.right;
    }
  } else if (modifiers.middle) {
    if (dynamic) {
      name = "(" + name + ")==='click'?'mouseup':(" + name + ")";
    } else if (name === 'click') {
      name = 'mouseup';
    }
  }

  // check capture modifier
  if (modifiers.capture) {
    delete modifiers.capture;
    name = prependModifierMarker('!', name, dynamic);
  }
  if (modifiers.once) {
    delete modifiers.once;
    name = prependModifierMarker('~', name, dynamic);
  }
  /* istanbul ignore if */
  if (modifiers.passive) {
    delete modifiers.passive;
    name = prependModifierMarker('&', name, dynamic);
  }

  var events;
  if (modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }

  var newHandler = rangeSetItem({ value: value.trim(), dynamic: dynamic }, range);
  if (modifiers !== emptyObject) {
    newHandler.modifiers = modifiers;
  }

  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }

  el.plain = false;
}

function getRawBindingAttr (
  el,
  name
) {
  return el.rawAttrsMap[':' + name] ||
    el.rawAttrsMap['v-bind:' + name] ||
    el.rawAttrsMap[name]
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr (
  el,
  name,
  removeFromMap
) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  if (removeFromMap) {
    delete el.attrsMap[name];
  }
  return val
}

function getAndRemoveAttrByRegex (
  el,
  name
) {
  var list = el.attrsList;
  for (var i = 0, l = list.length; i < l; i++) {
    var attr = list[i];
    if (name.test(attr.name)) {
      list.splice(i, 1);
      return attr
    }
  }
}

function rangeSetItem (
  item,
  range
) {
  if (range) {
    if (range.start != null) {
      item.start = range.start;
    }
    if (range.end != null) {
      item.end = range.end;
    }
  }
  return item
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
      "? " + baseValueExpression + ".trim()" +
      ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: JSON.stringify(value),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var res = parseModel(value);
  if (res.key === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
  }
}

/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */

var len, str, chr, index$1, expressionPos, expressionEndPos;



function parseModel (val) {
  // Fix https://github.com/vuejs/vue/pull/7730
  // allow v-model="obj.val " (trailing whitespace)
  val = val.trim();
  len = val.length;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    index$1 = val.lastIndexOf('.');
    if (index$1 > -1) {
      return {
        exp: val.slice(0, index$1),
        key: '"' + val.slice(index$1 + 1) + '"'
      }
    } else {
      return {
        exp: val,
        key: null
      }
    }
  }

  str = val;
  index$1 = expressionPos = expressionEndPos = 0;

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.slice(0, expressionPos),
    key: val.slice(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  if (true) {
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead.",
        el.rawAttrsMap['v-model']
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (true) {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.',
      el.rawAttrsMap['v-model']
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
    "?_i(" + value + "," + valueBinding + ")>-1" + (
      trueValueBinding === 'true'
        ? (":(" + value + ")")
        : (":_q(" + value + "," + trueValueBinding + ")")
    )
  );
  addHandler(el, 'change',
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + (genAssignmentCode(value, '$$a.concat([$$v])')) + ")}" +
      "else{$$i>-1&&(" + (genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))')) + ")}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;

  // warn if v-bind:value conflicts with v-model
  // except for inputs with v-bind:type
  if (true) {
    var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
    var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
    if (value$1 && !typeBinding) {
      var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
      warn$1(
        binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
        'because the latter already expands to a value binding internally',
        el.rawAttrsMap[binding]
      );
    }
  }

  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler$1 (event, handler, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

// #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
// implementation and does not fire microtasks in between event propagation, so
// safe to exclude.
var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

function add$1 (
  name,
  handler,
  capture,
  passive
) {
  // async edge case #6566: inner click event triggers patch, event handler
  // attached to outer element during patch, and triggered again. This
  // happens because browsers fire microtask ticks between event propagation.
  // the solution is simple: we save the timestamp when a handler is attached,
  // and the handler would only fire if the event passed to it was fired
  // AFTER it was attached.
  if (useMicrotaskFix) {
    var attachedTimestamp = currentFlushTimestamp;
    var original = handler;
    handler = original._wrapper = function (e) {
      if (
        // no bubbling, should always fire.
        // this is just a safety net in case event.timeStamp is unreliable in
        // certain weird environments...
        e.target === e.currentTarget ||
        // event is fired after handler attachment
        e.timeStamp >= attachedTimestamp ||
        // bail for environments that have buggy event.timeStamp implementations
        // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
        // #9681 QtWebEngine event.timeStamp is negative value
        e.timeStamp <= 0 ||
        // #9448 bail if event is fired in another document in a multi-page
        // electron/nw.js app, since event.timeStamp will be using a different
        // starting reference
        e.target.ownerDocument !== document
      ) {
        return original.apply(this, arguments)
      }
    };
  }
  target$1.addEventListener(
    name,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  name,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    name,
    handler._wrapper || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

var svgContainer;

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (!(key in props)) {
      elm[key] = '';
    }
  }

  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value' && elm.tagName !== 'PROGRESS') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
      // IE doesn't support innerHTML for SVG elements
      svgContainer = svgContainer || document.createElement('div');
      svgContainer.innerHTML = "<svg>" + cur + "</svg>";
      var svg = svgContainer.firstChild;
      while (elm.firstChild) {
        elm.removeChild(elm.firstChild);
      }
      while (svg.firstChild) {
        elm.appendChild(svg.firstChild);
      }
    } else if (
      // skip the update if old and new VDOM state is the same.
      // `value` is handled separately because the DOM value may be temporarily
      // out of sync with VDOM state due to focus, composition and modifiers.
      // This  #4521 by skipping the unnecessary `checked` update.
      cur !== oldProps[key]
    ) {
      // some property updates can throw
      // e.g. `value` on <progress> w/ non-finite value
      try {
        elm[key] = cur;
      } catch (e) {}
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

var whitespaceRE = /\s+/;

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  // JSDOM may return undefined for transition properties
  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

// Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors
function toMs (s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    context = transitionNode.context;
    transitionNode = transitionNode.parent;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if ( true && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if ( true && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
     true && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: directive,
  show: show
};

/*  */

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

var isVShowDirective = function (d) { return d.name === 'show'; };

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(isNotTextNode);
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if ( true && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if ( true &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  beforeMount: function beforeMount () {
    var this$1 = this;

    var update = this._update;
    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1);
      // force removing pass
      this$1.__patch__(
        this$1._vnode,
        this$1.kept,
        false, // hydrating
        true // removeOnly (!important, avoids unnecessary moves)
      );
      this$1._vnode = this$1.kept;
      restoreActiveInstance();
      update.call(this$1, vnode, hydrating);
    };
  },

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (true) {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (e && e.target !== el) {
            return
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
        true
      ) {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if ( true &&
      config.productionTip !== false &&
      typeof console !== 'undefined'
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

var defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});



function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var rawTokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, tokenValue;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      rawTokens.push(tokenValue = text.slice(lastIndex, index));
      tokens.push(JSON.stringify(tokenValue));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    rawTokens.push({ '@binding': exp });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    rawTokens.push(tokenValue = text.slice(lastIndex));
    tokens.push(JSON.stringify(tokenValue));
  }
  return {
    expression: tokens.join('+'),
    tokens: rawTokens
  }
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if ( true && staticClass) {
    var res = parseText(staticClass, options.delimiters);
    if (res) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.',
        el.rawAttrsMap['class']
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
};

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    if (true) {
      var res = parseText(staticStyle, options.delimiters);
      if (res) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.',
          el.rawAttrsMap['style']
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
};

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
};

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/**
 * Not type-checking this file because it's mostly vendor code.
 */

// Regular Expressions for parsing tags and attributes
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
var dynamicArgAttribute = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
var ncname = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + (unicodeRegExp.source) + "]*";
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var startTagOpen = new RegExp(("^<" + qnameCapture));
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
var doctype = /^<!DOCTYPE [^>]+>/i;
// #7298: escape - to avoid being passed as HTML comment when inlined in page
var comment = /^<!\--/;
var conditionalComment = /^<!\[/;

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n',
  '&#9;': '\t',
  '&#39;': "'"
};
var encodedAttr = /&(?:lt|gt|quot|amp|#39);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#39|#10|#9);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd), index, index + commentEnd + 3);
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(startTagMatch.tagName, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
      }

      if (textEnd < 0) {
        text = html;
      }

      if (text) {
        advance(text.length);
      }

      if (options.chars && text) {
        options.chars(text, index - text.length, index);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if ( true && !stack.length && options.warn) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""), { start: index + html.length });
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(dynamicArgAttribute) || html.match(attribute))) {
        attr.start = index;
        advance(attr[0].length);
        attr.end = index;
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      var value = args[3] || args[4] || args[5] || '';
      var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
        ? options.shouldDecodeNewlinesForHref
        : options.shouldDecodeNewlines;
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value, shouldDecodeNewlines)
      };
      if ( true && options.outputSourceRange) {
        attrs[i].start = args.start + args[0].match(/^\s*/).length;
        attrs[i].end = args.end;
      }
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs, start: match.start, end: match.end });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    // Find the closest opened tag of the same type
    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if ( true &&
          (i > pos || !tagName) &&
          options.warn
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag."),
            { start: stack[i].start, end: stack[i].end }
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:|^#/;
var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var stripParensRE = /^\(|\)$/g;
var dynamicArgRE = /^\[.*\]$/;

var argRE = /:(.*)$/;
var bindRE = /^:|^\.|^v-bind:/;
var modifierRE = /\.[^.\]]+(?=[^\]]*$)/g;

var slotRE = /^v-slot(:|$)|^#/;

var lineBreakRE = /[\r\n]/;
var whitespaceRE$1 = /\s+/g;

var invalidAttributeRE = /[\s"'<>\/=]/;

var decodeHTMLCached = cached(he.decode);

var emptySlotScopeToken = "_empty_";

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;
var maybeComponent;

function createASTElement (
  tag,
  attrs,
  parent
) {
  return {
    type: 1,
    tag: tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    rawAttrsMap: {},
    parent: parent,
    children: []
  }
}

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;
  var isReservedTag = options.isReservedTag || no;
  maybeComponent = function (el) { return !!el.component || !isReservedTag(el.tag); };

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var whitespaceOption = options.whitespace;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg, range) {
    if (!warned) {
      warned = true;
      warn$2(msg, range);
    }
  }

  function closeElement (element) {
    trimEndingWhitespace(element);
    if (!inVPre && !element.processed) {
      element = processElement(element, options);
    }
    // tree management
    if (!stack.length && element !== root) {
      // allow root elements with v-if, v-else-if and v-else
      if (root.if && (element.elseif || element.else)) {
        if (true) {
          checkRootConstraints(element);
        }
        addIfCondition(root, {
          exp: element.elseif,
          block: element
        });
      } else if (true) {
        warnOnce(
          "Component template should contain exactly one root element. " +
          "If you are using v-if on multiple elements, " +
          "use v-else-if to chain them instead.",
          { start: element.start }
        );
      }
    }
    if (currentParent && !element.forbidden) {
      if (element.elseif || element.else) {
        processIfConditions(element, currentParent);
      } else {
        if (element.slotScope) {
          // scoped slot
          // keep it in the children list so that v-else(-if) conditions can
          // find it as the prev node.
          var name = element.slotTarget || '"default"'
          ;(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        }
        currentParent.children.push(element);
        element.parent = currentParent;
      }
    }

    // final children cleanup
    // filter out scoped slots
    element.children = element.children.filter(function (c) { return !(c).slotScope; });
    // remove trailing whitespace node again
    trimEndingWhitespace(element);

    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
    // apply post-transforms
    for (var i = 0; i < postTransforms.length; i++) {
      postTransforms[i](element, options);
    }
  }

  function trimEndingWhitespace (el) {
    // remove trailing whitespace node
    if (!inPre) {
      var lastNode;
      while (
        (lastNode = el.children[el.children.length - 1]) &&
        lastNode.type === 3 &&
        lastNode.text === ' '
      ) {
        el.children.pop();
      }
    }
  }

  function checkRootConstraints (el) {
    if (el.tag === 'slot' || el.tag === 'template') {
      warnOnce(
        "Cannot use <" + (el.tag) + "> as component root element because it may " +
        'contain multiple nodes.',
        { start: el.start }
      );
    }
    if (el.attrsMap.hasOwnProperty('v-for')) {
      warnOnce(
        'Cannot use v-for on stateful component root element because ' +
        'it renders multiple elements.',
        el.rawAttrsMap['v-for']
      );
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
    shouldKeepComment: options.comments,
    outputSourceRange: options.outputSourceRange,
    start: function start (tag, attrs, unary, start$1, end) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = createASTElement(tag, attrs, currentParent);
      if (ns) {
        element.ns = ns;
      }

      if (true) {
        if (options.outputSourceRange) {
          element.start = start$1;
          element.end = end;
          element.rawAttrsMap = element.attrsList.reduce(function (cumulated, attr) {
            cumulated[attr.name] = attr;
            return cumulated
          }, {});
        }
        attrs.forEach(function (attr) {
          if (invalidAttributeRE.test(attr.name)) {
            warn$2(
              "Invalid dynamic argument expression: attribute names cannot contain " +
              "spaces, quotes, <, >, / or =.",
              {
                start: attr.start + attr.name.indexOf("["),
                end: attr.start + attr.name.length
              }
            );
          }
        });
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
         true && warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.',
          { start: element.start }
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        element = preTransforms[i](element, options) || element;
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else if (!element.processed) {
        // structural directives
        processFor(element);
        processIf(element);
        processOnce(element);
      }

      if (!root) {
        root = element;
        if (true) {
          checkRootConstraints(root);
        }
      }

      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        closeElement(element);
      }
    },

    end: function end (tag, start, end$1) {
      var element = stack[stack.length - 1];
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      if ( true && options.outputSourceRange) {
        element.end = end$1;
      }
      closeElement(element);
    },

    chars: function chars (text, start, end) {
      if (!currentParent) {
        if (true) {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.',
              { start: start }
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored."),
              { start: start }
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      if (inPre || text.trim()) {
        text = isTextTag(currentParent) ? text : decodeHTMLCached(text);
      } else if (!children.length) {
        // remove the whitespace-only node right after an opening tag
        text = '';
      } else if (whitespaceOption) {
        if (whitespaceOption === 'condense') {
          // in condense mode, remove the whitespace node if it contains
          // line break, otherwise condense to a single space
          text = lineBreakRE.test(text) ? '' : ' ';
        } else {
          text = ' ';
        }
      } else {
        text = preserveWhitespace ? ' ' : '';
      }
      if (text) {
        if (!inPre && whitespaceOption === 'condense') {
          // condense consecutive whitespaces into single space
          text = text.replace(whitespaceRE$1, ' ');
        }
        var res;
        var child;
        if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
          child = {
            type: 2,
            expression: res.expression,
            tokens: res.tokens,
            text: text
          };
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          child = {
            type: 3,
            text: text
          };
        }
        if (child) {
          if ( true && options.outputSourceRange) {
            child.start = start;
            child.end = end;
          }
          children.push(child);
        }
      }
    },
    comment: function comment (text, start, end) {
      // adding anything as a sibling to the root node is forbidden
      // comments should still be allowed, but ignored
      if (currentParent) {
        var child = {
          type: 3,
          text: text,
          isComment: true
        };
        if ( true && options.outputSourceRange) {
          child.start = start;
          child.end = end;
        }
        currentParent.children.push(child);
      }
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var list = el.attrsList;
  var len = list.length;
  if (len) {
    var attrs = el.attrs = new Array(len);
    for (var i = 0; i < len; i++) {
      attrs[i] = {
        name: list[i].name,
        value: JSON.stringify(list[i].value)
      };
      if (list[i].start != null) {
        attrs[i].start = list[i].start;
        attrs[i].end = list[i].end;
      }
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processElement (
  element,
  options
) {
  processKey(element);

  // determine whether this is a plain element after
  // removing structural attributes
  element.plain = (
    !element.key &&
    !element.scopedSlots &&
    !element.attrsList.length
  );

  processRef(element);
  processSlotContent(element);
  processSlotOutlet(element);
  processComponent(element);
  for (var i = 0; i < transforms.length; i++) {
    element = transforms[i](element, options) || element;
  }
  processAttrs(element);
  return element
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    if (true) {
      if (el.tag === 'template') {
        warn$2(
          "<template> cannot be keyed. Place the key on real elements instead.",
          getRawBindingAttr(el, 'key')
        );
      }
      if (el.for) {
        var iterator = el.iterator2 || el.iterator1;
        var parent = el.parent;
        if (iterator && iterator === exp && parent && parent.tag === 'transition-group') {
          warn$2(
            "Do not use v-for index as key on <transition-group> children, " +
            "this is the same as not using keys.",
            getRawBindingAttr(el, 'key'),
            true /* tip */
          );
        }
      }
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var res = parseFor(exp);
    if (res) {
      extend(el, res);
    } else if (true) {
      warn$2(
        ("Invalid v-for expression: " + exp),
        el.rawAttrsMap['v-for']
      );
    }
  }
}



function parseFor (exp) {
  var inMatch = exp.match(forAliasRE);
  if (!inMatch) { return }
  var res = {};
  res.for = inMatch[2].trim();
  var alias = inMatch[1].trim().replace(stripParensRE, '');
  var iteratorMatch = alias.match(forIteratorRE);
  if (iteratorMatch) {
    res.alias = alias.replace(forIteratorRE, '').trim();
    res.iterator1 = iteratorMatch[1].trim();
    if (iteratorMatch[2]) {
      res.iterator2 = iteratorMatch[2].trim();
    }
  } else {
    res.alias = alias;
  }
  return res
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else if (true) {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if.",
      el.rawAttrsMap[el.elseif ? 'v-else-if' : 'v-else']
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if ( true && children[i].text !== ' ') {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored.",
          children[i]
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

// handle content being passed to a component as slot,
// e.g. <template slot="xxx">, <div slot-scope="xxx">
function processSlotContent (el) {
  var slotScope;
  if (el.tag === 'template') {
    slotScope = getAndRemoveAttr(el, 'scope');
    /* istanbul ignore if */
    if ( true && slotScope) {
      warn$2(
        "the \"scope\" attribute for scoped slots have been deprecated and " +
        "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
        "can also be used on plain elements in addition to <template> to " +
        "denote scoped slots.",
        el.rawAttrsMap['scope'],
        true
      );
    }
    el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
  } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
    /* istanbul ignore if */
    if ( true && el.attrsMap['v-for']) {
      warn$2(
        "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
        "(v-for takes higher priority). Use a wrapper <template> for the " +
        "scoped slot to make it clearer.",
        el.rawAttrsMap['slot-scope'],
        true
      );
    }
    el.slotScope = slotScope;
  }

  // slot="xxx"
  var slotTarget = getBindingAttr(el, 'slot');
  if (slotTarget) {
    el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
    el.slotTargetDynamic = !!(el.attrsMap[':slot'] || el.attrsMap['v-bind:slot']);
    // preserve slot as an attribute for native shadow DOM compat
    // only for non-scoped slots.
    if (el.tag !== 'template' && !el.slotScope) {
      addAttr(el, 'slot', slotTarget, getRawBindingAttr(el, 'slot'));
    }
  }

  // 2.6 v-slot syntax
  {
    if (el.tag === 'template') {
      // v-slot on <template>
      var slotBinding = getAndRemoveAttrByRegex(el, slotRE);
      if (slotBinding) {
        if (true) {
          if (el.slotTarget || el.slotScope) {
            warn$2(
              "Unexpected mixed usage of different slot syntaxes.",
              el
            );
          }
          if (el.parent && !maybeComponent(el.parent)) {
            warn$2(
              "<template v-slot> can only appear at the root level inside " +
              "the receiving component",
              el
            );
          }
        }
        var ref = getSlotName(slotBinding);
        var name = ref.name;
        var dynamic = ref.dynamic;
        el.slotTarget = name;
        el.slotTargetDynamic = dynamic;
        el.slotScope = slotBinding.value || emptySlotScopeToken; // force it into a scoped slot for perf
      }
    } else {
      // v-slot on component, denotes default slot
      var slotBinding$1 = getAndRemoveAttrByRegex(el, slotRE);
      if (slotBinding$1) {
        if (true) {
          if (!maybeComponent(el)) {
            warn$2(
              "v-slot can only be used on components or <template>.",
              slotBinding$1
            );
          }
          if (el.slotScope || el.slotTarget) {
            warn$2(
              "Unexpected mixed usage of different slot syntaxes.",
              el
            );
          }
          if (el.scopedSlots) {
            warn$2(
              "To avoid scope ambiguity, the default slot should also use " +
              "<template> syntax when there are other named slots.",
              slotBinding$1
            );
          }
        }
        // add the component's children to its default slot
        var slots = el.scopedSlots || (el.scopedSlots = {});
        var ref$1 = getSlotName(slotBinding$1);
        var name$1 = ref$1.name;
        var dynamic$1 = ref$1.dynamic;
        var slotContainer = slots[name$1] = createASTElement('template', [], el);
        slotContainer.slotTarget = name$1;
        slotContainer.slotTargetDynamic = dynamic$1;
        slotContainer.children = el.children.filter(function (c) {
          if (!c.slotScope) {
            c.parent = slotContainer;
            return true
          }
        });
        slotContainer.slotScope = slotBinding$1.value || emptySlotScopeToken;
        // remove children as they are returned from scopedSlots now
        el.children = [];
        // mark el non-plain so data gets generated
        el.plain = false;
      }
    }
  }
}

function getSlotName (binding) {
  var name = binding.name.replace(slotRE, '');
  if (!name) {
    if (binding.name[0] !== '#') {
      name = 'default';
    } else if (true) {
      warn$2(
        "v-slot shorthand syntax requires a slot name.",
        binding
      );
    }
  }
  return dynamicArgRE.test(name)
    // dynamic [name]
    ? { name: name.slice(1, -1), dynamic: true }
    // static name
    : { name: ("\"" + name + "\""), dynamic: false }
}

// handle <slot/> outlets
function processSlotOutlet (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if ( true && el.key) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead.",
        getRawBindingAttr(el, 'key')
      );
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, syncGen, isDynamic;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name.replace(dirRE, ''));
      // support .foo shorthand syntax for the .prop modifier
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isDynamic = dynamicArgRE.test(name);
        if (isDynamic) {
          name = name.slice(1, -1);
        }
        if (
           true &&
          value.trim().length === 0
        ) {
          warn$2(
            ("The value for a v-bind expression cannot be empty. Found in \"v-bind:" + name + "\"")
          );
        }
        if (modifiers) {
          if (modifiers.prop && !isDynamic) {
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel && !isDynamic) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            syncGen = genAssignmentCode(value, "$event");
            if (!isDynamic) {
              addHandler(
                el,
                ("update:" + (camelize(name))),
                syncGen,
                null,
                false,
                warn$2,
                list[i]
              );
              if (hyphenate(name) !== camelize(name)) {
                addHandler(
                  el,
                  ("update:" + (hyphenate(name))),
                  syncGen,
                  null,
                  false,
                  warn$2,
                  list[i]
                );
              }
            } else {
              // handler w/ dynamic event name
              addHandler(
                el,
                ("\"update:\"+(" + name + ")"),
                syncGen,
                null,
                false,
                warn$2,
                list[i],
                true // dynamic
              );
            }
          }
        }
        if ((modifiers && modifiers.prop) || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value, list[i], isDynamic);
        } else {
          addAttr(el, name, value, list[i], isDynamic);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        isDynamic = dynamicArgRE.test(name);
        if (isDynamic) {
          name = name.slice(1, -1);
        }
        addHandler(el, name, value, modifiers, false, warn$2, list[i], isDynamic);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        isDynamic = false;
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
          if (dynamicArgRE.test(arg)) {
            arg = arg.slice(1, -1);
            isDynamic = true;
          }
        }
        addDirective(el, name, rawName, value, arg, isDynamic, modifiers, list[i]);
        if ( true && name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      if (true) {
        var res = parseText(value, delimiters);
        if (res) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.',
            list[i]
          );
        }
      }
      addAttr(el, name, JSON.stringify(value), list[i]);
      // #6887 firefox doesn't update muted state if set via attribute
      // even immediately after element creation
      if (!el.component &&
          name === 'muted' &&
          platformMustUseProp(el.tag, el.attrsMap.type, name)) {
        addProp(el, name, 'true', list[i]);
      }
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
       true &&
      map[attrs[i].name] && !isIE && !isEdge
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name, attrs[i]);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead.",
        el.rawAttrsMap['v-model']
      );
    }
    _el = _el.parent;
  }
}

/*  */

function preTransformNode (el, options) {
  if (el.tag === 'input') {
    var map = el.attrsMap;
    if (!map['v-model']) {
      return
    }

    var typeBinding;
    if (map[':type'] || map['v-bind:type']) {
      typeBinding = getBindingAttr(el, 'type');
    }
    if (!map.type && !typeBinding && map['v-bind']) {
      typeBinding = "(" + (map['v-bind']) + ").type";
    }

    if (typeBinding) {
      var ifCondition = getAndRemoveAttr(el, 'v-if', true);
      var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
      var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
      var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
      // 1. checkbox
      var branch0 = cloneASTElement(el);
      // process for on the main node
      processFor(branch0);
      addRawAttr(branch0, 'type', 'checkbox');
      processElement(branch0, options);
      branch0.processed = true; // prevent it from double-processed
      branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
      addIfCondition(branch0, {
        exp: branch0.if,
        block: branch0
      });
      // 2. add radio else-if condition
      var branch1 = cloneASTElement(el);
      getAndRemoveAttr(branch1, 'v-for', true);
      addRawAttr(branch1, 'type', 'radio');
      processElement(branch1, options);
      addIfCondition(branch0, {
        exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
        block: branch1
      });
      // 3. other
      var branch2 = cloneASTElement(el);
      getAndRemoveAttr(branch2, 'v-for', true);
      addRawAttr(branch2, ':type', typeBinding);
      processElement(branch2, options);
      addIfCondition(branch0, {
        exp: ifCondition,
        block: branch2
      });

      if (hasElse) {
        branch0.else = true;
      } else if (elseIfCondition) {
        branch0.elseif = elseIfCondition;
      }

      return branch0
    }
  }
}

function cloneASTElement (el) {
  return createASTElement(el.tag, el.attrsList.slice(), el.parent)
}

var model$1 = {
  preTransformNode: preTransformNode
};

var modules$1 = [
  klass$1,
  style$1,
  model$1
];

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"), dir);
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"), dir);
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
};

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/;
var fnInvokeRE = /\([^)]*?\);*$/;
var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

// KeyboardEvent.keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// KeyboardEvent.key aliases
var keyNames = {
  // #7880: IE11 and Edge use `Esc` for Escape key name.
  esc: ['Esc', 'Escape'],
  tab: 'Tab',
  enter: 'Enter',
  // #9112: IE11 uses `Spacebar` for Space key name.
  space: [' ', 'Spacebar'],
  // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
  up: ['Up', 'ArrowUp'],
  left: ['Left', 'ArrowLeft'],
  right: ['Right', 'ArrowRight'],
  down: ['Down', 'ArrowDown'],
  // #9112: IE11 uses `Del` for Delete key name.
  'delete': ['Backspace', 'Delete', 'Del']
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative
) {
  var prefix = isNative ? 'nativeOn:' : 'on:';
  var staticHandlers = "";
  var dynamicHandlers = "";
  for (var name in events) {
    var handlerCode = genHandler(events[name]);
    if (events[name] && events[name].dynamic) {
      dynamicHandlers += name + "," + handlerCode + ",";
    } else {
      staticHandlers += "\"" + name + "\":" + handlerCode + ",";
    }
  }
  staticHandlers = "{" + (staticHandlers.slice(0, -1)) + "}";
  if (dynamicHandlers) {
    return prefix + "_d(" + staticHandlers + ",[" + (dynamicHandlers.slice(0, -1)) + "])"
  } else {
    return prefix + staticHandlers
  }
}

function genHandler (handler) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);
  var isFunctionInvocation = simplePathRE.test(handler.value.replace(fnInvokeRE, ''));

  if (!handler.modifiers) {
    if (isMethodPath || isFunctionExpression) {
      return handler.value
    }
    return ("function($event){" + (isFunctionInvocation ? ("return " + (handler.value)) : handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else if (key === 'exact') {
        var modifiers = (handler.modifiers);
        genModifierCode += genGuard(
          ['ctrl', 'shift', 'alt', 'meta']
            .filter(function (keyModifier) { return !modifiers[keyModifier]; })
            .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
            .join('||')
        );
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? ("return " + (handler.value) + "($event)")
      : isFunctionExpression
        ? ("return (" + (handler.value) + ")($event)")
        : isFunctionInvocation
          ? ("return " + (handler.value))
          : handler.value;
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return (
    // make sure the key filters only apply to KeyboardEvents
    // #9441: can't use 'keyCode' in $event because Chrome autofill fires fake
    // key events that do not have keyCode property...
    "if(!$event.type.indexOf('key')&&" +
    (keys.map(genFilterCode).join('&&')) + ")return null;"
  )
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var keyCode = keyCodes[key];
  var keyName = keyNames[key];
  return (
    "_k($event.keyCode," +
    (JSON.stringify(key)) + "," +
    (JSON.stringify(keyCode)) + "," +
    "$event.key," +
    "" + (JSON.stringify(keyName)) +
    ")"
  )
}

/*  */

function on (el, dir) {
  if ( true && dir.modifiers) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
};

/*  */





var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !!el.component || !isReservedTag(el.tag); };
  this.onceId = 0;
  this.staticRenderFns = [];
  this.pre = false;
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.parent) {
    el.pre = el.pre || el.parent.pre;
  }

  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data;
      if (!el.plain || (el.pre && state.maybeComponent(el))) {
        data = genData$2(el, state);
      }

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state) {
  el.staticProcessed = true;
  // Some elements (templates) need to behave differently inside of a v-pre
  // node.  All pre nodes are static roots, so we can use this as a location to
  // wrap a state change and reset it upon exiting the pre node.
  var originalPreState = state.pre;
  if (el.pre) {
    state.pre = el.pre;
  }
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  state.pre = originalPreState;
  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
       true && state.warn(
        "v-once can only be used inside v-for that is keyed. ",
        el.rawAttrsMap['v-once']
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
  } else {
    return genStatic(el, state)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if ( true &&
    state.maybeComponent(el) &&
    el.tag !== 'slot' &&
    el.tag !== 'template' &&
    !el.key
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      el.rawAttrsMap['v-for'],
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:" + (genProps(el.attrs)) + ",";
  }
  // DOM props
  if (el.props) {
    data += "domProps:" + (genProps(el.props)) + ",";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true)) + ",";
  }
  // slot target
  // only for non-scoped slots
  if (el.slotTarget && !el.slotScope) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el, el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind dynamic argument wrap
  // v-bind with dynamic arguments must be applied using the same v-bind object
  // merge helper so that class/style/mustUseProp attrs are handled correctly.
  if (el.dynamicAttrs) {
    data = "_b(" + data + ",\"" + (el.tag) + "\"," + (genProps(el.dynamicAttrs)) + ")";
  }
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:" + (dir.isDynamicArg ? dir.arg : ("\"" + (dir.arg) + "\""))) : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if ( true && (
    el.children.length !== 1 || ast.type !== 1
  )) {
    state.warn(
      'Inline-template components must have exactly one child element.',
      { start: el.start }
    );
  }
  if (ast && ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  el,
  slots,
  state
) {
  // by default scoped slots are considered "stable", this allows child
  // components with only scoped slots to skip forced updates from parent.
  // but in some cases we have to bail-out of this optimization
  // for example if the slot contains dynamic names, has v-if or v-for on them...
  var needsForceUpdate = el.for || Object.keys(slots).some(function (key) {
    var slot = slots[key];
    return (
      slot.slotTargetDynamic ||
      slot.if ||
      slot.for ||
      containsSlotChild(slot) // is passing down slot from parent which may be dynamic
    )
  });

  // #9534: if a component with scoped slots is inside a conditional branch,
  // it's possible for the same component to be reused but with different
  // compiled slot content. To avoid that, we generate a unique key based on
  // the generated code of all the slot contents.
  var needsKey = !!el.if;

  // OR when it is inside another scoped slot or v-for (the reactivity may be
  // disconnected due to the intermediate scope variable)
  // #9438, #9506
  // TODO: this can be further optimized by properly analyzing in-scope bindings
  // and skip force updating ones that do not actually use scope variables.
  if (!needsForceUpdate) {
    var parent = el.parent;
    while (parent) {
      if (
        (parent.slotScope && parent.slotScope !== emptySlotScopeToken) ||
        parent.for
      ) {
        needsForceUpdate = true;
        break
      }
      if (parent.if) {
        needsKey = true;
      }
      parent = parent.parent;
    }
  }

  var generatedSlots = Object.keys(slots)
    .map(function (key) { return genScopedSlot(slots[key], state); })
    .join(',');

  return ("scopedSlots:_u([" + generatedSlots + "]" + (needsForceUpdate ? ",null,true" : "") + (!needsForceUpdate && needsKey ? (",null,false," + (hash(generatedSlots))) : "") + ")")
}

function hash(str) {
  var hash = 5381;
  var i = str.length;
  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }
  return hash >>> 0
}

function containsSlotChild (el) {
  if (el.type === 1) {
    if (el.tag === 'slot') {
      return true
    }
    return el.children.some(containsSlotChild)
  }
  return false
}

function genScopedSlot (
  el,
  state
) {
  var isLegacySyntax = el.attrsMap['slot-scope'];
  if (el.if && !el.ifProcessed && !isLegacySyntax) {
    return genIf(el, state, genScopedSlot, "null")
  }
  if (el.for && !el.forProcessed) {
    return genFor(el, state, genScopedSlot)
  }
  var slotScope = el.slotScope === emptySlotScopeToken
    ? ""
    : String(el.slotScope);
  var fn = "function(" + slotScope + "){" +
    "return " + (el.tag === 'template'
      ? el.if && isLegacySyntax
        ? ("(" + (el.if) + ")?" + (genChildren(el, state) || 'undefined') + ":undefined")
        : genChildren(el, state) || 'undefined'
      : genElement(el, state)) + "}";
  // reverse proxy v-slot without scope on this.$slots
  var reverseProxy = slotScope ? "" : ",proxy:true";
  return ("{key:" + (el.slotTarget || "\"default\"") + ",fn:" + fn + reverseProxy + "}")
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      var normalizationType = checkSkip
        ? state.maybeComponent(el$1) ? ",1" : ",0"
        : "";
      return ("" + ((altGenElement || genElement)(el$1, state)) + normalizationType)
    }
    var normalizationType$1 = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType$1 ? ("," + normalizationType$1) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } else if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs || el.dynamicAttrs
    ? genProps((el.attrs || []).concat(el.dynamicAttrs || []).map(function (attr) { return ({
        // slot props are camelized
        name: camelize(attr.name),
        value: attr.value,
        dynamic: attr.dynamic
      }); }))
    : null;
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var staticProps = "";
  var dynamicProps = "";
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    var value = transformSpecialNewlines(prop.value);
    if (prop.dynamic) {
      dynamicProps += (prop.name) + "," + value + ",";
    } else {
      staticProps += "\"" + (prop.name) + "\":" + value + ",";
    }
  }
  staticProps = "{" + (staticProps.slice(0, -1)) + "}";
  if (dynamicProps) {
    return ("_d(" + staticProps + ",[" + (dynamicProps.slice(0, -1)) + "])")
  } else {
    return staticProps
  }
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */



// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast, warn) {
  if (ast) {
    checkNode(ast, warn);
  }
}

function checkNode (node, warn) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          var range = node.rawAttrsMap[name];
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), warn, range);
          } else if (name === 'v-slot' || name[0] === '#') {
            checkFunctionParameterExpression(value, (name + "=\"" + value + "\""), warn, range);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), warn, range);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), warn, range);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], warn);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, warn, node);
  }
}

function checkEvent (exp, text, warn, range) {
  var stripped = exp.replace(stripStringRE, '');
  var keywordMatch = stripped.match(unaryOperatorsRE);
  if (keywordMatch && stripped.charAt(keywordMatch.index - 1) !== '$') {
    warn(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim()),
      range
    );
  }
  checkExpression(exp, text, warn, range);
}

function checkFor (node, text, warn, range) {
  checkExpression(node.for || '', text, warn, range);
  checkIdentifier(node.alias, 'v-for alias', text, warn, range);
  checkIdentifier(node.iterator1, 'v-for iterator', text, warn, range);
  checkIdentifier(node.iterator2, 'v-for iterator', text, warn, range);
}

function checkIdentifier (
  ident,
  type,
  text,
  warn,
  range
) {
  if (typeof ident === 'string') {
    try {
      new Function(("var " + ident + "=_"));
    } catch (e) {
      warn(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())), range);
    }
  }
}

function checkExpression (exp, text, warn, range) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      warn(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim()),
        range
      );
    } else {
      warn(
        "invalid expression: " + (e.message) + " in\n\n" +
        "    " + exp + "\n\n" +
        "  Raw expression: " + (text.trim()) + "\n",
        range
      );
    }
  }
}

function checkFunctionParameterExpression (exp, text, warn, range) {
  try {
    new Function(exp, '');
  } catch (e) {
    warn(
      "invalid function parameter expression: " + (e.message) + " in\n\n" +
      "    " + exp + "\n\n" +
      "  Raw expression: " + (text.trim()) + "\n",
      range
    );
  }
}

/*  */

var range = 2;

function generateCodeFrame (
  source,
  start,
  end
) {
  if ( start === void 0 ) start = 0;
  if ( end === void 0 ) end = source.length;

  var lines = source.split(/\r?\n/);
  var count = 0;
  var res = [];
  for (var i = 0; i < lines.length; i++) {
    count += lines[i].length + 1;
    if (count >= start) {
      for (var j = i - range; j <= i + range || end > count; j++) {
        if (j < 0 || j >= lines.length) { continue }
        res.push(("" + (j + 1) + (repeat$1(" ", 3 - String(j + 1).length)) + "|  " + (lines[j])));
        var lineLength = lines[j].length;
        if (j === i) {
          // push underline
          var pad = start - (count - lineLength) + 1;
          var length = end > count ? lineLength - pad : end - start;
          res.push("   |  " + repeat$1(" ", pad) + repeat$1("^", length));
        } else if (j > i) {
          if (end > count) {
            var length$1 = Math.min(end - count, lineLength);
            res.push("   |  " + repeat$1("^", length$1));
          }
          count += lineLength + 1;
        }
      }
      break
    }
  }
  return res.join('\n')
}

function repeat$1 (str, n) {
  var result = '';
  if (n > 0) {
    while (true) { // eslint-disable-line
      if (n & 1) { result += str; }
      n >>>= 1;
      if (n <= 0) { break }
      str += str;
    }
  }
  return result
}

/*  */



function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = extend({}, options);
    var warn$$1 = options.warn || warn;
    delete options.warn;

    /* istanbul ignore if */
    if (true) {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn$$1(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    if (true) {
      if (compiled.errors && compiled.errors.length) {
        if (options.outputSourceRange) {
          compiled.errors.forEach(function (e) {
            warn$$1(
              "Error compiling template:\n\n" + (e.msg) + "\n\n" +
              generateCodeFrame(template, e.start, e.end),
              vm
            );
          });
        } else {
          warn$$1(
            "Error compiling template:\n\n" + template + "\n\n" +
            compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
            vm
          );
        }
      }
      if (compiled.tips && compiled.tips.length) {
        if (options.outputSourceRange) {
          compiled.tips.forEach(function (e) { return tip(e.msg, vm); });
        } else {
          compiled.tips.forEach(function (msg) { return tip(msg, vm); });
        }
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    if (true) {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn$$1(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];

      var warn = function (msg, range, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        if ( true && options.outputSourceRange) {
          // $flow-disable-line
          var leadingSpaceLength = template.match(/^\s*/)[0].length;

          warn = function (msg, range, tip) {
            var data = { msg: msg };
            if (range) {
              if (range.start != null) {
                data.start = range.start + leadingSpaceLength;
              }
              if (range.end != null) {
                data.end = range.end + leadingSpaceLength;
              }
            }
            (tip ? tips : errors).push(data);
          };
        }
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives || null),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      finalOptions.warn = warn;

      var compiled = baseCompile(template.trim(), finalOptions);
      if (true) {
        detectErrors(compiled.ast, warn);
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  if (options.optimize !== false) {
    optimize(ast, options);
  }
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compile = ref$1.compile;
var compileToFunctions = ref$1.compileToFunctions;

/*  */

// check whether current browser encodes a char inside attribute values
var div;
function getShouldDecode (href) {
  div = div || document.createElement('div');
  div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
  return div.innerHTML.indexOf('&#10;') > 0
}

// #3663: IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
// #6828: chrome encodes content in a[href]
var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue.prototype.$mount;
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
     true && warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if ( true && !template) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        if (true) {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if ( true && config.performance && mark) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        outputSourceRange: "development" !== 'production',
        shouldDecodeNewlines: shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if ( true && config.performance && mark) {
        mark('compile end');
        measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue.compile = compileToFunctions;

/* harmony default export */ __webpack_exports__["default"] = (Vue);


/***/ }),

/***/ "./node_modules/what-input/dist/what-input.js":
/*!****************************************************!*\
  !*** ./node_modules/what-input/dist/what-input.js ***!
  \****************************************************/
/***/ (function(module) {

/**
 * what-input - A global utility for tracking the current input method (mouse, keyboard or touch).
 * @version v5.2.10
 * @link https://github.com/ten1seven/what-input
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __nested_webpack_require_738__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_738__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_738__.m = modules;

/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_738__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_738__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_738__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = function () {
	  /*
	   * bail out if there is no document or window
	   * (i.e. in a node/non-DOM environment)
	   *
	   * Return a stubbed API instead
	   */
	  if (typeof document === 'undefined' || typeof window === 'undefined') {
	    return {
	      // always return "initial" because no interaction will ever be detected
	      ask: function ask() {
	        return 'initial';
	      },

	      // always return null
	      element: function element() {
	        return null;
	      },

	      // no-op
	      ignoreKeys: function ignoreKeys() {},

	      // no-op
	      specificKeys: function specificKeys() {},

	      // no-op
	      registerOnChange: function registerOnChange() {},

	      // no-op
	      unRegisterOnChange: function unRegisterOnChange() {}
	    };
	  }

	  /*
	   * variables
	   */

	  // cache document.documentElement
	  var docElem = document.documentElement;

	  // currently focused dom element
	  var currentElement = null;

	  // last used input type
	  var currentInput = 'initial';

	  // last used input intent
	  var currentIntent = currentInput;

	  // UNIX timestamp of current event
	  var currentTimestamp = Date.now();

	  // check for a `data-whatpersist` attribute on either the `html` or `body` elements, defaults to `true`
	  var shouldPersist = 'false';

	  // form input types
	  var formInputs = ['button', 'input', 'select', 'textarea'];

	  // empty array for holding callback functions
	  var functionList = [];

	  // list of modifier keys commonly used with the mouse and
	  // can be safely ignored to prevent false keyboard detection
	  var ignoreMap = [16, // shift
	  17, // control
	  18, // alt
	  91, // Windows key / left Apple cmd
	  93 // Windows menu / right Apple cmd
	  ];

	  var specificMap = [];

	  // mapping of events to input types
	  var inputMap = {
	    keydown: 'keyboard',
	    keyup: 'keyboard',
	    mousedown: 'mouse',
	    mousemove: 'mouse',
	    MSPointerDown: 'pointer',
	    MSPointerMove: 'pointer',
	    pointerdown: 'pointer',
	    pointermove: 'pointer',
	    touchstart: 'touch',
	    touchend: 'touch'

	    // boolean: true if the page is being scrolled
	  };var isScrolling = false;

	  // store current mouse position
	  var mousePos = {
	    x: null,
	    y: null

	    // map of IE 10 pointer events
	  };var pointerMap = {
	    2: 'touch',
	    3: 'touch', // treat pen like touch
	    4: 'mouse'

	    // check support for passive event listeners
	  };var supportsPassive = false;

	  try {
	    var opts = Object.defineProperty({}, 'passive', {
	      get: function get() {
	        supportsPassive = true;
	      }
	    });

	    window.addEventListener('test', null, opts);
	  } catch (e) {}
	  // fail silently


	  /*
	   * set up
	   */

	  var setUp = function setUp() {
	    // add correct mouse wheel event mapping to `inputMap`
	    inputMap[detectWheel()] = 'mouse';

	    addListeners();
	  };

	  /*
	   * events
	   */

	  var addListeners = function addListeners() {
	    // `pointermove`, `MSPointerMove`, `mousemove` and mouse wheel event binding
	    // can only demonstrate potential, but not actual, interaction
	    // and are treated separately
	    var options = supportsPassive ? { passive: true } : false;

	    document.addEventListener('DOMContentLoaded', setPersist);

	    // pointer events (mouse, pen, touch)
	    if (window.PointerEvent) {
	      window.addEventListener('pointerdown', setInput);
	      window.addEventListener('pointermove', setIntent);
	    } else if (window.MSPointerEvent) {
	      window.addEventListener('MSPointerDown', setInput);
	      window.addEventListener('MSPointerMove', setIntent);
	    } else {
	      // mouse events
	      window.addEventListener('mousedown', setInput);
	      window.addEventListener('mousemove', setIntent);

	      // touch events
	      if ('ontouchstart' in window) {
	        window.addEventListener('touchstart', setInput, options);
	        window.addEventListener('touchend', setInput);
	      }
	    }

	    // mouse wheel
	    window.addEventListener(detectWheel(), setIntent, options);

	    // keyboard events
	    window.addEventListener('keydown', setInput);
	    window.addEventListener('keyup', setInput);

	    // focus events
	    window.addEventListener('focusin', setElement);
	    window.addEventListener('focusout', clearElement);
	  };

	  // checks if input persistence should happen and
	  // get saved state from session storage if true (defaults to `false`)
	  var setPersist = function setPersist() {
	    shouldPersist = !(docElem.getAttribute('data-whatpersist') || document.body.getAttribute('data-whatpersist') === 'false');

	    if (shouldPersist) {
	      // check for session variables and use if available
	      try {
	        if (window.sessionStorage.getItem('what-input')) {
	          currentInput = window.sessionStorage.getItem('what-input');
	        }

	        if (window.sessionStorage.getItem('what-intent')) {
	          currentIntent = window.sessionStorage.getItem('what-intent');
	        }
	      } catch (e) {
	        // fail silently
	      }
	    }

	    // always run these so at least `initial` state is set
	    doUpdate('input');
	    doUpdate('intent');
	  };

	  // checks conditions before updating new input
	  var setInput = function setInput(event) {
	    var eventKey = event.which;
	    var value = inputMap[event.type];

	    if (value === 'pointer') {
	      value = pointerType(event);
	    }

	    var ignoreMatch = !specificMap.length && ignoreMap.indexOf(eventKey) === -1;

	    var specificMatch = specificMap.length && specificMap.indexOf(eventKey) !== -1;

	    var shouldUpdate = value === 'keyboard' && eventKey && (ignoreMatch || specificMatch) || value === 'mouse' || value === 'touch';

	    // prevent touch detection from being overridden by event execution order
	    if (validateTouch(value)) {
	      shouldUpdate = false;
	    }

	    if (shouldUpdate && currentInput !== value) {
	      currentInput = value;

	      persistInput('input', currentInput);
	      doUpdate('input');
	    }

	    if (shouldUpdate && currentIntent !== value) {
	      // preserve intent for keyboard interaction with form fields
	      var activeElem = document.activeElement;
	      var notFormInput = activeElem && activeElem.nodeName && (formInputs.indexOf(activeElem.nodeName.toLowerCase()) === -1 || activeElem.nodeName.toLowerCase() === 'button' && !checkClosest(activeElem, 'form'));

	      if (notFormInput) {
	        currentIntent = value;

	        persistInput('intent', currentIntent);
	        doUpdate('intent');
	      }
	    }
	  };

	  // updates the doc and `inputTypes` array with new input
	  var doUpdate = function doUpdate(which) {
	    docElem.setAttribute('data-what' + which, which === 'input' ? currentInput : currentIntent);

	    fireFunctions(which);
	  };

	  // updates input intent for `mousemove` and `pointermove`
	  var setIntent = function setIntent(event) {
	    var value = inputMap[event.type];

	    if (value === 'pointer') {
	      value = pointerType(event);
	    }

	    // test to see if `mousemove` happened relative to the screen to detect scrolling versus mousemove
	    detectScrolling(event);

	    // only execute if scrolling isn't happening
	    if ((!isScrolling && !validateTouch(value) || isScrolling && event.type === 'wheel' || event.type === 'mousewheel' || event.type === 'DOMMouseScroll') && currentIntent !== value) {
	      currentIntent = value;

	      persistInput('intent', currentIntent);
	      doUpdate('intent');
	    }
	  };

	  var setElement = function setElement(event) {
	    if (!event.target.nodeName) {
	      // If nodeName is undefined, clear the element
	      // This can happen if click inside an <svg> element.
	      clearElement();
	      return;
	    }

	    currentElement = event.target.nodeName.toLowerCase();
	    docElem.setAttribute('data-whatelement', currentElement);

	    if (event.target.classList && event.target.classList.length) {
	      docElem.setAttribute('data-whatclasses', event.target.classList.toString().replace(' ', ','));
	    }
	  };

	  var clearElement = function clearElement() {
	    currentElement = null;

	    docElem.removeAttribute('data-whatelement');
	    docElem.removeAttribute('data-whatclasses');
	  };

	  var persistInput = function persistInput(which, value) {
	    if (shouldPersist) {
	      try {
	        window.sessionStorage.setItem('what-' + which, value);
	      } catch (e) {
	        // fail silently
	      }
	    }
	  };

	  /*
	   * utilities
	   */

	  var pointerType = function pointerType(event) {
	    if (typeof event.pointerType === 'number') {
	      return pointerMap[event.pointerType];
	    } else {
	      // treat pen like touch
	      return event.pointerType === 'pen' ? 'touch' : event.pointerType;
	    }
	  };

	  // prevent touch detection from being overridden by event execution order
	  var validateTouch = function validateTouch(value) {
	    var timestamp = Date.now();

	    var touchIsValid = value === 'mouse' && currentInput === 'touch' && timestamp - currentTimestamp < 200;

	    currentTimestamp = timestamp;

	    return touchIsValid;
	  };

	  // detect version of mouse wheel event to use
	  // via https://developer.mozilla.org/en-US/docs/Web/API/Element/wheel_event
	  var detectWheel = function detectWheel() {
	    var wheelType = null;

	    // Modern browsers support "wheel"
	    if ('onwheel' in document.createElement('div')) {
	      wheelType = 'wheel';
	    } else {
	      // Webkit and IE support at least "mousewheel"
	      // or assume that remaining browsers are older Firefox
	      wheelType = document.onmousewheel !== undefined ? 'mousewheel' : 'DOMMouseScroll';
	    }

	    return wheelType;
	  };

	  // runs callback functions
	  var fireFunctions = function fireFunctions(type) {
	    for (var i = 0, len = functionList.length; i < len; i++) {
	      if (functionList[i].type === type) {
	        functionList[i].fn.call(undefined, type === 'input' ? currentInput : currentIntent);
	      }
	    }
	  };

	  // finds matching element in an object
	  var objPos = function objPos(match) {
	    for (var i = 0, len = functionList.length; i < len; i++) {
	      if (functionList[i].fn === match) {
	        return i;
	      }
	    }
	  };

	  var detectScrolling = function detectScrolling(event) {
	    if (mousePos.x !== event.screenX || mousePos.y !== event.screenY) {
	      isScrolling = false;

	      mousePos.x = event.screenX;
	      mousePos.y = event.screenY;
	    } else {
	      isScrolling = true;
	    }
	  };

	  // manual version of `closest()`
	  var checkClosest = function checkClosest(elem, tag) {
	    var ElementPrototype = window.Element.prototype;

	    if (!ElementPrototype.matches) {
	      ElementPrototype.matches = ElementPrototype.msMatchesSelector || ElementPrototype.webkitMatchesSelector;
	    }

	    if (!ElementPrototype.closest) {
	      do {
	        if (elem.matches(tag)) {
	          return elem;
	        }

	        elem = elem.parentElement || elem.parentNode;
	      } while (elem !== null && elem.nodeType === 1);

	      return null;
	    } else {
	      return elem.closest(tag);
	    }
	  };

	  /*
	   * init
	   */

	  // don't start script unless browser cuts the mustard
	  // (also passes if polyfills are used)
	  if ('addEventListener' in window && Array.prototype.indexOf) {
	    setUp();
	  }

	  /*
	   * api
	   */

	  return {
	    // returns string: the current input type
	    // opt: 'intent'|'input'
	    // 'input' (default): returns the same value as the `data-whatinput` attribute
	    // 'intent': includes `data-whatintent` value if it's different than `data-whatinput`
	    ask: function ask(opt) {
	      return opt === 'intent' ? currentIntent : currentInput;
	    },

	    // returns string: the currently focused element or null
	    element: function element() {
	      return currentElement;
	    },

	    // overwrites ignored keys with provided array
	    ignoreKeys: function ignoreKeys(arr) {
	      ignoreMap = arr;
	    },

	    // overwrites specific char keys to update on
	    specificKeys: function specificKeys(arr) {
	      specificMap = arr;
	    },

	    // attach functions to input and intent "events"
	    // funct: function to fire on change
	    // eventType: 'input'|'intent'
	    registerOnChange: function registerOnChange(fn, eventType) {
	      functionList.push({
	        fn: fn,
	        type: eventType || 'input'
	      });
	    },

	    unRegisterOnChange: function unRegisterOnChange(fn) {
	      var position = objPos(fn);

	      if (position || position === 0) {
	        functionList.splice(position, 1);
	      }
	    },

	    clearStorage: function clearStorage() {
	      window.sessionStorage.clear();
	    }
	  };
	}();

/***/ })
/******/ ])
});
;

/***/ }),

/***/ "./node_modules/whatwg-fetch/fetch.js":
/*!********************************************!*\
  !*** ./node_modules/whatwg-fetch/fetch.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Headers": function() { return /* binding */ Headers; },
/* harmony export */   "Request": function() { return /* binding */ Request; },
/* harmony export */   "Response": function() { return /* binding */ Response; },
/* harmony export */   "DOMException": function() { return /* binding */ DOMException; },
/* harmony export */   "fetch": function() { return /* binding */ fetch; }
/* harmony export */ });
var global =
  (typeof globalThis !== 'undefined' && globalThis) ||
  (typeof self !== 'undefined' && self) ||
  (typeof global !== 'undefined' && global)

var support = {
  searchParams: 'URLSearchParams' in global,
  iterable: 'Symbol' in global && 'iterator' in Symbol,
  blob:
    'FileReader' in global &&
    'Blob' in global &&
    (function() {
      try {
        new Blob()
        return true
      } catch (e) {
        return false
      }
    })(),
  formData: 'FormData' in global,
  arrayBuffer: 'ArrayBuffer' in global
}

function isDataView(obj) {
  return obj && DataView.prototype.isPrototypeOf(obj)
}

if (support.arrayBuffer) {
  var viewClasses = [
    '[object Int8Array]',
    '[object Uint8Array]',
    '[object Uint8ClampedArray]',
    '[object Int16Array]',
    '[object Uint16Array]',
    '[object Int32Array]',
    '[object Uint32Array]',
    '[object Float32Array]',
    '[object Float64Array]'
  ]

  var isArrayBufferView =
    ArrayBuffer.isView ||
    function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
}

function normalizeName(name) {
  if (typeof name !== 'string') {
    name = String(name)
  }
  if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === '') {
    throw new TypeError('Invalid character in header field name: "' + name + '"')
  }
  return name.toLowerCase()
}

function normalizeValue(value) {
  if (typeof value !== 'string') {
    value = String(value)
  }
  return value
}

// Build a destructive iterator for the value list
function iteratorFor(items) {
  var iterator = {
    next: function() {
      var value = items.shift()
      return {done: value === undefined, value: value}
    }
  }

  if (support.iterable) {
    iterator[Symbol.iterator] = function() {
      return iterator
    }
  }

  return iterator
}

function Headers(headers) {
  this.map = {}

  if (headers instanceof Headers) {
    headers.forEach(function(value, name) {
      this.append(name, value)
    }, this)
  } else if (Array.isArray(headers)) {
    headers.forEach(function(header) {
      this.append(header[0], header[1])
    }, this)
  } else if (headers) {
    Object.getOwnPropertyNames(headers).forEach(function(name) {
      this.append(name, headers[name])
    }, this)
  }
}

Headers.prototype.append = function(name, value) {
  name = normalizeName(name)
  value = normalizeValue(value)
  var oldValue = this.map[name]
  this.map[name] = oldValue ? oldValue + ', ' + value : value
}

Headers.prototype['delete'] = function(name) {
  delete this.map[normalizeName(name)]
}

Headers.prototype.get = function(name) {
  name = normalizeName(name)
  return this.has(name) ? this.map[name] : null
}

Headers.prototype.has = function(name) {
  return this.map.hasOwnProperty(normalizeName(name))
}

Headers.prototype.set = function(name, value) {
  this.map[normalizeName(name)] = normalizeValue(value)
}

Headers.prototype.forEach = function(callback, thisArg) {
  for (var name in this.map) {
    if (this.map.hasOwnProperty(name)) {
      callback.call(thisArg, this.map[name], name, this)
    }
  }
}

Headers.prototype.keys = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push(name)
  })
  return iteratorFor(items)
}

Headers.prototype.values = function() {
  var items = []
  this.forEach(function(value) {
    items.push(value)
  })
  return iteratorFor(items)
}

Headers.prototype.entries = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push([name, value])
  })
  return iteratorFor(items)
}

if (support.iterable) {
  Headers.prototype[Symbol.iterator] = Headers.prototype.entries
}

function consumed(body) {
  if (body.bodyUsed) {
    return Promise.reject(new TypeError('Already read'))
  }
  body.bodyUsed = true
}

function fileReaderReady(reader) {
  return new Promise(function(resolve, reject) {
    reader.onload = function() {
      resolve(reader.result)
    }
    reader.onerror = function() {
      reject(reader.error)
    }
  })
}

function readBlobAsArrayBuffer(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsArrayBuffer(blob)
  return promise
}

function readBlobAsText(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsText(blob)
  return promise
}

function readArrayBufferAsText(buf) {
  var view = new Uint8Array(buf)
  var chars = new Array(view.length)

  for (var i = 0; i < view.length; i++) {
    chars[i] = String.fromCharCode(view[i])
  }
  return chars.join('')
}

function bufferClone(buf) {
  if (buf.slice) {
    return buf.slice(0)
  } else {
    var view = new Uint8Array(buf.byteLength)
    view.set(new Uint8Array(buf))
    return view.buffer
  }
}

function Body() {
  this.bodyUsed = false

  this._initBody = function(body) {
    /*
      fetch-mock wraps the Response object in an ES6 Proxy to
      provide useful test harness features such as flush. However, on
      ES5 browsers without fetch or Proxy support pollyfills must be used;
      the proxy-pollyfill is unable to proxy an attribute unless it exists
      on the object before the Proxy is created. This change ensures
      Response.bodyUsed exists on the instance, while maintaining the
      semantic of setting Request.bodyUsed in the constructor before
      _initBody is called.
    */
    this.bodyUsed = this.bodyUsed
    this._bodyInit = body
    if (!body) {
      this._bodyText = ''
    } else if (typeof body === 'string') {
      this._bodyText = body
    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
      this._bodyBlob = body
    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
      this._bodyFormData = body
    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
      this._bodyText = body.toString()
    } else if (support.arrayBuffer && support.blob && isDataView(body)) {
      this._bodyArrayBuffer = bufferClone(body.buffer)
      // IE 10-11 can't handle a DataView body.
      this._bodyInit = new Blob([this._bodyArrayBuffer])
    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
      this._bodyArrayBuffer = bufferClone(body)
    } else {
      this._bodyText = body = Object.prototype.toString.call(body)
    }

    if (!this.headers.get('content-type')) {
      if (typeof body === 'string') {
        this.headers.set('content-type', 'text/plain;charset=UTF-8')
      } else if (this._bodyBlob && this._bodyBlob.type) {
        this.headers.set('content-type', this._bodyBlob.type)
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
      }
    }
  }

  if (support.blob) {
    this.blob = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return Promise.resolve(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(new Blob([this._bodyArrayBuffer]))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as blob')
      } else {
        return Promise.resolve(new Blob([this._bodyText]))
      }
    }

    this.arrayBuffer = function() {
      if (this._bodyArrayBuffer) {
        var isConsumed = consumed(this)
        if (isConsumed) {
          return isConsumed
        }
        if (ArrayBuffer.isView(this._bodyArrayBuffer)) {
          return Promise.resolve(
            this._bodyArrayBuffer.buffer.slice(
              this._bodyArrayBuffer.byteOffset,
              this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
            )
          )
        } else {
          return Promise.resolve(this._bodyArrayBuffer)
        }
      } else {
        return this.blob().then(readBlobAsArrayBuffer)
      }
    }
  }

  this.text = function() {
    var rejected = consumed(this)
    if (rejected) {
      return rejected
    }

    if (this._bodyBlob) {
      return readBlobAsText(this._bodyBlob)
    } else if (this._bodyArrayBuffer) {
      return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
    } else if (this._bodyFormData) {
      throw new Error('could not read FormData body as text')
    } else {
      return Promise.resolve(this._bodyText)
    }
  }

  if (support.formData) {
    this.formData = function() {
      return this.text().then(decode)
    }
  }

  this.json = function() {
    return this.text().then(JSON.parse)
  }

  return this
}

// HTTP methods whose capitalization should be normalized
var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

function normalizeMethod(method) {
  var upcased = method.toUpperCase()
  return methods.indexOf(upcased) > -1 ? upcased : method
}

function Request(input, options) {
  if (!(this instanceof Request)) {
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')
  }

  options = options || {}
  var body = options.body

  if (input instanceof Request) {
    if (input.bodyUsed) {
      throw new TypeError('Already read')
    }
    this.url = input.url
    this.credentials = input.credentials
    if (!options.headers) {
      this.headers = new Headers(input.headers)
    }
    this.method = input.method
    this.mode = input.mode
    this.signal = input.signal
    if (!body && input._bodyInit != null) {
      body = input._bodyInit
      input.bodyUsed = true
    }
  } else {
    this.url = String(input)
  }

  this.credentials = options.credentials || this.credentials || 'same-origin'
  if (options.headers || !this.headers) {
    this.headers = new Headers(options.headers)
  }
  this.method = normalizeMethod(options.method || this.method || 'GET')
  this.mode = options.mode || this.mode || null
  this.signal = options.signal || this.signal
  this.referrer = null

  if ((this.method === 'GET' || this.method === 'HEAD') && body) {
    throw new TypeError('Body not allowed for GET or HEAD requests')
  }
  this._initBody(body)

  if (this.method === 'GET' || this.method === 'HEAD') {
    if (options.cache === 'no-store' || options.cache === 'no-cache') {
      // Search for a '_' parameter in the query string
      var reParamSearch = /([?&])_=[^&]*/
      if (reParamSearch.test(this.url)) {
        // If it already exists then set the value with the current time
        this.url = this.url.replace(reParamSearch, '$1_=' + new Date().getTime())
      } else {
        // Otherwise add a new '_' parameter to the end with the current time
        var reQueryString = /\?/
        this.url += (reQueryString.test(this.url) ? '&' : '?') + '_=' + new Date().getTime()
      }
    }
  }
}

Request.prototype.clone = function() {
  return new Request(this, {body: this._bodyInit})
}

function decode(body) {
  var form = new FormData()
  body
    .trim()
    .split('&')
    .forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
  return form
}

function parseHeaders(rawHeaders) {
  var headers = new Headers()
  // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
  // https://tools.ietf.org/html/rfc7230#section-3.2
  var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
  // Avoiding split via regex to work around a common IE11 bug with the core-js 3.6.0 regex polyfill
  // https://github.com/github/fetch/issues/748
  // https://github.com/zloirock/core-js/issues/751
  preProcessedHeaders
    .split('\r')
    .map(function(header) {
      return header.indexOf('\n') === 0 ? header.substr(1, header.length) : header
    })
    .forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
  return headers
}

Body.call(Request.prototype)

function Response(bodyInit, options) {
  if (!(this instanceof Response)) {
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')
  }
  if (!options) {
    options = {}
  }

  this.type = 'default'
  this.status = options.status === undefined ? 200 : options.status
  this.ok = this.status >= 200 && this.status < 300
  this.statusText = options.statusText === undefined ? '' : '' + options.statusText
  this.headers = new Headers(options.headers)
  this.url = options.url || ''
  this._initBody(bodyInit)
}

Body.call(Response.prototype)

Response.prototype.clone = function() {
  return new Response(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Headers(this.headers),
    url: this.url
  })
}

Response.error = function() {
  var response = new Response(null, {status: 0, statusText: ''})
  response.type = 'error'
  return response
}

var redirectStatuses = [301, 302, 303, 307, 308]

Response.redirect = function(url, status) {
  if (redirectStatuses.indexOf(status) === -1) {
    throw new RangeError('Invalid status code')
  }

  return new Response(null, {status: status, headers: {location: url}})
}

var DOMException = global.DOMException
try {
  new DOMException()
} catch (err) {
  DOMException = function(message, name) {
    this.message = message
    this.name = name
    var error = Error(message)
    this.stack = error.stack
  }
  DOMException.prototype = Object.create(Error.prototype)
  DOMException.prototype.constructor = DOMException
}

function fetch(input, init) {
  return new Promise(function(resolve, reject) {
    var request = new Request(input, init)

    if (request.signal && request.signal.aborted) {
      return reject(new DOMException('Aborted', 'AbortError'))
    }

    var xhr = new XMLHttpRequest()

    function abortXhr() {
      xhr.abort()
    }

    xhr.onload = function() {
      var options = {
        status: xhr.status,
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || '')
      }
      options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
      var body = 'response' in xhr ? xhr.response : xhr.responseText
      setTimeout(function() {
        resolve(new Response(body, options))
      }, 0)
    }

    xhr.onerror = function() {
      setTimeout(function() {
        reject(new TypeError('Network request failed'))
      }, 0)
    }

    xhr.ontimeout = function() {
      setTimeout(function() {
        reject(new TypeError('Network request failed'))
      }, 0)
    }

    xhr.onabort = function() {
      setTimeout(function() {
        reject(new DOMException('Aborted', 'AbortError'))
      }, 0)
    }

    function fixUrl(url) {
      try {
        return url === '' && global.location.href ? global.location.href : url
      } catch (e) {
        return url
      }
    }

    xhr.open(request.method, fixUrl(request.url), true)

    if (request.credentials === 'include') {
      xhr.withCredentials = true
    } else if (request.credentials === 'omit') {
      xhr.withCredentials = false
    }

    if ('responseType' in xhr) {
      if (support.blob) {
        xhr.responseType = 'blob'
      } else if (
        support.arrayBuffer &&
        request.headers.get('Content-Type') &&
        request.headers.get('Content-Type').indexOf('application/octet-stream') !== -1
      ) {
        xhr.responseType = 'arraybuffer'
      }
    }

    if (init && typeof init.headers === 'object' && !(init.headers instanceof Headers)) {
      Object.getOwnPropertyNames(init.headers).forEach(function(name) {
        xhr.setRequestHeader(name, normalizeValue(init.headers[name]))
      })
    } else {
      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })
    }

    if (request.signal) {
      request.signal.addEventListener('abort', abortXhr)

      xhr.onreadystatechange = function() {
        // DONE (success or failure)
        if (xhr.readyState === 4) {
          request.signal.removeEventListener('abort', abortXhr)
        }
      }
    }

    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
  })
}

fetch.polyfill = true

if (!global.fetch) {
  global.fetch = fetch
  global.Headers = Headers
  global.Request = Request
  global.Response = Response
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var klaro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! klaro */ "./node_modules/klaro/dist/klaro.js");
/* harmony import */ var klaro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(klaro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_input_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/input-detection */ "./js/modules/input-detection.js");
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu */ "./js/modules/menu.js");
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_menu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/search */ "./js/modules/search.js");
/* harmony import */ var _modules_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/cookies */ "./js/modules/cookies.js");
/* harmony import */ var _modules_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/map */ "./js/modules/map.js");
/* harmony import */ var _modules_load_more__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/load-more */ "./js/modules/load-more.js");
/* harmony import */ var _modules_load_more__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_load_more__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_all__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/all */ "./js/dummy/components/all.js");
/* harmony import */ var _components_all__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_all__WEBPACK_IMPORTED_MODULE_7__);
// Polyfills
//import 'whatwg-fetch'; // polyfill fetch (<2017)
//import 'promise-polyfill/src/polyfill'; // polyfill promises for fetch (IE11)
//import 'core-js/stable'; // polyfill promises and ES2015 methods (mainly IE11) https://github.com/zloirock/core-js
// Libraries should be imported in a module using them
//import Vue from 'vue';
//import 'slick-carousel';
//import 'magnific-popup';
 // Custom modules






 //import './modules/googleanalytics'; // track links as events
//import { analytics } from './modules/analytics'; // methods for tracking custom events and pageviews


var $ = window.jQuery;
var config = {
  lang: 'en',
  acceptAll: true,
  mustConsent: false,
  disablePoweredBy: false,
  styling: {
    theme: ['light']
  },
  translations: {
    en: {
      privacyPolicyUrl: klaro_texts.privacyPolicy.url,
      privacyPolicy: {
        name: klaro_texts.privacyPolicy.name,
        text: klaro_texts.privacyPolicy.text
      },
      acceptAll: klaro_texts.buttons.acceptAll,
      acceptSelected: klaro_texts.buttons.acceptSelected,
      decline: klaro_texts.buttons.decline,
      ok: klaro_texts.buttons.ok,
      purposeItem: {
        service: klaro_texts.services.service
      },
      service: {
        purpose: klaro_texts.services.purpose,
        required: {
          title: klaro_texts.services.required
        },
        disableAll: {
          title: klaro_texts.services.disableAll.title,
          description: klaro_texts.services.disableAll.description
        }
      },
      //Bottom right popup
      consentNotice: {
        description: klaro_texts.notice.description,
        learnMore: klaro_texts.notice.learnMore
      },
      //Consent modal
      consentModal: {
        title: klaro_texts.modal.title,
        description: klaro_texts.modal.description
      },
      analytics: {
        title: klaro_texts.cookies.analytics.title,
        description: klaro_texts.cookies.analytics.description
      },
      required_cookies: {
        title: klaro_texts.cookies.required.title,
        description: klaro_texts.cookies.required.description
      },
      third_party: {
        title: klaro_texts.cookies.thirdParty.title,
        description: klaro_texts.cookies.thirdParty.description
      },
      purposes: {
        analytics: klaro_texts.cookies.analytics.purpose,
        required_cookies: klaro_texts.cookies.required.purpose,
        third_party: klaro_texts.cookies.thirdParty.purpose
      },
      contextualConsent: {
        description: klaro_texts.cookies.contextualConsent.description,
        acceptOnce: klaro_texts.cookies.contextualConsent.acceptOnce,
        acceptAlways: klaro_texts.cookies.contextualConsent.acceptAlways
      }
    }
  },
  services: [{
    name: "required_cookies",
    purposes: ["required_cookies"],
    required: true
  }, {
    name: "analytics",
    purposes: ["analytics"]
  }, {
    name: "third_party",
    purposes: ["third_party"]
  }]
}; // we assign the Klaro module to the window, so that we can access it in JS

window.klaro = klaro__WEBPACK_IMPORTED_MODULE_0__;
window.klaroConfig = config; // we set up Klaro with the config

klaro__WEBPACK_IMPORTED_MODULE_0__.setup(config);
$('.cookie-settings-toggle').on('click', function () {
  klaro.show();
});
$(document).ready(function () {
  $('.acf-map').each(function () {
    (0,_modules_map__WEBPACK_IMPORTED_MODULE_5__.initMap)($(this));
  });
}); //Article card image hover

$(document).on('mouseover', '.article-card .read-more', function (e) {
  $(this).parent('.article-card').find('.image').addClass('hover');
});
$(document).on('mouseleave', '.article-card .read-more', function (e) {
  $(this).parent('.article-card').find('.image').removeClass('hover');
}); //Article card image hover

$('.block-image-beside-content .read-more').on('mouseover', function (e) {
  $(this).closest('.block-image-beside-content').find('.image').addClass('hover');
});
$('.block-image-beside-content .read-more').on('mouseleave', function (e) {
  $(this).closest('.block-image-beside-content').find('.image').removeClass('hover');
}); //Article card image hover

$('.block-image-beside-content .image-link').on('mouseover', function (e) {
  $(this).closest('.block-image-beside-content').find('.read-more').addClass('hover');
});
$('.block-image-beside-content .image-link').on('mouseleave', function (e) {
  $(this).closest('.block-image-beside-content').find('.read-more').removeClass('hover');
});
}();
/******/ })()
;
//# sourceMappingURL=app.js.map