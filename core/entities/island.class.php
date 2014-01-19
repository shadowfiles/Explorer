<?php 
class Island extends Entity {
    public function __construct($seed = false) {
        parent::__construct();
        $this->childrenTypes = array(
                        'Shore',
                        'Forest',
                        'Hills',
                        'Mountain',
                        'Village',
                        'Swamp',
                        'River',
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
                    'Desolate',
                ),
                array(
                    'Island',
                ),
            );

        $this->descriptions = array(
                'wind blows across %n. ',
                '%n beckons your curiosity. ',
            );
    }
}
?>