<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" <?php language_attributes(); ?>>

<head profile="http://gmpg.org/xfn/11">
	
	<meta http-equiv="Content-Type" content="<?php bloginfo('html_type'); ?>; charset=<?php bloginfo('charset'); ?>" />
	
	<?php if (is_search()) { ?>
	   <meta name="robots" content="noindex, nofollow" /> 
	<?php } ?>

	<title>
		   <?php
		      if (function_exists('is_tag') && is_tag()) {
		         single_tag_title("Tag Archive for &quot;"); echo '&quot; - '; }
		      elseif (is_archive()) {
		         wp_title(''); echo ' Archive - '; }
		      elseif (is_search()) {
		         echo 'Search for &quot;'.wp_specialchars($s).'&quot; - '; }
		      elseif (!(is_404()) && (is_single()) || (is_page())) {
		         wp_title(''); echo ' - '; }
		      elseif (is_404()) {
		         echo 'Not Found - '; }
		      if (is_home()) {
		         bloginfo('name'); echo ' - '; bloginfo('description'); }
		      else {
		          bloginfo('name'); }
		      if ($paged>1) {
		         echo ' - page '. $paged; }
		   ?>
	</title>
	
	<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
	
	<link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>" type="text/css" />
	
	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />

	<?php if ( is_singular() ) wp_enqueue_script( 'comment-reply' ); ?>

	<?php wp_head(); ?>
	
</head>

<body <?php body_class(); ?>>
	
	<div id="page-wrap">

		<div id="top-bar">
			<div class="store-cta">
				<h4><a href="/store">24-Hour Pickle Store</a> <a href="/store/#!/~/cart" title="24-Hour Pickle Store"><i class="fa fa-shopping-cart"></i></a></h4>
			</div>
			<div class="social-links">
				<a href="https://www.facebook.com/Freestone-Pickles-43904669365/" target="blank" title="Freestone Pickles on Facebook"><i class="fa fa-facebook-official"></i></a>
				<a href="https://twitter.com/Freestone_Pickl" target="blank" title="Freestone Pickles on Twitter"><i class="fa fa-twitter"></i></a>
			</div>
			<div class="search-ecwid-desktop">
				<script type="text/javascript" src="https://app.ecwid.com/script.js?9323014" charset="utf-8"></script> <script type="text/javascript"> xSearch("id=my-search-9323014");</script>
			</div>
		</div>

		<div id="header">
			<div class="header-img"></div>
			<div class="header-img"><h1 class="logo"><a href="<?php echo get_option('home'); ?>/"><?php bloginfo('name'); ?></a></h1></div>
			<div class="header-img"></div>
			<div class="search-ecwid">
				<script type="text/javascript" src="https://app.ecwid.com/script.js?9323014" charset="utf-8"></script> <script type="text/javascript"> xSearch("id=my-search-9323014");</script>
			</div>
		</div>
		<div id="nav-toggle"><i class="fa fa-bars"></i> Menu</div>
		<div id="nav">
			<?php wp_nav_menu( array( 'theme_location' => 'primary' ) ); ?>
		</div>