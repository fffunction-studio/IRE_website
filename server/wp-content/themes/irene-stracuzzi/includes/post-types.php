<?php
// Register post types

// Register Custom Post Type Widget
function create_widget_cpt() {

	$labels = array(
		'name' => _x( 'Widgets', 'Post Type General Name', 'textdomain' ),
		'singular_name' => _x( 'Widget', 'Post Type Singular Name', 'textdomain' ),
		'menu_name' => _x( 'Widgets', 'Admin Menu text', 'textdomain' ),
		'name_admin_bar' => _x( 'Widget', 'Add New on Toolbar', 'textdomain' ),
		'archives' => __( 'Widget Archives', 'textdomain' ),
		'attributes' => __( 'Widget Attributes', 'textdomain' ),
		'parent_item_colon' => __( 'Parent Widget:', 'textdomain' ),
		'all_items' => __( 'All Widgets', 'textdomain' ),
		'add_new_item' => __( 'Add New Widget', 'textdomain' ),
		'add_new' => __( 'Add New', 'textdomain' ),
		'new_item' => __( 'New Widget', 'textdomain' ),
		'edit_item' => __( 'Edit Widget', 'textdomain' ),
		'update_item' => __( 'Update Widget', 'textdomain' ),
		'view_item' => __( 'View Widget', 'textdomain' ),
		'view_items' => __( 'View Widgets', 'textdomain' ),
		'search_items' => __( 'Search Widget', 'textdomain' ),
		'not_found' => __( 'Not found', 'textdomain' ),
		'not_found_in_trash' => __( 'Not found in Trash', 'textdomain' ),
		'featured_image' => __( 'Featured Image', 'textdomain' ),
		'set_featured_image' => __( 'Set featured image', 'textdomain' ),
		'remove_featured_image' => __( 'Remove featured image', 'textdomain' ),
		'use_featured_image' => __( 'Use as featured image', 'textdomain' ),
		'insert_into_item' => __( 'Insert into Widget', 'textdomain' ),
		'uploaded_to_this_item' => __( 'Uploaded to this Widget', 'textdomain' ),
		'items_list' => __( 'Widgets list', 'textdomain' ),
		'items_list_navigation' => __( 'Widgets list navigation', 'textdomain' ),
		'filter_items_list' => __( 'Filter Widgets list', 'textdomain' ),
	);
	$args = array(
		'label' => __( 'Widget', 'textdomain' ),
		'description' => __( 'Global site widgets', 'textdomain' ),
		'labels' => $labels,
		'menu_icon' => 'dashicons-megaphone',
		'supports' => array('title'),
		'taxonomies' => array(),
		'public' => false,
		'show_ui' => true,
		'show_in_menu' => true,
		'menu_position' => 5,
		'show_in_admin_bar' => false,
		'show_in_nav_menus' => false,
		'can_export' => true,
		'has_archive' => false,
		'hierarchical' => false,
		'exclude_from_search' => true,
		'show_in_rest' => true,
		'publicly_queryable' => false,
		'capability_type' => 'post',
	);
	register_post_type( 'widget', $args );

}

create_widget_cpt();


