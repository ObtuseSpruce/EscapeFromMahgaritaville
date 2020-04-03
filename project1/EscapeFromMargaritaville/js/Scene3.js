
    class Scene3 extends Phaser.Scene {

        constructor() {
          super('Scene3');
        }
    preload() {
		this.load.image('title', './assets/title.png');
	}
	create() {

        // this.registry.destroy();
        // this.events.off();
        var title = this.add.image(400,200,'title');

        var restarttext = this.add.text(300,500, 'restart the game!');
        restarttext.setInteractive({ useHandCursor: true });
        restarttext.on('pointerdown',  function () {
            this.scene.switch('Scene2');
          }, this);
          console.log(score)
          scoretext = this.add.text(300, 400, " ");
          

          // this.scene.restart();

        // timernum = 0
}

    update(){
      score = (Math.floor((timernum * .02) * 100) / 100)
      scoretext.setText(score)
      // timernum = 0;
      // score = 0
      console.log(score)
    }
}

// export default TitleScene;
