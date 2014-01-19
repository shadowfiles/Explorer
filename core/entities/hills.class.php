<?php 
class Hills extends Entity {
    public function __construct($seed = false) {
        parent::__construct();
        $this->childrenTypes = array(
                        
                    );
        $this->words = array(
                array(
                    'The',
                ),
                array(
                    'Mysterious',
                    'Suspicious',
                    'Enchanted',
                    'Beautiful',
                    'Lonely',
                ),
                array(
                    'Hills',
                ),
            );

        $this->descriptions = array(
                'wind blows across %n. ',
                '%n beckons your curiosity. ',
            );
    }
}
?>