var SceneC = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function SceneC ()
    {
        Phaser.Scene.call(this, { key: 'sceneC' });
    },

    preload: function ()
    {
        this.load.image('mech', './assets/racetrack1.png');
    },

    create: function ()
    {
        this.add.sprite(Phaser.Math.Between(0, 800), 300, 'mech');

        this.input.once('pointerdown', function (event) {

            console.log('From SceneC to SceneA');

            this.scene.start('sceneA');

        }, this);
    }

});
