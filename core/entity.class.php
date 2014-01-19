<?php 
abstract class Entity {
    public function __construct($seed = false) {
        $this->seed = $seed;
        if($this->seed) {
            srand($this->seed);
        }
        $this->name = "";
        $this->description = "";
        $this->childrenTypes = array();
        $this->children = array();

        $this->minChildren = 5;
        $this->maxChildren = 10;

        $this->words = array(
                array(
                    'Unknown',
                ),
            );

        $this->descriptions = array(
                'Unknown',
            );
    }

    public function jsonLabel() {
        return $this->getName() . '|'
             . $this->getDescription();
    }

    public function getName() {
        if(!$this->name) {
            $this->setName();
        }
        return mb_strtolower($this->name);
    }

    public function getDescription() {
        if(!$this->description) {
            $this->setDescription();
        }
        return $this->description;
    }

    public function getChildren() {
        if(count($this->childrenTypes) < 1) {
            return null;
        }
        if(count($this->children) < $this->minChildren) {
            $this->setChildren();
        }
        return $this->children;
    }

    private function setChildren() {
        $count = count($this->childrenTypes);
        if($count < 1) {
            return;
        }
        $num = rand($this->minChildren, $this->maxChildren);
        for($i = 0; $i < $num; $i++) { 
            $index = rand(0, $count - 1);
            $class = $this->childrenTypes[$index];
            $child = new $class($this->seed);
            $this->children[] = $child;
        }
    }

    private function setName() {
        $this->name = '';
        foreach($this->words as $w) {
            $index = rand(0, count($w) - 1);
            $this->name .= ' ' . $w[$index];
        }
        $this->name = trim($this->name);
    }

    private function setDescription() {
        $index = rand(0, count($this->descriptions) - 1);
        $this->description = $this->descriptions[$index];
        $this->description = $this->parseText($this->description);
    }

    private function parseText($text) {
        $text = str_replace('%n', $this->getName(), $text);
        return $text;
    }
}
?>