
    class Scene2 extends Phaser.Scene {

        constructor() {
          super('Scene2');
        }
    preload() {
		this.load.image('title', './assets/title.png');
	}
	create() {
        var title = this.add.image(400,200,'title');

        var text = this.add.text(300,500, 'Click Here to Start!');
        text.setInteractive({ useHandCursor: true });
        text.on('pointerdown',  function () {
            this.scene.switch('Scene1');
            timernum = 0;
          }, this);
        }
       
    update(){
    }
}

// export default TitleScene;
