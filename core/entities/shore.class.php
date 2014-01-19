<?php 
class Shore extends Entity {
    public function __construct($seed = false) {
        parent::__construct();
        $this->childrenTypes = array(
                        'Bay',
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
                    'Long',
                    'Sandy',
                    'Tranquil',
                ),
                array(
                    'Shore',
                ),
            );

        $this->descriptions = array(
                'you are tempted to take a walk along %n. ',
                '%n is interesting. ',
            );
    }
}
?>