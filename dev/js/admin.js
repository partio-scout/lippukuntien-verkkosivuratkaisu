/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./js/admin.js ***!
  \*********************/
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var $ = window.jQuery;
$(document).ready(function () {
  //Edit WYSIWYG heading levels for specific editor
  if ((typeof acf === "undefined" ? "undefined" : _typeof(acf)) != undefined) {
    acf.add_filter('wysiwyg_tinymce_settings', function (mceInit, id, field) {
      // do something to mceInit
      if (field && field[0] && field[0].dataset.name === 'footer_text_area') {
        mceInit.block_formats = 'Paragraph=p;Heading=h2';
      } // return


      return mceInit;
    });
  }
}); //Documentation for block-api https://developer.wordpress.org/block-editor/developers/block-api/
// Deregister embed variations
// They are not necessary and there are so many that custom blocks drop below fold

wp.domReady(function () {
  var allowedEmbedBlocks = ['vimeo', 'youtube'];

  if (wp.blocks && wp.blocks.getBlockVariations('core/embed')) {
    wp.blocks.getBlockVariations('core/embed').forEach(function (blockVariation) {
      if (-1 === allowedEmbedBlocks.indexOf(blockVariation.name)) {
        wp.blocks.unregisterBlockVariation('core/embed', blockVariation.name);
      }
    });
  }

  wp.blocks.registerBlockStyle('core/paragraph', {
    name: 'ingress',
    label: 'Ingressi'
  });
  wp.blocks.registerBlockStyle('core/heading', {
    name: 'primary',
    label: 'Pääväri'
  });
  wp.blocks.registerBlockStyle('core/heading', {
    name: 'secondary',
    label: 'Apuväri'
  });
  wp.blocks.registerBlockStyle('core/heading', {
    name: 'secondary',
    label: 'Apuväri'
  });
  wp.blocks.unregisterBlockStyle('core/button', 'outline');
  wp.blocks.unregisterBlockStyle('core/button', 'fill');
  wp.blocks.unregisterBlockStyle('core/table', 'stripes');
  wp.blocks.unregisterBlockStyle('core/table', 'regular');
  wp.blocks.unregisterBlockStyle('core/image', 'rounded');
  wp.blocks.unregisterBlockStyle('core/quote', 'large');
  wp.blocks.registerBlockStyle('core/button', {
    name: 'outline',
    label: 'Reunukset'
  }); //Change admin featured image preview size

  var withImageSize = function withImageSize(size, mediaId, postId) {
    return 'full';
  };

  wp.hooks.addFilter('editor.PostFeaturedImage.imageSize', 'my-plugin/with-image-size', withImageSize);
}); //Define ACF color picker swatches

if ((typeof acf === "undefined" ? "undefined" : _typeof(acf)) != undefined) {
  acf.add_filter('color_picker_args', function (args, $field) {
    args.palettes = ['#253764', '#1c769d', '#e9c46a', '#0a0a0a', '#2f575d', '#1e2c50', '#1a622d', '#2a2a2a', '#8c2a2d', '#333333'];
    return args;
  });
}
/*
// Register new block style that can be changed from Block-editor
wp.blocks.registerBlockStyle( 'core/paragraph', {
    name: 'ingress',
    label: 'Ingress'
} );
*/

/*
// Unregister core block styles
wp.domReady( function() {
    wp.blocks.unregisterBlockStyle( 'core/quote', 'large' );
} );
*/
// Unregister core block patterns. Core pattern list can be found at wp-includes/block-patterns.php

/*
wp.domReady( function() {
    unregister_block_pattern( 'core/two-buttons' );
    unregister_block_pattern_category( 'buttons' );
});
*/
// Example: Change default columns

/*
wp.domReady( function() {

    // Unregister default columns
    //wp.blocks.unregisterBlockVariation('core/columns', 'two-columns-equal');
    wp.blocks.unregisterBlockVariation('core/columns', 'two-columns-one-third-two-thirds');
    wp.blocks.unregisterBlockVariation('core/columns', 'two-columns-two-thirds-one-third');
    //wp.blocks.unregisterBlockVariation('core/columns', 'three-columns-equal');
    wp.blocks.unregisterBlockVariation('core/columns', 'three-columns-wider-center');

    // Create icon object for custom column
    const el = wp.element.createElement;
    const SVG = wp.primitives.SVG;
    const path = el('path', { fillRule: "evenodd",
                              clipRule: "evenodd",
                              d: "M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H30V34H39ZM28 34H9V14H28V34Z" });
    const icon = el(SVG, { width: 48, height: 48, viewBox: '0 0 48 48'}, path);

    // Register custom column as default
    wp.blocks.registerBlockVariation( 'core/columns', {
        name: 'three-one-column',
        title: '70 / 30',
        isDefault: true,
        innerBlocks: [
            [ 'core/column', { width: 70, className: 'is-content' } ],
            [ 'core/column', { width: 30, className: 'is-sidebar' } ]
        ],
        icon: icon,
        scope: [ 'block' ],
        attributes: { className: 'is-style-three-one' }
    } );
});
*/
/******/ })()
;
//# sourceMappingURL=admin.js.map