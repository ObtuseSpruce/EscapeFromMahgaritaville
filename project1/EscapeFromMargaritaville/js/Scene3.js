
    class Scene3 extends Phaser.Scene {

        constructor() {
          super('Scene3');
        }
    preload() {
		this.load.image('title', './assets/title.png');
	}
	create() {
        var title = this.add.image(400,200,'title');

        var restarttext = this.add.text(300,500, 'restart the game!');
        restarttext.setInteractive({ useHandCursor: true });
        restarttext.on('pointerdown',  function () {
            this.scene.switch('Scene2');
          }, this);
        var scoretext = this.add.text(300, 400, (Math.floor((timernum * .02) * 100) / 100));
        timernum = 0
}

    update(){
    }
}

// export default TitleScene;
