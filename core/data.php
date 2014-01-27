<?php 
include('core.php');

//Generates a tree based on the island hierarchy
function traverseIslandTree($root) {
    $accum = '"' . $root->jsonLabel() . '" : ';
    if($root->getChildren()) {
        foreach($root->getChildren() as $child) {
            $accum .= traverseIslandTree($child) . ', ';
        }
    }
    return $accum . '""';
}

$root = new Island();
print_r(traverseIslandTree($root));
?>