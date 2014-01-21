<?php 
$page = $_GET['p'];

if(!$page) {
  $page = 'index';
}


if(file_exists('templates/' . $page . '.php')) {
  include('templates/' . $page . '.php');
} else {
  include('templates/404.php');
}
?>