// Register Custom Post Type Project
function create_project_cpt() {

	$labels = array(
		'name' => _x( 'Projects', 'Post Type General Name', 'textdomain' ),
		'singular_name' => _x( 'Project', 'Post Type Singular Name', 'textdomain' ),
		'menu_name' => _x( 'Projects', 'Admin Menu text', 'textdomain' ),
		'name_admin_bar' => _x( 'Project', 'Add New on Toolbar', 'textdomain' ),
		'archives' => __( 'Project Archives', 'textdomain' ),
		'attributes' => __( 'Project Attributes', 'textdomain' ),
		'parent_item_colon' => __( 'Parent Project:', 'textdomain' ),
		'all_items' => __( 'All Projects', 'textdomain' ),
		'add_new_item' => __( 'Add New Project', 'textdomain' ),
		'add_new' => __( 'Add New', 'textdomain' ),
		'new_item' => __( 'New Project', 'textdomain' ),
		'edit_item' => __( 'Edit Project', 'textdomain' ),
		'update_item' => __( 'Update Project', 'textdomain' ),
		'view_item' => __( 'View Project', 'textdomain' ),
		'view_items' => __( 'View Projects', 'textdomain' ),
		'search_items' => __( 'Search Project', 'textdomain' ),
		'not_found' => __( 'Not found', 'textdomain' ),
		'not_found_in_trash' => __( 'Not found in Trash', 'textdomain' ),
		'featured_image' => __( 'Featured Image', 'textdomain' ),
		'set_featured_image' => __( 'Set featured image', 'textdomain' ),
		'remove_featured_image' => __( 'Remove featured image', 'textdomain' ),
		'use_featured_image' => __( 'Use as featured image', 'textdomain' ),
		'insert_into_item' => __( 'Insert into Project', 'textdomain' ),
		'uploaded_to_this_item' => __( 'Uploaded to this Project', 'textdomain' ),
		'items_list' => __( 'Projects list', 'textdomain' ),
		'items_list_navigation' => __( 'Projects list navigation', 'textdomain' ),
		'filter_items_list' => __( 'Filter Projects list', 'textdomain' ),
	);
	$args = array(
		'label' => __( 'Project', 'textdomain' ),
		'description' => __( '', 'textdomain' ),
		'labels' => $labels,
		'menu_icon' => 'dashicons-admin-post',
		'supports' => array('title', 'thumbnail'),
		'taxonomies' => array(),
		'public' => true,
		'show_ui' => true,
		'show_in_menu' => true,
		'menu_position' => 5,
		'show_in_admin_bar' => true,
		'show_in_nav_menus' => true,
		'can_export' => true,
		'has_archive' => false,
		'hierarchical' => false,
		'exclude_from_search' => false,
		'show_in_rest' => true,
		'publicly_queryable' => true,
		'capability_type' => 'post',
	);
	register_post_type( 'project', $args );

}
create_project_cpt();

// Register Custom Post Type Product
function create_product_cpt() {

	$labels = array(
		'name' => _x( 'Products', 'Post Type General Name', 'textdomain' ),
		'singular_name' => _x( 'Product', 'Post Type Singular Name', 'textdomain' ),
		'menu_name' => _x( 'Products', 'Admin Menu text', 'textdomain' ),
		'name_admin_bar' => _x( 'Product', 'Add New on Toolbar', 'textdomain' ),
		'archives' => __( 'Product Archives', 'textdomain' ),
		'attributes' => __( 'Product Attributes', 'textdomain' ),
		'parent_item_colon' => __( 'Parent Product:', 'textdomain' ),
		'all_items' => __( 'All Products', 'textdomain' ),
		'add_new_item' => __( 'Add New Product', 'textdomain' ),
		'add_new' => __( 'Add New', 'textdomain' ),
		'new_item' => __( 'New Product', 'textdomain' ),
		'edit_item' => __( 'Edit Product', 'textdomain' ),
		'update_item' => __( 'Update Product', 'textdomain' ),
		'view_item' => __( 'View Product', 'textdomain' ),
		'view_items' => __( 'View Products', 'textdomain' ),
		'search_items' => __( 'Search Product', 'textdomain' ),
		'not_found' => __( 'Not found', 'textdomain' ),
		'not_found_in_trash' => __( 'Not found in Trash', 'textdomain' ),
		'featured_image' => __( 'Featured Image', 'textdomain' ),
		'set_featured_image' => __( 'Set featured image', 'textdomain' ),
		'remove_featured_image' => __( 'Remove featured image', 'textdomain' ),
		'use_featured_image' => __( 'Use as featured image', 'textdomain' ),
		'insert_into_item' => __( 'Insert into Product', 'textdomain' ),
		'uploaded_to_this_item' => __( 'Uploaded to this Product', 'textdomain' ),
		'items_list' => __( 'Products list', 'textdomain' ),
		'items_list_navigation' => __( 'Products list navigation', 'textdomain' ),
		'filter_items_list' => __( 'Filter Products list', 'textdomain' ),
	);
	$args = array(
		'label' => __( 'Product', 'textdomain' ),
		'description' => __( '', 'textdomain' ),
		'labels' => $labels,
		'menu_icon' => 'dashicons-admin-post',
		'supports' => array('title'),
		'taxonomies' => array(),
		'public' => false,
		'show_ui' => true,
		'show_in_menu' => true,
		'menu_position' => 5,
		'show_in_admin_bar' => true,
		'show_in_nav_menus' => true,
		'can_export' => true,
		'has_archive' => false,
		'hierarchical' => false,
		'exclude_from_search' => false,
		'show_in_rest' => true,
		'publicly_queryable' => false,
		'capability_type' => 'post',
	);
	register_post_type( 'product', $args );

}
create_product_cpt();