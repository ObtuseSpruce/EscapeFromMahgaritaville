


var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: [SceneA, SceneB, SceneC]
};

var game = new Phaser.Game(config);