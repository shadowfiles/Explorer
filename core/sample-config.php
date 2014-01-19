<?php 
//Rename this to config.php
error_reporting(E_ALL);
ini_set ( "display_errors", "1");
ini_set ( "display_startup_errors", "1");
ini_set ( "html_errors", "1");
ini_set ( "docref_root", "http://www.php.net/");
ini_set ( "error_prepend_string", "<div style='color:red; font-family:verdana; border:1px solid red; padding:5px;'>");
ini_set ( "error_append_string", "</div>");

define('MYSQL_HOST', 'localhost');
define('MYSQL_DB', 'explorer');
define('MYSQL_USER', '');
define('MYSQL_PASSWORD', '');
?>