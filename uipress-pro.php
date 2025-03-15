<?php
/*
Plugin Name: AdminUI Pro
Plugin URI: https://uipress.co
Version: 3.4.02
Description: Revamp your dashboard with AdminUI Pro! Customize every detail for a seamless and efficient backend experience.  Get it now!
Author: Festinger Vault
Text Domain: uipress-pro
Domain Path: /languages/
Author URI: https://festingervault.com
Requires at least: 6.0
Requires PHP: 7.4
License: GPL v2 or later
License URI: https://www.gnu.org/licenses/

AdminUI Pro is based and inspired on UiPress Pro, originally developed by Admin 2020. UiPress Pro is available at https://uipress.co, and is licensed under the GPL, version 2 or later (https://www.gnu.org/licenses/). Festinger Vault is not endorsed or affiliated with UiPress Pro, or Admin 2020, in any way. It is an independent platform dedicated to making open-source resources accessible while adhering to all licensing regulations.
*/

// If this file is called directly, abort.
!defined('ABSPATH') ? exit() : '';

function save_dummy_license_key() {
    // Define your dummy license key and instance ID
    $license_key = 'DUMMY-KEY-1234-5678-DUMMY-KEY-1234';
    $instance_id = 'DUMMY-INSTANCE-ID-12345678';

    // Get the existing 'uip-global-settings' option
    $options = get_option('uip-global-settings');

    // Check if the 'uip_pro' key is not set or is not an array, then initialize it
    if (!isset($options['uip_pro']) || !is_array($options['uip_pro'])) {
      $options['uip_pro'] = [];
    }

    // Set the 'uip_pro' key with the dummy license data
    $options['uip_pro']['key'] = $license_key;
    $options['uip_pro']['instance'] = $instance_id;

    // Update the 'uip-global-settings' option with the new dummy license data
    update_option('uip-global-settings', $options);
}

// Optionally, you can call the function to execute it
save_dummy_license_key();

define('uip_pro_plugin_version', '3.4.02');
define('uip_pro_plugin_name', 'UiPress Pro');
define('uip_pro_plugin_path_name', 'uipress-pro');
define('uip_pro_plugin_url', plugin_dir_url(__FILE__));
define('uip_pro_plugin_path', plugin_dir_path(__FILE__));

require uip_pro_plugin_path . 'admin/compiler.php';

$uipress = new uipress_pro_compiler();
$uipress->run();
