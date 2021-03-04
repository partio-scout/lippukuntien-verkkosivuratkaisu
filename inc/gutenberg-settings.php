<?php
//Theme support
add_theme_support( 'align-wide' );
add_theme_support( 'align-full' );
remove_theme_support( 'core-block-patterns' ); //WP version > 5.5
add_theme_support('editor-color-palette', []);
add_theme_support( 'editor-gradient-presets', [] );
add_theme_support( 'disable-custom-gradients' );
add_theme_support( 'disable-custom-colors' );


//Allowed Gutenberg blocks. Full list of core/blocks found at the bottom of this file
add_filter( 'allowed_block_types', 'allowed_block_types', 10, 2 );
function allowed_block_types() {
    $block_types =  array( 
        'core/paragraph',
        'core/image',
        //'core/video', // requires video file or url, does not support embedding
        'core/heading',
        'core/list',
        'core/quote',
        'core/freeform',
        'core/subhead',
        'core/gallery',
        'core/table',
        'core/file',
        'core/embed',
        //'core/shortcode'
        'core/buttons',
        'core/columns',
        'core/block',
        'gravityforms/form',
        'gravityforms/block',
        'gravityforms/mailchimp',
    );

    // Include blocks from components installed from library
    if (function_exists('ID_component_list')) {
        $components = ID_component_list();
        foreach ($components as $component) {
            $block_types[] = 'acf/' . $component;
        }
    }

    return $block_types;
}


function ID_allowed_inner_blocks()
{

  $all_blocks = allowed_block_types();
  $allowed_blocks = array();

  //filter blocks
  foreach ($all_blocks as $blockname) {
    if (strpos($blockname, 'acf/') === 0) {
      continue;
    }

    $allowed_blocks[] = $blockname;
  }

  return $allowed_blocks;
}


// Custom Gutenberg block categories
function ID_custom_block_categories( $categories ) {
    //Custom categories have to be merged to $categories because it contains all default Gutenberg block categories. If you don't do this default categories will be overwritten by new custom categories!
    return array_merge(
        $categories,
        array(
            array(
                'slug' => 'acf-blocks',
                'title' => __('Räätälöidyt elementit', 'ID'),
            ),
        )
    );
}
add_filter( 'block_categories', 'ID_custom_block_categories', 10, 2 );



//Register ACF Gutenberg blocks
add_action('acf/init', 'ID_acf_init');
function ID_acf_init()
{
  if (function_exists('acf_register_block')) {
    //Register ACF Gutenberg blocks
    //Remember to add blocks in allowed_block_types() function or they won't be visible! Example: 'acf/block-slug'

    //ID_register_block($block_slug, $block_name, $block_category, $block_keywords[])

    // Include blocks from components installed from library
    if (function_exists('ID_component_list')) {
      $components = ID_component_list();
      $themedir = get_stylesheet_directory();
      foreach ($components as $component) {
        $info = ID_component_info($component);
        $componentfile = "{$themedir}/components/{$component}/{$component}.php";

        $args = array(
          'name' => $component,
          'title' => __($info['Component']),
          'description' => __($info['Description']),
          'render_template' => $componentfile,
          'category' => 'acf-blocks',
          'icon' => empty($info['Icon']) ? 'align-left' : $info['Icon'],
          'keywords' => $info['Keywords'],
        );


        //error_log($component);
        //error_log(json_encode($info));

        //Use comma separated list to limit where block can be inserted. For example you can only show custom block inside of another custom block or core/columns
        if(array_key_exists('Parent', $info)) {
          $parents = explode(", ", $info['Parent']);
          $args['parent'] = $parents;
        }

        if ($info['InnerBlocks']) {
          $args['supports'] = array(
            'align' => false,
            'mode' => false,
            'jsx' => true
          );
          $args['example'] = array(
            'attributes' => array(
              'mode' => 'preview',
              'data' => array('preview' => true),
            )
          );
          $args['mode'] = 'auto';

          //Possible modes, auto, preview, edit
          //auto: Changes mode between preview and field groups automatically
          //preview: Always in preview mode, field groups in sidebar
          //edit: Always in field group mode
          if(array_key_exists('InnerBlocksMode', $info)) {
            $args['mode'] = $info['InnerBlocksMode'];           
          }
        } else {
          $args['example'] = array(
            'attributes' => array(
              'mode' => 'preview',
              'data' => array('preview' => true),
            )
          );
          $args['supports'] = array(
            'align' => false,
            'mode' => false,
            'jsx' => false
          );
          $args['mode'] = 'auto';
        }

        acf_register_block_type($args);
      }
    }
  }
}  



//Register function for ACF Gutenberg blocks
function ID_register_block($block_slug, $block_name, $block_category = 'acf-blocks', $block_keywords = array()){    
    acf_register_block(array(
                           'name'            => $block_slug,
                           'title'           => $block_name,
                           'description'     => __('A custom block.'),
                           'render_callback' => 'ID_acf_block_render_callback',
                           'category'        => $block_category,
                           'icon'            => 'admin-comments',
                           'keywords'        => $block_keywords, 
                           ));
}


//Render ACF Gutenberg blocks
function ID_acf_block_render_callback( $block ) {
    $slug = str_replace('acf/', '', $block['name']);  
    
    if( file_exists( get_theme_file_path("/template-parts/gutenberg-{$slug}.php") ) ) {
        include( get_theme_file_path("/template-parts/gutenberg-{$slug}.php") );
    }
    
    // get_template_part( 'template-parts/gutenberg', $slug );
}





/*
You can find full list of blocks by running following javascript at developer tools console when you are on page that has block editor open

// grab all block types
const types = wp.blocks.getBlockTypes();

// filter to just the core blocks
const core_blocks = types.filter(
    type => type.name.startsWith( 'core/' )
);

// grab just the names
const block_names = core_blocks.map( type => type.name );

// display in the console
console.log( block_names );


"core/paragraph"
"core/image"
"core/heading"
"core/gallery"
"core/list"
"core/quote"
"core/shortcode"
"core/archives"
"core/audio"
"core/button"
"core/buttons"
"core/calendar"
"core/categories"
"core/code"
"core/columns"
"core/column"
"core/cover"
"core/embed"
"core/file"
"core/group"
"core/freeform"
"core/html"
"core/media-text"
"core/latest-comments"
"core/latest-posts"
"core/missing"
"core/more"
"core/nextpage"
"core/preformatted"
"core/pullquote"
"core/rss"
"core/search"
"core/separator"
"core/block"
"core/social-links"
"core/social-link"
"core/spacer"
"core/subhead"
"core/table"
"core/tag-cloud"
"core/text-columns"
"core/verse"
"core/video"
*/


function ID_register_page_template() {
    $post_type_object = get_post_type_object( 'page' );
    $post_type_object->template = array(
        array( 'acf/block-content-with-sidebar', array(          
        )),
        array( 'core/paragraph', array()),
    );
}
add_action( 'init', 'ID_register_page_template' );