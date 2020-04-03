
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
          scoreName = this.add.text(300, 400, " ");
          scoretext = this.add.text(300, 425, " ")
          currentHighscore = this.add.text(300, 450, " ")

        }
        
  update(){
      scoreName.setText("Name: " + name)
      scoretext.setText("Score: " + score + " secs")
      currentHighscore.setText( "current highscore: " + LS_SCORE)
      // console.log("highscore name: ", name,  "/n your score", score)
    }
}

// export default TitleScene;
