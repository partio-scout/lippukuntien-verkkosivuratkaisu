/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./js/admin.js ***!
  \*********************/
var $ = window.jQuery;
$(document).ready(function () {}); //Documentation for block-api https://developer.wordpress.org/block-editor/developers/block-api/
// Deregister embed variations
// They are not necessary and there are so many that custom blocks drop below fold

wp.domReady(function () {
  var allowedEmbedBlocks = ['vimeo', 'youtube'];
  wp.blocks.getBlockVariations('core/embed').forEach(function (blockVariation) {
    if (-1 === allowedEmbedBlocks.indexOf(blockVariation.name)) {
      wp.blocks.unregisterBlockVariation('core/embed', blockVariation.name);
    }
  });
});
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