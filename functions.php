<?php
	
	// Add RSS links to <head> section
	automatic_feed_links();
	
	// Load jQuery
	if ( !is_admin() ) {
	   wp_deregister_script('jquery');
	   wp_register_script('jquery', ("http://ajax.googleapis.com/ajax/libs/jquery/1.4.1/jquery.min.js"), false);
	   wp_enqueue_script('jquery');
	}

    // Load Scripts
    function add_theme_scripts() {
      // wp_enqueue_style( 'style', get_stylesheet_uri() );
     
      wp_enqueue_style( 'font-awesome', get_template_directory_uri() . '/css/font-awesome/css/font-awesome.min.css', array(), '1.1', 'all');
      // wp_enqueue_style( 'jquery-ui', get_template_directory_uri() . '/css/jquery-ui/minified/jquery-ui.min.css', array(), '1.1', 'all');
     
      wp_enqueue_script( 'bundle.js', get_template_directory_uri() . '/build/bundle.js', 1.1, true);
      // wp_enqueue_script( 'jquery-ui.js', get_template_directory_uri() . '/js/jquery-ui.min.js', 1.1, true);

    }
    add_action( 'wp_enqueue_scripts', 'add_theme_scripts' );
	
	// Clean up the <head>
	function removeHeadLinks() {
    	remove_action('wp_head', 'rsd_link');
    	remove_action('wp_head', 'wlwmanifest_link');
    }
    add_action('init', 'removeHeadLinks');
    remove_action('wp_head', 'wp_generator');
    
    if (function_exists('register_sidebar')) {
    	register_sidebar(array(
    		'name' => 'Sidebar Widgets',
    		'id'   => 'sidebar-widgets',
    		'description'   => 'These are widgets for the sidebar.',
    		'before_widget' => '<div id="%1$s" class="widget %2$s">',
    		'after_widget'  => '</div>',
    		'before_title'  => '<h2>',
    		'after_title'   => '</h2>'
    	));
    }

    // Add Navigation Menu
    add_action( 'after_setup_theme', 'register_my_menu' );
    function register_my_menu() {
      register_nav_menu( 'primary', __( 'Primary Menu', 'freestonepickles' ) );
    }

?>