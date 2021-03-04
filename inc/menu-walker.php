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
        $class_names = '';

        if(!empty($object->classes)) {
            $class_names = implode(' ', $object->classes);
        }
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


class ID_menu_walker_page extends Walker_Page {
    var $tree_type = 'page';

    // Tell Walker where to inherit it's parent and id values
    var $db_fields = array(
        'parent' => 'post_parent',
        'id'     => 'ID',
    );
    
    public function start_lvl( &$output, $depth = 0, $args = array() ) {
        $classes = array( 'sub-menu' );
        $class_names = join( ' ', apply_filters( 'nav_menu_submenu_css_class', $classes, $args, $depth ) );
        $class_names = $class_names ? ' class="' . esc_attr( $class_names ) . '"' : '';

        $output .= sprintf( "\n%s<ul%s>",
            '<button class="sub-menu-toggle" aria-label="' . __('Avaa alavalikko', 'ID') . '"></button>',
            $class_names                           
        );
    }
    
    public function start_el( &$output, $object, $depth = 0, $args = array(), $current_page = 0 ) {
        $css_class = array( 'menu-item', 'menu-item-' . $object->ID );

        if ( isset( $args['pages_with_children'][ $object->ID ] ) ) {
            $css_class[] = 'menu-item-has-children';
        }
 
        if ( ! empty( $current_page ) ) {
            $_current_page = get_post( $current_page );
 
            if ( $_current_page && in_array( $object->ID, $_current_page->ancestors, true ) ) {
                $css_class[] = 'current-menu-ancestor';
            }
 
            if ( $object->ID == $current_page ) {
                $css_class[] = 'current-menu-item';
            } elseif ( $_current_page && $object->ID === $_current_page->post_parent ) {
                $css_class[] = 'current-menu-parent';
            }
        } elseif ( get_option( 'page_for_posts' ) == $object->ID ) {
            $css_class[] = 'current-menu-parent';
        }

        $css_classes = implode( ' ', apply_filters( 'page_css_class', $css_class, $object, $depth, $args, $current_page ) );
        $css_classes = $css_classes ? ' class="' . esc_attr( $css_classes ) . '"' : '';
        
        $aria_current = $object->ID == get_the_ID() ? ' aria-current="page"' : '';

        $link = '<a href="' . get_permalink($object->ID) . '"' . $aria_current . '>' . $object->post_title . '</a>';
        
        $output .= sprintf( "\n<li %s>%s",
            $css_classes,
            $link
        );
    }


    public function end_el( &$output, $page, $depth = 0, $args = array() ) {
        $output .= "</li>";
    }
 
    
    public function end_lvl( &$output, $depth = 0, $args = array() ) {
        $output .= "</ul>";
    }

}