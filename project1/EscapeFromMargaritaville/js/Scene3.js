
    class Scene3 extends Phaser.Scene {

        constructor() {
          super('Scene3');
        }
    preload() {
		this.load.image('title', './assets/title.png');
	}
	create() {
        var title = this.add.image(400,200,'title');

        var text = this.add.text(300,500, 'restart the game!');
        text.setInteractive({ useHandCursor: true });
        text.on('pointerdown',  function () {
            this.scene.switch('Scene2');
          }, this);
        }

    update(){
    }
}

// export default TitleScene;
