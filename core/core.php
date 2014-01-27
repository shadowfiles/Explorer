<?php 
include('config.php');
include('entity.class.php');
foreach (glob("entities/*.php") as $filename) {
    include($filename);
}
?>