class Scene1 extends Phaser.Scene {

    constructor() {
      super('Scene1');
    }


preload() {
        this.load.image('player1', "./assets/car.png")
        this.load.image('wall1', './assets/wall1.png')
        this.load.tilemapTiledJSON('racetrack', './assets/racetrack5.json');
        this.load.image('mapTiles', './assets/spritesheet_tiles.png')
        this.load.image('finish', './assets/finishline.png')
    }

create() {

        timerInt = this.time.addEvent({ delay: 1, callback: onEvent, callbackScope: this, loop: true });

        var camera = this.cameras.main.setViewport(100,100, 700, 600)
        camera.setBounds(0, 0, 2560, 2048);
        this.physics.world.setBounds(0, 0, 2560, 2048);

        

        //generates player movement key event listners
        cursors = this.input.keyboard.createCursorKeys();
        racetrack = this.make.tilemap({ key: 'racetrack'})
        var tileSet = racetrack.addTilesetImage('spritesheet_tiles', 'mapTiles')
        var layer = racetrack.createStaticLayer('grass', tileSet, 0, 0)
        var layer2 = racetrack.createStaticLayer('barriers', tileSet, 0 ,0)
        finishline = this.physics.add.image(1400, 225, 'finish')
        //generates player at x,y(20, 20)
        player = this.physics.add.image(1500, 250, 'player1').setScale(0.5);

        //keeps player within the bounds of the world
        player.setCollideWorldBounds(true);
        player.setDamping(true);
        player.setDrag(.99);
        player.setMaxVelocity(900);
        player.setBounce(.1)
        
        // layer2.setCollisionByProperty({ bump: true })
        layer2.setCollision([1497, 1498, 1499, 1500, 1497, 1498, 1499, 1500,
            1497, 1498, 1499, 1500, 1217, 644, 1289, 716, 1361, 788, 1433,
             860, 1997, 1998, 1999, 2000])
        this.physics.add.collider(player, layer2)
        camera.startFollow(player, true, 0.8, 0.8)

        player.body.onOverlap = true;
        this.physics.world.on('overlap', function () {
            this.scene.restart()
            this.scene.switch('Scene3');
            scoreUpdate()
          }, this);
        this.physics.add.overlap(player, finishline)
        
        t = this.add.text(200, 500, { font: "32px Arial", fill: "#ffffff", align: "center" });
        t.setScrollFactor(0);
        

    }
    
 update () {

        // t.setText('time elapsed ' + timerInt.getProgress().toString().substr(0, 4));
        t.setText('time elapsed ' + (Math.floor((timernum * .02) * 100) / 100));


       //player movement
        if (cursors.up.isDown)
    {
        this.physics.velocityFromRotation(player.rotation, 600, player.body.acceleration);
    }
    else
    {
        player.setAcceleration(0);
    }

    if (cursors.left.isDown)
    {
        player.setAngularVelocity(-100);
    }
    else if (cursors.right.isDown)
    {
        player.setAngularVelocity(100);
    }
    else
    {
        player.setAngularVelocity(0);
    }
}

}