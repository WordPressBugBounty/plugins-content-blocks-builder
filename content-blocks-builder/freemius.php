<?php

/**
 * Freemius functions
 *
 * @package    BoldBlocks
 * @author     Phi Phan <mrphipv@gmail.com>
 * @copyright  Copyright (c) 2022, Phi Phan
 */
namespace BoldBlocks;

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;
if ( !function_exists( 'cbb_fs' ) ) {
    // Create a helper function for easy SDK access.
    function cbb_fs() {
        global $cbb_fs;
        if ( !isset( $cbb_fs ) ) {
            // Activate multisite network integration.
            if ( !defined( 'WP_FS__PRODUCT_11230_MULTISITE' ) ) {
                define( 'WP_FS__PRODUCT_11230_MULTISITE', true );
            }
            // Include Freemius SDK.
            require_once dirname( __FILE__ ) . '/vendor/freemius/start.php';
            $menu = array(
                'slug'    => 'edit.php?post_type=boldblocks_block',
                'account' => true,
            );
            if ( !fs_is_network_admin() ) {
                $menu['first-path'] = 'edit.php?post_type=boldblocks_block&page=cbb-settings';
            }
            $cbb_fs = fs_dynamic_init( array(
                'id'             => '11230',
                'slug'           => 'content-blocks-builder',
                'type'           => 'plugin',
                'public_key'     => 'pk_3cf9ea74cc57ecea98583ead30a34',
                'is_premium'     => false,
                'has_addons'     => false,
                'has_paid_plans' => true,
                'menu'           => $menu,
                'is_live'        => true,
            ) );
        }
        return $cbb_fs;
    }

    // Init Freemius.
    cbb_fs();
    // Disable some Freemius features.
    cbb_fs()->add_filter( 'show_deactivation_feedback_form', '__return_false' );
    cbb_fs()->add_filter( 'hide_freemius_powered_by', '__return_true' );
    // Disable opt-in option by default.
    cbb_fs()->add_filter( 'permission_diagnostic_default', '__return_false' );
    cbb_fs()->add_filter( 'permission_extensions_default', '__return_false' );
    // Hide annoying notices.
    cbb_fs()->add_filter(
        'show_admin_notice',
        function ( $show, $message ) {
            if ( in_array( $message['id'], array('license_activated', 'premium_activated', 'connect_account') ) ) {
                return false;
            }
            return $show;
        },
        10,
        2
    );
    // Signal that SDK was initiated.
    do_action( 'cbb_fs_loaded' );
}
if ( !function_exists( 'cbb_fs_custom_connect_message_on_update' ) ) {
    /**
     * Customize the opt-in messages
     *
     * @param string $message
     * @param string $user_first_name
     * @param string $plugin_title
     * @param string $user_login
     * @param string $site_link
     * @param string $freemius_link
     * @return string
     */
    function cbb_fs_custom_connect_message_on_update(
        $message,
        $user_first_name,
        $plugin_title,
        $user_login,
        $site_link,
        $freemius_link
    ) {
        return sprintf(
            __( 'Hey %1$s', 'content-blocks-builder' ) . ',<br>' . __( 'Thank you for using %2$s. We invite you to help the %2$s community by opting in to share some data about your usage of %2$s with us. This will help us make this plugin more compatible with your site and better at doing what you need it to. You can opt out at any time. And if you skip this, that\'s okay! %2$s will still work just fine.', 'content-blocks-builder' ),
            $user_first_name,
            '<b>' . $plugin_title . '</b>',
            '<b>' . $user_login . '</b>',
            $site_link,
            $freemius_link
        );
    }

    cbb_fs()->add_filter(
        'connect_message_on_update',
        __NAMESPACE__ . '\\cbb_fs_custom_connect_message_on_update',
        10,
        6
    );
}
if ( !function_exists( 'cbb_uninstall_cleanup' ) ) {
    /**
     * Clean up the plugin data
     *
     * @return void
     */
    function cbb_uninstall_cleanup() {
        // Delete options.
        delete_option( 'cbb_deployed_core_blocks' );
        delete_option( 'cbb_core_blocks_version' );
        delete_option( 'cbb_current_version' );
        delete_option( 'cbb_pattern_categories' );
        delete_option( 'cbb_pattern_categories_all_label' );
        delete_option( 'cbb_typography' );
        delete_option( 'cbb_enable_typography' );
        delete_option( 'cbb_use_bunny_fonts' );
        delete_option( 'cbb_breakpoints' );
        delete_option( 'cbb_is_maintenance' );
        delete_option( 'cbb_maintenance_ignore_slug' );
        delete_option( 'cbb_maintenance_enable_custom_page' );
        delete_option( 'cbb_maintenance_page_id' );
        // Legacy options.
        delete_option( 'boldblocks_deployed_core_blocks' );
        delete_option( 'boldblocks_core_blocks_version' );
        // Keep CBB data.
        $keep_data_setting = 'cbb_keep_data';
        if ( !get_option( $keep_data_setting ) ) {
            // Delete all CBB posts.
            $posts = get_posts( array(
                'posts_per_page' => -1,
                'post_type'      => ['boldblocks_block', 'boldblocks_variation', 'boldblocks_pattern'],
                'post_status'    => 'any',
            ) );
            foreach ( $posts as $post ) {
                wp_delete_post( $post->ID, true );
            }
            delete_option( $keep_data_setting );
        }
    }

    cbb_fs()->add_action( 'after_uninstall', __NAMESPACE__ . '\\cbb_uninstall_cleanup' );
}