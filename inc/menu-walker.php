<?php
class ID_menu_walker extends Walker {

    // Tell Walker where to inherit it's parent and id values
    var $db_fields = array(
        'parent' => 'menu_item_parent', 
        'id'     => 'db_id' 
    );
    
    function start_lvl( &$output, $depth = 0, $args = null ) {  
        $classes = array( 'sub-menu' );
        $class_names = join( ' ', apply_filters( 'nav_menu_submenu_css_class', $classes, $args, $depth ) );
        $class_names = $class_names ? ' class="' . esc_attr( $class_names ) . '"' : '';

        $output .= sprintf( "\n%s<ul%s>",
                '<button class="sub-menu-toggle" aria-label="' . __('Avaa alavalikko', 'ID') . '"></button>',
                $class_names                           
            );
    }
    
    function start_el( &$output, $object, $depth = 0, $args = array(), $current_object_id = 0 ) {
        $class_names = implode(' ', $object->classes);
        $class_names = $class_names ? ' class="' . esc_attr( $class_names ) . '"' : '';
        
        $aria_current = $object->current ? ' aria-current="page"' : '';
        
        $link = '<a href="' . $object->url . '"' . $aria_current . '>' . $object->title . '</a>';
        
        $output .= sprintf( "\n<li %s>%s",
                $class_names,
                $link
            );
    }
    
    function end_el( &$output, $item, $depth = 0, $args = null ) {
        $output .= "</li>";
    }
    
    function end_lvl( &$output, $depth = 0, $args = null ) {
        $output .= "</ul>";
    }

}